const CACHE_NAME = 'educhat-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/firebase.js',
  '/dashboard.html',
  '/chat.html',
  '/notes.html',
  '/profile.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});