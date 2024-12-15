(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [651],
  {
    3792: function (A, e, t) {
      Promise.resolve().then(t.t.bind(t, 5878, 23)),
        Promise.resolve().then(t.bind(t, 5704)),
        Promise.resolve().then(t.bind(t, 9494)),
        Promise.resolve().then(t.bind(t, 4381)),
        Promise.resolve().then(t.bind(t, 516)),
        Promise.resolve().then(t.bind(t, 6537)),
        Promise.resolve().then(t.bind(t, 454)),
        Promise.resolve().then(t.bind(t, 4975)),
        Promise.resolve().then(t.bind(t, 5451)),
        Promise.resolve().then(t.bind(t, 9272)),
        Promise.resolve().then(t.bind(t, 1502)),
        Promise.resolve().then(t.bind(t, 2123)),
        Promise.resolve().then(t.bind(t, 281)),
        Promise.resolve().then(t.bind(t, 9431)),
        Promise.resolve().then(t.bind(t, 5301)),
        Promise.resolve().then(t.bind(t, 3698)),
        Promise.resolve().then(t.bind(t, 8154)),
        Promise.resolve().then(t.bind(t, 1540));
    },
    5704: function (A, e, t) {
      "use strict";
      t.d(e, {
        BlogPost: function () {
          return l;
        },
      });
      var i = t(7437),
        a = { src: "/_next/static/media/blog-default.7530f524.png" },
        n = t(2265),
        s = t(3290);
      function l(A) {
        let { post: e } = A,
          { content: t, imageId: l } = (function (A) {
            let e = A.match(/<img src="([^"]+)"[^>]*>/),
              t = (function (A) {
                let e = A.match(/\/([a-zA-Z0-9_]+)\.([a-zA-Z]+)(\?|$)/);
                return e ? e[1] : null;
              })(e ? e[1] : ""),
              i = A.match(/<blockquote>\s*<p>([^<]+)<\/p>\s*<\/blockquote>/);
            return { imageId: t, content: i ? i[1] : null };
          })(e.content || ""),
          r = l ? "/blog/".concat(l, ".png") : "",
          g =
            (function (A) {
              let [e, t] = (0, n.useState)(null);
              return (
                (0, n.useEffect)(() => {
                  if (!A) {
                    t(!1);
                    return;
                  }
                  let e = new Image();
                  return (
                    (e.onload = () => t(!0)),
                    (e.onerror = () => t(!1)),
                    (e.src = A),
                    () => {
                      (e.onload = null), (e.onerror = null);
                    }
                  );
                }, [A]),
                e
              );
            })(r) && r
              ? r
              : a.src;
        return (0, i.jsx)("div", {
          className:
            "overflow-hidden rounded-[16px] border border-[#C3C3D5] dark:border-[#2C2C44]",
          children: (0, i.jsxs)("a", {
            href: e.link,
            target: "_blank",
            children: [
              (0, i.jsx)("div", {
                className: "relative h-[240px] overflow-hidden",
                children: (0, i.jsx)("img", {
                  src: g,
                  alt: e.title,
                  className:
                    "absolute inset-0 size-full rounded-t-[16px] object-cover",
                }),
              }),
              (0, i.jsxs)("div", {
                className:
                  "flex flex-col gap-y-4 px-4 pb-8 pt-4 text-left lg:h-[270px]",
                children: [
                  (0, i.jsx)(s.Z.H5, {
                    className:
                      "line-clamp-2 font-bold text-[#040512] dark:text-[#E6E6F3]",
                    children: e.title,
                  }),
                  (0, i.jsx)(s.Z.u, {
                    className:
                      "line-clamp-4 text-[18px] text-[#5F6082] dark:text-[#8D8EAF]",
                    children: t,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    9494: function (A, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          InvestorsSection: function () {
            return o;
          },
        });
      var i = t(7437);
      function o() {
        return (0, i.jsx)(i.Fragment, {});
      }
    },
    4381: function (A, e, t) {
      "use strict";
      t.d(e, {
        RestakeItems: function () {
          return o;
        },
      });
      var i = t(7437),
        a = t(2265),
        n = t(1201),
        s = t(3134),
        l = t(9089);
      let r = a.forwardRef((A, e) => {
        let { className: t, ...a } = A;
        return (0, i.jsx)(s.fC, {
          ref: e,
          className: (0, n.cn)(
            "bg-white-a70 dark:bg-black-a30 w-full rounded-3xl",
            t
          ),
          ...a,
        });
      });
      r.displayName = "Accordion";
      let g = a.forwardRef((A, e) => {
        let { className: t, ...a } = A;
        return (0, i.jsx)(s.ck, {
          ref: e,
          className: (0, n.cn)("w-full", t),
          ...a,
        });
      });
      g.displayName = "AccordionItem";
      let c = a.forwardRef((A, e) => {
        let {
          className: t,
          subText: a,
          subTextProps: r,
          children: g,
          ...c
        } = A;
        return (0, i.jsx)(s.h4, {
          className: "flex",
          children: (0, i.jsx)(s.xz, {
            ref: e,
            className: (0, n.cn)(
              "flex flex-1 flex-col items-start gap-y-2 rounded-3xl p-4 text-[11px] transition-all data-[state=open]:rounded-b-none [&[data-state=open]>div>div>div>svg]:rotate-90",
              t
            ),
            ...c,
            children: (0, i.jsxs)("div", {
              className: "flex flex-col justify-start",
              children: [
                (0, i.jsxs)("div", {
                  className: "relative flex flex-row items-center gap-4",
                  children: [
                    (0, i.jsx)("div", {
                      className: "absolute",
                      children: (0, i.jsx)(l.Dli, { size: 14 }),
                    }),
                    (0, i.jsx)("div", {
                      className: "pl-8 text-left",
                      children: g,
                    }),
                  ],
                }),
                a
                  ? (0, i.jsx)("div", {
                      className: (0, n.cn)(
                        "pl-8 pt-2 text-left text-[18px]",
                        r
                      ),
                      children: a,
                    })
                  : null,
              ],
            }),
          }),
        });
      });
      c.displayName = s.xz.displayName;
      let d = a.forwardRef((A, e) => {
        let { className: t, children: a, ...l } = A;
        return (0, i.jsx)(s.VY, {
          ref: e,
          className:
            "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down bg-white-a70 dark:bg-black-a30 w-full overflow-hidden rounded-b-3xl px-16 text-[11px]",
          ...l,
          children: (0, i.jsx)("div", {
            className: (0, n.cn)("py-3", t),
            children: a,
          }),
        });
      });
      function o() {
        let [A, e] = (0, a.useState)(""),
          t = [
            {
              label: "Why Restake with Reno?",
              description: "Auto rebalance and compound your restaking rewards",
              content: (0, i.jsxs)("ul", {
                className: "list-disc text-left text-[18px]",
                children: [
                  (0, i.jsx)("li", {
                    children:
                      "Security first with open source contracts, bug bounties, recurring audits and on-chain monitoring",
                  }),
                  (0, i.jsx)("li", {
                    children: "The best risk-adjusted restaking rewards",
                  }),
                  (0, i.jsx)("li", {
                    children:
                      "DeFi integrations providing deep liquidity and lending deployments across multiple chains",
                  }),
                ],
              }),
            },
            {
              label: "Auto-Compounding Rewards",
              description: "",
              content: (0, i.jsxs)("ul", {
                className: "list-disc text-left text-[18px]",
                children: [
                  (0, i.jsx)("li", {
                    children:
                      "Maximize rewards with the power of auto-compounding",
                  }),
                  (0, i.jsx)("li", {
                    children: "Rewards follow you wherever your asset is used",
                  }),
                  (0, i.jsx)("li", {
                    children: "Never claim rewards, saving gas and time",
                  }),
                ],
              }),
            },
            {
              label: "Automated Restaking Strategies",
              description: "",
              content: (0, i.jsxs)("ul", {
                className: "list-disc text-left text-[18px]",
                children: [
                  (0, i.jsx)("li", {
                    children:
                      "Optimize infrastructure setup for the best risk adjusted rewards",
                  }),
                  (0, i.jsx)("li", {
                    children: "Selecting and managing node operators",
                  }),
                  (0, i.jsx)("li", {
                    children: "Monitoring and managing AVS / NCN selection",
                  }),
                ],
              }),
            },
          ];
        return (0, i.jsx)("div", {
          className: "translate-0 lg:max-w-[600px] lg:translate-x-3/4",
          children: (0, i.jsx)("div", {
            className: "font-poppins flex flex-col gap-6",
            children: t.map((t, a) =>
              (0, i.jsx)(
                r,
                {
                  type: "single",
                  collapsible: !0,
                  value: A,
                  onValueChange: (A) => e(A),
                  children: (0, i.jsxs)(g, {
                    value: t.label,
                    children: [
                      (0, i.jsx)(c, {
                        subText: t.description,
                        subTextProps: "text-[#5F6082] dark:text-[#E6E6F3]",
                        children: (0, i.jsx)("div", {
                          className:
                            "font-poppins text-[24px] font-bold tracking-[-0.24px] text-[#000000] dark:text-[#ffffff]",
                          children: t.label,
                        }),
                      }),
                      (0, i.jsx)(d, {
                        className: "text-[#5F6082] dark:text-[#E6E6F3]",
                        children: t.content,
                      }),
                    ],
                  }),
                },
                a
              )
            ),
          }),
        });
      }
      d.displayName = s.VY.displayName;
    },
    516: function (A, e, t) {
      "use strict";
      t.d(e, {
        SecureItems: function () {
          return d;
        },
      });
      var i = t(7437);
      function d() {
        return (0, i.jsx)(i.Fragment, {});
      }
    },
    8154: function (A, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          RestakeButton: function () {
            return l;
          },
        });
      var i = t(7437),
        a = t(2174),
        n = t(1201),
        s = t(4454);
      function l(A) {
        let { children: e, className: t, link: l, onClick: r, ...g } = A;
        return (0, i.jsx)("button", {
          className: (0, n.cn)(
            "font-open-sans inline-block rounded-lg bg-[#ACE730] px-6 py-3.5 text-[18px] font-bold leading-[160%] text-[#040512]",
            t
          ),
          onClick: function (A) {
            (0, s.j)("Restake");
            let e = l || a.N.dapp.baseURL;
            window.open(e, "_blank"), r && r(A);
          },
          ...g,
          children: e,
        });
      }
    },
    1540: function (A, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          Tooltip: function () {
            return r;
          },
          TooltipProvider: function () {
            return l;
          },
        });
      var i = t(7437),
        a = t(2265),
        n = t(1201),
        s = t(9756);
      let l = s.zt;
      function r(A) {
        let {
            children: e,
            content: t,
            sideOffset: l = 8,
            side: r = "top",
            contentClassName: g,
            triggerClassName: c,
            open: d,
            defaultOpen: o,
            ...h
          } = A,
          [B, m] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            void 0 !== d && m(d);
          }, [d]),
          (0, i.jsxs)(s.fC, {
            open: B,
            onOpenChange: m,
            defaultOpen: o,
            children: [
              (0, i.jsx)(s.xz, {
                className: c,
                onClick: () => {
                  m((A) => !A);
                },
                children: e,
              }),
              (0, i.jsx)(s.h_, {
                children: (0, i.jsxs)(s.VY, {
                  sideOffset: l,
                  side: r,
                  align: "center",
                  className: (0, n.cn)(
                    "animate-in fade-in-50",
                    "data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 z-50 overflow-hidden shadow-xl",
                    "bg-primaryBackground text-tertiary max-w-80 rounded-lg px-2.5 py-1.5 text-xs",
                    g
                  ),
                  ...h,
                  children: [
                    t,
                    (0, i.jsx)(s.Eh, { className: "fill-primaryBackground" }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
    3290: function (A, e, t) {
      "use strict";
      t.d(e, {
        Z: function () {
          return i;
        },
      });
      var i = {};
      t.r(i),
        t.d(i, {
          u: function () {
            return r;
          },
          H2: function () {
            return s;
          },
          H5: function () {
            return l;
          },
        });
      var a = t(7437),
        n = t(1201);
      function s(A) {
        let { children: e, className: t, ...i } = A;
        return (0, a.jsx)("h2", {
          className: (0, n.cn)(
            "text-[36px] font-bold leading-[120%] lg:text-[64px]",
            t
          ),
          ...i,
          children: e,
        });
      }
      function l(A) {
        let { children: e, className: t, ...i } = A;
        return (0, a.jsx)("h5", {
          className: (0, n.cn)(
            "text-[20px] font-bold leading-[140%] lg:text-[24px]",
            t
          ),
          ...i,
          children: e,
        });
      }
      function r(A) {
        let { children: e, className: t, ...i } = A;
        return (0, a.jsx)("p", {
          className: (0, n.cn)("font-open-sans text-sm leading-[160%]", t),
          ...i,
          children: e,
        });
      }
    },
    2174: function (A, e, t) {
      "use strict";
      t.d(e, {
        N: function () {
          return i;
        },
      });
      let i = {
        dapp: {
          baseURL: "https://app.renzoprotocol.com",
          restake: "https://app.renzoprotocol.com/restake",
          ezSOL: "https://app.renzoprotocol.com/ezsol",
          ezEIGEN: "https://app.renzoprotocol.com/restaking/ezeigen",
          restaking: "https://app.renzoprotocol.com/restaking",
          defi: "https://app.renzoprotocol.com/defi",
          stake: "https://app.renzoprotocol.com/stake",
          ezflow: "https://app.renzoprotocol.com/ezflow",
          pzETH: "https://app.renzoprotocol.com/pzeth",
          operator: "https://app.renzoprotocol.com/operator",
        },
        restaking: {
          eigenlayer: "https://www.eigenlayer.xyz/",
          symbiotic: "https://app.mellow.finance/restake/ethereum-pzeth",
        },
        governance: {
          discourse: "https://gov.renzoprotocol.com/",
          voting: "https://snapshot.org/#/renzogovernance.eth/",
          votingPower: "https://app.renzoprotocol.com/governance",
        },
        developers: {
          github: "https://github.com/Reno-Protocol",
          audits:
            "https://github.com/Reno-Protocol/contracts-public/tree/master/Audit",
          docs: "https://docs.renzoprotocol.com",
          bugBounty:
            "https://immunefi.com/bug-bounty/renzoprotocol/information/",
          investorPortal: "https://rezvesting.renzoprotocol.com/",
        },
        analytics: {
          u1: "https://u--1.com/lrt/renzo",
          dune: "https://dune.com/renzoprotocol/renzo",
          defillama: "https://defillama.com/protocol/renzo",
        },
        auditors: {
          halborn: "https://www.halborn.com/",
          sigma: "https://sigmaprime.io/",
          code4rena: "https://code4rena.com/",
        },
        socials: {
          discord: "https://discord.gg/renzoprotocol",
          mirror: "https://mirror.xyz/renzoprotocol.eth",
          medium: "https://medium.com/renzo-protocol",
          telegram: "https://t.me",
          x: "https://x.com",
          youtube: "https://www.youtube.com/channel/UCSjRN0aCpWB7ewCoVrsGEKg",
        },
        legal: {
          tos: "https://docs.renzoprotocol.com/docs/legal/terms-of-service",
          privacy: "https://docs.renzoprotocol.com/docs/legal/privacy-policy",
          disclaimer: "https://docs.renzoprotocol.com/docs/legal/disclaimer",
        },
        brand: {
          figmaBranding:
            "https://www.figma.com/slides/56NDz7Bw1QG1pPHkyllqqH/RenzoBranding?node-id=1-48&t=IDofrFaEcprVPNXb-1",
        },
      };
    },
    1201: function (A, e, t) {
      "use strict";
      t.d(e, {
        cn: function () {
          return n;
        },
      });
      var i = t(1994),
        a = t(3335);
      function n() {
        for (var A = arguments.length, e = Array(A), t = 0; t < A; t++)
          e[t] = arguments[t];
        return (0, a.m6)((0, i.W)(...e));
      }
    },
    6537: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/eigenlayer.8fc468eb.svg",
          height: 45,
          width: 45,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    454: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/eth.bfa96cd6.svg",
          height: 85,
          width: 86,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    4975: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/jito.e985b3f0.png",
          height: 498,
          width: 498,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEXBb/9QLm5XM3hVMXRMaXHJdP9bNHyuZPLEcP/LdP+sY+igXdeNUbnFcf+NUb5YM3pdNoBdNn+ZWctTFFi7AAAAC3RSTlPz+v76AK3+LrLr+RuS1agAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAA7SURBVHicNctRDoAwCMDQqmOwAGN6/8OamfjdV5oamDZ0xFkxFJuH+xUC9WT6DZRn+gL50pSNe9/4319I8AIB0rRmqwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    5451: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/solana.e02e6d2f.svg",
          height: 85,
          width: 86,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    9272: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/symbiotic.9381ef7e.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    1502: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/lighthouse-dark.bcea89e8.svg",
          height: 756,
          width: 1193,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    2123: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/lighthouse-light.c4c5faef.svg",
          height: 756,
          width: 1193,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    281: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/lighthouse-mobile-dark.a50754b9.png",
          height: 844,
          width: 775,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAJ1BMVEULGSAFBhIMMEYEBxIJHjADBBAEBBIGBhUCBRICBREECBYLESkIRV89V698AAAADHRSTlP9cP7S/XZ2dl9a//6Uvvn4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nD2IuREAIAzDHBM+h/3n5UyBGp2E1czGEADFd1cp3UUSgVk89lDyfZm4IaEBI4aCsHYAAAAASUVORK5CYII=",
          blurWidth: 7,
          blurHeight: 8,
        });
    },
    9431: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/lighthouse-mobile-light.c5d7130a.png",
          height: 824,
          width: 620,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAG1BMVEXm5vLj5e7h59Tp6/np9f7k5+Xj8fbj+Obf+N5dOKBQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALElEQVR4nCXEwQ3AMAwDsZNkOd1/4gIJHwRJAmoXsG2hnq+C7C4kMxPI/fkBDDAAb3T1q8MAAAAASUVORK5CYII=",
          blurWidth: 6,
          blurHeight: 8,
        });
    },
    5301: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/securing-dark.54378405.svg",
          height: 906,
          width: 895,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    3698: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/securing-light.ef7c44ca.svg",
          height: 914,
          width: 903,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
  },
  function (A) {
    A.O(0, [699, 114, 981, 971, 117, 744], function () {
      return A((A.s = 3792));
    }),
      (_N_E = A.O());
  },
]);
