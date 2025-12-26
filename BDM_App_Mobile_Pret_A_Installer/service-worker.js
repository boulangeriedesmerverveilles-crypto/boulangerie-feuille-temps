
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('bdm-cache-v1').then(cache => {
      return cache.addAll([
        './',
        './FEUILLE_DE_TEMPS_MENSUELLE_BDM_REPOS.html'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
