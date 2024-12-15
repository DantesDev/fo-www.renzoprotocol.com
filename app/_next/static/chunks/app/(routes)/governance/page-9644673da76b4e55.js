(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [215],
  {
    60828: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 4283)),
        Promise.resolve().then(n.bind(n, 22752)),
        Promise.resolve().then(n.bind(n, 33736));
    },
    4283: function (e, t, n) {
      "use strict";
      n.d(t, {
        GovernanceProvider: function () {
          return f;
        },
        c: function () {
          return g;
        },
        q: function () {
          return r;
        },
      });
      var a,
        r,
        s = n(57437),
        l = n(2265),
        i = n(67750),
        o = n(22721),
        d = n(36653),
        c = n(88262),
        u = n(70096);
      ((a = r || (r = {}))[(a.Delegate = 0)] = "Delegate"),
        (a[(a.WaitingForSignature = 1)] = "WaitingForSignature"),
        (a[(a.Delegating = 2)] = "Delegating"),
        (a[(a.Success = 3)] = "Success");
      let x = (0, l.createContext)(void 0);
      function f(e) {
        let { children: t } = e,
          n = (function () {
            let {
                account: { address: e },
                deploymentChainId: t,
              } = (0, i.$)(),
              [n, a] = (0, l.useState)(!1),
              [r, s] = (0, l.useState)(0),
              x = c.m3[u.F.chainId].addresses.rezStaker,
              { data: f } = o.o.stake.activeStake.useQuery(
                { userAddress: e, stakerAddress: x, chainId: u.F.chainId },
                { enabled: null != e }
              ),
              { data: g, isLoading: h } =
                o.o.onchain.ERC20TokenBalance.useQuery(
                  {
                    userAddress: e,
                    tokenAddress: u.F.address,
                    chainId: u.F.chainId,
                  },
                  { enabled: null != e }
                ),
              {
                data: m,
                refetch: p,
                isLoading: v,
              } = o.o.rez.votes.useQuery(
                { userAddress: e, chainId: u.F.chainId },
                { enabled: null != e }
              ),
              {
                data: b,
                refetch: A,
                isLoading: w,
              } = o.o.rez.delegates.useQuery(
                { userAddress: e, chainId: u.F.chainId },
                { enabled: null != e }
              ),
              {
                data: j,
                refetch: N,
                isLoading: C,
              } = o.o.rezVesting.votes.useQuery(
                { userAddress: e, chainId: t },
                { enabled: null != e }
              ),
              {
                data: y,
                refetch: k,
                isLoading: V,
              } = o.o.rezVesting.votingPower.useQuery(
                { userAddress: e, chainId: t },
                { enabled: null != e }
              ),
              {
                data: F,
                refetch: E,
                isLoading: z,
              } = o.o.rezVesting.delegates.useQuery(
                { userAddress: e, chainId: t },
                { enabled: null != e }
              ),
              R = (0, l.useMemo)(() => {
                let e = BigInt(f || 0n) + BigInt(m || 0n),
                  t = BigInt(j || 0n);
                return { wallet: e, vestingContract: t, total: e + t };
              }, [f, m, j]),
              D = (0, l.useMemo)(() => {
                let t =
                    b && b !== d.r_ && e
                      ? 0n
                      : (null == g ? void 0 : g.value) || 0n,
                  n = F && F !== d.r_ && e ? 0n : y || 0n;
                return { wallet: t, vestingContract: n, total: t + n };
              }, [e, b, g, F, y]),
              S = !!y && y > 0n;
            return {
              isGovernanceDialogOpen: n,
              setIsGovernanceDialogOpen: a,
              delegateState: r,
              setDelegateState: s,
              votingPower: R,
              rezBalance: null == g ? void 0 : g.value,
              availableToDelegate: D,
              isLoading: h || v || w || C || V || z,
              wallet: {
                delegatedTo: b,
                refetchVotes: p,
                refetchDelegatedTo: A,
                isLoadingDelegatedTo: w,
                isLoadingVotes: v,
              },
              vestingContract: {
                votes: j,
                votingPower: y,
                hasVestingPower: S,
                delegatedTo: F,
                refetchVotes: N,
                refetchVotingPower: k,
                refetchDelegatedTo: E,
                isLoadingDelegatedTo: z,
                isLoadingVotingPower: V,
                isLoadingVotes: C,
              },
            };
          })();
        return (0, s.jsx)(x.Provider, { value: n, children: t });
      }
      function g() {
        let e = (0, l.useContext)(x);
        if (void 0 === e)
          throw Error("useGovernance must be used within a GovernanceProvider");
        return e;
      }
    },
    22752: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VotingPower: function () {
            return D;
          },
        });
      var a = n(57437),
        r = n(66648),
        s = {
          src: "/_next/static/media/governance-logo.1edeca37.png",
          height: 500,
          width: 500,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEUAAAAGBwNpezErLxkgKAxXZycWGgmGmUJ2hztgbi+eslCYI8PXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nEWKyQ0AMAjDCDfsP3AFPOpPIstEH4hgT0XLrAZXjtK2NF/FxhfDLz4eEvQAgSjrrl0AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        l = n(19859),
        i = n(61517),
        o = n(42921),
        d = n(70096),
        c = n(41218),
        u = n(68641),
        x = n(6359),
        f = n(2265),
        g = {
          src: "/_next/static/media/rocket-dark.ff46137e.png",
          height: 299,
          width: 308,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEVMaXFqeoByhIkxTlRtgY15hY9fcXxfcoApQ0abt61KX2lZcHVXdXxKhIRpjZpDVlw9Y2hri55NYmwhn41CaGwmYVw4iH86rqEvgHZsgJQ6dG/Jrfj6AAAAGnRSTlMAJy3+USqJ/P4H/XeY/dhb1/z2/f37yv3K/uagzYgAAAAJcEhZcwAAFiUAABYlAUlSJPAAAABBSURBVHicHcs3EsAgEMBAAUc4gnPC/3+oB6vaRgDGM9J5mUSB4NzaA5gtpR6jR/IPweZ0tiNaqO9+tzqu8lxF+QBAlAIwQfnVSgAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        h = {
          src: "/_next/static/media/rocket-light.67386a2d.png",
          height: 302,
          width: 316,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEXv7++esrLg6+vy9/f////j5+fK5eDi5ebr7u7f4+Pp6uvT2trU7OXc+/PK2dfs9fTBz8+txcT///+a0MHE9+rq7u6cvba0xsfY35IOAAAAFnRSTlMB/S3+DHjU/j2kXf3+/vzgdfwN/P1MtxA4yQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAD9JREFUeJwVy0cSwCAMALGlGNu01CH//2kG3QUQI1s+yyEZ8O9KycFaCKpq1BaWqlZsrqdPNfD+juF7SSly8wM4agHU/UtKwQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        m = n(95872),
        p = n(67750),
        v = n(36653),
        b = n(90894),
        A = n(46717),
        w = n(64113),
        j = n(61736),
        N = n(82890),
        C = n(34129),
        y = n(37947),
        k = n(37198),
        V = n(16947),
        F = n(4283),
        E = n(92275);
      function z(e) {
        let {
          value: t,
          onChange: n,
          onClickSelf: r,
          placeholder: s,
          disabled: l,
        } = e;
        return (0, a.jsxs)("div", {
          className: "relative",
          children: [
            (0, a.jsx)("div", {
              className:
                "absolute inset-y-0 start-0 flex cursor-pointer items-center ps-3",
              onClick: r,
              children: (0, a.jsx)("span", {
                className:
                  "self-center rounded-2xl border border-[#C4FF61] bg-[#E6F5CA] px-3 py-[3px] text-xs font-semibold uppercase leading-5 dark:text-black",
                children: "SELF",
              }),
            }),
            (0, a.jsx)(E.I, {
              disabled: l,
              type: "search",
              placeholder: s,
              value: t,
              className:
                "bg-container-light dark:bg-container-dark block w-full rounded-lg border border-[#A3A4BF] p-4 ps-[70px] text-sm text-gray-900 focus:ring-blue-500 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-400 dark:focus:ring-blue-500",
              onChange: (e) => {
                n(e.target.value);
              },
            }),
          ],
        });
      }
      function R(e) {
        let {
            account: { address: t },
            deployment: n,
          } = (0, p.$)(),
          {
            delegateState: s,
            setDelegateState: l,
            rezBalance: u,
            wallet: x,
            vestingContract: E,
          } = (0, F.c)(),
          [R, D] = (0, f.useState)(""),
          [S, Z] = (0, f.useState)("wallet"),
          I = "wallet" === S,
          { isOpen: P, onClose: B } = e,
          [L, M] = (0, f.useState)("");
        async function U() {
          if (!(0, w.U)(L)) {
            D("Invalid address format");
            return;
          }
          try {
            l(F.q.WaitingForSignature);
            let e = await (0, b.n)(N.g, {
              address: I ? d.F.address : n.addresses.rezVesting,
              abi: I ? m.E.REN : m.E.REZVesting,
              functionName: "delegate",
              args: [L],
              chainId: n.chain.id,
            });
            l(F.q.Delegating),
              await (0, A.e)(N.g, { chainId: n.chain.id, hash: e }),
              I
                ? (x.refetchVotes(), x.refetchDelegatedTo())
                : (E.refetchVotes(), E.refetchDelegatedTo()),
              l(F.q.Success);
          } catch (e) {
            console.log(e), l(F.q.Delegate);
          }
        }
        let W = (0, f.useMemo)(() => {
            if (I) {
              if (x.delegatedTo)
                return (
                  x.delegatedTo.toLowerCase() ===
                  (null == t ? void 0 : t.toLowerCase())
                );
            } else if (E.delegatedTo)
              return (
                E.delegatedTo.toLowerCase() ===
                (null == t ? void 0 : t.toLowerCase())
              );
            return !1;
          }, [x.delegatedTo, t, E.delegatedTo, I]),
          H = Number(u || 0) > 0,
          T = I ? u : E.votingPower,
          G = I ? x.delegatedTo : E.delegatedTo;
        return (
          (0, f.useEffect)(() => {
            E.hasVestingPower &&
              !E.isLoadingVotingPower &&
              Z(E.hasVestingPower ? "vestingContract" : "wallet");
          }, [E.hasVestingPower, E.isLoadingVotingPower]),
          (0, a.jsx)(C.Vq, {
            open: P,
            onOpenChange: () => {
              M(""), D(""), B(), l(F.q.Delegate);
            },
            children: (0, a.jsx)(C.cZ, {
              className: "sm:w-[550px]",
              position: "right",
              children:
                s == F.q.Success
                  ? (0, a.jsxs)("div", {
                      className:
                        "flex w-full flex-col items-center gap-6 md:mt-20",
                      children: [
                        (0, a.jsx)(r.default, {
                          src: h,
                          alt: "rocket",
                          width: 150,
                          height: 150,
                          className: "block dark:hidden",
                        }),
                        (0, a.jsx)(r.default, {
                          src: g,
                          alt: "rocket",
                          width: 150,
                          height: 150,
                          className: "hidden dark:block",
                        }),
                        (0, a.jsx)(C.fK, {
                          children: (0, a.jsx)(C.$N, {
                            className: "text-[32px] font-bold",
                            children: "Successfully delegated",
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "max-w-[300px] text-wrap text-center text-sm font-medium",
                          children:
                            "Your REN tokens have been delegated. If you authorized another party, they can now vote on your behalf.",
                        }),
                      ],
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(C.fK, {
                          children: (0, a.jsx)(C.$N, {
                            className: "text-[32px] font-bold",
                            children: "Delegate Voting Power",
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex flex-col gap-6",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "text-sm font-medium text-[#5F6082] dark:text-white",
                              children:
                                "To participate in Reno Governance, delegate your REN tokens to your address. To authorize another party to vote on your behalf, delegate to their address instead.",
                            }),
                            E.hasVestingPower
                              ? (0, a.jsxs)("div", {
                                  className: "flex flex-col gap-2",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: "text-xl font-bold",
                                      children: "REN Source",
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex flex-row gap-2",
                                      children: [
                                        (0, a.jsx)(c.z, {
                                          variant: I ? "bordered" : "default",
                                          size: "xs",
                                          onClick: () => {
                                            Z("vestingContract");
                                          },
                                          children: "Vesting Contract",
                                        }),
                                        (0, a.jsx)(c.z, {
                                          variant: I ? "default" : "bordered",
                                          size: "xs",
                                          onClick: () => {
                                            Z("wallet");
                                          },
                                          children: "Wallet",
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : null,
                            (0, a.jsxs)("div", {
                              className:
                                "text-sm font-medium text-[#5F6082] dark:text-white",
                              children: [
                                "Available to delegate:",
                                " ",
                                (0, i.uf)(
                                  (0, o.b)(BigInt(T || 0), d.F.decimals)
                                ),
                                " REN",
                              ],
                            }),
                            G !== v.r_
                              ? (0, a.jsxs)("div", {
                                  className: "flex flex-col gap-2",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: "text-xl font-bold",
                                      children: "Current Delegate",
                                    }),
                                    (0, a.jsx)("div", {
                                      children: (0, a.jsx)("span", {
                                        className:
                                          "self-center rounded-2xl border border-[#C4FF61] bg-[#E6F5CA] px-3 py-[3px] text-xs font-semibold uppercase leading-5 dark:text-black",
                                        children: W ? "YOURSELF" : G,
                                      }),
                                    }),
                                  ],
                                })
                              : null,
                            (0, a.jsxs)("div", {
                              className: "flex flex-col gap-2",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "text-xl font-bold",
                                  children: "New Delegate",
                                }),
                                (0, a.jsx)(z, {
                                  placeholder: "0x",
                                  value: L,
                                  disabled:
                                    s !== F.q.Delegate ||
                                    (I ? !H : !E.hasVestingPower),
                                  onChange: (e) => {
                                    D(""), M(e);
                                  },
                                  onClickSelf: function () {
                                    M(t || "");
                                  },
                                }),
                              ],
                            }),
                            I && !H
                              ? (0, a.jsxs)(k.b, {
                                  type: "warning",
                                  className: "w-full",
                                  children: [
                                    (0, a.jsx)(y.Z.uT, {
                                      className:
                                        "font-semibold text-black dark:text-white",
                                      children: "Insufficient $REN",
                                    }),
                                    (0, a.jsxs)(y.Z.uT, {
                                      className: "mt-1 pb-2 text-neutral-400",
                                      children: [
                                        "You do not have enough $REN to delegate. Get $REN",
                                        " ",
                                        (0, a.jsx)("a", {
                                          href: (0, j.WM)(d.F.address),
                                          target: "_blank",
                                          className: "underline",
                                          children: "here",
                                        }),
                                        ".",
                                      ],
                                    }),
                                  ],
                                })
                              : null,
                            R ? (0, a.jsx)("div", { children: R }) : null,
                            (0, a.jsxs)("div", {
                              className:
                                "flex flex-col justify-normal gap-4 md:flex-row md:justify-between",
                              children: [
                                s === F.q.Delegating
                                  ? (0, a.jsxs)("div", {
                                      className:
                                        "flex flex-row items-center justify-center gap-1.5",
                                      children: [
                                        (0, a.jsx)(V.$, { size: 15 }),
                                        (0, a.jsx)("span", {
                                          className:
                                            "text-sm text-[#5F6082] dark:text-white",
                                          children: "Waiting for confirmation",
                                        }),
                                      ],
                                    })
                                  : s === F.q.WaitingForSignature
                                  ? (0, a.jsxs)("div", {
                                      className:
                                        "flex flex-row items-center justify-center gap-1.5",
                                      children: [
                                        (0, a.jsx)(V.$, { size: 15 }),
                                        (0, a.jsx)("span", {
                                          className:
                                            "text-sm text-[#5F6082] dark:text-white",
                                          children:
                                            "Confirm transaction in wallet",
                                        }),
                                      ],
                                    })
                                  : (0, a.jsx)("div", {}),
                                (0, a.jsxs)("div", {
                                  className:
                                    "flex flex-row justify-center gap-2 md:justify-normal",
                                  children: [
                                    (0, a.jsx)(c.z, {
                                      className:
                                        "rounded-md px-8 text-base font-semibold",
                                      variant: "invert",
                                      onClick: () => {
                                        M(""), D(""), l(F.q.Delegate), B();
                                      },
                                      children: "Cancel",
                                    }),
                                    (0, a.jsx)(c.z, {
                                      className:
                                        "rounded-md px-8 text-base font-semibold",
                                      onClick: U,
                                      disabled: !L || s !== F.q.Delegate || !H,
                                      children: "Delegate",
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
      function D() {
        let {
            isGovernanceDialogOpen: e,
            setIsGovernanceDialogOpen: t,
            votingPower: n,
            availableToDelegate: f,
            vestingContract: g,
            isLoading: h,
          } = (0, F.c)(),
          m = (0, i.uf)((0, o.b)(n.wallet, d.F.decimals)),
          p = (0, i.uf)((0, o.b)(n.vestingContract, d.F.decimals)),
          v = (0, i.uf)((0, o.b)(f.wallet, d.F.decimals)),
          b = (0, i.uf)((0, o.b)(f.vestingContract, d.F.decimals));
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(R, { isOpen: e, onClose: () => t(!1) }),
            (0, a.jsx)("div", {
              className:
                "dark:shadow-blue bg-container-light dark:bg-container-dark bg-glow-wide dark:bg-glow-wide animate-in zoom-in-95 flex size-full flex-col rounded-[24px] border border-none bg-cover bg-top p-6 shadow duration-500 dark:opacity-100",
              children: (0, a.jsxs)("div", {
                className: "relative flex h-full flex-col items-center gap-8",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "absolute top-[-60px] items-center overflow-hidden rounded-full",
                    children: (0, a.jsx)(r.default, {
                      src: s,
                      alt: "rez governance logo",
                      height: 138,
                      width: 138,
                      priority: !0,
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "mt-28 w-full",
                    children: (0, a.jsx)("div", {
                      className: "text-center text-2xl font-bold",
                      children: "Your voting power",
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex w-full flex-col justify-between gap-6 whitespace-nowrap md:flex-row md:gap-3",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "flex basis-6/12 flex-col items-center gap-2 text-center",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "self-center rounded-2xl border border-[#C4FF61] bg-[#E6F5CA] px-3 py-[3px] text-xs font-semibold uppercase leading-5 dark:text-black",
                            children: "Voting power",
                          }),
                          (0, a.jsx)("div", {
                            className: "flex flex-row gap-0",
                            children: h
                              ? (0, a.jsx)(x.O, { className: "h-12 w-32" })
                              : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                    (0, a.jsx)(u.u, {
                                      side: "bottom",
                                      content: g.hasVestingPower
                                        ? (0, a.jsxs)(a.Fragment, {
                                            children: [
                                              (0, a.jsxs)("div", {
                                                children: [
                                                  "Wallet: ",
                                                  m,
                                                  " REN",
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                children: [
                                                  "Vesting Contract: ",
                                                  p,
                                                  " REN",
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                children: [
                                                  "Total:",
                                                  " ",
                                                  (0, i.uf)(
                                                    (0, o.b)(
                                                      n.total,
                                                      d.F.decimals
                                                    )
                                                  ),
                                                  " REN",
                                                ],
                                              }),
                                            ],
                                          })
                                        : m,
                                      contentClassName: "w-auto",
                                      children: (0, a.jsx)("div", {
                                        className: "text-5xl font-bold",
                                        children: (0, i.D)(
                                          (0, o.b)(n.total, d.F.decimals)
                                        ),
                                      }),
                                    }),
                                    (0, a.jsx)("div", {
                                      className:
                                        "content-center text-2xl font-bold",
                                      children: "REN",
                                    }),
                                  ],
                                }),
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "hidden h-[70px] w-px bg-[#e5e6f3] md:block dark:bg-gray-800",
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex basis-6/12 flex-col items-center justify-evenly text-center",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "flex flex-row items-center justify-center gap-2",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "text-xs font-semibold uppercase leading-5 text-[#8D8EAF]",
                                children: "Undelegated Votes",
                              }),
                              (0, a.jsx)(u.u, {
                                content:
                                  "Holding $REN tokens grant you direct voting power",
                                children: (0, a.jsx)(l.Z, { width: 14 }),
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "flex flex-row gap-0",
                            children: h
                              ? (0, a.jsx)(x.O, { className: "h-12 w-32" })
                              : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                    (0, a.jsx)(u.u, {
                                      side: "bottom",
                                      content: g.hasVestingPower
                                        ? (0, a.jsxs)(a.Fragment, {
                                            children: [
                                              (0, a.jsxs)("div", {
                                                children: [
                                                  "Wallet: ",
                                                  v,
                                                  " REN",
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                children: [
                                                  "Vesting Contract: ",
                                                  b,
                                                  " REN",
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                children: [
                                                  "Total:",
                                                  " ",
                                                  (0, i.uf)(
                                                    (0, o.b)(
                                                      f.total,
                                                      d.F.decimals
                                                    )
                                                  ),
                                                  " ",
                                                  "REN",
                                                ],
                                              }),
                                            ],
                                          })
                                        : v,
                                      contentClassName: "w-auto",
                                      children: (0, a.jsx)("div", {
                                        className: "text-5xl font-bold",
                                        children: (0, i.D)(
                                          (0, o.b)(f.total, d.F.decimals)
                                        ),
                                      }),
                                    }),
                                    (0, a.jsx)("div", {
                                      className:
                                        "content-center text-2xl font-bold",
                                      children: "REN",
                                    }),
                                  ],
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    children: (0, a.jsx)(c.z, {
                      className: "rounded-md px-8 text-base font-semibold",
                      onClick: function () {
                        t(!0);
                      },
                      children: "Delegate",
                    }),
                  }),
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
          return r;
        },
      });
      var a = n(57437);
      function r(e) {
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
    43: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return r;
        },
      });
      var a = n(57437);
      function r(e) {
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
            (0, a.jsx)("path", {
              d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
            }),
            (0, a.jsx)("path", { d: "M12 9v4" }),
            (0, a.jsx)("path", { d: "M12 17h.01" }),
          ],
        });
      }
    },
    98032: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return r;
        },
      });
      var a = n(57437);
      function r(e) {
        return (0, a.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "25",
          height: "25",
          viewBox: "0 0 25 25",
          fill: "none",
          ...e,
          children: [
            (0, a.jsx)("path", {
              d: "M13.8322 22.516C15.1255 22.288 16.3611 21.8075 17.4687 21.1019C18.5763 20.3963 19.534 19.4795 20.2872 18.4037C21.0405 17.328 21.5744 16.1145 21.8587 14.8324C22.1429 13.5503 22.1718 12.2248 21.9438 10.9315C21.7157 9.63822 21.2352 8.40253 20.5296 7.29497C19.824 6.18741 18.9072 5.22968 17.8315 4.47645C16.7557 3.72322 15.5422 3.18924 14.2601 2.90501C12.978 2.62078 11.6525 2.59185 10.3592 2.81989C9.06595 3.04793 7.83026 3.52846 6.72271 4.23406C5.61515 4.93965 4.65741 5.85648 3.90418 6.93221C3.15095 8.00793 2.61697 9.22148 2.33274 10.5036C2.04851 11.7857 2.01959 13.1112 2.24763 14.4045C2.47566 15.6977 2.9562 16.9334 3.66179 18.041C4.36738 19.1485 5.28421 20.1063 6.35994 20.8595C7.43567 21.6127 8.64922 22.1467 9.93131 22.4309C11.2134 22.7152 12.5389 22.7441 13.8322 22.516L13.8322 22.516Z",
              stroke: "currentColor",
              strokeWidth: "2",
            }),
            (0, a.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12.9526 18.668V16.0965H11.2383V18.668H12.9526ZM12.9526 13.5251V6.66797H11.2383V13.5251H12.9526Z",
              fill: "currentColor",
            }),
          ],
        });
      }
    },
    37198: function (e, t, n) {
      "use strict";
      n.d(t, {
        b: function () {
          return o;
        },
      });
      var a = n(57437),
        r = n(43),
        s = n(98032),
        l = n(16349);
      let i = { info: s.K, warning: r.l };
      function o(e) {
        let {
            children: t,
            className: n,
            showIcon: r = !0,
            contentClassName: s,
            iconClassName: o,
            type: d,
          } = e,
          c = r ? i[d] : null,
          u = "warning" === d,
          x = "info" === d;
        return (0, a.jsxs)("div", {
          className: (0, l.cn)(
            "flex items-start gap-x-2 rounded-xl border px-[10px] py-2",
            {
              "border-[#F5B4B4] bg-[#FEF2F2] dark:border-[#C33A3A] dark:bg-[#2C2433]":
                u,
            },
            { "border-colors-blue-50 bg-alert-info": x },
            n
          ),
          children: [
            r
              ? (0, a.jsx)("div", {
                  className: "pt-px",
                  children: c
                    ? (0, a.jsx)(c, {
                        className: (0, l.cn)(
                          "size-4",
                          { "text-[#DC2626]": u, "text-text-primary": x },
                          o
                        ),
                      })
                    : null,
                })
              : null,
            (0, a.jsx)("div", { className: s, children: t }),
          ],
        });
      }
    },
    83265: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return s;
        },
      });
      var a = n(57437),
        r = n(16349);
      function s(e) {
        let { className: t, children: n } = e;
        return (0, a.jsx)("div", {
          className: (0, r.cn)(
            "relative mx-auto flex w-full max-w-7xl flex-col items-center justify-start space-y-8 px-4 pb-12 pt-6 lg:px-8 lg:pt-12",
            t
          ),
          children: n,
        });
      }
    },
    16947: function (e, t, n) {
      "use strict";
      n.d(t, {
        $: function () {
          return l;
        },
      });
      var a = n(57437);
      function r(e) {
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
      var s = n(16349);
      function l(e) {
        let { size: t = 100, className: n } = e;
        return (0, a.jsx)("div", {
          className: (0, s.cn)("text-primary-500 flex", n),
          children: (0, a.jsx)(r, { size: t }),
        });
      }
    },
    41218: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return c;
        },
      });
      var a = n(57437),
        r = n(2265),
        s = n(16349),
        l = n(71538),
        i = n(12218),
        o = n(16947);
      let d = (0, i.j)(
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
        c = r.forwardRef((e, t) => {
          let { className: n, variant: r, size: i, asChild: c = !1, ...u } = e,
            x = c ? l.g7 : "button",
            { children: f, isLoading: g, ...h } = u;
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)(x, {
              className: (0, s.cn)(d({ variant: r, size: i, className: n }), {
                isLoading: "opacity-50",
              }),
              ref: t,
              disabled: g,
              ...h,
              children: [
                g
                  ? (0, a.jsx)(o.$, { className: "text-inherit", size: 16 })
                  : null,
                f,
              ],
            }),
          });
        });
      c.displayName = "Button";
    },
    34129: function (e, t, n) {
      "use strict";
      n.d(t, {
        Vq: function () {
          return o;
        },
        cZ: function () {
          return f;
        },
        cN: function () {
          return h;
        },
        fK: function () {
          return g;
        },
        $N: function () {
          return m;
        },
        hg: function () {
          return d;
        },
        GV: function () {
          return x;
        },
      });
      var a = n(57437),
        r = n(2265),
        s = n(16349),
        l = n(13304),
        i = n(61379);
      let o = l.fC,
        d = l.xz,
        c = l.h_;
      l.x8;
      let u = r.forwardRef((e, t) => {
        let { className: n, ...r } = e;
        return (0, a.jsx)(l.aV, {
          ref: t,
          className: (0, s.cn)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
            n
          ),
          ...r,
        });
      });
      u.displayName = l.aV.displayName;
      let x = 200,
        f = r.forwardRef((e, t) => {
          let {
            className: n,
            showOverlay: r = !0,
            showCloseButton: o = !0,
            position: d = "center",
            children: x,
            ...f
          } = e;
          return (0, a.jsxs)(c, {
            children: [
              r ? (0, a.jsx)(u, {}) : null,
              (0, a.jsxs)(l.VY, {
                ref: t,
                className: (0, s.cn)(
                  "bg-dialog",
                  "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
                  "fixed left-1/2 right-0 top-full z-50 flex w-[100%] max-w-2xl translate-x-[-50%] translate-y-[-100%] flex-col gap-y-8 p-6",
                  "outline-none duration-200 sm:top-1/2 sm:w-[calc(100%_-_32px)] sm:translate-y-[-50%] sm:rounded-lg sm:dark:border sm:dark:border-neutral-600",
                  {
                    "md:left-auto md:right-0 md:h-full md:translate-x-0 md:data-[state=open]:slide-in-from-right-full md:data-[state=closed]:slide-out-to-right-full md:rounded-r-none md:data-[state=closed]:zoom-out-100 md:data-[state=open]:zoom-in-100 md:border-y-none md:border-r-none":
                      "right" === d,
                  },
                  n
                ),
                ...f,
                children: [
                  x,
                  o
                    ? (0, a.jsxs)(l.x8, {
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
      f.displayName = l.VY.displayName;
      let g = (e) => {
        let { className: t, ...n } = e;
        return (0, a.jsx)("div", {
          className: (0, s.cn)("flex flex-col space-y-1.5 text-center", t),
          ...n,
        });
      };
      g.displayName = "DialogHeader";
      let h = (e) => {
        let { className: t, ...n } = e;
        return (0, a.jsx)("div", {
          className: (0, s.cn)(
            "grid auto-cols-fr grid-flow-col justify-end gap-2 lg:auto-cols-min",
            t
          ),
          ...n,
        });
      };
      h.displayName = "DialogFooter";
      let m = r.forwardRef((e, t) => {
        let { className: n, ...r } = e;
        return (0, a.jsx)(l.Dx, {
          ref: t,
          className: (0, s.cn)(
            "font-poppins text-2xl font-semibold leading-[120%] tracking-tight",
            n
          ),
          ...r,
        });
      });
      (m.displayName = l.Dx.displayName),
        (r.forwardRef((e, t) => {
          let { className: n, ...r } = e;
          return (0, a.jsx)(l.dk, {
            ref: t,
            className: (0, s.cn)("text-sm", n),
            ...r,
          });
        }).displayName = l.dk.displayName);
    },
    92275: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return l;
        },
      });
      var a = n(57437),
        r = n(2265),
        s = n(16349);
      let l = r.forwardRef((e, t) => {
        let { className: n, type: r, ...l } = e;
        return (0, a.jsx)("input", {
          type: r,
          className: (0, s.cn)(
            "bg-bg-light dark:bg-bg-dark border-border flex h-10 w-full rounded-md px-3 py-2 text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border",
            n
          ),
          ref: t,
          ...l,
        });
      });
      l.displayName = "Input";
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
      function r(e) {
        return "https://renzoezeth.enzyme.community/vault/".concat(e);
      }
      function s() {
        return "https://app.aave.com/markets/?marketName=proto_lido_v3";
      }
      function l() {
        return "https://yieldlayer.cian.app/vaults/0x3D086B688D7c0362BE4f9600d626f622792c4a20?chainId=1";
      }
      n.d(t, {
        Gu: function () {
          return l;
        },
        WM: function () {
          return a;
        },
        b1: function () {
          return s;
        },
        sF: function () {
          return r;
        },
      });
    },
    13962: function (e, t, n) {
      "use strict";
      n.d(t, {
        t: function () {
          return r;
        },
      });
      var a = n(2265);
      function r() {
        let [e, t] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            t(!0);
          }, []),
          e
        );
      }
    },
    33736: function (e, t, n) {
      "use strict";
      n.d(t, {
        GovernanceConnectedWalletProvider: function () {
          return u;
        },
      });
      var a = n(57437),
        r = n(66648),
        s = n(41218),
        l = n(83265);
      function i(e) {
        return (0, a.jsxs)("svg", {
          width: "20",
          height: "19",
          viewBox: "0 0 20 19",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, a.jsx)("path", {
              d: "M17.6545 17.6431H2.34594C1.9262 17.6431 1.58594 17.3029 1.58594 16.8831V5.15742V3.52885C1.91013 4.50142 2.82028 5.15742 3.84546 5.15742H18.2733C18.3513 5.15742 18.4145 5.22067 18.4145 5.29868V16.8831C18.4145 17.3029 18.0742 17.6431 17.6545 17.6431Z",
              fill: "currentColor",
            }),
            (0, a.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M0.5 3.52863C0.5 1.72976 1.95827 0.271484 3.75714 0.271484H16.7857C17.3853 0.271484 17.8714 0.757575 17.8714 1.3572C17.8714 1.95682 17.3853 2.44291 16.7857 2.44291H3.75714C3.21699 2.44291 2.76896 2.83737 2.68541 3.35394C2.90218 3.78895 3.34894 4.07148 3.84524 4.07148H18.273C18.9507 4.07148 19.5 4.62082 19.5 5.29846V16.8829C19.5 17.9023 18.6736 18.7286 17.6543 18.7286H2.34571C1.32635 18.7286 0.5 17.9023 0.5 16.8829V3.52863ZM2.67143 6.03841V16.5572H17.3286V6.24291H3.84524C3.43674 6.24291 3.04078 6.17137 2.67143 6.03841Z",
              fill: "currentColor",
            }),
            (0, a.jsx)("path", {
              d: "M16.7857 11.1287C16.7857 11.7283 16.2996 12.2144 15.7 12.2144C15.1003 12.2144 14.6143 11.7283 14.6143 11.1287C14.6143 10.5291 15.1003 10.043 15.7 10.043C16.2996 10.043 16.7857 10.5291 16.7857 11.1287Z",
              fill: "#ACE730",
            }),
          ],
        });
      }
      var o = n(13962),
        d = n(88190),
        c = n(67750);
      function u(e) {
        let { children: t } = e,
          {
            account: { isConnected: n },
          } = (0, c.$)(),
          { openEVMWalletDialog: u } = (0, d.G)();
        return (0, o.t)()
          ? n
            ? (0, a.jsx)(a.Fragment, { children: t })
            : (0, a.jsx)(l._, {
                className:
                  "flex h-[calc(100vh_-_var(--header-height))] items-center justify-center",
                children: (0, a.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center gap-y-6 px-4 text-center lg:w-[600px] lg:p-0",
                  children: [
                    (0, a.jsx)(r.default, {
                      src: "/connect-governance-light.png",
                      alt: "connect wallet governance",
                      className: "block dark:hidden",
                      width: 200,
                      height: 180,
                      priority: !0,
                    }),
                    (0, a.jsx)(r.default, {
                      src: "/connect-governance-dark.png",
                      alt: "connect wallet governance",
                      className: "hidden dark:block",
                      width: 200,
                      height: 180,
                      priority: !0,
                    }),
                    (0, a.jsx)("div", {
                      className: "text-2xl font-bold",
                      children: "Reno Protocol Governance",
                    }),
                    (0, a.jsx)("div", {
                      className: "text-sm font-medium text-[#8D8EAF]",
                      children:
                        "Connect your wallet to access Reno Protocol Governance. Vote, delegate REN tokens, and shape our community’s future. Your voice matters!",
                    }),
                    (0, a.jsxs)(s.z, {
                      onClick: u,
                      size: "lg",
                      className: "gap-x-2",
                      children: ["Connect Wallet", (0, a.jsx)(i, {})],
                    }),
                  ],
                }),
              })
          : null;
      }
    },
    88190: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return i;
        },
        q: function () {
          return l;
        },
      });
      var a = n(57437),
        r = n(2265);
      let s = (0, r.createContext)(void 0);
      function l(e) {
        let { children: t } = e,
          n = (function () {
            let [e, t] = (0, r.useState)(!1),
              [n, a] = (0, r.useState)(!1),
              s = (0, r.useCallback)(() => t(!0), []);
            return {
              evmWalletDialogOpen: e,
              openEVMWalletDialog: s,
              closeEVMWalletDialog: (0, r.useCallback)(() => t(!1), []),
              setEVMWalletDialogOpen: t,
              solanaWalletDialogOpen: n,
              openSolanaWalletDialog: (0, r.useCallback)(() => a(!0), []),
              closeSolanaWalletDialog: (0, r.useCallback)(() => a(!1), []),
            };
          })();
        return (0, a.jsx)(s.Provider, { value: n, children: t });
      }
      function i() {
        let e = (0, r.useContext)(s);
        if (void 0 === e)
          throw Error(
            "useWalletDialog must be used within a WalletDialogProvider"
          );
        return e;
      }
    },
    12218: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return s;
        },
      });
      let a = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
        r = function () {
          for (var e, t, n = 0, a = ""; n < arguments.length; )
            (e = arguments[n++]) &&
              (t = (function e(t) {
                var n,
                  a,
                  r = "";
                if ("string" == typeof t || "number" == typeof t) r += t;
                else if ("object" == typeof t) {
                  if (Array.isArray(t))
                    for (n = 0; n < t.length; n++)
                      t[n] && (a = e(t[n])) && (r && (r += " "), (r += a));
                  else for (n in t) t[n] && (r && (r += " "), (r += n));
                }
                return r;
              })(e)) &&
              (a && (a += " "), (a += t));
          return a;
        },
        s = (e, t) => (n) => {
          var s;
          if ((null == t ? void 0 : t.variants) == null)
            return r(
              e,
              null == n ? void 0 : n.class,
              null == n ? void 0 : n.className
            );
          let { variants: l, defaultVariants: i } = t,
            o = Object.keys(l).map((e) => {
              let t = null == n ? void 0 : n[e],
                r = null == i ? void 0 : i[e];
              if (null === t) return null;
              let s = a(t) || a(r);
              return l[e][s];
            }),
            d =
              n &&
              Object.entries(n).reduce((e, t) => {
                let [n, a] = t;
                return void 0 === a || (e[n] = a), e;
              }, {});
          return r(
            e,
            o,
            null == t
              ? void 0
              : null === (s = t.compoundVariants) || void 0 === s
              ? void 0
              : s.reduce((e, t) => {
                  let { class: n, className: a, ...r } = t;
                  return Object.entries(r).every((e) => {
                    let [t, n] = e;
                    return Array.isArray(n)
                      ? n.includes({ ...i, ...d }[t])
                      : { ...i, ...d }[t] === n;
                  })
                    ? [...e, n, a]
                    : e;
                }, []),
            null == n ? void 0 : n.class,
            null == n ? void 0 : n.className
          );
        };
    },
  },
  function (e) {
    e.O(
      0,
      [
        3814, 2420, 5088, 3712, 1391, 2174, 4630, 1581, 5737, 1294, 8843, 3304,
        5344, 6141, 2971, 7023, 1744,
      ],
      function () {
        return e((e.s = 60828));
      }
    ),
      (_N_E = e.O());
  },
]);
