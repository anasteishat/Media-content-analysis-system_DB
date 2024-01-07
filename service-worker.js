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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "efadf08455ffe6b275763e330af00319"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.a69c6d00.css",
    "revision": "d8b4ad386149975297fbe47f4d4161c6"
  },
  {
    "url": "assets/img/2024_01_07_17_03_51_425_Qrjt.57f8c7ea.png",
    "revision": "57f8c7ea4300f143f97f0dc3bbb4b696"
  },
  {
    "url": "assets/img/2024_01_07_17_05_10_498_9Q84.8c24046e.png",
    "revision": "8c24046eef72706560ede4c7454ac0d2"
  },
  {
    "url": "assets/img/2024_01_07_17_07_00_495_1X3C.4d55ee55.png",
    "revision": "4d55ee5538fd67f3a62243299005567d"
  },
  {
    "url": "assets/img/2024_01_07_17_08_38_242_BNSc.f2be1a9b.png",
    "revision": "f2be1a9bf3fde8ee5c2c6430f34aaeea"
  },
  {
    "url": "assets/img/2024_01_07_17_09_05_206_H0DL.d5781a88.png",
    "revision": "d5781a88d9359bfb738e48d296f2a828"
  },
  {
    "url": "assets/img/2024_01_07_17_09_59_301_qfSU.8e360468.png",
    "revision": "8e3604686cc97dd1ccbe8c50f2cb6165"
  },
  {
    "url": "assets/img/relational_schema.06c8bb4c.jpg",
    "revision": "06c8bb4c67301f964ac3ade6cd210bf6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.987eab03.js",
    "revision": "960769676b2efa8db56afbfd94c56b21"
  },
  {
    "url": "assets/js/11.2563410d.js",
    "revision": "92870b239e7f52efcb0207c3d70bcba8"
  },
  {
    "url": "assets/js/12.6beda826.js",
    "revision": "17f513ff64e37b0a320add8bc8a401b3"
  },
  {
    "url": "assets/js/13.c0035e03.js",
    "revision": "f2ab0dbe7a72064a0b4ec6d8cf106f23"
  },
  {
    "url": "assets/js/14.e767138e.js",
    "revision": "881b4a2d96a2ab89fac2de82dcf9ed5f"
  },
  {
    "url": "assets/js/15.5abd7e2d.js",
    "revision": "5e0eec27f980761549d0a9d065fb6c6b"
  },
  {
    "url": "assets/js/16.de2f8d54.js",
    "revision": "d28f494f87f81690d15b0c502f551e06"
  },
  {
    "url": "assets/js/17.7d2e71f1.js",
    "revision": "a5ae9b2b9bd0454e0daf381f54117dc0"
  },
  {
    "url": "assets/js/18.181dcfdf.js",
    "revision": "f38420c607a4ae3ae232c3f4b5a8ba93"
  },
  {
    "url": "assets/js/19.6089580f.js",
    "revision": "3ebdf2d33dab2f5ccd76a6b044ad6f45"
  },
  {
    "url": "assets/js/2.9da6c638.js",
    "revision": "4b6fe114fa1393010a29fbdaa4cb7ee9"
  },
  {
    "url": "assets/js/20.62aa0e72.js",
    "revision": "d6fc44a5a5dfdd114537ca858055fa80"
  },
  {
    "url": "assets/js/21.2d35579d.js",
    "revision": "5d350e9106fb5e722c1d9a82cf553318"
  },
  {
    "url": "assets/js/22.a60d129a.js",
    "revision": "1bc5b8a4e17d2289b51279cd4f9f4523"
  },
  {
    "url": "assets/js/23.199ba461.js",
    "revision": "f3ab2bc32ca5eb40c145903fdb812c1f"
  },
  {
    "url": "assets/js/24.8d9db222.js",
    "revision": "c52d9e741fe8769d26de29235db0d877"
  },
  {
    "url": "assets/js/26.cdcf961d.js",
    "revision": "f683ac99beb1badde3e5fb377b65dcde"
  },
  {
    "url": "assets/js/3.cd0ec387.js",
    "revision": "da12692cacd0e29dd4f83a42314ba884"
  },
  {
    "url": "assets/js/4.c51d0a75.js",
    "revision": "7f855426caf97012e4b3155289960b50"
  },
  {
    "url": "assets/js/5.1bccc7a7.js",
    "revision": "4ddb90ee53d96f9526c27c44b58f623c"
  },
  {
    "url": "assets/js/6.04503463.js",
    "revision": "9fc1e6f66a79ffd5ee26e937f91216b2"
  },
  {
    "url": "assets/js/7.a7e06690.js",
    "revision": "0b6a3683bc0b50e2b14e27c5f63cba55"
  },
  {
    "url": "assets/js/8.1d44ca76.js",
    "revision": "dd31e52a5cd3dab0e1aff0fed225c178"
  },
  {
    "url": "assets/js/9.ca21a030.js",
    "revision": "87f0ec0fd8b57284e02585d24e8d9f23"
  },
  {
    "url": "assets/js/app.7645089a.js",
    "revision": "d70bcd3f383e468dd2c4f2684b5b2fe8"
  },
  {
    "url": "conclusion/index.html",
    "revision": "534f38d0ddcfdd5dace84b5169eb6208"
  },
  {
    "url": "design/index.html",
    "revision": "ff23a64e9d812cd780feda2756f5919e"
  },
  {
    "url": "index.html",
    "revision": "f1fa319d9bd8d00e3c8d74b498e838d8"
  },
  {
    "url": "intro/index.html",
    "revision": "09aea0d1f72948f24dd81925a996c334"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "45a0d39d0da3a360f2c8cfc7afb3a2c3"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "7b3a5871c05d9d230859c5e214e164c5"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "98386da91126465bc1a66bd7b7b7c37d"
  },
  {
    "url": "software/index.html",
    "revision": "bbf8e9fdaf9c0936401ec107fb88c83e"
  },
  {
    "url": "test/index.html",
    "revision": "b99a3c56ca7741401d701e0442683f08"
  },
  {
    "url": "use cases/index.html",
    "revision": "e1141dcb9d0d9547e2d4ac3e617e87b6"
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
