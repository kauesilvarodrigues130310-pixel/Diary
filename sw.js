/* Penumbra — service worker: guarda os arquivos do app para funcionar offline.
   Para publicar uma versão nova, mude CACHE (ex.: penumbra-f1). */
var CACHE = 'penumbra-f1';
var FILES = ['./', 'index.html', 'manifest.webmanifest', 'app.css', 'app.js', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var r = e.request;
  if (r.method !== 'GET') return;
  var url = new URL(r.url);
  if (url.origin !== location.origin) return; // nunca toca em nada externo
  e.respondWith(caches.match(r, { ignoreSearch: true }).then(function (hit) {
    if (hit) return hit;
    return fetch(r).catch(function () { return r.mode === 'navigate' ? caches.match('index.html') : Response.error(); });
  }));
});
