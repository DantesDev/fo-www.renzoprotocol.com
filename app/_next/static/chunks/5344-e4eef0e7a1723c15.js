(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5344],
  {
    46601: function () {},
    16789: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          RewardsBagde: function () {
            return d;
          },
        });
      var i = a(57437),
        n = a(66648),
        s = a(16349),
        r = a(14063);
      function d(e) {
        let {
          text: t,
          link: a,
          iconComponent: d,
          icon: A,
          classNames: o,
          textClassNames: c,
        } = e;
        return (0, i.jsx)("div", {
          onClick: function () {
            a && window.open(a, "_blank");
          },
          className: (0, s.cn)(
            "dark:bg-colors-black-a20 bg-card-gradient dark:border-colors-white-a20 w-[290px] rounded-[32px] border dark:bg-none",
            { "cursor-pointer": !!a },
            o
          ),
          children: (0, i.jsxs)("div", {
            className: "flex flex-row items-center p-1",
            children: [
              d ||
                ((null == A ? void 0 : A.auto)
                  ? (0, i.jsx)(n.default, {
                      src: A.auto,
                      width: 34,
                      height: 34,
                      alt: "rewards icon",
                      className: "rounded-full",
                    })
                  : (null == A ? void 0 : A.dark) &&
                    (null == A ? void 0 : A.light)
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(n.default, {
                          src: A.light,
                          alt: "rewards icon",
                          height: 34,
                          width: 34,
                          className: "block rounded-full dark:hidden",
                        }),
                        (0, i.jsx)(n.default, {
                          src: A.dark,
                          alt: "rewards icon",
                          height: 34,
                          width: 34,
                          className: "hidden rounded-full dark:block",
                        }),
                      ],
                    })
                  : null),
              (0, i.jsxs)("div", {
                className: "flex w-full flex-row items-center justify-between",
                children: [
                  (0, i.jsx)("div", {
                    className: (0, s.cn)(
                      "w-full pl-2 text-xs font-semibold uppercase",
                      c
                    ),
                    children: t,
                  }),
                  (0, i.jsx)("div", {
                    className: "pr-2",
                    children: a ? (0, i.jsx)(r.CkN, { size: 12 }) : null,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    12018: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          Tooltip: function () {
            return A;
          },
          TooltipProvider: function () {
            return d;
          },
        });
      var i = a(57437),
        n = a(2265),
        s = a(16349),
        r = a(81976);
      let d = r.zt;
      function A(e) {
        let {
            children: t,
            content: a,
            sideOffset: d = 8,
            side: A = "top",
            contentClassName: o,
            triggerClassName: c,
            open: l,
            defaultOpen: u,
            asChild: p,
            ...h
          } = e,
          [f, g] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            void 0 !== l && g(l);
          }, [l]),
          (0, i.jsxs)(r.fC, {
            open: f,
            onOpenChange: g,
            defaultOpen: u,
            children: [
              (0, i.jsx)(r.xz, {
                asChild: p,
                className: c,
                onClick: () => {
                  g((e) => !e);
                },
                children: t,
              }),
              (0, i.jsx)(r.h_, {
                children: (0, i.jsxs)(r.VY, {
                  sideOffset: d,
                  side: A,
                  align: "center",
                  className: (0, s.cn)(
                    "animate-in fade-in-50",
                    "data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 z-50 overflow-hidden shadow-xl",
                    "bg-background-primary text-colors-purple-300 max-w-80 rounded-lg px-2.5 py-1.5 text-xs",
                    o
                  ),
                  ...h,
                  children: [
                    a,
                    (0, i.jsx)(r.Eh, { className: "fill-background-primary" }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
    68641: function (e, t, a) {
      "use strict";
      a.d(t, {
        p: function () {
          return i.TooltipProvider;
        },
        u: function () {
          return i.Tooltip;
        },
      });
      var i = a(12018);
    },
    37947: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return i;
        },
      });
      var i = {};
      a.r(i),
        a.d(i, {
          uT: function () {
            return A;
          },
          Qp: function () {
            return o;
          },
          F: function () {
            return c;
          },
          H1: function () {
            return r;
          },
          Dx: function () {
            return d;
          },
        });
      var n = a(57437),
        s = a(16349);
      function r(e) {
        let { children: t, className: a, ...i } = e;
        return (0, n.jsx)("h1", {
          className: (0, s.cn)("text-4xl", a),
          ...i,
          children: t,
        });
      }
      function d(e) {
        let { children: t, className: a, ...i } = e;
        return (0, n.jsx)("p", {
          className: (0, s.cn)("text-base", a),
          ...i,
          children: t,
        });
      }
      function A(e) {
        let { children: t, className: a, ...i } = e;
        return (0, n.jsx)("p", {
          className: (0, s.cn)("text-sm", a),
          ...i,
          children: t,
        });
      }
      function o(e) {
        let { children: t, className: a, ...i } = e;
        return (0, n.jsx)("p", {
          className: (0, s.cn)("text-md", a),
          ...i,
          children: t,
        });
      }
      function c(e) {
        let { children: t, className: a, ...i } = e;
        return (0, n.jsx)("p", {
          className: (0, s.cn)("text-xs", a),
          ...i,
          children: t,
        });
      }
    },
    95081: function (e, t, a) {
      "use strict";
      a.d(t, {
        r: function () {
          return A;
        },
      });
      var i = a(57437);
      a(2265);
      var n = a(66648),
        s = a(16349),
        r = a(68641),
        d = a(92380);
      function A(e) {
        let {
          className: t,
          badges: a,
          tokenCompoundingIcon: A,
          rewards: o,
        } = e;
        return (0, i.jsxs)("div", {
          className: (0, s.cn)(
            "bg-colors-white-a90 dark:bg-colors-white-a10 flex shrink-0 flex-row items-center rounded-[32px] p-0.5",
            t
          ),
          children: [
            A
              ? (0, i.jsx)(i.Fragment, {
                  children: (0, i.jsx)("div", {
                    className: "flex flex-row items-center pr-3",
                    children: (0, i.jsx)(d.A, {
                      token: A.token,
                      tooltip: A.tooltip,
                      iconSize: A.iconSize,
                      compoundingIconSize: A.compoundingIconSize,
                      priority: A.priority,
                      className: A.className,
                      iconClassName: A.iconClassName,
                    }),
                  }),
                })
              : null,
            a
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("div", {
                      className: (0, s.cn)("flex flex-row items-center gap-7", {
                        "pl-3": !!A,
                        "pr-3": !o,
                      }),
                      children: a.map((e, t) => {
                        let a = e.iconSize || 32;
                        return (0, i.jsxs)(
                          "div",
                          {
                            className:
                              "relative flex flex-row items-center justify-center",
                            children: [
                              e.icon.auto
                                ? (0, i.jsx)(n.default, {
                                    src: e.icon.auto,
                                    width: a,
                                    height: a,
                                    alt: e.alt || "rewards",
                                    priority: e.priority,
                                    className: "rounded-full",
                                  })
                                : e.icon.dark && e.icon.light
                                ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                      (0, i.jsx)(n.default, {
                                        src: e.icon.light,
                                        alt: e.alt || "rewards",
                                        height: a,
                                        width: a,
                                        priority: e.priority,
                                        className:
                                          "block rounded-full dark:hidden",
                                      }),
                                      (0, i.jsx)(n.default, {
                                        src: e.icon.dark,
                                        alt: e.alt || "rewards",
                                        height: a,
                                        width: a,
                                        priority: e.priority,
                                        className:
                                          "hidden rounded-full dark:block",
                                      }),
                                    ],
                                  })
                                : null,
                              (0, i.jsxs)("div", {
                                className:
                                  "absolute bottom-0 left-6 flex items-center justify-center rounded-full bg-black px-1 py-0.5 text-[10px] font-semibold text-white",
                                children: [e.multiplier, "x"],
                              }),
                            ],
                          },
                          t
                        );
                      }),
                    }),
                    o
                      ? (0, i.jsx)("div", {
                          className:
                            "font-open-sans pl-5 pr-3 text-[18px] font-bold",
                          children: "+",
                        })
                      : null,
                  ],
                })
              : null,
            o
              ? (0, i.jsx)("div", {
                  className: "group flex flex-row items-center",
                  children: o.map((e, t) =>
                    (0, i.jsx)(
                      r.u,
                      {
                        content: e.tooltip,
                        children: (0, i.jsx)("div", {
                          className: (0, s.cn)("transition-all duration-300", {
                            "-ml-3 group-hover:ml-1": t > 0,
                          }),
                          onClick: e.link ? () => window.open(e.link) : void 0,
                          role: e.link ? "button" : void 0,
                          children: e.icon.auto
                            ? (0, i.jsx)(n.default, {
                                src: e.icon.auto,
                                width: 32,
                                height: 32,
                                alt: e.alt || "rewards",
                                className: "rounded-full",
                              })
                            : e.icon.dark && e.icon.light
                            ? (0, i.jsxs)(i.Fragment, {
                                children: [
                                  (0, i.jsx)(n.default, {
                                    src: e.icon.light,
                                    alt: e.alt || "rewards",
                                    height: 32,
                                    width: 32,
                                    className: "block rounded-full dark:hidden",
                                  }),
                                  (0, i.jsx)(n.default, {
                                    src: e.icon.dark,
                                    alt: e.alt || "rewards",
                                    height: 32,
                                    width: 32,
                                    className: "hidden rounded-full dark:block",
                                  }),
                                ],
                              })
                            : null,
                        }),
                      },
                      t
                    )
                  ),
                })
              : null,
          ],
        });
      }
    },
    92380: function (e, t, a) {
      "use strict";
      a.d(t, {
        A: function () {
          return A;
        },
      });
      var i = a(57437),
        n = a(66648),
        s = a(7020),
        r = a(16349),
        d = a(68641);
      function A(e) {
        let {
          token: t,
          tooltip: a = "Staking & Restaking rewards auto-compounded",
          iconSize: A = 32,
          compoundingIconSize: o = 18,
          priority: c = !0,
          rotate: l = !0,
          className: u,
          iconClassName: p,
        } = e;
        return (0, i.jsx)(d.u, {
          content: a,
          children: (0, i.jsxs)("span", {
            className: (0, r.cn)(
              "relative flex items-center justify-center",
              u
            ),
            style: { width: "".concat(A, "px"), height: "".concat(A, "px") },
            children: [
              t.icon.auto
                ? (0, i.jsx)(n.default, {
                    src: t.icon.auto,
                    width: A,
                    height: A,
                    alt: "".concat(t.name, " icon"),
                    priority: c,
                    className: (0, r.cn)("size-full rounded-full", p),
                  })
                : t.icon.dark && t.icon.light
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(n.default, {
                        src: t.icon.light,
                        alt: "".concat(t.name, " icon"),
                        height: A,
                        width: A,
                        priority: c,
                        className: (0, r.cn)(
                          "block size-full rounded-full dark:hidden",
                          p
                        ),
                      }),
                      (0, i.jsx)(n.default, {
                        src: t.icon.dark,
                        alt: "".concat(t.name, " icon"),
                        height: A,
                        width: A,
                        priority: c,
                        className: (0, r.cn)(
                          "hidden size-full rounded-full dark:block",
                          p
                        ),
                      }),
                    ],
                  })
                : null,
              (0, i.jsx)(n.default, {
                src: s.default,
                alt: "compounding",
                height: o,
                width: o,
                priority: c,
                className: (0, r.cn)(
                  "absolute bottom-0 left-6 right-0 items-center justify-center rounded-full",
                  { "animate-rotate": l }
                ),
              }),
            ],
          }),
        });
      }
    },
    21517: function (e, t, a) {
      "use strict";
      a.d(t, {
        JP: function () {
          return D;
        },
        Ui: function () {
          return T;
        },
        mI: function () {
          return S;
        },
        mh: function () {
          return v;
        },
        p5: function () {
          return y;
        },
        qz: function () {
          return z;
        },
      });
      var i = a(87704),
        n = a(57780),
        s = a(18527),
        r = a(21198),
        d = a(13926),
        A = a(10772),
        o = a(97032),
        c = a(24032),
        l = a(83134),
        u = a(34269),
        p = a(16491),
        h = a(42410),
        f = a(71596),
        g = a(85507),
        b = a(53611),
        m = a(23281),
        E = a(1306),
        x = a(48412),
        w = a(94113),
        k = a(99445),
        C = a(43854),
        B = a(54288);
      let y = {
        mainnet: {
          id: p.R.id,
          name: p.R.name,
          chainType: B.J.EVM,
          chain: p.R,
          icon: d.default,
          blockExplorers: { default: { url: p.R.blockExplorers.default.url } },
        },
        holesky: {
          id: h.M.id,
          name: h.M.name,
          chainType: B.J.EVM,
          chain: h.M,
          icon: d.default,
          blockExplorers: { default: { url: h.M.blockExplorers.default.url } },
          testnet: !0,
        },
        optimism: {
          id: f.v.id,
          name: f.v.name,
          chainType: B.J.EVM,
          chain: f.v,
          icon: l.default,
          blockExplorers: { default: { url: f.v.blockExplorers.default.url } },
        },
        optimismGoerli: {
          id: g.l.id,
          name: g.l.name,
          chainType: B.J.EVM,
          chain: g.l,
          icon: l.default,
          blockExplorers: { default: { url: g.l.blockExplorers.default.url } },
          testnet: !0,
        },
        arbitrum: {
          id: b.y.id,
          name: b.y.name,
          chainType: B.J.EVM,
          chain: b.y,
          preferredName: "Arbitrum",
          icon: i.default,
          blockExplorers: { default: { url: b.y.blockExplorers.default.url } },
        },
        bsc: {
          id: m.e.id,
          name: m.e.name,
          chainType: B.J.EVM,
          chain: m.e,
          preferredName: "BNB",
          icon: r.default,
          blockExplorers: { default: { url: m.e.blockExplorers.default.url } },
        },
        mode: {
          id: E.x.id,
          name: E.x.name,
          chain: E.x,
          chainType: B.J.EVM,
          preferredName: "Mode",
          icon: c.default,
          blockExplorers: { default: { url: E.x.blockExplorers.default.url } },
        },
        linea: {
          id: x.P.id,
          name: x.P.name,
          chain: x.P,
          chainType: B.J.EVM,
          preferredName: "Linea",
          icon: o.default,
          blockExplorers: { default: { url: x.P.blockExplorers.default.url } },
        },
        blast: {
          id: w.A.id,
          name: w.A.name,
          chainType: B.J.EVM,
          chain: w.A,
          icon: s.default,
          blockExplorers: { default: { url: w.A.blockExplorers.default.url } },
        },
        base: {
          id: k.u.id,
          name: k.u.name,
          chainType: B.J.EVM,
          chain: k.u,
          preferredName: "Base",
          icon: n.default,
          blockExplorers: { default: { url: k.u.blockExplorers.default.url } },
        },
        fraxtal: {
          id: C.q.id,
          name: C.q.name,
          chainType: B.J.EVM,
          chain: C.q,
          preferredName: "Fraxtal",
          icon: A.default,
          blockExplorers: { default: { url: C.q.blockExplorers.default.url } },
        },
        solanaMainnet: {
          id: 900,
          name: "Solana Mainnet",
          preferredName: "Solana",
          chainType: B.J.Solana,
          chain: null,
          icon: u.default,
          blockExplorers: { default: { url: "https://explorer.solana.com" } },
        },
        solanaTestnet: {
          id: 901,
          name: "Solana Testnet",
          chainType: B.J.Solana,
          chain: null,
          preferredName: "Solana",
          icon: u.default,
          testnet: !0,
          blockExplorers: {
            default: { url: "https://explorer.solana.com?cluster=testnet" },
          },
        },
        solanaDevnet: {
          id: 902,
          name: "Solana Devnet",
          preferredName: "Solana",
          chainType: B.J.Solana,
          chain: null,
          icon: u.default,
          devnet: !0,
          blockExplorers: {
            default: { url: "https://explorer.solana.com?cluster=devnet" },
          },
        },
      };
      Object.values(y)
        .filter((e) => e.chainType === B.J.Solana)
        .map((e) => e.id);
      let D = Object.values(y).reduce((e, t) => ((e[t.id] = t), e), {}),
        v = y.mainnet.id,
        T = y.solanaMainnet.id;
      function z(e) {
        var t;
        return null !== (t = e.preferredName) && void 0 !== t ? t : e.name;
      }
      function S(e, t) {
        return e !== t;
      }
      y.solanaDevnet.id, y.solanaTestnet.id;
    },
    46448: function (e, t, a) {
      "use strict";
      var i;
      a.d(t, {
        i: function () {
          return n;
        },
      }),
        ((i || (i = {})).Reno = "Reno");
      let n = {
        id: "Reno Protocol",
        name: i.Reno,
        logo: {
          light: "/logos/renzo-logo-light.svg",
          dark: "/logos/renzo-logo-dark.svg",
        },
      };
    },
    88262: function (e, t, a) {
      "use strict";
      a.d(t, {
        m3: function () {
          return o;
        },
        rh: function () {
          return l;
        },
        t: function () {
          return c;
        },
      });
      var i = a(93486),
        n = a(31195),
        s = a(28373),
        r = a(16491),
        d = a(42410),
        A = a(21517);
      let o = {
          [r.R.id]: {
            environment: "mainnet",
            chain: r.R,
            estimatedBlockTimeInSeconds: 12,
            subgraphs: {
              renzo:
                "https://api.goldsky.com/api/public/project_clsxzkxi8dh7o01zx5kyxdga4/subgraphs/renzo-mainnet/prod/gn",
              reztake:
                "https://api.goldsky.com/api/public/project_clsxzkxi8dh7o01zx5kyxdga4/subgraphs/reztake/prod/gn",
              operatorAVSs:
                "https://api.goldsky.com/api/public/project_clsxzkxi8dh7o01zx5kyxdga4/subgraphs/operator_avs/prod/gn",
              ezRVault:
                "https://api.goldsky.com/api/public/project_clsxzkxi8dh7o01zx5kyxdga4/subgraphs/ezrvaults-mainnet/prod/gn",
            },
            addresses: {
              restakeManager: "0x74a09653A083691711cF8215a6ab074BB4e99ef5",
              pzETHDepositWrapper: "0x897642a9DbE1dD82AcFdB90D1f22F75B66a765bA",
              pzETHOracle: "0x34406A8Ee75B5af34F8920D1960AC6a5B33A47b6",
              stETHToUSDOracle: "0xCfE54B5cD566aB89272946F602D76Ea879CAb4a8",
              stETHToETHOracle: "0x86392dC19c0b719886221c78AB11eb8Cf5c52812",
              renzoOracle: "0x5a12796f7e7EBbbc8a402667d266d2e65A814042",
              rezStaker: "0x1736011D3E075351B319DBC1da28Dac68Ea830A6",
              eigenLayerDelegationManager:
                "0x39053D51B77DC0d36036Fc1fCc8Cb819df8Ef37A",
              eigenLayerStrategyManager:
                "0x858646372CC42E1A627fcE94aa7A7033e7CF075A",
              eigenStrategy: "0xaCB55C530Acdb2849e6d4f36992Cd8c9D50ED8F7",
              chainlinkEthOracle: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
              depositQueue: "0xf2F305D14DCD8aaef887E0428B3c9534795D0d60",
              withdrawQueue: "0x5efc9D10E42FB517456f4ac41EB5e2eBe42C8918",
              balancer: {
                vaultAddress: "0xBA12222222228d8Ba445958a75a0704d566BF2C8",
                poolId:
                  "0x596192bb6e41802428ac943d2f1476c1af25cc0e000000000000000000000659",
              },
              xRenzoDeposit: {
                [A.p5.arbitrum.id]: {
                  address: "0xf25484650484DE3d554fB0b7125e7696efA4ab99",
                  swapKey:
                    "0x12acadfa38ab02479ae587196a9043ee4d8bf52fcb96b7f8d2ba240f03bcd08a",
                  connextAddress: "0xEE9deC2712cCE65174B561151701Bf54b99C24C8",
                  bridgeRouterFeeBps: 5e-4,
                  bridgeSweepFeeBps: 5e-4,
                  bridgeBatchSize: 100,
                  fromSwapTokenIndex: 1,
                  toSwapTokenIndex: 0,
                  l2AssetMinTransactionBuffer: (0, n.f)("0.00000871064"),
                },
                [A.p5.bsc.id]: {
                  address: "0xf25484650484DE3d554fB0b7125e7696efA4ab99",
                  swapKey:
                    "0x12acadfa38ab02479ae587196a9043ee4d8bf52fcb96b7f8d2ba240f03bcd08a",
                  connextAddress: "0xCd401c10afa37d641d2F594852DA94C700e4F2CE",
                  bridgeRouterFeeBps: 5e-4,
                  bridgeSweepFeeBps: 0,
                  bridgeBatchSize: 0,
                  fromSwapTokenIndex: 1,
                  toSwapTokenIndex: 0,
                  l2AssetMinTransactionBuffer: (0, n.f)("0.000245116"),
                },
                [A.p5.mode.id]: {
                  address: "0x4D7572040B84b41a6AA2efE4A93eFFF182388F88",
                  swapKey:
                    "0x12acadfa38ab02479ae587196a9043ee4d8bf52fcb96b7f8d2ba240f03bcd08a",
                  connextAddress: "0x7380511493DD4c2f1dD75E9CCe5bD52C787D4B51",
                  bridgeRouterFeeBps: 5e-4,
                  bridgeSweepFeeBps: 5e-4,
                  bridgeBatchSize: 100,
                  fromSwapTokenIndex: 1,
                  toSwapTokenIndex: 0,
                  l2AssetMinTransactionBuffer: (0, n.f)("0.000000024899288484"),
                },
                [A.p5.linea.id]: {
                  address: "0x4D7572040B84b41a6AA2efE4A93eFFF182388F88",
                  swapKey:
                    "0x12acadfa38ab02479ae587196a9043ee4d8bf52fcb96b7f8d2ba240f03bcd08a",
                  connextAddress: "0xa05eF29e9aC8C75c530c2795Fa6A800e188dE0a9",
                  bridgeRouterFeeBps: 5e-4,
                  bridgeSweepFeeBps: 5e-4,
                  bridgeBatchSize: 100,
                  fromSwapTokenIndex: 1,
                  toSwapTokenIndex: 0,
                  l2AssetMinTransactionBuffer: (0, n.f)("0.000022627063249824"),
                },
                [A.p5.base.id]: {
                  address: "0xf25484650484DE3d554fB0b7125e7696efA4ab99",
                  swapKey:
                    "0x12acadfa38ab02479ae587196a9043ee4d8bf52fcb96b7f8d2ba240f03bcd08a",
                  connextAddress: "0xB8448C6f7f7887D36DcA487370778e419e9ebE3F",
                  bridgeRouterFeeBps: 5e-4,
                  bridgeSweepFeeBps: 5e-4,
                  bridgeBatchSize: 100,
                  fromSwapTokenIndex: 1,
                  toSwapTokenIndex: 0,
                  l2AssetMinTransactionBuffer: (0, n.f)("0.00001"),
                },
              },
              rezVesting: "0x9706128269F3476A1bd1a511c75BEa75422A1edB",
            },
            etherscanURL: r.R.blockExplorers.default.url,
            nativeAssetMinTransactionBuffer: (0, n.f)("0.02"),
            solana: {
              addresses: {
                jito: {
                  [A.p5.solanaMainnet.id]: {
                    vault: "CugziSqZXcUStNPXbtRmq6atsrHqWY2fH2tAhsyApQrV",
                    renzoVault: "B2nbf6ef9KRbrdV2YmMYGHgRX8vCQtS44PvTNdsnmeBb",
                    config: "UwuSgAq4zByffCGCrWH87DsjfsewYjuqHfJEpzw1Jq3",
                  },
                },
              },
              nativeAssetMinTransactionBuffer: (0, s.v)("0.02", i.Ey),
            },
          },
          [d.M.id]: {
            environment: "development",
            chain: d.M,
            estimatedBlockTimeInSeconds: 12,
            subgraphs: {
              renzo:
                "https://api.goldsky.com/api/public/project_clsxzkxi8dh7o01zx5kyxdga4/subgraphs/renzo-holesky-withdraw/v0.1/gn",
              reztake:
                "https://api.goldsky.com/api/public/project_clsxzkxi8dh7o01zx5kyxdga4/subgraphs/reztake/v0.1/gn",
              operatorAVSs:
                "https://api.goldsky.com/api/public/project_clsxzkxi8dh7o01zx5kyxdga4/subgraphs/operator_avs/0.0.1/gn",
              ezRVault:
                "https://api.goldsky.com/api/public/project_clsxzkxi8dh7o01zx5kyxdga4/subgraphs/ezrvaults-holesky/v0.5/gn",
            },
            addresses: {
              restakeManager: "0x2ab01089fAA822856061A257988822F74CCc6774",
              pzETHDepositWrapper: "0x",
              pzETHOracle: "0x",
              stETHToUSDOracle: "0x",
              stETHToETHOracle: "0x",
              renzoOracle: "0xF36A90D6e81cd91c1bb3F92Bd47aC4B0F4aA4c40",
              rezStaker: "0x",
              eigenLayerDelegationManager: "0x",
              eigenLayerStrategyManager: "0x",
              eigenStrategy: "0x",
              chainlinkEthOracle: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
              depositQueue: "0x574Dd34D89F6C708255407B5fEeB46278aE96603",
              withdrawQueue: "0xCF817cFCb141aCA6Bf6ABA04e6bfE1dbc6D7b7F5",
              balancer: {
                vaultAddress: "0xBA12222222228d8Ba445958a75a0704d566BF2C8",
                poolId: "0x",
              },
              xRenzoDeposit: {
                [A.p5.optimismGoerli.id]: {
                  address: "0xd18aD82C9F3db0eEcde02C8ab892d501327B0EF4",
                  swapKey:
                    "0x292e02936c5b0f88fab7f755caac58d92cd10b13f484cd46f6dd45468cb23e3f",
                  connextAddress: "0x5Ea1bb242326044699C3d81341c5f535d5Af1504",
                  bridgeRouterFeeBps: 5e-4,
                  bridgeSweepFeeBps: 0,
                  bridgeBatchSize: 0,
                  fromSwapTokenIndex: 1,
                  toSwapTokenIndex: 0,
                  l2AssetMinTransactionBuffer: (0, n.f)("0.000366122825986315"),
                },
              },
              rezVesting: "0x48eC178372840d6B1f897ABf811D4B0dBaC2a736",
            },
            etherscanURL: d.M.blockExplorers.default.url,
            nativeAssetMinTransactionBuffer: (0, n.f)("0.02"),
            solana: {
              addresses: {
                jito: {
                  [A.p5.solanaTestnet.id]: {
                    vault: "CugziSqZXcUStNPXbtRmq6atsrHqWY2fH2tAhsyApQrV",
                    renzoVault: "B2nbf6ef9KRbrdV2YmMYGHgRX8vCQtS44PvTNdsnmeBb",
                    config: "UwuSgAq4zByffCGCrWH87DsjfsewYjuqHfJEpzw1Jq3",
                  },
                  [A.p5.solanaDevnet.id]: {
                    vault: "CugziSqZXcUStNPXbtRmq6atsrHqWY2fH2tAhsyApQrV",
                    renzoVault: "B2nbf6ef9KRbrdV2YmMYGHgRX8vCQtS44PvTNdsnmeBb",
                    config: "UwuSgAq4zByffCGCrWH87DsjfsewYjuqHfJEpzw1Jq3",
                  },
                },
              },
              nativeAssetMinTransactionBuffer: (0, s.v)("0.02", i.Ey),
            },
          },
        },
        c = o[r.R.id],
        l = o[d.M.id];
    },
    44304: function (e, t, a) {
      "use strict";
      a.d(t, {
        EJ: function () {
          return o;
        },
        FD: function () {
          return l;
        },
        f2: function () {
          return c;
        },
      });
      var i,
        n,
        s = a(96035),
        r = a(65474),
        d = a(73483),
        A = a(61446);
      ((i = n || (n = {})).EigenLayer = "EigenLayer"),
        (i.Symbiotic = "Symbiotic"),
        (i.Jito = "Jito");
      let o = {
          name: n.EigenLayer,
          description: "EigenLayer",
          logo: { auto: s.default },
        },
        c = {
          name: n.Symbiotic,
          description: "Symbiotic",
          logo: { auto: A.default },
        },
        l = {
          name: n.Jito,
          description: "Jito",
          logo: { dark: r.default, light: d.default },
        };
    },
    87168: function (e, t, a) {
      "use strict";
      a.d(t, {
        J: function () {
          return n;
        },
      });
      var i = a(21517);
      let n = {
        [i.p5.solanaMainnet.id]:
          "https://newest-withered-film.solana-mainnet.quiknode.pro/0f7e838024630d2575db475ff8a92544ad5a3a64/",
        [i.p5.solanaTestnet.id]:
          "https://young-tiniest-general.solana-testnet.quiknode.pro/5d7362218f5c41d7a9758ec99abf6a6633577a1d/",
        [i.p5.solanaDevnet.id]: "https://api.devnet.solana.com",
      };
    },
    387: function (e, t, a) {
      "use strict";
      a.d(t, {
        H5: function () {
          return y;
        },
        J_: function () {
          return k;
        },
        TV: function () {
          return w;
        },
        Wr: function () {
          return g.W;
        },
        m0: function () {
          return D;
        },
        p8: function () {
          return E;
        },
        zA: function () {
          return x;
        },
      });
      var i = a(73074),
        n = a(2946),
        s = a(85438),
        r = a(14590),
        d = a(87781),
        A = a(96415),
        o = a(53877),
        c = a(30553),
        l = a(13923),
        u = a(30805),
        p = a(93486),
        h = a(36653),
        f = a(54288),
        g = a(54601),
        b = a(21517),
        m = a(88262);
      let E = 18,
        x = "0xd4fcde9bb1d746dd7e5463b01dd819ee06af25db",
        w = {
          [g.W.ETH]: {
            chainType: f.J.EVM,
            name: "Ethereum",
            symbol: g.W.ETH,
            icon: { auto: "/tokens/ETH.svg" },
            supportedChains: {
              [b.p5.mainnet.id]: { address: h.r_, chainId: b.p5.mainnet.id },
              [b.p5.arbitrum.id]: {
                address: h.r_,
                chainId: b.p5.arbitrum.id,
                isDepositable: !1,
              },
              [b.p5.bsc.id]: {
                address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
                chainId: b.p5.bsc.id,
                isDepositable: !1,
              },
              [b.p5.mode.id]: {
                address: h.r_,
                chainId: b.p5.mode.id,
                isDepositable: !1,
              },
              [b.p5.linea.id]: {
                address: h.r_,
                chainId: b.p5.linea.id,
                isDepositable: !1,
              },
              [b.p5.base.id]: {
                address: h.r_,
                chainId: b.p5.base.id,
                isDepositable: !1,
              },
              [b.p5.optimismGoerli.id]: {
                address: h.r_,
                chainId: b.p5.optimismGoerli.id,
              },
              [b.p5.holesky.id]: { address: h.r_, chainId: b.p5.holesky.id },
            },
            decimals: E,
          },
          [g.W.WETH]: {
            chainType: f.J.EVM,
            name: "Wrapped ETH",
            symbol: g.W.WETH,
            icon: { auto: "/tokens/ETH.svg" },
            supportedChains: {
              [b.p5.mainnet.id]: {
                address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                chainId: b.p5.mainnet.id,
                isDepositable: !1,
              },
              [b.p5.arbitrum.id]: {
                address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
                chainId: b.p5.arbitrum.id,
                isDepositable: !1,
              },
              [b.p5.mode.id]: {
                address: "0x4200000000000000000000000000000000000006",
                chainId: b.p5.mode.id,
                isDepositable: !1,
              },
              [b.p5.linea.id]: {
                address: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
                chainId: b.p5.linea.id,
                isDepositable: !1,
              },
              [b.p5.base.id]: {
                address: "0x4200000000000000000000000000000000000006",
                chainId: b.p5.base.id,
                isDepositable: !1,
              },
              [b.p5.optimismGoerli.id]: {
                address: "0x74c6fd7d2bc6a8f0ebd7d78321a95471b8c2b806",
                chainId: b.p5.optimismGoerli.id,
              },
            },
            decimals: E,
          },
          [g.W.wBETH]: {
            chainType: f.J.EVM,
            name: "Binance Staked Ether",
            symbol: g.W.wBETH,
            icon: { auto: "/tokens/wbETH.webp" },
            supportedChains: {
              [b.p5.mainnet.id]: {
                address: "0xa2e3356610840701bdf5611a53974510ae27e2e1",
                chainId: b.p5.mainnet.id,
              },
            },
            decimals: E,
          },
          [g.W.wstETH]: {
            chainType: f.J.EVM,
            name: "Wrapped Liquid Staked Ether 2.0",
            symbol: g.W.wstETH,
            icon: { auto: "/tokens/wstETH.png" },
            supportedChains: {
              [b.p5.mainnet.id]: {
                address: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
                chainId: b.p5.mainnet.id,
              },
            },
            decimals: E,
          },
          [g.W.stETH]: {
            chainType: f.J.EVM,
            name: "Lido Staked Ether",
            symbol: g.W.stETH,
            icon: { auto: "/tokens/stEth.svg" },
            supportedChains: {
              [b.p5.mainnet.id]: {
                address: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
                chainId: b.p5.mainnet.id,
              },
              [b.p5.holesky.id]: {
                address: "0x3F1c547b21f65e10480dE3ad8E19fAAC46C95034",
                chainId: b.p5.holesky.id,
              },
            },
            decimals: E,
          },
          [g.W.rETH]: {
            chainType: f.J.EVM,
            name: "Rocketpool Staked ETH",
            symbol: g.W.rETH,
            icon: { auto: "/tokens/rETH.svg" },
            supportedChains: {
              [b.p5.mainnet.id]: {
                address: "0xae78736Cd615f374D3085123A210448E74Fc6393",
                chainId: b.p5.mainnet.id,
              },
              [b.p5.holesky.id]: { address: "0x", chainId: b.p5.holesky.id },
            },
            decimals: E,
          },
          [g.W.ezETH]: {
            chainType: f.J.EVM,
            name: "Reno Restaked ETH",
            symbol: g.W.ezETH,
            icon: { light: r.default, dark: s.default },
            supportedChains: {
              [b.p5.mainnet.id]: {
                address: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
                chainId: b.p5.mainnet.id,
              },
              [b.p5.arbitrum.id]: {
                address: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: b.p5.arbitrum.id,
              },
              [b.p5.bsc.id]: {
                address: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: b.p5.bsc.id,
              },
              [b.p5.mode.id]: {
                address: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: b.p5.mode.id,
              },
              [b.p5.linea.id]: {
                address: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: b.p5.linea.id,
              },
              [b.p5.blast.id]: {
                address: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: b.p5.blast.id,
                isDepositable: !1,
              },
              [b.p5.base.id]: {
                address: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: b.p5.base.id,
              },
              [b.p5.optimism.id]: {
                address: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: b.p5.optimism.id,
              },
              [b.p5.holesky.id]: {
                address: "0x24E7a478Bb83d38059e2bc76b52334Ca99c00C77",
                chainId: b.p5.holesky.id,
              },
              [b.p5.optimismGoerli.id]: {
                address: "0xe60eeeee9503d59c7db940889228faceb0af5df2",
                chainId: b.p5.optimismGoerli.id,
              },
            },
            decimals: E,
          },
          [g.W.pzETH]: {
            chainType: f.J.EVM,
            name: "Reno Restaked wstETH",
            symbol: g.W.pzETH,
            icon: { light: u.default, dark: l.default },
            supportedChains: {
              [b.p5.mainnet.id]: {
                address: "0x8c9532a60E0E7C6BbD2B2c1303F63aCE1c3E9811",
                chainId: b.p5.mainnet.id,
              },
              [b.p5.holesky.id]: { address: "0x", chainId: b.p5.holesky.id },
            },
            decimals: E,
          },
          [g.W.REN]: {
            chainType: f.J.EVM,
            name: "Reno",
            symbol: g.W.REN,
            icon: {
              light: "/tokens/rez-light.svg",
              dark: "/tokens/rez-dark.svg",
            },
            supportedChains: {
              [b.p5.mainnet.id]: {
                address: "0xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                chainId: b.p5.mainnet.id,
                isDepositable: !1,
              },
              [b.p5.holesky.id]: { address: "0x", chainId: b.p5.holesky.id },
            },
            decimals: E,
          },
          [g.W.EIGEN]: {
            chainType: f.J.EVM,
            name: "EigenLayer",
            symbol: g.W.EIGEN,
            icon: { auto: "/tokens/eigen.svg" },
            supportedChains: {
              [b.p5.mainnet.id]: {
                address: "0xec53bf9167f50cdeb3ae105f56099aaab9061f83",
                chainId: b.p5.mainnet.id,
                isDepositable: !1,
              },
              [b.p5.holesky.id]: { address: "0x", chainId: b.p5.holesky.id },
            },
            decimals: E,
          },
          [g.W.SOL]: {
            chainType: f.J.Solana,
            name: "Solana",
            symbol: g.W.SOL,
            icon: { auto: "/tokens/sol.png" },
            supportedChains: {
              [b.p5.solanaMainnet.id]: {
                address: p.GK,
                chainId: b.p5.solanaMainnet.id,
              },
            },
            decimals: p.Ey,
          },
          [g.W.JitoSOL]: {
            chainType: f.J.Solana,
            name: "Jito Staked SOL",
            symbol: g.W.JitoSOL,
            icon: { auto: "/tokens/jitoSOL.svg" },
            supportedChains: {
              [b.p5.solanaMainnet.id]: {
                address: "J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn",
                chainId: b.p5.solanaMainnet.id,
              },
              [b.p5.solanaDevnet.id]: {
                address: "7nVGRMDvUNLMeX6RLCo4qNSUEhSwW7k8wVQ7a8u1GFAp",
                chainId: b.p5.solanaDevnet.id,
              },
              [b.p5.solanaTestnet.id]: {
                address: "5ghwTwPwYYeRK9RYKe2aVLquwWVk3pmxnnfPkg6P7Nff",
                chainId: b.p5.solanaTestnet.id,
              },
            },
            decimals: p.Ey,
          },
          [g.W.ezSOL]: {
            chainType: f.J.Solana,
            name: "Reno Restaked SOL",
            symbol: g.W.ezSOL,
            icon: { light: A.default, dark: d.default },
            supportedChains: {
              [b.p5.solanaMainnet.id]: {
                address: "ezSoL6fY1PVdJcJsUpe5CM3xkfmy3zoVCABybm5WtiC",
                chainId: b.p5.solanaMainnet.id,
              },
              [b.p5.solanaDevnet.id]: {
                address: "ezsoLxShM7j7kmeBWNg8rxrVtSWh16EFNRPVVm3TqP3",
                chainId: b.p5.solanaDevnet.id,
              },
              [b.p5.solanaTestnet.id]: {
                address: "So11111111111111111111111111111111111111112",
                chainId: b.p5.solanaTestnet.id,
              },
            },
            decimals: p.Ey,
          },
          [g.W.USDC]: {
            chainType: f.J.EVM,
            name: "USD Coin",
            symbol: g.W.USDC,
            icon: { auto: "/tokens/usdc.png" },
            supportedChains: {
              [b.p5.mainnet.id]: {
                address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                chainId: b.p5.mainnet.id,
                isDepositable: !1,
              },
              [b.p5.holesky.id]: { address: "0x", chainId: b.p5.holesky.id },
            },
            decimals: E,
          },
          [g.W.ezUSDC]: {
            chainType: f.J.Solana,
            name: "Restaked USD Coin",
            symbol: g.W.ezUSDC,
            icon: { light: c.default, dark: o.default },
            supportedChains: {
              [b.p5.solanaMainnet.id]: {
                address: "0x",
                chainId: b.p5.solanaMainnet.id,
                isDepositable: !1,
              },
            },
            decimals: p.Ey,
          },
          [g.W.ezRstETH]: {
            chainType: f.J.EVM,
            name: "EZ Restaked stETH",
            symbol: g.W.ezRstETH,
            icon: { auto: "/tokens/stEth.svg" },
            supportedChains: {
              [b.p5.mainnet.id]: {
                address: "0x",
                chainId: b.p5.mainnet.id,
                isDepositable: !1,
              },
              [b.p5.holesky.id]: {
                address: "0x47431dFDB8a94Eb598ad23A39E168B92D6f889bB",
                chainId: b.p5.holesky.id,
              },
            },
            decimals: E,
          },
          [g.W.ezREZ]: {
            chainType: f.J.EVM,
            name: "Restaked REN",
            symbol: g.W.ezREZ,
            icon: {
              light: "/tokens/rez-light.svg",
              dark: "/tokens/rez-dark.svg",
            },
            supportedChains: {
              [b.p5.mainnet.id]: {
                address: "0x77B1183e730275f6A8024Ce53d54bcC12B368f60",
                chainId: b.p5.mainnet.id,
                isDepositable: !1,
              },
              [b.p5.holesky.id]: { address: "0x", chainId: b.p5.holesky.id },
            },
            decimals: E,
          },
          [g.W.ezEIGEN]: {
            chainType: f.J.EVM,
            name: "Restaked EIGEN",
            symbol: g.W.ezEIGEN,
            icon: { light: n.default, dark: i.default },
            supportedChains: {
              [b.p5.mainnet.id]: {
                address: x,
                chainId: b.p5.mainnet.id,
                isDepositable: !1,
              },
              [b.p5.holesky.id]: { address: "0x", chainId: b.p5.holesky.id },
            },
            decimals: E,
          },
        },
        k = Object.values(w).filter((e) => e.chainType === f.J.Solana);
      Object.values(w).filter((e) => e.chainType === f.J.EVM);
      let C = Object.values(m.m3)
          .map((e) => e.chain)
          .reduce(
            (e, t) => (
              (e[t.id] = {
                id: t.id,
                name: t.name,
                chainType: f.J.EVM,
                chain: t,
              }),
              e
            ),
            {}
          ),
        B = { [b.p5.fraxtal.id]: b.p5.fraxtal },
        y = Object.values(
          Object.values(w)
            .filter((e) => e.chainType === f.J.EVM)
            .reduce(
              (e, t) => {
                for (let a in t.supportedChains) e[a] = b.JP[Number(a)];
                return e;
              },
              { ...C, ...B }
            )
        ).map((e) => e.chain);
      function D(e) {
        return e === g.W.ETH || e === g.W.WETH || Date.now() / 1e3 > 1713283200;
      }
    },
    82890: function (e, t, a) {
      "use strict";
      a.d(t, {
        g: function () {
          return u;
        },
      });
      var i = a(18665),
        n = a(24547),
        s = a(1850),
        r = a(40859),
        d = a(24979),
        A = a(8923),
        o = a(387),
        c = a(1028);
      let l = [
        (0, r.L)({
          target: {
            id: "OKX Wallet",
            name: "OKX Wallet",
            provider: () => window.okxwallet,
          },
        }),
        (0, d.a)({
          projectId: "ed738ef6fd7b7995b3cfcb969cd15fa5",
          qrModalOptions: { themeVariables: { "--wcm-z-index": "100000" } },
        }),
        (0, A.D)({ appName: "Reno", version: "4" }),
      ];
      try {
        if ((0, i.bD)()) {
          let e = (0, r.L)({
            target: {
              id: "BinanceW3WSDK",
              name: "Binance Web3 Wallet",
              provider: () => window.ethereum,
            },
          });
          l.push(e);
        } else {
          let e = (0, n.p)();
          l.push(e());
        }
      } catch (e) {
        console.error("Error loading binanceW3WConnector", e);
      }
      let u = (0, s._)({
        chains: o.H5,
        connectors: l,
        ssr: !0,
        transports: c.g,
      });
    },
    1028: function (e, t, a) {
      "use strict";
      a.d(t, {
        g: function () {
          return r;
        },
      });
      var i = a(62536),
        n = a(21517),
        s = a(387);
      let r = {
        [n.p5.mainnet.id]: (0, i.d)(
          "https://wiser-special-county.quiknode.pro/ff714ea8ead3680d8c13f3a23f5e005cfb0ffa94/"
        ),
        [n.p5.bsc.id]: (0, i.d)(
          "https://side-sly-dust.bsc.quiknode.pro/bfe3b05a7b5c3d4328043ae14f1876a3096dbe85/"
        ),
        [n.p5.holesky.id]: (0, i.d)("https://eth-holesky.public.blastapi.io"),
        [n.p5.optimismGoerli.id]: (0, i.d)(
          "https://optimism-goerli.public.blastapi.io"
        ),
        [n.p5.arbitrum.id]: (0, i.d)(
          "https://quiet-orbital-sun.arbitrum-mainnet.quiknode.pro/59e3bfecc913a4fa4770029ac10a7f95282f4b3b/"
        ),
        [n.p5.mode.id]: (0, i.d)("https://mode-mainnet.public.blastapi.io"),
        [n.p5.linea.id]: (0, i.d)(
          "https://linea-mainnet.infura.io/v3/".concat(
            "fa6f42fde1574efabde801be7e166595"
          )
        ),
        [n.p5.blast.id]: (0, i.d)("https://blastl2-mainnet.public.blastapi.io"),
        [n.p5.base.id]: (0, i.d)(
          "https://spring-virulent-spree.base-mainnet.quiknode.pro/19ce98c58a9296c2c9431b99cb28467b7ad37f00/"
        ),
        [n.p5.optimism.id]: (0, i.d)(
          "https://optimism-mainnet.public.blastapi.io"
        ),
      };
      for (let e of s.H5) r[e.id] || (r[e.id] = (0, i.d)());
    },
    93486: function (e, t, a) {
      "use strict";
      a.d(t, {
        Ey: function () {
          return r;
        },
        GK: function () {
          return n;
        },
        M7: function () {
          return d;
        },
        Nr: function () {
          return i;
        },
        of: function () {
          return s;
        },
      });
      let i = "So11111111111111111111111111111111111111112",
        n = "11111111111111111111111111111111",
        s = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        r = 9,
        d = 1731936600;
    },
    59067: function (e, t, a) {
      "use strict";
      a.d(t, {
        L: function () {
          return A;
        },
        y: function () {
          return d;
        },
      });
      var i = a(57437),
        n = a(2265),
        s = a(21517);
      let r = (0, n.createContext)(void 0);
      function d(e) {
        let { children: t } = e,
          a = (function () {
            let [e, t] = (0, n.useState)("mainnet"),
              [a, i] = (0, n.useState)("devnet"),
              r = s.p5.solanaMainnet.id;
            "development" === e &&
              (r =
                "devnet" === a ? s.p5.solanaDevnet.id : s.p5.solanaTestnet.id);
            let [d, A] = (0, n.useState)(void 0);
            return {
              solanaChainId: r,
              solanaCustomEndpoint: d,
              setSolanaCustomEndpoint: A,
              deploymentEnvironment: e,
              setDeploymentEnvironment: t,
              developmentChainType: a,
              setDevelopmentChainType: i,
            };
          })();
        return (0, i.jsx)(r.Provider, { value: a, children: t });
      }
      function A() {
        let e = (0, n.useContext)(r);
        if (void 0 === e)
          throw Error("useNetwork must be used within a NetworkProvider");
        return e;
      }
    },
    67750: function (e, t, a) {
      "use strict";
      a.d(t, {
        Q: function () {
          return c;
        },
        $: function () {
          return l;
        },
      });
      var i = a(57437),
        n = a(2265),
        s = a(26735),
        r = a(28782),
        d = a(88262),
        A = a(59067);
      let o = (0, n.createContext)(void 0);
      function c(e) {
        let { children: t } = e,
          a = (function () {
            var e, t, a;
            let i = (0, s.useAccount)(),
              o = (function () {
                let {
                    publicKey: e,
                    connected: t,
                    connecting: a,
                    disconnect: i,
                    disconnecting: n,
                    wallet: s,
                    signTransaction: d,
                    signMessage: A,
                    sendTransaction: o,
                  } = (0, r.O)(),
                  c = null == e ? void 0 : e.toBase58();
                return {
                  publicKey: e,
                  userAddress: c,
                  isConnecting: a,
                  isConnected: !!(e && s && t),
                  isDisconnect: i,
                  isDisconnecting: n,
                  disconnect: i,
                  signTransaction: d,
                  signMessage: A,
                  sendTransaction: o,
                };
              })(),
              { solanaChainId: c, deploymentEnvironment: l } = (0, A.L)(),
              [u, p] = (0, n.useState)(),
              [h, f] = (0, n.useState)(),
              g = null != u ? u : i.address,
              b = null != h ? h : o.userAddress,
              m = "mainnet" === l,
              E = m ? d.t : d.rh,
              x = E.chain.id,
              w = i.isConnected || o.isConnected,
              k = i.isConnecting || o.isConnecting;
            return {
              deployment: E,
              deploymentChainId: x,
              userChainId:
                null === (e = i.chain) || void 0 === e ? void 0 : e.id,
              isAppOnMainnet: m,
              account: { ...i, address: g },
              user: { isConnected: w, isConnecting: k },
              evm: {
                evmChainId: x,
                account: {
                  ...i,
                  userAddress: g,
                  userChainId:
                    null === (t = i.chain) || void 0 === t ? void 0 : t.id,
                  isUserChainMatch:
                    (null === (a = i.chain) || void 0 === a ? void 0 : a.id) ===
                    x,
                },
              },
              solana: {
                solanaChainId: c,
                account: { ...o, userAddress: b, userChainId: c },
              },
              impersonatedEVMAddress: u,
              setImpersonatedEVMAddress: p,
              impersonatedSolAddress: h,
              setImpersonatedSolAddress: f,
            };
          })();
        return (0, i.jsx)(o.Provider, { value: a, children: t });
      }
      function l() {
        let e = (0, n.useContext)(o);
        if (void 0 === e)
          throw Error("useWeb3 must be used within a Web3Provider");
        return e;
      }
    },
    42560: function (e, t, a) {
      "use strict";
      a.d(t, {
        p: function () {
          return C;
        },
      });
      var i = a(21898),
        n = a(74511),
        s = a(89436),
        r = a(45829),
        d = a(77030),
        A = a(46663),
        o = a(79),
        c = a(5502),
        l = a(92611),
        u = a(74761),
        p = a(82129),
        h = a(71666),
        f = a(62713),
        g = a(39477),
        b = a(78734),
        m = a(84430),
        E = a(24256),
        x = a(21517),
        w = a(9369);
      async function k() {
        try {
          return {
            points: (
              await Promise.all(
                w.Yc.filter((e) => !!e.address).map(async (e) => {
                  let { address: t } = e,
                    a = await fetch(
                      "https://app.eoracle.io/api/v1/points/".concat(t)
                    ),
                    i = await a.json();
                  return Number(i.points);
                })
              )
            ).reduce((e, t) => e + t, 0),
          };
        } catch (e) {
          return { points: 0 };
        }
      }
      let C = [
        {
          id: "eigenDA",
          name: "EigenDA",
          link: "https://docs.eigenlayer.xyz/eigenda/overview/",
          address: "0x870679e138bcdf293b7ff14dd44b70fc97e12fc0",
          chain: x.p5.mainnet,
          description:
            "EigenDA is a data availability store made by EigenLabs and built on top of EigenLayer.",
          logo: { auto: o.default },
          pointsFn: null,
        },
        {
          id: "eoracle",
          name: "eoracle",
          link: "https://www.eoracle.io/",
          address: "0x23221c5bb90c7c57ecc1e75513e2e4257673f0ef",
          chain: x.p5.mainnet,
          description:
            "The modular and programmable oracle network secured by Ethereum, built with Eigenlayer.",
          tooltip:
            "Total amount of eOracle points captured by Reno will be distributed to ezETH holders.  More information will be provided once eOracle defines distribution plans",
          logo: { light: l.default, dark: c.default },
          pointsFn: () => k(),
        },
        {
          id: "altLayer",
          name: "AltLayer",
          link: "https://altlayer.io/",
          address: "0x71a77037870169d47aad6c2c9360861a4c0df2bf",
          chain: x.p5.mainnet,
          description:
            "AltLayer MACH is a fast finality AVS for OP Mainnet and Arbitrum One. As an AVS, users can delegate ETH or LSTs to any of the registered operators.",
          logo: { auto: i.default },
          pointsFn: null,
        },
        {
          id: "brevis",
          name: "Brevis coChain AVS",
          link: "https://brevis.network/",
          address: "0x9fc952bdcbb7daca7d420fa55b942405b073a89d",
          chain: x.p5.mainnet,
          description:
            "Brevis is a Smart ZK Coprocessor For Blockchain run on EigenLayer.",
          logo: { light: d.default, dark: r.default },
          pointsFn: null,
        },
        {
          id: "lagrange",
          name: "Lagrange",
          link: "https://www.lagrange.dev/",
          address: "0x35f4f28a8d3ff20eed10e087e8f96ea2641e6aa2",
          chain: x.p5.mainnet,
          description:
            "Lagrange State Committees are a ZK light client protocol for optimistic rollups that combine EigenLayer's restaked security with Lagrange's ZK Coprocessor.",
          logo: { auto: h.default },
          pointsFn: null,
        },
        {
          id: "witness-chain",
          name: "Witness Chain",
          link: "https://www.witnesschain.com/",
          address: "0xd25c2c5802198cb8541987b73a8db4c9bcae5cc7",
          chain: x.p5.mainnet,
          description:
            "The EigenLayer AVS for DePIN coordination. It is the first physical state consensus protocol which is unifying a siloed DePIN economy.",
          logo: { auto: m.default },
          pointsFn: null,
        },
        {
          id: "omni-network",
          name: "Omni Network",
          link: "https://omni.network/",
          address: "0xed2f4d90b073128ae6769a9a8d51547b1df766c8",
          chain: x.p5.mainnet,
          description:
            "Omni is an Ethereum-native interoperability protocol that establishes low latency communications across Ethereum’s rollup ecosystem.",
          logo: { light: g.default, dark: f.default },
          pointsFn: null,
        },
        {
          id: "automata",
          name: "Automata Multi-Prover",
          link: "https://www.ata.network/",
          address: "0xe5445838c475a2980e6a88054ff1514230b83aeb",
          chain: x.p5.mainnet,
          description:
            "Automata Network explores the development of TEE Coprocessors in the direction of a Multi-Prover AVS on EigenLayer.",
          logo: { auto: s.default },
          pointsFn: null,
        },
        {
          id: "openlayer",
          name: "OpenLayer",
          link: "https://www.openlayer.tech/",
          address: "0xF7fcff55d5FDAf2C3Bbeb140Be5e62a2c7D26Db3",
          chain: x.p5.mainnet,
          description:
            "OpenLayer is building an authentic data layer for both onchain and offchain applications.",
          logo: { auto: b.default },
          pointsFn: null,
        },
        {
          id: "xterio",
          name: "Xterio Mach",
          link: "https://xter.io/",
          address: "0x6026b61bdd2252160691cb3f6005b6b72e0ec044",
          chain: x.p5.mainnet,
          description:
            "Xterio is a Web3 game developer and publisher founded by veterans of the game industry.",
          logo: { auto: E.default },
          pointsFn: null,
        },
        {
          id: "lagrange-zk",
          name: "Lagrange ZK Coprocessor",
          link: "https://www.lagrange.dev/",
          address: "0x35f4f28a8d3ff20eed10e087e8f96ea2641e6aa2",
          chain: x.p5.mainnet,
          description:
            "Lagrange’s ZK Coprocessor lifts intensive computations off-chain and generates ZK proofs of the result to bring back on-chain.",
          logo: { auto: p.default },
          pointsFn: null,
        },
        {
          id: "cyber",
          name: "Cyber via AltLayer",
          link: "https://cyber.co/",
          address: "0x1F2c296448f692af840843d993fFC0546619Dcdb",
          chain: x.p5.mainnet,
          description:
            "Cyber is Web3's biggest decentralized social network, with its eye on creating mass adoption for tokenized, SocialFi experiences.",
          logo: { auto: A.default },
          pointsFn: null,
        },
        {
          id: "hyperlane",
          name: "Hyperlane AVS",
          link: "https://www.hyperlane.xyz/",
          address: "0xe8e59c6c8b56f2c178f63bcfc4ce5e5e2359c8fc",
          chain: x.p5.mainnet,
          description:
            "Hyperlane is a modular and permissionless interoperability framework that enables you to permissionlessly connect any blockchain, out-of-the-box.",
          logo: { auto: u.default },
          pointsFn: null,
        },
        {
          id: "arpa",
          name: "ARPA Network",
          link: "https://www.arpanetwork.io",
          address: "0x1de75eaab2df55d467494a172652579e6fa4540e",
          chain: x.p5.mainnet,
          description:
            "The ARPA BLS Threshold Signature Scheme (BLS-TSS) Network is a cutting-edge decentralized cryptographic system designed to perform BLS threshold signature tasks.",
          logo: { auto: n.default },
          pointsFn: null,
        },
      ];
    },
    61731: function (e, t, a) {
      "use strict";
      a.d(t, {
        bH: function () {
          return m;
        },
        sB: function () {
          return x;
        },
        QI: function () {
          return E;
        },
      });
      var i,
        n = a(57437),
        s = a(66648),
        r = a(98217),
        d = a(16491),
        A = a(54288),
        o = a(46448),
        c = a(44304),
        l = a(387),
        u = a(37947),
        p = a(16789),
        h = a(95081),
        f = a(92380),
        g = a(42560),
        b = a(9369);
      let m = [
        {
          id: "ezEIGEN",
          ecosystem: c.EJ,
          chainId: d.R.id,
          chainType: A.J.EVM,
          depositToken: {
            ...l.TV[l.Wr.EIGEN],
            decimals: l.p8,
            chainId: d.R.id,
            address: l.TV[l.Wr.EIGEN].supportedChains[d.R.id].address,
            coinGeckoId: "eigenlayer",
          },
          receiptToken: {
            ...l.TV[l.Wr.ezEIGEN],
            decimals: l.p8,
            chainId: d.R.id,
            address: l.TV[l.Wr.ezEIGEN].supportedChains[d.R.id].address,
          },
          curator: o.i,
          avss: [
            null !== (i = g.p.find((e) => "eigenDA" === e.id)) && void 0 !== i
              ? i
              : {},
          ],
          operators: b.z3,
          banner: {
            type: "eigen",
            title: (0, n.jsxs)("div", {
              className: "flex flex-row items-center justify-center gap-2",
              children: [
                (0, n.jsx)(s.default, {
                  src: r.default,
                  alt: "eigen",
                  height: 24,
                  width: 24,
                }),
                (0, n.jsxs)(u.Z.uT, {
                  className: "font-semibold",
                  children: [
                    "$EIGEN claims are live",
                    " ",
                    (0, n.jsx)("a", {
                      href: "https://ezeigen.renzoprotocol.com/",
                      target: "_blank",
                      className: "underline",
                      children: "here",
                    }),
                  ],
                }),
                (0, n.jsx)(s.default, {
                  src: r.default,
                  alt: "eigen",
                  height: 24,
                  width: 24,
                }),
              ],
            }),
          },
          description: (0, n.jsx)("div", {
            className: "flex flex-col items-center md:items-start",
            children: (0, n.jsx)(p.RewardsBagde, {
              iconComponent: (0, n.jsx)(f.A, {
                token: l.TV.EIGEN,
                className: "mr-3",
              }),
              text: "Staking & Restaking rewards auto-compounded",
              link: "https://docs.renzoprotocol.com/docs/renzo/usdezeigen",
              textClassNames: "py-1",
            }),
          }),
          rewards: (0, n.jsx)("div", {
            className: "flex flex-row",
            children: (0, n.jsx)(h.r, {
              tokenCompoundingIcon: { token: l.TV.EIGEN },
            }),
          }),
        },
        {
          id: "ezREZ",
          ecosystem: c.EJ,
          chainId: d.R.id,
          chainType: A.J.EVM,
          depositToken: {
            ...l.TV[l.Wr.REN],
            decimals: l.p8,
            chainId: d.R.id,
            address: l.TV[l.Wr.REN].supportedChains[d.R.id].address,
            coinGeckoId: "renzo",
          },
          receiptToken: {
            ...l.TV[l.Wr.ezREZ],
            decimals: l.p8,
            chainId: d.R.id,
            address: l.TV[l.Wr.ezREZ].supportedChains[d.R.id].address,
          },
          curator: o.i,
          avss: [],
          operators: [],
          banner: void 0,
          description: (0, n.jsx)("div", {
            className:
              "font-poppins flex flex-col items-center gap-4 md:max-w-[592px] md:items-start",
            children: (0, n.jsxs)("div", {
              className: "flex flex-col items-center gap-8 md:items-start",
              children: [
                (0, n.jsxs)("div", {
                  className: "text-[14px] text-[#5F6082] dark:text-[#8D8EAF]",
                  children: [
                    "Get ezREZ for upgraded REN rewards. If you have previously staked your REN, click",
                    " ",
                    (0, n.jsx)("a", {
                      className: "font-bold text-[#80b70d] dark:text-[#c4ff61]",
                      href: "/stake",
                      children: "here",
                    }),
                    " ",
                    "to activate cooldown and withdraw your REN before minting ezREZ.",
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "flex flex-row items-center gap-4",
                  children: (0, n.jsx)(p.RewardsBagde, {
                    classNames: "w-full md:w-[360px]",
                    iconComponent: (0, n.jsx)(f.A, {
                      token: l.TV.REN,
                      className: "mr-3",
                    }),
                    text: "Auto-compounded rewards: Staking, airdrops, and fee sharing \uD83D\uDD25",
                    textClassNames: "py-1",
                  }),
                }),
              ],
            }),
          }),
          rewards: (0, n.jsx)("div", {
            className: "flex flex-row",
            children: (0, n.jsx)(h.r, {
              tokenCompoundingIcon: { token: l.TV.REN },
            }),
          }),
          hidden: !0,
        },
      ];
      function E(e) {
        return !!m.find(
          (t) => t.receiptToken.symbol.toLowerCase() === e.toLowerCase()
        );
      }
      function x() {
        return m.filter((e) => !e.hidden);
      }
    },
    9369: function (e, t, a) {
      "use strict";
      a.d(t, {
        J7: function () {
          return c;
        },
        XI: function () {
          return o;
        },
        Yc: function () {
          return l;
        },
        z3: function () {
          return u;
        },
      });
      var i = a(97906),
        n = a(25104),
        s = a(76106),
        r = a(41828),
        d = a(74413),
        A = a(21517);
      let o = "0xb585cb192855253d33ddbdac2d20f50085ef8d41",
        c = [
          { index: 0, address: "0xbAf5f3A05BD7Af6f3a0BBA207803bf77e2657c8F" },
          { index: 1, address: "0x0B1981a9Fcc24A445dE15141390d3E46DA0e425c" },
          { index: 2, address: "0x125B367C16C5858f11e12948404F7a1371a0FDa3" },
          { index: 3, address: "0x78524bEeAc12368e600457478738c233f436e9f6" },
          { index: 4, address: "0x38cDB1A8207264C1A07c42c43A4c3ED4bfab7CEA" },
        ],
        l = [
          {
            id: "p2p",
            name: "P2P.org",
            link: "https://p2p.org/",
            chain: A.p5.mainnet,
            address: "0x865caE37b4F44e73eA1e79577C5BFc6207C98f16",
            operatorDelegator: "0x0B1981a9Fcc24A445dE15141390d3E46DA0e425c",
            eigenLayerLink:
              "https://app.eigenlayer.xyz/operator/0x865cae37b4f44e73ea1e79577c5bfc6207c98f16",
            logo: { auto: r.default },
          },
          {
            id: "luganodes",
            name: "Luganodes",
            link: "https://www.luganodes.com/",
            chain: A.p5.mainnet,
            address: "0x5cd6Fdfad710609c828feba2508bCAF89e80501a",
            operatorDelegator: "0xbAf5f3A05BD7Af6f3a0BBA207803bf77e2657c8F",
            eigenLayerLink:
              "https://app.eigenlayer.xyz/operator/0x5cd6fdfad710609c828feba2508bcaf89e80501a",
            logo: { auto: s.default },
          },
          {
            id: "figment",
            name: "Figment",
            link: "https://figment.io/",
            chain: A.p5.mainnet,
            address: "0xDFCb21AC9b99dE986D99F4CE5FCE2A6542eFe3A1",
            operatorDelegator: "0x125B367C16C5858f11e12948404F7a1371a0FDa3",
            eigenLayerLink:
              "https://app.eigenlayer.xyz/operator/0xdfcb21ac9b99de986d99f4ce5fce2a6542efe3a1",
            logo: { auto: i.default },
          },
          {
            id: "pierTwo",
            name: "Pier Two",
            link: "https://piertwo.com/",
            chain: A.p5.mainnet,
            address: "0x5dCdf02a7188257b7c37dD3158756dA9Ccd4A9Cb",
            operatorDelegator: "0x78524bEeAc12368e600457478738c233f436e9f6",
            eigenLayerLink:
              "https://app.eigenlayer.xyz/operator/0x5dCdf02a7188257b7c37dD3158756dA9Ccd4A9Cb",
            logo: { auto: d.default },
          },
          {
            id: "hashcloud",
            name: "HashKey Cloud",
            link: "https://www.hashkey.cloud/",
            chain: A.p5.mainnet,
            address: "0x3F98F47D302a3CFd3746Fe35f7cF10c3217e5272",
            operatorDelegator: "0x38cDB1A8207264C1A07c42c43A4c3ED4bfab7CEA",
            eigenLayerLink:
              "https://app.eigenlayer.xyz/operator/0x3f98f47d302a3cfd3746fe35f7cf10c3217e5272",
            logo: { auto: n.default },
          },
        ],
        u = [
          {
            id: "luganodes-ezeigen",
            name: "Luganodes",
            link: "https://www.luganodes.com/",
            chain: A.p5.mainnet,
            address: "0x84e84949e26a4328c2a503985db33fb38732483e",
            operatorDelegator: "0xd4fcde9bb1d746Dd7e5463b01Dd819EE06aF25db",
            eigenLayerLink:
              "https://app.eigenlayer.xyz/operator/0x84e84949e26a4328c2a503985db33fb38732483e",
            logo: { auto: s.default },
          },
        ];
      A.p5.mainnet, s.default;
    },
    54288: function (e, t, a) {
      "use strict";
      var i, n;
      a.d(t, {
        J: function () {
          return i;
        },
      }),
        ((n = i || (i = {})).EVM = "evm"),
        (n.Solana = "solana");
    },
    54601: function (e, t, a) {
      "use strict";
      var i, n;
      a.d(t, {
        W: function () {
          return i;
        },
      }),
        ((n = i || (i = {})).ETH = "ETH"),
        (n.ezETH = "ezETH"),
        (n.ezSOL = "ezSOL"),
        (n.stETH = "stETH"),
        (n.rETH = "rETH"),
        (n.WETH = "WETH"),
        (n.wBETH = "wBETH"),
        (n.REN = "REN"),
        (n.EIGEN = "EIGEN"),
        (n.pzETH = "pzETH"),
        (n.wstETH = "wstETH"),
        (n.rswETH = "rswETH"),
        (n.weETH = "weETH"),
        (n.JitoSOL = "JitoSOL"),
        (n.USDC = "USDC"),
        (n.ezUSDC = "ezUSDC"),
        (n.ezRstETH = "ezRstETH"),
        (n.ezREZ = "ezREZ"),
        (n.ezEIGEN = "ezEIGEN"),
        (n.SOL = "SOL");
    },
    16349: function (e, t, a) {
      "use strict";
      a.d(t, {
        cn: function () {
          return s;
        },
      });
      var i = a(44839),
        n = a(96164);
      function s() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, n.m6)((0, i.W)(...t));
      }
    },
    36653: function (e, t, a) {
      "use strict";
      a.d(t, {
        BB: function () {
          return r;
        },
        M4: function () {
          return d;
        },
        r_: function () {
          return n;
        },
        xb: function () {
          return s;
        },
      });
      var i = a(93486);
      let n = "0x0000000000000000000000000000000000000000",
        s = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
      function r(e) {
        let t = e.toLowerCase();
        return t === n || t === i.GK;
      }
      function d(e, t) {
        return "".concat(e.toLowerCase(), ":").concat(t);
      }
    },
    21898: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/altlayer.fb3a16cf.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEX///+PkMG1ttbt7fXj4+/CwdqcnsjP0OTPzuNbXaNaXaK3STvAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJklEQVR4nGNgQALMLBCag4mRCcxnY2TkYoUyOEEMBnaoFEIxBAAADP4AWwFmTaQAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    74511: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/arpa.4e38c98d.jpeg",
          height: 200,
          width: 200,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGsB//EABYQAAMAAAAAAAAAAAAAAAAAAAIRE//aAAgBAQABBQJnT//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABYQAAMAAAAAAAAAAAAAAAAAAAAiMv/aAAgBAQAGPwKVP//EABkQAAIDAQAAAAAAAAAAAAAAAAERACFRkf/aAAgBAQABPyEoLA2Oz//aAAwDAQACAAMAAAAQ8//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABkQAQEAAwEAAAAAAAAAAAAAABEBACFBMf/aAAgBAQABPxAbTa0oA9Pug7n/2Q==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    89436: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/ataLogo.d475f35c.png",
          height: 92,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEVMaXHJeTm/YjO0US7orULVfDzYlDjjojTZkjy7XSbFdTSxSyt5AAvrskX0ukS5ZS/flDqsQy3Tjj7fljThoEC9Xi7hpULLeTXCbDLzv0jHbjW8YjLDcC3XlUDDazLPZzfii0H5uUjuoEjTYr0aAAAAH3RSTlMA8e7yr/59FfQfgOYL/SF20KPuMf7C94uytuT2X7qrCdEriAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEFJREFUeJwFwYUBgDAAwLCOueLu/H8kCRDcZADqpxm1AV/pPm2u0N4zHJ9CRgucmWGx3qeQWd9OVPFWWOXELq/yA2NSAvjrRDbiAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    45829: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/brevis-dark.586f2d3a.png",
          height: 400,
          width: 400,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEX///8QDg25sKZ5cmxybGbb0srh2dKTi4RMR0M5NTOtpZ2/taymnpY+OjdQS0dgBSFDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVR4nB3LyRGAMBAEsZ49vTaQf7gU/PQRUN0FYJrRhlK4h5ITtpa5cdyeH6mIcCVsza3ra9Wd8AIk9gENkWL+AgAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    77030: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/brevis-light.69049171.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMaXF+7AfAAAAACXRSTlM6ebuVIqFObQDwPHDYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nEWLMRIAMAiDiMbq/1/cqXbjDmCozGKgDC5It9ROQnFOKD6s2vjtFxz4AM3BRF7xAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    46663: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/cyber.dfbeb376.svg",
          height: 25,
          width: 25,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    79: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/eigenDA.99f95593.png",
          height: 400,
          width: 400,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEX////o5/C1sc8dDm3MyN6Tjbnw7/Wln8XZ1uUoHHVnX53g3uqKg7N5cqjRzuHHxNo1KH677NYNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nGNggAM2dj4mFkYGBgYOZn4uXm4Qg5ORiwckxSHAygRWw8HMyckOUczOyoLQywAAItsA5+dORFQAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    5502: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/eoracle-dark.0f77fec4.svg",
          height: 83,
          width: 188,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    92611: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/eoracle-light.5917465c.svg",
          height: 83,
          width: 188,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    74761: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/hyperlane.0aaadab8.png",
          height: 1e3,
          width: 1e3,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEUeYcDa5fRbjNH//P4zYsG7ec87d8gjYsAaWr1Sesvr8vpITbvLtOSRrN7/x+3/xeyQq93KteSTW0EtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAN0lEQVR4nD2LSQ6AIADEyjqDoOj/P0vg4K1JW4QBCXLLrSLo8y4BIZfrS9EHxgb68x71x3u3pQUy3AF2bCh2rgAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    82129: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/lagrange-coprocessor.a00323a7.svg",
          height: 109,
          width: 208,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    71666: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/lagrange.823b2f72.png",
          height: 89,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAV1BMVEVMaXG0a18Xg5iBdGvnZGP5mB3gfFHfjD7tcH7UYmXYTUGkZ2XlcmRTd4PGXl1+c26wclFlcYQbhJ3/iUDmVUqhbnWlYl/9cGv7jCH5hzG8gFumdGyvf17OvallAAAAGnRSTlMA11ve8XX1B1vcQo3Ya7/F7Klub13EWIqPur3fPvQAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA8SURBVHicFcrHFsAQFEDBqz5SSCHS/v87HbtZDISYlNEQ7ITcv2aZEXgMfgXh/PD7QFO49xjxArflGgsdNNoB2mjZ9GQAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 7,
        });
    },
    62713: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/omni-dark.c057e572.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEX///////////////9MaXH///////////////////////////8iHpfXAAAADHRSTlP4ObAvAJzCFUwWxEtmMDqOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANElEQVR4nEWKSQoAIAzEMu1oXf7/XxEEcwokWEtaMm5E0MzckRl7Amknlyc1bhr1Z6tLXT4gcwDb9WVRuwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    39477: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/omni-light.344e01e7.png",
          height: 757,
          width: 757,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEUEZP8EZv8FZP9MaXEFZP8FZP8EZ/8FY/8FY/8PXP8NXf8Gef9FQAcEAAAAC3RSTlM4si4A+sGdR/QQE4rfrbMAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA1SURBVHicRcsxEgAhDMNAOQ4kwP//S3M3dCpWmAED43mkM80uRag22WFH5hfdrBKhWg//+wUk5QEFNhKlIQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    78734: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/openlayer.77eaffbc.png",
          height: 400,
          width: 400,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUSGCoGDB8KECOHipMyN0ehpKpGS1ljZ3JdYm4+QlFOh4luAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALElEQVR4nEWKQQoAMAjDWq3T/f/DQxg0l+QQwAQZa2rmEghVZh06QHWvPX8eEloAgC3Ku24AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    84430: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/witness-chain.3720eead.png",
          height: 90,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEVMaXGPhruqosXJxNmqo8eqocOkncD/+/29uNNplTlzAAAACXRSTlMAEGGMjH9JkI4ILEZTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nGNgQAKMUJqJlQnCZ2ZnBosxsjCzQCSZWNmQdcABAAdzADQWa7HQAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    24256: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/xterio.2de7c509.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEUoKiyEdZi4mMktMDJSUFlZhZWSps0fISAlJyc3NztASEq03+tefomDxupyrczBoLM1SlPgst/WqOVEZXGF3/+OdI8ibHSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nCWLSxaAIBDDCgy0Ayp+739VHphNNgkg/CQTIQG1bc9RjEie3xxuB3ju5GUzKzH2aXn4fL0ihQE0IQF+e9WChAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    87704: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/arbitrum.3b07ebef.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    57780: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/base.25904184.svg",
          height: 46,
          width: 46,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    18527: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/blast.088fc802.png",
          height: 128,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEUBAQANDQAAAAC3twIAAAALCwAAAAAAAAClpQJMaXHb2wMdHQCWlgJvbwEnJwBUVAEREQBDQwGBgQHCwgIxMQE1WVKgAAAAC3RSTlMvsOr6tOqw9v0A+vtivJkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA+SURBVHicNctBFoAgCEDBXylgIGp1/7P2WrSfoVFUCw2qu3sFGYeF3Rs64+n9UnSZLxuK9DPCUj6cOXf4+wtMBAIiIJqZcAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    21198: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/bnb.148bfba4.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    13926: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/ethereum.16f30881.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    10772: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/frax.d1621e22.png",
          height: 1e3,
          width: 1e3,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEVMaXExMTFRUVFMTEwFBQXLy8s2Nja/v7/Dw8NCQkLHx8dCQkLFxcUZGRnBwcEGBgbfJ5syAAAADXRSTlMA666y/vr2LS/tMOssvfmeAQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADhJREFUeJxFykkOACAIBMFBFNwG/v9b40VvnVQDrmbqwFyslaujsEU0FlgGGSk/Hs1x59EBVxHdOEqoAgr3Cw7xAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    97032: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/linea.ad53cc4a.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    24032: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/mode.ca1f3a23.jpeg",
          height: 400,
          width: 400,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAABBv/aAAwDAQACEAMQAAABoCRf/8QAFRABAQAAAAAAAAAAAAAAAAAAEyT/2gAIAQEAAQUCpf8A/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFhEBAQEAAAAAAAAAAAAAAAAAAgAR/9oACAECAQE/AUtv/8QAFxAAAwEAAAAAAAAAAAAAAAAAABJjof/aAAgBAQAGPwKb4f/EABkQAAEFAAAAAAAAAAAAAAAAAAARIYGxwf/aAAgBAQABPyG8Voaf/9oADAMBAAIAAwAAABAL/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8Qr//EABgRAAIDAAAAAAAAAAAAAAAAAAEhABFR/9oACAECAQE/EFUBWT//xAAaEAEAAQUAAAAAAAAAAAAAAAARIQBBUWFx/9oACAEBAAE/ELU5JxNh6r//2Q==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    83134: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/optimism.12991ae7.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    34269: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/solana.e7465188.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    96035: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/eigenlayer.8fc468eb.svg",
          height: 45,
          width: 45,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    65474: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/jito-dark.da519e53.svg",
          height: 500,
          width: 501,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    73483: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/jito-light.dc11822a.svg",
          height: 502,
          width: 501,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    61446: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/symbiotic.9381ef7e.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    97906: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/figment.3386bae6.png",
          height: 400,
          width: 400,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEX/8pr/9Zz//qOyqW7875jOxH7g1YlgXD+AelH16ZWknGaenWd9GrQ1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nGNgQABGBhYQxcLEysHBysTCwMLEzM7MxggSYWbngjK4mSCKOTnBisHaGBgYABRTAJTG4zH8AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    25104: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/hashkeycloud.c2a4c285.png",
          height: 470,
          width: 470,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEX////7+/uqrLDt7u/Dxs/U1dXR1N1dF6DRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nGNgwAIYQYCBgZGFiYmJiZWBgYGZmZmNhRkmiU0LAAb0ADCQVXxHAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    76106: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/luganodes.1bbfbd80.png",
          height: 964,
          width: 964,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEX//f3+/v7yrbP1wcb+/v76yc7//////v7+/f1MaXHsgYv////kRlbvlZ784OPrfYjbBBntg44+AwVWAAAAC3RSTlMutP367v7r+K8A/iMNrcEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA7SURBVHicRcq5AYAwDANAJcSWjPLA/stScvWh0MiGAtK2E5Cv27RAzrOWE3yfmDMSir57bP25oDGE+gBDUAHgKMGN5AAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    41828: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/p2p.1eac2564.png",
          height: 1488,
          width: 1488,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAACVBMVEUSav9dmv84g/8wP8cwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGUlEQVR4nGNgwAMYwYCBgYGJiZGRiQmfUgACdgARThbaVAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    74413: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/piertwo.548b1827.png",
          height: 400,
          width: 400,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEX///+3utS+wdrExdrv8Pb09fmdn8P6+vysrMvh4ezl5e9RU5XtzsrWpKRR8yB8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVR4nBXLxxHAMAwEsSV5DAruv12PfvgAkLsAZPeaoF3fJ2/2jNnMZh2LsLPoeqiGLPfK1zIi4QcoXAEVfMvSlgAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    7020: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/compounding.1f8170d1.svg",
          height: 17,
          width: 17,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    98217: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/eigen.48b4ef56.svg",
          height: 45,
          width: 45,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    73074: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/ezEIGEN-dark.7d0a4a08.svg",
          height: 100,
          width: 100,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    2946: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/ezEIGEN-light.422ba25e.svg",
          height: 100,
          width: 100,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    85438: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/ezETH-dark.5e60f776.svg",
          height: 92,
          width: 92,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    14590: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/ezETH-light.eba02ef8.svg",
          height: 101,
          width: 100,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    87781: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/ezSOL-dark.84a7cab3.svg",
          height: 96,
          width: 96,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    96415: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/ezSOL-light.4eacd845.svg",
          height: 96,
          width: 96,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    53877: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/ezUSDC-dark.d67c7056.svg",
          height: 96,
          width: 96,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    30553: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/ezUSDC-light.d6175794.svg",
          height: 96,
          width: 96,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    13923: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/pzETH-dark.62bda7e9.svg",
          height: 92,
          width: 92,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    30805: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/pzETH-light.da45316c.svg",
          height: 101,
          width: 100,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
  },
]);
