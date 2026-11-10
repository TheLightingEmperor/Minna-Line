-- ─────────────────────────────────────────────────────────────────────────────
-- Minna Line community (ひろば): posts, comments, likes, reports and moderation.
-- Run this AFTER supabase/schema.sql: SQL Editor → New query → paste this whole file → Run.
-- Safe to run again; nothing is dropped and existing posts are kept.
--
-- How it is protected
--   · Only signed-in learners can read or write. Nobody can post as someone else.
--   · Like counts, comment counts, pinned / locked / hidden flags are changed only by the functions below,
--     never directly by a browser.
--   · Posts are read through community_feed() and community_thread(), which attach the author's public
--     details (name, Mochi, level) without ever exposing an email address.
--   · Admins (public.admins) can pin, lock, hide and delete anything, and mute a member.
--   · Limits: 8 posts and 100 comments per person per day, up to 4 pictures per post.
--   · Also here: member directory and profiles, reply notifications, and a weekly challenge posted automatically.
-- ─────────────────────────────────────────────────────────────────────────────

alter table public.profiles add column if not exists community_banned boolean not null default false;
alter table public.profiles add column if not exists community_seen_at timestamptz not null default now();
alter table public.profiles add column if not exists kudos integer not null default 0;   -- likes received
alter table public.profiles add column if not exists bio text check (char_length(bio) <= 240);

create table if not exists public.community_posts (
  id               bigint generated always as identity primary key,
  author_id        uuid not null references auth.users (id) on delete cascade,
  category         text not null,
  jlpt             text check (jlpt in ('N5', 'N4', 'N3', 'N2', 'N1')),
  title            text not null check (char_length(btrim(title)) between 3 and 140),
  body             text not null check (char_length(btrim(body)) between 1 and 8000),
  like_count       integer not null default 0,
  comment_count    integer not null default 0,
  pinned           boolean not null default false,
  locked           boolean not null default false,
  hidden           boolean not null default false,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now(),
  last_activity_at timestamptz not null default now()
);

alter table public.community_posts add column if not exists images text[] not null default '{}';
alter table public.community_posts drop constraint if exists community_posts_category_check;
alter table public.community_posts add constraint community_posts_category_check check (category in ('news', 'prompt', 'intro', 'question', 'win', 'tips', 'lounge'));
alter table public.community_posts drop constraint if exists community_posts_images_check;
alter table public.community_posts add constraint community_posts_images_check check (cardinality(images) <= 4);

-- one row per week, so the weekly challenge is posted exactly once
create table if not exists public.community_prompts (
  week    date primary key,
  post_id bigint references public.community_posts (id) on delete set null
);

create table if not exists public.community_comments (
  id         bigint generated always as identity primary key,
  post_id    bigint not null references public.community_posts (id) on delete cascade,
  parent_id  bigint references public.community_comments (id) on delete cascade,
  author_id  uuid not null references auth.users (id) on delete cascade,
  body       text not null check (char_length(btrim(body)) between 1 and 4000),
  like_count integer not null default 0,
  hidden     boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.community_likes (
  user_id    uuid not null references auth.users (id) on delete cascade,
  post_id    bigint references public.community_posts (id) on delete cascade,
  comment_id bigint references public.community_comments (id) on delete cascade,
  created_at timestamptz not null default now(),
  check ((post_id is null) <> (comment_id is null))
);
create unique index if not exists community_likes_post_uq on public.community_likes (user_id, post_id) where post_id is not null;
create unique index if not exists community_likes_comment_uq on public.community_likes (user_id, comment_id) where comment_id is not null;

create table if not exists public.community_reports (
  id          bigint generated always as identity primary key,
  reporter_id uuid not null references auth.users (id) on delete cascade,
  post_id     bigint references public.community_posts (id) on delete cascade,
  comment_id  bigint references public.community_comments (id) on delete cascade,
  reason      text not null check (char_length(reason) between 1 and 500),
  status      text not null default 'open',
  created_at  timestamptz not null default now()
);

create index if not exists community_posts_recent_idx on public.community_posts (created_at desc);
create index if not exists community_posts_cat_idx on public.community_posts (category, created_at desc);
create index if not exists community_posts_author_idx on public.community_posts (author_id, created_at desc);
create index if not exists community_comments_post_idx on public.community_comments (post_id, created_at);
create index if not exists community_comments_author_idx on public.community_comments (author_id, created_at desc);

-- ───────────────────────── guards ─────────────────────────
create or replace function public.community_post_guard()
returns trigger language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid();
begin
  if tg_op = 'INSERT' then
    if uid is null or current_setting('minna.system', true) = '1' then                 -- the dashboard, or the weekly challenge
      new.like_count := 0; new.comment_count := 0; new.created_at := now(); new.updated_at := now(); new.last_activity_at := now();
      return new;
    end if;
    if exists (select 1 from public.profiles p where p.id = uid and p.community_banned) then raise exception 'You are muted in the community.'; end if;
    if new.category in ('news', 'prompt') and not public.is_admin() then raise exception 'Only staff can post announcements.'; end if;
    if exists (select 1 from unnest(new.images) i where i not like uid::text || '/%') then raise exception 'Pictures must be your own uploads.'; end if;
    if not public.is_admin() and (select count(*) from public.community_posts c where c.author_id = uid and c.created_at > now() - interval '24 hours') >= 8 then
      raise exception 'You have reached today''s limit of 8 posts. Come back tomorrow.';
    end if;
    new.like_count := 0; new.comment_count := 0; new.pinned := false; new.locked := false; new.hidden := false;
    new.created_at := now(); new.updated_at := now(); new.last_activity_at := now();
  else
    new.updated_at := now();
    if uid is not null and new.category in ('news', 'prompt') and old.category <> new.category and not public.is_admin() then raise exception 'Only staff can post announcements.'; end if;
    if uid is not null and exists (select 1 from unnest(new.images) i where i not like uid::text || '/%') then raise exception 'Pictures must be your own uploads.'; end if;
  end if;
  return new;
end $$;
drop trigger if exists community_post_guard on public.community_posts;
create trigger community_post_guard before insert or update on public.community_posts for each row execute function public.community_post_guard();

create or replace function public.community_comment_guard()
returns trigger language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); p public.community_posts; par public.community_comments;
begin
  select * into p from public.community_posts where id = new.post_id;
  if p.id is null then raise exception 'That post no longer exists.'; end if;
  if uid is not null then
    if exists (select 1 from public.profiles pr where pr.id = uid and pr.community_banned) then raise exception 'You are muted in the community.'; end if;
    if (p.locked or p.hidden) and not public.is_admin() then raise exception 'This post is closed to new comments.'; end if;
    if not public.is_admin() and (select count(*) from public.community_comments c where c.author_id = uid and c.created_at > now() - interval '24 hours') >= 100 then
      raise exception 'You have reached today''s limit of 100 comments.';
    end if;
  end if;
  if new.parent_id is not null then
    select * into par from public.community_comments where id = new.parent_id;
    if par.id is null or par.post_id <> new.post_id then raise exception 'That comment no longer exists.'; end if;
    if par.parent_id is not null then new.parent_id := par.parent_id; end if;   -- replies stay one level deep
  end if;
  new.like_count := 0; new.hidden := false; new.created_at := now();
  return new;
end $$;
drop trigger if exists community_comment_guard on public.community_comments;
create trigger community_comment_guard before insert on public.community_comments for each row execute function public.community_comment_guard();

create or replace function public.community_comment_count()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if tg_op = 'INSERT' then
    update public.community_posts set comment_count = comment_count + 1, last_activity_at = now() where id = new.post_id;
  else
    update public.community_posts set comment_count = greatest(0, comment_count - 1) where id = old.post_id;
  end if;
  return null;
end $$;
drop trigger if exists community_comment_count on public.community_comments;
create trigger community_comment_count after insert or delete on public.community_comments for each row execute function public.community_comment_count();

-- ───────────────────────── reading ─────────────────────────
-- p_sort: hot (likes and comments, fading with age) | new | top (most liked in the last 30 days)
-- A member's public key: lets the app link to a profile without exposing account ids. Null for private members.
create or replace function public.member_key(p public.profiles)
returns text language sql immutable as $$ select case when p.is_public and not p.hidden then left(md5(p.id::text), 12) end $$;

drop function if exists public.community_feed(text, text, integer, integer, text);
create or replace function public.community_feed(p_category text default null, p_sort text default 'hot', p_limit integer default 30, p_offset integer default 0, p_jlpt text default null)
returns table (id bigint, category text, jlpt text, title text, excerpt text, like_count integer, comment_count integer, pinned boolean, locked boolean, hidden boolean,
               created_at timestamptz, last_activity_at timestamptz, author_name text, author_avatar jsonb, author_level integer, author_rank text, author_jlpt text,
               author_staff boolean, is_mine boolean, liked boolean, images text[], author_key text)
language sql stable security definer set search_path = public as $$
  select c.id, c.category, c.jlpt, c.title, left(c.body, 320), c.like_count, c.comment_count, c.pinned, c.locked, c.hidden, c.created_at, c.last_activity_at,
         coalesce(p.display_name, 'Conductor'), coalesce(p.avatar, '{}'::jsonb), coalesce(p.user_level, 1), p.rank_name, p.jlpt,
         exists (select 1 from public.admins a where a.user_id = c.author_id),
         c.author_id = auth.uid(),
         exists (select 1 from public.community_likes l where l.post_id = c.id and l.user_id = auth.uid()),
         c.images, public.member_key(p)
  from public.community_posts c left join public.profiles p on p.id = c.author_id
  where auth.uid() is not null
    and (not c.hidden or c.author_id = auth.uid() or public.is_admin())
    and (p_category is null or c.category = p_category)
    and (p_jlpt is null or c.jlpt = p_jlpt)
    and (p_sort <> 'top' or c.created_at > now() - interval '30 days')
  order by c.pinned desc,
    case when p_sort = 'hot' then (c.like_count * 2 + c.comment_count * 3 + 1) / power(extract(epoch from (now() - c.created_at)) / 3600 + 2, 1.3) end desc nulls last,
    case when p_sort = 'top' then c.like_count end desc nulls last,
    c.created_at desc
  limit least(greatest(coalesce(p_limit, 30), 1), 60) offset greatest(coalesce(p_offset, 0), 0);
$$;

create or replace function public.community_thread(p_post bigint)
returns jsonb language sql stable security definer set search_path = public as $$
  select case when auth.uid() is null then null else (
    select jsonb_build_object(
      'post', jsonb_build_object('id', c.id, 'category', c.category, 'jlpt', c.jlpt, 'title', c.title, 'body', c.body, 'like_count', c.like_count, 'comment_count', c.comment_count,
        'pinned', c.pinned, 'locked', c.locked, 'hidden', c.hidden, 'created_at', c.created_at, 'updated_at', c.updated_at, 'images', c.images, 'author_key', public.member_key(p),
        'author_name', coalesce(p.display_name, 'Conductor'), 'author_avatar', coalesce(p.avatar, '{}'::jsonb), 'author_level', coalesce(p.user_level, 1), 'author_rank', p.rank_name, 'author_jlpt', p.jlpt,
        'author_staff', exists (select 1 from public.admins a where a.user_id = c.author_id), 'author_id', case when public.is_admin() then c.author_id end,
        'is_mine', c.author_id = auth.uid(), 'liked', exists (select 1 from public.community_likes l where l.post_id = c.id and l.user_id = auth.uid())),
      'comments', coalesce((
        select jsonb_agg(jsonb_build_object('id', m.id, 'parent_id', m.parent_id, 'body', m.body, 'like_count', m.like_count, 'hidden', m.hidden, 'created_at', m.created_at,
          'author_name', coalesce(q.display_name, 'Conductor'), 'author_avatar', coalesce(q.avatar, '{}'::jsonb), 'author_level', coalesce(q.user_level, 1), 'author_rank', q.rank_name,
          'author_staff', exists (select 1 from public.admins a where a.user_id = m.author_id), 'is_op', m.author_id = c.author_id, 'author_key', public.member_key(q),
          'is_mine', m.author_id = auth.uid(), 'liked', exists (select 1 from public.community_likes l where l.comment_id = m.id and l.user_id = auth.uid())) order by m.created_at)
        from public.community_comments m left join public.profiles q on q.id = m.author_id
        where m.post_id = c.id and (not m.hidden or m.author_id = auth.uid() or public.is_admin())), '[]'::jsonb))
    from public.community_posts c left join public.profiles p on p.id = c.author_id
    where c.id = p_post and (not c.hidden or c.author_id = auth.uid() or public.is_admin())) end;
$$;

-- How many replies have landed on my posts and comments since I last looked.
create or replace function public.community_unread()
returns integer language sql stable security definer set search_path = public as $$
  select count(*)::integer from public.community_comments m
  join public.community_posts c on c.id = m.post_id
  left join public.community_comments par on par.id = m.parent_id
  where auth.uid() is not null and m.author_id <> auth.uid() and not m.hidden
    and (c.author_id = auth.uid() or par.author_id = auth.uid())
    and m.created_at > (select p.community_seen_at from public.profiles p where p.id = auth.uid());
$$;
create or replace function public.community_mark_seen()
returns void language sql security definer set search_path = public as $$
  update public.profiles set community_seen_at = now() where id = auth.uid();
$$;

-- Replies to my posts and comments, newest first. is_new marks the ones since I last looked.
create or replace function public.community_notifications(p_limit integer default 30)
returns table (comment_id bigint, post_id bigint, post_title text, excerpt text, created_at timestamptz, author_name text, author_avatar jsonb, is_new boolean)
language sql stable security definer set search_path = public as $$
  select m.id, c.id, c.title, left(m.body, 160), m.created_at, coalesce(q.display_name, 'Conductor'), coalesce(q.avatar, '{}'::jsonb),
         m.created_at > (select p.community_seen_at from public.profiles p where p.id = auth.uid())
  from public.community_comments m
  join public.community_posts c on c.id = m.post_id
  left join public.community_comments par on par.id = m.parent_id
  left join public.profiles q on q.id = m.author_id
  where auth.uid() is not null and m.author_id <> auth.uid() and not m.hidden and not c.hidden
    and (c.author_id = auth.uid() or par.author_id = auth.uid())
  order by m.created_at desc limit least(greatest(coalesce(p_limit, 30), 1), 60);
$$;

-- The member directory: public members only. p_sort: kudos | level | new
create or replace function public.community_members(p_sort text default 'kudos', p_limit integer default 60)
returns table (member_key text, display_name text, avatar jsonb, jlpt text, user_level integer, rank_name text, streak integer, kudos integer, posts bigint, bio text, joined date, staff boolean)
language sql stable security definer set search_path = public as $$
  select public.member_key(p), p.display_name, p.avatar, p.jlpt, p.user_level, p.rank_name,
         case when p.last_study_day >= (now() at time zone 'utc')::date - 2 then p.streak else 0 end, p.kudos,
         (select count(*) from public.community_posts c where c.author_id = p.id and not c.hidden), p.bio, p.created_at::date,
         exists (select 1 from public.admins a where a.user_id = p.id)
  from public.profiles p
  where auth.uid() is not null and p.is_public and not p.hidden
  order by case when p_sort = 'kudos' then p.kudos end desc nulls last, case when p_sort = 'level' then p.xp end desc nulls last, p.created_at desc
  limit least(greatest(coalesce(p_limit, 60), 1), 200);
$$;

-- One member's public card and their recent posts.
create or replace function public.community_member(p_key text)
returns jsonb language sql stable security definer set search_path = public as $$
  select case when auth.uid() is null then null else (
    select jsonb_build_object('member_key', public.member_key(p), 'display_name', p.display_name, 'avatar', p.avatar, 'jlpt', p.jlpt, 'user_level', p.user_level, 'rank_name', p.rank_name,
      'streak', case when p.last_study_day >= (now() at time zone 'utc')::date - 2 then p.streak else 0 end, 'best_streak', p.best_streak, 'kudos', p.kudos, 'stamps', p.stamps, 'trophies', p.trophies,
      'words_mastered', p.words_mastered, 'kanji_mastered', p.kanji_mastered, 'xp', p.xp, 'bio', p.bio, 'joined', p.created_at::date, 'is_me', p.id = auth.uid(),
      'staff', exists (select 1 from public.admins a where a.user_id = p.id),
      'posts', coalesce((select jsonb_agg(jsonb_build_object('id', c.id, 'category', c.category, 'jlpt', c.jlpt, 'title', c.title, 'like_count', c.like_count, 'comment_count', c.comment_count, 'created_at', c.created_at) order by c.created_at desc)
                         from (select * from public.community_posts c0 where c0.author_id = p.id and not c0.hidden order by c0.created_at desc limit 20) c), '[]'::jsonb))
    from public.profiles p where p.is_public and not p.hidden and left(md5(p.id::text), 12) = p_key limit 1) end;
$$;

-- The weekly challenge. The first member to open the plaza in a new week triggers it; it is posted once, by staff, and pinned.
create or replace function public.community_weekly_prompt()
returns bigint language plpgsql security definer set search_path = public as $$
declare wk date := date_trunc('week', now() at time zone 'utc')::date; staff uuid; pid bigint; n integer;
  prompts text[][] := array[
    ['Introduce your town in three sentences', 'Where do you live? What is it famous for? Write three sentences in Japanese, any level. わたしの まちは…'],
    ['What did you eat today?', 'Describe one meal in Japanese. Bonus points for a counter word. きょう、なにを たべましたか。'],
    ['Your study corner', 'Tell us where and when you study. A photo of your desk is welcome. どこで べんきょうしますか。'],
    ['The word that surprised you', 'Share one Japanese word you learned this week that has no neat English translation, and how you would use it.'],
    ['Teach us one kanji', 'Pick a kanji you finally remember. How did you make it stick? Give one word that uses it.'],
    ['Weekend plans', 'Write your weekend plans using ～たいです or ～つもりです. しゅうまつ、なにを しますか。'],
    ['A mistake worth sharing', 'What is one mistake you kept making, and what fixed it? Someone else is making it right now.'],
    ['Describe a photo', 'Post a picture and describe it in Japanese: who, where, what is happening. Corrections from others welcome.'],
    ['Why Japanese?', 'What made you start, and what keeps you going on the hard days?'],
    ['Three things you can see', 'Look around and name three things in Japanese with an adjective each. あかい ペンが あります。'],
    ['Your favourite Japanese thing', 'A film, a dish, a place, a song. Recommend it to the plaza and say why, in Japanese if you can.'],
    ['Small win of the week', 'A streak, a stamp, a sentence you understood in the wild. Tell us, we will cheer.']];
begin
  if auth.uid() is null then return null; end if;
  select post_id into pid from public.community_prompts where week = wk;
  if found then return pid; end if;
  select user_id into staff from public.admins order by added_at limit 1;
  if staff is null then return null; end if;
  insert into public.community_prompts (week) values (wk) on conflict do nothing;
  get diagnostics n = row_count;
  if n = 0 then return null; end if;                          -- someone else got there first
  n := 1 + (extract(week from wk)::integer % array_length(prompts, 1));
  update public.community_posts set pinned = false where category = 'prompt' and pinned;
  perform set_config('minna.system', '1', true);
  insert into public.community_posts (author_id, category, title, body) values (staff, 'prompt', 'This week: ' || prompts[n][1], prompts[n][2]) returning id into pid;
  perform set_config('minna.system', '0', true);
  update public.community_posts set pinned = true where id = pid;
  update public.community_prompts set post_id = pid where week = wk;
  return pid;
end $$;

-- ───────────────────────── acting ─────────────────────────
-- Like or un-like a post or a comment. Returns the new state and count.
create or replace function public.community_like(p_post bigint default null, p_comment bigint default null)
returns jsonb language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); owner uuid; n integer; now_liked boolean;
begin
  if uid is null then raise exception 'not signed in'; end if;
  if (p_post is null) = (p_comment is null) then raise exception 'like one thing at a time'; end if;
  if p_post is not null then
    select author_id into owner from public.community_posts where id = p_post;
    if owner is null then raise exception 'That post no longer exists.'; end if;
    if exists (select 1 from public.community_likes where user_id = uid and post_id = p_post) then
      delete from public.community_likes where user_id = uid and post_id = p_post; now_liked := false;
    else
      insert into public.community_likes (user_id, post_id) values (uid, p_post); now_liked := true;
    end if;
    update public.community_posts set like_count = (select count(*) from public.community_likes where post_id = p_post) where id = p_post returning like_count into n;
  else
    select author_id into owner from public.community_comments where id = p_comment;
    if owner is null then raise exception 'That comment no longer exists.'; end if;
    if exists (select 1 from public.community_likes where user_id = uid and comment_id = p_comment) then
      delete from public.community_likes where user_id = uid and comment_id = p_comment; now_liked := false;
    else
      insert into public.community_likes (user_id, comment_id) values (uid, p_comment); now_liked := true;
    end if;
    update public.community_comments set like_count = (select count(*) from public.community_likes where comment_id = p_comment) where id = p_comment returning like_count into n;
  end if;
  if owner <> uid then update public.profiles set kudos = greatest(0, kudos + case when now_liked then 1 else -1 end) where id = owner; end if;
  return jsonb_build_object('liked', now_liked, 'count', n);
end $$;

-- Staff tools. p_kind: post | comment | member.  p_action: pin, unpin, lock, unlock, hide, show, delete, mute, unmute
create or replace function public.community_moderate(p_kind text, p_id text, p_action text)
returns void language plpgsql security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'admins only'; end if;
  if p_kind = 'post' then
    if p_action = 'delete' then delete from public.community_posts where id = p_id::bigint;
    else update public.community_posts set
      pinned = case p_action when 'pin' then true when 'unpin' then false else pinned end,
      locked = case p_action when 'lock' then true when 'unlock' then false else locked end,
      hidden = case p_action when 'hide' then true when 'show' then false else hidden end
      where id = p_id::bigint;
    end if;
  elsif p_kind = 'comment' then
    if p_action = 'delete' then delete from public.community_comments where id = p_id::bigint;
    else update public.community_comments set hidden = (p_action = 'hide') where id = p_id::bigint; end if;
  elsif p_kind = 'member' then
    update public.profiles set community_banned = (p_action = 'mute') where id = p_id::uuid;
  end if;
end $$;

-- ───────────────────────── row level security ─────────────────────────
alter table public.community_posts    enable row level security;
alter table public.community_comments enable row level security;
alter table public.community_likes    enable row level security;
alter table public.community_reports  enable row level security;
alter table public.community_prompts  enable row level security;   -- no policies: only the prompt function touches it

drop policy if exists cposts_read on public.community_posts;
create policy cposts_read on public.community_posts for select to authenticated
  using (not hidden or author_id = (select auth.uid()) or (select public.is_admin()));
drop policy if exists cposts_insert on public.community_posts;
create policy cposts_insert on public.community_posts for insert to authenticated with check (author_id = (select auth.uid()));
drop policy if exists cposts_update on public.community_posts;
create policy cposts_update on public.community_posts for update to authenticated
  using (author_id = (select auth.uid())) with check (author_id = (select auth.uid()));
drop policy if exists cposts_delete on public.community_posts;
create policy cposts_delete on public.community_posts for delete to authenticated
  using (author_id = (select auth.uid()) or (select public.is_admin()));

drop policy if exists ccomments_read on public.community_comments;
create policy ccomments_read on public.community_comments for select to authenticated
  using (not hidden or author_id = (select auth.uid()) or (select public.is_admin()));
drop policy if exists ccomments_insert on public.community_comments;
create policy ccomments_insert on public.community_comments for insert to authenticated with check (author_id = (select auth.uid()));
drop policy if exists ccomments_delete on public.community_comments;
create policy ccomments_delete on public.community_comments for delete to authenticated
  using (author_id = (select auth.uid()) or (select public.is_admin()));

drop policy if exists clikes_read on public.community_likes;
create policy clikes_read on public.community_likes for select to authenticated using (user_id = (select auth.uid()));

drop policy if exists creports_read on public.community_reports;
create policy creports_read on public.community_reports for select to authenticated using ((select public.is_admin()));
drop policy if exists creports_insert on public.community_reports;
create policy creports_insert on public.community_reports for insert to authenticated with check (reporter_id = (select auth.uid()));
drop policy if exists creports_update on public.community_reports;
create policy creports_update on public.community_reports for update to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));

-- ───────────────────────── privileges ─────────────────────────
revoke all on public.community_posts, public.community_comments, public.community_likes, public.community_reports from anon, authenticated;
grant select, delete on public.community_posts to authenticated;
grant insert (author_id, category, jlpt, title, body, images) on public.community_posts to authenticated;
grant update (category, jlpt, title, body, images) on public.community_posts to authenticated;
grant update (bio) on public.profiles to authenticated;
revoke all on public.community_prompts from anon, authenticated;
grant select, delete on public.community_comments to authenticated;
grant insert (post_id, parent_id, author_id, body) on public.community_comments to authenticated;
grant select on public.community_likes to authenticated;
grant select on public.community_reports to authenticated;
grant insert (reporter_id, post_id, comment_id, reason) on public.community_reports to authenticated;
grant update (status) on public.community_reports to authenticated;

revoke execute on function public.community_feed(text, text, integer, integer, text) from public, anon;
revoke execute on function public.community_thread(bigint) from public, anon;
revoke execute on function public.community_unread() from public, anon;
revoke execute on function public.community_mark_seen() from public, anon;
revoke execute on function public.community_like(bigint, bigint) from public, anon;
revoke execute on function public.community_moderate(text, text, text) from public, anon;
revoke execute on function public.community_post_guard() from public, anon, authenticated;
revoke execute on function public.community_comment_guard() from public, anon, authenticated;
revoke execute on function public.community_comment_count() from public, anon, authenticated;
grant execute on function public.community_feed(text, text, integer, integer, text) to authenticated;
grant execute on function public.community_thread(bigint) to authenticated;
grant execute on function public.community_unread() to authenticated;
grant execute on function public.community_mark_seen() to authenticated;
grant execute on function public.community_like(bigint, bigint) to authenticated;
grant execute on function public.community_moderate(text, text, text) to authenticated;

revoke execute on function public.community_notifications(integer) from public, anon;
revoke execute on function public.community_members(text, integer) from public, anon;
revoke execute on function public.community_member(text) from public, anon;
revoke execute on function public.community_weekly_prompt() from public, anon;
revoke execute on function public.member_key(public.profiles) from public, anon;
grant execute on function public.community_notifications(integer) to authenticated;
grant execute on function public.community_members(text, integer) to authenticated;
grant execute on function public.community_member(text) to authenticated;
grant execute on function public.community_weekly_prompt() to authenticated;

-- ───────────────────────── pictures ─────────────────────────
-- Post pictures live in a Storage bucket. Each member can upload only into a folder named after their own account,
-- 2 MB per file, images only (the app shrinks photos before sending). The bucket is public-read so pictures load fast;
-- file names are random, so a picture can only be found by someone who can already see the post.
-- (Wrapped so that if Storage refuses for any reason, everything else in this file still installs.)
do $storage$
begin
  insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
  values ('community', 'community', true, 2097152, array['image/jpeg', 'image/png', 'image/webp', 'image/gif'])
  on conflict (id) do update set public = true, file_size_limit = 2097152, allowed_mime_types = array['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
  execute 'drop policy if exists community_images_upload on storage.objects';
  execute $p$create policy community_images_upload on storage.objects for insert to authenticated
    with check (bucket_id = 'community' and (storage.foldername(name))[1] = (select auth.uid())::text)$p$;
  execute 'drop policy if exists community_images_delete on storage.objects';
  execute $p$create policy community_images_delete on storage.objects for delete to authenticated
    using (bucket_id = 'community' and ((storage.foldername(name))[1] = (select auth.uid())::text or (select public.is_admin())))$p$;
exception when others then
  raise notice 'Picture storage was not set up (%). Posts work; pictures will not upload until this is fixed.', sqlerrm;
end
$storage$;

-- tell the API layer about the new tables and functions straight away
notify pgrst, 'reload schema';
