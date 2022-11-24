// Automatically generated with Reach 0.1.12 (0b231964)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (0b231964)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      4: [ctc0, ctc1, ctc0],
      5: [ctc0, ctc1, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc3 = stdlib.T_Address;
  
  
  const v91 = stdlib.protect(ctc0, await interact.setPrice(), {
    at: './index.rsh:23:51:application',
    fs: ['at ./index.rsh:22:11:application call to [unknown function] (defined at: ./index.rsh:22:14:function exp)'],
    msg: 'setPrice',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v91],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:25:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v91, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v93], secs: v95, time: v94, didSend: v30, from: v92 } = txn1;
      
      sim_r.txns.push({
        amt: v93,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v93], secs: v95, time: v94, didSend: v30, from: v92 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v101], secs: v103, time: v102, didSend: v38, from: v100 } = txn2;
  ;
  let v104 = false;
  let v105 = v102;
  
  let txn3 = txn2;
  while (await (async () => {
    const v115 = v104 ? false : true;
    
    return v115;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v120], secs: v122, time: v121, didSend: v54, from: v119 } = txn4;
    ;
    const v123 = stdlib.addressEq(v100, v119);
    stdlib.assert(v123, {
      at: './index.rsh:41:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v126 = stdlib.protect(ctc1, await interact.decide(v120), {
      at: './index.rsh:46:54:application',
      fs: ['at ./index.rsh:45:15:application call to [unknown function] (defined at: ./index.rsh:45:18:function exp)'],
      msg: 'decide',
      who: 'Alice'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v92, v93, v100, v126],
      evt_cnt: 1,
      funcNum: 4,
      lct: v121,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:48:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v128], secs: v130, time: v129, didSend: v64, from: v127 } = txn5;
        
        ;
        const cv104 = v128;
        const cv105 = v129;
        
        await (async () => {
          const v104 = cv104;
          const v105 = cv105;
          
          if (await (async () => {
            const v115 = v104 ? false : true;
            
            return v115;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v100,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc3, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v128], secs: v130, time: v129, didSend: v64, from: v127 } = txn5;
    ;
    const v131 = stdlib.addressEq(v92, v127);
    stdlib.assert(v131, {
      at: './index.rsh:48:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const cv104 = v128;
    const cv105 = v129;
    
    v104 = cv104;
    v105 = cv105;
    
    txn3 = txn5;
    continue;
    
    
    
    }
  ;
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bool;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc3 = stdlib.T_Address;
  
  
  const v88 = stdlib.protect(ctc0, interact.accept, 'for Bob\'s interact field accept');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v93], secs: v95, time: v94, didSend: v30, from: v92 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v92, v93, v88],
    evt_cnt: 1,
    funcNum: 1,
    lct: v94,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:32:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v101], secs: v103, time: v102, didSend: v38, from: v100 } = txn2;
      
      ;
      const v104 = false;
      const v105 = v102;
      
      if (await (async () => {
        const v115 = v104 ? false : true;
        
        return v115;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v100,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v101], secs: v103, time: v102, didSend: v38, from: v100 } = txn2;
  ;
  let v104 = false;
  let v105 = v102;
  
  let txn3 = txn2;
  while (await (async () => {
    const v115 = v104 ? false : true;
    
    return v115;})()) {
    const v118 = stdlib.protect(ctc2, await interact.sendFortune(), {
      at: './index.rsh:39:60:application',
      fs: ['at ./index.rsh:38:15:application call to [unknown function] (defined at: ./index.rsh:38:18:function exp)'],
      msg: 'sendFortune',
      who: 'Bob'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v92, v93, v100, v118],
      evt_cnt: 1,
      funcNum: 3,
      lct: v105,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:41:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v120], secs: v122, time: v121, didSend: v54, from: v119 } = txn4;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc1, ctc3, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v120], secs: v122, time: v121, didSend: v54, from: v119 } = txn4;
    ;
    const v123 = stdlib.addressEq(v100, v119);
    stdlib.assert(v123, {
      at: './index.rsh:41:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v128], secs: v130, time: v129, didSend: v64, from: v127 } = txn5;
    ;
    const v131 = stdlib.addressEq(v92, v127);
    stdlib.assert(v131, {
      at: './index.rsh:48:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const cv104 = v128;
    const cv105 = v129;
    
    v104 = cv104;
    v105 = cv105;
    
    txn3 = txn5;
    continue;
    
    
    
    }
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAFAAEEBSAmAgEAACI1ADEYQQHrKWRJIls1AYEIWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0mBAwxAAKdJJAxAAEokEkQlNAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BRc1/oAE7ufoIjT+FlEHCFCwNP8xABJENP80AyEEWzQDVyggNP4yBkIA4EgkNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQRbNf5XKCA1/Uk1BTX8gARiekO4NPxQsDT9MQASRDT/NP4WUDT9UChLAVcASGdIJTUBMgY1AkIA4UkjDEAAPSMSRCM0ARJENARJIhJMNAISEUQoZDUDSTUFFzX/gAQPv8Y0NP8WUQcIULA0A1cAIDQDIQRbMQAiMgZCAEZIgaCNBogA6CI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsDT/iADCMQA0/xZQKEsBVwAoZ0gjNQEyBjUCQgBYNf81/jX9Nfw1+zT+QQATsSKyATT8sggjshA0/bIHs0IAGzT7NPwWUDT9UChLAVcASGdIJDUBMgY1AkIAGzEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v93",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v93",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v101",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T8",
                "name": "v120",
                "type": "tuple"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v128",
                "type": "bool"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v101",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T8",
                "name": "v120",
                "type": "tuple"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v128",
                "type": "bool"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000db338038062000db38339810160408190526200002691620001bf565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a1602081015151620000899034146007620000ef565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000e6926002929091019062000119565b5050506200029e565b81620001155760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001279062000261565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b6000818303604080821215620001d457600080fd5b80518082016001600160401b0380821183831017156200020457634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021e57600080fd5b8351945060208501915084821081831117156200024b57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200027657607f821691505b602082108114156200029857634e487b7160e01b600052602260045260246000fd5b50919050565b610b0580620002ae6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f57806383230757146100835780639a3e391214610098578063a98bf223146100ab578063ab53f2c6146100be578063f662edcc146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008f57600080fd5b50600154610070565b61005d6100a63660046108b1565b6100f4565b61005d6100b93660046108b1565b610281565b3480156100ca57600080fd5b506100d3610439565b60405161007a9291906108d4565b61005d6100ef366004610931565b6104d6565b61010460016000541460096106ba565b61011e8135158061011757506001548235145b600a6106ba565b60008080556002805461013090610943565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610943565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610994565b90507fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f491533836040516101f4929190610a24565b60405180910390a1610208341560086106ba565b6040805160a081018252600081830181815260608301829052608083018290528252825180840184528181526020808201839052808401918252855184516001600160a01b039091169052858101518451820152835133950194909452805191909152514392019190915261027c816106e3565b505050565b61029160056000541460116106ba565b6102ab813515806102a457506001548235145b60126106ba565b6000808055600280546102bd90610943565b80601f01602080910402602001604051908101604052809291908181526020018280546102e990610943565b80156103365780601f1061030b57610100808354040283529160200191610336565b820191906000526020600020905b81548152906001019060200180831161031957829003601f168201915b505050505080602001905181019061034e9190610a41565b90507f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b943383604051610381929190610a24565b60405180910390a16103953415600f6106ba565b80516103ad906001600160a01b0316331460106106ba565b6040805160a0810182526000818301818152606083018290526080830182905282528251808401845281815260208082019290925281830152835182516001600160a01b039182169052848201518351830152848401518351911690840152909161041d91908501908501610ab4565b6020808301805192151590925290514391015261027c816106e3565b60006060600054600280805461044e90610943565b80601f016020809104026020016040519081016040528092919081815260200182805461047a90610943565b80156104c75780601f1061049c576101008083540402835291602001916104c7565b820191906000526020600020905b8154815290600101906020018083116104aa57829003601f168201915b50505050509050915091509091565b6104e6600460005414600d6106ba565b610500813515806104f957506001548235145b600e6106ba565b60008080556002805461051290610943565b80601f016020809104026020016040519081016040528092919081815260200182805461053e90610943565b801561058b5780601f106105605761010080835404028352916020019161058b565b820191906000526020600020905b81548152906001019060200180831161056e57829003601f168201915b50505050508060200190518101906105a39190610a41565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201529091507fa36ef91336808a08b41f0a1d54d2c69d66104f8d893714b0c4667a15a935389a9060c00160405180910390a16106193415600b6106ba565b6040810151610634906001600160a01b03163314600c6106ba565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b039081168088528985015184528989015182168352600590955543600155875180850195909552915184880152511682840152845180830390930183526080909101909352805191926106b492600292909101906107ca565b50505050565b816106df5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6020810151511561074b57805160408082015160209092015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610731573d6000803e3d6000fd5b50600080805560018190556107489060029061084e565b50565b6040805160608082018352600080835260208084018281528486018381528751516001600160a01b03908116808852895185015184528951890151821683526004909555436001558751808501959095529151848801525116828401528451808303909301835260809091019093528051919261027c92600292909101905b8280546107d690610943565b90600052602060002090601f0160209004810192826107f8576000855561083e565b82601f1061081157805160ff191683800117855561083e565b8280016001018555821561083e579182015b8281111561083e578251825591602001919060010190610823565b5061084a929150610884565b5090565b50805461085a90610943565b6000825580601f1061086a575050565b601f01602090049060005260206000209081019061074891905b5b8082111561084a5760008155600101610885565b6000604082840312156108ab57600080fd5b50919050565b6000604082840312156108c357600080fd5b6108cd8383610899565b9392505050565b82815260006020604081840152835180604085015260005b81811015610908578581018301518582016060015282016108ec565b8181111561091a576000606083870101525b50601f01601f191692909201606001949350505050565b600060a082840312156108ab57600080fd5b600181811c9082168061095757607f821691505b602082108114156108ab57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461098f57600080fd5b919050565b6000604082840312156109a657600080fd5b6040516040810181811067ffffffffffffffff821117156109d757634e487b7160e01b600052604160045260246000fd5b6040526109e383610978565b8152602083015160208201528091505092915050565b8035801515811461098f57600080fd5b80358252610a19602082016109f9565b151560208301525050565b6001600160a01b0383168152606081016108cd6020830184610a09565b600060608284031215610a5357600080fd5b6040516060810181811067ffffffffffffffff82111715610a8457634e487b7160e01b600052604160045260246000fd5b604052610a9083610978565b815260208301516020820152610aa860408401610978565b60408201529392505050565b600060208284031215610ac657600080fd5b6108cd826109f956fea2646970667358221220232ace36dfc2b1513c1daa0aaf4237ce74f57a4e507f0618e7fb70d12c2561fd64736f6c634300080c0033`,
  BytecodeLen: 3507,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:27:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:55:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:37:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:42:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
