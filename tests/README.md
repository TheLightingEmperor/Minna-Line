# Backend tests

Two checks for the account system. Neither needs a Supabase project.

```bash
cd tests
npm install --no-save @electric-sql/pglite
node schema.test.mjs     # runs supabase/schema.sql in an in-memory Postgres and checks every access rule
node adapter.test.cjs    # runs core.js + cloud.js against a fake Supabase HTTP API
```

Run both after changing `supabase/schema.sql` or `cloud.js`.
