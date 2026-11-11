-- ─────────────────────────────────────────────────────────────────────────────
-- Minna Line classes (クラス): a teacher makes a class, students join with a code,
-- the teacher sets stations as homework and sees everyone's progress.
-- Run this AFTER supabase/schema.sql: SQL Editor → New query → paste this whole file → Run. Safe to run again.
--
-- How it is protected
--   · The three tables have no direct access at all. Everything goes through the functions below,
--     and each function checks who is calling.
--   · A teacher sees only their own classes, and only these things about a student: conductor name, Mochi,
--     level, streak, activity, accuracy, readiness and which station stamps they hold. Never an email address.
--   · A student shares progress with a teacher only by typing that teacher's class code, and can leave any time.
--   · Limits: 10 classes per teacher, 300 students per class, 30 homework items per class.
-- ─────────────────────────────────────────────────────────────────────────────

create table if not exists public.classes (
  id         uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references auth.users (id) on delete cascade,
  name       text not null check (char_length(btrim(name)) between 2 and 60),
  code       text not null unique,
  jlpt       text not null default 'N5' check (jlpt in ('N5', 'N4', 'N3', 'N2', 'N1')),
  created_at timestamptz not null default now()
);
create table if not exists public.class_members (
  class_id  uuid not null references public.classes (id) on delete cascade,
  user_id   uuid not null references auth.users (id) on delete cascade,
  joined_at timestamptz not null default now(),
  primary key (class_id, user_id)
);
create table if not exists public.class_homework (
  id         bigint generated always as identity primary key,
  class_id   uuid not null references public.classes (id) on delete cascade,
  station_id text not null check (char_length(station_id) between 1 and 24),
  note       text check (char_length(note) <= 200),
  due        date,
  created_at timestamptz not null default now()
);
create index if not exists class_members_user_idx on public.class_members (user_id);
create index if not exists class_homework_class_idx on public.class_homework (class_id, created_at);
create index if not exists classes_teacher_idx on public.classes (teacher_id);

alter table public.classes        enable row level security;   -- no policies on purpose: functions only
alter table public.class_members  enable row level security;
alter table public.class_homework enable row level security;
revoke all on public.classes, public.class_members, public.class_homework from anon, authenticated;

-- ───────────────────────── teacher side ─────────────────────────
create or replace function public.class_create(p_name text, p_jlpt text default 'N5')
returns jsonb language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); c text; cid uuid; tries integer := 0;
begin
  if uid is null then raise exception 'not signed in'; end if;
  if char_length(btrim(coalesce(p_name, ''))) < 2 then raise exception 'Give the class a name.'; end if;
  if (select count(*) from public.classes where teacher_id = uid) >= 10 then raise exception 'You can run up to 10 classes.'; end if;
  loop
    -- six characters, no look-alikes (no 0/O, 1/I/L)
    select string_agg(substr('ABCDEFGHJKMNPQRSTUVWXYZ23456789', 1 + floor(random() * 31)::integer, 1), '') into c from generate_series(1, 6);
    begin
      insert into public.classes (teacher_id, name, code, jlpt) values (uid, left(btrim(p_name), 60), c, case when p_jlpt in ('N5', 'N4', 'N3', 'N2', 'N1') then p_jlpt else 'N5' end) returning id into cid;
      exit;
    exception when unique_violation then tries := tries + 1; if tries > 8 then raise exception 'Could not make a class code. Try again.'; end if;
    end;
  end loop;
  return jsonb_build_object('id', cid, 'code', c);
end $$;

create or replace function public.class_delete(p_class uuid)
returns void language sql security definer set search_path = public as $$
  delete from public.classes where id = p_class and teacher_id = auth.uid();
$$;

create or replace function public.class_homework_set(p_class uuid, p_station text, p_note text default null, p_due date default null)
returns bigint language plpgsql security definer set search_path = public as $$
declare hid bigint;
begin
  if not exists (select 1 from public.classes where id = p_class and teacher_id = auth.uid()) then raise exception 'That is not your class.'; end if;
  if (select count(*) from public.class_homework where class_id = p_class) >= 30 then raise exception 'A class can hold 30 homework items. Remove an old one first.'; end if;
  insert into public.class_homework (class_id, station_id, note, due) values (p_class, left(p_station, 24), nullif(left(btrim(coalesce(p_note, '')), 200), ''), p_due) returning id into hid;
  return hid;
end $$;

create or replace function public.class_homework_remove(p_id bigint)
returns void language sql security definer set search_path = public as $$
  delete from public.class_homework h using public.classes c where h.id = p_id and c.id = h.class_id and c.teacher_id = auth.uid();
$$;

create or replace function public.class_remove_member(p_class uuid, p_member text)
returns void language sql security definer set search_path = public as $$
  delete from public.class_members m using public.classes c
  where m.class_id = p_class and c.id = m.class_id and c.teacher_id = auth.uid() and left(md5(m.user_id::text), 12) = p_member;
$$;

-- The teacher's view of one class: homework and every student's progress.
create or replace function public.class_roster(p_class uuid)
returns jsonb language sql stable security definer set search_path = public as $$
  select case when not exists (select 1 from public.classes where id = p_class and teacher_id = auth.uid()) then null else (
    select jsonb_build_object('id', c.id, 'name', c.name, 'code', c.code, 'jlpt', c.jlpt, 'created_at', c.created_at,
      'homework', coalesce((select jsonb_agg(jsonb_build_object('id', h.id, 'station_id', h.station_id, 'note', h.note, 'due', h.due, 'created_at', h.created_at) order by h.created_at) from public.class_homework h where h.class_id = c.id), '[]'::jsonb),
      'students', coalesce((
        select jsonb_agg(jsonb_build_object('key', left(md5(p.id::text), 12), 'name', p.display_name, 'avatar', p.avatar, 'jlpt', p.jlpt, 'level', p.user_level, 'rank', p.rank_name, 'xp', p.xp,
          'streak', case when p.last_study_day >= (now() at time zone 'utc')::date - 2 then p.streak else 0 end,
          'answers', p.answers, 'correct', p.correct, 'study_secs', p.study_secs, 'words', p.words_mastered, 'kanji', p.kanji_mastered, 'last_seen_at', p.last_seen_at, 'joined_at', m.joined_at,
          'readiness', p.summary -> 'readiness', 'stamps', coalesce(pr.data -> 'stamps', '{}'::jsonb),
          'week', coalesce((select jsonb_build_object('answers', sum(d.answers), 'correct', sum(d.correct), 'xp', sum(d.xp), 'secs', sum(d.secs), 'days', count(*)) from public.daily_activity d where d.user_id = p.id and d.day >= (now() at time zone 'utc')::date - 6), '{}'::jsonb))
          order by p.display_name)
        from public.class_members m join public.profiles p on p.id = m.user_id left join public.progress pr on pr.user_id = m.user_id
        where m.class_id = c.id), '[]'::jsonb))
    from public.classes c where c.id = p_class) end;
$$;

-- ───────────────────────── student side ─────────────────────────
create or replace function public.class_join(p_code text)
returns jsonb language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); c public.classes;
begin
  if uid is null then raise exception 'not signed in'; end if;
  select * into c from public.classes where code = upper(regexp_replace(coalesce(p_code, ''), '[^A-Za-z0-9]', '', 'g'));
  if c.id is null then raise exception 'No class has that code. Check it with your teacher.'; end if;
  if c.teacher_id = uid then raise exception 'This is your own class.'; end if;
  if (select count(*) from public.class_members where class_id = c.id) >= 300 then raise exception 'This class is full.'; end if;
  if (select count(*) from public.class_members where user_id = uid) >= 20 then raise exception 'You are in the maximum number of classes.'; end if;
  insert into public.class_members (class_id, user_id) values (c.id, uid) on conflict do nothing;
  return jsonb_build_object('id', c.id, 'name', c.name, 'teacher', (select display_name from public.profiles where id = c.teacher_id));
end $$;

create or replace function public.class_leave(p_class uuid)
returns void language sql security definer set search_path = public as $$
  delete from public.class_members where class_id = p_class and user_id = auth.uid();
$$;

-- Everything the caller needs for the Classes page: classes they teach and classes they are in, with homework.
create or replace function public.my_classes()
returns jsonb language sql stable security definer set search_path = public as $$
  select case when auth.uid() is null then null else jsonb_build_object(
    'teaching', coalesce((select jsonb_agg(jsonb_build_object('id', c.id, 'name', c.name, 'code', c.code, 'jlpt', c.jlpt,
        'students', (select count(*) from public.class_members m where m.class_id = c.id), 'homework', (select count(*) from public.class_homework h where h.class_id = c.id)) order by c.created_at)
      from public.classes c where c.teacher_id = auth.uid()), '[]'::jsonb),
    'joined', coalesce((select jsonb_agg(jsonb_build_object('id', c.id, 'name', c.name, 'jlpt', c.jlpt, 'teacher', (select display_name from public.profiles where id = c.teacher_id),
        'homework', coalesce((select jsonb_agg(jsonb_build_object('id', h.id, 'station_id', h.station_id, 'note', h.note, 'due', h.due) order by h.due nulls last, h.created_at) from public.class_homework h where h.class_id = c.id), '[]'::jsonb)) order by m.joined_at)
      from public.class_members m join public.classes c on c.id = m.class_id where m.user_id = auth.uid()), '[]'::jsonb)) end;
$$;

revoke execute on function public.class_create(text, text), public.class_delete(uuid), public.class_homework_set(uuid, text, text, date), public.class_homework_remove(bigint),
  public.class_remove_member(uuid, text), public.class_roster(uuid), public.class_join(text), public.class_leave(uuid), public.my_classes() from public, anon;
grant execute on function public.class_create(text, text), public.class_delete(uuid), public.class_homework_set(uuid, text, text, date), public.class_homework_remove(bigint),
  public.class_remove_member(uuid, text), public.class_roster(uuid), public.class_join(text), public.class_leave(uuid), public.my_classes() to authenticated;


-- ═════════════════════════ class life: leaderboard, noticeboard, notes, nudges, goals, class tests ═════════════════════════
-- Same rule as above: no direct table access; every function checks whether the caller teaches the class or is in it.
create table if not exists public.class_posts (
  id         bigint generated always as identity primary key,
  class_id   uuid not null references public.classes (id) on delete cascade,
  author_id  uuid not null references auth.users (id) on delete cascade,
  parent_id  bigint references public.class_posts (id) on delete cascade,
  body       text not null check (char_length(btrim(body)) between 1 and 4000),
  pinned     boolean not null default false,
  created_at timestamptz not null default now()
);
create table if not exists public.class_notes (
  class_id   uuid not null references public.classes (id) on delete cascade,
  user_id    uuid not null references auth.users (id) on delete cascade,
  note       text not null check (char_length(note) <= 1000),
  updated_at timestamptz not null default now(),
  primary key (class_id, user_id)
);
create table if not exists public.class_nudges (
  id         bigint generated always as identity primary key,
  class_id   uuid not null references public.classes (id) on delete cascade,
  user_id    uuid not null references auth.users (id) on delete cascade,
  message    text not null check (char_length(btrim(message)) between 1 and 300),
  seen       boolean not null default false,
  created_at timestamptz not null default now()
);
create table if not exists public.class_goals (
  id         bigint generated always as identity primary key,
  class_id   uuid not null references public.classes (id) on delete cascade,
  title      text not null check (char_length(btrim(title)) between 2 and 120),
  target_xp  integer not null check (target_xp between 100 and 10000000),
  due        date,
  created_at timestamptz not null default now()
);
create table if not exists public.class_tests (
  id         bigint generated always as identity primary key,
  class_id   uuid not null references public.classes (id) on delete cascade,
  title      text not null check (char_length(btrim(title)) between 2 and 120),
  questions  jsonb not null,      -- [{ q, answer, wrong: [up to 3] }]; no wrong answers = the student types the answer
  due        date,
  created_at timestamptz not null default now()
);
create table if not exists public.class_test_results (
  test_id  bigint not null references public.class_tests (id) on delete cascade,
  user_id  uuid not null references auth.users (id) on delete cascade,
  score    integer not null, total integer not null, answers jsonb, attempts integer not null default 1,
  taken_at timestamptz not null default now(),
  primary key (test_id, user_id)
);
create index if not exists class_posts_class_idx on public.class_posts (class_id, created_at);
alter table public.class_posts enable row level security;        alter table public.class_notes enable row level security;
alter table public.class_nudges enable row level security;       alter table public.class_goals enable row level security;
alter table public.class_tests enable row level security;        alter table public.class_test_results enable row level security;
revoke all on public.class_posts, public.class_notes, public.class_nudges, public.class_goals, public.class_tests, public.class_test_results from anon, authenticated;

-- 'teacher', 'student' or null for the caller in this class
create or replace function public.class_role(p_class uuid)
returns text language sql stable security definer set search_path = public as $$
  select case when exists (select 1 from public.classes where id = p_class and teacher_id = auth.uid()) then 'teacher'
              when exists (select 1 from public.class_members where class_id = p_class and user_id = auth.uid()) then 'student' end;
$$;
create or replace function public.class_member_id(p_class uuid, p_member text)
returns uuid language sql stable security definer set search_path = public as $$
  select m.user_id from public.class_members m where m.class_id = p_class and left(md5(m.user_id::text), 12) = p_member limit 1;
$$;
create or replace function public.class_norm(t text) returns text language sql immutable as $$ select lower(regexp_replace(coalesce(t, ''), '[\s　。．.、,！!？?]+', '', 'g')) $$;

-- noticeboard
create or replace function public.class_post_add(p_class uuid, p_body text, p_parent bigint default null)
returns bigint language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); par public.class_posts; pid bigint;
begin
  if public.class_role(p_class) is null then raise exception 'You are not in this class.'; end if;
  if (select count(*) from public.class_posts where author_id = uid and created_at > now() - interval '24 hours') >= 60 then raise exception 'That is a lot of posts for one day. Try again tomorrow.'; end if;
  if p_parent is not null then
    select * into par from public.class_posts where id = p_parent and class_id = p_class;
    if par.id is null then raise exception 'That post no longer exists.'; end if;
    p_parent := coalesce(par.parent_id, par.id);
  end if;
  insert into public.class_posts (class_id, author_id, parent_id, body) values (p_class, uid, p_parent, left(btrim(p_body), 4000)) returning id into pid;
  return pid;
end $$;
create or replace function public.class_post_remove(p_id bigint)
returns void language sql security definer set search_path = public as $$
  delete from public.class_posts p where p.id = p_id and (p.author_id = auth.uid() or exists (select 1 from public.classes c where c.id = p.class_id and c.teacher_id = auth.uid()));
$$;
create or replace function public.class_post_pin(p_id bigint, p_on boolean)
returns void language sql security definer set search_path = public as $$
  update public.class_posts p set pinned = coalesce(p_on, false) where p.id = p_id and p.parent_id is null and exists (select 1 from public.classes c where c.id = p.class_id and c.teacher_id = auth.uid());
$$;

-- teacher's private notes and nudges
create or replace function public.class_note_set(p_class uuid, p_member text, p_note text)
returns void language plpgsql security definer set search_path = public as $$
declare sid uuid;
begin
  if public.class_role(p_class) is distinct from 'teacher' then raise exception 'That is not your class.'; end if;
  sid := public.class_member_id(p_class, p_member);
  if sid is null then raise exception 'That student is not in this class.'; end if;
  if btrim(coalesce(p_note, '')) = '' then delete from public.class_notes where class_id = p_class and user_id = sid;
  else insert into public.class_notes (class_id, user_id, note) values (p_class, sid, left(btrim(p_note), 1000)) on conflict (class_id, user_id) do update set note = excluded.note, updated_at = now(); end if;
end $$;
create or replace function public.class_nudge_send(p_class uuid, p_member text, p_message text)
returns void language plpgsql security definer set search_path = public as $$
declare sid uuid;
begin
  if public.class_role(p_class) is distinct from 'teacher' then raise exception 'That is not your class.'; end if;
  sid := public.class_member_id(p_class, p_member);
  if sid is null then raise exception 'That student is not in this class.'; end if;
  if (select count(*) from public.class_nudges where class_id = p_class and user_id = sid and created_at > now() - interval '24 hours') >= 3 then raise exception 'Three nudges a day is the limit for one student.'; end if;
  insert into public.class_nudges (class_id, user_id, message) values (p_class, sid, left(btrim(p_message), 300));
end $$;
create or replace function public.class_nudge_seen(p_id bigint)
returns void language sql security definer set search_path = public as $$
  update public.class_nudges set seen = true where id = p_id and user_id = auth.uid();
$$;

-- shared goals: the class earns XP together
create or replace function public.class_goal_set(p_class uuid, p_title text, p_target_xp integer, p_due date default null)
returns bigint language plpgsql security definer set search_path = public as $$
declare gid bigint;
begin
  if public.class_role(p_class) is distinct from 'teacher' then raise exception 'That is not your class.'; end if;
  if (select count(*) from public.class_goals where class_id = p_class) >= 5 then raise exception 'A class can hold 5 goals. Remove an old one first.'; end if;
  insert into public.class_goals (class_id, title, target_xp, due) values (p_class, left(btrim(p_title), 120), p_target_xp, p_due) returning id into gid;
  return gid;
end $$;
create or replace function public.class_goal_remove(p_id bigint)
returns void language sql security definer set search_path = public as $$
  delete from public.class_goals g using public.classes c where g.id = p_id and c.id = g.class_id and c.teacher_id = auth.uid();
$$;

-- class tests, written by the teacher and marked on the server so answers never reach a student's browser early
create or replace function public.class_test_save(p_class uuid, p_id bigint, p_title text, p_questions jsonb, p_due date default null)
returns bigint language plpgsql security definer set search_path = public as $$
declare tid bigint; clean jsonb;
begin
  if public.class_role(p_class) is distinct from 'teacher' then raise exception 'That is not your class.'; end if;
  if jsonb_typeof(p_questions) is distinct from 'array' or jsonb_array_length(p_questions) not between 1 and 40 then raise exception 'A test needs between 1 and 40 questions.'; end if;
  select jsonb_agg(jsonb_build_object('q', left(btrim(e ->> 'q'), 500), 'answer', left(btrim(e ->> 'answer'), 200),
           'wrong', coalesce((select jsonb_agg(left(btrim(w), 200)) from (select w from jsonb_array_elements_text(case when jsonb_typeof(e -> 'wrong') = 'array' then e -> 'wrong' else '[]'::jsonb end) w where btrim(w) <> '' limit 3) x), '[]'::jsonb)))
    into clean from jsonb_array_elements(p_questions) e;
  if exists (select 1 from jsonb_array_elements(clean) e where coalesce(e ->> 'q', '') = '' or coalesce(e ->> 'answer', '') = '') then raise exception 'Every question needs a prompt and a correct answer.'; end if;
  if p_id is null then
    if (select count(*) from public.class_tests where class_id = p_class) >= 20 then raise exception 'A class can hold 20 tests. Remove an old one first.'; end if;
    insert into public.class_tests (class_id, title, questions, due) values (p_class, left(btrim(p_title), 120), clean, p_due) returning id into tid;
  else
    update public.class_tests set title = left(btrim(p_title), 120), questions = clean, due = p_due where id = p_id and class_id = p_class returning id into tid;
    if tid is null then raise exception 'That test no longer exists.'; end if;
  end if;
  return tid;
end $$;
create or replace function public.class_test_remove(p_id bigint)
returns void language sql security definer set search_path = public as $$
  delete from public.class_tests t using public.classes c where t.id = p_id and c.id = t.class_id and c.teacher_id = auth.uid();
$$;
-- A teacher gets the full test for editing. A student gets the questions with shuffled options and no answers.
create or replace function public.class_test_take(p_id bigint)
returns jsonb language plpgsql stable security definer set search_path = public as $$
declare t public.class_tests; r text;
begin
  select * into t from public.class_tests where id = p_id;
  r := public.class_role(t.class_id);
  if t.id is null or r is null then return null; end if;
  if r = 'teacher' then return jsonb_build_object('id', t.id, 'title', t.title, 'due', t.due, 'role', r, 'questions', t.questions); end if;
  return jsonb_build_object('id', t.id, 'title', t.title, 'due', t.due, 'role', r, 'questions', (
    select jsonb_agg(jsonb_build_object('q', e ->> 'q', 'options', case when jsonb_array_length(e -> 'wrong') = 0 then null else
      (select jsonb_agg(o order by md5(o || t.id::text || ord::text || auth.uid()::text)) from (select e ->> 'answer' as o union select w from jsonb_array_elements_text(e -> 'wrong') w) x) end) order by ord)
    from jsonb_array_elements(t.questions) with ordinality as q(e, ord)));
end $$;
create or replace function public.class_test_submit(p_id bigint, p_answers jsonb)
returns jsonb language plpgsql security definer set search_path = public as $$
declare t public.class_tests; uid uuid := auth.uid(); sc integer; tot integer; review jsonb;
begin
  select * into t from public.class_tests where id = p_id;
  if t.id is null or public.class_role(t.class_id) is distinct from 'student' then raise exception 'This test is not open to you.'; end if;
  select count(*) filter (where public.class_norm(e ->> 'answer') = public.class_norm(p_answers ->> (ord - 1)::integer)), count(*),
         jsonb_agg(jsonb_build_object('q', e ->> 'q', 'correct', e ->> 'answer', 'yours', p_answers ->> (ord - 1)::integer, 'ok', public.class_norm(e ->> 'answer') = public.class_norm(p_answers ->> (ord - 1)::integer)) order by ord)
    into sc, tot, review from jsonb_array_elements(t.questions) with ordinality as q(e, ord);
  insert into public.class_test_results (test_id, user_id, score, total, answers) values (t.id, uid, sc, tot, p_answers)
    on conflict (test_id, user_id) do update set score = excluded.score, total = excluded.total, answers = excluded.answers, attempts = public.class_test_results.attempts + 1, taken_at = now();
  return jsonb_build_object('score', sc, 'total', tot, 'review', review);
end $$;

-- Everything one class page needs, shaped by who is asking.
create or replace function public.class_view(p_class uuid)
returns jsonb language plpgsql stable security definer set search_path = public as $$
declare r text := public.class_role(p_class); uid uuid := auth.uid(); c public.classes; monday date := date_trunc('week', now() at time zone 'utc')::date;
begin
  if r is null then return null; end if;
  select * into c from public.classes where id = p_class;
  return jsonb_build_object('role', r, 'id', c.id, 'name', c.name, 'jlpt', c.jlpt, 'code', case when r = 'teacher' then c.code end,
    'teacher', (select display_name from public.profiles where id = c.teacher_id),
    'board', coalesce((select jsonb_agg(jsonb_build_object('name', p.display_name, 'avatar', p.avatar, 'level', p.user_level, 'rank', p.rank_name,
        'streak', case when p.last_study_day >= (now() at time zone 'utc')::date - 2 then p.streak else 0 end, 'week_xp', w.xp, 'is_me', p.id = uid) order by w.xp desc, p.xp desc)
      from public.class_members m join public.profiles p on p.id = m.user_id
      cross join lateral (select coalesce(sum(d.xp), 0)::integer as xp from public.daily_activity d where d.user_id = m.user_id and d.day >= monday) w
      where m.class_id = c.id), '[]'::jsonb),
    'goals', coalesce((select jsonb_agg(jsonb_build_object('id', g.id, 'title', g.title, 'target_xp', g.target_xp, 'due', g.due,
        'xp', (select coalesce(sum(d.xp), 0) from public.daily_activity d join public.class_members m on m.user_id = d.user_id where m.class_id = c.id and d.day >= g.created_at::date)) order by g.created_at)
      from public.class_goals g where g.class_id = c.id), '[]'::jsonb),
    'tests', coalesce((select jsonb_agg(jsonb_build_object('id', t.id, 'title', t.title, 'due', t.due, 'n', jsonb_array_length(t.questions),
        'mine', (select jsonb_build_object('score', x.score, 'total', x.total, 'attempts', x.attempts) from public.class_test_results x where x.test_id = t.id and x.user_id = uid),
        'results', case when r = 'teacher' then coalesce((select jsonb_object_agg(left(md5(x.user_id::text), 12), jsonb_build_object('score', x.score, 'total', x.total, 'attempts', x.attempts)) from public.class_test_results x where x.test_id = t.id), '{}'::jsonb) end) order by t.created_at)
      from public.class_tests t where t.class_id = c.id), '[]'::jsonb),
    'feed', coalesce((select jsonb_agg(jsonb_build_object('id', f.id, 'parent_id', f.parent_id, 'body', f.body, 'pinned', f.pinned, 'created_at', f.created_at,
        'author_name', coalesce(p.display_name, 'Conductor'), 'author_avatar', coalesce(p.avatar, '{}'::jsonb), 'is_teacher', f.author_id = c.teacher_id, 'is_mine', f.author_id = uid) order by f.created_at)
      from (select * from public.class_posts where class_id = c.id order by created_at desc limit 300) f left join public.profiles p on p.id = f.author_id), '[]'::jsonb),
    'nudges', case when r = 'student' then coalesce((select jsonb_agg(jsonb_build_object('id', n.id, 'message', n.message, 'created_at', n.created_at) order by n.created_at desc) from public.class_nudges n where n.class_id = c.id and n.user_id = uid and not n.seen), '[]'::jsonb) end,
    'notes', case when r = 'teacher' then coalesce((select jsonb_object_agg(left(md5(n.user_id::text), 12), n.note) from public.class_notes n where n.class_id = c.id), '{}'::jsonb) end);
end $$;

do $grants$
declare f text;
begin
  foreach f in array array['class_role(uuid)', 'class_post_add(uuid, text, bigint)', 'class_post_remove(bigint)', 'class_post_pin(bigint, boolean)', 'class_note_set(uuid, text, text)', 'class_nudge_send(uuid, text, text)',
    'class_nudge_seen(bigint)', 'class_goal_set(uuid, text, integer, date)', 'class_goal_remove(bigint)', 'class_test_save(uuid, bigint, text, jsonb, date)', 'class_test_remove(bigint)', 'class_test_take(bigint)',
    'class_test_submit(bigint, jsonb)', 'class_view(uuid)'] loop
    execute format('revoke execute on function public.%s from public, anon', f);
    execute format('grant execute on function public.%s to authenticated', f);
  end loop;
  revoke execute on function public.class_member_id(uuid, text) from public, anon, authenticated;
end
$grants$;


-- ========================= roles, Google Meet lessons, written assignments =========================
-- role: which side of the app a person uses. Anyone may be a teacher; it only changes the interface they land on.
alter table public.profiles add column if not exists role text not null default 'learner';
alter table public.profiles drop constraint if exists profiles_role_check;
alter table public.profiles add constraint profiles_role_check check (role in ('learner', 'teacher'));
create or replace function public.set_role(p_role text)
returns void language sql security definer set search_path = public as $$
  update public.profiles set role = case when p_role = 'teacher' then 'teacher' else 'learner' end where id = auth.uid();
$$;

create table if not exists public.class_meetings (
  id         bigint generated always as identity primary key,
  class_id   uuid not null references public.classes (id) on delete cascade,
  title      text not null check (char_length(btrim(title)) between 2 and 120),
  starts_at  timestamptz not null,
  minutes    integer not null default 60 check (minutes between 10 and 480),
  link       text not null check (char_length(link) <= 200 and link ~ '^https://meet\.google\.com/[A-Za-z0-9?=&_./-]+$'),
  note       text check (char_length(note) <= 500),
  created_at timestamptz not null default now()
);
create table if not exists public.class_assignments (
  id         bigint generated always as identity primary key,
  class_id   uuid not null references public.classes (id) on delete cascade,
  title      text not null check (char_length(btrim(title)) between 2 and 120),
  body       text check (char_length(body) <= 6000),
  due        date,
  created_at timestamptz not null default now()
);
create table if not exists public.class_submissions (
  assignment_id bigint not null references public.class_assignments (id) on delete cascade,
  user_id       uuid not null references auth.users (id) on delete cascade,
  body          text check (char_length(body) <= 8000),
  images        text[] not null default '{}' check (cardinality(images) <= 4),
  submitted_at  timestamptz not null default now(),
  grade         text check (char_length(grade) <= 40),
  feedback      text check (char_length(feedback) <= 2000),
  reviewed_at   timestamptz,
  primary key (assignment_id, user_id)
);
create index if not exists class_meetings_class_idx on public.class_meetings (class_id, starts_at);
create index if not exists class_assignments_class_idx on public.class_assignments (class_id, created_at);
alter table public.class_meetings enable row level security;
alter table public.class_assignments enable row level security;
alter table public.class_submissions enable row level security;
revoke all on public.class_meetings, public.class_assignments, public.class_submissions from anon, authenticated;

-- lessons on Google Meet: the teacher pastes the Meet link, students get a Join button
create or replace function public.class_meeting_set(p_class uuid, p_id bigint, p_title text, p_starts timestamptz, p_minutes integer, p_link text, p_note text default null)
returns bigint language plpgsql security definer set search_path = public as $$
declare mid bigint; lk text := btrim(coalesce(p_link, ''));
begin
  if public.class_role(p_class) is distinct from 'teacher' then raise exception 'That is not your class.'; end if;
  if lk !~ '^https://meet\.google\.com/[A-Za-z0-9?=&_./-]+$' then raise exception 'Paste a Google Meet link. It looks like https://meet.google.com/abc-defg-hij'; end if;
  if p_starts is null then raise exception 'Pick a date and time.'; end if;
  if p_id is null then
    if (select count(*) from public.class_meetings where class_id = p_class) >= 60 then raise exception 'A class can hold 60 lessons. Remove old ones first.'; end if;
    insert into public.class_meetings (class_id, title, starts_at, minutes, link, note)
      values (p_class, left(btrim(p_title), 120), p_starts, coalesce(p_minutes, 60), lk, nullif(left(btrim(coalesce(p_note, '')), 500), '')) returning id into mid;
  else
    update public.class_meetings set title = left(btrim(p_title), 120), starts_at = p_starts, minutes = coalesce(p_minutes, 60), link = lk, note = nullif(left(btrim(coalesce(p_note, '')), 500), '')
      where id = p_id and class_id = p_class returning id into mid;
    if mid is null then raise exception 'That lesson no longer exists.'; end if;
  end if;
  return mid;
end $$;
create or replace function public.class_meeting_remove(p_id bigint)
returns void language sql security definer set search_path = public as $$
  delete from public.class_meetings m using public.classes c where m.id = p_id and c.id = m.class_id and c.teacher_id = auth.uid();
$$;

-- written assignments: the teacher sets the task, each student hands in text and up to four pictures, the teacher reviews
create or replace function public.class_assignment_set(p_class uuid, p_id bigint, p_title text, p_body text, p_due date default null)
returns bigint language plpgsql security definer set search_path = public as $$
declare aid bigint;
begin
  if public.class_role(p_class) is distinct from 'teacher' then raise exception 'That is not your class.'; end if;
  if p_id is null then
    if (select count(*) from public.class_assignments where class_id = p_class) >= 60 then raise exception 'A class can hold 60 assignments. Remove old ones first.'; end if;
    insert into public.class_assignments (class_id, title, body, due) values (p_class, left(btrim(p_title), 120), left(coalesce(p_body, ''), 6000), p_due) returning id into aid;
  else
    update public.class_assignments set title = left(btrim(p_title), 120), body = left(coalesce(p_body, ''), 6000), due = p_due where id = p_id and class_id = p_class returning id into aid;
    if aid is null then raise exception 'That assignment no longer exists.'; end if;
  end if;
  return aid;
end $$;
create or replace function public.class_assignment_remove(p_id bigint)
returns void language sql security definer set search_path = public as $$
  delete from public.class_assignments a using public.classes c where a.id = p_id and c.id = a.class_id and c.teacher_id = auth.uid();
$$;
create or replace function public.class_submit(p_assignment bigint, p_body text, p_images text[] default '{}')
returns void language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); a public.class_assignments; imgs text[] := coalesce(p_images, '{}');
begin
  select * into a from public.class_assignments where id = p_assignment;
  if a.id is null or public.class_role(a.class_id) is distinct from 'student' then raise exception 'This assignment is not open to you.'; end if;
  if btrim(coalesce(p_body, '')) = '' and cardinality(imgs) = 0 then raise exception 'Write something or add a picture first.'; end if;
  if cardinality(imgs) > 4 then raise exception 'Four pictures is the limit.'; end if;
  if exists (select 1 from unnest(imgs) i where i not like uid::text || '/%' and i not like 'data:%') then raise exception 'Pictures must be your own uploads.'; end if;
  insert into public.class_submissions (assignment_id, user_id, body, images) values (a.id, uid, left(coalesce(p_body, ''), 8000), imgs)
    on conflict (assignment_id, user_id) do update set body = excluded.body, images = excluded.images, submitted_at = now(), reviewed_at = null;
end $$;
create or replace function public.class_submissions(p_assignment bigint)
returns jsonb language plpgsql stable security definer set search_path = public as $$
declare a public.class_assignments;
begin
  select * into a from public.class_assignments where id = p_assignment;
  if a.id is null or public.class_role(a.class_id) is distinct from 'teacher' then return null; end if;
  return jsonb_build_object('id', a.id, 'title', a.title, 'body', a.body, 'due', a.due, 'students', coalesce((
    select jsonb_agg(jsonb_build_object('key', left(md5(p.id::text), 12), 'name', p.display_name, 'avatar', p.avatar,
      'submitted_at', s.submitted_at, 'body', s.body, 'images', s.images, 'grade', s.grade, 'feedback', s.feedback, 'reviewed_at', s.reviewed_at)
      order by (s.submitted_at is null), (s.reviewed_at is not null), s.submitted_at)
    from public.class_members m join public.profiles p on p.id = m.user_id
    left join public.class_submissions s on s.assignment_id = a.id and s.user_id = m.user_id
    where m.class_id = a.class_id), '[]'::jsonb));
end $$;
create or replace function public.class_review(p_assignment bigint, p_member text, p_grade text, p_feedback text)
returns void language plpgsql security definer set search_path = public as $$
declare a public.class_assignments; sid uuid;
begin
  select * into a from public.class_assignments where id = p_assignment;
  if a.id is null or public.class_role(a.class_id) is distinct from 'teacher' then raise exception 'That is not your class.'; end if;
  sid := public.class_member_id(a.class_id, p_member);
  update public.class_submissions set grade = nullif(left(btrim(coalesce(p_grade, '')), 40), ''), feedback = nullif(left(btrim(coalesce(p_feedback, '')), 2000), ''), reviewed_at = now()
    where assignment_id = a.id and user_id = sid;
  if not found then raise exception 'That student has not handed anything in yet.'; end if;
end $$;

-- lessons and assignments for one class page
create or replace function public.class_extras(p_class uuid)
returns jsonb language plpgsql stable security definer set search_path = public as $$
declare r text := public.class_role(p_class); uid uuid := auth.uid();
begin
  if r is null then return null; end if;
  return jsonb_build_object(
    'meetings', coalesce((select jsonb_agg(jsonb_build_object('id', m.id, 'title', m.title, 'starts_at', m.starts_at, 'minutes', m.minutes, 'link', m.link, 'note', m.note) order by m.starts_at)
      from public.class_meetings m where m.class_id = p_class and m.starts_at > now() - interval '14 days'), '[]'::jsonb),
    'assignments', coalesce((select jsonb_agg(jsonb_build_object('id', a.id, 'title', a.title, 'body', a.body, 'due', a.due, 'created_at', a.created_at,
        'mine', case when r = 'student' then (select jsonb_build_object('body', s.body, 'images', s.images, 'submitted_at', s.submitted_at, 'grade', s.grade, 'feedback', s.feedback, 'reviewed_at', s.reviewed_at) from public.class_submissions s where s.assignment_id = a.id and s.user_id = uid) end,
        'submitted', case when r = 'teacher' then (select count(*) from public.class_submissions s where s.assignment_id = a.id) end,
        'to_review', case when r = 'teacher' then (select count(*) from public.class_submissions s where s.assignment_id = a.id and s.reviewed_at is null) end) order by a.created_at desc)
      from public.class_assignments a where a.class_id = p_class), '[]'::jsonb));
end $$;

-- what is coming up across every class the caller teaches or is in: the teacher's desk and the learner's home card
create or replace function public.my_agenda()
returns jsonb language sql stable security definer set search_path = public as $$
  with mine as (
    select c.id, c.name, c.code, c.jlpt, c.created_at, true as teaching from public.classes c where c.teacher_id = auth.uid()
    union all
    select c.id, c.name, null, c.jlpt, c.created_at, false from public.class_members m join public.classes c on c.id = m.class_id where m.user_id = auth.uid()
  )
  select case when auth.uid() is null then null else jsonb_build_object(
    'role', (select role from public.profiles where id = auth.uid()),
    'teaching', coalesce((select jsonb_agg(jsonb_build_object('id', x.id, 'name', x.name, 'code', x.code, 'jlpt', x.jlpt,
        'students', (select count(*) from public.class_members m where m.class_id = x.id),
        'to_review', (select count(*) from public.class_submissions s join public.class_assignments a on a.id = s.assignment_id where a.class_id = x.id and s.reviewed_at is null),
        'active_7d', (select count(distinct d.user_id) from public.daily_activity d join public.class_members m on m.user_id = d.user_id where m.class_id = x.id and d.day >= (now() at time zone 'utc')::date - 6)) order by x.created_at)
      from mine x where x.teaching), '[]'::jsonb),
    'meetings', coalesce((select jsonb_agg(jsonb_build_object('id', m.id, 'class_id', x.id, 'class_name', x.name, 'title', m.title, 'starts_at', m.starts_at, 'minutes', m.minutes, 'link', m.link, 'note', m.note, 'teaching', x.teaching) order by m.starts_at)
      from public.class_meetings m join mine x on x.id = m.class_id where m.starts_at + (m.minutes || ' minutes')::interval > now() and m.starts_at < now() + interval '30 days'), '[]'::jsonb),
    'assignments', coalesce((select jsonb_agg(jsonb_build_object('id', a.id, 'class_id', x.id, 'class_name', x.name, 'title', a.title, 'due', a.due, 'teaching', x.teaching,
        'done', exists (select 1 from public.class_submissions s where s.assignment_id = a.id and s.user_id = auth.uid()),
        'to_review', case when x.teaching then (select count(*) from public.class_submissions s where s.assignment_id = a.id and s.reviewed_at is null) end) order by a.due nulls last, a.created_at desc)
      from public.class_assignments a join mine x on x.id = a.class_id), '[]'::jsonb)) end;
$$;

do $grants2$
declare f text;
begin
  foreach f in array array['set_role(text)', 'class_meeting_set(uuid, bigint, text, timestamptz, integer, text, text)', 'class_meeting_remove(bigint)', 'class_assignment_set(uuid, bigint, text, text, date)',
    'class_assignment_remove(bigint)', 'class_submit(bigint, text, text[])', 'class_submissions(bigint)', 'class_review(bigint, text, text, text)', 'class_extras(uuid)', 'my_agenda()'] loop
    execute format('revoke execute on function public.%s from public, anon', f);
    execute format('grant execute on function public.%s to authenticated', f);
  end loop;
end
$grants2$;

notify pgrst, 'reload schema';
