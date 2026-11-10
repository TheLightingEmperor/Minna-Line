# Switching on accounts, sync and the leaderboard

Minna Line works with no backend at all: progress is saved in the browser. To turn on **email + password accounts, sync across devices, the weekly league, login tracking, feedback and the admin dashboard**, connect it to a free [Supabase](https://supabase.com) project. It takes about five minutes and costs nothing.

Want to see every screen first? Open the site with `?demo=1` on the end (for example `http://localhost:4390/?demo=1`). That runs a pretend backend inside your browser with sample learners. It only works while no real backend is connected.

## 1. Create the project

1. Go to [supabase.com](https://supabase.com) and sign up (GitHub sign-in is quickest).
2. **New project** → name it `minna-line` → pick the region nearest your learners → set a database password (save it somewhere; the app never needs it).
3. Wait a minute for it to finish setting up.

## 2. Create the tables

1. In the project, open **SQL Editor** → **New query**.
2. Paste the whole of [`supabase/schema.sql`](supabase/schema.sql) and press **Run**. You should see "Success. No rows returned".

Running it again later is safe. It never deletes data.

## 3. Let people in without an email round-trip (recommended for the beta)

**Authentication → Sign In / Providers → Email** → turn **Confirm email** off → Save.

Why: Supabase's built-in mail sender is meant for testing and only delivers a handful of emails. With confirmation off, a new learner is in the moment they press the button. The app copes with either setting.

Also set **Authentication → URL Configuration → Site URL** to `https://minna-line.netlify.app` so password-reset links come back to the app.

## 4. Give the app its keys

In **Project Settings → API Keys** (and **Data API** for the URL) copy:

- the **Project URL**, like `https://abcdefgh.supabase.co`
- the **publishable** key (older projects call it the `anon` `public` key)

Paste both into [`config.js`](config.js):

```js
window.MINNA_CONFIG = {
  SUPABASE_URL: 'https://abcdefgh.supabase.co',
  SUPABASE_KEY: 'sb_publishable_…',
  REQUIRE_LOGIN: true,
  APP_VERSION: '6.0',
};
```

These two values are safe to publish. The rules in `schema.sql` decide what each person may read and write. **Never** put the `secret` / `service_role` key in the app or the repo.

Commit and push. Netlify redeploys on its own.

## 5. Make yourself the admin

1. Open the site and create your own account.
2. Back in **SQL Editor**, run this with your email:

```sql
insert into public.admins (user_id) select id from auth.users where email = 'you@example.com' on conflict do nothing;
```

3. Reload the app → **Me** → **Admin dashboard**. (On a computer, **Me** is the person icon at the top right; on a phone it is the last tab.) The row only appears for admins.

## 6. Switch on the community (ひろば)

The Community tab is a members-only space for posts, comments and likes, with categories (Announcements, Weekly challenge, Introductions, Questions, Wins, Study tips, Lounge), Hot / New / Top sorting and level tags. It also has pictures on posts (up to four, shrunk in the browser before upload), a member directory with profile cards, a list of replies to you, a "Share this win" button after earning a stamp, and a weekly writing challenge that posts itself each Monday.

If you ran an earlier version of the file, run it again: it adds what's new and keeps everything already posted.

1. **SQL Editor → New query** → paste the whole of [`supabase/community.sql`](supabase/community.sql) → **Run**.
2. Reload the app. Until you do this, the tab shows a "still being built" notice.

What you can do as an admin, from inside any post: **Pin**, **Close comments**, **Hide**, **Delete**, and **Mute author**. Only admins can post in Announcements. Reports from members appear in a "Reports to review" card on the Community page. To unmute someone, set `community_banned` to false on their row in `profiles`.

Limits built in: 8 posts and 100 comments per person per day; titles up to 140 characters; posts up to 8,000.

Tables: `community_posts`, `community_comments`, `community_likes`, `community_reports`, `community_prompts`. Pictures are stored in a Storage bucket called `community` (see **Storage** in the dashboard); the free plan includes 1 GB, which is several thousand photos at the size the app uploads.

The weekly challenge is posted under the name of the first admin, so make yourself an admin (step 5) before opening the Community tab.

## 7. Switch on classes (クラス)

A teacher starts a class and gets a six-character code. Students join with the code (or an invite link that fills it in), see their homework on the home page, and the teacher sees one table of everyone's activity, accuracy, readiness and homework stamps, with a CSV download.

1. **SQL Editor → New query** → paste the whole of [`supabase/classes.sql`](supabase/classes.sql) → **Run**.
2. In the app: **Me → Classes**. Anyone signed in can start a class (up to 10) or join one.

Homework is a station. It counts as done when the student wins that station's stamp. A teacher sees only name, Mochi, level, activity and stamps for students who typed their code, never an email.

## Public study pages (for search engines)

Everything under `/learn/` is plain HTML that Google can read without logging in: one page per grammar point (460), an index per JLPT level, and one page per Guidebook sheet, plus `sitemap.xml` and `robots.txt`. They are generated from the app's own data:

```bash
node tools/build_pages.js
```

Run that and commit after changing grammar or Guidebook data. To get indexed faster, add the site in [Google Search Console](https://search.google.com/search-console) and submit `https://minna-line.netlify.app/sitemap.xml`.

## Where the data lives

| You want to see | In the app | In Supabase |
|---|---|---|
| Everyone who signed up | Me → Admin dashboard → Learners | Table Editor → `user_overview` (or `profiles`) |
| Every login, with device and time zone | Admin → Recent logins | Table Editor → `login_events` |
| Each person's progress in detail | Admin → click a learner | `profiles.summary`, and the full save in `progress.data` |
| Day-by-day activity | Admin → charts, and each learner's last 30 days | `daily_activity` |
| Feedback from the beta | Admin → Latest feedback | `feedback` |
| Spreadsheet exports | Admin → Learners / Logins / Activity CSV | any table → Export |

`login_events.event` is `signup` the first time, `login` when someone types their password, and `resume` when they come back on a new day still signed in.

## What learners can and can't see

- Their own profile, progress, activity and login history. Nobody else's.
- The leaderboard shows only name, Mochi avatar, JLPT level, app level, streak and score, and only for people who left "Show me on the public leaderboard" ticked. Email is never exposed.
- You can remove anyone from the board: Admin → click the learner → **Hide from the leaderboard**.
- Anyone can erase their account and all their data from **Me → Delete my account**.

## Free-plan notes

- Supabase pauses a free project after a week with no activity at all. Any learner opening the app counts as activity. If it does pause, press **Restore** in the dashboard; nothing is lost.
- **Password-reset emails** use Supabase's test mail sender, which is heavily limited. Before a wider launch, add a free SMTP provider (Resend, Brevo) under **Authentication → Emails → SMTP Settings**, and you can then turn **Confirm email** back on too.
- The leaderboard trusts scores sent by each learner's browser. That's fine for a friendly beta; a determined cheat could inflate their own XP. Daily XP is capped and old days can't be back-filled.

## Options

- `REQUIRE_LOGIN: false` in `config.js` lets visitors study as guests and offers account creation from the home page instead of gating the app.
