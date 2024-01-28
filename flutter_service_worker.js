'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d4c014df4ceef45f2bb89d4188e383d7",
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
".git/index": "462f31fb6158d405e7be0d6266f65b01",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1d20e21f8c2aadc1e081a266ff98f3e0",
".git/logs/refs/heads/master": "1d20e21f8c2aadc1e081a266ff98f3e0",
".git/logs/refs/remotes/myremote/master": "93de60a7f08fc6bf0fd4c3b75c5ef1f8",
".git/objects/01/7ec6e1a5b0aa034846c2bfca6412279fcaa958": "c15ff699be2c5469a06ecfcca3b5a18c",
".git/objects/01/fa4310bf4482ff760b9f5311aa4174328c33e8": "7f3e9ed60ce94475813c57aaf58d1934",
".git/objects/04/3f5a870a7e4a65a5fa139a77bd29a2a4ef5663": "2f2a03440903e9382e0886d9f50de05b",
".git/objects/04/a7e89795048ce7e299e9de7740eb5b18b566bc": "90923b5ae17267bc2a3c96b760d91089",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/04/e6d6b69bf54fdb0c1218eadb1f1d0490f8cfbf": "dcc772dfb3c87412b1debd985c552a5b",
".git/objects/05/8d94b5975596e2cb41cf3d3678e0b703f96356": "856440e10cac38b05d236a3cd0a34871",
".git/objects/05/95557c77c6bda93b10b95800a6d2f0bc62d17b": "beb793981cb8a2c9f39cac075edd21f0",
".git/objects/06/b94f530448b295b681866ad825ad611b7ce3a3": "b5ee76c26bf5d422058b1a9fd442e48a",
".git/objects/07/d7a0cef50faf780b998bbb6dd4bb293f88e6c0": "982451dae81ab64e0a3d92ba69a9384a",
".git/objects/08/bcfddd0765938cc152a39b17adc93beec2f916": "2f1633b0af60d9cc2a4f874da804d095",
".git/objects/08/f9d2dfc03c9251fc5d4eee773af8f4b40e3991": "11df18b4b7b9ff9ae221901b376bb931",
".git/objects/09/b4a4f443d4b74311f05e7727784446f0a28850": "38c47c7a2e82d9181cba96479ba7f859",
".git/objects/0a/7849a2fccd82dafdfbc0eba92b7001725d911b": "21aa769a98aad8eed32dbe1016610290",
".git/objects/0b/aee1abd82eda487a0e53e319637cabefbbc1b3": "fa651959fd69f1786d5866e404142d2c",
".git/objects/0c/f780ae0a569cd789cfe1f7fe44bb8c8643584a": "63fa255e56715a6d763f4d86163bca71",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/2650939cc8dbd71a981e94b672fc4df8d48517": "1c6bf7ab982e3db83bf0305995cbc715",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0f/d85e1f711166d6bab9e83355d75c679cd8f293": "3b7bc547d2b4b30534602b24dfabfecf",
".git/objects/10/11ffbd153415d13ba7ca2ada2b9284a4b79eaf": "de7e0efc1f0918f74afde3cfdb4d8c92",
".git/objects/11/7ea2b358e5bde6e5a399ad3dce3f5afd9789bc": "a6c7a6698ee93559b8e240b6e3aabdf2",
".git/objects/12/55f763f51d6dceb8058a0e84c76f402b43bf48": "6d753a97f98f93eae0ec9e1acb123237",
".git/objects/12/6d308ebd36e8ec3cc443b05988c4aa4e7a24e1": "8931665503898986f1531bfc83bf9040",
".git/objects/13/99fa9279ebbb89d5a4a94e72cc5932f4aec874": "ea90db6ceadff1ca8c3c5757351fc33e",
".git/objects/13/f39b56d06864801eb2b96b0f43b9c777e3ed54": "18256ebfaded6152d0ca60c492982fec",
".git/objects/14/60c248a1be20b5bcd416148627b17c01e9852a": "a61dfae424271662944dcbb2545c777b",
".git/objects/16/2aed5dab635a9b0122f74fedf17889fa71a1b8": "c56adefba633e66dfb4c0d5a88fd9c9a",
".git/objects/17/3893d6928067d76f87a457830e5b23c519eb64": "1ea53a679c1f2b9b87e2757763aeb95f",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/17/feaff0bb11154a99b760c625212d4d7b5cbdcb": "7d2f47d04155459dee22097a715351fd",
".git/objects/18/70776d2cfb54d77a4a5d7610154a34403a7d2b": "58e9e704bc0d33c81e48daae42d0c86c",
".git/objects/19/84cd9890d6e17dba310789c50a7bbc7f49d6e2": "8aebc541ffa2bb435880fc57c693986f",
".git/objects/1a/6cb211a5e8464105508cb974b69b5110a8da53": "9848d49a2122c82d92eae05b14ddb0bc",
".git/objects/1c/dce90184ee7711f5cb4f5547833c96a4c82f22": "6414dd3bdd6dc32a3ee8c212b332756d",
".git/objects/1f/3e63e7e8db1a322904cf28d28c6ada91154741": "bcdcef8cd287c0f3abd15ea648f127ee",
".git/objects/1f/8aaf1b459186f503965b1cd6c6fd56462b8c19": "68d3ad77b7dc39972c4e8e96311aebb3",
".git/objects/1f/a55aab29a8ca9dc1087ad2a90d872a10beb828": "e89676b8d4905bda5c5fa93292163f08",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/924ab4194c75b45f82c5a5aa6b0a2a86a37ba2": "545b76b72f58db2d95abf3c7863cf5d5",
".git/objects/20/beb945e251b919cc57e84e508105a1a1ed9aa6": "a3c89fec260216c78cb8bb3e0355e90c",
".git/objects/21/299603074b8b8e64c2a64c002598171cefb3d6": "dedda2f37664bc7cb4a71abda47fd56c",
".git/objects/21/622f1c7b4ae7a06603bb15655e3c57d10ab7d9": "d9e5928a15ca630fc53f3a688aeb67ec",
".git/objects/21/895562f904fa0bf977cbdf9c2ee3f8a96af6c2": "2b7cdfda3dc08ef244d51297492ca47c",
".git/objects/22/d12530e4550e2626d00cc8ba8da0ff38e679de": "d3ea7bae29e3fc6f51b4cb0e7d629112",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/132def1c629c968d61c07a1ac71d3684438854": "df6fe3318560155ddf0781fd3bb2f13f",
".git/objects/28/25133c78103287f49aff9c9891d71acc3a77ab": "1879f4da6d7ba940d52b797c458010c0",
".git/objects/29/b8267a6fa01baa02cae58fd27a122c081d9ed7": "1c0f43117a8e1733e5ab8dd69785f811",
".git/objects/2a/3e743039010db21eeb67842e0bdb3b1d156d34": "8bfe45062bfa218a5c03737c8b2bc04b",
".git/objects/2a/660f8a90ab35927e2ad1477cf44f4907e33258": "e872a7ecf748f673f57b0e3fc12ca7e7",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/2ef4930b91ce4a885fbaa14ad05e60ea6f52da": "b9ee2186104096cb0beee1d87a93a1d9",
".git/objects/2c/b3649cffdcf63fbea8d2a5e23a831de0385463": "71b262b1a4a0fbaf015e93ee205d5e30",
".git/objects/2c/dca4b2166be0df662125daf1234dc4a969985e": "80e357c4f7e7f98dd2461773818b262f",
".git/objects/2f/5efef60b57dca5269bbb4e5fca6a7d4d038cb7": "77a93d6c602dd654e190890dad559a15",
".git/objects/32/76a0a2ae1d8e6a0d19d956e8bd85794eae5859": "b42ad0825dd40ec11d7fb6e80bace427",
".git/objects/32/dacaa60d9fb2ff3cd75790687f94b31600918b": "a5303f04fa709fcd7f08d25fe74fc400",
".git/objects/34/32e5102104de808741507b748bf4d0463d7690": "a1c263e294a4c886a30ab83e8327a7be",
".git/objects/34/521d8f4c0e995641e2d380b730e6c672c3a3f2": "7f847b2d666a51582f3e0d91997d0b93",
".git/objects/35/a3262fe28f2ca142e3909cf5e447b28123eed3": "afbbd508a1586b22c93c58606dce517a",
".git/objects/37/53a59883257a39e61489dd178e0c2cd7a81c11": "cf62fc6814115b0c475fc6248b81d068",
".git/objects/39/8899eda572e7653b8f1d84e7e59811f13e21ec": "fb93173224fbb1a524d6e71f48320e5b",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/45d54edd6d4d26462e43f91d627ce97e047717": "40822bf81a91974c805976b6c5769e88",
".git/objects/3e/c6eea003bdeb9825a36ceaa2dd66c1466fe6c1": "cecee8d46d9cc57df21684e4df4052ea",
".git/objects/3f/301a836ee5f8d5cdf1a3b08df87e5247f27640": "fdf7b2b521bfd307c96259a70e31abbe",
".git/objects/3f/729720e5482a92b9ceb922c8e5b1d94add3da3": "9bd34c3cb3426fea559e7fb243d1df9e",
".git/objects/40/6fb5efb287df000451516c5bc6583b063d4af7": "9200c5a8a11aa16f6cca79ea2cd322f2",
".git/objects/41/12cf35f6a2fdd1eaf2deed059c7a58f32130ad": "149168b91c74384de078fea713029218",
".git/objects/43/4186bfaa932164c35caf41bf5074b619b7832f": "68f362d7348817ed3a0d7e64234cb439",
".git/objects/43/68814ce01a4c0a1ff38d2f9a717b72773d3854": "4cd5b6538fe2444d4b12fbd87e6c20b9",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/9bab59c20d40ae70def5623ce2990695cc1712": "43b3573d387bd6e22af781665c33b1ca",
".git/objects/45/544ba125341b0fcf36c7d67533021737d54cb0": "faba682ae1a812c0a8df83f73ab97985",
".git/objects/46/564bb9990833728a66a311cce76cbdfa62ae1a": "be6dbba167fb4188d7001902fc0e2d59",
".git/objects/46/f15fc04e7743cf49c5da16d41a50554d4ecb08": "f90542c37158a5795e18343c9c089d25",
".git/objects/46/f7e2bc3d6bd5480e397ad0481829b747f03674": "c2aa9b3075e359312e986f272e98e761",
".git/objects/47/9082068971b5a298ada62bbf7286f90250b91c": "c988a2c057f7976d80085d6d8aec40b4",
".git/objects/47/f92cc5c18bdd04ace3a1cb0a7c9ee62dcce391": "61d4af34317b37fe5756251d28839fc2",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/55753149f2c66bc64f40a6faf6bfe76bf15e1f": "5582171e6531e3f3b0655663a564e7d9",
".git/objects/49/7041bad37fee925d528e927cfa18d6e19c416e": "49433e75ba6ee883e7455f8d60f5f52c",
".git/objects/4a/ec8b4b7f87b1bdac5b44835c61ec51be901e36": "3591bd92f2ac7c4187c2de55d7de72ee",
".git/objects/4b/b2abdfb952a259c45f34e7e448787c9ed567e2": "4f738a651255c290c31fd7e2aeb6a941",
".git/objects/4d/c0b62de08684bc0e24afdd9bd86e6b40db771a": "6dc4893c46817741561617ad1c8f50f6",
".git/objects/4e/abf9c38b8416381ecce0058dc063479d8a6037": "d34344ed9ce8c0a0a093bcb7e529517f",
".git/objects/4f/72c14ca8a04fa5ab5879c7030e0c1a07e7cd67": "4fde5ea19b2d9d1b9873f06a1e64f066",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/85afed2d7efb6df47d6c8f7d75a523073b8f19": "468efbc76493ab981ba01d61f98d5339",
".git/objects/52/5ceed1e0e2936ee4a8bdf38caae3332810e22f": "cb8cbdc17e19b0e9a574dc53f3efb2d8",
".git/objects/52/af65ecc6826b98d65c1c10adbde929dd50fb62": "0dbdb5bc321ec006a2ff60b0faf1aab9",
".git/objects/52/bb6966d7aadfd5f1ebfd79a71a65d49ef53cd8": "3bc2319dee40cfddce807de72fa9a626",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/91a84fe7859374cddbedcba5398e9037e51a0f": "d53c6a12799d359a872e4be20d21efd3",
".git/objects/58/38e84142be2af02e048cfdb45593d365856571": "9b79afa55629709ada410ebc1b7c9581",
".git/objects/58/a9168d80beaccec8663de7d4d1be3d333b23bb": "39357c8c8e3637587e165fa04218cf5e",
".git/objects/59/3013fc8b6d3bf442c580fb5f1b4f09d3802147": "5a2c2c1f1ce87fb7f3e91ab69c2f14a3",
".git/objects/59/fd76fabd5c0c8d1876e0182b32f1f1cd4903c6": "05a431012889a397eefe66bb2d4f905c",
".git/objects/5b/111d6eeffbea4d2b75ef384da98e69b25f6555": "2e6e404c2bd3c9acf595dc7e927d439f",
".git/objects/5b/76056e640380d6e83d2096c06fef51b1da27fe": "57fd054a583be5ccd811e6659ec26701",
".git/objects/5d/37e22f326cdf217fcddff7d9678b271bf4f743": "6d81e234015da16e88f5b107bf9f54c8",
".git/objects/5e/56cda7ca5d73f4bf1bef5df812b93d99200090": "3582dcbff7cc2e90d4476583561d9c50",
".git/objects/60/654363efc7d2b630d4916a934fcc3e89447a98": "e09b146aa4e609da08e9d08e463bf017",
".git/objects/61/4bb0a19379651984e74fa7aa7741565f4befcb": "876b1066827586eac204454b8be42c8b",
".git/objects/61/755c98f1db4621fa9d35690a7712d99a6e4269": "4fe8b971d2ee8ec078bc046c278eb2ff",
".git/objects/62/3a5595b47339f33586368dacca61f6b255e93e": "cb28d987def3666253dd4989f94056fb",
".git/objects/62/b195f72d967b72689bfbaefafaaa12bfca3196": "2b083d3cdcb4474f5282c860c8c91213",
".git/objects/62/ea9de5f6d910249dfcd1b08135af16d9d17323": "bdb998f6bd082f38793a1559ee77ce90",
".git/objects/63/915e4141f2a472989047c17eb08172bf643b10": "2f89ba1f62584a2c7dd175bdd5913d4a",
".git/objects/64/133f11f03874bce95756ffceee6cd08a98c568": "a62fef6df398cb234d8c02d21749c1d8",
".git/objects/64/6fec2ef423a6f3a4a038b4f8a8424b475007a2": "6fe269ad48f5feffe7124a30d91ce5dc",
".git/objects/65/7b4b2c6793cbd84db810ace0b83446c26aa1ec": "748f493166ec01308ae2934876840cc0",
".git/objects/66/2d7018de66626ab7f9d47f806bc7c8cedd6d8f": "8237551c6768f86cf4791ad7bf457275",
".git/objects/66/c52f695804cd066b761bf57a289f38970f5ad7": "39aa4a680f6069298bb060b90aa97cc8",
".git/objects/68/5310fb2fc3edd2cea2d73d92c35bac816c5cff": "433a2917d8c4fc3bd33d91a9922c1953",
".git/objects/69/e3713afb4b3966edbe7c40b03bf762426a028b": "617a5efd62ec8e6c6e22c7a43c307a10",
".git/objects/6a/3e36f5cd34195c1de4e65672ab90ea98382749": "c1384a4d293a58ecc447cc97be381ff5",
".git/objects/6a/438a77e9c66acaac9886d193782642ab44ddd0": "ecd6c0a218fe9addc7f0d2d660c3c7ba",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6a/55e97ea654a9d924d098e8eac5bd52550c6230": "3cacb83b3851faa4be909d0902e897a4",
".git/objects/6c/988784a6587c567c64f3de06c25374e89b943d": "07206f558e45035ef27c93e2a7097a5f",
".git/objects/71/0b9418c572342dc78cadd34efd83fac2d19965": "8356928c98814ccbc87668a8b56a2e4e",
".git/objects/71/23b678b0f82ad187a43d20271d175e19eb2176": "ad844cc5835379686e56d44c615efd97",
".git/objects/72/609f1e80fbc05d4a93dc031dc2deba82bce8d0": "6a1cfb48189f98da9c514a98a6e7c1a5",
".git/objects/72/cb32c172617f497342c8665b9aeb83e54d91ea": "c45db06619a51b71bade40084ff3c915",
".git/objects/74/78a506f8d1a52d67cebc7f06b9941372a6e38e": "2812c28ca1c0e84e29651452621b467a",
".git/objects/74/c4ef745aa770c08e2650d10144060a60dc7242": "08f26218e511d836581dcda5716aa863",
".git/objects/76/139ba6522740b85edb56d879e5981580102cd9": "febfbe971193e7db399f43e61aacb86b",
".git/objects/79/d438bef0fd31b975ca162013f6485efe610bcd": "f6f1487c481ce3d4f16d21ac94bfe861",
".git/objects/7b/e938612c8a42d4214e7b5b29172229b840efca": "167216699c8917464ea6955a8227a939",
".git/objects/7c/c6ff918a2b642cc5689e0a027c037c00307207": "60c2626f4e3878ccbdad7d12a6d334c7",
".git/objects/7c/d61268c677ae30c8c813d1f2c68bebacbf3ad8": "8fce2ea44d70935880cf424aedc4a7c1",
".git/objects/7c/e3d4b88f02fd20b73fd3b224f0be9cadf24610": "691db8bf160bbc80e297f77a08999626",
".git/objects/7d/0acac05918deddf0f4096663a0deacc7de076f": "36b2b41cb732bd142360a4740e9000ae",
".git/objects/7d/0ade678be0039b7af657f168e80115a1d5836a": "dac7121ed7e90ae1e52ccbb110a6e94f",
".git/objects/7d/194418f285fa858246ad6cffb6011dcaebfc05": "1248469b78caa73b9ed1be663b6733a2",
".git/objects/7d/6147cdda8f2c5a1061ccbfb71dbcc499737476": "aa90d2290d94f8550b56d22784926e7f",
".git/objects/7f/c5a0ef2e333127777ba148643952ca9eeb8522": "e320730d557b6966318beab0317b9e51",
".git/objects/80/be9c6f2ef5353774058bf9e973cfd990aa2fd3": "7ba87f6a9627c05d7d7c779064c16c09",
".git/objects/80/f63b8f4315860c8916fe404a7f69034396dcc3": "03853550ef8b95221966dcb8cd3ab11a",
".git/objects/82/19e23e8598fdb6ffd6c9fe6603db0fdad89c97": "662f4905ba6961f5c362a0f84fcd124f",
".git/objects/83/e65da3fddcdb4c601bb0ff34b9fa166a202a52": "b30704bb020a98947582fb712820702d",
".git/objects/84/25241d0907642e74d97d8f6e71f6cac68bffc3": "6eacee0525166d6fb28c8b8ca899e5c4",
".git/objects/86/c5a7697072c2d3edb034fe91a7fe4b145cdb28": "b509346e33417d567e656a78114715dc",
".git/objects/87/9faa056bd0e9030f798162a24af47b9ff96910": "7430f97e9412d626a70760d95a85ac51",
".git/objects/87/dd04bc4b01f847a870ad242e8606d56513c032": "5da1f51cc9ab5fd968e00066385412ec",
".git/objects/88/082bbd4c8a3ff26315be2e5a5fa43eddff2bdf": "52a77c93984c186c4749530d32a96cb5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/92018e62bf937b0c6ffd601f00e99f5b163e96": "fbf79f522a8a02f3a8e12cb5c9230ad2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/fb794108c62900a50681abb82648bbb541fe1d": "da98306d4e4b309a482c0c9d6dbb548b",
".git/objects/8d/1cd5cfb12f90f357016c638b50516bfadead69": "065744cccdd7b776f6040fd437dacef7",
".git/objects/8d/cd326e4d14fdc34e5be8cfbad6c8070ea7e789": "d92de54accb71e3a179b5e1701088068",
".git/objects/8e/a70ed05cf70a71ca672b613fd1f8e02f9c54f4": "4af04e0e9c353209f6e826f1a75d520a",
".git/objects/8e/f5070dbe65a4ddff2357a9dc4444506c8293b4": "8c9c6a17211e599f35f6d0538bfdf0e7",
".git/objects/8f/d63f52227a86a50a87b4439d9d5a7cdd7db39d": "90d7a15cb3718c97eae8a23a9c6075a4",
".git/objects/91/f398443c4bf0e6d2bc7c62a3e502d9bc7060a1": "bda1847b9cf52ce62e6a8641ddca65cb",
".git/objects/92/be3325ec4e8732dffb8807f4b0fb7f1faab8fe": "0aeeb27b3436cd555206ca13a13851a5",
".git/objects/93/0c092bcaf22c450ec43b8c325531b8a75418d0": "a99bd3ba37145e1aaa77ba7060381158",
".git/objects/93/aab8ad3844c624b4d2d4b9263ac6a5705b4053": "64a67a0bc623bef3db6dd60cdc255a52",
".git/objects/94/127ad530078b61bbf418687efe8aadcdc214c0": "065ba9b07013152e3ddaa9d6bc0e4e77",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/97/d855e139b72da9e693dc474732126371188f24": "318486546beb63ee4c41099e1b060ae3",
".git/objects/98/b1101568bbc1cb290134e05ac6c3a65850eebb": "05ea9adb7cf6ae69d2030485b7755406",
".git/objects/99/3299359c263cdbd6939448e0e2f60aa96ec030": "060f2b77e0324b9af88bcf005c3aa301",
".git/objects/9b/d9d42cca23e379e7a9c980be44bbac376d98ea": "097eb9acbe7308a91c68bc64e0ba0e04",
".git/objects/9c/c10423b349939c1a3e0b156632626d0315f85e": "4288388015324d659ac82c6667976a8e",
".git/objects/9d/d82609b4225c17d98f212ade52328bd5400fd3": "50de4a41b3597b44f4bd61969a3c016f",
".git/objects/9e/d4d0e2c7109ed1a631357f818d17f5eb92fd88": "e2cf00d68c70bb2a8b47bb45f7aa30b9",
".git/objects/9f/0b259100becaee1f4f7e5afade637ec5340587": "4eed15c3d68adef9555c5eee28df11ed",
".git/objects/a0/173345457ef3546dbe94976596e2dc5418fb29": "4ad83d0e878ebad226df8481ec1c61ec",
".git/objects/a1/2a01b5436965fc30fae0b1634c973233d4819e": "8fc29071817edc04deb4e3439c734361",
".git/objects/a2/0a1be54a399fe56d6d9ff7eb7aba91c48596ff": "8e15cb8f75fa2ee4bdc5c52d0b286da7",
".git/objects/a2/790d9b48ada5a41ecd7ad33461665c5e3df617": "214008bd5842253950585bc2cb5cbfc3",
".git/objects/a2/92e4f5e161461034539fb1077ae936910ca27d": "be2e27316431b48622a98f44dd4dd369",
".git/objects/a3/003ea0c4e58c6a85a14991b61b3cf1366020ef": "e6c7d1d83e841e131e0d06011b21a9b2",
".git/objects/a3/d6b980d55f257864d776d448af0cf865197f4a": "5e900d138cb763147c11f7dc9e76f214",
".git/objects/a4/5453c64c24870f0e8f9ed4444d2d49173132fe": "3ad7187c583c0c781471ff27ba778158",
".git/objects/a9/41ab89a1020217a3728f7c747475e486f7d858": "0fe42b7e36d26a526bf3e91011ed8ce1",
".git/objects/ab/23ccf253f08b46ea2806db0f72dd86c7b2c567": "f851f471d47cf6db729b2367aaa38767",
".git/objects/ac/dfbf5ce31776ee58e945425a53ab93e26a896f": "e867590a47c4c04ac245a8935ff86a37",
".git/objects/ad/0a1629b09ab27254ee0f668153e34d2ea97196": "62eaad219b3ee40db2acf9f6a57c22e2",
".git/objects/ad/101d5e3126390b7dd33725afe5679d5dc63ab5": "e5084f6c95dde5881a9be900285c7014",
".git/objects/ae/17bd0fa4b392a366b9115fb0be9cc0869c6059": "0b9a3f71c1d8831a30ddb2f118ca435e",
".git/objects/b0/29a6ce2e23e8c76e3e69a77bd9df5ae7356a04": "97b300fde8087247fc6e33c687057d90",
".git/objects/b0/80205aee342b2ff2f7d081bfae309b5810bd49": "aa24be5b323cb38978bd89a3255abeb1",
".git/objects/b0/d5c0f20bdcadb81720611282ca5ae819817bec": "bf6d3657445d14c22b0d501e66ed30d8",
".git/objects/b1/a2fc7060d66eea8cd0a383b3a733393768a91a": "3d7875c7596a801f9686ed2bb87218f1",
".git/objects/b4/0ac75fe2f636b370d86e09625642216222a4ac": "d4d1e91e09948ed210af7059c011f311",
".git/objects/b4/e91015772477e17fd50968f2da9685bd9a963c": "9df2aa9a614729e071da43e5531f8e5d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/504cf24b8830f3bbd261080c33335c2e1ef77c": "82487c03d13a5898f9794d9091846cf0",
".git/objects/b7/e309bb21370e60b081b0b82a81591d78022505": "d7b3515210b6f17ecfead37d263ef526",
".git/objects/b8/17c24c17f2bb176ec0829d045b1b4700df5d88": "70f58ae6a2de9ab530ab7d846a220cf7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/321b6823fd2b36cef89cb97d138507ecd9db09": "8593394a06f300ee9334abc71b66ab99",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/a497f59527013ce113efc0eb6211b3df22e16c": "2bca84ca595e3903efab82bde65d900d",
".git/objects/bb/187830cdb67971dfc5fd846687615845b5377c": "6b52d6656d38483a5fadc3193c6baa26",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/cebfc661767c1f375ba23344d6d7c61c33351b": "e9bfb9ee15e9180d190a919b41e0d382",
".git/objects/bc/886716a3ce279bc8cf524dce3ffb4f61f22bd6": "44062a04f1e54849cb5f5f8a2cc72423",
".git/objects/bd/df73a4e2551a548e35e1195efefe2adf4826d8": "f5d76f38d63244729ea0e688ed7352e3",
".git/objects/bf/80d6c59bdf668d3c9db86a7d23ae132b22e566": "66f7fc7d33b0c1ea6bf038d6ed71e069",
".git/objects/c0/6fd885fefb5810880a5f6f4b04028203370c2c": "c71f1e5c587818e935be9ece79a9dbe5",
".git/objects/c1/e9a47591a093506e2797e0b597cf5ec9c7fd39": "82065fdd279bd6c3ba95686ea73788ef",
".git/objects/c2/44f99228df37c42c40f9d1e2fc678c279b88bb": "a43986881ea10a50f2be32468ff546fd",
".git/objects/c4/d86db1a6a6930d8d66618d4aba57d58d1eadff": "f090cc2c701eadfbd8e130d8086344e2",
".git/objects/c5/a77b38251af0058e7b86817c9cef2b5c74d379": "a3086ac4b4ad514d3841e2b211c8e3d8",
".git/objects/c5/ec406d954e3b6f65fa9dba6da1027d11972177": "540376118a277430de94f930f7794460",
".git/objects/c6/45ceef974d6b10981cfce81856a5d2055b032c": "582a28aad46f5b7ff3618b6b84a543fa",
".git/objects/c8/ed1e350bccf59734b7b26e0c87ed8908e7931e": "7bca504750ca28282d29be2a9d03324a",
".git/objects/c9/3d84ad8deecff429a42fd825219b4dc6cf3089": "af4237fb599c2d573bc9acd01154cb46",
".git/objects/cc/163dc1c8a3e4108a52da4b63092cfde043431a": "9aa1b5a3f7d783d18449d285167db5d3",
".git/objects/cd/c540c550393933cfd11e108f1c0554c1376aac": "8b7ea24f3b343fa15e5af72d0808f872",
".git/objects/cf/322485619df22a6cab550ad4c1a827b993cf67": "955671aba12134e19c262f6b3ddc7d12",
".git/objects/d0/7430d24faeb6451f1dc6edd5d4ec2076f1b6ab": "3e6e598e687dcf70dd2da501627b40b0",
".git/objects/d0/98ec9d94c218f0c7d6d4884bf00b34554937b3": "63deea16e3152fa5f722538f89d93b09",
".git/objects/d2/5ba4a26010ad968b32a944079938afc638e7d7": "625d3557ee0266492ab71bc0cd1631b1",
".git/objects/d2/c3a51f531a62a50553a24e543222791451393a": "c4602ac677792c86fb0879bdcb52bc3b",
".git/objects/d2/fe69b7d4796851639125f76f37dd3da5046f6b": "2b835b2d356e2b7878aa7cf773077e50",
".git/objects/d3/f9c281084f25b5e7c20478692a893f5dee5db4": "fe170ede357baa238e3b883050354381",
".git/objects/d5/98d6688ea4a0cfd1c99783113ac31c827f94ea": "8e7c1a3d7d1f661e3d8a8dd37119b107",
".git/objects/d6/4baf75404c7ab674b4aa58774b7fb14917924a": "160dbc0d1527844c6412434ce0955b65",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/f1dda0e546d2434a74fa7902949630807b11eb": "672fa0cc617cb896a17acdae889b6b3e",
".git/objects/d6/fbe351368e33f82b1e2cad035f9054f87fac8f": "e9fbce44d1189c370b3c88a4ff71ed6a",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/56e8fc170bffd38d8307c416435f4d849286d9": "24056f7d966ff371df40edf131268ca6",
".git/objects/d9/139f034071af0e034f0b41b105cf695a2c0e86": "78c0d6f185053d1f76303bb0a5dc0fbe",
".git/objects/dc/7cd03e9ad4386e7385a7a73e18562e4f8cd18b": "a21fa4c39b0b6977687549f658bbe43a",
".git/objects/dc/c3ce6b063987a5496e592b945608c12058be67": "1998aa1b9e4441122633d4ee89bb3a6a",
".git/objects/dd/75645d73a6273d48378d485006b75449b6578e": "ead31c692f11ed665128379a31ae0d2e",
".git/objects/e0/016771a2de823cc97c7a4d4d76be90df1da296": "0b3d95841f0b41e2a9275988f84c985c",
".git/objects/e1/0640858b1e154b8cd05d4bfea37e6fd4d975c3": "90fb0fdb4d72e195210e44f1ad33c147",
".git/objects/e3/2a5d625cfd298efdb2b8347a757b76c0730969": "2e631e6b98ac42720271d2542bb2dcbd",
".git/objects/e3/fa912922181f8c2db910207f90f9c91d06a762": "c858535df8ea2eee96a2615372456424",
".git/objects/e4/4b335b6f03a3842b843b2e1473540268a32854": "5e804ef312cb6f44cda441869de80690",
".git/objects/e5/07bbd46d011069e8a7019fab30a2858c3beb19": "cf8301a1c01916d2e27ef51db27f945f",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e9/32be30cc6a69cb3028fef1e18e35d37c757783": "5183b3467339441bc925920752c79105",
".git/objects/e9/b77b6d8f186fc84fe23d746431593be8c46cee": "044069eddcea3df1630dfd537c7981ca",
".git/objects/e9/baf83550cacc121d2329721359b010f7e5957a": "bab34ed2a8d7a3199ae41de278f9f463",
".git/objects/e9/e5225d47f598546e49c5e79e204d15dd6cc63f": "7e60047ae849d445818c6f9ca1d82164",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/c9080610f056d821f07a8dd5167d7b0482ab47": "09a768463405a3f19826d24739177634",
".git/objects/ee/24a0ce561433d5a05130360479f74b0ef59657": "a12ab352fac68c9d6bcd168d9b8ad392",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/f2/4a737cc48af94dd57c8a81a71ac7e93f2d1646": "b1024a3b24b9b945f8845146ff730c22",
".git/objects/f2/c48c37729347a8028fcc331dbdbfc5b81736ef": "f80e0458f4c3608017fefac1991d9f48",
".git/objects/f3/0eeb7fe062d589a68bfb6b09f525bff2bb5e84": "c5df0a1b16f873c91e8bb15330536903",
".git/objects/f4/6f38fb4b0cf9c81165a010b9f9a4e157a5d4a9": "25d743128b6ecda89d802b6fc23f00b5",
".git/objects/f6/031cca387ac7d7bf724ed423f9529c5d2b75e8": "376c6926cf805adbeab5928aa6865811",
".git/objects/f8/f1a02d00cde07ffd5c6def0eb1e4dd541b7e0a": "561b92743d84d0b79969873174c4081d",
".git/objects/fb/99d10c619cb814c6bf5ea65408b43c8e9235be": "6c6f7c13c654108923de572d802f8e92",
".git/objects/fd/26fd629080e711f976f6e706ab84f5b4e7ab33": "487e1bd199122c4a6b6dde6d32f4a879",
".git/objects/ff/4622d74bbabb68df0d54d9fd07eb9795d758c4": "ff3c6ef9a8ced797ef1c15d952c4c577",
".git/refs/heads/master": "646efb67dbc1dd75c96967b2d3a92f12",
".git/refs/remotes/myremote/master": "646efb67dbc1dd75c96967b2d3a92f12",
"404.html": "e96f381e3dc3ee4da3a8f764c49c18a9",
"assets/AssetManifest.bin": "552eebb8ab28c34de3f5dcf2ddfeac83",
"assets/AssetManifest.bin.json": "43e1062521bac6af309b51de051b076a",
"assets/AssetManifest.json": "f4d916c0bf1aef0f0d7135e4a74afe93",
"assets/assets/icons/ic_2fa.png": "ee39a42810460996f402e89853328799",
"assets/assets/icons/ic_account_twitter.png": "43e1dd9ba985da6add88c838d992b45c",
"assets/assets/icons/ic_add_money.png": "c6d7e1a6b57565991efdbc5a69c46086",
"assets/assets/icons/ic_app_store.png": "fff6eb5bd0a2e1590515e48cea4ecf26",
"assets/assets/icons/ic_arrow_left.png": "f7acbda9e39764332986e1a529f60cfd",
"assets/assets/icons/ic_arrow_right.png": "055352dcb0a1a4bb5660f7440dfaab9b",
"assets/assets/icons/ic_attach.png": "85508895cbe55aad230fb96cb91d7d32",
"assets/assets/icons/ic_change_pass.png": "3c8c800cddc2751eca2a9d83b65e2f22",
"assets/assets/icons/ic_check.png": "2710b31ce4774312fe4614455c18b206",
"assets/assets/icons/ic_close.png": "6fcb2dc470bcccb8847f04ee1d0335e7",
"assets/assets/icons/ic_dashboard.png": "436e8a014b3ce12ef0d2c9e383aeb593",
"assets/assets/icons/ic_dashboard_mob.png": "f8b3888558b2ce94f85bb6e42fc97460",
"assets/assets/icons/ic_doge_coin.png": "b1bf2a9a19a2568dfe0ba9e53939861f",
"assets/assets/icons/ic_eye.png": "6db629abc5c7af46d5be82f760f5b96d",
"assets/assets/icons/ic_face.png": "dcfb1b7edeab2e780cf625c36b206cd3",
"assets/assets/icons/ic_file.png": "5a727490322dcef844950f842a746836",
"assets/assets/icons/ic_home.png": "2df498e3da7b63c7ce760507996af134",
"assets/assets/icons/ic_instagram.png": "a85ebeaea7a81904e266b2397305895c",
"assets/assets/icons/ic_invest.png": "e9a6fb1f34b6e3e67f64cf71b8c2c719",
"assets/assets/icons/ic_kyc.png": "d18c8c433e55825cb44ddb277b4305af",
"assets/assets/icons/ic_light_coin.png": "9f142bf54b3c39c0b322de689f993d39",
"assets/assets/icons/ic_linkdin.png": "393b278ea21d9b2e48a44f78546a558b",
"assets/assets/icons/ic_logout.png": "402a909442986ad76e1e3d40598de932",
"assets/assets/icons/ic_money.png": "a519d4e2b4a62035ee4fefc3845e6a60",
"assets/assets/icons/ic_money_transfert.png": "37743bd1366814dd13679d828eb1e1d1",
"assets/assets/icons/ic_my_invest.png": "a7c816cfb446078ac2883121fe658ea5",
"assets/assets/icons/ic_navigation.png": "a5b1caa9e20f93e9074b8e94038d38c5",
"assets/assets/icons/ic_network.png": "9ced6f0886c5c4da5a38182cd4e265ef",
"assets/assets/icons/ic_notification.png": "3c99de718e735745cce99595ebdf35c8",
"assets/assets/icons/ic_person.png": "42bd1e0902fce7833737e12cf5395d4c",
"assets/assets/icons/ic_plans.png": "5eaeabdcff6f99cd45b1c7a8bfd07150",
"assets/assets/icons/ic_play_store.png": "ac708a7b980debea6a2a573c4ac19d1b",
"assets/assets/icons/ic_profile.png": "81c330529766ff37ebfdaf5f4f02fbb5",
"assets/assets/icons/ic_profit.png": "1600069d975cde16657a04f86b651176",
"assets/assets/icons/ic_profit_log.png": "ad4a9e07661a29e0c4f6bf69716bed99",
"assets/assets/icons/ic_profit_ratio.png": "a4a7e3653e67633ee56e28c02fdc5c90",
"assets/assets/icons/ic_question_mark.png": "2460e280898104e897e77593338f3777",
"assets/assets/icons/ic_rd_affiliat.png": "d76642e06ad25b5f3aa2b285f846f535",
"assets/assets/icons/ic_rd_invest.png": "ec3ef871448b2bfc18527f97c221ab8c",
"assets/assets/icons/ic_rd_money.png": "c796b3959eae5d57d29424688f76ceb6",
"assets/assets/icons/ic_rd_profit.png": "c018e36baaa9eca0d2dea29c69a390e3",
"assets/assets/icons/ic_support.png": "c1f64a711408ad2f8533f2331e035091",
"assets/assets/icons/ic_transaction_action.png": "e7aa5b54268a36e6bc033ea0ec7a494b",
"assets/assets/icons/ic_twitter.png": "6d831e726e80f6705ea360c635b2a9de",
"assets/assets/icons/ic_user_checked.png": "f626f48238e29665a9eab5b0bf3f55f2",
"assets/assets/icons/ic_withdraw.png": "09beb402fcf6741309b0b4e2748e43bf",
"assets/assets/images/img1.png": "8185926f1c8ce6da99aa4b2f4744cab7",
"assets/assets/images/img2.png": "8524ae5376c9867ed93bf0031e903ef1",
"assets/assets/images/img3.png": "e745ea372523b14cd672df6509ce90df",
"assets/assets/images/img4.png": "127aa684143abad44774782264191a6b",
"assets/assets/images/img5.png": "1da19b6156b0ff81e33a4759df4c1462",
"assets/assets/images/img6.png": "e38a1d9bde6cb02740bbfbb7f038be53",
"assets/assets/images/img_1_section_4.png": "f13192cfe815b0b10f3f1b975992fddd",
"assets/assets/images/img_2_section_4.png": "bfcbabcaa4341ebf7a334eedba212879",
"assets/assets/images/img_3_section_4.png": "a31a2d21be882c43addc232fb8bc9b7a",
"assets/assets/images/img_about_us.png": "6e91567b87a41ae141fbcf1be576eb03",
"assets/assets/images/img_about_us_1.png": "b5ef1b1e860a2ec4dadbc6adf0460f5b",
"assets/assets/images/img_achievements_1.png": "5dd0b35166890165a2b8e0aa84c67d57",
"assets/assets/images/img_achievements_2.png": "c083d91c691beba7a9b3fb50abbfbaa4",
"assets/assets/images/img_achievements_3.png": "63c926ce102e4bec72c4fb9c75798b81",
"assets/assets/images/img_achievements_4.png": "47e43b4ceb0f32ab1ffaed23f2835dbe",
"assets/assets/images/img_achievements_5.png": "9dc923b6742166b8c855d8b676c23385",
"assets/assets/images/img_achievements_6.png": "be91d2204f9348c6101cfc846e6ee31d",
"assets/assets/images/img_back_decoration.png": "f53433bb9732cb87a0bc5b0ac6a82019",
"assets/assets/images/img_forget_pass.png": "12dab5dbb0df4d2cd7dfb0f4ddcf0cf8",
"assets/assets/images/img_fully_transparency.png": "781f710471d800b9a85886bff3913319",
"assets/assets/images/img_instant_withdraw.png": "874d50f2fd81755cdcc220829fdd62a8",
"assets/assets/images/img_logo.png": "9c5a5f18c25d10082754f426b86e9e7a",
"assets/assets/images/img_logo1.png": "f477ca878bef5136d96ed074428362ea",
"assets/assets/images/img_marketing.png": "e1c4d1d79048eb8dd84f162d024fb95e",
"assets/assets/images/img_node_primary_color.png": "e9d40184af4b2fbb8e014ee187599e78",
"assets/assets/images/img_node_secondary_color.png": "31b61be26639914ecd001cb201ca8ea7",
"assets/assets/images/img_one_3_section.png": "b25aaa7fd738bcf02c2fa5ef6307db49",
"assets/assets/images/img_phone_header.png": "39c450411d592fa0b486b92f2f13260c",
"assets/assets/images/img_privacy_policy.png": "807cb4c32d28836970a6ef66d31a3c72",
"assets/assets/images/img_protrait_decoration.png": "5c34c7003882265d22fd36234d470769",
"assets/assets/images/img_qr_code.png": "2b2c97bfdd0da158da19a1385e95cfde",
"assets/assets/images/img_signup.png": "c21902bd6b9869740f850f17cdf668e4",
"assets/assets/images/img_strong_security.png": "1b3d86341459a09c44389518eaedf064",
"assets/assets/images/img_tab_header.png": "0e9cbb17f0ba3e9cb93f41170c48ba58",
"assets/assets/images/img_two_3_section.png": "95530311ba6afdeb9c3b78fed6761924",
"assets/assets/images/img_web_first_section.png": "a5f407de33c9519bd7374d742eed96a9",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "f46bce7d4d6747efdcee831b2a766804",
"assets/img_logo.png": "9c5a5f18c25d10082754f426b86e9e7a",
"assets/NOTICES": "3167f9f02ecfffb0879fb6a6a4479fbf",
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
"index.html": "611442f9a42709673a9b9acc32b24c3c",
"/": "611442f9a42709673a9b9acc32b24c3c",
"main.dart.js": "608bd28bc4bc9f46e7bea2f9ab38886d",
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
