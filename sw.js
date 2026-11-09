// Minna Line service worker: makes the app installable and usable offline.
// Strategy: always try the network first so a new deploy shows up straight away,
// and fall back to the last copy we saw when there is no connection.
const CACHE = 'minna-line-v6';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', (e) => {
  const req = e.request, url = new URL(req.url);
  const fonts = url.host === 'fonts.googleapis.com' || url.host === 'fonts.gstatic.com';
  if (req.method !== 'GET' || (url.origin !== self.location.origin && !fonts)) return; // never touch API calls
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      const res = await fetch(req);
      if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone()).catch(() => {});
      return res;
    } catch (err) {
      const hit = await cache.match(req, { ignoreSearch: req.mode === 'navigate' }) || (req.mode === 'navigate' ? await cache.match('./') || await cache.match('index.html') : null);
      if (hit) return hit;
      throw err;
    }
  })());
});
