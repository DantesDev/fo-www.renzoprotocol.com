"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6406],
  {
    16947: function (e, t, n) {
      n.d(t, {
        $: function () {
          return a;
        },
      });
      var i = n(57437);
      function r(e) {
        let { size: t = 50 } = e;
        return (0, i.jsx)("div", {
          className: "animate-spin-slow",
          children: (0, i.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            height: t,
            width: t,
            viewBox: "0 0 1024 1024",
            fill: "currentColor",
            children: (0, i.jsx)("path", {
              d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z",
            }),
          }),
        });
      }
      n(2265);
      var o = n(16349);
      function a(e) {
        let { size: t = 100, className: n } = e;
        return (0, i.jsx)("div", {
          className: (0, o.cn)("text-primary-500 flex", n),
          children: (0, i.jsx)(r, { size: t }),
        });
      }
    },
    41218: function (e, t, n) {
      n.d(t, {
        z: function () {
          return d;
        },
      });
      var i = n(57437),
        r = n(2265),
        o = n(16349),
        a = n(71538),
        s = n(12218),
        l = n(16947);
      let u = (0, s.j)(
          "inline-flex items-center gap-x-2 justify-center whitespace-nowrap rounded-button-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          {
            variants: {
              variant: {
                default:
                  "bg-primary-500 hover:bg-primary-600 text-secondary-600",
                bordered:
                  "border border-neutral-500 text-neutral-500 transition ease-in-out hover:opacity-80 dark:border-slate-200 dark:text-slate-200",
                destructive: "bg-[#DC2626] dark:bg-[#C33A3A] text-white",
                invert:
                  "bg-[#040512] dark:bg-[#E6E6F3] hover:opacity-80 text-white dark:text-black",
              },
              size: {
                default: "h-10 px-4 py-2",
                xxs: "h-6 px-2 rounded-sm text-[11px]",
                xs: "h-7 px-2 rounded-sm",
                sm: "h-9 px-3",
                lg: "h-12 px-8 font-semibold text-lg",
                icon: "h-10 w-10",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        d = r.forwardRef((e, t) => {
          let { className: n, variant: r, size: s, asChild: d = !1, ...c } = e,
            f = d ? a.g7 : "button",
            { children: h, isLoading: g, ...p } = c;
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)(f, {
              className: (0, o.cn)(u({ variant: r, size: s, className: n }), {
                isLoading: "opacity-50",
              }),
              ref: t,
              disabled: g,
              ...p,
              children: [
                g
                  ? (0, i.jsx)(l.$, { className: "text-inherit", size: 16 })
                  : null,
                h,
              ],
            }),
          });
        });
      d.displayName = "Button";
    },
    32300: function (e, t, n) {
      n.d(t, {
        X: function () {
          return l;
        },
      });
      var i = n(57437),
        r = n(2265),
        o = n(55158),
        a = n(16349),
        s = n(76772);
      let l = r.forwardRef((e, t) => {
        let { className: n, ...r } = e;
        return (0, i.jsx)(s.fC, {
          ref: t,
          className: (0, a.cn)(
            "focus-visible:ring-ring data-[state=checked]:bg-fg-dark dark:data-[state=checked]:bg-fg-light border-fg-dark dark:border-fg-light data-[state=checked]:text-fg-light dark:data-[state=checked]:text-fg-dark peer size-4 shrink-0 rounded-sm border shadow focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
            n
          ),
          ...r,
          children: (0, i.jsx)(s.z$, {
            className: (0, a.cn)(
              "flex items-center justify-center text-current"
            ),
            children: (0, i.jsx)(o.n, { className: "size-3" }),
          }),
        });
      });
      l.displayName = s.fC.displayName;
    },
    67707: function (e, t, n) {
      n.d(t, {
        D: function () {
          return p;
        },
        K: function () {
          return m;
        },
      });
      var i = n(57437),
        r = n(2265),
        o = n(61731),
        a = n(21517),
        s = n(67750),
        l = n(37656),
        u = n.n(l),
        d = n(54601),
        c = n(387);
      function f(e) {
        return e.map((e) =>
          u()(e, ["symbol", "address", "decimals", "chainId", "chainType"])
        );
      }
      function h(e, t) {
        let n = [],
          i = [],
          r = [];
        return (
          Object.entries(c.TV)
            .filter((t) => {
              let [n] = t;
              return e.includes(n);
            })
            .forEach((e) => {
              let [, o] = e;
              Object.values(o.supportedChains).forEach((e) => {
                var s, l;
                let { chainId: u, address: d, isDepositable: c } = e;
                ("depositable" !== t || null == c || c) &&
                  ((null === (s = a.JP[u]) || void 0 === s ? void 0 : s.testnet)
                    ? i.push({ ...o, chainId: u, address: d })
                    : (
                        null === (l = a.JP[u]) || void 0 === l
                          ? void 0
                          : l.devnet
                      )
                    ? r.push({ ...o, chainId: u, address: d })
                    : n.push({ ...o, chainId: u, address: d }));
              });
            }),
          { mainnetTokens: n, testnetTokens: i, devnetTokens: r }
        );
      }
      let g = (0, r.createContext)(void 0);
      function p(e) {
        let { children: t } = e,
          n = (function () {
            let { isAppOnMainnet: e, solana: t } = (0, s.$)(),
              n = (0, r.useMemo)(() => {
                let { mainnetTokens: t, testnetTokens: n } = (function () {
                  let { mainnetTokens: e, testnetTokens: t } = h(
                    [d.W.ETH, d.W.WETH, d.W.stETH],
                    "depositable"
                  );
                  return { mainnetTokens: e, testnetTokens: t };
                })();
                return e ? t : n;
              }, [e]),
              i = (0, r.useMemo)(() => {
                let { mainnetTokens: t, testnetTokens: n } = (function () {
                  let { mainnetTokens: e, testnetTokens: t } = h(
                    [d.W.stETH, d.W.ETH, d.W.WETH],
                    "depositable"
                  );
                  return { mainnetTokens: e, testnetTokens: t };
                })();
                return e ? t : n;
              }, [e]),
              l = (0, r.useMemo)(() => {
                let { mainnetTokens: t, testnetTokens: n } = (function () {
                  let { mainnetTokens: e, testnetTokens: t } = (function (
                    e,
                    t
                  ) {
                    let n = [],
                      i = [];
                    return (
                      Object.entries(c.TV)
                        .filter((t) => {
                          let [n] = t;
                          return e.includes(n);
                        })
                        .forEach((e) => {
                          let [, r] = e;
                          Object.values(r.supportedChains).forEach((e) => {
                            var o, s;
                            let { chainId: l, address: u } = e;
                            t.includes(l) &&
                              ((
                                null === (o = a.JP[l]) || void 0 === o
                                  ? void 0
                                  : o.testnet
                              )
                                ? i.push({ ...r, chainId: l, address: u })
                                : (
                                    null === (s = a.JP[l]) || void 0 === s
                                      ? void 0
                                      : s.devnet
                                  )
                                ? i.push({ ...r, chainId: l, address: u })
                                : n.push({ ...r, chainId: l, address: u }));
                          });
                        }),
                      { mainnetTokens: n, testnetTokens: i, devnetTokens: [] }
                    );
                  })(
                    [d.W.stETH, d.W.wstETH, d.W.WETH, d.W.ETH],
                    [a.p5.mainnet.id]
                  );
                  return { mainnetTokens: e, testnetTokens: t };
                })();
                return e ? t : n;
              }, [e]),
              u = (0, r.useMemo)(() => {
                let {
                  mainnetTokens: n,
                  testnetTokens: i,
                  devnetTokens: r,
                } = (function () {
                  let {
                    mainnetTokens: e,
                    testnetTokens: t,
                    devnetTokens: n,
                  } = h([d.W.SOL, d.W.JitoSOL], "depositable");
                  return {
                    mainnetTokens: e,
                    testnetTokens: t,
                    devnetTokens: n,
                  };
                })();
                return e ? n : a.JP[t.account.userChainId].devnet ? r : i;
              }, [e, t.account.userChainId]),
              g = (0, r.useMemo)(() => {
                let { mainnetTokens: t, testnetTokens: n } = (function () {
                  let { mainnetTokens: e, testnetTokens: t } = h(
                    [d.W.wBETH, d.W.stETH, d.W.ETH, d.W.WETH, d.W.wstETH],
                    "depositable"
                  );
                  return { mainnetTokens: e, testnetTokens: t };
                })();
                return e ? t : n;
              }, [e]),
              p = (0, r.useMemo)(() => {
                let { mainnetTokens: t, testnetTokens: n } = (function () {
                  let { mainnetTokens: e, testnetTokens: t } = h(
                    [d.W.ezETH, d.W.pzETH],
                    "withdrawable"
                  );
                  return { mainnetTokens: e, testnetTokens: t };
                })();
                return e ? t : n;
              }, [e]),
              m = (0, r.useMemo)(() => {
                let { mainnetTokens: t, testnetTokens: n } = (function () {
                  let { mainnetTokens: e, testnetTokens: t } = h(
                    [d.W.ezETH],
                    "withdrawable"
                  );
                  return { mainnetTokens: e, testnetTokens: t };
                })();
                return e ? t : n;
              }, [e]),
              v = (0, r.useMemo)(() => {
                let { mainnetTokens: t, testnetTokens: n } = (function () {
                  let { mainnetTokens: e, testnetTokens: t } = h(
                    [d.W.pzETH],
                    "withdrawable"
                  );
                  return { mainnetTokens: e, testnetTokens: t };
                })();
                return e ? t : n;
              }, [e]),
              W = (0, r.useMemo)(() => {
                let {
                  mainnetTokens: n,
                  testnetTokens: i,
                  devnetTokens: r,
                } = (function () {
                  let {
                    mainnetTokens: e,
                    testnetTokens: t,
                    devnetTokens: n,
                  } = h([d.W.ezSOL], "withdrawable");
                  return {
                    mainnetTokens: e,
                    testnetTokens: t,
                    devnetTokens: n,
                  };
                })();
                return e ? n : a.JP[t.account.userChainId].devnet ? r : i;
              }, [e, t.account.userChainId]),
              w = (0, r.useMemo)(() => {
                let { mainnetTokens: t, testnetTokens: i } = (function () {
                    let { mainnetTokens: e, testnetTokens: t } = h(
                      [d.W.pzETH, d.W.REN, d.W.EIGEN],
                      ""
                    );
                    return { mainnetTokens: e, testnetTokens: t };
                  })(),
                  r = e ? t : i,
                  a = [];
                o.bH.forEach((e) => {
                  e.isComingSoon ||
                    (a.push(e.depositToken), a.push(e.receiptToken));
                });
                let s = [...n, ...m, ...W, ...u, ...r, ...a];
                return Array.from(
                  new Set(
                    s.map((e) =>
                      ""
                        .concat(e.address, "-")
                        .concat(e.chainId, "-")
                        .concat(e.chainType)
                    )
                  )
                ).map((e) => {
                  let [t, n, i] = e.split("-");
                  return s.find(
                    (e) =>
                      e.address === t &&
                      e.chainId === Number(n) &&
                      e.chainType === i
                  );
                });
              }, [n, m, e, W, u]);
            return {
              proofOfReservesTokens: g,
              depositableTokens: n,
              legacyDepositableTokens: i,
              pzETHDepositableTokens: l,
              ezSOLDepositableTokens: u,
              withdrawableTokens: m,
              pzETHWithdrawableTokens: v,
              ezSOLWithdrawableTokens: W,
              circulatingSupplyTokens: p,
              supportedTokens: w,
              toTokensWithChain: f,
            };
          })();
        return (0, i.jsx)(g.Provider, { value: n, children: t });
      }
      function m() {
        let e = (0, r.useContext)(g);
        if (void 0 === e)
          throw Error("useTokenList must be used within a TokenListProvider");
        return e;
      }
    },
    8008: function (e, t, n) {
      n.d(t, {
        TransactionStateProvider: function () {
          return u;
        },
        g7: function () {
          return r;
        },
        hg: function () {
          return s;
        },
        pl: function () {
          return d;
        },
      });
      var i,
        r,
        o = n(57437),
        a = n(2265);
      ((i = r || (r = {}))[(i.NotInitiatied = 0)] = "NotInitiatied"),
        (i[(i.WaitingForAllowance = 1)] = "WaitingForAllowance"),
        (i[(i.ProcessingAllowance = 2)] = "ProcessingAllowance"),
        (i[(i.WaitingForDeposit = 3)] = "WaitingForDeposit"),
        (i[(i.ProcessingDeposit = 4)] = "ProcessingDeposit"),
        (i[(i.Delegation = 5)] = "Delegation"),
        (i[(i.WaitingForDelegation = 6)] = "WaitingForDelegation"),
        (i[(i.ProcessingDelegation = 7)] = "ProcessingDelegation"),
        (i[(i.WaitingForConfirmation = 8)] = "WaitingForConfirmation"),
        (i[(i.ProcessingConfirmation = 9)] = "ProcessingConfirmation"),
        (i[(i.WaitingForCooldown = 10)] = "WaitingForCooldown"),
        (i[(i.ProcessingCooldown = 11)] = "ProcessingCooldown"),
        (i[(i.WaitingForWithdrawal = 12)] = "WaitingForWithdrawal"),
        (i[(i.ProcessingWithdrawal = 13)] = "ProcessingWithdrawal"),
        (i[(i.Confirmed = 14)] = "Confirmed"),
        (i[(i.Error = 15)] = "Error");
      let s = {
          0: "Confirm Transaction",
          1: "Sending Allowance Request",
          2: "Waiting For Allowance",
          3: "Sending Deposit Request",
          4: "Waiting For Deposit Confirmation",
          5: "Delegation",
          6: "Sending Stake Request",
          7: "Waiting For Staking Confirmation",
          8: "Sending Confirmation Request",
          9: "Waiting For Confirmation",
          10: "Sending Cooldown Request",
          11: "Waiting for Cooldown Confirmation",
          12: "Sending Withdrawal Request",
          13: "Waiting for Withdrawal Confirmation",
          14: "Transaction Confirmed",
          15: "Transaction Failed",
        },
        l = (0, a.createContext)(void 0);
      function u(e) {
        let { children: t } = e,
          n = (function () {
            let [e, t] = (0, a.useState)(0),
              [n, i] = (0, a.useState)(void 0),
              [r, o] = (0, a.useState)(void 0),
              [s, l] = (0, a.useState)(void 0);
            return {
              transactionState: e,
              setTransactionState: t,
              depositHash: r,
              setDepositHash: o,
              tokenAllowanceHash: n,
              setTokenAllowanceHash: i,
              confirmationHash: s,
              setConfirmationHash: l,
            };
          })();
        return (0, o.jsx)(l.Provider, { value: n, children: t });
      }
      function d() {
        let e = (0, a.useContext)(l);
        if (void 0 === e)
          throw Error(
            "useTransactionState must be used within a TransactionStateProvider"
          );
        return e;
      }
    },
    88190: function (e, t, n) {
      n.d(t, {
        G: function () {
          return s;
        },
        q: function () {
          return a;
        },
      });
      var i = n(57437),
        r = n(2265);
      let o = (0, r.createContext)(void 0);
      function a(e) {
        let { children: t } = e,
          n = (function () {
            let [e, t] = (0, r.useState)(!1),
              [n, i] = (0, r.useState)(!1),
              o = (0, r.useCallback)(() => t(!0), []);
            return {
              evmWalletDialogOpen: e,
              openEVMWalletDialog: o,
              closeEVMWalletDialog: (0, r.useCallback)(() => t(!1), []),
              setEVMWalletDialogOpen: t,
              solanaWalletDialogOpen: n,
              openSolanaWalletDialog: (0, r.useCallback)(() => i(!0), []),
              closeSolanaWalletDialog: (0, r.useCallback)(() => i(!1), []),
            };
          })();
        return (0, i.jsx)(o.Provider, { value: n, children: t });
      }
      function s() {
        let e = (0, r.useContext)(o);
        if (void 0 === e)
          throw Error(
            "useWalletDialog must be used within a WalletDialogProvider"
          );
        return e;
      }
    },
  },
]);
