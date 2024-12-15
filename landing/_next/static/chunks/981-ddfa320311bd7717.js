"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [981],
  {
    3145: function (e, t, n) {
      n.d(t, {
        default: function () {
          return o.a;
        },
      });
      var r = n(8461),
        o = n.n(r);
    },
    5878: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let r = n(7043),
        o = n(3099),
        i = n(7437),
        l = o._(n(2265)),
        a = r._(n(4887)),
        u = r._(n(8293)),
        s = n(5346),
        c = n(128),
        d = n(2589);
      n(1765);
      let f = n(5523),
        p = r._(n(5084)),
        m = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function h(e, t, n, r, o, i, l) {
        let a = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== a &&
          ((e["data-loaded-src"] = a),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && o(!0), null == n ? void 0 : n.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let r = !1,
                    o = !1;
                  n.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => o,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (o = !0), t.stopPropagation();
                    },
                  });
                }
                (null == r ? void 0 : r.current) && r.current(e);
              }
            }));
      }
      function g(e) {
        return l.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let v = (0, l.forwardRef)((e, t) => {
        let {
          src: n,
          srcSet: r,
          sizes: o,
          height: a,
          width: u,
          decoding: s,
          className: c,
          style: d,
          fetchPriority: f,
          placeholder: p,
          loading: m,
          unoptimized: v,
          fill: y,
          onLoadRef: w,
          onLoadingCompleteRef: b,
          setBlurComplete: x,
          setShowAltText: E,
          sizesInput: C,
          onLoad: R,
          onError: O,
          ..._
        } = e;
        return (0, i.jsx)("img", {
          ..._,
          ...g(f),
          loading: m,
          width: u,
          height: a,
          decoding: s,
          "data-nimg": y ? "fill" : "1",
          className: c,
          style: d,
          sizes: o,
          srcSet: r,
          src: n,
          ref: (0, l.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e &&
                  (O && (e.src = e.src), e.complete && h(e, p, w, b, x, v, C));
            },
            [n, p, w, b, x, O, v, C, t]
          ),
          onLoad: (e) => {
            h(e.currentTarget, p, w, b, x, v, C);
          },
          onError: (e) => {
            E(!0), "empty" !== p && x(!0), O && O(e);
          },
        });
      });
      function y(e) {
        let { isAppRouter: t, imgAttributes: n } = e,
          r = {
            as: "image",
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
            ...g(n.fetchPriority),
          };
        return t && a.default.preload
          ? (a.default.preload(n.src, r), null)
          : (0, i.jsx)(u.default, {
              children: (0, i.jsx)(
                "link",
                { rel: "preload", href: n.srcSet ? void 0 : n.src, ...r },
                "__nimg-" + n.src + n.srcSet + n.sizes
              ),
            });
      }
      let w = (0, l.forwardRef)((e, t) => {
        let n = (0, l.useContext)(f.RouterContext),
          r = (0, l.useContext)(d.ImageConfigContext),
          o = (0, l.useMemo)(() => {
            let e = m || r || c.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              n = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: n };
          }, [r]),
          { onLoad: a, onLoadingComplete: u } = e,
          h = (0, l.useRef)(a);
        (0, l.useEffect)(() => {
          h.current = a;
        }, [a]);
        let g = (0, l.useRef)(u);
        (0, l.useEffect)(() => {
          g.current = u;
        }, [u]);
        let [w, b] = (0, l.useState)(!1),
          [x, E] = (0, l.useState)(!1),
          { props: C, meta: R } = (0, s.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: o,
            blurComplete: w,
            showAltText: x,
          });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(v, {
              ...C,
              unoptimized: R.unoptimized,
              placeholder: R.placeholder,
              fill: R.fill,
              onLoadRef: h,
              onLoadingCompleteRef: g,
              setBlurComplete: b,
              setShowAltText: E,
              sizesInput: e.sizes,
              ref: t,
            }),
            R.priority
              ? (0, i.jsx)(y, { isAppRouter: !n, imgAttributes: C })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1436: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(7043)._(n(2265)).default.createContext({});
    },
    3964: function (e, t) {
      function n(e) {
        let {
          ampFirst: t = !1,
          hybrid: n = !1,
          hasQuery: r = !1,
        } = void 0 === e ? {} : e;
        return t || (n && r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    5346: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        n(1765);
      let r = n(6496),
        o = n(128);
      function i(e) {
        return void 0 !== e.default;
      }
      function l(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function a(e, t) {
        var n;
        let a,
          u,
          s,
          {
            src: c,
            sizes: d,
            unoptimized: f = !1,
            priority: p = !1,
            loading: m,
            className: h,
            quality: g,
            width: v,
            height: y,
            fill: w = !1,
            style: b,
            overrideSrc: x,
            onLoad: E,
            onLoadingComplete: C,
            placeholder: R = "empty",
            blurDataURL: O,
            fetchPriority: _,
            layout: P,
            objectFit: A,
            objectPosition: j,
            lazyBoundary: S,
            lazyRoot: T,
            ...L
          } = e,
          { imgConf: N, showAltText: k, blurComplete: M, defaultLoader: D } = t,
          I = N || o.imageConfigDefault;
        if ("allSizes" in I) a = I;
        else {
          let e = [...I.deviceSizes, ...I.imageSizes].sort((e, t) => e - t),
            t = I.deviceSizes.sort((e, t) => e - t);
          a = { ...I, allSizes: e, deviceSizes: t };
        }
        if (void 0 === D)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let z = L.loader || D;
        delete L.loader, delete L.srcSet;
        let W = "__next_img_default" in z;
        if (W) {
          if ("custom" === a.loader)
            throw Error(
              'Image with src "' +
                c +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = z;
          z = (t) => {
            let { config: n, ...r } = t;
            return e(r);
          };
        }
        if (P) {
          "fill" === P && (w = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[P];
          e && (b = { ...b, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[P];
          t && !d && (d = t);
        }
        let V = "",
          F = l(v),
          B = l(y);
        if ("object" == typeof (n = c) && (i(n) || void 0 !== n.src)) {
          let e = i(c) ? c.default : c;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((u = e.blurWidth),
            (s = e.blurHeight),
            (O = O || e.blurDataURL),
            (V = e.src),
            !w)
          ) {
            if (F || B) {
              if (F && !B) {
                let t = F / e.width;
                B = Math.round(e.height * t);
              } else if (!F && B) {
                let t = B / e.height;
                F = Math.round(e.width * t);
              }
            } else (F = e.width), (B = e.height);
          }
        }
        let H = !p && ("lazy" === m || void 0 === m);
        (!(c = "string" == typeof c ? c : V) ||
          c.startsWith("data:") ||
          c.startsWith("blob:")) &&
          ((f = !0), (H = !1)),
          a.unoptimized && (f = !0),
          W && c.endsWith(".svg") && !a.dangerouslyAllowSVG && (f = !0),
          p && (_ = "high");
        let U = l(g),
          $ = Object.assign(
            w
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: A,
                  objectPosition: j,
                }
              : {},
            k ? {} : { color: "transparent" },
            b
          ),
          Z =
            M || "empty" === R
              ? null
              : "blur" === R
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, r.getImageBlurSvg)({
                  widthInt: F,
                  heightInt: B,
                  blurWidth: u,
                  blurHeight: s,
                  blurDataURL: O || "",
                  objectFit: $.objectFit,
                }) +
                '")'
              : 'url("' + R + '")',
          Y = Z
            ? {
                backgroundSize: $.objectFit || "cover",
                backgroundPosition: $.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: Z,
              }
            : {},
          G = (function (e) {
            let {
              config: t,
              src: n,
              unoptimized: r,
              width: o,
              quality: i,
              sizes: l,
              loader: a,
            } = e;
            if (r) return { src: n, srcSet: void 0, sizes: void 0 };
            let { widths: u, kind: s } = (function (e, t, n) {
                let { deviceSizes: r, allSizes: o } = e;
                if (n) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let r; (r = e.exec(n)); r) t.push(parseInt(r[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: o.filter((t) => t >= r[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: o, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: r, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => o.find((t) => t >= e) || o[o.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, o, l),
              c = u.length - 1;
            return {
              sizes: l || "w" !== s ? l : "100vw",
              srcSet: u
                .map(
                  (e, r) =>
                    a({ config: t, src: n, quality: i, width: e }) +
                    " " +
                    ("w" === s ? e : r + 1) +
                    s
                )
                .join(", "),
              src: a({ config: t, src: n, quality: i, width: u[c] }),
            };
          })({
            config: a,
            src: c,
            unoptimized: f,
            width: F,
            quality: U,
            sizes: d,
            loader: z,
          });
        return {
          props: {
            ...L,
            loading: H ? "lazy" : m,
            fetchPriority: _,
            width: F,
            height: B,
            decoding: "async",
            className: h,
            style: { ...$, ...Y },
            sizes: G.sizes,
            srcSet: G.srcSet,
            src: x || G.src,
          },
          meta: { unoptimized: f, priority: p, placeholder: R, fill: w },
        };
      }
    },
    8293: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return h;
          },
          defaultHead: function () {
            return d;
          },
        });
      let r = n(7043),
        o = n(3099),
        i = n(7437),
        l = o._(n(2265)),
        a = r._(n(7421)),
        u = n(1436),
        s = n(8701),
        c = n(3964);
      function d(e) {
        void 0 === e && (e = !1);
        let t = [(0, i.jsx)("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              (0, i.jsx)("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function f(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === l.default.Fragment
          ? e.concat(
              l.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      n(1765);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function m(e, t) {
        let { inAmpMode: n } = t;
        return e
          .reduce(f, [])
          .reverse()
          .concat(d(n).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return (o) => {
                let i = !0,
                  l = !1;
                if (
                  o.key &&
                  "number" != typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  l = !0;
                  let t = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(t) ? (i = !1) : e.add(t);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (i = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (let e = 0, t = p.length; e < t; e++) {
                      let t = p[e];
                      if (o.props.hasOwnProperty(t)) {
                        if ("charSet" === t) n.has(t) ? (i = !1) : n.add(t);
                        else {
                          let e = o.props[t],
                            n = r[t] || new Set();
                          ("name" !== t || !l) && n.has(e)
                            ? (i = !1)
                            : (n.add(e), (r[t] = n));
                        }
                      }
                    }
                }
                return i;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let r = e.key || t;
            if (
              !n &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                l.default.cloneElement(e, t)
              );
            }
            return l.default.cloneElement(e, { key: r });
          });
      }
      let h = function (e) {
        let { children: t } = e,
          n = (0, l.useContext)(u.AmpStateContext),
          r = (0, l.useContext)(s.HeadManagerContext);
        return (0, i.jsx)(a.default, {
          reduceComponentsToState: m,
          headManager: r,
          inAmpMode: (0, c.isInAmpMode)(n),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6496: function (e, t) {
      function n(e) {
        let {
            widthInt: t,
            heightInt: n,
            blurWidth: r,
            blurHeight: o,
            blurDataURL: i,
            objectFit: l,
          } = e,
          a = r ? 40 * r : t,
          u = o ? 40 * o : n,
          s = a && u ? "viewBox='0 0 " + a + " " + u + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          s +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (s
            ? "none"
            : "contain" === l
            ? "xMidYMid"
            : "cover" === l
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          i +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    2589: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(7043)._(n(2265)),
        o = n(128),
        i = r.default.createContext(o.imageConfigDefault);
    },
    128: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          VALID_LOADERS: function () {
            return n;
          },
          imageConfigDefault: function () {
            return r;
          },
        });
      let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
        r = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    8461: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return u;
          },
          getImageProps: function () {
            return a;
          },
        });
      let r = n(7043),
        o = n(5346),
        i = n(5878),
        l = r._(n(5084));
      function a(e) {
        let { props: t } = (0, o.getImgProps)(e, {
          defaultLoader: l.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return { props: t };
      }
      let u = i.Image;
    },
    5084: function (e, t) {
      function n(e) {
        let { config: t, src: n, width: r, quality: o } = e;
        return n;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (n.__next_img_default = !0);
      let r = n;
    },
    5523: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(7043)._(n(2265)).default.createContext(null);
    },
    7421: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = n(2265),
        o = "undefined" == typeof window,
        i = o ? () => {} : r.useLayoutEffect,
        l = o ? () => {} : r.useEffect;
      function a(e) {
        let { headManager: t, reduceComponentsToState: n } = e;
        function a() {
          if (t && t.mountedInstances) {
            let o = r.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(n(o, e));
          }
        }
        if (o) {
          var u;
          null == t || null == (u = t.mountedInstances) || u.add(e.children),
            a();
        }
        return (
          i(() => {
            var n;
            return (
              null == t ||
                null == (n = t.mountedInstances) ||
                n.add(e.children),
              () => {
                var n;
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.delete(e.children);
              }
            );
          }),
          i(
            () => (
              t && (t._pendingUpdate = a),
              () => {
                t && (t._pendingUpdate = a);
              }
            )
          ),
          l(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    3134: function (e, t, n) {
      n.d(t, {
        VY: function () {
          return er;
        },
        h4: function () {
          return et;
        },
        ck: function () {
          return ee;
        },
        fC: function () {
          return Q;
        },
        xz: function () {
          return en;
        },
      });
      var r = n(1119),
        o = n(2265),
        i = n(3966),
        l = n(7822),
        a = n(8575),
        u = n(6741),
        s = n(886),
        c = n(6840),
        d = n(1188),
        f = n(1599),
        p = n(9255);
      let m = "Collapsible",
        [h, g] = (0, i.b)(m),
        [v, y] = h(m),
        w = (0, o.forwardRef)((e, t) => {
          let {
              __scopeCollapsible: n,
              open: i,
              defaultOpen: l,
              disabled: a,
              onOpenChange: u,
              ...d
            } = e,
            [f = !1, m] = (0, s.T)({ prop: i, defaultProp: l, onChange: u });
          return (0, o.createElement)(
            v,
            {
              scope: n,
              disabled: a,
              contentId: (0, p.M)(),
              open: f,
              onOpenToggle: (0, o.useCallback)(() => m((e) => !e), [m]),
            },
            (0, o.createElement)(
              c.WV.div,
              (0, r.Z)(
                { "data-state": R(f), "data-disabled": a ? "" : void 0 },
                d,
                { ref: t }
              )
            )
          );
        }),
        b = (0, o.forwardRef)((e, t) => {
          let { __scopeCollapsible: n, ...i } = e,
            l = y("CollapsibleTrigger", n);
          return (0, o.createElement)(
            c.WV.button,
            (0, r.Z)(
              {
                type: "button",
                "aria-controls": l.contentId,
                "aria-expanded": l.open || !1,
                "data-state": R(l.open),
                "data-disabled": l.disabled ? "" : void 0,
                disabled: l.disabled,
              },
              i,
              { ref: t, onClick: (0, u.M)(e.onClick, l.onOpenToggle) }
            )
          );
        }),
        x = "CollapsibleContent",
        E = (0, o.forwardRef)((e, t) => {
          let { forceMount: n, ...i } = e,
            l = y(x, e.__scopeCollapsible);
          return (0, o.createElement)(
            f.z,
            { present: n || l.open },
            ({ present: e }) =>
              (0, o.createElement)(C, (0, r.Z)({}, i, { ref: t, present: e }))
          );
        }),
        C = (0, o.forwardRef)((e, t) => {
          let { __scopeCollapsible: n, present: i, children: l, ...u } = e,
            s = y(x, n),
            [f, p] = (0, o.useState)(i),
            m = (0, o.useRef)(null),
            h = (0, a.e)(t, m),
            g = (0, o.useRef)(0),
            v = g.current,
            w = (0, o.useRef)(0),
            b = w.current,
            E = s.open || f,
            C = (0, o.useRef)(E),
            O = (0, o.useRef)();
          return (
            (0, o.useEffect)(() => {
              let e = requestAnimationFrame(() => (C.current = !1));
              return () => cancelAnimationFrame(e);
            }, []),
            (0, d.b)(() => {
              let e = m.current;
              if (e) {
                (O.current = O.current || {
                  transitionDuration: e.style.transitionDuration,
                  animationName: e.style.animationName,
                }),
                  (e.style.transitionDuration = "0s"),
                  (e.style.animationName = "none");
                let t = e.getBoundingClientRect();
                (g.current = t.height),
                  (w.current = t.width),
                  C.current ||
                    ((e.style.transitionDuration =
                      O.current.transitionDuration),
                    (e.style.animationName = O.current.animationName)),
                  p(i);
              }
            }, [s.open, i]),
            (0, o.createElement)(
              c.WV.div,
              (0, r.Z)(
                {
                  "data-state": R(s.open),
                  "data-disabled": s.disabled ? "" : void 0,
                  id: s.contentId,
                  hidden: !E,
                },
                u,
                {
                  ref: h,
                  style: {
                    "--radix-collapsible-content-height": v ? `${v}px` : void 0,
                    "--radix-collapsible-content-width": b ? `${b}px` : void 0,
                    ...e.style,
                  },
                }
              ),
              E && l
            )
          );
        });
      function R(e) {
        return e ? "open" : "closed";
      }
      var O = n(9114);
      let _ = "Accordion",
        P = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [A, j, S] = (0, l.B)(_),
        [T, L] = (0, i.b)(_, [S, g]),
        N = g(),
        k = o.forwardRef((e, t) => {
          let { type: n, ...i } = e;
          return o.createElement(
            A.Provider,
            { scope: e.__scopeAccordion },
            "multiple" === n
              ? o.createElement(V, (0, r.Z)({}, i, { ref: t }))
              : o.createElement(W, (0, r.Z)({}, i, { ref: t }))
          );
        });
      k.propTypes = {
        type(e) {
          let t = e.value || e.defaultValue;
          return e.type && !["single", "multiple"].includes(e.type)
            ? Error(
                "Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."
              )
            : "multiple" === e.type && "string" == typeof t
            ? Error(
                "Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."
              )
            : "single" === e.type && Array.isArray(t)
            ? Error(
                "Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."
              )
            : null;
        },
      };
      let [M, D] = T(_),
        [I, z] = T(_, { collapsible: !1 }),
        W = o.forwardRef((e, t) => {
          let {
              value: n,
              defaultValue: i,
              onValueChange: l = () => {},
              collapsible: a = !1,
              ...u
            } = e,
            [c, d] = (0, s.T)({ prop: n, defaultProp: i, onChange: l });
          return o.createElement(
            M,
            {
              scope: e.__scopeAccordion,
              value: c ? [c] : [],
              onItemOpen: d,
              onItemClose: o.useCallback(() => a && d(""), [a, d]),
            },
            o.createElement(
              I,
              { scope: e.__scopeAccordion, collapsible: a },
              o.createElement(H, (0, r.Z)({}, u, { ref: t }))
            )
          );
        }),
        V = o.forwardRef((e, t) => {
          let {
              value: n,
              defaultValue: i,
              onValueChange: l = () => {},
              ...a
            } = e,
            [u = [], c] = (0, s.T)({ prop: n, defaultProp: i, onChange: l }),
            d = o.useCallback((e) => c((t = []) => [...t, e]), [c]),
            f = o.useCallback(
              (e) => c((t = []) => t.filter((t) => t !== e)),
              [c]
            );
          return o.createElement(
            M,
            {
              scope: e.__scopeAccordion,
              value: u,
              onItemOpen: d,
              onItemClose: f,
            },
            o.createElement(
              I,
              { scope: e.__scopeAccordion, collapsible: !0 },
              o.createElement(H, (0, r.Z)({}, a, { ref: t }))
            )
          );
        }),
        [F, B] = T(_),
        H = o.forwardRef((e, t) => {
          let {
              __scopeAccordion: n,
              disabled: i,
              dir: l,
              orientation: s = "vertical",
              ...d
            } = e,
            f = o.useRef(null),
            p = (0, a.e)(f, t),
            m = j(n),
            h = "ltr" === (0, O.gm)(l),
            g = (0, u.M)(e.onKeyDown, (e) => {
              var t;
              if (!P.includes(e.key)) return;
              let n = e.target,
                r = m().filter((e) => {
                  var t;
                  return !(
                    null !== (t = e.ref.current) &&
                    void 0 !== t &&
                    t.disabled
                  );
                }),
                o = r.findIndex((e) => e.ref.current === n),
                i = r.length;
              if (-1 === o) return;
              e.preventDefault();
              let l = o,
                a = i - 1,
                u = () => {
                  (l = o + 1) > a && (l = 0);
                },
                c = () => {
                  (l = o - 1) < 0 && (l = a);
                };
              switch (e.key) {
                case "Home":
                  l = 0;
                  break;
                case "End":
                  l = a;
                  break;
                case "ArrowRight":
                  "horizontal" === s && (h ? u() : c());
                  break;
                case "ArrowDown":
                  "vertical" === s && u();
                  break;
                case "ArrowLeft":
                  "horizontal" === s && (h ? c() : u());
                  break;
                case "ArrowUp":
                  "vertical" === s && c();
              }
              null === (t = r[l % i].ref.current) || void 0 === t || t.focus();
            });
          return o.createElement(
            F,
            { scope: n, disabled: i, direction: l, orientation: s },
            o.createElement(
              A.Slot,
              { scope: n },
              o.createElement(
                c.WV.div,
                (0, r.Z)({}, d, {
                  "data-orientation": s,
                  ref: p,
                  onKeyDown: i ? void 0 : g,
                })
              )
            )
          );
        }),
        U = "AccordionItem",
        [$, Z] = T(U),
        Y = o.forwardRef((e, t) => {
          let { __scopeAccordion: n, value: i, ...l } = e,
            a = B(U, n),
            u = D(U, n),
            s = N(n),
            c = (0, p.M)(),
            d = (i && u.value.includes(i)) || !1,
            f = a.disabled || e.disabled;
          return o.createElement(
            $,
            { scope: n, open: d, disabled: f, triggerId: c },
            o.createElement(
              w,
              (0, r.Z)(
                { "data-orientation": a.orientation, "data-state": K(d) },
                s,
                l,
                {
                  ref: t,
                  disabled: f,
                  open: d,
                  onOpenChange: (e) => {
                    e ? u.onItemOpen(i) : u.onItemClose(i);
                  },
                }
              )
            )
          );
        }),
        G = o.forwardRef((e, t) => {
          let { __scopeAccordion: n, ...i } = e,
            l = B(_, n),
            a = Z("AccordionHeader", n);
          return o.createElement(
            c.WV.h3,
            (0, r.Z)(
              {
                "data-orientation": l.orientation,
                "data-state": K(a.open),
                "data-disabled": a.disabled ? "" : void 0,
              },
              i,
              { ref: t }
            )
          );
        }),
        X = "AccordionTrigger",
        q = o.forwardRef((e, t) => {
          let { __scopeAccordion: n, ...i } = e,
            l = B(_, n),
            a = Z(X, n),
            u = z(X, n),
            s = N(n);
          return o.createElement(
            A.ItemSlot,
            { scope: n },
            o.createElement(
              b,
              (0, r.Z)(
                {
                  "aria-disabled": (a.open && !u.collapsible) || void 0,
                  "data-orientation": l.orientation,
                  id: a.triggerId,
                },
                s,
                i,
                { ref: t }
              )
            )
          );
        }),
        J = o.forwardRef((e, t) => {
          let { __scopeAccordion: n, ...i } = e,
            l = B(_, n),
            a = Z("AccordionContent", n),
            u = N(n);
          return o.createElement(
            E,
            (0, r.Z)(
              {
                role: "region",
                "aria-labelledby": a.triggerId,
                "data-orientation": l.orientation,
              },
              u,
              i,
              {
                ref: t,
                style: {
                  "--radix-accordion-content-height":
                    "var(--radix-collapsible-content-height)",
                  "--radix-accordion-content-width":
                    "var(--radix-collapsible-content-width)",
                  ...e.style,
                },
              }
            )
          );
        });
      function K(e) {
        return e ? "open" : "closed";
      }
      let Q = k,
        ee = Y,
        et = G,
        en = q,
        er = J;
    },
    9756: function (e, t, n) {
      n.d(t, {
        Eh: function () {
          return t$;
        },
        VY: function () {
          return tU;
        },
        h_: function () {
          return tH;
        },
        zt: function () {
          return tV;
        },
        fC: function () {
          return tF;
        },
        xz: function () {
          return tB;
        },
      });
      var r,
        o = n(2265),
        i = n.t(o, 2);
      function l(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
      function a(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function u(...e) {
        return o.useCallback(a(...e), e);
      }
      var s = n(7437),
        c = n(4887),
        d = o.forwardRef((e, t) => {
          let { children: n, ...r } = e,
            i = o.Children.toArray(n),
            l = i.find(m);
          if (l) {
            let e = l.props.children,
              n = i.map((t) =>
                t !== l
                  ? t
                  : o.Children.count(e) > 1
                  ? o.Children.only(null)
                  : o.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, s.jsx)(f, {
              ...r,
              ref: t,
              children: o.isValidElement(e)
                ? o.cloneElement(e, void 0, n)
                : null,
            });
          }
          return (0, s.jsx)(f, { ...r, ref: t, children: n });
        });
      d.displayName = "Slot";
      var f = o.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (o.isValidElement(n)) {
          let e, i;
          let l =
            (e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get) &&
            "isReactWarning" in e &&
            e.isReactWarning
              ? n.ref
              : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get) &&
                "isReactWarning" in e &&
                e.isReactWarning
              ? n.props.ref
              : n.props.ref || n.ref;
          return o.cloneElement(n, {
            ...(function (e, t) {
              let n = { ...t };
              for (let r in t) {
                let o = e[r],
                  i = t[r];
                /^on[A-Z]/.test(r)
                  ? o && i
                    ? (n[r] = (...e) => {
                        i(...e), o(...e);
                      })
                    : o && (n[r] = o)
                  : "style" === r
                  ? (n[r] = { ...o, ...i })
                  : "className" === r &&
                    (n[r] = [o, i].filter(Boolean).join(" "));
              }
              return { ...e, ...n };
            })(r, n.props),
            ref: t ? a(t, l) : l,
          });
        }
        return o.Children.count(n) > 1 ? o.Children.only(null) : null;
      });
      f.displayName = "SlotClone";
      var p = ({ children: e }) => (0, s.jsx)(s.Fragment, { children: e });
      function m(e) {
        return o.isValidElement(e) && e.type === p;
      }
      var h = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "span",
        "svg",
        "ul",
      ].reduce((e, t) => {
        let n = o.forwardRef((e, n) => {
          let { asChild: r, ...o } = e,
            i = r ? d : t;
          return (
            "undefined" != typeof window &&
              (window[Symbol.for("radix-ui")] = !0),
            (0, s.jsx)(i, { ...o, ref: n })
          );
        });
        return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
      }, {});
      function g(e) {
        let t = o.useRef(e);
        return (
          o.useEffect(() => {
            t.current = e;
          }),
          o.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
      var v = "dismissableLayer.update",
        y = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        w = o.forwardRef((e, t) => {
          var n, i;
          let {
              disableOutsidePointerEvents: a = !1,
              onEscapeKeyDown: c,
              onPointerDownOutside: d,
              onFocusOutside: f,
              onInteractOutside: p,
              onDismiss: m,
              ...w
            } = e,
            E = o.useContext(y),
            [C, R] = o.useState(null),
            O =
              null !== (i = null == C ? void 0 : C.ownerDocument) &&
              void 0 !== i
                ? i
                : null === (n = globalThis) || void 0 === n
                ? void 0
                : n.document,
            [, _] = o.useState({}),
            P = u(t, (e) => R(e)),
            A = Array.from(E.layers),
            [j] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1),
            S = A.indexOf(j),
            T = C ? A.indexOf(C) : -1,
            L = E.layersWithOutsidePointerEventsDisabled.size > 0,
            N = T >= S,
            k = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = g(e),
                i = o.useRef(!1),
                l = o.useRef(() => {});
              return (
                o.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !i.current) {
                        let t = function () {
                            x("dismissableLayer.pointerDownOutside", r, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (n.removeEventListener("click", l.current),
                            (l.current = t),
                            n.addEventListener("click", l.current, {
                              once: !0,
                            }))
                          : t();
                      } else n.removeEventListener("click", l.current);
                      i.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      n.removeEventListener("pointerdown", e),
                      n.removeEventListener("click", l.current);
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (i.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...E.branches].some((e) => e.contains(t));
              !N ||
                n ||
                (null == d || d(e),
                null == p || p(e),
                e.defaultPrevented || null == m || m());
            }, O),
            M = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = g(e),
                i = o.useRef(!1);
              return (
                o.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !i.current &&
                      x(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                  );
                }, [n, r]),
                {
                  onFocusCapture: () => (i.current = !0),
                  onBlurCapture: () => (i.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...E.branches].some((e) => e.contains(t)) ||
                (null == f || f(e),
                null == p || p(e),
                e.defaultPrevented || null == m || m());
            }, O);
          return (
            !(function (e, t = globalThis?.document) {
              let n = g(e);
              o.useEffect(() => {
                let e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return (
                  t.addEventListener("keydown", e, { capture: !0 }),
                  () => t.removeEventListener("keydown", e, { capture: !0 })
                );
              }, [n, t]);
            })((e) => {
              T !== E.layers.size - 1 ||
                (null == c || c(e),
                !e.defaultPrevented && m && (e.preventDefault(), m()));
            }, O),
            o.useEffect(() => {
              if (C)
                return (
                  a &&
                    (0 === E.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = O.body.style.pointerEvents),
                      (O.body.style.pointerEvents = "none")),
                    E.layersWithOutsidePointerEventsDisabled.add(C)),
                  E.layers.add(C),
                  b(),
                  () => {
                    a &&
                      1 === E.layersWithOutsidePointerEventsDisabled.size &&
                      (O.body.style.pointerEvents = r);
                  }
                );
            }, [C, O, a, E]),
            o.useEffect(
              () => () => {
                C &&
                  (E.layers.delete(C),
                  E.layersWithOutsidePointerEventsDisabled.delete(C),
                  b());
              },
              [C, E]
            ),
            o.useEffect(() => {
              let e = () => _({});
              return (
                document.addEventListener(v, e),
                () => document.removeEventListener(v, e)
              );
            }, []),
            (0, s.jsx)(h.div, {
              ...w,
              ref: P,
              style: {
                pointerEvents: L ? (N ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: l(e.onFocusCapture, M.onFocusCapture),
              onBlurCapture: l(e.onBlurCapture, M.onBlurCapture),
              onPointerDownCapture: l(
                e.onPointerDownCapture,
                k.onPointerDownCapture
              ),
            })
          );
        });
      function b() {
        let e = new CustomEvent(v);
        document.dispatchEvent(e);
      }
      function x(e, t, n, r) {
        let { discrete: o } = r,
          i = n.originalEvent.target,
          l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        (t && i.addEventListener(e, t, { once: !0 }), o)
          ? i && c.flushSync(() => i.dispatchEvent(l))
          : i.dispatchEvent(l);
      }
      (w.displayName = "DismissableLayer"),
        (o.forwardRef((e, t) => {
          let n = o.useContext(y),
            r = o.useRef(null),
            i = u(t, r);
          return (
            o.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, s.jsx)(h.div, { ...e, ref: i })
          );
        }).displayName = "DismissableLayerBranch");
      var E = globalThis?.document ? o.useLayoutEffect : () => {},
        C = i["useId".toString()] || (() => void 0),
        R = 0;
      let O = ["top", "right", "bottom", "left"],
        _ = Math.min,
        P = Math.max,
        A = Math.round,
        j = Math.floor,
        S = (e) => ({ x: e, y: e }),
        T = { left: "right", right: "left", bottom: "top", top: "bottom" },
        L = { start: "end", end: "start" };
      function N(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function k(e) {
        return e.split("-")[0];
      }
      function M(e) {
        return e.split("-")[1];
      }
      function D(e) {
        return "x" === e ? "y" : "x";
      }
      function I(e) {
        return "y" === e ? "height" : "width";
      }
      function z(e) {
        return ["top", "bottom"].includes(k(e)) ? "y" : "x";
      }
      function W(e) {
        return e.replace(/start|end/g, (e) => L[e]);
      }
      function V(e) {
        return e.replace(/left|right|bottom|top/g, (e) => T[e]);
      }
      function F(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function B(e) {
        let { x: t, y: n, width: r, height: o } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n,
        };
      }
      function H(e, t, n) {
        let r,
          { reference: o, floating: i } = e,
          l = z(t),
          a = D(z(t)),
          u = I(a),
          s = k(t),
          c = "y" === l,
          d = o.x + o.width / 2 - i.width / 2,
          f = o.y + o.height / 2 - i.height / 2,
          p = o[u] / 2 - i[u] / 2;
        switch (s) {
          case "top":
            r = { x: d, y: o.y - i.height };
            break;
          case "bottom":
            r = { x: d, y: o.y + o.height };
            break;
          case "right":
            r = { x: o.x + o.width, y: f };
            break;
          case "left":
            r = { x: o.x - i.width, y: f };
            break;
          default:
            r = { x: o.x, y: o.y };
        }
        switch (M(t)) {
          case "start":
            r[a] -= p * (n && c ? -1 : 1);
            break;
          case "end":
            r[a] += p * (n && c ? -1 : 1);
        }
        return r;
      }
      let U = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: i = [],
            platform: l,
          } = n,
          a = i.filter(Boolean),
          u = await (null == l.isRTL ? void 0 : l.isRTL(t)),
          s = await l.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: c, y: d } = H(s, r, u),
          f = r,
          p = {},
          m = 0;
        for (let n = 0; n < a.length; n++) {
          let { name: i, fn: h } = a[n],
            {
              x: g,
              y: v,
              data: y,
              reset: w,
            } = await h({
              x: c,
              y: d,
              initialPlacement: r,
              placement: f,
              strategy: o,
              middlewareData: p,
              rects: s,
              platform: l,
              elements: { reference: e, floating: t },
            });
          (c = null != g ? g : c),
            (d = null != v ? v : d),
            (p = { ...p, [i]: { ...p[i], ...y } }),
            w &&
              m <= 50 &&
              (m++,
              "object" == typeof w &&
                (w.placement && (f = w.placement),
                w.rects &&
                  (s =
                    !0 === w.rects
                      ? await l.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : w.rects),
                ({ x: c, y: d } = H(s, f, u))),
              (n = -1));
        }
        return { x: c, y: d, placement: f, strategy: o, middlewareData: p };
      };
      async function $(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: o, platform: i, rects: l, elements: a, strategy: u } = e,
          {
            boundary: s = "clippingAncestors",
            rootBoundary: c = "viewport",
            elementContext: d = "floating",
            altBoundary: f = !1,
            padding: p = 0,
          } = N(t, e),
          m = F(p),
          h = a[f ? ("floating" === d ? "reference" : "floating") : d],
          g = B(
            await i.getClippingRect({
              element:
                null ==
                  (n = await (null == i.isElement ? void 0 : i.isElement(h))) ||
                n
                  ? h
                  : h.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(a.floating))),
              boundary: s,
              rootBoundary: c,
              strategy: u,
            })
          ),
          v =
            "floating" === d
              ? {
                  x: r,
                  y: o,
                  width: l.floating.width,
                  height: l.floating.height,
                }
              : l.reference,
          y = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(a.floating)),
          w = ((await (null == i.isElement ? void 0 : i.isElement(y))) &&
            (await (null == i.getScale ? void 0 : i.getScale(y)))) || {
            x: 1,
            y: 1,
          },
          b = B(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: a,
                  rect: v,
                  offsetParent: y,
                  strategy: u,
                })
              : v
          );
        return {
          top: (g.top - b.top + m.top) / w.y,
          bottom: (b.bottom - g.bottom + m.bottom) / w.y,
          left: (g.left - b.left + m.left) / w.x,
          right: (b.right - g.right + m.right) / w.x,
        };
      }
      function Z(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function Y(e) {
        return O.some((t) => e[t] >= 0);
      }
      async function G(e, t) {
        let { placement: n, platform: r, elements: o } = e,
          i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
          l = k(n),
          a = M(n),
          u = "y" === z(n),
          s = ["left", "top"].includes(l) ? -1 : 1,
          c = i && u ? -1 : 1,
          d = N(t, e),
          {
            mainAxis: f,
            crossAxis: p,
            alignmentAxis: m,
          } = "number" == typeof d
            ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: d.mainAxis || 0,
                crossAxis: d.crossAxis || 0,
                alignmentAxis: d.alignmentAxis,
              };
        return (
          a && "number" == typeof m && (p = "end" === a ? -1 * m : m),
          u ? { x: p * c, y: f * s } : { x: f * s, y: p * c }
        );
      }
      function X() {
        return "undefined" != typeof window;
      }
      function q(e) {
        return Q(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function J(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function K(e) {
        var t;
        return null ==
          (t = (Q(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function Q(e) {
        return !!X() && (e instanceof Node || e instanceof J(e).Node);
      }
      function ee(e) {
        return !!X() && (e instanceof Element || e instanceof J(e).Element);
      }
      function et(e) {
        return (
          !!X() && (e instanceof HTMLElement || e instanceof J(e).HTMLElement)
        );
      }
      function en(e) {
        return (
          !!X() &&
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof J(e).ShadowRoot)
        );
      }
      function er(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = eu(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(o)
        );
      }
      function eo(e) {
        return [":popover-open", ":modal"].some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function ei(e) {
        let t = el(),
          n = ee(e) ? eu(e) : e;
        return (
          "none" !== n.transform ||
          "none" !== n.perspective ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          ["transform", "perspective", "filter"].some((e) =>
            (n.willChange || "").includes(e)
          ) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e)
          )
        );
      }
      function el() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function ea(e) {
        return ["html", "body", "#document"].includes(q(e));
      }
      function eu(e) {
        return J(e).getComputedStyle(e);
      }
      function es(e) {
        return ee(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function ec(e) {
        if ("html" === q(e)) return e;
        let t = e.assignedSlot || e.parentNode || (en(e) && e.host) || K(e);
        return en(t) ? t.host : t;
      }
      function ed(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let o = (function e(t) {
            let n = ec(t);
            return ea(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : et(n) && er(n)
              ? n
              : e(n);
          })(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          l = J(o);
        if (i) {
          let e = ef(l);
          return t.concat(
            l,
            l.visualViewport || [],
            er(o) ? o : [],
            e && n ? ed(e) : []
          );
        }
        return t.concat(o, ed(o, [], n));
      }
      function ef(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
      function ep(e) {
        let t = eu(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          o = et(e),
          i = o ? e.offsetWidth : n,
          l = o ? e.offsetHeight : r,
          a = A(n) !== i || A(r) !== l;
        return a && ((n = i), (r = l)), { width: n, height: r, $: a };
      }
      function em(e) {
        return ee(e) ? e : e.contextElement;
      }
      function eh(e) {
        let t = em(e);
        if (!et(t)) return S(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: o, $: i } = ep(t),
          l = (i ? A(n.width) : n.width) / r,
          a = (i ? A(n.height) : n.height) / o;
        return (
          (l && Number.isFinite(l)) || (l = 1),
          (a && Number.isFinite(a)) || (a = 1),
          { x: l, y: a }
        );
      }
      let eg = S(0);
      function ev(e) {
        let t = J(e);
        return el() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : eg;
      }
      function ey(e, t, n, r) {
        var o;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let i = e.getBoundingClientRect(),
          l = em(e),
          a = S(1);
        t && (r ? ee(r) && (a = eh(r)) : (a = eh(e)));
        let u = (void 0 === (o = n) && (o = !1), r && (!o || r === J(l)) && o)
            ? ev(l)
            : S(0),
          s = (i.left + u.x) / a.x,
          c = (i.top + u.y) / a.y,
          d = i.width / a.x,
          f = i.height / a.y;
        if (l) {
          let e = J(l),
            t = r && ee(r) ? J(r) : r,
            n = e,
            o = ef(n);
          for (; o && r && t !== n; ) {
            let e = eh(o),
              t = o.getBoundingClientRect(),
              r = eu(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            (s *= e.x),
              (c *= e.y),
              (d *= e.x),
              (f *= e.y),
              (s += i),
              (c += l),
              (o = ef((n = J(o))));
          }
        }
        return B({ width: d, height: f, x: s, y: c });
      }
      function ew(e, t) {
        let n = es(e).scrollLeft;
        return t ? t.left + n : ey(K(e)).left + n;
      }
      function eb(e, t, n) {
        let r;
        if ("viewport" === t)
          r = (function (e, t) {
            let n = J(e),
              r = K(e),
              o = n.visualViewport,
              i = r.clientWidth,
              l = r.clientHeight,
              a = 0,
              u = 0;
            if (o) {
              (i = o.width), (l = o.height);
              let e = el();
              (!e || (e && "fixed" === t)) &&
                ((a = o.offsetLeft), (u = o.offsetTop));
            }
            return { width: i, height: l, x: a, y: u };
          })(e, n);
        else if ("document" === t)
          r = (function (e) {
            let t = K(e),
              n = es(e),
              r = e.ownerDocument.body,
              o = P(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              i = P(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight
              ),
              l = -n.scrollLeft + ew(e),
              a = -n.scrollTop;
            return (
              "rtl" === eu(r).direction &&
                (l += P(t.clientWidth, r.clientWidth) - o),
              { width: o, height: i, x: l, y: a }
            );
          })(K(e));
        else if (ee(t))
          r = (function (e, t) {
            let n = ey(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              i = et(e) ? eh(e) : S(1),
              l = e.clientWidth * i.x;
            return {
              width: l,
              height: e.clientHeight * i.y,
              x: o * i.x,
              y: r * i.y,
            };
          })(t, n);
        else {
          let n = ev(e);
          r = { ...t, x: t.x - n.x, y: t.y - n.y };
        }
        return B(r);
      }
      function ex(e) {
        return "static" === eu(e).position;
      }
      function eE(e, t) {
        if (!et(e) || "fixed" === eu(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return K(e) === n && (n = n.ownerDocument.body), n;
      }
      function eC(e, t) {
        let n = J(e);
        if (eo(e)) return n;
        if (!et(e)) {
          let t = ec(e);
          for (; t && !ea(t); ) {
            if (ee(t) && !ex(t)) return t;
            t = ec(t);
          }
          return n;
        }
        let r = eE(e, t);
        for (; r && ["table", "td", "th"].includes(q(r)) && ex(r); )
          r = eE(r, t);
        return r && ea(r) && ex(r) && !ei(r)
          ? n
          : r ||
              (function (e) {
                let t = ec(e);
                for (; et(t) && !ea(t); ) {
                  if (ei(t)) return t;
                  if (eo(t)) break;
                  t = ec(t);
                }
                return null;
              })(e) ||
              n;
      }
      let eR = async function (e) {
          let t = this.getOffsetParent || eC,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: (function (e, t, n) {
              let r = et(t),
                o = K(t),
                i = "fixed" === n,
                l = ey(e, !0, i, t),
                a = { scrollLeft: 0, scrollTop: 0 },
                u = S(0);
              if (r || (!r && !i)) {
                if ((("body" !== q(t) || er(o)) && (a = es(t)), r)) {
                  let e = ey(t, !0, i, t);
                  (u.x = e.x + t.clientLeft), (u.y = e.y + t.clientTop);
                } else o && (u.x = ew(o));
              }
              let s = 0,
                c = 0;
              if (o && !r && !i) {
                let e = o.getBoundingClientRect();
                (c = e.top + a.scrollTop),
                  (s = e.left + a.scrollLeft - ew(o, e));
              }
              return {
                x: l.left + a.scrollLeft - u.x - s,
                y: l.top + a.scrollTop - u.y - c,
                width: l.width,
                height: l.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        eO = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
              i = "fixed" === o,
              l = K(r),
              a = !!t && eo(t.floating);
            if (r === l || (a && i)) return n;
            let u = { scrollLeft: 0, scrollTop: 0 },
              s = S(1),
              c = S(0),
              d = et(r);
            if (
              (d || (!d && !i)) &&
              (("body" !== q(r) || er(l)) && (u = es(r)), et(r))
            ) {
              let e = ey(r);
              (s = eh(r)),
                (c.x = e.x + r.clientLeft),
                (c.y = e.y + r.clientTop);
            }
            return {
              width: n.width * s.x,
              height: n.height * s.y,
              x: n.x * s.x - u.scrollLeft * s.x + c.x,
              y: n.y * s.y - u.scrollTop * s.y + c.y,
            };
          },
          getDocumentElement: K,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
              i = [
                ...("clippingAncestors" === n
                  ? eo(t)
                    ? []
                    : (function (e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = ed(e, [], !1).filter(
                            (e) => ee(e) && "body" !== q(e)
                          ),
                          o = null,
                          i = "fixed" === eu(e).position,
                          l = i ? ec(e) : e;
                        for (; ee(l) && !ea(l); ) {
                          let t = eu(l),
                            n = ei(l);
                          n || "fixed" !== t.position || (o = null),
                            (
                              i
                                ? !n && !o
                                : (!n &&
                                    "static" === t.position &&
                                    !!o &&
                                    ["absolute", "fixed"].includes(
                                      o.position
                                    )) ||
                                  (er(l) &&
                                    !n &&
                                    (function e(t, n) {
                                      let r = ec(t);
                                      return (
                                        !(r === n || !ee(r) || ea(r)) &&
                                        ("fixed" === eu(r).position || e(r, n))
                                      );
                                    })(e, l))
                            )
                              ? (r = r.filter((e) => e !== l))
                              : (o = t),
                            (l = ec(l));
                        }
                        return t.set(e, r), r;
                      })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              l = i[0],
              a = i.reduce((e, n) => {
                let r = eb(t, n, o);
                return (
                  (e.top = P(r.top, e.top)),
                  (e.right = _(r.right, e.right)),
                  (e.bottom = _(r.bottom, e.bottom)),
                  (e.left = P(r.left, e.left)),
                  e
                );
              }, eb(t, l, o));
            return {
              width: a.right - a.left,
              height: a.bottom - a.top,
              x: a.left,
              y: a.top,
            };
          },
          getOffsetParent: eC,
          getElementRects: eR,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = ep(e);
            return { width: t, height: n };
          },
          getScale: eh,
          isElement: ee,
          isRTL: function (e) {
            return "rtl" === eu(e).direction;
          },
        },
        e_ = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: o,
                rects: i,
                platform: l,
                elements: a,
                middlewareData: u,
              } = t,
              { element: s, padding: c = 0 } = N(e, t) || {};
            if (null == s) return {};
            let d = F(c),
              f = { x: n, y: r },
              p = D(z(o)),
              m = I(p),
              h = await l.getDimensions(s),
              g = "y" === p,
              v = g ? "clientHeight" : "clientWidth",
              y = i.reference[m] + i.reference[p] - f[p] - i.floating[m],
              w = f[p] - i.reference[p],
              b = await (null == l.getOffsetParent
                ? void 0
                : l.getOffsetParent(s)),
              x = b ? b[v] : 0;
            (x && (await (null == l.isElement ? void 0 : l.isElement(b)))) ||
              (x = a.floating[v] || i.floating[m]);
            let E = x / 2 - h[m] / 2 - 1,
              C = _(d[g ? "top" : "left"], E),
              R = _(d[g ? "bottom" : "right"], E),
              O = x - h[m] - R,
              A = x / 2 - h[m] / 2 + (y / 2 - w / 2),
              j = P(C, _(A, O)),
              S =
                !u.arrow &&
                null != M(o) &&
                A !== j &&
                i.reference[m] / 2 - (A < C ? C : R) - h[m] / 2 < 0,
              T = S ? (A < C ? A - C : A - O) : 0;
            return {
              [p]: f[p] + T,
              data: {
                [p]: j,
                centerOffset: A - j - T,
                ...(S && { alignmentOffset: T }),
              },
              reset: S,
            };
          },
        }),
        eP = (e, t, n) => {
          let r = new Map(),
            o = { platform: eO, ...n },
            i = { ...o.platform, _c: r };
          return U(e, t, { ...o, platform: i });
        };
      var eA = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
      function ej(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!ej(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !ej(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function eS(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function eT(e, t) {
        let n = eS(e);
        return Math.round(t * n) / n;
      }
      function eL(e) {
        let t = o.useRef(e);
        return (
          eA(() => {
            t.current = e;
          }),
          t
        );
      }
      let eN = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: n, padding: r } = "function" == typeof e ? e(t) : e;
            return n && {}.hasOwnProperty.call(n, "current")
              ? null != n.current
                ? e_({ element: n.current, padding: r }).fn(t)
                : {}
              : n
              ? e_({ element: n, padding: r }).fn(t)
              : {};
          },
        }),
        ek = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = 0),
            {
              name: "offset",
              options: n,
              async fn(e) {
                var t, r;
                let { x: o, y: i, placement: l, middlewareData: a } = e,
                  u = await G(e, n);
                return l === (null == (t = a.offset) ? void 0 : t.placement) &&
                  null != (r = a.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : { x: o + u.x, y: i + u.y, data: { ...u, placement: l } };
              },
            }),
            options: [e, t],
          };
        },
        eM = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "shift",
              options: n,
              async fn(e) {
                let { x: t, y: r, placement: o } = e,
                  {
                    mainAxis: i = !0,
                    crossAxis: l = !1,
                    limiter: a = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...u
                  } = N(n, e),
                  s = { x: t, y: r },
                  c = await $(e, u),
                  d = z(k(o)),
                  f = D(d),
                  p = s[f],
                  m = s[d];
                if (i) {
                  let e = "y" === f ? "top" : "left",
                    t = "y" === f ? "bottom" : "right",
                    n = p + c[e],
                    r = p - c[t];
                  p = P(n, _(p, r));
                }
                if (l) {
                  let e = "y" === d ? "top" : "left",
                    t = "y" === d ? "bottom" : "right",
                    n = m + c[e],
                    r = m - c[t];
                  m = P(n, _(m, r));
                }
                let h = a.fn({ ...e, [f]: p, [d]: m });
                return {
                  ...h,
                  data: { x: h.x - t, y: h.y - r, enabled: { [f]: i, [d]: l } },
                };
              },
            }),
            options: [e, t],
          };
        },
        eD = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              options: n,
              fn(e) {
                let {
                    x: t,
                    y: r,
                    placement: o,
                    rects: i,
                    middlewareData: l,
                  } = e,
                  {
                    offset: a = 0,
                    mainAxis: u = !0,
                    crossAxis: s = !0,
                  } = N(n, e),
                  c = { x: t, y: r },
                  d = z(o),
                  f = D(d),
                  p = c[f],
                  m = c[d],
                  h = N(a, e),
                  g =
                    "number" == typeof h
                      ? { mainAxis: h, crossAxis: 0 }
                      : { mainAxis: 0, crossAxis: 0, ...h };
                if (u) {
                  let e = "y" === f ? "height" : "width",
                    t = i.reference[f] - i.floating[e] + g.mainAxis,
                    n = i.reference[f] + i.reference[e] - g.mainAxis;
                  p < t ? (p = t) : p > n && (p = n);
                }
                if (s) {
                  var v, y;
                  let e = "y" === f ? "width" : "height",
                    t = ["top", "left"].includes(k(o)),
                    n =
                      i.reference[d] -
                      i.floating[e] +
                      ((t && (null == (v = l.offset) ? void 0 : v[d])) || 0) +
                      (t ? 0 : g.crossAxis),
                    r =
                      i.reference[d] +
                      i.reference[e] +
                      (t ? 0 : (null == (y = l.offset) ? void 0 : y[d]) || 0) -
                      (t ? g.crossAxis : 0);
                  m < n ? (m = n) : m > r && (m = r);
                }
                return { [f]: p, [d]: m };
              },
            }),
            options: [e, t],
          };
        },
        eI = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "flip",
              options: n,
              async fn(e) {
                var t, r, o, i, l;
                let {
                    placement: a,
                    middlewareData: u,
                    rects: s,
                    initialPlacement: c,
                    platform: d,
                    elements: f,
                  } = e,
                  {
                    mainAxis: p = !0,
                    crossAxis: m = !0,
                    fallbackPlacements: h,
                    fallbackStrategy: g = "bestFit",
                    fallbackAxisSideDirection: v = "none",
                    flipAlignment: y = !0,
                    ...w
                  } = N(n, e);
                if (null != (t = u.arrow) && t.alignmentOffset) return {};
                let b = k(a),
                  x = z(c),
                  E = k(c) === c,
                  C = await (null == d.isRTL ? void 0 : d.isRTL(f.floating)),
                  R =
                    h ||
                    (E || !y
                      ? [V(c)]
                      : (function (e) {
                          let t = V(e);
                          return [W(e), t, W(t)];
                        })(c)),
                  O = "none" !== v;
                !h &&
                  O &&
                  R.push(
                    ...(function (e, t, n, r) {
                      let o = M(e),
                        i = (function (e, t, n) {
                          let r = ["left", "right"],
                            o = ["right", "left"];
                          switch (e) {
                            case "top":
                            case "bottom":
                              if (n) return t ? o : r;
                              return t ? r : o;
                            case "left":
                            case "right":
                              return t ? ["top", "bottom"] : ["bottom", "top"];
                            default:
                              return [];
                          }
                        })(k(e), "start" === n, r);
                      return (
                        o &&
                          ((i = i.map((e) => e + "-" + o)),
                          t && (i = i.concat(i.map(W)))),
                        i
                      );
                    })(c, y, v, C)
                  );
                let _ = [c, ...R],
                  P = await $(e, w),
                  A = [],
                  j = (null == (r = u.flip) ? void 0 : r.overflows) || [];
                if ((p && A.push(P[b]), m)) {
                  let e = (function (e, t, n) {
                    void 0 === n && (n = !1);
                    let r = M(e),
                      o = D(z(e)),
                      i = I(o),
                      l =
                        "x" === o
                          ? r === (n ? "end" : "start")
                            ? "right"
                            : "left"
                          : "start" === r
                          ? "bottom"
                          : "top";
                    return (
                      t.reference[i] > t.floating[i] && (l = V(l)), [l, V(l)]
                    );
                  })(a, s, C);
                  A.push(P[e[0]], P[e[1]]);
                }
                if (
                  ((j = [...j, { placement: a, overflows: A }]),
                  !A.every((e) => e <= 0))
                ) {
                  let e = ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1,
                    t = _[e];
                  if (t)
                    return {
                      data: { index: e, overflows: j },
                      reset: { placement: t },
                    };
                  let n =
                    null ==
                    (i = j
                      .filter((e) => e.overflows[0] <= 0)
                      .sort((e, t) => e.overflows[1] - t.overflows[1])[0])
                      ? void 0
                      : i.placement;
                  if (!n)
                    switch (g) {
                      case "bestFit": {
                        let e =
                          null ==
                          (l = j
                            .filter((e) => {
                              if (O) {
                                let t = z(e.placement);
                                return t === x || "y" === t;
                              }
                              return !0;
                            })
                            .map((e) => [
                              e.placement,
                              e.overflows
                                .filter((e) => e > 0)
                                .reduce((e, t) => e + t, 0),
                            ])
                            .sort((e, t) => e[1] - t[1])[0])
                            ? void 0
                            : l[0];
                        e && (n = e);
                        break;
                      }
                      case "initialPlacement":
                        n = c;
                    }
                  if (a !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }),
            options: [e, t],
          };
        },
        ez = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "size",
              options: n,
              async fn(e) {
                var t, r;
                let o, i;
                let { placement: l, rects: a, platform: u, elements: s } = e,
                  { apply: c = () => {}, ...d } = N(n, e),
                  f = await $(e, d),
                  p = k(l),
                  m = M(l),
                  h = "y" === z(l),
                  { width: g, height: v } = a.floating;
                "top" === p || "bottom" === p
                  ? ((o = p),
                    (i =
                      m ===
                      ((await (null == u.isRTL ? void 0 : u.isRTL(s.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((i = p), (o = "end" === m ? "top" : "bottom"));
                let y = v - f.top - f.bottom,
                  w = g - f.left - f.right,
                  b = _(v - f[o], y),
                  x = _(g - f[i], w),
                  E = !e.middlewareData.shift,
                  C = b,
                  R = x;
                if (
                  (null != (t = e.middlewareData.shift) &&
                    t.enabled.x &&
                    (R = w),
                  null != (r = e.middlewareData.shift) &&
                    r.enabled.y &&
                    (C = y),
                  E && !m)
                ) {
                  let e = P(f.left, 0),
                    t = P(f.right, 0),
                    n = P(f.top, 0),
                    r = P(f.bottom, 0);
                  h
                    ? (R =
                        g -
                        2 * (0 !== e || 0 !== t ? e + t : P(f.left, f.right)))
                    : (C =
                        v -
                        2 * (0 !== n || 0 !== r ? n + r : P(f.top, f.bottom)));
                }
                await c({ ...e, availableWidth: R, availableHeight: C });
                let O = await u.getDimensions(s.floating);
                return g !== O.width || v !== O.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }),
            options: [e, t],
          };
        },
        eW = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "hide",
              options: n,
              async fn(e) {
                let { rects: t } = e,
                  { strategy: r = "referenceHidden", ...o } = N(n, e);
                switch (r) {
                  case "referenceHidden": {
                    let n = Z(
                      await $(e, { ...o, elementContext: "reference" }),
                      t.reference
                    );
                    return {
                      data: {
                        referenceHiddenOffsets: n,
                        referenceHidden: Y(n),
                      },
                    };
                  }
                  case "escaped": {
                    let n = Z(
                      await $(e, { ...o, altBoundary: !0 }),
                      t.floating
                    );
                    return { data: { escapedOffsets: n, escaped: Y(n) } };
                  }
                  default:
                    return {};
                }
              },
            }),
            options: [e, t],
          };
        },
        eV = (e, t) => ({ ...eN(e), options: [e, t] });
      var eF = o.forwardRef((e, t) => {
        let { children: n, ...r } = e,
          i = o.Children.toArray(n),
          l = i.find(eU);
        if (l) {
          let e = l.props.children,
            n = i.map((t) =>
              t !== l
                ? t
                : o.Children.count(e) > 1
                ? o.Children.only(null)
                : o.isValidElement(e)
                ? e.props.children
                : null
            );
          return (0, s.jsx)(eB, {
            ...r,
            ref: t,
            children: o.isValidElement(e) ? o.cloneElement(e, void 0, n) : null,
          });
        }
        return (0, s.jsx)(eB, { ...r, ref: t, children: n });
      });
      eF.displayName = "Slot";
      var eB = o.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (o.isValidElement(n)) {
          let e, i;
          let l =
            (e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get) &&
            "isReactWarning" in e &&
            e.isReactWarning
              ? n.ref
              : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get) &&
                "isReactWarning" in e &&
                e.isReactWarning
              ? n.props.ref
              : n.props.ref || n.ref;
          return o.cloneElement(n, {
            ...(function (e, t) {
              let n = { ...t };
              for (let r in t) {
                let o = e[r],
                  i = t[r];
                /^on[A-Z]/.test(r)
                  ? o && i
                    ? (n[r] = (...e) => {
                        i(...e), o(...e);
                      })
                    : o && (n[r] = o)
                  : "style" === r
                  ? (n[r] = { ...o, ...i })
                  : "className" === r &&
                    (n[r] = [o, i].filter(Boolean).join(" "));
              }
              return { ...e, ...n };
            })(r, n.props),
            ref: t
              ? (function (...e) {
                  return (t) =>
                    e.forEach((e) => {
                      "function" == typeof e
                        ? e(t)
                        : null != e && (e.current = t);
                    });
                })(t, l)
              : l,
          });
        }
        return o.Children.count(n) > 1 ? o.Children.only(null) : null;
      });
      eB.displayName = "SlotClone";
      var eH = ({ children: e }) => (0, s.jsx)(s.Fragment, { children: e });
      function eU(e) {
        return o.isValidElement(e) && e.type === eH;
      }
      var e$ = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = o.forwardRef((e, n) => {
            let { asChild: r, ...o } = e,
              i = r ? eF : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, s.jsx)(i, { ...o, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {}),
        eZ = o.forwardRef((e, t) => {
          let { children: n, width: r = 10, height: o = 5, ...i } = e;
          return (0, s.jsx)(e$.svg, {
            ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild
              ? n
              : (0, s.jsx)("polygon", { points: "0,0 30,0 15,10" }),
          });
        });
      function eY(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function eG(...e) {
        return o.useCallback(eY(...e), e);
      }
      eZ.displayName = "Arrow";
      var eX = o.forwardRef((e, t) => {
        let { children: n, ...r } = e,
          i = o.Children.toArray(n),
          l = i.find(eK);
        if (l) {
          let e = l.props.children,
            n = i.map((t) =>
              t !== l
                ? t
                : o.Children.count(e) > 1
                ? o.Children.only(null)
                : o.isValidElement(e)
                ? e.props.children
                : null
            );
          return (0, s.jsx)(eq, {
            ...r,
            ref: t,
            children: o.isValidElement(e) ? o.cloneElement(e, void 0, n) : null,
          });
        }
        return (0, s.jsx)(eq, { ...r, ref: t, children: n });
      });
      eX.displayName = "Slot";
      var eq = o.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (o.isValidElement(n)) {
          let e, i;
          let l =
            (e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get) &&
            "isReactWarning" in e &&
            e.isReactWarning
              ? n.ref
              : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get) &&
                "isReactWarning" in e &&
                e.isReactWarning
              ? n.props.ref
              : n.props.ref || n.ref;
          return o.cloneElement(n, {
            ...(function (e, t) {
              let n = { ...t };
              for (let r in t) {
                let o = e[r],
                  i = t[r];
                /^on[A-Z]/.test(r)
                  ? o && i
                    ? (n[r] = (...e) => {
                        i(...e), o(...e);
                      })
                    : o && (n[r] = o)
                  : "style" === r
                  ? (n[r] = { ...o, ...i })
                  : "className" === r &&
                    (n[r] = [o, i].filter(Boolean).join(" "));
              }
              return { ...e, ...n };
            })(r, n.props),
            ref: t ? eY(t, l) : l,
          });
        }
        return o.Children.count(n) > 1 ? o.Children.only(null) : null;
      });
      eq.displayName = "SlotClone";
      var eJ = ({ children: e }) => (0, s.jsx)(s.Fragment, { children: e });
      function eK(e) {
        return o.isValidElement(e) && e.type === eJ;
      }
      var eQ = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = o.forwardRef((e, n) => {
            let { asChild: r, ...o } = e,
              i = r ? eX : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, s.jsx)(i, { ...o, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {}),
        e0 = globalThis?.document ? o.useLayoutEffect : () => {},
        e1 = globalThis?.document ? o.useLayoutEffect : () => {},
        e2 = "Popper",
        [e3, e8] = (function (e, t = []) {
          let n = [],
            r = () => {
              let t = n.map((e) => o.createContext(e));
              return function (n) {
                let r = n?.[e] || t;
                return o.useMemo(
                  () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                  [n, r]
                );
              };
            };
          return (
            (r.scopeName = e),
            [
              function (t, r) {
                let i = o.createContext(r),
                  l = n.length;
                function a(t) {
                  let { scope: n, children: r, ...a } = t,
                    u = n?.[e][l] || i,
                    c = o.useMemo(() => a, Object.values(a));
                  return (0, s.jsx)(u.Provider, { value: c, children: r });
                }
                return (
                  (n = [...n, r]),
                  (a.displayName = t + "Provider"),
                  [
                    a,
                    function (n, a) {
                      let u = a?.[e][l] || i,
                        s = o.useContext(u);
                      if (s) return s;
                      if (void 0 !== r) return r;
                      throw Error(`\`${n}\` must be used within \`${t}\``);
                    },
                  ]
                );
              },
              (function (...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let n = () => {
                  let n = e.map((e) => ({
                    useScope: e(),
                    scopeName: e.scopeName,
                  }));
                  return function (e) {
                    let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                      let o = n(e)[`__scope${r}`];
                      return { ...t, ...o };
                    }, {});
                    return o.useMemo(
                      () => ({ [`__scope${t.scopeName}`]: r }),
                      [r]
                    );
                  };
                };
                return (n.scopeName = t.scopeName), n;
              })(r, ...t),
            ]
          );
        })(e2),
        [e4, e5] = e3(e2),
        e6 = (e) => {
          let { __scopePopper: t, children: n } = e,
            [r, i] = o.useState(null);
          return (0, s.jsx)(e4, {
            scope: t,
            anchor: r,
            onAnchorChange: i,
            children: n,
          });
        };
      e6.displayName = e2;
      var e7 = "PopperAnchor",
        e9 = o.forwardRef((e, t) => {
          let { __scopePopper: n, virtualRef: r, ...i } = e,
            l = e5(e7, n),
            a = o.useRef(null),
            u = eG(t, a);
          return (
            o.useEffect(() => {
              l.onAnchorChange((null == r ? void 0 : r.current) || a.current);
            }),
            r ? null : (0, s.jsx)(eQ.div, { ...i, ref: u })
          );
        });
      e9.displayName = e7;
      var te = "PopperContent",
        [tt, tn] = e3(te),
        tr = o.forwardRef((e, t) => {
          var n, r, i, l, a, u, d, f;
          let {
              __scopePopper: p,
              side: m = "bottom",
              sideOffset: h = 0,
              align: g = "center",
              alignOffset: v = 0,
              arrowPadding: y = 0,
              avoidCollisions: w = !0,
              collisionBoundary: b = [],
              collisionPadding: x = 0,
              sticky: E = "partial",
              hideWhenDetached: C = !1,
              updatePositionStrategy: R = "optimized",
              onPlaced: O,
              ...A
            } = e,
            S = e5(te, p),
            [T, L] = o.useState(null),
            N = eG(t, (e) => L(e)),
            [k, M] = o.useState(null),
            D = (function (e) {
              let [t, n] = o.useState(void 0);
              return (
                e1(() => {
                  if (e) {
                    n({ width: e.offsetWidth, height: e.offsetHeight });
                    let t = new ResizeObserver((t) => {
                      let r, o;
                      if (!Array.isArray(t) || !t.length) return;
                      let i = t[0];
                      if ("borderBoxSize" in i) {
                        let e = i.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        (r = t.inlineSize), (o = t.blockSize);
                      } else (r = e.offsetWidth), (o = e.offsetHeight);
                      n({ width: r, height: o });
                    });
                    return (
                      t.observe(e, { box: "border-box" }), () => t.unobserve(e)
                    );
                  }
                  n(void 0);
                }, [e]),
                t
              );
            })(k),
            I =
              null !== (d = null == D ? void 0 : D.width) && void 0 !== d
                ? d
                : 0,
            z =
              null !== (f = null == D ? void 0 : D.height) && void 0 !== f
                ? f
                : 0,
            W =
              "number" == typeof x
                ? x
                : { top: 0, right: 0, bottom: 0, left: 0, ...x },
            V = Array.isArray(b) ? b : [b],
            F = V.length > 0,
            B = { padding: W, boundary: V.filter(ta), altBoundary: F },
            {
              refs: H,
              floatingStyles: U,
              placement: $,
              isPositioned: Z,
              middlewareData: Y,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: n = "absolute",
                  middleware: r = [],
                  platform: i,
                  elements: { reference: l, floating: a } = {},
                  transform: u = !0,
                  whileElementsMounted: s,
                  open: d,
                } = e,
                [f, p] = o.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [m, h] = o.useState(r);
              ej(m, r) || h(r);
              let [g, v] = o.useState(null),
                [y, w] = o.useState(null),
                b = o.useCallback((e) => {
                  e !== R.current && ((R.current = e), v(e));
                }, []),
                x = o.useCallback((e) => {
                  e !== O.current && ((O.current = e), w(e));
                }, []),
                E = l || g,
                C = a || y,
                R = o.useRef(null),
                O = o.useRef(null),
                _ = o.useRef(f),
                P = null != s,
                A = eL(s),
                j = eL(i),
                S = eL(d),
                T = o.useCallback(() => {
                  if (!R.current || !O.current) return;
                  let e = { placement: t, strategy: n, middleware: m };
                  j.current && (e.platform = j.current),
                    eP(R.current, O.current, e).then((e) => {
                      let t = { ...e, isPositioned: !1 !== S.current };
                      L.current &&
                        !ej(_.current, t) &&
                        ((_.current = t),
                        c.flushSync(() => {
                          p(t);
                        }));
                    });
                }, [m, t, n, j, S]);
              eA(() => {
                !1 === d &&
                  _.current.isPositioned &&
                  ((_.current.isPositioned = !1),
                  p((e) => ({ ...e, isPositioned: !1 })));
              }, [d]);
              let L = o.useRef(!1);
              eA(
                () => (
                  (L.current = !0),
                  () => {
                    L.current = !1;
                  }
                ),
                []
              ),
                eA(() => {
                  if ((E && (R.current = E), C && (O.current = C), E && C)) {
                    if (A.current) return A.current(E, C, T);
                    T();
                  }
                }, [E, C, T, A, P]);
              let N = o.useMemo(
                  () => ({
                    reference: R,
                    floating: O,
                    setReference: b,
                    setFloating: x,
                  }),
                  [b, x]
                ),
                k = o.useMemo(() => ({ reference: E, floating: C }), [E, C]),
                M = o.useMemo(() => {
                  let e = { position: n, left: 0, top: 0 };
                  if (!k.floating) return e;
                  let t = eT(k.floating, f.x),
                    r = eT(k.floating, f.y);
                  return u
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...(eS(k.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, u, k.floating, f.x, f.y]);
              return o.useMemo(
                () => ({
                  ...f,
                  update: T,
                  refs: N,
                  elements: k,
                  floatingStyles: M,
                }),
                [f, T, N, k, M]
              );
            })({
              strategy: "fixed",
              placement: m + ("center" !== g ? "-" + g : ""),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return (function (e, t, n, r) {
                  let o;
                  void 0 === r && (r = {});
                  let {
                      ancestorScroll: i = !0,
                      ancestorResize: l = !0,
                      elementResize: a = "function" == typeof ResizeObserver,
                      layoutShift: u = "function" ==
                        typeof IntersectionObserver,
                      animationFrame: s = !1,
                    } = r,
                    c = em(e),
                    d = i || l ? [...(c ? ed(c) : []), ...ed(t)] : [];
                  d.forEach((e) => {
                    i && e.addEventListener("scroll", n, { passive: !0 }),
                      l && e.addEventListener("resize", n);
                  });
                  let f =
                      c && u
                        ? (function (e, t) {
                            let n,
                              r = null,
                              o = K(e);
                            function i() {
                              var e;
                              clearTimeout(n),
                                null == (e = r) || e.disconnect(),
                                (r = null);
                            }
                            return (
                              !(function l(a, u) {
                                void 0 === a && (a = !1),
                                  void 0 === u && (u = 1),
                                  i();
                                let {
                                  left: s,
                                  top: c,
                                  width: d,
                                  height: f,
                                } = e.getBoundingClientRect();
                                if ((a || t(), !d || !f)) return;
                                let p = j(c),
                                  m = j(o.clientWidth - (s + d)),
                                  h = {
                                    rootMargin:
                                      -p +
                                      "px " +
                                      -m +
                                      "px " +
                                      -j(o.clientHeight - (c + f)) +
                                      "px " +
                                      -j(s) +
                                      "px",
                                    threshold: P(0, _(1, u)) || 1,
                                  },
                                  g = !0;
                                function v(e) {
                                  let t = e[0].intersectionRatio;
                                  if (t !== u) {
                                    if (!g) return l();
                                    t
                                      ? l(!1, t)
                                      : (n = setTimeout(() => {
                                          l(!1, 1e-7);
                                        }, 1e3));
                                  }
                                  g = !1;
                                }
                                try {
                                  r = new IntersectionObserver(v, {
                                    ...h,
                                    root: o.ownerDocument,
                                  });
                                } catch (e) {
                                  r = new IntersectionObserver(v, h);
                                }
                                r.observe(e);
                              })(!0),
                              i
                            );
                          })(c, n)
                        : null,
                    p = -1,
                    m = null;
                  a &&
                    ((m = new ResizeObserver((e) => {
                      let [r] = e;
                      r &&
                        r.target === c &&
                        m &&
                        (m.unobserve(t),
                        cancelAnimationFrame(p),
                        (p = requestAnimationFrame(() => {
                          var e;
                          null == (e = m) || e.observe(t);
                        }))),
                        n();
                    })),
                    c && !s && m.observe(c),
                    m.observe(t));
                  let h = s ? ey(e) : null;
                  return (
                    s &&
                      (function t() {
                        let r = ey(e);
                        h &&
                          (r.x !== h.x ||
                            r.y !== h.y ||
                            r.width !== h.width ||
                            r.height !== h.height) &&
                          n(),
                          (h = r),
                          (o = requestAnimationFrame(t));
                      })(),
                    n(),
                    () => {
                      var e;
                      d.forEach((e) => {
                        i && e.removeEventListener("scroll", n),
                          l && e.removeEventListener("resize", n);
                      }),
                        null == f || f(),
                        null == (e = m) || e.disconnect(),
                        (m = null),
                        s && cancelAnimationFrame(o);
                    }
                  );
                })(...t, { animationFrame: "always" === R });
              },
              elements: { reference: S.anchor },
              middleware: [
                ek({ mainAxis: h + z, alignmentAxis: v }),
                w &&
                  eM({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === E ? eD() : void 0,
                    ...B,
                  }),
                w && eI({ ...B }),
                ez({
                  ...B,
                  apply: (e) => {
                    let {
                        elements: t,
                        rects: n,
                        availableWidth: r,
                        availableHeight: o,
                      } = e,
                      { width: i, height: l } = n.reference,
                      a = t.floating.style;
                    a.setProperty(
                      "--radix-popper-available-width",
                      "".concat(r, "px")
                    ),
                      a.setProperty(
                        "--radix-popper-available-height",
                        "".concat(o, "px")
                      ),
                      a.setProperty(
                        "--radix-popper-anchor-width",
                        "".concat(i, "px")
                      ),
                      a.setProperty(
                        "--radix-popper-anchor-height",
                        "".concat(l, "px")
                      );
                  },
                }),
                k && eV({ element: k, padding: y }),
                tu({ arrowWidth: I, arrowHeight: z }),
                C && eW({ strategy: "referenceHidden", ...B }),
              ],
            }),
            [G, X] = ts($),
            q = (function (e) {
              let t = o.useRef(e);
              return (
                o.useEffect(() => {
                  t.current = e;
                }),
                o.useMemo(
                  () =>
                    (...e) =>
                      t.current?.(...e),
                  []
                )
              );
            })(O);
          e0(() => {
            Z && (null == q || q());
          }, [Z, q]);
          let J = null === (n = Y.arrow) || void 0 === n ? void 0 : n.x,
            Q = null === (r = Y.arrow) || void 0 === r ? void 0 : r.y,
            ee =
              (null === (i = Y.arrow) || void 0 === i
                ? void 0
                : i.centerOffset) !== 0,
            [et, en] = o.useState();
          return (
            e0(() => {
              T && en(window.getComputedStyle(T).zIndex);
            }, [T]),
            (0, s.jsx)("div", {
              ref: H.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...U,
                transform: Z ? U.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: et,
                "--radix-popper-transform-origin": [
                  null === (l = Y.transformOrigin) || void 0 === l
                    ? void 0
                    : l.x,
                  null === (a = Y.transformOrigin) || void 0 === a
                    ? void 0
                    : a.y,
                ].join(" "),
                ...((null === (u = Y.hide) || void 0 === u
                  ? void 0
                  : u.referenceHidden) && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, s.jsx)(tt, {
                scope: p,
                placedSide: G,
                onArrowChange: M,
                arrowX: J,
                arrowY: Q,
                shouldHideArrow: ee,
                children: (0, s.jsx)(eQ.div, {
                  "data-side": G,
                  "data-align": X,
                  ...A,
                  ref: N,
                  style: { ...A.style, animation: Z ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      tr.displayName = te;
      var to = "PopperArrow",
        ti = { top: "bottom", right: "left", bottom: "top", left: "right" },
        tl = o.forwardRef(function (e, t) {
          let { __scopePopper: n, ...r } = e,
            o = tn(to, n),
            i = ti[o.placedSide];
          return (0,
          s.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [i]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, s.jsx)(eZ, { ...r, ref: t, style: { ...r.style, display: "block" } }) });
        });
      function ta(e) {
        return null !== e;
      }
      tl.displayName = to;
      var tu = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, o, i, l;
          let { placement: a, rects: u, middlewareData: s } = t,
            c =
              (null === (n = s.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            d = c ? 0 : e.arrowWidth,
            f = c ? 0 : e.arrowHeight,
            [p, m] = ts(a),
            h = { start: "0%", center: "50%", end: "100%" }[m],
            g =
              (null !==
                (i = null === (r = s.arrow) || void 0 === r ? void 0 : r.x) &&
              void 0 !== i
                ? i
                : 0) +
              d / 2,
            v =
              (null !==
                (l = null === (o = s.arrow) || void 0 === o ? void 0 : o.y) &&
              void 0 !== l
                ? l
                : 0) +
              f / 2,
            y = "",
            w = "";
          return (
            "bottom" === p
              ? ((y = c ? h : "".concat(g, "px")), (w = "".concat(-f, "px")))
              : "top" === p
              ? ((y = c ? h : "".concat(g, "px")),
                (w = "".concat(u.floating.height + f, "px")))
              : "right" === p
              ? ((y = "".concat(-f, "px")), (w = c ? h : "".concat(v, "px")))
              : "left" === p &&
                ((y = "".concat(u.floating.width + f, "px")),
                (w = c ? h : "".concat(v, "px"))),
            { data: { x: y, y: w } }
          );
        },
      });
      function ts(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      var tc = o.forwardRef((e, t) => {
        var n, r;
        let { container: i, ...l } = e,
          [a, u] = o.useState(!1);
        E(() => u(!0), []);
        let d =
          i ||
          (a &&
            (null === (r = globalThis) || void 0 === r
              ? void 0
              : null === (n = r.document) || void 0 === n
              ? void 0
              : n.body));
        return d
          ? c.createPortal((0, s.jsx)(h.div, { ...l, ref: t }), d)
          : null;
      });
      tc.displayName = "Portal";
      var td = (e) => {
        var t, n;
        let r, i;
        let { present: l, children: a } = e,
          s = (function (e) {
            var t, n;
            let [r, i] = o.useState(),
              l = o.useRef({}),
              a = o.useRef(e),
              u = o.useRef("none"),
              [s, c] =
                ((t = e ? "mounted" : "unmounted"),
                (n = {
                  mounted: {
                    UNMOUNT: "unmounted",
                    ANIMATION_OUT: "unmountSuspended",
                  },
                  unmountSuspended: {
                    MOUNT: "mounted",
                    ANIMATION_END: "unmounted",
                  },
                  unmounted: { MOUNT: "mounted" },
                }),
                o.useReducer((e, t) => {
                  let r = n[e][t];
                  return null != r ? r : e;
                }, t));
            return (
              o.useEffect(() => {
                let e = tf(l.current);
                u.current = "mounted" === s ? e : "none";
              }, [s]),
              E(() => {
                let t = l.current,
                  n = a.current;
                if (n !== e) {
                  let r = u.current,
                    o = tf(t);
                  e
                    ? c("MOUNT")
                    : "none" === o ||
                      (null == t ? void 0 : t.display) === "none"
                    ? c("UNMOUNT")
                    : n && r !== o
                    ? c("ANIMATION_OUT")
                    : c("UNMOUNT"),
                    (a.current = e);
                }
              }, [e, c]),
              E(() => {
                if (r) {
                  var e;
                  let t;
                  let n =
                      null !== (e = r.ownerDocument.defaultView) && void 0 !== e
                        ? e
                        : window,
                    o = (e) => {
                      let o = tf(l.current).includes(e.animationName);
                      if (
                        e.target === r &&
                        o &&
                        (c("ANIMATION_END"), !a.current)
                      ) {
                        let e = r.style.animationFillMode;
                        (r.style.animationFillMode = "forwards"),
                          (t = n.setTimeout(() => {
                            "forwards" === r.style.animationFillMode &&
                              (r.style.animationFillMode = e);
                          }));
                      }
                    },
                    i = (e) => {
                      e.target === r && (u.current = tf(l.current));
                    };
                  return (
                    r.addEventListener("animationstart", i),
                    r.addEventListener("animationcancel", o),
                    r.addEventListener("animationend", o),
                    () => {
                      n.clearTimeout(t),
                        r.removeEventListener("animationstart", i),
                        r.removeEventListener("animationcancel", o),
                        r.removeEventListener("animationend", o);
                    }
                  );
                }
                c("ANIMATION_END");
              }, [r, c]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(s),
                ref: o.useCallback((e) => {
                  e && (l.current = getComputedStyle(e)), i(e);
                }, []),
              }
            );
          })(l),
          c =
            "function" == typeof a
              ? a({ present: s.isPresent })
              : o.Children.only(a),
          d = u(
            s.ref,
            (r =
              null === (t = Object.getOwnPropertyDescriptor(c.props, "ref")) ||
              void 0 === t
                ? void 0
                : t.get) &&
              "isReactWarning" in r &&
              r.isReactWarning
              ? c.ref
              : (r =
                  null === (n = Object.getOwnPropertyDescriptor(c, "ref")) ||
                  void 0 === n
                    ? void 0
                    : n.get) &&
                "isReactWarning" in r &&
                r.isReactWarning
              ? c.props.ref
              : c.props.ref || c.ref
          );
        return "function" == typeof a || s.isPresent
          ? o.cloneElement(c, { ref: d })
          : null;
      };
      function tf(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      td.displayName = "Presence";
      var tp = n(216),
        [tm, th] = (function (e, t = []) {
          let n = [],
            r = () => {
              let t = n.map((e) => o.createContext(e));
              return function (n) {
                let r = n?.[e] || t;
                return o.useMemo(
                  () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                  [n, r]
                );
              };
            };
          return (
            (r.scopeName = e),
            [
              function (t, r) {
                let i = o.createContext(r),
                  l = n.length;
                n = [...n, r];
                let a = (t) => {
                  let { scope: n, children: r, ...a } = t,
                    u = n?.[e]?.[l] || i,
                    c = o.useMemo(() => a, Object.values(a));
                  return (0, s.jsx)(u.Provider, { value: c, children: r });
                };
                return (
                  (a.displayName = t + "Provider"),
                  [
                    a,
                    function (n, a) {
                      let u = a?.[e]?.[l] || i,
                        s = o.useContext(u);
                      if (s) return s;
                      if (void 0 !== r) return r;
                      throw Error(`\`${n}\` must be used within \`${t}\``);
                    },
                  ]
                );
              },
              (function (...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let n = () => {
                  let n = e.map((e) => ({
                    useScope: e(),
                    scopeName: e.scopeName,
                  }));
                  return function (e) {
                    let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                      let o = n(e)[`__scope${r}`];
                      return { ...t, ...o };
                    }, {});
                    return o.useMemo(
                      () => ({ [`__scope${t.scopeName}`]: r }),
                      [r]
                    );
                  };
                };
                return (n.scopeName = t.scopeName), n;
              })(r, ...t),
            ]
          );
        })("Tooltip", [e8]),
        tg = e8(),
        tv = "TooltipProvider",
        ty = "tooltip.open",
        [tw, tb] = tm(tv),
        tx = (e) => {
          let {
              __scopeTooltip: t,
              delayDuration: n = 700,
              skipDelayDuration: r = 300,
              disableHoverableContent: i = !1,
              children: l,
            } = e,
            [a, u] = o.useState(!0),
            c = o.useRef(!1),
            d = o.useRef(0);
          return (
            o.useEffect(() => {
              let e = d.current;
              return () => window.clearTimeout(e);
            }, []),
            (0, s.jsx)(tw, {
              scope: t,
              isOpenDelayed: a,
              delayDuration: n,
              onOpen: o.useCallback(() => {
                window.clearTimeout(d.current), u(!1);
              }, []),
              onClose: o.useCallback(() => {
                window.clearTimeout(d.current),
                  (d.current = window.setTimeout(() => u(!0), r));
              }, [r]),
              isPointerInTransitRef: c,
              onPointerInTransitChange: o.useCallback((e) => {
                c.current = e;
              }, []),
              disableHoverableContent: i,
              children: l,
            })
          );
        };
      tx.displayName = tv;
      var tE = "Tooltip",
        [tC, tR] = tm(tE),
        tO = (e) => {
          let {
              __scopeTooltip: t,
              children: n,
              open: r,
              defaultOpen: i = !1,
              onOpenChange: l,
              disableHoverableContent: a,
              delayDuration: u,
            } = e,
            c = tb(tE, e.__scopeTooltip),
            d = tg(t),
            [f, p] = o.useState(null),
            m = (function (e) {
              let [t, n] = o.useState(C());
              return (
                E(() => {
                  n((e) => e ?? String(R++));
                }, [void 0]),
                t ? `radix-${t}` : ""
              );
            })(),
            h = o.useRef(0),
            v = null != a ? a : c.disableHoverableContent,
            y = null != u ? u : c.delayDuration,
            w = o.useRef(!1),
            [b = !1, x] = (function ({
              prop: e,
              defaultProp: t,
              onChange: n = () => {},
            }) {
              let [r, i] = (function ({ defaultProp: e, onChange: t }) {
                  let n = o.useState(e),
                    [r] = n,
                    i = o.useRef(r),
                    l = g(t);
                  return (
                    o.useEffect(() => {
                      i.current !== r && (l(r), (i.current = r));
                    }, [r, i, l]),
                    n
                  );
                })({ defaultProp: t, onChange: n }),
                l = void 0 !== e,
                a = l ? e : r,
                u = g(n);
              return [
                a,
                o.useCallback(
                  (t) => {
                    if (l) {
                      let n = "function" == typeof t ? t(e) : t;
                      n !== e && u(n);
                    } else i(t);
                  },
                  [l, e, i, u]
                ),
              ];
            })({
              prop: r,
              defaultProp: i,
              onChange: (e) => {
                e
                  ? (c.onOpen(), document.dispatchEvent(new CustomEvent(ty)))
                  : c.onClose(),
                  null == l || l(e);
              },
            }),
            O = o.useMemo(
              () =>
                b ? (w.current ? "delayed-open" : "instant-open") : "closed",
              [b]
            ),
            _ = o.useCallback(() => {
              window.clearTimeout(h.current), (w.current = !1), x(!0);
            }, [x]),
            P = o.useCallback(() => {
              window.clearTimeout(h.current), x(!1);
            }, [x]),
            A = o.useCallback(() => {
              window.clearTimeout(h.current),
                (h.current = window.setTimeout(() => {
                  (w.current = !0), x(!0);
                }, y));
            }, [y, x]);
          return (
            o.useEffect(() => () => window.clearTimeout(h.current), []),
            (0, s.jsx)(e6, {
              ...d,
              children: (0, s.jsx)(tC, {
                scope: t,
                contentId: m,
                open: b,
                stateAttribute: O,
                trigger: f,
                onTriggerChange: p,
                onTriggerEnter: o.useCallback(() => {
                  c.isOpenDelayed ? A() : _();
                }, [c.isOpenDelayed, A, _]),
                onTriggerLeave: o.useCallback(() => {
                  v ? P() : window.clearTimeout(h.current);
                }, [P, v]),
                onOpen: _,
                onClose: P,
                disableHoverableContent: v,
                children: n,
              }),
            })
          );
        };
      tO.displayName = tE;
      var t_ = "TooltipTrigger",
        tP = o.forwardRef((e, t) => {
          let { __scopeTooltip: n, ...r } = e,
            i = tR(t_, n),
            a = tb(t_, n),
            c = tg(n),
            d = u(t, o.useRef(null), i.onTriggerChange),
            f = o.useRef(!1),
            p = o.useRef(!1),
            m = o.useCallback(() => (f.current = !1), []);
          return (
            o.useEffect(
              () => () => document.removeEventListener("pointerup", m),
              [m]
            ),
            (0, s.jsx)(e9, {
              asChild: !0,
              ...c,
              children: (0, s.jsx)(h.button, {
                "aria-describedby": i.open ? i.contentId : void 0,
                "data-state": i.stateAttribute,
                ...r,
                ref: d,
                onPointerMove: l(e.onPointerMove, (e) => {
                  "touch" === e.pointerType ||
                    p.current ||
                    a.isPointerInTransitRef.current ||
                    (i.onTriggerEnter(), (p.current = !0));
                }),
                onPointerLeave: l(e.onPointerLeave, () => {
                  i.onTriggerLeave(), (p.current = !1);
                }),
                onPointerDown: l(e.onPointerDown, () => {
                  (f.current = !0),
                    document.addEventListener("pointerup", m, { once: !0 });
                }),
                onFocus: l(e.onFocus, () => {
                  f.current || i.onOpen();
                }),
                onBlur: l(e.onBlur, i.onClose),
                onClick: l(e.onClick, i.onClose),
              }),
            })
          );
        });
      tP.displayName = t_;
      var tA = "TooltipPortal",
        [tj, tS] = tm(tA, { forceMount: void 0 }),
        tT = (e) => {
          let {
              __scopeTooltip: t,
              forceMount: n,
              children: r,
              container: o,
            } = e,
            i = tR(tA, t);
          return (0, s.jsx)(tj, {
            scope: t,
            forceMount: n,
            children: (0, s.jsx)(td, {
              present: n || i.open,
              children: (0, s.jsx)(tc, {
                asChild: !0,
                container: o,
                children: r,
              }),
            }),
          });
        };
      tT.displayName = tA;
      var tL = "TooltipContent",
        tN = o.forwardRef((e, t) => {
          let n = tS(tL, e.__scopeTooltip),
            { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
            l = tR(tL, e.__scopeTooltip);
          return (0, s.jsx)(td, {
            present: r || l.open,
            children: l.disableHoverableContent
              ? (0, s.jsx)(tI, { side: o, ...i, ref: t })
              : (0, s.jsx)(tk, { side: o, ...i, ref: t }),
          });
        }),
        tk = o.forwardRef((e, t) => {
          let n = tR(tL, e.__scopeTooltip),
            r = tb(tL, e.__scopeTooltip),
            i = o.useRef(null),
            l = u(t, i),
            [a, c] = o.useState(null),
            { trigger: d, onClose: f } = n,
            p = i.current,
            { onPointerInTransitChange: m } = r,
            h = o.useCallback(() => {
              c(null), m(!1);
            }, [m]),
            g = o.useCallback(
              (e, t) => {
                let n = e.currentTarget,
                  r = { x: e.clientX, y: e.clientY },
                  o = (function (e, t) {
                    let n = Math.abs(t.top - e.y),
                      r = Math.abs(t.bottom - e.y),
                      o = Math.abs(t.right - e.x),
                      i = Math.abs(t.left - e.x);
                    switch (Math.min(n, r, o, i)) {
                      case i:
                        return "left";
                      case o:
                        return "right";
                      case n:
                        return "top";
                      case r:
                        return "bottom";
                      default:
                        throw Error("unreachable");
                    }
                  })(r, n.getBoundingClientRect());
                c(
                  (function (e) {
                    let t = e.slice();
                    return (
                      t.sort((e, t) =>
                        e.x < t.x
                          ? -1
                          : e.x > t.x
                          ? 1
                          : e.y < t.y
                          ? -1
                          : e.y > t.y
                          ? 1
                          : 0
                      ),
                      (function (e) {
                        if (e.length <= 1) return e.slice();
                        let t = [];
                        for (let n = 0; n < e.length; n++) {
                          let r = e[n];
                          for (; t.length >= 2; ) {
                            let e = t[t.length - 1],
                              n = t[t.length - 2];
                            if (
                              (e.x - n.x) * (r.y - n.y) >=
                              (e.y - n.y) * (r.x - n.x)
                            )
                              t.pop();
                            else break;
                          }
                          t.push(r);
                        }
                        t.pop();
                        let n = [];
                        for (let t = e.length - 1; t >= 0; t--) {
                          let r = e[t];
                          for (; n.length >= 2; ) {
                            let e = n[n.length - 1],
                              t = n[n.length - 2];
                            if (
                              (e.x - t.x) * (r.y - t.y) >=
                              (e.y - t.y) * (r.x - t.x)
                            )
                              n.pop();
                            else break;
                          }
                          n.push(r);
                        }
                        return (n.pop(),
                        1 === t.length &&
                          1 === n.length &&
                          t[0].x === n[0].x &&
                          t[0].y === n[0].y)
                          ? t
                          : t.concat(n);
                      })(t)
                    );
                  })([
                    ...(function (e, t) {
                      let n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 5,
                        r = [];
                      switch (t) {
                        case "top":
                          r.push(
                            { x: e.x - n, y: e.y + n },
                            { x: e.x + n, y: e.y + n }
                          );
                          break;
                        case "bottom":
                          r.push(
                            { x: e.x - n, y: e.y - n },
                            { x: e.x + n, y: e.y - n }
                          );
                          break;
                        case "left":
                          r.push(
                            { x: e.x + n, y: e.y - n },
                            { x: e.x + n, y: e.y + n }
                          );
                          break;
                        case "right":
                          r.push(
                            { x: e.x - n, y: e.y - n },
                            { x: e.x - n, y: e.y + n }
                          );
                      }
                      return r;
                    })(r, o),
                    ...(function (e) {
                      let { top: t, right: n, bottom: r, left: o } = e;
                      return [
                        { x: o, y: t },
                        { x: n, y: t },
                        { x: n, y: r },
                        { x: o, y: r },
                      ];
                    })(t.getBoundingClientRect()),
                  ])
                ),
                  m(!0);
              },
              [m]
            );
          return (
            o.useEffect(() => () => h(), [h]),
            o.useEffect(() => {
              if (d && p) {
                let e = (e) => g(e, p),
                  t = (e) => g(e, d);
                return (
                  d.addEventListener("pointerleave", e),
                  p.addEventListener("pointerleave", t),
                  () => {
                    d.removeEventListener("pointerleave", e),
                      p.removeEventListener("pointerleave", t);
                  }
                );
              }
            }, [d, p, g, h]),
            o.useEffect(() => {
              if (a) {
                let e = (e) => {
                  let t = e.target,
                    n = { x: e.clientX, y: e.clientY },
                    r =
                      (null == d ? void 0 : d.contains(t)) ||
                      (null == p ? void 0 : p.contains(t)),
                    o = !(function (e, t) {
                      let { x: n, y: r } = e,
                        o = !1;
                      for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                        let l = t[e].x,
                          a = t[e].y,
                          u = t[i].x,
                          s = t[i].y;
                        a > r != s > r &&
                          n < ((u - l) * (r - a)) / (s - a) + l &&
                          (o = !o);
                      }
                      return o;
                    })(n, a);
                  r ? h() : o && (h(), f());
                };
                return (
                  document.addEventListener("pointermove", e),
                  () => document.removeEventListener("pointermove", e)
                );
              }
            }, [d, p, a, f, h]),
            (0, s.jsx)(tI, { ...e, ref: l })
          );
        }),
        [tM, tD] = tm(tE, { isInside: !1 }),
        tI = o.forwardRef((e, t) => {
          let {
              __scopeTooltip: n,
              children: r,
              "aria-label": i,
              onEscapeKeyDown: l,
              onPointerDownOutside: a,
              ...u
            } = e,
            c = tR(tL, n),
            d = tg(n),
            { onClose: f } = c;
          return (
            o.useEffect(
              () => (
                document.addEventListener(ty, f),
                () => document.removeEventListener(ty, f)
              ),
              [f]
            ),
            o.useEffect(() => {
              if (c.trigger) {
                let e = (e) => {
                  let t = e.target;
                  (null == t ? void 0 : t.contains(c.trigger)) && f();
                };
                return (
                  window.addEventListener("scroll", e, { capture: !0 }),
                  () => window.removeEventListener("scroll", e, { capture: !0 })
                );
              }
            }, [c.trigger, f]),
            (0, s.jsx)(w, {
              asChild: !0,
              disableOutsidePointerEvents: !1,
              onEscapeKeyDown: l,
              onPointerDownOutside: a,
              onFocusOutside: (e) => e.preventDefault(),
              onDismiss: f,
              children: (0, s.jsxs)(tr, {
                "data-state": c.stateAttribute,
                ...d,
                ...u,
                ref: t,
                style: {
                  ...u.style,
                  "--radix-tooltip-content-transform-origin":
                    "var(--radix-popper-transform-origin)",
                  "--radix-tooltip-content-available-width":
                    "var(--radix-popper-available-width)",
                  "--radix-tooltip-content-available-height":
                    "var(--radix-popper-available-height)",
                  "--radix-tooltip-trigger-width":
                    "var(--radix-popper-anchor-width)",
                  "--radix-tooltip-trigger-height":
                    "var(--radix-popper-anchor-height)",
                },
                children: [
                  (0, s.jsx)(p, { children: r }),
                  (0, s.jsx)(tM, {
                    scope: n,
                    isInside: !0,
                    children: (0, s.jsx)(tp.f, {
                      id: c.contentId,
                      role: "tooltip",
                      children: i || r,
                    }),
                  }),
                ],
              }),
            })
          );
        });
      tN.displayName = tL;
      var tz = "TooltipArrow",
        tW = o.forwardRef((e, t) => {
          let { __scopeTooltip: n, ...r } = e,
            o = tg(n);
          return tD(tz, n).isInside
            ? null
            : (0, s.jsx)(tl, { ...o, ...r, ref: t });
        });
      tW.displayName = tz;
      var tV = tx,
        tF = tO,
        tB = tP,
        tH = tT,
        tU = tN,
        t$ = tW;
    },
    4454: function (e, t, n) {
      function r() {
        return "undefined" != typeof window;
      }
      function o() {
        return (r() ? window.vam : "production") || "production";
      }
      function i() {
        return "production" === o();
      }
      function l(e, t, n) {
        var l, a;
        if (!r()) {
          let e =
            "[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";
          if (i()) console.warn(e);
          else throw Error(e);
          return;
        }
        if (!t) {
          null == (l = window.va) ||
            l.call(window, "event", { name: e, options: n });
          return;
        }
        try {
          let r = (function (e, t) {
            if (!e) return;
            let n = e,
              r = [];
            for (let [o, i] of Object.entries(e))
              "object" == typeof i &&
                null !== i &&
                (t.strip
                  ? (n = (function (e, { [e]: t, ...n }) {
                      return n;
                    })(o, n))
                  : r.push(o));
            if (r.length > 0 && !t.strip)
              throw Error(
                `The following properties are not valid: ${r.join(
                  ", "
                )}. Only strings, numbers, booleans, and null are allowed.`
              );
            return n;
          })(t, { strip: i() });
          null == (a = window.va) ||
            a.call(window, "event", { name: e, data: r, options: n });
        } catch (e) {
          e instanceof Error && "development" === o() && console.error(e);
        }
      }
      n.d(t, {
        j: function () {
          return l;
        },
      });
    },
  },
]);
