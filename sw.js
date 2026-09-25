self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('oje-mba-store').then((cache) => {
      return cache.addAll(['./', './index.html', './driver.html']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
