'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d0cff765364c44f4cabcd61701173f39",
".git/config": "62fc2cff66e58416f0c0622f17c51028",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8034058018d3aa92aa1f4fa37dbf64d5",
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
".git/index": "8a9cdc6acd146ddeb7a34225953c01d5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "79796478a6aadcb6ea23a2ba23133f9d",
".git/logs/refs/heads/final": "339c8b0f280c76c58f2e3a68c670e2f7",
".git/logs/refs/heads/main": "247193282980a708aff92bb1ca5506bf",
".git/logs/refs/remotes/origin/final": "3c71eaa16b82307bcc18355bc974069a",
".git/logs/refs/remotes/origin/main": "c90d3093bed69065085e03005786f817",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/80dfff10efbce2141e59d1f15055e69c4fc06d": "f526fc5fc78d5174538abc429732bbc6",
".git/objects/0c/9de04a36db374e76c182c0a02e2ef0352e9f7b": "ebbe695344b37b3e1f85fa82a7e5ef9c",
".git/objects/0d/aff4b93dc5c92b5996d82612f260512a76a822": "bb9d06a9dde5c10cfd8f0717ff6a4c43",
".git/objects/0e/dc7a77f14c6889ff8de48ee2105c26d5baa680": "8fb13654aa0013b43395aebe02ccef6a",
".git/objects/11/25d531f1599b0faaf7a55ac97cb794d69841e8": "815896f39b98da7a93f0337fb3ceb6be",
".git/objects/15/8739a2c91f44986eb9d9c1317f0eea91cfa46d": "0dd5d6a76fe1adb27ab73b6a342a4904",
".git/objects/16/a976cfc0803edf8469bc33d23bd01a77520132": "f1894533be461c47b6d20bcadefa4dfc",
".git/objects/18/8116cd392e112818c5f30ef6890c1ebcb52bff": "2e34a786552494c0b3c9e1986c342c10",
".git/objects/1a/703664de611b97eb17736cdc415dede32d5a50": "8f990a79215b9ed5e22db853cd5b799e",
".git/objects/1a/a51aff6872c9598f8c4ba1d47f0c91ddc8afab": "80586607ab522d13d89fc21e555e433c",
".git/objects/1c/49322cc94a431bc1cb2ce2e3395c32ae256081": "dccf172d1acbcd0e858b23a334e9c743",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/24/34a4d4bb39f9aa2436705c5040440df50121e6": "627c6f07861e732c708e4c0544fb8886",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/ee711de5f0ea6ea4e92e4c5f529239fdab0bfb": "dd6772e752e081c6785f9310f1523ee1",
".git/objects/29/67bfcad554c8442673013008dc12bc1ca45d74": "4a706f443e917609af68133e77f4e0b6",
".git/objects/2c/ea2ea0f8969e647f50ef04d8d4e1068570e37f": "b05fdf641337316ae9723a2d6b63a92f",
".git/objects/2f/8e64042846c320899f98fab02c9d0aa881f9d7": "8d0c18b64940adb8ffd72d7eddadfb1c",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/37/fb5fd6bdc0fb3a0538bafa47f9c03533e54b39": "1d8a9288ded6c0c8c88fc862c7959284",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/2446d3b4a1efe23ad7205a903338d9d0ea5d21": "2bf7eb6e56b447b3cf231f479d5b73cd",
".git/objects/4f/99c559a92d56585ca655011ac97f26ec9995d1": "7338f7a163efcb9a14abc59dc2db04ea",
".git/objects/61/c2f467aed1259561f009d27269912ad96a9762": "6f0d60fd2581a6fc6a16692d6ff0de89",
".git/objects/63/d1f2f60e60bd35e9f7463fc4e45dc0750808c4": "949d5976cf280b1554b6d6cf2b07ac9e",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/d2914b6a461b6fca9d197f6e4618361f5a0a8b": "fb0fd409cbf61674a178ee58645b1353",
".git/objects/6f/ac54d71788e3e3c04c35e6bd126342f3082f38": "8c534e4c8601f17a81773690c7048af8",
".git/objects/6f/ff17626eba00d5206223af9d75867e02e5f6e9": "a770ed6330a18b088a864c5b18923482",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/54e5258e7c8d10608945fb9a1c19113b533877": "66ac2836e3ec7ce38794a76df62cc083",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/92/2f5f12886f36ad8e7597d661de06bd25297f50": "f43c00526842622384fd7e535c7b8bbb",
".git/objects/95/abf9d27c63b9ae4fdb5c2b66a0d28c3f561569": "fdc5a7b1dcb3e414e5eaedf4e7d7a466",
".git/objects/96/505381e100c61ef814a0f63661f8e61a7186f7": "cc72c02f13db18333196542235df5622",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/d6a546e3d82713688e15f09bbd685369fe20f9": "418cd7bd653aac727deeb0252c206c11",
".git/objects/9c/7ff036212424162c2135dd3026dfd0df42c3d9": "83df5381bc8dc1cf73bdbbf196cf8059",
".git/objects/a0/4d4fc4ba6b49fa4c47e7b31eff951e9c3510aa": "1bed80d0ff943a8dc2a187f787fff2b8",
".git/objects/a5/accb4a71e4dd80702d5d5a1d1e7ca6db3125f9": "8fd7fb794fbf9f74d88a145f78ea886e",
".git/objects/a5/f90aed5807a736de1700bc5212efdaed9e3a30": "01a842aa3514ab23b1d2b8fa605ab3f6",
".git/objects/a6/9728f78d645c820cd1c5b85f3393a068e14589": "c3a8389360fab3cadde0035d38691fbe",
".git/objects/ab/de38a40d8713b215f8e512beeb2d89969f113d": "d3dde837e98b79dca5a445cae4da0659",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/97edd83aa873eb7b2dc13e8364c999455142fe": "623efc18382c51f06f5af4264f276842",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/aa3412d18d28bd979260a3b3e40df1e638a061": "8cc5e63d3d3b875d15628b91937b4ab0",
".git/objects/bc/0a476a661361913b0894601cbda186685cd0c7": "dfa91ebbc5650614851b30e626ec8dc4",
".git/objects/c1/31bde3f6a36b16529056da7fc0ac6873a88188": "12d8a9bf9a8fa480e2f1444d9019ee54",
".git/objects/c3/24523ad0e349883aead19f084fbc7c8f3e7c6f": "ec2292c0e543147ad55dd19e4aa01570",
".git/objects/c9/e8f8970f613a8faa8c0eb4341759a0e2954ead": "acb57e553ac3c134f2a9cec14dbee8d8",
".git/objects/cc/6da3eec27fa394e1ab1d34ae6c4cde05a506e7": "1d5054c8152c6b2df148294e91034032",
".git/objects/cc/e6a687495760d047c1efe35df2540cdb06cc11": "06fa7d0d755053529cb31346eff006de",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/b2bcf594a1caa7ba08c7b04bd14cb3f18461f0": "c7c79e097dabc40e94ada13fce885e75",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/a71f855cfe09d2a03c42bad9559c58921a55b6": "2eae5d3543c6d1243ff2e8c16b461211",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/5f51fca6407e69d81df222317693b5e7891cae": "3c5b4ccf76799b289d79fd394ad90c02",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/ab4110f1982b5f0096977f8b8f71a21d9a0771": "2d9fd31cd67a6a26b145eb81ffda7c99",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/20c1158e073c93f7247a641bdb105ec5c47cc8": "a3546fc70a21ddb5caec4df12d27cf34",
".git/objects/e0/d42e48c1a5bd6654dd431553e0a4cd4755962e": "7eca0ccb40eb753cb988ea16fa50e612",
".git/objects/e0/eeca37511712479493346671f601cf5d6f07ac": "dc4b3367417ce67338f8f1183fa38abb",
".git/objects/e3/1d81c5864303b9e18929ca21a5bc41e64f39b2": "bb23507a304b81176b85df2decb1d6ef",
".git/objects/e5/310dcaae291b1ede257dba37325964f46f7bcc": "4038ba247f0a07477171a926dd08538f",
".git/objects/e9/c775bb61a922a35470788dab6e7ef780d05ad8": "15e919d183d9492b6ca0822d4bc848aa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/9affb91cbff53bed2e49460e7d55e65dfb1bf3": "6286a9207c66ccd5251387bda546cddf",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/20462b5837aab6dbfa87f127bfad4e48ba2011": "529bd684f508cd4020c1329ffce7b2c6",
".git/objects/f3/fd261a61e4092819bb20bfc237527db3487621": "628514075506793571ff11c6f9a5a2b9",
".git/objects/f5/ba595655b738633e2cac946c5769def2e7bf71": "48b8dc540477a0973fa3b19aab2a0eeb",
".git/objects/f6/a1d2397d63db5861c479d347831d456932ed1f": "eb031a1f72ae250a614a85905998a8d3",
".git/objects/fa/4cff505eb671d6258554f5d71e873f686a6098": "35a07c049c2e378a6b66a63bd0b61194",
".git/ORIG_HEAD": "5f7ae129dea7696fb0569d9868229f40",
".git/refs/heads/final": "e4141275472ec9a5082b72a0be5eb982",
".git/refs/heads/main": "4885ae97c8a5f0c9d6f1e9f8a9dff7cc",
".git/refs/remotes/origin/final": "e4141275472ec9a5082b72a0be5eb982",
".git/refs/remotes/origin/main": "4885ae97c8a5f0c9d6f1e9f8a9dff7cc",
"assets/AssetManifest.bin": "7e9eca06a3338a3b1554232b2ab9592b",
"assets/AssetManifest.bin.json": "767a426883494fbfdf217a4338cbe493",
"assets/AssetManifest.json": "1171ea01c74c8887abf955b943f44f8b",
"assets/FontManifest.json": "7e9433d5386f1e47ab22f0afd8e7a4f9",
"assets/fonts/MaterialIcons-Regular.otf": "3db96c4af101063e5369e090ed184e9c",
"assets/fonts/NotoSans-Regular.ttf": "c8e58befd2433eb89589dd1d23225c4e",
"assets/NOTICES": "c6b445454cda00cee728cc63faf75ad3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "0ba219f9f0a307c609eceb74555368d1",
"harmonies_favicon.ico": "78ec935b89276f3aa6b21f2382414247",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "59c3e086c68e265234cb09f6918a2ac6",
"/": "59c3e086c68e265234cb09f6918a2ac6",
"main.dart.js": "fa9f202efd69484dc39bdfa5b92aa9b5",
"manifest.json": "7d6d4f90a8686ea085a8207fa2bccaca",
"version.json": "03e534d03a164d5e68e0a54e30a32881"};
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
