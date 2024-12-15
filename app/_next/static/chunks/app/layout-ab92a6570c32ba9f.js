(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185],
  {
    93172: function (e, t, n) {
      Promise.resolve().then(n.t.bind(n, 53054, 23)),
        Promise.resolve().then(n.t.bind(n, 43034, 23)),
        Promise.resolve().then(n.t.bind(n, 11884, 23)),
        Promise.resolve().then(n.t.bind(n, 68262, 23)),
        Promise.resolve().then(n.t.bind(n, 64987, 23)),
        Promise.resolve().then(n.t.bind(n, 9003, 23)),
        Promise.resolve().then(n.t.bind(n, 98878, 23)),
        Promise.resolve().then(n.bind(n, 18350)),
        Promise.resolve().then(n.bind(n, 51500));
    },
    18350: function (e, t, n) {
      "use strict";
      n.d(t, {
        Providers: function () {
          return ef;
        },
      });
      var a,
        s,
        l = n(57437),
        r = n(2265),
        i = n(63874),
        o = n(59067),
        c = n(5518),
        d = n(65442),
        A = n(91910),
        u = n(84990),
        h = n(45538),
        m = n(33494),
        x = n(99062),
        f = n(21963),
        p = n(56189),
        g = n(27187),
        b = n(41977),
        w = n(15856),
        j = n(14202),
        v = n(59808),
        y = n(21517),
        N = n(87168);
      function k(e) {
        let { children: t } = e,
          { solanaChainId: n, solanaCustomEndpoint: a } = (0, o.L)(),
          s = null != a ? a : N.J[n],
          i = (0, r.useMemo)(
            () => [
              new h.O(),
              new m.e(),
              new x.H(),
              new f.B(),
              new p.A(),
              new g.H(),
              new b.T(),
              new w.P(),
              new j.Z({
                network: n === y.Ui ? d.Q.Mainnet : d.Q.Devnet,
                options: { projectId: "ed738ef6fd7b7995b3cfcb969cd15fa5" },
              }),
              new v.X(),
            ],
            [n]
          );
        return (0, l.jsx)(A.U, {
          endpoint: s,
          children: (0, l.jsx)(u.n, {
            wallets: i,
            autoConnect: !0,
            localStorageKey: c.u.solana.walletName,
            children: t,
          }),
        });
      }
      var C = n(8008),
        E = n(58421),
        B = n(93191),
        z = n(79839),
        S = n(50016),
        O = n(82890),
        D = n(66648),
        W = n(88190),
        I = n(90374),
        Q = n.n(I),
        P = n(16442),
        R = n(50571),
        V = n(54288),
        M = {
          src: "/_next/static/media/logo-dark.a4ca0c70.svg",
          height: 1276,
          width: 1277,
          blurWidth: 0,
          blurHeight: 0,
        },
        K = {
          src: "/_next/static/media/logo.fdd5b532.svg",
          height: 1276,
          width: 1277,
          blurWidth: 0,
          blurHeight: 0,
        },
        U = n(32300),
        F = n(34129),
        J = n(16349),
        _ = n(16947);
      function H(e) {
        let {
          isDisabled: t,
          walletName: n,
          walletInstalled: a,
          isConnecting: s,
          onClick: r,
          walletIcon: i,
          className: o,
        } = e;
        return (0, l.jsxs)("button", {
          disabled: t,
          onClick: r,
          className: (0, J.cn)(
            "flex w-full items-center justify-between rounded-xl border border-gray-500/10 bg-gray-50 px-10 py-3 font-normal text-gray-900 duration-200 hover:border-gray-500/50 disabled:cursor-not-allowed disabled:opacity-50  dark:bg-gray-800 dark:text-gray-50",
            o
          ),
          children: [
            (0, l.jsxs)("span", {
              className: "flex items-center gap-x-2",
              children: [
                n,
                a
                  ? (0, l.jsx)("span", {
                      className:
                        "hidden text-[10px] uppercase opacity-50 lg:inline",
                      children: "installed",
                    })
                  : null,
                s ? (0, l.jsx)(_.$, { size: 18 }) : null,
              ],
            }),
            i
              ? (0, l.jsx)("span", {
                  className: "relative flex size-7 items-center justify-center",
                  children: i,
                })
              : null,
          ],
        });
      }
      function L(e) {
        let { isOpen: t, onOpenChange: n, walletConfigs: a, chainType: s } = e,
          [i, o] = (function (e, t) {
            let [n, a] = (0, r.useState)(() => {
              try {
                let n = window.localStorage.getItem(e);
                return n ? JSON.parse(n) : t;
              } catch (e) {
                return console.log(e), t;
              }
            });
            return [
              n,
              (t) => {
                try {
                  let s = t instanceof Function ? t(n) : t;
                  a(s), window.localStorage.setItem(e, JSON.stringify(s));
                } catch (e) {
                  console.log(e);
                }
              },
            ];
          })(c.u.renzoTOS, !1);
        return (0, l.jsx)(F.Vq, {
          open: t,
          onOpenChange: n,
          children: (0, l.jsxs)(F.cZ, {
            className: "p-0 lg:w-[500px]",
            children: [
              (0, l.jsxs)("div", {
                className:
                  "flex flex-col items-center justify-center gap-4 px-8 pt-8",
                children: [
                  (0, l.jsx)(D.default, {
                    src: K,
                    width: 48,
                    height: 48,
                    alt: "",
                    className: "hidden dark:block",
                  }),
                  (0, l.jsx)(D.default, {
                    src: M,
                    width: 48,
                    height: 48,
                    alt: "",
                    className: "dark:hidden",
                  }),
                  (0, l.jsxs)("div", {
                    className:
                      "flex flex-col items-center gap-1 pb-5 text-base text-gray-900 dark:text-gray-50",
                    children: [
                      (0, l.jsxs)("span", {
                        className: "text-lg",
                        children: [
                          "Connect Your ",
                          s === V.J.Solana ? "Solana" : "EVM",
                          " Wallet",
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className:
                          "flex flex-row gap-2 text-xs font-light text-gray-800 dark:text-gray-200",
                        children: [
                          (0, l.jsx)(U.X, {
                            id: "tos-check",
                            checked: i,
                            onCheckedChange: (e) => {
                              o(!0 === e);
                            },
                          }),
                          (0, l.jsxs)("label", {
                            htmlFor: "tos-check",
                            className: "cursor-pointer select-none",
                            children: ["Are you human?"],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className:
                  "flex max-h-[400px] w-full flex-col gap-2 overflow-y-auto px-8 pb-8",
                children: a.map((e) =>
                  (0, l.jsx)(
                    H,
                    {
                      walletName: e.walletName,
                      walletInstalled: e.walletInstalled,
                      walletIcon: e.walletIcon,
                      onClick: e.onClick,
                      isDisabled: !1 === i,
                      isConnecting: e.isConnecting,
                    },
                    e.walletName
                  )
                ),
              }),
            ],
          }),
        });
      }
      ((a = s || (s = {})).WalletConnect = "walletConnect"),
        (a.CoinbaseWallet = "coinbaseWalletSDK"),
        (a.OKXWallet = "OKX Wallet"),
        (a.BinanceWeb3Wallet = "BinanceW3WSDK"),
        (a.MetaMask = "io.metamask"),
        (a.RabbyWallet = "io.rabby");
      let T = {
          walletConnect: {
            src: "/_next/static/media/walletconnect.14855d51.svg",
            height: 400,
            width: 400,
            blurWidth: 0,
            blurHeight: 0,
          },
          coinbaseWalletSDK: {
            src: "/_next/static/media/coinbase.69d24939.svg",
            height: 28,
            width: 29,
            blurWidth: 0,
            blurHeight: 0,
          },
          "OKX Wallet": {
            src: "/_next/static/media/okx.4a9c54c1.png",
            height: 48,
            width: 48,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEUCAgIPDw8PDw8NDQ0sLCxmZmYRERH///+srKyJJHm7AAAABHRSTlP9goOCNjZOigAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC1JREFUeJxNi1EKACAUwlapr/ufOIiK/Bps0tlrICcW4JLKQDSn8sNTNx7nvgAcvwDMegGLvwAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 8,
          },
          BinanceW3WSDK: {
            src: "/_next/static/media/binance.7a52c5c3.jpeg",
            height: 90,
            width: 90,
            blurDataURL:
              "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABmhH/xAAVEAEBAAAAAAAAAAAAAAAAAAATI//aAAgBAQABBQKYf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAECAQE/AQv/xAAXEAADAQAAAAAAAAAAAAAAAAAAEWKB/9oACAEBAAY/Aqen/8QAFxAAAwEAAAAAAAAAAAAAAAAAAHGR8P/aAAgBAQABPyFekP/aAAwDAQACAAMAAAAQ8//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxBdv//EABcRAQADAAAAAAAAAAAAAAAAABEAIUH/2gAIAQIBAT8QJvZ//8QAGxAAAgEFAAAAAAAAAAAAAAAAARGBACExUbH/2gAIAQEAAT8QAYTONy1jua//2Q==",
            blurWidth: 8,
            blurHeight: 8,
          },
        },
        Y = {
          "OKX Wallet":
            "https://chromewebstore.google.com/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge",
          BinanceW3WSDK:
            "https://app.binance.com/en/download?_dp=Ym5jOi8vYXBwLmJpbmFuY2UuY29tL21wL2FwcD9hcHBJZD15Rks1RkNxWXByclhEaVZGYmh5Ung3JnN0YXJ0UGFnZVBhdGg9TDNCaFoyVnpMMkp5YjNkelpYSXZhVzVrWlhnPSZzdGFydFBhZ2VRdWVyeT1kWEpzUFdoMGRIQnpPaTh2WVhCd0xtdGhiV2x1Ynk1bWFXNWhibU5sTHc9PQ==",
        };
      function Z() {
        let { connectors: e, connectAsync: t } = (0, P.useConnect)(),
          { evmWalletDialogOpen: n, closeEVMWalletDialog: a } = (0, W.G)(),
          [i, o] = (0, r.useState)(null),
          c = (0, r.useMemo)(() => {
            function t(e) {
              return e.id === s.BinanceWeb3Wallet
                ? 1
                : e.id === s.OKXWallet
                ? 2
                : "injected" === e.type
                ? e.id === s.MetaMask
                  ? 3
                  : e.id === s.RabbyWallet
                  ? 4
                  : 5
                : 6;
            }
            return Q()([...e], (e) => e.name).sort((e, n) => {
              let a = t(e),
                s = t(n);
              return a !== s ? a - s : 0;
            });
          }, [e]),
          d = (0, r.useCallback)(
            (e) => {
              e || (null != i && i !== s.WalletConnect) || (a(), o(null));
            },
            [a, i]
          ),
          A = (0, r.useCallback)(
            async (e) => {
              try {
                let n;
                o(e.id),
                  e.id === s.BinanceWeb3Wallet && (n = y.p5.bsc.id),
                  await t({ connector: e, chainId: n }),
                  o(null),
                  d(!1);
              } catch (t) {
                if ((o(null), t instanceof R.M && Y[e.id])) {
                  let t = Y[e.id];
                  window.open(t, "_blank");
                }
                console.log(t);
              }
            },
            [t, d]
          ),
          u = (0, r.useMemo)(
            () =>
              c.map((e) => ({
                walletName: e.name,
                walletIcon: T[e.id]
                  ? (0, l.jsx)(D.default, {
                      src: T[e.id],
                      width: 28,
                      height: 28,
                      alt: "",
                    })
                  : e.icon
                  ? (0, l.jsx)("img", {
                      src: e.icon,
                      width: 28,
                      height: 28,
                      alt: "".concat(e.name, " logo"),
                    })
                  : null,
                onClick: () => A(e),
                isConnecting: i === e.id,
              })),
            [A, i, c]
          );
        return (0, l.jsx)(L, {
          isOpen: n,
          onOpenChange: d,
          walletConfigs: u,
          chainType: V.J.EVM,
        });
      }
      var G = n(50277),
        X = n(28782);
      function q() {
        let { solanaWalletDialogOpen: e, closeSolanaWalletDialog: t } = (0,
          W.G)(),
          [n, a] = (0, r.useState)(null),
          { wallets: s, select: i } = (0, X.O)(),
          o = (0, r.useMemo)(() => {
            function e(e) {
              return "Phantom" === e.adapter.name ? 1 : 10;
            }
            let t = [...s].sort((t, n) => {
                let a = e(t),
                  s = e(n);
                return a !== s ? a - s : 0;
              }),
              n = [],
              a = [];
            for (let e of t)
              e.readyState === G.i1.Installed ? n.push(e) : a.push(e);
            return [...n, ...a];
          }, [s]),
          c = (0, r.useCallback)(
            (e) => {
              e || null != n || (t(), a(null));
            },
            [t, n]
          ),
          d = (0, r.useCallback)(
            async (e) => {
              try {
                e.readyState === G.i1.NotDetected && e.adapter.url
                  ? window.open(e.adapter.url, "_blank")
                  : (a(e.adapter.name), i(e.adapter.name), a(null)),
                  c(!1);
              } catch (e) {
                a(null), console.log(e);
              }
            },
            [c, i]
          ),
          A = (0, r.useMemo)(
            () =>
              o.map((e) => ({
                walletName: e.adapter.name,
                walletInstalled: e.readyState === G.i1.Installed,
                walletIcon: e.adapter.icon
                  ? (0, l.jsx)("img", {
                      src: e.adapter.icon,
                      width: 28,
                      height: 28,
                      alt: "".concat(e.adapter.name, " logo"),
                    })
                  : null,
                onClick: () => d(e),
                isConnecting: n === e.adapter.name,
              })),
            [d, n, o]
          );
        return (0, l.jsx)(L, {
          isOpen: e,
          onOpenChange: c,
          walletConfigs: A,
          chainType: V.J.Solana,
        });
      }
      function $() {
        return (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(Z, {}), (0, l.jsx)(q, {})],
        });
      }
      var ee = n(16463),
        et = n(55158),
        en = n(56967),
        ea = n(67750),
        es = n(94781),
        el = n(64113),
        er = n(41218),
        ei = n(92275),
        eo = n(45875),
        ec = n(37947);
      function ed() {
        let {
            impersonatedEVMAddress: e,
            setImpersonatedEVMAddress: t,
            impersonatedSolAddress: n,
            setImpersonatedSolAddress: a,
            evm: s,
            solana: i,
            isAppOnMainnet: c,
          } = (0, ea.$)(),
          {
            developmentChainType: d,
            setDeploymentEnvironment: A,
            setDevelopmentChainType: u,
          } = (0, o.L)(),
          [h, m] = (0, r.useState)(""),
          [x, f] = (0, r.useState)(""),
          [p, g] = (0, r.useState)(!1),
          [b, w] = (0, r.useState)(c ? "mainnet" : d),
          [j, v] = (0, r.useState)(!1),
          y = (0, ee.useSearchParams)(),
          N = y && y.get("impersonatedEVMAddress"),
          k = y && y.get("impersonatedSolAddress");
        return (
          (0, r.useEffect)(() => {
            s.account.isConnected && N && (0, el.U)(N) && (t(N), m(N));
          }, [N, s.account.isConnected]),
          (0, r.useEffect)(() => {
            i.account.isConnected && k && (0, el.U)(k) && (a(k), f(k));
          }, [k, i.account.isConnected]),
          (0, r.useEffect)(() => {
            function e(e) {
              e.shiftKey && e.ctrlKey && "I" === e.key && g(!0);
            }
            return (
              document.addEventListener("keydown", e),
              () => {
                document.removeEventListener("keydown", e);
              }
            );
          }, []),
          (0, l.jsx)(F.Vq, {
            open: p,
            onOpenChange: g,
            children: (0, l.jsxs)(F.cZ, {
              className: "lg:w-[550px]",
              children: [
                (0, l.jsx)(F.fK, {
                  className: "pb-2",
                  children: (0, l.jsx)(F.$N, {
                    className: "flex items-center gap-x-1",
                    children: "Devtools",
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: "flex flex-col gap-y-2",
                  children: [
                    (0, l.jsx)(ec.Z.uT, {
                      children: "Impersonated Ethereum Address",
                    }),
                    (0, l.jsx)(ei.I, {
                      type: "text",
                      value: h,
                      onChange: (e) => m(e.target.value),
                      onFocus: (e) => e.target.select(),
                      className: "bg-white dark:bg-[#1E1E1E]",
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: "flex flex-col gap-y-2",
                  children: [
                    (0, l.jsx)(ec.Z.uT, {
                      children: "Impersonated Solana Address",
                    }),
                    (0, l.jsx)(ei.I, {
                      type: "text",
                      value: x,
                      onChange: (e) => f(e.target.value),
                      onFocus: (e) => e.target.select(),
                      className: "bg-white dark:bg-[#1E1E1E]",
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: "flex flex-col gap-y-2",
                  children: [
                    (0, l.jsx)(ec.Z.uT, { children: "Network" }),
                    (0, l.jsxs)(eo.J2, {
                      open: j,
                      onOpenChange: v,
                      children: [
                        (0, l.jsx)(eo.xo, {
                          asChild: !0,
                          children: (0, l.jsxs)("button", {
                            className:
                              "flex items-center gap-x-1 capitalize [&_.icon]:data-[state=open]:rotate-180",
                            children: [
                              (0, l.jsx)("span", {
                                className: "flex items-center gap-x-1 truncate",
                                children: b,
                              }),
                              (0, l.jsx)(en.v, {
                                className:
                                  "icon size-2.5 shrink-0 transition-transform duration-150",
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)(eo.yk, {
                          className: "w-fit p-1",
                          align: "start",
                          children: (0, l.jsx)("div", {
                            className: "flex flex-col gap-y-2",
                            children: ["mainnet", "devnet", "testnet"].map(
                              (e) =>
                                (0, l.jsxs)(
                                  "button",
                                  {
                                    onClick: () => {
                                      w(e),
                                        "mainnet" === e
                                          ? A("mainnet")
                                          : (A("development"), u(e)),
                                        v(!1);
                                    },
                                    className:
                                      "flex items-center gap-x-2 whitespace-nowrap rounded-xl p-2 capitalize hover:bg-neutral-300/10 dark:text-[#8C90A5] dark:hover:bg-neutral-400/20",
                                    children: [
                                      (0, l.jsx)("span", {
                                        className:
                                          "inline-flex items-center gap-x-1",
                                        children: e,
                                      }),
                                      e === b
                                        ? (0, l.jsx)(et.n, {
                                            className:
                                              "text-primary ml-auto size-4",
                                          })
                                        : null,
                                    ],
                                  },
                                  e
                                )
                            ),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: "flex justify-center gap-3",
                  children: [
                    (0, l.jsx)(er.z, {
                      onClick: () => {
                        (0, el.U)(h) && t(h),
                          (0, es.BV)(x) && a(x),
                          v(!1),
                          g(!1);
                      },
                      disabled: !(0, el.U)(h) && !(0, es.BV)(x),
                      children: "Save Address",
                    }),
                    e || n
                      ? (0, l.jsx)(er.z, {
                          onClick: () => {
                            t(void 0), m(""), a(void 0), f(""), g(!1);
                          },
                          children: "Clear Address",
                        })
                      : null,
                  ],
                }),
              ],
            }),
          })
        );
      }
      var eA = n(68641);
      function eu(e) {
        let { children: t } = e,
          n = (0, ee.useRouter)(),
          a = (0, ee.usePathname)(),
          s = (0, ee.useSearchParams)();
        return (
          (0, r.useEffect)(() => {
            let e = s.get("ref");
            e && (0, el.U)(e) && localStorage.setItem(c.u.referrer, e);
          }, [s, a, n]),
          (0, l.jsx)(l.Fragment, { children: t })
        );
      }
      var eh = n(85169);
      function em(e) {
        let { children: t, ...n } = e;
        return (0, l.jsx)(eh.f, { ...n, children: t });
      }
      var ex = n(67707);
      function ef(e) {
        let { children: t } = e,
          [n] = (0, r.useState)(() => new E.S());
        return (0, l.jsx)(o.y, {
          children: (0, l.jsx)(S.WagmiProvider, {
            config: O.g,
            children: (0, l.jsx)(k, {
              children: (0, l.jsxs)(B.QueryClientProvider, {
                client: n,
                children: [
                  (0, l.jsx)(em, {
                    attribute: "class",
                    children: (0, l.jsx)(i.w, {
                      children: (0, l.jsx)(ea.Q, {
                        children: (0, l.jsxs)(W.q, {
                          children: [
                            (0, l.jsx)($, {}),
                            (0, l.jsx)(r.Suspense, {
                              children: (0, l.jsxs)(eu, {
                                children: [
                                  (0, l.jsx)(ed, {}),
                                  (0, l.jsx)(eA.p, {
                                    delayDuration: 200,
                                    children: (0, l.jsx)(ex.D, {
                                      children: (0, l.jsx)(
                                        C.TransactionStateProvider,
                                        { children: t }
                                      ),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                  (0, l.jsx)(z.t, { initialIsOpen: !1 }),
                ],
              }),
            }),
          }),
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
    51500: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ErrorBoundary: function () {
            return i;
          },
        });
      var a = n(2265),
        s = n(57437),
        l = n(60120),
        r = n(37947);
      class i extends a.Component {
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          let { onError: n } = this.props;
          null != n && n(e, t);
        }
        render() {
          let { children: e, fallbackComponent: t } = this.props,
            { error: n } = this.state;
          return null != n
            ? "function" == typeof t
              ? (0, a.createElement)(t, { error: n })
              : t
            : e;
        }
        constructor(e) {
          super(e), (this.state = { error: null });
        }
      }
      i.defaultProps = {
        fallbackComponent: function (e) {
          let { error: t } = e;
          return (0, s.jsxs)("div", {
            className: "flex h-full min-h-screen flex-col",
            children: [
              (0, s.jsx)("header", {
                className:
                  "bg-black-100 fixed inset-x-0 top-0 z-10 flex h-[var(--header-height)] items-center justify-between px-5 sm:sticky",
                children: (0, s.jsx)("div", {
                  className: "flex items-center py-4",
                  children: (0, s.jsx)(l.X, {}),
                }),
              }),
              (0, s.jsx)("div", {
                className: "h-[var(--header-height)] sm:hidden",
              }),
              (0, s.jsxs)("div", {
                className:
                  "mx-auto flex h-full max-w-xl grow flex-col justify-center px-5",
                children: [
                  (0, s.jsx)(r.Z.H1, {
                    className: "mb-3",
                    children: "An error has occurred",
                  }),
                  (0, s.jsxs)("div", {
                    className: "mb-10",
                    children: [
                      (0, s.jsx)(r.Z.Dx, {
                        className: "mb-2",
                        children:
                          "If the problem continues, contact Discord support with the following error message:",
                      }),
                      (0, s.jsx)(r.Z.Qp, {
                        className: "font-semibold",
                        children: t.message,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
      };
    },
    60120: function (e, t, n) {
      "use strict";
      n.d(t, {
        X: function () {
          return l;
        },
      });
      var a = n(57437),
        s = n(66648);
      function l() {
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(s.default, {
              alt: "Reno",
              src: "/logos/renzo-logo-light.svg",
              width: 133,
              height: 32,
              priority: !0,
              className: "block dark:hidden",
            }),
            (0, a.jsx)(s.default, {
              alt: "Reno",
              src: "/logos/renzo-logo-dark.svg",
              width: 133,
              height: 32,
              priority: !0,
              className: "hidden dark:block",
            }),
          ],
        });
      }
    },
    34129: function (e, t, n) {
      "use strict";
      n.d(t, {
        Vq: function () {
          return o;
        },
        cZ: function () {
          return h;
        },
        cN: function () {
          return x;
        },
        fK: function () {
          return m;
        },
        $N: function () {
          return f;
        },
        hg: function () {
          return c;
        },
        GV: function () {
          return u;
        },
      });
      var a = n(57437),
        s = n(2265),
        l = n(16349),
        r = n(13304),
        i = n(61379);
      let o = r.fC,
        c = r.xz,
        d = r.h_;
      r.x8;
      let A = s.forwardRef((e, t) => {
        let { className: n, ...s } = e;
        return (0, a.jsx)(r.aV, {
          ref: t,
          className: (0, l.cn)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
            n
          ),
          ...s,
        });
      });
      A.displayName = r.aV.displayName;
      let u = 200,
        h = s.forwardRef((e, t) => {
          let {
            className: n,
            showOverlay: s = !0,
            showCloseButton: o = !0,
            position: c = "center",
            children: u,
            ...h
          } = e;
          return (0, a.jsxs)(d, {
            children: [
              s ? (0, a.jsx)(A, {}) : null,
              (0, a.jsxs)(r.VY, {
                ref: t,
                className: (0, l.cn)(
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
                ...h,
                children: [
                  u,
                  o
                    ? (0, a.jsxs)(r.x8, {
                        className:
                          "absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none",
                        children: [
                          (0, a.jsx)(i.oHP, {}),
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
      h.displayName = r.VY.displayName;
      let m = (e) => {
        let { className: t, ...n } = e;
        return (0, a.jsx)("div", {
          className: (0, l.cn)("flex flex-col space-y-1.5 text-center", t),
          ...n,
        });
      };
      m.displayName = "DialogHeader";
      let x = (e) => {
        let { className: t, ...n } = e;
        return (0, a.jsx)("div", {
          className: (0, l.cn)(
            "grid auto-cols-fr grid-flow-col justify-end gap-2 lg:auto-cols-min",
            t
          ),
          ...n,
        });
      };
      x.displayName = "DialogFooter";
      let f = s.forwardRef((e, t) => {
        let { className: n, ...s } = e;
        return (0, a.jsx)(r.Dx, {
          ref: t,
          className: (0, l.cn)(
            "font-poppins text-2xl font-semibold leading-[120%] tracking-tight",
            n
          ),
          ...s,
        });
      });
      (f.displayName = r.Dx.displayName),
        (s.forwardRef((e, t) => {
          let { className: n, ...s } = e;
          return (0, a.jsx)(r.dk, {
            ref: t,
            className: (0, l.cn)("text-sm", n),
            ...s,
          });
        }).displayName = r.dk.displayName);
    },
    92275: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return r;
        },
      });
      var a = n(57437),
        s = n(2265),
        l = n(16349);
      let r = s.forwardRef((e, t) => {
        let { className: n, type: s, ...r } = e;
        return (0, a.jsx)("input", {
          type: s,
          className: (0, l.cn)(
            "bg-bg-light dark:bg-bg-dark border-border flex h-10 w-full rounded-md px-3 py-2 text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border",
            n
          ),
          ref: t,
          ...r,
        });
      });
      r.displayName = "Input";
    },
    45875: function (e, t, n) {
      "use strict";
      n.d(t, {
        J2: function () {
          return i;
        },
        yk: function () {
          return c;
        },
        xo: function () {
          return o;
        },
      });
      var a = n(57437),
        s = n(2265),
        l = n(16349),
        r = n(61485);
      let i = r.fC,
        o = r.xz,
        c = s.forwardRef((e, t) => {
          let {
            className: n,
            align: s = "center",
            sideOffset: i = 12,
            ...o
          } = e;
          return (0, a.jsx)(r.h_, {
            children: (0, a.jsx)(r.VY, {
              ref: t,
              align: s,
              sideOffset: i,
              className: (0, l.cn)(
                "bg-popover",
                "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                "z-50 w-72 rounded-xl p-4 outline-none",
                "border dark:border-neutral-600",
                n
              ),
              ...o,
            }),
          });
        });
      c.displayName = r.VY.displayName;
    },
    5518: function (e, t, n) {
      "use strict";
      n.d(t, {
        u: function () {
          return a;
        },
      });
      let a = {
        referrer: "Referrer",
        renzoTOS: "RenzoTOSAccepted",
        solana: {
          walletName: "solana.walletName",
          hasCollectedAddress: "solana.collectedAddress",
        },
      };
    },
    63874: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return o;
        },
        w: function () {
          return i;
        },
      });
      var a = n(57437),
        s = n(2265);
      let l = [0.005, 0.01, 0.03, 0.05],
        r = (0, s.createContext)(void 0);
      function i(e) {
        let { children: t } = e,
          n = (function () {
            let [e, t] = (0, s.useState)(1200),
              [n, a] = (0, s.useState)(!1),
              [r, i] = (0, s.useState)(0.005),
              o = !l.includes(r);
            return {
              txDeadline: e,
              setTxDeadline: t,
              txSettingsDialogOpen: n,
              setTxSettingsDialogOpen: a,
              defaultSlippageOptions: l,
              txSlippage: r,
              setTxSlippage: i,
              isCustomTxSlippage: o,
            };
          })();
        return (0, a.jsx)(r.Provider, { value: n, children: t });
      }
      function o() {
        let e = (0, s.useContext)(r);
        if (void 0 === e)
          throw Error("useApp must be used within a AppProvider");
        return e;
      }
    },
    94781: function (e, t, n) {
      "use strict";
      n.d(t, {
        BV: function () {
          return r;
        },
        Xn: function () {
          return l;
        },
        gb: function () {
          return s;
        },
      });
      var a = n(45429);
      function s(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15;
        return e.length > t ? "".concat(e.slice(0, t), "...") : e;
      }
      function l(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4;
        return "".concat(e.slice(0, t), "...").concat(e.slice(e.length - n));
      }
      function r(e) {
        try {
          return new a.PublicKey(e), !0;
        } catch (e) {
          return !1;
        }
      }
    },
    53054: function () {},
  },
  function (e) {
    e.O(
      0,
      [
        405, 6272, 3814, 2420, 3712, 1391, 2174, 1294, 1485, 3304, 7500, 4785,
        5344, 6406, 2971, 7023, 1744,
      ],
      function () {
        return e((e.s = 93172));
      }
    ),
      (_N_E = e.O());
  },
]);
