-- ─────────────────────────────────────────────────────────────────────────────
-- Minna Line backend for Supabase (Postgres).
-- How to use: Supabase dashboard → SQL Editor → New query → paste this whole file → Run.
-- It is safe to run again later: nothing is dropped, and existing data is kept.
--
-- What it creates
--   profiles        one row per learner: name, level, XP, streak, device info, a rich progress summary
--   progress        the full saved game for each learner (this is what syncs between devices)
--   daily_activity  one row per learner per day: answers, correct, XP, study seconds
--   login_events    one row every time someone signs up, logs in, or comes back on a new day
--   feedback        messages sent from the in-app feedback form
--   admins          who may see everyone's data in the in-app admin dashboard
--   user_overview   a ready-made view for browsing learners in the Table Editor
-- Row Level Security is on for every table: learners can only read and write their own rows.
-- The public leaderboard goes through the leaderboard() function, which only returns a few
-- harmless fields (name, avatar, level, XP, streak) for people who chose to be public.
-- ─────────────────────────────────────────────────────────────────────────────

-- ───────────────────────── tables ─────────────────────────
create table if not exists public.admins (
  user_id  uuid primary key references auth.users (id) on delete cascade,
  added_at timestamptz not null default now()
);

create table if not exists public.profiles (
  id               uuid primary key references auth.users (id) on delete cascade,
  email            text,
  display_name     text not null default 'Conductor' check (char_length(display_name) between 1 and 24),
  is_public        boolean not null default true,     -- learner's own choice: show me on the leaderboard
  hidden           boolean not null default false,    -- admin switch: take someone off the leaderboard
  avatar           jsonb not null default '{}'::jsonb, -- { hat, acc, skin } for drawing their Mochi
  start_level      text,                               -- what they said at sign-up
  jlpt             text not null default 'N5',         -- the level they are studying now
  xp               integer not null default 0 check (xp between 0 and 100000000),
  user_level       integer not null default 1,
  rank_name        text,
  streak           integer not null default 0,
  best_streak      integer not null default 0,
  last_study_day   date,
  stamps           integer not null default 0,
  trophies         integer not null default 0,
  stickers         integer not null default 0,
  items_seen       integer not null default 0,
  words_mastered   integer not null default 0,
  kanji_mastered   integer not null default 0,
  grammar_mastered integer not null default 0,
  answers          integer not null default 0,
  correct          integer not null default 0,
  study_secs       integer not null default 0,
  days_studied     integer not null default 0,
  coins            integer not null default 0,
  summary          jsonb not null default '{}'::jsonb, -- readiness per level, memory stages, accuracy by skill…
  timezone         text,
  locale           text,
  platform         text,
  user_agent       text,
  screen           text,
  referrer         text,
  app_version      text,
  login_count      integer not null default 0,
  last_login_at    timestamptz,
  last_seen_at     timestamptz,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

create table if not exists public.progress (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  data       jsonb not null check (octet_length(data::text) < 4000000),
  client_ts  bigint not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists public.daily_activity (
  user_id    uuid not null references auth.users (id) on delete cascade,
  day        date not null,
  answers    integer not null default 0 check (answers between 0 and 20000),
  correct    integer not null default 0 check (correct between 0 and 20000),
  xp         integer not null default 0 check (xp between 0 and 400000),
  secs       integer not null default 0 check (secs between 0 and 86400),
  updated_at timestamptz not null default now(),
  primary key (user_id, day)
);

create table if not exists public.login_events (
  id          bigint generated always as identity primary key,
  user_id     uuid references auth.users (id) on delete cascade,
  email       text,
  event       text not null default 'login',   -- signup | login | resume (came back on a new day, still signed in)
  timezone    text,
  locale      text,
  platform    text,
  user_agent  text,
  screen      text,
  referrer    text,
  app_version text,
  created_at  timestamptz not null default now()
);

create table if not exists public.feedback (
  id           bigint generated always as identity primary key,
  user_id      uuid references auth.users (id) on delete set null,
  email        text,
  display_name text,
  kind         text not null default 'idea',
  message      text not null check (char_length(message) between 1 and 4000),
  page         text,
  app_version  text,
  user_agent   text,
  status       text not null default 'new',
  created_at   timestamptz not null default now()
);

create index if not exists login_events_user_idx on public.login_events (user_id, created_at desc);
create index if not exists login_events_time_idx on public.login_events (created_at desc);
create index if not exists daily_activity_day_idx on public.daily_activity (day);
create index if not exists profiles_xp_idx on public.profiles (xp desc);
create index if not exists feedback_time_idx on public.feedback (created_at desc);

-- ───────────────────────── helper functions ─────────────────────────
create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.admins a where a.user_id = auth.uid());
$$;

-- Keeps timestamps honest: the server clock decides when a row was last touched.
create or replace function public.touch_profile()
returns trigger language plpgsql as $$
begin
  new.updated_at := now();
  new.last_seen_at := now();
  return new;
end $$;
drop trigger if exists profiles_touch on public.profiles;
create trigger profiles_touch before update on public.profiles for each row execute function public.touch_profile();

create or replace function public.touch_row()
returns trigger language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end $$;
drop trigger if exists progress_touch on public.progress;
create trigger progress_touch before insert or update on public.progress for each row execute function public.touch_row();
drop trigger if exists daily_touch on public.daily_activity;
create trigger daily_touch before insert or update on public.daily_activity for each row execute function public.touch_row();

-- Makes a profile the moment someone signs up, from the details on the sign-up form.
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
declare
  meta jsonb := coalesce(new.raw_user_meta_data, '{}'::jsonb);
  nm   text;
begin
  nm := left(nullif(btrim(coalesce(meta ->> 'display_name', '')), ''), 24);
  if nm is null then nm := left(initcap(split_part(coalesce(new.email, 'conductor'), '@', 1)), 24); end if;
  if nm is null or nm = '' then nm := 'Conductor'; end if;
  insert into public.profiles (id, email, display_name, is_public, start_level, jlpt)
  values (
    new.id, new.email, nm,
    (meta ->> 'is_public') is distinct from 'false',
    left(meta ->> 'start_level', 12),
    case when meta ->> 'jlpt' in ('N5', 'N4', 'N3', 'N2', 'N1') then meta ->> 'jlpt' else 'N5' end
  )
  on conflict (id) do nothing;
  return new;
exception when others then
  return new; -- never block a sign-up; log_login() creates the profile if this was skipped
end $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();

-- Called by the app on every sign-up, log-in and daily return. Records the event and device details.
create or replace function public.log_login(p_event text default 'login', p_meta jsonb default '{}'::jsonb)
returns jsonb language plpgsql security definer set search_path = public as $$
declare
  uid uuid := auth.uid();
  em  text;
  ev  text := case when p_event in ('signup', 'login', 'resume', 'ping') then p_event else 'login' end;
  m   jsonb := coalesce(p_meta, '{}'::jsonb);
begin
  if uid is null then raise exception 'not signed in'; end if;
  select u.email into em from auth.users u where u.id = uid;
  insert into public.profiles (id, email, display_name)
  values (uid, em, coalesce(nullif(left(btrim(coalesce(m ->> 'display_name', '')), 24), ''), nullif(left(initcap(split_part(coalesce(em, ''), '@', 1)), 24), ''), 'Conductor'))
  on conflict (id) do nothing;
  -- at most one event a minute per learner, so a reload loop can't flood the table
  -- whatever the app calls it, a learner's very first recorded event is their sign-up
  if ev <> 'ping' and not exists (select 1 from public.login_events e where e.user_id = uid) then ev := 'signup'; end if;
  -- 'ping' only fetches the profile (the app uses it when it reopens with a saved session on the same day)
  if ev <> 'ping' and not exists (select 1 from public.login_events e where e.user_id = uid and e.created_at > now() - interval '1 minute') then
    insert into public.login_events (user_id, email, event, timezone, locale, platform, user_agent, screen, referrer, app_version)
    values (uid, em, ev, left(m ->> 'timezone', 64), left(m ->> 'locale', 32), left(m ->> 'platform', 64), left(m ->> 'user_agent', 400),
            left(m ->> 'screen', 32), left(m ->> 'referrer', 300), left(m ->> 'app_version', 24));
    update public.profiles p set
      login_count = p.login_count + 1, last_login_at = now(), email = em,
      timezone = coalesce(left(m ->> 'timezone', 64), p.timezone), locale = coalesce(left(m ->> 'locale', 32), p.locale),
      platform = coalesce(left(m ->> 'platform', 64), p.platform), user_agent = coalesce(left(m ->> 'user_agent', 400), p.user_agent),
      screen = coalesce(left(m ->> 'screen', 32), p.screen), app_version = coalesce(left(m ->> 'app_version', 24), p.app_version),
      referrer = coalesce(p.referrer, left(m ->> 'referrer', 300))
    where p.id = uid;
  end if;
  return jsonb_build_object('admin', public.is_admin(), 'profile', (select to_jsonb(p) from public.profiles p where p.id = uid));
end $$;

-- The public leaderboard. Returns only safe fields, only for people who are public (plus the caller's own row).
-- p_board: week (XP earned since Monday) | xp (all time) | streak | words (words in long-term memory)
create or replace function public.leaderboard(p_board text default 'week', p_limit integer default 50)
returns table (pos bigint, display_name text, avatar jsonb, jlpt text, user_level integer, rank_name text,
               streak integer, stamps integer, xp integer, score bigint, is_me boolean, total bigint)
language sql stable security definer set search_path = public as $$
  with wk as (
    select d.user_id, sum(d.xp)::bigint as wxp
    from public.daily_activity d
    where d.day >= (date_trunc('week', now() at time zone 'utc'))::date
    group by d.user_id
  ), base as (
    select p.id, p.display_name, p.avatar, p.jlpt, p.user_level, p.rank_name, p.stamps, p.xp,
           case when p.last_study_day >= (now() at time zone 'utc')::date - 2 then p.streak else 0 end as live_streak,
           coalesce(w.wxp, 0) as wxp, p.words_mastered,
           (p.is_public and not p.hidden) as shown,
           coalesce(p.id = auth.uid(), false) as me
    from public.profiles p left join wk w on w.user_id = p.id
  ), scored as (
    select b.*, case p_board when 'week' then b.wxp when 'streak' then b.live_streak::bigint
                              when 'words' then b.words_mastered::bigint else b.xp::bigint end as score
    from base b where b.shown or b.me
  ), ranked as (
    select s.*, row_number() over (order by s.score desc, s.xp desc, s.id) as pos, count(*) over () as total from scored s
  )
  select r.pos, r.display_name, r.avatar, r.jlpt, r.user_level, r.rank_name, r.live_streak, r.stamps, r.xp, r.score, r.me, r.total
  from ranked r
  where r.pos <= least(greatest(coalesce(p_limit, 50), 1), 100) or r.me
  order by r.pos;
$$;

-- Admin: take someone off (or put them back on) the public leaderboard.
create or replace function public.admin_set_hidden(p_user uuid, p_hidden boolean)
returns void language plpgsql security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'admins only'; end if;
  update public.profiles set hidden = coalesce(p_hidden, false) where id = p_user;
end $$;

-- Lets a learner erase their account and everything stored about them.
create or replace function public.delete_my_account()
returns void language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not signed in'; end if;
  delete from auth.users where id = uid; -- profiles, progress, activity and login events go with it
end $$;

-- ───────────────────────── row level security ─────────────────────────
alter table public.admins         enable row level security;  -- no policies: only the functions above can read it
alter table public.profiles       enable row level security;
alter table public.progress       enable row level security;
alter table public.daily_activity enable row level security;
alter table public.login_events   enable row level security;
alter table public.feedback       enable row level security;

drop policy if exists profiles_read on public.profiles;
create policy profiles_read on public.profiles for select to authenticated
  using (id = (select auth.uid()) or (select public.is_admin()));
drop policy if exists profiles_update on public.profiles;
create policy profiles_update on public.profiles for update to authenticated
  using (id = (select auth.uid())) with check (id = (select auth.uid()));

drop policy if exists progress_read on public.progress;
create policy progress_read on public.progress for select to authenticated
  using (user_id = (select auth.uid()) or (select public.is_admin()));
drop policy if exists progress_insert on public.progress;
create policy progress_insert on public.progress for insert to authenticated
  with check (user_id = (select auth.uid()));
drop policy if exists progress_update on public.progress;
create policy progress_update on public.progress for update to authenticated
  using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));

-- Days can be written for the past week only, so nobody can back-fill history to climb the weekly board.
drop policy if exists daily_read on public.daily_activity;
create policy daily_read on public.daily_activity for select to authenticated
  using (user_id = (select auth.uid()) or (select public.is_admin()));
drop policy if exists daily_insert on public.daily_activity;
create policy daily_insert on public.daily_activity for insert to authenticated
  with check (user_id = (select auth.uid()) and day between (now() at time zone 'utc')::date - 8 and (now() at time zone 'utc')::date + 1);
drop policy if exists daily_update on public.daily_activity;
create policy daily_update on public.daily_activity for update to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()) and day between (now() at time zone 'utc')::date - 8 and (now() at time zone 'utc')::date + 1);

drop policy if exists logins_read on public.login_events;
create policy logins_read on public.login_events for select to authenticated
  using (user_id = (select auth.uid()) or (select public.is_admin()));

drop policy if exists feedback_read on public.feedback;
create policy feedback_read on public.feedback for select to authenticated
  using (user_id = (select auth.uid()) or (select public.is_admin()));
drop policy if exists feedback_insert on public.feedback;
create policy feedback_insert on public.feedback for insert to authenticated
  with check (user_id = (select auth.uid()));
drop policy if exists feedback_update on public.feedback;
create policy feedback_update on public.feedback for update to authenticated
  using ((select public.is_admin())) with check ((select public.is_admin()));

-- ───────────────────────── privileges ─────────────────────────
-- Start from nothing, then hand out exactly what the app needs.
revoke all on public.admins, public.profiles, public.progress, public.daily_activity, public.login_events, public.feedback from anon, authenticated;

grant select on public.profiles to authenticated;
-- Learners may edit these columns of their own profile. email, hidden, login_count, created_at stay server-side.
grant update (display_name, is_public, avatar, jlpt, xp, user_level, rank_name, streak, best_streak, last_study_day, stamps, trophies, stickers,
              items_seen, words_mastered, kanji_mastered, grammar_mastered, answers, correct, study_secs, days_studied, coins, summary,
              timezone, locale, platform, user_agent, screen, app_version)
  on public.profiles to authenticated;
grant select, insert, update on public.progress to authenticated;
grant select, insert, update on public.daily_activity to authenticated;
grant select on public.login_events to authenticated;
grant select, insert on public.feedback to authenticated;
grant update (status) on public.feedback to authenticated;

revoke execute on function public.is_admin() from public, anon;
revoke execute on function public.log_login(text, jsonb) from public, anon;
revoke execute on function public.admin_set_hidden(uuid, boolean) from public, anon;
revoke execute on function public.delete_my_account() from public, anon;
revoke execute on function public.handle_new_user() from public, anon, authenticated;
grant execute on function public.is_admin() to authenticated;
grant execute on function public.log_login(text, jsonb) to authenticated;
grant execute on function public.admin_set_hidden(uuid, boolean) to authenticated;
grant execute on function public.delete_my_account() to authenticated;
grant execute on function public.leaderboard(text, integer) to anon, authenticated;

-- ───────────────────────── a view for browsing learners ─────────────────────────
-- Table Editor → user_overview shows everyone, newest activity first, with their last 7 days added up.
-- security_invoker means the same row rules apply: only you (in the dashboard) and admins can read it.
create or replace view public.user_overview with (security_invoker = true) as
select
  p.display_name, p.email, p.jlpt, p.user_level, p.rank_name, p.xp, p.streak, p.best_streak,
  p.answers, p.correct,
  case when p.answers > 0 then round(100.0 * p.correct / p.answers) end as accuracy_pct,
  p.words_mastered, p.kanji_mastered, p.grammar_mastered, p.items_seen, p.stamps, p.trophies,
  round(p.study_secs / 60.0) as study_minutes, p.days_studied,
  coalesce(w.answers_7d, 0) as answers_7d, coalesce(w.xp_7d, 0) as xp_7d, coalesce(w.days_7d, 0) as days_active_7d,
  p.login_count, p.last_login_at, p.last_seen_at, p.created_at as joined_at,
  p.is_public, p.hidden, p.start_level, p.timezone, p.locale, p.platform, p.screen, p.referrer, p.app_version, p.id
from public.profiles p
left join (
  select d.user_id, sum(d.answers) as answers_7d, sum(d.xp) as xp_7d, count(*) as days_7d
  from public.daily_activity d where d.day >= (now() at time zone 'utc')::date - 6 group by d.user_id
) w on w.user_id = p.id
order by p.last_seen_at desc nulls last;
revoke all on public.user_overview from anon, authenticated;
grant select on public.user_overview to authenticated;

-- ───────────────────────── make yourself an admin ─────────────────────────
-- After you have created your own account in the app, run this one line (with your email) in a new query:
--
--   insert into public.admins (user_id) select id from auth.users where email = 'you@example.com' on conflict do nothing;
--
-- Then open the app → Me → Admin dashboard.
