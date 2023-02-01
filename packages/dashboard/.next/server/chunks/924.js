exports.id = 924;
exports.ids = [924];
exports.modules = {

/***/ 6708:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5857, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6043, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4429, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2928, 23))

/***/ }),

/***/ 1954:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 828))

/***/ }),

/***/ 5572:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable @next/next/no-head-element */ /* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(2061);
module.exports = createProxy("/Users/alpha/Documents/GitHub/cosmos-tx-playground/packages/dashboard/app/layout.tsx");


/***/ }),

/***/ 828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: ../../.yarn/__virtual__/@emotion-react-virtual-3cb7b8210b/0/cache/@emotion-react-npm-11.10.5-98e2cdb553-32b67b28e9.zip/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.esm.js
var emotion_react_jsx_runtime_esm = __webpack_require__(3989);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ../../.yarn/__virtual__/jotai-virtual-bf09d46f21/0/cache/jotai-npm-1.13.1-1a4b1cff07-bc1f88ec1d.zip/node_modules/jotai/esm/index.mjs + 1 modules
var esm = __webpack_require__(2203);
;// CONCATENATED MODULE: ./atoms/accountAtom.ts

const accountAtom = (0,esm/* atom */.cn)([]);

// EXTERNAL MODULE: ./atoms/chainAtom.ts
var chainAtom = __webpack_require__(7237);
;// CONCATENATED MODULE: ./utils/assertFulfilled.ts
function assertFulfilled(item) {
    return item.status === "fulfilled";
}


// EXTERNAL MODULE: ./utils/keplr.ts + 1 modules
var utils_keplr = __webpack_require__(4311);
;// CONCATENATED MODULE: ./hooks/useAccountInitial.ts





const getAccountsFromKeplr = async (registeredChains)=>{
    try {
        const keplr = await (0,utils_keplr/* getKeplrFromWindow */.xP)();
        if (keplr !== undefined) {
            const settledAccounts = await Promise.allSettled(registeredChains.map(async (chain)=>{
                const key = await keplr.getKey(chain.chain_id);
                return key;
            }));
            const accounts = settledAccounts.filter(assertFulfilled).map((account)=>account.value);
            return accounts;
        }
        return null;
    } catch (e) {
        ;
        return null;
    }
};
const useAccountInitial = ()=>{
    const registeredChains = (0,esm/* useAtomValue */.Dv)(chainAtom/* registeredChainAtom */.jC);
    const setWalletAccount = (0,esm/* useSetAtom */.b9)(accountAtom);
    const accountInit = async ()=>{
        try {
            const accounts = await getAccountsFromKeplr(registeredChains);
            setWalletAccount(accounts);
        } catch (e) {
            ;
        }
    };
    return {
        accountInit
    };
};

;// CONCATENATED MODULE: ./hooks/useKeplrListener.ts


const useKeplrListener = ()=>{
    const { accountInit  } = useAccountInitial();
    (0,react_.useEffect)(()=>{
        const updateAccount = async ()=>{
            accountInit();
        };
        window.addEventListener("keplr_keystorechange", updateAccount);
        return ()=>{
            window.removeEventListener("keplr_keystorechange", updateAccount);
        };
    }, [
        accountInit
    ]);
};

// EXTERNAL MODULE: ./hooks/useChainInitial.ts
var useChainInitial = __webpack_require__(4580);
// EXTERNAL MODULE: ../../.yarn/__virtual__/@emotion-react-virtual-3cb7b8210b/0/cache/@emotion-react-npm-11.10.5-98e2cdb553-32b67b28e9.zip/node_modules/@emotion/react/dist/emotion-react.esm.js
var emotion_react_esm = __webpack_require__(446);
;// CONCATENATED MODULE: ./styles/normalize.ts

const normalize = emotion_react_esm/* css */.iv`
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
  }
  main {
    display: block;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  a {
    background-color: transparent;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }
`;

;// CONCATENATED MODULE: ./styles/globalStyles.tsx



const globalStyles = /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ(emotion_react_esm/* Global */.xB, {
    styles: emotion_react_esm/* css */.iv`
      ${normalize}
    `
});

// EXTERNAL MODULE: ../../.yarn/cache/@emotion-cache-npm-11.10.5-e5bc83f178-1dd2d9af2d.zip/node_modules/@emotion/cache/dist/emotion-cache.esm.js + 8 modules
var emotion_cache_esm = __webpack_require__(7355);
// EXTERNAL MODULE: ../../.yarn/__virtual__/@emotion-react-virtual-3cb7b8210b/0/cache/@emotion-react-npm-11.10.5-98e2cdb553-32b67b28e9.zip/node_modules/@emotion/react/dist/emotion-element-3838ba9e.esm.js
var emotion_element_3838ba9e_esm = __webpack_require__(4992);
;// CONCATENATED MODULE: ./app/layout.tsx
/* eslint-disable @next/next/no-head-element */ 







const cache = (0,emotion_cache_esm/* default */.Z)({
    key: "next"
});
function RootLayout({ children  }) {
    const { chainInfoInit  } = (0,useChainInitial/* useChainInitial */.u)();
    const { accountInit  } = useAccountInitial();
    (0,react_.useEffect)(()=>{
        chainInfoInit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react_.useEffect)(()=>{
        accountInit();
    }, [
        accountInit
    ]);
    useKeplrListener();
    return /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)("html", {
        children: [
            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ("head", {}),
            /*#__PURE__*/ emotion_react_jsx_runtime_esm/* jsx */.tZ("body", {
                children: /*#__PURE__*/ (0,emotion_react_jsx_runtime_esm/* jsxs */.BX)(emotion_element_3838ba9e_esm.C, {
                    value: cache,
                    children: [
                        globalStyles,
                        children
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 7237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ug": () => (/* binding */ unsupportedChainAtom),
/* harmony export */   "Ym": () => (/* binding */ unregisteredChainAtom),
/* harmony export */   "jC": () => (/* binding */ registeredChainAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2203);

const registeredChainAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__/* .atom */ .cn)([]);
const unregisteredChainAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__/* .atom */ .cn)([]);
const unsupportedChainAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__/* .atom */ .cn)([]);


/***/ }),

/***/ 4580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ useChainInitial)
/* harmony export */ });
/* harmony import */ var chain_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8106);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2203);
/* harmony import */ var _atoms_chainAtom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7237);
/* harmony import */ var _utils_keplr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4311);




const getWalletChainInfos = async ()=>{
    try {
        const keplr = await (0,_utils_keplr__WEBPACK_IMPORTED_MODULE_2__/* .getKeplrFromWindow */ .xP)();
        if (keplr !== undefined) {
            const walletChainInfos = await keplr.getChainInfosWithoutEndpoints();
            return walletChainInfos;
        }
        return undefined;
    } catch (e) {
        const error = e;
        if (!error.message.includes("Request rejected")) {
            ;
        }
    }
};
const separateChains = (walletChainInfos)=>chain_registry__WEBPACK_IMPORTED_MODULE_0__/* .chains.reduce */ .p5.reduce((acc, chain)=>{
        const [registered, unregistered, unsupported] = acc;
        const chainAssets = chain_registry__WEBPACK_IMPORTED_MODULE_0__/* .assets.find */ .Ll.find((asset)=>asset.chain_name === chain.chain_name)?.assets;
        const noRPC = chain.apis?.rpc?.[0].address === undefined;
        const noREST = chain.apis?.rest?.[0].address === undefined;
        const noAssets = chainAssets === undefined;
        if (walletChainInfos.find((info)=>info.chainId === chain.chain_id)) {
            registered.push(chain);
        } else if (noRPC || noREST || noAssets) {
            unsupported.push(chain);
        } else {
            unregistered.push(chain);
        }
        return acc;
    }, [
        [],
        [],
        []
    ]);
const useChainInitial = ()=>{
    const setRegisteredChains = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .useSetAtom */ .b9)(_atoms_chainAtom__WEBPACK_IMPORTED_MODULE_1__/* .registeredChainAtom */ .jC);
    const setUnregisteredChains = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .useSetAtom */ .b9)(_atoms_chainAtom__WEBPACK_IMPORTED_MODULE_1__/* .unregisteredChainAtom */ .Ym);
    const setUnsupportedChains = (0,jotai__WEBPACK_IMPORTED_MODULE_3__/* .useSetAtom */ .b9)(_atoms_chainAtom__WEBPACK_IMPORTED_MODULE_1__/* .unsupportedChainAtom */ .Ug);
    const chainInfoInit = async ()=>{
        const walletChainInfos = await getWalletChainInfos();
        if (walletChainInfos !== undefined) {
            const [registeredChains, unregisteredChains, unsupportedChains] = await separateChains(walletChainInfos);
            setRegisteredChains(registeredChains);
            setUnregisteredChains(unregisteredChains);
            setUnsupportedChains(unsupportedChains);
        }
    };
    return {
        chainInfoInit
    };
};


/***/ }),

/***/ 4311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "MF": () => (/* binding */ generateKeplrChainInfo),
  "xP": () => (/* binding */ getKeplrFromWindow),
  "Lf": () => (/* binding */ suggestChainFromWindow)
});

// EXTERNAL MODULE: ../../.yarn/cache/chain-registry-npm-1.6.1-5de3437364-c3124024e4.zip/node_modules/chain-registry/main/index.js
var main = __webpack_require__(8106);
;// CONCATENATED MODULE: ./utils/bech32Config.ts
const generateBech32Config = (mainPrefix)=>{
    const validatorPrefix = "val";
    const consensusPrefix = "cons";
    const publicPrefix = "pub";
    const operatorPrefix = "oper";
    return {
        bech32PrefixAccAddr: mainPrefix,
        bech32PrefixAccPub: mainPrefix + publicPrefix,
        bech32PrefixValAddr: mainPrefix + validatorPrefix + operatorPrefix,
        bech32PrefixValPub: mainPrefix + validatorPrefix + operatorPrefix + publicPrefix,
        bech32PrefixConsAddr: mainPrefix + validatorPrefix + consensusPrefix,
        bech32PrefixConsPub: mainPrefix + validatorPrefix + consensusPrefix + publicPrefix
    };
};

;// CONCATENATED MODULE: ./utils/keplr.ts


const getKeplrFromWindow = async ()=>{
    if (true) {
        return undefined;
    }
    if (window?.keplr) {
        return window.keplr;
    }
    if (document.readyState === "complete") {
        return window?.keplr;
    }
    return new Promise((resolve)=>{
        const documentStateChange = (event)=>{
            if (event.target && event.target.readyState === "complete") {
                resolve(window?.keplr);
                document.removeEventListener("readystatechange", documentStateChange);
            }
        };
        document.addEventListener("readystatechange", documentStateChange);
    });
};
async function suggestChainFromWindow(chainInfo) {
    if (false) {}
}
const generateKeplrChainInfo = (chain)=>{
    const chainAssets = main/* assets.find */.Ll.find((asset)=>asset.chain_name === chain.chain_name)?.assets;
    if (chainAssets === undefined) return undefined;
    const checkCoinDecimals = (denomUnits)=>{
        const doesntHaveMinimalDenom = denomUnits[1] === undefined;
        return doesntHaveMinimalDenom ? denomUnits[0].exponent : denomUnits[1].exponent;
    };
    const checkEmptyText = (text)=>{
        return text !== "" ? text : undefined;
    };
    const currencies = chainAssets.map((asset)=>({
            coinDenom: asset.display,
            coinMinimalDenom: asset.base,
            coinDecimals: checkCoinDecimals(asset.denom_units),
            coinGeckoId: checkEmptyText(asset.coingecko_id)
        }));
    const feeToken = chain.fees?.fee_tokens?.[0];
    const lowGasPrice = feeToken?.low_gas_price;
    const averageGasPrice = feeToken?.average_gas_price;
    const highGasPrice = feeToken?.high_gas_price;
    const fixedMinGasPrice = feeToken?.fixed_min_gas_price ?? 0;
    const gasPriceStep = {
        low: lowGasPrice ?? averageGasPrice ?? highGasPrice ?? fixedMinGasPrice,
        average: averageGasPrice ?? lowGasPrice ?? highGasPrice ?? fixedMinGasPrice,
        high: highGasPrice ?? lowGasPrice ?? averageGasPrice ?? fixedMinGasPrice
    };
    const feeCurrency = {
        ...currencies[0],
        ...gasPriceStep
    };
    const chainInfo = {
        rpc: chain.apis?.rpc?.[0].address ?? "",
        rest: chain.apis?.rest?.[0].address ?? "",
        chainId: chain.chain_id,
        chainName: chain.pretty_name,
        stakeCurrency: currencies[0],
        bip44: {
            coinType: chain.slip44
        },
        bech32Config: generateBech32Config(chain.bech32_prefix),
        currencies,
        feeCurrencies: [
            feeCurrency
        ]
    };
    return chainInfo;
};


/***/ })

};
;