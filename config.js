// Minna Line settings. See SETUP.md for the five-minute walkthrough.
//
// SUPABASE_URL and SUPABASE_KEY come from your Supabase project (Project Settings → API Keys / Data API).
// Use the *publishable* key (older projects call it the "anon public" key). It is meant to be public:
// the database rules in supabase/schema.sql decide what each person can read and write.
// Never put the secret / service_role key in this file.
//
// If both are emptied the app runs without accounts: progress saved in the browser only.
window.MINNA_CONFIG = {
  SUPABASE_URL: 'https://rzfxxxsfsbynvbvqtjzl.supabase.co',
  SUPABASE_KEY: 'sb_publishable_zYJ30fAfwlsy1AZMnt1CbQ_8kzeZugj',
  REQUIRE_LOGIN: true,   // true: visitors must create an account or log in before they can study
  APP_VERSION: '6.0',
};
