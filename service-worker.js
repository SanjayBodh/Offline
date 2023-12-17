// service-worker.js
const cacheName = 'offline-cache-v1';
const offlinePage = 'offline.html';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName)
            .then((cache) => {
                return cache.addAll([offlinePage]);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return caches.match(offlinePage);
            })
    );
});
