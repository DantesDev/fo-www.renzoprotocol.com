(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5795],
  {
    82662: function (e, s, t) {
      Promise.resolve().then(t.bind(t, 4477)),
        Promise.resolve().then(t.bind(t, 43971)),
        Promise.resolve().then(t.bind(t, 32297)),
        Promise.resolve().then(t.bind(t, 36196)),
        Promise.resolve().then(t.bind(t, 51921)),
        Promise.resolve().then(t.bind(t, 8008));
    },
    4477: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          ConnectWallets: function () {
            return c;
          },
        });
      var n = t(57437),
        i = t(88190),
        o = t(67750),
        r = t(13962),
        a = t(41218),
        l = t(6359);
      function c() {
        let { evm: e, solana: s } = (0, o.$)(),
          { openEVMWalletDialog: t, openSolanaWalletDialog: c } = (0, i.G)(),
          u = (0, r.t)(),
          d = e.account.isConnected && s.account.isConnected,
          m = e.account.isConnected,
          p = s.account.isConnected,
          h = e.account.isConnecting || s.account.isConnecting,
          x = (0, n.jsx)(a.z, {
            className: "mx-1",
            size: "xs",
            onClick: c,
            variant: "bordered",
            children: "Solana Wallet",
          }),
          j = (0, n.jsx)(a.z, {
            className: "mx-1",
            size: "xs",
            onClick: t,
            variant: "bordered",
            children: "EVM Wallet",
          });
        return !u || h
          ? (0, n.jsx)("div", {
              className: "w-full",
              children: (0, n.jsx)(l.O, { className: "h-7 w-1/4" }),
            })
          : d
          ? null
          : (0, n.jsx)("div", {
              className: "w-full space-y-4",
              children: (0, n.jsx)("div", {
                className: "text-md font-semibold",
                children:
                  m || p
                    ? m
                      ? p
                        ? null
                        : (0, n.jsxs)(n.Fragment, {
                            children: [
                              "To see your Solana portfolio please connect ",
                              x,
                            ],
                          })
                      : (0, n.jsxs)(n.Fragment, {
                          children: [
                            "To see your Ethereum portfolio please connect ",
                            j,
                          ],
                        })
                    : (0, n.jsxs)(n.Fragment, {
                        children: [
                          "To see your portfolio please connect ",
                          j,
                          " and ",
                          x,
                        ],
                      }),
              }),
            });
      }
    },
    12402: function (e, s, t) {
      "use strict";
      t.d(s, {
        S: function () {
          return l;
        },
      });
      var n = t(57437),
        i = t(87138),
        o = t(19859),
        r = t(16349),
        a = t(68641);
      function l(e) {
        let {
          children: s,
          title: t,
          subtitle: l,
          info: c,
          titleRightAlignedContent: u,
          link: d,
          className: m,
          containerClassName: p,
          innerContainerClassName: h,
        } = e;
        return (0, n.jsx)("div", {
          className: (0, r.cn)(
            "bg-container-light dark:bg-container-dark dark:shadow-dark w-full rounded-xl shadow dark:border dark:border-white/10",
            p
          ),
          children: (0, n.jsxs)("div", {
            className: (0, r.cn)(
              "bg-grid dark:bg-grid-dark relative size-full p-6",
              h
            ),
            children: [
              (0, n.jsx)("div", {
                className:
                  "bg-lights absolute left-0 top-0 w-full bg-no-repeat",
              }),
              (0, n.jsxs)("div", {
                className: "z-10 flex h-full flex-1 flex-col",
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex flex-row items-start justify-between pb-1",
                    children: [
                      (0, n.jsxs)("div", {
                        className:
                          "text-md flex flex-row items-center gap-x-2 font-medium",
                        children: [
                          t,
                          c
                            ? (0, n.jsx)(a.u, {
                                content: c,
                                contentClassName: "min-w-60",
                                children: (0, n.jsx)(o.Z, { width: 14 }),
                              })
                            : d
                            ? (0, n.jsx)(i.default, {
                                href: d,
                                target: "_blank",
                                children: (0, n.jsx)(o.Z, { width: 14 }),
                              })
                            : null,
                        ],
                      }),
                      u,
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: "text-sm leading-normal",
                    children: (0, n.jsx)("span", { children: l }),
                  }),
                  s
                    ? (0, n.jsx)("div", {
                        className: (0, r.cn)("mt-auto pt-5 text-4xl", m),
                        children: s,
                      })
                    : null,
                ],
              }),
            ],
          }),
        });
      }
    },
    43971: function (e, s, t) {
      "use strict";
      t.d(s, {
        DiscoverCards: function () {
          return b;
        },
      });
      var n = t(57437),
        i = t(66648),
        o = t(19859),
        r = t(24026),
        a = t(67750),
        l = t(22721),
        c = t(61517),
        u = t(54018),
        d = t(387),
        m = t(68641),
        p = t(56967),
        h = t(45875),
        x = t(6359);
      function j(e) {
        let { points: s, label: t, isLoading: i } = e;
        return (0, n.jsxs)(h.J2, {
          children: [
            (0, n.jsx)(h.xo, {
              asChild: !0,
              className: "[&_.icon]:data-[state=open]:rotate-180",
              children: (0, n.jsx)("div", {
                className: "flex flex-row items-center justify-center gap-x-1",
                children: (0, n.jsxs)("button", {
                  type: "button",
                  className:
                    "light:hover:bg-gray-50 inline-flex w-full items-center justify-center gap-x-1.5 whitespace-nowrap rounded-md px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-white",
                  id: "menu-button",
                  "aria-expanded": "true",
                  "aria-haspopup": "true",
                  children: [
                    (0, n.jsx)("div", {
                      className: "overflow-hidden",
                      children: t,
                    }),
                    (0, n.jsx)(p.v, {
                      className:
                        "icon size-3 shrink-0 transition-transform duration-300",
                    }),
                  ],
                }),
              }),
            }),
            (0, n.jsx)(h.yk, {
              className: "flex w-auto flex-col p-1.5",
              align: "end",
              children: (0, n.jsx)("div", {
                className:
                  "flex items-center justify-center whitespace-nowrap rounded-xl px-3",
                children: i
                  ? (0, n.jsx)(x.O, { className: "h-6 w-[70px]" })
                  : (0, n.jsxs)("span", {
                      children: [
                        (0, c.au)(s),
                        " ",
                        (0, n.jsx)("span", {
                          className: "text-xs",
                          children: "Pts",
                        }),
                      ],
                    }),
              }),
            }),
          ],
        });
      }
      var g = t(36196),
        f = t(12402);
      function b() {
        var e, s, t, p, h, b, w, N, v;
        let {
            account: { address: y },
            deployment: S,
          } = (0, a.$)(),
          { totalPortfolioValue: k, isLoading: z } = (0, g.e)(),
          { data: E, isLoading: C } = l.o.stats.totals.useQuery({
            chainId: S.chain.id,
          }),
          { data: P, isLoading: I } =
            l.o.points.protocols.mellowProtocolPoints.useQuery(),
          { data: T, isLoading: M } = l.o.points.userPoints.useQuery(
            { address: y, chainId: S.chain.id },
            { enabled: !!y }
          ),
          { data: L, isLoading: W } =
            l.o.points.userEigenSeason2Points.useQuery(
              { address: y, chainId: S.chain.id },
              { enabled: !!y }
            ),
          { data: H, isLoading: D } = l.o.points.userSeason2Points.useQuery(
            { address: y, chainId: S.chain.id },
            { enabled: !!y }
          ),
          F =
            null !== (s = null == T ? void 0 : T.data.totals.renzoPoints) &&
            void 0 !== s
              ? s
              : 0,
          B =
            null !== (t = null == T ? void 0 : T.data.totals.symbioticPoints) &&
            void 0 !== t
              ? t
              : 0,
          Z =
            null !== (p = null == T ? void 0 : T.data.totals.mellowPoints) &&
            void 0 !== p
              ? p
              : 0,
          O = Math.max(
            F -
              (null !== (h = null == H ? void 0 : H.data) && void 0 !== h
                ? h
                : 0),
            0
          ),
          Q =
            null !==
              (b =
                null == E
                  ? void 0
                  : null === (e = E.data.totalRenzoPoints.data) || void 0 === e
                  ? void 0
                  : e.points) && void 0 !== b
              ? b
              : 0,
          R =
            null !== (w = null == P ? void 0 : P.data.symbioticPoints) &&
            void 0 !== w
              ? w
              : 0,
          A =
            null !== (N = null == P ? void 0 : P.data.mellowPoints) &&
            void 0 !== N
              ? N
              : 0;
        return (0, n.jsxs)("div", {
          className: "w-full space-y-4",
          children: [
            (0, n.jsx)("div", {
              className: "text-md font-semibold",
              children: "Discover Reno",
            }),
            (0, n.jsxs)("div", {
              className: "grid gap-3 lg:grid-cols-5",
              children: [
                (0, n.jsx)(f.S, {
                  title: "Wallet Balance",
                  innerContainerClassName: "p-3",
                  children: z
                    ? (0, n.jsx)(x.O, { className: "h-[33px] w-28" })
                    : (0, n.jsxs)("div", {
                        className:
                          "flex flex-row items-center justify-start gap-2",
                        children: [
                          (0, n.jsx)(m.u, {
                            content: (0, c.M)(k),
                            children: (0, c.zZ)(k, {
                              maximumFractionDigits: 1,
                              minimumFractionDigits: 1,
                            }),
                          }),
                          (0, n.jsx)(m.u, {
                            content: "Assets supported by Reno",
                            children: (0, n.jsx)(o.Z, { width: 14 }),
                          }),
                        ],
                      }),
                }),
                (0, n.jsx)(f.S, {
                  title: (0, n.jsxs)("div", {
                    className: "flex w-full flex-row items-center gap-x-2",
                    children: [
                      (0, n.jsx)("span", { children: "EigenLayer Points" }),
                      (0, n.jsx)(j, {
                        label: "S2",
                        points:
                          null !== (v = null == L ? void 0 : L.data) &&
                          void 0 !== v
                            ? v
                            : 0,
                        isLoading: W,
                      }),
                    ],
                  }),
                  subtitle: (0, n.jsxs)("div", {
                    className: "pt-4",
                    children: [
                      "The points program ended on August 15th and was replaced by weekly EIGEN reward distribution to ezETH users",
                      " ",
                      (0, n.jsx)("span", {
                        className: "inline-flex items-center",
                        children: (0, n.jsx)("a", {
                          href: "https://x.com/eigenlayer/status/1836111446092263453",
                          target: "_blank",
                          children: (0, n.jsx)(r.h, { className: "size-3" }),
                        }),
                      }),
                    ],
                  }),
                  innerContainerClassName: "p-3",
                }),
                (0, n.jsx)(f.S, {
                  title: (0, n.jsxs)("div", {
                    className: "flex flex-row items-center space-x-2",
                    children: [
                      (0, n.jsx)("div", { children: "ezPoints" }),
                      (0, n.jsx)(m.u, {
                        content: "See Points Breakdown",
                        children: (0, n.jsx)("div", {
                          className: "cursor-pointer",
                          onClick: () =>
                            (window.location.href = "#pointsBreakdown"),
                          children: (0, n.jsx)(u.cbq, { width: 14 }),
                        }),
                      }),
                      (0, n.jsx)(j, {
                        label: "Amore",
                        points: O,
                        isLoading: M || D,
                      }),
                    ],
                  }),
                  subtitle: C
                    ? (0, n.jsx)(x.O, { className: "h-[21px] w-24" })
                    : "Total: ".concat((0, c.D)(Q)),
                  innerContainerClassName: "p-3",
                  children: (0, n.jsxs)("div", {
                    className: "flex flex-row items-center justify-start gap-2",
                    children: [
                      d.TV.ezETH.icon.light && d.TV.ezETH.icon.dark
                        ? (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)(i.default, {
                                src: d.TV.ezETH.icon.light,
                                alt: d.TV.ezETH.name,
                                height: 30,
                                width: 30,
                                className: "block dark:hidden",
                              }),
                              (0, n.jsx)(i.default, {
                                src: d.TV.ezETH.icon.dark,
                                alt: d.TV.ezETH.name,
                                height: 30,
                                width: 30,
                                className: "hidden dark:block",
                              }),
                            ],
                          })
                        : null,
                      M
                        ? (0, n.jsx)(x.O, { className: "h-[33px] w-28" })
                        : (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)(m.u, {
                                content: (0, c.au)(F),
                                children: (0, c.D)(F, {
                                  maximumFractionDigits: 1,
                                  minimumFractionDigits: 1,
                                }),
                              }),
                              (0, n.jsx)(m.u, {
                                content:
                                  "Earn 1.5 ezPoints per hour per ezETH/pzETH",
                                children: (0, n.jsx)(o.Z, { width: 14 }),
                              }),
                            ],
                          }),
                    ],
                  }),
                }),
                (0, n.jsx)(f.S, {
                  title: "Symbiotic Points",
                  subtitle: I
                    ? (0, n.jsx)(x.O, { className: "h-[21px] w-24" })
                    : "Total: ".concat((0, c.D)(R)),
                  innerContainerClassName: "p-3",
                  children: (0, n.jsxs)("div", {
                    className: "flex flex-row items-center justify-start gap-2",
                    children: [
                      (0, n.jsx)(i.default, {
                        src: "/logos/symbiotic.svg",
                        alt: "Symbiotic logo",
                        height: 30,
                        width: 30,
                      }),
                      M
                        ? (0, n.jsx)(x.O, { className: "h-[33px] w-28" })
                        : (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)(m.u, {
                                content: (0, c.au)(B),
                                children: (0, c.D)(B, {
                                  maximumFractionDigits: 1,
                                  minimumFractionDigits: 1,
                                }),
                              }),
                              (0, n.jsx)(m.u, {
                                content:
                                  "Earn 1 Symbiotic point per hour per pzETH once cap has been lifted",
                                children: (0, n.jsx)(o.Z, { width: 14 }),
                              }),
                            ],
                          }),
                    ],
                  }),
                }),
                (0, n.jsx)(f.S, {
                  title: "Mellow Points",
                  subtitle: I
                    ? (0, n.jsx)(x.O, { className: "h-[21px] w-24" })
                    : "Total: ".concat((0, c.D)(A)),
                  innerContainerClassName: "p-3",
                  children: (0, n.jsxs)("div", {
                    className: "flex flex-row items-center justify-start gap-2",
                    children: [
                      (0, n.jsx)(i.default, {
                        src: "/logos/mellow.svg",
                        alt: "Mellow logo",
                        height: 30,
                        width: 30,
                      }),
                      M
                        ? (0, n.jsx)(x.O, { className: "h-[33px] w-28" })
                        : (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)(m.u, {
                                content: (0, c.au)(Z),
                                children: (0, c.D)(Z, {
                                  maximumFractionDigits: 1,
                                  minimumFractionDigits: 1,
                                }),
                              }),
                              (0, n.jsx)(m.u, {
                                content:
                                  "Earn 1 Mellow point per hour per pzETH",
                                children: (0, n.jsx)(o.Z, { width: 14 }),
                              }),
                            ],
                          }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    32297: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          PointsBreakdown: function () {
            return h;
          },
        });
      var n = t(57437),
        i = t(2265),
        o = t(67750),
        r = t(22721);
      let a = "wallet",
        l = "bonus";
      [
        {
          sourceName: a,
          projectSlugs: [
            "ezeth-points-newdb-arbitrum",
            "ezeth-points-blast",
            "ezeth-points-bsc",
            "ezeth-points-mode",
            "ezeth-points-base",
            "ezeth-points-newdb-optimism",
            "ezeth-points-newdb-linea",
            "ezeth-points-newdb-frax",
          ],
        },
        {
          sourceName: l,
          projectSlugs: [
            "deposit-boost-march",
            "deposit-boost-april",
            "deposit-boost-mode",
          ],
        },
        {
          sourceName: "aerodrome",
          projectSlugs: [
            "aerodrome-stable-points-base",
            "aerodrome-volatile-points-base",
            "aerodrome-cl-point",
            "aerodrome-cl-guage",
          ],
        },
        {
          sourceName: "aura",
          projectSlugs: [
            "aurafinance-points",
            "aura-tripool-points",
            "aura-points-arbitrum",
          ],
        },
        {
          sourceName: "balancer",
          projectSlugs: [
            "balancer-points",
            "balancer-points-swell-etherfi",
            "balancer-points-arbitrum",
          ],
        },
        {
          sourceName: "blackwing",
          projectSlugs: [
            "blackwing-points-ethereum",
            "blackwing-points-arbitrum",
          ],
        },
        {
          sourceName: "camelot",
          projectSlugs: ["gamma-points", "spnft-points-arbitrum"],
        },
        {
          sourceName: "curve",
          projectSlugs: [
            "curve-points",
            "curve-points-bsc",
            "curve-ezpz-points-ethereum",
            "curve-points-frax",
          ],
        },
        {
          sourceName: "dtx",
          projectSlugs: ["dtx-liquidity-vault-points-blast"],
        },
        {
          sourceName: "gearbox",
          projectSlugs: [
            "gearbox-points",
            "gearbox-arbitrum",
            "gearbox-optimism",
          ],
        },
        { sourceName: "pac", projectSlugs: ["pacfinance-points"] },
        { sourceName: "hyperlock", projectSlugs: ["hyperlock-points"] },
        { sourceName: "init", projectSlugs: ["init-points-blast"] },
        { sourceName: "ionic", projectSlugs: ["ionic-mode", "ionic-base"] },
        { sourceName: "ironclad", projectSlugs: ["ironclad-points"] },
        {
          sourceName: "juice",
          projectSlugs: ["juice-points", "juice-weth-supply-points-new"],
        },
        {
          sourceName: "kim",
          projectSlugs: [
            "kim-points",
            "kim-points-algebrapool-fast",
            "kim-kpnft-mode",
          ],
        },
        {
          sourceName: "layerbank",
          projectSlugs: ["layerbank-points-mode", "layerbank-points-linea"],
        },
        { sourceName: "mendi", projectSlugs: ["mendi-newdb-linea"] },
        { sourceName: "synonym", projectSlugs: ["synonym-points"] },
        {
          sourceName: "morpho",
          projectSlugs: [
            "morpho-points",
            "morpho-angle-points",
            "morpho-two-points",
            "morpho-ezeth-weth-points-base",
            "morpho-ezeth-usdc-points-base",
            "metamorpho-weth-points-base",
            "metamorpho-weth-points-ethereum",
          ],
        },
        {
          sourceName: "nile",
          projectSlugs: [
            "nile-points",
            "nilev3-points-linea",
            "gamma-nile-points",
          ],
        },
        { sourceName: "orbit lending", projectSlugs: ["orbit-points-blast"] },
        {
          sourceName: "pancakeSwap",
          projectSlugs: ["pancakeswapv3-points", "masterchefv3-points-bsc"],
        },
        { sourceName: "particle", projectSlugs: ["particle-blast"] },
        {
          sourceName: "pendle",
          projectSlugs: [
            "pendle-points",
            "pendle-points-arbitrum",
            "pendle-ethereum-zircuit",
            "pendle-bnb-sep2024",
            "pendle-mainnet-dec2024",
            "pendle-arbitrum-sept2024",
            "pendle-mainnet-sept2024",
            "rez-pendle-sept",
            "pendle-zircuit-aug",
          ],
        },
        {
          sourceName: "prisma",
          projectSlugs: ["prisma-points", "prismav2-points"],
        },
        {
          sourceName: "silo",
          projectSlugs: [
            "silo-pt-points-arbitrum",
            "silo-points-newdb-optimism",
            "silo-points-newdb-arbitrum",
            "silo-points-newdb-ethereum",
            "silo-base",
          ],
        },
        {
          sourceName: "sturdy",
          projectSlugs: [
            "sturdy-mode",
            "sturdy-agg-points-new",
            "sturdy-linea",
            "sturdy-optimism",
          ],
        },
        { sourceName: "swell", projectSlugs: ["swell-points-ethereum"] },
        {
          sourceName: "thruster",
          projectSlugs: ["thruster-points", "thruster-fee3000-points"],
        },
        {
          sourceName: "uniswap",
          projectSlugs: [
            "uniswapv3-points",
            "uniswapv3-wst-points-optimism",
            "uniswapv3-ezeigen-eigen-ethereum",
          ],
        },
        {
          sourceName: "zerolend",
          projectSlugs: [
            "zerolend-points-blast",
            "zerolend-points-eth",
            "zerolend-points-linea",
          ],
        },
        {
          sourceName: "zircuit",
          projectSlugs: [
            "zircuit-points",
            "ezeth-zircuit-l2",
            "ezeth-staking-zircuit-l2",
          ],
        },
        { sourceName: "molend", projectSlugs: ["molend-points-mode"] },
        {
          sourceName: "cyber",
          projectSlugs: ["cyber-deposit-points-ethereum"],
        },
        { sourceName: "kinza", projectSlugs: ["kinza-points-bsc"] },
        {
          sourceName: "l3x",
          projectSlugs: [
            "vela-points-arbitrum",
            "vela-points-mode",
            "vela-points-blast",
            "vela-points-linea",
            "vela-points-ethereum",
          ],
        },
        {
          sourceName: "karak",
          projectSlugs: ["karak-points-ethereum", "karak-points-arbitrum"],
        },
        { sourceName: "synfutures", projectSlugs: ["synfutures-points"] },
        {
          sourceName: "airpuff",
          projectSlugs: [
            "airpuff-points-ethereum",
            "airpuff-points-arbitrum",
            "airpuff-points-mode",
          ],
        },
        { sourceName: "fx", projectSlugs: ["fx-points"] },
        { sourceName: "lista", projectSlugs: ["lista-points-bsc"] },
        {
          sourceName: "notional",
          projectSlugs: [
            "notional-points-ethereum",
            "notional-points-arbitrum",
          ],
        },
        { sourceName: "contango", projectSlugs: ["contango-points"] },
        {
          sourceName: "velodrome",
          projectSlugs: [
            "velodrome-stable-point-mode",
            "velodrome-wsteth-optimism-cl",
            "velodrome-wsteth-optimism-gauge",
          ],
        },
        { sourceName: "xlayer", projectSlugs: ["ezeth-points-xlayer"] },
        { sourceName: "dolomite", projectSlugs: ["dolomite-points-arbitrum"] },
        { sourceName: "splice", projectSlugs: ["splice-points-mode"] },
        { sourceName: "ion", projectSlugs: ["ion-points"] },
        { sourceName: "extrafi", projectSlugs: ["extrafi-points-base"] },
        { sourceName: "loop", projectSlugs: ["loop-points"] },
        { sourceName: "ramses", projectSlugs: ["ramses-points-arbitrum"] },
        {
          sourceName: "infinex",
          projectSlugs: [
            "infinex-points-ethereum",
            "infinex-points-base",
            "infinex-points-arbitrum",
          ],
        },
        { sourceName: "lynex", projectSlugs: ["gamma-points-lynex-linea"] },
        { sourceName: "fuel", projectSlugs: ["fuel-points", "ezpz-fuel-l2"] },
        { sourceName: "teahouse", projectSlugs: ["teahouse-points-linea"] },
        {
          sourceName: "compound",
          projectSlugs: [
            "compound-points-ethereum",
            "compound-points-base",
            "compound-points-arbitrum",
            "compound-points-optimism",
          ],
        },
        {
          sourceName: "beefy",
          projectSlugs: [
            "beefy-aerodrome-slp-points",
            "beefy-aerodrome-vlp-points",
            "beefy-aura-eth-points",
            "beefy-aura-wst-arb-points",
            "beefy-auratripool-points",
            "beefy-camelot-weth-points",
            "beefy-lynex-gamma-points",
            "beefy-mendi-points-linea",
            "beefy-nile-points",
            "beefy-pendle-27jun24-points",
            "beefy-pendlesept26-magpie",
            "beefy-pendlesept26-points",
            "beefy-uniswapv3-wst-points",
            "beefy-velodrome-slp-points",
            "beefy-velodrome-wst-points",
            "beeefy-siloarb-points",
          ],
        },
        { sourceName: "venus", projectSlugs: ["venus-points-ethereum"] },
        {
          sourceName: "EIGEN Staking",
          projectSlugs: ["eigen-staking-boost", "ezeigen-ethereum"],
        },
        {
          sourceName: "REN Staking",
          projectSlugs: ["rez-staking", "ezrez-ethereum"],
        },
        { sourceName: "ra", projectSlugs: ["ra-exchange-points-frax"] },
        { sourceName: "term", projectSlugs: ["term-points"] },
        { sourceName: "radiant", projectSlugs: ["radiant-points-arbitrum"] },
        {
          sourceName: "mitosis",
          projectSlugs: [
            "mitosis-arbitrum",
            "mitosis-blast",
            "mitosis-ethereum",
            "mitosis-linea",
            "mitosis-mode",
          ],
        },
        { sourceName: "euler", projectSlugs: ["euler-ezeth-ethereum"] },
        { sourceName: "jones", projectSlugs: ["jonesdao-arbitrum"] },
        { sourceName: "form", projectSlugs: ["form-ethereum"] },
        { sourceName: "enzyme", projectSlugs: ["enzyme-ethereum"] },
        { sourceName: "primex", projectSlugs: ["primex-arbitrum"] },
        { sourceName: "swaylend", projectSlugs: ["swaylend-fuel-l2"] },
        { sourceName: "mira", projectSlugs: ["mira-fuel-l2"] },
        { sourceName: "cian", projectSlugs: ["cian-ethereum"] },
        { sourceName: a, projectSlugs: ["pzeth-points-ethereum"] },
        { sourceName: "aave", projectSlugs: ["aave-ethereum"] },
        {
          sourceName: "curve",
          projectSlugs: [
            "curve-ezpz-points-ethereum",
            "curve-pz-wst-points-ethereum",
          ],
        },
        { sourceName: "euler", projectSlugs: ["euler-pzeth-ethereum"] },
        { sourceName: "gearbox", projectSlugs: ["gearbox-pz-points-ethereum"] },
        { sourceName: "fuel", projectSlugs: ["pzeth-fuel-points"] },
        { sourceName: "pendle", projectSlugs: ["pzeth-pendle-sept"] },
        {
          sourceName: "zircuit",
          projectSlugs: [
            "pzeth-zircuit-points",
            "pzeth-zircuit-l2",
            "pzeth-staking-zircuit-l2",
          ],
        },
        { sourceName: "silo", projectSlugs: ["silo-pz-ethereum"] },
        {
          sourceName: "uniswap",
          projectSlugs: [
            "uniswapv3-wst-pz-points",
            "uniswapv3-wst-points-ethereum",
          ],
        },
        { sourceName: "zerolend", projectSlugs: ["zerolend-points-pzeth"] },
        { sourceName: "contango", projectSlugs: ["contango-pzeth-ethereum"] },
      ]
        .reduce((e, s) => {
          let t = e.find(
            (e) => e.sourceName.toLowerCase() === s.sourceName.toLowerCase()
          );
          return (
            t
              ? (t.projectSlugs = [
                  ...new Set([...t.projectSlugs, ...s.projectSlugs]),
                ])
              : e.push({
                  sourceName: s.sourceName,
                  projectSlugs: s.projectSlugs,
                }),
            e
          );
        }, [])
        .flatMap((e) => e.projectSlugs);
      var c = t(61517),
        u = t(37947),
        d = t(6359),
        m = t(52482);
      let p = [];
      function h() {
        var e, s;
        let {
            account: { address: t },
            deployment: h,
          } = (0, o.$)(),
          { data: x, isLoading: j } = r.o.points.userPoints.useQuery(
            { address: t, chainId: h.chain.id },
            { enabled: !!t }
          ),
          g = (0, i.useMemo)(() => {
            var e, s;
            return [
              ...(null !==
                (e =
                  null == x
                    ? void 0
                    : x.data.breakdown.materialView.pointsBreakdown.filter(
                        (e) => e.id !== a && e.id !== l && e.renzoPoints > 0
                      )) && void 0 !== e
                ? e
                : []),
              ...(null !==
                (s =
                  null == x
                    ? void 0
                    : x.data.breakdown.custom.pointsBreakdown.filter(
                        (e) => e.renzoPoints > 0
                      )) && void 0 !== s
                ? s
                : []),
            ];
          }, [null == x ? void 0 : x.data]),
          f = (0, i.useMemo)(() => {
            var e, s, t;
            let n =
              null !==
                (s =
                  null == x
                    ? void 0
                    : null ===
                        (e = x.data.breakdown.materialView.pointsBreakdown.find(
                          (e) => e.id === a
                        )) || void 0 === e
                    ? void 0
                    : e.renzoPoints) && void 0 !== s
                ? s
                : 0;
            return (
              (null !==
                (t =
                  null == x
                    ? void 0
                    : x.data.breakdown.subgraph.renzoPointsBreakdown
                        .restaking) && void 0 !== t
                ? t
                : 0) + n
            );
          }, [x]),
          b = (0, i.useMemo)(() => {
            var e, s, t;
            return (
              (null !==
                (s =
                  null == x
                    ? void 0
                    : x.data.breakdown.subgraph.renzoPointsBreakdown.bonus) &&
              void 0 !== s
                ? s
                : 0) +
              (null !==
                (t =
                  null == x
                    ? void 0
                    : null ===
                        (e = x.data.breakdown.materialView.pointsBreakdown.find(
                          (e) => e.id === l
                        )) || void 0 === e
                    ? void 0
                    : e.renzoPoints) && void 0 !== t
                ? t
                : 0)
            );
          }, [x]),
          w =
            (null !==
              (e =
                null == x ? void 0 : x.data.breakdown.referral.renzoPoints) &&
            void 0 !== e
              ? e
              : 0) +
            (null !==
              (s =
                null == x
                  ? void 0
                  : x.data.breakdown.subgraph.renzoPointsBreakdown.referral) &&
            void 0 !== s
              ? s
              : 0);
        return (0, n.jsxs)("div", {
          className: "w-full space-y-4 pb-12",
          id: "pointsBreakdown",
          children: [
            (0, n.jsx)("div", {
              className:
                "text-md flex flex-col justify-between gap-2 md:flex-row",
              children: (0, n.jsx)(u.Z.Qp, {
                className: "font-semibold",
                children: "Points Breakdown",
              }),
            }),
            (0, n.jsx)("div", {
              className: "w-full rounded-2xl",
              children: (0, n.jsxs)(m.iA, {
                children: [
                  (0, n.jsx)(m.xD, {
                    children: (0, n.jsxs)(m.SC, {
                      children: [
                        (0, n.jsx)(m.ss, {
                          className: "w-[50%]",
                          children: "Defi",
                        }),
                        (0, n.jsx)(m.ss, {
                          className: "w-[50%]",
                          children: "Points",
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsx)(m.RM, {
                    children: j
                      ? (0, n.jsxs)(m.SC, {
                          children: [
                            (0, n.jsx)(m.pj, {
                              children: (0, n.jsx)(d.O, {
                                className: "h-6 w-20",
                              }),
                            }),
                            (0, n.jsx)(m.pj, {
                              children: (0, n.jsx)(d.O, {
                                className: "h-6 w-20",
                              }),
                            }),
                          ],
                        })
                      : (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsxs)(m.SC, {
                              children: [
                                (0, n.jsx)(m.pj, { children: "Wallet" }),
                                (0, n.jsx)(m.pj, { children: (0, c.M0)(f) }),
                              ],
                            }),
                            (0, n.jsxs)(m.SC, {
                              children: [
                                (0, n.jsx)(m.pj, { children: "Bonus" }),
                                (0, n.jsx)(m.pj, { children: (0, c.M0)(b) }),
                              ],
                            }),
                            (0, n.jsxs)(m.SC, {
                              children: [
                                (0, n.jsx)(m.pj, { children: "Referral" }),
                                (0, n.jsx)(m.pj, { children: (0, c.M0)(w) }),
                              ],
                            }),
                            g.map((e) =>
                              (0, n.jsxs)(
                                m.SC,
                                {
                                  children: [
                                    (0, n.jsx)(m.pj, {
                                      className: "capitalize",
                                      children: e.id,
                                    }),
                                    (0, n.jsx)(m.pj, {
                                      children: (0, c.M0)(e.renzoPoints),
                                    }),
                                  ],
                                },
                                e.id
                              )
                            ),
                            p.map((e) =>
                              (0, n.jsxs)(
                                m.SC,
                                {
                                  children: [
                                    (0, n.jsx)(m.pj, { children: e }),
                                    (0, n.jsx)(m.pj, {
                                      children: "Coming soon",
                                    }),
                                  ],
                                },
                                e
                              )
                            ),
                          ],
                        }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    36196: function (e, s, t) {
      "use strict";
      t.d(s, {
        PortfolioPageProvider: function () {
          return x;
        },
        e: function () {
          return j;
        },
      });
      var n = t(57437),
        i = t(2265),
        o = t(67707),
        r = t(67750),
        a = t(22721),
        l = t(54288),
        c = t(21517),
        u = t(84355),
        d = t(70096),
        m = t(387),
        p = t(38981);
      let h = (0, i.createContext)(void 0);
      function x(e) {
        let { children: s } = e,
          t = (function () {
            let {
                evm: {
                  account: { userAddress: e, isConnected: s },
                },
                solana: {
                  account: { userAddress: t, userChainId: n, isConnected: h },
                },
              } = (0, r.$)(),
              { supportedTokens: x, toTokensWithChain: j } = (0, o.K)(),
              {
                isLoadingTokenPrices: g,
                getTokenPrice: f,
                tokenPrices: b,
              } = (0, p.W)(),
              [w, N] = (0, i.useState)(!0),
              [v, y] = (0, i.useState)(),
              S = (0, i.useMemo)(() => [...x, d.F, u.Y], [x]),
              k = (0, i.useMemo)(
                () => S.filter((e) => e.chainType === l.J.EVM),
                [S]
              ),
              z = (0, i.useMemo)(
                () => S.filter((e) => e.chainType === l.J.Solana),
                [S]
              ),
              { data: E, isLoading: C } = a.o.tokens.balances.useQuery(
                { userAddress: e, tokens: j(k) },
                { enabled: s }
              ),
              { data: P, isLoading: I } = a.o.solana.tokenBalances.useQuery(
                { userAddress: t, chainId: n },
                { enabled: h }
              ),
              T = (0, i.useMemo)(
                () => [
                  ...(null != E ? E : []),
                  ...(P
                    ? z.map((e) => {
                        var s, t;
                        let n =
                          null !==
                            (t =
                              null === (s = P[e.address]) || void 0 === s
                                ? void 0
                                : s.formatted) && void 0 !== t
                            ? t
                            : "0";
                        return { ...e, balance: n };
                      })
                    : []),
                ],
                [E, P, z]
              ),
              M = (0, i.useMemo)(() => {
                if (b) {
                  let e = x
                      .filter((e) => {
                        var s;
                        return !(null === (s = c.JP[e.chainId]) || void 0 === s
                          ? void 0
                          : s.isComingSoon);
                      })
                      .map((e) => {
                        var s;
                        let t =
                            null ===
                              (s = T.find(
                                (s) =>
                                  s.address === e.address &&
                                  s.chainId === e.chainId
                              )) || void 0 === s
                              ? void 0
                              : s.balance,
                          n = f(e.address, e.chainId);
                        return {
                          ...e,
                          price: n,
                          balance: null != t ? t : "0",
                          value: t ? Number(t) * (n || 0) : 0,
                        };
                      })
                      .sort((e, s) =>
                        (0, m.m0)(e.symbol) && !(0, m.m0)(s.symbol) ? -1 : 1
                      ),
                    s = new Map(
                      [
                        { symbol: m.Wr.ETH, chainId: c.p5.mainnet.id },
                        { symbol: m.Wr.ezETH, chainId: c.p5.mainnet.id },
                        { symbol: m.Wr.JitoSOL, chainId: n },
                        { symbol: m.Wr.ezSOL, chainId: n },
                        { symbol: m.Wr.pzETH, chainId: c.p5.mainnet.id },
                        { symbol: m.Wr.stETH, chainId: c.p5.mainnet.id },
                        { symbol: m.Wr.REN, chainId: c.p5.mainnet.id },
                        { symbol: m.Wr.EIGEN, chainId: c.p5.mainnet.id },
                      ].map((e, s) => [
                        "".concat(e.symbol, "-").concat(e.chainId),
                        s,
                      ])
                    );
                  return e
                    .sort((e, t) => {
                      let n = "".concat(e.symbol, "-").concat(e.chainId),
                        i = "".concat(t.symbol, "-").concat(t.chainId),
                        o = s.has(n) ? s.get(n) : 1 / 0,
                        r = s.has(i) ? s.get(i) : 1 / 0;
                      return o && r ? o - r : 2;
                    })
                    .filter(
                      (e) =>
                        !!s.has("".concat(e.symbol, "-").concat(e.chainId)) ||
                        !w ||
                        Number(e.balance) > 0
                    );
                }
                return [];
              }, [x, T, b, f, w, n]);
            return {
              tokens: S,
              totalPortfolioValue: (0, i.useMemo)(
                () => [...M].reduce((e, s) => e + s.value, 0),
                [M]
              ),
              portfolioTokens: M,
              isLoading: g || C || I,
              hideZeroValueTokens: w,
              setHideZeroValueTokens: N,
              selectChain: v,
              setSelectedChain: y,
            };
          })();
        return (0, n.jsx)(h.Provider, { value: t, children: s });
      }
      function j() {
        let e = (0, i.useContext)(h);
        if (void 0 === e)
          throw Error(
            "usePortfolioPage must be used within a PortfolioPageProvider"
          );
        return e;
      }
    },
    51921: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          TokenBalances: function () {
            return P;
          },
        });
      var n = t(57437),
        i = t(2265),
        o = t(87138),
        r = t(67750),
        a = t(22721),
        l = t(61731),
        c = t(9369),
        u = t(61517),
        d = t(42921),
        m = t(54288),
        p = t(54601),
        h = t(21517),
        x = t(84355),
        j = t(61736),
        g = t(70096),
        f = t(94845),
        b = t(387),
        w = t(32300),
        N = t(37947),
        v = t(68163),
        y = t(81860),
        S = t(41746),
        k = t(63197),
        z = t(36196),
        E = t(16349);
      function C(e) {
        let { className: s, children: t, disabled: i } = e;
        return (0, n.jsx)("button", {
          disabled: i,
          className: (0, E.cn)(
            "flex w-24 items-center justify-center gap-x-1 rounded-lg border border-neutral-400 px-3.5 py-2 text-xs font-semibold text-neutral-400 transition ease-in-out hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-200 dark:text-slate-200",
            s
          ),
          children: t,
        });
      }
      function P() {
        let {
            portfolioTokens: e,
            isLoading: s,
            setSelectedChain: t,
            selectChain: E,
            setHideZeroValueTokens: P,
            hideZeroValueTokens: I,
          } = (0, z.e)(),
          [T, M] = (0, i.useState)(!1),
          {
            deployment: L,
            account: { address: W },
            solana: H,
            evm: D,
          } = (0, r.$)(),
          { data: F } = a.o.eigenLayer.getDeposits.useQuery(
            { userAddress: W, chainId: x.Y.chainId },
            { enabled: null != W }
          ),
          { data: B } = a.o.eigenLayer.delegatedTo.useQuery(
            { userAddress: W, chainId: x.Y.chainId },
            { enabled: null != W }
          ),
          { data: Z } = a.o.stake.activeStake.useQuery(
            {
              userAddress: W,
              stakerAddress: L.addresses.rezStaker,
              chainId: g.F.chainId,
            },
            { enabled: null != W }
          ),
          O = (0, i.useMemo)(() => {
            if (!F || !B || B.toLocaleLowerCase() !== c.XI.toLowerCase())
              return null;
            let e = F[0].findIndex(
              (e) => e.toLowerCase() === L.addresses.eigenStrategy.toLowerCase()
            );
            if (e >= 0) {
              var s;
              let t = F[1];
              return String(
                (0, d.b)(
                  null !== (s = t[e]) && void 0 !== s ? s : 0n,
                  x.Y.decimals
                )
              );
            }
            return null;
          }, [F, B, L.addresses.eigenStrategy]),
          Q = (0, i.useMemo)(
            () => (Z ? (0, d.b)(BigInt(Z), g.F.decimals) : "0"),
            [Z]
          ),
          R = (0, i.useMemo)(
            () => Array.from(new Set(e.map((e) => h.JP[e.chainId]))),
            [e]
          ),
          A = (0, i.useMemo)(
            () =>
              e
                .filter((e) => !E || e.chainId === E.id)
                .map((e) => ({
                  ...e,
                  info: {
                    isEzETH: e.symbol === p.W.ezETH,
                    isREZ: e.symbol === p.W.REN,
                    isEigen: e.symbol === p.W.EIGEN,
                    isPzETH: e.symbol === p.W.pzETH,
                    isStETH: e.symbol === p.W.stETH,
                    isEzSOL: e.symbol === p.W.ezSOL,
                    isWstETH: e.symbol === p.W.wstETH,
                    isFlow: (0, l.QI)(e.symbol),
                  },
                })),
            [e, E]
          ),
          V = (0, i.useCallback)(
            (e) =>
              e.chainType === m.J.Solana
                ? H.account.isConnected
                : D.account.isConnected,
            [H.account.isConnected, D.account.isConnected]
          ),
          _ = (0, i.useMemo)(
            () => [
              {
                accessorKey: "name",
                header: "Asset",
                cell: (e) => {
                  let {
                    row: { original: s },
                  } = e;
                  return (0, n.jsxs)("div", {
                    className:
                      "flex flex-row items-center justify-start space-x-4",
                    children: [
                      (0, n.jsx)("div", {
                        className: "w-[40px] items-center justify-center",
                        children: (0, n.jsx)(k.T, {
                          token: s,
                          iconSize: 40,
                          chainId: s.chainId,
                          chainIconSize: 16,
                        }),
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex h-10 flex-col items-start justify-between",
                        children: [
                          (0, n.jsx)("div", {
                            className:
                              "text-md leading-none text-neutral-700 dark:text-white",
                            children: s.name,
                          }),
                          (0, n.jsx)("div", {
                            className:
                              "text-md mt-1 flex flex-row items-center space-x-3 leading-none text-neutral-400 dark:text-white dark:text-opacity-60",
                            children: (0, n.jsx)("div", {
                              className: "inline-block",
                              children: s.symbol,
                            }),
                          }),
                        ],
                      }),
                    ],
                  });
                },
                meta: { className: "w-[28%] min-w-64" },
                enableSorting: !1,
              },
              {
                accessorKey: "chainId",
                header: "Chain",
                cell: (e) => {
                  let {
                    row: { original: s },
                  } = e;
                  return (0, n.jsxs)("span", {
                    className: "flex items-center gap-x-1",
                    children: [
                      (0, n.jsx)(y.f, { chainId: s.chainId, iconSize: 20 }),
                      (0, h.qz)(h.JP[s.chainId]),
                    ],
                  });
                },
                meta: { className: "w-[12%]" },
              },
              {
                accessorKey: "price",
                header: "Price",
                cell: (e) => {
                  let {
                    row: { original: s },
                  } = e;
                  return s.price
                    ? (0, u.M)(s.price, {
                        maximumFractionDigits: s.info.isREZ ? 3 : 2,
                      })
                    : "-";
                },
                meta: { className: "w-[12%]" },
              },
              {
                accessorKey: "balance",
                header: "Quantity",
                cell: (e) => {
                  let {
                    row: { original: s },
                  } = e;
                  return (0, n.jsx)("div", {
                    className:
                      "text-md leading-none text-neutral-700 dark:text-white",
                    children: V(s) ? (0, u.ZO)(s.balance) : "-",
                  });
                },
                meta: { className: "w-[12%]" },
              },
              {
                accessorKey: "value",
                header: "Balance",
                cell: (e) => {
                  let {
                    row: { original: s },
                  } = e;
                  return (0, n.jsx)("div", {
                    className:
                      "text-md leading-none text-neutral-700 dark:text-white",
                    children: V(s) ? (0, u.M)(s.value) : "-",
                  });
                },
                meta: { className: "w-[12%]" },
              },
              {
                accessorKey: "staked",
                header: "Staked",
                cell: (e) => {
                  let {
                    row: { original: s },
                  } = e;
                  return (0, n.jsx)("div", {
                    className:
                      "text-md leading-none text-neutral-700 dark:text-white",
                    children:
                      s.info.isEigen && O
                        ? (0, u.D)(O)
                        : s.info.isREZ && Q
                        ? (0, u.D)(Q)
                        : "-",
                  });
                },
                meta: { className: "w-[12%]" },
                enableSorting: !1,
              },
              {
                id: "actions",
                cell: (e) => {
                  let {
                    row: { original: s },
                  } = e;
                  return s.info.isREZ
                    ? (0, n.jsx)("a", {
                        href: (0, j.WM)(g.F.address),
                        target: "_blank",
                        children: (0, n.jsx)(C, { children: "Get $REN" }),
                      })
                    : s.info.isEigen
                    ? (0, n.jsx)(o.default, {
                        href: (0, f.Ar)(),
                        children: (0, n.jsx)(C, { children: "Restake" }),
                      })
                    : s.info.isPzETH ||
                      s.info.isStETH ||
                      s.info.isEzETH ||
                      s.info.isEzSOL ||
                      s.info.isWstETH
                    ? (0, n.jsx)(o.default, {
                        href: (0, f.KS)(s),
                        children: (0, n.jsx)(C, { children: "Deposit" }),
                      })
                    : s.info.isFlow
                    ? (0, n.jsx)(o.default, {
                        href: (0, f.Wz)(s.symbol),
                        children: (0, n.jsx)(C, { children: "Deposit" }),
                      })
                    : (0, n.jsx)(o.default, {
                        href: (0, f.KS)(s),
                        children: (0, n.jsx)(C, {
                          children: (0, b.m0)(s.symbol) ? "Restake" : "Paused",
                        }),
                      });
                },
                meta: { className: "w-[12%]" },
                enableSorting: !1,
              },
            ],
            [O, Q, V]
          );
        return (0, n.jsxs)("div", {
          className: "w-full space-y-4",
          children: [
            (0, n.jsxs)("div", {
              className:
                "text-md flex flex-col justify-between gap-2 md:flex-row",
              children: [
                (0, n.jsx)(N.Z.Qp, {
                  className: "font-semibold",
                  children: "My Portfolio",
                }),
                (0, n.jsxs)("div", {
                  className: "flex flex-row items-center space-x-2",
                  children: [
                    (0, n.jsx)(N.Z.Dx, { children: "Filter by:" }),
                    (0, n.jsx)(v.n, {
                      isOpen: T,
                      setIsOpen: M,
                      onSelect: t,
                      selectedChain: E,
                      chains: R,
                      triggerClassName: "text-sm",
                      contentClassName: "text-sm",
                    }),
                    (0, n.jsx)("span", { children: "|" }),
                    (0, n.jsxs)(N.Z.uT, {
                      className: "flex items-center gap-x-1",
                      children: [
                        (0, n.jsx)(w.X, {
                          id: "hide-zero-balances",
                          checked: I,
                          onCheckedChange: () => P(!I),
                        }),
                        (0, n.jsx)("label", {
                          htmlFor: "hide-zero-balances",
                          className: "cursor-pointer select-none",
                          children: "Hide Zero Balances",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "w-full rounded-2xl",
              children: (0, n.jsx)(S.w, { data: A, columns: _, isLoading: s }),
            }),
          ],
        });
      }
    },
    19859: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return i;
        },
      });
      var n = t(57437);
      function i(e) {
        let { width: s = 50 } = e;
        return (0, n.jsxs)("svg", {
          width: s,
          height: s,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, n.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "11.4286",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.14286",
            }),
            (0, n.jsx)("path", {
              d: "M12 11.4287V16.5716",
              stroke: "currentColor",
              strokeWidth: "1.14286",
              strokeLinecap: "round",
            }),
            (0, n.jsx)("path", {
              d: "M12 7.42871L12 8.57157",
              stroke: "currentColor",
              strokeWidth: "1.14286",
              strokeLinecap: "round",
            }),
          ],
        });
      }
    },
    24026: function (e, s, t) {
      "use strict";
      t.d(s, {
        h: function () {
          return i;
        },
      });
      var n = t(57437);
      function i(e) {
        return (0, n.jsxs)("svg", {
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
            (0, n.jsx)("path", { d: "M15 3h6v6" }),
            (0, n.jsx)("path", { d: "M10 14 21 3" }),
            (0, n.jsx)("path", {
              d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            }),
          ],
        });
      }
    },
    63197: function (e, s, t) {
      "use strict";
      t.d(s, {
        T: function () {
          return a;
        },
      });
      var n = t(57437),
        i = t(66648),
        o = t(16349),
        r = t(81860);
      function a(e) {
        let {
          token: s,
          iconSize: t = 24,
          chainIconSize: a = 12,
          priority: l = !0,
          className: c,
          iconClassName: u,
          chainId: d,
        } = e;
        return (0, n.jsxs)("span", {
          className: (0, o.cn)(
            "relative flex items-center justify-center overflow-hidden",
            c
          ),
          style: { width: "".concat(t, "px"), height: "".concat(t, "px") },
          children: [
            s.icon.auto
              ? (0, n.jsx)(i.default, {
                  src: s.icon.auto,
                  width: t,
                  height: t,
                  alt: "".concat(s.name, " icon"),
                  priority: l,
                  className: (0, o.cn)("size-full rounded-full", u),
                })
              : s.icon.dark && s.icon.light
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(i.default, {
                      src: s.icon.light,
                      alt: "".concat(s.name, " icon"),
                      height: t,
                      width: t,
                      priority: l,
                      className: (0, o.cn)(
                        "block size-full rounded-full dark:hidden",
                        u
                      ),
                    }),
                    (0, n.jsx)(i.default, {
                      src: s.icon.dark,
                      alt: "".concat(s.name, " icon"),
                      height: t,
                      width: t,
                      priority: l,
                      className: (0, o.cn)(
                        "hidden size-full rounded-full dark:block",
                        u
                      ),
                    }),
                  ],
                })
              : null,
            d
              ? (0, n.jsx)(r.f, {
                  chainId: d,
                  iconSize: a,
                  className:
                    "border-background absolute bottom-0 right-0 rounded-full border",
                })
              : null,
          ],
        });
      }
    },
    61736: function (e, s, t) {
      "use strict";
      function n(e) {
        let s =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "ethereum";
        return "https://app.uniswap.org/explore/tokens/"
          .concat(s, "/")
          .concat(e);
      }
      function i(e) {
        return "https://renzoezeth.enzyme.community/vault/".concat(e);
      }
      function o() {
        return "https://app.aave.com/markets/?marketName=proto_lido_v3";
      }
      function r() {
        return "https://yieldlayer.cian.app/vaults/0x3D086B688D7c0362BE4f9600d626f622792c4a20?chainId=1";
      }
      t.d(s, {
        Gu: function () {
          return r;
        },
        WM: function () {
          return n;
        },
        b1: function () {
          return o;
        },
        sF: function () {
          return i;
        },
      });
    },
    13962: function (e, s, t) {
      "use strict";
      t.d(s, {
        t: function () {
          return i;
        },
      });
      var n = t(2265);
      function i() {
        let [e, s] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            s(!0);
          }, []),
          e
        );
      }
    },
  },
  function (e) {
    e.O(
      0,
      [
        3814, 2420, 5088, 2306, 1391, 2174, 4630, 1581, 5737, 1294, 1485, 7138,
        3514, 7500, 5344, 6141, 5305, 6959, 6406, 2971, 7023, 1744,
      ],
      function () {
        return e((e.s = 82662));
      }
    ),
      (_N_E = e.O());
  },
]);
