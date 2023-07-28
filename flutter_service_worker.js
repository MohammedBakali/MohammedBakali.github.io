'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9a024de34deaf6dd8a51fcb4cb918879",
"index.html": "5422f7ad7b78c6fb77d2ace5fe07ab6d",
"/": "5422f7ad7b78c6fb77d2ace5fe07ab6d",
"main.dart.js": "9ce0d688a312401ec936e4ed52f37935",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"mediSoft.png": "90641649d977fa2ce909ddc92948db31",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/app_launcher_icon.png": "791a58868db06dd21c4d9faa2457d8e5",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7adf5ab180a482ad8379bf148ce9de0d",
"lotus.png": "791a58868db06dd21c4d9faa2457d8e5",
"assets/AssetManifest.json": "d914c3ca0ef658f280250d080ca6e6cf",
"assets/NOTICES": "132ad75bcf9df60409d5d5a575a96267",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4bc7849a5c7774cfa18e4bc2ef82404a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "dbf0a93d2b23d99b7af4b1a6ab94e122",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bbc3a2d2265f7ff6bef4ba339a0ba4c9",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "ea48f93d3b0eea732369c31fa05bcbda",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/Redness.png": "5924990d93f83506bd88fc235fc69708",
"assets/assets/images/add.png": "bcc9b98d340f9fba1a29f428195aa685",
"assets/assets/images/vnimc_1.png": "f93e967047c4d64dfaee5157d153aa1c",
"assets/assets/images/49svh_2.png": "f314ca7f2b27a2164e415bed0d2c1e89",
"assets/assets/images/SkinRejuvenetion.png": "035604b4874c4f39ddbca00393e6d1ab",
"assets/assets/images/fatReduction.png": "71d09cc57eef795d7e6d181a03e21505",
"assets/assets/images/Liquid_Facelift.png": "c18a847d71590512f88decf6ba26a371",
"assets/assets/images/Opus_Complete_Enhancement.png": "481f8bc8aff7875d496baab4f7d6ca2c",
"assets/assets/images/fi-sr-search.png": "0ef0513d2d653b16a214b00ff962ece5",
"assets/assets/images/Star_6.png": "a6844893a506747977ce951ce656dc8e",
"assets/assets/images/Discoloration.png": "64d5905a76f8e90c813fe97e62e44494",
"assets/assets/images/3a9k2_3.png": "3a14a210059708a8f0b469980a7e0f4d",
"assets/assets/images/LooseSkin.png": "84592b78fe67546cc81b999a1b15f2dd",
"assets/assets/images/Alastin_Ultimate_Collagen_Skin_Care_System.png": "904e78e21112ceff5b8490d6dffeb5a4",
"assets/assets/images/Wellness.png": "146327cd476ac430b86cea81c611da82",
"assets/assets/images/Browse&Lashes.png": "26d8844562b39d2abff98bec2fc7ac56",
"assets/assets/images/Forever_Clear_BBL.png": "f6ecf4db4b2ed11f31f2b78ad237acda",
"assets/assets/images/Duo_Enhancement.png": "f58fc901088e6a34dac3ee4cba8acd52",
"assets/assets/images/AestheticClinic1.png": "fe627c5f552d907da89011530b83d49f",
"assets/assets/images/Standard_Collection_24.png": "3ef582f240360541edbfd4156db1902c",
"assets/assets/images/Standard_Collection_24-4.png": "6efdbb34b6b020cde3cd44b441572ef3",
"assets/assets/images/fijek_4.png": "6fce53bbabfe6566c26ba8ab2adf1871",
"assets/assets/images/map.png": "3950858ba5dddd677cdcf1932e4cf877",
"assets/assets/images/Vector.png": "4d2c07221147eea9ce65d2e07a97512f",
"assets/assets/images/AestheticClinic3.png": "a9fb39392fc25ac60791a50591b8e8e7",
"assets/assets/images/Turkey_to_Tight_in_Six_Months!.png": "b05a88a23609c7ec1e1259c534f31d03",
"assets/assets/images/AestheticClinic2.png": "2391187a4ac9f5778a168e44ab153637",
"assets/assets/images/fi-sr-comment.png": "a9dd9449f1887c28fd3af3e0e0fd26b4",
"assets/assets/images/Home.png": "79915adf2d2b2b5daee5cf5d4448715c",
"assets/assets/images/Standard_Collection_24-3.png": "e7d978c09f3c2b63ffa4819286436405",
"assets/assets/images/Standard_Collection_24-2.png": "20e70cc04cf710175881585f5397d547",
"assets/assets/images/app_launcher_icon.png": "791a58868db06dd21c4d9faa2457d8e5",
"assets/assets/images/MOXI_Prejuvenation.png": "9cfb7edc154ae708d29deab915ac3b94",
"assets/assets/images/AestheticClinic4.png": "f15ee93a14562f4e9c33ac5e2689e97e",
"assets/assets/images/Scars.png": "f85f916d6488503ac7bf53842c9578df",
"assets/assets/images/Chin&Jawline.png": "62fe4bdadf4ae926775077b7de1169c4",
"assets/assets/images/Search.png": "e0bd67f3291fb1bc8cb01af845478264",
"assets/assets/images/mediSoft.png": "90641649d977fa2ce909ddc92948db31",
"assets/assets/images/Cellulite.png": "d239406a650cd597dfd77eebc12e24e0",
"assets/assets/images/Taban_Oculoplastic_Surgery.png": "b71bb5a35cce827b5c0dadcddad6a49a",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/Double_Chin.png": "d37adb928fe265fb19908c72e752cc4e",
"assets/assets/images/SexualWellness.png": "1b87e3a8386a38efefeb76f98648b601",
"assets/assets/images/Acne.png": "8a43247da621acf12783679943cdc720",
"assets/assets/images/HairRemoval.png": "ae22232ad02f3a2e5a033ec6aca2dd6f",
"assets/assets/images/profile.png": "5fc009297a3d483197ab8d0bbd9067a1",
"assets/assets/images/u_map-marker.png": "056d0da741e530753918f5afda0c0448",
"assets/assets/images/BottomBar.png": "f93877a865b15a359a94141874ddf0fc",
"assets/assets/images/Taut_&_Toned_Pro.png": "31d49208feca3b560f67c1c91bc08a4b",
"assets/assets/images/EnlargedPores.png": "41ae8282d1f03def752fdb29613e0a60",
"assets/assets/images/promo_tile_2.png": "0cbc0450814b0cce50596934dad00749",
"assets/assets/images/Opus_Face_Enhancement.png": "c90163cb831a889faf55d6e0a387f744",
"assets/assets/images/Wedding_Ready_Package.png": "d2e508bc619576432fecef8bcb692acf",
"assets/assets/images/2emqy_5.png": "42f318dda6fd9e69df5c65a8106f2ce2",
"assets/assets/images/promo_tile_3.png": "b5de614209ccc226117dc567d799c196",
"assets/assets/images/promo_tile_1.png": "415d2a8881bd7daa5bf23a36f0c8b046",
"assets/assets/images/fi-sr-gift.png": "c88e80b9e586811cb8e9dbd6b149ee5d",
"assets/assets/images/BodySculpting.png": "66c5949dd9d193e8af2edeeb036ecd95",
"assets/assets/images/promo_tile_4.png": "509e8290781b5e35ed79eb675374e4af",
"assets/assets/images/EMTONE_Touchup_Pro.png": "abeefe560c901b5c0b4f6cd21967b93e",
"assets/assets/images/Taut_&_Toned_+.png": "391235bb0f2cbc07abfeafe881e92e7b",
"assets/assets/images/Extreme_Body_Makeover.png": "5d108a2b5b0d11f98312da34b1b9ac40",
"assets/assets/images/Reward.png": "7d5e6ea0741c238427c09bfdf99eecb3",
"assets/assets/images/Chat.png": "85f7a60a4ce2a13de9bd49c5b55d5c5f",
"assets/assets/images/Wrinkles.png": "62174e3ef61ed2fc1fb4a9e820d0d9b0",
"assets/assets/images/icon-128x128.png": "4bdc7c1a3f9162c3a367d9fa576a35b7",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
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
