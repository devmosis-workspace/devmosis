import type { Chain } from '../types';
const chains: Chain[] = [
  {
    "$schema": "../chain.schema.json",
    "chain_name": "xpla",
    "status": "live",
    "website": "https://xpla.io",
    "network_type": "mainnet",
    "pretty_name": "XPLA",
    "chain_id": "dimension_37-1",
    "bech32_prefix": "xpla",
    "daemon_name": "xplad",
    "node_home": "$HOME/.xpla",
    "key_algos": [
      "ethsecp256k1"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "axpla",
          "fixed_min_gas_price": 850000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "axpla"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/xpladev/xpla",
      "recommended_version": "v1.2.1",
      "compatible_versions": [
        "v1.2.1"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/xpladev/mainnet/main/dimension_37-1/genesis.json"
      },
      "versions": [
        {
          "name": "evm",
          "recommended_version": "v1.2.1",
          "compatible_versions": [
            "v1.2.1"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "e7b6016ce5663a69ba71a982072315545eb0d5f6",
          "address": "seed.xpla.delightlabs.io:26656",
          "provider": "DELIGHT"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:20157",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ],
      "persistent_peers": [
        {
          "id": "7364858f416c1890c85a83afedf1afecccb9a9de",
          "address": "34.86.128.71:26656",
          "provider": "Holdings"
        },
        {
          "id": "d5c5908a5390b2278180ce975d94d4a43da4952b",
          "address": "34.89.191.254:26656",
          "provider": "Com2verse"
        },
        {
          "id": "fa9585ef51316cda0125bb9bed1d35f59d7448b9",
          "address": "104.196.250.63:26656",
          "provider": "Com2us"
        },
        {
          "id": "e6d30a1d191c64ff301c44f9ddd9d0b3d1f9ee7a",
          "address": "35.230.121.77:26656",
          "provider": "Com2us"
        },
        {
          "id": "88c62eea9c6229c26cd45d1f58cf48bfc1463b31",
          "address": "130.211.121.170:26656",
          "provider": "Hive Platform Lab"
        },
        {
          "id": "6592da1bfd8bea853b89946d4c502586e2712b4e",
          "address": "34.87.100.83:26656",
          "provider": "Crossnode Labs"
        },
        {
          "id": "15efa0a83dff372752369cc984492d9ee72f332b",
          "address": "cdif46gvol8ecmg7jpqg.bdnodes.net:26656",
          "provider": "DELIGHT"
        },
        {
          "id": "15d365ce8bfaff27ad4260e5db3fba480d334c39",
          "address": "52.28.248.241:26656",
          "provider": "Blockdaemon"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://dimension-rpc.xpla.dev",
          "provider": "Holdings"
        },
        {
          "address": "https://xpla-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ],
      "rest": [
        {
          "address": "https://dimension-lcd.xpla.io",
          "provider": "ZenaAD"
        },
        {
          "address": "https://dimension-lcd.xpla.dev",
          "provider": "Holdings"
        },
        {
          "address": "http://xpla.api.staking-explorer.com",
          "provider": "xpla.staking-explorer.com"
        },
        {
          "address": "https://xpla-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ],
      "grpc": [],
      "evm-http-jsonrpc": [
        {
          "address": "https://dimension-evm-rpc.xpla.dev",
          "provider": "Holdings"
        }
      ]
    },
    "explorers": [
      {
        "kind": "explorer.xpla",
        "url": "https://explorer.xpla.io",
        "tx_page": "https://explorer.xpla.io/mainnet/tx/${txHash}"
      },
      {
        "kind": "finder",
        "url": "https://finder.xpla.io",
        "tx_page": "https://finder.xpla.io/mainnet/tx/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/xpla",
        "tx_page": "https://www.mintscan.io/xpla/txs/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "vincechain",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "VinceChain",
    "chain_id": "vince_1000-1",
    "bech32_prefix": "vce",
    "node_home": "$HOME/.vinced",
    "slip44": 60,
    "key_algos": [
      "ethsecp256k1"
    ],
    "extra_codecs": [
      "ethermint"
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "avce",
          "fixed_min_gas_price": 250000000,
          "low_gas_price": 10000000000,
          "average_gas_price": 25000000000,
          "high_gas_price": 40000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "avce"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/AyrisDev/VinceFinance",
      "recommended_version": "",
      "compatible_versions": [
        "",
        ""
      ],
      "binaries": {
        "linux/amd64": "",
        "linux/arm64": "",
        "darwin/amd64": "",
        "darwin/arm64": "",
        "windows/amd64": ""
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/AyrisDev/VinceFinance/main/genesis.json"
      },
      "versions": [
        {
          "name": "",
          "recommended_version": "",
          "compatible_versions": [
            "",
            ""
          ],
          "binaries": {
            "linux/amd64": "",
            "linux/arm64": "",
            "darwin/amd64": "",
            "darwin/arm64": "",
            "windows/amd64": ""
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/vincechain/images/logo.png"
    },
    "peers": {
      "seeds": [
        {
          "id": "37344378264b62e15fae8260fb7fad7839ebf864",
          "address": "vincescan.com:26656",
          "provider": "VinceChain"
        }
      ],
      "persistent_peers": []
    },
    "apis": {
      "rpc": [
        {
          "address": "http://vincescan.com:26657/",
          "provider": "vincescan.com"
        }
      ],
      "rest": [
        {
          "address": "http://vincescan.com:1317/",
          "provider": "vincescan.com"
        }
      ],
      "grpc": [],
      "evm-http-jsonrpc": [
        {
          "address": "http://rpc.vincescan.com",
          "provider": "vincescan.com"
        }
      ]
    },
    "explorers": [
      {
        "kind": "blockscout",
        "url": "https://vincescan.com",
        "tx_page": "https://vincescan.com/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "vidulum",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://vidulum.app/",
    "pretty_name": "Vidulum",
    "chain_id": "vidulum-1",
    "bech32_prefix": "vdl",
    "daemon_name": "vidulumd",
    "node_home": "$HOME/.vidulum",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 370,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uvdl",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uvdl"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/vidulum/mainnet",
      "recommended_version": "v1.2.0",
      "compatible_versions": [
        "v1.2.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/vidulum/mainnet/releases/download/v1.2.0/vidulum_linux_amd64.tar.gz",
        "linux/arm64": "https://github.com/vidulum/mainnet/releases/download/v1.2.0/vidulum_linux_arm64.tar.gz",
        "darwin/amd64": "https://github.com/vidulum/mainnet/releases/download/v1.2.0/vidulum_darwin_amd64.tar.gz",
        "windows/amd64": "https://github.com/vidulum/mainnet/releases/download/v1.2.0/vidulum_windows_amd64.zip"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/vidulum/mainnet/main/genesis.json"
      },
      "versions": [
        {
          "name": "v1.2.0",
          "recommended_version": "v1.2.0",
          "compatible_versions": [
            "v1.2.0"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/vidulum/mainnet/releases/download/v1.2.0/vidulum_linux_amd64.tar.gz",
            "linux/arm64": "https://github.com/vidulum/mainnet/releases/download/v1.2.0/vidulum_linux_arm64.tar.gz",
            "darwin/amd64": "https://github.com/vidulum/mainnet/releases/download/v1.2.0/vidulum_darwin_amd64.tar.gz",
            "windows/amd64": "https://github.com/vidulum/mainnet/releases/download/v1.2.0/vidulum_windows_amd64.zip"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg"
    },
    "peers": {
      "seeds": [],
      "persistent_peers": [
        {
          "id": "52051fef449e76eb399966312f523e8e5e27490b",
          "address": "95.217.118.211:26656",
          "provider": "minerpool"
        },
        {
          "id": "209688f5bccb88f6397a97cc11ab545a014aa559",
          "address": "137.184.92.115:26656",
          "provider": "1square"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://mainnet-rpc.vidulum.app/",
          "provider": "vidulum"
        },
        {
          "address": "https://rpc-vidulum-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://rpc-vdl.nodine.id",
          "provider": "Nodine.ID"
        }
      ],
      "rest": [
        {
          "address": "https://mainnet-lcd.vidulum.app",
          "provider": "vidulum"
        },
        {
          "address": "https://api-vidulum-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://api-vdl.nodine.id/",
          "provider": "Nodine.ID"
        }
      ],
      "grpc": [
        {
          "address": "grpc-vidulum-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://explorers.vidulum.app/vidulum",
        "tx_page": "https://explorers.vidulum.app/vidulum/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/vidulum",
        "tx_page": "https://ping.pub/vidulum/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/vidulum",
        "tx_page": "https://atomscan.com/vidulum/transactions/${txHash}",
        "account_page": "https://atomscan.com/vidulum/accounts/${accountAddress}"
      },
      {
        "kind": "Nodine Explorer",
        "url": "https://explorer.co.id/vidulum",
        "tx_page": "https://explorer.co.id/vidulum/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "uptick",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://uptick.network/",
    "pretty_name": "Uptick",
    "chain_id": "uptick_117-1",
    "bech32_prefix": "uptick",
    "daemon_name": "uptickd",
    "node_home": "$HOME/.uptickd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "auptick",
          "fixed_min_gas_price": 10000000000,
          "low_gas_price": 10000000000,
          "average_gas_price": 25000000000,
          "high_gas_price": 40000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "auptick"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/UptickNetwork/uptick",
      "recommended_version": "v0.2.4",
      "compatible_versions": [
        "v0.2.4"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/UptickNetwork/uptick/releases/download/v0.2.4/uptick-linux-amd64-v0.2.4.tar.gz"
      },
      "cosmos_sdk_version": "0.46",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "cosmwasm_version": "",
      "cosmwasm_enabled": false,
      "ibc_go_version": "5.0.1",
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/uptick-network/mainnet/main/genesis.json"
      },
      "versions": [
        {
          "name": "v0.2.4",
          "recommended_version": "v0.2.4",
          "compatible_versions": [
            "v0.2.4"
          ],
          "cosmos_sdk_version": "0.46",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "",
          "cosmwasm_enabled": false,
          "ibc_go_version": "5.0.1",
          "binaries": {
            "linux/amd64": "https://github.com/UptickNetwork/uptick/releases/download/v0.2.4/uptick-linux-amd64-v0.2.4.tar.gz"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "f97a75fb69d3a5fe893dca7c8d238ccc0bd66a8f",
          "address": "uptick.seed.brocha.in:30600",
          "provider": "Brochain"
        },
        {
          "id": "400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc",
          "address": "uptick.rpc.kjnodes.com:11559",
          "provider": "kjnodes"
        },
        {
          "id": "e71bae28852a0b603f7360ec17fe91e7f065f324",
          "address": "uptick-mainnet-seed.itrocket.net:35656",
          "provider": "itrocket"
        }
      ],
      "persistent_peers": [
        {
          "id": "94b63fddfc78230f51aeb7ac34b9fb86bd042a77",
          "address": "uptick-rpc.p2p.brocha.in:30601",
          "provider": "Brochain"
        },
        {
          "id": "dd482d080820020b144ca2efaf128d78261dea82",
          "address": "uptick-mainnet-peer.itrocket.net:10656",
          "provider": "itrocket"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://uptick-rpc.brocha.in:443",
          "provider": "Brochain"
        },
        {
          "address": "https://rpc.uptick.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://uptick.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://m-uptick.rpc.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://uptick-mainnet-rpc.itrocket.net:443",
          "provider": "itrocket"
        }
      ],
      "rest": [
        {
          "address": "https://uptick-rest.brocha.in:443",
          "provider": "Brochain"
        },
        {
          "address": "https://api.uptick.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://uptick.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://m-uptick.api.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://uptick-mainnet-api.itrocket.net:443",
          "provider": "itrocket"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.uptick.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "uptick.grpc.kjnodes.com:11590",
          "provider": "kjnodes"
        },
        {
          "address": "uptick-mainnet-grpc.itrocket.net:10090",
          "provider": "itrocket"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://jsonrpc.uptick.nodestake.top",
          "provider": "NodeStake"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://explorers.brocha.in/uptick",
        "tx_page": "https://explorers.brocha.in/uptick/tx/${txHash}"
      },
      {
        "kind": "NodeStake Explorer",
        "url": "https://explorer.nodestake.top/uptick",
        "tx_page": "https://explorer.nodestake.top/uptick/tx/${txHash}"
      },
      {
        "kind": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀 Explorer",
        "url": "https://exp.utsa.tech/uptick",
        "tx_page": "https://exp.utsa.tech/uptick/tx/${txHash}"
      },
      {
        "kind": "cosmotracker",
        "url": "https://cosmotracker.com/uptick",
        "tx_page": "https://cosmotracker.com/uptick/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "unification",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://unification.com/",
    "pretty_name": "Unification",
    "chain_id": "FUND-MainNet-2",
    "bech32_prefix": "und",
    "daemon_name": "und",
    "node_home": "$HOME/.und_mainchain",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 5555,
    "fees": {
      "fee_tokens": [
        {
          "denom": "nund",
          "fixed_min_gas_price": 25,
          "low_gas_price": 100,
          "average_gas_price": 200,
          "high_gas_price": 300
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "nund"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/unification-com/mainchain",
      "recommended_version": "v1.6.3",
      "compatible_versions": [
        "v1.6.3"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/unification-com/mainchain/releases/download/v1.6.3/und_v1.6.3_linux_x86_64.tar.gz"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/unification-com/mainnet/master/latest/genesis.json"
      },
      "versions": [
        {
          "name": "v1.6.3",
          "recommended_version": "v1.6.3",
          "compatible_versions": [
            "v1.6.3"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/unification-com/mainchain/releases/download/v1.6.3/und_v1.6.3_linux_x86_64.tar.gz"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "0c2b65bc604a18a490f5f55bb7b4140cfb512ced",
          "address": "seed1.unification.io:26656"
        },
        {
          "id": "e66e0f89af19da09f676c85b262d591b8c2bb9d8",
          "address": "seed2.unification.io:26656"
        }
      ],
      "persistent_peers": []
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc1.unification.io:443",
          "provider": "Unification"
        },
        {
          "address": "https://rpc.unification.chainmasters.ninja/",
          "provider": "Chainmasters"
        }
      ],
      "rest": [
        {
          "address": "https://rest.unification.io",
          "provider": "Unification"
        },
        {
          "address": "https://rest.unification.chainmasters.ninja/",
          "provider": "Chainmasters"
        }
      ],
      "grpc": [
        {
          "address": "grpc.unification.io:443",
          "provider": "Unification"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://explorer.unification.io/",
        "tx_page": "https://explorer.unification.io/transactions/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://explorer.unification.chainmasters.ninja/unification",
        "tx_page": "https://explorer.unification.chainmasters.ninja/unification/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/unification",
        "tx_page": "https://atomscan.com/unification/transactions/${txHash}",
        "account_page": "https://atomscan.com/unification/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "umee",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.umee.cc/",
    "pretty_name": "Umee",
    "chain_id": "umee-1",
    "bech32_prefix": "umee",
    "daemon_name": "umeed",
    "node_home": "$HOME/.umee",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uumee",
          "fixed_min_gas_price": 0.1,
          "low_gas_price": 0.1,
          "average_gas_price": 0.12,
          "high_gas_price": 0.2
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uumee"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/umee-network/umee",
      "recommended_version": "v4.3.0",
      "compatible_versions": [
        "v4.3.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/umee-network/umee/releases/download/v4.2.0/umeed-v4.2.0-linux-amd64"
      },
      "cosmos_sdk_version": "0.46",
      "consensus": {
        "type": "cometbft",
        "version": "0.34"
      },
      "cosmwasm_version": "0.30",
      "cosmwasm_enabled": true,
      "ibc_go_version": "6.1.0",
      "genesis": {
        "name": "v1.0.1",
        "genesis_url": "https://raw.githubusercontent.com/umee-network/mainnet/main/genesis.json"
      },
      "versions": [
        {
          "name": "v1.0.1",
          "tag": "v1.0.1",
          "height": 0,
          "next_version_name": "v1.1.0",
          "recommended_version": "v1.0.1",
          "compatible_versions": [
            "v1.0.1"
          ],
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "ibc_go_version": "2.0.3",
          "binaries": {
            "linux/amd64": "https://github.com/umee-network/umee/releases/download/v1.0.1/umeed-v1.0.1-linux-amd64.tar.gz",
            "linux/arm64": "https://github.com/umee-network/umee/releases/download/v1.0.1/umeed-v1.0.1-linux-arm64.tar.gz",
            "darwin/amd64": "https://github.com/umee-network/umee/releases/download/v1.0.1/umeed-v1.0.1-darwin-amd64.tar.gz",
            "darwin/arm64": "https://github.com/umee-network/umee/releases/download/v1.0.1/umeed-v1.0.1-darwin-arm64.tar.gz"
          }
        },
        {
          "name": "v1.1.0",
          "tag": "v1.1.0",
          "height": 3023282,
          "next_version_name": "v1.1-v3.0",
          "recommended_version": "v1.1.0",
          "compatible_versions": [
            "v1.1.0"
          ],
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "ibc_go_version": "2.0.3",
          "binaries": {
            "linux/amd64": "https://github.com/umee-network/umee/releases/download/v1.1.0/umeed-v1.1.0-linux-amd64.tar.gz",
            "linux/arm64": "https://github.com/umee-network/umee/releases/download/v1.1.0/umeed-v1.1.0-linux-arm64.tar.gz",
            "darwin/amd64": "https://github.com/umee-network/umee/releases/download/v1.1.0/umeed-v1.1.0-darwin-amd64.tar.gz",
            "darwin/arm64": "https://github.com/umee-network/umee/releases/download/v1.1.0/umeed-v1.1.0-darwin-arm64.tar.gz"
          }
        },
        {
          "name": "v1.1-v3.0",
          "tag": "v3.0.0",
          "height": 3215778,
          "next_version_name": "v3.1.0",
          "recommended_version": "v3.0.0",
          "compatible_versions": [
            "v3.0.0"
          ],
          "cosmos_sdk_version": "0.46",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "ibc_go_version": "5.0.0",
          "binaries": {
            "linux/amd64": "https://github.com/umee-network/umee/releases/download/v3.0.0/umeed-v3.0.0-linux-amd64.tar.gz",
            "linux/arm64": "https://github.com/umee-network/umee/releases/download/v3.0.0/umeed-v3.0.0-linux-arm64.tar.gz",
            "darwin/amd64": "https://github.com/umee-network/umee/releases/download/v3.0.0/umeed-v3.0.0-darwin-amd64.tar.gz",
            "darwin/arm64": "https://github.com/umee-network/umee/releases/download/v3.0.0/umeed-v3.0.0-darwin-arm64.tar.gz"
          }
        },
        {
          "name": "v3.1.0",
          "tag": "v3.1.0",
          "height": 3623090,
          "next_version_name": "v3.1-v3.3",
          "recommended_version": "v3.1.0",
          "compatible_versions": [
            "v3.1.0"
          ],
          "cosmos_sdk_version": "0.46",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "ibc_go_version": "5.0.0",
          "binaries": {
            "linux/amd64": "https://github.com/umee-network/umee/releases/download/v3.1.0/umeed-v3.1.0-linux-amd64",
            "linux/arm64": "https://github.com/umee-network/umee/releases/download/v3.1.0/umeed-v3.1.0-linux-arm64",
            "darwin/amd64": "https://github.com/umee-network/umee/releases/download/v3.1.0/umeed-v3.1.0-darwin-amd64",
            "darwin/arm64": "https://github.com/umee-network/umee/releases/download/v3.1.0/umeed-v3.1.0-darwin-arm64"
          }
        },
        {
          "name": "v3.1-v3.3",
          "tag": "v3.3.0",
          "height": 4513362,
          "next_version_name": "v4.0",
          "recommended_version": "v3.3.0",
          "compatible_versions": [
            "v3.3.0"
          ],
          "cosmos_sdk_version": "0.46",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.29",
          "cosmwasm_enabled": true,
          "ibc_go_version": "5.2.0",
          "binaries": {
            "linux/amd64": "https://github.com/umee-network/umee/releases/download/v3.3.0/umeed-v3.3.0-linux-amd64"
          }
        },
        {
          "name": "v4.0",
          "tag": "v4.0.0",
          "height": 4949483,
          "next_version_name": "v4.0.1",
          "recommended_version": "v4.0.0",
          "compatible_versions": [
            "v4.0.0"
          ],
          "cosmos_sdk_version": "0.46",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.29",
          "cosmwasm_enabled": true,
          "ibc_go_version": "5.2.0",
          "binaries": {
            "linux/amd64": "https://github.com/umee-network/umee/releases/download/v4.0.0/umeed-v4.0.0-linux-amd64"
          }
        },
        {
          "name": "v4.0.1",
          "tag": "v4.0.1",
          "height": 5243631,
          "next_version_name": "v4.1.0",
          "recommended_version": "v4.0.1",
          "compatible_versions": [
            "v4.0.1"
          ],
          "cosmos_sdk_version": "0.46",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.29",
          "cosmwasm_enabled": true,
          "ibc_go_version": "5.2.0",
          "binaries": {
            "linux/amd64": "https://github.com/umee-network/umee/releases/download/v4.0.1/umeed-v4.0.1-linux-amd64"
          }
        },
        {
          "name": "v4.1.0",
          "tag": "v4.1.0",
          "height": 5433933,
          "next_version_name": "v4.2",
          "recommended_version": "v4.1.0",
          "compatible_versions": [
            "v4.1.0"
          ],
          "cosmos_sdk_version": "0.46",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.29",
          "cosmwasm_enabled": true,
          "ibc_go_version": "5.2.0",
          "binaries": {
            "linux/amd64": "https://github.com/umee-network/umee/releases/download/v4.1.0/umeed-v4.1.0-linux-amd64"
          }
        },
        {
          "name": "v4.2",
          "tag": "v4.2.0",
          "height": 5741480,
          "next_version_name": "v4.3",
          "recommended_version": "v4.2.0",
          "compatible_versions": [
            "v4.2.0"
          ],
          "cosmos_sdk_version": "0.46",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.29",
          "cosmwasm_enabled": true,
          "ibc_go_version": "5.2.0",
          "binaries": {
            "linux/amd64": "https://github.com/umee-network/umee/releases/download/v4.2.0/umeed-v4.2.0-linux-amd64"
          }
        },
        {
          "name": "v4.3",
          "tag": "v4.3.0",
          "height": 6049552,
          "recommended_version": "v4.3.0",
          "compatible_versions": [
            "v4.3.0"
          ],
          "cosmos_sdk_version": "0.46",
          "consensus": {
            "type": "cometbft",
            "version": "0.34"
          },
          "cosmwasm_version": "0.30",
          "cosmwasm_enabled": true,
          "ibc_go_version": "6.1.0",
          "binaries": {
            "linux/amd64": "https://github.com/umee-network/umee/releases/download/v4.3.0/umeed-v4.3.0-linux-amd64"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:13656",
          "provider": "Polkachu"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "umee-mainnet-seed.autostake.com:26756",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "86bd5cb6e762f673f1706e5889e039d5406b4b90",
          "address": "umee.seed.node75.org:10656",
          "provider": "Pro-Nodes75"
        },
        {
          "id": "88373a3bf385c20ef0b4040f924cd99848012535",
          "address": "seed-umee-01.stakeflow.io:26696",
          "provider": "Genesis Lab"
        }
      ],
      "persistent_peers": [
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:13656",
          "provider": "Polkachu"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "umee-mainnet-peer.autostake.com:26756",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "88373a3bf385c20ef0b4040f924cd99848012535",
          "address": "peer-umee-01.stakeflow.io:26696",
          "provider": "Genesis Lab"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://umee-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-umee-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://umee-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "http://rpc-umee-0.node75.org:26657",
          "provider": "Pro-Nodes75"
        },
        {
          "address": "https://umee-rpc.quantnode.tech",
          "provider": "QuantNode"
        },
        {
          "address": "https://umee-rpc.tienthuattoan.ventures",
          "provider": "TienThuatToan"
        },
        {
          "address": "https://rpc-umee-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "rest": [
        {
          "address": "https://api.mainnet.network.umee.cc",
          "provider": "umee Foundation"
        },
        {
          "address": "https://api-umee-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://umee-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://umee-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://umee-lcd.quantnode.tech",
          "provider": "QuantNode"
        },
        {
          "address": "https://umee-api.tienthuattoan.ventures",
          "provider": "TienThuatToan"
        },
        {
          "address": "https://api-umee-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "grpc": [
        {
          "address": "grpc-umee-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "umee-grpc.polkachu.com:13690",
          "provider": "Polkachu"
        },
        {
          "address": "umee-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "umee-grpc.quantnode.tech:9090",
          "provider": "QuantNode gRPC"
        },
        {
          "address": "umee-grpc.quantnode.tech:9091",
          "provider": "QuantNode gRPCweb"
        },
        {
          "address": "umee-grpc.tienthuattoan.ventures:9090",
          "provider": "TienThuatToan"
        },
        {
          "address": "grpc-umee-01.stakeflow.io:9990",
          "provider": "Genesis Lab"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/umee/",
        "tx_page": "https://www.mintscan.io/umee/txs/${txHash}",
        "account_page": "https://www.mintscan.io/umee/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/umee",
        "tx_page": "https://ping.pub/umee/tx/${txHash}"
      },
      {
        "kind": "explorers.guru",
        "url": "https://umee.explorers.guru",
        "tx_page": "https://umee.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/umee",
        "tx_page": "https://atomscan.com/umee/transactions/${txHash}",
        "account_page": "https://atomscan.com/umee/accounts/${accountAddress}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/umee",
        "account_page": "https://stakeflow.io/umee/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "thorchain",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://thorchain.org/",
    "pretty_name": "THORChain",
    "chain_id": "thorchain-mainnet-v1",
    "bech32_prefix": "thor",
    "daemon_name": "thord",
    "node_home": "$HOME/.thornode",
    "slip44": 931,
    "codebase": {
      "git_repo": "https://gitlab.com/thorchain/thornode",
      "recommended_version": "chaosnet-multichain",
      "compatible_versions": [
        "chaosnet-multichain"
      ],
      "genesis": {
        "genesis_url": "https://rpc.thorchain.info/genesis"
      },
      "versions": [
        {
          "name": "chaosnet-multichain",
          "recommended_version": "chaosnet-multichain",
          "compatible_versions": [
            "chaosnet-multichain"
          ]
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "5e89caf0ca79e0fb3371d5892efd96d66042d0d6",
          "address": "157.90.34.75:27146"
        },
        {
          "id": "6c7d780bb7384142f6943543ed4c3ba537f4a411",
          "address": "138.197.59.244:27146"
        },
        {
          "id": "2d25606076036716a31611185d39880fe8237e97",
          "address": "3.230.67.253:27146"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://btc.thorchain.info",
          "provider": "btc"
        },
        {
          "address": "https://bch.thorchain.info",
          "provider": "bch"
        },
        {
          "address": "https://ltc.thorchain.info",
          "provider": "ltc"
        },
        {
          "address": "https://bnb.thorchain.info",
          "provider": "bnb"
        },
        {
          "address": "https://eth.thorchain.info",
          "provider": "eth"
        }
      ],
      "rest": []
    },
    "explorers": [
      {
        "kind": "THORChain explorer",
        "url": "https://thorchain.net",
        "tx_page": "https://thorchain.net/#/txs/${txHash}"
      },
      {
        "kind": "viewblock",
        "url": "https://viewblock.io/thorchain",
        "tx_page": "https://viewblock.io/thorchain/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "tgrade",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://tgrade.finance/",
    "pretty_name": "Tgrade",
    "chain_id": "tgrade-mainnet-1",
    "bech32_prefix": "tgrade",
    "daemon_name": "tgrade",
    "node_home": "$HOME/.tgrade",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "utgd",
          "fixed_min_gas_price": 0.05,
          "low_gas_price": 0.05,
          "average_gas_price": 0.075,
          "high_gas_price": 0.1
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "utgd"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/confio/tgrade",
      "recommended_version": "v2.0.4",
      "compatible_versions": [
        "v2.0.4"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/confio/tgrade-networks/main/mainnet-1/config/genesis.json"
      },
      "cosmwasm_enabled": true,
      "versions": [
        {
          "name": "v2.0.4",
          "recommended_version": "v2.0.4",
          "compatible_versions": [
            "v2.0.4"
          ],
          "cosmwasm_enabled": true
        }
      ]
    },
    "peers": {
      "seeds": [],
      "persistent_peers": [
        {
          "id": "0a63421f67d02e7fb823ea6d6ceb8acf758df24d",
          "address": "142.132.226.137:26656",
          "provider": "Confio"
        },
        {
          "id": "4a319eead699418e974e8eed47c2de6332c3f825",
          "address": "167.235.255.9:26656",
          "provider": "Confio"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.mainnet-1.tgrade.confio.run",
          "provider": "Confio"
        },
        {
          "address": "https://rpc.tgrade.posthuman.digital",
          "provider": "POSTHUMAN ꝏ DVS"
        }
      ],
      "rest": [
        {
          "address": "https://api.mainnet-1.tgrade.confio.run",
          "provider": "Confio"
        },
        {
          "address": "https://lcd.tgrade.posthuman.digital",
          "provider": "POSTHUMAN ꝏ DVS"
        }
      ],
      "grpc": []
    },
    "explorers": [
      {
        "kind": "aneka",
        "url": "https://tgrade.aneka.io",
        "tx_page": "https://tgrade.aneka.io/txs/${txHash}",
        "account_page": "https://tgrade.aneka.io/accounts/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/tgrade",
        "tx_page": "https://www.mintscan.io/tgrade/txs/${txHash}",
        "account_page": "https://www.mintscan.io/tgrade/account/${accountAddress}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-logo-gradient_h.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg"
    }
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "ulastestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "ULAS",
    "chain_id": "ulas",
    "bech32_prefix": "ulas",
    "daemon_name": "ulasd",
    "node_home": "$HOME/.ulas",
    "codebase": {
      "git_repo": "https://github.com/ulasnetwork/ulas",
      "recommended_version": "v0.0.1",
      "compatible_versions": [
        "v0.0.1"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/ulasnetwork/chain-config/main/ulas/genesis.json"
      },
      "versions": [
        {
          "name": "v0.0.1",
          "recommended_version": "v0.0.1",
          "compatible_versions": [
            "v0.0.1"
          ]
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "http://65.49.204.199:26657",
          "provider": "UlasNetwork"
        }
      ],
      "rest": [
        {
          "address": "http://65.49.204.199:1317",
          "provider": "UlasNetwork"
        }
      ],
      "grpc": [
        {
          "address": "http://65.49.204.199:9090",
          "provider": "UlasNetwork"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ulas-scan",
        "url": "https://testnet-explorer.ulas.network",
        "tx_page": "https://testnet-explorer.ulas.network/ulas/tx/${txHash}"
      }
    ],
    "slip44": 118
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "terra2testnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://www.terra.money/",
    "pretty_name": "Terra 2.0",
    "chain_id": "pisco-1",
    "daemon_name": "terrad",
    "node_home": "$HOME/.terra",
    "bech32_prefix": "terra",
    "slip44": 330,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uluna",
          "fixed_min_gas_price": 0.0125,
          "low_gas_price": 0.0125,
          "average_gas_price": 0.015,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uluna"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/terra-money/core/",
      "recommended_version": "v2.3.1",
      "compatible_versions": [
        "v2.3.1",
        "v2.3.0"
      ],
      "cosmos_sdk_version": "0.46.9",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.30.0",
      "ibc_go_version": "6.1.0",
      "binaries": {
        "linux/amd64": "https://github.com/terra-money/core/releases/download/v2.3.1/terra_2.3.1_Linux_x86_64.tar.gz?checksum=sha256:fe56cdb087a848106fcfbbd5e1a76ec021f192662952a203375f98a30fb058e0",
        "linux/arm64": "https://github.com/terra-money/core/releases/download/v2.3.1/terra_2.3.1_Linux_arm64.tar.gz?checksum=sha256:c4caed39a714e363c65b7d0bfe62c7ade9463371591b31e823aafd80617b3b6b"
      },
      "genesis": {
        "name": "v2.0",
        "genesis_url": "https://tfl-pisco-1.s3.amazonaws.com/genesis.json"
      },
      "versions": [
        {
          "name": "v2.0",
          "tag": "v2.0.0-rc.1",
          "height": 0,
          "recommended_version": "v2.0.0-rc.1",
          "next_version_name": "v2.1",
          "binaries": {
            "linux/amd64": "https://github.com/terra-money/core/releases/download/v2.0.0-rc.0/terra_2.0.0-rc.0_Linux_x86_64.tar.gz?checksum=sha256:2427cf3aa7934f591eac0708156d424f55d3dbb6062f6f111b770bee8f414c91",
            "darwin/amd64": "https://github.com/terra-money/core/releases/download/v2.0.0-rc.0/terra_2.0.0-rc.0_Darwin_x86_64.tar.gz?checksum=sha256:72869d7279362e8d63e2afb02c17e1eef0ad0cb6285a30dfa47c571fa5be1c30"
          }
        },
        {
          "name": "v2.1",
          "tag": "v2.1.0-beta.1",
          "height": 838500,
          "recommended_version": "v2.1.0-beta.1",
          "next_version_name": "v2.2",
          "binaries": {
            "linux/amd64": "https://github.com/terra-money/core/releases/download/v2.1.0-beta.1/terra_2.1.0-beta.1_Linux_x86_64.tar.gz?checksum=sha256:c6e6ace1d5b5f3f365f6d71489dbeda645f196ea10f8f03103fb9648131bfec1"
          }
        },
        {
          "name": "v2.2",
          "tag": "v2.2.1",
          "height": 2777777,
          "recommended_version": "v2.2.1",
          "compatible_versions": [
            "v2.2.0",
            "v2.2.1"
          ],
          "next_version_name": "v2.3",
          "binaries": {
            "linux/amd64": "https://github.com/terra-money/core/releases/download/v2.2.1/terra_2.2.1_Linux_x86_64.tar.gz?checksum=sha256:8a9353ae3c33a750ce2a9d236f00c12c5449c41fad96e9885a5c0b8678fcf8bc"
          }
        },
        {
          "name": "v2.3",
          "tag": "v2.3.1",
          "recommended_version": "v2.3.1",
          "cosmos_sdk_version": "0.46.9",
          "cosmwasm_enabled": true,
          "cosmwasm_version": "0.30.0",
          "ibc_go_version": "6.1.0",
          "height": 4712048,
          "compatible_versions": [
            "v2.3.0",
            "v2.3.1"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/terra-money/core/releases/download/v2.3.1/terra_2.3.1_Linux_x86_64.tar.gz?checksum=sha256:fe56cdb087a848106fcfbbd5e1a76ec021f192662952a203375f98a30fb058e0",
            "linux/arm64": "https://github.com/terra-money/core/releases/download/v2.3.1/terra_2.3.1_Linux_arm64.tar.gz?checksum=sha256:c4caed39a714e363c65b7d0bfe62c7ade9463371591b31e823aafd80617b3b6b"
          }
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "3bfc40d3d7f14b59c5943bf2d45ce103d42174c5",
          "address": "seed-terra-testnet.moonshot.army:26655",
          "provider": "Moonshot Army"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "testnet-seeds.polkachu.com:11756",
          "provider": "Polkachu"
        }
      ],
      "persistent_peers": [
        {
          "id": "0d194f5236a420147b05d9556ac0cf928c36e647",
          "address": "65.109.23.114:11756",
          "provider": "Polkachu"
        },
        {
          "id": "5cc5e6506818a113387d92e0b60a7206845b4d7e",
          "address": "pisco-1-sentinel.skip.money:26656",
          "provider": "Skip.Money"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://pisco-rpc.terra.dev:443",
          "provider": "Terraform Labs"
        },
        {
          "address": "https://terra-testnet-rpc.polkachu.com:443",
          "provider": "Polkachu"
        }
      ],
      "rest": [
        {
          "address": "https://pisco-lcd.terra.dev:443",
          "provider": "Terraform Labs"
        },
        {
          "address": "https://terra-testnet-api.polkachu.com:443",
          "provider": "Polkachu"
        }
      ],
      "grpc": [
        {
          "address": "terra-testnet-grpc.polkachu.com:11790",
          "provider": "Polkachu"
        }
      ]
    },
    "explorers": [
      {
        "kind": "finder",
        "url": "http://finder.terra.money/testnet/",
        "tx_page": "https://finder.terra.money/testnet/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "terpnettestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Terp-Network",
    "chain_id": "athena-4",
    "bech32_prefix": "terp",
    "daemon_name": "terp",
    "node_home": "$HOME/.terp",
    "codebase": {
      "git_repo": "github.com/terpnetwork/terp-core.git",
      "recommended_version": "v0.4.0",
      "consensus": {
        "type": "tendermint",
        "version": "0.34.24"
      },
      "compatible_versions": [
        "v0.4.0",
        "v0.4.0-1-g8ef7c32"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/terpnetwork/test-net/master/athena-4/genesis.json"
      },
      "binaries": {
        "linux/amd64": "https://github.com/terpnetwork/terp-core/archive/refs/tags/v0.4.0.tar.gz"
      },
      "versions": [
        {
          "name": "v0.4.0",
          "recommended_version": "v0.4.0",
          "compatible_versions": [
            "v0.4.0",
            "v0.4.0-1-g8ef7c32"
          ],
          "consensus": {
            "type": "tendermint",
            "version": "0.34.24"
          },
          "binaries": {
            "linux/amd64": "https://github.com/terpnetwork/terp-core/archive/refs/tags/v0.4.0.tar.gz"
          }
        }
      ]
    },
    "peers": {
      "seeds": [],
      "persistent_peers": [
        {
          "id": "15f5bc75be9746fd1f712ca046502cae8a0f6ce7",
          "address": "terp-testnet.nodejumper.io:30656"
        },
        {
          "id": "51d48be3809bb8907c1ef5f747e53cdd0c9ded1b",
          "address": "terp-testnet-peer.itrocket.net:443"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-terp.zenchainlabs.io/"
        },
        {
          "address": "https://terp-testnet.nodejumper.io:443/"
        },
        {
          "address": "https://terp-testnet.rpc.kjnodes.com:443/"
        },
        {
          "address": "https://rpc-t.terp.nodestake.top:443/"
        },
        {
          "address": "https://rpc.terp.nodexcapital.com:443/"
        },
        {
          "address": "https://terp.rpc.yeksin.net:443/"
        },
        {
          "address": "https://terp-test-rpc.theamsolutions.info:443/"
        }
      ],
      "rest": [
        {
          "address": "https://api-terp.zenchainlabs.io/",
          "provider": "Zenchainlabs"
        },
        {
          "address": "https://api-t.terp.nodestake.top/",
          "provider": "NodeJumper.io"
        },
        {
          "address": "https://api.terp-test.theamsolutions.info:443/"
        }
      ],
      "grpc": [
        {
          "address": "grpc-t.terp.nodestake.top/",
          "provider": "nodestake"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Ping Pub",
        "url": "https://explorer.kjnodes.com/terp-test",
        "tx_page": "https://explorer.kjnodes.com/terp-test/tx/${txHash}"
      },
      {
        "kind": "Ping Pub",
        "url": "https://explorer.nodestake.top/terp-testnet",
        "tx_page": "https://explorer.nodestake.top/terp-testnet/tx/${txHash}"
      }
    ],
    "slip44": 118
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "stridetestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Stride Testnet",
    "chain_id": "stride-testnet-1",
    "bech32_prefix": "stride",
    "daemon_name": "strided",
    "node_home": "$HOME/.stride",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ustrd",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ustrd"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/Stride-Labs/stride",
      "recommended_version": "v8.0.0-testnet",
      "compatible_versions": [
        "v8.0.0-testnet"
      ],
      "cosmos_sdk_version": "0.46",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "ibc_go_version": "5.1.0",
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/Stride-Labs/mainnet/main/testnet/genesis.json"
      },
      "versions": [
        {
          "name": "v8.0.0-testnet",
          "recommended_version": "v8.0.0-testnet",
          "compatible_versions": [
            "v8.0.0-testnet"
          ],
          "cosmos_sdk_version": "0.46",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "ibc_go_version": "5.1.0"
        }
      ]
    },
    "peers": {
      "seeds": [],
      "persistent_peers": []
    },
    "apis": {
      "rpc": [
        {
          "address": "https://stride.testnet-1.stridenet.co",
          "provider": "Stride"
        }
      ],
      "rest": [
        {
          "address": "https://stride.testnet-1.stridenet.co/api",
          "provider": "Stride"
        }
      ],
      "grpc": []
    },
    "explorers": [
      {
        "kind": "PingPub",
        "url": "https://testnet.ping.pub/stride",
        "tx_page": "https://testnet.ping.pub/stride/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "statesettestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Stateset Testnet",
    "chain_id": "stateset-1-testnet",
    "bech32_prefix": "stateset",
    "daemon_name": "statesetd",
    "node_home": "$HOME/.statesetd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ustate",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/stateset/core",
      "recommended_version": "v1.0.0",
      "compatible_versions": [
        "v1.0.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/stateset/core/releases/download/v1.0.0/statesetd-1.0.0-linux-amd64",
        "linux/arm64": "https://github.com/stateset/core/releases/download/v1.0.0/statesetd-1.0.0-linux-arm64",
        "darwin/amd64": "https://github.com/stateset/core/releases/download/v1.0.0/statesetd-1.0.0-darwin-amd64",
        "windows/amd64": "https://github.com/stateset/core/releases/download/v1.0.0/statesetd-1.0.0-windows-amd64.exe"
      },
      "genesis": {
        "genesis_url": "https://rpc.stateset.zone/genesis"
      },
      "versions": [
        {
          "name": "v1.0.0",
          "recommended_version": "v1.0.0",
          "compatible_versions": [
            "v1.0.0"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/stateset/core/releases/download/v1.0.0/statesetd-1.0.0-linux-amd64",
            "linux/arm64": "https://github.com/stateset/core/releases/download/v1.0.0/statesetd-1.0.0-linux-arm64",
            "darwin/amd64": "https://github.com/stateset/core/releases/download/v1.0.0/statesetd-1.0.0-darwin-amd64",
            "windows/amd64": "https://github.com/stateset/core/releases/download/v1.0.0/statesetd-1.0.0-windows-amd64.exe"
          }
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "DBC49AA829D16329C1772F7EF76730939E606A41",
          "address": "rpc.stateset.zone:26656",
          "provider": "stateset"
        }
      ],
      "persistent_peers": []
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.stateset.zone/",
          "provider": "stateset"
        }
      ],
      "rest": [
        {
          "address": "https://rest-api.stateset.zone",
          "provider": "stateset"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://explore.stateset.zone",
        "tx_page": "https://explore.stateset.zone/transactions/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "stargazetestnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://stargaze.zone/",
    "pretty_name": "Stargaze Testnet",
    "chain_id": "elgafar-1",
    "bech32_prefix": "stars",
    "daemon_name": "starsd",
    "node_home": "$HOME/.starsd",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ustars",
          "low_gas_price": 0.03,
          "average_gas_price": 0.04,
          "high_gas_price": 0.05
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/public-awesome/stargaze",
      "recommended_version": "v7.0.0",
      "compatible_versions": [
        "v7.0.0"
      ],
      "cosmos_sdk_version": "0.45",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "cosmwasm_version": "0.28",
      "cosmwasm_enabled": true,
      "genesis": {
        "genesis_url": "https://github.com/public-awesome/testnets/blob/main/elgafar-1/genesis/genesis.tar.gz?raw=true"
      },
      "versions": [
        {
          "name": "v7.0.0",
          "recommended_version": "v7.0.0",
          "compatible_versions": [
            "v7.0.0"
          ],
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.28",
          "cosmwasm_enabled": true
        }
      ]
    },
    "peers": {
      "seeds": [],
      "persistent_peers": [
        {
          "id": "e31886cba90a06e165b0df18cc5c8ae015ecd23e",
          "address": "209.159.152.82:26656",
          "provider": "stargaze"
        },
        {
          "id": "de00d2d65594b672469ecd65826a94ec1be80b9f",
          "address": "208.73.205.226:26656",
          "provider": "stargaze"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.elgafar-1.stargaze-apis.com",
          "provider": "Stargaze Foundation"
        }
      ],
      "rest": [
        {
          "address": "https://rest.elgafar-1.stargaze-apis.com",
          "provider": "Stargaze Foundation"
        }
      ],
      "grpc": [
        {
          "address": "http://grpc-1.elgafar-1.stargaze-apis.com:26660",
          "provider": "Stargaze Foundation"
        },
        {
          "address": "http://grpc-2.elgafar-1.stargaze-apis.com:26660",
          "provider": "Stargaze Foundation"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://testnet-explorer.publicawesome.dev/stargaze",
        "tx_page": "https://testnet-explorer.publicawesome.dev/stargaze/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "sourcetestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Source Testnet",
    "chain_id": "source-testnet",
    "bech32_prefix": "source",
    "daemon_name": "sourced",
    "node_home": "$HOME/.source",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "usource",
          "low_gas_price": 0.03,
          "average_gas_price": 0.04,
          "high_gas_price": 0.05
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "usource"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/Source-Protocol-Cosmos/source",
      "recommended_version": "v1.0.0",
      "compatible_versions": [
        "v1.0.0"
      ],
      "cosmos_sdk_version": "0.45",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "cosmwasm_version": "0.25",
      "cosmwasm_enabled": true,
      "ibc_go_version": "2.2.0",
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/Source-Protocol-Cosmos/testnets/master/sourcechain-testnet/genesis.json"
      },
      "versions": [
        {
          "name": "v1.0.0",
          "recommended_version": "v1.0.0",
          "compatible_versions": [
            "v1.0.0"
          ],
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.25",
          "cosmwasm_enabled": true,
          "ibc_go_version": "2.2.0"
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "sourcechain-mainnet-seed.autostake.net:26976",
          "provider": "autostake"
        }
      ],
      "persistent_peers": [
        {
          "id": "6ca675f9d949d5c9afc8849adf7b39bc7fccf74f",
          "address": "164.92.98.17:26656",
          "provider": "Source"
        },
        {
          "id": "b02e2bd359623aeee2d4fad94d37af8b064508f6",
          "address": "167.235.224.141:26656",
          "provider": ""
        },
        {
          "id": "bdf9b6ad38b803358e7fd99f35b14795ebcd8144",
          "address": "190.2.155.67:29656",
          "provider": ""
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-t.source.nodestake.top",
          "provider": "Nodestake"
        },
        {
          "address": "https://rpc-source.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "https://source-testnet.rpc.kjnodes.com",
          "provider": "kjnodes"
        }
      ],
      "rest": [
        {
          "address": "https://api-t.source.nodestake.top",
          "provider": "Nodestake"
        },
        {
          "address": "https://api-source.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "https://source-testnet.api.kjnodes.com",
          "provider": "kjnodes"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc-t.source.nodestake.top",
          "provider": "nodestake"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Nodestake",
        "url": "https://explorer.nodestake.top/source-testnet",
        "tx_page": "https://explorer.nodestake.top/source-testnet/tx/${txHash}"
      },
      {
        "kind": "kjnodes",
        "url": "https://explorer.kjnodes.com/source-testnet",
        "tx_page": "https://explorer.kjnodes.com/source-testnet/txs/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "sixtestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "SIX Fivenet",
    "chain_id": "fivenet",
    "bech32_prefix": "6x",
    "daemon_name": "sixd",
    "node_home": "$HOME/.six",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "usix",
          "fixed_min_gas_price": 1.25,
          "low_gas_price": 1.25,
          "average_gas_price": 1.5,
          "high_gas_price": 1.75
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "usix"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/thesixnetwork/six-protocol",
      "recommended_version": "v3.1.1-fn",
      "compatible_versions": [
        "v3.1.1-fn"
      ],
      "cosmos_sdk_version": "0.45",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "genesis": {
        "genesis_url": "https://github.com/thesixnetwork/chain-info/genesis.json"
      },
      "versions": [
        {
          "name": "v3.1.1-fn",
          "recommended_version": "v3.1.1-fn",
          "compatible_versions": [
            "v3.1.1-fn"
          ],
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          }
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "323776367baa815d7bb1212186f06a25cc26d10a",
          "address": "43.225.142.224:26656",
          "provider": ""
        }
      ],
      "persistent_peers": [
        {
          "id": "85c7e81f3880c3029dec49fdb74b1ae3135922c9",
          "address": "34.142.247.36:26656",
          "provider": ""
        },
        {
          "id": "e4cee9bc76c66fa0ddf640c614ebc1f3e7f261cd",
          "address": "34.124.174.160:26656",
          "provider": ""
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc1.fivenet.sixprotocol.net:443",
          "provider": ""
        }
      ],
      "rest": [
        {
          "address": "https://api1.fivenet.sixprotocol.net:443",
          "provider": ""
        }
      ]
    },
    "explorers": [
      {
        "kind": "sixscan",
        "url": "https://sixscan.io/fivenet",
        "tx_page": "https://sixscan.io/fivenet/tx/${txHash}"
      }
    ],
    "keywords": [
      "sixprotocol",
      "testnet"
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "seitestnet2",
    "chain_id": "atlantic-2",
    "pretty_name": "Sei Atlantic 2",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "sei",
    "daemon_name": "seid",
    "node_home": "$HOME/.sei",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "usei",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/sei-protocol/sei-chain",
      "recommended_version": "2.0.40beta",
      "compatible_versions": [
        "2.0.34beta",
        "2.0.37beta",
        "2.0.39beta",
        "2.0.40beta"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/sei-protocol/testnet/main/atlantic-2/genesis.json"
      },
      "versions": [
        {
          "name": "2.0.40beta",
          "recommended_version": "2.0.40beta",
          "compatible_versions": [
            "2.0.34beta",
            "2.0.37beta",
            "2.0.39beta",
            "2.0.40beta"
          ]
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "f97a75fb69d3a5fe893dca7c8d238ccc0bd66a8f",
          "address": "sei-testnet-2-seed.p2p.brocha.in:30587",
          "provider": "Brochain"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://sei-testnet-2-rpc.brocha.in",
          "provider": "Brochain"
        }
      ],
      "rest": [
        {
          "address": "https://sei-testnet-2-rest.brocha.in",
          "provider": "Brochain"
        }
      ]
    },
    "explorers": [
      {
        "kind": "explorers.guru",
        "url": "https://sei.explorers.guru",
        "tx_page": "https://sei.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "Brochain",
        "url": "https://testnet-explorer.brocha.in/sei%20atlantic%202",
        "tx_page": "https://testnet-explorer.brocha.in/sei%20atlantic%202/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "seitestnet",
    "chain_id": "atlantic-1",
    "pretty_name": "Sei Atlantic",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "sei",
    "daemon_name": "seid",
    "node_home": "$HOME/.sei",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "usei",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/sei-protocol/sei-chain",
      "recommended_version": "1.0.6beta",
      "compatible_versions": [
        "1.0.6beta"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/sei-protocol/testnet/main/sei-incentivized-testnet/genesis.json"
      },
      "versions": [
        {
          "name": "1.0.6beta",
          "recommended_version": "1.0.6beta",
          "compatible_versions": [
            "1.0.6beta"
          ]
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "f97a75fb69d3a5fe893dca7c8d238ccc0bd66a8f",
          "address": "sei-testnet-seed.p2p.brocha.in:30514",
          "provider": "Brochain"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-sei-test.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://sei-testnet-rpc.brocha.in",
          "provider": "Brochain"
        }
      ],
      "rest": [
        {
          "address": "https://rest-sei-test.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://sei-testnet-rest.brocha.in",
          "provider": "Brochain"
        }
      ]
    },
    "explorers": [
      {
        "kind": "explorers.guru",
        "url": "https://sei.explorers.guru",
        "tx_page": "https://sei.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "Brochain",
        "url": "https://testnet-explorer.brocha.in/sei",
        "tx_page": "https://testnet-explorer.brocha.in/sei/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "seidevnet3",
    "chain_id": "sei-devnet-3",
    "pretty_name": "Sei Devnet 3",
    "status": "live",
    "network_type": "devnet",
    "bech32_prefix": "sei",
    "daemon_name": "seid",
    "node_home": "$HOME/.sei",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "usei",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/sei-protocol/sei-chain",
      "recommended_version": "2.0.40beta",
      "compatible_versions": [
        "2.0.27beta",
        "2.0.29eta",
        "2.0.31beta",
        "2.0.32beta",
        "2.0.36beta",
        "2.0.37beta",
        "2.0.39beta",
        "2.0.40beta"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/sei-protocol/testnet/main/sei-devnet-3/genesis.json"
      },
      "versions": [
        {
          "name": "2.0.40beta",
          "recommended_version": "2.0.40beta",
          "compatible_versions": [
            "2.0.27beta",
            "2.0.29eta",
            "2.0.31beta",
            "2.0.32beta",
            "2.0.36beta",
            "2.0.37beta",
            "2.0.39beta",
            "2.0.40beta"
          ]
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "f97a75fb69d3a5fe893dca7c8d238ccc0bd66a8f",
          "address": "sei-devnet-seed.p2p.brocha.in:30515",
          "provider": "Brochain"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.sei-devnet-3.seinetwork.io",
          "provider": "Sei Foundation"
        },
        {
          "address": "https://sei-testnet-2-rpc.brocha.in",
          "provider": "Brochain"
        }
      ],
      "rest": [
        {
          "address": "https://rest.sei-devnet-3.seinetwork.io",
          "provider": "Sei Foundation"
        },
        {
          "address": "https://sei-testnet-2-rest.brocha.in",
          "provider": "Brochain"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.sei-devnet-3.seinetwork.io",
          "provider": "Sei Foundation"
        }
      ]
    },
    "explorers": [
      {
        "kind": "explorers.guru",
        "url": "https://devnet.sei.explorers.guru",
        "tx_page": "https://devnet.sei.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "Brochain",
        "url": "https://testnet-explorer.brocha.in/sei%20atlantic%202",
        "tx_page": "https://testnet-explorer.brocha.in/sei%20atlantic%202/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "secretnetworktestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Secret Network",
    "chain_id": "pulsar-2",
    "bech32_prefix": "secret",
    "daemon_name": "secretd",
    "node_home": "$HOME/.secretd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 529,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uscrt",
          "fixed_min_gas_price": 0.1
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/scrtlabs/SecretNetwork",
      "recommended_version": "v1.3.1",
      "binaries": {
        "linux/amd64": "https://github.com/scrtlabs/SecretNetwork/releases/download/v1.3.1/secretnetwork_1.3.1_testnet_goleveldb_amd64.deb"
      },
      "compatible_versions": [
        "v1.3.0",
        "v1.3.1"
      ],
      "genesis": {
        "genesis_url": "https://storage.googleapis.com/stakeordie-pulsar-2/genesis.json"
      },
      "versions": [
        {
          "name": "v1.3.1",
          "recommended_version": "v1.3.1",
          "compatible_versions": [
            "v1.3.0",
            "v1.3.1"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/scrtlabs/SecretNetwork/releases/download/v1.3.1/secretnetwork_1.3.1_testnet_goleveldb_amd64.deb"
          }
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "7a421a6f5f1618f7b6fdfbe4854985746f85d263",
          "address": "108.62.104.102:26656",
          "provider": "Community"
        },
        {
          "id": "a72e376dca664bac55e8ce55a2e972a8ae2c995e",
          "address": "144.202.126.98:26656",
          "provider": "Community"
        },
        {
          "id": "f95ba3da4a9eec559397f4b47b1539e24af6904c",
          "address": "52.190.249.47:26656",
          "provider": "Community"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.testnet.secretsaturn.net",
          "provider": "𝕊ecret 𝕊aturn"
        },
        {
          "address": "https://rpc.pulsar.scrttestnet.com",
          "provider": "SCRT Testnet Committee"
        }
      ],
      "rest": [
        {
          "address": "http://testnet.securesecrets.org:1317",
          "provider": "Trivium | Trivium.Network"
        },
        {
          "address": "https://lcd.testnet.secretsaturn.net",
          "provider": "𝕊ecret 𝕊aturn"
        },
        {
          "address": "https://api.pulsar.scrttestnet.com",
          "provider": "SCRT Testnet Committee"
        }
      ],
      "grpc-web": [
        {
          "address": "https://grpc.testnet.secretsaturn.net",
          "provider": "𝕊ecret 𝕊aturn"
        },
        {
          "address": "https://grpc.pulsar.scrttestnet.com",
          "provider": "SCRT Testnet Committee"
        }
      ]
    },
    "explorers": [
      {
        "kind": "secret nodes",
        "url": "https://secretnodes.com/secret/chains/pulsar-2",
        "tx_page": "https://secretnodes.com/secret/chains/pulsar-2/transactions/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://testnet.ping.pub/secret",
        "tx_page": "https://testnet.ping.pub/secret/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "saagetestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Saage-Testnet",
    "chain_id": "saage-internal-testnet-1.3",
    "bech32_prefix": "saage",
    "daemon_name": "saaged",
    "node_home": "$HOME/.saage",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 909,
    "fees": {
      "fee_tokens": [
        {
          "denom": "usaage",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/saage-tech/saage-testnet-1",
      "recommended_version": "v0.4.1",
      "compatible_versions": [
        "v0.4.1"
      ],
      "genesis": {
        "genesis_url": "https://github.com/saage-tech/network-testnet-1/blob/master/networks/saage-testnet-3/genesis.json"
      },
      "versions": [
        {
          "name": "v0.4.1",
          "recommended_version": "v0.4.1",
          "compatible_versions": [
            "v0.4.1"
          ]
        }
      ]
    },
    "peers": {
      "persistent_peers": [
        {
          "id": "e1fc6bc72db2c38e55751d350a72eba699a58f2d",
          "address": "44.203.79.229:26656",
          "provider": "saage"
        },
        {
          "id": "7ab5678c46266bdb294426de40e2b984e0af2917",
          "address": "3.235.167.226:26656",
          "provider": "saage"
        },
        {
          "id": "ff661f7eacf9962bcd8a8aeb63bd8b9a3eee40bd",
          "address": "52.202.79.213:26656",
          "provider": "saage"
        },
        {
          "id": "e0e5c42ce3d3c10359c566ffa217e2743048e8df",
          "address": "54.226.144.104:26656",
          "provider": "saage"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://sentry.testnet.saage.io:26657/",
          "provider": "saage"
        }
      ],
      "grpc": [
        {
          "address": "sentry.testnet.saage.io:9090",
          "provider": "saage"
        }
      ],
      "rest": [
        {
          "address": "https://sentry.testnet.saage.io:1317/",
          "provider": "saage"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "http://blockexplorer-1.testnet.saage.io/",
        "tx_page": "http://blockexplorer-1.testnet.saage.io/transactions/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "qwoyntestnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://qwoyn.studio/",
    "pretty_name": "Qwoyn",
    "chain_id": "higgs-boson-1",
    "bech32_prefix": "qwoyn",
    "daemon_name": "qwoynd",
    "node_home": "$HOME/.qwoynd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uqwoyn"
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uqwoyn"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/cosmic-horizon/QWOYN",
      "recommended_version": "v1.0.0",
      "compatible_versions": [
        "v1.0.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/cosmic-horizon/QWOYN/releases/download/v1.0.0/qwoynd_1.0.0_linux_amd64.zip"
      },
      "cosmos_sdk_version": "0.42.10",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "ibc_go_version": "3.0.0",
      "ics_enabled": [
        "ics20-1",
        "ics27-1"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/cosmic-horizon/testnets/main/higgs-boson-1/genesis.json"
      },
      "versions": [
        {
          "name": "v1.0.0",
          "recommended_version": "v1.0.0",
          "compatible_versions": [
            "v1.0.0"
          ],
          "cosmos_sdk_version": "0.42.10",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "ibc_go_version": "3.0.0",
          "ics_enabled": [
            "ics20-1",
            "ics27-1"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/cosmic-horizon/QWOYN/releases/download/v1.0.0/qwoynd_1.0.0_linux_amd64.zip"
          }
        }
      ]
    },
    "peers": {
      "seeds": [],
      "persistent_peers": [
        {
          "id": "520d904daa98ff2fe88baee1c3701a30beb0208b",
          "address": "137.220.37.9:26656"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "http://137.220.37.9:26657",
          "provider": "Qwoyn Studios"
        }
      ],
      "grpc": [
        {
          "address": "http://137.220.37.9:9090",
          "provider": "Qwoyn Studios"
        }
      ],
      "rest": [
        {
          "address": "http://137.220.37.9:1317",
          "provider": "Qwoyn Studios"
        }
      ]
    },
    "explorers": [
      {
        "kind": "skynetexplorers",
        "url": "https://www.skynetexplorers.com/qwoyn-studios",
        "tx_page": "https://www.skynetexplorers.com/qwoyn-studios/txs/${txHash}",
        "account_page": "https://www.skynetexplorers.com/qwoyn-studios/account/${accountAddress}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/qwoyntestnet/images/qwoyn.png"
    }
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "quicksilvertestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Quicksilver",
    "chain_id": "innuendo-5",
    "daemon_name": "quicksilverd",
    "node_home": "$HOME/.quicksilverd",
    "bech32_prefix": "quick",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uqck"
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uqck"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/ingenuity-build/quicksilver",
      "recommended_version": "v1.4.0-rc7",
      "compatible_versions": [
        "v1.4.0-rc7"
      ],
      "cosmos_sdk_version": "0.46",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "cosmwasm_version": "0.29",
      "cosmwasm_enabled": true,
      "ibc_go_version": "5.2.0",
      "genesis": {
        "genesis_url": "https://github.com/ingenuity-build/testnets/raw/main/innuendo/genesis.json"
      },
      "versions": [
        {
          "name": "v1.4.0-rc7",
          "recommended_version": "v1.4.0-rc7",
          "compatible_versions": [
            "v1.4.0-rc7"
          ],
          "cosmos_sdk_version": "0.46",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.29",
          "cosmwasm_enabled": true,
          "ibc_go_version": "5.2.0"
        }
      ]
    },
    "logo_URIs": {
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "testnet-seeds.polkachu.com:11156",
          "provider": "Polkachu"
        }
      ],
      "persistent_peers": []
    },
    "apis": {
      "rpc": [
        {
          "address": "https://quicksilver-testnet-rpc.polkachu.com",
          "provider": "Polkachu"
        }
      ],
      "rest": [
        {
          "address": "https://quicksilver-testnet-api.polkachu.com",
          "provider": "Polkachu"
        }
      ],
      "grpc": [
        {
          "address": "quicksilver-testnet-grpc.polkachu.com:11190",
          "provider": "Polkachu"
        }
      ]
    },
    "explorers": [
      {
        "kind": "explorers.guru",
        "url": "https://testnet.quicksilver.explorers.guru",
        "tx_page": "https://testnet.quicksilver.explorers.guru/transaction/${txHash}",
        "account_page": "https://testnet.quicksilver.explorers.guru/account/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "quasartestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Quasar Testnet",
    "chain_id": "qsr-questnet-04",
    "bech32_prefix": "quasar",
    "daemon_name": "quasarnoded",
    "node_home": "$HOME/.quasarnoded",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "staking": {
      "staking_tokens": [
        {
          "denom": "uqsr"
        }
      ]
    },
    "codebase": {
      "recommended_version": "v0.0.2-alpha-11",
      "compatible_versions": [
        "v0.0.2-alpha-11"
      ],
      "cosmos_sdk_version": "0.46",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "cosmwasm_version": "0.27",
      "cosmwasm_enabled": true,
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/quasar-finance/questnet/main/v04/definitive-genesis.json"
      },
      "versions": [
        {
          "name": "v0.0.2-alpha-11",
          "recommended_version": "v0.0.2-alpha-11",
          "compatible_versions": [
            "v0.0.2-alpha-11"
          ],
          "cosmos_sdk_version": "0.46",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.27",
          "cosmwasm_enabled": true
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "testnet-seeds.polkachu.com:18256",
          "provider": "Polkachu"
        },
        {
          "id": "babc3f3f7804933265ec9c40ad94f4da8e9e0017",
          "address": "testnet-seed.rhinostake.com:18256",
          "provider": "Rhino Stake"
        }
      ],
      "persistent_peers": [
        {
          "id": "8a19aa6e874ed5720aad2e7d02567ec932d92d22",
          "address": "141.94.248.63:26656",
          "provider": ""
        },
        {
          "id": "444b80ce750976df59b88ac2e08d720e1dbbf230",
          "address": "68.183.75.239:26666",
          "provider": ""
        },
        {
          "id": "20b4f9207cdc9d0310399f848f057621f7251846",
          "address": "222.106.187.13:40606",
          "provider": ""
        },
        {
          "id": "7ef67269c8ec37ff8a538a5ae83ca670fd2da686",
          "address": "137.184.192.123:26656",
          "provider": ""
        },
        {
          "id": "19afe579cc0a2b38ca87143f779f45e9a7f18a2f",
          "address": "18.134.191.148:26656",
          "provider": ""
        },
        {
          "id": "a23f002bda10cb90fa441a9f2435802b35164441",
          "address": "38.146.3.203:18256",
          "provider": ""
        },
        {
          "id": "bba6e85e3d1f1d9c127324e71a982ddd86af9a99",
          "address": "88.99.3.158:18256",
          "provider": ""
        },
        {
          "id": "966acc999443bae0857604a9fce426b5e09a7409",
          "address": "65.108.105.48:18256 ",
          "provider": ""
        },
        {
          "id": "177144bed1e280a6f2435d253441e3e4f1699c6d",
          "address": "65.109.85.226:8090",
          "provider": ""
        },
        {
          "id": "769ebaa9942375e70cebc21a75a2cfda41049d99",
          "address": "135.181.210.186:26656",
          "provider": ""
        },
        {
          "id": "8937bdacf1f0c8b2d1ffb4606554eaf08bd55df4",
          "address": "5.75.255.107:26656",
          "provider": ""
        },
        {
          "id": "99a0695a7358fa520e6fcd46f91492f7cf205d4d",
          "address": "34.175.159.249:26656",
          "provider": ""
        },
        {
          "id": "47401f4ac3f934afad079ddbe4733e66b58b67da",
          "address": "34.175.244.202:26656",
          "provider": ""
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://quasar-testnet-rpc.polkachu.com/",
          "provider": "Polkachu"
        },
        {
          "address": "https://questnet.quasar-finance.rhinostake.com/",
          "provider": "Rhino Stake"
        },
        {
          "address": "https://quasar-testnet-rpc.swiss-staking.ch",
          "provider": "Swiss Staking"
        }
      ],
      "rest": [
        {
          "address": "https://quasar-testnet-api.polkachu.com/",
          "provider": "Polkachu"
        },
        {
          "address": "https://questnet.quasar-finance.rhinostake.com/",
          "provider": "Rhino Stake"
        },
        {
          "address": "https://quasar-testnet-api.swiss-staking.ch/",
          "provider": "Swiss Staking"
        }
      ],
      "grpc": [
        {
          "address": "quasar-testnet-grpc.polkachu.com:18290",
          "provider": "Polkachu"
        },
        {
          "address": "quasar-testnet-grpc.swiss-staking.ch:10090",
          "provider": "Swiss Staking"
        }
      ]
    },
    "keywords": [
      "testnet"
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "persistencetestnet",
    "chain_id": "test-core-1",
    "pretty_name": "Persistence Testnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://persistence.one/",
    "bech32_prefix": "persistence",
    "daemon_name": "persistenceCore",
    "node_home": "$HOME/.persistenceCore",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uxprt",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uxprt"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/persistenceOne/persistenceCore",
      "recommended_version": "v6.0.0-rc5",
      "compatible_versions": [
        "v6.0.0-rc5"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/persistenceOne/persistenceCore/archive/refs/tags/v6.0.0-rc5.tar.gz"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/persistenceOne/genesisTransactions/master/test-core-1/final_genesis.json"
      },
      "versions": [
        {
          "name": "v6.0.0-rc5",
          "recommended_version": "v6.0.0-rc5",
          "compatible_versions": [
            "v6.0.0-rc5"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/persistenceOne/persistenceCore/archive/refs/tags/v6.0.0-rc5.tar.gz"
          }
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "5c2a752c9b1952dbed075c56c600c3a79b58c395",
          "address": "persistence.testnet.seed.autostake.net:26896",
          "provider": "Auto Stake"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "testnet-seeds.polkachu.com:15456",
          "provider": "AutoStake"
        }
      ],
      "persistent_peers": [
        {
          "id": "5c2a752c9b1952dbed075c56c600c3a79b58c395",
          "address": "persistence.testnet.peer.autostake.net:26896",
          "provider": "AutoStake"
        },
        {
          "id": "14ecdc5126ea8d93c7d3a863d9d38e380e46fc06",
          "address": "185.225.233.30:26656",
          "provider": "Cosmonaut Stakes"
        },
        {
          "id": "987c7cd05003194334f55ed5cbcc0fe8cd9df021",
          "address": "65.108.233.109:15456",
          "provider": "Polkachu"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-testnet-persistence.architectnodes.com/",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://persistence-testnet-rpc.baryon.dev/",
          "provider": "Baryon"
        },
        {
          "address": "https://persistence-testnet-rpc.cosmonautstakes.com/",
          "provider": "Cosmonaut Stakes"
        },
        {
          "address": "https://rpc.testnet.persistence.one/",
          "provider": "Persistence"
        },
        {
          "address": "https://persistence-testnet-rpc.polkachu.com/",
          "provider": "Polkachu"
        }
      ],
      "rest": [
        {
          "address": "https://rest-testnet-persistence.architectnodes.com/",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://persistence-testnet-api.baryon.dev/",
          "provider": "Baryon"
        },
        {
          "address": "https://persistence-testnet-rest.cosmonautstakes.com/",
          "provider": "Cosmonaut Stakes"
        },
        {
          "address": "https://rest.testnet.persistence.one/",
          "provider": "Persistence"
        },
        {
          "address": "https://persistence-testnet-api.polkachu.com/",
          "provider": "Polkachu"
        }
      ],
      "grpc": [
        {
          "address": "persistence-testnet-grpc.polkachu.com:15490",
          "provider": "Polkachu"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://testnet.ping.pub/test-core-1/",
        "tx_page": "https://testnet.ping.pub/test-core-1/tx/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://testnet.mintscan.io/persistence-testnet",
        "tx_page": "https://testnet.mintscan.io/persistence-testnet/txs/${txHash}",
        "account_page": "https://testnet.mintscan.io/persistence-testnet/account/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "osmosistestnet5",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Osmosis Testnet",
    "chain_id": "osmo-test-5",
    "bech32_prefix": "osmo",
    "daemon_name": "osmosisd",
    "node_home": "$HOME/.osmosisd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uosmo",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.0025,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uosmo"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/osmosis-labs/osmosis",
      "recommended_version": "v15.0.0",
      "compatible_versions": [
        "v15.0.0"
      ],
      "cosmos_sdk_version": "0.45",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "cosmwasm_version": "0.30",
      "cosmwasm_enabled": true,
      "genesis": {
        "genesis_url": "https://genesis.osmotest5.osmosis.zone/genesis.json"
      },
      "versions": [
        {
          "name": "v14.0.0-rc1",
          "recommended_version": "v14.0.0-rc1",
          "compatible_versions": [
            "v14.0.0-rc1"
          ],
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.29",
          "cosmwasm_enabled": true
        },
        {
          "name": "v15.0.0-rc3",
          "recommended_version": "v15.0.0-rc3",
          "compatible_versions": [
            "v15.0.0-rc3"
          ],
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.29",
          "cosmwasm_enabled": true
        },
        {
          "name": "v15.0.0",
          "recommended_version": "v15.0.0",
          "compatible_versions": [
            "v15.0.0-rc3"
          ],
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.30",
          "cosmwasm_enabled": true
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "bb197876fd952d245ef6377e3651c157e3d7ed81",
          "address": "157.245.26.231:26656",
          "provider": ""
        },
        {
          "id": "7c2b9e76be5c2142c76b429d9c29e902599ceb44",
          "address": "157.245.21.183:26656",
          "provider": ""
        }
      ],
      "persistent_peers": [
        {
          "id": "51084fccec1c309a415e89d39e6f0881c49493ed",
          "address": "95.217.144.107:12556",
          "provider": ""
        },
        {
          "id": "a5c34bdd777dd418ff7152a8646fd2f31f53f8a5",
          "address": "46.232.248.117:2000",
          "provider": ""
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.osmotest5.osmosis.zone/",
          "provider": "Osmosis"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.osmotest5.osmosis.zone/",
          "provider": "Osmosis"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.osmotest5.osmosis.zone/",
          "provider": "Osmosis"
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png"
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://testnet.mintscan.io/osmosis-testnet",
        "tx_page": "https://testnet.mintscan.io/osmosis-testnet/txs/${txHash}",
        "account_page": "https://testnet.mintscan.io/osmosis-testnet/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://explorer.osmotest5.osmosis.zone",
        "tx_page": "https://explorer.osmotest5.osmosis.zone/osmo-test-5/tx/${txHash}",
        "account_page": "https://explorer.osmotest5.osmosis.zone/osmo-test-5/account/${accountAddress}"
      }
    ],
    "keywords": [
      "dex",
      "testnet"
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "osmosistestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Osmosis Testnet",
    "chain_id": "osmo-test-4",
    "bech32_prefix": "osmo",
    "daemon_name": "osmosisd",
    "node_home": "$HOME/.osmosisd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uosmo",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uosmo"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/osmosis-labs/osmosis",
      "recommended_version": "v15.0.0-rc3",
      "compatible_versions": [
        "v15.0.0-rc3"
      ],
      "cosmos_sdk_version": "0.45",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "cosmwasm_version": "0.29",
      "cosmwasm_enabled": true,
      "genesis": {
        "genesis_url": "https://github.com/osmosis-labs/networks/raw/main/osmo-test-4/genesis.tar.bz2"
      },
      "versions": [
        {
          "name": "v14.0.0-rc1",
          "recommended_version": "v14.0.0-rc1",
          "compatible_versions": [
            "v14.0.0-rc1"
          ],
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.29",
          "cosmwasm_enabled": true
        },
        {
          "name": "v15.0.0-rc3",
          "recommended_version": "v15.0.0-rc3",
          "compatible_versions": [
            "v15.0.0-rc3"
          ],
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.29",
          "cosmwasm_enabled": true
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "0f9a9c694c46bd28ad9ad6126e923993fc6c56b1",
          "address": "137.184.181.105:26656",
          "provider": ""
        }
      ],
      "persistent_peers": [
        {
          "id": "4ab030b7fd75ed895c48bcc899b99c17a396736b",
          "address": "137.184.190.127:26656",
          "provider": ""
        },
        {
          "id": "3dbffa30baab16cc8597df02945dcee0aa0a4581",
          "address": "143.198.139.33:26656",
          "provider": ""
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.osmo-test.ccvalidators.com/",
          "provider": "CryptoCrew"
        },
        {
          "address": "https://osmosistest-rpc.quickapi.com/",
          "provider": "ChainLayer"
        },
        {
          "address": "https://rpc.testnet.osmosis.zone/",
          "provider": "Osmosis"
        }
      ],
      "rest": [
        {
          "address": "https://osmosistest-lcd.quickapi.com/",
          "provider": "CryptoCrew"
        },
        {
          "address": "https://lcd.osmo-test.ccvalidators.com/",
          "provider": "ChainLayer"
        },
        {
          "address": "https://testnet-rest.osmosis.zone/",
          "provider": ""
        }
      ],
      "grpc": [
        {
          "address": "https://grpc-test.osmosis.zone:443",
          "provider": "Osmosis"
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png"
    },
    "keywords": [
      "dex",
      "testnet"
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "nolustestnet",
    "status": "live",
    "website": "https://nolus.io/",
    "network_type": "testnet",
    "pretty_name": "Nolus Testnet",
    "chain_id": "nolus-rila",
    "bech32_prefix": "nolus",
    "daemon_name": "nolusd",
    "node_home": "$HOME/.nolusd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "unls",
          "low_gas_price": 0,
          "average_gas_price": 0.025,
          "high_gas_price": 0.05
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "unls"
        }
      ],
      "lock_duration": {
        "time": "1814400s"
      }
    },
    "codebase": {
      "git_repo": "https://github.com/nolus-protocol/nolus-core",
      "recommended_version": "v0.2.2",
      "compatible_versions": [],
      "cosmos_sdk_version": "0.45",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "cosmwasm_version": "0.30",
      "cosmwasm_enabled": true,
      "ibc_go_version": "4.2.0",
      "ics_enabled": [
        "ics20-1",
        "ics27-1"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/nolus-protocol/nolus-networks/main/testnet/nolus-rila/genesis.json"
      },
      "versions": [
        {
          "name": "v0.2.2",
          "recommended_version": "v0.2.2",
          "compatible_versions": [],
          "cosmos_sdk_version": "0.45",
          "cosmwasm_version": "0.30",
          "cosmwasm_enabled": true,
          "ibc_go_version": "4.2.0",
          "ics_enabled": [
            "ics20-1",
            "ics27-1"
          ]
        }
      ]
    },
    "logo_URIs": {
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg",
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://net-rila.nolus.io:26657",
          "provider": "NolusProtocol"
        }
      ],
      "rest": [
        {
          "address": "https://net-rila.nolus.io:1317",
          "provider": "NolusProtocol"
        }
      ],
      "grpc": [
        {
          "address": "https://net-rila.nolus.io:1318",
          "provider": "NolusProtocol"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://explorer-rila.nolus.io/nolus-rila/",
        "tx_page": "https://explorer-rila.nolus.io/nolus-rila/tx/${txHash}",
        "account_page": "https://explorer-rila.nolus.io/nolus-rila/account/${accountAddress}"
      }
    ],
    "keywords": [
      "testnet"
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "noistestnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://nois.network",
    "pretty_name": "Nois",
    "chain_id": "nois-testnet-005",
    "bech32_prefix": "nois",
    "daemon_name": "noisd",
    "node_home": "$HOME/.noisd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "unois",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.05,
          "average_gas_price": 0.05,
          "high_gas_price": 0.1
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "unois"
        }
      ],
      "lock_duration": {
        "time": "1814400s"
      }
    },
    "codebase": {
      "git_repo": "https://github.com/noislabs/noisd",
      "recommended_version": "v1.0.1",
      "compatible_versions": [
        "v1.0.1"
      ],
      "cosmos_sdk_version": "0.45",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "cosmwasm_version": "0.30",
      "cosmwasm_enabled": true,
      "genesis": {
        "name": "v1",
        "genesis_url": "https://raw.githubusercontent.com/noislabs/networks/nois-testnet-005/nois-testnet-005/genesis.json"
      },
      "versions": [
        {
          "name": "v1",
          "tag": "v1.0.1",
          "height": 0,
          "recommended_version": "v1.0.1",
          "compatible_versions": [
            "v1.0.1"
          ],
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.30",
          "cosmwasm_enabled": true
        }
      ]
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png",
        "theme": {
          "primary_color_hex": "#0C0914"
        }
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png"
    },
    "peers": {
      "seeds": [
        {
          "id": "da81dd66bca4bba509163dbd06b4a6b2e05c2e12",
          "address": "nois-testnet-seed.itrocket.net:21656",
          "provider": "itrocket"
        },
        {
          "id": "bf07906c7cf0f23606c83be15624be2c67b3929c",
          "address": "139.59.154.47:17356",
          "provider": ""
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://nois-testnet-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://nois-testnet-rpc.itrocket.net:443",
          "provider": "itrocket"
        },
        {
          "address": "https://rpc.nois.mcbnode.online:443",
          "provider": "mcbnode"
        },
        {
          "address": "https://nois-testnet.rpc.kjnodes.com:443",
          "provider": "kjnodes"
        },
        {
          "address": "https://tnois-rpc.systemd.run:443",
          "provider": "systemd"
        }
      ],
      "grpc": [
        {
          "address": "tnois-grpc.systemd.run:443",
          "provider": "systemd"
        },
        {
          "address": "nois-testnet-grpc.itrocket.net:21090",
          "provider": "itrocket"
        }
      ],
      "rest": [
        {
          "address": "https://api.nois.mcbnode.online",
          "provider": "mcbnode"
        },
        {
          "address": "https://tnois-api.systemd.run:443",
          "provider": "systemd"
        }
      ]
    },
    "explorers": [
      {
        "kind": "explorers.guru",
        "url": "https://testnet.nois.explorers.guru",
        "tx_page": "https://testnet.nois.explorers.guru/transaction/${txHash}",
        "account_page": "https://testnet.nois.explorers.guru/account/${accountAddress}"
      }
    ],
    "keywords": [
      "nois",
      "randomness",
      "drand",
      "wasm"
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "nobltestnet",
    "chain_id": "grand-1",
    "website": "https://nobleassets.xyz/",
    "pretty_name": "Noble",
    "status": "live",
    "network_type": "mainnet",
    "bech32_prefix": "noble",
    "daemon_name": "nobled",
    "node_home": "$HOME/.nobled",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uusdc",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.03
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ustake"
        }
      ],
      "lock_duration": {
        "time": "1814400s"
      }
    },
    "codebase": {
      "git_repo": "https://github.com/strangelove-ventures/noble",
      "recommended_version": "v0.4.1",
      "compatible_versions": [
        "v0.4.1"
      ],
      "cosmos_sdk_version": "v0.45",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "cosmwasm_enabled": false,
      "ibc_go_version": "v3.4.0",
      "ics_enabled": [
        "ics20-1"
      ],
      "genesis": {
        "name": "v0.3.0",
        "genesis_url": "https://raw.githubusercontent.com/strangelove-ventures/noble-networks/main/testnet/grand-1/genesis.json"
      },
      "versions": [
        {
          "name": "v0.3.0",
          "tag": "v0.3.0",
          "height": 0,
          "next_version_name": "v0.4.1"
        },
        {
          "name": "v0.4.1",
          "tag": "v0.4.2",
          "height": 302000,
          "recommended_version": "v0.4.1",
          "compatible_versions": [
            "v0.4.1"
          ],
          "cosmos_sdk_version": "v0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_enabled": false,
          "ibc_go_version": "v3.4.0",
          "ics_enabled": [
            "ics20-1"
          ]
        }
      ]
    },
    "peers": {
      "persistent_peers": [
        {
          "id": "38179b18853d6a8cb86b99881e02cf72f18b9d0f",
          "address": "34.127.46.223:26656",
          "provider": "Strangelove"
        },
        {
          "id": "57546d799a1cdef74b9a174052821a6e93636dfc",
          "address": "34.145.87.4:26656",
          "provider": "Strangelove"
        },
        {
          "id": "6b76ad22a73897e3c39c7d87b7d12a3b7d690bff",
          "address": "34.168.48.128:26656",
          "provider": "Strangelove"
        },
        {
          "id": "f8a0d8942bcf02b94ed875ded9cb23944a53e48a",
          "address": "141.95.97.28:15656",
          "provider": "B-Harvest"
        },
        {
          "id": "d82829d886635ffcfcef66adfaa725acb522e1c6",
          "address": "83.136.255.243:26656",
          "provider": "Everstake"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://testnet.mintscan.io/noble-testnet",
        "tx_page": "https://testnet.mintscan.io/noble-testnet/txs/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://explore.strange.love/grand-1",
        "tx_page": "https://explore.strange.love/grand-1/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "neutrontestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Neutron Testnet",
    "chain_id": "pion-1",
    "bech32_prefix": "neutron",
    "daemon_name": "neutrond",
    "node_home": "$HOME/.neutrond",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "untrn",
          "low_gas_price": 0,
          "average_gas_price": 0.025,
          "high_gas_price": 0.05
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/neutron-org/neutron",
      "recommended_version": "v0.4.3",
      "compatible_versions": [],
      "cosmos_sdk_version": "0.45",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "cosmwasm_version": "0.31",
      "cosmwasm_enabled": true,
      "ibc_go_version": "4.3.0",
      "genesis": {
        "genesis_url": "https://github.com/cosmos/testnets/raw/master/replicated-security/pion-1/pion-1-genesis.json"
      },
      "versions": [
        {
          "name": "v0.4.3",
          "recommended_version": "v0.4.3",
          "compatible_versions": [],
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.31",
          "cosmwasm_enabled": true,
          "ibc_go_version": "4.3.0"
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron-black-logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron-black-logo.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "e2c07e8e6e808fb36cca0fc580e31216772841df",
          "address": "p2p-palvus.pion-1.ntrn.tech:26656",
          "provider": "Neutron"
        }
      ],
      "persistent_peers": [
        {
          "id": "49d75c6094c006b6f2758e45457c1f3d6002ce7a",
          "address": "pion-banana.rs-testnet.polypore.xyz:26656",
          "provider": "Hypha"
        },
        {
          "id": "f2520026fb9086f1b2f09e132d209cbe88064ec1",
          "address": "pion-cherry.rs-testnet.polypore.xyz:26656",
          "provider": "Hypha"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-palvus.pion-1.ntrn.tech",
          "provider": "Neutron"
        },
        {
          "address": "https://rpc.pion.remedy.tm.p2p.org",
          "provider": "P2P.ORG"
        },
        {
          "address": "https://rpc.baryon-sentry-01.rs-testnet.polypore.xyz",
          "provider": "Hypha"
        }
      ],
      "rest": [
        {
          "address": "https://rest-palvus.pion-1.ntrn.tech",
          "provider": "Neutron"
        },
        {
          "address": "https://api.pion.remedy.tm.p2p.org",
          "provider": "P2P.ORG"
        },
        {
          "address": "https://rest.baryon-sentry-01.rs-testnet.polypore.xyz",
          "provider": "Hypha"
        }
      ],
      "grpc": [
        {
          "address": "grpc-palvus.pion-1.ntrn.tech:80",
          "provider": "Neutron"
        },
        {
          "address": "grpc.baryon.remedy.tm.p2p.org:443",
          "provider": "P2P.ORG"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Ping.pub Explorer from Hypha",
        "url": "https://explorer.rs-testnet.polypore.xyz/pion-1",
        "tx_page": "https://explorer.rs-testnet.polypore.xyz/pion-1/tx/${txHash}",
        "account_page": "https://explorer.rs-testnet.polypore.xyz/baryon-1/account/${accountAddress}"
      },
      {
        "kind": "Mintscan",
        "url": "https://testnet.mintscan.io/neutron-testnet",
        "tx_page": "https://testnet.mintscan.io/neutron-testnet/txs/${txHash}",
        "account_page": "https://testnet.mintscan.io/neutron-testnet/account/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "migalootestnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://www.whitewhale.money/",
    "pretty_name": "Migaloo Testnet",
    "chain_id": "narwhal-1",
    "bech32_prefix": "migaloo",
    "daemon_name": "migalood",
    "node_home": "$HOME/.migalood",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uwhale",
          "fixed_min_gas_price": 0.25,
          "low_gas_price": 0.25,
          "average_gas_price": 0.5,
          "high_gas_price": 0.75
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uwhale"
        }
      ]
    },
    "logo_URIs": {
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.svg",
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.png"
    },
    "codebase": {
      "git_repo": "https://github.com/White-Whale-Defi-Platform/migaloo-chain",
      "recommended_version": "v2.0.0",
      "compatible_versions": [
        "v2.0.0"
      ],
      "cosmos_sdk_version": "0.45",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "cosmwasm_version": "0.28",
      "cosmwasm_enabled": true,
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/White-Whale-Defi-Platform/migaloo-chain/release/v2.0.x/networks/testnet/genesis.json"
      },
      "versions": [
        {
          "name": "v2.0.0",
          "recommended_version": "v2.0.0",
          "compatible_versions": [
            "v2.0.0"
          ],
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.28",
          "cosmwasm_enabled": true
        }
      ]
    },
    "peers": {
      "seeds": [],
      "persistent_peers": []
    },
    "apis": {
      "rpc": [
        {
          "address": "https://migaloo-testnet-rpc.polkachu.com",
          "provider": "Polkachu"
        }
      ],
      "rest": [
        {
          "address": "https://migaloo-testnet-api.polkachu.com",
          "provider": "Polkachu"
        }
      ],
      "grpc": []
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://testnet.ping.pub/narwhal",
        "tx_page": "https://testnet.ping.pub/narwhal/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "marstestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Mars Hub Testnet",
    "chain_id": "ares-1",
    "bech32_prefix": "mars",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "umars",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 0,
          "high_gas_price": 0.025
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "umars"
        }
      ]
    },
    "codebase": {
      "ics_enabled": [
        "ics20-1"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/mars-protocol/networks/main/ares-1/genesis.json"
      }
    },
    "apis": {
      "rpc": [
        {
          "address": "https://testnet-rpc.marsprotocol.io/",
          "provider": "Mars Protocol"
        },
        {
          "address": "https://rpc-mars.nodeist.net/",
          "provider": "Nodeist"
        }
      ],
      "rest": [
        {
          "address": "https://testnet-rest.marsprotocol.io/",
          "provider": "Mars Protocol"
        },
        {
          "address": "https://api-mars.nodeist.net/",
          "provider": "Nodeist"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Mars Protocol",
        "url": "https://testnet-explorer.marsprotocol.io",
        "tx_page": "https://testnet-explorer.marsprotocol.io/transactions/${txHash}"
      },
      {
        "kind": "Nodeist Explorer",
        "url": "https://exp.nodeist.net/t-mars/",
        "tx_page": "https://exp.nodeist.net/t-mars/transactions/${txHash}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/marstestnet/images/mars.png"
    }
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "lumenxtestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "LumenX-Test",
    "chain_id": "lumenx-test",
    "bech32_prefix": "lumen",
    "daemon_name": "lumenxd",
    "node_home": "$HOME/.lumenx",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ulumen",
          "fixed_min_gas_price": 0.0025,
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.03
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ulumen"
        }
      ]
    },
    "codebase": {
      "ics_enabled": [
        "ics20-1"
      ]
    },
    "peers": {
      "seeds": [],
      "persistent_peers": [
        {
          "id": "8b66dba116f7f1feb0ff0649273ade6c9eca816c",
          "address": "38.242.237.107:26706"
        },
        {
          "id": "6e9a9670d7b156203139cb5fd547be78147565c9",
          "address": "62.171.145.215:26656"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://testnet-rpc.lumenx.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://testrpc-lumenx.cryptonet.pl/",
          "provider": "CryptoNet"
        }
      ],
      "rest": [
        {
          "address": "https://testnet-api.lumenx.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://testapi-lumenx.cryptonet.pl/",
          "provider": "CryptoNet"
        }
      ],
      "grpc": []
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://testnet.explorer.chaintools.tech/lumenx",
        "tx_page": "https://testnet.explorer.chaintools.tech/lumenx/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "kyvetestnet",
    "chain_id": "kaon-1",
    "pretty_name": "KYVE Kaon",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "kyve",
    "daemon_name": "kyved",
    "node_home": "$HOME/.kyve",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "tkyve",
          "fixed_min_gas_price": 0.02,
          "low_gas_price": 0.02,
          "average_gas_price": 0.03,
          "high_gas_price": 0.06
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "tkyve"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/KYVENetwork/chain",
      "recommended_version": "v1.0.0-rc0",
      "compatible_versions": [
        "v1.0.0-rc0"
      ],
      "binaries": {
        "linux/amd64": "https://files.kyve.network/chain/v1.0.0-rc0/kyved_linux_amd64.tar.gz",
        "linux/arm64": "https://files.kyve.network/chain/v1.0.0-rc0/kyved_linux_arm64.tar.gz",
        "darwin/amd64": "https://files.kyve.network/chain/v1.0.0-rc0/kyved_darwin_amd64.tar.gz",
        "darwin/arm64": "https://files.kyve.network/chain/v1.0.0-rc0/kyved_darwin_arm64.tar.gz"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/KYVENetwork/networks/main/kaon-1/genesis.json"
      },
      "versions": [
        {
          "name": "v1.0.0-rc0",
          "recommended_version": "v1.0.0-rc0",
          "compatible_versions": [
            "v1.0.0-rc0"
          ],
          "binaries": {
            "linux/amd64": "https://files.kyve.network/chain/v1.0.0-rc0/kyved_linux_amd64.tar.gz",
            "linux/arm64": "https://files.kyve.network/chain/v1.0.0-rc0/kyved_linux_arm64.tar.gz",
            "darwin/amd64": "https://files.kyve.network/chain/v1.0.0-rc0/kyved_darwin_amd64.tar.gz",
            "darwin/arm64": "https://files.kyve.network/chain/v1.0.0-rc0/kyved_darwin_arm64.tar.gz"
          }
        }
      ]
    },
    "peers": {
      "persistent_peers": [
        {
          "id": "430845649afaad0a817bdf36da63b6f93bbd8bd1",
          "address": "3.67.29.225:26656"
        },
        {
          "id": "b68e5131552e40b9ee70427879eb34e146ef20df",
          "address": "18.194.131.3:26656"
        },
        {
          "id": "801fa026c6d9227874eeaeba288eae3b800aad7f",
          "address": "52.29.15.250:26656"
        },
        {
          "id": "bc8b5fbb40a1b82dfba591035cb137278a21c57d",
          "address": "52.59.65.9:26656"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-eu-1.kaon.kyve.network",
          "provider": "kyve"
        },
        {
          "address": "https://rpc-kyve-test.ecostake.com",
          "provider": "ecostake"
        }
      ],
      "rest": [
        {
          "address": "https://api-eu-1.kaon.kyve.network",
          "provider": "kyve"
        },
        {
          "address": "https://rest-kyve-test.ecostake.com",
          "provider": "ecostake"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://testnet.mintscan.io/kyve-testnet",
        "tx_page": "https://testnet.mintscan.io/kyve-testnet/txs/${txHash}",
        "account_page": "https://testnet.mintscan.io/kyve-testnet/account/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "kyvedevnet",
    "chain_id": "korellia",
    "pretty_name": "KYVE Korellia",
    "status": "live",
    "network_type": "devnet",
    "bech32_prefix": "kyve",
    "daemon_name": "chaind",
    "node_home": "$HOME/.kyve",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "tkyve",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/KYVENetwork/chain",
      "recommended_version": "v0.6.3",
      "compatible_versions": [
        "v0.6.3"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/KYVENetwork/chain/releases/download/v0.6.3/chain_linux_amd64.tar.gz"
      },
      "genesis": {
        "genesis_url": "https://github.com/KYVENetwork/chain/releases/download/v0.0.1/genesis.json"
      },
      "versions": [
        {
          "name": "v0.6.3",
          "recommended_version": "v0.6.3",
          "compatible_versions": [
            "v0.6.3"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/KYVENetwork/chain/releases/download/v0.6.3/chain_linux_amd64.tar.gz"
          }
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "02dd2c26948ea758a25d3dbc91744f8897681652",
          "address": "3.73.27.185:26656"
        }
      ],
      "persistent_peers": [
        {
          "id": "70556c82352b9919fb6f339b9da0ebc587e9148c",
          "address": "3.68.232.117:26656"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.korellia.kyve.network",
          "provider": "kyve"
        }
      ],
      "rest": [
        {
          "address": "https://api.korellia.kyve.network",
          "provider": "kyve"
        }
      ]
    },
    "explorers": [
      {
        "kind": "explorers.guru",
        "url": "https://kyve.explorers.guru/",
        "tx_page": "https://kyve.explorers.guru/transaction/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "kujiratestnet",
    "chain_id": "harpoon-4",
    "pretty_name": "Kujira Harpoon",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "kujira",
    "daemon_name": "kujirad",
    "node_home": "$HOME/.kujira",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ukuji",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/Team-Kujira/core",
      "recommended_version": "v0.4.0",
      "compatible_versions": [
        "v0.4.0"
      ],
      "genesis": {
        "genesis_url": "https://github.com/Team-Kujira/networks/raw/master/testnet/harpoon-4.json"
      },
      "versions": [
        {
          "name": "v0.4.0",
          "recommended_version": "v0.4.0",
          "compatible_versions": [
            "v0.4.0"
          ]
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://kujira-testnet-rpc.polkachu.com",
          "provider": "polkachu"
        }
      ],
      "rest": [
        {
          "address": "https://kujira-testnet-api.polkachu.com/",
          "provider": "polkachu"
        }
      ]
    },
    "explorers": [
      {
        "kind": "explorers.guru",
        "url": "https://kujira.explorers.guru",
        "tx_page": "https://kujira.explorers.guru/transaction/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "kichaintestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Ki",
    "chain_id": "kichain-t-4",
    "bech32_prefix": "tki",
    "daemon_name": "kid",
    "node_home": "$HOME/.kid",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "utki",
          "fixed_min_gas_price": 0.025
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/KiFoundation/ki-tools",
      "recommended_version": "Testnet-3.0.0-beta",
      "compatible_versions": [
        "Testnet-3.0.0-beta"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/KiFoundation/ki-networks/v0.1/Testnet/kichain-t-4/genesis.json"
      },
      "versions": [
        {
          "name": "Testnet-3.0.0-beta",
          "recommended_version": "Testnet-3.0.0-beta",
          "compatible_versions": [
            "Testnet-3.0.0-beta"
          ]
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "381dff5439ed042353c5333e61bab1510711f2f5",
          "address": "seed-testnet.blockchain.ki:6969",
          "provider": "kifoundation"
        }
      ],
      "persistent_peers": [
        {
          "id": "46b25d81510f8dcc535ca0924961b266e4f59244",
          "address": "135.125.183.94:26656",
          "provider": "Community"
        },
        {
          "id": "ada3bbf64f963e764bfe003276354bd121e80ae0",
          "address": "95.111.248.200:26656",
          "provider": "Community"
        },
        {
          "id": "276f6fb420b3595b63c2a13d35868cb530a31578",
          "address": "65.21.159.19:26656",
          "provider": "Community"
        },
        {
          "id": "7e5710ee0b1576a78a21a89e1588b6c95ee69873",
          "address": "194.163.137.193:26656",
          "provider": "Community"
        },
        {
          "id": "323a5c9ccfb73573cbcd634c497b2a7405b198fa",
          "address": "142.132.137.114:26656",
          "provider": "Community"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-challenge.blockchain.ki/",
          "provider": "kifoundation"
        }
      ],
      "rest": [
        {
          "address": "https://api-challenge.blockchain.ki/",
          "provider": "kifoundation"
        }
      ]
    },
    "explorers": [
      {
        "kind": "kifoundation",
        "url": "https://kichain-t-4.blockchain.ki/",
        "tx_page": "https://kichain-t-4.blockchain.ki/transactions/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "junotestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Juno Testnet",
    "chain_id": "uni-6",
    "bech32_prefix": "juno",
    "daemon_name": "junod",
    "node_home": "$HOME/.juno",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ujunox",
          "low_gas_price": 0.0025,
          "average_gas_price": 0.0025,
          "high_gas_price": 0.0024
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ujunox"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/CosmosContracts/juno",
      "recommended_version": "v14.0.0-alpha.1",
      "compatible_versions": [
        "v14.0.0-alpha.1"
      ],
      "cosmos_sdk_version": "0.45",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "cosmwasm_version": "0.30",
      "cosmwasm_enabled": true,
      "ibc_go_version": "4.3.0",
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/CosmosContracts/testnets/main/uni-6/genesis.json"
      },
      "versions": [
        {
          "name": "v13.0.0-beta.1",
          "recommended_version": "v13.0.0-beta.1",
          "compatible_versions": [
            "v13.0.0-beta.1"
          ],
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.30",
          "cosmwasm_enabled": true,
          "ibc_go_version": "4.3.0"
        },
        {
          "name": "v14.0.0-alpha.1",
          "recommended_version": "v14.0.0-alpha.1",
          "compatible_versions": [
            "v14.0.0-alpha.1"
          ],
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.30",
          "cosmwasm_enabled": true,
          "ibc_go_version": "4.3.0"
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "babc3f3f7804933265ec9c40ad94f4da8e9e0017",
          "address": "testnet-seed.rhinostake.com:12656",
          "provider": "RHINO"
        }
      ],
      "persistent_peers": [
        {
          "id": "c54bf418fb542634495f57a1e36c9bd057d55e1b",
          "address": "5.161.80.115:26656",
          "provider": "Reecepbcups"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.uni.junonetwork.io",
          "provider": "Juno"
        },
        {
          "address": "https://juno-testnet-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://uni-rpc.reece.sh",
          "provider": "Reecepbcups"
        }
      ],
      "rest": [
        {
          "address": "https://api.uni.junonetwork.io",
          "provider": "Juno"
        },
        {
          "address": "https://juno-testnet-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://uni-api.reece.sh",
          "provider": "Reecepbcups"
        }
      ],
      "grpc": [
        {
          "address": "juno-testnet-grpc.polkachu.com:12690",
          "provider": "Polkachu"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://testnet.ezstaking.tools/juno-testnet",
        "tx_page": "https://testnet.ezstaking.tools/juno-testnet/txs/${txHash}",
        "account_page": "https://testnet.ezstaking.tools/juno-testnet/account/${accountAddress}"
      },
      {
        "kind": "Mintscan",
        "url": "https://testnet.mintscan.io/juno-testnet",
        "tx_page": "https://testnet.mintscan.io/juno-testnet/txs/${txHash}"
      },
      {
        "kind": "NodesGuru",
        "url": "https://testnet.juno.explorers.guru/",
        "tx_page": "https://testnet.juno.explorers.guru/transaction/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "jackaltestnet",
    "chain_id": "canine-1",
    "website": "https://jackalprotocol.com",
    "pretty_name": "Jackal",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "jkl",
    "daemon_name": "canined",
    "node_home": "$HOME/.canine",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ujkl",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/JackalLabs/canine-chain",
      "recommended_version": "v1.2.2-alpha.1",
      "compatible_versions": [
        "v1.2.2-alpha.1"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/JackalLabs/woof/master/genesis/woof-final.json"
      },
      "binaries": {
        "linux/amd64": "https://github.com/JackalLabs/canine-chain/releases/download/v1.2.2-alpha.1/canined-Linux",
        "darwin/amd64": "https://github.com/JackalLabs/canine-chain/releases/download/v1.2.2-alpha.1/canined-macOS"
      },
      "versions": [
        {
          "name": "v1.2.2-alpha.1",
          "recommended_version": "v1.2.2-alpha.1",
          "compatible_versions": [
            "v1.2.2-alpha.1"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/JackalLabs/canine-chain/releases/download/v1.2.2-alpha.1/canined-Linux",
            "darwin/amd64": "https://github.com/JackalLabs/canine-chain/releases/download/v1.2.2-alpha.1/canined-macOS"
          }
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "052c498dd1cc603b4d32f772035b6a8ca902def3",
          "address": "23.88.73.211:26656"
        },
        {
          "id": "0bdeaaa237b41e3b964a027a110c6ab5bf561177",
          "address": "209.34.206.38:26656"
        },
        {
          "id": "bf7ee27a24e7d5f45653206fbbda8c4b716b74b1",
          "address": "89.58.38.59:26656"
        },
        {
          "id": "9eecc498dd2542c862f5bfb84ed7d2e1e3d922ab",
          "address": "34.201.48.14:26656"
        },
        {
          "id": "bf62b185eef3c185f8ebf81d5cf54bdc064b21d8",
          "address": "85.10.216.157:26656"
        },
        {
          "id": "43e800018a5b52ba119a5410ff45cbeb63182cc8",
          "address": "207.244.127.5:26656"
        },
        {
          "id": "942087a9665e8235f8037d0b9d2a3f8a8c3d562b",
          "address": "104.207.138.181:26656"
        },
        {
          "id": "9d0094606fe8748f1c06b494f7c0cbbd44808ec6",
          "address": "131.153.59.6:26656"
        },
        {
          "id": "6071fe2fc7e4f49caa4b1fd1cfe19007152312e0",
          "address": "34.76.87.33:26656"
        },
        {
          "id": "3f58d7c35ad55ef6cea94f7aa2ffe79df1c01768",
          "address": "78.107.253.133:26656"
        },
        {
          "id": "46cb18ca32ad7329cb82a10316087794ef12150f",
          "address": "185.107.57.74:26656"
        }
      ],
      "persistent_peers": [
        {
          "id": "052c498dd1cc603b4d32f772035b6a8ca902def3",
          "address": "23.88.73.211:26656"
        },
        {
          "id": "0bdeaaa237b41e3b964a027a110c6ab5bf561177",
          "address": "209.34.206.38:26656"
        },
        {
          "id": "bf7ee27a24e7d5f45653206fbbda8c4b716b74b1",
          "address": "89.58.38.59:26656"
        },
        {
          "id": "9eecc498dd2542c862f5bfb84ed7d2e1e3d922ab",
          "address": "34.201.48.14:26656"
        },
        {
          "id": "bf62b185eef3c185f8ebf81d5cf54bdc064b21d8",
          "address": "85.10.216.157:26656"
        },
        {
          "id": "43e800018a5b52ba119a5410ff45cbeb63182cc8",
          "address": "207.244.127.5:26656"
        },
        {
          "id": "942087a9665e8235f8037d0b9d2a3f8a8c3d562b",
          "address": "104.207.138.181:26656"
        },
        {
          "id": "9d0094606fe8748f1c06b494f7c0cbbd44808ec6",
          "address": "131.153.59.6:26656"
        },
        {
          "id": "6071fe2fc7e4f49caa4b1fd1cfe19007152312e0",
          "address": "34.76.87.33:26656"
        },
        {
          "id": "3f58d7c35ad55ef6cea94f7aa2ffe79df1c01768",
          "address": "78.107.253.133:26656"
        },
        {
          "id": "46cb18ca32ad7329cb82a10316087794ef12150f",
          "address": "185.107.57.74:26656"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://testnet-rpc.jackalprotocol.com",
          "provider": "Jackal Labs"
        }
      ],
      "rest": [
        {
          "address": "https://testnet-api.jackalprotocol.com",
          "provider": "Jackal Labs"
        }
      ],
      "grpc": [
        {
          "address": "https://testnet-grpc.jackalprotocol.com",
          "provider": "Jackal Labs"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/jackal",
        "tx_page": "https://ping.pub/jackal/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "injectivetestnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://injective.com",
    "pretty_name": "Injective",
    "chain_id": "injective-888",
    "bech32_prefix": "inj",
    "extra_codecs": [
      "injective"
    ],
    "slip44": 60,
    "daemon_name": "injectived",
    "node_home": "$HOME/.injectived",
    "fees": {
      "fee_tokens": [
        {
          "denom": "inj",
          "fixed_min_gas_price": 500000000,
          "low_gas_price": 500000000,
          "average_gas_price": 700000000,
          "high_gas_price": 900000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "inj"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/InjectiveLabs/testnet",
      "recommended_version": "v1.10.2",
      "compatible_versions": [
        "v1.10.2"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/InjectiveLabs/testnet/releases/download/v1.10.2-1678712142/linux-amd64.zip",
        "darwin/amd64": "https://github.com/InjectiveLabs/testnet/releases/download/v1.10.2-1678712142/darwin-amd64.zip"
      },
      "genesis": {
        "genesis_url": "aws s3 cp s3://injective-snapshots/testnet/genesis.json . --no-sign-request"
      },
      "versions": [
        {
          "name": "v1.10.2",
          "recommended_version": "v1.10.2",
          "compatible_versions": [
            "v1.10.2"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/InjectiveLabs/testnet/releases/download/v1.10.2-1678712142/linux-amd64.zip",
            "darwin/amd64": "https://github.com/InjectiveLabs/testnet/releases/download/v1.10.2-1678712142/darwin-amd64.zip"
          }
        }
      ]
    },
    "peers": {
      "seeds": [],
      "persistent_peers": [
        {
          "id": "e5cc63a9117e6f372169f15774ea4f7c5177da25",
          "address": "34.23.245.175:26656",
          "provider": "injectivelabs.org"
        },
        {
          "id": "5bf72750f7e015ccfd65246c9f16185144867aff",
          "address": "35.231.107.231:26656",
          "provider": "injectivelabs.org"
        },
        {
          "id": "588dd6d1e1a338d1524efcfbd1c2a9bfc5df33d2",
          "address": "104.196.43.6:26656",
          "provider": "injectivelabs.org"
        },
        {
          "id": "8a05cc5bc466169a7332287ddce4cd8995684d1a",
          "address": "34.73.247.128:26656",
          "provider": "injectivelabs.org"
        },
        {
          "id": "0a2af0f999b08ccaf8825198d9aafb8b947c003f",
          "address": "34.73.57.164:26656",
          "provider": "injectivelabs.org"
        },
        {
          "id": "d0c2407f4b1cef137d9d3ada69478234ad2a28f4",
          "address": "34.73.57.164:26656",
          "provider": "injectivelabs.org"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://k8s.testnet.tm.injective.network:443",
          "provider": "injectiveLabs"
        },
        {
          "address": "https://testnet.tm.injective.network",
          "provider": "injectiveLabs"
        }
      ],
      "rest": [
        {
          "address": "https://k8s.testnet.lcd.injective.network",
          "provider": "injectiveLabs"
        },
        {
          "address": "https://testnet.grpc.injective.network",
          "provider": "injectiveLabs"
        }
      ],
      "grpc": [
        {
          "address": "k8s.testnet.chain.grpc.injective.network:443",
          "provider": "injectiveLabs"
        },
        {
          "address": "https://testnet.grpc.injective.network",
          "provider": "injectiveLabs"
        }
      ]
    },
    "explorers": [
      {
        "kind": "injectiveprotocol",
        "url": "https://testnet.explorer.injective.network/",
        "tx_page": "https://testnet.explorer.injective.network/transaction/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "imversedtestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Imversed Testnet",
    "chain_id": "imversed-test-1",
    "bech32_prefix": "imv",
    "daemon_name": "imversed",
    "node_home": "$HOME/.imversed",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "nimv",
          "fixed_min_gas_price": 0.001
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/imversed/imversed",
      "recommended_version": "v2.4.0",
      "compatible_versions": [
        "v2.4.0"
      ],
      "binaries": {
        "linux/amd64": "https://s.imversed.com/imversed_linux_amd64.tar.gz",
        "darwin/arm64": "https://s.imversed.com/imversed_darwin_arm64.tar.gz",
        "darwin/amd64": "https://s.imversed.com/imversed_darwin_amd64.tar.gz",
        "windows/amd64": "https://s.imversed.com/imversed_windows_amd64.tar.gz"
      },
      "genesis": {
        "genesis_url": "https://s.imversed.com/test-net/genesis.json"
      },
      "versions": [
        {
          "name": "v2.4.0",
          "recommended_version": "v2.4.0",
          "compatible_versions": [
            "v2.4.0"
          ],
          "binaries": {
            "linux/amd64": "https://s.imversed.com/imversed_linux_amd64.tar.gz",
            "darwin/arm64": "https://s.imversed.com/imversed_darwin_arm64.tar.gz",
            "darwin/amd64": "https://s.imversed.com/imversed_darwin_amd64.tar.gz",
            "windows/amd64": "https://s.imversed.com/imversed_windows_amd64.tar.gz"
          }
        }
      ]
    },
    "peers": {
      "persistent_peers": [
        {
          "id": "9b1ea21b9a1d098169c19e5d6bfa1397bba5c655",
          "address": "34.133.39.91:26656",
          "provider": "imversed"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://tx-endpoint-test.imversed.com/",
          "provider": "imversed"
        }
      ],
      "rest": [
        {
          "address": "https://query-endpoint-test.imversed.com/",
          "provider": "imversed"
        }
      ],
      "grpc": [
        {
          "address": "http://qs.imversed.com:9090",
          "provider": "imversed"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Big Dipper",
        "url": "https://tex-s.imversed.com",
        "tx_page": "https://tex-s.imversed.com/transactions/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "impacthubtestnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://www.ixo.world/",
    "pretty_name": "ixo",
    "chain_id": "pandora-8",
    "bech32_prefix": "ixo",
    "daemon_name": "ixod",
    "node_home": "$HOME/.ixod",
    "key_algos": [
      "secp256k1",
      "ed25519"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uixo",
          "fixed_min_gas_price": 0.015,
          "low_gas_price": 0.015,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uixo"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/ixofoundation/ixo-blockchain",
      "recommended_version": "v0.20.0",
      "compatible_versions": [
        "v0.20.0"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/ixofoundation/genesis/main/pandora-8/genesis.json"
      },
      "versions": [
        {
          "name": "v0.20.0",
          "recommended_version": "v0.20.0",
          "compatible_versions": [
            "v0.20.0"
          ]
        }
      ]
    },
    "peers": {
      "seeds": [],
      "persistent_peers": []
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.testnet.ixo.earth/",
          "provider": "ixoworld"
        }
      ],
      "rest": [
        {
          "address": "https://testnet.ixo.earth/rest/",
          "provider": "ixoworld"
        }
      ],
      "grpc": []
    },
    "explorers": [
      {
        "kind": "ixoworld",
        "url": "https://blockscan-pandora.ixo.earth/",
        "tx_page": "https://blockscan-pandora.ixo.earth/transactions/${txHash}",
        "account_page": "https://blockscan-pandora.ixo.earth/account/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "impacthubdevnet",
    "status": "live",
    "network_type": "devnet",
    "website": "https://www.ixo.world/",
    "pretty_name": "ixo",
    "chain_id": "devnet-1",
    "bech32_prefix": "ixo",
    "daemon_name": "ixod",
    "node_home": "$HOME/.ixod",
    "key_algos": [
      "secp256k1",
      "ed25519"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uixo",
          "fixed_min_gas_price": 0.015,
          "low_gas_price": 0.015,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uixo"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/ixofoundation/ixo-blockchain",
      "recommended_version": "v0.20.0",
      "compatible_versions": [
        "v0.20.0"
      ],
      "versions": [
        {
          "name": "v0.20.0",
          "recommended_version": "v0.20.0",
          "compatible_versions": [
            "v0.20.0"
          ]
        }
      ]
    },
    "peers": {
      "seeds": [],
      "persistent_peers": []
    },
    "apis": {
      "rpc": [
        {
          "address": "https://devnet.ixo.earth/rpc/",
          "provider": "ixoworld"
        }
      ],
      "rest": [
        {
          "address": "https://devnet.ixo.earth/rest/",
          "provider": "ixoworld"
        }
      ],
      "grpc": []
    },
    "explorers": [
      {
        "kind": "ixoworld",
        "url": "https://devnet-blockscan.ixo.earth/",
        "tx_page": "https://devnet-blockscan.ixo.earth/transactions/${txHash}",
        "account_page": "https://devnet-blockscan.ixo.earth/account/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "hypersigntestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "hypersign",
    "chain_id": "jagrat",
    "bech32_prefix": "hid",
    "daemon_name": "hid-noded",
    "node_home": "$HOME/.hid-node",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uhid",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 0.02,
          "high_gas_price": 0.05
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/hypersign-protocol/hid-node",
      "recommended_version": "v0.1.5",
      "compatible_versions": [
        "v0.1.5"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/hypersign-protocol/hid-node/releases/download/v0.1.5/hid-noded-0.1.5-linux-amd64.tar.gz",
        "linux/arm64": "https://github.com/hypersign-protocol/hid-node/releases/download/v0.1.5/hid-noded-0.1.5-linux-arm64.tar.gz",
        "darwin/arm64": "https://github.com/hypersign-protocol/hid-node/releases/download/v0.1.5/hid-noded-0.1.5-darwin-arm64.tar.gz"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/hypersign-protocol/networks/master/testnet/jagrat/final_genesis.json"
      },
      "versions": [
        {
          "name": "v0.1.5",
          "recommended_version": "v0.1.5",
          "compatible_versions": [
            "v0.1.5"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/hypersign-protocol/hid-node/releases/download/v0.1.5/hid-noded-0.1.5-linux-amd64.tar.gz",
            "linux/arm64": "https://github.com/hypersign-protocol/hid-node/releases/download/v0.1.5/hid-noded-0.1.5-linux-arm64.tar.gz",
            "darwin/arm64": "https://github.com/hypersign-protocol/hid-node/releases/download/v0.1.5/hid-noded-0.1.5-darwin-arm64.tar.gz"
          }
        }
      ]
    },
    "peers": {
      "seeds": [],
      "persistent_peers": [
        {
          "id": "d7c9b9a3c3a6c5f4ccdfb37a8358755b277271c1",
          "address": "3.110.226.164:26656",
          "provider": "hypersign"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.jagrat.hypersign.id",
          "provider": "hypersign"
        }
      ],
      "rest": [
        {
          "address": "https://api.jagrat.hypersign.id",
          "provider": "hypersign"
        }
      ],
      "grpc": [
        {
          "address": "grpc.jagrat.hypersign.id:5099",
          "provider": "hypersign"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Ping Pub",
        "url": "https://explorer.hypersign.id/hypersign-testnet",
        "tx_page": "https://explorer.hypersign.id/hypersign-testnet/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "humanstestnet",
    "chain_id": "testnet-1",
    "pretty_name": "Humans AI Testnet",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "humans",
    "daemon_name": "humansd",
    "node_home": "$HOME/.humans",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uheart",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/humansdotai/humans",
      "recommended_version": "v1.0.0",
      "compatible_versions": [
        "v1.0.0"
      ],
      "genesis": {
        "genesis_url": "https://rpc-testnet.humans.zone/genesis"
      },
      "versions": [
        {
          "name": "v1.0.0",
          "recommended_version": "v1.0.0",
          "compatible_versions": [
            "v1.0.0"
          ]
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://humans-testnet.nodejumper.io",
          "provider": "NODEJUMPER"
        }
      ],
      "rest": [
        {
          "address": "https://humans-testnet.nodejumper.io:1317",
          "provider": "NODEJUMPER"
        }
      ],
      "grpc": [
        {
          "address": "https://humans-testnet.nodejumper.io:9090",
          "provider": "NODEJUMPER"
        }
      ]
    },
    "explorers": [
      {
        "kind": "explorer.humans.zone",
        "url": "https://explorer.humans.zone/",
        "tx_page": "https://explorer.humans.zone/humans-testnet/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "gitopiatestnet",
    "chain_id": "gitopia-janus-testnet-2",
    "pretty_name": "Gitopia Testnet",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "gitopia",
    "daemon_name": "gitopiad",
    "node_home": "$HOME/.gitopia",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "utlore",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {
      "git_repo": "https://gitopia.com/gitopia",
      "recommended_version": "v1.2.0",
      "compatible_versions": [
        "v1.2.0"
      ],
      "genesis": {
        "genesis_url": "https://server.gitopia.com/raw/gitopia/testnets/master/gitopia-janus-testnet-2/genesis.json.gz"
      },
      "versions": [
        {
          "name": "v1.2.0",
          "recommended_version": "v1.2.0",
          "compatible_versions": [
            "v1.2.0"
          ]
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "399d4e19186577b04c23296c4f7ecc53e61080cb",
          "address": "seed.gitopia.com:26656"
        }
      ],
      "persistent_peers": [
        {
          "id": "6146658ffe2d148524a9fdcc3d701440053442bf",
          "address": "gitopia-testnet.nodejumper.io:30656",
          "provider": "NODEJUMPER"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://gitopia-testnet.nodejumper.io",
          "provider": "NODEJUMPER"
        }
      ],
      "rest": [
        {
          "address": "https://gitopia-testnet.nodejumper.io:1317",
          "provider": "NODEJUMPER"
        }
      ],
      "grpc": [
        {
          "address": "https://gitopia-testnet.nodejumper.io:9090",
          "provider": "NODEJUMPER"
        }
      ]
    },
    "explorers": [
      {
        "kind": "explorer.humans.zone",
        "url": "https://gitopia.explorers.guru/",
        "tx_page": "https://gitopia.explorers.guru/transaction/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "fetchhubtestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Fetch.ai Testnet",
    "chain_id": "dorado-1",
    "bech32_prefix": "fetch",
    "daemon_name": "fetchd",
    "node_home": "$HOME/.fetchd",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "atestfet",
          "low_gas_price": 0.025,
          "average_gas_price": 0.025,
          "high_gas_price": 0.035
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "atestfet"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/fetchai/fetchd",
      "recommended_version": "v0.10.5",
      "compatible_versions": [
        "v0.10.5"
      ],
      "genesis": {
        "genesis_url": "https://storage.googleapis.com/fetch-ai-testnet-genesis/genesis-dorado-827201.json"
      },
      "versions": [
        {
          "name": "v0.10.5",
          "recommended_version": "v0.10.5",
          "compatible_versions": [
            "v0.10.5"
          ]
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "eb9b9717975b49a57e62ea93aa4480e091ae0660",
          "address": "connect-dorado.fetch.ai:36556",
          "provider": "fetch.ai"
        },
        {
          "id": "46d2f86a255ece3daf244e2ca11d5be0f16cb633",
          "address": "connect-dorado.fetch.ai:36557",
          "provider": "fetch.ai"
        },
        {
          "id": "066fc564979b1f3173615f101b62448ac7e00eb1",
          "address": "connect-dorado.fetch.ai:36558",
          "provider": "fetch.ai"
        }
      ],
      "persistent_peers": []
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-dorado.fetch.ai:443",
          "provider": "fetch.ai"
        }
      ],
      "rest": [
        {
          "address": "https://rest-dorado.fetch.ai",
          "provider": "fetch.ai"
        }
      ],
      "grpc": [
        {
          "address": "grpc-dorado.fetch.ai:443",
          "provider": "fetch.ai"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://explore-dorado.fetch.ai",
        "tx_page": "https://explore-dorado.fetch.ai/transactions/${txHash}"
      },
      {
        "kind": "azoyalabs",
        "url": "https://fetchstation.azoyalabs.com/testnet",
        "tx_page": "https://fetchstation.azoyalabs.com/testnet/explorer/transactions/${txHash}",
        "account_page": "https://fetchstation.azoyalabs.com/testnet/explorer/address/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "evmostestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Evmos Testnet",
    "chain_id": "evmos_9000-4",
    "bech32_prefix": "evmos",
    "daemon_name": "evmosd",
    "node_home": "$HOME/.evmosd",
    "key_algos": [
      "ethsecp256k1"
    ],
    "extra_codecs": [
      "ethermint"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "atevmos",
          "low_gas_price": 20000000000,
          "average_gas_price": 25000000000,
          "high_gas_price": 40000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "atevmos"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/evmos/evmos",
      "recommended_version": "v12.0.0-rc4",
      "compatible_versions": [
        "v12.0.0-rc4"
      ],
      "cosmos_sdk_version": "0.46",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "ibc_go_version": "v6.1.0",
      "genesis": {
        "genesis_url": "https://github.com/evmos/testnets/raw/main/evmos_9000-4/genesis.zip"
      },
      "versions": [
        {
          "name": "v11.0.0-rc3",
          "recommended_version": "v11.0.0-rc3",
          "compatible_versions": [
            "v11.0.0-rc3"
          ],
          "cosmos_sdk_version": "0.46",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "ibc_go_version": "v6.1.0"
        },
        {
          "name": "v12.0.0",
          "recommended_version": "v12.0.0-rc4",
          "compatible_versions": [
            "v12.0.0-rc4"
          ],
          "cosmos_sdk_version": "0.46",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "ibc_go_version": "v6.1.0"
        }
      ]
    },
    "peers": {
      "seeds": [],
      "persistent_peers": [
        {
          "id": "b7635a113a52d0d25c82267de0648e71e46dc584",
          "address": "167.99.182.201:46656",
          "provider": "coldy"
        },
        {
          "id": "005efaae1ae29f95edea5f3729ce7e75511e5d3d",
          "address": "65.108.225.158:13456",
          "provider": "Polkachu"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://evmos.test.rpc.coldyvalidator.net",
          "provider": "coldy"
        },
        {
          "address": "https://evmos-testnet-rpc.polkachu.com",
          "provider": "Polkachu"
        }
      ],
      "rest": [
        {
          "address": "https://evmos.test.api.coldyvalidator.net",
          "provider": "coldy"
        },
        {
          "address": "https://evmos-testnet-api.polkachu.com",
          "provider": "Polkachu"
        }
      ],
      "grpc": [
        {
          "address": "https://evmos.test.grpc.coldyvalidator.net",
          "provider": "coldy"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Mintscan",
        "url": "https://testnet.mintscan.io/evmos-testnet",
        "tx_page": "https://testnet.mintscan.io/evmos-testnet/txs/${txHash}"
      },
      {
        "kind": "NodesGuru",
        "url": "https://testnet.evmos.explorers.guru/",
        "tx_page": "https://testnet.evmos.explorers.guru/transaction/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "empowertestnet",
    "chain_id": "altruistic-1",
    "pretty_name": "Empower Testnet",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "empower",
    "daemon_name": "empowerd",
    "node_home": "$HOME/.empowerchain",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "umpwr",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/empowerchain/empowerchain",
      "recommended_version": "v0.0.1",
      "compatible_versions": [
        "v0.0.1"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/empowerchain/empowerchain/main/testnets/altruistic-1/genesis.json"
      },
      "versions": [
        {
          "name": "v0.0.1",
          "recommended_version": "v0.0.1",
          "compatible_versions": [
            "v0.0.1"
          ]
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "9de92b545638f6baaa7d6d5109a1f7148f093db3",
          "address": "65.108.77.106:26656"
        },
        {
          "id": "4fd5e497563b2e09cfe6f857fb35bdae76c12582",
          "address": "65.108.206.56:26656"
        },
        {
          "id": "fe32c17373fbaa36d9fd86bc1146bfa125bb4f58",
          "address": "5.9.147.185:26656"
        },
        {
          "id": "220fb60b083bc4d443ce2a7a5363f4813dd4aef4",
          "address": "116.202.236.115:26656"
        },
        {
          "id": "225ad85c594d03942a026b90f4dab43f90230ea0",
          "address": "88.99.3.158:26656"
        },
        {
          "id": "333de3fc2eba7eead24e0c5f53d665662b2ba001",
          "address": "10.132.0.11:26656"
        },
        {
          "id": "4a38efbae54fd1357329bd583186a68ccd6d85f9",
          "address": "94.130.212.252:26656"
        },
        {
          "id": "52450b21f346a4cf76334374c9d8012b2867b842",
          "address": "167.172.246.201:26656"
        },
        {
          "id": "6a675d4f66bfe049321c3861bcfd19bd09fefbde",
          "address": "195.3.223.204:26656"
        },
        {
          "id": "1069820cdd9f5332503166b60dc686703b2dccc5",
          "address": "138.201.141.76:26656"
        },
        {
          "id": "277ff448eec6ec7fa665f68bdb1c9cb1a52ff597",
          "address": "159.69.110.238:26656"
        },
        {
          "id": "3335c9458105cf65546db0fb51b66f751eeb4906",
          "address": "5.189.129.30:26656"
        },
        {
          "id": "edc9aa0bbf1fcd7433fcc3650e3f50ab0becc0b5",
          "address": "65.21.170.3:26656"
        },
        {
          "id": "d582bcd8a8f0a20c551098571727726bc75bae74",
          "address": "213.239.217.52:26656"
        },
        {
          "id": "eb182533a12d75fbae1ec32ef1f8fc6b6dd06601",
          "address": "65.109.28.219:26656"
        },
        {
          "id": "b22f0708c6f393bf79acc0a6ca23643fe7d58391",
          "address": "65.21.91.50:26656"
        },
        {
          "id": "e8f6d75ab37bf4f08c018f306416df1e138fd21c",
          "address": "95.217.135.41:26656"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-testnet-empower.zenchainlabs.io/",
          "provider": "zenchainlabs"
        },
        {
          "address": "https://empower-t.rpc.manticore.team:443/",
          "provider": "manticore"
        },
        {
          "address": "https://empower-testnet-rpc.polkachu.com/",
          "provider": "polkachu"
        }
      ],
      "rest": [
        {
          "address": "https://api-testnet-empower.zenchainlabs.io/",
          "provider": "zenchainlabs"
        },
        {
          "address": "https://empower-t.api.manticore.team:443/",
          "provider": "manticore"
        },
        {
          "address": "https://empower-testnet-api.polkachu.com/",
          "provider": "polkachu"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://testnet.ping.pub/empower",
        "tx_page": "https://testnet.ping.pub/empower/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "elystestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Elys Network",
    "chain_id": "elystestnet-1",
    "bech32_prefix": "elys",
    "daemon_name": "elysd",
    "node_home": "$HOME/.elys",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "staking": {
      "staking_tokens": [
        {
          "denom": "uelys"
        }
      ],
      "lock_duration": {
        "time": "1209600s"
      }
    },
    "codebase": {
      "git_repo": "https://github.com/elys-network/elys",
      "recommended_version": "v0.4.0",
      "compatible_versions": [
        "v0.4.0"
      ],
      "cosmos_sdk_version": "v0.46",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "ibc_go_version": "v6.1.0",
      "cosmwasm_enabled": false,
      "genesis": {
        "genesis_url": "https://snapshots.polkachu.com/testnet-genesis/elys/genesis.json"
      },
      "versions": [
        {
          "name": "v0.2.3",
          "recommended_version": "v0.2.3",
          "compatible_versions": [
            "v0.2.3"
          ],
          "cosmos_sdk_version": "v0.46",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "ibc_go_version": "v6.1.0",
          "cosmwasm_enabled": false,
          "binaries": {
            "linux/amd64": "https://github.com/elys-network/elys/releases/download/v0.2.3/elys._v0.2.3_linux_amd64.tar.gz"
          }
        },
        {
          "name": "v0.3.1",
          "recommended_version": "v0.3.1",
          "compatible_versions": [
            "v0.3.1"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/elys-network/elys/releases/download/v0.3.1/elys._v0.3.1_linux_amd64.tar.gz"
          }
        },
        {
          "name": "v0.4.0",
          "recommended_version": "v0.4.0",
          "compatible_versions": [
            "v0.4.0"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/elys-network/elys/releases/download/v0.4.0/elys._v0.4.0_linux_amd64.tar.gz"
          }
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "cdf9ae8529aa00e6e6703b28f3dcfdd37e07b27c",
          "address": "37.187.154.66:26656",
          "provider": "nirvana"
        },
        {
          "id": "86987eeff225699e67a6543de3622b8a986cce28",
          "address": "91.183.62.162:26656",
          "provider": "utopia"
        },
        {
          "id": "ae22b82b1dc34fa0b1a64854168692310f562136",
          "address": "198.27.74.140:26656",
          "provider": "shangrila"
        },
        {
          "id": "61284a4d71cd3a33771640b42f40b2afda389a1e",
          "address": "5.101.138.254:26656",
          "provider": "euphoria"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.testnet.elys.network",
          "provider": "Elys Network"
        }
      ],
      "rest": [
        {
          "address": "https://api.testnet.elys.network",
          "provider": "Elys Network"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://testnet.elys.network/elys",
        "tx_page": "https://testnet.elys.network/elys/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "cudostestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Cudos Testnet",
    "chain_id": "cudos-testnet-public-3",
    "bech32_prefix": "cudos",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "codebase": {
      "git_repo": "https://github.com/CudoVentures/cudos-node",
      "recommended_version": "v1.1.0",
      "compatible_versions": [
        "v1.1.0"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/CudoVentures/cudos-builders/cudos-master/docker/config/genesis.testnet.public.json"
      },
      "versions": [
        {
          "name": "v1.1.0",
          "recommended_version": "v1.1.0",
          "compatible_versions": [
            "v1.1.0"
          ]
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "ee9f57fa3d29a7b88df01dd69f1537c5687b8fd6",
          "address": "seed-01.hosts.testnet.cudos.org:26656",
          "provider": "cudo"
        },
        {
          "id": "8c9f61d1783b4ab9707ef4dc99d07c9cd0ae5155",
          "address": "seed-02.hosts.testnet.cudos.org:26656",
          "provider": "cudo"
        },
        {
          "id": "56543c24150a939095558c16dee031bf2fb2feb5",
          "address": "seed-03.hosts.testnet.cudos.org:26656",
          "provider": "cudo"
        }
      ],
      "persistent_peers": [
        {
          "id": "0ccf54158f9c340f1fdacf6b4884ca8c8372a923",
          "address": "sentry-01.hosts.testnet.cudos.org:26656",
          "provider": "cudo"
        },
        {
          "id": "7c48114327bfd3ff3b396cda8b33a24c5d0ad172",
          "address": "sentry-02.hosts.testnet.cudos.org:26656",
          "provider": "cudo"
        },
        {
          "id": "d2693512dc45cc856300bcc1b8fd518ab5b2d343",
          "address": "sentry-03.hosts.testnet.cudos.org:26656",
          "provider": "cudo"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.testnet.cudos.org:443/",
          "provider": "cudo"
        },
        {
          "address": "http://sentry-01.hosts.testnet.cudos.org:26657",
          "provider": "cudo"
        },
        {
          "address": "http://sentry-02.hosts.testnet.cudos.org:26657",
          "provider": "cudo"
        },
        {
          "address": "http://sentry-03.hosts.testnet.cudos.org:26657",
          "provider": "cudo"
        }
      ],
      "rest": [
        {
          "address": "https://rest.testnet.cudos.org:443",
          "provider": "cudo"
        },
        {
          "address": "http://sentry-01.hosts.testnet.cudos.org:1317/",
          "provider": "cudo"
        },
        {
          "address": "http://sentry-02.hosts.testnet.cudos.org:1317/",
          "provider": "cudo"
        },
        {
          "address": "http://sentry-03.hosts.testnet.cudos.org:1317/",
          "provider": "cudo"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.testnet.cudos.org:433",
          "provider": "cudo"
        },
        {
          "address": "http://sentry-01.hosts.testnet.cudos.org:9090",
          "provider": "cudo"
        },
        {
          "address": "http://sentry-02.hosts.testnet.cudos.org:9090",
          "provider": "cudo"
        },
        {
          "address": "http://sentry-03.hosts.testnet.cudos.org:9090",
          "provider": "cudo"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper-testnet",
        "url": "https://explorer.testnet.cudos.org/",
        "tx_page": "https://explorer.testnet.cudos.org/transactions/${txHash}",
        "account_page": "https://explorer.testnet.cudos.org/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "cosmwasmtestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "CosmWasm Testnet",
    "chain_id": "malaga-420",
    "bech32_prefix": "wasm",
    "daemon_name": "wasmd",
    "node_home": "$HOME/.wasmd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "umlg",
          "low_gas_price": 0.03,
          "average_gas_price": 0.04,
          "high_gas_price": 0.05
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uand"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/CosmWasm/wasmd",
      "recommended_version": "v0.27",
      "compatible_versions": [
        "v0.27"
      ],
      "cosmos_sdk_version": "0.45",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "cosmwasm_version": "0.27",
      "cosmwasm_enabled": true,
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/CosmosContracts/testnets/main/uni-5/genesis.json"
      },
      "versions": [
        {
          "name": "v0.27",
          "recommended_version": "v0.27",
          "compatible_versions": [
            "v0.27"
          ],
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.27",
          "cosmwasm_enabled": true
        }
      ]
    },
    "peers": {
      "seeds": [],
      "persistent_peers": [
        {
          "id": "3e3d0d09027dda13a1cd95b5146edc24da5ef872",
          "address": "142.132.236.229:26656",
          "provider": "Confio"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.malaga-420.cosmwasm.com:443",
          "provider": "Confio"
        }
      ],
      "rest": [
        {
          "address": "https://api.malaga-420.cosmwasm.com",
          "provider": "Confio"
        }
      ]
    },
    "explorers": [
      {
        "kind": "BIG DIPPER",
        "url": "https://block-explorer.malaga-420.cosmwasm.com/",
        "tx_page": "https://block-explorer.malaga-420.cosmwasm.com/transactions/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "cosmoshubtestnet",
    "chain_id": "theta-testnet-001",
    "pretty_name": "Cosmos Hub Public Testnet",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "cosmos",
    "daemon_name": "gaiad",
    "node_home": "$HOME/.gaia",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uatom",
          "fixed_min_gas_price": 0.0025
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/cosmos/gaia",
      "recommended_version": "v9.0.1",
      "compatible_versions": [
        "v9.0.1"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/cosmos/gaia/releases/download/v9.0.1/gaiad-v9.0.1-linux-amd64",
        "linux/arm64": "https://github.com/cosmos/gaia/releases/download/v9.0.1/gaiad-v9.0.1-linux-arm64",
        "darwin/amd64": "https://github.com/cosmos/gaia/releases/download/v9.0.1/gaiad-v9.0.1-darwin-amd64",
        "darwin/arm64": "https://github.com/cosmos/gaia/releases/download/v9.0.1/gaiad-v9.0.1-darwin-arm64",
        "windows/amd64": "https://github.com/cosmos/gaia/releases/download/v9.0.1/gaiad-v9.0.1-windows-amd64.exe"
      },
      "genesis": {
        "genesis_url": "https://github.com/cosmos/testnets/raw/master/public/genesis.json.gz"
      },
      "versions": [
        {
          "name": "v9.0.1",
          "recommended_version": "v9.0.1",
          "compatible_versions": [
            "v9.0.1"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/cosmos/gaia/releases/download/v9.0.1/gaiad-v9.0.1-linux-amd64",
            "linux/arm64": "https://github.com/cosmos/gaia/releases/download/v9.0.1/gaiad-v9.0.1-linux-arm64",
            "darwin/amd64": "https://github.com/cosmos/gaia/releases/download/v9.0.1/gaiad-v9.0.1-darwin-amd64",
            "darwin/arm64": "https://github.com/cosmos/gaia/releases/download/v9.0.1/gaiad-v9.0.1-darwin-arm64",
            "windows/amd64": "https://github.com/cosmos/gaia/releases/download/v9.0.1/gaiad-v9.0.1-windows-amd64.exe"
          }
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "639d50339d7045436c756a042906b9a69970913f",
          "address": "seed-01.theta-testnet.polypore.xyz:26656",
          "provider": "Hypha"
        },
        {
          "id": "3e506472683ceb7ed75c1578d092c79785c27857",
          "address": "seed-02.theta-testnet.polypore.xyz:26656",
          "provider": "Hypha"
        }
      ],
      "persistent_peers": []
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.sentry-01.theta-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://rpc.sentry-02.theta-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://rpc.state-sync-01.theta-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://rpc.state-sync-02.theta-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://public-cosmos-theta.w3node.com",
          "provider": "Interchain.FM"
        },
        {
          "address": "https://rpc-theta.osmotest5.osmosis.zone/",
          "provider": "Osmosis"
        }
      ],
      "rest": [
        {
          "address": "https://rest.sentry-01.theta-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://rest.sentry-02.theta-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://rest.state-sync-01.theta-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://rest.state-sync-02.theta-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://public-cosmos-theta.w3node.com/rest/",
          "provider": "Interchain.FM"
        },
        {
          "address": "https://lcd-theta.osmotest5.osmosis.zone/",
          "provider": "Osmosis"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.sentry-01.theta-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://grpc.sentry-02.theta-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://grpc.state-sync-01.theta-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://grpc.state-sync-02.theta-testnet.polypore.xyz",
          "provider": "Hypha"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Mintscan",
        "url": "https://testnet.mintscan.io/cosmoshub-testnet",
        "tx_page": "https://testnet.mintscan.io/cosmoshub-testnet/txs/${txHash}"
      },
      {
        "kind": "Big Dipper",
        "url": "https://explorer.theta-testnet.polypore.xyz/",
        "tx_page": "https://explorer.theta-testnet.polypore.xyz/transactions/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "coreum",
    "status": "live",
    "network_type": "testnet",
    "website": "https://www.coreum.com",
    "pretty_name": "Coreum",
    "chain_id": "coreum-testnet-1",
    "bech32_prefix": "testcore",
    "daemon_name": "cored",
    "node_home": "$HOME/.core/coreum-testnet-1",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 990,
    "fees": {
      "fee_tokens": [
        {
          "denom": "utestcore",
          "fixed_min_gas_price": 0.03125,
          "low_gas_price": 0.0625,
          "average_gas_price": 0.0625,
          "high_gas_price": 62.5
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "utestcore"
        }
      ],
      "lock_duration": {
        "time": "168h"
      }
    },
    "codebase": {
      "git_repo": "https://github.com/CoreumFoundation/coreum",
      "recommended_version": "v0.1.1",
      "compatible_versions": [
        "v0.1.1"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/CoreumFoundation/coreum/releases/download/v0.1.1/cored-linux-amd64?checksum=sha256:21db2ea1b31d9e8202e0d11f2bee0de78d2e677c07fd75a7db1f3958bf49146c",
        "linux/arm64": "https://github.com/CoreumFoundation/coreum/releases/download/v0.1.1/cored-linux-arm64?checksum=sha256:7d383d1a1bc9185677b25c05ebbe01cf20dd6c779ca4301065359ea6e3bcefa3"
      },
      "cosmos_sdk_version": "0.45",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "cosmwasm_version": "0.30",
      "cosmwasm_enabled": true,
      "genesis": {
        "name": "v0",
        "genesis_url": "https://raw.githubusercontent.com/CoreumFoundation/coreum/master/genesis/coreum-testnet-1.json"
      },
      "versions": [
        {
          "name": "v0",
          "tag": "v0.1.1",
          "height": 0,
          "recommended_version": "v0.1.1",
          "compatible_versions": [
            "v0.1.1"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/CoreumFoundation/coreum/releases/download/v0.1.1/cored-linux-amd64?checksum=sha256:21db2ea1b31d9e8202e0d11f2bee0de78d2e677c07fd75a7db1f3958bf49146c",
            "linux/arm64": "https://github.com/CoreumFoundation/coreum/releases/download/v0.1.1/cored-linux-arm64?checksum=sha256:7d383d1a1bc9185677b25c05ebbe01cf20dd6c779ca4301065359ea6e3bcefa3"
          },
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.30",
          "cosmwasm_enabled": true
        }
      ]
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png",
        "theme": {
          "primary_color_hex": "#25d695"
        }
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png"
    },
    "peers": {
      "seeds": [
        {
          "id": "64391878009b8804d90fda13805e45041f492155",
          "address": "seed-sirius.testnet-1.coreum.dev:26656",
          "provider": "Coreum Foundation"
        },
        {
          "id": "53f2367d8f8291af8e3b6ca60efded0675ff6314",
          "address": "seed-antares.mainnet-1.coreum.dev:26656",
          "provider": "Coreum Foundation"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://full-node-pluto.testnet-1.coreum.dev:26657",
          "provider": "Coreum Foundation"
        },
        {
          "address": "https://full-node-eris.testnet-1.coreum.dev:26657",
          "provider": "Coreum Foundation"
        }
      ],
      "grpc": [
        {
          "address": "https://full-node-pluto.testnet-1.coreum.dev:9090",
          "provider": "Coreum Foundation"
        },
        {
          "address": "https://full-node-eris.testnet-1.coreum.dev:9090",
          "provider": "Coreum Foundation"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Coreum",
        "url": "https://explorer.testnet-1.coreum.dev/coreum",
        "tx_page": "https://explorer.testnet-1.coreum.dev/coreum/transactions/${txHash}",
        "account_page": "https://explorer.testnet-1.coreum.dev/coreum/account/${accountAddress}"
      }
    ],
    "keywords": [
      "dex",
      "staking",
      "wasm",
      "assets",
      "nft"
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "coolcattestnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://app.coolcat.space/",
    "pretty_name": "CoolCat",
    "chain_id": "kitten-04",
    "bech32_prefix": "ccat",
    "key_algos": [
      "secp256k1"
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "uccat",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 1,
          "high_gas_price": 2
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uccat"
        }
      ]
    },
    "daemon_name": "coolcat",
    "node_home": "$HOME/.coolcat",
    "slip44": 118,
    "codebase": {
      "git_repo": "https://github.com/DigitalKitchenLabs/coolcat",
      "recommended_version": "v2.0.0",
      "compatible_versions": [
        "v2.0.0"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/DigitalKitchenLabs/testnets/main/kitten-04/genesis.json"
      },
      "versions": [
        {
          "name": "v2.0.0",
          "recommended_version": "v2.0.0",
          "compatible_versions": [
            "v2.0.0"
          ]
        }
      ]
    },
    "peers": {
      "seeds": [],
      "persistent_peers": []
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.coolcat.space",
          "provider": "Digital Kitchen"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.coolcat.space",
          "provider": "Digital Kitchen"
        }
      ],
      "grpc": []
    },
    "explorers": []
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "composabletestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Composable Testnet",
    "chain_id": "banksy-testnet-1",
    "bech32_prefix": "banksy",
    "daemon_name": "banksyd",
    "node_home": "$HOME/.banksy",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ubanksy",
          "fixed_min_gas_price": 0.025
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/notional-labs/composable-testnet",
      "recommended_version": "v2.2.0",
      "compatible_versions": [
        "v2.2.0"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/notional-labs/composable-testnet/main/networks/testnet-1/genesis.json"
      },
      "versions": [
        {
          "name": "v2.2.0",
          "recommended_version": "v2.2.0",
          "compatible_versions": [
            "v2.2.0"
          ]
        }
      ]
    },
    "peers": {
      "persistent_peers": [
        {
          "id": "bf95ad80f82320b8fefea75eeede60f563d1f847",
          "address": "168.119.91.22:26656"
        },
        {
          "id": "7bff2e43489a7acd09a38ab47c1f25ec24e24947",
          "address": "162.19.237.201:26656"
        },
        {
          "id": "7ab89f884656a66ca90fd9d44489da3c6ca1fea4",
          "address": "95.217.144.107:22256"
        }
      ],
      "seeds": [
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "testnet-seeds.polkachu.com:22256"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://composable-testnet-rpc.polkachu.com",
          "provider": "polkachu"
        }
      ],
      "rest": [
        {
          "address": "https://composable-testnet-api.polkachu.com",
          "provider": "polkachu"
        }
      ],
      "grpc": [
        {
          "address": "composable-testnet-grpc.polkachu.com:22290",
          "provider": "polkachu"
        }
      ]
    },
    "explorers": [
      {
        "url": "https://explorer.nodestake.top/composable-testnet",
        "tx_page": "https://explorer.nodestake.top/composable-testnet/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "chimbatestnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://chimba.ooo/",
    "pretty_name": "Chimba",
    "chain_id": "chimba-testnet",
    "bech32_prefix": "chimba",
    "daemon_name": "chimbad",
    "node_home": "$HOME/.chimbad",
    "fees": {
      "fee_tokens": [
        {
          "denom": "ucmba",
          "fixed_min_gas_price": 0.25,
          "low_gas_price": 1,
          "average_gas_price": 5,
          "high_gas_price": 10
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "chimba"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/ChimbaBlockchain/chimba",
      "recommended_version": "v1.0.0",
      "compatible_versions": [
        "v1.0.0"
      ],
      "genesis": {
        "genesis_url": "https://rpc.testnet.chimbablockchain.io/genesis"
      },
      "versions": [
        {
          "name": "v1.0.0",
          "recommended_version": "v1.0.0",
          "compatible_versions": [
            "v1.0.0"
          ]
        }
      ]
    },
    "peers": {
      "persistent_peers": []
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.testnet.chimbablockchain.io",
          "provider": "chimba"
        }
      ],
      "rest": [
        {
          "address": "https://testnet.chimbablockchain.io",
          "provider": "chimba"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://explorer.testnet.chimba.ooo/",
        "tx_page": "https://explorer.testnet.chimba.ooo/transactions/${txHash}"
      }
    ],
    "slip44": 118
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "cheqdtestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "cheqd",
    "chain_id": "cheqd-testnet-6",
    "bech32_prefix": "cheqd",
    "daemon_name": "cheqd-noded",
    "node_home": "$HOME/.cheqdnode",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ncheq",
          "fixed_min_gas_price": 25,
          "low_gas_price": 25,
          "average_gas_price": 50,
          "high_gas_price": 100
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/cheqd/cheqd-node",
      "recommended_version": "v1.4.0",
      "compatible_versions": [
        "v1.2.5",
        "v1.3.0",
        "v1.4.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/cheqd/cheqd-node/releases/download/v1.4.0/cheqd-noded-1.4.0-linux-amd64.tar.gz",
        "linux/arm64": "https://github.com/cheqd/cheqd-node/releases/download/v1.4.0/cheqd-noded-1.4.0-linux-arm64.tar.gz",
        "darwin/amd64": "https://github.com/cheqd/cheqd-node/releases/download/v1.4.0/cheqd-noded-1.4.0-darwin-amd64.tar.gz",
        "darwin/arm64": "https://github.com/cheqd/cheqd-node/releases/download/v1.4.0/cheqd-noded-1.4.0-darwin-arm64.tar.gz"
      },
      "cosmos_sdk_version": "0.46.10",
      "consensus": {
        "type": "tendermint",
        "version": "0.34.26"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/cheqd/cheqd-node/main/networks/testnet/genesis.json"
      },
      "versions": [
        {
          "name": "v1.4.0",
          "recommended_version": "v1.4.0",
          "compatible_versions": [
            "v1.2.5",
            "v1.3.0",
            "v1.4.0"
          ],
          "cosmos_sdk_version": "0.46.10",
          "consensus": {
            "type": "tendermint",
            "version": "0.34.26"
          },
          "binaries": {
            "linux/amd64": "https://github.com/cheqd/cheqd-node/releases/download/v1.4.0/cheqd-noded-1.4.0-linux-amd64.tar.gz",
            "linux/arm64": "https://github.com/cheqd/cheqd-node/releases/download/v1.4.0/cheqd-noded-1.4.0-linux-arm64.tar.gz",
            "darwin/amd64": "https://github.com/cheqd/cheqd-node/releases/download/v1.4.0/cheqd-noded-1.4.0-darwin-amd64.tar.gz",
            "darwin/arm64": "https://github.com/cheqd/cheqd-node/releases/download/v1.4.0/cheqd-noded-1.4.0-darwin-arm64.tar.gz"
          }
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "658453f9578d82f0897f13205ca2e7ad37279f95",
          "address": "seed1-eu.cheqd.network:26656",
          "provider": "cheqd"
        },
        {
          "id": "32d626260f74f3c824dfa15a624c078f27fc31a2",
          "address": "seed1-ap.cheqd.network:26656",
          "provider": "cheqd"
        }
      ],
      "persistent_peers": [
        {
          "id": "8c45237d435247270b95edae33fd1a69341eb1bb",
          "address": "sentry1-eu.cheqd.network:26656",
          "provider": "cheqd"
        },
        {
          "id": "355d3e577b9b1eaadf438694e86364425cf4bb0e",
          "address": "sentry1-ap.cheqd.network:26656",
          "provider": "cheqd"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.cheqd.network",
          "provider": "cheqd"
        }
      ],
      "rest": [
        {
          "address": "https://api.cheqd.network",
          "provider": "cheqd"
        }
      ],
      "grpc": [
        {
          "address": "grpc.cheqd.network:443",
          "provider": "cheqd"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://testnet-explorer.cheqd.io/",
        "tx_page": "https://testnet-explorer.cheqd.io/transactions/${txHash}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg"
    }
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "celestiatestnet3",
    "chain_id": "mocha",
    "pretty_name": "Mocha Testnet",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "celestia",
    "daemon_name": "celestia-appd",
    "node_home": "$HOME/.celestia-app",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "utia",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/celestiaorg/celestia-app",
      "recommended_version": "v0.11.1",
      "compatible_versions": [
        "v0.12.0"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/celestiaorg/networks/master/mocha/genesis.json"
      },
      "versions": [
        {
          "name": "v0.11.1",
          "recommended_version": "v0.11.1",
          "compatible_versions": [
            "v0.12.0"
          ]
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "9aa8a73ea9364aa3cf7806d4dd25b6aed88d8152",
          "address": "celestia.seed.mzonder.com",
          "provider": "Mzonder"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-mocha.pops.one",
          "provider": "P-OPs"
        }
      ],
      "rest": [
        {
          "address": "https://api-mocha.pops.one",
          "provider": "P-OPs"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Mintscan",
        "url": "https://testnet.mintscan.io/celestia-testnet",
        "tx_page": "https://testnet.mintscan.io/celestia-testnet/txs/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "celestiatestnet2",
    "chain_id": "arabica-5",
    "pretty_name": "Arabica Testnet",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "celestia",
    "daemon_name": "celestia-appd",
    "node_home": "$HOME/.celestia-app",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "utia",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/celestiaorg/celestia-app",
      "recommended_version": "v0.12.0",
      "compatible_versions": [
        "v0.12.0"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/celestiaorg/networks/master/arabica-5/genesis.json"
      },
      "versions": [
        {
          "name": "v0.12.0",
          "recommended_version": "v0.12.0",
          "compatible_versions": [
            "v0.12.0"
          ]
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "12D3KooWDgG69kXfmSiHjUErN2ahpUC1SXpSfB2urrqMZ6aWC8NS",
          "address": "limani.celestia-devops.dev",
          "provider": "Celestia"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.limani.celestia-devops.dev",
          "provider": "Celestia"
        }
      ],
      "rest": [
        {
          "address": "https://api.limani.celestia-devops.dev",
          "provider": "Celestia"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Ping.Pub",
        "url": "https://explorer.celestia.observer/arabica",
        "tx_page": "https://explorer.celestia.observer/arabica/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "celestiatestnet",
    "chain_id": "blockspacerace-0",
    "pretty_name": "Blockspace Race Testnet",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "celestia",
    "daemon_name": "celestia-appd",
    "node_home": "$HOME/.celestia-app",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "utia",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/celestiaorg/celestia-app",
      "recommended_version": "v0.12.0",
      "compatible_versions": [
        "v0.12.0"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/celestiaorg/networks/master/blockspacerace/genesis.json"
      },
      "versions": [
        {
          "name": "v0.12.0",
          "recommended_version": "v0.12.0",
          "compatible_versions": [
            "v0.12.0"
          ]
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "f97a75fb69d3a5fe893dca7c8d238ccc0bd66a8f",
          "address": "celestia-blockspacerace.seed.brocha.in:30583",
          "provider": "Brochain"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-blockspacerace.pops.one/",
          "provider": "P-OPs"
        }
      ],
      "rest": [
        {
          "address": "https://celestia-blockspacerace-rest.brocha.in",
          "provider": "Brochain"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Mintscan",
        "url": "https://testnet.mintscan.io/celestia-incentivized-testnet",
        "tx_page": "https://testnet.mintscan.io/celestia-incentivized-testnet/txs/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "bitcannadevnet2",
    "status": "live",
    "network_type": "devnet",
    "pretty_name": "BitCanna Devnet-6 SDK v0.46.x",
    "chain_id": "bitcanna-dev-6",
    "bech32_prefix": "bcna",
    "daemon_name": "bcnad",
    "node_home": "$HOME/.bcna",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ubcna",
          "fixed_min_gas_price": 0.001
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/BitCannaGlobal/bcna",
      "recommended_version": "v2.0.0-beta",
      "compatible_versions": [
        "v2.0.0-beta"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/BitCannaGlobal/bcna/releases/download/v2.0.0-beta/bcna_linux_amd64.tar.gz"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/BitCannaGlobal/testnet-bcna-cosmos/main/instructions/bitcanna-dev-6/genesis.json"
      },
      "versions": [
        {
          "name": "v2.0.0-beta",
          "recommended_version": "v2.0.0-beta",
          "compatible_versions": [
            "v2.0.0-beta"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/BitCannaGlobal/bcna/releases/download/v2.0.0-beta/bcna_linux_amd64.tar.gz"
          }
        }
      ]
    },
    "peers": {
      "persistent_peers": [
        {
          "id": "85be53f499c803a10e73734018334049a7c4686d",
          "address": "212.227.151.105:26656"
        },
        {
          "id": "fb88f165477b7c7a4fbb47bb6b01448c732a0e88",
          "address": "164.68.119.233:26656"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-devnet-6.bitcanna.io/",
          "provider": "bitcanna"
        }
      ],
      "grpc": [
        {
          "address": "http://devnet-6.bitcanna.io:9090",
          "provider": "bitcanna"
        }
      ],
      "rest": [
        {
          "address": "https://lcd-devnet-6.bitcanna.io/",
          "provider": "bitcanna"
        }
      ]
    },
    "explorers": [
      {
        "url": "https://explorer-devnet-6.bitcanna.io",
        "tx_page": "https://explorer-devnet-6.bitcanna.io/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "bitcannadevnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "BitCanna Devnet-1",
    "chain_id": "bitcanna-dev-1",
    "bech32_prefix": "bcna",
    "daemon_name": "bcnad",
    "node_home": "$HOME/.bcna",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ubcna",
          "fixed_min_gas_price": 0.001
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/BitCannaGlobal/bcna",
      "recommended_version": "v2.0.1-rc6",
      "compatible_versions": [
        "v2.0.1-rc6"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/BitCannaGlobal/bcna/releases/download/v2.0.1-rc6/bcna_linux_amd64.tar.gz"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/BitCannaGlobal/bcna/main/devnets/bitcanna-dev-1/genesis.json"
      },
      "versions": [
        {
          "name": "v1.6.3",
          "recommended_version": "v1.6.3",
          "compatible_versions": [
            "v1.6.3"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/BitCannaGlobal/bcna/releases/download/v1.6.3/bcna_linux_amd64.tar.gz"
          }
        },
        {
          "name": "v2.0",
          "recommended_version": "v2.0.1-rc6",
          "compatible_versions": [
            "v2.0.1-rc6"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/BitCannaGlobal/bcna/releases/download/v2.0.1-rc6/bcna_linux_amd64.tar.gz"
          }
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "471341f9befeab582e845d5e9987b7a4889c202f",
          "address": "144.91.89.66:26656"
        }
      ],
      "persistent_peers": [
        {
          "id": "80ee9ed689bfb329cf21b94aa12978e073226db4",
          "address": "212.227.151.143:26656"
        },
        {
          "id": "20ca909b49106aacbf516ba28fa8a2409f825a82",
          "address": "212.227.151.106:26656"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-testnet.bitcanna.io",
          "provider": "bitcanna"
        },
        {
          "address": "https://bitcanna-testnet.rpc.kjnodes.com/",
          "provider": "kjnodes.com"
        },
        {
          "address": "https://testnet-bitcanna-rpc.konsortech.xyz/",
          "provider": "konsortech.xyz"
        },
        {
          "address": "https://rpc.bitcanna-dev-1.bitcanna.aviaone.com/",
          "provider": "aviaone.com"
        }
      ],
      "rest": [
        {
          "address": "https://lcd-testnet.bitcanna.io",
          "provider": "bitcanna"
        },
        {
          "address": "https://testnet-bitcanna-api.konsortech.xyz/",
          "provider": "konsortech.xyz"
        },
        {
          "address": "https://api.bitcanna-dev-1.bitcanna.aviaone.com/",
          "provider": "aviaone.com"
        },
        {
          "address": "https://bitcanna-testnet.api.kjnodes.com/",
          "provider": "kjnodes.com"
        }
      ],
      "grpc": [
        {
          "address": "http://devnet-1.bitcanna.io:9090/",
          "provider": "bitcanna"
        },
        {
          "address": "http://bitcanna-testnet.grpc.kjnodes.com:42090/",
          "provider": "kjnodes.com"
        }
      ]
    },
    "explorers": [
      {
        "url": "https://explorer.thesilverfox.pro/bitcanna",
        "tx_page": "https://explorer.thesilverfox.pro/bitcanna/tx/${txHash}"
      },
      {
        "url": "https://testnets-cosmos.mintthemoon.xyz/bitcanna",
        "tx_page": "https://testnets-cosmos.mintthemoon.xyz/bitcanna/tx/${txHash}"
      },
      {
        "url": "https://explorer.kjnodes.com/bitcanna-testnet",
        "tx_page": "https://explorer.kjnodes.com/bitcanna-testnet/tx/${txHash}"
      },
      {
        "url": "https://explorer.stavr.tech/bitcanna-dev",
        "tx_page": "https://explorer.stavr.tech/bitcanna-dev/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "babylontestnet",
    "status": "live",
    "website": "https://www.babylonchain.io",
    "network_type": "testnet",
    "pretty_name": "Babylon Testnet",
    "chain_id": "bbn-test1",
    "bech32_prefix": "bbn",
    "daemon_name": "babylond",
    "node_home": "$HOME/.babylond",
    "key_algos": [
      "secp256k1"
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "ubbn"
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ubbn"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/babylonchain/babylon",
      "recommended_version": "v0.5.0",
      "compatible_versions": [
        "v0.5.0"
      ],
      "genesis": {
        "genesis_url": "https://github.com/babylonchain/networks/raw/main/bbn-test1/genesis.tar.bz2"
      },
      "versions": [
        {
          "name": "v0.5.0",
          "recommended_version": "v0.5.0",
          "compatible_versions": [
            "v0.5.0"
          ]
        }
      ]
    },
    "logo_URIs": {
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "03ce5e1b5be3c9a81517d415f65378943996c864",
          "address": "18.207.168.204:26656",
          "provider": "Babylon foundation"
        },
        {
          "id": "a5fabac19c732bf7d814cf22e7ffc23113dc9606",
          "address": "34.238.169.221:26656",
          "provider": "Babylon foundation"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "testnet-seeds.polkachu.com:20656",
          "provider": "Polkachu"
        }
      ],
      "persistent_peers": [
        {
          "id": "03ce5e1b5be3c9a81517d415f65378943996c864",
          "address": "18.207.168.204:26656",
          "provider": "Babylon foundation"
        },
        {
          "id": "a5fabac19c732bf7d814cf22e7ffc23113dc9606",
          "address": "34.238.169.221:26656",
          "provider": "Babylon foundation"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "testnet-seeds.polkachu.com:20656",
          "provider": "Polkachu"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "rpc.testnet.babylonchain.io:26657",
          "provider": "Babylon foundation"
        }
      ],
      "rest": [
        {
          "address": "rpc.testnet.babylonchain.io:1317",
          "provider": "Babylon foundation"
        }
      ],
      "grpc": []
    },
    "explorers": [
      {
        "kind": "babylonscan",
        "url": "https://babylonscan.io"
      },
      {
        "kind": "explorers.guru",
        "url": "https://babylon.explorers.guru",
        "tx_page": "https://babylon.explorers.guru/transaction/${txHash}"
      }
    ],
    "slip44": 118
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "axelartestnet",
    "chain_id": "axelar-testnet-lisbon-3",
    "pretty_name": "Axelar Testnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://axelar.network/",
    "bech32_prefix": "axelar",
    "daemon_name": "axelard",
    "node_home": "$HOME/.axelard",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uaxl",
          "low_gas_price": 0.007,
          "average_gas_price": 0.007,
          "high_gas_price": 0.01
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uaxl"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/axelarnetwork/axelar-core"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-axelar-testnet.imperator.co:443",
          "provider": "Imperator.co"
        },
        {
          "address": "https://axelartest-rpc.quickapi.com/",
          "provider": "Quickapi"
        }
      ],
      "rest": [
        {
          "address": "https://lcd-axelar-testnet.imperator.co:443",
          "provider": "Imperator.co"
        },
        {
          "address": "https://axelartest-lcd.quickapi.com/",
          "provider": "Quickapi"
        }
      ]
    },
    "explorers": [
      {
        "kind": "axelarscan",
        "url": "https://testnet.axelarscan.io",
        "tx_page": "https://testnet.axelarscan.io/tx/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://testnet.mintscan.io/axelar-testnet",
        "tx_page": "https://testnet.mintscan.io/axelar-testnet/txs/${txHash}",
        "account_page": "https://testnet.mintscan.io/axelar-testnet/account/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "archwaytestnet",
    "chain_id": "constantine-2",
    "pretty_name": "Archway testnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://archway.io",
    "bech32_prefix": "archway",
    "daemon_name": "archwayd",
    "node_home": "$HOME/.archway",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uconst",
          "low_gas_price": 0,
          "average_gas_price": 0.025,
          "high_gas_price": 0.05
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/archway-network/archway"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/archwaytestnet/images/ArchwayBrandmark.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/archwaytestnet/images/ArchwayBrandmark.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.constantine-2.archway.tech",
          "provider": "Quickapi"
        }
      ],
      "rest": [
        {
          "address": "https://api.constantine-2.archway.tech",
          "provider": "Quickapi"
        }
      ]
    },
    "explorers": [
      {
        "kind": "archwayscan",
        "url": "https://explorer.constantine-2.archway.tech",
        "tx_page": "https://explorer.constantine-2.archway.tech/transactions/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "akashtestnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://akash.network/",
    "pretty_name": "Sandbox",
    "chain_id": "sandbox-01",
    "bech32_prefix": "akash",
    "daemon_name": "akash",
    "node_home": "$HOME/.akash",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uakt",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.025,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uakt"
        }
      ]
    },
    "codebase": {
      "git_repo": "github.com/ovrclk/akash",
      "recommended_version": "v0.22.0",
      "compatible_versions": [
        "v0.22.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/akash-network/node/releases/download/v0.22.0/akash_0.22.0_linux_amd64.zip",
        "linux/arm64": "https://github.com/akash-network/node/releases/download/v0.22.0/akash_0.22.0_linux_arm64.zip"
      },
      "versions": [
        {
          "name": "v0",
          "recommended_version": "v0.22.0",
          "compatible_versions": [
            "v0.22.0"
          ]
        }
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/akash-network/net/master/sandbox/genesis.json"
      }
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "865b21750f7fc5a2fa901192f7ccbe1212cd6d55",
          "address": "p2p.sandbox-01.aksh.pw:26656"
        }
      ],
      "persistent_peers": [
        {
          "id": "865b21750f7fc5a2fa901192f7ccbe1212cd6d55",
          "address": "p2p.sandbox-01.aksh.pw:26656"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.sandbox-01.aksh.pw:443",
          "provider": "akash"
        }
      ],
      "rest": [
        {
          "address": "https://api.sandbox-01.aksh.pw:443",
          "provider": "akash"
        }
      ],
      "grpc": [
        {
          "address": "grpc.sandbox-01.aksh.pw:9090",
          "provider": "akash"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://explorer.sandbox-01.aksh.pw/akash",
        "tx_page": "https://explorer.sandbox-01.aksh.pw/akash/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "terra2",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.terra.money/",
    "pretty_name": "Terra 2.0",
    "chain_id": "phoenix-1",
    "daemon_name": "terrad",
    "node_home": "$HOME/.terra",
    "bech32_prefix": "terra",
    "slip44": 330,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uluna",
          "fixed_min_gas_price": 0.0125,
          "low_gas_price": 0.0125,
          "average_gas_price": 0.015,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uluna"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/terra-money/core/",
      "recommended_version": "v2.3.1",
      "compatible_versions": [
        "v2.3.0",
        "v2.3.1"
      ],
      "cosmos_sdk_version": "0.46.9",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.30.0",
      "ibc_go_version": "6.1.0",
      "binaries": {
        "linux/amd64": "https://github.com/terra-money/core/releases/download/v2.3.1/terra_2.3.1_Linux_x86_64.tar.gz?checksum=sha256:fe56cdb087a848106fcfbbd5e1a76ec021f192662952a203375f98a30fb058e0",
        "linux/arm64": "https://github.com/terra-money/core/releases/download/v2.3.1/terra_2.3.1_Linux_arm64.tar.gz?checksum=sha256:c4caed39a714e363c65b7d0bfe62c7ade9463371591b31e823aafd80617b3b6b"
      },
      "genesis": {
        "name": "v2.0",
        "genesis_url": "https://tfl-phoenix-1.s3.amazonaws.com/genesis.json"
      },
      "versions": [
        {
          "name": "v2.0",
          "tag": "v2.0.1",
          "recommended_version": "v2.0.1",
          "height": 0,
          "next_version_name": "v2.1",
          "binaries": {
            "linux/amd64": "https://github.com/terra-money/core/releases/download/v2.0.1/terra_2.0.1_Linux_x86_64.tar.gz?checksum=sha256:eae23aad59b36ea2adaa541a7662a6119569279d2e6c4013e3deee96e9263b30",
            "darwin/amd64": "https://github.com/terra-money/core/releases/download/v2.0.1/terra_2.0.1_Darwin_x86_64.tar.gz?checksum=sha256:c2a6b1bff922b127a31757bdb0c8f05a34f3b1f879dee1e862f9f8b748e15a54"
          }
        },
        {
          "name": "v2.1",
          "tag": "v2.1.4",
          "recommended_version": "v2.1.4",
          "height": 890000,
          "next_version_name": "v2.2",
          "binaries": {
            "linux/amd64": "https://github.com/terra-money/core/releases/download/v2.1.4/terra_2.1.4_Linux_x86_64.tar.gz?checksum=sha256:e05b85ae2eac5df886f4f9d0ecf719b82ebe4da4fc59cae93a34af7c3e89ddfb",
            "darwin/amd64": "https://github.com/terra-money/core/releases/download/v2.1.4/terra_2.1.4_Darwin_x86_64.tar.gz?checksum=sha256:4b66ebf800cb903f7b6c07686636eff43e686f5956c9fadc307f077afd7f23bb"
          }
        },
        {
          "name": "v2.2",
          "tag": "v2.2.1",
          "height": 2979805,
          "recommended_version": "v2.2.1",
          "compatible_versions": [
            "v2.2.0",
            "v2.2.1"
          ],
          "cosmwasm_enabled": true,
          "binaries": {
            "linux/amd64": "https://github.com/terra-money/core/releases/download/v2.2.1/terra_2.2.1_Linux_x86_64.tar.gz?checksum=sha256:8a9353ae3c33a750ce2a9d236f00c12c5449c41fad96e9885a5c0b8678fcf8bc"
          }
        },
        {
          "name": "v2.3",
          "tag": "v2.3.1",
          "height": 4711800,
          "recommended_version": "v2.3.1",
          "compatible_versions": [
            "v2.3.0",
            "v2.3.1"
          ],
          "cosmos_sdk_version": "0.46.9",
          "cosmwasm_enabled": true,
          "cosmwasm_version": "0.30.0",
          "ibc_go_version": "6.1.0",
          "binaries": {
            "linux/amd64": "https://github.com/terra-money/core/releases/download/v2.3.1/terra_2.3.1_Linux_x86_64.tar.gz?checksum=sha256:fe56cdb087a848106fcfbbd5e1a76ec021f192662952a203375f98a30fb058e0",
            "linux/arm64": "https://github.com/terra-money/core/releases/download/v2.3.1/terra_2.3.1_Linux_arm64.tar.gz?checksum=sha256:c4caed39a714e363c65b7d0bfe62c7ade9463371591b31e823aafd80617b3b6b"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "406bcf90a7b29df6ae475a1f94abe04ebde805af",
          "address": "phoenix.seed.stakebin.io:16656"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:11756",
          "provider": "Polkachu"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:11756",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "terra-mainnet-seed.autostake.com:26676",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "terra-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "e726816f42831689eab9378d5d577f1d06d25716",
          "address": "terra-seed-2.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "1e094db9c147a0fd5e9793365d66736c80bfef46",
          "address": "seeds.whispernode.com:11756",
          "provider": "WhisperNode🤐"
        },
        {
          "id": "a8d12536bdcc210ac35a9f092f3295360b97830d",
          "address": "seed-terra-01.stakeflow.io:33007",
          "provider": "Genesis Lab"
        }
      ],
      "persistent_peers": [
        {
          "id": "0f1096278efafcf3f0d3bd5b6544e6b8dcc36a0e",
          "address": "206.189.129.195:26656"
        },
        {
          "id": "9038d63588e0ab421fa71582720c1efb1ee867f6",
          "address": "45.34.1.114:27656"
        },
        {
          "id": "f2069012aec5ced4e88e7e4311391eabe72bb5a3",
          "address": "node-phoenix.terra.lunastations.online:26656"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "terra-mainnet-peer.autostake.com:26676",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "86bd5cb6e762f673f1706e5889e039d5406b4b90",
          "address": "terra.seed.node75.org:10856",
          "provider": "Pro-Nodes75"
        },
        {
          "id": "a8d12536bdcc210ac35a9f092f3295360b97830d",
          "address": "peer-terra-01.stakeflow.io:33007",
          "provider": "Genesis Lab"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.terrav2.ccvalidators.com:443/",
          "provider": "CryptoCrew"
        },
        {
          "address": "https://terra-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://terra-rpc.polkachu.com",
          "provider": "polkachu"
        },
        {
          "address": "https://terra-rpc.stakely.io:443/",
          "provider": "stakely"
        },
        {
          "address": "https://rpc-terra2.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://terra-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://phoenix-rpc.terra.dev:443",
          "provider": "Terraform Labs"
        },
        {
          "address": "https://terra-rpc.publicnode.com",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "address": "https://rpc-terra-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "rest": [
        {
          "address": "https://fcd.terrav2.ccvalidators.com:443/",
          "provider": "CryptoCrew"
        },
        {
          "address": "https://lcd-terra.wildsage.io:443/",
          "provider": "WildSage Labs"
        },
        {
          "address": "https://terra-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://lcd-terra2.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://phoenix-lcd.terra.dev:443",
          "provider": "Terraform Labs"
        },
        {
          "address": "https://terra-rest.publicnode.com",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "address": "https://api-terra-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "grpc": [
        {
          "address": "terra-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "terra-grpc.polkachu.com:11790",
          "provider": "Polkachu"
        },
        {
          "address": "terra-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://terra-grpc.publicnode.com",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "address": "grpc-terra-01.stakeflow.io:1102",
          "provider": "Genesis Lab"
        }
      ]
    },
    "explorers": [
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/terra2",
        "tx_page": "https://atomscan.com/terra2/transactions/${txHash}",
        "account_page": "https://atomscan.com/terra2/accounts/${accountAddress}"
      },
      {
        "kind": "finder",
        "url": "http://finder.terra.money/",
        "tx_page": "https://finder.terra.money/mainnet/tx/${txHash}",
        "account_page": "https://finder.terra.money/mainnet/address/${accountAddress}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/terra",
        "account_page": "https://stakeflow.io/terra/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "terra",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Terra Classic",
    "chain_id": "columbus-5",
    "daemon_name": "terrad",
    "node_home": "$HOME/.terra",
    "bech32_prefix": "terra",
    "slip44": 330,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uluna",
          "low_gas_price": 28.325,
          "average_gas_price": 28.325,
          "high_gas_price": 50
        },
        {
          "denom": "usdr",
          "low_gas_price": 0.52469,
          "average_gas_price": 0.52469,
          "high_gas_price": 0.52469
        },
        {
          "denom": "uusd",
          "low_gas_price": 0.75,
          "average_gas_price": 0.75,
          "high_gas_price": 0.75
        },
        {
          "denom": "ukrw",
          "low_gas_price": 850,
          "average_gas_price": 850,
          "high_gas_price": 850
        },
        {
          "denom": "umnt",
          "low_gas_price": 2142.855,
          "average_gas_price": 2142.855,
          "high_gas_price": 2142.855
        },
        {
          "denom": "ueur",
          "low_gas_price": 0.625,
          "average_gas_price": 0.625,
          "high_gas_price": 0.625
        },
        {
          "denom": "ucny",
          "low_gas_price": 4.9,
          "average_gas_price": 4.9,
          "high_gas_price": 4.9
        },
        {
          "denom": "ujpy",
          "low_gas_price": 81.85,
          "average_gas_price": 81.85,
          "high_gas_price": 81.85
        },
        {
          "denom": "ugbp",
          "low_gas_price": 0.55,
          "average_gas_price": 0.55,
          "high_gas_price": 0.55
        },
        {
          "denom": "uinr",
          "low_gas_price": 54.4,
          "average_gas_price": 54.4,
          "high_gas_price": 54.4
        },
        {
          "denom": "ucad",
          "low_gas_price": 0.95,
          "average_gas_price": 0.95,
          "high_gas_price": 0.95
        },
        {
          "denom": "uchf",
          "low_gas_price": 0.7,
          "average_gas_price": 0.7,
          "high_gas_price": 0.7
        },
        {
          "denom": "uaud",
          "low_gas_price": 0.95,
          "average_gas_price": 0.95,
          "high_gas_price": 0.95
        },
        {
          "denom": "usgd",
          "low_gas_price": 1,
          "average_gas_price": 1,
          "high_gas_price": 1
        },
        {
          "denom": "uthb",
          "low_gas_price": 23.1,
          "average_gas_price": 23.1,
          "high_gas_price": 23.1
        },
        {
          "denom": "usek",
          "low_gas_price": 6.25,
          "average_gas_price": 6.25,
          "high_gas_price": 6.25
        },
        {
          "denom": "unok",
          "low_gas_price": 6.25,
          "average_gas_price": 6.25,
          "high_gas_price": 6.25
        },
        {
          "denom": "udkk",
          "low_gas_price": 4.5,
          "average_gas_price": 4.5,
          "high_gas_price": 4.5
        },
        {
          "denom": "uidr",
          "low_gas_price": 10900,
          "average_gas_price": 10900,
          "high_gas_price": 10900
        },
        {
          "denom": "uphp",
          "low_gas_price": 38,
          "average_gas_price": 38,
          "high_gas_price": 38
        },
        {
          "denom": "uhkd",
          "low_gas_price": 5.85,
          "average_gas_price": 5.85,
          "high_gas_price": 5.85
        },
        {
          "denom": "umyr",
          "low_gas_price": 3,
          "average_gas_price": 3,
          "high_gas_price": 3
        },
        {
          "denom": "utwd",
          "low_gas_price": 20,
          "average_gas_price": 20,
          "high_gas_price": 20
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uluna"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/classic-terra/core",
      "recommended_version": "v1.1.0",
      "compatible_versions": [
        "v1.1.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/terra-money/classic-core/releases/download/v1.1.0/terra_1.1.0_Linux_x86_64.tar.gz?checksum=sha256:fd83c14bcfadea36ad444c219ab557b9d65d2f74be0684498a5c41e3df7cb535"
      },
      "genesis": {
        "name": "1.0.5",
        "genesis_url": "https://tfl-columbus-5.s3.amazonaws.com/genesis.json"
      },
      "versions": [
        {
          "name": "1.0.5",
          "tag": "v1.0.5-full-archive",
          "height": 0,
          "next_version_name": "1.1.0",
          "binaries": {
            "linux/amd64": "https://github.com/terra-money/classic-core/releases/download/v1.0.5-full-archive/terra_1.0.5_Linux_x86_64.tar.gz?checksum=sha256:af3ee3bd99bd719d6d9a93a40af9f0bc49bb3866c68e923e284876784126f38c"
          }
        },
        {
          "name": "1.1.0",
          "tag": "v1.1.0",
          "height": 11734000,
          "recommended_version": "v1.1.0",
          "compatible_versions": [
            "v1.1.0"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/terra-money/classic-core/releases/download/v1.1.0/terra_1.1.0_Linux_x86_64.tar.gz?checksum=sha256:fd83c14bcfadea36ad444c219ab557b9d65d2f74be0684498a5c41e3df7cb535"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "terraclassic-mainnet-seed.autostake.com:26676",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "b1bdf6249fb58b4c8284aff8a9c5b2804d822261",
          "address": "seed.terra.synergynodes.com:26656",
          "provider": "www.synergynodes.com"
        },
        {
          "id": "65d86ab6024153286b823a3950e9055478effb04",
          "address": "terra.inotel.ro:26656",
          "provider": "www.inotel.ro"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "terra-classic-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "e726816f42831689eab9378d5d577f1d06d25716",
          "address": "terra-classic-seed-2.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        }
      ],
      "persistent_peers": [
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "terraclassic-mainnet-peer.autostake.com:26676",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "b1bdf6249fb58b4c8284aff8a9c5b2804d822261",
          "address": "seed.terra.synergynodes.com:26656",
          "provider": "www.synergynodes.com"
        },
        {
          "id": "65d86ab6024153286b823a3950e9055478effb04",
          "address": "terra.inotel.ro:26656",
          "provider": "www.inotel.ro"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.terrarebels.net",
          "provider": "Terra Rebels"
        },
        {
          "address": "https://terra-classic-rpc.publicnode.com",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "address": "https://rpc-terra-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://terraclassic-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://terraclassic-rpc-server-01.stakely.io",
          "provider": "Stakely"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.terrarebels.net",
          "provider": "Terra Rebels"
        },
        {
          "address": "https://terra-classic-lcd.publicnode.com",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "address": "https://api-terra-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://terraclassic-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://terraclassic-lcd-server-01.stakely.io",
          "provider": "Stakely"
        }
      ],
      "grpc": [
        {
          "address": "grpc.terrarebels.net",
          "provider": "Terra Rebels"
        },
        {
          "address": "terra-classic-grpc.publicnode.com",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "address": "grpc-terra-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "terraclassic-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/terra-luna",
        "tx_page": "https://ping.pub/terra-luna/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/terra",
        "tx_page": "https://atomscan.com/terra/transactions/${txHash}",
        "account_page": "https://atomscan.com/terra/accounts/${accountAddress}"
      },
      {
        "kind": "finder",
        "url": "https://finder.terra.money/classic",
        "tx_page": "https://finder.terra.money/classic/tx/${txHash}",
        "account_page": "https://finder.terra.money/classic/address/${accountAddress}"
      },
      {
        "kind": "finder",
        "url": "https://finder.terrarebels.net/classic",
        "tx_page": "https://finder.terrarebels.net/classic/tx/${txHash}",
        "account_page": "https://finder.terrarebels.net/classic/address/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "terpnetwork",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Terp-Network",
    "chain_id": "morocco-1",
    "bech32_prefix": "terp",
    "daemon_name": "terp",
    "node_home": "$HOME/.terp",
    "codebase": {
      "git_repo": "https://github.com/terpnetwork/terp-core.git",
      "recommended_version": "v1.0.0-stable",
      "consensus": {
        "type": "cometbft",
        "version": "0.37.0"
      },
      "compatible_versions": [
        "v1.0.0",
        "v1.0.0-stable"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/terpnetwork/mainnet/main/morocco-1/genesis.json"
      },
      "binaries": {
        "linux/amd64": "https://github.com/terpnetwork/terp-core/archive/refs/tags/v1.0.0-stable.tar.gz"
      },
      "versions": [
        {
          "name": "v1.0.0-stable",
          "recommended_version": "v1.0.0-stable",
          "compatible_versions": [
            "v1.0.0",
            "v1.0.0-stable"
          ],
          "consensus": {
            "type": "cometbft",
            "version": "0.37.0"
          },
          "binaries": {
            "linux/amd64": "https://github.com/terpnetwork/terp-core/archive/refs/tags/v1.0.0-stable.tar.gz"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/logo.png"
    },
    "peers": {
      "seeds": [
        {
          "id": "c71e63b5da517984d55d36d00dc0dc2413d0ce03",
          "address": "seed.terp.network:26656",
          "provider": "TerpNET"
        },
        {
          "id": "d8256642afae77264bcce1631d51233a9d00249b",
          "address": "terp-mainnet-seed.itrocket.net:13656",
          "provider": "itrocket.net"
        }
      ],
      "persistent_peers": [
        {
          "id": "ed791e0800539a51efd07cfdef1f3a6809412bc1",
          "address": "65.109.174.30:64656",
          "provider": "High Stakes"
        },
        {
          "id": "a81dc3bf1bb1c3837b768eeb82659eecc971890b",
          "address": "terp-mainnet-peer.itrocket.net:13656",
          "provider": "itrocket.net"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-terp.zenchainlabs.io/",
          "provider": "ZenChainLabs"
        },
        {
          "address": "https://rpc.terp.network:443",
          "provider": "TerpNET"
        },
        {
          "address": "https://rpc.terp.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "https://terp-mainnet-rpc.itrocket.net:443",
          "provider": "itrocket.net"
        },
        {
          "address": "https://terp-rpc.d-stake.xyz:443",
          "provider": "D-Stake"
        },
        {
          "address": "https://rpc.terp.nodexcapital.com:443",
          "provider": "NodeXValidator"
        }
      ],
      "rest": [
        {
          "address": "https://api-terp.zenchainlabs.io:443",
          "provider": "ZenChainLabs"
        },
        {
          "address": "https://rpc.terp.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "https://api.terp.network:443",
          "provider": "TerpNET"
        },
        {
          "address": "https://terp-mainnet-api.itrocket.net:443",
          "provider": "itrocket.net"
        },
        {
          "address": "https://terp-api.d-stake.xyz:443",
          "provider": "D-Stake"
        },
        {
          "address": "https://rest.terp.nodexcapital.com:443",
          "provider": "NodeXValidator"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.terp.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "terp-mainnet-grpc.itrocket.net:13090",
          "provider": "itrocket.net"
        },
        {
          "address": "https://terp-grpc.d-stake.xyz:443",
          "provider": "D-Stake"
        },
        {
          "address": "https://grpc.terp.nodexcapital.com:443",
          "provider": "NodeXValidator"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://explorer.nodestake.top",
        "tx_page": "https://explorer.nodestake.top/terp/tx/${txHash}",
        "account_page": "https://explorer.nodestake.top/terp/account/{$accountAddress}"
      },
      {
        "kind": "NODEXPLORER",
        "url": "https://explorer.nodexcapital.com",
        "tx_page": "https://explorer.nodexcapital.com/terp/tx/${txHash}",
        "account_page": "https://explorer.nodexcapital.com/terp/account/{$accountAddress}"
      }
    ],
    "slip44": 118
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "teritori",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://teritori.com/",
    "pretty_name": "Teritori",
    "chain_id": "teritori-1",
    "daemon_name": "teritorid",
    "node_home": "$HOME/.teritorid",
    "bech32_prefix": "tori",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "utori",
          "low_gas_price": 0,
          "average_gas_price": 0.25,
          "high_gas_price": 0.5
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "utori"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/TERITORI/teritori-chain",
      "recommended_version": "v1.3.1",
      "compatible_versions": [
        "v1.3.1"
      ],
      "genesis": {
        "genesis_url": "https://github.com/TERITORI/teritori-chain/raw/mainnet/mainnet/teritori-1/genesis.json"
      },
      "versions": [
        {
          "name": "v1.3.1",
          "recommended_version": "v1.3.1",
          "compatible_versions": [
            "v1.3.1"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/taritori/images/utori.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "babc3f3f7804933265ec9c40ad94f4da8e9e0017",
          "address": "seed.rhinostake.com:15956",
          "provider": "RHINO"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:15956",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:15956",
          "provider": "Polkachu"
        },
        {
          "id": "400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc",
          "address": "teritori.rpc.kjnodes.com:11959",
          "provider": "kjnodes"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "teritori-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "e726816f42831689eab9378d5d577f1d06d25716",
          "address": "teritori-seed-2.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "teritori-mainnet-seed.autostake.com:27166",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "8f75bd347c90fbaa2c96eb187a413bb3751b3a7e",
          "address": "seeds.whispernode.com:15956",
          "provider": "WhisperNode🤐"
        },
        {
          "id": "27b6d74c8408e033e2e5a9e966a0d15782e33596",
          "address": "seeds.nethernode.xyz:15956",
          "provider": "carbonZERO🌲"
        }
      ],
      "persistent_peers": [
        {
          "id": "8f28518afd31a42ea81bb3232a50ab0cec4dcdf7",
          "address": "10.201.190.1:26656",
          "provider": "teritori-core-1 ⛩"
        },
        {
          "id": "6046cec27c36f0a7596cb9fa9f2c5decbd4e87cb",
          "address": "10.193.255.1:26656",
          "provider": "teritori-core-2 ⛩⛩"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "teritori-mainnet-peer.autostake.com:27166",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://teritori-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://teritori-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc.teritori.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://rpc.teritori.silentvalidator.com/",
          "provider": "silent"
        },
        {
          "address": "https://teritori-rpc.brocha.in",
          "provider": "Brochain"
        },
        {
          "address": "https://teritori.nodejumper.io",
          "provider": "NODEJUMPER"
        },
        {
          "address": "https://teritori-rpc.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://rpc-teritori.mms.team/",
          "provider": "MMS"
        },
        {
          "address": "https://teritori.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://rpc.tori.bh.rocks",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://teritori-rpc.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://m-teritori.rpc.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://teritori.rpc.silknodes.io",
          "provider": "Silk Nodes"
        },
        {
          "address": "https://rpc-teritori.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://rpc-teritori.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://rpc-teritori.carbonZERO.zone:443",
          "provider": "carbonZERO🌲"
        },
        {
          "address": "https://teritori-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rpc-teritori.ecostake.com",
          "provider": "ecostake"
        }
      ],
      "rest": [
        {
          "address": "https://teritori-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://teritori-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://api.teritori.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://api.teritori.silentvalidator.com/",
          "provider": "silent"
        },
        {
          "address": "https://teritori.nodejumper.io:1317",
          "provider": "NODEJUMPER"
        },
        {
          "address": "https://teritori-api.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://api-teritori.mms.team/",
          "provider": "MMS"
        },
        {
          "address": "https://teritori.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://api.tori.bh.rocks",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://teritori-api.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://m-teritori.api.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://teritori.api.silknodes.io",
          "provider": "Silk Nodes"
        },
        {
          "address": "https://api-teritori.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://lcd-teritori.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://rest-teritori.carbonZERO.zone:443",
          "provider": "carbonZERO🌲"
        },
        {
          "address": "https://teritori-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rest-teritori.ecostake.com",
          "provider": "ecostake"
        }
      ],
      "grpc": [
        {
          "address": "teritori-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "grpc.teritori.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "teritori.nodejumper.io:9090",
          "provider": "NODEJUMPER"
        },
        {
          "address": "teritori-grpc.brocha.in:443",
          "provider": "Brochain"
        },
        {
          "address": "grpc-teritori.mms.team:443",
          "provider": "MMS"
        },
        {
          "address": "teritori-grpc.polkachu.com:15990",
          "provider": "Polkachu"
        },
        {
          "address": "teritori.grpc.silknodes.io:443",
          "provider": "Silk Nodes"
        },
        {
          "address": "teritori-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "teritori.grpc.kjnodes.com:11990",
          "provider": "kjnodes"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/teritori",
        "tx_page": "https://ezstaking.tools/teritori/txs/${txHash}",
        "account_page": "https://ezstaking.tools/teritori/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://explorer.teritori.com/teritori",
        "tx_page": "https://explorer.teritori.com/teritori/tx/${txHash}"
      },
      {
        "kind": "guru",
        "url": "https://teritori.explorers.guru/",
        "tx_page": "https://teritori.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "Brochain",
        "url": "https://explorer.brocha.in/teritori",
        "tx_page": "https://explorer.brocha.in/teritori/tx/${txHash}"
      },
      {
        "kind": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀",
        "url": "https://exp.utsa.tech/teritori",
        "tx_page": "https://exp.utsa.tech/teritori/tx/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/teritori",
        "tx_page": "https://www.mintscan.io/teritori/txs/${txHash}",
        "account_page": "https://www.mintscan.io/teritori/account/${accountAddress}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/teritori",
        "tx_page": "https://explorer.tcnetwork.io/teritori/transaction/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/teritori",
        "tx_page": "https://atomscan.com/teritori/transactions/${txHash}",
        "account_page": "https://atomscan.com/teritori/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "stride",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://stride.zone/",
    "pretty_name": "Stride",
    "chain_id": "stride-1",
    "bech32_prefix": "stride",
    "daemon_name": "strided",
    "node_home": "$HOME/.stride",
    "key_algos": [
      "ed25519"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ustrd",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 0,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ustrd"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/Stride-Labs/stride",
      "recommended_version": "v9.0.0",
      "compatible_versions": [
        "v9.0.0"
      ],
      "cosmos_sdk_version": "0.46",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "cosmwasm_version": "0.29",
      "cosmwasm_enabled": true,
      "ibc_go_version": "5.1.0",
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/Stride-Labs/testnet/main/mainnet/genesis.json"
      },
      "versions": [
        {
          "name": "v8",
          "recommended_version": "v8.0.0",
          "compatible_versions": [
            "v8.0.0"
          ],
          "cosmos_sdk_version": "0.46",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.29",
          "cosmwasm_enabled": true,
          "ibc_go_version": "5.1.0",
          "next_version_name": "v9"
        },
        {
          "name": "v9",
          "height": 3396933,
          "recommended_version": "v9.0.0",
          "compatible_versions": [
            "v9.0.0"
          ],
          "proposal": 202
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "babc3f3f7804933265ec9c40ad94f4da8e9e0017",
          "address": "seed.rhinostake.com:12256",
          "provider": "RHINO"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:12256",
          "provider": "Polkachu"
        },
        {
          "id": "cb91a11588d66cfd9c01f99541df4978a08e0e39",
          "address": "seedv1.main.stridenet.co:26656",
          "provider": "Stride"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:12256",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "stride-mainnet-seed.autostake.com:26886",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc",
          "address": "stride.rpc.kjnodes.com:11659",
          "provider": "kjnodes"
        },
        {
          "id": "86bd5cb6e762f673f1706e5889e039d5406b4b90",
          "address": "stride.seed.node75.org:10456",
          "provider": "Pro-Nodes75"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "stride-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "e726816f42831689eab9378d5d577f1d06d25716",
          "address": "stride-seed-2.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "95d0377592a657d4c0816d9845e11d659db75d5b",
          "address": "seeds.whispernode.com:12256",
          "provider": "WhisperNode🤐"
        },
        {
          "id": "27b6d74c8408e033e2e5a9e966a0d15782e33596",
          "address": "seeds.nethernode.xyz:12256",
          "provider": "carbonZERO🌲"
        },
        {
          "id": "ced7684f4d60399986cdbc1465ac00a420a14202",
          "address": "seed-stride-01.stakeflow.io:1807",
          "provider": "Genesis Lab"
        }
      ],
      "persistent_peers": [
        {
          "id": "df3f533e6b9776c11f08da804edcb810cbdd2080",
          "address": "65.108.234.23:12256",
          "provider": "Polkachu-2"
        },
        {
          "id": "e821acdaf0c7a3c60ea3cd4eb4a98a62dad06f58",
          "address": "43.201.12.41:26656",
          "provider": "Cosmostation-2"
        },
        {
          "id": "b5f9fa874781f975687018ae559f0d952d3a2e24",
          "address": "52.52.208.179:26656",
          "provider": "Cosmostation-3"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "stride-mainnet-peer.autostake.com:26886",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "ced7684f4d60399986cdbc1465ac00a420a14202",
          "address": "peer-stride-01.stakeflow.io:1807",
          "provider": "Genesis Lab"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://stride-rpc.polkachu.com/",
          "provider": "Polkachu"
        },
        {
          "address": "https://stride.rpc.chandrastation.com",
          "provider": "Chandra Station"
        },
        {
          "address": "http://rpc-stride.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "https://stride-rpc.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc.stride.silentvalidator.com/",
          "provider": "silent"
        },
        {
          "address": "https://stride.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://rpc-stride.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://rpc-stride.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://stride.nodejumper.io",
          "provider": "NODEJUMPER"
        },
        {
          "address": "https://rpc-stride.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://rpc-stride.carbonZERO.zone:443",
          "provider": "carbonZERO🌲"
        },
        {
          "address": "https://stride-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://stride-rpc.stakeandrelax.net",
          "provider": "Stake&Relax Validator 🦥"
        },
        {
          "address": "https://stride.rpc.interchain.ivaldilabs.xyz",
          "provider": "ivaldilabs"
        },
        {
          "address": "https://stride-rpc.cosmosrescue.com",
          "provider": "cosmosrescue"
        },
        {
          "address": "https://rpc-stride-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "rest": [
        {
          "address": "https://stride-api.polkachu.com/",
          "provider": "Polkachu"
        },
        {
          "address": "https://stride.api.chandrastation.com",
          "provider": "Chandra Station"
        },
        {
          "address": "http://api-stride.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "https://stride-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://api.stride.silentvalidator.com/",
          "provider": "silent"
        },
        {
          "address": "https://stride.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://api-stride.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://stride.nodejumper.io:1317",
          "provider": "NODEJUMPER"
        },
        {
          "address": "https://stride-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rest-stride.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://lcd-stride.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://rest-stride.carbonZERO.zone:443",
          "provider": "carbonZERO🌲"
        },
        {
          "address": "https://stride-api.stakeandrelax.net",
          "provider": "Stake&Relax Validator 🦥"
        },
        {
          "address": "https://stride.rest.interchain.ivaldilabs.xyz",
          "provider": "ivaldilabs"
        },
        {
          "address": "https://stride-api.cosmosrescue.com",
          "provider": "cosmosrescue"
        },
        {
          "address": "https://api-stride-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "grpc": [
        {
          "address": "stride-grpc.polkachu.com:12290",
          "provider": "Polkachu"
        },
        {
          "address": "stride-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "stride.nodejumper.io:9090",
          "provider": "NODEJUMPER"
        },
        {
          "address": "stride-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "stride.grpc.interchain.ivaldilabs.xyz:443",
          "provider": "ivaldilabs"
        },
        {
          "address": "juno-grpc.cosmosrescue.com:9090",
          "provider": "cosmosrescue"
        },
        {
          "address": "stride.grpc.kjnodes.com:11690",
          "provider": "kjnodes"
        },
        {
          "address": "grpc-stride-01.stakeflow.io:1802",
          "provider": "Genesis Lab"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/stride",
        "tx_page": "https://ezstaking.tools/stride/txs/${txHash}",
        "account_page": "https://ezstaking.tools/stride/account/${accountAddress}"
      },
      {
        "kind": "Apollo",
        "url": "https://apollo.chandrastation.com/stride",
        "tx_page": "https://apollo.chandrastation.com/stride/tx/${txHash}",
        "account_page": "https://apollo.chandrastation.com/stride/account/${accountAddress}"
      },
      {
        "kind": "Stride Ping Pub",
        "url": "https://explorer.stride.zone/stride",
        "tx_page": "https://explorer.stride.zone/stride/tx/${txHash}",
        "account_page": "https://explorer.stride.zone/stride/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/stride",
        "tx_page": "https://www.mintscan.io/stride/txs/${txHash}",
        "account_page": "https://www.mintscan.io/stride/account/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/stride",
        "tx_page": "https://bigdipper.live/stride/transactions/${txHash}",
        "account_page": "https://bigdipper.live/stride/accounts/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/stride",
        "tx_page": "https://atomscan.com/stride/transactions/${txHash}",
        "account_page": "https://atomscan.com/stride/accounts/${accountAddress}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/stride",
        "account_page": "https://stakeflow.io/stride/accounts/${accountAddress}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stride-chain-logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg"
    }
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "starname",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.starname.me/",
    "pretty_name": "Starname",
    "chain_id": "iov-mainnet-ibc",
    "bech32_prefix": "star",
    "slip44": 234,
    "alternative_slip44s": [
      118
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "uiov",
          "low_gas_price": 1,
          "average_gas_price": 2,
          "high_gas_price": 3
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uiov"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/iov-one/starnamed",
      "recommended_version": "v0.10.18",
      "compatible_versions": [
        "v0.10.17",
        "v0.10.18"
      ],
      "genesis": {
        "genesis_url": "https://gist.githubusercontent.com/davepuchyr/6bea7bf369064d118195e9b15ea08a0f/raw/genesis.json"
      },
      "versions": [
        {
          "name": "v0.10.18",
          "recommended_version": "v0.10.18",
          "compatible_versions": [
            "v0.10.17",
            "v0.10.18"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg"
    },
    "peers": {
      "persistent_peers": [
        {
          "id": "9aabe0ac122f3104d8fc098e19c66714c6f1ace9",
          "address": "3.37.140.5:26656"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-iov.keplr.app",
          "provider": "chainapsis"
        },
        {
          "address": "https://rpc-starname-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://starname.nodejumper.io",
          "provider": "NODEJUMPER"
        }
      ],
      "rest": [
        {
          "address": "https://lcd-iov.keplr.app",
          "provider": "chainapsis"
        },
        {
          "address": "https://api-starname-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://starname.nodejumper.io:1317",
          "provider": "NODEJUMPER"
        }
      ],
      "grpc": [
        {
          "address": "grpc-starname-ia.cosmosia.notional.ventures:443",
          "provider": "starname"
        },
        {
          "address": "starname.nodejumper.io:9090",
          "provider": "NODEJUMPER"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/starname",
        "tx_page": "https://www.mintscan.io/starname/txs/${txHash}",
        "account_page": "https://www.mintscan.io/starname/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/starname",
        "tx_page": "https://ping.pub/starname/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/starname",
        "tx_page": "https://atomscan.com/starname/transactions/${txHash}",
        "account_page": "https://atomscan.com/starname/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "stargaze",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://stargaze.zone/",
    "pretty_name": "Stargaze",
    "chain_id": "stargaze-1",
    "bech32_prefix": "stars",
    "daemon_name": "starsd",
    "node_home": "$HOME/.starsd",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ustars"
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ustars"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/public-awesome/stargaze",
      "recommended_version": "v9.0.0",
      "compatible_versions": [
        "v9.0.0"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/public-awesome/mainnet/main/stargaze-1/genesis.tar.gz"
      },
      "versions": [
        {
          "name": "v9.0.0",
          "recommended_version": "v9.0.0",
          "compatible_versions": [
            "v9.0.0"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "70ed826888f102c7c1ceb4d07287956628a53508",
          "address": "174.138.124.7:36656"
        },
        {
          "id": "722079345d941cd2da3daedea548c909d9b83ec5",
          "address": "104.248.101.113:36656"
        },
        {
          "id": "d5fc4f479c4e212c96dff5704bb2468ea03b8ae3",
          "address": "sg-seed.blockpane.com:26656",
          "provider": "[ block pane ]"
        },
        {
          "id": "babc3f3f7804933265ec9c40ad94f4da8e9e0017",
          "address": "seed.rhinostake.com:13756",
          "provider": "RHINO"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:13756",
          "provider": "Polkachu"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "stargaze-mainnet-seed.autostake.com:26986",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "stargaze-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "604f4baaa30cd3f50d080bf45806d222c7fadc94",
          "address": "seeds.whispernode.com:13756",
          "provider": "WhisperNode🤐"
        },
        {
          "id": "400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc",
          "address": "stargaze.rpc.kjnodes.com:15859",
          "provider": "kjnodes"
        }
      ],
      "persistent_peers": [
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "stargaze-mainnet-peer.autostake.com:26986",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "344c62c700a59de6137ccd6cade56721cb1e9777",
          "address": "stargaze.ramuchi.tech:26656",
          "provider": "ramuchi.tech"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.stargaze-apis.com/",
          "provider": "Stargaze Foundation"
        },
        {
          "address": "https://rpc-stargaze.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://rpc-stargaze.ezstaking.dev",
          "provider": "EZStaking.io"
        },
        {
          "address": "https://stargaze-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-stargaze-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://stargaze.c29r3.xyz:443/rpc/",
          "provider": "c29r3"
        },
        {
          "address": "https://stargaze-rpc.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://rpc-stargaze.d-stake.xyz",
          "provider": "D-stake"
        },
        {
          "address": "https://rpc.stargaze.silentvalidator.com/",
          "provider": "silent"
        },
        {
          "address": "https://rpc-stargaze.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://stargaze-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://stargaze-rpc.ramuchi.tech",
          "provider": "ramuchi.tech"
        },
        {
          "address": "https://stargaze.rpc.kjnodes.com",
          "provider": "kjnodes"
        }
      ],
      "rest": [
        {
          "address": "https://rest.stargaze-apis.com/",
          "provider": "Stargaze Foundation"
        },
        {
          "address": "https://api-stargaze.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://api-stargaze.ezstaking.dev",
          "provider": "EZStaking.io"
        },
        {
          "address": "https://api-stargaze-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://stargaze.c29r3.xyz:443/api/",
          "provider": "c29r3"
        },
        {
          "address": "https://stargaze-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://stargaze-api.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://api-stargaze.d-stake.xyz",
          "provider": "D-stake"
        },
        {
          "address": "https://api.stargaze.silentvalidator.com/",
          "provider": "silent"
        },
        {
          "address": "https://stargaze-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://lcd-stargaze.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://stargaze-api.ramuchi.tech",
          "provider": "ramuchi.tech"
        },
        {
          "address": "https://stargaze.api.kjnodes.com",
          "provider": "kjnodes"
        }
      ],
      "grpc": [
        {
          "address": "grpc-stargaze-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "stargaze-grpc.polkachu.com:13790",
          "provider": "Polkachu"
        },
        {
          "address": "stargaze-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://stargaze-grpc.ramuchi.tech:9090",
          "provider": "ramuchi.tech"
        },
        {
          "address": "stargaze.grpc.kjnodes.com:15890",
          "provider": "kjnodes"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/stargaze",
        "tx_page": "https://ezstaking.tools/stargaze/txs/${txHash}",
        "account_page": "https://ezstaking.tools/stargaze/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/stargaze/",
        "tx_page": "https://www.mintscan.io/stargaze/txs/${txHash}",
        "account_page": "https://www.mintscan.io/stargaze/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/stargaze",
        "tx_page": "https://ping.pub/stargaze/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/stargaze",
        "tx_page": "https://atomscan.com/stargaze/transactions/${txHash}",
        "account_page": "https://atomscan.com/stargaze/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "stafihub",
    "chain_id": "stafihub-1",
    "website": "https://stafihub.io/",
    "pretty_name": "StaFi Hub",
    "status": "live",
    "network_type": "mainnet",
    "bech32_prefix": "stafi",
    "daemon_name": "stafihubd",
    "node_home": "$HOME/.stafihub",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ufis",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ufis"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/stafihub/stafihub",
      "recommended_version": "v0.4.1",
      "compatible_versions": [
        "v0.4.1"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/stafihub/network/main/mainnets/stafihub-1(dragonberry)/genesis.json"
      },
      "versions": [
        {
          "name": "v0.2",
          "height": 0,
          "recommended_version": "v0.2.3",
          "compatible_versions": [
            "v0.2.0",
            "v0.2.1",
            "v0.2.2",
            "v0.2.3"
          ]
        },
        {
          "name": "v0.3",
          "height": 2626590,
          "recommended_version": "v0.3.0",
          "compatible_versions": [
            "v0.3.0"
          ]
        },
        {
          "name": "v0.4",
          "height": 3766566,
          "recommended_version": "v0.4.1",
          "compatible_versions": [
            "v0.4.0",
            "v0.4.1"
          ]
        }
      ]
    },
    "peers": {
      "persistent_peers": [
        {
          "id": "bed296dfadd972ed07cab82c87a0ee5c182dea43",
          "address": "18.136.189.120:26656"
        },
        {
          "id": "045fe6e054a5abe35f5433bd333f0a1b18aa28cf",
          "address": "45.136.28.11:26656"
        },
        {
          "id": "20c0b45c47426c51b3187aa5dca82d9900c2fb36",
          "address": "5.161.88.157:26656"
        },
        {
          "id": "70230067eb1e668d2566329e727c72c930e54de3",
          "address": "116.202.30.7:26656"
        },
        {
          "id": "03f3cb61c7c472044c37aeededde2ffe8884fa02",
          "address": "159.69.108.86:26656"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://public-rpc1.stafihub.io:443",
          "provider": "StaFiHub"
        },
        {
          "address": "https://public-rpc2.stafihub.io:443",
          "provider": "StaFiHub"
        },
        {
          "address": "https://rpc.stafihub.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "https://stafihub.nodejumper.io",
          "provider": "NODEJUMPER"
        }
      ],
      "rest": [
        {
          "address": "https://public-rest-rpc1.stafihub.io",
          "provider": "StaFiHub"
        },
        {
          "address": "https://public-rest-rpc2.stafihub.io",
          "provider": "StaFiHub"
        },
        {
          "address": "https://api.stafihub.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://stafihub.nodejumper.io:1317",
          "provider": "NODEJUMPER"
        }
      ],
      "grpc": [
        {
          "address": "public-grpc-rpc1.stafihub.io:443",
          "provider": "StaFiHub"
        },
        {
          "address": "public-grpc-rpc2.stafihub.io:443",
          "provider": "StaFiHub"
        },
        {
          "address": "grpc.stafihub.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "stafihub.nodejumper.io:9090",
          "provider": "NODEJUMPER"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/stafi",
        "tx_page": "https://www.mintscan.io/stafi/txs/${txHash}"
      },
      {
        "kind": "ping-pub",
        "url": "https://ping.pub/stafihub",
        "tx_page": "https://ping.pub/stafihub/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/stafihub",
        "tx_page": "https://atomscan.com/stafihub/transactions/${txHash}",
        "account_page": "https://atomscan.com/stafihub/accounts/${accountAddress}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/stafihub-chain-logo.png"
    },
    "keywords": [
      "liquid staking"
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "sommelier",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://sommelier.finance/",
    "pretty_name": "Sommelier",
    "chain_id": "sommelier-3",
    "bech32_prefix": "somm",
    "daemon_name": "sommelier",
    "node_home": "$HOME/.sommelier",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "usomm"
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "usomm"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/PeggyJV/sommelier",
      "recommended_version": "v6.0.0",
      "compatible_versions": [
        "v6.0.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/PeggyJV/sommelier/releases/download/v6.0.0/sommelier_6.0.0_linux_amd64.tar.gz",
        "linux/arm64": "https://github.com/PeggyJV/sommelier/releases/download/v6.0.0/sommelier_6.0.0_linux_arm64.tar.gz",
        "darwin/amd64": "https://github.com/PeggyJV/sommelier/releases/download/v6.0.0/sommelier_6.0.0_darwin_amd64.tar.gz",
        "darwin/arm64": "https://github.com/PeggyJV/sommelier/releases/download/v6.0.0/sommelier_6.0.0_darwin_arm64.tar.gz",
        "windows/amd64": "https://github.com/PeggyJV/sommelier/releases/download/v6.0.0/sommelier_6.0.0_windows_amd64.tar.gz"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/PeggyJV/sommelier/main/contrib/mainnet/sommelier-2/genesis.json"
      },
      "versions": [
        {
          "name": "v5.0.0",
          "recommended_version": "v5.0.0",
          "compatible_versions": [
            "v5.0.0"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/PeggyJV/sommelier/releases/download/v5.0.0/sommelier_5.0.0_linux_amd64.tar.gz",
            "linux/arm64": "https://github.com/PeggyJV/sommelier/releases/download/v5.0.0/sommelier_5.0.0_linux_arm64.tar.gz",
            "darwin/amd64": "https://github.com/PeggyJV/sommelier/releases/download/v5.0.0/sommelier_5.0.0_darwin_amd64.tar.gz",
            "darwin/arm64": "https://github.com/PeggyJV/sommelier/releases/download/v5.0.0/sommelier_5.0.0_darwin_arm64.tar.gz",
            "windows/amd64": "https://github.com/PeggyJV/sommelier/releases/download/v5.0.0/sommelier_5.0.0_windows_amd64.tar.gz"
          }
        },
        {
          "name": "v6.0.0",
          "recommended_version": "v6.0.0",
          "compatible_versions": [
            "v6.0.0"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/PeggyJV/sommelier/releases/download/v6.0.0/sommelier_6.0.0_linux_amd64.tar.gz",
            "linux/arm64": "https://github.com/PeggyJV/sommelier/releases/download/v6.0.0/sommelier_6.0.0_linux_arm64.tar.gz",
            "darwin/amd64": "https://github.com/PeggyJV/sommelier/releases/download/v6.0.0/sommelier_6.0.0_darwin_amd64.tar.gz",
            "darwin/arm64": "https://github.com/PeggyJV/sommelier/releases/download/v6.0.0/sommelier_6.0.0_darwin_arm64.tar.gz",
            "windows/amd64": "https://github.com/PeggyJV/sommelier/releases/download/v6.0.0/sommelier_6.0.0_windows_amd64.tar.gz"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "c94fd60124e3656df54ff965d178e36c760c195d",
          "address": "65.108.57.224:26656"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:14156",
          "provider": "Polkachu"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:14156",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "sommelier-mainnet-seed.autostake.com:27176",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ],
      "persistent_peers": [
        {
          "id": "6533beebc826f84376e503bbc3265b07b26b9ad5",
          "address": "sommelier.standardcryptovc.com:26656",
          "provider": "standardcrypto"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "sommelier-mainnet-peer.autostake.com:27176",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://sommelier-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-sommelier.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://sommelier-rpc.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://sommelier-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rpc.sommelier.nodexcapital.com",
          "provider": "⚡NodeX Validator⚡"
        }
      ],
      "rest": [
        {
          "address": "https://api-sommelier.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://sommelier-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://sommelier-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://sommelier-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rest.sommelier.nodexcapital.com",
          "provider": "⚡NodeX Validator⚡"
        }
      ],
      "grpc": [
        {
          "address": "sommelier-grpc.polkachu.com:14190",
          "provider": "Polkachu"
        },
        {
          "address": "sommelier-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "sommelier-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://grpc.sommelier.nodexcapital.com",
          "provider": "⚡NodeX Validator⚡"
        }
      ]
    },
    "explorers": [
      {
        "kind": "sommscan",
        "url": "https://sommscan.io",
        "tx_page": "https://sommscan.io"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/sommelier",
        "tx_page": "https://www.mintscan.io/sommelier/txs/${txHash}",
        "account_page": "https://www.mintscan.io/sommelier/account/${accountAddress}"
      },
      {
        "kind": "NODEXPLORER",
        "url": "https://explorer.nodexcapital.com/sommelier",
        "tx_page": "https://explorer.nodexcapital.com/sommelier/tx/${txHash}",
        "account_page": "https://explorer.nodexcapital.com/sommelier/account/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/sommelier",
        "tx_page": "https://atomscan.com/sommelier/transactions/${txHash}",
        "account_page": "https://atomscan.com/sommelier/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "sifchain",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://sifchain.finance/",
    "pretty_name": "Sifchain",
    "chain_id": "sifchain-1",
    "bech32_prefix": "sif",
    "daemon_name": "sifnoded",
    "node_home": "$HOME/.sifnoded",
    "fees": {
      "fee_tokens": [
        {
          "denom": "rowan",
          "low_gas_price": 1000000000000,
          "average_gas_price": 1500000000000,
          "high_gas_price": 2000000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "rowan"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/Sifchain/sifnode.git",
      "recommended_version": "v1.0.14-beta",
      "compatible_versions": [
        "v1.0.14-beta"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/Sifchain/sifnode/releases/download/v1.0.14-beta/sifnoded-v1.0.14-beta-linux-amd64.zip"
      },
      "genesis": {
        "genesis_url": "https://github.com/Sifchain/networks/blob/master/betanet/sifchain-1/genesis.json.gz?raw=true"
      },
      "versions": [
        {
          "name": "v1.0.14-beta",
          "recommended_version": "v1.0.14-beta",
          "compatible_versions": [
            "v1.0.14-beta"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/Sifchain/sifnode/releases/download/v1.0.14-beta/sifnoded-v1.0.14-beta-linux-amd64.zip"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "sifchain-mainnet-seed.autostake.com:26686",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:13256",
          "provider": "Polkachu"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "sifchain-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        }
      ],
      "persistent_peers": [
        {
          "id": "0d4981bdaf4d5d73bad00af3b1fa9d699e4d3bc0",
          "address": "44.235.108.41:26656"
        },
        {
          "id": "bcc2d07a14a8a0b3aa202e9ac106dec0bef91fda",
          "address": "13.55.247.60:26656"
        },
        {
          "id": "663dec65b754aceef5fcccb864048305208e7eb2",
          "address": "34.248.110.88:26656"
        },
        {
          "id": "0120f0a48e7e81cc98829ef4f5b39480f11ecd5a",
          "address": "52.76.185.17:26656"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "sifchain-mainnet-peer.autostake.com:26686",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.sifchain.finance:443"
        },
        {
          "address": "https://sifchain-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-sifchain-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://sifchain-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://sif-rpc.kleomedes.network",
          "provider": "Kleomedes"
        }
      ],
      "rest": [
        {
          "address": "https://api.sifchain.finance:443"
        },
        {
          "address": "https://api-sifchain-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://sifchain-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://sif-api.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://sifchain-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ],
      "grpc": [
        {
          "address": "grpc-sifchain-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "sifchain-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "sifchain-grpc.polkachu.com:13290",
          "provider": "Polkachu"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/sifchain",
        "tx_page": "https://ezstaking.tools/sifchain/txs/${txHash}",
        "account_page": "https://ezstaking.tools/sifchain/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/sifchain",
        "tx_page": "https://ping.pub/sifchain/tx/${txHash}"
      },
      {
        "kind": "explorers.guru",
        "url": "https://sifchain.explorers.guru",
        "tx_page": "https://sifchain.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/sifchain",
        "tx_page": "https://www.mintscan.io/sifchain/txs/${txHash}",
        "account_page": "https://www.mintscan.io/sifchain/account/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/sifchain",
        "tx_page": "https://atomscan.com/sifchain/transactions/${txHash}",
        "account_page": "https://atomscan.com/sifchain/accounts/${accountAddress}"
      }
    ],
    "slip44": 118
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "shentu",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.shentu.technology/",
    "pretty_name": "Shentu",
    "chain_id": "shentu-2.2",
    "bech32_prefix": "certik",
    "daemon_name": "shentud",
    "node_home": "$HOME/.shentud",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uctk"
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uctk"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/ShentuChain/shentu",
      "recommended_version": "v2.4.0",
      "compatible_versions": [
        "v2.6.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/shentufoundation/shentu/releases/download/v2.6.0/shentud_2.6.0_linux_amd64",
        "darwin/amd64": "https://github.com/shentufoundation/shentu/releases/download/v2.6.0/shentud_2.6.0_arm64_macos",
        "windows/amd64": "https://github.com/shentufoundation/shentu/releases/download/v2.6.0/shentud_2.6.0_win_x86_64.exe"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/ShentuChain/mainnet/main/shentu-2.2/genesis.json"
      },
      "versions": [
        {
          "name": "v2.4.0",
          "recommended_version": "v2.4.0",
          "compatible_versions": [
            "v2.6.0"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/shentufoundation/shentu/releases/download/v2.6.0/shentud_2.6.0_linux_amd64",
            "darwin/amd64": "https://github.com/shentufoundation/shentu/releases/download/v2.6.0/shentud_2.6.0_arm64_macos",
            "windows/amd64": "https://github.com/shentufoundation/shentu/releases/download/v2.6.0/shentud_2.6.0_win_x86_64.exe"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:14056",
          "provider": "Polkachu"
        },
        {
          "id": "3edd4e16b791218b623f883d04f8aa5c3ff2cca6",
          "address": "shentu-seed.panthea.eu:36656",
          "provider": "Panthea EU"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "shentu-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "e726816f42831689eab9378d5d577f1d06d25716",
          "address": "shentu-seed-2.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "f97807210f9547b8a5016fb18000b46072ca5e30",
          "address": "seed-shentu-01.stakeflow.io:2407",
          "provider": "Genesis Lab"
        }
      ],
      "persistent_peers": [
        {
          "id": "207c47bed435e4174844064ef3f51ca35b059de2",
          "address": "shentu-peer.panthea.eu:26656",
          "provider": "Panthea EU"
        },
        {
          "id": "8f91d396e3395210ef3a8394d48d1888af6d01cd",
          "address": "shentu.ramuchi.tech:56656",
          "provider": "ramuchi.tech"
        },
        {
          "id": "f97807210f9547b8a5016fb18000b46072ca5e30",
          "address": "peer-shentu-01.stakeflow.io:2407",
          "provider": "Genesis Lab"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://shenturpc.noopsbycertik.com/",
          "provider": "Shentu"
        },
        {
          "address": "https://certik-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://shentu-rpc.ramuchi.tech",
          "provider": "ramuchi.tech"
        },
        {
          "address": "https://rpc-shentu-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "rest": [
        {
          "address": "https://rest.noopsbycertik.com/",
          "provider": "Shentu"
        },
        {
          "address": "https://certik-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://shentu-api.ramuchi.tech",
          "provider": "ramuchi.tech"
        },
        {
          "address": "https://api-shentu-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "grpc": [
        {
          "address": "certik-grpc.polkachu.com:14090",
          "provider": "Polkachu"
        },
        {
          "address": "https://shentu-grpc.ramuchi.tech:12090",
          "provider": "ramuchi.tech"
        },
        {
          "address": "grpc-shentu-01.stakeflow.io:2402",
          "provider": "Genesis Lab"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/shentu",
        "tx_page": "https://ezstaking.tools/shentu/txs/${txHash}",
        "account_page": "https://ezstaking.tools/shentu/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/shentu",
        "tx_page": "https://www.mintscan.io/shentu/txs/${txHash}",
        "account_page": "https://www.mintscan.io/shentu/account/${accountAddress}"
      },
      {
        "kind": "Shentu Explorer",
        "url": "https://explorer.shentu.technology/?net=shentu-2.2",
        "tx_page": "https://explorer.shentu.technology/transactions/${txHash}?net=shentu-2.2"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/shentu",
        "tx_page": "https://ping.pub/shentu/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/shentu",
        "tx_page": "https://atomscan.com/shentu/transactions/${txHash}",
        "account_page": "https://atomscan.com/shentu/accounts/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/shentu",
        "tx_page": "https://bigdipper.live/shentu/transactions/${txHash}",
        "account_page": "https://bigdipper.live/shentu/accounts/${accountAddress}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/shentu",
        "account_page": "https://stakeflow.io/shentu/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "shareledger",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.sharering.network/",
    "pretty_name": "Shareledger",
    "chain_id": "ShareRing-VoyagerNet",
    "bech32_prefix": "shareledger",
    "daemon_name": "shareledger",
    "node_home": "$HOME/.shareledger",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "nshr",
          "fixed_min_gas_price": 0,
          "low_gas_price": 2000,
          "average_gas_price": 3000,
          "high_gas_price": 4000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "nshr"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/ShareRing/Shareledger/",
      "recommended_version": "1.4.1",
      "compatible_versions": [
        "1.4.1"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/ShareRing/Shareledger/releases/download/v1.4.1/shareledger"
      },
      "cosmos_sdk_version": "0.45",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "cosmwasm_version": "0.27",
      "cosmwasm_enabled": true,
      "ibc_go_version": "3.0.0",
      "ics_enabled": [
        "ics20-1"
      ],
      "genesis": {
        "name": "v1",
        "genesis_url": "https://github.com/ShareRing/Shareledger/releases/download/v1.2.0/genesis.json"
      },
      "versions": [
        {
          "name": "v1",
          "tag": "v1.2.0",
          "height": 4382920,
          "next_version_name": "v2"
        },
        {
          "name": "v2",
          "tag": "v1.3.0",
          "height": 6905000,
          "next_version_name": "v3"
        },
        {
          "name": "v3",
          "tag": "v1.4.0",
          "height": 7325550,
          "next_version_name": "v4"
        },
        {
          "name": "v4",
          "tag": "v1.4.1",
          "height": 7507600,
          "next_version_name": "v5",
          "recommended_version": "1.4.1",
          "compatible_versions": [
            "1.4.1"
          ],
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.27",
          "cosmwasm_enabled": true,
          "ibc_go_version": "3.0.0",
          "ics_enabled": [
            "ics20-1"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/ShareRing/Shareledger/releases/download/v1.4.1/shareledger"
          }
        }
      ]
    },
    "peers": {
      "seeds": []
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.explorer.shareri.ng",
          "provider": "ShareRing"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.explorer.shareri.ng/",
          "provider": "ShareRing"
        }
      ],
      "grpc": [
        {
          "address": "rpc.explorer.shareri.ng:443",
          "provider": "ShareRing"
        }
      ]
    },
    "explorers": [
      {
        "kind": "big dipper",
        "url": "https://explorer.shareri.ng",
        "tx_page": "https://explorer.shareri.ng/transactions/${txHash}",
        "account_page": "https://explorer.shareri.ng/accounts/${accountAddress}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/chain-logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.svg"
    },
    "keywords": [
      "id"
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "sentinel",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://sentinel.co/",
    "pretty_name": "Sentinel",
    "chain_id": "sentinelhub-2",
    "bech32_prefix": "sent",
    "daemon_name": "sentinelhub",
    "node_home": "$HOME/.sentinelhub",
    "slip44": 118,
    "key_algos": [
      "secp256k1"
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "udvpn",
          "low_gas_price": 0.1,
          "average_gas_price": 0.25,
          "high_gas_price": 0.4
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "udvpn"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/sentinel-official/hub",
      "recommended_version": "v0.9.3",
      "compatible_versions": [
        "v0.9.3"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/sentinel-official/networks/main/sentinelhub-2/genesis.zip"
      },
      "versions": [
        {
          "name": "v0.9.3",
          "recommended_version": "v0.9.3",
          "compatible_versions": [
            "v0.9.3"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "sentinel-mainnet-seed.autostake.com:26706",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "sentinel-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "e726816f42831689eab9378d5d577f1d06d25716",
          "address": "sentinel-seed-2.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "e8b2ebbd5e90bd89cb89160dd040fda7d04984a4",
          "address": "seeds.badgerbite.io:26656",
          "provider": "BadgerBite"
        },
        {
          "id": "1a409560619766355f818ef2e42c935453782635",
          "address": "seeds.whispernode.com:17256",
          "provider": "WhisperNode🤐"
        }
      ],
      "persistent_peers": [
        {
          "id": "9174af5f16f74660cccf49f893d243949af45f7f",
          "address": "54.177.29.46:26656"
        },
        {
          "id": "a77f6a094578dad899e2f40e0626b4c6d4705311",
          "address": "3.36.165.232:26656"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "sentinel-mainnet-peer.autostake.com:26706",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-sentinel-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://rpc-sentinel.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://rpc.sentinel.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://rpc.sentinel.quokkastake.io",
          "provider": "🐹 Quokka Stake"
        },
        {
          "address": "https://sentinel-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://sentinel-rpc.badgerbite.io/",
          "provider": "BadgerBite"
        },
        {
          "address": "https://sentinel-rpc2.badgerbite.io",
          "provider": "BadgerBite"
        }
      ],
      "rest": [
        {
          "address": "https://api-sentinel-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://sentinel-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://lcd-sentinel.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://api.sentinel.quokkastake.io",
          "provider": "🐹 Quokka Stake"
        }
      ],
      "grpc": [
        {
          "address": "grpc-sentinel-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "sentinel.grpcui.chaintools.host:443",
          "provider": "ChainTools"
        },
        {
          "address": "sentinel-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/sentinel",
        "tx_page": "https://www.mintscan.io/sentinel/txs/${txHash}",
        "account_page": "https://www.mintscan.io/sentinel/account/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/sentinel",
        "tx_page": "https://atomscan.com/sentinel/transactions/${txHash}",
        "account_page": "https://atomscan.com/sentinel/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "secretnetwork",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://scrt.network/",
    "pretty_name": "Secret Network",
    "chain_id": "secret-4",
    "bech32_prefix": "secret",
    "daemon_name": "secretd",
    "node_home": "$HOME/.secretd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 529,
    "alternative_slip44s": [
      118
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "uscrt",
          "fixed_min_gas_price": 0.0125,
          "low_gas_price": 0.0125,
          "average_gas_price": 0.1,
          "high_gas_price": 0.25
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uscrt"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/scrtlabs/SecretNetwork",
      "recommended_version": "v1.8.0",
      "compatible_versions": [
        "v1.8.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/scrtlabs/SecretNetwork/releases/download/v1.8.0/secretnetwork_1.8.0_mainnet_goleveldb_amd64.deb"
      },
      "genesis": {
        "genesis_url": "https://github.com/scrtlabs/SecretNetwork/releases/download/v1.2.0/genesis.json"
      },
      "versions": [
        {
          "name": "v1.2",
          "tag": "v1.2",
          "height": 0,
          "next_version_name": "v1.3"
        },
        {
          "name": "v1.3",
          "tag": "v1.3",
          "height": 3343000,
          "next_version_name": "v1.4"
        },
        {
          "name": "v1.4",
          "tag": "v1.4",
          "height": 5309200,
          "next_version_name": "v1.5"
        },
        {
          "name": "v1.5",
          "tag": "v1.5",
          "height": 5941700,
          "next_version_name": "v1.6"
        },
        {
          "name": "v1.6",
          "tag": "v1.6",
          "height": 6537300,
          "next_version_name": "v1.7"
        },
        {
          "name": "v1.7",
          "tag": "v1.7.1",
          "height": 7719500,
          "next_version_name": "v1.8"
        },
        {
          "name": "v1.8",
          "tag": "v1.8.0",
          "height": 7760000,
          "next_version_name": "v1.9",
          "recommended_version": "v1.8.0",
          "compatible_versions": [
            "v1.8.0"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/scrtlabs/SecretNetwork/releases/download/v1.8.0/secretnetwork_1.8.0_mainnet_goleveldb_amd64.deb"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "6fb7169f7630da9468bf7cc0bcbbed1eb9ed0d7b",
          "address": "scrt-seed-01.scrtlabs.com:26656",
          "provider": "SCRT Labs"
        },
        {
          "id": "ab6394e953e0b570bb1deeb5a8b387aa0dc6188a",
          "address": "scrt-seed-02.scrtlabs.com:26656",
          "provider": "SCRT Labs"
        },
        {
          "id": "9cdaa5856e0245ecd73bd464308fb990fbc53b57",
          "address": "scrt-seed-03.scrtlabs.com:26656",
          "provider": "SCRT Labs"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:17156",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "d6a6edd7d3d04b59955e135e2d27b7dcc285ead7",
          "address": "seeds.whispernode.com:17156",
          "provider": "WhisperNode🤐"
        },
        {
          "id": "5b0d6ef879fe1326045fa18d5bf767c5968704e6",
          "address": "secretnetwork-mainnet-seed.autostake.com:26656",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ],
      "persistent_peers": [
        {
          "id": "5b0d6ef879fe1326045fa18d5bf767c5968704e6",
          "address": "secretnetwork-mainnet-peer.autostake.com:26656",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "apis": {
      "grpc-web": [
        {
          "address": "https://wgrpc.secret.express",
          "provider": "Secret Community API team - Secret Express"
        }
      ],
      "rpc": [
        {
          "address": "https://rpc.secret.express",
          "provider": "Secret Community API team - Secret Express"
        },
        {
          "address": "https://scrt.public-rpc.com",
          "provider": "ANKR"
        },
        {
          "address": "https://secret-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc-secret.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://secret-rpc.bharvest.io",
          "provider": "B-Harvest"
        },
        {
          "address": "https://1rpc.io/scrt-rpc",
          "provider": "1RPC - Automata Network"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.secret.express",
          "provider": "Secret Community API team - Secret Express"
        },
        {
          "address": "https://secret-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://lcd-secret.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "http://secretnetwork-mainnet-lcd.autostake.com:1317",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://secret-api.bharvest.io",
          "provider": "B-Harvest"
        },
        {
          "address": "https://1rpc.io/scrt-lcd",
          "provider": "1RPC - Automata Network"
        }
      ],
      "grpc": [
        {
          "address": "secret-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "secretnetwork-mainnet-grpc.autostake.com:9090",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/secretnetwork",
        "tx_page": "https://ezstaking.tools/secretnetwork/txs/${txHash}",
        "account_page": "https://ezstaking.tools/secretnetwork/account/${accountAddress}"
      },
      {
        "kind": "secret nodes",
        "url": "https://secretnodes.com/secret/chains/secret-4",
        "tx_page": "https://secretnodes.com/secret/chains/secret-4/transactions/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/secret",
        "tx_page": "https://ping.pub/secret/tx/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/secret",
        "tx_page": "https://www.mintscan.io/secret/txs/${txHash}",
        "account_page": "https://www.mintscan.io/secret/account/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/secret-network",
        "tx_page": "https://atomscan.com/secret-network/transactions/${txHash}",
        "account_page": "https://atomscan.com/secret-network/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "rizon",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://rizon.world/",
    "pretty_name": "Rizon",
    "chain_id": "titan-1",
    "bech32_prefix": "rizon",
    "daemon_name": "rizond",
    "node_home": "$HOME/.rizon",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uatolo",
          "low_gas_price": 0.025,
          "average_gas_price": 0.025,
          "high_gas_price": 0.035
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uatolo"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/rizon-world/rizon",
      "recommended_version": "v0.4.1",
      "compatible_versions": [
        "v0.4.1"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/rizon-world/mainnet/master/genesis.json"
      },
      "versions": [
        {
          "name": "v0.4.1",
          "recommended_version": "v0.4.1",
          "compatible_versions": [
            "v0.4.1"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "83c9cdc2db2b4eff4acc9cd7d664ad5ae6191080",
          "address": "seed-1.mainnet.rizon.world:26656"
        },
        {
          "id": "ae1476777536e2be26507c4fbcf86b67540adb64",
          "address": "seed-2.mainnet.rizon.world:26656"
        },
        {
          "id": "8abf316257a264dc8744dee6be4981cfbbcaf4e4",
          "address": "seed-3.mainnet.rizon.world:26656"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "rizon-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "e726816f42831689eab9378d5d577f1d06d25716",
          "address": "rizon-seed-2.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "http://seed-1.mainnet.rizon.world:26657",
          "provider": "HDAC Technology AG"
        },
        {
          "address": "https://rpcapi.rizon.world/",
          "provider": "HDAC Technology AG"
        },
        {
          "address": "https://rpc.rizon.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://rizon-rpc.ibs.team/",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://rizon.nodejumper.io",
          "provider": "NODEJUMPER"
        }
      ],
      "rest": [
        {
          "address": "http://seed-1.mainnet.rizon.world:1317",
          "provider": "HDAC Technology AG"
        },
        {
          "address": "https://restapi.rizon.world/",
          "provider": "HDAC Technology AG"
        },
        {
          "address": "https://api.rizon.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://rizon-api.ibs.team/",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://rizon.nodejumper.io:1317",
          "provider": "NODEJUMPER"
        }
      ],
      "grpc": [
        {
          "address": "rizon.nodejumper.io:9090",
          "provider": "NODEJUMPER"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/rizon",
        "tx_page": "https://ezstaking.tools/rizon/txs/${txHash}",
        "account_page": "https://ezstaking.tools/rizon/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/rizon",
        "tx_page": "https://www.mintscan.io/rizon/txs/${txHash}",
        "account_page": "https://www.mintscan.io/rizon/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/rizon",
        "tx_page": "https://ping.pub/rizon/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/rizon",
        "tx_page": "https://atomscan.com/rizon/transactions/${txHash}",
        "account_page": "https://atomscan.com/rizon/accounts/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/rizon",
        "tx_page": "https://bigdipper.live/rizon/transactions/${txHash}",
        "account_page": "https://bigdipper.live/rizon/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "regen",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.regen.network/",
    "pretty_name": "Regen",
    "chain_id": "regen-1",
    "bech32_prefix": "regen",
    "daemon_name": "regen",
    "node_home": "$HOME/.regen",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uregen",
          "low_gas_price": 0.015,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uregen"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/regen-network/regen-ledger",
      "recommended_version": "v5.0.0",
      "compatible_versions": [
        "v5.0.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/regen-network/regen-ledger/releases/download/v5.0.0/regen-ledger_5.0.0_linux_amd64.zip",
        "linux/arm64": "https://github.com/regen-network/regen-ledger/releases/download/v5.0.0/regen-ledger_5.0.0_linux_arm64.zip",
        "darwin/amd64": "https://github.com/regen-network/regen-ledger/releases/download/v5.0.0/regen-ledger_5.0.0_darwin_amd64.zip",
        "darwin/arm64": "https://github.com/regen-network/regen-ledger/releases/download/v5.0.0/regen-ledger_5.0.0_darwin_arm64.zip"
      },
      "cosmos_sdk_version": "0.46",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "ibc_go_version": "5.2",
      "ics_enabled": [
        "ics20-1",
        "ics27-1"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/regen-network/mainnet/main/regen-1/genesis.json"
      },
      "versions": [
        {
          "name": "v5.0.0",
          "recommended_version": "v5.0.0",
          "compatible_versions": [
            "v5.0.0"
          ],
          "cosmos_sdk_version": "0.46",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "ibc_go_version": "5.2",
          "ics_enabled": [
            "ics20-1",
            "ics27-1"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/regen-network/regen-ledger/releases/download/v5.0.0/regen-ledger_5.0.0_linux_amd64.zip",
            "linux/arm64": "https://github.com/regen-network/regen-ledger/releases/download/v5.0.0/regen-ledger_5.0.0_linux_arm64.zip",
            "darwin/amd64": "https://github.com/regen-network/regen-ledger/releases/download/v5.0.0/regen-ledger_5.0.0_darwin_amd64.zip",
            "darwin/arm64": "https://github.com/regen-network/regen-ledger/releases/download/v5.0.0/regen-ledger_5.0.0_darwin_arm64.zip"
          }
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "aebb8431609cb126a977592446f5de252d8b7fa1",
          "address": "104.236.201.138:26656"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "regen-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "regen-mainnet-seed.autostake.com:27216",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ],
      "persistent_peers": [
        {
          "id": "d35d652b6cb3bf7d6cb8d4bd7c036ea03e7be2ab",
          "address": "116.203.182.185:26656"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "regen-mainnet-peer.autostake.com:27216",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-regen.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "http://public-rpc.regen.vitwit.com:26657",
          "provider": "vitwit"
        },
        {
          "address": "https://regen.stakesystems.io:2053",
          "provider": "stakesystems"
        },
        {
          "address": "http://rpc.regen.forbole.com:80",
          "provider": "forbole"
        },
        {
          "address": "https://rpc-regen-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://regen-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://regen-rpc.easy2stake.com",
          "provider": "Easy 2 Stake"
        }
      ],
      "rest": [
        {
          "address": "http://public-rpc.regen.vitwit.com:1317",
          "provider": "vitwit"
        },
        {
          "address": "https://regen.stakesystems.io",
          "provider": "stakesystems"
        },
        {
          "address": "https://api-regen-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://regen-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rest-regen.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://regen-lcd.easy2stake.com",
          "provider": "Easy 2 Stake"
        }
      ],
      "grpc": [
        {
          "address": "grpc-regen-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "regen-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/regen",
        "tx_page": "https://www.mintscan.io/regen/txs/${txHash}",
        "account_page": "https://www.mintscan.io/regen/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/regen",
        "tx_page": "https://ping.pub/regen/tx/${txHash}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/regen",
        "tx_page": "https://bigdipper.live/regen/transactions/${txHash}",
        "account_page": "https://bigdipper.live/regen/accounts/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/regen-network",
        "tx_page": "https://atomscan.com/regen-network/transactions/${txHash}",
        "account_page": "https://atomscan.com/regen-network/accounts/${accountAddress}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg"
    }
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "rebus",
    "website": "https://www.rebuschain.com/",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Rebus",
    "chain_id": "reb_1111-1",
    "bech32_prefix": "rebus",
    "daemon_name": "rebusd",
    "node_home": "$HOME/.rebusd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "arebus",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "arebus"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/rebuschain/rebus.core",
      "recommended_version": "v0.3.0",
      "compatible_versions": [
        "v0.3.0"
      ],
      "versions": [
        {
          "name": "v0.1.2",
          "tag": "v0.1.2",
          "height": 0,
          "next_version_name": "v0.2.3"
        },
        {
          "name": "v0.2.3",
          "tag": "v0.2.3",
          "height": 473400,
          "recommended_version": "v0.3.0",
          "compatible_versions": [
            "v0.3.0"
          ]
        }
      ],
      "genesis": {
        "genesis_url": "https://github.com/rebuschain/rebus.mainnet/raw/master/reb_1111-1/genesis.zip"
      }
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "718706d1a1e93c2fe9a3059588236cf96c457ff4",
          "address": "seed.rebus.cros-nest.com:26656"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:17256",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "rebus-mainnet-seed.autostake.com:26906",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "rebus-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "e726816f42831689eab9378d5d577f1d06d25716",
          "address": "rebus-seed-2.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        }
      ],
      "persistent_peers": [
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "rebus-mainnet-peer.autostake.com:26906",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://api.rebuschain.com:26657/",
          "provider": "Rebuschain"
        },
        {
          "address": "https://rebus.rpc.manticore.team:443/",
          "provider": "MantiCore"
        },
        {
          "address": "https://rpc.rebus.nodestake.top/",
          "provider": "NodeStake"
        },
        {
          "address": "https://rpc-1.rebus.nodes.guru",
          "provider": "Nodes.Guru"
        },
        {
          "address": "https://api.mainnet.rebus.money:26657",
          "provider": "Rebuschain"
        },
        {
          "address": "https://rpc-rebus.d-stake.xyz",
          "provider": "D-stake"
        },
        {
          "address": "https://rebus-rpc.brocha.in",
          "provider": "Brochain"
        },
        {
          "address": "https://rebus.nodejumper.io",
          "provider": "NODEJUMPER"
        },
        {
          "address": "https://rpc.rebus.bh.rocks",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://rebus-rpc.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://rpc-rebus.huginn.tech",
          "provider": "Huginn"
        },
        {
          "address": "https://rebus-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ],
      "rest": [
        {
          "address": "https://api.rebuschain.com:1317/",
          "provider": "Rebuschain"
        },
        {
          "address": "https://rebus.api.manticore.team:443/",
          "provider": "MantiCore"
        },
        {
          "address": "https://api.rebus.nodestake.top/",
          "provider": "NodeStake"
        },
        {
          "address": "https://api-1.rebus.nodes.guru",
          "provider": "Nodes.Guru"
        },
        {
          "address": "https://api.mainnet.rebus.money:1317",
          "provider": "Rebuschain"
        },
        {
          "address": "https://api-rebus.d-stake.xyz",
          "provider": "D-stake"
        },
        {
          "address": "https://rebus-rest.brocha.in",
          "provider": "Brochain"
        },
        {
          "address": "https://rebus.nodejumper.io:1317",
          "provider": "NODEJUMPER"
        },
        {
          "address": "https://rebus-api.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://rebus-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ],
      "grpc": [
        {
          "address": "rebus.grpc.manticore.team:443",
          "provider": "MantiCore"
        },
        {
          "address": "grpc.rebus.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "rebus.nodejumper.io:9090",
          "provider": "NODEJUMPER"
        },
        {
          "address": "rebus-grpc.brocha.in:443",
          "provider": "Brochain"
        },
        {
          "address": "rebus-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "explorers": [
      {
        "kind": "explorers.guru",
        "url": "https://rebus.explorers.guru",
        "tx_page": "https://rebus.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "NodeStake",
        "url": "https://explorer.nodestake.top/rebus",
        "tx_page": "https://explorer.nodestake.top/rebus/tx/${txHash}"
      },
      {
        "kind": "Brochain",
        "url": "https://explorer.brocha.in/rebus",
        "tx_page": "https://explorer.brocha.in/rebus/tx/${txHash}"
      },
      {
        "kind": "tcnetwork",
        "url": "https://rebus.tcnetwork.io",
        "tx_page": "https://rebus.tcnetwork.io/transaction/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/rebus",
        "tx_page": "https://atomscan.com/rebus/transactions/${txHash}",
        "account_page": "https://atomscan.com/rebus/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "realio",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://realio.network/",
    "pretty_name": "Realio",
    "chain_id": "realionetwork_3301-1",
    "bech32_prefix": "realio",
    "node_home": "$HOME/.realio-network",
    "daemon_name": "realio-networkd",
    "key_algos": [
      "ethsecp256k1"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ario",
          "fixed_min_gas_price": 1000000000,
          "low_gas_price": 4000000000,
          "average_gas_price": 5000000000,
          "high_gas_price": 8000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ario"
        },
        {
          "denom": "arst"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/realiotech/realio-network",
      "recommended_version": "v0.8.0-rc4",
      "compatible_versions": [
        "v0.8.0-rc4"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/realiotech/realio-network/releases/download/v0.8.0-rc4/realio-network_0.8.0-rc4_Linux_x86_64.tar.gz",
        "linux/arm64": "https://github.com/realiotech/realio-network/releases/download/v0.8.0-rc4/realio-network_0.8.0-rc4_Linux_arm64.tar.gz",
        "darwin/amd64": "https://github.com/realiotech/realio-network/releases/download/v0.8.0-rc4/realio-network_0.8.0-rc4_Darwin_x86_64.tar.gz",
        "darwin/arm64": "https://github.com/realiotech/realio-network/releases/download/v0.8.0-rc4/realio-network_0.8.0-rc4_Darwin_arm64.tar.gz",
        "windows/amd64": "https://github.com/realiotech/realio-network/releases/download/v0.8.0-rc4/realio-network_0.8.0-rc4_Windows_x86_64.zip"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/realiotech/mainnet/main/realionetwork_3301-1/genesis.json"
      },
      "versions": [
        {
          "name": "v0.8.0-rc4",
          "recommended_version": "v0.8.0-rc4",
          "compatible_versions": [
            "v0.8.0-rc4"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/realiotech/realio-network/releases/download/v0.8.0-rc4/realio-network_0.8.0-rc4_Linux_x86_64.tar.gz",
            "linux/arm64": "https://github.com/realiotech/realio-network/releases/download/v0.8.0-rc4/realio-network_0.8.0-rc4_Linux_arm64.tar.gz",
            "darwin/amd64": "https://github.com/realiotech/realio-network/releases/download/v0.8.0-rc4/realio-network_0.8.0-rc4_Darwin_x86_64.tar.gz",
            "darwin/arm64": "https://github.com/realiotech/realio-network/releases/download/v0.8.0-rc4/realio-network_0.8.0-rc4_Darwin_arm64.tar.gz",
            "windows/amd64": "https://github.com/realiotech/realio-network/releases/download/v0.8.0-rc4/realio-network_0.8.0-rc4_Windows_x86_64.zip"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png"
    },
    "peers": {
      "seeds": [
        {
          "id": "b2564269d7fca6db1215f385e10d21b5917c675f",
          "address": "195.3.220.22:30656",
          "provider": "genznodes"
        }
      ],
      "persistent_peers": [
        {
          "id": "b2564269d7fca6db1215f385e10d21b5917c675f",
          "address": "195.3.220.22:30656",
          "provider": "genznodes"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://realio-rpc.genznodes.dev",
          "provider": "genznodes"
        },
        {
          "address": "https://rpc-realio.nodeist.net",
          "provider": "Nodeist"
        }
      ],
      "rest": [
        {
          "address": "https://realio-api.genznodes.dev",
          "provider": "genznodes"
        },
        {
          "address": "https://api-realio.nodeist.net",
          "provider": "Nodeist"
        }
      ],
      "grpc": [
        {
          "address": "realio-grpc.genznodes.dev:30090",
          "provider": "genznodes"
        },
        {
          "address": "https://grpc-realio.nodeist.net",
          "provider": "Nodeist"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://realio-rpc-evm.genznodes.dev/",
          "provider": "genznodes"
        }
      ]
    },
    "explorers": [
      {
        "kind": "genznodes Explorer",
        "url": "https://explorer.genznodes.dev/realio",
        "tx_page": "https://explorer.genznodes.dev/realio/tx/${txHash}",
        "account_page": "https://explorer.genznodes.dev/realio/account/{$accountAddress}"
      },
      {
        "kind": "Nodeist Explorer",
        "url": "https://exp.nodeist.net/realio",
        "tx_page": "https://exp.nodeist.net/realio/tx/${txHash}",
        "account_page": "https://exp.nodeist.net/realio/account/{$accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "quicksilver",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://quicksilver.zone/",
    "pretty_name": "Quicksilver",
    "chain_id": "quicksilver-2",
    "daemon_name": "quicksilverd",
    "node_home": "$HOME/.quicksilverd",
    "bech32_prefix": "quick",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uqck",
          "fixed_min_gas_price": 0.0001,
          "low_gas_price": 0.0001,
          "average_gas_price": 0.0001,
          "high_gas_price": 0.00025
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uqck"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/ingenuity-build/quicksilver",
      "recommended_version": "v1.2.10",
      "compatible_versions": [
        "v1.2.10"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/ingenuity-build/quicksilver/releases/download/v1.2.10/quicksilverd-v1.2.10-amd64"
      },
      "cosmos_sdk_version": "0.46",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "cosmwasm_version": "0.29",
      "cosmwasm_enabled": true,
      "ibc_go_version": "5.2.0",
      "genesis": {
        "genesis_url": "https://github.com/ingenuity-build/mainnet/raw/main/genesis.json"
      },
      "versions": [
        {
          "name": "v1.2.9-hotfix.0",
          "recommended_version": "v1.2.9-hotfix.0",
          "compatible_versions": [
            "v1.2.9-hotfix.0"
          ],
          "cosmos_sdk_version": "0.46",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.29",
          "cosmwasm_enabled": true,
          "ibc_go_version": "5.2.0",
          "next_version_name": "v1.2.10"
        },
        {
          "name": "v1.2.10",
          "height": 1936600,
          "recommended_version": "v1.2.10",
          "proposal": 13,
          "compatible_versions": [
            "v1.2.10"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/ingenuity-build/quicksilver/releases/download/v1.2.10/quicksilverd-v1.2.10-amd64"
          },
          "cosmos_sdk_version": "0.46",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.29",
          "cosmwasm_enabled": true,
          "ibc_go_version": "5.2.0"
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "940c0dc153b0e344de6368d101a97fd4d9e69eff",
          "address": "seeds.cros-nest.com:25656",
          "provider": "Cros-Nest"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:11156",
          "provider": "Polkachu"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:11156",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "babc3f3f7804933265ec9c40ad94f4da8e9e0017",
          "address": "seed.rhinostake.com:11156",
          "provider": "rhinostake"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "quicksilver-mainnet-seed.autostake.com:27026",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "quicksilver-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "e726816f42831689eab9378d5d577f1d06d25716",
          "address": "quicksilver-seed-2.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc",
          "address": "quicksilver.rpc.kjnodes.com:11159",
          "provider": "kjnodes"
        }
      ],
      "persistent_peers": [
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "quicksilver-mainnet-peer.autostake.com:27026",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.quicksilver.zone:443",
          "provider": "Quicksilver"
        },
        {
          "address": "https://rpc-quicksilver-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "https://quicksilver-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://m-quicksilver.rpc.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://quicksilver-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://quicksilver-rpc.ibs.team:443",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://quicksilver.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://rpc-quicksilver.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://quicksilver-rpc.punq.info",
          "provider": "punq"
        },
        {
          "address": "https://archive-rpc-quicksilver.huginn.tech",
          "provider": "Huginn"
        },
        {
          "address": "https://rpc-quicksilver.huginn.tech",
          "provider": "Huginn"
        }
      ],
      "rest": [
        {
          "address": "https://api-quicksilver-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "https://quicksilver-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://quicksilver-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://m-quicksilver.api.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://quicksilver.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://rest-quicksilver.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://quicksilver-api.punq.info",
          "provider": "punq"
        },
        {
          "address": "https://archive-lcd-quicksilver.huginn.tech",
          "provider": "Huginn"
        },
        {
          "address": "https://api.quicksilver.huginn.tech",
          "provider": "Huginn"
        }
      ],
      "grpc": [
        {
          "address": "grpc-quicksilver-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "quicksilver-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "quicksilver-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "quicksilver.grpc.kjnodes.com:11190",
          "provider": "kjnodes"
        },
        {
          "address": "grpc-quicksilver.architectnodes.com:1443",
          "provider": "Architect Nodes"
        },
        {
          "address": "archive-grpc-quicksilver.huginn.tech:9090",
          "provider": "Huginn"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/quicksilver",
        "tx_page": "https://www.mintscan.io/quicksilver/txs/${txHash}",
        "account_page": "https://www.mintscan.io/quicksilver/account/${accountAddress}"
      },
      {
        "kind": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀 explorer",
        "url": "https://exp.utsa.tech/quicksilver",
        "tx_page": "https://exp.utsa.tech/quicksilver/tx/${txHash}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/quicksilver",
        "tx_page": "https://bigdipper.live/quicksilver/transactions/${txHash}",
        "account_page": "https://bigdipper.live/quicksilver/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "quasar",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.quasar.fi/",
    "pretty_name": "Quasar",
    "chain_id": "quasar-1",
    "bech32_prefix": "quasar",
    "daemon_name": "quasarnoded",
    "node_home": "$HOME/.quasarnode",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "staking": {
      "staking_tokens": [
        {
          "denom": "uqsr"
        }
      ]
    },
    "fees": {
      "fee_tokens": [
        {
          "denom": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
          "fixed_min_gas_price": 0.01
        },
        {
          "denom": "ibc/FA0006F056DB6719B8C16C551FC392B62F5729978FC0B125AC9A432DBB2AA1A5",
          "fixed_min_gas_price": 0.01
        },
        {
          "denom": "ibc/FA7775734CC73176B7425910DE001A1D2AD9B6D9E93129A5D0750EAD13E4E63A",
          "fixed_min_gas_price": 0.01
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/quasar-finance/quasar-preview",
      "recommended_version": "v0.1.0",
      "compatible_versions": [
        "v0.1.0"
      ],
      "cosmos_sdk_version": "0.46",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "cosmwasm_version": "0.27",
      "cosmwasm_enabled": true,
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/quasar-finance/networks/main/quasar-1/definitive-genesis.json"
      },
      "versions": [
        {
          "name": "v0.1.0",
          "recommended_version": "v0.1.0",
          "compatible_versions": [
            "v0.1.0"
          ],
          "cosmos_sdk_version": "0.46",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.27",
          "cosmwasm_enabled": true
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:18256",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:18256",
          "provider": "Polkachu"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "quasar-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "e726816f42831689eab9378d5d577f1d06d25716",
          "address": "quasar-seed-2.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc",
          "address": "quasar.rpc.kjnodes.com:14859",
          "provider": "kjnodes"
        },
        {
          "id": "d3c60cb339736ab2d504904492fe4e7d9efe5d42",
          "address": "seeds.whispernode.com:18256",
          "provider": "WhisperNode🤐"
        }
      ],
      "persistent_peers": [
        {
          "id": "298e0e1faf8a5da43514cc2908d2908658e732a0",
          "address": "298e0e1faf8a5da43514cc2908d2908658e732a0@38.146.3.148:18256"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://quasar-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://quasar-rpc.polkachu.com",
          "provider": "polkachu"
        },
        {
          "address": "https://rpc-quasar.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://quasar-rpc.enigma-validator.com",
          "provider": "Enigma"
        },
        {
          "address": "https://quasar.rpc.kjnodes.com",
          "provider": "kjnodes"
        }
      ],
      "rest": [
        {
          "address": "https://quasar-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://quasar-api.polkachu.com",
          "provider": "polkachu"
        },
        {
          "address": "https://lcd-quasar.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://quasar-lcd.enigma-validator.com",
          "provider": "Enigma"
        },
        {
          "address": "https://quasar.api.kjnodes.com",
          "provider": "kjnodes"
        }
      ],
      "grpc": [
        {
          "address": "https://quasar-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "quasar-grpc.polkachu.com:18290",
          "provider": "polkachu"
        },
        {
          "address": "quasar.grpc.kjnodes.com:14890",
          "provider": "kjnodes"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/quasar",
        "tx_page": "https://www.mintscan.io/quasar/txs/${txHash}",
        "account_page": "https://www.mintscan.io/quasar/account/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/quasar",
        "tx_page": "https://bigdipper.live/quasar/transactions/${txHash}",
        "account_page": "https://bigdipper.live/quasar/accounts/${accountAddress}"
      }
    ],
    "keywords": [
      "mainnet"
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "provenance",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://provenance.io/",
    "pretty_name": "Provenance",
    "chain_id": "pio-mainnet-1",
    "bech32_prefix": "pb",
    "daemon_name": "provenanced",
    "node_home": "$HOME/Provenance",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 505,
    "fees": {
      "fee_tokens": [
        {
          "denom": "nhash",
          "fixed_min_gas_price": 1905,
          "low_gas_price": 1905,
          "average_gas_price": 2100,
          "high_gas_price": 2500
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "nhash"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/provenance-io/provenance",
      "recommended_version": "v1.14.1",
      "compatible_versions": [
        "v1.14.1",
        "v1.14.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/provenance-io/provenance/releases/download/v1.14.1/provenance-linux-amd64-v1.14.1.zip"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/provenance-io/mainnet/main/pio-mainnet-1/genesis.json"
      },
      "cosmwasm_enabled": true,
      "versions": [
        {
          "name": "v1.14.1",
          "recommended_version": "v1.14.1",
          "compatible_versions": [
            "v1.14.1",
            "v1.14.0"
          ],
          "cosmwasm_enabled": true,
          "binaries": {
            "linux/amd64": "https://github.com/provenance-io/provenance/releases/download/v1.14.1/provenance-linux-amd64-v1.14.1.zip"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "4bd2fb0ae5a123f1db325960836004f980ee09b4",
          "address": "seed-0.provenance.io:26656",
          "provider": "figure"
        },
        {
          "id": "048b991204d7aac7209229cbe457f622eed96e5d",
          "address": "seed-1.provenance.io:26656",
          "provider": "figure"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.provenance.io/",
          "provider": "figure"
        },
        {
          "address": "https://rpc-provenance-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://provenance-rpc.ibs.team",
          "provider": "Inter Blockchain Services"
        }
      ],
      "rest": [
        {
          "address": "https://api.provenance.io",
          "provider": "figure"
        },
        {
          "address": "https://api-provenance-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://provenance-api.ibs.team",
          "provider": "Inter Blockchain Services"
        }
      ],
      "grpc": [
        {
          "address": "grpc-provenance-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        }
      ]
    },
    "explorers": [
      {
        "kind": "provenance",
        "url": "https://explorer.provenance.io",
        "tx_page": "https://explorer.provenance.io/tx/${txHash}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.provenance.io",
        "tx_page": "https://bigdipper.provenance.io/transactions/${txHash}"
      },
      {
        "kind": "hubble",
        "url": "https://hubble.figment.io/provenance/chains/pio-mainnet-1",
        "tx_page": "https://hubble.figment.io/provenance/chains/pio-mainnet-1/${block}/transactions/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/provenance",
        "tx_page": "https://ping.pub/provenance/tx/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/provenance",
        "tx_page": "https://www.mintscan.io/provenance/txs/${txHash}",
        "account_page": "https://www.mintscan.io/provenance/account/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/provenance",
        "tx_page": "https://atomscan.com/provenance/transactions/${txHash}",
        "account_page": "https://atomscan.com/provenance/accounts/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/provenance",
        "tx_page": "https://bigdipper.live/provenance/transactions/${txHash}",
        "account_page": "https://bigdipper.live/provenance/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "point",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Point Network",
    "chain_id": "point_10687-1",
    "bech32_prefix": "point",
    "node_home": "$HOME/.pointd",
    "daemon_name": "pointd",
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "apoint",
          "low_gas_price": 5000000000,
          "average_gas_price": 25000000000,
          "high_gas_price": 40000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "apoint"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/pointnetwork/point-chain",
      "recommended_version": "v8.0.0",
      "compatible_versions": [
        "v8.0.0"
      ],
      "binaries": {
        "linux/amd64": "",
        "linux/arm64": "",
        "darwin/amd64": "",
        "darwin/arm64": "",
        "windows/amd64": ""
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/pointnetwork/point-chain-config/main/mainnet-1/genesis.json"
      },
      "versions": [
        {
          "name": "v8.0.0",
          "recommended_version": "v8.0.0",
          "compatible_versions": [
            "v8.0.0"
          ],
          "binaries": {
            "linux/amd64": "",
            "linux/arm64": "",
            "darwin/amd64": "",
            "darwin/arm64": "",
            "windows/amd64": ""
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "8673c1f04c29c464189e8bf29e51fb0b38da2f19",
          "address": "rpc-mainnet-1.point.space:26656",
          "provider": "Point Network"
        }
      ],
      "persistent_peers": [
        {
          "id": "8673c1f04c29c464189e8bf29e51fb0b38da2f19",
          "address": "rpc-mainnet-1.point.space:26656",
          "provider": "Point Network"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-mainnet-1.point.space:26657",
          "provider": "Point Network"
        },
        {
          "address": "https://rpc.point.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://rpc.point.nodexcapital.com",
          "provider": "⚡NodeX Validator⚡"
        }
      ],
      "rest": [
        {
          "address": "https://rpc-mainnet-1.point.space:1317",
          "provider": "Point Network"
        },
        {
          "address": "https://api.point.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://rest.point.nodexcapital.com",
          "provider": "⚡NodeX Validator⚡"
        }
      ],
      "grpc": [
        {
          "address": "grpc.point.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "https://grpc.point.nodexcapital.com",
          "provider": "⚡NodeX Validator⚡"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://rpc-mainnet-1.point.space",
          "provider": "Point Network"
        },
        {
          "address": "https://jsonrpc.point.nodestake.top",
          "provider": "NodeStake"
        }
      ]
    },
    "explorers": [
      {
        "kind": "blockscout",
        "url": "https://explorer.pointnetwork.io/",
        "tx_page": "https://explorer.pointnetwork.io/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://cosmos.pointnetwork.io/",
        "tx_page": "https://cosmos.pointnetwork.io/point/tx/${txHash}"
      },
      {
        "kind": "NODEXPLORER",
        "url": "https://explorer.nodexcapital.com/point",
        "tx_page": "https://explorer.nodexcapital.com/point/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/point",
        "tx_page": "https://atomscan.com/point/transactions/${txHash}",
        "account_page": "https://atomscan.com/point/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "planq",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://planq.network/",
    "pretty_name": "Planq",
    "chain_id": "planq_7070-2",
    "bech32_prefix": "plq",
    "node_home": "$HOME/.planqd",
    "daemon_name": "planqd",
    "key_algos": [
      "ethsecp256k1"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "aplanq",
          "fixed_min_gas_price": 20000000000,
          "low_gas_price": 30000000000,
          "average_gas_price": 35000000000,
          "high_gas_price": 40000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "aplanq"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/planq-network/planq",
      "recommended_version": "v1.0.3",
      "compatible_versions": [
        "v1.0.0",
        "v1.0.1",
        "v1.0.2"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/planq-network/planq/releases/download/v1.0.3/planq_1.0.3_Linux_x86_64.tar.gz",
        "linux/arm64": "https://github.com/planq-network/planq/releases/download/v1.0.3/planq_1.0.3_Linux_arm64.tar.gz",
        "darwin/amd64": "https://github.com/planq-network/planq/releases/download/v1.0.3/planq_1.0.3_Darwin_x86_64.tar.gz",
        "darwin/arm64": "https://github.com/planq-network/planq/releases/download/v1.0.3/planq_1.0.3_Darwin_arm64.tar.gz",
        "windows/amd64": "https://github.com/planq-network/planq/releases/download/v1.0.3/planq_1.0.3_Windows_x86_64.zip"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/planq-network/networks/main/mainnet/genesis.json"
      },
      "versions": [
        {
          "name": "v1.0.3",
          "recommended_version": "v1.0.3",
          "compatible_versions": [
            "v1.0.0",
            "v1.0.1",
            "v1.0.2"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/planq-network/planq/releases/download/v1.0.3/planq_1.0.3_Linux_x86_64.tar.gz",
            "linux/arm64": "https://github.com/planq-network/planq/releases/download/v1.0.3/planq_1.0.3_Linux_arm64.tar.gz",
            "darwin/amd64": "https://github.com/planq-network/planq/releases/download/v1.0.3/planq_1.0.3_Darwin_x86_64.tar.gz",
            "darwin/arm64": "https://github.com/planq-network/planq/releases/download/v1.0.3/planq_1.0.3_Darwin_arm64.tar.gz",
            "windows/amd64": "https://github.com/planq-network/planq/releases/download/v1.0.3/planq_1.0.3_Windows_x86_64.zip"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "dd2f0ceaa0b21491ecae17413b242d69916550ae",
          "address": "135.125.247.70:26656",
          "provider": "Planq Foundation EU"
        },
        {
          "id": "5966b4ef17da12ee63ef30e50512ad41d541195c",
          "address": "seeds-planq.sxlzptprjkt.xyz:18656",
          "provider": "sxlzptprjkt | VALIDATOR"
        },
        {
          "id": "c443eb8888e96e260dc23b9ef3c5a5773ec0e261",
          "address": "rpc.planq.nodexcapital.com:12756",
          "provider": "NodeX Validator"
        }
      ],
      "persistent_peers": [
        {
          "id": "dd2f0ceaa0b21491ecae17413b242d69916550ae",
          "address": "135.125.247.70:26656",
          "provider": "Planq Foundation EU"
        },
        {
          "id": "e6d553dffbbabbfe9602b43d87e5b0ac1a46348a",
          "address": "135.125.247.70:26656",
          "provider": "Nodine.ID"
        },
        {
          "id": "b611a4058ac5caf8b56c1012c695afc75aea4217",
          "address": "peers-planq.sxlzptprjkt.xyz:18656",
          "provider": "sxlzptprjkt | VALIDATOR"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.planq.network",
          "provider": "planq.network"
        },
        {
          "address": "https://rpc.planq.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://rpc-planq.nodine.id",
          "provider": "Nodine.id"
        },
        {
          "address": "https://rpc-planq.comunitynode.my.id",
          "provider": "ComunityNode"
        },
        {
          "address": "https://planq-rpc.kynraze.com",
          "provider": "Kynraze"
        },
        {
          "address": "https://rpc-planq.sxlzptprjkt.xyz",
          "provider": "sxlzptprjkt | VALIDATOR"
        },
        {
          "address": "https://rpc.planq.nodexcapital.com",
          "provider": "NodeX Validator"
        }
      ],
      "rest": [
        {
          "address": "https://rest.planq.network",
          "provider": "planq.network"
        },
        {
          "address": "https://api.planq.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://api-planq.nodine.id",
          "provider": "Nodine.ID"
        },
        {
          "address": "https://api-planq.comunitynode.my.id",
          "provider": "ComunityNode"
        },
        {
          "address": "https://planq-api.kynraze.com",
          "provider": "Kynraze"
        },
        {
          "address": "https://api-planq.sxlzptprjkt.xyz",
          "provider": "sxlzptprjkt | VALIDATOR"
        },
        {
          "address": "https://rest.planq.nodexcapital.com",
          "provider": "NodeX Validator"
        }
      ],
      "grpc": [
        {
          "address": "grpc.planq.network:443",
          "provider": "planq.network"
        },
        {
          "address": "grpc.planq.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "https://grpc-planq.nodine.id",
          "provider": "Nodine.id"
        },
        {
          "address": "https://grpc-planq.sxlzptprjkt.xyz:443",
          "provider": "sxlzptprjkt | VALIDATOR"
        },
        {
          "address": "https://grpc.planq.nodexcapital.com:443",
          "provider": "NodeX Validator"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://evm-rpc.planq.network",
          "provider": "planq.network"
        },
        {
          "address": "https://jsonrpc.planq.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://rpc-evm-planq.sxlzptprjkt.xyz",
          "provider": "sxlzptprjkt | VALIDATOR"
        },
        {
          "address": "https://jsonrpc.planq.nodexcapital.com",
          "provider": "NodeX Validator"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://explorer.planq.network",
        "tx_page": "https://explorer.planq.network/transactions/${txHash}"
      },
      {
        "kind": "blockscout",
        "url": "https://evm.planq.network",
        "tx_page": "https://evm.planq.network/tx/${txHash}"
      },
      {
        "kind": "NodeStake Explorer",
        "url": "https://explorer.nodestake.top/planq",
        "tx_page": "https://explorer.nodestake.top/planq/tx/${txHash}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/planq",
        "tx_page": "https://explorer.tcnetwork.io/planq/transaction/${txHash}"
      },
      {
        "kind": "Kynraze",
        "url": "https://explorer.kynraze.com/planq",
        "tx_page": "https://explorer.kynraze.com/planq/tx/${txHash}"
      },
      {
        "kind": "THE EXPLORER",
        "url": "https://explorer.sxlzptprjkt.xyz/planq",
        "tx_page": "https://explorer.sxlzptprjkt.xyz/planq/tx/${txHash}"
      },
      {
        "kind": "NODEXPLORER",
        "url": "https://explorer.nodexcapital.com/planq",
        "tx_page": "https://explorer.nodexcapital.com/planq/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/planq",
        "tx_page": "https://atomscan.com/planq/transactions/${txHash}",
        "account_page": "https://atomscan.com/planq/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "persistence",
    "chain_id": "core-1",
    "pretty_name": "Persistence",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://persistence.one/",
    "bech32_prefix": "persistence",
    "daemon_name": "persistenceCore",
    "node_home": "$HOME/.persistenceCore",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "alternative_slip44s": [
      750
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "uxprt",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uxprt"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/persistenceOne/persistenceCore",
      "recommended_version": "v7.0.0",
      "compatible_versions": [
        "v7.0.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/persistenceOne/persistenceCore/releases/download/v7.0.0/persistenceCore-v7.0.0-linux-amd64.tar.gz"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/persistenceOne/genesisTransactions/master/core-1/final_genesis.json"
      },
      "versions": [
        {
          "name": "v7.0.0",
          "recommended_version": "v7.0.0",
          "compatible_versions": [
            "v7.0.0"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/persistenceOne/persistenceCore/releases/download/v7.0.0/persistenceCore-v7.0.0-linux-amd64.tar.gz"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "eaa76966cad27a9807b7d8b9a62c9b2ca4924581",
          "address": "tenderseed.ccvalidators.com:26003"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "persistence-mainnet-seed.autostake.com:26896",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:15456",
          "provider": "Polkachu"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "persistence-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "e726816f42831689eab9378d5d577f1d06d25716",
          "address": "persistence-seed-2.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "ce9dc9467af943bf35f17f04cfcdf3895914d867",
          "address": "seed-persistence-01.stakeflow.io:33656",
          "provider": "Genesis Lab"
        }
      ],
      "persistent_peers": [
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "persistence-mainnet-peer.autostake.com:26896",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "137818b03a705cf86622b4d97a074091f2f22589",
          "address": "185.225.233.30:26756",
          "provider": "Cosmonaut Stakes"
        },
        {
          "id": "bb7c2cddd665303a0b4233e3d47f5bf2c3ac21ba",
          "address": "135.181.142.60:15601",
          "provider": "POSTHUMAN∞DVS"
        },
        {
          "id": "3a4aa732fc9ad4f971ce081a34d6fc06e08dd7c6",
          "address": "141.95.33.97:26656",
          "provider": "Stakewolle.com | Auto-compound"
        },
        {
          "id": "ce9dc9467af943bf35f17f04cfcdf3895914d867",
          "address": "peer-persistence-01.stakeflow.io:33656",
          "provider": "Genesis Lab"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.core.persistence.one",
          "provider": "Persistence"
        },
        {
          "address": "https://rpc-persistent-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://persistence-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://persistence-rpc.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://rpc-persistence.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://persistence-mainnet-rpc.cosmonautstakes.com",
          "provider": "Cosmonaut Stakes"
        },
        {
          "address": "https://persistence-rpc.quantnode.tech",
          "provider": "QuantNode"
        },
        {
          "address": "https://persistence-rpc.zenscape.one",
          "provider": "Zenscape"
        },
        {
          "address": "https://persistence-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://persistence-rpc.stakeandrelax.net",
          "provider": "Stake&Relax Validator 🦥"
        },
        {
          "address": "https://rpc.persistence.posthuman.digital:443",
          "provider": "POSTHUMAN∞DVS"
        },
        {
          "address": "http://141.95.33.97:21657/websocket",
          "provider": "Stakewolle.com | Auto-compound"
        },
        {
          "address": "https://rpc-persistence-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "rest": [
        {
          "address": "https://rest.core.persistence.one",
          "provider": "Persistence"
        },
        {
          "address": "https://api-persistent-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://api-persistence.starsquid.io",
          "provider": "Starsquid"
        },
        {
          "address": "https://persistence-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://persistence-api.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://rest-persistence.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://persistence-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://persistence-mainnet-rest.cosmonautstakes.com",
          "provider": "Cosmonaut Stakes"
        },
        {
          "address": "https://persistence-lcd.quantnode.tech",
          "provider": "QuantNode"
        },
        {
          "address": "https://persistence-rest.zenscape.one",
          "provider": "Zenscape"
        },
        {
          "address": "https://persistence-api.stakeandrelax.net",
          "provider": "Stake&Relax Validator 🦥"
        },
        {
          "address": "https://rest.persistence.posthuman.digital:443",
          "provider": "POSTHUMAN∞DVS"
        },
        {
          "address": "http://141.95.33.97:1317",
          "provider": "Stakewolle.com | Auto-compound"
        },
        {
          "address": "https://api-persistence-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "grpc": [
        {
          "address": "grpc.core.persistence.one:443",
          "provider": "Persistence"
        },
        {
          "address": "grpc-persistent-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "persistence-grpc.polkachu.com:15490",
          "provider": "Polkachu"
        },
        {
          "address": "persistence-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "grpc.persistence.posthuman.digital:80",
          "provider": "POSTHUMAN∞DVS"
        },
        {
          "address": "141.95.33.97:9090",
          "provider": "Stakewolle.com | Auto-compound"
        },
        {
          "address": "grpc-persistence-01.stakeflow.io:49090",
          "provider": "Genesis Lab"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/persistence",
        "tx_page": "https://www.mintscan.io/persistence/txs/${txHash}",
        "account_page": "https://www.mintscan.io/persistence/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/persistence",
        "tx_page": "https://ping.pub/persistence/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/persistence",
        "tx_page": "https://atomscan.com/persistence/transactions/${txHash}",
        "account_page": "https://atomscan.com/persistence/accounts/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/persistence",
        "tx_page": "https://bigdipper.live/persistence/transactions/${txHash}",
        "account_page": "https://bigdipper.live/persistence/accounts/${accountAddress}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/persistence",
        "account_page": "https://stakeflow.io/persistence/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "passage",
    "chain_id": "passage-1",
    "pretty_name": "Passage",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://passage3d.com/",
    "bech32_prefix": "pasg",
    "daemon_name": "passage",
    "node_home": "$HOME/.passage",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "upasg",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/envadiv/Passage3D",
      "recommended_version": "v1.1.0",
      "compatible_versions": [
        "v1.1.0"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/envadiv/mainnet/main/passage-1/genesis.json"
      },
      "versions": [
        {
          "name": "v1.1.0",
          "recommended_version": "v1.1.0",
          "compatible_versions": [
            "v1.1.0"
          ]
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "aebb8431609cb126a977592446f5de252d8b7fa1",
          "address": "104.236.201.138:26656"
        },
        {
          "id": "b6beabfb9309330944f44a1686742c2751748b83",
          "address": "5.161.47.163:26656"
        },
        {
          "id": "7a9a36630523f54c1a0d56fc01e0e153fd11a53d",
          "address": "167.235.24.145:26656"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:15656",
          "provider": "Polkachu"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:15656",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "passage-mainnet-seed.autostake.com:26916",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "passage-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "2534bb8af72ab14e001a9f48b7cf9626221c6be5",
          "address": "seeds.whispernode.com:15656",
          "provider": "WhisperNode🤐"
        }
      ],
      "persistent_peers": [
        {
          "id": "d35d652b6cb3bf7d6cb8d4bd7c036ea03e7be2ab",
          "address": "116.203.182.185:26656"
        },
        {
          "id": "8e0b0d4f80d0d2853f853fbd6a76390113f07d72",
          "address": "65.108.127.249:26656"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "passage-mainnet-peer.autostake.com:26916",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.passage.vitwit.com",
          "provider": "vitwit"
        },
        {
          "address": "https://services.staketab.com/passage-rpc",
          "provider": "staketab"
        },
        {
          "address": "https://rpc-passage.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://passage-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc-passage-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://rpc.passage.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://passage-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://passage-rpc.ibs.team/",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://rpc-passage.d-stake.xyz",
          "provider": "D-stake"
        },
        {
          "address": "https://rpc-passage.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://passage-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ],
      "rest": [
        {
          "address": "https://api.passage.vitwit.com",
          "provider": "vitwit"
        },
        {
          "address": "https://services.staketab.com/passage-api",
          "provider": "staketab"
        },
        {
          "address": "https://rest-passage.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://passage-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://api-passage-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://api.passage.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://passage-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://passage-api.ibs.team/",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://api-passage.d-stake.xyz",
          "provider": "D-stake"
        },
        {
          "address": "https://passage-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://lcd-passage.whispernode.com:443",
          "provider": "WhisperNode🤐"
        }
      ],
      "grpc": [
        {
          "address": "grpc-passage-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "passage-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "passage-grpc.polkachu.com:15690",
          "provider": "Polkachu"
        },
        {
          "address": "grpc.passage.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "passage-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "explorers": [
      {
        "kind": "aneka",
        "url": "https://passage.aneka.io",
        "tx_page": "https://passage.aneka.io/txs/${txHash}",
        "account_page": "https://passage.aneka.io/accounts/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/passage",
        "tx_page": "https://www.mintscan.io/passage/txs/${txHash}",
        "account_page": "https://www.mintscan.io/passage/account/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/passage",
        "tx_page": "https://atomscan.com/passage/transactions/${txHash}",
        "account_page": "https://atomscan.com/passage/accounts/${accountAddress}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png"
    }
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "panacea",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://medibloc.com/en/",
    "pretty_name": "Medibloc",
    "chain_id": "panacea-3",
    "bech32_prefix": "panacea",
    "daemon_name": "panacead",
    "node_home": "$HOME/.panacead",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 371,
    "fees": {
      "fee_tokens": [
        {
          "denom": "umed",
          "fixed_min_gas_price": 5,
          "low_gas_price": 5,
          "average_gas_price": 7,
          "high_gas_price": 9
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "umed"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/medibloc/panacea-core",
      "recommended_version": "v2.0.6",
      "compatible_versions": [
        "v2.0.5"
      ],
      "binaries": {},
      "genesis": {
        "genesis_url": "https://github.com/medibloc/panacea-mainnet/raw/master/panacea-3/genesis.json"
      },
      "versions": [
        {
          "name": "v2.0.6",
          "recommended_version": "v2.0.6",
          "compatible_versions": [
            "v2.0.5"
          ],
          "binaries": {}
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg"
    },
    "peers": {
      "persistent_peers": [
        {
          "id": "395aead00e99f828e4af92531dcd8c8da1255a8f",
          "address": "3.36.50.133:26656",
          "provider": "medibloc"
        },
        {
          "id": "c238f279c970764d6893ae44bdf5c949dc22b009",
          "address": "13.114.44.199:26656",
          "provider": "medibloc"
        },
        {
          "id": "00c57e36559b49ce7d29fa4920b5132584994368",
          "address": "52.77.227.241:26656",
          "provider": "medibloc"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.gopanacea.org",
          "provider": "medibloc"
        }
      ],
      "rest": [
        {
          "address": "https://api.gopanacea.org",
          "provider": "medibloc"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/medibloc",
        "tx_page": "https://www.mintscan.io/medibloc/txs/${txHash}"
      },
      {
        "kind": "bigdipper",
        "url": "https://explorer.gopanacea.org",
        "tx_page": "https://explorer.gopanacea.org/transactions/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "osmosis",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://osmosis.zone/",
    "update_link": "https://raw.githubusercontent.com/osmosis-labs/osmosis/main/chain.schema.json",
    "pretty_name": "Osmosis",
    "chain_id": "osmosis-1",
    "bech32_prefix": "osmo",
    "daemon_name": "osmosisd",
    "node_home": "$HOME/.osmosisd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uosmo",
          "fixed_min_gas_price": 0.0025,
          "low_gas_price": 0.0025,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uosmo"
        }
      ],
      "lock_duration": {
        "time": "1209600s"
      }
    },
    "codebase": {
      "git_repo": "https://github.com/osmosis-labs/osmosis",
      "recommended_version": "v15.1.0",
      "compatible_versions": [
        "v15.1.0",
        "v15.0.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/osmosis-labs/osmosis/releases/download/v15.1.0/osmosisd-15.1.0-linux-amd64?checksum=sha256:f16f901dfd47426caced8436c507e2950a4e2452b6cc6efc7845ab3b43a5c5d5",
        "linux/arm64": "https://github.com/osmosis-labs/osmosis/releases/download/v15.1.0/osmosisd-15.1.0-linux-arm64?checksum=sha256:08b20f0753b6b0bafa3a6ca7e4bb6807baf72754dfb69d6db7b1fb2b4b55ffc0"
      },
      "cosmos_sdk_version": "0.45",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "cosmwasm_version": "0.30",
      "cosmwasm_enabled": true,
      "ibc_go_version": "4.3.0",
      "ics_enabled": [
        "ics20-1"
      ],
      "genesis": {
        "name": "v3",
        "genesis_url": "https://github.com/osmosis-labs/networks/raw/main/osmosis-1/genesis.json"
      },
      "versions": [
        {
          "name": "v3",
          "tag": "v3.1.0",
          "height": 0,
          "next_version_name": "v4"
        },
        {
          "name": "v4",
          "tag": "v4.2.0",
          "height": 1314500,
          "next_version_name": "v5"
        },
        {
          "name": "v5",
          "tag": "v6.4.1",
          "height": 2383300,
          "next_version_name": "v7"
        },
        {
          "name": "v7",
          "tag": "v8.0.0",
          "height": 3401000,
          "next_version_name": "v9"
        },
        {
          "name": "v9",
          "tag": "v10.0.1",
          "height": 4707300,
          "next_version_name": "v11"
        },
        {
          "name": "v11",
          "tag": "v11.0.0",
          "height": 5432450,
          "next_version_name": "v12"
        },
        {
          "name": "v12",
          "tag": "v12.3.0",
          "height": 6246000,
          "next_version_name": "v13"
        },
        {
          "name": "v13",
          "tag": "v13.1.0",
          "height": 7241500,
          "next_version_name": "v14"
        },
        {
          "name": "v14",
          "tag": "v14.0.0",
          "height": 7937500,
          "next_version_name": "v15"
        },
        {
          "name": "v15",
          "tag": "v15.1.0",
          "height": 8732500,
          "recommended_version": "v15.1.0",
          "compatible_versions": [
            "v15.1.0",
            "v15.0.0"
          ],
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.30",
          "cosmwasm_enabled": true,
          "ibc_go_version": "4.3.0",
          "ics_enabled": [
            "ics20-1"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/osmosis-labs/osmosis/releases/download/v15.1.0/osmosisd-15.1.0-linux-amd64?checksum=sha256:f16f901dfd47426caced8436c507e2950a4e2452b6cc6efc7845ab3b43a5c5d5",
            "linux/arm64": "https://github.com/osmosis-labs/osmosis/releases/download/v15.1.0/osmosisd-15.1.0-linux-arm64?checksum=sha256:08b20f0753b6b0bafa3a6ca7e4bb6807baf72754dfb69d6db7b1fb2b4b55ffc0"
          }
        }
      ]
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png",
        "theme": {
          "primary_color_hex": "#231D4B"
        }
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "f515a8599b40f0e84dfad935ba414674ab11a668",
          "address": "osmosis.blockpane.com:26656",
          "provider": "blockpane"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:12556",
          "provider": "Polkachu"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:12556",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "osmosis-mainnet-seed.autostake.com:26716",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "3cc024d1c760c9cd96e6413abaf3b36a8bdca58e",
          "address": "seeds.goldenratiostaking.net:1630",
          "provider": "Golden Ratio Staking"
        },
        {
          "id": "3e874613919a6f8b3fc26071fef563c88f031b3c",
          "address": "seed-osmosis.freshstaking.com:31656",
          "provider": "FreshSTAKING"
        },
        {
          "id": "4dac1272a42e6b9e3ae3766304e12f1cb09ecbf0",
          "address": "osmosis-seed.panthea.eu:40656",
          "provider": "Panthea EU"
        },
        {
          "id": "bd7064a50f5843e2c84c71c4dc18ac07424bdcc1",
          "address": "seeds.whispernode.com:12556",
          "provider": "WhisperNode🤐"
        },
        {
          "id": "400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc",
          "address": "osmosis.rpc.kjnodes.com:11259",
          "provider": "kjnodes"
        },
        {
          "id": "38ab18cb2ea1dfeb6232b429e1508f56b6ae5031",
          "address": "seed-osmosis-01.stakeflow.io:65535",
          "provider": "Genesis Lab"
        }
      ],
      "persistent_peers": [
        {
          "id": "4d9ac3510d9f5cfc975a28eb2a7b8da866f7bc47",
          "address": "37.187.38.191:26656",
          "provider": "stakelab"
        },
        {
          "id": "2f9c16151400d8516b0f58c030b3595be20b804c",
          "address": "37.120.245.167:26656",
          "provider": "syncnode"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "osmosis-mainnet-peer.autostake.com:26716",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "3e874613919a6f8b3fc26071fef563c88f031b3c",
          "address": "seed-osmosis.freshstaking.com:31656",
          "provider": "FreshSTAKING"
        },
        {
          "id": "d3ec70517e584865b3863ca39cc7ac5c8ca964bb",
          "address": "osmosis-peer.panthea.eu:26656",
          "provider": "Panthea EU"
        },
        {
          "id": "38ab18cb2ea1dfeb6232b429e1508f56b6ae5031",
          "address": "peer-osmosis-01.stakeflow.io:65535",
          "provider": "Genesis Lab"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.osmosis.zone/",
          "provider": "Osmosis Foundation"
        },
        {
          "address": "https://rpc-osmosis.blockapsis.com",
          "provider": "chainapsis"
        },
        {
          "address": "https://osmosis-rpc.quickapi.com:443",
          "provider": "Chainlayer"
        },
        {
          "address": "https://rpc-osmosis.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://osmosis-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc-osmosis.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://osmosis-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-osmosis-ia.cosmosia.notional.ventures",
          "provider": "Notional"
        },
        {
          "address": "https://rpc.osmosis.interbloc.org",
          "provider": "Interbloc"
        },
        {
          "address": "https://osmosis.rpc.stakin-nodes.com",
          "provider": "Stakin"
        },
        {
          "address": "https://rpc-osmosis.goldenratiostaking.net",
          "provider": "Golden Ratio Staking"
        },
        {
          "address": "https://rpc.osl.zone",
          "provider": "Osmosis Support Lab"
        },
        {
          "address": "https://osmosis-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://osmosis.rpc.interchain.ivaldilabs.xyz",
          "provider": "ivaldilabs"
        },
        {
          "address": "https://osmosis.api.onfinality.io/public",
          "provider": "OnFinality"
        },
        {
          "address": "https://osmosis.rpc.silknodes.io",
          "provider": "Silk Nodes"
        },
        {
          "address": "https://osmosis.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://rpc-osmosis-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.osmosis.zone/",
          "provider": "Osmosis Foundation"
        },
        {
          "address": "https://osmosis-lcd.quickapi.com:443",
          "provider": "Chainlayer"
        },
        {
          "address": "https://lcd-osmosis.blockapsis.com",
          "provider": "chainapsis"
        },
        {
          "address": "https://osmosis-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rest-osmosis.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://rest-osmosis.goldenratiostaking.net",
          "provider": "Golden Ratio Staking"
        },
        {
          "address": "https://api-osmosis-ia.cosmosia.notional.ventures",
          "provider": "Notional"
        },
        {
          "address": "https://api.osmosis.interbloc.org",
          "provider": "Interbloc"
        },
        {
          "address": "https://osmosis-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://osmosis.rest.stakin-nodes.com",
          "provider": "Stakin"
        },
        {
          "address": "https://api.osl.zone",
          "provider": "Osmosis Support Lab"
        },
        {
          "address": "https://osmosis-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://osmosis.rest.interchain.ivaldilabs.xyz",
          "provider": "ivaldilabs"
        },
        {
          "address": "https://osmosis.api.silknodes.io",
          "provider": "Silk Nodes"
        },
        {
          "address": "https://osmosis.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://api-osmosis-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "grpc": [
        {
          "address": "osmosis-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "grpc-osmosis-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "osmosis.grpc.stakin-nodes.com:443",
          "provider": "Stakin"
        },
        {
          "address": "osmosis-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "osmosis.grpc.interchain.ivaldilabs.xyz:433",
          "provider": "ivaldilabs"
        },
        {
          "address": "osmosis.grpc.kjnodes.com:11290",
          "provider": "kjnodes"
        },
        {
          "address": "grpc-osmosis-01.stakeflow.io:6754",
          "provider": "Genesis Lab"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/osmosis",
        "tx_page": "https://ezstaking.tools/osmosis/txs/${txHash}",
        "account_page": "https://ezstaking.tools/osmosis/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/osmosis",
        "tx_page": "https://www.mintscan.io/osmosis/txs/${txHash}",
        "account_page": "https://www.mintscan.io/osmosis/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/osmosis",
        "tx_page": "https://ping.pub/osmosis/tx/${txHash}"
      },
      {
        "kind": "explorers.guru",
        "url": "https://osmosis.explorers.guru",
        "tx_page": "https://osmosis.explorers.guru/transaction/${txHash}",
        "account_page": "https://osmosis.explorers.guru/account/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/osmosis",
        "tx_page": "https://atomscan.com/osmosis/transactions/${txHash}",
        "account_page": "https://atomscan.com/osmosis/accounts/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/osmosis",
        "tx_page": "https://bigdipper.live/osmosis/transactions/${txHash}",
        "account_page": "https://bigdipper.live/osmosis/accounts/${accountAddress}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/osmosis",
        "tx_page": "https://explorer.tcnetwork.io/osmosis/transaction/${txHash}",
        "account_page": "https://explorer.tcnetwork.io/osmosis/account/${accountAddress}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/osmosis",
        "account_page": "https://stakeflow.io/osmosis/accounts/${accountAddress}"
      }
    ],
    "keywords": [
      "dex"
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "oraichain",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://orai.io/",
    "pretty_name": "Oraichain",
    "chain_id": "Oraichain",
    "bech32_prefix": "orai",
    "daemon_name": "oraid",
    "node_home": "$WORKSPACE/.oraid",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "orai",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.003,
          "average_gas_price": 0.005,
          "high_gas_price": 0.007
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "orai"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/oraichain/orai",
      "recommended_version": "v0.40.3",
      "compatible_versions": [
        "v0.40.3"
      ],
      "binaries": {
        "linux/amd64": "https://orai.s3.us-east-2.amazonaws.com/v0.40.3/oraid"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/oraichain/oraichain-static-files/master/mainnet-static-files/genesis.json"
      },
      "versions": [
        {
          "name": "v0.40.3",
          "recommended_version": "v0.40.3",
          "compatible_versions": [
            "v0.40.3"
          ],
          "binaries": {
            "linux/amd64": "https://orai.s3.us-east-2.amazonaws.com/v0.40.3/oraid"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "0baa806b3a4dd17be6e06369d899f140c3897d6e",
          "address": "18.223.242.70:26656",
          "provider": "oraichain-team"
        },
        {
          "id": "9749da4a81526266d7b8fe9a03d260cd3db241ad",
          "address": "18.116.209.76:26656",
          "provider": "oraichain-team"
        },
        {
          "id": "35c1f999d67de56736b412a1325370a8e2fdb34a",
          "address": "5.189.169.99:26656",
          "provider": "ORAI Vanguard"
        },
        {
          "id": "5ad3b29bf56b9ba95c67f282aa281b6f0903e921",
          "address": "64.225.53.108:26656",
          "provider": "oraichain-team"
        },
        {
          "id": "d091cabe3584cb32043cc0c9199b0c7a5b68ddcb",
          "address": "seed.orai.synergynodes.com:26656",
          "provider": "synergynodes"
        }
      ],
      "persistent_peers": [
        {
          "id": "0baa806b3a4dd17be6e06369d899f140c3897d6e",
          "address": "18.223.242.70:26656"
        },
        {
          "id": "9749da4a81526266d7b8fe9a03d260cd3db241ad",
          "address": "18.116.209.76:26656"
        },
        {
          "id": "35c1f999d67de56736b412a1325370a8e2fdb34a",
          "address": "5.189.169.99:26656"
        },
        {
          "id": "5ad3b29bf56b9ba95c67f282aa281b6f0903e921",
          "address": "64.225.53.108:26656"
        },
        {
          "id": "d091cabe3584cb32043cc0c9199b0c7a5b68ddcb",
          "address": "seed.orai.synergynodes.com:26656",
          "provider": "synergynodes"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.orai.io",
          "provider": "oraichain-team"
        },
        {
          "address": "http://64.225.53.108:26657",
          "provider": "oraichain-team"
        },
        {
          "address": "https://rpc-oraichain.vchain.zone",
          "provider": "Vchain-team"
        },
        {
          "address": "https://rpc-orai.nodine.id/",
          "provider": "Nodine.ID"
        }
      ],
      "rest": [
        {
          "address": "http://lcd.orai.io",
          "provider": "oraichain-team"
        },
        {
          "address": "http://64.225.53.108:1317",
          "provider": "oraichain-team"
        },
        {
          "address": "https://rest-oraichain.vchain.zone",
          "provider": "Vchain-team"
        },
        {
          "address": "https://api-orai.nodine.id",
          "provider": "Noidne.ID"
        }
      ]
    },
    "explorers": [
      {
        "kind": "oraiscan",
        "url": "https://scan.orai.io",
        "tx_page": "https://scan.orai.io/txs/${txHash}"
      },
      {
        "kind": "Nodine Explorer",
        "url": "https://explorer.co.id/orai",
        "tx_page": "https://explorer.co.id/orai/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/orai",
        "tx_page": "https://atomscan.com/orai/transactions/${txHash}",
        "account_page": "https://atomscan.com/orai/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "onomy",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://onomy.io/",
    "pretty_name": "Onomy",
    "chain_id": "onomy-mainnet-1",
    "bech32_prefix": "onomy",
    "daemon_name": "onomyd",
    "node_home": "$HOME/.onomyd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "anom",
          "low_gas_price": 0,
          "average_gas_price": 0.03,
          "high_gas_price": 0.06
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "anom"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/onomyprotocol/onomy",
      "recommended_version": "v1.0.1",
      "compatible_versions": [
        "v1.0.1"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/onomyprotocol/onomy/releases/download/v1.0.1/onomyd",
        "linux/arm64": "https://github.com/onomyprotocol/onomy/releases/download/v1.0.1/onomyd-arm"
      },
      "cosmos_sdk_version": "0.44",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "ibc_go_version": "2.0.4",
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/onomyprotocol/onomy/main/genesis/mainnet/genesis-mainnet-1.json"
      },
      "versions": [
        {
          "name": "v1.0.1",
          "recommended_version": "v1.0.1",
          "compatible_versions": [
            "v1.0.1"
          ],
          "cosmos_sdk_version": "0.44",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "ibc_go_version": "2.0.4",
          "binaries": {
            "linux/amd64": "https://github.com/onomyprotocol/onomy/releases/download/v1.0.1/onomyd",
            "linux/arm64": "https://github.com/onomyprotocol/onomy/releases/download/v1.0.1/onomyd-arm"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png"
    },
    "peers": {
      "seeds": [
        {
          "id": "211535f9b799bcc8d46023fa180f3359afd4c1d3",
          "address": "44.213.44.5:26656",
          "provider": "onomy"
        },
        {
          "id": "cd9a47cebe8eef076a5795e1b8460a8e0b2384e5",
          "address": "3.210.0.126:26656",
          "provider": "onomy"
        }
      ],
      "persistent_peers": [
        {
          "id": "c213f678b9e3b7c37b9229318b3e27b95c9d5af4",
          "address": "52.70.182.125:26656",
          "provider": "WhisperNode 🤐"
        },
        {
          "id": "00ce2f84f6b91639a7cedb2239e38ffddf9e36de",
          "address": "44.195.221.88:26656",
          "provider": "cosmostation"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-mainnet.onomy.io",
          "provider": "onomy"
        }
      ],
      "rest": [
        {
          "address": "https://rest-mainnet.onomy.io",
          "provider": "onomy"
        }
      ],
      "grpc": []
    },
    "explorers": [
      {
        "kind": "Big Dipper",
        "url": "https://explorer.onomy.io",
        "tx_page": "https://explorer.onomy.io/transactions/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/onomy-protocol",
        "tx_page": "https://www.mintscan.io/onomy-protocol/txs/${txHash}",
        "account_page": "https://www.mintscan.io/onomy-protocol/account/${accountAddress}"
      }
    ],
    "keywords": [
      "dex",
      "stablecoin",
      "bridge",
      "staking"
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "omniflixhub",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://omniflix.co/home",
    "pretty_name": "OmniFlix",
    "chain_id": "omniflixhub-1",
    "daemon_name": "omniflixhubd",
    "node_home": "$HOME/.omniflixhub",
    "bech32_prefix": "omniflix",
    "slip44": 118,
    "codebase": {
      "git_repo": "https://github.com/OmniFlix/omniflixhub",
      "recommended_version": "v0.10.0",
      "compatible_versions": [
        "v0.10.0"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/OmniFlix/mainnet/main/omniflixhub-1/genesis.json"
      },
      "versions": [
        {
          "name": "v0.8.0",
          "recommended_version": "v0.8.0",
          "compatible_versions": [
            "v0.8.0"
          ],
          "next_version_name": "v0.10.0"
        },
        {
          "name": "v0.10.0",
          "height": 6262420,
          "recommended_version": "v0.10.0",
          "compatible_versions": [
            "v0.10.0"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg"
    },
    "fees": {
      "fee_tokens": [
        {
          "denom": "uflix",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.001,
          "average_gas_price": 0.0025,
          "high_gas_price": 0.025
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "babc3f3f7804933265ec9c40ad94f4da8e9e0017",
          "address": "seed.rhinostake.com:16956",
          "provider": "RHINO"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "omniflixhub-mainnet-seed.autostake.com:27306",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:16956",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ],
      "persistent_peers": [
        {
          "id": "574b37cc6e80663e70673cbe848147c2643ca48e",
          "address": "35.240.187.174:26656"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "omniflixhub-mainnet-peer.autostake.com:27306",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://omniflix.kingnodes.com",
          "provider": "kingnodes"
        },
        {
          "address": "https://rpc.omniflix.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://rpc.omniflix.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://rpc-omniflixhub-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://omniflix-rpc.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc-omniflix.huginn.tech:443",
          "provider": "Huginn"
        },
        {
          "address": "https://rpc.omniflix.silentvalidator.com/",
          "provider": "silent"
        },
        {
          "address": "https://omniflix.nodejumper.io",
          "provider": "NODEJUMPER"
        },
        {
          "address": "https://omniflixhub-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rpc-omniflix.architectnodes.com",
          "provider": "Architect Nodes"
        }
      ],
      "rest": [
        {
          "address": "https://api.omniflix.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://api-omniflixhub-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://omniflix-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://api.omniflix.silentvalidator.com/",
          "provider": "silent"
        },
        {
          "address": "https://omniflix.nodejumper.io:1317",
          "provider": "NODEJUMPER"
        },
        {
          "address": "https://omniflix.kingnodes.com",
          "provider": "kingnodes"
        },
        {
          "address": "https://omniflixhub-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rest-omniflix.architectnodes.com",
          "provider": "Architect Nodes"
        }
      ],
      "grpc": [
        {
          "address": "grpc-omniflix.kingnodes.com:443",
          "provider": "kingnodes"
        },
        {
          "address": "grpc.omniflix.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "grpc-omniflixhub-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "omniflix-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "omniflix.nodejumper.io:9090",
          "provider": "NODEJUMPER"
        },
        {
          "address": "omniflixhub-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "grpc-omniflix.architectnodes.com:1443",
          "provider": "Architect Nodes"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/omniflixhub",
        "tx_page": "https://ezstaking.tools/omniflixhub/txs/${txHash}",
        "account_page": "https://ezstaking.tools/omniflixhub/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/omniflix",
        "tx_page": "https://www.mintscan.io/omniflix/txs/${txHash}",
        "account_page": "https://www.mintscan.io/omniflix/account/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/omniflixhub",
        "tx_page": "https://atomscan.com/omniflixhub/transactions/${txHash}",
        "account_page": "https://atomscan.com/omniflixhub/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "okexchain",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "OKExChain",
    "chain_id": "exchain-66",
    "bech32_prefix": "ex",
    "daemon_name": "exchaind",
    "node_home": "$HOME/.exchaind",
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "wei",
          "low_gas_price": 200000000,
          "average_gas_price": 250000000,
          "high_gas_price": 400000000
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/okex/exchain",
      "recommended_version": "v1.6.1.1",
      "compatible_versions": [
        "v1.2.2",
        "v1.6.1.1"
      ],
      "binaries": {},
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/okx/mainnet/main/genesis.json"
      },
      "versions": [
        {
          "name": "v1.6.1.1",
          "recommended_version": "v1.6.1.1",
          "compatible_versions": [
            "v1.2.2",
            "v1.6.1.1"
          ],
          "binaries": {}
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png"
    },
    "peers": {
      "seeds": [
        {
          "id": "e926c8154a2af4390de02303f0977802f15eafe2",
          "address": "3.16.103.80:26656",
          "provider": "Chillcrypto"
        },
        {
          "id": "7fa5b1d1f1e48659fa750b6aec702418a0e75f13",
          "address": "175.41.191.69:26656",
          "provider": "Unique farming"
        },
        {
          "id": "c8f32b793871b56a11d94336d9ce6472f893524b",
          "address": "35.74.8.189:26656",
          "provider": "DeLab"
        }
      ],
      "persistent_peers": []
    },
    "apis": {
      "rpc": [
        {
          "address": "https://exchaintmrpc.okex.org",
          "provider": "okx chain"
        }
      ],
      "rest": []
    },
    "explorers": [
      {
        "kind": "OKLink",
        "url": "https://www.oklink.com/en/okc",
        "tx_page": "https://www.oklink.com/en/okc/tx/${txHash}",
        "account_page": "https://www.oklink.com/en/okc/address/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "odin",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://odinprotocol.io/",
    "pretty_name": "Odin Protocol",
    "chain_id": "odin-mainnet-freya",
    "bech32_prefix": "odin",
    "daemon_name": "odind",
    "node_home": "$HOME/.odin",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "loki",
          "fixed_min_gas_price": 0.0125,
          "low_gas_price": 0.025,
          "average_gas_price": 0.05,
          "high_gas_price": 0.06
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "loki"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/ODIN-PROTOCOL/odin-core",
      "recommended_version": "v0.6.2",
      "compatible_versions": [
        "v0.6.2"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/ODIN-PROTOCOL/networks/master/mainnets/odin-mainnet-freya/genesis.json"
      },
      "versions": [
        {
          "name": "v0.6.2",
          "recommended_version": "v0.6.2",
          "compatible_versions": [
            "v0.6.2"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:16856",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "odin-mainnet-seed.autostake.com:26766",
          "provider": "AutoStake.net"
        }
      ],
      "persistent_peers": [
        {
          "id": "9d16b1ce74a34b869d69ad5fe34eaca614a36ecd",
          "address": "35.241.238.207:26656",
          "provider": "Odin Protocol"
        },
        {
          "id": "02e905f49e1b869f55ad010979931b542302a9e6",
          "address": "35.241.221.154:26656",
          "provider": "Odin Protocol"
        },
        {
          "id": "4847c79f1601d24d3605278a0183d416a99aa093",
          "address": "34.140.252.7:26656",
          "provider": "Odin Protocol"
        },
        {
          "id": "0165cd0d60549a37abb00b6acc8227a54609c648",
          "address": "34.79.179.216:26656",
          "provider": "Odin Protocol"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "odin-mainnet-peer.autostake.com:26766",
          "provider": "AutoStake.net"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "http://34.79.179.216:26657",
          "provider": "Odin Protocol"
        },
        {
          "address": "https://odin-rpc.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://odin-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ],
      "rest": [
        {
          "address": "http://34.79.179.216:1317/",
          "provider": "Odin Protocol"
        },
        {
          "address": "https://odin-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://odin-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ],
      "grpc": [
        {
          "address": "odin-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "odin-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "explorers": [
      {
        "kind": "odin web",
        "url": "https://mainnet.odinprotocol.io/",
        "tx_page": "https://mainnet.odinprotocol.io/transactions/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/odin",
        "tx_page": "https://ping.pub/odin/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "octa",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Octa",
    "chain_id": "octa",
    "bech32_prefix": "octa",
    "daemon_name": "octadaemon",
    "node_home": "$HOME/.octa",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uocta",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {
      "git_repo": "",
      "recommended_version": "",
      "compatible_versions": [],
      "binaries": {
        "linux/amd64": "",
        "linux/arm64": "",
        "darwin/amd64": "",
        "windows/amd64": ""
      },
      "genesis": {
        "genesis_url": "https://octa-coin-assets.s3.eu-central-1.amazonaws.com/genesis.json"
      }
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.svg"
    },
    "peers": {
      "seeds": [],
      "persistent_peers": []
    },
    "apis": {
      "rpc": [],
      "rest": []
    },
    "explorers": [
      {
        "kind": "Octa explorer",
        "url": "http://explorer.octa-coin.com/",
        "tx_page": "http://explorer.octa-coin.com/txs/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "nyx",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://nymtech.net/",
    "pretty_name": "Nym",
    "chain_id": "nyx",
    "bech32_prefix": "n",
    "daemon_name": "nyxd",
    "node_home": "$HOME/.nyxd",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "unym",
          "fixed_min_gas_price": 0.25
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/nymtech/nyxd/",
      "recommended_version": "v0.26.1",
      "compatible_versions": [
        "v0.26.1"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/nymtech/nymd/releases/"
      },
      "genesis": {
        "genesis_url": "https://nymtech.net/genesis/genesis.json"
      },
      "cosmwasm_enabled": true,
      "versions": [
        {
          "name": "v0.26.1",
          "recommended_version": "v0.26.1",
          "compatible_versions": [
            "v0.26.1"
          ],
          "cosmwasm_enabled": true,
          "binaries": {
            "linux/amd64": "https://github.com/nymtech/nyxd/releases"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png"
    },
    "peers": {
      "seeds": [
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:15356",
          "provider": "Polkachu"
        }
      ],
      "persistent_peers": [
        {
          "id": "4acf579e2744268f834c713e894850995bbf0ffa",
          "address": "50.18.31.225:26656"
        },
        {
          "id": "a58b9b102e7d91f4900036b40b8232d386245c55",
          "address": "3.65.247.65:26656"
        },
        {
          "id": "ee03a6777fb76a2efd0106c3769daaa064a3fcb5",
          "address": "51.79.21.187:26656"
        },
        {
          "id": "6bac8d8e4b43a230d2da45480d82ec87144c2f23",
          "address": "nyx-validator.nym.blockfend.com:26656"
        },
        {
          "id": "3905ef90a12784a6f0ae4435fcd8ad13816f12ac",
          "address": "35.245.211.169:26656"
        },
        {
          "id": "2f57a4a5926ceadb91a6df09a82ebad322777a6c",
          "address": "sentry-2.nym.ezstaking.xyz:26666"
        },
        {
          "id": "8fb63514b6325459fb90ede3b3697ec0827b6f50",
          "address": "35.223.70.235:26656"
        },
        {
          "id": "6625c048105d86d8bd6c22bc1359e10f4de1e6d4",
          "address": "34.125.78.165:26656"
        },
        {
          "id": "a0fd38e40fd53699437d90456e0a2e62df0607e0",
          "address": "15.235.9.199:26656"
        },
        {
          "id": "22120fe1203d2721cda9dd2548a346fdae43aedb",
          "address": "51.79.80.25:26656"
        },
        {
          "id": "611c8b24adc5ae17477b3dfedae32af117d6d276",
          "address": "35.215.45.32:26656"
        },
        {
          "id": "4e1663adac48c439baa5fbaebb9c9ddde91f9c18",
          "address": "51.79.72.10:26656"
        },
        {
          "id": "b436cf49cd0e163ea1aa9eaf38e3d2250eb42c9e",
          "address": "51.222.248.217:26656"
        },
        {
          "id": "2e2ae7a117b22c0a09b685b963603150f702b6af",
          "address": "144.126.133.37:10053"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.nyx.nodes.guru/",
          "provider": "nodes guru"
        },
        {
          "address": "https://nym.vladiatorlabs.io/",
          "provider": "vladiatorlabs"
        },
        {
          "address": "https://rpc.nym.forbole.com/",
          "provider": "forbole"
        },
        {
          "address": "https://rpc-nyx.testnet.run/",
          "provider": "testnet-run"
        },
        {
          "address": "https://nym-mainnet-rpc.commodum.io/",
          "provider": "commodum"
        },
        {
          "address": "https://nym-rpc.polkachu.com/",
          "provider": "Polkachu"
        }
      ],
      "rest": [
        {
          "address": "https://nym-api.polkachu.com/",
          "provider": "Polkachu"
        }
      ],
      "grpc": [
        {
          "address": "nym-grpc.polkachu.com:15390",
          "provider": "Polkachu"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Nodes Guru explorer",
        "url": "https://nym.explorers.guru/",
        "tx_page": "https://nym.explorers.guru/transaction/${txHash}",
        "account_page": "https://nym.explorers.guru/account/${accountAddress}"
      },
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/nyx",
        "tx_page": "https://ezstaking.tools/nyx/txs/${txHash}",
        "account_page": "https://ezstaking.tools/nyx/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/nyx",
        "tx_page": "https://www.mintscan.io/nyx/txs/${txHash}",
        "account_page": "https://www.mintscan.io/nyx/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/nyx",
        "tx_page": "https://ping.pub/nyx/tx/${txHash}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/nym",
        "tx_page": "https://bigdipper.live/nym/transactions/${txHash}",
        "account_page": "https://bigdipper.live/nym/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "nomic",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Nomic",
    "website": "https://nomic.io/",
    "chain_id": "nomic-stakenet-3",
    "bech32_prefix": "nomic",
    "daemon_name": "nomic",
    "node_home": "$HOME/.nomic-stakenet-3",
    "codebase": {
      "git_repo": "https://github.com/nomic-io/nomic",
      "recommended_version": "develop",
      "compatible_versions": [
        "develop",
        "v3"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/nomic-io/nomic/develop/genesis.json"
      },
      "versions": [
        {
          "name": "develop",
          "recommended_version": "develop",
          "compatible_versions": [
            "develop",
            "v3"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "238120dfe716082754048057c1fdc3d6f09609b5",
          "address": "161.35.51.124:26656"
        },
        {
          "id": "34544f82960d2ff2b1defb7b04f097557f4183be",
          "address": "seeds.goldenratiostaking.net:26656",
          "provider": "Golden Ratio Staking"
        },
        {
          "id": "10beadbcd4bc5fef8a1f5f57353bdb8646f7a554",
          "address": "seeds.whispernode.com:26656",
          "provider": "WhisperNode🤐"
        },
        {
          "id": "27b6d74c8408e033e2e5a9e966a0d15782e33596",
          "address": "seeds.nethernode.xyz:12756",
          "provider": "carbonZERO🌲"
        }
      ],
      "persistent_peers": []
    },
    "apis": {
      "rpc": [
        {
          "address": "http://138.197.71.46:26657",
          "provider": "nomic-io"
        },
        {
          "address": "https://nomic-rpc.polkachu.com/",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc.nomic.interbloc.org",
          "provider": "Interbloc"
        },
        {
          "address": "https://rpc.nomic.bh.rocks",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://rpc-nomic.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://rpc-nomic.carbonZERO.zone:443",
          "provider": "carbonZERO🌲"
        }
      ],
      "rest": [
        {
          "address": "https://app.nomic.io:8443",
          "provider": "nomic-io"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/nomic",
        "account_page": "https://bigdipper.live/nomic/accounts/${accountAddress}",
        "tx_page": "https://bigdipper.live/nomic/transactions/${txHash}"
      },
      {
        "kind": "Zenscan.io",
        "url": "https://nomic.zenscan.io/index.php",
        "account_page": "https://nomic.zenscan.io/address.php?address=${accountAddress}",
        "tx_page": "https://nomic.zenscan.io/transaction.php?hash=${txHash}"
      }
    ],
    "slip44": 118
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "nois",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://nois.network",
    "pretty_name": "Nois",
    "chain_id": "nois-1",
    "bech32_prefix": "nois",
    "daemon_name": "noisd",
    "node_home": "$HOME/.noisd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "unois",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.05,
          "average_gas_price": 0.05,
          "high_gas_price": 0.1
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "unois"
        }
      ],
      "lock_duration": {
        "time": "1814400s"
      }
    },
    "codebase": {
      "git_repo": "https://github.com/noislabs/noisd",
      "recommended_version": "v1.0.0",
      "compatible_versions": [
        "v1.0.0"
      ],
      "cosmos_sdk_version": "0.45",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "cosmwasm_version": "0.30",
      "cosmwasm_enabled": true,
      "genesis": {
        "name": "v1",
        "genesis_url": "https://raw.githubusercontent.com/noislabs/networks/nois1.final.1/nois-1/genesis.json"
      },
      "versions": [
        {
          "name": "v1",
          "tag": "v1.0.0",
          "height": 0,
          "recommended_version": "v1.0.0",
          "compatible_versions": [
            "v1.0.0"
          ],
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.30",
          "cosmwasm_enabled": true
        }
      ]
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png",
        "theme": {
          "primary_color_hex": "#0C0914"
        }
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "b3e3bd436ee34c39055a4c9946a02feec232988c",
          "address": "seeds.cros-nest.com:56656",
          "provider": "Cros-Nest"
        },
        {
          "id": "babc3f3f7804933265ec9c40ad94f4da8e9e0017",
          "address": "seed.rhinostake.com:17356",
          "provider": "RHINO"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:17356",
          "provider": "Polkachu"
        },
        {
          "id": "72cd4222818d25da5206092c3efc2c0dd0ec34fe",
          "address": "161.97.96.91:36656",
          "provider": "AM Solutions"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:17356",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "c8db99691545545402a1c45fa897f3cb1a05aea6",
          "address": "nois-mainnet-seed.itrocket.net:36656",
          "provider": "itrocket"
        },
        {
          "id": "400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc",
          "address": "nois.rpc.kjnodes.com:15159",
          "provider": "kjnodes"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://nois-rpc.nysa.network",
          "provider": "nysa.network"
        },
        {
          "address": "https://nois-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc-nois.mib.tech/",
          "provider": "MadeInBlock"
        },
        {
          "address": "https://rpc.noismain.mcbnode.online",
          "provider": "mcbnode"
        },
        {
          "address": "https://m-nois.rpc.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://rpc-nois.ezstaking.dev",
          "provider": "EZStaking"
        },
        {
          "address": "https://nois-mainnet-rpc.itrocket.net",
          "provider": "itrocket"
        },
        {
          "address": "https://rpc.nois.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://rpc-nois.d-stake.xyz",
          "provider": "D-Stake"
        },
        {
          "address": "https://rpc.nois.hexnodes.co",
          "provider": "HexNodes"
        },
        {
          "address": "https://rpc-nois.sr20de.xyz",
          "provider": "SR20DE"
        },
        {
          "address": "https://nois-mainnet-rpc.autostake.com",
          "provider": "AutoStake"
        },
        {
          "address": "https://nois-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://nois.kingnodes.com",
          "provider": "Kingnodes"
        },
        {
          "address": "https://nois.rpc.kjnodes.com",
          "provider": "kjnodes"
        }
      ],
      "grpc": [
        {
          "address": "https://nois-grpc.nysa.network",
          "provider": "nysa.network"
        },
        {
          "address": "https://nois-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://grpc.noismain.mcbnode.online",
          "provider": "mcbnode"
        },
        {
          "address": "nois-mainnet-grpc.itrocket.net:36090",
          "provider": "itrocket"
        },
        {
          "address": "https://grpc.nois.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://grpc-nois.d-stake.xyz",
          "provider": "D-Stake"
        },
        {
          "address": "https://grpc.nois.hexnodes.co",
          "provider": "HexNodes"
        },
        {
          "address": "https://grpc-nois.sr20de.xyz",
          "provider": "SR20DE"
        },
        {
          "address": "https://nois-testnet-grpc.autostake.com",
          "provider": "AutoStake"
        },
        {
          "address": "nois-grpc.polkachu.com:17390",
          "provider": "Polkachu"
        },
        {
          "address": "https://grpc-nois.kingnodes.com",
          "provider": "Kingnodes"
        },
        {
          "address": "nois.grpc.kjnodes.com:15190",
          "provider": "kjnodes"
        }
      ],
      "rest": [
        {
          "address": "https://api.noismain.mcbnode.online",
          "provider": "mcbnode"
        },
        {
          "address": "https://m-nois.api.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://nois-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://lcd-nois.ezstaking.dev",
          "provider": "EZStaking"
        },
        {
          "address": "https://lcd-nois.mib.tech/",
          "provider": "MadeInBlock"
        },
        {
          "address": "https://nois-mainnet-api.itrocket.net",
          "provider": "itrocket"
        },
        {
          "address": "https://api.nois.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://api-nois.d-stake.xyz",
          "provider": "D-Stake"
        },
        {
          "address": "https://lcd.nois.hexnodes.co",
          "provider": "HexNodes"
        },
        {
          "address": "https://api-nois.sr20de.xyz",
          "provider": "SR20DE"
        },
        {
          "address": "https://nois.api.m.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://nois-testnet-lcd.autostake.com",
          "provider": "AutoStake"
        },
        {
          "address": "https://nois-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://nois.kingnodes.com",
          "provider": "Kingnodes"
        },
        {
          "address": "https://nois.api.kjnodes.com",
          "provider": "kjnodes"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/nois",
        "tx_page": "https://ezstaking.tools/nois/txs/${txHash}",
        "account_page": "https://ezstaking.tools/nois/account/${accountAddress}"
      },
      {
        "kind": "explorers.guru",
        "url": "https://nois.explorers.guru",
        "tx_page": "https://nois.explorers.guru/transaction/${txHash}",
        "account_page": "https://nois.explorers.guru/account/${accountAddress}"
      }
    ],
    "keywords": [
      "nois",
      "randomness",
      "drand",
      "wasm"
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "noble",
    "chain_id": "noble-1",
    "website": "https://nobleassets.xyz/",
    "pretty_name": "Noble",
    "status": "live",
    "network_type": "mainnet",
    "bech32_prefix": "noble",
    "daemon_name": "nobled",
    "node_home": "$HOME/.nobled",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uusdc",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.03
        },
        {
          "denom": "ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 0.002,
          "high_gas_price": 0.003
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ustake"
        }
      ],
      "lock_duration": {
        "time": "1814400s"
      }
    },
    "codebase": {
      "git_repo": "https://github.com/strangelove-ventures/noble",
      "recommended_version": "v1.0.0",
      "compatible_versions": [
        "v1.0.0"
      ],
      "cosmos_sdk_version": "v0.45",
      "consensus": {
        "type": "tendermint",
        "version": "v0.34"
      },
      "cosmwasm_enabled": false,
      "ibc_go_version": "v3.4.0",
      "ics_enabled": [
        "ics20-1"
      ],
      "genesis": {
        "name": "v1.0.0",
        "genesis_url": "https://raw.githubusercontent.com/strangelove-ventures/noble-networks/main/mainnet/noble-1/genesis.json"
      },
      "versions": [
        {
          "name": "v1.0.0",
          "tag": "v1.0.0",
          "height": 0,
          "recommended_version": "v1.0.0",
          "compatible_versions": [
            "v1.0.0"
          ],
          "cosmos_sdk_version": "v0.45",
          "consensus": {
            "type": "tendermint",
            "version": "v0.34"
          },
          "cosmwasm_enabled": false,
          "ibc_go_version": "v3.4.0",
          "ics_enabled": [
            "ics20-1"
          ],
          "next_version_name": "neon"
        },
        {
          "name": "neon",
          "tag": "v2.0.0",
          "height": 119000,
          "recommended_version": "v2.0.0",
          "compatible_versions": [
            "v2.0.0"
          ],
          "cosmos_sdk_version": "v0.45",
          "consensus": {
            "type": "tendermint",
            "version": "v0.34"
          },
          "cosmwasm_enabled": false,
          "ibc_go_version": "v3.4.0",
          "ics_enabled": [
            "ics20-1"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/Noble-Logo.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://noble-rpc.polkachu.com",
          "provider": "polkachu"
        }
      ],
      "rest": [
        {
          "address": "https://noble-api.polkachu.com",
          "provider": "polkachu"
        }
      ],
      "grpc": [
        {
          "address": "noble-grpc.polkachu.com:21590",
          "provider": "polkachu"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/noble",
        "tx_page": "https://www.mintscan.io/noble/txs/${txHash}",
        "account_page": "https://www.mintscan.io/noble/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://explore.strange.love/noble-1",
        "tx_page": "https://explore.strange.love/noble-1/tx/${txHash}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/noble",
        "account_page": "https://stakeflow.io/noble/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "neutron",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Neutron",
    "chain_id": "neutron-1",
    "bech32_prefix": "neutron",
    "daemon_name": "neutrond",
    "node_home": "$HOME/.neutrond",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "untrn",
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.05
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/neutron-org/neutron",
      "recommended_version": "v1.0.1",
      "compatible_versions": [],
      "cosmos_sdk_version": "0.45",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "cosmwasm_version": "0.31",
      "cosmwasm_enabled": true,
      "ibc_go_version": "4.3.0",
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/neutron-org/mainnet-assets/main/neutron-1-genesis.json"
      },
      "versions": [
        {
          "name": "v1.0.1",
          "recommended_version": "v1.0.1",
          "compatible_versions": [],
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.31",
          "cosmwasm_enabled": true,
          "ibc_go_version": "4.3.0"
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-black-logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-black-logo.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "24f609fb5946ca3a979f40b7f54132c00104433e",
          "address": "p2p-erheim.neutron-1.neutron.org:26656",
          "provider": "Neutron"
        },
        {
          "id": "b1c6fa570a184c56d0d736d260b8065d887e717c",
          "address": "p2p-kralum.neutron-1.neutron.org:26656",
          "provider": "Neutron"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:19156",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ],
      "persistent_peers": [
        {
          "id": "e5d2743d9a3de514e4f7b9461bf3f0c1500c58d9",
          "address": "neutron.peer.stakewith.us:39956",
          "provider": "StakeWithUs"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-kralum.neutron-1.neutron.org",
          "provider": "Neutron"
        },
        {
          "address": "https://rpc.novel.remedy.tm.p2p.org",
          "provider": "P2P"
        },
        {
          "address": "https://neutron-rpc.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ],
      "rest": [
        {
          "address": "https://rest-kralum.neutron-1.neutron.org",
          "provider": "Neutron"
        },
        {
          "address": "https://api.novel.remedy.tm.p2p.org",
          "provider": "P2P"
        },
        {
          "address": "https://neutron-api.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ],
      "grpc": [
        {
          "address": "grpc-kralum.neutron-1.neutron.org:80",
          "provider": "Neutron"
        },
        {
          "address": "https://grpc.novel.remedy.tm.p2p.org",
          "provider": "P2P"
        },
        {
          "address": "https://grpc-web.novel.remedy.tm.p2p.org",
          "provider": "P2P"
        },
        {
          "address": "neutron-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Mintscan",
        "url": "https://www.mintscan.io/neutron",
        "tx_page": "https://www.mintscan.io/neutron/txs/${txHash}",
        "account_page": "https://www.mintscan.io/neutron/account/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "mythos",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Mythos",
    "chain_id": "mythos_7001-1",
    "bech32_prefix": "mythos",
    "daemon_name": "mythosd",
    "node_home": "$HOME/.mythosd",
    "key_algos": [
      "ethsecp256k1"
    ],
    "extra_codecs": [
      "ethermint"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "aMYT"
        }
      ]
    },
    "peers": {
      "seeds": [],
      "persistent_peers": []
    },
    "apis": {
      "rpc": [
        {
          "address": "https://mythos-rpc.provable.dev:443/",
          "provider": "laurel.provable"
        }
      ],
      "rest": [
        {
          "address": "https://mythos.provable.dev/rest/",
          "provider": "laurel.provable"
        }
      ],
      "grpc": [
        {
          "address": "mythos-grpc.provable.dev:443",
          "provider": "laurel.provable"
        }
      ],
      "evm-http-jsonrpc": []
    },
    "explorers": [],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.svg"
    },
    "codebase": {
      "genesis": {
        "genesis_url": ""
      }
    }
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "mises",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://mises.site",
    "pretty_name": "Mises",
    "chain_id": "mainnet",
    "bech32_prefix": "mises",
    "node_home": "$HOME/.misestm",
    "daemon_name": "misestmd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "umis",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "umis"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/mises-id/mises-tm",
      "recommended_version": "v1.0.4",
      "compatible_versions": [
        "v1.0.4"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/mises-id/mainnet/master/genesis.json"
      },
      "versions": [
        {
          "name": "v1.0.4",
          "recommended_version": "v1.0.4",
          "compatible_versions": [
            "v1.0.4"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mises/images/mises.png"
    },
    "peers": {
      "seeds": [
        {
          "id": "40a8318fa18fa9d900f4b0d967df7b1020689fa0",
          "address": "e1.mises.site:26656",
          "provider": "Mises-2"
        },
        {
          "id": "0d25c5db4cbdc4171c8272278040db774011c268",
          "address": "e2.mises.site:26656",
          "provider": "Mises-3"
        },
        {
          "id": "1adcfe9b030125b9caa72f3eae3b1274cbaca2cd",
          "address": "w1.mises.site:26656",
          "provider": "Mises-4"
        },
        {
          "id": "1a96557a74cb8448249b9d15c3cc38cd3aff553d",
          "address": "w2.mises.site:26656",
          "provider": "Mises-5"
        }
      ],
      "persistent_peers": []
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.gw.mises.site:443",
          "provider": "Mises-1"
        },
        {
          "address": "https://e1.mises.site:443",
          "provider": "Mises-2"
        },
        {
          "address": "https://e2.mises.site:443",
          "provider": "Mises-3"
        },
        {
          "address": "https://w1.mises.site:443",
          "provider": "Mises-4"
        },
        {
          "address": "https://w2.mises.site:443",
          "provider": "Mises-5"
        }
      ],
      "rest": [],
      "grpc": []
    },
    "explorers": [
      {
        "kind": "Mises-GW Explorer",
        "url": "https://gw.mises.site",
        "tx_page": "https://gw.mises.site/tx/${txHash}"
      },
      {
        "kind": "Jambulmerah ping.pub based",
        "url": "https://explorer.jambulmerah.dev/mises",
        "tx_page": "https://explorer.jambulmerah.dev/mises/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "migaloo",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.whitewhale.money/",
    "pretty_name": "Migaloo",
    "chain_id": "migaloo-1",
    "bech32_prefix": "migaloo",
    "daemon_name": "migalood",
    "node_home": "$HOME/.migalood",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uwhale",
          "fixed_min_gas_price": 0.25,
          "low_gas_price": 0.25,
          "average_gas_price": 0.5,
          "high_gas_price": 0.75
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uwhale"
        }
      ]
    },
    "logo_URIs": {
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.svg",
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.png"
    },
    "codebase": {
      "git_repo": "https://github.com/White-Whale-Defi-Platform/migaloo-chain",
      "recommended_version": "v2.0.0",
      "compatible_versions": [
        "v2.0.0"
      ],
      "cosmos_sdk_version": "0.45",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "cosmwasm_version": "0.28",
      "cosmwasm_enabled": true,
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/White-Whale-Defi-Platform/migaloo-chain/release/v2.0.x/networks/mainnet/genesis.json"
      },
      "versions": [
        {
          "name": "v2.0.0",
          "recommended_version": "v2.0.0",
          "compatible_versions": [
            "v2.0.0"
          ],
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.28",
          "cosmwasm_enabled": true
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:12856",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "c936ae78abca1169362e068e3e94c87a0ace96c7",
          "address": "seeds.cros-nest.com:27656",
          "provider": "Cros-Nest"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "whitewhale-mainnet-seed.autostake.com:27096",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:20756",
          "provider": "Polkachu"
        },
        {
          "id": "400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc",
          "address": "migaloo.rpc.kjnodes.com:14959",
          "provider": "kjnodes"
        },
        {
          "id": "1b6a3dd166b8814f3064444206c2194a92dea62d",
          "address": "seeds.whispernode.com:20756",
          "provider": "WhisperNode🤐"
        },
        {
          "id": "27b6d74c8408e033e2e5a9e966a0d15782e33596",
          "address": "seeds.nethernode.xyz:20756",
          "provider": "carbonZERO🌲"
        }
      ],
      "persistent_peers": [
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "whitewhale-mainnet-peer.autostake.com:27096",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://whitewhale-rpc.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc-whitewhale.goldenratiostaking.net",
          "provider": "Golden Ratio Staking"
        },
        {
          "address": "https://whitewhale-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rpc-whitewhale.carbonzero.zone:443",
          "provider": "carbonZERO🌲"
        },
        {
          "address": "https://rpc-whitewhale.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://migaloo-rpc.kleomedes.network:443",
          "provider": "Kleomedes"
        },
        {
          "address": "https://rpc.whitewhale.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://migaloo.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://migaloo.rpc.silknodes.io",
          "provider": "Silk Nodes"
        }
      ],
      "rest": [
        {
          "address": "https://whitewhale-api.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://whitewhale-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rest-whitewhale.carbonzero.zone:443",
          "provider": "carbonZERO🌲"
        },
        {
          "address": "https://lcd-whitewhale.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://migaloo-api.kleomedes.network:443",
          "provider": "Kleomedes"
        },
        {
          "address": "https://api.whitewhale.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://migaloo.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://migaloo.api.silknodes.io",
          "provider": "Silk Nodes"
        }
      ],
      "grpc": [
        {
          "address": "whitewhale-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "whitewhale-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "migaloo-grpc.polkachu.com:20790",
          "provider": "Polkachu"
        },
        {
          "address": "https://grpc.whitewhale.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "migaloo.grpc.kjnodes.com:14990",
          "provider": "kjnodes"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/migaloo",
        "tx_page": "https://ping.pub/migaloo/tx/${txHash}"
      },
      {
        "kind": "Silk Nodes",
        "url": "https://explorer.silknodes.io/migaloo",
        "tx_page": "https://explorer.silknodes.io/migaloo/tx/${txHash}",
        "account_page": "https://explorer.silknodes.io/migaloo/account/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/migaloo",
        "tx_page": "https://atomscan.com/migaloo/transactions/${txHash}",
        "account_page": "https://atomscan.com/migaloo/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "microtick",
    "status": "killed",
    "network_type": "mainnet",
    "pretty_name": "Microtick",
    "chain_id": "microtick-1",
    "bech32_prefix": "micro",
    "daemon_name": "mtm",
    "fees": {
      "fee_tokens": [
        {
          "denom": "utick"
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "utick"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/microtick/mtzone",
      "recommended_version": "mtm-v2.0.4",
      "compatible_versions": [
        "mtm-v2.0.4"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/microtick/stargate-genesis/master/genesis.json"
      },
      "versions": [
        {
          "name": "mtm-v2.0.4",
          "recommended_version": "mtm-v2.0.4",
          "compatible_versions": [
            "mtm-v2.0.4"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg"
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/microtick",
        "tx_page": "https://ping.pub/microtick/tx/${txHash}"
      }
    ],
    "slip44": 118
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "meme",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "MEME",
    "chain_id": "meme-1",
    "bech32_prefix": "meme",
    "daemon_name": "memed",
    "node_home": "$HOME/.memed",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "umeme",
          "fixed_min_gas_price": 0.025,
          "low_gas_price": 0.025,
          "average_gas_price": 0.035,
          "high_gas_price": 0.045
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "umeme"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/memecosmos/meme/",
      "recommended_version": "v1.0.0",
      "compatible_versions": [
        "v1.0.0"
      ],
      "genesis": {
        "genesis_url": "https://github.com/memecosmos/mainnet/raw/main/meme-1/genesis.json"
      },
      "versions": [
        {
          "name": "v1.0.0",
          "recommended_version": "v1.0.0",
          "compatible_versions": [
            "v1.0.0"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:14756",
          "provider": "Polkachu"
        }
      ],
      "persistent_peers": [
        {
          "id": "90570d614d01c617953645faa4b955616fbb8d64",
          "address": "205.209.120.105:26656",
          "provider": "MEME Foundation"
        },
        {
          "id": "f3ee4c635b8b6165c25abef548c164c53014b90e",
          "address": "165.140.242.34:26656",
          "provider": "MEME Foundation"
        },
        {
          "id": "c57fce65a0e6be87763ae38d607b817b3acde620",
          "address": "173.212.215.104:26656",
          "provider": "Theamsolutions"
        },
        {
          "id": "4273ea9e15f5b84e3bb58e951e0c5b40c478ff59",
          "address": "65.109.28.177:26736",
          "provider": "ANODE TEAM"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-meme-1.meme.sx/",
          "provider": "MEME Foundation"
        },
        {
          "address": "https://meme-rpc.polkachu.com/",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-meme.pupmos.network/",
          "provider": "PUPMØS"
        },
        {
          "address": "https://meme-rpc.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://meme.rpc.m.anode.team",
          "provider": "ANODE TEAM"
        }
      ],
      "rest": [
        {
          "address": "https://api-meme-1.meme.sx/",
          "provider": "MEME Foundation"
        },
        {
          "address": "https://meme-api.polkachu.com/",
          "provider": "Polkachu"
        },
        {
          "address": "https://api-meme.pupmos.network/",
          "provider": "PUPMØS"
        },
        {
          "address": "https://meme-api.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://meme.api.m.anode.team",
          "provider": "ANODE TEAM"
        }
      ],
      "grpc": [
        {
          "address": "meme-grpc.polkachu.com:14790",
          "provider": "Polkachu"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/meme",
        "tx_page": "https://ping.pub/meme/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/meme",
        "tx_page": "https://atomscan.com/meme/transactions/${txHash}",
        "account_page": "https://atomscan.com/meme/accounts/${accountAddress}"
      },
      {
        "kind": "MEME Explorer",
        "url": "https://explorer.meme.sx/meme",
        "tx_page": "https://explorer.meme.sx/meme/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/meme",
        "tx_page": "https://atomscan.com/meme/transactions/${txHash}",
        "account_page": "https://atomscan.com/meme/accounts/${accountAddress}"
      },
      {
        "kind": "Brochain",
        "url": "https://explorer.brocha.in/meme",
        "tx_page": "https://explorer.brocha.in/meme/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "medasdigital",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://medas-digital.io/",
    "pretty_name": "Medas Digital Network",
    "chain_id": "medasdigital-1",
    "bech32_prefix": "medas",
    "daemon_name": "medasdigitald",
    "node_home": "$HOME/.medasdigital",
    "key_algos": [
      "secp256k1"
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "umedas",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 0.0001,
          "high_gas_price": 0.00025
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "umedas"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/oxygene76/medasdigital/",
      "recommended_version": "v0.94",
      "compatible_versions": [
        "v0.94"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/oxygene76/medasdigital/main/networks/mainnet/genesis.json"
      },
      "versions": [
        {
          "name": "v0.94",
          "recommended_version": "v0.94",
          "compatible_versions": [
            "v0.94"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg"
    },
    "peers": {
      "persistent_peers": [
        {
          "id": "afa88136727d46b4c15fe6e041f53fdb25cc37c0",
          "address": "212.6.177.10:26656",
          "provider": "Neptun Validator"
        },
        {
          "id": "a50887a49a5c908631a036013d38cc825b10f8fe",
          "address": "212.6.177.11:26656",
          "provider": "Uranus Validator"
        },
        {
          "id": "e89a2ed10488de6d8134ff67101aa1a883a0c6bd",
          "address": "212.6.177.12:26656",
          "provider": "Saturn Validator"
        },
        {
          "id": "95d55f5d4a61d18508441f3357fadf221abe43ca",
          "address": "64.251.18.192:26656",
          "provider": "Mars Validator"
        },
        {
          "id": "15376dbf45a1cf907958e2a684c436a62cc0825d",
          "address": "67.207.180.166:26656",
          "provider": "Jupiter Validator"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.medas-digital.io:26657/",
          "provider": "Neptun Validator"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.medas-digital.io:1317/",
          "provider": "Neptun Validator"
        }
      ],
      "grpc": [
        {
          "address": "grpc.medas-digital.io:9090",
          "provider": "Neptun Validator"
        }
      ]
    },
    "explorers": [
      {
        "kind": "BigDipper",
        "url": "https://explorer.medas-digital.io:3100/medasdigital",
        "tx_page": "https://explorer.medas-digital.io:3100/medasdigital/transactions/${txHash}",
        "account_page": "explorer.medas-digital.io:3100/medasdigital/accounts/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/frontier/medasdigital-1",
        "tx_page": "https://atomscan.com/frontier/medasdigital-1/transactions/${txHash}",
        "account_page": "https://atomscan.com/frontier/medasdigital-1/accounts/${accountAddress}"
      }
    ],
    "slip44": 118
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "mayachain",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://mayaprotocol.com/",
    "pretty_name": "Maya Protocol",
    "chain_id": "mayachain-mainnet-v1",
    "bech32_prefix": "maya",
    "daemon_name": "mayanode",
    "node_home": "$HOME/.mayanode",
    "slip44": 931,
    "codebase": {
      "git_repo": "https://gitlab.com/mayachain/mayanode",
      "recommended_version": "V1.103.3",
      "compatible_versions": [
        "V1.103.3"
      ],
      "genesis": {
        "genesis_url": "https://tendermint.mayachain.info/genesis"
      },
      "versions": [
        {
          "name": "V1.103.3",
          "recommended_version": "V1.103.3",
          "compatible_versions": [
            "V1.103.3"
          ]
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "bd3cdc522a8db64935e6ab5509c3fe3bebc036a8",
          "address": "13.52.55.197:27146"
        },
        {
          "id": "55e511e9d3fe84cfad597b0adab98bb2e3c6efc7",
          "address": "18.194.46.101:27146"
        },
        {
          "id": "ae1713e45cb5c579fc07b7f0ff24adad1ea93aa1",
          "address": "18.221.183.211:27146"
        },
        {
          "id": "3a2c07509c1ac64de4d6d832dca7cdbfca398fc2",
          "address": "15.156.45.237:27146"
        },
        {
          "id": "b149d5ad54c7b56a3b43548e3814713f20519946",
          "address": "18.217.85.10:27146"
        },
        {
          "id": "c0f2a2a7e50b56fc92f5723dd3baf883c12048db",
          "address": "3.132.55.140:27146"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://tendermint.mayachain.info",
          "provider": "tendermint"
        }
      ],
      "rest": [
        {
          "address": "https://mayanode.mayachain.info",
          "provider": "mayanode"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Maya Protocol explorer",
        "url": "https://www.explorer.mayachain.info",
        "tx_page": "https://www.explorer.mayachain.info/#/txs/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "mars",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.marsprotocol.io/",
    "pretty_name": "Mars Hub",
    "chain_id": "mars-1",
    "bech32_prefix": "mars",
    "daemon_name": "marsd",
    "node_home": "$HOME/.mars",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "alternative_slip44s": [
      330
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "umars",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 0,
          "high_gas_price": 0.01
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "umars"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/mars-protocol/hub",
      "recommended_version": "v1.0.0",
      "compatible_versions": [
        "v1.0.0"
      ],
      "cosmos_sdk_version": "0.46.7",
      "consensus": {
        "type": "tendermint",
        "version": "0.34.24"
      },
      "cosmwasm_version": "0.30.0",
      "cosmwasm_enabled": true,
      "ibc_go_version": "6.1.0",
      "ics_enabled": [
        "ics20-1"
      ],
      "genesis": {
        "genesis_url": "https://github.com/mars-protocol/networks/raw/main/mars-1/genesis.json"
      },
      "versions": [
        {
          "name": "v1",
          "tag": "v1.0.0",
          "height": 0,
          "recommended_version": "v1.0.0",
          "compatible_versions": [
            "v1.0.0"
          ],
          "cosmos_sdk_version": "0.46.7",
          "consensus": {
            "type": "tendermint",
            "version": "0.34.24"
          },
          "cosmwasm_version": "0.30.0",
          "cosmwasm_enabled": true,
          "ibc_go_version": "6.1.0",
          "ics_enabled": [
            "ics20-1"
          ]
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:18556",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "mars-mainnet-seed.autostake.com:27056",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:18556",
          "provider": "Polkachu"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "mars-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "e726816f42831689eab9378d5d577f1d06d25716",
          "address": "mars-seed-2.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc",
          "address": "mars.rpc.kjnodes.com:14559",
          "provider": "kjnodes"
        },
        {
          "id": "c4168cce14ec32e067cf153a08a1b85be881e25a",
          "address": "seeds.whispernode.com:18556",
          "provider": "WhisperNode🤐"
        },
        {
          "id": "27b6d74c8408e033e2e5a9e966a0d15782e33596",
          "address": "seeds.nethernode.xyz:18556",
          "provider": "carbonZERO🌲"
        }
      ],
      "persistent_peers": [
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "mars-mainnet-peer.autostake.com:27056",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.marsprotocol.io:443",
          "provider": "Delphi Labs"
        },
        {
          "address": "https://mars-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://mars-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rpc-mars.goldenratiostaking.net",
          "provider": "Golden Ratio Staking"
        },
        {
          "address": "https://mars-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-mars.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://mars.kingnodes.com:443",
          "provider": "Kingnodes"
        },
        {
          "address": "https://rpc.expedition-mars.com",
          "provider": "Expedition Mars"
        },
        {
          "address": "https://mars-rpc.genznodes.dev:443",
          "provider": "genznodes"
        },
        {
          "address": "https://rpc-mars.carbonZERO.zone:443",
          "provider": "carbonZERO🌲"
        },
        {
          "address": "https://mars-rpc.stakeandrelax.net",
          "provider": "Stake&Relax Validator 🦥"
        },
        {
          "address": "https://mars.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://rpc.mars.nodestake.top",
          "provider": "NodeStake"
        }
      ],
      "rest": [
        {
          "address": "https://rest.marsprotocol.io:443",
          "provider": "Delphi Labs"
        },
        {
          "address": "https://mars-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://mars-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://mars-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://lcd-mars.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://mars.kingnodes.com:443",
          "provider": "Kingnodes"
        },
        {
          "address": "https://lcd.expedition-mars.com:443",
          "provider": "Expedition Mars"
        },
        {
          "address": "https://mars-api.genznodes.dev:443",
          "provider": "genznodes"
        },
        {
          "address": "https://rest-mars.carbonZERO.zone:443",
          "provider": "carbonZERO🌲"
        },
        {
          "address": "https://mars-api.stakeandrelax.net",
          "provider": "Stake&Relax Validator 🦥"
        },
        {
          "address": "https://mars.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://api.mars.nodestake.top",
          "provider": "NodeStake"
        }
      ],
      "grpc": [
        {
          "address": "grpc.marsprotocol.io:443",
          "provider": "Delphi Labs"
        },
        {
          "address": "mars-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "mars-grpc.polkachu.com:18590",
          "provider": "Polkachu"
        },
        {
          "address": "mars-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "grpc-mars.kingnodes.com:443",
          "provider": "Kingnodes"
        },
        {
          "address": "mars-grpc.genznodes.dev:9090",
          "provider": "genznodes"
        },
        {
          "address": "mars.grpc.kjnodes.com:14590",
          "provider": "kjnodes"
        },
        {
          "address": "grpc.mars.nodestake.top:443",
          "provider": "NodeStake"
        }
      ]
    },
    "explorers": [
      {
        "kind": "BigDipper",
        "url": "https://explorer.marsprotocol.io",
        "tx_page": "https://explorer.marsprotocol.io/transactions/${txHash}",
        "account_page": "https://explorer.marsprotocol.io/accounts/${accountAddress}"
      },
      {
        "kind": "NodeStake Explorer",
        "url": "https://explorer.nodestake.top/mars",
        "tx_page": "https://explorer.nodestake.top/mars/transactions/${txHash}",
        "account_page": "https://explorer.nodestake.top/mars/account/${accountAddress}"
      },
      {
        "kind": "Nodes.Guru",
        "url": "https://mars.explorers.guru/",
        "tx_page": "https://mars.explorers.guru/transaction/${txHash}",
        "account_page": "https://mars.explorers.guru/account/${accountAddress}"
      },
      {
        "kind": "MintScan",
        "url": "https://www.mintscan.io/mars-protocol",
        "tx_page": "https://www.mintscan.io/mars-protocol/txs/${txHash}",
        "account_page": "https://www.mintscan.io/mars-protocol/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/mars",
        "tx_page": "https://ping.pub/mars/tx/${txHash}",
        "account_page": "https://ping.pub/mars/account/${accountAddress}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-protocol.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-protocol.svg"
    }
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "lumnetwork",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://lum.network/",
    "pretty_name": "Lum Network",
    "chain_id": "lum-network-1",
    "bech32_prefix": "lum",
    "daemon_name": "lumd",
    "node_home": "$HOME/.lumd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 880,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ulum",
          "fixed_min_gas_price": 0.001,
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ulum"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/lum-network/chain",
      "recommended_version": "v1.3.1",
      "compatible_versions": [
        "v1.3.1"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/lum-network/mainnet/master/genesis.json"
      },
      "versions": [
        {
          "name": "v1.3.1",
          "recommended_version": "v1.3.1",
          "compatible_versions": [
            "v1.3.1"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "19ad16527c98b782ee35df56b65a3a251bd99971",
          "address": "peer-1.mainnet.lum.network:26656",
          "provider": "lum foundation"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:16756",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "0df233b1eb62504f96a856ce358014b2fb8ce91b",
          "address": "lum-seed.panthea.eu:43656",
          "provider": "Panthea EU"
        }
      ],
      "persistent_peers": [
        {
          "id": "b47626b9d78ed7ed3c413304387026f907c70cbe",
          "address": "peer-0.mainnet.lum.network:26656",
          "provider": "lum foundation"
        },
        {
          "id": "fbaeeff89ec94a4f6c4a2a61e24af7d06b3be0c8",
          "address": "46.166.140.180:26656",
          "provider": "simply staking"
        },
        {
          "id": "433c60a5bc0a693484b7af26208922b84773117e",
          "address": "34.209.132.0:26656",
          "provider": "cosmostation"
        },
        {
          "id": "43216584c1e6b1056566a4825b15cdfbfc79d9e8",
          "address": "lum-peer.panthea.eu:33656",
          "provider": "Panthea EU"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://node0.mainnet.lum.network/rpc",
          "provider": "Lum Foundation"
        },
        {
          "address": "https://lum-rpc.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc.lum.bh.rocks",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://lum-rpc.ibs.team",
          "provider": "Inter Blockchain Services"
        }
      ],
      "rest": [
        {
          "address": "https://node0.mainnet.lum.network/rest",
          "provider": "Lum Foundation"
        },
        {
          "address": "https://lum-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://api-lum.starsquid.io",
          "provider": "Starsquid"
        },
        {
          "address": "https://api.lum.bh.rocks",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://lum-api.ibs.team",
          "provider": "Inter Blockchain Services"
        }
      ],
      "grpc": [
        {
          "address": "lum-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/lumnetwork",
        "tx_page": "https://ezstaking.tools/lumnetwork/txs/${txHash}",
        "account_page": "https://ezstaking.tools/lumnetwork/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/lum",
        "tx_page": "https://www.mintscan.io/lum/txs/${txHash}",
        "account_page": "https://www.mintscan.io/lum/account/${accountAddress}"
      },
      {
        "kind": "lum-network",
        "url": "https://explorer.lum.network",
        "tx_page": "https://explorer.lum.network/txs/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/lum-network",
        "tx_page": "https://ping.pub/lum-network/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/lum-network",
        "tx_page": "https://atomscan.com/lum-network/transactions/${txHash}",
        "account_page": "https://atomscan.com/lum-network/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "lumenx",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "LumenX",
    "chain_id": "LumenX",
    "bech32_prefix": "lumen",
    "daemon_name": "lumenxd",
    "node_home": "$HOME/.lumenx",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ulumen",
          "fixed_min_gas_price": 0.0025,
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.03
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ulumen"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/cryptonetD/lumenx",
      "recommended_version": "v1.4.0",
      "compatible_versions": [
        "v1.4.0"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/cryptonetD/lumenx/main/config/genesis.json"
      },
      "versions": [
        {
          "name": "v1.4.0",
          "tag": "v1.4.0",
          "recommended_version": "v1.4.0",
          "compatible_versions": [
            "v1.4.0"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg"
    },
    "peers": {
      "seeds": [],
      "persistent_peers": [
        {
          "id": "43c4eb952a35df720f2cb4b86a73b43f682d6cb1",
          "address": "37.187.149.93:26696"
        },
        {
          "id": "81913c271aad8b26c10e3175a8f1ecf813921bab",
          "address": "144.24.149.118:26656"
        },
        {
          "id": "9a49635f0ecb7ba93fc9eba952cbe58767557010",
          "address": "185.215.180.70:26656"
        },
        {
          "id": "64c01c609297f010790a67fbb9e339a9072aa890",
          "address": "144.24.134.26:26656"
        },
        {
          "id": "2c341d570e537683d23102e64e7b73f4bbaef829",
          "address": "rpc.lumenx.chaintools.tech:26766"
        },
        {
          "id": "e3989262b8dff3596f3b1d5e44372e9326362552",
          "address": "192.99.4.66:26666"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.lumenx.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://rpc-lumenx.cryptonet.pl/",
          "provider": "CryptoNet"
        },
        {
          "address": "https://lumenx-rpc.kynraze.com/",
          "provider": "Kynraze"
        },
        {
          "address": "https://rpc-lumenx.comunitynode.my.id",
          "provider": "ComunityNode"
        }
      ],
      "rest": [
        {
          "address": "https://api.lumenx.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://api-lumenx.cryptonet.pl/",
          "provider": "CryptoNet"
        },
        {
          "address": "https://lumenx-api.kynraze.com",
          "provider": "Kynraze"
        },
        {
          "address": "https://api-lumenx.comunitynode.my.id",
          "provider": "ComunityNode"
        },
        {
          "address": "https://api-lumenx.nodine.id/",
          "provider": "Nodine.ID"
        }
      ],
      "grpc": [
        {
          "address": "https://lumenx-grpc.kynraze.com",
          "provider": "Kynraze"
        },
        {
          "address": "https://grpc-lumenx.nodine.id",
          "provider": "Nodine.ID"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://explorer.chaintools.tech/lumenx",
        "tx_page": "https://explorer.chaintools.tech/lumenx/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://explorer.cryptonet.pl/lumenx",
        "tx_page": "https://explorer.cryptonet.pl/lumenx/tx/${txHash}"
      },
      {
        "kind": "Kynraze",
        "url": "https://explorer.kynraze.com/lumenx",
        "tx_page": "https://explorer.kynraze.com/lumenx/tx/${txHash}"
      },
      {
        "kind": "ComunityNode",
        "url": "https://explorer.comunitynode.my.id/lumenx",
        "tx_page": "https://explorer.comunitynode.my.id/lumenx/tx/${txHash}"
      },
      {
        "kind": "Nodine.ID",
        "url": "https://explorer.co.id/lumenx",
        "tx_page": "https://explorer.co.id/lumenx/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/lumenx",
        "tx_page": "https://atomscan.com/lumenx/transactions/${txHash}",
        "account_page": "https://atomscan.com/lumenx/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "loyal",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.joinloyal.com/",
    "pretty_name": "Loyal",
    "chain_id": "loyal-main-02",
    "bech32_prefix": "loyal",
    "daemon_name": "loyald",
    "node_home": "$HOME/.loyal",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ulyl",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ulyl"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/LoyalLabs/loyal",
      "recommended_version": "v0.25.3",
      "compatible_versions": [
        "v0.25.3"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/LoyalLabs/net/main/mainnet/genesis.json"
      },
      "versions": [
        {
          "name": "v0.25.3",
          "recommended_version": "v0.25.3",
          "compatible_versions": [
            "v0.25.3"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "7490c272d1c9db40b7b9b61b0df3bb4365cb63a6",
          "address": "loyal-seed.netdots.net:27656"
        },
        {
          "id": "f8f5d04e17c998478c29ba6ab74b2e995a2b6dcd",
          "address": "tenderseed.ccvalidators.com:29002"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:17856",
          "provider": "Polkachu"
        }
      ],
      "persistent_peers": [
        {
          "id": "7490c272d1c9db40b7b9b61b0df3bb4365cb63a6",
          "address": "54.80.32.192:26656"
        },
        {
          "id": "607dbee191f06d9479d7ae8f9fc5de75ca840d6f",
          "address": "185.215.167.227:31656"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-main.joinloyal.io/"
        },
        {
          "address": "https://loyal-rpc.polkachu.com",
          "provider": "Polkachu"
        }
      ],
      "rest": [
        {
          "address": "https://lcd-main.joinloyal.io/"
        },
        {
          "address": "https://loyal-api.polkachu.com",
          "provider": "Polkachu"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Loyal explorer",
        "url": "https://pingpub.joinloyal.io/loyal",
        "tx_page": "https://pingpub.joinloyal.io/loyal/tx/${txHash}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/loyal",
        "tx_page": "https://explorer.tcnetwork.io/loyal/transaction/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "logos",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Logos",
    "chain_id": "logos_7002-1",
    "bech32_prefix": "logos",
    "daemon_name": "logosd",
    "node_home": "$HOME/.logos",
    "key_algos": [
      "ethsecp256k1"
    ],
    "extra_codecs": [
      "ethermint"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "aLYT"
        }
      ]
    },
    "peers": {
      "seeds": [],
      "persistent_peers": []
    },
    "apis": {
      "rpc": [
        {
          "address": "https://logos-rpc.provable.dev:443/",
          "provider": "laurel.provable"
        }
      ],
      "rest": [
        {
          "address": "https://logos.provable.dev/rest/",
          "provider": "laurel.provable"
        }
      ],
      "grpc": [
        {
          "address": "logos-grpc.provable.dev:443",
          "provider": "laurel.provable"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://logos-evm.provable.dev/",
          "provider": "laurel.provable"
        }
      ]
    },
    "explorers": [],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.svg"
    },
    "codebase": {
      "genesis": {
        "genesis_url": ""
      }
    }
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "likecoin",
    "status": "live",
    "website": "https://like.co/",
    "network_type": "mainnet",
    "pretty_name": "LikeCoin",
    "chain_id": "likecoin-mainnet-2",
    "bech32_prefix": "like",
    "daemon_name": "liked",
    "node_home": "$HOME/.liked",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "nanolike",
          "low_gas_price": 1,
          "average_gas_price": 10,
          "high_gas_price": 1000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "nanolike"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/likecoin/likecoin-chain",
      "recommended_version": "v3.1.0",
      "compatible_versions": [
        "v3.1.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/likecoin/likecoin-chain/releases/download/v3.1.0/likecoin-chain_3.1.0_Linux_x86_64.tar.gz",
        "linux/arm64": "https://github.com/likecoin/likecoin-chain/releases/download/v3.1.0/likecoin-chain_3.1.0_Linux_arm64.tar.gz",
        "darwin/amd64": "https://github.com/likecoin/likecoin-chain/releases/download/v3.1.0/likecoin-chain_3.1.0_Darwin_x86_64.tar.gz",
        "darwin/arm64": "https://github.com/likecoin/likecoin-chain/releases/download/v3.1.0/likecoin-chain_3.1.0_Darwin_arm64.tar.gz",
        "windows/amd64": "https://github.com/likecoin/likecoin-chain/releases/download/v3.1.0/likecoin-chain_3.1.0_Windows_x86_64.zip"
      },
      "cosmos_sdk_version": "0.45",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/likecoin/mainnet/982c14399089950a59d3ebbedcbbc7ead6040457/genesis.json"
      },
      "versions": [
        {
          "name": "v3.1.0",
          "recommended_version": "v3.1.0",
          "compatible_versions": [
            "v3.1.0"
          ],
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "binaries": {
            "linux/amd64": "https://github.com/likecoin/likecoin-chain/releases/download/v3.1.0/likecoin-chain_3.1.0_Linux_x86_64.tar.gz",
            "linux/arm64": "https://github.com/likecoin/likecoin-chain/releases/download/v3.1.0/likecoin-chain_3.1.0_Linux_arm64.tar.gz",
            "darwin/amd64": "https://github.com/likecoin/likecoin-chain/releases/download/v3.1.0/likecoin-chain_3.1.0_Darwin_x86_64.tar.gz",
            "darwin/arm64": "https://github.com/likecoin/likecoin-chain/releases/download/v3.1.0/likecoin-chain_3.1.0_Darwin_arm64.tar.gz",
            "windows/amd64": "https://github.com/likecoin/likecoin-chain/releases/download/v3.1.0/likecoin-chain_3.1.0_Windows_x86_64.zip"
          }
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "913bd0f4bea4ef512ffba39ab90eae84c1420862",
          "address": "34.82.131.35:26656",
          "provider": "like.co"
        },
        {
          "id": "e44a2165ac573f84151671b092aa4936ac305e2a",
          "address": "nnkken.dev:26656",
          "provider": "nnkken"
        },
        {
          "id": "d354a96014507ea480d04f8fe009dd5a4f7fe7fb",
          "address": "likecoin-seed.oldcat.io.oldcat.io:26656",
          "provider": "Oldcat"
        }
      ],
      "persistent_peers": [
        {
          "id": "f087d600cf3d34d3bac04a9723a53180619e8445",
          "address": "35.247.83.138:26656",
          "provider": "like.co"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://mainnet-node.like.co/rpc/",
          "provider": "like.co"
        },
        {
          "address": "https://likecoin-node.oldcat.io:443/rpc/",
          "provider": "Oldcat"
        },
        {
          "address": "https://rpc-likecoin-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://rpc-likecoin-mainnet.pikaser.net",
          "provider": "PikaSer"
        }
      ],
      "rest": [
        {
          "address": "https://mainnet-node.like.co",
          "provider": "like.co"
        },
        {
          "address": "https://likecoin-node.oldcat.io:443/api/",
          "provider": "Oldcat"
        },
        {
          "address": "https://api-likecoin-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://rest-likecoin-mainnet.pikaser.net",
          "provider": "PikaSer"
        }
      ],
      "grpc": [
        {
          "address": "grpc-likecoin-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "https://likecoin-node.oldcat.io:443/grpc/",
          "provider": "Oldcat"
        },
        {
          "address": "grpc-likecoin-mainnet.pikaser.net:443",
          "provider": "PikaSer"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/likecoin",
        "tx_page": "https://www.mintscan.io/likecoin/txs/${txHash}",
        "account_page": "https://www.mintscan.io/likecoin/account/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/likecoin",
        "tx_page": "https://bigdipper.live/likecoin/transactions/${txHash}",
        "account_page": "https://bigdipper.live/likecoin/accounts/${accountAddress}"
      },
      {
        "kind": "lunie-ng",
        "url": "https://stake.like.co/"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/likecoin",
        "tx_page": "https://ping.pub/likecoin/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/likecoin",
        "tx_page": "https://atomscan.com/likecoin/transactions/${txHash}",
        "account_page": "https://atomscan.com/likecoin/accounts/${accountAddress}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.svg"
    },
    "keywords": [
      "depub",
      "like"
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "lambda",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Lambda",
    "chain_id": "lambda_92000-1",
    "bech32_prefix": "lamb",
    "node_home": "$HOME/.lambdavm",
    "daemon_name": "lambdavm",
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ulamb",
          "low_gas_price": 10000000000,
          "average_gas_price": 25000000000,
          "high_gas_price": 40000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ulamb"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/LambdaIM/lambdavm",
      "recommended_version": "v1.0.0",
      "compatible_versions": [
        "v1.0.0"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/LambdaIM/mainnet/main/lambda_92000-1/genesis.json"
      },
      "versions": [
        {
          "name": "v1.0.0",
          "recommended_version": "v1.0.0",
          "compatible_versions": [
            "v1.0.0"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "50a1a5fe2f00b4ba1f6dd8bfd40b566f1b55b7a3",
          "address": "lambda.peer.stavr.tech:21026",
          "provider": "stavr"
        }
      ],
      "persistent_peers": []
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.lambda.im",
          "provider": "Lambda"
        },
        {
          "address": "https://rpc-lambda.d-stake.xyz",
          "provider": "D-stake"
        },
        {
          "address": "https://rpc.lambda.nodestake.top",
          "provider": "NodeStake"
        }
      ],
      "rest": [
        {
          "address": "https://rest.lambda.im",
          "provider": "Lambda"
        },
        {
          "address": "https://api-lambda.d-stake.xyz",
          "provider": "D-stake"
        },
        {
          "address": "https://api.lambda.nodestake.top",
          "provider": "NodeStake"
        }
      ],
      "grpc": [
        {
          "address": "grpc.lambda.nodestake.top:443",
          "provider": "NodeStake"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://jsonrpc-lambda.d-stake.xyz",
          "provider": "D-stake"
        }
      ]
    },
    "explorers": [
      {
        "kind": "blockscout",
        "url": "https://explorer.lambda.im/",
        "tx_page": "https://explorer.lambda.im/tx/${txHash}"
      },
      {
        "kind": "NodeStake",
        "url": "https://explorer.nodestake.top/lambda",
        "tx_page": "https://explorer.nodestake.top/lambda/txs/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/lambda",
        "tx_page": "https://atomscan.com/lambda/transactions/${txHash}",
        "account_page": "https://atomscan.com/lambda/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "kyve",
    "chain_id": "kyve-1",
    "pretty_name": "KYVE",
    "status": "live",
    "network_type": "mainnet",
    "bech32_prefix": "kyve",
    "daemon_name": "kyved",
    "node_home": "$HOME/.kyve",
    "website": "https://www.kyve.network/",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ukyve",
          "fixed_min_gas_price": 0.02
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/KYVENetwork/chain",
      "recommended_version": "v1.1.0",
      "compatible_versions": [
        "v1.1.0"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/KYVENetwork/networks/main/kyve-1/genesis.json"
      },
      "versions": [
        {
          "name": "v1.0.0",
          "recommended_version": "v1.0.0",
          "compatible_versions": [
            "v1.0.0"
          ],
          "next_version_name": "v1.1.0"
        },
        {
          "name": "v1.1.0",
          "height": 826000,
          "proposal": 3,
          "recommended_version": "v1.1.0",
          "compatible_versions": [
            "v1.1.0"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:11056",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ],
      "persistent_peers": [
        {
          "id": "fae8cd5f04406e64484a7a8b6719eacbb861c094",
          "address": "44.241.103.199:26656",
          "provider": "kyve"
        },
        {
          "id": "146d27829fd240e0e4672700514e9835cb6fdd98",
          "address": "34.212.201.1:26656",
          "provider": "kyve"
        },
        {
          "id": "25da6253fc8740893277630461eb34c2e4daf545",
          "address": "3.76.244.30:26656",
          "provider": "kyve"
        },
        {
          "id": "b950b6b08f7a6d5c3e068fcd263802b336ffe047",
          "address": "18.198.182.214:26656",
          "provider": "kyve"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-eu-1.kyve.network",
          "provider": "kyve"
        },
        {
          "address": "https://rpc-kyve.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://kyve-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc-kyve.imperator.co",
          "provider": "Imperator.co"
        },
        {
          "address": "https://kyve-rpc.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://rpc.kyve.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://kyve-rpc.enigma-validator.com",
          "provider": "Enigma"
        }
      ],
      "rest": [
        {
          "address": "https://api-eu-1.kyve.network",
          "provider": "kyve"
        },
        {
          "address": "https://kyve-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rest-kyve.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://lcd-kyve.imperator.co",
          "provider": "Imperator.co"
        },
        {
          "address": "https://kyve-api.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://api.kyve.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://www.kyve-lcd.enigma-validator.com",
          "provider": "Enigma"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.kyve.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://kyve-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://grpc-kyve.nodeist.net",
          "provider": "Nodeist"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/kyve",
        "tx_page": "https://www.mintscan.io/kyve/txs/${txHash}",
        "account_page": "https://www.mintscan.io/kyve/account/${accountAddress}"
      },
      {
        "kind": "NodeStake Explorer",
        "url": "https://explorer.nodestake.top/kyve",
        "tx_page": "https://explorer.nodestake.top/kyve/txs/${txHash}",
        "account_page": "https://explorer.nodestake.top/kyve/account/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "kujira",
    "chain_id": "kaiyo-1",
    "pretty_name": "Kujira",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://kujira.app/",
    "bech32_prefix": "kujira",
    "daemon_name": "kujirad",
    "node_home": "$HOME/.kujira",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ukuji",
          "fixed_min_gas_price": 0.00119,
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.03
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ukuji"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/Team-Kujira/core",
      "recommended_version": "v0.8.4-mainnet",
      "compatible_versions": [
        "v0.8.4-mainnet"
      ],
      "genesis": {
        "genesis_url": "https://github.com/Team-Kujira/networks/raw/master/mainnet/kaiyo-1.json"
      },
      "versions": [
        {
          "name": "v0.8.4-mainnet",
          "recommended_version": "v0.8.4-mainnet",
          "compatible_versions": [
            "v0.8.4-mainnet"
          ]
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:11856",
          "provider": "Polkachu"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:11856",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "322abfd7c0bcdf8a3d98ccb46ae2572bae0e8301",
          "address": "seed-kujira.starsquid.io:15602",
          "provider": "Starsquid"
        },
        {
          "id": "824fa337b806bd48ce9505d74ba3e5adea80da93",
          "address": "seeds.goldenratiostaking.net:1628",
          "provider": "Golden Ratio Staking"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "kujira-mainnet-seed.autostake.com:26796",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc",
          "address": "kujira.rpc.kjnodes.com:11359",
          "provider": "kjnodes"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "kujira-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "c28827cb96c14c905b127b92065a3fb4cd77d7f6",
          "address": "seeds.whispernode.com:11856",
          "provider": "WhisperNode🤐"
        }
      ],
      "persistent_peers": [
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "kujira-mainnet-peer.autostake.com:26796",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-kujira.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://rpc.kaiyo.kujira.setten.io",
          "provider": "setten.io"
        },
        {
          "address": "https://kujira-rpc.polkachu.com",
          "provider": "polkachu"
        },
        {
          "address": "https://rpc-kujira.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://kujira-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc.kujira.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://rpc-kujira-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://kujira-rpc.wildsage.io",
          "provider": "WildSage Labs"
        },
        {
          "address": "https://kujira-rpc.ibs.team/",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://rpc-kujira.starsquid.io",
          "provider": "Starsquid"
        },
        {
          "address": "https://kujira.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://kuji-rpc.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://rpc-kujira.goldenratiostaking.net",
          "provider": "Golden Ratio Staking"
        },
        {
          "address": "https://rpc-kujira.huginn.tech",
          "provider": "Huginn"
        },
        {
          "address": "https://kujira-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rpc.kujira.rektdao.club",
          "provider": "rektDAO"
        }
      ],
      "rest": [
        {
          "address": "https://lcd-kujira.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://rest-kujira.goldenratiostaking.net",
          "provider": "Golden Ratio Staking"
        },
        {
          "address": "https://lcd.kaiyo.kujira.setten.io",
          "provider": "setten.io"
        },
        {
          "address": "https://kujira-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://kujira-api.polkachu.com/",
          "provider": "polkachu"
        },
        {
          "address": "https://rest-kujira.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://api-kujira-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://kujira-lcd.wildsage.io/",
          "provider": "WildSage Labs"
        },
        {
          "address": "https://kujira-api.ibs.team/",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://api-kujira.starsquid.io",
          "provider": "Starsquid"
        },
        {
          "address": "https://kujira.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://kuji-api.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://kujira-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://api.kujira.rektdao.club",
          "provider": "rektDAO"
        }
      ],
      "grpc": [
        {
          "address": "kujira.grpcui.chaintools.host:443",
          "provider": "ChainTools"
        },
        {
          "address": "grpc-kujira-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "kujira-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "kujira-grpc.polkachu.com:11890",
          "provider": "Polkachu"
        },
        {
          "address": "kujira-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "kujira.grpc.kjnodes.com:11390",
          "provider": "kjnodes"
        }
      ]
    },
    "explorers": [
      {
        "kind": "kujira",
        "url": "https://finder.kujira.app",
        "tx_page": "https://finder.kujira.app/kaiyo-1/tx/${txHash}"
      },
      {
        "kind": "explorers.guru",
        "url": "https://kujira.explorers.guru",
        "tx_page": "https://kujira.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/kujira",
        "tx_page": "https://atomscan.com/kujira/transactions/${txHash}",
        "account_page": "https://atomscan.com/kujira/accounts/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/kujira",
        "tx_page": "https://www.mintscan.io/kujira/txs/${txHash}",
        "account_page": "https://www.mintscan.io/kujira/account/${accountAddress}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kujira-chain-logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg"
    }
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "konstellation",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://konstellation.tech/",
    "pretty_name": "Konstellation",
    "chain_id": "darchub",
    "bech32_prefix": "darc",
    "daemon_name": "knstld",
    "node_home": "$HOME/.knstld",
    "codebase": {
      "git_repo": "https://github.com/knstl/konstellation",
      "recommended_version": "v0.6.2",
      "compatible_versions": [
        "v0.6.2"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/Konstellation/konstellation/master/config/genesis.json"
      },
      "versions": [
        {
          "name": "v0.6.2",
          "recommended_version": "v0.6.2",
          "compatible_versions": [
            "v0.6.2"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/Konstellation-dark.png"
    },
    "fees": {
      "fee_tokens": [
        {
          "denom": "udarc",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "udarc"
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "1bd4b89e05e5d7ea5d2dba89c799c2e624cb35d7",
          "address": "node1.konstellation.tech:26656"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:13356",
          "provider": "Polkachu"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "konstellation-mainnet-seed.autostake.com:26826",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ],
      "persistent_peers": [
        {
          "id": "1bd4b89e05e5d7ea5d2dba89c799c2e624cb35d7",
          "address": "node1.konstellation.tech:26656"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "konstellation-mainnet-peer.autostake.com:26826",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://node1.konstellation.tech:26657",
          "provider": "konstellation"
        },
        {
          "address": "https://konstellation-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-konstellation-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://konstellation-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ],
      "rest": [
        {
          "address": "https://node1.konstellation.tech:1318",
          "provider": "konstellation"
        },
        {
          "address": "https://api-konstellation-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://konstellation-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://api-konstellation.starsquid.io",
          "provider": "Starsquid"
        },
        {
          "address": "https://konstellation-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ],
      "grpc": [
        {
          "address": "grpc-konstellation-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "konstellation-grpc.polkachu.com:13390",
          "provider": "Polkachu"
        },
        {
          "address": "konstellation-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "explorers": [
      {
        "kind": "konstellation",
        "url": "https://explorer.konstellation.tech/",
        "tx_page": "https://explorer.konstellation.tech/tx/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/konstellation",
        "tx_page": "https://www.mintscan.io/konstellation/txs/${txHash}",
        "account_page": "https://www.mintscan.io/konstellation/account/${accountAddress}"
      },
      {
        "kind": "cosmotracker",
        "url": "https://cosmotracker.com/konstellation",
        "tx_page": "https://cosmotracker.com/konstellation/tx/${txHash}"
      }
    ],
    "slip44": 118
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "kichain",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://foundation.ki/",
    "pretty_name": "Ki",
    "chain_id": "kichain-2",
    "bech32_prefix": "ki",
    "daemon_name": "kid",
    "node_home": "$HOME/.kid",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uxki",
          "fixed_min_gas_price": 0.025,
          "low_gas_price": 0.025,
          "average_gas_price": 0.03,
          "high_gas_price": 0.05
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/KiFoundation/ki-tools",
      "recommended_version": "5.0.1",
      "compatible_versions": [
        "5.0.0",
        "5.0.1"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/KiFoundation/ki-networks/v0.1/Mainnet/kichain-2/genesis.json"
      },
      "versions": [
        {
          "name": "5.0.0",
          "recommended_version": "5.0.1",
          "compatible_versions": [
            "5.0.0",
            "5.0.1"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "24cbccfa8813accd0ebdb09e7cdb54cff2e8fcd9",
          "address": "51.89.166.197:26656",
          "provider": "kifoundation"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:13556",
          "provider": "Polkachu"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:13556",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "8edd80b2e7e807af9617d643dcbf5125425cab68",
          "address": "kichain-seed.panthea.eu:38656",
          "provider": "Panthea EU"
        }
      ],
      "persistent_peers": [
        {
          "id": "41b321292cbe50c5c30017cc71c404481be0e20b",
          "address": "3.38.12.5:26656",
          "provider": "cosmostation"
        },
        {
          "id": "e7bab76ef15493aaee6f91a0652ba098838a0bfb",
          "address": "kichain-peer.panthea.eu:28656",
          "provider": "Panthea EU"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-mainnet.blockchain.ki",
          "provider": "kifoundation"
        },
        {
          "address": "https://kichain-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-kichain-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://rpc.kichain.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://kichain-rpc.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://ki-rpc.ibs.team/",
          "provider": "Inter Blockchain Services"
        }
      ],
      "rest": [
        {
          "address": "https://api-mainnet.blockchain.ki",
          "provider": "kifoundation"
        },
        {
          "address": "https://api-kichain-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://api.kichain.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://kichain-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://kichain-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://ki-api.ibs.team/",
          "provider": "Inter Blockchain Services"
        }
      ],
      "grpc": [
        {
          "address": "grpc-kichain-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "kichain-grpc.polkachu.com:13590",
          "provider": "Polkachu"
        },
        {
          "address": "kichain-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/kichain",
        "tx_page": "https://ezstaking.tools/kichain/txs/${txHash}",
        "account_page": "https://ezstaking.tools/kichain/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/ki-chain",
        "tx_page": "https://www.mintscan.io/ki-chain/txs/${txHash}",
        "account_page": "https://www.mintscan.io/ki-chain/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/kichain",
        "tx_page": "https://ping.pub/kichain/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/ki-chain",
        "tx_page": "https://atomscan.com/ki-chain/transactions/${txHash}",
        "account_page": "https://atomscan.com/ki-chain/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "kava",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.kava.io/",
    "pretty_name": "Kava",
    "chain_id": "kava_2222-10",
    "bech32_prefix": "kava",
    "daemon_name": "kava",
    "node_home": "$HOME/.kava",
    "slip44": 459,
    "alternative_slip44s": [
      118
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "ukava",
          "low_gas_price": 0.05,
          "average_gas_price": 0.1,
          "high_gas_price": 0.25
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ukava"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/kava-Labs/kava/",
      "recommended_version": "v0.21.0",
      "compatible_versions": [
        "v0.21.0"
      ],
      "genesis": {
        "genesis_url": "https://kava-genesis-files.s3.us-east-1.amazonaws.com/kava_2222-10/genesis.json"
      },
      "versions": [
        {
          "name": "v0.21.0",
          "recommended_version": "v0.21.0",
          "compatible_versions": [
            "v0.21.0"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:13956",
          "provider": "Polkachu"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "kava-mainnet-seed.autostake.com:26656",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "7ab4b78fbe5ee9e3777b21464a3162bd4cc17f57",
          "address": "seed-kava-01.stakeflow.io:1206",
          "provider": "Genesis Lab"
        }
      ],
      "persistent_peers": [
        {
          "id": "8b5c4a890c8ae7efbbe3360af71be1c3c3a9e12e",
          "address": "121.78.241.68:46656"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "kava-mainnet-peer.autostake.com:26656",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "7ab4b78fbe5ee9e3777b21464a3162bd4cc17f57",
          "address": "peer-kava-01.stakeflow.io:1206",
          "provider": "Genesis Lab"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.data.kava.io",
          "provider": "kava"
        },
        {
          "address": "https://kava-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-kava-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://kava-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://kava-rpc.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://rpc-kava-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "rest": [
        {
          "address": "https://api.data.kava.io/",
          "provider": "kava"
        },
        {
          "address": "https://api-kava-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://kava-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://kava-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://kava-api.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://api-kava-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "grpc": [
        {
          "address": "grpc.data.kava.io:443",
          "provider": "kava"
        },
        {
          "address": "grpc-kava-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "kava-grpc.polkachu.com:13990",
          "provider": "Polkachu"
        },
        {
          "address": "kava-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "grpc-kava-01.stakeflow.io:1202",
          "provider": "Genesis Lab"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://evm.kava.io/",
          "provider": "kava"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/kava",
        "tx_page": "https://www.mintscan.io/kava/txs/${txHash}",
        "account_page": "https://www.mintscan.io/kava/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/kava",
        "tx_page": "https://ping.pub/kava/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/kava",
        "tx_page": "https://atomscan.com/kava/transactions/${txHash}",
        "account_page": "https://atomscan.com/kava/accounts/${accountAddress}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/kava",
        "account_page": "https://stakeflow.io/kava/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "juno",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.junonetwork.io/",
    "pretty_name": "Juno",
    "chain_id": "juno-1",
    "bech32_prefix": "juno",
    "daemon_name": "junod",
    "node_home": "$HOME/.juno",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ujuno",
          "fixed_min_gas_price": 0.001,
          "low_gas_price": 0.001,
          "average_gas_price": 0.0025,
          "high_gas_price": 0.004
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ujuno"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/CosmosContracts/juno",
      "recommended_version": "v14.1.0",
      "compatible_versions": [
        "v14.0.0",
        "v14.1.0"
      ],
      "cosmos_sdk_version": "0.45",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "cosmwasm_version": "0.30",
      "cosmwasm_enabled": true,
      "genesis": {
        "genesis_url": "https://download.dimi.sh/juno-phoenix2-genesis.tar.gz"
      },
      "versions": [
        {
          "name": "v13",
          "recommended_version": "v13.0.0",
          "compatible_versions": [
            "v13.0.0"
          ],
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.30",
          "cosmwasm_enabled": true,
          "next_version_name": "v14"
        },
        {
          "name": "v14",
          "height": 7875721,
          "recommended_version": "v14.1.0",
          "compatible_versions": [
            "v14.0.0",
            "v14.1.0"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "babc3f3f7804933265ec9c40ad94f4da8e9e0017",
          "address": "seed.rhinostake.com:12656",
          "provider": "RHINO"
        },
        {
          "id": "90b09362d9ce3845096c4938eea0dba682b0ad2c",
          "address": "juno-seed-new.blockpane.com:26656"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:12656",
          "provider": "Polkachu"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:12656",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "ea67180befe4d9ca71142d21ada8ff58cc08f71c",
          "address": "seeds.goldenratiostaking.net:1627",
          "provider": "Golden Ratio Staking"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "juno-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "e726816f42831689eab9378d5d577f1d06d25716",
          "address": "juno-seed-2.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "juno-mainnet-seed.autostake.com:27136",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "70fcee92283edc02340289b2a74e4ab1a0203848",
          "address": "seed-juno.freshstaking.com:39656",
          "provider": "FreshSTAKING"
        },
        {
          "id": "47d942718533d36823e16b9502c035ca9f318ef4",
          "address": "seeds.whispernode.com:12656",
          "provider": "WhisperNode🤐"
        },
        {
          "id": "400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc",
          "address": "juno.rpc.kjnodes.com:15759",
          "provider": "kjnodes"
        },
        {
          "id": "509f6dbae3133a9df177edea051b31e1210b117e",
          "address": "seed-juno-01.stakeflow.io:2307",
          "provider": "Genesis Lab"
        }
      ],
      "persistent_peers": [
        {
          "id": "7f593757c0cde8972ce929381d8ac8e446837811",
          "address": "178.18.255.244:26656"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "juno-mainnet-peer.autostake.com:27136",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "70fcee92283edc02340289b2a74e4ab1a0203848",
          "address": "seed-juno.freshstaking.com:39656",
          "provider": "FreshSTAKING"
        },
        {
          "id": "509f6dbae3133a9df177edea051b31e1210b117e",
          "address": "peer-juno-01.stakeflow.io:2307",
          "provider": "Genesis Lab"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-juno.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://rpc-juno.goldenratiostaking.net",
          "provider": "Golden Ratio Staking"
        },
        {
          "address": "https://rpc-juno.itastakers.com",
          "provider": "itastakers"
        },
        {
          "address": "https://rpc-juno.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://juno-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://juno-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc-juno.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://rpc-juno-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://rpc.juno.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://juno-rpc.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://rpc.juno.interbloc.org",
          "provider": "Interbloc"
        },
        {
          "address": "https://juno.rpc.stakin-nodes.com",
          "provider": "Stakin"
        },
        {
          "address": "https://juno-rpc.icycro.org",
          "provider": "IcyCRO 🧊"
        },
        {
          "address": "https://rpc.juno.bh.rocks",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://juno.kingnodes.com",
          "provider": "kingnodes 👑"
        },
        {
          "address": "https://juno-rpc.reece.sh",
          "provider": "Reecepbcups"
        },
        {
          "address": "https://juno-rpc.stakeandrelax.net",
          "provider": "Stake&Relax Validator 🦥"
        },
        {
          "address": "https://juno-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "http://rpc-juno.freshstaking.com:39657",
          "provider": "FreshSTAKING"
        },
        {
          "address": "https://rpc-juno.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://juno.rpc.interchain.ivaldilabs.xyz",
          "provider": "ivaldilabs"
        },
        {
          "address": "https://juno-rpc.cosmosrescue.com",
          "provider": "cosmosrescue"
        },
        {
          "address": "http://167.235.211.168:26657",
          "provider": "CommunityStaking"
        },
        {
          "address": "https://juno.rpc.silknodes.io",
          "provider": "Silk Nodes"
        },
        {
          "address": "https://juno.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://rpc-juno-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "rest": [
        {
          "address": "https://lcd-juno.itastakers.com",
          "provider": "itastakers"
        },
        {
          "address": "https://rest-juno.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://juno-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://api-juno.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://api-juno-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://api.juno.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://juno-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://juno-api.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://api.juno.interbloc.org",
          "provider": "Interbloc"
        },
        {
          "address": "https://juno.rest.stakin-nodes.com",
          "provider": "Stakin"
        },
        {
          "address": "https://api.juno.bh.rocks",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://juno.kingnodes.com",
          "provider": "kingnodes 👑"
        },
        {
          "address": "https://juno-api.reece.sh",
          "provider": "Reecepbcups"
        },
        {
          "address": "https://juno-api.stakeandrelax.net",
          "provider": "Stake&Relax Validator 🦥"
        },
        {
          "address": "https://rest-juno.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://juno-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://juno.rest.interchain.ivaldilabs.xyz",
          "provider": "ivaldilabs"
        },
        {
          "address": "https://juno-api.cosmosrescue.com",
          "provider": "cosmosrescue"
        },
        {
          "address": "http://167.235.211.168:1317",
          "provider": "CommunityStaking"
        },
        {
          "address": "https://juno.api.silknodes.io",
          "provider": "Silk Nodes"
        },
        {
          "address": "https://juno.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://api-juno-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "grpc": [
        {
          "address": "grpc-juno-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "juno-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "juno-grpc.polkachu.com:12690",
          "provider": "Polkachu"
        },
        {
          "address": "juno.grpc.stakin-nodes.com:443",
          "provider": "Stakin"
        },
        {
          "address": "grpc-juno.kingnodes.com:443",
          "provider": "kingnodes 👑"
        },
        {
          "address": "http://juno-grpc.stakeandrelax.net:12690",
          "provider": "Stake&Relax Validator 🦥"
        },
        {
          "address": "grpc-juno.architectnodes.com:1443",
          "provider": "Architect Nodes"
        },
        {
          "address": "juno-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "juno.grpc.interchain.ivaldilabs.xyz:443",
          "provider": "ivaldilabs"
        },
        {
          "address": "juno-grpc.cosmosrescue.com:9090",
          "provider": "cosmosrescue"
        },
        {
          "address": "http://167.235.211.168:9091",
          "provider": "CommunityStaking"
        },
        {
          "address": "juno.grpc.kjnodes.com:15790",
          "provider": "kjnodes"
        },
        {
          "address": "grpc-juno-01.stakeflow.io:2302",
          "provider": "Genesis Lab"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/juno",
        "tx_page": "https://ezstaking.tools/juno/txs/${txHash}",
        "account_page": "https://ezstaking.tools/juno/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/juno",
        "tx_page": "https://ping.pub/juno/tx/${txHash}"
      },
      {
        "kind": "explorers.guru",
        "url": "https://juno.explorers.guru",
        "tx_page": "https://juno.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/juno",
        "tx_page": "https://www.mintscan.io/juno/txs/${txHash}",
        "account_page": "https://www.mintscan.io/juno/account/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/juno",
        "tx_page": "https://atomscan.com/juno/transactions/${txHash}",
        "account_page": "https://atomscan.com/juno/accounts/${accountAddress}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/juno",
        "tx_page": "https://explorer.tcnetwork.io/juno/transaction/${txHash}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/juno",
        "account_page": "https://stakeflow.io/juno/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "jackal",
    "chain_id": "jackal-1",
    "website": "https://jackalprotocol.com",
    "pretty_name": "Jackal",
    "status": "live",
    "network_type": "mainnet",
    "bech32_prefix": "jkl",
    "daemon_name": "canined",
    "node_home": "$HOME/.canine",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ujkl",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.002,
          "average_gas_price": 0.002,
          "high_gas_price": 0.02
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ujkl"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/JackalLabs/canine-chain",
      "recommended_version": "v2.0.0",
      "compatible_versions": [
        "v2.0.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/JackalLabs/canine-chain/releases/download/v2.0.0/canined-Linux",
        "darwin/amd64": "https://github.com/JackalLabs/canine-chain/releases/download/v2.0.0/canined-macOS"
      },
      "genesis": {
        "genesis_url": "https://cdn.discordapp.com/attachments/1002389406650466405/1034968352591986859/updated_genesis2.json"
      },
      "cosmwasm_enabled": true,
      "versions": [
        {
          "name": "v1.2.1",
          "recommended_version": "v1.2.1",
          "compatible_versions": [
            "v1.2.1"
          ],
          "cosmwasm_enabled": true,
          "binaries": {
            "linux/amd64": "https://github.com/JackalLabs/canine-chain/releases/download/v1.2.1/canined-Linux",
            "darwin/amd64": "https://github.com/JackalLabs/canine-chain/releases/download/v1.2.1/canined-macOS"
          }
        },
        {
          "name": "v2.0.0",
          "height": 2631260,
          "proposal": 4,
          "recommended_version": "v2.0.0",
          "compatible_versions": [
            "v2.0.0"
          ],
          "cosmwasm_enabled": true,
          "binaries": {
            "linux/amd64": "https://github.com/JackalLabs/canine-chain/releases/download/v2.0.0/canined-Linux",
            "darwin/amd64": "https://github.com/JackalLabs/canine-chain/releases/download/v2.0.0/canined-macOS"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:17556",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "jackal-mainnet-seed.autostake.com:26906",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:17556",
          "provider": "Polkachu"
        },
        {
          "id": "400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc",
          "address": "jackal.rpc.kjnodes.com:13759",
          "provider": "kjnodes"
        },
        {
          "id": "f6c5d2bf222699a35968e5f262baacd6c34e261c",
          "address": "seeds.whispernode.com:17556",
          "provider": "WhisperNode🤐"
        },
        {
          "id": "27b6d74c8408e033e2e5a9e966a0d15782e33596",
          "address": "seeds.nethernode.xyz:17556",
          "provider": "carbonZERO🌲"
        }
      ],
      "persistent_peers": [
        {
          "id": "0ab9ec918cd36a28be1fcf538f7f76ede2b81659",
          "address": "89.58.38.59:26656"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "jackal-mainnet-peer.autostake.com:26906",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "2af06d39d68345d41cd16182e3472d96c5a0150b",
          "address": "136.244.29.116:27656"
        }
      ]
    },
    "apis": {
      "wss": [
        {
          "address": "wss://jackal-rpc.agoranodes.com",
          "provider": "AgoraNodes"
        }
      ],
      "rpc": [
        {
          "address": "https://rpc.jackalprotocol.com",
          "provider": "Jackal Labs"
        },
        {
          "address": "https://jackal-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc-jackal.d-stake.xyz",
          "provider": "D-stake"
        },
        {
          "address": "https://rpc.jackal.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://rpc-jackal.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "https://jackal-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://jackal-rpc.agoranodes.com",
          "provider": "AgoraNodes"
        },
        {
          "address": "https://m-jackal.rpc.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://jackal-rpc.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://rpc-jackal.huginn.tech",
          "provider": "Huginn"
        },
        {
          "address": "https://jackal.nodejumper.io",
          "provider": "NODEJUMPER"
        },
        {
          "address": "https://rpc-jkl.kjinc.io",
          "provider": "KJINC.io"
        },
        {
          "address": "https://rpc-jackal.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://jackal-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rpc-jackal.carbonZERO.zone:443",
          "provider": "carbonZERO🌲"
        },
        {
          "address": "https://jackal.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://jackal.rpc.silknodes.io",
          "provider": "Silk Nodes"
        }
      ],
      "rest": [
        {
          "address": "https://api.jackalprotocol.com",
          "provider": "Jackal Labs"
        },
        {
          "address": "https://jackal-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://api-jackal.d-stake.xyz",
          "provider": "D-stake"
        },
        {
          "address": "https://api.jackal.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://api-jackal.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "https://jackal-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://jackal-rest.agoranodes.com",
          "provider": "AgoraNodes"
        },
        {
          "address": "https://m-jackal.api.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://jackal-api.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://jackal.nodejumper.io:1317",
          "provider": "NODEJUMPER"
        },
        {
          "address": "https://api-jkl.kjinc.io",
          "provider": "KJINC.io"
        },
        {
          "address": "https://jackal-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://lcd-jackal.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://jackal.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://jackal.api.silknodes.io",
          "provider": "Silk Nodes"
        },
        {
          "address": "https://rest-jackal.carbonZERO.zone:443",
          "provider": "carbonZERO🌲"
        }
      ],
      "grpc": [
        {
          "address": "grpc.jackalprotocol.com:443",
          "provider": "Jackal Labs"
        },
        {
          "address": "jackal-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "grpc.jackal.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "jackal-grpc.polkachu.com:17590",
          "provider": "Polkachu"
        },
        {
          "address": "jackal-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "jackal.nodejumper.io:9090",
          "provider": "NODEJUMPER"
        },
        {
          "address": "jackal.grpc.kjnodes.com:13790",
          "provider": "kjnodes"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/jackal",
        "tx_page": "https://ping.pub/jackal/tx/${txHash}"
      },
      {
        "kind": "NodeStake",
        "url": "https://explorer.nodestake.top/jackal",
        "tx_page": "https://explorer.nodestake.top/jackal/tx/${txHash}"
      },
      {
        "kind": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀",
        "url": "https://exp.utsa.tech/jackal",
        "tx_page": "https://exp.utsa.tech/jackal/tx/${txHash}"
      },
      {
        "kind": "Nodeist Explorer",
        "url": "https://exp.nodeist.net/jackal",
        "tx_page": "https://exp.nodeist.net/jackal/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "irisnet",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "IRISnet",
    "chain_id": "irishub-1",
    "bech32_prefix": "iaa",
    "daemon_name": "iris",
    "node_home": "$HOME/.iris",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "alternative_slip44s": [
      566
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "uiris",
          "low_gas_price": 0.2,
          "average_gas_price": 0.3,
          "high_gas_price": 0.4
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uiris"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/irisnet/irishub",
      "recommended_version": "v1.4.1",
      "compatible_versions": [
        "v1.4.1"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/irisnet/mainnet/master/config/genesis.json"
      },
      "versions": [
        {
          "name": "v1.3.0",
          "next_version_name": "v1.4.1",
          "recommended_version": "v1.3.0",
          "compatible_versions": [
            "v1.3.0"
          ]
        },
        {
          "name": "v1.4.1",
          "recommended_version": "v1.4.1",
          "compatible_versions": [
            "v1.4.1"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "6a6de770deaa4b8c061dffd82e9c7f4d40c2165d",
          "address": "seed-1.mainnet.irisnet.org:26656"
        },
        {
          "id": "a17d7923293203c64ba75723db4d5f28e642f469",
          "address": "seed-2.mainnet.irisnet.org:26656"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "iris-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "445b38a181d147c243185d94567412e5c5f1a22c",
          "address": "seed-irisnet-01.stakeflow.io:1906",
          "provider": "Genesis Lab"
        }
      ],
      "persistent_peers": [
        {
          "id": "83b3f989f3ce089afdf733f8aa06e792d7e00c08",
          "address": "3.34.6.30:26656",
          "provider": "cosmostation"
        },
        {
          "id": "445b38a181d147c243185d94567412e5c5f1a22c",
          "address": "peer-irisnet-01.stakeflow.io:1906",
          "provider": "Genesis Lab"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-iris.keplr.app",
          "provider": "chainapsis"
        },
        {
          "address": "https://rpc-irisnet-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://rpc-irisnet-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "rest": [
        {
          "address": "https://lcd-iris.keplr.app",
          "provider": "chainapsis"
        },
        {
          "address": "https://api-irisnet-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://api-irisnet-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "grpc": [
        {
          "address": "grpc-irisnet-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "grpc-irisnet-01.stakeflow.io:1902",
          "provider": "Genesis Lab"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/irisnet",
        "tx_page": "https://ezstaking.tools/irisnet/txs/${txHash}",
        "account_page": "https://ezstaking.tools/irisnet/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/iris",
        "tx_page": "https://www.mintscan.io/iris/txs/${txHash}",
        "account_page": "https://www.mintscan.io/iris/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/iris-network",
        "tx_page": "https://ping.pub/iris-network/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/iris-network",
        "tx_page": "https://atomscan.com/iris-network/transactions/${txHash}",
        "account_page": "https://atomscan.com/iris-network/accounts/${accountAddress}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/irisnet",
        "account_page": "https://stakeflow.io/irisnet/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "injective",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://injective.com/",
    "pretty_name": "Injective",
    "chain_id": "injective-1",
    "bech32_prefix": "inj",
    "extra_codecs": [
      "injective"
    ],
    "slip44": 60,
    "daemon_name": "injectived",
    "node_home": "$HOME/.injectived",
    "fees": {
      "fee_tokens": [
        {
          "denom": "inj",
          "fixed_min_gas_price": 500000000,
          "low_gas_price": 500000000,
          "average_gas_price": 700000000,
          "high_gas_price": 900000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "inj"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/InjectiveLabs/injective-chain-releases",
      "recommended_version": "v1.10",
      "compatible_versions": [
        "v1.10"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/InjectiveLabs/injective-chain-releases/releases/download/v1.10.0-1679065799/linux-amd64.zip",
        "darwin/amd64": "https://github.com/InjectiveLabs/injective-chain-releases/releases/download/v1.10.0-1679065799/darwin-amd64.zip"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/InjectiveLabs/mainnet-config/master/10001/genesis.json"
      },
      "versions": [
        {
          "name": "v1.10",
          "recommended_version": "v1.10",
          "compatible_versions": [
            "v1.10"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/InjectiveLabs/injective-chain-releases/releases/download/v1.10.0-1679065799/linux-amd64.zip",
            "darwin/amd64": "https://github.com/InjectiveLabs/injective-chain-releases/releases/download/v1.10.0-1679065799/darwin-amd64.zip"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "38c18461209694e1f667ff2c8636ba827cc01c86",
          "address": "176.9.143.252:11751",
          "provider": "injectivelabs.org"
        },
        {
          "id": "4f9025feca44211eddc26cd983372114947b2e85",
          "address": "176.9.140.49:11751",
          "provider": "injectivelabs.org"
        },
        {
          "id": "c98bb1b889ddb58b46e4ad3726c1382d37cd5609",
          "address": "65.109.51.80:11751",
          "provider": "injectivelabs.org"
        },
        {
          "id": "23d0eea9bb42316ff5ea2f8b4cd8475ef3f35209",
          "address": "65.109.36.70:11751",
          "provider": "injectivelabs.org"
        },
        {
          "id": "f9ae40fb4a37b63bea573cc0509b4a63baa1a37a",
          "address": "15.235.114.80:11751",
          "provider": "injectivelabs.org"
        },
        {
          "id": "7f3473ddab10322b63789acb4ac58647929111ba",
          "address": "15.235.13.116:11751",
          "provider": "injectivelabs.org"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:14356",
          "provider": "polkachu.com"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "injective-mainnet-seed.autostake.com:26726",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:14356",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "1846e76e14913124a07e231586d487a0636c0296",
          "address": "tenderseed.ccvalidators.com:26007",
          "provider": "ccvalidators.com"
        },
        {
          "id": "5a1cd1a7da5aab3e3075fbae0a905c7256e48193",
          "address": "seeds.goldenratiostaking.net:1635",
          "provider": "Golden Ratio Staking"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "injective-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "e726816f42831689eab9378d5d577f1d06d25716",
          "address": "injective-seed-2.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "62ae24dfc6841ff1ab513522255c94914861df7c",
          "address": "seeds.whispernode.com:14356",
          "provider": "WhisperNode🤐"
        },
        {
          "id": "858c86e2590f82934b8483ed184afd88416a7b31",
          "address": "seed-injective-01.stakeflow.io:2106",
          "provider": "Genesis Lab"
        }
      ],
      "persistent_peers": [
        {
          "id": "38c18461209694e1f667ff2c8636ba827cc01c86",
          "address": "176.9.143.252:11751",
          "provider": "injectivelabs.org"
        },
        {
          "id": "4f9025feca44211eddc26cd983372114947b2e85",
          "address": "176.9.140.49:11751",
          "provider": "injectivelabs.org"
        },
        {
          "id": "c98bb1b889ddb58b46e4ad3726c1382d37cd5609",
          "address": "65.109.51.80:11751",
          "provider": "injectivelabs.org"
        },
        {
          "id": "23d0eea9bb42316ff5ea2f8b4cd8475ef3f35209",
          "address": "65.109.36.70:11751",
          "provider": "injectivelabs.org"
        },
        {
          "id": "f9ae40fb4a37b63bea573cc0509b4a63baa1a37a",
          "address": "15.235.114.80:11751",
          "provider": "injectivelabs.org"
        },
        {
          "id": "7f3473ddab10322b63789acb4ac58647929111ba",
          "address": "15.235.13.116:11751",
          "provider": "injectivelabs.org"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "injective-mainnet-peer.autostake.com:26726",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "858c86e2590f82934b8483ed184afd88416a7b31",
          "address": "peer-injective-01.stakeflow.io:2106",
          "provider": "Genesis Lab"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://injective-rpc.quickapi.com:443",
          "provider": "Chainlayer"
        },
        {
          "address": "https://rpc-injective.goldenratiostaking.net",
          "provider": "Golden Ratio Staking"
        },
        {
          "address": "https://injective-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://injective-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc-injective-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://injective-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rpc.injective.posthuman.digital:443",
          "provider": "POSTHUMAN ꝏ DVS"
        },
        {
          "address": "https://rpc-injective.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://rpc-injective.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://rpc-injective-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "rest": [
        {
          "address": "https://injective-lcd.quickapi.com:443",
          "provider": "Chainlayer"
        },
        {
          "address": "https://api-injective-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://injective-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://injective-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rest.injective.posthuman.digital:443",
          "provider": "POSTHUMAN ꝏ DVS"
        },
        {
          "address": "https://injective-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://lcd-injective.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://rest-injective.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://api-injective-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "grpc": [
        {
          "address": "grpc-injective-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "injective-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "injective-grpc.polkachu.com:14390",
          "provider": "Polkachu"
        },
        {
          "address": "injective-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "grpc.injective.posthuman.digital:80",
          "provider": "POSTHUMAN ꝏ DVS"
        },
        {
          "address": "grpc-injective.architectnodes.com:1443",
          "provider": "Architect Nodes"
        },
        {
          "address": "grpc-injective-01.stakeflow.io:2102",
          "provider": "Genesis Lab"
        }
      ]
    },
    "explorers": [
      {
        "kind": "injectiveprotocol",
        "url": "https://explorer.injective.network/",
        "tx_page": "https://explorer.injective.network/transaction/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/injective",
        "tx_page": "https://ping.pub/injective/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/injective",
        "tx_page": "https://atomscan.com/injective/transactions/${txHash}",
        "account_page": "https://atomscan.com/injective/accounts/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/injective",
        "tx_page": "https://www.mintscan.io/injective/${txHash}",
        "account_page": "https://www.mintscan.io/injective/account/${accountAddress}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/injective",
        "account_page": "https://stakeflow.io/injective/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "imversed",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://imversed.network/",
    "pretty_name": "Imversed",
    "chain_id": "imversed_5555555-1",
    "bech32_prefix": "imv",
    "daemon_name": "imversed",
    "node_home": "$HOME/.imversed",
    "key_algos": [
      "ethsecp256k1"
    ],
    "extra_codecs": [
      "ethermint"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "aimv",
          "fixed_min_gas_price": 250000000,
          "low_gas_price": 20000000000,
          "average_gas_price": 25000000000,
          "high_gas_price": 40000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "aimv"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/imversed/imversed",
      "recommended_version": "v3.11",
      "compatible_versions": [
        "v3.11"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/imversed/imversed/releases/download/v3.11/imversed_3.11_Linux_amd64.tar.gz"
      },
      "genesis": {
        "genesis_url": "https://static.imversed.com/mainnet/genesis.json"
      },
      "versions": [
        {
          "name": "v3.11",
          "recommended_version": "v3.11",
          "compatible_versions": [
            "v3.11"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/imversed/imversed/releases/download/v3.11/imversed_3.11_Linux_amd64.tar.gz"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "6413d43ff0dce9400515f24e8e93a0cf28f0efff",
          "address": "35.209.184.54:26656"
        }
      ],
      "persistent_peers": [
        {
          "id": "0968486e82c910b1d7adaacb43bf7e633b19665a",
          "address": "35.209.184.219:26656"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.imversed.network:443",
          "provider": "imversed"
        }
      ],
      "rest": [
        {
          "address": "https://rest.imversed.network:443",
          "provider": "imversed"
        }
      ],
      "grpc": [
        {
          "address": "grpc.imversed.network:443",
          "provider": "imversed"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://jsonrpc.imversed.network:443",
          "provider": "imversed"
        }
      ]
    },
    "explorers": [
      {
        "kind": "blockscout",
        "url": "https://txe.imversed.network/",
        "tx_page": "https://txe.imversed.network/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "impacthub",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.ixo.world/",
    "pretty_name": "ixo",
    "chain_id": "ixo-5",
    "bech32_prefix": "ixo",
    "daemon_name": "ixod",
    "node_home": "$HOME/.ixod",
    "key_algos": [
      "secp256k1",
      "ed25519"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uixo",
          "fixed_min_gas_price": 0.015,
          "low_gas_price": 0.015,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uixo"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/ixofoundation/ixo-blockchain",
      "recommended_version": "v0.20.0",
      "compatible_versions": [
        "v0.20.0"
      ],
      "genesis": {
        "genesis_url": "https://github.com/ixofoundation/genesis/raw/bc042e1223d551b22d55c155de06e662ca24d2f2/ixo-5/genesis.json.tar.gz"
      },
      "versions": [
        {
          "name": "v0.20.0",
          "recommended_version": "v0.20.0",
          "compatible_versions": [
            "v0.20.0"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "36e4738c7efcf353d3048e5e6073406d045bae9d",
          "address": "80.64.208.43:26656",
          "provider": "simplyvc"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:16656",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ],
      "persistent_peers": [
        {
          "id": "36e4738c7efcf353d3048e5e6073406d045bae9d",
          "address": "80.64.208.43:26656",
          "provider": "simplyvc"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://proxies.sifchain.finance/api/impacthub-3/rpc",
          "provider": "sifchain"
        },
        {
          "address": "https://impacthub.ixo.world/rpc/",
          "provider": "ixoworld"
        },
        {
          "address": "https://rpc-ixo-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://impacthub-rpc.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://ixo-rpc.ibs.team",
          "provider": "Inter Blockchain Services"
        }
      ],
      "rest": [
        {
          "address": "https://proxies.sifchain.finance/api/impacthub-3/rest",
          "provider": "sifchain"
        },
        {
          "address": "https://impacthub.ixo.world/rest/",
          "provider": "ixoworld"
        },
        {
          "address": "https://api-ixo-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://impacthub-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://ixo-api.ibs.team",
          "provider": "Inter Blockchain Services"
        }
      ],
      "grpc": [
        {
          "address": "grpc-ixo-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "impacthub-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/ixo",
        "tx_page": "https://ezstaking.tools/ixo/txs/${txHash}",
        "account_page": "https://ezstaking.tools/ixo/account/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://blockscan.ixo.world",
        "tx_page": "https://blockscan.ixo.world/transactions/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/ixo",
        "tx_page": "https://ping.pub/ixo/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/ixo",
        "tx_page": "https://atomscan.com/ixo/transactions/${txHash}",
        "account_page": "https://atomscan.com/ixo/accounts/${accountAddress}"
      },
      {
        "kind": "Mintscan",
        "url": "https://www.mintscan.io/ixo",
        "tx_page": "https://www.mintscan.io/ixo/txs/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "idep",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.idep.network/",
    "pretty_name": "IDEP",
    "chain_id": "Antora",
    "bech32_prefix": "idep",
    "daemon_name": "idep",
    "node_home": "$HOME/.ion",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "idep",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/IDEP-network/ion",
      "recommended_version": "v1.0.0",
      "compatible_versions": [
        "v1.0.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/IDEP-network/Antora/raw/main/iond"
      },
      "genesis": {
        "genesis_url": "https://github.com/IDEP-network/Antora/raw/main/genesis.json"
      },
      "versions": [
        {
          "name": "v1.0.0",
          "recommended_version": "v1.0.0",
          "compatible_versions": [
            "v1.0.0"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/IDEP-network/Antora/raw/main/iond"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:16556",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ],
      "persistent_peers": [
        {
          "id": "8ffc74dbcd5ab32bc89e058ec53060d5762f88b5",
          "address": "178.63.100.102:26656",
          "provider": "IDEP"
        },
        {
          "id": "3a8cfcbaac7d102e9cfad31f856e1852be2125f3",
          "address": "sentry-1.idep.ezstaking.xyz:26756",
          "provider": "EZStaking.io"
        },
        {
          "id": "32a1a93033968e391266484cd4896dfc9b326e4c",
          "address": "sentry-2.idep.ezstaking.xyz:26789",
          "provider": "EZStaking.io"
        }
      ]
    },
    "apis": {
      "rpc": [],
      "rest": [],
      "grpc": [
        {
          "address": "idep-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/idep",
        "tx_page": "https://ezstaking.tools/idep/txs/${txHash}",
        "account_page": "https://ezstaking.tools/idep/account/${accountAddress}"
      },
      {
        "kind": "chadscan",
        "url": "https://chadscan.com",
        "tx_page": "https://chadscan.com/transactions/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/idep",
        "tx_page": "https://atomscan.com/idep/transactions/${txHash}",
        "account_page": "https://atomscan.com/idep/accounts/${accountAddress}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/idep",
        "tx_page": "https://explorer.tcnetwork.io/idep/transaction/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "gravitybridge",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.gravitybridge.net/",
    "pretty_name": "Gravity Bridge",
    "chain_id": "gravity-bridge-3",
    "bech32_prefix": "gravity",
    "daemon_name": "gravity",
    "node_home": "$HOME/.gravity",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ugraviton",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 0,
          "high_gas_price": 0.035
        },
        {
          "denom": "gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "low_gas_price": 0.0002,
          "average_gas_price": 0.0005,
          "high_gas_price": 0.0008
        },
        {
          "denom": "gravity0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "low_gas_price": 0.0002,
          "average_gas_price": 0.0005,
          "high_gas_price": 0.0008
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ugraviton"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/Gravity-Bridge/Gravity-Bridge",
      "recommended_version": "v1.9.1",
      "compatible_versions": [
        "v1.9.0",
        "v1.9.1"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.9.1/gravity-linux-amd64"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/Gravity-Bridge/Gravity-Docs/main/genesis.json"
      },
      "versions": [
        {
          "name": "pleiades2",
          "recommended_version": "v1.8.0",
          "compatible_versions": [
            "v1.8.0"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.8.0/gravity-linux-amd64",
            "linux/arm64": "https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.8.0/gravity-linux-arm64",
            "darwin/amd64": "https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.8.0/gravity-darwin-amd64",
            "windows/amd64": "https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.8.0/gravity-windows-amd64.exe"
          },
          "next_version_name": "orion"
        },
        {
          "name": "orion",
          "height": 6698820,
          "recommended_version": "v1.9.1",
          "proposal": 172,
          "compatible_versions": [
            "v1.9.0",
            "v1.9.1"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.9.1/gravity-linux-amd64"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "2b089bfb4c7366efb402b48376a7209632380c9c",
          "address": "65.19.136.133:26656",
          "provider": "althea"
        },
        {
          "id": "63e662f5e048d4902c7c7126291cf1fc17687e3c",
          "address": "95.211.103.175:26656",
          "provider": "amhost"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:14256",
          "provider": "Polkachu"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:14256",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "86bd5cb6e762f673f1706e5889e039d5406b4b90",
          "address": "gravity.seed.node75.org:10556",
          "provider": "Pro-Nodes"
        },
        {
          "id": "4e595d6781b122b2aea91b08da0ad97f708bf52a",
          "address": "seed-gravity-bridge-01.stakeflow.io:1306",
          "provider": "Genesis Lab"
        }
      ],
      "persistent_peers": [
        {
          "id": "b9180ddd3329ddaea74fe6fbdc729506b90f313b",
          "address": "gravity.ramuchi.tech:36656",
          "provider": "ramuchi.tech"
        },
        {
          "id": "4e595d6781b122b2aea91b08da0ad97f708bf52a",
          "address": "peer-gravity-bridge-01.stakeflow.io:1306",
          "provider": "Genesis Lab"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://gravitychain.io:26657",
          "provider": "althea"
        },
        {
          "address": "http://gravity-bridge-1-08.nodes.amhost.net:26657",
          "provider": "amhost"
        },
        {
          "address": "https://gravity-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-gravitybridge-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://gravitybridge-rpc.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc.gravity.bh.rocks/",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://gravity-rpc.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://gravity-rpc.ramuchi.tech",
          "provider": "ramuchi.tech"
        },
        {
          "address": "https://rpc-gravity-bridge-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "rest": [
        {
          "address": "https://gravitychain.io:1317",
          "provider": "althea"
        },
        {
          "address": "https://api-gravitybridge-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://gravity-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://gravitybridge-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://api.gravity.bh.rocks/",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://gravity-api.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://gravity-api.ramuchi.tech",
          "provider": "ramuchi.tech"
        },
        {
          "address": "https://api-gravity-bridge-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "grpc": [
        {
          "address": "gravity-bridge-1-08.nodes.amhost.net:9090",
          "provider": "amhost"
        },
        {
          "address": "grpc-gravitybridge-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "gravity-grpc.polkachu.com:14290",
          "provider": "Polkachu"
        },
        {
          "address": "gravitybridge-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://gravity-grpc.ramuchi.tech:10090",
          "provider": "ramuchi.tech"
        },
        {
          "address": "grpc-gravity-bridge-01.stakeflow.io:1302",
          "provider": "Genesis Lab"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/gravitybridge",
        "tx_page": "https://ezstaking.tools/gravitybridge/txs/${txHash}",
        "account_page": "https://ezstaking.tools/gravitybridge/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/gravity-bridge",
        "tx_page": "https://www.mintscan.io/gravity-bridge/${txHash}",
        "account_page": "https://www.mintscan.io/gravity-bridge/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/gravity-bridge",
        "tx_page": "https://ping.pub/gravity-bridge/tx/${txHash}"
      },
      {
        "kind": "explorers.guru",
        "url": "https://gravity.explorers.guru",
        "tx_page": "https://gravity.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/gravity-bridge",
        "tx_page": "https://atomscan.com/gravity-bridge/transactions/${txHash}",
        "account_page": "https://atomscan.com/gravity-bridge/accounts/${accountAddress}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/gravitybridge",
        "tx_page": "https://explorer.tcnetwork.io/gravitybridge/transaction/${txHash}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/gravity-bridge",
        "account_page": "https://stakeflow.io/gravity-bridge/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "genesisl1",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "GenesisL1",
    "chain_id": "genesis_29-2",
    "bech32_prefix": "genesis",
    "daemon_name": "genesisd",
    "node_home": "$HOME/.genesisd",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "el1",
          "low_gas_price": 51000000000,
          "average_gas_price": 52000000000,
          "high_gas_price": 53000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "el1"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/alpha-omega-labs/genesisd",
      "recommended_version": "v0.3.0",
      "compatible_versions": [
        "v0.3.0"
      ],
      "genesis": {
        "genesis_url": "https://github.com/alpha-omega-labs/genesisd/raw/neolithic/genesis_29-1-state/genesis.json"
      },
      "versions": [
        {
          "name": "v0.3.0",
          "recommended_version": "v0.3.0",
          "compatible_versions": [
            "v0.3.0"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg"
    },
    "peers": {
      "persistent_peers": [
        {
          "id": "36111b4156ace8f1cfa5584c3ccf479de4d94936",
          "address": "65.21.34.226:26656",
          "provider": "GenesisL1"
        },
        {
          "id": "be81a20b7134552e270774ec861c4998fabc2969",
          "address": "genesisl1.3ventures.io:26656"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://26657.genesisl1.org",
          "provider": "GenesisL1"
        }
      ],
      "rest": [
        {
          "address": "https://api.genesisl1.org",
          "provider": "GenesisL1"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/genesisL1",
        "tx_page": "https://ping.pub/genesisL1/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://exp.utsa.tech/genesis",
        "tx_page": "https://exp.utsa.tech/genesis/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/genesisl1",
        "tx_page": "https://atomscan.com/genesisl1/transactions/${txHash}",
        "account_page": "https://atomscan.com/genesisl1/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "galaxy",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://galaxychain.zone/",
    "pretty_name": "Galaxy",
    "chain_id": "galaxy-1",
    "bech32_prefix": "galaxy",
    "daemon_name": "galaxyd",
    "node_home": "$HOME/.galaxy",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uglx",
          "low_gas_price": 0.025,
          "average_gas_price": 0.025,
          "high_gas_price": 0.035
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uglx"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/galaxies-labs/galaxy",
      "recommended_version": "v1.0.0",
      "compatible_versions": [
        "v1.0.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/galaxies-labs/galaxy/releases/download/v1.0.0/galaxy_v1.0.0_linux_amd64.tar.gz",
        "darwin/amd64": "https://github.com/galaxies-labs/galaxy/releases/download/v1.0.0/galaxy_v1.0.0_darwin_amd64.tar.gz"
      },
      "genesis": {
        "genesis_url": "https://github.com/OrbisWorlds/networks/raw/main/galaxy-1/genesis.json"
      },
      "versions": [
        {
          "name": "v1.0.0",
          "recommended_version": "v1.0.0",
          "compatible_versions": [
            "v1.0.0"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/galaxies-labs/galaxy/releases/download/v1.0.0/galaxy_v1.0.0_linux_amd64.tar.gz",
            "darwin/amd64": "https://github.com/galaxies-labs/galaxy/releases/download/v1.0.0/galaxy_v1.0.0_darwin_amd64.tar.gz"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg"
    },
    "peers": {
      "seeds": [],
      "persistent_peers": [
        {
          "id": "10f7caa39969dc36450b138848a06e7deabe6fed",
          "address": "95.111.244.128:26656",
          "provider": "Pathrocknetwork"
        },
        {
          "id": "8b447bd4fa1e56d8252538a6e23573e5e78924fa",
          "address": "161.97.155.94:26656",
          "provider": "3Tekos"
        }
      ]
    },
    "apis": {
      "rpc": [],
      "rest": [],
      "grpc": []
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://explorer.postcapitalist.io/Galaxy",
        "tx_page": "https://explorer.postcapitalist.io/Galaxy/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "firmachain",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://firmachain.org/",
    "pretty_name": "FirmaChain",
    "chain_id": "colosseum-1",
    "bech32_prefix": "firma",
    "slip44": 7777777,
    "daemon_name": "firmachaind",
    "node_home": "$HOME/.firmachain",
    "key_algos": [
      "secp256k1"
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "ufct",
          "fixed_min_gas_price": 0.1
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/firmachain/firmachain",
      "recommended_version": "v0.3.5-patch",
      "compatible_versions": [
        "v0.3.5-patch"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/FirmaChain/mainnet/main/colosseum-1/genesis.json"
      },
      "versions": [
        {
          "name": "v0.3.5",
          "recommended_version": "v0.3.5-patch",
          "compatible_versions": [
            "v0.3.5-patch"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "f89dcc15241e30323ae6f491011779d53f9a5487",
          "address": "mainnet-seed1.firmachain.dev:26656",
          "provider": "FirmaChain"
        },
        {
          "id": "04cce0da4cf5ceb5ffc04d158faddfc5dc419154",
          "address": "mainnet-seed2.firmachain.dev:26656",
          "provider": "FirmaChain"
        },
        {
          "id": "940977bdc070422b3a62e4985f2fe79b7ee737f7",
          "address": "mainnet-seed3.firmachain.dev:26656",
          "provider": "FirmaChain"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:16456",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ],
      "persistent_peers": [
        {
          "id": "931a7c680d28c84a8a53e4017a6eae0788ee7cf2",
          "address": "firmachain-seed.ramuchi.tech:57656",
          "provider": "ramuchi.tech"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://lcd-mainnet.firmachain.dev:26657",
          "provider": "FirmaChain"
        },
        {
          "address": "https://rpc.firmachain.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://firmachain-rpc.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://firmachain-rpc.ramuchi.tech",
          "provider": "ramuchi.tech"
        }
      ],
      "rest": [
        {
          "address": "https://lcd-mainnet.firmachain.dev:1317",
          "provider": "FirmaChain"
        },
        {
          "address": "https://api.firmachain.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://firmachain-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://firmachain-api.ramuchi.tech",
          "provider": "ramuchi.tech"
        }
      ],
      "grpc": [
        {
          "address": "firmachain-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://firmachain-grpc.ramuchi.tech:1390",
          "provider": "ramuchi.tech"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/firmachain",
        "tx_page": "https://ezstaking.tools/firmachain/txs/${txHash}",
        "account_page": "https://ezstaking.tools/firmachain/account/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://explorer.firmachain.dev",
        "tx_page": "https://explorer.firmachain.dev/transactions/${txHash}"
      },
      {
        "kind": "explorer.ChainTools",
        "url": "https://explorer.chaintools.tech/firmachain",
        "tx_page": "https://explorer.chaintools.tech/firmachain/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/firmachain",
        "tx_page": "https://atomscan.com/firmachain/transactions/${txHash}",
        "account_page": "https://atomscan.com/firmachain/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "fetchhub",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Fetch.ai",
    "chain_id": "fetchhub-4",
    "bech32_prefix": "fetch",
    "daemon_name": "fetchd",
    "node_home": "$HOME/.fetchd",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "afet",
          "low_gas_price": 0.025,
          "average_gas_price": 0.025,
          "high_gas_price": 0.035
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "afet"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/fetchai/fetchd",
      "recommended_version": "v0.10.5",
      "compatible_versions": [
        "v0.10.5"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/fetchai/genesis-fetchhub/fetchhub-4/fetchhub-4/data/genesis_migrated_5300200.json"
      },
      "versions": [
        {
          "name": "v0.10.5",
          "recommended_version": "v0.10.5",
          "compatible_versions": [
            "v0.10.5"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "17693da418c15c95d629994a320e2c4f51a8069b",
          "address": "connect-fetchhub.fetch.ai:36456",
          "provider": "fetch.ai"
        },
        {
          "id": "a575c681c2861fe945f77cb3aba0357da294f1f2",
          "address": "connect-fetchhub.fetch.ai:36457",
          "provider": "fetch.ai"
        },
        {
          "id": "d7cda986c9f59ab9e05058a803c3d0300d15d8da",
          "address": "connect-fetchhub.fetch.ai:36458",
          "provider": "fetch.ai"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:15256",
          "provider": "Polkachu"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "fetchhub-mainnet-seed.autostake.com:27266",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "fetch-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "e726816f42831689eab9378d5d577f1d06d25716",
          "address": "fetch-seed-2.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        }
      ],
      "persistent_peers": [
        {
          "id": "e3d21a822e3903a96c14bfd8f8e06132f198d7c4",
          "address": "sentries-fetchhub.fetch.ai:36400",
          "provider": "fetch.ai"
        },
        {
          "id": "4be243f5d22403f6069d2ed3c4a79161216f22a0",
          "address": "sentries-fetchhub.fetch.ai:36401",
          "provider": "fetch.ai"
        },
        {
          "id": "d6faadb9e785642b355136ed278d5b5d6b2f87dd",
          "address": "sentries-fetchhub.fetch.ai:36402",
          "provider": "fetch.ai"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "fetchhub-mainnet-peer.autostake.com:27266",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-fetchhub.fetch.ai:443",
          "provider": "fetch.ai"
        },
        {
          "address": "https://rpc-fetchhub-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://fetch-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://fetchai-rpc.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://fetch-rpc.teasel.org",
          "provider": "𝗧𝗲𝗮𝘀𝗲𝗹"
        },
        {
          "address": "https://fetch-rpc.antrixy.org",
          "provider": "Antrix"
        },
        {
          "address": "https://rpc-fetch.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://fetchhub-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://fetch-rpc.ibs.team",
          "provider": "Inter Blockchain Services"
        }
      ],
      "rest": [
        {
          "address": "https://rest-fetchhub.fetch.ai",
          "provider": "fetch.ai"
        },
        {
          "address": "https://api-fetchhub-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://fetch-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://fetchai-api.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://fetch-rest.teasel.org",
          "provider": "𝗧𝗲𝗮𝘀𝗲𝗹"
        },
        {
          "address": "https://fetch-rest.antrixy.org",
          "provider": "Antrix"
        },
        {
          "address": "https://fetchhub-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rest-fetch.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://fetch-api.ibs.team",
          "provider": "Inter Blockchain Services"
        }
      ],
      "grpc": [
        {
          "address": "grpc-fetchhub.fetch.ai:443",
          "provider": "fetch.ai"
        },
        {
          "address": "grpc-fetchhub-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "fetch-grpc.polkachu.com:15290",
          "provider": "Polkachu"
        },
        {
          "address": "fetchhub-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "fetch-grpc.teasel.org:443",
          "provider": "𝗧𝗲𝗮𝘀𝗲𝗹"
        },
        {
          "address": "fetch-grpc.antrixy.org:443",
          "provider": "Antrix"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/fetchai",
        "tx_page": "https://www.mintscan.io/fetchai/txs/${txHash}",
        "account_page": "https://www.mintscan.io/fetchai/account/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://explore-fetchhub.fetch.ai",
        "tx_page": "https://explore-fetchhub.fetch.ai/transactions/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/fetchhub",
        "tx_page": "https://ping.pub/fetchhub/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/fetchai",
        "tx_page": "https://atomscan.com/fetchai/transactions/${txHash}",
        "account_page": "https://atomscan.com/fetchai/accounts/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://fetch-explorer.teasel.org",
        "tx_page": "https://fetch-explorer.teasel.org/transactions/${txHash}"
      },
      {
        "kind": "azoyalabs",
        "url": "https://fetchstation.azoyalabs.com/mainnet",
        "tx_page": "https://fetchstation.azoyalabs.com/mainnet/explorer/transactions/${txHash}",
        "account_page": "https://fetchstation.azoyalabs.com/mainnet/explorer/address/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "evmos",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://evmos.org/",
    "pretty_name": "Evmos",
    "chain_id": "evmos_9001-2",
    "bech32_prefix": "evmos",
    "node_home": "$HOME/.evmosd",
    "daemon_name": "evmosd",
    "key_algos": [
      "ethsecp256k1"
    ],
    "extra_codecs": [
      "ethermint"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "aevmos",
          "fixed_min_gas_price": 250000000,
          "low_gas_price": 20000000000,
          "average_gas_price": 25000000000,
          "high_gas_price": 40000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "aevmos"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/evmos/evmos",
      "recommended_version": "v12.1.2",
      "compatible_versions": [
        "v12.1.2",
        "v12.1.1",
        "v12.1.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/evmos/evmos/releases/download/v12.1.0/evmos_12.1.0_Linux_amd64.tar.gz",
        "linux/arm64": "https://github.com/evmos/evmos/releases/download/v12.1.0/evmos_12.1.0_Linux_arm64.tar.gz",
        "darwin/amd64": "https://github.com/evmos/evmos/releases/download/v12.1.0/evmos_12.1.0_Darwin_amd64.tar.gz",
        "darwin/arm64": "https://github.com/evmos/evmos/releases/download/v12.1.0/evmos_12.1.0_Darwin_arm64.tar.gz",
        "windows/amd64": "https://github.com/evmos/evmos/releases/download/v12.1.0/evmos_12.1.0_Windows_amd64.zip"
      },
      "cosmos_sdk_version": "0.46",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "ibc_go_version": "6.1.0",
      "genesis": {
        "genesis_url": "https://archive.evmos.org/mainnet/genesis.json"
      },
      "versions": [
        {
          "name": "v12",
          "recommended_version": "v12.1.2",
          "compatible_versions": [
            "v12.1.2",
            "v12.1.1",
            "v12.1.0"
          ],
          "cosmos_sdk_version": "0.46",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "ibc_go_version": "6.1.0",
          "binaries": {
            "linux/amd64": "https://github.com/evmos/evmos/releases/download/v12.1.0/evmos_12.1.0_Linux_amd64.tar.gz",
            "linux/arm64": "https://github.com/evmos/evmos/releases/download/v12.1.0/evmos_12.1.0_Linux_arm64.tar.gz",
            "darwin/amd64": "https://github.com/evmos/evmos/releases/download/v12.1.0/evmos_12.1.0_Darwin_amd64.tar.gz",
            "darwin/arm64": "https://github.com/evmos/evmos/releases/download/v12.1.0/evmos_12.1.0_Darwin_arm64.tar.gz",
            "windows/amd64": "https://github.com/evmos/evmos/releases/download/v12.1.0/evmos_12.1.0_Windows_amd64.zip"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "babc3f3f7804933265ec9c40ad94f4da8e9e0017",
          "address": "seed.rhinostake.com:13456",
          "provider": "RHINO"
        },
        {
          "id": "7aa31684d201f8ebc0b1e832d90d7490345d77ee",
          "address": "52.10.99.253:26656",
          "provider": "Cosmostation"
        },
        {
          "id": "5740e4a36e646e80cc5648daf5e983e5b5d8f265",
          "address": "54.39.18.27:26656",
          "provider": "Figment"
        },
        {
          "id": "588cedb70fa1d98c14a2f2c1456bfa41e1a156a8",
          "address": "evmos-sentry.mercury-nodes.net:29539",
          "provider": "Mercury"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:13456",
          "provider": "Polkachu"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:13456",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "evmos-mainnet-seed.autostake.com:26736",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "40f4fac63da8b1ce8f850b0fa0f79b2699d2ce72",
          "address": "seed.evmos.jerrychong.com:26656",
          "provider": "Jerry's Pool"
        },
        {
          "id": "86bd5cb6e762f673f1706e5889e039d5406b4b90",
          "address": "evmos.seed.node75.org:10756",
          "provider": "Pro-nodes75"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "evmos-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "e726816f42831689eab9378d5d577f1d06d25716",
          "address": "evmos-seed-2.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "e4f7c3181d0028209c664bfd4c259f2c4d947491",
          "address": "seeds.whispernode.com:13456",
          "provider": "WhisperNode🤐"
        },
        {
          "id": "27b6d74c8408e033e2e5a9e966a0d15782e33596",
          "address": "seeds.nethernode.xyz:13456",
          "provider": "carbonZERO🌲"
        },
        {
          "id": "ac009a9564d3471852795b5d703095a1d4b6a3e1",
          "address": "seed-evmos-01.stakeflow.io:1707",
          "provider": "Genesis Lab"
        }
      ],
      "persistent_peers": [
        {
          "id": "7aa31684d201f8ebc0b1e832d90d7490345d77ee",
          "address": "52.10.99.253:26656",
          "provider": "Cosmostation"
        },
        {
          "id": "5740e4a36e646e80cc5648daf5e983e5b5d8f265",
          "address": "54.39.18.27:26656",
          "provider": "Figment"
        },
        {
          "id": "588cedb70fa1d98c14a2f2c1456bfa41e1a156a8",
          "address": "evmos-sentry.mercury-nodes.net:29539",
          "provider": "Mercury"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "evmos-mainnet-peer.autostake.com:26736",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "ac009a9564d3471852795b5d703095a1d4b6a3e1",
          "address": "peer-evmos-01.stakeflow.io:1707",
          "provider": "Genesis Lab"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://evmos.kingnodes.com",
          "provider": "kingnodes"
        },
        {
          "address": "https://rpc-evmos.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://rpc-evmos.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://evmos-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://tendermint.bd.evmos.org:26657",
          "provider": "Blockdaemon"
        },
        {
          "address": "https://rpc-evmos-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "https://rpc.evmos.interbloc.org",
          "provider": "Interbloc"
        },
        {
          "address": "https://rpc.evmos.testnet.run",
          "provider": "TestNetRun"
        },
        {
          "address": "https://rpc.evmos.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://rpc.evmos.bh.rocks",
          "provider": "BlockHunters"
        },
        {
          "address": "https://rpc-evmos.goldenratiostaking.net",
          "provider": "Golden Ratio Staking"
        },
        {
          "address": "https://rpc.evmos.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://evmos-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc.evmos.silentvalidator.com/",
          "provider": "silent"
        },
        {
          "address": "https://rpc.evmos.tcnetwork.io",
          "provider": "TC Network"
        },
        {
          "address": "https://evmos.rpc.stakin-nodes.com",
          "provider": "Stakin"
        },
        {
          "address": "https://rpc-evmos.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://evmos-rpc.validatrium.club",
          "provider": "Validatrium"
        },
        {
          "address": "https://evmos-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://evmos-rpc.stakeandrelax.net",
          "provider": "Stake&Relax Validator 🦥"
        },
        {
          "address": "https://evmos.rpc.interchain.ivaldilabs.xyz",
          "provider": "ivaldilabs"
        },
        {
          "address": "https://evmos.api.onfinality.io/public",
          "provider": "OnFinality"
        },
        {
          "address": "https://evmos-rpc.publicnode.com",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "address": "https://rpc-evmos-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "rest": [
        {
          "address": "https://evmos.kingnodes.com",
          "provider": "kingnodes"
        },
        {
          "address": "https://lcd-evmos.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://rest.bd.evmos.org:1317",
          "provider": "Blockdaemon"
        },
        {
          "address": "https://evmos-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://api-evmos-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://api.evmos.interbloc.org",
          "provider": "Interbloc"
        },
        {
          "address": "https://lcd.evmos.bh.rocks",
          "provider": "BlockHunters"
        },
        {
          "address": "https://api.evmos.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://evmos-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://api.evmos.silentvalidator.com/",
          "provider": "silent"
        },
        {
          "address": "https://rest.evmos.tcnetwork.io",
          "provider": "TC Network"
        },
        {
          "address": "https://evmos.rest.stakin-nodes.com",
          "provider": "Stakin"
        },
        {
          "address": "https://rest-evmos.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://evmos-api.validatrium.club",
          "provider": "Validatrium"
        },
        {
          "address": "https://evmos-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://evmos-api.stakeandrelax.net",
          "provider": "Stake&Relax Validator 🦥"
        },
        {
          "address": "https://rest-evmos.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://evmos.rest.interchain.ivaldilabs.xyz",
          "provider": "ivaldilabs"
        },
        {
          "address": "https://evmos-rest.publicnode.com",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "address": "https://api-evmos-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "grpc": [
        {
          "address": "grpc-evmos.kingnodes.com:443",
          "provider": "kingnodes"
        },
        {
          "address": "grpc.bd.evmos.org:9090",
          "provider": "evmos.org"
        },
        {
          "address": "grpc-evmos-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "evmos-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "grpc.evmos.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "evmos.grpcui.chaintools.host:443",
          "provider": "ChainTools"
        },
        {
          "address": "evmos-grpc.polkachu.com:13490",
          "provider": "Polkachu"
        },
        {
          "address": "grpc.evmos.silknodes.io:443",
          "provider": "Silk Nodes"
        },
        {
          "address": "evmos.grpc.stakin-nodes.com:443",
          "provider": "Stakin"
        },
        {
          "address": "evmos-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "evmos.grpc.interchain.ivaldilabs.xyz:443",
          "provider": "ivaldilabs"
        },
        {
          "address": "https://evmos-grpc.publicnode.com",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "address": "grpc-evmos-01.stakeflow.io:1702",
          "provider": "Genesis Lab"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://eth.bd.evmos.org:8545",
          "provider": "Blockdaemon"
        },
        {
          "address": "https://jsonrpc-evmos-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://evmos-json-rpc.stakely.io",
          "provider": "Stakely"
        },
        {
          "address": "https://jsonrpc.evmos.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://json-rpc.evmos.bh.rocks",
          "provider": "BlockHunters"
        },
        {
          "address": "https://evmos-json-rpc.agoranodes.com",
          "provider": "AgoraNodes"
        },
        {
          "address": "https://evm-rpc.evmos.silentvalidator.com/",
          "provider": "silent"
        },
        {
          "address": "https://json-rpc.evmos.tcnetwork.io",
          "provider": "TC Network"
        },
        {
          "address": "https://jsonrpc-evmos.goldenratiostaking.net",
          "provider": "Golden Ratio Staking"
        },
        {
          "address": "https://evmosevm.rpc.stakin-nodes.com",
          "provider": "Stakin"
        },
        {
          "address": "https://evmos-evm.publicnode.com",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/evmos",
        "tx_page": "https://ezstaking.tools/evmos/txs/${txHash}",
        "account_page": "https://ezstaking.tools/evmos/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/evmos",
        "tx_page": "https://www.mintscan.io/evmos/txs/${txHash}",
        "account_page": "https://www.mintscan.io/evmos/account/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/evmos",
        "tx_page": "https://bigdipper.live/evmos/transactions/${txHash}",
        "account_page": "https://bigdipper.live/evmos/accounts/${accountAddress}"
      },
      {
        "kind": "blockscout",
        "url": "https://evm.evmos.org",
        "tx_page": "https://evm.evmos.org/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/evmos",
        "tx_page": "https://ping.pub/evmos/tx/${txHash}"
      },
      {
        "kind": "explorers.guru",
        "url": "https://evmos.explorers.guru",
        "tx_page": "https://evmos.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/evmos",
        "tx_page": "https://atomscan.com/evmos/transactions/${txHash}",
        "account_page": "https://atomscan.com/evmos/accounts/${accountAddress}"
      },
      {
        "kind": "tcnetwork",
        "url": "https://evmos.tcnetwork.io",
        "tx_page": "https://evmos.tcnetwork.io/transaction/${txHash}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/evmos",
        "account_page": "https://stakeflow.io/evmos/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "ethos",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Ethos",
    "chain_id": "ethos_7003-1",
    "bech32_prefix": "ethos",
    "daemon_name": "ethosd",
    "node_home": "$HOME/.ethos",
    "key_algos": [
      "ethsecp256k1"
    ],
    "extra_codecs": [
      "ethermint"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "aRYT"
        }
      ]
    },
    "peers": {
      "seeds": [],
      "persistent_peers": []
    },
    "apis": {
      "rpc": [
        {
          "address": "https://ethos-rpc.provable.dev:443/",
          "provider": "laurel.provable"
        }
      ],
      "rest": [
        {
          "address": "https://ethos.provable.dev/rest/",
          "provider": "laurel.provable"
        }
      ],
      "grpc": [
        {
          "address": "ethos-grpc.provable.dev:443",
          "provider": "laurel.provable"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://ethos-evm.provable.dev/",
          "provider": "laurel.provable"
        }
      ]
    },
    "explorers": [],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.svg"
    },
    "codebase": {
      "genesis": {
        "genesis_url": ""
      }
    }
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "emoney",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "e-Money",
    "chain_id": "emoney-3",
    "bech32_prefix": "emoney",
    "daemon_name": "emd",
    "node_home": "$HOME/.emd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ungm",
          "low_gas_price": 1,
          "average_gas_price": 1,
          "high_gas_price": 1
        },
        {
          "denom": "eeur",
          "low_gas_price": 1,
          "average_gas_price": 1,
          "high_gas_price": 1
        },
        {
          "denom": "echf",
          "low_gas_price": 1,
          "average_gas_price": 1,
          "high_gas_price": 1
        },
        {
          "denom": "enok",
          "low_gas_price": 1,
          "average_gas_price": 1,
          "high_gas_price": 1
        },
        {
          "denom": "esek",
          "low_gas_price": 1,
          "average_gas_price": 1,
          "high_gas_price": 1
        },
        {
          "denom": "edkk",
          "low_gas_price": 1,
          "average_gas_price": 1,
          "high_gas_price": 1
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ungm"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/e-money/em-ledger",
      "recommended_version": "v1.1.3",
      "compatible_versions": [
        "v1.1.3"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/e-money/networks/master/emoney-3/genesis.json"
      },
      "versions": [
        {
          "name": "v1.1.3",
          "recommended_version": "v1.1.3",
          "compatible_versions": [
            "v1.1.3"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "eb491498b8f91a02090c2feb7ad875df4087772e",
          "address": "seeds.goldenratiostaking.net:1625",
          "provider": "Golden Ratio Staking"
        },
        {
          "id": "ecec8933d80da5fccda6bdd72befe7e064279fc1",
          "address": "207.180.213.123:26676",
          "provider": "easy2stake"
        },
        {
          "id": "1723e34f45f54584f44d193ce9fd9c65271ca0b3",
          "address": "13.124.62.83:26656",
          "provider": "B-Harvest"
        },
        {
          "id": "34eca4a9142bf9c087a987b572c114dad67a8cc5",
          "address": "172.105.148.191:26656",
          "provider": "Cat Boss"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "emoney-mainnet-seed.autostake.com:26746",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ],
      "persistent_peers": [
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "emoney-mainnet-peer.autostake.com:26746",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://emoney.validator.network",
          "provider": "e-Money"
        },
        {
          "address": "https://rpc-emoney-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://rpc.emoney.quokkastake.io",
          "provider": "🐹 Quokka Stake"
        },
        {
          "address": "https://e-money-rpc.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://rpc.emoney.bh.rocks",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://emoney-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ],
      "rest": [
        {
          "address": "https://emoney.validator.network/api/",
          "provider": "e-Money"
        },
        {
          "address": "https://api-emoney-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://api.emoney.quokkastake.io",
          "provider": "🐹 Quokka Stake"
        },
        {
          "address": "https://e-money-api.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://api.emoney.bh.rocks",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://emoney-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ],
      "grpc": [
        {
          "address": "grpc-emoney-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "emoney-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/emoney",
        "tx_page": "https://ezstaking.tools/emoney/txs/${txHash}",
        "account_page": "https://ezstaking.tools/emoney/account/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/emoney",
        "tx_page": "https://bigdipper.live/emoney/transactions/${txHash}",
        "account_page": "https://bigdipper.live/emoney/accounts/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/emoney",
        "tx_page": "https://www.mintscan.io/emoney/txs/${txHash}",
        "account_page": "https://www.mintscan.io/emoney/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/e-money",
        "tx_page": "https://ping.pub/e-money/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/emoney",
        "tx_page": "https://atomscan.com/emoney/transactions/${txHash}",
        "account_page": "https://atomscan.com/emoney/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "echelon",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Echelon",
    "chain_id": "echelon_3000-3",
    "bech32_prefix": "echelon",
    "node_home": "$HOME/.echelond",
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "aechelon",
          "low_gas_price": 10000000000,
          "average_gas_price": 25000000000,
          "high_gas_price": 40000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "aechelon"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/echelonfoundation/echelon",
      "recommended_version": "v1.1.4",
      "compatible_versions": [
        "v1.1.4",
        "v1.0.3"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/echelonfoundation/echelon/releases/download/v1.1.4/echelon_1.1.4_Linux_x86_64.tar.gz",
        "linux/arm64": "https://github.com/echelonfoundation/echelon/releases/download/v1.1.4/echelon_1.1.4_Linux_arm64.tar.gz",
        "darwin/amd64": "https://github.com/echelonfoundation/echelon/releases/download/v1.1.4/echelon_1.1.4_Darwin_x86_64.tar.gz",
        "darwin/arm64": "https://github.com/echelonfoundation/echelon/releases/download/v1.1.4/echelon_1.1.4_Darwin_arm64.tar.gz",
        "windows/amd64": "https://github.com/echelonfoundation/echelon/releases/download/v1.1.4/echelon_1.1.4_Windows_x86_64.zip"
      },
      "genesis": {
        "genesis_url": "https://gist.githubusercontent.com/echelonfoundation/ee862f58850fc1b5ee6a6fdccc3130d2/raw/55c2c4ea2fee8a9391d0dc55b2c272adb804054a/genesis.json"
      },
      "versions": [
        {
          "name": "v1.1.4",
          "recommended_version": "v1.1.4",
          "compatible_versions": [
            "v1.1.4",
            "v1.0.3"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/echelonfoundation/echelon/releases/download/v1.1.4/echelon_1.1.4_Linux_x86_64.tar.gz",
            "linux/arm64": "https://github.com/echelonfoundation/echelon/releases/download/v1.1.4/echelon_1.1.4_Linux_arm64.tar.gz",
            "darwin/amd64": "https://github.com/echelonfoundation/echelon/releases/download/v1.1.4/echelon_1.1.4_Darwin_x86_64.tar.gz",
            "darwin/arm64": "https://github.com/echelonfoundation/echelon/releases/download/v1.1.4/echelon_1.1.4_Darwin_arm64.tar.gz",
            "windows/amd64": "https://github.com/echelonfoundation/echelon/releases/download/v1.1.4/echelon_1.1.4_Windows_x86_64.zip"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/echelon.svg"
    },
    "peers": {
      "seeds": [],
      "persistent_peers": []
    },
    "apis": {
      "rpc": [
        {
          "address": "https://tendermint.ech.network",
          "provider": "ech.network"
        },
        {
          "address": "https://rpc.eu.ech.world",
          "provider": "ech.world 🌍"
        },
        {
          "address": "https://rpc.us.ech.world",
          "provider": "ech.world 🌍"
        },
        {
          "address": "https://ech-rpc.softpaws.xyz",
          "provider": "SoftPaws"
        }
      ],
      "rest": [
        {
          "address": "https://api.ech.network",
          "provider": "ech.network"
        },
        {
          "address": "https://api.eu.ech.world",
          "provider": "ech.world 🌍"
        },
        {
          "address": "https://api.us.ech.world",
          "provider": "ech.world 🌍"
        },
        {
          "address": "https://ech-api.softpaws.xyz",
          "provider": "SoftPaws"
        }
      ],
      "grpc": [],
      "evm-http-jsonrpc": [
        {
          "address": "https://rpc.ech.network",
          "provider": "ech.network"
        },
        {
          "address": "https://jrpc.eu.ech.world",
          "provider": "ech.world 🌍"
        },
        {
          "address": "https://jrpc.us.ech.world",
          "provider": "ech.world 🌍"
        },
        {
          "address": "https://ech-evm.softpaws.xyz",
          "provider": "SoftPaws"
        }
      ]
    },
    "explorers": [
      {
        "kind": "echelon",
        "url": "https://app.ech.network/explorer",
        "tx_page": "https://app.ech.network/explorer/tx/${txHash}"
      },
      {
        "kind": "blockscout",
        "url": "https://scout.ech.network",
        "tx_page": "https://scout.ech.network/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/echelon",
        "tx_page": "https://ping.pub/echelon/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/echelon",
        "tx_page": "https://atomscan.com/echelon/transactions/${txHash}",
        "account_page": "https://atomscan.com/echelon/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "dyson",
    "website": "https://dysonprotocol.com/",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Dyson Protocol",
    "chain_id": "dyson-mainnet-01",
    "bech32_prefix": "dys",
    "node_home": "$HOME/.dyson",
    "daemon_name": "dysond",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "dys",
          "low_gas_price": 0.0001,
          "average_gas_price": 0.0002,
          "high_gas_price": 0.0003
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "dys"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://gitlab.com/dysonproject/dyson",
      "recommended_version": "v0.0.2-bebf2e98",
      "compatible_versions": [
        "v0.0.2-bebf2e98"
      ],
      "genesis": {
        "genesis_url": "https://gitlab.com/dysonproject/dyson-deploy/-/raw/develop/genesis.json"
      },
      "versions": [
        {
          "name": "v0.0.2-bebf2e98",
          "recommended_version": "v0.0.2-bebf2e98",
          "compatible_versions": [
            "v0.0.2-bebf2e98"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dyson.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dyson.svg"
    },
    "peers": {
      "seeds": [],
      "persistent_peers": [
        {
          "id": "b1fd06f7f129ad6bf66635b7068931cf0fb68497",
          "address": "161.97.91.203:27656",
          "provider": "genznodes"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://dys-tm.dyson.lol:443",
          "provider": "lol"
        },
        {
          "address": "https://dys-tm.dysonprotocol.com:443",
          "provider": "dysonprotocol"
        },
        {
          "address": "https://dyson-rpc.cogwheel.zone:443",
          "provider": "cogwheel"
        }
      ],
      "rest": [
        {
          "address": "https://dys-api.dyson.lol:443",
          "provider": "lol"
        },
        {
          "address": "https://dys-api.dysonprotocol.com:443",
          "provider": "dysonprotocol"
        },
        {
          "address": "https://dyson-api.genznodes.dev:443",
          "provider": "genznodes"
        },
        {
          "address": "https://dyson-api.cogwheel.zone:443",
          "provider": "cogwheel"
        }
      ],
      "grpc": [
        {
          "address": "dys-grpc.dyson.lol:443",
          "provider": "lol"
        },
        {
          "address": "https://dyson-grpc.cogwheel.zone:443",
          "provider": "cogwheel"
        }
      ]
    },
    "explorers": [
      {
        "kind": "dysonprotocol",
        "url": "https://explorer.dys.dysonprotocol.com/dyson/",
        "tx_page": "https://explorer.dys.dysonprotocol.com/dyson/tx/${txHash}"
      },
      {
        "kind": "lol",
        "url": "https://explorer.dys.dyson.lol",
        "tx_page": "https://explorer.dys.dyson.lol/dyson/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "dig",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://digchain.org/",
    "pretty_name": "Dig Chain",
    "chain_id": "dig-1",
    "bech32_prefix": "dig",
    "daemon_name": "digd",
    "node_home": "$HOME/.dig",
    "key_algos": [
      "secp256k1",
      "ethsecp256k1"
    ],
    "extra_codecs": [
      "ethermint"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "udig",
          "low_gas_price": 0.025,
          "average_gas_price": 0.03,
          "high_gas_price": 0.035
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "udig"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/notional-labs/dig",
      "recommended_version": "v1.0.0",
      "compatible_versions": [
        "v1.0.0"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/notional-labs/dig/master/networks/mainnets/dig-1/genesis.json"
      },
      "versions": [
        {
          "name": "v1.0.0",
          "recommended_version": "v1.0.0",
          "compatible_versions": [
            "v1.0.0"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png"
    },
    "peers": {
      "seeds": [],
      "persistent_peers": [
        {
          "id": "64eccffdc60a206227032d3a021fbf9dfc686a17",
          "address": "194.163.156.84:26656"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-1-dig.notional.ventures"
        },
        {
          "address": "https://rpc-dig-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        }
      ],
      "rest": [
        {
          "address": "https://api-1-dig.notional.ventures"
        },
        {
          "address": "https://api-dig-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        }
      ],
      "grpc": [
        {
          "address": "grpc-dig-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/dig",
        "tx_page": "https://ping.pub/dig/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/dig",
        "tx_page": "https://atomscan.com/dig/transactions/${txHash}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/dig",
        "tx_page": "https://explorer.tcnetwork.io/dig/transaction/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "desmos",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://desmos.network/",
    "pretty_name": "Desmos",
    "chain_id": "desmos-mainnet",
    "bech32_prefix": "desmos",
    "daemon_name": "desmos",
    "node_home": "$HOME/.desmos",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 852,
    "fees": {
      "fee_tokens": [
        {
          "denom": "udsm",
          "fixed_min_gas_price": 0.001,
          "low_gas_price": 0.01,
          "average_gas_price": 0.03,
          "high_gas_price": 0.05
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "udsm"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/desmos-labs/desmos",
      "recommended_version": "v4.8.0",
      "compatible_versions": [
        "v4.8.0",
        "v4.8.1"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/desmos-labs/desmos/releases/download/v4.8.0/desmos-4.8.0-linux-amd64",
        "linux/arm64": "https://github.com/desmos-labs/desmos/releases/download/v4.8.0/desmos-4.8.0-linux-arm64",
        "darwin/amd64": "https://github.com/desmos-labs/desmos/releases/download/v4.8.0/desmos-4.8.0-darwin-amd64",
        "windows/amd64": "https://github.com/desmos-labs/desmos/releases/download/v4.8.0/desmos-4.8.0-windows-amd64.exe"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/desmos-labs/mainnet/main/genesis.json"
      },
      "versions": [
        {
          "name": "v4.8.0",
          "recommended_version": "v4.8.0",
          "compatible_versions": [
            "v4.8.0",
            "v4.8.1"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/desmos-labs/desmos/releases/download/v4.8.0/desmos-4.8.0-linux-amd64",
            "linux/arm64": "https://github.com/desmos-labs/desmos/releases/download/v4.8.0/desmos-4.8.0-linux-arm64",
            "darwin/amd64": "https://github.com/desmos-labs/desmos/releases/download/v4.8.0/desmos-4.8.0-darwin-amd64",
            "windows/amd64": "https://github.com/desmos-labs/desmos/releases/download/v4.8.0/desmos-4.8.0-windows-amd64.exe"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "5c86915026093f9a2f81e5910107cf14676b48fc",
          "address": "seed-2.mainnet.desmos.network:26656",
          "provider": "desmos"
        },
        {
          "id": "45105c7241068904bdf5a32c86ee45979794637f",
          "address": "seed-3.mainnet.desmos.network:26656",
          "provider": "desmos"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:16256",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "15b1f6b49a548e9f0d0855bd340199bce9140add",
          "address": "seed-desmos.starsquid.io:15601",
          "provider": "Starsquid"
        },
        {
          "id": "c071562db4d2ed2d22100b0d34ec4788f1b058cf",
          "address": "seed-desmos.explorer.co.id:17656",
          "provider": "Nodine.ID"
        },
        {
          "id": "73fc6b8b41aada42306b2f149619cc0ff935a868",
          "address": "desmos-seed.panthea.eu:39656",
          "provider": "Panthea EU"
        },
        {
          "id": "6580d5123923ec1426c67658d2ae1e68cfd6a62f",
          "address": "seeds.whispernode.com:16256",
          "provider": "WhisperNode🤐"
        }
      ],
      "persistent_peers": [
        {
          "id": "7c506d9e32cfc486ea714ee0c0307022398b8c20",
          "address": "desmos-peer.panthea.eu:29656",
          "provider": "Panthea EU"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.mainnet.desmos.network",
          "provider": "desmos"
        },
        {
          "address": "https://desmos-rpc.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://desmos-rpc.ibs.team/",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://desmos.nodejumper.io",
          "provider": "NODEJUMPER"
        },
        {
          "address": "https://rpc-desmos.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://rpc-desmos.explorer.co.id",
          "provider": "Nodine.ID"
        }
      ],
      "rest": [
        {
          "address": "https://api.mainnet.desmos.network",
          "provider": "desmos"
        },
        {
          "address": "https://desmos-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://desmos-api.ibs.team/",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://desmos.nodejumper.io:1317",
          "provider": "NODEJUMPER"
        },
        {
          "address": "https://api-desmos.explorer.co.id",
          "provider": "Nodine.ID"
        }
      ],
      "grpc": [
        {
          "address": "desmos-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://desmos.nodejumper.io:9090",
          "provider": "Nodejumper 🚀"
        },
        {
          "address": "https://grpc-desmos.explorer.co.id",
          "provider": "Nodine.ID"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/desmos",
        "tx_page": "https://ezstaking.tools/desmos/txs/${txHash}",
        "account_page": "https://ezstaking.tools/desmos/account/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/desmos",
        "tx_page": "https://bigdipper.live/desmos/transactions/${txHash}",
        "account_page": "https://bigdipper.live/desmos/accounts/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/desmos",
        "tx_page": "https://www.mintscan.io/desmos/txs/${txHash}",
        "account_page": "https://www.mintscan.io/desmos/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/desmos",
        "tx_page": "https://ping.pub/desmos/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/desmos",
        "tx_page": "https://atomscan.com/desmos/transactions/${txHash}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/desmos",
        "tx_page": "https://explorer.tcnetwork.io/desmos/transaction/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "decentr",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Decentr",
    "chain_id": "mainnet-3",
    "bech32_prefix": "decentr",
    "daemon_name": "decentrd",
    "node_home": "$HOME/.decentr",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "udec",
          "fixed_min_gas_price": 0.025
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "udec"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/Decentr-net/decentr",
      "recommended_version": "v1.5.7",
      "compatible_versions": [
        "v1.5.7"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/Decentr-net/mainnets/master/3.0/genesis.json"
      },
      "versions": [
        {
          "name": "v1.5.7",
          "recommended_version": "v1.5.7",
          "compatible_versions": [
            "v1.5.7"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "8a3485f940c3b2b9f0dd979a16ea28de154f14dd",
          "address": "calliope.mainnet.decentr.xyz:26656",
          "provider": "decentr"
        },
        {
          "id": "3261bff0b7c16dcf6b5b8e62dd54faafbfd75415",
          "address": "hera.mainnet.decentr.xyz:26656",
          "provider": "decentr"
        },
        {
          "id": "c37f32e202e13b0725515570f794b68573a6f58c",
          "address": "hera.mainnet.decentr.xyz:26656",
          "provider": "decentr"
        },
        {
          "id": "5f3cfa2e3d5ed2c2ef699c8593a3d93c902406a9",
          "address": "hermes.mainnet.decentr.xyz:26656",
          "provider": "decentr"
        },
        {
          "id": "a529801b5390f56d5c280eaff4ae95b7163e385f",
          "address": "melpomene.mainnet.decentr.xyz:26656",
          "provider": "decentr"
        },
        {
          "id": "385129dbe71bceff982204afa11ed7fa0ee39430",
          "address": "poseidon.mainnet.decentr.xyz:26656",
          "provider": "decentr"
        },
        {
          "id": "35a934228c32ad8329ac917613a25474cc79bc08",
          "address": "terpsichore.mainnet.decentr.xyz:26656",
          "provider": "decentr"
        },
        {
          "id": "0fd62bcd1de6f2e3cfc15852cdde9f3f8a7987e4",
          "address": "thalia.mainnet.decentr.xyz:26656",
          "provider": "decentr"
        },
        {
          "id": "bd99693d0dbc855b0367f781fb48bf1ca6a6a58b",
          "address": "zeus.mainnet.decentr.xyz:26656",
          "provider": "decentr"
        },
        {
          "id": "6bb349e1709da784d1628fa1f8bfc5cd00af974d",
          "address": "seeds.badgerbite.io:16656",
          "provider": "decentr"
        },
        {
          "id": "3fb96f1619340507e7f28fd7c4b81f4cd3d9a7e7",
          "address": "seeds-decentr.sxlzptprjkt.xyz:31656",
          "provider": "sxlzptprjkt | VALIDATOR"
        },
        {
          "id": "89f32d5e096eadddb1b3e6e839963503ef4d2d70",
          "address": "rpc.decentr.nodexcapital.com:10856",
          "provider": "NodeX Validator"
        }
      ],
      "persistent_peers": [
        {
          "id": "6afae5a544d74a8581da932aaa6d483ce797a6b1",
          "address": "75.119.157.167:28656",
          "provider": "Inter Blockchain Services"
        },
        {
          "id": "a6ebaed2c7972941b5cce5d94ec94a1352a600a4",
          "address": "peers-decentr.sxlzptprjkt.xyz:31656",
          "provider": "sxlzptprjkt | VALIDATOR"
        },
        {
          "id": "05f4788f936aa0158eeb935d8857cc9d23e6683d",
          "address": "65.109.28.226:12656",
          "provider": "Hexnodes"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://poseidon.mainnet.decentr.xyz",
          "provider": "decentr"
        },
        {
          "address": "https://decentr-rpc.badgerbite.io:443",
          "provider": "BadgerBite"
        },
        {
          "address": "https://rpc.decentr.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://decentr-rpc.ibs.team/",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://rpc-dcntr.nodine.id/",
          "provider": "Nodine.ID"
        },
        {
          "address": "https://rpc-decentr.sxlzptprjkt.xyz",
          "provider": "sxlzptprjkt | VALIDATOR"
        },
        {
          "address": "https://rpc.decentr.hexnodes.co",
          "provider": "Hexnodes"
        },
        {
          "address": "https://rpc.decentr.nodexcapital.com",
          "provider": "NodeX Validator"
        },
        {
          "address": "https://rpc-decentr.comunitynode.my.id",
          "provider": "Comunity Node"
        }
      ],
      "rest": [
        {
          "address": "https://rest.mainnet.decentr.xyz",
          "provider": "decentr"
        },
        {
          "address": "https://api.decentr.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://decentr-api.ibs.team/",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://api-dcntr.nodine.id",
          "provider": "Nodine.ID"
        },
        {
          "address": "https://api-decentr.sxlzptprjkt.xyz",
          "provider": "sxlzptprjkt | VALIDATOR"
        },
        {
          "address": "https://lcd.decentr.hexnodes.co",
          "provider": "Hexnodes"
        },
        {
          "address": "https://rest.decentr.nodexcapital.com",
          "provider": "NodeX Validator"
        },
        {
          "address": "https://api-decentr.comunitynode.my.id",
          "provider": "Comunity Node"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc-decentr.sxlzptprjkt.xyz:443",
          "provider": "sxlzptprjkt | VALIDATOR"
        },
        {
          "address": "https://grpc.decentr.hexnodes.co",
          "provider": "Hexnodes"
        },
        {
          "address": "https://grpc.decentr.nodexcapital.com:443",
          "provider": "NodeX Validator"
        }
      ]
    },
    "explorers": [
      {
        "kind": "decentr.net",
        "url": "https://explorer.decentr.net",
        "tx_page": "https://explorer.decentr.net/transactions/${txHash}?networkId=mainnet"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/decentr/",
        "tx_page": "https://ping.pub/decentr/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/decentr",
        "tx_page": "https://atomscan.com/decentr/transactions/${txHash}",
        "account_page": "https://atomscan.com/decentr/accounts/${accountAddress}"
      },
      {
        "kind": "Nodine.ID",
        "url": "https://explorer.co.id/decentr",
        "tx_page": "https://explorer.co.id/decentr/tx/${txHash}"
      },
      {
        "kind": "THE EXPLORER",
        "url": "https://explorer.sxlzptprjkt.xyz/decentr",
        "tx_page": "https://explorer.sxlzptprjkt.xyz/decentr/tx/${txHash}"
      },
      {
        "kind": "hexskrt EXPLORER",
        "url": "https://explorer.hexskrt.net/decentr",
        "tx_page": "https://explorer.hexskrt.net/decentr/tx/${txHash}"
      },
      {
        "kind": "NODEXPLORER",
        "url": "https://explorer.nodexcapital.com/decentr",
        "tx_page": "https://explorer.nodexcapital.com/decentr/tx/${txHash}"
      },
      {
        "kind": "Explorer ComunityNode",
        "url": "https://explorer.comunitynode.my.id/decentr",
        "tx_page": "https://explorer.comunitynode.my.id/decentr/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "cudos",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Cudos",
    "chain_id": "cudos-1",
    "bech32_prefix": "cudos",
    "daemon_name": "cudos-noded",
    "website": "https://www.cudos.org/",
    "node_home": "$HOME/cudos-data",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "acudos",
          "low_gas_price": 5000000000000,
          "average_gas_price": 10000000000000,
          "high_gas_price": 20000000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "acudos"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/CudoVentures/cudos-node",
      "recommended_version": "v1.1.0",
      "compatible_versions": [
        "v1.0.1",
        "v1.1.0"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/CudoVentures/cudos-builders/v1.0.0/docker/config/genesis.mainnet.json"
      },
      "versions": [
        {
          "name": "v1.1.0",
          "recommended_version": "v1.1.0",
          "compatible_versions": [
            "v1.0.1",
            "v1.1.0"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "ff3f0f7b1eecc6844e6512428ef4c7a9448452a8",
          "address": "cluster-1-seed-1.hosts.cudos.org:26656",
          "provider": "cudo"
        },
        {
          "id": "6d9beb4d44a530a4a10ebe78ed7717f6083d0c4b",
          "address": "cluster-2-seed-1.hosts.cudos.org:26656",
          "provider": "cudo"
        },
        {
          "id": "e0f3bcc574ef66ae4561fad0772a4fd1959969af",
          "address": "cluster-3-seed-1.hosts.cudos.org:26656",
          "provider": "cudo"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "cudos-mainnet-seed.autostake.com:27256",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:12356",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ],
      "persistent_peers": [
        {
          "id": "f196d7cc811a5ab99e4c5dd5c7f3c0135509d1c4",
          "address": "cluster-1-sentry-1.hosts.cudos.org:26656",
          "provider": "cudo"
        },
        {
          "id": "2cc0a12ff1038509b2ed64719fcddfdded9a04ad",
          "address": "cluster-2-sentry-1.hosts.cudos.org:26656",
          "provider": "cudo"
        },
        {
          "id": "ab1ec4fb29afc9c0f5a04b7cbd1220b8b30ffea4",
          "address": "cluster-3-sentry-1.hosts.cudos.org:26656",
          "provider": "cudo"
        },
        {
          "id": "2958b15e9102cb556cc0f1f1bbbfdfc922a16069",
          "address": "mainnet-full-node-01.hosts.cudos.org:26656",
          "provider": "cudo"
        },
        {
          "id": "eb14f9142ad313297653f84754b1caf60efe75ac",
          "address": "mainnet-full-node-02.hosts.cudos.org:26656",
          "provider": "cudo"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "cudos-mainnet-peer.autostake.com:27256",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "http://mainnet-full-node-01.hosts.cudos.org:26657",
          "provider": "cudo"
        },
        {
          "address": "https://mainnet-full-node-02.hosts.cudos.org:36657",
          "provider": "cudo"
        },
        {
          "address": "https://cudos-rpc.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://cudos-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://cudos-rpc.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ],
      "rest": [
        {
          "address": "http://mainnet-full-node-01.hosts.cudos.org:1317",
          "provider": "cudo"
        },
        {
          "address": "https://mainnet-full-node-02.hosts.cudos.org:31317",
          "provider": "cudo"
        },
        {
          "address": "https://cudos-api.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://cudos-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://cudos-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ],
      "grpc": [
        {
          "address": "mainnet-full-node-01.hosts.cudos.org:9090",
          "provider": "cudo"
        },
        {
          "address": "cudos-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "cudos-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://explorer.cudos.org/",
        "tx_page": "https://explorer.cudos.org/transactions/${txHash}",
        "account_page": "https://explorer.cudos.org/accounts/${accountAddress}"
      },
      {
        "kind": "cudos-dashboard",
        "url": "https://dashboard.cudos.org/",
        "tx_page": "https://explorer.cudos.org/transactions/${txHash}",
        "account_page": "https://explorer.cudos.org/accounts/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/cudos",
        "tx_page": "https://www.mintscan.io/cudos/txs/${txHash}",
        "account_page": "https://www.mintscan.io/cudos/account/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/cudos",
        "tx_page": "https://atomscan.com/cudos/transactions/${txHash}",
        "account_page": "https://atomscan.com/cudos/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "cryptoorgchain",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Crypto.org Chain",
    "chain_id": "crypto-org-chain-mainnet-1",
    "bech32_prefix": "cro",
    "daemon_name": "chain-maind",
    "node_home": "$HOME/.chain-maind",
    "slip44": 394,
    "alternative_slip44s": [
      118
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "basecro",
          "low_gas_price": 0.025,
          "average_gas_price": 0.03,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "basecro"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/crypto-org-chain/chain-main",
      "recommended_version": "v4.2.2",
      "compatible_versions": [
        "v4.2.2"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2/chain-main_4.2.2_Linux_x86_64.tar.gz",
        "linux/arm64": "https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2/chain-main_4.2.2_Linux_arm64.tar.gz",
        "darwin/amd64": "https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2/chain-main_4.2.2_Darwin_x86_64.tar.gz",
        "darwin/arm64": "https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2/chain-main_4.2.2_Darwin_arm64.tar.gz",
        "windows/amd64": "https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2/chain-main_4.2.2_Windows_x86_64.zip"
      },
      "genesis": {
        "genesis_url": "https://github.com/crypto-org-chain/mainnet/raw/main/crypto-org-chain-mainnet-1/genesis.json"
      },
      "versions": [
        {
          "name": "v4.2.2",
          "recommended_version": "v4.2.2",
          "compatible_versions": [
            "v4.2.2"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2/chain-main_4.2.2_Linux_x86_64.tar.gz",
            "linux/arm64": "https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2/chain-main_4.2.2_Linux_arm64.tar.gz",
            "darwin/amd64": "https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2/chain-main_4.2.2_Darwin_x86_64.tar.gz",
            "darwin/arm64": "https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2/chain-main_4.2.2_Darwin_arm64.tar.gz",
            "windows/amd64": "https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2/chain-main_4.2.2_Windows_x86_64.zip"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "87c3adb7d8f649c51eebe0d3335d8f9e28c362f2",
          "address": "seed-0.crypto.org:26656",
          "provider": "crypto-org"
        },
        {
          "id": "e1d7ff02b78044795371beb1cd5fb803f9389256",
          "address": "seed-1.crypto.org:26656",
          "provider": "crypto-org"
        },
        {
          "id": "2c55809558a4e491e9995962e10c026eb9014655",
          "address": "seed-2.crypto.org:26656",
          "provider": "crypto-org"
        },
        {
          "id": "8dc1863d1d23cf9ad7cbea215c19bcbe8bf39702",
          "address": "p2p.baaa7e56-cc71-4ae4-b4b3-c6a9d4a9596a.cryptodotorg.bison.run:26656",
          "provider": "bison-trails"
        },
        {
          "id": "8a7922f3fb3fb4cfe8cb57281b9d159ca7fd29c6",
          "address": "p2p.aef59b2a-d77e-4922-817a-d1eea614aef4.cryptodotorg.bison.run:26656",
          "provider": "bison-trails"
        },
        {
          "id": "494d860a2869b90c458b07d4da890539272785c9",
          "address": "p2p.fabc23d9-e0a1-4ced-8cd7-eb3efd6d9ef3.cryptodotorg.bison.run:26656",
          "provider": "bison-trails"
        },
        {
          "id": "dc2540dabadb8302da988c95a3c872191061aed2",
          "address": "p2p.7d1b53c0-b86b-44c8-8c02-e3b0e88a4bf7.cryptodotorg.herd.run:26656",
          "provider": "bison-trails"
        },
        {
          "id": "33b15c14f54f71a4a923ac264761eb3209784cf2",
          "address": "p2p.0d20d4b3-6890-4f00-b9f3-596ad3df6533.cryptodotorg.herd.run:26656",
          "provider": "bison-trails"
        },
        {
          "id": "d2862ef8f86f9976daa0c6f59455b2b1452dc53b",
          "address": "p2p.a088961f-5dfd-4007-a15c-3a706d4be2c0.cryptodotorg.herd.run:26656",
          "provider": "bison-trails"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "crypto-org-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "e726816f42831689eab9378d5d577f1d06d25716",
          "address": "crypto-org-seed-2.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:20256",
          "provider": "Polkachu"
        }
      ],
      "persistent_peers": [
        {
          "id": "87c3adb7d8f649c51eebe0d3335d8f9e28c362f2",
          "address": "seed-0.crypto.org:26656",
          "provider": "crypto-org"
        },
        {
          "id": "e1d7ff02b78044795371beb1cd5fb803f9389256",
          "address": "seed-1.crypto.org:26656",
          "provider": "crypto-org"
        },
        {
          "id": "2c55809558a4e491e9995962e10c026eb9014655",
          "address": "seed-2.crypto.org:26656",
          "provider": "crypto-org"
        },
        {
          "id": "8dc1863d1d23cf9ad7cbea215c19bcbe8bf39702",
          "address": "p2p.baaa7e56-cc71-4ae4-b4b3-c6a9d4a9596a.cryptodotorg.bison.run:26656",
          "provider": "bison-trails"
        },
        {
          "id": "8a7922f3fb3fb4cfe8cb57281b9d159ca7fd29c6",
          "address": "p2p.aef59b2a-d77e-4922-817a-d1eea614aef4.cryptodotorg.bison.run:26656",
          "provider": "bison-trails"
        },
        {
          "id": "d2862ef8f86f9976daa0c6f59455b2b1452dc53b",
          "address": "p2p.a088961f-5dfd-4007-a15c-3a706d4be2c0.cryptodotorg.herd.run:26656",
          "provider": "bison-trails"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.mainnet.crypto.org/",
          "provider": "crypto.org"
        },
        {
          "address": "https://rpc-cryptoorgchain-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://rpc-cryptoorgchain.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://cryptocom-rpc.polkachu.com",
          "provider": "Polkachu"
        }
      ],
      "rest": [
        {
          "address": "https://rest.mainnet.crypto.org/",
          "provider": "crypto.org"
        },
        {
          "address": "https://api-cryptoorgchain-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://cryptocom-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rest-cryptoorgchain.ecostake.com",
          "provider": "ecostake"
        }
      ],
      "grpc": [
        {
          "address": "grpc.mainnet.crypto.org:443",
          "provider": "crypto.org"
        },
        {
          "address": "grpc-cryptoorgchain-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "cryptocom-grpc.polkachu.com:20290",
          "provider": "Polkachu"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/crypto-org",
        "tx_page": "https://www.mintscan.io/crypto-org/txs/${txHash}",
        "account_page": "https://www.mintscan.io/crypto-org/account/${accountAddress}"
      },
      {
        "kind": "crypto.org",
        "url": "https://crypto.org/explorer",
        "tx_page": "https://crypto.org/explorer/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/crypto-com-chain",
        "tx_page": "https://ping.pub/crypto-com-chain/tx/${txHash}"
      },
      {
        "kind": "yummy-explorer",
        "url": "https://explorer.yummy.capital",
        "tx_page": "https://explorer.yummy.capital/txs/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "cronos",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://cronos.org",
    "pretty_name": "Cronos",
    "chain_id": "cronosmainnet_25-1",
    "bech32_prefix": "crc",
    "daemon_name": "cronosd",
    "node_home": "$HOME/.cronos",
    "key_algos": [
      "ethsecp256k1"
    ],
    "extra_codecs": [
      "ethermint"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "basecro"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/crypto-org-chain/cronos",
      "recommended_version": "v1.0.4",
      "compatible_versions": [
        "v1.0.2",
        "v1.0.3",
        "v1.0.4"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/crypto-org-chain/cronos/releases/download/v1.0.4/cronos_1.0.4_Linux_x86_64.tar.gz",
        "linux/arm64": "https://github.com/crypto-org-chain/cronos/releases/download/v1.0.4/cronos_1.0.4_Linux_arm64.tar.gz",
        "darwin/amd64": "https://github.com/crypto-org-chain/cronos/releases/download/v1.0.4/cronos_1.0.4_Darwin_x86_64.tar.gz",
        "darwin/arm64": "https://github.com/crypto-org-chain/cronos/releases/download/v1.0.4/cronos_1.0.4_Darwin_arm64.tar.gz",
        "windows/amd64": "https://github.com/crypto-org-chain/cronos/releases/download/v1.0.4/cronos_1.0.4_Windows_x86_64.zip"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/crypto-org-chain/cronos-mainnet/master/cronosmainnet_25-1/genesis.json"
      },
      "versions": [
        {
          "name": "v1.0.4",
          "recommended_version": "v1.0.4",
          "compatible_versions": [
            "v1.0.2",
            "v1.0.3",
            "v1.0.4"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/crypto-org-chain/cronos/releases/download/v1.0.4/cronos_1.0.4_Linux_x86_64.tar.gz",
            "linux/arm64": "https://github.com/crypto-org-chain/cronos/releases/download/v1.0.4/cronos_1.0.4_Linux_arm64.tar.gz",
            "darwin/amd64": "https://github.com/crypto-org-chain/cronos/releases/download/v1.0.4/cronos_1.0.4_Darwin_x86_64.tar.gz",
            "darwin/arm64": "https://github.com/crypto-org-chain/cronos/releases/download/v1.0.4/cronos_1.0.4_Darwin_arm64.tar.gz",
            "windows/amd64": "https://github.com/crypto-org-chain/cronos/releases/download/v1.0.4/cronos_1.0.4_Windows_x86_64.zip"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "0d5cf1394a1cfde28dc8f023567222abc0f47534",
          "address": "cronos-seed-0.crypto.org:26656",
          "provider": "crypto-org"
        },
        {
          "id": "3032073adc06d710dd512240281637c1bd0c8a7b",
          "address": "cronos-seed-1.crypto.org:26656",
          "provider": "crypto-org"
        },
        {
          "id": "04f43116b4c6c70054d9c2b7485383df5b1ed1da",
          "address": "cronos-seed-2.crypto.org:26656",
          "provider": "crypto-org"
        },
        {
          "id": "337377dcda43d79c537d2c4d93ad3b698ce9452e",
          "address": "bd-cronos-mainnet-seed-node-01.bdnodes.net:26656",
          "provider": "Blockdaemon.com"
        },
        {
          "id": "abedfe94dd5731e9750e045ca8d8e40aa6d3c60b",
          "address": "seed.cronos.jerrychong.com:26656",
          "provider": "Jerry's Pool"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "cronos-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "e726816f42831689eab9378d5d577f1d06d25716",
          "address": "cronos-seed-2.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        }
      ],
      "persistent_peers": [
        {
          "id": "0d5cf1394a1cfde28dc8f023567222abc0f47534",
          "address": "cronos-seed-0.crypto.org:26656",
          "provider": "crypto-org"
        },
        {
          "id": "3032073adc06d710dd512240281637c1bd0c8a7b",
          "address": "cronos-seed-1.crypto.org:26656",
          "provider": "crypto-org"
        },
        {
          "id": "04f43116b4c6c70054d9c2b7485383df5b1ed1da",
          "address": "cronos-seed-2.crypto.org:26656",
          "provider": "crypto-org"
        },
        {
          "id": "337377dcda43d79c537d2c4d93ad3b698ce9452e",
          "address": "bd-cronos-mainnet-seed-node-01.bdnodes.net:26656",
          "provider": "Blockdaemon.com"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.cronos.org/",
          "provider": "crypto.org"
        },
        {
          "address": "https://cronos-rpc.publicnode.com",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        }
      ],
      "rest": [
        {
          "address": "https://rest.cronos.org/",
          "provider": "crypto.org"
        },
        {
          "address": "https://cronos-rest.publicnode.com",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        }
      ],
      "grpc": [
        {
          "address": "https://cronos-grpc.publicnode.com",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://evm.cronos.org/",
          "provider": "crypto.org"
        },
        {
          "address": "https://cronos-evm.publicnode.com",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        }
      ]
    },
    "explorers": [
      {
        "kind": "cronoscan",
        "url": "https://cronoscan.com",
        "tx_page": "https://cronoscan.com/tx/${txHash}"
      },
      {
        "kind": "crypto.org",
        "url": "https://cronos.org/explorer",
        "tx_page": "https://cronos.org/explorer/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "crescent",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Crescent",
    "chain_id": "crescent-1",
    "bech32_prefix": "cre",
    "daemon_name": "crescentd",
    "node_home": "$HOME/.crescent",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ucre",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.03
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ucre"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/crescent-network/crescent",
      "recommended_version": "v4.0.0",
      "compatible_versions": [
        "v4.0.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/crescent-network/crescent/releases/download/v2.1.0/crescentd-v2.1.0-linux-amd64",
        "darwin/amd64": "https://github.com/crescent-network/crescent/releases/download/v2.1.0/crescentd-v2.1.0-darwin-amd64"
      },
      "genesis": {
        "genesis_url": "https://github.com/crescent-network/launch/raw/main/mainnet/crescent-1/genesis.json.tar.gz"
      },
      "versions": [
        {
          "name": "v4.0.0",
          "recommended_version": "v4.0.0",
          "compatible_versions": [
            "v4.0.0"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/crescent-network/crescent/releases/download/v2.1.0/crescentd-v2.1.0-linux-amd64",
            "darwin/amd64": "https://github.com/crescent-network/crescent/releases/download/v2.1.0/crescentd-v2.1.0-darwin-amd64"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "929f22a7b04ff438da9edcfebd8089908239de44",
          "address": "18.180.232.184:26656",
          "provider": "crescent"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "crescent-mainnet-seed.autostake.com:26816",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "3b60a29d89cd7ef6a8d0c7ba32013d7f2051e082",
          "address": "seed-crescent-01.stakeflow.io:1406",
          "provider": "Genesis Lab"
        }
      ],
      "persistent_peers": [
        {
          "id": "3bcffbcb11e96edc84c04a5628639f5ed94b9db2",
          "address": "128.0.51.5:26656",
          "provider": "Dokia-capital"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:14556",
          "provider": "Polkachu"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "crescent-mainnet-peer.autostake.com:26816",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "3b60a29d89cd7ef6a8d0c7ba32013d7f2051e082",
          "address": "peer-crescent-01.stakeflow.io:1406",
          "provider": "Genesis Lab"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://mainnet.crescent.network:26657",
          "provider": "crescent"
        },
        {
          "address": "https://crescent-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-crescent.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://crescent.rpc.stakin-nodes.com",
          "provider": "Stakin"
        },
        {
          "address": "https://crescent-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rpc-crescent-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "rest": [
        {
          "address": "https://mainnet.crescent.network:1317",
          "provider": "crescent"
        },
        {
          "address": "https://api-crescent.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://crescent-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://crescent.rest.stakin-nodes.com",
          "provider": "Stakin"
        },
        {
          "address": "https://crescent-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://api-crescent-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "grpc": [
        {
          "address": "crescent-grpc.polkachu.com:14590",
          "provider": "Polkachu"
        },
        {
          "address": "crescent.grpc.stakin-nodes.com:443",
          "provider": "Stakin"
        },
        {
          "address": "crescent-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "grpc-crescent-01.stakeflow.io:1402",
          "provider": "Genesis Lab"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/crescent",
        "tx_page": "https://www.mintscan.io/crescent/txs/${txHash}",
        "account_page": "https://www.mintscan.io/crescent/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/crescent",
        "tx_page": "https://ping.pub/crescent/tx/${txHash}"
      },
      {
        "kind": "explorers.guru",
        "url": "https://crescent.explorers.guru",
        "tx_page": "https://crescent.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/crescent",
        "tx_page": "https://atomscan.com/crescent/transactions/${txHash}",
        "account_page": "https://atomscan.com/crescent/accounts/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/crescent",
        "tx_page": "https://bigdipper.live/crescent/transactions/${txHash}",
        "account_page": "https://bigdipper.live/crescent/accounts/${accountAddress}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/crescent",
        "account_page": "https://stakeflow.io/crescent/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "cosmoshub",
    "chain_id": "cosmoshub-4",
    "website": "https://cosmos.network/",
    "pretty_name": "Cosmos Hub",
    "status": "live",
    "network_type": "mainnet",
    "bech32_prefix": "cosmos",
    "daemon_name": "gaiad",
    "node_home": "$HOME/.gaia",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uatom",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.03
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uatom"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/cosmos/gaia",
      "recommended_version": "v9.1.0",
      "compatible_versions": [
        "v9.1.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/cosmos/gaia/releases/download/v9.1.0/gaiad-v9.1.0-linux-amd64",
        "linux/arm64": "https://github.com/cosmos/gaia/releases/download/v9.1.0/gaiad-v9.1.0-linux-arm64",
        "darwin/amd64": "https://github.com/cosmos/gaia/releases/download/v9.1.0/gaiad-v9.1.0-darwin-amd64",
        "darwin/arm64": "https://github.com/cosmos/gaia/releases/download/v9.1.0/gaiad-v9.1.0-darwin-arm64",
        "windows/amd64": "https://github.com/cosmos/gaia/releases/download/v9.1.0/gaiad-v9.1.0-windows-amd64.exe"
      },
      "genesis": {
        "genesis_url": "https://github.com/cosmos/mainnet/raw/master/genesis/genesis.cosmoshub-4.json.gz"
      },
      "versions": [
        {
          "name": "v9-Lambda",
          "recommended_version": "v9.0.3",
          "compatible_versions": [
            "v9.0.2",
            "v9.0.3"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/cosmos/gaia/releases/download/v9.0.3/gaiad-v9.0.3-linux-amd64",
            "linux/arm64": "https://github.com/cosmos/gaia/releases/download/v9.0.3/gaiad-v9.0.3-linux-arm64",
            "darwin/amd64": "https://github.com/cosmos/gaia/releases/download/v9.0.3/gaiad-v9.0.3-darwin-amd64",
            "darwin/arm64": "https://github.com/cosmos/gaia/releases/download/v9.0.3/gaiad-v9.0.3-darwin-arm64",
            "windows/amd64": "https://github.com/cosmos/gaia/releases/download/v9.0.3/gaiad-v9.0.3-windows-amd64.exe"
          }
        },
        {
          "name": "v9.1.0",
          "recommended_version": "v9.1.0",
          "compatible_versions": [
            "v9.1.0"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/cosmos/gaia/releases/download/v9.1.0/gaiad-v9.1.0-linux-amd64",
            "linux/arm64": "https://github.com/cosmos/gaia/releases/download/v9.1.0/gaiad-v9.1.0-linux-arm64",
            "darwin/amd64": "https://github.com/cosmos/gaia/releases/download/v9.1.0/gaiad-v9.1.0-darwin-amd64",
            "darwin/arm64": "https://github.com/cosmos/gaia/releases/download/v9.1.0/gaiad-v9.1.0-darwin-arm64",
            "windows/amd64": "https://github.com/cosmos/gaia/releases/download/v9.1.0/gaiad-v9.1.0-windows-amd64.exe"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "ba3bacc714817218562f743178228f23678b2873",
          "address": "public-seed-node.cosmoshub.certus.one:26656",
          "provider": "certusone"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:14956",
          "provider": "Polkachu"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:14956",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "57a5297537b9b6ef8b105c08a8ad3f6ac452c423",
          "address": "seeds.goldenratiostaking.net:1618",
          "provider": "Golden Ratio Staking"
        },
        {
          "id": "7aa410eb8f699c366b1f1e2904ba6b0d1cac379b",
          "address": "seeds.whispernode.com:14956",
          "provider": "WhisperNode🤐"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "cosmos-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "e726816f42831689eab9378d5d577f1d06d25716",
          "address": "cosmos-seed-2.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "5d0fa456408f69afbf3882385d1283d90d9eb36d",
          "address": "cosmos-seed.panthea.eu:42656",
          "provider": "Panthea EU"
        },
        {
          "id": "400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc",
          "address": "cosmoshub.rpc.kjnodes.com:11359",
          "provider": "kjnodes"
        },
        {
          "id": "fe21dd474640247888fc7c4dce82da8da08a8bfd",
          "address": "seed-cosmos-hub-01.stakeflow.io:26656",
          "provider": "Genesis Lab"
        }
      ],
      "persistent_peers": [
        {
          "id": "d6318b3bd51a5e2b8ed08f2e520d50289ed32bf1",
          "address": "52.79.43.100:26656"
        },
        {
          "id": "b0e746acb6fbed7a0311fe21cfb2ee94581ca3bc",
          "address": "51.79.21.187:26656"
        },
        {
          "id": "1da54d20c7339713f1d6d28dd2117087dd33d0ca",
          "address": "cosmos-seed.icycro.org:26656",
          "provider": "IcyCRO 🧊"
        },
        {
          "id": "a79cd3dbdd4a296b76d7d6420121ddd7e12b02ca",
          "address": "cosmos-peer.panthea.eu:27656",
          "provider": "Panthea EU"
        },
        {
          "id": "fe21dd474640247888fc7c4dce82da8da08a8bfd",
          "address": "peer-cosmos-hub-01.stakeflow.io:26656",
          "provider": "Genesis Lab"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-cosmoshub.blockapsis.com",
          "provider": "chainapsis"
        },
        {
          "address": "https://cosmos-rpc.quickapi.com:443",
          "provider": "Chainlayer"
        },
        {
          "address": "https://rpc-cosmoshub.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://cosmoshub-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc.cosmoshub.strange.love",
          "provider": "strangelove-ventures"
        },
        {
          "address": "https://rpc-cosmoshub.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://rpc-cosmoshub.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://cosmos-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-cosmoshub-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://rpc.cosmos.interbloc.org",
          "provider": "Interbloc"
        },
        {
          "address": "https://rpc-cosmoshub.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://rpc.cosmos.dragonstake.io",
          "provider": "DragonStake"
        },
        {
          "address": "https://cosmoshub.rpc.stakin-nodes.com",
          "provider": "Stakin"
        },
        {
          "address": "https://cosmos-rpc.icycro.org",
          "provider": "IcyCRO 🧊"
        },
        {
          "address": "https://rpc.cosmos.bh.rocks",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://cosmos-rpc.rockrpc.net",
          "provider": "RockawayX Infra"
        },
        {
          "address": "http://rpc-cosmoshub.freshstaking.com:26657",
          "provider": "FreshSTAKING"
        },
        {
          "address": "https://cosmoshub.rpc.interchain.ivaldilabs.xyz",
          "provider": "ivaldilabs"
        },
        {
          "address": "https://cosmos-rpc.easy2stake.com/",
          "provider": "Easy 2 Stake"
        },
        {
          "address": "https://rpc.cosmos.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://cosmos.rpc.silknodes.io",
          "provider": "Silk Nodes"
        },
        {
          "address": "https://cosmos-rpc.publicnode.com",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "address": "https://cosmoshub.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://rpc-cosmos-hub-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "rest": [
        {
          "address": "https://lcd-cosmoshub.blockapsis.com",
          "provider": "chainapsis"
        },
        {
          "address": "https://cosmos-lcd.quickapi.com:443",
          "provider": "Chainlayer"
        },
        {
          "address": "https://cosmoshub-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://api-cosmoshub.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://api-cosmoshub-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://api.cosmos.interbloc.org",
          "provider": "Interbloc"
        },
        {
          "address": "https://lcd.cosmos.dragonstake.io",
          "provider": "DragonStake"
        },
        {
          "address": "https://cosmoshub.rest.stakin-nodes.com",
          "provider": "Stakin"
        },
        {
          "address": "https://rest-cosmoshub.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://rest-cosmoshub.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://cosmoshub.rest.interchain.ivaldilabs.xyz",
          "provider": "ivaldilabs"
        },
        {
          "address": "https://lcd-cosmoshub.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://cosmos-lcd.easy2stake.com",
          "provider": "Easy 2 Stake"
        },
        {
          "address": "https://api.cosmos.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://cosmos.api.silknodes.io",
          "provider": "Silk Nodes"
        },
        {
          "address": "https://cosmos-rest.publicnode.com",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "address": "https://cosmoshub.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://api-cosmos-hub-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "grpc": [
        {
          "address": "cosmoshub-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "grpc-cosmoshub-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "cosmos-grpc.polkachu.com:14990",
          "provider": "Polkachu"
        },
        {
          "address": "grpc.cosmos.interbloc.org:443",
          "provider": "Interbloc"
        },
        {
          "address": "grpc.cosmos.dragonstake.io:443",
          "provider": "DragonStake"
        },
        {
          "address": "cosmoshub.grpc.stakin-nodes.com:443",
          "provider": "Stakin"
        },
        {
          "address": "cosmoshub.grpc.interchain.ivaldilabs.xyz:443",
          "provider": "ivaldilabs"
        },
        {
          "address": "https://grpc.cosmos.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://cosmos-grpc.publicnode.com",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "address": "cosmoshub.grpc.kjnodes.com:11390",
          "provider": "kjnodes"
        },
        {
          "address": "grpc-cosmos-hub-01.stakeflow.io:9090",
          "provider": "Genesis Lab"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/cosmoshub",
        "tx_page": "https://ezstaking.tools/cosmoshub/txs/${txHash}",
        "account_page": "https://ezstaking.tools/cosmoshub/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/cosmos",
        "tx_page": "https://www.mintscan.io/cosmos/txs/${txHash}",
        "account_page": "https://www.mintscan.io/cosmos/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/cosmos",
        "tx_page": "https://ping.pub/cosmos/tx/${txHash}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/cosmos",
        "tx_page": "https://bigdipper.live/cosmos/transactions/${txHash}",
        "account_page": "https://bigdipper.live/cosmos/accounts/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com",
        "tx_page": "https://atomscan.com/transactions/${txHash}",
        "account_page": "https://atomscan.com/accounts/${accountAddress}"
      },
      {
        "kind": "unichain",
        "url": "https://unicha.in/cosmos",
        "tx_page": "https://unicha.in/cosmos/transaction/${txHash}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/cosmoshub",
        "tx_page": "https://explorer.tcnetwork.io/cosmoshub/transaction/${txHash}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/cosmos",
        "account_page": "https://stakeflow.io/cosmos/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "coreum",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.coreum.com",
    "pretty_name": "Coreum",
    "chain_id": "coreum-mainnet-1",
    "bech32_prefix": "core",
    "daemon_name": "cored",
    "node_home": "$HOME/.core/coreum-mainnet-1",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 990,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ucore",
          "fixed_min_gas_price": 0.03125,
          "low_gas_price": 0.0625,
          "average_gas_price": 0.0625,
          "high_gas_price": 62.5
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ucore"
        }
      ],
      "lock_duration": {
        "time": "168h"
      }
    },
    "codebase": {
      "git_repo": "https://github.com/CoreumFoundation/coreum",
      "recommended_version": "v1.0.0",
      "compatible_versions": [
        "v1.0.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/CoreumFoundation/coreum/releases/download/v1.0.0/cored-linux-amd64?checksum=sha256:34098ad7586bda364b1b2e7c4569cbcefb630cd4ed7c8f68eb5bced834082c57",
        "linux/arm64": "https://github.com/CoreumFoundation/coreum/releases/download/v1.0.0/cored-linux-arm64?checksum=sha256:3ced97f06607f0cdaf77e7ff0b36b2011d101c660684e4f3e54c2ac6bf344dd6"
      },
      "cosmos_sdk_version": "0.45",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "cosmwasm_version": "0.30",
      "cosmwasm_enabled": true,
      "genesis": {
        "name": "v1",
        "genesis_url": "https://raw.githubusercontent.com/CoreumFoundation/coreum/master/genesis/coreum-mainnet-1.json"
      },
      "versions": [
        {
          "name": "v1",
          "tag": "v1.0.0",
          "height": 0,
          "recommended_version": "v1.0.0",
          "compatible_versions": [
            "v1.0.0"
          ],
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.30",
          "cosmwasm_enabled": true,
          "binaries": {
            "linux/amd64": "https://github.com/CoreumFoundation/coreum/releases/download/v1.0.0/cored-linux-amd64?checksum=sha256:34098ad7586bda364b1b2e7c4569cbcefb630cd4ed7c8f68eb5bced834082c57",
            "linux/arm64": "https://github.com/CoreumFoundation/coreum/releases/download/v1.0.0/cored-linux-arm64?checksum=sha256:3ced97f06607f0cdaf77e7ff0b36b2011d101c660684e4f3e54c2ac6bf344dd6"
          }
        }
      ]
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png",
        "theme": {
          "primary_color_hex": "#25d695"
        }
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "0df493af80fbaad41b9b26d6f4520b39ceb1d210",
          "address": "seed-iron.mainnet-1.coreum.dev:26656",
          "provider": "Coreum Foundation"
        },
        {
          "id": "cba16f4f32707d70a2a2d10861fac897f1e9aaa1",
          "address": "seed-nickle.mainnet-1.coreum.dev:26656",
          "provider": "Coreum Foundation"
        },
        {
          "id": "67ecf3e890b2f77b13fc872c8f11f868c283be6e",
          "address": "rpc.coreum.nodexcapital.com:14156",
          "provider": "NodeX Validator"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://full-node.mainnet-1.coreum.dev:26657",
          "provider": "Coreum Foundation"
        },
        {
          "address": "https://full-node-californium.mainnet-1.coreum.dev:26657",
          "provider": "Coreum Foundation"
        },
        {
          "address": "https://full-node-curium.mainnet-1.coreum.dev:26657",
          "provider": "Coreum Foundation"
        },
        {
          "address": "https://full-node-uranium.mainnet-1.coreum.dev:26657",
          "provider": "Coreum Foundation"
        },
        {
          "address": "https://rpc-coreum.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://rpc.coreum.nodexcapital.com",
          "provider": "NodeX Validator"
        },
        {
          "address": "https://coreum.rpc.silknodes.io",
          "provider": "Silk Nodes"
        }
      ],
      "grpc": [
        {
          "address": "https://full-node.mainnet-1.coreum.dev:9090",
          "provider": "Coreum Foundation"
        },
        {
          "address": "https://full-node-californium.mainnet-1.coreum.dev:9090",
          "provider": "Coreum Foundation"
        },
        {
          "address": "https://full-node-curium.mainnet-1.coreum.dev:9090",
          "provider": "Coreum Foundation"
        },
        {
          "address": "https://full-node-uranium.mainnet-1.coreum.dev:9090",
          "provider": "Coreum Foundation"
        },
        {
          "address": "https://grpc.coreum.nodexcapital.com:444",
          "provider": "NodeX Validator"
        }
      ],
      "rest": [
        {
          "address": "https://rest-coreum.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://rest.coreum.nodexcapital.com",
          "provider": "NodeX Validator"
        },
        {
          "address": "https://coreum.api.silknodes.io",
          "provider": "Silk Nodes"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Coreum",
        "url": "https://explorer.coreum.com/coreum",
        "tx_page": "https://explorer.coreum.com/coreum/transactions/${txHash}",
        "account_page": "https://explorer.coreum.com/coreum/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/coreum",
        "tx_page": "https://www.mintscan.io/coreum/txs/${txHash}",
        "account_page": "https://www.mintscan.io/coreum/account/${accountAddress}"
      },
      {
        "kind": "NODEXPLORER",
        "url": "https://explorer.nodexcapital.com/coreum",
        "tx_page": "https://explorer.nodexcapital.com/coreum/txs/${txHash}",
        "account_page": "https://explorer.nodexcapital.com/coreum/account/${accountAddress}"
      },
      {
        "kind": "Silk Nodes",
        "url": "https://explorer.silknodes.io/coreum",
        "tx_page": "https://explorer.silknodes.io/coreum/tx/${txHash}",
        "account_page": "https://explorer.silknodes.io/coreum/account/${accountAddress}"
      }
    ],
    "keywords": [
      "dex",
      "staking",
      "wasm",
      "assets",
      "nft"
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "commercionetwork",
    "chain_id": "commercio-3",
    "pretty_name": "Commercio.network",
    "status": "live",
    "network_type": "mainnet",
    "bech32_prefix": "did:com:",
    "daemon_name": "commercionetworkd",
    "node_home": "$HOME/.commercionetworkd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 701,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ucommercio"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/commercionetwork/commercionetwork",
      "recommended_version": "v4.0.0",
      "compatible_versions": [
        "v4.0.0"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/commercionetwork/chains/master/commercio-3/genesis.json"
      },
      "versions": [
        {
          "name": "v4.0.0",
          "recommended_version": "v4.0.0",
          "compatible_versions": [
            "v4.0.0"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "8d3ac30a774245019f7b94d7a0713fd8caccaa03",
          "address": "seed-01.commercio.network:26656"
        },
        {
          "id": "68ccfc9a1574923e344993d49253d8169f592f9e",
          "address": "seed-02.commercio.network:26656"
        }
      ],
      "persistent_peers": [
        {
          "id": "3f26a7d3269e352574e760d4b08d045aa40ebbf2",
          "address": "persistent-01.commercio.network:26656"
        },
        {
          "id": "15767f4961b501eb67e740aa60c1608bf65679f3",
          "address": "persistent-02.commercio.network:26656"
        },
        {
          "id": "d6e07b5f0a69bd4d6f4e6e931f00fbcb992a8654",
          "address": "persistent-04.commercio.network:26656"
        },
        {
          "id": "542a55fff599ea07e2b4841febff4a78cf8db2aa",
          "address": "persistent-05.commercio.network:26656"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-mainnet.commercio.network"
        }
      ],
      "rest": [
        {
          "address": "https://lcd-mainnet.commercio.network"
        }
      ]
    },
    "explorers": [
      {
        "kind": "almerico",
        "url": "https://mainnet.commercio.network",
        "tx_page": "https://mainnet.commercio.network/transactions/detail/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "comdex",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://comdex.one/",
    "pretty_name": "Comdex",
    "chain_id": "comdex-1",
    "bech32_prefix": "comdex",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ucmdx",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ucmdx"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/comdex-official/comdex",
      "recommended_version": "v10.0.0",
      "compatible_versions": [
        "v10.0.0"
      ],
      "cosmwasm_enabled": true,
      "genesis": {
        "genesis_url": "https://comdex-mainnet-genesis.s3.ap-southeast-1.amazonaws.com/genesis.json"
      },
      "versions": [
        {
          "name": "v9.0.0",
          "recommended_version": "v9.0.0",
          "compatible_versions": [
            "v9.0.0"
          ],
          "cosmwasm_enabled": true,
          "next_version_name": "v10.0.0"
        },
        {
          "name": "v10.0.0",
          "recommended_version": "v10.0.0",
          "compatible_versions": [
            "v10.0.0"
          ],
          "cosmwasm_enabled": true
        }
      ]
    },
    "daemon_name": "comdex",
    "node_home": "$HOME/.comdex",
    "key_algos": [
      "secp256k1"
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "7ca14a1d156299999eba9c394ca060368022d52f",
          "address": "54.194.178.110:26656"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:13156",
          "provider": "Polkachu"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:13156",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "comdex-mainnet-seed.autostake.com:26776",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "6596d143fd128b2394b27cd7846bda099ca5a193",
          "address": "seeds.goldenratiostaking.net:1621",
          "provider": "Golden Ratio Staking"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "comdex-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "e726816f42831689eab9378d5d577f1d06d25716",
          "address": "comdex-seed-2.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "243d93ff2f663860f118fa32e2122fbba7f00a92",
          "address": "seeds.whispernode.com:13156",
          "provider": "WhisperNode🤐"
        },
        {
          "id": "27b6d74c8408e033e2e5a9e966a0d15782e33596",
          "address": "seeds.nethernode.xyz:13156",
          "provider": "carbonZERO🌲"
        }
      ],
      "persistent_peers": [
        {
          "id": "d478882a80674fa10a32da63cc20cae13e3a2a57",
          "address": "43.204.0.243:26656"
        },
        {
          "id": "d8b74791ee56f1b345d822f62bd9bc969668d8df",
          "address": "194.163.128.55:36656"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "comdex-mainnet-peer.autostake.com:26776",
          "provider": "AutoStake 🛡️ Slash Protecteds"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.comdex.one",
          "provider": "comdex"
        },
        {
          "address": "https://comdex-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc.comdex.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://comdex-rpc.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc-comdex.goldenratiostaking.net",
          "provider": "Golden Ratio Staking"
        },
        {
          "address": "https://rpc-comdex.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://rpc-comdex.carbonZERO.zone:443",
          "provider": "carbonZERO🌲"
        },
        {
          "address": "https://comdex-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ],
      "rest": [
        {
          "address": "https://rest.comdex.one",
          "provider": "comdex"
        },
        {
          "address": "https://api.comdex.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://comdex-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://comdex-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://comdex-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://lcd-comdex.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://rest-comdex.carbonZERO.zone:443",
          "provider": "carbonZERO🌲"
        },
        {
          "address": "http://comdex.api.staking-explorer.com",
          "provider": "comdex.staking-explorer.com"
        }
      ],
      "grpc": [
        {
          "address": "grpc-comdex-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "comdex.grpcui.chaintools.host:443",
          "provider": "ChainTools"
        },
        {
          "address": "comdex-grpc.polkachu.com:13190",
          "provider": "Polkachu"
        },
        {
          "address": "comdex-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "comdex-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/comdex",
        "tx_page": "https://ezstaking.tools/comdex/txs/${txHash}",
        "account_page": "https://ezstaking.tools/comdex/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/comdex",
        "tx_page": "https://www.mintscan.io/comdex/txs/${txHash}",
        "account_page": "https://www.mintscan.io/comdex/account/${accountAddress}"
      },
      {
        "kind": "aneka",
        "url": "https://comdex.aneka.io/",
        "tx_page": "https://comdex.aneka.io/txs/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/comdex",
        "tx_page": "https://ping.pub/comdex/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/comdex",
        "tx_page": "https://atomscan.com/comdex/transactions/${txHash}",
        "account_page": "https://atomscan.com/comdex/accounts/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/comdex",
        "tx_page": "https://bigdipper.live/comdex/transactions/${txHash}",
        "account_page": "https://bigdipper.live/comdex/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "chronicnetwork",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Chronic Chain",
    "chain_id": "morocco-1",
    "bech32_prefix": "chronic",
    "daemon_name": "chtd",
    "node_home": "$HOME/.cht",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ucgas",
          "fixed_min_gas_price": 0.001
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/ChronicNetwork/cht",
      "recommended_version": "v1.1.0",
      "compatible_versions": [
        "v1.1.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/ChronicNetwork/cht/releases/download/v.1.1.0/cht"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/ChronicNetwork/net/main/mainnet/v1.1/genesis.json"
      },
      "versions": [
        {
          "name": "v1.1.0",
          "recommended_version": "v1.1.0",
          "compatible_versions": [
            "v1.1.0"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/ChronicNetwork/cht/releases/download/v.1.1.0/cht"
          }
        }
      ]
    },
    "peers": {
      "seeds": [],
      "persistent_peers": []
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-chronic.zenchainlabs.io/",
          "provider": "ZenChainLabs"
        }
      ],
      "rest": [
        {
          "address": "https://api-chronic.zenchainlabs.io/",
          "provider": "ZenChainLabs"
        }
      ],
      "grpc": []
    },
    "explorers": [
      {
        "kind": "skynetexplorers",
        "url": "https://www.skynetexplorers.com/chronic-token",
        "tx_page": ""
      },
      {
        "kind": "Zenscan.io",
        "url": "https://www.chronic.zenscan.io",
        "tx_page": ""
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/chronicnetwork",
        "tx_page": "https://atomscan.com/chronicnetwork/transactions/${txHash}",
        "account_page": "https://atomscan.com/chronicnetwork/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "chimba",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://chimba.ooo/",
    "pretty_name": "Chimba",
    "chain_id": "chimba",
    "bech32_prefix": "chimba",
    "daemon_name": "chimbad",
    "node_home": "$HOME/.chimbad",
    "fees": {
      "fee_tokens": [
        {
          "denom": "ucmba",
          "fixed_min_gas_price": 0.25,
          "low_gas_price": 1,
          "average_gas_price": 5,
          "high_gas_price": 10
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "chimba"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/ChimbaBlockchain/chimba",
      "recommended_version": "v1.0.0",
      "compatible_versions": [
        "v1.0.0"
      ],
      "genesis": {
        "genesis_url": "https://rpc.mainnet.chimbablockchain.io/genesis"
      },
      "versions": [
        {
          "name": "v1.0.0",
          "recommended_version": "v1.0.0",
          "compatible_versions": [
            "v1.0.0"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.svg"
    },
    "peers": {
      "persistent_peers": []
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.mainnet.chimbablockchain.io",
          "provider": "chimba"
        }
      ],
      "rest": [
        {
          "address": "https://mainnet.chimbablockchain.io",
          "provider": "chimba"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://explorer.chimba.ooo/",
        "tx_page": "https://explorer.chimba.ooo/transactions/${txHash}"
      }
    ],
    "slip44": 118
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "chihuahua",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://chihuahua.wtf/",
    "pretty_name": "Chihuahua",
    "chain_id": "chihuahua-1",
    "bech32_prefix": "chihuahua",
    "daemon_name": "chihuahuad",
    "node_home": "$HOME/.chihuahuad",
    "fees": {
      "fee_tokens": [
        {
          "denom": "uhuahua",
          "fixed_min_gas_price": 0,
          "low_gas_price": 1,
          "average_gas_price": 5,
          "high_gas_price": 10
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uhuahua"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/ChihuahuaChain/chihuahua/",
      "recommended_version": "v4.2.1",
      "compatible_versions": [
        "v4.2.1"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/ChihuahuaChain/chihuahua/main/mainnet/genesis.json"
      },
      "cosmwasm_enabled": true,
      "versions": [
        {
          "name": "v4.2.1",
          "recommended_version": "v4.2.1",
          "compatible_versions": [
            "v4.2.1"
          ],
          "cosmwasm_enabled": true
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "babc3f3f7804933265ec9c40ad94f4da8e9e0017",
          "address": "seed.rhinostake.com:12956",
          "provider": "RHINO"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:12956",
          "provider": "Polkachu"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:12956",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "77cbb35d1df17f48a42e9f157f12f55b691e9f5e",
          "address": "seeds.goldenratiostaking.net:1620",
          "provider": "Golden Ratio Staking"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "chihuahua-mainnet-seed.autostake.com:27186",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "chihuahua-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "e726816f42831689eab9378d5d577f1d06d25716",
          "address": "chihuahua-2.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "3c5b1a13f810507b9ef1240372b3cbc9bd90da26",
          "address": "seeds.whispernode.com:12956",
          "provider": "WhisperNode🤐"
        },
        {
          "id": "27b6d74c8408e033e2e5a9e966a0d15782e33596",
          "address": "seeds.nethernode.xyz:12956",
          "provider": "carbonZERO🌲"
        }
      ],
      "persistent_peers": [
        {
          "id": "89b576c3eb72a4f0c66dc0899bec7c21552ea2a5",
          "address": "23.88.7.73:29538",
          "provider": "Mercury"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "chihuahua-mainnet-peer.autostake.com:27186",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.chihuahua.wtf",
          "provider": "Chihuahua"
        },
        {
          "address": "https://rpc-chihuahua.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://chihuahua-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-chihuahua-ia.cosmosia.notional.ventures",
          "provider": "Notional"
        },
        {
          "address": "https://chihuahua-rpc.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc-chihuahua.goldenratiostaking.net",
          "provider": "Golden Ratio Staking"
        },
        {
          "address": "https://rpc.huahua.bh.rocks",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://chihuahua-rpc.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://rpc-chihuahua.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://rpc-chihuahua.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://chihuahua-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ],
      "rest": [
        {
          "address": "https://api.chihuahua.wtf",
          "provider": "Chihuahua"
        },
        {
          "address": "https://rest-chihuahua.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://api-chihuahua-ia.cosmosia.notional.ventures",
          "provider": "Notional"
        },
        {
          "address": "https://chihuahua-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://chihuahua-api.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://api.huahua.bh.rocks",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://chihuahua-api.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://api-chihuahua.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://lcd-chihuahua.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://rest-chihuahua.goldenratiostaking.net",
          "provider": "Golden Ratio Staking"
        },
        {
          "address": "https://chihuahua-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "http://chihuahua.api.staking-explorer.com",
          "provider": "chihuahua.staking-explorer.com"
        }
      ],
      "grpc": [
        {
          "address": "grpc-chihuahua-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "chihuahua-grpc.polkachu.com:12990",
          "provider": "Polkachu"
        },
        {
          "address": "chihuahua-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "chihuahua-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/chihuahua",
        "tx_page": "https://ping.pub/chihuahua/tx/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://mintscan.io/chihuahua",
        "tx_page": "https://mintscan.io/chihuahua/txs/${txHash}",
        "account_page": "https://www.mintscan.io/chihuahua/account/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/chihuahua",
        "tx_page": "https://atomscan.com/chihuahua/transactions/${txHash}",
        "account_page": "https://atomscan.com/chihuahua/accounts/${accountAddress}"
      }
    ],
    "slip44": 118
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "cheqd",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.cheqd.io/",
    "pretty_name": "Cheqd",
    "chain_id": "cheqd-mainnet-1",
    "bech32_prefix": "cheqd",
    "daemon_name": "cheqd-noded",
    "node_home": "$HOME/.cheqdnode",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ncheq",
          "fixed_min_gas_price": 25,
          "low_gas_price": 25,
          "average_gas_price": 50,
          "high_gas_price": 100
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ncheq"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/cheqd/cheqd-node",
      "recommended_version": "v1.4.0",
      "compatible_versions": [
        "v1.2.5",
        "v1.3.0",
        "v1.4.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/cheqd/cheqd-node/releases/download/v1.4.0/cheqd-noded-1.4.0-linux-amd64.tar.gz",
        "linux/arm64": "https://github.com/cheqd/cheqd-node/releases/download/v1.4.0/cheqd-noded-1.4.0-linux-arm64.tar.gz",
        "darwin/amd64": "https://github.com/cheqd/cheqd-node/releases/download/v1.4.0/cheqd-noded-1.4.0-darwin-amd64.tar.gz",
        "darwin/arm64": "https://github.com/cheqd/cheqd-node/releases/download/v1.4.0/cheqd-noded-1.4.0-darwin-arm64.tar.gz"
      },
      "cosmos_sdk_version": "0.46.10",
      "consensus": {
        "type": "tendermint",
        "version": "0.34.26"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/cheqd/cheqd-node/main/networks/mainnet/genesis.json"
      },
      "versions": [
        {
          "name": "v1.4.0",
          "recommended_version": "v1.4.0",
          "compatible_versions": [
            "v1.2.5",
            "v1.3.0",
            "v1.4.0"
          ],
          "cosmos_sdk_version": "0.46.10",
          "consensus": {
            "type": "tendermint",
            "version": "0.34.26"
          },
          "binaries": {
            "linux/amd64": "https://github.com/cheqd/cheqd-node/releases/download/v1.4.0/cheqd-noded-1.4.0-linux-amd64.tar.gz",
            "linux/arm64": "https://github.com/cheqd/cheqd-node/releases/download/v1.4.0/cheqd-noded-1.4.0-linux-arm64.tar.gz",
            "darwin/amd64": "https://github.com/cheqd/cheqd-node/releases/download/v1.4.0/cheqd-noded-1.4.0-darwin-amd64.tar.gz",
            "darwin/arm64": "https://github.com/cheqd/cheqd-node/releases/download/v1.4.0/cheqd-noded-1.4.0-darwin-arm64.tar.gz"
          }
        }
      ]
    },
    "peers": {
      "seeds": [
        {
          "id": "258a9bfb822637bfca87daaab6181c10e7fd0910",
          "address": "seed1.eu.cheqd.net:26656",
          "provider": "cheqd"
        },
        {
          "id": "f565ff792b20977face9817df6acb268d41d4092",
          "address": "seed2.eu.cheqd.net:26656",
          "provider": "cheqd"
        },
        {
          "id": "388947cc7d901c5c06fedc4c26751634564d68e6",
          "address": "seed3.eu.cheqd.net:26656",
          "provider": "cheqd"
        },
        {
          "id": "9b30307a2a2819790d68c04bb62f5cf4028f447e",
          "address": "seed1.ap.cheqd.net:26656",
          "provider": "cheqd"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:16156",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "d8676573a3718c05d3d0d07906f3604a9e3a034d",
          "address": "seeds.whispernode.com:16156",
          "provider": "WhisperNode🤐"
        }
      ],
      "persistent_peers": [
        {
          "id": "d1ebb60825e2c29181b499f93493dd440fb87997",
          "address": "sentry1.eu.cheqd.net:26656",
          "provider": "cheqd"
        },
        {
          "id": "513d334bb044296796939e57b522fef7fd4b9c6c",
          "address": "sentry2.eu.cheqd.net:26656",
          "provider": "cheqd"
        },
        {
          "id": "9201b408d24941fd342e739f0814aa3eb8ab7577",
          "address": "sentry1.ap.cheqd.net:26656",
          "provider": "cheqd"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.cheqd.net",
          "provider": "cheqd"
        },
        {
          "address": "https://cheqd-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes"
        },
        {
          "address": "https://rpc-cheqd-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://rpc.cheqd.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://rpc-cheqd.whispernode.com:443",
          "provider": "WhisperNode🤐"
        }
      ],
      "rest": [
        {
          "address": "https://api.cheqd.net",
          "provider": "cheqd"
        },
        {
          "address": "https://cheqd-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes"
        },
        {
          "address": "https://api-cheqd-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://api.cheqd.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://lcd-cheqd.whispernode.com:443",
          "provider": "WhisperNode🤐"
        }
      ],
      "grpc": [
        {
          "address": "grpc.cheqd.net:443",
          "provider": "cheqd"
        },
        {
          "address": "cheqd-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "grpc-cheqd-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "grpc.cheqd.nodestake.top:443",
          "provider": "NodeStake"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/cheqd",
        "tx_page": "https://bigdipper.live/cheqd/transactions/${txHash}",
        "account_page": "https://bigdipper.live/cheqd/accounts/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/cheqd",
        "tx_page": "https://ping.pub/cheqd/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/cheqd",
        "tx_page": "https://atomscan.com/cheqd/transactions/${txHash}",
        "account_page": "https://atomscan.com/cheqd/accounts/${accountAddress}"
      },
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/cheqd",
        "tx_page": "https://ezstaking.tools/cheqd/txs/${txHash}",
        "account_page": "https://ezstaking.tools/cheqd/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://look.chillvalidation.com/cheqd",
        "tx_page": "https://look.chillvalidation.com/cheqd/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.wildsage.io/cheqd",
        "tx_page": "https://ping.wildsage.io/cheqd/tx/${txHash}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg"
    }
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "chain4energy",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://c4e.io/",
    "pretty_name": "Chain4Energy",
    "chain_id": "perun-1",
    "bech32_prefix": "c4e",
    "daemon_name": "c4ed",
    "node_home": "$HOME/.c4e-chain",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 4444,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uc4e",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/chain4energy/c4e-chain",
      "recommended_version": "v1.0.0",
      "compatible_versions": [
        "v1.0.0"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/chain4energy/c4e-chains/main/perun-1/genesis.json"
      },
      "versions": [
        {
          "name": "v1.0.0",
          "recommended_version": "v1.0.0",
          "compatible_versions": [
            "v1.0.0"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chain4energy/images/c4e.png"
    },
    "peers": {
      "seeds": [
        {
          "id": "30e98bbcf5bb29ed4e4ff685fa8fa84fa0ddff51",
          "address": "tenderseed.ccvalidators.com:26008",
          "provider": "CryptoCrew"
        },
        {
          "id": "86bd5cb6e762f673f1706e5889e039d5406b4b90",
          "address": "c4e.seed.node75.org:10156",
          "provider": "Pro-nodes75"
        },
        {
          "id": "54ca81dd509cc6160de7f4b479a96b341d8e830e",
          "address": "rpc.c4e.nodexcapital.com:13956",
          "provider": "NodeX Validator"
        },
        {
          "id": "8bbb3290fb691e52e9b304344a9dac5d0b9eff71",
          "address": "rpc.c4e.hexnodes.co:09656",
          "provider": "Hexnodes"
        },
        {
          "id": "9aa8a73ea9364aa3cf7806d4dd25b6aed88d8152",
          "address": "c4e.seed.mzonder.com:11256",
          "provider": "MZONDER"
        },
        {
          "id": "a85a651a3cf1746694560c5b6f76d566c04ca581",
          "address": "c4e-seed.takeshi.team:10256",
          "provider": "TAKESHI"
        },
        {
          "id": "8cb175d973c3c638a4e5d014c030d8599369419f",
          "address": "seeds.cros-nest.com:28656",
          "provider": "Crosnest"
        }
      ],
      "persistent_peers": [
        {
          "id": "5b62ff6035d9c8143c0ebf4fe05fa0b22d96bb05",
          "address": "rpc.c4e.ppnv.space:13656",
          "provider": "PPNV Service"
        },
        {
          "id": "a5133743ec9e0edffd83428af65004926352e393",
          "address": "c4e-peer.nodine.id:13656",
          "provider": "Nodine.ID"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.c4e.io/",
          "provider": "C4E"
        },
        {
          "address": "https://rpc.c4e.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://m-c4e.rpc.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://rpc-c4e.d-stake.xyz",
          "provider": "D-Stake"
        },
        {
          "address": "https://c4e.rpc.bccnodes.com",
          "provider": "BccNodes"
        },
        {
          "address": "https://rpc-c4e.nodine.id",
          "provider": "Nodine.ID"
        },
        {
          "address": "https://rpc.c4e.hexnodes.co",
          "provider": "Hexnodes"
        },
        {
          "address": "https://rpc-c4e.takeshi.team",
          "provider": "TAKESHI"
        },
        {
          "address": "https://rpc-c4e.mzonder.com",
          "provider": "MZONDER"
        },
        {
          "address": "https://rpc.cros-nest.com/chain4energy",
          "provider": "Crosnest"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.c4e.io/",
          "provider": "C4E"
        },
        {
          "address": "https://api.c4e.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://m-c4e.api.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://c4e.api.bccnodes.com",
          "provider": "BccNodes"
        },
        {
          "address": "https://lcd.c4e.hexnodes.co",
          "provider": "Hexnodes"
        },
        {
          "address": "https://api-c4e.takeshi.team",
          "provider": "TAKESHI"
        },
        {
          "address": "https://api-c4e.mzonder.com",
          "provider": "MZONDER"
        },
        {
          "address": "https://rest.cros-nest.com/chain4energy",
          "provider": "Crosnest"
        }
      ],
      "grpc": [
        {
          "address": "grpc.c4e.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "grpc-c4e.takeshi.team:443",
          "provider": "TAKESHI"
        },
        {
          "address": "grpc-c4e.mzonder.com:443",
          "provider": "MZONDER"
        }
      ]
    },
    "explorers": [
      {
        "kind": "explorer",
        "url": "https://explorer.ppnv.space/c4e",
        "tx_page": "https://explorer.ppnv.space/c4e/transactions/${txHash}"
      },
      {
        "kind": "explorer",
        "url": "https://explorer.c4e.io/",
        "tx_page": "https://explorer.c4e.io/transactions/${txHash}"
      },
      {
        "kind": "NodeStake Explorer",
        "url": "https://explorer.nodestake.top/chain4energy",
        "tx_page": "https://explorer.nodestake.top/chain4energy/transactions/${txHash}"
      },
      {
        "kind": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀 Explorer",
        "url": "https://exp.utsa.tech/c4e",
        "tx_page": "https://exp.utsa.tech/c4e/tx/${txHash}"
      },
      {
        "kind": "BccNodes Explorer",
        "url": "https://explorer.bccnodes.com/chain4energy",
        "tx_page": "https://explorer.bccnodes.com/chain4energy/transactions/${txHash}"
      },
      {
        "kind": "NODEXPLORER",
        "url": "https://explorer.nodexcapital.com/c4e",
        "tx_page": "https://explorer.nodexcapital.com/c4e/transactions/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/chain4energy",
        "tx_page": "https://atomscan.com/chain4energy/transactions/${txHash}",
        "account_page": "https://atomscan.com/chain4energy/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "cerberus",
    "status": "killed",
    "network_type": "mainnet",
    "website": "https://cerberus.zone/",
    "pretty_name": "Cerberus",
    "chain_id": "cerberus-chain-1",
    "bech32_prefix": "cerberus",
    "daemon_name": "cerberusd",
    "node_home": "$HOME/.cerberus",
    "codebase": {
      "git_repo": "https://github.com/cerberus-zone/cerberus",
      "recommended_version": "v3.1.0",
      "compatible_versions": [
        "v3.1.0"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/cerberus-zone/cerberus_genesis/main/genesis.json"
      },
      "versions": [
        {
          "name": "v3.1.0",
          "recommended_version": "v3.1.0",
          "compatible_versions": [
            "v3.1.0"
          ]
        }
      ]
    },
    "fees": {
      "fee_tokens": [
        {
          "denom": "ucrbrus",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ucrbrus"
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:13856",
          "provider": "Polkachu"
        }
      ],
      "persistent_peers": [
        {
          "id": "d7f578c4295c7cf05164a2f786601050bf2f2356",
          "address": "142.132.202.98:46656",
          "provider": "ecostake"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://cerberus-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://cerberus-rpc.kleomedes.network",
          "provider": "Kleomedes"
        }
      ],
      "rest": [
        {
          "address": "https://cerberus-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://cerberus-api.kleomedes.network",
          "provider": "Kleomedes"
        }
      ],
      "grpc": [
        {
          "address": "grpc-cerberus-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "cerberus-grpc.polkachu.com:13890",
          "provider": "Polkachu"
        }
      ]
    },
    "explorers": [
      {
        "kind": "skynetexplorers",
        "url": "https://skynetexplorers.com/cerberus",
        "tx_page": "https://skynetexplorers.com/cerberus/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/cerberus",
        "tx_page": "https://ping.pub/cerberus/tx/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/cerberus",
        "tx_page": "https://www.mintscan.io/cerberus/txs/${txHash}",
        "account_page": "https://www.mintscan.io/cerberus/account/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/cerberus",
        "tx_page": "https://atomscan.com/cerberus/transactions/${txHash}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/cerberus",
        "tx_page": "https://explorer.tcnetwork.io/cerberus/transaction/${txHash}"
      }
    ],
    "slip44": 118
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "carbon",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Carbon",
    "chain_id": "carbon-1",
    "bech32_prefix": "swth",
    "daemon_name": "carbond",
    "website": "https://www.switcheo.com/",
    "node_home": "$HOME/.carbon",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "swth",
          "fixed_min_gas_price": 0,
          "low_gas_price": 1,
          "average_gas_price": 1,
          "high_gas_price": 1,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "usc",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.0001,
          "average_gas_price": 0.0001,
          "high_gas_price": 0.0001,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "bnb.1.6.773edb",
          "fixed_min_gas_price": 0,
          "low_gas_price": 1000000,
          "average_gas_price": 1000000,
          "high_gas_price": 1000000,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "bneo.1.14.e2e5f6",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.0015,
          "average_gas_price": 0.0015,
          "high_gas_price": 0.0015,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "busd.1.6.754a80",
          "fixed_min_gas_price": 0,
          "low_gas_price": 100000000,
          "average_gas_price": 100000000,
          "high_gas_price": 100000000,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "cglp.1.19.1698d3",
          "fixed_min_gas_price": 0,
          "low_gas_price": 100000000,
          "average_gas_price": 100000000,
          "high_gas_price": 100000000,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "cgt/1",
          "fixed_min_gas_price": 0,
          "low_gas_price": 100000000,
          "average_gas_price": 100000000,
          "high_gas_price": 100000000,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "eth.1.19.c3b805",
          "fixed_min_gas_price": 0,
          "low_gas_price": 100000,
          "average_gas_price": 100000,
          "high_gas_price": 100000,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "eth.1.2.942d87",
          "fixed_min_gas_price": 0,
          "low_gas_price": 100000,
          "average_gas_price": 100000,
          "high_gas_price": 100000,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "ibc/07FA7831E1920D0C87C9388F86B0108677F6ED0C9DE7E4063F05ED675192405C",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.0035,
          "average_gas_price": 0.0035,
          "high_gas_price": 0.0035,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "ibc/2B58B8C147E8718EECCB3713271DF46DEE8A3A00A27242628604E31C2F370EF5",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.00005,
          "average_gas_price": 0.00005,
          "high_gas_price": 0.00005,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "ibc/3552CECB7BCE1891DB6070D37EC6E954C972B1400141308FCD85FD148BD06DE5",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.00032,
          "average_gas_price": 0.00032,
          "high_gas_price": 0.00032,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "ibc/662914D0C1CEBCB070C68F061D035E8B10A07C79AB286E7342C85F3BE74612C5",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.00015,
          "average_gas_price": 0.00015,
          "high_gas_price": 0.00015,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "ibc/75249A18DEFBEFE55F83B1C70CAD234DF164F174C6BC51682EE92C2C81C18C93",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.00015,
          "average_gas_price": 0.00015,
          "high_gas_price": 0.00015,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "ibc/92E974290AF9E2BC3AEEEC35305C8FD76AC5A22A74CF8D91270FDF5A1C41E861",
          "fixed_min_gas_price": 0,
          "low_gas_price": 200000000,
          "average_gas_price": 200000000,
          "high_gas_price": 200000000,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.00001,
          "average_gas_price": 0.00001,
          "high_gas_price": 0.00001,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "ibc/B7864B03E1B9FD4F049243E92ABD691586F682137037A9F3FCA5222815620B3C",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.00001,
          "average_gas_price": 0.00001,
          "high_gas_price": 0.00001,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.00015,
          "average_gas_price": 0.00015,
          "high_gas_price": 0.00015,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "usdc.1.2.343151",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.0001,
          "average_gas_price": 0.0001,
          "high_gas_price": 0.0001,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "usdc.1.6.53ff75",
          "fixed_min_gas_price": 0,
          "low_gas_price": 100000000,
          "average_gas_price": 100000000,
          "high_gas_price": 100000000,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "swth"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/Switcheo/carbon-bootstrap",
      "recommended_version": "v2.25.0",
      "compatible_versions": [
        "v2.25.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.25.0/carbond2.25.0-mainnet.linux-amd64.tar.gz",
        "linux/arm64": "https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.25.0/carbond2.25.0-mainnet.linux-arm64.tar.gz"
      },
      "genesis": {
        "genesis_url": "https://github.com/Switcheo/carbon-bootstrap/raw/master/carbon-1/genesis.json"
      },
      "versions": [
        {
          "name": "v2.24.0",
          "recommended_version": "v2.24.5",
          "compatible_versions": [
            "v2.24.5",
            "v2.24.4",
            "v2.24.3",
            "v2.24.2",
            "v2.24.1",
            "v2.24.0"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.24.5/carbond2.24.5-mainnet.linux-amd64.tar.gz",
            "linux/arm64": "https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.24.5/carbond2.24.5-mainnet.linux-arm64.tar.gz"
          },
          "next_version_name": "v2.25.0"
        },
        {
          "name": "v2.25.0",
          "height": 40405361,
          "recommended_version": "v2.25.0",
          "compatible_versions": [
            "v2.25.0"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.25.0/carbond2.25.0-mainnet.linux-amd64.tar.gz",
            "linux/arm64": "https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.25.0/carbond2.25.0-mainnet.linux-arm64.tar.gz"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "d93ed6a1f43dd0904dc5e2ab8680d4049b057b17",
          "address": "13.215.17.91:26656",
          "provider": "switcheo-labs"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:19656",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "70581c625fc1933bc273ca7a8d5e9ded3d1bcc97",
          "address": "13.213.113.113:26656",
          "provider": "switcheo-labs"
        },
        {
          "id": "e3f02a9f3ca22724b3a67bba9183113645c9c7d9",
          "address": "54.179.11.177:26656",
          "provider": "switcheo-labs"
        }
      ],
      "persistent_peers": []
    },
    "apis": {
      "rpc": [
        {
          "address": "https://tm-api.carbon.network",
          "provider": "switcheo-labs"
        },
        {
          "address": "https://carbon-rpc.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc.carbon.blockhunters.org",
          "provider": "BlockHunters"
        }
      ],
      "rest": [
        {
          "address": "https://api.carbon.network",
          "provider": "switcheo-labs"
        },
        {
          "address": "https://carbon-api.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rest.carbon.blockhunters.org",
          "provider": "BlockHunters"
        }
      ],
      "grpc": [
        {
          "address": "https://carbon-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ]
    },
    "explorers": [
      {
        "kind": "carbonscan",
        "url": "https://scan.carbon.network",
        "tx_page": "https://scan.carbon.network/transaction/${txHash}?net=main"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/carbon",
        "tx_page": "https://ping.pub/carbon/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/carbon",
        "tx_page": "https://atomscan.com/carbon/transactions/${txHash}",
        "account_page": "https://atomscan.com/carbon/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "canto",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://canto.io/",
    "pretty_name": "Canto",
    "chain_id": "canto_7700-1",
    "bech32_prefix": "canto",
    "node_home": "$HOME/.cantod",
    "daemon_name": "cantod",
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "acanto",
          "fixed_min_gas_price": 1000000000000,
          "low_gas_price": 1000000000000,
          "average_gas_price": 2000000000000,
          "high_gas_price": 3000000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "acanto"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/Canto-Network/Canto",
      "recommended_version": "v5.0.0",
      "compatible_versions": [
        "v5.0.0"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/Canto-Network/Canto/genesis/Networks/Mainnet/genesis.json"
      },
      "versions": [
        {
          "name": "v5.0.0",
          "recommended_version": "v5.0.0",
          "compatible_versions": [
            "v5.0.0"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:15556",
          "provider": "Polkachu"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "canto-mainnet-seed.autostake.com:27156",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "27b6d74c8408e033e2e5a9e966a0d15782e33596",
          "address": "seeds.nethernode.xyz:15556",
          "provider": "carbonZERO🌲"
        }
      ],
      "persistent_peers": [
        {
          "id": "9361d2cfb283da656b14eaf27e64d96cb86706f0",
          "address": "167.71.170.71:26656",
          "provider": "Plex"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "canto-mainnet-peer.autostake.com:27156",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.canto.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://canto-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc.canto.silentvalidator.com/",
          "provider": "silent"
        },
        {
          "address": "https://canto.gravitychain.io:26657",
          "provider": "Althea"
        },
        {
          "address": "https://canto-rpc.lgns.net:443",
          "provider": "Luganodes"
        },
        {
          "address": "https://rpc-canto.carbonZERO.zone:443",
          "provider": "carbonZERO🌲"
        },
        {
          "address": "https://canto-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ],
      "rest": [
        {
          "address": "https://api.canto.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://canto-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://api.canto.silentvalidator.com/",
          "provider": "silent"
        },
        {
          "address": "https://canto-rest.lgns.net:443",
          "provider": "Luganodes"
        },
        {
          "address": "https://rest-canto.carbonZERO.zone:443",
          "provider": "carbonZERO🌲"
        },
        {
          "address": "https://canto-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ],
      "grpc": [
        {
          "address": "canto-grpc.polkachu.com:15590",
          "provider": "Polkachu"
        },
        {
          "address": "grpc.canto.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "https://grpc.canto.silentvalidator.com/",
          "provider": "silent"
        },
        {
          "address": "https://canto.gravitychain.io:9090",
          "provider": "Althea"
        },
        {
          "address": "canto-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://canto.neobase.one/",
          "provider": "NeoBase"
        },
        {
          "address": "https://canto.evm.chandrastation.com",
          "provider": "Chandra Station"
        },
        {
          "address": "https://canto.slingshot.finance",
          "provider": "Slingshot"
        },
        {
          "address": "https://jsonrpc.canto.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://evm-rpc.canto.silentvalidator.com/",
          "provider": "silent"
        },
        {
          "address": "https://canto.gravitychain.io:8545",
          "provider": "althea"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://cosmos.explorer.canto.io",
        "tx_page": "https://cosmos.explorer.canto.io/transactions/${txHash}"
      },
      {
        "kind": "blockscout",
        "url": "https://evm.explorer.canto.io/",
        "tx_page": "https://evm.explorer.canto.io/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://cosmos-explorers.neobase.one/canto",
        "tx_page": "https://cosmos-explorers.neobase.one/canto/tx/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/canto",
        "tx_page": "https://www.mintscan.io/canto/txs/${txHash}",
        "account_page": "https://www.mintscan.io/canto/account/${accountAddress}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/canto",
        "tx_page": "https://explorer.tcnetwork.io/canto/transaction/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "bostrom",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "bostrom",
    "chain_id": "bostrom",
    "bech32_prefix": "bostrom",
    "daemon_name": "cyber",
    "node_home": "$HOME/.cyber",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "boot",
          "low_gas_price": 0,
          "average_gas_price": 0,
          "high_gas_price": 0.01
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "boot"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/cybercongress/go-cyber",
      "recommended_version": "v0.3.0",
      "compatible_versions": [
        "v0.3.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/cybercongress/go-cyber/releases/download/v0.2.0/cyber_v0.2.0_linux-amd64.tar.gz",
        "darwin/amd64": "https://github.com/cybercongress/go-cyber/releases/download/v0.2.0/cyber_v0.2.0_darwin-amd64.tar.gz"
      },
      "genesis": {
        "genesis_url": "https://cloudflare-ipfs.com/ipfs/QmYubyVNfghD4xCrTFj26zBwrF9s5GJhi1TmxvrwmJCipr"
      },
      "cosmwasm_enabled": true,
      "versions": [
        {
          "name": "v0.3.0",
          "recommended_version": "v0.3.0",
          "compatible_versions": [
            "v0.3.0"
          ],
          "cosmwasm_enabled": true,
          "binaries": {
            "linux/amd64": "https://github.com/cybercongress/go-cyber/releases/download/v0.2.0/cyber_v0.2.0_linux-amd64.tar.gz",
            "darwin/amd64": "https://github.com/cybercongress/go-cyber/releases/download/v0.2.0/cyber_v0.2.0_darwin-amd64.tar.gz"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "d0518ce9881a4b0c5872e5e9b7c4ea8d760dad3f",
          "address": "85.10.207.173:26656",
          "provider": "cybercongress"
        }
      ],
      "persistent_peers": []
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.bostrom.cybernode.ai",
          "provider": "cybercongress"
        },
        {
          "address": "https://rpc.cyber.posthuman.digital",
          "provider": "posthuman"
        },
        {
          "address": "https://rpc-cyber-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.bostrom.cybernode.ai",
          "provider": "cybercongress"
        },
        {
          "address": "https://lcd.cyber.posthuman.digital",
          "provider": "posthuman"
        },
        {
          "address": "https://api-cyber-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        }
      ],
      "grpc": [
        {
          "address": "grpc-cyber-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        }
      ]
    },
    "explorers": [
      {
        "kind": "cyb",
        "url": "https://cyb.ai/",
        "tx_page": "https://cyb.ai/network/bostrom/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/bostrom",
        "tx_page": "https://ping.pub/bostrom/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/bostrom",
        "tx_page": "https://atomscan.com/bostrom/transactions/${txHash}",
        "account_page": "https://atomscan.com/bostrom/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "bluzelle",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://bluzelle.com/",
    "pretty_name": "Bluzelle",
    "chain_id": "bluzelle-9",
    "bech32_prefix": "bluzelle",
    "daemon_name": "curiumd",
    "node_home": "$HOME/.curium",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 483,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ubnt",
          "fixed_min_gas_price": 0.002,
          "low_gas_price": 0.002,
          "average_gas_price": 0.002,
          "high_gas_price": 0.025
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ubnt"
        }
      ],
      "lock_duration": {
        "time": "1814400s"
      }
    },
    "codebase": {
      "git_repo": "https://github.com/bluzelle/bluzelle-public",
      "recommended_version": "v9.0",
      "compatible_versions": [
        "v9.0"
      ],
      "cosmos_sdk_version": "0.45.11",
      "consensus": {
        "type": "tendermint",
        "version": "0.34.23"
      },
      "genesis": {
        "genesis_url": "https://a.client.sentry.net.bluzelle.com:26657/genesis"
      },
      "versions": [
        {
          "name": "v2.0",
          "recommended_version": "v2.0",
          "compatible_versions": [
            "v2.0"
          ],
          "cosmos_sdk_version": "0.44.3",
          "consensus": {
            "type": "tendermint",
            "version": "0.34.14"
          }
        },
        {
          "name": "v9.0",
          "recommended_version": "v9.0",
          "compatible_versions": [
            "v9.0"
          ],
          "cosmos_sdk_version": "0.45.11",
          "consensus": {
            "type": "tendermint",
            "version": "0.34.23"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg"
    },
    "peers": {
      "persistent_peers": [
        {
          "id": "58fb5ba6e285a4b785c597f9ed480ced7bd06329",
          "address": "a.gateway.sentry.net.bluzelle.com:26656",
          "provider": "Bluzelle"
        },
        {
          "id": "ea7e48103d33356aa576b3d60cfabc250a7c2998",
          "address": "b.gateway.sentry.net.bluzelle.com:26656",
          "provider": "Bluzelle"
        },
        {
          "id": "70b5e2af27c5591967d7f1fea965b8627dd656e8",
          "address": "c.gateway.sentry.net.bluzelle.com:26656",
          "provider": "Bluzelle"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://a.client.sentry.net.bluzelle.com:26657",
          "provider": "Bluzelle"
        },
        {
          "address": "https://b.client.sentry.net.bluzelle.com:26657",
          "provider": "Bluzelle"
        },
        {
          "address": "https://c.client.sentry.net.bluzelle.com:26657",
          "provider": "Bluzelle"
        },
        {
          "address": "https://bluzelle-rpc.genznodes.dev",
          "provider": "genznodes"
        },
        {
          "address": "https://rpc-curium.nodine.id",
          "provider": "Nodine.ID"
        }
      ],
      "rest": [
        {
          "address": "https://a.client.sentry.net.bluzelle.com:1317",
          "provider": "Bluzelle"
        },
        {
          "address": "https://b.client.sentry.net.bluzelle.com:1317",
          "provider": "Bluzelle"
        },
        {
          "address": "https://c.client.sentry.net.bluzelle.com:1317",
          "provider": "Bluzelle"
        },
        {
          "address": "https://bluzelle-api.genznodes.dev/",
          "provider": "genznodes"
        },
        {
          "address": "https://api-bluzelle.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "https://api-curium.nodine.id",
          "provider": "Nodine.ID"
        }
      ],
      "grpc": [
        {
          "address": "a.client.sentry.net.bluzelle.com:9090",
          "provider": "Bluzelle"
        },
        {
          "address": "b.client.sentry.net.bluzelle.com:9090",
          "provider": "Bluzelle"
        },
        {
          "address": "c.client.sentry.net.bluzelle.com:9090",
          "provider": "Bluzelle"
        },
        {
          "address": "bluzelle-grpc.genznodes.dev:29090",
          "provider": "genznodes"
        },
        {
          "address": "https://grpc-curium.nodine.id:443",
          "provider": "Nodine.ID"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.explorer.net.bluzelle.com/bluzelle",
        "tx_page": "https://ping.explorer.net.bluzelle.com/bluzelle/tx/${txHash}",
        "account_page": "https://ping.explorer.net.bluzelle.com/bluzelle/account/${accountAddress}"
      },
      {
        "kind": "big dipper",
        "url": "https://bd.explorer.net.bluzelle.com",
        "tx_page": "https://bd.explorer.net.bluzelle.com/transactions/${txHash}",
        "account_page": "https://bd.explorer.net.bluzelle.com/accounts/${accountAddress}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/bluzelle",
        "tx_page": "https://explorer.tcnetwork.io/bluzelle/transaction/${txHash}"
      },
      {
        "kind": "Nodine.ID",
        "url": "https://explorer.co.id/bluzelle",
        "tx_page": "https://explorer.co.id/bluzelle/transaction/${txHash}"
      }
    ],
    "keywords": [
      "bluzelle",
      "game",
      "gamma4",
      "nft"
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "bitsong",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://bitsong.io/",
    "pretty_name": "BitSong",
    "chain_id": "bitsong-2b",
    "bech32_prefix": "bitsong",
    "slip44": 639,
    "daemon_name": "bitsongd",
    "node_home": "$HOME/.bitsongd",
    "codebase": {
      "git_repo": "https://github.com/bitsongofficial/go-bitsong",
      "recommended_version": "v0.14.0",
      "compatible_versions": [
        "v0.14.0"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/bitsongofficial/networks/master/bitsong-2b/genesis.json"
      },
      "versions": [
        {
          "name": "v0.14.0",
          "recommended_version": "v0.14.0",
          "compatible_versions": [
            "v0.14.0"
          ]
        }
      ]
    },
    "fees": {
      "fee_tokens": [
        {
          "denom": "ubtsg",
          "fixed_min_gas_price": 0,
          "low_gas_price": 3,
          "average_gas_price": 10,
          "high_gas_price": 20
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ubtsg"
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:16056",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "10de6c207e60b876bdd88571db44d29c18d0cb5d",
          "address": "seed-bitsong.starsquid.io:15605",
          "provider": "Starsquid"
        },
        {
          "id": "8defec7d0eec97f507411e02fd2634e3efc997a2",
          "address": "bitsong-seed.panthea.eu:41656",
          "provider": "Panthea EU"
        }
      ],
      "persistent_peers": [
        {
          "id": "e9fea0509b1a2d16a10ef9fdea0a4e3edc7ca485",
          "address": "185.144.83.158:26656"
        },
        {
          "id": "2cd6bb75fc9279c62c0ef3af82fbe08632743472",
          "address": "bitsong-peer.panthea.eu:31656",
          "provider": "Panthea EU"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-bitsong.itastakers.com",
          "provider": "itastakers"
        },
        {
          "address": "https://rpc.bitsong.interbloc.org",
          "provider": "interbloc"
        },
        {
          "address": "https://rpc-bitsong-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://rpc.explorebitsong.com",
          "provider": "stake.systems"
        },
        {
          "address": "https://bitsong-rpc.validatrium.club",
          "provider": "Validatrium"
        },
        {
          "address": "https://bitsong-archive.validatrium.club",
          "provider": "Validatrium",
          "archive": true
        },
        {
          "address": "https://rpc.bitsong.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://rpc.bitsong.quokkastake.io",
          "provider": "🐹 Quokka Stake"
        },
        {
          "address": "https://bitsong-rpc.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc-bitsong.starsquid.io",
          "provider": "Starsquid"
        },
        {
          "address": "https://rpc-bitsong.architectnodes.com",
          "provider": "Architect Nodes"
        }
      ],
      "rest": [
        {
          "address": "https://lcd-bitsong.itastakers.com",
          "provider": "itastakers"
        },
        {
          "address": "https://api.bitsong.interbloc.org",
          "provider": "interbloc"
        },
        {
          "address": "https://api-bitsong-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://lcd.explorebitsong.com/",
          "provider": "stake.systems"
        },
        {
          "address": "https://bitsong-api.validatrium.club",
          "provider": "Validatrium"
        },
        {
          "address": "https://api.bitsong.quokkastake.io",
          "provider": "🐹 Quokka Stake"
        },
        {
          "address": "https://bitsong-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://api-bitsong.starsquid.io",
          "provider": "Starsquid"
        },
        {
          "address": "https://rest-bitsong.architectnodes.com",
          "provider": "Architect Nodes"
        }
      ],
      "grpc": [
        {
          "address": "grpc-bitsong-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "bitsong-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/bitsong",
        "tx_page": "https://ezstaking.tools/bitsong/txs/${txHash}",
        "account_page": "https://ezstaking.tools/bitsong/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/bitsong",
        "tx_page": "https://ping.pub/bitsong/tx/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/bitsong",
        "tx_page": "https://www.mintscan.io/bitsong/txs/${txHash}",
        "account_page": "https://www.mintscan.io/bitsong/account/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/bitsong",
        "tx_page": "https://bigdipper.live/bitsong/transactions/${txHash}",
        "account_page": "https://bigdipper.live/bitsong/accounts/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/bitsong",
        "tx_page": "https://atomscan.com/bitsong/transactions/${txHash}",
        "account_page": "https://atomscan.com/bitsong/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "bitcanna",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.bitcanna.io/",
    "pretty_name": "BitCanna",
    "chain_id": "bitcanna-1",
    "bech32_prefix": "bcna",
    "daemon_name": "bcnad",
    "node_home": "$HOME/.bcna",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ubcna",
          "fixed_min_gas_price": 0.001,
          "low_gas_price": 0.001,
          "average_gas_price": 0.0025,
          "high_gas_price": 0.01
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ubcna"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/BitCannaGlobal/bcna",
      "recommended_version": "v1.6.3",
      "compatible_versions": [
        "v1.6.1",
        "v1.6.2",
        "v1.6.3"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/BitCannaGlobal/bcna/releases/download/v1.6.3/bcna_linux_amd64.tar.gz",
        "darwin/arm64": "https://github.com/BitCannaGlobal/bcna/releases/download/v1.6.3/bcna_darwin_arm64.tar.gz",
        "darwin/amd64": "https://github.com/BitCannaGlobal/bcna/releases/download/v1.6.3/bcna_darwin_amd64.tar.gz"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/BitCannaGlobal/bcna/main/genesis.json"
      },
      "versions": [
        {
          "name": "v1.6.3",
          "recommended_version": "v1.6.3",
          "compatible_versions": [
            "v1.6.1",
            "v1.6.2",
            "v1.6.3"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/BitCannaGlobal/bcna/releases/download/v1.6.3/bcna_linux_amd64.tar.gz",
            "darwin/arm64": "https://github.com/BitCannaGlobal/bcna/releases/download/v1.6.3/bcna_darwin_arm64.tar.gz",
            "darwin/amd64": "https://github.com/BitCannaGlobal/bcna/releases/download/v1.6.3/bcna_darwin_amd64.tar.gz"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "d6aa4c9f3ccecb0cc52109a95962b4618d69dd3f",
          "address": "seed1.bitcanna.io:26656",
          "provider": "bitcanna"
        },
        {
          "id": "e2e7c704f766ef6b9e2c8dd61d963f8393b87966",
          "address": "seed3.bitcanna.io:26656",
          "provider": "bitcanna"
        },
        {
          "id": "f0e6c86d769bf5c52f78e01864091690e731643f",
          "address": "bitcanna-seed.panthea.eu:37656",
          "provider": "Panthea EU"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:13056",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc",
          "address": "bitcanna.rpc.kjnodes.com:14259",
          "provider": "kjnodes"
        }
      ],
      "persistent_peers": [
        {
          "id": "21484408a7bcf0134689ddf52a7d9c8299cb65b5",
          "address": "176.9.139.74:36656",
          "provider": "BitCanna"
        },
        {
          "id": "a4c1e46441164c350f721cf142d52c136215e05c",
          "address": "135.181.176.55:36656",
          "provider": "BitCanna"
        },
        {
          "id": "8fa7a04d55ca7d0ab70dc5cbc35d5cf26c5ecfb7",
          "address": "65.108.142.81:26682",
          "provider": "Stakely"
        },
        {
          "id": "ad820cb2fa85e525538207bb24ee49a61a74eb45",
          "address": "93.115.25.15:26656",
          "provider": "Stakely"
        },
        {
          "id": "df99de6cec9152c517990317b340b8b9a307493c",
          "address": "193.34.144.156:26656",
          "provider": "ParanormalBrothers"
        },
        {
          "id": "0a658df9d9fab096983a12e6f878e87281a15ce6",
          "address": "bitcanna-peer.panthea.eu:27656",
          "provider": "Panthea EU"
        },
        {
          "id": "803fc66e3bd7b724921ef9c40636067f36e880c6",
          "address": "65.108.199.222:26357",
          "provider": "AlxVoy"
        },
        {
          "id": "9425b897a9726efb1e56111a8b355026a1f3a497",
          "address": "65.108.238.203:46656",
          "provider": "[NODERS]TEAM"
        },
        {
          "id": "5a048cab1d183de5c465c56b29a16fd93a8bf9bd",
          "address": "mainnet-bitcanna.konsortech.xyz:27656",
          "provider": "KonsorTech"
        },
        {
          "id": "2235f1e518c5ea4a412f9dece386348eda356916",
          "address": "bitcanna.alkia.net:26656",
          "provider": "ALKIA"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.bitcanna.io/",
          "provider": "bitcanna"
        },
        {
          "address": "http://bcna.paranorm.pro/",
          "provider": "ParanormalBrothers"
        },
        {
          "address": "https://bcna-rpc.ibs.team/",
          "provider": "Inter Blockchain Services (former 3Tekos)"
        },
        {
          "address": "https://rpc.bitcanna.sgtstake.com/",
          "provider": "SGTstake"
        },
        {
          "address": "https://rpc-bitcanna.mintthemoon.xyz",
          "provider": "mintthemoon"
        },
        {
          "address": "https://bitcanna.rpc.m.anode.team",
          "provider": "AlxVoy"
        },
        {
          "address": "http://bitcanna.statesync.nodersteam.com:46657",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "https://bitcanna.nodejumper.io",
          "provider": "NODEJUMPER"
        },
        {
          "address": "https://rpc-bcna.kjinc.io/",
          "provider": "KJINC.io"
        },
        {
          "address": "https://mainnet-bitcanna-rpc.konsortech.xyz",
          "provider": "KonsorTech"
        },
        {
          "address": "https://bitcanna.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "http://bitcanna.alkia.net:26657",
          "provider": "ALKIA"
        },
        {
          "address": "https://bitcanna-rpc.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.bitcanna.io",
          "provider": "bitcanna"
        },
        {
          "address": "https://bitcanna-grpc.lavenderfive.com:443/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "bitcanna.grpc.kjnodes.com:14290",
          "provider": "kjnodes"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.bitcanna.io",
          "provider": "bitcanna"
        },
        {
          "address": "https://api.bitcanna.sgtstake.com/",
          "provider": "SGTstake"
        },
        {
          "address": "https://lcd-bitcanna.mintthemoon.xyz",
          "provider": "mintthemoon"
        },
        {
          "address": "https://bcna-api.ibs.team/",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://bitcanna.api.m.anode.team",
          "provider": "AlxVoy"
        },
        {
          "address": "https://bitcanna.nodejumper.io:1317",
          "provider": "NODEJUMPER"
        },
        {
          "address": "https://api-bcna.kjinc.io/",
          "provider": "KJINC.io"
        },
        {
          "address": "https://mainnet-bitcanna-api.konsortech.xyz",
          "provider": "KonsorTech"
        },
        {
          "address": "https://bitcanna.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "http://bitcanna.alkia.net:1317/",
          "provider": "ALKIA"
        },
        {
          "address": "https://bitcanna-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/bitcanna",
        "tx_page": "https://ezstaking.tools/bitcanna/txs/${txHash}",
        "account_page": "https://ezstaking.tools/bitcanna/account/${accountAddress}"
      },
      {
        "kind": "forbole",
        "url": "https://cosmos-explorer.bitcanna.io",
        "tx_page": "https://cosmos-explorer.bitcanna.io/transactions/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/bitcanna",
        "tx_page": "https://ping.pub/bitcanna/tx/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/bitcanna/",
        "tx_page": "https://www.mintscan.io/bitcanna/txs/${txHash}",
        "account_page": "https://www.mintscan.io/bitcanna/account/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/bitcanna",
        "tx_page": "https://atomscan.com/bitcanna/transactions/${txHash}",
        "account_page": "https://atomscan.com/bitcanna/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "beezee",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "BeeZee",
    "chain_id": "beezee-1",
    "bech32_prefix": "bze",
    "daemon_name": "bzed",
    "node_home": "$HOME/.bze",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ubze",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ubze"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/bze-alphateam/bze",
      "recommended_version": "v6.0.0",
      "compatible_versions": [
        "v6.0.0"
      ],
      "binaries": {
        "darwin/amd64": "https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-darwin-amd64.tar.gz",
        "darwin/arm64": "https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-darwin-arm64.tar.gz",
        "linux/amd64": "https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-linux-amd64.tar.gz",
        "linux/arm64": "https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-linux-arm64.tar.gz",
        "windows/amd64": "https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-win64.zip"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/bze-alphateam/bze/main/genesis.json"
      },
      "versions": [
        {
          "name": "v6.0.0",
          "recommended_version": "v6.0.0",
          "compatible_versions": [
            "v6.0.0"
          ],
          "binaries": {
            "darwin/amd64": "https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-darwin-amd64.tar.gz",
            "darwin/arm64": "https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-darwin-arm64.tar.gz",
            "linux/amd64": "https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-linux-amd64.tar.gz",
            "linux/arm64": "https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-linux-arm64.tar.gz",
            "windows/amd64": "https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-win64.zip"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "6385d5fb198e3a793498019bb8917973325e5eb7",
          "address": "51.15.138.216:26656",
          "provider": "AlphaTeam"
        }
      ],
      "persistent_peers": [
        {
          "id": "6385d5fb198e3a793498019bb8917973325e5eb7",
          "address": "51.15.228.169:26656",
          "provider": "AlphaTeam"
        },
        {
          "id": "ce25088267cef31f3be1ec03263524764c5c80bb",
          "address": "163.172.130.162:26656",
          "provider": "AlphaTeam"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.getbze.com",
          "provider": "AlphaTeam"
        },
        {
          "address": "https://rpc-1.getbze.com",
          "provider": "AlphaTeam"
        },
        {
          "address": "https://rpc-2.getbze.com",
          "provider": "AlphaTeam"
        }
      ],
      "rest": [
        {
          "address": "https://rest.getbze.com",
          "provider": "AlphaTeam"
        },
        {
          "address": "https://rest-1.getbze.com",
          "provider": "AlphaTeam"
        },
        {
          "address": "https://rest-2.getbze.com",
          "provider": "AlphaTeam"
        }
      ],
      "grpc": [
        {
          "address": "144.91.122.246:9999",
          "provider": "AlphaTeam"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/beezee",
        "tx_page": "https://ping.pub/beezee/tx/${txHash}",
        "account_page": "https://ping.pub/beezee/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://explorers.vidulum.app/beezee",
        "tx_page": "https://explorers.vidulum.app/beezee/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://explorer.erialos.me/beezee",
        "tx_page": "https://explorer.erialos.me/beezee/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/beezee",
        "tx_page": "https://atomscan.com/beezee/transactions/${txHash}",
        "account_page": "https://atomscan.com/beezee/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "bandchain",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://bandprotocol.com/",
    "pretty_name": "Band Protocol",
    "chain_id": "laozi-mainnet",
    "daemon_name": "bandd",
    "node_home": "$HOME/.band",
    "bech32_prefix": "band",
    "slip44": 494,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uband"
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uband"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/bandprotocol/chain",
      "recommended_version": "v2.4.1",
      "compatible_versions": [
        "v2.4.1"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/bandprotocol/launch/master/laozi-mainnet/genesis.json"
      },
      "versions": [
        {
          "name": "v2.4.1",
          "recommended_version": "v2.4.1",
          "compatible_versions": [
            "v2.4.1"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "8d42bdcb6cced03e0b67fa3957e4e9c8fd89015a",
          "address": "34.87.86.195:26656"
        },
        {
          "id": "543e0cab9c3016a0e99775443a17bcf163038912",
          "address": "34.150.156.78:26656"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "bandchain-mainnet-seed.autostake.com:26666",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "4ded49b3a718828eb64cf35da1ed791ecb201bc1",
          "address": "seed-band-01.stakeflow.io:25017",
          "provider": "Genesis Lab"
        }
      ],
      "persistent_peers": [
        {
          "id": "98823087b61d442a4ab86998709c77b2e517ee78",
          "address": "35.240.152.216:26656"
        },
        {
          "id": "3ea84babead3d6bc488810a0f2cf0744cf5c68fe",
          "address": "34.86.22.251:26656"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "bandchain-mainnet-peer.autostake.com:26666",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "4ded49b3a718828eb64cf35da1ed791ecb201bc1",
          "address": "peer-band-01.stakeflow.io:25017",
          "provider": "Genesis Lab"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "http://rpc.laozi1.bandchain.org:80",
          "provider": "bandprotocol"
        },
        {
          "address": "https://rpc-bandchain-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://band-rpc.ibs.team/",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://bandchain-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rpc-band-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "rest": [
        {
          "address": "https://laozi1.bandchain.org/api",
          "provider": "bandprotocol"
        },
        {
          "address": "https://api-bandchain-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://band-api.ibs.team/",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://bandchain-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://api-band-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "grpc": [
        {
          "address": "grpc-bandchain-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "bandchain-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "grpc-band-01.stakeflow.io:2502",
          "provider": "Genesis Lab"
        }
      ]
    },
    "explorers": [
      {
        "kind": "cosmoscan",
        "url": "https://cosmoscan.io",
        "tx_page": "https://cosmoscan.io/tx/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/band",
        "tx_page": "https://www.mintscan.io/band/txs${txHash}",
        "account_page": "https://www.mintscan.io/band/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/band-protocol",
        "tx_page": "https://ping.pub/band-protocol/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/band-protocol",
        "tx_page": "https://atomscan.com/band-protocol/transactions/${txHash}",
        "account_page": "https://atomscan.com/band-protocol/accounts/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/band",
        "tx_page": "https://bigdipper.live/band/transactions/${txHash}",
        "account_page": "https://bigdipper.live/band/accounts/${accountAddress}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/band-protocol",
        "account_page": "https://stakeflow.io/band-protocol/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "axelar",
    "chain_id": "axelar-dojo-1",
    "pretty_name": "Axelar",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://axelar.network/",
    "bech32_prefix": "axelar",
    "daemon_name": "axelard",
    "node_home": "$HOME/.axelard",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uaxl",
          "fixed_min_gas_price": 0.007,
          "low_gas_price": 0.007,
          "average_gas_price": 0.007,
          "high_gas_price": 0.01
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/axelarnetwork/axelar-core",
      "recommended_version": "v0.33.0",
      "compatible_versions": [
        "v0.33.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/axelarnetwork/axelar-core/releases/download/v0.33.0/axelard-linux-amd64-v0.33.0",
        "darwin/amd64": "https://github.com/axelarnetwork/axelar-core/releases/download/v0.33.0/axelard-darwin-amd64-v0.33.0"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/axelarnetwork/axelarate-community/main/resources/mainnet/genesis.json"
      },
      "versions": [
        {
          "name": "v0.33.0",
          "recommended_version": "v0.33.0",
          "compatible_versions": [
            "v0.33.0"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/axelarnetwork/axelar-core/releases/download/v0.33.0/axelard-linux-amd64-v0.33.0",
            "darwin/amd64": "https://github.com/axelarnetwork/axelar-core/releases/download/v0.33.0/axelard-darwin-amd64-v0.33.0"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "3d67d0646cddcc203b41434aceea64ade22ba6fc",
          "address": "k8s-mainnet-axelarco-79b464ee93-f03cb16c57cf7cb2.elb.us-east-2.amazonaws.com:26656",
          "provider": "axelar-core"
        },
        {
          "id": "9c9b8eb8cad8648f31d3c9da3d14e825f11a7b52",
          "address": "public-seed.mainnet.axelar.lunanova.tech:26656",
          "provider": "lunanova"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:15156",
          "provider": "Polkachu"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "axelar-mainnet-seed.autostake.com:26826",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "1e5c0b8f4431b0881edbd04537f4351bd7f19afc",
          "address": "seeds.whispernode.com:15156",
          "provider": "WhisperNode🤐"
        },
        {
          "id": "3470414cd299d15911e9bb28557f6bffb8e514c6",
          "address": "seed-axelar-01.stakeflow.io:1606",
          "provider": "Genesis Lab"
        }
      ],
      "persistent_peers": [
        {
          "id": "353f7d0962594bcbfb63c81594e35e39c4c89a1a",
          "address": "18.223.127.165:26656"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "axelar-mainnet-peer.autostake.com:26826",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "3470414cd299d15911e9bb28557f6bffb8e514c6",
          "address": "peer-axelar-01.stakeflow.io:1606",
          "provider": "Genesis Lab"
        }
      ]
    },
    "apis": {
      "grpc-web": [
        {
          "address": "axelar-grpcweb.chainode.tech",
          "provider": "Chainode"
        },
        {
          "address": "axelar-grpcweb.quantnode.tech:9091",
          "provider": "Quantnode"
        }
      ],
      "rpc": [
        {
          "address": "https://rpc-axelar.imperator.co:443",
          "provider": "Imperator.co"
        },
        {
          "address": "https://axelar-rpc.quickapi.com:443",
          "provider": "chainlayer"
        },
        {
          "address": "https://axelar-rpc.chainode.tech:443",
          "provider": "Chainode"
        },
        {
          "address": "https://axelar-rpc.pops.one:443",
          "provider": "p-ops"
        },
        {
          "address": "https://axelar-rpc.qubelabs.io:443",
          "provider": "Qubelabs"
        },
        {
          "address": "https://rpc-1.axelar.nodes.guru:443",
          "provider": "nodes.guru"
        },
        {
          "address": "https://rpc-axelar-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://axelar-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://axelar.rpc.stakin-nodes.com",
          "provider": "Stakin"
        },
        {
          "address": "https://rpc.axelar.bh.rocks",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://axelar-rpc.validatrium.club",
          "provider": "Validatrium"
        },
        {
          "address": "https://rpc-axelar.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://axelar-rpc.quantnode.tech/",
          "provider": "QuantNode"
        },
        {
          "address": "https://axelar-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://axelar-rpc.rockrpc.net/",
          "provider": "RockawayX Infra"
        },
        {
          "address": "https://axelar-rpc.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://rpc-axelar-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "rest": [
        {
          "address": "https://lcd-axelar.imperator.co:443",
          "provider": "Imperator.co"
        },
        {
          "address": "https://axelar-lcd.quickapi.com:443",
          "provider": "chainlayer"
        },
        {
          "address": "https://axelar-rest.chainode.tech:443",
          "provider": "Chainode"
        },
        {
          "address": "https://axelar-lcd.qubelabs.io:443",
          "provider": "Qubelabs"
        },
        {
          "address": "https://api-1.axelar.nodes.guru:443",
          "provider": "nodes.guru"
        },
        {
          "address": "https://api-axelar-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://axelar-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://axelar.rest.stakin-nodes.com",
          "provider": "Stakin"
        },
        {
          "address": "https://api.axelar.bh.rocks",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://axelar-api.validatrium.club",
          "provider": "Validatrium"
        },
        {
          "address": "https://lcd-axelar.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://axelar-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://axelar-lcd.quantnode.tech/",
          "provider": "QuantNode"
        },
        {
          "address": "https://axelar-api.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://api-axelar-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "grpc": [
        {
          "address": "axelar-grpc.qubelabs.io:9092",
          "provider": "Qubelabs"
        },
        {
          "address": "axelar-grpc.quantnode.tech:9090",
          "provider": "Quantnode"
        },
        {
          "address": "services.staketab.com:9080",
          "provider": "Staketab"
        },
        {
          "address": "grpc-axelar-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "axelar-grpc.polkachu.com:15190",
          "provider": "Polkachu"
        },
        {
          "address": "axelar.grpc.stakin-nodes.com:443",
          "provider": "Stakin"
        },
        {
          "address": "axelar-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "grpc-axelar-01.stakeflow.io:1602",
          "provider": "Genesis Lab"
        }
      ]
    },
    "explorers": [
      {
        "kind": "axelarscan",
        "url": "https://axelarscan.io",
        "tx_page": "https://axelarscan.io/tx/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/axelar",
        "tx_page": "https://www.mintscan.io/axelar/txs/${txHash}",
        "account_page": "https://www.mintscan.io/axelar/account/${accountAddress}"
      },
      {
        "kind": "explorers.guru",
        "url": "https://axelar.explorers.guru",
        "tx_page": "https://axelar.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/axelar",
        "tx_page": "https://atomscan.com/axelar/transactions/${txHash}",
        "account_page": "https://atomscan.com/axelar/accounts/${accountAddress}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/axelar",
        "account_page": "https://stakeflow.io/axelar/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "aura",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://aura.network/",
    "pretty_name": "Aura Network",
    "chain_id": "xstaxy-1",
    "bech32_prefix": "aura",
    "daemon_name": "aurad",
    "node_home": "$HOME/.aura",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uaura"
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uaura"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/aura-nw/aura",
      "recommended_version": "aura_v0.4.4",
      "compatible_versions": [
        "aura_v0.4.4"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/aura-nw/mainnet-artifacts/main/xstaxy-1/genesis.json"
      },
      "versions": [
        {
          "name": "aura_v0.4.4",
          "recommended_version": "aura_v0.4.4",
          "compatible_versions": [
            "aura_v0.4.4"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "22a0ca5f64187bb477be1d82166b1e9e184afe50",
          "address": "18.143.52.13:26656"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "auranetwork-mainnet-seed.autostake.com:26966",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "0b8bd8c1b956b441f036e71df3a4d96e85f843b8",
          "address": "13.250.159.219:26656"
        },
        {
          "id": "400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc",
          "address": "aura.rpc.kjnodes.com:11759",
          "provider": "kjnodes"
        },
        {
          "id": "dc92560346a63ac23e117a8b16207c6adbb57f5e",
          "address": "seeds.whispernode.com:21756",
          "provider": "WhisperNode🤐"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:21756",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ],
      "persistent_peers": [
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "auranetwork-mainnet-peer.autostake.com:26966",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "ced3a13f4f7200ce1a2392a5738c88532f794359",
          "address": "mainnet-aura.konsortech.xyz:25656",
          "provider": "KonsorTech"
        },
        {
          "id": "9ee34b0829e9d85d88784aa17857fa1719760da2",
          "address": "aura.ramuchi.tech:30000",
          "provider": "ramuchi.tech"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.aura.network/",
          "provider": "Aura Network Foundation"
        },
        {
          "address": "https://auranetwork-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://m-aura.rpc.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://rpc.aura.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://rpc-aura.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://aura-rpc.ramuchi.tech",
          "provider": "ramuchi.tech"
        },
        {
          "address": "https://aura.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://mainnet-aura-rpc.konsortech.xyz",
          "provider": "KonsorTech"
        },
        {
          "address": "https://aura-rpc.tienthuattoan.ventures",
          "provider": "TienThuatToan"
        },
        {
          "address": "https://aura-rpc.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.aura.network/",
          "provider": "Aura Network Foundation"
        },
        {
          "address": "https://auranetwork-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://m-aura.api.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://api.aura.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://lcd-aura.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://aura-api.ramuchi.tech",
          "provider": "ramuchi.tech"
        },
        {
          "address": "https://aura.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://mainnet-aura-api.konsortech.xyz",
          "provider": "KonsorTech"
        },
        {
          "address": "https://aura-api.tienthuattoan.ventures",
          "provider": "TienThuatToan"
        },
        {
          "address": "https://aura-api.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.aura.network",
          "provider": "Aura Network Foundation"
        },
        {
          "address": "auranetwork-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://grpc.aura.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://aura-grpc.ramuchi.tech:15000",
          "provider": "ramuchi.tech"
        },
        {
          "address": "aura.grpc.kjnodes.com:11790",
          "provider": "kjnodes"
        },
        {
          "address": "aura-grpc.tienthuattoan.ventures:9090",
          "provider": "TienThuatToan"
        },
        {
          "address": "aura-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ]
    },
    "explorers": [
      {
        "kind": "aurascan",
        "url": "https://aurascan.io",
        "tx_page": "https://aurascan.io/transaction/${txHash}",
        "account_page": "https://aurascan.io/account/${accountAddress}"
      },
      {
        "kind": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀 Explorer",
        "url": "https://exp.utsa.tech/aura",
        "tx_page": "https://exp.utsa.tech/aura/tx/${txHash}",
        "account_page": "https://exp.utsa.tech/aura/account/${accountAddress}"
      },
      {
        "kind": "NodeStake Explorer",
        "url": "https://explorer.nodestake.top/aura",
        "tx_page": "https://explorer.nodestake.top/aura/tx/${txHash}",
        "account_page": "https://explorer.nodestake.top/aura/account/${accountAddress}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/aura",
        "tx_page": "https://explorer.tcnetwork.io/aura/transaction/${txHash}",
        "account_page": "https://explorer.tcnetwork.io/aura/account/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "assetmantle",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://assetmantle.one/",
    "pretty_name": "AssetMantle",
    "chain_id": "mantle-1",
    "bech32_prefix": "mantle",
    "daemon_name": "mantleNode",
    "node_home": "$HOME/.mantleNode",
    "fees": {
      "fee_tokens": [
        {
          "denom": "umntl",
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "umntl"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/AssetMantle/node.git",
      "recommended_version": "v0.3.0",
      "compatible_versions": [
        "v0.3.0"
      ],
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/AssetMantle/genesisTransactions/main/mantle-1/final_genesis.json"
      },
      "versions": [
        {
          "name": "v0.3.0",
          "recommended_version": "v0.3.0",
          "compatible_versions": [
            "v0.3.0"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/AM_Logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/AM_Logo_Dark.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:14656",
          "provider": "Polkachu"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "assetmantle-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "990557213003ab234cc03307d02688c30357fed6",
          "address": "seeds.whispernode.com:14656",
          "provider": "WhisperNode🤐"
        },
        {
          "id": "27b6d74c8408e033e2e5a9e966a0d15782e33596",
          "address": "seeds.nethernode.xyz:14656",
          "provider": "carbonZERO🌲"
        }
      ],
      "persistent_peers": [
        {
          "id": "4654c8bed4349e4800238cff1f88e97c1f880080",
          "address": "207.244.245.125:26656"
        },
        {
          "id": "a7aafd3330e57d3104be5b2820b6ad2d52ac19ec",
          "address": "3.39.94.36:26656"
        },
        {
          "id": "9c97f6143d3fae032af5f155d472bbc52f4d90b3",
          "address": "194.34.232.225:26656"
        },
        {
          "id": "fd096224f9c918089410ac7ab6d42d21ec87db60",
          "address": "65.21.230.230:26656"
        },
        {
          "id": "f33b2125c3b3a7c4838e22a060e38d2cefd66e78",
          "address": "65.108.140.109:26656"
        },
        {
          "id": "6261de9dac635a8fd8d19a70afc41f845c59db96",
          "address": "116.203.35.46:26656"
        },
        {
          "id": "e0deea2d5c15e77c9d5934305bb23148ce836709",
          "address": "185.252.232.79:26656"
        },
        {
          "id": "4fc4fa6ec44f6da10830ffcb6344a8635156e11e",
          "address": "141.95.65.26:26656"
        },
        {
          "id": "7362b3c4d082680aeffe137d18cea0e37cab5037",
          "address": "146.19.24.101:26656"
        },
        {
          "id": "5e8e8e7071259beb3b32e39cb3d2bb059cff4d66",
          "address": "65.108.137.22:26656"
        },
        {
          "id": "5b3c90e6c07e03ffddc5dc3aae786a2990bc5bd3",
          "address": "148.251.81.179:26656"
        },
        {
          "id": "7ae8a8e62efcccf15198525868b0873b3c9bd698",
          "address": "65.108.121.37:36656"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.assetmantle.one",
          "provider": "AssetMantle"
        },
        {
          "address": "https://rpc-assetmantle.blockpower.capital",
          "provider": "Blockpower"
        },
        {
          "address": "https://rpc-assetmantle.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://assetmantle-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc.assetmantle.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://rpc-assetmantle-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://rpc-assetmanle.d-stake.xyz",
          "provider": "D-stake"
        },
        {
          "address": "https://rpc-assetmantle.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://rpc-assetmantle.carbonZERO.zone:443",
          "provider": "carbonZERO🌲"
        },
        {
          "address": "https://assetmantle.nodejumper.io",
          "provider": "NODEJUMPER"
        },
        {
          "address": "https://rpc.mantle.paranorm.pro:443",
          "provider": "paranorm"
        }
      ],
      "rest": [
        {
          "address": "https://rest.assetmantle.one",
          "provider": "AssetMantle"
        },
        {
          "address": "https://rest-assetmantle.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://api.assetmantle.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://api-assetmantle-ia.cosmosia.notional.ventures",
          "provider": "Notional"
        },
        {
          "address": "https://assetmantle-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://api-assetmanle.d-stake.xyz",
          "provider": "D-stake"
        },
        {
          "address": "https://lcd-assetmantle.whispernode.com:443",
          "provider": "WhisperNode🤐"
        },
        {
          "address": "https://rest-assetmantle.carbonZERO.zone:443",
          "provider": "carbonZERO🌲"
        },
        {
          "address": "https://assetmantle.nodejumper.io:1317",
          "provider": "NODEJUMPER"
        },
        {
          "address": "https://api.mantle.paranorm.pro:443",
          "provider": "paranorm"
        }
      ],
      "grpc": [
        {
          "address": "grpc.assetmantle.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "grpc-assetmantle-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "assetmantle-grpc.polkachu.com:14690",
          "provider": "Polkachu"
        },
        {
          "address": "assetmantle.nodejumper.io:9090",
          "provider": "NODEJUMPER"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/assetmantle",
        "tx_page": "https://ezstaking.tools/assetmantle/txs/${txHash}",
        "account_page": "https://ezstaking.tools/assetmantle/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/asset-mantle",
        "tx_page": "https://www.mintscan.io/asset-mantle/txs/${txHash}",
        "account_page": "https://www.mintscan.io/asset-mantle/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://explorer.postcapitalist.io/AssetMantle",
        "tx_page": "https://explorer.postcapitalist.io/AssetMantle/tx/${txHash}"
      },
      {
        "kind": "other",
        "url": "https://explorer.assetmantle.one",
        "tx_page": "https://explorer.assetmantle.one/transactions/${txHash}"
      },
      {
        "kind": "explorers.guru",
        "url": "https://assetmantle.explorers.guru",
        "tx_page": "https://assetmantle.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/assetmantle",
        "tx_page": "https://atomscan.com/assetmantle/transactions/${txHash}",
        "account_page": "https://atomscan.com/assetmantle/accounts/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/assetmantle",
        "tx_page": "https://bigdipper.live/assetmantle/transactions/${txHash}",
        "account_page": "https://bigdipper.live/assetmantle/accounts/${accountAddress}"
      }
    ],
    "slip44": 118
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "arkh",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://arkhadian.com/",
    "pretty_name": "Arkhadian",
    "chain_id": "arkh",
    "bech32_prefix": "arkh",
    "daemon_name": "arkhd",
    "node_home": "$HOME/.arkh",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "arkh",
          "fixed_min_gas_price": 0.01,
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.03
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "arkh"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/vincadian/arkh-blockchain",
      "recommended_version": "v2.0.0",
      "compatible_versions": [
        "v2.0.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/vincadian/arkh-blockchain/releases/download/latest/arkh-blockchain_latest_linux_amd64.tar.gz",
        "darwin/amd64": "https://github.com/vincadian/arkh-blockchain/releases/download/latest/arkh-blockchain_latest_darwin_amd64.tar.gz"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/vincadian/arkh-blockchain/master/genesis/genesis.json"
      },
      "versions": [
        {
          "name": "v2.0.0",
          "recommended_version": "v2.0.0",
          "compatible_versions": [
            "v2.0.0"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/vincadian/arkh-blockchain/releases/download/latest/arkh-blockchain_latest_linux_amd64.tar.gz",
            "darwin/amd64": "https://github.com/vincadian/arkh-blockchain/releases/download/latest/arkh-blockchain_latest_darwin_amd64.tar.gz"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg"
    },
    "peers": {
      "seeds": []
    },
    "apis": {
      "rpc": [
        {
          "address": "https://asc-dataseed.arkhadian.com/",
          "provider": "arkhnetwork"
        },
        {
          "address": "https://rpc.arkh.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://rpc-arkhadian.comunitynode.my.id",
          "provider": "ComunityNode"
        },
        {
          "address": "https://arkh-rpc.kynraze.com",
          "provider": "Kynraze"
        },
        {
          "address": "https://rpc.arkh.nodexcapital.com",
          "provider": "NodeX Validator"
        }
      ],
      "rest": [
        {
          "address": "https://asc-blockchain-api.arkhadian.com/",
          "provider": "arkhnetwork"
        },
        {
          "address": "https://api.arkh.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://api-arkhadian.comunitynode.my.id",
          "provider": "ComunityNode"
        },
        {
          "address": "https://arkh-api.kynraze.com",
          "provider": "Kynraze"
        },
        {
          "address": "https://rest.arkh.nodexcapital.com",
          "provider": "NodeX Validator"
        }
      ],
      "grpc": [
        {
          "address": "grpc.arkh.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "https://grpc.arkh.nodexcapital.com:443",
          "provider": "NodeX Validator"
        }
      ]
    },
    "explorers": [
      {
        "kind": "NodeStake Explorer",
        "url": "https://explorer.nodestake.top/arkh",
        "tx_page": "https://explorer.nodestake.top/arkh/tx/${txHash}"
      },
      {
        "kind": "Kynraze Explorer",
        "url": "https://explorer.kynraze.com/arkhadian",
        "tx_page": "https://explorer.kynraze.com/arkhadian/tx/${txHash}"
      },
      {
        "kind": "NODEXPLORER",
        "url": "https://explorer.nodexcapital.com/arkhadian",
        "tx_page": "https://explorer.nodexcapital.com/arkhadian/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "akash",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://akash.network/",
    "pretty_name": "Akash",
    "chain_id": "akashnet-2",
    "bech32_prefix": "akash",
    "daemon_name": "akash",
    "node_home": "$HOME/.akash",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uakt",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uakt"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/akash-network/node/",
      "recommended_version": "v0.22.0",
      "compatible_versions": [
        "v0.20.0"
      ],
      "binaries": {
        "linux/amd64": "https://github.com/akash-network/node/releases/download/v0.22.0/akash_0.22.0_linux_amd64.zip",
        "linux/arm64": "https://github.com/akash-network/node/releases/download/v0.22.0/akash_0.22.0_linux_arm64.zip"
      },
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/akash-network/net/master/mainnet/genesis.json"
      },
      "versions": [
        {
          "name": "v0.22.0",
          "recommended_version": "v0.22.0",
          "compatible_versions": [
            "v0.20.0"
          ],
          "binaries": {
            "linux/amd64": "https://github.com/akash-network/node/releases/download/v0.22.0/akash_0.22.0_linux_amd64.zip",
            "linux/arm64": "https://github.com/akash-network/node/releases/download/v0.22.0/akash_0.22.0_linux_arm64.zip"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "4acf579e2744268f834c713e894850995bbf0ffa",
          "address": "50.18.31.225:26656"
        },
        {
          "id": "86afe23f116ba4754a19819a55d153008eb74b48",
          "address": "15.164.87.75:26656"
        },
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:12856",
          "provider": "Polkachu"
        },
        {
          "id": "20e1000e88125698264454a884812746c2eb4807",
          "address": "seeds.lavenderfive.com:12856",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "akash-mainnet-seed.autostake.com:26696",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "5e37aefd2a0b9d036b1609a45d6487606da0204b",
          "address": "rpc.ny.akash.farm:26656"
        },
        {
          "id": "47f7b7a021497ad7a338ea041f19a1a11ae06795",
          "address": "rpc.la.akash.farm:26656"
        },
        {
          "id": "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          "address": "akash-seed-1.allnodes.me:26656",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "id": "9aa4c9097c818871e45aaca4118a9fe5e86c60e2",
          "address": "seed-akash-01.stakeflow.io:1506",
          "provider": "Genesis Lab"
        }
      ],
      "persistent_peers": [
        {
          "id": "4acf579e2744268f834c713e894850995bbf0ffa",
          "address": "50.18.31.225:26656"
        },
        {
          "id": "86afe23f116ba4754a19819a55d153008eb74b48",
          "address": "15.164.87.75:26656"
        },
        {
          "id": "20180c45451739668f6e272e007818139dba31e7",
          "address": "88.198.62.198:2020"
        },
        {
          "id": "1bfbbf77beeb2c1ace50443478035a255a7e510f",
          "address": "136.24.44.100:26656"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "akash-mainnet-peer.autostake.com:26696",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "9aa4c9097c818871e45aaca4118a9fe5e86c60e2",
          "address": "peer-akash-01.stakeflow.io:1506",
          "provider": "Genesis Lab"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.akash.forbole.com:443",
          "provider": "forbole"
        },
        {
          "address": "https://rpc-akash.ecostake.com:443",
          "provider": "ecostake"
        },
        {
          "address": "https://akash-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes"
        },
        {
          "address": "https://akash-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-akash-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "http://akash.c29r3.xyz:80/rpc",
          "provider": "c29r3"
        },
        {
          "address": "https://akash-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://akash.rpc.interchain.ivaldilabs.xyz",
          "provider": "ivaldilabs"
        },
        {
          "address": "https://akash-rpc.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://rpc-akash-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "rest": [
        {
          "address": "https://api.akash.forbole.com:443",
          "provider": "forbole"
        },
        {
          "address": "https://rest-akash.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://akash-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes"
        },
        {
          "address": "https://akash-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://api-akash-ia.cosmosia.notional.ventures",
          "provider": "Notional"
        },
        {
          "address": "https://akash.c29r3.xyz:443/api",
          "provider": "c29r3"
        },
        {
          "address": "https://akash-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://akash.rest.interchain.ivaldilabs.xyz",
          "provider": "ivaldilabs"
        },
        {
          "address": "https://akash-api.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://api-akash-01.stakeflow.io",
          "provider": "Genesis Lab"
        }
      ],
      "grpc": [
        {
          "address": "grpc-akash-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "akash-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "akash-grpc.polkachu.com:12890",
          "provider": "Polkachu"
        },
        {
          "address": "akash-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "akash.grpc.interchain.ivaldilabs.xyz:443",
          "provider": "ivaldilabs"
        },
        {
          "address": "grpc-akash-01.stakeflow.io:1502",
          "provider": "Genesis Lab"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking Tools",
        "url": "https://ezstaking.tools/akash",
        "tx_page": "https://ezstaking.tools/akash/txs/${txHash}",
        "account_page": "https://ezstaking.tools/akash/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/akash",
        "tx_page": "https://www.mintscan.io/akash/txs/${txHash}",
        "account_page": "https://www.mintscan.io/akash/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/akash-network",
        "tx_page": "https://ping.pub/akash-network/tx/${txHash}"
      },
      {
        "kind": "bigdipper",
        "url": "https://akash.bigdipper.live/",
        "tx_page": "https://akash.bigdipper.live/transactions/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/akash",
        "tx_page": "https://atomscan.com/akash/transactions/${txHash}",
        "account_page": "https://atomscan.com/akash/accounts/${accountAddress}"
      },
      {
        "kind": "cloudmos",
        "url": "https://cloudmos.io/blocks",
        "tx_page": "https://cloudmos.io/transactions/${txHash}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/akash",
        "account_page": "https://stakeflow.io/akash/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "aioz",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://aioz.network/",
    "pretty_name": "AIOZ Network",
    "chain_id": "aioz_168-1",
    "bech32_prefix": "aioz",
    "daemon_name": "aiozd",
    "node_home": "$HOME/.aioz",
    "key_algos": [
      "ethsecp256k1"
    ],
    "extra_codecs": [
      "ethermint"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "attoaioz",
          "fixed_min_gas_price": 1000000000
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/AIOZNetwork/go-aioz",
      "recommended_version": "v1.4.0",
      "compatible_versions": [
        "v1.4.0"
      ],
      "binaries": {
        "linux/amd64": "https://archive.aioz.network/aiozd-v1.4.0-linux-amd64.tar.gz",
        "darwin/amd64": "https://archive.aioz.network/aiozd-v1.4.0-darwin-amd64.tar.gz",
        "windows/amd64": "https://archive.aioz.network/aiozd-v1.4.0-windows-amd64.zip"
      },
      "genesis": {
        "genesis_url": "https://archive.aioz.network/aioz_168-1/genesis.json"
      },
      "versions": [
        {
          "name": "v1.2.0",
          "recommended_version": "v1.2.0",
          "compatible_versions": [
            "v1.2.0"
          ],
          "binaries": {
            "linux/amd64": "https://archive.aioz.network/aiozd-v1.2.0-linux-amd64.tar.gz",
            "darwin/amd64": "https://archive.aioz.network/aiozd-v1.2.0-darwin-amd64.tar.gz",
            "windows/amd64": "https://archive.aioz.network/aiozd-v1.2.0-windows-amd64.zip"
          },
          "next_version_name": "v1.3.0"
        },
        {
          "name": "v1.3.0",
          "recommended_version": "v1.3.0",
          "compatible_versions": [
            "v1.3.0"
          ],
          "binaries": {
            "linux/amd64": "https://archive.aioz.network/aiozd-v1.3.0-linux-amd64.tar.gz",
            "darwin/amd64": "https://archive.aioz.network/aiozd-v1.3.0-darwin-amd64.tar.gz",
            "windows/amd64": "https://archive.aioz.network/aiozd-v1.3.0-windows-amd64.zip"
          },
          "next_version_name": "v1.4.0"
        },
        {
          "name": "v1.4.0",
          "recommended_version": "v1.4.0",
          "compatible_versions": [
            "v1.4.0"
          ],
          "binaries": {
            "linux/amd64": "https://archive.aioz.network/aiozd-v1.4.0-linux-amd64.tar.gz",
            "darwin/amd64": "https://archive.aioz.network/aiozd-v1.4.0-darwin-amd64.tar.gz",
            "windows/amd64": "https://archive.aioz.network/aiozd-v1.4.0-windows-amd64.zip"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "aab202d5648772a8b5be3db575a8a7dd577db78f",
          "address": "167.172.6.76:26656"
        },
        {
          "id": "ef834ca8044d345db334fbf6a6bfe7230f429739",
          "address": "35.236.45.174:26656"
        },
        {
          "id": "b13a849f59ff3e0558d248c3e9eb9bf4a360bb77",
          "address": "20.187.94.254:26656"
        },
        {
          "id": "849e6023440355412bc9a9d5bc0731143e7d657a",
          "address": "13.53.208.41:26656"
        }
      ],
      "persistent_peers": [
        {
          "id": "aab202d5648772a8b5be3db575a8a7dd577db78f",
          "address": "167.172.6.76:26656"
        },
        {
          "id": "ef834ca8044d345db334fbf6a6bfe7230f429739",
          "address": "35.236.45.174:26656"
        },
        {
          "id": "b13a849f59ff3e0558d248c3e9eb9bf4a360bb77",
          "address": "20.187.94.254:26656"
        },
        {
          "id": "849e6023440355412bc9a9d5bc0731143e7d657a",
          "address": "13.53.208.41:26656"
        }
      ]
    },
    "apis": {
      "evm-http-jsonrpc": [
        {
          "address": "https://eth-dataseed.aioz.network",
          "provider": "AIOZ Network"
        }
      ],
      "rpc": [
        {
          "address": "https://rpc-dataseed.aioz.network:443",
          "provider": "AIOZ Network"
        }
      ],
      "rest": [
        {
          "address": "https://lcd-dataseed.aioz.network",
          "provider": "AIOZ Network"
        }
      ],
      "grpc": [
        {
          "address": "grpc-dataseed.aioz.network:443",
          "provider": "AIOZ Network"
        }
      ]
    },
    "explorers": [
      {
        "kind": "aioz",
        "url": "https://explorer.aioz.network",
        "tx_page": "https://explorer.aioz.network/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "agoric",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://agoric.com/",
    "pretty_name": "Agoric",
    "chain_id": "agoric-3",
    "bech32_prefix": "agoric",
    "daemon_name": "agd",
    "node_home": "$HOME/.agoric",
    "slip44": 564,
    "alternative_slip44s": [
      118
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "ubld",
          "low_gas_price": 0.03,
          "average_gas_price": 0.05,
          "high_gas_price": 0.07
        },
        {
          "denom": "uist",
          "low_gas_price": 0.0034,
          "average_gas_price": 0.007,
          "high_gas_price": 0.02
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ubld"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/Agoric/agoric-sdk/",
      "recommended_version": "agoric-upgrade-8",
      "compatible_versions": [
        "agoric-upgrade-8"
      ],
      "genesis": {
        "genesis_url": "https://main.agoric.net/genesis.json"
      },
      "versions": [
        {
          "name": "agoric-upgrade-8",
          "recommended_version": "agoric-upgrade-8",
          "compatible_versions": [
            "agoric-upgrade-8"
          ]
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/Agoric-logo-color.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/Agoric-logo-color.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          "address": "seeds.polkachu.com:14456",
          "provider": "Polkachu"
        },
        {
          "id": "400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc",
          "address": "agoric.rpc.kjnodes.com:12759",
          "provider": "kjnodes"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "agoric-mainnet-seed.autostake.com:27106",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "6ab5521047ae8e7bb0273a90029a6d445eb1a0a1",
          "address": "seed-agoric-01.stakeflow.io:2206",
          "provider": "Genesis Lab"
        }
      ],
      "persistent_peers": [
        {
          "id": "6e26a1b4afa6889f841d7957e8c2b5d50d32d485",
          "address": "95.216.53.26:26656"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "agoric-mainnet-peer.autostake.com:27106",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "6ab5521047ae8e7bb0273a90029a6d445eb1a0a1",
          "address": "peer-agoric-01.stakeflow.io:2206",
          "provider": "Genesis Lab"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://main.rpc.agoric.net:443"
        },
        {
          "address": "https://agoric-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc.agoric.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://agoric.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://agoric-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rpc-agoric-01.stakeflow.io",
          "provider": "Genesis Lab"
        },
        {
          "address": "https://agoric-rpc.0base.dev",
          "provider": "0base.vc"
        }
      ],
      "rest": [
        {
          "address": "https://main.api.agoric.net:443"
        },
        {
          "address": "https://api.agoric.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://agoric-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://agoric.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://agoric-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://api-agoric-01.stakeflow.io",
          "provider": "Genesis Lab"
        },
        {
          "address": "https://agoric-rest.0base.dev",
          "provider": "0base.vc"
        }
      ],
      "grpc": [
        {
          "address": "grpc.agoric.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "agoric-grpc.polkachu.com:14490",
          "provider": "Polkachu"
        },
        {
          "address": "agoric-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "agoric.grpc.kjnodes.com:12790",
          "provider": "kjnodes"
        },
        {
          "address": "grpc-agoric-01.stakeflow.io:2202",
          "provider": "Genesis Lab"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://agoric.bigdipper.live/",
        "tx_page": "https://agoric.bigdipper.live/transactions/${txHash}",
        "account_page": "https://agoric.bigdipper.live/accounts/${accountAddress}"
      },
      {
        "kind": "explorers.guru",
        "url": "https://agoric.explorers.guru",
        "tx_page": "https://agoric.explorers.guru/transaction/${txHash}",
        "account_page": "https://agoric.explorers.guru/account/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/agoric/",
        "tx_page": "https://atomscan.com/agoric/transactions/${txHash}",
        "account_page": "https://atomscan.com/agoric/accounts/${accountAddress}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/agoric",
        "account_page": "https://stakeflow.io/agoric/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "acrechain",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://arable.finance/",
    "pretty_name": "Acrechain",
    "chain_id": "acre_9052-1",
    "bech32_prefix": "acre",
    "node_home": "$HOME/.acred",
    "daemon_name": "acred",
    "key_algos": [
      "ethsecp256k1"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "aacre",
          "fixed_min_gas_price": 250000000,
          "low_gas_price": 20000000000,
          "average_gas_price": 25000000000,
          "high_gas_price": 40000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "aacre"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/ArableProtocol/acrechain",
      "recommended_version": "v1.1.1",
      "compatible_versions": [
        "v1.1.1"
      ],
      "binaries": {},
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/ArableProtocol/acrechain/main/networks/mainnet/acre_9052-1/genesis.json"
      },
      "versions": [
        {
          "name": "v1.1.1",
          "recommended_version": "v1.1.1",
          "compatible_versions": [
            "v1.1.1"
          ],
          "binaries": {}
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg"
    },
    "peers": {
      "seeds": [
        {
          "id": "ef28f065e24d60df275b06ae9f7fed8ba0823448",
          "address": "46.4.81.204:34656",
          "provider": "Kalia Network"
        },
        {
          "id": "1264ee73a2f40a16c2cbd80c1a824aad7cb082e4",
          "address": "149.102.146.252:26656",
          "provider": "D-Stake"
        },
        {
          "id": "bac90a590452337700e0033315e96430d19a3ffa",
          "address": "23.106.238.167:26656",
          "provider": "Synergy Nodes"
        },
        {
          "id": "d86d7a9d8059ae726f3322ff1eb9e2797fe62a72",
          "address": "65.108.233.44:26616",
          "provider": "StakeTab"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "acrechain-mainnet-seed.autostake.com:26956",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ],
      "persistent_peers": [
        {
          "id": "ef28f065e24d60df275b06ae9f7fed8ba0823448",
          "address": "46.4.81.204:34656",
          "provider": "Kalia Network"
        },
        {
          "id": "4238438afa73f6a15d0728377cc4c13c43f9903a",
          "address": "acrechain.ramuchi.tech:16656",
          "provider": "ramuchi.tech"
        },
        {
          "id": "1264ee73a2f40a16c2cbd80c1a824aad7cb082e4",
          "address": "149.102.146.252:26656",
          "provider": "D-Stake"
        },
        {
          "id": "bac90a590452337700e0033315e96430d19a3ffa",
          "address": "23.106.238.167:26656",
          "provider": "Synergy Nodes"
        },
        {
          "id": "d86d7a9d8059ae726f3322ff1eb9e2797fe62a72",
          "address": "65.108.233.44:26616",
          "provider": "StakeTab"
        },
        {
          "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
          "address": "acrechain-mainnet-peer.autostake.com:26956",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "id": "82726047c95e4ddf9a0fa82e4c4c4f17cbf3f140",
          "address": "213.32.24.201:27656",
          "provider": "genznodes"
        },
        {
          "id": "7d630b6e517598b4dc84a07c15fe328709a2705b",
          "address": "mainnet-acre.konsortech.xyz:13656",
          "provider": "KonsorTech"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.acre.nodestake.top",
          "provider": "nodestake"
        },
        {
          "address": "https://rpc-acre.d-stake.xyz",
          "provider": "D-stake"
        },
        {
          "address": "https://rpc-acre.synergynodes.com",
          "provider": "Synergy Nodes"
        },
        {
          "address": "https://acre-rpc.agoranodes.com",
          "provider": "AgoraNodes"
        },
        {
          "address": "https://acrechain-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://acre-rpc.genznodes.dev",
          "provider": "genznodes"
        },
        {
          "address": "https://rpc.acre.tcnetwork.io",
          "provider": "TC Network"
        },
        {
          "address": "https://acrechain-rpc.ramuchi.tech",
          "provider": "ramuchi.tech"
        },
        {
          "address": "https://mainnet-acre-rpc.konsortech.xyz",
          "provider": "KonsorTech"
        }
      ],
      "rest": [
        {
          "address": "https://api-acre.d-stake.xyz",
          "provider": "D-stake"
        },
        {
          "address": "https://lcd-acre.synergynodes.com",
          "provider": "Synergy Nodes"
        },
        {
          "address": "https://acrechain-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://acre-rest.agoranodes.com",
          "provider": "AgoraNodes"
        },
        {
          "address": "https://acre-api.genznodes.dev",
          "provider": "genznodes"
        },
        {
          "address": "https://rest.acre.tcnetwork.io",
          "provider": "TC Network"
        },
        {
          "address": "https://acrechain-api.ramuchi.tech",
          "provider": "ramuchi.tech"
        },
        {
          "address": "https://mainnet-acre-api.konsortech.xyz",
          "provider": "KonsorTech"
        }
      ],
      "grpc": [
        {
          "address": "grpc.acre.nodestake.top:443",
          "provider": "Nodestake"
        },
        {
          "address": "acrechain-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "acre-grpc.genznodes.dev:27090",
          "provider": "genznodes"
        },
        {
          "address": "https://acrechain-grpc.ramuchi.tech:1090",
          "provider": "ramuchi.tech"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://jsonrpc-acre.d-stake.xyz",
          "provider": "D-stake"
        },
        {
          "address": "https://rpc2-acre.synergynodes.com",
          "provider": "Synergy Nodes"
        },
        {
          "address": "https://jsonrpc.acre.nodestake.top",
          "provider": "Nodestake"
        },
        {
          "address": "https://acre-rpc-evm.genznodes.dev/",
          "provider": "genznodes"
        },
        {
          "address": "https://evm-acre.sr20de.xyz/",
          "provider": "Sr20de"
        },
        {
          "address": "https://evm.acrescan.com/",
          "provider": "Anonstake"
        },
        {
          "address": "https://json-rpc.acre.tcnetwork.io",
          "provider": "TC Network"
        },
        {
          "address": "https://mainnet-acre-evm.konsortech.xyz",
          "provider": "KonsorTech"
        }
      ]
    },
    "explorers": [
      {
        "kind": "blockscout",
        "url": "https://acrescout.mindheartsoul.org",
        "tx_page": "https://acrescout.mindheartsoul.org/tx/${txHash}"
      },
      {
        "kind": "blockscout",
        "url": "https://acrescan.com",
        "tx_page": "https://acrescan.com/tx/${txHash}"
      },
      {
        "kind": "blockscout",
        "url": "https://acreblockexplorer.jet-node.com",
        "tx_page": "https://acreblockexplorer.jet-node.com/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://explorer.nodestake.top/acre",
        "tx_page": "https://explorer.nodestake.top/acre/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://cosmosrun.info/acre-mainnet",
        "tx_page": "https://cosmosrun.info/acre-mainnet/tx/${txHash}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/acre",
        "tx_page": "https://explorer.tcnetwork.io/acre/transaction/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "8ball",
    "status": "live",
    "website": "https://8ball.info/",
    "network_type": "mainnet",
    "pretty_name": "8ball",
    "chain_id": "eightball-1",
    "bech32_prefix": "8ball",
    "daemon_name": "8ball",
    "node_home": "$HOME/.8ball",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uebl",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uebl"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://secp256k1.net/8ball.git",
      "recommended_version": "v1",
      "compatible_versions": [
        "v1"
      ],
      "cosmos_sdk_version": "0.46.7",
      "cosmwasm_enabled": true,
      "binaries": {
        "linux/amd64": "https://8ball.info/8ball.tar.gz"
      },
      "genesis": {
        "genesis_url": "https://8ball.info/8ball-genesis.json"
      },
      "versions": [
        {
          "name": "v1",
          "recommended_version": "v1",
          "compatible_versions": [
            "v1"
          ],
          "cosmos_sdk_version": "0.46.7",
          "cosmwasm_enabled": true,
          "binaries": {
            "linux/amd64": "https://8ball.info/8ball.tar.gz"
          }
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg"
    },
    "peers": {
      "seeds": [],
      "persistent_peers": [
        {
          "id": "fca96d0a1d7357afb226a49c4c7d9126118c37e9",
          "address": "one.8ball.info:26656",
          "provider": "8ball"
        },
        {
          "id": "aa918e17c8066cd3b031f490f0019c1a95afe7e3",
          "address": "two.8ball.info:26656",
          "provider": "8ball"
        },
        {
          "id": "ce168b8022e525650011352175fa020ce75edcfa",
          "address": "45.141.122.178:34656",
          "provider": "genznodes"
        },
        {
          "id": "49778546e7511a1cd6dde65805cd70547c75ce2b",
          "address": "rpc.8ball.nodexcapital.com:11056",
          "provider": "NodeX Validator"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.8ball.info/",
          "provider": "8ball"
        },
        {
          "address": "https://rpc.8ball.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://8ball-rpc.genznodes.dev/",
          "provider": "genznodes"
        },
        {
          "address": "https://rpc-8ball.comunitynode.my.id",
          "provider": "ComunityNode"
        },
        {
          "address": "https://rpc-8ball.nodine.id",
          "provider": "Nodine.ID"
        },
        {
          "address": "https://rpc.8ball.nodexcapital.com",
          "provider": "NodeX Validator"
        }
      ],
      "rest": [
        {
          "address": "https://rest.8ball.info",
          "provider": "8ball"
        },
        {
          "address": "https://api.8ball.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://8ball-api.genznodes.dev/",
          "provider": "genznodes"
        },
        {
          "address": "https://api-8ball.comunitynode.my.id",
          "provider": "ComunityNode"
        },
        {
          "address": "https://api-8ball.nodine.id/",
          "provider": "Nodine.ID"
        },
        {
          "address": "https://rest.8ball.nodexcapital.com",
          "provider": "NodeX Validator"
        }
      ],
      "grpc": [
        {
          "address": "grpc.8ball.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "8ball-grpc.genznodes.dev:31090",
          "provider": "genznodes"
        },
        {
          "address": "https://grpc.8ball.nodexcapital.com:443",
          "provider": "NodeX Validator"
        }
      ]
    },
    "explorers": [
      {
        "url": "https://explorer.8ball.info/",
        "tx_page": "https://explorer.8ball.info/8ball/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/8ball",
        "tx_page": "https://ping.pub/8ball/tx/${txHash}"
      },
      {
        "kind": "NodeStake Explorer",
        "url": "https://explorer.nodestake.top/8ball/",
        "tx_page": "https://explorer.nodestake.top/8ball/tx/${txHash}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/8ball",
        "tx_page": "https://explorer.tcnetwork.io/8ball/transaction/${txHash}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.co.id/8ball",
        "tx_page": "https://explorer.co.id/8ball/tx/${txHash}"
      },
      {
        "kind": "NODEXPLORER",
        "url": "https://explorer.nodexcapital.com/8ball",
        "tx_page": "https://explorer.nodexcapital.com/8ball/tx/${txHash}"
      }
    ]
  }
];
export default chains;
    