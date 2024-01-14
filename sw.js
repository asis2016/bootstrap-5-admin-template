let APP = 'adminAM';

let ASSETS = [
    './',
    './index.html',
    './static/css/bootstrap.min.css',
    './static/css/jquery-jvectormap-2.0.5.css',
    './static/css/style.css',
    './static/js/dashboard.js',
    './static/js/expenses.js',
    './static/js/sales.js',
    './static/js/script.js',
    './static/js/jquery-jvectormap-2.0.5.min.js',
    './static/js/jquery-jvectormap-world-mill-en.js',
    './static/js/user-demographics.js',
]

/**
 * Start the service and cache ASSETS.
 */
self.addEventListener('install', installEvent => {
    installEvent.waitUntil(caches.open(APP).then(cache => {
        cache.addAll(ASSETS)
    }))
});

/**
 * For offline mode
 */
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
    }))
});