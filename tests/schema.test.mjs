import { PGlite } from '@electric-sql/pglite';
import fs from 'node:fs';
const schema = fs.readFileSync(new URL('../supabase/schema.sql', import.meta.url), 'utf8');
const db = new PGlite();
let pass = 0, fail = 0;
const ok = (name, cond, extra = '') => { cond ? pass++ : fail++; console.log((cond ? 'PASS ' : 'FAIL ') + name + (extra ? '  → ' + extra : '')); };
const as = async (role, uid) => { await db.exec(`reset role; select set_config('request.jwt.claim.sub', '${uid || ''}', false); ${role ? `set role ${role};` : ''}`); };
const q = async (sql, p) => (await db.query(sql, p)).rows;
const fails = async (name, sql) => { try { const r = await db.query(sql); ok(name, false, 'expected error, got ' + JSON.stringify(r.rows).slice(0, 120) + ' affected=' + r.affectedRows); } catch (e) { ok(name, true, e.message.slice(0, 70)); } };

await db.exec(`
  create role anon nologin; create role authenticated nologin;
  create schema auth;
  create table auth.users (id uuid primary key default gen_random_uuid(), email text, raw_user_meta_data jsonb, created_at timestamptz default now());
  create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid $$;
  grant usage on schema auth, public to anon, authenticated;
  grant execute on function auth.uid() to anon, authenticated;
  alter default privileges in schema public grant all on tables to anon, authenticated;
  alter default privileges in schema public grant execute on functions to anon, authenticated;
`);
await db.exec(schema); await db.exec(schema);
ok('schema runs twice', true);

const [a] = await q(`insert into auth.users (email, raw_user_meta_data) values ('aiko@example.com', '{"display_name":"Aiko","is_public":true,"jlpt":"N4","start_level":"N4"}') returning id`);
const [b] = await q(`insert into auth.users (email, raw_user_meta_data) values ('ben@example.com', '{"display_name":"  Ben the Extremely Long Named Conductor  ","is_public":false}') returning id`);
const [c] = await q(`insert into auth.users (email, raw_user_meta_data) values ('chika.sato@example.com', null) returning id`);
const profs = await q(`select display_name, is_public, jlpt from public.profiles order by email`);
ok('signup trigger makes profiles', profs.length === 3, JSON.stringify(profs));
ok('name trimmed to 24, default name from email', profs[1].display_name.length <= 24 && profs[2].display_name === 'Chika.Sato');

// --- user A
await as('authenticated', a.id);
const [l1] = await q(`select public.log_login('signup', '{"timezone":"Asia/Kolkata","platform":"MacIntel","user_agent":"UA","app_version":"6.0"}') as r`);
ok('log_login returns profile', l1.r.profile.display_name === 'Aiko' && l1.r.admin === false, JSON.stringify(l1.r).slice(0, 90));
await q(`select public.log_login('login', '{}')`);
ok('login events rate-limited to 1/min', (await q(`select count(*)::int n from public.login_events`))[0].n === 1);
const up = await db.query(`update public.profiles set xp = 1200, user_level = 5, streak = 4, last_study_day = current_date, words_mastered = 40, avatar = '{"hat":"crown"}' where id = '${a.id}'`);
ok('A updates own stats', up.affectedRows === 1);
await fails('A cannot set hidden', `update public.profiles set hidden = true where id = '${a.id}'`);
await fails('A cannot change email', `update public.profiles set email = 'x@y.z' where id = '${a.id}'`);
ok("A cannot update B's profile", (await db.query(`update public.profiles set xp = 9 where id = '${b.id}'`)).affectedRows === 0);
ok('A sees only own profile', (await q(`select id from public.profiles`)).length === 1);
await q(`insert into public.progress (user_id, data, client_ts) values ('${a.id}', '{"v":1,"xp":1200}', 5) on conflict (user_id) do update set data = excluded.data, client_ts = excluded.client_ts`);
await q(`insert into public.progress (user_id, data, client_ts) values ('${a.id}', '{"v":1,"xp":1300}', 6) on conflict (user_id) do update set data = excluded.data, client_ts = excluded.client_ts`);
ok('A upserts progress', (await q(`select data->>'xp' xp from public.progress`))[0].xp === '1300');
await fails("A cannot write B's progress", `insert into public.progress (user_id, data) values ('${b.id}', '{}')`);
await q(`insert into public.daily_activity (user_id, day, answers, correct, xp, secs) values ('${a.id}', (now() at time zone 'utc')::date, 50, 40, 600, 900) on conflict (user_id, day) do update set answers = excluded.answers, correct = excluded.correct, xp = excluded.xp, secs = excluded.secs`);
await fails('A cannot back-fill old days', `insert into public.daily_activity (user_id, day, xp) values ('${a.id}', current_date - 30, 9999)`);
await fails('daily xp is capped', `insert into public.daily_activity (user_id, day, xp) values ('${a.id}', current_date - 1, 99999999)`);
await fails('A cannot insert login_events directly', `insert into public.login_events (user_id, event) values ('${a.id}', 'login')`);
await fails('A cannot read admins', `select * from public.admins`);
await fails('A is not admin', `select public.admin_set_hidden('${b.id}', true)`);
await q(`insert into public.feedback (user_id, email, kind, message) values ('${a.id}', 'aiko@example.com', 'idea', 'More trains please')`);
await fails('A cannot post feedback as B', `insert into public.feedback (user_id, message) values ('${b.id}', 'spoof')`);

// --- user B (private) and C
await as('authenticated', b.id);
await q(`select public.log_login('login', '{}')`);
await q(`update public.profiles set xp = 5000, streak = 9, last_study_day = current_date - 20 where id = '${b.id}'`);
await q(`insert into public.daily_activity (user_id, day, xp) values ('${b.id}', (now() at time zone 'utc')::date, 100)`);
let lb = await q(`select * from public.leaderboard('xp', 50)`);
ok('B (private) sees self + public users on board', lb.length === 3 && lb[0].is_me && lb[0].display_name.startsWith('Ben'), JSON.stringify(lb.map((r) => [r.pos, r.display_name, r.score, r.is_me])));
ok('stale streak shows as 0', (await q(`select * from public.leaderboard('streak', 50)`)).find((r) => r.is_me).streak === 0);
ok('B sees only own login events', (await q(`select * from public.login_events`)).length === 1);
ok('B sees no feedback from A', (await q(`select * from public.feedback`)).length === 0);
ok('user_overview obeys RLS for B', (await q(`select * from public.user_overview`)).length === 1);

// --- anon
await as('anon', '');
lb = await q(`select * from public.leaderboard('week', 50)`);
ok('anon sees public board only, no private users', lb.length === 2 && !lb.some((r) => r.display_name.startsWith('Ben')) && lb[0].display_name === 'Aiko' && Number(lb[0].score) === 600, JSON.stringify(lb.map((r) => [r.pos, r.display_name, r.score])));
ok('board exposes no email/id', !('email' in lb[0]) && !('id' in lb[0]) && !('user_id' in lb[0]));
await fails('anon cannot read profiles', `select * from public.profiles`);
await fails('anon cannot read progress', `select * from public.progress`);
await fails('anon cannot call log_login', `select public.log_login('login', '{}')`);
await fails('anon cannot read user_overview', `select * from public.user_overview`);
await fails('anon cannot delete account fn', `select public.delete_my_account()`);

// --- admin
await as(null, '');
await q(`insert into public.admins (user_id) select id from auth.users where email = 'aiko@example.com' on conflict do nothing`);
await as('authenticated', a.id);
ok('admin sees all profiles', (await q(`select id from public.profiles`)).length === 3);
ok('admin sees all progress/logins/overview', (await q(`select * from public.login_events`)).length === 2 && (await q(`select * from public.user_overview`)).length === 3);
ok('log_login reports admin', (await q(`select public.is_admin() x`))[0].x === true);
await q(`select public.admin_set_hidden('${c.id}', true)`);
await as('anon', '');
ok('hidden user leaves the board', (await q(`select * from public.leaderboard('xp', 50)`)).length === 1);

// --- delete account
await as('authenticated', b.id);
await q(`select public.delete_my_account()`);
await as(null, '');
ok('delete_my_account cascades', (await q(`select count(*)::int n from auth.users`))[0].n === 2 && (await q(`select count(*)::int n from public.profiles`))[0].n === 2 && (await q(`select count(*)::int n from public.daily_activity where user_id = '${b.id}'`))[0].n === 0);
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
