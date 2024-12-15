(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1391],
  {
    24459: function (t, e, r) {
      "use strict";
      (e._O = e.Jq = e.KB = e.u8 = e.cv = void 0),
        (e.Ik = e.A9 = e.n_ = e.gM = void 0);
      let n = r(9109);
      function i(t) {
        if (!(t instanceof Uint8Array))
          throw TypeError("b must be a Uint8Array");
      }
      function o(t) {
        return i(t), n.Buffer.from(t.buffer, t.byteOffset, t.length);
      }
      class s {
        constructor(t, e) {
          if (!Number.isInteger(t)) throw TypeError("span must be an integer");
          (this.span = t), (this.property = e);
        }
        makeDestinationObject() {
          return {};
        }
        getSpan(t, e) {
          if (0 > this.span) throw RangeError("indeterminate span");
          return this.span;
        }
        replicate(t) {
          let e = Object.create(this.constructor.prototype);
          return Object.assign(e, this), (e.property = t), e;
        }
        fromArray(t) {}
      }
      function a(t, e) {
        return e.property ? t + "[" + e.property + "]" : t;
      }
      class u extends s {
        isCount() {
          throw Error("ExternalLayout is abstract");
        }
      }
      class l extends u {
        constructor(t, e = 0, r) {
          if (!(t instanceof s)) throw TypeError("layout must be a Layout");
          if (!Number.isInteger(e))
            throw TypeError("offset must be integer or undefined");
          super(t.span, r || t.property), (this.layout = t), (this.offset = e);
        }
        isCount() {
          return this.layout instanceof c || this.layout instanceof f;
        }
        decode(t, e = 0) {
          return this.layout.decode(t, e + this.offset);
        }
        encode(t, e, r = 0) {
          return this.layout.encode(t, e, r + this.offset);
        }
      }
      class c extends s {
        constructor(t, e) {
          if ((super(t, e), 6 < this.span))
            throw RangeError("span must not exceed 6 bytes");
        }
        decode(t, e = 0) {
          return o(t).readUIntLE(e, this.span);
        }
        encode(t, e, r = 0) {
          return o(e).writeUIntLE(t, r, this.span), this.span;
        }
      }
      class f extends s {
        constructor(t, e) {
          if ((super(t, e), 6 < this.span))
            throw RangeError("span must not exceed 6 bytes");
        }
        decode(t, e = 0) {
          return o(t).readUIntBE(e, this.span);
        }
        encode(t, e, r = 0) {
          return o(e).writeUIntBE(t, r, this.span), this.span;
        }
      }
      function h(t) {
        let e = Math.floor(t / 4294967296);
        return { hi32: e, lo32: t - 4294967296 * e };
      }
      function d(t, e) {
        return 4294967296 * t + e;
      }
      class p extends s {
        constructor(t) {
          super(8, t);
        }
        decode(t, e = 0) {
          let r = o(t),
            n = r.readUInt32LE(e);
          return d(r.readUInt32LE(e + 4), n);
        }
        encode(t, e, r = 0) {
          let n = h(t),
            i = o(e);
          return i.writeUInt32LE(n.lo32, r), i.writeUInt32LE(n.hi32, r + 4), 8;
        }
      }
      class m extends s {
        constructor(t) {
          super(8, t);
        }
        decode(t, e = 0) {
          let r = o(t),
            n = r.readUInt32LE(e);
          return d(r.readInt32LE(e + 4), n);
        }
        encode(t, e, r = 0) {
          let n = h(t),
            i = o(e);
          return i.writeUInt32LE(n.lo32, r), i.writeInt32LE(n.hi32, r + 4), 8;
        }
      }
      class g extends s {
        constructor(t, e, r) {
          if (!(t instanceof s))
            throw TypeError("elementLayout must be a Layout");
          if (
            !(
              (e instanceof u && e.isCount()) ||
              (Number.isInteger(e) && 0 <= e)
            )
          )
            throw TypeError(
              "count must be non-negative integer or an unsigned integer ExternalLayout"
            );
          let n = -1;
          e instanceof u || !(0 < t.span) || (n = e * t.span),
            super(n, r),
            (this.elementLayout = t),
            (this.count = e);
        }
        getSpan(t, e = 0) {
          if (0 <= this.span) return this.span;
          let r = 0,
            n = this.count;
          if (
            (n instanceof u && (n = n.decode(t, e)),
            0 < this.elementLayout.span)
          )
            r = n * this.elementLayout.span;
          else {
            let i = 0;
            for (; i < n; ) (r += this.elementLayout.getSpan(t, e + r)), ++i;
          }
          return r;
        }
        decode(t, e = 0) {
          let r = [],
            n = 0,
            i = this.count;
          for (i instanceof u && (i = i.decode(t, e)); n < i; )
            r.push(this.elementLayout.decode(t, e)),
              (e += this.elementLayout.getSpan(t, e)),
              (n += 1);
          return r;
        }
        encode(t, e, r = 0) {
          let n = this.elementLayout,
            i = t.reduce((t, i) => t + n.encode(i, e, r + t), 0);
          return (
            this.count instanceof u && this.count.encode(t.length, e, r), i
          );
        }
      }
      class y extends s {
        constructor(t, e, r) {
          if (
            !(Array.isArray(t) && t.reduce((t, e) => t && e instanceof s, !0))
          )
            throw TypeError("fields must be array of Layout instances");
          for (let n of ("boolean" == typeof e &&
            void 0 === r &&
            ((r = e), (e = void 0)),
          t))
            if (0 > n.span && void 0 === n.property)
              throw Error(
                "fields cannot contain unnamed variable-length layout"
              );
          let n = -1;
          try {
            n = t.reduce((t, e) => t + e.getSpan(), 0);
          } catch (t) {}
          super(n, e), (this.fields = t), (this.decodePrefixes = !!r);
        }
        getSpan(t, e = 0) {
          if (0 <= this.span) return this.span;
          let r = 0;
          try {
            r = this.fields.reduce((r, n) => {
              let i = n.getSpan(t, e);
              return (e += i), r + i;
            }, 0);
          } catch (t) {
            throw RangeError("indeterminate span");
          }
          return r;
        }
        decode(t, e = 0) {
          i(t);
          let r = this.makeDestinationObject();
          for (let n of this.fields)
            if (
              (void 0 !== n.property && (r[n.property] = n.decode(t, e)),
              (e += n.getSpan(t, e)),
              this.decodePrefixes && t.length === e)
            )
              break;
          return r;
        }
        encode(t, e, r = 0) {
          let n = r,
            i = 0,
            o = 0;
          for (let n of this.fields) {
            let s = n.span;
            if (((o = 0 < s ? s : 0), void 0 !== n.property)) {
              let i = t[n.property];
              void 0 !== i &&
                ((o = n.encode(i, e, r)), 0 > s && (s = n.getSpan(e, r)));
            }
            (i = r), (r += s);
          }
          return i + o - n;
        }
        fromArray(t) {
          let e = this.makeDestinationObject();
          for (let r of this.fields)
            void 0 !== r.property &&
              0 < t.length &&
              (e[r.property] = t.shift());
          return e;
        }
        layoutFor(t) {
          if ("string" != typeof t) throw TypeError("property must be string");
          for (let e of this.fields) if (e.property === t) return e;
        }
        offsetOf(t) {
          if ("string" != typeof t) throw TypeError("property must be string");
          let e = 0;
          for (let r of this.fields) {
            if (r.property === t) return e;
            0 > r.span ? (e = -1) : 0 <= e && (e += r.span);
          }
        }
      }
      class b {
        constructor(t) {
          this.property = t;
        }
        decode(t, e) {
          throw Error("UnionDiscriminator is abstract");
        }
        encode(t, e, r) {
          throw Error("UnionDiscriminator is abstract");
        }
      }
      class v extends b {
        constructor(t, e) {
          if (!(t instanceof u && t.isCount()))
            throw TypeError(
              "layout must be an unsigned integer ExternalLayout"
            );
          super(e || t.property || "variant"), (this.layout = t);
        }
        decode(t, e) {
          return this.layout.decode(t, e);
        }
        encode(t, e, r) {
          return this.layout.encode(t, e, r);
        }
      }
      class w extends s {
        constructor(t, e, r) {
          let n;
          if (t instanceof c || t instanceof f) n = new v(new l(t));
          else if (t instanceof u && t.isCount()) n = new v(t);
          else if (t instanceof b) n = t;
          else
            throw TypeError(
              "discr must be a UnionDiscriminator or an unsigned integer layout"
            );
          if ((void 0 === e && (e = null), !(null === e || e instanceof s)))
            throw TypeError("defaultLayout must be null or a Layout");
          if (null !== e) {
            if (0 > e.span)
              throw Error("defaultLayout must have constant span");
            void 0 === e.property && (e = e.replicate("content"));
          }
          let i = -1;
          e &&
            0 <= (i = e.span) &&
            (t instanceof c || t instanceof f) &&
            (i += n.layout.span),
            super(i, r),
            (this.discriminator = n),
            (this.usesPrefixDiscriminator = t instanceof c || t instanceof f),
            (this.defaultLayout = e),
            (this.registry = {});
          let o = this.defaultGetSourceVariant.bind(this);
          (this.getSourceVariant = function (t) {
            return o(t);
          }),
            (this.configGetSourceVariant = function (t) {
              o = t.bind(this);
            });
        }
        getSpan(t, e = 0) {
          if (0 <= this.span) return this.span;
          let r = this.getVariant(t, e);
          if (!r)
            throw Error("unable to determine span for unrecognized variant");
          return r.getSpan(t, e);
        }
        defaultGetSourceVariant(t) {
          if (
            Object.prototype.hasOwnProperty.call(t, this.discriminator.property)
          ) {
            if (
              this.defaultLayout &&
              this.defaultLayout.property &&
              Object.prototype.hasOwnProperty.call(
                t,
                this.defaultLayout.property
              )
            )
              return;
            let e = this.registry[t[this.discriminator.property]];
            if (
              e &&
              (!e.layout ||
                (e.property &&
                  Object.prototype.hasOwnProperty.call(t, e.property)))
            )
              return e;
          } else
            for (let e in this.registry) {
              let r = this.registry[e];
              if (
                r.property &&
                Object.prototype.hasOwnProperty.call(t, r.property)
              )
                return r;
            }
          throw Error("unable to infer src variant");
        }
        decode(t, e = 0) {
          let r;
          let n = this.discriminator,
            i = n.decode(t, e),
            o = this.registry[i];
          if (void 0 === o) {
            let o = this.defaultLayout,
              s = 0;
            this.usesPrefixDiscriminator && (s = n.layout.span),
              ((r = this.makeDestinationObject())[n.property] = i),
              (r[o.property] = o.decode(t, e + s));
          } else r = o.decode(t, e);
          return r;
        }
        encode(t, e, r = 0) {
          let n = this.getSourceVariant(t);
          if (void 0 === n) {
            let n = this.discriminator,
              i = this.defaultLayout,
              o = 0;
            return (
              this.usesPrefixDiscriminator && (o = n.layout.span),
              n.encode(t[n.property], e, r),
              o + i.encode(t[i.property], e, r + o)
            );
          }
          return n.encode(t, e, r);
        }
        addVariant(t, e, r) {
          let n = new x(this, t, e, r);
          return (this.registry[t] = n), n;
        }
        getVariant(t, e = 0) {
          let r;
          return (
            t instanceof Uint8Array
              ? (r = this.discriminator.decode(t, e))
              : (r = t),
            this.registry[r]
          );
        }
      }
      class x extends s {
        constructor(t, e, r, n) {
          if (!(t instanceof w)) throw TypeError("union must be a Union");
          if (!Number.isInteger(e) || 0 > e)
            throw TypeError("variant must be a (non-negative) integer");
          if (
            ("string" == typeof r && void 0 === n && ((n = r), (r = null)), r)
          ) {
            if (!(r instanceof s)) throw TypeError("layout must be a Layout");
            if (
              null !== t.defaultLayout &&
              0 <= r.span &&
              r.span > t.defaultLayout.span
            )
              throw Error("variant span exceeds span of containing union");
            if ("string" != typeof n)
              throw TypeError("variant must have a String property");
          }
          let i = t.span;
          0 > t.span &&
            0 <= (i = r ? r.span : 0) &&
            t.usesPrefixDiscriminator &&
            (i += t.discriminator.layout.span),
            super(i, n),
            (this.union = t),
            (this.variant = e),
            (this.layout = r || null);
        }
        getSpan(t, e = 0) {
          if (0 <= this.span) return this.span;
          let r = 0;
          this.union.usesPrefixDiscriminator &&
            (r = this.union.discriminator.layout.span);
          let n = 0;
          return this.layout && (n = this.layout.getSpan(t, e + r)), r + n;
        }
        decode(t, e = 0) {
          let r = this.makeDestinationObject();
          if (this !== this.union.getVariant(t, e))
            throw Error("variant mismatch");
          let n = 0;
          return (
            this.union.usesPrefixDiscriminator &&
              (n = this.union.discriminator.layout.span),
            this.layout
              ? (r[this.property] = this.layout.decode(t, e + n))
              : this.property
              ? (r[this.property] = !0)
              : this.union.usesPrefixDiscriminator &&
                (r[this.union.discriminator.property] = this.variant),
            r
          );
        }
        encode(t, e, r = 0) {
          let n = 0;
          if (
            (this.union.usesPrefixDiscriminator &&
              (n = this.union.discriminator.layout.span),
            this.layout &&
              !Object.prototype.hasOwnProperty.call(t, this.property))
          )
            throw TypeError("variant lacks property " + this.property);
          this.union.discriminator.encode(this.variant, e, r);
          let i = n;
          if (
            this.layout &&
            (this.layout.encode(t[this.property], e, r + n),
            (i += this.layout.getSpan(e, r + n)),
            0 <= this.union.span && i > this.union.span)
          )
            throw Error("encoded variant overruns containing union");
          return i;
        }
        fromArray(t) {
          if (this.layout) return this.layout.fromArray(t);
        }
      }
      function E(t) {
        return 0 > t && (t += 4294967296), t;
      }
      class M extends s {
        constructor(t, e, r) {
          if (!(t instanceof c || t instanceof f))
            throw TypeError("word must be a UInt or UIntBE layout");
          if (
            ("string" == typeof e && void 0 === r && ((r = e), (e = !1)),
            4 < t.span)
          )
            throw RangeError("word cannot exceed 32 bits");
          super(t.span, r),
            (this.word = t),
            (this.msb = !!e),
            (this.fields = []);
          let n = 0;
          (this._packedSetValue = function (t) {
            return (n = E(t)), this;
          }),
            (this._packedGetValue = function () {
              return n;
            });
        }
        decode(t, e = 0) {
          let r = this.makeDestinationObject(),
            n = this.word.decode(t, e);
          for (let e of (this._packedSetValue(n), this.fields))
            void 0 !== e.property && (r[e.property] = e.decode(t));
          return r;
        }
        encode(t, e, r = 0) {
          let n = this.word.decode(e, r);
          for (let e of (this._packedSetValue(n), this.fields))
            if (void 0 !== e.property) {
              let r = t[e.property];
              void 0 !== r && e.encode(r);
            }
          return this.word.encode(this._packedGetValue(), e, r);
        }
        addField(t, e) {
          let r = new P(this, t, e);
          return this.fields.push(r), r;
        }
        addBoolean(t) {
          let e = new B(this, t);
          return this.fields.push(e), e;
        }
        fieldFor(t) {
          if ("string" != typeof t) throw TypeError("property must be string");
          for (let e of this.fields) if (e.property === t) return e;
        }
      }
      class P {
        constructor(t, e, r) {
          if (!(t instanceof M))
            throw TypeError("container must be a BitStructure");
          if (!Number.isInteger(e) || 0 >= e)
            throw TypeError("bits must be positive integer");
          let n = 8 * t.span,
            i = t.fields.reduce((t, e) => t + e.bits, 0);
          if (e + i > n)
            throw Error(
              "bits too long for span remainder (" +
                (n - i) +
                " of " +
                n +
                " remain)"
            );
          (this.container = t),
            (this.bits = e),
            (this.valueMask = (1 << e) - 1),
            32 === e && (this.valueMask = 4294967295),
            (this.start = i),
            this.container.msb && (this.start = n - i - e),
            (this.wordMask = E(this.valueMask << this.start)),
            (this.property = r);
        }
        decode(t, e) {
          return (
            E(this.container._packedGetValue() & this.wordMask) >>> this.start
          );
        }
        encode(t) {
          if (
            "number" != typeof t ||
            !Number.isInteger(t) ||
            t !== E(t & this.valueMask)
          )
            throw TypeError(
              a("BitField.encode", this) +
                " value must be integer not exceeding " +
                this.valueMask
            );
          let e = this.container._packedGetValue(),
            r = E(t << this.start);
          this.container._packedSetValue(E(e & ~this.wordMask) | r);
        }
      }
      class B extends P {
        constructor(t, e) {
          super(t, 1, e);
        }
        decode(t, e) {
          return !!super.decode(t, e);
        }
        encode(t) {
          "boolean" == typeof t && (t = +t), super.encode(t);
        }
      }
      class A extends s {
        constructor(t, e) {
          if (
            !(
              (t instanceof u && t.isCount()) ||
              (Number.isInteger(t) && 0 <= t)
            )
          )
            throw TypeError(
              "length must be positive integer or an unsigned integer ExternalLayout"
            );
          let r = -1;
          t instanceof u || (r = t), super(r, e), (this.length = t);
        }
        getSpan(t, e) {
          let r = this.span;
          return 0 > r && (r = this.length.decode(t, e)), r;
        }
        decode(t, e = 0) {
          let r = this.span;
          return 0 > r && (r = this.length.decode(t, e)), o(t).slice(e, e + r);
        }
        encode(t, e, r) {
          let n = this.length;
          if (
            (this.length instanceof u && (n = t.length),
            !(t instanceof Uint8Array && n === t.length))
          )
            throw TypeError(
              a("Blob.encode", this) +
                " requires (length " +
                n +
                ") Uint8Array as src"
            );
          if (r + n > e.length)
            throw RangeError("encoding overruns Uint8Array");
          let i = o(t);
          return (
            o(e).write(i.toString("hex"), r, n, "hex"),
            this.length instanceof u && this.length.encode(n, e, r),
            n
          );
        }
      }
      (e.cv = (t, e, r) => new l(t, e, r)),
        (e.u8 = (t) => new c(1, t)),
        (e.KB = (t) => new c(2, t)),
        (e.Jq = (t) => new c(4, t)),
        (e._O = (t) => new p(t)),
        (e.gM = (t) => new m(t)),
        (e.n_ = (t, e, r) => new y(t, e, r)),
        (e.A9 = (t, e, r) => new g(t, e, r)),
        (e.Ik = (t, e) => new A(t, e));
    },
    15545: function (t, e, r) {
      "use strict";
      var n = r(10632).Buffer;
      t.exports = function (t) {
        if (t.length >= 255) throw TypeError("Alphabet too long");
        for (var e = new Uint8Array(256), r = 0; r < e.length; r++) e[r] = 255;
        for (var i = 0; i < t.length; i++) {
          var o = t.charAt(i),
            s = o.charCodeAt(0);
          if (255 !== e[s]) throw TypeError(o + " is ambiguous");
          e[s] = i;
        }
        var a = t.length,
          u = t.charAt(0),
          l = Math.log(a) / Math.log(256),
          c = Math.log(256) / Math.log(a);
        function f(t) {
          if ("string" != typeof t) throw TypeError("Expected String");
          if (0 === t.length) return n.alloc(0);
          for (var r = 0, i = 0, o = 0; t[r] === u; ) i++, r++;
          for (
            var s = ((t.length - r) * l + 1) >>> 0, c = new Uint8Array(s);
            r < t.length;

          ) {
            var f = e[t.charCodeAt(r)];
            if (255 === f) return;
            for (var h = 0, d = s - 1; (0 !== f || h < o) && -1 !== d; d--, h++)
              (f += (a * c[d]) >>> 0),
                (c[d] = f % 256 >>> 0),
                (f = (f / 256) >>> 0);
            if (0 !== f) throw Error("Non-zero carry");
            (o = h), r++;
          }
          for (var p = s - o; p !== s && 0 === c[p]; ) p++;
          var m = n.allocUnsafe(i + (s - p));
          m.fill(0, 0, i);
          for (var g = i; p !== s; ) m[g++] = c[p++];
          return m;
        }
        return {
          encode: function (e) {
            if (
              ((Array.isArray(e) || e instanceof Uint8Array) && (e = n.from(e)),
              !n.isBuffer(e))
            )
              throw TypeError("Expected Buffer");
            if (0 === e.length) return "";
            for (var r = 0, i = 0, o = 0, s = e.length; o !== s && 0 === e[o]; )
              o++, r++;
            for (
              var l = ((s - o) * c + 1) >>> 0, f = new Uint8Array(l);
              o !== s;

            ) {
              for (
                var h = e[o], d = 0, p = l - 1;
                (0 !== h || d < i) && -1 !== p;
                p--, d++
              )
                (h += (256 * f[p]) >>> 0),
                  (f[p] = h % a >>> 0),
                  (h = (h / a) >>> 0);
              if (0 !== h) throw Error("Non-zero carry");
              (i = d), o++;
            }
            for (var m = l - i; m !== l && 0 === f[m]; ) m++;
            for (var g = u.repeat(r); m < l; ++m) g += t.charAt(f[m]);
            return g;
          },
          decodeUnsafe: f,
          decode: function (t) {
            var e = f(t);
            if (e) return e;
            throw Error("Non-base" + a + " character");
          },
        };
      };
    },
    88443: function (t, e, r) {
      var n = r(15545);
      t.exports = n(
        "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
      );
    },
    48738: function (t, e) {
      "use strict";
      (e.byteLength = function (t) {
        var e = u(t),
          r = e[0],
          n = e[1];
        return ((r + n) * 3) / 4 - n;
      }),
        (e.toByteArray = function (t) {
          var e,
            r,
            o = u(t),
            s = o[0],
            a = o[1],
            l = new i(((s + a) * 3) / 4 - a),
            c = 0,
            f = a > 0 ? s - 4 : s;
          for (r = 0; r < f; r += 4)
            (e =
              (n[t.charCodeAt(r)] << 18) |
              (n[t.charCodeAt(r + 1)] << 12) |
              (n[t.charCodeAt(r + 2)] << 6) |
              n[t.charCodeAt(r + 3)]),
              (l[c++] = (e >> 16) & 255),
              (l[c++] = (e >> 8) & 255),
              (l[c++] = 255 & e);
          return (
            2 === a &&
              ((e = (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)),
              (l[c++] = 255 & e)),
            1 === a &&
              ((e =
                (n[t.charCodeAt(r)] << 10) |
                (n[t.charCodeAt(r + 1)] << 4) |
                (n[t.charCodeAt(r + 2)] >> 2)),
              (l[c++] = (e >> 8) & 255),
              (l[c++] = 255 & e)),
            l
          );
        }),
        (e.fromByteArray = function (t) {
          for (
            var e, n = t.length, i = n % 3, o = [], s = 0, a = n - i;
            s < a;
            s += 16383
          )
            o.push(
              (function (t, e, n) {
                for (var i, o = [], s = e; s < n; s += 3)
                  o.push(
                    r[
                      ((i =
                        ((t[s] << 16) & 16711680) +
                        ((t[s + 1] << 8) & 65280) +
                        (255 & t[s + 2])) >>
                        18) &
                        63
                    ] +
                      r[(i >> 12) & 63] +
                      r[(i >> 6) & 63] +
                      r[63 & i]
                  );
                return o.join("");
              })(t, s, s + 16383 > a ? a : s + 16383)
            );
          return (
            1 === i
              ? o.push(r[(e = t[n - 1]) >> 2] + r[(e << 4) & 63] + "==")
              : 2 === i &&
                o.push(
                  r[(e = (t[n - 2] << 8) + t[n - 1]) >> 10] +
                    r[(e >> 4) & 63] +
                    r[(e << 2) & 63] +
                    "="
                ),
            o.join("")
          );
        });
      for (
        var r = [],
          n = [],
          i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          o =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          s = 0,
          a = o.length;
        s < a;
        ++s
      )
        (r[s] = o[s]), (n[o.charCodeAt(s)] = s);
      function u(t) {
        var e = t.length;
        if (e % 4 > 0)
          throw Error("Invalid string. Length must be a multiple of 4");
        var r = t.indexOf("=");
        -1 === r && (r = e);
        var n = r === e ? 0 : 4 - (r % 4);
        return [r, n];
      }
      (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
    },
    12653: function (t, e, r) {
      "use strict";
      var n = r(9109).Buffer;
      (e.oU = function (t) {
        {
          let e = n.from(t);
          e.reverse();
          let r = e.toString("hex");
          return 0 === r.length ? BigInt(0) : BigInt(`0x${r}`);
        }
      }),
        (e.Q5 = function (t) {
          {
            let e = t.toString("hex");
            return 0 === e.length ? BigInt(0) : BigInt(`0x${e}`);
          }
        }),
        (e.k$ = function (t, e) {
          {
            let r = t.toString(16),
              i = n.from(r.padStart(2 * e, "0").slice(0, 2 * e), "hex");
            return i.reverse(), i;
          }
        }),
        (e.zP = function (t, e) {
          {
            let r = t.toString(16);
            return n.from(r.padStart(2 * e, "0").slice(0, 2 * e), "hex");
          }
        });
    },
    58171: function (t, e, r) {
      !(function (t, e) {
        "use strict";
        function n(t, e) {
          if (!t) throw Error(e || "Assertion failed");
        }
        function i(t, e) {
          t.super_ = e;
          var r = function () {};
          (r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t);
        }
        function o(t, e, r) {
          if (o.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (("le" === e || "be" === e) && ((r = e), (e = 10)),
              this._init(t || 0, e || 10, r || "be"));
        }
        "object" == typeof t ? (t.exports = o) : (e.BN = o),
          (o.BN = o),
          (o.wordSize = 26);
        try {
          f =
            "undefined" != typeof window && void 0 !== window.Buffer
              ? window.Buffer
              : r(46601).Buffer;
        } catch (t) {}
        function s(t, e) {
          var r = t.charCodeAt(e);
          return r >= 48 && r <= 57
            ? r - 48
            : r >= 65 && r <= 70
            ? r - 55
            : r >= 97 && r <= 102
            ? r - 87
            : void n(!1, "Invalid character in " + t);
        }
        function a(t, e, r) {
          var n = s(t, r);
          return r - 1 >= e && (n |= s(t, r - 1) << 4), n;
        }
        function u(t, e, r, i) {
          for (var o = 0, s = 0, a = Math.min(t.length, r), u = e; u < a; u++) {
            var l = t.charCodeAt(u) - 48;
            (o *= i),
              (s = l >= 49 ? l - 49 + 10 : l >= 17 ? l - 17 + 10 : l),
              n(l >= 0 && s < i, "Invalid character"),
              (o += s);
          }
          return o;
        }
        function l(t, e) {
          (t.words = e.words),
            (t.length = e.length),
            (t.negative = e.negative),
            (t.red = e.red);
        }
        if (
          ((o.isBN = function (t) {
            return (
              t instanceof o ||
              (null !== t &&
                "object" == typeof t &&
                t.constructor.wordSize === o.wordSize &&
                Array.isArray(t.words))
            );
          }),
          (o.max = function (t, e) {
            return t.cmp(e) > 0 ? t : e;
          }),
          (o.min = function (t, e) {
            return 0 > t.cmp(e) ? t : e;
          }),
          (o.prototype._init = function (t, e, r) {
            if ("number" == typeof t) return this._initNumber(t, e, r);
            if ("object" == typeof t) return this._initArray(t, e, r);
            "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
            var i = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] &&
              (i++, (this.negative = 1)),
              i < t.length &&
                (16 === e
                  ? this._parseHex(t, i, r)
                  : (this._parseBase(t, e, i),
                    "le" === r && this._initArray(this.toArray(), e, r)));
          }),
          (o.prototype._initNumber = function (t, e, r) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                  (this.length = 2))
                : (n(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === r && this._initArray(this.toArray(), e, r);
          }),
          (o.prototype._initArray = function (t, e, r) {
            if ((n("number" == typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)),
              (this.words = Array(this.length));
            for (var i, o, s = 0; s < this.length; s++) this.words[s] = 0;
            var a = 0;
            if ("be" === r)
              for (s = t.length - 1, i = 0; s >= 0; s -= 3)
                (o = t[s] | (t[s - 1] << 8) | (t[s - 2] << 16)),
                  (this.words[i] |= (o << a) & 67108863),
                  (this.words[i + 1] = (o >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), i++);
            else if ("le" === r)
              for (s = 0, i = 0; s < t.length; s += 3)
                (o = t[s] | (t[s + 1] << 8) | (t[s + 2] << 16)),
                  (this.words[i] |= (o << a) & 67108863),
                  (this.words[i + 1] = (o >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), i++);
            return this._strip();
          }),
          (o.prototype._parseHex = function (t, e, r) {
            (this.length = Math.ceil((t.length - e) / 6)),
              (this.words = Array(this.length));
            for (var n, i = 0; i < this.length; i++) this.words[i] = 0;
            var o = 0,
              s = 0;
            if ("be" === r)
              for (i = t.length - 1; i >= e; i -= 2)
                (n = a(t, e, i) << o),
                  (this.words[s] |= 67108863 & n),
                  o >= 18
                    ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                    : (o += 8);
            else
              for (
                i = (t.length - e) % 2 == 0 ? e + 1 : e;
                i < t.length;
                i += 2
              )
                (n = a(t, e, i) << o),
                  (this.words[s] |= 67108863 & n),
                  o >= 18
                    ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                    : (o += 8);
            this._strip();
          }),
          (o.prototype._parseBase = function (t, e, r) {
            (this.words = [0]), (this.length = 1);
            for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
            n--, (i = (i / e) | 0);
            for (
              var o = t.length - r,
                s = o % n,
                a = Math.min(o, o - s) + r,
                l = 0,
                c = r;
              c < a;
              c += n
            )
              (l = u(t, c, c + n, e)),
                this.imuln(i),
                this.words[0] + l < 67108864
                  ? (this.words[0] += l)
                  : this._iaddn(l);
            if (0 !== s) {
              var f = 1;
              for (l = u(t, c, t.length, e), c = 0; c < s; c++) f *= e;
              this.imuln(f),
                this.words[0] + l < 67108864
                  ? (this.words[0] += l)
                  : this._iaddn(l);
            }
            this._strip();
          }),
          (o.prototype.copy = function (t) {
            t.words = Array(this.length);
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
            (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red);
          }),
          (o.prototype._move = function (t) {
            l(t, this);
          }),
          (o.prototype.clone = function () {
            var t = new o(null);
            return this.copy(t), t;
          }),
          (o.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (o.prototype._strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (o.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          "undefined" != typeof Symbol && "function" == typeof Symbol.for)
        )
          try {
            o.prototype[Symbol.for("nodejs.util.inspect.custom")] = c;
          } catch (t) {
            o.prototype.inspect = c;
          }
        else o.prototype.inspect = c;
        function c() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var f,
          h = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          d = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          p = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        function m(t, e, r) {
          r.negative = e.negative ^ t.negative;
          var n = (t.length + e.length) | 0;
          (r.length = n), (n = (n - 1) | 0);
          var i = 0 | t.words[0],
            o = 0 | e.words[0],
            s = i * o,
            a = 67108863 & s,
            u = (s / 67108864) | 0;
          r.words[0] = a;
          for (var l = 1; l < n; l++) {
            for (
              var c = u >>> 26,
                f = 67108863 & u,
                h = Math.min(l, e.length - 1),
                d = Math.max(0, l - t.length + 1);
              d <= h;
              d++
            ) {
              var p = (l - d) | 0;
              (c +=
                ((s = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + f) /
                  67108864) |
                0),
                (f = 67108863 & s);
            }
            (r.words[l] = 0 | f), (u = 0 | c);
          }
          return 0 !== u ? (r.words[l] = 0 | u) : r.length--, r._strip();
        }
        (o.prototype.toString = function (t, e) {
          if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
            r = "";
            for (var r, i = 0, o = 0, s = 0; s < this.length; s++) {
              var a = this.words[s],
                u = (((a << i) | o) & 16777215).toString(16);
              (o = (a >>> (24 - i)) & 16777215),
                (i += 2) >= 26 && ((i -= 26), s--),
                (r =
                  0 !== o || s !== this.length - 1
                    ? h[6 - u.length] + u + r
                    : u + r);
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % e != 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var l = d[t],
              c = p[t];
            r = "";
            var f = this.clone();
            for (f.negative = 0; !f.isZero(); ) {
              var m = f.modrn(c).toString(t);
              r = (f = f.idivn(c)).isZero() ? m + r : h[l - m.length] + m + r;
            }
            for (this.isZero() && (r = "0" + r); r.length % e != 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          n(!1, "Base should be between 2 and 36");
        }),
          (o.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  n(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (o.prototype.toJSON = function () {
            return this.toString(16, 2);
          }),
          f &&
            (o.prototype.toBuffer = function (t, e) {
              return this.toArrayLike(f, t, e);
            }),
          (o.prototype.toArray = function (t, e) {
            return this.toArrayLike(Array, t, e);
          }),
          (o.prototype.toArrayLike = function (t, e, r) {
            this._strip();
            var i = this.byteLength(),
              o = r || Math.max(1, i);
            n(i <= o, "byte array longer than desired length"),
              n(o > 0, "Requested array length <= 0");
            var s = t.allocUnsafe ? t.allocUnsafe(o) : new t(o);
            return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](s, i), s;
          }),
          (o.prototype._toArrayLikeLE = function (t, e) {
            for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
              var s = (this.words[i] << o) | n;
              (t[r++] = 255 & s),
                r < t.length && (t[r++] = (s >> 8) & 255),
                r < t.length && (t[r++] = (s >> 16) & 255),
                6 === o
                  ? (r < t.length && (t[r++] = (s >> 24) & 255),
                    (n = 0),
                    (o = 0))
                  : ((n = s >>> 24), (o += 2));
            }
            if (r < t.length) for (t[r++] = n; r < t.length; ) t[r++] = 0;
          }),
          (o.prototype._toArrayLikeBE = function (t, e) {
            for (
              var r = t.length - 1, n = 0, i = 0, o = 0;
              i < this.length;
              i++
            ) {
              var s = (this.words[i] << o) | n;
              (t[r--] = 255 & s),
                r >= 0 && (t[r--] = (s >> 8) & 255),
                r >= 0 && (t[r--] = (s >> 16) & 255),
                6 === o
                  ? (r >= 0 && (t[r--] = (s >> 24) & 255), (n = 0), (o = 0))
                  : ((n = s >>> 24), (o += 2));
            }
            if (r >= 0) for (t[r--] = n; r >= 0; ) t[r--] = 0;
          }),
          Math.clz32
            ? (o.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (o.prototype._countBits = function (t) {
                var e = t,
                  r = 0;
                return (
                  e >= 4096 && ((r += 13), (e >>>= 13)),
                  e >= 64 && ((r += 7), (e >>>= 7)),
                  e >= 8 && ((r += 4), (e >>>= 4)),
                  e >= 2 && ((r += 2), (e >>>= 2)),
                  r + e
                );
              }),
          (o.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var e = t,
              r = 0;
            return (
              (8191 & e) == 0 && ((r += 13), (e >>>= 13)),
              (127 & e) == 0 && ((r += 7), (e >>>= 7)),
              (15 & e) == 0 && ((r += 4), (e >>>= 4)),
              (3 & e) == 0 && ((r += 2), (e >>>= 2)),
              (1 & e) == 0 && r++,
              r
            );
          }),
          (o.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              e = this._countBits(t);
            return (this.length - 1) * 26 + e;
          }),
          (o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, e = 0; e < this.length; e++) {
              var r = this._zeroBits(this.words[e]);
              if (((t += r), 26 !== r)) break;
            }
            return t;
          }),
          (o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (o.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (o.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (o.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (o.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (o.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var e = 0; e < t.length; e++)
              this.words[e] = this.words[e] | t.words[e];
            return this._strip();
          }),
          (o.prototype.ior = function (t) {
            return n((this.negative | t.negative) == 0), this.iuor(t);
          }),
          (o.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (o.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (o.prototype.iuand = function (t) {
            var e;
            e = this.length > t.length ? t : this;
            for (var r = 0; r < e.length; r++)
              this.words[r] = this.words[r] & t.words[r];
            return (this.length = e.length), this._strip();
          }),
          (o.prototype.iand = function (t) {
            return n((this.negative | t.negative) == 0), this.iuand(t);
          }),
          (o.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (o.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (o.prototype.iuxor = function (t) {
            this.length > t.length
              ? ((e = this), (r = t))
              : ((e = t), (r = this));
            for (var e, r, n = 0; n < r.length; n++)
              this.words[n] = e.words[n] ^ r.words[n];
            if (this !== e)
              for (; n < e.length; n++) this.words[n] = e.words[n];
            return (this.length = e.length), this._strip();
          }),
          (o.prototype.ixor = function (t) {
            return n((this.negative | t.negative) == 0), this.iuxor(t);
          }),
          (o.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (o.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (o.prototype.inotn = function (t) {
            n("number" == typeof t && t >= 0);
            var e = 0 | Math.ceil(t / 26),
              r = t % 26;
            this._expand(e), r > 0 && e--;
            for (var i = 0; i < e; i++)
              this.words[i] = 67108863 & ~this.words[i];
            return (
              r > 0 &&
                (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
              this._strip()
            );
          }),
          (o.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (o.prototype.setn = function (t, e) {
            n("number" == typeof t && t >= 0);
            var r = (t / 26) | 0,
              i = t % 26;
            return (
              this._expand(r + 1),
              e
                ? (this.words[r] = this.words[r] | (1 << i))
                : (this.words[r] = this.words[r] & ~(1 << i)),
              this._strip()
            );
          }),
          (o.prototype.iadd = function (t) {
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (e = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (e = this.isub(t)),
                (t.negative = 1),
                e._normSign()
              );
            this.length > t.length
              ? ((r = this), (n = t))
              : ((r = t), (n = this));
            for (var e, r, n, i = 0, o = 0; o < n.length; o++)
              (e = (0 | r.words[o]) + (0 | n.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26);
            for (; 0 !== i && o < r.length; o++)
              (e = (0 | r.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26);
            if (((this.length = r.length), 0 !== i))
              (this.words[this.length] = i), this.length++;
            else if (r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o];
            return this;
          }),
          (o.prototype.add = function (t) {
            var e;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (o.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var e,
                r,
                n = this.iadd(t);
              return (t.negative = 1), n._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              );
            var i = this.cmp(t);
            if (0 === i)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            i > 0 ? ((e = this), (r = t)) : ((e = t), (r = this));
            for (var o = 0, s = 0; s < r.length; s++)
              (o = (n = (0 | e.words[s]) - (0 | r.words[s]) + o) >> 26),
                (this.words[s] = 67108863 & n);
            for (; 0 !== o && s < e.length; s++)
              (o = (n = (0 | e.words[s]) + o) >> 26),
                (this.words[s] = 67108863 & n);
            if (0 === o && s < e.length && e !== this)
              for (; s < e.length; s++) this.words[s] = e.words[s];
            return (
              (this.length = Math.max(this.length, s)),
              e !== this && (this.negative = 1),
              this._strip()
            );
          }),
          (o.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var g = function (t, e, r) {
          var n,
            i,
            o,
            s = t.words,
            a = e.words,
            u = r.words,
            l = 0,
            c = 0 | s[0],
            f = 8191 & c,
            h = c >>> 13,
            d = 0 | s[1],
            p = 8191 & d,
            m = d >>> 13,
            g = 0 | s[2],
            y = 8191 & g,
            b = g >>> 13,
            v = 0 | s[3],
            w = 8191 & v,
            x = v >>> 13,
            E = 0 | s[4],
            M = 8191 & E,
            P = E >>> 13,
            B = 0 | s[5],
            A = 8191 & B,
            S = B >>> 13,
            C = 0 | s[6],
            I = 8191 & C,
            O = C >>> 13,
            _ = 0 | s[7],
            k = 8191 & _,
            $ = _ >>> 13,
            R = 0 | s[8],
            U = 8191 & R,
            T = R >>> 13,
            L = 0 | s[9],
            F = 8191 & L,
            N = L >>> 13,
            j = 0 | a[0],
            z = 8191 & j,
            G = j >>> 13,
            D = 0 | a[1],
            q = 8191 & D,
            H = D >>> 13,
            V = 0 | a[2],
            Z = 8191 & V,
            W = V >>> 13,
            K = 0 | a[3],
            Y = 8191 & K,
            J = K >>> 13,
            Q = 0 | a[4],
            X = 8191 & Q,
            tt = Q >>> 13,
            te = 0 | a[5],
            tr = 8191 & te,
            tn = te >>> 13,
            ti = 0 | a[6],
            to = 8191 & ti,
            ts = ti >>> 13,
            ta = 0 | a[7],
            tu = 8191 & ta,
            tl = ta >>> 13,
            tc = 0 | a[8],
            tf = 8191 & tc,
            th = tc >>> 13,
            td = 0 | a[9],
            tp = 8191 & td,
            tm = td >>> 13;
          (r.negative = t.negative ^ e.negative), (r.length = 19);
          var tg =
            (((l + (n = Math.imul(f, z))) | 0) +
              ((8191 & (i = ((i = Math.imul(f, G)) + Math.imul(h, z)) | 0)) <<
                13)) |
            0;
          (l = ((((o = Math.imul(h, G)) + (i >>> 13)) | 0) + (tg >>> 26)) | 0),
            (tg &= 67108863),
            (n = Math.imul(p, z)),
            (i = ((i = Math.imul(p, G)) + Math.imul(m, z)) | 0),
            (o = Math.imul(m, G));
          var ty =
            (((l + (n = (n + Math.imul(f, q)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, H)) | 0) + Math.imul(h, q)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(h, H)) | 0) + (i >>> 13)) | 0) +
              (ty >>> 26)) |
            0),
            (ty &= 67108863),
            (n = Math.imul(y, z)),
            (i = ((i = Math.imul(y, G)) + Math.imul(b, z)) | 0),
            (o = Math.imul(b, G)),
            (n = (n + Math.imul(p, q)) | 0),
            (i = ((i = (i + Math.imul(p, H)) | 0) + Math.imul(m, q)) | 0),
            (o = (o + Math.imul(m, H)) | 0);
          var tb =
            (((l + (n = (n + Math.imul(f, Z)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, W)) | 0) + Math.imul(h, Z)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(h, W)) | 0) + (i >>> 13)) | 0) +
              (tb >>> 26)) |
            0),
            (tb &= 67108863),
            (n = Math.imul(w, z)),
            (i = ((i = Math.imul(w, G)) + Math.imul(x, z)) | 0),
            (o = Math.imul(x, G)),
            (n = (n + Math.imul(y, q)) | 0),
            (i = ((i = (i + Math.imul(y, H)) | 0) + Math.imul(b, q)) | 0),
            (o = (o + Math.imul(b, H)) | 0),
            (n = (n + Math.imul(p, Z)) | 0),
            (i = ((i = (i + Math.imul(p, W)) | 0) + Math.imul(m, Z)) | 0),
            (o = (o + Math.imul(m, W)) | 0);
          var tv =
            (((l + (n = (n + Math.imul(f, Y)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, J)) | 0) + Math.imul(h, Y)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(h, J)) | 0) + (i >>> 13)) | 0) +
              (tv >>> 26)) |
            0),
            (tv &= 67108863),
            (n = Math.imul(M, z)),
            (i = ((i = Math.imul(M, G)) + Math.imul(P, z)) | 0),
            (o = Math.imul(P, G)),
            (n = (n + Math.imul(w, q)) | 0),
            (i = ((i = (i + Math.imul(w, H)) | 0) + Math.imul(x, q)) | 0),
            (o = (o + Math.imul(x, H)) | 0),
            (n = (n + Math.imul(y, Z)) | 0),
            (i = ((i = (i + Math.imul(y, W)) | 0) + Math.imul(b, Z)) | 0),
            (o = (o + Math.imul(b, W)) | 0),
            (n = (n + Math.imul(p, Y)) | 0),
            (i = ((i = (i + Math.imul(p, J)) | 0) + Math.imul(m, Y)) | 0),
            (o = (o + Math.imul(m, J)) | 0);
          var tw =
            (((l + (n = (n + Math.imul(f, X)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, tt)) | 0) + Math.imul(h, X)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(h, tt)) | 0) + (i >>> 13)) | 0) +
              (tw >>> 26)) |
            0),
            (tw &= 67108863),
            (n = Math.imul(A, z)),
            (i = ((i = Math.imul(A, G)) + Math.imul(S, z)) | 0),
            (o = Math.imul(S, G)),
            (n = (n + Math.imul(M, q)) | 0),
            (i = ((i = (i + Math.imul(M, H)) | 0) + Math.imul(P, q)) | 0),
            (o = (o + Math.imul(P, H)) | 0),
            (n = (n + Math.imul(w, Z)) | 0),
            (i = ((i = (i + Math.imul(w, W)) | 0) + Math.imul(x, Z)) | 0),
            (o = (o + Math.imul(x, W)) | 0),
            (n = (n + Math.imul(y, Y)) | 0),
            (i = ((i = (i + Math.imul(y, J)) | 0) + Math.imul(b, Y)) | 0),
            (o = (o + Math.imul(b, J)) | 0),
            (n = (n + Math.imul(p, X)) | 0),
            (i = ((i = (i + Math.imul(p, tt)) | 0) + Math.imul(m, X)) | 0),
            (o = (o + Math.imul(m, tt)) | 0);
          var tx =
            (((l + (n = (n + Math.imul(f, tr)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, tn)) | 0) + Math.imul(h, tr)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(h, tn)) | 0) + (i >>> 13)) | 0) +
              (tx >>> 26)) |
            0),
            (tx &= 67108863),
            (n = Math.imul(I, z)),
            (i = ((i = Math.imul(I, G)) + Math.imul(O, z)) | 0),
            (o = Math.imul(O, G)),
            (n = (n + Math.imul(A, q)) | 0),
            (i = ((i = (i + Math.imul(A, H)) | 0) + Math.imul(S, q)) | 0),
            (o = (o + Math.imul(S, H)) | 0),
            (n = (n + Math.imul(M, Z)) | 0),
            (i = ((i = (i + Math.imul(M, W)) | 0) + Math.imul(P, Z)) | 0),
            (o = (o + Math.imul(P, W)) | 0),
            (n = (n + Math.imul(w, Y)) | 0),
            (i = ((i = (i + Math.imul(w, J)) | 0) + Math.imul(x, Y)) | 0),
            (o = (o + Math.imul(x, J)) | 0),
            (n = (n + Math.imul(y, X)) | 0),
            (i = ((i = (i + Math.imul(y, tt)) | 0) + Math.imul(b, X)) | 0),
            (o = (o + Math.imul(b, tt)) | 0),
            (n = (n + Math.imul(p, tr)) | 0),
            (i = ((i = (i + Math.imul(p, tn)) | 0) + Math.imul(m, tr)) | 0),
            (o = (o + Math.imul(m, tn)) | 0);
          var tE =
            (((l + (n = (n + Math.imul(f, to)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, ts)) | 0) + Math.imul(h, to)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(h, ts)) | 0) + (i >>> 13)) | 0) +
              (tE >>> 26)) |
            0),
            (tE &= 67108863),
            (n = Math.imul(k, z)),
            (i = ((i = Math.imul(k, G)) + Math.imul($, z)) | 0),
            (o = Math.imul($, G)),
            (n = (n + Math.imul(I, q)) | 0),
            (i = ((i = (i + Math.imul(I, H)) | 0) + Math.imul(O, q)) | 0),
            (o = (o + Math.imul(O, H)) | 0),
            (n = (n + Math.imul(A, Z)) | 0),
            (i = ((i = (i + Math.imul(A, W)) | 0) + Math.imul(S, Z)) | 0),
            (o = (o + Math.imul(S, W)) | 0),
            (n = (n + Math.imul(M, Y)) | 0),
            (i = ((i = (i + Math.imul(M, J)) | 0) + Math.imul(P, Y)) | 0),
            (o = (o + Math.imul(P, J)) | 0),
            (n = (n + Math.imul(w, X)) | 0),
            (i = ((i = (i + Math.imul(w, tt)) | 0) + Math.imul(x, X)) | 0),
            (o = (o + Math.imul(x, tt)) | 0),
            (n = (n + Math.imul(y, tr)) | 0),
            (i = ((i = (i + Math.imul(y, tn)) | 0) + Math.imul(b, tr)) | 0),
            (o = (o + Math.imul(b, tn)) | 0),
            (n = (n + Math.imul(p, to)) | 0),
            (i = ((i = (i + Math.imul(p, ts)) | 0) + Math.imul(m, to)) | 0),
            (o = (o + Math.imul(m, ts)) | 0);
          var tM =
            (((l + (n = (n + Math.imul(f, tu)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, tl)) | 0) + Math.imul(h, tu)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(h, tl)) | 0) + (i >>> 13)) | 0) +
              (tM >>> 26)) |
            0),
            (tM &= 67108863),
            (n = Math.imul(U, z)),
            (i = ((i = Math.imul(U, G)) + Math.imul(T, z)) | 0),
            (o = Math.imul(T, G)),
            (n = (n + Math.imul(k, q)) | 0),
            (i = ((i = (i + Math.imul(k, H)) | 0) + Math.imul($, q)) | 0),
            (o = (o + Math.imul($, H)) | 0),
            (n = (n + Math.imul(I, Z)) | 0),
            (i = ((i = (i + Math.imul(I, W)) | 0) + Math.imul(O, Z)) | 0),
            (o = (o + Math.imul(O, W)) | 0),
            (n = (n + Math.imul(A, Y)) | 0),
            (i = ((i = (i + Math.imul(A, J)) | 0) + Math.imul(S, Y)) | 0),
            (o = (o + Math.imul(S, J)) | 0),
            (n = (n + Math.imul(M, X)) | 0),
            (i = ((i = (i + Math.imul(M, tt)) | 0) + Math.imul(P, X)) | 0),
            (o = (o + Math.imul(P, tt)) | 0),
            (n = (n + Math.imul(w, tr)) | 0),
            (i = ((i = (i + Math.imul(w, tn)) | 0) + Math.imul(x, tr)) | 0),
            (o = (o + Math.imul(x, tn)) | 0),
            (n = (n + Math.imul(y, to)) | 0),
            (i = ((i = (i + Math.imul(y, ts)) | 0) + Math.imul(b, to)) | 0),
            (o = (o + Math.imul(b, ts)) | 0),
            (n = (n + Math.imul(p, tu)) | 0),
            (i = ((i = (i + Math.imul(p, tl)) | 0) + Math.imul(m, tu)) | 0),
            (o = (o + Math.imul(m, tl)) | 0);
          var tP =
            (((l + (n = (n + Math.imul(f, tf)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, th)) | 0) + Math.imul(h, tf)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(h, th)) | 0) + (i >>> 13)) | 0) +
              (tP >>> 26)) |
            0),
            (tP &= 67108863),
            (n = Math.imul(F, z)),
            (i = ((i = Math.imul(F, G)) + Math.imul(N, z)) | 0),
            (o = Math.imul(N, G)),
            (n = (n + Math.imul(U, q)) | 0),
            (i = ((i = (i + Math.imul(U, H)) | 0) + Math.imul(T, q)) | 0),
            (o = (o + Math.imul(T, H)) | 0),
            (n = (n + Math.imul(k, Z)) | 0),
            (i = ((i = (i + Math.imul(k, W)) | 0) + Math.imul($, Z)) | 0),
            (o = (o + Math.imul($, W)) | 0),
            (n = (n + Math.imul(I, Y)) | 0),
            (i = ((i = (i + Math.imul(I, J)) | 0) + Math.imul(O, Y)) | 0),
            (o = (o + Math.imul(O, J)) | 0),
            (n = (n + Math.imul(A, X)) | 0),
            (i = ((i = (i + Math.imul(A, tt)) | 0) + Math.imul(S, X)) | 0),
            (o = (o + Math.imul(S, tt)) | 0),
            (n = (n + Math.imul(M, tr)) | 0),
            (i = ((i = (i + Math.imul(M, tn)) | 0) + Math.imul(P, tr)) | 0),
            (o = (o + Math.imul(P, tn)) | 0),
            (n = (n + Math.imul(w, to)) | 0),
            (i = ((i = (i + Math.imul(w, ts)) | 0) + Math.imul(x, to)) | 0),
            (o = (o + Math.imul(x, ts)) | 0),
            (n = (n + Math.imul(y, tu)) | 0),
            (i = ((i = (i + Math.imul(y, tl)) | 0) + Math.imul(b, tu)) | 0),
            (o = (o + Math.imul(b, tl)) | 0),
            (n = (n + Math.imul(p, tf)) | 0),
            (i = ((i = (i + Math.imul(p, th)) | 0) + Math.imul(m, tf)) | 0),
            (o = (o + Math.imul(m, th)) | 0);
          var tB =
            (((l + (n = (n + Math.imul(f, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, tm)) | 0) + Math.imul(h, tp)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(h, tm)) | 0) + (i >>> 13)) | 0) +
              (tB >>> 26)) |
            0),
            (tB &= 67108863),
            (n = Math.imul(F, q)),
            (i = ((i = Math.imul(F, H)) + Math.imul(N, q)) | 0),
            (o = Math.imul(N, H)),
            (n = (n + Math.imul(U, Z)) | 0),
            (i = ((i = (i + Math.imul(U, W)) | 0) + Math.imul(T, Z)) | 0),
            (o = (o + Math.imul(T, W)) | 0),
            (n = (n + Math.imul(k, Y)) | 0),
            (i = ((i = (i + Math.imul(k, J)) | 0) + Math.imul($, Y)) | 0),
            (o = (o + Math.imul($, J)) | 0),
            (n = (n + Math.imul(I, X)) | 0),
            (i = ((i = (i + Math.imul(I, tt)) | 0) + Math.imul(O, X)) | 0),
            (o = (o + Math.imul(O, tt)) | 0),
            (n = (n + Math.imul(A, tr)) | 0),
            (i = ((i = (i + Math.imul(A, tn)) | 0) + Math.imul(S, tr)) | 0),
            (o = (o + Math.imul(S, tn)) | 0),
            (n = (n + Math.imul(M, to)) | 0),
            (i = ((i = (i + Math.imul(M, ts)) | 0) + Math.imul(P, to)) | 0),
            (o = (o + Math.imul(P, ts)) | 0),
            (n = (n + Math.imul(w, tu)) | 0),
            (i = ((i = (i + Math.imul(w, tl)) | 0) + Math.imul(x, tu)) | 0),
            (o = (o + Math.imul(x, tl)) | 0),
            (n = (n + Math.imul(y, tf)) | 0),
            (i = ((i = (i + Math.imul(y, th)) | 0) + Math.imul(b, tf)) | 0),
            (o = (o + Math.imul(b, th)) | 0);
          var tA =
            (((l + (n = (n + Math.imul(p, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(p, tm)) | 0) + Math.imul(m, tp)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(m, tm)) | 0) + (i >>> 13)) | 0) +
              (tA >>> 26)) |
            0),
            (tA &= 67108863),
            (n = Math.imul(F, Z)),
            (i = ((i = Math.imul(F, W)) + Math.imul(N, Z)) | 0),
            (o = Math.imul(N, W)),
            (n = (n + Math.imul(U, Y)) | 0),
            (i = ((i = (i + Math.imul(U, J)) | 0) + Math.imul(T, Y)) | 0),
            (o = (o + Math.imul(T, J)) | 0),
            (n = (n + Math.imul(k, X)) | 0),
            (i = ((i = (i + Math.imul(k, tt)) | 0) + Math.imul($, X)) | 0),
            (o = (o + Math.imul($, tt)) | 0),
            (n = (n + Math.imul(I, tr)) | 0),
            (i = ((i = (i + Math.imul(I, tn)) | 0) + Math.imul(O, tr)) | 0),
            (o = (o + Math.imul(O, tn)) | 0),
            (n = (n + Math.imul(A, to)) | 0),
            (i = ((i = (i + Math.imul(A, ts)) | 0) + Math.imul(S, to)) | 0),
            (o = (o + Math.imul(S, ts)) | 0),
            (n = (n + Math.imul(M, tu)) | 0),
            (i = ((i = (i + Math.imul(M, tl)) | 0) + Math.imul(P, tu)) | 0),
            (o = (o + Math.imul(P, tl)) | 0),
            (n = (n + Math.imul(w, tf)) | 0),
            (i = ((i = (i + Math.imul(w, th)) | 0) + Math.imul(x, tf)) | 0),
            (o = (o + Math.imul(x, th)) | 0);
          var tS =
            (((l + (n = (n + Math.imul(y, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(y, tm)) | 0) + Math.imul(b, tp)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(b, tm)) | 0) + (i >>> 13)) | 0) +
              (tS >>> 26)) |
            0),
            (tS &= 67108863),
            (n = Math.imul(F, Y)),
            (i = ((i = Math.imul(F, J)) + Math.imul(N, Y)) | 0),
            (o = Math.imul(N, J)),
            (n = (n + Math.imul(U, X)) | 0),
            (i = ((i = (i + Math.imul(U, tt)) | 0) + Math.imul(T, X)) | 0),
            (o = (o + Math.imul(T, tt)) | 0),
            (n = (n + Math.imul(k, tr)) | 0),
            (i = ((i = (i + Math.imul(k, tn)) | 0) + Math.imul($, tr)) | 0),
            (o = (o + Math.imul($, tn)) | 0),
            (n = (n + Math.imul(I, to)) | 0),
            (i = ((i = (i + Math.imul(I, ts)) | 0) + Math.imul(O, to)) | 0),
            (o = (o + Math.imul(O, ts)) | 0),
            (n = (n + Math.imul(A, tu)) | 0),
            (i = ((i = (i + Math.imul(A, tl)) | 0) + Math.imul(S, tu)) | 0),
            (o = (o + Math.imul(S, tl)) | 0),
            (n = (n + Math.imul(M, tf)) | 0),
            (i = ((i = (i + Math.imul(M, th)) | 0) + Math.imul(P, tf)) | 0),
            (o = (o + Math.imul(P, th)) | 0);
          var tC =
            (((l + (n = (n + Math.imul(w, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(w, tm)) | 0) + Math.imul(x, tp)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(x, tm)) | 0) + (i >>> 13)) | 0) +
              (tC >>> 26)) |
            0),
            (tC &= 67108863),
            (n = Math.imul(F, X)),
            (i = ((i = Math.imul(F, tt)) + Math.imul(N, X)) | 0),
            (o = Math.imul(N, tt)),
            (n = (n + Math.imul(U, tr)) | 0),
            (i = ((i = (i + Math.imul(U, tn)) | 0) + Math.imul(T, tr)) | 0),
            (o = (o + Math.imul(T, tn)) | 0),
            (n = (n + Math.imul(k, to)) | 0),
            (i = ((i = (i + Math.imul(k, ts)) | 0) + Math.imul($, to)) | 0),
            (o = (o + Math.imul($, ts)) | 0),
            (n = (n + Math.imul(I, tu)) | 0),
            (i = ((i = (i + Math.imul(I, tl)) | 0) + Math.imul(O, tu)) | 0),
            (o = (o + Math.imul(O, tl)) | 0),
            (n = (n + Math.imul(A, tf)) | 0),
            (i = ((i = (i + Math.imul(A, th)) | 0) + Math.imul(S, tf)) | 0),
            (o = (o + Math.imul(S, th)) | 0);
          var tI =
            (((l + (n = (n + Math.imul(M, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(M, tm)) | 0) + Math.imul(P, tp)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(P, tm)) | 0) + (i >>> 13)) | 0) +
              (tI >>> 26)) |
            0),
            (tI &= 67108863),
            (n = Math.imul(F, tr)),
            (i = ((i = Math.imul(F, tn)) + Math.imul(N, tr)) | 0),
            (o = Math.imul(N, tn)),
            (n = (n + Math.imul(U, to)) | 0),
            (i = ((i = (i + Math.imul(U, ts)) | 0) + Math.imul(T, to)) | 0),
            (o = (o + Math.imul(T, ts)) | 0),
            (n = (n + Math.imul(k, tu)) | 0),
            (i = ((i = (i + Math.imul(k, tl)) | 0) + Math.imul($, tu)) | 0),
            (o = (o + Math.imul($, tl)) | 0),
            (n = (n + Math.imul(I, tf)) | 0),
            (i = ((i = (i + Math.imul(I, th)) | 0) + Math.imul(O, tf)) | 0),
            (o = (o + Math.imul(O, th)) | 0);
          var tO =
            (((l + (n = (n + Math.imul(A, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(A, tm)) | 0) + Math.imul(S, tp)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(S, tm)) | 0) + (i >>> 13)) | 0) +
              (tO >>> 26)) |
            0),
            (tO &= 67108863),
            (n = Math.imul(F, to)),
            (i = ((i = Math.imul(F, ts)) + Math.imul(N, to)) | 0),
            (o = Math.imul(N, ts)),
            (n = (n + Math.imul(U, tu)) | 0),
            (i = ((i = (i + Math.imul(U, tl)) | 0) + Math.imul(T, tu)) | 0),
            (o = (o + Math.imul(T, tl)) | 0),
            (n = (n + Math.imul(k, tf)) | 0),
            (i = ((i = (i + Math.imul(k, th)) | 0) + Math.imul($, tf)) | 0),
            (o = (o + Math.imul($, th)) | 0);
          var t_ =
            (((l + (n = (n + Math.imul(I, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(I, tm)) | 0) + Math.imul(O, tp)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(O, tm)) | 0) + (i >>> 13)) | 0) +
              (t_ >>> 26)) |
            0),
            (t_ &= 67108863),
            (n = Math.imul(F, tu)),
            (i = ((i = Math.imul(F, tl)) + Math.imul(N, tu)) | 0),
            (o = Math.imul(N, tl)),
            (n = (n + Math.imul(U, tf)) | 0),
            (i = ((i = (i + Math.imul(U, th)) | 0) + Math.imul(T, tf)) | 0),
            (o = (o + Math.imul(T, th)) | 0);
          var tk =
            (((l + (n = (n + Math.imul(k, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(k, tm)) | 0) + Math.imul($, tp)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul($, tm)) | 0) + (i >>> 13)) | 0) +
              (tk >>> 26)) |
            0),
            (tk &= 67108863),
            (n = Math.imul(F, tf)),
            (i = ((i = Math.imul(F, th)) + Math.imul(N, tf)) | 0),
            (o = Math.imul(N, th));
          var t$ =
            (((l + (n = (n + Math.imul(U, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(U, tm)) | 0) + Math.imul(T, tp)) | 0)) <<
                13)) |
            0;
          (l =
            ((((o = (o + Math.imul(T, tm)) | 0) + (i >>> 13)) | 0) +
              (t$ >>> 26)) |
            0),
            (t$ &= 67108863);
          var tR =
            (((l + (n = Math.imul(F, tp))) | 0) +
              ((8191 & (i = ((i = Math.imul(F, tm)) + Math.imul(N, tp)) | 0)) <<
                13)) |
            0;
          return (
            (l =
              ((((o = Math.imul(N, tm)) + (i >>> 13)) | 0) + (tR >>> 26)) | 0),
            (tR &= 67108863),
            (u[0] = tg),
            (u[1] = ty),
            (u[2] = tb),
            (u[3] = tv),
            (u[4] = tw),
            (u[5] = tx),
            (u[6] = tE),
            (u[7] = tM),
            (u[8] = tP),
            (u[9] = tB),
            (u[10] = tA),
            (u[11] = tS),
            (u[12] = tC),
            (u[13] = tI),
            (u[14] = tO),
            (u[15] = t_),
            (u[16] = tk),
            (u[17] = t$),
            (u[18] = tR),
            0 !== l && ((u[19] = l), r.length++),
            r
          );
        };
        function y(t, e, r) {
          (r.negative = e.negative ^ t.negative),
            (r.length = t.length + e.length);
          for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
            var s = i;
            i = 0;
            for (
              var a = 67108863 & n,
                u = Math.min(o, e.length - 1),
                l = Math.max(0, o - t.length + 1);
              l <= u;
              l++
            ) {
              var c = o - l,
                f = (0 | t.words[c]) * (0 | e.words[l]),
                h = 67108863 & f;
              (s = (s + ((f / 67108864) | 0)) | 0),
                (a = 67108863 & (h = (h + a) | 0)),
                (i += (s = (s + (h >>> 26)) | 0) >>> 26),
                (s &= 67108863);
            }
            (r.words[o] = a), (n = s), (s = i);
          }
          return 0 !== n ? (r.words[o] = n) : r.length--, r._strip();
        }
        function b(t, e) {
          (this.x = t), (this.y = e);
        }
        Math.imul || (g = m),
          (o.prototype.mulTo = function (t, e) {
            var r,
              n = this.length + t.length;
            return 10 === this.length && 10 === t.length
              ? g(this, t, e)
              : n < 63
              ? m(this, t, e)
              : y(this, t, e);
          }),
          (b.prototype.makeRBT = function (t) {
            for (
              var e = Array(t), r = o.prototype._countBits(t) - 1, n = 0;
              n < t;
              n++
            )
              e[n] = this.revBin(n, r, t);
            return e;
          }),
          (b.prototype.revBin = function (t, e, r) {
            if (0 === t || t === r - 1) return t;
            for (var n = 0, i = 0; i < e; i++)
              (n |= (1 & t) << (e - i - 1)), (t >>= 1);
            return n;
          }),
          (b.prototype.permute = function (t, e, r, n, i, o) {
            for (var s = 0; s < o; s++) (n[s] = e[t[s]]), (i[s] = r[t[s]]);
          }),
          (b.prototype.transform = function (t, e, r, n, i, o) {
            this.permute(o, t, e, r, n, i);
            for (var s = 1; s < i; s <<= 1)
              for (
                var a = s << 1,
                  u = Math.cos((2 * Math.PI) / a),
                  l = Math.sin((2 * Math.PI) / a),
                  c = 0;
                c < i;
                c += a
              )
                for (var f = u, h = l, d = 0; d < s; d++) {
                  var p = r[c + d],
                    m = n[c + d],
                    g = r[c + d + s],
                    y = n[c + d + s],
                    b = f * g - h * y;
                  (y = f * y + h * g),
                    (g = b),
                    (r[c + d] = p + g),
                    (n[c + d] = m + y),
                    (r[c + d + s] = p - g),
                    (n[c + d + s] = m - y),
                    d !== a &&
                      ((b = u * f - l * h), (h = u * h + l * f), (f = b));
                }
          }),
          (b.prototype.guessLen13b = function (t, e) {
            var r = 1 | Math.max(e, t),
              n = 1 & r,
              i = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) i++;
            return 1 << (i + 1 + n);
          }),
          (b.prototype.conjugate = function (t, e, r) {
            if (!(r <= 1))
              for (var n = 0; n < r / 2; n++) {
                var i = t[n];
                (t[n] = t[r - n - 1]),
                  (t[r - n - 1] = i),
                  (i = e[n]),
                  (e[n] = -e[r - n - 1]),
                  (e[r - n - 1] = -i);
              }
          }),
          (b.prototype.normalize13b = function (t, e) {
            for (var r = 0, n = 0; n < e / 2; n++) {
              var i =
                8192 * Math.round(t[2 * n + 1] / e) +
                Math.round(t[2 * n] / e) +
                r;
              (t[n] = 67108863 & i),
                (r = i < 67108864 ? 0 : (i / 67108864) | 0);
            }
            return t;
          }),
          (b.prototype.convert13b = function (t, e, r, i) {
            for (var o = 0, s = 0; s < e; s++)
              (o += 0 | t[s]),
                (r[2 * s] = 8191 & o),
                (o >>>= 13),
                (r[2 * s + 1] = 8191 & o),
                (o >>>= 13);
            for (s = 2 * e; s < i; ++s) r[s] = 0;
            n(0 === o), n((-8192 & o) == 0);
          }),
          (b.prototype.stub = function (t) {
            for (var e = Array(t), r = 0; r < t; r++) e[r] = 0;
            return e;
          }),
          (b.prototype.mulp = function (t, e, r) {
            var n = 2 * this.guessLen13b(t.length, e.length),
              i = this.makeRBT(n),
              o = this.stub(n),
              s = Array(n),
              a = Array(n),
              u = Array(n),
              l = Array(n),
              c = Array(n),
              f = Array(n),
              h = r.words;
            (h.length = n),
              this.convert13b(t.words, t.length, s, n),
              this.convert13b(e.words, e.length, l, n),
              this.transform(s, o, a, u, n, i),
              this.transform(l, o, c, f, n, i);
            for (var d = 0; d < n; d++) {
              var p = a[d] * c[d] - u[d] * f[d];
              (u[d] = a[d] * f[d] + u[d] * c[d]), (a[d] = p);
            }
            return (
              this.conjugate(a, u, n),
              this.transform(a, u, h, o, n, i),
              this.conjugate(h, o, n),
              this.normalize13b(h, n),
              (r.negative = t.negative ^ e.negative),
              (r.length = t.length + e.length),
              r._strip()
            );
          }),
          (o.prototype.mul = function (t) {
            var e = new o(null);
            return (e.words = Array(this.length + t.length)), this.mulTo(t, e);
          }),
          (o.prototype.mulf = function (t) {
            var e = new o(null);
            return (e.words = Array(this.length + t.length)), y(this, t, e);
          }),
          (o.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (o.prototype.imuln = function (t) {
            var e = t < 0;
            e && (t = -t), n("number" == typeof t), n(t < 67108864);
            for (var r = 0, i = 0; i < this.length; i++) {
              var o = (0 | this.words[i]) * t,
                s = (67108863 & o) + (67108863 & r);
              (r >>= 26),
                (r += ((o / 67108864) | 0) + (s >>> 26)),
                (this.words[i] = 67108863 & s);
            }
            return (
              0 !== r && ((this.words[i] = r), this.length++),
              e ? this.ineg() : this
            );
          }),
          (o.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (o.prototype.sqr = function () {
            return this.mul(this);
          }),
          (o.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (o.prototype.pow = function (t) {
            var e = (function (t) {
              for (var e = Array(t.bitLength()), r = 0; r < e.length; r++) {
                var n = (r / 26) | 0,
                  i = r % 26;
                e[r] = (t.words[n] >>> i) & 1;
              }
              return e;
            })(t);
            if (0 === e.length) return new o(1);
            for (
              var r = this, n = 0;
              n < e.length && 0 === e[n];
              n++, r = r.sqr()
            );
            if (++n < e.length)
              for (var i = r.sqr(); n < e.length; n++, i = i.sqr())
                0 !== e[n] && (r = r.mul(i));
            return r;
          }),
          (o.prototype.iushln = function (t) {
            n("number" == typeof t && t >= 0);
            var e,
              r = t % 26,
              i = (t - r) / 26,
              o = (67108863 >>> (26 - r)) << (26 - r);
            if (0 !== r) {
              var s = 0;
              for (e = 0; e < this.length; e++) {
                var a = this.words[e] & o,
                  u = ((0 | this.words[e]) - a) << r;
                (this.words[e] = u | s), (s = a >>> (26 - r));
              }
              s && ((this.words[e] = s), this.length++);
            }
            if (0 !== i) {
              for (e = this.length - 1; e >= 0; e--)
                this.words[e + i] = this.words[e];
              for (e = 0; e < i; e++) this.words[e] = 0;
              this.length += i;
            }
            return this._strip();
          }),
          (o.prototype.ishln = function (t) {
            return n(0 === this.negative), this.iushln(t);
          }),
          (o.prototype.iushrn = function (t, e, r) {
            n("number" == typeof t && t >= 0),
              (i = e ? (e - (e % 26)) / 26 : 0);
            var i,
              o = t % 26,
              s = Math.min((t - o) / 26, this.length),
              a = 67108863 ^ ((67108863 >>> o) << o);
            if (((i -= s), (i = Math.max(0, i)), r)) {
              for (var u = 0; u < s; u++) r.words[u] = this.words[u];
              r.length = s;
            }
            if (0 === s);
            else if (this.length > s)
              for (this.length -= s, u = 0; u < this.length; u++)
                this.words[u] = this.words[u + s];
            else (this.words[0] = 0), (this.length = 1);
            var l = 0;
            for (u = this.length - 1; u >= 0 && (0 !== l || u >= i); u--) {
              var c = 0 | this.words[u];
              (this.words[u] = (l << (26 - o)) | (c >>> o)), (l = c & a);
            }
            return (
              r && 0 !== l && (r.words[r.length++] = l),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this._strip()
            );
          }),
          (o.prototype.ishrn = function (t, e, r) {
            return n(0 === this.negative), this.iushrn(t, e, r);
          }),
          (o.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (o.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (o.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (o.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (o.prototype.testn = function (t) {
            n("number" == typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            return !(this.length <= r) && !!(this.words[r] & (1 << e));
          }),
          (o.prototype.imaskn = function (t) {
            n("number" == typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            return (n(
              0 === this.negative,
              "imaskn works only with positive numbers"
            ),
            this.length <= r)
              ? this
              : (0 !== e && r++,
                (this.length = Math.min(r, this.length)),
                0 !== e &&
                  (this.words[this.length - 1] &=
                    67108863 ^ ((67108863 >>> e) << e)),
                this._strip());
          }),
          (o.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (o.prototype.iaddn = function (t) {
            return (n("number" == typeof t), n(t < 67108864), t < 0)
              ? this.isubn(-t)
              : 0 !== this.negative
              ? (1 === this.length && (0 | this.words[0]) <= t
                  ? ((this.words[0] = t - (0 | this.words[0])),
                    (this.negative = 0))
                  : ((this.negative = 0), this.isubn(t), (this.negative = 1)),
                this)
              : this._iaddn(t);
          }),
          (o.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864),
                e === this.length - 1
                  ? (this.words[e + 1] = 1)
                  : this.words[e + 1]++;
            return (this.length = Math.max(this.length, e + 1)), this;
          }),
          (o.prototype.isubn = function (t) {
            if ((n("number" == typeof t), n(t < 67108864), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1);
            return this._strip();
          }),
          (o.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (o.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (o.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (o.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (o.prototype._ishlnsubmul = function (t, e, r) {
            var i,
              o,
              s = t.length + r;
            this._expand(s);
            var a = 0;
            for (i = 0; i < t.length; i++) {
              o = (0 | this.words[i + r]) + a;
              var u = (0 | t.words[i]) * e;
              (o -= 67108863 & u),
                (a = (o >> 26) - ((u / 67108864) | 0)),
                (this.words[i + r] = 67108863 & o);
            }
            for (; i < this.length - r; i++)
              (a = (o = (0 | this.words[i + r]) + a) >> 26),
                (this.words[i + r] = 67108863 & o);
            if (0 === a) return this._strip();
            for (n(-1 === a), a = 0, i = 0; i < this.length; i++)
              (a = (o = -(0 | this.words[i]) + a) >> 26),
                (this.words[i] = 67108863 & o);
            return (this.negative = 1), this._strip();
          }),
          (o.prototype._wordDiv = function (t, e) {
            var r,
              n = this.length - t.length,
              i = this.clone(),
              s = t,
              a = 0 | s.words[s.length - 1];
            0 != (n = 26 - this._countBits(a)) &&
              ((s = s.ushln(n)), i.iushln(n), (a = 0 | s.words[s.length - 1]));
            var u = i.length - s.length;
            if ("mod" !== e) {
              ((r = new o(null)).length = u + 1), (r.words = Array(r.length));
              for (var l = 0; l < r.length; l++) r.words[l] = 0;
            }
            var c = i.clone()._ishlnsubmul(s, 1, u);
            0 === c.negative && ((i = c), r && (r.words[u] = 1));
            for (var f = u - 1; f >= 0; f--) {
              var h =
                (0 | i.words[s.length + f]) * 67108864 +
                (0 | i.words[s.length + f - 1]);
              for (
                h = Math.min((h / a) | 0, 67108863), i._ishlnsubmul(s, h, f);
                0 !== i.negative;

              )
                h--,
                  (i.negative = 0),
                  i._ishlnsubmul(s, 1, f),
                  i.isZero() || (i.negative ^= 1);
              r && (r.words[f] = h);
            }
            return (
              r && r._strip(),
              i._strip(),
              "div" !== e && 0 !== n && i.iushrn(n),
              { div: r || null, mod: i }
            );
          }),
          (o.prototype.divmod = function (t, e, r) {
            var i, s, a;
            return (n(!t.isZero()), this.isZero())
              ? { div: new o(0), mod: new o(0) }
              : 0 !== this.negative && 0 === t.negative
              ? ((a = this.neg().divmod(t, e)),
                "mod" !== e && (i = a.div.neg()),
                "div" !== e &&
                  ((s = a.mod.neg()), r && 0 !== s.negative && s.iadd(t)),
                { div: i, mod: s })
              : 0 === this.negative && 0 !== t.negative
              ? ((a = this.divmod(t.neg(), e)),
                "mod" !== e && (i = a.div.neg()),
                { div: i, mod: a.mod })
              : (this.negative & t.negative) != 0
              ? ((a = this.neg().divmod(t.neg(), e)),
                "div" !== e &&
                  ((s = a.mod.neg()), r && 0 !== s.negative && s.isub(t)),
                { div: a.div, mod: s })
              : t.length > this.length || 0 > this.cmp(t)
              ? { div: new o(0), mod: this }
              : 1 === t.length
              ? "div" === e
                ? { div: this.divn(t.words[0]), mod: null }
                : "mod" === e
                ? { div: null, mod: new o(this.modrn(t.words[0])) }
                : {
                    div: this.divn(t.words[0]),
                    mod: new o(this.modrn(t.words[0])),
                  }
              : this._wordDiv(t, e);
          }),
          (o.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (o.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (o.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (o.prototype.divRound = function (t) {
            var e = this.divmod(t);
            if (e.mod.isZero()) return e.div;
            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              n = t.ushrn(1),
              i = t.andln(1),
              o = r.cmp(n);
            return o < 0 || (1 === i && 0 === o)
              ? e.div
              : 0 !== e.div.negative
              ? e.div.isubn(1)
              : e.div.iaddn(1);
          }),
          (o.prototype.modrn = function (t) {
            var e = t < 0;
            e && (t = -t), n(t <= 67108863);
            for (var r = 67108864 % t, i = 0, o = this.length - 1; o >= 0; o--)
              i = (r * i + (0 | this.words[o])) % t;
            return e ? -i : i;
          }),
          (o.prototype.modn = function (t) {
            return this.modrn(t);
          }),
          (o.prototype.idivn = function (t) {
            var e = t < 0;
            e && (t = -t), n(t <= 67108863);
            for (var r = 0, i = this.length - 1; i >= 0; i--) {
              var o = (0 | this.words[i]) + 67108864 * r;
              (this.words[i] = (o / t) | 0), (r = o % t);
            }
            return this._strip(), e ? this.ineg() : this;
          }),
          (o.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (o.prototype.egcd = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var i = new o(1), s = new o(0), a = new o(0), u = new o(1), l = 0;
              e.isEven() && r.isEven();

            )
              e.iushrn(1), r.iushrn(1), ++l;
            for (var c = r.clone(), f = e.clone(); !e.isZero(); ) {
              for (
                var h = 0, d = 1;
                (e.words[0] & d) == 0 && h < 26;
                ++h, d <<= 1
              );
              if (h > 0)
                for (e.iushrn(h); h-- > 0; )
                  (i.isOdd() || s.isOdd()) && (i.iadd(c), s.isub(f)),
                    i.iushrn(1),
                    s.iushrn(1);
              for (
                var p = 0, m = 1;
                (r.words[0] & m) == 0 && p < 26;
                ++p, m <<= 1
              );
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (a.isOdd() || u.isOdd()) && (a.iadd(c), u.isub(f)),
                    a.iushrn(1),
                    u.iushrn(1);
              e.cmp(r) >= 0
                ? (e.isub(r), i.isub(a), s.isub(u))
                : (r.isub(e), a.isub(i), u.isub(s));
            }
            return { a: a, b: u, gcd: r.iushln(l) };
          }),
          (o.prototype._invmp = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e,
              r = this,
              i = t.clone();
            r = 0 !== r.negative ? r.umod(t) : r.clone();
            for (
              var s = new o(1), a = new o(0), u = i.clone();
              r.cmpn(1) > 0 && i.cmpn(1) > 0;

            ) {
              for (
                var l = 0, c = 1;
                (r.words[0] & c) == 0 && l < 26;
                ++l, c <<= 1
              );
              if (l > 0)
                for (r.iushrn(l); l-- > 0; )
                  s.isOdd() && s.iadd(u), s.iushrn(1);
              for (
                var f = 0, h = 1;
                (i.words[0] & h) == 0 && f < 26;
                ++f, h <<= 1
              );
              if (f > 0)
                for (i.iushrn(f); f-- > 0; )
                  a.isOdd() && a.iadd(u), a.iushrn(1);
              r.cmp(i) >= 0 ? (r.isub(i), s.isub(a)) : (i.isub(r), a.isub(s));
            }
            return 0 > (e = 0 === r.cmpn(1) ? s : a).cmpn(0) && e.iadd(t), e;
          }),
          (o.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var e = this.clone(),
              r = t.clone();
            (e.negative = 0), (r.negative = 0);
            for (var n = 0; e.isEven() && r.isEven(); n++)
              e.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var i = e.cmp(r);
              if (i < 0) {
                var o = e;
                (e = r), (r = o);
              } else if (0 === i || 0 === r.cmpn(1)) break;
              e.isub(r);
            }
            return r.iushln(n);
          }),
          (o.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (o.prototype.isEven = function () {
            return (1 & this.words[0]) == 0;
          }),
          (o.prototype.isOdd = function () {
            return (1 & this.words[0]) == 1;
          }),
          (o.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (o.prototype.bincn = function (t) {
            n("number" == typeof t);
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e;
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= i), this;
            for (var o = i, s = r; 0 !== o && s < this.length; s++) {
              var a = 0 | this.words[s];
              (a += o), (o = a >>> 26), (a &= 67108863), (this.words[s] = a);
            }
            return 0 !== o && ((this.words[s] = o), this.length++), this;
          }),
          (o.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (o.prototype.cmpn = function (t) {
            var e,
              r = t < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if ((this._strip(), this.length > 1)) e = 1;
            else {
              r && (t = -t), n(t <= 67108863, "Number is too big");
              var i = 0 | this.words[0];
              e = i === t ? 0 : i < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var e = this.ucmp(t);
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var n = 0 | this.words[r],
                i = 0 | t.words[r];
              if (n !== i) {
                n < i ? (e = -1) : n > i && (e = 1);
                break;
              }
            }
            return e;
          }),
          (o.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (o.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (o.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (o.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (o.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (o.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (o.prototype.lten = function (t) {
            return 0 >= this.cmpn(t);
          }),
          (o.prototype.lte = function (t) {
            return 0 >= this.cmp(t);
          }),
          (o.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (o.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (o.red = function (t) {
            return new B(t);
          }),
          (o.prototype.toRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              n(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (o.prototype.fromRed = function () {
            return (
              n(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (o.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (o.prototype.forceRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              this._forceRed(t)
            );
          }),
          (o.prototype.redAdd = function (t) {
            return (
              n(this.red, "redAdd works only with red numbers"),
              this.red.add(this, t)
            );
          }),
          (o.prototype.redIAdd = function (t) {
            return (
              n(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, t)
            );
          }),
          (o.prototype.redSub = function (t) {
            return (
              n(this.red, "redSub works only with red numbers"),
              this.red.sub(this, t)
            );
          }),
          (o.prototype.redISub = function (t) {
            return (
              n(this.red, "redISub works only with red numbers"),
              this.red.isub(this, t)
            );
          }),
          (o.prototype.redShl = function (t) {
            return (
              n(this.red, "redShl works only with red numbers"),
              this.red.shl(this, t)
            );
          }),
          (o.prototype.redMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (o.prototype.redIMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (o.prototype.redSqr = function () {
            return (
              n(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (o.prototype.redISqr = function () {
            return (
              n(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (o.prototype.redSqrt = function () {
            return (
              n(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (o.prototype.redInvm = function () {
            return (
              n(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (o.prototype.redNeg = function () {
            return (
              n(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (o.prototype.redPow = function (t) {
            return (
              n(this.red && !t.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var v = { k256: null, p224: null, p192: null, p25519: null };
        function w(t, e) {
          (this.name = t),
            (this.p = new o(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function x() {
          w.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function E() {
          w.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function M() {
          w.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function P() {
          w.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function B(t) {
          if ("string" == typeof t) {
            var e = o._prime(t);
            (this.m = e.p), (this.prime = e);
          } else
            n(t.gtn(1), "modulus must be greater than 1"),
              (this.m = t),
              (this.prime = null);
        }
        function A(t) {
          B.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (w.prototype._tmp = function () {
          var t = new o(null);
          return (t.words = Array(Math.ceil(this.n / 13))), t;
        }),
          (w.prototype.ireduce = function (t) {
            var e,
              r = t;
            do
              this.split(r, this.tmp),
                (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            while (e > this.n);
            var n = e < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === n
                ? ((r.words[0] = 0), (r.length = 1))
                : n > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            );
          }),
          (w.prototype.split = function (t, e) {
            t.iushrn(this.n, 0, e);
          }),
          (w.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          i(x, w),
          (x.prototype.split = function (t, e) {
            for (var r = Math.min(t.length, 9), n = 0; n < r; n++)
              e.words[n] = t.words[n];
            if (((e.length = r), t.length <= 9)) {
              (t.words[0] = 0), (t.length = 1);
              return;
            }
            var i = t.words[9];
            for (n = 10, e.words[e.length++] = 4194303 & i; n < t.length; n++) {
              var o = 0 | t.words[n];
              (t.words[n - 10] = ((4194303 & o) << 4) | (i >>> 22)), (i = o);
            }
            (i >>>= 22),
              (t.words[n - 10] = i),
              0 === i && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (x.prototype.imulK = function (t) {
            (t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2);
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 0 | t.words[r];
              (e += 977 * n),
                (t.words[r] = 67108863 & e),
                (e = 64 * n + ((e / 67108864) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          i(E, w),
          i(M, w),
          i(P, w),
          (P.prototype.imulK = function (t) {
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = (0 | t.words[r]) * 19 + e,
                i = 67108863 & n;
              (n >>>= 26), (t.words[r] = i), (e = n);
            }
            return 0 !== e && (t.words[t.length++] = e), t;
          }),
          (o._prime = function (t) {
            var e;
            if (v[t]) return v[t];
            if ("k256" === t) e = new x();
            else if ("p224" === t) e = new E();
            else if ("p192" === t) e = new M();
            else if ("p25519" === t) e = new P();
            else throw Error("Unknown prime " + t);
            return (v[t] = e), e;
          }),
          (B.prototype._verify1 = function (t) {
            n(0 === t.negative, "red works only with positives"),
              n(t.red, "red works only with red numbers");
          }),
          (B.prototype._verify2 = function (t, e) {
            n((t.negative | e.negative) == 0, "red works only with positives"),
              n(t.red && t.red === e.red, "red works only with red numbers");
          }),
          (B.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : (l(t, t.umod(this.m)._forceRed(this)), t);
          }),
          (B.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (B.prototype.add = function (t, e) {
            this._verify2(t, e);
            var r = t.add(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (B.prototype.iadd = function (t, e) {
            this._verify2(t, e);
            var r = t.iadd(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (B.prototype.sub = function (t, e) {
            this._verify2(t, e);
            var r = t.sub(e);
            return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this);
          }),
          (B.prototype.isub = function (t, e) {
            this._verify2(t, e);
            var r = t.isub(e);
            return 0 > r.cmpn(0) && r.iadd(this.m), r;
          }),
          (B.prototype.shl = function (t, e) {
            return this._verify1(t), this.imod(t.ushln(e));
          }),
          (B.prototype.imul = function (t, e) {
            return this._verify2(t, e), this.imod(t.imul(e));
          }),
          (B.prototype.mul = function (t, e) {
            return this._verify2(t, e), this.imod(t.mul(e));
          }),
          (B.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (B.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (B.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var e = this.m.andln(3);
            if ((n(e % 2 == 1), 3 === e)) {
              var r = this.m.add(new o(1)).iushrn(2);
              return this.pow(t, r);
            }
            for (
              var i = this.m.subn(1), s = 0;
              !i.isZero() && 0 === i.andln(1);

            )
              s++, i.iushrn(1);
            n(!i.isZero());
            var a = new o(1).toRed(this),
              u = a.redNeg(),
              l = this.m.subn(1).iushrn(1),
              c = this.m.bitLength();
            for (
              c = new o(2 * c * c).toRed(this);
              0 !== this.pow(c, l).cmp(u);

            )
              c.redIAdd(u);
            for (
              var f = this.pow(c, i),
                h = this.pow(t, i.addn(1).iushrn(1)),
                d = this.pow(t, i),
                p = s;
              0 !== d.cmp(a);

            ) {
              for (var m = d, g = 0; 0 !== m.cmp(a); g++) m = m.redSqr();
              n(g < p);
              var y = this.pow(f, new o(1).iushln(p - g - 1));
              (h = h.redMul(y)), (f = y.redSqr()), (d = d.redMul(f)), (p = g);
            }
            return h;
          }),
          (B.prototype.invm = function (t) {
            var e = t._invmp(this.m);
            return 0 !== e.negative
              ? ((e.negative = 0), this.imod(e).redNeg())
              : this.imod(e);
          }),
          (B.prototype.pow = function (t, e) {
            if (e.isZero()) return new o(1).toRed(this);
            if (0 === e.cmpn(1)) return t.clone();
            var r = Array(16);
            (r[0] = new o(1).toRed(this)), (r[1] = t);
            for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
            var i = r[0],
              s = 0,
              a = 0,
              u = e.bitLength() % 26;
            for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
              for (var l = e.words[n], c = u - 1; c >= 0; c--) {
                var f = (l >> c) & 1;
                if ((i !== r[0] && (i = this.sqr(i)), 0 === f && 0 === s)) {
                  a = 0;
                  continue;
                }
                (s <<= 1),
                  (s |= f),
                  (4 == ++a || (0 === n && 0 === c)) &&
                    ((i = this.mul(i, r[s])), (a = 0), (s = 0));
              }
              u = 26;
            }
            return i;
          }),
          (B.prototype.convertTo = function (t) {
            var e = t.umod(this.m);
            return e === t ? e.clone() : e;
          }),
          (B.prototype.convertFrom = function (t) {
            var e = t.clone();
            return (e.red = null), e;
          }),
          (o.mont = function (t) {
            return new A(t);
          }),
          i(A, B),
          (A.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (A.prototype.convertFrom = function (t) {
            var e = this.imod(t.mul(this.rinv));
            return (e.red = null), e;
          }),
          (A.prototype.imul = function (t, e) {
            if (t.isZero() || e.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var r = t.imul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              o = i;
            return (
              i.cmp(this.m) >= 0
                ? (o = i.isub(this.m))
                : 0 > i.cmpn(0) && (o = i.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (A.prototype.mul = function (t, e) {
            if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
            var r = t.mul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              s = i;
            return (
              i.cmp(this.m) >= 0
                ? (s = i.isub(this.m))
                : 0 > i.cmpn(0) && (s = i.iadd(this.m)),
              s._forceRed(this)
            );
          }),
          (A.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((t = r.nmd(t)), this);
    },
    5810: function (t, e, r) {
      "use strict";
      var n = r(9109).Buffer,
        i =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: function () {
                      return e[r];
                    },
                  });
              }
            : function (t, e, r, n) {
                void 0 === n && (n = r), (t[n] = e[r]);
              }),
        o =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, e) {
                Object.defineProperty(t, "default", {
                  enumerable: !0,
                  value: e,
                });
              }
            : function (t, e) {
                t.default = e;
              }),
        s =
          (this && this.__decorate) ||
          function (t, e, r, n) {
            var i,
              o = arguments.length,
              s =
                o < 3
                  ? e
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(e, r))
                  : n;
            if (
              "object" == typeof Reflect &&
              "function" == typeof Reflect.decorate
            )
              s = Reflect.decorate(t, e, r, n);
            else
              for (var a = t.length - 1; a >= 0; a--)
                (i = t[a]) &&
                  (s = (o < 3 ? i(s) : o > 3 ? i(e, r, s) : i(e, r)) || s);
            return o > 3 && s && Object.defineProperty(e, r, s), s;
          },
        a =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var r in t)
                "default" !== r &&
                  Object.hasOwnProperty.call(t, r) &&
                  i(e, t, r);
            return o(e, t), e;
          },
        u =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.deserializeUnchecked =
          e.deserialize =
          e.serialize =
          e.BinaryReader =
          e.BinaryWriter =
          e.BorshError =
          e.baseDecode =
          e.baseEncode =
            void 0);
      let l = u(r(58171)),
        c = u(r(75824)),
        f = a(r(57139)),
        h = new (
          "function" != typeof TextDecoder ? f.TextDecoder : TextDecoder
        )("utf-8", { fatal: !0 });
      (e.baseEncode = function (t) {
        return (
          "string" == typeof t && (t = n.from(t, "utf8")),
          c.default.encode(n.from(t))
        );
      }),
        (e.baseDecode = function (t) {
          return n.from(c.default.decode(t));
        });
      class d extends Error {
        constructor(t) {
          super(t), (this.fieldPath = []), (this.originalMessage = t);
        }
        addToFieldPath(t) {
          this.fieldPath.splice(0, 0, t),
            (this.message =
              this.originalMessage + ": " + this.fieldPath.join("."));
        }
      }
      e.BorshError = d;
      class p {
        constructor() {
          (this.buf = n.alloc(1024)), (this.length = 0);
        }
        maybeResize() {
          this.buf.length < 16 + this.length &&
            (this.buf = n.concat([this.buf, n.alloc(1024)]));
        }
        writeU8(t) {
          this.maybeResize(),
            this.buf.writeUInt8(t, this.length),
            (this.length += 1);
        }
        writeU16(t) {
          this.maybeResize(),
            this.buf.writeUInt16LE(t, this.length),
            (this.length += 2);
        }
        writeU32(t) {
          this.maybeResize(),
            this.buf.writeUInt32LE(t, this.length),
            (this.length += 4);
        }
        writeU64(t) {
          this.maybeResize(),
            this.writeBuffer(n.from(new l.default(t).toArray("le", 8)));
        }
        writeU128(t) {
          this.maybeResize(),
            this.writeBuffer(n.from(new l.default(t).toArray("le", 16)));
        }
        writeU256(t) {
          this.maybeResize(),
            this.writeBuffer(n.from(new l.default(t).toArray("le", 32)));
        }
        writeU512(t) {
          this.maybeResize(),
            this.writeBuffer(n.from(new l.default(t).toArray("le", 64)));
        }
        writeBuffer(t) {
          (this.buf = n.concat([
            n.from(this.buf.subarray(0, this.length)),
            t,
            n.alloc(1024),
          ])),
            (this.length += t.length);
        }
        writeString(t) {
          this.maybeResize();
          let e = n.from(t, "utf8");
          this.writeU32(e.length), this.writeBuffer(e);
        }
        writeFixedArray(t) {
          this.writeBuffer(n.from(t));
        }
        writeArray(t, e) {
          for (let r of (this.maybeResize(), this.writeU32(t.length), t))
            this.maybeResize(), e(r);
        }
        toArray() {
          return this.buf.subarray(0, this.length);
        }
      }
      function m(t, e, r) {
        let n = r.value;
        r.value = function (...t) {
          try {
            return n.apply(this, t);
          } catch (t) {
            if (
              t instanceof RangeError &&
              ["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(
                t.code
              ) >= 0
            )
              throw new d("Reached the end of buffer when deserializing");
            throw t;
          }
        };
      }
      e.BinaryWriter = p;
      class g {
        constructor(t) {
          (this.buf = t), (this.offset = 0);
        }
        readU8() {
          let t = this.buf.readUInt8(this.offset);
          return (this.offset += 1), t;
        }
        readU16() {
          let t = this.buf.readUInt16LE(this.offset);
          return (this.offset += 2), t;
        }
        readU32() {
          let t = this.buf.readUInt32LE(this.offset);
          return (this.offset += 4), t;
        }
        readU64() {
          let t = this.readBuffer(8);
          return new l.default(t, "le");
        }
        readU128() {
          let t = this.readBuffer(16);
          return new l.default(t, "le");
        }
        readU256() {
          let t = this.readBuffer(32);
          return new l.default(t, "le");
        }
        readU512() {
          let t = this.readBuffer(64);
          return new l.default(t, "le");
        }
        readBuffer(t) {
          if (this.offset + t > this.buf.length)
            throw new d(`Expected buffer length ${t} isn't within bounds`);
          let e = this.buf.slice(this.offset, this.offset + t);
          return (this.offset += t), e;
        }
        readString() {
          let t = this.readU32(),
            e = this.readBuffer(t);
          try {
            return h.decode(e);
          } catch (t) {
            throw new d(`Error decoding UTF-8 string: ${t}`);
          }
        }
        readFixedArray(t) {
          return new Uint8Array(this.readBuffer(t));
        }
        readArray(t) {
          let e = this.readU32(),
            r = [];
          for (let n = 0; n < e; ++n) r.push(t());
          return r;
        }
      }
      function y(t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
      }
      function b(t, e, r, n, i) {
        try {
          if ("string" == typeof n) i[`write${y(n)}`](r);
          else if (n instanceof Array) {
            if ("number" == typeof n[0]) {
              if (r.length !== n[0])
                throw new d(
                  `Expecting byte array of length ${n[0]}, but got ${r.length} bytes`
                );
              i.writeFixedArray(r);
            } else if (2 === n.length && "number" == typeof n[1]) {
              if (r.length !== n[1])
                throw new d(
                  `Expecting byte array of length ${n[1]}, but got ${r.length} bytes`
                );
              for (let e = 0; e < n[1]; e++) b(t, null, r[e], n[0], i);
            } else
              i.writeArray(r, (r) => {
                b(t, e, r, n[0], i);
              });
          } else if (void 0 !== n.kind)
            switch (n.kind) {
              case "option":
                null == r
                  ? i.writeU8(0)
                  : (i.writeU8(1), b(t, e, r, n.type, i));
                break;
              case "map":
                i.writeU32(r.size),
                  r.forEach((r, o) => {
                    b(t, e, o, n.key, i), b(t, e, r, n.value, i);
                  });
                break;
              default:
                throw new d(`FieldType ${n} unrecognized`);
            }
          else v(t, r, i);
        } catch (t) {
          throw (t instanceof d && t.addToFieldPath(e), t);
        }
      }
      function v(t, e, r) {
        if ("function" == typeof e.borshSerialize) {
          e.borshSerialize(r);
          return;
        }
        let n = t.get(e.constructor);
        if (!n) throw new d(`Class ${e.constructor.name} is missing in schema`);
        if ("struct" === n.kind)
          n.fields.map(([n, i]) => {
            b(t, n, e[n], i, r);
          });
        else if ("enum" === n.kind) {
          let i = e[n.field];
          for (let o = 0; o < n.values.length; ++o) {
            let [s, a] = n.values[o];
            if (s === i) {
              r.writeU8(o), b(t, s, e[s], a, r);
              break;
            }
          }
        } else
          throw new d(
            `Unexpected schema kind: ${n.kind} for ${e.constructor.name}`
          );
      }
      function w(t, e, r, n) {
        try {
          if ("string" == typeof r) return n[`read${y(r)}`]();
          if (r instanceof Array) {
            if ("number" == typeof r[0]) return n.readFixedArray(r[0]);
            if ("number" != typeof r[1])
              return n.readArray(() => w(t, e, r[0], n));
            {
              let e = [];
              for (let i = 0; i < r[1]; i++) e.push(w(t, null, r[0], n));
              return e;
            }
          }
          if ("option" === r.kind) {
            if (n.readU8()) return w(t, e, r.type, n);
            return;
          }
          if ("map" === r.kind) {
            let i = new Map(),
              o = n.readU32();
            for (let s = 0; s < o; s++) {
              let o = w(t, e, r.key, n),
                s = w(t, e, r.value, n);
              i.set(o, s);
            }
            return i;
          }
          return x(t, r, n);
        } catch (t) {
          throw (t instanceof d && t.addToFieldPath(e), t);
        }
      }
      function x(t, e, r) {
        if ("function" == typeof e.borshDeserialize)
          return e.borshDeserialize(r);
        let n = t.get(e);
        if (!n) throw new d(`Class ${e.name} is missing in schema`);
        if ("struct" === n.kind) {
          let n = {};
          for (let [i, o] of t.get(e).fields) n[i] = w(t, i, o, r);
          return new e(n);
        }
        if ("enum" === n.kind) {
          let i = r.readU8();
          if (i >= n.values.length)
            throw new d(`Enum index: ${i} is out of range`);
          let [o, s] = n.values[i],
            a = w(t, o, s, r);
          return new e({ [o]: a });
        }
        throw new d(
          `Unexpected schema kind: ${n.kind} for ${e.constructor.name}`
        );
      }
      s([m], g.prototype, "readU8", null),
        s([m], g.prototype, "readU16", null),
        s([m], g.prototype, "readU32", null),
        s([m], g.prototype, "readU64", null),
        s([m], g.prototype, "readU128", null),
        s([m], g.prototype, "readU256", null),
        s([m], g.prototype, "readU512", null),
        s([m], g.prototype, "readString", null),
        s([m], g.prototype, "readFixedArray", null),
        s([m], g.prototype, "readArray", null),
        (e.BinaryReader = g),
        (e.serialize = function (t, e, r = p) {
          let n = new r();
          return v(t, e, n), n.toArray();
        }),
        (e.deserialize = function (t, e, r, n = g) {
          let i = new n(r),
            o = x(t, e, i);
          if (i.offset < r.length)
            throw new d(
              `Unexpected ${r.length - i.offset} bytes after deserialized data`
            );
          return o;
        }),
        (e.deserializeUnchecked = function (t, e, r, n = g) {
          return x(t, e, new n(r));
        });
    },
    9500: function (t, e, r) {
      "use strict";
      var n = r(10632).Buffer;
      t.exports = function (t) {
        if (t.length >= 255) throw TypeError("Alphabet too long");
        for (var e = new Uint8Array(256), r = 0; r < e.length; r++) e[r] = 255;
        for (var i = 0; i < t.length; i++) {
          var o = t.charAt(i),
            s = o.charCodeAt(0);
          if (255 !== e[s]) throw TypeError(o + " is ambiguous");
          e[s] = i;
        }
        var a = t.length,
          u = t.charAt(0),
          l = Math.log(a) / Math.log(256),
          c = Math.log(256) / Math.log(a);
        function f(t) {
          if ("string" != typeof t) throw TypeError("Expected String");
          if (0 === t.length) return n.alloc(0);
          for (var r = 0, i = 0, o = 0; t[r] === u; ) i++, r++;
          for (
            var s = ((t.length - r) * l + 1) >>> 0, c = new Uint8Array(s);
            r < t.length;

          ) {
            var f = e[t.charCodeAt(r)];
            if (255 === f) return;
            for (var h = 0, d = s - 1; (0 !== f || h < o) && -1 !== d; d--, h++)
              (f += (a * c[d]) >>> 0),
                (c[d] = f % 256 >>> 0),
                (f = (f / 256) >>> 0);
            if (0 !== f) throw Error("Non-zero carry");
            (o = h), r++;
          }
          for (var p = s - o; p !== s && 0 === c[p]; ) p++;
          var m = n.allocUnsafe(i + (s - p));
          m.fill(0, 0, i);
          for (var g = i; p !== s; ) m[g++] = c[p++];
          return m;
        }
        return {
          encode: function (e) {
            if (
              ((Array.isArray(e) || e instanceof Uint8Array) && (e = n.from(e)),
              !n.isBuffer(e))
            )
              throw TypeError("Expected Buffer");
            if (0 === e.length) return "";
            for (var r = 0, i = 0, o = 0, s = e.length; o !== s && 0 === e[o]; )
              o++, r++;
            for (
              var l = ((s - o) * c + 1) >>> 0, f = new Uint8Array(l);
              o !== s;

            ) {
              for (
                var h = e[o], d = 0, p = l - 1;
                (0 !== h || d < i) && -1 !== p;
                p--, d++
              )
                (h += (256 * f[p]) >>> 0),
                  (f[p] = h % a >>> 0),
                  (h = (h / a) >>> 0);
              if (0 !== h) throw Error("Non-zero carry");
              (i = d), o++;
            }
            for (var m = l - i; m !== l && 0 === f[m]; ) m++;
            for (var g = u.repeat(r); m < l; ++m) g += t.charAt(f[m]);
            return g;
          },
          decodeUnsafe: f,
          decode: function (t) {
            var e = f(t);
            if (e) return e;
            throw Error("Non-base" + a + " character");
          },
        };
      };
    },
    75824: function (t, e, r) {
      var n = r(9500);
      t.exports = n(
        "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
      );
    },
    9109: function (t, e, r) {
      "use strict";
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */ let n = r(48738),
        i = r(6868),
        o =
          "function" == typeof Symbol && "function" == typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      function s(t) {
        if (t > 2147483647)
          throw RangeError(
            'The value "' + t + '" is invalid for option "size"'
          );
        let e = new Uint8Array(t);
        return Object.setPrototypeOf(e, a.prototype), e;
      }
      function a(t, e, r) {
        if ("number" == typeof t) {
          if ("string" == typeof e)
            throw TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          return c(t);
        }
        return u(t, e, r);
      }
      function u(t, e, r) {
        if ("string" == typeof t)
          return (function (t, e) {
            if (
              (("string" != typeof e || "" === e) && (e = "utf8"),
              !a.isEncoding(e))
            )
              throw TypeError("Unknown encoding: " + e);
            let r = 0 | p(t, e),
              n = s(r),
              i = n.write(t, e);
            return i !== r && (n = n.slice(0, i)), n;
          })(t, e);
        if (ArrayBuffer.isView(t))
          return (function (t) {
            if (L(t, Uint8Array)) {
              let e = new Uint8Array(t);
              return h(e.buffer, e.byteOffset, e.byteLength);
            }
            return f(t);
          })(t);
        if (null == t)
          throw TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof t
          );
        if (
          L(t, ArrayBuffer) ||
          (t && L(t.buffer, ArrayBuffer)) ||
          ("undefined" != typeof SharedArrayBuffer &&
            (L(t, SharedArrayBuffer) || (t && L(t.buffer, SharedArrayBuffer))))
        )
          return h(t, e, r);
        if ("number" == typeof t)
          throw TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        let n = t.valueOf && t.valueOf();
        if (null != n && n !== t) return a.from(n, e, r);
        let i = (function (t) {
          var e;
          if (a.isBuffer(t)) {
            let e = 0 | d(t.length),
              r = s(e);
            return 0 === r.length || t.copy(r, 0, 0, e), r;
          }
          return void 0 !== t.length
            ? "number" != typeof t.length || (e = t.length) != e
              ? s(0)
              : f(t)
            : "Buffer" === t.type && Array.isArray(t.data)
            ? f(t.data)
            : void 0;
        })(t);
        if (i) return i;
        if (
          "undefined" != typeof Symbol &&
          null != Symbol.toPrimitive &&
          "function" == typeof t[Symbol.toPrimitive]
        )
          return a.from(t[Symbol.toPrimitive]("string"), e, r);
        throw TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof t
        );
      }
      function l(t) {
        if ("number" != typeof t)
          throw TypeError('"size" argument must be of type number');
        if (t < 0)
          throw RangeError(
            'The value "' + t + '" is invalid for option "size"'
          );
      }
      function c(t) {
        return l(t), s(t < 0 ? 0 : 0 | d(t));
      }
      function f(t) {
        let e = t.length < 0 ? 0 : 0 | d(t.length),
          r = s(e);
        for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
        return r;
      }
      function h(t, e, r) {
        let n;
        if (e < 0 || t.byteLength < e)
          throw RangeError('"offset" is outside of buffer bounds');
        if (t.byteLength < e + (r || 0))
          throw RangeError('"length" is outside of buffer bounds');
        return (
          Object.setPrototypeOf(
            (n =
              void 0 === e && void 0 === r
                ? new Uint8Array(t)
                : void 0 === r
                ? new Uint8Array(t, e)
                : new Uint8Array(t, e, r)),
            a.prototype
          ),
          n
        );
      }
      function d(t) {
        if (t >= 2147483647)
          throw RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
          );
        return 0 | t;
      }
      function p(t, e) {
        if (a.isBuffer(t)) return t.length;
        if (ArrayBuffer.isView(t) || L(t, ArrayBuffer)) return t.byteLength;
        if ("string" != typeof t)
          throw TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof t
          );
        let r = t.length,
          n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === r) return 0;
        let i = !1;
        for (;;)
          switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
              return R(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return U(t).length;
            default:
              if (i) return n ? -1 : R(t).length;
              (e = ("" + e).toLowerCase()), (i = !0);
          }
      }
      function m(t, e, r) {
        let i = !1;
        if (
          ((void 0 === e || e < 0) && (e = 0),
          e > this.length ||
            ((void 0 === r || r > this.length) && (r = this.length),
            r <= 0 || (r >>>= 0) <= (e >>>= 0)))
        )
          return "";
        for (t || (t = "utf8"); ; )
          switch (t) {
            case "hex":
              return (function (t, e, r) {
                let n = t.length;
                (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                let i = "";
                for (let n = e; n < r; ++n) i += F[t[n]];
                return i;
              })(this, e, r);
            case "utf8":
            case "utf-8":
              return v(this, e, r);
            case "ascii":
              return (function (t, e, r) {
                let n = "";
                r = Math.min(t.length, r);
                for (let i = e; i < r; ++i)
                  n += String.fromCharCode(127 & t[i]);
                return n;
              })(this, e, r);
            case "latin1":
            case "binary":
              return (function (t, e, r) {
                let n = "";
                r = Math.min(t.length, r);
                for (let i = e; i < r; ++i) n += String.fromCharCode(t[i]);
                return n;
              })(this, e, r);
            case "base64":
              var o, s;
              return (
                (o = e),
                (s = r),
                0 === o && s === this.length
                  ? n.fromByteArray(this)
                  : n.fromByteArray(this.slice(o, s))
              );
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return (function (t, e, r) {
                let n = t.slice(e, r),
                  i = "";
                for (let t = 0; t < n.length - 1; t += 2)
                  i += String.fromCharCode(n[t] + 256 * n[t + 1]);
                return i;
              })(this, e, r);
            default:
              if (i) throw TypeError("Unknown encoding: " + t);
              (t = (t + "").toLowerCase()), (i = !0);
          }
      }
      function g(t, e, r) {
        let n = t[e];
        (t[e] = t[r]), (t[r] = n);
      }
      function y(t, e, r, n, i) {
        var o;
        if (0 === t.length) return -1;
        if (
          ("string" == typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          (o = r = +r) != o && (r = i ? 0 : t.length - 1),
          r < 0 && (r = t.length + r),
          r >= t.length)
        ) {
          if (i) return -1;
          r = t.length - 1;
        } else if (r < 0) {
          if (!i) return -1;
          r = 0;
        }
        if (("string" == typeof e && (e = a.from(e, n)), a.isBuffer(e)))
          return 0 === e.length ? -1 : b(t, e, r, n, i);
        if ("number" == typeof e)
          return ((e &= 255), "function" == typeof Uint8Array.prototype.indexOf)
            ? i
              ? Uint8Array.prototype.indexOf.call(t, e, r)
              : Uint8Array.prototype.lastIndexOf.call(t, e, r)
            : b(t, [e], r, n, i);
        throw TypeError("val must be string, number or Buffer");
      }
      function b(t, e, r, n, i) {
        let o,
          s = 1,
          a = t.length,
          u = e.length;
        if (
          void 0 !== n &&
          ("ucs2" === (n = String(n).toLowerCase()) ||
            "ucs-2" === n ||
            "utf16le" === n ||
            "utf-16le" === n)
        ) {
          if (t.length < 2 || e.length < 2) return -1;
          (s = 2), (a /= 2), (u /= 2), (r /= 2);
        }
        function l(t, e) {
          return 1 === s ? t[e] : t.readUInt16BE(e * s);
        }
        if (i) {
          let n = -1;
          for (o = r; o < a; o++)
            if (l(t, o) === l(e, -1 === n ? 0 : o - n)) {
              if ((-1 === n && (n = o), o - n + 1 === u)) return n * s;
            } else -1 !== n && (o -= o - n), (n = -1);
        } else
          for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
            let r = !0;
            for (let n = 0; n < u; n++)
              if (l(t, o + n) !== l(e, n)) {
                r = !1;
                break;
              }
            if (r) return o;
          }
        return -1;
      }
      function v(t, e, r) {
        r = Math.min(t.length, r);
        let n = [],
          i = e;
        for (; i < r; ) {
          let e = t[i],
            o = null,
            s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
          if (i + s <= r) {
            let r, n, a, u;
            switch (s) {
              case 1:
                e < 128 && (o = e);
                break;
              case 2:
                (192 & (r = t[i + 1])) == 128 &&
                  (u = ((31 & e) << 6) | (63 & r)) > 127 &&
                  (o = u);
                break;
              case 3:
                (r = t[i + 1]),
                  (n = t[i + 2]),
                  (192 & r) == 128 &&
                    (192 & n) == 128 &&
                    (u = ((15 & e) << 12) | ((63 & r) << 6) | (63 & n)) >
                      2047 &&
                    (u < 55296 || u > 57343) &&
                    (o = u);
                break;
              case 4:
                (r = t[i + 1]),
                  (n = t[i + 2]),
                  (a = t[i + 3]),
                  (192 & r) == 128 &&
                    (192 & n) == 128 &&
                    (192 & a) == 128 &&
                    (u =
                      ((15 & e) << 18) |
                      ((63 & r) << 12) |
                      ((63 & n) << 6) |
                      (63 & a)) > 65535 &&
                    u < 1114112 &&
                    (o = u);
            }
          }
          null === o
            ? ((o = 65533), (s = 1))
            : o > 65535 &&
              ((o -= 65536),
              n.push(((o >>> 10) & 1023) | 55296),
              (o = 56320 | (1023 & o))),
            n.push(o),
            (i += s);
        }
        return (function (t) {
          let e = t.length;
          if (e <= 4096) return String.fromCharCode.apply(String, t);
          let r = "",
            n = 0;
          for (; n < e; )
            r += String.fromCharCode.apply(String, t.slice(n, (n += 4096)));
          return r;
        })(n);
      }
      function w(t, e, r) {
        if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
        if (t + e > r)
          throw RangeError("Trying to access beyond buffer length");
      }
      function x(t, e, r, n, i, o) {
        if (!a.isBuffer(t))
          throw TypeError('"buffer" argument must be a Buffer instance');
        if (e > i || e < o)
          throw RangeError('"value" argument is out of bounds');
        if (r + n > t.length) throw RangeError("Index out of range");
      }
      function E(t, e, r, n, i) {
        O(e, n, i, t, r, 7);
        let o = Number(e & BigInt(4294967295));
        (t[r++] = o),
          (o >>= 8),
          (t[r++] = o),
          (o >>= 8),
          (t[r++] = o),
          (o >>= 8),
          (t[r++] = o);
        let s = Number((e >> BigInt(32)) & BigInt(4294967295));
        return (
          (t[r++] = s),
          (s >>= 8),
          (t[r++] = s),
          (s >>= 8),
          (t[r++] = s),
          (s >>= 8),
          (t[r++] = s),
          r
        );
      }
      function M(t, e, r, n, i) {
        O(e, n, i, t, r, 7);
        let o = Number(e & BigInt(4294967295));
        (t[r + 7] = o),
          (o >>= 8),
          (t[r + 6] = o),
          (o >>= 8),
          (t[r + 5] = o),
          (o >>= 8),
          (t[r + 4] = o);
        let s = Number((e >> BigInt(32)) & BigInt(4294967295));
        return (
          (t[r + 3] = s),
          (s >>= 8),
          (t[r + 2] = s),
          (s >>= 8),
          (t[r + 1] = s),
          (s >>= 8),
          (t[r] = s),
          r + 8
        );
      }
      function P(t, e, r, n, i, o) {
        if (r + n > t.length || r < 0) throw RangeError("Index out of range");
      }
      function B(t, e, r, n, o) {
        return (
          (e = +e),
          (r >>>= 0),
          o || P(t, e, r, 4, 34028234663852886e22, -34028234663852886e22),
          i.write(t, e, r, n, 23, 4),
          r + 4
        );
      }
      function A(t, e, r, n, o) {
        return (
          (e = +e),
          (r >>>= 0),
          o || P(t, e, r, 8, 17976931348623157e292, -17976931348623157e292),
          i.write(t, e, r, n, 52, 8),
          r + 8
        );
      }
      (e.Buffer = a),
        (e.SlowBuffer = function (t) {
          return +t != t && (t = 0), a.alloc(+t);
        }),
        (e.INSPECT_MAX_BYTES = 50),
        (e.kMaxLength = 2147483647),
        (a.TYPED_ARRAY_SUPPORT = (function () {
          try {
            let t = new Uint8Array(1),
              e = {
                foo: function () {
                  return 42;
                },
              };
            return (
              Object.setPrototypeOf(e, Uint8Array.prototype),
              Object.setPrototypeOf(t, e),
              42 === t.foo()
            );
          } catch (t) {
            return !1;
          }
        })()),
        a.TYPED_ARRAY_SUPPORT ||
          "undefined" == typeof console ||
          "function" != typeof console.error ||
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
          ),
        Object.defineProperty(a.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (a.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(a.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (a.isBuffer(this)) return this.byteOffset;
          },
        }),
        (a.poolSize = 8192),
        (a.from = function (t, e, r) {
          return u(t, e, r);
        }),
        Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(a, Uint8Array),
        (a.alloc = function (t, e, r) {
          return (l(t), t <= 0)
            ? s(t)
            : void 0 !== e
            ? "string" == typeof r
              ? s(t).fill(e, r)
              : s(t).fill(e)
            : s(t);
        }),
        (a.allocUnsafe = function (t) {
          return c(t);
        }),
        (a.allocUnsafeSlow = function (t) {
          return c(t);
        }),
        (a.isBuffer = function (t) {
          return null != t && !0 === t._isBuffer && t !== a.prototype;
        }),
        (a.compare = function (t, e) {
          if (
            (L(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
            L(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
            !a.isBuffer(t) || !a.isBuffer(e))
          )
            throw TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
          if (t === e) return 0;
          let r = t.length,
            n = e.length;
          for (let i = 0, o = Math.min(r, n); i < o; ++i)
            if (t[i] !== e[i]) {
              (r = t[i]), (n = e[i]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (a.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (a.concat = function (t, e) {
          let r;
          if (!Array.isArray(t))
            throw TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return a.alloc(0);
          if (void 0 === e)
            for (r = 0, e = 0; r < t.length; ++r) e += t[r].length;
          let n = a.allocUnsafe(e),
            i = 0;
          for (r = 0; r < t.length; ++r) {
            let e = t[r];
            if (L(e, Uint8Array))
              i + e.length > n.length
                ? (a.isBuffer(e) || (e = a.from(e)), e.copy(n, i))
                : Uint8Array.prototype.set.call(n, e, i);
            else if (a.isBuffer(e)) e.copy(n, i);
            else throw TypeError('"list" argument must be an Array of Buffers');
            i += e.length;
          }
          return n;
        }),
        (a.byteLength = p),
        (a.prototype._isBuffer = !0),
        (a.prototype.swap16 = function () {
          let t = this.length;
          if (t % 2 != 0)
            throw RangeError("Buffer size must be a multiple of 16-bits");
          for (let e = 0; e < t; e += 2) g(this, e, e + 1);
          return this;
        }),
        (a.prototype.swap32 = function () {
          let t = this.length;
          if (t % 4 != 0)
            throw RangeError("Buffer size must be a multiple of 32-bits");
          for (let e = 0; e < t; e += 4)
            g(this, e, e + 3), g(this, e + 1, e + 2);
          return this;
        }),
        (a.prototype.swap64 = function () {
          let t = this.length;
          if (t % 8 != 0)
            throw RangeError("Buffer size must be a multiple of 64-bits");
          for (let e = 0; e < t; e += 8)
            g(this, e, e + 7),
              g(this, e + 1, e + 6),
              g(this, e + 2, e + 5),
              g(this, e + 3, e + 4);
          return this;
        }),
        (a.prototype.toString = function () {
          let t = this.length;
          return 0 === t
            ? ""
            : 0 == arguments.length
            ? v(this, 0, t)
            : m.apply(this, arguments);
        }),
        (a.prototype.toLocaleString = a.prototype.toString),
        (a.prototype.equals = function (t) {
          if (!a.isBuffer(t)) throw TypeError("Argument must be a Buffer");
          return this === t || 0 === a.compare(this, t);
        }),
        (a.prototype.inspect = function () {
          let t = "",
            r = e.INSPECT_MAX_BYTES;
          return (
            (t = this.toString("hex", 0, r)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > r && (t += " ... "),
            "<Buffer " + t + ">"
          );
        }),
        o && (a.prototype[o] = a.prototype.inspect),
        (a.prototype.compare = function (t, e, r, n, i) {
          if (
            (L(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
            !a.isBuffer(t))
          )
            throw TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof t
            );
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            e < 0 || r > t.length || n < 0 || i > this.length)
          )
            throw RangeError("out of range index");
          if (n >= i && e >= r) return 0;
          if (n >= i) return -1;
          if (e >= r) return 1;
          if (((e >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === t))
            return 0;
          let o = i - n,
            s = r - e,
            u = Math.min(o, s),
            l = this.slice(n, i),
            c = t.slice(e, r);
          for (let t = 0; t < u; ++t)
            if (l[t] !== c[t]) {
              (o = l[t]), (s = c[t]);
              break;
            }
          return o < s ? -1 : s < o ? 1 : 0;
        }),
        (a.prototype.includes = function (t, e, r) {
          return -1 !== this.indexOf(t, e, r);
        }),
        (a.prototype.indexOf = function (t, e, r) {
          return y(this, t, e, r, !0);
        }),
        (a.prototype.lastIndexOf = function (t, e, r) {
          return y(this, t, e, r, !1);
        }),
        (a.prototype.write = function (t, e, r, n) {
          var i, o, s, a, u, l, c, f;
          if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
          else if (void 0 === r && "string" == typeof e)
            (n = e), (r = this.length), (e = 0);
          else if (isFinite(e))
            (e >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                : ((n = r), (r = void 0));
          else
            throw Error(
              "Buffer.write(string, encoding, offset[, length]) is no longer supported"
            );
          let h = this.length - e;
          if (
            ((void 0 === r || r > h) && (r = h),
            (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
          )
            throw RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");
          let d = !1;
          for (;;)
            switch (n) {
              case "hex":
                return (function (t, e, r, n) {
                  let i;
                  r = Number(r) || 0;
                  let o = t.length - r;
                  n ? (n = Number(n)) > o && (n = o) : (n = o);
                  let s = e.length;
                  for (n > s / 2 && (n = s / 2), i = 0; i < n; ++i) {
                    let n = parseInt(e.substr(2 * i, 2), 16);
                    if (n != n) break;
                    t[r + i] = n;
                  }
                  return i;
                })(this, t, e, r);
              case "utf8":
              case "utf-8":
                return (i = e), (o = r), T(R(t, this.length - i), this, i, o);
              case "ascii":
              case "latin1":
              case "binary":
                return (
                  (s = e),
                  (a = r),
                  T(
                    (function (t) {
                      let e = [];
                      for (let r = 0; r < t.length; ++r)
                        e.push(255 & t.charCodeAt(r));
                      return e;
                    })(t),
                    this,
                    s,
                    a
                  )
                );
              case "base64":
                return (u = e), (l = r), T(U(t), this, u, l);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return (
                  (c = e),
                  (f = r),
                  T(
                    (function (t, e) {
                      let r, n;
                      let i = [];
                      for (let o = 0; o < t.length && !((e -= 2) < 0); ++o)
                        (n = (r = t.charCodeAt(o)) >> 8),
                          i.push(r % 256),
                          i.push(n);
                      return i;
                    })(t, this.length - c),
                    this,
                    c,
                    f
                  )
                );
              default:
                if (d) throw TypeError("Unknown encoding: " + n);
                (n = ("" + n).toLowerCase()), (d = !0);
            }
        }),
        (a.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        }),
        (a.prototype.slice = function (t, e) {
          let r = this.length;
          (t = ~~t),
            (e = void 0 === e ? r : ~~e),
            t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            e < t && (e = t);
          let n = this.subarray(t, e);
          return Object.setPrototypeOf(n, a.prototype), n;
        }),
        (a.prototype.readUintLE = a.prototype.readUIntLE =
          function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || w(t, e, this.length);
            let n = this[t],
              i = 1,
              o = 0;
            for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
            return n;
          }),
        (a.prototype.readUintBE = a.prototype.readUIntBE =
          function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || w(t, e, this.length);
            let n = this[t + --e],
              i = 1;
            for (; e > 0 && (i *= 256); ) n += this[t + --e] * i;
            return n;
          }),
        (a.prototype.readUint8 = a.prototype.readUInt8 =
          function (t, e) {
            return (t >>>= 0), e || w(t, 1, this.length), this[t];
          }),
        (a.prototype.readUint16LE = a.prototype.readUInt16LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || w(t, 2, this.length),
              this[t] | (this[t + 1] << 8)
            );
          }),
        (a.prototype.readUint16BE = a.prototype.readUInt16BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || w(t, 2, this.length),
              (this[t] << 8) | this[t + 1]
            );
          }),
        (a.prototype.readUint32LE = a.prototype.readUInt32LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || w(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            );
          }),
        (a.prototype.readUint32BE = a.prototype.readUInt32BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || w(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
        (a.prototype.readBigUInt64LE = N(function (t) {
          _((t >>>= 0), "offset");
          let e = this[t],
            r = this[t + 7];
          (void 0 === e || void 0 === r) && k(t, this.length - 8);
          let n =
              e + 256 * this[++t] + 65536 * this[++t] + 16777216 * this[++t],
            i = this[++t] + 256 * this[++t] + 65536 * this[++t] + 16777216 * r;
          return BigInt(n) + (BigInt(i) << BigInt(32));
        })),
        (a.prototype.readBigUInt64BE = N(function (t) {
          _((t >>>= 0), "offset");
          let e = this[t],
            r = this[t + 7];
          (void 0 === e || void 0 === r) && k(t, this.length - 8);
          let n =
              16777216 * e + 65536 * this[++t] + 256 * this[++t] + this[++t],
            i = 16777216 * this[++t] + 65536 * this[++t] + 256 * this[++t] + r;
          return (BigInt(n) << BigInt(32)) + BigInt(i);
        })),
        (a.prototype.readIntLE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || w(t, e, this.length);
          let n = this[t],
            i = 1,
            o = 0;
          for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
          return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n;
        }),
        (a.prototype.readIntBE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || w(t, e, this.length);
          let n = e,
            i = 1,
            o = this[t + --n];
          for (; n > 0 && (i *= 256); ) o += this[t + --n] * i;
          return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
        }),
        (a.prototype.readInt8 = function (t, e) {
          return ((t >>>= 0), e || w(t, 1, this.length), 128 & this[t])
            ? -((255 - this[t] + 1) * 1)
            : this[t];
        }),
        (a.prototype.readInt16LE = function (t, e) {
          (t >>>= 0), e || w(t, 2, this.length);
          let r = this[t] | (this[t + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (a.prototype.readInt16BE = function (t, e) {
          (t >>>= 0), e || w(t, 2, this.length);
          let r = this[t + 1] | (this[t] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (a.prototype.readInt32LE = function (t, e) {
          return (
            (t >>>= 0),
            e || w(t, 4, this.length),
            this[t] |
              (this[t + 1] << 8) |
              (this[t + 2] << 16) |
              (this[t + 3] << 24)
          );
        }),
        (a.prototype.readInt32BE = function (t, e) {
          return (
            (t >>>= 0),
            e || w(t, 4, this.length),
            (this[t] << 24) |
              (this[t + 1] << 16) |
              (this[t + 2] << 8) |
              this[t + 3]
          );
        }),
        (a.prototype.readBigInt64LE = N(function (t) {
          _((t >>>= 0), "offset");
          let e = this[t],
            r = this[t + 7];
          return (
            (void 0 === e || void 0 === r) && k(t, this.length - 8),
            (BigInt(
              this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24)
            ) <<
              BigInt(32)) +
              BigInt(
                e + 256 * this[++t] + 65536 * this[++t] + 16777216 * this[++t]
              )
          );
        })),
        (a.prototype.readBigInt64BE = N(function (t) {
          _((t >>>= 0), "offset");
          let e = this[t],
            r = this[t + 7];
          return (
            (void 0 === e || void 0 === r) && k(t, this.length - 8),
            (BigInt(
              (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t]
            ) <<
              BigInt(32)) +
              BigInt(
                16777216 * this[++t] + 65536 * this[++t] + 256 * this[++t] + r
              )
          );
        })),
        (a.prototype.readFloatLE = function (t, e) {
          return (
            (t >>>= 0), e || w(t, 4, this.length), i.read(this, t, !0, 23, 4)
          );
        }),
        (a.prototype.readFloatBE = function (t, e) {
          return (
            (t >>>= 0), e || w(t, 4, this.length), i.read(this, t, !1, 23, 4)
          );
        }),
        (a.prototype.readDoubleLE = function (t, e) {
          return (
            (t >>>= 0), e || w(t, 8, this.length), i.read(this, t, !0, 52, 8)
          );
        }),
        (a.prototype.readDoubleBE = function (t, e) {
          return (
            (t >>>= 0), e || w(t, 8, this.length), i.read(this, t, !1, 52, 8)
          );
        }),
        (a.prototype.writeUintLE = a.prototype.writeUIntLE =
          function (t, e, r, n) {
            if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
              let n = Math.pow(2, 8 * r) - 1;
              x(this, t, e, r, n, 0);
            }
            let i = 1,
              o = 0;
            for (this[e] = 255 & t; ++o < r && (i *= 256); )
              this[e + o] = (t / i) & 255;
            return e + r;
          }),
        (a.prototype.writeUintBE = a.prototype.writeUIntBE =
          function (t, e, r, n) {
            if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
              let n = Math.pow(2, 8 * r) - 1;
              x(this, t, e, r, n, 0);
            }
            let i = r - 1,
              o = 1;
            for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
              this[e + i] = (t / o) & 255;
            return e + r;
          }),
        (a.prototype.writeUint8 = a.prototype.writeUInt8 =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || x(this, t, e, 1, 255, 0),
              (this[e] = 255 & t),
              e + 1
            );
          }),
        (a.prototype.writeUint16LE = a.prototype.writeUInt16LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || x(this, t, e, 2, 65535, 0),
              (this[e] = 255 & t),
              (this[e + 1] = t >>> 8),
              e + 2
            );
          }),
        (a.prototype.writeUint16BE = a.prototype.writeUInt16BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || x(this, t, e, 2, 65535, 0),
              (this[e] = t >>> 8),
              (this[e + 1] = 255 & t),
              e + 2
            );
          }),
        (a.prototype.writeUint32LE = a.prototype.writeUInt32LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || x(this, t, e, 4, 4294967295, 0),
              (this[e + 3] = t >>> 24),
              (this[e + 2] = t >>> 16),
              (this[e + 1] = t >>> 8),
              (this[e] = 255 & t),
              e + 4
            );
          }),
        (a.prototype.writeUint32BE = a.prototype.writeUInt32BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || x(this, t, e, 4, 4294967295, 0),
              (this[e] = t >>> 24),
              (this[e + 1] = t >>> 16),
              (this[e + 2] = t >>> 8),
              (this[e + 3] = 255 & t),
              e + 4
            );
          }),
        (a.prototype.writeBigUInt64LE = N(function (t, e = 0) {
          return E(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (a.prototype.writeBigUInt64BE = N(function (t, e = 0) {
          return M(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (a.prototype.writeIntLE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            let n = Math.pow(2, 8 * r - 1);
            x(this, t, e, r, n - 1, -n);
          }
          let i = 0,
            o = 1,
            s = 0;
          for (this[e] = 255 & t; ++i < r && (o *= 256); )
            t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1),
              (this[e + i] = (((t / o) >> 0) - s) & 255);
          return e + r;
        }),
        (a.prototype.writeIntBE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            let n = Math.pow(2, 8 * r - 1);
            x(this, t, e, r, n - 1, -n);
          }
          let i = r - 1,
            o = 1,
            s = 0;
          for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
            t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1),
              (this[e + i] = (((t / o) >> 0) - s) & 255);
          return e + r;
        }),
        (a.prototype.writeInt8 = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 1, 127, -128),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (a.prototype.writeInt16LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 2, 32767, -32768),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          );
        }),
        (a.prototype.writeInt16BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 2, 32767, -32768),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          );
        }),
        (a.prototype.writeInt32LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 4, 2147483647, -2147483648),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            (this[e + 2] = t >>> 16),
            (this[e + 3] = t >>> 24),
            e + 4
          );
        }),
        (a.prototype.writeInt32BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          );
        }),
        (a.prototype.writeBigInt64LE = N(function (t, e = 0) {
          return E(
            this,
            t,
            e,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        })),
        (a.prototype.writeBigInt64BE = N(function (t, e = 0) {
          return M(
            this,
            t,
            e,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        })),
        (a.prototype.writeFloatLE = function (t, e, r) {
          return B(this, t, e, !0, r);
        }),
        (a.prototype.writeFloatBE = function (t, e, r) {
          return B(this, t, e, !1, r);
        }),
        (a.prototype.writeDoubleLE = function (t, e, r) {
          return A(this, t, e, !0, r);
        }),
        (a.prototype.writeDoubleBE = function (t, e, r) {
          return A(this, t, e, !1, r);
        }),
        (a.prototype.copy = function (t, e, r, n) {
          if (!a.isBuffer(t)) throw TypeError("argument should be a Buffer");
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            n > 0 && n < r && (n = r),
            n === r || 0 === t.length || 0 === this.length)
          )
            return 0;
          if (e < 0) throw RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length) throw RangeError("Index out of range");
          if (n < 0) throw RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length),
            t.length - e < n - r && (n = t.length - e + r);
          let i = n - r;
          return (
            this === t && "function" == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(e, r, n)
              : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
            i
          );
        }),
        (a.prototype.fill = function (t, e, r, n) {
          let i;
          if ("string" == typeof t) {
            if (
              ("string" == typeof e
                ? ((n = e), (e = 0), (r = this.length))
                : "string" == typeof r && ((n = r), (r = this.length)),
              void 0 !== n && "string" != typeof n)
            )
              throw TypeError("encoding must be a string");
            if ("string" == typeof n && !a.isEncoding(n))
              throw TypeError("Unknown encoding: " + n);
            if (1 === t.length) {
              let e = t.charCodeAt(0);
              (("utf8" === n && e < 128) || "latin1" === n) && (t = e);
            }
          } else
            "number" == typeof t
              ? (t &= 255)
              : "boolean" == typeof t && (t = Number(t));
          if (e < 0 || this.length < e || this.length < r)
            throw RangeError("Out of range index");
          if (r <= e) return this;
          if (
            ((e >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            t || (t = 0),
            "number" == typeof t)
          )
            for (i = e; i < r; ++i) this[i] = t;
          else {
            let o = a.isBuffer(t) ? t : a.from(t, n),
              s = o.length;
            if (0 === s)
              throw TypeError(
                'The value "' + t + '" is invalid for argument "value"'
              );
            for (i = 0; i < r - e; ++i) this[i + e] = o[i % s];
          }
          return this;
        });
      let S = {};
      function C(t, e, r) {
        S[t] = class extends r {
          constructor() {
            super(),
              Object.defineProperty(this, "message", {
                value: e.apply(this, arguments),
                writable: !0,
                configurable: !0,
              }),
              (this.name = `${this.name} [${t}]`),
              this.stack,
              delete this.name;
          }
          get code() {
            return t;
          }
          set code(t) {
            Object.defineProperty(this, "code", {
              configurable: !0,
              enumerable: !0,
              value: t,
              writable: !0,
            });
          }
          toString() {
            return `${this.name} [${t}]: ${this.message}`;
          }
        };
      }
      function I(t) {
        let e = "",
          r = t.length,
          n = "-" === t[0] ? 1 : 0;
        for (; r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
        return `${t.slice(0, r)}${e}`;
      }
      function O(t, e, r, n, i, o) {
        if (t > r || t < e) {
          let n;
          let i = "bigint" == typeof e ? "n" : "";
          throw (
            ((n =
              o > 3
                ? 0 === e || e === BigInt(0)
                  ? `>= 0${i} and < 2${i} ** ${(o + 1) * 8}${i}`
                  : `>= -(2${i} ** ${(o + 1) * 8 - 1}${i}) and < 2 ** ${
                      (o + 1) * 8 - 1
                    }${i}`
                : `>= ${e}${i} and <= ${r}${i}`),
            new S.ERR_OUT_OF_RANGE("value", n, t))
          );
        }
        _(i, "offset"),
          (void 0 === n[i] || void 0 === n[i + o]) && k(i, n.length - (o + 1));
      }
      function _(t, e) {
        if ("number" != typeof t)
          throw new S.ERR_INVALID_ARG_TYPE(e, "number", t);
      }
      function k(t, e, r) {
        if (Math.floor(t) !== t)
          throw (
            (_(t, r), new S.ERR_OUT_OF_RANGE(r || "offset", "an integer", t))
          );
        if (e < 0) throw new S.ERR_BUFFER_OUT_OF_BOUNDS();
        throw new S.ERR_OUT_OF_RANGE(
          r || "offset",
          `>= ${r ? 1 : 0} and <= ${e}`,
          t
        );
      }
      C(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function (t) {
          return t
            ? `${t} is outside of buffer bounds`
            : "Attempt to access memory outside buffer bounds";
        },
        RangeError
      ),
        C(
          "ERR_INVALID_ARG_TYPE",
          function (t, e) {
            return `The "${t}" argument must be of type number. Received type ${typeof e}`;
          },
          TypeError
        ),
        C(
          "ERR_OUT_OF_RANGE",
          function (t, e, r) {
            let n = `The value of "${t}" is out of range.`,
              i = r;
            return (
              Number.isInteger(r) && Math.abs(r) > 4294967296
                ? (i = I(String(r)))
                : "bigint" == typeof r &&
                  ((i = String(r)),
                  (r > BigInt(2) ** BigInt(32) ||
                    r < -(BigInt(2) ** BigInt(32))) &&
                    (i = I(i)),
                  (i += "n")),
              (n += ` It must be ${e}. Received ${i}`)
            );
          },
          RangeError
        );
      let $ = /[^+/0-9A-Za-z-_]/g;
      function R(t, e) {
        let r;
        e = e || 1 / 0;
        let n = t.length,
          i = null,
          o = [];
        for (let s = 0; s < n; ++s) {
          if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319 || s + 1 === n) {
                (e -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (e -= 3) > -1 && o.push(239, 191, 189), (i = r);
              continue;
            }
            r = (((i - 55296) << 10) | (r - 56320)) + 65536;
          } else i && (e -= 3) > -1 && o.push(239, 191, 189);
          if (((i = null), r < 128)) {
            if ((e -= 1) < 0) break;
            o.push(r);
          } else if (r < 2048) {
            if ((e -= 2) < 0) break;
            o.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((e -= 3) < 0) break;
            o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else if (r < 1114112) {
            if ((e -= 4) < 0) break;
            o.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          } else throw Error("Invalid code point");
        }
        return o;
      }
      function U(t) {
        return n.toByteArray(
          (function (t) {
            if ((t = (t = t.split("=")[0]).trim().replace($, "")).length < 2)
              return "";
            for (; t.length % 4 != 0; ) t += "=";
            return t;
          })(t)
        );
      }
      function T(t, e, r, n) {
        let i;
        for (i = 0; i < n && !(i + r >= e.length) && !(i >= t.length); ++i)
          e[i + r] = t[i];
        return i;
      }
      function L(t, e) {
        return (
          t instanceof e ||
          (null != t &&
            null != t.constructor &&
            null != t.constructor.name &&
            t.constructor.name === e.name)
        );
      }
      let F = (function () {
        let t = "0123456789abcdef",
          e = Array(256);
        for (let r = 0; r < 16; ++r) {
          let n = 16 * r;
          for (let i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
        }
        return e;
      })();
      function N(t) {
        return "undefined" == typeof BigInt ? j : t;
      }
      function j() {
        throw Error("BigInt not supported");
      }
    },
    37836: function (t) {
      "use strict";
      var e = Object.prototype.hasOwnProperty,
        r = "~";
      function n() {}
      function i(t, e, r) {
        (this.fn = t), (this.context = e), (this.once = r || !1);
      }
      function o(t, e, n, o, s) {
        if ("function" != typeof n)
          throw TypeError("The listener must be a function");
        var a = new i(n, o || t, s),
          u = r ? r + e : e;
        return (
          t._events[u]
            ? t._events[u].fn
              ? (t._events[u] = [t._events[u], a])
              : t._events[u].push(a)
            : ((t._events[u] = a), t._eventsCount++),
          t
        );
      }
      function s(t, e) {
        0 == --t._eventsCount ? (t._events = new n()) : delete t._events[e];
      }
      function a() {
        (this._events = new n()), (this._eventsCount = 0);
      }
      Object.create &&
        ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1)),
        (a.prototype.eventNames = function () {
          var t,
            n,
            i = [];
          if (0 === this._eventsCount) return i;
          for (n in (t = this._events))
            e.call(t, n) && i.push(r ? n.slice(1) : n);
          return Object.getOwnPropertySymbols
            ? i.concat(Object.getOwnPropertySymbols(t))
            : i;
        }),
        (a.prototype.listeners = function (t) {
          var e = r ? r + t : t,
            n = this._events[e];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var i = 0, o = n.length, s = Array(o); i < o; i++)
            s[i] = n[i].fn;
          return s;
        }),
        (a.prototype.listenerCount = function (t) {
          var e = r ? r + t : t,
            n = this._events[e];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (a.prototype.emit = function (t, e, n, i, o, s) {
          var a = r ? r + t : t;
          if (!this._events[a]) return !1;
          var u,
            l,
            c = this._events[a],
            f = arguments.length;
          if (c.fn) {
            switch ((c.once && this.removeListener(t, c.fn, void 0, !0), f)) {
              case 1:
                return c.fn.call(c.context), !0;
              case 2:
                return c.fn.call(c.context, e), !0;
              case 3:
                return c.fn.call(c.context, e, n), !0;
              case 4:
                return c.fn.call(c.context, e, n, i), !0;
              case 5:
                return c.fn.call(c.context, e, n, i, o), !0;
              case 6:
                return c.fn.call(c.context, e, n, i, o, s), !0;
            }
            for (l = 1, u = Array(f - 1); l < f; l++) u[l - 1] = arguments[l];
            c.fn.apply(c.context, u);
          } else {
            var h,
              d = c.length;
            for (l = 0; l < d; l++)
              switch (
                (c[l].once && this.removeListener(t, c[l].fn, void 0, !0), f)
              ) {
                case 1:
                  c[l].fn.call(c[l].context);
                  break;
                case 2:
                  c[l].fn.call(c[l].context, e);
                  break;
                case 3:
                  c[l].fn.call(c[l].context, e, n);
                  break;
                case 4:
                  c[l].fn.call(c[l].context, e, n, i);
                  break;
                default:
                  if (!u)
                    for (h = 1, u = Array(f - 1); h < f; h++)
                      u[h - 1] = arguments[h];
                  c[l].fn.apply(c[l].context, u);
              }
          }
          return !0;
        }),
        (a.prototype.on = function (t, e, r) {
          return o(this, t, e, r, !1);
        }),
        (a.prototype.once = function (t, e, r) {
          return o(this, t, e, r, !0);
        }),
        (a.prototype.removeListener = function (t, e, n, i) {
          var o = r ? r + t : t;
          if (!this._events[o]) return this;
          if (!e) return s(this, o), this;
          var a = this._events[o];
          if (a.fn)
            a.fn !== e ||
              (i && !a.once) ||
              (n && a.context !== n) ||
              s(this, o);
          else {
            for (var u = 0, l = [], c = a.length; u < c; u++)
              (a[u].fn !== e ||
                (i && !a[u].once) ||
                (n && a[u].context !== n)) &&
                l.push(a[u]);
            l.length
              ? (this._events[o] = 1 === l.length ? l[0] : l)
              : s(this, o);
          }
          return this;
        }),
        (a.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = r ? r + t : t), this._events[e] && s(this, e))
              : ((this._events = new n()), (this._eventsCount = 0)),
            this
          );
        }),
        (a.prototype.off = a.prototype.removeListener),
        (a.prototype.addListener = a.prototype.on),
        (a.prefixed = r),
        (a.EventEmitter = a),
        (t.exports = a);
    },
    6868: function (t, e) {
      /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ (e.read =
        function (t, e, r, n, i) {
          var o,
            s,
            a = 8 * i - n - 1,
            u = (1 << a) - 1,
            l = u >> 1,
            c = -7,
            f = r ? i - 1 : 0,
            h = r ? -1 : 1,
            d = t[e + f];
          for (
            f += h, o = d & ((1 << -c) - 1), d >>= -c, c += a;
            c > 0;
            o = 256 * o + t[e + f], f += h, c -= 8
          );
          for (
            s = o & ((1 << -c) - 1), o >>= -c, c += n;
            c > 0;
            s = 256 * s + t[e + f], f += h, c -= 8
          );
          if (0 === o) o = 1 - l;
          else {
            if (o === u) return s ? NaN : (1 / 0) * (d ? -1 : 1);
            (s += Math.pow(2, n)), (o -= l);
          }
          return (d ? -1 : 1) * s * Math.pow(2, o - n);
        }),
        (e.write = function (t, e, r, n, i, o) {
          var s,
            a,
            u,
            l = 8 * o - i - 1,
            c = (1 << l) - 1,
            f = c >> 1,
            h = 23 === i ? 5960464477539062e-23 : 0,
            d = n ? 0 : o - 1,
            p = n ? 1 : -1,
            m = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            isNaN((e = Math.abs(e))) || e === 1 / 0
              ? ((a = isNaN(e) ? 1 : 0), (s = c))
              : ((s = Math.floor(Math.log(e) / Math.LN2)),
                e * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                s + f >= 1 ? (e += h / u) : (e += h * Math.pow(2, 1 - f)),
                e * u >= 2 && (s++, (u /= 2)),
                s + f >= c
                  ? ((a = 0), (s = c))
                  : s + f >= 1
                  ? ((a = (e * u - 1) * Math.pow(2, i)), (s += f))
                  : ((a = e * Math.pow(2, f - 1) * Math.pow(2, i)), (s = 0)));
            i >= 8;
            t[r + d] = 255 & a, d += p, a /= 256, i -= 8
          );
          for (
            s = (s << i) | a, l += i;
            l > 0;
            t[r + d] = 255 & s, d += p, s /= 256, l -= 8
          );
          t[r + d - p] |= 128 * m;
        });
    },
    4531: function (t, e, r) {
      "use strict";
      let n = r(3538).v4,
        i = r(62309),
        o = function (t, e) {
          if (!(this instanceof o)) return new o(t, e);
          e || (e = {}),
            (this.options = {
              reviver: void 0 !== e.reviver ? e.reviver : null,
              replacer: void 0 !== e.replacer ? e.replacer : null,
              generator:
                void 0 !== e.generator
                  ? e.generator
                  : function () {
                      return n();
                    },
              version: void 0 !== e.version ? e.version : 2,
              notificationIdNull:
                "boolean" == typeof e.notificationIdNull &&
                e.notificationIdNull,
            }),
            (this.callServer = t);
        };
      (t.exports = o),
        (o.prototype.request = function (t, e, r, n) {
          let o;
          let s = this,
            a = null,
            u = Array.isArray(t) && "function" == typeof e;
          if (1 === this.options.version && u)
            throw TypeError("JSON-RPC 1.0 does not support batching");
          let l = !u && t && "object" == typeof t && "function" == typeof e;
          if (u || l) (n = e), (a = t);
          else {
            "function" == typeof r && ((n = r), (r = void 0));
            let o = "function" == typeof n;
            try {
              a = i(t, e, r, {
                generator: this.options.generator,
                version: this.options.version,
                notificationIdNull: this.options.notificationIdNull,
              });
            } catch (t) {
              if (o) return n(t);
              throw t;
            }
            if (!o) return a;
          }
          try {
            o = JSON.stringify(a, this.options.replacer);
          } catch (t) {
            return n(t);
          }
          return (
            this.callServer(o, function (t, e) {
              s._parseResponse(t, e, n);
            }),
            a
          );
        }),
        (o.prototype._parseResponse = function (t, e, r) {
          let n;
          if (t) {
            r(t);
            return;
          }
          if (!e) return r();
          try {
            n = JSON.parse(e, this.options.reviver);
          } catch (t) {
            return r(t);
          }
          if (3 === r.length) {
            if (!Array.isArray(n)) return r(null, n.error, n.result);
            {
              let t = function (t) {
                return void 0 !== t.error;
              };
              return r(
                null,
                n.filter(t),
                n.filter(function (e) {
                  return !t(e);
                })
              );
            }
          }
          r(null, n);
        });
    },
    62309: function (t, e, r) {
      "use strict";
      let n = r(3538).v4;
      t.exports = function (t, e, r, i) {
        if ("string" != typeof t) throw TypeError(t + " must be a string");
        let o = "number" == typeof (i = i || {}).version ? i.version : 2;
        if (1 !== o && 2 !== o) throw TypeError(o + " must be 1 or 2");
        let s = { method: t };
        if ((2 === o && (s.jsonrpc = "2.0"), e)) {
          if ("object" != typeof e && !Array.isArray(e))
            throw TypeError(e + " must be an object, array or omitted");
          s.params = e;
        }
        if (void 0 === r) {
          let t =
            "function" == typeof i.generator
              ? i.generator
              : function () {
                  return n();
                };
          s.id = t(s, i);
        } else
          2 === o && null === r
            ? i.notificationIdNull && (s.id = null)
            : (s.id = r);
        return s;
      };
    },
    66648: function (t, e, r) {
      "use strict";
      r.d(e, {
        default: function () {
          return i.a;
        },
      });
      var n = r(55601),
        i = r.n(n);
    },
    38173: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "Image", {
          enumerable: !0,
          get: function () {
            return v;
          },
        });
      let n = r(99920),
        i = r(41452),
        o = r(57437),
        s = i._(r(2265)),
        a = n._(r(54887)),
        u = n._(r(28321)),
        l = r(80497),
        c = r(7103),
        f = r(93938);
      r(72301);
      let h = r(60291),
        d = n._(r(21241)),
        p = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function m(t, e, r, n, i, o, s) {
        let a = null == t ? void 0 : t.src;
        t &&
          t["data-loaded-src"] !== a &&
          ((t["data-loaded-src"] = a),
          ("decode" in t ? t.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (t.parentElement && t.isConnected) {
                if (("empty" !== e && i(!0), null == r ? void 0 : r.current)) {
                  let e = new Event("load");
                  Object.defineProperty(e, "target", {
                    writable: !1,
                    value: t,
                  });
                  let n = !1,
                    i = !1;
                  r.current({
                    ...e,
                    nativeEvent: e,
                    currentTarget: t,
                    target: t,
                    isDefaultPrevented: () => n,
                    isPropagationStopped: () => i,
                    persist: () => {},
                    preventDefault: () => {
                      (n = !0), e.preventDefault();
                    },
                    stopPropagation: () => {
                      (i = !0), e.stopPropagation();
                    },
                  });
                }
                (null == n ? void 0 : n.current) && n.current(t);
              }
            }));
      }
      function g(t) {
        return s.use ? { fetchPriority: t } : { fetchpriority: t };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let y = (0, s.forwardRef)((t, e) => {
        let {
          src: r,
          srcSet: n,
          sizes: i,
          height: a,
          width: u,
          decoding: l,
          className: c,
          style: f,
          fetchPriority: h,
          placeholder: d,
          loading: p,
          unoptimized: y,
          fill: b,
          onLoadRef: v,
          onLoadingCompleteRef: w,
          setBlurComplete: x,
          setShowAltText: E,
          sizesInput: M,
          onLoad: P,
          onError: B,
          ...A
        } = t;
        return (0, o.jsx)("img", {
          ...A,
          ...g(h),
          loading: p,
          width: u,
          height: a,
          decoding: l,
          "data-nimg": b ? "fill" : "1",
          className: c,
          style: f,
          sizes: i,
          srcSet: n,
          src: r,
          ref: (0, s.useCallback)(
            (t) => {
              e &&
                ("function" == typeof e
                  ? e(t)
                  : "object" == typeof e && (e.current = t)),
                t &&
                  (B && (t.src = t.src), t.complete && m(t, d, v, w, x, y, M));
            },
            [r, d, v, w, x, B, y, M, e]
          ),
          onLoad: (t) => {
            m(t.currentTarget, d, v, w, x, y, M);
          },
          onError: (t) => {
            E(!0), "empty" !== d && x(!0), B && B(t);
          },
        });
      });
      function b(t) {
        let { isAppRouter: e, imgAttributes: r } = t,
          n = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...g(r.fetchPriority),
          };
        return e && a.default.preload
          ? (a.default.preload(r.src, n), null)
          : (0, o.jsx)(u.default, {
              children: (0, o.jsx)(
                "link",
                { rel: "preload", href: r.srcSet ? void 0 : r.src, ...n },
                "__nimg-" + r.src + r.srcSet + r.sizes
              ),
            });
      }
      let v = (0, s.forwardRef)((t, e) => {
        let r = (0, s.useContext)(h.RouterContext),
          n = (0, s.useContext)(f.ImageConfigContext),
          i = (0, s.useMemo)(() => {
            let t = p || n || c.imageConfigDefault,
              e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
              r = t.deviceSizes.sort((t, e) => t - e);
            return { ...t, allSizes: e, deviceSizes: r };
          }, [n]),
          { onLoad: a, onLoadingComplete: u } = t,
          m = (0, s.useRef)(a);
        (0, s.useEffect)(() => {
          m.current = a;
        }, [a]);
        let g = (0, s.useRef)(u);
        (0, s.useEffect)(() => {
          g.current = u;
        }, [u]);
        let [v, w] = (0, s.useState)(!1),
          [x, E] = (0, s.useState)(!1),
          { props: M, meta: P } = (0, l.getImgProps)(t, {
            defaultLoader: d.default,
            imgConf: i,
            blurComplete: v,
            showAltText: x,
          });
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(y, {
              ...M,
              unoptimized: P.unoptimized,
              placeholder: P.placeholder,
              fill: P.fill,
              onLoadRef: m,
              onLoadingCompleteRef: g,
              setBlurComplete: w,
              setShowAltText: E,
              sizesInput: t.sizes,
              ref: e,
            }),
            P.priority
              ? (0, o.jsx)(b, { isAppRouter: !r, imgAttributes: M })
              : null,
          ],
        });
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    82901: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(99920)._(r(2265)).default.createContext({});
    },
    40687: function (t, e) {
      "use strict";
      function r(t) {
        let {
          ampFirst: e = !1,
          hybrid: r = !1,
          hasQuery: n = !1,
        } = void 0 === t ? {} : t;
        return e || (r && n);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    80497: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        r(72301);
      let n = r(51564),
        i = r(7103);
      function o(t) {
        return void 0 !== t.default;
      }
      function s(t) {
        return void 0 === t
          ? t
          : "number" == typeof t
          ? Number.isFinite(t)
            ? t
            : NaN
          : "string" == typeof t && /^[0-9]+$/.test(t)
          ? parseInt(t, 10)
          : NaN;
      }
      function a(t, e) {
        var r;
        let a,
          u,
          l,
          {
            src: c,
            sizes: f,
            unoptimized: h = !1,
            priority: d = !1,
            loading: p,
            className: m,
            quality: g,
            width: y,
            height: b,
            fill: v = !1,
            style: w,
            overrideSrc: x,
            onLoad: E,
            onLoadingComplete: M,
            placeholder: P = "empty",
            blurDataURL: B,
            fetchPriority: A,
            layout: S,
            objectFit: C,
            objectPosition: I,
            lazyBoundary: O,
            lazyRoot: _,
            ...k
          } = t,
          { imgConf: $, showAltText: R, blurComplete: U, defaultLoader: T } = e,
          L = $ || i.imageConfigDefault;
        if ("allSizes" in L) a = L;
        else {
          let t = [...L.deviceSizes, ...L.imageSizes].sort((t, e) => t - e),
            e = L.deviceSizes.sort((t, e) => t - e);
          a = { ...L, allSizes: t, deviceSizes: e };
        }
        if (void 0 === T)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let F = k.loader || T;
        delete k.loader, delete k.srcSet;
        let N = "__next_img_default" in F;
        if (N) {
          if ("custom" === a.loader)
            throw Error(
              'Image with src "' +
                c +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let t = F;
          F = (e) => {
            let { config: r, ...n } = e;
            return t(n);
          };
        }
        if (S) {
          "fill" === S && (v = !0);
          let t = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[S];
          t && (w = { ...w, ...t });
          let e = { responsive: "100vw", fill: "100vw" }[S];
          e && !f && (f = e);
        }
        let j = "",
          z = s(y),
          G = s(b);
        if ("object" == typeof (r = c) && (o(r) || void 0 !== r.src)) {
          let t = o(c) ? c.default : c;
          if (!t.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(t)
            );
          if (!t.height || !t.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(t)
            );
          if (
            ((u = t.blurWidth),
            (l = t.blurHeight),
            (B = B || t.blurDataURL),
            (j = t.src),
            !v)
          ) {
            if (z || G) {
              if (z && !G) {
                let e = z / t.width;
                G = Math.round(t.height * e);
              } else if (!z && G) {
                let e = G / t.height;
                z = Math.round(t.width * e);
              }
            } else (z = t.width), (G = t.height);
          }
        }
        let D = !d && ("lazy" === p || void 0 === p);
        (!(c = "string" == typeof c ? c : j) ||
          c.startsWith("data:") ||
          c.startsWith("blob:")) &&
          ((h = !0), (D = !1)),
          a.unoptimized && (h = !0),
          N && c.endsWith(".svg") && !a.dangerouslyAllowSVG && (h = !0),
          d && (A = "high");
        let q = s(g),
          H = Object.assign(
            v
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: C,
                  objectPosition: I,
                }
              : {},
            R ? {} : { color: "transparent" },
            w
          ),
          V =
            U || "empty" === P
              ? null
              : "blur" === P
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, n.getImageBlurSvg)({
                  widthInt: z,
                  heightInt: G,
                  blurWidth: u,
                  blurHeight: l,
                  blurDataURL: B || "",
                  objectFit: H.objectFit,
                }) +
                '")'
              : 'url("' + P + '")',
          Z = V
            ? {
                backgroundSize: H.objectFit || "cover",
                backgroundPosition: H.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: V,
              }
            : {},
          W = (function (t) {
            let {
              config: e,
              src: r,
              unoptimized: n,
              width: i,
              quality: o,
              sizes: s,
              loader: a,
            } = t;
            if (n) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: u, kind: l } = (function (t, e, r) {
                let { deviceSizes: n, allSizes: i } = t;
                if (r) {
                  let t = /(^|\s)(1?\d?\d)vw/g,
                    e = [];
                  for (let n; (n = t.exec(r)); n) e.push(parseInt(n[2]));
                  if (e.length) {
                    let t = 0.01 * Math.min(...e);
                    return {
                      widths: i.filter((e) => e >= n[0] * t),
                      kind: "w",
                    };
                  }
                  return { widths: i, kind: "w" };
                }
                return "number" != typeof e
                  ? { widths: n, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [e, 2 * e].map(
                            (t) => i.find((e) => e >= t) || i[i.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(e, i, s),
              c = u.length - 1;
            return {
              sizes: s || "w" !== l ? s : "100vw",
              srcSet: u
                .map(
                  (t, n) =>
                    a({ config: e, src: r, quality: o, width: t }) +
                    " " +
                    ("w" === l ? t : n + 1) +
                    l
                )
                .join(", "),
              src: a({ config: e, src: r, quality: o, width: u[c] }),
            };
          })({
            config: a,
            src: c,
            unoptimized: h,
            width: z,
            quality: q,
            sizes: f,
            loader: F,
          });
        return {
          props: {
            ...k,
            loading: D ? "lazy" : p,
            fetchPriority: A,
            width: z,
            height: G,
            decoding: "async",
            className: m,
            style: { ...H, ...Z },
            sizes: W.sizes,
            srcSet: W.srcSet,
            src: x || W.src,
          },
          meta: { unoptimized: h, priority: d, placeholder: P, fill: v },
        };
      }
    },
    28321: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var r in e)
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        })(e, {
          default: function () {
            return m;
          },
          defaultHead: function () {
            return f;
          },
        });
      let n = r(99920),
        i = r(41452),
        o = r(57437),
        s = i._(r(2265)),
        a = n._(r(65960)),
        u = r(82901),
        l = r(36590),
        c = r(40687);
      function f(t) {
        void 0 === t && (t = !1);
        let e = [(0, o.jsx)("meta", { charSet: "utf-8" })];
        return (
          t ||
            e.push(
              (0, o.jsx)("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          e
        );
      }
      function h(t, e) {
        return "string" == typeof e || "number" == typeof e
          ? t
          : e.type === s.default.Fragment
          ? t.concat(
              s.default.Children.toArray(e.props.children).reduce(
                (t, e) =>
                  "string" == typeof e || "number" == typeof e
                    ? t
                    : t.concat(e),
                []
              )
            )
          : t.concat(e);
      }
      r(72301);
      let d = ["name", "httpEquiv", "charSet", "itemProp"];
      function p(t, e) {
        let { inAmpMode: r } = e;
        return t
          .reduce(h, [])
          .reverse()
          .concat(f(r).reverse())
          .filter(
            (function () {
              let t = new Set(),
                e = new Set(),
                r = new Set(),
                n = {};
              return (i) => {
                let o = !0,
                  s = !1;
                if (
                  i.key &&
                  "number" != typeof i.key &&
                  i.key.indexOf("$") > 0
                ) {
                  s = !0;
                  let e = i.key.slice(i.key.indexOf("$") + 1);
                  t.has(e) ? (o = !1) : t.add(e);
                }
                switch (i.type) {
                  case "title":
                  case "base":
                    e.has(i.type) ? (o = !1) : e.add(i.type);
                    break;
                  case "meta":
                    for (let t = 0, e = d.length; t < e; t++) {
                      let e = d[t];
                      if (i.props.hasOwnProperty(e)) {
                        if ("charSet" === e) r.has(e) ? (o = !1) : r.add(e);
                        else {
                          let t = i.props[e],
                            r = n[e] || new Set();
                          ("name" !== e || !s) && r.has(t)
                            ? (o = !1)
                            : (r.add(t), (n[e] = r));
                        }
                      }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map((t, e) => {
            let n = t.key || e;
            if (
              !r &&
              "link" === t.type &&
              t.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((e) => t.props.href.startsWith(e))
            ) {
              let e = { ...(t.props || {}) };
              return (
                (e["data-href"] = e.href),
                (e.href = void 0),
                (e["data-optimized-fonts"] = !0),
                s.default.cloneElement(t, e)
              );
            }
            return s.default.cloneElement(t, { key: n });
          });
      }
      let m = function (t) {
        let { children: e } = t,
          r = (0, s.useContext)(u.AmpStateContext),
          n = (0, s.useContext)(l.HeadManagerContext);
        return (0, o.jsx)(a.default, {
          reduceComponentsToState: p,
          headManager: n,
          inAmpMode: (0, c.isInAmpMode)(r),
          children: e,
        });
      };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    51564: function (t, e) {
      "use strict";
      function r(t) {
        let {
            widthInt: e,
            heightInt: r,
            blurWidth: n,
            blurHeight: i,
            blurDataURL: o,
            objectFit: s,
          } = t,
          a = n ? 40 * n : e,
          u = i ? 40 * i : r,
          l = a && u ? "viewBox='0 0 " + a + " " + u + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          l +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (l
            ? "none"
            : "contain" === s
            ? "xMidYMid"
            : "cover" === s
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          o +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    93938: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(99920)._(r(2265)),
        i = r(7103),
        o = n.default.createContext(i.imageConfigDefault);
    },
    7103: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var r in e)
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        })(e, {
          VALID_LOADERS: function () {
            return r;
          },
          imageConfigDefault: function () {
            return n;
          },
        });
      let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
        n = {
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
    55601: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var r in e)
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        })(e, {
          default: function () {
            return u;
          },
          getImageProps: function () {
            return a;
          },
        });
      let n = r(99920),
        i = r(80497),
        o = r(38173),
        s = n._(r(21241));
      function a(t) {
        let { props: e } = (0, i.getImgProps)(t, {
          defaultLoader: s.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [t, r] of Object.entries(e)) void 0 === r && delete e[t];
        return { props: e };
      }
      let u = o.Image;
    },
    21241: function (t, e) {
      "use strict";
      function r(t) {
        let { config: e, src: r, width: n, quality: i } = t;
        return r;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (r.__next_img_default = !0);
      let n = r;
    },
    60291: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "RouterContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(99920)._(r(2265)).default.createContext(null);
    },
    65960: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = r(2265),
        i = "undefined" == typeof window,
        o = i ? () => {} : n.useLayoutEffect,
        s = i ? () => {} : n.useEffect;
      function a(t) {
        let { headManager: e, reduceComponentsToState: r } = t;
        function a() {
          if (e && e.mountedInstances) {
            let i = n.Children.toArray(
              Array.from(e.mountedInstances).filter(Boolean)
            );
            e.updateHead(r(i, t));
          }
        }
        if (i) {
          var u;
          null == e || null == (u = e.mountedInstances) || u.add(t.children),
            a();
        }
        return (
          o(() => {
            var r;
            return (
              null == e ||
                null == (r = e.mountedInstances) ||
                r.add(t.children),
              () => {
                var r;
                null == e ||
                  null == (r = e.mountedInstances) ||
                  r.delete(t.children);
              }
            );
          }),
          o(
            () => (
              e && (e._pendingUpdate = a),
              () => {
                e && (e._pendingUpdate = a);
              }
            )
          ),
          s(
            () => (
              e &&
                e._pendingUpdate &&
                (e._pendingUpdate(), (e._pendingUpdate = null)),
              () => {
                e &&
                  e._pendingUpdate &&
                  (e._pendingUpdate(), (e._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    10632: function (t, e, r) {
      /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ var n =
          r(9109),
        i = n.Buffer;
      function o(t, e) {
        for (var r in t) e[r] = t[r];
      }
      function s(t, e, r) {
        return i(t, e, r);
      }
      i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
        ? (t.exports = n)
        : (o(n, e), (e.Buffer = s)),
        (s.prototype = Object.create(i.prototype)),
        o(i, s),
        (s.from = function (t, e, r) {
          if ("number" == typeof t)
            throw TypeError("Argument must not be a number");
          return i(t, e, r);
        }),
        (s.alloc = function (t, e, r) {
          if ("number" != typeof t)
            throw TypeError("Argument must be a number");
          var n = i(t);
          return (
            void 0 !== e
              ? "string" == typeof r
                ? n.fill(e, r)
                : n.fill(e)
              : n.fill(0),
            n
          );
        }),
        (s.allocUnsafe = function (t) {
          if ("number" != typeof t)
            throw TypeError("Argument must be a number");
          return i(t);
        }),
        (s.allocUnsafeSlow = function (t) {
          if ("number" != typeof t)
            throw TypeError("Argument must be a number");
          return n.SlowBuffer(t);
        });
    },
    57139: function (t, e) {
      "use strict";
      function r(t, e, r) {
        return e <= t && t <= r;
      }
      function n(t) {
        if (void 0 === t) return {};
        if (t === Object(t)) return t;
        throw TypeError("Could not convert argument to dictionary");
      }
      function i(t) {
        this.tokens = [].slice.call(t);
      }
      function o(t, e) {
        if (t) throw TypeError("Decoder error");
        return e || 65533;
      }
      i.prototype = {
        endOfStream: function () {
          return !this.tokens.length;
        },
        read: function () {
          return this.tokens.length ? this.tokens.shift() : -1;
        },
        prepend: function (t) {
          if (Array.isArray(t)) for (; t.length; ) this.tokens.unshift(t.pop());
          else this.tokens.unshift(t);
        },
        push: function (t) {
          if (Array.isArray(t)) for (; t.length; ) this.tokens.push(t.shift());
          else this.tokens.push(t);
        },
      };
      var s = "utf-8";
      function a(t, e) {
        if (!(this instanceof a)) return new a(t, e);
        if ((t = void 0 !== t ? String(t).toLowerCase() : s) !== s)
          throw Error("Encoding not supported. Only utf-8 is supported");
        (e = n(e)),
          (this._streaming = !1),
          (this._BOMseen = !1),
          (this._decoder = null),
          (this._fatal = !!e.fatal),
          (this._ignoreBOM = !!e.ignoreBOM),
          Object.defineProperty(this, "encoding", { value: "utf-8" }),
          Object.defineProperty(this, "fatal", { value: this._fatal }),
          Object.defineProperty(this, "ignoreBOM", { value: this._ignoreBOM });
      }
      function u(t, e) {
        if (!(this instanceof u)) return new u(t, e);
        if ((t = void 0 !== t ? String(t).toLowerCase() : s) !== s)
          throw Error("Encoding not supported. Only utf-8 is supported");
        (e = n(e)),
          (this._streaming = !1),
          (this._encoder = null),
          (this._options = { fatal: !!e.fatal }),
          Object.defineProperty(this, "encoding", { value: "utf-8" });
      }
      function l(t) {
        var e = t.fatal,
          n = 0,
          i = 0,
          s = 0,
          a = 128,
          u = 191;
        this.handler = function (t, l) {
          if (-1 === l && 0 !== s) return (s = 0), o(e);
          if (-1 === l) return -1;
          if (0 === s) {
            if (r(l, 0, 127)) return l;
            if (r(l, 194, 223)) (s = 1), (n = l - 192);
            else if (r(l, 224, 239))
              224 === l && (a = 160),
                237 === l && (u = 159),
                (s = 2),
                (n = l - 224);
            else {
              if (!r(l, 240, 244)) return o(e);
              240 === l && (a = 144),
                244 === l && (u = 143),
                (s = 3),
                (n = l - 240);
            }
            return (n <<= 6 * s), null;
          }
          if (!r(l, a, u))
            return (n = s = i = 0), (a = 128), (u = 191), t.prepend(l), o(e);
          if (
            ((a = 128),
            (u = 191),
            (i += 1),
            (n += (l - 128) << (6 * (s - i))),
            i !== s)
          )
            return null;
          var c = n;
          return (n = s = i = 0), c;
        };
      }
      function c(t) {
        t.fatal,
          (this.handler = function (t, e) {
            if (-1 === e) return -1;
            if (r(e, 0, 127)) return e;
            r(e, 128, 2047)
              ? ((n = 1), (i = 192))
              : r(e, 2048, 65535)
              ? ((n = 2), (i = 224))
              : r(e, 65536, 1114111) && ((n = 3), (i = 240));
            for (var n, i, o = [(e >> (6 * n)) + i]; n > 0; ) {
              var s = e >> (6 * (n - 1));
              o.push(128 | (63 & s)), (n -= 1);
            }
            return o;
          });
      }
      (a.prototype = {
        decode: function (t, e) {
          (r =
            "object" == typeof t && t instanceof ArrayBuffer
              ? new Uint8Array(t)
              : "object" == typeof t &&
                "buffer" in t &&
                t.buffer instanceof ArrayBuffer
              ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
              : new Uint8Array(0)),
            (e = n(e)),
            this._streaming ||
              ((this._decoder = new l({ fatal: this._fatal })),
              (this._BOMseen = !1)),
            (this._streaming = !!e.stream);
          for (
            var r, o, s = new i(r), a = [];
            !s.endOfStream() && -1 !== (o = this._decoder.handler(s, s.read()));

          )
            null !== o && (Array.isArray(o) ? a.push.apply(a, o) : a.push(o));
          if (!this._streaming) {
            do {
              if (-1 === (o = this._decoder.handler(s, s.read()))) break;
              if (null === o) continue;
              Array.isArray(o) ? a.push.apply(a, o) : a.push(o);
            } while (!s.endOfStream());
            this._decoder = null;
          }
          return (
            !a.length ||
              -1 === ["utf-8"].indexOf(this.encoding) ||
              this._ignoreBOM ||
              this._BOMseen ||
              (65279 === a[0]
                ? ((this._BOMseen = !0), a.shift())
                : (this._BOMseen = !0)),
            (function (t) {
              for (var e = "", r = 0; r < t.length; ++r) {
                var n = t[r];
                n <= 65535
                  ? (e += String.fromCharCode(n))
                  : ((n -= 65536),
                    (e += String.fromCharCode(
                      (n >> 10) + 55296,
                      (1023 & n) + 56320
                    )));
              }
              return e;
            })(a)
          );
        },
      }),
        (u.prototype = {
          encode: function (t, e) {
            (t = t ? String(t) : ""),
              (e = n(e)),
              this._streaming || (this._encoder = new c(this._options)),
              (this._streaming = !!e.stream);
            for (
              var r,
                o = [],
                s = new i(
                  (function (t) {
                    for (
                      var e = String(t), r = e.length, n = 0, i = [];
                      n < r;

                    ) {
                      var o = e.charCodeAt(n);
                      if (o < 55296 || o > 57343) i.push(o);
                      else if (56320 <= o && o <= 57343) i.push(65533);
                      else if (55296 <= o && o <= 56319) {
                        if (n === r - 1) i.push(65533);
                        else {
                          var s = t.charCodeAt(n + 1);
                          if (56320 <= s && s <= 57343) {
                            var a = 1023 & o,
                              u = 1023 & s;
                            i.push(65536 + (a << 10) + u), (n += 1);
                          } else i.push(65533);
                        }
                      }
                      n += 1;
                    }
                    return i;
                  })(t)
                );
              !s.endOfStream() &&
              -1 !== (r = this._encoder.handler(s, s.read()));

            )
              Array.isArray(r) ? o.push.apply(o, r) : o.push(r);
            if (!this._streaming) {
              for (; -1 !== (r = this._encoder.handler(s, s.read())); )
                Array.isArray(r) ? o.push.apply(o, r) : o.push(r);
              this._encoder = null;
            }
            return new Uint8Array(o);
          },
        }),
        (e.TextEncoder = u),
        (e.TextDecoder = a);
    },
    34492: function (t, e, r) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(2265),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                );
              },
        o = n.useState,
        s = n.useEffect,
        a = n.useLayoutEffect,
        u = n.useDebugValue;
      function l(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
          var r = e();
          return !i(t, r);
        } catch (t) {
          return !0;
        }
      }
      var c =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (t, e) {
              return e();
            }
          : function (t, e) {
              var r = e(),
                n = o({ inst: { value: r, getSnapshot: e } }),
                i = n[0].inst,
                c = n[1];
              return (
                a(
                  function () {
                    (i.value = r), (i.getSnapshot = e), l(i) && c({ inst: i });
                  },
                  [t, r, e]
                ),
                s(
                  function () {
                    return (
                      l(i) && c({ inst: i }),
                      t(function () {
                        l(i) && c({ inst: i });
                      })
                    );
                  },
                  [t]
                ),
                u(r),
                r
              );
            };
      e.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c;
    },
    85107: function (t, e, r) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim/with-selector.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(2265),
        i = r(10554),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                );
              },
        s = i.useSyncExternalStore,
        a = n.useRef,
        u = n.useEffect,
        l = n.useMemo,
        c = n.useDebugValue;
      e.useSyncExternalStoreWithSelector = function (t, e, r, n, i) {
        var f = a(null);
        if (null === f.current) {
          var h = { hasValue: !1, value: null };
          f.current = h;
        } else h = f.current;
        var d = s(
          t,
          (f = l(
            function () {
              function t(t) {
                if (!u) {
                  if (
                    ((u = !0), (s = t), (t = n(t)), void 0 !== i && h.hasValue)
                  ) {
                    var e = h.value;
                    if (i(e, t)) return (a = e);
                  }
                  return (a = t);
                }
                if (((e = a), o(s, t))) return e;
                var r = n(t);
                return void 0 !== i && i(e, r) ? e : ((s = t), (a = r));
              }
              var s,
                a,
                u = !1,
                l = void 0 === r ? null : r;
              return [
                function () {
                  return t(e());
                },
                null === l
                  ? void 0
                  : function () {
                      return t(l());
                    },
              ];
            },
            [e, r, n, i]
          ))[0],
          f[1]
        );
        return (
          u(
            function () {
              (h.hasValue = !0), (h.value = d);
            },
            [d]
          ),
          c(d),
          d
        );
      };
    },
    10554: function (t, e, r) {
      "use strict";
      t.exports = r(34492);
    },
    35006: function (t, e, r) {
      "use strict";
      t.exports = r(85107);
    },
    3538: function (t, e, r) {
      "use strict";
      r.d(e, {
        v4: function () {
          return l;
        },
      });
      for (
        var n,
          i = new Uint8Array(16),
          o =
            /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
          s = [],
          a = 0;
        a < 256;
        ++a
      )
        s.push((a + 256).toString(16).substr(1));
      var u = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            r = (
              s[t[e + 0]] +
              s[t[e + 1]] +
              s[t[e + 2]] +
              s[t[e + 3]] +
              "-" +
              s[t[e + 4]] +
              s[t[e + 5]] +
              "-" +
              s[t[e + 6]] +
              s[t[e + 7]] +
              "-" +
              s[t[e + 8]] +
              s[t[e + 9]] +
              "-" +
              s[t[e + 10]] +
              s[t[e + 11]] +
              s[t[e + 12]] +
              s[t[e + 13]] +
              s[t[e + 14]] +
              s[t[e + 15]]
            ).toLowerCase();
          if (!("string" == typeof r && o.test(r)))
            throw TypeError("Stringified UUID is invalid");
          return r;
        },
        l = function (t, e, r) {
          var o =
            (t = t || {}).random ||
            (
              t.rng ||
              function () {
                if (
                  !n &&
                  !(n =
                    ("undefined" != typeof crypto &&
                      crypto.getRandomValues &&
                      crypto.getRandomValues.bind(crypto)) ||
                    ("undefined" != typeof msCrypto &&
                      "function" == typeof msCrypto.getRandomValues &&
                      msCrypto.getRandomValues.bind(msCrypto)))
                )
                  throw Error(
                    "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                  );
                return n(i);
              }
            )();
          if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), e)) {
            r = r || 0;
            for (var s = 0; s < 16; ++s) e[r + s] = o[s];
            return e;
          }
          return u(o);
        };
    },
    22988: function (t, e, r) {
      "use strict";
      function n() {
        return (n = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  ({}).hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(null, arguments);
      }
      r.d(e, {
        Z: function () {
          return n;
        },
      });
    },
    65376: function (t, e, r) {
      "use strict";
      function n(t) {
        if (!Number.isSafeInteger(t) || t < 0)
          throw Error(`positive integer expected, not ${t}`);
      }
      function i(t, ...e) {
        if (
          !(
            t instanceof Uint8Array ||
            (null != t &&
              "object" == typeof t &&
              "Uint8Array" === t.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (e.length > 0 && !e.includes(t.length))
          throw Error(
            `Uint8Array expected of length ${e}, not of length=${t.length}`
          );
      }
      function o(t) {
        if ("function" != typeof t || "function" != typeof t.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        n(t.outputLen), n(t.blockLen);
      }
      function s(t, e = !0) {
        if (t.destroyed) throw Error("Hash instance has been destroyed");
        if (e && t.finished)
          throw Error("Hash#digest() has already been called");
      }
      function a(t, e) {
        i(t);
        let r = e.outputLen;
        if (t.length < r)
          throw Error(
            `digestInto() expects output buffer of length at least ${r}`
          );
      }
      r.d(e, {
        Gg: function () {
          return s;
        },
        J8: function () {
          return a;
        },
        Rx: function () {
          return n;
        },
        aI: function () {
          return i;
        },
        vp: function () {
          return o;
        },
      }),
        (e.ZP = {
          number: n,
          bool: function (t) {
            if ("boolean" != typeof t)
              throw Error(`boolean expected, not ${t}`);
          },
          bytes: i,
          hash: o,
          exists: s,
          output: a,
        });
    },
    44815: function (t, e, r) {
      "use strict";
      r.d(e, {
        VR: function () {
          return a;
        },
        bc: function () {
          return o;
        },
        l3: function () {
          return s;
        },
      });
      var n = r(65376),
        i = r(68104);
      let o = (t, e, r) => (t & e) ^ (~t & r),
        s = (t, e, r) => (t & e) ^ (t & r) ^ (e & r);
      class a extends i.kb {
        constructor(t, e, r, n) {
          super(),
            (this.blockLen = t),
            (this.outputLen = e),
            (this.padOffset = r),
            (this.isLE = n),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(t)),
            (this.view = (0, i.GL)(this.buffer));
        }
        update(t) {
          (0, n.Gg)(this);
          let { view: e, buffer: r, blockLen: o } = this,
            s = (t = (0, i.O0)(t)).length;
          for (let n = 0; n < s; ) {
            let a = Math.min(o - this.pos, s - n);
            if (a === o) {
              let e = (0, i.GL)(t);
              for (; o <= s - n; n += o) this.process(e, n);
              continue;
            }
            r.set(t.subarray(n, n + a), this.pos),
              (this.pos += a),
              (n += a),
              this.pos === o && (this.process(e, 0), (this.pos = 0));
          }
          return (this.length += t.length), this.roundClean(), this;
        }
        digestInto(t) {
          (0, n.Gg)(this), (0, n.J8)(t, this), (this.finished = !0);
          let { buffer: e, view: r, blockLen: o, isLE: s } = this,
            { pos: a } = this;
          (e[a++] = 128),
            this.buffer.subarray(a).fill(0),
            this.padOffset > o - a && (this.process(r, 0), (a = 0));
          for (let t = a; t < o; t++) e[t] = 0;
          !(function (t, e, r, n) {
            if ("function" == typeof t.setBigUint64)
              return t.setBigUint64(e, r, n);
            let i = BigInt(32),
              o = BigInt(4294967295),
              s = Number((r >> i) & o),
              a = Number(r & o),
              u = n ? 4 : 0,
              l = n ? 0 : 4;
            t.setUint32(e + u, s, n), t.setUint32(e + l, a, n);
          })(r, o - 8, BigInt(8 * this.length), s),
            this.process(r, 0);
          let u = (0, i.GL)(t),
            l = this.outputLen;
          if (l % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let c = l / 4,
            f = this.get();
          if (c > f.length) throw Error("_sha2: outputLen bigger than state");
          for (let t = 0; t < c; t++) u.setUint32(4 * t, f[t], s);
        }
        digest() {
          let { buffer: t, outputLen: e } = this;
          this.digestInto(t);
          let r = t.slice(0, e);
          return this.destroy(), r;
        }
        _cloneInto(t) {
          t || (t = new this.constructor()), t.set(...this.get());
          let {
            blockLen: e,
            buffer: r,
            length: n,
            finished: i,
            destroyed: o,
            pos: s,
          } = this;
          return (
            (t.length = n),
            (t.pos = s),
            (t.finished = i),
            (t.destroyed = o),
            n % e && t.buffer.set(r),
            t
          );
        }
      }
    },
    75390: function (t, e, r) {
      "use strict";
      r.d(e, {
        EP: function () {
          return a;
        },
        SD: function () {
          return l;
        },
        Vl: function () {
          return s;
        },
        gm: function () {
          return u;
        },
        mk: function () {
          return c;
        },
      });
      let n = BigInt(4294967296 - 1),
        i = BigInt(32);
      function o(t, e = !1) {
        return e
          ? { h: Number(t & n), l: Number((t >> i) & n) }
          : { h: 0 | Number((t >> i) & n), l: 0 | Number(t & n) };
      }
      function s(t, e = !1) {
        let r = new Uint32Array(t.length),
          n = new Uint32Array(t.length);
        for (let i = 0; i < t.length; i++) {
          let { h: s, l: a } = o(t[i], e);
          [r[i], n[i]] = [s, a];
        }
        return [r, n];
      }
      let a = (t, e, r) => (t << r) | (e >>> (32 - r)),
        u = (t, e, r) => (e << r) | (t >>> (32 - r)),
        l = (t, e, r) => (e << (r - 32)) | (t >>> (64 - r)),
        c = (t, e, r) => (t << (r - 32)) | (e >>> (64 - r));
      e.ZP = {
        fromBig: o,
        split: s,
        toBig: (t, e) => (BigInt(t >>> 0) << i) | BigInt(e >>> 0),
        shrSH: (t, e, r) => t >>> r,
        shrSL: (t, e, r) => (t << (32 - r)) | (e >>> r),
        rotrSH: (t, e, r) => (t >>> r) | (e << (32 - r)),
        rotrSL: (t, e, r) => (t << (32 - r)) | (e >>> r),
        rotrBH: (t, e, r) => (t << (64 - r)) | (e >>> (r - 32)),
        rotrBL: (t, e, r) => (t >>> (r - 32)) | (e << (64 - r)),
        rotr32H: (t, e) => e,
        rotr32L: (t, e) => t,
        rotlSH: a,
        rotlSL: u,
        rotlBH: l,
        rotlBL: c,
        add: function (t, e, r, n) {
          let i = (e >>> 0) + (n >>> 0);
          return { h: (t + r + ((i / 4294967296) | 0)) | 0, l: 0 | i };
        },
        add3L: (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0),
        add3H: (t, e, r, n) => (e + r + n + ((t / 4294967296) | 0)) | 0,
        add4L: (t, e, r, n) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0),
        add4H: (t, e, r, n, i) => (e + r + n + i + ((t / 4294967296) | 0)) | 0,
        add5H: (t, e, r, n, i, o) =>
          (e + r + n + i + o + ((t / 4294967296) | 0)) | 0,
        add5L: (t, e, r, n, i) =>
          (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0),
      };
    },
    93557: function (t, e, r) {
      "use strict";
      r.d(e, {
        b: function () {
          return s;
        },
      });
      var n = r(65376),
        i = r(68104);
      class o extends i.kb {
        constructor(t, e) {
          super(), (this.finished = !1), (this.destroyed = !1), (0, n.vp)(t);
          let r = (0, i.O0)(e);
          if (
            ((this.iHash = t.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let o = this.blockLen,
            s = new Uint8Array(o);
          s.set(r.length > o ? t.create().update(r).digest() : r);
          for (let t = 0; t < s.length; t++) s[t] ^= 54;
          this.iHash.update(s), (this.oHash = t.create());
          for (let t = 0; t < s.length; t++) s[t] ^= 106;
          this.oHash.update(s), s.fill(0);
        }
        update(t) {
          return (0, n.Gg)(this), this.iHash.update(t), this;
        }
        digestInto(t) {
          (0, n.Gg)(this),
            (0, n.aI)(t, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(t),
            this.oHash.update(t),
            this.oHash.digestInto(t),
            this.destroy();
        }
        digest() {
          let t = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(t), t;
        }
        _cloneInto(t) {
          t || (t = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: e,
            iHash: r,
            finished: n,
            destroyed: i,
            blockLen: o,
            outputLen: s,
          } = this;
          return (
            (t.finished = n),
            (t.destroyed = i),
            (t.blockLen = o),
            (t.outputLen = s),
            (t.oHash = e._cloneInto(t.oHash)),
            (t.iHash = r._cloneInto(t.iHash)),
            t
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let s = (t, e, r) => new o(t, e).update(r).digest();
      s.create = (t, e) => new o(t, e);
    },
    65530: function (t, e, r) {
      "use strict";
      r.d(e, {
        J: function () {
          return l;
        },
      });
      var n = r(44815),
        i = r(68104);
      let o = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]),
        s = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        a = new Uint32Array(64);
      class u extends n.VR {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | s[0]),
            (this.B = 0 | s[1]),
            (this.C = 0 | s[2]),
            (this.D = 0 | s[3]),
            (this.E = 0 | s[4]),
            (this.F = 0 | s[5]),
            (this.G = 0 | s[6]),
            (this.H = 0 | s[7]);
        }
        get() {
          let { A: t, B: e, C: r, D: n, E: i, F: o, G: s, H: a } = this;
          return [t, e, r, n, i, o, s, a];
        }
        set(t, e, r, n, i, o, s, a) {
          (this.A = 0 | t),
            (this.B = 0 | e),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | i),
            (this.F = 0 | o),
            (this.G = 0 | s),
            (this.H = 0 | a);
        }
        process(t, e) {
          for (let r = 0; r < 16; r++, e += 4) a[r] = t.getUint32(e, !1);
          for (let t = 16; t < 64; t++) {
            let e = a[t - 15],
              r = a[t - 2],
              n = (0, i.np)(e, 7) ^ (0, i.np)(e, 18) ^ (e >>> 3),
              o = (0, i.np)(r, 17) ^ (0, i.np)(r, 19) ^ (r >>> 10);
            a[t] = (o + a[t - 7] + n + a[t - 16]) | 0;
          }
          let { A: r, B: s, C: u, D: l, E: c, F: f, G: h, H: d } = this;
          for (let t = 0; t < 64; t++) {
            let e =
                (d +
                  ((0, i.np)(c, 6) ^ (0, i.np)(c, 11) ^ (0, i.np)(c, 25)) +
                  (0, n.bc)(c, f, h) +
                  o[t] +
                  a[t]) |
                0,
              p =
                (((0, i.np)(r, 2) ^ (0, i.np)(r, 13) ^ (0, i.np)(r, 22)) +
                  (0, n.l3)(r, s, u)) |
                0;
            (d = h),
              (h = f),
              (f = c),
              (c = (l + e) | 0),
              (l = u),
              (u = s),
              (s = r),
              (r = (e + p) | 0);
          }
          (r = (r + this.A) | 0),
            (s = (s + this.B) | 0),
            (u = (u + this.C) | 0),
            (l = (l + this.D) | 0),
            (c = (c + this.E) | 0),
            (f = (f + this.F) | 0),
            (h = (h + this.G) | 0),
            (d = (d + this.H) | 0),
            this.set(r, s, u, l, c, f, h, d);
        }
        roundClean() {
          a.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let l = (0, i.hE)(() => new u());
    },
    35743: function (t, e, r) {
      "use strict";
      r.d(e, {
        HY: function () {
          return M;
        },
        R4: function () {
          return x;
        },
        fr: function () {
          return E;
        },
        x: function () {
          return P;
        },
      });
      var n = r(65376),
        i = r(75390),
        o = r(68104);
      let s = [],
        a = [],
        u = [],
        l = BigInt(0),
        c = BigInt(1),
        f = BigInt(2),
        h = BigInt(7),
        d = BigInt(256),
        p = BigInt(113);
      for (let t = 0, e = c, r = 1, n = 0; t < 24; t++) {
        ([r, n] = [n, (2 * r + 3 * n) % 5]),
          s.push(2 * (5 * n + r)),
          a.push((((t + 1) * (t + 2)) / 2) % 64);
        let i = l;
        for (let t = 0; t < 7; t++)
          (e = ((e << c) ^ ((e >> h) * p)) % d) & f &&
            (i ^= c << ((c << BigInt(t)) - c));
        u.push(i);
      }
      let [m, g] = (0, i.Vl)(u, !0),
        y = (t, e, r) => (r > 32 ? (0, i.SD)(t, e, r) : (0, i.EP)(t, e, r)),
        b = (t, e, r) => (r > 32 ? (0, i.mk)(t, e, r) : (0, i.gm)(t, e, r));
      class v extends o.kb {
        constructor(t, e, r, i = !1, s = 24) {
          if (
            (super(),
            (this.blockLen = t),
            (this.suffix = e),
            (this.outputLen = r),
            (this.enableXOF = i),
            (this.rounds = s),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, n.Rx)(r),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, o.Jq)(this.state));
        }
        keccak() {
          o.iA || (0, o.l1)(this.state32),
            (function (t, e = 24) {
              let r = new Uint32Array(10);
              for (let n = 24 - e; n < 24; n++) {
                for (let e = 0; e < 10; e++)
                  r[e] = t[e] ^ t[e + 10] ^ t[e + 20] ^ t[e + 30] ^ t[e + 40];
                for (let e = 0; e < 10; e += 2) {
                  let n = (e + 8) % 10,
                    i = (e + 2) % 10,
                    o = r[i],
                    s = r[i + 1],
                    a = y(o, s, 1) ^ r[n],
                    u = b(o, s, 1) ^ r[n + 1];
                  for (let r = 0; r < 50; r += 10)
                    (t[e + r] ^= a), (t[e + r + 1] ^= u);
                }
                let e = t[2],
                  i = t[3];
                for (let r = 0; r < 24; r++) {
                  let n = a[r],
                    o = y(e, i, n),
                    u = b(e, i, n),
                    l = s[r];
                  (e = t[l]), (i = t[l + 1]), (t[l] = o), (t[l + 1] = u);
                }
                for (let e = 0; e < 50; e += 10) {
                  for (let n = 0; n < 10; n++) r[n] = t[e + n];
                  for (let n = 0; n < 10; n++)
                    t[e + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10];
                }
                (t[0] ^= m[n]), (t[1] ^= g[n]);
              }
              r.fill(0);
            })(this.state32, this.rounds),
            o.iA || (0, o.l1)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(t) {
          (0, n.Gg)(this);
          let { blockLen: e, state: r } = this,
            i = (t = (0, o.O0)(t)).length;
          for (let n = 0; n < i; ) {
            let o = Math.min(e - this.pos, i - n);
            for (let e = 0; e < o; e++) r[this.pos++] ^= t[n++];
            this.pos === e && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: t, suffix: e, pos: r, blockLen: n } = this;
          (t[r] ^= e),
            (128 & e) != 0 && r === n - 1 && this.keccak(),
            (t[n - 1] ^= 128),
            this.keccak();
        }
        writeInto(t) {
          (0, n.Gg)(this, !1), (0, n.aI)(t), this.finish();
          let e = this.state,
            { blockLen: r } = this;
          for (let n = 0, i = t.length; n < i; ) {
            this.posOut >= r && this.keccak();
            let o = Math.min(r - this.posOut, i - n);
            t.set(e.subarray(this.posOut, this.posOut + o), n),
              (this.posOut += o),
              (n += o);
          }
          return t;
        }
        xofInto(t) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(t);
        }
        xof(t) {
          return (0, n.Rx)(t), this.xofInto(new Uint8Array(t));
        }
        digestInto(t) {
          if (((0, n.J8)(t, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(t), this.destroy(), t;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(t) {
          let {
            blockLen: e,
            suffix: r,
            outputLen: n,
            rounds: i,
            enableXOF: o,
          } = this;
          return (
            t || (t = new v(e, r, n, o, i)),
            t.state32.set(this.state32),
            (t.pos = this.pos),
            (t.posOut = this.posOut),
            (t.finished = this.finished),
            (t.rounds = i),
            (t.suffix = r),
            (t.outputLen = n),
            (t.enableXOF = o),
            (t.destroyed = this.destroyed),
            t
          );
        }
      }
      let w = (t, e, r) => (0, o.hE)(() => new v(e, t, r)),
        x = w(1, 144, 28),
        E = w(1, 136, 32),
        M = w(1, 104, 48),
        P = w(1, 72, 64);
    },
    68104: function (t, e, r) {
      "use strict";
      r.d(e, {
        kb: function () {
          return d;
        },
        l1: function () {
          return c;
        },
        eV: function () {
          return h;
        },
        GL: function () {
          return s;
        },
        iA: function () {
          return u;
        },
        O6: function () {
          return m;
        },
        np: function () {
          return a;
        },
        O0: function () {
          return f;
        },
        Jq: function () {
          return o;
        },
        hE: function () {
          return p;
        },
      });
      let n =
        "object" == typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0;
      var i = r(65376);
      let o = (t) =>
          new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
        s = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
        a = (t, e) => (t << (32 - e)) | (t >>> e),
        u = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0],
        l = (t) =>
          ((t << 24) & 4278190080) |
          ((t << 8) & 16711680) |
          ((t >>> 8) & 65280) |
          ((t >>> 24) & 255);
      function c(t) {
        for (let e = 0; e < t.length; e++) t[e] = l(t[e]);
      }
      function f(t) {
        return (
          "string" == typeof t &&
            (t = (function (t) {
              if ("string" != typeof t)
                throw Error(`utf8ToBytes expected string, got ${typeof t}`);
              return new Uint8Array(new TextEncoder().encode(t));
            })(t)),
          (0, i.aI)(t),
          t
        );
      }
      function h(...t) {
        let e = 0;
        for (let r = 0; r < t.length; r++) {
          let n = t[r];
          (0, i.aI)(n), (e += n.length);
        }
        let r = new Uint8Array(e);
        for (let e = 0, n = 0; e < t.length; e++) {
          let i = t[e];
          r.set(i, n), (n += i.length);
        }
        return r;
      }
      class d {
        clone() {
          return this._cloneInto();
        }
      }
      function p(t) {
        let e = (e) => t().update(f(e)).digest(),
          r = t();
        return (
          (e.outputLen = r.outputLen),
          (e.blockLen = r.blockLen),
          (e.create = () => t()),
          e
        );
      }
      function m(t = 32) {
        if (n && "function" == typeof n.getRandomValues)
          return n.getRandomValues(new Uint8Array(t));
        throw Error("crypto.getRandomValues must be defined");
      }
    },
    78149: function (t, e, r) {
      "use strict";
      function n(t, e, { checkForDefaultPrevented: r = !0 } = {}) {
        return function (n) {
          if ((null == t || t(n), !1 === r || !n.defaultPrevented))
            return null == e ? void 0 : e(n);
        };
      }
      r.d(e, {
        M: function () {
          return n;
        },
      });
    },
    1584: function (t, e, r) {
      "use strict";
      r.d(e, {
        F: function () {
          return i;
        },
        e: function () {
          return o;
        },
      });
      var n = r(2265);
      function i(...t) {
        return (e) =>
          t.forEach((t) => {
            "function" == typeof t ? t(e) : null != t && (t.current = e);
          });
      }
      function o(...t) {
        return (0, n.useCallback)(i(...t), t);
      }
    },
    98324: function (t, e, r) {
      "use strict";
      r.d(e, {
        b: function () {
          return o;
        },
        k: function () {
          return i;
        },
      });
      var n = r(2265);
      function i(t, e) {
        let r = (0, n.createContext)(e);
        function i(t) {
          let { children: e, ...i } = t,
            o = (0, n.useMemo)(() => i, Object.values(i));
          return (0, n.createElement)(r.Provider, { value: o }, e);
        }
        return (
          (i.displayName = t + "Provider"),
          [
            i,
            function (i) {
              let o = (0, n.useContext)(r);
              if (o) return o;
              if (void 0 !== e) return e;
              throw Error(`\`${i}\` must be used within \`${t}\``);
            },
          ]
        );
      }
      function o(t, e = []) {
        let r = [],
          i = () => {
            let e = r.map((t) => (0, n.createContext)(t));
            return function (r) {
              let i = (null == r ? void 0 : r[t]) || e;
              return (0, n.useMemo)(
                () => ({ [`__scope${t}`]: { ...r, [t]: i } }),
                [r, i]
              );
            };
          };
        return (
          (i.scopeName = t),
          [
            function (e, i) {
              let o = (0, n.createContext)(i),
                s = r.length;
              function a(e) {
                let { scope: r, children: i, ...a } = e,
                  u = (null == r ? void 0 : r[t][s]) || o,
                  l = (0, n.useMemo)(() => a, Object.values(a));
                return (0, n.createElement)(u.Provider, { value: l }, i);
              }
              return (
                (r = [...r, i]),
                (a.displayName = e + "Provider"),
                [
                  a,
                  function (r, a) {
                    let u = (null == a ? void 0 : a[t][s]) || o,
                      l = (0, n.useContext)(u);
                    if (l) return l;
                    if (void 0 !== i) return i;
                    throw Error(`\`${r}\` must be used within \`${e}\``);
                  },
                ]
              );
            },
            (function (...t) {
              let e = t[0];
              if (1 === t.length) return e;
              let r = () => {
                let r = t.map((t) => ({
                  useScope: t(),
                  scopeName: t.scopeName,
                }));
                return function (t) {
                  let i = r.reduce((e, { useScope: r, scopeName: n }) => {
                    let i = r(t)[`__scope${n}`];
                    return { ...e, ...i };
                  }, {});
                  return (0, n.useMemo)(
                    () => ({ [`__scope${e.scopeName}`]: i }),
                    [i]
                  );
                };
              };
              return (r.scopeName = e.scopeName), r;
            })(i, ...e),
          ]
        );
      }
    },
    53938: function (t, e, r) {
      "use strict";
      let n;
      r.d(e, {
        XB: function () {
          return h;
        },
      });
      var i = r(22988),
        o = r(2265),
        s = r(78149),
        a = r(25171),
        u = r(1584),
        l = r(75137);
      let c = "dismissableLayer.update",
        f = (0, o.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        h = (0, o.forwardRef)((t, e) => {
          var r;
          let {
              disableOutsidePointerEvents: h = !1,
              onEscapeKeyDown: m,
              onPointerDownOutside: g,
              onFocusOutside: y,
              onInteractOutside: b,
              onDismiss: v,
              ...w
            } = t,
            x = (0, o.useContext)(f),
            [E, M] = (0, o.useState)(null),
            P =
              null !== (r = null == E ? void 0 : E.ownerDocument) &&
              void 0 !== r
                ? r
                : null == globalThis
                ? void 0
                : globalThis.document,
            [, B] = (0, o.useState)({}),
            A = (0, u.e)(e, (t) => M(t)),
            S = Array.from(x.layers),
            [C] = [...x.layersWithOutsidePointerEventsDisabled].slice(-1),
            I = S.indexOf(C),
            O = E ? S.indexOf(E) : -1,
            _ = x.layersWithOutsidePointerEventsDisabled.size > 0,
            k = O >= I,
            $ = (function (
              t,
              e = null == globalThis ? void 0 : globalThis.document
            ) {
              let r = (0, l.W)(t),
                n = (0, o.useRef)(!1),
                i = (0, o.useRef)(() => {});
              return (
                (0, o.useEffect)(() => {
                  let t = (t) => {
                      if (t.target && !n.current) {
                        let n = { originalEvent: t };
                        function o() {
                          p("dismissableLayer.pointerDownOutside", r, n, {
                            discrete: !0,
                          });
                        }
                        "touch" === t.pointerType
                          ? (e.removeEventListener("click", i.current),
                            (i.current = o),
                            e.addEventListener("click", i.current, {
                              once: !0,
                            }))
                          : o();
                      } else e.removeEventListener("click", i.current);
                      n.current = !1;
                    },
                    o = window.setTimeout(() => {
                      e.addEventListener("pointerdown", t);
                    }, 0);
                  return () => {
                    window.clearTimeout(o),
                      e.removeEventListener("pointerdown", t),
                      e.removeEventListener("click", i.current);
                  };
                }, [e, r]),
                { onPointerDownCapture: () => (n.current = !0) }
              );
            })((t) => {
              let e = t.target,
                r = [...x.branches].some((t) => t.contains(e));
              !k ||
                r ||
                (null == g || g(t),
                null == b || b(t),
                t.defaultPrevented || null == v || v());
            }, P),
            R = (function (
              t,
              e = null == globalThis ? void 0 : globalThis.document
            ) {
              let r = (0, l.W)(t),
                n = (0, o.useRef)(!1);
              return (
                (0, o.useEffect)(() => {
                  let t = (t) => {
                    t.target &&
                      !n.current &&
                      p(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: t },
                        { discrete: !1 }
                      );
                  };
                  return (
                    e.addEventListener("focusin", t),
                    () => e.removeEventListener("focusin", t)
                  );
                }, [e, r]),
                {
                  onFocusCapture: () => (n.current = !0),
                  onBlurCapture: () => (n.current = !1),
                }
              );
            })((t) => {
              let e = t.target;
              [...x.branches].some((t) => t.contains(e)) ||
                (null == y || y(t),
                null == b || b(t),
                t.defaultPrevented || null == v || v());
            }, P);
          return (
            !(function (
              t,
              e = null == globalThis ? void 0 : globalThis.document
            ) {
              let r = (0, l.W)(t);
              (0, o.useEffect)(() => {
                let t = (t) => {
                  "Escape" === t.key && r(t);
                };
                return (
                  e.addEventListener("keydown", t),
                  () => e.removeEventListener("keydown", t)
                );
              }, [r, e]);
            })((t) => {
              O !== x.layers.size - 1 ||
                (null == m || m(t),
                !t.defaultPrevented && v && (t.preventDefault(), v()));
            }, P),
            (0, o.useEffect)(() => {
              if (E)
                return (
                  h &&
                    (0 === x.layersWithOutsidePointerEventsDisabled.size &&
                      ((n = P.body.style.pointerEvents),
                      (P.body.style.pointerEvents = "none")),
                    x.layersWithOutsidePointerEventsDisabled.add(E)),
                  x.layers.add(E),
                  d(),
                  () => {
                    h &&
                      1 === x.layersWithOutsidePointerEventsDisabled.size &&
                      (P.body.style.pointerEvents = n);
                  }
                );
            }, [E, P, h, x]),
            (0, o.useEffect)(
              () => () => {
                E &&
                  (x.layers.delete(E),
                  x.layersWithOutsidePointerEventsDisabled.delete(E),
                  d());
              },
              [E, x]
            ),
            (0, o.useEffect)(() => {
              let t = () => B({});
              return (
                document.addEventListener(c, t),
                () => document.removeEventListener(c, t)
              );
            }, []),
            (0, o.createElement)(
              a.WV.div,
              (0, i.Z)({}, w, {
                ref: A,
                style: {
                  pointerEvents: _ ? (k ? "auto" : "none") : void 0,
                  ...t.style,
                },
                onFocusCapture: (0, s.M)(t.onFocusCapture, R.onFocusCapture),
                onBlurCapture: (0, s.M)(t.onBlurCapture, R.onBlurCapture),
                onPointerDownCapture: (0, s.M)(
                  t.onPointerDownCapture,
                  $.onPointerDownCapture
                ),
              })
            )
          );
        });
      function d() {
        let t = new CustomEvent(c);
        document.dispatchEvent(t);
      }
      function p(t, e, r, { discrete: n }) {
        let i = r.originalEvent.target,
          o = new CustomEvent(t, { bubbles: !1, cancelable: !0, detail: r });
        e && i.addEventListener(t, e, { once: !0 }),
          n ? (0, a.jH)(i, o) : i.dispatchEvent(o);
      }
    },
    53201: function (t, e, r) {
      "use strict";
      r.d(e, {
        M: function () {
          return u;
        },
      });
      var n,
        i = r(2265),
        o = r(1336);
      let s = (n || (n = r.t(i, 2)))["useId".toString()] || (() => void 0),
        a = 0;
      function u(t) {
        let [e, r] = i.useState(s());
        return (
          (0, o.b)(() => {
            t || r((t) => (null != t ? t : String(a++)));
          }, [t]),
          t || (e ? `radix-${e}` : "")
        );
      }
    },
    25510: function (t, e, r) {
      "use strict";
      r.d(e, {
        ee: function () {
          return tL;
        },
        Eh: function () {
          return tN;
        },
        VY: function () {
          return tF;
        },
        fC: function () {
          return tT;
        },
        D7: function () {
          return tM;
        },
      });
      var n = r(22988),
        i = r(2265);
      let o = ["top", "right", "bottom", "left"],
        s = Math.min,
        a = Math.max,
        u = Math.round,
        l = Math.floor,
        c = (t) => ({ x: t, y: t }),
        f = { left: "right", right: "left", bottom: "top", top: "bottom" },
        h = { start: "end", end: "start" };
      function d(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function p(t) {
        return t.split("-")[0];
      }
      function m(t) {
        return t.split("-")[1];
      }
      function g(t) {
        return "x" === t ? "y" : "x";
      }
      function y(t) {
        return "y" === t ? "height" : "width";
      }
      function b(t) {
        return ["top", "bottom"].includes(p(t)) ? "y" : "x";
      }
      function v(t) {
        return t.replace(/start|end/g, (t) => h[t]);
      }
      function w(t) {
        return t.replace(/left|right|bottom|top/g, (t) => f[t]);
      }
      function x(t) {
        return "number" != typeof t
          ? { top: 0, right: 0, bottom: 0, left: 0, ...t }
          : { top: t, right: t, bottom: t, left: t };
      }
      function E(t) {
        return {
          ...t,
          top: t.y,
          left: t.x,
          right: t.x + t.width,
          bottom: t.y + t.height,
        };
      }
      function M(t, e, r) {
        let n,
          { reference: i, floating: o } = t,
          s = b(e),
          a = g(b(e)),
          u = y(a),
          l = p(e),
          c = "y" === s,
          f = i.x + i.width / 2 - o.width / 2,
          h = i.y + i.height / 2 - o.height / 2,
          d = i[u] / 2 - o[u] / 2;
        switch (l) {
          case "top":
            n = { x: f, y: i.y - o.height };
            break;
          case "bottom":
            n = { x: f, y: i.y + i.height };
            break;
          case "right":
            n = { x: i.x + i.width, y: h };
            break;
          case "left":
            n = { x: i.x - o.width, y: h };
            break;
          default:
            n = { x: i.x, y: i.y };
        }
        switch (m(e)) {
          case "start":
            n[a] -= d * (r && c ? -1 : 1);
            break;
          case "end":
            n[a] += d * (r && c ? -1 : 1);
        }
        return n;
      }
      let P = async (t, e, r) => {
        let {
            placement: n = "bottom",
            strategy: i = "absolute",
            middleware: o = [],
            platform: s,
          } = r,
          a = o.filter(Boolean),
          u = await (null == s.isRTL ? void 0 : s.isRTL(e)),
          l = await s.getElementRects({
            reference: t,
            floating: e,
            strategy: i,
          }),
          { x: c, y: f } = M(l, n, u),
          h = n,
          d = {},
          p = 0;
        for (let r = 0; r < a.length; r++) {
          let { name: o, fn: m } = a[r],
            {
              x: g,
              y: y,
              data: b,
              reset: v,
            } = await m({
              x: c,
              y: f,
              initialPlacement: n,
              placement: h,
              strategy: i,
              middlewareData: d,
              rects: l,
              platform: s,
              elements: { reference: t, floating: e },
            });
          (c = null != g ? g : c),
            (f = null != y ? y : f),
            (d = { ...d, [o]: { ...d[o], ...b } }),
            v &&
              p <= 50 &&
              (p++,
              "object" == typeof v &&
                (v.placement && (h = v.placement),
                v.rects &&
                  (l =
                    !0 === v.rects
                      ? await s.getElementRects({
                          reference: t,
                          floating: e,
                          strategy: i,
                        })
                      : v.rects),
                ({ x: c, y: f } = M(l, h, u))),
              (r = -1));
        }
        return { x: c, y: f, placement: h, strategy: i, middlewareData: d };
      };
      async function B(t, e) {
        var r;
        void 0 === e && (e = {});
        let { x: n, y: i, platform: o, rects: s, elements: a, strategy: u } = t,
          {
            boundary: l = "clippingAncestors",
            rootBoundary: c = "viewport",
            elementContext: f = "floating",
            altBoundary: h = !1,
            padding: p = 0,
          } = d(e, t),
          m = x(p),
          g = a[h ? ("floating" === f ? "reference" : "floating") : f],
          y = E(
            await o.getClippingRect({
              element:
                null ==
                  (r = await (null == o.isElement ? void 0 : o.isElement(g))) ||
                r
                  ? g
                  : g.contextElement ||
                    (await (null == o.getDocumentElement
                      ? void 0
                      : o.getDocumentElement(a.floating))),
              boundary: l,
              rootBoundary: c,
              strategy: u,
            })
          ),
          b = "floating" === f ? { ...s.floating, x: n, y: i } : s.reference,
          v = await (null == o.getOffsetParent
            ? void 0
            : o.getOffsetParent(a.floating)),
          w = ((await (null == o.isElement ? void 0 : o.isElement(v))) &&
            (await (null == o.getScale ? void 0 : o.getScale(v)))) || {
            x: 1,
            y: 1,
          },
          M = E(
            o.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: a,
                  rect: b,
                  offsetParent: v,
                  strategy: u,
                })
              : b
          );
        return {
          top: (y.top - M.top + m.top) / w.y,
          bottom: (M.bottom - y.bottom + m.bottom) / w.y,
          left: (y.left - M.left + m.left) / w.x,
          right: (M.right - y.right + m.right) / w.x,
        };
      }
      function A(t, e) {
        return {
          top: t.top - e.height,
          right: t.right - e.width,
          bottom: t.bottom - e.height,
          left: t.left - e.width,
        };
      }
      function S(t) {
        return o.some((e) => t[e] >= 0);
      }
      async function C(t, e) {
        let { placement: r, platform: n, elements: i } = t,
          o = await (null == n.isRTL ? void 0 : n.isRTL(i.floating)),
          s = p(r),
          a = m(r),
          u = "y" === b(r),
          l = ["left", "top"].includes(s) ? -1 : 1,
          c = o && u ? -1 : 1,
          f = d(e, t),
          {
            mainAxis: h,
            crossAxis: g,
            alignmentAxis: y,
          } = "number" == typeof f
            ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
            : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...f };
        return (
          a && "number" == typeof y && (g = "end" === a ? -1 * y : y),
          u ? { x: g * c, y: h * l } : { x: h * l, y: g * c }
        );
      }
      function I(t) {
        return k(t) ? (t.nodeName || "").toLowerCase() : "#document";
      }
      function O(t) {
        var e;
        return (
          (null == t || null == (e = t.ownerDocument)
            ? void 0
            : e.defaultView) || window
        );
      }
      function _(t) {
        var e;
        return null ==
          (e = (k(t) ? t.ownerDocument : t.document) || window.document)
          ? void 0
          : e.documentElement;
      }
      function k(t) {
        return t instanceof Node || t instanceof O(t).Node;
      }
      function $(t) {
        return t instanceof Element || t instanceof O(t).Element;
      }
      function R(t) {
        return t instanceof HTMLElement || t instanceof O(t).HTMLElement;
      }
      function U(t) {
        return (
          "undefined" != typeof ShadowRoot &&
          (t instanceof ShadowRoot || t instanceof O(t).ShadowRoot)
        );
      }
      function T(t) {
        let { overflow: e, overflowX: r, overflowY: n, display: i } = z(t);
        return (
          /auto|scroll|overlay|hidden|clip/.test(e + n + r) &&
          !["inline", "contents"].includes(i)
        );
      }
      function L(t) {
        let e = N(),
          r = z(t);
        return (
          "none" !== r.transform ||
          "none" !== r.perspective ||
          (!!r.containerType && "normal" !== r.containerType) ||
          (!e && !!r.backdropFilter && "none" !== r.backdropFilter) ||
          (!e && !!r.filter && "none" !== r.filter) ||
          ["transform", "perspective", "filter"].some((t) =>
            (r.willChange || "").includes(t)
          ) ||
          ["paint", "layout", "strict", "content"].some((t) =>
            (r.contain || "").includes(t)
          )
        );
      }
      function F(t) {
        let e = D(t);
        for (; R(e) && !j(e); ) {
          if (L(e)) return e;
          e = D(e);
        }
        return null;
      }
      function N() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function j(t) {
        return ["html", "body", "#document"].includes(I(t));
      }
      function z(t) {
        return O(t).getComputedStyle(t);
      }
      function G(t) {
        return $(t)
          ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
          : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function D(t) {
        if ("html" === I(t)) return t;
        let e = t.assignedSlot || t.parentNode || (U(t) && t.host) || _(t);
        return U(e) ? e.host : e;
      }
      function q(t, e, r) {
        var n;
        void 0 === e && (e = []), void 0 === r && (r = !0);
        let i = (function t(e) {
            let r = D(e);
            return j(r)
              ? e.ownerDocument
                ? e.ownerDocument.body
                : e.body
              : R(r) && T(r)
              ? r
              : t(r);
          })(t),
          o = i === (null == (n = t.ownerDocument) ? void 0 : n.body),
          s = O(i);
        return o
          ? e.concat(
              s,
              s.visualViewport || [],
              T(i) ? i : [],
              s.frameElement && r ? q(s.frameElement) : []
            )
          : e.concat(i, q(i, [], r));
      }
      function H(t) {
        let e = z(t),
          r = parseFloat(e.width) || 0,
          n = parseFloat(e.height) || 0,
          i = R(t),
          o = i ? t.offsetWidth : r,
          s = i ? t.offsetHeight : n,
          a = u(r) !== o || u(n) !== s;
        return a && ((r = o), (n = s)), { width: r, height: n, $: a };
      }
      function V(t) {
        return $(t) ? t : t.contextElement;
      }
      function Z(t) {
        let e = V(t);
        if (!R(e)) return c(1);
        let r = e.getBoundingClientRect(),
          { width: n, height: i, $: o } = H(e),
          s = (o ? u(r.width) : r.width) / n,
          a = (o ? u(r.height) : r.height) / i;
        return (
          (s && Number.isFinite(s)) || (s = 1),
          (a && Number.isFinite(a)) || (a = 1),
          { x: s, y: a }
        );
      }
      let W = c(0);
      function K(t) {
        let e = O(t);
        return N() && e.visualViewport
          ? { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop }
          : W;
      }
      function Y(t, e, r, n) {
        var i;
        void 0 === e && (e = !1), void 0 === r && (r = !1);
        let o = t.getBoundingClientRect(),
          s = V(t),
          a = c(1);
        e && (n ? $(n) && (a = Z(n)) : (a = Z(t)));
        let u = (void 0 === (i = r) && (i = !1), n && (!i || n === O(s)) && i)
            ? K(s)
            : c(0),
          l = (o.left + u.x) / a.x,
          f = (o.top + u.y) / a.y,
          h = o.width / a.x,
          d = o.height / a.y;
        if (s) {
          let t = O(s),
            e = n && $(n) ? O(n) : n,
            r = t.frameElement;
          for (; r && n && e !== t; ) {
            let t = Z(r),
              e = r.getBoundingClientRect(),
              n = z(r),
              i = e.left + (r.clientLeft + parseFloat(n.paddingLeft)) * t.x,
              o = e.top + (r.clientTop + parseFloat(n.paddingTop)) * t.y;
            (l *= t.x),
              (f *= t.y),
              (h *= t.x),
              (d *= t.y),
              (l += i),
              (f += o),
              (r = O(r).frameElement);
          }
        }
        return E({ width: h, height: d, x: l, y: f });
      }
      let J = [":popover-open", ":modal"];
      function Q(t) {
        let e = !1,
          r = 0,
          n = 0;
        if (
          (J.forEach((r) => {
            !(function (r) {
              try {
                e = e || t.matches(r);
              } catch (t) {}
            })(r);
          }),
          e)
        ) {
          let e = F(t);
          if (e) {
            let t = e.getBoundingClientRect();
            (r = t.x), (n = t.y);
          }
        }
        return [e, r, n];
      }
      function X(t) {
        return Y(_(t)).left + G(t).scrollLeft;
      }
      function tt(t, e, r) {
        let n;
        if ("viewport" === e)
          n = (function (t, e) {
            let r = O(t),
              n = _(t),
              i = r.visualViewport,
              o = n.clientWidth,
              s = n.clientHeight,
              a = 0,
              u = 0;
            if (i) {
              (o = i.width), (s = i.height);
              let t = N();
              (!t || (t && "fixed" === e)) &&
                ((a = i.offsetLeft), (u = i.offsetTop));
            }
            return { width: o, height: s, x: a, y: u };
          })(t, r);
        else if ("document" === e)
          n = (function (t) {
            let e = _(t),
              r = G(t),
              n = t.ownerDocument.body,
              i = a(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth),
              o = a(
                e.scrollHeight,
                e.clientHeight,
                n.scrollHeight,
                n.clientHeight
              ),
              s = -r.scrollLeft + X(t),
              u = -r.scrollTop;
            return (
              "rtl" === z(n).direction &&
                (s += a(e.clientWidth, n.clientWidth) - i),
              { width: i, height: o, x: s, y: u }
            );
          })(_(t));
        else if ($(e))
          n = (function (t, e) {
            let r = Y(t, !0, "fixed" === e),
              n = r.top + t.clientTop,
              i = r.left + t.clientLeft,
              o = R(t) ? Z(t) : c(1),
              s = t.clientWidth * o.x;
            return {
              width: s,
              height: t.clientHeight * o.y,
              x: i * o.x,
              y: n * o.y,
            };
          })(e, r);
        else {
          let r = K(t);
          n = { ...e, x: e.x - r.x, y: e.y - r.y };
        }
        return E(n);
      }
      function te(t, e) {
        return R(t) && "fixed" !== z(t).position
          ? e
            ? e(t)
            : t.offsetParent
          : null;
      }
      function tr(t, e) {
        let r = O(t);
        if (!R(t)) return r;
        let n = te(t, e);
        for (
          ;
          n &&
          ["table", "td", "th"].includes(I(n)) &&
          "static" === z(n).position;

        )
          n = te(n, e);
        return n &&
          ("html" === I(n) ||
            ("body" === I(n) && "static" === z(n).position && !L(n)))
          ? r
          : n || F(t) || r;
      }
      let tn = async function (t) {
          let e = this.getOffsetParent || tr,
            r = this.getDimensions;
          return {
            reference: (function (t, e, r, n) {
              let i = R(e),
                o = _(e),
                s = "fixed" === r,
                a = Y(t, !0, s, e),
                u = { scrollLeft: 0, scrollTop: 0 },
                l = c(0);
              if (i || (!i && !s)) {
                if ((("body" !== I(e) || T(o)) && (u = G(e)), i)) {
                  let t = Y(e, !0, s, e);
                  (l.x = t.x + e.clientLeft), (l.y = t.y + e.clientTop);
                } else o && (l.x = X(o));
              }
              let f = a.left + u.scrollLeft - l.x,
                h = a.top + u.scrollTop - l.y,
                [d, p, m] = Q(n);
              return (
                d &&
                  ((f += p),
                  (h += m),
                  i && ((f += e.clientLeft), (h += e.clientTop))),
                { x: f, y: h, width: a.width, height: a.height }
              );
            })(t.reference, await e(t.floating), t.strategy, t.floating),
            floating: { x: 0, y: 0, ...(await r(t.floating)) },
          };
        },
        ti = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (t) {
            let { elements: e, rect: r, offsetParent: n, strategy: i } = t,
              o = _(n),
              [s] = e ? Q(e.floating) : [!1];
            if (n === o || s) return r;
            let a = { scrollLeft: 0, scrollTop: 0 },
              u = c(1),
              l = c(0),
              f = R(n);
            if (
              (f || (!f && "fixed" !== i)) &&
              (("body" !== I(n) || T(o)) && (a = G(n)), R(n))
            ) {
              let t = Y(n);
              (u = Z(n)), (l.x = t.x + n.clientLeft), (l.y = t.y + n.clientTop);
            }
            return {
              width: r.width * u.x,
              height: r.height * u.y,
              x: r.x * u.x - a.scrollLeft * u.x + l.x,
              y: r.y * u.y - a.scrollTop * u.y + l.y,
            };
          },
          getDocumentElement: _,
          getClippingRect: function (t) {
            let { element: e, boundary: r, rootBoundary: n, strategy: i } = t,
              o = [
                ...("clippingAncestors" === r
                  ? (function (t, e) {
                      let r = e.get(t);
                      if (r) return r;
                      let n = q(t, [], !1).filter(
                          (t) => $(t) && "body" !== I(t)
                        ),
                        i = null,
                        o = "fixed" === z(t).position,
                        s = o ? D(t) : t;
                      for (; $(s) && !j(s); ) {
                        let e = z(s),
                          r = L(s);
                        r || "fixed" !== e.position || (i = null),
                          (
                            o
                              ? !r && !i
                              : (!r &&
                                  "static" === e.position &&
                                  !!i &&
                                  ["absolute", "fixed"].includes(i.position)) ||
                                (T(s) &&
                                  !r &&
                                  (function t(e, r) {
                                    let n = D(e);
                                    return (
                                      !(n === r || !$(n) || j(n)) &&
                                      ("fixed" === z(n).position || t(n, r))
                                    );
                                  })(t, s))
                          )
                            ? (n = n.filter((t) => t !== s))
                            : (i = e),
                          (s = D(s));
                      }
                      return e.set(t, n), n;
                    })(e, this._c)
                  : [].concat(r)),
                n,
              ],
              u = o[0],
              l = o.reduce((t, r) => {
                let n = tt(e, r, i);
                return (
                  (t.top = a(n.top, t.top)),
                  (t.right = s(n.right, t.right)),
                  (t.bottom = s(n.bottom, t.bottom)),
                  (t.left = a(n.left, t.left)),
                  t
                );
              }, tt(e, u, i));
            return {
              width: l.right - l.left,
              height: l.bottom - l.top,
              x: l.left,
              y: l.top,
            };
          },
          getOffsetParent: tr,
          getElementRects: tn,
          getClientRects: function (t) {
            return Array.from(t.getClientRects());
          },
          getDimensions: function (t) {
            let { width: e, height: r } = H(t);
            return { width: e, height: r };
          },
          getScale: Z,
          isElement: $,
          isRTL: function (t) {
            return "rtl" === z(t).direction;
          },
        },
        to = (t) => ({
          name: "arrow",
          options: t,
          async fn(e) {
            let {
                x: r,
                y: n,
                placement: i,
                rects: o,
                platform: u,
                elements: l,
                middlewareData: c,
              } = e,
              { element: f, padding: h = 0 } = d(t, e) || {};
            if (null == f) return {};
            let p = x(h),
              v = { x: r, y: n },
              w = g(b(i)),
              E = y(w),
              M = await u.getDimensions(f),
              P = "y" === w,
              B = P ? "clientHeight" : "clientWidth",
              A = o.reference[E] + o.reference[w] - v[w] - o.floating[E],
              S = v[w] - o.reference[w],
              C = await (null == u.getOffsetParent
                ? void 0
                : u.getOffsetParent(f)),
              I = C ? C[B] : 0;
            (I && (await (null == u.isElement ? void 0 : u.isElement(C)))) ||
              (I = l.floating[B] || o.floating[E]);
            let O = I / 2 - M[E] / 2 - 1,
              _ = s(p[P ? "top" : "left"], O),
              k = s(p[P ? "bottom" : "right"], O),
              $ = I - M[E] - k,
              R = I / 2 - M[E] / 2 + (A / 2 - S / 2),
              U = a(_, s(R, $)),
              T =
                !c.arrow &&
                null != m(i) &&
                R !== U &&
                o.reference[E] / 2 - (R < _ ? _ : k) - M[E] / 2 < 0,
              L = T ? (R < _ ? R - _ : R - $) : 0;
            return {
              [w]: v[w] + L,
              data: {
                [w]: U,
                centerOffset: R - U - L,
                ...(T && { alignmentOffset: L }),
              },
              reset: T,
            };
          },
        }),
        ts = (t, e, r) => {
          let n = new Map(),
            i = { platform: ti, ...r },
            o = { ...i.platform, _c: n };
          return P(t, e, { ...i, platform: o });
        };
      var ta = r(54887);
      let tu = (t) => ({
        name: "arrow",
        options: t,
        fn(e) {
          let { element: r, padding: n } = "function" == typeof t ? t(e) : t;
          return r && {}.hasOwnProperty.call(r, "current")
            ? null != r.current
              ? to({ element: r.current, padding: n }).fn(e)
              : {}
            : r
            ? to({ element: r, padding: n }).fn(e)
            : {};
        },
      });
      var tl = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;
      function tc(t, e) {
        let r, n, i;
        if (t === e) return !0;
        if (typeof t != typeof e) return !1;
        if ("function" == typeof t && t.toString() === e.toString()) return !0;
        if (t && e && "object" == typeof t) {
          if (Array.isArray(t)) {
            if ((r = t.length) !== e.length) return !1;
            for (n = r; 0 != n--; ) if (!tc(t[n], e[n])) return !1;
            return !0;
          }
          if ((r = (i = Object.keys(t)).length) !== Object.keys(e).length)
            return !1;
          for (n = r; 0 != n--; )
            if (!{}.hasOwnProperty.call(e, i[n])) return !1;
          for (n = r; 0 != n--; ) {
            let r = i[n];
            if (("_owner" !== r || !t.$$typeof) && !tc(t[r], e[r])) return !1;
          }
          return !0;
        }
        return t != t && e != e;
      }
      function tf(t) {
        return "undefined" == typeof window
          ? 1
          : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function th(t, e) {
        let r = tf(t);
        return Math.round(e * r) / r;
      }
      function td(t) {
        let e = i.useRef(t);
        return (
          tl(() => {
            e.current = t;
          }),
          e
        );
      }
      var tp = r(25171);
      let tm = (0, i.forwardRef)((t, e) => {
        let { children: r, width: o = 10, height: s = 5, ...a } = t;
        return (0, i.createElement)(
          tp.WV.svg,
          (0, n.Z)({}, a, {
            ref: e,
            width: o,
            height: s,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
          }),
          t.asChild
            ? r
            : (0, i.createElement)("polygon", { points: "0,0 30,0 15,10" })
        );
      });
      var tg = r(1584),
        ty = r(98324),
        tb = r(75137),
        tv = r(1336),
        tw = r(75238);
      let tx = "Popper",
        [tE, tM] = (0, ty.b)(tx),
        [tP, tB] = tE(tx),
        tA = (0, i.forwardRef)((t, e) => {
          let { __scopePopper: r, virtualRef: o, ...s } = t,
            a = tB("PopperAnchor", r),
            u = (0, i.useRef)(null),
            l = (0, tg.e)(e, u);
          return (
            (0, i.useEffect)(() => {
              a.onAnchorChange((null == o ? void 0 : o.current) || u.current);
            }),
            o
              ? null
              : (0, i.createElement)(tp.WV.div, (0, n.Z)({}, s, { ref: l }))
          );
        }),
        tS = "PopperContent",
        [tC, tI] = tE(tS),
        tO = (0, i.forwardRef)((t, e) => {
          var r, o, u, c, f, h, x, E, M, P, I, O, k, $;
          let {
              __scopePopper: R,
              side: U = "bottom",
              sideOffset: T = 0,
              align: L = "center",
              alignOffset: F = 0,
              arrowPadding: N = 0,
              avoidCollisions: j = !0,
              collisionBoundary: z = [],
              collisionPadding: G = 0,
              sticky: D = "partial",
              hideWhenDetached: H = !1,
              updatePositionStrategy: Z = "optimized",
              onPlaced: W,
              ...K
            } = t,
            J = tB(tS, R),
            [Q, X] = (0, i.useState)(null),
            tt = (0, tg.e)(e, (t) => X(t)),
            [te, tr] = (0, i.useState)(null),
            tn = (0, tw.t)(te),
            ti =
              null !== (r = null == tn ? void 0 : tn.width) && void 0 !== r
                ? r
                : 0,
            to =
              null !== (o = null == tn ? void 0 : tn.height) && void 0 !== o
                ? o
                : 0,
            tm =
              "number" == typeof G
                ? G
                : { top: 0, right: 0, bottom: 0, left: 0, ...G },
            ty = Array.isArray(z) ? z : [z],
            tx = ty.length > 0,
            tE = { padding: tm, boundary: ty.filter(t$), altBoundary: tx },
            {
              refs: tM,
              floatingStyles: tP,
              placement: tA,
              isPositioned: tI,
              middlewareData: tO,
            } = (function (t) {
              void 0 === t && (t = {});
              let {
                  placement: e = "bottom",
                  strategy: r = "absolute",
                  middleware: n = [],
                  platform: o,
                  elements: { reference: s, floating: a } = {},
                  transform: u = !0,
                  whileElementsMounted: l,
                  open: c,
                } = t,
                [f, h] = i.useState({
                  x: 0,
                  y: 0,
                  strategy: r,
                  placement: e,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [d, p] = i.useState(n);
              tc(d, n) || p(n);
              let [m, g] = i.useState(null),
                [y, b] = i.useState(null),
                v = i.useCallback((t) => {
                  t !== M.current && ((M.current = t), g(t));
                }, []),
                w = i.useCallback((t) => {
                  t !== P.current && ((P.current = t), b(t));
                }, []),
                x = s || m,
                E = a || y,
                M = i.useRef(null),
                P = i.useRef(null),
                B = i.useRef(f),
                A = null != l,
                S = td(l),
                C = td(o),
                I = i.useCallback(() => {
                  if (!M.current || !P.current) return;
                  let t = { placement: e, strategy: r, middleware: d };
                  C.current && (t.platform = C.current),
                    ts(M.current, P.current, t).then((t) => {
                      let e = { ...t, isPositioned: !0 };
                      O.current &&
                        !tc(B.current, e) &&
                        ((B.current = e),
                        ta.flushSync(() => {
                          h(e);
                        }));
                    });
                }, [d, e, r, C]);
              tl(() => {
                !1 === c &&
                  B.current.isPositioned &&
                  ((B.current.isPositioned = !1),
                  h((t) => ({ ...t, isPositioned: !1 })));
              }, [c]);
              let O = i.useRef(!1);
              tl(
                () => (
                  (O.current = !0),
                  () => {
                    O.current = !1;
                  }
                ),
                []
              ),
                tl(() => {
                  if ((x && (M.current = x), E && (P.current = E), x && E)) {
                    if (S.current) return S.current(x, E, I);
                    I();
                  }
                }, [x, E, I, S, A]);
              let _ = i.useMemo(
                  () => ({
                    reference: M,
                    floating: P,
                    setReference: v,
                    setFloating: w,
                  }),
                  [v, w]
                ),
                k = i.useMemo(() => ({ reference: x, floating: E }), [x, E]),
                $ = i.useMemo(() => {
                  let t = { position: r, left: 0, top: 0 };
                  if (!k.floating) return t;
                  let e = th(k.floating, f.x),
                    n = th(k.floating, f.y);
                  return u
                    ? {
                        ...t,
                        transform: "translate(" + e + "px, " + n + "px)",
                        ...(tf(k.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: r, left: e, top: n };
                }, [r, u, k.floating, f.x, f.y]);
              return i.useMemo(
                () => ({
                  ...f,
                  update: I,
                  refs: _,
                  elements: k,
                  floatingStyles: $,
                }),
                [f, I, _, k, $]
              );
            })({
              strategy: "fixed",
              placement: U + ("center" !== L ? "-" + L : ""),
              whileElementsMounted: (...t) =>
                (function (t, e, r, n) {
                  let i;
                  void 0 === n && (n = {});
                  let {
                      ancestorScroll: o = !0,
                      ancestorResize: u = !0,
                      elementResize: c = "function" == typeof ResizeObserver,
                      layoutShift: f = "function" ==
                        typeof IntersectionObserver,
                      animationFrame: h = !1,
                    } = n,
                    d = V(t),
                    p = o || u ? [...(d ? q(d) : []), ...q(e)] : [];
                  p.forEach((t) => {
                    o && t.addEventListener("scroll", r, { passive: !0 }),
                      u && t.addEventListener("resize", r);
                  });
                  let m =
                      d && f
                        ? (function (t, e) {
                            let r,
                              n = null,
                              i = _(t);
                            function o() {
                              var t;
                              clearTimeout(r),
                                null == (t = n) || t.disconnect(),
                                (n = null);
                            }
                            return (
                              !(function u(c, f) {
                                void 0 === c && (c = !1),
                                  void 0 === f && (f = 1),
                                  o();
                                let {
                                  left: h,
                                  top: d,
                                  width: p,
                                  height: m,
                                } = t.getBoundingClientRect();
                                if ((c || e(), !p || !m)) return;
                                let g = l(d),
                                  y = l(i.clientWidth - (h + p)),
                                  b = {
                                    rootMargin:
                                      -g +
                                      "px " +
                                      -y +
                                      "px " +
                                      -l(i.clientHeight - (d + m)) +
                                      "px " +
                                      -l(h) +
                                      "px",
                                    threshold: a(0, s(1, f)) || 1,
                                  },
                                  v = !0;
                                function w(t) {
                                  let e = t[0].intersectionRatio;
                                  if (e !== f) {
                                    if (!v) return u();
                                    e
                                      ? u(!1, e)
                                      : (r = setTimeout(() => {
                                          u(!1, 1e-7);
                                        }, 100));
                                  }
                                  v = !1;
                                }
                                try {
                                  n = new IntersectionObserver(w, {
                                    ...b,
                                    root: i.ownerDocument,
                                  });
                                } catch (t) {
                                  n = new IntersectionObserver(w, b);
                                }
                                n.observe(t);
                              })(!0),
                              o
                            );
                          })(d, r)
                        : null,
                    g = -1,
                    y = null;
                  c &&
                    ((y = new ResizeObserver((t) => {
                      let [n] = t;
                      n &&
                        n.target === d &&
                        y &&
                        (y.unobserve(e),
                        cancelAnimationFrame(g),
                        (g = requestAnimationFrame(() => {
                          var t;
                          null == (t = y) || t.observe(e);
                        }))),
                        r();
                    })),
                    d && !h && y.observe(d),
                    y.observe(e));
                  let b = h ? Y(t) : null;
                  return (
                    h &&
                      (function e() {
                        let n = Y(t);
                        b &&
                          (n.x !== b.x ||
                            n.y !== b.y ||
                            n.width !== b.width ||
                            n.height !== b.height) &&
                          r(),
                          (b = n),
                          (i = requestAnimationFrame(e));
                      })(),
                    r(),
                    () => {
                      var t;
                      p.forEach((t) => {
                        o && t.removeEventListener("scroll", r),
                          u && t.removeEventListener("resize", r);
                      }),
                        null == m || m(),
                        null == (t = y) || t.disconnect(),
                        (y = null),
                        h && cancelAnimationFrame(i);
                    }
                  );
                })(...t, { animationFrame: "always" === Z }),
              elements: { reference: J.anchor },
              middleware: [
                {
                  name: "offset",
                  options: (M = { mainAxis: T + to, alignmentAxis: F }),
                  async fn(t) {
                    var e, r;
                    let { x: n, y: i, placement: o, middlewareData: s } = t,
                      a = await C(t, M);
                    return o ===
                      (null == (e = s.offset) ? void 0 : e.placement) &&
                      null != (r = s.arrow) &&
                      r.alignmentOffset
                      ? {}
                      : {
                          x: n + a.x,
                          y: i + a.y,
                          data: { ...a, placement: o },
                        };
                  },
                },
                j && {
                  name: "shift",
                  options: (I = {
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter:
                      "partial" === D
                        ? (void 0 === P && (P = {}),
                          {
                            options: P,
                            fn(t) {
                              let {
                                  x: e,
                                  y: r,
                                  placement: n,
                                  rects: i,
                                  middlewareData: o,
                                } = t,
                                {
                                  offset: s = 0,
                                  mainAxis: a = !0,
                                  crossAxis: u = !0,
                                } = d(P, t),
                                l = { x: e, y: r },
                                c = b(n),
                                f = g(c),
                                h = l[f],
                                m = l[c],
                                y = d(s, t),
                                v =
                                  "number" == typeof y
                                    ? { mainAxis: y, crossAxis: 0 }
                                    : { mainAxis: 0, crossAxis: 0, ...y };
                              if (a) {
                                let t = "y" === f ? "height" : "width",
                                  e =
                                    i.reference[f] - i.floating[t] + v.mainAxis,
                                  r =
                                    i.reference[f] +
                                    i.reference[t] -
                                    v.mainAxis;
                                h < e ? (h = e) : h > r && (h = r);
                              }
                              if (u) {
                                var w, x;
                                let t = "y" === f ? "width" : "height",
                                  e = ["top", "left"].includes(p(n)),
                                  r =
                                    i.reference[c] -
                                    i.floating[t] +
                                    ((e &&
                                      (null == (w = o.offset)
                                        ? void 0
                                        : w[c])) ||
                                      0) +
                                    (e ? 0 : v.crossAxis),
                                  s =
                                    i.reference[c] +
                                    i.reference[t] +
                                    (e
                                      ? 0
                                      : (null == (x = o.offset)
                                          ? void 0
                                          : x[c]) || 0) -
                                    (e ? v.crossAxis : 0);
                                m < r ? (m = r) : m > s && (m = s);
                              }
                              return { [f]: h, [c]: m };
                            },
                          })
                        : void 0,
                    ...tE,
                  }),
                  async fn(t) {
                    let { x: e, y: r, placement: n } = t,
                      {
                        mainAxis: i = !0,
                        crossAxis: o = !1,
                        limiter: u = {
                          fn: (t) => {
                            let { x: e, y: r } = t;
                            return { x: e, y: r };
                          },
                        },
                        ...l
                      } = d(I, t),
                      c = { x: e, y: r },
                      f = await B(t, l),
                      h = b(p(n)),
                      m = g(h),
                      y = c[m],
                      v = c[h];
                    if (i) {
                      let t = "y" === m ? "top" : "left",
                        e = "y" === m ? "bottom" : "right",
                        r = y + f[t],
                        n = y - f[e];
                      y = a(r, s(y, n));
                    }
                    if (o) {
                      let t = "y" === h ? "top" : "left",
                        e = "y" === h ? "bottom" : "right",
                        r = v + f[t],
                        n = v - f[e];
                      v = a(r, s(v, n));
                    }
                    let w = u.fn({ ...t, [m]: y, [h]: v });
                    return { ...w, data: { x: w.x - e, y: w.y - r } };
                  },
                },
                j && {
                  name: "flip",
                  options: (O = { ...tE }),
                  async fn(t) {
                    var e, r, n, i, o;
                    let {
                        placement: s,
                        middlewareData: a,
                        rects: u,
                        initialPlacement: l,
                        platform: c,
                        elements: f,
                      } = t,
                      {
                        mainAxis: h = !0,
                        crossAxis: x = !0,
                        fallbackPlacements: E,
                        fallbackStrategy: M = "bestFit",
                        fallbackAxisSideDirection: P = "none",
                        flipAlignment: A = !0,
                        ...S
                      } = d(O, t);
                    if (null != (e = a.arrow) && e.alignmentOffset) return {};
                    let C = p(s),
                      I = p(l) === l,
                      _ = await (null == c.isRTL
                        ? void 0
                        : c.isRTL(f.floating)),
                      k =
                        E ||
                        (I || !A
                          ? [w(l)]
                          : (function (t) {
                              let e = w(t);
                              return [v(t), e, v(e)];
                            })(l));
                    E ||
                      "none" === P ||
                      k.push(
                        ...(function (t, e, r, n) {
                          let i = m(t),
                            o = (function (t, e, r) {
                              let n = ["left", "right"],
                                i = ["right", "left"];
                              switch (t) {
                                case "top":
                                case "bottom":
                                  if (r) return e ? i : n;
                                  return e ? n : i;
                                case "left":
                                case "right":
                                  return e
                                    ? ["top", "bottom"]
                                    : ["bottom", "top"];
                                default:
                                  return [];
                              }
                            })(p(t), "start" === r, n);
                          return (
                            i &&
                              ((o = o.map((t) => t + "-" + i)),
                              e && (o = o.concat(o.map(v)))),
                            o
                          );
                        })(l, A, P, _)
                      );
                    let $ = [l, ...k],
                      R = await B(t, S),
                      U = [],
                      T = (null == (r = a.flip) ? void 0 : r.overflows) || [];
                    if ((h && U.push(R[C]), x)) {
                      let t = (function (t, e, r) {
                        void 0 === r && (r = !1);
                        let n = m(t),
                          i = g(b(t)),
                          o = y(i),
                          s =
                            "x" === i
                              ? n === (r ? "end" : "start")
                                ? "right"
                                : "left"
                              : "start" === n
                              ? "bottom"
                              : "top";
                        return (
                          e.reference[o] > e.floating[o] && (s = w(s)),
                          [s, w(s)]
                        );
                      })(s, u, _);
                      U.push(R[t[0]], R[t[1]]);
                    }
                    if (
                      ((T = [...T, { placement: s, overflows: U }]),
                      !U.every((t) => t <= 0))
                    ) {
                      let t =
                          ((null == (n = a.flip) ? void 0 : n.index) || 0) + 1,
                        e = $[t];
                      if (e)
                        return {
                          data: { index: t, overflows: T },
                          reset: { placement: e },
                        };
                      let r =
                        null ==
                        (i = T.filter((t) => t.overflows[0] <= 0).sort(
                          (t, e) => t.overflows[1] - e.overflows[1]
                        )[0])
                          ? void 0
                          : i.placement;
                      if (!r)
                        switch (M) {
                          case "bestFit": {
                            let t =
                              null ==
                              (o = T.map((t) => [
                                t.placement,
                                t.overflows
                                  .filter((t) => t > 0)
                                  .reduce((t, e) => t + e, 0),
                              ]).sort((t, e) => t[1] - e[1])[0])
                                ? void 0
                                : o[0];
                            t && (r = t);
                            break;
                          }
                          case "initialPlacement":
                            r = l;
                        }
                      if (s !== r) return { reset: { placement: r } };
                    }
                    return {};
                  },
                },
                {
                  name: "size",
                  options: (k = {
                    ...tE,
                    apply: ({
                      elements: t,
                      rects: e,
                      availableWidth: r,
                      availableHeight: n,
                    }) => {
                      let { width: i, height: o } = e.reference,
                        s = t.floating.style;
                      s.setProperty("--radix-popper-available-width", `${r}px`),
                        s.setProperty(
                          "--radix-popper-available-height",
                          `${n}px`
                        ),
                        s.setProperty("--radix-popper-anchor-width", `${i}px`),
                        s.setProperty("--radix-popper-anchor-height", `${o}px`);
                    },
                  }),
                  async fn(t) {
                    let e, r;
                    let {
                        placement: n,
                        rects: i,
                        platform: o,
                        elements: u,
                      } = t,
                      { apply: l = () => {}, ...c } = d(k, t),
                      f = await B(t, c),
                      h = p(n),
                      g = m(n),
                      y = "y" === b(n),
                      { width: v, height: w } = i.floating;
                    "top" === h || "bottom" === h
                      ? ((e = h),
                        (r =
                          g ===
                          ((await (null == o.isRTL
                            ? void 0
                            : o.isRTL(u.floating)))
                            ? "start"
                            : "end")
                            ? "left"
                            : "right"))
                      : ((r = h), (e = "end" === g ? "top" : "bottom"));
                    let x = w - f[e],
                      E = v - f[r],
                      M = !t.middlewareData.shift,
                      P = x,
                      A = E;
                    if (y) {
                      let t = v - f.left - f.right;
                      A = g || M ? s(E, t) : t;
                    } else {
                      let t = w - f.top - f.bottom;
                      P = g || M ? s(x, t) : t;
                    }
                    if (M && !g) {
                      let t = a(f.left, 0),
                        e = a(f.right, 0),
                        r = a(f.top, 0),
                        n = a(f.bottom, 0);
                      y
                        ? (A =
                            v -
                            2 *
                              (0 !== t || 0 !== e ? t + e : a(f.left, f.right)))
                        : (P =
                            w -
                            2 *
                              (0 !== r || 0 !== n
                                ? r + n
                                : a(f.top, f.bottom)));
                    }
                    await l({ ...t, availableWidth: A, availableHeight: P });
                    let S = await o.getDimensions(u.floating);
                    return v !== S.width || w !== S.height
                      ? { reset: { rects: !0 } }
                      : {};
                  },
                },
                te && tu({ element: te, padding: N }),
                tR({ arrowWidth: ti, arrowHeight: to }),
                H && {
                  name: "hide",
                  options: ($ = { strategy: "referenceHidden", ...tE }),
                  async fn(t) {
                    let { rects: e } = t,
                      { strategy: r = "referenceHidden", ...n } = d($, t);
                    switch (r) {
                      case "referenceHidden": {
                        let r = A(
                          await B(t, { ...n, elementContext: "reference" }),
                          e.reference
                        );
                        return {
                          data: {
                            referenceHiddenOffsets: r,
                            referenceHidden: S(r),
                          },
                        };
                      }
                      case "escaped": {
                        let r = A(
                          await B(t, { ...n, altBoundary: !0 }),
                          e.floating
                        );
                        return { data: { escapedOffsets: r, escaped: S(r) } };
                      }
                      default:
                        return {};
                    }
                  },
                },
              ],
            }),
            [t_, tk] = tU(tA),
            tT = (0, tb.W)(W);
          (0, tv.b)(() => {
            tI && (null == tT || tT());
          }, [tI, tT]);
          let tL = null === (u = tO.arrow) || void 0 === u ? void 0 : u.x,
            tF = null === (c = tO.arrow) || void 0 === c ? void 0 : c.y,
            tN =
              (null === (f = tO.arrow) || void 0 === f
                ? void 0
                : f.centerOffset) !== 0,
            [tj, tz] = (0, i.useState)();
          return (
            (0, tv.b)(() => {
              Q && tz(window.getComputedStyle(Q).zIndex);
            }, [Q]),
            (0, i.createElement)(
              "div",
              {
                ref: tM.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                  ...tP,
                  transform: tI ? tP.transform : "translate(0, -200%)",
                  minWidth: "max-content",
                  zIndex: tj,
                  "--radix-popper-transform-origin": [
                    null === (h = tO.transformOrigin) || void 0 === h
                      ? void 0
                      : h.x,
                    null === (x = tO.transformOrigin) || void 0 === x
                      ? void 0
                      : x.y,
                  ].join(" "),
                },
                dir: t.dir,
              },
              (0, i.createElement)(
                tC,
                {
                  scope: R,
                  placedSide: t_,
                  onArrowChange: tr,
                  arrowX: tL,
                  arrowY: tF,
                  shouldHideArrow: tN,
                },
                (0, i.createElement)(
                  tp.WV.div,
                  (0, n.Z)({ "data-side": t_, "data-align": tk }, K, {
                    ref: tt,
                    style: {
                      ...K.style,
                      animation: tI ? void 0 : "none",
                      opacity:
                        null !== (E = tO.hide) &&
                        void 0 !== E &&
                        E.referenceHidden
                          ? 0
                          : void 0,
                    },
                  })
                )
              )
            )
          );
        }),
        t_ = { top: "bottom", right: "left", bottom: "top", left: "right" },
        tk = (0, i.forwardRef)(function (t, e) {
          let { __scopePopper: r, ...o } = t,
            s = tI("PopperArrow", r),
            a = t_[s.placedSide];
          return (0,
          i.createElement)("span", { ref: s.onArrowChange, style: { position: "absolute", left: s.arrowX, top: s.arrowY, [a]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[s.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[s.placedSide], visibility: s.shouldHideArrow ? "hidden" : void 0 } }, (0, i.createElement)(tm, (0, n.Z)({}, o, { ref: e, style: { ...o.style, display: "block" } })));
        });
      function t$(t) {
        return null !== t;
      }
      let tR = (t) => ({
        name: "transformOrigin",
        options: t,
        fn(e) {
          var r, n, i, o, s;
          let { placement: a, rects: u, middlewareData: l } = e,
            c =
              (null === (r = l.arrow) || void 0 === r
                ? void 0
                : r.centerOffset) !== 0,
            f = c ? 0 : t.arrowWidth,
            h = c ? 0 : t.arrowHeight,
            [d, p] = tU(a),
            m = { start: "0%", center: "50%", end: "100%" }[p],
            g =
              (null !==
                (n = null === (i = l.arrow) || void 0 === i ? void 0 : i.x) &&
              void 0 !== n
                ? n
                : 0) +
              f / 2,
            y =
              (null !==
                (o = null === (s = l.arrow) || void 0 === s ? void 0 : s.y) &&
              void 0 !== o
                ? o
                : 0) +
              h / 2,
            b = "",
            v = "";
          return (
            "bottom" === d
              ? ((b = c ? m : `${g}px`), (v = `${-h}px`))
              : "top" === d
              ? ((b = c ? m : `${g}px`), (v = `${u.floating.height + h}px`))
              : "right" === d
              ? ((b = `${-h}px`), (v = c ? m : `${y}px`))
              : "left" === d &&
                ((b = `${u.floating.width + h}px`), (v = c ? m : `${y}px`)),
            { data: { x: b, y: v } }
          );
        },
      });
      function tU(t) {
        let [e, r = "center"] = t.split("-");
        return [e, r];
      }
      let tT = (t) => {
          let { __scopePopper: e, children: r } = t,
            [n, o] = (0, i.useState)(null);
          return (0, i.createElement)(
            tP,
            { scope: e, anchor: n, onAnchorChange: o },
            r
          );
        },
        tL = tA,
        tF = tO,
        tN = tk;
    },
    56935: function (t, e, r) {
      "use strict";
      r.d(e, {
        h: function () {
          return a;
        },
      });
      var n = r(22988),
        i = r(2265),
        o = r(54887),
        s = r(25171);
      let a = (0, i.forwardRef)((t, e) => {
        var r;
        let {
          container: a = null == globalThis
            ? void 0
            : null === (r = globalThis.document) || void 0 === r
            ? void 0
            : r.body,
          ...u
        } = t;
        return a
          ? o.createPortal(
              (0, i.createElement)(s.WV.div, (0, n.Z)({}, u, { ref: e })),
              a
            )
          : null;
      });
    },
    31383: function (t, e, r) {
      "use strict";
      r.d(e, {
        z: function () {
          return a;
        },
      });
      var n = r(2265),
        i = r(54887),
        o = r(1584),
        s = r(1336);
      let a = (t) => {
        let { present: e, children: r } = t,
          a = (function (t) {
            var e, r;
            let [o, a] = (0, n.useState)(),
              l = (0, n.useRef)({}),
              c = (0, n.useRef)(t),
              f = (0, n.useRef)("none"),
              [h, d] =
                ((e = t ? "mounted" : "unmounted"),
                (r = {
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
                (0, n.useReducer)((t, e) => {
                  let n = r[t][e];
                  return null != n ? n : t;
                }, e));
            return (
              (0, n.useEffect)(() => {
                let t = u(l.current);
                f.current = "mounted" === h ? t : "none";
              }, [h]),
              (0, s.b)(() => {
                let e = l.current,
                  r = c.current;
                if (r !== t) {
                  let n = f.current,
                    i = u(e);
                  t
                    ? d("MOUNT")
                    : "none" === i ||
                      (null == e ? void 0 : e.display) === "none"
                    ? d("UNMOUNT")
                    : r && n !== i
                    ? d("ANIMATION_OUT")
                    : d("UNMOUNT"),
                    (c.current = t);
                }
              }, [t, d]),
              (0, s.b)(() => {
                if (o) {
                  let t = (t) => {
                      let e = u(l.current).includes(t.animationName);
                      t.target === o &&
                        e &&
                        (0, i.flushSync)(() => d("ANIMATION_END"));
                    },
                    e = (t) => {
                      t.target === o && (f.current = u(l.current));
                    };
                  return (
                    o.addEventListener("animationstart", e),
                    o.addEventListener("animationcancel", t),
                    o.addEventListener("animationend", t),
                    () => {
                      o.removeEventListener("animationstart", e),
                        o.removeEventListener("animationcancel", t),
                        o.removeEventListener("animationend", t);
                    }
                  );
                }
                d("ANIMATION_END");
              }, [o, d]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(h),
                ref: (0, n.useCallback)((t) => {
                  t && (l.current = getComputedStyle(t)), a(t);
                }, []),
              }
            );
          })(e),
          l =
            "function" == typeof r
              ? r({ present: a.isPresent })
              : n.Children.only(r),
          c = (0, o.e)(a.ref, l.ref);
        return "function" == typeof r || a.isPresent
          ? (0, n.cloneElement)(l, { ref: c })
          : null;
      };
      function u(t) {
        return (null == t ? void 0 : t.animationName) || "none";
      }
      a.displayName = "Presence";
    },
    25171: function (t, e, r) {
      "use strict";
      r.d(e, {
        WV: function () {
          return a;
        },
        jH: function () {
          return u;
        },
      });
      var n = r(22988),
        i = r(2265),
        o = r(54887),
        s = r(71538);
      let a = [
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
      ].reduce((t, e) => {
        let r = (0, i.forwardRef)((t, r) => {
          let { asChild: o, ...a } = t,
            u = o ? s.g7 : e;
          return (
            (0, i.useEffect)(() => {
              window[Symbol.for("radix-ui")] = !0;
            }, []),
            (0, i.createElement)(u, (0, n.Z)({}, a, { ref: r }))
          );
        });
        return (r.displayName = `Primitive.${e}`), { ...t, [e]: r };
      }, {});
      function u(t, e) {
        t && (0, o.flushSync)(() => t.dispatchEvent(e));
      }
    },
    71538: function (t, e, r) {
      "use strict";
      r.d(e, {
        A4: function () {
          return u;
        },
        g7: function () {
          return s;
        },
      });
      var n = r(22988),
        i = r(2265),
        o = r(1584);
      let s = (0, i.forwardRef)((t, e) => {
        let { children: r, ...o } = t,
          s = i.Children.toArray(r),
          u = s.find(l);
        if (u) {
          let t = u.props.children,
            r = s.map((e) =>
              e !== u
                ? e
                : i.Children.count(t) > 1
                ? i.Children.only(null)
                : (0, i.isValidElement)(t)
                ? t.props.children
                : null
            );
          return (0, i.createElement)(
            a,
            (0, n.Z)({}, o, { ref: e }),
            (0, i.isValidElement)(t) ? (0, i.cloneElement)(t, void 0, r) : null
          );
        }
        return (0, i.createElement)(a, (0, n.Z)({}, o, { ref: e }), r);
      });
      s.displayName = "Slot";
      let a = (0, i.forwardRef)((t, e) => {
        let { children: r, ...n } = t;
        return (0, i.isValidElement)(r)
          ? (0, i.cloneElement)(r, {
              ...(function (t, e) {
                let r = { ...e };
                for (let n in e) {
                  let i = t[n],
                    o = e[n];
                  /^on[A-Z]/.test(n)
                    ? i && o
                      ? (r[n] = (...t) => {
                          o(...t), i(...t);
                        })
                      : i && (r[n] = i)
                    : "style" === n
                    ? (r[n] = { ...i, ...o })
                    : "className" === n &&
                      (r[n] = [i, o].filter(Boolean).join(" "));
                }
                return { ...t, ...r };
              })(n, r.props),
              ref: e ? (0, o.F)(e, r.ref) : r.ref,
            })
          : i.Children.count(r) > 1
          ? i.Children.only(null)
          : null;
      });
      a.displayName = "SlotClone";
      let u = ({ children: t }) => (0, i.createElement)(i.Fragment, null, t);
      function l(t) {
        return (0, i.isValidElement)(t) && t.type === u;
      }
    },
    75137: function (t, e, r) {
      "use strict";
      r.d(e, {
        W: function () {
          return i;
        },
      });
      var n = r(2265);
      function i(t) {
        let e = (0, n.useRef)(t);
        return (
          (0, n.useEffect)(() => {
            e.current = t;
          }),
          (0, n.useMemo)(
            () =>
              (...t) => {
                var r;
                return null === (r = e.current) || void 0 === r
                  ? void 0
                  : r.call(e, ...t);
              },
            []
          )
        );
      }
    },
    91715: function (t, e, r) {
      "use strict";
      r.d(e, {
        T: function () {
          return o;
        },
      });
      var n = r(2265),
        i = r(75137);
      function o({ prop: t, defaultProp: e, onChange: r = () => {} }) {
        let [o, s] = (function ({ defaultProp: t, onChange: e }) {
            let r = (0, n.useState)(t),
              [o] = r,
              s = (0, n.useRef)(o),
              a = (0, i.W)(e);
            return (
              (0, n.useEffect)(() => {
                s.current !== o && (a(o), (s.current = o));
              }, [o, s, a]),
              r
            );
          })({ defaultProp: e, onChange: r }),
          a = void 0 !== t,
          u = a ? t : o,
          l = (0, i.W)(r);
        return [
          u,
          (0, n.useCallback)(
            (e) => {
              if (a) {
                let r = "function" == typeof e ? e(t) : e;
                r !== t && l(r);
              } else s(e);
            },
            [a, t, s, l]
          ),
        ];
      }
    },
    1336: function (t, e, r) {
      "use strict";
      r.d(e, {
        b: function () {
          return i;
        },
      });
      var n = r(2265);
      let i = (null == globalThis ? void 0 : globalThis.document)
        ? n.useLayoutEffect
        : () => {};
    },
    75238: function (t, e, r) {
      "use strict";
      r.d(e, {
        t: function () {
          return o;
        },
      });
      var n = r(2265),
        i = r(1336);
      function o(t) {
        let [e, r] = (0, n.useState)(void 0);
        return (
          (0, i.b)(() => {
            if (t) {
              r({ width: t.offsetWidth, height: t.offsetHeight });
              let e = new ResizeObserver((e) => {
                let n, i;
                if (!Array.isArray(e) || !e.length) return;
                let o = e[0];
                if ("borderBoxSize" in o) {
                  let t = o.borderBoxSize,
                    e = Array.isArray(t) ? t[0] : t;
                  (n = e.inlineSize), (i = e.blockSize);
                } else (n = t.offsetWidth), (i = t.offsetHeight);
                r({ width: n, height: i });
              });
              return e.observe(t, { box: "border-box" }), () => e.unobserve(t);
            }
            r(void 0);
          }, [t]),
          e
        );
      }
    },
    28782: function (t, e, r) {
      "use strict";
      r.d(e, {
        O: function () {
          return u;
        },
        z: function () {
          return a;
        },
      });
      var n = r(2265);
      let i = [],
        o = {
          autoConnect: !1,
          connecting: !1,
          connected: !1,
          disconnecting: !1,
          select() {
            s("call", "select");
          },
          connect: () => Promise.reject(s("call", "connect")),
          disconnect: () => Promise.reject(s("call", "disconnect")),
          sendTransaction: () => Promise.reject(s("call", "sendTransaction")),
          signTransaction: () => Promise.reject(s("call", "signTransaction")),
          signAllTransactions: () =>
            Promise.reject(s("call", "signAllTransactions")),
          signMessage: () => Promise.reject(s("call", "signMessage")),
          signIn: () => Promise.reject(s("call", "signIn")),
        };
      function s(t, e) {
        let r = Error(
          `You have tried to ${t} "${e}" on a WalletContext without providing one. Make sure to render a WalletProvider as an ancestor of the component that uses WalletContext.`
        );
        return console.error(r), r;
      }
      Object.defineProperty(o, "wallets", {
        get: () => (s("read", "wallets"), i),
      }),
        Object.defineProperty(o, "wallet", {
          get: () => (s("read", "wallet"), null),
        }),
        Object.defineProperty(o, "publicKey", {
          get: () => (s("read", "publicKey"), null),
        });
      let a = (0, n.createContext)(o);
      function u() {
        return (0, n.useContext)(a);
      }
    },
    22544: function (t, e, r) {
      "use strict";
      r.d(e, {
        K: function () {
          return u;
        },
        M: function () {
          return a;
        },
      });
      var n = r(28072),
        i = r(98209);
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let o =
          BigInt(0),
        s = BigInt(1);
      function a(t, e) {
        let r = (t, e) => {
            let r = e.negate();
            return t ? r : e;
          },
          n = (t) => ({
            windows: Math.ceil(e / t) + 1,
            windowSize: 2 ** (t - 1),
          });
        return {
          constTimeNegate: r,
          unsafeLadder(e, r) {
            let n = t.ZERO,
              i = e;
            for (; r > o; )
              r & s && (n = n.add(i)), (i = i.double()), (r >>= s);
            return n;
          },
          precomputeWindow(t, e) {
            let { windows: r, windowSize: i } = n(e),
              o = [],
              s = t,
              a = s;
            for (let t = 0; t < r; t++) {
              (a = s), o.push(a);
              for (let t = 1; t < i; t++) (a = a.add(s)), o.push(a);
              s = a.double();
            }
            return o;
          },
          wNAF(e, i, o) {
            let { windows: a, windowSize: u } = n(e),
              l = t.ZERO,
              c = t.BASE,
              f = BigInt(2 ** e - 1),
              h = 2 ** e,
              d = BigInt(e);
            for (let t = 0; t < a; t++) {
              let e = t * u,
                n = Number(o & f);
              (o >>= d), n > u && ((n -= h), (o += s));
              let a = e + Math.abs(n) - 1,
                p = t % 2 != 0,
                m = n < 0;
              0 === n ? (c = c.add(r(p, i[e]))) : (l = l.add(r(m, i[a])));
            }
            return { p: l, f: c };
          },
          wNAFCached(t, e, r, n) {
            let i = t._WINDOW_SIZE || 1,
              o = e.get(t);
            return (
              o ||
                ((o = this.precomputeWindow(t, i)), 1 !== i && e.set(t, n(o))),
              this.wNAF(i, o, r)
            );
          },
        };
      }
      function u(t) {
        return (
          (0, n.OP)(t.Fp),
          (0, i.FF)(
            t,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
          ),
          Object.freeze({
            ...(0, n.kK)(t.n, t.nBitLength),
            ...t,
            p: t.Fp.ORDER,
          })
        );
      }
    },
    28072: function (t, e, r) {
      "use strict";
      r.d(e, {
        OP: function () {
          return g;
        },
        PS: function () {
          return w;
        },
        Tu: function () {
          return p;
        },
        U_: function () {
          return d;
        },
        Us: function () {
          return x;
        },
        gN: function () {
          return b;
        },
        kK: function () {
          return y;
        },
        oA: function () {
          return h;
        },
        wQ: function () {
          return f;
        },
      });
      var n = r(98209);
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let i =
          BigInt(0),
        o = BigInt(1),
        s = BigInt(2),
        a = BigInt(3),
        u = BigInt(4),
        l = BigInt(5),
        c = BigInt(8);
      function f(t, e) {
        let r = t % e;
        return r >= i ? r : e + r;
      }
      function h(t, e, r) {
        let n = t;
        for (; e-- > i; ) (n *= n), (n %= r);
        return n;
      }
      function d(t, e) {
        if (t === i || e <= i)
          throw Error(
            `invert: expected positive integers, got n=${t} mod=${e}`
          );
        let r = f(t, e),
          n = e,
          s = i,
          a = o,
          u = o,
          l = i;
        for (; r !== i; ) {
          let t = n / r,
            e = n % r,
            i = s - u * t,
            o = a - l * t;
          (n = r), (r = e), (s = u), (a = l), (u = i), (l = o);
        }
        if (n !== o) throw Error("invert: does not exist");
        return f(s, e);
      }
      BigInt(9), BigInt(16);
      let p = (t, e) => (f(t, e) & o) === o,
        m = [
          "create",
          "isValid",
          "is0",
          "neg",
          "inv",
          "sqrt",
          "sqr",
          "eql",
          "add",
          "sub",
          "mul",
          "pow",
          "div",
          "addN",
          "subN",
          "mulN",
          "sqrN",
        ];
      function g(t) {
        let e = m.reduce((t, e) => ((t[e] = "function"), t), {
          ORDER: "bigint",
          MASK: "bigint",
          BYTES: "isSafeInteger",
          BITS: "isSafeInteger",
        });
        return (0, n.FF)(t, e);
      }
      function y(t, e) {
        let r = void 0 !== e ? e : t.toString(2).length;
        return { nBitLength: r, nByteLength: Math.ceil(r / 8) };
      }
      function b(t, e, r = !1, h = {}) {
        if (t <= i) throw Error(`Expected Field ORDER > 0, got ${t}`);
        let { nBitLength: p, nByteLength: m } = y(t, e);
        if (m > 2048)
          throw Error("Field lengths over 2048 bytes are not supported");
        let g = (function (t) {
            if (t % u === a) {
              let e = (t + o) / u;
              return function (t, r) {
                let n = t.pow(r, e);
                if (!t.eql(t.sqr(n), r)) throw Error("Cannot find square root");
                return n;
              };
            }
            if (t % c === l) {
              let e = (t - l) / c;
              return function (t, r) {
                let n = t.mul(r, s),
                  i = t.pow(n, e),
                  o = t.mul(r, i),
                  a = t.mul(t.mul(o, s), i),
                  u = t.mul(o, t.sub(a, t.ONE));
                if (!t.eql(t.sqr(u), r)) throw Error("Cannot find square root");
                return u;
              };
            }
            return (function (t) {
              let e, r, n;
              let a = (t - o) / s;
              for (e = t - o, r = 0; e % s === i; e /= s, r++);
              for (
                n = s;
                n < t &&
                (function (t, e, r) {
                  if (r <= i || e < i) throw Error("Expected power/modulo > 0");
                  if (r === o) return i;
                  let n = o;
                  for (; e > i; )
                    e & o && (n = (n * t) % r), (t = (t * t) % r), (e >>= o);
                  return n;
                })(n, a, t) !==
                  t - o;
                n++
              );
              if (1 === r) {
                let e = (t + o) / u;
                return function (t, r) {
                  let n = t.pow(r, e);
                  if (!t.eql(t.sqr(n), r))
                    throw Error("Cannot find square root");
                  return n;
                };
              }
              let l = (e + o) / s;
              return function (t, i) {
                if (t.pow(i, a) === t.neg(t.ONE))
                  throw Error("Cannot find square root");
                let s = r,
                  u = t.pow(t.mul(t.ONE, n), e),
                  c = t.pow(i, l),
                  f = t.pow(i, e);
                for (; !t.eql(f, t.ONE); ) {
                  if (t.eql(f, t.ZERO)) return t.ZERO;
                  let e = 1;
                  for (let r = t.sqr(f); e < s && !t.eql(r, t.ONE); e++)
                    r = t.sqr(r);
                  let r = t.pow(u, o << BigInt(s - e - 1));
                  (u = t.sqr(r)), (c = t.mul(c, r)), (f = t.mul(f, u)), (s = e);
                }
                return c;
              };
            })(t);
          })(t),
          b = Object.freeze({
            ORDER: t,
            BITS: p,
            BYTES: m,
            MASK: (0, n.dQ)(p),
            ZERO: i,
            ONE: o,
            create: (e) => f(e, t),
            isValid: (e) => {
              if ("bigint" != typeof e)
                throw Error(
                  `Invalid field element: expected bigint, got ${typeof e}`
                );
              return i <= e && e < t;
            },
            is0: (t) => t === i,
            isOdd: (t) => (t & o) === o,
            neg: (e) => f(-e, t),
            eql: (t, e) => t === e,
            sqr: (e) => f(e * e, t),
            add: (e, r) => f(e + r, t),
            sub: (e, r) => f(e - r, t),
            mul: (e, r) => f(e * r, t),
            pow: (t, e) =>
              (function (t, e, r) {
                if (r < i) throw Error("Expected power > 0");
                if (r === i) return t.ONE;
                if (r === o) return e;
                let n = t.ONE,
                  s = e;
                for (; r > i; )
                  r & o && (n = t.mul(n, s)), (s = t.sqr(s)), (r >>= o);
                return n;
              })(b, t, e),
            div: (e, r) => f(e * d(r, t), t),
            sqrN: (t) => t * t,
            addN: (t, e) => t + e,
            subN: (t, e) => t - e,
            mulN: (t, e) => t * e,
            inv: (e) => d(e, t),
            sqrt: h.sqrt || ((t) => g(b, t)),
            invertBatch: (t) =>
              (function (t, e) {
                let r = Array(e.length),
                  n = e.reduce(
                    (e, n, i) => (t.is0(n) ? e : ((r[i] = e), t.mul(e, n))),
                    t.ONE
                  ),
                  i = t.inv(n);
                return (
                  e.reduceRight(
                    (e, n, i) =>
                      t.is0(n) ? e : ((r[i] = t.mul(e, r[i])), t.mul(e, n)),
                    i
                  ),
                  r
                );
              })(b, t),
            cmov: (t, e, r) => (r ? e : t),
            toBytes: (t) => (r ? (0, n.S5)(t, m) : (0, n.tL)(t, m)),
            fromBytes: (t) => {
              if (t.length !== m)
                throw Error(`Fp.fromBytes: expected ${m}, got ${t.length}`);
              return r ? (0, n.ty)(t) : (0, n.bytesToNumberBE)(t);
            },
          });
        return Object.freeze(b);
      }
      function v(t) {
        if ("bigint" != typeof t) throw Error("field order must be bigint");
        return Math.ceil(t.toString(2).length / 8);
      }
      function w(t) {
        let e = v(t);
        return e + Math.ceil(e / 2);
      }
      function x(t, e, r = !1) {
        let i = t.length,
          s = v(e),
          a = w(e);
        if (i < 16 || i < a || i > 1024)
          throw Error(`expected ${a}-1024 bytes of input, got ${i}`);
        let u = f(r ? (0, n.bytesToNumberBE)(t) : (0, n.ty)(t), e - o) + o;
        return r ? (0, n.S5)(u, s) : (0, n.tL)(u, s);
      }
    },
    98209: function (t, e, r) {
      "use strict";
      r.d(e, {
        FF: function () {
          return P;
        },
        S5: function () {
          return g;
        },
        _t: function () {
          return o;
        },
        bytesToNumberBE: function () {
          return d;
        },
        ci: function () {
          return u;
        },
        dQ: function () {
          return v;
        },
        eV: function () {
          return b;
        },
        gk: function () {
          return s;
        },
        hexToBytes: function () {
          return h;
        },
        n$: function () {
          return E;
        },
        ql: function () {
          return y;
        },
        tL: function () {
          return m;
        },
        ty: function () {
          return p;
        },
      });
      let n = BigInt(1),
        i = BigInt(2);
      function o(t) {
        return (
          t instanceof Uint8Array ||
          (null != t &&
            "object" == typeof t &&
            "Uint8Array" === t.constructor.name)
        );
      }
      function s(t) {
        if (!o(t)) throw Error("Uint8Array expected");
      }
      let a = Array.from({ length: 256 }, (t, e) =>
        e.toString(16).padStart(2, "0")
      );
      function u(t) {
        s(t);
        let e = "";
        for (let r = 0; r < t.length; r++) e += a[t[r]];
        return e;
      }
      function l(t) {
        if ("string" != typeof t)
          throw Error("hex string expected, got " + typeof t);
        return BigInt("" === t ? "0" : `0x${t}`);
      }
      let c = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
      function f(t) {
        return t >= c._0 && t <= c._9
          ? t - c._0
          : t >= c._A && t <= c._F
          ? t - (c._A - 10)
          : t >= c._a && t <= c._f
          ? t - (c._a - 10)
          : void 0;
      }
      function h(t) {
        if ("string" != typeof t)
          throw Error("hex string expected, got " + typeof t);
        let e = t.length,
          r = e / 2;
        if (e % 2)
          throw Error(
            "padded hex string expected, got unpadded hex of length " + e
          );
        let n = new Uint8Array(r);
        for (let e = 0, i = 0; e < r; e++, i += 2) {
          let r = f(t.charCodeAt(i)),
            o = f(t.charCodeAt(i + 1));
          if (void 0 === r || void 0 === o)
            throw Error(
              'hex string expected, got non-hex character "' +
                (t[i] + t[i + 1]) +
                '" at index ' +
                i
            );
          n[e] = 16 * r + o;
        }
        return n;
      }
      function d(t) {
        return l(u(t));
      }
      function p(t) {
        return s(t), l(u(Uint8Array.from(t).reverse()));
      }
      function m(t, e) {
        return h(t.toString(16).padStart(2 * e, "0"));
      }
      function g(t, e) {
        return m(t, e).reverse();
      }
      function y(t, e, r) {
        let n;
        if ("string" == typeof e)
          try {
            n = h(e);
          } catch (r) {
            throw Error(
              `${t} must be valid hex string, got "${e}". Cause: ${r}`
            );
          }
        else if (o(e)) n = Uint8Array.from(e);
        else throw Error(`${t} must be hex string or Uint8Array`);
        let i = n.length;
        if ("number" == typeof r && i !== r)
          throw Error(`${t} expected ${r} bytes, got ${i}`);
        return n;
      }
      function b(...t) {
        let e = 0;
        for (let r = 0; r < t.length; r++) {
          let n = t[r];
          s(n), (e += n.length);
        }
        let r = new Uint8Array(e);
        for (let e = 0, n = 0; e < t.length; e++) {
          let i = t[e];
          r.set(i, n), (n += i.length);
        }
        return r;
      }
      let v = (t) => (i << BigInt(t - 1)) - n,
        w = (t) => new Uint8Array(t),
        x = (t) => Uint8Array.from(t);
      function E(t, e, r) {
        if ("number" != typeof t || t < 2)
          throw Error("hashLen must be a number");
        if ("number" != typeof e || e < 2)
          throw Error("qByteLen must be a number");
        if ("function" != typeof r) throw Error("hmacFn must be a function");
        let n = w(t),
          i = w(t),
          o = 0,
          s = () => {
            n.fill(1), i.fill(0), (o = 0);
          },
          a = (...t) => r(i, n, ...t),
          u = (t = w()) => {
            (i = a(x([0]), t)),
              (n = a()),
              0 !== t.length && ((i = a(x([1]), t)), (n = a()));
          },
          l = () => {
            if (o++ >= 1e3) throw Error("drbg: tried 1000 values");
            let t = 0,
              r = [];
            for (; t < e; ) {
              let e = (n = a()).slice();
              r.push(e), (t += n.length);
            }
            return b(...r);
          };
        return (t, e) => {
          let r;
          for (s(), u(t); !(r = e(l())); ) u();
          return s(), r;
        };
      }
      let M = {
        bigint: (t) => "bigint" == typeof t,
        function: (t) => "function" == typeof t,
        boolean: (t) => "boolean" == typeof t,
        string: (t) => "string" == typeof t,
        stringOrUint8Array: (t) => "string" == typeof t || o(t),
        isSafeInteger: (t) => Number.isSafeInteger(t),
        array: (t) => Array.isArray(t),
        field: (t, e) => e.Fp.isValid(t),
        hash: (t) =>
          "function" == typeof t && Number.isSafeInteger(t.outputLen),
      };
      function P(t, e, r = {}) {
        let n = (e, r, n) => {
          let i = M[r];
          if ("function" != typeof i)
            throw Error(`Invalid validator "${r}", expected function`);
          let o = t[e];
          if ((!n || void 0 !== o) && !i(o, t))
            throw Error(
              `Invalid param ${String(e)}=${o} (${typeof o}), expected ${r}`
            );
        };
        for (let [t, r] of Object.entries(e)) n(t, r, !1);
        for (let [t, e] of Object.entries(r)) n(t, e, !0);
        return t;
      }
    },
    78012: function (t, e, r) {
      "use strict";
      r.d(e, {
        UN: function () {
          return I;
        },
      });
      var n = r(44815),
        i = r(75390),
        o = r(68104);
      let [s, a] = i.ZP.split(
          [
            "0x428a2f98d728ae22",
            "0x7137449123ef65cd",
            "0xb5c0fbcfec4d3b2f",
            "0xe9b5dba58189dbbc",
            "0x3956c25bf348b538",
            "0x59f111f1b605d019",
            "0x923f82a4af194f9b",
            "0xab1c5ed5da6d8118",
            "0xd807aa98a3030242",
            "0x12835b0145706fbe",
            "0x243185be4ee4b28c",
            "0x550c7dc3d5ffb4e2",
            "0x72be5d74f27b896f",
            "0x80deb1fe3b1696b1",
            "0x9bdc06a725c71235",
            "0xc19bf174cf692694",
            "0xe49b69c19ef14ad2",
            "0xefbe4786384f25e3",
            "0x0fc19dc68b8cd5b5",
            "0x240ca1cc77ac9c65",
            "0x2de92c6f592b0275",
            "0x4a7484aa6ea6e483",
            "0x5cb0a9dcbd41fbd4",
            "0x76f988da831153b5",
            "0x983e5152ee66dfab",
            "0xa831c66d2db43210",
            "0xb00327c898fb213f",
            "0xbf597fc7beef0ee4",
            "0xc6e00bf33da88fc2",
            "0xd5a79147930aa725",
            "0x06ca6351e003826f",
            "0x142929670a0e6e70",
            "0x27b70a8546d22ffc",
            "0x2e1b21385c26c926",
            "0x4d2c6dfc5ac42aed",
            "0x53380d139d95b3df",
            "0x650a73548baf63de",
            "0x766a0abb3c77b2a8",
            "0x81c2c92e47edaee6",
            "0x92722c851482353b",
            "0xa2bfe8a14cf10364",
            "0xa81a664bbc423001",
            "0xc24b8b70d0f89791",
            "0xc76c51a30654be30",
            "0xd192e819d6ef5218",
            "0xd69906245565a910",
            "0xf40e35855771202a",
            "0x106aa07032bbd1b8",
            "0x19a4c116b8d2d0c8",
            "0x1e376c085141ab53",
            "0x2748774cdf8eeb99",
            "0x34b0bcb5e19b48a8",
            "0x391c0cb3c5c95a63",
            "0x4ed8aa4ae3418acb",
            "0x5b9cca4f7763e373",
            "0x682e6ff3d6b2b8a3",
            "0x748f82ee5defb2fc",
            "0x78a5636f43172f60",
            "0x84c87814a1f0ab72",
            "0x8cc702081a6439ec",
            "0x90befffa23631e28",
            "0xa4506cebde82bde9",
            "0xbef9a3f7b2c67915",
            "0xc67178f2e372532b",
            "0xca273eceea26619c",
            "0xd186b8c721c0c207",
            "0xeada7dd6cde0eb1e",
            "0xf57d4f7fee6ed178",
            "0x06f067aa72176fba",
            "0x0a637dc5a2c898a6",
            "0x113f9804bef90dae",
            "0x1b710b35131c471b",
            "0x28db77f523047d84",
            "0x32caab7b40c72493",
            "0x3c9ebe0a15c9bebc",
            "0x431d67c49c100d4c",
            "0x4cc5d4becb3e42b6",
            "0x597f299cfc657e2a",
            "0x5fcb6fab3ad6faec",
            "0x6c44198c4a475817",
          ].map((t) => BigInt(t))
        ),
        u = new Uint32Array(80),
        l = new Uint32Array(80);
      class c extends n.VR {
        constructor() {
          super(128, 64, 16, !1),
            (this.Ah = 1779033703),
            (this.Al = -205731576),
            (this.Bh = -1150833019),
            (this.Bl = -2067093701),
            (this.Ch = 1013904242),
            (this.Cl = -23791573),
            (this.Dh = -1521486534),
            (this.Dl = 1595750129),
            (this.Eh = 1359893119),
            (this.El = -1377402159),
            (this.Fh = -1694144372),
            (this.Fl = 725511199),
            (this.Gh = 528734635),
            (this.Gl = -79577749),
            (this.Hh = 1541459225),
            (this.Hl = 327033209);
        }
        get() {
          let {
            Ah: t,
            Al: e,
            Bh: r,
            Bl: n,
            Ch: i,
            Cl: o,
            Dh: s,
            Dl: a,
            Eh: u,
            El: l,
            Fh: c,
            Fl: f,
            Gh: h,
            Gl: d,
            Hh: p,
            Hl: m,
          } = this;
          return [t, e, r, n, i, o, s, a, u, l, c, f, h, d, p, m];
        }
        set(t, e, r, n, i, o, s, a, u, l, c, f, h, d, p, m) {
          (this.Ah = 0 | t),
            (this.Al = 0 | e),
            (this.Bh = 0 | r),
            (this.Bl = 0 | n),
            (this.Ch = 0 | i),
            (this.Cl = 0 | o),
            (this.Dh = 0 | s),
            (this.Dl = 0 | a),
            (this.Eh = 0 | u),
            (this.El = 0 | l),
            (this.Fh = 0 | c),
            (this.Fl = 0 | f),
            (this.Gh = 0 | h),
            (this.Gl = 0 | d),
            (this.Hh = 0 | p),
            (this.Hl = 0 | m);
        }
        process(t, e) {
          for (let r = 0; r < 16; r++, e += 4)
            (u[r] = t.getUint32(e)), (l[r] = t.getUint32((e += 4)));
          for (let t = 16; t < 80; t++) {
            let e = 0 | u[t - 15],
              r = 0 | l[t - 15],
              n =
                i.ZP.rotrSH(e, r, 1) ^
                i.ZP.rotrSH(e, r, 8) ^
                i.ZP.shrSH(e, r, 7),
              o =
                i.ZP.rotrSL(e, r, 1) ^
                i.ZP.rotrSL(e, r, 8) ^
                i.ZP.shrSL(e, r, 7),
              s = 0 | u[t - 2],
              a = 0 | l[t - 2],
              c =
                i.ZP.rotrSH(s, a, 19) ^
                i.ZP.rotrBH(s, a, 61) ^
                i.ZP.shrSH(s, a, 6),
              f =
                i.ZP.rotrSL(s, a, 19) ^
                i.ZP.rotrBL(s, a, 61) ^
                i.ZP.shrSL(s, a, 6),
              h = i.ZP.add4L(o, f, l[t - 7], l[t - 16]),
              d = i.ZP.add4H(h, n, c, u[t - 7], u[t - 16]);
            (u[t] = 0 | d), (l[t] = 0 | h);
          }
          let {
            Ah: r,
            Al: n,
            Bh: o,
            Bl: c,
            Ch: f,
            Cl: h,
            Dh: d,
            Dl: p,
            Eh: m,
            El: g,
            Fh: y,
            Fl: b,
            Gh: v,
            Gl: w,
            Hh: x,
            Hl: E,
          } = this;
          for (let t = 0; t < 80; t++) {
            let e =
                i.ZP.rotrSH(m, g, 14) ^
                i.ZP.rotrSH(m, g, 18) ^
                i.ZP.rotrBH(m, g, 41),
              M =
                i.ZP.rotrSL(m, g, 14) ^
                i.ZP.rotrSL(m, g, 18) ^
                i.ZP.rotrBL(m, g, 41),
              P = (m & y) ^ (~m & v),
              B = (g & b) ^ (~g & w),
              A = i.ZP.add5L(E, M, B, a[t], l[t]),
              S = i.ZP.add5H(A, x, e, P, s[t], u[t]),
              C = 0 | A,
              I =
                i.ZP.rotrSH(r, n, 28) ^
                i.ZP.rotrBH(r, n, 34) ^
                i.ZP.rotrBH(r, n, 39),
              O =
                i.ZP.rotrSL(r, n, 28) ^
                i.ZP.rotrBL(r, n, 34) ^
                i.ZP.rotrBL(r, n, 39),
              _ = (r & o) ^ (r & f) ^ (o & f),
              k = (n & c) ^ (n & h) ^ (c & h);
            (x = 0 | v),
              (E = 0 | w),
              (v = 0 | y),
              (w = 0 | b),
              (y = 0 | m),
              (b = 0 | g),
              ({ h: m, l: g } = i.ZP.add(0 | d, 0 | p, 0 | S, 0 | C)),
              (d = 0 | f),
              (p = 0 | h),
              (f = 0 | o),
              (h = 0 | c),
              (o = 0 | r),
              (c = 0 | n);
            let $ = i.ZP.add3L(C, O, k);
            (r = i.ZP.add3H($, S, I, _)), (n = 0 | $);
          }
          ({ h: r, l: n } = i.ZP.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)),
            ({ h: o, l: c } = i.ZP.add(0 | this.Bh, 0 | this.Bl, 0 | o, 0 | c)),
            ({ h: f, l: h } = i.ZP.add(0 | this.Ch, 0 | this.Cl, 0 | f, 0 | h)),
            ({ h: d, l: p } = i.ZP.add(0 | this.Dh, 0 | this.Dl, 0 | d, 0 | p)),
            ({ h: m, l: g } = i.ZP.add(0 | this.Eh, 0 | this.El, 0 | m, 0 | g)),
            ({ h: y, l: b } = i.ZP.add(0 | this.Fh, 0 | this.Fl, 0 | y, 0 | b)),
            ({ h: v, l: w } = i.ZP.add(0 | this.Gh, 0 | this.Gl, 0 | v, 0 | w)),
            ({ h: x, l: E } = i.ZP.add(0 | this.Hh, 0 | this.Hl, 0 | x, 0 | E)),
            this.set(r, n, o, c, f, h, d, p, m, g, y, b, v, w, x, E);
        }
        roundClean() {
          u.fill(0), l.fill(0);
        }
        destroy() {
          this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      let f = (0, o.hE)(() => new c());
      var h = r(22544),
        d = r(28072),
        p = r(98209);
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let m =
          BigInt(0),
        g = BigInt(1),
        y = BigInt(2),
        b = BigInt(8),
        v = { zip215: !0 },
        w = BigInt(
          "57896044618658097711785492504343953926634992332820282019728792003956564819949"
        ),
        x = BigInt(
          "19681161376707505956807079304988542015446066515923890162744021073123829784752"
        ),
        E = BigInt(0),
        M = BigInt(1),
        P = BigInt(2);
      BigInt(3);
      let B = BigInt(5),
        A = BigInt(8);
      function S(t, e) {
        let r = (0, d.wQ)(e * e * e, w),
          n = (function (t) {
            let e = BigInt(10),
              r = BigInt(20),
              n = BigInt(40),
              i = BigInt(80),
              o = (((t * t) % w) * t) % w,
              s = ((0, d.oA)(o, P, w) * o) % w,
              a = ((0, d.oA)(s, M, w) * t) % w,
              u = ((0, d.oA)(a, B, w) * a) % w,
              l = ((0, d.oA)(u, e, w) * u) % w,
              c = ((0, d.oA)(l, r, w) * l) % w,
              f = ((0, d.oA)(c, n, w) * c) % w,
              h = ((0, d.oA)(f, i, w) * f) % w,
              p = ((0, d.oA)(h, i, w) * f) % w,
              m = ((0, d.oA)(p, e, w) * u) % w;
            return { pow_p_5_8: ((0, d.oA)(m, P, w) * t) % w, b2: o };
          })(t * (0, d.wQ)(r * r * e, w)).pow_p_5_8,
          i = (0, d.wQ)(t * r * n, w),
          o = (0, d.wQ)(e * i * i, w),
          s = i,
          a = (0, d.wQ)(i * x, w),
          u = o === t,
          l = o === (0, d.wQ)(-t, w),
          c = o === (0, d.wQ)(-t * x, w);
        return (
          u && (i = s),
          (l || c) && (i = a),
          (0, d.Tu)(i, w) && (i = (0, d.wQ)(-i, w)),
          { isValid: u || l, value: i }
        );
      }
      let C = (0, d.gN)(w, void 0, !0),
        I = (function (t) {
          let e = (function (t) {
              let e = (0, h.K)(t);
              return (
                p.FF(
                  t,
                  {
                    hash: "function",
                    a: "bigint",
                    d: "bigint",
                    randomBytes: "function",
                  },
                  {
                    adjustScalarBytes: "function",
                    domain: "function",
                    uvRatio: "function",
                    mapToCurve: "function",
                  }
                ),
                Object.freeze({ ...e })
              );
            })(t),
            {
              Fp: r,
              n: n,
              prehash: i,
              hash: o,
              randomBytes: s,
              nByteLength: a,
              h: u,
            } = e,
            l = y << (BigInt(8 * a) - g),
            c = r.create,
            f =
              e.uvRatio ||
              ((t, e) => {
                try {
                  return { isValid: !0, value: r.sqrt(t * r.inv(e)) };
                } catch (t) {
                  return { isValid: !1, value: m };
                }
              }),
            w = e.adjustScalarBytes || ((t) => t),
            x =
              e.domain ||
              ((t, e, r) => {
                if (e.length || r)
                  throw Error("Contexts/pre-hash are not supported");
                return t;
              }),
            E = (t) => "bigint" == typeof t && m < t,
            M = (t, e) => E(t) && E(e) && t < e,
            P = (t) => t === m || M(t, l);
          function B(t, e) {
            if (M(t, e)) return t;
            throw Error(`Expected valid scalar < ${e}, got ${typeof t} ${t}`);
          }
          function A(t) {
            return t === m ? t : B(t, n);
          }
          let S = new Map();
          function C(t) {
            if (!(t instanceof I)) throw Error("ExtendedPoint expected");
          }
          class I {
            constructor(t, e, r, n) {
              if (
                ((this.ex = t),
                (this.ey = e),
                (this.ez = r),
                (this.et = n),
                !P(t))
              )
                throw Error("x required");
              if (!P(e)) throw Error("y required");
              if (!P(r)) throw Error("z required");
              if (!P(n)) throw Error("t required");
            }
            get x() {
              return this.toAffine().x;
            }
            get y() {
              return this.toAffine().y;
            }
            static fromAffine(t) {
              if (t instanceof I) throw Error("extended point not allowed");
              let { x: e, y: r } = t || {};
              if (!P(e) || !P(r)) throw Error("invalid affine point");
              return new I(e, r, g, c(e * r));
            }
            static normalizeZ(t) {
              let e = r.invertBatch(t.map((t) => t.ez));
              return t.map((t, r) => t.toAffine(e[r])).map(I.fromAffine);
            }
            _setWindowSize(t) {
              (this._WINDOW_SIZE = t), S.delete(this);
            }
            assertValidity() {
              let { a: t, d: r } = e;
              if (this.is0()) throw Error("bad point: ZERO");
              let { ex: n, ey: i, ez: o, et: s } = this,
                a = c(n * n),
                u = c(i * i),
                l = c(o * o),
                f = c(l * l),
                h = c(a * t);
              if (c(l * c(h + u)) !== c(f + c(r * c(a * u))))
                throw Error("bad point: equation left != right (1)");
              if (c(n * i) !== c(o * s))
                throw Error("bad point: equation left != right (2)");
            }
            equals(t) {
              C(t);
              let { ex: e, ey: r, ez: n } = this,
                { ex: i, ey: o, ez: s } = t,
                a = c(e * s),
                u = c(i * n),
                l = c(r * s),
                f = c(o * n);
              return a === u && l === f;
            }
            is0() {
              return this.equals(I.ZERO);
            }
            negate() {
              return new I(c(-this.ex), this.ey, this.ez, c(-this.et));
            }
            double() {
              let { a: t } = e,
                { ex: r, ey: n, ez: i } = this,
                o = c(r * r),
                s = c(n * n),
                a = c(y * c(i * i)),
                u = c(t * o),
                l = r + n,
                f = c(c(l * l) - o - s),
                h = u + s,
                d = h - a,
                p = u - s,
                m = c(f * d),
                g = c(h * p),
                b = c(f * p);
              return new I(m, g, c(d * h), b);
            }
            add(t) {
              C(t);
              let { a: r, d: n } = e,
                { ex: i, ey: o, ez: s, et: a } = this,
                { ex: u, ey: l, ez: f, et: h } = t;
              if (r === BigInt(-1)) {
                let t = c((o - i) * (l + u)),
                  e = c((o + i) * (l - u)),
                  r = c(e - t);
                if (r === m) return this.double();
                let n = c(s * y * h),
                  d = c(a * y * f),
                  p = d + n,
                  g = e + t,
                  b = d - n,
                  v = c(p * r),
                  w = c(g * b),
                  x = c(p * b);
                return new I(v, w, c(r * g), x);
              }
              let d = c(i * u),
                p = c(o * l),
                g = c(a * n * h),
                b = c(s * f),
                v = c((i + o) * (u + l) - d - p),
                w = b - g,
                x = b + g,
                E = c(p - r * d),
                M = c(v * w),
                P = c(x * E),
                B = c(v * E);
              return new I(M, P, c(w * x), B);
            }
            subtract(t) {
              return this.add(t.negate());
            }
            wNAF(t) {
              return k.wNAFCached(this, S, t, I.normalizeZ);
            }
            multiply(t) {
              let { p: e, f: r } = this.wNAF(B(t, n));
              return I.normalizeZ([e, r])[0];
            }
            multiplyUnsafe(t) {
              let e = A(t);
              return e === m
                ? _
                : this.equals(_) || e === g
                ? this
                : this.equals(O)
                ? this.wNAF(e).p
                : k.unsafeLadder(this, e);
            }
            isSmallOrder() {
              return this.multiplyUnsafe(u).is0();
            }
            isTorsionFree() {
              return k.unsafeLadder(this, n).is0();
            }
            toAffine(t) {
              let { ex: e, ey: n, ez: i } = this,
                o = this.is0();
              null == t && (t = o ? b : r.inv(i));
              let s = c(e * t),
                a = c(n * t),
                u = c(i * t);
              if (o) return { x: m, y: g };
              if (u !== g) throw Error("invZ was invalid");
              return { x: s, y: a };
            }
            clearCofactor() {
              let { h: t } = e;
              return t === g ? this : this.multiplyUnsafe(t);
            }
            static fromHex(t, n = !1) {
              let { d: i, a: o } = e,
                s = r.BYTES,
                a = (t = (0, p.ql)("pointHex", t, s)).slice(),
                u = t[s - 1];
              a[s - 1] = -129 & u;
              let h = p.ty(a);
              h === m || (n ? B(h, l) : B(h, r.ORDER));
              let d = c(h * h),
                { isValid: y, value: b } = f(c(d - g), c(i * d - o));
              if (!y) throw Error("Point.fromHex: invalid y coordinate");
              let v = (b & g) === g,
                w = (128 & u) != 0;
              if (!n && b === m && w)
                throw Error("Point.fromHex: x=0 and x_0=1");
              return w !== v && (b = c(-b)), I.fromAffine({ x: b, y: h });
            }
            static fromPrivateKey(t) {
              return R(t).point;
            }
            toRawBytes() {
              let { x: t, y: e } = this.toAffine(),
                n = p.S5(e, r.BYTES);
              return (n[n.length - 1] |= t & g ? 128 : 0), n;
            }
            toHex() {
              return p.ci(this.toRawBytes());
            }
          }
          (I.BASE = new I(e.Gx, e.Gy, g, c(e.Gx * e.Gy))),
            (I.ZERO = new I(m, g, g, m));
          let { BASE: O, ZERO: _ } = I,
            k = (0, h.M)(I, 8 * a);
          function $(t) {
            var e;
            return (e = p.ty(t)), (0, d.wQ)(e, n);
          }
          function R(t) {
            t = (0, p.ql)("private key", t, a);
            let e = (0, p.ql)("hashed private key", o(t), 2 * a),
              r = w(e.slice(0, a)),
              n = e.slice(a, 2 * a),
              i = $(r),
              s = O.multiply(i),
              u = s.toRawBytes();
            return { head: r, prefix: n, scalar: i, point: s, pointBytes: u };
          }
          function U(t = new Uint8Array(), ...e) {
            return $(o(x(p.eV(...e), (0, p.ql)("context", t), !!i)));
          }
          return (
            O._setWindowSize(8),
            {
              CURVE: e,
              getPublicKey: function (t) {
                return R(t).pointBytes;
              },
              sign: function (t, e, o = {}) {
                var s;
                (t = (0, p.ql)("message", t)), i && (t = i(t));
                let { prefix: u, scalar: l, pointBytes: c } = R(e),
                  f = U(o.context, u, t),
                  h = O.multiply(f).toRawBytes(),
                  m = ((s = f + U(o.context, h, c, t) * l), (0, d.wQ)(s, n));
                A(m);
                let g = p.eV(h, p.S5(m, r.BYTES));
                return (0, p.ql)("result", g, 2 * a);
              },
              verify: function (t, e, n, o = v) {
                let s, a, u;
                let { context: l, zip215: c } = o,
                  f = r.BYTES;
                (t = (0, p.ql)("signature", t, 2 * f)),
                  (e = (0, p.ql)("message", e)),
                  i && (e = i(e));
                let h = p.ty(t.slice(f, 2 * f));
                try {
                  (s = I.fromHex(n, c)),
                    (a = I.fromHex(t.slice(0, f), c)),
                    (u = O.multiplyUnsafe(h));
                } catch (t) {
                  return !1;
                }
                if (!c && s.isSmallOrder()) return !1;
                let d = U(l, a.toRawBytes(), s.toRawBytes(), e);
                return a
                  .add(s.multiplyUnsafe(d))
                  .subtract(u)
                  .clearCofactor()
                  .equals(I.ZERO);
              },
              ExtendedPoint: I,
              utils: {
                getExtendedPublicKey: R,
                randomPrivateKey: () => s(r.BYTES),
                precompute: (t = 8, e = I.BASE) => (
                  e._setWindowSize(t), e.multiply(BigInt(3)), e
                ),
              },
            }
          );
        })({
          a: BigInt(-1),
          d: BigInt(
            "37095705934669439343138083508754565189542113879843219016388785533085940283555"
          ),
          Fp: C,
          n: BigInt(
            "7237005577332262213973186563042994240857116359379907606001950938285454250989"
          ),
          h: A,
          Gx: BigInt(
            "15112221349535400772501151409588531511454012693041857206046113283949847762202"
          ),
          Gy: BigInt(
            "46316835694926478169428394003475163141307993866256225615783033603165251855960"
          ),
          hash: f,
          randomBytes: o.O6,
          adjustScalarBytes: function (t) {
            return (t[0] &= 248), (t[31] &= 127), (t[31] |= 64), t;
          },
          uvRatio: S,
        });
      function O(t) {
        if (!(t instanceof R)) throw Error("RistrettoPoint expected");
      }
      let _ = (t) => S(M, t),
        k = (t) => I.CURVE.Fp.create(null & bytesToNumberLE(t));
      function $(t) {
        let { d: e } = I.CURVE,
          r = I.CURVE.Fp.ORDER,
          n = I.CURVE.Fp.create,
          i = n(null * t * t),
          o = n((i + M) * null),
          s = BigInt(-1),
          a = n((s - e * i) * n(i + e)),
          { isValid: u, value: l } = S(o, a),
          c = n(l * t);
        isNegativeLE(c, r) || (c = n(-c)), u || (l = c), u || (s = i);
        let f = n(s * (i - M) * null - a),
          h = l * l,
          d = n((l + l) * a),
          p = n(null * f),
          m = n(M - h),
          g = n(M + h);
        return new I.ExtendedPoint(n(d * g), n(m * p), n(p * g), n(d * m));
      }
      class R {
        constructor(t) {
          this.ep = t;
        }
        static fromAffine(t) {
          return new R(I.ExtendedPoint.fromAffine(t));
        }
        static hashToCurve(t) {
          let e = $(k((t = ensureBytes("ristrettoHash", t, 64)).slice(0, 32))),
            r = $(k(t.slice(32, 64)));
          return new R(e.add(r));
        }
        static fromHex(t) {
          t = ensureBytes("ristrettoHex", t, 32);
          let { a: e, d: r } = I.CURVE,
            n = I.CURVE.Fp.ORDER,
            i = I.CURVE.Fp.create,
            o =
              "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint",
            s = k(t);
          if (!equalBytes(numberToBytesLE(s, 32), t) || isNegativeLE(s, n))
            throw Error(o);
          let a = i(s * s),
            u = i(M + e * a),
            l = i(M - e * a),
            c = i(u * u),
            f = i(l * l),
            h = i(e * r * c - f),
            { isValid: d, value: p } = _(i(h * f)),
            m = i(p * l),
            g = i(p * m * h),
            y = i((s + s) * m);
          isNegativeLE(y, n) && (y = i(-y));
          let b = i(u * g),
            v = i(y * b);
          if (!d || isNegativeLE(v, n) || b === E) throw Error(o);
          return new R(new I.ExtendedPoint(y, b, M, v));
        }
        toRawBytes() {
          let t,
            { ex: e, ey: r, ez: n, et: i } = this.ep,
            o = I.CURVE.Fp.ORDER,
            s = I.CURVE.Fp.create,
            a = s(s(n + r) * s(n - r)),
            u = s(e * r),
            l = s(u * u),
            { value: c } = _(s(a * l)),
            f = s(c * a),
            h = s(c * u),
            d = s(f * h * i);
          if (isNegativeLE(i * d, o)) {
            let n = s(null * r),
              i = s(null * e);
            (e = n), (r = i), (t = s(null * f));
          } else t = h;
          isNegativeLE(e * d, o) && (r = s(-r));
          let p = s((n - r) * t);
          return isNegativeLE(p, o) && (p = s(-p)), numberToBytesLE(p, 32);
        }
        toHex() {
          return bytesToHex(this.toRawBytes());
        }
        toString() {
          return this.toHex();
        }
        equals(t) {
          O(t);
          let { ex: e, ey: r } = this.ep,
            { ex: n, ey: i } = t.ep,
            o = I.CURVE.Fp.create,
            s = o(e * i) === o(r * n),
            a = o(r * i) === o(e * n);
          return s || a;
        }
        add(t) {
          return O(t), new R(this.ep.add(t.ep));
        }
        subtract(t) {
          return O(t), new R(this.ep.subtract(t.ep));
        }
        multiply(t) {
          return new R(this.ep.multiply(t));
        }
        multiplyUnsafe(t) {
          return new R(this.ep.multiplyUnsafe(t));
        }
        double() {
          return new R(this.ep.double());
        }
        negate() {
          return new R(this.ep.negate());
        }
      }
    },
    38638: function (t, e, r) {
      "use strict";
      r.d(e, {
        kA: function () {
          return x;
        },
      });
      var n = r(65530),
        i = r(93557),
        o = r(68104),
        s = r(22544),
        a = r(28072),
        u = r(98209);
      let { bytesToNumberBE: l, hexToBytes: c } = u,
        f = {
          Err: class extends Error {
            constructor(t = "") {
              super(t);
            }
          },
          _parseInt(t) {
            let { Err: e } = f;
            if (t.length < 2 || 2 !== t[0])
              throw new e("Invalid signature integer tag");
            let r = t[1],
              n = t.subarray(2, r + 2);
            if (!r || n.length !== r)
              throw new e("Invalid signature integer: wrong length");
            if (128 & n[0]) throw new e("Invalid signature integer: negative");
            if (0 === n[0] && !(128 & n[1]))
              throw new e(
                "Invalid signature integer: unnecessary leading zero"
              );
            return { d: l(n), l: t.subarray(r + 2) };
          },
          toSig(t) {
            let { Err: e } = f,
              r = "string" == typeof t ? c(t) : t;
            u.gk(r);
            let n = r.length;
            if (n < 2 || 48 != r[0]) throw new e("Invalid signature tag");
            if (r[1] !== n - 2)
              throw new e("Invalid signature: incorrect length");
            let { d: i, l: o } = f._parseInt(r.subarray(2)),
              { d: s, l: a } = f._parseInt(o);
            if (a.length)
              throw new e("Invalid signature: left bytes after parsing");
            return { r: i, s };
          },
          hexFromSig(t) {
            let e = (t) => (8 & Number.parseInt(t[0], 16) ? "00" + t : t),
              r = (t) => {
                let e = t.toString(16);
                return 1 & e.length ? `0${e}` : e;
              },
              n = e(r(t.s)),
              i = e(r(t.r)),
              o = n.length / 2,
              s = i.length / 2,
              a = r(o),
              u = r(s);
            return `30${r(s + o + 4)}02${u}${i}02${a}${n}`;
          },
        },
        h = BigInt(0),
        d = BigInt(1),
        p = (BigInt(2), BigInt(3));
      BigInt(4);
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let m =
          BigInt(
            "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
          ),
        g = BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        ),
        y = BigInt(1),
        b = BigInt(2),
        v = (t, e) => (t + e / b) / e,
        w = (0, a.gN)(m, void 0, void 0, {
          sqrt: function (t) {
            let e = BigInt(3),
              r = BigInt(6),
              n = BigInt(11),
              i = BigInt(22),
              o = BigInt(23),
              s = BigInt(44),
              u = BigInt(88),
              l = (t * t * t) % m,
              c = (l * l * t) % m,
              f = ((0, a.oA)(c, e, m) * c) % m,
              h = ((0, a.oA)(f, e, m) * c) % m,
              d = ((0, a.oA)(h, b, m) * l) % m,
              p = ((0, a.oA)(d, n, m) * d) % m,
              g = ((0, a.oA)(p, i, m) * p) % m,
              y = ((0, a.oA)(g, s, m) * g) % m,
              v = ((0, a.oA)(y, u, m) * y) % m,
              x = ((0, a.oA)(v, s, m) * g) % m,
              E = ((0, a.oA)(x, e, m) * c) % m,
              M = ((0, a.oA)(E, o, m) * p) % m,
              P = ((0, a.oA)(M, r, m) * l) % m,
              B = (0, a.oA)(P, b, m);
            if (!w.eql(w.sqr(B), t)) throw Error("Cannot find square root");
            return B;
          },
        }),
        x = (function (t, e) {
          let r = (e) =>
            (function (t) {
              let e = (function (t) {
                  let e = (0, s.K)(t);
                  return (
                    u.FF(
                      e,
                      {
                        hash: "hash",
                        hmac: "function",
                        randomBytes: "function",
                      },
                      {
                        bits2int: "function",
                        bits2int_modN: "function",
                        lowS: "boolean",
                      }
                    ),
                    Object.freeze({ lowS: !0, ...e })
                  );
                })(t),
                { Fp: r, n: n } = e,
                i = r.BYTES + 1,
                o = 2 * r.BYTES + 1;
              function l(t) {
                return a.wQ(t, n);
              }
              function c(t) {
                return a.U_(t, n);
              }
              let {
                  ProjectivePoint: m,
                  normPrivateKeyToScalar: g,
                  weierstrassEquation: y,
                  isWithinCurveOrder: b,
                } = (function (t) {
                  let e =
                      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ (function (
                        t
                      ) {
                        let e = (0, s.K)(t);
                        u.FF(
                          e,
                          { a: "field", b: "field" },
                          {
                            allowedPrivateKeyLengths: "array",
                            wrapPrivateKey: "boolean",
                            isTorsionFree: "function",
                            clearCofactor: "function",
                            allowInfinityPoint: "boolean",
                            fromBytes: "function",
                            toBytes: "function",
                          }
                        );
                        let { endo: r, Fp: n, a: i } = e;
                        if (r) {
                          if (!n.eql(i, n.ZERO))
                            throw Error(
                              "Endomorphism can only be defined for Koblitz curves that have a=0"
                            );
                          if (
                            "object" != typeof r ||
                            "bigint" != typeof r.beta ||
                            "function" != typeof r.splitScalar
                          )
                            throw Error(
                              "Expected endomorphism with beta: bigint and splitScalar: function"
                            );
                        }
                        return Object.freeze({ ...e });
                      })(t),
                    { Fp: r } = e,
                    n =
                      e.toBytes ||
                      ((t, e, n) => {
                        let i = e.toAffine();
                        return u.eV(
                          Uint8Array.from([4]),
                          r.toBytes(i.x),
                          r.toBytes(i.y)
                        );
                      }),
                    i =
                      e.fromBytes ||
                      ((t) => {
                        let e = t.subarray(1);
                        return {
                          x: r.fromBytes(e.subarray(0, r.BYTES)),
                          y: r.fromBytes(e.subarray(r.BYTES, 2 * r.BYTES)),
                        };
                      });
                  function o(t) {
                    let { a: n, b: i } = e,
                      o = r.sqr(t),
                      s = r.mul(o, t);
                    return r.add(r.add(s, r.mul(t, n)), i);
                  }
                  if (!r.eql(r.sqr(e.Gy), o(e.Gx)))
                    throw Error("bad generator point: equation left != right");
                  function l(t) {
                    return "bigint" == typeof t && h < t && t < e.n;
                  }
                  function c(t) {
                    if (!l(t))
                      throw Error(
                        "Expected valid bigint: 0 < bigint < curve.n"
                      );
                  }
                  function f(t) {
                    let r;
                    let {
                      allowedPrivateKeyLengths: n,
                      nByteLength: i,
                      wrapPrivateKey: o,
                      n: s,
                    } = e;
                    if (n && "bigint" != typeof t) {
                      if (
                        (u._t(t) && (t = u.ci(t)),
                        "string" != typeof t || !n.includes(t.length))
                      )
                        throw Error("Invalid key");
                      t = t.padStart(2 * i, "0");
                    }
                    try {
                      r =
                        "bigint" == typeof t
                          ? t
                          : u.bytesToNumberBE((0, u.ql)("private key", t, i));
                    } catch (e) {
                      throw Error(
                        `private key must be ${i} bytes, hex or bigint, not ${typeof t}`
                      );
                    }
                    return o && (r = a.wQ(r, s)), c(r), r;
                  }
                  let m = new Map();
                  function g(t) {
                    if (!(t instanceof y))
                      throw Error("ProjectivePoint expected");
                  }
                  class y {
                    constructor(t, e, n) {
                      if (
                        ((this.px = t),
                        (this.py = e),
                        (this.pz = n),
                        null == t || !r.isValid(t))
                      )
                        throw Error("x required");
                      if (null == e || !r.isValid(e)) throw Error("y required");
                      if (null == n || !r.isValid(n)) throw Error("z required");
                    }
                    static fromAffine(t) {
                      let { x: e, y: n } = t || {};
                      if (!t || !r.isValid(e) || !r.isValid(n))
                        throw Error("invalid affine point");
                      if (t instanceof y)
                        throw Error("projective point not allowed");
                      let i = (t) => r.eql(t, r.ZERO);
                      return i(e) && i(n) ? y.ZERO : new y(e, n, r.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(t) {
                      let e = r.invertBatch(t.map((t) => t.pz));
                      return t
                        .map((t, r) => t.toAffine(e[r]))
                        .map(y.fromAffine);
                    }
                    static fromHex(t) {
                      let e = y.fromAffine(i((0, u.ql)("pointHex", t)));
                      return e.assertValidity(), e;
                    }
                    static fromPrivateKey(t) {
                      return y.BASE.multiply(f(t));
                    }
                    _setWindowSize(t) {
                      (this._WINDOW_SIZE = t), m.delete(this);
                    }
                    assertValidity() {
                      if (this.is0()) {
                        if (e.allowInfinityPoint && !r.is0(this.py)) return;
                        throw Error("bad point: ZERO");
                      }
                      let { x: t, y: n } = this.toAffine();
                      if (!r.isValid(t) || !r.isValid(n))
                        throw Error("bad point: x or y not FE");
                      let i = r.sqr(n),
                        s = o(t);
                      if (!r.eql(i, s))
                        throw Error("bad point: equation left != right");
                      if (!this.isTorsionFree())
                        throw Error("bad point: not in prime-order subgroup");
                    }
                    hasEvenY() {
                      let { y: t } = this.toAffine();
                      if (r.isOdd) return !r.isOdd(t);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(t) {
                      g(t);
                      let { px: e, py: n, pz: i } = this,
                        { px: o, py: s, pz: a } = t,
                        u = r.eql(r.mul(e, a), r.mul(o, i)),
                        l = r.eql(r.mul(n, a), r.mul(s, i));
                      return u && l;
                    }
                    negate() {
                      return new y(this.px, r.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: t, b: n } = e,
                        i = r.mul(n, p),
                        { px: o, py: s, pz: a } = this,
                        u = r.ZERO,
                        l = r.ZERO,
                        c = r.ZERO,
                        f = r.mul(o, o),
                        h = r.mul(s, s),
                        d = r.mul(a, a),
                        m = r.mul(o, s);
                      return (
                        (m = r.add(m, m)),
                        (c = r.mul(o, a)),
                        (c = r.add(c, c)),
                        (u = r.mul(t, c)),
                        (l = r.mul(i, d)),
                        (l = r.add(u, l)),
                        (u = r.sub(h, l)),
                        (l = r.add(h, l)),
                        (l = r.mul(u, l)),
                        (u = r.mul(m, u)),
                        (c = r.mul(i, c)),
                        (d = r.mul(t, d)),
                        (m = r.sub(f, d)),
                        (m = r.mul(t, m)),
                        (m = r.add(m, c)),
                        (c = r.add(f, f)),
                        (f = r.add(c, f)),
                        (f = r.add(f, d)),
                        (f = r.mul(f, m)),
                        (l = r.add(l, f)),
                        (d = r.mul(s, a)),
                        (d = r.add(d, d)),
                        (f = r.mul(d, m)),
                        (u = r.sub(u, f)),
                        (c = r.mul(d, h)),
                        (c = r.add(c, c)),
                        new y(u, l, (c = r.add(c, c)))
                      );
                    }
                    add(t) {
                      g(t);
                      let { px: n, py: i, pz: o } = this,
                        { px: s, py: a, pz: u } = t,
                        l = r.ZERO,
                        c = r.ZERO,
                        f = r.ZERO,
                        h = e.a,
                        d = r.mul(e.b, p),
                        m = r.mul(n, s),
                        b = r.mul(i, a),
                        v = r.mul(o, u),
                        w = r.add(n, i),
                        x = r.add(s, a);
                      (w = r.mul(w, x)),
                        (x = r.add(m, b)),
                        (w = r.sub(w, x)),
                        (x = r.add(n, o));
                      let E = r.add(s, u);
                      return (
                        (x = r.mul(x, E)),
                        (E = r.add(m, v)),
                        (x = r.sub(x, E)),
                        (E = r.add(i, o)),
                        (l = r.add(a, u)),
                        (E = r.mul(E, l)),
                        (l = r.add(b, v)),
                        (E = r.sub(E, l)),
                        (f = r.mul(h, x)),
                        (l = r.mul(d, v)),
                        (f = r.add(l, f)),
                        (l = r.sub(b, f)),
                        (f = r.add(b, f)),
                        (c = r.mul(l, f)),
                        (b = r.add(m, m)),
                        (b = r.add(b, m)),
                        (v = r.mul(h, v)),
                        (x = r.mul(d, x)),
                        (b = r.add(b, v)),
                        (v = r.sub(m, v)),
                        (v = r.mul(h, v)),
                        (x = r.add(x, v)),
                        (m = r.mul(b, x)),
                        (c = r.add(c, m)),
                        (m = r.mul(E, x)),
                        (l = r.mul(w, l)),
                        (l = r.sub(l, m)),
                        (m = r.mul(w, b)),
                        (f = r.mul(E, f)),
                        new y(l, c, (f = r.add(f, m)))
                      );
                    }
                    subtract(t) {
                      return this.add(t.negate());
                    }
                    is0() {
                      return this.equals(y.ZERO);
                    }
                    wNAF(t) {
                      return v.wNAFCached(this, m, t, (t) => {
                        let e = r.invertBatch(t.map((t) => t.pz));
                        return t
                          .map((t, r) => t.toAffine(e[r]))
                          .map(y.fromAffine);
                      });
                    }
                    multiplyUnsafe(t) {
                      let n = y.ZERO;
                      if (t === h) return n;
                      if ((c(t), t === d)) return this;
                      let { endo: i } = e;
                      if (!i) return v.unsafeLadder(this, t);
                      let {
                          k1neg: o,
                          k1: s,
                          k2neg: a,
                          k2: u,
                        } = i.splitScalar(t),
                        l = n,
                        f = n,
                        p = this;
                      for (; s > h || u > h; )
                        s & d && (l = l.add(p)),
                          u & d && (f = f.add(p)),
                          (p = p.double()),
                          (s >>= d),
                          (u >>= d);
                      return (
                        o && (l = l.negate()),
                        a && (f = f.negate()),
                        (f = new y(r.mul(f.px, i.beta), f.py, f.pz)),
                        l.add(f)
                      );
                    }
                    multiply(t) {
                      let n, i;
                      c(t);
                      let { endo: o } = e;
                      if (o) {
                        let {
                            k1neg: e,
                            k1: s,
                            k2neg: a,
                            k2: u,
                          } = o.splitScalar(t),
                          { p: l, f: c } = this.wNAF(s),
                          { p: f, f: h } = this.wNAF(u);
                        (l = v.constTimeNegate(e, l)),
                          (f = v.constTimeNegate(a, f)),
                          (f = new y(r.mul(f.px, o.beta), f.py, f.pz)),
                          (n = l.add(f)),
                          (i = c.add(h));
                      } else {
                        let { p: e, f: r } = this.wNAF(t);
                        (n = e), (i = r);
                      }
                      return y.normalizeZ([n, i])[0];
                    }
                    multiplyAndAddUnsafe(t, e, r) {
                      let n = y.BASE,
                        i = (t, e) =>
                          e !== h && e !== d && t.equals(n)
                            ? t.multiply(e)
                            : t.multiplyUnsafe(e),
                        o = i(this, e).add(i(t, r));
                      return o.is0() ? void 0 : o;
                    }
                    toAffine(t) {
                      let { px: e, py: n, pz: i } = this,
                        o = this.is0();
                      null == t && (t = o ? r.ONE : r.inv(i));
                      let s = r.mul(e, t),
                        a = r.mul(n, t),
                        u = r.mul(i, t);
                      if (o) return { x: r.ZERO, y: r.ZERO };
                      if (!r.eql(u, r.ONE)) throw Error("invZ was invalid");
                      return { x: s, y: a };
                    }
                    isTorsionFree() {
                      let { h: t, isTorsionFree: r } = e;
                      if (t === d) return !0;
                      if (r) return r(y, this);
                      throw Error(
                        "isTorsionFree() has not been declared for the elliptic curve"
                      );
                    }
                    clearCofactor() {
                      let { h: t, clearCofactor: r } = e;
                      return t === d
                        ? this
                        : r
                        ? r(y, this)
                        : this.multiplyUnsafe(e.h);
                    }
                    toRawBytes(t = !0) {
                      return this.assertValidity(), n(y, this, t);
                    }
                    toHex(t = !0) {
                      return u.ci(this.toRawBytes(t));
                    }
                  }
                  (y.BASE = new y(e.Gx, e.Gy, r.ONE)),
                    (y.ZERO = new y(r.ZERO, r.ONE, r.ZERO));
                  let b = e.nBitLength,
                    v = (0, s.M)(y, e.endo ? Math.ceil(b / 2) : b);
                  return {
                    CURVE: e,
                    ProjectivePoint: y,
                    normPrivateKeyToScalar: f,
                    weierstrassEquation: o,
                    isWithinCurveOrder: l,
                  };
                })({
                  ...e,
                  toBytes(t, e, n) {
                    let i = e.toAffine(),
                      o = r.toBytes(i.x),
                      s = u.eV;
                    return n
                      ? s(Uint8Array.from([e.hasEvenY() ? 2 : 3]), o)
                      : s(Uint8Array.from([4]), o, r.toBytes(i.y));
                  },
                  fromBytes(t) {
                    let e = t.length,
                      n = t[0],
                      s = t.subarray(1);
                    if (e === i && (2 === n || 3 === n)) {
                      let t;
                      let e = u.bytesToNumberBE(s);
                      if (!(h < e && e < r.ORDER))
                        throw Error("Point is not on curve");
                      let i = y(e);
                      try {
                        t = r.sqrt(i);
                      } catch (t) {
                        throw Error(
                          "Point is not on curve" +
                            (t instanceof Error ? ": " + t.message : "")
                        );
                      }
                      return (
                        ((1 & n) == 1) != ((t & d) === d) && (t = r.neg(t)),
                        { x: e, y: t }
                      );
                    }
                    if (e === o && 4 === n)
                      return {
                        x: r.fromBytes(s.subarray(0, r.BYTES)),
                        y: r.fromBytes(s.subarray(r.BYTES, 2 * r.BYTES)),
                      };
                    throw Error(
                      `Point of length ${e} was invalid. Expected ${i} compressed bytes or ${o} uncompressed bytes`
                    );
                  },
                }),
                v = (t) => u.ci(u.tL(t, e.nByteLength)),
                w = (t, e, r) => u.bytesToNumberBE(t.slice(e, r));
              class x {
                constructor(t, e, r) {
                  (this.r = t),
                    (this.s = e),
                    (this.recovery = r),
                    this.assertValidity();
                }
                static fromCompact(t) {
                  let r = e.nByteLength;
                  return new x(
                    w((t = (0, u.ql)("compactSignature", t, 2 * r)), 0, r),
                    w(t, r, 2 * r)
                  );
                }
                static fromDER(t) {
                  let { r: e, s: r } = f.toSig((0, u.ql)("DER", t));
                  return new x(e, r);
                }
                assertValidity() {
                  if (!b(this.r)) throw Error("r must be 0 < r < CURVE.n");
                  if (!b(this.s)) throw Error("s must be 0 < s < CURVE.n");
                }
                addRecoveryBit(t) {
                  return new x(this.r, this.s, t);
                }
                recoverPublicKey(t) {
                  let { r: n, s: i, recovery: o } = this,
                    s = P((0, u.ql)("msgHash", t));
                  if (null == o || ![0, 1, 2, 3].includes(o))
                    throw Error("recovery id invalid");
                  let a = 2 === o || 3 === o ? n + e.n : n;
                  if (a >= r.ORDER) throw Error("recovery id 2 or 3 invalid");
                  let f = (1 & o) == 0 ? "02" : "03",
                    h = m.fromHex(f + v(a)),
                    d = c(a),
                    p = l(-s * d),
                    g = l(i * d),
                    y = m.BASE.multiplyAndAddUnsafe(h, p, g);
                  if (!y) throw Error("point at infinify");
                  return y.assertValidity(), y;
                }
                hasHighS() {
                  return this.s > n >> d;
                }
                normalizeS() {
                  return this.hasHighS()
                    ? new x(this.r, l(-this.s), this.recovery)
                    : this;
                }
                toDERRawBytes() {
                  return u.hexToBytes(this.toDERHex());
                }
                toDERHex() {
                  return f.hexFromSig({ r: this.r, s: this.s });
                }
                toCompactRawBytes() {
                  return u.hexToBytes(this.toCompactHex());
                }
                toCompactHex() {
                  return v(this.r) + v(this.s);
                }
              }
              function E(t) {
                let e = u._t(t),
                  r = "string" == typeof t,
                  n = (e || r) && t.length;
                return e
                  ? n === i || n === o
                  : r
                  ? n === 2 * i || n === 2 * o
                  : t instanceof m;
              }
              let M =
                  e.bits2int ||
                  function (t) {
                    let r = u.bytesToNumberBE(t),
                      n = 8 * t.length - e.nBitLength;
                    return n > 0 ? r >> BigInt(n) : r;
                  },
                P =
                  e.bits2int_modN ||
                  function (t) {
                    return l(M(t));
                  },
                B = u.dQ(e.nBitLength);
              function A(t) {
                if ("bigint" != typeof t) throw Error("bigint expected");
                if (!(h <= t && t < B))
                  throw Error(`bigint expected < 2^${e.nBitLength}`);
                return u.tL(t, e.nByteLength);
              }
              let S = { lowS: e.lowS, prehash: !1 },
                C = { lowS: e.lowS, prehash: !1 };
              return (
                m.BASE._setWindowSize(8),
                {
                  CURVE: e,
                  getPublicKey: function (t, e = !0) {
                    return m.fromPrivateKey(t).toRawBytes(e);
                  },
                  getSharedSecret: function (t, e, r = !0) {
                    if (E(t)) throw Error("first arg must be private key");
                    if (!E(e)) throw Error("second arg must be public key");
                    return m.fromHex(e).multiply(g(t)).toRawBytes(r);
                  },
                  sign: function (t, i, o = S) {
                    let { seed: s, k2sig: a } = (function (t, i, o = S) {
                      if (["recovered", "canonical"].some((t) => t in o))
                        throw Error("sign() legacy options not supported");
                      let { hash: s, randomBytes: a } = e,
                        { lowS: f, prehash: p, extraEntropy: y } = o;
                      null == f && (f = !0),
                        (t = (0, u.ql)("msgHash", t)),
                        p && (t = (0, u.ql)("prehashed msgHash", s(t)));
                      let v = P(t),
                        w = g(i),
                        E = [A(w), A(v)];
                      if (null != y && !1 !== y) {
                        let t = !0 === y ? a(r.BYTES) : y;
                        E.push((0, u.ql)("extraEntropy", t));
                      }
                      return {
                        seed: u.eV(...E),
                        k2sig: function (t) {
                          let e = M(t);
                          if (!b(e)) return;
                          let r = c(e),
                            i = m.BASE.multiply(e).toAffine(),
                            o = l(i.x);
                          if (o === h) return;
                          let s = l(r * l(v + o * w));
                          if (s === h) return;
                          let a = (i.x === o ? 0 : 2) | Number(i.y & d),
                            u = s;
                          if (f && s > n >> d)
                            (u = s > n >> d ? l(-s) : s), (a ^= 1);
                          return new x(o, u, a);
                        },
                      };
                    })(t, i, o);
                    return u.n$(e.hash.outputLen, e.nByteLength, e.hmac)(s, a);
                  },
                  verify: function (t, r, n, i = C) {
                    let o, s;
                    if (
                      ((r = (0, u.ql)("msgHash", r)),
                      (n = (0, u.ql)("publicKey", n)),
                      "strict" in i)
                    )
                      throw Error("options.strict was renamed to lowS");
                    let { lowS: a, prehash: h } = i;
                    try {
                      if ("string" == typeof t || u._t(t))
                        try {
                          s = x.fromDER(t);
                        } catch (e) {
                          if (!(e instanceof f.Err)) throw e;
                          s = x.fromCompact(t);
                        }
                      else if (
                        "object" == typeof t &&
                        "bigint" == typeof t.r &&
                        "bigint" == typeof t.s
                      ) {
                        let { r: e, s: r } = t;
                        s = new x(e, r);
                      } else throw Error("PARSE");
                      o = m.fromHex(n);
                    } catch (t) {
                      if ("PARSE" === t.message)
                        throw Error(
                          "signature must be Signature instance, Uint8Array or hex string"
                        );
                      return !1;
                    }
                    if (a && s.hasHighS()) return !1;
                    h && (r = e.hash(r));
                    let { r: d, s: p } = s,
                      g = P(r),
                      y = c(p),
                      b = l(g * y),
                      v = l(d * y),
                      w = m.BASE.multiplyAndAddUnsafe(o, b, v)?.toAffine();
                    return !!w && l(w.x) === d;
                  },
                  ProjectivePoint: m,
                  Signature: x,
                  utils: {
                    isValidPrivateKey(t) {
                      try {
                        return g(t), !0;
                      } catch (t) {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: g,
                    randomPrivateKey: () => {
                      let t = a.PS(e.n);
                      return a.Us(e.randomBytes(t), e.n);
                    },
                    precompute: (t = 8, e = m.BASE) => (
                      e._setWindowSize(t), e.multiply(BigInt(3)), e
                    ),
                  },
                }
              );
            })({
              ...t,
              hash: e,
              hmac: (t, ...r) => (0, i.b)(e, t, (0, o.eV)(...r)),
              randomBytes: o.O6,
            });
          return Object.freeze({ ...r(e), create: r });
        })(
          {
            a: BigInt(0),
            b: BigInt(7),
            Fp: w,
            n: g,
            Gx: BigInt(
              "55066263022277343669578718895168534326250603453777594175500187360389116729240"
            ),
            Gy: BigInt(
              "32670510020758816978083085130507043184471273380659243275938904335757337482424"
            ),
            h: BigInt(1),
            lowS: !0,
            endo: {
              beta: BigInt(
                "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
              ),
              splitScalar: (t) => {
                let e = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                  r = -y * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                  n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                  i = BigInt("0x100000000000000000000000000000000"),
                  o = v(e * t, g),
                  s = v(-r * t, g),
                  u = (0, a.wQ)(t - o * e - s * n, g),
                  l = (0, a.wQ)(-o * r - s * e, g),
                  c = u > i,
                  f = l > i;
                if ((c && (u = g - u), f && (l = g - l), u > i || l > i))
                  throw Error("splitScalar: Endomorphism failed, k=" + t);
                return { k1neg: c, k1: u, k2neg: f, k2: l };
              },
            },
          },
          n.J
        );
      BigInt(0), x.ProjectivePoint;
    },
    13025: function (t, e, r) {
      "use strict";
      r.d(e, {
        AG: function () {
          return v;
        },
        G0: function () {
          return A;
        },
        IM: function () {
          return E;
        },
        IX: function () {
          return m;
        },
        O7: function () {
          return g;
        },
        Rx: function () {
          return w;
        },
        Ue: function () {
          return f;
        },
        Yj: function () {
          return p;
        },
        Z_: function () {
          return M;
        },
        _4: function () {
          return S;
        },
        bc: function () {
          return P;
        },
        dt: function () {
          return B;
        },
        eE: function () {
          return y;
        },
        hu: function () {
          return c;
        },
        i0: function () {
          return b;
        },
        jt: function () {
          return x;
        },
        oQ: function () {
          return C;
        },
      });
      class n extends TypeError {
        constructor(t, e) {
          let r;
          let { message: n, explanation: i, ...o } = t,
            { path: s } = t,
            a = 0 === s.length ? n : `At path: ${s.join(".")} -- ${n}`;
          super(i ?? a),
            null != i && (this.cause = a),
            Object.assign(this, o),
            (this.name = this.constructor.name),
            (this.failures = () => r ?? (r = [t, ...e()]));
        }
      }
      function i(t) {
        return "object" == typeof t && null != t;
      }
      function o(t) {
        return i(t) && !Array.isArray(t);
      }
      function s(t) {
        return "symbol" == typeof t
          ? t.toString()
          : "string" == typeof t
          ? JSON.stringify(t)
          : `${t}`;
      }
      function* a(t, e, r, n) {
        var o;
        for (let a of ((i((o = t)) &&
          "function" == typeof o[Symbol.iterator]) ||
          (t = [t]),
        t)) {
          let t = (function (t, e, r, n) {
            if (!0 === t) return;
            !1 === t ? (t = {}) : "string" == typeof t && (t = { message: t });
            let { path: i, branch: o } = e,
              { type: a } = r,
              {
                refinement: u,
                message: l = `Expected a value of type \`${a}\`${
                  u ? ` with refinement \`${u}\`` : ""
                }, but received: \`${s(n)}\``,
              } = t;
            return {
              value: n,
              type: a,
              refinement: u,
              key: i[i.length - 1],
              path: i,
              branch: o,
              ...t,
              message: l,
            };
          })(a, e, r, n);
          t && (yield t);
        }
      }
      function* u(t, e, r = {}) {
        let { path: n = [], branch: o = [t], coerce: s = !1, mask: a = !1 } = r,
          l = { path: n, branch: o, mask: a };
        s && (t = e.coercer(t, l));
        let c = "valid";
        for (let n of e.validator(t, l))
          (n.explanation = r.message), (c = "not_valid"), yield [n, void 0];
        for (let [f, h, d] of e.entries(t, l))
          for (let e of u(h, d, {
            path: void 0 === f ? n : [...n, f],
            branch: void 0 === f ? o : [...o, h],
            coerce: s,
            mask: a,
            message: r.message,
          }))
            e[0]
              ? ((c = null != e[0].refinement ? "not_refined" : "not_valid"),
                yield [e[0], void 0])
              : s &&
                ((h = e[1]),
                void 0 === f
                  ? (t = h)
                  : t instanceof Map
                  ? t.set(f, h)
                  : t instanceof Set
                  ? t.add(h)
                  : i(t) && (void 0 !== h || f in t) && (t[f] = h));
        if ("not_valid" !== c)
          for (let n of e.refiner(t, l))
            (n.explanation = r.message), (c = "not_refined"), yield [n, void 0];
        "valid" === c && (yield [void 0, t]);
      }
      class l {
        constructor(t) {
          let {
            type: e,
            schema: r,
            validator: n,
            refiner: i,
            coercer: o = (t) => t,
            entries: s = function* () {},
          } = t;
          (this.type = e),
            (this.schema = r),
            (this.entries = s),
            (this.coercer = o),
            n
              ? (this.validator = (t, e) => a(n(t, e), e, this, t))
              : (this.validator = () => []),
            i
              ? (this.refiner = (t, e) => a(i(t, e), e, this, t))
              : (this.refiner = () => []);
        }
        assert(t, e) {
          return c(t, this, e);
        }
        create(t, e) {
          return f(t, this, e);
        }
        is(t) {
          return !h(t, this)[0];
        }
        mask(t, e) {
          return (function (t, e, r) {
            let n = h(t, e, { coerce: !0, mask: !0, message: r });
            if (!n[0]) return n[1];
            throw n[0];
          })(t, this, e);
        }
        validate(t, e = {}) {
          return h(t, this, e);
        }
      }
      function c(t, e, r) {
        let n = h(t, e, { message: r });
        if (n[0]) throw n[0];
      }
      function f(t, e, r) {
        let n = h(t, e, { coerce: !0, message: r });
        if (!n[0]) return n[1];
        throw n[0];
      }
      function h(t, e, r = {}) {
        let i = u(t, e, r),
          o = (function (t) {
            let { done: e, value: r } = t.next();
            return e ? void 0 : r;
          })(i);
        return o[0]
          ? [
              new n(o[0], function* () {
                for (let t of i) t[0] && (yield t[0]);
              }),
              void 0,
            ]
          : [void 0, o[1]];
      }
      function d(t, e) {
        return new l({ type: t, schema: null, validator: e });
      }
      function p() {
        return d("any", () => !0);
      }
      function m(t) {
        return new l({
          type: "array",
          schema: t,
          *entries(e) {
            if (t && Array.isArray(e))
              for (let [r, n] of e.entries()) yield [r, n, t];
          },
          coercer: (t) => (Array.isArray(t) ? t.slice() : t),
          validator: (t) =>
            Array.isArray(t) ||
            `Expected an array value, but received: ${s(t)}`,
        });
      }
      function g() {
        return d("boolean", (t) => "boolean" == typeof t);
      }
      function y(t) {
        return d(
          "instance",
          (e) =>
            e instanceof t ||
            `Expected a \`${t.name}\` instance, but received: ${s(e)}`
        );
      }
      function b(t) {
        let e = s(t),
          r = typeof t;
        return new l({
          type: "literal",
          schema:
            "string" === r || "number" === r || "boolean" === r ? t : null,
          validator: (r) =>
            r === t || `Expected the literal \`${e}\`, but received: ${s(r)}`,
        });
      }
      function v(t) {
        return new l({
          ...t,
          validator: (e, r) => null === e || t.validator(e, r),
          refiner: (e, r) => null === e || t.refiner(e, r),
        });
      }
      function w() {
        return d(
          "number",
          (t) =>
            ("number" == typeof t && !isNaN(t)) ||
            `Expected a number, but received: ${s(t)}`
        );
      }
      function x(t) {
        return new l({
          ...t,
          validator: (e, r) => void 0 === e || t.validator(e, r),
          refiner: (e, r) => void 0 === e || t.refiner(e, r),
        });
      }
      function E(t, e) {
        return new l({
          type: "record",
          schema: null,
          *entries(r) {
            if (i(r))
              for (let n in r) {
                let i = r[n];
                yield [n, n, t], yield [n, i, e];
              }
          },
          validator: (t) => o(t) || `Expected an object, but received: ${s(t)}`,
          coercer: (t) => (o(t) ? { ...t } : t),
        });
      }
      function M() {
        return d(
          "string",
          (t) =>
            "string" == typeof t || `Expected a string, but received: ${s(t)}`
        );
      }
      function P(t) {
        let e = d("never", () => !1);
        return new l({
          type: "tuple",
          schema: null,
          *entries(r) {
            if (Array.isArray(r)) {
              let n = Math.max(t.length, r.length);
              for (let i = 0; i < n; i++) yield [i, r[i], t[i] || e];
            }
          },
          validator: (t) =>
            Array.isArray(t) || `Expected an array, but received: ${s(t)}`,
          coercer: (t) => (Array.isArray(t) ? t.slice() : t),
        });
      }
      function B(t) {
        let e = Object.keys(t);
        return new l({
          type: "type",
          schema: t,
          *entries(r) {
            if (i(r)) for (let n of e) yield [n, r[n], t[n]];
          },
          validator: (t) => o(t) || `Expected an object, but received: ${s(t)}`,
          coercer: (t) => (o(t) ? { ...t } : t),
        });
      }
      function A(t) {
        let e = t.map((t) => t.type).join(" | ");
        return new l({
          type: "union",
          schema: null,
          coercer(e, r) {
            for (let n of t) {
              let [t, i] = n.validate(e, { coerce: !0, mask: r.mask });
              if (!t) return i;
            }
            return e;
          },
          validator(r, n) {
            let i = [];
            for (let e of t) {
              let [...t] = u(r, e, n),
                [o] = t;
              if (!o[0]) return [];
              for (let [e] of t) e && i.push(e);
            }
            return [
              `Expected the value to satisfy a union of \`${e}\`, but received: ${s(
                r
              )}`,
              ...i,
            ];
          },
        });
      }
      function S() {
        return d("unknown", () => !0);
      }
      function C(t, e, r) {
        return new l({
          ...t,
          coercer: (n, i) =>
            h(n, e)[0] ? t.coercer(n, i) : t.coercer(r(n, i), i),
        });
      }
    },
    34939: function (t, e, r) {
      "use strict";
      r.d(e, {
        j: function () {
          return o;
        },
      });
      var n = r(49010),
        i = r(56298),
        o = new (class extends n.l {
          #t;
          #e;
          #r;
          constructor() {
            super(),
              (this.#r = (t) => {
                if (!i.sk && window.addEventListener) {
                  let e = () => t();
                  return (
                    window.addEventListener("visibilitychange", e, !1),
                    () => {
                      window.removeEventListener("visibilitychange", e);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#e || this.setEventListener(this.#r);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#e?.(), (this.#e = void 0));
          }
          setEventListener(t) {
            (this.#r = t),
              this.#e?.(),
              (this.#e = t((t) => {
                "boolean" == typeof t ? this.setFocused(t) : this.onFocus();
              }));
          }
          setFocused(t) {
            this.#t !== t && ((this.#t = t), this.onFocus());
          }
          onFocus() {
            let t = this.isFocused();
            this.listeners.forEach((e) => {
              e(t);
            });
          }
          isFocused() {
            return "boolean" == typeof this.#t
              ? this.#t
              : globalThis.document?.visibilityState !== "hidden";
          }
        })();
    },
    69948: function (t, e, r) {
      "use strict";
      r.d(e, {
        V: function () {
          return n;
        },
      });
      var n = (function () {
        let t = [],
          e = 0,
          r = (t) => {
            t();
          },
          n = (t) => {
            t();
          },
          i = (t) => setTimeout(t, 0),
          o = (n) => {
            e
              ? t.push(n)
              : i(() => {
                  r(n);
                });
          },
          s = () => {
            let e = t;
            (t = []),
              e.length &&
                i(() => {
                  n(() => {
                    e.forEach((t) => {
                      r(t);
                    });
                  });
                });
          };
        return {
          batch: (t) => {
            let r;
            e++;
            try {
              r = t();
            } finally {
              --e || s();
            }
            return r;
          },
          batchCalls:
            (t) =>
            (...e) => {
              o(() => {
                t(...e);
              });
            },
          schedule: o,
          setNotifyFunction: (t) => {
            r = t;
          },
          setBatchNotifyFunction: (t) => {
            n = t;
          },
          setScheduler: (t) => {
            i = t;
          },
        };
      })();
    },
    49937: function (t, e, r) {
      "use strict";
      r.d(e, {
        N: function () {
          return o;
        },
      });
      var n = r(49010),
        i = r(56298),
        o = new (class extends n.l {
          #n = !0;
          #e;
          #r;
          constructor() {
            super(),
              (this.#r = (t) => {
                if (!i.sk && window.addEventListener) {
                  let e = () => t(!0),
                    r = () => t(!1);
                  return (
                    window.addEventListener("online", e, !1),
                    window.addEventListener("offline", r, !1),
                    () => {
                      window.removeEventListener("online", e),
                        window.removeEventListener("offline", r);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#e || this.setEventListener(this.#r);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#e?.(), (this.#e = void 0));
          }
          setEventListener(t) {
            (this.#r = t),
              this.#e?.(),
              (this.#e = t(this.setOnline.bind(this)));
          }
          setOnline(t) {
            this.#n !== t &&
              ((this.#n = t),
              this.listeners.forEach((e) => {
                e(t);
              }));
          }
          isOnline() {
            return this.#n;
          }
        })();
    },
    2459: function (t, e, r) {
      "use strict";
      r.d(e, {
        A: function () {
          return a;
        },
        z: function () {
          return u;
        },
      });
      var n = r(56298),
        i = r(69948),
        o = r(30924),
        s = r(43494),
        a = class extends s.F {
          #i;
          #o;
          #s;
          #a;
          #u;
          #l;
          #c;
          constructor(t) {
            super(),
              (this.#c = !1),
              (this.#l = t.defaultOptions),
              this.setOptions(t.options),
              (this.#u = []),
              (this.#s = t.cache),
              (this.queryKey = t.queryKey),
              (this.queryHash = t.queryHash),
              (this.#i =
                t.state ||
                (function (t) {
                  let e =
                      "function" == typeof t.initialData
                        ? t.initialData()
                        : t.initialData,
                    r = void 0 !== e,
                    n = r
                      ? "function" == typeof t.initialDataUpdatedAt
                        ? t.initialDataUpdatedAt()
                        : t.initialDataUpdatedAt
                      : 0;
                  return {
                    data: e,
                    dataUpdateCount: 0,
                    dataUpdatedAt: r ? n ?? Date.now() : 0,
                    error: null,
                    errorUpdateCount: 0,
                    errorUpdatedAt: 0,
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchMeta: null,
                    isInvalidated: !1,
                    status: r ? "success" : "pending",
                    fetchStatus: "idle",
                  };
                })(this.options)),
              (this.state = this.#i),
              this.scheduleGc();
          }
          get meta() {
            return this.options.meta;
          }
          setOptions(t) {
            (this.options = { ...this.#l, ...t }),
              this.updateGcTime(this.options.gcTime);
          }
          optionalRemove() {
            this.#u.length ||
              "idle" !== this.state.fetchStatus ||
              this.#s.remove(this);
          }
          setData(t, e) {
            let r = (0, n.oE)(this.state.data, t, this.options);
            return (
              this.#f({
                data: r,
                type: "success",
                dataUpdatedAt: e?.updatedAt,
                manual: e?.manual,
              }),
              r
            );
          }
          setState(t, e) {
            this.#f({ type: "setState", state: t, setStateOptions: e });
          }
          cancel(t) {
            let e = this.#a?.promise;
            return (
              this.#a?.cancel(t),
              e ? e.then(n.ZT).catch(n.ZT) : Promise.resolve()
            );
          }
          destroy() {
            super.destroy(), this.cancel({ silent: !0 });
          }
          reset() {
            this.destroy(), this.setState(this.#i);
          }
          isActive() {
            return this.#u.some((t) => !1 !== t.options.enabled);
          }
          isDisabled() {
            return this.getObserversCount() > 0 && !this.isActive();
          }
          isStale() {
            return (
              !!this.state.isInvalidated ||
              (this.getObserversCount() > 0
                ? this.#u.some((t) => t.getCurrentResult().isStale)
                : void 0 === this.state.data)
            );
          }
          isStaleByTime(t = 0) {
            return (
              this.state.isInvalidated ||
              void 0 === this.state.data ||
              !(0, n.Kp)(this.state.dataUpdatedAt, t)
            );
          }
          onFocus() {
            let t = this.#u.find((t) => t.shouldFetchOnWindowFocus());
            t?.refetch({ cancelRefetch: !1 }), this.#a?.continue();
          }
          onOnline() {
            let t = this.#u.find((t) => t.shouldFetchOnReconnect());
            t?.refetch({ cancelRefetch: !1 }), this.#a?.continue();
          }
          addObserver(t) {
            this.#u.includes(t) ||
              (this.#u.push(t),
              this.clearGcTimeout(),
              this.#s.notify({
                type: "observerAdded",
                query: this,
                observer: t,
              }));
          }
          removeObserver(t) {
            this.#u.includes(t) &&
              ((this.#u = this.#u.filter((e) => e !== t)),
              this.#u.length ||
                (this.#a &&
                  (this.#c
                    ? this.#a.cancel({ revert: !0 })
                    : this.#a.cancelRetry()),
                this.scheduleGc()),
              this.#s.notify({
                type: "observerRemoved",
                query: this,
                observer: t,
              }));
          }
          getObserversCount() {
            return this.#u.length;
          }
          invalidate() {
            this.state.isInvalidated || this.#f({ type: "invalidate" });
          }
          fetch(t, e) {
            if ("idle" !== this.state.fetchStatus) {
              if (void 0 !== this.state.data && e?.cancelRefetch)
                this.cancel({ silent: !0 });
              else if (this.#a) return this.#a.continueRetry(), this.#a.promise;
            }
            if ((t && this.setOptions(t), !this.options.queryFn)) {
              let t = this.#u.find((t) => t.options.queryFn);
              t && this.setOptions(t.options);
            }
            let r = new AbortController(),
              i = { queryKey: this.queryKey, meta: this.meta },
              s = (t) => {
                Object.defineProperty(t, "signal", {
                  enumerable: !0,
                  get: () => ((this.#c = !0), r.signal),
                });
              };
            s(i);
            let a = {
              fetchOptions: e,
              options: this.options,
              queryKey: this.queryKey,
              state: this.state,
              fetchFn: () =>
                this.options.queryFn && this.options.queryFn !== n.CN
                  ? ((this.#c = !1), this.options.persister)
                    ? this.options.persister(this.options.queryFn, i, this)
                    : this.options.queryFn(i)
                  : Promise.reject(
                      Error(`Missing queryFn: '${this.options.queryHash}'`)
                    ),
            };
            s(a),
              this.options.behavior?.onFetch(a, this),
              (this.#o = this.state),
              ("idle" === this.state.fetchStatus ||
                this.state.fetchMeta !== a.fetchOptions?.meta) &&
                this.#f({ type: "fetch", meta: a.fetchOptions?.meta });
            let u = (t) => {
              ((0, o.DV)(t) && t.silent) ||
                this.#f({ type: "error", error: t }),
                (0, o.DV)(t) ||
                  (this.#s.config.onError?.(t, this),
                  this.#s.config.onSettled?.(this.state.data, t, this)),
                this.isFetchingOptimistic || this.scheduleGc(),
                (this.isFetchingOptimistic = !1);
            };
            return (
              (this.#a = (0, o.Mz)({
                fn: a.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: (t) => {
                  if (void 0 === t) {
                    u(Error(`${this.queryHash} data is undefined`));
                    return;
                  }
                  this.setData(t),
                    this.#s.config.onSuccess?.(t, this),
                    this.#s.config.onSettled?.(t, this.state.error, this),
                    this.isFetchingOptimistic || this.scheduleGc(),
                    (this.isFetchingOptimistic = !1);
                },
                onError: u,
                onFail: (t, e) => {
                  this.#f({ type: "failed", failureCount: t, error: e });
                },
                onPause: () => {
                  this.#f({ type: "pause" });
                },
                onContinue: () => {
                  this.#f({ type: "continue" });
                },
                retry: a.options.retry,
                retryDelay: a.options.retryDelay,
                networkMode: a.options.networkMode,
              })),
              this.#a.promise
            );
          }
          #f(t) {
            (this.state = ((e) => {
              switch (t.type) {
                case "failed":
                  return {
                    ...e,
                    fetchFailureCount: t.failureCount,
                    fetchFailureReason: t.error,
                  };
                case "pause":
                  return { ...e, fetchStatus: "paused" };
                case "continue":
                  return { ...e, fetchStatus: "fetching" };
                case "fetch":
                  return {
                    ...e,
                    ...u(e.data, this.options),
                    fetchMeta: t.meta ?? null,
                  };
                case "success":
                  return {
                    ...e,
                    data: t.data,
                    dataUpdateCount: e.dataUpdateCount + 1,
                    dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: "success",
                    ...(!t.manual && {
                      fetchStatus: "idle",
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                    }),
                  };
                case "error":
                  let r = t.error;
                  if ((0, o.DV)(r) && r.revert && this.#o)
                    return { ...this.#o, fetchStatus: "idle" };
                  return {
                    ...e,
                    error: r,
                    errorUpdateCount: e.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: e.fetchFailureCount + 1,
                    fetchFailureReason: r,
                    fetchStatus: "idle",
                    status: "error",
                  };
                case "invalidate":
                  return { ...e, isInvalidated: !0 };
                case "setState":
                  return { ...e, ...t.state };
              }
            })(this.state)),
              i.V.batch(() => {
                this.#u.forEach((t) => {
                  t.onQueryUpdate();
                }),
                  this.#s.notify({ query: this, type: "updated", action: t });
              });
          }
        };
      function u(t, e) {
        return {
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchStatus: (0, o.Kw)(e.networkMode) ? "fetching" : "paused",
          ...(void 0 === t && { error: null, status: "pending" }),
        };
      }
    },
    43494: function (t, e, r) {
      "use strict";
      r.d(e, {
        F: function () {
          return i;
        },
      });
      var n = r(56298),
        i = class {
          #h;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            this.clearGcTimeout(),
              (0, n.PN)(this.gcTime) &&
                (this.#h = setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(t) {
            this.gcTime = Math.max(this.gcTime || 0, t ?? (n.sk ? 1 / 0 : 3e5));
          }
          clearGcTimeout() {
            this.#h && (clearTimeout(this.#h), (this.#h = void 0));
          }
        };
    },
    30924: function (t, e, r) {
      "use strict";
      r.d(e, {
        DV: function () {
          return l;
        },
        Kw: function () {
          return a;
        },
        Mz: function () {
          return c;
        },
      });
      var n = r(34939),
        i = r(49937),
        o = r(56298);
      function s(t) {
        return Math.min(1e3 * 2 ** t, 3e4);
      }
      function a(t) {
        return (t ?? "online") !== "online" || i.N.isOnline();
      }
      var u = class {
        constructor(t) {
          (this.revert = t?.revert), (this.silent = t?.silent);
        }
      };
      function l(t) {
        return t instanceof u;
      }
      function c(t) {
        let e,
          r,
          l,
          c = !1,
          f = 0,
          h = !1,
          d = new Promise((t, e) => {
            (r = t), (l = e);
          }),
          p = () =>
            !n.j.isFocused() || ("always" !== t.networkMode && !i.N.isOnline()),
          m = (n) => {
            h || ((h = !0), t.onSuccess?.(n), e?.(), r(n));
          },
          g = (r) => {
            h || ((h = !0), t.onError?.(r), e?.(), l(r));
          },
          y = () =>
            new Promise((r) => {
              (e = (t) => {
                let e = h || !p();
                return e && r(t), e;
              }),
                t.onPause?.();
            }).then(() => {
              (e = void 0), h || t.onContinue?.();
            }),
          b = () => {
            let e;
            if (!h) {
              try {
                e = t.fn();
              } catch (t) {
                e = Promise.reject(t);
              }
              Promise.resolve(e)
                .then(m)
                .catch((e) => {
                  if (h) return;
                  let r = t.retry ?? (o.sk ? 0 : 3),
                    n = t.retryDelay ?? s,
                    i = "function" == typeof n ? n(f, e) : n,
                    a =
                      !0 === r ||
                      ("number" == typeof r && f < r) ||
                      ("function" == typeof r && r(f, e));
                  if (c || !a) {
                    g(e);
                    return;
                  }
                  f++,
                    t.onFail?.(f, e),
                    (0, o._v)(i)
                      .then(() => {
                        if (p()) return y();
                      })
                      .then(() => {
                        c ? g(e) : b();
                      });
                });
            }
          };
        return (
          a(t.networkMode) ? b() : y().then(b),
          {
            promise: d,
            cancel: (e) => {
              h || (g(new u(e)), t.abort?.());
            },
            continue: () => (e?.() ? d : Promise.resolve()),
            cancelRetry: () => {
              c = !0;
            },
            continueRetry: () => {
              c = !1;
            },
          }
        );
      }
    },
    49010: function (t, e, r) {
      "use strict";
      r.d(e, {
        l: function () {
          return n;
        },
      });
      var n = class {
        constructor() {
          (this.listeners = new Set()),
            (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(t) {
          return (
            this.listeners.add(t),
            this.onSubscribe(),
            () => {
              this.listeners.delete(t), this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      };
    },
    56298: function (t, e, r) {
      "use strict";
      r.d(e, {
        CN: function () {
          return E;
        },
        Ht: function () {
          return x;
        },
        Kp: function () {
          return a;
        },
        PN: function () {
          return s;
        },
        Q$: function () {
          return d;
        },
        Rm: function () {
          return c;
        },
        SE: function () {
          return o;
        },
        VS: function () {
          return p;
        },
        VX: function () {
          return w;
        },
        X7: function () {
          return l;
        },
        Ym: function () {
          return f;
        },
        ZT: function () {
          return i;
        },
        _v: function () {
          return b;
        },
        _x: function () {
          return u;
        },
        oE: function () {
          return v;
        },
        sk: function () {
          return n;
        },
        to: function () {
          return h;
        },
      });
      var n = "undefined" == typeof window || "Deno" in globalThis;
      function i() {}
      function o(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function s(t) {
        return "number" == typeof t && t >= 0 && t !== 1 / 0;
      }
      function a(t, e) {
        return Math.max(t + (e || 0) - Date.now(), 0);
      }
      function u(t, e) {
        let {
          type: r = "all",
          exact: n,
          fetchStatus: i,
          predicate: o,
          queryKey: s,
          stale: a,
        } = t;
        if (s) {
          if (n) {
            if (e.queryHash !== c(s, e.options)) return !1;
          } else if (!h(e.queryKey, s)) return !1;
        }
        if ("all" !== r) {
          let t = e.isActive();
          if (("active" === r && !t) || ("inactive" === r && t)) return !1;
        }
        return (
          ("boolean" != typeof a || e.isStale() === a) &&
          (!i || i === e.state.fetchStatus) &&
          (!o || !!o(e))
        );
      }
      function l(t, e) {
        let { exact: r, status: n, predicate: i, mutationKey: o } = t;
        if (o) {
          if (!e.options.mutationKey) return !1;
          if (r) {
            if (f(e.options.mutationKey) !== f(o)) return !1;
          } else if (!h(e.options.mutationKey, o)) return !1;
        }
        return (!n || e.state.status === n) && (!i || !!i(e));
      }
      function c(t, e) {
        return (e?.queryKeyHashFn || f)(t);
      }
      function f(t) {
        return JSON.stringify(t, (t, e) =>
          g(e)
            ? Object.keys(e)
                .sort()
                .reduce((t, r) => ((t[r] = e[r]), t), {})
            : e
        );
      }
      function h(t, e) {
        return (
          t === e ||
          (typeof t == typeof e &&
            !!t &&
            !!e &&
            "object" == typeof t &&
            "object" == typeof e &&
            !Object.keys(e).some((r) => !h(t[r], e[r])))
        );
      }
      function d(t, e) {
        if (t === e) return t;
        let r = m(t) && m(e);
        if (r || (g(t) && g(e))) {
          let n = r ? t : Object.keys(t),
            i = n.length,
            o = r ? e : Object.keys(e),
            s = o.length,
            a = r ? [] : {},
            u = 0;
          for (let i = 0; i < s; i++) {
            let s = r ? i : o[i];
            !r && void 0 === t[s] && void 0 === e[s] && n.includes(s)
              ? ((a[s] = void 0), u++)
              : ((a[s] = d(t[s], e[s])),
                a[s] === t[s] && void 0 !== t[s] && u++);
          }
          return i === s && u === i ? t : a;
        }
        return e;
      }
      function p(t, e) {
        if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
        for (let r in t) if (t[r] !== e[r]) return !1;
        return !0;
      }
      function m(t) {
        return Array.isArray(t) && t.length === Object.keys(t).length;
      }
      function g(t) {
        if (!y(t)) return !1;
        let e = t.constructor;
        if (void 0 === e) return !0;
        let r = e.prototype;
        return !!(y(r) && r.hasOwnProperty("isPrototypeOf"));
      }
      function y(t) {
        return "[object Object]" === Object.prototype.toString.call(t);
      }
      function b(t) {
        return new Promise((e) => {
          setTimeout(e, t);
        });
      }
      function v(t, e, r) {
        return "function" == typeof r.structuralSharing
          ? r.structuralSharing(t, e)
          : !1 !== r.structuralSharing
          ? d(t, e)
          : e;
      }
      function w(t, e, r = 0) {
        let n = [...t, e];
        return r && n.length > r ? n.slice(1) : n;
      }
      function x(t, e, r = 0) {
        let n = [e, ...t];
        return r && n.length > r ? n.slice(0, -1) : n;
      }
      var E = Symbol();
    },
    93191: function (t, e, r) {
      "use strict";
      r.d(e, {
        QueryClientContext: function () {
          return o;
        },
        QueryClientProvider: function () {
          return a;
        },
        useQueryClient: function () {
          return s;
        },
      });
      var n = r(2265),
        i = r(57437),
        o = n.createContext(void 0),
        s = (t) => {
          let e = n.useContext(o);
          if (t) return t;
          if (!e)
            throw Error(
              "No QueryClient set, use QueryClientProvider to set one"
            );
          return e;
        },
        a = (t) => {
          let { client: e, children: r } = t;
          return (
            n.useEffect(
              () => (
                e.mount(),
                () => {
                  e.unmount();
                }
              ),
              [e]
            ),
            (0, i.jsx)(o.Provider, { value: e, children: r })
          );
        };
    },
    37832: function (t, e, r) {
      "use strict";
      function n(t, e) {
        return "function" == typeof t ? t(...e) : !!t;
      }
      function i() {}
      r.d(e, {
        L: function () {
          return n;
        },
        Z: function () {
          return i;
        },
      });
    },
    79886: function (t, e, r) {
      "use strict";
      function n(t) {
        let e = t.state.current,
          r = t.state.connections.get(e),
          n = r?.accounts,
          i = n?.[0],
          o = t.chains.find((t) => t.id === r?.chainId),
          s = t.state.status;
        switch (s) {
          case "connected":
            return {
              address: i,
              addresses: n,
              chain: o,
              chainId: r?.chainId,
              connector: r?.connector,
              isConnected: !0,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !1,
              status: s,
            };
          case "reconnecting":
            return {
              address: i,
              addresses: n,
              chain: o,
              chainId: r?.chainId,
              connector: r?.connector,
              isConnected: !!i,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !0,
              status: s,
            };
          case "connecting":
            return {
              address: i,
              addresses: n,
              chain: o,
              chainId: r?.chainId,
              connector: r?.connector,
              isConnected: !1,
              isConnecting: !0,
              isDisconnected: !1,
              isReconnecting: !1,
              status: s,
            };
          case "disconnected":
            return {
              address: void 0,
              addresses: void 0,
              chain: void 0,
              chainId: void 0,
              connector: void 0,
              isConnected: !1,
              isConnecting: !1,
              isDisconnected: !0,
              isReconnecting: !1,
              status: s,
            };
        }
      }
      r.d(e, {
        D: function () {
          return n;
        },
      });
    },
    71284: function (t, e, r) {
      "use strict";
      r.d(e, {
        G: function () {
          return i;
        },
      });
      let n = !1;
      async function i(t, e = {}) {
        let r;
        if (n) return [];
        (n = !0),
          t.setState((t) => ({
            ...t,
            status: t.current ? "reconnecting" : "connecting",
          }));
        let i = [];
        if (e.connectors?.length)
          for (let r of e.connectors) {
            let e;
            (e = "function" == typeof r ? t._internal.connectors.setup(r) : r),
              i.push(e);
          }
        else i.push(...t.connectors);
        try {
          r = await t.storage?.getItem("recentConnectorId");
        } catch {}
        let o = {};
        for (let [, e] of t.state.connections) o[e.connector.id] = 1;
        r && (o[r] = 0);
        let s =
            Object.keys(o).length > 0
              ? [...i].sort((t, e) => (o[t.id] ?? 10) - (o[e.id] ?? 10))
              : i,
          a = !1,
          u = [],
          l = [];
        for (let e of s) {
          let r = await e.getProvider().catch(() => void 0);
          if (!r || l.some((t) => t === r) || !(await e.isAuthorized()))
            continue;
          let n = await e.connect({ isReconnecting: !0 }).catch(() => null);
          n &&
            (e.emitter.off("connect", t._internal.events.connect),
            e.emitter.on("change", t._internal.events.change),
            e.emitter.on("disconnect", t._internal.events.disconnect),
            t.setState((t) => {
              let r = new Map(a ? t.connections : new Map()).set(e.uid, {
                accounts: n.accounts,
                chainId: n.chainId,
                connector: e,
              });
              return { ...t, current: a ? t.current : e.uid, connections: r };
            }),
            u.push({ accounts: n.accounts, chainId: n.chainId, connector: e }),
            l.push(r),
            (a = !0));
        }
        return (
          ("reconnecting" === t.state.status ||
            "connecting" === t.state.status) &&
            (a
              ? t.setState((t) => ({ ...t, status: "connected" }))
              : t.setState((t) => ({
                  ...t,
                  connections: new Map(),
                  current: null,
                  status: "disconnected",
                }))),
          (n = !1),
          u
        );
      }
    },
    30807: function (t, e, r) {
      "use strict";
      r.d(e, {
        u: function () {
          return o;
        },
      });
      var n = r(90331),
        i = r(79886);
      function o(t, e) {
        let { onChange: r } = e;
        return t.subscribe(() => (0, i.D)(t), r, {
          equalityFn(t, e) {
            let { connector: r, ...i } = t,
              { connector: o, ...s } = e;
            return (0, n.v)(i, s) && r?.id === o?.id && r?.uid === o?.uid;
          },
        });
      }
    },
    66564: function (t, e, r) {
      "use strict";
      r.d(e, {
        G: function () {
          return u;
        },
      });
      var n,
        i,
        o = r(52520);
      let s = () => `@wagmi/core@${o.i}`;
      var a = function (t, e, r, n) {
        if ("a" === r && !n)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof e ? t !== e || !n : !e.has(t))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === r ? n : "a" === r ? n.call(t) : n ? n.value : e.get(t);
      };
      class u extends Error {
        get docsBaseUrl() {
          return "https://wagmi.sh/core";
        }
        get version() {
          return s();
        }
        constructor(t, e = {}) {
          super(),
            n.add(this),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiCoreError",
            });
          let r =
              e.cause instanceof u
                ? e.cause.details
                : e.cause?.message
                ? e.cause.message
                : e.details,
            i = (e.cause instanceof u && e.cause.docsPath) || e.docsPath;
          (this.message = [
            t || "An error occurred.",
            "",
            ...(e.metaMessages ? [...e.metaMessages, ""] : []),
            ...(i
              ? [
                  `Docs: ${this.docsBaseUrl}${i}.html${
                    e.docsSlug ? `#${e.docsSlug}` : ""
                  }`,
                ]
              : []),
            ...(r ? [`Details: ${r}`] : []),
            `Version: ${this.version}`,
          ].join("\n")),
            e.cause && (this.cause = e.cause),
            (this.details = r),
            (this.docsPath = i),
            (this.metaMessages = e.metaMessages),
            (this.shortMessage = t);
        }
        walk(t) {
          return a(this, n, "m", i).call(this, this, t);
        }
      }
      (n = new WeakSet()),
        (i = function t(e, r) {
          return r?.(e)
            ? e
            : e.cause
            ? a(this, n, "m", t).call(this, e.cause, r)
            : e;
        });
    },
    90331: function (t, e, r) {
      "use strict";
      r.d(e, {
        v: function () {
          return function t(e, r) {
            if (e === r) return !0;
            if (e && r && "object" == typeof e && "object" == typeof r) {
              let n, i;
              if (e.constructor !== r.constructor) return !1;
              if (Array.isArray(e) && Array.isArray(r)) {
                if ((n = e.length) !== r.length) return !1;
                for (i = n; 0 != i--; ) if (!t(e[i], r[i])) return !1;
                return !0;
              }
              if (e.valueOf !== Object.prototype.valueOf)
                return e.valueOf() === r.valueOf();
              if (e.toString !== Object.prototype.toString)
                return e.toString() === r.toString();
              let o = Object.keys(e);
              if ((n = o.length) !== Object.keys(r).length) return !1;
              for (i = n; 0 != i--; )
                if (!Object.prototype.hasOwnProperty.call(r, o[i])) return !1;
              for (i = n; 0 != i--; ) {
                let n = o[i];
                if (n && !t(e[n], r[n])) return !1;
              }
              return !0;
            }
            return e != e && r != r;
          };
        },
      });
    },
    52520: function (t, e, r) {
      "use strict";
      r.d(e, {
        i: function () {
          return n;
        },
      });
      let n = "2.13.4";
    },
    43197: function (t, e, r) {
      "use strict";
      function n(t, e) {
        let r = t.exec(e);
        return r?.groups;
      }
      r.d(e, {
        Zw: function () {
          return n;
        },
        cN: function () {
          return s;
        },
        eL: function () {
          return i;
        },
        lh: function () {
          return o;
        },
      });
      let i = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        o =
          /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
        s = /^\(.+?\).*?$/;
    },
    44839: function (t, e, r) {
      "use strict";
      function n() {
        for (var t, e, r = 0, n = "", i = arguments.length; r < i; r++)
          (t = arguments[r]) &&
            (e = (function t(e) {
              var r,
                n,
                i = "";
              if ("string" == typeof e || "number" == typeof e) i += e;
              else if ("object" == typeof e) {
                if (Array.isArray(e)) {
                  var o = e.length;
                  for (r = 0; r < o; r++)
                    e[r] && (n = t(e[r])) && (i && (i += " "), (i += n));
                } else for (n in e) e[n] && (i && (i += " "), (i += n));
              }
              return i;
            })(t)) &&
            (n && (n += " "), (n += e));
        return n;
      }
      r.d(e, {
        W: function () {
          return n;
        },
      }),
        (e.Z = n);
    },
    36393: function (t, e, r) {
      "use strict";
      r.d(e, {
        v: function () {
          return n;
        },
      });
      var n = r(37836);
      e.Z = n;
    },
    92290: function (t, e, r) {
      "use strict";
      r.d(e, {
        Ey: function () {
          return u;
        },
        XY: function () {
          return s;
        },
      });
      var n = r(9109),
        i = r(36393),
        o = class extends i.v {
          socket;
          constructor(t, e, r) {
            super(),
              (this.socket = new window.WebSocket(t, r)),
              (this.socket.onopen = () => this.emit("open")),
              (this.socket.onmessage = (t) => this.emit("message", t.data)),
              (this.socket.onerror = (t) => this.emit("error", t)),
              (this.socket.onclose = (t) => {
                this.emit("close", t.code, t.reason);
              });
          }
          send(t, e, r) {
            let n = r || e;
            try {
              this.socket.send(t), n();
            } catch (t) {
              n(t);
            }
          }
          close(t, e) {
            this.socket.close(t, e);
          }
          addEventListener(t, e, r) {
            this.socket.addEventListener(t, e, r);
          }
        };
      function s(t, e) {
        return new o(t, e);
      }
      var a = class {
          encode(t) {
            return JSON.stringify(t);
          }
          decode(t) {
            return JSON.parse(t);
          }
        },
        u = class extends i.v {
          address;
          rpc_id;
          queue;
          options;
          autoconnect;
          ready;
          reconnect;
          reconnect_timer_id;
          reconnect_interval;
          max_reconnects;
          rest_options;
          current_reconnects;
          generate_request_id;
          socket;
          webSocketFactory;
          dataPack;
          constructor(
            t,
            e = "ws://localhost:8080",
            {
              autoconnect: r = !0,
              reconnect: n = !0,
              reconnect_interval: i = 1e3,
              max_reconnects: o = 5,
              ...s
            } = {},
            u,
            l
          ) {
            super(),
              (this.webSocketFactory = t),
              (this.queue = {}),
              (this.rpc_id = 0),
              (this.address = e),
              (this.autoconnect = r),
              (this.ready = !1),
              (this.reconnect = n),
              (this.reconnect_timer_id = void 0),
              (this.reconnect_interval = i),
              (this.max_reconnects = o),
              (this.rest_options = s),
              (this.current_reconnects = 0),
              (this.generate_request_id = u || (() => ++this.rpc_id)),
              l ? (this.dataPack = l) : (this.dataPack = new a()),
              this.autoconnect &&
                this._connect(this.address, {
                  autoconnect: this.autoconnect,
                  reconnect: this.reconnect,
                  reconnect_interval: this.reconnect_interval,
                  max_reconnects: this.max_reconnects,
                  ...this.rest_options,
                });
          }
          connect() {
            this.socket ||
              this._connect(this.address, {
                autoconnect: this.autoconnect,
                reconnect: this.reconnect,
                reconnect_interval: this.reconnect_interval,
                max_reconnects: this.max_reconnects,
                ...this.rest_options,
              });
          }
          call(t, e, r, n) {
            return (
              n || "object" != typeof r || ((n = r), (r = null)),
              new Promise((i, o) => {
                if (!this.ready) return o(Error("socket not ready"));
                let s = this.generate_request_id(t, e);
                this.socket.send(
                  this.dataPack.encode({
                    jsonrpc: "2.0",
                    method: t,
                    params: e || void 0,
                    id: s,
                  }),
                  n,
                  (t) => {
                    if (t) return o(t);
                    (this.queue[s] = { promise: [i, o] }),
                      r &&
                        (this.queue[s].timeout = setTimeout(() => {
                          delete this.queue[s], o(Error("reply timeout"));
                        }, r));
                  }
                );
              })
            );
          }
          async login(t) {
            let e = await this.call("rpc.login", t);
            if (!e) throw Error("authentication failed");
            return e;
          }
          async listMethods() {
            return await this.call("__listMethods");
          }
          notify(t, e) {
            return new Promise((r, n) => {
              if (!this.ready) return n(Error("socket not ready"));
              this.socket.send(
                this.dataPack.encode({ jsonrpc: "2.0", method: t, params: e }),
                (t) => {
                  if (t) return n(t);
                  r();
                }
              );
            });
          }
          async subscribe(t) {
            "string" == typeof t && (t = [t]);
            let e = await this.call("rpc.on", t);
            if ("string" == typeof t && "ok" !== e[t])
              throw Error(
                "Failed subscribing to an event '" + t + "' with: " + e[t]
              );
            return e;
          }
          async unsubscribe(t) {
            "string" == typeof t && (t = [t]);
            let e = await this.call("rpc.off", t);
            if ("string" == typeof t && "ok" !== e[t])
              throw Error("Failed unsubscribing from an event with: " + e);
            return e;
          }
          close(t, e) {
            this.socket.close(t || 1e3, e);
          }
          setAutoReconnect(t) {
            this.reconnect = t;
          }
          setReconnectInterval(t) {
            this.reconnect_interval = t;
          }
          setMaxReconnects(t) {
            this.max_reconnects = t;
          }
          _connect(t, e) {
            clearTimeout(this.reconnect_timer_id),
              (this.socket = this.webSocketFactory(t, e)),
              this.socket.addEventListener("open", () => {
                (this.ready = !0),
                  this.emit("open"),
                  (this.current_reconnects = 0);
              }),
              this.socket.addEventListener("message", ({ data: t }) => {
                t instanceof ArrayBuffer && (t = n.Buffer.from(t).toString());
                try {
                  t = this.dataPack.decode(t);
                } catch (t) {
                  return;
                }
                if (t.notification && this.listeners(t.notification).length) {
                  if (!Object.keys(t.params).length)
                    return this.emit(t.notification);
                  let e = [t.notification];
                  if (t.params.constructor === Object) e.push(t.params);
                  else
                    for (let r = 0; r < t.params.length; r++)
                      e.push(t.params[r]);
                  return Promise.resolve().then(() => {
                    this.emit.apply(this, e);
                  });
                }
                if (!this.queue[t.id])
                  return t.method
                    ? Promise.resolve().then(() => {
                        this.emit(t.method, t?.params);
                      })
                    : void 0;
                "error" in t == "result" in t &&
                  this.queue[t.id].promise[1](
                    Error(
                      'Server response malformed. Response must include either "result" or "error", but not both.'
                    )
                  ),
                  this.queue[t.id].timeout &&
                    clearTimeout(this.queue[t.id].timeout),
                  t.error
                    ? this.queue[t.id].promise[1](t.error)
                    : this.queue[t.id].promise[0](t.result),
                  delete this.queue[t.id];
              }),
              this.socket.addEventListener("error", (t) =>
                this.emit("error", t)
              ),
              this.socket.addEventListener(
                "close",
                ({ code: r, reason: n }) => {
                  this.ready && setTimeout(() => this.emit("close", r, n), 0),
                    (this.ready = !1),
                    (this.socket = void 0),
                    1e3 !== r &&
                      (this.current_reconnects++,
                      this.reconnect &&
                        (this.max_reconnects > this.current_reconnects ||
                          0 === this.max_reconnects) &&
                        (this.reconnect_timer_id = setTimeout(
                          () => this._connect(t, e),
                          this.reconnect_interval
                        )));
                }
              );
          }
        };
    },
    96164: function (t, e, r) {
      "use strict";
      r.d(e, {
        m6: function () {
          return T;
        },
      });
      let n = /^\[(.+)\]$/;
      function i(t, e) {
        let r = t;
        return (
          e.split("-").forEach((t) => {
            r.nextPart.has(t) ||
              r.nextPart.set(t, { nextPart: new Map(), validators: [] }),
              (r = r.nextPart.get(t));
          }),
          r
        );
      }
      let o = /\s+/;
      function s() {
        let t,
          e,
          r = 0,
          n = "";
        for (; r < arguments.length; )
          (t = arguments[r++]) &&
            (e = (function t(e) {
              let r;
              if ("string" == typeof e) return e;
              let n = "";
              for (let i = 0; i < e.length; i++)
                e[i] && (r = t(e[i])) && (n && (n += " "), (n += r));
              return n;
            })(t)) &&
            (n && (n += " "), (n += e));
        return n;
      }
      function a(t) {
        let e = (e) => e[t] || [];
        return (e.isThemeGetter = !0), e;
      }
      let u = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        l = /^\d+\/\d+$/,
        c = new Set(["px", "full", "screen"]),
        f = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        h =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        d = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        p = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        m =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
      function g(t) {
        return b(t) || c.has(t) || l.test(t);
      }
      function y(t) {
        return _(t, "length", k);
      }
      function b(t) {
        return !!t && !Number.isNaN(Number(t));
      }
      function v(t) {
        return _(t, "number", b);
      }
      function w(t) {
        return !!t && Number.isInteger(Number(t));
      }
      function x(t) {
        return t.endsWith("%") && b(t.slice(0, -1));
      }
      function E(t) {
        return u.test(t);
      }
      function M(t) {
        return f.test(t);
      }
      let P = new Set(["length", "size", "percentage"]);
      function B(t) {
        return _(t, P, $);
      }
      function A(t) {
        return _(t, "position", $);
      }
      let S = new Set(["image", "url"]);
      function C(t) {
        return _(t, S, U);
      }
      function I(t) {
        return _(t, "", R);
      }
      function O() {
        return !0;
      }
      function _(t, e, r) {
        let n = u.exec(t);
        return (
          !!n &&
          (n[1] ? ("string" == typeof e ? n[1] === e : e.has(n[1])) : r(n[2]))
        );
      }
      function k(t) {
        return h.test(t) && !d.test(t);
      }
      function $() {
        return !1;
      }
      function R(t) {
        return p.test(t);
      }
      function U(t) {
        return m.test(t);
      }
      let T = (function (t, ...e) {
        let r, a, u;
        let l = function (o) {
          var s;
          return (
            (a = (r = {
              cache: (function (t) {
                if (t < 1) return { get: () => void 0, set: () => {} };
                let e = 0,
                  r = new Map(),
                  n = new Map();
                function i(i, o) {
                  r.set(i, o), ++e > t && ((e = 0), (n = r), (r = new Map()));
                }
                return {
                  get(t) {
                    let e = r.get(t);
                    return void 0 !== e
                      ? e
                      : void 0 !== (e = n.get(t))
                      ? (i(t, e), e)
                      : void 0;
                  },
                  set(t, e) {
                    r.has(t) ? r.set(t, e) : i(t, e);
                  },
                };
              })((s = e.reduce((t, e) => e(t), t())).cacheSize),
              splitModifiers: (function (t) {
                let e = t.separator,
                  r = 1 === e.length,
                  n = e[0],
                  i = e.length;
                return function (t) {
                  let o;
                  let s = [],
                    a = 0,
                    u = 0;
                  for (let l = 0; l < t.length; l++) {
                    let c = t[l];
                    if (0 === a) {
                      if (c === n && (r || t.slice(l, l + i) === e)) {
                        s.push(t.slice(u, l)), (u = l + i);
                        continue;
                      }
                      if ("/" === c) {
                        o = l;
                        continue;
                      }
                    }
                    "[" === c ? a++ : "]" === c && a--;
                  }
                  let l = 0 === s.length ? t : t.substring(u),
                    c = l.startsWith("!"),
                    f = c ? l.substring(1) : l;
                  return {
                    modifiers: s,
                    hasImportantModifier: c,
                    baseClassName: f,
                    maybePostfixModifierPosition: o && o > u ? o - u : void 0,
                  };
                };
              })(s),
              ...(function (t) {
                let e = (function (t) {
                    var e;
                    let { theme: r, prefix: n } = t,
                      o = { nextPart: new Map(), validators: [] };
                    return (
                      ((e = Object.entries(t.classGroups)),
                      n
                        ? e.map(([t, e]) => [
                            t,
                            e.map((t) =>
                              "string" == typeof t
                                ? n + t
                                : "object" == typeof t
                                ? Object.fromEntries(
                                    Object.entries(t).map(([t, e]) => [
                                      n + t,
                                      e,
                                    ])
                                  )
                                : t
                            ),
                          ])
                        : e).forEach(([t, e]) => {
                        (function t(e, r, n, o) {
                          e.forEach((e) => {
                            if ("string" == typeof e) {
                              ("" === e ? r : i(r, e)).classGroupId = n;
                              return;
                            }
                            if ("function" == typeof e) {
                              if (e.isThemeGetter) {
                                t(e(o), r, n, o);
                                return;
                              }
                              r.validators.push({
                                validator: e,
                                classGroupId: n,
                              });
                              return;
                            }
                            Object.entries(e).forEach(([e, s]) => {
                              t(s, i(r, e), n, o);
                            });
                          });
                        })(e, o, t, r);
                      }),
                      o
                    );
                  })(t),
                  {
                    conflictingClassGroups: r,
                    conflictingClassGroupModifiers: o,
                  } = t;
                return {
                  getClassGroupId: function (t) {
                    let r = t.split("-");
                    return (
                      "" === r[0] && 1 !== r.length && r.shift(),
                      (function t(e, r) {
                        if (0 === e.length) return r.classGroupId;
                        let n = e[0],
                          i = r.nextPart.get(n),
                          o = i ? t(e.slice(1), i) : void 0;
                        if (o) return o;
                        if (0 === r.validators.length) return;
                        let s = e.join("-");
                        return r.validators.find(({ validator: t }) => t(s))
                          ?.classGroupId;
                      })(r, e) ||
                        (function (t) {
                          if (n.test(t)) {
                            let e = n.exec(t)[1],
                              r = e?.substring(0, e.indexOf(":"));
                            if (r) return "arbitrary.." + r;
                          }
                        })(t)
                    );
                  },
                  getConflictingClassGroupIds: function (t, e) {
                    let n = r[t] || [];
                    return e && o[t] ? [...n, ...o[t]] : n;
                  },
                };
              })(s),
            }).cache.get),
            (u = r.cache.set),
            (l = c),
            c(o)
          );
        };
        function c(t) {
          let e = a(t);
          if (e) return e;
          let n = (function (t, e) {
            let {
                splitModifiers: r,
                getClassGroupId: n,
                getConflictingClassGroupIds: i,
              } = e,
              s = new Set();
            return t
              .trim()
              .split(o)
              .map((t) => {
                let {
                    modifiers: e,
                    hasImportantModifier: i,
                    baseClassName: o,
                    maybePostfixModifierPosition: s,
                  } = r(t),
                  a = n(s ? o.substring(0, s) : o),
                  u = !!s;
                if (!a) {
                  if (!s || !(a = n(o)))
                    return { isTailwindClass: !1, originalClassName: t };
                  u = !1;
                }
                let l = (function (t) {
                  if (t.length <= 1) return t;
                  let e = [],
                    r = [];
                  return (
                    t.forEach((t) => {
                      "[" === t[0]
                        ? (e.push(...r.sort(), t), (r = []))
                        : r.push(t);
                    }),
                    e.push(...r.sort()),
                    e
                  );
                })(e).join(":");
                return {
                  isTailwindClass: !0,
                  modifierId: i ? l + "!" : l,
                  classGroupId: a,
                  originalClassName: t,
                  hasPostfixModifier: u,
                };
              })
              .reverse()
              .filter((t) => {
                if (!t.isTailwindClass) return !0;
                let {
                    modifierId: e,
                    classGroupId: r,
                    hasPostfixModifier: n,
                  } = t,
                  o = e + r;
                return (
                  !s.has(o) &&
                  (s.add(o), i(r, n).forEach((t) => s.add(e + t)), !0)
                );
              })
              .reverse()
              .map((t) => t.originalClassName)
              .join(" ");
          })(t, r);
          return u(t, n), n;
        }
        return function () {
          return l(s.apply(null, arguments));
        };
      })(function () {
        let t = a("colors"),
          e = a("spacing"),
          r = a("blur"),
          n = a("brightness"),
          i = a("borderColor"),
          o = a("borderRadius"),
          s = a("borderSpacing"),
          u = a("borderWidth"),
          l = a("contrast"),
          c = a("grayscale"),
          f = a("hueRotate"),
          h = a("invert"),
          d = a("gap"),
          p = a("gradientColorStops"),
          m = a("gradientColorStopPositions"),
          P = a("inset"),
          S = a("margin"),
          _ = a("opacity"),
          k = a("padding"),
          $ = a("saturate"),
          R = a("scale"),
          U = a("sepia"),
          T = a("skew"),
          L = a("space"),
          F = a("translate"),
          N = () => ["auto", "contain", "none"],
          j = () => ["auto", "hidden", "clip", "visible", "scroll"],
          z = () => ["auto", E, e],
          G = () => [E, e],
          D = () => ["", g, y],
          q = () => ["auto", b, E],
          H = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ],
          V = () => ["solid", "dashed", "dotted", "double", "none"],
          Z = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
            "plus-lighter",
          ],
          W = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
          ],
          K = () => ["", "0", E],
          Y = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          J = () => [b, v],
          Q = () => [b, E];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [O],
            spacing: [g, y],
            blur: ["none", "", M, E],
            brightness: J(),
            borderColor: [t],
            borderRadius: ["none", "", "full", M, E],
            borderSpacing: G(),
            borderWidth: D(),
            contrast: J(),
            grayscale: K(),
            hueRotate: Q(),
            invert: K(),
            gap: G(),
            gradientColorStops: [t],
            gradientColorStopPositions: [x, y],
            inset: z(),
            margin: z(),
            opacity: J(),
            padding: G(),
            saturate: J(),
            scale: J(),
            sepia: K(),
            skew: Q(),
            space: G(),
            translate: G(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", E] }],
            container: ["container"],
            columns: [{ columns: [M] }],
            "break-after": [{ "break-after": Y() }],
            "break-before": [{ "break-before": Y() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [...H(), E] }],
            overflow: [{ overflow: j() }],
            "overflow-x": [{ "overflow-x": j() }],
            "overflow-y": [{ "overflow-y": j() }],
            overscroll: [{ overscroll: N() }],
            "overscroll-x": [{ "overscroll-x": N() }],
            "overscroll-y": [{ "overscroll-y": N() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [P] }],
            "inset-x": [{ "inset-x": [P] }],
            "inset-y": [{ "inset-y": [P] }],
            start: [{ start: [P] }],
            end: [{ end: [P] }],
            top: [{ top: [P] }],
            right: [{ right: [P] }],
            bottom: [{ bottom: [P] }],
            left: [{ left: [P] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", w, E] }],
            basis: [{ basis: z() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", E] }],
            grow: [{ grow: K() }],
            shrink: [{ shrink: K() }],
            order: [{ order: ["first", "last", "none", w, E] }],
            "grid-cols": [{ "grid-cols": [O] }],
            "col-start-end": [{ col: ["auto", { span: ["full", w, E] }, E] }],
            "col-start": [{ "col-start": q() }],
            "col-end": [{ "col-end": q() }],
            "grid-rows": [{ "grid-rows": [O] }],
            "row-start-end": [{ row: ["auto", { span: [w, E] }, E] }],
            "row-start": [{ "row-start": q() }],
            "row-end": [{ "row-end": q() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", E] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", E] }],
            gap: [{ gap: [d] }],
            "gap-x": [{ "gap-x": [d] }],
            "gap-y": [{ "gap-y": [d] }],
            "justify-content": [{ justify: ["normal", ...W()] }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [{ content: ["normal", ...W(), "baseline"] }],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [{ "place-content": [...W(), "baseline"] }],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [k] }],
            px: [{ px: [k] }],
            py: [{ py: [k] }],
            ps: [{ ps: [k] }],
            pe: [{ pe: [k] }],
            pt: [{ pt: [k] }],
            pr: [{ pr: [k] }],
            pb: [{ pb: [k] }],
            pl: [{ pl: [k] }],
            m: [{ m: [S] }],
            mx: [{ mx: [S] }],
            my: [{ my: [S] }],
            ms: [{ ms: [S] }],
            me: [{ me: [S] }],
            mt: [{ mt: [S] }],
            mr: [{ mr: [S] }],
            mb: [{ mb: [S] }],
            ml: [{ ml: [S] }],
            "space-x": [{ "space-x": [L] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [L] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", E, e] },
            ],
            "min-w": [{ "min-w": [E, e, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  E,
                  e,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [M] },
                  M,
                ],
              },
            ],
            h: [
              { h: [E, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "min-h": [
              { "min-h": [E, e, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "max-h": [
              { "max-h": [E, e, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            size: [{ size: [E, e, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", M, y] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  v,
                ],
              },
            ],
            "font-family": [{ font: [O] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  E,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", b, v] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  g,
                  E,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", E] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", E] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [t] }],
            "placeholder-opacity": [{ "placeholder-opacity": [_] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [t] }],
            "text-opacity": [{ "text-opacity": [_] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...V(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", g, y] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", g, E] }],
            "text-decoration-color": [{ decoration: [t] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: G() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  E,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", E] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [_] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...H(), A] }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", B] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  C,
                ],
              },
            ],
            "bg-color": [{ bg: [t] }],
            "gradient-from-pos": [{ from: [m] }],
            "gradient-via-pos": [{ via: [m] }],
            "gradient-to-pos": [{ to: [m] }],
            "gradient-from": [{ from: [p] }],
            "gradient-via": [{ via: [p] }],
            "gradient-to": [{ to: [p] }],
            rounded: [{ rounded: [o] }],
            "rounded-s": [{ "rounded-s": [o] }],
            "rounded-e": [{ "rounded-e": [o] }],
            "rounded-t": [{ "rounded-t": [o] }],
            "rounded-r": [{ "rounded-r": [o] }],
            "rounded-b": [{ "rounded-b": [o] }],
            "rounded-l": [{ "rounded-l": [o] }],
            "rounded-ss": [{ "rounded-ss": [o] }],
            "rounded-se": [{ "rounded-se": [o] }],
            "rounded-ee": [{ "rounded-ee": [o] }],
            "rounded-es": [{ "rounded-es": [o] }],
            "rounded-tl": [{ "rounded-tl": [o] }],
            "rounded-tr": [{ "rounded-tr": [o] }],
            "rounded-br": [{ "rounded-br": [o] }],
            "rounded-bl": [{ "rounded-bl": [o] }],
            "border-w": [{ border: [u] }],
            "border-w-x": [{ "border-x": [u] }],
            "border-w-y": [{ "border-y": [u] }],
            "border-w-s": [{ "border-s": [u] }],
            "border-w-e": [{ "border-e": [u] }],
            "border-w-t": [{ "border-t": [u] }],
            "border-w-r": [{ "border-r": [u] }],
            "border-w-b": [{ "border-b": [u] }],
            "border-w-l": [{ "border-l": [u] }],
            "border-opacity": [{ "border-opacity": [_] }],
            "border-style": [{ border: [...V(), "hidden"] }],
            "divide-x": [{ "divide-x": [u] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [u] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [_] }],
            "divide-style": [{ divide: V() }],
            "border-color": [{ border: [i] }],
            "border-color-x": [{ "border-x": [i] }],
            "border-color-y": [{ "border-y": [i] }],
            "border-color-t": [{ "border-t": [i] }],
            "border-color-r": [{ "border-r": [i] }],
            "border-color-b": [{ "border-b": [i] }],
            "border-color-l": [{ "border-l": [i] }],
            "divide-color": [{ divide: [i] }],
            "outline-style": [{ outline: ["", ...V()] }],
            "outline-offset": [{ "outline-offset": [g, E] }],
            "outline-w": [{ outline: [g, y] }],
            "outline-color": [{ outline: [t] }],
            "ring-w": [{ ring: D() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [t] }],
            "ring-opacity": [{ "ring-opacity": [_] }],
            "ring-offset-w": [{ "ring-offset": [g, y] }],
            "ring-offset-color": [{ "ring-offset": [t] }],
            shadow: [{ shadow: ["", "inner", "none", M, I] }],
            "shadow-color": [{ shadow: [O] }],
            opacity: [{ opacity: [_] }],
            "mix-blend": [{ "mix-blend": Z() }],
            "bg-blend": [{ "bg-blend": Z() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [r] }],
            brightness: [{ brightness: [n] }],
            contrast: [{ contrast: [l] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", M, E] }],
            grayscale: [{ grayscale: [c] }],
            "hue-rotate": [{ "hue-rotate": [f] }],
            invert: [{ invert: [h] }],
            saturate: [{ saturate: [$] }],
            sepia: [{ sepia: [U] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [r] }],
            "backdrop-brightness": [{ "backdrop-brightness": [n] }],
            "backdrop-contrast": [{ "backdrop-contrast": [l] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [f] }],
            "backdrop-invert": [{ "backdrop-invert": [h] }],
            "backdrop-opacity": [{ "backdrop-opacity": [_] }],
            "backdrop-saturate": [{ "backdrop-saturate": [$] }],
            "backdrop-sepia": [{ "backdrop-sepia": [U] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [s] }],
            "border-spacing-x": [{ "border-spacing-x": [s] }],
            "border-spacing-y": [{ "border-spacing-y": [s] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  E,
                ],
              },
            ],
            duration: [{ duration: Q() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", E] }],
            delay: [{ delay: Q() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", E] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [R] }],
            "scale-x": [{ "scale-x": [R] }],
            "scale-y": [{ "scale-y": [R] }],
            rotate: [{ rotate: [w, E] }],
            "translate-x": [{ "translate-x": [F] }],
            "translate-y": [{ "translate-y": [F] }],
            "skew-x": [{ "skew-x": [T] }],
            "skew-y": [{ "skew-y": [T] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  E,
                ],
              },
            ],
            accent: [{ accent: ["auto", t] }],
            appearance: [{ appearance: ["none", "auto"] }],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  E,
                ],
              },
            ],
            "caret-color": [{ caret: [t] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": G() }],
            "scroll-mx": [{ "scroll-mx": G() }],
            "scroll-my": [{ "scroll-my": G() }],
            "scroll-ms": [{ "scroll-ms": G() }],
            "scroll-me": [{ "scroll-me": G() }],
            "scroll-mt": [{ "scroll-mt": G() }],
            "scroll-mr": [{ "scroll-mr": G() }],
            "scroll-mb": [{ "scroll-mb": G() }],
            "scroll-ml": [{ "scroll-ml": G() }],
            "scroll-p": [{ "scroll-p": G() }],
            "scroll-px": [{ "scroll-px": G() }],
            "scroll-py": [{ "scroll-py": G() }],
            "scroll-ps": [{ "scroll-ps": G() }],
            "scroll-pe": [{ "scroll-pe": G() }],
            "scroll-pt": [{ "scroll-pt": G() }],
            "scroll-pr": [{ "scroll-pr": G() }],
            "scroll-pb": [{ "scroll-pb": G() }],
            "scroll-pl": [{ "scroll-pl": G() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", E] },
            ],
            fill: [{ fill: [t, "none"] }],
            "stroke-w": [{ stroke: [g, y, v] }],
            stroke: [{ stroke: [t, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      });
    },
    96104: function (t, e, r) {
      "use strict";
      function n(t) {
        return "string" == typeof t ? { address: t, type: "json-rpc" } : t;
      }
      r.d(e, {
        T: function () {
          return n;
        },
      });
    },
    42665: function (t, e, r) {
      "use strict";
      r.d(e, {
        C: function () {
          return l;
        },
        X: function () {
          return u;
        },
      });
      var n = r(25511),
        i = r(93413),
        o = r(72127),
        s = r(49235),
        a = r(48206);
      async function u(t, e) {
        return l(t, e);
      }
      async function l(t, e) {
        let {
            block: r,
            chain: u = t.chain,
            request: l,
            type: c = "eip1559",
          } = e || {},
          f = await (async () =>
            "function" == typeof u?.fees?.baseFeeMultiplier
              ? u.fees.baseFeeMultiplier({ block: r, client: t, request: l })
              : u?.fees?.baseFeeMultiplier ?? 1.2)();
        if (f < 1) throw new n.Fz();
        let h = 10 ** (f.toString().split(".")[1]?.length ?? 0),
          d = (t) => (t * BigInt(Math.ceil(f * h))) / BigInt(h),
          p = r || (await (0, i.s)(t, s.Q, "getBlock")({}));
        if ("function" == typeof u?.fees?.estimateFeesPerGas) {
          let e = await u.fees.estimateFeesPerGas({
            block: r,
            client: t,
            multiply: d,
            request: l,
            type: c,
          });
          if (null !== e) return e;
        }
        if ("eip1559" === c) {
          if ("bigint" != typeof p.baseFeePerGas) throw new n.e5();
          let e =
              "bigint" == typeof l?.maxPriorityFeePerGas
                ? l.maxPriorityFeePerGas
                : await (0, o.h)(t, { block: p, chain: u, request: l }),
            r = d(p.baseFeePerGas);
          return {
            maxFeePerGas: l?.maxFeePerGas ?? r + e,
            maxPriorityFeePerGas: e,
          };
        }
        return {
          gasPrice: l?.gasPrice ?? d(await (0, i.s)(t, a.o, "getGasPrice")({})),
        };
      }
    },
    60730: function (t, e, r) {
      "use strict";
      r.d(e, {
        Q: function () {
          return v;
        },
      });
      var n = r(96104),
        i = r(6649),
        o = r(15210),
        s = r(95046),
        a = r(85053),
        u = r(49268),
        l = r(97658);
      class c extends i.G {
        constructor(
          t,
          {
            account: e,
            docsPath: r,
            chain: n,
            data: i,
            gas: o,
            gasPrice: s,
            maxFeePerGas: c,
            maxPriorityFeePerGas: f,
            nonce: h,
            to: d,
            value: p,
          }
        ) {
          super(t.shortMessage, {
            cause: t,
            docsPath: r,
            metaMessages: [
              ...(t.metaMessages ? [...t.metaMessages, " "] : []),
              "Estimate Gas Arguments:",
              (0, l.xr)({
                from: e?.address,
                to: d,
                value:
                  void 0 !== p &&
                  `${(0, a.d)(p)} ${n?.nativeCurrency?.symbol || "ETH"}`,
                data: i,
                gas: o,
                gasPrice: void 0 !== s && `${(0, u.o)(s)} gwei`,
                maxFeePerGas: void 0 !== c && `${(0, u.o)(c)} gwei`,
                maxPriorityFeePerGas: void 0 !== f && `${(0, u.o)(f)} gwei`,
                nonce: h,
              }),
            ].filter(Boolean),
            name: "EstimateGasExecutionError",
          }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = t);
        }
      }
      var f = r(37764),
        h = r(43149),
        d = r(27031),
        p = r(37669),
        m = r(11667),
        g = r(82857),
        y = r(86348),
        b = r(5106);
      async function v(t, e) {
        let r = e.account ?? t.account,
          a = r ? (0, n.T)(r) : void 0;
        try {
          let {
              accessList: r,
              authorizationList: n,
              blobs: l,
              blobVersionedHashes: c,
              blockNumber: f,
              blockTag: h,
              data: v,
              gas: w,
              gasPrice: x,
              maxFeePerBlobGas: E,
              maxFeePerGas: M,
              maxPriorityFeePerGas: P,
              nonce: B,
              value: A,
              stateOverride: S,
              ...C
            } = await (0, y.Z)(t, {
              ...e,
              parameters:
                a?.type === "local" ? void 0 : ["blobVersionedHashes"],
            }),
            I = (f ? (0, s.eC)(f) : void 0) || h,
            O = (0, m.mF)(S),
            _ = await (async () =>
              C.to
                ? C.to
                : n && n.length > 0
                ? await (0, o.z)({ authorization: n[0] }).catch(() => {
                    throw new i.G(
                      "`to` is required. Could not infer from `authorizationList`"
                    );
                  })
                : void 0)();
          (0, g.F)(e);
          let k = t.chain?.formatters?.transactionRequest?.format,
            $ = (k || p.tG)({
              ...(0, d.K)(C, { format: k }),
              from: a?.address,
              accessList: r,
              authorizationList: n,
              blobs: l,
              blobVersionedHashes: c,
              data: v,
              gas: w,
              gasPrice: x,
              maxFeePerBlobGas: E,
              maxFeePerGas: M,
              maxPriorityFeePerGas: P,
              nonce: B,
              to: _,
              value: A,
            });
          function u(e) {
            let { block: r, request: n, rpcStateOverride: i } = e;
            return t.request({
              method: "eth_estimateGas",
              params: i ? [n, r ?? "latest", i] : r ? [n, r] : [n],
            });
          }
          let R = BigInt(
            await u({ block: I, request: $, rpcStateOverride: O })
          );
          if (n) {
            let e = await (0, b.s)(t, { address: $.from }),
              r = await Promise.all(
                n.map(async (t) => {
                  let { contractAddress: r } = t,
                    n = await u({
                      block: I,
                      request: {
                        authorizationList: void 0,
                        data: v,
                        from: a?.address,
                        to: r,
                        value: (0, s.eC)(e),
                      },
                      rpcStateOverride: O,
                    }).catch(() => 100000n);
                  return 2n * BigInt(n);
                })
              );
            R += r.reduce((t, e) => t + e, 0n);
          }
          return R;
        } catch (r) {
          throw (function (t, { docsPath: e, ...r }) {
            return new c(
              (() => {
                let e = (0, h.k)(t, r);
                return e instanceof f.cj ? t : e;
              })(),
              { docsPath: e, ...r }
            );
          })(r, { ...e, account: a, chain: t.chain });
        }
      }
    },
    72127: function (t, e, r) {
      "use strict";
      r.d(e, {
        _: function () {
          return u;
        },
        h: function () {
          return l;
        },
      });
      var n = r(25511),
        i = r(21019),
        o = r(93413),
        s = r(49235),
        a = r(48206);
      async function u(t, e) {
        return l(t, e);
      }
      async function l(t, e) {
        let { block: r, chain: u = t.chain, request: l } = e || {};
        try {
          let e = u?.fees?.maxPriorityFeePerGas ?? u?.fees?.defaultPriorityFee;
          if ("function" == typeof e) {
            let n = r || (await (0, o.s)(t, s.Q, "getBlock")({})),
              i = await e({ block: n, client: t, request: l });
            if (null === i) throw Error();
            return i;
          }
          if (void 0 !== e) return e;
          let n = await t.request({ method: "eth_maxPriorityFeePerGas" });
          return (0, i.y_)(n);
        } catch {
          let [e, i] = await Promise.all([
            r ? Promise.resolve(r) : (0, o.s)(t, s.Q, "getBlock")({}),
            (0, o.s)(t, a.o, "getGasPrice")({}),
          ]);
          if ("bigint" != typeof e.baseFeePerGas) throw new n.e5();
          let u = i - e.baseFeePerGas;
          if (u < 0n) return 0n;
          return u;
        }
      }
    },
    5106: function (t, e, r) {
      "use strict";
      r.d(e, {
        s: function () {
          return i;
        },
      });
      var n = r(95046);
      async function i(
        t,
        { address: e, blockNumber: r, blockTag: i = "latest" }
      ) {
        let o = r ? (0, n.eC)(r) : void 0;
        return BigInt(
          await t.request({ method: "eth_getBalance", params: [e, o || i] })
        );
      }
    },
    49235: function (t, e, r) {
      "use strict";
      r.d(e, {
        Q: function () {
          return s;
        },
      });
      var n = r(87655),
        i = r(95046),
        o = r(20621);
      async function s(
        t,
        {
          blockHash: e,
          blockNumber: r,
          blockTag: s,
          includeTransactions: a,
        } = {}
      ) {
        let u = a ?? !1,
          l = void 0 !== r ? (0, i.eC)(r) : void 0,
          c = null;
        if (
          !(c = e
            ? await t.request(
                { method: "eth_getBlockByHash", params: [e, u] },
                { dedupe: !0 }
              )
            : await t.request(
                {
                  method: "eth_getBlockByNumber",
                  params: [l || (s ?? "latest"), u],
                },
                { dedupe: !!l }
              ))
        )
          throw new n.f({ blockHash: e, blockNumber: r });
        return (t.chain?.formatters?.block?.format || o.Z)(c);
      }
    },
    16416: function (t, e, r) {
      "use strict";
      r.d(e, {
        L: function () {
          return i;
        },
      });
      var n = r(21019);
      async function i(t) {
        let e = await t.request({ method: "eth_chainId" }, { dedupe: !0 });
        return (0, n.ly)(e);
      }
    },
    48206: function (t, e, r) {
      "use strict";
      async function n(t) {
        return BigInt(await t.request({ method: "eth_gasPrice" }));
      }
      r.d(e, {
        o: function () {
          return n;
        },
      });
    },
    33208: function (t, e, r) {
      "use strict";
      r.d(e, {
        K: function () {
          return o;
        },
      });
      var n = r(21019),
        i = r(95046);
      async function o(
        t,
        { address: e, blockTag: r = "latest", blockNumber: o }
      ) {
        let s = await t.request(
          {
            method: "eth_getTransactionCount",
            params: [e, o ? (0, i.eC)(o) : r],
          },
          { dedupe: !!o }
        );
        return (0, n.ly)(s);
      }
    },
    86348: function (t, e, r) {
      "use strict";
      r.d(e, {
        Q: function () {
          return y;
        },
        Z: function () {
          return b;
        },
      });
      var n = r(96104),
        i = r(42665),
        o = r(60730),
        s = r(49235),
        a = r(33208),
        u = r(25511),
        l = r(40598),
        c = r(18383),
        f = r(92486),
        h = r(30721),
        d = r(93413),
        p = r(82857),
        m = r(33884),
        g = r(16416);
      let y = [
        "blobVersionedHashes",
        "chainId",
        "fees",
        "gas",
        "nonce",
        "type",
      ];
      async function b(t, e) {
        let r, b;
        let {
            account: v = t.account,
            blobs: w,
            chain: x,
            gas: E,
            kzg: M,
            nonce: P,
            nonceManager: B,
            parameters: A = y,
            type: S,
          } = e,
          C = v ? (0, n.T)(v) : void 0,
          I = { ...e, ...(C ? { from: C?.address } : {}) };
        async function O() {
          return (
            r ||
            (r = await (0, d.s)(t, s.Q, "getBlock")({ blockTag: "latest" }))
          );
        }
        async function _() {
          return (
            b ||
            (x
              ? x.id
              : void 0 !== e.chainId
              ? e.chainId
              : (b = await (0, d.s)(t, g.L, "getChainId")({})))
          );
        }
        if (
          (A.includes("blobVersionedHashes") || A.includes("sidecars")) &&
          w &&
          M
        ) {
          let t = (0, l.P)({ blobs: w, kzg: M });
          if (A.includes("blobVersionedHashes")) {
            let e = (0, f.C)({ commitments: t, to: "hex" });
            I.blobVersionedHashes = e;
          }
          if (A.includes("sidecars")) {
            let e = (0, c.y)({ blobs: w, commitments: t, kzg: M }),
              r = (0, h.j)({ blobs: w, commitments: t, proofs: e, to: "hex" });
            I.sidecars = r;
          }
        }
        if (
          (A.includes("chainId") && (I.chainId = await _()),
          A.includes("nonce") && void 0 === P && C)
        ) {
          if (B) {
            let e = await _();
            I.nonce = await B.consume({
              address: C.address,
              chainId: e,
              client: t,
            });
          } else
            I.nonce = await (0, d.s)(
              t,
              a.K,
              "getTransactionCount"
            )({ address: C.address, blockTag: "pending" });
        }
        if ((A.includes("fees") || A.includes("type")) && void 0 === S)
          try {
            I.type = (0, m.l)(I);
          } catch {
            let t = await O();
            I.type = "bigint" == typeof t?.baseFeePerGas ? "eip1559" : "legacy";
          }
        if (A.includes("fees")) {
          if ("legacy" !== I.type && "eip2930" !== I.type) {
            if (
              void 0 === I.maxFeePerGas ||
              void 0 === I.maxPriorityFeePerGas
            ) {
              let r = await O(),
                { maxFeePerGas: n, maxPriorityFeePerGas: o } = await (0, i.C)(
                  t,
                  { block: r, chain: x, request: I }
                );
              if (
                void 0 === e.maxPriorityFeePerGas &&
                e.maxFeePerGas &&
                e.maxFeePerGas < o
              )
                throw new u.ld({ maxPriorityFeePerGas: o });
              (I.maxPriorityFeePerGas = o), (I.maxFeePerGas = n);
            }
          } else {
            if (void 0 !== e.maxFeePerGas || void 0 !== e.maxPriorityFeePerGas)
              throw new u.e5();
            let r = await O(),
              { gasPrice: n } = await (0, i.C)(t, {
                block: r,
                chain: x,
                request: I,
                type: "legacy",
              });
            I.gasPrice = n;
          }
        }
        return (
          A.includes("gas") &&
            void 0 === E &&
            (I.gas = await (0, d.s)(
              t,
              o.Q,
              "estimateGas"
            )({
              ...I,
              account: C ? { address: C.address, type: "json-rpc" } : void 0,
            })),
          (0, p.F)(I),
          delete I.parameters,
          I
        );
      }
    },
    53611: function (t, e, r) {
      "use strict";
      r.d(e, {
        y: function () {
          return n;
        },
      });
      let n = (0, r(95258).a)({
        id: 42161,
        name: "Arbitrum One",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://arb1.arbitrum.io/rpc"] } },
        blockExplorers: {
          default: {
            name: "Arbiscan",
            url: "https://arbiscan.io",
            apiUrl: "https://api.arbiscan.io/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 7654707,
          },
        },
      });
    },
    99445: function (t, e, r) {
      "use strict";
      r.d(e, {
        u: function () {
          return i;
        },
      });
      var n = r(32784);
      let i = (0, r(95258).a)({
        ...n.i,
        id: 8453,
        name: "Base",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://mainnet.base.org"] } },
        blockExplorers: {
          default: {
            name: "Basescan",
            url: "https://basescan.org",
            apiUrl: "https://api.basescan.org/api",
          },
        },
        contracts: {
          ...n.i.contracts,
          l2OutputOracle: {
            1: { address: "0x56315b90c40730925ec5485cf004d835058518A0" },
          },
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 5022,
          },
          portal: {
            1: {
              address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",
              blockCreated: 17482143,
            },
          },
          l1StandardBridge: {
            1: {
              address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
              blockCreated: 17482143,
            },
          },
        },
        sourceId: 1,
      });
    },
    94113: function (t, e, r) {
      "use strict";
      r.d(e, {
        A: function () {
          return n;
        },
      });
      let n = (0, r(95258).a)({
        id: 81457,
        name: "Blast",
        nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
        rpcUrls: { default: { http: ["https://rpc.blast.io"] } },
        blockExplorers: {
          default: {
            name: "Blastscan",
            url: "https://blastscan.io",
            apiUrl: "https://api.blastscan.io/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
            blockCreated: 212929,
          },
        },
        sourceId: 1,
      });
    },
    23281: function (t, e, r) {
      "use strict";
      r.d(e, {
        e: function () {
          return n;
        },
      });
      let n = (0, r(95258).a)({
        id: 56,
        name: "BNB Smart Chain",
        nativeCurrency: { decimals: 18, name: "BNB", symbol: "BNB" },
        rpcUrls: { default: { http: ["https://rpc.ankr.com/bsc"] } },
        blockExplorers: {
          default: {
            name: "BscScan",
            url: "https://bscscan.com",
            apiUrl: "https://api.bscscan.com/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 15921452,
          },
        },
      });
    },
    43854: function (t, e, r) {
      "use strict";
      r.d(e, {
        q: function () {
          return i;
        },
      });
      var n = r(32784);
      let i = (0, r(95258).a)({
        ...n.i,
        id: 252,
        name: "Fraxtal",
        nativeCurrency: { name: "Frax Ether", symbol: "frxETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://rpc.frax.com"] } },
        blockExplorers: {
          default: {
            name: "fraxscan",
            url: "https://fraxscan.com",
            apiUrl: "https://api.fraxscan.com/api",
          },
        },
        contracts: {
          ...n.i.contracts,
          l2OutputOracle: {
            1: { address: "0x66CC916Ed5C6C2FA97014f7D1cD141528Ae171e4" },
          },
          multicall3: { address: "0xca11bde05977b3631167028862be2a173976ca11" },
          portal: {
            1: {
              address: "0x36cb65c1967A0Fb0EEE11569C51C2f2aA1Ca6f6D",
              blockCreated: 19135323,
            },
          },
          l1StandardBridge: {
            1: {
              address: "0x34C0bD5877A5Ee7099D0f5688D65F4bB9158BDE2",
              blockCreated: 19135323,
            },
          },
        },
        sourceId: 1,
      });
    },
    42410: function (t, e, r) {
      "use strict";
      r.d(e, {
        M: function () {
          return n;
        },
      });
      let n = (0, r(95258).a)({
        id: 17e3,
        name: "Holesky",
        nativeCurrency: { name: "Holesky Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: {
          default: { http: ["https://ethereum-holesky-rpc.publicnode.com"] },
        },
        blockExplorers: {
          default: {
            name: "Etherscan",
            url: "https://holesky.etherscan.io",
            apiUrl: "https://api-holesky.etherscan.io/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 77,
          },
          ensRegistry: {
            address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            blockCreated: 801613,
          },
          ensUniversalResolver: {
            address: "0xa6AC935D4971E3CD133b950aE053bECD16fE7f3b",
            blockCreated: 973484,
          },
        },
        testnet: !0,
      });
    },
    48412: function (t, e, r) {
      "use strict";
      r.d(e, {
        P: function () {
          return d;
        },
      });
      var n = r(96104),
        i = r(86348),
        o = r(25355),
        s = r(95046),
        a = r(8114),
        u = r(27031),
        l = r(37669),
        c = r(82857);
      async function f(t, e) {
        let { account: r = t.account } = e;
        if (!r) throw new o.o();
        let f = (0, n.T)(r);
        try {
          let {
              accessList: r,
              blockNumber: n,
              blockTag: o,
              data: a,
              gas: h,
              gasPrice: d,
              maxFeePerGas: p,
              maxPriorityFeePerGas: m,
              nonce: g,
              to: y,
              value: b,
              ...v
            } = f?.type === "local" ? await (0, i.Z)(t, e) : e,
            w = (n ? (0, s.eC)(n) : void 0) || o;
          (0, c.F)(e);
          let x = t.chain?.formatters?.transactionRequest?.format,
            E = (x || l.tG)({
              ...(0, u.K)(v, { format: x }),
              from: f?.address,
              accessList: r,
              data: a,
              gas: h,
              gasPrice: d,
              maxFeePerGas: p,
              maxPriorityFeePerGas: m,
              nonce: g,
              to: y,
              value: b,
            }),
            {
              baseFeePerGas: M,
              gasLimit: P,
              priorityFeePerGas: B,
            } = await t.request({
              method: "linea_estimateGas",
              params: w ? [E, w] : [E],
            });
          return {
            baseFeePerGas: BigInt(M),
            gasLimit: BigInt(P),
            priorityFeePerGas: BigInt(B),
          };
        } catch (r) {
          throw (0, a.P)(r, { ...e, account: f, chain: t.chain });
        }
      }
      async function h({ client: t, multiply: e, request: r, type: n }) {
        try {
          let i = await f(t, { ...r, account: r?.account }),
            { priorityFeePerGas: o } = i,
            s = e(BigInt(i.baseFeePerGas)) + o;
          if ("legacy" === n) return { gasPrice: s };
          return { maxFeePerGas: s, maxPriorityFeePerGas: o };
        } catch {
          return null;
        }
      }
      let d = (0, r(95258).a)({
        fees: {
          estimateFeesPerGas: h,
          async maxPriorityFeePerGas({ block: t, client: e, request: r }) {
            let n = await h({
              block: t,
              client: e,
              multiply: (t) => t,
              request: r,
              type: "eip1559",
            });
            return n?.maxPriorityFeePerGas ? n.maxPriorityFeePerGas : null;
          },
        },
        id: 59144,
        name: "Linea Mainnet",
        nativeCurrency: { name: "Linea Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: {
          default: {
            http: ["https://rpc.linea.build"],
            webSocket: ["wss://rpc.linea.build"],
          },
        },
        blockExplorers: {
          default: {
            name: "Etherscan",
            url: "https://lineascan.build",
            apiUrl: "https://api.lineascan.build/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
            blockCreated: 42,
          },
        },
        testnet: !1,
      });
    },
    16491: function (t, e, r) {
      "use strict";
      r.d(e, {
        R: function () {
          return n;
        },
      });
      let n = (0, r(95258).a)({
        id: 1,
        name: "Ethereum",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://cloudflare-eth.com"] } },
        blockExplorers: {
          default: {
            name: "Etherscan",
            url: "https://etherscan.io",
            apiUrl: "https://api.etherscan.io/api",
          },
        },
        contracts: {
          ensRegistry: {
            address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          },
          ensUniversalResolver: {
            address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
            blockCreated: 19258213,
          },
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 14353601,
          },
        },
      });
    },
    1306: function (t, e, r) {
      "use strict";
      r.d(e, {
        x: function () {
          return n;
        },
      });
      let n = (0, r(95258).a)({
        id: 34443,
        name: "Mode Mainnet",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://mainnet.mode.network"] } },
        blockExplorers: {
          default: { name: "Modescan", url: "https://modescan.io" },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 2465882,
          },
          l2OutputOracle: {
            1: { address: "0x4317ba146D4933D889518a3e5E11Fe7a53199b04" },
          },
          portal: {
            1: { address: "0x8B34b14c7c7123459Cf3076b8Cb929BE097d0C07" },
          },
          l1StandardBridge: {
            1: { address: "0x735aDBbE72226BD52e818E7181953f42E3b0FF21" },
          },
        },
        sourceId: 1,
      });
    },
    71596: function (t, e, r) {
      "use strict";
      r.d(e, {
        v: function () {
          return i;
        },
      });
      var n = r(32784);
      let i = (0, r(95258).a)({
        ...n.i,
        id: 10,
        name: "OP Mainnet",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://mainnet.optimism.io"] } },
        blockExplorers: {
          default: {
            name: "Optimism Explorer",
            url: "https://optimistic.etherscan.io",
            apiUrl: "https://api-optimistic.etherscan.io/api",
          },
        },
        contracts: {
          ...n.i.contracts,
          disputeGameFactory: {
            1: { address: "0xe5965Ab5962eDc7477C8520243A95517CD252fA9" },
          },
          l2OutputOracle: {
            1: { address: "0xdfe97868233d1aa22e815a266982f2cf17685a27" },
          },
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 4286263,
          },
          portal: {
            1: { address: "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed" },
          },
          l1StandardBridge: {
            1: { address: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1" },
          },
        },
        sourceId: 1,
      });
    },
    85507: function (t, e, r) {
      "use strict";
      r.d(e, {
        l: function () {
          return i;
        },
      });
      var n = r(32784);
      let i = (0, r(95258).a)({
        ...n.i,
        id: 420,
        name: "Optimism Goerli",
        nativeCurrency: { name: "Goerli Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://goerli.optimism.io"] } },
        blockExplorers: {
          default: {
            name: "Etherscan",
            url: "https://goerli-optimism.etherscan.io",
            apiUrl: "https://goerli-optimism.etherscan.io/api",
          },
        },
        contracts: {
          ...n.i.contracts,
          l2OutputOracle: {
            5: { address: "0xE6Dfba0953616Bacab0c9A8ecb3a9BBa77FC15c0" },
          },
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 49461,
          },
          portal: {
            5: { address: "0x5b47E1A08Ea6d985D6649300584e6722Ec4B1383" },
          },
          l1StandardBridge: {
            5: { address: "0x636Af16bf2f682dD3109e60102b8E1A089FedAa8" },
          },
        },
        testnet: !0,
        sourceId: 5,
      });
    },
    9383: function (t, e, r) {
      "use strict";
      r.d(e, {
        l: function () {
          return n;
        },
      });
      let n = 1;
    },
    47807: function (t, e, r) {
      "use strict";
      r.d(e, {
        $: function () {
          return n;
        },
        Up: function () {
          return i;
        },
        hZ: function () {
          return o;
        },
      });
      let n = {
          1: "An `assert` condition failed.",
          17: "Arithmetic operation resulted in underflow or overflow.",
          18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
          33: "Attempted to convert to an invalid type.",
          34: "Attempted to access a storage byte array that is incorrectly encoded.",
          49: "Performed `.pop()` on an empty array",
          50: "Array index is out of bounds.",
          65: "Allocated too much memory or created an array which is too large.",
          81: "Attempted to call a zero-initialized variable of internal function type.",
        },
        i = {
          inputs: [{ name: "message", type: "string" }],
          name: "Error",
          type: "error",
        },
        o = {
          inputs: [{ name: "reason", type: "uint256" }],
          name: "Panic",
          type: "error",
        };
    },
    90408: function (t, e, r) {
      "use strict";
      r.d(e, {
        Bd: function () {
          return o;
        },
        Zn: function () {
          return i;
        },
        ez: function () {
          return n;
        },
      });
      let n = { gwei: 9, wei: 18 },
        i = { ether: -9, wei: 9 },
        o = { ether: -18, gwei: -9 };
    },
    52186: function (t, e, r) {
      "use strict";
      r.d(e, {
        CI: function () {
          return P;
        },
        FM: function () {
          return p;
        },
        Gy: function () {
          return E;
        },
        KY: function () {
          return w;
        },
        M4: function () {
          return f;
        },
        MX: function () {
          return b;
        },
        S4: function () {
          return v;
        },
        SM: function () {
          return x;
        },
        cO: function () {
          return a;
        },
        dh: function () {
          return M;
        },
        fM: function () {
          return s;
        },
        fs: function () {
          return h;
        },
        gr: function () {
          return c;
        },
        hn: function () {
          return B;
        },
        lC: function () {
          return m;
        },
        mv: function () {
          return g;
        },
        wM: function () {
          return A;
        },
        wb: function () {
          return l;
        },
        xB: function () {
          return u;
        },
        xL: function () {
          return y;
        },
        yP: function () {
          return d;
        },
      });
      var n = r(20101),
        i = r(7508),
        o = r(6649);
      class s extends o.G {
        constructor({ docsPath: t }) {
          super(
            "A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",
            { docsPath: t, name: "AbiConstructorNotFoundError" }
          );
        }
      }
      class a extends o.G {
        constructor({ docsPath: t }) {
          super(
            "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
            { docsPath: t, name: "AbiConstructorParamsNotFoundError" }
          );
        }
      }
      class u extends o.G {
        constructor({ data: t, params: e, size: r }) {
          super(`Data size of ${r} bytes is too small for given parameters.`, {
            metaMessages: [
              `Params: (${(0, n.h)(e, { includeName: !0 })})`,
              `Data:   ${t} (${r} bytes)`,
            ],
            name: "AbiDecodingDataSizeTooSmallError",
          }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = t),
            (this.params = e),
            (this.size = r);
        }
      }
      class l extends o.G {
        constructor() {
          super('Cannot decode zero data ("0x") with ABI parameters.', {
            name: "AbiDecodingZeroDataError",
          });
        }
      }
      class c extends o.G {
        constructor({ expectedLength: t, givenLength: e, type: r }) {
          super(
            `ABI encoding array length mismatch for type ${r}.
Expected length: ${t}
Given length: ${e}`,
            { name: "AbiEncodingArrayLengthMismatchError" }
          );
        }
      }
      class f extends o.G {
        constructor({ expectedSize: t, value: e }) {
          super(
            `Size of bytes "${e}" (bytes${(0, i.d)(
              e
            )}) does not match expected size (bytes${t}).`,
            { name: "AbiEncodingBytesSizeMismatchError" }
          );
        }
      }
      class h extends o.G {
        constructor({ expectedLength: t, givenLength: e }) {
          super(
            `ABI encoding params/values length mismatch.
Expected length (params): ${t}
Given length (values): ${e}`,
            { name: "AbiEncodingLengthMismatchError" }
          );
        }
      }
      class d extends o.G {
        constructor(t, { docsPath: e }) {
          super(
            `Encoded error signature "${t}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`,
            { docsPath: e, name: "AbiErrorSignatureNotFoundError" }
          ),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.signature = t);
        }
      }
      class p extends o.G {
        constructor({ docsPath: t }) {
          super("Cannot extract event signature from empty topics.", {
            docsPath: t,
            name: "AbiEventSignatureEmptyTopicsError",
          });
        }
      }
      class m extends o.G {
        constructor(t, { docsPath: e }) {
          super(
            `Encoded event signature "${t}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`,
            { docsPath: e, name: "AbiEventSignatureNotFoundError" }
          );
        }
      }
      class g extends o.G {
        constructor(t, { docsPath: e } = {}) {
          super(
            `Event ${t ? `"${t}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,
            { docsPath: e, name: "AbiEventNotFoundError" }
          );
        }
      }
      class y extends o.G {
        constructor(t, { docsPath: e } = {}) {
          super(
            `Function ${t ? `"${t}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: e, name: "AbiFunctionNotFoundError" }
          );
        }
      }
      class b extends o.G {
        constructor(t, { docsPath: e }) {
          super(
            `Function "${t}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: e, name: "AbiFunctionOutputsNotFoundError" }
          );
        }
      }
      class v extends o.G {
        constructor(t, e) {
          super("Found ambiguous types in overloaded ABI items.", {
            metaMessages: [
              `\`${t.type}\` in \`${(0, n.t)(t.abiItem)}\`, and`,
              `\`${e.type}\` in \`${(0, n.t)(e.abiItem)}\``,
              "",
              "These types encode differently and cannot be distinguished at runtime.",
              "Remove one of the ambiguous items in the ABI.",
            ],
            name: "AbiItemAmbiguityError",
          });
        }
      }
      class w extends o.G {
        constructor({ expectedSize: t, givenSize: e }) {
          super(`Expected bytes${t}, got bytes${e}.`, {
            name: "BytesSizeMismatchError",
          });
        }
      }
      class x extends o.G {
        constructor({ abiItem: t, data: e, params: r, size: i }) {
          super(
            `Data size of ${i} bytes is too small for non-indexed event parameters.`,
            {
              metaMessages: [
                `Params: (${(0, n.h)(r, { includeName: !0 })})`,
                `Data:   ${e} (${i} bytes)`,
              ],
              name: "DecodeLogDataMismatch",
            }
          ),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = t),
            (this.data = e),
            (this.params = r),
            (this.size = i);
        }
      }
      class E extends o.G {
        constructor({ abiItem: t, param: e }) {
          super(
            `Expected a topic for indexed event parameter${
              e.name ? ` "${e.name}"` : ""
            } on event "${(0, n.t)(t, { includeName: !0 })}".`,
            { name: "DecodeLogTopicsMismatch" }
          ),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = t);
        }
      }
      class M extends o.G {
        constructor(t, { docsPath: e }) {
          super(
            `Type "${t}" is not a valid encoding type.
Please provide a valid ABI type.`,
            { docsPath: e, name: "InvalidAbiEncodingType" }
          );
        }
      }
      class P extends o.G {
        constructor(t, { docsPath: e }) {
          super(
            `Type "${t}" is not a valid decoding type.
Please provide a valid ABI type.`,
            { docsPath: e, name: "InvalidAbiDecodingType" }
          );
        }
      }
      class B extends o.G {
        constructor(t) {
          super(`Value "${t}" is not a valid array.`, {
            name: "InvalidArrayError",
          });
        }
      }
      class A extends o.G {
        constructor(t) {
          super(
            `"${t}" is not a valid definition type.
Valid types: "function", "event", "error"`,
            { name: "InvalidDefinitionTypeError" }
          );
        }
      }
    },
    25355: function (t, e, r) {
      "use strict";
      r.d(e, {
        Y: function () {
          return o;
        },
        o: function () {
          return i;
        },
      });
      var n = r(6649);
      class i extends n.G {
        constructor({ docsPath: t } = {}) {
          super(
            "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
            { docsPath: t, docsSlug: "account", name: "AccountNotFoundError" }
          );
        }
      }
      class o extends n.G {
        constructor({ docsPath: t, metaMessages: e, type: r }) {
          super(`Account type "${r}" is not supported.`, {
            docsPath: t,
            metaMessages: e,
            name: "AccountTypeNotSupportedError",
          });
        }
      }
    },
    51359: function (t, e, r) {
      "use strict";
      r.d(e, {
        b: function () {
          return i;
        },
      });
      var n = r(6649);
      class i extends n.G {
        constructor({ address: t }) {
          super(`Address "${t}" is invalid.`, {
            metaMessages: [
              "- Address must be a hex value of 20 bytes (40 hex characters).",
              "- Address must match its checksum counterpart.",
            ],
            name: "InvalidAddressError",
          });
        }
      }
    },
    6649: function (t, e, r) {
      "use strict";
      r.d(e, {
        G: function () {
          return o;
        },
      });
      let n = "2.21.1",
        i = {
          getDocsUrl: ({ docsBaseUrl: t, docsPath: e = "", docsSlug: r }) =>
            e ? `${t ?? "https://viem.sh"}${e}${r ? `#${r}` : ""}` : void 0,
          version: n,
        };
      class o extends Error {
        constructor(t, e = {}) {
          let r =
              e.cause instanceof o
                ? e.cause.details
                : e.cause?.message
                ? e.cause.message
                : e.details,
            s = (e.cause instanceof o && e.cause.docsPath) || e.docsPath,
            a = i.getDocsUrl?.({ ...e, docsPath: s });
          super(
            [
              t || "An error occurred.",
              "",
              ...(e.metaMessages ? [...e.metaMessages, ""] : []),
              ...(a ? [`Docs: ${a}`] : []),
              ...(r ? [`Details: ${r}`] : []),
              ...(i.version ? [`Version: ${i.version}`] : []),
            ].join("\n"),
            e.cause ? { cause: e.cause } : void 0
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseError",
            }),
            (this.details = r),
            (this.docsPath = s),
            (this.metaMessages = e.metaMessages),
            (this.name = e.name ?? this.name),
            (this.shortMessage = t),
            (this.version = n);
        }
        walk(t) {
          return (function t(e, r) {
            return r?.(e)
              ? e
              : e && "object" == typeof e && "cause" in e
              ? t(e.cause, r)
              : r
              ? null
              : e;
          })(this, t);
        }
      }
    },
    25678: function (t, e, r) {
      "use strict";
      r.d(e, {
        RX: function () {
          return s;
        },
        cJ: function () {
          return u;
        },
        m7: function () {
          return o;
        },
        xd: function () {
          return a;
        },
      });
      var n = r(9383),
        i = r(6649);
      class o extends i.G {
        constructor({ maxSize: t, size: e }) {
          super("Blob size is too large.", {
            metaMessages: [`Max: ${t} bytes`, `Given: ${e} bytes`],
            name: "BlobSizeTooLargeError",
          });
        }
      }
      class s extends i.G {
        constructor() {
          super("Blob data must not be empty.", { name: "EmptyBlobError" });
        }
      }
      class a extends i.G {
        constructor({ hash: t, size: e }) {
          super(`Versioned hash "${t}" size is invalid.`, {
            metaMessages: ["Expected: 32", `Received: ${e}`],
            name: "InvalidVersionedHashSizeError",
          });
        }
      }
      class u extends i.G {
        constructor({ hash: t, version: e }) {
          super(`Versioned hash "${t}" version is invalid.`, {
            metaMessages: [`Expected: ${n.l}`, `Received: ${e}`],
            name: "InvalidVersionedHashVersionError",
          });
        }
      }
    },
    87655: function (t, e, r) {
      "use strict";
      r.d(e, {
        f: function () {
          return i;
        },
      });
      var n = r(6649);
      class i extends n.G {
        constructor({ blockHash: t, blockNumber: e }) {
          let r = "Block";
          t && (r = `Block at hash "${t}"`),
            e && (r = `Block at number "${e}"`),
            super(`${r} could not be found.`, { name: "BlockNotFoundError" });
        }
      }
    },
    89045: function (t, e, r) {
      "use strict";
      r.d(e, {
        Bk: function () {
          return s;
        },
        Yl: function () {
          return o;
        },
        hJ: function () {
          return u;
        },
        mm: function () {
          return i;
        },
        pZ: function () {
          return a;
        },
      });
      var n = r(6649);
      class i extends n.G {
        constructor({ blockNumber: t, chain: e, contract: r }) {
          super(`Chain "${e.name}" does not support contract "${r.name}".`, {
            metaMessages: [
              "This could be due to any of the following:",
              ...(t && r.blockCreated && r.blockCreated > t
                ? [
                    `- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${t}).`,
                  ]
                : [
                    `- The chain does not have the contract "${r.name}" configured.`,
                  ]),
            ],
            name: "ChainDoesNotSupportContract",
          });
        }
      }
      class o extends n.G {
        constructor({ chain: t, currentChainId: e }) {
          super(
            `The current chain of the wallet (id: ${e}) does not match the target chain for the transaction (id: ${t.id} – ${t.name}).`,
            {
              metaMessages: [
                `Current Chain ID:  ${e}`,
                `Expected Chain ID: ${t.id} – ${t.name}`,
              ],
              name: "ChainMismatchError",
            }
          );
        }
      }
      class s extends n.G {
        constructor() {
          super(
            "No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.",
            { name: "ChainNotFoundError" }
          );
        }
      }
      class a extends n.G {
        constructor() {
          super("No chain was provided to the Client.", {
            name: "ClientChainNotConfiguredError",
          });
        }
      }
      class u extends n.G {
        constructor({ chainId: t }) {
          super(
            "number" == typeof t
              ? `Chain ID "${t}" is invalid.`
              : "Chain ID is invalid.",
            { name: "InvalidChainIdError" }
          );
        }
      }
    },
    58591: function (t, e, r) {
      "use strict";
      r.d(e, {
        cg: function () {
          return y;
        },
        uq: function () {
          return b;
        },
        Lu: function () {
          return v;
        },
        Dk: function () {
          return w;
        },
        Mo: function () {
          return x;
        },
        VQ: function () {
          return E;
        },
      });
      var n = r(96104),
        i = r(47807),
        o = r(71108),
        s = r(20101),
        a = r(47499);
      function u({
        abiItem: t,
        args: e,
        includeFunctionName: r = !0,
        includeName: n = !1,
      }) {
        if ("name" in t && "inputs" in t && t.inputs)
          return `${r ? t.name : ""}(${t.inputs
            .map(
              (t, r) =>
                `${n && t.name ? `${t.name}: ` : ""}${
                  "object" == typeof e[r] ? (0, a.P)(e[r]) : e[r]
                }`
            )
            .join(", ")})`;
      }
      var l = r(18748),
        c = r(85053),
        f = r(49268),
        h = r(52186),
        d = r(6649),
        p = r(75534),
        m = r(97658),
        g = r(87137);
      class y extends d.G {
        constructor(
          t,
          {
            account: e,
            docsPath: r,
            chain: i,
            data: o,
            gas: s,
            gasPrice: a,
            maxFeePerGas: u,
            maxPriorityFeePerGas: l,
            nonce: h,
            to: d,
            value: g,
            stateOverride: y,
          }
        ) {
          let b = e ? (0, n.T)(e) : void 0,
            v = (0, m.xr)({
              from: b?.address,
              to: d,
              value:
                void 0 !== g &&
                `${(0, c.d)(g)} ${i?.nativeCurrency?.symbol || "ETH"}`,
              data: o,
              gas: s,
              gasPrice: void 0 !== a && `${(0, f.o)(a)} gwei`,
              maxFeePerGas: void 0 !== u && `${(0, f.o)(u)} gwei`,
              maxPriorityFeePerGas: void 0 !== l && `${(0, f.o)(l)} gwei`,
              nonce: h,
            });
          y &&
            (v += `
${(0, p.Bj)(y)}`),
            super(t.shortMessage, {
              cause: t,
              docsPath: r,
              metaMessages: [
                ...(t.metaMessages ? [...t.metaMessages, " "] : []),
                "Raw Call Arguments:",
                v,
              ].filter(Boolean),
              name: "CallExecutionError",
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = t);
        }
      }
      class b extends d.G {
        constructor(
          t,
          {
            abi: e,
            args: r,
            contractAddress: n,
            docsPath: i,
            functionName: o,
            sender: a,
          }
        ) {
          let c = (0, l.mE)({ abi: e, args: r, name: o }),
            f = c
              ? u({
                  abiItem: c,
                  args: r,
                  includeFunctionName: !1,
                  includeName: !1,
                })
              : void 0,
            h = c ? (0, s.t)(c, { includeName: !0 }) : void 0,
            d = (0, m.xr)({
              address: n && (0, g.C)(n),
              function: h,
              args:
                f &&
                "()" !== f &&
                `${[...Array(o?.length ?? 0).keys()]
                  .map(() => " ")
                  .join("")}${f}`,
              sender: a,
            });
          super(
            t.shortMessage ||
              `An unknown error occurred while executing the contract function "${o}".`,
            {
              cause: t,
              docsPath: i,
              metaMessages: [
                ...(t.metaMessages ? [...t.metaMessages, " "] : []),
                d && "Contract Call:",
                d,
              ].filter(Boolean),
              name: "ContractFunctionExecutionError",
            }
          ),
            Object.defineProperty(this, "abi", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "args", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "contractAddress", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "formattedArgs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "functionName", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "sender", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abi = e),
            (this.args = r),
            (this.cause = t),
            (this.contractAddress = n),
            (this.functionName = o),
            (this.sender = a);
        }
      }
      class v extends d.G {
        constructor({ abi: t, data: e, functionName: r, message: n }) {
          let a, l, c, f, d;
          if (e && "0x" !== e)
            try {
              let {
                abiItem: r,
                errorName: n,
                args: a,
              } = (d = (0, o.p)({ abi: t, data: e }));
              if ("Error" === n) c = a[0];
              else if ("Panic" === n) {
                let [t] = a;
                c = i.$[t];
              } else {
                let t = r ? (0, s.t)(r, { includeName: !0 }) : void 0,
                  e =
                    r && a
                      ? u({
                          abiItem: r,
                          args: a,
                          includeFunctionName: !1,
                          includeName: !1,
                        })
                      : void 0;
                l = [
                  t ? `Error: ${t}` : "",
                  e && "()" !== e
                    ? `       ${[...Array(n?.length ?? 0).keys()]
                        .map(() => " ")
                        .join("")}${e}`
                    : "",
                ];
              }
            } catch (t) {
              a = t;
            }
          else n && (c = n);
          a instanceof h.yP &&
            ((f = a.signature),
            (l = [
              `Unable to decode signature "${f}" as it was not found on the provided ABI.`,
              "Make sure you are using the correct ABI and that the error exists on it.",
              `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${f}.`,
            ])),
            super(
              (c && "execution reverted" !== c) || f
                ? [
                    `The contract function "${r}" reverted with the following ${
                      f ? "signature" : "reason"
                    }:`,
                    c || f,
                  ].join("\n")
                : `The contract function "${r}" reverted.`,
              {
                cause: a,
                metaMessages: l,
                name: "ContractFunctionRevertedError",
              }
            ),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "reason", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = d),
            (this.reason = c),
            (this.signature = f);
        }
      }
      class w extends d.G {
        constructor({ functionName: t }) {
          super(`The contract function "${t}" returned no data ("0x").`, {
            metaMessages: [
              "This could be due to any of the following:",
              `  - The contract does not have the function "${t}",`,
              "  - The parameters passed to the contract function may be invalid, or",
              "  - The address is not a contract.",
            ],
            name: "ContractFunctionZeroDataError",
          });
        }
      }
      class x extends d.G {
        constructor({ factory: t }) {
          super(
            `Deployment for counterfactual contract call failed${
              t ? ` for factory "${t}".` : ""
            }`,
            {
              metaMessages: [
                "Please ensure:",
                "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
                "- The `factoryData` is a valid encoded function call for contract deployment function on the factory.",
              ],
              name: "CounterfactualDeploymentFailedError",
            }
          );
        }
      }
      class E extends d.G {
        constructor({ data: t, message: e }) {
          super(e || "", { name: "RawContractError" }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 3,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = t);
        }
      }
    },
    19477: function (t, e, r) {
      "use strict";
      r.d(e, {
        KD: function () {
          return s;
        },
        T_: function () {
          return i;
        },
        lQ: function () {
          return o;
        },
      });
      var n = r(6649);
      class i extends n.G {
        constructor({ offset: t }) {
          super(`Offset \`${t}\` cannot be negative.`, {
            name: "NegativeOffsetError",
          });
        }
      }
      class o extends n.G {
        constructor({ length: t, position: e }) {
          super(
            `Position \`${e}\` is out of bounds (\`0 < position < ${t}\`).`,
            { name: "PositionOutOfBoundsError" }
          );
        }
      }
      class s extends n.G {
        constructor({ count: t, limit: e }) {
          super(
            `Recursive read limit of \`${e}\` exceeded (recursive read count: \`${t}\`).`,
            { name: "RecursiveReadLimitExceededError" }
          );
        }
      }
    },
    75057: function (t, e, r) {
      "use strict";
      r.d(e, {
        $s: function () {
          return o;
        },
        W_: function () {
          return s;
        },
        mV: function () {
          return i;
        },
      });
      var n = r(6649);
      class i extends n.G {
        constructor({ offset: t, position: e, size: r }) {
          super(
            `Slice ${
              "start" === e ? "starting" : "ending"
            } at offset "${t}" is out-of-bounds (size: ${r}).`,
            { name: "SliceOffsetOutOfBoundsError" }
          );
        }
      }
      class o extends n.G {
        constructor({ size: t, targetSize: e, type: r }) {
          super(
            `${r.charAt(0).toUpperCase()}${r
              .slice(1)
              .toLowerCase()} size (${t}) exceeds padding size (${e}).`,
            { name: "SizeExceedsPaddingSizeError" }
          );
        }
      }
      class s extends n.G {
        constructor({ size: t, targetSize: e, type: r }) {
          super(
            `${r.charAt(0).toUpperCase()}${r
              .slice(1)
              .toLowerCase()} is expected to be ${e} ${r} long, but is ${t} ${r} long.`,
            { name: "InvalidBytesLengthError" }
          );
        }
      }
    },
    74188: function (t, e, r) {
      "use strict";
      r.d(e, {
        J5: function () {
          return i;
        },
        M6: function () {
          return s;
        },
        yr: function () {
          return o;
        },
      });
      var n = r(6649);
      class i extends n.G {
        constructor({ max: t, min: e, signed: r, size: n, value: i }) {
          super(
            `Number "${i}" is not in safe ${
              n ? `${8 * n}-bit ${r ? "signed" : "unsigned"} ` : ""
            }integer range ${t ? `(${e} to ${t})` : `(above ${e})`}`,
            { name: "IntegerOutOfRangeError" }
          );
        }
      }
      class o extends n.G {
        constructor(t) {
          super(
            `Bytes value "${t}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`,
            { name: "InvalidBytesBooleanError" }
          );
        }
      }
      class s extends n.G {
        constructor({ givenSize: t, maxSize: e }) {
          super(`Size cannot exceed ${e} bytes. Given size: ${t} bytes.`, {
            name: "SizeOverflowError",
          });
        }
      }
    },
    25511: function (t, e, r) {
      "use strict";
      r.d(e, {
        Fz: function () {
          return o;
        },
        e5: function () {
          return s;
        },
        ld: function () {
          return a;
        },
      });
      var n = r(49268),
        i = r(6649);
      class o extends i.G {
        constructor() {
          super("`baseFeeMultiplier` must be greater than 1.", {
            name: "BaseFeeScalarError",
          });
        }
      }
      class s extends i.G {
        constructor() {
          super("Chain does not support EIP-1559 fees.", {
            name: "Eip1559FeesNotSupportedError",
          });
        }
      }
      class a extends i.G {
        constructor({ maxPriorityFeePerGas: t }) {
          super(
            `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,
            n.o)(t)} gwei).`,
            { name: "MaxFeePerGasTooLowError" }
          );
        }
      }
    },
    37764: function (t, e, r) {
      "use strict";
      r.d(e, {
        C_: function () {
          return f;
        },
        G$: function () {
          return a;
        },
        Hh: function () {
          return s;
        },
        M_: function () {
          return o;
        },
        WF: function () {
          return h;
        },
        ZI: function () {
          return u;
        },
        cj: function () {
          return g;
        },
        cs: function () {
          return m;
        },
        dR: function () {
          return d;
        },
        pZ: function () {
          return p;
        },
        se: function () {
          return c;
        },
        vU: function () {
          return l;
        },
      });
      var n = r(49268),
        i = r(6649);
      class o extends i.G {
        constructor({ cause: t, message: e } = {}) {
          let r = e
            ?.replace("execution reverted: ", "")
            ?.replace("execution reverted", "");
          super(
            `Execution reverted ${
              r ? `with reason: ${r}` : "for an unknown reason"
            }.`,
            { cause: t, name: "ExecutionRevertedError" }
          );
        }
      }
      Object.defineProperty(o, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 3,
      }),
        Object.defineProperty(o, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /execution reverted/,
        });
      class s extends i.G {
        constructor({ cause: t, maxFeePerGas: e } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              e ? ` = ${(0, n.o)(e)} gwei` : ""
            }) cannot be higher than the maximum allowed value (2^256-1).`,
            { cause: t, name: "FeeCapTooHighError" }
          );
        }
      }
      Object.defineProperty(s, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
      });
      class a extends i.G {
        constructor({ cause: t, maxFeePerGas: e } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              e ? ` = ${(0, n.o)(e)}` : ""
            } gwei) cannot be lower than the block base fee.`,
            { cause: t, name: "FeeCapTooLowError" }
          );
        }
      }
      Object.defineProperty(a, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
      });
      class u extends i.G {
        constructor({ cause: t, nonce: e } = {}) {
          super(
            `Nonce provided for the transaction ${
              e ? `(${e}) ` : ""
            }is higher than the next one expected.`,
            { cause: t, name: "NonceTooHighError" }
          );
        }
      }
      Object.defineProperty(u, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too high/,
      });
      class l extends i.G {
        constructor({ cause: t, nonce: e } = {}) {
          super(
            `Nonce provided for the transaction ${
              e ? `(${e}) ` : ""
            }is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,
            { cause: t, name: "NonceTooLowError" }
          );
        }
      }
      Object.defineProperty(l, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too low|transaction already imported|already known/,
      });
      class c extends i.G {
        constructor({ cause: t, nonce: e } = {}) {
          super(
            `Nonce provided for the transaction ${
              e ? `(${e}) ` : ""
            }exceeds the maximum allowed nonce.`,
            { cause: t, name: "NonceMaxValueError" }
          );
        }
      }
      Object.defineProperty(c, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce has max value/,
      });
      class f extends i.G {
        constructor({ cause: t } = {}) {
          super(
            "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",
            {
              cause: t,
              metaMessages: [
                "This error could arise when the account does not have enough funds to:",
                " - pay for the total gas fee,",
                " - pay for the value to send.",
                " ",
                "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
                " - `gas` is the amount of gas needed for transaction to execute,",
                " - `gas fee` is the gas fee,",
                " - `value` is the amount of ether to send to the recipient.",
              ],
              name: "InsufficientFundsError",
            }
          );
        }
      }
      Object.defineProperty(f, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /insufficient funds|exceeds transaction sender account balance/,
      });
      class h extends i.G {
        constructor({ cause: t, gas: e } = {}) {
          super(
            `The amount of gas ${
              e ? `(${e}) ` : ""
            }provided for the transaction exceeds the limit allowed for the block.`,
            { cause: t, name: "IntrinsicGasTooHighError" }
          );
        }
      }
      Object.defineProperty(h, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too high|gas limit reached/,
      });
      class d extends i.G {
        constructor({ cause: t, gas: e } = {}) {
          super(
            `The amount of gas ${
              e ? `(${e}) ` : ""
            }provided for the transaction is too low.`,
            { cause: t, name: "IntrinsicGasTooLowError" }
          );
        }
      }
      Object.defineProperty(d, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too low/,
      });
      class p extends i.G {
        constructor({ cause: t }) {
          super("The transaction type is not supported for this chain.", {
            cause: t,
            name: "TransactionTypeNotSupportedError",
          });
        }
      }
      Object.defineProperty(p, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /transaction type not valid/,
      });
      class m extends i.G {
        constructor({
          cause: t,
          maxPriorityFeePerGas: e,
          maxFeePerGas: r,
        } = {}) {
          super(
            `The provided tip (\`maxPriorityFeePerGas\`${
              e ? ` = ${(0, n.o)(e)} gwei` : ""
            }) cannot be higher than the fee cap (\`maxFeePerGas\`${
              r ? ` = ${(0, n.o)(r)} gwei` : ""
            }).`,
            { cause: t, name: "TipAboveFeeCapError" }
          );
        }
      }
      Object.defineProperty(m, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
      });
      class g extends i.G {
        constructor({ cause: t }) {
          super(`An error occurred while executing: ${t?.shortMessage}`, {
            cause: t,
            name: "UnknownNodeError",
          });
        }
      }
    },
    4456: function (t, e, r) {
      "use strict";
      r.d(e, {
        Gg: function () {
          return s;
        },
        W5: function () {
          return u;
        },
        bs: function () {
          return a;
        },
      });
      var n = r(47499),
        i = r(6649),
        o = r(87137);
      class s extends i.G {
        constructor({
          body: t,
          cause: e,
          details: r,
          headers: i,
          status: s,
          url: a,
        }) {
          super("HTTP request failed.", {
            cause: e,
            details: r,
            metaMessages: [
              s && `Status: ${s}`,
              `URL: ${(0, o.G)(a)}`,
              t && `Request body: ${(0, n.P)(t)}`,
            ].filter(Boolean),
            name: "HttpRequestError",
          }),
            Object.defineProperty(this, "body", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "headers", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "status", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "url", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.body = t),
            (this.headers = i),
            (this.status = s),
            (this.url = a);
        }
      }
      class a extends i.G {
        constructor({ body: t, error: e, url: r }) {
          super("RPC Request failed.", {
            cause: e,
            details: e.message,
            metaMessages: [
              `URL: ${(0, o.G)(r)}`,
              `Request body: ${(0, n.P)(t)}`,
            ],
            name: "RpcRequestError",
          }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.code = e.code);
        }
      }
      class u extends i.G {
        constructor({ body: t, url: e }) {
          super("The request took too long to respond.", {
            details: "The request timed out.",
            metaMessages: [
              `URL: ${(0, o.G)(e)}`,
              `Request body: ${(0, n.P)(t)}`,
            ],
            name: "TimeoutError",
          });
        }
      }
    },
    96329: function (t, e, r) {
      "use strict";
      r.d(e, {
        B: function () {
          return u;
        },
        GD: function () {
          return b;
        },
        I0: function () {
          return M;
        },
        KB: function () {
          return m;
        },
        LX: function () {
          return l;
        },
        Og: function () {
          return d;
        },
        PE: function () {
          return w;
        },
        Pv: function () {
          return y;
        },
        Ts: function () {
          return x;
        },
        XS: function () {
          return f;
        },
        ab: function () {
          return v;
        },
        gS: function () {
          return g;
        },
        ir: function () {
          return B;
        },
        nY: function () {
          return c;
        },
        pT: function () {
          return p;
        },
        s7: function () {
          return a;
        },
        u5: function () {
          return E;
        },
        x3: function () {
          return P;
        },
        yR: function () {
          return h;
        },
      });
      var n = r(6649),
        i = r(4456);
      class o extends n.G {
        constructor(
          t,
          { code: e, docsPath: r, metaMessages: n, name: o, shortMessage: s }
        ) {
          super(s, {
            cause: t,
            docsPath: r,
            metaMessages: n || t?.metaMessages,
            name: o || "RpcError",
          }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.name = o || t.name),
            (this.code = t instanceof i.bs ? t.code : e ?? -1);
        }
      }
      class s extends o {
        constructor(t, e) {
          super(t, e),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e.data);
        }
      }
      class a extends o {
        constructor(t) {
          super(t, {
            code: a.code,
            name: "ParseRpcError",
            shortMessage:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          });
        }
      }
      Object.defineProperty(a, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32700,
      });
      class u extends o {
        constructor(t) {
          super(t, {
            code: u.code,
            name: "InvalidRequestRpcError",
            shortMessage: "JSON is not a valid request object.",
          });
        }
      }
      Object.defineProperty(u, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32600,
      });
      class l extends o {
        constructor(t, { method: e } = {}) {
          super(t, {
            code: l.code,
            name: "MethodNotFoundRpcError",
            shortMessage: `The method${
              e ? ` "${e}"` : ""
            } does not exist / is not available.`,
          });
        }
      }
      Object.defineProperty(l, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32601,
      });
      class c extends o {
        constructor(t) {
          super(t, {
            code: c.code,
            name: "InvalidParamsRpcError",
            shortMessage:
              "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters.",
          });
        }
      }
      Object.defineProperty(c, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32602,
      });
      class f extends o {
        constructor(t) {
          super(t, {
            code: f.code,
            name: "InternalRpcError",
            shortMessage: "An internal error was received.",
          });
        }
      }
      Object.defineProperty(f, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32603,
      });
      class h extends o {
        constructor(t) {
          super(t, {
            code: h.code,
            name: "InvalidInputRpcError",
            shortMessage:
              "Missing or invalid parameters.\nDouble check you have provided the correct parameters.",
          });
        }
      }
      Object.defineProperty(h, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32e3,
      });
      class d extends o {
        constructor(t) {
          super(t, {
            code: d.code,
            name: "ResourceNotFoundRpcError",
            shortMessage: "Requested resource not found.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ResourceNotFoundRpcError",
            });
        }
      }
      Object.defineProperty(d, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32001,
      });
      class p extends o {
        constructor(t) {
          super(t, {
            code: p.code,
            name: "ResourceUnavailableRpcError",
            shortMessage: "Requested resource not available.",
          });
        }
      }
      Object.defineProperty(p, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32002,
      });
      class m extends o {
        constructor(t) {
          super(t, {
            code: m.code,
            name: "TransactionRejectedRpcError",
            shortMessage: "Transaction creation failed.",
          });
        }
      }
      Object.defineProperty(m, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32003,
      });
      class g extends o {
        constructor(t, { method: e } = {}) {
          super(t, {
            code: g.code,
            name: "MethodNotSupportedRpcError",
            shortMessage: `Method${e ? ` "${e}"` : ""} is not implemented.`,
          });
        }
      }
      Object.defineProperty(g, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32004,
      });
      class y extends o {
        constructor(t) {
          super(t, {
            code: y.code,
            name: "LimitExceededRpcError",
            shortMessage: "Request exceeds defined limit.",
          });
        }
      }
      Object.defineProperty(y, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32005,
      });
      class b extends o {
        constructor(t) {
          super(t, {
            code: b.code,
            name: "JsonRpcVersionUnsupportedError",
            shortMessage: "Version of JSON-RPC protocol is not supported.",
          });
        }
      }
      Object.defineProperty(b, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32006,
      });
      class v extends s {
        constructor(t) {
          super(t, {
            code: v.code,
            name: "UserRejectedRequestError",
            shortMessage: "User rejected the request.",
          });
        }
      }
      Object.defineProperty(v, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4001,
      });
      class w extends s {
        constructor(t) {
          super(t, {
            code: w.code,
            name: "UnauthorizedProviderError",
            shortMessage:
              "The requested method and/or account has not been authorized by the user.",
          });
        }
      }
      Object.defineProperty(w, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4100,
      });
      class x extends s {
        constructor(t, { method: e } = {}) {
          super(t, {
            code: x.code,
            name: "UnsupportedProviderMethodError",
            shortMessage: `The Provider does not support the requested method${
              e ? ` " ${e}"` : ""
            }.`,
          });
        }
      }
      Object.defineProperty(x, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4200,
      });
      class E extends s {
        constructor(t) {
          super(t, {
            code: E.code,
            name: "ProviderDisconnectedError",
            shortMessage: "The Provider is disconnected from all chains.",
          });
        }
      }
      Object.defineProperty(E, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4900,
      });
      class M extends s {
        constructor(t) {
          super(t, {
            code: M.code,
            name: "ChainDisconnectedError",
            shortMessage:
              "The Provider is not connected to the requested chain.",
          });
        }
      }
      Object.defineProperty(M, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4901,
      });
      class P extends s {
        constructor(t) {
          super(t, {
            code: P.code,
            name: "SwitchChainError",
            shortMessage: "An error occurred when attempting to switch chain.",
          });
        }
      }
      Object.defineProperty(P, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4902,
      });
      class B extends o {
        constructor(t) {
          super(t, {
            name: "UnknownRpcError",
            shortMessage: "An unknown RPC error occurred.",
          });
        }
      }
    },
    75534: function (t, e, r) {
      "use strict";
      r.d(e, {
        Bj: function () {
          return a;
        },
        Nc: function () {
          return i;
        },
        Z8: function () {
          return o;
        },
      });
      var n = r(6649);
      class i extends n.G {
        constructor({ address: t }) {
          super(`State for account "${t}" is set multiple times.`, {
            name: "AccountStateConflictError",
          });
        }
      }
      class o extends n.G {
        constructor() {
          super("state and stateDiff are set on the same account.", {
            name: "StateAssignmentConflictError",
          });
        }
      }
      function s(t) {
        return t.reduce(
          (t, { slot: e, value: r }) => `${t}        ${e}: ${r}
`,
          ""
        );
      }
      function a(t) {
        return t
          .reduce((t, { address: e, ...r }) => {
            let n = `${t}    ${e}:
`;
            return (
              r.nonce &&
                (n += `      nonce: ${r.nonce}
`),
              r.balance &&
                (n += `      balance: ${r.balance}
`),
              r.code &&
                (n += `      code: ${r.code}
`),
              r.state && (n += "      state:\n" + s(r.state)),
              r.stateDiff && (n += "      stateDiff:\n" + s(r.stateDiff)),
              n
            );
          }, "  State Override:\n")
          .slice(0, -1);
      }
    },
    97658: function (t, e, r) {
      "use strict";
      r.d(e, {
        Bh: function () {
          return h;
        },
        JC: function () {
          return c;
        },
        Yb: function () {
          return d;
        },
        j3: function () {
          return l;
        },
        mc: function () {
          return p;
        },
        mk: function () {
          return f;
        },
        vl: function () {
          return u;
        },
        xY: function () {
          return a;
        },
        xr: function () {
          return s;
        },
      });
      var n = r(85053),
        i = r(49268),
        o = r(6649);
      function s(t) {
        let e = Object.entries(t)
            .map(([t, e]) => (void 0 === e || !1 === e ? null : [t, e]))
            .filter(Boolean),
          r = e.reduce((t, [e]) => Math.max(t, e.length), 0);
        return e.map(([t, e]) => `  ${`${t}:`.padEnd(r + 1)}  ${e}`).join("\n");
      }
      class a extends o.G {
        constructor() {
          super(
            "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.",
            { name: "FeeConflictError" }
          );
        }
      }
      class u extends o.G {
        constructor({ v: t }) {
          super(`Invalid \`v\` value "${t}". Expected 27 or 28.`, {
            name: "InvalidLegacyVError",
          });
        }
      }
      class l extends o.G {
        constructor({ transaction: t }) {
          super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: [
              "Provided Transaction:",
              "{",
              s(t),
              "}",
              "",
              "To infer the type, either provide:",
              "- a `type` to the Transaction, or",
              "- an EIP-1559 Transaction with `maxFeePerGas`, or",
              "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
              "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
              "- an EIP-7702 Transaction with `authorizationList`, or",
              "- a Legacy Transaction with `gasPrice`",
            ],
            name: "InvalidSerializableTransactionError",
          });
        }
      }
      class c extends o.G {
        constructor({ storageKey: t }) {
          super(
            `Size for storage key "${t}" is invalid. Expected 32 bytes. Got ${Math.floor(
              (t.length - 2) / 2
            )} bytes.`,
            { name: "InvalidStorageKeySizeError" }
          );
        }
      }
      class f extends o.G {
        constructor(
          t,
          {
            account: e,
            docsPath: r,
            chain: o,
            data: a,
            gas: u,
            gasPrice: l,
            maxFeePerGas: c,
            maxPriorityFeePerGas: f,
            nonce: h,
            to: d,
            value: p,
          }
        ) {
          super(t.shortMessage, {
            cause: t,
            docsPath: r,
            metaMessages: [
              ...(t.metaMessages ? [...t.metaMessages, " "] : []),
              "Request Arguments:",
              s({
                chain: o && `${o?.name} (id: ${o?.id})`,
                from: e?.address,
                to: d,
                value:
                  void 0 !== p &&
                  `${(0, n.d)(p)} ${o?.nativeCurrency?.symbol || "ETH"}`,
                data: a,
                gas: u,
                gasPrice: void 0 !== l && `${(0, i.o)(l)} gwei`,
                maxFeePerGas: void 0 !== c && `${(0, i.o)(c)} gwei`,
                maxPriorityFeePerGas: void 0 !== f && `${(0, i.o)(f)} gwei`,
                nonce: h,
              }),
            ].filter(Boolean),
            name: "TransactionExecutionError",
          }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = t);
        }
      }
      class h extends o.G {
        constructor({
          blockHash: t,
          blockNumber: e,
          blockTag: r,
          hash: n,
          index: i,
        }) {
          let o = "Transaction";
          r &&
            void 0 !== i &&
            (o = `Transaction at block time "${r}" at index "${i}"`),
            t &&
              void 0 !== i &&
              (o = `Transaction at block hash "${t}" at index "${i}"`),
            e &&
              void 0 !== i &&
              (o = `Transaction at block number "${e}" at index "${i}"`),
            n && (o = `Transaction with hash "${n}"`),
            super(`${o} could not be found.`, {
              name: "TransactionNotFoundError",
            });
        }
      }
      class d extends o.G {
        constructor({ hash: t }) {
          super(
            `Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`,
            { name: "TransactionReceiptNotFoundError" }
          );
        }
      }
      class p extends o.G {
        constructor({ hash: t }) {
          super(
            `Timed out while waiting for transaction with hash "${t}" to be confirmed.`,
            { name: "WaitForTransactionReceiptTimeoutError" }
          );
        }
      }
    },
    87137: function (t, e, r) {
      "use strict";
      r.d(e, {
        C: function () {
          return n;
        },
        G: function () {
          return i;
        },
      });
      let n = (t) => t,
        i = (t) => t;
    },
    15210: function (t, e, r) {
      "use strict";
      r.d(e, {
        z: function () {
          return l;
        },
      });
      var n = r(97261),
        i = r(53932),
        o = r(82361),
        s = r(95046),
        a = r(7092),
        u = r(29886);
      async function l(t) {
        let { authorization: e, signature: r } = t;
        return (0, n.R)({
          hash: (function (t) {
            let { chainId: e, contractAddress: r, nonce: n, to: l } = t,
              c = (0, u.w)(
                (0, i.SM)(["0x05", (0, a.LV)([(0, s.eC)(e), r, (0, s.eC)(n)])])
              );
            return "bytes" === l ? (0, o.nr)(c) : c;
          })(e),
          signature: r ?? e,
        });
      }
    },
    32784: function (t, e, r) {
      "use strict";
      r.d(e, {
        i: function () {
          return O;
        },
      });
      var n = r(21019),
        i = r(20621),
        o = r(16719),
        s = r(55875);
      let a = {
        block: (0, i.G)({
          format: (t) => ({
            transactions: t.transactions?.map((t) => {
              if ("string" == typeof t) return t;
              let e = o.Tr(t);
              return (
                "0x7e" === e.typeHex &&
                  ((e.isSystemTx = t.isSystemTx),
                  (e.mint = t.mint ? n.y_(t.mint) : void 0),
                  (e.sourceHash = t.sourceHash),
                  (e.type = "deposit")),
                e
              );
            }),
            stateRoot: t.stateRoot,
          }),
        }),
        transaction: (0, o.y_)({
          format(t) {
            let e = {};
            return (
              "0x7e" === t.type &&
                ((e.isSystemTx = t.isSystemTx),
                (e.mint = t.mint ? (0, n.y_)(t.mint) : void 0),
                (e.sourceHash = t.sourceHash),
                (e.type = "deposit")),
              e
            );
          },
        }),
        transactionReceipt: (0, s.dI)({
          format: (t) => ({
            l1GasPrice: t.l1GasPrice ? (0, n.y_)(t.l1GasPrice) : null,
            l1GasUsed: t.l1GasUsed ? (0, n.y_)(t.l1GasUsed) : null,
            l1Fee: t.l1Fee ? (0, n.y_)(t.l1Fee) : null,
            l1FeeScalar: t.l1FeeScalar ? Number(t.l1FeeScalar) : null,
          }),
        }),
      };
      var u = r(51359),
        l = r(64113),
        c = r(53932),
        f = r(95046),
        h = r(7092),
        d = r(97658),
        p = r(40598),
        m = r(18383),
        g = r(92486),
        y = r(30721),
        b = r(77955),
        v = r(9383),
        w = r(6649),
        x = r(25678),
        E = r(89045),
        M = r(37764),
        P = r(7508),
        B = r(49014);
      function A(t) {
        let { chainId: e, maxPriorityFeePerGas: r, maxFeePerGas: n, to: i } = t;
        if (e <= 0) throw new E.hJ({ chainId: e });
        if (i && !(0, l.U)(i)) throw new u.b({ address: i });
        if (n && n > 2n ** 256n - 1n) throw new M.Hh({ maxFeePerGas: n });
        if (r && n && r > n)
          throw new M.cs({ maxFeePerGas: n, maxPriorityFeePerGas: r });
      }
      var S = r(33884);
      function C(t) {
        if (!t || 0 === t.length) return [];
        let e = [];
        for (let r = 0; r < t.length; r++) {
          let { address: n, storageKeys: i } = t[r];
          for (let t = 0; t < i.length; t++)
            if (i[t].length - 2 != 64) throw new d.JC({ storageKey: i[t] });
          if (!(0, l.U)(n, { strict: !1 })) throw new u.b({ address: n });
          e.push([n, i]);
        }
        return e;
      }
      function I(t, e) {
        let r = e ?? t,
          { v: n, yParity: i } = r;
        if (void 0 === r.r || void 0 === r.s || (void 0 === n && void 0 === i))
          return [];
        let o = (0, b.f)(r.r),
          s = (0, b.f)(r.s);
        return [
          "number" == typeof i
            ? i
              ? (0, f.NC)(1)
              : "0x"
            : 0n === n
            ? "0x"
            : 1n === n
            ? (0, f.NC)(1)
            : 27n === n
            ? "0x"
            : (0, f.NC)(1),
          "0x00" === o ? "0x" : o,
          "0x00" === s ? "0x" : s,
        ];
      }
      let O = {
        contracts: {
          gasPriceOracle: {
            address: "0x420000000000000000000000000000000000000F",
          },
          l1Block: { address: "0x4200000000000000000000000000000000000015" },
          l2CrossDomainMessenger: {
            address: "0x4200000000000000000000000000000000000007",
          },
          l2Erc721Bridge: {
            address: "0x4200000000000000000000000000000000000014",
          },
          l2StandardBridge: {
            address: "0x4200000000000000000000000000000000000010",
          },
          l2ToL1MessagePasser: {
            address: "0x4200000000000000000000000000000000000016",
          },
        },
        formatters: a,
        serializers: {
          transaction: function (t, e) {
            return "deposit" === t.type || void 0 !== t.sourceHash
              ? (function (t) {
                  !(function (t) {
                    let { from: e, to: r } = t;
                    if (e && !(0, l.U)(e)) throw new u.b({ address: e });
                    if (r && !(0, l.U)(r)) throw new u.b({ address: r });
                  })(t);
                  let {
                      sourceHash: e,
                      data: r,
                      from: n,
                      gas: i,
                      isSystemTx: o,
                      mint: s,
                      to: a,
                      value: d,
                    } = t,
                    p = [
                      e,
                      n,
                      a ?? "0x",
                      s ? (0, f.NC)(s) : "0x",
                      d ? (0, f.NC)(d) : "0x",
                      i ? (0, f.NC)(i) : "0x",
                      o ? "0x1" : "0x",
                      r ?? "0x",
                    ];
                  return (0, c.SM)(["0x7e", (0, h.LV)(p)]);
                })(t)
              : (function (t, e) {
                  let r = (0, S.l)(t);
                  return "eip1559" === r
                    ? (function (t, e) {
                        let {
                          chainId: r,
                          gas: n,
                          nonce: i,
                          to: o,
                          value: s,
                          maxFeePerGas: a,
                          maxPriorityFeePerGas: u,
                          accessList: l,
                          data: d,
                        } = t;
                        A(t);
                        let p = C(l),
                          m = [
                            (0, f.NC)(r),
                            i ? (0, f.NC)(i) : "0x",
                            u ? (0, f.NC)(u) : "0x",
                            a ? (0, f.NC)(a) : "0x",
                            n ? (0, f.NC)(n) : "0x",
                            o ?? "0x",
                            s ? (0, f.NC)(s) : "0x",
                            d ?? "0x",
                            p,
                            ...I(t, e),
                          ];
                        return (0, c.SM)(["0x02", (0, h.LV)(m)]);
                      })(t, e)
                    : "eip2930" === r
                    ? (function (t, e) {
                        let {
                          chainId: r,
                          gas: n,
                          data: i,
                          nonce: o,
                          to: s,
                          value: a,
                          accessList: d,
                          gasPrice: p,
                        } = t;
                        !(function (t) {
                          let {
                            chainId: e,
                            maxPriorityFeePerGas: r,
                            gasPrice: n,
                            maxFeePerGas: i,
                            to: o,
                          } = t;
                          if (e <= 0) throw new E.hJ({ chainId: e });
                          if (o && !(0, l.U)(o)) throw new u.b({ address: o });
                          if (r || i)
                            throw new w.G(
                              "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute."
                            );
                          if (n && n > 2n ** 256n - 1n)
                            throw new M.Hh({ maxFeePerGas: n });
                        })(t);
                        let m = C(d),
                          g = [
                            (0, f.NC)(r),
                            o ? (0, f.NC)(o) : "0x",
                            p ? (0, f.NC)(p) : "0x",
                            n ? (0, f.NC)(n) : "0x",
                            s ?? "0x",
                            a ? (0, f.NC)(a) : "0x",
                            i ?? "0x",
                            m,
                            ...I(t, e),
                          ];
                        return (0, c.SM)(["0x01", (0, h.LV)(g)]);
                      })(t, e)
                    : "eip4844" === r
                    ? (function (t, e) {
                        let {
                          chainId: r,
                          gas: i,
                          nonce: o,
                          to: s,
                          value: a,
                          maxFeePerBlobGas: u,
                          maxFeePerGas: l,
                          maxPriorityFeePerGas: d,
                          accessList: b,
                          data: w,
                        } = t;
                        !(function (t) {
                          let { blobVersionedHashes: e } = t;
                          if (e) {
                            if (0 === e.length) throw new x.RX();
                            for (let t of e) {
                              let e = (0, P.d)(t),
                                r = (0, n.ly)((0, B.tP)(t, 0, 1));
                              if (32 !== e)
                                throw new x.xd({ hash: t, size: e });
                              if (r !== v.l)
                                throw new x.cJ({ hash: t, version: r });
                            }
                          }
                          A(t);
                        })(t);
                        let E = t.blobVersionedHashes,
                          M = t.sidecars;
                        if (t.blobs && (void 0 === E || void 0 === M)) {
                          let e =
                              "string" == typeof t.blobs[0]
                                ? t.blobs
                                : t.blobs.map((t) => (0, f.ci)(t)),
                            r = t.kzg,
                            n = (0, p.P)({ blobs: e, kzg: r });
                          if (
                            (void 0 === E && (E = (0, g.C)({ commitments: n })),
                            void 0 === M)
                          ) {
                            let t = (0, m.y)({
                              blobs: e,
                              commitments: n,
                              kzg: r,
                            });
                            M = (0, y.j)({
                              blobs: e,
                              commitments: n,
                              proofs: t,
                            });
                          }
                        }
                        let S = C(b),
                          O = [
                            (0, f.NC)(r),
                            o ? (0, f.NC)(o) : "0x",
                            d ? (0, f.NC)(d) : "0x",
                            l ? (0, f.NC)(l) : "0x",
                            i ? (0, f.NC)(i) : "0x",
                            s ?? "0x",
                            a ? (0, f.NC)(a) : "0x",
                            w ?? "0x",
                            S,
                            u ? (0, f.NC)(u) : "0x",
                            E ?? [],
                            ...I(t, e),
                          ],
                          _ = [],
                          k = [],
                          $ = [];
                        if (M)
                          for (let t = 0; t < M.length; t++) {
                            let { blob: e, commitment: r, proof: n } = M[t];
                            _.push(e), k.push(r), $.push(n);
                          }
                        return (0, c.SM)([
                          "0x03",
                          M ? (0, h.LV)([O, _, k, $]) : (0, h.LV)(O),
                        ]);
                      })(t, e)
                    : "eip7702" === r
                    ? (function (t, e) {
                        let {
                          authorizationList: r,
                          chainId: n,
                          gas: i,
                          nonce: o,
                          to: s,
                          value: a,
                          maxFeePerGas: d,
                          maxPriorityFeePerGas: p,
                          accessList: m,
                          data: g,
                        } = t;
                        !(function (t) {
                          let { authorizationList: e } = t;
                          if (e)
                            for (let t of e) {
                              let { contractAddress: e, chainId: r } = t;
                              if (!(0, l.U)(e)) throw new u.b({ address: e });
                              if (r <= 0) throw new E.hJ({ chainId: r });
                            }
                          A(t);
                        })(t);
                        let y = C(m),
                          b = (function (t) {
                            if (!t || 0 === t.length) return [];
                            let e = [];
                            for (let r of t) {
                              let {
                                contractAddress: t,
                                chainId: n,
                                nonce: i,
                                ...o
                              } = r;
                              e.push([
                                (0, f.NC)(n),
                                t,
                                (0, f.NC)(i),
                                ...I({}, o),
                              ]);
                            }
                            return e;
                          })(r);
                        return (0, c.SM)([
                          "0x04",
                          (0, h.LV)([
                            (0, f.NC)(n),
                            o ? (0, f.NC)(o) : "0x",
                            p ? (0, f.NC)(p) : "0x",
                            d ? (0, f.NC)(d) : "0x",
                            i ? (0, f.NC)(i) : "0x",
                            s ?? "0x",
                            a ? (0, f.NC)(a) : "0x",
                            g ?? "0x",
                            y,
                            b,
                            ...I(t, e),
                          ]),
                        ]);
                      })(t, e)
                    : (function (t, e) {
                        let {
                          chainId: r = 0,
                          gas: n,
                          data: i,
                          nonce: o,
                          to: s,
                          value: a,
                          gasPrice: c,
                        } = t;
                        !(function (t) {
                          let {
                            chainId: e,
                            maxPriorityFeePerGas: r,
                            gasPrice: n,
                            maxFeePerGas: i,
                            to: o,
                          } = t;
                          if (o && !(0, l.U)(o)) throw new u.b({ address: o });
                          if (void 0 !== e && e <= 0)
                            throw new E.hJ({ chainId: e });
                          if (r || i)
                            throw new w.G(
                              "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute."
                            );
                          if (n && n > 2n ** 256n - 1n)
                            throw new M.Hh({ maxFeePerGas: n });
                        })(t);
                        let p = [
                          o ? (0, f.NC)(o) : "0x",
                          c ? (0, f.NC)(c) : "0x",
                          n ? (0, f.NC)(n) : "0x",
                          s ?? "0x",
                          a ? (0, f.NC)(a) : "0x",
                          i ?? "0x",
                        ];
                        if (e) {
                          let t = (() => {
                              if (e.v >= 35n)
                                return (e.v - 35n) / 2n > 0
                                  ? e.v
                                  : 27n + (35n === e.v ? 0n : 1n);
                              if (r > 0)
                                return BigInt(2 * r) + BigInt(35n + e.v - 27n);
                              let t = 27n + (27n === e.v ? 0n : 1n);
                              if (e.v !== t) throw new d.vl({ v: e.v });
                              return t;
                            })(),
                            n = (0, b.f)(e.r),
                            i = (0, b.f)(e.s);
                          p = [
                            ...p,
                            (0, f.NC)(t),
                            "0x00" === n ? "0x" : n,
                            "0x00" === i ? "0x" : i,
                          ];
                        } else r > 0 && (p = [...p, (0, f.NC)(r), "0x", "0x"]);
                        return (0, h.LV)(p);
                      })(t, e);
                })(t, e);
          },
        },
      };
    },
    52998: function (t, e, r) {
      "use strict";
      r.d(e, {
        r: function () {
          return m;
        },
      });
      var n = r(52186),
        i = r(99112),
        o = r(15222),
        s = r(7508),
        a = r(49014),
        u = r(77955),
        l = r(74188),
        c = r(21019),
        f = r(95046);
      function h(t, e = {}) {
        void 0 !== e.size && (0, c.Yf)(t, { size: e.size });
        let r = (0, f.ci)(t, e);
        return (0, c.ly)(r, e);
      }
      var d = r(82361),
        p = r(39480);
      function m(t, e) {
        let r = "string" == typeof e ? (0, d.nr)(e) : e,
          m = (0, o.q)(r);
        if (0 === (0, s.d)(r) && t.length > 0) throw new n.wb();
        if ((0, s.d)(e) && 32 > (0, s.d)(e))
          throw new n.xB({
            data: "string" == typeof e ? e : (0, f.ci)(e),
            params: t,
            size: (0, s.d)(e),
          });
        let y = 0,
          b = [];
        for (let e = 0; e < t.length; ++e) {
          let r = t[e];
          m.setPosition(y);
          let [o, s] = (function t(e, r, { staticPosition: o }) {
            let s = (0, p.S)(r.type);
            if (s) {
              let [n, i] = s;
              return (function (e, r, { length: n, staticPosition: i }) {
                if (!n) {
                  let n = i + h(e.readBytes(32)),
                    o = n + 32;
                  e.setPosition(n);
                  let s = h(e.readBytes(32)),
                    a = g(r),
                    u = 0,
                    l = [];
                  for (let n = 0; n < s; ++n) {
                    e.setPosition(o + (a ? 32 * n : u));
                    let [i, s] = t(e, r, { staticPosition: o });
                    (u += s), l.push(i);
                  }
                  return e.setPosition(i + 32), [l, 32];
                }
                if (g(r)) {
                  let o = i + h(e.readBytes(32)),
                    s = [];
                  for (let i = 0; i < n; ++i) {
                    e.setPosition(o + 32 * i);
                    let [n] = t(e, r, { staticPosition: o });
                    s.push(n);
                  }
                  return e.setPosition(i + 32), [s, 32];
                }
                let o = 0,
                  s = [];
                for (let a = 0; a < n; ++a) {
                  let [n, a] = t(e, r, { staticPosition: i + o });
                  (o += a), s.push(n);
                }
                return [s, o];
              })(e, { ...r, type: i }, { length: n, staticPosition: o });
            }
            if ("tuple" === r.type)
              return (function (e, r, { staticPosition: n }) {
                let i =
                    0 === r.components.length ||
                    r.components.some(({ name: t }) => !t),
                  o = i ? [] : {},
                  s = 0;
                if (g(r)) {
                  let a = n + h(e.readBytes(32));
                  for (let n = 0; n < r.components.length; ++n) {
                    let u = r.components[n];
                    e.setPosition(a + s);
                    let [l, c] = t(e, u, { staticPosition: a });
                    (s += c), (o[i ? n : u?.name] = l);
                  }
                  return e.setPosition(n + 32), [o, 32];
                }
                for (let a = 0; a < r.components.length; ++a) {
                  let u = r.components[a],
                    [l, c] = t(e, u, { staticPosition: n });
                  (o[i ? a : u?.name] = l), (s += c);
                }
                return [o, s];
              })(e, r, { staticPosition: o });
            if ("address" === r.type)
              return (function (t) {
                let e = t.readBytes(32);
                return [(0, i.x)((0, f.ci)((0, a.T4)(e, -20))), 32];
              })(e);
            if ("bool" === r.type)
              return [
                (function (t, e = {}) {
                  let r = t;
                  if (
                    (void 0 !== e.size &&
                      ((0, c.Yf)(r, { size: e.size }), (r = (0, u.f)(r))),
                    r.length > 1 || r[0] > 1)
                  )
                    throw new l.yr(r);
                  return !!r[0];
                })(e.readBytes(32), { size: 32 }),
                32,
              ];
            if (r.type.startsWith("bytes"))
              return (function (t, e, { staticPosition: r }) {
                let [n, i] = e.type.split("bytes");
                if (!i) {
                  let e = h(t.readBytes(32));
                  t.setPosition(r + e);
                  let n = h(t.readBytes(32));
                  if (0 === n) return t.setPosition(r + 32), ["0x", 32];
                  let i = t.readBytes(n);
                  return t.setPosition(r + 32), [(0, f.ci)(i), 32];
                }
                return [(0, f.ci)(t.readBytes(Number.parseInt(i), 32)), 32];
              })(e, r, { staticPosition: o });
            if (r.type.startsWith("uint") || r.type.startsWith("int"))
              return (function (t, e) {
                let r = e.type.startsWith("int"),
                  n = Number.parseInt(e.type.split("int")[1] || "256"),
                  i = t.readBytes(32);
                return [
                  n > 48
                    ? (function (t, e = {}) {
                        void 0 !== e.size && (0, c.Yf)(t, { size: e.size });
                        let r = (0, f.ci)(t, e);
                        return (0, c.y_)(r, e);
                      })(i, { signed: r })
                    : h(i, { signed: r }),
                  32,
                ];
              })(e, r);
            if ("string" === r.type)
              return (function (t, { staticPosition: e }) {
                let r = h(t.readBytes(32));
                t.setPosition(e + r);
                let n = h(t.readBytes(32));
                if (0 === n) return t.setPosition(e + 32), ["", 32];
                let i = t.readBytes(n, 32),
                  o = (function (t, e = {}) {
                    let r = t;
                    return (
                      void 0 !== e.size &&
                        ((0, c.Yf)(r, { size: e.size }),
                        (r = (0, u.f)(r, { dir: "right" }))),
                      new TextDecoder().decode(r)
                    );
                  })((0, u.f)(i));
                return t.setPosition(e + 32), [o, 32];
              })(e, { staticPosition: o });
            throw new n.CI(r.type, {
              docsPath: "/docs/contract/decodeAbiParameters",
            });
          })(m, r, { staticPosition: 0 });
          (y += s), b.push(o);
        }
        return b;
      }
      function g(t) {
        let { type: e } = t;
        if ("string" === e || "bytes" === e || e.endsWith("[]")) return !0;
        if ("tuple" === e) return t.components?.some(g);
        let r = (0, p.S)(t.type);
        return !!(r && g({ ...t, type: r[1] }));
      }
    },
    71108: function (t, e, r) {
      "use strict";
      r.d(e, {
        p: function () {
          return l;
        },
      });
      var n = r(47807),
        i = r(52186),
        o = r(49014),
        s = r(87522),
        a = r(52998),
        u = r(20101);
      function l(t) {
        let { abi: e, data: r } = t,
          l = (0, o.tP)(r, 0, 4);
        if ("0x" === l) throw new i.wb();
        let c = [...(e || []), n.Up, n.hZ].find(
          (t) => "error" === t.type && l === (0, s.C)((0, u.t)(t))
        );
        if (!c)
          throw new i.yP(l, { docsPath: "/docs/contract/decodeErrorResult" });
        return {
          abiItem: c,
          args:
            "inputs" in c && c.inputs && c.inputs.length > 0
              ? (0, a.r)(c.inputs, (0, o.tP)(r, 4))
              : void 0,
          errorName: c.name,
        };
      }
    },
    39480: function (t, e, r) {
      "use strict";
      r.d(e, {
        E: function () {
          return h;
        },
        S: function () {
          return p;
        },
      });
      var n = r(52186),
        i = r(51359),
        o = r(6649),
        s = r(64113),
        a = r(53932),
        u = r(88202),
        l = r(7508),
        c = r(49014),
        f = r(95046);
      function h(t, e) {
        if (t.length !== e.length)
          throw new n.fs({ expectedLength: t.length, givenLength: e.length });
        let r = d(
          (function ({ params: t, values: e }) {
            let r = [];
            for (let h = 0; h < t.length; h++)
              r.push(
                (function t({ param: e, value: r }) {
                  let h = p(e.type);
                  if (h) {
                    let [i, o] = h;
                    return (function (e, { length: r, param: i }) {
                      let o = null === r;
                      if (!Array.isArray(e)) throw new n.hn(e);
                      if (!o && e.length !== r)
                        throw new n.gr({
                          expectedLength: r,
                          givenLength: e.length,
                          type: `${i.type}[${r}]`,
                        });
                      let s = !1,
                        u = [];
                      for (let r = 0; r < e.length; r++) {
                        let n = t({ param: i, value: e[r] });
                        n.dynamic && (s = !0), u.push(n);
                      }
                      if (o || s) {
                        let t = d(u);
                        if (o) {
                          let e = (0, f.eC)(u.length, { size: 32 });
                          return {
                            dynamic: !0,
                            encoded: u.length > 0 ? (0, a.zo)([e, t]) : e,
                          };
                        }
                        if (s) return { dynamic: !0, encoded: t };
                      }
                      return {
                        dynamic: !1,
                        encoded: (0, a.zo)(u.map(({ encoded: t }) => t)),
                      };
                    })(r, { length: i, param: { ...e, type: o } });
                  }
                  if ("tuple" === e.type)
                    return (function (e, { param: r }) {
                      let n = !1,
                        i = [];
                      for (let o = 0; o < r.components.length; o++) {
                        let s = r.components[o],
                          a = Array.isArray(e) ? o : s.name,
                          u = t({ param: s, value: e[a] });
                        i.push(u), u.dynamic && (n = !0);
                      }
                      return {
                        dynamic: n,
                        encoded: n
                          ? d(i)
                          : (0, a.zo)(i.map(({ encoded: t }) => t)),
                      };
                    })(r, { param: e });
                  if ("address" === e.type)
                    return (function (t) {
                      if (!(0, s.U)(t)) throw new i.b({ address: t });
                      return {
                        dynamic: !1,
                        encoded: (0, u.gc)(t.toLowerCase()),
                      };
                    })(r);
                  if ("bool" === e.type)
                    return (function (t) {
                      if ("boolean" != typeof t)
                        throw new o.G(
                          `Invalid boolean value: "${t}" (type: ${typeof t}). Expected: \`true\` or \`false\`.`
                        );
                      return { dynamic: !1, encoded: (0, u.gc)((0, f.C4)(t)) };
                    })(r);
                  if (e.type.startsWith("uint") || e.type.startsWith("int"))
                    return (function (t, { signed: e }) {
                      return {
                        dynamic: !1,
                        encoded: (0, f.eC)(t, { size: 32, signed: e }),
                      };
                    })(r, { signed: e.type.startsWith("int") });
                  if (e.type.startsWith("bytes"))
                    return (function (t, { param: e }) {
                      let [, r] = e.type.split("bytes"),
                        i = (0, l.d)(t);
                      if (!r) {
                        let e = t;
                        return (
                          i % 32 != 0 &&
                            (e = (0, u.gc)(e, {
                              dir: "right",
                              size: 32 * Math.ceil((t.length - 2) / 2 / 32),
                            })),
                          {
                            dynamic: !0,
                            encoded: (0, a.zo)([
                              (0, u.gc)((0, f.eC)(i, { size: 32 })),
                              e,
                            ]),
                          }
                        );
                      }
                      if (i !== Number.parseInt(r))
                        throw new n.M4({
                          expectedSize: Number.parseInt(r),
                          value: t,
                        });
                      return {
                        dynamic: !1,
                        encoded: (0, u.gc)(t, { dir: "right" }),
                      };
                    })(r, { param: e });
                  if ("string" === e.type)
                    return (function (t) {
                      let e = (0, f.$G)(t),
                        r = Math.ceil((0, l.d)(e) / 32),
                        n = [];
                      for (let t = 0; t < r; t++)
                        n.push(
                          (0, u.gc)((0, c.tP)(e, 32 * t, (t + 1) * 32), {
                            dir: "right",
                          })
                        );
                      return {
                        dynamic: !0,
                        encoded: (0, a.zo)([
                          (0, u.gc)((0, f.eC)((0, l.d)(e), { size: 32 })),
                          ...n,
                        ]),
                      };
                    })(r);
                  throw new n.dh(e.type, {
                    docsPath: "/docs/contract/encodeAbiParameters",
                  });
                })({ param: t[h], value: e[h] })
              );
            return r;
          })({ params: t, values: e })
        );
        return 0 === r.length ? "0x" : r;
      }
      function d(t) {
        let e = 0;
        for (let r = 0; r < t.length; r++) {
          let { dynamic: n, encoded: i } = t[r];
          n ? (e += 32) : (e += (0, l.d)(i));
        }
        let r = [],
          n = [],
          i = 0;
        for (let o = 0; o < t.length; o++) {
          let { dynamic: s, encoded: a } = t[o];
          s
            ? (r.push((0, f.eC)(e + i, { size: 32 })),
              n.push(a),
              (i += (0, l.d)(a)))
            : r.push(a);
        }
        return (0, a.zo)([...r, ...n]);
      }
      function p(t) {
        let e = t.match(/^(.*)\[(\d+)?\]$/);
        return e ? [e[2] ? Number(e[2]) : null, e[1]] : void 0;
      }
    },
    20101: function (t, e, r) {
      "use strict";
      r.d(e, {
        h: function () {
          return o;
        },
        t: function () {
          return i;
        },
      });
      var n = r(52186);
      function i(t, { includeName: e = !1 } = {}) {
        if ("function" !== t.type && "event" !== t.type && "error" !== t.type)
          throw new n.wM(t.type);
        return `${t.name}(${o(t.inputs, { includeName: e })})`;
      }
      function o(t, { includeName: e = !1 } = {}) {
        return t
          ? t
              .map((t) =>
                (function (t, { includeName: e }) {
                  return t.type.startsWith("tuple")
                    ? `(${o(t.components, { includeName: e })})${t.type.slice(
                        5
                      )}`
                    : t.type + (e && t.name ? ` ${t.name}` : "");
                })(t, { includeName: e })
              )
              .join(e ? ", " : ",")
          : "";
      }
    },
    18748: function (t, e, r) {
      "use strict";
      r.d(e, {
        mE: function () {
          return u;
        },
      });
      var n = r(52186),
        i = r(40369),
        o = r(64113),
        s = r(53263),
        a = r(87522);
      function u(t) {
        let e;
        let { abi: r, args: u = [], name: l } = t,
          c = (0, i.v)(l, { strict: !1 }),
          f = r.filter((t) =>
            c
              ? "function" === t.type
                ? (0, a.C)(t) === l
                : "event" === t.type && (0, s.n)(t) === l
              : "name" in t && t.name === l
          );
        if (0 !== f.length) {
          if (1 === f.length) return f[0];
          for (let t of f)
            if ("inputs" in t) {
              if (!u || 0 === u.length) {
                if (!t.inputs || 0 === t.inputs.length) return t;
                continue;
              }
              if (
                t.inputs &&
                0 !== t.inputs.length &&
                t.inputs.length === u.length &&
                u.every((e, r) => {
                  let n = "inputs" in t && t.inputs[r];
                  return (
                    !!n &&
                    (function t(e, r) {
                      let n = typeof e,
                        i = r.type;
                      switch (i) {
                        case "address":
                          return (0, o.U)(e, { strict: !1 });
                        case "bool":
                          return "boolean" === n;
                        case "function":
                        case "string":
                          return "string" === n;
                        default:
                          if ("tuple" === i && "components" in r)
                            return Object.values(r.components).every((r, n) =>
                              t(Object.values(e)[n], r)
                            );
                          if (
                            /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                              i
                            )
                          )
                            return "number" === n || "bigint" === n;
                          if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i))
                            return "string" === n || e instanceof Uint8Array;
                          if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i))
                            return (
                              Array.isArray(e) &&
                              e.every((e) =>
                                t(e, {
                                  ...r,
                                  type: i.replace(/(\[[0-9]{0,}\])$/, ""),
                                })
                              )
                            );
                          return !1;
                      }
                    })(e, n)
                  );
                })
              ) {
                if (e && "inputs" in e && e.inputs) {
                  let r = (function t(e, r, n) {
                    for (let i in e) {
                      let s = e[i],
                        a = r[i];
                      if (
                        "tuple" === s.type &&
                        "tuple" === a.type &&
                        "components" in s &&
                        "components" in a
                      )
                        return t(s.components, a.components, n[i]);
                      let u = [s.type, a.type];
                      if (
                        (u.includes("address") && u.includes("bytes20")) ||
                        (((u.includes("address") && u.includes("string")) ||
                          (u.includes("address") && u.includes("bytes"))) &&
                          (0, o.U)(n[i], { strict: !1 }))
                      )
                        return u;
                    }
                  })(t.inputs, e.inputs, u);
                  if (r)
                    throw new n.S4(
                      { abiItem: t, type: r[0] },
                      { abiItem: e, type: r[1] }
                    );
                }
                e = t;
              }
            }
          return e || f[0];
        }
      }
    },
    99112: function (t, e, r) {
      "use strict";
      r.d(e, {
        K: function () {
          return c;
        },
        x: function () {
          return l;
        },
      });
      var n = r(51359),
        i = r(82361),
        o = r(29886),
        s = r(98992),
        a = r(64113);
      let u = new s.k(8192);
      function l(t, e) {
        if (u.has(`${t}.${e}`)) return u.get(`${t}.${e}`);
        let r = e ? `${e}${t.toLowerCase()}` : t.substring(2).toLowerCase(),
          n = (0, o.w)((0, i.qX)(r), "bytes"),
          s = (e ? r.substring(`${e}0x`.length) : r).split("");
        for (let t = 0; t < 40; t += 2)
          n[t >> 1] >> 4 >= 8 && s[t] && (s[t] = s[t].toUpperCase()),
            (15 & n[t >> 1]) >= 8 &&
              s[t + 1] &&
              (s[t + 1] = s[t + 1].toUpperCase());
        let a = `0x${s.join("")}`;
        return u.set(`${t}.${e}`, a), a;
      }
      function c(t, e) {
        if (!(0, a.U)(t, { strict: !1 })) throw new n.b({ address: t });
        return l(t, e);
      }
    },
    64113: function (t, e, r) {
      "use strict";
      r.d(e, {
        U: function () {
          return a;
        },
      });
      var n = r(98992),
        i = r(99112);
      let o = /^0x[a-fA-F0-9]{40}$/,
        s = new n.k(8192);
      function a(t, e) {
        let { strict: r = !0 } = e ?? {},
          n = `${t}.${r}`;
        if (s.has(n)) return s.get(n);
        let a =
          !!o.test(t) && (t.toLowerCase() === t || !r || (0, i.x)(t) === t);
        return s.set(n, a), a;
      }
    },
    40598: function (t, e, r) {
      "use strict";
      r.d(e, {
        P: function () {
          return o;
        },
      });
      var n = r(82361),
        i = r(95046);
      function o(t) {
        let { kzg: e } = t,
          r = t.to ?? ("string" == typeof t.blobs[0] ? "hex" : "bytes"),
          o =
            "string" == typeof t.blobs[0]
              ? t.blobs.map((t) => (0, n.nr)(t))
              : t.blobs,
          s = [];
        for (let t of o) s.push(Uint8Array.from(e.blobToKzgCommitment(t)));
        return "bytes" === r ? s : s.map((t) => (0, i.ci)(t));
      }
    },
    18383: function (t, e, r) {
      "use strict";
      r.d(e, {
        y: function () {
          return o;
        },
      });
      var n = r(82361),
        i = r(95046);
      function o(t) {
        let { kzg: e } = t,
          r = t.to ?? ("string" == typeof t.blobs[0] ? "hex" : "bytes"),
          o =
            "string" == typeof t.blobs[0]
              ? t.blobs.map((t) => (0, n.nr)(t))
              : t.blobs,
          s =
            "string" == typeof t.commitments[0]
              ? t.commitments.map((t) => (0, n.nr)(t))
              : t.commitments,
          a = [];
        for (let t = 0; t < o.length; t++) {
          let r = o[t],
            n = s[t];
          a.push(Uint8Array.from(e.computeBlobKzgProof(r, n)));
        }
        return "bytes" === r ? a : a.map((t) => (0, i.ci)(t));
      }
    },
    92486: function (t, e, r) {
      "use strict";
      r.d(e, {
        C: function () {
          return a;
        },
      });
      var n = r(95046),
        i = r(65530),
        o = r(40369),
        s = r(82361);
      function a(t) {
        let { commitments: e, version: r } = t,
          a = t.to ?? ("string" == typeof e[0] ? "hex" : "bytes"),
          u = [];
        for (let t of e)
          u.push(
            (function (t) {
              let { commitment: e, version: r = 1 } = t,
                a = t.to ?? ("string" == typeof e ? "hex" : "bytes"),
                u = (function (t, e) {
                  let r = (0, i.J)(
                    (0, o.v)(t, { strict: !1 }) ? (0, s.O0)(t) : t
                  );
                  return "bytes" === (e || "hex") ? r : (0, n.NC)(r);
                })(e, "bytes");
              return u.set([r], 0), "bytes" === a ? u : (0, n.ci)(u);
            })({ commitment: t, to: a, version: r })
          );
        return u;
      }
    },
    30721: function (t, e, r) {
      "use strict";
      r.d(e, {
        j: function () {
          return c;
        },
      });
      var n = r(40598),
        i = r(18383),
        o = r(25678),
        s = r(15222),
        a = r(7508),
        u = r(82361),
        l = r(95046);
      function c(t) {
        let { data: e, kzg: r, to: c } = t,
          f =
            t.blobs ??
            (function (t) {
              let e = t.to ?? ("string" == typeof t.data ? "hex" : "bytes"),
                r = "string" == typeof t.data ? (0, u.nr)(t.data) : t.data,
                n = (0, a.d)(r);
              if (!n) throw new o.RX();
              if (n > 761855) throw new o.m7({ maxSize: 761855, size: n });
              let i = [],
                c = !0,
                f = 0;
              for (; c; ) {
                let t = (0, s.q)(new Uint8Array(131072)),
                  e = 0;
                for (; e < 4096; ) {
                  let n = r.slice(f, f + 31);
                  if ((t.pushByte(0), t.pushBytes(n), n.length < 31)) {
                    t.pushByte(128), (c = !1);
                    break;
                  }
                  e++, (f += 31);
                }
                i.push(t);
              }
              return "bytes" === e
                ? i.map((t) => t.bytes)
                : i.map((t) => (0, l.ci)(t.bytes));
            })({ data: e, to: c }),
          h = t.commitments ?? (0, n.P)({ blobs: f, kzg: r, to: c }),
          d = t.proofs ?? (0, i.y)({ blobs: f, commitments: h, kzg: r, to: c }),
          p = [];
        for (let t = 0; t < f.length; t++)
          p.push({ blob: f[t], commitment: h[t], proof: d[t] });
        return p;
      }
    },
    95258: function (t, e, r) {
      "use strict";
      function n(t) {
        return { formatters: void 0, fees: void 0, serializers: void 0, ...t };
      }
      r.d(e, {
        a: function () {
          return n;
        },
      });
    },
    15222: function (t, e, r) {
      "use strict";
      r.d(e, {
        q: function () {
          return o;
        },
      });
      var n = r(19477);
      let i = {
        bytes: new Uint8Array(),
        dataView: new DataView(new ArrayBuffer(0)),
        position: 0,
        positionReadCount: new Map(),
        recursiveReadCount: 0,
        recursiveReadLimit: Number.POSITIVE_INFINITY,
        assertReadLimit() {
          if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new n.KD({
              count: this.recursiveReadCount + 1,
              limit: this.recursiveReadLimit,
            });
        },
        assertPosition(t) {
          if (t < 0 || t > this.bytes.length - 1)
            throw new n.lQ({ length: this.bytes.length, position: t });
        },
        decrementPosition(t) {
          if (t < 0) throw new n.T_({ offset: t });
          let e = this.position - t;
          this.assertPosition(e), (this.position = e);
        },
        getReadCount(t) {
          return this.positionReadCount.get(t || this.position) || 0;
        },
        incrementPosition(t) {
          if (t < 0) throw new n.T_({ offset: t });
          let e = this.position + t;
          this.assertPosition(e), (this.position = e);
        },
        inspectByte(t) {
          let e = t ?? this.position;
          return this.assertPosition(e), this.bytes[e];
        },
        inspectBytes(t, e) {
          let r = e ?? this.position;
          return this.assertPosition(r + t - 1), this.bytes.subarray(r, r + t);
        },
        inspectUint8(t) {
          let e = t ?? this.position;
          return this.assertPosition(e), this.bytes[e];
        },
        inspectUint16(t) {
          let e = t ?? this.position;
          return this.assertPosition(e + 1), this.dataView.getUint16(e);
        },
        inspectUint24(t) {
          let e = t ?? this.position;
          return (
            this.assertPosition(e + 2),
            (this.dataView.getUint16(e) << 8) + this.dataView.getUint8(e + 2)
          );
        },
        inspectUint32(t) {
          let e = t ?? this.position;
          return this.assertPosition(e + 3), this.dataView.getUint32(e);
        },
        pushByte(t) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = t),
            this.position++;
        },
        pushBytes(t) {
          this.assertPosition(this.position + t.length - 1),
            this.bytes.set(t, this.position),
            (this.position += t.length);
        },
        pushUint8(t) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = t),
            this.position++;
        },
        pushUint16(t) {
          this.assertPosition(this.position + 1),
            this.dataView.setUint16(this.position, t),
            (this.position += 2);
        },
        pushUint24(t) {
          this.assertPosition(this.position + 2),
            this.dataView.setUint16(this.position, t >> 8),
            this.dataView.setUint8(this.position + 2, 255 & t),
            (this.position += 3);
        },
        pushUint32(t) {
          this.assertPosition(this.position + 3),
            this.dataView.setUint32(this.position, t),
            (this.position += 4);
        },
        readByte() {
          this.assertReadLimit(), this._touch();
          let t = this.inspectByte();
          return this.position++, t;
        },
        readBytes(t, e) {
          this.assertReadLimit(), this._touch();
          let r = this.inspectBytes(t);
          return (this.position += e ?? t), r;
        },
        readUint8() {
          this.assertReadLimit(), this._touch();
          let t = this.inspectUint8();
          return (this.position += 1), t;
        },
        readUint16() {
          this.assertReadLimit(), this._touch();
          let t = this.inspectUint16();
          return (this.position += 2), t;
        },
        readUint24() {
          this.assertReadLimit(), this._touch();
          let t = this.inspectUint24();
          return (this.position += 3), t;
        },
        readUint32() {
          this.assertReadLimit(), this._touch();
          let t = this.inspectUint32();
          return (this.position += 4), t;
        },
        get remaining() {
          return this.bytes.length - this.position;
        },
        setPosition(t) {
          let e = this.position;
          return (
            this.assertPosition(t),
            (this.position = t),
            () => (this.position = e)
          );
        },
        _touch() {
          if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
          let t = this.getReadCount();
          this.positionReadCount.set(this.position, t + 1),
            t > 0 && this.recursiveReadCount++;
        },
      };
      function o(t, { recursiveReadLimit: e = 8192 } = {}) {
        let r = Object.create(i);
        return (
          (r.bytes = t),
          (r.dataView = new DataView(t.buffer, t.byteOffset, t.byteLength)),
          (r.positionReadCount = new Map()),
          (r.recursiveReadLimit = e),
          r
        );
      }
    },
    53932: function (t, e, r) {
      "use strict";
      function n(t) {
        return "string" == typeof t[0]
          ? i(t)
          : (function (t) {
              let e = 0;
              for (let r of t) e += r.length;
              let r = new Uint8Array(e),
                n = 0;
              for (let e of t) r.set(e, n), (n += e.length);
              return r;
            })(t);
      }
      function i(t) {
        return `0x${t.reduce((t, e) => t + e.replace("0x", ""), "")}`;
      }
      r.d(e, {
        SM: function () {
          return i;
        },
        zo: function () {
          return n;
        },
      });
    },
    40369: function (t, e, r) {
      "use strict";
      function n(t, { strict: e = !0 } = {}) {
        return (
          !!t &&
          "string" == typeof t &&
          (e ? /^0x[0-9a-fA-F]*$/.test(t) : t.startsWith("0x"))
        );
      }
      r.d(e, {
        v: function () {
          return n;
        },
      });
    },
    88202: function (t, e, r) {
      "use strict";
      r.d(e, {
        gc: function () {
          return o;
        },
        vk: function () {
          return i;
        },
      });
      var n = r(75057);
      function i(t, { dir: e, size: r = 32 } = {}) {
        return "string" == typeof t
          ? o(t, { dir: e, size: r })
          : (function (t, { dir: e, size: r = 32 } = {}) {
              if (null === r) return t;
              if (t.length > r)
                throw new n.$s({
                  size: t.length,
                  targetSize: r,
                  type: "bytes",
                });
              let i = new Uint8Array(r);
              for (let n = 0; n < r; n++) {
                let o = "right" === e;
                i[o ? n : r - n - 1] = t[o ? n : t.length - n - 1];
              }
              return i;
            })(t, { dir: e, size: r });
      }
      function o(t, { dir: e, size: r = 32 } = {}) {
        if (null === r) return t;
        let i = t.replace("0x", "");
        if (i.length > 2 * r)
          throw new n.$s({
            size: Math.ceil(i.length / 2),
            targetSize: r,
            type: "hex",
          });
        return `0x${i["right" === e ? "padEnd" : "padStart"](2 * r, "0")}`;
      }
    },
    7508: function (t, e, r) {
      "use strict";
      r.d(e, {
        d: function () {
          return i;
        },
      });
      var n = r(40369);
      function i(t) {
        return (0, n.v)(t, { strict: !1 })
          ? Math.ceil((t.length - 2) / 2)
          : t.length;
      }
    },
    49014: function (t, e, r) {
      "use strict";
      r.d(e, {
        T4: function () {
          return l;
        },
        p5: function () {
          return c;
        },
        tP: function () {
          return s;
        },
      });
      var n = r(75057),
        i = r(40369),
        o = r(7508);
      function s(t, e, r, { strict: n } = {}) {
        return (0, i.v)(t, { strict: !1 })
          ? c(t, e, r, { strict: n })
          : l(t, e, r, { strict: n });
      }
      function a(t, e) {
        if ("number" == typeof e && e > 0 && e > (0, o.d)(t) - 1)
          throw new n.mV({ offset: e, position: "start", size: (0, o.d)(t) });
      }
      function u(t, e, r) {
        if (
          "number" == typeof e &&
          "number" == typeof r &&
          (0, o.d)(t) !== r - e
        )
          throw new n.mV({ offset: r, position: "end", size: (0, o.d)(t) });
      }
      function l(t, e, r, { strict: n } = {}) {
        a(t, e);
        let i = t.slice(e, r);
        return n && u(i, e, r), i;
      }
      function c(t, e, r, { strict: n } = {}) {
        a(t, e);
        let i = `0x${t
          .replace("0x", "")
          .slice((e ?? 0) * 2, (r ?? t.length) * 2)}`;
        return n && u(i, e, r), i;
      }
    },
    77955: function (t, e, r) {
      "use strict";
      function n(t, { dir: e = "left" } = {}) {
        let r = "string" == typeof t ? t.replace("0x", "") : t,
          n = 0;
        for (
          let t = 0;
          t < r.length - 1 &&
          "0" === r["left" === e ? t : r.length - t - 1].toString();
          t++
        )
          n++;
        return ((r = "left" === e ? r.slice(n) : r.slice(0, r.length - n)),
        "string" == typeof t)
          ? (1 === r.length && "right" === e && (r = `${r}0`),
            `0x${r.length % 2 == 1 ? `0${r}` : r}`)
          : r;
      }
      r.d(e, {
        f: function () {
          return n;
        },
      });
    },
    21019: function (t, e, r) {
      "use strict";
      r.d(e, {
        Yf: function () {
          return a;
        },
        ly: function () {
          return l;
        },
        rR: function () {
          return c;
        },
        y_: function () {
          return u;
        },
      });
      var n = r(74188),
        i = r(7508),
        o = r(77955),
        s = r(82361);
      function a(t, { size: e }) {
        if ((0, i.d)(t) > e)
          throw new n.M6({ givenSize: (0, i.d)(t), maxSize: e });
      }
      function u(t, e = {}) {
        let { signed: r } = e;
        e.size && a(t, { size: e.size });
        let n = BigInt(t);
        if (!r) return n;
        let i = (t.length - 2) / 2;
        return n <= (1n << (8n * BigInt(i) - 1n)) - 1n
          ? n
          : n - BigInt(`0x${"f".padStart(2 * i, "f")}`) - 1n;
      }
      function l(t, e = {}) {
        return Number(u(t, e));
      }
      function c(t, e = {}) {
        let r = (0, s.nr)(t);
        return (
          e.size &&
            (a(r, { size: e.size }), (r = (0, o.f)(r, { dir: "right" }))),
          new TextDecoder().decode(r)
        );
      }
    },
    82361: function (t, e, r) {
      "use strict";
      r.d(e, {
        O0: function () {
          return l;
        },
        nr: function () {
          return h;
        },
        qX: function () {
          return d;
        },
      });
      var n = r(6649),
        i = r(40369),
        o = r(88202),
        s = r(21019),
        a = r(95046);
      let u = new TextEncoder();
      function l(t, e = {}) {
        return "number" == typeof t || "bigint" == typeof t
          ? h((0, a.eC)(t, e))
          : "boolean" == typeof t
          ? (function (t, e = {}) {
              let r = new Uint8Array(1);
              return ((r[0] = Number(t)), "number" == typeof e.size)
                ? ((0, s.Yf)(r, { size: e.size }),
                  (0, o.vk)(r, { size: e.size }))
                : r;
            })(t, e)
          : (0, i.v)(t)
          ? h(t, e)
          : d(t, e);
      }
      let c = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function f(t) {
        return t >= c.zero && t <= c.nine
          ? t - c.zero
          : t >= c.A && t <= c.F
          ? t - (c.A - 10)
          : t >= c.a && t <= c.f
          ? t - (c.a - 10)
          : void 0;
      }
      function h(t, e = {}) {
        let r = t;
        e.size &&
          ((0, s.Yf)(r, { size: e.size }),
          (r = (0, o.vk)(r, { dir: "right", size: e.size })));
        let i = r.slice(2);
        i.length % 2 && (i = `0${i}`);
        let a = i.length / 2,
          u = new Uint8Array(a);
        for (let t = 0, e = 0; t < a; t++) {
          let r = f(i.charCodeAt(e++)),
            o = f(i.charCodeAt(e++));
          if (void 0 === r || void 0 === o)
            throw new n.G(
              `Invalid byte sequence ("${i[e - 2]}${i[e - 1]}" in "${i}").`
            );
          u[t] = 16 * r + o;
        }
        return u;
      }
      function d(t, e = {}) {
        let r = u.encode(t);
        return "number" == typeof e.size
          ? ((0, s.Yf)(r, { size: e.size }),
            (0, o.vk)(r, { dir: "right", size: e.size }))
          : r;
      }
    },
    95046: function (t, e, r) {
      "use strict";
      r.d(e, {
        $G: function () {
          return h;
        },
        C4: function () {
          return u;
        },
        NC: function () {
          return a;
        },
        ci: function () {
          return l;
        },
        eC: function () {
          return c;
        },
      });
      var n = r(74188),
        i = r(88202),
        o = r(21019);
      let s = Array.from({ length: 256 }, (t, e) =>
        e.toString(16).padStart(2, "0")
      );
      function a(t, e = {}) {
        return "number" == typeof t || "bigint" == typeof t
          ? c(t, e)
          : "string" == typeof t
          ? h(t, e)
          : "boolean" == typeof t
          ? u(t, e)
          : l(t, e);
      }
      function u(t, e = {}) {
        let r = `0x${Number(t)}`;
        return "number" == typeof e.size
          ? ((0, o.Yf)(r, { size: e.size }), (0, i.vk)(r, { size: e.size }))
          : r;
      }
      function l(t, e = {}) {
        let r = "";
        for (let e = 0; e < t.length; e++) r += s[t[e]];
        let n = `0x${r}`;
        return "number" == typeof e.size
          ? ((0, o.Yf)(n, { size: e.size }),
            (0, i.vk)(n, { dir: "right", size: e.size }))
          : n;
      }
      function c(t, e = {}) {
        let r;
        let { signed: o, size: s } = e,
          a = BigInt(t);
        s
          ? (r = o
              ? (1n << (8n * BigInt(s) - 1n)) - 1n
              : 2n ** (8n * BigInt(s)) - 1n)
          : "number" == typeof t && (r = BigInt(Number.MAX_SAFE_INTEGER));
        let u = "bigint" == typeof r && o ? -r - 1n : 0;
        if ((r && a > r) || a < u) {
          let e = "bigint" == typeof t ? "n" : "";
          throw new n.J5({
            max: r ? `${r}${e}` : void 0,
            min: `${u}${e}`,
            signed: o,
            size: s,
            value: `${t}${e}`,
          });
        }
        let l = `0x${(o && a < 0
          ? (1n << BigInt(8 * s)) + BigInt(a)
          : a
        ).toString(16)}`;
        return s ? (0, i.vk)(l, { size: s }) : l;
      }
      let f = new TextEncoder();
      function h(t, e = {}) {
        return l(f.encode(t), e);
      }
    },
    7092: function (t, e, r) {
      "use strict";
      r.d(e, {
        LV: function () {
          return a;
        },
      });
      var n = r(6649),
        i = r(15222),
        o = r(82361),
        s = r(95046);
      function a(t, e = "hex") {
        let r = (function t(e) {
            return Array.isArray(e)
              ? (function (t) {
                  let e = t.reduce((t, e) => t + e.length, 0),
                    r = u(e);
                  return {
                    length: e <= 55 ? 1 + e : 1 + r + e,
                    encode(n) {
                      for (let { encode: i } of (e <= 55
                        ? n.pushByte(192 + e)
                        : (n.pushByte(247 + r),
                          1 === r
                            ? n.pushUint8(e)
                            : 2 === r
                            ? n.pushUint16(e)
                            : 3 === r
                            ? n.pushUint24(e)
                            : n.pushUint32(e)),
                      t))
                        i(n);
                    },
                  };
                })(e.map((e) => t(e)))
              : (function (t) {
                  let e = "string" == typeof t ? (0, o.nr)(t) : t,
                    r = u(e.length);
                  return {
                    length:
                      1 === e.length && e[0] < 128
                        ? 1
                        : e.length <= 55
                        ? 1 + e.length
                        : 1 + r + e.length,
                    encode(t) {
                      (1 === e.length && e[0] < 128) ||
                        (e.length <= 55
                          ? t.pushByte(128 + e.length)
                          : (t.pushByte(183 + r),
                            1 === r
                              ? t.pushUint8(e.length)
                              : 2 === r
                              ? t.pushUint16(e.length)
                              : 3 === r
                              ? t.pushUint24(e.length)
                              : t.pushUint32(e.length))),
                        t.pushBytes(e);
                    },
                  };
                })(e);
          })(t),
          n = (0, i.q)(new Uint8Array(r.length));
        return (r.encode(n), "hex" === e) ? (0, s.ci)(n.bytes) : n.bytes;
      }
      function u(t) {
        if (t < 256) return 1;
        if (t < 65536) return 2;
        if (t < 16777216) return 3;
        if (t < 4294967296) return 4;
        throw new n.G("Length is too large.");
      }
    },
    8114: function (t, e, r) {
      "use strict";
      r.d(e, {
        P: function () {
          return s;
        },
      });
      var n = r(58591),
        i = r(37764),
        o = r(43149);
      function s(t, { docsPath: e, ...r }) {
        let s = (() => {
          let e = (0, o.k)(t, r);
          return e instanceof i.cj ? t : e;
        })();
        return new n.cg(s, { docsPath: e, ...r });
      }
    },
    43149: function (t, e, r) {
      "use strict";
      r.d(e, {
        k: function () {
          return o;
        },
      });
      var n = r(6649),
        i = r(37764);
      function o(t, e) {
        let r = (t.details || "").toLowerCase(),
          o = t instanceof n.G ? t.walk((t) => t.code === i.M_.code) : t;
        return o instanceof n.G
          ? new i.M_({ cause: t, message: o.details })
          : i.M_.nodeMessage.test(r)
          ? new i.M_({ cause: t, message: t.details })
          : i.Hh.nodeMessage.test(r)
          ? new i.Hh({ cause: t, maxFeePerGas: e?.maxFeePerGas })
          : i.G$.nodeMessage.test(r)
          ? new i.G$({ cause: t, maxFeePerGas: e?.maxFeePerGas })
          : i.ZI.nodeMessage.test(r)
          ? new i.ZI({ cause: t, nonce: e?.nonce })
          : i.vU.nodeMessage.test(r)
          ? new i.vU({ cause: t, nonce: e?.nonce })
          : i.se.nodeMessage.test(r)
          ? new i.se({ cause: t, nonce: e?.nonce })
          : i.C_.nodeMessage.test(r)
          ? new i.C_({ cause: t })
          : i.WF.nodeMessage.test(r)
          ? new i.WF({ cause: t, gas: e?.gas })
          : i.dR.nodeMessage.test(r)
          ? new i.dR({ cause: t, gas: e?.gas })
          : i.pZ.nodeMessage.test(r)
          ? new i.pZ({ cause: t })
          : i.cs.nodeMessage.test(r)
          ? new i.cs({
              cause: t,
              maxFeePerGas: e?.maxFeePerGas,
              maxPriorityFeePerGas: e?.maxPriorityFeePerGas,
            })
          : new i.cj({ cause: t });
      }
    },
    20621: function (t, e, r) {
      "use strict";
      r.d(e, {
        G: function () {
          return s;
        },
        Z: function () {
          return o;
        },
      });
      var n = r(74558),
        i = r(16719);
      function o(t) {
        let e = t.transactions?.map((t) =>
          "string" == typeof t ? t : i.Tr(t)
        );
        return {
          ...t,
          baseFeePerGas: t.baseFeePerGas ? BigInt(t.baseFeePerGas) : null,
          blobGasUsed: t.blobGasUsed ? BigInt(t.blobGasUsed) : void 0,
          difficulty: t.difficulty ? BigInt(t.difficulty) : void 0,
          excessBlobGas: t.excessBlobGas ? BigInt(t.excessBlobGas) : void 0,
          gasLimit: t.gasLimit ? BigInt(t.gasLimit) : void 0,
          gasUsed: t.gasUsed ? BigInt(t.gasUsed) : void 0,
          hash: t.hash ? t.hash : null,
          logsBloom: t.logsBloom ? t.logsBloom : null,
          nonce: t.nonce ? t.nonce : null,
          number: t.number ? BigInt(t.number) : null,
          size: t.size ? BigInt(t.size) : void 0,
          timestamp: t.timestamp ? BigInt(t.timestamp) : void 0,
          transactions: e,
          totalDifficulty: t.totalDifficulty ? BigInt(t.totalDifficulty) : null,
        };
      }
      let s = (0, n.$)("block", o);
    },
    27031: function (t, e, r) {
      "use strict";
      function n(t, { format: e }) {
        if (!e) return {};
        let r = {};
        return (
          !(function e(n) {
            for (let i of Object.keys(n))
              i in t && (r[i] = t[i]),
                n[i] &&
                  "object" == typeof n[i] &&
                  !Array.isArray(n[i]) &&
                  e(n[i]);
          })(e(t || {})),
          r
        );
      }
      r.d(e, {
        K: function () {
          return n;
        },
      });
    },
    74558: function (t, e, r) {
      "use strict";
      function n(t, e) {
        return ({ exclude: r, format: n }) => ({
          exclude: r,
          format: (t) => {
            let i = e(t);
            if (r) for (let t of r) delete i[t];
            return { ...i, ...n(t) };
          },
          type: t,
        });
      }
      r.d(e, {
        $: function () {
          return n;
        },
      });
    },
    21677: function (t, e, r) {
      "use strict";
      function n(t, { args: e, eventName: r } = {}) {
        return {
          ...t,
          blockHash: t.blockHash ? t.blockHash : null,
          blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
          logIndex: t.logIndex ? Number(t.logIndex) : null,
          transactionHash: t.transactionHash ? t.transactionHash : null,
          transactionIndex: t.transactionIndex
            ? Number(t.transactionIndex)
            : null,
          ...(r ? { args: e, eventName: r } : {}),
        };
      }
      r.d(e, {
        U: function () {
          return n;
        },
      });
    },
    16719: function (t, e, r) {
      "use strict";
      r.d(e, {
        Tr: function () {
          return s;
        },
        c8: function () {
          return o;
        },
        y_: function () {
          return a;
        },
      });
      var n = r(21019),
        i = r(74558);
      let o = {
        "0x0": "legacy",
        "0x1": "eip2930",
        "0x2": "eip1559",
        "0x3": "eip4844",
        "0x4": "eip7702",
      };
      function s(t) {
        let e = {
          ...t,
          blockHash: t.blockHash ? t.blockHash : null,
          blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
          chainId: t.chainId ? (0, n.ly)(t.chainId) : void 0,
          gas: t.gas ? BigInt(t.gas) : void 0,
          gasPrice: t.gasPrice ? BigInt(t.gasPrice) : void 0,
          maxFeePerBlobGas: t.maxFeePerBlobGas
            ? BigInt(t.maxFeePerBlobGas)
            : void 0,
          maxFeePerGas: t.maxFeePerGas ? BigInt(t.maxFeePerGas) : void 0,
          maxPriorityFeePerGas: t.maxPriorityFeePerGas
            ? BigInt(t.maxPriorityFeePerGas)
            : void 0,
          nonce: t.nonce ? (0, n.ly)(t.nonce) : void 0,
          to: t.to ? t.to : null,
          transactionIndex: t.transactionIndex
            ? Number(t.transactionIndex)
            : null,
          type: t.type ? o[t.type] : void 0,
          typeHex: t.type ? t.type : void 0,
          value: t.value ? BigInt(t.value) : void 0,
          v: t.v ? BigInt(t.v) : void 0,
        };
        return (
          t.authorizationList &&
            (e.authorizationList = t.authorizationList.map((t) => ({
              contractAddress: t.address,
              r: t.r,
              s: t.s,
              chainId: Number(t.chainId),
              nonce: Number(t.nonce),
              ...(void 0 !== t.yParity ? { yParity: Number(t.yParity) } : {}),
              ...(void 0 !== t.v && void 0 === t.yParity
                ? { v: Number(t.v) }
                : {}),
            }))),
          (e.yParity = (() => {
            if (t.yParity) return Number(t.yParity);
            if ("bigint" == typeof e.v) {
              if (0n === e.v || 27n === e.v) return 0;
              if (1n === e.v || 28n === e.v) return 1;
              if (e.v >= 35n) return e.v % 2n === 0n ? 1 : 0;
            }
          })()),
          "legacy" === e.type &&
            (delete e.accessList,
            delete e.maxFeePerBlobGas,
            delete e.maxFeePerGas,
            delete e.maxPriorityFeePerGas,
            delete e.yParity),
          "eip2930" === e.type &&
            (delete e.maxFeePerBlobGas,
            delete e.maxFeePerGas,
            delete e.maxPriorityFeePerGas),
          "eip1559" === e.type && delete e.maxFeePerBlobGas,
          e
        );
      }
      let a = (0, i.$)("transaction", s);
    },
    55875: function (t, e, r) {
      "use strict";
      r.d(e, {
        dI: function () {
          return l;
        },
        fA: function () {
          return u;
        },
      });
      var n = r(21019),
        i = r(74558),
        o = r(21677),
        s = r(16719);
      let a = { "0x0": "reverted", "0x1": "success" };
      function u(t) {
        let e = {
          ...t,
          blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
          contractAddress: t.contractAddress ? t.contractAddress : null,
          cumulativeGasUsed: t.cumulativeGasUsed
            ? BigInt(t.cumulativeGasUsed)
            : null,
          effectiveGasPrice: t.effectiveGasPrice
            ? BigInt(t.effectiveGasPrice)
            : null,
          gasUsed: t.gasUsed ? BigInt(t.gasUsed) : null,
          logs: t.logs ? t.logs.map((t) => (0, o.U)(t)) : null,
          to: t.to ? t.to : null,
          transactionIndex: t.transactionIndex
            ? (0, n.ly)(t.transactionIndex)
            : null,
          status: t.status ? a[t.status] : null,
          type: t.type ? s.c8[t.type] || t.type : null,
        };
        return (
          t.blobGasPrice && (e.blobGasPrice = BigInt(t.blobGasPrice)),
          t.blobGasUsed && (e.blobGasUsed = BigInt(t.blobGasUsed)),
          e
        );
      }
      let l = (0, i.$)("transactionReceipt", u);
    },
    37669: function (t, e, r) {
      "use strict";
      r.d(e, {
        tG: function () {
          return o;
        },
      });
      var n = r(95046);
      let i = {
        legacy: "0x0",
        eip2930: "0x1",
        eip1559: "0x2",
        eip4844: "0x3",
        eip7702: "0x4",
      };
      function o(t) {
        let e = {};
        return (
          void 0 !== t.authorizationList &&
            (e.authorizationList = t.authorizationList.map((t) => ({
              address: t.contractAddress,
              r: t.r,
              s: t.s,
              chainId: (0, n.eC)(t.chainId),
              nonce: (0, n.eC)(t.nonce),
              ...(void 0 !== t.yParity
                ? { yParity: (0, n.eC)(t.yParity) }
                : {}),
              ...(void 0 !== t.v && void 0 === t.yParity
                ? { v: (0, n.eC)(t.v) }
                : {}),
            }))),
          void 0 !== t.accessList && (e.accessList = t.accessList),
          void 0 !== t.blobVersionedHashes &&
            (e.blobVersionedHashes = t.blobVersionedHashes),
          void 0 !== t.blobs &&
            ("string" != typeof t.blobs[0]
              ? (e.blobs = t.blobs.map((t) => (0, n.ci)(t)))
              : (e.blobs = t.blobs)),
          void 0 !== t.data && (e.data = t.data),
          void 0 !== t.from && (e.from = t.from),
          void 0 !== t.gas && (e.gas = (0, n.eC)(t.gas)),
          void 0 !== t.gasPrice && (e.gasPrice = (0, n.eC)(t.gasPrice)),
          void 0 !== t.maxFeePerBlobGas &&
            (e.maxFeePerBlobGas = (0, n.eC)(t.maxFeePerBlobGas)),
          void 0 !== t.maxFeePerGas &&
            (e.maxFeePerGas = (0, n.eC)(t.maxFeePerGas)),
          void 0 !== t.maxPriorityFeePerGas &&
            (e.maxPriorityFeePerGas = (0, n.eC)(t.maxPriorityFeePerGas)),
          void 0 !== t.nonce && (e.nonce = (0, n.eC)(t.nonce)),
          void 0 !== t.to && (e.to = t.to),
          void 0 !== t.type && (e.type = i[t.type]),
          void 0 !== t.value && (e.value = (0, n.eC)(t.value)),
          e
        );
      }
    },
    93413: function (t, e, r) {
      "use strict";
      function n(t, e, r) {
        let n = t[e.name];
        if ("function" == typeof n) return n;
        let i = t[r];
        return "function" == typeof i ? i : (r) => e(t, r);
      }
      r.d(e, {
        s: function () {
          return n;
        },
      });
    },
    29886: function (t, e, r) {
      "use strict";
      r.d(e, {
        w: function () {
          return a;
        },
      });
      var n = r(35743),
        i = r(40369),
        o = r(82361),
        s = r(95046);
      function a(t, e) {
        let r = (0, n.fr)((0, i.v)(t, { strict: !1 }) ? (0, o.O0)(t) : t);
        return "bytes" === (e || "hex") ? r : (0, s.NC)(r);
      }
    },
    53263: function (t, e, r) {
      "use strict";
      r.d(e, {
        n: function () {
          return n;
        },
      });
      let n = r(99530).r;
    },
    87522: function (t, e, r) {
      "use strict";
      r.d(e, {
        C: function () {
          return o;
        },
      });
      var n = r(49014),
        i = r(99530);
      let o = (t) => (0, n.tP)((0, i.r)(t), 0, 4);
    },
    99530: function (t, e, r) {
      "use strict";
      r.d(e, {
        r: function () {
          return f;
        },
      });
      var n = r(82361),
        i = r(29886);
      let o = (t) => (0, i.w)((0, n.O0)(t));
      var s = r(43197);
      let a = /^tuple(?<array>(\[(\d*)\])*)$/;
      function u(t) {
        let e = "",
          r = t.length;
        for (let n = 0; n < r; n++)
          (e += (function t(e) {
            let r = e.type;
            if (a.test(e.type) && "components" in e) {
              r = "(";
              let n = e.components.length;
              for (let i = 0; i < n; i++)
                (r += t(e.components[i])), i < n - 1 && (r += ", ");
              let i = (0, s.Zw)(a, e.type);
              return (r += `)${i?.array ?? ""}`), t({ ...e, type: r });
            }
            return ("indexed" in e && e.indexed && (r = `${r} indexed`), e.name)
              ? `${r} ${e.name}`
              : r;
          })(t[n])),
            n !== r - 1 && (e += ", ");
        return e;
      }
      var l = r(6649);
      let c = (t) =>
        (function (t) {
          let e = !0,
            r = "",
            n = 0,
            i = "",
            o = !1;
          for (let s = 0; s < t.length; s++) {
            let a = t[s];
            if (
              (["(", ")", ","].includes(a) && (e = !0),
              "(" === a && n++,
              ")" === a && n--,
              e)
            ) {
              if (0 === n) {
                if (" " === a && ["event", "function", ""].includes(i)) i = "";
                else if (((i += a), ")" === a)) {
                  o = !0;
                  break;
                }
                continue;
              }
              if (" " === a) {
                "," !== t[s - 1] &&
                  "," !== r &&
                  ",(" !== r &&
                  ((r = ""), (e = !1));
                continue;
              }
              (i += a), (r += a);
            }
          }
          if (!o) throw new l.G("Unable to normalize signature.");
          return i;
        })(
          "string" == typeof t
            ? t
            : "function" === t.type
            ? `function ${t.name}(${u(t.inputs)})${
                t.stateMutability && "nonpayable" !== t.stateMutability
                  ? ` ${t.stateMutability}`
                  : ""
              }${t.outputs.length ? ` returns (${u(t.outputs)})` : ""}`
            : "event" === t.type
            ? `event ${t.name}(${u(t.inputs)})`
            : "error" === t.type
            ? `error ${t.name}(${u(t.inputs)})`
            : "constructor" === t.type
            ? `constructor(${u(t.inputs)})${
                "payable" === t.stateMutability ? " payable" : ""
              }`
            : "fallback" === t.type
            ? "fallback()"
            : "receive() external payable"
        );
      function f(t) {
        return o(c(t));
      }
    },
    98992: function (t, e, r) {
      "use strict";
      r.d(e, {
        k: function () {
          return n;
        },
      });
      class n extends Map {
        constructor(t) {
          super(),
            Object.defineProperty(this, "maxSize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = t);
        }
        set(t, e) {
          return (
            super.set(t, e),
            this.maxSize &&
              this.size > this.maxSize &&
              this.delete(this.keys().next().value),
            this
          );
        }
      }
    },
    10639: function (t, e, r) {
      "use strict";
      r.d(e, {
        S: function () {
          return i;
        },
      });
      let n = new Map();
      function i({ fn: t, id: e, shouldSplitBatch: r, wait: i = 0, sort: o }) {
        let s = async () => {
            let e = l();
            a();
            let r = e.map(({ args: t }) => t);
            0 !== r.length &&
              t(r)
                .then((t) => {
                  o && Array.isArray(t) && t.sort(o);
                  for (let r = 0; r < e.length; r++) {
                    let { pendingPromise: n } = e[r];
                    n.resolve?.([t[r], t]);
                  }
                })
                .catch((t) => {
                  for (let r = 0; r < e.length; r++) {
                    let { pendingPromise: n } = e[r];
                    n.reject?.(t);
                  }
                });
          },
          a = () => n.delete(e),
          u = () => l().map(({ args: t }) => t),
          l = () => n.get(e) || [],
          c = (t) => n.set(e, [...l(), t]);
        return {
          flush: a,
          async schedule(t) {
            let e = {},
              n = new Promise((t, r) => {
                (e.resolve = t), (e.reject = r);
              });
            return (
              (r?.([...u(), t]) && s(), l().length > 0)
                ? c({ args: t, pendingPromise: e })
                : (c({ args: t, pendingPromise: e }), setTimeout(s, i)),
              n
            );
          },
        };
      }
    },
    97261: function (t, e, r) {
      "use strict";
      r.d(e, {
        R: function () {
          return c;
        },
      });
      var n = r(99112),
        i = r(29886),
        o = r(40369),
        s = r(21019),
        a = r(95046);
      async function u({ hash: t, signature: e }) {
        let n = (0, o.v)(t) ? t : (0, a.NC)(t),
          { secp256k1: i } = await r.e(8303).then(r.bind(r, 58303)),
          u = (() => {
            if ("object" == typeof e && "r" in e && "s" in e) {
              let { r: t, s: r, v: n, yParity: o } = e,
                a = l(Number(o ?? n));
              return new i.Signature((0, s.y_)(t), (0, s.y_)(r)).addRecoveryBit(
                a
              );
            }
            let t = (0, o.v)(e) ? e : (0, a.NC)(e),
              r = l((0, s.ly)(`0x${t.slice(130)}`));
            return i.Signature.fromCompact(t.substring(2, 130)).addRecoveryBit(
              r
            );
          })()
            .recoverPublicKey(n.substring(2))
            .toHex(!1);
        return `0x${u}`;
      }
      function l(t) {
        if (0 === t || 1 === t) return t;
        if (27 === t) return 0;
        if (28 === t) return 1;
        throw Error("Invalid yParityOrV value");
      }
      async function c({ hash: t, signature: e }) {
        return (function (t) {
          let e = (0, i.w)(`0x${t.substring(4)}`).substring(26);
          return (0, n.x)(`0x${e}`);
        })(await u({ hash: t, signature: e }));
      }
    },
    11667: function (t, e, r) {
      "use strict";
      r.d(e, {
        mF: function () {
          return l;
        },
      });
      var n = r(51359),
        i = r(75057),
        o = r(75534),
        s = r(64113),
        a = r(95046);
      function u(t) {
        if (t && 0 !== t.length)
          return t.reduce((t, { slot: e, value: r }) => {
            if (66 !== e.length)
              throw new i.W_({ size: e.length, targetSize: 66, type: "hex" });
            if (66 !== r.length)
              throw new i.W_({ size: r.length, targetSize: 66, type: "hex" });
            return (t[e] = r), t;
          }, {});
      }
      function l(t) {
        if (!t) return;
        let e = {};
        for (let { address: r, ...i } of t) {
          if (!(0, s.U)(r, { strict: !1 })) throw new n.b({ address: r });
          if (e[r]) throw new o.Nc({ address: r });
          e[r] = (function (t) {
            let { balance: e, nonce: r, state: n, stateDiff: i, code: s } = t,
              l = {};
            if (
              (void 0 !== s && (l.code = s),
              void 0 !== e && (l.balance = (0, a.eC)(e)),
              void 0 !== r && (l.nonce = (0, a.eC)(r)),
              void 0 !== n && (l.state = u(n)),
              void 0 !== i)
            ) {
              if (l.state) throw new o.Z8();
              l.stateDiff = u(i);
            }
            return l;
          })(i);
        }
        return e;
      }
    },
    47499: function (t, e, r) {
      "use strict";
      r.d(e, {
        P: function () {
          return n;
        },
      });
      let n = (t, e, r) =>
        JSON.stringify(
          t,
          (t, r) => {
            let n = "bigint" == typeof r ? r.toString() : r;
            return "function" == typeof e ? e(t, n) : n;
          },
          r
        );
    },
    82857: function (t, e, r) {
      "use strict";
      r.d(e, {
        F: function () {
          return u;
        },
      });
      var n = r(96104),
        i = r(51359),
        o = r(37764),
        s = r(97658),
        a = r(64113);
      function u(t) {
        let {
            account: e,
            gasPrice: r,
            maxFeePerGas: u,
            maxPriorityFeePerGas: l,
            to: c,
          } = t,
          f = e ? (0, n.T)(e) : void 0;
        if (f && !(0, a.U)(f.address)) throw new i.b({ address: f.address });
        if (c && !(0, a.U)(c)) throw new i.b({ address: c });
        if (void 0 !== r && (void 0 !== u || void 0 !== l)) throw new s.xY();
        if (u && u > 2n ** 256n - 1n) throw new o.Hh({ maxFeePerGas: u });
        if (l && u && l > u)
          throw new o.cs({ maxFeePerGas: u, maxPriorityFeePerGas: l });
      }
    },
    33884: function (t, e, r) {
      "use strict";
      r.d(e, {
        l: function () {
          return i;
        },
      });
      var n = r(97658);
      function i(t) {
        if (t.type) return t.type;
        if (void 0 !== t.authorizationList) return "eip7702";
        if (
          void 0 !== t.blobs ||
          void 0 !== t.blobVersionedHashes ||
          void 0 !== t.maxFeePerBlobGas ||
          void 0 !== t.sidecars
        )
          return "eip4844";
        if (void 0 !== t.maxFeePerGas || void 0 !== t.maxPriorityFeePerGas)
          return "eip1559";
        if (void 0 !== t.gasPrice)
          return void 0 !== t.accessList ? "eip2930" : "legacy";
        throw new n.j3({ transaction: t });
      }
    },
    85053: function (t, e, r) {
      "use strict";
      r.d(e, {
        d: function () {
          return o;
        },
      });
      var n = r(90408),
        i = r(42921);
      function o(t, e = "wei") {
        return (0, i.b)(t, n.ez[e]);
      }
    },
    49268: function (t, e, r) {
      "use strict";
      r.d(e, {
        o: function () {
          return o;
        },
      });
      var n = r(90408),
        i = r(42921);
      function o(t, e = "wei") {
        return (0, i.b)(t, n.Zn[e]);
      }
    },
    42921: function (t, e, r) {
      "use strict";
      function n(t, e) {
        let r = t.toString(),
          n = r.startsWith("-");
        n && (r = r.slice(1));
        let [i, o] = [
          (r = r.padStart(e, "0")).slice(0, r.length - e),
          r.slice(r.length - e),
        ];
        return (
          (o = o.replace(/(0+)$/, "")),
          `${n ? "-" : ""}${i || "0"}${o ? `.${o}` : ""}`
        );
      }
      r.d(e, {
        b: function () {
          return n;
        },
      });
    },
    31195: function (t, e, r) {
      "use strict";
      r.d(e, {
        f: function () {
          return o;
        },
      });
      var n = r(90408),
        i = r(28373);
      function o(t, e = "wei") {
        return (0, i.v)(t, n.ez[e]);
      }
    },
    28373: function (t, e, r) {
      "use strict";
      function n(t, e) {
        let [r, n = "0"] = t.split("."),
          i = r.startsWith("-");
        if ((i && (r = r.slice(1)), (n = n.replace(/(0+)$/, "")), 0 === e))
          1 === Math.round(Number(`.${n}`)) && (r = `${BigInt(r) + 1n}`),
            (n = "");
        else if (n.length > e) {
          let [t, i, o] = [n.slice(0, e - 1), n.slice(e - 1, e), n.slice(e)],
            s = Math.round(Number(`${i}.${o}`));
          (n =
            s > 9
              ? `${BigInt(t) + BigInt(1)}0`.padStart(t.length + 1, "0")
              : `${t}${s}`).length > e &&
            ((n = n.slice(1)), (r = `${BigInt(r) + 1n}`)),
            (n = n.slice(0, e));
        } else n = n.padEnd(e, "0");
        return BigInt(`${i ? "-" : ""}${r}${n}`);
      }
      r.d(e, {
        v: function () {
          return n;
        },
      });
    },
    50016: function (t, e, r) {
      "use strict";
      r.d(e, {
        WagmiContext: function () {
          return o;
        },
        WagmiProvider: function () {
          return s;
        },
      });
      var n = r(2265),
        i = r(52416);
      let o = (0, n.createContext)(void 0);
      function s(t) {
        let { children: e, config: r } = t;
        return (0, n.createElement)(
          i.Hydrate,
          t,
          (0, n.createElement)(o.Provider, { value: r }, e)
        );
      }
    },
    26735: function (t, e, r) {
      "use strict";
      r.d(e, {
        useAccount: function () {
          return c;
        },
      });
      var n = r(30807),
        i = r(79886),
        o = r(94956),
        s = r(90331),
        a = r(2265),
        u = r(35006);
      let l = (t) => "object" == typeof t && !Array.isArray(t);
      function c() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = (0, o.useConfig)(t);
        return (function (t, e) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : e,
            n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : s.v,
            i = (0, a.useRef)([]),
            o = (0, u.useSyncExternalStoreWithSelector)(
              t,
              e,
              r,
              (t) => t,
              (t, e) => {
                if (l(t) && l(e) && i.current.length) {
                  for (let r of i.current) if (!n(t[r], e[r])) return !1;
                  return !0;
                }
                return n(t, e);
              }
            );
          if (l(o)) {
            let t = { ...o },
              e = {};
            for (let [r, n] of Object.entries(t))
              e = {
                ...e,
                [r]: {
                  configurable: !1,
                  enumerable: !0,
                  get: () => (i.current.includes(r) || i.current.push(r), n),
                },
              };
            return Object.defineProperties(t, e), t;
          }
          return o;
        })(
          (t) => (0, n.u)(e, { onChange: t }),
          () => (0, i.D)(e)
        );
      }
    },
    94956: function (t, e, r) {
      "use strict";
      r.d(e, {
        useConfig: function () {
          return l;
        },
      });
      var n = r(2265),
        i = r(50016),
        o = r(66564);
      let s = () => "wagmi@2.12.8";
      class a extends o.G {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiError",
            });
        }
        get docsBaseUrl() {
          return "https://wagmi.sh/react";
        }
        get version() {
          return s();
        }
      }
      class u extends a {
        constructor() {
          super("`useConfig` must be used within `WagmiProvider`.", {
            docsPath: "/api/WagmiProvider",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiProviderNotFoundError",
            });
        }
      }
      function l() {
        var t;
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r =
            null !== (t = e.config) && void 0 !== t
              ? t
              : (0, n.useContext)(i.WagmiContext);
        if (!r) throw new u();
        return r;
      }
    },
    52416: function (t, e, r) {
      "use strict";
      r.d(e, {
        Hydrate: function () {
          return o;
        },
      });
      var n = r(71284),
        i = r(2265);
      function o(t) {
        let {
            children: e,
            config: r,
            initialState: o,
            reconnectOnMount: s = !0,
          } = t,
          { onMount: a } = (function (t, e) {
            let { initialState: r, reconnectOnMount: i } = e;
            return (
              r &&
                !t._internal.store.persist.hasHydrated() &&
                t.setState({
                  ...r,
                  chainId: t.chains.some((t) => t.id === r.chainId)
                    ? r.chainId
                    : t.chains[0].id,
                  connections: i ? r.connections : new Map(),
                  status: i ? "reconnecting" : "disconnected",
                }),
              {
                async onMount() {
                  if (t._internal.ssr) {
                    await t._internal.store.persist.rehydrate();
                    let e = t._internal.mipd
                      ?.getProviders()
                      .map(t._internal.connectors.providerDetailToConnector)
                      .map(t._internal.connectors.setup);
                    t._internal.connectors.setState((t) => [
                      ...t,
                      ...(e ?? []),
                    ]);
                  }
                  i
                    ? (0, n.G)(t)
                    : t.storage &&
                      t.setState((t) => ({ ...t, connections: new Map() }));
                },
              }
            );
          })(r, { initialState: o, reconnectOnMount: s });
        r._internal.ssr || a();
        let u = (0, i.useRef)(!0);
        return (
          (0, i.useEffect)(() => {
            if (u.current && r._internal.ssr)
              return (
                a(),
                () => {
                  u.current = !1;
                }
              );
          }, []),
          e
        );
      }
    },
  },
]);
