var CACHE = 'pubquiz-v1';
var PRECACHE = [
  '/pub-quiz/',
  '/pub-quiz/index.html',
  '/pub-quiz/manifest.json',
  '/pub-quiz/icon.svg',
  '/pub-quiz/film/oskarovci/index.html',
  '/pub-quiz/geografija/zastave/index.html',
  '/pub-quiz/geografija/suncevSistem/index.html',
  '/pub-quiz/knjizevnost/nobelovci/index.html',
  '/pub-quiz/istorija/nemanjici/nemanjici.html',
  '/pub-quiz/kviz/index.html'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(c) { return c.addAll(PRECACHE); })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  // Preskoči cross-origin zahteve (Wikipedia API, itd.)
  if (!e.request.url.startsWith(self.location.origin)) return;

  e.respondWith(
    caches.match(e.request).then(function(cached) {
      // Osvježi keš u pozadini
      var networkFetch = fetch(e.request).then(function(response) {
        if (response && response.ok) {
          var clone = response.clone();
          caches.open(CACHE).then(function(c) { c.put(e.request, clone); });
        }
        return response;
      }).catch(function() { return cached; });

      // Vrati keširano odmah, a mrežu samo ako nema u kešu
      return cached || networkFetch;
    })
  );
});
