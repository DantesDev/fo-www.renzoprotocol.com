"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6141],
  {
    65025: function (e, t, n) {
      n.d(t, {
        V: function () {
          return r;
        },
      });
      var a = n(57437),
        i = n(16349);
      function r(e) {
        let { className: t, children: n, variant: r = "info" } = e;
        return (0, a.jsx)("span", {
          className: (0, i.cn)(
            "rounded-[4px] uppercase",
            {
              "dark:bg-colors-white-a20 bg-colors-black-a20 text-white text-[11px] px-1":
                "info" === r,
            },
            t
          ),
          children: n,
        });
      }
    },
    6359: function (e, t, n) {
      n.d(t, {
        O: function () {
          return r;
        },
      });
      var a = n(57437),
        i = n(16349);
      function r(e) {
        let { className: t, ...n } = e;
        return (0, a.jsx)("span", {
          className: (0, i.cn)(
            "bg-bg-dark/20 dark:bg-bg-light/20 inline-block animate-pulse rounded-md",
            t
          ),
          ...n,
        });
      }
    },
    84355: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return s;
        },
      });
      var a = n(16491),
        i = n(387);
      let r = i.TV[i.Wr.EIGEN].supportedChains[a.R.id].address,
        s = {
          ...i.TV[i.Wr.EIGEN],
          decimals: i.p8,
          chainId: a.R.id,
          address: r,
        };
    },
    70096: function (e, t, n) {
      n.d(t, {
        F: function () {
          return s;
        },
      });
      var a = n(16491),
        i = n(387);
      let r = i.TV[i.Wr.REN].supportedChains[a.R.id].address,
        s = { ...i.TV[i.Wr.REN], decimals: i.p8, chainId: a.R.id, address: r };
    },
    12075: function (e, t, n) {
      n.d(t, {
        _: function () {
          return s;
        },
      });
      var a = n(1850),
        i = n(387),
        r = n(1028);
      let s = (0, a._)({ chains: i.H5, ssr: !0, transports: r.g });
    },
    95872: function (e, t, n) {
      n.d(t, {
        E: function () {
          return a;
        },
      });
      let a = {
        ezETH: [
          { inputs: [], stateMutability: "nonpayable", type: "constructor" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint8",
                name: "version",
                type: "uint8",
              },
            ],
            name: "Initialized",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "burn",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
              },
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "addedValue", type: "uint256" },
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IRoleManager",
                name: "_roleManager",
                type: "address",
              },
            ],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "mint",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "roleManager",
            outputs: [
              {
                internalType: "contract IRoleManager",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        EzRVault: [
          {
            inputs: [
              {
                internalType: "contract IStrategyManager",
                name: "_strategyManager",
                type: "address",
              },
              {
                internalType: "contract IDelegationManager",
                name: "_delegationManager",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "_protocolFee",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "_protocolTreasury",
                type: "address",
              },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          { inputs: [], name: "DelegateAddressAlreadySet", type: "error" },
          { inputs: [], name: "EarlyClaim", type: "error" },
          { inputs: [], name: "InvalidFee", type: "error" },
          { inputs: [], name: "InvalidStrategy", type: "error" },
          { inputs: [], name: "InvalidTokenAmount", type: "error" },
          { inputs: [], name: "InvalidUnderlyingToken", type: "error" },
          { inputs: [], name: "InvalidWithdrawal", type: "error" },
          { inputs: [], name: "InvalidWithdrawalCooldown", type: "error" },
          { inputs: [], name: "InvalidZeroInput", type: "error" },
          { inputs: [], name: "UnAuthorizedClaimer", type: "error" },
          { inputs: [], name: "VaultNotDelegated", type: "error" },
          { inputs: [], name: "WithdrawalAlreadyCompleted", type: "error" },
          { inputs: [], name: "WithdrawalAlreadyTracked", type: "error" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "delegateAddress",
                type: "address",
              },
            ],
            name: "DelegationAddressUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                components: [
                  { internalType: "address", name: "staker", type: "address" },
                  {
                    internalType: "address",
                    name: "delegatedTo",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "withdrawer",
                    type: "address",
                  },
                  { internalType: "uint256", name: "nonce", type: "uint256" },
                  {
                    internalType: "uint32",
                    name: "startBlock",
                    type: "uint32",
                  },
                  {
                    internalType: "contract IStrategy[]",
                    name: "strategies",
                    type: "address[]",
                  },
                  {
                    internalType: "uint256[]",
                    name: "shares",
                    type: "uint256[]",
                  },
                ],
                indexed: !1,
                internalType: "struct IDelegationManager.Withdrawal",
                name: "",
                type: "tuple",
              },
            ],
            name: "EmergencyWithdrawalCompleted",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                components: [
                  { internalType: "address", name: "staker", type: "address" },
                  {
                    internalType: "address",
                    name: "delegatedTo",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "withdrawer",
                    type: "address",
                  },
                  { internalType: "uint256", name: "nonce", type: "uint256" },
                  {
                    internalType: "uint32",
                    name: "startBlock",
                    type: "uint32",
                  },
                  {
                    internalType: "contract IStrategy[]",
                    name: "strategies",
                    type: "address[]",
                  },
                  {
                    internalType: "uint256[]",
                    name: "shares",
                    type: "uint256[]",
                  },
                ],
                indexed: !1,
                internalType: "struct IDelegationManager.Withdrawal",
                name: "",
                type: "tuple",
              },
            ],
            name: "EmergencyWithdrawalTracked",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint8",
                name: "version",
                type: "uint8",
              },
            ],
            name: "Initialized",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "oldVaultCooldown",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newVaultCooldown",
                type: "uint256",
              },
            ],
            name: "VaultCooldownUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "bytes32",
                name: "withdrawalRoot",
                type: "bytes32",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "withdrawer",
                type: "address",
              },
              {
                components: [
                  { internalType: "address", name: "staker", type: "address" },
                  {
                    internalType: "address",
                    name: "delegatedTo",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "withdrawer",
                    type: "address",
                  },
                  { internalType: "uint256", name: "nonce", type: "uint256" },
                  {
                    internalType: "uint32",
                    name: "startBlock",
                    type: "uint32",
                  },
                  {
                    internalType: "contract IStrategy[]",
                    name: "strategies",
                    type: "address[]",
                  },
                  {
                    internalType: "uint256[]",
                    name: "shares",
                    type: "uint256[]",
                  },
                ],
                indexed: !1,
                internalType: "struct IDelegationManager.Withdrawal",
                name: "",
                type: "tuple",
              },
            ],
            name: "WithdrawRequestClaimed",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "bytes32",
                name: "withdrawRoot",
                type: "bytes32",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "staker",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "delegatedTo",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "withdrawer",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "nonce",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "startBlock",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "contract IStrategy[]",
                name: "strategies",
                type: "address[]",
              },
              {
                indexed: !1,
                internalType: "uint256[]",
                name: "shares",
                type: "uint256[]",
              },
            ],
            name: "WithdrawStarted",
            type: "event",
          },
          {
            inputs: [],
            name: "BASIS_POINTS",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  { internalType: "address", name: "staker", type: "address" },
                  {
                    internalType: "address",
                    name: "delegatedTo",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "withdrawer",
                    type: "address",
                  },
                  { internalType: "uint256", name: "nonce", type: "uint256" },
                  {
                    internalType: "uint32",
                    name: "startBlock",
                    type: "uint32",
                  },
                  {
                    internalType: "contract IStrategy[]",
                    name: "strategies",
                    type: "address[]",
                  },
                  {
                    internalType: "uint256[]",
                    name: "shares",
                    type: "uint256[]",
                  },
                ],
                internalType: "struct IDelegationManager.Withdrawal",
                name: "withdrawal",
                type: "tuple",
              },
            ],
            name: "claim",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  { internalType: "address", name: "staker", type: "address" },
                  {
                    internalType: "address",
                    name: "delegatedTo",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "withdrawer",
                    type: "address",
                  },
                  { internalType: "uint256", name: "nonce", type: "uint256" },
                  {
                    internalType: "uint32",
                    name: "startBlock",
                    type: "uint32",
                  },
                  {
                    internalType: "contract IStrategy[]",
                    name: "strategies",
                    type: "address[]",
                  },
                  {
                    internalType: "uint256[]",
                    name: "shares",
                    type: "uint256[]",
                  },
                ],
                internalType: "struct IDelegationManager.Withdrawal",
                name: "withdrawal",
                type: "tuple",
              },
            ],
            name: "completeEmergencyTrackedWithdrawal",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "cooldownBlocks",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
              },
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "delegateAddress",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "delegationManager",
            outputs: [
              {
                internalType: "contract IDelegationManager",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "tokenAmount", type: "uint256" },
            ],
            name: "deposit",
            outputs: [
              { internalType: "uint256", name: "shares", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  { internalType: "address", name: "staker", type: "address" },
                  {
                    internalType: "address",
                    name: "delegatedTo",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "withdrawer",
                    type: "address",
                  },
                  { internalType: "uint256", name: "nonce", type: "uint256" },
                  {
                    internalType: "uint32",
                    name: "startBlock",
                    type: "uint32",
                  },
                  {
                    internalType: "contract IStrategy[]",
                    name: "strategies",
                    type: "address[]",
                  },
                  {
                    internalType: "uint256[]",
                    name: "shares",
                    type: "uint256[]",
                  },
                ],
                internalType: "struct IDelegationManager.Withdrawal",
                name: "withdrawal",
                type: "tuple",
              },
            ],
            name: "emergencyTrackQueuedWithdrawal",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            name: "emergencyWithdrawal",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getRate",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getUnderlyingBalanceFromStrategy",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "addedValue", type: "uint256" },
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "string", name: "_name", type: "string" },
              { internalType: "string", name: "_symbol", type: "string" },
              {
                internalType: "contract IERC20",
                name: "_underlying",
                type: "address",
              },
              {
                internalType: "contract IStrategy",
                name: "_strategy",
                type: "address",
              },
              { internalType: "address", name: "vaultOwner", type: "address" },
              {
                internalType: "uint256",
                name: "_cooldownBlocks",
                type: "uint256",
              },
              { internalType: "uint256", name: "_vaultFee", type: "uint256" },
              {
                internalType: "address",
                name: "_vaultFeeDestination",
                type: "address",
              },
              {
                internalType: "address",
                name: "_rewardsDestination",
                type: "address",
              },
            ],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "protocolFee",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "protocolTreasury",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "queuedShares",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            name: "queuedWithdrawal",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_cooldownBlocks",
                type: "uint256",
              },
            ],
            name: "setCooldownBlocks",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_delegateAddress",
                type: "address",
              },
              {
                components: [
                  { internalType: "bytes", name: "signature", type: "bytes" },
                  { internalType: "uint256", name: "expiry", type: "uint256" },
                ],
                internalType: "struct ISignatureUtils.SignatureWithExpiry",
                name: "approverSignatureAndExpiry",
                type: "tuple",
              },
              {
                internalType: "bytes32",
                name: "approverSalt",
                type: "bytes32",
              },
            ],
            name: "setDelegateAddress",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "strategyManager",
            outputs: [
              {
                internalType: "contract IStrategyManager",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "underlyingDecimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "tokenAmount", type: "uint256" },
            ],
            name: "withdraw",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            name: "withdrawRequest",
            outputs: [
              { internalType: "address", name: "withdrawer", type: "address" },
              {
                internalType: "uint256",
                name: "lpTokenAmountLocked",
                type: "uint256",
              },
              { internalType: "uint256", name: "createdAt", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        pzETH: [
          {
            inputs: [
              { internalType: "string", name: "name_", type: "string" },
              { internalType: "string", name: "symbol_", type: "string" },
              { internalType: "address", name: "admin", type: "address" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          { inputs: [], name: "AccessControlBadConfirmation", type: "error" },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
              { internalType: "bytes32", name: "neededRole", type: "bytes32" },
            ],
            name: "AccessControlUnauthorizedAccount",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "target", type: "address" },
            ],
            name: "AddressEmptyCode",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "AddressInsufficientBalance",
            type: "error",
          },
          { inputs: [], name: "AddressZero", type: "error" },
          { inputs: [], name: "AlreadyAdded", type: "error" },
          { inputs: [], name: "Deadline", type: "error" },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "allowance", type: "uint256" },
              { internalType: "uint256", name: "needed", type: "uint256" },
            ],
            name: "ERC20InsufficientAllowance",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "uint256", name: "balance", type: "uint256" },
              { internalType: "uint256", name: "needed", type: "uint256" },
            ],
            name: "ERC20InsufficientBalance",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "approver", type: "address" },
            ],
            name: "ERC20InvalidApprover",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "receiver", type: "address" },
            ],
            name: "ERC20InvalidReceiver",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
            ],
            name: "ERC20InvalidSender",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "ERC20InvalidSpender",
            type: "error",
          },
          { inputs: [], name: "FailedInnerCall", type: "error" },
          { inputs: [], name: "Forbidden", type: "error" },
          { inputs: [], name: "InsufficientAmount", type: "error" },
          { inputs: [], name: "InsufficientLpAmount", type: "error" },
          { inputs: [], name: "InvalidLength", type: "error" },
          { inputs: [], name: "InvalidState", type: "error" },
          { inputs: [], name: "InvalidToken", type: "error" },
          { inputs: [], name: "LimitOverflow", type: "error" },
          { inputs: [], name: "NonZeroValue", type: "error" },
          { inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
            ],
            name: "SafeERC20FailedOperation",
            type: "error",
          },
          { inputs: [], name: "ValueZero", type: "error" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
              {
                indexed: !1,
                internalType: "bool",
                name: "success",
                type: "bool",
              },
              {
                indexed: !1,
                internalType: "bytes",
                name: "response",
                type: "bytes",
              },
            ],
            name: "DelegateCall",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "lpAmount",
                type: "uint256",
              },
            ],
            name: "Deposit",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "callback",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "lpAmount",
                type: "uint256",
              },
            ],
            name: "DepositCallback",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                components: [
                  { internalType: "address", name: "to", type: "address" },
                  {
                    internalType: "uint256",
                    name: "lpAmount",
                    type: "uint256",
                  },
                  {
                    internalType: "bytes32",
                    name: "tokensHash",
                    type: "bytes32",
                  },
                  {
                    internalType: "uint256[]",
                    name: "minAmounts",
                    type: "uint256[]",
                  },
                  {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "timestamp",
                    type: "uint256",
                  },
                ],
                indexed: !1,
                internalType: "struct IVault.WithdrawalRequest",
                name: "request",
                type: "tuple",
              },
              {
                indexed: !1,
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]",
              },
            ],
            name: "EmergencyWithdrawal",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
              {
                indexed: !1,
                internalType: "bool",
                name: "success",
                type: "bool",
              },
              {
                indexed: !1,
                internalType: "bytes",
                name: "response",
                type: "bytes",
              },
            ],
            name: "ExternalCall",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
              },
              {
                indexed: !0,
                internalType: "bytes32",
                name: "previousAdminRole",
                type: "bytes32",
              },
              {
                indexed: !0,
                internalType: "bytes32",
                name: "newAdminRole",
                type: "bytes32",
              },
            ],
            name: "RoleAdminChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address",
              },
            ],
            name: "RoleGranted",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address",
              },
            ],
            name: "RoleRevoked",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "token",
                type: "address",
              },
            ],
            name: "TokenAdded",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "token",
                type: "address",
              },
            ],
            name: "TokenRemoved",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "module",
                type: "address",
              },
            ],
            name: "TvlModuleAdded",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "module",
                type: "address",
              },
            ],
            name: "TvlModuleRemoved",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "callback",
                type: "address",
              },
            ],
            name: "WithdrawCallback",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "origin",
                type: "address",
              },
            ],
            name: "WithdrawalRequestCanceled",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                components: [
                  { internalType: "address", name: "to", type: "address" },
                  {
                    internalType: "uint256",
                    name: "lpAmount",
                    type: "uint256",
                  },
                  {
                    internalType: "bytes32",
                    name: "tokensHash",
                    type: "bytes32",
                  },
                  {
                    internalType: "uint256[]",
                    name: "minAmounts",
                    type: "uint256[]",
                  },
                  {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "timestamp",
                    type: "uint256",
                  },
                ],
                indexed: !1,
                internalType: "struct IVault.WithdrawalRequest",
                name: "request",
                type: "tuple",
              },
            ],
            name: "WithdrawalRequested",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address[]",
                name: "users",
                type: "address[]",
              },
              {
                indexed: !1,
                internalType: "bool[]",
                name: "statuses",
                type: "bool[]",
              },
            ],
            name: "WithdrawalsProcessed",
            type: "event",
          },
          {
            inputs: [],
            name: "ADMIN_DELEGATE_ROLE",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "ADMIN_ROLE",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "D9",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "DEFAULT_ADMIN_ROLE",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "OPERATOR",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "Q96",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
            ],
            name: "addToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "module", type: "address" },
            ],
            name: "addTvlModule",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  {
                    internalType: "address[]",
                    name: "tokens",
                    type: "address[]",
                  },
                  {
                    internalType: "uint128[]",
                    name: "ratiosX96",
                    type: "uint128[]",
                  },
                  {
                    internalType: "uint256[]",
                    name: "erc20Balances",
                    type: "uint256[]",
                  },
                  {
                    internalType: "uint256",
                    name: "totalSupply",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "totalValue",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "ratiosX96Value",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "timestamp",
                    type: "uint256",
                  },
                  { internalType: "uint256", name: "feeD9", type: "uint256" },
                  {
                    internalType: "bytes32",
                    name: "tokensHash",
                    type: "bytes32",
                  },
                ],
                internalType: "struct IVault.ProcessWithdrawalsStack",
                name: "s",
                type: "tuple",
              },
              {
                components: [
                  { internalType: "address", name: "to", type: "address" },
                  {
                    internalType: "uint256",
                    name: "lpAmount",
                    type: "uint256",
                  },
                  {
                    internalType: "bytes32",
                    name: "tokensHash",
                    type: "bytes32",
                  },
                  {
                    internalType: "uint256[]",
                    name: "minAmounts",
                    type: "uint256[]",
                  },
                  {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "timestamp",
                    type: "uint256",
                  },
                ],
                internalType: "struct IVault.WithdrawalRequest",
                name: "request",
                type: "tuple",
              },
            ],
            name: "analyzeRequest",
            outputs: [
              { internalType: "bool", name: "", type: "bool" },
              { internalType: "bool", name: "", type: "bool" },
              {
                internalType: "uint256[]",
                name: "expectedAmounts",
                type: "uint256[]",
              },
            ],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "baseTvl",
            outputs: [
              { internalType: "address[]", name: "tokens", type: "address[]" },
              { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "calculateStack",
            outputs: [
              {
                components: [
                  {
                    internalType: "address[]",
                    name: "tokens",
                    type: "address[]",
                  },
                  {
                    internalType: "uint128[]",
                    name: "ratiosX96",
                    type: "uint128[]",
                  },
                  {
                    internalType: "uint256[]",
                    name: "erc20Balances",
                    type: "uint256[]",
                  },
                  {
                    internalType: "uint256",
                    name: "totalSupply",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "totalValue",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "ratiosX96Value",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "timestamp",
                    type: "uint256",
                  },
                  { internalType: "uint256", name: "feeD9", type: "uint256" },
                  {
                    internalType: "bytes32",
                    name: "tokensHash",
                    type: "bytes32",
                  },
                ],
                internalType: "struct IVault.ProcessWithdrawalsStack",
                name: "s",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "cancelWithdrawalRequest",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "configurator",
            outputs: [
              {
                internalType: "contract IVaultConfigurator",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "bytes", name: "data", type: "bytes" },
            ],
            name: "delegateCall",
            outputs: [
              { internalType: "bool", name: "success", type: "bool" },
              { internalType: "bytes", name: "response", type: "bytes" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
              { internalType: "uint256", name: "minLpAmount", type: "uint256" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "deposit",
            outputs: [
              {
                internalType: "uint256[]",
                name: "actualAmounts",
                type: "uint256[]",
              },
              { internalType: "uint256", name: "lpAmount", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256[]",
                name: "minAmounts",
                type: "uint256[]",
              },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "emergencyWithdraw",
            outputs: [
              {
                internalType: "uint256[]",
                name: "actualAmounts",
                type: "uint256[]",
              },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "bytes", name: "data", type: "bytes" },
            ],
            name: "externalCall",
            outputs: [
              { internalType: "bool", name: "success", type: "bool" },
              { internalType: "bytes", name: "response", type: "bytes" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "role", type: "bytes32" },
            ],
            name: "getRoleAdmin",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "role", type: "bytes32" },
              { internalType: "uint256", name: "index", type: "uint256" },
            ],
            name: "getRoleMember",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "role", type: "bytes32" },
            ],
            name: "getRoleMemberCount",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "role", type: "bytes32" },
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "grantRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "role", type: "bytes32" },
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "hasRole",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
            ],
            name: "isAdmin",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
            ],
            name: "isOperator",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
            ],
            name: "isUnderlyingToken",
            outputs: [
              { internalType: "bool", name: "isUnderlying", type: "bool" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "limit", type: "uint256" },
              { internalType: "uint256", name: "offset", type: "uint256" },
            ],
            name: "pendingWithdrawers",
            outputs: [
              { internalType: "address[]", name: "result", type: "address[]" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "pendingWithdrawers",
            outputs: [
              { internalType: "address[]", name: "", type: "address[]" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "pendingWithdrawersCount",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address[]", name: "users", type: "address[]" },
            ],
            name: "processWithdrawals",
            outputs: [
              { internalType: "bool[]", name: "statuses", type: "bool[]" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "lpAmount", type: "uint256" },
              {
                internalType: "uint256[]",
                name: "minAmounts",
                type: "uint256[]",
              },
              { internalType: "uint256", name: "deadline", type: "uint256" },
              {
                internalType: "uint256",
                name: "requestDeadline",
                type: "uint256",
              },
              { internalType: "bool", name: "closePrevious", type: "bool" },
            ],
            name: "registerWithdrawal",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
            ],
            name: "removeToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "module", type: "address" },
            ],
            name: "removeTvlModule",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "role", type: "bytes32" },
              {
                internalType: "address",
                name: "callerConfirmation",
                type: "address",
              },
            ],
            name: "renounceRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
            ],
            name: "requireAdmin",
            outputs: [],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
            ],
            name: "requireAtLeastOperator",
            outputs: [],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "role", type: "bytes32" },
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "revokeRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes4", name: "interfaceId", type: "bytes4" },
            ],
            name: "supportsInterface",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "tvlModules",
            outputs: [
              { internalType: "address[]", name: "", type: "address[]" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "underlyingTokens",
            outputs: [
              { internalType: "address[]", name: "", type: "address[]" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "underlyingTvl",
            outputs: [
              { internalType: "address[]", name: "tokens", type: "address[]" },
              { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
            ],
            name: "withdrawalRequest",
            outputs: [
              {
                components: [
                  { internalType: "address", name: "to", type: "address" },
                  {
                    internalType: "uint256",
                    name: "lpAmount",
                    type: "uint256",
                  },
                  {
                    internalType: "bytes32",
                    name: "tokensHash",
                    type: "bytes32",
                  },
                  {
                    internalType: "uint256[]",
                    name: "minAmounts",
                    type: "uint256[]",
                  },
                  {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "timestamp",
                    type: "uint256",
                  },
                ],
                internalType: "struct IVault.WithdrawalRequest",
                name: "",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          { stateMutability: "payable", type: "receive" },
        ],
        pzETHDepositWrapper: [
          {
            inputs: [
              {
                internalType: "contract IVault",
                name: "vault_",
                type: "address",
              },
              { internalType: "address", name: "weth_", type: "address" },
              { internalType: "address", name: "steth_", type: "address" },
              { internalType: "address", name: "wsteth_", type: "address" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              { internalType: "address", name: "target", type: "address" },
            ],
            name: "AddressEmptyCode",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "AddressInsufficientBalance",
            type: "error",
          },
          { inputs: [], name: "AddressZero", type: "error" },
          { inputs: [], name: "FailedInnerCall", type: "error" },
          { inputs: [], name: "InvalidAmount", type: "error" },
          { inputs: [], name: "InvalidSender", type: "error" },
          { inputs: [], name: "InvalidToken", type: "error" },
          { inputs: [], name: "InvalidTokenList", type: "error" },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
            ],
            name: "SafeERC20FailedOperation",
            type: "error",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "lpAmount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
              },
            ],
            name: "DepositWrapperDeposit",
            type: "event",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "address", name: "token", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
              { internalType: "uint256", name: "minLpAmount", type: "uint256" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "deposit",
            outputs: [
              { internalType: "uint256", name: "lpAmount", type: "uint256" },
            ],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [],
            name: "steth",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "vault",
            outputs: [
              { internalType: "contract IVault", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "weth",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "wsteth",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          { stateMutability: "payable", type: "receive" },
        ],
        pzETHOracle: [
          {
            inputs: [
              {
                internalType: "contract IVault",
                name: "vault_",
                type: "address",
              },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          { inputs: [], name: "MathOverflowedMulDiv", type: "error" },
          {
            inputs: [],
            name: "D18",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "baseToken",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "description",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getRate",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "latestRoundData",
            outputs: [
              { internalType: "uint80", name: "roundId", type: "uint80" },
              { internalType: "int256", name: "answer", type: "int256" },
              { internalType: "uint256", name: "startedAt", type: "uint256" },
              { internalType: "uint256", name: "updatedAt", type: "uint256" },
              {
                internalType: "uint80",
                name: "answeredInRound",
                type: "uint80",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "vault",
            outputs: [
              { internalType: "contract IVault", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "version",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
        ],
        chainlinkOracle: [
          { inputs: [], name: "AddressZero", type: "error" },
          { inputs: [], name: "Forbidden", type: "error" },
          { inputs: [], name: "InvalidLength", type: "error" },
          { inputs: [], name: "InvalidOracleData", type: "error" },
          { inputs: [], name: "StaleOracle", type: "error" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "vault",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "baseToken",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
              },
            ],
            name: "ChainlinkOracleSetBaseToken",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "vault",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "address[]",
                name: "tokens",
                type: "address[]",
              },
              {
                components: [
                  {
                    internalType: "address",
                    name: "aggregatorV3",
                    type: "address",
                  },
                  { internalType: "uint256", name: "maxAge", type: "uint256" },
                ],
                indexed: !1,
                internalType: "struct IChainlinkOracle.AggregatorData[]",
                name: "aggregatorsData",
                type: "tuple[]",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
              },
            ],
            name: "ChainlinkOracleSetChainlinkOracles",
            type: "event",
          },
          {
            inputs: [],
            name: "Q96",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "vault", type: "address" },
              { internalType: "address", name: "token", type: "address" },
            ],
            name: "aggregatorsData",
            outputs: [
              {
                components: [
                  {
                    internalType: "address",
                    name: "aggregatorV3",
                    type: "address",
                  },
                  { internalType: "uint256", name: "maxAge", type: "uint256" },
                ],
                internalType: "struct IChainlinkOracle.AggregatorData",
                name: "",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "baseTokens",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "vault", type: "address" },
              { internalType: "address", name: "token", type: "address" },
            ],
            name: "getPrice",
            outputs: [
              { internalType: "uint256", name: "answer", type: "uint256" },
              { internalType: "uint8", name: "decimals", type: "uint8" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "vault", type: "address" },
              { internalType: "address", name: "token", type: "address" },
            ],
            name: "priceX96",
            outputs: [
              { internalType: "uint256", name: "priceX96_", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "vault", type: "address" },
              { internalType: "address", name: "baseToken", type: "address" },
            ],
            name: "setBaseToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "vault", type: "address" },
              { internalType: "address[]", name: "tokens", type: "address[]" },
              {
                components: [
                  {
                    internalType: "address",
                    name: "aggregatorV3",
                    type: "address",
                  },
                  { internalType: "uint256", name: "maxAge", type: "uint256" },
                ],
                internalType: "struct IChainlinkOracle.AggregatorData[]",
                name: "data_",
                type: "tuple[]",
              },
            ],
            name: "setChainlinkOracles",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        RestakeManager: [
          { inputs: [], stateMutability: "nonpayable", type: "constructor" },
          { inputs: [], name: "AlreadyAdded", type: "error" },
          { inputs: [], name: "ContractPaused", type: "error" },
          {
            inputs: [
              { internalType: "uint8", name: "expected", type: "uint8" },
              { internalType: "uint8", name: "actual", type: "uint8" },
            ],
            name: "InvalidTokenDecimals",
            type: "error",
          },
          { inputs: [], name: "InvalidZeroInput", type: "error" },
          { inputs: [], name: "MaxTVLReached", type: "error" },
          { inputs: [], name: "MaxTokenTVLReached", type: "error" },
          { inputs: [], name: "NotDepositQueue", type: "error" },
          { inputs: [], name: "NotDepositWithdrawPauser", type: "error" },
          { inputs: [], name: "NotFound", type: "error" },
          { inputs: [], name: "NotRestakeManagerAdmin", type: "error" },
          { inputs: [], name: "OverMaxBasisPoints", type: "error" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "contract IERC20",
                name: "token",
                type: "address",
              },
            ],
            name: "CollateralTokenAdded",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "contract IERC20",
                name: "token",
                type: "address",
              },
            ],
            name: "CollateralTokenRemoved",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "contract IERC20",
                name: "token",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "tvl",
                type: "uint256",
              },
            ],
            name: "CollateralTokenTvlUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "depositor",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "contract IERC20",
                name: "token",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "ezETHMinted",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "referralId",
                type: "uint256",
              },
            ],
            name: "Deposit",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint8",
                name: "version",
                type: "uint8",
              },
            ],
            name: "Initialized",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "contract IOperatorDelegator",
                name: "od",
                type: "address",
              },
            ],
            name: "OperatorDelegatorAdded",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "contract IOperatorDelegator",
                name: "od",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "allocation",
                type: "uint256",
              },
            ],
            name: "OperatorDelegatorAllocationUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "contract IOperatorDelegator",
                name: "od",
                type: "address",
              },
            ],
            name: "OperatorDelegatorRemoved",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "bytes32",
                name: "withdrawalRoot",
                type: "bytes32",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "withdrawer",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "contract IERC20",
                name: "token",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "ezETHBurned",
                type: "uint256",
              },
            ],
            name: "UserWithdrawCompleted",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "bytes32",
                name: "withdrawalRoot",
                type: "bytes32",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "withdrawer",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "contract IERC20",
                name: "token",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "ezETHToBurn",
                type: "uint256",
              },
            ],
            name: "UserWithdrawStarted",
            type: "event",
          },
          {
            inputs: [
              {
                internalType: "contract IERC20",
                name: "_newCollateralToken",
                type: "address",
              },
            ],
            name: "addCollateralToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IOperatorDelegator",
                name: "_newOperatorDelegator",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "_allocationBasisPoints",
                type: "uint256",
              },
            ],
            name: "addOperatorDelegator",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "calculateTVLs",
            outputs: [
              { internalType: "uint256[][]", name: "", type: "uint256[][]" },
              { internalType: "uint256[]", name: "", type: "uint256[]" },
              { internalType: "uint256", name: "", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256[]", name: "tvls", type: "uint256[]" },
              { internalType: "uint256", name: "totalTVL", type: "uint256" },
            ],
            name: "chooseOperatorDelegatorForDeposit",
            outputs: [
              {
                internalType: "contract IOperatorDelegator",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "tokenIndex", type: "uint256" },
              { internalType: "uint256", name: "ezETHValue", type: "uint256" },
              {
                internalType: "uint256[][]",
                name: "operatorDelegatorTokenTVLs",
                type: "uint256[][]",
              },
              {
                internalType: "uint256[]",
                name: "operatorDelegatorTVLs",
                type: "uint256[]",
              },
              { internalType: "uint256", name: "totalTVL", type: "uint256" },
            ],
            name: "chooseOperatorDelegatorForWithdraw",
            outputs: [
              {
                internalType: "contract IOperatorDelegator",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "contract IERC20", name: "", type: "address" },
            ],
            name: "collateralTokenTvlLimits",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            name: "collateralTokens",
            outputs: [
              { internalType: "contract IERC20", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "delegationManager",
            outputs: [
              {
                internalType: "contract IDelegationManager",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IERC20",
                name: "_collateralToken",
                type: "address",
              },
              { internalType: "uint256", name: "_amount", type: "uint256" },
              { internalType: "uint256", name: "_referralId", type: "uint256" },
            ],
            name: "deposit",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IERC20",
                name: "_collateralToken",
                type: "address",
              },
              { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "deposit",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_referralId", type: "uint256" },
            ],
            name: "depositETH",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [],
            name: "depositETH",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [],
            name: "depositQueue",
            outputs: [
              {
                internalType: "contract IDepositQueue",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IERC20",
                name: "_token",
                type: "address",
              },
              { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "depositTokenRewardsFromProtocol",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "ezETH",
            outputs: [
              {
                internalType: "contract IEzEthToken",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IERC20",
                name: "_collateralToken",
                type: "address",
              },
            ],
            name: "getCollateralTokenIndex",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getCollateralTokensLength",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getOperatorDelegatorsLength",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getTotalRewardsEarned",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IRoleManager",
                name: "_roleManager",
                type: "address",
              },
              {
                internalType: "contract IEzEthToken",
                name: "_ezETH",
                type: "address",
              },
              {
                internalType: "contract IRenzoOracle",
                name: "_renzoOracle",
                type: "address",
              },
              {
                internalType: "contract IStrategyManager",
                name: "_strategyManager",
                type: "address",
              },
              {
                internalType: "contract IDelegationManager",
                name: "_delegationManager",
                type: "address",
              },
              {
                internalType: "contract IDepositQueue",
                name: "_depositQueue",
                type: "address",
              },
            ],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "maxDepositTVL",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IOperatorDelegator",
                name: "",
                type: "address",
              },
            ],
            name: "operatorDelegatorAllocations",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            name: "operatorDelegators",
            outputs: [
              {
                internalType: "contract IOperatorDelegator",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "paused",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            name: "pendingWithdrawals",
            outputs: [
              { internalType: "uint256", name: "ezETHToBurn", type: "uint256" },
              { internalType: "address", name: "withdrawer", type: "address" },
              {
                internalType: "contract IERC20",
                name: "tokenToWithdraw",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenAmountToWithdraw",
                type: "uint256",
              },
              {
                internalType: "contract IOperatorDelegator",
                name: "operatorDelegator",
                type: "address",
              },
              { internalType: "bool", name: "completed", type: "bool" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IERC20",
                name: "_collateralTokenToRemove",
                type: "address",
              },
            ],
            name: "removeCollateralToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IOperatorDelegator",
                name: "_operatorDelegatorToRemove",
                type: "address",
              },
            ],
            name: "removeOperatorDelegator",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "renzoOracle",
            outputs: [
              {
                internalType: "contract IRenzoOracle",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "roleManager",
            outputs: [
              {
                internalType: "contract IRoleManager",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_maxDepositTVL",
                type: "uint256",
              },
            ],
            name: "setMaxDepositTVL",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IOperatorDelegator",
                name: "_operatorDelegator",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "_allocationBasisPoints",
                type: "uint256",
              },
            ],
            name: "setOperatorDelegatorAllocation",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "bool", name: "_paused", type: "bool" }],
            name: "setPaused",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IERC20",
                name: "_token",
                type: "address",
              },
              { internalType: "uint256", name: "_limit", type: "uint256" },
            ],
            name: "setTokenTvlLimit",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IOperatorDelegator",
                name: "operatorDelegator",
                type: "address",
              },
              { internalType: "bytes", name: "pubkey", type: "bytes" },
              { internalType: "bytes", name: "signature", type: "bytes" },
              {
                internalType: "bytes32",
                name: "depositDataRoot",
                type: "bytes32",
              },
            ],
            name: "stakeEthInOperatorDelegator",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [],
            name: "strategyManager",
            outputs: [
              {
                internalType: "contract IStrategyManager",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        stETH: [
          {
            constant: !1,
            inputs: [],
            name: "resume",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "name",
            outputs: [{ name: "", type: "string" }],
            payable: !1,
            stateMutability: "pure",
            type: "function",
          },
          {
            constant: !1,
            inputs: [],
            name: "stop",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "hasInitialized",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "_spender", type: "address" },
              { name: "_amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "STAKING_CONTROL_ROLE",
            outputs: [{ name: "", type: "bytes32" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "totalSupply",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [{ name: "_ethAmount", type: "uint256" }],
            name: "getSharesByPooledEth",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "isStakingPaused",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "_sender", type: "address" },
              { name: "_recipient", type: "address" },
              { name: "_amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [{ name: "_script", type: "bytes" }],
            name: "getEVMScriptExecutor",
            outputs: [{ name: "", type: "address" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "_maxStakeLimit", type: "uint256" },
              { name: "_stakeLimitIncreasePerBlock", type: "uint256" },
            ],
            name: "setStakingLimit",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "RESUME_ROLE",
            outputs: [{ name: "", type: "bytes32" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "_lidoLocator", type: "address" },
              { name: "_eip712StETH", type: "address" },
            ],
            name: "finalizeUpgrade_v2",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "decimals",
            outputs: [{ name: "", type: "uint8" }],
            payable: !1,
            stateMutability: "pure",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "getRecoveryVault",
            outputs: [{ name: "", type: "address" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "DOMAIN_SEPARATOR",
            outputs: [{ name: "", type: "bytes32" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "getTotalPooledEther",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [{ name: "_newDepositedValidators", type: "uint256" }],
            name: "unsafeChangeDepositedValidators",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "PAUSE_ROLE",
            outputs: [{ name: "", type: "bytes32" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "_spender", type: "address" },
              { name: "_addedValue", type: "uint256" },
            ],
            name: "increaseAllowance",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "getTreasury",
            outputs: [{ name: "", type: "address" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "isStopped",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "getBufferedEther",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "_lidoLocator", type: "address" },
              { name: "_eip712StETH", type: "address" },
            ],
            name: "initialize",
            outputs: [],
            payable: !0,
            stateMutability: "payable",
            type: "function",
          },
          {
            constant: !1,
            inputs: [],
            name: "receiveELRewards",
            outputs: [],
            payable: !0,
            stateMutability: "payable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "getWithdrawalCredentials",
            outputs: [{ name: "", type: "bytes32" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "getCurrentStakeLimit",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "getStakeLimitFullInfo",
            outputs: [
              { name: "isStakingPaused", type: "bool" },
              { name: "isStakingLimitSet", type: "bool" },
              { name: "currentStakeLimit", type: "uint256" },
              { name: "maxStakeLimit", type: "uint256" },
              { name: "maxStakeLimitGrowthBlocks", type: "uint256" },
              { name: "prevStakeLimit", type: "uint256" },
              { name: "prevStakeBlockNumber", type: "uint256" },
            ],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "_sender", type: "address" },
              { name: "_recipient", type: "address" },
              { name: "_sharesAmount", type: "uint256" },
            ],
            name: "transferSharesFrom",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [{ name: "_account", type: "address" }],
            name: "balanceOf",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [],
            name: "resumeStaking",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "getFeeDistribution",
            outputs: [
              { name: "treasuryFeeBasisPoints", type: "uint16" },
              { name: "insuranceFeeBasisPoints", type: "uint16" },
              { name: "operatorsFeeBasisPoints", type: "uint16" },
            ],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [],
            name: "receiveWithdrawals",
            outputs: [],
            payable: !0,
            stateMutability: "payable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [{ name: "_sharesAmount", type: "uint256" }],
            name: "getPooledEthByShares",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [{ name: "token", type: "address" }],
            name: "allowRecoverability",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [{ name: "owner", type: "address" }],
            name: "nonces",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "appId",
            outputs: [{ name: "", type: "bytes32" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "getOracle",
            outputs: [{ name: "", type: "address" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "eip712Domain",
            outputs: [
              { name: "name", type: "string" },
              { name: "version", type: "string" },
              { name: "chainId", type: "uint256" },
              { name: "verifyingContract", type: "address" },
            ],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "getContractVersion",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "getInitializationBlock",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "_recipient", type: "address" },
              { name: "_sharesAmount", type: "uint256" },
            ],
            name: "transferShares",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "symbol",
            outputs: [{ name: "", type: "string" }],
            payable: !1,
            stateMutability: "pure",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "getEIP712StETH",
            outputs: [{ name: "", type: "address" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [{ name: "", type: "address" }],
            name: "transferToVault",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [
              { name: "_sender", type: "address" },
              { name: "_role", type: "bytes32" },
              { name: "_params", type: "uint256[]" },
            ],
            name: "canPerform",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [{ name: "_referral", type: "address" }],
            name: "submit",
            outputs: [{ name: "", type: "uint256" }],
            payable: !0,
            stateMutability: "payable",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "_spender", type: "address" },
              { name: "_subtractedValue", type: "uint256" },
            ],
            name: "decreaseAllowance",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "getEVMScriptRegistry",
            outputs: [{ name: "", type: "address" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "_recipient", type: "address" },
              { name: "_amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "_maxDepositsCount", type: "uint256" },
              { name: "_stakingModuleId", type: "uint256" },
              { name: "_depositCalldata", type: "bytes" },
            ],
            name: "deposit",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "UNSAFE_CHANGE_DEPOSITED_VALIDATORS_ROLE",
            outputs: [{ name: "", type: "bytes32" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "getBeaconStat",
            outputs: [
              { name: "depositedValidators", type: "uint256" },
              { name: "beaconValidators", type: "uint256" },
              { name: "beaconBalance", type: "uint256" },
            ],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [],
            name: "removeStakingLimit",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "_reportTimestamp", type: "uint256" },
              { name: "_timeElapsed", type: "uint256" },
              { name: "_clValidators", type: "uint256" },
              { name: "_clBalance", type: "uint256" },
              { name: "_withdrawalVaultBalance", type: "uint256" },
              { name: "_elRewardsVaultBalance", type: "uint256" },
              { name: "_sharesRequestedToBurn", type: "uint256" },
              { name: "_withdrawalFinalizationBatches", type: "uint256[]" },
              { name: "_simulatedShareRate", type: "uint256" },
            ],
            name: "handleOracleReport",
            outputs: [{ name: "postRebaseAmounts", type: "uint256[4]" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "getFee",
            outputs: [{ name: "totalFee", type: "uint16" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "kernel",
            outputs: [{ name: "", type: "address" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "getTotalShares",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "_owner", type: "address" },
              { name: "_spender", type: "address" },
              { name: "_value", type: "uint256" },
              { name: "_deadline", type: "uint256" },
              { name: "_v", type: "uint8" },
              { name: "_r", type: "bytes32" },
              { name: "_s", type: "bytes32" },
            ],
            name: "permit",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [
              { name: "_owner", type: "address" },
              { name: "_spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "isPetrified",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "getLidoLocator",
            outputs: [{ name: "", type: "address" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "canDeposit",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "STAKING_PAUSE_ROLE",
            outputs: [{ name: "", type: "bytes32" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "getDepositableEther",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [{ name: "_account", type: "address" }],
            name: "sharesOf",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [],
            name: "pauseStaking",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "getTotalELRewardsCollected",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          { payable: !0, stateMutability: "payable", type: "fallback" },
          { anonymous: !1, inputs: [], name: "StakingPaused", type: "event" },
          { anonymous: !1, inputs: [], name: "StakingResumed", type: "event" },
          {
            anonymous: !1,
            inputs: [
              { indexed: !1, name: "maxStakeLimit", type: "uint256" },
              {
                indexed: !1,
                name: "stakeLimitIncreasePerBlock",
                type: "uint256",
              },
            ],
            name: "StakingLimitSet",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [],
            name: "StakingLimitRemoved",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "reportTimestamp", type: "uint256" },
              { indexed: !1, name: "preCLValidators", type: "uint256" },
              { indexed: !1, name: "postCLValidators", type: "uint256" },
            ],
            name: "CLValidatorsUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !1, name: "depositedValidators", type: "uint256" },
            ],
            name: "DepositedValidatorsChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "reportTimestamp", type: "uint256" },
              { indexed: !1, name: "preCLBalance", type: "uint256" },
              { indexed: !1, name: "postCLBalance", type: "uint256" },
              { indexed: !1, name: "withdrawalsWithdrawn", type: "uint256" },
              {
                indexed: !1,
                name: "executionLayerRewardsWithdrawn",
                type: "uint256",
              },
              { indexed: !1, name: "postBufferedEther", type: "uint256" },
            ],
            name: "ETHDistributed",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "reportTimestamp", type: "uint256" },
              { indexed: !1, name: "timeElapsed", type: "uint256" },
              { indexed: !1, name: "preTotalShares", type: "uint256" },
              { indexed: !1, name: "preTotalEther", type: "uint256" },
              { indexed: !1, name: "postTotalShares", type: "uint256" },
              { indexed: !1, name: "postTotalEther", type: "uint256" },
              { indexed: !1, name: "sharesMintedAsFees", type: "uint256" },
            ],
            name: "TokenRebased",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [{ indexed: !1, name: "lidoLocator", type: "address" }],
            name: "LidoLocatorSet",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [{ indexed: !1, name: "amount", type: "uint256" }],
            name: "ELRewardsReceived",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [{ indexed: !1, name: "amount", type: "uint256" }],
            name: "WithdrawalsReceived",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "sender", type: "address" },
              { indexed: !1, name: "amount", type: "uint256" },
              { indexed: !1, name: "referral", type: "address" },
            ],
            name: "Submitted",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [{ indexed: !1, name: "amount", type: "uint256" }],
            name: "Unbuffered",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "executor", type: "address" },
              { indexed: !1, name: "script", type: "bytes" },
              { indexed: !1, name: "input", type: "bytes" },
              { indexed: !1, name: "returnData", type: "bytes" },
            ],
            name: "ScriptResult",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "vault", type: "address" },
              { indexed: !0, name: "token", type: "address" },
              { indexed: !1, name: "amount", type: "uint256" },
            ],
            name: "RecoverToVault",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [{ indexed: !1, name: "eip712StETH", type: "address" }],
            name: "EIP712StETHInitialized",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "from", type: "address" },
              { indexed: !0, name: "to", type: "address" },
              { indexed: !1, name: "sharesValue", type: "uint256" },
            ],
            name: "TransferShares",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "account", type: "address" },
              { indexed: !1, name: "preRebaseTokenAmount", type: "uint256" },
              { indexed: !1, name: "postRebaseTokenAmount", type: "uint256" },
              { indexed: !1, name: "sharesAmount", type: "uint256" },
            ],
            name: "SharesBurnt",
            type: "event",
          },
          { anonymous: !1, inputs: [], name: "Stopped", type: "event" },
          { anonymous: !1, inputs: [], name: "Resumed", type: "event" },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "from", type: "address" },
              { indexed: !0, name: "to", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "owner", type: "address" },
              { indexed: !0, name: "spender", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [{ indexed: !1, name: "version", type: "uint256" }],
            name: "ContractVersionSet",
            type: "event",
          },
        ],
        rETH: [
          {
            inputs: [
              {
                internalType: "contract RocketStorageInterface",
                name: "_rocketStorageAddress",
                type: "address",
              },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "time",
                type: "uint256",
              },
            ],
            name: "EtherDeposited",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "ethAmount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "time",
                type: "uint256",
              },
            ],
            name: "TokensBurned",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "ethAmount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "time",
                type: "uint256",
              },
            ],
            name: "TokensMinted",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_rethAmount", type: "uint256" },
            ],
            name: "burn",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
              },
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "depositExcess",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [],
            name: "depositExcessCollateral",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "getCollateralRate",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_rethAmount", type: "uint256" },
            ],
            name: "getEthValue",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getExchangeRate",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_ethAmount", type: "uint256" },
            ],
            name: "getRethValue",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getTotalCollateral",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "addedValue", type: "uint256" },
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_ethAmount", type: "uint256" },
              { internalType: "address", name: "_to", type: "address" },
            ],
            name: "mint",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "version",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          { stateMutability: "payable", type: "receive" },
        ],
        wETH: [
          {
            constant: !0,
            inputs: [],
            name: "name",
            outputs: [{ name: "", type: "string" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "guy", type: "address" },
              { name: "wad", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "totalSupply",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "src", type: "address" },
              { name: "dst", type: "address" },
              { name: "wad", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !1,
            inputs: [{ name: "wad", type: "uint256" }],
            name: "withdraw",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "decimals",
            outputs: [{ name: "", type: "uint8" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [{ name: "", type: "address" }],
            name: "balanceOf",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "symbol",
            outputs: [{ name: "", type: "string" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "dst", type: "address" },
              { name: "wad", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !1,
            inputs: [],
            name: "deposit",
            outputs: [],
            payable: !0,
            stateMutability: "payable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [
              { name: "", type: "address" },
              { name: "", type: "address" },
            ],
            name: "allowance",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          { payable: !0, stateMutability: "payable", type: "fallback" },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "src", type: "address" },
              { indexed: !0, name: "guy", type: "address" },
              { indexed: !1, name: "wad", type: "uint256" },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "src", type: "address" },
              { indexed: !0, name: "dst", type: "address" },
              { indexed: !1, name: "wad", type: "uint256" },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "dst", type: "address" },
              { indexed: !1, name: "wad", type: "uint256" },
            ],
            name: "Deposit",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "src", type: "address" },
              { indexed: !1, name: "wad", type: "uint256" },
            ],
            name: "Withdrawal",
            type: "event",
          },
        ],
        wBETH: [
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "authorizer",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "bytes32",
                name: "nonce",
                type: "bytes32",
              },
            ],
            name: "AuthorizationCanceled",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "authorizer",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "bytes32",
                name: "nonce",
                type: "bytes32",
              },
            ],
            name: "AuthorizationUsed",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "_account",
                type: "address",
              },
            ],
            name: "Blacklisted",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "newBlacklister",
                type: "address",
              },
            ],
            name: "BlacklisterChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "burner",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "Burn",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "ethAmount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "wBETHAmount",
                type: "uint256",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "referral",
                type: "address",
              },
            ],
            name: "DepositEth",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousReceiver",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newReceiver",
                type: "address",
              },
            ],
            name: "EthReceiverUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "oracle",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newExchangeRate",
                type: "uint256",
              },
            ],
            name: "ExchangeRateUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "newMasterMinter",
                type: "address",
              },
            ],
            name: "MasterMinterChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "minter",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "Mint",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "minter",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "minterAllowedAmount",
                type: "uint256",
              },
            ],
            name: "MinterConfigured",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "oldMinter",
                type: "address",
              },
            ],
            name: "MinterRemoved",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "ethReceiver",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "ethAmount",
                type: "uint256",
              },
            ],
            name: "MovedToStakingAddress",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "unwrapAddress",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "ethAmount",
                type: "uint256",
              },
            ],
            name: "MovedToUnwrapAddress",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOperator",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOperator",
                type: "address",
              },
            ],
            name: "OperatorUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "newOracle",
                type: "address",
              },
            ],
            name: "OracleUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          { anonymous: !1, inputs: [], name: "Pause", type: "event" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "newAddress",
                type: "address",
              },
            ],
            name: "PauserChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "wbethAmount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "ethAmount",
                type: "uint256",
              },
            ],
            name: "RequestWithdrawEth",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "newRescuer",
                type: "address",
              },
            ],
            name: "RescuerChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "supplier",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "ethAmount",
                type: "uint256",
              },
            ],
            name: "SuppliedEth",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "_account",
                type: "address",
              },
            ],
            name: "UnBlacklisted",
            type: "event",
          },
          { anonymous: !1, inputs: [], name: "Unpause", type: "event" },
          {
            inputs: [],
            name: "CANCEL_AUTHORIZATION_TYPEHASH",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "DOMAIN_SEPARATOR",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "PERMIT_TYPEHASH",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "RECEIVE_WITH_AUTHORIZATION_TYPEHASH",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "TRANSFER_WITH_AUTHORIZATION_TYPEHASH",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "_EXCHANGE_RATE_UNIT",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "_UNWRAP_ETH_ADDRESS",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "authorizer", type: "address" },
              { internalType: "bytes32", name: "nonce", type: "bytes32" },
            ],
            name: "authorizationState",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_account", type: "address" },
            ],
            name: "blacklist",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "blacklister",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "burn",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "authorizer", type: "address" },
              { internalType: "bytes32", name: "nonce", type: "bytes32" },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            name: "cancelAuthorization",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "minter", type: "address" },
              {
                internalType: "uint256",
                name: "minterAllowedAmount",
                type: "uint256",
              },
            ],
            name: "configureMinter",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "currency",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "decrement", type: "uint256" },
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "referral", type: "address" },
            ],
            name: "deposit",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [],
            name: "ethReceiver",
            outputs: [
              {
                internalType: "address",
                name: "_ethReceiver",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "exchangeRate",
            outputs: [
              {
                internalType: "uint256",
                name: "_exchangeRate",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "increment", type: "uint256" },
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "string", name: "tokenName", type: "string" },
              { internalType: "string", name: "tokenSymbol", type: "string" },
              { internalType: "string", name: "tokenCurrency", type: "string" },
              { internalType: "uint8", name: "tokenDecimals", type: "uint8" },
              {
                internalType: "address",
                name: "newMasterMinter",
                type: "address",
              },
              { internalType: "address", name: "newPauser", type: "address" },
              {
                internalType: "address",
                name: "newBlacklister",
                type: "address",
              },
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "string", name: "newName", type: "string" },
            ],
            name: "initializeV2",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "lostAndFound",
                type: "address",
              },
            ],
            name: "initializeV2_1",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_account", type: "address" },
            ],
            name: "isBlacklisted",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "isMinter",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "masterMinter",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_to", type: "address" },
              { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "mint",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "mint",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "minter", type: "address" },
            ],
            name: "minterAllowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "moveToStakingAddress",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "moveToUnwrapAddress",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "nonces",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "operator",
            outputs: [
              { internalType: "address", name: "_operator", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "oracle",
            outputs: [
              { internalType: "address", name: "_oracle", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "pause",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "paused",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "pauser",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            name: "permit",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
              { internalType: "uint256", name: "validAfter", type: "uint256" },
              { internalType: "uint256", name: "validBefore", type: "uint256" },
              { internalType: "bytes32", name: "nonce", type: "bytes32" },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            name: "receiveWithAuthorization",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "minter", type: "address" },
            ],
            name: "removeMinter",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "wbethAmount", type: "uint256" },
            ],
            name: "requestWithdrawEth",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IERC20",
                name: "tokenContract",
                type: "address",
              },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "rescueERC20",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "rescuer",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "supplyEth",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
              { internalType: "uint256", name: "validAfter", type: "uint256" },
              { internalType: "uint256", name: "validBefore", type: "uint256" },
              { internalType: "bytes32", name: "nonce", type: "bytes32" },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            name: "transferWithAuthorization",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_account", type: "address" },
            ],
            name: "unBlacklist",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "unpause",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_newBlacklister",
                type: "address",
              },
            ],
            name: "updateBlacklister",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newEthReceiver",
                type: "address",
              },
            ],
            name: "updateEthReceiver",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "newExchangeRate",
                type: "uint256",
              },
            ],
            name: "updateExchangeRate",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_newMasterMinter",
                type: "address",
              },
            ],
            name: "updateMasterMinter",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOperator", type: "address" },
            ],
            name: "updateOperator",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOracle", type: "address" },
            ],
            name: "updateOracle",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_newPauser", type: "address" },
            ],
            name: "updatePauser",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newRescuer", type: "address" },
            ],
            name: "updateRescuer",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "version",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          { stateMutability: "payable", type: "receive" },
        ],
        wstETH: [
          {
            inputs: [
              {
                internalType: "contract IStETH",
                name: "_stETH",
                type: "address",
              },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [],
            name: "DOMAIN_SEPARATOR",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
              },
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_wstETHAmount",
                type: "uint256",
              },
            ],
            name: "getStETHByWstETH",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_stETHAmount",
                type: "uint256",
              },
            ],
            name: "getWstETHByStETH",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "addedValue", type: "uint256" },
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "nonces",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            name: "permit",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "stETH",
            outputs: [
              { internalType: "contract IStETH", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "stEthPerToken",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "tokensPerStEth",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_wstETHAmount",
                type: "uint256",
              },
            ],
            name: "unwrap",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_stETHAmount",
                type: "uint256",
              },
            ],
            name: "wrap",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          { stateMutability: "payable", type: "receive" },
        ],
        RenzoOracle: [
          { inputs: [], stateMutability: "nonpayable", type: "constructor" },
          { inputs: [], name: "InvalidOraclePrice", type: "error" },
          { inputs: [], name: "InvalidTokenAmount", type: "error" },
          {
            inputs: [
              { internalType: "uint8", name: "expected", type: "uint8" },
              { internalType: "uint8", name: "actual", type: "uint8" },
            ],
            name: "InvalidTokenDecimals",
            type: "error",
          },
          { inputs: [], name: "InvalidZeroInput", type: "error" },
          { inputs: [], name: "MismatchedArrayLengths", type: "error" },
          { inputs: [], name: "NotOracleAdmin", type: "error" },
          { inputs: [], name: "OracleNotFound", type: "error" },
          { inputs: [], name: "OraclePriceExpired", type: "error" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint8",
                name: "version",
                type: "uint8",
              },
            ],
            name: "Initialized",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "contract IERC20",
                name: "token",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "contract AggregatorV3Interface",
                name: "oracleAddress",
                type: "address",
              },
            ],
            name: "OracleAddressUpdated",
            type: "event",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_currentValueInProtocol",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "_newValueAdded",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "_existingEzETHSupply",
                type: "uint256",
              },
            ],
            name: "calculateMintAmount",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_ezETHBeingBurned",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "_existingEzETHSupply",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "_currentValueInProtocol",
                type: "uint256",
              },
            ],
            name: "calculateRedeemAmount",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IRoleManager",
                name: "_roleManager",
                type: "address",
              },
            ],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IERC20",
                name: "_token",
                type: "address",
              },
              { internalType: "uint256", name: "_value", type: "uint256" },
            ],
            name: "lookupTokenAmountFromValue",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IERC20",
                name: "_token",
                type: "address",
              },
              { internalType: "uint256", name: "_balance", type: "uint256" },
            ],
            name: "lookupTokenValue",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IERC20[]",
                name: "_tokens",
                type: "address[]",
              },
              {
                internalType: "uint256[]",
                name: "_balances",
                type: "uint256[]",
              },
            ],
            name: "lookupTokenValues",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "roleManager",
            outputs: [
              {
                internalType: "contract IRoleManager",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IERC20",
                name: "_token",
                type: "address",
              },
              {
                internalType: "contract AggregatorV3Interface",
                name: "_oracleAddress",
                type: "address",
              },
            ],
            name: "setOracleAddress",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "contract IERC20", name: "", type: "address" },
            ],
            name: "tokenOracleLookup",
            outputs: [
              {
                internalType: "contract AggregatorV3Interface",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        REN: [
          { inputs: [], stateMutability: "nonpayable", type: "constructor" },
          { inputs: [], name: "CheckpointUnorderedInsertion", type: "error" },
          { inputs: [], name: "ECDSAInvalidSignature", type: "error" },
          {
            inputs: [
              { internalType: "uint256", name: "length", type: "uint256" },
            ],
            name: "ECDSAInvalidSignatureLength",
            type: "error",
          },
          {
            inputs: [{ internalType: "bytes32", name: "s", type: "bytes32" }],
            name: "ECDSAInvalidSignatureS",
            type: "error",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "increasedSupply",
                type: "uint256",
              },
              { internalType: "uint256", name: "cap", type: "uint256" },
            ],
            name: "ERC20ExceededSafeSupply",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "allowance", type: "uint256" },
              { internalType: "uint256", name: "needed", type: "uint256" },
            ],
            name: "ERC20InsufficientAllowance",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "uint256", name: "balance", type: "uint256" },
              { internalType: "uint256", name: "needed", type: "uint256" },
            ],
            name: "ERC20InsufficientBalance",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "approver", type: "address" },
            ],
            name: "ERC20InvalidApprover",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "receiver", type: "address" },
            ],
            name: "ERC20InvalidReceiver",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
            ],
            name: "ERC20InvalidSender",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "ERC20InvalidSpender",
            type: "error",
          },
          {
            inputs: [
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "ERC2612ExpiredSignature",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "signer", type: "address" },
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "ERC2612InvalidSigner",
            type: "error",
          },
          {
            inputs: [
              { internalType: "uint256", name: "timepoint", type: "uint256" },
              { internalType: "uint48", name: "clock", type: "uint48" },
            ],
            name: "ERC5805FutureLookup",
            type: "error",
          },
          { inputs: [], name: "ERC6372InconsistentClock", type: "error" },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
              {
                internalType: "uint256",
                name: "currentNonce",
                type: "uint256",
              },
            ],
            name: "InvalidAccountNonce",
            type: "error",
          },
          { inputs: [], name: "InvalidShortString", type: "error" },
          {
            inputs: [
              { internalType: "uint8", name: "bits", type: "uint8" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "SafeCastOverflowedUintDowncast",
            type: "error",
          },
          {
            inputs: [{ internalType: "string", name: "str", type: "string" }],
            name: "StringTooLong",
            type: "error",
          },
          {
            inputs: [
              { internalType: "uint256", name: "expiry", type: "uint256" },
            ],
            name: "VotesExpiredSignature",
            type: "error",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "delegator",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "fromDelegate",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "toDelegate",
                type: "address",
              },
            ],
            name: "DelegateChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "delegate",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "previousVotes",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newVotes",
                type: "uint256",
              },
            ],
            name: "DelegateVotesChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [],
            name: "EIP712DomainChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [],
            name: "CLOCK_MODE",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "DOMAIN_SEPARATOR",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
              { internalType: "uint32", name: "pos", type: "uint32" },
            ],
            name: "checkpoints",
            outputs: [
              {
                components: [
                  { internalType: "uint48", name: "_key", type: "uint48" },
                  { internalType: "uint208", name: "_value", type: "uint208" },
                ],
                internalType: "struct Checkpoints.Checkpoint208",
                name: "",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "clock",
            outputs: [{ internalType: "uint48", name: "", type: "uint48" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "delegatee", type: "address" },
            ],
            name: "delegate",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "delegatee", type: "address" },
              { internalType: "uint256", name: "nonce", type: "uint256" },
              { internalType: "uint256", name: "expiry", type: "uint256" },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            name: "delegateBySig",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "delegates",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "eip712Domain",
            outputs: [
              { internalType: "bytes1", name: "fields", type: "bytes1" },
              { internalType: "string", name: "name", type: "string" },
              { internalType: "string", name: "version", type: "string" },
              { internalType: "uint256", name: "chainId", type: "uint256" },
              {
                internalType: "address",
                name: "verifyingContract",
                type: "address",
              },
              { internalType: "bytes32", name: "salt", type: "bytes32" },
              {
                internalType: "uint256[]",
                name: "extensions",
                type: "uint256[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "timepoint", type: "uint256" },
            ],
            name: "getPastTotalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
              { internalType: "uint256", name: "timepoint", type: "uint256" },
            ],
            name: "getPastVotes",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "getVotes",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "nonces",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "numCheckpoints",
            outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            name: "permit",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        REZtake: [
          {
            inputs: [
              {
                internalType: "contract IERC20",
                name: "_rez",
                type: "address",
              },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          { inputs: [], name: "EarlyClaim", type: "error" },
          { inputs: [], name: "InvalidIndex", type: "error" },
          { inputs: [], name: "InvalidZeroInput", type: "error" },
          { inputs: [], name: "NotEnoughStake", type: "error" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "staker",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "index",
                type: "uint256",
              },
            ],
            name: "Claim",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint8",
                name: "version",
                type: "uint8",
              },
            ],
            name: "Initialized",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferStarted",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "staker",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "Stake",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "staker",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "index",
                type: "uint256",
              },
            ],
            name: "Unstake",
            type: "event",
          },
          {
            inputs: [],
            name: "acceptOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "activeStake",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_index", type: "uint256" },
            ],
            name: "claim",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "coolDownPeriod",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_account", type: "address" },
            ],
            name: "getUnstakeRequestsLength",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_coolDownPeriod",
                type: "uint256",
              },
            ],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "pendingOwner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "rez",
            outputs: [
              { internalType: "contract IERC20", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_coolDownPeriod",
                type: "uint256",
              },
            ],
            name: "setCoolDownPeriod",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "stake",
            outputs: [
              { internalType: "uint256", name: "totalStaked", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "unStake",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "", type: "address" },
              { internalType: "uint256", name: "", type: "uint256" },
            ],
            name: "unstakeRequests",
            outputs: [
              {
                internalType: "uint256",
                name: "unstakeTimestamp",
                type: "uint256",
              },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        OperatorDelegator: [
          { inputs: [], stateMutability: "nonpayable", type: "constructor" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "delegateAddress",
                type: "address",
              },
            ],
            name: "DelegationAddressUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint8",
                name: "version",
                type: "uint8",
              },
            ],
            name: "Initialized",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "contract IERC20",
                name: "token",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "contract IStrategy",
                name: "strategy",
                type: "address",
              },
            ],
            name: "TokenStrategyUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "bytes32",
                name: "withdrawalRoot",
                type: "bytes32",
              },
              {
                indexed: !1,
                internalType: "contract IStrategy",
                name: "strategy",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "shares",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint96",
                name: "nonce",
                type: "uint96",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "delegatedAddress",
                type: "address",
              },
            ],
            name: "WithdrawStarted",
            type: "event",
          },
          {
            inputs: [
              {
                components: [
                  {
                    internalType: "contract IStrategy[]",
                    name: "strategies",
                    type: "address[]",
                  },
                  {
                    internalType: "uint256[]",
                    name: "shares",
                    type: "uint256[]",
                  },
                  {
                    internalType: "address",
                    name: "depositor",
                    type: "address",
                  },
                  {
                    components: [
                      {
                        internalType: "address",
                        name: "withdrawer",
                        type: "address",
                      },
                      { internalType: "uint96", name: "nonce", type: "uint96" },
                    ],
                    internalType: "struct IStrategyManager.WithdrawerAndNonce",
                    name: "withdrawerAndNonce",
                    type: "tuple",
                  },
                  {
                    internalType: "uint32",
                    name: "withdrawalStartBlock",
                    type: "uint32",
                  },
                  {
                    internalType: "address",
                    name: "delegatedAddress",
                    type: "address",
                  },
                ],
                internalType: "struct IStrategyManager.QueuedWithdrawal",
                name: "_queuedWithdrawal",
                type: "tuple",
              },
              {
                internalType: "contract IERC20",
                name: "_token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "_middlewareTimesIndex",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "_sendToAddress",
                type: "address",
              },
            ],
            name: "completeWithdrawal",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "delegateAddress",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IERC20",
                name: "_token",
                type: "address",
              },
            ],
            name: "deposit",
            outputs: [
              { internalType: "uint256", name: "shares", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IStrategy",
                name: "_strategy",
                type: "address",
              },
            ],
            name: "getStrategyIndex",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IERC20",
                name: "token",
                type: "address",
              },
            ],
            name: "getTokenBalanceFromStrategy",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IRoleManager",
                name: "_roleManager",
                type: "address",
              },
              {
                internalType: "contract IStrategyManager",
                name: "_strategyManager",
                type: "address",
              },
              {
                internalType: "address",
                name: "_restakeManager",
                type: "address",
              },
            ],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "restakeManager",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "roleManager",
            outputs: [
              {
                internalType: "contract IRoleManager",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_delegateAddress",
                type: "address",
              },
            ],
            name: "setDelegateAddress",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IERC20",
                name: "_token",
                type: "address",
              },
              {
                internalType: "contract IStrategy",
                name: "_strategy",
                type: "address",
              },
            ],
            name: "setTokenStrategy",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IERC20",
                name: "_token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "_tokenAmount",
                type: "uint256",
              },
            ],
            name: "startWithdrawal",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "strategyManager",
            outputs: [
              {
                internalType: "contract IStrategyManager",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "contract IERC20", name: "", type: "address" },
            ],
            name: "tokenStrategyMapping",
            outputs: [
              { internalType: "contract IStrategy", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        DepositQueue: [
          { inputs: [], stateMutability: "nonpayable", type: "constructor" },
          { inputs: [], name: "InvalidZeroInput", type: "error" },
          { inputs: [], name: "NotERC20RewardsAdmin", type: "error" },
          { inputs: [], name: "NotNativeEthRestakeAdmin", type: "error" },
          { inputs: [], name: "NotRestakeManager", type: "error" },
          { inputs: [], name: "NotRestakeManagerAdmin", type: "error" },
          { inputs: [], name: "OverMaxBasisPoints", type: "error" },
          { inputs: [], name: "TransferFailed", type: "error" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "ETHDepositedFromProtocol",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "contract IOperatorDelegator",
                name: "operatorDelegator",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "bytes",
                name: "pubkey",
                type: "bytes",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amountStaked",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amountQueued",
                type: "uint256",
              },
            ],
            name: "ETHStakedFromQueue",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "feeAddress",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "feeBasisPoints",
                type: "uint256",
              },
            ],
            name: "FeeConfigUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint8",
                name: "version",
                type: "uint8",
              },
            ],
            name: "Initialized",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "contract IERC20",
                name: "token",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "destination",
                type: "address",
              },
            ],
            name: "ProtocolFeesPaid",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "contract IRestakeManager",
                name: "restakeManager",
                type: "address",
              },
            ],
            name: "RestakeManagerUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "contract IERC20",
                name: "token",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "RewardsDeposited",
            type: "event",
          },
          {
            inputs: [],
            name: "depositETHFromProtocol",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [],
            name: "feeAddress",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "feeBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IRoleManager",
                name: "_roleManager",
                type: "address",
              },
            ],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "restakeManager",
            outputs: [
              {
                internalType: "contract IRestakeManager",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "roleManager",
            outputs: [
              {
                internalType: "contract IRoleManager",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_feeAddress", type: "address" },
              {
                internalType: "uint256",
                name: "_feeBasisPoints",
                type: "uint256",
              },
            ],
            name: "setFeeConfig",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IRestakeManager",
                name: "_restakeManager",
                type: "address",
              },
            ],
            name: "setRestakeManager",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IOperatorDelegator",
                name: "operatorDelegator",
                type: "address",
              },
              { internalType: "bytes", name: "pubkey", type: "bytes" },
              { internalType: "bytes", name: "signature", type: "bytes" },
              {
                internalType: "bytes32",
                name: "depositDataRoot",
                type: "bytes32",
              },
            ],
            name: "stakeEthFromQueue",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IERC20",
                name: "token",
                type: "address",
              },
            ],
            name: "sweepERC20",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "totalEarned",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          { stateMutability: "payable", type: "receive" },
        ],
        ChainlinkEthOracle: [
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "int256",
                name: "current",
                type: "int256",
              },
              {
                indexed: !0,
                internalType: "uint256",
                name: "roundId",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "updatedAt",
                type: "uint256",
              },
            ],
            name: "AnswerUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "uint256",
                name: "roundId",
                type: "uint256",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "startedBy",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "startedAt",
                type: "uint256",
              },
            ],
            name: "NewRound",
            type: "event",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "description",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "roundId", type: "uint256" },
            ],
            name: "getAnswer",
            outputs: [{ internalType: "int256", name: "", type: "int256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint80", name: "_roundId", type: "uint80" },
            ],
            name: "getRoundData",
            outputs: [
              { internalType: "uint80", name: "roundId", type: "uint80" },
              { internalType: "int256", name: "answer", type: "int256" },
              { internalType: "uint256", name: "startedAt", type: "uint256" },
              { internalType: "uint256", name: "updatedAt", type: "uint256" },
              {
                internalType: "uint80",
                name: "answeredInRound",
                type: "uint80",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "roundId", type: "uint256" },
            ],
            name: "getTimestamp",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "latestAnswer",
            outputs: [{ internalType: "int256", name: "", type: "int256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "latestRound",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "latestRoundData",
            outputs: [
              { internalType: "uint80", name: "roundId", type: "uint80" },
              { internalType: "int256", name: "answer", type: "int256" },
              { internalType: "uint256", name: "startedAt", type: "uint256" },
              { internalType: "uint256", name: "updatedAt", type: "uint256" },
              {
                internalType: "uint80",
                name: "answeredInRound",
                type: "uint80",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "latestTimestamp",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "version",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
        ],
        erc20: [
          {
            type: "event",
            name: "Approval",
            inputs: [
              { indexed: !0, name: "owner", type: "address" },
              { indexed: !0, name: "spender", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
          },
          {
            type: "event",
            name: "Transfer",
            inputs: [
              { indexed: !0, name: "from", type: "address" },
              { indexed: !0, name: "to", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
          },
          {
            type: "function",
            name: "allowance",
            stateMutability: "view",
            inputs: [
              { name: "owner", type: "address" },
              { name: "spender", type: "address" },
            ],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "approve",
            stateMutability: "nonpayable",
            inputs: [
              { name: "spender", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
          {
            type: "function",
            name: "balanceOf",
            stateMutability: "view",
            inputs: [{ name: "account", type: "address" }],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "decimals",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "uint8" }],
          },
          {
            type: "function",
            name: "name",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "string" }],
          },
          {
            type: "function",
            name: "symbol",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "string" }],
          },
          {
            type: "function",
            name: "totalSupply",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "transfer",
            stateMutability: "nonpayable",
            inputs: [
              { name: "recipient", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
          {
            type: "function",
            name: "transferFrom",
            stateMutability: "nonpayable",
            inputs: [
              { name: "sender", type: "address" },
              { name: "recipient", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
        ],
        Eigen: [
          {
            inputs: [
              {
                internalType: "contract IERC20",
                name: "_bEIGEN",
                type: "address",
              },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "delegator",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "fromDelegate",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "toDelegate",
                type: "address",
              },
            ],
            name: "DelegateChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "delegate",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "previousBalance",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newBalance",
                type: "uint256",
              },
            ],
            name: "DelegateVotesChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [],
            name: "EIP712DomainChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint8",
                name: "version",
                type: "uint8",
              },
            ],
            name: "Initialized",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "minter",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "Mint",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "bool",
                name: "isAllowedFrom",
                type: "bool",
              },
            ],
            name: "SetAllowedFrom",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "bool",
                name: "isAllowedTo",
                type: "bool",
              },
            ],
            name: "SetAllowedTo",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [],
            name: "TransferRestrictionsDisabled",
            type: "event",
          },
          {
            inputs: [],
            name: "CLOCK_MODE",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [],
            name: "DOMAIN_SEPARATOR",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "allowedFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "allowedTo",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "bEIGEN",
            outputs: [
              { internalType: "contract IERC20", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
              { internalType: "uint32", name: "pos", type: "uint32" },
            ],
            name: "checkpoints",
            outputs: [
              {
                components: [
                  { internalType: "uint32", name: "fromBlock", type: "uint32" },
                  { internalType: "uint224", name: "votes", type: "uint224" },
                ],
                internalType: "struct ERC20VotesUpgradeable.Checkpoint",
                name: "",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "clock",
            outputs: [{ internalType: "uint48", name: "", type: "uint48" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
              },
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "delegatee", type: "address" },
            ],
            name: "delegate",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "delegatee", type: "address" },
              { internalType: "uint256", name: "nonce", type: "uint256" },
              { internalType: "uint256", name: "expiry", type: "uint256" },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            name: "delegateBySig",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "delegates",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "disableTransferRestrictions",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "eip712Domain",
            outputs: [
              { internalType: "bytes1", name: "fields", type: "bytes1" },
              { internalType: "string", name: "name", type: "string" },
              { internalType: "string", name: "version", type: "string" },
              { internalType: "uint256", name: "chainId", type: "uint256" },
              {
                internalType: "address",
                name: "verifyingContract",
                type: "address",
              },
              { internalType: "bytes32", name: "salt", type: "bytes32" },
              {
                internalType: "uint256[]",
                name: "extensions",
                type: "uint256[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "timepoint", type: "uint256" },
            ],
            name: "getPastTotalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
              { internalType: "uint256", name: "timepoint", type: "uint256" },
            ],
            name: "getPastVotes",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "getVotes",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "addedValue", type: "uint256" },
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "initialOwner",
                type: "address",
              },
              { internalType: "address[]", name: "minters", type: "address[]" },
              {
                internalType: "uint256[]",
                name: "mintingAllowances",
                type: "uint256[]",
              },
              {
                internalType: "uint256[]",
                name: "mintAllowedAfters",
                type: "uint256[]",
              },
            ],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "mint",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "mintAllowedAfter",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "mintingAllowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address[]",
                name: "receivers",
                type: "address[]",
              },
              { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
            ],
            name: "multisend",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "nonces",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "numCheckpoints",
            outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            name: "permit",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "bool", name: "isAllowedFrom", type: "bool" },
            ],
            name: "setAllowedFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "bool", name: "isAllowedTo", type: "bool" },
            ],
            name: "setAllowedTo",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "transferRestrictionsDisabledAfter",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "unwrap",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "wrap",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        xRenzoDepsit: [
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "previousAdmin",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "newAdmin",
                type: "address",
              },
            ],
            name: "AdminChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "beacon",
                type: "address",
              },
            ],
            name: "BeaconUpgraded",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "implementation",
                type: "address",
              },
            ],
            name: "Upgraded",
            type: "event",
          },
          { stateMutability: "payable", type: "fallback" },
          {
            inputs: [],
            name: "admin",
            outputs: [
              { internalType: "address", name: "admin_", type: "address" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newAdmin", type: "address" },
            ],
            name: "changeAdmin",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "implementation",
            outputs: [
              {
                internalType: "address",
                name: "implementation_",
                type: "address",
              },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address",
              },
            ],
            name: "upgradeTo",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newImplementation",
                type: "address",
              },
              { internalType: "bytes", name: "data", type: "bytes" },
            ],
            name: "upgradeToAndCall",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          { stateMutability: "payable", type: "receive" },
          { inputs: [], name: "InsufficientOutputAmount", type: "error" },
          { inputs: [], name: "InvalidOraclePrice", type: "error" },
          {
            inputs: [
              {
                internalType: "address",
                name: "expectedSender",
                type: "address",
              },
              {
                internalType: "address",
                name: "actualSender",
                type: "address",
              },
            ],
            name: "InvalidSender",
            type: "error",
          },
          {
            inputs: [
              { internalType: "uint256", name: "timestamp", type: "uint256" },
            ],
            name: "InvalidTimestamp",
            type: "error",
          },
          {
            inputs: [
              { internalType: "uint8", name: "expected", type: "uint8" },
              { internalType: "uint8", name: "actual", type: "uint8" },
            ],
            name: "InvalidTokenDecimals",
            type: "error",
          },
          { inputs: [], name: "InvalidZeroInput", type: "error" },
          { inputs: [], name: "InvalidZeroOutput", type: "error" },
          { inputs: [], name: "OraclePriceExpired", type: "error" },
          { inputs: [], name: "UnauthorizedBridgeSweeper", type: "error" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "sweeper",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "bool",
                name: "allowed",
                type: "bool",
              },
            ],
            name: "BridgeSweeperAddressUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint32",
                name: "destinationDomain",
                type: "uint32",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "destinationTarget",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "delegate",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "BridgeSwept",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
              },
            ],
            name: "Deposit",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint8",
                name: "version",
                type: "uint8",
              },
            ],
            name: "Initialized",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "price",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
              },
            ],
            name: "PriceUpdated",
            type: "event",
          },
          {
            inputs: [],
            name: "EXPECTED_DECIMALS",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "allowedBridgeSweepers",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "bridgeDestinationDomain",
            outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "bridgeRouterFeeBps",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "bridgeTargetAddress",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "ccipReceiver",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "collateralToken",
            outputs: [
              { internalType: "contract IERC20", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "connext",
            outputs: [
              { internalType: "contract IConnext", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_amountIn", type: "uint256" },
              { internalType: "uint256", name: "_minOut", type: "uint256" },
              { internalType: "uint256", name: "_deadline", type: "uint256" },
            ],
            name: "deposit",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_minOut", type: "uint256" },
              { internalType: "uint256", name: "_deadline", type: "uint256" },
            ],
            name: "depositETH",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [],
            name: "depositToken",
            outputs: [
              { internalType: "contract IERC20", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_currentPrice",
                type: "uint256",
              },
              {
                internalType: "contract IERC20",
                name: "_xezETH",
                type: "address",
              },
              {
                internalType: "contract IERC20",
                name: "_depositToken",
                type: "address",
              },
              {
                internalType: "contract IERC20",
                name: "_collateralToken",
                type: "address",
              },
              {
                internalType: "contract IConnext",
                name: "_connext",
                type: "address",
              },
              { internalType: "bytes32", name: "_swapKey", type: "bytes32" },
              {
                internalType: "address",
                name: "_ccipReceiver",
                type: "address",
              },
              {
                internalType: "uint32",
                name: "_bridgeDestinationDomain",
                type: "uint32",
              },
              {
                internalType: "address",
                name: "_bridgeTargetAddress",
                type: "address",
              },
            ],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "lastPrice",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "lastPriceTimestamp",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_sweeper", type: "address" },
              { internalType: "bool", name: "_allowed", type: "bool" },
            ],
            name: "setAllowedBridgeSweeper",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "swapKey",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "sweep",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_price", type: "uint256" },
              { internalType: "uint256", name: "_timestamp", type: "uint256" },
            ],
            name: "updatePrice",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "price", type: "uint256" },
            ],
            name: "updatePriceByOwner",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "xezETH",
            outputs: [
              { internalType: "contract IERC20", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_logic", type: "address" },
              { internalType: "address", name: "admin_", type: "address" },
              { internalType: "bytes", name: "_data", type: "bytes" },
            ],
            stateMutability: "payable",
            type: "constructor",
          },
        ],
        ConnextStableSwap: [
          {
            inputs: [],
            name: "AssetLogic__handleIncomingAsset_feeOnTransferNotSupported",
            type: "error",
          },
          {
            inputs: [],
            name: "AssetLogic__handleIncomingAsset_nativeAssetNotSupported",
            type: "error",
          },
          {
            inputs: [],
            name: "AssetLogic__handleOutgoingAsset_notNative",
            type: "error",
          },
          {
            inputs: [],
            name: "BaseConnextFacet__getAdoptedAsset_assetNotFound",
            type: "error",
          },
          {
            inputs: [],
            name: "BaseConnextFacet__getApprovedCanonicalId_notAllowlisted",
            type: "error",
          },
          {
            inputs: [],
            name: "BaseConnextFacet__nonReentrant_reentrantCall",
            type: "error",
          },
          {
            inputs: [],
            name: "BaseConnextFacet__nonXCallReentrant_reentrantCall",
            type: "error",
          },
          {
            inputs: [],
            name: "BaseConnextFacet__onlyOwnerOrAdmin_notOwnerOrAdmin",
            type: "error",
          },
          {
            inputs: [],
            name: "BaseConnextFacet__onlyOwnerOrRouter_notOwnerOrRouter",
            type: "error",
          },
          {
            inputs: [],
            name: "BaseConnextFacet__onlyOwnerOrWatcher_notOwnerOrWatcher",
            type: "error",
          },
          {
            inputs: [],
            name: "BaseConnextFacet__onlyOwner_notOwner",
            type: "error",
          },
          {
            inputs: [],
            name: "BaseConnextFacet__onlyProposed_notProposedOwner",
            type: "error",
          },
          {
            inputs: [],
            name: "BaseConnextFacet__whenNotPaused_paused",
            type: "error",
          },
          {
            inputs: [],
            name: "StableSwapFacet__deadlineCheck_deadlineNotMet",
            type: "error",
          },
          {
            inputs: [],
            name: "StableSwapFacet__getSwapTokenBalance_indexOutOfRange",
            type: "error",
          },
          {
            inputs: [],
            name: "StableSwapFacet__getSwapTokenIndex_notExist",
            type: "error",
          },
          {
            inputs: [],
            name: "StableSwapFacet__getSwapToken_outOfRange",
            type: "error",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "key",
                type: "bytes32",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "provider",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256[]",
                name: "tokenAmounts",
                type: "uint256[]",
              },
              {
                indexed: !1,
                internalType: "uint256[]",
                name: "fees",
                type: "uint256[]",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "invariant",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "lpTokenSupply",
                type: "uint256",
              },
            ],
            name: "AddLiquidity",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "key",
                type: "bytes32",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newAdminFee",
                type: "uint256",
              },
            ],
            name: "NewAdminFee",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "key",
                type: "bytes32",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newSwapFee",
                type: "uint256",
              },
            ],
            name: "NewSwapFee",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "key",
                type: "bytes32",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "provider",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256[]",
                name: "tokenAmounts",
                type: "uint256[]",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "lpTokenSupply",
                type: "uint256",
              },
            ],
            name: "RemoveLiquidity",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "key",
                type: "bytes32",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "provider",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256[]",
                name: "tokenAmounts",
                type: "uint256[]",
              },
              {
                indexed: !1,
                internalType: "uint256[]",
                name: "fees",
                type: "uint256[]",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "invariant",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "lpTokenSupply",
                type: "uint256",
              },
            ],
            name: "RemoveLiquidityImbalance",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "key",
                type: "bytes32",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "provider",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "lpTokenAmount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "lpTokenSupply",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "boughtId",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "tokensBought",
                type: "uint256",
              },
            ],
            name: "RemoveLiquidityOne",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "key",
                type: "bytes32",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "buyer",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "tokensSold",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "tokensBought",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint128",
                name: "soldId",
                type: "uint128",
              },
              {
                indexed: !1,
                internalType: "uint128",
                name: "boughtId",
                type: "uint128",
              },
            ],
            name: "TokenSwap",
            type: "event",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "key", type: "bytes32" },
              { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
              { internalType: "uint256", name: "minToMint", type: "uint256" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "addSwapLiquidity",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "key", type: "bytes32" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "calculateRemoveSwapLiquidity",
            outputs: [
              { internalType: "uint256[]", name: "", type: "uint256[]" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "key", type: "bytes32" },
              { internalType: "uint256", name: "tokenAmount", type: "uint256" },
              { internalType: "uint8", name: "tokenIndex", type: "uint8" },
            ],
            name: "calculateRemoveSwapLiquidityOneToken",
            outputs: [
              {
                internalType: "uint256",
                name: "availableTokenAmount",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "key", type: "bytes32" },
              { internalType: "uint8", name: "tokenIndexFrom", type: "uint8" },
              { internalType: "uint8", name: "tokenIndexTo", type: "uint8" },
              { internalType: "uint256", name: "dx", type: "uint256" },
            ],
            name: "calculateSwap",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "key", type: "bytes32" },
              { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
              { internalType: "bool", name: "deposit", type: "bool" },
            ],
            name: "calculateSwapTokenAmount",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "bytes32", name: "key", type: "bytes32" }],
            name: "getSwapA",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "bytes32", name: "key", type: "bytes32" }],
            name: "getSwapAPrecise",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "key", type: "bytes32" },
              { internalType: "uint256", name: "index", type: "uint256" },
            ],
            name: "getSwapAdminBalance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "bytes32", name: "key", type: "bytes32" }],
            name: "getSwapLPToken",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "bytes32", name: "key", type: "bytes32" }],
            name: "getSwapStorage",
            outputs: [
              {
                components: [
                  { internalType: "bytes32", name: "key", type: "bytes32" },
                  {
                    internalType: "uint256",
                    name: "initialA",
                    type: "uint256",
                  },
                  { internalType: "uint256", name: "futureA", type: "uint256" },
                  {
                    internalType: "uint256",
                    name: "initialATime",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "futureATime",
                    type: "uint256",
                  },
                  { internalType: "uint256", name: "swapFee", type: "uint256" },
                  {
                    internalType: "uint256",
                    name: "adminFee",
                    type: "uint256",
                  },
                  {
                    internalType: "contract LPToken",
                    name: "lpToken",
                    type: "address",
                  },
                  {
                    internalType: "contract IERC20[]",
                    name: "pooledTokens",
                    type: "address[]",
                  },
                  {
                    internalType: "uint256[]",
                    name: "tokenPrecisionMultipliers",
                    type: "uint256[]",
                  },
                  {
                    internalType: "uint256[]",
                    name: "balances",
                    type: "uint256[]",
                  },
                  {
                    internalType: "uint256[]",
                    name: "adminFees",
                    type: "uint256[]",
                  },
                  { internalType: "bool", name: "disabled", type: "bool" },
                  {
                    internalType: "uint256",
                    name: "removeTime",
                    type: "uint256",
                  },
                ],
                internalType: "struct SwapUtils.Swap",
                name: "",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "key", type: "bytes32" },
              { internalType: "uint8", name: "index", type: "uint8" },
            ],
            name: "getSwapToken",
            outputs: [
              { internalType: "contract IERC20", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "key", type: "bytes32" },
              { internalType: "uint8", name: "index", type: "uint8" },
            ],
            name: "getSwapTokenBalance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "key", type: "bytes32" },
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
            ],
            name: "getSwapTokenIndex",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "bytes32", name: "key", type: "bytes32" }],
            name: "getSwapVirtualPrice",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "key", type: "bytes32" },
              { internalType: "uint256", name: "amount", type: "uint256" },
              {
                internalType: "uint256[]",
                name: "minAmounts",
                type: "uint256[]",
              },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "removeSwapLiquidity",
            outputs: [
              { internalType: "uint256[]", name: "", type: "uint256[]" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "key", type: "bytes32" },
              { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
              {
                internalType: "uint256",
                name: "maxBurnAmount",
                type: "uint256",
              },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "removeSwapLiquidityImbalance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "key", type: "bytes32" },
              { internalType: "uint256", name: "tokenAmount", type: "uint256" },
              { internalType: "uint8", name: "tokenIndex", type: "uint8" },
              { internalType: "uint256", name: "minAmount", type: "uint256" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "removeSwapLiquidityOneToken",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "key", type: "bytes32" },
              { internalType: "uint8", name: "tokenIndexFrom", type: "uint8" },
              { internalType: "uint8", name: "tokenIndexTo", type: "uint8" },
              { internalType: "uint256", name: "dx", type: "uint256" },
              { internalType: "uint256", name: "minDy", type: "uint256" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "swap",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "key", type: "bytes32" },
              { internalType: "uint256", name: "amountIn", type: "uint256" },
              { internalType: "address", name: "assetIn", type: "address" },
              { internalType: "address", name: "assetOut", type: "address" },
              {
                internalType: "uint256",
                name: "minAmountOut",
                type: "uint256",
              },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "swapExact",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "key", type: "bytes32" },
              { internalType: "uint256", name: "amountOut", type: "uint256" },
              { internalType: "address", name: "assetIn", type: "address" },
              { internalType: "address", name: "assetOut", type: "address" },
              { internalType: "uint256", name: "maxAmountIn", type: "uint256" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "swapExactOut",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        BalancerVault: [
          {
            inputs: [
              {
                components: [
                  { internalType: "bytes32", name: "poolId", type: "bytes32" },
                  {
                    internalType: "enum IVault.SwapKind",
                    name: "kind",
                    type: "uint8",
                  },
                  {
                    internalType: "contract IAsset",
                    name: "assetIn",
                    type: "address",
                  },
                  {
                    internalType: "contract IAsset",
                    name: "assetOut",
                    type: "address",
                  },
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  { internalType: "bytes", name: "userData", type: "bytes" },
                ],
                internalType: "struct IVault.SingleSwap",
                name: "singleSwap",
                type: "tuple",
              },
              {
                components: [
                  { internalType: "address", name: "sender", type: "address" },
                  {
                    internalType: "bool",
                    name: "fromInternalBalance",
                    type: "bool",
                  },
                  {
                    internalType: "address payable",
                    name: "recipient",
                    type: "address",
                  },
                  {
                    internalType: "bool",
                    name: "toInternalBalance",
                    type: "bool",
                  },
                ],
                internalType: "struct IVault.FundManagement",
                name: "funds",
                type: "tuple",
              },
              { internalType: "uint256", name: "limit", type: "uint256" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "swap",
            outputs: [
              {
                internalType: "uint256",
                name: "amountCalculated",
                type: "uint256",
              },
            ],
            stateMutability: "payable",
            type: "function",
          },
        ],
        WithdrawQueue: [
          { inputs: [], stateMutability: "nonpayable", type: "constructor" },
          { inputs: [], name: "EarlyClaim", type: "error" },
          { inputs: [], name: "InvalidWithdrawIndex", type: "error" },
          { inputs: [], name: "InvalidZeroInput", type: "error" },
          { inputs: [], name: "IsNativeAddressNotAllowed", type: "error" },
          { inputs: [], name: "NotDepositQueue", type: "error" },
          { inputs: [], name: "NotDepositWithdrawPauser", type: "error" },
          { inputs: [], name: "NotEnoughCollateralValue", type: "error" },
          { inputs: [], name: "NotEnoughWithdrawBuffer", type: "error" },
          { inputs: [], name: "NotWithdrawQueueAdmin", type: "error" },
          { inputs: [], name: "QueuedWithdrawalNotFilled", type: "error" },
          { inputs: [], name: "TransferFailed", type: "error" },
          { inputs: [], name: "UnsupportedWithdrawAsset", type: "error" },
          { inputs: [], name: "WithdrawQueueNotEnabled", type: "error" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "oldCoolDownPeriod",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newCoolDownPeriod",
                type: "uint256",
              },
            ],
            name: "CoolDownPeriodUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "asset",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "ERC20BufferFilled",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "EthBufferFilled",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint8",
                name: "version",
                type: "uint8",
              },
            ],
            name: "Initialized",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "account",
                type: "address",
              },
            ],
            name: "Paused",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "asset",
                type: "address",
              },
            ],
            name: "QueueFilled",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "account",
                type: "address",
              },
            ],
            name: "Unpaused",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "oldBufferTarget",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newBufferTarget",
                type: "uint256",
              },
            ],
            name: "WithdrawBufferTargetUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "asset",
                type: "address",
              },
            ],
            name: "WithdrawQueueDisabled",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "asset",
                type: "address",
              },
            ],
            name: "WithdrawQueueEnabled",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                components: [
                  {
                    internalType: "address",
                    name: "collateralToken",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "withdrawRequestID",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "amountToRedeem",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "ezETHLocked",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "createdAt",
                    type: "uint256",
                  },
                ],
                indexed: !1,
                internalType: "struct WithdrawQueueStorageV1.WithdrawRequest",
                name: "withdrawRequest",
                type: "tuple",
              },
            ],
            name: "WithdrawRequestClaimed",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "uint256",
                name: "withdrawRequestID",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "claimToken",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amountToRedeem",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "ezETHAmountLocked",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "withdrawRequestIndex",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "bool",
                name: "queued",
                type: "bool",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "queueFilled",
                type: "uint256",
              },
            ],
            name: "WithdrawRequestCreated",
            type: "event",
          },
          {
            inputs: [],
            name: "IS_NATIVE",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "withdrawRequestIndex",
                type: "uint256",
              },
              { internalType: "address", name: "user", type: "address" },
            ],
            name: "claim",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "claimReserve",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "coolDownPeriod",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_asset", type: "address" },
            ],
            name: "disableERC20WithdrawQueue",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_asset", type: "address" },
            ],
            name: "enableERC20WithdrawQueue",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "erc20WithdrawQueue",
            outputs: [
              {
                internalType: "uint256",
                name: "queuedWithdrawToFill",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "queuedWithdrawFilled",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "erc20WithdrawQueueEnabled",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "ethWithdrawQueue",
            outputs: [
              {
                internalType: "uint256",
                name: "queuedWithdrawToFill",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "queuedWithdrawFilled",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "ezETH",
            outputs: [
              {
                internalType: "contract IEzEthToken",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_asset", type: "address" },
              { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "fillERC20WithdrawBuffer",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "fillEthWithdrawBuffer",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_asset", type: "address" },
            ],
            name: "getAvailableToWithdraw",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
            ],
            name: "getOutstandingWithdrawRequests",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_asset", type: "address" },
            ],
            name: "getWithdrawDeficit",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IRoleManager",
                name: "_roleManager",
                type: "address",
              },
              {
                internalType: "contract IRestakeManager",
                name: "_restakeManager",
                type: "address",
              },
              {
                internalType: "contract IEzEthToken",
                name: "_ezETH",
                type: "address",
              },
              {
                internalType: "contract IRenzoOracle",
                name: "_renzoOracle",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "_coolDownPeriod",
                type: "uint256",
              },
              {
                components: [
                  { internalType: "address", name: "asset", type: "address" },
                  {
                    internalType: "uint256",
                    name: "bufferAmount",
                    type: "uint256",
                  },
                ],
                internalType:
                  "struct WithdrawQueueStorageV1.TokenWithdrawBuffer[]",
                name: "_withdrawalBufferTarget",
                type: "tuple[]",
              },
            ],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "pause",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "paused",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "renzoOracle",
            outputs: [
              {
                internalType: "contract IRenzoOracle",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "restakeManager",
            outputs: [
              {
                internalType: "contract IRestakeManager",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "roleManager",
            outputs: [
              {
                internalType: "contract IRoleManager",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "unpause",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_newCoolDownPeriod",
                type: "uint256",
              },
            ],
            name: "updateCoolDownPeriod",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  { internalType: "address", name: "asset", type: "address" },
                  {
                    internalType: "uint256",
                    name: "bufferAmount",
                    type: "uint256",
                  },
                ],
                internalType:
                  "struct WithdrawQueueStorageV1.TokenWithdrawBuffer[]",
                name: "_newBufferTarget",
                type: "tuple[]",
              },
            ],
            name: "updateWithdrawBufferTarget",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_amount", type: "uint256" },
              { internalType: "address", name: "_assetOut", type: "address" },
            ],
            name: "withdraw",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            name: "withdrawQueued",
            outputs: [
              { internalType: "bool", name: "queued", type: "bool" },
              { internalType: "uint256", name: "fillAt", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "withdrawRequestNonce",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "", type: "address" },
              { internalType: "uint256", name: "", type: "uint256" },
            ],
            name: "withdrawRequests",
            outputs: [
              {
                internalType: "address",
                name: "collateralToken",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "withdrawRequestID",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountToRedeem",
                type: "uint256",
              },
              { internalType: "uint256", name: "ezETHLocked", type: "uint256" },
              { internalType: "uint256", name: "createdAt", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "withdrawalBufferTarget",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
        ],
        StrategyBaseTVLLimits: [
          {
            inputs: [
              {
                internalType: "contract IStrategyManager",
                name: "_strategyManager",
                type: "address",
              },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint8",
                name: "version",
                type: "uint8",
              },
            ],
            name: "Initialized",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "previousValue",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newValue",
                type: "uint256",
              },
            ],
            name: "MaxPerDepositUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "previousValue",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newValue",
                type: "uint256",
              },
            ],
            name: "MaxTotalDepositsUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newPausedStatus",
                type: "uint256",
              },
            ],
            name: "Paused",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "contract IPauserRegistry",
                name: "pauserRegistry",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "contract IPauserRegistry",
                name: "newPauserRegistry",
                type: "address",
              },
            ],
            name: "PauserRegistrySet",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newPausedStatus",
                type: "uint256",
              },
            ],
            name: "Unpaused",
            type: "event",
          },
          {
            inputs: [
              {
                internalType: "contract IERC20",
                name: "token",
                type: "address",
              },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "deposit",
            outputs: [
              { internalType: "uint256", name: "newShares", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "explanation",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [],
            name: "getTVLLimits",
            outputs: [
              { internalType: "uint256", name: "", type: "uint256" },
              { internalType: "uint256", name: "", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_maxPerDeposit",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "_maxTotalDeposits",
                type: "uint256",
              },
              {
                internalType: "contract IERC20",
                name: "_underlyingToken",
                type: "address",
              },
              {
                internalType: "contract IPauserRegistry",
                name: "_pauserRegistry",
                type: "address",
              },
            ],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IERC20",
                name: "_underlyingToken",
                type: "address",
              },
              {
                internalType: "contract IPauserRegistry",
                name: "_pauserRegistry",
                type: "address",
              },
            ],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "maxPerDeposit",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "maxTotalDeposits",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "newPausedStatus",
                type: "uint256",
              },
            ],
            name: "pause",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "pauseAll",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "uint8", name: "index", type: "uint8" }],
            name: "paused",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "paused",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "pauserRegistry",
            outputs: [
              {
                internalType: "contract IPauserRegistry",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IPauserRegistry",
                name: "newPauserRegistry",
                type: "address",
              },
            ],
            name: "setPauserRegistry",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "newMaxPerDeposit",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "newMaxTotalDeposits",
                type: "uint256",
              },
            ],
            name: "setTVLLimits",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
            ],
            name: "shares",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "amountShares",
                type: "uint256",
              },
            ],
            name: "sharesToUnderlying",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "amountShares",
                type: "uint256",
              },
            ],
            name: "sharesToUnderlyingView",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "strategyManager",
            outputs: [
              {
                internalType: "contract IStrategyManager",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalShares",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "amountUnderlying",
                type: "uint256",
              },
            ],
            name: "underlyingToShares",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "amountUnderlying",
                type: "uint256",
              },
            ],
            name: "underlyingToSharesView",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "underlyingToken",
            outputs: [
              { internalType: "contract IERC20", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "newPausedStatus",
                type: "uint256",
              },
            ],
            name: "unpause",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
            ],
            name: "userUnderlying",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
            ],
            name: "userUnderlyingView",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "recipient", type: "address" },
              {
                internalType: "contract IERC20",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amountShares",
                type: "uint256",
              },
            ],
            name: "withdraw",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        REZVesting: [
          {
            inputs: [
              {
                internalType: "contract IERC20",
                name: "_REZ",
                type: "address",
              },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          { inputs: [], name: "InvalidAllocationAmount", type: "error" },
          { inputs: [], name: "InvalidAllocationsInput", type: "error" },
          { inputs: [], name: "InvalidStartTime", type: "error" },
          { inputs: [], name: "InvalidVestingCycles", type: "error" },
          { inputs: [], name: "InvalidVestingInterval", type: "error" },
          { inputs: [], name: "InvalidZeroInput", type: "error" },
          { inputs: [], name: "NoUserAllocation", type: "error" },
          { inputs: [], name: "NonZeroClaimAmount", type: "error" },
          { inputs: [], name: "NothingToClaim", type: "error" },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
            ],
            name: "UserAlreadyHasAllocation",
            type: "error",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address[]",
                name: "users",
                type: "address[]",
              },
            ],
            name: "AllocationsReset",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address[]",
                name: "users",
                type: "address[]",
              },
              {
                components: [
                  {
                    internalType: "uint64",
                    name: "startEpoch",
                    type: "uint64",
                  },
                  {
                    internalType: "uint64",
                    name: "vestingInterval",
                    type: "uint64",
                  },
                  {
                    internalType: "uint64",
                    name: "vestingCycles",
                    type: "uint64",
                  },
                  {
                    internalType: "uint64",
                    name: "cliffDuration",
                    type: "uint64",
                  },
                  {
                    internalType: "uint256",
                    name: "cliffAmount",
                    type: "uint256",
                  },
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  { internalType: "uint256", name: "claimed", type: "uint256" },
                ],
                indexed: !1,
                internalType: "struct REZVestingStorageV1.Allocation[]",
                name: "allocations",
                type: "tuple[]",
              },
            ],
            name: "AllocationsSet",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "Claim",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "delegator",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "fromDelegate",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "toDelegate",
                type: "address",
              },
            ],
            name: "DelegateChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "delegate",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "previousBalance",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newBalance",
                type: "uint256",
              },
            ],
            name: "DelegateVotesChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [],
            name: "EIP712DomainChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint8",
                name: "version",
                type: "uint8",
              },
            ],
            name: "Initialized",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferStarted",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "account",
                type: "address",
              },
            ],
            name: "Paused",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "account",
                type: "address",
              },
            ],
            name: "Unpaused",
            type: "event",
          },
          {
            inputs: [],
            name: "CLOCK_MODE",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "DOMAIN_SEPARATOR",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "REN",
            outputs: [
              { internalType: "contract IERC20", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "acceptOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "allocations",
            outputs: [
              { internalType: "uint64", name: "startEpoch", type: "uint64" },
              {
                internalType: "uint64",
                name: "vestingInterval",
                type: "uint64",
              },
              { internalType: "uint64", name: "vestingCycles", type: "uint64" },
              { internalType: "uint64", name: "cliffDuration", type: "uint64" },
              { internalType: "uint256", name: "cliffAmount", type: "uint256" },
              { internalType: "uint256", name: "amount", type: "uint256" },
              { internalType: "uint256", name: "claimed", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "claim",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_user", type: "address" },
            ],
            name: "claimable",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "clock",
            outputs: [{ internalType: "uint48", name: "", type: "uint48" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "delegatee", type: "address" },
            ],
            name: "delegate",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "delegatee", type: "address" },
              { internalType: "uint256", name: "nonce", type: "uint256" },
              { internalType: "uint256", name: "expiry", type: "uint256" },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            name: "delegateBySig",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "delegates",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "eip712Domain",
            outputs: [
              { internalType: "bytes1", name: "fields", type: "bytes1" },
              { internalType: "string", name: "name", type: "string" },
              { internalType: "string", name: "version", type: "string" },
              { internalType: "uint256", name: "chainId", type: "uint256" },
              {
                internalType: "address",
                name: "verifyingContract",
                type: "address",
              },
              { internalType: "bytes32", name: "salt", type: "bytes32" },
              {
                internalType: "uint256[]",
                name: "extensions",
                type: "uint256[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "timepoint", type: "uint256" },
            ],
            name: "getPastTotalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
              { internalType: "uint256", name: "timepoint", type: "uint256" },
            ],
            name: "getPastVotes",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "getVotes",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "nonces",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "pause",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "paused",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "pendingOwner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address[]", name: "_users", type: "address[]" },
            ],
            name: "resetUserAllocations",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address[]", name: "_users", type: "address[]" },
              {
                components: [
                  {
                    internalType: "uint64",
                    name: "startEpoch",
                    type: "uint64",
                  },
                  {
                    internalType: "uint64",
                    name: "vestingInterval",
                    type: "uint64",
                  },
                  {
                    internalType: "uint64",
                    name: "vestingCycles",
                    type: "uint64",
                  },
                  {
                    internalType: "uint64",
                    name: "cliffDuration",
                    type: "uint64",
                  },
                  {
                    internalType: "uint256",
                    name: "cliffAmount",
                    type: "uint256",
                  },
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  { internalType: "uint256", name: "claimed", type: "uint256" },
                ],
                internalType: "struct REZVestingStorageV1.Allocation[]",
                name: "_allocations",
                type: "tuple[]",
              },
            ],
            name: "setAllocations",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "totalVotingPower",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "unpause",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_user", type: "address" },
            ],
            name: "vested",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_user", type: "address" },
            ],
            name: "votingPower",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
        ],
      };
    },
    6664: function (e, t, n) {
      n.d(t, {
        Sn8: function () {
          return g;
        },
        mJC: function () {
          return T;
        },
        Q2b: function () {
          return A;
        },
        eII: function () {
          return M;
        },
        iMA: function () {
          return f;
        },
        mJh: function () {
          return z;
        },
        PVH: function () {
          return w;
        },
        RX6: function () {
          return F;
        },
      });
      var a,
        i,
        r,
        s,
        u,
        o,
        p,
        l,
        y = n(40950),
        d = n(75917),
        c = n(47185),
        m = n(74379);
      async function A(e, t, n) {
        let a = await b(e, t, n);
        return (0, m.Hw)(a), a;
      }
      async function b(e, t, n) {
        var a;
        return (
          (a = await (0, m.IL)(e, t, n)),
          (0, m.JU)(
            a,
            (0, y.Xn)([
              ["discriminator", (0, d.FW)()],
              ["admin", (0, c.Iw)()],
              ["restakingProgram", (0, c.Iw)()],
              ["epochLength", (0, d.FW)()],
              ["numVaults", (0, d.FW)()],
              ["depositWithdrawalFeeCapBps", (0, d.OT)()],
              ["feeRateOfChangeBps", (0, d.OT)()],
              ["feeBumpBps", (0, d.OT)()],
              ["programFeeBps", (0, d.OT)()],
              ["programFeeWallet", (0, c.Iw)()],
              ["feeAdmin", (0, c.Iw)()],
              ["bump", (0, d.RS)()],
              ["reserved", (0, y.LV)((0, d.RS)(), { size: 229 })],
            ])
          )
        );
      }
      function f() {
        return (0, y.Xn)([
          ["stakedAmount", (0, d.FW)()],
          ["enqueuedForCooldownAmount", (0, d.FW)()],
          ["coolingDownAmount", (0, d.FW)()],
          ["reserved", (0, y.LV)((0, d.RS)(), { size: 256 })],
        ]);
      }
      function T(e) {
        return (0, m.JU)(
          e,
          (0, y.Xn)([
            ["discriminator", (0, d.FW)()],
            ["vault", (0, c.Iw)()],
            ["staker", (0, c.Iw)()],
            ["base", (0, c.Iw)()],
            ["vrtAmount", (0, d.FW)()],
            ["slotUnstaked", (0, d.FW)()],
            ["bump", (0, d.RS)()],
            ["reserved", (0, y.LV)((0, d.RS)(), { size: 263 })],
          ])
        );
      }
      ((a = u || (u = {}))[(a.DelegationAdmin = 0)] = "DelegationAdmin"),
        (a[(a.OperatorAdmin = 1)] = "OperatorAdmin"),
        (a[(a.NcnAdmin = 2)] = "NcnAdmin"),
        (a[(a.SlasherAdmin = 3)] = "SlasherAdmin"),
        (a[(a.CapacityAdmin = 4)] = "CapacityAdmin"),
        (a[(a.FeeWallet = 5)] = "FeeWallet"),
        (a[(a.MintBurnAdmin = 6)] = "MintBurnAdmin"),
        (a[(a.WithdrawAdmin = 7)] = "WithdrawAdmin"),
        (a[(a.FeeAdmin = 8)] = "FeeAdmin"),
        ((i = o || (o = {}))[(i.Greedy = 0)] = "Greedy");
      let g = "Vau1t6sLNxnzB7ZDsef8TLbPLfyZMYXH8WTNqUdm9g8";
      function w(e) {
        return "Error message not available in production bundles.";
      }
      ((r = p || (p = {}))[(r.Config = 0)] = "Config"),
        (r[(r.Vault = 1)] = "Vault"),
        (r[(r.VaultNcnSlasherOperatorTicket = 2)] =
          "VaultNcnSlasherOperatorTicket"),
        (r[(r.VaultNcnSlasherTicket = 3)] = "VaultNcnSlasherTicket"),
        (r[(r.VaultNcnTicket = 4)] = "VaultNcnTicket"),
        (r[(r.VaultOperatorDelegation = 5)] = "VaultOperatorDelegation"),
        (r[(r.VaultStakerWithdrawalTicket = 6)] =
          "VaultStakerWithdrawalTicket"),
        (r[(r.VaultUpdateStateTracker = 7)] = "VaultUpdateStateTracker"),
        ((s = l || (l = {}))[(s.InitializeConfig = 0)] = "InitializeConfig"),
        (s[(s.InitializeVault = 1)] = "InitializeVault"),
        (s[(s.InitializeVaultWithMint = 2)] = "InitializeVaultWithMint"),
        (s[(s.InitializeVaultOperatorDelegation = 3)] =
          "InitializeVaultOperatorDelegation"),
        (s[(s.InitializeVaultNcnTicket = 4)] = "InitializeVaultNcnTicket"),
        (s[(s.InitializeVaultNcnSlasherOperatorTicket = 5)] =
          "InitializeVaultNcnSlasherOperatorTicket"),
        (s[(s.InitializeVaultNcnSlasherTicket = 6)] =
          "InitializeVaultNcnSlasherTicket"),
        (s[(s.WarmupVaultNcnTicket = 7)] = "WarmupVaultNcnTicket"),
        (s[(s.CooldownVaultNcnTicket = 8)] = "CooldownVaultNcnTicket"),
        (s[(s.WarmupVaultNcnSlasherTicket = 9)] =
          "WarmupVaultNcnSlasherTicket"),
        (s[(s.CooldownVaultNcnSlasherTicket = 10)] =
          "CooldownVaultNcnSlasherTicket"),
        (s[(s.MintTo = 11)] = "MintTo"),
        (s[(s.Burn = 12)] = "Burn"),
        (s[(s.EnqueueWithdrawal = 13)] = "EnqueueWithdrawal"),
        (s[(s.ChangeWithdrawalTicketOwner = 14)] =
          "ChangeWithdrawalTicketOwner"),
        (s[(s.BurnWithdrawTicket = 15)] = "BurnWithdrawTicket"),
        (s[(s.SetDepositCapacity = 16)] = "SetDepositCapacity"),
        (s[(s.SetFees = 17)] = "SetFees"),
        (s[(s.AdminWithdraw = 18)] = "AdminWithdraw"),
        (s[(s.SetAdmin = 19)] = "SetAdmin"),
        (s[(s.SetSecondaryAdmin = 20)] = "SetSecondaryAdmin"),
        (s[(s.AddDelegation = 21)] = "AddDelegation"),
        (s[(s.CooldownDelegation = 22)] = "CooldownDelegation"),
        (s[(s.UpdateVaultBalance = 23)] = "UpdateVaultBalance"),
        (s[(s.InitializeVaultUpdateStateTracker = 24)] =
          "InitializeVaultUpdateStateTracker"),
        (s[(s.CrankVaultUpdateStateTracker = 25)] =
          "CrankVaultUpdateStateTracker"),
        (s[(s.CloseVaultUpdateStateTracker = 26)] =
          "CloseVaultUpdateStateTracker"),
        (s[(s.CreateTokenMetadata = 27)] = "CreateTokenMetadata"),
        (s[(s.UpdateTokenMetadata = 28)] = "UpdateTokenMetadata"),
        (s[(s.Slash = 29)] = "Slash");
      var h = n(7581),
        E = n(64767),
        v = n(86772);
      function x(e, t) {
        return (n) => {
          if (!n.value) {
            if ("omitted" === t) return;
            return Object.freeze({ address: e, role: E.g4.READONLY });
          }
          let a = n.isWritable ? E.g4.WRITABLE : E.g4.READONLY;
          return Object.freeze({
            address: (function (e) {
              if (!e) throw Error("Expected a Address.");
              return "object" == typeof e && "address" in e
                ? e.address
                : Array.isArray(e)
                ? e[0]
                : e;
            })(n.value),
            role: k(n.value) ? (0, E.$k)(a) : a,
            ...(k(n.value) ? { signer: n.value } : {}),
          });
        };
      }
      function k(e) {
        return !!e && "object" == typeof e && "address" in e && (0, v.he)(e);
      }
      function M(e) {
        var t, n, a, i, r, s, u, o, p, l, c, m, A;
        let b = {
          config: {
            value: null !== (t = e.config) && void 0 !== t ? t : null,
            isWritable: !1,
          },
          vault: {
            value: null !== (n = e.vault) && void 0 !== n ? n : null,
            isWritable: !0,
          },
          vaultTokenAccount: {
            value:
              null !== (a = e.vaultTokenAccount) && void 0 !== a ? a : null,
            isWritable: !0,
          },
          vrtMint: {
            value: null !== (i = e.vrtMint) && void 0 !== i ? i : null,
            isWritable: !0,
          },
          staker: {
            value: null !== (r = e.staker) && void 0 !== r ? r : null,
            isWritable: !0,
          },
          stakerTokenAccount: {
            value:
              null !== (s = e.stakerTokenAccount) && void 0 !== s ? s : null,
            isWritable: !0,
          },
          vaultStakerWithdrawalTicket: {
            value:
              null !== (u = e.vaultStakerWithdrawalTicket) && void 0 !== u
                ? u
                : null,
            isWritable: !0,
          },
          vaultStakerWithdrawalTicketTokenAccount: {
            value:
              null !== (o = e.vaultStakerWithdrawalTicketTokenAccount) &&
              void 0 !== o
                ? o
                : null,
            isWritable: !0,
          },
          vaultFeeTokenAccount: {
            value:
              null !== (p = e.vaultFeeTokenAccount) && void 0 !== p ? p : null,
            isWritable: !0,
          },
          programFeeTokenAccount: {
            value:
              null !== (l = e.programFeeTokenAccount) && void 0 !== l
                ? l
                : null,
            isWritable: !0,
          },
          tokenProgram: {
            value: null !== (c = e.tokenProgram) && void 0 !== c ? c : null,
            isWritable: !1,
          },
          systemProgram: {
            value: null !== (m = e.systemProgram) && void 0 !== m ? m : null,
            isWritable: !1,
          },
          burnSigner: {
            value: null !== (A = e.burnSigner) && void 0 !== A ? A : null,
            isWritable: !1,
          },
        };
        b.tokenProgram.value ||
          (b.tokenProgram.value =
            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
          b.systemProgram.value ||
            (b.systemProgram.value = "11111111111111111111111111111111");
        let f = x(g, "programId");
        return {
          accounts: [
            f(b.config),
            f(b.vault),
            f(b.vaultTokenAccount),
            f(b.vrtMint),
            f(b.staker),
            f(b.stakerTokenAccount),
            f(b.vaultStakerWithdrawalTicket),
            f(b.vaultStakerWithdrawalTicketTokenAccount),
            f(b.vaultFeeTokenAccount),
            f(b.programFeeTokenAccount),
            f(b.tokenProgram),
            f(b.systemProgram),
            f(b.burnSigner),
          ],
          programAddress: g,
          data: (0, h.Nz)((0, y.Q5)([["discriminator", (0, d.$L)()]]), (e) => ({
            ...e,
            discriminator: 14,
          })).encode({}),
        };
      }
      function z(e) {
        var t, n, a, i, r, s, u, o, p, l;
        let c = {
            config: {
              value: null !== (t = e.config) && void 0 !== t ? t : null,
              isWritable: !1,
            },
            vault: {
              value: null !== (n = e.vault) && void 0 !== n ? n : null,
              isWritable: !0,
            },
            vaultStakerWithdrawalTicket: {
              value:
                null !== (a = e.vaultStakerWithdrawalTicket) && void 0 !== a
                  ? a
                  : null,
              isWritable: !0,
            },
            vaultStakerWithdrawalTicketTokenAccount: {
              value:
                null !== (i = e.vaultStakerWithdrawalTicketTokenAccount) &&
                void 0 !== i
                  ? i
                  : null,
              isWritable: !0,
            },
            staker: {
              value: null !== (r = e.staker) && void 0 !== r ? r : null,
              isWritable: !0,
            },
            stakerVrtTokenAccount: {
              value:
                null !== (s = e.stakerVrtTokenAccount) && void 0 !== s
                  ? s
                  : null,
              isWritable: !0,
            },
            base: {
              value: null !== (u = e.base) && void 0 !== u ? u : null,
              isWritable: !1,
            },
            tokenProgram: {
              value: null !== (o = e.tokenProgram) && void 0 !== o ? o : null,
              isWritable: !1,
            },
            systemProgram: {
              value: null !== (p = e.systemProgram) && void 0 !== p ? p : null,
              isWritable: !1,
            },
            burnSigner: {
              value: null !== (l = e.burnSigner) && void 0 !== l ? l : null,
              isWritable: !1,
            },
          },
          m = { ...e };
        c.tokenProgram.value ||
          (c.tokenProgram.value =
            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
          c.systemProgram.value ||
            (c.systemProgram.value = "11111111111111111111111111111111");
        let A = x(g, "programId");
        return {
          accounts: [
            A(c.config),
            A(c.vault),
            A(c.vaultStakerWithdrawalTicket),
            A(c.vaultStakerWithdrawalTicketTokenAccount),
            A(c.staker),
            A(c.stakerVrtTokenAccount),
            A(c.base),
            A(c.tokenProgram),
            A(c.systemProgram),
            A(c.burnSigner),
          ],
          programAddress: g,
          data: (0, h.Nz)(
            (0, y.Q5)([
              ["discriminator", (0, d.$L)()],
              ["amount", (0, d.bP)()],
            ]),
            (e) => ({ ...e, discriminator: 12 })
          ).encode(m),
        };
      }
      function F(e) {
        var t, n, a, i, r, s, u, o, p, l;
        let c = {
            config: {
              value: null !== (t = e.config) && void 0 !== t ? t : null,
              isWritable: !1,
            },
            vault: {
              value: null !== (n = e.vault) && void 0 !== n ? n : null,
              isWritable: !0,
            },
            vrtMint: {
              value: null !== (a = e.vrtMint) && void 0 !== a ? a : null,
              isWritable: !0,
            },
            depositor: {
              value: null !== (i = e.depositor) && void 0 !== i ? i : null,
              isWritable: !0,
            },
            depositorTokenAccount: {
              value:
                null !== (r = e.depositorTokenAccount) && void 0 !== r
                  ? r
                  : null,
              isWritable: !0,
            },
            vaultTokenAccount: {
              value:
                null !== (s = e.vaultTokenAccount) && void 0 !== s ? s : null,
              isWritable: !0,
            },
            depositorVrtTokenAccount: {
              value:
                null !== (u = e.depositorVrtTokenAccount) && void 0 !== u
                  ? u
                  : null,
              isWritable: !0,
            },
            vaultFeeTokenAccount: {
              value:
                null !== (o = e.vaultFeeTokenAccount) && void 0 !== o
                  ? o
                  : null,
              isWritable: !0,
            },
            tokenProgram: {
              value: null !== (p = e.tokenProgram) && void 0 !== p ? p : null,
              isWritable: !1,
            },
            mintSigner: {
              value: null !== (l = e.mintSigner) && void 0 !== l ? l : null,
              isWritable: !1,
            },
          },
          m = { ...e };
        c.tokenProgram.value ||
          (c.tokenProgram.value =
            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
        let A = x(g, "programId");
        return {
          accounts: [
            A(c.config),
            A(c.vault),
            A(c.vrtMint),
            A(c.depositor),
            A(c.depositorTokenAccount),
            A(c.vaultTokenAccount),
            A(c.depositorVrtTokenAccount),
            A(c.vaultFeeTokenAccount),
            A(c.tokenProgram),
            A(c.mintSigner),
          ],
          programAddress: g,
          data: (0, h.Nz)(
            (0, y.Q5)([
              ["discriminator", (0, d.$L)()],
              ["amountIn", (0, d.bP)()],
              ["minAmountOut", (0, d.bP)()],
            ]),
            (e) => ({ ...e, discriminator: 11 })
          ).encode(m),
        };
      }
    },
    60458: function (e, t, n) {
      n.d(t, {
        i: function () {
          return s;
        },
      });
      var a = n(25921),
        i = n(47185),
        r = n(6664);
      async function s(e, t) {
        let n = (0, a.gx)(e.rpcEndpoint),
          s = (0, i.Lk)(t.toString());
        return { pubkey: t, data: (await (0, r.Q2b)(n, s)).data };
      }
    },
    49754: function (e, t, n) {
      n.d(t, {
        G: function () {
          return s;
        },
        ht: function () {
          return r;
        },
      });
      var a = n(19900);
      n(45429), n(9109).Buffer;
      let i = (0, a.s$)();
      async function r(e) {
        let t = await i.quoteGet(e);
        if (!t) throw Error("Unable to get quote");
        return t;
      }
      async function s(e, t, n, a) {
        return await i.swapInstructionsPost({
          swapRequest: {
            quoteResponse: t,
            userPublicKey: e,
            dynamicComputeUnitLimit: !0,
            prioritizationFeeLamports: "auto",
            dynamicSlippage: { minBps: n, maxBps: a },
          },
        });
      }
    },
    22721: function (e, t, n) {
      n.d(t, {
        o: function () {
          return sO;
        },
      });
      var a = {};
      n.r(a),
        n.d(a, {
          queryFn: function () {
            return eJ;
          },
          queryKey: function () {
            return eX;
          },
          queryKeyEntity: function () {
            return ej;
          },
          useQuery: function () {
            return eY;
          },
        });
      var i = {};
      n.r(i),
        n.d(i, {
          stats: function () {
            return a;
          },
        });
      var r = {};
      n.r(r),
        n.d(r, {
          queryFn: function () {
            return e5;
          },
          queryKey: function () {
            return e2;
          },
          useQuery: function () {
            return e6;
          },
        });
      var s = {};
      n.r(s),
        n.d(s, {
          balancerEzETHwETHPoolSwapAmount: function () {
            return r;
          },
        });
      var u = {};
      n.r(u),
        n.d(u, {
          queryFn: function () {
            return e4;
          },
          queryKey: function () {
            return e3;
          },
          queryKeyEntity: function () {
            return e8;
          },
          useQuery: function () {
            return e9;
          },
        });
      var o = {};
      n.r(o),
        n.d(o, {
          mirror: function () {
            return u;
          },
        });
      var p = {};
      n.r(p),
        n.d(p, {
          queryFn: function () {
            return ta;
          },
          queryKey: function () {
            return tn;
          },
          useQuery: function () {
            return ti;
          },
        });
      var l = {};
      n.r(l),
        n.d(l, {
          queryFn: function () {
            return tp;
          },
          queryKey: function () {
            return to;
          },
          useQuery: function () {
            return tl;
          },
        });
      var y = {};
      n.r(y),
        n.d(y, {
          calculateSwap: function () {
            return l;
          },
          swapTokens: function () {
            return p;
          },
        });
      var d = {};
      n.r(d),
        n.d(d, {
          queryFn: function () {
            return tk;
          },
          queryKey: function () {
            return tx;
          },
          queryKeyEntity: function () {
            return tv;
          },
          useQuery: function () {
            return tM;
          },
        });
      var c = {};
      n.r(c),
        n.d(c, {
          queryFn: function () {
            return tD;
          },
          queryKey: function () {
            return tB;
          },
          queryKeyEntity: function () {
            return tC;
          },
          useQuery: function () {
            return tI;
          },
        });
      var m = {};
      n.r(m),
        n.d(m, {
          apys: function () {
            return c;
          },
          tvls: function () {
            return d;
          },
        });
      var A = {};
      n.r(A),
        n.d(A, {
          queryFn: function () {
            return tq;
          },
          queryKey: function () {
            return tS;
          },
          queryKeyEntity: function () {
            return tH;
          },
          useQuery: function () {
            return tV;
          },
        });
      var b = {};
      n.r(b),
        n.d(b, {
          queryFn: function () {
            return tU;
          },
          queryKey: function () {
            return tO;
          },
          queryKeyEntity: function () {
            return tP;
          },
          useQuery: function () {
            return tK;
          },
        });
      var f = {};
      n.r(f),
        n.d(f, {
          delegatedTo: function () {
            return A;
          },
          getDeposits: function () {
            return b;
          },
        });
      var T = {};
      n.r(T),
        n.d(T, {
          queryFn: function () {
            return tN;
          },
          queryKey: function () {
            return tW;
          },
          queryKeyEntity: function () {
            return tQ;
          },
          useQuery: function () {
            return t_;
          },
        });
      var g = {};
      n.r(g),
        n.d(g, {
          vaultStats: function () {
            return T;
          },
        });
      var w = {};
      n.r(w),
        n.d(w, {
          queryFn: function () {
            return tJ;
          },
          queryKey: function () {
            return tX;
          },
          queryKeyEntity: function () {
            return tj;
          },
          useQuery: function () {
            return tY;
          },
        });
      var h = {};
      n.r(h),
        n.d(h, {
          queryFn: function () {
            return t1;
          },
          queryKey: function () {
            return t6;
          },
          queryKeyEntity: function () {
            return t5;
          },
          useQuery: function () {
            return t8;
          },
        });
      var E = {};
      n.r(E),
        n.d(E, {
          queryFn: function () {
            return nt;
          },
          queryKey: function () {
            return ne;
          },
          queryKeyEntity: function () {
            return t7;
          },
          useQuery: function () {
            return nn;
          },
        });
      var v = {};
      n.r(v),
        n.d(v, {
          queryFn: function () {
            return ns;
          },
          queryKey: function () {
            return nr;
          },
          queryKeyEntity: function () {
            return ni;
          },
          useQuery: function () {
            return nu;
          },
        });
      var x = {};
      n.r(x),
        n.d(x, {
          queryFn: function () {
            return nl;
          },
          queryKey: function () {
            return np;
          },
          queryKeyEntity: function () {
            return no;
          },
          useQuery: function () {
            return ny;
          },
        });
      var k = {};
      n.r(k),
        n.d(k, {
          getCooldownBlocks: function () {
            return w;
          },
          getSharesToUnderlying: function () {
            return x;
          },
          getVault: function () {
            return E;
          },
          getVaultsStats: function () {
            return v;
          },
          userClaims: function () {
            return h;
          },
        });
      var M = {};
      n.r(M),
        n.d(M, {
          queryFn: function () {
            return nM;
          },
          queryKey: function () {
            return nk;
          },
          useQuery: function () {
            return nz;
          },
        });
      var z = {};
      n.r(z),
        n.d(z, {
          queryFn: function () {
            return nD;
          },
          queryKey: function () {
            return nB;
          },
          queryKeyEntity: function () {
            return nC;
          },
          useQuery: function () {
            return nI;
          },
        });
      var F = {};
      n.r(F),
        n.d(F, {
          queryFn: function () {
            return nO;
          },
          queryKey: function () {
            return nP;
          },
          queryKeyEntity: function () {
            return nV;
          },
          useQuery: function () {
            return nU;
          },
        });
      var C = {};
      n.r(C),
        n.d(C, {
          userClaims: function () {
            return F;
          },
          vault: function () {
            return M;
          },
          withdrawQueue: function () {
            return z;
          },
        });
      var B = {};
      n.r(B),
        n.d(B, {
          queryFn: function () {
            return nQ;
          },
          queryKey: function () {
            return nL;
          },
          useQuery: function () {
            return nW;
          },
        });
      var D = {};
      n.r(D),
        n.d(D, {
          queryFn: function () {
            return nj;
          },
          queryKey: function () {
            return n_;
          },
          useQuery: function () {
            return nX;
          },
        });
      var I = {};
      n.r(I),
        n.d(I, {
          queryFn: function () {
            return nY;
          },
          queryKey: function () {
            return nJ;
          },
          useQuery: function () {
            return nG;
          },
        });
      var R = {};
      n.r(R),
        n.d(R, {
          queryFn: function () {
            return n0;
          },
          queryKey: function () {
            return n$;
          },
          useQuery: function () {
            return n2;
          },
        });
      var H = {};
      n.r(H),
        n.d(H, {
          queryFn: function () {
            return n6;
          },
          queryKey: function () {
            return n5;
          },
          useQuery: function () {
            return n1;
          },
        });
      var S = {};
      n.r(S),
        n.d(S, {
          partialQueryKey: function () {
            return n4;
          },
          queryFn: function () {
            return n7;
          },
          queryKey: function () {
            return n9;
          },
          queryKeyEntity: function () {
            return n3;
          },
          useQuery: function () {
            return ae;
          },
        });
      var q = {};
      n.r(q),
        n.d(q, {
          ERC20TokenAllowance: function () {
            return S;
          },
          ERC20TokenBalance: function () {
            return H;
          },
          ERC20TokenInfo: function () {
            return R;
          },
          currentBlock: function () {
            return D;
          },
          nativeCurrencyBalance: function () {
            return B;
          },
          xRenzoDepositLastEzETHPrice: function () {
            return I;
          },
        });
      var V = {};
      n.r(V),
        n.d(V, {
          queryFn: function () {
            return ar;
          },
          queryKey: function () {
            return ai;
          },
          queryKeyEntity: function () {
            return aa;
          },
          useQuery: function () {
            return as;
          },
        });
      var P = {};
      n.r(P),
        n.d(P, {
          allOperatorsQueryResponseSchema: function () {
            return al;
          },
          queryFn: function () {
            return ac;
          },
          queryKey: function () {
            return ad;
          },
          queryKeyEntity: function () {
            return ay;
          },
          useQuery: function () {
            return am;
          },
        });
      var O = {};
      n.r(O),
        n.d(O, {
          avss: function () {
            return P;
          },
          tvls: function () {
            return V;
          },
        });
      var U = {};
      n.r(U),
        n.d(U, {
          queryFn: function () {
            return aw;
          },
          queryKey: function () {
            return ag;
          },
          queryKeyEntity: function () {
            return aT;
          },
          useQuery: function () {
            return ah;
          },
        });
      var K = {};
      n.r(K),
        n.d(K, {
          queryFn: function () {
            return ak;
          },
          queryKey: function () {
            return ax;
          },
          queryKeyEntity: function () {
            return av;
          },
          useQuery: function () {
            return aM;
          },
        });
      var L = {};
      n.r(L),
        n.d(L, {
          queryFn: function () {
            return aB;
          },
          queryKey: function () {
            return aC;
          },
          queryKeyEntity: function () {
            return aF;
          },
          useQuery: function () {
            return aD;
          },
        });
      var Q = {};
      n.r(Q),
        n.d(Q, {
          queryFn: function () {
            return aS;
          },
          queryKey: function () {
            return aH;
          },
          queryKeyEntity: function () {
            return aR;
          },
          useQuery: function () {
            return aq;
          },
        });
      var W = {};
      n.r(W),
        n.d(W, {
          queryFn: function () {
            return aU;
          },
          queryKey: function () {
            return aO;
          },
          queryKeyEntity: function () {
            return aP;
          },
          useQuery: function () {
            return aK;
          },
        });
      var N = {};
      n.r(N),
        n.d(N, {
          mellowProtocolPoints: function () {
            return W;
          },
        });
      var _ = {};
      n.r(_),
        n.d(_, {
          protocols: function () {
            return N;
          },
          userEigenSeason2Points: function () {
            return Q;
          },
          userPoints: function () {
            return U;
          },
          userSeason1Points: function () {
            return K;
          },
          userSeason2Points: function () {
            return L;
          },
        });
      var j = {};
      n.r(j),
        n.d(j, {
          queryFn: function () {
            return a$;
          },
          queryKey: function () {
            return aZ;
          },
          queryKeyEntity: function () {
            return aG;
          },
          useQuery: function () {
            return a0;
          },
        });
      var X = {};
      n.r(X),
        n.d(X, {
          queryFn: function () {
            return a6;
          },
          queryKey: function () {
            return a5;
          },
          queryKeyEntity: function () {
            return a2;
          },
          useQuery: function () {
            return a1;
          },
        });
      var J = {};
      n.r(J),
        n.d(J, {
          queryFn: function () {
            return a4;
          },
          queryKey: function () {
            return a3;
          },
          useQuery: function () {
            return a9;
          },
        });
      var Y = {};
      n.r(Y),
        n.d(Y, {
          gasFeePrice: function () {
            return J;
          },
          tokenPrice: function () {
            return X;
          },
          tokenPrices: function () {
            return j;
          },
        });
      var G = {};
      n.r(G),
        n.d(G, {
          queryFn: function () {
            return it;
          },
          queryKey: function () {
            return ie;
          },
          queryKeyEntity: function () {
            return a7;
          },
          useQuery: function () {
            return ia;
          },
        });
      var Z = {};
      n.r(Z),
        n.d(Z, {
          queryFn: function () {
            return is;
          },
          queryKey: function () {
            return ir;
          },
          queryKeyEntity: function () {
            return ii;
          },
          useQuery: function () {
            return iu;
          },
        });
      var $ = {};
      n.r($),
        n.d($, {
          queryFn: function () {
            return il;
          },
          queryKey: function () {
            return ip;
          },
          queryKeyEntity: function () {
            return io;
          },
          useQuery: function () {
            return iy;
          },
        });
      var ee = {};
      n.r(ee),
        n.d(ee, {
          queryFn: function () {
            return im;
          },
          queryKey: function () {
            return ic;
          },
          queryKeyEntity: function () {
            return id;
          },
          useQuery: function () {
            return iA;
          },
        });
      var et = {};
      n.r(et),
        n.d(et, {
          getETHRateFromOracle: function () {
            return Z;
          },
          getStETHByWstETH: function () {
            return ee;
          },
          getStETHRateFromOracle: function () {
            return $;
          },
          withdrawalRequest: function () {
            return G;
          },
        });
      var en = {};
      n.r(en),
        n.d(en, {
          queryFn: function () {
            return ig;
          },
          queryKey: function () {
            return iT;
          },
          queryKeyEntity: function () {
            return ib;
          },
          useQuery: function () {
            return iw;
          },
        });
      var ea = {};
      n.r(ea),
        n.d(ea, {
          queryFn: function () {
            return iv;
          },
          queryKey: function () {
            return iE;
          },
          queryKeyEntity: function () {
            return ih;
          },
          useQuery: function () {
            return ix;
          },
        });
      var ei = {};
      n.r(ei),
        n.d(ei, {
          queryFn: function () {
            return iz;
          },
          queryKey: function () {
            return iM;
          },
          queryKeyEntity: function () {
            return ik;
          },
          useQuery: function () {
            return iF;
          },
        });
      var er = {};
      n.r(er),
        n.d(er, {
          queryFn: function () {
            return iD;
          },
          queryKey: function () {
            return iB;
          },
          queryKeyEntity: function () {
            return iC;
          },
          useQuery: function () {
            return iI;
          },
        });
      var es = {};
      n.r(es),
        n.d(es, {
          queryFn: function () {
            return iq;
          },
          queryKey: function () {
            return iS;
          },
          queryKeyEntity: function () {
            return iH;
          },
          useQuery: function () {
            return iV;
          },
        });
      var eu = {};
      n.r(eu),
        n.d(eu, {
          queryFn: function () {
            return iQ;
          },
          queryKey: function () {
            return iL;
          },
          queryKeyEntity: function () {
            return iK;
          },
          useQuery: function () {
            return iW;
          },
        });
      var eo = {};
      n.r(eo),
        n.d(eo, {
          dailySnapshot: function () {
            return eu;
          },
          maxDepositTVL: function () {
            return ea;
          },
          proofOfReserves: function () {
            return es;
          },
          tokenTVL: function () {
            return er;
          },
          tokenTVLLimit: function () {
            return ei;
          },
          totalTVL: function () {
            return en;
          },
        });
      var ep = {};
      n.r(ep),
        n.d(ep, {
          queryFn: function () {
            return ij;
          },
          queryKey: function () {
            return i_;
          },
          queryKeyEntity: function () {
            return iN;
          },
          useQuery: function () {
            return iX;
          },
        });
      var el = {};
      n.r(el),
        n.d(el, {
          queryFn: function () {
            return iG;
          },
          queryKey: function () {
            return iY;
          },
          queryKeyEntity: function () {
            return iJ;
          },
          useQuery: function () {
            return iZ;
          },
        });
      var ey = {};
      n.r(ey),
        n.d(ey, {
          delegates: function () {
            return el;
          },
          votes: function () {
            return ep;
          },
        });
      var ed = {};
      n.r(ed),
        n.d(ed, {
          queryFn: function () {
            return i2;
          },
          queryKey: function () {
            return i0;
          },
          queryKeyEntity: function () {
            return i$;
          },
          useQuery: function () {
            return i5;
          },
        });
      var ec = {};
      n.r(ec),
        n.d(ec, {
          queryFn: function () {
            return i8;
          },
          queryKey: function () {
            return i1;
          },
          queryKeyEntity: function () {
            return i6;
          },
          useQuery: function () {
            return i3;
          },
        });
      var em = {};
      n.r(em),
        n.d(em, {
          queryFn: function () {
            return i7;
          },
          queryKey: function () {
            return i9;
          },
          queryKeyEntity: function () {
            return i4;
          },
          useQuery: function () {
            return re;
          },
        });
      var eA = {};
      n.r(eA),
        n.d(eA, {
          delegates: function () {
            return em;
          },
          votes: function () {
            return ed;
          },
          votingPower: function () {
            return ec;
          },
        });
      var eb = {};
      n.r(eb),
        n.d(eb, {
          queryFn: function () {
            return rn;
          },
          queryKey: function () {
            return rt;
          },
          useQuery: function () {
            return ra;
          },
        });
      var ef = {};
      n.r(ef),
        n.d(ef, {
          queryFn: function () {
            return rr;
          },
          queryKey: function () {
            return ri;
          },
          useQuery: function () {
            return rs;
          },
        });
      var eT = {};
      n.r(eT),
        n.d(eT, {
          queryFn: function () {
            return rp;
          },
          queryKey: function () {
            return ro;
          },
          queryKeyEntity: function () {
            return ru;
          },
          useQuery: function () {
            return rl;
          },
        });
      var eg = {};
      n.r(eg),
        n.d(eg, {
          queryFn: function () {
            return rm;
          },
          queryKey: function () {
            return rc;
          },
          useQuery: function () {
            return rA;
          },
        });
      var ew = {};
      n.r(ew),
        n.d(ew, {
          currentSlot: function () {
            return eT;
          },
          jupiterSwapQuote: function () {
            return eg;
          },
          nativeCurrencyBalance: function () {
            return ef;
          },
          tokenBalances: function () {
            return eb;
          },
        });
      var eh = {};
      n.r(eh),
        n.d(eh, {
          queryFn: function () {
            return rT;
          },
          queryKey: function () {
            return rf;
          },
          queryKeyEntity: function () {
            return rb;
          },
          useQuery: function () {
            return rg;
          },
        });
      var eE = {};
      n.r(eE),
        n.d(eE, {
          queryFn: function () {
            return rE;
          },
          queryKey: function () {
            return rh;
          },
          queryKeyEntity: function () {
            return rw;
          },
          useQuery: function () {
            return rv;
          },
        });
      var ev = {};
      n.r(ev),
        n.d(ev, {
          queryFn: function () {
            return rD;
          },
          queryKey: function () {
            return rB;
          },
          queryKeyEntity: function () {
            return rC;
          },
          useQuery: function () {
            return rI;
          },
        });
      var ex = {};
      n.r(ex),
        n.d(ex, {
          queryFn: function () {
            return rP;
          },
          queryKey: function () {
            return rV;
          },
          queryKeyEntity: function () {
            return rq;
          },
          useQuery: function () {
            return rO;
          },
        });
      var ek = {};
      n.r(ek),
        n.d(ek, {
          activeStake: function () {
            return eE;
          },
          coolDownPeriod: function () {
            return eh;
          },
          stakingDailySnapshot: function () {
            return ev;
          },
          stakingTransactions: function () {
            return ex;
          },
        });
      var eM = {};
      n.r(eM),
        n.d(eM, {
          queryFn: function () {
            return rN;
          },
          queryKey: function () {
            return rW;
          },
          queryKeyEntity: function () {
            return rQ;
          },
          useQuery: function () {
            return r_;
          },
        });
      var ez = {};
      n.r(ez),
        n.d(ez, {
          queryFn: function () {
            return rY;
          },
          queryKey: function () {
            return rJ;
          },
          queryKeyEntity: function () {
            return rX;
          },
          useQuery: function () {
            return rG;
          },
        });
      var eF = {};
      n.r(eF),
        n.d(eF, {
          queryFn: function () {
            return r2;
          },
          queryKey: function () {
            return r0;
          },
          queryKeyEntity: function () {
            return r$;
          },
          useQuery: function () {
            return r5;
          },
        });
      var eC = {};
      n.r(eC),
        n.d(eC, {
          dailyTVLs: function () {
            return eF;
          },
          pzETH: function () {
            return ez;
          },
          totals: function () {
            return eM;
          },
        });
      var eB = {};
      n.r(eB),
        n.d(eB, {
          queryFn: function () {
            return r9;
          },
          queryKey: function () {
            return r4;
          },
          queryKeyEntity: function () {
            return r3;
          },
          useQuery: function () {
            return r7;
          },
        });
      var eD = {};
      n.r(eD),
        n.d(eD, {
          getBlockNumber: function () {
            return eB;
          },
        });
      var eI = {};
      n.r(eI),
        n.d(eI, {
          queryFn: function () {
            return sn;
          },
          queryKey: function () {
            return st;
          },
          queryKeyEntity: function () {
            return se;
          },
          useQuery: function () {
            return sa;
          },
        });
      var eR = {};
      n.r(eR),
        n.d(eR, {
          queryFn: function () {
            return ss;
          },
          queryKey: function () {
            return sr;
          },
          queryKeyEntity: function () {
            return si;
          },
          useQuery: function () {
            return su;
          },
        });
      var eH = {};
      n.r(eH),
        n.d(eH, {
          allowance: function () {
            return eR;
          },
          balances: function () {
            return eI;
          },
        });
      var eS = {};
      n.r(eS),
        n.d(eS, {
          queryFn: function () {
            return sc;
          },
          queryKey: function () {
            return sd;
          },
          queryKeyEntity: function () {
            return sy;
          },
          useQuery: function () {
            return sm;
          },
        });
      var eq = {};
      n.r(eq),
        n.d(eq, {
          userReferrer: function () {
            return eS;
          },
        });
      var eV = {};
      n.r(eV),
        n.d(eV, {
          queryFn: function () {
            return sf;
          },
          queryKey: function () {
            return sb;
          },
          queryKeyEntity: function () {
            return sA;
          },
          useQuery: function () {
            return sT;
          },
        });
      var eP = {};
      n.r(eP),
        n.d(eP, {
          queryFn: function () {
            return sh;
          },
          queryKey: function () {
            return sw;
          },
          queryKeyEntity: function () {
            return sg;
          },
          useQuery: function () {
            return sE;
          },
        });
      var eO = {};
      n.r(eO),
        n.d(eO, {
          queryFn: function () {
            return sF;
          },
          queryKey: function () {
            return sz;
          },
          queryKeyEntity: function () {
            return sM;
          },
          useQuery: function () {
            return sC;
          },
        });
      var eU = {};
      n.r(eU),
        n.d(eU, {
          partialQueryKey: function () {
            return sD;
          },
          queryFn: function () {
            return sR;
          },
          queryKey: function () {
            return sI;
          },
          queryKeyEntity: function () {
            return sB;
          },
          useQuery: function () {
            return sH;
          },
        });
      var eK = {};
      n.r(eK),
        n.d(eK, {
          queryFn: function () {
            return sV;
          },
          queryKey: function () {
            return sq;
          },
          queryKeyEntity: function () {
            return sS;
          },
          useQuery: function () {
            return sP;
          },
        });
      var eL = {};
      function eQ() {
        return "/api";
      }
      n.r(eL),
        n.d(eL, {
          calculateMintAmount: function () {
            return eP;
          },
          calculateRedeemAmount: function () {
            return eV;
          },
          getAvailableToWithdraw: function () {
            return eU;
          },
          getCoolDownPeriod: function () {
            return eK;
          },
          userClaims: function () {
            return eO;
          },
        }),
        n(25566);
      var eW = n(76351),
        eN = n(59772);
      let e_ = eN.z.object({
          success: eN.z.boolean(),
          data: eN.z.record(
            eN.z.string(),
            eN.z.object({
              points: eN.z.number().optional(),
              staked: eN.z.number().optional(),
            })
          ),
          error: eN.z.string().optional(),
        }),
        ej = ["avs", "stats"];
      function eX(e) {
        return [{ entity: ej, ...e }];
      }
      async function eJ(e) {
        let {
            queryKey: [{ tokenSymbol: t }],
          } = e,
          n = eQ(),
          a = await fetch("".concat(n, "/avs/stats?token=").concat(t)),
          i = await a.json();
        return e_.parse(i);
      }
      function eY(e, t) {
        let n = eX(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => eJ({ ...e, queryKey: n }),
          staleTime: 3e5,
          ...t,
        });
      }
      var eG = n(29717);
      let eZ = eN.z.object({
        id: eN.z.string(),
        address: eN.z.string(),
        amp: eN.z.string().optional(),
        swapFee: eN.z.string(),
        tokensList: eN.z.array(eN.z.string()),
        poolType: eN.z.string(),
        swapEnabled: eN.z.boolean(),
        totalShares: eN.z.string(),
        tokens: eN.z.array(
          eN.z.object({
            address: eN.z.string(),
            balance: eN.z.string(),
            decimals: eN.z.number(),
            weight: eN.z.string().nullable(),
            priceRate: eN.z.string(),
          })
        ),
      });
      async function e$(e) {
        let t = await fetch("https://api.balancer.fi/pools/1/".concat(e)),
          n = await t.json();
        return eZ.parse(n);
      }
      async function e0(e) {
        let {
            amount: t,
            isExactIn: n,
            poolId: a,
            tokenInAddress: i,
            tokenOutAddress: r,
          } = e,
          s = await e$(a),
          u = eG.t0.fromPool(s),
          o = u.parsePoolPairData(i, r),
          p = (0, eG.GT)(t);
        return (
          n
            ? u._exactTokenInForTokenOut(o, p)
            : u._tokenInForExactTokenOut(o, p)
        ).toString();
      }
      function e2(e) {
        return [{ entity: ["balancer", "ezETHwETHPoolSwapAmount"], ...e }];
      }
      async function e5(e) {
        let {
          queryKey: [
            {
              amount: t,
              isExactIn: n,
              poolId: a,
              tokenInAddress: i,
              tokenOutAddress: r,
            },
          ],
        } = e;
        return await e0({
          amount: t,
          isExactIn: n,
          poolId: a,
          tokenInAddress: i,
          tokenOutAddress: r,
        });
      }
      function e6(e, t) {
        let n = e2(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => e5({ ...e, queryKey: n }),
          ...t,
        });
      }
      let e1 = eN.z.object({
          items: eN.z.array(
            eN.z.object({
              title: eN.z.string(),
              link: eN.z.string(),
              pubDate: eN.z.string(),
              author: eN.z.string(),
              content: eN.z.string(),
              contentSnippet: eN.z.string(),
              id: eN.z.string(),
              isoDate: eN.z.string(),
            })
          ),
        }),
        e8 = ["mirror", "posts"];
      function e3() {
        return [{ entity: e8 }];
      }
      async function e4() {
        let e = eQ(),
          t = await fetch("".concat(e, "/mirror")),
          n = await t.json();
        return e1.parse(n.data).items;
      }
      function e9(e) {
        return (0, eW.useQuery)({
          queryKey: e3(),
          queryFn: e4,
          staleTime: 36e5,
          ...e,
        });
      }
      var e7 = n(95872),
        te = n(56872),
        tt = n(82890);
      function tn(e) {
        return [{ entity: ["connext", "getSwapTokens"], ...e }];
      }
      async function ta(e) {
        let {
            queryKey: [
              {
                chainId: t,
                connextAddress: n,
                swapKey: a,
                fromTokenAddress: i,
                toTokenAddress: r,
              },
            ],
          } = e,
          [s, u] = await (0, te.J)(tt.g, {
            contracts: [
              {
                address: n,
                abi: e7.E.ConnextStableSwap,
                functionName: "getSwapTokenIndex",
                args: [a, i],
                chainId: t,
              },
              {
                address: n,
                abi: e7.E.ConnextStableSwap,
                functionName: "getSwapTokenIndex",
                args: [a, r],
                chainId: t,
              },
            ],
            allowFailure: !1,
          });
        return { fromSwapTokenIndex: s, toSwapTokenIndex: u };
      }
      function ti(e, t) {
        let n = tn(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => ta({ ...e, queryKey: n }),
          staleTime: 1 / 0,
          ...t,
        });
      }
      var tr = n(42467),
        ts = n(31195),
        tu = n(85053);
      function to(e) {
        return [{ entity: ["connext", "calculateSwap"], ...e }];
      }
      async function tp(e) {
        let {
            queryKey: [
              {
                chainId: t,
                connextAddress: n,
                swapKey: a,
                fromSwapTokenIndex: i,
                toSwapTokenIndex: r,
                amount: s,
              },
            ],
          } = e,
          u = await (0, tr.L)(tt.g, {
            address: n,
            abi: e7.E.ConnextStableSwap,
            functionName: "calculateSwap",
            args: [a, i, r, (0, ts.f)(s)],
            chainId: t,
          });
        return (0, tu.d)(u);
      }
      function tl(e, t) {
        let n = to(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => tp({ ...e, queryKey: n }),
          ...t,
        });
      }
      var ty = n(83718),
        td = n(61574),
        tc = n(12075);
      async function tm(e) {
        let { depositTokenPrice: t, receiptTokenAddress: n, chainId: a } = e,
          [i, r] = await (0, te.J)(tc._, {
            contracts: [
              {
                address: n.toLowerCase(),
                abi: e7.E.EzRVault,
                functionName: "totalSupply",
                chainId: a,
              },
              {
                address: n.toLowerCase(),
                abi: e7.E.EzRVault,
                functionName: "getUnderlyingBalanceFromStrategy",
                chainId: a,
              },
            ],
            allowFailure: !1,
          }),
          s =
            Number(i) && Number(r)
              ? (0, ty.RM)(Number(r))
                  .div((0, ty.RM)(Number(i)))
                  .toNumber()
              : 1;
        return (0, td.Z)(t || 1)
          .mul(s)
          .toNumber();
      }
      var tA = n(88262),
        tb = n(387);
      async function tf(e) {
        let t = await fetch(
          "https://coins.llama.fi/prices/current/".concat(
            e.map((e) => "coingecko:".concat(e.coinGeckoId)).join(",")
          )
        ).then((e) => e.json());
        return e.reduce((e, n) => {
          var a, i, r;
          return (
            (e[n.tokenKey] =
              null !==
                (r =
                  null == t
                    ? void 0
                    : null === (i = t.coins) || void 0 === i
                    ? void 0
                    : null === (a = i["coingecko:".concat(n.coinGeckoId)]) ||
                      void 0 === a
                    ? void 0
                    : a.price) && void 0 !== r
                ? r
                : null),
            e
          );
        }, {});
      }
      async function tT(e) {
        let t = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=".concat(
            e.map((e) => e.coinGeckoId).join(","),
            "&vs_currencies=usd"
          )
        ).then((e) => e.json());
        return e.reduce((e, n) => {
          var a, i;
          return (
            (e[n.tokenKey] =
              null !==
                (i =
                  null == t
                    ? void 0
                    : null === (a = t["".concat(n.coinGeckoId)]) || void 0 === a
                    ? void 0
                    : a.usd) && void 0 !== i
                ? i
                : null),
            e
          );
        }, {});
      }
      async function tg(e) {
        try {
          return await tf(e);
        } catch (t) {
          return await tT(e);
        }
      }
      var tw = n(90050);
      let th = [
        { tokenKey: tb.Wr.ETH, coinGeckoId: "ethereum" },
        { tokenKey: tb.Wr.ezETH, coinGeckoId: "renzo-restaked-eth" },
        { tokenKey: tb.Wr.rswETH, coinGeckoId: "restaked-swell-eth" },
        { tokenKey: tb.Wr.weETH, coinGeckoId: "wrapped-eeth" },
        { tokenKey: tb.Wr.wstETH, coinGeckoId: "wrapped-steth" },
        { tokenKey: tb.Wr.pzETH, coinGeckoId: "renzo-restaked-lst" },
        { tokenKey: "usd", coinGeckoId: "usd" },
        { tokenKey: tb.Wr.REN, coinGeckoId: "renzo" },
        { tokenKey: tb.Wr.EIGEN, coinGeckoId: "eigenlayer" },
        { tokenKey: "JTO", coinGeckoId: "jito-governance-token" },
      ];
      async function tE() {
        try {
          let [e, ...t] = await Promise.allSettled([
            tg(th),
            ...tw.lj.map((e) => {
              let { chain: t, tvlFn: n } = e;
              return n(t.id);
            }),
          ]);
          if ("rejected" === e.status) throw e.reason;
          let n = e.value.EIGEN,
            a = await tm({
              depositTokenPrice: n,
              receiptTokenAddress: tb.zA,
              chainId: tA.t.chain.id,
            });
          return (
            (e.value.ezEIGEN = a),
            tw.lj.reduce((n, a, i) => {
              let r = t[i],
                s = 0;
              return (
                "fulfilled" === r.status &&
                  null != r.value &&
                  (s = Object.entries(r.value).reduce((t, n) => {
                    var a;
                    let [i, r] = n;
                    return (t += e.value[i]
                      ? Number(r) *
                        (null !== (a = e.value[i]) && void 0 !== a ? a : 0)
                      : 0);
                  }, 0)),
                (n[a.id] = s),
                n
              );
            }, {})
          );
        } catch (e) {
          return (
            console.error(e),
            Object.values(tw.lj).reduce((e, t) => {
              let { id: n } = t;
              return (e[n] = 0), e;
            }, {})
          );
        }
      }
      let tv = ["defi", "tvls"];
      function tx() {
        return [{ entity: tv }];
      }
      async function tk() {
        return await tE();
      }
      function tM(e, t) {
        return (0, eW.useQuery)({
          queryKey: tx(),
          queryFn: tk,
          staleTime: 9e5,
          ...t,
        });
      }
      let tz = Object.values(n(44571).d).map((e) => {
        let {
          token: { symbol: t },
          coinGeckoId: n,
        } = e;
        return { tokenKey: t, coinGeckoId: n };
      });
      async function tF() {
        try {
          let e = await tg(tz),
            t = await Promise.allSettled([
              ...tw.lj.map((t) => {
                let { chain: n, apyFn: a } = t;
                return a(n.id, e);
              }),
            ]);
          return tw.lj.reduce((e, n, a) => {
            let i = t[a],
              r = {
                base: { apy: 0, timeframe: "7d" },
                breakdown: [],
                total: 0,
              };
            return (
              "fulfilled" === i.status &&
                null != i.value &&
                ((r.breakdown = i.value.breakdown), (r.total = i.value.total)),
              (e[n.id] = r),
              e
            );
          }, {});
        } catch (e) {
          return (
            console.error(e),
            Object.values(tw.lj).reduce((e, t) => {
              let { id: n } = t;
              return (
                (e[n] = {
                  base: { apy: 0, timeframe: "7d" },
                  breakdown: [],
                  total: 0,
                }),
                e
              );
            }, {})
          );
        }
      }
      let tC = ["defi", "apys"];
      function tB() {
        return [{ entity: tC }];
      }
      async function tD() {
        return await tF();
      }
      function tI(e, t) {
        return (0, eW.useQuery)({
          queryKey: tB(),
          queryFn: tD,
          staleTime: 9e5,
          ...t,
        });
      }
      var tR = n(36653);
      let tH = ["eigenlayer", "delegatedTo"];
      function tS(e) {
        return [{ entity: tH, ...e }];
      }
      async function tq(e) {
        let {
          queryKey: [{ userAddress: t, chainId: n }],
        } = e;
        if (!t) return tR.r_;
        let a = tA.m3[n];
        return await (0, tr.L)(tt.g, {
          address: a.addresses.eigenLayerDelegationManager,
          abi: [
            {
              inputs: [{ internalType: "address", name: "", type: "address" }],
              name: "delegatedTo",
              outputs: [{ internalType: "address", name: "", type: "address" }],
              stateMutability: "view",
              type: "function",
            },
          ],
          functionName: "delegatedTo",
          args: [t],
          chainId: n,
        });
      }
      function tV(e, t) {
        let n = tS(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => tq({ ...e, queryKey: n }),
          ...t,
        });
      }
      let tP = ["eigenlayer", "getDeposits"];
      function tO(e) {
        return [{ entity: tP, ...e }];
      }
      async function tU(e) {
        let {
          queryKey: [{ userAddress: t, chainId: n }],
        } = e;
        if (!t) return tR.r_;
        let a = tA.m3[n];
        return await (0, tr.L)(tt.g, {
          address: a.addresses.eigenLayerStrategyManager,
          abi: [
            {
              inputs: [
                { internalType: "address", name: "staker", type: "address" },
              ],
              name: "getDeposits",
              outputs: [
                {
                  internalType: "contract IStrategy[]",
                  name: "",
                  type: "address[]",
                },
                { internalType: "uint256[]", name: "", type: "uint256[]" },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
          functionName: "getDeposits",
          args: [t],
          chainId: n,
        });
      }
      function tK(e, t) {
        let n = tO(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => tU({ ...e, queryKey: n }),
          ...t,
        });
      }
      let tL = eN.z.object({
          success: eN.z.boolean(),
          data: eN.z.object({
            apy: eN.z.number(),
            apyAverageTrailingDays: eN.z.number(),
          }),
        }),
        tQ = ["enzyme", "vaultStats"];
      function tW(e) {
        return [{ entity: tQ, ...e }];
      }
      async function tN(e) {
        let {
            queryKey: [{ vaultAddress: t }],
          } = e,
          n = eQ(),
          a = await fetch("".concat(n, "/enzyme/vault/eth/").concat(t)),
          i = await a.json();
        return tL.parse(i);
      }
      function t_(e, t) {
        let n = tW(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => tN({ ...e, queryKey: n }),
          staleTime: 36e5,
          ...t,
        });
      }
      let tj = ["ezRVault", "getCooldownBlocks"];
      function tX(e) {
        return [{ entity: tj, ...e }];
      }
      async function tJ(e) {
        let {
            queryKey: [{ address: t, chainId: n }],
          } = e,
          a = tA.m3[n];
        return Number(
          await (0, tr.L)(tt.g, {
            address: t,
            abi: e7.E.EzRVault,
            functionName: "cooldownBlocks",
            chainId: a.chain.id,
          })
        );
      }
      function tY(e, t) {
        let n = tX(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => tJ({ ...e, queryKey: n }),
          ...t,
        });
      }
      var tG = n(48646),
        tZ = n(93786);
      function t$() {
        let e = (0, tG._)([
          "\n  query withdrawRequestsQuery($staker: String!, $user: String!) {\n    withdrawals(\n      first: 1000\n      orderBy: blockTimestamp\n      orderDirection: desc\n      where: { staker: $staker, user: $user }\n    ) {\n      id\n      user\n      staker\n      withdrawer\n      delegatedTo\n      startBlock\n      strategies\n      shares\n      nonce\n      blockTimestamp\n      transactionHash\n      claim {\n        id\n        transactionHash\n        blockTimestamp\n      }\n    }\n  }\n",
        ]);
        return (
          (t$ = function () {
            return e;
          }),
          e
        );
      }
      let t0 = (0, tZ.Ps)(t$()),
        t2 = eN.z.object({
          withdrawals: eN.z.array(
            eN.z.object({
              id: eN.z.string(),
              user: eN.z.string(),
              withdrawer: eN.z.string(),
              staker: eN.z.string(),
              delegatedTo: eN.z.string(),
              startBlock: eN.z.string(),
              strategies: eN.z.array(eN.z.string()),
              shares: eN.z.array(eN.z.string()),
              nonce: eN.z.string(),
              blockTimestamp: eN.z.string(),
              transactionHash: eN.z.string(),
              claim: eN.z
                .object({
                  id: eN.z.string(),
                  transactionHash: eN.z.string(),
                  blockTimestamp: eN.z.string(),
                })
                .nullable(),
            })
          ),
        }),
        t5 = ["ezRVault", "withdrawals"];
      function t6(e) {
        return [{ entity: t5, ...e }];
      }
      async function t1(e) {
        let {
            queryKey: [{ chainId: t, userAddress: n, vaultAddress: a }],
          } = e,
          i = tA.m3[t],
          r = new tZ.g6(i.subgraphs.ezRVault),
          s = await r.request(t0, {
            staker: a.toLowerCase(),
            user: n.toLowerCase(),
          });
        return t2.parse(s);
      }
      function t8(e, t) {
        let n = t6(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => t1({ ...e, queryKey: n }),
          ...t,
        });
      }
      function t3() {
        let e = (0, tG._)([
          "\n  query vaultRequestsQuery($vault: String!) {\n    vault(id: $vault) {\n      id\n      underlyingToken\n      underlyingTvl\n      underlyingTvlUSD\n      lpTotalSupply\n    }\n  }\n",
        ]);
        return (
          (t3 = function () {
            return e;
          }),
          e
        );
      }
      let t4 = (0, tZ.Ps)(t3()),
        t9 = eN.z.object({
          vault: eN.z.object({
            id: eN.z.string().optional(),
            underlyingToken: eN.z.string().optional(),
            underlyingTvl: eN.z.string().optional(),
            underlyingTvlUSD: eN.z.string().optional(),
            lpTotalSupply: eN.z.string().optional(),
          }),
        }),
        t7 = ["ezRVault", "vault"];
      function ne(e) {
        return [{ entity: t7, ...e }];
      }
      async function nt(e) {
        let {
            queryKey: [{ chainId: t, vaultAddress: n }],
          } = e,
          a = tA.m3[t],
          i = new tZ.g6(a.subgraphs.ezRVault),
          r = await i.request(t4, { vault: n.toLowerCase() });
        return t9.parse(r);
      }
      function nn(e, t) {
        let n = ne(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => nt({ ...e, queryKey: n }),
          ...t,
        });
      }
      let na = eN.z.object({
          success: eN.z.boolean(),
          data: eN.z.array(
            eN.z.object({
              id: eN.z.string(),
              underlyingTvl: eN.z.string(),
              underlyingTvlUSD: eN.z.string(),
              lpTotalSupply: eN.z.string(),
            })
          ),
          error: eN.z.string().optional(),
        }),
        ni = ["ezRVault", "vaultsStats"];
      function nr() {
        return [{ entity: ni }];
      }
      async function ns() {
        let e = await fetch("/api/stats/flow"),
          t = await e.json();
        return na.parse(t);
      }
      function nu(e) {
        return (0, eW.useQuery)({
          queryKey: nr(),
          queryFn: ns,
          staleTime: 18e5,
          ...e,
        });
      }
      let no = ["ezRVault", "getUnderlyingToShares"];
      function np(e) {
        return [{ entity: no, ...e }];
      }
      async function nl(e) {
        let {
            queryKey: [{ strategyAddress: t, tokenAmount: n, chainId: a }],
          } = e,
          i = tA.m3[a];
        return Number(
          await (0, tr.L)(tt.g, {
            address: t,
            abi: e7.E.StrategyBaseTVLLimits,
            functionName: "sharesToUnderlying",
            chainId: i.chain.id,
            args: [BigInt(n)],
          })
        );
      }
      function ny(e, t) {
        let n = np(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => nl({ ...e, queryKey: n }),
          ...t,
        });
      }
      var nd = n(45429),
        nc = n(47759),
        nm = n.n(nc),
        nA = n(87168);
      let nb = nm()(nA.J, (e) => new nd.Connection(e, void 0));
      var nf = n(25921),
        nT = n(47185),
        ng = n(74379),
        nw = n(40950),
        nh = n(75917),
        nE = n(6664);
      let nv = (0, nw.Xn)([
        ["discriminator", (0, nh.FW)()],
        ["base", (0, nT.Iw)()],
        ["vrtMint", (0, nT.Iw)()],
        ["supportedMint", (0, nT.Iw)()],
        ["vrtSupply", (0, nh.FW)()],
        ["tokensDeposited", (0, nh.FW)()],
        ["depositCapacity", (0, nh.FW)()],
        ["delegationState", nE.iMA()],
        ["additionalAssetsNeedUnstaking", (0, nh.FW)()],
        ["vrtEnqueuedForCooldownAmount", (0, nh.FW)()],
        ["vrtCoolingDownAmount", (0, nh.FW)()],
        ["vrtReadyToClaimAmount", (0, nh.FW)()],
        ["admin", (0, nT.Iw)()],
        ["delegationAdmin", (0, nT.Iw)()],
        ["operatorAdmin", (0, nT.Iw)()],
        ["ncnAdmin", (0, nT.Iw)()],
        ["slasherAdmin", (0, nT.Iw)()],
        ["capacityAdmin", (0, nT.Iw)()],
        ["feeAdmin", (0, nT.Iw)()],
        ["delegateAssetAdmin", (0, nT.Iw)()],
        ["feeWallet", (0, nT.Iw)()],
        ["mintBurnAdmin", (0, nT.Iw)()],
        ["metadataAdmin", (0, nT.Iw)()],
        ["vaultIndex", (0, nh.FW)()],
        ["ncnCount", (0, nh.FW)()],
        ["operatorCount", (0, nh.FW)()],
        ["slasherCount", (0, nh.FW)()],
        ["lastFeeChangeSlot", (0, nh.FW)()],
        ["lastFullStateUpdateSlot", (0, nh.FW)()],
        ["depositFeeBps", (0, nh.OT)()],
        ["withdrawalFeeBps", (0, nh.OT)()],
        ["nextWithdrawalFeeBps", (0, nh.OT)()],
        ["rewardFeeBps", (0, nh.OT)()],
        ["programFeeBps", (0, nh.OT)()],
        ["bump", (0, nh.RS)()],
        ["isPaused", (0, nw.yi)()],
        ["reserved", (0, nw.LV)((0, nh.RS)(), { size: 259 })],
      ]);
      async function nx(e, t) {
        let n = (0, nf.gx)(e.rpcEndpoint),
          a = (0, nT.Lk)(t.toString()),
          i = await (0, ng.IL)(n, a);
        return (0, ng.JU)(i, nv);
      }
      function nk(e) {
        return [{ entity: ["ezsol", "getVault"], ...e }];
      }
      async function nM(e) {
        let {
            queryKey: [{ vaultAddress: t, chainId: n }],
          } = e,
          a = nb[n],
          i = new nd.PublicKey(t);
        return await nx(a, i);
      }
      function nz(e, t) {
        let n = nk(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => nM({ ...e, queryKey: n }),
          ...t,
        });
      }
      (0, nw.Xn)([
        ["discriminator", (0, nh.FW)()],
        ["admin", (0, nT.Iw)()],
        ["restakingProgram", (0, nT.Iw)()],
        ["epochLength", (0, nh.FW)()],
        ["numVaults", (0, nh.FW)()],
        ["depositWithdrawalFeeCapBps", (0, nh.OT)()],
        ["feeRateOfChangeBps", (0, nh.OT)()],
        ["feeBumpBps", (0, nh.OT)()],
        ["bump", (0, nh.RS)()],
        ["reserved", (0, nw.LV)((0, nh.RS)(), { size: 263 })],
      ]);
      var nF = n(60458);
      let nC = ["ezsol", "withdrawQueue"];
      function nB(e) {
        return [{ entity: nC, ...e }];
      }
      async function nD(e) {
        let {
            queryKey: [{ chainId: t, configAddress: n }],
          } = e,
          a = nb[t],
          i = new nd.PublicKey(n),
          [r, s, u] = await Promise.all([
            (0, nF.i)(a, i),
            a.getRecentPerformanceSamples(1),
            a.getSlot(),
          ]),
          o = r.data.epochLength,
          p = BigInt(u) / o,
          l = o - (BigInt(u) % o),
          y = s[0].samplePeriodSecs / s[0].numSlots,
          d = Number(o + l) * y;
        return {
          currentEpoch: p.toString(),
          epochInDays: Math.ceil(d / 86400),
          currentSlot: u,
        };
      }
      function nI(e, t) {
        let n = nB(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => nD({ ...e, queryKey: n }),
          ...t,
        });
      }
      var nR = n(93486),
        nH = n(26032),
        nS = n(42921);
      async function nq(e, t, n) {
        let a = [
          { memcmp: { offset: 8, bytes: t.toBase58() } },
          { memcmp: { offset: 40, bytes: n.toBase58() } },
        ];
        return (
          await e.getProgramAccounts(new nd.PublicKey(nE.Sn8), {
            filters: a,
            commitment: "confirmed",
          })
        ).map((e) => {
          let t = (0, nE.mJC)(e.account);
          return { pubkey: e.pubkey, data: t.data };
        });
      }
      let nV = ["ezsol", "userClaims"];
      function nP(e) {
        return [{ entity: nV, ...e }];
      }
      async function nO(e) {
        let {
            queryKey: [
              { chainId: t, userAddress: n, vaultAddress: a, configAddress: i },
            ],
          } = e,
          r = nb[t],
          s = new nd.PublicKey(a),
          u = new nd.PublicKey(i),
          [o, p, l, y] = await Promise.all([
            nq(r, s, new nd.PublicKey(n)),
            (0, nF.i)(r, u),
            r.getRecentPerformanceSamples(1),
            r.getSlot(),
          ]),
          d = p.data.epochLength,
          c = BigInt(y) / d,
          m = o.map((e) =>
            r.getBlockTime(Number(e.data.slotUnstaked.toString()))
          ),
          A = await Promise.all(m);
        return o
          .map((e, n) => {
            let a = e.data.slotUnstaked / p.data.epochLength + 2n,
              i = 0;
            if (a > c) {
              let e = d - (BigInt(y) % d),
                t = l[0].samplePeriodSecs / l[0].numSlots;
              i = Math.ceil(Number((a - c - 1n) * d + e) * t);
            }
            return {
              date: A[n],
              slotUnstaked: e.data.slotUnstaked.toString(),
              epoch: (e.data.slotUnstaked / p.data.epochLength + 2n).toString(),
              amount: (0, nS.b)(e.data.vrtAmount, nR.Ey),
              asset: tb.TV.ezSOL.supportedChains[t].address,
              ticket: e,
              claimableUnixTimestamp: (0, nH.Q)(Date.now() + 1e3 * i),
              isClaimable: 0 === i,
            };
          })
          .sort((e, t) => t.date - e.date);
      }
      function nU(e, t) {
        let n = nP(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => nO({ ...e, queryKey: n }),
          ...t,
        });
      }
      var nK = n(79563);
      function nL(e) {
        return [{ entity: ["onchain", "nativeCurrencyBalance"], ...e }];
      }
      async function nQ(e) {
        let {
            queryKey: [{ userAddress: t, chainId: n }],
          } = e,
          a = await (0, nK.s)(tt.g, { address: t, chainId: n });
        return {
          value: a.value,
          formatted: (0, nS.b)(a.value, a.decimals),
          decimals: a.decimals,
        };
      }
      function nW(e, t) {
        let n = nL(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => nQ({ ...e, queryKey: n }),
          ...t,
        });
      }
      var nN = n(78057);
      function n_(e) {
        return [{ entity: ["onchain", "currentBlock"], ...e }];
      }
      async function nj(e) {
        let {
          queryKey: [{ chainId: t }],
        } = e;
        return await (0, nN.Q)(tt.g, { chainId: t });
      }
      function nX(e, t) {
        let n = n_(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => nj({ ...e, queryKey: n }),
          ...t,
        });
      }
      function nJ(e) {
        return [{ entity: ["onchain", "XRenzoDepositLastEzETHPrice"], ...e }];
      }
      async function nY(e) {
        let {
            queryKey: [{ deploymentChainId: t, chainId: n }],
          } = e,
          a = tA.m3[t],
          i = await (0, tr.L)(tt.g, {
            address: a.addresses.xRenzoDeposit[n].address,
            abi: e7.E.xRenzoDepsit,
            functionName: "lastPrice",
            chainId: n,
          });
        return (0, tu.d)(i);
      }
      function nG(e, t) {
        let n = nJ(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => nY({ ...e, queryKey: n }),
          staleTime: 1 / 0,
          ...t,
        });
      }
      var nZ = n(21620);
      function n$(e) {
        return [{ entity: ["onchain", "erc20TokenInfo"], ...e }];
      }
      async function n0(e) {
        let {
            queryKey: [{ tokenAddress: t, chainId: n }],
          } = e,
          [a, i, r, s] = await (0, te.J)(tt.g, {
            contracts: [
              { address: t, abi: nZ.Wo, functionName: "decimals", chainId: n },
              { address: t, abi: nZ.Wo, functionName: "name", chainId: n },
              { address: t, abi: nZ.Wo, functionName: "symbol", chainId: n },
              {
                address: t,
                abi: nZ.Wo,
                functionName: "totalSupply",
                chainId: n,
              },
            ],
            allowFailure: !1,
          });
        return { symbol: r, name: i, decimals: a, totalSupply: (0, tu.d)(s) };
      }
      function n2(e, t) {
        let n = n$(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => n0({ ...e, queryKey: n }),
          staleTime: 3e5,
          ...t,
        });
      }
      function n5(e) {
        return [{ entity: ["onchain", "erc20TokenBalance"], ...e }];
      }
      async function n6(e) {
        let {
          queryKey: [{ tokenAddress: t, userAddress: n, chainId: a }],
        } = e;
        if (!t) {
          let e = await (0, nK.s)(tt.g, { address: n, chainId: a });
          return {
            value: e.value,
            formatted: (0, nS.b)(e.value, e.decimals),
            decimals: e.decimals,
          };
        }
        let [i, r] = await (0, te.J)(tt.g, {
          contracts: [
            {
              address: t,
              abi: nZ.Wo,
              functionName: "balanceOf",
              args: [n],
              chainId: a,
            },
            { address: t, abi: nZ.Wo, functionName: "decimals", chainId: a },
          ],
          allowFailure: !1,
        });
        return { formatted: (0, nS.b)(i, r), value: i, decimals: r };
      }
      function n1(e, t) {
        let n = n5(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => n6({ ...e, queryKey: n }),
          ...t,
        });
      }
      let n8 = eN.z.string(),
        n3 = ["onchain", "erc20TokenAllowance"];
      function n4(e) {
        return [{ entity: n3, ...e }];
      }
      function n9(e) {
        return [{ entity: n3, ...e }];
      }
      async function n7(e) {
        let {
            queryKey: [
              {
                userAddress: t,
                spenderAddress: n,
                chainId: a,
                tokenAddress: i,
              },
            ],
          } = e,
          [r, s] = await (0, te.J)(tt.g, {
            contracts: [
              {
                abi: nZ.Wo,
                address: i,
                functionName: "allowance",
                args: [t, n],
                chainId: a,
              },
              { address: i, abi: nZ.Wo, functionName: "decimals", chainId: a },
            ],
            allowFailure: !1,
          }),
          u = (0, nS.b)(r, s);
        return n8.parse(u);
      }
      function ae(e, t) {
        let n = n9(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => n7({ ...e, queryKey: n }),
          ...t,
        });
      }
      var at = n(9369);
      async function an() {
        let e = at.Yc.filter((e) => {
          let { disabled: t } = e;
          return !t;
        });
        try {
          let t = (
            await (0, tr.L)(tc._, {
              address: tA.t.addresses.restakeManager,
              abi: e7.E.RestakeManager,
              functionName: "calculateTVLs",
              chainId: tA.t.chain.id,
            })
          )[1];
          return e.reduce((e, n) => {
            let a = at.J7.find((e) => {
                var t;
                return (
                  e.address.toLowerCase() ===
                  (null === (t = n.operatorDelegator) || void 0 === t
                    ? void 0
                    : t.toLowerCase())
                );
              }),
              i = 0;
            if (a && t[a.index]) {
              let e = t[a.index];
              i = Number((0, tu.d)(e));
            }
            return (e[n.id] = i), e;
          }, {});
        } catch (t) {
          return (
            console.error(t),
            Object.values(e).reduce((e, t) => {
              let { id: n } = t;
              return (e[n] = 0), e;
            }, {})
          );
        }
      }
      let aa = ["operator", "tvls"];
      function ai() {
        return [{ entity: aa }];
      }
      async function ar() {
        return await an();
      }
      function as(e, t) {
        return (0, eW.useQuery)({
          queryKey: ai(),
          queryFn: ar,
          staleTime: 3e5,
          ...t,
        });
      }
      function au() {
        let e = (0, tG._)([
          "\n  query AllOperators {\n    operators(first: 1000) {\n      id\n      address\n      avs\n    }\n  }\n",
        ]);
        return (
          (au = function () {
            return e;
          }),
          e
        );
      }
      let ao = eN.z.array(
          eN.z.object({
            id: eN.z.string(),
            address: eN.z.string(),
            avs: eN.z.array(eN.z.string()),
          })
        ),
        ap = (0, tZ.Ps)(au()),
        al = eN.z.object({ operators: ao }),
        ay = ["operator", "avss"];
      function ad(e) {
        return [{ entity: ay, ...e }];
      }
      async function ac(e) {
        let {
            queryKey: [{ chainId: t }],
          } = e,
          n = tA.m3[t],
          a = new tZ.g6(n.subgraphs.operatorAVSs),
          i = await a.request(ap);
        return ao.parse(i.operators);
      }
      function am(e, t) {
        let n = ad(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => ac({ ...e, queryKey: n }),
          staleTime: 3e5,
          ...t,
        });
      }
      let aA = eN.z.object({
          name: eN.z.string(),
          success: eN.z.boolean(),
          renzoPoints: eN.z.number(),
          eigenLayerPoints: eN.z.number(),
        }),
        ab = eN.z.object({
          id: eN.z.string(),
          renzoPoints: eN.z.number(),
          eigenLayerPoints: eN.z.number(),
        }),
        af = eN.z.object({
          success: eN.z.boolean(),
          data: eN.z.object({
            totals: eN.z.object({
              renzoPoints: eN.z.number(),
              eigenLayerPoints: eN.z.number(),
              mellowPoints: eN.z.number(),
              symbioticPoints: eN.z.number(),
            }),
            breakdown: eN.z.object({
              custom: aA.extend({ pointsBreakdown: eN.z.array(ab) }),
              materialView: aA.extend({ pointsBreakdown: eN.z.array(ab) }),
              referral: aA,
              subgraph: aA.extend({
                renzoPointsBreakdown: eN.z.object({
                  referral: eN.z.number(),
                  restaking: eN.z.number(),
                  bonus: eN.z.number(),
                }),
              }),
            }),
          }),
          error: eN.z.string().optional(),
        }),
        aT = ["points", "userPoints"];
      function ag(e) {
        let { address: t, ...n } = e;
        return [{ entity: aT, address: t ? t.toLowerCase() : "", ...n }];
      }
      async function aw(e) {
        let {
            queryKey: [{ address: t }],
          } = e,
          n = await fetch("/api/points/".concat(t), {
            next: { revalidate: 900 },
          }),
          a = await n.json();
        return af.parse(a);
      }
      function ah(e, t) {
        let n = ag(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => aw({ ...e, queryKey: n }),
          staleTime: 9e5,
          ...t,
        });
      }
      let aE = eN.z.object({
          success: eN.z.boolean(),
          data: eN.z.number(),
          error: eN.z.string().optional(),
        }),
        av = ["points", "userSeason1Points"];
      function ax(e) {
        return [{ entity: av, ...e }];
      }
      async function ak(e) {
        let {
            queryKey: [{ address: t }],
          } = e,
          n = await fetch("/api/points-season1/".concat(t)),
          a = await n.json();
        return aE.parse(a);
      }
      function aM(e, t) {
        let n = ax(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => ak({ ...e, queryKey: n }),
          staleTime: 1 / 0,
          ...t,
        });
      }
      let az = eN.z.object({
          success: eN.z.boolean(),
          data: eN.z.number(),
          error: eN.z.string().optional(),
        }),
        aF = ["points", "userSeason2Points"];
      function aC(e) {
        return [{ entity: aF, ...e }];
      }
      async function aB(e) {
        let {
            queryKey: [{ address: t }],
          } = e,
          n = await fetch("/api/points-season2/".concat(t)),
          a = await n.json();
        return az.parse(a);
      }
      function aD(e, t) {
        let n = aC(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => aB({ ...e, queryKey: n }),
          staleTime: 1 / 0,
          ...t,
        });
      }
      let aI = eN.z.object({
          success: eN.z.boolean(),
          data: eN.z.number(),
          error: eN.z.string().optional(),
        }),
        aR = ["points", "userEigenSeason2Points"];
      function aH(e) {
        return [{ entity: aR, ...e }];
      }
      async function aS(e) {
        let {
            queryKey: [{ address: t }],
          } = e,
          n = await fetch("/api/eigen-season2-points/".concat(t)),
          a = await n.json();
        return aI.parse(a);
      }
      function aq(e, t) {
        let n = aH(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => aS({ ...e, queryKey: n }),
          staleTime: 1 / 0,
          ...t,
        });
      }
      let aV = eN.z.object({
          success: eN.z.boolean(),
          data: eN.z.object({
            mellowPoints: eN.z.number(),
            symbioticPoints: eN.z.number(),
          }),
          error: eN.z.string().optional(),
        }),
        aP = ["points", "protocols", "mellow"];
      function aO() {
        return [{ entity: aP }];
      }
      async function aU() {
        let e = await fetch("/api/points/protocols/mellow"),
          t = await e.json();
        return aV.parse(t);
      }
      function aK(e) {
        return (0, eW.useQuery)({
          queryKey: aO(),
          queryFn: aU,
          staleTime: 18e5,
          ...e,
        });
      }
      var aL = n(61731),
        aQ = n(72417),
        aW = n.n(aQ),
        aN = n(26062),
        a_ = n.n(aN),
        aj = n(99112),
        aX = n(21517),
        aJ = n(84355),
        aY = n(70096);
      let aG = ["prices", "tokenPrices"];
      function aZ(e) {
        return [{ entity: aG, ...e }];
      }
      async function a$(e) {
        var t, n, a, i, r, s, u;
        let {
            queryKey: [{ chainId: o }],
          } = e,
          p = tA.m3[o],
          [l, y, d, c, m, A, b] = await (0, te.J)(tc._, {
            contracts: [
              {
                address: tA.t.addresses.chainlinkEthOracle,
                abi: e7.E.ChainlinkEthOracle,
                functionName: "decimals",
                chainId: tA.t.chain.id,
              },
              {
                address: tA.t.addresses.chainlinkEthOracle,
                abi: e7.E.ChainlinkEthOracle,
                functionName: "latestAnswer",
                chainId: tA.t.chain.id,
              },
              {
                address: p.addresses.restakeManager,
                abi: e7.E.RestakeManager,
                functionName: "calculateTVLs",
                chainId: p.chain.id,
              },
              {
                address: tb.TV.ezETH.supportedChains[p.chain.id].address,
                abi: [
                  {
                    inputs: [],
                    name: "totalSupply",
                    outputs: [
                      { internalType: "uint256", name: "", type: "uint256" },
                    ],
                    stateMutability: "view",
                    type: "function",
                  },
                ],
                functionName: "totalSupply",
                chainId: p.chain.id,
              },
              {
                address: tA.t.addresses.pzETHOracle,
                abi: e7.E.pzETHOracle,
                functionName: "getRate",
                chainId: tA.t.chain.id,
              },
              {
                address: tA.t.addresses.stETHToUSDOracle,
                abi: e7.E.ChainlinkEthOracle,
                functionName: "latestAnswer",
                chainId: tA.t.chain.id,
              },
              {
                address:
                  tb.TV[tb.Wr.wstETH].supportedChains[tA.t.chain.id].address,
                abi: e7.E.wstETH,
                functionName: "stEthPerToken",
                chainId: tA.t.chain.id,
              },
            ],
            allowFailure: !0,
          }),
          f = {},
          T = Number(
            (0, nS.b)(
              null !== (t = y.result) && void 0 !== t ? t : 0n,
              null !== (n = l.result) && void 0 !== n ? n : 6
            )
          ),
          g =
            (Number((0, tu.d)(d.result ? d.result[2] : 0n)) /
              Number(
                (0, tu.d)(null !== (a = c.result) && void 0 !== a ? a : 0n)
              )) *
            T,
          w = Number(
            (0, nS.b)(null !== (i = m.result) && void 0 !== i ? i : 0n, tb.p8)
          ),
          h = (0, td.Z)(T).mul(w).toNumber(),
          E = Number(
            (0, nS.b)(
              null !== (r = A.result) && void 0 !== r ? r : 0n,
              null !== (s = l.result) && void 0 !== s ? s : 6
            )
          ),
          v = (0, ty.RM)(E)
            .mul(
              Number(
                (0, nS.b)(null !== (u = b.result) && void 0 !== u ? u : 0n, 18)
              )
            )
            .toNumber();
        [
          ...Object.entries(tb.TV.ETH.supportedChains),
          ...Object.entries(tb.TV.WETH.supportedChains),
        ].forEach((e) => {
          let [t, { address: n }] = e;
          f[(0, tR.M4)(n, Number(t))] = T;
        }),
          [...Object.entries(tb.TV.ezETH.supportedChains)].forEach((e) => {
            let [t, { address: n }] = e;
            f[(0, tR.M4)(n, Number(t))] = g;
          }),
          [...Object.entries(tb.TV.pzETH.supportedChains)].forEach((e) => {
            let [t, { address: n }] = e;
            f[(0, tR.M4)(n, Number(t))] = h;
          }),
          [...Object.entries(tb.TV.stETH.supportedChains)].forEach((e) => {
            let [t, { address: n }] = e;
            f[(0, tR.M4)(n, Number(t))] = E;
          }),
          [...Object.entries(tb.TV.wstETH.supportedChains)].forEach((e) => {
            let [t, { address: n }] = e;
            f[(0, tR.M4)(n, Number(t))] = v;
          });
        let x = [];
        tb.TV.wBETH.supportedChains[p.chain.id] &&
          x.push(tb.TV.wBETH.supportedChains[p.chain.id].address);
        let k = tb.TV.JitoSOL.supportedChains[aX.p5.solanaMainnet.id],
          M = tb.TV.ezSOL.supportedChains[aX.p5.solanaMainnet.id],
          z = tb.TV.SOL.supportedChains[aX.p5.solanaMainnet.id],
          F = [];
        aL.bH.forEach((e) => {
          e.depositToken.coinGeckoId &&
            F.push({
              tokenKey: (0, tR.M4)(
                e.depositToken.address.toLowerCase(),
                e.depositToken.chainId
              ),
              coinGeckoId: e.depositToken.coinGeckoId,
            });
        });
        let [C, B] = await Promise.all([
          (0, te.J)(tc._, {
            contracts: x.map((e) => ({
              address: p.addresses.renzoOracle,
              abi: e7.E.RenzoOracle,
              functionName: "lookupTokenValues",
              args: [[e], [(0, ts.f)("1")]],
              chainId: p.chain.id,
            })),
            allowFailure: !0,
          }),
          tg(
            aW()([
              {
                tokenKey: (0, tR.M4)(aY.F.address.toLowerCase(), aY.F.chainId),
                coinGeckoId: "renzo",
              },
              {
                tokenKey: (0, tR.M4)(aJ.Y.address.toLowerCase(), aJ.Y.chainId),
                coinGeckoId: "eigenlayer",
              },
              {
                tokenKey: (0, tR.M4)(k.address, k.chainId),
                coinGeckoId: "jito-staked-sol",
              },
              {
                tokenKey: (0, tR.M4)(M.address, M.chainId),
                coinGeckoId: "renzo-restaked-sol",
              },
              {
                tokenKey: (0, tR.M4)(M.address, M.chainId),
                coinGeckoId: "renzo-restaked-sol",
              },
              {
                tokenKey: (0, tR.M4)(z.address, z.chainId),
                coinGeckoId: "solana",
              },
              ...F,
            ])
          ),
        ]);
        C.filter((e) => "success" === e.status).forEach((e, t) => {
          f[(0, tR.M4)(x[t], p.chain.id)] = Number((0, tu.d)(e.result)) * T;
        }),
          [
            ...Object.entries(tb.TV.wBETH.supportedChains),
            ...Object.entries(tb.TV.stETH.supportedChains),
            ...Object.entries(tb.TV.wstETH.supportedChains),
          ].forEach((e) => {
            let [t, { address: n }] = e;
            f[(0, tR.M4)(n, Number(t))] = f[(0, tR.M4)(n, p.chain.id)];
          });
        let D = {};
        return (
          await Promise.all(
            aL.bH
              .filter(
                (e) =>
                  !!e.receiptToken.address && "0x" !== e.receiptToken.address
              )
              .map(async (e) => {
                let { depositToken: t, receiptToken: n } = e,
                  a = (0, tR.M4)(t.address.toLowerCase(), t.chainId),
                  i = (0, tR.M4)((0, aj.K)(t.address), t.chainId),
                  r = f[a] || B[a] || f[i] || B[i],
                  s = await tm({
                    depositTokenPrice: r,
                    receiptTokenAddress: n.address,
                    chainId: n.chainId,
                  });
                D[(0, tR.M4)(n.address.toLowerCase(), n.chainId)] = s;
              })
          ),
          [...Object.entries(tb.TV.JitoSOL.supportedChains)].forEach((e) => {
            let [t, { address: n }] = e;
            B[(0, tR.M4)(n, Number(t))] = B[(0, tR.M4)(k.address, k.chainId)];
          }),
          [...Object.entries(tb.TV.ezSOL.supportedChains)].forEach((e) => {
            let [t, { address: n }] = e;
            B[(0, tR.M4)(n, Number(t))] = B[(0, tR.M4)(M.address, M.chainId)];
          }),
          { ...a_()(f, (e, t) => t.toLowerCase()), ...B, ...D }
        );
      }
      function a0(e, t) {
        let n = aZ(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => a$({ ...e, queryKey: n }),
          staleTime: 3e5,
          ...t,
        });
      }
      let a2 = ["prices", "tokenPrice"];
      function a5(e) {
        return [{ entity: a2, ...e }];
      }
      async function a6(e) {
        let {
          queryKey: [{ token: t, coinGeckoId: n }],
        } = e;
        return (
          (
            await tg([
              {
                tokenKey: (0, tR.M4)(t.address.toLowerCase(), t.chainId),
                coinGeckoId: n,
              },
            ])
          )[(0, tR.M4)(t.address.toLowerCase(), t.chainId)] || 0
        );
      }
      function a1(e, t) {
        let n = a5(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => a6({ ...e, queryKey: n }),
          staleTime: 3e5,
          ...t,
        });
      }
      var a8 = n(15609);
      function a3(e) {
        return [{ entity: ["prices", "gasFeePrice"], ...e }];
      }
      async function a4(e) {
        let {
            queryKey: [{ chainId: t }],
          } = e,
          n = await (0, a8.X)(tt.g, {
            chainId: t,
            formatUnits: "ether",
            type: "legacy",
          });
        return Number((0, tu.d)(n.gasPrice));
      }
      function a9(e, t) {
        let n = a3(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => a4({ ...e, queryKey: n }),
          staleTime: 6e4,
          ...t,
        });
      }
      let a7 = ["pzETH", "withdrawalRequest"];
      function ie(e) {
        return [{ entity: a7, ...e }];
      }
      async function it(e) {
        let {
            queryKey: [{ chainId: t, userAddress: n }],
          } = e,
          a = tA.m3[t];
        return await (0, tr.L)(tt.g, {
          address: tb.TV.pzETH.supportedChains[a.chain.id].address,
          abi: e7.E.pzETH,
          functionName: "withdrawalRequest",
          chainId: a.chain.id,
          args: [n],
        });
      }
      function ia(e, t) {
        let n = ie(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => it({ ...e, queryKey: n }),
          ...t,
        });
      }
      let ii = ["pzETH", "ETHRate"];
      function ir(e) {
        return [{ entity: ii, ...e }];
      }
      async function is(e) {
        let {
            queryKey: [{ chainId: t, oracle: n }],
          } = e,
          a = tA.m3[t];
        return await (0, tr.L)(tt.g, {
          address: n,
          abi: e7.E.pzETHOracle,
          functionName: "getRate",
          chainId: a.chain.id,
        });
      }
      function iu(e, t) {
        let n = ir(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => is({ ...e, queryKey: n }),
          ...t,
        });
      }
      let io = ["pzETH", "stETHRate"];
      function ip(e) {
        return [{ entity: io, ...e }];
      }
      async function il(e) {
        let {
            queryKey: [{ chainId: t, oracle: n }],
          } = e,
          a = tA.m3[t];
        return await (0, tr.L)(tt.g, {
          address: n,
          abi: e7.E.ChainlinkEthOracle,
          functionName: "latestAnswer",
          chainId: a.chain.id,
        });
      }
      function iy(e, t) {
        let n = ip(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => il({ ...e, queryKey: n }),
          ...t,
        });
      }
      let id = ["stETH", "getStETHByWstETH"];
      function ic(e) {
        return [{ entity: id, ...e }];
      }
      async function im(e) {
        let {
            queryKey: [{ chainId: t, wstETH: n, wstETHAmount: a }],
          } = e,
          i = tA.m3[t];
        return await (0, tr.L)(tt.g, {
          address: n,
          abi: e7.E.wstETH,
          functionName: "getStETHByWstETH",
          chainId: i.chain.id,
          args: [BigInt(a)],
        });
      }
      function iA(e, t) {
        let n = ic(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => im({ ...e, queryKey: n }),
          ...t,
        });
      }
      let ib = ["restake", "restakeTotalTVL"];
      function iT(e) {
        return [{ entity: ib, ...e }];
      }
      async function ig(e) {
        let {
            queryKey: [{ chainId: t }],
          } = e,
          n = tA.m3[t],
          a = await (0, tr.L)(tt.g, {
            address: n.addresses.restakeManager,
            abi: e7.E.RestakeManager,
            functionName: "calculateTVLs",
            chainId: n.chain.id,
          });
        return Number((0, tu.d)(a[2]));
      }
      function iw(e, t) {
        let n = iT(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => ig({ ...e, queryKey: n }),
          ...t,
        });
      }
      let ih = ["restake", "maxDepositTVL"];
      function iE(e) {
        return [{ entity: ih, ...e }];
      }
      async function iv(e) {
        let {
            queryKey: [{ chainId: t }],
          } = e,
          n = tA.m3[t],
          a = await (0, tr.L)(tt.g, {
            address: n.addresses.restakeManager,
            abi: e7.E.RestakeManager,
            functionName: "maxDepositTVL",
            chainId: n.chain.id,
          });
        return Number((0, tu.d)(a));
      }
      function ix(e, t) {
        let n = iE(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => iv({ ...e, queryKey: n }),
          ...t,
        });
      }
      let ik = ["restake", "restakeTokenTVLLimit"];
      function iM(e) {
        return [{ entity: ik, ...e }];
      }
      async function iz(e) {
        let {
            queryKey: [{ tokenAddress: t, chainId: n }],
          } = e,
          a = tA.m3[n];
        if ((0, tR.BB)(t)) return 0;
        let i = await (0, tr.L)(tt.g, {
          address: a.addresses.restakeManager,
          abi: e7.E.RestakeManager,
          functionName: "collateralTokenTvlLimits",
          chainId: a.chain.id,
          args: [t],
        });
        return Number((0, tu.d)(i));
      }
      function iF(e, t) {
        let n = iM(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => iz({ ...e, queryKey: n }),
          ...t,
        });
      }
      let iC = ["restake", "restakeTokenTVL"];
      function iB(e) {
        return [{ entity: iC, ...e }];
      }
      async function iD(e) {
        let {
            queryKey: [{ tokenAddress: t, chainId: n }],
          } = e,
          a = tA.m3[n],
          [i, r] = await (0, te.J)(tt.g, {
            contracts: [
              {
                address: a.addresses.restakeManager,
                abi: e7.E.RestakeManager,
                functionName: "calculateTVLs",
                chainId: a.chain.id,
              },
              {
                address: a.addresses.restakeManager,
                abi: e7.E.RestakeManager,
                functionName: "getCollateralTokenIndex",
                chainId: a.chain.id,
                args: [t],
              },
            ],
            allowFailure: !1,
          }),
          s = 0;
        for (let e = 0; e < i[0].length; e++)
          s += Number((0, tu.d)(i[0][e][Number(r)]));
        return s;
      }
      function iI(e, t) {
        let n = iB(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => iD({ ...e, queryKey: n }),
          ...t,
        });
      }
      async function iR(e) {
        let t = tb.TV.pzETH.supportedChains[e].address,
          n = await (0, tr.L)(tc._, {
            address: t,
            functionName: "totalSupply",
            abi: e7.E.pzETH,
            chainId: e,
          });
        return (0, tu.d)(n);
      }
      let iH = ["restake", "proofOfReserves"];
      function iS(e) {
        return [{ entity: iH, ...e }];
      }
      async function iq(e) {
        let {
            queryKey: [{ chainId: t, tokens: n }],
          } = e,
          a = tA.m3[t],
          i = await (0, tr.L)(tt.g, {
            address: a.addresses.restakeManager,
            abi: e7.E.RestakeManager,
            functionName: "calculateTVLs",
            chainId: a.chain.id,
          }),
          r = null == i ? void 0 : i[0],
          s = [];
        for (let e = 0; e < n.length; e++) {
          let i = BigInt(0);
          if ((0, tR.BB)(n[e].address)) {
            for (let e = 0; e < r.length; e++) {
              let t = r[e].length - 1;
              i += r[e][t];
            }
            let [t, u] = await Promise.all([
              (0, nK.s)(tt.g, {
                address: a.addresses.depositQueue,
                chainId: a.chain.id,
              }),
              (0, nK.s)(tt.g, {
                address: a.addresses.withdrawQueue,
                chainId: a.chain.id,
              }),
            ]);
            (i += t.value + u.value),
              s.push({ ...n[e], balance: parseFloat((0, tu.d)(i)) });
          } else if (n[e].symbol === tb.Wr.wstETH) {
            let t = await iR(n[e].chainId);
            s.push({ ...n[e], balance: parseFloat(t) });
          } else
            try {
              let [u, o] = await (0, te.J)(tt.g, {
                contracts: [
                  {
                    address: a.addresses.restakeManager,
                    abi: e7.E.RestakeManager,
                    functionName: "getCollateralTokenIndex",
                    chainId: n[e].chainId,
                    args: [n[e].address],
                  },
                  {
                    address: n[e].address,
                    abi: nZ.Wo,
                    functionName: "balanceOf",
                    args: [a.addresses.withdrawQueue],
                    chainId: t,
                  },
                ],
                allowFailure: !1,
              });
              for (let e = 0; e < r.length; e++) i += r[e][Number(u)];
              (i += o), s.push({ ...n[e], balance: parseFloat((0, tu.d)(i)) });
            } catch (e) {
              console.log(e);
            }
        }
        return s;
      }
      function iV(e, t) {
        let n = iS(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => iq({ ...e, queryKey: n }),
          ...t,
        });
      }
      function iP() {
        let e = (0, tG._)([
          "\n  query getRestakeDailySnapshots {\n    restakeDailySnapshots(orderBy: timestamp, orderDirection: desc, first: 1000) {\n      tvlUSD\n      tvl\n      timestamp\n    }\n  }\n",
        ]);
        return (
          (iP = function () {
            return e;
          }),
          e
        );
      }
      let iO = eN.z.object({
          restakeDailySnapshots: eN.z.array(
            eN.z.object({
              tvlUSD: eN.z.string(),
              tvl: eN.z.string(),
              timestamp: eN.z.string(),
            })
          ),
        }),
        iU = (0, tZ.Ps)(iP()),
        iK = ["restake", "dailySnapshots"];
      function iL(e) {
        return [{ entity: iK, ...e }];
      }
      async function iQ(e) {
        let {
            queryKey: [{ chainId: t }],
          } = e,
          n = tA.m3[t],
          a = new tZ.g6(n.subgraphs.renzo),
          i = await a.request(iU);
        return iO.parse(i);
      }
      function iW(e, t) {
        let n = iL(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => iQ({ ...e, queryKey: n }),
          staleTime: 3e5,
          ...t,
        });
      }
      let iN = ["rez", "getVotes"];
      function i_(e) {
        return [{ entity: iN, ...e }];
      }
      async function ij(e) {
        let {
          queryKey: [{ userAddress: t, chainId: n }],
        } = e;
        return t
          ? await (0, tr.L)(tt.g, {
              address: aY.F.address,
              abi: e7.E.REN,
              functionName: "getVotes",
              args: [t],
              chainId: n,
            })
          : 0;
      }
      function iX(e, t) {
        let n = i_(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => ij({ ...e, queryKey: n }),
          ...t,
        });
      }
      let iJ = ["rez", "delegates"];
      function iY(e) {
        return [{ entity: iJ, ...e }];
      }
      async function iG(e) {
        let {
          queryKey: [{ userAddress: t, chainId: n }],
        } = e;
        return t
          ? await (0, tr.L)(tt.g, {
              address: aY.F.address,
              abi: e7.E.REN,
              functionName: "delegates",
              args: [t],
              chainId: n,
            })
          : 0;
      }
      function iZ(e, t) {
        let n = iY(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => iG({ ...e, queryKey: n }),
          ...t,
        });
      }
      let i$ = ["rezVesting", "getVotes"];
      function i0(e) {
        return [{ entity: i$, ...e }];
      }
      async function i2(e) {
        let {
          queryKey: [{ userAddress: t, chainId: n }],
        } = e;
        if (!t) return 0;
        let a = tA.m3[n];
        return await (0, tr.L)(tt.g, {
          address: a.addresses.rezVesting,
          abi: e7.E.REZVesting,
          functionName: "getVotes",
          args: [t],
          chainId: n,
        });
      }
      function i5(e, t) {
        let n = i0(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => i2({ ...e, queryKey: n }),
          ...t,
        });
      }
      let i6 = ["rezVesting", "getVotingPower"];
      function i1(e) {
        return [{ entity: i6, ...e }];
      }
      async function i8(e) {
        let {
          queryKey: [{ userAddress: t, chainId: n }],
        } = e;
        if (!t) return 0;
        let a = tA.m3[n];
        return await (0, tr.L)(tt.g, {
          address: a.addresses.rezVesting,
          abi: e7.E.REZVesting,
          functionName: "votingPower",
          args: [t],
          chainId: n,
        });
      }
      function i3(e, t) {
        let n = i1(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => i8({ ...e, queryKey: n }),
          ...t,
        });
      }
      let i4 = ["rezVesting", "delegates"];
      function i9(e) {
        return [{ entity: i4, ...e }];
      }
      async function i7(e) {
        let {
          queryKey: [{ userAddress: t, chainId: n }],
        } = e;
        if (!t) return 0;
        let a = tA.m3[n];
        return await (0, tr.L)(tt.g, {
          address: a.addresses.rezVesting,
          abi: e7.E.REZVesting,
          functionName: "delegates",
          args: [t],
          chainId: n,
        });
      }
      function re(e, t) {
        let n = i9(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => i7({ ...e, queryKey: n }),
          ...t,
        });
      }
      function rt(e) {
        return [{ entity: ["solana", "tokenBalances"], ...e }];
      }
      async function rn(e) {
        let {
            queryKey: [{ userAddress: t, chainId: n }],
          } = e,
          a = nb[n],
          i = new nd.PublicKey(t),
          r = new nd.PublicKey(nR.of),
          [s, u] = await Promise.all([
            a.getParsedTokenAccountsByOwner(i, { programId: r }),
            a.getBalance(i),
          ]),
          o = s.value.reduce((e, t) => {
            let n = BigInt(t.account.data.parsed.info.tokenAmount.amount);
            return n > 0n && (e[t.account.data.parsed.info.mint] = n), e;
          }, {}),
          p = tb.J_.map((e) => {
            var t;
            return null === (t = e.supportedChains[n]) || void 0 === t
              ? void 0
              : t.address;
          }).reduce((e, t) => {
            let n = o[t] || 0n;
            return (
              (e[t] = {
                value: n,
                formatted: (0, nS.b)(n, nR.Ey),
                decimals: nR.Ey,
              }),
              e
            );
          }, {}),
          l = BigInt(u);
        return (
          (p[nR.GK] = {
            value: l,
            formatted: (0, nS.b)(l, nR.Ey),
            decimals: nR.Ey,
          }),
          p
        );
      }
      function ra(e, t) {
        let n = rt(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => rn({ ...e, queryKey: n }),
          ...t,
        });
      }
      function ri(e) {
        return [{ entity: ["solana", "nativeCurrencyBalance"], ...e }];
      }
      async function rr(e) {
        let {
            queryKey: [{ userAddress: t, chainId: n }],
          } = e,
          a = nb[n],
          i = new nd.PublicKey(t),
          r = await a.getBalance(i);
        return (0, nS.b)(BigInt(r), nR.Ey);
      }
      function rs(e, t) {
        let n = ri(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => rr({ ...e, queryKey: n }),
          ...t,
        });
      }
      let ru = ["solana", "currentSlot"];
      function ro(e) {
        return [{ entity: ru, ...e }];
      }
      async function rp(e) {
        let {
            queryKey: [{ chainId: t }],
          } = e,
          n = nb[t];
        return await n.getSlot();
      }
      function rl(e, t) {
        let n = ro(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => rp({ ...e, queryKey: n }),
          ...t,
        });
      }
      var ry = n(19900),
        rd = n(49754);
      function rc(e) {
        return [{ entity: ["solana", "jupiter", "swapQuote"], ...e }];
      }
      async function rm(e) {
        let {
          queryKey: [
            {
              tokenInAddress: t,
              tokenOutAddress: n,
              amount: a,
              slippageBps: i,
              isExactIn: r,
            },
          ],
        } = e;
        return await (0, rd.ht)({
          inputMint: (0, tR.BB)(t) ? nR.Nr : t,
          outputMint: n,
          swapMode: r ? ry.eZ.ExactIn : ry.eZ.ExactOut,
          amount: Number(a),
          slippageBps: i,
        });
      }
      function rA(e, t) {
        let n = rc(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => rm({ ...e, queryKey: n }),
          ...t,
        });
      }
      let rb = ["stake", "coolDownPeriod"];
      function rf(e) {
        return [{ entity: rb, ...e }];
      }
      async function rT(e) {
        let {
          queryKey: [{ address: t, chainId: n }],
        } = e;
        return t
          ? Number(
              await (0, tr.L)(tt.g, {
                address: t,
                abi: e7.E.REZtake,
                functionName: "coolDownPeriod",
                chainId: n,
              })
            )
          : 0;
      }
      function rg(e, t) {
        let n = rf(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => rT({ ...e, queryKey: n }),
          ...t,
        });
      }
      let rw = ["stake", "activeStake"];
      function rh(e) {
        return [{ entity: rw, ...e }];
      }
      async function rE(e) {
        let {
          queryKey: [{ userAddress: t, stakerAddress: n, chainId: a }],
        } = e;
        return t && n
          ? await (0, tr.L)(tt.g, {
              address: n,
              abi: e7.E.REZtake,
              functionName: "activeStake",
              args: [t],
              chainId: a,
            })
          : 0;
      }
      function rv(e, t) {
        let n = rh(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => rE({ ...e, queryKey: n }),
          ...t,
        });
      }
      function rx() {
        let e = (0, tG._)([
          '\n  query stakedDailySnapshots {\n    totalStakeds(where: { id_not: "0x00" }, orderBy: timestamp, orderDirection: desc) {\n      id\n      amount\n      timestamp\n    }\n  }\n',
        ]);
        return (
          (rx = function () {
            return e;
          }),
          e
        );
      }
      function rk() {
        let e = (0, tG._)([
          '\n  query totalStaked {\n    totalStakeds(where: { id: "0x00" }) {\n      id\n      amount\n      timestamp\n    }\n  }\n',
        ]);
        return (
          (rk = function () {
            return e;
          }),
          e
        );
      }
      let rM = eN.z.object({
          stakedDailySnapshots: eN.z.array(
            eN.z.object({
              id: eN.z.string(),
              amount: eN.z.string(),
              timestamp: eN.z.string(),
            })
          ),
          totalStaked: eN.z.object({
            id: eN.z.string(),
            amount: eN.z.string(),
            timestamp: eN.z.string(),
          }),
        }),
        rz = (0, tZ.Ps)(rx()),
        rF = (0, tZ.Ps)(rk()),
        rC = ["stake", "totalStakeds"];
      function rB(e) {
        return [{ entity: rC, ...e }];
      }
      async function rD(e) {
        var t, n;
        let {
            queryKey: [{ chainId: a }],
          } = e,
          i = tA.m3[a],
          r = new tZ.g6(i.subgraphs.reztake),
          s = await Promise.all([r.request(rz), r.request(rF)]),
          u = {
            stakedDailySnapshots:
              null == s
                ? void 0
                : null === (t = s[0]) || void 0 === t
                ? void 0
                : t.totalStakeds,
            totalStaked:
              null == s
                ? void 0
                : null === (n = s[1].totalStakeds) || void 0 === n
                ? void 0
                : n[0],
          };
        return rM.parse(u);
      }
      function rI(e, t) {
        let n = rB(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => rD({ ...e, queryKey: n }),
          staleTime: 3e5,
          ...t,
        });
      }
      function rR() {
        let e = (0, tG._)([
          "\n  query stakingTransactions($user: String!) {\n    transactions(where: { user: $user }) {\n      id\n      index\n      txhash\n      action\n      amount\n      cooldown\n      blockNumber\n      blockTimestamp\n    }\n  }\n",
        ]);
        return (
          (rR = function () {
            return e;
          }),
          e
        );
      }
      let rH = eN.z.array(
          eN.z.object({
            id: eN.z.string(),
            index: eN.z.number().nullable(),
            txhash: eN.z.string().optional(),
            action: eN.z.string(),
            amount: eN.z.string(),
            cooldown: eN.z.string().nullable(),
            blockNumber: eN.z.string(),
            blockTimestamp: eN.z.string(),
          })
        ),
        rS = (0, tZ.Ps)(rR()),
        rq = ["stake", "transaction"];
      function rV(e) {
        return [{ entity: rq, ...e }];
      }
      async function rP(e) {
        let {
            queryKey: [{ userAddress: t, chainId: n }],
          } = e,
          a = tA.m3[n],
          i = new tZ.g6(a.subgraphs.reztake),
          r = await i.request(rS, {
            user: null == t ? void 0 : t.toLowerCase(),
          });
        return rH.parse(null == r ? void 0 : r.transactions);
      }
      function rO(e, t) {
        let n = rV(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => rP({ ...e, queryKey: n }),
          staleTime: 3e5,
          ...t,
        });
      }
      let rU = eN.z
          .object({
            success: eN.z.boolean(),
            data: eN.z
              .object({ eth: eN.z.number(), usd: eN.z.number() })
              .optional(),
            ezETH: eN.z
              .object({ eth: eN.z.number(), usd: eN.z.number() })
              .optional(),
            pzETH: eN.z
              .object({ pzEth: eN.z.number(), usd: eN.z.number() })
              .optional(),
            ezSOL: eN.z
              .object({ ezSOL: eN.z.number(), usd: eN.z.number() })
              .optional(),
          })
          .catchall(
            eN.z
              .object({ usd: eN.z.number() })
              .and(eN.z.record(eN.z.string(), eN.z.number()))
              .optional()
          ),
        rK = eN.z
          .object({
            success: eN.z.boolean(),
            data: eN.z.object({
              rate: eN.z
                .number()
                .transform((e) => e / 100)
                .optional(),
              avgPeriodDays: eN.z.number().optional(),
            }),
            pzETHAPR: eN.z.object({
              rate: eN.z
                .number()
                .transform((e) => e / 100)
                .optional(),
              avgPeriodDays: eN.z.number().optional(),
            }),
          })
          .catchall(
            eN.z.object({
              rate: eN.z
                .number()
                .transform((e) => e / 100)
                .optional(),
              avgPeriodDays: eN.z.number().optional(),
            })
          ),
        rL = eN.z.object({
          success: eN.z.boolean(),
          data: eN.z.object({
            restakedTVL: rU,
            apr: rK,
            totalEigenLayerPoints: eN.z.object({
              success: eN.z.boolean(),
              data: eN.z.object({ points: eN.z.number() }).optional(),
            }),
            totalRenzoPoints: eN.z.object({
              success: eN.z.boolean(),
              data: eN.z
                .object({ points: eN.z.number(), multiplier: eN.z.number() })
                .optional(),
            }),
          }),
        }),
        rQ = ["stats", "totals"];
      function rW(e) {
        return [{ entity: rQ, ...e }];
      }
      async function rN(e) {
        let {
            queryKey: [{ chainId: t }],
          } = e,
          n = eQ(),
          a = await fetch("".concat(n, "/stats?chainId=").concat(t), {
            next: { revalidate: 1800 },
          }),
          i = await a.json();
        return rL.parse(i);
      }
      function r_(e, t) {
        let n = rW(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => rN({ ...e, queryKey: n }),
          staleTime: 18e5,
          ...t,
        });
      }
      let rj = eN.z.object({
          success: eN.z.boolean(),
          data: eN.z.object({
            tvl: eN.z
              .object({ pzEth: eN.z.number(), usd: eN.z.number() })
              .optional(),
            apr: eN.z.number(),
          }),
        }),
        rX = ["stats", "pzETH"];
      function rJ(e) {
        return [{ entity: rX, ...e }];
      }
      async function rY() {
        let e = await fetch("/api/stats/pzETH"),
          t = await e.json();
        return rj.parse(t);
      }
      function rG(e, t) {
        let n = rJ(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: rY,
          staleTime: 3e5,
          ...t,
        });
      }
      let rZ = eN.z.object({
          success: eN.z.boolean(),
          data: eN.z.object({
            renzoTVLs: eN.z.array(
              eN.z.object({
                ezEthTvlUSD: eN.z.string(),
                ezEthTotalSupply: eN.z.string(),
                pzEthTvlUSD: eN.z.string(),
                pzETHTotalSupply: eN.z.string(),
                timestamp: eN.z.string(),
              })
            ),
            ezRVaults: eN.z.array(
              eN.z.object({
                id: eN.z.string(),
                underlyingToken: eN.z.string(),
                underlyingTvl: eN.z.string(),
                underlyingTvlUSD: eN.z.string(),
                lpTotalSupply: eN.z.string(),
                dailyTvls: eN.z.array(
                  eN.z.object({
                    id: eN.z.string(),
                    underlyingTvl: eN.z.string(),
                    lpTotalSupply: eN.z.string(),
                    underlyingTvlUSD: eN.z.string(),
                    timestamp: eN.z.string(),
                  })
                ),
              })
            ),
          }),
        }),
        r$ = ["stats", "dailyTVLs"];
      function r0() {
        return [{ entity: r$ }];
      }
      async function r2() {
        let e = await fetch("/api/stats/dailyTVLs"),
          t = await e.json();
        return rZ.parse(t);
      }
      function r5(e, t) {
        return (0, eW.useQuery)({
          queryKey: r0(),
          queryFn: r2,
          staleTime: 3e5,
          ...t,
        });
      }
      function r6() {
        let e = (0, tG._)([
          "\n  query getBlockNumber {\n    _meta {\n      block {\n        number\n      }\n    }\n  }\n",
        ]);
        return (
          (r6 = function () {
            return e;
          }),
          e
        );
      }
      let r1 = (0, tZ.Ps)(r6()),
        r8 = eN.z
          .object({
            _meta: eN.z.object({
              block: eN.z.object({ number: eN.z.number() }),
            }),
          })
          .transform((e) => e._meta.block.number),
        r3 = ["subgraph", "blockNumber"];
      function r4(e) {
        return [{ entity: r3, ...e }];
      }
      async function r9(e) {
        let {
            queryKey: [{ subgraphURI: t }],
          } = e,
          n = new tZ.g6(t, { fetch }),
          a = await n.request(r1);
        return r8.parse(a);
      }
      function r7(e, t) {
        let n = r4(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => r9({ ...e, queryKey: n }),
          ...t,
        });
      }
      let se = ["tokens", "balances"];
      function st(e) {
        return [{ entity: se, ...e }];
      }
      async function sn(e) {
        let {
            queryKey: [{ tokens: t, userAddress: n }],
          } = e,
          a = t.filter((e) => {
            let { address: t } = e;
            return !(0, tR.BB)(t);
          }),
          i = t.filter((e) => {
            let { address: t } = e;
            return (0, tR.BB)(t);
          }),
          r = await (0, te.J)(tt.g, {
            contracts: a.map((e) => {
              let { address: t, chainId: a } = e;
              return {
                abi: e7.E.erc20,
                address: t,
                functionName: "balanceOf",
                args: [n],
                chainId: a,
              };
            }),
          }),
          s = a.map((e, t) => {
            let n = "0";
            if ("success" === r[t].status) {
              var a;
              n = (0, nS.b)(
                null !== (a = r[t].result) && void 0 !== a ? a : 0n,
                e.decimals
              );
            }
            return { ...e, balance: n };
          });
        try {
          (
            await Promise.all(
              i.map((e) => {
                let { chainId: t } = e;
                return (0, nK.s)(tt.g, { address: n, chainId: t });
              })
            )
          ).forEach((e, t) => {
            let {
              address: n,
              chainId: a,
              symbol: r,
              decimals: u,
              chainType: o,
            } = i[t];
            s.unshift({
              symbol: r,
              address: n,
              balance: e.formatted,
              decimals: u,
              chainId: a,
              chainType: o,
            });
          });
        } catch (e) {
          console.error(e);
        }
        return s;
      }
      function sa(e, t) {
        let n = st(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => sn({ ...e, queryKey: n }),
          staleTime: 3e5,
          ...t,
        });
      }
      let si = ["tokens", "allowance"];
      function sr(e) {
        return [{ entity: si, ...e }];
      }
      async function ss(e) {
        let {
          queryKey: [{ tokenAddress: t, owner: n, spender: a, chainId: i }],
        } = e;
        return n
          ? Number(
              await (0, tr.L)(tt.g, {
                address: t,
                abi: e7.E.erc20,
                functionName: "allowance",
                args: [n, a],
                chainId: i,
              })
            )
          : 0;
      }
      function su(e, t) {
        let n = sr(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => ss({ ...e, queryKey: n }),
          ...t,
        });
      }
      function so() {
        let e = (0, tG._)([
          "\n  query referredBy($id: String!) {\n    referral(id: $id) {\n      referredBy\n    }\n  }\n",
        ]);
        return (
          (so = function () {
            return e;
          }),
          e
        );
      }
      let sp = eN.z
          .object({
            referral: eN.z.object({ referredBy: eN.z.string() }).nullable(),
          })
          .transform((e) => (e.referral ? e.referral.referredBy : null)),
        sl = (0, tZ.Ps)(so()),
        sy = ["user", "referredBy"];
      function sd(e) {
        return [{ entity: sy, ...e }];
      }
      async function sc(e) {
        let {
            queryKey: [{ userAddress: t, chainId: n }],
          } = e,
          a = tA.m3[n],
          i = new tZ.g6(a.subgraphs.renzo),
          r = await i.request(sl, { id: t.toLowerCase() });
        return sp.parse(r);
      }
      function sm(e, t) {
        let n = sd(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => sc({ ...e, queryKey: n }),
          staleTime: 3e5,
          ...t,
        });
      }
      let sA = ["withdraw", "calculateRedeemAmount"];
      function sb(e) {
        return [{ entity: sA, ...e }];
      }
      async function sf(e) {
        let {
            queryKey: [{ chainId: t, redeemAmount: n, redeemTokenAddress: a }],
          } = e,
          i = tA.m3[t],
          [r, s] = await (0, te.J)(tt.g, {
            contracts: [
              {
                address: i.addresses.restakeManager,
                abi: e7.E.RestakeManager,
                functionName: "calculateTVLs",
                chainId: i.chain.id,
              },
              {
                address: tb.TV.ezETH.supportedChains[i.chain.id].address,
                abi: nZ.Wo,
                functionName: "totalSupply",
                chainId: i.chain.id,
              },
            ],
            allowFailure: !1,
          }),
          u = await (0, tr.L)(tt.g, {
            address: i.addresses.renzoOracle,
            abi: e7.E.RenzoOracle,
            functionName: "calculateRedeemAmount",
            chainId: i.chain.id,
            args: [(0, ts.f)(n), s, r[2]],
          });
        return (
          (0, tR.BB)(a) ||
            (u = await (0, tr.L)(tt.g, {
              address: i.addresses.renzoOracle,
              abi: e7.E.RenzoOracle,
              functionName: "lookupTokenAmountFromValue",
              chainId: i.chain.id,
              args: [a, u],
            })),
          (0, tu.d)(u)
        );
      }
      function sT(e, t) {
        let n = sb(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => sf({ ...e, queryKey: n }),
          ...t,
        });
      }
      let sg = ["withdraw", "calculateMintAmount"];
      function sw(e) {
        return [{ entity: sg, ...e }];
      }
      async function sh(e) {
        let {
            queryKey: [{ chainId: t, mintAmount: n, mintTokenAddress: a }],
          } = e,
          i = tA.m3[t],
          [r, s] = await (0, te.J)(tt.g, {
            contracts: [
              {
                address: i.addresses.restakeManager,
                abi: e7.E.RestakeManager,
                functionName: "calculateTVLs",
                chainId: i.chain.id,
              },
              {
                address: tb.TV.ezETH.supportedChains[i.chain.id].address,
                abi: nZ.Wo,
                functionName: "totalSupply",
                chainId: i.chain.id,
              },
            ],
            allowFailure: !1,
          }),
          u = (0, tR.BB)(a),
          o = (0, ts.f)(n);
        u ||
          (o = await (0, tr.L)(tt.g, {
            address: i.addresses.renzoOracle,
            abi: e7.E.RenzoOracle,
            functionName: "lookupTokenValue",
            args: [a, o],
            chainId: i.chain.id,
          }));
        let p = await (0, tr.L)(tt.g, {
          address: i.addresses.renzoOracle,
          abi: e7.E.RenzoOracle,
          functionName: "calculateMintAmount",
          chainId: i.chain.id,
          args: [r[2], o, s],
        });
        return (0, tu.d)(p);
      }
      function sE(e, t) {
        let n = sw(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => sh({ ...e, queryKey: n }),
          ...t,
        });
      }
      function sv() {
        let e = (0, tG._)([
          "\n  query withdrawRequestsQuery($withdrawer: String!) {\n    withdrawRequests(\n      first: 1000\n      orderBy: createdAt\n      orderDirection: desc\n      where: { withdrawer: $withdrawer }\n    ) {\n      id\n      withdrawIndex\n      claimed\n      createdAt\n      amountToRedeem\n      amountEzETHToBurn\n      withdrawalAssetOut\n      queued\n      claimableAt\n    }\n  }\n",
        ]);
        return (
          (sv = function () {
            return e;
          }),
          e
        );
      }
      let sx = (0, tZ.Ps)(sv()),
        sk = eN.z
          .object({
            withdrawRequests: eN.z.array(
              eN.z.object({
                id: eN.z.string(),
                withdrawIndex: eN.z.number(),
                claimed: eN.z.boolean(),
                createdAt: eN.z.string(),
                amountToRedeem: eN.z.string(),
                amountEzETHToBurn: eN.z.string(),
                withdrawalAssetOut: eN.z.string(),
                queued: eN.z.boolean(),
                claimableAt: eN.z.string(),
              })
            ),
          })
          .transform((e) =>
            e.withdrawRequests
              .map((e) => ({
                ...e,
                id: Number(e.id),
                withdrawalAssetOut:
                  tR.xb.toLowerCase() === e.withdrawalAssetOut
                    ? tR.r_
                    : e.withdrawalAssetOut,
                amountToRedeem: (0, tu.d)(BigInt(e.amountToRedeem)),
                amountEzETHToBurn: (0, tu.d)(BigInt(e.amountEzETHToBurn)),
                claimableAt: (0, tu.d)(BigInt(e.claimableAt)),
                createdAt: Number(e.createdAt),
              }))
              .sort((e, t) => t.createdAt - e.createdAt)
          ),
        sM = ["withdraw", "userClaimsQuery"];
      function sz(e) {
        return [{ entity: sM, ...e }];
      }
      async function sF(e) {
        let {
            queryKey: [{ chainId: t, userAddress: n }],
          } = e,
          a = tA.m3[t],
          i = new tZ.g6(a.subgraphs.renzo),
          [r, s, u] = await Promise.all([
            i.request(sx, { withdrawer: n.toLowerCase() }),
            (0, tr.L)(tt.g, {
              address: a.addresses.withdrawQueue,
              abi: e7.E.WithdrawQueue,
              functionName: "ethWithdrawQueue",
              chainId: t,
            }),
            (0, tr.L)(tt.g, {
              address: a.addresses.withdrawQueue,
              abi: e7.E.WithdrawQueue,
              functionName: "erc20WithdrawQueue",
              args: [tb.TV.stETH.supportedChains[t].address],
              chainId: t,
            }),
          ]),
          o = sk.parse(r),
          [p, l] = s,
          [y, d] = u;
        return {
          withdrawRequests: o,
          ethWithdrawQueue: {
            queueToFill: (0, tu.d)(p),
            queueFilled: (0, tu.d)(l),
          },
          stETHWithdrawQueue: {
            queueToFill: (0, tu.d)(y),
            queueFilled: (0, tu.d)(d),
          },
        };
      }
      function sC(e, t) {
        let n = sz(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => sF({ ...e, queryKey: n }),
          ...t,
        });
      }
      let sB = ["withdraw", "getAvailableToWithdraw"];
      function sD(e) {
        return [{ entity: sB, ...e }];
      }
      function sI(e) {
        return [{ entity: sB, ...e }];
      }
      async function sR(e) {
        let {
            queryKey: [{ chainId: t, redeemTokenAddresses: n }],
          } = e,
          a = tA.m3[t],
          i = await (0, te.J)(tt.g, {
            contracts: n.map((e) => ({
              address: a.addresses.withdrawQueue,
              abi: e7.E.WithdrawQueue,
              functionName: "getAvailableToWithdraw",
              chainId: a.chain.id,
              args: [(0, tR.BB)(e) ? tR.xb : e],
            })),
            allowFailure: !1,
          });
        return n
          .map((e, t) => ({ redeemTokenAddress: e, availableAmount: i[t] }))
          .reduce((e, t) => {
            let { redeemTokenAddress: n, availableAmount: a } = t;
            return (e[n] = (0, tu.d)(a)), e;
          }, {});
      }
      function sH(e, t) {
        let n = sI(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => sR({ ...e, queryKey: n }),
          ...t,
        });
      }
      let sS = ["withdraw", "getCoolDownPeriod"];
      function sq(e) {
        return [{ entity: sS, ...e }];
      }
      async function sV(e) {
        let {
            queryKey: [{ chainId: t }],
          } = e,
          n = tA.m3[t];
        return Number(
          await (0, tr.L)(tt.g, {
            address: n.addresses.withdrawQueue,
            abi: e7.E.WithdrawQueue,
            functionName: "coolDownPeriod",
            chainId: n.chain.id,
          })
        );
      }
      function sP(e, t) {
        let n = sq(e);
        return (0, eW.useQuery)({
          queryKey: n,
          queryFn: (e) => sV({ ...e, queryKey: n }),
          ...t,
        });
      }
      let sO = {
        eigenLayer: f,
        points: _,
        stats: eC,
        defi: m,
        restake: eo,
        rez: ey,
        rezVesting: eA,
        pzETH: et,
        ezRVault: k,
        stake: ek,
        withdraw: eL,
        prices: Y,
        tokens: eH,
        onchain: q,
        connext: y,
        avs: i,
        operator: O,
        balancer: s,
        subgraph: eD,
        user: eq,
        blog: o,
        ezsol: C,
        enzyme: g,
        solana: ew,
      };
    },
    44571: function (e, t, n) {
      n.d(t, {
        d: function () {
          return o;
        },
      });
      var a = n(71490),
        i = n(93486),
        r = n(54288),
        s = n(21517),
        u = n(387);
      let o = {
        JTO: {
          token: {
            address: "jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL",
            symbol: "JTO",
            decimals: i.Ey,
            chainId: s.Ui,
            chainType: r.J.Solana,
            icon: { auto: a.default },
          },
          coinGeckoId: "jito-governance-token",
        },
        REN: {
          token: {
            address: "0xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            symbol: "REN",
            decimals: i.Ey,
            chainId: s.p5.mainnet.id,
            chainType: r.J.EVM,
            icon: u.TV.REN.icon,
          },
          coinGeckoId: "renzo",
        },
      };
    },
    90050: function (e, t, n) {
      n.d(t, {
        VD: function () {
          return nC;
        },
        C1: function () {
          return nB;
        },
        lj: function () {
          return nF;
        },
      });
      var a = n(57437),
        i = n(54288),
        r = n(21517),
        s = n(65025),
        u = n(59772);
      let o = u.z.object({
        kaminoApy: u.z.object({
          vault: u.z.object({ apy7d: u.z.string().transform(parseFloat) }),
        }),
        totalValueLocked: u.z.string().transform(parseFloat),
      });
      async function p(e) {
        let { chainId: t, strategyId: n } = e,
          a = (r.p5.solanaMainnet.id, "mainnet-beta"),
          i = await fetch(
            "https://api.kamino.finance/strategies/"
              .concat(n, "/metrics?env=")
              .concat(a)
          ),
          s = await i.json();
        return o.parse(s);
      }
      async function l(e) {
        let { chainId: t, strategyId: n } = e;
        return {
          usd: (await p({ chainId: t, strategyId: n })).totalValueLocked,
        };
      }
      var y = n(44571);
      function d(e) {
        let { tokenEmissionsPerDay: t, tokenPrice: n, tvlUSD: a } = e;
        return (365 * t * n) / a;
      }
      async function c(e) {
        var t, n;
        let { strategyId: a, chainId: i, prices: r } = e,
          s = await p({ strategyId: a, chainId: i }),
          u = s.totalValueLocked,
          o = y.d.JTO.token,
          l = d({
            tokenEmissionsPerDay: 178.57142857,
            tokenPrice: null !== (t = r[o.symbol]) && void 0 !== t ? t : 0,
            tvlUSD: u,
          }),
          c = y.d.REN.token,
          m = d({
            tokenEmissionsPerDay: 5714.14285714,
            tokenPrice: null !== (n = r[c.symbol]) && void 0 !== n ? n : 0,
            tvlUSD: u,
          }),
          A = s.kaminoApy.vault.apy7d;
        return {
          base: { apy: A, timeframe: "7d" },
          breakdown: [
            { tokenEmissionsPerDay: 178.57142857, tokenRewarder: o, apy: l },
            { tokenEmissionsPerDay: 5714.14285714, tokenRewarder: c, apy: m },
          ],
          total: l + m + A,
        };
      }
      var m = n(61446);
      function A(e) {
        return {
          icon: { auto: "/logos/mellow.svg" },
          multiplier: e,
          alt: "mellow points",
        };
      }
      function b(e) {
        return {
          icon: { auto: m.default },
          multiplier: e,
          alt: "symbiotic points",
        };
      }
      var f = n(65481),
        T = n(37430),
        g = n(60792),
        w = n(87064),
        h = n(3419),
        E = n(21528),
        v = n(35340),
        x = n(63968),
        k = n(60797),
        M = n(29426),
        z = n(90807),
        F = n(93752),
        C = n(72811),
        B = n(96427),
        D = n(67906),
        I = n(51994),
        R = n(48929),
        H = n(88157),
        S = n(48600),
        q = n(8370),
        V = n(67437),
        P = n(29734),
        O = n(88100),
        U = n(46314),
        K = n(89887),
        L = n(34049),
        Q = n(89616),
        W = n(62772),
        N = n(2492),
        _ = n(19374),
        j = n(95737),
        X = n(73608),
        J = n(32161),
        Y = n(41464),
        G = n(54648),
        Z = n(61696),
        $ = n(61325),
        ee = n(6349),
        et = n(16885),
        en = n(26255),
        ea = n(16612),
        ei = n(58243),
        er = n(55494),
        es = n(28654),
        eu = n(48978),
        eo = n(19329),
        ep = n(62991),
        el = n(93703),
        ey = n(93834),
        ed = n(32894),
        ec = n(93369),
        em = n(45471),
        eA = n(38193),
        eb = n(85679),
        ef = n(6529),
        eT = n(31074),
        eg = n(50916),
        ew = n(65073),
        eh = n(13592),
        eE = n(88923),
        ev = n(16936),
        ex = n(49773),
        ek = n(79406),
        eM = n(27150),
        ez = n(4106),
        eF = n(28027),
        eC = n(10484),
        eB = n(11438),
        eD = n(6110),
        eI = n(23912),
        eR = n(95375),
        eH = n(86360),
        eS = n(50419),
        eq = n(95113),
        eV = n(9925),
        eP = n(62214),
        eO = n(69849),
        eU = n(96232),
        eK = n(11044),
        eL = n(45382),
        eQ = n(45784),
        eW = n(2189),
        eN = n(86794),
        e_ = n(5942),
        ej = n(9007),
        eX = n(87682),
        eJ = n(31922),
        eY = n(56499),
        eG = n(58569);
      let eZ = {
        balancer: {
          id: "balancer",
          logo: { light: E.default, dark: h.default },
        },
        beefy: { id: "beefy", logo: { light: x.default, dark: v.default } },
        curve: { id: "curve", logo: { auto: B.default } },
        pendle: { id: "pendle", logo: { light: ek.default, dark: ex.default } },
        uniswap: {
          id: "uniswap",
          logo: { light: eN.default, dark: eW.default },
        },
        zircuit: {
          id: "zircuit",
          logo: { light: eY.default, dark: eJ.default },
        },
        gearbox: { id: "gearbox", logo: { auto: Q.default } },
        prisma: { id: "prisma", logo: { auto: ez.default } },
        morpho: { id: "morpho", logo: { auto: eA.default } },
        sturdy: { id: "sturdy", logo: { light: eq.default, dark: eS.default } },
        camelot: { id: "camelot", logo: { auto: M.default } },
        kimExchange: { id: "kimExchange", logo: { auto: ea.default } },
        pancakeSwap: { id: "pancakeSwap", logo: { auto: eh.default } },
        thruster: { id: "thruster", logo: { auto: eQ.default } },
        nile: { id: "nile", logo: { auto: eb.default } },
        ion: { id: "ion", logo: { auto: X.default } },
        ionic: { id: "ionic", logo: { light: Y.default, dark: J.default } },
        juice: { id: "juice", logo: { auto: $.default } },
        hyperlock: { id: "hyperlock", logo: { auto: W.default } },
        init: { id: "init", logo: { auto: j.default } },
        particle: {
          id: "particle",
          logo: { light: ev.default, dark: eE.default },
        },
        mendi: { id: "mendi", logo: { auto: ed.default } },
        zerolend: { id: "zerolend", logo: { auto: eX.default } },
        ironclad: { id: "ironclad", logo: { auto: G.default } },
        aura: { id: "aura", logo: { auto: w.default } },
        blackwing: { id: "blackwing", logo: { auto: k.default } },
        zklink: { id: "zklink", logo: { auto: eG.default } },
        silo: { id: "silo", logo: { auto: eR.default } },
        pac: { id: "pac", logo: { auto: ew.default } },
        aerodrome: { id: "aerodrome", logo: { auto: T.default } },
        layerbank: { id: "layerbank", logo: { auto: eu.default } },
        orbit: { id: "orbit", logo: { auto: eT.default } },
        kinza: { id: "kinza", logo: { light: er.default, dark: ei.default } },
        molend: { id: "molend", logo: { auto: em.default } },
        cyber: { id: "cyber", logo: { auto: D.default } },
        synFutures: { id: "synFutures", logo: { auto: eP.default } },
        swellL2: { id: "swellL2", logo: { auto: eV.default } },
        dtx: { id: "dtx", logo: { auto: H.default } },
        l3x: { id: "l3x", logo: { auto: es.default } },
        karak: { id: "karak", logo: { auto: en.default } },
        airpuff: { id: "airpuff", logo: { auto: g.default } },
        notional: { id: "notional", logo: { auto: ef.default } },
        fx: { id: "fx", logo: { auto: L.default } },
        dolomite: {
          id: "dolomite",
          logo: { light: R.default, dark: I.default },
        },
        contango: { id: "contango", logo: { auto: C.default } },
        term: { id: "term", logo: { auto: eL.default } },
        lista: { id: "lista", logo: { auto: eo.default } },
        qidao: { id: "qidao", logo: { dark: eF.default, light: eC.default } },
        splice: { id: "splice", logo: { auto: eH.default } },
        velodrome: { id: "velodrome", logo: { auto: e_.default } },
        ramses: { id: "ramses", logo: { auto: eI.default } },
        loop: { id: "loop", logo: { auto: ep.default } },
        lynex: { id: "lynex", logo: { dark: el.default, light: ey.default } },
        infinex: { id: "infinex", logo: { dark: N.default, light: _.default } },
        extrafi: { id: "extrafi", logo: { auto: V.default } },
        fuel: { id: "fuel", logo: { auto: K.default } },
        llamalend: { id: "llamalend", logo: { auto: B.default } },
        teahouse: {
          id: "teahouse",
          logo: { dark: eU.default, light: eK.default },
        },
        compound: { id: "compound", logo: { auto: F.default } },
        ra: { id: "ra", logo: { auto: eB.default } },
        synonym: { id: "synonym", logo: { auto: eO.default } },
        venus: { id: "venus", logo: { auto: ej.default } },
        radiant: { id: "radiant", logo: { auto: eD.default } },
        mitosis: { id: "mitosis", logo: { auto: ec.default } },
        euler: { id: "euler", logo: { auto: q.default } },
        jones: { id: "jones", logo: { auto: Z.default } },
        form: { id: "form", logo: { light: O.default, dark: P.default } },
        frax: { id: "frax", logo: { auto: U.default } },
        enzyme: { id: "enzyme", logo: { auto: S.default } },
        aave: { id: "aave", logo: { auto: f.default } },
        primex: { id: "primex", logo: { auto: eM.default } },
        kamino: { id: "kamino", logo: { auto: et.default } },
        jupiter: { id: "jupiter", logo: { auto: ee.default } },
        cian: { id: "cian", logo: { auto: z.default } },
        orca: { id: "orca", logo: { auto: eg.default } },
      };
      var e$ = n(72130),
        e0 = n(21400),
        e2 = n(34239),
        e5 = n(51889),
        e6 = n(95427),
        e1 = n(54543),
        e8 = n(93594),
        e3 = n(80179),
        e4 = n(26425),
        e9 = n(25820),
        e7 = n(71490),
        te = n(62067),
        tt = n(172),
        tn = n(67212),
        ta = n(19630),
        ti = n(67606),
        tr = n(34171),
        ts = n(99309),
        tu = n(58052),
        to = n(76165),
        tp = n(63962),
        tl = n(74956),
        ty = n(51592),
        td = n(99644),
        tc = n(387);
      let tm = {
        "points-blast": {
          icon: { auto: e0.default },
          type: "points",
          tooltip: "Pool is receiving Blast Points",
        },
        "points-gold-blast": {
          icon: { auto: e$.default },
          type: "points",
          tooltip:
            "dApps get a discretionary amount of Gold that is distributed among LPs on Hyperlock",
        },
        "hyper-tokens-blast": {
          icon: { auto: e1.default },
          type: "tokens",
          tooltip:
            "Thruster LPs who deposit into Hyperlock get boosted emission rewards and extra HYPER tokens on top of the trading fees they earn.",
        },
        "init-points-ezeth-blast": {
          icon: { auto: e4.default },
          type: "points",
          tooltip: (0, a.jsxs)("div", {
            children: [
              "Users can:",
              (0, a.jsx)("div", { children: "1) Lend ezETH or" }),
              (0, a.jsx)("div", {
                children:
                  "2) Use ezETH Looping Hook on INIT Capital on Blast to get INIT points",
              }),
            ],
          }),
        },
        "linea-points": {
          icon: { auto: tn.default },
          type: "points",
          tooltip: "Earn LXP-L points for providing liquidity for this pool",
        },
        "turtle-boosted-points": {
          icon: { auto: to.default },
          type: "points",
          tooltip:
            "Boosted Turtle Club members earn boosted turtle points for providing liquidity for this pool",
        },
        "mendi-points-linea": {
          icon: { auto: ti.default },
          type: "points",
          tooltip:
            "Earn MLP-L for providing liquidity to Mendi Finance, a non-inflating points system that guarantees users an allocation from Mendi’s share of the potential future Linea airdrop. Distribution happens proportionally among suppliers to Mendi, at the end of each Linea Surge Volt.",
        },
        "karak-points": {
          icon: { auto: te.default },
          type: "points",
          tooltip: "Earn 1x Karak XP",
        },
        "term-points": {
          icon: { auto: tu.default },
          type: "points",
          tooltip:
            "Users earn points for participating in auctions and lending",
        },
        "zklink-points": {
          icon: { auto: td.default },
          type: "points",
          tooltip:
            "Campaign participants earn Nova Points by interacting with zkLink Nova’s Layer 3 platform by bridging assets, engaging with zkLink Nova ecosystem DApps, referring friends, and contributing to the network’s TVL.",
        },
        "swell-l2-points": {
          icon: eZ.swellL2.logo,
          type: "points",
          tooltip: "Represent share of Swell L2 ecosystem airdrops",
        },
        "swell-black-pearls-points": {
          icon: { auto: ts.default },
          type: "points",
          tooltip:
            "Used to claim SWELL at Wavedrops. First Wavedrop will be snapshotted on Oct 8th, with subsequent wavedrops every 10 weeks",
        },
        "ion-ezeth-tokens": {
          icon: { auto: e9.default },
          type: "tokens",
          tooltip: "Users receive $ION emissions for supplying ezEth",
        },
        "layerbank-points": {
          icon: { auto: tt.default },
          type: "points",
          tooltip: "Supplying and Borrowing will earn L.Points",
        },
        "zircuit-points": {
          icon: { light: ty.default, dark: tl.default },
          type: "points",
          tooltip:
            "Stakers earn native staking yield + Zircuit points + Airdrops while helping to bootstrap liquidity on Zircuit Mainnet.",
        },
        "frax-points": {
          icon: { auto: e6.default },
          type: "points",
          tooltip:
            "Earn boosted FXTL points while providing liquidity for this pool",
        },
        "ra-points": {
          icon: { auto: tr.default },
          type: "points",
          tooltip: "Ra points will be distributed every epoch for this pool",
        },
        "zerolend-points": {
          icon: { auto: tp.default },
          type: "points",
          tooltip:
            "Zero Gravity is ZeroLend's airdrop points system where users attain $ZERO by collecting Zero Gravity points",
        },
        "teahouse-points": {
          icon: eZ.teahouse.logo,
          type: "points",
          tooltip:
            "Users can earn Tea Points based on their level of engagement with Teahouse DeFi vaults. The total Tea Points earned by users will determine the amount of Teahouse’s governance tokens they will receive in the future",
        },
        "loop-points": {
          icon: { auto: ta.default },
          type: "points",
          tooltip:
            "7% Airdrop allocation for users that provide liquidity to Loop",
        },
        "infinex-ezeth-points": {
          icon: { light: e3.default, dark: e8.default },
          type: "points",
          tooltip:
            "By holding at least $50 worth of $EZETH, users are eligible to participate in Bullrun beta with a combined weekly prize pool valued at $100,000+",
        },
        "form-points": {
          icon: { light: e5.default, dark: e2.default },
          type: "points",
          tooltip: "Pre-deposit campaign for the Form L2",
        },
        "primex-points": {
          icon: eZ.primex.logo,
          type: "points",
          tooltip: "Earn Primex Points",
        },
        "cian-points": {
          icon: eZ.cian.logo,
          type: "points",
          tooltip: "Users earn 50 pts per Vault per Day",
        },
        "rez-tokens": {
          icon: tc.TV.REN.icon,
          type: "tokens",
          tooltip: "Earn $REN for providing liquidity for this pool",
        },
        "jto-tokens": {
          icon: { auto: e7.default },
          type: "tokens",
          tooltip: "Earn $JTO for providing liquidity for this pool",
        },
      };
      var tA = n(95872),
        tb = n(42467),
        tf = n(85053),
        tT = n(12075);
      async function tg(e) {
        let { poolAddress: t, chainId: n } = e,
          a = await (0, tb.L)(tT._, {
            address: t,
            functionName: "totalSupply",
            abi: tA.E.erc20,
            chainId: n,
          });
        return { ezETH: Number((0, tf.d)(a)) };
      }
      var tw = n(48646),
        th = n(93786);
      function tE() {
        let e = (0, tw._)([
          "\n  query getPoolTVL($chainId: Int!, $poolId: String!) {\n    pool(chainId: $chainId, id: $poolId) {\n      tvl\n    }\n  }\n",
        ]);
        return (
          (tE = function () {
            return e;
          }),
          e
        );
      }
      let tv = new th.g6("https://data.aura.finance/graphql", { fetch }),
        tx = (0, th.Ps)(tE()),
        tk = u.z
          .object({ pool: u.z.object({ tvl: u.z.number() }) })
          .transform((e) => e.pool);
      async function tM(e) {
        let { chainId: t, poolId: n } = e,
          a = await tv.request(tx, { chainId: t, poolId: n });
        return { usd: tk.parse(a).tvl };
      }
      let tz = [
          {
            inputs: [
              { internalType: "bytes32", name: "poolId", type: "bytes32" },
            ],
            name: "getPoolTokens",
            outputs: [
              {
                internalType: "contract IERC20[]",
                name: "tokens",
                type: "address[]",
              },
              {
                internalType: "uint256[]",
                name: "balances",
                type: "uint256[]",
              },
              {
                internalType: "uint256",
                name: "lastChangeBlock",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        tF = "0xBA12222222228d8Ba445958a75a0704d566BF2C8";
      async function tC(e) {
        let {
            poolId: t,
            ezETHAddress: n,
            weETHAddress: a,
            rswETHAddress: i,
            chainId: r,
          } = e,
          [s, u] = await (0, tb.L)(tT._, {
            address: tF,
            functionName: "getPoolTokens",
            args: [t],
            abi: tz,
            chainId: r,
          }),
          o = s.map((e) => e.toLowerCase()),
          p = n.toLowerCase(),
          l = a.toLowerCase(),
          y = i.toLowerCase(),
          d = u[o.indexOf(p)],
          c = u[o.indexOf(l)],
          m = u[o.indexOf(y)];
        return {
          ezETH: Number((0, tf.d)(d)),
          weETH: Number((0, tf.d)(c)),
          rswETH: Number((0, tf.d)(m)),
        };
      }
      async function tB(e) {
        let { poolId: t, ezETHAddress: n, wstETHAddress: a, chainId: i } = e,
          [r, s] = await (0, tb.L)(tT._, {
            address: tF,
            functionName: "getPoolTokens",
            args: [t],
            abi: tz,
            chainId: i,
          }),
          u = r.map((e) => e.toLowerCase()),
          o = n.toLowerCase(),
          p = a.toLowerCase(),
          l = s[u.indexOf(o)],
          y = s[u.indexOf(p)];
        return { ezETH: Number((0, tf.d)(l)), wstETH: Number((0, tf.d)(y)) };
      }
      async function tD(e) {
        let { poolId: t, ezETHAddress: n, wETHAddress: a, chainId: i } = e,
          [r, s] = await (0, tb.L)(tT._, {
            address: tF,
            functionName: "getPoolTokens",
            args: [t],
            abi: tz,
            chainId: i,
          }),
          u = r.map((e) => e.toLowerCase()),
          o = n.toLowerCase(),
          p = a.toLowerCase(),
          l = s[u.indexOf(o)],
          y = s[u.indexOf(p)];
        return { ezETH: Number((0, tf.d)(l)), eth: Number((0, tf.d)(y)) };
      }
      let tI = u.z.record(u.z.record(u.z.string(), u.z.number()));
      async function tR() {
        let e = await fetch("https://api.beefy.finance/tvl"),
          t = await e.json();
        return {
          usd: (function (e) {
            let t = 0;
            for (let n in e)
              if (e.hasOwnProperty(n)) {
                let a = e[n];
                for (let e in a)
                  a.hasOwnProperty(e) && e.includes("ezeth") && (t += a[e]);
              }
            return t;
          })(tI.parse(t)),
        };
      }
      async function tH(e, t) {
        let n = await fetch("https://api.beefy.finance/tvl"),
          a = await n.json(),
          i = tI.parse(a)[e];
        return { usd: (i ? i[t] : 0) || 0 };
      }
      var tS = n(56872);
      async function tq(e) {
        let { poolAddresses: t, token: n, chainId: a } = e,
          i = (
            await (0, tS.J)(tT._, {
              contracts: t.map((e) => ({
                address: n,
                functionName: "balanceOf",
                abi: tA.E.erc20,
                chainId: a,
                args: [e],
              })),
              allowFailure: !1,
            })
          ).reduce((e, t) => e + t, 0n);
        return { ezETH: Number((0, tf.d)(i)) };
      }
      function tV() {
        let e = (0, tw._)([
          "\n  query ($symbol: String!) {\n    openInterests(filter: { instrument: { base: { symbol: { eq: $symbol } } } }) {\n      groupedAggregates(groupBy: CHAIN_ID) {\n        keys\n        sum {\n          oi\n          oiUsd\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (tV = function () {
            return e;
          }),
          e
        );
      }
      let tP = (0, th.Ps)(tV()),
        tO = u.z.object({
          openInterests: u.z.object({
            groupedAggregates: u.z.array(
              u.z.object({
                keys: u.z.array(u.z.string()),
                sum: u.z.object({ oi: u.z.string(), oiUsd: u.z.string() }),
              })
            ),
          }),
        }),
        tU = new th.g6("https://api.contango.xyz/graphql", { fetch });
      async function tK(e) {
        let { symbol: t, chainId: n } = e;
        try {
          var a;
          let e = await tU.request(tP, { symbol: t }),
            i = tO.parse(e).openInterests.groupedAggregates;
          return {
            usd:
              (null === (a = i.find((e) => e.keys.includes(String(n)))) ||
              void 0 === a
                ? void 0
                : a.sum.oiUsd) || 0,
          };
        } catch (e) {
          return { usd: 0 };
        }
      }
      function tL() {
        let e = (0, tw._)([
          "\n  query VaultPerformanceLatest(\n    $currency: CurrencyOrAddress!\n    $network: Deployment!\n    $vault: Address!\n  ) {\n    vaultPerformanceLatest(currency: $currency, network: $network, vault: $vault) {\n      grossAssetValue\n      netAssetValue\n    }\n  }\n",
        ]);
        return (
          (tL = function () {
            return e;
          }),
          e
        );
      }
      let tQ = new th.g6("https://renzoezeth.enzyme.community/api/graphql", {
          fetch,
        }),
        tW = (0, th.Ps)(tL()),
        tN = u.z
          .object({
            vaultPerformanceLatest: u.z.object({
              grossAssetValue: u.z.number(),
              netAssetValue: u.z.number(),
            }),
          })
          .transform((e) => e.vaultPerformanceLatest);
      async function t_(e) {
        let { chainId: t, vaultAddress: n } = e,
          a = await tQ.request(tW, {
            currency: "usd",
            network: t === r.p5.mainnet.id ? "ethereum" : null,
            vault: n,
          });
        return { usd: tN.parse(a).grossAssetValue };
      }
      async function tj(e) {
        let {
            poolAddress: t,
            ezEIGENAddress: n,
            EIGENAddress: a,
            chainId: i,
          } = e,
          [r, s] = await (0, tS.J)(tT._, {
            contracts: [
              {
                address: n,
                abi: tA.E.EzRVault,
                functionName: "balanceOf",
                args: [t],
                chainId: i,
              },
              {
                address: a,
                abi: tA.E.Eigen,
                functionName: "balanceOf",
                args: [t],
                chainId: i,
              },
            ],
            allowFailure: !1,
          });
        return { ezEIGEN: Number((0, tf.d)(r)), EIGEN: Number((0, tf.d)(s)) };
      }
      async function tX(e) {
        let { poolAddress: t, ezETHAddress: n, chainId: a } = e,
          i = await (0, tb.L)(tT._, {
            address: n,
            functionName: "balanceOf",
            args: [t],
            abi: tA.E.erc20,
            chainId: a,
          });
        return { ezETH: Number((0, tf.d)(i)) };
      }
      async function tJ(e) {
        let { poolAddresses: t, ezETHAddress: n, chainId: a } = e,
          i = (
            await (0, tS.J)(tT._, {
              contracts: t.map((e) => ({
                address: n,
                functionName: "balanceOf",
                args: [e],
                abi: tA.E.erc20,
                chainId: a,
              })),
              allowFailure: !1,
            })
          ).reduce((e, t) => e + t, 0n);
        return { ezETH: Number((0, tf.d)(i)) };
      }
      var tY = n(78057);
      function tG(e) {
        switch (e) {
          case r.p5.mainnet.id:
            return {
              apiPrefix: "https://charts-server.fly.dev/api",
              blockDelay: 30,
            };
          case r.p5.arbitrum.id:
            return {
              apiPrefix: "https://arbitrum.gearbox.foundation/api",
              blockDelay: 500,
            };
          case r.p5.optimism.id:
            return {
              apiPrefix: "https://optimism.gearbox.foundation/api",
              blockDelay: 100,
            };
          default:
            return null;
        }
      }
      let tZ = u.z.object({
        result: u.z.array(
          u.z.object({
            borrower: u.z.string(),
            effective_balance: u.z.number(),
          })
        ),
      });
      async function t$(e) {
        var t;
        let { chainId: n, ezETHAddress: a } = e,
          i = await (0, tY.Q)(tT._, { chainId: n }),
          r = tG(n),
          s = await fetch(
            ""
              .concat(null == r ? void 0 : r.apiPrefix, "/getBalanceAt?block=")
              .concat(
                Number(i.number) -
                  (null !== (t = null == r ? void 0 : r.blockDelay) &&
                  void 0 !== t
                    ? t
                    : 0),
                "&asset="
              )
              .concat(a)
          ),
          u = await s.json();
        return {
          ezETH: tZ
            .parse(u)
            .result.reduce((e, t) => e + t.effective_balance, 0),
        };
      }
      async function t0(e) {
        var t;
        let { chainId: n, ezETHAddress: a } = e,
          i = await (0, tY.Q)(tT._, { chainId: n }),
          r = tG(n),
          s = await fetch(
            ""
              .concat(null == r ? void 0 : r.apiPrefix, "/getBalanceAt?block=")
              .concat(
                Number(i.number) -
                  (null !== (t = null == r ? void 0 : r.blockDelay) &&
                  void 0 !== t
                    ? t
                    : 0),
                "&asset="
              )
              .concat(a)
          ),
          u = await s.json();
        return {
          pzETH: tZ
            .parse(u)
            .result.reduce((e, t) => e + t.effective_balance, 0),
        };
      }
      async function t2(e) {
        let { poolAddress: t, chainId: n } = e,
          a = n === r.p5.blast.id ? "blast-mainnet" : null,
          i = await fetch(
            "https://api.hyperlock.finance/v1/".concat(a, "/points/tvl"),
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ addresses: [t] }),
            }
          ),
          s = await i.json();
        return {
          ezETH: Number((0, tf.d)(BigInt(s[t].token0Amount))),
          eth: Number((0, tf.d)(BigInt(s[t].token1Amount))),
        };
      }
      let t5 = u.z.object({
        result: u.z.object({
          data: u.z.object({
            totalUserBalances: u.z.array(
              u.z.object({
                name: u.z.string(),
                balance: u.z.string(),
                symbol: u.z.string(),
                balanceUsd: u.z.string(),
                chain: u.z.string(),
              })
            ),
          }),
        }),
      });
      async function t6() {
        let e = await fetch("https://api.app.infinex.xyz/getPlatformStats"),
          t = await e.json();
        return {
          usd: t5
            .parse(t)
            .result.data.totalUserBalances.filter((e) => "ezETH" === e.symbol)
            .reduce((e, t) => {
              let { balanceUsd: n } = t;
              return e + Number(n);
            }, 0),
        };
      }
      let t1 = [
        {
          inputs: [
            { internalType: "address", name: "_factory", type: "address" },
            { internalType: "address", name: "_pool", type: "address" },
          ],
          name: "TVL",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
      ];
      async function t8(e) {
        let {
            viewerAddress: t,
            factoryAddress: n,
            poolAddress: a,
            chainId: i,
          } = e,
          r = await (0, tb.L)(tT._, {
            address: t,
            functionName: "TVL",
            abi: t1,
            chainId: i,
            args: [n, a],
          });
        return { usd: Number((0, tf.d)(r)) };
      }
      var t3 = n(75859),
        t4 = n.n(t3);
      let t9 = [
        {
          inputs: [],
          name: "getUnderlyingAmounts",
          outputs: [
            {
              internalType: "uint256",
              name: "amount0Current",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amount1Current",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
      async function t7(e) {
        let [t, n] = await (0, tb.L)(tT._, {
          address: "0xa674744253adD4F9b8CFfBaAb7D675A34D8C11cf",
          functionName: "getUnderlyingAmounts",
          abi: t9,
          chainId: e,
        });
        return { ezETH: Number((0, tf.d)(t)), eth: Number((0, tf.d)(n)) };
      }
      async function ne(e) {
        let { chainId: t } = e,
          n = tJ({
            poolAddresses: [
              "0x741011f52b7499ca951f8b8ee547dd3cdd813fda",
              "0xc81A630806d1aF3fd7509187E1AfC501Fd46e818",
            ],
            ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
            chainId: t,
          }),
          a = t7(t),
          i = await Promise.all([n, a]);
        return {
          ezETH: i.length > 0 ? t4()(i, "ezETH") : 0,
          eth: i.length > 0 ? t4()(i, "eth") : 0,
        };
      }
      let nt = u.z.object({
        data: u.z.array(u.z.object({ tvlUsdc: u.z.string() })),
      });
      async function nn(e) {
        let { ezSOLAddress: t, chainId: n } = e,
          a = (r.p5.solanaMainnet.id, "mainnet-production"),
          i = await fetch(
            "https://stats-api."
              .concat(a, ".orca.so/api/whirlpools?token=")
              .concat(t)
          ),
          s = await i.json();
        return {
          usd: nt.parse(s).data.reduce((e, t) => e + parseFloat(t.tvlUsdc), 0),
        };
      }
      async function na(e) {
        let { ezSOLAddress: t, chainId: n } = e,
          [a] = await Promise.all([nn({ ezSOLAddress: t, chainId: n })]);
        return { usd: [a].reduce((e, t) => e + t.usd, 0) };
      }
      async function ni(e) {
        let { poolAddress: t, chainId: n } = e,
          a = await (0, tb.L)(tT._, {
            address: t,
            functionName: "deposits",
            args: ["0x2416092f143378750bb29b79eD961ab195CcEea5"],
            abi: [
              {
                inputs: [
                  { internalType: "address", name: "token", type: "address" },
                ],
                name: "deposits",
                outputs: [
                  { internalType: "uint256", name: "", type: "uint256" },
                ],
                stateMutability: "view",
                type: "function",
              },
            ],
            chainId: n,
          });
        return { ezETH: Number((0, tf.d)(a)) };
      }
      async function nr(e) {
        let { miezETHContracts: t } = e;
        return {
          ezETH: (
            await (0, tS.J)(tT._, {
              contracts: t.map((e) => {
                let { address: t, chainId: n, ezETHAddress: a } = e;
                return {
                  address: a,
                  abi: tA.E.erc20,
                  functionName: "balanceOf",
                  args: [t],
                  chainId: n,
                };
              }),
              allowFailure: !1,
            })
          ).reduce((e, t) => e + Number((0, tf.d)(t)), 0),
        };
      }
      async function ns(e) {
        let { address: t } = e,
          n = await fetch("https://points.notional.finance/".concat(t, "/tvl")),
          a = await n.json();
        return { usd: (null == a ? void 0 : a.tvlUSD) || 0 };
      }
      async function nu() {
        let e = await fetch(
          "https://erc20-stats-2-production.up.railway.app/",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              query:
                '{\n        tokenPairStat(\n          id: "0x2416092f143378750bb29b79ed961ab195cceea50x4300000000000000000000000000000000000004"\n        ) {\n          id\n          availableDenominatedAmount\n          borrowedDenominatedAmount\n        }\n      }',
            }),
          }
        );
        return {
          usd: Number(
            BigInt(
              (await e.json()).data.tokenPairStat.availableDenominatedAmount
            ) / BigInt(1e18)
          ),
        };
      }
      async function no(e) {
        var t;
        let { address: n, chainId: a } = e,
          i = await fetch(
            "https://api-v2.pendle.finance/core/v1/"
              .concat(a, "/markets/")
              .concat(n)
          ),
          r = await i.json();
        return {
          usd:
            (null == r
              ? void 0
              : null === (t = r.liquidity) || void 0 === t
              ? void 0
              : t.usd) || 0,
        };
      }
      async function np(e) {
        let {
            poolAddress: t,
            pzETHAddress: n,
            wstETHAddress: a,
            chainId: i,
          } = e,
          [r, s] = await (0, tS.J)(tT._, {
            contracts: [
              {
                address: n,
                functionName: "balanceOf",
                args: [t],
                abi: tA.E.erc20,
                chainId: i,
              },
              {
                address: a,
                functionName: "balanceOf",
                args: [t],
                abi: tA.E.erc20,
                chainId: i,
              },
            ],
            allowFailure: !1,
          });
        return { pzETH: Number((0, tf.d)(r)), wstETH: Number((0, tf.d)(s)) };
      }
      async function nl(e) {
        let {
            poolAddress: t,
            ezETHAddress: n,
            wstETHAddress: a,
            chainId: i,
          } = e,
          [r, s] = await (0, tS.J)(tT._, {
            contracts: [
              {
                address: n,
                functionName: "balanceOf",
                args: [t],
                abi: tA.E.erc20,
                chainId: i,
              },
              {
                address: a,
                functionName: "balanceOf",
                args: [t],
                abi: tA.E.erc20,
                chainId: i,
              },
            ],
            allowFailure: !1,
          });
        return { ezETH: Number((0, tf.d)(r)), wstETH: Number((0, tf.d)(s)) };
      }
      async function ny(e) {
        let {
            poolAddress: t,
            ezETHAddress: n,
            pzETHAddress: a,
            chainId: i,
          } = e,
          [r, s] = await (0, tS.J)(tT._, {
            contracts: [
              {
                address: n,
                functionName: "balanceOf",
                args: [t],
                abi: tA.E.erc20,
                chainId: i,
              },
              {
                address: a,
                functionName: "balanceOf",
                args: [t],
                abi: tA.E.erc20,
                chainId: i,
              },
            ],
            allowFailure: !1,
          });
        return { ezETH: Number((0, tf.d)(r)), pzETH: Number((0, tf.d)(s)) };
      }
      async function nd(e) {
        let { poolAddress: t, ezETHAddress: n, wETHAddress: a, chainId: i } = e,
          [r, s] = await (0, tS.J)(tT._, {
            contracts: [
              {
                address: n,
                functionName: "balanceOf",
                args: [t],
                abi: tA.E.erc20,
                chainId: i,
              },
              {
                address: a,
                functionName: "balanceOf",
                args: [t],
                abi: tA.E.erc20,
                chainId: i,
              },
            ],
            allowFailure: !1,
          });
        return { ezETH: Number((0, tf.d)(r)), eth: Number((0, tf.d)(s)) };
      }
      async function nc(e) {
        let { poolAddress: t, pzETHAddress: n, chainId: a } = e,
          i = await (0, tb.L)(tT._, {
            address: n,
            functionName: "balanceOf",
            args: [t],
            abi: tA.E.erc20,
            chainId: a,
          });
        return { pzETH: Number((0, tf.d)(i)) };
      }
      async function nm(e) {
        let { poolAddresses: t, pzETHAddress: n, chainId: a } = e,
          i = (
            await (0, tS.J)(tT._, {
              contracts: t.map((e) => ({
                address: n,
                functionName: "balanceOf",
                args: [e],
                abi: tA.E.erc20,
                chainId: a,
              })),
              allowFailure: !1,
            })
          ).reduce((e, t) => e + t, 0n);
        return { pzETH: Number((0, tf.d)(i)) };
      }
      let nA = [
        {
          inputs: [],
          name: "totalCollateral",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
      ];
      async function nb(e, t) {
        let n = await (0, tb.L)(tT._, {
          address: e,
          functionName: "totalCollateral",
          abi: nA,
          chainId: t,
        });
        return { eth: Number((0, tf.d)(n)) };
      }
      async function nf(e) {
        let { poolAddress: t, ptEzETHAddresses: n, chainId: a } = e;
        return {
          ezETH: (
            await (0, tS.J)(tT._, {
              contracts: n.map((e) => ({
                address: e,
                abi: tA.E.erc20,
                functionName: "balanceOf",
                args: [t],
                chainId: a,
              })),
              allowFailure: !1,
            })
          ).reduce((e, t) => e + Number((0, tf.d)(t)), 0),
        };
      }
      async function nT(e) {
        let {
          poolAddress: t,
          bridgedEzETHAddress: n,
          ezETHAddress: a,
          chainId: i,
        } = e;
        return {
          ezETH: (
            await (0, tS.J)(tT._, {
              contracts: [
                {
                  address: t,
                  abi: [
                    {
                      inputs: [
                        {
                          internalType: "address",
                          name: "assetAddress",
                          type: "address",
                        },
                      ],
                      name: "getGlobalAmounts",
                      outputs: [
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "deposited",
                              type: "uint256",
                            },
                            {
                              internalType: "uint256",
                              name: "borrowed",
                              type: "uint256",
                            },
                          ],
                          internalType:
                            "struct HubSpokeStructs.DenormalizedVaultAmount",
                          name: "",
                          type: "tuple",
                        },
                      ],
                      stateMutability: "view",
                      type: "function",
                    },
                  ],
                  functionName: "getGlobalAmounts",
                  args: [n],
                  chainId: i,
                },
                {
                  address: t,
                  abi: [
                    {
                      inputs: [
                        {
                          internalType: "address",
                          name: "assetAddress",
                          type: "address",
                        },
                      ],
                      name: "getGlobalAmounts",
                      outputs: [
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "deposited",
                              type: "uint256",
                            },
                            {
                              internalType: "uint256",
                              name: "borrowed",
                              type: "uint256",
                            },
                          ],
                          internalType:
                            "struct HubSpokeStructs.DenormalizedVaultAmount",
                          name: "",
                          type: "tuple",
                        },
                      ],
                      stateMutability: "view",
                      type: "function",
                    },
                  ],
                  functionName: "getGlobalAmounts",
                  args: [a],
                  chainId: i,
                },
              ],
              allowFailure: !1,
            })
          ).reduce((e, t) => e + Number((0, tf.d)(t.deposited)), 0),
        };
      }
      async function ng(e) {
        let { poolAddress: t, chainId: n } = e,
          a = await (0, tb.L)(tT._, {
            address: t,
            abi: [
              {
                inputs: [],
                name: "estimatedValueInToken0",
                outputs: [
                  { internalType: "uint256", name: "value0", type: "uint256" },
                ],
                stateMutability: "view",
                type: "function",
              },
            ],
            functionName: "estimatedValueInToken0",
            chainId: n,
          });
        return { ezETH: Number((0, tf.d)(a)) };
      }
      function nw() {
        let e = (0, tw._)([
          "\n  query getCollateralAssets($collateralTokens: [String!]) {\n    termRepos(where: { collateralTokens: $collateralTokens }) {\n      termRepoLocker\n    }\n  }\n",
        ]);
        return (
          (nw = function () {
            return e;
          }),
          e
        );
      }
      let nh = new th.g6(
          "https://graph-node.mainnet.termfinance.io/subgraphs/name/term-finance-mainnet",
          { fetch }
        ),
        nE = (0, th.Ps)(nw()),
        nv = u.z.object({
          termRepos: u.z.array(u.z.object({ termRepoLocker: u.z.string() })),
        });
      async function nx(e) {
        let { collateralTokens: t, chainId: n } = e,
          a = await nh.request(nE, { collateralTokens: t }),
          i = nv.parse(a).termRepos;
        return {
          ezETH: (
            await Promise.all(
              i.map((e) => {
                let { termRepoLocker: t } = e;
                return tX({
                  poolAddress: t,
                  ezETHAddress: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
                  chainId: n,
                });
              })
            )
          ).reduce((e, t) => e + Number(t.ezETH), 0),
        };
      }
      var nk = n(54601);
      async function nM(e) {
        let t = await fetch(
            "https://explorer-api.zklink.io/tokens/tvl?isall=true"
          ),
          n = await t.json(),
          a = (function (e) {
            switch (e) {
              case r.p5.mainnet.id:
                return "ethereum";
              case r.p5.arbitrum.id:
                return "arbitrum";
              case r.p5.blast.id:
                return "blast";
              case r.p5.linea.id:
                return "primary";
              default:
                return null;
            }
          })(e);
        return {
          ezETH: n
            .filter((e) => e.symbol === nk.W.ezETH && e.networkKey === a)
            .reduce((e, t) => e + parseFloat(t.tvl) / t.usdPrice, 0),
        };
      }
      var nz = n(87449);
      let nF = [
          {
            id: "balancer-ezETH-WETH-mainnet",
            type: nz.Y.DEX,
            name: "Balancer",
            chain: r.p5.mainnet,
            protocol: eZ.balancer,
            assets: "ezETH / WETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.balancer.fi/#/ethereum/pool/0x596192bb6e41802428ac943d2f1476c1af25cc0e000000000000000000000659",
            pointsPool: ["0xBA12222222228d8Ba445958a75a0704d566BF2C8"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tD({
                poolId:
                  "0x596192bb6e41802428ac943d2f1476c1af25cc0e000000000000000000000659",
                ezETHAddress: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
                wETHAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                chainId: e,
              }),
          },
          {
            id: "balancer-ezETH-weETH-rswETH-mainnet",
            type: nz.Y.DEX,
            name: "Balancer",
            chain: r.p5.mainnet,
            protocol: eZ.balancer,
            assets: "ezETH / weETH / rswETH",
            boostMultiplier: 1,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.balancer.fi/#/ethereum/pool/0x848a5564158d84b8a8fb68ab5d004fae11619a5400000000000000000000066a",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tC({
                poolId:
                  "0x848a5564158d84b8a8fb68ab5d004fae11619a5400000000000000000000066a",
                ezETHAddress: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
                weETHAddress: "0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee",
                rswETHAddress: "0xFAe103DC9cf190eD75350761e95403b7b8aFa6c0",
                chainId: e,
              }),
          },
          {
            id: "balancer-ezETH-wstETH-arbitrum",
            type: nz.Y.DEX,
            name: "Balancer",
            chain: r.p5.arbitrum,
            protocol: eZ.balancer,
            assets: "ezETH / wstETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.balancer.fi/#/arbitrum/pool/0xb61371ab661b1acec81c699854d2f911070c059e000000000000000000000516",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tB({
                poolId:
                  "0xb61371ab661b1acec81c699854d2f911070c059e000000000000000000000516",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                wstETHAddress: "0x5979D7b546E38E414F7E9822514be443A4800529",
                chainId: e,
              }),
          },
          {
            id: "curve-ezETH-WETH-mainnet",
            type: nz.Y.DEX,
            name: "Curve",
            chain: r.p5.mainnet,
            protocol: eZ.curve,
            assets: "ezETH / WETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://curve.fi/#/ethereum/pools/factory-stable-ng-79/deposit",
            pointsPool: ["0x85de3add465a219ee25e04d22c39ab027cf5c12e"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              nd({
                poolAddress: "0x85de3add465a219ee25e04d22c39ab027cf5c12e",
                ezETHAddress: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
                wETHAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                chainId: e,
              }),
          },
          {
            id: "curve-ezETH-pzETH-mainnet",
            type: nz.Y.DEX,
            name: "Curve",
            chain: r.p5.mainnet,
            protocol: eZ.curve,
            assets: "ezETH / pzETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [A(1), b(1)],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://curve.fi/#/ethereum/pools/factory-twocrypto-46/deposit",
            pointsPool: ["0xebafb74a98ba14430eedc716c0034123c3040ca4"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              ny({
                poolAddress: "0x8c65cec3847ad99bdc02621bdbc89f2ace56934b",
                ezETHAddress: "0xbf5495efe5db9ce00f80364c8b423567e58d2110",
                pzETHAddress: "0x8c9532a60e0e7c6bbd2b2c1303f63ace1c3e9811",
                chainId: e,
              }),
          },
          {
            id: "curve-ezETH-wfrxEth-fraxtal",
            type: nz.Y.DEX,
            name: "Curve",
            chain: r.p5.fraxtal,
            protocol: eZ.curve,
            assets: "ezETH / wfrxEth",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["frax-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://curve.fi/#/fraxtal/pools/factory-stable-ng-29/deposit",
            pointsPool: ["0x6e9b6660b94fa74a8087d7ee14dc28698249d242"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              nd({
                poolAddress: "0x6e9b6660b94fa74a8087d7ee14dc28698249d242",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                wETHAddress: "0xFC00000000000000000000000000000000000006",
                chainId: e,
              }),
          },
          {
            id: "curve-pzETH-wstETH-mainnet",
            type: nz.Y.DEX,
            name: "Curve",
            chain: r.p5.mainnet,
            protocol: eZ.curve,
            assets: "pzETH / wstETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [A(1), b(1)],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://curve.fi/#/ethereum/pools/factory-stable-ng-234/deposit",
            pointsPool: ["0xCec99Cff3632Cf1f16652cC5b1E80eB08bE25983"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              np({
                poolAddress: "0xCec99Cff3632Cf1f16652cC5b1E80eB08bE25983",
                pzETHAddress: "0x8c9532a60E0E7C6BbD2B2c1303F63aCE1c3E9811",
                wstETHAddress: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
                chainId: e,
              }),
          },
          {
            id: "frax-ezETH-fraxtal",
            type: nz.Y.Lending,
            name: "Fraxlend",
            chain: r.p5.fraxtal,
            protocol: eZ.frax,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.frax.finance/fraxlend/pair?address=0x19031D9104d6242Da19CC2AE0d29E60F2e37e426",
            pointsPool: ["0x19031d9104d6242da19cc2ae0d29e60f2e37e426"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0x19031d9104d6242da19cc2ae0d29e60f2e37e426",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: e,
              }),
          },
          {
            id: "uniswap-ezETH-WETH-mainnet",
            type: nz.Y.DEX,
            name: "Uniswap",
            chain: r.p5.mainnet,
            protocol: eZ.uniswap,
            assets: "ezETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.uniswap.org/explore/pools/ethereum/0xBE80225f09645f172B079394312220637C440A63",
            pointsPool: ["0xBE80225f09645f172B079394312220637C440A63"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              nd({
                poolAddress: "0xbe80225f09645f172b079394312220637c440a63",
                ezETHAddress: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
                wETHAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                chainId: e,
              }),
          },
          {
            id: "uniswap-pzETH-wstETH-mainnet",
            type: nz.Y.DEX,
            name: "Uniswap",
            chain: r.p5.mainnet,
            protocol: eZ.uniswap,
            assets: "pzETH / wstETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [A(1), b(1)],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.uniswap.org/explore/pools/ethereum/0xfc354f5cf57125a7d85e1165f4fcdfd3006db61a",
            pointsPool: ["0xfC354F5cf57125a7D85E1165F4FcDfD3006Db61A"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              np({
                poolAddress: "0xfC354F5cf57125a7D85E1165F4FcDfD3006Db61A",
                pzETHAddress: "0x8c9532a60E0E7C6BbD2B2c1303F63aCE1c3E9811",
                wstETHAddress: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
                chainId: e,
              }),
          },
          {
            id: "uniswap-ezETH-wstETH-mainnet",
            type: nz.Y.DEX,
            name: "Uniswap",
            chain: r.p5.mainnet,
            protocol: eZ.uniswap,
            assets: "ezETH / wstETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.uniswap.org/explore/pools/ethereum/0x1B9D58beA5eD5d935cC2e818dDE1d796Abff0Bc0",
            pointsPool: ["0x1B9D58beA5eD5d935cC2e818dDE1d796Abff0Bc0"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              np({
                poolAddress: "0x1B9D58beA5eD5d935cC2e818dDE1d796Abff0Bc0",
                pzETHAddress: "0x8c9532a60E0E7C6BbD2B2c1303F63aCE1c3E9811",
                wstETHAddress: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
                chainId: e,
              }),
          },
          {
            id: "uniswap-ezETH-wstETH-optimism",
            type: nz.Y.DEX,
            name: "Uniswap",
            chain: r.p5.optimism,
            protocol: eZ.uniswap,
            assets: "ezETH / wstETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.uniswap.org/explore/pools/optimism/0xb40DA71c49c745Dd3ab801882b1D410760541678?chain=optimism",
            pointsPool: ["0xb40DA71c49c745Dd3ab801882b1D410760541678"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              nl({
                poolAddress: "0xb40DA71c49c745Dd3ab801882b1D410760541678",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                wstETHAddress: "0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb",
                chainId: e,
              }),
          },
          {
            id: "uniswap-ezEIGEN-EIGEN-mainnet",
            type: nz.Y.DEX,
            name: "Uniswap",
            chain: r.p5.mainnet,
            protocol: eZ.uniswap,
            assets: "ezEIGEN / EIGEN",
            boostMultiplier: 0,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(s.V, {
              variant: "info",
              children: "1 pt per 500 ezEIGEN",
            }),
            priority: null,
            link: "https://app.uniswap.org/explore/pools/ethereum/0xEeae4cECd25ad64ad6B06B833F8e9Df3fe520fB3",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tj({
                poolAddress: "0xEeae4cECd25ad64ad6B06B833F8e9Df3fe520fB3",
                ezEIGENAddress: "0xd4fcde9bb1d746dd7e5463b01dd819ee06af25db",
                EIGENAddress: "0xec53bF9167f50cDEB3Ae105f56099aaaB9061F83",
                chainId: e,
              }),
          },
          {
            id: "zircuit-ezETH-mainnet",
            type: nz.Y.L2,
            name: "Zircuit",
            chain: r.p5.mainnet,
            protocol: eZ.zircuit,
            assets: "ezETH",
            boostMultiplier: 1,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["zircuit-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://stake.zircuit.com/?ref=renzoo",
            pointsPool: ["0xf047ab4c75cebf0eb9ed34ae2c186f3611aeafa6"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0xf047ab4c75cebf0eb9ed34ae2c186f3611aeafa6",
                ezETHAddress: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
                chainId: e,
              }),
          },
          {
            id: "zircuit-pzETH-mainnet",
            type: nz.Y.L2,
            name: "Zircuit",
            chain: r.p5.mainnet,
            protocol: eZ.zircuit,
            assets: "pzETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [A(1), b(1)],
            rewards: [tm["zircuit-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://stake.zircuit.com/?ref=renzoo",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              nc({
                poolAddress: "0xf047ab4c75cebf0eb9ed34ae2c186f3611aeafa6",
                pzETHAddress: "0x8c9532a60e0e7c6bbd2b2c1303f63ace1c3e9811",
                chainId: e,
              }),
          },
          {
            id: "gearbox-ezETH-mainnet",
            type: nz.Y.Lending,
            name: "Gearbox",
            chain: r.p5.mainnet,
            protocol: eZ.gearbox,
            assets: "ezETH",
            boostMultiplier: 3,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.gearbox.fi/restaking/open/0xbf5495efe5db9ce00f80364c8b423567e58d2110",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              t$({
                chainId: e,
                ezETHAddress: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
              }),
          },
          {
            id: "gearbox-ezETH-arbitrum",
            type: nz.Y.Lending,
            name: "Gearbox",
            chain: r.p5.arbitrum,
            protocol: eZ.gearbox,
            assets: "ezETH",
            boostMultiplier: 3,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.gearbox.fi/restaking/open/0x2416092f143378750bb29b79ed961ab195cceea5",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              t$({
                chainId: e,
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
              }),
          },
          {
            id: "gearbox-ezETH-optimism",
            type: nz.Y.Lending,
            name: "Gearbox",
            chain: r.p5.optimism,
            protocol: eZ.gearbox,
            assets: "ezETH",
            boostMultiplier: 3,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.gearbox.fi/restaking/open/0x2416092f143378750bb29b79ed961ab195cceea5",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              t$({
                chainId: e,
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
              }),
          },
          {
            id: "gearbox-pzETH-mainnet",
            type: nz.Y.Lending,
            name: "Gearbox",
            chain: r.p5.mainnet,
            protocol: eZ.gearbox,
            assets: "pzETH",
            boostMultiplier: 3,
            hasTokenEmissions: !1,
            badges: [A(1), b(1)],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.gearbox.fi/restaking/open/0x8c9532a60e0e7c6bbd2b2c1303f63ace1c3e9811",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              t0({
                chainId: e,
                ezETHAddress: "0x8c9532a60e0e7c6bbd2b2c1303f63ace1c3e9811",
              }),
          },
          {
            id: "pendle-ezETH-dec25-mainnet",
            type: nz.Y.Leverage,
            name: "Pendle",
            chain: r.p5.mainnet,
            protocol: eZ.pendle,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(s.V, { variant: "info", children: "Dec25 Expiry" }),
            priority: null,
            link: "https://app.pendle.finance/points/0xd8f12bcde578c653014f27379a6114f67f0e445f?chain=ethereum",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              no({
                address: "0xd8f12bcde578c653014f27379a6114f67f0e445f",
                chainId: e,
              }),
          },
          {
            id: "pancakeSwap-ezETH-ETH-bnb",
            type: nz.Y.DEX,
            name: "PancakeSwap",
            chain: r.p5.bsc,
            protocol: eZ.pancakeSwap,
            assets: "ezETH / ETH",
            boostMultiplier: 1,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://pancakeswap.finance/info/v3/pairs/0xb5bf551df2c078890809ad295c91ec5abc23e620",
            pointsPool: ["0xb5bf551df2c078890809ad295c91ec5abc23e620"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              nd({
                poolAddress: "0xb5bf551df2c078890809ad295c91ec5abc23e620",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                wETHAddress: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
                chainId: e,
              }),
          },
          {
            id: "sturdy-ezETH-mode",
            type: nz.Y.Lending,
            name: "Sturdy",
            chain: r.p5.mode,
            protocol: eZ.sturdy,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://v2.sturdy.finance/aggregators/mode/0xd60DD6981Ec336fDa40820f8cA5E99CD17dD25A0",
            pointsPool: ["0xb93B53CA8a51A78348a9B22718ca7fe77D13B900"],
            apyFn: (e, t) => {},
            tvlFn: (e) => nb("0xb93B53CA8a51A78348a9B22718ca7fe77D13B900", e),
          },
          {
            id: "sturdy-ezETH-linea",
            type: nz.Y.Lending,
            name: "Sturdy",
            chain: r.p5.linea,
            protocol: eZ.sturdy,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://v2.sturdy.finance/silos/linea/0xda11c8D85203f9D616246754B8957F00892476b1",
            pointsPool: ["0x6EeFDBAd45AA2a688bbD5b7c098c323f05Df2223"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0x6EeFDBAd45AA2a688bbD5b7c098c323f05Df2223",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: e,
              }),
          },
          {
            id: "kim-exchange-ezETH-WETH-mode",
            type: nz.Y.DEX,
            name: "Kim Exchange",
            chain: r.p5.mode,
            protocol: eZ.kimExchange,
            assets: "ezETH / WETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.kim.exchange/pools/v4/0xd9a06f63e523757973ffd1a4606a1260252636d2",
            pointsPool: ["0x812d54d483bf049980af7ceb57dbf77fa186d063"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              nd({
                poolAddress: "0xD9a06f63E523757973ffd1a4606A1260252636D2",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                wETHAddress: "0x4200000000000000000000000000000000000006",
                chainId: e,
              }),
          },
          {
            id: "thruster-ezETH-WETH-fee-500-blast",
            type: nz.Y.DEX,
            name: "Thruster",
            chain: r.p5.blast,
            protocol: eZ.thruster,
            assets: "ezETH / WETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["points-gold-blast"], tm["points-blast"]],
            tag: (0, a.jsx)(s.V, { variant: "info", children: "0.05% Fee" }),
            priority: null,
            link: "https://app.thruster.finance/analytics",
            pointsPool: ["0x7BE481D464CAD7ad99500CE8A637599eB8d0FCDB"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              nd({
                poolAddress: "0x7BE481D464CAD7ad99500CE8A637599eB8d0FCDB",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                wETHAddress: "0x4300000000000000000000000000000000000004",
                chainId: e,
              }),
          },
          {
            id: "thruster-ezETH-WETH-fee-3000-blast",
            type: nz.Y.DEX,
            name: "Thruster",
            chain: r.p5.blast,
            protocol: eZ.thruster,
            assets: "ezETH / WETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["points-gold-blast"], tm["points-blast"]],
            tag: (0, a.jsx)(s.V, { variant: "info", children: "0.3% Fee" }),
            priority: null,
            link: "https://app.thruster.finance/analytics",
            pointsPool: ["0x1d42751CE4F28F58e7b757A586615A0CF31566DF"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              nd({
                poolAddress: "0x1d42751CE4F28F58e7b757A586615A0CF31566DF",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                wETHAddress: "0x4300000000000000000000000000000000000004",
                chainId: e,
              }),
          },
          {
            id: "nile-ezETH-ETH-v1-linea",
            type: nz.Y.DEX,
            name: "Nile",
            chain: r.p5.linea,
            protocol: eZ.nile,
            assets: "ezETH / ETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["linea-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://www.thenile.exchange/manage/v1/0xa9a1fb9f6664a0b6bfb1f52724fd7b23842248c5",
            pointsPool: ["0x76b0d13428eb01f12f132aa58707d254c42df568"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              nd({
                poolAddress: "0xa9a1fb9f6664a0b6bfb1f52724fd7b23842248c5",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                wETHAddress: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
                chainId: e,
              }),
          },
          {
            id: "nile-ezETH-ETH-v2-linea",
            type: nz.Y.DEX,
            name: "Nile",
            chain: r.p5.linea,
            protocol: eZ.nile,
            assets: "ezETH / ETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["linea-points"], tm["turtle-boosted-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://www.thenile.exchange/liquidity/v2/0x6ba5ccc757541851d610ecc8f8ac3714b5f95314",
            pointsPool: ["0x6ba5ccc757541851d610ecc8f8ac3714b5f95314"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              nd({
                poolAddress: "0x6ba5ccc757541851d610ecc8f8ac3714b5f95314",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                wETHAddress: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
                chainId: e,
              }),
          },
          {
            id: "ionic-ezETH-mode",
            type: nz.Y.Lending,
            name: "Ionic",
            chain: r.p5.mode,
            protocol: eZ.ionic,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.ionic.money/",
            pointsPool: ["0x59e710215d45F584f44c0FEe83DA6d43D762D857"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0x59e710215d45F584f44c0FEe83DA6d43D762D857",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: e,
              }),
          },
          {
            id: "juice-ezETH-WETH-blast",
            type: nz.Y.Leverage,
            name: "Juice",
            chain: r.p5.blast,
            protocol: eZ.juice,
            assets: "ezETH / WETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.juice.finance/",
            pointsPool: [
              "0x9Dfd4094b3e88f3b9E79b04514B1669D6779AeC9",
              "0x741011f52b7499ca951f8b8ee547dd3cdd813fda",
              "0xc81A630806d1aF3fd7509187E1AfC501Fd46e818",
            ],
            apyFn: (e, t) => {},
            tvlFn: (e) => ne({ chainId: e }),
          },
          {
            id: "hyperlock-ezETH-WETH-3000-fee-blast",
            type: nz.Y.DEX,
            name: "Hyperlock",
            chain: r.p5.blast,
            protocol: eZ.hyperlock,
            assets: "ezETH / WETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [
              tm["points-gold-blast"],
              tm["points-blast"],
              tm["hyper-tokens-blast"],
            ],
            tag: (0, a.jsx)(s.V, { variant: "info", children: "0.3% Fee" }),
            priority: null,
            link: "https://app.hyperlock.finance/",
            pointsPool: ["0xc28EffdfEF75448243c1d9bA972b97e32dF60d06"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              t2({
                poolAddress: "0x1d42751ce4f28f58e7b757a586615a0cf31566df",
                chainId: e,
              }),
          },
          {
            id: "hyperlock-ezETH-WETH-500-fee-blast",
            type: nz.Y.DEX,
            name: "Hyperlock",
            chain: r.p5.blast,
            protocol: eZ.hyperlock,
            assets: "ezETH / WETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [
              tm["points-gold-blast"],
              tm["points-blast"],
              tm["hyper-tokens-blast"],
            ],
            tag: (0, a.jsx)(s.V, { variant: "info", children: "0.05% Fee" }),
            priority: null,
            link: "https://app.hyperlock.finance/",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              t2({
                poolAddress: "0x7be481d464cad7ad99500ce8a637599eb8d0fcdb",
                chainId: e,
              }),
          },
          {
            id: "init-blast",
            type: nz.Y.Lending,
            name: "Init",
            chain: r.p5.blast,
            protocol: eZ.init,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [
              tm["points-gold-blast"],
              tm["points-blast"],
              tm["init-points-ezeth-blast"],
            ],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.init.capital/lend-borrow?collateral=0x027296054f8181fbc0df26174e7640652bb28b40&chain=81457",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0x027296054F8181fbC0Df26174E7640652bB28b40",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: e,
              }),
          },
          {
            id: "particle-blast",
            type: nz.Y.Perpetuals,
            name: "Particle",
            chain: r.p5.blast,
            protocol: eZ.particle,
            assets: "ezETH / WETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.particle.trade/0x7BE481D464CAD7ad99500CE8A637599eB8d0FCDB",
            pointsPool: ["0x121B5ac4De4a3E6F4171956BC26ceda40Cb61a56"],
            apyFn: (e, t) => {},
            tvlFn: () => nu(),
          },
          {
            id: "mendi-linea",
            type: nz.Y.Lending,
            name: "Mendi",
            chain: r.p5.linea,
            protocol: eZ.mendi,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["mendi-points-linea"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://mendi.finance/",
            pointsPool: ["0x8a90d208666deec08123444f67bf5b1836074a67"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0x8a90d208666deec08123444f67bf5b1836074a67",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: e,
              }),
          },
          {
            id: "zerolend-linea",
            type: nz.Y.Lending,
            name: "Zerolend",
            chain: r.p5.linea,
            protocol: eZ.zerolend,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["linea-points"], tm["zerolend-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.zerolend.xyz/reserve-overview/?underlyingAsset=0x2416092f143378750bb29b79ed961ab195cceea5&marketName=proto_linea_v3",
            pointsPool: ["0x0684fc172a0b8e6a65cf4684edb2082272fe9050"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0x0684fc172a0b8e6a65cf4684edb2082272fe9050",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: e,
              }),
          },
          {
            id: "zerolend-mainnet",
            type: nz.Y.Lending,
            name: "Zerolend",
            chain: r.p5.mainnet,
            protocol: eZ.zerolend,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["zerolend-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.zerolend.xyz/reserve-overview/?underlyingAsset=0xbf5495efe5db9ce00f80364c8b423567e58d2110&marketName=proto_mainnet_lrt_v3",
            pointsPool: ["0x68fD75cF5a91F49EFfAd0E857ef2E97e5d1f35e7"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0x68fD75cF5a91F49EFfAd0E857ef2E97e5d1f35e7",
                ezETHAddress: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
                chainId: e,
              }),
          },
          {
            id: "zerolend-pzETH-mainnet",
            type: nz.Y.Lending,
            name: "Zerolend",
            chain: r.p5.mainnet,
            protocol: eZ.zerolend,
            assets: "pzETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [A(1), b(1)],
            rewards: [tm["zerolend-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.zerolend.xyz/reserve-overview/?underlyingAsset=0x8c9532a60e0e7c6bbd2b2c1303f63ace1c3e9811&marketName=proto_mainnet_lrt_v3",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              nc({
                poolAddress: "0xd9855847FFD9Bc0c5f3efFbEf67B558dBf090a71",
                pzETHAddress: "0x8c9532a60e0e7c6bbd2b2c1303f63ace1c3e9811",
                chainId: e,
              }),
          },
          {
            id: "zerolend-blast",
            type: nz.Y.Lending,
            name: "Zerolend",
            chain: r.p5.blast,
            protocol: eZ.zerolend,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["zerolend-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.zerolend.xyz/reserve-overview/?underlyingAsset=0x2416092f143378750bb29b79ed961ab195cceea5&marketName=proto_blast_v3",
            pointsPool: ["0xEaad75b283Ec8779B9C7b5b2cC245f4755eD4595"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0xEaad75b283Ec8779B9C7b5b2cC245f4755eD4595",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: e,
              }),
          },
          {
            id: "ironclad-mode",
            type: nz.Y.Lending,
            name: "Ironclad",
            chain: r.p5.mode,
            protocol: eZ.ironclad,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.ironclad.finance/",
            pointsPool: ["0x272CfCceFbEFBe1518cd87002A8F9dfd8845A6c4"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0x272CfCceFbEFBe1518cd87002A8F9dfd8845A6c4",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: e,
              }),
          },
          {
            id: "aura-ezETH-WETH-mainnet",
            type: nz.Y.DEX,
            name: "Aura",
            chain: r.p5.mainnet,
            protocol: eZ.aura,
            assets: "ezETH / WETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.aura.finance/#/1/pool/189",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) => tM({ chainId: e, poolId: "189" }),
          },
          {
            id: "blackwing-mainnet",
            type: nz.Y.Perpetuals,
            name: "Blackwing",
            chain: r.p5.mainnet,
            protocol: eZ.blackwing,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://blackwing.fi/renzop",
            pointsPool: ["0xc6aDE8A68026d582AB37B879D188caF7e405dD09"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0xc6aDE8A68026d582AB37B879D188caF7e405dD09",
                ezETHAddress: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
                chainId: e,
              }),
          },
          {
            id: "blackwing-arbitrum",
            type: nz.Y.Perpetuals,
            name: "Blackwing",
            chain: r.p5.arbitrum,
            protocol: eZ.blackwing,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://blackwing.fi/renzop",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0xc6ade8a68026d582ab37b879d188caf7e405dd09",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: e,
              }),
          },
          {
            id: "zklink-mainnet",
            type: nz.Y.L2,
            name: "zkLink",
            chain: r.p5.mainnet,
            protocol: eZ.zklink,
            assets: "ezETH",
            boostMultiplier: 1,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["zklink-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://portal.zklink.io/?network=ethereum",
            pointsPool: ["0x5fD9F73286b7E8683Bab45019C94553b93e015Cf"],
            apyFn: (e, t) => {},
            tvlFn: (e) => nM(e),
          },
          {
            id: "zklink-arbitrum",
            type: nz.Y.L2,
            name: "zkLink",
            chain: r.p5.arbitrum,
            protocol: eZ.zklink,
            assets: "ezETH",
            boostMultiplier: 1,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["zklink-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://portal.zklink.io/?network=arbitrum",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) => nM(e),
          },
          {
            id: "zklink-linea",
            type: nz.Y.L2,
            name: "zkLink",
            chain: r.p5.linea,
            protocol: eZ.zklink,
            assets: "ezETH",
            boostMultiplier: 1,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["zklink-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://portal.zklink.io/?network=primary",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) => nM(e),
          },
          {
            id: "silo-mainnet",
            type: nz.Y.Lending,
            name: "Silo",
            chain: r.p5.mainnet,
            protocol: eZ.silo,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.silo.finance/silo/0xB5077F7561400b01106D151718099B22c4616FBF",
            pointsPool: ["0xB5077F7561400b01106D151718099B22c4616FBF"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0xB5077F7561400b01106D151718099B22c4616FBF",
                ezETHAddress: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
                chainId: e,
              }),
          },
          {
            id: "silo-arbitrum",
            type: nz.Y.Lending,
            name: "Silo",
            chain: r.p5.arbitrum,
            protocol: eZ.silo,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.silo.finance/silo/0x4a2bd8dcc2539e19cb97DF98EF5afC4d069d9e4C?screen=deposit",
            pointsPool: ["0x4a2bd8dcc2539e19cb97DF98EF5afC4d069d9e4C"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0x4a2bd8dcc2539e19cb97DF98EF5afC4d069d9e4C",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: e,
              }),
          },
          {
            id: "silo-optimism",
            type: nz.Y.Lending,
            name: "Silo",
            chain: r.p5.optimism,
            protocol: eZ.silo,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.silo.finance/silo/0x12ee4BE944b993C81b6840e088bA1dCc57F07B1D",
            pointsPool: ["0x12ee4BE944b993C81b6840e088bA1dCc57F07B1D"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0x12ee4BE944b993C81b6840e088bA1dCc57F07B1D",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: e,
              }),
          },
          {
            id: "silo-pzETH-mainnet",
            type: nz.Y.Lending,
            name: "Silo",
            chain: r.p5.mainnet,
            protocol: eZ.silo,
            assets: "pzETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [A(1), b(1)],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.silo.finance/silo/0x1cdbde50F9D122CCE8fe8D08d0D482b0161fFD15",
            pointsPool: ["0x1cdbde50F9D122CCE8fe8D08d0D482b0161fFD15"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              nc({
                poolAddress: "0x1cdbde50F9D122CCE8fe8D08d0D482b0161fFD15",
                pzETHAddress: "0x8c9532a60e0e7c6bbd2b2c1303f63ace1c3e9811",
                chainId: e,
              }),
          },
          {
            id: "silo-ezETH-base",
            type: nz.Y.Lending,
            name: "Silo",
            chain: r.p5.base,
            protocol: eZ.silo,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.silo.finance/silo/0xd54A83D47934D889364Dd5Af2d6855Dcf05745C3",
            pointsPool: ["0xd54A83D47934D889364Dd5Af2d6855Dcf05745C3"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0xd54A83D47934D889364Dd5Af2d6855Dcf05745C3",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: e,
              }),
          },
          {
            id: "aerodrome-ezETH-WETH-concentrated-stable-base",
            type: nz.Y.DEX,
            name: "Aerodrome",
            chain: r.p5.base,
            protocol: eZ.aerodrome,
            assets: "ezETH / WETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(s.V, {
              variant: "info",
              children: "Concentrated Stable",
            }),
            priority: null,
            link: "https://aerodrome.finance/deposit?token0=0x2416092f143378750bb29b79eD961ab195CcEea5&token1=0x4200000000000000000000000000000000000006&type=1",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              nd({
                poolAddress: "0xDC7EAd706795eDa3FEDa08Ad519d9452BAdF2C0d",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                wETHAddress: "0x4200000000000000000000000000000000000006",
                chainId: e,
              }),
          },
          {
            id: "layerbank-mode",
            type: nz.Y.Lending,
            name: "LayerBank",
            chain: r.p5.mode,
            protocol: eZ.layerbank,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["layerbank-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://mode.layerbank.finance/bank",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0xd97905cC56030a6E9b618d6e26Cc9Ee2eAA15948",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: e,
              }),
          },
          {
            id: "layerbank-linea",
            type: nz.Y.Lending,
            name: "LayerBank",
            chain: r.p5.linea,
            protocol: eZ.layerbank,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["layerbank-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://linea.layerbank.finance/bank",
            pointsPool: ["0x2c88A441418E06b9F3e565c2f866Fcb03c9409E2"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0x2c88A441418E06b9F3e565c2f866Fcb03c9409E2",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: e,
              }),
          },
          {
            id: "orbit-blast",
            type: nz.Y.Lending,
            name: "Orbit Lending",
            chain: r.p5.blast,
            protocol: eZ.orbit,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.orbitlending.io/",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0x4991b902F397dC16b0BBd21b0057a20b4B357AE2",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: e,
              }),
          },
          {
            id: "kinza-bnb",
            type: nz.Y.Lending,
            name: "Kinza",
            chain: r.p5.bsc,
            protocol: eZ.kinza,
            assets: "ezETH",
            boostMultiplier: 1,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.kinza.finance/#/details/ezETH",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0x19136A96B202685a2768Eb99068AdF3341414bDB",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: e,
              }),
          },
          {
            id: "cyber-mainnet",
            type: nz.Y.L2,
            name: "Cyber",
            chain: r.p5.mainnet,
            protocol: eZ.cyber,
            assets: "ezETH",
            boostMultiplier: 1,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://cyber.co/restaking",
            pointsPool: ["0x18eeD20f71BEf84B605253C89A7576E3634134C0"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0x18eeD20f71BEf84B605253C89A7576E3634134C0",
                ezETHAddress: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
                chainId: e,
              }),
          },
          {
            id: "swell-l2-mainnet",
            type: nz.Y.L2,
            name: "Swell L2",
            chain: r.p5.mainnet,
            protocol: eZ.swellL2,
            assets: "ezETH",
            boostMultiplier: 1,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["swell-l2-points"], tm["swell-black-pearls-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.swellnetwork.io/swell-l2",
            pointsPool: ["0x38D43a6Cb8DA0E855A42fB6b0733A0498531d774"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0x38D43a6Cb8DA0E855A42fB6b0733A0498531d774",
                ezETHAddress: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
                chainId: e,
              }),
          },
          {
            id: "swell-l2-PT-ezETH-mainnet",
            type: nz.Y.L2,
            name: "Swell L2",
            chain: r.p5.mainnet,
            protocol: eZ.swellL2,
            assets: "PT-ezETH",
            boostMultiplier: 0,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["swell-l2-points"], tm["swell-black-pearls-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.swellnetwork.io/swell-l2",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              nf({
                poolAddress: "0x38D43a6Cb8DA0E855A42fB6b0733A0498531d774",
                ptEzETHAddresses: [
                  "0xf7906F274c174A52d444175729E3fa98f9bde285",
                  "0x248241244356D18f63d0c16082996839ecB0C7bF",
                ],
                chainId: e,
              }),
          },
          {
            id: "l3x-mainnet",
            type: nz.Y.L2,
            name: "L3X",
            chain: r.p5.mainnet,
            protocol: eZ.l3x,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://l3x.com/stake",
            pointsPool: ["0xC5928F4e742873356e8126bda92B02e7C86F043b"],
            apyFn: (e, t) => {},
            tvlFn: () => null,
          },
          {
            id: "karak-mainnet",
            type: nz.Y.Deposit,
            name: "Karak",
            chain: r.p5.mainnet,
            protocol: eZ.karak,
            assets: "ezETH",
            boostMultiplier: 1,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["karak-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.karak.network/pool/ethereum/ezETH",
            pointsPool: ["0xe4a8B89ba73517C83c4E3e6B3E2e8c5C536D2085"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0xe4a8B89ba73517C83c4E3e6B3E2e8c5C536D2085",
                ezETHAddress: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
                chainId: e,
              }),
          },
          {
            id: "karak-arbitrum",
            type: nz.Y.Deposit,
            name: "Karak",
            chain: r.p5.arbitrum,
            protocol: eZ.karak,
            assets: "ezETH",
            boostMultiplier: 1,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["karak-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.karak.network/pool/arbitrum/ezETH",
            pointsPool: ["0xC190924A68B570F943a2974d46F0D8c5E742BBcB"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0xC190924A68B570F943a2974d46F0D8c5E742BBcB",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: e,
              }),
          },
          {
            id: "notional-ezETH-wETH-mainnet",
            name: "Notional",
            type: nz.Y.DEX,
            chain: r.p5.mainnet,
            protocol: eZ.notional,
            assets: "ezETH / WETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://notional.finance/vaults/mainnet/0x914255c0c289aea36e378ebb5e28293b5ed278ca/CreateVaultPosition?borrowOption=0x00000000914255c0c289aea36e378ebb5e28293b5ed278ca00010066e4d2000a",
            pointsPool: [],
            apyFn: (e, t) => {},
            tvlFn: () =>
              ns({ address: "0x914255c0c289aea36e378ebb5e28293b5ed278ca" }),
          },
          {
            id: "notional-ezETH-wETH-arbitrum",
            name: "Notional",
            type: nz.Y.DEX,
            chain: r.p5.arbitrum,
            protocol: eZ.notional,
            assets: "ezETH / wstETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://notional.finance/vaults/arbitrum/0xd7c3dc1c36d19cf4e8cea4ea143a2f4458dd1937/CreateVaultPosition?borrowOption=0x00000000d7c3dc1c36d19cf4e8cea4ea143a2f4458dd193700050066e4d2000a",
            pointsPool: [],
            apyFn: (e, t) => {},
            tvlFn: () =>
              ns({ address: "0xd7c3dc1c36d19cf4e8cea4ea143a2f4458dd1937" }),
          },
          {
            id: "fx-ezETH-mainnet",
            type: nz.Y.CDP,
            name: "f(x)",
            chain: r.p5.mainnet,
            protocol: eZ.fx,
            assets: "ezETH",
            boostMultiplier: 1,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://fx.aladdin.club/earn/",
            pointsPool: ["0x38965311507D4E54973F81475a149c09376e241e"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0x38965311507D4E54973F81475a149c09376e241e",
                ezETHAddress: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
                chainId: e,
              }),
          },
          {
            id: "dolomite-ezETH-arbitrum",
            type: nz.Y.Lending,
            name: "Dolomite",
            chain: r.p5.arbitrum,
            protocol: eZ.dolomite,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.dolomite.io/balances",
            pointsPool: ["0x6Bd780E7fDf01D77e4d475c821f1e7AE05409072"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0x6Bd780E7fDf01D77e4d475c821f1e7AE05409072",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: e,
              }),
          },
          {
            id: "contango-ezETH-mainnet",
            type: nz.Y.Leverage,
            name: "Contango",
            chain: r.p5.mainnet,
            protocol: eZ.contango,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.contango.xyz/",
            pointsPool: [],
            apyFn: (e, t) => {},
            tvlFn: (e) => tK({ symbol: "ezETH", chainId: e }),
          },
          {
            id: "contango-ezETH-arbitrum",
            type: nz.Y.Leverage,
            name: "Contango",
            chain: r.p5.arbitrum,
            protocol: eZ.contango,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.contango.xyz/",
            pointsPool: [],
            apyFn: (e, t) => {},
            tvlFn: (e) => tK({ symbol: "ezETH", chainId: e }),
          },
          {
            id: "contango-ezETH-base",
            type: nz.Y.Leverage,
            name: "Contango",
            chain: r.p5.base,
            protocol: eZ.contango,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.contango.xyz/",
            pointsPool: [],
            apyFn: (e, t) => {},
            tvlFn: (e) => tK({ symbol: "ezETH", chainId: e }),
          },
          {
            id: "contango-pzETH-mainnet",
            type: nz.Y.Leverage,
            name: "Contango",
            chain: r.p5.mainnet,
            protocol: eZ.contango,
            assets: "pzETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.contango.xyz/",
            pointsPool: [],
            apyFn: (e, t) => {},
            tvlFn: (e) => tK({ symbol: "pzETH", chainId: e }),
          },
          {
            id: "contango-ezETH-optimism",
            type: nz.Y.Leverage,
            name: "Contango",
            chain: r.p5.optimism,
            protocol: eZ.contango,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.contango.xyz/",
            pointsPool: [],
            apyFn: (e, t) => {},
            tvlFn: (e) => tK({ symbol: "ezETH", chainId: e }),
          },
          {
            id: "contango-ezETH-linea",
            type: nz.Y.Leverage,
            name: "Contango",
            chain: r.p5.linea,
            protocol: eZ.contango,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.contango.xyz/strategies/leveraged-staking/eth?selectedChains=59144",
            pointsPool: [],
            apyFn: (e, t) => {},
            tvlFn: (e) => tK({ symbol: "ezETH", chainId: e }),
          },
          {
            id: "term-ezETH-mainnet",
            type: nz.Y.Lending,
            name: "Term",
            chain: r.p5.mainnet,
            protocol: eZ.term,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["term-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.term.finance/",
            pointsPool: [],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              nx({
                collateralTokens: [
                  "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
                ],
                chainId: e,
              }),
          },
          {
            id: "lista-ezETH-bsc",
            type: nz.Y.CDP,
            name: "Lista",
            chain: r.p5.bsc,
            protocol: eZ.lista,
            assets: "ezETH",
            boostMultiplier: 1,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://lista.org/cdp/provide?token=ezETH/",
            pointsPool: [],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              ni({
                poolAddress: "0xB68443Ee3e828baD1526b3e0Bdf2Dfc6b1975ec4",
                chainId: e,
              }),
          },
          {
            id: "velodrome-ezETH-wstETH-optimism",
            type: nz.Y.DEX,
            name: "Velodrome",
            chain: r.p5.optimism,
            protocol: eZ.velodrome,
            assets: "ezETH / wstETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://velodrome.finance/deposit?token0=0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb&token1=0x2416092f143378750bb29b79eD961ab195CcEea5&type=1&factory=0xCc0bDDB707055e04e497aB22a59c2aF4391cd12F",
            pointsPool: ["0xb71Ac980569540cE38195b38369204ff555C80BE"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              nl({
                poolAddress: "0xb71Ac980569540cE38195b38369204ff555C80BE",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                wstETHAddress: "0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb",
                chainId: e,
              }),
          },
          {
            id: "ion-ezETH-mainnet",
            type: nz.Y.Lending,
            name: "Ion Protocol",
            chain: r.p5.mainnet,
            protocol: eZ.ion,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["ion-ezeth-tokens"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://www.app.ionprotocol.io/lend?collateralAsset=ezETH&lenderAsset=WETH&marketId=3",
            pointsPool: ["0xe3692b2E55Eb2494cA73610c3b027F53815CCD39"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0xe3692b2E55Eb2494cA73610c3b027F53815CCD39",
                ezETHAddress: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
                chainId: e,
              }),
          },
          {
            id: "beefy-ezETH-mainnet",
            type: nz.Y.Various,
            name: "Beefy",
            chain: r.p5.mainnet,
            protocol: eZ.beefy,
            assets: "ezETH",
            boostMultiplier: 0,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.beefy.com/",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: () => tR(),
          },
          {
            id: "beefy-ezETH-arbitrum",
            type: nz.Y.DEX,
            name: "Beefy",
            chain: r.p5.arbitrum,
            protocol: eZ.beefy,
            assets: "ezETH / wstETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.beefy.com/vault/aura-arb-ezeth-wsteth",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) => tH(e, "aura-arb-ezeth-wsteth"),
          },
          {
            id: "ramses-ezETH-arbitrum",
            type: nz.Y.DEX,
            name: "Ramses",
            chain: r.p5.arbitrum,
            protocol: eZ.ramses,
            assets: "ezETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.ramses.exchange/liquidity/v2/0x575f1691e6391a2fcf932f9b9dfd6dbfb4792c13",
            pointsPool: ["0x575f1691e6391a2fcf932f9b9dfd6dbfb4792c13"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              nd({
                poolAddress: "0x575f1691e6391a2fcf932f9b9dfd6dbfb4792c13",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                wETHAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
                chainId: e,
              }),
          },
          {
            id: "loop-ezETH-mainnet",
            type: nz.Y.Leverage,
            name: "Loop",
            chain: r.p5.mainnet,
            protocol: eZ.loop,
            assets: "ezETH",
            boostMultiplier: 1,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["loop-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://poolparty.loopfi.xyz/",
            pointsPool: ["0xabeecb1d3414550b30694bb37ac24caad0b82ae9"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0xabeecb1d3414550b30694bb37ac24caad0b82ae9",
                ezETHAddress: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
                chainId: e,
              }),
          },
          {
            id: "lynex-ezETH-WETH-linea",
            type: nz.Y.DEX,
            name: "Lynex",
            chain: r.p5.linea,
            protocol: eZ.lynex,
            assets: "ezETH / WETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.gamma.xyz/vault/lynx/linea/details/ezeth-weth-pegged-price",
            pointsPool: ["0x057819bbc15121c923620c27303b2Ed58b87cF86"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              nd({
                poolAddress: "0x057819bbc15121c923620c27303b2Ed58b87cF86",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                wETHAddress: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
                chainId: e,
              }),
          },
          {
            id: "infinex-ezETH-mainnet",
            type: nz.Y.Wallet,
            name: "Infinex",
            chain: r.p5.mainnet,
            protocol: eZ.infinex,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["infinex-ezeth-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.infinex.xyz/",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: () => t6(),
          },
          {
            id: "fuel-ezETH-mainnet",
            type: nz.Y.L2,
            name: "Fuel",
            chain: r.p5.mainnet,
            protocol: eZ.fuel,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.fuel.network/earn-points/deposit/",
            pointsPool: ["0x19b5cc75846BF6286d599ec116536a333C4C2c14"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0x19b5cc75846BF6286d599ec116536a333C4C2c14",
                ezETHAddress: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
                chainId: e,
              }),
          },
          {
            id: "fuel-pzETH-mainnet",
            type: nz.Y.L2,
            name: "Fuel",
            chain: r.p5.mainnet,
            protocol: eZ.fuel,
            assets: "pzETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [A(1), b(1)],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.fuel.network/earn-points/deposit/",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              nc({
                poolAddress: "0x19b5cc75846BF6286d599ec116536a333C4C2c14",
                pzETHAddress: "0x8c9532a60e0e7c6bbd2b2c1303f63ace1c3e9811",
                chainId: e,
              }),
          },
          {
            id: "teahouse-ezETH-WETH-linea",
            type: nz.Y.DEX,
            name: "Teahouse",
            chain: r.p5.linea,
            protocol: eZ.teahouse,
            assets: "ezETH / WETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["teahouse-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://vault.teahouse.finance/linea/0x718e140219a2D1cd76645dfd8C45b16cA08B3454",
            pointsPool: ["0x718e140219a2D1cd76645dfd8C45b16cA08B3454"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              ng({
                poolAddress: "0x718e140219a2D1cd76645dfd8C45b16cA08B3454",
                chainId: e,
              }),
          },
          {
            id: "teahouse-ezETH-WETH-arbitrum",
            type: nz.Y.DEX,
            name: "Teahouse",
            chain: r.p5.arbitrum,
            protocol: eZ.teahouse,
            assets: "ezETH / WETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["teahouse-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://ramses.exchange/liquidity/v2/0x575f1691e6391a2fcf932f9b9dfd6dbfb4792c13",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              ng({
                poolAddress: "0xedf7732991B3De8F46fb97dcD4c5CdB28E6aD859",
                chainId: e,
              }),
          },
          {
            id: "venus-ezETH-mainnet",
            type: nz.Y.Lending,
            name: "Venus",
            chain: r.p5.mainnet,
            protocol: eZ.venus,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.venus.io/#/staked-eth-pool/market/0xA854D35664c658280fFf27B6eDC6C4195c3229B3?chainId=1",
            pointsPool: ["0xA854D35664c658280fFf27B6eDC6C4195c3229B3"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0xA854D35664c658280fFf27B6eDC6C4195c3229B3",
                ezETHAddress: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
                chainId: e,
              }),
          },
          {
            id: "compound-ezETH-mainnet",
            type: nz.Y.Lending,
            name: "Compound",
            chain: r.p5.mainnet,
            protocol: eZ.compound,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: null,
            priority: null,
            link: "https://app.compound.finance/?market=weth-mainnet",
            pointsPool: ["0xA17581A9E3356d9A858b789D68B4d866e593aE94"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0xA17581A9E3356d9A858b789D68B4d866e593aE94",
                ezETHAddress: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
                chainId: e,
              }),
          },
          {
            id: "compound-ezETH-base",
            type: nz.Y.Lending,
            name: "Compound",
            chain: r.p5.base,
            protocol: eZ.compound,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: null,
            priority: null,
            link: "https://app.compound.finance/?market=weth-basemainnet",
            pointsPool: ["0x46e6b214b524310239732D51387075E0e70970bf"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0x46e6b214b524310239732D51387075E0e70970bf",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: e,
              }),
          },
          {
            id: "compound-ezETH-arbitrum",
            type: nz.Y.Lending,
            name: "Compound",
            chain: r.p5.arbitrum,
            protocol: eZ.compound,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: null,
            priority: null,
            link: "https://app.compound.finance/?markets=weth-mainnet&market=weth-arb",
            pointsPool: ["0x6f7D514bbD4aFf3BcD1140B7344b32f063dEe486"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0x6f7D514bbD4aFf3BcD1140B7344b32f063dEe486",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: e,
              }),
          },
          {
            id: "compound-ezETH-optimism",
            type: nz.Y.Lending,
            name: "Compound",
            chain: r.p5.optimism,
            protocol: eZ.compound,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: null,
            priority: null,
            link: "https://app.compound.finance/markets/weth-op",
            pointsPool: ["0xE36A30D249f7761327fd973001A32010b521b6Fd"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0xE36A30D249f7761327fd973001A32010b521b6Fd",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: e,
              }),
          },
          {
            id: "synonym-ezETH-arbitrum",
            type: nz.Y.Lending,
            name: "Synonym",
            chain: r.p5.arbitrum,
            protocol: eZ.synonym,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.synonym.finance/",
            pointsPool: ["0x1e3f1f1cA8C62aABCB3B78D87223E988Dfa3780E"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              nT({
                poolAddress: "0x1e3f1f1cA8C62aABCB3B78D87223E988Dfa3780E",
                bridgedEzETHAddress:
                  "0x3d3e2303bEDA9d1bA8e43a5C832fc5bfB13A3a15",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: e,
              }),
          },
          {
            id: "radiant-ezETH-arbitrum",
            type: nz.Y.Lending,
            name: "Radiant",
            chain: r.p5.arbitrum,
            protocol: eZ.radiant,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.radiant.capital/#/riz-market-detail/0x368633123723cdbb711da83fc6fe7ed918a4ad7f",
            pointsPool: ["0xf4a3B4aECE09EaC774f679FD7113EF9A60bc6E25"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0xf4a3B4aECE09EaC774f679FD7113EF9A60bc6E25",
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: e,
              }),
          },
          {
            id: "euler-pzETH-mainnet",
            type: nz.Y.Lending,
            name: "Euler",
            chain: r.p5.mainnet,
            protocol: eZ.euler,
            assets: "pzETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [A(1), b(1)],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.euler.finance/vault/0x631D8E808f2c4177a8147Eaa39a4F57C47634dE8",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              nc({
                poolAddress: "0x631D8E808f2c4177a8147Eaa39a4F57C47634dE8",
                pzETHAddress: "0x8c9532a60e0e7c6bbd2b2c1303f63ace1c3e9811",
                chainId: e,
              }),
          },
          {
            id: "euler-ezETH-mainnet",
            type: nz.Y.Lending,
            name: "Euler",
            chain: r.p5.mainnet,
            protocol: eZ.euler,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.euler.finance/vault/0x82c710B9B225B43C0c90f097DB31f5f10a7F86FA",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tX({
                poolAddress: "0x82c710B9B225B43C0c90f097DB31f5f10a7F86FA",
                ezETHAddress: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
                chainId: e,
              }),
          },
          {
            id: "mitosis-ezETH-mainnet",
            type: nz.Y.Other,
            name: "Mitosis",
            chain: r.p5.mainnet,
            protocol: eZ.mitosis,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.mitosis.org/?asset=ezETH",
            pointsPool: [],
            apyFn: (e, t) => {},
            tvlFn: () =>
              nr({
                miezETHContracts: [
                  {
                    address: "0x0109e9f292516dAB3E15EfC61811C5e5a7FA5358",
                    chainId: r.p5.mainnet.id,
                    ezETHAddress: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
                  },
                  {
                    address: "0xbEd575b0FeDa4F84b71144634693DaCc07749471",
                    chainId: r.p5.arbitrum.id,
                    ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                  },
                  {
                    address: "0x96d6cE4e83dB947fF6bD1Ab0B377F23cd5D9ec2D",
                    chainId: r.p5.linea.id,
                    ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                  },
                  {
                    address: "0x8506fD66FCeD711c11F9E837EcAEC0F87C3F60A0",
                    chainId: r.p5.blast.id,
                    ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                  },
                  {
                    address: "0xbEd575b0FeDa4F84b71144634693DaCc07749471",
                    chainId: r.p5.mode.id,
                    ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                  },
                ],
              }),
          },
          {
            id: "jones-ezETH-mainnet",
            type: nz.Y.DEX,
            name: "Jones",
            chain: r.p5.arbitrum,
            protocol: eZ.jones,
            assets: "ezETH",
            boostMultiplier: 4,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.jonesdao.io/smart-lp/42161/0xaA45265A94C93802BE9511E426933239117E658f",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              t8({
                viewerAddress: "0xcd0505BdC1Afd7F859B00CbE9EA3Dc4D79667955",
                factoryAddress: "0xB2cBa14C94B30297DBFbCB7517d9105D67bB692d",
                poolAddress: "0xaA45265A94C93802BE9511E426933239117E658f",
                chainId: e,
              }),
          },
          {
            id: "form-ezETH-mainnet",
            type: nz.Y.Deposit,
            name: "Form",
            chain: r.p5.mainnet,
            protocol: eZ.form,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["form-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://meditations.form.network",
            pointsPool: [
              "0x6C587402dC88Ef187670F744dFB9d6a09Ff7fd76",
              "0xFa70Af4AF0Cc7cC4d767Ac6808C7E56375844D71",
            ],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tJ({
                poolAddresses: [
                  "0x6C587402dC88Ef187670F744dFB9d6a09Ff7fd76",
                  "0xFa70Af4AF0Cc7cC4d767Ac6808C7E56375844D71",
                ],
                ezETHAddress: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
                chainId: e,
              }),
          },
          {
            id: "form-pzETH-mainnet",
            type: nz.Y.Deposit,
            name: "Form",
            chain: r.p5.mainnet,
            protocol: eZ.form,
            assets: "pzETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [A(1), b(1)],
            rewards: [tm["form-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://meditations.form.network",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              nm({
                poolAddresses: [
                  "0x6C587402dC88Ef187670F744dFB9d6a09Ff7fd76",
                  "0xFa70Af4AF0Cc7cC4d767Ac6808C7E56375844D71",
                ],
                pzETHAddress: "0x8c9532a60e0e7c6bbd2b2c1303f63ace1c3e9811",
                chainId: e,
              }),
          },
          {
            id: "enzyme-ezETH-mainnet",
            type: nz.Y.Vault,
            name: "Enzyme",
            chain: r.p5.mainnet,
            protocol: eZ.enzyme,
            assets: "ezETH",
            boostMultiplier: 6,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://renzoezeth.enzyme.community/vault/0xc176bfb57398b4876ea6cf05d9de202120c0b03d",
            pointsPool: ["0xc176bfb57398b4876ea6cf05d9de202120c0b03d"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              t_({
                vaultAddress: "0xc176bfb57398b4876ea6cf05d9de202120c0b03d",
                chainId: e,
              }),
          },
          {
            id: "aave-ezETH-mainnet",
            type: nz.Y.Lending,
            name: "AAVE",
            chain: r.p5.mainnet,
            protocol: eZ.aave,
            assets: "ezETH",
            boostMultiplier: 3,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: 10,
            link: "https://app.aave.com/markets/?marketName=proto_lido_v3",
            pointsPool: ["0xc176bfb57398b4876ea6cf05d9de202120c0b03d"],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tg({
                poolAddress: "0x74e5664394998f13B07aF42446380ACef637969f",
                chainId: e,
              }),
          },
          {
            id: "primex-ezETH-arbitrum",
            type: nz.Y.Leverage,
            name: "Primex",
            chain: r.p5.arbitrum,
            protocol: eZ.primex,
            assets: "ezETH",
            boostMultiplier: 2,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["primex-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://app.primex.finance/#/buckets?network=arbitrum_one",
            pointsPool: [
              "0x86890E30cE9E1e13Db5560BbEb435c55567Af1cd",
              "0xc08FFBBA8c5f42beb7e6dd29142cC61855a3076B",
              "0xb5090cc9Bf041BE3Ad42F10dd82bbb061eEcD730",
            ],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tJ({
                poolAddresses: [
                  "0x86890E30cE9E1e13Db5560BbEb435c55567Af1cd",
                  "0xc08FFBBA8c5f42beb7e6dd29142cC61855a3076B",
                  "0xb5090cc9Bf041BE3Ad42F10dd82bbb061eEcD730",
                ],
                ezETHAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: e,
              }),
          },
          {
            id: "kamino-vault-ezSOL-solana",
            type: nz.Y.Vault,
            name: "Kamino",
            chain: r.p5.solanaMainnet,
            protocol: eZ.kamino,
            assets: "ezSOL",
            boostMultiplier: 0,
            hasTokenEmissions: !0,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: 5,
            link: "https://app.kamino.finance/liquidity/5TQHajVurbMnwieFUXNcABuwkjfGtYQAi5tRhXJDAqy3",
            pointsPool: [],
            apyFn: (e, t) =>
              c({
                chainId: e,
                strategyId: "5TQHajVurbMnwieFUXNcABuwkjfGtYQAi5tRhXJDAqy3",
                prices: t,
              }),
            tvlFn: (e) =>
              l({
                strategyId: "5TQHajVurbMnwieFUXNcABuwkjfGtYQAi5tRhXJDAqy3",
                chainId: e,
              }),
          },
          {
            id: "kamino-lending-ezSOL-solana",
            type: nz.Y.Lending,
            name: "Kamino",
            chain: r.p5.solanaMainnet,
            protocol: eZ.kamino,
            assets: "ezSOL",
            boostMultiplier: 0,
            hasTokenEmissions: !0,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(s.V, { variant: "info", children: "Coming Soon" }),
            priority: 5,
            link: null,
            pointsPool: [],
            apyFn: (e, t) => {},
            tvlFn: () => null,
          },
          {
            id: "jupiter-ezSOL-solana",
            type: nz.Y.DEX,
            name: "Jupiter",
            chain: r.p5.solanaMainnet,
            protocol: eZ.jupiter,
            assets: "ezSOL",
            boostMultiplier: 0,
            hasTokenEmissions: !0,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: 5,
            link: "https://jup.ag/",
            pointsPool: [],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              na({
                chainId: e,
                ezSOLAddress: "ezSoL6fY1PVdJcJsUpe5CM3xkfmy3zoVCABybm5WtiC",
              }),
          },
          {
            id: "orca-ezSOL-solana",
            type: nz.Y.DEX,
            name: "ORCA",
            chain: r.p5.solanaMainnet,
            protocol: eZ.orca,
            assets: "ezSOL",
            boostMultiplier: 0,
            hasTokenEmissions: !0,
            badges: [],
            rewards: [],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: 5,
            link: "https://www.orca.so/pools?tokens=ezSoL6fY1PVdJcJsUpe5CM3xkfmy3zoVCABybm5WtiC",
            pointsPool: [],
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              nn({
                chainId: e,
                ezSOLAddress: "ezSoL6fY1PVdJcJsUpe5CM3xkfmy3zoVCABybm5WtiC",
              }),
          },
          {
            id: "cian-ezETH-mainnet",
            type: nz.Y.Leverage,
            name: "Cian",
            chain: r.p5.mainnet,
            protocol: eZ.cian,
            assets: "ezETH",
            boostMultiplier: 3,
            hasTokenEmissions: !1,
            badges: [],
            rewards: [tm["cian-points"]],
            tag: (0, a.jsx)(a.Fragment, {}),
            priority: null,
            link: "https://yieldlayer.cian.app/vaults/0x3D086B688D7c0362BE4f9600d626f622792c4a20?chainId=1",
            pointsPool: null,
            apyFn: (e, t) => {},
            tvlFn: (e) =>
              tq({
                poolAddresses: [
                  "0x7abe065d55b7a092f8d1c1a67e174707d6f2ac07",
                  "0xD6813390a28c8e3bC0dC838a346bD48f98B6Da6F",
                ],
                token: "0x74e5664394998f13B07aF42446380ACef637969f",
                chainId: e,
              }),
          },
        ],
        nC = nF
          .reduce((e, t) => (e.includes(t.chain) || e.push(t.chain), e), [])
          .sort((e, t) => {
            let n = { [i.J.Solana]: 1, [i.J.EVM]: 2, default: 10 };
            return (
              (n[e.chainType] || n.default) - (n[t.chainType] || n.default)
            );
          }),
        nB = nF.reduce((e, t) => ((e[t.id] = t), e), {});
    },
    87449: function (e, t, n) {
      var a, i;
      n.d(t, {
        Y: function () {
          return a;
        },
      }),
        ((i = a || (a = {})).DEX = "DEX"),
        (i.Lending = "Lending"),
        (i.CDP = "CDP"),
        (i.Leverage = "Leverage"),
        (i.Perpetuals = "Perpetuals"),
        (i.L2 = "L2"),
        (i.Various = "Various"),
        (i.Wallet = "Wallet"),
        (i.Deposit = "Deposit"),
        (i.Other = "Other"),
        (i.Vault = "Vault");
    },
    61517: function (e, t, n) {
      n.d(t, {
        D: function () {
          return d;
        },
        K: function () {
          return c;
        },
        M: function () {
          return l;
        },
        M0: function () {
          return b;
        },
        PT: function () {
          return w;
        },
        T3: function () {
          return f;
        },
        ZC: function () {
          return E;
        },
        ZO: function () {
          return g;
        },
        _A: function () {
          return h;
        },
        au: function () {
          return A;
        },
        bT: function () {
          return x;
        },
        gL: function () {
          return T;
        },
        uf: function () {
          return m;
        },
        wX: function () {
          return v;
        },
        zZ: function () {
          return y;
        },
      });
      var a = n(15892),
        i = n(71901),
        r = n(83718);
      let s = { maximumFractionDigits: 2, minimumFractionDigits: 2 },
        u = {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          style: "percent",
        };
      function o(e) {
        return new Intl.NumberFormat("en", e);
      }
      function p(e) {
        return "number" == typeof e ? e : Number(e);
      }
      function l(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = p(e);
        return o({
          ...s,
          maximumFractionDigits: n < 0.01 ? 4 : 2,
          currency: "USD",
          style: "currency",
          signDisplay: "never",
          ...t,
        }).format(n);
      }
      function y(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return o({
          ...s,
          currency: "USD",
          style: "currency",
          compactDisplay: "short",
          notation: "compact",
          minimumFractionDigits: 2,
          ...t,
        }).format(p(e));
      }
      function d(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return o({
          ...s,
          compactDisplay: "short",
          notation: "compact",
          ...t,
        }).format(p(e));
      }
      function c(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = d(e, t),
          a = n.match(/([\d,.]+)([A-Za-z]+)/);
        return a ? { value: a[1], notation: a[2] } : { value: n, notation: "" };
      }
      function m(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return o({ ...s, ...t }).format(p(e));
      }
      function A(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!e) return 0;
        let n = p(e);
        return o({
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
          ...t,
        }).format(n);
      }
      function b(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "Pts",
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (!e) return "-";
        let a = p(e),
          i = o({
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
            ...n,
          }).format(a);
        return t ? "".concat(i, " ").concat(t) : i;
      }
      function f(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return o({ ...u, ...t }).format(p(e));
      }
      function T(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return f(e, {
          ...t,
          maximumFractionDigits: 0,
          minimumFractionDigits: 0,
        });
      }
      function g(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = p(e);
        return 0 === n
          ? "0.00"
          : n < 1e-6
          ? "<0.000001"
          : o({
              maximumFractionDigits: 6,
              minimumFractionDigits: 2,
              ...t,
            }).format(n);
      }
      function w(e) {
        return "" === e || 0 === p(e);
      }
      function h(e, t) {
        let n = Math.abs(e - t);
        return e >= t
          ? { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 }
          : {
              days: Math.floor(n / 86400),
              hours: Math.floor((n % 86400) / 3600),
              minutes: Math.floor((n % 3600) / 60),
              seconds: n % 60,
              total: n,
            };
      }
      function E(e) {
        let t = new Date(),
          n = new Date(t.getTime() + 1e3 * e);
        return (0, a.B)(n, t);
      }
      function v(e) {
        return (0, i.WU)(e, "MMM dd, yyyy, kk:mm:ss");
      }
      function x(e) {
        return 1e8 > Number(e) ? 2 : (0, r._p)(e) ? 1 : 0;
      }
    },
    83718: function (e, t, n) {
      n.d(t, {
        GC: function () {
          return p;
        },
        RM: function () {
          return r;
        },
        TX: function () {
          return s;
        },
        _p: function () {
          return o;
        },
        uz: function () {
          return u;
        },
        xE: function () {
          return i;
        },
      });
      var a = n(61574);
      n(61517);
      let i = (0, a.Z)(0);
      function r(e) {
        try {
          if ("" === e || null == e) return i;
          return (0, a.Z)(e);
        } catch (e) {
          return i;
        }
      }
      function s(e) {
        return 1e4 * e;
      }
      let u =
        "0x0000000000000000000000000000000000000000000000000000000000000000";
      function o(e) {
        return Number(e) >= 1e9;
      }
      function p(e, t) {
        return e && t ? r(e).div(r(t)).toNumber() : 0;
      }
    },
    34049: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/FX.6a078f03.svg",
          height: 400,
          width: 400,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    65481: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/aave.8a4c1ada.svg",
          height: 254,
          width: 254,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    37430: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/aerodrome.ab774409.svg",
          height: 800,
          width: 800,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    60792: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/airpuff.20682372.svg",
          height: 33,
          width: 62,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    87064: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/aura.10544045.png",
          height: 173,
          width: 173,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEVyNMqRTNWWSteqhNuORtORStJuMc2wiN2OQ9RMaXGAOtJ0Mc1tMMtkJsq4k99rJs2petuic9qbatiaUOBsKM2PW9R7MtmLQdx+Q9qKSdvQGxo4AAAAEHRSTlMv/u/48C3r/LAA7LD3sP2t/ZswEAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAERJREFUeJwVyUkSgCAMBMABAiQsVsKm/v+jln1tCGprHQKUs9ZKAM+8d3g66NIxLCd4zWY60l9q4a2Ifjp3F0AiE3GUD2ezAru1VGh4AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    3419: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/balancer-dark.2a50003f.png",
          height: 120,
          width: 120,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEX+/v7////////8/PxMaXGBgYH09PT6+vqzs7P///8ODg4KCgppaWm0tLRQUFBRUVEfUMEXAAAACXRSTlMu7bP2AP33rv5d0rhKAAAACXBIWXMAACE4AAAhOAFFljFgAAAAN0lEQVR4nEXKuQGAMBAEsbmftQ303y0hikXiEU6CSZKBq6taQ+he+5IROnsdGa563tL8OZnuIT8x5wF31l50XQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    21528: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/balancer-light.73277f38.png",
          height: 120,
          width: 120,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEXx8fLw8PH4+Pn4+PlMaXGAgIDs7O3h4eL///8LCwuwsLD39/hkZGRNTU5+fn9xcXHScWUuAAAACHRSTlMu9rHuAPqw+hs51/QAAAAJcEhZcwAAITgAACE4AUWWMWAAAAA5SURBVHicRcq5AYBADASxWdsH63ug/24JUSyKkIKCtO2EsJ73diDP7mmRa3fvlYTHOcPx5+KSLuoDMG0BYKBmB/gAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    35340: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/beefy-dark.fc08d818.svg",
          height: 699,
          width: 699,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    63968: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/beefy-light.855210c4.svg",
          height: 699,
          width: 699,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    60797: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/blackwing.1058285c.jpeg",
          height: 400,
          width: 400,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGfB//EABUQAQEAAAAAAAAAAAAAAAAAABQj/9oACAEBAAEFAon/AP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABgQAAIDAAAAAAAAAAAAAAAAAAARE0KB/9oACAEBAAY/ArSvD//EABYQAAMAAAAAAAAAAAAAAAAAAABhsf/aAAgBAQABPyF0w//aAAwDAQACAAMAAAAQA//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABoQAAICAwAAAAAAAAAAAAAAAAERACExYbH/2gAIAQEAAT8QAu0SGfqn/9k=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    29426: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/camelot.3996d1f8.svg",
          height: 200,
          width: 200,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    90807: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/cian.69b0b2a6.png",
          height: 500,
          width: 500,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEXHlgD+1QL6zgH+1wP70AH/1wH/3wHWrwbTrAaEaQ3RqQbguwXvyQODaQ2UkukoAAAAC3RSTlMB/SUxMcnD/P3+/Zr8koYAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAzSURBVHicRYpJDgAgDIQYW9fq/79r6kVOJADgTlKqVAvQ9urRwDRDW47ppFim8dKfwQ24Ia4A7WDDqrgAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    93752: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/compound.0ca4f357.svg",
          height: 72,
          width: 56,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    72811: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/contango.14b3abe8.png",
          height: 400,
          width: 400,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEUAAAAHExAAAQEAAQEVQz0AAgIAAQFMaXEAAAAAAAABAwQAAAAQLS8YNE0AAAAlZ3EAAAAAAQE5tKFT4fk0qZVB1LxL9djBPy8pAAAAEXRSTlPy/auu/SvrACnmqC78/rL6sMRtIcMAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABASURBVHicFcZJEoAgEASwBmZhWNQG9f9Ptcwp8JqBoo4aJFMoGuW5EzOM8i4SMI4lfxrPvQcLNDgnrcP1Ao7uH1i+ApeHRacJAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    96427: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/curve.a3128844.png",
          height: 120,
          width: 120,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEXw8fBDwfT12Lfn4Bj4+Pfz9vL3+Pv5+fn29/ZMaXHp8P3n4feb/Zzt09W9PEL////v9un69PTyXAjz7//O+Bv/pT/f/PLQKAHz9NiZ+G+j6UuV/WvNfoJ5AAAAD3RSTlMu/fr+rvX17bIA+v7+/vo7ilXgAAAACXBIWXMAACE4AAAhOAFFljFgAAAAQ0lEQVR4nB3KSRKAIAwAwUEDCW4B3PX//7TKPjcZS9HIoHWurmC+nHvnQrpa2/qipHI/71QU8xCOwQV0Hf+ckRiF/AFfNAKTPB0mLwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    67906: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/cyber.97e41541.png",
          height: 190,
          width: 190,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEVtbW0AAAAAAAABAQFMaXEAAAAEBARSUlIDAwMAAAABAQEqKipgYGCHKfsUAAAACnRSTlP79CysALPp/vA1f4E0oQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADZJREFUeJxFyjECwCAIA8AkgGD0/+/t0MH5DqkgQwkt215CHNg4hXHjXg/oBtp89OfZSBVZOz8zIAF4smUguwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    51994: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/dolomite-dark.b74abe89.svg",
          height: 284,
          width: 284,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    48929: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/dolomite-light.2ede8752.svg",
          height: 284,
          width: 284,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    88157: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/dtx.d693b253.png",
          height: 3030,
          width: 3030,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEUCUv+XuP8AR/8sb/9pmf9gk/9RiP/GDvgmAAAACXBIWXMAAG66AABuugHW3rEXAAAAI0lEQVR4nGNgQAJMTBCakYWFEcxgZmRkRmUwsrJCpOCKIQAABqUAL1wmbAEAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    48600: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/enzyme.60aefe37.svg",
          height: 683,
          width: 683,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    8370: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/euler.08194078.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    67437: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/extrafi.d9d57205.svg",
          height: 375,
          width: 375,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    29734: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/form-dark.bb321b85.svg",
          height: 812,
          width: 865,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    88100: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/form-light.85a39ceb.svg",
          height: 812,
          width: 865,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    46314: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/frax.c70a005e.svg",
          height: 283,
          width: 283,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    89887: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/fuel.dad5bb93.png",
          height: 2e3,
          width: 2e3,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEUA940A940A+I4A9IxMaXEAQCQA/5MAd0QAzXUAnFoA/ZMA8osAYTcAyXMACwak6u+bAAAACnRSTlMo7ankAPyn/f7+luAsGAAAAAlwSFlzAAALEgAACxIB0t1+/AAAADlJREFUeJw1y1EOgCAMRMHXQkF3q/c/LomJ/zNMMiKZMGRrQKre3l6E7upLQbi35WC5HlkJw/rw3w81WQF86W078gAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    89616: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/gearbox.621badc9.svg",
          height: 48,
          width: 50,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    62772: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/hyperlock.68220ff3.png",
          height: 240,
          width: 240,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEXK4ApIWB+/1grN4wlMaXHK4AnN5ArW7Qt8jxabrhLoqkHBAAAAB3RSTlP9/S/vALSwf4SKDQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADJJREFUeJxFyzESACAIxMAcKIf//7BD4dhtkbBiw45FpMEZlHWOXCSSRA66B+WB68dvvx6EANm5Y35yAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    2492: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/infinex-dark.de09406c.png",
          height: 840,
          width: 840,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEX/+/j+tZn/////////wKlMaXH/////////////////////////u6L/zrv+0sHDbQ0jAAAAC3RSTlP7/euu/QCzLiww7IxifYIAAAAJcEhZcwAAITgAACE4AUWWMWAAAAA5SURBVHicFcbHEcAwDASxZVI62v2XqxFeoOaAsYrtEjqTUGaaArD+DX/5+mXIulPBdEk6m1rhHqsuMcMBby32BGMAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    19374: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/infinex-light.e0e2c10f.png",
          height: 840,
          width: 840,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEV6PSsTFB4PEx6HQiwPEh5MaXEREx8PEx8PEh4TFSAhGyFfMSeM/G84AAAACXRSTlP+Luv99gCzrbC5o597AAAACXBIWXMAACE4AAAhOAFFljFgAAAANklEQVR4nEXKuRHAMAwEsT2+ItV/vx5FzhCAVEWUEtnMjImzgE8T61xfe7g81Dqw/efUMWvlByuPATMAGAzVAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    95737: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/init.05d5933c.png",
          height: 400,
          width: 400,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEUSEhIRERETExMQEBBMaXERERDHxsfHx8cSExJtRqcaGhs8Oz3h4uBwaHrzPS5TAAAACnRSTlMr8eivAKv6+qf6Thc1qwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADhJREFUeJxFyzsSgDAMxcDnXwA5vv91mdDQqVgpVWahlBzApZtn9qLkTM/GZOzuE8Xqvogfp+LbXzk0AY9S1slZAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    73608: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/ion.31f9f262.svg",
          height: 54,
          width: 50,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    32161: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/ionic-dark.9821822c.png",
          height: 2560,
          width: 2560,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEUAAgEy33gehkgUXTEWYDM38YQfikofiksYajkXIWYnAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAKElEQVR4nGNgQAAmRkYmEM3OyszMCmIxsjAwsDBCZWEMiBRIlg1JLwAJ2wBA/FUbAgAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    41464: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/ionic-light.e37a27fc.png",
          height: 2560,
          width: 2560,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEU5/og9/5IEFgsad0A29YMkolckn1YJJxUfi0uDN6+VAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAMElEQVR4nCXKwQ0AIQzEwNkkQP8dnzj8smQjM3Hpqka61qoOZye7MDzBS8y582/hAxBrAG0m+HzIAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    54648: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/ironclad.24dffd82.jpeg",
          height: 400,
          width: 400,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBv/aAAwDAQACEAMQAAABqCeX/8QAFRABAQAAAAAAAAAAAAAAAAAAEyP/2gAIAQEAAQUCov8A/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQIBAT8BW//EABYQAAMAAAAAAAAAAAAAAAAAAAARYv/aAAgBAQAGPwKGf//EABkQAAEFAAAAAAAAAAAAAAAAABEAATGx8P/aAAgBAQABPyHQxiiv/9oADAMBAAIAAwAAABDz/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Qj//EABYRAQEBAAAAAAAAAAAAAAAAABEAIf/aAAgBAgEBPxBDL//EABkQAAEFAAAAAAAAAAAAAAAAAABRcYGh8P/aAAgBAQABPxB+s2WD/9k=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    61696: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/jones.04f0b99e.png",
          height: 97,
          width: 97,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEU3HQk2KyKETTGMTBBKJglJMR9JMyEyIBJMaXGEUiw+KBdXLw5XPy5WLhZHOCtTPy6CYENULhBXLAs9MylHMiAoIhx4RSlnQSwtFwSwYz/Vd0q5cTZcAAAAFXRSTlP+/v0e3/rj/gAl/pmk/vGwLamh6u7EuNNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQklEQVR4nAXBCRaAIAgFwK+CgLv11Or+B20GaiXGHBQWnQgooDiXEpDRFp9dH0Lz37t9JfTjWYAL415LQAYdnXma/lEUAnYueEtxAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    61325: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/juice.ff5f2882.svg",
          height: 40,
          width: 40,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    6349: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/jupiter.274d5ccb.svg",
          height: 250,
          width: 253,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    16885: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/kamino.5cbe1b90.jpg",
          height: 400,
          width: 400,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGRB//EABUQAQEAAAAAAAAAAAAAAAAAAAES/9oACAEBAAEFAkJ//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQAGPwJ//8QAFxAAAwEAAAAAAAAAAAAAAAAAAAEhcf/aAAgBAQABPyGindP/2gAMAwEAAgADAAAAEAP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/EH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/EH//xAAXEAEBAQEAAAAAAAAAAAAAAAARATEA/9oACAEBAAE/EK5mGsAYar3/2Q==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    26255: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/karak.0118a22d.svg",
          height: 35,
          width: 30,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    16612: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/kim-exchange.3bfe47dc.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    58243: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/kinza-dark.baa11e5e.png",
          height: 1024,
          width: 1024,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEW8vLwyMjLX19cAAADe3t5VVVXt7e2ysrJeXl5oaGiqqqqDg4OHh4cJCQkEBARhw/WPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAO0lEQVR4nDXLNw7AMAwDQJIqluXy/+caCJDltoMR7qCBXueUE6g7xi1AK/fOJSiEj1ZHtBrMaTaT+PsDLqcBOyG/52oAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    55494: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/kinza-light.91ab6dad.png",
          height: 1024,
          width: 1024,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEXuxVLsvjf//vzkti9MaXHw0HfktCXuwUHvxUv56b713Zr/9sf/9L/912rvzGnrwEYqXIzgAAAACXRSTlP4sv0vAP0v6uqamRikAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAO0lEQVR4nBXLRxLAMAgAsaXZBlz+/9tMdBc+BGQ4Y7Vqr4G0RmgL1Kt6BST3kiAnMuMINrfqnobb380/Mj0BXyKUraQAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    28654: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/l3x.047c150e.svg",
          height: 69,
          width: 171,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    48978: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/layerbank.c0ccf1f5.svg",
          height: 400,
          width: 400,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    19329: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/lista.1b26d6d0.svg",
          height: 300,
          width: 300,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    62991: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/loop.ceb5f015.svg",
          height: 951,
          width: 951,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    93703: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/lynex-dark.fd2395d6.svg",
          height: 896,
          width: 1556,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    93834: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/lynex-light.d4200a3c.svg",
          height: 896,
          width: 1556,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    32894: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/mendi.fb278752.png",
          height: 384,
          width: 384,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEUAAhCQlJrKzdC8vcL///9MaXGj6f+KjpW27f7///8tyv/K8v9Hzvz09PTG9v8wx/vz9PTJ9//3//8aITBG3P+lpam/9f/MycvOycsx4nO6AAAAEnRSTlP96rC0MADx/Pkv/rT687D687DNhmKuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQElEQVR4nAXBBwKAIAwEsEM6wVkK+v+XmoC9i3RnkGRrKYQzd7MrH9iKiFiG452q87uxDQAYG6gMYBQCe1Wtzj9lCQKTOcdn5gAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    93369: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/mitosis.a951cf8f.svg",
          height: 615,
          width: 615,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    45471: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/molend.9327761f.svg",
          height: 36,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    38193: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/morpho.69dda897.svg",
          height: 60,
          width: 74,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    85679: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/nile.a7d67159.svg",
          height: 50,
          width: 50,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    6529: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/notional.fce9a2ef.png",
          height: 991,
          width: 1e3,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEUgursy+P8x3t4y+f8hu7wz+/8ht7kz+P8hubshtbcv3eE1+v4iv8Agt7mh2taiAAAADnRSTlN7ewKfhoehbZ9HHUysZ52LvBUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAwSURBVHicNcZBDgAgCAOwMUEE9P/fNTHSU+EkFZgY2bH6EamOBbBeGPrD3DB3IXkuHyYA85lhGHIAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    31074: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/orbit.2e6aff85.png",
          height: 2257,
          width: 2048,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAJ1BMVEX4aBxMaXH1Zh33aBzwbBz1aB39aRzzYxvuYhj2Zhz8aRv8ahz/bx1fFlBKAAAADHRSTlOSACpBFWBLGwo4vuMlIctWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAXBiQHAIAwDsbNDPuj+81ZCmh0JmYtF4zFN1r6tJKO+isT0aYyCSwjpxJF+HRwA2gAUejoAAAAASUVORK5CYII=",
          blurWidth: 7,
          blurHeight: 8,
        });
    },
    50916: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/orca.d4a976a2.svg",
          height: 50,
          width: 50,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    65073: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/pac.c6dc0abb.svg",
          height: 277,
          width: 262,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    13592: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/pancakeswap.4e3b0e5f.png",
          height: 199,
          width: 198,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEVMaXGSVSCXWSZtOw2LXSeybjifXyqFShnIgUmxbTa2iUuqaTLrpmTCklS7dT5sNwoAAACtbzZnNQgAAADeklbVi1HpmFjNg0jboF3q96A5AAAAFHRSTlMAfP1Abe61Vv79ycf95epgA9dWAvBOS+4AAAAJcEhZcwAACxMAAAsTAQCanBgAAABBSURBVHicBcEHAsAgCASwU1HAUTtA/f9LmwCszMoAwiplBQBz52u/QMru7jmhWRSJq+AxFVFroNPN+iHcVMeo9P1XDgK1sq0naQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    88923: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/particle-dark.1a91bfab.png",
          height: 1e3,
          width: 1e3,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEX///////////////////////////////////8HBRbfAAAACXRSTlMB8L0wkCQq6pUx1BKHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nEXLwQ0AIAzDQDdpCftPjPjA7yTLYFXJ4PRMx6gBWmRdrHy85Nozu+6mROYAGQgAuZ0IX/cAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    16936: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/particle-light.a1f3dfee.png",
          height: 1e3,
          width: 1e3,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEUAAAAJCQkJCQkKCgoKCgoGBgYLCwsJCQkKCgqiZvr/AAAACXRSTlMB8L0wkCQq6pUx1BKHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nEXLwQ0AIAzDQCdpKftPjPjA7yTLEEsORNVdCi6AMloXaz5einb31t0843AAFHAAoXnzltUAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    49773: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/pendle-dark.2bbfb247.png",
          height: 120,
          width: 120,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEX///////////////////////9MaXH///////////////////////////////9CXjA+AAAAD3RSTlOAeooWWa4Ad78nm+n9UWimf2c+AAAACXBIWXMAACE4AAAhOAFFljFgAAAAOElEQVR4nB3KORLAIBADMNt7B/j/dxnSqRByinRLmJoQDf4FQTnqASBKUT+8W4Qcs/bSyzmx41heIZQBDtwPf/YAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    79406: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/pendle-light.d5fe17f3.png",
          height: 120,
          width: 120,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEWNjY2RkZGKioqPj4+4uLiKiorg4OCNjY2QkJBMaXH19fX///+xsbFycnKlpaXU1NT8/PyPj4+YmJiIiIinp6fDw8O7u7uY4xUKAAAAEXRSTlP7LS+z+vUur+4A9Pq0Mez6sLDTGVoAAAAJcEhZcwAAITgAACE4AUWWMWAAAABCSURBVHicJcpBDoAgDAXRj5SWgoptwfsf1RB3k7yB8lmQk+K6V5jXAzIpDC4o8w0zqyhOf+Q1DJu49eZ7Vn46SdIPZV0Cw9C5lPcAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    27150: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/primex.e84e3cb2.svg",
          height: 116,
          width: 150,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    4106: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/prisma.b383bc35.svg",
          height: 164,
          width: 164,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    28027: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/qidao-dark.19443f00.svg",
          height: 258,
          width: 258,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    10484: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/qidao-light.9234b850.svg",
          height: 258,
          width: 258,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    11438: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/ra.0708e116.png",
          height: 1080,
          width: 1080,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEUaHSEuMDMRExUNDRBMaXGRkZIWFxkWFxpxcnMbHB8rLC8aHB6zs7QWGBtoaWqhoaIdHyIyMzTGxscuLzG8vLwoKixnaGk/QEFLTE5WV1mlsLDiAAAAEXRSTlMvLer+AP60+v7w7bD8rPr+s4pnA9UAAAAJcEhZcwAACxMAAAsTAQCanBgAAABCSURBVHicBcEHAsAgCASwU0HA0RZHx/8/2gQULpEcCCGK+zagvtxW+zpEF/OpESaTx5gR9Vb1wztQnpR2AQjZLIN+WdACdMSE9QIAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    6110: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/radiant.42f1b84c.svg",
          height: 1e3,
          width: 1e3,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    23912: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/ramses.18ba146e.png",
          height: 400,
          width: 400,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUKDA4DBAeYmJxcXWEnKSxGSEt/gIQVFhk+ndzjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALklEQVR4nC2LyQ0AMAzCcM79N66CygdhYSHnil0vMiKRqKiK4gAY9UjTPoGdrz8OKwBfs+JFBwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    72130: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/blast-gold.55bb98ed.png",
          height: 63,
          width: 63,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEX//wb39wf5+QZMaXHh4QD//wX19QX8/AW4uAWjowTCwgWsrATh4QV9fQPh4QZqYw1eAAAADXRSTlP+IPUAAmJjW/77/vz6ceKIQgAAAAlwSFlzAAAQnAAAEJwBJs06NAAAADhJREFUeJw1y7EBwCAMBLH7N8YGkuw/LlXUixGaUzGIMlCBzLO2RXLeXk7Sp3uTyN9qLKIAV/D3Cyc5ARVBZRLaAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    21400: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/blast-points.b54dc744.png",
          height: 63,
          width: 63,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEUuLhAtLRJ0cykgIAs7OxcAAAAmJg8kJQ8oKA5MaXFraSasqTwpKRGDgS+XlTU5ORZlYyVWVSAaDmlTAAAADnRSTlMg8PtaXwL0/mIA+v72/B7F0JUAAAAJcEhZcwAAEJwAABCcASbNOjQAAAA7SURBVHicBcGBAcAgCASxU6EPatHuv2wTPDEjnbQtPZbQvj5vg1CvWicIVa1XAfv2eRrkkPSMxJMI0n8/GQHGg25lfQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    34239: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/form-dark.6b7edd9d.png",
          height: 63,
          width: 63,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEUDAwMAAAACAgJMaXEJCQkAAAAFBQWenp4hISFcXFxKSkqSkpIEBARvb28rKyuh1cD8AAAADXRSTlMgYv0A8wJa/Pv88Pxf1e4lrwAAAAlwSFlzAAAQnAAAEJwBJs06NAAAADpJREFUeJw1y0EOgDAIBdHhQ6Fq4P7HNY1xN4s3LMcMX3jGzE6H6KoJsP10XzJs6gvukhQcLCmdf38BMLoBPXdtqgIAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    51889: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/form-light.5fd903ca.png",
          height: 63,
          width: 63,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVMaXH////f39+ioqJjY2P9/f3v7+/////+/v7////8/Pz////w8PC2trbh4eGUlJSOjo4hgHmzAAAADnRSTlMAWvv8/PT3Yh/+WiFa8GJE5A4AAAAJcEhZcwAAEJwAABCcASbNOjQAAAA8SURBVHicLctBDoAwCEXB1wp8EG29/2mNibvZDNBSAgxfa57Qsc2mJwrbz1FC60ffVlXecEWVj6+l1PACOz0BpyZhexcAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    95427: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/frax.9e3fb09b.png",
          height: 63,
          width: 63,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEXh4eF6enomJiafn59MaXEAAACIiIg9PT0AAABzc3NHR0cPg18gAAAACHRSTlMgYvT7AAJa+v3nLcoAAAAJcEhZcwAAEJwAABCcASbNOjQAAAAvSURBVHicRYuxDQAwCMNCCFXg/4M7lW6WbKOECKigQ5tHADuzCYRzJh0fVm389gslaAEJLbZZKAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    54543: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/hyperlock.f2aa8b7b.png",
          height: 63,
          width: 63,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEWvxQfD2QrW7ghMaXF/fwBpexrB1AihtRBjcxuBkxbB1wjg9wmLnhZKWyARk4VDAAAAC3RSTlMgYvMAAv5b+vz6W93GaJwAAAAJcEhZcwAAEJwAABCcASbNOjQAAAA5SURBVHicNctZDsAgDMRQT0JYOnD/61ao6vezaYlENrKHHU9C7DF2gFznlIU8q6Z1aa1LX9yTf38BLdcBQ3DszqkAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    93594: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/infinex-dark.59074407.png",
          height: 63,
          width: 63,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEVMaXH/////+/v+xbD+u6L/8+//9/f/////9/f9z73/////3tGvyzQXAAAACnRSTlMA9GL9/iAhWmP6q5lhFwAAAAlwSFlzAAAQnAAAEJwBJs06NAAAADdJREFUeJw9yjkOACAMxEBncwDJ//+LaOgsjYHUToBl3bagbI6PFWoPjxbq8HhRNn4e/RlyK+ECKFYBHgsiJbYAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    80179: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/infinex-light.ad4cd332.png",
          height: 63,
          width: 63,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUVFB4KER9MaXEbFx56PCpnNCcNEh5NKybp1UWjAAAAB3RSTlNg/QAg/vvwIkOX9AAAAAlwSFlzAAAQnAAAEJwBJs06NAAAAC5JREFUeJw9i8kJADAQhJzZq/+OQwLZn6BiB4SNkSRM9FRNByizUjzIC6s2/vsBF4AApuaDYeMAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    26425: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/init.2aae853c.png",
          height: 63,
          width: 63,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEUZGRkWFRYICAhDQ0MLCwq6urkkJCRMaXEmJCkAAABcTXAPEgsKCgp8fHxVVVVHQFKkpqJ0dHVKMWw60pJgAAAADHRSTlNdVfX67/weABsC++sl7z8GAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAPklEQVR4nB3LSxbAIAgDwKBgwEb7uf9h+9rdbAbFBJIFmkvNiDyeGbcPQPO8QgAUe39IX70vH6A1qYH4+2C9QXMBwRRsOk0AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    25820: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/ion.2676dfcd.png",
          height: 63,
          width: 63,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEVMaXEAtdYAmrcAaYYAw+EAO0oARVQAlrUAtNYAnb0AcZAAc5EAq8wAn7oANUEAnLgAc5EAbYMAe5sAxei4dVSQAAAAEXRSTlMAjWF7FXH3jfz8vdralb7uZqXKwzUAAAAJcEhZcwAAEJwAABCcASbNOjQAAAA3SURBVHicY2BAAoyMEJpXmIMdRLNy8nALCTAwMPAJMjFxcoFE2Nj4OZhBcuycEDUMDCwsDAwMACE8AQFqODMiAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    71490: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/jto.1d1d3780.svg",
          height: 100,
          width: 100,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    62067: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/karak.fe88bbd5.png",
          height: 63,
          width: 63,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEUDAQACAQBMaXErEgAAAAAAAAABAAAAAAC9UABVIwDpYQChRAD1TZ40AAAAC3RSTlP6IAD+AlpjYv76+iae2P0AAAAJcEhZcwAAEJwAABCcASbNOjQAAAA1SURBVHicNcvBDQAgDMNApwFaYP99EUj8/DjTQmMoGtEBeiCYE0TiKpMk7BeCWkYX2xf//QAb1ADK6hDtNAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    172: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/layerbank.41d52714.png",
          height: 63,
          width: 63,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVMaXE8PENcXGEKChEICBCmpqgLCxQWFhwRERkDAwYxMTgLCxGRkZUJCREBAQhzc3hHR014lSRjAAAADXRSTlMA/vxi8P1aIGP3/Vr86M7dgwAAAAlwSFlzAAAQnAAAEJwBJs06NAAAADpJREFUeJwli0EOgDAIwDqEAdMx//9aQ7w1aQt4hAPMrMoJrmvIUCf2I2b7IsrOaXB9ZbXqeOfd279/ODEBl3wIy4MAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    67212: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/linea.991424c1.png",
          height: 63,
          width: 63,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEUDAwMBAQEKCgoBAQFMaXEAAACBgYEvLy8PDw9BQUEeHh6bm5teXl4Uo6KgAAAACnRSTlNg/h/yAAL7/iH9cWcLOQAAAAlwSFlzAAAQnAAAEJwBJs06NAAAADdJREFUeJxFyzkSgDAQxECNZy8b/v9eChIyBS0yFqxIAksmGLf35QFVq8Ub97FgvKuO58ffPpEPIXAA9H64VcQAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    19630: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/loop.e84d8e97.png",
          height: 63,
          width: 63,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAdVBMVEVMaXEFBAscGkRZSsJxWtTXnvugePEQDjMEAw40KpA6NmypkO5/f/8iHFU/L38CAhEREUYwKHGZbfCAYtm5gPwtLFaamci7gv+HectpX6e0n/yGafnOjf+ZlelmUsY2L4/LmP8UEy1ZTKRoXNm8o/9OTKZdUeA22kXNAAAAHnRSTlMA+/tiIB9aIGNi/f0CWiBa8PD28GP6/Pf8/PrwY/wAWqQ8AAAACXBIWXMAABCcAAAQnAEmzTo0AAAARUlEQVR4nAXBhQHAIBAEsMPt625Adf8Rm4BgrDUgoOAnYxVQNt4PvDZw15LS+DqIOMf7+ARkF8L6bBLQbc6TBgiq3xXoB3qSA7Bd0ixWAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    67606: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/mendi.67baff3a.png",
          height: 63,
          width: 63,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEX///5scXpyd4CL5P8BAAOB4P1///9MaXHy/P/q6+zY/P6YlZqVlJrV09UxOEay/f/5/v9R3/97gIgax/8oyv+6ophiAAAADXRSTlMg8Pb3/fUCAGBf/Pz8dHA6JwAAAAlwSFlzAAAQnAAAEJwBJs06NAAAAD5JREFUeJwFwQkCgCAMA7AC29qhyKH/f6sJgpDAANX2biLgn/vrgGZfq09B4z7nGgKKmVkBmPV5ahJBZILxA0hvAfHdYeD7AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    34171: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/ra.f7141612.png",
          height: 63,
          width: 63,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVMaXEqKy1WV1iXmJkWGBoaHSAeICIUFRcgIiUwMDaio6Q8PT8fICMNDxK2trd9fX5CQ0VvAy3/AAAAD3RSTlMA9P78IVv7/WIf/fjzYf4MfZiYAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAPElEQVR4nCXLxw3AMAwAsZOtZrll/2mDIPwTGJkDwCI8DFRaryvKfk6vmpt0uadHovM2b0vBVoTb1/7+AjcVAYyXW26dAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    99309: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/swell-black-pearls.d0ff0e20.png",
          height: 63,
          width: 63,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEVMaXElLTMGDBhsbXMHDhsJCg4cICIGBgYEBAdbaHIiISQbGhyBjJZWVVk8Q0vK2NlpgIqz4+5hlKinpKAeJi44OD0vMDMGBQUJBwi5wMhaWmAxUGA+Xmzp//+2bsMZAAAAFHRSTlMAaWf5KPNEFVr99Nz7+fzh8Pn8SVGKI+MAAAAJcEhZcwAAEJwAABCcASbNOjQAAABDSURBVHicFctHFoAgDEDBj5Qk9gLY739Nn7MfQLQJANt859iATO9ilw8kW5/cn45Ux1zMHNLVwZc2QIrHHvVvoirwAVvIAnoBgifKAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    58052: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/term.29dee084.png",
          height: 63,
          width: 63,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEUAVrkAVrkAV7oAWL0AV7sAWboAV7kAVrkAVrsAWLsAXcc15HUkAAAACnRSTlOCbnbYqw/+UmSRiXGukAAAAAlwSFlzAAAQnAAAEJwBJs06NAAAADNJREFUeJxNxrkBwEAIA8EVzwHqv2CnnmjoIEBNJIVSRBa6DGTf2UJ+8P5Zu8peemZ3pj8hEAEss9zg/AAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    76165: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/turtle-points.f4b180aa.png",
          height: 63,
          width: 63,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEVMaXFBfCIxSyFxcm5mZmVw1DViqixv0jR35DZRhi83ZiAmVxBTaUpdfkgvXCAwXR1ITEd+gIEeRVsnAAAAEHRSTlMAJeD9+0cxIja+Zk/h32ZPHBlqFQAAAAlwSFlzAAAQnAAAEJwBJs06NAAAADhJREFUeJwtxksSwCAIwNCoqGA/wv0v26Hj2yQAqvyKWcmOGnEPUHORMIXXm7QFzMe9zpy+r55zfC7PAU2uh7K0AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    63962: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/zerolend.f716a65a.png",
          height: 63,
          width: 63,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEUCAgIEBARMaXEAAAABAQECAgJiYmIODg4PDw8qKiqXl5cAAABVVVV4eHhwjpETAAAAC3RSTlNgHwAC8Pf+/iH6+iKsT+0AAAAJcEhZcwAAEJwAABCcASbNOjQAAAA4SURBVHicFcrBEQAgCASxFRDQ0/7bdcw7uDUMc4ypmhgdWvtEg+pmClDmLUHH2UvRP5d+dhvQ5g8wYAFXyTcOEAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    74956: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/zircuit-dark.03c28ee3.png",
          height: 63,
          width: 63,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEUALQAEMgQPRgwpXydMaXEAAABVilOt4LA6czczay9Rh1BonGi2wAkBAAAACHRSTlNgIPT9AAL++kLFBzoAAAAJcEhZcwAAEJwAABCcASbNOjQAAAA1SURBVHicRcuxEcAwDAOxJ6nIsr3/vqly6QGeEqgeCs+YQj7JsWCSZIDd9/YGuddq68dffwEhnADxXQCNAwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    51592: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/zircuit-light.056cc3fa.png",
          height: 63,
          width: 63,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEUbcxJSlEdMaXEAfwAddRMxgycTcggzhSiJtXwMbAIPbgX08ucYdA1npluhwZOFtHhi5rkEAAAADXRSTlMg/QACWvdi8P5jY/pebQ4oeAAAAAlwSFlzAAAQnAAAEJwBJs06NAAAADlJREFUeJxFyjESACEIBMFhUUAt9P+/vfA6blzsjRyN2T2HIJ/ZS4g2M+sguu6tDsg6p5I/u1gL+Qc0YgF5eFF93wAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    99644: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/zklink.7fe28aca.png",
          height: 63,
          width: 63,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEXN7uX09vXk6+vw9/b//+Hx7u7x8O//8fdMaXGn3dv//P3++fnb6+v/9PTa+/T4+/2w5NzS8uvb7PLfljgUAAAADnRSTlP5YyH2AlpgIAD88GL2YmENMZAAAAAJcEhZcwAAEJwAABCcASbNOjQAAAA8SURBVHicBcEBAsAQDATBVSEXVOj/H9sZTF6Ky1Cre9cunvHBHQ8lIyJy8l7OYU8cIi6O2spcTZi8d5f9RHEB+dImCM4AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    95375: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/silo.73576465.png",
          height: 800,
          width: 800,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEUAAABubm4sLCwSEhLw8PDg4OAzMzPPz8////8oiPlZAAAACXBIWXMAAAsSAAALEgHS3X78AAAAKklEQVR4nGNgQAAmRiYwzczKwQhhsLAzsoFZbIzsLMxgFiMHK4QBUw0BAAxgAFfToxUiAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    86360: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/splice.ec5d5d66.jpeg",
          height: 200,
          width: 200,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAVAQEBAAAAAAAAAAAAAAAAAAAFBv/aAAwDAQACEAMQAAABqCqP/8QAFhAAAwAAAAAAAAAAAAAAAAAAAQMj/9oACAEBAAEFAoFX/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAgBAwEBPwGVh//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAgEBPwFdv//EABkQAAEFAAAAAAAAAAAAAAAAAAABAhFRkf/aAAgBAQAGPwKnRqn/xAAWEAEBAQAAAAAAAAAAAAAAAAABYQD/2gAIAQEAAT8hoO3H/9oADAMBAAIAAwAAABDz/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEhcf/aAAgBAwEBPxCut6f/xAAVEQEBAAAAAAAAAAAAAAAAAAAAUf/aAAgBAgEBPxCB/8QAGBAAAgMAAAAAAAAAAAAAAAAAAAGhscH/2gAIAQEAAT8Q1uaEnB//2Q==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    50419: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/sturdy-dark.069ff5e3.svg",
          height: 70,
          width: 60,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    95113: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/sturdy-light.461b9868.svg",
          height: 70,
          width: 60,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    9925: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/swell.0209e615.png",
          height: 650,
          width: 650,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEVMaXEoVd0tYOgiSNIpW+IkS9MlTtcoWeEgNbUoWt4iRc8oVt8uZewoVt4mUtsjSNMfQcklUNkjStQmTukxafrNbCflAAAAE3RSTlMAs7qtKTrYFwYHiXKbg/dSmWby/tFVfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAD1JREFUeJwdxUkSgCAQBMECYXrYcfn/Ww3NSwKldwGU+MT0HaLUhlAqY1ponGFa9ixSXazrcCDb/Y92dXgBOaABomglnqsAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    62214: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/synfutures.0fe3463b.svg",
          height: 50,
          width: 44,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    69849: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/synonym.f37223b9.svg",
          height: 137,
          width: 157,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    96232: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/teahouse-dark.fd8b6c30.png",
          height: 318,
          width: 336,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEVMaXH////////////////////////////////+/v7///9SVKA8AAAAC3RSTlMADCdph3mWQxpWBZlRl2YAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAwSURBVHicRYtZCgAgEIXszVr3P3BEUH4JIjyWemkAlu5pgGbk1Gkj7BRojytU/RU2Fb8Ah8K0tuUAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    11044: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/teahouse-light.8600633e.png",
          height: 318,
          width: 336,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABKvP01AAAACnRSTlMAC3sni1pDGmyaTYOwlAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADBJREFUeJxNi8kNADAMg8id7L9wFfXR+oVAhjcrMQFiXKdXhHrYJtHeAuV6gczvygERrwBxnJvONAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    45382: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/term.2258effa.svg",
          height: 36,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    45784: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/thruster.c62fcd7a.svg",
          height: 60,
          width: 60,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    2189: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/uniswap-dark.9861c36d.png",
          height: 120,
          width: 120,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEX/+/z/UqX//v//L5JMaXH/nM7/8fr/////////qdP/a7H/t9r//v//v97/8Pn/ebr/2Ov/5fH/i8NXhp4IAAAADHRSTlMu/Ov+AP7ssfT++v5mFrm6AAAACXBIWXMAACE4AAAhOAFFljFgAAAAPElEQVR4nDXLQQKAIAgAwdVEoAC1/z+2U3MfBmqmDJi1KzpoiKw7FCvfeaVh7nHaMlTam+4KPZ6MCX//AEenAfaplB2zAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    86794: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/uniswap-light.19ae3f25.png",
          height: 120,
          width: 120,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEX/BXf/Yq7/Eof/rNRMaXH/AHT/i8P/Ann/AXX/VaX/AHb/A33/z+b/CoT/Qp3/Io7/b7myKK5AAAAADXRSTlMu/ez8APr+svP+rOv+CoVs2QAAAAlwSFlzAAAhOAAAITgBRZYxYAAAADtJREFUeJwFwYkBwCAIALFTUUDLs/+0TRB0b0VgVkU80BjjnLhYeOWXhrnvWsfQXp3eF15kxgRBzRT5AUYOAf9+SblrAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    5942: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/velodrome.3bbc2abd.svg",
          height: 324,
          width: 332,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    9007: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/venus.58b08885.svg",
          height: 40,
          width: 40,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    87682: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/zerolend.f150a704.png",
          height: 200,
          width: 200,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUAAACUlJQ6OjofHx8EBASEhIRPT08mJiakuovjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAK0lEQVR4nGNgQAZMzCCShYGNkZEFxGJnZGIFS7AyMUKkGBnZIEqZmVB0AgAJoABBqm+YfwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    31922: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/zircuit-dark.292cc927.svg",
          height: 64,
          width: 64,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    56499: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/zircuit-light.441bf0f4.svg",
          height: 64,
          width: 64,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    58569: function (e, t, n) {
      n.r(t),
        (t.default = {
          src: "/_next/static/media/zklink.69cf3a51.png",
          height: 840,
          width: 840,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEX18PLh7PDj8e75+PjU7OX7+fny8e/d8O2x5N1MaXHq9fL17+/99/m/3eX09vbI7eTP9vGU3NT///+f3djd/fTj9/lmBj/QAAAAD3RSTlMt++uy/e/q+/4AsK6z+qxSc5EYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPklEQVR4nAXBCQKAIAgAwfUEtAK1/v/VZjAukYJBe92/BmWr+70fmiw9SzrJq2r1zIi6To0BOVKKDMbsfWI/UxUCMstIaPUAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
  },
]);
