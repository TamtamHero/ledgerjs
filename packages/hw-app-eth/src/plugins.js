const data =
{
  "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643": {
    "contractName": "Compound DAI",
    "plugins": [
      {
        "name": "Compound",
        "selectors": ["0xa0712d68", "0xdb00x6a75", "0x852a12e3"]
      }
    ]
  },
  "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5": {
    "contractName": "Compound ETH",
    "plugins": [
      {
        "name": "Compound",
        "selectors": ["0x1249c58b", "0xdb00x6a75", "0x852a12e3"]
      }
    ]
  },
  "0x39aa39c021dfbae8fac545936693ac917d5e7563": {
    "contractName": "Compound USDC",
    "plugins": [
      {
        "name": "Compound",
        "selectors": ["0xa0712d68", "0xdb00x6a75", "0x852a12e3"]
      }
    ]
  },
  "0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407": {
    "contractName": "Compound ZRX",
    "plugins": [
      {
        "name": "Compound",
        "selectors": ["0xa0712d68", "0xdb00x6a75", "0x852a12e3"]
      }
    ]
  },
  "0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9": {
    "contractName": "Compound USDT",
    "plugins": [
      {
        "name": "Compound",
        "selectors": ["0xa0712d68", "0xdb00x6a75", "0x852a12e3"]
      }
    ]
  },
  "0xc11b1268c1a384e55c48c2391d8d480264a3a7f4": {
    "contractName": "Compound WBTC",
    "plugins": [
      {
        "name": "Compound",
        "selectors": ["0xa0712d68", "0xdb00x6a75", "0x852a12e3"]
      }
    ]
  },
  "0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e": {
    "contractName": "Compound BAT",
    "plugins": [
      {
        "name": "Compound",
        "selectors": ["0xa0712d68", "0xdb00x6a75", "0x852a12e3"]
      }
    ]
  },
  "0x158079ee67fce2f58472a96584a73c7ab9ac95c1": {
    "contractName": "Compound REP",
    "plugins": [
      {
        "name": "Compound",
        "selectors": ["0xa0712d68", "0xdb00x6a75", "0x852a12e3"]
      }
    ]
  },
  "0xf5dce57282a584d2746faf1593d3121fcac444dc": {
    "contractName": "Compound SAI",
    "plugins": [
      {
        "name": "Compound",
        "selectors": ["0xa0712d68", "0xdb00x6a75", "0x852a12e3"]
      }
    ]
  },
  "0x35a18000230da775cac24873d00ff85bccded550": {
    "contractName": "Compound CUNI",
    "plugins": [
      {
        "name": "Compound",
        "selectors": ["0xa0712d68", "0xdb00x6a75", "0x852a12e3"]
      }
    ]
  },
  "0x1bd435f3c054b6e901b7b108a0ab7617c808677b": {
    "contractName": "Paraswap",
    "plugins": [
      {
        "name": "Paraswap",
        "selectors": ["0x58b9d179", "0x0863b7ac", "0xcfc0afeb", "0x8f00eccb", "0xec1d21dd", "0xf9355f72", "0x33635226", "0xa27e8b6b", "0xf95a49eb"]
      }
    ]
  },
};


/**
 * Retrieve the name of a plugin compatible with a given contract address and a method selector
 */
export const getPluginForContractMethod = (contractAddress: string, selector: string): ?string =>
  {
    if(contractAddress in data){
      let contractPlugins = data[contractAddress]['plugins'];
      for (const plugin of contractPlugins) {
          if(plugin['selectors'].includes(selector)){
              return plugin['name'];
          }
      }
    }
  }
