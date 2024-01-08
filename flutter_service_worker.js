'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "88b46795e0af96197a4b365d0e9a06d3",
".git/config": "7c8c459fe29e5f61ca0f5537aada3226",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0379deeb95eb7636b562919f8ceefe69",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c76a700b7052861b50059cc202e53aa0",
".git/logs/refs/heads/master": "c76a700b7052861b50059cc202e53aa0",
".git/logs/refs/remotes/myremote/master": "3540cbcb292182fa98d73336db58055f",
".git/objects/01/7ec6e1a5b0aa034846c2bfca6412279fcaa958": "c15ff699be2c5469a06ecfcca3b5a18c",
".git/objects/04/3f5a870a7e4a65a5fa139a77bd29a2a4ef5663": "2f2a03440903e9382e0886d9f50de05b",
".git/objects/04/a7e89795048ce7e299e9de7740eb5b18b566bc": "90923b5ae17267bc2a3c96b760d91089",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/07/d7a0cef50faf780b998bbb6dd4bb293f88e6c0": "982451dae81ab64e0a3d92ba69a9384a",
".git/objects/0c/f780ae0a569cd789cfe1f7fe44bb8c8643584a": "63fa255e56715a6d763f4d86163bca71",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/11/7ea2b358e5bde6e5a399ad3dce3f5afd9789bc": "a6c7a6698ee93559b8e240b6e3aabdf2",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/17/feaff0bb11154a99b760c625212d4d7b5cbdcb": "7d2f47d04155459dee22097a715351fd",
".git/objects/18/70776d2cfb54d77a4a5d7610154a34403a7d2b": "58e9e704bc0d33c81e48daae42d0c86c",
".git/objects/1a/6cb211a5e8464105508cb974b69b5110a8da53": "9848d49a2122c82d92eae05b14ddb0bc",
".git/objects/1c/dce90184ee7711f5cb4f5547833c96a4c82f22": "6414dd3bdd6dc32a3ee8c212b332756d",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/924ab4194c75b45f82c5a5aa6b0a2a86a37ba2": "545b76b72f58db2d95abf3c7863cf5d5",
".git/objects/20/beb945e251b919cc57e84e508105a1a1ed9aa6": "a3c89fec260216c78cb8bb3e0355e90c",
".git/objects/21/895562f904fa0bf977cbdf9c2ee3f8a96af6c2": "2b7cdfda3dc08ef244d51297492ca47c",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/132def1c629c968d61c07a1ac71d3684438854": "df6fe3318560155ddf0781fd3bb2f13f",
".git/objects/2a/660f8a90ab35927e2ad1477cf44f4907e33258": "e872a7ecf748f673f57b0e3fc12ca7e7",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/2ef4930b91ce4a885fbaa14ad05e60ea6f52da": "b9ee2186104096cb0beee1d87a93a1d9",
".git/objects/2f/5efef60b57dca5269bbb4e5fca6a7d4d038cb7": "77a93d6c602dd654e190890dad559a15",
".git/objects/32/dacaa60d9fb2ff3cd75790687f94b31600918b": "a5303f04fa709fcd7f08d25fe74fc400",
".git/objects/34/32e5102104de808741507b748bf4d0463d7690": "a1c263e294a4c886a30ab83e8327a7be",
".git/objects/39/8899eda572e7653b8f1d84e7e59811f13e21ec": "fb93173224fbb1a524d6e71f48320e5b",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/544ba125341b0fcf36c7d67533021737d54cb0": "faba682ae1a812c0a8df83f73ab97985",
".git/objects/46/f15fc04e7743cf49c5da16d41a50554d4ecb08": "f90542c37158a5795e18343c9c089d25",
".git/objects/47/f92cc5c18bdd04ace3a1cb0a7c9ee62dcce391": "61d4af34317b37fe5756251d28839fc2",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/7041bad37fee925d528e927cfa18d6e19c416e": "49433e75ba6ee883e7455f8d60f5f52c",
".git/objects/4b/b2abdfb952a259c45f34e7e448787c9ed567e2": "4f738a651255c290c31fd7e2aeb6a941",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/52/bb6966d7aadfd5f1ebfd79a71a65d49ef53cd8": "3bc2319dee40cfddce807de72fa9a626",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/59/3013fc8b6d3bf442c580fb5f1b4f09d3802147": "5a2c2c1f1ce87fb7f3e91ab69c2f14a3",
".git/objects/62/3a5595b47339f33586368dacca61f6b255e93e": "cb28d987def3666253dd4989f94056fb",
".git/objects/62/b195f72d967b72689bfbaefafaaa12bfca3196": "2b083d3cdcb4474f5282c860c8c91213",
".git/objects/66/2d7018de66626ab7f9d47f806bc7c8cedd6d8f": "8237551c6768f86cf4791ad7bf457275",
".git/objects/6a/3e36f5cd34195c1de4e65672ab90ea98382749": "c1384a4d293a58ecc447cc97be381ff5",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6a/55e97ea654a9d924d098e8eac5bd52550c6230": "3cacb83b3851faa4be909d0902e897a4",
".git/objects/6c/988784a6587c567c64f3de06c25374e89b943d": "07206f558e45035ef27c93e2a7097a5f",
".git/objects/7c/c6ff918a2b642cc5689e0a027c037c00307207": "60c2626f4e3878ccbdad7d12a6d334c7",
".git/objects/7c/d61268c677ae30c8c813d1f2c68bebacbf3ad8": "8fce2ea44d70935880cf424aedc4a7c1",
".git/objects/7c/e3d4b88f02fd20b73fd3b224f0be9cadf24610": "691db8bf160bbc80e297f77a08999626",
".git/objects/7d/0ade678be0039b7af657f168e80115a1d5836a": "dac7121ed7e90ae1e52ccbb110a6e94f",
".git/objects/7d/194418f285fa858246ad6cffb6011dcaebfc05": "1248469b78caa73b9ed1be663b6733a2",
".git/objects/80/be9c6f2ef5353774058bf9e973cfd990aa2fd3": "7ba87f6a9627c05d7d7c779064c16c09",
".git/objects/80/f63b8f4315860c8916fe404a7f69034396dcc3": "03853550ef8b95221966dcb8cd3ab11a",
".git/objects/84/25241d0907642e74d97d8f6e71f6cac68bffc3": "6eacee0525166d6fb28c8b8ca899e5c4",
".git/objects/87/dd04bc4b01f847a870ad242e8606d56513c032": "5da1f51cc9ab5fd968e00066385412ec",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/92018e62bf937b0c6ffd601f00e99f5b163e96": "fbf79f522a8a02f3a8e12cb5c9230ad2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/1cd5cfb12f90f357016c638b50516bfadead69": "065744cccdd7b776f6040fd437dacef7",
".git/objects/8e/a70ed05cf70a71ca672b613fd1f8e02f9c54f4": "4af04e0e9c353209f6e826f1a75d520a",
".git/objects/93/aab8ad3844c624b4d2d4b9263ac6a5705b4053": "64a67a0bc623bef3db6dd60cdc255a52",
".git/objects/94/127ad530078b61bbf418687efe8aadcdc214c0": "065ba9b07013152e3ddaa9d6bc0e4e77",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/97/d855e139b72da9e693dc474732126371188f24": "318486546beb63ee4c41099e1b060ae3",
".git/objects/9d/d82609b4225c17d98f212ade52328bd5400fd3": "50de4a41b3597b44f4bd61969a3c016f",
".git/objects/a3/003ea0c4e58c6a85a14991b61b3cf1366020ef": "e6c7d1d83e841e131e0d06011b21a9b2",
".git/objects/a3/d6b980d55f257864d776d448af0cf865197f4a": "5e900d138cb763147c11f7dc9e76f214",
".git/objects/b0/29a6ce2e23e8c76e3e69a77bd9df5ae7356a04": "97b300fde8087247fc6e33c687057d90",
".git/objects/b0/d5c0f20bdcadb81720611282ca5ae819817bec": "bf6d3657445d14c22b0d501e66ed30d8",
".git/objects/b1/a2fc7060d66eea8cd0a383b3a733393768a91a": "3d7875c7596a801f9686ed2bb87218f1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/17c24c17f2bb176ec0829d045b1b4700df5d88": "70f58ae6a2de9ab530ab7d846a220cf7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c0/6fd885fefb5810880a5f6f4b04028203370c2c": "c71f1e5c587818e935be9ece79a9dbe5",
".git/objects/c2/44f99228df37c42c40f9d1e2fc678c279b88bb": "a43986881ea10a50f2be32468ff546fd",
".git/objects/c9/3d84ad8deecff429a42fd825219b4dc6cf3089": "af4237fb599c2d573bc9acd01154cb46",
".git/objects/cd/c540c550393933cfd11e108f1c0554c1376aac": "8b7ea24f3b343fa15e5af72d0808f872",
".git/objects/d0/7430d24faeb6451f1dc6edd5d4ec2076f1b6ab": "3e6e598e687dcf70dd2da501627b40b0",
".git/objects/d0/98ec9d94c218f0c7d6d4884bf00b34554937b3": "63deea16e3152fa5f722538f89d93b09",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/f1dda0e546d2434a74fa7902949630807b11eb": "672fa0cc617cb896a17acdae889b6b3e",
".git/objects/d6/fbe351368e33f82b1e2cad035f9054f87fac8f": "e9fbce44d1189c370b3c88a4ff71ed6a",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/139f034071af0e034f0b41b105cf695a2c0e86": "78c0d6f185053d1f76303bb0a5dc0fbe",
".git/objects/dc/c3ce6b063987a5496e592b945608c12058be67": "1998aa1b9e4441122633d4ee89bb3a6a",
".git/objects/e0/016771a2de823cc97c7a4d4d76be90df1da296": "0b3d95841f0b41e2a9275988f84c985c",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/f2/4a737cc48af94dd57c8a81a71ac7e93f2d1646": "b1024a3b24b9b945f8845146ff730c22",
".git/objects/f3/0eeb7fe062d589a68bfb6b09f525bff2bb5e84": "c5df0a1b16f873c91e8bb15330536903",
".git/objects/f4/6f38fb4b0cf9c81165a010b9f9a4e157a5d4a9": "25d743128b6ecda89d802b6fc23f00b5",
".git/objects/f8/f1a02d00cde07ffd5c6def0eb1e4dd541b7e0a": "561b92743d84d0b79969873174c4081d",
".git/objects/fd/26fd629080e711f976f6e706ab84f5b4e7ab33": "487e1bd199122c4a6b6dde6d32f4a879",
".git/refs/heads/master": "d7f97a30af5d330233aacfd300393e71",
".git/refs/remotes/myremote/master": "d7f97a30af5d330233aacfd300393e71",
"assets/AssetManifest.bin": "86031cbc4a5692f1b8daae6609b5ff59",
"assets/AssetManifest.bin.json": "c7267552b6be8ef93ea28667ce053d1b",
"assets/AssetManifest.json": "2eb7f9f30c347611a8bd60a4280779d7",
"assets/assets/icons/ic_2fa.png": "ee39a42810460996f402e89853328799",
"assets/assets/icons/ic_add_money.png": "c6d7e1a6b57565991efdbc5a69c46086",
"assets/assets/icons/ic_change_pass.png": "3c8c800cddc2751eca2a9d83b65e2f22",
"assets/assets/icons/ic_check.png": "2710b31ce4774312fe4614455c18b206",
"assets/assets/icons/ic_dashboard.png": "436e8a014b3ce12ef0d2c9e383aeb593",
"assets/assets/icons/ic_dashboard_mob.png": "f8b3888558b2ce94f85bb6e42fc97460",
"assets/assets/icons/ic_doge_coin.png": "b1bf2a9a19a2568dfe0ba9e53939861f",
"assets/assets/icons/ic_home.png": "2df498e3da7b63c7ce760507996af134",
"assets/assets/icons/ic_kyc.png": "d18c8c433e55825cb44ddb277b4305af",
"assets/assets/icons/ic_light_coin.png": "9f142bf54b3c39c0b322de689f993d39",
"assets/assets/icons/ic_logout.png": "402a909442986ad76e1e3d40598de932",
"assets/assets/icons/ic_money.png": "a519d4e2b4a62035ee4fefc3845e6a60",
"assets/assets/icons/ic_money_transfert.png": "37743bd1366814dd13679d828eb1e1d1",
"assets/assets/icons/ic_my_invest.png": "a7c816cfb446078ac2883121fe658ea5",
"assets/assets/icons/ic_navigation.png": "a5b1caa9e20f93e9074b8e94038d38c5",
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
"assets/fonts/MaterialIcons-Regular.otf": "cdec19e0fd4035c2412b9427b76e3d73",
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
"index.html": "f3a01123e789306e9c766c03382dce2e",
"/": "f3a01123e789306e9c766c03382dce2e",
"main.dart.js": "afe2719a1c0ed93e6a19f406dad38804",
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
