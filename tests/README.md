# Backend tests

Two checks for the account system. Neither needs a Supabase project.

```bash
cd tests
npm install --no-save @electric-sql/pglite
node schema.test.mjs     # runs supabase/schema.sql in an in-memory Postgres and checks every access rule
node community.test.mjs  # the same for supabase/community.sql (posting, likes, moderation, limits)
node adapter.test.cjs    # runs core.js + cloud.js against a fake Supabase HTTP API
```

Run them after changing anything in `supabase/` or `cloud.js`.
