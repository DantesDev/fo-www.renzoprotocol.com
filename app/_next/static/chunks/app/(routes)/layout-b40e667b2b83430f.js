(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7717],
  {
    46601: function () {},
    85007: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 25043));
    },
    25043: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return ee;
          },
        });
      var i = n(57437),
        a = n(2265),
        s = n(44839);
      function r(e) {
        return (0, i.jsxs)("svg", {
          width: "32",
          height: "23",
          viewBox: "0 0 32 23",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, i.jsx)("rect", {
              y: "0.144226",
              width: "32",
              height: "2",
              rx: "1",
              fill: "currentColor",
            }),
            (0, i.jsx)("rect", {
              y: "10.1442",
              width: "32",
              height: "2",
              rx: "1",
              fill: "currentColor",
            }),
            (0, i.jsx)("rect", {
              y: "20.1442",
              width: "32",
              height: "2",
              rx: "1",
              fill: "currentColor",
            }),
          ],
        });
      }
      var o = n(88190),
        d = n(67750),
        c = n(28782),
        l = n(73478),
        u = n(13962),
        h = n(6359),
        f = n(56967);
      let p = (0, a.forwardRef)((e, t) => {
        let { showArrowIcon: n = !0, children: a, ...s } = e;
        return (0, i.jsxs)("button", {
          ref: t,
          className:
            "bg-colors-black-a50 flex h-9 items-center justify-center gap-x-1 rounded-[8px] border border-transparent px-4 text-sm font-medium text-white shadow-md dark:border-neutral-600 [&[data-state=open]>svg]:rotate-180",
          ...s,
          children: [
            a,
            n
              ? (0, i.jsx)(f.v, {
                  className:
                    "size-3 shrink-0 transition-transform duration-300 data-[state=open]:rotate-180",
                })
              : null,
          ],
        });
      });
      p.displayName = "WalletButton";
      var C = n(94781),
        x = n(54288),
        A = n(21517),
        b = n(64113),
        m = n(16491),
        g = n(54713);
      function E(e) {
        let { address: t } = e,
          { data: n } = (0, g.useEnsName)({
            address: t,
            chainId: m.R.id,
            query: { enabled: (0, b.U)(t) },
          }),
          i = (0, a.useMemo)(() => (t ? (0, C.Xn)(t) : ""), [t]),
          s = (0, a.useMemo)(() => (n ? (0, C.gb)(n) : ""), [n]),
          r = (0, a.useMemo)(
            () => (t ? (n ? (0, C.gb)(n) : (0, C.Xn)(t)) : ""),
            [t, n]
          );
        return {
          ensName: n,
          shortenedAddress: i,
          shortenedEnsName: s,
          shortenedEnsNameOrAddress: r,
        };
      }
      var v = n(45875),
        w = n(81860),
        k = n(55158);
      function L(e) {
        return (0, i.jsxs)("svg", {
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
            (0, i.jsx)("rect", {
              width: "14",
              height: "14",
              x: "8",
              y: "8",
              rx: "2",
              ry: "2",
            }),
            (0, i.jsx)("path", {
              d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            }),
          ],
        });
      }
      function j(e) {
        return (0, i.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          ...e,
          children: [
            (0, i.jsx)("path", {
              d: "M16.2305 17.9228V21.3074C16.2305 21.7562 16.0522 22.1866 15.7349 22.504C15.4175 22.8214 14.9871 22.9997 14.5383 22.9997H2.69228C2.24346 22.9997 1.81302 22.8214 1.49566 22.504C1.17829 22.1866 1 21.7562 1 21.3074V2.69228C1 2.24346 1.17829 1.81302 1.49566 1.49566C1.81302 1.17829 2.24346 1 2.69228 1H14.5383C14.9871 1 15.4175 1.17829 15.7349 1.49566C16.0522 1.81302 16.2305 2.24346 16.2305 2.69228V6.07685",
              stroke: "currentColor",
              strokeWidth: "1.69228",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, i.jsx)("path", {
              d: "M11.1523 11.998H22.9983",
              stroke: "currentColor",
              strokeWidth: "1.69228",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, i.jsx)("path", {
              d: "M19.6152 8.61523L22.9998 11.9998L19.6152 15.3844",
              stroke: "currentColor",
              strokeWidth: "1.69228",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          ],
        });
      }
      function y(e) {
        return (0, i.jsx)("svg", {
          width: "24px",
          height: "24px",
          viewBox: "0 0 24 24",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, i.jsx)("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd",
            children: (0, i.jsx)("g", {
              fill: "currentColor",
              fillRule: "nonzero",
              children: (0, i.jsx)("path", {
                d: "M17.5,11.75 C20.1233526,11.75 22.25,13.8766474 22.25,16.5 C22.25,19.1233526 20.1233526,21.25 17.5,21.25 C15.4019872,21.25 13.6216629,19.8898135 12.9927596,18.0031729 L11.0072404,18.0031729 C10.3783371,19.8898135 8.59801283,21.25 6.5,21.25 C3.87664744,21.25 1.75,19.1233526 1.75,16.5 C1.75,13.8766474 3.87664744,11.75 6.5,11.75 C8.9545808,11.75 10.9743111,13.6118164 11.224028,16.0002862 L12.775972,16.0002862 C13.0256889,13.6118164 15.0454192,11.75 17.5,11.75 Z M6.5,13.75 C4.98121694,13.75 3.75,14.9812169 3.75,16.5 C3.75,18.0187831 4.98121694,19.25 6.5,19.25 C8.01878306,19.25 9.25,18.0187831 9.25,16.5 C9.25,14.9812169 8.01878306,13.75 6.5,13.75 Z M17.5,13.75 C15.9812169,13.75 14.75,14.9812169 14.75,16.5 C14.75,18.0187831 15.9812169,19.25 17.5,19.25 C19.0187831,19.25 20.25,18.0187831 20.25,16.5 C20.25,14.9812169 19.0187831,13.75 17.5,13.75 Z M15.5119387,3 C16.7263613,3 17.7969992,3.79658742 18.145961,4.95979331 L19.1520701,8.31093387 C19.944619,8.44284508 20.7202794,8.59805108 21.4790393,8.77658283 C22.0166428,8.90307776 22.3499121,9.44143588 22.2234172,9.9790393 C22.0969222,10.5166428 21.5585641,10.8499121 21.0209607,10.7234172 C18.2654221,10.0750551 15.258662,9.75 12,9.75 C8.74133802,9.75 5.73457794,10.0750551 2.97903933,10.7234172 C2.44143588,10.8499121 1.90307776,10.5166428 1.77658283,9.9790393 C1.6500879,9.44143588 1.98335721,8.90307776 2.52096067,8.77658283 C3.27940206,8.59812603 4.05472975,8.4429754 4.8469317,8.31110002 L5.85403902,4.95979331 C6.20300079,3.79658742 7.2736387,3 8.4880613,3 L15.5119387,3 Z",
              }),
            }),
          }),
        });
      }
      var M = n(3174),
        B = n(37947);
      function z(e) {
        let {
            chainType: t,
            address: n,
            shortenAddress: a,
            isImpersonated: s,
            onDisconnect: r,
          } = e,
          { copy: o, hasCopied: d } = (0, M.Y)(),
          c = t === x.J.Solana;
        return (0, i.jsxs)("div", {
          className: "flex flex-col gap-y-1 p-1",
          children: [
            (0, i.jsxs)(B.Z.uT, {
              className: "flex items-center gap-x-1",
              children: [
                (0, i.jsx)(w.f, { chainId: c ? A.Ui : A.mh, iconSize: 18 }),
                c ? "Solana" : "EVM",
              ],
            }),
            (0, i.jsxs)("div", {
              className:
                "flex items-center justify-between rounded-xl border p-2 text-sm dark:border-white/10",
              children: [
                (0, i.jsxs)("div", {
                  className: "flex items-center gap-x-1",
                  children: [
                    s ? (0, i.jsx)(y, { className: "size-4 shrink-0" }) : null,
                    a,
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "flex items-center gap-x-2",
                  children: [
                    (0, i.jsx)("button", {
                      onClick: () => o(n),
                      children: d
                        ? (0, i.jsx)(k.n, { className: "size-4" })
                        : (0, i.jsx)(L, { className: "size-4" }),
                    }),
                    (0, i.jsx)("button", {
                      onClick: r,
                      children: (0, i.jsx)(j, { className: "size-4" }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function T(e) {
        let {
            evmAddress: t,
            solAddress: n,
            onEVMDisconnect: s,
            onSolanaDisconnect: r,
          } = e,
          { impersonatedEVMAddress: o, impersonatedSolAddress: c } = (0, d.$)(),
          { shortenedEnsNameOrAddress: l } = E({ address: t }),
          u = (0, C.Xn)(n),
          [h, f] = (0, a.useState)(!1);
        return (0, i.jsxs)(v.J2, {
          open: h,
          onOpenChange: f,
          children: [
            (0, i.jsx)(v.xo, {
              asChild: !0,
              children: (0, i.jsxs)(p, {
                children: [
                  (0, i.jsx)(w.f, { chainId: A.mh, iconSize: 18 }),
                  (0, i.jsx)(w.f, { chainId: A.Ui, iconSize: 18 }),
                  "2 Accounts",
                ],
              }),
            }),
            (0, i.jsx)(v.yk, {
              className: "flex w-[200px] flex-col p-1.5",
              align: "end",
              children: (0, i.jsxs)("div", {
                className: "flex flex-col gap-y-2",
                children: [
                  (0, i.jsx)(z, {
                    chainType: x.J.EVM,
                    address: t,
                    shortenAddress: l,
                    isImpersonated: !!o,
                    onDisconnect: s,
                  }),
                  (0, i.jsx)(z, {
                    chainType: x.J.Solana,
                    address: n,
                    shortenAddress: u,
                    isImpersonated: !!c,
                    onDisconnect: r,
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function D(e) {
        let { onClick: t, children: n } = e;
        return (0, i.jsx)("button", {
          className:
            "flex items-center gap-x-2 whitespace-nowrap rounded-xl p-3 hover:bg-neutral-300/10 dark:hover:bg-neutral-400/20",
          onClick: t,
          children: n,
        });
      }
      function S(e) {
        let { chainType: t, onConnect: n } = e,
          a = t === x.J.Solana;
        return (0, i.jsxs)(D, {
          onClick: n,
          children: [
            (0, i.jsx)(w.f, { chainId: a ? A.Ui : A.mh, iconSize: 18 }),
            a ? "Solana" : "EVM",
            " Wallet",
          ],
        });
      }
      function H(e) {
        let {
            address: t,
            evmAddress: n,
            solAddress: s,
            onEVMDisconnect: r,
            onSolanaDisconnect: o,
            onEVMConnect: c,
            onSolanaConnect: l,
          } = e,
          u = (0, C.BV)(t),
          { impersonatedEVMAddress: h, impersonatedSolAddress: f } = (0, d.$)(),
          { shortenedEnsNameOrAddress: b } = E({ address: t }),
          [m, g] = (0, a.useState)(!1);
        return (0, i.jsxs)(v.J2, {
          open: m,
          onOpenChange: g,
          children: [
            (0, i.jsx)(v.xo, {
              asChild: !0,
              children: (0, i.jsxs)(p, {
                children: [
                  h || f
                    ? (0, i.jsx)(y, { className: "size-4 shrink-0" })
                    : null,
                  (0, i.jsx)(w.f, { chainId: u ? A.Ui : A.mh, iconSize: 18 }),
                  b,
                ],
              }),
            }),
            (0, i.jsx)(v.yk, {
              className: "flex w-[200px] flex-col p-1.5",
              align: "end",
              children: u
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(z, {
                        chainType: x.J.Solana,
                        address: s,
                        shortenAddress: b,
                        isImpersonated: !!h,
                        onDisconnect: o,
                      }),
                      (0, i.jsx)(S, { chainType: x.J.EVM, onConnect: c }),
                    ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(z, {
                        chainType: x.J.EVM,
                        address: n,
                        shortenAddress: b,
                        isImpersonated: !!h,
                        onDisconnect: r,
                      }),
                      (0, i.jsx)(S, { chainType: x.J.Solana, onConnect: l }),
                    ],
                  }),
            }),
          ],
        });
      }
      function N(e) {
        let { onEVMConnect: t, onSolanaConnect: n } = e,
          [s, r] = (0, a.useState)(!1);
        return (0, i.jsxs)(v.J2, {
          open: s,
          onOpenChange: r,
          children: [
            (0, i.jsx)(v.xo, {
              asChild: !0,
              children: (0, i.jsx)(p, { children: "Connect Wallet" }),
            }),
            (0, i.jsxs)(v.yk, {
              className: "flex w-[180px] flex-col p-1.5",
              align: "end",
              children: [
                (0, i.jsx)(S, { chainType: x.J.EVM, onConnect: t }),
                (0, i.jsx)(S, { chainType: x.J.Solana, onConnect: n }),
              ],
            }),
          ],
        });
      }
      function W() {
        let {
            evm: e,
            solana: t,
            setImpersonatedEVMAddress: n,
            setImpersonatedSolAddress: s,
          } = (0, d.$)(),
          { disconnect: r } = (0, l.useDisconnect)(),
          { disconnect: f } = (0, c.O)(),
          { openEVMWalletDialog: C, openSolanaWalletDialog: x } = (0, o.G)(),
          A = (0, u.t)(),
          b = (0, a.useCallback)(() => {
            n(void 0), r();
          }, [n, r]),
          m = (0, a.useCallback)(() => {
            s(void 0), f();
          }, [s, f]),
          g = e.account.address || t.account.userAddress,
          E = e.account.address && t.account.userAddress,
          v = e.account.isConnecting || t.account.isConnecting;
        return A
          ? v
            ? (0, i.jsx)(p, { showArrowIcon: !1, children: "Connecting..." })
            : (0, i.jsx)(i.Fragment, {
                children: E
                  ? (0, i.jsx)(T, {
                      evmAddress: e.account.address,
                      solAddress: t.account.userAddress,
                      onEVMDisconnect: b,
                      onSolanaDisconnect: m,
                    })
                  : g
                  ? (0, i.jsx)(H, {
                      address: g,
                      evmAddress: e.account.address,
                      solAddress: t.account.userAddress,
                      onEVMDisconnect: b,
                      onSolanaDisconnect: m,
                      onEVMConnect: C,
                      onSolanaConnect: x,
                    })
                  : (0, i.jsx)(N, { onEVMConnect: C, onSolanaConnect: x }),
              })
          : (0, i.jsx)(h.O, { className: "h-9 w-40 rounded-xl" });
      }
      function I(e) {
        return (0, i.jsx)("svg", {
          width: "21",
          height: "20",
          viewBox: "0 0 21 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, i.jsx)("path", {
            d: "M10.7822 20C8.03621 20 5.45384 18.9306 3.51203 16.988C1.56935 15.0462 0.5 12.4647 0.5 9.71779C0.5 6.9709 1.56935 4.38941 3.51203 2.4476C4.62601 1.33275 5.94038 0.509298 7.41752 0C6.19503 3.73748 6.71724 8.21724 9.5 11C11.4584 12.9584 14.5031 13.5953 17.2727 13.5953C18.3736 13.5953 19.4587 13.4229 20.5 13.0825C19.9907 14.5596 19.1672 15.8731 18.0524 16.988C16.1106 18.9298 13.5291 20 10.7822 20Z",
            fill: "currentColor",
          }),
        });
      }
      function R(e) {
        return (0, i.jsx)("svg", {
          width: "22",
          height: "22",
          viewBox: "0 0 22 22",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, i.jsx)("path", {
            d: "M11 5.5C14.0377 5.5 16.5 7.96231 16.5 11C16.5 14.0377 14.0377 16.5 11 16.5C7.96231 16.5 5.5 14.0377 5.5 11C5.5 7.96231 7.96231 5.5 11 5.5ZM11.8462 0.846154C11.8462 1.001 11.8462 3.22977 11.8462 3.38462C11.8462 3.85212 11.4675 4.23077 11 4.23077C10.5325 4.23077 10.1538 3.85212 10.1538 3.38462C10.1538 3.22977 10.1538 1.001 10.1538 0.846154C10.1538 0.378654 10.5325 0 11 0C11.4675 0 11.8462 0.378654 11.8462 0.846154ZM18.7783 4.41862C18.6687 4.52819 17.0927 6.10415 16.9832 6.21373C16.6527 6.54415 16.1171 6.54415 15.7867 6.21373C15.4563 5.88331 15.4563 5.34769 15.7867 5.01727C15.8963 4.90769 17.4722 3.33173 17.5818 3.22215C17.9122 2.89173 18.4478 2.89173 18.7783 3.22215C19.1087 3.55258 19.1087 4.08819 18.7783 4.41862ZM21.1538 11.8462C20.999 11.8462 18.7702 11.8462 18.6154 11.8462C18.1479 11.8462 17.7692 11.4675 17.7692 11C17.7692 10.5325 18.1479 10.1538 18.6154 10.1538C18.7702 10.1538 20.999 10.1538 21.1538 10.1538C21.6213 10.1538 22 10.5325 22 11C22 11.4675 21.6213 11.8462 21.1538 11.8462ZM17.5814 18.7783C17.4718 18.6687 15.8958 17.0927 15.7863 16.9832C15.4558 16.6527 15.4558 16.1171 15.7863 15.7867C16.1167 15.4563 16.6523 15.4563 16.9827 15.7867C17.0923 15.8963 18.6683 17.4722 18.7778 17.5818C19.1083 17.9122 19.1083 18.4478 18.7778 18.7783C18.4474 19.1087 17.9118 19.1087 17.5814 18.7783ZM10.1538 21.1538C10.1538 20.999 10.1538 18.7702 10.1538 18.6154C10.1538 18.1479 10.5325 17.7692 11 17.7692C11.4675 17.7692 11.8462 18.1479 11.8462 18.6154C11.8462 18.7702 11.8462 20.999 11.8462 21.1538C11.8462 21.6213 11.4675 22 11 22C10.5325 22 10.1538 21.6213 10.1538 21.1538ZM3.22173 17.5814C3.33131 17.4718 4.90727 15.8958 5.01685 15.7863C5.34727 15.4558 5.88289 15.4558 6.21331 15.7863C6.54373 16.1167 6.54373 16.6523 6.21331 16.9827C6.10373 17.0923 4.52777 18.6683 4.41819 18.7778C4.08777 19.1083 3.55215 19.1083 3.22173 18.7778C2.89131 18.4474 2.89131 17.9118 3.22173 17.5814ZM0.846154 10.1538C1.001 10.1538 3.22977 10.1538 3.38462 10.1538C3.85212 10.1538 4.23077 10.5325 4.23077 11C4.23077 11.4675 3.85212 11.8462 3.38462 11.8462C3.22977 11.8462 1.001 11.8462 0.846154 11.8462C0.378654 11.8462 0 11.4675 0 11C0 10.5325 0.378654 10.1538 0.846154 10.1538ZM4.41862 3.22173C4.52819 3.33131 6.10415 4.90727 6.21373 5.01685C6.54415 5.34727 6.54415 5.88289 6.21373 6.21331C5.88331 6.54373 5.34769 6.54373 5.01727 6.21331C4.90769 6.10373 3.33173 4.52777 3.22215 4.41819C2.89173 4.08777 2.89173 3.55215 3.22215 3.22173C3.55258 2.89131 4.08819 2.89131 4.41862 3.22173Z",
            fill: "currentColor",
          }),
        });
      }
      var Z = n(16349),
        V = n(85169);
      function F() {
        let { setTheme: e, resolvedTheme: t } = (0, V.F)();
        return (0, u.t)()
          ? (0, i.jsx)("button", {
              className:
                "bg-colors-black-a50 text-colors-light flex size-9 shrink-0 items-center justify-center rounded-[8px] border border-transparent shadow-sm dark:border-neutral-600",
              onClick: function () {
                e("dark" === t ? "light" : "dark");
              },
              children: (0, i.jsxs)("div", {
                className: "relative size-5",
                children: [
                  (0, i.jsx)(R, {
                    className: (0, Z.cn)(
                      "absolute size-5 transition-all duration-300",
                      "light" === t
                        ? "rotate-0 opacity-100"
                        : "rotate-90 opacity-0"
                    ),
                  }),
                  (0, i.jsx)(I, {
                    className: (0, Z.cn)(
                      "absolute size-5 transition-all duration-300",
                      "dark" === t
                        ? "rotate-0 opacity-100"
                        : "-rotate-90 opacity-0"
                    ),
                  }),
                ],
              }),
            })
          : (0, i.jsx)(h.O, { className: "size-9 rounded-[8px]" });
      }
      function J(e) {
        let { toggleMobileNav: t } = e;
        return (0, i.jsxs)("header", {
          className:
            "sticky top-0 z-20 flex h-[var(--header-height)] w-full flex-row items-center justify-between p-4 backdrop-blur",
          children: [
            (0, i.jsx)("button", {
              onClick: t,
              className: "visible-nav:hidden -m-2 p-2",
              children: (0, i.jsx)(r, {
                className: "size-5 text-black dark:text-white",
              }),
            }),
            (0, i.jsx)("div", {}),
            (0, i.jsxs)("div", {
              className: "flex flex-row items-center justify-start space-x-3",
              children: [(0, i.jsx)(F, {}), (0, i.jsx)(W, {})],
            }),
          ],
        });
      }
      var O = n(18045),
        Q = n(94845),
        U = n(60120),
        _ = n(16463),
        G = n(87138);
      function P(e) {
        let {
            text: t,
            icon: n,
            route: s,
            isDisabled: r,
            isNew: o,
            tag: d,
            className: c,
            onClick: l,
          } = e,
          u = (0, _.usePathname)(),
          h = (0, _.useRouter)(),
          f = (0, a.useMemo)(
            () =>
              ("/restaking" === s &&
                ("/ezeth" === u || "/pzeth" === u || "/ezsol" === u)) ||
              u.includes(s),
            [u, s]
          );
        return (0, i.jsxs)("div", {
          className: (0, Z.cn)(
            "flex w-full cursor-pointer select-none flex-row items-center justify-start space-x-4 whitespace-nowrap rounded-lg px-4 py-2.5 text-[20px] text-[#797979] hover:bg-[#EDEDF2] dark:text-gray-500 dark:hover:bg-[#1D1F30]",
            {
              "pointer-events-none": r,
              "bg-[#E6E7F2] font-medium text-gray-700 hover:bg-[#ededf2] dark:bg-[#1D1F30] dark:text-white":
                f,
            },
            c
          ),
          onClick: function () {
            h.push(s), null == l || l();
          },
          children: [
            (0, i.jsx)("div", {
              className:
                "text-text-foreground-primary flex size-5 flex-row items-center justify-center",
              children: n,
            }),
            (0, i.jsx)("div", {
              className:
                "flex grow flex-row items-center justify-between leading-none",
              children: (0, i.jsxs)(G.default, {
                href: s,
                children: [
                  (0, i.jsxs)("p", {
                    className: (0, Z.cn)(
                      "text-text-secondary text-sm font-semibold",
                      { "opacity-50": r }
                    ),
                    children: [
                      t,
                      o || d
                        ? d ||
                          (0, i.jsx)("span", {
                            className:
                              "relative left-[2px] top-[-6px] rounded bg-[#FF2E2E] px-1 py-[0.1rem] text-[10px] text-white",
                            children: "New",
                          })
                        : null,
                    ],
                  }),
                  r
                    ? (0, i.jsx)("p", {
                        className:
                          "dark:text-primary-500 text-[10px] font-semibold text-green-700 opacity-75",
                        children: "Coming Soon",
                      })
                    : null,
                ],
              }),
            }),
          ],
        });
      }
      function q(e) {
        var t, n;
        let { route: s, closeMobileNav: r } = e,
          [o, d] = (0, a.useState)(!1),
          c = (0, _.usePathname)(),
          l = !!(null === (t = s.subRoutes) || void 0 === t
            ? void 0
            : t.length),
          u = c === s.path;
        return (
          (0, a.useEffect)(() => {
            var e;
            (null === (e = s.subRoutes) || void 0 === e
              ? void 0
              : e.some((e) => c.includes(e.path))) && d(!0);
          }, [c, s.subRoutes]),
          (0, i.jsxs)(
            "div",
            {
              className:
                "flex w-full flex-col items-center justify-start space-y-2",
              children: [
                (0, i.jsx)(P, {
                  text: s.name,
                  icon: s.icon,
                  route: s.path,
                  isDisabled: s.isDisabled,
                  isNew: s.isNew,
                  tag: s.tag,
                  className: s.className,
                  onClick: () => {
                    (l && (!o || u)) || r(), d(!o);
                  },
                }),
                (null === (n = s.subRoutes) || void 0 === n ? void 0 : n.length)
                  ? s.subRoutes.map((e, t) =>
                      (0, i.jsx)(
                        P,
                        {
                          text: e.name,
                          icon: e.icon,
                          route: e.path,
                          isDisabled: e.isDisabled,
                          isNew: e.isNew,
                          tag: e.tag,
                          className: (0, Z.cn)("ml-6", e.className),
                          onClick: r,
                        },
                        "".concat(e.path, "_").concat(t)
                      )
                    )
                  : null,
              ],
            },
            s.path
          )
        );
      }
      var Y = n(14515);
      let K = [
        { href: "https://x.com", icon: (0, i.jsx)(Y.Z, {}) },
        {
          href: "https://t.me",
          icon: (0, i.jsx)(function (e) {
            return (0,
            i.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e, children: (0, i.jsx)("path", { d: "M8.99996 0.666626C4.39996 0.666626 0.666626 4.39996 0.666626 8.99996C0.666626 13.6 4.39996 17.3333 8.99996 17.3333C13.6 17.3333 17.3333 13.6 17.3333 8.99996C17.3333 4.39996 13.6 0.666626 8.99996 0.666626ZM12.8666 6.33329C12.7416 7.64996 12.2 10.85 11.925 12.325C11.8083 12.95 11.575 13.1583 11.3583 13.1833C10.875 13.225 10.5083 12.8666 10.0416 12.5583C9.30829 12.075 8.89163 11.775 8.18329 11.3083C7.35829 10.7666 7.89163 10.4666 8.36663 9.98329C8.49163 9.85829 10.625 7.91663 10.6666 7.74163C10.6724 7.71512 10.6716 7.6876 10.6644 7.66146C10.6571 7.63532 10.6436 7.61135 10.625 7.59163C10.575 7.54996 10.5083 7.56663 10.45 7.57496C10.375 7.59163 9.20829 8.36663 6.93329 9.89996C6.59996 10.125 6.29996 10.2416 6.03329 10.2333C5.73329 10.225 5.16663 10.0666 4.74163 9.92496C4.21663 9.75829 3.80829 9.66663 3.84163 9.37496C3.85829 9.22496 4.06663 9.07496 4.45829 8.91663C6.89163 7.85829 8.50829 7.15829 9.31663 6.82496C11.6333 5.85829 12.1083 5.69163 12.425 5.69163C12.4916 5.69163 12.65 5.70829 12.75 5.79163C12.8333 5.85829 12.8583 5.94996 12.8666 6.01663C12.8583 6.06663 12.875 6.21663 12.8666 6.33329Z", fill: "currentColor" }) });
          }, {}),
        },
      ];
      function X() {
        return (0, i.jsx)("div", {
          className:
            "mx-8 grid grid-cols-3 grid-rows-2 items-center justify-center justify-items-center gap-4",
          children: K.map((e) => {
            let { href: t, icon: n } = e;
            return (0, i.jsx)(
              "a",
              {
                href: t,
                target: "_blank",
                className: "hover:opacity-80",
                children: n,
              },
              t
            );
          }),
        });
      }
      function $(e) {
        let { isVisible: t, closeMobileNav: n } = e,
          s = (0, a.useRef)(null);
        return (
          (0, O.t$)(s, n),
          (0, i.jsxs)("div", {
            ref: s,
            className: (0, Z.cn)(
              "bg-fg-light dark:bg-fg-dark",
              "fixed top-0 flex h-full w-[var(--sidebar-width)]",
              "-translate-x-full",
              "flex-col items-center justify-between space-y-5 overflow-y-auto px-5 pb-6 pt-14",
              "border-divider-light dark:border-divider-dark border-r",
              "transition-transform duration-300 ease-in-out",
              "visible-nav:h-svh visible-nav:z-20 visible-nav:sticky visible-nav:translate-x-0",
              { "translate-x-0 z-20": t }
            ),
            children: [
              (0, i.jsxs)("div", {
                className:
                  "flex w-full flex-col items-center justify-start space-y-20",
                children: [
                  (0, i.jsx)("a", {
                    href: "https://fo-home-renoprotocol.vercel.app/",
                    target: "_blank",
                    children: (0, i.jsx)(U.X, {}),
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "flex w-full flex-col items-center justify-start space-y-2",
                    children: Q._j.map((e, t) =>
                      (0, i.jsx)(
                        q,
                        { route: e, closeMobileNav: n },
                        "".concat(e.path, "_").concat(t)
                      )
                    ),
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "flex w-full flex-col space-y-5",
                children: (0, i.jsx)(X, {}),
              }),
            ],
          })
        );
      }
      function ee(e) {
        let { children: t } = e,
          [n, r] = (0, a.useState)(!1),
          o = (0, a.useCallback)(() => r(!n), [n]);
        return (
          (0, a.useEffect)(
            () => (
              n
                ? (document.body.style.overflow = "hidden")
                : (document.body.style.overflow = "unset"),
              () => {
                document.body.style.overflow = "unset";
              }
            ),
            [n]
          ),
          (0, i.jsxs)("div", {
            className:
              "bg-fg-light dark:bg-fg-dark flex min-h-svh w-full flex-row",
            children: [
              (0, i.jsx)($, { isVisible: n, closeMobileNav: () => r(!1) }),
              (0, i.jsxs)("div", {
                className: (0, s.Z)(
                  "visible-nav:opacity-100 visible-nav:w-[calc(100vw_-_var(--sidebar-width))] bg-app-light dark:bg-app-dark bg-glow-page dark:bg-glow-page-dark visible-nav:bg-[center_left_var(--half-sidebar-width)] z-0 flex size-full min-h-svh flex-col items-start justify-start bg-cover  bg-fixed bg-center bg-no-repeat transition-opacity",
                  { "pointer-events-none opacity-50": n }
                ),
                children: [
                  (0, i.jsx)(J, { toggleMobileNav: o }),
                  (0, i.jsx)("main", {
                    className: "relative size-full flex-1",
                    children: t,
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    25970: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return a;
        },
      });
      var i = n(57437);
      function a(e) {
        return (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "17",
          height: "18",
          viewBox: "0 0 17 18",
          fill: "none",
          ...e,
          children: (0, i.jsx)("path", {
            d: "M9.71259 16.0576L13.671 16.0576C11.6426 15.1474 9.93834 13.4253 8.86982 11.1926L8.86886 11.1906L8.29386 9.98221L4.05163 9.98221L5.04191 12.4521L5.04245 12.4535C5.95865 14.7483 7.82968 16.0576 9.71259 16.0576ZM9.59091 8.01779L13.8331 8.01779L12.8429 5.54789L12.8423 5.54653C11.9261 3.25172 10.0551 1.94238 8.17217 1.94238L4.21374 1.94238C6.24215 2.85263 7.94642 4.57466 9.01495 6.80738L9.0159 6.80938L9.59091 8.01779Z",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinejoin: "round",
          }),
        });
      }
    },
    81447: function (e, t, n) {
      "use strict";
      n.d(t, {
        u: function () {
          return a;
        },
      });
      var i = n(57437);
      function a(e) {
        return (0, i.jsxs)("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, i.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M6 2C3.78772 2 2 3.78772 2 6V18C2 19.4198 2.73095 20.6611 3.84664 21.3696C3.88875 21.3973 3.93121 21.4231 3.97242 21.4469C4.04154 21.4883 4.13775 21.5429 4.23976 21.5891C4.24232 21.5904 4.24487 21.5917 4.2474 21.593C4.30157 21.6208 4.34934 21.6409 4.38754 21.6557C4.38755 21.6557 4.38755 21.6558 4.38756 21.6558L4.39819 21.6599C4.49599 21.7101 4.58779 21.7436 4.65341 21.7646C4.65341 21.7646 4.65342 21.7646 4.65343 21.7646C4.72144 21.7942 4.79571 21.8188 4.87566 21.8356C4.8793 21.8367 4.88291 21.8378 4.88649 21.8388C4.94018 21.8542 4.98689 21.8648 5.02029 21.8718C5.0203 21.8718 5.02031 21.8718 5.02032 21.8718C5.34896 21.9655 5.68239 22 6 22H13.01C13.5623 22 14.01 21.5523 14.01 21C14.01 20.4477 13.5623 20 13.01 20H6C5.88015 20 5.77591 19.991 5.6862 19.9752C5.6862 19.9752 5.68619 19.9751 5.68618 19.9751C6.81381 17.6223 9.21532 16 12 16C12.6978 16 13.3607 16.1044 14.0014 16.2975C14.5302 16.4568 15.0881 16.1573 15.2475 15.6286C15.4068 15.0998 15.1073 14.5419 14.5785 14.3825C13.7593 14.1356 12.9022 14 12 14C8.59634 14 5.64088 15.885 4.11151 18.6659C4.03917 18.4585 4 18.2346 4 18V6C4 4.89228 4.89228 4 6 4H18C19.1077 4 20 4.89228 20 6V13.01C20 13.5623 20.4477 14.01 21 14.01C21.5523 14.01 22 13.5623 22 13.01V6C22 3.78772 20.2123 2 18 2H6Z",
              fill: "currentColor",
            }),
            (0, i.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M21.9241 18.3828C21.8753 18.5007 21.803 18.6112 21.7071 18.7071L18.7071 21.7071C18.3166 22.0976 17.6834 22.0976 17.2929 21.7071C16.9024 21.3166 16.9024 20.6834 17.2929 20.2929L18.5858 19L14 19C13.4477 19 13 18.5523 13 18C13 17.4477 13.4477 17 14 17L18.5858 17L17.2929 15.7071C16.9024 15.3166 16.9024 14.6834 17.2929 14.2929C17.6834 13.9024 18.3166 13.9024 18.7071 14.2929L21.7061 17.2919C21.7086 17.2944 21.7111 17.2969 21.7136 17.2994C21.8907 17.4799 22 17.7272 22 18C22 18.1356 21.973 18.2649 21.9241 18.3828Z",
              fill: "currentColor",
            }),
            (0, i.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7ZM8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9Z",
              fill: "currentColor",
            }),
          ],
        });
      }
    },
    14515: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(57437);
      function a(e) {
        return (0, i.jsx)("svg", {
          width: "18",
          height: "16",
          viewBox: "0 0 18 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, i.jsx)("path", {
            d: "M0.153041 0L6.77154 8.82491L0.111328 16H1.61039L7.44153 9.71796L12.1528 16H17.2538L10.2627 6.67879L16.4621 0H14.963L9.59304 5.78545L5.25406 0H0.153041ZM2.35748 1.10103H4.70087L15.049 14.899H12.7057L2.35748 1.10103Z",
            fill: "currentColor",
          }),
        });
      }
    },
    55158: function (e, t, n) {
      "use strict";
      n.d(t, {
        n: function () {
          return a;
        },
      });
      var i = n(57437);
      function a(e) {
        return (0, i.jsx)("svg", {
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
          children: (0, i.jsx)("path", { d: "M20 6 9 17l-5-5" }),
        });
      }
    },
    56967: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return a;
        },
      });
      var i = n(57437);
      function a(e) {
        return (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "14",
          height: "8",
          viewBox: "0 0 14 8",
          fill: "none",
          ...e,
          children: (0, i.jsx)("path", {
            d: "M12.9258 1.16797L6.92578 7.16797L0.925781 1.16797",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
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
      var i = n(57437),
        a = n(66648),
        s = n(16349),
        r = n(21517);
      function o(e) {
        let {
            chainId: t,
            iconSize: n = 12,
            priority: o = !0,
            className: d,
            iconClassName: c,
          } = e,
          l = r.JP[t];
        return l && l.icon
          ? (0, i.jsx)("span", {
              className: (0, s.cn)(
                "relative flex items-center justify-center overflow-hidden",
                d
              ),
              style: { width: "".concat(n, "px"), height: "".concat(n, "px") },
              children: (0, i.jsx)(a.default, {
                src: l.icon,
                width: n,
                height: n,
                alt: "".concat((0, r.qz)(l), " icon"),
                priority: o,
                className: (0, s.cn)("size-full rounded-full", c),
              }),
            })
          : null;
      }
    },
    60120: function (e, t, n) {
      "use strict";
      n.d(t, {
        X: function () {
          return s;
        },
      });
      var i = n(57437),
        a = n(66648);
      function s() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(a.default, {
              alt: "Reno",
              src: "/logos/renzo-logo-light.svg",
              width: 133,
              height: 32,
              priority: !0,
              className: "block dark:hidden",
            }),
            (0, i.jsx)(a.default, {
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
    6359: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return s;
        },
      });
      var i = n(57437),
        a = n(16349);
      function s(e) {
        let { className: t, ...n } = e;
        return (0, i.jsx)("span", {
          className: (0, a.cn)(
            "bg-bg-dark/20 dark:bg-bg-light/20 inline-block animate-pulse rounded-md",
            t
          ),
          ...n,
        });
      }
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
          return d;
        },
      });
      var i = n(57437),
        a = n(2265),
        s = n(16349),
        r = n(61485);
      let o = r.fC,
        d = r.xz,
        c = a.forwardRef((e, t) => {
          let {
            className: n,
            align: a = "center",
            sideOffset: o = 12,
            ...d
          } = e;
          return (0, i.jsx)(r.h_, {
            children: (0, i.jsx)(r.VY, {
              ref: t,
              align: a,
              sideOffset: o,
              className: (0, s.cn)(
                "bg-popover",
                "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                "z-50 w-72 rounded-xl p-4 outline-none",
                "border dark:border-neutral-600",
                n
              ),
              ...d,
            }),
          });
        });
      c.displayName = r.VY.displayName;
    },
    37947: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var i = {};
      n.r(i),
        n.d(i, {
          uT: function () {
            return d;
          },
          Qp: function () {
            return c;
          },
          F: function () {
            return l;
          },
          H1: function () {
            return r;
          },
          Dx: function () {
            return o;
          },
        });
      var a = n(57437),
        s = n(16349);
      function r(e) {
        let { children: t, className: n, ...i } = e;
        return (0, a.jsx)("h1", {
          className: (0, s.cn)("text-4xl", n),
          ...i,
          children: t,
        });
      }
      function o(e) {
        let { children: t, className: n, ...i } = e;
        return (0, a.jsx)("p", {
          className: (0, s.cn)("text-base", n),
          ...i,
          children: t,
        });
      }
      function d(e) {
        let { children: t, className: n, ...i } = e;
        return (0, a.jsx)("p", {
          className: (0, s.cn)("text-sm", n),
          ...i,
          children: t,
        });
      }
      function c(e) {
        let { children: t, className: n, ...i } = e;
        return (0, a.jsx)("p", {
          className: (0, s.cn)("text-md", n),
          ...i,
          children: t,
        });
      }
      function l(e) {
        let { children: t, className: n, ...i } = e;
        return (0, a.jsx)("p", {
          className: (0, s.cn)("text-xs", n),
          ...i,
          children: t,
        });
      }
    },
    21517: function (e, t, n) {
      "use strict";
      n.d(t, {
        JP: function () {
          return j;
        },
        Ui: function () {
          return M;
        },
        mI: function () {
          return z;
        },
        mh: function () {
          return y;
        },
        p5: function () {
          return L;
        },
        qz: function () {
          return B;
        },
      });
      var i = n(87704),
        a = n(57780),
        s = n(18527),
        r = n(21198),
        o = n(13926),
        d = n(10772),
        c = n(97032),
        l = n(24032),
        u = n(83134),
        h = n(34269),
        f = n(16491),
        p = n(42410),
        C = n(71596),
        x = n(85507),
        A = n(53611),
        b = n(23281),
        m = n(1306),
        g = n(48412),
        E = n(94113),
        v = n(99445),
        w = n(43854),
        k = n(54288);
      let L = {
        mainnet: {
          id: f.R.id,
          name: f.R.name,
          chainType: k.J.EVM,
          chain: f.R,
          icon: o.default,
          blockExplorers: { default: { url: f.R.blockExplorers.default.url } },
        },
        holesky: {
          id: p.M.id,
          name: p.M.name,
          chainType: k.J.EVM,
          chain: p.M,
          icon: o.default,
          blockExplorers: { default: { url: p.M.blockExplorers.default.url } },
          testnet: !0,
        },
        optimism: {
          id: C.v.id,
          name: C.v.name,
          chainType: k.J.EVM,
          chain: C.v,
          icon: u.default,
          blockExplorers: { default: { url: C.v.blockExplorers.default.url } },
        },
        optimismGoerli: {
          id: x.l.id,
          name: x.l.name,
          chainType: k.J.EVM,
          chain: x.l,
          icon: u.default,
          blockExplorers: { default: { url: x.l.blockExplorers.default.url } },
          testnet: !0,
        },
        arbitrum: {
          id: A.y.id,
          name: A.y.name,
          chainType: k.J.EVM,
          chain: A.y,
          preferredName: "Arbitrum",
          icon: i.default,
          blockExplorers: { default: { url: A.y.blockExplorers.default.url } },
        },
        bsc: {
          id: b.e.id,
          name: b.e.name,
          chainType: k.J.EVM,
          chain: b.e,
          preferredName: "BNB",
          icon: r.default,
          blockExplorers: { default: { url: b.e.blockExplorers.default.url } },
        },
        mode: {
          id: m.x.id,
          name: m.x.name,
          chain: m.x,
          chainType: k.J.EVM,
          preferredName: "Mode",
          icon: l.default,
          blockExplorers: { default: { url: m.x.blockExplorers.default.url } },
        },
        linea: {
          id: g.P.id,
          name: g.P.name,
          chain: g.P,
          chainType: k.J.EVM,
          preferredName: "Linea",
          icon: c.default,
          blockExplorers: { default: { url: g.P.blockExplorers.default.url } },
        },
        blast: {
          id: E.A.id,
          name: E.A.name,
          chainType: k.J.EVM,
          chain: E.A,
          icon: s.default,
          blockExplorers: { default: { url: E.A.blockExplorers.default.url } },
        },
        base: {
          id: v.u.id,
          name: v.u.name,
          chainType: k.J.EVM,
          chain: v.u,
          preferredName: "Base",
          icon: a.default,
          blockExplorers: { default: { url: v.u.blockExplorers.default.url } },
        },
        fraxtal: {
          id: w.q.id,
          name: w.q.name,
          chainType: k.J.EVM,
          chain: w.q,
          preferredName: "Fraxtal",
          icon: d.default,
          blockExplorers: { default: { url: w.q.blockExplorers.default.url } },
        },
        solanaMainnet: {
          id: 900,
          name: "Solana Mainnet",
          preferredName: "Solana",
          chainType: k.J.Solana,
          chain: null,
          icon: h.default,
          blockExplorers: { default: { url: "https://explorer.solana.com" } },
        },
        solanaTestnet: {
          id: 901,
          name: "Solana Testnet",
          chainType: k.J.Solana,
          chain: null,
          preferredName: "Solana",
          icon: h.default,
          testnet: !0,
          blockExplorers: {
            default: { url: "https://explorer.solana.com?cluster=testnet" },
          },
        },
        solanaDevnet: {
          id: 902,
          name: "Solana Devnet",
          preferredName: "Solana",
          chainType: k.J.Solana,
          chain: null,
          icon: h.default,
          devnet: !0,
          blockExplorers: {
            default: { url: "https://explorer.solana.com?cluster=devnet" },
          },
        },
      };
      Object.values(L)
        .filter((e) => e.chainType === k.J.Solana)
        .map((e) => e.id);
      let j = Object.values(L).reduce((e, t) => ((e[t.id] = t), e), {}),
        y = L.mainnet.id,
        M = L.solanaMainnet.id;
      function B(e) {
        var t;
        return null !== (t = e.preferredName) && void 0 !== t ? t : e.name;
      }
      function z(e, t) {
        return e !== t;
      }
      L.solanaDevnet.id, L.solanaTestnet.id;
    },
    88262: function (e, t, n) {
      "use strict";
      n.d(t, {
        m3: function () {
          return c;
        },
        rh: function () {
          return u;
        },
        t: function () {
          return l;
        },
      });
      var i = n(93486),
        a = n(31195),
        s = n(28373),
        r = n(16491),
        o = n(42410),
        d = n(21517);
      let c = {
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
                [d.p5.arbitrum.id]: {
                  address: "0xf25484650484DE3d554fB0b7125e7696efA4ab99",
                  swapKey:
                    "0x12acadfa38ab02479ae587196a9043ee4d8bf52fcb96b7f8d2ba240f03bcd08a",
                  connextAddress: "0xEE9deC2712cCE65174B561151701Bf54b99C24C8",
                  bridgeRouterFeeBps: 5e-4,
                  bridgeSweepFeeBps: 5e-4,
                  bridgeBatchSize: 100,
                  fromSwapTokenIndex: 1,
                  toSwapTokenIndex: 0,
                  l2AssetMinTransactionBuffer: (0, a.f)("0.00000871064"),
                },
                [d.p5.bsc.id]: {
                  address: "0xf25484650484DE3d554fB0b7125e7696efA4ab99",
                  swapKey:
                    "0x12acadfa38ab02479ae587196a9043ee4d8bf52fcb96b7f8d2ba240f03bcd08a",
                  connextAddress: "0xCd401c10afa37d641d2F594852DA94C700e4F2CE",
                  bridgeRouterFeeBps: 5e-4,
                  bridgeSweepFeeBps: 0,
                  bridgeBatchSize: 0,
                  fromSwapTokenIndex: 1,
                  toSwapTokenIndex: 0,
                  l2AssetMinTransactionBuffer: (0, a.f)("0.000245116"),
                },
                [d.p5.mode.id]: {
                  address: "0x4D7572040B84b41a6AA2efE4A93eFFF182388F88",
                  swapKey:
                    "0x12acadfa38ab02479ae587196a9043ee4d8bf52fcb96b7f8d2ba240f03bcd08a",
                  connextAddress: "0x7380511493DD4c2f1dD75E9CCe5bD52C787D4B51",
                  bridgeRouterFeeBps: 5e-4,
                  bridgeSweepFeeBps: 5e-4,
                  bridgeBatchSize: 100,
                  fromSwapTokenIndex: 1,
                  toSwapTokenIndex: 0,
                  l2AssetMinTransactionBuffer: (0, a.f)("0.000000024899288484"),
                },
                [d.p5.linea.id]: {
                  address: "0x4D7572040B84b41a6AA2efE4A93eFFF182388F88",
                  swapKey:
                    "0x12acadfa38ab02479ae587196a9043ee4d8bf52fcb96b7f8d2ba240f03bcd08a",
                  connextAddress: "0xa05eF29e9aC8C75c530c2795Fa6A800e188dE0a9",
                  bridgeRouterFeeBps: 5e-4,
                  bridgeSweepFeeBps: 5e-4,
                  bridgeBatchSize: 100,
                  fromSwapTokenIndex: 1,
                  toSwapTokenIndex: 0,
                  l2AssetMinTransactionBuffer: (0, a.f)("0.000022627063249824"),
                },
                [d.p5.base.id]: {
                  address: "0xf25484650484DE3d554fB0b7125e7696efA4ab99",
                  swapKey:
                    "0x12acadfa38ab02479ae587196a9043ee4d8bf52fcb96b7f8d2ba240f03bcd08a",
                  connextAddress: "0xB8448C6f7f7887D36DcA487370778e419e9ebE3F",
                  bridgeRouterFeeBps: 5e-4,
                  bridgeSweepFeeBps: 5e-4,
                  bridgeBatchSize: 100,
                  fromSwapTokenIndex: 1,
                  toSwapTokenIndex: 0,
                  l2AssetMinTransactionBuffer: (0, a.f)("0.00001"),
                },
              },
              rezVesting: "0x9706128269F3476A1bd1a511c75BEa75422A1edB",
            },
            etherscanURL: r.R.blockExplorers.default.url,
            nativeAssetMinTransactionBuffer: (0, a.f)("0.02"),
            solana: {
              addresses: {
                jito: {
                  [d.p5.solanaMainnet.id]: {
                    vault: "CugziSqZXcUStNPXbtRmq6atsrHqWY2fH2tAhsyApQrV",
                    renzoVault: "B2nbf6ef9KRbrdV2YmMYGHgRX8vCQtS44PvTNdsnmeBb",
                    config: "UwuSgAq4zByffCGCrWH87DsjfsewYjuqHfJEpzw1Jq3",
                  },
                },
              },
              nativeAssetMinTransactionBuffer: (0, s.v)("0.02", i.Ey),
            },
          },
          [o.M.id]: {
            environment: "development",
            chain: o.M,
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
                [d.p5.optimismGoerli.id]: {
                  address: "0xd18aD82C9F3db0eEcde02C8ab892d501327B0EF4",
                  swapKey:
                    "0x292e02936c5b0f88fab7f755caac58d92cd10b13f484cd46f6dd45468cb23e3f",
                  connextAddress: "0x5Ea1bb242326044699C3d81341c5f535d5Af1504",
                  bridgeRouterFeeBps: 5e-4,
                  bridgeSweepFeeBps: 0,
                  bridgeBatchSize: 0,
                  fromSwapTokenIndex: 1,
                  toSwapTokenIndex: 0,
                  l2AssetMinTransactionBuffer: (0, a.f)("0.000366122825986315"),
                },
              },
              rezVesting: "0x48eC178372840d6B1f897ABf811D4B0dBaC2a736",
            },
            etherscanURL: o.M.blockExplorers.default.url,
            nativeAssetMinTransactionBuffer: (0, a.f)("0.02"),
            solana: {
              addresses: {
                jito: {
                  [d.p5.solanaTestnet.id]: {
                    vault: "CugziSqZXcUStNPXbtRmq6atsrHqWY2fH2tAhsyApQrV",
                    renzoVault: "B2nbf6ef9KRbrdV2YmMYGHgRX8vCQtS44PvTNdsnmeBb",
                    config: "UwuSgAq4zByffCGCrWH87DsjfsewYjuqHfJEpzw1Jq3",
                  },
                  [d.p5.solanaDevnet.id]: {
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
        l = c[r.R.id],
        u = c[o.M.id];
    },
    94845: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ar: function () {
          return l;
        },
        Wz: function () {
          return c;
        },
        KS: function () {
          return d;
        },
        _j: function () {
          return o;
        },
      });
      var i = n(57437),
        a = n(25970),
        s = n(81447),
        r = n(387);
      let o = [
        {
          path: "/discover",
          name: "Discover",
          icon: (0, i.jsx)(function (e) {
            return (0,
            i.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", ...e, children: [(0, i.jsx)("circle", { cx: "12", cy: "12", r: "8", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), (0, i.jsx)("path", { d: "M11.5036 10.7191L13.7252 10.2748L13.2809 12.4964C13.2017 12.8923 12.8923 13.2017 12.4964 13.2809L10.2748 13.7252L10.7191 11.5036C10.7983 11.1077 11.1077 10.7983 11.5036 10.7191Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] });
          }, {}),
        },
        { path: "/restaking", name: "Restaking", icon: (0, i.jsx)(a.f, {}) },
        {
          path: "/defi",
          name: "DeFi",
          icon: (0, i.jsx)(function (e) {
            return (0,
            i.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "30", viewBox: "0 0 30 30", fill: "none", ...e, children: (0, i.jsx)("path", { d: "M21.3036 15.8089L20.5704 15.1289L21.3036 15.8089ZM14.2326 8.73783L14.9126 9.47103L14.2326 8.73783ZM24.661 7.27232L25.6526 7.402L24.661 7.27232ZM22.7691 5.38046L22.8988 6.37202L22.7691 5.38046ZM9.49447 15.6506L10.3924 16.0908L9.49447 15.6506ZM14.3909 20.547L13.9507 19.6491L14.3909 20.547ZM8.20711 20.8674C8.59763 20.4769 8.59763 19.8437 8.20711 19.4532C7.81658 19.0627 7.18342 19.0627 6.79289 19.4532L8.20711 20.8674ZM3.96447 22.2816C3.57394 22.6722 3.57394 23.3053 3.96447 23.6958C4.35499 24.0864 4.98816 24.0864 5.37868 23.6958L3.96447 22.2816ZM10.3284 22.9887C10.7189 22.5982 10.719 21.965 10.3284 21.5745C9.9379 21.184 9.30474 21.184 8.91421 21.5745L10.3284 22.9887ZM7.5 22.9887C7.10948 23.3793 7.10948 24.0124 7.5 24.4029C7.89052 24.7935 8.52369 24.7935 8.91421 24.4029L7.5 22.9887ZM13.5962 24.082L14.5862 23.9406L14.5862 23.9406L13.5962 24.082ZM18.7581 20.6172L19.748 20.4758L18.7581 20.6172ZM5.95943 16.4453L6.10085 15.4553L6.10085 15.4553L5.95943 16.4453ZM9.42426 11.2834L9.28283 12.2733L9.28283 12.2733L9.42426 11.2834ZM12.9271 19.4532L10.5883 17.1143L9.17405 18.5286L11.5129 20.8674L12.9271 19.4532ZM20.5704 15.1289C18.7106 17.1341 15.6728 18.8048 13.9507 19.6491L14.8311 21.4449C16.5739 20.5905 19.9063 18.786 22.0368 16.4889L20.5704 15.1289ZM10.3924 16.0908C11.2366 14.3687 12.9073 11.3308 14.9126 9.47103L13.5526 8.00464C11.2555 10.1351 9.45097 13.4676 8.59656 15.2104L10.3924 16.0908ZM23.6694 7.14264C23.3664 9.46004 22.5657 12.9776 20.5704 15.1289L22.0368 16.4889C24.4895 13.8444 25.3433 9.76695 25.6526 7.402L23.6694 7.14264ZM14.9126 9.47103C17.0639 7.4758 20.5814 6.6751 22.8988 6.37202L22.6395 4.38891C20.2745 4.69821 16.1971 5.55195 13.5526 8.00464L14.9126 9.47103ZM25.6526 7.402C25.8849 5.62531 24.4162 4.15654 22.6395 4.38891L22.8988 6.37202C23.373 6.31001 23.7315 6.6685 23.6694 7.14264L25.6526 7.402ZM10.5883 17.1143C10.2959 16.8219 10.234 16.4138 10.3924 16.0908L8.59656 15.2104C8.03839 16.349 8.31549 17.67 9.17405 18.5286L10.5883 17.1143ZM11.5129 20.8674C12.3715 21.726 13.6925 22.0031 14.8311 21.4449L13.9507 19.6491C13.6277 19.8074 13.2195 19.7456 12.9271 19.4532L11.5129 20.8674ZM6.79289 19.4532L3.96447 22.2816L5.37868 23.6958L8.20711 20.8674L6.79289 19.4532ZM8.91421 21.5745L7.5 22.9887L8.91421 24.4029L10.3284 22.9887L8.91421 21.5745ZM16.0004 9.79845C14.8288 10.97 14.8288 12.8695 16.0004 14.0411L17.4146 12.6269C17.0241 12.2364 17.0241 11.6032 17.4146 11.2127L16.0004 9.79845ZM16.0004 14.0411C17.1719 15.2127 19.0714 15.2127 20.243 14.0411L18.8288 12.6269C18.4383 13.0174 17.8051 13.0174 17.4146 12.6269L16.0004 14.0411ZM20.243 14.0411C21.4146 12.8695 21.4146 10.97 20.243 9.79845L18.8288 11.2127C19.2193 11.6032 19.2193 12.2364 18.8288 12.6269L20.243 14.0411ZM20.243 9.79845C19.0714 8.62688 17.1719 8.62688 16.0004 9.79845L17.4146 11.2127C17.8051 10.8221 18.4383 10.8221 18.8288 11.2127L20.243 9.79845ZM17.7681 20.7586L14.5862 23.9406L16.0004 25.3548L19.1824 22.1728L17.7681 20.7586ZM14.5862 23.9406L14.1619 20.9707L12.182 21.2536L12.6063 24.2234L14.5862 23.9406ZM17.4853 18.7787L17.7681 20.7586L19.748 20.4758L19.4652 18.4959L17.4853 18.7787ZM14.5862 23.9406L12.6063 24.2234C12.8393 25.855 14.835 26.5202 16.0004 25.3548L14.5862 23.9406ZM19.1824 22.1728C19.6275 21.7277 19.8371 21.099 19.748 20.4758L17.7681 20.7586L17.7681 20.7586L19.1824 22.1728ZM7.86862 10.8591L4.68664 14.0411L6.10085 15.4553L9.28283 12.2733L7.86862 10.8591ZM5.81801 17.4352L8.78786 17.8595L9.0707 15.8796L6.10085 15.4553L5.81801 17.4352ZM11.5456 10.5763L9.56568 10.2934L9.28283 12.2733L11.2627 12.5562L11.5456 10.5763ZM4.68664 14.0411C3.52126 15.2065 4.18649 17.2022 5.81801 17.4352L6.10085 15.4553L6.10085 15.4553L4.68664 14.0411ZM9.28283 12.2733L9.56568 10.2934C8.94249 10.2044 8.31375 10.414 7.86862 10.8591L9.28283 12.2733Z", fill: "currentColor" }) });
          }, {}),
        },
        {
          path: "/stake",
          name: "Stake REN",
          icon: (0, i.jsx)(function (e) {
            return (0,
            i.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", ...e, children: [(0, i.jsx)("path", { d: "M24.0002 13.2C24.0002 13.2187 23.9939 13.2437 23.9939 13.2624C23.4703 18.9654 18.8904 23.4128 13.3137 23.9875C13.2759 23.9937 13.238 23.9937 13.2002 24L24.0002 13.2Z", fill: "currentColor" }), (0, i.jsx)("path", { d: "M17.5638 1.22783C17.257 1.08151 16.9438 0.941552 16.6242 0.820677C16.0043 0.578928 15.3523 0.388072 14.6876 0.254473C13.8887 0.0890656 13.0578 0 12.2077 0C11.7987 0 11.396 0.019087 10.9933 0.057258C8.1811 0.330817 5.65645 1.55865 3.73262 3.40358L3.72623 3.40994C3.5984 3.53718 3.47057 3.66442 3.34274 3.79165L3.33635 3.79801C1.50199 5.72565 0.294005 8.25766 0.0447372 11.0632C0.0127798 11.4195 0 11.7821 0 12.1447C0 13.0545 0.102264 13.9388 0.287617 14.7849C0.428229 15.4274 0.626364 16.0573 0.86924 16.6553C1.00346 16.9861 1.15047 17.3105 1.31025 17.6286C1.59148 18.1757 1.91105 18.7038 2.26898 19.2L4.27589 17.1833L17.1931 4.19881L19.2 2.18211C18.6823 1.82584 18.139 1.50775 17.5638 1.22783ZM3.08708 14.435C3.06791 14.3523 3.04873 14.2696 3.02956 14.1869V14.1805C2.88255 13.5189 2.80585 12.8318 2.80585 12.1447C2.80585 9.73996 3.70705 7.47515 5.35606 5.73837L5.36245 5.73201L5.69481 5.39483L5.7012 5.38847C7.45885 3.70259 9.76618 2.78012 12.2141 2.78012C12.8597 2.78012 13.5052 2.84374 14.1316 2.97097C14.2274 2.99006 14.3233 3.01551 14.4256 3.03459L3.08708 14.435Z", fill: "currentColor" }), (0, i.jsx)("path", { d: "M7.98035 23.4C7.68382 23.2936 7.39359 23.1685 7.10337 23.0433C6.51031 22.7742 5.94249 22.455 5.3999 22.092L22.056 5.40002C22.4157 5.91324 22.7374 6.464 23.0087 7.03354C23.1538 7.3277 23.28 7.63438 23.3999 7.94105L7.98035 23.4Z", fill: "currentColor" })] });
          }, {}),
        },
        {
          path: "/governance",
          name: "Governance",
          icon: (0, i.jsx)(function (e) {
            return (0,
            i.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", ...e, children: [(0, i.jsx)("path", { d: "M17.64 14.97C16.71 14.79 16 13.98 16 13C16 12.86 16.02 12.71 16.05 12.58C14.99 11.6 13.57 11 12 11C10.43 11 9.01003 11.6 7.95003 12.58C7.98003 12.71 8.00003 12.86 8.00003 13C8.00003 13.98 7.29003 14.79 6.36003 14.97C6.35003 14.99 6.34003 15 6.34003 15.02C8.39003 15.19 10 16.9 10 19H14C14 16.9 15.61 15.19 17.66 15.02C17.66 15 17.65 14.99 17.64 14.97Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", strokeLinecap: "round", strokeLinejoin: "round" }), (0, i.jsx)("path", { d: "M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", strokeLinecap: "round", strokeLinejoin: "round" }), (0, i.jsx)("path", { d: "M18 15C15.79 15 14 16.79 14 19C14.01 19 22 19 22 19C22 16.79 20.21 15 18 15Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", strokeLinecap: "round", strokeLinejoin: "round" }), (0, i.jsx)("path", { d: "M18 15C19.1046 15 20 14.1046 20 13C20 11.8954 19.1046 11 18 11C16.8954 11 16 11.8954 16 13C16 14.1046 16.8954 15 18 15Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", strokeLinecap: "round", strokeLinejoin: "round" }), (0, i.jsx)("path", { d: "M6 15C3.79 15 2 16.79 2 19C2.01 19 10 19 10 19C10 16.79 8.21 15 6 15Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", strokeLinecap: "round", strokeLinejoin: "round" }), (0, i.jsx)("path", { d: "M6 15C7.10457 15 8 14.1046 8 13C8 11.8954 7.10457 11 6 11C4.89543 11 4 11.8954 4 13C4 14.1046 4.89543 15 6 15Z", stroke: "currentColor", strokeWidth: "2", strokeMiterlimit: "10", strokeLinecap: "round", strokeLinejoin: "round" })] });
          }, {}),
        },
      ];
      function d(e) {
        let t = e.chainId,
          n = e.address;
        return e.symbol === r.Wr.ezETH
          ? "/ezeth"
          : e.symbol === r.Wr.pzETH ||
            e.symbol === r.Wr.stETH ||
            e.symbol === r.Wr.wstETH
          ? "/pzeth"
          : e.symbol === r.Wr.ezSOL ||
            e.symbol === r.Wr.JitoSOL ||
            e.symbol === r.Wr.SOL
          ? "/ezsol"
          : "/ezeth?fromChainId=".concat(t, "&fromToken=").concat(n);
      }
      function c(e) {
        return e ? "/restaking/".concat(e) : "/restaking";
      }
      function l() {
        return "/restaking/ezeigen";
      }
    },
    387: function (e, t, n) {
      "use strict";
      n.d(t, {
        H5: function () {
          return L;
        },
        J_: function () {
          return v;
        },
        TV: function () {
          return E;
        },
        Wr: function () {
          return x.W;
        },
        m0: function () {
          return j;
        },
        p8: function () {
          return m;
        },
        zA: function () {
          return g;
        },
      });
      var i = n(73074),
        a = n(2946),
        s = n(85438),
        r = n(14590),
        o = n(87781),
        d = n(96415),
        c = n(53877),
        l = n(30553),
        u = n(13923),
        h = n(30805),
        f = n(93486),
        p = n(36653),
        C = n(54288),
        x = n(54601),
        A = n(21517),
        b = n(88262);
      let m = 18,
        g = "0xd4fcde9bb1d746dd7e5463b01dd819ee06af25db",
        E = {
          [x.W.ETH]: {
            chainType: C.J.EVM,
            name: "Ethereum",
            symbol: x.W.ETH,
            icon: { auto: "/tokens/ETH.svg" },
            supportedChains: {
              [A.p5.mainnet.id]: { address: p.r_, chainId: A.p5.mainnet.id },
              [A.p5.arbitrum.id]: {
                address: p.r_,
                chainId: A.p5.arbitrum.id,
                isDepositable: !1,
              },
              [A.p5.bsc.id]: {
                address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
                chainId: A.p5.bsc.id,
                isDepositable: !1,
              },
              [A.p5.mode.id]: {
                address: p.r_,
                chainId: A.p5.mode.id,
                isDepositable: !1,
              },
              [A.p5.linea.id]: {
                address: p.r_,
                chainId: A.p5.linea.id,
                isDepositable: !1,
              },
              [A.p5.base.id]: {
                address: p.r_,
                chainId: A.p5.base.id,
                isDepositable: !1,
              },
              [A.p5.optimismGoerli.id]: {
                address: p.r_,
                chainId: A.p5.optimismGoerli.id,
              },
              [A.p5.holesky.id]: { address: p.r_, chainId: A.p5.holesky.id },
            },
            decimals: m,
          },
          [x.W.WETH]: {
            chainType: C.J.EVM,
            name: "Wrapped ETH",
            symbol: x.W.WETH,
            icon: { auto: "/tokens/ETH.svg" },
            supportedChains: {
              [A.p5.mainnet.id]: {
                address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                chainId: A.p5.mainnet.id,
                isDepositable: !1,
              },
              [A.p5.arbitrum.id]: {
                address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
                chainId: A.p5.arbitrum.id,
                isDepositable: !1,
              },
              [A.p5.mode.id]: {
                address: "0x4200000000000000000000000000000000000006",
                chainId: A.p5.mode.id,
                isDepositable: !1,
              },
              [A.p5.linea.id]: {
                address: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
                chainId: A.p5.linea.id,
                isDepositable: !1,
              },
              [A.p5.base.id]: {
                address: "0x4200000000000000000000000000000000000006",
                chainId: A.p5.base.id,
                isDepositable: !1,
              },
              [A.p5.optimismGoerli.id]: {
                address: "0x74c6fd7d2bc6a8f0ebd7d78321a95471b8c2b806",
                chainId: A.p5.optimismGoerli.id,
              },
            },
            decimals: m,
          },
          [x.W.wBETH]: {
            chainType: C.J.EVM,
            name: "Binance Staked Ether",
            symbol: x.W.wBETH,
            icon: { auto: "/tokens/wbETH.webp" },
            supportedChains: {
              [A.p5.mainnet.id]: {
                address: "0xa2e3356610840701bdf5611a53974510ae27e2e1",
                chainId: A.p5.mainnet.id,
              },
            },
            decimals: m,
          },
          [x.W.wstETH]: {
            chainType: C.J.EVM,
            name: "Wrapped Liquid Staked Ether 2.0",
            symbol: x.W.wstETH,
            icon: { auto: "/tokens/wstETH.png" },
            supportedChains: {
              [A.p5.mainnet.id]: {
                address: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
                chainId: A.p5.mainnet.id,
              },
            },
            decimals: m,
          },
          [x.W.stETH]: {
            chainType: C.J.EVM,
            name: "Lido Staked Ether",
            symbol: x.W.stETH,
            icon: { auto: "/tokens/stEth.svg" },
            supportedChains: {
              [A.p5.mainnet.id]: {
                address: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
                chainId: A.p5.mainnet.id,
              },
              [A.p5.holesky.id]: {
                address: "0x3F1c547b21f65e10480dE3ad8E19fAAC46C95034",
                chainId: A.p5.holesky.id,
              },
            },
            decimals: m,
          },
          [x.W.rETH]: {
            chainType: C.J.EVM,
            name: "Rocketpool Staked ETH",
            symbol: x.W.rETH,
            icon: { auto: "/tokens/rETH.svg" },
            supportedChains: {
              [A.p5.mainnet.id]: {
                address: "0xae78736Cd615f374D3085123A210448E74Fc6393",
                chainId: A.p5.mainnet.id,
              },
              [A.p5.holesky.id]: { address: "0x", chainId: A.p5.holesky.id },
            },
            decimals: m,
          },
          [x.W.ezETH]: {
            chainType: C.J.EVM,
            name: "Reno Restaked ETH",
            symbol: x.W.ezETH,
            icon: { light: r.default, dark: s.default },
            supportedChains: {
              [A.p5.mainnet.id]: {
                address: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
                chainId: A.p5.mainnet.id,
              },
              [A.p5.arbitrum.id]: {
                address: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: A.p5.arbitrum.id,
              },
              [A.p5.bsc.id]: {
                address: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: A.p5.bsc.id,
              },
              [A.p5.mode.id]: {
                address: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: A.p5.mode.id,
              },
              [A.p5.linea.id]: {
                address: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: A.p5.linea.id,
              },
              [A.p5.blast.id]: {
                address: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: A.p5.blast.id,
                isDepositable: !1,
              },
              [A.p5.base.id]: {
                address: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: A.p5.base.id,
              },
              [A.p5.optimism.id]: {
                address: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                chainId: A.p5.optimism.id,
              },
              [A.p5.holesky.id]: {
                address: "0x24E7a478Bb83d38059e2bc76b52334Ca99c00C77",
                chainId: A.p5.holesky.id,
              },
              [A.p5.optimismGoerli.id]: {
                address: "0xe60eeeee9503d59c7db940889228faceb0af5df2",
                chainId: A.p5.optimismGoerli.id,
              },
            },
            decimals: m,
          },
          [x.W.pzETH]: {
            chainType: C.J.EVM,
            name: "Reno Restaked wstETH",
            symbol: x.W.pzETH,
            icon: { light: h.default, dark: u.default },
            supportedChains: {
              [A.p5.mainnet.id]: {
                address: "0x8c9532a60E0E7C6BbD2B2c1303F63aCE1c3E9811",
                chainId: A.p5.mainnet.id,
              },
              [A.p5.holesky.id]: { address: "0x", chainId: A.p5.holesky.id },
            },
            decimals: m,
          },
          [x.W.REN]: {
            chainType: C.J.EVM,
            name: "Reno",
            symbol: x.W.REN,
            icon: {
              light: "/tokens/rez-light.svg",
              dark: "/tokens/rez-dark.svg",
            },
            supportedChains: {
              [A.p5.mainnet.id]: {
                address: "0xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                chainId: A.p5.mainnet.id,
                isDepositable: !1,
              },
              [A.p5.holesky.id]: { address: "0x", chainId: A.p5.holesky.id },
            },
            decimals: m,
          },
          [x.W.EIGEN]: {
            chainType: C.J.EVM,
            name: "EigenLayer",
            symbol: x.W.EIGEN,
            icon: { auto: "/tokens/eigen.svg" },
            supportedChains: {
              [A.p5.mainnet.id]: {
                address: "0xec53bf9167f50cdeb3ae105f56099aaab9061f83",
                chainId: A.p5.mainnet.id,
                isDepositable: !1,
              },
              [A.p5.holesky.id]: { address: "0x", chainId: A.p5.holesky.id },
            },
            decimals: m,
          },
          [x.W.SOL]: {
            chainType: C.J.Solana,
            name: "Solana",
            symbol: x.W.SOL,
            icon: { auto: "/tokens/sol.png" },
            supportedChains: {
              [A.p5.solanaMainnet.id]: {
                address: f.GK,
                chainId: A.p5.solanaMainnet.id,
              },
            },
            decimals: f.Ey,
          },
          [x.W.JitoSOL]: {
            chainType: C.J.Solana,
            name: "Jito Staked SOL",
            symbol: x.W.JitoSOL,
            icon: { auto: "/tokens/jitoSOL.svg" },
            supportedChains: {
              [A.p5.solanaMainnet.id]: {
                address: "J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn",
                chainId: A.p5.solanaMainnet.id,
              },
              [A.p5.solanaDevnet.id]: {
                address: "7nVGRMDvUNLMeX6RLCo4qNSUEhSwW7k8wVQ7a8u1GFAp",
                chainId: A.p5.solanaDevnet.id,
              },
              [A.p5.solanaTestnet.id]: {
                address: "5ghwTwPwYYeRK9RYKe2aVLquwWVk3pmxnnfPkg6P7Nff",
                chainId: A.p5.solanaTestnet.id,
              },
            },
            decimals: f.Ey,
          },
          [x.W.ezSOL]: {
            chainType: C.J.Solana,
            name: "Reno Restaked SOL",
            symbol: x.W.ezSOL,
            icon: { light: d.default, dark: o.default },
            supportedChains: {
              [A.p5.solanaMainnet.id]: {
                address: "ezSoL6fY1PVdJcJsUpe5CM3xkfmy3zoVCABybm5WtiC",
                chainId: A.p5.solanaMainnet.id,
              },
              [A.p5.solanaDevnet.id]: {
                address: "ezsoLxShM7j7kmeBWNg8rxrVtSWh16EFNRPVVm3TqP3",
                chainId: A.p5.solanaDevnet.id,
              },
              [A.p5.solanaTestnet.id]: {
                address: "So11111111111111111111111111111111111111112",
                chainId: A.p5.solanaTestnet.id,
              },
            },
            decimals: f.Ey,
          },
          [x.W.USDC]: {
            chainType: C.J.EVM,
            name: "USD Coin",
            symbol: x.W.USDC,
            icon: { auto: "/tokens/usdc.png" },
            supportedChains: {
              [A.p5.mainnet.id]: {
                address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                chainId: A.p5.mainnet.id,
                isDepositable: !1,
              },
              [A.p5.holesky.id]: { address: "0x", chainId: A.p5.holesky.id },
            },
            decimals: m,
          },
          [x.W.ezUSDC]: {
            chainType: C.J.Solana,
            name: "Restaked USD Coin",
            symbol: x.W.ezUSDC,
            icon: { light: l.default, dark: c.default },
            supportedChains: {
              [A.p5.solanaMainnet.id]: {
                address: "0x",
                chainId: A.p5.solanaMainnet.id,
                isDepositable: !1,
              },
            },
            decimals: f.Ey,
          },
          [x.W.ezRstETH]: {
            chainType: C.J.EVM,
            name: "EZ Restaked stETH",
            symbol: x.W.ezRstETH,
            icon: { auto: "/tokens/stEth.svg" },
            supportedChains: {
              [A.p5.mainnet.id]: {
                address: "0x",
                chainId: A.p5.mainnet.id,
                isDepositable: !1,
              },
              [A.p5.holesky.id]: {
                address: "0x47431dFDB8a94Eb598ad23A39E168B92D6f889bB",
                chainId: A.p5.holesky.id,
              },
            },
            decimals: m,
          },
          [x.W.ezREZ]: {
            chainType: C.J.EVM,
            name: "Restaked REN",
            symbol: x.W.ezREZ,
            icon: {
              light: "/tokens/rez-light.svg",
              dark: "/tokens/rez-dark.svg",
            },
            supportedChains: {
              [A.p5.mainnet.id]: {
                address: "0x77B1183e730275f6A8024Ce53d54bcC12B368f60",
                chainId: A.p5.mainnet.id,
                isDepositable: !1,
              },
              [A.p5.holesky.id]: { address: "0x", chainId: A.p5.holesky.id },
            },
            decimals: m,
          },
          [x.W.ezEIGEN]: {
            chainType: C.J.EVM,
            name: "Restaked EIGEN",
            symbol: x.W.ezEIGEN,
            icon: { light: a.default, dark: i.default },
            supportedChains: {
              [A.p5.mainnet.id]: {
                address: g,
                chainId: A.p5.mainnet.id,
                isDepositable: !1,
              },
              [A.p5.holesky.id]: { address: "0x", chainId: A.p5.holesky.id },
            },
            decimals: m,
          },
        },
        v = Object.values(E).filter((e) => e.chainType === C.J.Solana);
      Object.values(E).filter((e) => e.chainType === C.J.EVM);
      let w = Object.values(b.m3)
          .map((e) => e.chain)
          .reduce(
            (e, t) => (
              (e[t.id] = {
                id: t.id,
                name: t.name,
                chainType: C.J.EVM,
                chain: t,
              }),
              e
            ),
            {}
          ),
        k = { [A.p5.fraxtal.id]: A.p5.fraxtal },
        L = Object.values(
          Object.values(E)
            .filter((e) => e.chainType === C.J.EVM)
            .reduce(
              (e, t) => {
                for (let n in t.supportedChains) e[n] = A.JP[Number(n)];
                return e;
              },
              { ...w, ...k }
            )
        ).map((e) => e.chain);
      function j(e) {
        return e === x.W.ETH || e === x.W.WETH || Date.now() / 1e3 > 1713283200;
      }
    },
    93486: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ey: function () {
          return r;
        },
        GK: function () {
          return a;
        },
        M7: function () {
          return o;
        },
        Nr: function () {
          return i;
        },
        of: function () {
          return s;
        },
      });
      let i = "So11111111111111111111111111111111111111112",
        a = "11111111111111111111111111111111",
        s = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        r = 9,
        o = 1731936600;
    },
    3174: function (e, t, n) {
      "use strict";
      n.d(t, {
        Y: function () {
          return a;
        },
      });
      var i = n(2265);
      function a() {
        let [e, t] = (0, i.useState)(!1),
          n = (0, i.useRef)(null);
        return {
          copy: function (e) {
            navigator.clipboard
              .writeText(e)
              .then(async () => {
                t(!0),
                  n.current && clearTimeout(n.current),
                  (n.current = setTimeout(() => {
                    t(!1), (n.current = null);
                  }, 2e3));
              })
              .catch(() => null);
          },
          hasCopied: e,
        };
      }
    },
    13962: function (e, t, n) {
      "use strict";
      n.d(t, {
        t: function () {
          return a;
        },
      });
      var i = n(2265);
      function a() {
        let [e, t] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            t(!0);
          }, []),
          e
        );
      }
    },
    59067: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return d;
        },
        y: function () {
          return o;
        },
      });
      var i = n(57437),
        a = n(2265),
        s = n(21517);
      let r = (0, a.createContext)(void 0);
      function o(e) {
        let { children: t } = e,
          n = (function () {
            let [e, t] = (0, a.useState)("mainnet"),
              [n, i] = (0, a.useState)("devnet"),
              r = s.p5.solanaMainnet.id;
            "development" === e &&
              (r =
                "devnet" === n ? s.p5.solanaDevnet.id : s.p5.solanaTestnet.id);
            let [o, d] = (0, a.useState)(void 0);
            return {
              solanaChainId: r,
              solanaCustomEndpoint: o,
              setSolanaCustomEndpoint: d,
              deploymentEnvironment: e,
              setDeploymentEnvironment: t,
              developmentChainType: n,
              setDevelopmentChainType: i,
            };
          })();
        return (0, i.jsx)(r.Provider, { value: n, children: t });
      }
      function d() {
        let e = (0, a.useContext)(r);
        if (void 0 === e)
          throw Error("useNetwork must be used within a NetworkProvider");
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
          return r;
        },
      });
      var i = n(57437),
        a = n(2265);
      let s = (0, a.createContext)(void 0);
      function r(e) {
        let { children: t } = e,
          n = (function () {
            let [e, t] = (0, a.useState)(!1),
              [n, i] = (0, a.useState)(!1),
              s = (0, a.useCallback)(() => t(!0), []);
            return {
              evmWalletDialogOpen: e,
              openEVMWalletDialog: s,
              closeEVMWalletDialog: (0, a.useCallback)(() => t(!1), []),
              setEVMWalletDialogOpen: t,
              solanaWalletDialogOpen: n,
              openSolanaWalletDialog: (0, a.useCallback)(() => i(!0), []),
              closeSolanaWalletDialog: (0, a.useCallback)(() => i(!1), []),
            };
          })();
        return (0, i.jsx)(s.Provider, { value: n, children: t });
      }
      function o() {
        let e = (0, a.useContext)(s);
        if (void 0 === e)
          throw Error(
            "useWalletDialog must be used within a WalletDialogProvider"
          );
        return e;
      }
    },
    67750: function (e, t, n) {
      "use strict";
      n.d(t, {
        Q: function () {
          return l;
        },
        $: function () {
          return u;
        },
      });
      var i = n(57437),
        a = n(2265),
        s = n(26735),
        r = n(28782),
        o = n(88262),
        d = n(59067);
      let c = (0, a.createContext)(void 0);
      function l(e) {
        let { children: t } = e,
          n = (function () {
            var e, t, n;
            let i = (0, s.useAccount)(),
              c = (function () {
                let {
                    publicKey: e,
                    connected: t,
                    connecting: n,
                    disconnect: i,
                    disconnecting: a,
                    wallet: s,
                    signTransaction: o,
                    signMessage: d,
                    sendTransaction: c,
                  } = (0, r.O)(),
                  l = null == e ? void 0 : e.toBase58();
                return {
                  publicKey: e,
                  userAddress: l,
                  isConnecting: n,
                  isConnected: !!(e && s && t),
                  isDisconnect: i,
                  isDisconnecting: a,
                  disconnect: i,
                  signTransaction: o,
                  signMessage: d,
                  sendTransaction: c,
                };
              })(),
              { solanaChainId: l, deploymentEnvironment: u } = (0, d.L)(),
              [h, f] = (0, a.useState)(),
              [p, C] = (0, a.useState)(),
              x = null != h ? h : i.address,
              A = null != p ? p : c.userAddress,
              b = "mainnet" === u,
              m = b ? o.t : o.rh,
              g = m.chain.id,
              E = i.isConnected || c.isConnected,
              v = i.isConnecting || c.isConnecting;
            return {
              deployment: m,
              deploymentChainId: g,
              userChainId:
                null === (e = i.chain) || void 0 === e ? void 0 : e.id,
              isAppOnMainnet: b,
              account: { ...i, address: x },
              user: { isConnected: E, isConnecting: v },
              evm: {
                evmChainId: g,
                account: {
                  ...i,
                  userAddress: x,
                  userChainId:
                    null === (t = i.chain) || void 0 === t ? void 0 : t.id,
                  isUserChainMatch:
                    (null === (n = i.chain) || void 0 === n ? void 0 : n.id) ===
                    g,
                },
              },
              solana: {
                solanaChainId: l,
                account: { ...c, userAddress: A, userChainId: l },
              },
              impersonatedEVMAddress: h,
              setImpersonatedEVMAddress: f,
              impersonatedSolAddress: p,
              setImpersonatedSolAddress: C,
            };
          })();
        return (0, i.jsx)(c.Provider, { value: n, children: t });
      }
      function u() {
        let e = (0, a.useContext)(c);
        if (void 0 === e)
          throw Error("useWeb3 must be used within a Web3Provider");
        return e;
      }
    },
    54288: function (e, t, n) {
      "use strict";
      var i, a;
      n.d(t, {
        J: function () {
          return i;
        },
      }),
        ((a = i || (i = {})).EVM = "evm"),
        (a.Solana = "solana");
    },
    54601: function (e, t, n) {
      "use strict";
      var i, a;
      n.d(t, {
        W: function () {
          return i;
        },
      }),
        ((a = i || (i = {})).ETH = "ETH"),
        (a.ezETH = "ezETH"),
        (a.ezSOL = "ezSOL"),
        (a.stETH = "stETH"),
        (a.rETH = "rETH"),
        (a.WETH = "WETH"),
        (a.wBETH = "wBETH"),
        (a.REN = "REN"),
        (a.EIGEN = "EIGEN"),
        (a.pzETH = "pzETH"),
        (a.wstETH = "wstETH"),
        (a.rswETH = "rswETH"),
        (a.weETH = "weETH"),
        (a.JitoSOL = "JitoSOL"),
        (a.USDC = "USDC"),
        (a.ezUSDC = "ezUSDC"),
        (a.ezRstETH = "ezRstETH"),
        (a.ezREZ = "ezREZ"),
        (a.ezEIGEN = "ezEIGEN"),
        (a.SOL = "SOL");
    },
    94781: function (e, t, n) {
      "use strict";
      n.d(t, {
        BV: function () {
          return r;
        },
        Xn: function () {
          return s;
        },
        gb: function () {
          return a;
        },
      });
      var i = n(45429);
      function a(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15;
        return e.length > t ? "".concat(e.slice(0, t), "...") : e;
      }
      function s(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4;
        return "".concat(e.slice(0, t), "...").concat(e.slice(e.length - n));
      }
      function r(e) {
        try {
          return new i.PublicKey(e), !0;
        } catch (e) {
          return !1;
        }
      }
    },
    16349: function (e, t, n) {
      "use strict";
      n.d(t, {
        cn: function () {
          return s;
        },
      });
      var i = n(44839),
        a = n(96164);
      function s() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, a.m6)((0, i.W)(...t));
      }
    },
    36653: function (e, t, n) {
      "use strict";
      n.d(t, {
        BB: function () {
          return r;
        },
        M4: function () {
          return o;
        },
        r_: function () {
          return a;
        },
        xb: function () {
          return s;
        },
      });
      var i = n(93486);
      let a = "0x0000000000000000000000000000000000000000",
        s = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
      function r(e) {
        let t = e.toLowerCase();
        return t === a || t === i.GK;
      }
      function o(e, t) {
        return "".concat(e.toLowerCase(), ":").concat(t);
      }
    },
    87704: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/arbitrum.3b07ebef.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    57780: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/base.25904184.svg",
          height: 46,
          width: 46,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    18527: function (e, t, n) {
      "use strict";
      n.r(t),
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
    21198: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/bnb.148bfba4.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    13926: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/ethereum.16f30881.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    10772: function (e, t, n) {
      "use strict";
      n.r(t),
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
    97032: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/linea.ad53cc4a.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    24032: function (e, t, n) {
      "use strict";
      n.r(t),
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
    83134: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/optimism.12991ae7.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    34269: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/solana.e7465188.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    73074: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/ezEIGEN-dark.7d0a4a08.svg",
          height: 100,
          width: 100,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    2946: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/ezEIGEN-light.422ba25e.svg",
          height: 100,
          width: 100,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    85438: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/ezETH-dark.5e60f776.svg",
          height: 92,
          width: 92,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    14590: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/ezETH-light.eba02ef8.svg",
          height: 101,
          width: 100,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    87781: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/ezSOL-dark.84a7cab3.svg",
          height: 96,
          width: 96,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    96415: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/ezSOL-light.4eacd845.svg",
          height: 96,
          width: 96,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    53877: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/ezUSDC-dark.d67c7056.svg",
          height: 96,
          width: 96,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    30553: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/ezUSDC-light.d6175794.svg",
          height: 96,
          width: 96,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    13923: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/pzETH-dark.62bda7e9.svg",
          height: 92,
          width: 92,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    30805: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/pzETH-light.da45316c.svg",
          height: 101,
          width: 100,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
  },
  function (e) {
    e.O(
      0,
      [3814, 1391, 4630, 1294, 1485, 7138, 2361, 2782, 2971, 7023, 1744],
      function () {
        return e((e.s = 85007));
      }
    ),
      (_N_E = e.O());
  },
]);
