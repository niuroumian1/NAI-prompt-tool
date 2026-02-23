const CACHE_NAME = 'nai-v4-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.png'
];

// 安装时缓存资源
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// 离线时拦截请求
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
