importScripts('./polyfill.js');
self.addEventListener("install", function(t) {
		t.waitUntil(caches.open(s).then(function(t) {
				return t.keys().then(function(e) {
						var n = e.map(y)
							, r = self.ASSETS.filter(function(t) {
								return n.indexOf(t) === -1
						});
						return t.addAll([d].concat((0,
						c.default)(r)))
				})
		}))
});
self.addEventListener("activate", function(t) {
		t.waitUntil(caches.open(s).then(function(t) {
				return t.keys().then(function(e) {
						var n = e.map(y)
							, r = [l].concat((0,
						c.default)(self.ASSETS))
							, o = n.filter(function(t) {
								return r.indexOf(t) === -1
						});
						return i.default.all(o.map(function(e) {
								return t.delete(e)
						}))
				})
		}))
});

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
				// (t){return t.url.replace(self.location.origin,"")}
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function(event) {
	// 白名单缓存
  var cacheWhitelist = [];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("activate", function(t) {
		t.waitUntil(caches.open(s).then(function(t) {
				return t.keys().then(function(e) {
						var n = e.map(y)
							, r = [l].concat((0,
						c.default)(self.ASSETS))
							, o = n.filter(function(t) {
								return r.indexOf(t) === -1
						});
						return i.default.all(o.map(function(e) {
								return t.delete(e)
						}))
				})
		}))
});

self.addEventListener("fetch", function(t) {
	event.respondWith(
	  caches.match(event.request, {ignoreVary: true}).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      // IMPORTANT: Clone the request. A request is a stream and
      // can only be consumed once. Since we are consuming this
      // once by cache and once by the browser for fetch, we need
      // to clone the response
      var fetchRequest = event.request.clone();
      return fetch(fetchRequest)
        .then(function (response) {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          // IMPORTANT: Clone the response. A response is a stream
          // and because we want the browser to consume the response
          // as well as the cache consuming the response, we need
          // to clone it so we have 2 streams.
          var responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(function (cache) {
              cache.put(event.request, responseToCache).then(function () {
                console.log('successfully cached response!');
              });
            });
          return response;
        }
      )
    })
	);
})
