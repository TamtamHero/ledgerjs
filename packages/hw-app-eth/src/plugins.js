"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPluginForContractMethod = void 0;
const data = {
  "0x158079ee67fce2f58472a96584a73c7ab9ac95c1": {
      "0x852a12e3": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e64158079ee67fce2f58472a96584a73c7ab9ac95c1852a12e3",
          "signature": "3045022100c5e8660be7c01ee145b3e281ec06f791137ed4e71bda7289504caf74bde2e95c02201d5fb68251c056ace23626c65f825483fe9a923a9955f1728b73a8fb950c1d8e"
      },
      "0xa0712d68": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e64158079ee67fce2f58472a96584a73c7ab9ac95c1a0712d68",
          "signature": "304402203ec4a05852afa1609657707234144ee56306889a08cc231242abd4e5aa95b6bb0220449446785c406e30e149f41ef3ece4e5cd7ce048212cdf9d17168842beabc05e"
      },
      "0xdb006a75": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e64158079ee67fce2f58472a96584a73c7ab9ac95c1db006a75",
          "signature": "3045022100ee7f9e3706bdcf11bd7f26b3269e785f7ccfbcd72a59507bc3f7b85aa165f6b6022027d0a0d2b18e150b032873deba8abb072468df4f94d92a227207e673529335ca"
      }
  },
  "0x35a18000230da775cac24873d00ff85bccded550": {
      "0x852a12e3": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e6435a18000230da775cac24873d00ff85bccded550852a12e3",
          "signature": "30440220467f393541688fe03c8004466bf49dfb0a0b8183c20a3e1b649cb95b02912b15022073aa46fba641d1c775ee1aae16324c4c469fcf583da6bb31b3418f54d2555b9f"
      },
      "0xa0712d68": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e6435a18000230da775cac24873d00ff85bccded550a0712d68",
          "signature": "304402205e76c584252eab101b547eacf9cdc81c884f10cae0eb74ca7e4bd2d8c5e2cbaf022036c874f54c11301c4b6b8b3a51abe88afa4ab0e604e72e0265455aa14111c618"
      },
      "0xdb006a75": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e6435a18000230da775cac24873d00ff85bccded550db006a75",
          "signature": "3044022006008f3689a98ce21b7109600613cb26b240214e7f9626dafed005a3b75462240220385067063dfd1a8455667db032430d3d998e33d4befe4e639df15fdce5abaeb0"
      }
  },
  "0x39aa39c021dfbae8fac545936693ac917d5e7563": {
      "0x852a12e3": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e6439aa39c021dfbae8fac545936693ac917d5e7563852a12e3",
          "signature": "3044022003c94062b14d64f0acf7fded49b5e0ee03c1cc6b5c30e02e3f4c8f619ae007e10220750ea17caf7023df24033b25502c1f27f2dfd8800eff0fbb45854aa982b09b8a"
      },
      "0xa0712d68": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e6439aa39c021dfbae8fac545936693ac917d5e7563a0712d68",
          "signature": "3044022030cea6023450bec0947a7c3956fffc303d36549c259b3f6722a4273a8b84cc8f022011ad3e982eddadf85f314a75547d3dbb457e6a9c8684deb6c4b3602a45567850"
      },
      "0xdb006a75": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e6439aa39c021dfbae8fac545936693ac917d5e7563db006a75",
          "signature": "304402201b950bde8fa3cc4b634e760b29418620321095c6bc7bc659ed84b2935879fec1022060d1aefbe0665c488d5a47021f283d037da8a9ccf053eefe91fbb2dd9f6bfc36"
      }
  },
  "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5": {
      "0x1249c58b": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e644ddc2d193948926d02f9b1fe9e1daa0718270ed51249c58b",
          "signature": "30450221009d0ec8b7798835bc01dc9441d5c8ca3ac2d2d5ee03b9165944889a2da3c603c9022053adaa683b5e09e677782992e8ab788ca758560d3f887a63cd8fd4d90e62bc79"
      },
      "0x852a12e3": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e644ddc2d193948926d02f9b1fe9e1daa0718270ed5852a12e3",
          "signature": "3044022058ffc94b021d029309d6f502f316d2824972aae94932a025d8d7c4e6471a9076022077ec3964fab5d365e751108e34cc096992c77a88a1cbfde9aa43d3f141292f9a"
      },
      "0xdb006a75": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e644ddc2d193948926d02f9b1fe9e1daa0718270ed5db006a75",
          "signature": "3044022038bd43b13e14b429544b0627d661b97d36f52976f9d43016624e04e2ac182747022017d82c16836c95df47636889aebf15edaa2412a5f883dc7ddf5fb25de0cc541b"
      }
  },
  "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643": {
      "0x852a12e3": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e645d3a536e4d6dbd6114cc1ead35777bab948e3643852a12e3",
          "signature": "3044022100ff310bd3acdaba8c4d3d120b96ebb1ec32abff5fdaaedc40e10f22fec4624e90021f376c6ab2c480d9c6ecbd0aa1c004920a6ecfa47b95be735c6b18436c945ede"
      },
      "0xa0712d68": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e645d3a536e4d6dbd6114cc1ead35777bab948e3643a0712d68",
          "signature": "3045022100e9e9f60580e8a1989db91ff33b8cdbe2d174e4614534e4d8f3a6ea0475f230e402201dc482c674ecfcb60885073778fdb3f4d93eeda385bb4e108e2d07a5405078b2"
      },
      "0xdb006a75": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e645d3a536e4d6dbd6114cc1ead35777bab948e3643db006a75",
          "signature": "3044022044f8b8d8838e1dcd0b24af77b10ea93149585dedbb35bc705f1095054646729602203d7b2357203508075491c685e2aeb18bdd955adcc667173636bc0974af35da3f"
      }
  },
  "0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e": {
      "0x852a12e3": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e646c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e852a12e3",
          "signature": "3045022100e8e0996469e7d29c23acf54ace5e162523cc8d7b6050240d0e3b9ba7a714a5710220384a040de8da3853db23a968798ed1f537d6ff6e86815ae093c5cd0f501b4fc9"
      },
      "0xa0712d68": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e646c8c6b02e7b2be14d4fa6022dfd6d75921d90e4ea0712d68",
          "signature": "304402202218261513c6c19597b3ad610ff469a922634dcc11884951410543c3123f583702200cf6ffdf7351711b1ef68684fca0bc93809e36b64397387463504221e60064d2"
      },
      "0xdb006a75": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e646c8c6b02e7b2be14d4fa6022dfd6d75921d90e4edb006a75",
          "signature": "304402206d106cd13b765e3d270346b71211b89420c7b195cfce034adf468bbdc925acd902204bd6ecd9ea88c793b7195d413bcf4e4b41e922f59bce8fb46be14aee21274ffb"
      }
  },
  "0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407": {
      "0x852a12e3": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e64b3319f5d18bc0d84dd1b4825dcde5d5f7266d407852a12e3",
          "signature": "3044022019895eb4dad08223fd950b254fdcaa5a7c4b949e528d9903b62ee32b3a49ba890220459c30960914d8e955e1a2120b195a6acd23268c694f45f42cfb342fb0453681"
      },
      "0xa0712d68": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e64b3319f5d18bc0d84dd1b4825dcde5d5f7266d407a0712d68",
          "signature": "3045022100e2a4c22f8bd4d064297544c1aa25df75d309099640fa47ceddd56261b6e22cad02206e8bd8395b07bc5ee541cf473f815ce1728e133ed3bebe3385e74fc47727f4c5"
      },
      "0xdb006a75": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e64b3319f5d18bc0d84dd1b4825dcde5d5f7266d407db006a75",
          "signature": "304502210084f9cc72ae138c88b25b337bb2640a783171eebdd0341baa2a3afe24a003dc0602202f3cdd4f033f3a3cb6590b20f6f3a99598f80b6e71005670c0446fe79f9aea88"
      }
  },
  "0xc11b1268c1a384e55c48c2391d8d480264a3a7f4": {
      "0x852a12e3": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e64c11b1268c1a384e55c48c2391d8d480264a3a7f4852a12e3",
          "signature": "3045022100ac043023fe30f492f049eb76813ffe0a605f37a1b2d0650140165ce3eb7b9936022025974f8996e6367535687404a33e8e5f6dfa5d357152859b0decad1432c47419"
      },
      "0xa0712d68": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e64c11b1268c1a384e55c48c2391d8d480264a3a7f4a0712d68",
          "signature": "3044022032c5dc26657a1145b2d1b7bda9883aab6a1b97c19e34d547344208c3f771502a022076808d4803195722ac09c8a045b4dcbfaf85ae939e18851889c75ccaddc717a6"
      },
      "0xdb006a75": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e64c11b1268c1a384e55c48c2391d8d480264a3a7f4db006a75",
          "signature": "3045022100b3835bceb1030b9c2be6c8db3740297af30515f456df34d52f3412a136895c260220065129c5936cfecc6d3998fff855156f0f0b7353de71b31f7426b65571b83a31"
      }
  },
  "0xf5dce57282a584d2746faf1593d3121fcac444dc": {
      "0x852a12e3": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e64f5dce57282a584d2746faf1593d3121fcac444dc852a12e3",
          "signature": "304402203bde7a441cdb3a36a49602734c54a1fc3dba65ee705282aa63afbd9863d5775d02206a48b91715cfa422f1c0fb1e17cf051fc9101fa48798c2b47a8c19348c179282"
      },
      "0xa0712d68": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e64f5dce57282a584d2746faf1593d3121fcac444dca0712d68",
          "signature": "3044022016e6884bd2e5f3b4024a46feea1e75ff8753a5446f2744d3ef80d04f5795b7eb02207d9c5d1b447a3b267c955e827329c28997c94527b9b0c5bf8cdf113a1ed1fcc9"
      },
      "0xdb006a75": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e64f5dce57282a584d2746faf1593d3121fcac444dcdb006a75",
          "signature": "3044022027408c6afa04054f259137e689807d23115057b34578a13e3a75e8ea1654a92a02206cedea26a9e3c7c696d7aca104743013111ccd2a5d7bd77814104e5ad41e198e"
      }
  },
  "0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9": {
      "0x852a12e3": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e64f650c3d88d12db855b8bf7d11be6c55a4e07dcc9852a12e3",
          "signature": "30440220514b42e46e8ecbadc4dd307b2d549687c720dd88e62ffe53e814e0d79229471e02202344476f5d3b294103d71fb134703319c4937d879a3291ed3bad4373da3839a9"
      },
      "0xa0712d68": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e64f650c3d88d12db855b8bf7d11be6c55a4e07dcc9a0712d68",
          "signature": "30440220733f43a7f15a535c49b146ae4a691f477a911d04af49424281beeabed328e322022060e9ed6a353f29f35cd3f88785344b49caaee78929de4cbc4b7baf066bd71b06"
      },
      "0xdb006a75": {
          "plugin": "Compound",
          "serialized_data": "08436f6d706f756e64f650c3d88d12db855b8bf7d11be6c55a4e07dcc9db006a75",
          "signature": "304402203f1dd57aa7d9bb804dd8f79bc47592ea4de5d4478239837c6a143e87fa64a9c202205887016e708a0573b6f5cbc348f4976a85fc20e6eb11729eaaa3c6677877fd76"
      }
  }
};
/**
 * Retrieve the name of a plugin compatible with a given contract address and a method selector
 */

const getPluginForContractMethod = (contractAddress, selector) => {
  if (contractAddress in data) {
    let contractSelectors = data[contractAddress];

    if (selector in contractSelectors){
      return {
        "payload": contractSelectors[selector]["serialized_data"],
        "signature": contractSelectors[selector]["signature"],
      }
    }
  }
};

exports.getPluginForContractMethod = getPluginForContractMethod;
//# sourceMappingURL=plugins.js.map