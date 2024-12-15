(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8388],
  {
    63848: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 82893)),
        Promise.resolve().then(n.bind(n, 53886)),
        Promise.resolve().then(n.bind(n, 27900)),
        Promise.resolve().then(n.bind(n, 48659)),
        Promise.resolve().then(n.bind(n, 40153)),
        Promise.resolve().then(n.bind(n, 65356)),
        Promise.resolve().then(n.bind(n, 21516)),
        Promise.resolve().then(n.bind(n, 17386)),
        Promise.resolve().then(n.bind(n, 23213)),
        Promise.resolve().then(n.bind(n, 8008));
    },
    82893: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MarketInfo: function () {
            return x;
          },
        });
      var a = n(57437),
        s = n(19859),
        r = n(67750),
        i = n(21134),
        o = n(61517),
        l = n(61736),
        c = n(68641),
        d = n(63197),
        u = n(65356);
      function x() {
        let { deployment: e } = (0, r.$)(),
          {
            coolDownDistanceFromNow: t,
            fromTokenPrice: n,
            fromTokenType: x,
          } = (0, u.U)();
        return (0, a.jsxs)("div", {
          className: "flex flex-col gap-y-4",
          children: [
            (0, a.jsx)("div", {
              className: "flex flex-col gap-y-2",
              children: (0, a.jsx)("div", {
                className: "text-xl font-semibold",
                children: "Market Information",
              }),
            }),
            (0, a.jsxs)("div", {
              className: "grid grid-cols-4 gap-y-4",
              children: [
                (0, a.jsxs)("div", {
                  className: "col-span-2 flex flex-col gap-y-2 lg:col-span-1",
                  children: [
                    (0, a.jsx)("div", {
                      className: "text-gray-500 dark:text-gray-200",
                      children: "Token",
                    }),
                    (0, a.jsx)("a", {
                      href: (0, i.Li)(e.etherscanURL, x.address),
                      target: "_blank",
                      children: (0, a.jsxs)("div", {
                        className: "flex flex-row items-center gap-x-2",
                        children: [
                          (0, a.jsx)(d.T, {
                            token: x,
                            iconSize: 30,
                            chainIconSize: 14,
                            chainId: x.chainId,
                          }),
                          (0, a.jsx)("div", {
                            className: "text-xl font-medium tracking-wide",
                            children: x.symbol,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "col-span-2 flex flex-col gap-y-2 lg:col-span-1",
                  children: [
                    (0, a.jsx)("div", {
                      className: "text-gray-500 dark:text-gray-200",
                      children: "Price",
                    }),
                    (0, a.jsx)("div", {
                      className: "text-xl font-medium tracking-wide",
                      children: (0, o.M)(n, { maximumFractionDigits: 4 }),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "col-span-2 flex flex-col gap-y-2 lg:col-span-1",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex flex-row items-center gap-x-2",
                      children: [
                        (0, a.jsx)("div", {
                          className: "text-gray-500 dark:text-gray-200",
                          children: "Cooldown Period",
                        }),
                        (0, a.jsx)(c.u, {
                          content: "A mandatory "
                            .concat(
                              t,
                              " cooldown period that must be initiated and observed before unstaking "
                            )
                            .concat(x.symbol, " tokens."),
                          contentClassName: "min-w-60",
                          children: (0, a.jsx)(s.Z, { width: 14 }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "text-xl font-medium tracking-wide",
                      children: t,
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "col-span-2 self-end lg:col-span-1",
                  children: (0, a.jsxs)("a", {
                    href: (0, l.WM)(x.address),
                    target: "_blank",
                    className:
                      "flex w-24 items-center justify-center gap-x-1 rounded-lg border border-neutral-400 px-3.5 py-2 text-sm font-semibold transition ease-in-out hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-200 dark:text-slate-200",
                    children: ["Get $", x.symbol],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    53886: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          StakeBalanceCard: function () {
            return v;
          },
        });
      var a = n(57437),
        s = n(19859),
        r = n(95872),
        i = n(8008),
        o = n(67750),
        l = n(61517),
        c = n(90894),
        d = n(46717),
        u = n(42921),
        x = n(13448),
        f = n(88262),
        h = n(82890),
        m = n(17865),
        g = n(41218),
        p = n(68641),
        b = n(16947),
        j = n(65356);
      function v() {
        let {
            account: { address: e },
            userChainId: t,
          } = (0, o.$)(),
          { switchChainAsync: n } = (0, x.useSwitchChain)(),
          { waitForSubgraphSync: v } = (0, m.V)(),
          {
            stakerAddress: k,
            fromChainId: w,
            fromTokenType: y,
            activeStake: N,
            refetchActiveStake: C,
            stakedTotalFromFiatValue: S,
            refetchStakingTransactions: I,
            coolDownDistanceFromNow: z,
          } = (0, j.U)(),
          { transactionState: F, setTransactionState: T } = (0, i.pl)(),
          P = N ? (0, u.b)(N, y.decimals) : 0,
          A = N && N > 0;
        async function W() {
          try {
            t !== w && (await (null == n ? void 0 : n({ chainId: w }))),
              T(i.g7.WaitingForCooldown);
            let e = await (0, c.n)(h.g, {
              address: k,
              abi: r.E.REZtake,
              functionName: "unStake",
              args: [N],
              chainId: w,
            });
            T(i.g7.ProcessingCooldown);
            let a = await (0, d.e)(h.g, { chainId: w, hash: e }),
              s = f.m3[w];
            await v(s.subgraphs.reztake, Number(a.blockNumber)),
              C(),
              I(),
              T(i.g7.Confirmed);
          } catch (e) {
            console.log(e), T(i.g7.Error);
          }
        }
        return (0, a.jsx)("div", {
          className:
            "dark:shadow-dark w-full rounded-xl shadow dark:border dark:border-white/10",
          children: (0, a.jsxs)("div", {
            className:
              "bg-container-light dark:bg-container-dark flex flex-col justify-center rounded-xl p-4 text-center",
            children: [
              (0, a.jsxs)("div", {
                className: "flex flex-row justify-between",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "text-left text-sm tracking-wide text-gray-500 dark:text-gray-200",
                    children: ["Your ", y.symbol, " Staked"],
                  }),
                  e && A
                    ? (0, a.jsx)(p.u, {
                        content: "A mandatory "
                          .concat(
                            z,
                            " cooldown period that must be initiated and observed before unstaking "
                          )
                          .concat(y.symbol, " tokens."),
                        contentClassName: "min-w-60",
                        children: (0, a.jsx)(s.Z, { width: 14 }),
                      })
                    : null,
                ],
              }),
              (0, a.jsxs)("div", {
                className: "flex flex-row place-items-end justify-between",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex flex-col text-left",
                    children: [
                      (0, a.jsx)("div", {
                        children: (0, a.jsx)(p.u, {
                          content: "$ ".concat(Number(S).toLocaleString()),
                          contentClassName: "w-auto",
                          children: (0, a.jsx)("div", {
                            className: "text-2xl font-semibold tracking-wide",
                            children: (0, l.zZ)(S),
                          }),
                        }),
                      }),
                      (0, a.jsx)("div", {
                        children: (0, a.jsx)(p.u, {
                          content: ""
                            .concat(Number(P).toLocaleString(), " ")
                            .concat(y.symbol),
                          contentClassName: "w-auto",
                          children: (0, a.jsxs)("div", {
                            className: "flex flex-row items-center gap-x-1",
                            children: [
                              (0, a.jsx)("span", {
                                className: "tracking-wide",
                                children: (0, l.D)(P),
                              }),
                              (0, a.jsx)("span", { children: y.symbol }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                  e && A
                    ? (0, a.jsx)(g.z, {
                        variant: "bordered",
                        size: "sm",
                        className:
                          "h-9 px-3 text-sm md:h-7 md:rounded-lg md:px-2 md:text-xs lg:h-9 lg:px-3 lg:text-sm",
                        disabled:
                          F === i.g7.WaitingForCooldown ||
                          F === i.g7.ProcessingCooldown,
                        onClick: () => W(),
                        children: (0, a.jsxs)("div", {
                          className: "flex flex-row items-center gap-x-1",
                          children: [
                            (0, a.jsx)("div", {
                              children:
                                F === i.g7.WaitingForCooldown ||
                                F === i.g7.ProcessingCooldown
                                  ? (0, a.jsx)(b.$, { size: 16 })
                                  : null,
                            }),
                            (0, a.jsx)("div", {
                              children: "Activate Cooldown",
                            }),
                          ],
                        }),
                      })
                    : null,
                ],
              }),
            ],
          }),
        });
      }
    },
    27900: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          StakeButton: function () {
            return h;
          },
        });
      var a = n(57437),
        s = n(88190),
        r = n(67750),
        i = n(61517),
        o = n(83718),
        l = n(13448),
        c = n(21517),
        d = n(13962),
        u = n(41218),
        x = n(6359),
        f = n(65356);
      function h() {
        let {
            account: { isConnected: e },
            userChainId: t,
          } = (0, r.$)(),
          n = (0, d.t)(),
          { openEVMWalletDialog: h } = (0, s.G)(),
          { switchChain: m } = (0, l.useSwitchChain)(),
          { setIsStakeDialogOpen: g } = (0, f.U)(),
          { fromTokenAmount: p, fromChainId: b, fromBalance: j } = (0, f.U)(),
          v = !!j && !!p && (0, o.RM)(j).gte(p);
        return n
          ? e
            ? (0, i.PT)(p)
              ? (0, a.jsx)(u.z, {
                  className: "w-full",
                  onClick: h,
                  disabled: !0,
                  children: "Enter an amount",
                })
              : v
              ? t !== b
                ? (0, a.jsxs)(u.z, {
                    className: "w-full",
                    onClick: () => (null == m ? void 0 : m({ chainId: b })),
                    children: ["Switch to ", (0, c.qz)(c.JP[b]), " chain"],
                  })
                : (0, a.jsx)(u.z, {
                    className: "w-full",
                    onClick: () => g(!0),
                    children: "Stake",
                  })
              : (0, a.jsx)(u.z, {
                  className: "w-full",
                  disabled: !0,
                  children: "Insufficient Balance",
                })
            : (0, a.jsx)(u.z, {
                className: "w-full",
                onClick: h,
                children: "Connect Wallet",
              })
          : (0, a.jsx)(x.O, { className: "h-12 w-full rounded-xl" });
      }
    },
    48659: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          StakeForm: function () {
            return I;
          },
        });
      var a = n(57437),
        s = n(2265),
        r = n(87138),
        i = n(95872),
        o = n(8008),
        l = n(67750),
        c = n(22721),
        d = n(21134),
        u = n(61517),
        x = n(90894),
        f = n(46717),
        h = n(61379),
        m = n(31195),
        g = n(21517),
        p = n(82890),
        b = n(17865),
        j = n(41218),
        v = n(34129),
        k = n(16947),
        w = n(63197),
        y = n(65356);
      function N(e) {
        var t, n, N;
        let {
            account: { address: C },
            deployment: S,
          } = (0, l.$)(),
          { isOpen: I, onClose: z } = e,
          { waitForSubgraphSync: F } = (0, b.V)(),
          {
            fromTokenAddress: T,
            isStakeDialogOpen: P,
            fromChainId: A,
            fromTokenAmount: W,
            fromTokenType: E,
            totalFromFiatValue: D,
            stakerAddress: R,
            refetchActiveStake: L,
            setFromTokenAmount: M,
            refetchDailySnapshots: B,
            refetchStakingTransactions: V,
          } = (0, y.U)(),
          {
            transactionState: $,
            setTransactionState: q,
            setTokenAllowanceHash: O,
            tokenAllowanceHash: U,
            setDepositHash: Z,
            depositHash: _,
          } = (0, o.pl)(),
          { data: Q, refetch: H } = c.o.tokens.allowance.useQuery(
            { tokenAddress: T, owner: C, spender: R, chainId: A },
            { enabled: null !== C }
          ),
          J = (0, s.useMemo)(() => !Q || Number((0, m.f)(W)) > Q, [Q, W]);
        async function K() {
          try {
            q(o.g7.WaitingForAllowance);
            let e = (0, m.f)(W),
              t = await (0, x.n)(p.g, {
                address: T,
                abi: i.E.erc20,
                functionName: "approve",
                args: [R, e],
                chainId: S.chain.id,
              });
            O(t),
              q(o.g7.ProcessingAllowance),
              await (0, f.e)(p.g, { chainId: S.chain.id, hash: t }),
              q(o.g7.NotInitiatied);
          } catch (e) {
            console.log(e), q(o.g7.Error);
          }
        }
        async function Y() {
          try {
            q(o.g7.WaitingForDelegation);
            let e = (0, m.f)(W),
              t = await (0, x.n)(p.g, {
                address: R,
                abi: i.E.REZtake,
                functionName: "stake",
                args: [e],
                chainId: S.chain.id,
              });
            Z(t), q(o.g7.ProcessingDelegation);
            let n = await (0, f.e)(p.g, { chainId: S.chain.id, hash: t });
            await F(S.subgraphs.reztake, Number(n.blockNumber)),
              B(),
              V(),
              L(),
              M(""),
              q(o.g7.Confirmed);
          } catch (e) {
            console.log(e), q(o.g7.Error);
          }
        }
        return (
          (0, s.useEffect)(() => {
            U && $ === o.g7.NotInitiatied && H();
          }, [U, H, $]),
          (0, s.useEffect)(() => {
            P || q(o.g7.NotInitiatied);
          }, [P, q]),
          (0, a.jsx)(v.Vq, {
            open: I,
            onOpenChange: () => {
              $ === o.g7.Confirmed && q(o.g7.NotInitiatied), z();
            },
            children: (0, a.jsx)(v.cZ, {
              className: "lg:w-[520px]",
              children:
                $ === o.g7.Confirmed && null != _
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(v.fK, {
                          children: (0, a.jsxs)(v.$N, {
                            className:
                              "flex flex-row items-center justify-start gap-x-3",
                            children: [
                              (0, a.jsx)(w.T, {
                                token: E,
                                iconSize: 34,
                                chainIconSize: 16,
                                chainId: E.chainId,
                              }),
                              (0, a.jsx)("div", {
                                className: "text-2xl",
                                children: "Stake Successful",
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "flex flex-col items-center justify-center space-y-6 py-12",
                          children: [
                            (0, a.jsx)(h.mny, {
                              className: "text-primary-500 text-7xl",
                            }),
                            (0, a.jsxs)("p", {
                              className: "text-lg font-bold",
                              children: ["You staked ", W, " ", E.symbol],
                            }),
                            (0, a.jsx)("div", {
                              className: "overflow-nowrap underline",
                              children: (0, a.jsx)(r.default, {
                                href: (0, d.kY)(
                                  null !==
                                    (N =
                                      null === (n = g.JP[A]) || void 0 === n
                                        ? void 0
                                        : null === (t = n.blockExplorers) ||
                                          void 0 === t
                                        ? void 0
                                        : t.default.url) && void 0 !== N
                                    ? N
                                    : S.etherscanURL,
                                  _
                                ),
                                target: "_blank",
                                children: "View on block explorer",
                              }),
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(v.fK, {
                          children: (0, a.jsxs)(v.$N, {
                            className:
                              "flex flex-row items-center justify-start gap-x-3",
                            children: [
                              (0, a.jsx)(w.T, {
                                token: E,
                                iconSize: 34,
                                chainIconSize: 16,
                                chainId: E.chainId,
                              }),
                              (0, a.jsxs)("div", {
                                className: "text-2xl",
                                children: ["Stake ", E.symbol],
                              }),
                            ],
                          }),
                        }),
                        $ === o.g7.Error
                          ? (0, a.jsxs)("div", {
                              className:
                                "flex flex-col items-center justify-center space-y-6",
                              children: [
                                (0, a.jsx)("p", {
                                  className: "text-lg font-bold",
                                  children: "Transaction Failed",
                                }),
                                (0, a.jsx)("div", {
                                  className: "cursor-pointer underline",
                                  onClick: () => {
                                    q(o.g7.NotInitiatied);
                                  },
                                  children: "Try Again",
                                }),
                              ],
                            })
                          : (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "flex flex-col",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: "text-lg font-medium",
                                      children: "Staking",
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "truncate text-4xl font-semibold tracking-wide",
                                      children: [W, " ", E.symbol],
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "tracking-wide",
                                      children: (0, u.zZ)(Number(D)),
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "mt-5 text-lg font-medium",
                                      children: [
                                        "To stake ",
                                        E.symbol,
                                        ", you must give Reno permission to deposit your tokens.",
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)(v.cN, {
                                  className: "flex flex-col",
                                  children: [
                                    (0, a.jsx)("hr", {
                                      className:
                                        "my-2 border-t-[1px] border-solid border-neutral-200",
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex flex-row items-center justify-between",
                                      children: [
                                        (function () {
                                          if (
                                            $ === o.g7.WaitingForAllowance ||
                                            $ === o.g7.ProcessingAllowance ||
                                            $ === o.g7.WaitingForDelegation ||
                                            $ === o.g7.ProcessingDelegation
                                          ) {
                                            let e = "Loading";
                                            return (
                                              $ === o.g7.WaitingForAllowance
                                                ? (e =
                                                    "Waiting for approval confirmation")
                                                : $ ===
                                                    o.g7.WaitingForDelegation &&
                                                  (e =
                                                    "Confirm transaction in wallet"),
                                              (0, a.jsxs)("div", {
                                                className:
                                                  "flex flex-row items-center gap-x-2",
                                                children: [
                                                  (0, a.jsx)(k.$, { size: 18 }),
                                                  (0, a.jsx)("div", {
                                                    className:
                                                      "text-sm font-medium",
                                                    children: e,
                                                  }),
                                                ],
                                              })
                                            );
                                          }
                                          return (0, a.jsx)("div", {});
                                        })(),
                                        (0, a.jsx)(j.z, {
                                          size: "lg",
                                          disabled:
                                            $ === o.g7.WaitingForAllowance ||
                                            $ === o.g7.ProcessingAllowance ||
                                            $ === o.g7.WaitingForDelegation ||
                                            $ === o.g7.ProcessingDelegation,
                                          onClick: () => (J ? K() : Y()),
                                          children: J
                                            ? "Approve Staking"
                                            : "Confirm Stake",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                      ],
                    }),
            }),
          })
        );
      }
      var C = n(27900),
        S = n(40153);
      function I() {
        let { isStakeDialogOpen: e, setIsStakeDialogOpen: t } = (0, y.U)();
        return (0, a.jsxs)("div", {
          className:
            "bg-container-light dark:bg-container-dark dark:shadow-dark relative flex w-full flex-col items-center justify-start space-y-8 rounded-2xl p-4 shadow md:p-6",
          children: [
            (0, a.jsx)(N, { isOpen: e, onClose: () => t(!1) }),
            (0, a.jsx)(S.StakeTokenInputs, {}),
            (0, a.jsx)(C.StakeButton, {}),
          ],
        });
      }
    },
    40153: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          StakeTokenInputs: function () {
            return u;
          },
        });
      var a = n(57437),
        s = n(13962),
        r = n(6359),
        i = n(16349),
        o = n(61517);
      function l(e) {
        let {
            label: t,
            labelClassName: n,
            tokenSelectClassName: l,
            inputContainerClassName: c,
            value: d,
            balance: u,
            fiatValue: x,
            onValueChange: f,
            onValueMax: h,
            tokenSelect: m,
            isLoadingBalance: g,
            isLoadingFiatValue: p,
            isLoadingValue: b,
            inputProps: j,
          } = e,
          v = (0, s.t)();
        return (0, a.jsxs)("div", {
          className: "flex w-full flex-col items-start justify-start gap-3",
          children: [
            (0, a.jsxs)("div", {
              className:
                "inline-flex items-center justify-between self-stretch text-xs font-normal text-gray-500",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "flex flex-row items-center justify-start space-x-6",
                  children: (0, a.jsx)("p", {
                    className: (0, i.cn)(
                      "relative flex items-center gap-x-1 pb-[3px] text-base leading-none text-slate-900 dark:text-zinc-300",
                      n
                    ),
                    children: t,
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-x-1 leading-none",
                  children: [
                    "Balance:",
                    " ",
                    g || !v
                      ? (0, a.jsx)(r.O, { className: "h-3 w-14" })
                      : (0, o.ZO)(u),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className:
                "bg-app-light dark:bg-app-dark flex flex-row items-center justify-start self-stretch rounded-xl dark:border dark:border-gray-700",
              children: [
                (0, a.jsx)("div", {
                  className: (0, i.cn)(
                    "flex w-[140px] items-center justify-center gap-2 self-stretch border-r border-gray-400/40 px-3.5 py-5 dark:border-gray-500/50",
                    l
                  ),
                  children: m,
                }),
                (0, a.jsxs)("div", {
                  className: (0, i.cn)(
                    "flex flex-1 flex-col items-center justify-center self-stretch px-3.5 py-5",
                    c
                  ),
                  children: [
                    (0, a.jsxs)("div", {
                      className: (0, i.cn)(
                        "flex w-full flex-row items-center justify-between self-stretch border-b border-gray-400/40 py-2.5 dark:border-gray-400/50",
                        { "animate-pulse": b }
                      ),
                      children: [
                        (0, a.jsx)("input", {
                          className:
                            "w-full self-stretch border-none bg-transparent pr-2 text-xl font-normal text-slate-900 focus:outline-none dark:text-slate-300 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
                          value: d,
                          onChange: f ? (e) => f(e.target.value) : void 0,
                          placeholder: "0.00",
                          type: "number",
                          min: 0,
                          autoComplete: "off",
                          ...j,
                        }),
                        h
                          ? (0, a.jsx)("button", {
                              className:
                                "bg-primary-500 dark:bg-primary-500/0 flex items-center justify-center rounded-lg px-3.5 py-1 transition ease-in-out hover:opacity-80 dark:border dark:border-slate-200 ",
                              onClick: h,
                              children: (0, a.jsx)("div", {
                                className:
                                  "text-xs font-semibold text-slate-900 dark:text-slate-200",
                                children: "MAX",
                              }),
                            })
                          : null,
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "flex items-start justify-start self-stretch py-1 text-xs text-neutral-400 dark:text-neutral-300",
                      children: p
                        ? (0, a.jsx)(r.O, { className: "h-4 w-14" })
                        : (0, o.M)(null != x ? x : 0),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var c = n(98234),
        d = n(65356);
      function u() {
        let {
            fromBalance: e,
            isLoadingFromBalance: t,
            fromTokenAmount: n,
            totalFromFiatValue: i,
            setFromTokenAmount: o,
            handleFromMaxValue: u,
            fromTokenType: x,
          } = (0, d.U)(),
          f = (0, s.t)();
        return (0, a.jsx)("div", {
          className:
            "relative mb-0 mt-4 flex w-full flex-col items-center justify-center",
          children: (0, a.jsx)(l, {
            label: "Stake",
            balance: e,
            isLoadingBalance: t,
            value: n,
            fiatValue: i,
            onValueChange: o,
            onValueMax: u,
            tokenSelectClassName:
              "w-[100px] md:w-[80px] lg:w-[100px] px-3 py-4",
            inputContainerClassName: "p-3 md:p-2.5 lg:p-3",
            tokenSelect:
              x && f
                ? (0, a.jsx)(c.H, { token: x })
                : (0, a.jsx)(r.O, { className: "h-6 w-20" }),
          }),
        });
      }
    },
    65356: function (e, t, n) {
      "use strict";
      n.d(t, {
        StakeFormProvider: function () {
          return g;
        },
        U: function () {
          return p;
        },
      });
      var a = n(57437),
        s = n(2265),
        r = n(67750),
        i = n(22721),
        o = n(26032),
        l = n(3367),
        c = n(78317),
        d = n(42921),
        u = n(88262),
        x = n(70096),
        f = n(387),
        h = n(38981);
      let m = (0, s.createContext)(void 0);
      function g(e) {
        let { children: t } = e,
          n = (function () {
            let {
                account: { address: e },
              } = (0, r.$)(),
              t = {
                ...f.TV.REN,
                chainId: x.F.chainId,
                address: x.F.address,
                decimals: x.F.decimals,
              },
              { getTokenPrice: n } = (0, h.W)(),
              a = t.chainId,
              m = t.address,
              [g, p] = (0, s.useState)(!1),
              [b, j] = (0, s.useState)(""),
              v = n(t.address, a),
              k = u.m3[a].addresses.rezStaker,
              {
                data: w,
                isLoading: y,
                refetch: N,
              } = i.o.onchain.ERC20TokenBalance.useQuery(
                { userAddress: e, tokenAddress: t.address, chainId: a },
                { enabled: null != e }
              ),
              C = (null == w ? void 0 : w.formatted) || "0",
              S = (0, s.useMemo)(() => {
                if (b && v) return Number(b) * v;
              }, [b, v]),
              I = (0, s.useCallback)(() => {
                if (w) {
                  let e = w.value;
                  j((0, d.b)(e, w.decimals));
                }
              }, [w]),
              { data: z } = i.o.stake.coolDownPeriod.useQuery(
                { address: k, chainId: a },
                { enabled: null != t.address }
              ),
              {
                data: F,
                isLoading: T,
                refetch: P,
              } = i.o.stake.activeStake.useQuery(
                { userAddress: e, stakerAddress: k, chainId: a },
                { enabled: null != e }
              ),
              {
                data: A,
                refetch: W,
                isLoading: E,
              } = i.o.stake.stakingDailySnapshot.useQuery({ chainId: a }),
              {
                data: D,
                refetch: R,
                isLoading: L,
              } = i.o.stake.stakingTransactions.useQuery(
                { userAddress: e, chainId: a },
                { enabled: !!e }
              ),
              M = (0, s.useMemo)(
                () => (F && v ? Number((0, d.b)(F, t.decimals)) * v : 0),
                [F, v, t.decimals]
              ),
              B = (0, s.useMemo)(() => {
                let e = (0, o.Q)(Date.now()),
                  t = (0, l.K)(e + (z || 0));
                return (0, c.D)(t);
              }, [z]);
            return {
              isStakeDialogOpen: g,
              setIsStakeDialogOpen: p,
              isLoadingFromBalance: y,
              refetchFromBalance: N,
              fromTokenPrice: v,
              fromTokenAddress: m,
              fromChainId: a,
              fromBalance: C,
              fromTokenAmount: b,
              setFromTokenAmount: j,
              totalFromFiatValue: S,
              handleFromMaxValue: I,
              fromTokenType: t,
              stakerAddress: k,
              coolDownPeriod: z,
              activeStake: F,
              refetchActiveStake: P,
              stakedTotalFromFiatValue: M,
              isLoading: T,
              dailySnapshots: A,
              refetchDailySnapshots: W,
              isLoadingDailySnapshots: E,
              coolDownDistanceFromNow: B,
              stakingTransactions: D,
              refetchStakingTransactions: R,
              isLoadingStakingTransactions: L,
            };
          })();
        return (0, a.jsx)(m.Provider, { value: n, children: t });
      }
      function p() {
        let e = (0, s.useContext)(m);
        if (void 0 === e)
          throw Error("useStakeForm must be used within a StakeFormProvider");
        return e;
      }
    },
    21516: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          StakeHistory: function () {
            return u;
          },
        });
      var a = n(57437),
        s = n(2265),
        r = n(67750),
        i = n(13962),
        o = n(6359),
        l = n(52482),
        c = n(65356),
        d = n(17386);
      function u() {
        let {
            account: { address: e },
          } = (0, r.$)(),
          t = (0, i.t)(),
          { stakingTransactions: n, isLoadingStakingTransactions: u } = (0,
          c.U)(),
          x = (0, s.useMemo)(
            () =>
              null == n
                ? void 0
                : n.sort(
                    (e, t) => Number(t.blockNumber) - Number(e.blockNumber)
                  ),
            [n]
          );
        return (0, a.jsxs)("div", {
          className: "w-full space-y-4",
          children: [
            (0, a.jsx)("div", {
              className: "text-xl font-semibold",
              children: "Your Transactions",
            }),
            (0, a.jsx)("div", {
              className: "w-full rounded-2xl",
              children: (0, a.jsxs)(l.iA, {
                className: "w-full table-auto",
                children: [
                  (0, a.jsx)(l.xD, {
                    children: (0, a.jsxs)(l.SC, {
                      children: [
                        (0, a.jsx)(l.ss, {
                          className: "w-[18%] min-w-64",
                          children: "Action",
                        }),
                        (0, a.jsx)(l.ss, {
                          className: "w-[24%]",
                          children: "Date",
                        }),
                        (0, a.jsx)(l.ss, {
                          className: "w-[24%]",
                          children: "Cooldown Time Remaining",
                        }),
                        (0, a.jsx)(l.ss, {
                          className: "w-[22%]",
                          children: "Amount",
                        }),
                        (0, a.jsx)(l.ss, {
                          className: "w-[12%]",
                          children: "Status",
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)(l.RM, {
                    children:
                      !t || u
                        ? (0, a.jsx)(a.Fragment, {
                            children: Array.from({ length: 5 }).map((e, t) =>
                              (0, a.jsx)(
                                l.pj,
                                {
                                  className: "h-20",
                                  children: (0, a.jsx)(o.O, {
                                    className: "h-[37px] w-28",
                                  }),
                                },
                                t
                              )
                            ),
                          })
                        : e && (null == n ? void 0 : n.length)
                        ? null == x
                          ? void 0
                          : x.map((e, t) =>
                              (0, a.jsx)(
                                d.StakeHistoryRow,
                                { transaction: e },
                                t
                              )
                            )
                        : (0, a.jsx)(l.SC, {
                            className: " h-20",
                            children: (0, a.jsx)(l.pj, {
                              colSpan: 5,
                              className: "text-center",
                              children: e
                                ? "No staking history available"
                                : "Connect your wallet to see your staking history",
                            }),
                          }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    17386: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          StakeHistoryRow: function () {
            return T;
          },
          StakeType: function () {
            return s;
          },
        });
      var a,
        s,
        r = n(57437),
        i = n(2265),
        o = n(24026),
        l = n(95872),
        c = n(67750),
        d = n(22721),
        u = n(21134),
        x = n(16349),
        f = n(61517),
        h = n(93191),
        m = n(90894),
        g = n(46717),
        p = n(26032),
        b = n(56717),
        j = n(3367),
        v = n(42921),
        k = n(13448),
        w = n(21517),
        y = n(88262),
        N = n(82890),
        C = n(17865),
        S = n(84285),
        I = n(16947),
        z = n(52482),
        F = n(65356);
      function T(e) {
        var t, n, a, s;
        let { transaction: T } = e,
          {
            userChainId: P,
            deployment: A,
            account: { address: W },
          } = (0, c.$)(),
          { switchChainAsync: E } = (0, k.useSwitchChain)(),
          D = (0, h.useQueryClient)(),
          { waitForSubgraphSync: R } = (0, C.V)(),
          [L, M] = (0, i.useState)(!1),
          {
            fromTokenType: B,
            fromChainId: V,
            stakerAddress: $,
            refetchFromBalance: q,
            refetchStakingTransactions: O,
            refetchDailySnapshots: U,
          } = (0, F.U)(),
          Z = (0, v.b)(BigInt(T.amount), B.decimals),
          _ =
            Number(T.blockTimestamp) +
            (Number(T.cooldown) || 0) +
            A.estimatedBlockTimeInSeconds,
          [Q, H] = (0, i.useState)(
            "Unstake" === T.action
              ? (0, f._A)((0, p.Q)(Date.now()), _ - 1)
              : null
          ),
          J = (0, i.useMemo)(
            () => "Unstake" !== T.action || (T.index && T.index < 0),
            [T.action, T.index]
          ),
          [K, Y] = (0, i.useState)(
            !!(
              null !== T.index &&
              T.index >= 0 &&
              "Unstake" === T.action &&
              (0, b.A)((0, p.Q)(Date.now()), _)
            )
          );
        async function G() {
          if (null !== T.index && (!T.index || !(T.index < 0)))
            try {
              P !== V && (await (null == E ? void 0 : E({ chainId: V }))),
                M(!0);
              let e = BigInt(T.index),
                t = await (0, m.n)(N.g, {
                  address: $,
                  abi: l.E.REZtake,
                  functionName: "claim",
                  args: [e],
                  chainId: V,
                }),
                n = await (0, g.e)(N.g, { chainId: V, hash: t });
              D.invalidateQueries({
                queryKey: d.o.stake.stakingTransactions.queryKey({
                  userAddress: W,
                  chainId: V,
                }),
              });
              let a = y.m3[V];
              await R(a.subgraphs.reztake, Number(n.blockNumber)),
                O(),
                U(),
                q();
            } catch (e) {
              console.log(e);
            } finally {
              M(!1);
            }
        }
        function X(e) {
          return "Stake" === e
            ? "Stake"
            : "Claim" === e
            ? "Withdraw"
            : "Activate Cooldown";
        }
        return (
          (0, i.useEffect)(() => {
            if ("Unstake" !== T.action || K) return;
            if (Q && 0 === Q.total && null !== T.index && T.index >= 0) {
              Y(!0);
              return;
            }
            let e = setInterval(() => {
              H((0, f._A)((0, p.Q)(Date.now()), _ - 1));
            }, 1e3);
            return () => clearInterval(e);
          }, [Q, _, K, T.action, T.index]),
          (0, r.jsxs)(z.SC, {
            className: "h-20",
            children: [
              (0, r.jsx)(z.pj, {
                children: T.txhash
                  ? (0, r.jsxs)("a", {
                      className: "flex flex-row items-center gap-x-1",
                      href: (0, u.kY)(
                        null !==
                          (a =
                            null === (n = w.JP[V]) || void 0 === n
                              ? void 0
                              : null === (t = n.blockExplorers) || void 0 === t
                              ? void 0
                              : t.default.url) && void 0 !== a
                          ? a
                          : A.etherscanURL,
                        T.txhash
                      ),
                      target: "_blank",
                      children: [
                        X(T.action),
                        (0, r.jsx)(o.h, { className: "size-4" }),
                      ],
                    })
                  : X(T.action),
              }),
              (0, r.jsx)(z.pj, {
                children: (0, r.jsx)("div", {
                  children: (0, f.wX)((0, j.K)(Number(T.blockTimestamp))),
                }),
              }),
              (0, r.jsx)(z.pj, {
                children:
                  !J && Q && "Unstake" === T.action
                    ? (0, r.jsx)(S.I, { countdown: Q })
                    : null,
              }),
              (0, r.jsx)(z.pj, {
                children: (0, r.jsxs)("div", {
                  className: "flex flex-row items-center gap-x-1",
                  children: [
                    (0, r.jsx)("div", { children: (0, f.ZO)(Z) }),
                    (0, r.jsx)("div", { children: B.symbol }),
                  ],
                }),
              }),
              (0, r.jsx)(z.pj, {
                children:
                  "Stake" === (s = T.action) || "Claim" === s
                    ? (0, r.jsx)("button", {
                        disabled: !0,
                        className:
                          "pointer-events-none w-[200px] rounded-md bg-[#E0E0E0] py-3 text-center text-[#A7A7A7] dark:bg-[#373941] dark:text-[#5A5A5A]",
                        children: "Stake" === s ? "Staked" : "Withdrawn",
                      })
                    : "Unstake" === s && J
                    ? (0, r.jsx)("button", {
                        disabled: !0,
                        className:
                          "pointer-events-none w-[200px] rounded-md bg-[#E0E0E0] py-3 text-center text-[#A7A7A7] dark:bg-[#373941] dark:text-[#5A5A5A]",
                        children: "Withdrawn",
                      })
                    : (0, r.jsx)("button", {
                        disabled: !K || L,
                        className: (0, x.cn)(
                          "bg-primary-500 text-secondary-600 hover:bg-primary-600 w-[200px] rounded-md py-3 text-center",
                          {
                            "cursor-pointer": K,
                            "bg-[#FFF0BB] text-[#F0BB00] dark:bg-[#372E12] dark:text-[#705F2A] pointer-events-none":
                              !K || L,
                          }
                        ),
                        onClick: K ? () => G() : void 0,
                        children:
                          K && !L
                            ? "Withdraw"
                            : L
                            ? (0, r.jsxs)("div", {
                                className:
                                  "flex flex-row items-center justify-center gap-x-3",
                                children: [
                                  (0, r.jsx)(I.$, { size: 15 }),
                                  (0, r.jsx)("span", { children: "Pending" }),
                                ],
                              })
                            : "Cooldown Period",
                      }),
              }),
            ],
          })
        );
      }
      ((a = s || (s = {})).Stake = "Stake"),
        (a.Cooldown = "Unstake"),
        (a.Claim = "Claim");
    },
    23213: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          StakeInfo: function () {
            return r;
          },
        });
      var a = n(57437),
        s = n(65356);
      function r() {
        let { fromTokenType: e } = (0, s.U)();
        return (0, a.jsxs)("div", {
          className: "flex flex-col gap-y-4",
          children: [
            (0, a.jsx)("div", {
              className: "text-xl font-semibold",
              children: "Learn More About Staking",
            }),
            (0, a.jsx)("div", {
              className: "flex flex-row",
              children: (0, a.jsxs)("div", {
                className: "text-gray-500 dark:text-gray-200",
                children: [
                  "$"
                    .concat(e.symbol, " staking allows users to stake their $")
                    .concat(
                      e.symbol,
                      " and boost their ezPoints based on staking and Reno ecosystem activity.  Receive 1 ezPoint per hour for every 5,000 $"
                    )
                    .concat(e.symbol, " staked."),
                ],
              }),
            }),
          ],
        });
      }
    },
    19859: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var a = n(57437);
      function s(e) {
        let { width: t = 50 } = e;
        return (0, a.jsxs)("svg", {
          width: t,
          height: t,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, a.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "11.4286",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.14286",
            }),
            (0, a.jsx)("path", {
              d: "M12 11.4287V16.5716",
              stroke: "currentColor",
              strokeWidth: "1.14286",
              strokeLinecap: "round",
            }),
            (0, a.jsx)("path", {
              d: "M12 7.42871L12 8.57157",
              stroke: "currentColor",
              strokeWidth: "1.14286",
              strokeLinecap: "round",
            }),
          ],
        });
      }
    },
    55158: function (e, t, n) {
      "use strict";
      n.d(t, {
        n: function () {
          return s;
        },
      });
      var a = n(57437);
      function s(e) {
        return (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          ...e,
          children: (0, a.jsx)("path", { d: "M20 6 9 17l-5-5" }),
        });
      }
    },
    56967: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return s;
        },
      });
      var a = n(57437);
      function s(e) {
        return (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "14",
          height: "8",
          viewBox: "0 0 14 8",
          fill: "none",
          ...e,
          children: (0, a.jsx)("path", {
            d: "M12.9258 1.16797L6.92578 7.16797L0.925781 1.16797",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        });
      }
    },
    24026: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return s;
        },
      });
      var a = n(57437);
      function s(e) {
        return (0, a.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          ...e,
          children: [
            (0, a.jsx)("path", { d: "M15 3h6v6" }),
            (0, a.jsx)("path", { d: "M10 14 21 3" }),
            (0, a.jsx)("path", {
              d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            }),
          ],
        });
      }
    },
    81860: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return o;
        },
      });
      var a = n(57437),
        s = n(66648),
        r = n(16349),
        i = n(21517);
      function o(e) {
        let {
            chainId: t,
            iconSize: n = 12,
            priority: o = !0,
            className: l,
            iconClassName: c,
          } = e,
          d = i.JP[t];
        return d && d.icon
          ? (0, a.jsx)("span", {
              className: (0, r.cn)(
                "relative flex items-center justify-center overflow-hidden",
                l
              ),
              style: { width: "".concat(n, "px"), height: "".concat(n, "px") },
              children: (0, a.jsx)(s.default, {
                src: d.icon,
                width: n,
                height: n,
                alt: "".concat((0, i.qz)(d), " icon"),
                priority: o,
                className: (0, r.cn)("size-full rounded-full", c),
              }),
            })
          : null;
      }
    },
    84285: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return r;
        },
      });
      var a = n(57437),
        s = n(16349);
      function r(e) {
        let { countdown: t, className: n } = e;
        return (0, a.jsxs)("div", {
          className: (0, s.cn)("flex flex-row gap-x-1", n),
          children: [
            (0, a.jsxs)("span", { children: [t.days, "d"] }),
            (0, a.jsxs)("span", { children: [t.hours, "h"] }),
            (0, a.jsxs)("span", { children: [t.minutes, "m"] }),
            (0, a.jsxs)("span", { children: [Math.floor(t.seconds), "s"] }),
          ],
        });
      }
    },
    52482: function (e, t, n) {
      "use strict";
      n.d(t, {
        iA: function () {
          return i;
        },
        RM: function () {
          return c;
        },
        pj: function () {
          return x;
        },
        yt: function () {
          return d;
        },
        ss: function () {
          return l;
        },
        xD: function () {
          return o;
        },
        SC: function () {
          return u;
        },
      });
      var a = n(57437),
        s = n(2265),
        r = n(16349);
      let i = s.forwardRef((e, t) => {
        let { className: n, ...s } = e;
        return (0, a.jsx)("div", {
          className:
            "w-full overflow-x-auto rounded-3xl border border-white/20 bg-white/50 from-black/50 via-black/[0.3673] to-black/30 shadow dark:border-black/50 dark:bg-transparent dark:bg-gradient-to-b",
          children: (0, a.jsx)("table", {
            ref: t,
            className: (0, r.cn)("w-full overflow-hidden", n),
            ...s,
          }),
        });
      });
      i.displayName = "Table";
      let o = s.forwardRef((e, t) => {
        let { className: n, ...s } = e;
        return (0, a.jsx)("thead", {
          ref: t,
          className: (0, r.cn)("dark:border-white/10", n),
          ...s,
        });
      });
      o.displayName = "TableHeader";
      let l = s.forwardRef((e, t) => {
        let { className: n, ...s } = e;
        return (0, a.jsx)("th", {
          ref: t,
          className: (0, r.cn)(
            "text-text-secondary whitespace-nowrap px-6 py-4 text-start text-[11px] font-semibold uppercase",
            n
          ),
          ...s,
        });
      });
      l.displayName = "TableHead";
      let c = s.forwardRef((e, t) => {
        let { className: n, ...s } = e;
        return (0, a.jsx)("tbody", { ref: t, className: (0, r.cn)(n), ...s });
      });
      c.displayName = "TableBody";
      let d = s.forwardRef((e, t) => {
        let { className: n, ...s } = e;
        return (0, a.jsx)("tfoot", {
          ref: t,
          className: (0, r.cn)(
            "font-medium dark:border-white/10 dark:bg-transparent [&>tr]:last:border-b-0",
            n
          ),
          ...s,
        });
      });
      d.displayName = "TableFooter";
      let u = s.forwardRef((e, t) => {
        let { className: n, onClick: s, ...i } = e;
        return (0, a.jsx)("tr", {
          ref: t,
          onClick: s,
          className: (0, r.cn)(
            "text-text-primary",
            {
              "hover:bg-table-hover/80 dark:hover:bg-table-hover/20 cursor-pointer":
                s,
            },
            n
          ),
          ...i,
        });
      });
      u.displayName = "TableRow";
      let x = s.forwardRef((e, t) => {
        let { className: n, ...s } = e;
        return (0, a.jsx)("td", {
          ref: t,
          className: (0, r.cn)("font-open-sans whitespace-nowrap px-6 py-4", n),
          ...s,
        });
      });
      x.displayName = "TableCell";
    },
    63197: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return o;
        },
      });
      var a = n(57437),
        s = n(66648),
        r = n(16349),
        i = n(81860);
      function o(e) {
        let {
          token: t,
          iconSize: n = 24,
          chainIconSize: o = 12,
          priority: l = !0,
          className: c,
          iconClassName: d,
          chainId: u,
        } = e;
        return (0, a.jsxs)("span", {
          className: (0, r.cn)(
            "relative flex items-center justify-center overflow-hidden",
            c
          ),
          style: { width: "".concat(n, "px"), height: "".concat(n, "px") },
          children: [
            t.icon.auto
              ? (0, a.jsx)(s.default, {
                  src: t.icon.auto,
                  width: n,
                  height: n,
                  alt: "".concat(t.name, " icon"),
                  priority: l,
                  className: (0, r.cn)("size-full rounded-full", d),
                })
              : t.icon.dark && t.icon.light
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(s.default, {
                      src: t.icon.light,
                      alt: "".concat(t.name, " icon"),
                      height: n,
                      width: n,
                      priority: l,
                      className: (0, r.cn)(
                        "block size-full rounded-full dark:hidden",
                        d
                      ),
                    }),
                    (0, a.jsx)(s.default, {
                      src: t.icon.dark,
                      alt: "".concat(t.name, " icon"),
                      height: n,
                      width: n,
                      priority: l,
                      className: (0, r.cn)(
                        "hidden size-full rounded-full dark:block",
                        d
                      ),
                    }),
                  ],
                })
              : null,
            u
              ? (0, a.jsx)(i.f, {
                  chainId: u,
                  iconSize: o,
                  className:
                    "border-background absolute bottom-0 right-0 rounded-full border",
                })
              : null,
          ],
        });
      }
    },
    98234: function (e, t, n) {
      "use strict";
      n.d(t, {
        H: function () {
          return F;
        },
      });
      var a = n(57437),
        s = n(2265),
        r = n(56967),
        i = n(16349),
        o = n(63197),
        l = n(21517),
        c = n(13962),
        d = n(34129),
        u = n(81860),
        x = n(37947);
      let f = [l.p5.mainnet.id, l.p5.arbitrum.id, l.p5.bsc.id];
      function h(e) {
        let { chains: t, onChainSelect: n, selectedChainId: r } = e,
          o = (0, s.useMemo)(
            () =>
              [...t].sort((e, t) => {
                if (e.isComingSoon !== t.isComingSoon)
                  return e.isComingSoon ? 1 : -1;
                if (!e.isComingSoon) {
                  let n = f.indexOf(e.id),
                    a = f.indexOf(t.id);
                  return (
                    -1 === n && (n = 1 / 0), -1 === a && (a = 1 / 0), n - a
                  );
                }
                return 0;
              }),
            [t]
          );
        return (0, a.jsx)("div", {
          className: "flex flex-wrap gap-1",
          children: o.map((e) =>
            (0, a.jsxs)(
              "div",
              {
                children: [
                  (0, a.jsx)("button", {
                    className: (0, i.cn)(
                      "rounded-lg border border-neutral-400/20 bg-neutral-200 p-1.5 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600/50",
                      {
                        "bg-neutral-300 dark:bg-neutral-400/50 hover:bg-neutral-300 dark:hover:bg-neutral-400/50":
                          e.id === r,
                      }
                    ),
                    onClick: () => n(e.id),
                    children: (0, a.jsx)(u.f, { chainId: e.id, iconSize: 40 }),
                  }),
                  e.isComingSoon
                    ? (0, a.jsx)(x.Z.F, {
                        className: "text-right text-xs",
                        children: "• Soon",
                      })
                    : null,
                ],
              },
              e.id
            )
          ),
        });
      }
      var m = n(67750),
        g = n(22721),
        p = n(36653),
        b = n(69907),
        j = n(54288),
        v = n(61517),
        k = n(6359);
      function w(e) {
        let {
            token: t,
            onTokenSelect: n,
            shouldLoadBalance: s,
            isConnected: r,
            isLoadingBalance: i,
            balance: l,
          } = e,
          d = (0, c.t)();
        return (0, a.jsxs)("button", {
          className:
            "flex w-full select-none flex-row items-center justify-between rounded-lg p-2 hover:bg-neutral-200 dark:hover:bg-neutral-700/50",
          onClick: () => n(t),
          children: [
            (0, a.jsxs)("div", {
              className: "flex items-center gap-x-2",
              children: [
                (0, a.jsx)(o.T, {
                  token: t,
                  iconSize: 40,
                  chainId: t.chainId,
                  chainIconSize: 16,
                }),
                (0, a.jsxs)("div", {
                  className: "flex flex-col items-start justify-center",
                  children: [
                    (0, a.jsx)(x.Z.Dx, {
                      className: "font-semibold",
                      children: t.symbol,
                    }),
                    (0, a.jsx)(x.Z.uT, { children: t.name }),
                  ],
                }),
              ],
            }),
            s && d && r
              ? (0, a.jsx)(a.Fragment, {
                  children: i
                    ? (0, a.jsx)(k.O, { className: "h-5 w-14" })
                    : (0, a.jsx)(x.Z.uT, {
                        children: (0, v.ZO)(null != l ? l : 0),
                      }),
                })
              : null,
          ],
        });
      }
      function y(e) {
        var t;
        let { tokens: n, onTokenSelect: s, disallowSelection: r } = e,
          {
            evm: {
              account: { address: o, isConnected: l },
            },
            solana: {
              account: { userAddress: c, isConnected: d },
            },
          } = (0, m.$)(),
          u = n.filter((e) => e.chainType === j.J.EVM),
          x = (0, b.useQueries)({
            queries: u.map((e) => ({
              queryKey: g.o.onchain.ERC20TokenBalance.queryKey({
                userAddress: o,
                tokenAddress: (0, p.BB)(e.address) ? void 0 : e.address,
                chainId: e.chainId,
              }),
              queryFn: g.o.onchain.ERC20TokenBalance.queryFn,
              enabled: null != o && l && u.length > 0,
            })),
          }),
          f = n.filter((e) => e.chainType === j.J.Solana),
          { data: h, isLoading: v } = g.o.solana.tokenBalances.useQuery(
            {
              userAddress: c,
              chainId: null === (t = f[0]) || void 0 === t ? void 0 : t.chainId,
            },
            { enabled: null != c && d && f.length > 0 }
          ),
          k = {
            ...Object.fromEntries(u.map((e, t) => [e.address, x[t].data])),
            ...(null != h ? h : {}),
          },
          y = x.some((e) => e.isLoading) || v;
        return (0, a.jsx)("div", {
          className: (0, i.cn)(
            "flex h-[260px] flex-col gap-y-1 overflow-y-auto overflow-x-hidden",
            { "pointer-events-none opacity-50": r }
          ),
          children: n.map((e, t) => {
            var n, i;
            return (0, a.jsx)(
              w,
              {
                token: e,
                onTokenSelect: s,
                balance:
                  null !==
                    (i =
                      null === (n = k[e.address]) || void 0 === n
                        ? void 0
                        : n.formatted) && void 0 !== i
                    ? i
                    : null,
                isLoadingBalance: y,
                shouldLoadBalance: !r,
                isConnected: e.chainType === j.J.EVM ? l : d,
              },
              t
            );
          }),
        });
      }
      function N(e) {
        let {
            isOpen: t,
            onOpenChange: n,
            selectedToken: r,
            tokens: i,
            onTokenSelect: o,
          } = e,
          u = (0, c.t)(),
          x = (0, s.useMemo)(
            () =>
              i.reduce(
                (e, t) => (
                  e.includes(l.JP[t.chainId]) || e.push(l.JP[t.chainId]), e
                ),
                []
              ),
            [i]
          ),
          f = (0, s.useMemo)(
            () =>
              i.reduce(
                (e, t) => (
                  e[t.chainId] || (e[t.chainId] = []), e[t.chainId].push(t), e
                ),
                {}
              ),
            [i]
          ),
          [m, g] = (0, s.useState)(r ? r.chainId : x[0].id),
          p = f[m],
          b = l.JP[m];
        return (
          (0, s.useEffect)(() => {
            r &&
              !t &&
              setTimeout(() => {
                u && g(r.chainId);
              }, d.GV);
          }, [r, t, u]),
          (0, a.jsx)(d.Vq, {
            open: t,
            onOpenChange: n,
            children: (0, a.jsxs)(d.cZ, {
              className: "sm:w-[400px]",
              children: [
                (0, a.jsx)(d.fK, {
                  children: (0, a.jsx)(d.$N, { children: "Select Token" }),
                }),
                (0, a.jsxs)("div", {
                  className: "flex flex-col gap-y-4",
                  children: [
                    (0, a.jsx)(h, {
                      chains: x,
                      onChainSelect: function (e) {
                        g(e);
                      },
                      selectedChainId: m,
                    }),
                    (0, a.jsx)(y, {
                      tokens: p,
                      onTokenSelect: o,
                      disallowSelection: !!(null == b
                        ? void 0
                        : b.isComingSoon),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      var C = n(45875),
        S = n(55158);
      function I(e) {
        let { token: t, onTokenSelect: n, isSelected: s } = e;
        return (0, a.jsxs)("button", {
          className:
            "flex items-center gap-x-2 whitespace-nowrap rounded-xl p-2 hover:bg-neutral-300/10 dark:text-[#8C90A5] dark:hover:bg-neutral-400/20",
          onClick: () => n(t),
          children: [
            (0, a.jsxs)("span", {
              className: "inline-flex items-center gap-x-2",
              children: [
                (0, a.jsx)(o.T, { token: t, iconSize: 27, chainId: t.chainId }),
                t.symbol,
              ],
            }),
            s
              ? (0, a.jsx)(S.n, { className: "text-primary ml-auto size-4" })
              : null,
          ],
        });
      }
      function z(e) {
        let {
          isOpen: t,
          onOpenChange: n,
          selectedToken: s,
          tokens: r,
          onTokenSelect: i,
          trigger: o,
        } = e;
        return (0, a.jsxs)(C.J2, {
          open: t,
          onOpenChange: n,
          children: [
            (0, a.jsx)(C.xo, { asChild: !0, children: o }),
            (0, a.jsx)(C.yk, {
              className: "w-40 p-1",
              align: "start",
              children: (0, a.jsx)("div", {
                className: "flex flex-col gap-y-2",
                children: r.map((e, t) =>
                  (0, a.jsx)(
                    I,
                    {
                      token: e,
                      onTokenSelect: i,
                      isSelected: e.address === s.address,
                    },
                    t
                  )
                ),
              }),
            }),
          ],
        });
      }
      function F(e) {
        let {
            token: t,
            tokens: n,
            onTokenSelect: l,
            display: c = "dialog",
          } = e,
          [d, u] = (0, s.useState)(!1),
          x = !!l,
          f = (0, a.jsxs)("button", {
            disabled: !x,
            className: (0, i.cn)(
              "relative flex flex-row items-center justify-start gap-2 px-1"
            ),
            onClick: l ? () => u(!0) : void 0,
            children: [
              (0, a.jsx)(o.T, { token: t, iconSize: 27, chainId: t.chainId }),
              (0, a.jsx)("span", {
                className: "text-md font-medium md:text-lg",
                children: t.symbol,
              }),
              x
                ? (0, a.jsx)(r.v, { className: "text-text-primary size-3" })
                : null,
            ],
          });
        return x && n && (null == n ? void 0 : n.length) > 0
          ? "dialog" === c
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  f,
                  (0, a.jsx)(N, {
                    isOpen: d,
                    onOpenChange: u,
                    tokens: n,
                    selectedToken: t,
                    onTokenSelect: (e) => {
                      null == l || l(e), u(!1);
                    },
                  }),
                ],
              })
            : (0, a.jsx)(z, {
                isOpen: d,
                onOpenChange: u,
                tokens: n,
                selectedToken: t,
                onTokenSelect: (e) => {
                  null == l || l(e), u(!1);
                },
                trigger: f,
              })
          : f;
      }
    },
    16947: function (e, t, n) {
      "use strict";
      n.d(t, {
        $: function () {
          return i;
        },
      });
      var a = n(57437);
      function s(e) {
        let { size: t = 50 } = e;
        return (0, a.jsx)("div", {
          className: "animate-spin-slow",
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            height: t,
            width: t,
            viewBox: "0 0 1024 1024",
            fill: "currentColor",
            children: (0, a.jsx)("path", {
              d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z",
            }),
          }),
        });
      }
      n(2265);
      var r = n(16349);
      function i(e) {
        let { size: t = 100, className: n } = e;
        return (0, a.jsx)("div", {
          className: (0, r.cn)("text-primary-500 flex", n),
          children: (0, a.jsx)(s, { size: t }),
        });
      }
    },
    41218: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return d;
        },
      });
      var a = n(57437),
        s = n(2265),
        r = n(16349),
        i = n(71538),
        o = n(12218),
        l = n(16947);
      let c = (0, o.j)(
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
        d = s.forwardRef((e, t) => {
          let { className: n, variant: s, size: o, asChild: d = !1, ...u } = e,
            x = d ? i.g7 : "button",
            { children: f, isLoading: h, ...m } = u;
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)(x, {
              className: (0, r.cn)(c({ variant: s, size: o, className: n }), {
                isLoading: "opacity-50",
              }),
              ref: t,
              disabled: h,
              ...m,
              children: [
                h
                  ? (0, a.jsx)(l.$, { className: "text-inherit", size: 16 })
                  : null,
                f,
              ],
            }),
          });
        });
      d.displayName = "Button";
    },
    34129: function (e, t, n) {
      "use strict";
      n.d(t, {
        Vq: function () {
          return l;
        },
        cZ: function () {
          return f;
        },
        cN: function () {
          return m;
        },
        fK: function () {
          return h;
        },
        $N: function () {
          return g;
        },
        hg: function () {
          return c;
        },
        GV: function () {
          return x;
        },
      });
      var a = n(57437),
        s = n(2265),
        r = n(16349),
        i = n(13304),
        o = n(61379);
      let l = i.fC,
        c = i.xz,
        d = i.h_;
      i.x8;
      let u = s.forwardRef((e, t) => {
        let { className: n, ...s } = e;
        return (0, a.jsx)(i.aV, {
          ref: t,
          className: (0, r.cn)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
            n
          ),
          ...s,
        });
      });
      u.displayName = i.aV.displayName;
      let x = 200,
        f = s.forwardRef((e, t) => {
          let {
            className: n,
            showOverlay: s = !0,
            showCloseButton: l = !0,
            position: c = "center",
            children: x,
            ...f
          } = e;
          return (0, a.jsxs)(d, {
            children: [
              s ? (0, a.jsx)(u, {}) : null,
              (0, a.jsxs)(i.VY, {
                ref: t,
                className: (0, r.cn)(
                  "bg-dialog",
                  "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
                  "fixed left-1/2 right-0 top-full z-50 flex w-[100%] max-w-2xl translate-x-[-50%] translate-y-[-100%] flex-col gap-y-8 p-6",
                  "outline-none duration-200 sm:top-1/2 sm:w-[calc(100%_-_32px)] sm:translate-y-[-50%] sm:rounded-lg sm:dark:border sm:dark:border-neutral-600",
                  {
                    "md:left-auto md:right-0 md:h-full md:translate-x-0 md:data-[state=open]:slide-in-from-right-full md:data-[state=closed]:slide-out-to-right-full md:rounded-r-none md:data-[state=closed]:zoom-out-100 md:data-[state=open]:zoom-in-100 md:border-y-none md:border-r-none":
                      "right" === c,
                  },
                  n
                ),
                ...f,
                children: [
                  x,
                  l
                    ? (0, a.jsxs)(i.x8, {
                        className:
                          "absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none",
                        children: [
                          (0, a.jsx)(o.oHP, {}),
                          (0, a.jsx)("span", {
                            className: "sr-only",
                            children: "Close",
                          }),
                        ],
                      })
                    : null,
                ],
              }),
            ],
          });
        });
      f.displayName = i.VY.displayName;
      let h = (e) => {
        let { className: t, ...n } = e;
        return (0, a.jsx)("div", {
          className: (0, r.cn)("flex flex-col space-y-1.5 text-center", t),
          ...n,
        });
      };
      h.displayName = "DialogHeader";
      let m = (e) => {
        let { className: t, ...n } = e;
        return (0, a.jsx)("div", {
          className: (0, r.cn)(
            "grid auto-cols-fr grid-flow-col justify-end gap-2 lg:auto-cols-min",
            t
          ),
          ...n,
        });
      };
      m.displayName = "DialogFooter";
      let g = s.forwardRef((e, t) => {
        let { className: n, ...s } = e;
        return (0, a.jsx)(i.Dx, {
          ref: t,
          className: (0, r.cn)(
            "font-poppins text-2xl font-semibold leading-[120%] tracking-tight",
            n
          ),
          ...s,
        });
      });
      (g.displayName = i.Dx.displayName),
        (s.forwardRef((e, t) => {
          let { className: n, ...s } = e;
          return (0, a.jsx)(i.dk, {
            ref: t,
            className: (0, r.cn)("text-sm", n),
            ...s,
          });
        }).displayName = i.dk.displayName);
    },
    45875: function (e, t, n) {
      "use strict";
      n.d(t, {
        J2: function () {
          return o;
        },
        yk: function () {
          return c;
        },
        xo: function () {
          return l;
        },
      });
      var a = n(57437),
        s = n(2265),
        r = n(16349),
        i = n(61485);
      let o = i.fC,
        l = i.xz,
        c = s.forwardRef((e, t) => {
          let {
            className: n,
            align: s = "center",
            sideOffset: o = 12,
            ...l
          } = e;
          return (0, a.jsx)(i.h_, {
            children: (0, a.jsx)(i.VY, {
              ref: t,
              align: s,
              sideOffset: o,
              className: (0, r.cn)(
                "bg-popover",
                "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                "z-50 w-72 rounded-xl p-4 outline-none",
                "border dark:border-neutral-600",
                n
              ),
              ...l,
            }),
          });
        });
      c.displayName = i.VY.displayName;
    },
    61736: function (e, t, n) {
      "use strict";
      function a(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "ethereum";
        return "https://app.uniswap.org/explore/tokens/"
          .concat(t, "/")
          .concat(e);
      }
      function s(e) {
        return "https://renzoezeth.enzyme.community/vault/".concat(e);
      }
      function r() {
        return "https://app.aave.com/markets/?marketName=proto_lido_v3";
      }
      function i() {
        return "https://yieldlayer.cian.app/vaults/0x3D086B688D7c0362BE4f9600d626f622792c4a20?chainId=1";
      }
      n.d(t, {
        Gu: function () {
          return i;
        },
        WM: function () {
          return a;
        },
        b1: function () {
          return r;
        },
        sF: function () {
          return s;
        },
      });
    },
    13962: function (e, t, n) {
      "use strict";
      n.d(t, {
        t: function () {
          return s;
        },
      });
      var a = n(2265);
      function s() {
        let [e, t] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            t(!0);
          }, []),
          e
        );
      }
    },
    38981: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return d;
        },
      });
      var a = n(2265),
        s = n(84355),
        r = n(70096),
        i = n(387),
        o = n(67750),
        l = n(22721),
        c = n(36653);
      function d() {
        var e, t, n;
        let { deployment: d } = (0, o.$)(),
          { data: u, isLoading: x } = l.o.prices.tokenPrices.useQuery({
            chainId: d.chain.id,
          }),
          f = (0, a.useCallback)(
            (e, t) => {
              if (!e) return 0;
              let n = (0, c.M4)(e.toLowerCase(), t);
              return (null == u ? void 0 : u[n]) || 0;
            },
            [u]
          ),
          h = f(i.TV.ETH.supportedChains[d.chain.id].address, d.chain.id),
          m = f(
            null === (e = i.TV.wstETH.supportedChains[d.chain.id]) ||
              void 0 === e
              ? void 0
              : e.address,
            d.chain.id
          ),
          g = f(
            null === (t = i.TV.ezETH.supportedChains[d.chain.id]) ||
              void 0 === t
              ? void 0
              : t.address,
            d.chain.id
          );
        return {
          ethPrice: h,
          wstETHPrice: m,
          pzETHPrice: f(
            null === (n = i.TV.pzETH.supportedChains[d.chain.id]) ||
              void 0 === n
              ? void 0
              : n.address,
            d.chain.id
          ),
          ezETHPrice: g,
          rezPrice: f(r.F.address, r.F.chainId),
          eigenPrice: f(s.Y.address, s.Y.chainId),
          getTokenPrice: f,
          tokenPrices: u,
          isLoadingTokenPrices: x,
        };
      }
    },
    17865: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return i;
        },
      });
      var a = n(2265),
        s = n(22721),
        r = n(93191);
      function i() {
        let e = (0, r.useQueryClient)();
        return {
          waitForSubgraphSync: (0, a.useCallback)(
            function (t, n) {
              let a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 2e3;
              return new Promise((r, i) => {
                let o = setInterval(async () => {
                  try {
                    (await e.fetchQuery({
                      queryKey: s.o.subgraph.getBlockNumber.queryKey({
                        subgraphURI: t,
                      }),
                      queryFn: s.o.subgraph.getBlockNumber.queryFn,
                    })) >= n && (clearInterval(o), r());
                  } catch (e) {
                    console.error("Error polling subgraph:", e),
                      clearInterval(o),
                      i(e);
                  }
                }, a);
              });
            },
            [e]
          ),
        };
      }
    },
    8008: function (e, t, n) {
      "use strict";
      n.d(t, {
        TransactionStateProvider: function () {
          return c;
        },
        g7: function () {
          return s;
        },
        hg: function () {
          return o;
        },
        pl: function () {
          return d;
        },
      });
      var a,
        s,
        r = n(57437),
        i = n(2265);
      ((a = s || (s = {}))[(a.NotInitiatied = 0)] = "NotInitiatied"),
        (a[(a.WaitingForAllowance = 1)] = "WaitingForAllowance"),
        (a[(a.ProcessingAllowance = 2)] = "ProcessingAllowance"),
        (a[(a.WaitingForDeposit = 3)] = "WaitingForDeposit"),
        (a[(a.ProcessingDeposit = 4)] = "ProcessingDeposit"),
        (a[(a.Delegation = 5)] = "Delegation"),
        (a[(a.WaitingForDelegation = 6)] = "WaitingForDelegation"),
        (a[(a.ProcessingDelegation = 7)] = "ProcessingDelegation"),
        (a[(a.WaitingForConfirmation = 8)] = "WaitingForConfirmation"),
        (a[(a.ProcessingConfirmation = 9)] = "ProcessingConfirmation"),
        (a[(a.WaitingForCooldown = 10)] = "WaitingForCooldown"),
        (a[(a.ProcessingCooldown = 11)] = "ProcessingCooldown"),
        (a[(a.WaitingForWithdrawal = 12)] = "WaitingForWithdrawal"),
        (a[(a.ProcessingWithdrawal = 13)] = "ProcessingWithdrawal"),
        (a[(a.Confirmed = 14)] = "Confirmed"),
        (a[(a.Error = 15)] = "Error");
      let o = {
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
        l = (0, i.createContext)(void 0);
      function c(e) {
        let { children: t } = e,
          n = (function () {
            let [e, t] = (0, i.useState)(0),
              [n, a] = (0, i.useState)(void 0),
              [s, r] = (0, i.useState)(void 0),
              [o, l] = (0, i.useState)(void 0);
            return {
              transactionState: e,
              setTransactionState: t,
              depositHash: s,
              setDepositHash: r,
              tokenAllowanceHash: n,
              setTokenAllowanceHash: a,
              confirmationHash: o,
              setConfirmationHash: l,
            };
          })();
        return (0, r.jsx)(l.Provider, { value: n, children: t });
      }
      function d() {
        let e = (0, i.useContext)(l);
        if (void 0 === e)
          throw Error(
            "useTransactionState must be used within a TransactionStateProvider"
          );
        return e;
      }
    },
    88190: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return o;
        },
        q: function () {
          return i;
        },
      });
      var a = n(57437),
        s = n(2265);
      let r = (0, s.createContext)(void 0);
      function i(e) {
        let { children: t } = e,
          n = (function () {
            let [e, t] = (0, s.useState)(!1),
              [n, a] = (0, s.useState)(!1),
              r = (0, s.useCallback)(() => t(!0), []);
            return {
              evmWalletDialogOpen: e,
              openEVMWalletDialog: r,
              closeEVMWalletDialog: (0, s.useCallback)(() => t(!1), []),
              setEVMWalletDialogOpen: t,
              solanaWalletDialogOpen: n,
              openSolanaWalletDialog: (0, s.useCallback)(() => a(!0), []),
              closeSolanaWalletDialog: (0, s.useCallback)(() => a(!1), []),
            };
          })();
        return (0, a.jsx)(r.Provider, { value: n, children: t });
      }
      function o() {
        let e = (0, s.useContext)(r);
        if (void 0 === e)
          throw Error(
            "useWalletDialog must be used within a WalletDialogProvider"
          );
        return e;
      }
    },
    21134: function (e, t, n) {
      "use strict";
      function a(e, t) {
        let [n, a] = e.split("?");
        return ""
          .concat(n)
          .concat(t)
          .concat(a ? "?".concat(a) : "");
      }
      function s(e, t) {
        return a(e, "/token/".concat(t));
      }
      function r(e, t) {
        return a(e, "/tx/".concat(t));
      }
      n.d(t, {
        Li: function () {
          return s;
        },
        kY: function () {
          return r;
        },
      });
    },
  },
  function (e) {
    e.O(
      0,
      [
        3814, 2420, 5088, 3712, 1391, 2174, 4630, 1581, 5737, 1294, 1485, 8843,
        7138, 3304, 277, 5344, 6141, 2971, 7023, 1744,
      ],
      function () {
        return e((e.s = 63848));
      }
    ),
      (_N_E = e.O());
  },
]);
