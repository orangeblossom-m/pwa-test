importScripts('/_nuxt/workbox.3de3418b.js', 'custom-sw.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-pwa",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.2bb01f4933e5c42050b8.js",
    "revision": "b43547b8a3299ff98b87b3bd38970a6a"
  },
  {
    "url": "/_nuxt/layouts/default.f09d29416abfdeeae7ec.js",
    "revision": "96ea01242910b10a5a6dc85b88d387e6"
  },
  {
    "url": "/_nuxt/manifest.45cc6abe6229db5a0e60.js",
    "revision": "351ded54f368987bce3c3e5b8a418b27"
  },
  {
    "url": "/_nuxt/pages/index.3f241cde374f3fc084d8.js",
    "revision": "5ce46cd6e31b77d5b8b0968ce9f349f3"
  },
  {
    "url": "/_nuxt/vendor.2cadf96c75822b415aba.js",
    "revision": "b30d244c28673e43d75a4bb3c85fc49f"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

