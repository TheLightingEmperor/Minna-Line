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

notify pgrst, 'reload schema';
