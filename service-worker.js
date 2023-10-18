/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4b2721635db0fea924aa66f49578c72f"
  },
  {
    "url": "about/index.html",
    "revision": "262c80bb32ab6459130d280fa6091575"
  },
  {
    "url": "assets/css/0.styles.ab84b53f.css",
    "revision": "383e9e5faad2518b3ded8d4deebdd8ca"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/js/1.7c7e1706.js",
    "revision": "70be60922a6da333eb8f7cb7e71e34dd"
  },
  {
    "url": "assets/js/10.17b6bc21.js",
    "revision": "edd7d3ba6d1de0170bec177416c2467c"
  },
  {
    "url": "assets/js/11.25846300.js",
    "revision": "0768159996b038eb8df541253ffaf043"
  },
  {
    "url": "assets/js/12.675a3af6.js",
    "revision": "6a6b2ccaba4965d71b877c63aa5f8848"
  },
  {
    "url": "assets/js/15.c7adaf7a.js",
    "revision": "49716e6980506f4296a1d667e3378097"
  },
  {
    "url": "assets/js/16.dd333284.js",
    "revision": "fa38bccef95e5914901531c904e05bd9"
  },
  {
    "url": "assets/js/17.8265c4af.js",
    "revision": "248e1fe77fd6256a3f24897b48e723c9"
  },
  {
    "url": "assets/js/18.b7f726f0.js",
    "revision": "97de053c25f6d8fe1c2c84ac1f332b43"
  },
  {
    "url": "assets/js/19.98e96223.js",
    "revision": "094e0a3f4126de22f2f530ac405a3f78"
  },
  {
    "url": "assets/js/2.232c1c79.js",
    "revision": "4a8b85f485f99b2412ad0c2861b4567e"
  },
  {
    "url": "assets/js/20.c834b277.js",
    "revision": "92d5939512ec8dbc9e84a412980e569a"
  },
  {
    "url": "assets/js/21.e17ae464.js",
    "revision": "cece6b96bcb1400d6aa98cf9e53183d6"
  },
  {
    "url": "assets/js/22.86ad4faa.js",
    "revision": "fc5822069e0e53c307f3a235152e0d97"
  },
  {
    "url": "assets/js/23.c4961aca.js",
    "revision": "c452434ae3e36346f7488b5584d4536e"
  },
  {
    "url": "assets/js/24.6a8ed803.js",
    "revision": "d5bea3d45f2537472ac46d1b8fd45d0b"
  },
  {
    "url": "assets/js/25.fab7f1f8.js",
    "revision": "1104546c806368da827ed645dc0a9b69"
  },
  {
    "url": "assets/js/26.c6c0fc4f.js",
    "revision": "bc17814e7181cbcbe804fc3d518d67b3"
  },
  {
    "url": "assets/js/27.e394998b.js",
    "revision": "5648a3ab474ae37540f3154020b4aad0"
  },
  {
    "url": "assets/js/28.93f73f6c.js",
    "revision": "33552beaada8dc33b20e7b18d4300cdd"
  },
  {
    "url": "assets/js/29.377740f5.js",
    "revision": "dcda4166d5ce82151066763fdbc6a184"
  },
  {
    "url": "assets/js/3.46268ab1.js",
    "revision": "faea82683ac8eab1fc43a203b061caf1"
  },
  {
    "url": "assets/js/30.fa0123fe.js",
    "revision": "c0e289d779e57e46ffb3b2168f1c6f1c"
  },
  {
    "url": "assets/js/31.b0d11cc7.js",
    "revision": "c058bed9f1f2856f3654f1184a433d3b"
  },
  {
    "url": "assets/js/32.b749221d.js",
    "revision": "a3e3f62bff1b5d7bdcbef85aa7998f59"
  },
  {
    "url": "assets/js/33.3ce8eace.js",
    "revision": "7335dd1480b5673c251cdb76bbe034e5"
  },
  {
    "url": "assets/js/34.3ca1e105.js",
    "revision": "1139ed4ef7e36a173e23da6477b3d3d4"
  },
  {
    "url": "assets/js/35.602e99a1.js",
    "revision": "cb5236693d36a2adf97d6d94fd6f9947"
  },
  {
    "url": "assets/js/36.ae7a9d70.js",
    "revision": "8d6e208d7a043cbae4bfd4622c37491c"
  },
  {
    "url": "assets/js/37.838fefcf.js",
    "revision": "20d3013f2f400f7c8fc8b58c7abb4e42"
  },
  {
    "url": "assets/js/38.b6ee8a24.js",
    "revision": "a6211c32fb115639885687bc804c7657"
  },
  {
    "url": "assets/js/39.a8824e4e.js",
    "revision": "711b9dd8b20ae77bb4944449a0542789"
  },
  {
    "url": "assets/js/4.d889f1eb.js",
    "revision": "15556d061d13d94ebde88d7646269ee2"
  },
  {
    "url": "assets/js/40.3f7b2272.js",
    "revision": "4ff3b5299839d2bba6213f9d737f6d44"
  },
  {
    "url": "assets/js/41.ece2f3fc.js",
    "revision": "6ac590614841a759c832bb82c2c54ada"
  },
  {
    "url": "assets/js/42.4e9e5855.js",
    "revision": "95e94581ac005ceebb0c07e1479873fc"
  },
  {
    "url": "assets/js/43.28ba10b7.js",
    "revision": "8af5e79e94b4668f71d27bda3a351a01"
  },
  {
    "url": "assets/js/44.ca1e944c.js",
    "revision": "4a967ca41283feca03eccd9c6932be5f"
  },
  {
    "url": "assets/js/45.bb1bd181.js",
    "revision": "b11516465c91279d7c5f00d2560e51f2"
  },
  {
    "url": "assets/js/46.5d0cde77.js",
    "revision": "101c814c8cb78cddfa737a01a4c1e556"
  },
  {
    "url": "assets/js/47.6a6d144c.js",
    "revision": "c74768d22eb6473ac611f144508dce7e"
  },
  {
    "url": "assets/js/48.eeda01f4.js",
    "revision": "add31936d161b78e0153406cdc8f3208"
  },
  {
    "url": "assets/js/49.db11b9d6.js",
    "revision": "7a39c1667eb01d0c638de5edac432ad1"
  },
  {
    "url": "assets/js/5.d1395a76.js",
    "revision": "eea323e48655be65d56cf5167d5be7f0"
  },
  {
    "url": "assets/js/50.fe087e42.js",
    "revision": "65643b3e5dd79e249ef015b35e5ab6ba"
  },
  {
    "url": "assets/js/51.d0b74c9f.js",
    "revision": "e8c8e903d20a0e870d851f5d4ef50dae"
  },
  {
    "url": "assets/js/52.0aca25e2.js",
    "revision": "dd4895f9ebeb472fd7f77ec02bfe3067"
  },
  {
    "url": "assets/js/53.7d416d80.js",
    "revision": "8d9e97720765ba00d678e5ded3728048"
  },
  {
    "url": "assets/js/54.280d612f.js",
    "revision": "3a2960e4070ecff482b60fe5bc70450c"
  },
  {
    "url": "assets/js/55.73cc956c.js",
    "revision": "a0a4f5ba214a3ee4db6705dffcd6adc2"
  },
  {
    "url": "assets/js/56.8d136fc0.js",
    "revision": "63643ff5c2aeef64b058fabf04f92cd6"
  },
  {
    "url": "assets/js/57.ce1216a4.js",
    "revision": "7c74fffd59ca37c9268cb069a0ccde55"
  },
  {
    "url": "assets/js/58.59b98b6c.js",
    "revision": "02692316569c653dedeafb158d15e7d7"
  },
  {
    "url": "assets/js/59.65a593f5.js",
    "revision": "89aa4d1dfbd0b81c303ede2b3a9db1c2"
  },
  {
    "url": "assets/js/6.ca414223.js",
    "revision": "dd3f1c8c5b1dfa604ed28d39228defcd"
  },
  {
    "url": "assets/js/60.3b0b52c2.js",
    "revision": "96814cd42d39e1546dffdbbe1d861092"
  },
  {
    "url": "assets/js/61.03da4eff.js",
    "revision": "20c9003eed8c312b3646af21b4b44804"
  },
  {
    "url": "assets/js/62.058d727c.js",
    "revision": "a8f14a836ffaf6a9abbc7ad6fbf00bf3"
  },
  {
    "url": "assets/js/63.4444d1b1.js",
    "revision": "e9a86625a3b48953e2675cb8e3a48aba"
  },
  {
    "url": "assets/js/64.c4bf0329.js",
    "revision": "8ab8f11f4007f966b89340de3bb67d5e"
  },
  {
    "url": "assets/js/65.bfa2038e.js",
    "revision": "64d7bfc1d98d35da33d8ed0a9e29a1f6"
  },
  {
    "url": "assets/js/7.61df2d39.js",
    "revision": "3fee80ba0fe10ea82dba8b4b82eac163"
  },
  {
    "url": "assets/js/8.e259fa4a.js",
    "revision": "b06bca6b5b8e7d2dd6e0e2e000eff719"
  },
  {
    "url": "assets/js/9.21e10b6f.js",
    "revision": "9d947cfe66c83e3cd17bd576c34da825"
  },
  {
    "url": "assets/js/app.7e3059af.js",
    "revision": "8a36b29e179962503bde08e3795f4524"
  },
  {
    "url": "assets/js/vendors~docsearch.3e7f0620.js",
    "revision": "f938101ae728ac72f8183368e016816e"
  },
  {
    "url": "authorAvatar.png",
    "revision": "a0f444359496b1978934d0cfba647d92"
  },
  {
    "url": "bai.png",
    "revision": "50d143aea2727c7e514d1a5f7e19e46e"
  },
  {
    "url": "categories/index.html",
    "revision": "6a246d2bc932a0445c3dc7646abceaf7"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "2341934a00a1ec4b3ed84d731bce7972"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "da6eadeac03b3571df99f5bc4608d8da"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "4b78fdde569d47721c0aa6bfd8714c0b"
  },
  {
    "url": "cute.jpg",
    "revision": "d38a85e193f371e4294490987ae8d413"
  },
  {
    "url": "dai.png",
    "revision": "1ec71f453e98ef2960ba1836ec2f7641"
  },
  {
    "url": "dog.png",
    "revision": "35d07ed8d93d0ac757a7453f1d11837e"
  },
  {
    "url": "image-1.png",
    "revision": "9acad8e3e19082d8224ac02489d9ae03"
  },
  {
    "url": "index.html",
    "revision": "bbb922c028c0e990383a6f0b55c34bb9"
  },
  {
    "url": "index2.png",
    "revision": "900f13fa7bfe2142118411d650143b32"
  },
  {
    "url": "index3.jpg",
    "revision": "f17e87e8b9b1be776d142ca0fa872c74"
  },
  {
    "url": "index4.png",
    "revision": "1b175aad8a2d522c66c4863f0b5053d1"
  },
  {
    "url": "index5.jpg",
    "revision": "e645e65beaec13986cbe0a4a07888317"
  },
  {
    "url": "index6.jpg",
    "revision": "70205fc67a72f3c12e152895bd74cc14"
  },
  {
    "url": "index7.jpg",
    "revision": "b022a345344c8b9f0dbf4d92b08fa31d"
  },
  {
    "url": "js/bg.js",
    "revision": "c6c7cf6c411fae7e304b715b705ec584"
  },
  {
    "url": "js/botui-theme-default.css",
    "revision": "52d28c26ff2c5515baccdcd3907bd80f"
  },
  {
    "url": "js/botui.js",
    "revision": "b6fad7ebbee170e2a8f986e5ceaa9e8f"
  },
  {
    "url": "js/botui.min.css",
    "revision": "82e143779bd9e0957ef67d9172c8b18d"
  },
  {
    "url": "js/circleMagic.js",
    "revision": "0e34fe62d1e3bca6ecd563428bec97f5"
  },
  {
    "url": "js/common.js",
    "revision": "8cd550a4208c963e4cb814b605c807e0"
  },
  {
    "url": "js/daoVoice.js",
    "revision": "7c191021f39298c1f82e021f5d2fc957"
  },
  {
    "url": "js/mouseClick.js",
    "revision": "23d062304bbfa380273985e1de8c75bb"
  },
  {
    "url": "js/photo.png",
    "revision": "7d367f1d22280d892e923d8145ac4250"
  },
  {
    "url": "js/sakura.js",
    "revision": "22531f72f4fd14e023d24650809cb14c"
  },
  {
    "url": "live2d/koharu/assets/moc/koharu.2048/texture_00.png",
    "revision": "495eea8d906c2b03abfe3fa9de2f2a8b"
  },
  {
    "url": "log.png",
    "revision": "b449271fdec8adb83f9a73cb67b9007e"
  },
  {
    "url": "red.png",
    "revision": "9dea895966b3dd6c7441e89c1ac7ebb0"
  },
  {
    "url": "tag/Boolean/index.html",
    "revision": "020a3a4b24a3cecd56f575d1e87a9a73"
  },
  {
    "url": "tag/GitHubPages/index.html",
    "revision": "2342fd40a9dbf0d73e0eccab66b39615"
  },
  {
    "url": "tag/index.html",
    "revision": "45d7a41f4586b32a1ff622aa6d15a616"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "7f15f55f1e70ee11652a315062c7cf3d"
  },
  {
    "url": "tag/Line profiler/index.html",
    "revision": "00df7523c1d7a795899b5f8a83f24b27"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "b72f248af5bf5e1dcf86a9a0dd9f233a"
  },
  {
    "url": "tag/Number/index.html",
    "revision": "a1f168ddc820e95697b1bffdb38da873"
  },
  {
    "url": "tag/prisma/index.html",
    "revision": "bedf43725fd3d3b1b139542dae81c88e"
  },
  {
    "url": "tag/python/index.html",
    "revision": "9f4742af68902aa6b7461eb3cd88391f"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "b57e0eba72fa88115add637d5b1ddae9"
  },
  {
    "url": "tag/rsync/index.html",
    "revision": "35ed6d75b95408a9bcc19418d8454b69"
  },
  {
    "url": "tag/Scalene/index.html",
    "revision": "779f7e5e2cc904866d9aa20429ad792c"
  },
  {
    "url": "tag/SCP/index.html",
    "revision": "07d317112888282f33255d222c13eeaf"
  },
  {
    "url": "tag/SSH/index.html",
    "revision": "5ecd520705d7c743eed6af9aba16ae86"
  },
  {
    "url": "tag/String/index.html",
    "revision": "3e8c7569fc46fce1acc9cabcf42e86da"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "7bc720202f5ee422fc38b664b984c6ae"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "8051d9bd9b20ece416a6a417b292aca8"
  },
  {
    "url": "tag/主键/index.html",
    "revision": "6c783cad5f9c365b765582ae5897398e"
  },
  {
    "url": "tag/外键/index.html",
    "revision": "836fb4e58cbc6b48f72b8ba84bb1124e"
  },
  {
    "url": "tag/性能分析/index.html",
    "revision": "9c12f8db9be019d002a657686bf3e1de"
  },
  {
    "url": "tag/数据库关系/index.html",
    "revision": "14223760d6766694408c50cc5e80711e"
  },
  {
    "url": "tag/数据库设计/index.html",
    "revision": "ad6f04d0ebf197b59f5cb984e35e5a28"
  },
  {
    "url": "tag/文件上传/index.html",
    "revision": "bba572f746b747e173f049cc3e92f5d2"
  },
  {
    "url": "tag/文件下载/index.html",
    "revision": "99fbca520d043a00ec2fb8912eb30f90"
  },
  {
    "url": "tag/日记/index.html",
    "revision": "97ec81cd5e22860808d0f3e092293685"
  },
  {
    "url": "tag/类型转换/index.html",
    "revision": "4785fa265426ba788b0eb4f774ee3976"
  },
  {
    "url": "timeline/index.html",
    "revision": "6ef280fafc9b3b7f164d2df86d437a47"
  },
  {
    "url": "to.jpg",
    "revision": "ff674343879116e22e3cf713358f2cb5"
  },
  {
    "url": "views/前端/2023/121501.html",
    "revision": "aa539f420b56d109c0d72e0ad55105d6"
  },
  {
    "url": "views/前端/2023/JavaScript中的类型转换.html",
    "revision": "f7e750647274803a221c0ea26609e0bb"
  },
  {
    "url": "views/后端/2023/Python中性能分析的包.html",
    "revision": "f3d4650827a10d06d967d838091aea02"
  },
  {
    "url": "views/后端/2023/python的prisma入门.html",
    "revision": "07d6ac7400706a5e4e40ba60fa29953f"
  },
  {
    "url": "views/后端/2023/将远程服务器文件下载到本地.html",
    "revision": "ff8ee8415adc04a03a4e27f6da86e13d"
  },
  {
    "url": "views/后端/2023/数据库表之间的关系及实现1:1、1:N、N:N关系.html",
    "revision": "19dd1c15b1292911fcb89d2e7ebe42bf"
  },
  {
    "url": "views/后端/2023/本地文件上传至Linux服务器.html",
    "revision": "e3f5af11c730bffbc4ab2be5b58804af"
  },
  {
    "url": "views/随笔/《1984》读后感.html",
    "revision": "2c19b9df85c307c21e36203a7663e312"
  },
  {
    "url": "views/随笔/ce.html",
    "revision": "4b2762ef59cb11b7d8d6d7677a4c36ed"
  },
  {
    "url": "views/随笔/guide copy.html",
    "revision": "cf484df210aa5a9c4a7c7cf7d41e8fc1"
  },
  {
    "url": "views/随笔/guide.html",
    "revision": "8aab79a198e34301e922ba835e1b70e6"
  },
  {
    "url": "views/随笔/qw copy 2.html",
    "revision": "51d21e958870faac7b73f1e99d4410c4"
  },
  {
    "url": "views/随笔/qw copy.html",
    "revision": "279358a827e2a4eed8d198b40008a2a7"
  },
  {
    "url": "views/随笔/qw.html",
    "revision": "348bb79fb40fddda82ef5b4d0f11d0fc"
  },
  {
    "url": "whitecat.png",
    "revision": "e8cb1f34b1bd966388ac847c82f1c4be"
  },
  {
    "url": "xia.png",
    "revision": "4b956029fb7b138f794af1dffb2edef0"
  },
  {
    "url": "zai.png",
    "revision": "c5ac6173df335a0395431b6914aae489"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
