'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "9253c3bcecc585f7d9da961c2aa8d87b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b1f8f9a921bb488719766af3d3ecace4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0f/de618080f93449f4ce436843aefe9f7294513b": "46afe8889f25908d810bca9b22b5d260",
".git/objects/1d/734a70561bdfd020cfdd69dfb45a5acf465d53": "15d15c76d12a1b9227ff0fad363a4f80",
".git/objects/1e/5a43068af2ebe68bb292c8ea2c515ae15a1245": "d94d06919a99f1c3834352c96c68c52b",
".git/objects/1e/a65297f47a3acad78aff31ed88c974312774ad": "71459fac6c7b1a4b1d383946fb9d7009",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/8cc5154dbf49188caadb5b815501521e3c83c9": "ac065a129cab6a7697cf9e2daedde52c",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2c/670f16dcd4bc1a23da32461377e4dd9e683571": "b6df666063a930317f27923cd2490d28",
".git/objects/4a/efa5d0ec242a17885e76cb65b4ac7f95e192d5": "bcde401ed3d03c23eddc8f6c003d9ace",
".git/objects/4c/545969de1cf1c1edc93960d216cfa1a5e3e862": "b94f25d77e89a1333647ff9a63b87a32",
".git/objects/4e/b0b2cffa9efc6401cca7262fc347379fad1b34": "3a54d4134870e4dae732d3dcc979b0ba",
".git/objects/4f/5f852c7ad710aeaecd8d98ab543c9dd7fd798c": "b6ab50b0eb735f7a058c7b60ae962735",
".git/objects/59/924dfce16302ccc7478ca65de8e7e0ef5f9a3a": "99efe48177208cc9c8886963becd555e",
".git/objects/5b/07b5c37a40836f55592d1a1d984044ee708781": "6e65a4bf8a27e22383aa6acb53dd8aae",
".git/objects/5c/fa61106be917fd73a054974de3a26e52cdd144": "64b6b9ba672c15a21fa65c1cb577449e",
".git/objects/5d/071ed9f3594de238d4aaec65995a26d395ab8a": "c281e210e172fb1bdc9f0f8fedf73b4d",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/66/f70b28c756693f7e5c27c039fa0969dde4c612": "bded7b5f662b5572932cf6ccefd48110",
".git/objects/67/7ab5fe1fa842affa6760b9468d77a3ef02f3fd": "f162d8703d29d32a516881708c449554",
".git/objects/68/5a915f34927909738eced98cd92a5057ca234e": "7857480689b02434b3e1130a8aea560d",
".git/objects/6a/b035e2c370ed197a0fe5c833953a745c11569a": "ab33fb5e125ecc4b1702b1d1f4e80543",
".git/objects/6b/c62c20571d239258d245b16f39a7c4f2584cf7": "6a1ba454e0b8d93acf9246a3e79ce3ed",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/70/fe3eae2b73333aed3dfb368ab1db07e34f4086": "4e0e5af33d1a171533a783e4b1da24e0",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/7d/e1f25ddeb8b49c0dd38e0d6ef2e26582c4b9a7": "fbee3630ddbf6d3110ba353c96176e15",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/15b2a2a0f16f3b871f41cb5a5eac84adfd4703": "741e8873fe585ece468490bb8545453f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8f/fdef173907355a41848b8e97423844050cfc94": "0b2172d65cbd56a91d2d7eaea3baeaab",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/a4/0d8c78f7fc819ec02cb8d7f679c359f7b0a6d4": "6650a25fb33912e414f70be2c3a326ad",
".git/objects/a8/b52ae393aeef956536749897a973682521c7e5": "7040cc1afd5af76034eb604c6d05d0ae",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/3635252b543b4f96279d22158265e3457c1318": "2a37c1c8cfabd312dd80bee09bad3105",
".git/objects/b1/4ac4fa35ada6ab9d6d8852b0edd245379918fa": "a9d7fd62abdc8c0118f557b990745903",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b5/af6da8f92c424e7da26d59ac8c812b131c0298": "f7a929d1b4cb65eaaeb0d5c35e8fee51",
".git/objects/b6/c63cb5961cee009c2df8cbad48ac70fedf6f99": "0fadfeea7af4ff43b36adee7afbc4d8d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/a5d4e23b531a906df5ff7d8c64e7662be7c62a": "ea6a7b8eb7130fa04534ced9eabc151f",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/b8aecf281078b30e5bcfcaed354223e96a92bc": "033abd615415fb21e0a1283f6045f03d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/3de7c6487b825b0edea0240cad5f1720695e2e": "4764160a0c40ca6e790b1a775af25fa2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/0c02da9552ab46980559e05e01d3336785dce5": "78ee00cd7b346f9a567288ecd3b8ff96",
".git/objects/dc/c139feacfca3ce1343acc117fe0b212402657c": "60f0eebc091595ac8074876e311f2f79",
".git/objects/dd/aadc053160cc3dfb93b080afc62e94e48519b3": "3b6174513a85ef96b05de5bd70c806eb",
".git/objects/df/7afe0ab063dc7d370401a7a5b132c4896cf107": "7a8889fd2232335dad0f087fa54f9820",
".git/objects/e3/264cc210b0f22c666344df1e5a834f68e18af7": "49dd5e707ece70ed023fd7ebd012c98c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f0/b14e7c1c9ea34b5846387bf897b6a3e8623b64": "c2e0e86a48101609b2ea646b02975ecf",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/f792aa731f1db271755fd2ee3a0bde2ad103ea": "a4dea3213ad777d5fcce5b23f18fd5cf",
"assets/AssetManifest.bin": "48eb8d746b8dc3faa66ad3044de5d2e9",
"assets/AssetManifest.bin.json": "d692d23b958b1450a53c94da5983e9b9",
"assets/AssetManifest.json": "fad53f8c54cd6558ca5ff26700791c7c",
"assets/assets/images/cover1.jpg": "f41817c182277e194603612e873142df",
"assets/assets/images/cover10.jpg": "ccfb74e120025a4d5d8cbaf2ef114cd9",
"assets/assets/images/cover2.jpg": "d9bc2af553fd367176aff70131b9a2bb",
"assets/assets/images/cover3.jpg": "6ccbc44547bf284d9f8d6d28a3e010a0",
"assets/assets/images/cover4.jpg": "8d7708a76107736cea38979177868f5d",
"assets/assets/images/cover5.jpg": "72b71698020cf93919bca6c94c935022",
"assets/assets/images/cover6.jpg": "41b37dd983ac8d42aa1565ade4ae345f",
"assets/assets/images/cover7.jpg": "b9522333aa588075cc0a200e3c4550cb",
"assets/assets/images/cover8.jpg": "2a146bce8871331adbc72deeed9214ec",
"assets/assets/images/cover9.jpg": "0079a3ae86e8707bf6cdd34640cb54a7",
"assets/assets/images/justin.jpg": "5fc79f72b09e17bb2108184a0b9f0550",
"assets/assets/images/photo_2025-01-18_09-30-57.jpg": "15db98a676ef1901acc882983ddc84e6",
"assets/assets/logo.png": "d22947df9da0a4eb4c0ad8108aa95eb9",
"assets/assets/Spotify_logo.png": "270102cf0d8c466b63d2525fed6ee1eb",
"assets/FontManifest.json": "d4fee8630079af3d8df45dafe59dc501",
"assets/fonts/MaterialIcons-Regular.otf": "354028f3a2402861e3b8ad2dbd3a7fe0",
"assets/fonts/Satoshi-Black.otf": "22d9e9fdd8728dfa00bb0f49124ce5a7",
"assets/fonts/Satoshi-Bold.otf": "4a6fdcfc68ad464e8a9811e4edcacf00",
"assets/fonts/Satoshi-Regular.otf": "177a4dda04b52dedbd966942e932c5dc",
"assets/NOTICES": "44c171bfac6fe5b6733920e22e5fe223",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "8d87587e59308c61fb54e3cfc5e9bf9d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "18c395967e0d7f31201e545f6c7fbd61",
"/": "18c395967e0d7f31201e545f6c7fbd61",
"main.dart.js": "ecff7a5a2fac89fa94606aa12edf1f43",
"manifest.json": "0863a6e75b1269e6f1088906a1603112",
"version.json": "dc02b4d7e2115543a9e1f34ff2f9690f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
