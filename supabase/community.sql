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
--   · Limits: 8 posts and 100 comments per person per day.
-- ─────────────────────────────────────────────────────────────────────────────

alter table public.profiles add column if not exists community_banned boolean not null default false;
alter table public.profiles add column if not exists community_seen_at timestamptz not null default now();
alter table public.profiles add column if not exists kudos integer not null default 0;   -- likes received

create table if not exists public.community_posts (
  id               bigint generated always as identity primary key,
  author_id        uuid not null references auth.users (id) on delete cascade,
  category         text not null check (category in ('news', 'intro', 'question', 'win', 'tips', 'lounge')),
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
    if uid is null then return new; end if;            -- inserted from the dashboard: no limits
    if exists (select 1 from public.profiles p where p.id = uid and p.community_banned) then raise exception 'You are muted in the community.'; end if;
    if new.category = 'news' and not public.is_admin() then raise exception 'Only staff can post announcements.'; end if;
    if not public.is_admin() and (select count(*) from public.community_posts c where c.author_id = uid and c.created_at > now() - interval '24 hours') >= 8 then
      raise exception 'You have reached today''s limit of 8 posts. Come back tomorrow.';
    end if;
    new.like_count := 0; new.comment_count := 0; new.pinned := false; new.locked := false; new.hidden := false;
    new.created_at := now(); new.updated_at := now(); new.last_activity_at := now();
  else
    new.updated_at := now();
    if uid is not null and new.category = 'news' and old.category <> 'news' and not public.is_admin() then raise exception 'Only staff can post announcements.'; end if;
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
create or replace function public.community_feed(p_category text default null, p_sort text default 'hot', p_limit integer default 30, p_offset integer default 0, p_jlpt text default null)
returns table (id bigint, category text, jlpt text, title text, excerpt text, like_count integer, comment_count integer, pinned boolean, locked boolean, hidden boolean,
               created_at timestamptz, last_activity_at timestamptz, author_name text, author_avatar jsonb, author_level integer, author_rank text, author_jlpt text,
               author_staff boolean, is_mine boolean, liked boolean)
language sql stable security definer set search_path = public as $$
  select c.id, c.category, c.jlpt, c.title, left(c.body, 320), c.like_count, c.comment_count, c.pinned, c.locked, c.hidden, c.created_at, c.last_activity_at,
         coalesce(p.display_name, 'Conductor'), coalesce(p.avatar, '{}'::jsonb), coalesce(p.user_level, 1), p.rank_name, p.jlpt,
         exists (select 1 from public.admins a where a.user_id = c.author_id),
         c.author_id = auth.uid(),
         exists (select 1 from public.community_likes l where l.post_id = c.id and l.user_id = auth.uid())
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
        'pinned', c.pinned, 'locked', c.locked, 'hidden', c.hidden, 'created_at', c.created_at, 'updated_at', c.updated_at,
        'author_name', coalesce(p.display_name, 'Conductor'), 'author_avatar', coalesce(p.avatar, '{}'::jsonb), 'author_level', coalesce(p.user_level, 1), 'author_rank', p.rank_name, 'author_jlpt', p.jlpt,
        'author_staff', exists (select 1 from public.admins a where a.user_id = c.author_id), 'author_id', case when public.is_admin() then c.author_id end,
        'is_mine', c.author_id = auth.uid(), 'liked', exists (select 1 from public.community_likes l where l.post_id = c.id and l.user_id = auth.uid())),
      'comments', coalesce((
        select jsonb_agg(jsonb_build_object('id', m.id, 'parent_id', m.parent_id, 'body', m.body, 'like_count', m.like_count, 'hidden', m.hidden, 'created_at', m.created_at,
          'author_name', coalesce(q.display_name, 'Conductor'), 'author_avatar', coalesce(q.avatar, '{}'::jsonb), 'author_level', coalesce(q.user_level, 1), 'author_rank', q.rank_name,
          'author_staff', exists (select 1 from public.admins a where a.user_id = m.author_id), 'is_op', m.author_id = c.author_id,
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
grant insert (author_id, category, jlpt, title, body) on public.community_posts to authenticated;
grant update (category, jlpt, title, body) on public.community_posts to authenticated;
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
