'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6aa78a470ec1d15f53873477b8483a13",
"assets/AssetManifest.bin.json": "5aa5f297106babe08837355a34edea95",
"assets/AssetManifest.json": "c8f78d5e50a97353d76a2e07922494d9",
"assets/assets/icons/ic_2fa.png": "ee39a42810460996f402e89853328799",
"assets/assets/icons/ic_add_money.png": "c6d7e1a6b57565991efdbc5a69c46086",
"assets/assets/icons/ic_change_pass.png": "3c8c800cddc2751eca2a9d83b65e2f22",
"assets/assets/icons/ic_dashboard.png": "436e8a014b3ce12ef0d2c9e383aeb593",
"assets/assets/icons/ic_dashboard_mob.png": "f8b3888558b2ce94f85bb6e42fc97460",
"assets/assets/icons/ic_home.png": "2df498e3da7b63c7ce760507996af134",
"assets/assets/icons/ic_kyc.png": "d18c8c433e55825cb44ddb277b4305af",
"assets/assets/icons/ic_logout.png": "402a909442986ad76e1e3d40598de932",
"assets/assets/icons/ic_money.png": "a519d4e2b4a62035ee4fefc3845e6a60",
"assets/assets/icons/ic_money_transfert.png": "37743bd1366814dd13679d828eb1e1d1",
"assets/assets/icons/ic_my_invest.png": "a7c816cfb446078ac2883121fe658ea5",
"assets/assets/icons/ic_network.png": "9ced6f0886c5c4da5a38182cd4e265ef",
"assets/assets/icons/ic_plans.png": "5eaeabdcff6f99cd45b1c7a8bfd07150",
"assets/assets/icons/ic_profile.png": "81c330529766ff37ebfdaf5f4f02fbb5",
"assets/assets/icons/ic_profit_log.png": "ad4a9e07661a29e0c4f6bf69716bed99",
"assets/assets/icons/ic_question_mark.png": "2460e280898104e897e77593338f3777",
"assets/assets/icons/ic_rd_affiliat.png": "d76642e06ad25b5f3aa2b285f846f535",
"assets/assets/icons/ic_rd_invest.png": "ec3ef871448b2bfc18527f97c221ab8c",
"assets/assets/icons/ic_rd_money.png": "c796b3959eae5d57d29424688f76ceb6",
"assets/assets/icons/ic_rd_profit.png": "c018e36baaa9eca0d2dea29c69a390e3",
"assets/assets/icons/ic_support.png": "c1f64a711408ad2f8533f2331e035091",
"assets/assets/icons/ic_transaction_action.png": "e7aa5b54268a36e6bc033ea0ec7a494b",
"assets/assets/icons/ic_withdraw.png": "09beb402fcf6741309b0b4e2748e43bf",
"assets/assets/images/img_logo.png": "9c5a5f18c25d10082754f426b86e9e7a",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "376b2650bd0d45ebadea69a01e67951a",
"assets/img_logo.png": "9c5a5f18c25d10082754f426b86e9e7a",
"assets/NOTICES": "79276f75bdb504c467433605f7bd521a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "815cca9176f2a6ab17dcd177ce8ad04b",
"/": "815cca9176f2a6ab17dcd177ce8ad04b",
"main.dart.js": "17eff55016a1c8428cd9d23b76b21007",
"manifest.json": "8106993b4ae0f87068cb4ea070d3e994",
"version.json": "0b135461d3b9d91739c3b62ee8b7f089"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
