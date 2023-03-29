import { onMounted as CP, openBlock as Sv, createElementBlock as y_, normalizeClass as DP, ref as mv, unref as _v, createBlock as MP } from "vue";
import wv from "@tarojs/taro";
process.env.TARO_ENV === "alipay" && Object.defineProperty(Object.prototype, "wx", {
  enumerable: !1,
  value: my
});
(function(G, ct) {
  typeof exports == "object" && typeof module < "u" ? ct(exports) : typeof define == "function" && define.amd ? define(["exports"], ct) : ct(G.echarts = {});
})(globalThis, function(G) {
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  var ct = function(r, t) {
    return ct = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(e, n) {
      e.__proto__ = n;
    } || function(e, n) {
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }, ct(r, t);
  };
  function k(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    ct(r, t);
    function e() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
  }
  var It = function() {
    function r() {
      this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1;
    }
    return r;
  }(), de = function() {
    function r() {
      this.browser = new It(), this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = typeof window < "u";
    }
    return r;
  }(), z = new de();
  typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? (z.wxa = !0, z.touchEventsSupported = !0) : typeof document > "u" && typeof self < "u" ? z.worker = !0 : typeof navigator > "u" ? (z.node = !0, z.svgSupported = !0) : Jr(navigator.userAgent, z);
  function Jr(r, t) {
    var e = t.browser, n = r.match(/Firefox\/([\d.]+)/), i = r.match(/MSIE\s([\d.]+)/) || r.match(/Trident\/.+?rv:(([\d.]+))/), a = r.match(/Edge?\/([\d.]+)/), o = /micromessenger/i.test(r);
    n && (e.firefox = !0, e.version = n[1]), i && (e.ie = !0, e.version = i[1]), a && (e.edge = !0, e.version = a[1], e.newEdge = +a[1].split(".")[0] > 18), o && (e.weChat = !0), t.svgSupported = typeof SVGRect < "u", t.touchEventsSupported = "ontouchstart" in window && !e.ie && !e.edge, t.pointerEventsSupported = "onpointerdown" in window && (e.edge || e.ie && +e.version >= 11), t.domSupported = typeof document < "u";
    var s = document.documentElement.style;
    t.transform3dSupported = (e.ie && "transition" in s || e.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix() || "MozPerspective" in s) && !("OTransition" in s), t.transformSupported = t.transform3dSupported || e.ie && +e.version >= 9;
  }
  var tn = 12, Ri = "sans-serif", ze = tn + "px " + Ri, Q = 20, wt = 100, bt = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
  function en(r) {
    var t = {};
    if (typeof JSON > "u")
      return t;
    for (var e = 0; e < r.length; e++) {
      var n = String.fromCharCode(e + 32), i = (r.charCodeAt(e) - Q) / wt;
      t[n] = i;
    }
    return t;
  }
  var Zn = en(bt), Zt = {
    createCanvas: function() {
      return typeof document < "u" && document.createElement("canvas");
    },
    measureText: function() {
      var r, t;
      return function(e, n) {
        if (!r) {
          var i = Zt.createCanvas();
          r = i && i.getContext("2d");
        }
        if (r)
          return t !== n && (t = r.font = n || ze), r.measureText(e);
        e = e || "", n = n || ze;
        var a = /(\d+)px/.exec(n), o = a && +a[1] || tn, s = 0;
        if (n.indexOf("mono") >= 0)
          s = o * e.length;
        else
          for (var l = 0; l < e.length; l++) {
            var u = Zn[e[l]];
            s += u == null ? o : u * o;
          }
        return {
          width: s
        };
      };
    }(),
    loadImage: function(r, t, e) {
      var n = new Image();
      return n.onload = t, n.onerror = e, n.src = r, n;
    }
  };
  function rn(r) {
    for (var t in Zt)
      r[t] && (Zt[t] = r[t]);
  }
  var $n = Qe(["Function", "RegExp", "Date", "Error", "CanvasGradient", "CanvasPattern", "Image", "Canvas"], function(r, t) {
    return r["[object " + t + "]"] = !0, r;
  }, {}), nn = Qe(["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64"], function(r, t) {
    return r["[object " + t + "Array]"] = !0, r;
  }, {}), be = Object.prototype.toString, an = Array.prototype, eo = an.forEach, ro = an.filter, bl = an.slice, m_ = an.map, bv = function() {
  }.constructor, no = bv ? bv.prototype : null, xl = "__proto__", __ = 2311;
  function Tl() {
    return __++;
  }
  function Dr() {
    for (var r = [], t = 0; t < arguments.length; t++)
      r[t] = arguments[t];
    typeof console < "u" && console.error.apply(console, r);
  }
  function nt(r) {
    if (r == null || typeof r != "object")
      return r;
    var t = r, e = be.call(r);
    if (e === "[object Array]") {
      if (!jn(r)) {
        t = [];
        for (var n = 0, i = r.length; n < i; n++)
          t[n] = nt(r[n]);
      }
    } else if (nn[e]) {
      if (!jn(r)) {
        var a = r.constructor;
        if (a.from)
          t = a.from(r);
        else {
          t = new a(r.length);
          for (var n = 0, i = r.length; n < i; n++)
            t[n] = r[n];
        }
      }
    } else if (!$n[e] && !jn(r) && !Kn(r)) {
      t = {};
      for (var o in r)
        r.hasOwnProperty(o) && o !== xl && (t[o] = nt(r[o]));
    }
    return t;
  }
  function ot(r, t, e) {
    if (!W(t) || !W(r))
      return e ? nt(t) : r;
    for (var n in t)
      if (t.hasOwnProperty(n) && n !== xl) {
        var i = r[n], a = t[n];
        W(a) && W(i) && !F(a) && !F(i) && !Kn(a) && !Kn(i) && !Dl(a) && !Dl(i) && !jn(a) && !jn(i) ? ot(i, a, e) : (e || !(n in r)) && (r[n] = nt(t[n]));
      }
    return r;
  }
  function S_(r, t) {
    for (var e = r[0], n = 1, i = r.length; n < i; n++)
      e = ot(e, r[n], t);
    return e;
  }
  function O(r, t) {
    if (Object.assign)
      Object.assign(r, t);
    else
      for (var e in t)
        t.hasOwnProperty(e) && e !== xl && (r[e] = t[e]);
    return r;
  }
  function lt(r, t, e) {
    for (var n = yt(t), i = 0; i < n.length; i++) {
      var a = n[i];
      (e ? t[a] != null : r[a] == null) && (r[a] = t[a]);
    }
    return r;
  }
  var w_ = Zt.createCanvas;
  function ut(r, t) {
    if (r) {
      if (r.indexOf)
        return r.indexOf(t);
      for (var e = 0, n = r.length; e < n; e++)
        if (r[e] === t)
          return e;
    }
    return -1;
  }
  function Cl(r, t) {
    var e = r.prototype;
    function n() {
    }
    n.prototype = t.prototype, r.prototype = new n();
    for (var i in e)
      e.hasOwnProperty(i) && (r.prototype[i] = e[i]);
    r.prototype.constructor = r, r.superClass = t;
  }
  function xe(r, t, e) {
    if (r = "prototype" in r ? r.prototype : r, t = "prototype" in t ? t.prototype : t, Object.getOwnPropertyNames)
      for (var n = Object.getOwnPropertyNames(t), i = 0; i < n.length; i++) {
        var a = n[i];
        a !== "constructor" && (e ? t[a] != null : r[a] == null) && (r[a] = t[a]);
      }
    else
      lt(r, t, e);
  }
  function $t(r) {
    return !r || typeof r == "string" ? !1 : typeof r.length == "number";
  }
  function M(r, t, e) {
    if (r && t)
      if (r.forEach && r.forEach === eo)
        r.forEach(t, e);
      else if (r.length === +r.length)
        for (var n = 0, i = r.length; n < i; n++)
          t.call(e, r[n], n, r);
      else
        for (var a in r)
          r.hasOwnProperty(a) && t.call(e, r[a], a, r);
  }
  function V(r, t, e) {
    if (!r)
      return [];
    if (!t)
      return io(r);
    if (r.map && r.map === m_)
      return r.map(t, e);
    for (var n = [], i = 0, a = r.length; i < a; i++)
      n.push(t.call(e, r[i], i, r));
    return n;
  }
  function Qe(r, t, e, n) {
    if (r && t) {
      for (var i = 0, a = r.length; i < a; i++)
        e = t.call(n, e, r[i], i, r);
      return e;
    }
  }
  function Dt(r, t, e) {
    if (!r)
      return [];
    if (!t)
      return io(r);
    if (r.filter && r.filter === ro)
      return r.filter(t, e);
    for (var n = [], i = 0, a = r.length; i < a; i++)
      t.call(e, r[i], i, r) && n.push(r[i]);
    return n;
  }
  function b_(r, t, e) {
    if (r && t) {
      for (var n = 0, i = r.length; n < i; n++)
        if (t.call(e, r[n], n, r))
          return r[n];
    }
  }
  function yt(r) {
    if (!r)
      return [];
    if (Object.keys)
      return Object.keys(r);
    var t = [];
    for (var e in r)
      r.hasOwnProperty(e) && t.push(e);
    return t;
  }
  function x_(r, t) {
    for (var e = [], n = 2; n < arguments.length; n++)
      e[n - 2] = arguments[n];
    return function() {
      return r.apply(t, e.concat(bl.call(arguments)));
    };
  }
  var gt = no && X(no.bind) ? no.call.bind(no.bind) : x_;
  function xt(r) {
    for (var t = [], e = 1; e < arguments.length; e++)
      t[e - 1] = arguments[e];
    return function() {
      return r.apply(this, t.concat(bl.call(arguments)));
    };
  }
  function F(r) {
    return Array.isArray ? Array.isArray(r) : be.call(r) === "[object Array]";
  }
  function X(r) {
    return typeof r == "function";
  }
  function H(r) {
    return typeof r == "string";
  }
  function Ei(r) {
    return be.call(r) === "[object String]";
  }
  function pt(r) {
    return typeof r == "number";
  }
  function W(r) {
    var t = typeof r;
    return t === "function" || !!r && t === "object";
  }
  function Dl(r) {
    return !!$n[be.call(r)];
  }
  function Kt(r) {
    return !!nn[be.call(r)];
  }
  function Kn(r) {
    return typeof r == "object" && typeof r.nodeType == "number" && typeof r.ownerDocument == "object";
  }
  function ki(r) {
    return r.colorStops != null;
  }
  function xv(r) {
    return r.image != null;
  }
  function Tv(r) {
    return be.call(r) === "[object RegExp]";
  }
  function Qn(r) {
    return r !== r;
  }
  function Mr() {
    for (var r = [], t = 0; t < arguments.length; t++)
      r[t] = arguments[t];
    for (var e = 0, n = r.length; e < n; e++)
      if (r[e] != null)
        return r[e];
  }
  function tt(r, t) {
    return r ?? t;
  }
  function Ar(r, t, e) {
    return r ?? t ?? e;
  }
  function io(r) {
    for (var t = [], e = 1; e < arguments.length; e++)
      t[e - 1] = arguments[e];
    return bl.apply(r, t);
  }
  function Ml(r) {
    if (typeof r == "number")
      return [r, r, r, r];
    var t = r.length;
    return t === 2 ? [r[0], r[1], r[0], r[1]] : t === 3 ? [r[0], r[1], r[2], r[1]] : r;
  }
  function j(r, t) {
    if (!r)
      throw new Error(t);
  }
  function Ge(r) {
    return r == null ? null : typeof r.trim == "function" ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  }
  var Cv = "__ec_primitive__";
  function Oi(r) {
    r[Cv] = !0;
  }
  function jn(r) {
    return r[Cv];
  }
  var T_ = function() {
    function r() {
      this.data = {};
    }
    return r.prototype.delete = function(t) {
      var e = this.has(t);
      return e && delete this.data[t], e;
    }, r.prototype.has = function(t) {
      return this.data.hasOwnProperty(t);
    }, r.prototype.get = function(t) {
      return this.data[t];
    }, r.prototype.set = function(t, e) {
      return this.data[t] = e, this;
    }, r.prototype.keys = function() {
      return yt(this.data);
    }, r.prototype.forEach = function(t) {
      var e = this.data;
      for (var n in e)
        e.hasOwnProperty(n) && t(e[n], n);
    }, r;
  }(), Dv = typeof Map == "function";
  function C_() {
    return Dv ? /* @__PURE__ */ new Map() : new T_();
  }
  var Mv = function() {
    function r(t) {
      var e = F(t);
      this.data = C_();
      var n = this;
      t instanceof r ? t.each(i) : t && M(t, i);
      function i(a, o) {
        e ? n.set(a, o) : n.set(o, a);
      }
    }
    return r.prototype.hasKey = function(t) {
      return this.data.has(t);
    }, r.prototype.get = function(t) {
      return this.data.get(t);
    }, r.prototype.set = function(t, e) {
      return this.data.set(t, e), e;
    }, r.prototype.each = function(t, e) {
      this.data.forEach(function(n, i) {
        t.call(e, n, i);
      });
    }, r.prototype.keys = function() {
      var t = this.data.keys();
      return Dv ? Array.from(t) : t;
    }, r.prototype.removeKey = function(t) {
      this.data.delete(t);
    }, r;
  }();
  function J(r) {
    return new Mv(r);
  }
  function Av(r, t) {
    for (var e = new r.constructor(r.length + t.length), n = 0; n < r.length; n++)
      e[n] = r[n];
    for (var i = r.length, n = 0; n < t.length; n++)
      e[n + i] = t[n];
    return e;
  }
  function Bi(r, t) {
    var e;
    if (Object.create)
      e = Object.create(r);
    else {
      var n = function() {
      };
      n.prototype = r, e = new n();
    }
    return t && O(e, t), e;
  }
  function Al(r) {
    var t = r.style;
    t.webkitUserSelect = "none", t.userSelect = "none", t.webkitTapHighlightColor = "rgba(0,0,0,0)", t["-webkit-touch-callout"] = "none";
  }
  function on(r, t) {
    return r.hasOwnProperty(t);
  }
  function Qt() {
  }
  var Lv = 180 / Math.PI, D_ = (Object.freeze || Object)({
    guid: Tl,
    logError: Dr,
    clone: nt,
    merge: ot,
    mergeAll: S_,
    extend: O,
    defaults: lt,
    createCanvas: w_,
    indexOf: ut,
    inherits: Cl,
    mixin: xe,
    isArrayLike: $t,
    each: M,
    map: V,
    reduce: Qe,
    filter: Dt,
    find: b_,
    keys: yt,
    bind: gt,
    curry: xt,
    isArray: F,
    isFunction: X,
    isString: H,
    isStringSafe: Ei,
    isNumber: pt,
    isObject: W,
    isBuiltInObject: Dl,
    isTypedArray: Kt,
    isDom: Kn,
    isGradientObject: ki,
    isImagePatternObject: xv,
    isRegExp: Tv,
    eqNaN: Qn,
    retrieve: Mr,
    retrieve2: tt,
    retrieve3: Ar,
    slice: io,
    normalizeCssArray: Ml,
    assert: j,
    trim: Ge,
    setAsPrimitive: Oi,
    isPrimitive: jn,
    HashMap: Mv,
    createHashMap: J,
    concatArray: Av,
    createObject: Bi,
    disableUserSelect: Al,
    hasOwn: on,
    noop: Qt,
    RADIAN_TO_DEGREE: Lv
  });
  function sn(r, t) {
    return r == null && (r = 0), t == null && (t = 0), [r, t];
  }
  function M_(r, t) {
    return r[0] = t[0], r[1] = t[1], r;
  }
  function Pv(r) {
    return [r[0], r[1]];
  }
  function A_(r, t, e) {
    return r[0] = t, r[1] = e, r;
  }
  function Ll(r, t, e) {
    return r[0] = t[0] + e[0], r[1] = t[1] + e[1], r;
  }
  function L_(r, t, e, n) {
    return r[0] = t[0] + e[0] * n, r[1] = t[1] + e[1] * n, r;
  }
  function Iv(r, t, e) {
    return r[0] = t[0] - e[0], r[1] = t[1] - e[1], r;
  }
  function Pl(r) {
    return Math.sqrt(Il(r));
  }
  var P_ = Pl;
  function Il(r) {
    return r[0] * r[0] + r[1] * r[1];
  }
  var I_ = Il;
  function R_(r, t, e) {
    return r[0] = t[0] * e[0], r[1] = t[1] * e[1], r;
  }
  function E_(r, t, e) {
    return r[0] = t[0] / e[0], r[1] = t[1] / e[1], r;
  }
  function k_(r, t) {
    return r[0] * t[0] + r[1] * t[1];
  }
  function ao(r, t, e) {
    return r[0] = t[0] * e, r[1] = t[1] * e, r;
  }
  function Rv(r, t) {
    var e = Pl(t);
    return e === 0 ? (r[0] = 0, r[1] = 0) : (r[0] = t[0] / e, r[1] = t[1] / e), r;
  }
  function oo(r, t) {
    return Math.sqrt((r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]));
  }
  var so = oo;
  function Ev(r, t) {
    return (r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]);
  }
  var ln = Ev;
  function O_(r, t) {
    return r[0] = -t[0], r[1] = -t[1], r;
  }
  function lo(r, t, e, n) {
    return r[0] = t[0] + n * (e[0] - t[0]), r[1] = t[1] + n * (e[1] - t[1]), r;
  }
  function jt(r, t, e) {
    var n = t[0], i = t[1];
    return r[0] = e[0] * n + e[2] * i + e[4], r[1] = e[1] * n + e[3] * i + e[5], r;
  }
  function Lr(r, t, e) {
    return r[0] = Math.min(t[0], e[0]), r[1] = Math.min(t[1], e[1]), r;
  }
  function Pr(r, t, e) {
    return r[0] = Math.max(t[0], e[0]), r[1] = Math.max(t[1], e[1]), r;
  }
  var B_ = (Object.freeze || Object)({
    create: sn,
    copy: M_,
    clone: Pv,
    set: A_,
    add: Ll,
    scaleAndAdd: L_,
    sub: Iv,
    len: Pl,
    length: P_,
    lenSquare: Il,
    lengthSquare: I_,
    mul: R_,
    div: E_,
    dot: k_,
    scale: ao,
    normalize: Rv,
    distance: oo,
    dist: so,
    distanceSquare: Ev,
    distSquare: ln,
    negate: O_,
    lerp: lo,
    applyTransform: jt,
    min: Lr,
    max: Pr
  }), Jn = function() {
    function r(t, e) {
      this.target = t, this.topTarget = e && e.topTarget;
    }
    return r;
  }(), N_ = function() {
    function r(t) {
      this.handler = t, t.on("mousedown", this._dragStart, this), t.on("mousemove", this._drag, this), t.on("mouseup", this._dragEnd, this);
    }
    return r.prototype._dragStart = function(t) {
      for (var e = t.target; e && !e.draggable; )
        e = e.parent || e.__hostTarget;
      e && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.handler.dispatchToElement(new Jn(e, t), "dragstart", t.event));
    }, r.prototype._drag = function(t) {
      var e = this._draggingTarget;
      if (e) {
        var n = t.offsetX, i = t.offsetY, a = n - this._x, o = i - this._y;
        this._x = n, this._y = i, e.drift(a, o, t), this.handler.dispatchToElement(new Jn(e, t), "drag", t.event);
        var s = this.handler.findHover(n, i, e).target, l = this._dropTarget;
        this._dropTarget = s, e !== s && (l && s !== l && this.handler.dispatchToElement(new Jn(l, t), "dragleave", t.event), s && s !== l && this.handler.dispatchToElement(new Jn(s, t), "dragenter", t.event));
      }
    }, r.prototype._dragEnd = function(t) {
      var e = this._draggingTarget;
      e && (e.dragging = !1), this.handler.dispatchToElement(new Jn(e, t), "dragend", t.event), this._dropTarget && this.handler.dispatchToElement(new Jn(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;
    }, r;
  }(), je = function() {
    function r(t) {
      t && (this._$eventProcessor = t);
    }
    return r.prototype.on = function(t, e, n, i) {
      this._$handlers || (this._$handlers = {});
      var a = this._$handlers;
      if (typeof e == "function" && (i = n, n = e, e = null), !n || !t)
        return this;
      var o = this._$eventProcessor;
      e != null && o && o.normalizeQuery && (e = o.normalizeQuery(e)), a[t] || (a[t] = []);
      for (var s = 0; s < a[t].length; s++)
        if (a[t][s].h === n)
          return this;
      var l = {
        h: n,
        query: e,
        ctx: i || this,
        callAtLast: n.zrEventfulCallAtLast
      }, u = a[t].length - 1, f = a[t][u];
      return f && f.callAtLast ? a[t].splice(u, 0, l) : a[t].push(l), this;
    }, r.prototype.isSilent = function(t) {
      var e = this._$handlers;
      return !e || !e[t] || !e[t].length;
    }, r.prototype.off = function(t, e) {
      var n = this._$handlers;
      if (!n)
        return this;
      if (!t)
        return this._$handlers = {}, this;
      if (e) {
        if (n[t]) {
          for (var i = [], a = 0, o = n[t].length; a < o; a++)
            n[t][a].h !== e && i.push(n[t][a]);
          n[t] = i;
        }
        n[t] && n[t].length === 0 && delete n[t];
      } else
        delete n[t];
      return this;
    }, r.prototype.trigger = function(t) {
      for (var e = [], n = 1; n < arguments.length; n++)
        e[n - 1] = arguments[n];
      if (!this._$handlers)
        return this;
      var i = this._$handlers[t], a = this._$eventProcessor;
      if (i)
        for (var o = e.length, s = i.length, l = 0; l < s; l++) {
          var u = i[l];
          if (!(a && a.filter && u.query != null && !a.filter(t, u.query)))
            switch (o) {
              case 0:
                u.h.call(u.ctx);
                break;
              case 1:
                u.h.call(u.ctx, e[0]);
                break;
              case 2:
                u.h.call(u.ctx, e[0], e[1]);
                break;
              default:
                u.h.apply(u.ctx, e);
                break;
            }
        }
      return a && a.afterTrigger && a.afterTrigger(t), this;
    }, r.prototype.triggerWithContext = function(t) {
      for (var e = [], n = 1; n < arguments.length; n++)
        e[n - 1] = arguments[n];
      if (!this._$handlers)
        return this;
      var i = this._$handlers[t], a = this._$eventProcessor;
      if (i)
        for (var o = e.length, s = e[o - 1], l = i.length, u = 0; u < l; u++) {
          var f = i[u];
          if (!(a && a.filter && f.query != null && !a.filter(t, f.query)))
            switch (o) {
              case 0:
                f.h.call(s);
                break;
              case 1:
                f.h.call(s, e[0]);
                break;
              case 2:
                f.h.call(s, e[0], e[1]);
                break;
              default:
                f.h.apply(s, e.slice(1, o - 1));
                break;
            }
        }
      return a && a.afterTrigger && a.afterTrigger(t), this;
    }, r;
  }(), F_ = Math.log(2);
  function Rl(r, t, e, n, i, a) {
    var o = n + "-" + i, s = r.length;
    if (a.hasOwnProperty(o))
      return a[o];
    if (t === 1) {
      var l = Math.round(Math.log((1 << s) - 1 & ~i) / F_);
      return r[e][l];
    }
    for (var u = n | 1 << e, f = e + 1; n & 1 << f; )
      f++;
    for (var h = 0, c = 0, v = 0; c < s; c++) {
      var d = 1 << c;
      d & i || (h += (v % 2 ? -1 : 1) * r[e][c] * Rl(r, t - 1, f, u, i | d, a), v++);
    }
    return a[o] = h, h;
  }
  function kv(r, t) {
    var e = [[r[0], r[1], 1, 0, 0, 0, -t[0] * r[0], -t[0] * r[1]], [0, 0, 0, r[0], r[1], 1, -t[1] * r[0], -t[1] * r[1]], [r[2], r[3], 1, 0, 0, 0, -t[2] * r[2], -t[2] * r[3]], [0, 0, 0, r[2], r[3], 1, -t[3] * r[2], -t[3] * r[3]], [r[4], r[5], 1, 0, 0, 0, -t[4] * r[4], -t[4] * r[5]], [0, 0, 0, r[4], r[5], 1, -t[5] * r[4], -t[5] * r[5]], [r[6], r[7], 1, 0, 0, 0, -t[6] * r[6], -t[6] * r[7]], [0, 0, 0, r[6], r[7], 1, -t[7] * r[6], -t[7] * r[7]]], n = {}, i = Rl(e, 8, 0, 0, 0, n);
    if (i !== 0) {
      for (var a = [], o = 0; o < 8; o++)
        for (var s = 0; s < 8; s++)
          a[s] == null && (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * Rl(e, 7, o === 0 ? 1 : 0, 1 << o, 1 << s, n) / i * t[o];
      return function(l, u, f) {
        var h = u * a[6] + f * a[7] + 1;
        l[0] = (u * a[0] + f * a[1] + a[2]) / h, l[1] = (u * a[3] + f * a[4] + a[5]) / h;
      };
    }
  }
  var Ov = "___zrEVENTSAVED", El = [];
  function z_(r, t, e, n, i) {
    return kl(El, t, n, i, !0) && kl(r, e, El[0], El[1]);
  }
  function kl(r, t, e, n, i) {
    if (t.getBoundingClientRect && z.domSupported && !Bv(t)) {
      var a = t[Ov] || (t[Ov] = {}), o = G_(t, a), s = H_(o, a, i);
      if (s)
        return s(r, e, n), !0;
    }
    return !1;
  }
  function G_(r, t) {
    var e = t.markers;
    if (e)
      return e;
    e = t.markers = [];
    for (var n = ["left", "right"], i = ["top", "bottom"], a = 0; a < 4; a++) {
      var o = document.createElement("div"), s = o.style, l = a % 2, u = (a >> 1) % 2;
      s.cssText = ["position: absolute", "visibility: hidden", "padding: 0", "margin: 0", "border-width: 0", "user-select: none", "width:0", "height:0", n[l] + ":0", i[u] + ":0", n[1 - l] + ":auto", i[1 - u] + ":auto", ""].join("!important;"), r.appendChild(o), e.push(o);
    }
    return e;
  }
  function H_(r, t, e) {
    for (var n = e ? "invTrans" : "trans", i = t[n], a = t.srcCoords, o = [], s = [], l = !0, u = 0; u < 4; u++) {
      var f = r[u].getBoundingClientRect(), h = 2 * u, c = f.left, v = f.top;
      o.push(c, v), l = l && a && c === a[h] && v === a[h + 1], s.push(r[u].offsetLeft, r[u].offsetTop);
    }
    return l && i ? i : (t.srcCoords = o, t[n] = e ? kv(s, o) : kv(o, s));
  }
  function Bv(r) {
    return r.nodeName.toUpperCase() === "CANVAS";
  }
  var V_ = /([&<>"'])/g, W_ = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  function pe(r) {
    return r == null ? "" : (r + "").replace(V_, function(t, e) {
      return W_[e];
    });
  }
  var U_ = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ol = [], Y_ = z.browser.firefox && +z.browser.version.split(".")[0] < 39;
  function Bl(r, t, e, n) {
    return e = e || {}, n ? Nv(r, t, e) : Y_ && t.layerX != null && t.layerX !== t.offsetX ? (e.zrX = t.layerX, e.zrY = t.layerY) : t.offsetX != null ? (e.zrX = t.offsetX, e.zrY = t.offsetY) : Nv(r, t, e), e;
  }
  function Nv(r, t, e) {
    if (z.domSupported && r.getBoundingClientRect) {
      var n = t.clientX, i = t.clientY;
      if (Bv(r)) {
        var a = r.getBoundingClientRect();
        e.zrX = n - a.left, e.zrY = i - a.top;
        return;
      } else if (kl(Ol, r, n, i)) {
        e.zrX = Ol[0], e.zrY = Ol[1];
        return;
      }
    }
    e.zrX = e.zrY = 0;
  }
  function Nl(r) {
    return r || window.event;
  }
  function Te(r, t, e) {
    if (t = Nl(t), t.zrX != null)
      return t;
    var n = t.type, i = n && n.indexOf("touch") >= 0;
    if (i) {
      var o = n !== "touchend" ? t.targetTouches[0] : t.changedTouches[0];
      o && Bl(r, o, t, e);
    } else {
      Bl(r, t, t, e);
      var a = X_(t);
      t.zrDelta = a ? a / 120 : -(t.detail || 0) / 3;
    }
    var s = t.button;
    return t.which == null && s !== void 0 && U_.test(t.type) && (t.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), t;
  }
  function X_(r) {
    var t = r.wheelDelta;
    if (t)
      return t;
    var e = r.deltaX, n = r.deltaY;
    if (e == null || n == null)
      return t;
    var i = Math.abs(n !== 0 ? n : e), a = n > 0 ? -1 : n < 0 ? 1 : e > 0 ? -1 : 1;
    return 3 * i * a;
  }
  function q_(r, t, e, n) {
    r.addEventListener(t, e, n);
  }
  function Z_(r, t, e, n) {
    r.removeEventListener(t, e, n);
  }
  var Fv = function(r) {
    r.preventDefault(), r.stopPropagation(), r.cancelBubble = !0;
  }, $_ = function() {
    function r() {
      this._track = [];
    }
    return r.prototype.recognize = function(t, e, n) {
      return this._doTrack(t, e, n), this._recognize(t);
    }, r.prototype.clear = function() {
      return this._track.length = 0, this;
    }, r.prototype._doTrack = function(t, e, n) {
      var i = t.touches;
      if (i) {
        for (var a = {
          points: [],
          touches: [],
          target: e,
          event: t
        }, o = 0, s = i.length; o < s; o++) {
          var l = i[o], u = Bl(n, l, {});
          a.points.push([u.zrX, u.zrY]), a.touches.push(l);
        }
        this._track.push(a);
      }
    }, r.prototype._recognize = function(t) {
      for (var e in Fl)
        if (Fl.hasOwnProperty(e)) {
          var n = Fl[e](this._track, t);
          if (n)
            return n;
        }
    }, r;
  }();
  function zv(r) {
    var t = r[1][0] - r[0][0], e = r[1][1] - r[0][1];
    return Math.sqrt(t * t + e * e);
  }
  function K_(r) {
    return [(r[0][0] + r[1][0]) / 2, (r[0][1] + r[1][1]) / 2];
  }
  var Fl = {
    pinch: function(r, t) {
      var e = r.length;
      if (e) {
        var n = (r[e - 1] || {}).points, i = (r[e - 2] || {}).points || n;
        if (i && i.length > 1 && n && n.length > 1) {
          var a = zv(n) / zv(i);
          !isFinite(a) && (a = 1), t.pinchScale = a;
          var o = K_(n);
          return t.pinchX = o[0], t.pinchY = o[1], {
            type: "pinch",
            target: r[0].target,
            event: t
          };
        }
      }
    }
  };
  function un() {
    return [1, 0, 0, 1, 0, 0];
  }
  function Ni(r) {
    return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 1, r[4] = 0, r[5] = 0, r;
  }
  function zl(r, t) {
    return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4], r[5] = t[5], r;
  }
  function Ir(r, t, e) {
    var n = t[0] * e[0] + t[2] * e[1], i = t[1] * e[0] + t[3] * e[1], a = t[0] * e[2] + t[2] * e[3], o = t[1] * e[2] + t[3] * e[3], s = t[0] * e[4] + t[2] * e[5] + t[4], l = t[1] * e[4] + t[3] * e[5] + t[5];
    return r[0] = n, r[1] = i, r[2] = a, r[3] = o, r[4] = s, r[5] = l, r;
  }
  function uo(r, t, e) {
    return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4] + e[0], r[5] = t[5] + e[1], r;
  }
  function fo(r, t, e) {
    var n = t[0], i = t[2], a = t[4], o = t[1], s = t[3], l = t[5], u = Math.sin(e), f = Math.cos(e);
    return r[0] = n * f + o * u, r[1] = -n * u + o * f, r[2] = i * f + s * u, r[3] = -i * u + f * s, r[4] = f * a + u * l, r[5] = f * l - u * a, r;
  }
  function Gv(r, t, e) {
    var n = e[0], i = e[1];
    return r[0] = t[0] * n, r[1] = t[1] * i, r[2] = t[2] * n, r[3] = t[3] * i, r[4] = t[4] * n, r[5] = t[5] * i, r;
  }
  function ti(r, t) {
    var e = t[0], n = t[2], i = t[4], a = t[1], o = t[3], s = t[5], l = e * o - a * n;
    return l ? (l = 1 / l, r[0] = o * l, r[1] = -a * l, r[2] = -n * l, r[3] = e * l, r[4] = (n * s - o * i) * l, r[5] = (a * i - e * s) * l, r) : null;
  }
  function Q_(r) {
    var t = un();
    return zl(t, r), t;
  }
  var j_ = (Object.freeze || Object)({
    create: un,
    identity: Ni,
    copy: zl,
    mul: Ir,
    translate: uo,
    rotate: fo,
    scale: Gv,
    invert: ti,
    clone: Q_
  }), q = function() {
    function r(t, e) {
      this.x = t || 0, this.y = e || 0;
    }
    return r.prototype.copy = function(t) {
      return this.x = t.x, this.y = t.y, this;
    }, r.prototype.clone = function() {
      return new r(this.x, this.y);
    }, r.prototype.set = function(t, e) {
      return this.x = t, this.y = e, this;
    }, r.prototype.equal = function(t) {
      return t.x === this.x && t.y === this.y;
    }, r.prototype.add = function(t) {
      return this.x += t.x, this.y += t.y, this;
    }, r.prototype.scale = function(t) {
      this.x *= t, this.y *= t;
    }, r.prototype.scaleAndAdd = function(t, e) {
      this.x += t.x * e, this.y += t.y * e;
    }, r.prototype.sub = function(t) {
      return this.x -= t.x, this.y -= t.y, this;
    }, r.prototype.dot = function(t) {
      return this.x * t.x + this.y * t.y;
    }, r.prototype.len = function() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }, r.prototype.lenSquare = function() {
      return this.x * this.x + this.y * this.y;
    }, r.prototype.normalize = function() {
      var t = this.len();
      return this.x /= t, this.y /= t, this;
    }, r.prototype.distance = function(t) {
      var e = this.x - t.x, n = this.y - t.y;
      return Math.sqrt(e * e + n * n);
    }, r.prototype.distanceSquare = function(t) {
      var e = this.x - t.x, n = this.y - t.y;
      return e * e + n * n;
    }, r.prototype.negate = function() {
      return this.x = -this.x, this.y = -this.y, this;
    }, r.prototype.transform = function(t) {
      if (t) {
        var e = this.x, n = this.y;
        return this.x = t[0] * e + t[2] * n + t[4], this.y = t[1] * e + t[3] * n + t[5], this;
      }
    }, r.prototype.toArray = function(t) {
      return t[0] = this.x, t[1] = this.y, t;
    }, r.prototype.fromArray = function(t) {
      this.x = t[0], this.y = t[1];
    }, r.set = function(t, e, n) {
      t.x = e, t.y = n;
    }, r.copy = function(t, e) {
      t.x = e.x, t.y = e.y;
    }, r.len = function(t) {
      return Math.sqrt(t.x * t.x + t.y * t.y);
    }, r.lenSquare = function(t) {
      return t.x * t.x + t.y * t.y;
    }, r.dot = function(t, e) {
      return t.x * e.x + t.y * e.y;
    }, r.add = function(t, e, n) {
      t.x = e.x + n.x, t.y = e.y + n.y;
    }, r.sub = function(t, e, n) {
      t.x = e.x - n.x, t.y = e.y - n.y;
    }, r.scale = function(t, e, n) {
      t.x = e.x * n, t.y = e.y * n;
    }, r.scaleAndAdd = function(t, e, n, i) {
      t.x = e.x + n.x * i, t.y = e.y + n.y * i;
    }, r.lerp = function(t, e, n, i) {
      var a = 1 - i;
      t.x = a * e.x + i * n.x, t.y = a * e.y + i * n.y;
    }, r;
  }(), ho = Math.min, vo = Math.max, fn = new q(), hn = new q(), vn = new q(), cn = new q(), Fi = new q(), zi = new q(), it = function() {
    function r(t, e, n, i) {
      n < 0 && (t = t + n, n = -n), i < 0 && (e = e + i, i = -i), this.x = t, this.y = e, this.width = n, this.height = i;
    }
    return r.prototype.union = function(t) {
      var e = ho(t.x, this.x), n = ho(t.y, this.y);
      isFinite(this.x) && isFinite(this.width) ? this.width = vo(t.x + t.width, this.x + this.width) - e : this.width = t.width, isFinite(this.y) && isFinite(this.height) ? this.height = vo(t.y + t.height, this.y + this.height) - n : this.height = t.height, this.x = e, this.y = n;
    }, r.prototype.applyTransform = function(t) {
      r.applyTransform(this, this, t);
    }, r.prototype.calculateTransform = function(t) {
      var e = this, n = t.width / e.width, i = t.height / e.height, a = un();
      return uo(a, a, [-e.x, -e.y]), Gv(a, a, [n, i]), uo(a, a, [t.x, t.y]), a;
    }, r.prototype.intersect = function(t, e) {
      if (!t)
        return !1;
      t instanceof r || (t = r.create(t));
      var n = this, i = n.x, a = n.x + n.width, o = n.y, s = n.y + n.height, l = t.x, u = t.x + t.width, f = t.y, h = t.y + t.height, c = !(a < l || u < i || s < f || h < o);
      if (e) {
        var v = 1 / 0, d = 0, g = Math.abs(a - l), p = Math.abs(u - i), y = Math.abs(s - f), m = Math.abs(h - o), _ = Math.min(g, p), S = Math.min(y, m);
        a < l || u < i ? _ > d && (d = _, g < p ? q.set(zi, -g, 0) : q.set(zi, p, 0)) : _ < v && (v = _, g < p ? q.set(Fi, g, 0) : q.set(Fi, -p, 0)), s < f || h < o ? S > d && (d = S, y < m ? q.set(zi, 0, -y) : q.set(zi, 0, m)) : _ < v && (v = _, y < m ? q.set(Fi, 0, y) : q.set(Fi, 0, -m));
      }
      return e && q.copy(e, c ? Fi : zi), c;
    }, r.prototype.contain = function(t, e) {
      var n = this;
      return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height;
    }, r.prototype.clone = function() {
      return new r(this.x, this.y, this.width, this.height);
    }, r.prototype.copy = function(t) {
      r.copy(this, t);
    }, r.prototype.plain = function() {
      return {
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height
      };
    }, r.prototype.isFinite = function() {
      return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height);
    }, r.prototype.isZero = function() {
      return this.width === 0 || this.height === 0;
    }, r.create = function(t) {
      return new r(t.x, t.y, t.width, t.height);
    }, r.copy = function(t, e) {
      t.x = e.x, t.y = e.y, t.width = e.width, t.height = e.height;
    }, r.applyTransform = function(t, e, n) {
      if (!n) {
        t !== e && r.copy(t, e);
        return;
      }
      if (n[1] < 1e-5 && n[1] > -1e-5 && n[2] < 1e-5 && n[2] > -1e-5) {
        var i = n[0], a = n[3], o = n[4], s = n[5];
        t.x = e.x * i + o, t.y = e.y * a + s, t.width = e.width * i, t.height = e.height * a, t.width < 0 && (t.x += t.width, t.width = -t.width), t.height < 0 && (t.y += t.height, t.height = -t.height);
        return;
      }
      fn.x = vn.x = e.x, fn.y = cn.y = e.y, hn.x = cn.x = e.x + e.width, hn.y = vn.y = e.y + e.height, fn.transform(n), cn.transform(n), hn.transform(n), vn.transform(n), t.x = ho(fn.x, hn.x, vn.x, cn.x), t.y = ho(fn.y, hn.y, vn.y, cn.y);
      var l = vo(fn.x, hn.x, vn.x, cn.x), u = vo(fn.y, hn.y, vn.y, cn.y);
      t.width = l - t.x, t.height = u - t.y;
    }, r;
  }(), Hv = "silent";
  function J_(r, t, e) {
    return {
      type: r,
      event: e,
      target: t.target,
      topTarget: t.topTarget,
      cancelBubble: !1,
      offsetX: e.zrX,
      offsetY: e.zrY,
      gestureEvent: e.gestureEvent,
      pinchX: e.pinchX,
      pinchY: e.pinchY,
      pinchScale: e.pinchScale,
      wheelDelta: e.zrDelta,
      zrByTouch: e.zrByTouch,
      which: e.which,
      stop: t1
    };
  }
  function t1() {
    Fv(this.event);
  }
  var e1 = function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.handler = null, e;
    }
    return t.prototype.dispose = function() {
    }, t.prototype.setCursor = function() {
    }, t;
  }(je), Gi = function() {
    function r(t, e) {
      this.x = t, this.y = e;
    }
    return r;
  }(), r1 = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"], Gl = new it(0, 0, 0, 0), Vv = function(r) {
    k(t, r);
    function t(e, n, i, a, o) {
      var s = r.call(this) || this;
      return s._hovered = new Gi(0, 0), s.storage = e, s.painter = n, s.painterRoot = a, s._pointerSize = o, i = i || new e1(), s.proxy = null, s.setHandlerProxy(i), s._draggingMgr = new N_(s), s;
    }
    return t.prototype.setHandlerProxy = function(e) {
      this.proxy && this.proxy.dispose(), e && (M(r1, function(n) {
        e.on && e.on(n, this[n], this);
      }, this), e.handler = this), this.proxy = e;
    }, t.prototype.mousemove = function(e) {
      var n = e.zrX, i = e.zrY, a = Uv(this, n, i), o = this._hovered, s = o.target;
      s && !s.__zr && (o = this.findHover(o.x, o.y), s = o.target);
      var l = this._hovered = a ? new Gi(n, i) : this.findHover(n, i), u = l.target, f = this.proxy;
      f.setCursor && f.setCursor(u ? u.cursor : "default"), s && u !== s && this.dispatchToElement(o, "mouseout", e), this.dispatchToElement(l, "mousemove", e), u && u !== s && this.dispatchToElement(l, "mouseover", e);
    }, t.prototype.mouseout = function(e) {
      var n = e.zrEventControl;
      n !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", e), n !== "no_globalout" && this.trigger("globalout", {
        type: "globalout",
        event: e
      });
    }, t.prototype.resize = function() {
      this._hovered = new Gi(0, 0);
    }, t.prototype.dispatch = function(e, n) {
      var i = this[e];
      i && i.call(this, n);
    }, t.prototype.dispose = function() {
      this.proxy.dispose(), this.storage = null, this.proxy = null, this.painter = null;
    }, t.prototype.setCursorStyle = function(e) {
      var n = this.proxy;
      n.setCursor && n.setCursor(e);
    }, t.prototype.dispatchToElement = function(e, n, i) {
      e = e || {};
      var a = e.target;
      if (!(a && a.silent)) {
        for (var o = "on" + n, s = J_(n, e, i); a && (a[o] && (s.cancelBubble = !!a[o].call(a, s)), a.trigger(n, s), a = a.__hostTarget ? a.__hostTarget : a.parent, !s.cancelBubble); )
          ;
        s.cancelBubble || (this.trigger(n, s), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function(l) {
          typeof l[o] == "function" && l[o].call(l, s), l.trigger && l.trigger(n, s);
        }));
      }
    }, t.prototype.findHover = function(e, n, i) {
      var a = this.storage.getDisplayList(), o = new Gi(e, n);
      if (Wv(a, o, e, n, i), this._pointerSize && !o.target) {
        for (var s = [], l = this._pointerSize, u = l / 2, f = new it(e - u, n - u, l, l), h = a.length - 1; h >= 0; h--) {
          var c = a[h];
          c !== i && !c.ignore && !c.ignoreCoarsePointer && (!c.parent || !c.parent.ignoreCoarsePointer) && (Gl.copy(c.getBoundingRect()), c.transform && Gl.applyTransform(c.transform), Gl.intersect(f) && s.push(c));
        }
        if (s.length)
          for (var v = 4, d = Math.PI / 12, g = Math.PI * 2, p = 0; p < u; p += v)
            for (var y = 0; y < g; y += d) {
              var m = e + p * Math.cos(y), _ = n + p * Math.sin(y);
              if (Wv(s, o, m, _, i), o.target)
                return o;
            }
      }
      return o;
    }, t.prototype.processGesture = function(e, n) {
      this._gestureMgr || (this._gestureMgr = new $_());
      var i = this._gestureMgr;
      n === "start" && i.clear();
      var a = i.recognize(e, this.findHover(e.zrX, e.zrY, null).target, this.proxy.dom);
      if (n === "end" && i.clear(), a) {
        var o = a.type;
        e.gestureEvent = o;
        var s = new Gi();
        s.target = a.target, this.dispatchToElement(s, o, a.event);
      }
    }, t;
  }(je);
  M(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(r) {
    Vv.prototype[r] = function(t) {
      var e = t.zrX, n = t.zrY, i = Uv(this, e, n), a, o;
      if ((r !== "mouseup" || !i) && (a = this.findHover(e, n), o = a.target), r === "mousedown")
        this._downEl = o, this._downPoint = [t.zrX, t.zrY], this._upEl = o;
      else if (r === "mouseup")
        this._upEl = o;
      else if (r === "click") {
        if (this._downEl !== this._upEl || !this._downPoint || so(this._downPoint, [t.zrX, t.zrY]) > 4)
          return;
        this._downPoint = null;
      }
      this.dispatchToElement(a, r, t);
    };
  });
  function n1(r, t, e) {
    if (r[r.rectHover ? "rectContain" : "contain"](t, e)) {
      for (var n = r, i = void 0, a = !1; n; ) {
        if (n.ignoreClip && (a = !0), !a) {
          var o = n.getClipPath();
          if (o && !o.contain(t, e))
            return !1;
          n.silent && (i = !0);
        }
        var s = n.__hostTarget;
        n = s || n.parent;
      }
      return i ? Hv : !0;
    }
    return !1;
  }
  function Wv(r, t, e, n, i) {
    for (var a = r.length - 1; a >= 0; a--) {
      var o = r[a], s = void 0;
      if (o !== i && !o.ignore && (s = n1(o, e, n)) && (!t.topTarget && (t.topTarget = o), s !== Hv)) {
        t.target = o;
        break;
      }
    }
  }
  function Uv(r, t, e) {
    var n = r.painter;
    return t < 0 || t > n.getWidth() || e < 0 || e > n.getHeight();
  }
  var Yv = 32, Hi = 7;
  function i1(r) {
    for (var t = 0; r >= Yv; )
      t |= r & 1, r >>= 1;
    return r + t;
  }
  function Xv(r, t, e, n) {
    var i = t + 1;
    if (i === e)
      return 1;
    if (n(r[i++], r[t]) < 0) {
      for (; i < e && n(r[i], r[i - 1]) < 0; )
        i++;
      a1(r, t, i);
    } else
      for (; i < e && n(r[i], r[i - 1]) >= 0; )
        i++;
    return i - t;
  }
  function a1(r, t, e) {
    for (e--; t < e; ) {
      var n = r[t];
      r[t++] = r[e], r[e--] = n;
    }
  }
  function qv(r, t, e, n, i) {
    for (n === t && n++; n < e; n++) {
      for (var a = r[n], o = t, s = n, l; o < s; )
        l = o + s >>> 1, i(a, r[l]) < 0 ? s = l : o = l + 1;
      var u = n - o;
      switch (u) {
        case 3:
          r[o + 3] = r[o + 2];
        case 2:
          r[o + 2] = r[o + 1];
        case 1:
          r[o + 1] = r[o];
          break;
        default:
          for (; u > 0; )
            r[o + u] = r[o + u - 1], u--;
      }
      r[o] = a;
    }
  }
  function Hl(r, t, e, n, i, a) {
    var o = 0, s = 0, l = 1;
    if (a(r, t[e + i]) > 0) {
      for (s = n - i; l < s && a(r, t[e + i + l]) > 0; )
        o = l, l = (l << 1) + 1, l <= 0 && (l = s);
      l > s && (l = s), o += i, l += i;
    } else {
      for (s = i + 1; l < s && a(r, t[e + i - l]) <= 0; )
        o = l, l = (l << 1) + 1, l <= 0 && (l = s);
      l > s && (l = s);
      var u = o;
      o = i - l, l = i - u;
    }
    for (o++; o < l; ) {
      var f = o + (l - o >>> 1);
      a(r, t[e + f]) > 0 ? o = f + 1 : l = f;
    }
    return l;
  }
  function Vl(r, t, e, n, i, a) {
    var o = 0, s = 0, l = 1;
    if (a(r, t[e + i]) < 0) {
      for (s = i + 1; l < s && a(r, t[e + i - l]) < 0; )
        o = l, l = (l << 1) + 1, l <= 0 && (l = s);
      l > s && (l = s);
      var u = o;
      o = i - l, l = i - u;
    } else {
      for (s = n - i; l < s && a(r, t[e + i + l]) >= 0; )
        o = l, l = (l << 1) + 1, l <= 0 && (l = s);
      l > s && (l = s), o += i, l += i;
    }
    for (o++; o < l; ) {
      var f = o + (l - o >>> 1);
      a(r, t[e + f]) < 0 ? l = f : o = f + 1;
    }
    return l;
  }
  function o1(r, t) {
    var e = Hi, n, i, a = 0, o = [];
    n = [], i = [];
    function s(v, d) {
      n[a] = v, i[a] = d, a += 1;
    }
    function l() {
      for (; a > 1; ) {
        var v = a - 2;
        if (v >= 1 && i[v - 1] <= i[v] + i[v + 1] || v >= 2 && i[v - 2] <= i[v] + i[v - 1])
          i[v - 1] < i[v + 1] && v--;
        else if (i[v] > i[v + 1])
          break;
        f(v);
      }
    }
    function u() {
      for (; a > 1; ) {
        var v = a - 2;
        v > 0 && i[v - 1] < i[v + 1] && v--, f(v);
      }
    }
    function f(v) {
      var d = n[v], g = i[v], p = n[v + 1], y = i[v + 1];
      i[v] = g + y, v === a - 3 && (n[v + 1] = n[v + 2], i[v + 1] = i[v + 2]), a--;
      var m = Vl(r[p], r, d, g, 0, t);
      d += m, g -= m, g !== 0 && (y = Hl(r[d + g - 1], r, p, y, y - 1, t), y !== 0 && (g <= y ? h(d, g, p, y) : c(d, g, p, y)));
    }
    function h(v, d, g, p) {
      var y = 0;
      for (y = 0; y < d; y++)
        o[y] = r[v + y];
      var m = 0, _ = g, S = v;
      if (r[S++] = r[_++], --p === 0) {
        for (y = 0; y < d; y++)
          r[S + y] = o[m + y];
        return;
      }
      if (d === 1) {
        for (y = 0; y < p; y++)
          r[S + y] = r[_ + y];
        r[S + p] = o[m];
        return;
      }
      for (var b = e, w, x, T; ; ) {
        w = 0, x = 0, T = !1;
        do
          if (t(r[_], o[m]) < 0) {
            if (r[S++] = r[_++], x++, w = 0, --p === 0) {
              T = !0;
              break;
            }
          } else if (r[S++] = o[m++], w++, x = 0, --d === 1) {
            T = !0;
            break;
          }
        while ((w | x) < b);
        if (T)
          break;
        do {
          if (w = Vl(r[_], o, m, d, 0, t), w !== 0) {
            for (y = 0; y < w; y++)
              r[S + y] = o[m + y];
            if (S += w, m += w, d -= w, d <= 1) {
              T = !0;
              break;
            }
          }
          if (r[S++] = r[_++], --p === 0) {
            T = !0;
            break;
          }
          if (x = Hl(o[m], r, _, p, 0, t), x !== 0) {
            for (y = 0; y < x; y++)
              r[S + y] = r[_ + y];
            if (S += x, _ += x, p -= x, p === 0) {
              T = !0;
              break;
            }
          }
          if (r[S++] = o[m++], --d === 1) {
            T = !0;
            break;
          }
          b--;
        } while (w >= Hi || x >= Hi);
        if (T)
          break;
        b < 0 && (b = 0), b += 2;
      }
      if (e = b, e < 1 && (e = 1), d === 1) {
        for (y = 0; y < p; y++)
          r[S + y] = r[_ + y];
        r[S + p] = o[m];
      } else {
        if (d === 0)
          throw new Error();
        for (y = 0; y < d; y++)
          r[S + y] = o[m + y];
      }
    }
    function c(v, d, g, p) {
      var y = 0;
      for (y = 0; y < p; y++)
        o[y] = r[g + y];
      var m = v + d - 1, _ = p - 1, S = g + p - 1, b = 0, w = 0;
      if (r[S--] = r[m--], --d === 0) {
        for (b = S - (p - 1), y = 0; y < p; y++)
          r[b + y] = o[y];
        return;
      }
      if (p === 1) {
        for (S -= d, m -= d, w = S + 1, b = m + 1, y = d - 1; y >= 0; y--)
          r[w + y] = r[b + y];
        r[S] = o[_];
        return;
      }
      for (var x = e; ; ) {
        var T = 0, D = 0, A = !1;
        do
          if (t(o[_], r[m]) < 0) {
            if (r[S--] = r[m--], T++, D = 0, --d === 0) {
              A = !0;
              break;
            }
          } else if (r[S--] = o[_--], D++, T = 0, --p === 1) {
            A = !0;
            break;
          }
        while ((T | D) < x);
        if (A)
          break;
        do {
          if (T = d - Vl(o[_], r, v, d, d - 1, t), T !== 0) {
            for (S -= T, m -= T, d -= T, w = S + 1, b = m + 1, y = T - 1; y >= 0; y--)
              r[w + y] = r[b + y];
            if (d === 0) {
              A = !0;
              break;
            }
          }
          if (r[S--] = o[_--], --p === 1) {
            A = !0;
            break;
          }
          if (D = p - Hl(r[m], o, 0, p, p - 1, t), D !== 0) {
            for (S -= D, _ -= D, p -= D, w = S + 1, b = _ + 1, y = 0; y < D; y++)
              r[w + y] = o[b + y];
            if (p <= 1) {
              A = !0;
              break;
            }
          }
          if (r[S--] = r[m--], --d === 0) {
            A = !0;
            break;
          }
          x--;
        } while (T >= Hi || D >= Hi);
        if (A)
          break;
        x < 0 && (x = 0), x += 2;
      }
      if (e = x, e < 1 && (e = 1), p === 1) {
        for (S -= d, m -= d, w = S + 1, b = m + 1, y = d - 1; y >= 0; y--)
          r[w + y] = r[b + y];
        r[S] = o[_];
      } else {
        if (p === 0)
          throw new Error();
        for (b = S - (p - 1), y = 0; y < p; y++)
          r[b + y] = o[y];
      }
    }
    return {
      mergeRuns: l,
      forceMergeRuns: u,
      pushRun: s
    };
  }
  function co(r, t, e, n) {
    e || (e = 0), n || (n = r.length);
    var i = n - e;
    if (!(i < 2)) {
      var a = 0;
      if (i < Yv) {
        a = Xv(r, e, n, t), qv(r, e, n, e + a, t);
        return;
      }
      var o = o1(r, t), s = i1(i);
      do {
        if (a = Xv(r, e, n, t), a < s) {
          var l = i;
          l > s && (l = s), qv(r, e, e + l, e + a, t), a = l;
        }
        o.pushRun(e, a), o.mergeRuns(), i -= a, e += a;
      } while (i !== 0);
      o.forceMergeRuns();
    }
  }
  var ge = 1, Vi = 2, ei = 4, Zv = !1;
  function Wl() {
    Zv || (Zv = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"));
  }
  function $v(r, t) {
    return r.zlevel === t.zlevel ? r.z === t.z ? r.z2 - t.z2 : r.z - t.z : r.zlevel - t.zlevel;
  }
  var s1 = function() {
    function r() {
      this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = $v;
    }
    return r.prototype.traverse = function(t, e) {
      for (var n = 0; n < this._roots.length; n++)
        this._roots[n].traverse(t, e);
    }, r.prototype.getDisplayList = function(t, e) {
      e = e || !1;
      var n = this._displayList;
      return (t || !n.length) && this.updateDisplayList(e), n;
    }, r.prototype.updateDisplayList = function(t) {
      this._displayListLen = 0;
      for (var e = this._roots, n = this._displayList, i = 0, a = e.length; i < a; i++)
        this._updateAndAddDisplayable(e[i], null, t);
      n.length = this._displayListLen, co(n, $v);
    }, r.prototype._updateAndAddDisplayable = function(t, e, n) {
      if (!(t.ignore && !n)) {
        t.beforeUpdate(), t.update(), t.afterUpdate();
        var i = t.getClipPath();
        if (t.ignoreClip)
          e = null;
        else if (i) {
          e ? e = e.slice() : e = [];
          for (var a = i, o = t; a; )
            a.parent = o, a.updateTransform(), e.push(a), o = a, a = a.getClipPath();
        }
        if (t.childrenRef) {
          for (var s = t.childrenRef(), l = 0; l < s.length; l++) {
            var u = s[l];
            t.__dirty && (u.__dirty |= ge), this._updateAndAddDisplayable(u, e, n);
          }
          t.__dirty = 0;
        } else {
          var f = t;
          e && e.length ? f.__clipPaths = e : f.__clipPaths && f.__clipPaths.length > 0 && (f.__clipPaths = []), isNaN(f.z) && (Wl(), f.z = 0), isNaN(f.z2) && (Wl(), f.z2 = 0), isNaN(f.zlevel) && (Wl(), f.zlevel = 0), this._displayList[this._displayListLen++] = f;
        }
        var h = t.getDecalElement && t.getDecalElement();
        h && this._updateAndAddDisplayable(h, e, n);
        var c = t.getTextGuideLine();
        c && this._updateAndAddDisplayable(c, e, n);
        var v = t.getTextContent();
        v && this._updateAndAddDisplayable(v, e, n);
      }
    }, r.prototype.addRoot = function(t) {
      t.__zr && t.__zr.storage === this || this._roots.push(t);
    }, r.prototype.delRoot = function(t) {
      if (t instanceof Array) {
        for (var e = 0, n = t.length; e < n; e++)
          this.delRoot(t[e]);
        return;
      }
      var i = ut(this._roots, t);
      i >= 0 && this._roots.splice(i, 1);
    }, r.prototype.delAllRoots = function() {
      this._roots = [], this._displayList = [], this._displayListLen = 0;
    }, r.prototype.getRoots = function() {
      return this._roots;
    }, r.prototype.dispose = function() {
      this._displayList = null, this._roots = null;
    }, r;
  }(), Kv;
  Kv = z.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(r) {
    return setTimeout(r, 16);
  };
  var Ul = Kv, Wi = {
    linear: function(r) {
      return r;
    },
    quadraticIn: function(r) {
      return r * r;
    },
    quadraticOut: function(r) {
      return r * (2 - r);
    },
    quadraticInOut: function(r) {
      return (r *= 2) < 1 ? 0.5 * r * r : -0.5 * (--r * (r - 2) - 1);
    },
    cubicIn: function(r) {
      return r * r * r;
    },
    cubicOut: function(r) {
      return --r * r * r + 1;
    },
    cubicInOut: function(r) {
      return (r *= 2) < 1 ? 0.5 * r * r * r : 0.5 * ((r -= 2) * r * r + 2);
    },
    quarticIn: function(r) {
      return r * r * r * r;
    },
    quarticOut: function(r) {
      return 1 - --r * r * r * r;
    },
    quarticInOut: function(r) {
      return (r *= 2) < 1 ? 0.5 * r * r * r * r : -0.5 * ((r -= 2) * r * r * r - 2);
    },
    quinticIn: function(r) {
      return r * r * r * r * r;
    },
    quinticOut: function(r) {
      return --r * r * r * r * r + 1;
    },
    quinticInOut: function(r) {
      return (r *= 2) < 1 ? 0.5 * r * r * r * r * r : 0.5 * ((r -= 2) * r * r * r * r + 2);
    },
    sinusoidalIn: function(r) {
      return 1 - Math.cos(r * Math.PI / 2);
    },
    sinusoidalOut: function(r) {
      return Math.sin(r * Math.PI / 2);
    },
    sinusoidalInOut: function(r) {
      return 0.5 * (1 - Math.cos(Math.PI * r));
    },
    exponentialIn: function(r) {
      return r === 0 ? 0 : Math.pow(1024, r - 1);
    },
    exponentialOut: function(r) {
      return r === 1 ? 1 : 1 - Math.pow(2, -10 * r);
    },
    exponentialInOut: function(r) {
      return r === 0 ? 0 : r === 1 ? 1 : (r *= 2) < 1 ? 0.5 * Math.pow(1024, r - 1) : 0.5 * (-Math.pow(2, -10 * (r - 1)) + 2);
    },
    circularIn: function(r) {
      return 1 - Math.sqrt(1 - r * r);
    },
    circularOut: function(r) {
      return Math.sqrt(1 - --r * r);
    },
    circularInOut: function(r) {
      return (r *= 2) < 1 ? -0.5 * (Math.sqrt(1 - r * r) - 1) : 0.5 * (Math.sqrt(1 - (r -= 2) * r) + 1);
    },
    elasticIn: function(r) {
      var t, e = 0.1, n = 0.4;
      return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = n / 4) : t = n * Math.asin(1 / e) / (2 * Math.PI), -(e * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / n)));
    },
    elasticOut: function(r) {
      var t, e = 0.1, n = 0.4;
      return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = n / 4) : t = n * Math.asin(1 / e) / (2 * Math.PI), e * Math.pow(2, -10 * r) * Math.sin((r - t) * (2 * Math.PI) / n) + 1);
    },
    elasticInOut: function(r) {
      var t, e = 0.1, n = 0.4;
      return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = n / 4) : t = n * Math.asin(1 / e) / (2 * Math.PI), (r *= 2) < 1 ? -0.5 * (e * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / n)) : e * Math.pow(2, -10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / n) * 0.5 + 1);
    },
    backIn: function(r) {
      var t = 1.70158;
      return r * r * ((t + 1) * r - t);
    },
    backOut: function(r) {
      var t = 1.70158;
      return --r * r * ((t + 1) * r + t) + 1;
    },
    backInOut: function(r) {
      var t = 2.5949095;
      return (r *= 2) < 1 ? 0.5 * (r * r * ((t + 1) * r - t)) : 0.5 * ((r -= 2) * r * ((t + 1) * r + t) + 2);
    },
    bounceIn: function(r) {
      return 1 - Wi.bounceOut(1 - r);
    },
    bounceOut: function(r) {
      return r < 1 / 2.75 ? 7.5625 * r * r : r < 2 / 2.75 ? 7.5625 * (r -= 1.5 / 2.75) * r + 0.75 : r < 2.5 / 2.75 ? 7.5625 * (r -= 2.25 / 2.75) * r + 0.9375 : 7.5625 * (r -= 2.625 / 2.75) * r + 0.984375;
    },
    bounceInOut: function(r) {
      return r < 0.5 ? Wi.bounceIn(r * 2) * 0.5 : Wi.bounceOut(r * 2 - 1) * 0.5 + 0.5;
    }
  }, po = Math.pow, Rr = Math.sqrt, go = 1e-8, Qv = 1e-4, jv = Rr(3), yo = 1 / 3, Je = sn(), Ce = sn(), ri = sn();
  function Er(r) {
    return r > -go && r < go;
  }
  function Jv(r) {
    return r > go || r < -go;
  }
  function Et(r, t, e, n, i) {
    var a = 1 - i;
    return a * a * (a * r + 3 * i * t) + i * i * (i * n + 3 * a * e);
  }
  function tc(r, t, e, n, i) {
    var a = 1 - i;
    return 3 * (((t - r) * a + 2 * (e - t) * i) * a + (n - e) * i * i);
  }
  function mo(r, t, e, n, i, a) {
    var o = n + 3 * (t - e) - r, s = 3 * (e - t * 2 + r), l = 3 * (t - r), u = r - i, f = s * s - 3 * o * l, h = s * l - 9 * o * u, c = l * l - 3 * s * u, v = 0;
    if (Er(f) && Er(h))
      if (Er(s))
        a[0] = 0;
      else {
        var d = -l / s;
        d >= 0 && d <= 1 && (a[v++] = d);
      }
    else {
      var g = h * h - 4 * f * c;
      if (Er(g)) {
        var p = h / f, d = -s / o + p, y = -p / 2;
        d >= 0 && d <= 1 && (a[v++] = d), y >= 0 && y <= 1 && (a[v++] = y);
      } else if (g > 0) {
        var m = Rr(g), _ = f * s + 1.5 * o * (-h + m), S = f * s + 1.5 * o * (-h - m);
        _ < 0 ? _ = -po(-_, yo) : _ = po(_, yo), S < 0 ? S = -po(-S, yo) : S = po(S, yo);
        var d = (-s - (_ + S)) / (3 * o);
        d >= 0 && d <= 1 && (a[v++] = d);
      } else {
        var b = (2 * f * s - 3 * o * h) / (2 * Rr(f * f * f)), w = Math.acos(b) / 3, x = Rr(f), T = Math.cos(w), d = (-s - 2 * x * T) / (3 * o), y = (-s + x * (T + jv * Math.sin(w))) / (3 * o), D = (-s + x * (T - jv * Math.sin(w))) / (3 * o);
        d >= 0 && d <= 1 && (a[v++] = d), y >= 0 && y <= 1 && (a[v++] = y), D >= 0 && D <= 1 && (a[v++] = D);
      }
    }
    return v;
  }
  function ec(r, t, e, n, i) {
    var a = 6 * e - 12 * t + 6 * r, o = 9 * t + 3 * n - 3 * r - 9 * e, s = 3 * t - 3 * r, l = 0;
    if (Er(o)) {
      if (Jv(a)) {
        var u = -s / a;
        u >= 0 && u <= 1 && (i[l++] = u);
      }
    } else {
      var f = a * a - 4 * o * s;
      if (Er(f))
        i[0] = -a / (2 * o);
      else if (f > 0) {
        var h = Rr(f), u = (-a + h) / (2 * o), c = (-a - h) / (2 * o);
        u >= 0 && u <= 1 && (i[l++] = u), c >= 0 && c <= 1 && (i[l++] = c);
      }
    }
    return l;
  }
  function _o(r, t, e, n, i, a) {
    var o = (t - r) * i + r, s = (e - t) * i + t, l = (n - e) * i + e, u = (s - o) * i + o, f = (l - s) * i + s, h = (f - u) * i + u;
    a[0] = r, a[1] = o, a[2] = u, a[3] = h, a[4] = h, a[5] = f, a[6] = l, a[7] = n;
  }
  function rc(r, t, e, n, i, a, o, s, l, u, f) {
    var h, c = 5e-3, v = 1 / 0, d, g, p, y;
    Je[0] = l, Je[1] = u;
    for (var m = 0; m < 1; m += 0.05)
      Ce[0] = Et(r, e, i, o, m), Ce[1] = Et(t, n, a, s, m), p = ln(Je, Ce), p < v && (h = m, v = p);
    v = 1 / 0;
    for (var _ = 0; _ < 32 && !(c < Qv); _++)
      d = h - c, g = h + c, Ce[0] = Et(r, e, i, o, d), Ce[1] = Et(t, n, a, s, d), p = ln(Ce, Je), d >= 0 && p < v ? (h = d, v = p) : (ri[0] = Et(r, e, i, o, g), ri[1] = Et(t, n, a, s, g), y = ln(ri, Je), g <= 1 && y < v ? (h = g, v = y) : c *= 0.5);
    return f && (f[0] = Et(r, e, i, o, h), f[1] = Et(t, n, a, s, h)), Rr(v);
  }
  function l1(r, t, e, n, i, a, o, s, l) {
    for (var u = r, f = t, h = 0, c = 1 / l, v = 1; v <= l; v++) {
      var d = v * c, g = Et(r, e, i, o, d), p = Et(t, n, a, s, d), y = g - u, m = p - f;
      h += Math.sqrt(y * y + m * m), u = g, f = p;
    }
    return h;
  }
  function Ht(r, t, e, n) {
    var i = 1 - n;
    return i * (i * r + 2 * n * t) + n * n * e;
  }
  function nc(r, t, e, n) {
    return 2 * ((1 - n) * (t - r) + n * (e - t));
  }
  function u1(r, t, e, n, i) {
    var a = r - 2 * t + e, o = 2 * (t - r), s = r - n, l = 0;
    if (Er(a)) {
      if (Jv(o)) {
        var u = -s / o;
        u >= 0 && u <= 1 && (i[l++] = u);
      }
    } else {
      var f = o * o - 4 * a * s;
      if (Er(f)) {
        var u = -o / (2 * a);
        u >= 0 && u <= 1 && (i[l++] = u);
      } else if (f > 0) {
        var h = Rr(f), u = (-o + h) / (2 * a), c = (-o - h) / (2 * a);
        u >= 0 && u <= 1 && (i[l++] = u), c >= 0 && c <= 1 && (i[l++] = c);
      }
    }
    return l;
  }
  function ic(r, t, e) {
    var n = r + e - 2 * t;
    return n === 0 ? 0.5 : (r - t) / n;
  }
  function So(r, t, e, n, i) {
    var a = (t - r) * n + r, o = (e - t) * n + t, s = (o - a) * n + a;
    i[0] = r, i[1] = a, i[2] = s, i[3] = s, i[4] = o, i[5] = e;
  }
  function ac(r, t, e, n, i, a, o, s, l) {
    var u, f = 5e-3, h = 1 / 0;
    Je[0] = o, Je[1] = s;
    for (var c = 0; c < 1; c += 0.05) {
      Ce[0] = Ht(r, e, i, c), Ce[1] = Ht(t, n, a, c);
      var v = ln(Je, Ce);
      v < h && (u = c, h = v);
    }
    h = 1 / 0;
    for (var d = 0; d < 32 && !(f < Qv); d++) {
      var g = u - f, p = u + f;
      Ce[0] = Ht(r, e, i, g), Ce[1] = Ht(t, n, a, g);
      var v = ln(Ce, Je);
      if (g >= 0 && v < h)
        u = g, h = v;
      else {
        ri[0] = Ht(r, e, i, p), ri[1] = Ht(t, n, a, p);
        var y = ln(ri, Je);
        p <= 1 && y < h ? (u = p, h = y) : f *= 0.5;
      }
    }
    return l && (l[0] = Ht(r, e, i, u), l[1] = Ht(t, n, a, u)), Rr(h);
  }
  function f1(r, t, e, n, i, a, o) {
    for (var s = r, l = t, u = 0, f = 1 / o, h = 1; h <= o; h++) {
      var c = h * f, v = Ht(r, e, i, c), d = Ht(t, n, a, c), g = v - s, p = d - l;
      u += Math.sqrt(g * g + p * p), s = v, l = d;
    }
    return u;
  }
  var h1 = /cubic-bezier\(([0-9,\.e ]+)\)/;
  function oc(r) {
    var t = r && h1.exec(r);
    if (t) {
      var e = t[1].split(","), n = +Ge(e[0]), i = +Ge(e[1]), a = +Ge(e[2]), o = +Ge(e[3]);
      if (isNaN(n + i + a + o))
        return;
      var s = [];
      return function(l) {
        return l <= 0 ? 0 : l >= 1 ? 1 : mo(0, n, a, 1, l, s) && Et(0, i, o, 1, s[0]);
      };
    }
  }
  var v1 = function() {
    function r(t) {
      this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = t.life || 1e3, this._delay = t.delay || 0, this.loop = t.loop || !1, this.onframe = t.onframe || Qt, this.ondestroy = t.ondestroy || Qt, this.onrestart = t.onrestart || Qt, t.easing && this.setEasing(t.easing);
    }
    return r.prototype.step = function(t, e) {
      if (this._inited || (this._startTime = t + this._delay, this._inited = !0), this._paused) {
        this._pausedTime += e;
        return;
      }
      var n = this._life, i = t - this._startTime - this._pausedTime, a = i / n;
      a < 0 && (a = 0), a = Math.min(a, 1);
      var o = this.easingFunc, s = o ? o(a) : a;
      if (this.onframe(s), a === 1)
        if (this.loop) {
          var l = i % n;
          this._startTime = t - l, this._pausedTime = 0, this.onrestart();
        } else
          return !0;
      return !1;
    }, r.prototype.pause = function() {
      this._paused = !0;
    }, r.prototype.resume = function() {
      this._paused = !1;
    }, r.prototype.setEasing = function(t) {
      this.easing = t, this.easingFunc = X(t) ? t : Wi[t] || oc(t);
    }, r;
  }(), sc = function() {
    function r(t) {
      this.value = t;
    }
    return r;
  }(), c1 = function() {
    function r() {
      this._len = 0;
    }
    return r.prototype.insert = function(t) {
      var e = new sc(t);
      return this.insertEntry(e), e;
    }, r.prototype.insertEntry = function(t) {
      this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++;
    }, r.prototype.remove = function(t) {
      var e = t.prev, n = t.next;
      e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, this._len--;
    }, r.prototype.len = function() {
      return this._len;
    }, r.prototype.clear = function() {
      this.head = this.tail = null, this._len = 0;
    }, r;
  }(), Ui = function() {
    function r(t) {
      this._list = new c1(), this._maxSize = 10, this._map = {}, this._maxSize = t;
    }
    return r.prototype.put = function(t, e) {
      var n = this._list, i = this._map, a = null;
      if (i[t] == null) {
        var o = n.len(), s = this._lastRemovedEntry;
        if (o >= this._maxSize && o > 0) {
          var l = n.head;
          n.remove(l), delete i[l.key], a = l.value, this._lastRemovedEntry = l;
        }
        s ? s.value = e : s = new sc(e), s.key = t, n.insertEntry(s), i[t] = s;
      }
      return a;
    }, r.prototype.get = function(t) {
      var e = this._map[t], n = this._list;
      if (e != null)
        return e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value;
    }, r.prototype.clear = function() {
      this._list.clear(), this._map = {};
    }, r.prototype.len = function() {
      return this._list.len();
    }, r;
  }(), lc = {
    transparent: [0, 0, 0, 0],
    aliceblue: [240, 248, 255, 1],
    antiquewhite: [250, 235, 215, 1],
    aqua: [0, 255, 255, 1],
    aquamarine: [127, 255, 212, 1],
    azure: [240, 255, 255, 1],
    beige: [245, 245, 220, 1],
    bisque: [255, 228, 196, 1],
    black: [0, 0, 0, 1],
    blanchedalmond: [255, 235, 205, 1],
    blue: [0, 0, 255, 1],
    blueviolet: [138, 43, 226, 1],
    brown: [165, 42, 42, 1],
    burlywood: [222, 184, 135, 1],
    cadetblue: [95, 158, 160, 1],
    chartreuse: [127, 255, 0, 1],
    chocolate: [210, 105, 30, 1],
    coral: [255, 127, 80, 1],
    cornflowerblue: [100, 149, 237, 1],
    cornsilk: [255, 248, 220, 1],
    crimson: [220, 20, 60, 1],
    cyan: [0, 255, 255, 1],
    darkblue: [0, 0, 139, 1],
    darkcyan: [0, 139, 139, 1],
    darkgoldenrod: [184, 134, 11, 1],
    darkgray: [169, 169, 169, 1],
    darkgreen: [0, 100, 0, 1],
    darkgrey: [169, 169, 169, 1],
    darkkhaki: [189, 183, 107, 1],
    darkmagenta: [139, 0, 139, 1],
    darkolivegreen: [85, 107, 47, 1],
    darkorange: [255, 140, 0, 1],
    darkorchid: [153, 50, 204, 1],
    darkred: [139, 0, 0, 1],
    darksalmon: [233, 150, 122, 1],
    darkseagreen: [143, 188, 143, 1],
    darkslateblue: [72, 61, 139, 1],
    darkslategray: [47, 79, 79, 1],
    darkslategrey: [47, 79, 79, 1],
    darkturquoise: [0, 206, 209, 1],
    darkviolet: [148, 0, 211, 1],
    deeppink: [255, 20, 147, 1],
    deepskyblue: [0, 191, 255, 1],
    dimgray: [105, 105, 105, 1],
    dimgrey: [105, 105, 105, 1],
    dodgerblue: [30, 144, 255, 1],
    firebrick: [178, 34, 34, 1],
    floralwhite: [255, 250, 240, 1],
    forestgreen: [34, 139, 34, 1],
    fuchsia: [255, 0, 255, 1],
    gainsboro: [220, 220, 220, 1],
    ghostwhite: [248, 248, 255, 1],
    gold: [255, 215, 0, 1],
    goldenrod: [218, 165, 32, 1],
    gray: [128, 128, 128, 1],
    green: [0, 128, 0, 1],
    greenyellow: [173, 255, 47, 1],
    grey: [128, 128, 128, 1],
    honeydew: [240, 255, 240, 1],
    hotpink: [255, 105, 180, 1],
    indianred: [205, 92, 92, 1],
    indigo: [75, 0, 130, 1],
    ivory: [255, 255, 240, 1],
    khaki: [240, 230, 140, 1],
    lavender: [230, 230, 250, 1],
    lavenderblush: [255, 240, 245, 1],
    lawngreen: [124, 252, 0, 1],
    lemonchiffon: [255, 250, 205, 1],
    lightblue: [173, 216, 230, 1],
    lightcoral: [240, 128, 128, 1],
    lightcyan: [224, 255, 255, 1],
    lightgoldenrodyellow: [250, 250, 210, 1],
    lightgray: [211, 211, 211, 1],
    lightgreen: [144, 238, 144, 1],
    lightgrey: [211, 211, 211, 1],
    lightpink: [255, 182, 193, 1],
    lightsalmon: [255, 160, 122, 1],
    lightseagreen: [32, 178, 170, 1],
    lightskyblue: [135, 206, 250, 1],
    lightslategray: [119, 136, 153, 1],
    lightslategrey: [119, 136, 153, 1],
    lightsteelblue: [176, 196, 222, 1],
    lightyellow: [255, 255, 224, 1],
    lime: [0, 255, 0, 1],
    limegreen: [50, 205, 50, 1],
    linen: [250, 240, 230, 1],
    magenta: [255, 0, 255, 1],
    maroon: [128, 0, 0, 1],
    mediumaquamarine: [102, 205, 170, 1],
    mediumblue: [0, 0, 205, 1],
    mediumorchid: [186, 85, 211, 1],
    mediumpurple: [147, 112, 219, 1],
    mediumseagreen: [60, 179, 113, 1],
    mediumslateblue: [123, 104, 238, 1],
    mediumspringgreen: [0, 250, 154, 1],
    mediumturquoise: [72, 209, 204, 1],
    mediumvioletred: [199, 21, 133, 1],
    midnightblue: [25, 25, 112, 1],
    mintcream: [245, 255, 250, 1],
    mistyrose: [255, 228, 225, 1],
    moccasin: [255, 228, 181, 1],
    navajowhite: [255, 222, 173, 1],
    navy: [0, 0, 128, 1],
    oldlace: [253, 245, 230, 1],
    olive: [128, 128, 0, 1],
    olivedrab: [107, 142, 35, 1],
    orange: [255, 165, 0, 1],
    orangered: [255, 69, 0, 1],
    orchid: [218, 112, 214, 1],
    palegoldenrod: [238, 232, 170, 1],
    palegreen: [152, 251, 152, 1],
    paleturquoise: [175, 238, 238, 1],
    palevioletred: [219, 112, 147, 1],
    papayawhip: [255, 239, 213, 1],
    peachpuff: [255, 218, 185, 1],
    peru: [205, 133, 63, 1],
    pink: [255, 192, 203, 1],
    plum: [221, 160, 221, 1],
    powderblue: [176, 224, 230, 1],
    purple: [128, 0, 128, 1],
    red: [255, 0, 0, 1],
    rosybrown: [188, 143, 143, 1],
    royalblue: [65, 105, 225, 1],
    saddlebrown: [139, 69, 19, 1],
    salmon: [250, 128, 114, 1],
    sandybrown: [244, 164, 96, 1],
    seagreen: [46, 139, 87, 1],
    seashell: [255, 245, 238, 1],
    sienna: [160, 82, 45, 1],
    silver: [192, 192, 192, 1],
    skyblue: [135, 206, 235, 1],
    slateblue: [106, 90, 205, 1],
    slategray: [112, 128, 144, 1],
    slategrey: [112, 128, 144, 1],
    snow: [255, 250, 250, 1],
    springgreen: [0, 255, 127, 1],
    steelblue: [70, 130, 180, 1],
    tan: [210, 180, 140, 1],
    teal: [0, 128, 128, 1],
    thistle: [216, 191, 216, 1],
    tomato: [255, 99, 71, 1],
    turquoise: [64, 224, 208, 1],
    violet: [238, 130, 238, 1],
    wheat: [245, 222, 179, 1],
    white: [255, 255, 255, 1],
    whitesmoke: [245, 245, 245, 1],
    yellow: [255, 255, 0, 1],
    yellowgreen: [154, 205, 50, 1]
  };
  function He(r) {
    return r = Math.round(r), r < 0 ? 0 : r > 255 ? 255 : r;
  }
  function d1(r) {
    return r = Math.round(r), r < 0 ? 0 : r > 360 ? 360 : r;
  }
  function Yi(r) {
    return r < 0 ? 0 : r > 1 ? 1 : r;
  }
  function Yl(r) {
    var t = r;
    return t.length && t.charAt(t.length - 1) === "%" ? He(parseFloat(t) / 100 * 255) : He(parseInt(t, 10));
  }
  function dn(r) {
    var t = r;
    return t.length && t.charAt(t.length - 1) === "%" ? Yi(parseFloat(t) / 100) : Yi(parseFloat(t));
  }
  function Xl(r, t, e) {
    return e < 0 ? e += 1 : e > 1 && (e -= 1), e * 6 < 1 ? r + (t - r) * e * 6 : e * 2 < 1 ? t : e * 3 < 2 ? r + (t - r) * (2 / 3 - e) * 6 : r;
  }
  function kr(r, t, e) {
    return r + (t - r) * e;
  }
  function De(r, t, e, n, i) {
    return r[0] = t, r[1] = e, r[2] = n, r[3] = i, r;
  }
  function ql(r, t) {
    return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r;
  }
  var uc = new Ui(20), wo = null;
  function ni(r, t) {
    wo && ql(wo, t), wo = uc.put(r, wo || t.slice());
  }
  function ye(r, t) {
    if (r) {
      t = t || [];
      var e = uc.get(r);
      if (e)
        return ql(t, e);
      r = r + "";
      var n = r.replace(/ /g, "").toLowerCase();
      if (n in lc)
        return ql(t, lc[n]), ni(r, t), t;
      var i = n.length;
      if (n.charAt(0) === "#") {
        if (i === 4 || i === 5) {
          var a = parseInt(n.slice(1, 4), 16);
          if (!(a >= 0 && a <= 4095)) {
            De(t, 0, 0, 0, 1);
            return;
          }
          return De(t, (a & 3840) >> 4 | (a & 3840) >> 8, a & 240 | (a & 240) >> 4, a & 15 | (a & 15) << 4, i === 5 ? parseInt(n.slice(4), 16) / 15 : 1), ni(r, t), t;
        } else if (i === 7 || i === 9) {
          var a = parseInt(n.slice(1, 7), 16);
          if (!(a >= 0 && a <= 16777215)) {
            De(t, 0, 0, 0, 1);
            return;
          }
          return De(t, (a & 16711680) >> 16, (a & 65280) >> 8, a & 255, i === 9 ? parseInt(n.slice(7), 16) / 255 : 1), ni(r, t), t;
        }
        return;
      }
      var o = n.indexOf("("), s = n.indexOf(")");
      if (o !== -1 && s + 1 === i) {
        var l = n.substr(0, o), u = n.substr(o + 1, s - (o + 1)).split(","), f = 1;
        switch (l) {
          case "rgba":
            if (u.length !== 4)
              return u.length === 3 ? De(t, +u[0], +u[1], +u[2], 1) : De(t, 0, 0, 0, 1);
            f = dn(u.pop());
          case "rgb":
            if (u.length >= 3)
              return De(t, Yl(u[0]), Yl(u[1]), Yl(u[2]), u.length === 3 ? f : dn(u[3])), ni(r, t), t;
            De(t, 0, 0, 0, 1);
            return;
          case "hsla":
            if (u.length !== 4) {
              De(t, 0, 0, 0, 1);
              return;
            }
            return u[3] = dn(u[3]), Zl(u, t), ni(r, t), t;
          case "hsl":
            if (u.length !== 3) {
              De(t, 0, 0, 0, 1);
              return;
            }
            return Zl(u, t), ni(r, t), t;
          default:
            return;
        }
      }
      De(t, 0, 0, 0, 1);
    }
  }
  function Zl(r, t) {
    var e = (parseFloat(r[0]) % 360 + 360) % 360 / 360, n = dn(r[1]), i = dn(r[2]), a = i <= 0.5 ? i * (n + 1) : i + n - i * n, o = i * 2 - a;
    return t = t || [], De(t, He(Xl(o, a, e + 1 / 3) * 255), He(Xl(o, a, e) * 255), He(Xl(o, a, e - 1 / 3) * 255), 1), r.length === 4 && (t[3] = r[3]), t;
  }
  function p1(r) {
    if (r) {
      var t = r[0] / 255, e = r[1] / 255, n = r[2] / 255, i = Math.min(t, e, n), a = Math.max(t, e, n), o = a - i, s = (a + i) / 2, l, u;
      if (o === 0)
        l = 0, u = 0;
      else {
        s < 0.5 ? u = o / (a + i) : u = o / (2 - a - i);
        var f = ((a - t) / 6 + o / 2) / o, h = ((a - e) / 6 + o / 2) / o, c = ((a - n) / 6 + o / 2) / o;
        t === a ? l = c - h : e === a ? l = 1 / 3 + f - c : n === a && (l = 2 / 3 + h - f), l < 0 && (l += 1), l > 1 && (l -= 1);
      }
      var v = [l * 360, u, s];
      return r[3] != null && v.push(r[3]), v;
    }
  }
  function $l(r, t) {
    var e = ye(r);
    if (e) {
      for (var n = 0; n < 3; n++)
        t < 0 ? e[n] = e[n] * (1 - t) | 0 : e[n] = (255 - e[n]) * t + e[n] | 0, e[n] > 255 ? e[n] = 255 : e[n] < 0 && (e[n] = 0);
      return Or(e, e.length === 4 ? "rgba" : "rgb");
    }
  }
  function g1(r) {
    var t = ye(r);
    if (t)
      return ((1 << 24) + (t[0] << 16) + (t[1] << 8) + +t[2]).toString(16).slice(1);
  }
  function fc(r, t, e) {
    if (!(!(t && t.length) || !(r >= 0 && r <= 1))) {
      e = e || [];
      var n = r * (t.length - 1), i = Math.floor(n), a = Math.ceil(n), o = t[i], s = t[a], l = n - i;
      return e[0] = He(kr(o[0], s[0], l)), e[1] = He(kr(o[1], s[1], l)), e[2] = He(kr(o[2], s[2], l)), e[3] = Yi(kr(o[3], s[3], l)), e;
    }
  }
  var y1 = fc;
  function Kl(r, t, e) {
    if (!(!(t && t.length) || !(r >= 0 && r <= 1))) {
      var n = r * (t.length - 1), i = Math.floor(n), a = Math.ceil(n), o = ye(t[i]), s = ye(t[a]), l = n - i, u = Or([He(kr(o[0], s[0], l)), He(kr(o[1], s[1], l)), He(kr(o[2], s[2], l)), Yi(kr(o[3], s[3], l))], "rgba");
      return e ? {
        color: u,
        leftIndex: i,
        rightIndex: a,
        value: n
      } : u;
    }
  }
  var m1 = Kl;
  function _1(r, t, e, n) {
    var i = ye(r);
    if (r)
      return i = p1(i), t != null && (i[0] = d1(t)), e != null && (i[1] = dn(e)), n != null && (i[2] = dn(n)), Or(Zl(i), "rgba");
  }
  function S1(r, t) {
    var e = ye(r);
    if (e && t != null)
      return e[3] = Yi(t), Or(e, "rgba");
  }
  function Or(r, t) {
    if (!(!r || !r.length)) {
      var e = r[0] + "," + r[1] + "," + r[2];
      return (t === "rgba" || t === "hsva" || t === "hsla") && (e += "," + r[3]), t + "(" + e + ")";
    }
  }
  function Xi(r, t) {
    var e = ye(r);
    return e ? (0.299 * e[0] + 0.587 * e[1] + 0.114 * e[2]) * e[3] / 255 + (1 - e[3]) * t : 0;
  }
  function w1() {
    return Or([Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)], "rgb");
  }
  var b1 = (Object.freeze || Object)({
    parse: ye,
    lift: $l,
    toHex: g1,
    fastLerp: fc,
    fastMapToColor: y1,
    lerp: Kl,
    mapToColor: m1,
    modifyHSL: _1,
    modifyAlpha: S1,
    stringify: Or,
    lum: Xi,
    random: w1
  });
  function x1(r) {
    return r.type === "linear";
  }
  function T1(r) {
    return r.type === "radial";
  }
  (function() {
    return z.hasGlobalWindow && X(window.btoa) ? function(r) {
      return window.btoa(unescape(encodeURIComponent(r)));
    } : typeof Buffer < "u" ? function(r) {
      return Buffer.from(r).toString("base64");
    } : function(r) {
      return Dr("Base64 isn't natively supported in the current environment."), null;
    };
  })();
  var Ql = Array.prototype.slice;
  function cr(r, t, e) {
    return (t - r) * e + r;
  }
  function jl(r, t, e, n) {
    for (var i = t.length, a = 0; a < i; a++)
      r[a] = cr(t[a], e[a], n);
    return r;
  }
  function C1(r, t, e, n) {
    for (var i = t.length, a = i && t[0].length, o = 0; o < i; o++) {
      r[o] || (r[o] = []);
      for (var s = 0; s < a; s++)
        r[o][s] = cr(t[o][s], e[o][s], n);
    }
    return r;
  }
  function bo(r, t, e, n) {
    for (var i = t.length, a = 0; a < i; a++)
      r[a] = t[a] + e[a] * n;
    return r;
  }
  function hc(r, t, e, n) {
    for (var i = t.length, a = i && t[0].length, o = 0; o < i; o++) {
      r[o] || (r[o] = []);
      for (var s = 0; s < a; s++)
        r[o][s] = t[o][s] + e[o][s] * n;
    }
    return r;
  }
  function D1(r, t) {
    for (var e = r.length, n = t.length, i = e > n ? t : r, a = Math.min(e, n), o = i[a - 1] || {
      color: [0, 0, 0, 0],
      offset: 0
    }, s = a; s < Math.max(e, n); s++)
      i.push({
        offset: o.offset,
        color: o.color.slice()
      });
  }
  function M1(r, t, e) {
    var n = r, i = t;
    if (!(!n.push || !i.push)) {
      var a = n.length, o = i.length;
      if (a !== o) {
        var s = a > o;
        if (s)
          n.length = o;
        else
          for (var l = a; l < o; l++)
            n.push(e === 1 ? i[l] : Ql.call(i[l]));
      }
      for (var u = n[0] && n[0].length, l = 0; l < n.length; l++)
        if (e === 1)
          isNaN(n[l]) && (n[l] = i[l]);
        else
          for (var f = 0; f < u; f++)
            isNaN(n[l][f]) && (n[l][f] = i[l][f]);
    }
  }
  function xo(r) {
    if ($t(r)) {
      var t = r.length;
      if ($t(r[0])) {
        for (var e = [], n = 0; n < t; n++)
          e.push(Ql.call(r[n]));
        return e;
      }
      return Ql.call(r);
    }
    return r;
  }
  function To(r) {
    return r[0] = Math.floor(r[0]) || 0, r[1] = Math.floor(r[1]) || 0, r[2] = Math.floor(r[2]) || 0, r[3] = r[3] == null ? 1 : r[3], "rgba(" + r.join(",") + ")";
  }
  function A1(r) {
    return $t(r && r[0]) ? 2 : 1;
  }
  var Co = 0, Do = 1, vc = 2, qi = 3, Jl = 4, tu = 5, cc = 6;
  function dc(r) {
    return r === Jl || r === tu;
  }
  function Mo(r) {
    return r === Do || r === vc;
  }
  var Zi = [0, 0, 0, 0], L1 = function() {
    function r(t) {
      this.keyframes = [], this.discrete = !1, this._invalid = !1, this._needsSort = !1, this._lastFr = 0, this._lastFrP = 0, this.propName = t;
    }
    return r.prototype.isFinished = function() {
      return this._finished;
    }, r.prototype.setFinished = function() {
      this._finished = !0, this._additiveTrack && this._additiveTrack.setFinished();
    }, r.prototype.needsAnimate = function() {
      return this.keyframes.length >= 1;
    }, r.prototype.getAdditiveTrack = function() {
      return this._additiveTrack;
    }, r.prototype.addKeyframe = function(t, e, n) {
      this._needsSort = !0;
      var i = this.keyframes, a = i.length, o = !1, s = cc, l = e;
      if ($t(e)) {
        var u = A1(e);
        s = u, (u === 1 && !pt(e[0]) || u === 2 && !pt(e[0][0])) && (o = !0);
      } else if (pt(e) && !Qn(e))
        s = Co;
      else if (H(e))
        if (!isNaN(+e))
          s = Co;
        else {
          var f = ye(e);
          f && (l = f, s = qi);
        }
      else if (ki(e)) {
        var h = O({}, l);
        h.colorStops = V(e.colorStops, function(v) {
          return {
            offset: v.offset,
            color: ye(v.color)
          };
        }), x1(e) ? s = Jl : T1(e) && (s = tu), l = h;
      }
      a === 0 ? this.valType = s : (s !== this.valType || s === cc) && (o = !0), this.discrete = this.discrete || o;
      var c = {
        time: t,
        value: l,
        rawValue: e,
        percent: 0
      };
      return n && (c.easing = n, c.easingFunc = X(n) ? n : Wi[n] || oc(n)), i.push(c), c;
    }, r.prototype.prepare = function(t, e) {
      var n = this.keyframes;
      this._needsSort && n.sort(function(g, p) {
        return g.time - p.time;
      });
      for (var i = this.valType, a = n.length, o = n[a - 1], s = this.discrete, l = Mo(i), u = dc(i), f = 0; f < a; f++) {
        var h = n[f], c = h.value, v = o.value;
        h.percent = h.time / t, s || (l && f !== a - 1 ? M1(c, v, i) : u && D1(c.colorStops, v.colorStops));
      }
      if (!s && i !== tu && e && this.needsAnimate() && e.needsAnimate() && i === e.valType && !e._finished) {
        this._additiveTrack = e;
        for (var d = n[0].value, f = 0; f < a; f++)
          i === Co ? n[f].additiveValue = n[f].value - d : i === qi ? n[f].additiveValue = bo([], n[f].value, d, -1) : Mo(i) && (n[f].additiveValue = i === Do ? bo([], n[f].value, d, -1) : hc([], n[f].value, d, -1));
      }
    }, r.prototype.step = function(t, e) {
      if (!this._finished) {
        this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
        var n = this._additiveTrack != null, i = n ? "additiveValue" : "value", a = this.valType, o = this.keyframes, s = o.length, l = this.propName, u = a === qi, f, h = this._lastFr, c = Math.min, v, d;
        if (s === 1)
          v = d = o[0];
        else {
          if (e < 0)
            f = 0;
          else if (e < this._lastFrP) {
            var g = c(h + 1, s - 1);
            for (f = g; f >= 0 && !(o[f].percent <= e); f--)
              ;
            f = c(f, s - 2);
          } else {
            for (f = h; f < s && !(o[f].percent > e); f++)
              ;
            f = c(f - 1, s - 2);
          }
          d = o[f + 1], v = o[f];
        }
        if (v && d) {
          this._lastFr = f, this._lastFrP = e;
          var p = d.percent - v.percent, y = p === 0 ? 1 : c((e - v.percent) / p, 1);
          d.easingFunc && (y = d.easingFunc(y));
          var m = n ? this._additiveValue : u ? Zi : t[l];
          if ((Mo(a) || u) && !m && (m = this._additiveValue = []), this.discrete)
            t[l] = y < 1 ? v.rawValue : d.rawValue;
          else if (Mo(a))
            a === Do ? jl(m, v[i], d[i], y) : C1(m, v[i], d[i], y);
          else if (dc(a)) {
            var _ = v[i], S = d[i], b = a === Jl;
            t[l] = {
              type: b ? "linear" : "radial",
              x: cr(_.x, S.x, y),
              y: cr(_.y, S.y, y),
              colorStops: V(_.colorStops, function(x, T) {
                var D = S.colorStops[T];
                return {
                  offset: cr(x.offset, D.offset, y),
                  color: To(jl([], x.color, D.color, y))
                };
              }),
              global: S.global
            }, b ? (t[l].x2 = cr(_.x2, S.x2, y), t[l].y2 = cr(_.y2, S.y2, y)) : t[l].r = cr(_.r, S.r, y);
          } else if (u)
            jl(m, v[i], d[i], y), n || (t[l] = To(m));
          else {
            var w = cr(v[i], d[i], y);
            n ? this._additiveValue = w : t[l] = w;
          }
          n && this._addToTarget(t);
        }
      }
    }, r.prototype._addToTarget = function(t) {
      var e = this.valType, n = this.propName, i = this._additiveValue;
      e === Co ? t[n] = t[n] + i : e === qi ? (ye(t[n], Zi), bo(Zi, Zi, i, 1), t[n] = To(Zi)) : e === Do ? bo(t[n], t[n], i, 1) : e === vc && hc(t[n], t[n], i, 1);
    }, r;
  }(), eu = function() {
    function r(t, e, n, i) {
      if (this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = t, this._loop = e, e && i) {
        Dr("Can' use additive animation on looped animation.");
        return;
      }
      this._additiveAnimators = i, this._allowDiscrete = n;
    }
    return r.prototype.getMaxTime = function() {
      return this._maxTime;
    }, r.prototype.getDelay = function() {
      return this._delay;
    }, r.prototype.getLoop = function() {
      return this._loop;
    }, r.prototype.getTarget = function() {
      return this._target;
    }, r.prototype.changeTarget = function(t) {
      this._target = t;
    }, r.prototype.when = function(t, e, n) {
      return this.whenWithKeys(t, e, yt(e), n);
    }, r.prototype.whenWithKeys = function(t, e, n, i) {
      for (var a = this._tracks, o = 0; o < n.length; o++) {
        var s = n[o], l = a[s];
        if (!l) {
          l = a[s] = new L1(s);
          var u = void 0, f = this._getAdditiveTrack(s);
          if (f) {
            var h = f.keyframes, c = h[h.length - 1];
            u = c && c.value, f.valType === qi && u && (u = To(u));
          } else
            u = this._target[s];
          if (u == null)
            continue;
          t > 0 && l.addKeyframe(0, xo(u), i), this._trackKeys.push(s);
        }
        l.addKeyframe(t, xo(e[s]), i);
      }
      return this._maxTime = Math.max(this._maxTime, t), this;
    }, r.prototype.pause = function() {
      this._clip.pause(), this._paused = !0;
    }, r.prototype.resume = function() {
      this._clip.resume(), this._paused = !1;
    }, r.prototype.isPaused = function() {
      return !!this._paused;
    }, r.prototype.duration = function(t) {
      return this._maxTime = t, this._force = !0, this;
    }, r.prototype._doneCallback = function() {
      this._setTracksFinished(), this._clip = null;
      var t = this._doneCbs;
      if (t)
        for (var e = t.length, n = 0; n < e; n++)
          t[n].call(this);
    }, r.prototype._abortedCallback = function() {
      this._setTracksFinished();
      var t = this.animation, e = this._abortedCbs;
      if (t && t.removeClip(this._clip), this._clip = null, e)
        for (var n = 0; n < e.length; n++)
          e[n].call(this);
    }, r.prototype._setTracksFinished = function() {
      for (var t = this._tracks, e = this._trackKeys, n = 0; n < e.length; n++)
        t[e[n]].setFinished();
    }, r.prototype._getAdditiveTrack = function(t) {
      var e, n = this._additiveAnimators;
      if (n)
        for (var i = 0; i < n.length; i++) {
          var a = n[i].getTrack(t);
          a && (e = a);
        }
      return e;
    }, r.prototype.start = function(t) {
      if (!(this._started > 0)) {
        this._started = 1;
        for (var e = this, n = [], i = this._maxTime || 0, a = 0; a < this._trackKeys.length; a++) {
          var o = this._trackKeys[a], s = this._tracks[o], l = this._getAdditiveTrack(o), u = s.keyframes, f = u.length;
          if (s.prepare(i, l), s.needsAnimate())
            if (!this._allowDiscrete && s.discrete) {
              var h = u[f - 1];
              h && (e._target[s.propName] = h.rawValue), s.setFinished();
            } else
              n.push(s);
        }
        if (n.length || this._force) {
          var c = new v1({
            life: i,
            loop: this._loop,
            delay: this._delay || 0,
            onframe: function(v) {
              e._started = 2;
              var d = e._additiveAnimators;
              if (d) {
                for (var g = !1, p = 0; p < d.length; p++)
                  if (d[p]._clip) {
                    g = !0;
                    break;
                  }
                g || (e._additiveAnimators = null);
              }
              for (var p = 0; p < n.length; p++)
                n[p].step(e._target, v);
              var y = e._onframeCbs;
              if (y)
                for (var p = 0; p < y.length; p++)
                  y[p](e._target, v);
            },
            ondestroy: function() {
              e._doneCallback();
            }
          });
          this._clip = c, this.animation && this.animation.addClip(c), t && c.setEasing(t);
        } else
          this._doneCallback();
        return this;
      }
    }, r.prototype.stop = function(t) {
      if (this._clip) {
        var e = this._clip;
        t && e.onframe(1), this._abortedCallback();
      }
    }, r.prototype.delay = function(t) {
      return this._delay = t, this;
    }, r.prototype.during = function(t) {
      return t && (this._onframeCbs || (this._onframeCbs = []), this._onframeCbs.push(t)), this;
    }, r.prototype.done = function(t) {
      return t && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t)), this;
    }, r.prototype.aborted = function(t) {
      return t && (this._abortedCbs || (this._abortedCbs = []), this._abortedCbs.push(t)), this;
    }, r.prototype.getClip = function() {
      return this._clip;
    }, r.prototype.getTrack = function(t) {
      return this._tracks[t];
    }, r.prototype.getTracks = function() {
      var t = this;
      return V(this._trackKeys, function(e) {
        return t._tracks[e];
      });
    }, r.prototype.stopTracks = function(t, e) {
      if (!t.length || !this._clip)
        return !0;
      for (var n = this._tracks, i = this._trackKeys, a = 0; a < t.length; a++) {
        var o = n[t[a]];
        o && !o.isFinished() && (e ? o.step(this._target, 1) : this._started === 1 && o.step(this._target, 0), o.setFinished());
      }
      for (var s = !0, a = 0; a < i.length; a++)
        if (!n[i[a]].isFinished()) {
          s = !1;
          break;
        }
      return s && this._abortedCallback(), s;
    }, r.prototype.saveTo = function(t, e, n) {
      if (t) {
        e = e || this._trackKeys;
        for (var i = 0; i < e.length; i++) {
          var a = e[i], o = this._tracks[a];
          if (!(!o || o.isFinished())) {
            var s = o.keyframes, l = s[n ? 0 : s.length - 1];
            l && (t[a] = xo(l.rawValue));
          }
        }
      }
    }, r.prototype.__changeFinalValue = function(t, e) {
      e = e || yt(t);
      for (var n = 0; n < e.length; n++) {
        var i = e[n], a = this._tracks[i];
        if (a) {
          var o = a.keyframes;
          if (o.length > 1) {
            var s = o.pop();
            a.addKeyframe(s.time, t[i]), a.prepare(this._maxTime, a.getAdditiveTrack());
          }
        }
      }
    }, r;
  }();
  function ii() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
  var P1 = function(r) {
    k(t, r);
    function t(e) {
      var n = r.call(this) || this;
      return n._running = !1, n._time = 0, n._pausedTime = 0, n._pauseStart = 0, n._paused = !1, e = e || {}, n.stage = e.stage || {}, n;
    }
    return t.prototype.addClip = function(e) {
      e.animation && this.removeClip(e), this._head ? (this._tail.next = e, e.prev = this._tail, e.next = null, this._tail = e) : this._head = this._tail = e, e.animation = this;
    }, t.prototype.addAnimator = function(e) {
      e.animation = this;
      var n = e.getClip();
      n && this.addClip(n);
    }, t.prototype.removeClip = function(e) {
      if (e.animation) {
        var n = e.prev, i = e.next;
        n ? n.next = i : this._head = i, i ? i.prev = n : this._tail = n, e.next = e.prev = e.animation = null;
      }
    }, t.prototype.removeAnimator = function(e) {
      var n = e.getClip();
      n && this.removeClip(n), e.animation = null;
    }, t.prototype.update = function(e) {
      for (var n = ii() - this._pausedTime, i = n - this._time, a = this._head; a; ) {
        var o = a.next, s = a.step(n, i);
        s && (a.ondestroy(), this.removeClip(a)), a = o;
      }
      this._time = n, e || (this.trigger("frame", i), this.stage.update && this.stage.update());
    }, t.prototype._startLoop = function() {
      var e = this;
      this._running = !0;
      function n() {
        e._running && (Ul(n), !e._paused && e.update());
      }
      Ul(n);
    }, t.prototype.start = function() {
      this._running || (this._time = ii(), this._pausedTime = 0, this._startLoop());
    }, t.prototype.stop = function() {
      this._running = !1;
    }, t.prototype.pause = function() {
      this._paused || (this._pauseStart = ii(), this._paused = !0);
    }, t.prototype.resume = function() {
      this._paused && (this._pausedTime += ii() - this._pauseStart, this._paused = !1);
    }, t.prototype.clear = function() {
      for (var e = this._head; e; ) {
        var n = e.next;
        e.prev = e.next = e.animation = null, e = n;
      }
      this._head = this._tail = null;
    }, t.prototype.isFinished = function() {
      return this._head == null;
    }, t.prototype.animate = function(e, n) {
      n = n || {}, this.start();
      var i = new eu(e, n.loop);
      return this.addAnimator(i), i;
    }, t;
  }(je), I1 = 300, ru = z.domSupported, nu = function() {
    var r = ["click", "dblclick", "mousewheel", "wheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"], t = ["touchstart", "touchend", "touchmove"], e = {
      pointerdown: 1,
      pointerup: 1,
      pointermove: 1,
      pointerout: 1
    }, n = V(r, function(i) {
      var a = i.replace("mouse", "pointer");
      return e.hasOwnProperty(a) ? a : i;
    });
    return {
      mouse: r,
      touch: t,
      pointer: n
    };
  }(), pc = {
    mouse: ["mousemove", "mouseup"],
    pointer: ["pointermove", "pointerup"]
  }, gc = !1;
  function iu(r) {
    var t = r.pointerType;
    return t === "pen" || t === "touch";
  }
  function R1(r) {
    r.touching = !0, r.touchTimer != null && (clearTimeout(r.touchTimer), r.touchTimer = null), r.touchTimer = setTimeout(function() {
      r.touching = !1, r.touchTimer = null;
    }, 700);
  }
  function au(r) {
    r && (r.zrByTouch = !0);
  }
  function E1(r, t) {
    return Te(r.dom, new k1(r, t), !0);
  }
  function yc(r, t) {
    for (var e = t, n = !1; e && e.nodeType !== 9 && !(n = e.domBelongToZr || e !== t && e === r.painterRoot); )
      e = e.parentNode;
    return n;
  }
  var k1 = function() {
    function r(t, e) {
      this.stopPropagation = Qt, this.stopImmediatePropagation = Qt, this.preventDefault = Qt, this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, this.clientX = e.clientX, this.clientY = e.clientY;
    }
    return r;
  }(), Ve = {
    mousedown: function(r) {
      r = Te(this.dom, r), this.__mayPointerCapture = [r.zrX, r.zrY], this.trigger("mousedown", r);
    },
    mousemove: function(r) {
      r = Te(this.dom, r);
      var t = this.__mayPointerCapture;
      t && (r.zrX !== t[0] || r.zrY !== t[1]) && this.__togglePointerCapture(!0), this.trigger("mousemove", r);
    },
    mouseup: function(r) {
      r = Te(this.dom, r), this.__togglePointerCapture(!1), this.trigger("mouseup", r);
    },
    mouseout: function(r) {
      r = Te(this.dom, r);
      var t = r.toElement || r.relatedTarget;
      yc(this, t) || (this.__pointerCapturing && (r.zrEventControl = "no_globalout"), this.trigger("mouseout", r));
    },
    wheel: function(r) {
      gc = !0, r = Te(this.dom, r), this.trigger("mousewheel", r);
    },
    mousewheel: function(r) {
      gc || (r = Te(this.dom, r), this.trigger("mousewheel", r));
    },
    touchstart: function(r) {
      r = Te(this.dom, r), au(r), this.__lastTouchMoment = /* @__PURE__ */ new Date(), this.handler.processGesture(r, "start"), Ve.mousemove.call(this, r), Ve.mousedown.call(this, r);
    },
    touchmove: function(r) {
      r = Te(this.dom, r), au(r), this.handler.processGesture(r, "change"), Ve.mousemove.call(this, r);
    },
    touchend: function(r) {
      r = Te(this.dom, r), au(r), this.handler.processGesture(r, "end"), Ve.mouseup.call(this, r), +/* @__PURE__ */ new Date() - +this.__lastTouchMoment < I1 && Ve.click.call(this, r);
    },
    pointerdown: function(r) {
      Ve.mousedown.call(this, r);
    },
    pointermove: function(r) {
      iu(r) || Ve.mousemove.call(this, r);
    },
    pointerup: function(r) {
      Ve.mouseup.call(this, r);
    },
    pointerout: function(r) {
      iu(r) || Ve.mouseout.call(this, r);
    }
  };
  M(["click", "dblclick", "contextmenu"], function(r) {
    Ve[r] = function(t) {
      t = Te(this.dom, t), this.trigger(r, t);
    };
  });
  var ou = {
    pointermove: function(r) {
      iu(r) || ou.mousemove.call(this, r);
    },
    pointerup: function(r) {
      ou.mouseup.call(this, r);
    },
    mousemove: function(r) {
      this.trigger("mousemove", r);
    },
    mouseup: function(r) {
      var t = this.__pointerCapturing;
      this.__togglePointerCapture(!1), this.trigger("mouseup", r), t && (r.zrEventControl = "only_globalout", this.trigger("mouseout", r));
    }
  };
  function O1(r, t) {
    var e = t.domHandlers;
    z.pointerEventsSupported ? M(nu.pointer, function(n) {
      Ao(t, n, function(i) {
        e[n].call(r, i);
      });
    }) : (z.touchEventsSupported && M(nu.touch, function(n) {
      Ao(t, n, function(i) {
        e[n].call(r, i), R1(t);
      });
    }), M(nu.mouse, function(n) {
      Ao(t, n, function(i) {
        i = Nl(i), t.touching || e[n].call(r, i);
      });
    }));
  }
  function B1(r, t) {
    z.pointerEventsSupported ? M(pc.pointer, e) : z.touchEventsSupported || M(pc.mouse, e);
    function e(n) {
      function i(a) {
        a = Nl(a), yc(r, a.target) || (a = E1(r, a), t.domHandlers[n].call(r, a));
      }
      Ao(t, n, i, {
        capture: !0
      });
    }
  }
  function Ao(r, t, e, n) {
    r.mounted[t] = e, r.listenerOpts[t] = n, q_(r.domTarget, t, e, n);
  }
  function su(r) {
    var t = r.mounted;
    for (var e in t)
      t.hasOwnProperty(e) && Z_(r.domTarget, e, t[e], r.listenerOpts[e]);
    r.mounted = {};
  }
  var mc = function() {
    function r(t, e) {
      this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = t, this.domHandlers = e;
    }
    return r;
  }(), N1 = function(r) {
    k(t, r);
    function t(e, n) {
      var i = r.call(this) || this;
      return i.__pointerCapturing = !1, i.dom = e, i.painterRoot = n, i._localHandlerScope = new mc(e, Ve), ru && (i._globalHandlerScope = new mc(document, ou)), O1(i, i._localHandlerScope), i;
    }
    return t.prototype.dispose = function() {
      su(this._localHandlerScope), ru && su(this._globalHandlerScope);
    }, t.prototype.setCursor = function(e) {
      this.dom.style && (this.dom.style.cursor = e || "default");
    }, t.prototype.__togglePointerCapture = function(e) {
      if (this.__mayPointerCapture = null, ru && +this.__pointerCapturing ^ +e) {
        this.__pointerCapturing = e;
        var n = this._globalHandlerScope;
        e ? B1(this, n) : su(n);
      }
    }, t;
  }(je), _c = 1;
  z.hasGlobalWindow && (_c = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
  var Lo = _c, lu = 0.4, uu = "#333", fu = "#ccc", F1 = "#eee", Sc = Ni, wc = 5e-5;
  function pn(r) {
    return r > wc || r < -wc;
  }
  var gn = [], ai = [], hu = un(), vu = Math.abs, Po = function() {
    function r() {
    }
    return r.prototype.getLocalTransform = function(t) {
      return r.getLocalTransform(this, t);
    }, r.prototype.setPosition = function(t) {
      this.x = t[0], this.y = t[1];
    }, r.prototype.setScale = function(t) {
      this.scaleX = t[0], this.scaleY = t[1];
    }, r.prototype.setSkew = function(t) {
      this.skewX = t[0], this.skewY = t[1];
    }, r.prototype.setOrigin = function(t) {
      this.originX = t[0], this.originY = t[1];
    }, r.prototype.needLocalTransform = function() {
      return pn(this.rotation) || pn(this.x) || pn(this.y) || pn(this.scaleX - 1) || pn(this.scaleY - 1) || pn(this.skewX) || pn(this.skewY);
    }, r.prototype.updateTransform = function() {
      var t = this.parent && this.parent.transform, e = this.needLocalTransform(), n = this.transform;
      if (!(e || t)) {
        n && Sc(n);
        return;
      }
      n = n || un(), e ? this.getLocalTransform(n) : Sc(n), t && (e ? Ir(n, t, n) : zl(n, t)), this.transform = n, this._resolveGlobalScaleRatio(n);
    }, r.prototype._resolveGlobalScaleRatio = function(t) {
      var e = this.globalScaleRatio;
      if (e != null && e !== 1) {
        this.getGlobalScale(gn);
        var n = gn[0] < 0 ? -1 : 1, i = gn[1] < 0 ? -1 : 1, a = ((gn[0] - n) * e + n) / gn[0] || 0, o = ((gn[1] - i) * e + i) / gn[1] || 0;
        t[0] *= a, t[1] *= a, t[2] *= o, t[3] *= o;
      }
      this.invTransform = this.invTransform || un(), ti(this.invTransform, t);
    }, r.prototype.getComputedTransform = function() {
      for (var t = this, e = []; t; )
        e.push(t), t = t.parent;
      for (; t = e.pop(); )
        t.updateTransform();
      return this.transform;
    }, r.prototype.setLocalTransform = function(t) {
      if (t) {
        var e = t[0] * t[0] + t[1] * t[1], n = t[2] * t[2] + t[3] * t[3], i = Math.atan2(t[1], t[0]), a = Math.PI / 2 + i - Math.atan2(t[3], t[2]);
        n = Math.sqrt(n) * Math.cos(a), e = Math.sqrt(e), this.skewX = a, this.skewY = 0, this.rotation = -i, this.x = +t[4], this.y = +t[5], this.scaleX = e, this.scaleY = n, this.originX = 0, this.originY = 0;
      }
    }, r.prototype.decomposeTransform = function() {
      if (this.transform) {
        var t = this.parent, e = this.transform;
        t && t.transform && (Ir(ai, t.invTransform, e), e = ai);
        var n = this.originX, i = this.originY;
        (n || i) && (hu[4] = n, hu[5] = i, Ir(ai, e, hu), ai[4] -= n, ai[5] -= i, e = ai), this.setLocalTransform(e);
      }
    }, r.prototype.getGlobalScale = function(t) {
      var e = this.transform;
      return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t);
    }, r.prototype.transformCoordToLocal = function(t, e) {
      var n = [t, e], i = this.invTransform;
      return i && jt(n, n, i), n;
    }, r.prototype.transformCoordToGlobal = function(t, e) {
      var n = [t, e], i = this.transform;
      return i && jt(n, n, i), n;
    }, r.prototype.getLineScale = function() {
      var t = this.transform;
      return t && vu(t[0] - 1) > 1e-10 && vu(t[3] - 1) > 1e-10 ? Math.sqrt(vu(t[0] * t[3] - t[2] * t[1])) : 1;
    }, r.prototype.copyTransform = function(t) {
      z1(this, t);
    }, r.getLocalTransform = function(t, e) {
      e = e || [];
      var n = t.originX || 0, i = t.originY || 0, a = t.scaleX, o = t.scaleY, s = t.anchorX, l = t.anchorY, u = t.rotation || 0, f = t.x, h = t.y, c = t.skewX ? Math.tan(t.skewX) : 0, v = t.skewY ? Math.tan(-t.skewY) : 0;
      if (n || i || s || l) {
        var d = n + s, g = i + l;
        e[4] = -d * a - c * g * o, e[5] = -g * o - v * d * a;
      } else
        e[4] = e[5] = 0;
      return e[0] = a, e[3] = o, e[1] = v * a, e[2] = c * o, u && fo(e, e, u), e[4] += n + f, e[5] += i + h, e;
    }, r.initDefaultProps = function() {
      var t = r.prototype;
      t.scaleX = t.scaleY = t.globalScaleRatio = 1, t.x = t.y = t.originX = t.originY = t.skewX = t.skewY = t.rotation = t.anchorX = t.anchorY = 0;
    }(), r;
  }(), $i = ["x", "y", "originX", "originY", "anchorX", "anchorY", "rotation", "scaleX", "scaleY", "skewX", "skewY"];
  function z1(r, t) {
    for (var e = 0; e < $i.length; e++) {
      var n = $i[e];
      r[n] = t[n];
    }
  }
  var bc = {};
  function me(r, t) {
    t = t || ze;
    var e = bc[t];
    e || (e = bc[t] = new Ui(500));
    var n = e.get(r);
    return n == null && (n = Zt.measureText(r, t).width, e.put(r, n)), n;
  }
  function xc(r, t, e, n) {
    var i = me(r, t), a = du(t), o = Ki(0, i, e), s = oi(0, a, n), l = new it(o, s, i, a);
    return l;
  }
  function cu(r, t, e, n) {
    var i = ((r || "") + "").split(`
`), a = i.length;
    if (a === 1)
      return xc(i[0], t, e, n);
    for (var o = new it(0, 0, 0, 0), s = 0; s < i.length; s++) {
      var l = xc(i[s], t, e, n);
      s === 0 ? o.copy(l) : o.union(l);
    }
    return o;
  }
  function Ki(r, t, e) {
    return e === "right" ? r -= t : e === "center" && (r -= t / 2), r;
  }
  function oi(r, t, e) {
    return e === "middle" ? r -= t / 2 : e === "bottom" && (r -= t), r;
  }
  function du(r) {
    return me("国", r);
  }
  function Br(r, t) {
    return typeof r == "string" ? r.lastIndexOf("%") >= 0 ? parseFloat(r) / 100 * t : parseFloat(r) : r;
  }
  function Io(r, t, e) {
    var n = t.position || "inside", i = t.distance != null ? t.distance : 5, a = e.height, o = e.width, s = a / 2, l = e.x, u = e.y, f = "left", h = "top";
    if (n instanceof Array)
      l += Br(n[0], e.width), u += Br(n[1], e.height), f = null, h = null;
    else
      switch (n) {
        case "left":
          l -= i, u += s, f = "right", h = "middle";
          break;
        case "right":
          l += i + o, u += s, h = "middle";
          break;
        case "top":
          l += o / 2, u -= i, f = "center", h = "bottom";
          break;
        case "bottom":
          l += o / 2, u += a + i, f = "center";
          break;
        case "inside":
          l += o / 2, u += s, f = "center", h = "middle";
          break;
        case "insideLeft":
          l += i, u += s, h = "middle";
          break;
        case "insideRight":
          l += o - i, u += s, f = "right", h = "middle";
          break;
        case "insideTop":
          l += o / 2, u += i, f = "center";
          break;
        case "insideBottom":
          l += o / 2, u += a - i, f = "center", h = "bottom";
          break;
        case "insideTopLeft":
          l += i, u += i;
          break;
        case "insideTopRight":
          l += o - i, u += i, f = "right";
          break;
        case "insideBottomLeft":
          l += i, u += a - i, h = "bottom";
          break;
        case "insideBottomRight":
          l += o - i, u += a - i, f = "right", h = "bottom";
          break;
      }
    return r = r || {}, r.x = l, r.y = u, r.align = f, r.verticalAlign = h, r;
  }
  var pu = "__zr_normal__", gu = $i.concat(["ignore"]), G1 = Qe($i, function(r, t) {
    return r[t] = !0, r;
  }, {
    ignore: !1
  }), si = {}, H1 = new it(0, 0, 0, 0), Ro = function() {
    function r(t) {
      this.id = Tl(), this.animators = [], this.currentStates = [], this.states = {}, this._init(t);
    }
    return r.prototype._init = function(t) {
      this.attr(t);
    }, r.prototype.drift = function(t, e, n) {
      switch (this.draggable) {
        case "horizontal":
          e = 0;
          break;
        case "vertical":
          t = 0;
          break;
      }
      var i = this.transform;
      i || (i = this.transform = [1, 0, 0, 1, 0, 0]), i[4] += t, i[5] += e, this.decomposeTransform(), this.markRedraw();
    }, r.prototype.beforeUpdate = function() {
    }, r.prototype.afterUpdate = function() {
    }, r.prototype.update = function() {
      this.updateTransform(), this.__dirty && this.updateInnerText();
    }, r.prototype.updateInnerText = function(t) {
      var e = this._textContent;
      if (e && (!e.ignore || t)) {
        this.textConfig || (this.textConfig = {});
        var n = this.textConfig, i = n.local, a = e.innerTransformable, o = void 0, s = void 0, l = !1;
        a.parent = i ? this : null;
        var u = !1;
        if (a.copyTransform(e), n.position != null) {
          var f = H1;
          n.layoutRect ? f.copy(n.layoutRect) : f.copy(this.getBoundingRect()), i || f.applyTransform(this.transform), this.calculateTextPosition ? this.calculateTextPosition(si, n, f) : Io(si, n, f), a.x = si.x, a.y = si.y, o = si.align, s = si.verticalAlign;
          var h = n.origin;
          if (h && n.rotation != null) {
            var c = void 0, v = void 0;
            h === "center" ? (c = f.width * 0.5, v = f.height * 0.5) : (c = Br(h[0], f.width), v = Br(h[1], f.height)), u = !0, a.originX = -a.x + c + (i ? 0 : f.x), a.originY = -a.y + v + (i ? 0 : f.y);
          }
        }
        n.rotation != null && (a.rotation = n.rotation);
        var d = n.offset;
        d && (a.x += d[0], a.y += d[1], u || (a.originX = -d[0], a.originY = -d[1]));
        var g = n.inside == null ? typeof n.position == "string" && n.position.indexOf("inside") >= 0 : n.inside, p = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {}), y = void 0, m = void 0, _ = void 0;
        g && this.canBeInsideText() ? (y = n.insideFill, m = n.insideStroke, (y == null || y === "auto") && (y = this.getInsideTextFill()), (m == null || m === "auto") && (m = this.getInsideTextStroke(y), _ = !0)) : (y = n.outsideFill, m = n.outsideStroke, (y == null || y === "auto") && (y = this.getOutsideFill()), (m == null || m === "auto") && (m = this.getOutsideStroke(y), _ = !0)), y = y || "#000", (y !== p.fill || m !== p.stroke || _ !== p.autoStroke || o !== p.align || s !== p.verticalAlign) && (l = !0, p.fill = y, p.stroke = m, p.autoStroke = _, p.align = o, p.verticalAlign = s, e.setDefaultTextStyle(p)), e.__dirty |= ge, l && e.dirtyStyle(!0);
      }
    }, r.prototype.canBeInsideText = function() {
      return !0;
    }, r.prototype.getInsideTextFill = function() {
      return "#fff";
    }, r.prototype.getInsideTextStroke = function(t) {
      return "#000";
    }, r.prototype.getOutsideFill = function() {
      return this.__zr && this.__zr.isDarkMode() ? fu : uu;
    }, r.prototype.getOutsideStroke = function(t) {
      var e = this.__zr && this.__zr.getBackgroundColor(), n = typeof e == "string" && ye(e);
      n || (n = [255, 255, 255, 1]);
      for (var i = n[3], a = this.__zr.isDarkMode(), o = 0; o < 3; o++)
        n[o] = n[o] * i + (a ? 0 : 255) * (1 - i);
      return n[3] = 1, Or(n, "rgba");
    }, r.prototype.traverse = function(t, e) {
    }, r.prototype.attrKV = function(t, e) {
      t === "textConfig" ? this.setTextConfig(e) : t === "textContent" ? this.setTextContent(e) : t === "clipPath" ? this.setClipPath(e) : t === "extra" ? (this.extra = this.extra || {}, O(this.extra, e)) : this[t] = e;
    }, r.prototype.hide = function() {
      this.ignore = !0, this.markRedraw();
    }, r.prototype.show = function() {
      this.ignore = !1, this.markRedraw();
    }, r.prototype.attr = function(t, e) {
      if (typeof t == "string")
        this.attrKV(t, e);
      else if (W(t))
        for (var n = t, i = yt(n), a = 0; a < i.length; a++) {
          var o = i[a];
          this.attrKV(o, t[o]);
        }
      return this.markRedraw(), this;
    }, r.prototype.saveCurrentToNormalState = function(t) {
      this._innerSaveToNormal(t);
      for (var e = this._normalState, n = 0; n < this.animators.length; n++) {
        var i = this.animators[n], a = i.__fromStateTransition;
        if (!(i.getLoop() || a && a !== pu)) {
          var o = i.targetName, s = o ? e[o] : e;
          i.saveTo(s);
        }
      }
    }, r.prototype._innerSaveToNormal = function(t) {
      var e = this._normalState;
      e || (e = this._normalState = {}), t.textConfig && !e.textConfig && (e.textConfig = this.textConfig), this._savePrimaryToNormal(t, e, gu);
    }, r.prototype._savePrimaryToNormal = function(t, e, n) {
      for (var i = 0; i < n.length; i++) {
        var a = n[i];
        t[a] != null && !(a in e) && (e[a] = this[a]);
      }
    }, r.prototype.hasState = function() {
      return this.currentStates.length > 0;
    }, r.prototype.getState = function(t) {
      return this.states[t];
    }, r.prototype.ensureState = function(t) {
      var e = this.states;
      return e[t] || (e[t] = {}), e[t];
    }, r.prototype.clearStates = function(t) {
      this.useState(pu, !1, t);
    }, r.prototype.useState = function(t, e, n, i) {
      var a = t === pu, o = this.hasState();
      if (!(!o && a)) {
        var s = this.currentStates, l = this.stateTransition;
        if (!(ut(s, t) >= 0 && (e || s.length === 1))) {
          var u;
          if (this.stateProxy && !a && (u = this.stateProxy(t)), u || (u = this.states && this.states[t]), !u && !a) {
            Dr("State " + t + " not exists.");
            return;
          }
          a || this.saveCurrentToNormalState(u);
          var f = !!(u && u.hoverLayer || i);
          f && this._toggleHoverLayerFlag(!0), this._applyStateObj(t, u, this._normalState, e, !n && !this.__inHover && l && l.duration > 0, l);
          var h = this._textContent, c = this._textGuide;
          return h && h.useState(t, e, n, f), c && c.useState(t, e, n, f), a ? (this.currentStates = [], this._normalState = {}) : e ? this.currentStates.push(t) : this.currentStates = [t], this._updateAnimationTargets(), this.markRedraw(), !f && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~ge), u;
        }
      }
    }, r.prototype.useStates = function(t, e, n) {
      if (!t.length)
        this.clearStates();
      else {
        var i = [], a = this.currentStates, o = t.length, s = o === a.length;
        if (s) {
          for (var l = 0; l < o; l++)
            if (t[l] !== a[l]) {
              s = !1;
              break;
            }
        }
        if (s)
          return;
        for (var l = 0; l < o; l++) {
          var u = t[l], f = void 0;
          this.stateProxy && (f = this.stateProxy(u, t)), f || (f = this.states[u]), f && i.push(f);
        }
        var h = i[o - 1], c = !!(h && h.hoverLayer || n);
        c && this._toggleHoverLayerFlag(!0);
        var v = this._mergeStates(i), d = this.stateTransition;
        this.saveCurrentToNormalState(v), this._applyStateObj(t.join(","), v, this._normalState, !1, !e && !this.__inHover && d && d.duration > 0, d);
        var g = this._textContent, p = this._textGuide;
        g && g.useStates(t, e, c), p && p.useStates(t, e, c), this._updateAnimationTargets(), this.currentStates = t.slice(), this.markRedraw(), !c && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~ge);
      }
    }, r.prototype._updateAnimationTargets = function() {
      for (var t = 0; t < this.animators.length; t++) {
        var e = this.animators[t];
        e.targetName && e.changeTarget(this[e.targetName]);
      }
    }, r.prototype.removeState = function(t) {
      var e = ut(this.currentStates, t);
      if (e >= 0) {
        var n = this.currentStates.slice();
        n.splice(e, 1), this.useStates(n);
      }
    }, r.prototype.replaceState = function(t, e, n) {
      var i = this.currentStates.slice(), a = ut(i, t), o = ut(i, e) >= 0;
      a >= 0 ? o ? i.splice(a, 1) : i[a] = e : n && !o && i.push(e), this.useStates(i);
    }, r.prototype.toggleState = function(t, e) {
      e ? this.useState(t, !0) : this.removeState(t);
    }, r.prototype._mergeStates = function(t) {
      for (var e = {}, n, i = 0; i < t.length; i++) {
        var a = t[i];
        O(e, a), a.textConfig && (n = n || {}, O(n, a.textConfig));
      }
      return n && (e.textConfig = n), e;
    }, r.prototype._applyStateObj = function(t, e, n, i, a, o) {
      var s = !(e && i);
      e && e.textConfig ? (this.textConfig = O({}, i ? this.textConfig : n.textConfig), O(this.textConfig, e.textConfig)) : s && n.textConfig && (this.textConfig = n.textConfig);
      for (var l = {}, u = !1, f = 0; f < gu.length; f++) {
        var h = gu[f], c = a && G1[h];
        e && e[h] != null ? c ? (u = !0, l[h] = e[h]) : this[h] = e[h] : s && n[h] != null && (c ? (u = !0, l[h] = n[h]) : this[h] = n[h]);
      }
      if (!a)
        for (var f = 0; f < this.animators.length; f++) {
          var v = this.animators[f], d = v.targetName;
          v.getLoop() || v.__changeFinalValue(d ? (e || n)[d] : e || n);
        }
      u && this._transitionState(t, l, o);
    }, r.prototype._attachComponent = function(t) {
      if (t.__zr && !t.__hostTarget)
        throw new Error("Text element has been added to zrender.");
      if (t === this)
        throw new Error("Recursive component attachment.");
      var e = this.__zr;
      e && t.addSelfToZr(e), t.__zr = e, t.__hostTarget = this;
    }, r.prototype._detachComponent = function(t) {
      t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__hostTarget = null;
    }, r.prototype.getClipPath = function() {
      return this._clipPath;
    }, r.prototype.setClipPath = function(t) {
      this._clipPath && this._clipPath !== t && this.removeClipPath(), this._attachComponent(t), this._clipPath = t, this.markRedraw();
    }, r.prototype.removeClipPath = function() {
      var t = this._clipPath;
      t && (this._detachComponent(t), this._clipPath = null, this.markRedraw());
    }, r.prototype.getTextContent = function() {
      return this._textContent;
    }, r.prototype.setTextContent = function(t) {
      var e = this._textContent;
      if (e !== t) {
        if (e && e !== t && this.removeTextContent(), t.__zr && !t.__hostTarget)
          throw new Error("Text element has been added to zrender.");
        t.innerTransformable = new Po(), this._attachComponent(t), this._textContent = t, this.markRedraw();
      }
    }, r.prototype.setTextConfig = function(t) {
      this.textConfig || (this.textConfig = {}), O(this.textConfig, t), this.markRedraw();
    }, r.prototype.removeTextConfig = function() {
      this.textConfig = null, this.markRedraw();
    }, r.prototype.removeTextContent = function() {
      var t = this._textContent;
      t && (t.innerTransformable = null, this._detachComponent(t), this._textContent = null, this._innerTextDefaultStyle = null, this.markRedraw());
    }, r.prototype.getTextGuideLine = function() {
      return this._textGuide;
    }, r.prototype.setTextGuideLine = function(t) {
      this._textGuide && this._textGuide !== t && this.removeTextGuideLine(), this._attachComponent(t), this._textGuide = t, this.markRedraw();
    }, r.prototype.removeTextGuideLine = function() {
      var t = this._textGuide;
      t && (this._detachComponent(t), this._textGuide = null, this.markRedraw());
    }, r.prototype.markRedraw = function() {
      this.__dirty |= ge;
      var t = this.__zr;
      t && (this.__inHover ? t.refreshHover() : t.refresh()), this.__hostTarget && this.__hostTarget.markRedraw();
    }, r.prototype.dirty = function() {
      this.markRedraw();
    }, r.prototype._toggleHoverLayerFlag = function(t) {
      this.__inHover = t;
      var e = this._textContent, n = this._textGuide;
      e && (e.__inHover = t), n && (n.__inHover = t);
    }, r.prototype.addSelfToZr = function(t) {
      if (this.__zr !== t) {
        this.__zr = t;
        var e = this.animators;
        if (e)
          for (var n = 0; n < e.length; n++)
            t.animation.addAnimator(e[n]);
        this._clipPath && this._clipPath.addSelfToZr(t), this._textContent && this._textContent.addSelfToZr(t), this._textGuide && this._textGuide.addSelfToZr(t);
      }
    }, r.prototype.removeSelfFromZr = function(t) {
      if (this.__zr) {
        this.__zr = null;
        var e = this.animators;
        if (e)
          for (var n = 0; n < e.length; n++)
            t.animation.removeAnimator(e[n]);
        this._clipPath && this._clipPath.removeSelfFromZr(t), this._textContent && this._textContent.removeSelfFromZr(t), this._textGuide && this._textGuide.removeSelfFromZr(t);
      }
    }, r.prototype.animate = function(t, e, n) {
      var i = t ? this[t] : this;
      if (!i) {
        Dr('Property "' + t + '" is not existed in element ' + this.id);
        return;
      }
      var a = new eu(i, e, n);
      return t && (a.targetName = t), this.addAnimator(a, t), a;
    }, r.prototype.addAnimator = function(t, e) {
      var n = this.__zr, i = this;
      t.during(function() {
        i.updateDuringAnimation(e);
      }).done(function() {
        var a = i.animators, o = ut(a, t);
        o >= 0 && a.splice(o, 1);
      }), this.animators.push(t), n && n.animation.addAnimator(t), n && n.wakeUp();
    }, r.prototype.updateDuringAnimation = function(t) {
      this.markRedraw();
    }, r.prototype.stopAnimation = function(t, e) {
      for (var n = this.animators, i = n.length, a = [], o = 0; o < i; o++) {
        var s = n[o];
        !t || t === s.scope ? s.stop(e) : a.push(s);
      }
      return this.animators = a, this;
    }, r.prototype.animateTo = function(t, e, n) {
      yu(this, t, e, n);
    }, r.prototype.animateFrom = function(t, e, n) {
      yu(this, t, e, n, !0);
    }, r.prototype._transitionState = function(t, e, n, i) {
      for (var a = yu(this, e, n, i), o = 0; o < a.length; o++)
        a[o].__fromStateTransition = t;
    }, r.prototype.getBoundingRect = function() {
      return null;
    }, r.prototype.getPaintRect = function() {
      return null;
    }, r.initDefaultProps = function() {
      var t = r.prototype;
      t.type = "element", t.name = "", t.ignore = t.silent = t.isGroup = t.draggable = t.dragging = t.ignoreClip = t.__inHover = !1, t.__dirty = ge;
      var e = {};
      function n(a, o, s) {
        e[a + o + s] || (console.warn("DEPRECATED: '" + a + "' has been deprecated. use '" + o + "', '" + s + "' instead"), e[a + o + s] = !0);
      }
      function i(a, o, s, l) {
        Object.defineProperty(t, a, {
          get: function() {
            if (n(a, s, l), !this[o]) {
              var f = this[o] = [];
              u(this, f);
            }
            return this[o];
          },
          set: function(f) {
            n(a, s, l), this[s] = f[0], this[l] = f[1], this[o] = f, u(this, f);
          }
        });
        function u(f, h) {
          Object.defineProperty(h, 0, {
            get: function() {
              return f[s];
            },
            set: function(c) {
              f[s] = c;
            }
          }), Object.defineProperty(h, 1, {
            get: function() {
              return f[l];
            },
            set: function(c) {
              f[l] = c;
            }
          });
        }
      }
      Object.defineProperty && (i("position", "_legacyPos", "x", "y"), i("scale", "_legacyScale", "scaleX", "scaleY"), i("origin", "_legacyOrigin", "originX", "originY"));
    }(), r;
  }();
  xe(Ro, je), xe(Ro, Po);
  function yu(r, t, e, n, i) {
    e = e || {};
    var a = [];
    Tc(r, "", r, t, e, n, a, i);
    var o = a.length, s = !1, l = e.done, u = e.aborted, f = function() {
      s = !0, o--, o <= 0 && (s ? l && l() : u && u());
    }, h = function() {
      o--, o <= 0 && (s ? l && l() : u && u());
    };
    o || l && l(), a.length > 0 && e.during && a[0].during(function(d, g) {
      e.during(g);
    });
    for (var c = 0; c < a.length; c++) {
      var v = a[c];
      f && v.done(f), h && v.aborted(h), e.force && v.duration(e.duration), v.start(e.easing);
    }
    return a;
  }
  function mu(r, t, e) {
    for (var n = 0; n < e; n++)
      r[n] = t[n];
  }
  function V1(r) {
    return $t(r[0]);
  }
  function W1(r, t, e) {
    if ($t(t[e]))
      if ($t(r[e]) || (r[e] = []), Kt(t[e])) {
        var n = t[e].length;
        r[e].length !== n && (r[e] = new t[e].constructor(n), mu(r[e], t[e], n));
      } else {
        var i = t[e], a = r[e], o = i.length;
        if (V1(i))
          for (var s = i[0].length, l = 0; l < o; l++)
            a[l] ? mu(a[l], i[l], s) : a[l] = Array.prototype.slice.call(i[l]);
        else
          mu(a, i, o);
        a.length = i.length;
      }
    else
      r[e] = t[e];
  }
  function U1(r, t) {
    return r === t || $t(r) && $t(t) && Y1(r, t);
  }
  function Y1(r, t) {
    var e = r.length;
    if (e !== t.length)
      return !1;
    for (var n = 0; n < e; n++)
      if (r[n] !== t[n])
        return !1;
    return !0;
  }
  function Tc(r, t, e, n, i, a, o, s) {
    for (var l = yt(n), u = i.duration, f = i.delay, h = i.additive, c = i.setToFinal, v = !W(a), d = r.animators, g = [], p = 0; p < l.length; p++) {
      var y = l[p], m = n[y];
      if (m != null && e[y] != null && (v || a[y]))
        if (W(m) && !$t(m) && !ki(m)) {
          if (t) {
            s || (e[y] = m, r.updateDuringAnimation(t));
            continue;
          }
          Tc(r, y, e[y], m, i, a && a[y], o, s);
        } else
          g.push(y);
      else
        s || (e[y] = m, r.updateDuringAnimation(t), g.push(y));
    }
    var _ = g.length;
    if (!h && _)
      for (var S = 0; S < d.length; S++) {
        var b = d[S];
        if (b.targetName === t) {
          var w = b.stopTracks(g);
          if (w) {
            var x = ut(d, b);
            d.splice(x, 1);
          }
        }
      }
    if (i.force || (g = Dt(g, function(C) {
      return !U1(n[C], e[C]);
    }), _ = g.length), _ > 0 || i.force && !o.length) {
      var T = void 0, D = void 0, A = void 0;
      if (s) {
        D = {}, c && (T = {});
        for (var S = 0; S < _; S++) {
          var y = g[S];
          D[y] = e[y], c ? T[y] = n[y] : e[y] = n[y];
        }
      } else if (c) {
        A = {};
        for (var S = 0; S < _; S++) {
          var y = g[S];
          A[y] = xo(e[y]), W1(e, n, y);
        }
      }
      var b = new eu(e, !1, !1, h ? Dt(d, function(L) {
        return L.targetName === t;
      }) : null);
      b.targetName = t, i.scope && (b.scope = i.scope), c && T && b.whenWithKeys(0, T, g), A && b.whenWithKeys(0, A, g), b.whenWithKeys(u ?? 500, s ? D : n, g).delay(f || 0), r.addAnimator(b, t), o.push(b);
    }
  }
  var Bt = function(r) {
    k(t, r);
    function t(e) {
      var n = r.call(this) || this;
      return n.isGroup = !0, n._children = [], n.attr(e), n;
    }
    return t.prototype.childrenRef = function() {
      return this._children;
    }, t.prototype.children = function() {
      return this._children.slice();
    }, t.prototype.childAt = function(e) {
      return this._children[e];
    }, t.prototype.childOfName = function(e) {
      for (var n = this._children, i = 0; i < n.length; i++)
        if (n[i].name === e)
          return n[i];
    }, t.prototype.childCount = function() {
      return this._children.length;
    }, t.prototype.add = function(e) {
      if (e && (e !== this && e.parent !== this && (this._children.push(e), this._doAdd(e)), e.__hostTarget))
        throw "This elemenet has been used as an attachment";
      return this;
    }, t.prototype.addBefore = function(e, n) {
      if (e && e !== this && e.parent !== this && n && n.parent === this) {
        var i = this._children, a = i.indexOf(n);
        a >= 0 && (i.splice(a, 0, e), this._doAdd(e));
      }
      return this;
    }, t.prototype.replace = function(e, n) {
      var i = ut(this._children, e);
      return i >= 0 && this.replaceAt(n, i), this;
    }, t.prototype.replaceAt = function(e, n) {
      var i = this._children, a = i[n];
      if (e && e !== this && e.parent !== this && e !== a) {
        i[n] = e, a.parent = null;
        var o = this.__zr;
        o && a.removeSelfFromZr(o), this._doAdd(e);
      }
      return this;
    }, t.prototype._doAdd = function(e) {
      e.parent && e.parent.remove(e), e.parent = this;
      var n = this.__zr;
      n && n !== e.__zr && e.addSelfToZr(n), n && n.refresh();
    }, t.prototype.remove = function(e) {
      var n = this.__zr, i = this._children, a = ut(i, e);
      return a < 0 ? this : (i.splice(a, 1), e.parent = null, n && e.removeSelfFromZr(n), n && n.refresh(), this);
    }, t.prototype.removeAll = function() {
      for (var e = this._children, n = this.__zr, i = 0; i < e.length; i++) {
        var a = e[i];
        n && a.removeSelfFromZr(n), a.parent = null;
      }
      return e.length = 0, this;
    }, t.prototype.eachChild = function(e, n) {
      for (var i = this._children, a = 0; a < i.length; a++) {
        var o = i[a];
        e.call(n, o, a);
      }
      return this;
    }, t.prototype.traverse = function(e, n) {
      for (var i = 0; i < this._children.length; i++) {
        var a = this._children[i], o = e.call(n, a);
        a.isGroup && !o && a.traverse(e, n);
      }
      return this;
    }, t.prototype.addSelfToZr = function(e) {
      r.prototype.addSelfToZr.call(this, e);
      for (var n = 0; n < this._children.length; n++) {
        var i = this._children[n];
        i.addSelfToZr(e);
      }
    }, t.prototype.removeSelfFromZr = function(e) {
      r.prototype.removeSelfFromZr.call(this, e);
      for (var n = 0; n < this._children.length; n++) {
        var i = this._children[n];
        i.removeSelfFromZr(e);
      }
    }, t.prototype.getBoundingRect = function(e) {
      for (var n = new it(0, 0, 0, 0), i = e || this._children, a = [], o = null, s = 0; s < i.length; s++) {
        var l = i[s];
        if (!(l.ignore || l.invisible)) {
          var u = l.getBoundingRect(), f = l.getLocalTransform(a);
          f ? (it.applyTransform(n, u, f), o = o || n.clone(), o.union(n)) : (o = o || u.clone(), o.union(u));
        }
      }
      return o || n;
    }, t;
  }(Ro);
  Bt.prototype.type = "group";
  /*!
  * ZRender, a high performance 2d drawing library.
  *
  * Copyright (c) 2013, Baidu Inc.
  * All rights reserved.
  *
  * LICENSE
  * https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
  */
  var Qi = {}, yn = {};
  function X1(r) {
    delete yn[r];
  }
  function q1(r) {
    if (!r)
      return !1;
    if (typeof r == "string")
      return Xi(r, 1) < lu;
    if (r.colorStops) {
      for (var t = r.colorStops, e = 0, n = t.length, i = 0; i < n; i++)
        e += Xi(t[i].color, 1);
      return e /= n, e < lu;
    }
    return !1;
  }
  var Z1 = function() {
    function r(t, e, n) {
      var i = this;
      this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !0, this._darkMode = !1, n = n || {}, this.dom = e, this.id = t;
      var a = new s1(), o = n.renderer || "canvas";
      if (Qi[o] || (o = yt(Qi)[0]), !Qi[o])
        throw new Error("Renderer '" + o + "' is not imported. Please import it first.");
      n.useDirtyRect = n.useDirtyRect == null ? !1 : n.useDirtyRect;
      var s = new Qi[o](e, a, n, t), l = n.ssr || s.ssrOnly;
      this.storage = a, this.painter = s;
      var u = !z.node && !z.worker && !l ? new N1(s.getViewportRoot(), s.root) : null, f = n.useCoarsePointer, h = f == null || f === "auto" ? z.touchEventsSupported : !!f, c = 44, v;
      h && (v = tt(n.pointerSize, c)), this.handler = new Vv(a, s, u, s.root, v), this.animation = new P1({
        stage: {
          update: l ? null : function() {
            return i._flush(!0);
          }
        }
      }), l || this.animation.start();
    }
    return r.prototype.add = function(t) {
      t && (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh());
    }, r.prototype.remove = function(t) {
      t && (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh());
    }, r.prototype.configLayer = function(t, e) {
      this.painter.configLayer && this.painter.configLayer(t, e), this.refresh();
    }, r.prototype.setBackgroundColor = function(t) {
      this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this.refresh(), this._backgroundColor = t, this._darkMode = q1(t);
    }, r.prototype.getBackgroundColor = function() {
      return this._backgroundColor;
    }, r.prototype.setDarkMode = function(t) {
      this._darkMode = t;
    }, r.prototype.isDarkMode = function() {
      return this._darkMode;
    }, r.prototype.refreshImmediately = function(t) {
      t || this.animation.update(!0), this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1;
    }, r.prototype.refresh = function() {
      this._needsRefresh = !0, this.animation.start();
    }, r.prototype.flush = function() {
      this._flush(!1);
    }, r.prototype._flush = function(t) {
      var e, n = ii();
      this._needsRefresh && (e = !0, this.refreshImmediately(t)), this._needsRefreshHover && (e = !0, this.refreshHoverImmediately());
      var i = ii();
      e ? (this._stillFrameAccum = 0, this.trigger("rendered", {
        elapsedTime: i - n
      })) : this._sleepAfterStill > 0 && (this._stillFrameAccum++, this._stillFrameAccum > this._sleepAfterStill && this.animation.stop());
    }, r.prototype.setSleepAfterStill = function(t) {
      this._sleepAfterStill = t;
    }, r.prototype.wakeUp = function() {
      this.animation.start(), this._stillFrameAccum = 0;
    }, r.prototype.refreshHover = function() {
      this._needsRefreshHover = !0;
    }, r.prototype.refreshHoverImmediately = function() {
      this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.getType() === "canvas" && this.painter.refreshHover();
    }, r.prototype.resize = function(t) {
      t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize();
    }, r.prototype.clearAnimation = function() {
      this.animation.clear();
    }, r.prototype.getWidth = function() {
      return this.painter.getWidth();
    }, r.prototype.getHeight = function() {
      return this.painter.getHeight();
    }, r.prototype.setCursorStyle = function(t) {
      this.handler.setCursorStyle(t);
    }, r.prototype.findHover = function(t, e) {
      return this.handler.findHover(t, e);
    }, r.prototype.on = function(t, e, n) {
      return this.handler.on(t, e, n), this;
    }, r.prototype.off = function(t, e) {
      this.handler.off(t, e);
    }, r.prototype.trigger = function(t, e) {
      this.handler.trigger(t, e);
    }, r.prototype.clear = function() {
      for (var t = this.storage.getRoots(), e = 0; e < t.length; e++)
        t[e] instanceof Bt && t[e].removeSelfFromZr(this);
      this.storage.delAllRoots(), this.painter.clear();
    }, r.prototype.dispose = function() {
      this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, X1(this.id);
    }, r;
  }();
  function _u(r, t) {
    var e = new Z1(Tl(), r, t);
    return yn[e.id] = e, e;
  }
  function $1(r) {
    r.dispose();
  }
  function K1() {
    for (var r in yn)
      yn.hasOwnProperty(r) && yn[r].dispose();
    yn = {};
  }
  function Q1(r) {
    return yn[r];
  }
  function Cc(r, t) {
    Qi[r] = t;
  }
  var j1 = "5.4.3", J1 = (Object.freeze || Object)({
    init: _u,
    dispose: $1,
    disposeAll: K1,
    getInstance: Q1,
    registerPainter: Cc,
    version: j1
  }), Dc = 1e-4, Mc = 20;
  function tS(r) {
    return r.replace(/^\s+|\s+$/g, "");
  }
  function Eo(r, t, e, n) {
    var i = t[0], a = t[1], o = e[0], s = e[1], l = a - i, u = s - o;
    if (l === 0)
      return u === 0 ? o : (o + s) / 2;
    if (n)
      if (l > 0) {
        if (r <= i)
          return o;
        if (r >= a)
          return s;
      } else {
        if (r >= i)
          return o;
        if (r <= a)
          return s;
      }
    else {
      if (r === i)
        return o;
      if (r === a)
        return s;
    }
    return (r - i) / l * u + o;
  }
  function mt(r, t) {
    switch (r) {
      case "center":
      case "middle":
        r = "50%";
        break;
      case "left":
      case "top":
        r = "0%";
        break;
      case "right":
      case "bottom":
        r = "100%";
        break;
    }
    return H(r) ? tS(r).match(/%$/) ? parseFloat(r) / 100 * t : parseFloat(r) : r == null ? NaN : +r;
  }
  function Mt(r, t, e) {
    return t == null && (t = 10), t = Math.min(Math.max(0, t), Mc), r = (+r).toFixed(t), e ? r : +r;
  }
  function eS(r) {
    return r.sort(function(t, e) {
      return t - e;
    }), r;
  }
  function tr(r) {
    if (r = +r, isNaN(r))
      return 0;
    if (r > 1e-14) {
      for (var t = 1, e = 0; e < 15; e++, t *= 10)
        if (Math.round(r * t) / t === r)
          return e;
    }
    return ko(r);
  }
  function ko(r) {
    var t = r.toString().toLowerCase(), e = t.indexOf("e"), n = e > 0 ? +t.slice(e + 1) : 0, i = e > 0 ? e : t.length, a = t.indexOf("."), o = a < 0 ? 0 : i - 1 - a;
    return Math.max(0, o - n);
  }
  function Ac(r, t) {
    var e = Math.log, n = Math.LN10, i = Math.floor(e(r[1] - r[0]) / n), a = Math.round(e(Math.abs(t[1] - t[0])) / n), o = Math.min(Math.max(-i + a, 0), 20);
    return isFinite(o) ? o : 20;
  }
  function rS(r, t, e) {
    if (!r[t])
      return 0;
    var n = Lc(r, e);
    return n[t] || 0;
  }
  function Lc(r, t) {
    var e = Qe(r, function(v, d) {
      return v + (isNaN(d) ? 0 : d);
    }, 0);
    if (e === 0)
      return [];
    for (var n = Math.pow(10, t), i = V(r, function(v) {
      return (isNaN(v) ? 0 : v) / e * n * 100;
    }), a = n * 100, o = V(i, function(v) {
      return Math.floor(v);
    }), s = Qe(o, function(v, d) {
      return v + d;
    }, 0), l = V(i, function(v, d) {
      return v - o[d];
    }); s < a; ) {
      for (var u = Number.NEGATIVE_INFINITY, f = null, h = 0, c = l.length; h < c; ++h)
        l[h] > u && (u = l[h], f = h);
      ++o[f], l[f] = 0, ++s;
    }
    return V(o, function(v) {
      return v / n;
    });
  }
  function nS(r, t) {
    var e = Math.max(tr(r), tr(t)), n = r + t;
    return e > Mc ? n : Mt(n, e);
  }
  var iS = 9007199254740991;
  function Su(r) {
    var t = Math.PI * 2;
    return (r % t + t) % t;
  }
  function ji(r) {
    return r > -Dc && r < Dc;
  }
  var aS = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
  function Me(r) {
    if (r instanceof Date)
      return r;
    if (H(r)) {
      var t = aS.exec(r);
      if (!t)
        return /* @__PURE__ */ new Date(NaN);
      if (t[8]) {
        var e = +t[4] || 0;
        return t[8].toUpperCase() !== "Z" && (e -= +t[8].slice(0, 3)), new Date(Date.UTC(+t[1], +(t[2] || 1) - 1, +t[3] || 1, e, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0));
      } else
        return new Date(+t[1], +(t[2] || 1) - 1, +t[3] || 1, +t[4] || 0, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0);
    } else if (r == null)
      return /* @__PURE__ */ new Date(NaN);
    return new Date(Math.round(r));
  }
  function Pc(r) {
    return Math.pow(10, Ji(r));
  }
  function Ji(r) {
    if (r === 0)
      return 0;
    var t = Math.floor(Math.log(r) / Math.LN10);
    return r / Math.pow(10, t) >= 10 && t++, t;
  }
  function wu(r, t) {
    var e = Ji(r), n = Math.pow(10, e), i = r / n, a;
    return t ? i < 1.5 ? a = 1 : i < 2.5 ? a = 2 : i < 4 ? a = 3 : i < 7 ? a = 5 : a = 10 : i < 1 ? a = 1 : i < 2 ? a = 2 : i < 3 ? a = 3 : i < 5 ? a = 5 : a = 10, r = a * n, e >= -20 ? +r.toFixed(e < 0 ? -e : 0) : r;
  }
  function oS(r, t) {
    var e = (r.length - 1) * t + 1, n = Math.floor(e), i = +r[n - 1], a = e - n;
    return a ? i + a * (r[n] - i) : i;
  }
  function sS(r) {
    r.sort(function(l, u) {
      return s(l, u, 0) ? -1 : 1;
    });
    for (var t = -1 / 0, e = 1, n = 0; n < r.length; ) {
      for (var i = r[n].interval, a = r[n].close, o = 0; o < 2; o++)
        i[o] <= t && (i[o] = t, a[o] = o ? 1 : 1 - e), t = i[o], e = a[o];
      i[0] === i[1] && a[0] * a[1] !== 1 ? r.splice(n, 1) : n++;
    }
    return r;
    function s(l, u, f) {
      return l.interval[f] < u.interval[f] || l.interval[f] === u.interval[f] && (l.close[f] - u.close[f] === (f ? -1 : 1) || !f && s(l, u, 1));
    }
  }
  function ta(r) {
    var t = parseFloat(r);
    return t == r && (t !== 0 || !H(r) || r.indexOf("x") <= 0) ? t : NaN;
  }
  function bu(r) {
    return !isNaN(ta(r));
  }
  function Ic() {
    return Math.round(Math.random() * 9);
  }
  function Rc(r, t) {
    return t === 0 ? r : Rc(t, r % t);
  }
  function Ec(r, t) {
    return r == null ? t : t == null ? r : r * t / Rc(r, t);
  }
  var lS = "[ECharts] ", kc = {}, uS = typeof console < "u" && console.warn && console.log;
  function Oo(r, t, e) {
    if (uS) {
      if (e) {
        if (kc[t])
          return;
        kc[t] = !0;
      }
      console[r](lS + t);
    }
  }
  function fS(r, t) {
    Oo("log", r, t);
  }
  function Vt(r, t) {
    Oo("warn", r, t);
  }
  function Wt(r, t) {
    Oo("error", r, t);
  }
  function We(r) {
    Oo("warn", "DEPRECATED: " + r, !0);
  }
  function Rt(r, t, e) {
    We((e ? "[" + e + "]" : "") + (r + " is deprecated, use " + t + " instead."));
  }
  function Bo() {
    for (var r = [], t = 0; t < arguments.length; t++)
      r[t] = arguments[t];
    var e = "";
    {
      var n = function(i) {
        return i === void 0 ? "undefined" : i === 1 / 0 ? "Infinity" : i === -1 / 0 ? "-Infinity" : Qn(i) ? "NaN" : i instanceof Date ? "Date(" + i.toISOString() + ")" : X(i) ? "function () { ... }" : Tv(i) ? i + "" : null;
      };
      e = V(r, function(i) {
        if (H(i))
          return i;
        var a = n(i);
        if (a != null)
          return a;
        if (typeof JSON < "u" && JSON.stringify)
          try {
            return JSON.stringify(i, function(o, s) {
              var l = n(s);
              return l ?? s;
            });
          } catch {
            return "?";
          }
        else
          return "?";
      }).join(" ");
    }
    return e;
  }
  function ae(r) {
    throw new Error(r);
  }
  function Oc(r, t, e) {
    return (t - r) * e + r;
  }
  var Bc = "series\0", hS = "\0_ec_\0";
  function Jt(r) {
    return r instanceof Array ? r : r == null ? [] : [r];
  }
  function xu(r, t, e) {
    if (r) {
      r[t] = r[t] || {}, r.emphasis = r.emphasis || {}, r.emphasis[t] = r.emphasis[t] || {};
      for (var n = 0, i = e.length; n < i; n++) {
        var a = e[n];
        !r.emphasis[t].hasOwnProperty(a) && r[t].hasOwnProperty(a) && (r.emphasis[t][a] = r[t][a]);
      }
    }
  }
  var Nc = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"];
  function ea(r) {
    return W(r) && !F(r) && !(r instanceof Date) ? r.value : r;
  }
  function vS(r) {
    return W(r) && !(r instanceof Array);
  }
  function cS(r, t, e) {
    var n = e === "normalMerge", i = e === "replaceMerge", a = e === "replaceAll";
    r = r || [], t = (t || []).slice();
    var o = J();
    M(t, function(l, u) {
      if (!W(l)) {
        t[u] = null;
        return;
      }
      l.id != null && !Gc(l.id) && zc(l.id), l.name != null && !Gc(l.name) && zc(l.name);
    });
    var s = dS(r, o, e);
    return (n || i) && pS(s, r, o, t), n && gS(s, t), n || i ? yS(s, t, i) : a && mS(s, t), _S(s), s;
  }
  function dS(r, t, e) {
    var n = [];
    if (e === "replaceAll")
      return n;
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a && a.id != null && t.set(a.id, i), n.push({
        existing: e === "replaceMerge" || li(a) ? null : a,
        newOption: null,
        keyInfo: null,
        brandNew: null
      });
    }
    return n;
  }
  function pS(r, t, e, n) {
    M(n, function(i, a) {
      if (!(!i || i.id == null)) {
        var o = ra(i.id), s = e.get(o);
        if (s != null) {
          var l = r[s];
          j(!l.newOption, 'Duplicated option on id "' + o + '".'), l.newOption = i, l.existing = t[s], n[a] = null;
        }
      }
    });
  }
  function gS(r, t) {
    M(t, function(e, n) {
      if (!(!e || e.name == null))
        for (var i = 0; i < r.length; i++) {
          var a = r[i].existing;
          if (!r[i].newOption && a && (a.id == null || e.id == null) && !li(e) && !li(a) && Fc("name", a, e)) {
            r[i].newOption = e, t[n] = null;
            return;
          }
        }
    });
  }
  function yS(r, t, e) {
    M(t, function(n) {
      if (n) {
        for (
          var i, a = 0;
          // Be `!resultItem` only when `nextIdx >= result.length`.
          (i = r[a]) && // (1) Existing models that already have id should be able to mapped to. Because
          // after mapping performed, model will always be assigned with an id if user not given.
          // After that all models have id.
          // (2) If new option has id, it can only set to a hole or append to the last. It should
          // not be merged to the existings with different id. Because id should not be overwritten.
          // (3) Name can be overwritten, because axis use name as 'show label text'.
          (i.newOption || li(i.existing) || // In mode "replaceMerge", here no not-mapped-non-internal-existing.
          i.existing && n.id != null && !Fc("id", n, i.existing));
        )
          a++;
        i ? (i.newOption = n, i.brandNew = e) : r.push({
          newOption: n,
          brandNew: e,
          existing: null,
          keyInfo: null
        }), a++;
      }
    });
  }
  function mS(r, t) {
    M(t, function(e) {
      r.push({
        newOption: e,
        brandNew: !0,
        existing: null,
        keyInfo: null
      });
    });
  }
  function _S(r) {
    var t = J();
    M(r, function(e) {
      var n = e.existing;
      n && t.set(n.id, e);
    }), M(r, function(e) {
      var n = e.newOption;
      j(!n || n.id == null || !t.get(n.id) || t.get(n.id) === e, "id duplicates: " + (n && n.id)), n && n.id != null && t.set(n.id, e), !e.keyInfo && (e.keyInfo = {});
    }), M(r, function(e, n) {
      var i = e.existing, a = e.newOption, o = e.keyInfo;
      if (W(a)) {
        if (o.name = a.name != null ? ra(a.name) : i ? i.name : Bc + n, i)
          o.id = ra(i.id);
        else if (a.id != null)
          o.id = ra(a.id);
        else {
          var s = 0;
          do
            o.id = "\0" + o.name + "\0" + s++;
          while (t.get(o.id));
        }
        t.set(o.id, e);
      }
    });
  }
  function Fc(r, t, e) {
    var n = er(t[r], null), i = er(e[r], null);
    return n != null && i != null && n === i;
  }
  function ra(r) {
    if (r == null)
      throw new Error();
    return er(r, "");
  }
  function er(r, t) {
    return r == null ? t : H(r) ? r : pt(r) || Ei(r) ? r + "" : t;
  }
  function zc(r) {
    Vt("`" + r + "` is invalid id or name. Must be a string or number.");
  }
  function Gc(r) {
    return Ei(r) || bu(r);
  }
  function Tu(r) {
    var t = r.name;
    return !!(t && t.indexOf(Bc));
  }
  function li(r) {
    return r && r.id != null && ra(r.id).indexOf(hS) === 0;
  }
  function SS(r, t, e) {
    M(r, function(n) {
      var i = n.newOption;
      W(i) && (n.keyInfo.mainType = t, n.keyInfo.subType = wS(t, i, n.existing, e));
    });
  }
  function wS(r, t, e, n) {
    var i = t.type ? t.type : e ? e.subType : n.determineSubType(r, t);
    return i;
  }
  function mn(r, t) {
    if (t.dataIndexInside != null)
      return t.dataIndexInside;
    if (t.dataIndex != null)
      return F(t.dataIndex) ? V(t.dataIndex, function(e) {
        return r.indexOfRawIndex(e);
      }) : r.indexOfRawIndex(t.dataIndex);
    if (t.name != null)
      return F(t.name) ? V(t.name, function(e) {
        return r.indexOfName(e);
      }) : r.indexOfName(t.name);
  }
  function Tt() {
    var r = "__ec_inner_" + bS++;
    return function(t) {
      return t[r] || (t[r] = {});
    };
  }
  var bS = Ic();
  function Cu(r, t, e) {
    var n = Du(t, e), i = n.mainTypeSpecified, a = n.queryOptionMap, o = n.others, s = o, l = e ? e.defaultMainType : null;
    return !i && l && a.set(l, {}), a.each(function(u, f) {
      var h = na(r, f, u, {
        useDefault: l === f,
        enableAll: e && e.enableAll != null ? e.enableAll : !0,
        enableNone: e && e.enableNone != null ? e.enableNone : !0
      });
      s[f + "Models"] = h.models, s[f + "Model"] = h.models[0];
    }), s;
  }
  function Du(r, t) {
    var e;
    if (H(r)) {
      var n = {};
      n[r + "Index"] = 0, e = n;
    } else
      e = r;
    var i = J(), a = {}, o = !1;
    return M(e, function(s, l) {
      if (l === "dataIndex" || l === "dataIndexInside") {
        a[l] = s;
        return;
      }
      var u = l.match(/^(\w+)(Index|Id|Name)$/) || [], f = u[1], h = (u[2] || "").toLowerCase();
      if (!(!f || !h || t && t.includeMainTypes && ut(t.includeMainTypes, f) < 0)) {
        o = o || !!f;
        var c = i.get(f) || i.set(f, {});
        c[h] = s;
      }
    }), {
      mainTypeSpecified: o,
      queryOptionMap: i,
      others: a
    };
  }
  var Ue = {
    useDefault: !0,
    enableAll: !1,
    enableNone: !1
  };
  function na(r, t, e, n) {
    n = n || Ue;
    var i = e.index, a = e.id, o = e.name, s = {
      models: null,
      specified: i != null || a != null || o != null
    };
    if (!s.specified) {
      var l = void 0;
      return s.models = n.useDefault && (l = r.getComponent(t)) ? [l] : [], s;
    }
    return i === "none" || i === !1 ? (j(n.enableNone, '`"none"` or `false` is not a valid value on index option.'), s.models = [], s) : (i === "all" && (j(n.enableAll, '`"all"` is not a valid value on index option.'), i = a = o = null), s.models = r.queryComponents({
      mainType: t,
      index: i,
      id: a,
      name: o
    }), s);
  }
  function Hc(r, t, e) {
    r.setAttribute ? r.setAttribute(t, e) : r[t] = e;
  }
  function xS(r, t) {
    return r.getAttribute ? r.getAttribute(t) : r[t];
  }
  function TS(r) {
    return r === "auto" ? z.domSupported ? "html" : "richText" : r || "html";
  }
  function Vc(r, t, e, n, i) {
    var a = t == null || t === "auto";
    if (n == null)
      return n;
    if (pt(n)) {
      var o = Oc(e || 0, n, i);
      return Mt(o, a ? Math.max(tr(e || 0), tr(n)) : t);
    } else {
      if (H(n))
        return i < 1 ? e : n;
      for (var s = [], l = e, u = n, f = Math.max(l ? l.length : 0, u.length), h = 0; h < f; ++h) {
        var c = r.getDimensionInfo(h);
        if (c && c.type === "ordinal")
          s[h] = (i < 1 && l ? l : u)[h];
        else {
          var v = l && l[h] ? l[h] : 0, d = u[h], o = Oc(v, d, i);
          s[h] = Mt(o, a ? Math.max(tr(v), tr(d)) : t);
        }
      }
      return s;
    }
  }
  var CS = ".", _n = "___EC__COMPONENT__CONTAINER___", Wc = "___EC__EXTENDED_CLASS___";
  function rr(r) {
    var t = {
      main: "",
      sub: ""
    };
    if (r) {
      var e = r.split(CS);
      t.main = e[0] || "", t.sub = e[1] || "";
    }
    return t;
  }
  function DS(r) {
    j(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(r), 'componentType "' + r + '" illegal');
  }
  function MS(r) {
    return !!(r && r[Wc]);
  }
  function Mu(r, t) {
    r.$constructor = r, r.extend = function(e) {
      M(t, function(a) {
        e[a] || console.warn("Method `" + a + "` should be implemented" + (e.type ? " in " + e.type : "") + ".");
      });
      var n = this, i;
      return AS(n) ? i = /** @class */
      function(a) {
        k(o, a);
        function o() {
          return a.apply(this, arguments) || this;
        }
        return o;
      }(n) : (i = function() {
        (e.$constructor || n).apply(this, arguments);
      }, Cl(i, this)), O(i.prototype, e), i[Wc] = !0, i.extend = this.extend, i.superCall = IS, i.superApply = RS, i.superClass = n, i;
    };
  }
  function AS(r) {
    return X(r) && /^class\s/.test(Function.prototype.toString.call(r));
  }
  function Uc(r, t) {
    r.extend = t.extend;
  }
  var LS = Math.round(Math.random() * 10);
  function PS(r) {
    var t = ["__\0is_clz", LS++].join("_");
    r.prototype[t] = !0, j(!r.isInstance, 'The method "is" can not be defined.'), r.isInstance = function(e) {
      return !!(e && e[t]);
    };
  }
  function IS(r, t) {
    for (var e = [], n = 2; n < arguments.length; n++)
      e[n - 2] = arguments[n];
    return this.superClass.prototype[t].apply(r, e);
  }
  function RS(r, t, e) {
    return this.superClass.prototype[t].apply(r, e);
  }
  function No(r) {
    var t = {};
    r.registerClass = function(n) {
      var i = n.type || n.prototype.type;
      if (i) {
        DS(i), n.prototype.type = i;
        var a = rr(i);
        if (!a.sub)
          t[a.main] && console.warn(a.main + " exists."), t[a.main] = n;
        else if (a.sub !== _n) {
          var o = e(a);
          o[a.sub] = n;
        }
      }
      return n;
    }, r.getClass = function(n, i, a) {
      var o = t[n];
      if (o && o[_n] && (o = i ? o[i] : null), a && !o)
        throw new Error(i ? "Component " + n + "." + (i || "") + " is used but not imported." : n + ".type should be specified.");
      return o;
    }, r.getClassesByMainType = function(n) {
      var i = rr(n), a = [], o = t[i.main];
      return o && o[_n] ? M(o, function(s, l) {
        l !== _n && a.push(s);
      }) : a.push(o), a;
    }, r.hasClass = function(n) {
      var i = rr(n);
      return !!t[i.main];
    }, r.getAllClassMainTypes = function() {
      var n = [];
      return M(t, function(i, a) {
        n.push(a);
      }), n;
    }, r.hasSubTypes = function(n) {
      var i = rr(n), a = t[i.main];
      return a && a[_n];
    };
    function e(n) {
      var i = t[n.main];
      return (!i || !i[_n]) && (i = t[n.main] = {}, i[_n] = !0), i;
    }
  }
  function ia(r, t) {
    for (var e = 0; e < r.length; e++)
      r[e][1] || (r[e][1] = r[e][0]);
    return t = t || !1, function(n, i, a) {
      for (var o = {}, s = 0; s < r.length; s++) {
        var l = r[s][1];
        if (!(i && ut(i, l) >= 0 || a && ut(a, l) < 0)) {
          var u = n.getShallow(l, t);
          u != null && (o[r[s][0]] = u);
        }
      }
      return o;
    };
  }
  var ES = [
    ["fill", "color"],
    ["shadowBlur"],
    ["shadowOffsetX"],
    ["shadowOffsetY"],
    ["opacity"],
    ["shadowColor"]
    // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
    // So do not transfer decal directly.
  ], kS = ia(ES), OS = (
    /** @class */
    function() {
      function r() {
      }
      return r.prototype.getAreaStyle = function(t, e) {
        return kS(this, t, e);
      }, r;
    }()
  ), Au = new Ui(50);
  function BS(r) {
    if (typeof r == "string") {
      var t = Au.get(r);
      return t && t.image;
    } else
      return r;
  }
  function Yc(r, t, e, n, i) {
    if (r)
      if (typeof r == "string") {
        if (t && t.__zrImageSrc === r || !e)
          return t;
        var a = Au.get(r), o = {
          hostEl: e,
          cb: n,
          cbPayload: i
        };
        return a ? (t = a.image, !Fo(t) && a.pending.push(o)) : (t = Zt.loadImage(r, Xc, Xc), t.__zrImageSrc = r, Au.put(r, t.__cachedImgObj = {
          image: t,
          pending: [o]
        })), t;
      } else
        return r;
    else
      return t;
  }
  function Xc() {
    var r = this.__cachedImgObj;
    this.onload = this.onerror = this.__cachedImgObj = null;
    for (var t = 0; t < r.pending.length; t++) {
      var e = r.pending[t], n = e.cb;
      n && n(this, e.cbPayload), e.hostEl.dirty();
    }
    r.pending.length = 0;
  }
  function Fo(r) {
    return r && r.width && r.height;
  }
  var Lu = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
  function qc(r, t, e, n, i) {
    if (!t)
      return "";
    var a = (r + "").split(`
`);
    i = Zc(t, e, n, i);
    for (var o = 0, s = a.length; o < s; o++)
      a[o] = $c(a[o], i);
    return a.join(`
`);
  }
  function Zc(r, t, e, n) {
    n = n || {};
    var i = O({}, n);
    i.font = t, e = tt(e, "..."), i.maxIterations = tt(n.maxIterations, 2);
    var a = i.minChar = tt(n.minChar, 0);
    i.cnCharWidth = me("国", t);
    var o = i.ascCharWidth = me("a", t);
    i.placeholder = tt(n.placeholder, "");
    for (var s = r = Math.max(0, r - 1), l = 0; l < a && s >= o; l++)
      s -= o;
    var u = me(e, t);
    return u > s && (e = "", u = 0), s = r - u, i.ellipsis = e, i.ellipsisWidth = u, i.contentWidth = s, i.containerWidth = r, i;
  }
  function $c(r, t) {
    var e = t.containerWidth, n = t.font, i = t.contentWidth;
    if (!e)
      return "";
    var a = me(r, n);
    if (a <= e)
      return r;
    for (var o = 0; ; o++) {
      if (a <= i || o >= t.maxIterations) {
        r += t.ellipsis;
        break;
      }
      var s = o === 0 ? NS(r, i, t.ascCharWidth, t.cnCharWidth) : a > 0 ? Math.floor(r.length * i / a) : 0;
      r = r.substr(0, s), a = me(r, n);
    }
    return r === "" && (r = t.placeholder), r;
  }
  function NS(r, t, e, n) {
    for (var i = 0, a = 0, o = r.length; a < o && i < t; a++) {
      var s = r.charCodeAt(a);
      i += 0 <= s && s <= 127 ? e : n;
    }
    return a;
  }
  function FS(r, t) {
    r != null && (r += "");
    var e = t.overflow, n = t.padding, i = t.font, a = e === "truncate", o = du(i), s = tt(t.lineHeight, o), l = !!t.backgroundColor, u = t.lineOverflow === "truncate", f = t.width, h;
    f != null && (e === "break" || e === "breakAll") ? h = r ? Qc(r, t.font, f, e === "breakAll", 0).lines : [] : h = r ? r.split(`
`) : [];
    var c = h.length * s, v = tt(t.height, c);
    if (c > v && u) {
      var d = Math.floor(v / s);
      h = h.slice(0, d);
    }
    if (r && a && f != null)
      for (var g = Zc(f, i, t.ellipsis, {
        minChar: t.truncateMinChar,
        placeholder: t.placeholder
      }), p = 0; p < h.length; p++)
        h[p] = $c(h[p], g);
    for (var y = v, m = 0, p = 0; p < h.length; p++)
      m = Math.max(me(h[p], i), m);
    f == null && (f = m);
    var _ = m;
    return n && (y += n[0] + n[2], _ += n[1] + n[3], f += n[1] + n[3]), l && (_ = f), {
      lines: h,
      height: v,
      outerWidth: _,
      outerHeight: y,
      lineHeight: s,
      calculatedLineHeight: o,
      contentWidth: m,
      contentHeight: c,
      width: f
    };
  }
  var zS = function() {
    function r() {
    }
    return r;
  }(), Kc = function() {
    function r(t) {
      this.tokens = [], t && (this.tokens = t);
    }
    return r;
  }(), GS = function() {
    function r() {
      this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = [];
    }
    return r;
  }();
  function HS(r, t) {
    var e = new GS();
    if (r != null && (r += ""), !r)
      return e;
    for (var n = t.width, i = t.height, a = t.overflow, o = (a === "break" || a === "breakAll") && n != null ? {
      width: n,
      accumWidth: 0,
      breakAll: a === "breakAll"
    } : null, s = Lu.lastIndex = 0, l; (l = Lu.exec(r)) != null; ) {
      var u = l.index;
      u > s && Pu(e, r.substring(s, u), t, o), Pu(e, l[2], t, o, l[1]), s = Lu.lastIndex;
    }
    s < r.length && Pu(e, r.substring(s, r.length), t, o);
    var f = [], h = 0, c = 0, v = t.padding, d = a === "truncate", g = t.lineOverflow === "truncate";
    function p(B, N, U) {
      B.width = N, B.lineHeight = U, h += U, c = Math.max(c, N);
    }
    t:
      for (var y = 0; y < e.lines.length; y++) {
        for (var m = e.lines[y], _ = 0, S = 0, b = 0; b < m.tokens.length; b++) {
          var w = m.tokens[b], x = w.styleName && t.rich[w.styleName] || {}, T = w.textPadding = x.padding, D = T ? T[1] + T[3] : 0, A = w.font = x.font || t.font;
          w.contentHeight = du(A);
          var C = tt(x.height, w.contentHeight);
          if (w.innerHeight = C, T && (C += T[0] + T[2]), w.height = C, w.lineHeight = Ar(x.lineHeight, t.lineHeight, C), w.align = x && x.align || t.align, w.verticalAlign = x && x.verticalAlign || "middle", g && i != null && h + w.lineHeight > i) {
            b > 0 ? (m.tokens = m.tokens.slice(0, b), p(m, S, _), e.lines = e.lines.slice(0, y + 1)) : e.lines = e.lines.slice(0, y);
            break t;
          }
          var L = x.width, P = L == null || L === "auto";
          if (typeof L == "string" && L.charAt(L.length - 1) === "%")
            w.percentWidth = L, f.push(w), w.contentWidth = me(w.text, A);
          else {
            if (P) {
              var I = x.backgroundColor, R = I && I.image;
              R && (R = BS(R), Fo(R) && (w.width = Math.max(w.width, R.width * C / R.height)));
            }
            var E = d && n != null ? n - S : null;
            E != null && E < w.width ? !P || E < D ? (w.text = "", w.width = w.contentWidth = 0) : (w.text = qc(w.text, E - D, A, t.ellipsis, {
              minChar: t.truncateMinChar
            }), w.width = w.contentWidth = me(w.text, A)) : w.contentWidth = me(w.text, A);
          }
          w.width += D, S += w.width, x && (_ = Math.max(_, w.lineHeight));
        }
        p(m, S, _);
      }
    e.outerWidth = e.width = tt(n, c), e.outerHeight = e.height = tt(i, h), e.contentHeight = h, e.contentWidth = c, v && (e.outerWidth += v[1] + v[3], e.outerHeight += v[0] + v[2]);
    for (var y = 0; y < f.length; y++) {
      var w = f[y], Y = w.percentWidth;
      w.width = parseInt(Y, 10) / 100 * e.width;
    }
    return e;
  }
  function Pu(r, t, e, n, i) {
    var a = t === "", o = i && e.rich[i] || {}, s = r.lines, l = o.font || e.font, u = !1, f, h;
    if (n) {
      var c = o.padding, v = c ? c[1] + c[3] : 0;
      if (o.width != null && o.width !== "auto") {
        var d = Br(o.width, n.width) + v;
        s.length > 0 && d + n.accumWidth > n.width && (f = t.split(`
`), u = !0), n.accumWidth = d;
      } else {
        var g = Qc(t, l, n.width, n.breakAll, n.accumWidth);
        n.accumWidth = g.accumWidth + v, h = g.linesWidths, f = g.lines;
      }
    } else
      f = t.split(`
`);
    for (var p = 0; p < f.length; p++) {
      var y = f[p], m = new zS();
      if (m.styleName = i, m.text = y, m.isLineHolder = !y && !a, typeof o.width == "number" ? m.width = o.width : m.width = h ? h[p] : me(y, l), !p && !u) {
        var _ = (s[s.length - 1] || (s[0] = new Kc())).tokens, S = _.length;
        S === 1 && _[0].isLineHolder ? _[0] = m : (y || !S || a) && _.push(m);
      } else
        s.push(new Kc([m]));
    }
  }
  function VS(r) {
    var t = r.charCodeAt(0);
    return t >= 32 && t <= 591 || t >= 880 && t <= 4351 || t >= 4608 && t <= 5119 || t >= 7680 && t <= 8303;
  }
  var WS = Qe(",&?/;] ".split(""), function(r, t) {
    return r[t] = !0, r;
  }, {});
  function US(r) {
    return VS(r) ? !!WS[r] : !0;
  }
  function Qc(r, t, e, n, i) {
    for (var a = [], o = [], s = "", l = "", u = 0, f = 0, h = 0; h < r.length; h++) {
      var c = r.charAt(h);
      if (c === `
`) {
        l && (s += l, f += u), a.push(s), o.push(f), s = "", l = "", u = 0, f = 0;
        continue;
      }
      var v = me(c, t), d = n ? !1 : !US(c);
      if (a.length ? f + v > e : i + f + v > e) {
        f ? (s || l) && (d ? (s || (s = l, l = "", u = 0, f = u), a.push(s), o.push(f - u), l += c, u += v, s = "", f = u) : (l && (s += l, l = "", u = 0), a.push(s), o.push(f), s = c, f = v)) : d ? (a.push(l), o.push(u), l = c, u = v) : (a.push(c), o.push(v));
        continue;
      }
      f += v, d ? (l += c, u += v) : (l && (s += l, l = "", u = 0), s += c);
    }
    return !a.length && !s && (s = r, l = "", u = 0), l && (s += l), s && (a.push(s), o.push(f)), a.length === 1 && (f += i), {
      accumWidth: f,
      lines: a,
      linesWidths: o
    };
  }
  var Iu = "__zr_style_" + Math.round(Math.random() * 10), Sn = {
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: "#000",
    opacity: 1,
    blend: "source-over"
  }, zo = {
    style: {
      shadowBlur: !0,
      shadowOffsetX: !0,
      shadowOffsetY: !0,
      shadowColor: !0,
      opacity: !0
    }
  };
  Sn[Iu] = !0;
  var jc = ["z", "z2", "invisible"], YS = ["invisible"], aa = function(r) {
    k(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return t.prototype._init = function(e) {
      for (var n = yt(e), i = 0; i < n.length; i++) {
        var a = n[i];
        a === "style" ? this.useStyle(e[a]) : r.prototype.attrKV.call(this, a, e[a]);
      }
      this.style || this.useStyle({});
    }, t.prototype.beforeBrush = function() {
    }, t.prototype.afterBrush = function() {
    }, t.prototype.innerBeforeBrush = function() {
    }, t.prototype.innerAfterBrush = function() {
    }, t.prototype.shouldBePainted = function(e, n, i, a) {
      var o = this.transform;
      if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && XS(this, e, n) || o && !o[0] && !o[3])
        return !1;
      if (i && this.__clipPaths) {
        for (var s = 0; s < this.__clipPaths.length; ++s)
          if (this.__clipPaths[s].isZeroArea())
            return !1;
      }
      if (a && this.parent)
        for (var l = this.parent; l; ) {
          if (l.ignore)
            return !1;
          l = l.parent;
        }
      return !0;
    }, t.prototype.contain = function(e, n) {
      return this.rectContain(e, n);
    }, t.prototype.traverse = function(e, n) {
      e.call(n, this);
    }, t.prototype.rectContain = function(e, n) {
      var i = this.transformCoordToLocal(e, n), a = this.getBoundingRect();
      return a.contain(i[0], i[1]);
    }, t.prototype.getPaintRect = function() {
      var e = this._paintRect;
      if (!this._paintRect || this.__dirty) {
        var n = this.transform, i = this.getBoundingRect(), a = this.style, o = a.shadowBlur || 0, s = a.shadowOffsetX || 0, l = a.shadowOffsetY || 0;
        e = this._paintRect || (this._paintRect = new it(0, 0, 0, 0)), n ? it.applyTransform(e, i, n) : e.copy(i), (o || s || l) && (e.width += o * 2 + Math.abs(s), e.height += o * 2 + Math.abs(l), e.x = Math.min(e.x, e.x + s - o), e.y = Math.min(e.y, e.y + l - o));
        var u = this.dirtyRectTolerance;
        e.isZero() || (e.x = Math.floor(e.x - u), e.y = Math.floor(e.y - u), e.width = Math.ceil(e.width + 1 + u * 2), e.height = Math.ceil(e.height + 1 + u * 2));
      }
      return e;
    }, t.prototype.setPrevPaintRect = function(e) {
      e ? (this._prevPaintRect = this._prevPaintRect || new it(0, 0, 0, 0), this._prevPaintRect.copy(e)) : this._prevPaintRect = null;
    }, t.prototype.getPrevPaintRect = function() {
      return this._prevPaintRect;
    }, t.prototype.animateStyle = function(e) {
      return this.animate("style", e);
    }, t.prototype.updateDuringAnimation = function(e) {
      e === "style" ? this.dirtyStyle() : this.markRedraw();
    }, t.prototype.attrKV = function(e, n) {
      e !== "style" ? r.prototype.attrKV.call(this, e, n) : this.style ? this.setStyle(n) : this.useStyle(n);
    }, t.prototype.setStyle = function(e, n) {
      return typeof e == "string" ? this.style[e] = n : O(this.style, e), this.dirtyStyle(), this;
    }, t.prototype.dirtyStyle = function(e) {
      e || this.markRedraw(), this.__dirty |= Vi, this._rect && (this._rect = null);
    }, t.prototype.dirty = function() {
      this.dirtyStyle();
    }, t.prototype.styleChanged = function() {
      return !!(this.__dirty & Vi);
    }, t.prototype.styleUpdated = function() {
      this.__dirty &= ~Vi;
    }, t.prototype.createStyle = function(e) {
      return Bi(Sn, e);
    }, t.prototype.useStyle = function(e) {
      e[Iu] || (e = this.createStyle(e)), this.__inHover ? this.__hoverStyle = e : this.style = e, this.dirtyStyle();
    }, t.prototype.isStyleObject = function(e) {
      return e[Iu];
    }, t.prototype._innerSaveToNormal = function(e) {
      r.prototype._innerSaveToNormal.call(this, e);
      var n = this._normalState;
      e.style && !n.style && (n.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(e, n, jc);
    }, t.prototype._applyStateObj = function(e, n, i, a, o, s) {
      r.prototype._applyStateObj.call(this, e, n, i, a, o, s);
      var l = !(n && a), u;
      if (n && n.style ? o ? a ? u = n.style : (u = this._mergeStyle(this.createStyle(), i.style), this._mergeStyle(u, n.style)) : (u = this._mergeStyle(this.createStyle(), a ? this.style : i.style), this._mergeStyle(u, n.style)) : l && (u = i.style), u)
        if (o) {
          var f = this.style;
          if (this.style = this.createStyle(l ? {} : f), l)
            for (var h = yt(f), c = 0; c < h.length; c++) {
              var v = h[c];
              v in u && (u[v] = u[v], this.style[v] = f[v]);
            }
          for (var d = yt(u), c = 0; c < d.length; c++) {
            var v = d[c];
            this.style[v] = this.style[v];
          }
          this._transitionState(e, {
            style: u
          }, s, this.getAnimationStyleProps());
        } else
          this.useStyle(u);
      for (var g = this.__inHover ? YS : jc, c = 0; c < g.length; c++) {
        var v = g[c];
        n && n[v] != null ? this[v] = n[v] : l && i[v] != null && (this[v] = i[v]);
      }
    }, t.prototype._mergeStates = function(e) {
      for (var n = r.prototype._mergeStates.call(this, e), i, a = 0; a < e.length; a++) {
        var o = e[a];
        o.style && (i = i || {}, this._mergeStyle(i, o.style));
      }
      return i && (n.style = i), n;
    }, t.prototype._mergeStyle = function(e, n) {
      return O(e, n), e;
    }, t.prototype.getAnimationStyleProps = function() {
      return zo;
    }, t.initDefaultProps = function() {
      var e = t.prototype;
      e.type = "displayable", e.invisible = !1, e.z = 0, e.z2 = 0, e.zlevel = 0, e.culling = !1, e.cursor = "pointer", e.rectHover = !1, e.incremental = !1, e._rect = null, e.dirtyRectTolerance = 0, e.__dirty = ge | Vi;
    }(), t;
  }(Ro), Ru = new it(0, 0, 0, 0), Eu = new it(0, 0, 0, 0);
  function XS(r, t, e) {
    return Ru.copy(r.getBoundingRect()), r.transform && Ru.applyTransform(r.transform), Eu.width = t, Eu.height = e, !Ru.intersect(Eu);
  }
  var Ae = Math.min, Le = Math.max, ku = Math.sin, Ou = Math.cos, wn = Math.PI * 2, Go = sn(), Ho = sn(), Vo = sn();
  function Jc(r, t, e, n, i, a) {
    i[0] = Ae(r, e), i[1] = Ae(t, n), a[0] = Le(r, e), a[1] = Le(t, n);
  }
  var td = [], ed = [];
  function qS(r, t, e, n, i, a, o, s, l, u) {
    var f = ec, h = Et, c = f(r, e, i, o, td);
    l[0] = 1 / 0, l[1] = 1 / 0, u[0] = -1 / 0, u[1] = -1 / 0;
    for (var v = 0; v < c; v++) {
      var d = h(r, e, i, o, td[v]);
      l[0] = Ae(d, l[0]), u[0] = Le(d, u[0]);
    }
    c = f(t, n, a, s, ed);
    for (var v = 0; v < c; v++) {
      var g = h(t, n, a, s, ed[v]);
      l[1] = Ae(g, l[1]), u[1] = Le(g, u[1]);
    }
    l[0] = Ae(r, l[0]), u[0] = Le(r, u[0]), l[0] = Ae(o, l[0]), u[0] = Le(o, u[0]), l[1] = Ae(t, l[1]), u[1] = Le(t, u[1]), l[1] = Ae(s, l[1]), u[1] = Le(s, u[1]);
  }
  function ZS(r, t, e, n, i, a, o, s) {
    var l = ic, u = Ht, f = Le(Ae(l(r, e, i), 1), 0), h = Le(Ae(l(t, n, a), 1), 0), c = u(r, e, i, f), v = u(t, n, a, h);
    o[0] = Ae(r, i, c), o[1] = Ae(t, a, v), s[0] = Le(r, i, c), s[1] = Le(t, a, v);
  }
  function $S(r, t, e, n, i, a, o, s, l) {
    var u = Lr, f = Pr, h = Math.abs(i - a);
    if (h % wn < 1e-4 && h > 1e-4) {
      s[0] = r - e, s[1] = t - n, l[0] = r + e, l[1] = t + n;
      return;
    }
    if (Go[0] = Ou(i) * e + r, Go[1] = ku(i) * n + t, Ho[0] = Ou(a) * e + r, Ho[1] = ku(a) * n + t, u(s, Go, Ho), f(l, Go, Ho), i = i % wn, i < 0 && (i = i + wn), a = a % wn, a < 0 && (a = a + wn), i > a && !o ? a += wn : i < a && o && (i += wn), o) {
      var c = a;
      a = i, i = c;
    }
    for (var v = 0; v < a; v += Math.PI / 2)
      v > i && (Vo[0] = Ou(v) * e + r, Vo[1] = ku(v) * n + t, u(s, Vo, s), f(l, Vo, l));
  }
  var ft = {
    M: 1,
    L: 2,
    C: 3,
    Q: 4,
    A: 5,
    Z: 6,
    R: 7
  }, bn = [], xn = [], nr = [], Nr = [], ir = [], ar = [], Bu = Math.min, Nu = Math.max, Tn = Math.cos, Cn = Math.sin, dr = Math.abs, Fu = Math.PI, Fr = Fu * 2, zu = typeof Float32Array < "u", oa = [];
  function Gu(r) {
    var t = Math.round(r / Fu * 1e8) / 1e8;
    return t % 2 * Fu;
  }
  function KS(r, t) {
    var e = Gu(r[0]);
    e < 0 && (e += Fr);
    var n = e - r[0], i = r[1];
    i += n, !t && i - e >= Fr ? i = e + Fr : t && e - i >= Fr ? i = e - Fr : !t && e > i ? i = e + (Fr - Gu(e - i)) : t && e < i && (i = e - (Fr - Gu(i - e))), r[0] = e, r[1] = i;
  }
  var zr = function() {
    function r(t) {
      this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, t && (this._saveData = !1), this._saveData && (this.data = []);
    }
    return r.prototype.increaseVersion = function() {
      this._version++;
    }, r.prototype.getVersion = function() {
      return this._version;
    }, r.prototype.setScale = function(t, e, n) {
      n = n || 0, n > 0 && (this._ux = dr(n / Lo / t) || 0, this._uy = dr(n / Lo / e) || 0);
    }, r.prototype.setDPR = function(t) {
      this.dpr = t;
    }, r.prototype.setContext = function(t) {
      this._ctx = t;
    }, r.prototype.getContext = function() {
      return this._ctx;
    }, r.prototype.beginPath = function() {
      return this._ctx && this._ctx.beginPath(), this.reset(), this;
    }, r.prototype.reset = function() {
      this._saveData && (this._len = 0), this._pathSegLen && (this._pathSegLen = null, this._pathLen = 0), this._version++;
    }, r.prototype.moveTo = function(t, e) {
      return this._drawPendingPt(), this.addData(ft.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this;
    }, r.prototype.lineTo = function(t, e) {
      var n = dr(t - this._xi), i = dr(e - this._yi), a = n > this._ux || i > this._uy;
      if (this.addData(ft.L, t, e), this._ctx && a && this._ctx.lineTo(t, e), a)
        this._xi = t, this._yi = e, this._pendingPtDist = 0;
      else {
        var o = n * n + i * i;
        o > this._pendingPtDist && (this._pendingPtX = t, this._pendingPtY = e, this._pendingPtDist = o);
      }
      return this;
    }, r.prototype.bezierCurveTo = function(t, e, n, i, a, o) {
      return this._drawPendingPt(), this.addData(ft.C, t, e, n, i, a, o), this._ctx && this._ctx.bezierCurveTo(t, e, n, i, a, o), this._xi = a, this._yi = o, this;
    }, r.prototype.quadraticCurveTo = function(t, e, n, i) {
      return this._drawPendingPt(), this.addData(ft.Q, t, e, n, i), this._ctx && this._ctx.quadraticCurveTo(t, e, n, i), this._xi = n, this._yi = i, this;
    }, r.prototype.arc = function(t, e, n, i, a, o) {
      this._drawPendingPt(), oa[0] = i, oa[1] = a, KS(oa, o), i = oa[0], a = oa[1];
      var s = a - i;
      return this.addData(ft.A, t, e, n, n, i, s, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, a, o), this._xi = Tn(a) * n + t, this._yi = Cn(a) * n + e, this;
    }, r.prototype.arcTo = function(t, e, n, i, a) {
      return this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, e, n, i, a), this;
    }, r.prototype.rect = function(t, e, n, i) {
      return this._drawPendingPt(), this._ctx && this._ctx.rect(t, e, n, i), this.addData(ft.R, t, e, n, i), this;
    }, r.prototype.closePath = function() {
      this._drawPendingPt(), this.addData(ft.Z);
      var t = this._ctx, e = this._x0, n = this._y0;
      return t && t.closePath(), this._xi = e, this._yi = n, this;
    }, r.prototype.fill = function(t) {
      t && t.fill(), this.toStatic();
    }, r.prototype.stroke = function(t) {
      t && t.stroke(), this.toStatic();
    }, r.prototype.len = function() {
      return this._len;
    }, r.prototype.setData = function(t) {
      var e = t.length;
      !(this.data && this.data.length === e) && zu && (this.data = new Float32Array(e));
      for (var n = 0; n < e; n++)
        this.data[n] = t[n];
      this._len = e;
    }, r.prototype.appendPath = function(t) {
      t instanceof Array || (t = [t]);
      for (var e = t.length, n = 0, i = this._len, a = 0; a < e; a++)
        n += t[a].len();
      zu && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
      for (var a = 0; a < e; a++)
        for (var o = t[a].data, s = 0; s < o.length; s++)
          this.data[i++] = o[s];
      this._len = i;
    }, r.prototype.addData = function(t, e, n, i, a, o, s, l, u) {
      if (this._saveData) {
        var f = this.data;
        this._len + arguments.length > f.length && (this._expandData(), f = this.data);
        for (var h = 0; h < arguments.length; h++)
          f[this._len++] = arguments[h];
      }
    }, r.prototype._drawPendingPt = function() {
      this._pendingPtDist > 0 && (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY), this._pendingPtDist = 0);
    }, r.prototype._expandData = function() {
      if (!(this.data instanceof Array)) {
        for (var t = [], e = 0; e < this._len; e++)
          t[e] = this.data[e];
        this.data = t;
      }
    }, r.prototype.toStatic = function() {
      if (this._saveData) {
        this._drawPendingPt();
        var t = this.data;
        t instanceof Array && (t.length = this._len, zu && this._len > 11 && (this.data = new Float32Array(t)));
      }
    }, r.prototype.getBoundingRect = function() {
      nr[0] = nr[1] = ir[0] = ir[1] = Number.MAX_VALUE, Nr[0] = Nr[1] = ar[0] = ar[1] = -Number.MAX_VALUE;
      var t = this.data, e = 0, n = 0, i = 0, a = 0, o;
      for (o = 0; o < this._len; ) {
        var s = t[o++], l = o === 1;
        switch (l && (e = t[o], n = t[o + 1], i = e, a = n), s) {
          case ft.M:
            e = i = t[o++], n = a = t[o++], ir[0] = i, ir[1] = a, ar[0] = i, ar[1] = a;
            break;
          case ft.L:
            Jc(e, n, t[o], t[o + 1], ir, ar), e = t[o++], n = t[o++];
            break;
          case ft.C:
            qS(e, n, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], ir, ar), e = t[o++], n = t[o++];
            break;
          case ft.Q:
            ZS(e, n, t[o++], t[o++], t[o], t[o + 1], ir, ar), e = t[o++], n = t[o++];
            break;
          case ft.A:
            var u = t[o++], f = t[o++], h = t[o++], c = t[o++], v = t[o++], d = t[o++] + v;
            o += 1;
            var g = !t[o++];
            l && (i = Tn(v) * h + u, a = Cn(v) * c + f), $S(u, f, h, c, v, d, g, ir, ar), e = Tn(d) * h + u, n = Cn(d) * c + f;
            break;
          case ft.R:
            i = e = t[o++], a = n = t[o++];
            var p = t[o++], y = t[o++];
            Jc(i, a, i + p, a + y, ir, ar);
            break;
          case ft.Z:
            e = i, n = a;
            break;
        }
        Lr(nr, nr, ir), Pr(Nr, Nr, ar);
      }
      return o === 0 && (nr[0] = nr[1] = Nr[0] = Nr[1] = 0), new it(nr[0], nr[1], Nr[0] - nr[0], Nr[1] - nr[1]);
    }, r.prototype._calculateLength = function() {
      var t = this.data, e = this._len, n = this._ux, i = this._uy, a = 0, o = 0, s = 0, l = 0;
      this._pathSegLen || (this._pathSegLen = []);
      for (var u = this._pathSegLen, f = 0, h = 0, c = 0; c < e; ) {
        var v = t[c++], d = c === 1;
        d && (a = t[c], o = t[c + 1], s = a, l = o);
        var g = -1;
        switch (v) {
          case ft.M:
            a = s = t[c++], o = l = t[c++];
            break;
          case ft.L: {
            var p = t[c++], y = t[c++], m = p - a, _ = y - o;
            (dr(m) > n || dr(_) > i || c === e - 1) && (g = Math.sqrt(m * m + _ * _), a = p, o = y);
            break;
          }
          case ft.C: {
            var S = t[c++], b = t[c++], p = t[c++], y = t[c++], w = t[c++], x = t[c++];
            g = l1(a, o, S, b, p, y, w, x, 10), a = w, o = x;
            break;
          }
          case ft.Q: {
            var S = t[c++], b = t[c++], p = t[c++], y = t[c++];
            g = f1(a, o, S, b, p, y, 10), a = p, o = y;
            break;
          }
          case ft.A:
            var T = t[c++], D = t[c++], A = t[c++], C = t[c++], L = t[c++], P = t[c++], I = P + L;
            c += 1, t[c++], d && (s = Tn(L) * A + T, l = Cn(L) * C + D), g = Nu(A, C) * Bu(Fr, Math.abs(P)), a = Tn(I) * A + T, o = Cn(I) * C + D;
            break;
          case ft.R: {
            s = a = t[c++], l = o = t[c++];
            var R = t[c++], E = t[c++];
            g = R * 2 + E * 2;
            break;
          }
          case ft.Z: {
            var m = s - a, _ = l - o;
            g = Math.sqrt(m * m + _ * _), a = s, o = l;
            break;
          }
        }
        g >= 0 && (u[h++] = g, f += g);
      }
      return this._pathLen = f, f;
    }, r.prototype.rebuildPath = function(t, e) {
      var n = this.data, i = this._ux, a = this._uy, o = this._len, s, l, u, f, h, c, v = e < 1, d, g, p = 0, y = 0, m, _ = 0, S, b;
      if (!(v && (this._pathSegLen || this._calculateLength(), d = this._pathSegLen, g = this._pathLen, m = e * g, !m)))
        t:
          for (var w = 0; w < o; ) {
            var x = n[w++], T = w === 1;
            switch (T && (u = n[w], f = n[w + 1], s = u, l = f), x !== ft.L && _ > 0 && (t.lineTo(S, b), _ = 0), x) {
              case ft.M:
                s = u = n[w++], l = f = n[w++], t.moveTo(u, f);
                break;
              case ft.L: {
                h = n[w++], c = n[w++];
                var D = dr(h - u), A = dr(c - f);
                if (D > i || A > a) {
                  if (v) {
                    var C = d[y++];
                    if (p + C > m) {
                      var L = (m - p) / C;
                      t.lineTo(u * (1 - L) + h * L, f * (1 - L) + c * L);
                      break t;
                    }
                    p += C;
                  }
                  t.lineTo(h, c), u = h, f = c, _ = 0;
                } else {
                  var P = D * D + A * A;
                  P > _ && (S = h, b = c, _ = P);
                }
                break;
              }
              case ft.C: {
                var I = n[w++], R = n[w++], E = n[w++], Y = n[w++], B = n[w++], N = n[w++];
                if (v) {
                  var C = d[y++];
                  if (p + C > m) {
                    var L = (m - p) / C;
                    _o(u, I, E, B, L, bn), _o(f, R, Y, N, L, xn), t.bezierCurveTo(bn[1], xn[1], bn[2], xn[2], bn[3], xn[3]);
                    break t;
                  }
                  p += C;
                }
                t.bezierCurveTo(I, R, E, Y, B, N), u = B, f = N;
                break;
              }
              case ft.Q: {
                var I = n[w++], R = n[w++], E = n[w++], Y = n[w++];
                if (v) {
                  var C = d[y++];
                  if (p + C > m) {
                    var L = (m - p) / C;
                    So(u, I, E, L, bn), So(f, R, Y, L, xn), t.quadraticCurveTo(bn[1], xn[1], bn[2], xn[2]);
                    break t;
                  }
                  p += C;
                }
                t.quadraticCurveTo(I, R, E, Y), u = E, f = Y;
                break;
              }
              case ft.A:
                var U = n[w++], K = n[w++], $ = n[w++], rt = n[w++], vt = n[w++], Nt = n[w++], _t = n[w++], ce = !n[w++], we = $ > rt ? $ : rt, Gt = dr($ - rt) > 1e-3, Pt = vt + Nt, Z = !1;
                if (v) {
                  var C = d[y++];
                  p + C > m && (Pt = vt + Nt * (m - p) / C, Z = !0), p += C;
                }
                if (Gt && t.ellipse ? t.ellipse(U, K, $, rt, _t, vt, Pt, ce) : t.arc(U, K, we, vt, Pt, ce), Z)
                  break t;
                T && (s = Tn(vt) * $ + U, l = Cn(vt) * rt + K), u = Tn(Pt) * $ + U, f = Cn(Pt) * rt + K;
                break;
              case ft.R:
                s = u = n[w], l = f = n[w + 1], h = n[w++], c = n[w++];
                var et = n[w++], vr = n[w++];
                if (v) {
                  var C = d[y++];
                  if (p + C > m) {
                    var Ft = m - p;
                    t.moveTo(h, c), t.lineTo(h + Bu(Ft, et), c), Ft -= et, Ft > 0 && t.lineTo(h + et, c + Bu(Ft, vr)), Ft -= vr, Ft > 0 && t.lineTo(h + Nu(et - Ft, 0), c + vr), Ft -= et, Ft > 0 && t.lineTo(h, c + Nu(vr - Ft, 0));
                    break t;
                  }
                  p += C;
                }
                t.rect(h, c, et, vr);
                break;
              case ft.Z:
                if (v) {
                  var C = d[y++];
                  if (p + C > m) {
                    var L = (m - p) / C;
                    t.lineTo(u * (1 - L) + s * L, f * (1 - L) + l * L);
                    break t;
                  }
                  p += C;
                }
                t.closePath(), u = s, f = l;
            }
          }
    }, r.prototype.clone = function() {
      var t = new r(), e = this.data;
      return t.data = e.slice ? e.slice() : Array.prototype.slice.call(e), t._len = this._len, t;
    }, r.CMD = ft, r.initDefaultProps = function() {
      var t = r.prototype;
      t._saveData = !0, t._ux = 0, t._uy = 0, t._pendingPtDist = 0, t._version = 0;
    }(), r;
  }();
  function ui(r, t, e, n, i, a, o) {
    if (i === 0)
      return !1;
    var s = i, l = 0, u = r;
    if (o > t + s && o > n + s || o < t - s && o < n - s || a > r + s && a > e + s || a < r - s && a < e - s)
      return !1;
    if (r !== e)
      l = (t - n) / (r - e), u = (r * n - e * t) / (r - e);
    else
      return Math.abs(a - r) <= s / 2;
    var f = l * a - o + u, h = f * f / (l * l + 1);
    return h <= s / 2 * s / 2;
  }
  function QS(r, t, e, n, i, a, o, s, l, u, f) {
    if (l === 0)
      return !1;
    var h = l;
    if (f > t + h && f > n + h && f > a + h && f > s + h || f < t - h && f < n - h && f < a - h && f < s - h || u > r + h && u > e + h && u > i + h && u > o + h || u < r - h && u < e - h && u < i - h && u < o - h)
      return !1;
    var c = rc(r, t, e, n, i, a, o, s, u, f, null);
    return c <= h / 2;
  }
  function jS(r, t, e, n, i, a, o, s, l) {
    if (o === 0)
      return !1;
    var u = o;
    if (l > t + u && l > n + u && l > a + u || l < t - u && l < n - u && l < a - u || s > r + u && s > e + u && s > i + u || s < r - u && s < e - u && s < i - u)
      return !1;
    var f = ac(r, t, e, n, i, a, s, l, null);
    return f <= u / 2;
  }
  var rd = Math.PI * 2;
  function Gr(r) {
    return r %= rd, r < 0 && (r += rd), r;
  }
  var sa = Math.PI * 2;
  function JS(r, t, e, n, i, a, o, s, l) {
    if (o === 0)
      return !1;
    var u = o;
    s -= r, l -= t;
    var f = Math.sqrt(s * s + l * l);
    if (f - u > e || f + u < e)
      return !1;
    if (Math.abs(n - i) % sa < 1e-4)
      return !0;
    if (a) {
      var h = n;
      n = Gr(i), i = Gr(h);
    } else
      n = Gr(n), i = Gr(i);
    n > i && (i += sa);
    var c = Math.atan2(l, s);
    return c < 0 && (c += sa), c >= n && c <= i || c + sa >= n && c + sa <= i;
  }
  function pr(r, t, e, n, i, a) {
    if (a > t && a > n || a < t && a < n || n === t)
      return 0;
    var o = (a - t) / (n - t), s = n < t ? 1 : -1;
    (o === 1 || o === 0) && (s = n < t ? 0.5 : -0.5);
    var l = o * (e - r) + r;
    return l === i ? 1 / 0 : l > i ? s : 0;
  }
  var Hr = zr.CMD, Dn = Math.PI * 2, tw = 1e-4;
  function ew(r, t) {
    return Math.abs(r - t) < tw;
  }
  var te = [-1, -1, -1], Pe = [-1, -1];
  function rw() {
    var r = Pe[0];
    Pe[0] = Pe[1], Pe[1] = r;
  }
  function nw(r, t, e, n, i, a, o, s, l, u) {
    if (u > t && u > n && u > a && u > s || u < t && u < n && u < a && u < s)
      return 0;
    var f = mo(t, n, a, s, u, te);
    if (f === 0)
      return 0;
    for (var h = 0, c = -1, v = void 0, d = void 0, g = 0; g < f; g++) {
      var p = te[g], y = p === 0 || p === 1 ? 0.5 : 1, m = Et(r, e, i, o, p);
      m < l || (c < 0 && (c = ec(t, n, a, s, Pe), Pe[1] < Pe[0] && c > 1 && rw(), v = Et(t, n, a, s, Pe[0]), c > 1 && (d = Et(t, n, a, s, Pe[1]))), c === 2 ? p < Pe[0] ? h += v < t ? y : -y : p < Pe[1] ? h += d < v ? y : -y : h += s < d ? y : -y : p < Pe[0] ? h += v < t ? y : -y : h += s < v ? y : -y);
    }
    return h;
  }
  function iw(r, t, e, n, i, a, o, s) {
    if (s > t && s > n && s > a || s < t && s < n && s < a)
      return 0;
    var l = u1(t, n, a, s, te);
    if (l === 0)
      return 0;
    var u = ic(t, n, a);
    if (u >= 0 && u <= 1) {
      for (var f = 0, h = Ht(t, n, a, u), c = 0; c < l; c++) {
        var v = te[c] === 0 || te[c] === 1 ? 0.5 : 1, d = Ht(r, e, i, te[c]);
        d < o || (te[c] < u ? f += h < t ? v : -v : f += a < h ? v : -v);
      }
      return f;
    } else {
      var v = te[0] === 0 || te[0] === 1 ? 0.5 : 1, d = Ht(r, e, i, te[0]);
      return d < o ? 0 : a < t ? v : -v;
    }
  }
  function aw(r, t, e, n, i, a, o, s) {
    if (s -= t, s > e || s < -e)
      return 0;
    var l = Math.sqrt(e * e - s * s);
    te[0] = -l, te[1] = l;
    var u = Math.abs(n - i);
    if (u < 1e-4)
      return 0;
    if (u >= Dn - 1e-4) {
      n = 0, i = Dn;
      var f = a ? 1 : -1;
      return o >= te[0] + r && o <= te[1] + r ? f : 0;
    }
    if (n > i) {
      var h = n;
      n = i, i = h;
    }
    n < 0 && (n += Dn, i += Dn);
    for (var c = 0, v = 0; v < 2; v++) {
      var d = te[v];
      if (d + r > o) {
        var g = Math.atan2(s, d), f = a ? 1 : -1;
        g < 0 && (g = Dn + g), (g >= n && g <= i || g + Dn >= n && g + Dn <= i) && (g > Math.PI / 2 && g < Math.PI * 1.5 && (f = -f), c += f);
      }
    }
    return c;
  }
  function nd(r, t, e, n, i) {
    for (var a = r.data, o = r.len(), s = 0, l = 0, u = 0, f = 0, h = 0, c, v, d = 0; d < o; ) {
      var g = a[d++], p = d === 1;
      switch (g === Hr.M && d > 1 && (e || (s += pr(l, u, f, h, n, i))), p && (l = a[d], u = a[d + 1], f = l, h = u), g) {
        case Hr.M:
          f = a[d++], h = a[d++], l = f, u = h;
          break;
        case Hr.L:
          if (e) {
            if (ui(l, u, a[d], a[d + 1], t, n, i))
              return !0;
          } else
            s += pr(l, u, a[d], a[d + 1], n, i) || 0;
          l = a[d++], u = a[d++];
          break;
        case Hr.C:
          if (e) {
            if (QS(l, u, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], t, n, i))
              return !0;
          } else
            s += nw(l, u, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], n, i) || 0;
          l = a[d++], u = a[d++];
          break;
        case Hr.Q:
          if (e) {
            if (jS(l, u, a[d++], a[d++], a[d], a[d + 1], t, n, i))
              return !0;
          } else
            s += iw(l, u, a[d++], a[d++], a[d], a[d + 1], n, i) || 0;
          l = a[d++], u = a[d++];
          break;
        case Hr.A:
          var y = a[d++], m = a[d++], _ = a[d++], S = a[d++], b = a[d++], w = a[d++];
          d += 1;
          var x = !!(1 - a[d++]);
          c = Math.cos(b) * _ + y, v = Math.sin(b) * S + m, p ? (f = c, h = v) : s += pr(l, u, c, v, n, i);
          var T = (n - y) * S / _ + y;
          if (e) {
            if (JS(y, m, S, b, b + w, x, t, T, i))
              return !0;
          } else
            s += aw(y, m, S, b, b + w, x, T, i);
          l = Math.cos(b + w) * _ + y, u = Math.sin(b + w) * S + m;
          break;
        case Hr.R:
          f = l = a[d++], h = u = a[d++];
          var D = a[d++], A = a[d++];
          if (c = f + D, v = h + A, e) {
            if (ui(f, h, c, h, t, n, i) || ui(c, h, c, v, t, n, i) || ui(c, v, f, v, t, n, i) || ui(f, v, f, h, t, n, i))
              return !0;
          } else
            s += pr(c, h, c, v, n, i), s += pr(f, v, f, h, n, i);
          break;
        case Hr.Z:
          if (e) {
            if (ui(l, u, f, h, t, n, i))
              return !0;
          } else
            s += pr(l, u, f, h, n, i);
          l = f, u = h;
          break;
      }
    }
    return !e && !ew(u, h) && (s += pr(l, u, f, h, n, i) || 0), s !== 0;
  }
  function ow(r, t, e) {
    return nd(r, 0, !1, t, e);
  }
  function sw(r, t, e, n) {
    return nd(r, t, !0, e, n);
  }
  var id = lt({
    fill: "#000",
    stroke: null,
    strokePercent: 1,
    fillOpacity: 1,
    strokeOpacity: 1,
    lineDashOffset: 0,
    lineWidth: 1,
    lineCap: "butt",
    miterLimit: 10,
    strokeNoScale: !1,
    strokeFirst: !1
  }, Sn), lw = {
    style: lt({
      fill: !0,
      stroke: !0,
      strokePercent: !0,
      fillOpacity: !0,
      strokeOpacity: !0,
      lineDashOffset: !0,
      lineWidth: !0,
      miterLimit: !0
    }, zo.style)
  }, Hu = $i.concat(["invisible", "culling", "z", "z2", "zlevel", "parent"]), ht = function(r) {
    k(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return t.prototype.update = function() {
      var e = this;
      r.prototype.update.call(this);
      var n = this.style;
      if (n.decal) {
        var i = this._decalEl = this._decalEl || new t();
        i.buildPath === t.prototype.buildPath && (i.buildPath = function(l) {
          e.buildPath(l, e.shape);
        }), i.silent = !0;
        var a = i.style;
        for (var o in n)
          a[o] !== n[o] && (a[o] = n[o]);
        a.fill = n.fill ? n.decal : null, a.decal = null, a.shadowColor = null, n.strokeFirst && (a.stroke = null);
        for (var s = 0; s < Hu.length; ++s)
          i[Hu[s]] = this[Hu[s]];
        i.__dirty |= ge;
      } else
        this._decalEl && (this._decalEl = null);
    }, t.prototype.getDecalElement = function() {
      return this._decalEl;
    }, t.prototype._init = function(e) {
      var n = yt(e);
      this.shape = this.getDefaultShape();
      var i = this.getDefaultStyle();
      i && this.useStyle(i);
      for (var a = 0; a < n.length; a++) {
        var o = n[a], s = e[o];
        o === "style" ? this.style ? O(this.style, s) : this.useStyle(s) : o === "shape" ? O(this.shape, s) : r.prototype.attrKV.call(this, o, s);
      }
      this.style || this.useStyle({});
    }, t.prototype.getDefaultStyle = function() {
      return null;
    }, t.prototype.getDefaultShape = function() {
      return {};
    }, t.prototype.canBeInsideText = function() {
      return this.hasFill();
    }, t.prototype.getInsideTextFill = function() {
      var e = this.style.fill;
      if (e !== "none") {
        if (H(e)) {
          var n = Xi(e, 0);
          return n > 0.5 ? uu : n > 0.2 ? F1 : fu;
        } else if (e)
          return fu;
      }
      return uu;
    }, t.prototype.getInsideTextStroke = function(e) {
      var n = this.style.fill;
      if (H(n)) {
        var i = this.__zr, a = !!(i && i.isDarkMode()), o = Xi(e, 0) < lu;
        if (a === o)
          return n;
      }
    }, t.prototype.buildPath = function(e, n, i) {
    }, t.prototype.pathUpdated = function() {
      this.__dirty &= ~ei;
    }, t.prototype.getUpdatedPathProxy = function(e) {
      return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, e), this.path;
    }, t.prototype.createPathProxy = function() {
      this.path = new zr(!1);
    }, t.prototype.hasStroke = function() {
      var e = this.style, n = e.stroke;
      return !(n == null || n === "none" || !(e.lineWidth > 0));
    }, t.prototype.hasFill = function() {
      var e = this.style, n = e.fill;
      return n != null && n !== "none";
    }, t.prototype.getBoundingRect = function() {
      var e = this._rect, n = this.style, i = !e;
      if (i) {
        var a = !1;
        this.path || (a = !0, this.createPathProxy());
        var o = this.path;
        (a || this.__dirty & ei) && (o.beginPath(), this.buildPath(o, this.shape, !1), this.pathUpdated()), e = o.getBoundingRect();
      }
      if (this._rect = e, this.hasStroke() && this.path && this.path.len() > 0) {
        var s = this._rectStroke || (this._rectStroke = e.clone());
        if (this.__dirty || i) {
          s.copy(e);
          var l = n.strokeNoScale ? this.getLineScale() : 1, u = n.lineWidth;
          if (!this.hasFill()) {
            var f = this.strokeContainThreshold;
            u = Math.max(u, f ?? 4);
          }
          l > 1e-10 && (s.width += u / l, s.height += u / l, s.x -= u / l / 2, s.y -= u / l / 2);
        }
        return s;
      }
      return e;
    }, t.prototype.contain = function(e, n) {
      var i = this.transformCoordToLocal(e, n), a = this.getBoundingRect(), o = this.style;
      if (e = i[0], n = i[1], a.contain(e, n)) {
        var s = this.path;
        if (this.hasStroke()) {
          var l = o.lineWidth, u = o.strokeNoScale ? this.getLineScale() : 1;
          if (u > 1e-10 && (this.hasFill() || (l = Math.max(l, this.strokeContainThreshold)), sw(s, l / u, e, n)))
            return !0;
        }
        if (this.hasFill())
          return ow(s, e, n);
      }
      return !1;
    }, t.prototype.dirtyShape = function() {
      this.__dirty |= ei, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw();
    }, t.prototype.dirty = function() {
      this.dirtyStyle(), this.dirtyShape();
    }, t.prototype.animateShape = function(e) {
      return this.animate("shape", e);
    }, t.prototype.updateDuringAnimation = function(e) {
      e === "style" ? this.dirtyStyle() : e === "shape" ? this.dirtyShape() : this.markRedraw();
    }, t.prototype.attrKV = function(e, n) {
      e === "shape" ? this.setShape(n) : r.prototype.attrKV.call(this, e, n);
    }, t.prototype.setShape = function(e, n) {
      var i = this.shape;
      return i || (i = this.shape = {}), typeof e == "string" ? i[e] = n : O(i, e), this.dirtyShape(), this;
    }, t.prototype.shapeChanged = function() {
      return !!(this.__dirty & ei);
    }, t.prototype.createStyle = function(e) {
      return Bi(id, e);
    }, t.prototype._innerSaveToNormal = function(e) {
      r.prototype._innerSaveToNormal.call(this, e);
      var n = this._normalState;
      e.shape && !n.shape && (n.shape = O({}, this.shape));
    }, t.prototype._applyStateObj = function(e, n, i, a, o, s) {
      r.prototype._applyStateObj.call(this, e, n, i, a, o, s);
      var l = !(n && a), u;
      if (n && n.shape ? o ? a ? u = n.shape : (u = O({}, i.shape), O(u, n.shape)) : (u = O({}, a ? this.shape : i.shape), O(u, n.shape)) : l && (u = i.shape), u)
        if (o) {
          this.shape = O({}, this.shape);
          for (var f = {}, h = yt(u), c = 0; c < h.length; c++) {
            var v = h[c];
            typeof u[v] == "object" ? this.shape[v] = u[v] : f[v] = u[v];
          }
          this._transitionState(e, {
            shape: f
          }, s);
        } else
          this.shape = u, this.dirtyShape();
    }, t.prototype._mergeStates = function(e) {
      for (var n = r.prototype._mergeStates.call(this, e), i, a = 0; a < e.length; a++) {
        var o = e[a];
        o.shape && (i = i || {}, this._mergeStyle(i, o.shape));
      }
      return i && (n.shape = i), n;
    }, t.prototype.getAnimationStyleProps = function() {
      return lw;
    }, t.prototype.isZeroArea = function() {
      return !1;
    }, t.extend = function(e) {
      var n = function(a) {
        k(o, a);
        function o(s) {
          var l = a.call(this, s) || this;
          return e.init && e.init.call(l, s), l;
        }
        return o.prototype.getDefaultStyle = function() {
          return nt(e.style);
        }, o.prototype.getDefaultShape = function() {
          return nt(e.shape);
        }, o;
      }(t);
      for (var i in e)
        typeof e[i] == "function" && (n.prototype[i] = e[i]);
      return n;
    }, t.initDefaultProps = function() {
      var e = t.prototype;
      e.type = "path", e.strokeContainThreshold = 5, e.segmentIgnoreThreshold = 0, e.subPixelOptimize = !1, e.autoBatch = !1, e.__dirty = ge | Vi | ei;
    }(), t;
  }(aa), uw = lt({
    strokeFirst: !0,
    font: ze,
    x: 0,
    y: 0,
    textAlign: "left",
    textBaseline: "top",
    miterLimit: 2
  }, id), Wo = function(r) {
    k(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.hasStroke = function() {
      var e = this.style, n = e.stroke;
      return n != null && n !== "none" && e.lineWidth > 0;
    }, t.prototype.hasFill = function() {
      var e = this.style, n = e.fill;
      return n != null && n !== "none";
    }, t.prototype.createStyle = function(e) {
      return Bi(uw, e);
    }, t.prototype.setBoundingRect = function(e) {
      this._rect = e;
    }, t.prototype.getBoundingRect = function() {
      var e = this.style;
      if (!this._rect) {
        var n = e.text;
        n != null ? n += "" : n = "";
        var i = cu(n, e.font, e.textAlign, e.textBaseline);
        if (i.x += e.x || 0, i.y += e.y || 0, this.hasStroke()) {
          var a = e.lineWidth;
          i.x -= a / 2, i.y -= a / 2, i.width += a, i.height += a;
        }
        this._rect = i;
      }
      return this._rect;
    }, t.initDefaultProps = function() {
      var e = t.prototype;
      e.dirtyRectTolerance = 10;
    }(), t;
  }(aa);
  Wo.prototype.type = "tspan";
  var fw = lt({
    x: 0,
    y: 0
  }, Sn), hw = {
    style: lt({
      x: !0,
      y: !0,
      width: !0,
      height: !0,
      sx: !0,
      sy: !0,
      sWidth: !0,
      sHeight: !0
    }, zo.style)
  };
  function vw(r) {
    return !!(r && typeof r != "string" && r.width && r.height);
  }
  var gr = function(r) {
    k(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.createStyle = function(e) {
      return Bi(fw, e);
    }, t.prototype._getSize = function(e) {
      var n = this.style, i = n[e];
      if (i != null)
        return i;
      var a = vw(n.image) ? n.image : this.__image;
      if (!a)
        return 0;
      var o = e === "width" ? "height" : "width", s = n[o];
      return s == null ? a[e] : a[e] / a[o] * s;
    }, t.prototype.getWidth = function() {
      return this._getSize("width");
    }, t.prototype.getHeight = function() {
      return this._getSize("height");
    }, t.prototype.getAnimationStyleProps = function() {
      return hw;
    }, t.prototype.getBoundingRect = function() {
      var e = this.style;
      return this._rect || (this._rect = new it(e.x || 0, e.y || 0, this.getWidth(), this.getHeight())), this._rect;
    }, t;
  }(aa);
  gr.prototype.type = "image";
  function cw(r, t) {
    var e = t.x, n = t.y, i = t.width, a = t.height, o = t.r, s, l, u, f;
    i < 0 && (e = e + i, i = -i), a < 0 && (n = n + a, a = -a), typeof o == "number" ? s = l = u = f = o : o instanceof Array ? o.length === 1 ? s = l = u = f = o[0] : o.length === 2 ? (s = u = o[0], l = f = o[1]) : o.length === 3 ? (s = o[0], l = f = o[1], u = o[2]) : (s = o[0], l = o[1], u = o[2], f = o[3]) : s = l = u = f = 0;
    var h;
    s + l > i && (h = s + l, s *= i / h, l *= i / h), u + f > i && (h = u + f, u *= i / h, f *= i / h), l + u > a && (h = l + u, l *= a / h, u *= a / h), s + f > a && (h = s + f, s *= a / h, f *= a / h), r.moveTo(e + s, n), r.lineTo(e + i - l, n), l !== 0 && r.arc(e + i - l, n + l, l, -Math.PI / 2, 0), r.lineTo(e + i, n + a - u), u !== 0 && r.arc(e + i - u, n + a - u, u, 0, Math.PI / 2), r.lineTo(e + f, n + a), f !== 0 && r.arc(e + f, n + a - f, f, Math.PI / 2, Math.PI), r.lineTo(e, n + s), s !== 0 && r.arc(e + s, n + s, s, Math.PI, Math.PI * 1.5);
  }
  var fi = Math.round;
  function ad(r, t, e) {
    if (t) {
      var n = t.x1, i = t.x2, a = t.y1, o = t.y2;
      r.x1 = n, r.x2 = i, r.y1 = a, r.y2 = o;
      var s = e && e.lineWidth;
      return s && (fi(n * 2) === fi(i * 2) && (r.x1 = r.x2 = Mn(n, s, !0)), fi(a * 2) === fi(o * 2) && (r.y1 = r.y2 = Mn(a, s, !0))), r;
    }
  }
  function od(r, t, e) {
    if (t) {
      var n = t.x, i = t.y, a = t.width, o = t.height;
      r.x = n, r.y = i, r.width = a, r.height = o;
      var s = e && e.lineWidth;
      return s && (r.x = Mn(n, s, !0), r.y = Mn(i, s, !0), r.width = Math.max(Mn(n + a, s, !1) - r.x, a === 0 ? 0 : 1), r.height = Math.max(Mn(i + o, s, !1) - r.y, o === 0 ? 0 : 1)), r;
    }
  }
  function Mn(r, t, e) {
    if (!t)
      return r;
    var n = fi(r * 2);
    return (n + fi(t)) % 2 === 0 ? n / 2 : (n + (e ? 1 : -1)) / 2;
  }
  var dw = function() {
    function r() {
      this.x = 0, this.y = 0, this.width = 0, this.height = 0;
    }
    return r;
  }(), pw = {}, At = function(r) {
    k(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return t.prototype.getDefaultShape = function() {
      return new dw();
    }, t.prototype.buildPath = function(e, n) {
      var i, a, o, s;
      if (this.subPixelOptimize) {
        var l = od(pw, n, this.style);
        i = l.x, a = l.y, o = l.width, s = l.height, l.r = n.r, n = l;
      } else
        i = n.x, a = n.y, o = n.width, s = n.height;
      n.r ? cw(e, n) : e.rect(i, a, o, s);
    }, t.prototype.isZeroArea = function() {
      return !this.shape.width || !this.shape.height;
    }, t;
  }(ht);
  At.prototype.type = "rect";
  var sd = {
    fill: "#000"
  }, ld = 2, gw = {
    style: lt({
      fill: !0,
      stroke: !0,
      fillOpacity: !0,
      strokeOpacity: !0,
      lineWidth: !0,
      fontSize: !0,
      lineHeight: !0,
      width: !0,
      height: !0,
      textShadowColor: !0,
      textShadowBlur: !0,
      textShadowOffsetX: !0,
      textShadowOffsetY: !0,
      backgroundColor: !0,
      padding: !0,
      borderColor: !0,
      borderWidth: !0,
      borderRadius: !0
    }, zo.style)
  }, kt = function(r) {
    k(t, r);
    function t(e) {
      var n = r.call(this) || this;
      return n.type = "text", n._children = [], n._defaultStyle = sd, n.attr(e), n;
    }
    return t.prototype.childrenRef = function() {
      return this._children;
    }, t.prototype.update = function() {
      r.prototype.update.call(this), this.styleChanged() && this._updateSubTexts();
      for (var e = 0; e < this._children.length; e++) {
        var n = this._children[e];
        n.zlevel = this.zlevel, n.z = this.z, n.z2 = this.z2, n.culling = this.culling, n.cursor = this.cursor, n.invisible = this.invisible;
      }
    }, t.prototype.updateTransform = function() {
      var e = this.innerTransformable;
      e ? (e.updateTransform(), e.transform && (this.transform = e.transform)) : r.prototype.updateTransform.call(this);
    }, t.prototype.getLocalTransform = function(e) {
      var n = this.innerTransformable;
      return n ? n.getLocalTransform(e) : r.prototype.getLocalTransform.call(this, e);
    }, t.prototype.getComputedTransform = function() {
      return this.__hostTarget && (this.__hostTarget.getComputedTransform(), this.__hostTarget.updateInnerText(!0)), r.prototype.getComputedTransform.call(this);
    }, t.prototype._updateSubTexts = function() {
      this._childCursor = 0, ww(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated();
    }, t.prototype.addSelfToZr = function(e) {
      r.prototype.addSelfToZr.call(this, e);
      for (var n = 0; n < this._children.length; n++)
        this._children[n].__zr = e;
    }, t.prototype.removeSelfFromZr = function(e) {
      r.prototype.removeSelfFromZr.call(this, e);
      for (var n = 0; n < this._children.length; n++)
        this._children[n].__zr = null;
    }, t.prototype.getBoundingRect = function() {
      if (this.styleChanged() && this._updateSubTexts(), !this._rect) {
        for (var e = new it(0, 0, 0, 0), n = this._children, i = [], a = null, o = 0; o < n.length; o++) {
          var s = n[o], l = s.getBoundingRect(), u = s.getLocalTransform(i);
          u ? (e.copy(l), e.applyTransform(u), a = a || e.clone(), a.union(e)) : (a = a || l.clone(), a.union(l));
        }
        this._rect = a || e;
      }
      return this._rect;
    }, t.prototype.setDefaultTextStyle = function(e) {
      this._defaultStyle = e || sd;
    }, t.prototype.setTextContent = function(e) {
      throw new Error("Can't attach text on another text");
    }, t.prototype._mergeStyle = function(e, n) {
      if (!n)
        return e;
      var i = n.rich, a = e.rich || i && {};
      return O(e, n), i && a ? (this._mergeRich(a, i), e.rich = a) : a && (e.rich = a), e;
    }, t.prototype._mergeRich = function(e, n) {
      for (var i = yt(n), a = 0; a < i.length; a++) {
        var o = i[a];
        e[o] = e[o] || {}, O(e[o], n[o]);
      }
    }, t.prototype.getAnimationStyleProps = function() {
      return gw;
    }, t.prototype._getOrCreateChild = function(e) {
      var n = this._children[this._childCursor];
      return (!n || !(n instanceof e)) && (n = new e()), this._children[this._childCursor++] = n, n.__zr = this.__zr, n.parent = this, n;
    }, t.prototype._updatePlainTexts = function() {
      var e = this.style, n = e.font || ze, i = e.padding, a = pd(e), o = FS(a, e), s = Vu(e), l = !!e.backgroundColor, u = o.outerHeight, f = o.outerWidth, h = o.contentWidth, c = o.lines, v = o.lineHeight, d = this._defaultStyle, g = e.x || 0, p = e.y || 0, y = e.align || d.align || "left", m = e.verticalAlign || d.verticalAlign || "top", _ = g, S = oi(p, o.contentHeight, m);
      if (s || i) {
        var b = Ki(g, f, y), w = oi(p, u, m);
        s && this._renderBackground(e, e, b, w, f, u);
      }
      S += v / 2, i && (_ = dd(g, y, i), m === "top" ? S += i[0] : m === "bottom" && (S -= i[2]));
      for (var x = 0, T = !1, D = cd("fill" in e ? e.fill : (T = !0, d.fill)), A = vd("stroke" in e ? e.stroke : !l && (!d.autoStroke || T) ? (x = ld, d.stroke) : null), C = e.textShadowBlur > 0, L = e.width != null && (e.overflow === "truncate" || e.overflow === "break" || e.overflow === "breakAll"), P = o.calculatedLineHeight, I = 0; I < c.length; I++) {
        var R = this._getOrCreateChild(Wo), E = R.createStyle();
        R.useStyle(E), E.text = c[I], E.x = _, E.y = S, y && (E.textAlign = y), E.textBaseline = "middle", E.opacity = e.opacity, E.strokeFirst = !0, C && (E.shadowBlur = e.textShadowBlur || 0, E.shadowColor = e.textShadowColor || "transparent", E.shadowOffsetX = e.textShadowOffsetX || 0, E.shadowOffsetY = e.textShadowOffsetY || 0), E.stroke = A, E.fill = D, A && (E.lineWidth = e.lineWidth || x, E.lineDash = e.lineDash, E.lineDashOffset = e.lineDashOffset || 0), E.font = n, fd(E, e), S += v, L && R.setBoundingRect(new it(Ki(E.x, e.width, E.textAlign), oi(E.y, P, E.textBaseline), h, P));
      }
    }, t.prototype._updateRichTexts = function() {
      var e = this.style, n = pd(e), i = HS(n, e), a = i.width, o = i.outerWidth, s = i.outerHeight, l = e.padding, u = e.x || 0, f = e.y || 0, h = this._defaultStyle, c = e.align || h.align, v = e.verticalAlign || h.verticalAlign, d = Ki(u, o, c), g = oi(f, s, v), p = d, y = g;
      l && (p += l[3], y += l[0]);
      var m = p + a;
      Vu(e) && this._renderBackground(e, e, d, g, o, s);
      for (var _ = !!e.backgroundColor, S = 0; S < i.lines.length; S++) {
        for (var b = i.lines[S], w = b.tokens, x = w.length, T = b.lineHeight, D = b.width, A = 0, C = p, L = m, P = x - 1, I = void 0; A < x && (I = w[A], !I.align || I.align === "left"); )
          this._placeToken(I, e, T, y, C, "left", _), D -= I.width, C += I.width, A++;
        for (; P >= 0 && (I = w[P], I.align === "right"); )
          this._placeToken(I, e, T, y, L, "right", _), D -= I.width, L -= I.width, P--;
        for (C += (a - (C - p) - (m - L) - D) / 2; A <= P; )
          I = w[A], this._placeToken(I, e, T, y, C + I.width / 2, "center", _), C += I.width, A++;
        y += T;
      }
    }, t.prototype._placeToken = function(e, n, i, a, o, s, l) {
      var u = n.rich[e.styleName] || {};
      u.text = e.text;
      var f = e.verticalAlign, h = a + i / 2;
      f === "top" ? h = a + e.height / 2 : f === "bottom" && (h = a + i - e.height / 2);
      var c = !e.isLineHolder && Vu(u);
      c && this._renderBackground(u, n, s === "right" ? o - e.width : s === "center" ? o - e.width / 2 : o, h - e.height / 2, e.width, e.height);
      var v = !!u.backgroundColor, d = e.textPadding;
      d && (o = dd(o, s, d), h -= e.height / 2 - d[0] - e.innerHeight / 2);
      var g = this._getOrCreateChild(Wo), p = g.createStyle();
      g.useStyle(p);
      var y = this._defaultStyle, m = !1, _ = 0, S = cd("fill" in u ? u.fill : "fill" in n ? n.fill : (m = !0, y.fill)), b = vd("stroke" in u ? u.stroke : "stroke" in n ? n.stroke : !v && !l && (!y.autoStroke || m) ? (_ = ld, y.stroke) : null), w = u.textShadowBlur > 0 || n.textShadowBlur > 0;
      p.text = e.text, p.x = o, p.y = h, w && (p.shadowBlur = u.textShadowBlur || n.textShadowBlur || 0, p.shadowColor = u.textShadowColor || n.textShadowColor || "transparent", p.shadowOffsetX = u.textShadowOffsetX || n.textShadowOffsetX || 0, p.shadowOffsetY = u.textShadowOffsetY || n.textShadowOffsetY || 0), p.textAlign = s, p.textBaseline = "middle", p.font = e.font || ze, p.opacity = Ar(u.opacity, n.opacity, 1), fd(p, u), b && (p.lineWidth = Ar(u.lineWidth, n.lineWidth, _), p.lineDash = tt(u.lineDash, n.lineDash), p.lineDashOffset = n.lineDashOffset || 0, p.stroke = b), S && (p.fill = S);
      var x = e.contentWidth, T = e.contentHeight;
      g.setBoundingRect(new it(Ki(p.x, x, p.textAlign), oi(p.y, T, p.textBaseline), x, T));
    }, t.prototype._renderBackground = function(e, n, i, a, o, s) {
      var l = e.backgroundColor, u = e.borderWidth, f = e.borderColor, h = l && l.image, c = l && !h, v = e.borderRadius, d = this, g, p;
      if (c || e.lineHeight || u && f) {
        g = this._getOrCreateChild(At), g.useStyle(g.createStyle()), g.style.fill = null;
        var y = g.shape;
        y.x = i, y.y = a, y.width = o, y.height = s, y.r = v, g.dirtyShape();
      }
      if (c) {
        var m = g.style;
        m.fill = l || null, m.fillOpacity = tt(e.fillOpacity, 1);
      } else if (h) {
        p = this._getOrCreateChild(gr), p.onload = function() {
          d.dirtyStyle();
        };
        var _ = p.style;
        _.image = l.image, _.x = i, _.y = a, _.width = o, _.height = s;
      }
      if (u && f) {
        var m = g.style;
        m.lineWidth = u, m.stroke = f, m.strokeOpacity = tt(e.strokeOpacity, 1), m.lineDash = e.borderDash, m.lineDashOffset = e.borderDashOffset || 0, g.strokeContainThreshold = 0, g.hasFill() && g.hasStroke() && (m.strokeFirst = !0, m.lineWidth *= 2);
      }
      var S = (g || p).style;
      S.shadowBlur = e.shadowBlur || 0, S.shadowColor = e.shadowColor || "transparent", S.shadowOffsetX = e.shadowOffsetX || 0, S.shadowOffsetY = e.shadowOffsetY || 0, S.opacity = Ar(e.opacity, n.opacity, 1);
    }, t.makeFont = function(e) {
      var n = "";
      return Sw(e) && (n = [e.fontStyle, e.fontWeight, _w(e.fontSize), e.fontFamily || "sans-serif"].join(" ")), n && Ge(n) || e.textFont || e.font;
    }, t;
  }(aa), yw = {
    left: !0,
    right: 1,
    center: 1
  }, mw = {
    top: 1,
    bottom: 1,
    middle: 1
  }, ud = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
  function _w(r) {
    return typeof r == "string" && (r.indexOf("px") !== -1 || r.indexOf("rem") !== -1 || r.indexOf("em") !== -1) ? r : isNaN(+r) ? tn + "px" : r + "px";
  }
  function fd(r, t) {
    for (var e = 0; e < ud.length; e++) {
      var n = ud[e], i = t[n];
      i != null && (r[n] = i);
    }
  }
  function Sw(r) {
    return r.fontSize != null || r.fontFamily || r.fontWeight;
  }
  function ww(r) {
    return hd(r), M(r.rich, hd), r;
  }
  function hd(r) {
    if (r) {
      r.font = kt.makeFont(r);
      var t = r.align;
      t === "middle" && (t = "center"), r.align = t == null || yw[t] ? t : "left";
      var e = r.verticalAlign;
      e === "center" && (e = "middle"), r.verticalAlign = e == null || mw[e] ? e : "top";
      var n = r.padding;
      n && (r.padding = Ml(r.padding));
    }
  }
  function vd(r, t) {
    return r == null || t <= 0 || r === "transparent" || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
  }
  function cd(r) {
    return r == null || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
  }
  function dd(r, t, e) {
    return t === "right" ? r - e[1] : t === "center" ? r + e[3] / 2 - e[1] / 2 : r + e[3];
  }
  function pd(r) {
    var t = r.text;
    return t != null && (t += ""), t;
  }
  function Vu(r) {
    return !!(r.backgroundColor || r.lineHeight || r.borderWidth && r.borderColor);
  }
  var st = Tt(), bw = function(r, t, e, n) {
    if (n) {
      var i = st(n);
      i.dataIndex = e, i.dataType = t, i.seriesIndex = r, n.type === "group" && n.traverse(function(a) {
        var o = st(a);
        o.seriesIndex = r, o.dataIndex = e, o.dataType = t;
      });
    }
  }, gd = 1, yd = {}, md = Tt(), Wu = Tt(), Uu = 0, Uo = 1, Yo = 2, Ie = ["emphasis", "blur", "select"], Xo = ["normal", "emphasis", "blur", "select"], xw = 10, Tw = 9, An = "highlight", qo = "downplay", la = "select", Zo = "unselect", ua = "toggleSelect";
  function hi(r) {
    return r != null && r !== "none";
  }
  var _d = new Ui(100);
  function Sd(r) {
    if (H(r)) {
      var t = _d.get(r);
      return t || (t = $l(r, -0.1), _d.put(r, t)), t;
    } else if (ki(r)) {
      var e = O({}, r);
      return e.colorStops = V(r.colorStops, function(n) {
        return {
          offset: n.offset,
          color: $l(n.color, -0.1)
        };
      }), e;
    }
    return r;
  }
  function $o(r, t, e) {
    r.onHoverStateChange && (r.hoverState || 0) !== e && r.onHoverStateChange(t), r.hoverState = e;
  }
  function wd(r) {
    $o(r, "emphasis", Yo);
  }
  function bd(r) {
    r.hoverState === Yo && $o(r, "normal", Uu);
  }
  function Yu(r) {
    $o(r, "blur", Uo);
  }
  function xd(r) {
    r.hoverState === Uo && $o(r, "normal", Uu);
  }
  function Cw(r) {
    r.selected = !0;
  }
  function Dw(r) {
    r.selected = !1;
  }
  function Td(r, t, e) {
    t(r, e);
  }
  function yr(r, t, e) {
    Td(r, t, e), r.isGroup && r.traverse(function(n) {
      Td(n, t, e);
    });
  }
  function Cd(r, t) {
    switch (t) {
      case "emphasis":
        r.hoverState = Yo;
        break;
      case "normal":
        r.hoverState = Uu;
        break;
      case "blur":
        r.hoverState = Uo;
        break;
      case "select":
        r.selected = !0;
    }
  }
  function Mw(r, t, e, n) {
    for (var i = r.style, a = {}, o = 0; o < t.length; o++) {
      var s = t[o], l = i[s];
      a[s] = l ?? (n && n[s]);
    }
    for (var o = 0; o < r.animators.length; o++) {
      var u = r.animators[o];
      u.__fromStateTransition && u.__fromStateTransition.indexOf(e) < 0 && u.targetName === "style" && u.saveTo(a, t);
    }
    return a;
  }
  function Aw(r, t, e, n) {
    var i = e && ut(e, "select") >= 0, a = !1;
    if (r instanceof ht) {
      var o = md(r), s = i && o.selectFill || o.normalFill, l = i && o.selectStroke || o.normalStroke;
      if (hi(s) || hi(l)) {
        n = n || {};
        var u = n.style || {};
        u.fill === "inherit" ? (a = !0, n = O({}, n), u = O({}, u), u.fill = s) : !hi(u.fill) && hi(s) ? (a = !0, n = O({}, n), u = O({}, u), u.fill = Sd(s)) : !hi(u.stroke) && hi(l) && (a || (n = O({}, n), u = O({}, u)), u.stroke = Sd(l)), n.style = u;
      }
    }
    if (n && n.z2 == null) {
      a || (n = O({}, n));
      var f = r.z2EmphasisLift;
      n.z2 = r.z2 + (f ?? xw);
    }
    return n;
  }
  function Lw(r, t, e) {
    if (e && e.z2 == null) {
      e = O({}, e);
      var n = r.z2SelectLift;
      e.z2 = r.z2 + (n ?? Tw);
    }
    return e;
  }
  function Pw(r, t, e) {
    var n = ut(r.currentStates, t) >= 0, i = r.style.opacity, a = n ? null : Mw(r, ["opacity"], t, {
      opacity: 1
    });
    e = e || {};
    var o = e.style || {};
    return o.opacity == null && (e = O({}, e), o = O({
      // Already being applied 'emphasis'. DON'T mul opacity multiple times.
      opacity: n ? i : a.opacity * 0.1
    }, o), e.style = o), e;
  }
  function Xu(r, t) {
    var e = this.states[r];
    if (this.style) {
      if (r === "emphasis")
        return Aw(this, r, t, e);
      if (r === "blur")
        return Pw(this, r, e);
      if (r === "select")
        return Lw(this, r, e);
    }
    return e;
  }
  function Iw(r) {
    r.stateProxy = Xu;
    var t = r.getTextContent(), e = r.getTextGuideLine();
    t && (t.stateProxy = Xu), e && (e.stateProxy = Xu);
  }
  function Dd(r, t) {
    !Id(r, t) && !r.__highByOuter && yr(r, wd);
  }
  function Md(r, t) {
    !Id(r, t) && !r.__highByOuter && yr(r, bd);
  }
  function Ko(r, t) {
    r.__highByOuter |= 1 << (t || 0), yr(r, wd);
  }
  function Qo(r, t) {
    !(r.__highByOuter &= ~(1 << (t || 0))) && yr(r, bd);
  }
  function Rw(r) {
    yr(r, Yu);
  }
  function Ad(r) {
    yr(r, xd);
  }
  function Ld(r) {
    yr(r, Cw);
  }
  function Pd(r) {
    yr(r, Dw);
  }
  function Id(r, t) {
    return r.__highDownSilentOnTouch && t.zrByTouch;
  }
  function Rd(r) {
    var t = r.getModel(), e = [], n = [];
    t.eachComponent(function(i, a) {
      var o = Wu(a), s = i === "series", l = s ? r.getViewOfSeriesModel(a) : r.getViewOfComponentModel(a);
      !s && n.push(l), o.isBlured && (l.group.traverse(function(u) {
        xd(u);
      }), s && e.push(a)), o.isBlured = !1;
    }), M(n, function(i) {
      i && i.toggleBlurSeries && i.toggleBlurSeries(e, !1, t);
    });
  }
  function qu(r, t, e, n) {
    var i = n.getModel();
    e = e || "coordinateSystem";
    function a(u, f) {
      for (var h = 0; h < f.length; h++) {
        var c = u.getItemGraphicEl(f[h]);
        c && Ad(c);
      }
    }
    if (r != null && !(!t || t === "none")) {
      var o = i.getSeriesByIndex(r), s = o.coordinateSystem;
      s && s.master && (s = s.master);
      var l = [];
      i.eachSeries(function(u) {
        var f = o === u, h = u.coordinateSystem;
        h && h.master && (h = h.master);
        var c = h && s ? h === s : f;
        if (!// Not blur other series if blurScope series
        (e === "series" && !f || e === "coordinateSystem" && !c || t === "series" && f)) {
          var v = n.getViewOfSeriesModel(u);
          if (v.group.traverse(function(p) {
            Yu(p);
          }), $t(t))
            a(u.getData(), t);
          else if (W(t))
            for (var d = yt(t), g = 0; g < d.length; g++)
              a(u.getData(d[g]), t[d[g]]);
          l.push(u), Wu(u).isBlured = !0;
        }
      }), i.eachComponent(function(u, f) {
        if (u !== "series") {
          var h = n.getViewOfComponentModel(f);
          h && h.toggleBlurSeries && h.toggleBlurSeries(l, !0, i);
        }
      });
    }
  }
  function Zu(r, t, e) {
    if (!(r == null || t == null)) {
      var n = e.getModel().getComponent(r, t);
      if (n) {
        Wu(n).isBlured = !0;
        var i = e.getViewOfComponentModel(n);
        !i || !i.focusBlurEnabled || i.group.traverse(function(a) {
          Yu(a);
        });
      }
    }
  }
  function Ew(r, t, e) {
    var n = r.seriesIndex, i = r.getData(t.dataType);
    if (!i) {
      Wt("Unknown dataType " + t.dataType);
      return;
    }
    var a = mn(i, t);
    a = (F(a) ? a[0] : a) || 0;
    var o = i.getItemGraphicEl(a);
    if (!o)
      for (var s = i.count(), l = 0; !o && l < s; )
        o = i.getItemGraphicEl(l++);
    if (o) {
      var u = st(o);
      qu(n, u.focus, u.blurScope, e);
    } else {
      var f = r.get(["emphasis", "focus"]), h = r.get(["emphasis", "blurScope"]);
      f != null && qu(n, f, h, e);
    }
  }
  function $u(r, t, e, n) {
    var i = {
      focusSelf: !1,
      dispatchers: null
    };
    if (r == null || r === "series" || t == null || e == null)
      return i;
    var a = n.getModel().getComponent(r, t);
    if (!a)
      return i;
    var o = n.getViewOfComponentModel(a);
    if (!o || !o.findHighDownDispatchers)
      return i;
    for (var s = o.findHighDownDispatchers(e), l, u = 0; u < s.length; u++)
      if (vi(s[u]) || Wt("param should be highDownDispatcher"), st(s[u]).focus === "self") {
        l = !0;
        break;
      }
    return {
      focusSelf: l,
      dispatchers: s
    };
  }
  function kw(r, t, e) {
    vi(r) || Wt("param should be highDownDispatcher");
    var n = st(r), i = $u(n.componentMainType, n.componentIndex, n.componentHighDownName, e), a = i.dispatchers, o = i.focusSelf;
    a ? (o && Zu(n.componentMainType, n.componentIndex, e), M(a, function(s) {
      return Dd(s, t);
    })) : (qu(n.seriesIndex, n.focus, n.blurScope, e), n.focus === "self" && Zu(n.componentMainType, n.componentIndex, e), Dd(r, t));
  }
  function Ow(r, t, e) {
    vi(r) || Wt("param should be highDownDispatcher"), Rd(e);
    var n = st(r), i = $u(n.componentMainType, n.componentIndex, n.componentHighDownName, e).dispatchers;
    i ? M(i, function(a) {
      return Md(a, t);
    }) : Md(r, t);
  }
  function Bw(r, t, e) {
    if (Ku(t)) {
      var n = t.dataType, i = r.getData(n), a = mn(i, t);
      F(a) || (a = [a]), r[t.type === ua ? "toggleSelect" : t.type === la ? "select" : "unselect"](a, n);
    }
  }
  function Ed(r) {
    var t = r.getAllData();
    M(t, function(e) {
      var n = e.data, i = e.type;
      n.eachItemGraphicEl(function(a, o) {
        r.isSelected(o, i) ? Ld(a) : Pd(a);
      });
    });
  }
  function Nw(r) {
    var t = [];
    return r.eachSeries(function(e) {
      var n = e.getAllData();
      M(n, function(i) {
        i.data;
        var a = i.type, o = e.getSelectedDataIndices();
        if (o.length > 0) {
          var s = {
            dataIndex: o,
            seriesIndex: e.seriesIndex
          };
          a != null && (s.dataType = a), t.push(s);
        }
      });
    }), t;
  }
  function jo(r, t, e) {
    Od(r, !0), yr(r, Iw), zw(r, t, e);
  }
  function Fw(r) {
    Od(r, !1);
  }
  function fa(r, t, e, n) {
    n ? Fw(r) : jo(r, t, e);
  }
  function zw(r, t, e) {
    var n = st(r);
    t != null ? (n.focus = t, n.blurScope = e) : n.focus && (n.focus = null);
  }
  var kd = ["emphasis", "blur", "select"], Gw = {
    itemStyle: "getItemStyle",
    lineStyle: "getLineStyle",
    areaStyle: "getAreaStyle"
  };
  function Jo(r, t, e, n) {
    e = e || "itemStyle";
    for (var i = 0; i < kd.length; i++) {
      var a = kd[i], o = t.getModel([a, e]), s = r.ensureState(a);
      s.style = n ? n(o) : o[Gw[e]]();
    }
  }
  function Od(r, t) {
    var e = t === !1, n = r;
    r.highDownSilentOnTouch && (n.__highDownSilentOnTouch = r.highDownSilentOnTouch), (!e || n.__highDownDispatcher) && (n.__highByOuter = n.__highByOuter || 0, n.__highDownDispatcher = !e);
  }
  function vi(r) {
    return !!(r && r.__highDownDispatcher);
  }
  function Hw(r) {
    var t = yd[r];
    return t == null && gd <= 32 && (t = yd[r] = gd++), t;
  }
  function Ku(r) {
    var t = r.type;
    return t === la || t === Zo || t === ua;
  }
  function Bd(r) {
    var t = r.type;
    return t === An || t === qo;
  }
  function Vw(r) {
    var t = md(r);
    t.normalFill = r.style.fill, t.normalStroke = r.style.stroke;
    var e = r.states.select || {};
    t.selectFill = e.style && e.style.fill || null, t.selectStroke = e.style && e.style.stroke || null;
  }
  var ci = zr.CMD, Ww = [[], [], []], Nd = Math.sqrt, Uw = Math.atan2;
  function Yw(r, t) {
    if (t) {
      var e = r.data, n = r.len(), i, a, o, s, l, u, f = ci.M, h = ci.C, c = ci.L, v = ci.R, d = ci.A, g = ci.Q;
      for (o = 0, s = 0; o < n; ) {
        switch (i = e[o++], s = o, a = 0, i) {
          case f:
            a = 1;
            break;
          case c:
            a = 1;
            break;
          case h:
            a = 3;
            break;
          case g:
            a = 2;
            break;
          case d:
            var p = t[4], y = t[5], m = Nd(t[0] * t[0] + t[1] * t[1]), _ = Nd(t[2] * t[2] + t[3] * t[3]), S = Uw(-t[1] / _, t[0] / m);
            e[o] *= m, e[o++] += p, e[o] *= _, e[o++] += y, e[o++] *= m, e[o++] *= _, e[o++] += S, e[o++] += S, o += 2, s = o;
            break;
          case v:
            u[0] = e[o++], u[1] = e[o++], jt(u, u, t), e[s++] = u[0], e[s++] = u[1], u[0] += e[o++], u[1] += e[o++], jt(u, u, t), e[s++] = u[0], e[s++] = u[1];
        }
        for (l = 0; l < a; l++) {
          var b = Ww[l];
          b[0] = e[o++], b[1] = e[o++], jt(b, b, t), e[s++] = b[0], e[s++] = b[1];
        }
      }
      r.increaseVersion();
    }
  }
  var Qu = Math.sqrt, ts = Math.sin, es = Math.cos, ha = Math.PI;
  function Fd(r) {
    return Math.sqrt(r[0] * r[0] + r[1] * r[1]);
  }
  function ju(r, t) {
    return (r[0] * t[0] + r[1] * t[1]) / (Fd(r) * Fd(t));
  }
  function zd(r, t) {
    return (r[0] * t[1] < r[1] * t[0] ? -1 : 1) * Math.acos(ju(r, t));
  }
  function Gd(r, t, e, n, i, a, o, s, l, u, f) {
    var h = l * (ha / 180), c = es(h) * (r - e) / 2 + ts(h) * (t - n) / 2, v = -1 * ts(h) * (r - e) / 2 + es(h) * (t - n) / 2, d = c * c / (o * o) + v * v / (s * s);
    d > 1 && (o *= Qu(d), s *= Qu(d));
    var g = (i === a ? -1 : 1) * Qu((o * o * (s * s) - o * o * (v * v) - s * s * (c * c)) / (o * o * (v * v) + s * s * (c * c))) || 0, p = g * o * v / s, y = g * -s * c / o, m = (r + e) / 2 + es(h) * p - ts(h) * y, _ = (t + n) / 2 + ts(h) * p + es(h) * y, S = zd([1, 0], [(c - p) / o, (v - y) / s]), b = [(c - p) / o, (v - y) / s], w = [(-1 * c - p) / o, (-1 * v - y) / s], x = zd(b, w);
    if (ju(b, w) <= -1 && (x = ha), ju(b, w) >= 1 && (x = 0), x < 0) {
      var T = Math.round(x / ha * 1e6) / 1e6;
      x = ha * 2 + T % 2 * ha;
    }
    f.addData(u, m, _, o, s, S, x, h, a);
  }
  var Xw = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/ig, qw = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
  function Zw(r) {
    var t = new zr();
    if (!r)
      return t;
    var e = 0, n = 0, i = e, a = n, o, s = zr.CMD, l = r.match(Xw);
    if (!l)
      return t;
    for (var u = 0; u < l.length; u++) {
      for (var f = l[u], h = f.charAt(0), c = void 0, v = f.match(qw) || [], d = v.length, g = 0; g < d; g++)
        v[g] = parseFloat(v[g]);
      for (var p = 0; p < d; ) {
        var y = void 0, m = void 0, _ = void 0, S = void 0, b = void 0, w = void 0, x = void 0, T = e, D = n, A = void 0, C = void 0;
        switch (h) {
          case "l":
            e += v[p++], n += v[p++], c = s.L, t.addData(c, e, n);
            break;
          case "L":
            e = v[p++], n = v[p++], c = s.L, t.addData(c, e, n);
            break;
          case "m":
            e += v[p++], n += v[p++], c = s.M, t.addData(c, e, n), i = e, a = n, h = "l";
            break;
          case "M":
            e = v[p++], n = v[p++], c = s.M, t.addData(c, e, n), i = e, a = n, h = "L";
            break;
          case "h":
            e += v[p++], c = s.L, t.addData(c, e, n);
            break;
          case "H":
            e = v[p++], c = s.L, t.addData(c, e, n);
            break;
          case "v":
            n += v[p++], c = s.L, t.addData(c, e, n);
            break;
          case "V":
            n = v[p++], c = s.L, t.addData(c, e, n);
            break;
          case "C":
            c = s.C, t.addData(c, v[p++], v[p++], v[p++], v[p++], v[p++], v[p++]), e = v[p - 2], n = v[p - 1];
            break;
          case "c":
            c = s.C, t.addData(c, v[p++] + e, v[p++] + n, v[p++] + e, v[p++] + n, v[p++] + e, v[p++] + n), e += v[p - 2], n += v[p - 1];
            break;
          case "S":
            y = e, m = n, A = t.len(), C = t.data, o === s.C && (y += e - C[A - 4], m += n - C[A - 3]), c = s.C, T = v[p++], D = v[p++], e = v[p++], n = v[p++], t.addData(c, y, m, T, D, e, n);
            break;
          case "s":
            y = e, m = n, A = t.len(), C = t.data, o === s.C && (y += e - C[A - 4], m += n - C[A - 3]), c = s.C, T = e + v[p++], D = n + v[p++], e += v[p++], n += v[p++], t.addData(c, y, m, T, D, e, n);
            break;
          case "Q":
            T = v[p++], D = v[p++], e = v[p++], n = v[p++], c = s.Q, t.addData(c, T, D, e, n);
            break;
          case "q":
            T = v[p++] + e, D = v[p++] + n, e += v[p++], n += v[p++], c = s.Q, t.addData(c, T, D, e, n);
            break;
          case "T":
            y = e, m = n, A = t.len(), C = t.data, o === s.Q && (y += e - C[A - 4], m += n - C[A - 3]), e = v[p++], n = v[p++], c = s.Q, t.addData(c, y, m, e, n);
            break;
          case "t":
            y = e, m = n, A = t.len(), C = t.data, o === s.Q && (y += e - C[A - 4], m += n - C[A - 3]), e += v[p++], n += v[p++], c = s.Q, t.addData(c, y, m, e, n);
            break;
          case "A":
            _ = v[p++], S = v[p++], b = v[p++], w = v[p++], x = v[p++], T = e, D = n, e = v[p++], n = v[p++], c = s.A, Gd(T, D, e, n, w, x, _, S, b, c, t);
            break;
          case "a":
            _ = v[p++], S = v[p++], b = v[p++], w = v[p++], x = v[p++], T = e, D = n, e += v[p++], n += v[p++], c = s.A, Gd(T, D, e, n, w, x, _, S, b, c, t);
            break;
        }
      }
      (h === "z" || h === "Z") && (c = s.Z, t.addData(c), e = i, n = a), o = c;
    }
    return t.toStatic(), t;
  }
  var Hd = function(r) {
    k(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.applyTransform = function(e) {
    }, t;
  }(ht);
  function Vd(r) {
    return r.setData != null;
  }
  function Wd(r, t) {
    var e = Zw(r), n = O({}, t);
    return n.buildPath = function(i) {
      if (Vd(i)) {
        i.setData(e.data);
        var a = i.getContext();
        a && i.rebuildPath(a, 1);
      } else {
        var a = i;
        e.rebuildPath(a, 1);
      }
    }, n.applyTransform = function(i) {
      Yw(e, i), this.dirtyShape();
    }, n;
  }
  function $w(r, t) {
    return new Hd(Wd(r, t));
  }
  function Kw(r, t) {
    var e = Wd(r, t), n = function(i) {
      k(a, i);
      function a(o) {
        var s = i.call(this, o) || this;
        return s.applyTransform = e.applyTransform, s.buildPath = e.buildPath, s;
      }
      return a;
    }(Hd);
    return n;
  }
  function Qw(r, t) {
    for (var e = [], n = r.length, i = 0; i < n; i++) {
      var a = r[i];
      e.push(a.getUpdatedPathProxy(!0));
    }
    var o = new ht(t);
    return o.createPathProxy(), o.buildPath = function(s) {
      if (Vd(s)) {
        s.appendPath(e);
        var l = s.getContext();
        l && s.rebuildPath(l, 1);
      }
    }, o;
  }
  var jw = function() {
    function r() {
      this.cx = 0, this.cy = 0, this.r = 0;
    }
    return r;
  }(), va = function(r) {
    k(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return t.prototype.getDefaultShape = function() {
      return new jw();
    }, t.prototype.buildPath = function(e, n) {
      e.moveTo(n.cx + n.r, n.cy), e.arc(n.cx, n.cy, n.r, 0, Math.PI * 2);
    }, t;
  }(ht);
  va.prototype.type = "circle";
  var Jw = function() {
    function r() {
      this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0;
    }
    return r;
  }(), rs = function(r) {
    k(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return t.prototype.getDefaultShape = function() {
      return new Jw();
    }, t.prototype.buildPath = function(e, n) {
      var i = 0.5522848, a = n.cx, o = n.cy, s = n.rx, l = n.ry, u = s * i, f = l * i;
      e.moveTo(a - s, o), e.bezierCurveTo(a - s, o - f, a - u, o - l, a, o - l), e.bezierCurveTo(a + u, o - l, a + s, o - f, a + s, o), e.bezierCurveTo(a + s, o + f, a + u, o + l, a, o + l), e.bezierCurveTo(a - u, o + l, a - s, o + f, a - s, o), e.closePath();
    }, t;
  }(ht);
  rs.prototype.type = "ellipse";
  var Ud = Math.PI, Ju = Ud * 2, Ln = Math.sin, di = Math.cos, tb = Math.acos, Ut = Math.atan2, Yd = Math.abs, ca = Math.sqrt, da = Math.max, or = Math.min, Ye = 1e-4;
  function eb(r, t, e, n, i, a, o, s) {
    var l = e - r, u = n - t, f = o - i, h = s - a, c = h * l - f * u;
    if (!(c * c < Ye))
      return c = (f * (t - a) - h * (r - i)) / c, [r + c * l, t + c * u];
  }
  function ns(r, t, e, n, i, a, o) {
    var s = r - e, l = t - n, u = (o ? a : -a) / ca(s * s + l * l), f = u * l, h = -u * s, c = r + f, v = t + h, d = e + f, g = n + h, p = (c + d) / 2, y = (v + g) / 2, m = d - c, _ = g - v, S = m * m + _ * _, b = i - a, w = c * g - d * v, x = (_ < 0 ? -1 : 1) * ca(da(0, b * b * S - w * w)), T = (w * _ - m * x) / S, D = (-w * m - _ * x) / S, A = (w * _ + m * x) / S, C = (-w * m + _ * x) / S, L = T - p, P = D - y, I = A - p, R = C - y;
    return L * L + P * P > I * I + R * R && (T = A, D = C), {
      cx: T,
      cy: D,
      x0: -f,
      y0: -h,
      x1: T * (i / b - 1),
      y1: D * (i / b - 1)
    };
  }
  function rb(r) {
    var t;
    if (F(r)) {
      var e = r.length;
      if (!e)
        return r;
      e === 1 ? t = [r[0], r[0], 0, 0] : e === 2 ? t = [r[0], r[0], r[1], r[1]] : e === 3 ? t = r.concat(r[2]) : t = r;
    } else
      t = [r, r, r, r];
    return t;
  }
  function nb(r, t) {
    var e, n = da(t.r, 0), i = da(t.r0 || 0, 0), a = n > 0, o = i > 0;
    if (!(!a && !o)) {
      if (a || (n = i, i = 0), i > n) {
        var s = n;
        n = i, i = s;
      }
      var l = t.startAngle, u = t.endAngle;
      if (!(isNaN(l) || isNaN(u))) {
        var f = t.cx, h = t.cy, c = !!t.clockwise, v = Yd(u - l), d = v > Ju && v % Ju;
        if (d > Ye && (v = d), !(n > Ye))
          r.moveTo(f, h);
        else if (v > Ju - Ye)
          r.moveTo(f + n * di(l), h + n * Ln(l)), r.arc(f, h, n, l, u, !c), i > Ye && (r.moveTo(f + i * di(u), h + i * Ln(u)), r.arc(f, h, i, u, l, c));
        else {
          var g = void 0, p = void 0, y = void 0, m = void 0, _ = void 0, S = void 0, b = void 0, w = void 0, x = void 0, T = void 0, D = void 0, A = void 0, C = void 0, L = void 0, P = void 0, I = void 0, R = n * di(l), E = n * Ln(l), Y = i * di(u), B = i * Ln(u), N = v > Ye;
          if (N) {
            var U = t.cornerRadius;
            U && (e = rb(U), g = e[0], p = e[1], y = e[2], m = e[3]);
            var K = Yd(n - i) / 2;
            if (_ = or(K, y), S = or(K, m), b = or(K, g), w = or(K, p), D = x = da(_, S), A = T = da(b, w), (x > Ye || T > Ye) && (C = n * di(u), L = n * Ln(u), P = i * di(l), I = i * Ln(l), v < Ud)) {
              var $ = eb(R, E, P, I, C, L, Y, B);
              if ($) {
                var rt = R - $[0], vt = E - $[1], Nt = C - $[0], _t = L - $[1], ce = 1 / Ln(tb((rt * Nt + vt * _t) / (ca(rt * rt + vt * vt) * ca(Nt * Nt + _t * _t))) / 2), we = ca($[0] * $[0] + $[1] * $[1]);
                D = or(x, (n - we) / (ce + 1)), A = or(T, (i - we) / (ce - 1));
              }
            }
          }
          if (!N)
            r.moveTo(f + R, h + E);
          else if (D > Ye) {
            var Gt = or(y, D), Pt = or(m, D), Z = ns(P, I, R, E, n, Gt, c), et = ns(C, L, Y, B, n, Pt, c);
            r.moveTo(f + Z.cx + Z.x0, h + Z.cy + Z.y0), D < x && Gt === Pt ? r.arc(f + Z.cx, h + Z.cy, D, Ut(Z.y0, Z.x0), Ut(et.y0, et.x0), !c) : (Gt > 0 && r.arc(f + Z.cx, h + Z.cy, Gt, Ut(Z.y0, Z.x0), Ut(Z.y1, Z.x1), !c), r.arc(f, h, n, Ut(Z.cy + Z.y1, Z.cx + Z.x1), Ut(et.cy + et.y1, et.cx + et.x1), !c), Pt > 0 && r.arc(f + et.cx, h + et.cy, Pt, Ut(et.y1, et.x1), Ut(et.y0, et.x0), !c));
          } else
            r.moveTo(f + R, h + E), r.arc(f, h, n, l, u, !c);
          if (!(i > Ye) || !N)
            r.lineTo(f + Y, h + B);
          else if (A > Ye) {
            var Gt = or(g, A), Pt = or(p, A), Z = ns(Y, B, C, L, i, -Pt, c), et = ns(R, E, P, I, i, -Gt, c);
            r.lineTo(f + Z.cx + Z.x0, h + Z.cy + Z.y0), A < T && Gt === Pt ? r.arc(f + Z.cx, h + Z.cy, A, Ut(Z.y0, Z.x0), Ut(et.y0, et.x0), !c) : (Pt > 0 && r.arc(f + Z.cx, h + Z.cy, Pt, Ut(Z.y0, Z.x0), Ut(Z.y1, Z.x1), !c), r.arc(f, h, i, Ut(Z.cy + Z.y1, Z.cx + Z.x1), Ut(et.cy + et.y1, et.cx + et.x1), c), Gt > 0 && r.arc(f + et.cx, h + et.cy, Gt, Ut(et.y1, et.x1), Ut(et.y0, et.x0), !c));
          } else
            r.lineTo(f + Y, h + B), r.arc(f, h, i, u, l, c);
        }
        r.closePath();
      }
    }
  }
  var ib = function() {
    function r() {
      this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0, this.cornerRadius = 0;
    }
    return r;
  }(), mr = function(r) {
    k(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return t.prototype.getDefaultShape = function() {
      return new ib();
    }, t.prototype.buildPath = function(e, n) {
      nb(e, n);
    }, t.prototype.isZeroArea = function() {
      return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0;
    }, t;
  }(ht);
  mr.prototype.type = "sector";
  var ab = function() {
    function r() {
      this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0;
    }
    return r;
  }(), is = function(r) {
    k(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return t.prototype.getDefaultShape = function() {
      return new ab();
    }, t.prototype.buildPath = function(e, n) {
      var i = n.cx, a = n.cy, o = Math.PI * 2;
      e.moveTo(i + n.r, a), e.arc(i, a, n.r, 0, o, !1), e.moveTo(i + n.r0, a), e.arc(i, a, n.r0, 0, o, !0);
    }, t;
  }(ht);
  is.prototype.type = "ring";
  function ob(r, t, e, n) {
    var i = [], a = [], o = [], s = [], l, u, f, h;
    if (n) {
      f = [1 / 0, 1 / 0], h = [-1 / 0, -1 / 0];
      for (var c = 0, v = r.length; c < v; c++)
        Lr(f, f, r[c]), Pr(h, h, r[c]);
      Lr(f, f, n[0]), Pr(h, h, n[1]);
    }
    for (var c = 0, v = r.length; c < v; c++) {
      var d = r[c];
      if (e)
        l = r[c ? c - 1 : v - 1], u = r[(c + 1) % v];
      else if (c === 0 || c === v - 1) {
        i.push(Pv(r[c]));
        continue;
      } else
        l = r[c - 1], u = r[c + 1];
      Iv(a, u, l), ao(a, a, t);
      var g = oo(d, l), p = oo(d, u), y = g + p;
      y !== 0 && (g /= y, p /= y), ao(o, a, -g), ao(s, a, p);
      var m = Ll([], d, o), _ = Ll([], d, s);
      n && (Pr(m, m, f), Lr(m, m, h), Pr(_, _, f), Lr(_, _, h)), i.push(m), i.push(_);
    }
    return e && i.push(i.shift()), i;
  }
  function Xd(r, t, e) {
    var n = t.smooth, i = t.points;
    if (i && i.length >= 2) {
      if (n) {
        var a = ob(i, n, e, t.smoothConstraint);
        r.moveTo(i[0][0], i[0][1]);
        for (var o = i.length, s = 0; s < (e ? o : o - 1); s++) {
          var l = a[s * 2], u = a[s * 2 + 1], f = i[(s + 1) % o];
          r.bezierCurveTo(l[0], l[1], u[0], u[1], f[0], f[1]);
        }
      } else {
        r.moveTo(i[0][0], i[0][1]);
        for (var s = 1, h = i.length; s < h; s++)
          r.lineTo(i[s][0], i[s][1]);
      }
      e && r.closePath();
    }
  }
  var sb = function() {
    function r() {
      this.points = null, this.smooth = 0, this.smoothConstraint = null;
    }
    return r;
  }(), as = function(r) {
    k(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return t.prototype.getDefaultShape = function() {
      return new sb();
    }, t.prototype.buildPath = function(e, n) {
      Xd(e, n, !0);
    }, t;
  }(ht);
  as.prototype.type = "polygon";
  var lb = function() {
    function r() {
      this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null;
    }
    return r;
  }(), pi = function(r) {
    k(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return t.prototype.getDefaultStyle = function() {
      return {
        stroke: "#000",
        fill: null
      };
    }, t.prototype.getDefaultShape = function() {
      return new lb();
    }, t.prototype.buildPath = function(e, n) {
      Xd(e, n, !1);
    }, t;
  }(ht);
  pi.prototype.type = "polyline";
  var ub = {}, fb = function() {
    function r() {
      this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
    }
    return r;
  }(), _r = function(r) {
    k(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return t.prototype.getDefaultStyle = function() {
      return {
        stroke: "#000",
        fill: null
      };
    }, t.prototype.getDefaultShape = function() {
      return new fb();
    }, t.prototype.buildPath = function(e, n) {
      var i, a, o, s;
      if (this.subPixelOptimize) {
        var l = ad(ub, n, this.style);
        i = l.x1, a = l.y1, o = l.x2, s = l.y2;
      } else
        i = n.x1, a = n.y1, o = n.x2, s = n.y2;
      var u = n.percent;
      u !== 0 && (e.moveTo(i, a), u < 1 && (o = i * (1 - u) + o * u, s = a * (1 - u) + s * u), e.lineTo(o, s));
    }, t.prototype.pointAt = function(e) {
      var n = this.shape;
      return [n.x1 * (1 - e) + n.x2 * e, n.y1 * (1 - e) + n.y2 * e];
    }, t;
  }(ht);
  _r.prototype.type = "line";
  var oe = [], hb = function() {
    function r() {
      this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1;
    }
    return r;
  }();
  function qd(r, t, e) {
    var n = r.cpx2, i = r.cpy2;
    return n != null || i != null ? [(e ? tc : Et)(r.x1, r.cpx1, r.cpx2, r.x2, t), (e ? tc : Et)(r.y1, r.cpy1, r.cpy2, r.y2, t)] : [(e ? nc : Ht)(r.x1, r.cpx1, r.x2, t), (e ? nc : Ht)(r.y1, r.cpy1, r.y2, t)];
  }
  var os = function(r) {
    k(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return t.prototype.getDefaultStyle = function() {
      return {
        stroke: "#000",
        fill: null
      };
    }, t.prototype.getDefaultShape = function() {
      return new hb();
    }, t.prototype.buildPath = function(e, n) {
      var i = n.x1, a = n.y1, o = n.x2, s = n.y2, l = n.cpx1, u = n.cpy1, f = n.cpx2, h = n.cpy2, c = n.percent;
      c !== 0 && (e.moveTo(i, a), f == null || h == null ? (c < 1 && (So(i, l, o, c, oe), l = oe[1], o = oe[2], So(a, u, s, c, oe), u = oe[1], s = oe[2]), e.quadraticCurveTo(l, u, o, s)) : (c < 1 && (_o(i, l, f, o, c, oe), l = oe[1], f = oe[2], o = oe[3], _o(a, u, h, s, c, oe), u = oe[1], h = oe[2], s = oe[3]), e.bezierCurveTo(l, u, f, h, o, s)));
    }, t.prototype.pointAt = function(e) {
      return qd(this.shape, e, !1);
    }, t.prototype.tangentAt = function(e) {
      var n = qd(this.shape, e, !0);
      return Rv(n, n);
    }, t;
  }(ht);
  os.prototype.type = "bezier-curve";
  var vb = function() {
    function r() {
      this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
    }
    return r;
  }(), pa = function(r) {
    k(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return t.prototype.getDefaultStyle = function() {
      return {
        stroke: "#000",
        fill: null
      };
    }, t.prototype.getDefaultShape = function() {
      return new vb();
    }, t.prototype.buildPath = function(e, n) {
      var i = n.cx, a = n.cy, o = Math.max(n.r, 0), s = n.startAngle, l = n.endAngle, u = n.clockwise, f = Math.cos(s), h = Math.sin(s);
      e.moveTo(f * o + i, h * o + a), e.arc(i, a, o, s, l, !u);
    }, t;
  }(ht);
  pa.prototype.type = "arc";
  var Zd = function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = "compound", e;
    }
    return t.prototype._updatePathDirty = function() {
      for (var e = this.shape.paths, n = this.shapeChanged(), i = 0; i < e.length; i++)
        n = n || e[i].shapeChanged();
      n && this.dirtyShape();
    }, t.prototype.beforeBrush = function() {
      this._updatePathDirty();
      for (var e = this.shape.paths || [], n = this.getGlobalScale(), i = 0; i < e.length; i++)
        e[i].path || e[i].createPathProxy(), e[i].path.setScale(n[0], n[1], e[i].segmentIgnoreThreshold);
    }, t.prototype.buildPath = function(e, n) {
      for (var i = n.paths || [], a = 0; a < i.length; a++)
        i[a].buildPath(e, i[a].shape, !0);
    }, t.prototype.afterBrush = function() {
      for (var e = this.shape.paths || [], n = 0; n < e.length; n++)
        e[n].pathUpdated();
    }, t.prototype.getBoundingRect = function() {
      return this._updatePathDirty.call(this), ht.prototype.getBoundingRect.call(this);
    }, t;
  }(ht), $d = function() {
    function r(t) {
      this.colorStops = t || [];
    }
    return r.prototype.addColorStop = function(t, e) {
      this.colorStops.push({
        offset: t,
        color: e
      });
    }, r;
  }(), tf = function(r) {
    k(t, r);
    function t(e, n, i, a, o, s) {
      var l = r.call(this, o) || this;
      return l.x = e ?? 0, l.y = n ?? 0, l.x2 = i ?? 1, l.y2 = a ?? 0, l.type = "linear", l.global = s || !1, l;
    }
    return t;
  }($d), Kd = function(r) {
    k(t, r);
    function t(e, n, i, a, o) {
      var s = r.call(this, a) || this;
      return s.x = e ?? 0.5, s.y = n ?? 0.5, s.r = i ?? 0.5, s.type = "radial", s.global = o || !1, s;
    }
    return t;
  }($d), Pn = [0, 0], In = [0, 0], ss = new q(), ls = new q(), us = function() {
    function r(t, e) {
      this._corners = [], this._axes = [], this._origin = [0, 0];
      for (var n = 0; n < 4; n++)
        this._corners[n] = new q();
      for (var n = 0; n < 2; n++)
        this._axes[n] = new q();
      t && this.fromBoundingRect(t, e);
    }
    return r.prototype.fromBoundingRect = function(t, e) {
      var n = this._corners, i = this._axes, a = t.x, o = t.y, s = a + t.width, l = o + t.height;
      if (n[0].set(a, o), n[1].set(s, o), n[2].set(s, l), n[3].set(a, l), e)
        for (var u = 0; u < 4; u++)
          n[u].transform(e);
      q.sub(i[0], n[1], n[0]), q.sub(i[1], n[3], n[0]), i[0].normalize(), i[1].normalize();
      for (var u = 0; u < 2; u++)
        this._origin[u] = i[u].dot(n[0]);
    }, r.prototype.intersect = function(t, e) {
      var n = !0, i = !e;
      return ss.set(1 / 0, 1 / 0), ls.set(0, 0), !this._intersectCheckOneSide(this, t, ss, ls, i, 1) && (n = !1, i) || !this._intersectCheckOneSide(t, this, ss, ls, i, -1) && (n = !1, i) || i || q.copy(e, n ? ss : ls), n;
    }, r.prototype._intersectCheckOneSide = function(t, e, n, i, a, o) {
      for (var s = !0, l = 0; l < 2; l++) {
        var u = this._axes[l];
        if (this._getProjMinMaxOnAxis(l, t._corners, Pn), this._getProjMinMaxOnAxis(l, e._corners, In), Pn[1] < In[0] || Pn[0] > In[1]) {
          if (s = !1, a)
            return s;
          var f = Math.abs(In[0] - Pn[1]), h = Math.abs(Pn[0] - In[1]);
          Math.min(f, h) > i.len() && (f < h ? q.scale(i, u, -f * o) : q.scale(i, u, h * o));
        } else if (n) {
          var f = Math.abs(In[0] - Pn[1]), h = Math.abs(Pn[0] - In[1]);
          Math.min(f, h) < n.len() && (f < h ? q.scale(n, u, f * o) : q.scale(n, u, -h * o));
        }
      }
      return s;
    }, r.prototype._getProjMinMaxOnAxis = function(t, e, n) {
      for (var i = this._axes[t], a = this._origin, o = e[0].dot(i) + a[t], s = o, l = o, u = 1; u < e.length; u++) {
        var f = e[u].dot(i) + a[t];
        s = Math.min(f, s), l = Math.max(f, l);
      }
      n[0] = s, n[1] = l;
    }, r;
  }(), cb = [], Qd = function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.notClear = !0, e.incremental = !0, e._displayables = [], e._temporaryDisplayables = [], e._cursor = 0, e;
    }
    return t.prototype.traverse = function(e, n) {
      e.call(n, this);
    }, t.prototype.useStyle = function() {
      this.style = {};
    }, t.prototype.getCursor = function() {
      return this._cursor;
    }, t.prototype.innerAfterBrush = function() {
      this._cursor = this._displayables.length;
    }, t.prototype.clearDisplaybles = function() {
      this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.markRedraw(), this.notClear = !1;
    }, t.prototype.clearTemporalDisplayables = function() {
      this._temporaryDisplayables = [];
    }, t.prototype.addDisplayable = function(e, n) {
      n ? this._temporaryDisplayables.push(e) : this._displayables.push(e), this.markRedraw();
    }, t.prototype.addDisplayables = function(e, n) {
      n = n || !1;
      for (var i = 0; i < e.length; i++)
        this.addDisplayable(e[i], n);
    }, t.prototype.getDisplayables = function() {
      return this._displayables;
    }, t.prototype.getTemporalDisplayables = function() {
      return this._temporaryDisplayables;
    }, t.prototype.eachPendingDisplayable = function(e) {
      for (var n = this._cursor; n < this._displayables.length; n++)
        e && e(this._displayables[n]);
      for (var n = 0; n < this._temporaryDisplayables.length; n++)
        e && e(this._temporaryDisplayables[n]);
    }, t.prototype.update = function() {
      this.updateTransform();
      for (var e = this._cursor; e < this._displayables.length; e++) {
        var n = this._displayables[e];
        n.parent = this, n.update(), n.parent = null;
      }
      for (var e = 0; e < this._temporaryDisplayables.length; e++) {
        var n = this._temporaryDisplayables[e];
        n.parent = this, n.update(), n.parent = null;
      }
    }, t.prototype.getBoundingRect = function() {
      if (!this._rect) {
        for (var e = new it(1 / 0, 1 / 0, -1 / 0, -1 / 0), n = 0; n < this._displayables.length; n++) {
          var i = this._displayables[n], a = i.getBoundingRect().clone();
          i.needLocalTransform() && a.applyTransform(i.getLocalTransform(cb)), e.union(a);
        }
        this._rect = e;
      }
      return this._rect;
    }, t.prototype.contain = function(e, n) {
      var i = this.transformCoordToLocal(e, n), a = this.getBoundingRect();
      if (a.contain(i[0], i[1]))
        for (var o = 0; o < this._displayables.length; o++) {
          var s = this._displayables[o];
          if (s.contain(e, n))
            return !0;
        }
      return !1;
    }, t;
  }(aa), db = Tt();
  function pb(r, t, e, n, i) {
    var a;
    if (t && t.ecModel) {
      var o = t.ecModel.getUpdatePayload();
      a = o && o.animation;
    }
    var s = t && t.isAnimationEnabled(), l = r === "update";
    if (s) {
      var u = void 0, f = void 0, h = void 0;
      n ? (u = tt(n.duration, 200), f = tt(n.easing, "cubicOut"), h = 0) : (u = t.getShallow(l ? "animationDurationUpdate" : "animationDuration"), f = t.getShallow(l ? "animationEasingUpdate" : "animationEasing"), h = t.getShallow(l ? "animationDelayUpdate" : "animationDelay")), a && (a.duration != null && (u = a.duration), a.easing != null && (f = a.easing), a.delay != null && (h = a.delay)), X(h) && (h = h(e, i)), X(u) && (u = u(e));
      var c = {
        duration: u || 0,
        delay: h,
        easing: f
      };
      return c;
    } else
      return null;
  }
  function ef(r, t, e, n, i, a, o) {
    var s = !1, l;
    X(i) ? (o = a, a = i, i = null) : W(i) && (a = i.cb, o = i.during, s = i.isFrom, l = i.removeOpt, i = i.dataIndex);
    var u = r === "leave";
    u || t.stopAnimation("leave");
    var f = pb(r, n, i, u ? l || {} : null, n && n.getAnimationDelayParams ? n.getAnimationDelayParams(t, i) : null);
    if (f && f.duration > 0) {
      var h = f.duration, c = f.delay, v = f.easing, d = {
        duration: h,
        delay: c || 0,
        easing: v,
        done: a,
        force: !!a || !!o,
        // Set to final state in update/init animation.
        // So the post processing based on the path shape can be done correctly.
        setToFinal: !u,
        scope: r,
        during: o
      };
      s ? t.animateFrom(e, d) : t.animateTo(e, d);
    } else
      t.stopAnimation(), !s && t.attr(e), o && o(1), a && a();
  }
  function Ot(r, t, e, n, i, a) {
    ef("update", r, t, e, n, i, a);
  }
  function Yt(r, t, e, n, i, a) {
    ef("enter", r, t, e, n, i, a);
  }
  function gi(r) {
    if (!r.__zr)
      return !0;
    for (var t = 0; t < r.animators.length; t++) {
      var e = r.animators[t];
      if (e.scope === "leave")
        return !0;
    }
    return !1;
  }
  function fs(r, t, e, n, i, a) {
    gi(r) || ef("leave", r, t, e, n, i, a);
  }
  function jd(r, t, e, n) {
    r.removeTextContent(), r.removeTextGuideLine(), fs(r, {
      style: {
        opacity: 0
      }
    }, t, e, n);
  }
  function hs(r, t, e) {
    function n() {
      r.parent && r.parent.remove(r);
    }
    r.isGroup ? r.traverse(function(i) {
      i.isGroup || jd(i, t, e, n);
    }) : jd(r, t, e, n);
  }
  function rf(r) {
    db(r).oldStyle = r.style;
  }
  var vs = Math.max, cs = Math.min, nf = {};
  function Jd(r) {
    return ht.extend(r);
  }
  var gb = Kw;
  function tp(r, t) {
    return gb(r, t);
  }
  function Re(r, t) {
    nf[r] = t;
  }
  function ep(r) {
    if (nf.hasOwnProperty(r))
      return nf[r];
  }
  function ds(r, t, e, n) {
    var i = $w(r, t);
    return e && (n === "center" && (e = rp(e, i.getBoundingRect())), of(i, e)), i;
  }
  function af(r, t, e) {
    var n = new gr({
      style: {
        image: r,
        x: t.x,
        y: t.y,
        width: t.width,
        height: t.height
      },
      onload: function(i) {
        if (e === "center") {
          var a = {
            width: i.width,
            height: i.height
          };
          n.setStyle(rp(t, a));
        }
      }
    });
    return n;
  }
  function rp(r, t) {
    var e = t.width / t.height, n = r.height * e, i;
    n <= r.width ? i = r.height : (n = r.width, i = n / e);
    var a = r.x + r.width / 2, o = r.y + r.height / 2;
    return {
      x: a - n / 2,
      y: o - i / 2,
      width: n,
      height: i
    };
  }
  var np = Qw;
  function of(r, t) {
    if (r.applyTransform) {
      var e = r.getBoundingRect(), n = e.calculateTransform(t);
      r.applyTransform(n);
    }
  }
  function ga(r, t) {
    return ad(r, r, {
      lineWidth: t
    }), r;
  }
  function yb(r) {
    return od(r.shape, r.shape, r.style), r;
  }
  var mb = Mn;
  function ip(r, t) {
    for (var e = Ni([]); r && r !== t; )
      Ir(e, r.getLocalTransform(), e), r = r.parent;
    return e;
  }
  function sf(r, t, e) {
    return t && !$t(t) && (t = Po.getLocalTransform(t)), e && (t = ti([], t)), jt([], r, t);
  }
  function _b(r, t, e) {
    var n = t[4] === 0 || t[5] === 0 || t[0] === 0 ? 1 : Math.abs(2 * t[4] / t[0]), i = t[4] === 0 || t[5] === 0 || t[2] === 0 ? 1 : Math.abs(2 * t[4] / t[2]), a = [r === "left" ? -n : r === "right" ? n : 0, r === "top" ? -i : r === "bottom" ? i : 0];
    return a = sf(a, t, e), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
  }
  function ap(r) {
    return !r.isGroup;
  }
  function Sb(r) {
    return r.shape != null;
  }
  function op(r, t, e) {
    if (!r || !t)
      return;
    function n(o) {
      var s = {};
      return o.traverse(function(l) {
        ap(l) && l.anid && (s[l.anid] = l);
      }), s;
    }
    function i(o) {
      var s = {
        x: o.x,
        y: o.y,
        rotation: o.rotation
      };
      return Sb(o) && (s.shape = O({}, o.shape)), s;
    }
    var a = n(r);
    t.traverse(function(o) {
      if (ap(o) && o.anid) {
        var s = a[o.anid];
        if (s) {
          var l = i(o);
          o.attr(i(s)), Ot(o, l, e, st(o).dataIndex);
        }
      }
    });
  }
  function sp(r, t) {
    return V(r, function(e) {
      var n = e[0];
      n = vs(n, t.x), n = cs(n, t.x + t.width);
      var i = e[1];
      return i = vs(i, t.y), i = cs(i, t.y + t.height), [n, i];
    });
  }
  function lp(r, t) {
    var e = vs(r.x, t.x), n = cs(r.x + r.width, t.x + t.width), i = vs(r.y, t.y), a = cs(r.y + r.height, t.y + t.height);
    if (n >= e && a >= i)
      return {
        x: e,
        y: i,
        width: n - e,
        height: a - i
      };
  }
  function ps(r, t, e) {
    var n = O({
      rectHover: !0
    }, t), i = n.style = {
      strokeNoScale: !0
    };
    if (e = e || {
      x: -1,
      y: -1,
      width: 2,
      height: 2
    }, r)
      return r.indexOf("image://") === 0 ? (i.image = r.slice(8), lt(i, e), new gr(n)) : ds(r.replace("path://", ""), n, e, "center");
  }
  function wb(r, t, e, n, i) {
    for (var a = 0, o = i[i.length - 1]; a < i.length; a++) {
      var s = i[a];
      if (up(r, t, e, n, s[0], s[1], o[0], o[1]))
        return !0;
      o = s;
    }
  }
  function up(r, t, e, n, i, a, o, s) {
    var l = e - r, u = n - t, f = o - i, h = s - a, c = lf(f, h, l, u);
    if (bb(c))
      return !1;
    var v = r - i, d = t - a, g = lf(v, d, l, u) / c;
    if (g < 0 || g > 1)
      return !1;
    var p = lf(v, d, f, h) / c;
    return !(p < 0 || p > 1);
  }
  function lf(r, t, e, n) {
    return r * n - e * t;
  }
  function bb(r) {
    return r <= 1e-6 && r >= -1e-6;
  }
  function uf(r) {
    var t = r.itemTooltipOption, e = r.componentModel, n = r.itemName, i = H(t) ? {
      formatter: t
    } : t, a = e.mainType, o = e.componentIndex, s = {
      componentType: a,
      name: n,
      $vars: ["name"]
    };
    s[a + "Index"] = o;
    var l = r.formatterParamsExtra;
    l && M(yt(l), function(f) {
      on(s, f) || (s[f] = l[f], s.$vars.push(f));
    });
    var u = st(r.el);
    u.componentMainType = a, u.componentIndex = o, u.tooltipConfig = {
      name: n,
      option: lt({
        content: n,
        formatterParams: s
      }, i)
    };
  }
  function fp(r, t) {
    var e;
    r.isGroup && (e = t(r)), e || r.traverse(t);
  }
  function gs(r, t) {
    if (r)
      if (F(r))
        for (var e = 0; e < r.length; e++)
          fp(r[e], t);
      else
        fp(r, t);
  }
  Re("circle", va), Re("ellipse", rs), Re("sector", mr), Re("ring", is), Re("polygon", as), Re("polyline", pi), Re("rect", At), Re("line", _r), Re("bezierCurve", os), Re("arc", pa);
  var xb = (Object.freeze || Object)({
    updateProps: Ot,
    initProps: Yt,
    removeElement: fs,
    removeElementWithFadeOut: hs,
    isElementRemoved: gi,
    extendShape: Jd,
    extendPath: tp,
    registerShape: Re,
    getShapeClass: ep,
    makePath: ds,
    makeImage: af,
    mergePath: np,
    resizePath: of,
    subPixelOptimizeLine: ga,
    subPixelOptimizeRect: yb,
    subPixelOptimize: mb,
    getTransform: ip,
    applyTransform: sf,
    transformDirection: _b,
    groupTransition: op,
    clipPointsByRect: sp,
    clipRectByRect: lp,
    createIcon: ps,
    linePolygonIntersect: wb,
    lineLineIntersect: up,
    setTooltipConfig: uf,
    traverseElements: gs,
    Group: Bt,
    Image: gr,
    Text: kt,
    Circle: va,
    Ellipse: rs,
    Sector: mr,
    Ring: is,
    Polygon: as,
    Polyline: pi,
    Rect: At,
    Line: _r,
    BezierCurve: os,
    Arc: pa,
    IncrementalDisplayable: Qd,
    CompoundPath: Zd,
    LinearGradient: tf,
    RadialGradient: Kd,
    BoundingRect: it,
    OrientedBoundingRect: us,
    Point: q,
    Path: ht
  }), ys = {};
  function hp(r, t) {
    for (var e = 0; e < Ie.length; e++) {
      var n = Ie[e], i = t[n], a = r.ensureState(n);
      a.style = a.style || {}, a.style.text = i;
    }
    var o = r.currentStates.slice();
    r.clearStates(!0), r.setStyle({
      text: t.normal
    }), r.useStates(o, !0);
  }
  function ff(r, t, e) {
    var n = r.labelFetcher, i = r.labelDataIndex, a = r.labelDimIndex, o = t.normal, s;
    n && (s = n.getFormattedLabel(i, "normal", null, a, o && o.get("formatter"), e != null ? {
      interpolatedValue: e
    } : null)), s == null && (s = X(r.defaultText) ? r.defaultText(i, r, e) : r.defaultText);
    for (var l = {
      normal: s
    }, u = 0; u < Ie.length; u++) {
      var f = Ie[u], h = t[f];
      l[f] = tt(n ? n.getFormattedLabel(i, f, null, a, h && h.get("formatter")) : null, s);
    }
    return l;
  }
  function ya(r, t, e, n) {
    e = e || ys;
    for (var i = r instanceof kt, a = !1, o = 0; o < Xo.length; o++) {
      var s = t[Xo[o]];
      if (s && s.getShallow("show")) {
        a = !0;
        break;
      }
    }
    var l = i ? r : r.getTextContent();
    if (a) {
      i || (l || (l = new kt(), r.setTextContent(l)), r.stateProxy && (l.stateProxy = r.stateProxy));
      var u = ff(e, t), f = t.normal, h = !!f.getShallow("show"), c = Sr(f, n && n.normal, e, !1, !i);
      c.text = u.normal, i || r.setTextConfig(vp(f, e, !1));
      for (var o = 0; o < Ie.length; o++) {
        var v = Ie[o], s = t[v];
        if (s) {
          var d = l.ensureState(v), g = !!tt(s.getShallow("show"), h);
          if (g !== h && (d.ignore = !g), d.style = Sr(s, n && n[v], e, !0, !i), d.style.text = u[v], !i) {
            var p = r.ensureState(v);
            p.textConfig = vp(s, e, !0);
          }
        }
      }
      l.silent = !!f.getShallow("silent"), l.style.x != null && (c.x = l.style.x), l.style.y != null && (c.y = l.style.y), l.ignore = !h, l.useStyle(c), l.dirty(), e.enableTextSetter && (yi(l).setLabelText = function(y) {
        var m = ff(e, t, y);
        hp(l, m);
      });
    } else
      l && (l.ignore = !0);
    r.dirty();
  }
  function ma(r, t) {
    t = t || "label";
    for (var e = {
      normal: r.getModel(t)
    }, n = 0; n < Ie.length; n++) {
      var i = Ie[n];
      e[i] = r.getModel([i, t]);
    }
    return e;
  }
  function Sr(r, t, e, n, i) {
    var a = {};
    return Tb(a, r, e, n, i), t && O(a, t), a;
  }
  function vp(r, t, e) {
    t = t || {};
    var n = {}, i, a = r.getShallow("rotate"), o = tt(r.getShallow("distance"), e ? null : 5), s = r.getShallow("offset");
    return i = r.getShallow("position") || (e ? null : "inside"), i === "outside" && (i = t.defaultOutsidePosition || "top"), i != null && (n.position = i), s != null && (n.offset = s), a != null && (a *= Math.PI / 180, n.rotation = a), o != null && (n.distance = o), n.outsideFill = r.get("color") === "inherit" ? t.inheritColor || null : "auto", n;
  }
  function Tb(r, t, e, n, i) {
    e = e || ys;
    var a = t.ecModel, o = a && a.option.textStyle, s = Cb(t), l;
    if (s) {
      l = {};
      for (var u in s)
        if (s.hasOwnProperty(u)) {
          var f = t.getModel(["rich", u]);
          gp(l[u] = {}, f, o, e, n, i, !1, !0);
        }
    }
    l && (r.rich = l);
    var h = t.get("overflow");
    h && (r.overflow = h);
    var c = t.get("minMargin");
    c != null && (r.margin = c), gp(r, t, o, e, n, i, !0, !1);
  }
  function Cb(r) {
    for (var t; r && r !== r.ecModel; ) {
      var e = (r.option || ys).rich;
      if (e) {
        t = t || {};
        for (var n = yt(e), i = 0; i < n.length; i++) {
          var a = n[i];
          t[a] = 1;
        }
      }
      r = r.parentModel;
    }
    return t;
  }
  var cp = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], dp = ["align", "lineHeight", "width", "height", "tag", "verticalAlign"], pp = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
  function gp(r, t, e, n, i, a, o, s) {
    e = !i && e || ys;
    var l = n && n.inheritColor, u = t.getShallow("color"), f = t.getShallow("textBorderColor"), h = tt(t.getShallow("opacity"), e.opacity);
    (u === "inherit" || u === "auto") && (u === "auto" && Rt("color: 'auto'", "color: 'inherit'"), l ? u = l : u = null), (f === "inherit" || f === "auto") && (f === "auto" && Rt("color: 'auto'", "color: 'inherit'"), l ? f = l : f = null), a || (u = u || e.color, f = f || e.textBorderColor), u != null && (r.fill = u), f != null && (r.stroke = f);
    var c = tt(t.getShallow("textBorderWidth"), e.textBorderWidth);
    c != null && (r.lineWidth = c);
    var v = tt(t.getShallow("textBorderType"), e.textBorderType);
    v != null && (r.lineDash = v);
    var d = tt(t.getShallow("textBorderDashOffset"), e.textBorderDashOffset);
    d != null && (r.lineDashOffset = d), !i && h == null && !s && (h = n && n.defaultOpacity), h != null && (r.opacity = h), !i && !a && r.fill == null && n.inheritColor && (r.fill = n.inheritColor);
    for (var g = 0; g < cp.length; g++) {
      var p = cp[g], y = tt(t.getShallow(p), e[p]);
      y != null && (r[p] = y);
    }
    for (var g = 0; g < dp.length; g++) {
      var p = dp[g], y = t.getShallow(p);
      y != null && (r[p] = y);
    }
    if (r.verticalAlign == null) {
      var m = t.getShallow("baseline");
      m != null && (r.verticalAlign = m);
    }
    if (!o || !n.disableBox) {
      for (var g = 0; g < pp.length; g++) {
        var p = pp[g], y = t.getShallow(p);
        y != null && (r[p] = y);
      }
      var _ = t.getShallow("borderType");
      _ != null && (r.borderDash = _), (r.backgroundColor === "auto" || r.backgroundColor === "inherit") && l && (r.backgroundColor === "auto" && Rt("backgroundColor: 'auto'", "backgroundColor: 'inherit'"), r.backgroundColor = l), (r.borderColor === "auto" || r.borderColor === "inherit") && l && (r.borderColor === "auto" && Rt("borderColor: 'auto'", "borderColor: 'inherit'"), r.borderColor = l);
    }
  }
  function Db(r, t) {
    var e = t && t.getModel("textStyle");
    return Ge([
      // FIXME in node-canvas fontWeight is before fontStyle
      r.fontStyle || e && e.getShallow("fontStyle") || "",
      r.fontWeight || e && e.getShallow("fontWeight") || "",
      (r.fontSize || e && e.getShallow("fontSize") || 12) + "px",
      r.fontFamily || e && e.getShallow("fontFamily") || "sans-serif"
    ].join(" "));
  }
  var yi = Tt();
  function Mb(r, t, e, n) {
    if (r) {
      var i = yi(r);
      i.prevValue = i.value, i.value = e;
      var a = t.normal;
      i.valueAnimation = a.get("valueAnimation"), i.valueAnimation && (i.precision = a.get("precision"), i.defaultInterpolatedText = n, i.statesModels = t);
    }
  }
  function Ab(r, t, e, n, i) {
    var a = yi(r);
    if (!a.valueAnimation || a.prevValue === a.value)
      return;
    var o = a.defaultInterpolatedText, s = tt(a.interpolatedValue, a.prevValue), l = a.value;
    function u(f) {
      var h = Vc(e, a.precision, s, l, f);
      a.interpolatedValue = f === 1 ? null : h;
      var c = ff({
        labelDataIndex: t,
        labelFetcher: i,
        defaultText: o ? o(h) : h + ""
      }, a.statesModels, h);
      hp(r, c);
    }
    r.percent = 0, (a.prevValue == null ? Yt : Ot)(r, {
      // percent is used to prevent animation from being aborted #15916
      percent: 1
    }, n, t, null, u);
  }
  var Lb = ["textStyle", "color"], hf = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "padding", "lineHeight", "rich", "width", "height", "overflow"], vf = new kt(), Pb = (
    /** @class */
    function() {
      function r() {
      }
      return r.prototype.getTextColor = function(t) {
        var e = this.ecModel;
        return this.getShallow("color") || (!t && e ? e.get(Lb) : null);
      }, r.prototype.getFont = function() {
        return Db({
          fontStyle: this.getShallow("fontStyle"),
          fontWeight: this.getShallow("fontWeight"),
          fontSize: this.getShallow("fontSize"),
          fontFamily: this.getShallow("fontFamily")
        }, this.ecModel);
      }, r.prototype.getTextRect = function(t) {
        for (var e = {
          text: t,
          verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
        }, n = 0; n < hf.length; n++)
          e[hf[n]] = this.getShallow(hf[n]);
        return vf.useStyle(e), vf.update(), vf.getBoundingRect();
      }, r;
    }()
  ), yp = [
    ["lineWidth", "width"],
    ["stroke", "color"],
    ["opacity"],
    ["shadowBlur"],
    ["shadowOffsetX"],
    ["shadowOffsetY"],
    ["shadowColor"],
    ["lineDash", "type"],
    ["lineDashOffset", "dashOffset"],
    ["lineCap", "cap"],
    ["lineJoin", "join"],
    ["miterLimit"]
    // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
    // So do not transfer decal directly.
  ], Ib = ia(yp), Rb = (
    /** @class */
    function() {
      function r() {
      }
      return r.prototype.getLineStyle = function(t) {
        return Ib(this, t);
      }, r;
    }()
  ), mp = [
    ["fill", "color"],
    ["stroke", "borderColor"],
    ["lineWidth", "borderWidth"],
    ["opacity"],
    ["shadowBlur"],
    ["shadowOffsetX"],
    ["shadowOffsetY"],
    ["shadowColor"],
    ["lineDash", "borderType"],
    ["lineDashOffset", "borderDashOffset"],
    ["lineCap", "borderCap"],
    ["lineJoin", "borderJoin"],
    ["miterLimit", "borderMiterLimit"]
    // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
    // So do not transfer decal directly.
  ], Eb = ia(mp), kb = (
    /** @class */
    function() {
      function r() {
      }
      return r.prototype.getItemStyle = function(t, e) {
        return Eb(this, t, e);
      }, r;
    }()
  ), St = (
    /** @class */
    function() {
      function r(t, e, n) {
        this.parentModel = e, this.ecModel = n, this.option = t;
      }
      return r.prototype.init = function(t, e, n) {
      }, r.prototype.mergeOption = function(t, e) {
        ot(this.option, t, !0);
      }, r.prototype.get = function(t, e) {
        return t == null ? this.option : this._doGet(this.parsePath(t), !e && this.parentModel);
      }, r.prototype.getShallow = function(t, e) {
        var n = this.option, i = n == null ? n : n[t];
        if (i == null && !e) {
          var a = this.parentModel;
          a && (i = a.getShallow(t));
        }
        return i;
      }, r.prototype.getModel = function(t, e) {
        var n = t != null, i = n ? this.parsePath(t) : null, a = n ? this._doGet(i) : this.option;
        return e = e || this.parentModel && this.parentModel.getModel(this.resolveParentPath(i)), new r(a, e, this.ecModel);
      }, r.prototype.isEmpty = function() {
        return this.option == null;
      }, r.prototype.restoreData = function() {
      }, r.prototype.clone = function() {
        var t = this.constructor;
        return new t(nt(this.option));
      }, r.prototype.parsePath = function(t) {
        return typeof t == "string" ? t.split(".") : t;
      }, r.prototype.resolveParentPath = function(t) {
        return t;
      }, r.prototype.isAnimationEnabled = function() {
        if (!z.node && this.option) {
          if (this.option.animation != null)
            return !!this.option.animation;
          if (this.parentModel)
            return this.parentModel.isAnimationEnabled();
        }
      }, r.prototype._doGet = function(t, e) {
        var n = this.option;
        if (!t)
          return n;
        for (var i = 0; i < t.length && !(t[i] && (n = n && typeof n == "object" ? n[t[i]] : null, n == null)); i++)
          ;
        return n == null && e && (n = e._doGet(this.resolveParentPath(t), e.parentModel)), n;
      }, r;
    }()
  );
  Mu(St), PS(St), xe(St, Rb), xe(St, kb), xe(St, OS), xe(St, Pb);
  var Ob = Math.round(Math.random() * 10);
  function ms(r) {
    return [r || "", Ob++].join("_");
  }
  function Bb(r) {
    var t = {};
    r.registerSubTypeDefaulter = function(e, n) {
      var i = rr(e);
      t[i.main] = n;
    }, r.determineSubType = function(e, n) {
      var i = n.type;
      if (!i) {
        var a = rr(e).main;
        r.hasSubTypes(e) && t[a] && (i = t[a](n));
      }
      return i;
    };
  }
  function Nb(r, t) {
    r.topologicalTravel = function(a, o, s, l) {
      if (!a.length)
        return;
      var u = e(o), f = u.graph, h = u.noEntryList, c = {};
      for (M(a, function(m) {
        c[m] = !0;
      }); h.length; ) {
        var v = h.pop(), d = f[v], g = !!c[v];
        g && (s.call(l, v, d.originalDeps.slice()), delete c[v]), M(d.successor, g ? y : p);
      }
      M(c, function() {
        var m = "";
        throw m = Bo("Circular dependency may exists: ", c, a, o), new Error(m);
      });
      function p(m) {
        f[m].entryCount--, f[m].entryCount === 0 && h.push(m);
      }
      function y(m) {
        c[m] = !0, p(m);
      }
    };
    function e(a) {
      var o = {}, s = [];
      return M(a, function(l) {
        var u = n(o, l), f = u.originalDeps = t(l), h = i(f, a);
        u.entryCount = h.length, u.entryCount === 0 && s.push(l), M(h, function(c) {
          ut(u.predecessor, c) < 0 && u.predecessor.push(c);
          var v = n(o, c);
          ut(v.successor, c) < 0 && v.successor.push(l);
        });
      }), {
        graph: o,
        noEntryList: s
      };
    }
    function n(a, o) {
      return a[o] || (a[o] = {
        predecessor: [],
        successor: []
      }), a[o];
    }
    function i(a, o) {
      var s = [];
      return M(a, function(l) {
        ut(o, l) >= 0 && s.push(l);
      }), s;
    }
  }
  function _p(r, t) {
    return ot(ot({}, r, !0), t, !0);
  }
  var Fb = {
    time: {
      month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayOfWeekAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    },
    legend: {
      selector: {
        all: "All",
        inverse: "Inv"
      }
    },
    toolbox: {
      brush: {
        title: {
          rect: "Box Select",
          polygon: "Lasso Select",
          lineX: "Horizontally Select",
          lineY: "Vertically Select",
          keep: "Keep Selections",
          clear: "Clear Selections"
        }
      },
      dataView: {
        title: "Data View",
        lang: ["Data View", "Close", "Refresh"]
      },
      dataZoom: {
        title: {
          zoom: "Zoom",
          back: "Zoom Reset"
        }
      },
      magicType: {
        title: {
          line: "Switch to Line Chart",
          bar: "Switch to Bar Chart",
          stack: "Stack",
          tiled: "Tile"
        }
      },
      restore: {
        title: "Restore"
      },
      saveAsImage: {
        title: "Save as Image",
        lang: ["Right Click to Save Image"]
      }
    },
    series: {
      typeNames: {
        pie: "Pie chart",
        bar: "Bar chart",
        line: "Line chart",
        scatter: "Scatter plot",
        effectScatter: "Ripple scatter plot",
        radar: "Radar chart",
        tree: "Tree",
        treemap: "Treemap",
        boxplot: "Boxplot",
        candlestick: "Candlestick",
        k: "K line chart",
        heatmap: "Heat map",
        map: "Map",
        parallel: "Parallel coordinate map",
        lines: "Line graph",
        graph: "Relationship graph",
        sankey: "Sankey diagram",
        funnel: "Funnel chart",
        gauge: "Gauge",
        pictorialBar: "Pictorial bar",
        themeRiver: "Theme River Map",
        sunburst: "Sunburst"
      }
    },
    aria: {
      general: {
        withTitle: 'This is a chart about "{title}"',
        withoutTitle: "This is a chart"
      },
      series: {
        single: {
          prefix: "",
          withName: " with type {seriesType} named {seriesName}.",
          withoutName: " with type {seriesType}."
        },
        multiple: {
          prefix: ". It consists of {seriesCount} series count.",
          withName: " The {seriesId} series is a {seriesType} representing {seriesName}.",
          withoutName: " The {seriesId} series is a {seriesType}.",
          separator: {
            middle: "",
            end: ""
          }
        }
      },
      data: {
        allData: "The data is as follows: ",
        partialData: "The first {displayCnt} items are: ",
        withName: "the data for {name} is {value}",
        withoutName: "{value}",
        separator: {
          middle: ", ",
          end: ". "
        }
      }
    }
  }, zb = {
    time: {
      month: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
      monthAbbr: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
      dayOfWeekAbbr: ["日", "一", "二", "三", "四", "五", "六"]
    },
    legend: {
      selector: {
        all: "全选",
        inverse: "反选"
      }
    },
    toolbox: {
      brush: {
        title: {
          rect: "矩形选择",
          polygon: "圈选",
          lineX: "横向选择",
          lineY: "纵向选择",
          keep: "保持选择",
          clear: "清除选择"
        }
      },
      dataView: {
        title: "数据视图",
        lang: ["数据视图", "关闭", "刷新"]
      },
      dataZoom: {
        title: {
          zoom: "区域缩放",
          back: "区域缩放还原"
        }
      },
      magicType: {
        title: {
          line: "切换为折线图",
          bar: "切换为柱状图",
          stack: "切换为堆叠",
          tiled: "切换为平铺"
        }
      },
      restore: {
        title: "还原"
      },
      saveAsImage: {
        title: "保存为图片",
        lang: ["右键另存为图片"]
      }
    },
    series: {
      typeNames: {
        pie: "饼图",
        bar: "柱状图",
        line: "折线图",
        scatter: "散点图",
        effectScatter: "涟漪散点图",
        radar: "雷达图",
        tree: "树图",
        treemap: "矩形树图",
        boxplot: "箱型图",
        candlestick: "K线图",
        k: "K线图",
        heatmap: "热力图",
        map: "地图",
        parallel: "平行坐标图",
        lines: "线图",
        graph: "关系图",
        sankey: "桑基图",
        funnel: "漏斗图",
        gauge: "仪表盘图",
        pictorialBar: "象形柱图",
        themeRiver: "主题河流图",
        sunburst: "旭日图"
      }
    },
    aria: {
      general: {
        withTitle: "这是一个关于“{title}”的图表。",
        withoutTitle: "这是一个图表，"
      },
      series: {
        single: {
          prefix: "",
          withName: "图表类型是{seriesType}，表示{seriesName}。",
          withoutName: "图表类型是{seriesType}。"
        },
        multiple: {
          prefix: "它由{seriesCount}个图表系列组成。",
          withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
          withoutName: "第{seriesId}个系列是一个{seriesType}，",
          separator: {
            middle: "；",
            end: "。"
          }
        }
      },
      data: {
        allData: "其数据是——",
        partialData: "其中，前{displayCnt}项是——",
        withName: "{name}的数据是{value}",
        withoutName: "{value}",
        separator: {
          middle: "，",
          end: ""
        }
      }
    }
  }, _s = "ZH", cf = "EN", _a = cf, Ss = {}, df = {}, Sp = z.domSupported ? function() {
    var r = (
      /* eslint-disable-next-line */
      (document.documentElement.lang || navigator.language || navigator.browserLanguage).toUpperCase()
    );
    return r.indexOf(_s) > -1 ? _s : _a;
  }() : _a;
  function pf(r, t) {
    r = r.toUpperCase(), df[r] = new St(t), Ss[r] = t;
  }
  function Gb(r) {
    if (H(r)) {
      var t = Ss[r.toUpperCase()] || {};
      return r === _s || r === cf ? nt(t) : ot(nt(t), nt(Ss[_a]), !1);
    } else
      return ot(nt(r), nt(Ss[_a]), !1);
  }
  function Hb(r) {
    return df[r];
  }
  function Vb() {
    return df[_a];
  }
  pf(cf, Fb), pf(_s, zb);
  var gf = 1e3, yf = gf * 60, Sa = yf * 60, Ee = Sa * 24, wp = Ee * 365, wa = {
    year: "{yyyy}",
    month: "{MMM}",
    day: "{d}",
    hour: "{HH}:{mm}",
    minute: "{HH}:{mm}",
    second: "{HH}:{mm}:{ss}",
    millisecond: "{HH}:{mm}:{ss} {SSS}",
    none: "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}"
  }, ws = "{yyyy}-{MM}-{dd}", bp = {
    year: "{yyyy}",
    month: "{yyyy}-{MM}",
    day: ws,
    hour: ws + " " + wa.hour,
    minute: ws + " " + wa.minute,
    second: ws + " " + wa.second,
    millisecond: wa.none
  }, mf = ["year", "month", "day", "hour", "minute", "second", "millisecond"], xp = ["year", "half-year", "quarter", "month", "week", "half-week", "day", "half-day", "quarter-day", "hour", "minute", "second", "millisecond"];
  function se(r, t) {
    return r += "", "0000".substr(0, t - r.length) + r;
  }
  function mi(r) {
    switch (r) {
      case "half-year":
      case "quarter":
        return "month";
      case "week":
      case "half-week":
        return "day";
      case "half-day":
      case "quarter-day":
        return "hour";
      default:
        return r;
    }
  }
  function Wb(r) {
    return r === mi(r);
  }
  function Ub(r) {
    switch (r) {
      case "year":
      case "month":
        return "day";
      case "millisecond":
        return "millisecond";
      default:
        return "second";
    }
  }
  function ba(r, t, e, n) {
    var i = Me(r), a = i[_f(e)](), o = i[_i(e)]() + 1, s = Math.floor((o - 1) / 3) + 1, l = i[bs(e)](), u = i["get" + (e ? "UTC" : "") + "Day"](), f = i[xa(e)](), h = (f - 1) % 12 + 1, c = i[xs(e)](), v = i[Ts(e)](), d = i[Cs(e)](), g = n instanceof St ? n : Hb(n || Sp) || Vb(), p = g.getModel("time"), y = p.get("month"), m = p.get("monthAbbr"), _ = p.get("dayOfWeek"), S = p.get("dayOfWeekAbbr");
    return (t || "").replace(/{yyyy}/g, a + "").replace(/{yy}/g, a % 100 + "").replace(/{Q}/g, s + "").replace(/{MMMM}/g, y[o - 1]).replace(/{MMM}/g, m[o - 1]).replace(/{MM}/g, se(o, 2)).replace(/{M}/g, o + "").replace(/{dd}/g, se(l, 2)).replace(/{d}/g, l + "").replace(/{eeee}/g, _[u]).replace(/{ee}/g, S[u]).replace(/{e}/g, u + "").replace(/{HH}/g, se(f, 2)).replace(/{H}/g, f + "").replace(/{hh}/g, se(h + "", 2)).replace(/{h}/g, h + "").replace(/{mm}/g, se(c, 2)).replace(/{m}/g, c + "").replace(/{ss}/g, se(v, 2)).replace(/{s}/g, v + "").replace(/{SSS}/g, se(d, 3)).replace(/{S}/g, d + "");
  }
  function Yb(r, t, e, n, i) {
    var a = null;
    if (H(e))
      a = e;
    else if (X(e))
      a = e(r.value, t, {
        level: r.level
      });
    else {
      var o = O({}, wa);
      if (r.level > 0)
        for (var s = 0; s < mf.length; ++s)
          o[mf[s]] = "{primary|" + o[mf[s]] + "}";
      var l = e ? e.inherit === !1 ? e : lt(e, o) : o, u = Tp(r.value, i);
      if (l[u])
        a = l[u];
      else if (l.inherit) {
        for (var f = xp.indexOf(u), s = f - 1; s >= 0; --s)
          if (l[u]) {
            a = l[u];
            break;
          }
        a = a || o.none;
      }
      if (F(a)) {
        var h = r.level == null ? 0 : r.level >= 0 ? r.level : a.length + r.level;
        h = Math.min(h, a.length - 1), a = a[h];
      }
    }
    return ba(new Date(r.value), a, i, n);
  }
  function Tp(r, t) {
    var e = Me(r), n = e[_i(t)]() + 1, i = e[bs(t)](), a = e[xa(t)](), o = e[xs(t)](), s = e[Ts(t)](), l = e[Cs(t)](), u = l === 0, f = u && s === 0, h = f && o === 0, c = h && a === 0, v = c && i === 1, d = v && n === 1;
    return d ? "year" : v ? "month" : c ? "day" : h ? "hour" : f ? "minute" : u ? "second" : "millisecond";
  }
  function Cp(r, t, e) {
    var n = pt(r) ? Me(r) : r;
    switch (t = t || Tp(r, e), t) {
      case "year":
        return n[_f(e)]();
      case "half-year":
        return n[_i(e)]() >= 6 ? 1 : 0;
      case "quarter":
        return Math.floor((n[_i(e)]() + 1) / 4);
      case "month":
        return n[_i(e)]();
      case "day":
        return n[bs(e)]();
      case "half-day":
        return n[xa(e)]() / 24;
      case "hour":
        return n[xa(e)]();
      case "minute":
        return n[xs(e)]();
      case "second":
        return n[Ts(e)]();
      case "millisecond":
        return n[Cs(e)]();
    }
  }
  function _f(r) {
    return r ? "getUTCFullYear" : "getFullYear";
  }
  function _i(r) {
    return r ? "getUTCMonth" : "getMonth";
  }
  function bs(r) {
    return r ? "getUTCDate" : "getDate";
  }
  function xa(r) {
    return r ? "getUTCHours" : "getHours";
  }
  function xs(r) {
    return r ? "getUTCMinutes" : "getMinutes";
  }
  function Ts(r) {
    return r ? "getUTCSeconds" : "getSeconds";
  }
  function Cs(r) {
    return r ? "getUTCMilliseconds" : "getMilliseconds";
  }
  function Xb(r) {
    return r ? "setUTCFullYear" : "setFullYear";
  }
  function Dp(r) {
    return r ? "setUTCMonth" : "setMonth";
  }
  function Mp(r) {
    return r ? "setUTCDate" : "setDate";
  }
  function Ap(r) {
    return r ? "setUTCHours" : "setHours";
  }
  function Lp(r) {
    return r ? "setUTCMinutes" : "setMinutes";
  }
  function Pp(r) {
    return r ? "setUTCSeconds" : "setSeconds";
  }
  function Ip(r) {
    return r ? "setUTCMilliseconds" : "setMilliseconds";
  }
  function qb(r, t, e, n, i, a, o, s) {
    var l = new kt({
      style: {
        text: r,
        font: t,
        align: e,
        verticalAlign: n,
        padding: i,
        rich: a,
        overflow: o ? "truncate" : null,
        lineHeight: s
      }
    });
    return l.getBoundingRect();
  }
  function Sf(r) {
    if (!bu(r))
      return H(r) ? r : "-";
    var t = (r + "").split(".");
    return t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "");
  }
  function wf(r, t) {
    return r = (r || "").toLowerCase().replace(/-(.)/g, function(e, n) {
      return n.toUpperCase();
    }), t && r && (r = r.charAt(0).toUpperCase() + r.slice(1)), r;
  }
  var Ta = Ml;
  function bf(r, t, e) {
    var n = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}";
    function i(f) {
      return f && Ge(f) ? f : "-";
    }
    function a(f) {
      return !!(f != null && !isNaN(f) && isFinite(f));
    }
    var o = t === "time", s = r instanceof Date;
    if (o || s) {
      var l = o ? Me(r) : r;
      if (isNaN(+l)) {
        if (s)
          return "-";
      } else
        return ba(l, n, e);
    }
    if (t === "ordinal")
      return Ei(r) ? i(r) : pt(r) && a(r) ? r + "" : "-";
    var u = ta(r);
    return a(u) ? Sf(u) : Ei(r) ? i(r) : typeof r == "boolean" ? r + "" : "-";
  }
  var Rp = ["a", "b", "c", "d", "e", "f", "g"], xf = function(r, t) {
    return "{" + r + (t ?? "") + "}";
  };
  function Tf(r, t, e) {
    F(t) || (t = [t]);
    var n = t.length;
    if (!n)
      return "";
    for (var i = t[0].$vars || [], a = 0; a < i.length; a++) {
      var o = Rp[a];
      r = r.replace(xf(o), xf(o, 0));
    }
    for (var s = 0; s < n; s++)
      for (var l = 0; l < i.length; l++) {
        var u = t[s][i[l]];
        r = r.replace(xf(Rp[l], s), e ? pe(u) : u);
      }
    return r;
  }
  function Ep(r, t) {
    var e = H(r) ? {
      color: r,
      extraCssText: t
    } : r || {}, n = e.color, i = e.type;
    t = e.extraCssText;
    var a = e.renderMode || "html";
    if (!n)
      return "";
    if (a === "html")
      return i === "subItem" ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + pe(n) + ";" + (t || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + pe(n) + ";" + (t || "") + '"></span>';
    var o = e.markerId || "markerX";
    return {
      renderMode: a,
      content: "{" + o + "|}  ",
      style: i === "subItem" ? {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: n
      } : {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: n
      }
    };
  }
  function Zb(r, t, e) {
    Rt("echarts.format.formatTime", "echarts.time.format"), (r === "week" || r === "month" || r === "quarter" || r === "half-year" || r === "year") && (r = `MM-dd
yyyy`);
    var n = Me(t), i = e ? "getUTC" : "get", a = n[i + "FullYear"](), o = n[i + "Month"]() + 1, s = n[i + "Date"](), l = n[i + "Hours"](), u = n[i + "Minutes"](), f = n[i + "Seconds"](), h = n[i + "Milliseconds"]();
    return r = r.replace("MM", se(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", se(a % 100 + "", 2)).replace("dd", se(s, 2)).replace("d", s).replace("hh", se(l, 2)).replace("h", l).replace("mm", se(u, 2)).replace("m", u).replace("ss", se(f, 2)).replace("s", f).replace("SSS", se(h, 3)), r;
  }
  function $b(r) {
    return r && r.charAt(0).toUpperCase() + r.substr(1);
  }
  function Rn(r, t) {
    return t = t || "transparent", H(r) ? r : W(r) && r.colorStops && (r.colorStops[0] || {}).color || t;
  }
  function kp(r, t) {
    if (t === "_blank" || t === "blank") {
      var e = window.open();
      e.opener = null, e.location.href = r;
    } else
      window.open(r, t);
  }
  var Ds = M, Kb = ["left", "right", "top", "bottom", "width", "height"], Ms = [["width", "left", "right"], ["height", "top", "bottom"]];
  function Cf(r, t, e, n, i) {
    var a = 0, o = 0;
    n == null && (n = 1 / 0), i == null && (i = 1 / 0);
    var s = 0;
    t.eachChild(function(l, u) {
      var f = l.getBoundingRect(), h = t.childAt(u + 1), c = h && h.getBoundingRect(), v, d;
      if (r === "horizontal") {
        var g = f.width + (c ? -c.x + f.x : 0);
        v = a + g, v > n || l.newline ? (a = 0, v = g, o += s + e, s = f.height) : s = Math.max(s, f.height);
      } else {
        var p = f.height + (c ? -c.y + f.y : 0);
        d = o + p, d > i || l.newline ? (a += s + e, o = 0, d = p, s = f.width) : s = Math.max(s, f.width);
      }
      l.newline || (l.x = a, l.y = o, l.markRedraw(), r === "horizontal" ? a = v + e : o = d + e);
    });
  }
  var Ca = Cf;
  xt(Cf, "vertical"), xt(Cf, "horizontal");
  function En(r, t, e) {
    e = Ta(e || 0);
    var n = t.width, i = t.height, a = mt(r.left, n), o = mt(r.top, i), s = mt(r.right, n), l = mt(r.bottom, i), u = mt(r.width, n), f = mt(r.height, i), h = e[2] + e[0], c = e[1] + e[3], v = r.aspect;
    switch (isNaN(u) && (u = n - s - c - a), isNaN(f) && (f = i - l - h - o), v != null && (isNaN(u) && isNaN(f) && (v > n / i ? u = n * 0.8 : f = i * 0.8), isNaN(u) && (u = v * f), isNaN(f) && (f = u / v)), isNaN(a) && (a = n - s - u - c), isNaN(o) && (o = i - l - f - h), r.left || r.right) {
      case "center":
        a = n / 2 - u / 2 - e[3];
        break;
      case "right":
        a = n - u - c;
        break;
    }
    switch (r.top || r.bottom) {
      case "middle":
      case "center":
        o = i / 2 - f / 2 - e[0];
        break;
      case "bottom":
        o = i - f - h;
        break;
    }
    a = a || 0, o = o || 0, isNaN(u) && (u = n - c - a - (s || 0)), isNaN(f) && (f = i - h - o - (l || 0));
    var d = new it(a + e[3], o + e[0], u, f);
    return d.margin = e, d;
  }
  function Da(r) {
    var t = r.layoutMode || r.constructor.layoutMode;
    return W(t) ? t : t ? {
      type: t
    } : null;
  }
  function Si(r, t, e) {
    var n = e && e.ignoreSize;
    !F(n) && (n = [n, n]);
    var i = o(Ms[0], 0), a = o(Ms[1], 1);
    u(Ms[0], r, i), u(Ms[1], r, a);
    function o(f, h) {
      var c = {}, v = 0, d = {}, g = 0, p = 2;
      if (Ds(f, function(_) {
        d[_] = r[_];
      }), Ds(f, function(_) {
        s(t, _) && (c[_] = d[_] = t[_]), l(c, _) && v++, l(d, _) && g++;
      }), n[h])
        return l(t, f[1]) ? d[f[2]] = null : l(t, f[2]) && (d[f[1]] = null), d;
      if (g === p || !v)
        return d;
      if (v >= p)
        return c;
      for (var y = 0; y < f.length; y++) {
        var m = f[y];
        if (!s(c, m) && s(r, m)) {
          c[m] = r[m];
          break;
        }
      }
      return c;
    }
    function s(f, h) {
      return f.hasOwnProperty(h);
    }
    function l(f, h) {
      return f[h] != null && f[h] !== "auto";
    }
    function u(f, h, c) {
      Ds(f, function(v) {
        h[v] = c[v];
      });
    }
  }
  function As(r) {
    return Qb({}, r);
  }
  function Qb(r, t) {
    return t && r && Ds(Kb, function(e) {
      t.hasOwnProperty(e) && (r[e] = t[e]);
    }), r;
  }
  var jb = Tt(), at = (
    /** @class */
    function(r) {
      k(t, r);
      function t(e, n, i) {
        var a = r.call(this, e, n, i) || this;
        return a.uid = ms("ec_cpt_model"), a;
      }
      return t.prototype.init = function(e, n, i) {
        this.mergeDefaultAndTheme(e, i);
      }, t.prototype.mergeDefaultAndTheme = function(e, n) {
        var i = Da(this), a = i ? As(e) : {}, o = n.getTheme();
        ot(e, o.get(this.mainType)), ot(e, this.getDefaultOption()), i && Si(e, a, i);
      }, t.prototype.mergeOption = function(e, n) {
        ot(this.option, e, !0);
        var i = Da(this);
        i && Si(this.option, e, i);
      }, t.prototype.optionUpdated = function(e, n) {
      }, t.prototype.getDefaultOption = function() {
        var e = this.constructor;
        if (!MS(e))
          return e.defaultOption;
        var n = jb(this);
        if (!n.defaultOption) {
          for (var i = [], a = e; a; ) {
            var o = a.prototype.defaultOption;
            o && i.push(o), a = a.superClass;
          }
          for (var s = {}, l = i.length - 1; l >= 0; l--)
            s = ot(s, i[l], !0);
          n.defaultOption = s;
        }
        return n.defaultOption;
      }, t.prototype.getReferringComponents = function(e, n) {
        var i = e + "Index", a = e + "Id";
        return na(this.ecModel, e, {
          index: this.get(i, !0),
          id: this.get(a, !0)
        }, n);
      }, t.prototype.getBoxLayoutParams = function() {
        var e = this;
        return {
          left: e.get("left"),
          top: e.get("top"),
          right: e.get("right"),
          bottom: e.get("bottom"),
          width: e.get("width"),
          height: e.get("height")
        };
      }, t.prototype.getZLevelKey = function() {
        return "";
      }, t.prototype.setZLevel = function(e) {
        this.option.zlevel = e;
      }, t.protoInitialize = function() {
        var e = t.prototype;
        e.type = "component", e.id = "", e.name = "", e.mainType = "", e.subType = "", e.componentIndex = 0;
      }(), t;
    }(St)
  );
  Uc(at, St), No(at), Bb(at), Nb(at, Jb);
  function Jb(r) {
    var t = [];
    return M(at.getClassesByMainType(r), function(e) {
      t = t.concat(e.dependencies || e.prototype.dependencies || []);
    }), t = V(t, function(e) {
      return rr(e).main;
    }), r !== "dataset" && ut(t, "dataset") <= 0 && t.unshift("dataset"), t;
  }
  var Op = "";
  typeof navigator < "u" && (Op = navigator.platform || "");
  var wi = "rgba(0, 0, 0, 0.2)", tx = {
    darkMode: "auto",
    // backgroundColor: 'rgba(0,0,0,0)',
    colorBy: "series",
    color: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"],
    gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
    aria: {
      decal: {
        decals: [{
          color: wi,
          dashArrayX: [1, 0],
          dashArrayY: [2, 5],
          symbolSize: 1,
          rotation: Math.PI / 6
        }, {
          color: wi,
          symbol: "circle",
          dashArrayX: [[8, 8], [0, 8, 8, 0]],
          dashArrayY: [6, 0],
          symbolSize: 0.8
        }, {
          color: wi,
          dashArrayX: [1, 0],
          dashArrayY: [4, 3],
          rotation: -Math.PI / 4
        }, {
          color: wi,
          dashArrayX: [[6, 6], [0, 6, 6, 0]],
          dashArrayY: [6, 0]
        }, {
          color: wi,
          dashArrayX: [[1, 0], [1, 6]],
          dashArrayY: [1, 0, 6, 0],
          rotation: Math.PI / 4
        }, {
          color: wi,
          symbol: "triangle",
          dashArrayX: [[9, 9], [0, 9, 9, 0]],
          dashArrayY: [7, 2],
          symbolSize: 0.75
        }]
      }
    },
    // If xAxis and yAxis declared, grid is created by default.
    // grid: {},
    textStyle: {
      // color: '#000',
      // decoration: 'none',
      // PENDING
      fontFamily: Op.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
      // fontFamily: 'Arial, Verdana, sans-serif',
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: "normal"
    },
    // http://blogs.adobe.com/webplatform/2014/02/24/using-blend-modes-in-html-canvas/
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
    // Default is source-over
    blendMode: null,
    stateAnimation: {
      duration: 300,
      easing: "cubicOut"
    },
    animation: "auto",
    animationDuration: 1e3,
    animationDurationUpdate: 500,
    animationEasing: "cubicInOut",
    animationEasingUpdate: "cubicInOut",
    animationThreshold: 2e3,
    // Configuration for progressive/incremental rendering
    progressiveThreshold: 3e3,
    progressive: 400,
    // Threshold of if use single hover layer to optimize.
    // It is recommended that `hoverLayerThreshold` is equivalent to or less than
    // `progressiveThreshold`, otherwise hover will cause restart of progressive,
    // which is unexpected.
    // see example <echarts/test/heatmap-large.html>.
    hoverLayerThreshold: 3e3,
    // See: module:echarts/scale/Time
    useUTC: !1
  }, Df = J(["tooltip", "label", "itemName", "itemId", "itemGroupId", "seriesName"]), ke = "original", le = "arrayRows", Xe = "objectRows", sr = "keyedColumns", wr = "typedArray", Bp = "unknown", lr = "column", bi = "row", zt = {
    Must: 1,
    Might: 2,
    Not: 3
    // Other cases
  }, Np = Tt();
  function ex(r) {
    Np(r).datasetMap = J();
  }
  function rx(r, t, e) {
    var n = {}, i = Mf(t);
    if (!i || !r)
      return n;
    var a = [], o = [], s = t.ecModel, l = Np(s).datasetMap, u = i.uid + "_" + e.seriesLayoutBy, f, h;
    r = r.slice(), M(r, function(g, p) {
      var y = W(g) ? g : r[p] = {
        name: g
      };
      y.type === "ordinal" && f == null && (f = p, h = d(y)), n[y.name] = [];
    });
    var c = l.get(u) || l.set(u, {
      categoryWayDim: h,
      valueWayDim: 0
    });
    M(r, function(g, p) {
      var y = g.name, m = d(g);
      if (f == null) {
        var _ = c.valueWayDim;
        v(n[y], _, m), v(o, _, m), c.valueWayDim += m;
      } else if (f === p)
        v(n[y], 0, m), v(a, 0, m);
      else {
        var _ = c.categoryWayDim;
        v(n[y], _, m), v(o, _, m), c.categoryWayDim += m;
      }
    });
    function v(g, p, y) {
      for (var m = 0; m < y; m++)
        g.push(p + m);
    }
    function d(g) {
      var p = g.dimsDef;
      return p ? p.length : 1;
    }
    return a.length && (n.itemName = a), o.length && (n.seriesName = o), n;
  }
  function nx(r, t, e) {
    var n = {}, i = Mf(r);
    if (!i)
      return n;
    var a = t.sourceFormat, o = t.dimensionsDefine, s;
    (a === Xe || a === sr) && M(o, function(f, h) {
      (W(f) ? f.name : f) === "name" && (s = h);
    });
    var l = function() {
      for (var f = {}, h = {}, c = [], v = 0, d = Math.min(5, e); v < d; v++) {
        var g = zp(t.data, a, t.seriesLayoutBy, o, t.startIndex, v);
        c.push(g);
        var p = g === zt.Not;
        if (p && f.v == null && v !== s && (f.v = v), (f.n == null || f.n === f.v || !p && c[f.n] === zt.Not) && (f.n = v), y(f) && c[f.n] !== zt.Not)
          return f;
        p || (g === zt.Might && h.v == null && v !== s && (h.v = v), (h.n == null || h.n === h.v) && (h.n = v));
      }
      function y(m) {
        return m.v != null && m.n != null;
      }
      return y(f) ? f : y(h) ? h : null;
    }();
    if (l) {
      n.value = [l.v];
      var u = s ?? l.n;
      n.itemName = [u], n.seriesName = [u];
    }
    return n;
  }
  function Mf(r) {
    var t = r.get("data", !0);
    if (!t)
      return na(r.ecModel, "dataset", {
        index: r.get("datasetIndex", !0),
        id: r.get("datasetId", !0)
      }, Ue).models[0];
  }
  function ix(r) {
    return !r.get("transform", !0) && !r.get("fromTransformResult", !0) ? [] : na(r.ecModel, "dataset", {
      index: r.get("fromDatasetIndex", !0),
      id: r.get("fromDatasetId", !0)
    }, Ue).models;
  }
  function Fp(r, t) {
    return zp(r.data, r.sourceFormat, r.seriesLayoutBy, r.dimensionsDefine, r.startIndex, t);
  }
  function zp(r, t, e, n, i, a) {
    var o, s = 5;
    if (Kt(r))
      return zt.Not;
    var l, u;
    if (n) {
      var f = n[a];
      W(f) ? (l = f.name, u = f.type) : H(f) && (l = f);
    }
    if (u != null)
      return u === "ordinal" ? zt.Must : zt.Not;
    if (t === le) {
      var h = r;
      if (e === bi) {
        for (var c = h[a], v = 0; v < (c || []).length && v < s; v++)
          if ((o = S(c[i + v])) != null)
            return o;
      } else
        for (var v = 0; v < h.length && v < s; v++) {
          var d = h[i + v];
          if (d && (o = S(d[a])) != null)
            return o;
        }
    } else if (t === Xe) {
      var g = r;
      if (!l)
        return zt.Not;
      for (var v = 0; v < g.length && v < s; v++) {
        var p = g[v];
        if (p && (o = S(p[l])) != null)
          return o;
      }
    } else if (t === sr) {
      var y = r;
      if (!l)
        return zt.Not;
      var c = y[l];
      if (!c || Kt(c))
        return zt.Not;
      for (var v = 0; v < c.length && v < s; v++)
        if ((o = S(c[v])) != null)
          return o;
    } else if (t === ke)
      for (var m = r, v = 0; v < m.length && v < s; v++) {
        var p = m[v], _ = ea(p);
        if (!F(_))
          return zt.Not;
        if ((o = S(_[a])) != null)
          return o;
      }
    function S(b) {
      var w = H(b);
      if (b != null && isFinite(b) && b !== "")
        return w ? zt.Might : zt.Not;
      if (w && b !== "-")
        return zt.Must;
    }
    return zt.Not;
  }
  var ax = J();
  function ox(r, t, e) {
    var n = ax.get(t);
    if (!n)
      return e;
    var i = n(r);
    if (!i)
      return e;
    for (var a = 0; a < i.length; a++)
      j(li(i[a]));
    return e.concat(i);
  }
  var Gp = Tt();
  Tt();
  var Af = (
    /** @class */
    function() {
      function r() {
      }
      return r.prototype.getColorFromPalette = function(t, e, n) {
        var i = Jt(this.get("color", !0)), a = this.get("colorLayer", !0);
        return lx(this, Gp, i, a, t, e, n);
      }, r.prototype.clearColorPalette = function() {
        ux(this, Gp);
      }, r;
    }()
  );
  function sx(r, t) {
    for (var e = r.length, n = 0; n < e; n++)
      if (r[n].length > t)
        return r[n];
    return r[e - 1];
  }
  function lx(r, t, e, n, i, a, o) {
    a = a || r;
    var s = t(a), l = s.paletteIdx || 0, u = s.paletteNameMap = s.paletteNameMap || {};
    if (u.hasOwnProperty(i))
      return u[i];
    var f = o == null || !n ? e : sx(n, o);
    if (f = f || e, !(!f || !f.length)) {
      var h = f[l];
      return i && (u[i] = h), s.paletteIdx = (l + 1) % f.length, h;
    }
  }
  function ux(r, t) {
    t(r).paletteIdx = 0, t(r).paletteNameMap = {};
  }
  var Ls, Ma, Hp, Lf = "\0_ec_inner", Vp = 1, fx = {
    grid: "GridComponent",
    polar: "PolarComponent",
    geo: "GeoComponent",
    singleAxis: "SingleAxisComponent",
    parallel: "ParallelComponent",
    calendar: "CalendarComponent",
    graphic: "GraphicComponent",
    toolbox: "ToolboxComponent",
    tooltip: "TooltipComponent",
    axisPointer: "AxisPointerComponent",
    brush: "BrushComponent",
    title: "TitleComponent",
    timeline: "TimelineComponent",
    markPoint: "MarkPointComponent",
    markLine: "MarkLineComponent",
    markArea: "MarkAreaComponent",
    legend: "LegendComponent",
    dataZoom: "DataZoomComponent",
    visualMap: "VisualMapComponent",
    // aria: 'AriaComponent',
    // dataset: 'DatasetComponent',
    // Dependencies
    xAxis: "GridComponent",
    yAxis: "GridComponent",
    angleAxis: "PolarComponent",
    radiusAxis: "PolarComponent"
  }, hx = {
    line: "LineChart",
    bar: "BarChart",
    pie: "PieChart",
    scatter: "ScatterChart",
    radar: "RadarChart",
    map: "MapChart",
    tree: "TreeChart",
    treemap: "TreemapChart",
    graph: "GraphChart",
    gauge: "GaugeChart",
    funnel: "FunnelChart",
    parallel: "ParallelChart",
    sankey: "SankeyChart",
    boxplot: "BoxplotChart",
    candlestick: "CandlestickChart",
    effectScatter: "EffectScatterChart",
    lines: "LinesChart",
    heatmap: "HeatmapChart",
    pictorialBar: "PictorialBarChart",
    themeRiver: "ThemeRiverChart",
    sunburst: "SunburstChart",
    custom: "CustomChart"
  }, Ps = {};
  function vx(r) {
    M(r, function(t, e) {
      if (!at.hasClass(e)) {
        var n = fx[e];
        n && !Ps[n] && (Wt("Component " + e + ` is used but not imported.
import { ` + n + ` } from 'echarts/components';
echarts.use([` + n + "]);"), Ps[n] = !0);
      }
    });
  }
  var Pf = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }
      return t.prototype.init = function(e, n, i, a, o, s) {
        a = a || {}, this.option = null, this._theme = new St(a), this._locale = new St(o), this._optionManager = s;
      }, t.prototype.setOption = function(e, n, i) {
        j(e != null, "option is null/undefined"), j(e[Lf] !== Vp, "please use chart.getOption()");
        var a = Yp(n);
        this._optionManager.setOption(e, i, a), this._resetOption(null, a);
      }, t.prototype.resetOption = function(e, n) {
        return this._resetOption(e, Yp(n));
      }, t.prototype._resetOption = function(e, n) {
        var i = !1, a = this._optionManager;
        if (!e || e === "recreate") {
          var o = a.mountOption(e === "recreate");
          vx(o), !this.option || e === "recreate" ? Hp(this, o) : (this.restoreData(), this._mergeOption(o, n)), i = !0;
        }
        if ((e === "timeline" || e === "media") && this.restoreData(), !e || e === "recreate" || e === "timeline") {
          var s = a.getTimelineOption(this);
          s && (i = !0, this._mergeOption(s, n));
        }
        if (!e || e === "recreate" || e === "media") {
          var l = a.getMediaOption(this);
          l.length && M(l, function(u) {
            i = !0, this._mergeOption(u, n);
          }, this);
        }
        return i;
      }, t.prototype.mergeOption = function(e) {
        this._mergeOption(e, null);
      }, t.prototype._mergeOption = function(e, n) {
        var i = this.option, a = this._componentsMap, o = this._componentsCount, s = [], l = J(), u = n && n.replaceMergeMainTypeMap;
        ex(this), M(e, function(h, c) {
          h != null && (at.hasClass(c) ? c && (s.push(c), l.set(c, !0)) : i[c] = i[c] == null ? nt(h) : ot(i[c], h, !0));
        }), u && u.each(function(h, c) {
          at.hasClass(c) && !l.get(c) && (s.push(c), l.set(c, !0));
        }), at.topologicalTravel(s, at.getAllClassMainTypes(), f, this);
        function f(h) {
          var c = ox(this, h, Jt(e[h])), v = a.get(h), d = (
            // `!oldCmptList` means init. See the comment in `mappingToExists`
            v ? u && u.get(h) ? "replaceMerge" : "normalMerge" : "replaceAll"
          ), g = cS(v, c, d);
          SS(g, h, at), i[h] = null, a.set(h, null), o.set(h, 0);
          var p = [], y = [], m = 0, _, S;
          M(g, function(b, w) {
            var x = b.existing, T = b.newOption;
            if (!T)
              x && (x.mergeOption({}, this), x.optionUpdated({}, !1));
            else {
              var D = h === "series", A = at.getClass(
                h,
                b.keyInfo.subType,
                !D
                // Give a more detailed warn later if series don't exists
              );
              if (!A) {
                {
                  var C = b.keyInfo.subType, L = hx[C];
                  Ps[C] || (Ps[C] = !0, Wt(L ? "Series " + C + ` is used but not imported.
import { ` + L + ` } from 'echarts/charts';
echarts.use([` + L + "]);" : "Unknown series " + C));
                }
                return;
              }
              if (h === "tooltip") {
                if (_) {
                  S || (Vt("Currently only one tooltip component is allowed."), S = !0);
                  return;
                }
                _ = !0;
              }
              if (x && x.constructor === A)
                x.name = b.keyInfo.name, x.mergeOption(T, this), x.optionUpdated(T, !1);
              else {
                var P = O({
                  componentIndex: w
                }, b.keyInfo);
                x = new A(T, this, this, P), O(x, P), b.brandNew && (x.__requireNewView = !0), x.init(T, this, this), x.optionUpdated(null, !0);
              }
            }
            x ? (p.push(x.option), y.push(x), m++) : (p.push(void 0), y.push(void 0));
          }, this), i[h] = p, a.set(h, y), o.set(h, m), h === "series" && Ls(this);
        }
        this._seriesIndices || Ls(this);
      }, t.prototype.getOption = function() {
        var e = nt(this.option);
        return M(e, function(n, i) {
          if (at.hasClass(i)) {
            for (var a = Jt(n), o = a.length, s = !1, l = o - 1; l >= 0; l--)
              a[l] && !li(a[l]) ? s = !0 : (a[l] = null, !s && o--);
            a.length = o, e[i] = a;
          }
        }), delete e[Lf], e;
      }, t.prototype.getTheme = function() {
        return this._theme;
      }, t.prototype.getLocaleModel = function() {
        return this._locale;
      }, t.prototype.setUpdatePayload = function(e) {
        this._payload = e;
      }, t.prototype.getUpdatePayload = function() {
        return this._payload;
      }, t.prototype.getComponent = function(e, n) {
        var i = this._componentsMap.get(e);
        if (i) {
          var a = i[n || 0];
          if (a)
            return a;
          if (n == null) {
            for (var o = 0; o < i.length; o++)
              if (i[o])
                return i[o];
          }
        }
      }, t.prototype.queryComponents = function(e) {
        var n = e.mainType;
        if (!n)
          return [];
        var i = e.index, a = e.id, o = e.name, s = this._componentsMap.get(n);
        if (!s || !s.length)
          return [];
        var l;
        return i != null ? (l = [], M(Jt(i), function(u) {
          s[u] && l.push(s[u]);
        })) : a != null ? l = Wp("id", a, s) : o != null ? l = Wp("name", o, s) : l = Dt(s, function(u) {
          return !!u;
        }), Up(l, e);
      }, t.prototype.findComponents = function(e) {
        var n = e.query, i = e.mainType, a = s(n), o = a ? this.queryComponents(a) : Dt(this._componentsMap.get(i), function(u) {
          return !!u;
        });
        return l(Up(o, e));
        function s(u) {
          var f = i + "Index", h = i + "Id", c = i + "Name";
          return u && (u[f] != null || u[h] != null || u[c] != null) ? {
            mainType: i,
            // subType will be filtered finally.
            index: u[f],
            id: u[h],
            name: u[c]
          } : null;
        }
        function l(u) {
          return e.filter ? Dt(u, e.filter) : u;
        }
      }, t.prototype.eachComponent = function(e, n, i) {
        var a = this._componentsMap;
        if (X(e)) {
          var o = n, s = e;
          a.each(function(h, c) {
            for (var v = 0; h && v < h.length; v++) {
              var d = h[v];
              d && s.call(o, c, d, d.componentIndex);
            }
          });
        } else
          for (var l = H(e) ? a.get(e) : W(e) ? this.findComponents(e) : null, u = 0; l && u < l.length; u++) {
            var f = l[u];
            f && n.call(i, f, f.componentIndex);
          }
      }, t.prototype.getSeriesByName = function(e) {
        var n = er(e, null);
        return Dt(this._componentsMap.get("series"), function(i) {
          return !!i && n != null && i.name === n;
        });
      }, t.prototype.getSeriesByIndex = function(e) {
        return this._componentsMap.get("series")[e];
      }, t.prototype.getSeriesByType = function(e) {
        return Dt(this._componentsMap.get("series"), function(n) {
          return !!n && n.subType === e;
        });
      }, t.prototype.getSeries = function() {
        return Dt(this._componentsMap.get("series"), function(e) {
          return !!e;
        });
      }, t.prototype.getSeriesCount = function() {
        return this._componentsCount.get("series");
      }, t.prototype.eachSeries = function(e, n) {
        Ma(this), M(this._seriesIndices, function(i) {
          var a = this._componentsMap.get("series")[i];
          e.call(n, a, i);
        }, this);
      }, t.prototype.eachRawSeries = function(e, n) {
        M(this._componentsMap.get("series"), function(i) {
          i && e.call(n, i, i.componentIndex);
        });
      }, t.prototype.eachSeriesByType = function(e, n, i) {
        Ma(this), M(this._seriesIndices, function(a) {
          var o = this._componentsMap.get("series")[a];
          o.subType === e && n.call(i, o, a);
        }, this);
      }, t.prototype.eachRawSeriesByType = function(e, n, i) {
        return M(this.getSeriesByType(e), n, i);
      }, t.prototype.isSeriesFiltered = function(e) {
        return Ma(this), this._seriesIndicesMap.get(e.componentIndex) == null;
      }, t.prototype.getCurrentSeriesIndices = function() {
        return (this._seriesIndices || []).slice();
      }, t.prototype.filterSeries = function(e, n) {
        Ma(this);
        var i = [];
        M(this._seriesIndices, function(a) {
          var o = this._componentsMap.get("series")[a];
          e.call(n, o, a) && i.push(a);
        }, this), this._seriesIndices = i, this._seriesIndicesMap = J(i);
      }, t.prototype.restoreData = function(e) {
        Ls(this);
        var n = this._componentsMap, i = [];
        n.each(function(a, o) {
          at.hasClass(o) && i.push(o);
        }), at.topologicalTravel(i, at.getAllClassMainTypes(), function(a) {
          M(n.get(a), function(o) {
            o && (a !== "series" || !cx(o, e)) && o.restoreData();
          });
        });
      }, t.internalField = function() {
        Ls = function(e) {
          var n = e._seriesIndices = [];
          M(e._componentsMap.get("series"), function(i) {
            i && n.push(i.componentIndex);
          }), e._seriesIndicesMap = J(n);
        }, Ma = function(e) {
          if (!e._seriesIndices)
            throw new Error("Option should contains series.");
        }, Hp = function(e, n) {
          e.option = {}, e.option[Lf] = Vp, e._componentsMap = J({
            series: []
          }), e._componentsCount = J();
          var i = n.aria;
          W(i) && i.enabled == null && (i.enabled = !0), dx(n, e._theme.option), ot(n, tx, !1), e._mergeOption(n, null);
        };
      }(), t;
    }(St)
  );
  function cx(r, t) {
    if (t) {
      var e = t.seriesIndex, n = t.seriesId, i = t.seriesName;
      return e != null && r.componentIndex !== e || n != null && r.id !== n || i != null && r.name !== i;
    }
  }
  function dx(r, t) {
    var e = r.color && !r.colorLayer;
    M(t, function(n, i) {
      i === "colorLayer" && e || at.hasClass(i) || (typeof n == "object" ? r[i] = r[i] ? ot(r[i], n, !1) : nt(n) : r[i] == null && (r[i] = n));
    });
  }
  function Wp(r, t, e) {
    if (F(t)) {
      var n = J();
      return M(t, function(a) {
        if (a != null) {
          var o = er(a, null);
          o != null && n.set(a, !0);
        }
      }), Dt(e, function(a) {
        return a && n.get(a[r]);
      });
    } else {
      var i = er(t, null);
      return Dt(e, function(a) {
        return a && i != null && a[r] === i;
      });
    }
  }
  function Up(r, t) {
    return t.hasOwnProperty("subType") ? Dt(r, function(e) {
      return e && e.subType === t.subType;
    }) : r;
  }
  function Yp(r) {
    var t = J();
    return r && M(Jt(r.replaceMerge), function(e) {
      j(at.hasClass(e), '"' + e + '" is not valid component main type in "replaceMerge"'), t.set(e, !0);
    }), {
      replaceMergeMainTypeMap: t
    };
  }
  xe(Pf, Af);
  var px = [
    "getDom",
    "getZr",
    "getWidth",
    "getHeight",
    "getDevicePixelRatio",
    "dispatchAction",
    "isSSR",
    "isDisposed",
    "on",
    "off",
    "getDataURL",
    "getConnectedDataURL",
    // 'getModel',
    "getOption",
    // 'getViewOfComponentModel',
    // 'getViewOfSeriesModel',
    "getId",
    "updateLabelLayout"
  ], Xp = (
    /** @class */
    function() {
      function r(t) {
        M(px, function(e) {
          this[e] = gt(t[e], t);
        }, this);
      }
      return r;
    }()
  ), If = {}, Is = (
    /** @class */
    function() {
      function r() {
        this._coordinateSystems = [];
      }
      return r.prototype.create = function(t, e) {
        var n = [];
        M(If, function(i, a) {
          var o = i.create(t, e);
          n = n.concat(o || []);
        }), this._coordinateSystems = n;
      }, r.prototype.update = function(t, e) {
        M(this._coordinateSystems, function(n) {
          n.update && n.update(t, e);
        });
      }, r.prototype.getCoordinateSystems = function() {
        return this._coordinateSystems.slice();
      }, r.register = function(t, e) {
        If[t] = e;
      }, r.get = function(t) {
        return If[t];
      }, r;
    }()
  ), gx = /^(min|max)?(.+)$/, yx = (
    /** @class */
    function() {
      function r(t) {
        this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = t;
      }
      return r.prototype.setOption = function(t, e, n) {
        t && (M(Jt(t.series), function(o) {
          o && o.data && Kt(o.data) && Oi(o.data);
        }), M(Jt(t.dataset), function(o) {
          o && o.source && Kt(o.source) && Oi(o.source);
        })), t = nt(t);
        var i = this._optionBackup, a = mx(t, e, !i);
        this._newBaseOption = a.baseOption, i ? (a.timelineOptions.length && (i.timelineOptions = a.timelineOptions), a.mediaList.length && (i.mediaList = a.mediaList), a.mediaDefault && (i.mediaDefault = a.mediaDefault)) : this._optionBackup = a;
      }, r.prototype.mountOption = function(t) {
        var e = this._optionBackup;
        return this._timelineOptions = e.timelineOptions, this._mediaList = e.mediaList, this._mediaDefault = e.mediaDefault, this._currentMediaIndices = [], nt(t ? e.baseOption : this._newBaseOption);
      }, r.prototype.getTimelineOption = function(t) {
        var e, n = this._timelineOptions;
        if (n.length) {
          var i = t.getComponent("timeline");
          i && (e = nt(
            // FIXME:TS as TimelineModel or quivlant interface
            n[i.getCurrentIndex()]
          ));
        }
        return e;
      }, r.prototype.getMediaOption = function(t) {
        var e = this._api.getWidth(), n = this._api.getHeight(), i = this._mediaList, a = this._mediaDefault, o = [], s = [];
        if (!i.length && !a)
          return s;
        for (var l = 0, u = i.length; l < u; l++)
          _x(i[l].query, e, n) && o.push(l);
        return !o.length && a && (o = [-1]), o.length && !bx(o, this._currentMediaIndices) && (s = V(o, function(f) {
          return nt(f === -1 ? a.option : i[f].option);
        })), this._currentMediaIndices = o, s;
      }, r;
    }()
  );
  function mx(r, t, e) {
    var n = [], i, a, o = r.baseOption, s = r.timeline, l = r.options, u = r.media, f = !!r.media, h = !!(l || s || o && o.timeline);
    o ? (a = o, a.timeline || (a.timeline = s)) : ((h || f) && (r.options = r.media = null), a = r), f && (F(u) ? M(u, function(v) {
      v && !v.option && W(v.query) && W(v.query.option) && Wt("Illegal media option. Must be like { media: [ { query: {}, option: {} } ] }"), v && v.option && (v.query ? n.push(v) : i || (i = v));
    }) : Wt("Illegal media option. Must be an array. Like { media: [ {...}, {...} ] }")), c(a), M(l, function(v) {
      return c(v);
    }), M(n, function(v) {
      return c(v.option);
    });
    function c(v) {
      M(t, function(d) {
        d(v, e);
      });
    }
    return {
      baseOption: a,
      timelineOptions: l || [],
      mediaDefault: i,
      mediaList: n
    };
  }
  function _x(r, t, e) {
    var n = {
      width: t,
      height: e,
      aspectratio: t / e
      // lower case for convenience.
    }, i = !0;
    return M(r, function(a, o) {
      var s = o.match(gx);
      if (!(!s || !s[1] || !s[2])) {
        var l = s[1], u = s[2].toLowerCase();
        Sx(n[u], a, l) || (i = !1);
      }
    }), i;
  }
  function Sx(r, t, e) {
    return e === "min" ? r >= t : e === "max" ? r <= t : r === t;
  }
  function bx(r, t) {
    return r.join(",") === t.join(",");
  }
  var Oe = M, Aa = W, qp = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
  function Rf(r) {
    var t = r && r.itemStyle;
    if (t)
      for (var e = 0, n = qp.length; e < n; e++) {
        var i = qp[e], a = t.normal, o = t.emphasis;
        a && a[i] && (Rt("itemStyle.normal." + i, i), r[i] = r[i] || {}, r[i].normal ? ot(r[i].normal, a[i]) : r[i].normal = a[i], a[i] = null), o && o[i] && (Rt("itemStyle.emphasis." + i, "emphasis." + i), r[i] = r[i] || {}, r[i].emphasis ? ot(r[i].emphasis, o[i]) : r[i].emphasis = o[i], o[i] = null);
      }
  }
  function Xt(r, t, e) {
    if (r && r[t] && (r[t].normal || r[t].emphasis)) {
      var n = r[t].normal, i = r[t].emphasis;
      n && (We("'normal' hierarchy in " + t + " has been removed since 4.0. All style properties are configured in " + t + " directly now."), e ? (r[t].normal = r[t].emphasis = null, lt(r[t], n)) : r[t] = n), i && (We(t + ".emphasis has been changed to emphasis." + t + " since 4.0"), r.emphasis = r.emphasis || {}, r.emphasis[t] = i, i.focus && (r.emphasis.focus = i.focus), i.blurScope && (r.emphasis.blurScope = i.blurScope));
    }
  }
  function La(r) {
    Xt(r, "itemStyle"), Xt(r, "lineStyle"), Xt(r, "areaStyle"), Xt(r, "label"), Xt(r, "labelLine"), Xt(r, "upperLabel"), Xt(r, "edgeLabel");
  }
  function Lt(r, t) {
    var e = Aa(r) && r[t], n = Aa(e) && e.textStyle;
    if (n) {
      We("textStyle hierarchy in " + t + " has been removed since 4.0. All textStyle properties are configured in " + t + " directly now.");
      for (var i = 0, a = Nc.length; i < a; i++) {
        var o = Nc[i];
        n.hasOwnProperty(o) && (e[o] = n[o]);
      }
    }
  }
  function Be(r) {
    r && (La(r), Lt(r, "label"), r.emphasis && Lt(r.emphasis, "label"));
  }
  function xx(r) {
    if (Aa(r)) {
      Rf(r), La(r), Lt(r, "label"), Lt(r, "upperLabel"), Lt(r, "edgeLabel"), r.emphasis && (Lt(r.emphasis, "label"), Lt(r.emphasis, "upperLabel"), Lt(r.emphasis, "edgeLabel"));
      var t = r.markPoint;
      t && (Rf(t), Be(t));
      var e = r.markLine;
      e && (Rf(e), Be(e));
      var n = r.markArea;
      n && Be(n);
      var i = r.data;
      if (r.type === "graph") {
        i = i || r.nodes;
        var a = r.links || r.edges;
        if (a && !Kt(a))
          for (var o = 0; o < a.length; o++)
            Be(a[o]);
        M(r.categories, function(u) {
          La(u);
        });
      }
      if (i && !Kt(i))
        for (var o = 0; o < i.length; o++)
          Be(i[o]);
      if (t = r.markPoint, t && t.data)
        for (var s = t.data, o = 0; o < s.length; o++)
          Be(s[o]);
      if (e = r.markLine, e && e.data)
        for (var l = e.data, o = 0; o < l.length; o++)
          F(l[o]) ? (Be(l[o][0]), Be(l[o][1])) : Be(l[o]);
      r.type === "gauge" ? (Lt(r, "axisLabel"), Lt(r, "title"), Lt(r, "detail")) : r.type === "treemap" ? (Xt(r.breadcrumb, "itemStyle"), M(r.levels, function(u) {
        La(u);
      })) : r.type === "tree" && La(r.leaves);
    }
  }
  function br(r) {
    return F(r) ? r : r ? [r] : [];
  }
  function Zp(r) {
    return (F(r) ? r[0] : r) || {};
  }
  function Tx(r, t) {
    Oe(br(r.series), function(n) {
      Aa(n) && xx(n);
    });
    var e = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
    t && e.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), Oe(e, function(n) {
      Oe(br(r[n]), function(i) {
        i && (Lt(i, "axisLabel"), Lt(i.axisPointer, "label"));
      });
    }), Oe(br(r.parallel), function(n) {
      var i = n && n.parallelAxisDefault;
      Lt(i, "axisLabel"), Lt(i && i.axisPointer, "label");
    }), Oe(br(r.calendar), function(n) {
      Xt(n, "itemStyle"), Lt(n, "dayLabel"), Lt(n, "monthLabel"), Lt(n, "yearLabel");
    }), Oe(br(r.radar), function(n) {
      Lt(n, "name"), n.name && n.axisName == null && (n.axisName = n.name, delete n.name, We("name property in radar component has been changed to axisName")), n.nameGap != null && n.axisNameGap == null && (n.axisNameGap = n.nameGap, delete n.nameGap, We("nameGap property in radar component has been changed to axisNameGap")), Oe(n.indicator, function(i) {
        i.text && Rt("text", "name", "radar.indicator");
      });
    }), Oe(br(r.geo), function(n) {
      Aa(n) && (Be(n), Oe(br(n.regions), function(i) {
        Be(i);
      }));
    }), Oe(br(r.timeline), function(n) {
      Be(n), Xt(n, "label"), Xt(n, "itemStyle"), Xt(n, "controlStyle", !0);
      var i = n.data;
      F(i) && M(i, function(a) {
        W(a) && (Xt(a, "label"), Xt(a, "itemStyle"));
      });
    }), Oe(br(r.toolbox), function(n) {
      Xt(n, "iconStyle"), Oe(n.feature, function(i) {
        Xt(i, "iconStyle");
      });
    }), Lt(Zp(r.axisPointer), "label"), Lt(Zp(r.tooltip).axisPointer, "label");
  }
  function Cx(r, t) {
    for (var e = t.split(","), n = r, i = 0; i < e.length && (n = n && n[e[i]], n != null); i++)
      ;
    return n;
  }
  function Dx(r, t, e, n) {
    for (var i = t.split(","), a = r, o, s = 0; s < i.length - 1; s++)
      o = i[s], a[o] == null && (a[o] = {}), a = a[o];
    (n || a[i[s]] == null) && (a[i[s]] = e);
  }
  function $p(r) {
    r && M(Mx, function(t) {
      t[0] in r && !(t[1] in r) && (r[t[1]] = r[t[0]]);
    });
  }
  var Mx = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]], Ax = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"], Ef = [["borderRadius", "barBorderRadius"], ["borderColor", "barBorderColor"], ["borderWidth", "barBorderWidth"]];
  function Pa(r) {
    var t = r && r.itemStyle;
    if (t)
      for (var e = 0; e < Ef.length; e++) {
        var n = Ef[e][1], i = Ef[e][0];
        t[n] != null && (t[i] = t[n], Rt(n, i));
      }
  }
  function Kp(r) {
    r && r.alignTo === "edge" && r.margin != null && r.edgeDistance == null && (Rt("label.margin", "label.edgeDistance", "pie"), r.edgeDistance = r.margin);
  }
  function Qp(r) {
    r && r.downplay && !r.blur && (r.blur = r.downplay, Rt("downplay", "blur", "sunburst"));
  }
  function Lx(r) {
    r && r.focusNodeAdjacency != null && (r.emphasis = r.emphasis || {}, r.emphasis.focus == null && (Rt("focusNodeAdjacency", "emphasis: { focus: 'adjacency'}", "graph/sankey"), r.emphasis.focus = "adjacency"));
  }
  function jp(r, t) {
    if (r)
      for (var e = 0; e < r.length; e++)
        t(r[e]), r[e] && jp(r[e].children, t);
  }
  function Jp(r, t) {
    Tx(r, t), r.series = Jt(r.series), M(r.series, function(e) {
      if (W(e)) {
        var n = e.type;
        if (n === "line")
          e.clipOverflow != null && (e.clip = e.clipOverflow, Rt("clipOverflow", "clip", "line"));
        else if (n === "pie" || n === "gauge") {
          e.clockWise != null && (e.clockwise = e.clockWise, Rt("clockWise", "clockwise")), Kp(e.label);
          var i = e.data;
          if (i && !Kt(i))
            for (var a = 0; a < i.length; a++)
              Kp(i[a]);
          e.hoverOffset != null && (e.emphasis = e.emphasis || {}, (e.emphasis.scaleSize = null) && (Rt("hoverOffset", "emphasis.scaleSize"), e.emphasis.scaleSize = e.hoverOffset));
        } else if (n === "gauge") {
          var o = Cx(e, "pointer.color");
          o != null && Dx(e, "itemStyle.color", o);
        } else if (n === "bar") {
          Pa(e), Pa(e.backgroundStyle), Pa(e.emphasis);
          var i = e.data;
          if (i && !Kt(i))
            for (var a = 0; a < i.length; a++)
              typeof i[a] == "object" && (Pa(i[a]), Pa(i[a] && i[a].emphasis));
        } else if (n === "sunburst") {
          var s = e.highlightPolicy;
          s && (e.emphasis = e.emphasis || {}, e.emphasis.focus || (e.emphasis.focus = s, Rt("highlightPolicy", "emphasis.focus", "sunburst"))), Qp(e), jp(e.data, Qp);
        } else
          n === "graph" || n === "sankey" ? Lx(e) : n === "map" && (e.mapType && !e.map && (Rt("mapType", "map", "map"), e.map = e.mapType), e.mapLocation && (We("`mapLocation` is not used anymore."), lt(e, e.mapLocation)));
        e.hoverAnimation != null && (e.emphasis = e.emphasis || {}, e.emphasis && e.emphasis.scale == null && (Rt("hoverAnimation", "emphasis.scale"), e.emphasis.scale = e.hoverAnimation)), $p(e);
      }
    }), r.dataRange && (r.visualMap = r.dataRange), M(Ax, function(e) {
      var n = r[e];
      n && (F(n) || (n = [n]), M(n, function(i) {
        $p(i);
      }));
    });
  }
  function Px(r) {
    var t = J();
    r.eachSeries(function(e) {
      var n = e.get("stack");
      if (n) {
        var i = t.get(n) || t.set(n, []), a = e.getData(), o = {
          // Used for calculate axis extent automatically.
          // TODO: Type getCalculationInfo return more specific type?
          stackResultDimension: a.getCalculationInfo("stackResultDimension"),
          stackedOverDimension: a.getCalculationInfo("stackedOverDimension"),
          stackedDimension: a.getCalculationInfo("stackedDimension"),
          stackedByDimension: a.getCalculationInfo("stackedByDimension"),
          isStackedByIndex: a.getCalculationInfo("isStackedByIndex"),
          data: a,
          seriesModel: e
        };
        if (!o.stackedDimension || !(o.isStackedByIndex || o.stackedByDimension))
          return;
        i.length && a.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), i.push(o);
      }
    }), t.each(Ix);
  }
  function Ix(r) {
    M(r, function(t, e) {
      var n = [], i = [NaN, NaN], a = [t.stackResultDimension, t.stackedOverDimension], o = t.data, s = t.isStackedByIndex, l = t.seriesModel.get("stackStrategy") || "samesign";
      o.modify(a, function(u, f, h) {
        var c = o.get(t.stackedDimension, h);
        if (isNaN(c))
          return i;
        var v, d;
        s ? d = o.getRawIndex(h) : v = o.get(t.stackedByDimension, h);
        for (var g = NaN, p = e - 1; p >= 0; p--) {
          var y = r[p];
          if (s || (d = y.data.rawIndexOf(y.stackedByDimension, v)), d >= 0) {
            var m = y.data.getByRawIndex(y.stackResultDimension, d);
            if (l === "all" || l === "positive" && m > 0 || l === "negative" && m < 0 || l === "samesign" && c >= 0 && m > 0 || l === "samesign" && c <= 0 && m < 0) {
              c = nS(c, m), g = m;
              break;
            }
          }
        }
        return n[0] = c, n[1] = g, n;
      });
    });
  }
  var Rs = (
    /** @class */
    function() {
      function r(t) {
        this.data = t.data || (t.sourceFormat === sr ? {} : []), this.sourceFormat = t.sourceFormat || Bp, this.seriesLayoutBy = t.seriesLayoutBy || lr, this.startIndex = t.startIndex || 0, this.dimensionsDetectedCount = t.dimensionsDetectedCount, this.metaRawOption = t.metaRawOption;
        var e = this.dimensionsDefine = t.dimensionsDefine;
        if (e)
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.type == null && Fp(this, n) === zt.Must && (i.type = "ordinal");
          }
      }
      return r;
    }()
  );
  function kf(r) {
    return r instanceof Rs;
  }
  function Of(r, t, e) {
    e = e || tg(r);
    var n = t.seriesLayoutBy, i = Ex(r, e, n, t.sourceHeader, t.dimensions), a = new Rs({
      data: r,
      sourceFormat: e,
      seriesLayoutBy: n,
      dimensionsDefine: i.dimensionsDefine,
      startIndex: i.startIndex,
      dimensionsDetectedCount: i.dimensionsDetectedCount,
      metaRawOption: nt(t)
    });
    return a;
  }
  function Bf(r) {
    return new Rs({
      data: r,
      sourceFormat: Kt(r) ? wr : ke
    });
  }
  function Rx(r) {
    return new Rs({
      data: r.data,
      sourceFormat: r.sourceFormat,
      seriesLayoutBy: r.seriesLayoutBy,
      dimensionsDefine: nt(r.dimensionsDefine),
      startIndex: r.startIndex,
      dimensionsDetectedCount: r.dimensionsDetectedCount
    });
  }
  function tg(r) {
    var t = Bp;
    if (Kt(r))
      t = wr;
    else if (F(r)) {
      r.length === 0 && (t = le);
      for (var e = 0, n = r.length; e < n; e++) {
        var i = r[e];
        if (i != null) {
          if (F(i)) {
            t = le;
            break;
          } else if (W(i)) {
            t = Xe;
            break;
          }
        }
      }
    } else if (W(r)) {
      for (var a in r)
        if (on(r, a) && $t(r[a])) {
          t = sr;
          break;
        }
    }
    return t;
  }
  function Ex(r, t, e, n, i) {
    var a, o;
    if (!r)
      return {
        dimensionsDefine: eg(i),
        startIndex: o,
        dimensionsDetectedCount: a
      };
    if (t === le) {
      var s = r;
      n === "auto" || n == null ? rg(function(u) {
        u != null && u !== "-" && (H(u) ? o == null && (o = 1) : o = 0);
      }, e, s, 10) : o = pt(n) ? n : n ? 1 : 0, !i && o === 1 && (i = [], rg(function(u, f) {
        i[f] = u != null ? u + "" : "";
      }, e, s, 1 / 0)), a = i ? i.length : e === bi ? s.length : s[0] ? s[0].length : null;
    } else if (t === Xe)
      i || (i = kx(r));
    else if (t === sr)
      i || (i = [], M(r, function(u, f) {
        i.push(f);
      }));
    else if (t === ke) {
      var l = ea(r[0]);
      a = F(l) && l.length || 1;
    } else
      t === wr && j(!!i, "dimensions must be given if data is TypedArray.");
    return {
      startIndex: o,
      dimensionsDefine: eg(i),
      dimensionsDetectedCount: a
    };
  }
  function kx(r) {
    for (var t = 0, e; t < r.length && !(e = r[t++]); )
      ;
    if (e)
      return yt(e);
  }
  function eg(r) {
    if (r) {
      var t = J();
      return V(r, function(e, n) {
        e = W(e) ? e : {
          name: e
        };
        var i = {
          name: e.name,
          displayName: e.displayName,
          type: e.type
        };
        if (i.name == null)
          return i;
        i.name += "", i.displayName == null && (i.displayName = i.name);
        var a = t.get(i.name);
        return a ? i.name += "-" + a.count++ : t.set(i.name, {
          count: 1
        }), i;
      });
    }
  }
  function rg(r, t, e, n) {
    if (t === bi)
      for (var i = 0; i < e.length && i < n; i++)
        r(e[i] ? e[i][0] : null, i);
    else
      for (var a = e[0] || [], i = 0; i < a.length && i < n; i++)
        r(a[i], i);
  }
  function ng(r) {
    var t = r.sourceFormat;
    return t === Xe || t === sr;
  }
  var kn, On, Bn, ig, ag, og = (
    /** @class */
    function() {
      function r(t, e) {
        var n = kf(t) ? t : Bf(t);
        this._source = n;
        var i = this._data = n.data;
        if (n.sourceFormat === wr) {
          if (e == null)
            throw new Error("Typed array data must specify dimension size");
          this._offset = 0, this._dimSize = e, this._data = i;
        }
        ag(this, i, n);
      }
      return r.prototype.getSource = function() {
        return this._source;
      }, r.prototype.count = function() {
        return 0;
      }, r.prototype.getItem = function(t, e) {
      }, r.prototype.appendData = function(t) {
      }, r.prototype.clean = function() {
      }, r.protoInitialize = function() {
        var t = r.prototype;
        t.pure = !1, t.persistent = !0;
      }(), r.internalField = function() {
        var t;
        ag = function(o, s, l) {
          var u = l.sourceFormat, f = l.seriesLayoutBy, h = l.startIndex, c = l.dimensionsDefine, v = ig[Ff(u, f)];
          if (j(v, "Invalide sourceFormat: " + u), O(o, v), u === wr)
            o.getItem = e, o.count = i, o.fillStorage = n;
          else {
            var d = lg(u, f);
            o.getItem = gt(d, null, s, h, c);
            var g = fg(u, f);
            o.count = gt(g, null, s, h, c);
          }
        };
        var e = function(o, s) {
          o = o - this._offset, s = s || [];
          for (var l = this._data, u = this._dimSize, f = u * o, h = 0; h < u; h++)
            s[h] = l[f + h];
          return s;
        }, n = function(o, s, l, u) {
          for (var f = this._data, h = this._dimSize, c = 0; c < h; c++) {
            for (var v = u[c], d = v[0] == null ? 1 / 0 : v[0], g = v[1] == null ? -1 / 0 : v[1], p = s - o, y = l[c], m = 0; m < p; m++) {
              var _ = f[m * h + c];
              y[o + m] = _, _ < d && (d = _), _ > g && (g = _);
            }
            v[0] = d, v[1] = g;
          }
        }, i = function() {
          return this._data ? this._data.length / this._dimSize : 0;
        };
        ig = (t = {}, t[le + "_" + lr] = {
          pure: !0,
          appendData: a
        }, t[le + "_" + bi] = {
          pure: !0,
          appendData: function() {
            throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
          }
        }, t[Xe] = {
          pure: !0,
          appendData: a
        }, t[sr] = {
          pure: !0,
          appendData: function(o) {
            var s = this._data;
            M(o, function(l, u) {
              for (var f = s[u] || (s[u] = []), h = 0; h < (l || []).length; h++)
                f.push(l[h]);
            });
          }
        }, t[ke] = {
          appendData: a
        }, t[wr] = {
          persistent: !1,
          pure: !0,
          appendData: function(o) {
            j(Kt(o), "Added data must be TypedArray if data in initialization is TypedArray"), this._data = o;
          },
          // Clean self if data is already used.
          clean: function() {
            this._offset += this.count(), this._data = null;
          }
        }, t);
        function a(o) {
          for (var s = 0; s < o.length; s++)
            this._data.push(o[s]);
        }
      }(), r;
    }()
  ), sg = function(r, t, e, n) {
    return r[n];
  }, Ox = (kn = {}, kn[le + "_" + lr] = function(r, t, e, n) {
    return r[n + t];
  }, kn[le + "_" + bi] = function(r, t, e, n, i) {
    n += t;
    for (var a = i || [], o = r, s = 0; s < o.length; s++) {
      var l = o[s];
      a[s] = l ? l[n] : null;
    }
    return a;
  }, kn[Xe] = sg, kn[sr] = function(r, t, e, n, i) {
    for (var a = i || [], o = 0; o < e.length; o++) {
      var s = e[o].name;
      if (s == null)
        throw new Error();
      var l = r[s];
      a[o] = l ? l[n] : null;
    }
    return a;
  }, kn[ke] = sg, kn);
  function lg(r, t) {
    var e = Ox[Ff(r, t)];
    return j(e, 'Do not support get item on "' + r + '", "' + t + '".'), e;
  }
  var ug = function(r, t, e) {
    return r.length;
  }, Bx = (On = {}, On[le + "_" + lr] = function(r, t, e) {
    return Math.max(0, r.length - t);
  }, On[le + "_" + bi] = function(r, t, e) {
    var n = r[0];
    return n ? Math.max(0, n.length - t) : 0;
  }, On[Xe] = ug, On[sr] = function(r, t, e) {
    var n = e[0].name;
    if (n == null)
      throw new Error();
    var i = r[n];
    return i ? i.length : 0;
  }, On[ke] = ug, On);
  function fg(r, t) {
    var e = Bx[Ff(r, t)];
    return j(e, 'Do not support count on "' + r + '", "' + t + '".'), e;
  }
  var Nf = function(r, t, e) {
    return r[t];
  }, Nx = (Bn = {}, Bn[le] = Nf, Bn[Xe] = function(r, t, e) {
    return r[e];
  }, Bn[sr] = Nf, Bn[ke] = function(r, t, e) {
    var n = ea(r);
    return n instanceof Array ? n[t] : n;
  }, Bn[wr] = Nf, Bn);
  function hg(r) {
    var t = Nx[r];
    return j(t, 'Do not support get value on "' + r + '".'), t;
  }
  function Ff(r, t) {
    return r === le ? r + "_" + t : r;
  }
  function xi(r, t, e) {
    if (r) {
      var n = r.getRawDataItem(t);
      if (n != null) {
        var i = r.getStore(), a = i.getSource().sourceFormat;
        if (e != null) {
          var o = r.getDimensionIndex(e), s = i.getDimensionProperty(o);
          return hg(a)(n, o, s);
        } else {
          var l = n;
          return a === ke && (l = ea(n)), l;
        }
      }
    }
  }
  var Fx = /\{@(.+?)\}/g, zx = (
    /** @class */
    function() {
      function r() {
      }
      return r.prototype.getDataParams = function(t, e) {
        var n = this.getData(e), i = this.getRawValue(t, e), a = n.getRawIndex(t), o = n.getName(t), s = n.getRawDataItem(t), l = n.getItemVisual(t, "style"), u = l && l[n.getItemVisual(t, "drawType") || "fill"], f = l && l.stroke, h = this.mainType, c = h === "series", v = n.userOutput && n.userOutput.get();
        return {
          componentType: h,
          componentSubType: this.subType,
          componentIndex: this.componentIndex,
          seriesType: c ? this.subType : null,
          seriesIndex: this.seriesIndex,
          seriesId: c ? this.id : null,
          seriesName: c ? this.name : null,
          name: o,
          dataIndex: a,
          data: s,
          dataType: e,
          value: i,
          color: u,
          borderColor: f,
          dimensionNames: v ? v.fullDimensions : null,
          encode: v ? v.encode : null,
          // Param name list for mapping `a`, `b`, `c`, `d`, `e`
          $vars: ["seriesName", "name", "value"]
        };
      }, r.prototype.getFormattedLabel = function(t, e, n, i, a, o) {
        e = e || "normal";
        var s = this.getData(n), l = this.getDataParams(t, n);
        if (o && (l.value = o.interpolatedValue), i != null && F(l.value) && (l.value = l.value[i]), !a) {
          var u = s.getItemModel(t);
          a = u.get(e === "normal" ? ["label", "formatter"] : [e, "label", "formatter"]);
        }
        if (X(a))
          return l.status = e, l.dimensionIndex = i, a(l);
        if (H(a)) {
          var f = Tf(a, l);
          return f.replace(Fx, function(h, c) {
            var v = c.length, d = c;
            d.charAt(0) === "[" && d.charAt(v - 1) === "]" && (d = +d.slice(1, v - 1), isNaN(d) && Wt("Invalide label formatter: @" + c + ", only support @[0], @[1], @[2], ..."));
            var g = xi(s, t, d);
            if (o && F(o.interpolatedValue)) {
              var p = s.getDimensionIndex(d);
              p >= 0 && (g = o.interpolatedValue[p]);
            }
            return g != null ? g + "" : "";
          });
        }
      }, r.prototype.getRawValue = function(t, e) {
        return xi(this.getData(e), t);
      }, r.prototype.formatTooltip = function(t, e, n) {
      }, r;
    }()
  );
  function vg(r) {
    var t, e;
    return W(r) ? r.type ? e = r : console.warn("The return type of `formatTooltip` is not supported: " + Bo(r)) : t = r, {
      text: t,
      // markers: markers || markersExisting,
      frag: e
    };
  }
  function Ia(r) {
    return new Gx(r);
  }
  var Gx = (
    /** @class */
    function() {
      function r(t) {
        t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0;
      }
      return r.prototype.perform = function(t) {
        var e = this._upstream, n = t && t.skip;
        if (this._dirty && e) {
          var i = this.context;
          i.data = i.outputData = e.context.outputData;
        }
        this.__pipeline && (this.__pipeline.currentTask = this);
        var a;
        this._plan && !n && (a = this._plan(this.context));
        var o = f(this._modBy), s = this._modDataCount || 0, l = f(t && t.modBy), u = t && t.modDataCount || 0;
        (o !== l || s !== u) && (a = "reset");
        function f(m) {
          return !(m >= 1) && (m = 1), m;
        }
        var h;
        (this._dirty || a === "reset") && (this._dirty = !1, h = this._doReset(n)), this._modBy = l, this._modDataCount = u;
        var c = t && t.step;
        if (e ? (j(e._outputDueEnd != null), this._dueEnd = e._outputDueEnd) : (j(!this._progress || this._count), this._dueEnd = this._count ? this._count(this.context) : 1 / 0), this._progress) {
          var v = this._dueIndex, d = Math.min(c != null ? this._dueIndex + c : 1 / 0, this._dueEnd);
          if (!n && (h || v < d)) {
            var g = this._progress;
            if (F(g))
              for (var p = 0; p < g.length; p++)
                this._doProgress(g[p], v, d, l, u);
            else
              this._doProgress(g, v, d, l, u);
          }
          this._dueIndex = d;
          var y = this._settedOutputEnd != null ? this._settedOutputEnd : d;
          j(y >= this._outputDueEnd), this._outputDueEnd = y;
        } else
          this._dueIndex = this._outputDueEnd = this._settedOutputEnd != null ? this._settedOutputEnd : this._dueEnd;
        return this.unfinished();
      }, r.prototype.dirty = function() {
        this._dirty = !0, this._onDirty && this._onDirty(this.context);
      }, r.prototype._doProgress = function(t, e, n, i, a) {
        cg.reset(e, n, i, a), this._callingProgress = t, this._callingProgress({
          start: e,
          end: n,
          count: n - e,
          next: cg.next
        }, this.context);
      }, r.prototype._doReset = function(t) {
        this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null;
        var e, n;
        !t && this._reset && (e = this._reset(this.context), e && e.progress && (n = e.forceFirstProgress, e = e.progress), F(e) && !e.length && (e = null)), this._progress = e, this._modBy = this._modDataCount = null;
        var i = this._downstream;
        return i && i.dirty(), n;
      }, r.prototype.unfinished = function() {
        return this._progress && this._dueIndex < this._dueEnd;
      }, r.prototype.pipe = function(t) {
        j(t && !t._disposed && t !== this), (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty());
      }, r.prototype.dispose = function() {
        this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0);
      }, r.prototype.getUpstream = function() {
        return this._upstream;
      }, r.prototype.getDownstream = function() {
        return this._downstream;
      }, r.prototype.setOutputEnd = function(t) {
        this._outputDueEnd = this._settedOutputEnd = t;
      }, r;
    }()
  ), cg = function() {
    var r, t, e, n, i, a = {
      reset: function(l, u, f, h) {
        t = l, r = u, e = f, n = h, i = Math.ceil(n / e), a.next = e > 1 && n > 0 ? s : o;
      }
    };
    return a;
    function o() {
      return t < r ? t++ : null;
    }
    function s() {
      var l = t % i * e + Math.ceil(t / i), u = t >= r ? null : l < n ? l : t;
      return t++, u;
    }
  }();
  function Es(r, t) {
    var e = t && t.type;
    return e === "ordinal" ? r : (e === "time" && !pt(r) && r != null && r !== "-" && (r = +Me(r)), r == null || r === "" ? NaN : +r);
  }
  J({
    number: function(r) {
      return parseFloat(r);
    },
    time: function(r) {
      return +Me(r);
    },
    trim: function(r) {
      return H(r) ? Ge(r) : r;
    }
  });
  var Hx = (
    /** @class */
    function() {
      function r(t, e) {
        var n = t === "desc";
        this._resultLT = n ? 1 : -1, e == null && (e = n ? "min" : "max"), this._incomparable = e === "min" ? -1 / 0 : 1 / 0;
      }
      return r.prototype.evaluate = function(t, e) {
        var n = pt(t) ? t : ta(t), i = pt(e) ? e : ta(e), a = isNaN(n), o = isNaN(i);
        if (a && (n = this._incomparable), o && (i = this._incomparable), a && o) {
          var s = H(t), l = H(e);
          s && (n = l ? t : 0), l && (i = s ? e : 0);
        }
        return n < i ? this._resultLT : n > i ? -this._resultLT : 0;
      }, r;
    }()
  ), Vx = (
    /** @class */
    function() {
      function r() {
      }
      return r.prototype.getRawData = function() {
        throw new Error("not supported");
      }, r.prototype.getRawDataItem = function(t) {
        throw new Error("not supported");
      }, r.prototype.cloneRawData = function() {
      }, r.prototype.getDimensionInfo = function(t) {
      }, r.prototype.cloneAllDimensionInfo = function() {
      }, r.prototype.count = function() {
      }, r.prototype.retrieveValue = function(t, e) {
      }, r.prototype.retrieveValueFromItem = function(t, e) {
      }, r.prototype.convertValue = function(t, e) {
        return Es(t, e);
      }, r;
    }()
  );
  function Wx(r, t) {
    var e = new Vx(), n = r.data, i = e.sourceFormat = r.sourceFormat, a = r.startIndex, o = "";
    r.seriesLayoutBy !== lr && (o = '`seriesLayoutBy` of upstream dataset can only be "column" in data transform.', ae(o));
    var s = [], l = {}, u = r.dimensionsDefine;
    if (u)
      M(u, function(g, p) {
        var y = g.name, m = {
          index: p,
          name: y,
          displayName: g.displayName
        };
        if (s.push(m), y != null) {
          var _ = "";
          on(l, y) && (_ = 'dimension name "' + y + '" duplicated.', ae(_)), l[y] = m;
        }
      });
    else
      for (var f = 0; f < r.dimensionsDetectedCount; f++)
        s.push({
          index: f
        });
    var h = lg(i, lr);
    t.__isBuiltIn && (e.getRawDataItem = function(g) {
      return h(n, a, s, g);
    }, e.getRawData = gt(Ux, null, r)), e.cloneRawData = gt(Yx, null, r);
    var c = fg(i, lr);
    e.count = gt(c, null, n, a, s);
    var v = hg(i);
    e.retrieveValue = function(g, p) {
      var y = h(n, a, s, g);
      return d(y, p);
    };
    var d = e.retrieveValueFromItem = function(g, p) {
      if (g != null) {
        var y = s[p];
        if (y)
          return v(g, p, y.name);
      }
    };
    return e.getDimensionInfo = gt(Xx, null, s, l), e.cloneAllDimensionInfo = gt(qx, null, s), e;
  }
  function Ux(r) {
    var t = r.sourceFormat;
    if (!zf(t)) {
      var e = "";
      e = "`getRawData` is not supported in source format " + t, ae(e);
    }
    return r.data;
  }
  function Yx(r) {
    var t = r.sourceFormat, e = r.data;
    if (!zf(t)) {
      var n = "";
      n = "`cloneRawData` is not supported in source format " + t, ae(n);
    }
    if (t === le) {
      for (var i = [], a = 0, o = e.length; a < o; a++)
        i.push(e[a].slice());
      return i;
    } else if (t === Xe) {
      for (var i = [], a = 0, o = e.length; a < o; a++)
        i.push(O({}, e[a]));
      return i;
    }
  }
  function Xx(r, t, e) {
    if (e != null) {
      if (pt(e) || !isNaN(e) && !on(t, e))
        return r[e];
      if (on(t, e))
        return t[e];
    }
  }
  function qx(r) {
    return nt(r);
  }
  var dg = J();
  function Zx(r) {
    r = nt(r);
    var t = r.type, e = "";
    t || (e = "Must have a `type` when `registerTransform`.", ae(e));
    var n = t.split(":");
    n.length !== 2 && (e = 'Name must include namespace like "ns:regression".', ae(e));
    var i = !1;
    n[0] === "echarts" && (t = n[1], i = !0), r.__isBuiltIn = i, dg.set(t, r);
  }
  function $x(r, t, e) {
    var n = Jt(r), i = n.length, a = "";
    i || (a = "If `transform` declared, it should at least contain one transform.", ae(a));
    for (var o = 0, s = i; o < s; o++) {
      var l = n[o];
      t = Kx(l, t, e, i === 1 ? null : o), o !== s - 1 && (t.length = Math.max(t.length, 1));
    }
    return t;
  }
  function Kx(r, t, e, n) {
    var i = "";
    t.length || (i = "Must have at least one upstream dataset.", ae(i)), W(r) || (i = "transform declaration must be an object rather than " + typeof r + ".", ae(i));
    var a = r.type, o = dg.get(a);
    o || (i = 'Can not find transform on type "' + a + '".', ae(i));
    var s = V(t, function(f) {
      return Wx(f, o);
    }), l = Jt(o.transform({
      upstream: s[0],
      upstreamList: s,
      config: nt(r.config)
    }));
    if (r.print) {
      var u = V(l, function(f) {
        var h = n != null ? " === pipe index: " + n : "";
        return ["=== dataset index: " + e.datasetIndex + h + " ===", "- transform result data:", Bo(f.data), "- transform result dimensions:", Bo(f.dimensions)].join(`
`);
      }).join(`
`);
      fS(u);
    }
    return V(l, function(f, h) {
      var c = "";
      W(f) || (c = "A transform should not return some empty results.", ae(c)), f.data || (c = "Transform result data should be not be null or undefined", ae(c));
      var v = tg(f.data);
      zf(v) || (c = "Transform result data should be array rows or object rows.", ae(c));
      var d, g = t[0];
      if (g && h === 0 && !f.dimensions) {
        var p = g.startIndex;
        p && (f.data = g.data.slice(0, p).concat(f.data)), d = {
          seriesLayoutBy: lr,
          sourceHeader: p,
          dimensions: g.metaRawOption.dimensions
        };
      } else
        d = {
          seriesLayoutBy: lr,
          sourceHeader: 0,
          dimensions: f.dimensions
        };
      return Of(f.data, d, null);
    });
  }
  function zf(r) {
    return r === le || r === Xe;
  }
  var ks = "undefined", Qx = typeof Uint32Array === ks ? Array : Uint32Array, jx = typeof Uint16Array === ks ? Array : Uint16Array, pg = typeof Int32Array === ks ? Array : Int32Array, gg = typeof Float64Array === ks ? Array : Float64Array, yg = {
    float: gg,
    int: pg,
    // Ordinal data type can be string or int
    ordinal: Array,
    number: Array,
    time: gg
  }, Gf;
  function Ra(r) {
    return r > 65535 ? Qx : jx;
  }
  function Ti() {
    return [1 / 0, -1 / 0];
  }
  function Jx(r) {
    var t = r.constructor;
    return t === Array ? r.slice() : new t(r);
  }
  function mg(r, t, e, n, i) {
    var a = yg[e || "float"];
    if (i) {
      var o = r[t], s = o && o.length;
      if (s !== n) {
        for (var l = new a(n), u = 0; u < s; u++)
          l[u] = o[u];
        r[t] = l;
      }
    } else
      r[t] = new a(n);
  }
  var Hf = (
    /** @class */
    function() {
      function r() {
        this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = J();
      }
      return r.prototype.initData = function(t, e, n) {
        j(X(t.getItem) && X(t.count), "Invalid data provider."), this._provider = t, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
        var i = t.getSource(), a = this.defaultDimValueGetter = Gf[i.sourceFormat];
        this._dimValueGetter = n || a, this._rawExtent = [];
        var o = ng(i);
        this._dimensions = V(e, function(s) {
          return o && j(s.property != null), {
            // Only pick these two props. Not leak other properties like orderMeta.
            type: s.type,
            property: s.property
          };
        }), this._initDataFromProvider(0, t.count());
      }, r.prototype.getProvider = function() {
        return this._provider;
      }, r.prototype.getSource = function() {
        return this._provider.getSource();
      }, r.prototype.ensureCalculationDimension = function(t, e) {
        var n = this._calcDimNameToIdx, i = this._dimensions, a = n.get(t);
        if (a != null) {
          if (i[a].type === e)
            return a;
        } else
          a = i.length;
        return i[a] = {
          type: e
        }, n.set(t, a), this._chunks[a] = new yg[e || "float"](this._rawCount), this._rawExtent[a] = Ti(), a;
      }, r.prototype.collectOrdinalMeta = function(t, e) {
        var n = this._chunks[t], i = this._dimensions[t], a = this._rawExtent, o = i.ordinalOffset || 0, s = n.length;
        o === 0 && (a[t] = Ti());
        for (var l = a[t], u = o; u < s; u++) {
          var f = n[u] = e.parseAndCollect(n[u]);
          isNaN(f) || (l[0] = Math.min(f, l[0]), l[1] = Math.max(f, l[1]));
        }
        i.ordinalMeta = e, i.ordinalOffset = s, i.type = "ordinal";
      }, r.prototype.getOrdinalMeta = function(t) {
        var e = this._dimensions[t], n = e.ordinalMeta;
        return n;
      }, r.prototype.getDimensionProperty = function(t) {
        var e = this._dimensions[t];
        return e && e.property;
      }, r.prototype.appendData = function(t) {
        j(!this._indices, "appendData can only be called on raw data.");
        var e = this._provider, n = this.count();
        e.appendData(t);
        var i = e.count();
        return e.persistent || (i += n), n < i && this._initDataFromProvider(n, i, !0), [n, i];
      }, r.prototype.appendValues = function(t, e) {
        for (var n = this._chunks, i = this._dimensions, a = i.length, o = this._rawExtent, s = this.count(), l = s + Math.max(t.length, e || 0), u = 0; u < a; u++) {
          var f = i[u];
          mg(n, u, f.type, l, !0);
        }
        for (var h = [], c = s; c < l; c++)
          for (var v = c - s, d = 0; d < a; d++) {
            var f = i[d], g = Gf.arrayRows.call(this, t[v] || h, f.property, v, d);
            n[d][c] = g;
            var p = o[d];
            g < p[0] && (p[0] = g), g > p[1] && (p[1] = g);
          }
        return this._rawCount = this._count = l, {
          start: s,
          end: l
        };
      }, r.prototype._initDataFromProvider = function(t, e, n) {
        for (var i = this._provider, a = this._chunks, o = this._dimensions, s = o.length, l = this._rawExtent, u = V(o, function(m) {
          return m.property;
        }), f = 0; f < s; f++) {
          var h = o[f];
          l[f] || (l[f] = Ti()), mg(a, f, h.type, e, n);
        }
        if (i.fillStorage)
          i.fillStorage(t, e, a, l);
        else
          for (var c = [], v = t; v < e; v++) {
            c = i.getItem(v, c);
            for (var d = 0; d < s; d++) {
              var g = a[d], p = this._dimValueGetter(c, u[d], v, d);
              g[v] = p;
              var y = l[d];
              p < y[0] && (y[0] = p), p > y[1] && (y[1] = p);
            }
          }
        !i.persistent && i.clean && i.clean(), this._rawCount = this._count = e, this._extent = [];
      }, r.prototype.count = function() {
        return this._count;
      }, r.prototype.get = function(t, e) {
        if (!(e >= 0 && e < this._count))
          return NaN;
        var n = this._chunks[t];
        return n ? n[this.getRawIndex(e)] : NaN;
      }, r.prototype.getValues = function(t, e) {
        var n = [], i = [];
        if (e == null) {
          e = t, t = [];
          for (var a = 0; a < this._dimensions.length; a++)
            i.push(a);
        } else
          i = t;
        for (var a = 0, o = i.length; a < o; a++)
          n.push(this.get(i[a], e));
        return n;
      }, r.prototype.getByRawIndex = function(t, e) {
        if (!(e >= 0 && e < this._rawCount))
          return NaN;
        var n = this._chunks[t];
        return n ? n[e] : NaN;
      }, r.prototype.getSum = function(t) {
        var e = this._chunks[t], n = 0;
        if (e)
          for (var i = 0, a = this.count(); i < a; i++) {
            var o = this.get(t, i);
            isNaN(o) || (n += o);
          }
        return n;
      }, r.prototype.getMedian = function(t) {
        var e = [];
        this.each([t], function(a) {
          isNaN(a) || e.push(a);
        });
        var n = e.sort(function(a, o) {
          return a - o;
        }), i = this.count();
        return i === 0 ? 0 : i % 2 === 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2;
      }, r.prototype.indexOfRawIndex = function(t) {
        if (t >= this._rawCount || t < 0)
          return -1;
        if (!this._indices)
          return t;
        var e = this._indices, n = e[t];
        if (n != null && n < this._count && n === t)
          return t;
        for (var i = 0, a = this._count - 1; i <= a; ) {
          var o = (i + a) / 2 | 0;
          if (e[o] < t)
            i = o + 1;
          else if (e[o] > t)
            a = o - 1;
          else
            return o;
        }
        return -1;
      }, r.prototype.indicesOfNearest = function(t, e, n) {
        var i = this._chunks, a = i[t], o = [];
        if (!a)
          return o;
        n == null && (n = 1 / 0);
        for (var s = 1 / 0, l = -1, u = 0, f = 0, h = this.count(); f < h; f++) {
          var c = this.getRawIndex(f), v = e - a[c], d = Math.abs(v);
          d <= n && ((d < s || d === s && v >= 0 && l < 0) && (s = d, l = v, u = 0), v === l && (o[u++] = f));
        }
        return o.length = u, o;
      }, r.prototype.getIndices = function() {
        var t, e = this._indices;
        if (e) {
          var n = e.constructor, i = this._count;
          if (n === Array) {
            t = new n(i);
            for (var a = 0; a < i; a++)
              t[a] = e[a];
          } else
            t = new n(e.buffer, 0, i);
        } else {
          var n = Ra(this._rawCount);
          t = new n(this.count());
          for (var a = 0; a < t.length; a++)
            t[a] = a;
        }
        return t;
      }, r.prototype.filter = function(t, e) {
        if (!this._count)
          return this;
        for (var n = this.clone(), i = n.count(), a = Ra(n._rawCount), o = new a(i), s = [], l = t.length, u = 0, f = t[0], h = n._chunks, c = 0; c < i; c++) {
          var v = void 0, d = n.getRawIndex(c);
          if (l === 0)
            v = e(c);
          else if (l === 1) {
            var g = h[f][d];
            v = e(g, c);
          } else {
            for (var p = 0; p < l; p++)
              s[p] = h[t[p]][d];
            s[p] = c, v = e.apply(null, s);
          }
          v && (o[u++] = d);
        }
        return u < i && (n._indices = o), n._count = u, n._extent = [], n._updateGetRawIdx(), n;
      }, r.prototype.selectRange = function(t) {
        var e = this.clone(), n = e._count;
        if (!n)
          return this;
        var i = yt(t), a = i.length;
        if (!a)
          return this;
        var o = e.count(), s = Ra(e._rawCount), l = new s(o), u = 0, f = i[0], h = t[f][0], c = t[f][1], v = e._chunks, d = !1;
        if (!e._indices) {
          var g = 0;
          if (a === 1) {
            for (var p = v[i[0]], y = 0; y < n; y++) {
              var m = p[y];
              (m >= h && m <= c || isNaN(m)) && (l[u++] = g), g++;
            }
            d = !0;
          } else if (a === 2) {
            for (var p = v[i[0]], _ = v[i[1]], S = t[i[1]][0], b = t[i[1]][1], y = 0; y < n; y++) {
              var m = p[y], w = _[y];
              (m >= h && m <= c || isNaN(m)) && (w >= S && w <= b || isNaN(w)) && (l[u++] = g), g++;
            }
            d = !0;
          }
        }
        if (!d)
          if (a === 1)
            for (var y = 0; y < o; y++) {
              var x = e.getRawIndex(y), m = v[i[0]][x];
              (m >= h && m <= c || isNaN(m)) && (l[u++] = x);
            }
          else
            for (var y = 0; y < o; y++) {
              for (var T = !0, x = e.getRawIndex(y), D = 0; D < a; D++) {
                var A = i[D], m = v[A][x];
                (m < t[A][0] || m > t[A][1]) && (T = !1);
              }
              T && (l[u++] = e.getRawIndex(y));
            }
        return u < o && (e._indices = l), e._count = u, e._extent = [], e._updateGetRawIdx(), e;
      }, r.prototype.map = function(t, e) {
        var n = this.clone(t);
        return this._updateDims(n, t, e), n;
      }, r.prototype.modify = function(t, e) {
        this._updateDims(this, t, e);
      }, r.prototype._updateDims = function(t, e, n) {
        for (var i = t._chunks, a = [], o = e.length, s = t.count(), l = [], u = t._rawExtent, f = 0; f < e.length; f++)
          u[e[f]] = Ti();
        for (var h = 0; h < s; h++) {
          for (var c = t.getRawIndex(h), v = 0; v < o; v++)
            l[v] = i[e[v]][c];
          l[o] = h;
          var d = n && n.apply(null, l);
          if (d != null) {
            typeof d != "object" && (a[0] = d, d = a);
            for (var f = 0; f < d.length; f++) {
              var g = e[f], p = d[f], y = u[g], m = i[g];
              m && (m[c] = p), p < y[0] && (y[0] = p), p > y[1] && (y[1] = p);
            }
          }
        }
      }, r.prototype.lttbDownSample = function(t, e) {
        var n = this.clone([t], !0), i = n._chunks, a = i[t], o = this.count(), s = 0, l = Math.floor(1 / e), u = this.getRawIndex(0), f, h, c, v = new (Ra(this._rawCount))(Math.min((Math.ceil(o / l) + 2) * 2, o));
        v[s++] = u;
        for (var d = 1; d < o - 1; d += l) {
          for (var g = Math.min(d + l, o - 1), p = Math.min(d + l * 2, o), y = (p + g) / 2, m = 0, _ = g; _ < p; _++) {
            var S = this.getRawIndex(_), b = a[S];
            isNaN(b) || (m += b);
          }
          m /= p - g;
          var w = d, x = Math.min(d + l, o), T = d - 1, D = a[u];
          f = -1, c = w;
          for (var A = -1, C = 0, _ = w; _ < x; _++) {
            var S = this.getRawIndex(_), b = a[S];
            if (isNaN(b)) {
              C++, A < 0 && (A = S);
              continue;
            }
            h = Math.abs((T - y) * (b - D) - (T - _) * (m - D)), h > f && (f = h, c = S);
          }
          C > 0 && C < x - w && (v[s++] = Math.min(A, c), c = Math.max(A, c)), v[s++] = c, u = c;
        }
        return v[s++] = this.getRawIndex(o - 1), n._count = s, n._indices = v, n.getRawIndex = this._getRawIdx, n;
      }, r.prototype.downSample = function(t, e, n, i) {
        for (var a = this.clone([t], !0), o = a._chunks, s = [], l = Math.floor(1 / e), u = o[t], f = this.count(), h = a._rawExtent[t] = Ti(), c = new (Ra(this._rawCount))(Math.ceil(f / l)), v = 0, d = 0; d < f; d += l) {
          l > f - d && (l = f - d, s.length = l);
          for (var g = 0; g < l; g++) {
            var p = this.getRawIndex(d + g);
            s[g] = u[p];
          }
          var y = n(s), m = this.getRawIndex(Math.min(d + i(s, y) || 0, f - 1));
          u[m] = y, y < h[0] && (h[0] = y), y > h[1] && (h[1] = y), c[v++] = m;
        }
        return a._count = v, a._indices = c, a._updateGetRawIdx(), a;
      }, r.prototype.each = function(t, e) {
        if (this._count)
          for (var n = t.length, i = this._chunks, a = 0, o = this.count(); a < o; a++) {
            var s = this.getRawIndex(a);
            switch (n) {
              case 0:
                e(a);
                break;
              case 1:
                e(i[t[0]][s], a);
                break;
              case 2:
                e(i[t[0]][s], i[t[1]][s], a);
                break;
              default:
                for (var l = 0, u = []; l < n; l++)
                  u[l] = i[t[l]][s];
                u[l] = a, e.apply(null, u);
            }
          }
      }, r.prototype.getDataExtent = function(t) {
        var e = this._chunks[t], n = Ti();
        if (!e)
          return n;
        var i = this.count(), a = !this._indices, o;
        if (a)
          return this._rawExtent[t].slice();
        if (o = this._extent[t], o)
          return o.slice();
        o = n;
        for (var s = o[0], l = o[1], u = 0; u < i; u++) {
          var f = this.getRawIndex(u), h = e[f];
          h < s && (s = h), h > l && (l = h);
        }
        return o = [s, l], this._extent[t] = o, o;
      }, r.prototype.getRawDataItem = function(t) {
        var e = this.getRawIndex(t);
        if (this._provider.persistent)
          return this._provider.getItem(e);
        for (var n = [], i = this._chunks, a = 0; a < i.length; a++)
          n.push(i[a][e]);
        return n;
      }, r.prototype.clone = function(t, e) {
        var n = new r(), i = this._chunks, a = t && Qe(t, function(s, l) {
          return s[l] = !0, s;
        }, {});
        if (a)
          for (var o = 0; o < i.length; o++)
            n._chunks[o] = a[o] ? Jx(i[o]) : i[o];
        else
          n._chunks = i;
        return this._copyCommonProps(n), e || (n._indices = this._cloneIndices()), n._updateGetRawIdx(), n;
      }, r.prototype._copyCommonProps = function(t) {
        t._count = this._count, t._rawCount = this._rawCount, t._provider = this._provider, t._dimensions = this._dimensions, t._extent = nt(this._extent), t._rawExtent = nt(this._rawExtent);
      }, r.prototype._cloneIndices = function() {
        if (this._indices) {
          var t = this._indices.constructor, e = void 0;
          if (t === Array) {
            var n = this._indices.length;
            e = new t(n);
            for (var i = 0; i < n; i++)
              e[i] = this._indices[i];
          } else
            e = new t(this._indices);
          return e;
        }
        return null;
      }, r.prototype._getRawIdxIdentity = function(t) {
        return t;
      }, r.prototype._getRawIdx = function(t) {
        return t < this._count && t >= 0 ? this._indices[t] : -1;
      }, r.prototype._updateGetRawIdx = function() {
        this.getRawIndex = this._indices ? this._getRawIdx : this._getRawIdxIdentity;
      }, r.internalField = function() {
        function t(e, n, i, a) {
          return Es(e[a], this._dimensions[a]);
        }
        Gf = {
          arrayRows: t,
          objectRows: function(e, n, i, a) {
            return Es(e[n], this._dimensions[a]);
          },
          keyedColumns: t,
          original: function(e, n, i, a) {
            var o = e && (e.value == null ? e : e.value);
            return Es(o instanceof Array ? o[a] : o, this._dimensions[a]);
          },
          typedArray: function(e, n, i, a) {
            return e[a];
          }
        };
      }(), r;
    }()
  ), _g = (
    /** @class */
    function() {
      function r(t) {
        this._sourceList = [], this._storeList = [], this._upstreamSignList = [], this._versionSignBase = 0, this._dirty = !0, this._sourceHost = t;
      }
      return r.prototype.dirty = function() {
        this._setLocalSource([], []), this._storeList = [], this._dirty = !0;
      }, r.prototype._setLocalSource = function(t, e) {
        this._sourceList = t, this._upstreamSignList = e, this._versionSignBase++, this._versionSignBase > 9e10 && (this._versionSignBase = 0);
      }, r.prototype._getVersionSign = function() {
        return this._sourceHost.uid + "_" + this._versionSignBase;
      }, r.prototype.prepareSource = function() {
        this._isDirty() && (this._createSource(), this._dirty = !1);
      }, r.prototype._createSource = function() {
        this._setLocalSource([], []);
        var t = this._sourceHost, e = this._getUpstreamSourceManagers(), n = !!e.length, i, a;
        if (Ea(t)) {
          var o = t, s = void 0, l = void 0, u = void 0;
          if (n) {
            var f = e[0];
            f.prepareSource(), u = f.getSource(), s = u.data, l = u.sourceFormat, a = [f._getVersionSign()];
          } else
            s = o.get("data", !0), l = Kt(s) ? wr : ke, a = [];
          var h = this._getSourceMetaRawOption() || {}, c = u && u.metaRawOption || {}, v = tt(h.seriesLayoutBy, c.seriesLayoutBy) || null, d = tt(h.sourceHeader, c.sourceHeader), g = tt(h.dimensions, c.dimensions), p = v !== c.seriesLayoutBy || !!d != !!c.sourceHeader || g;
          i = p ? [Of(s, {
            seriesLayoutBy: v,
            sourceHeader: d,
            dimensions: g
          }, l)] : [];
        } else {
          var y = t;
          if (n) {
            var m = this._applyTransform(e);
            i = m.sourceList, a = m.upstreamSignList;
          } else {
            var _ = y.get("source", !0);
            i = [Of(_, this._getSourceMetaRawOption(), null)], a = [];
          }
        }
        j(i && a), this._setLocalSource(i, a);
      }, r.prototype._applyTransform = function(t) {
        var e = this._sourceHost, n = e.get("transform", !0), i = e.get("fromTransformResult", !0);
        if (j(i != null || n != null), i != null) {
          var a = "";
          t.length !== 1 && (a = "When using `fromTransformResult`, there should be only one upstream dataset", wg(a));
        }
        var o, s = [], l = [];
        return M(t, function(u) {
          u.prepareSource();
          var f = u.getSource(i || 0), h = "";
          i != null && !f && (h = "Can not retrieve result by `fromTransformResult`: " + i, wg(h)), s.push(f), l.push(u._getVersionSign());
        }), n ? o = $x(n, s, {
          datasetIndex: e.componentIndex
        }) : i != null && (o = [Rx(s[0])]), {
          sourceList: o,
          upstreamSignList: l
        };
      }, r.prototype._isDirty = function() {
        if (this._dirty)
          return !0;
        for (var t = this._getUpstreamSourceManagers(), e = 0; e < t.length; e++) {
          var n = t[e];
          if (
            // Consider the case that there is ancestor diry, call it recursively.
            // The performance is probably not an issue because usually the chain is not long.
            n._isDirty() || this._upstreamSignList[e] !== n._getVersionSign()
          )
            return !0;
        }
      }, r.prototype.getSource = function(t) {
        t = t || 0;
        var e = this._sourceList[t];
        if (!e) {
          var n = this._getUpstreamSourceManagers();
          return n[0] && n[0].getSource(t);
        }
        return e;
      }, r.prototype.getSharedDataStore = function(t) {
        j(Ea(this._sourceHost), "Can only call getDataStore on series source manager.");
        var e = t.makeStoreSchema();
        return this._innerGetDataStore(e.dimensions, t.source, e.hash);
      }, r.prototype._innerGetDataStore = function(t, e, n) {
        var i = 0, a = this._storeList, o = a[i];
        o || (o = a[i] = {});
        var s = o[n];
        if (!s) {
          var l = this._getUpstreamSourceManagers()[0];
          Ea(this._sourceHost) && l ? s = l._innerGetDataStore(t, e, n) : (s = new Hf(), s.initData(new og(e, t.length), t)), o[n] = s;
        }
        return s;
      }, r.prototype._getUpstreamSourceManagers = function() {
        var t = this._sourceHost;
        if (Ea(t)) {
          var e = Mf(t);
          return e ? [e.getSourceManager()] : [];
        } else
          return V(ix(t), function(n) {
            return n.getSourceManager();
          });
      }, r.prototype._getSourceMetaRawOption = function() {
        var t = this._sourceHost, e, n, i;
        if (Ea(t))
          e = t.get("seriesLayoutBy", !0), n = t.get("sourceHeader", !0), i = t.get("dimensions", !0);
        else if (!this._getUpstreamSourceManagers().length) {
          var a = t;
          e = a.get("seriesLayoutBy", !0), n = a.get("sourceHeader", !0), i = a.get("dimensions", !0);
        }
        return {
          seriesLayoutBy: e,
          sourceHeader: n,
          dimensions: i
        };
      }, r;
    }()
  );
  function Sg(r) {
    var t = r.option.transform;
    t && Oi(r.option.transform);
  }
  function Ea(r) {
    return r.mainType === "series";
  }
  function wg(r) {
    throw new Error(r);
  }
  var bg = "line-height:1";
  function xg(r, t) {
    var e = r.color || "#6e7079", n = r.fontSize || 12, i = r.fontWeight || "400", a = r.color || "#464646", o = r.fontSize || 14, s = r.fontWeight || "900";
    return t === "html" ? {
      // eslint-disable-next-line max-len
      nameStyle: "font-size:" + pe(n + "") + "px;color:" + pe(e) + ";font-weight:" + pe(i + ""),
      // eslint-disable-next-line max-len
      valueStyle: "font-size:" + pe(o + "") + "px;color:" + pe(a) + ";font-weight:" + pe(s + "")
    } : {
      nameStyle: {
        fontSize: n,
        fill: e,
        fontWeight: i
      },
      valueStyle: {
        fontSize: o,
        fill: a,
        fontWeight: s
      }
    };
  }
  var tT = [0, 10, 20, 30], eT = ["", `
`, `

`, `


`];
  function ka(r, t) {
    return t.type = r, t;
  }
  function Vf(r) {
    return r.type === "section";
  }
  function Tg(r) {
    return Vf(r) ? rT : nT;
  }
  function Cg(r) {
    if (Vf(r)) {
      var t = 0, e = r.blocks.length, n = e > 1 || e > 0 && !r.noHeader;
      return M(r.blocks, function(i) {
        var a = Cg(i);
        a >= t && (t = a + +(n && // 0 always can not be readable gap level.
        (!a || Vf(i) && !i.noHeader)));
      }), t;
    }
    return 0;
  }
  function rT(r, t, e, n) {
    var i = t.noHeader, a = iT(Cg(t)), o = [], s = t.blocks || [];
    j(!s || F(s)), s = s || [];
    var l = r.orderMode;
    if (t.sortBlocks && l) {
      s = s.slice();
      var u = {
        valueAsc: "asc",
        valueDesc: "desc"
      };
      if (on(u, l)) {
        var f = new Hx(u[l], null);
        s.sort(function(d, g) {
          return f.evaluate(d.sortParam, g.sortParam);
        });
      } else
        l === "seriesDesc" && s.reverse();
    }
    M(s, function(d, g) {
      var p = t.valueFormatter, y = Tg(d)(
        // Inherit valueFormatter
        p ? O(O({}, r), {
          valueFormatter: p
        }) : r,
        d,
        g > 0 ? a.html : 0,
        n
      );
      y != null && o.push(y);
    });
    var h = r.renderMode === "richText" ? o.join(a.richText) : Wf(o.join(""), i ? e : a.html);
    if (i)
      return h;
    var c = bf(t.header, "ordinal", r.useUTC), v = xg(n, r.renderMode).nameStyle;
    return r.renderMode === "richText" ? Mg(r, c, v) + a.richText + h : Wf('<div style="' + v + ";" + bg + ';">' + pe(c) + "</div>" + h, e);
  }
  function nT(r, t, e, n) {
    var i = r.renderMode, a = t.noName, o = t.noValue, s = !t.markerType, l = t.name, u = r.useUTC, f = t.valueFormatter || r.valueFormatter || function(S) {
      return S = F(S) ? S : [S], V(S, function(b, w) {
        return bf(b, F(v) ? v[w] : v, u);
      });
    };
    if (!(a && o)) {
      var h = s ? "" : r.markupStyleCreator.makeTooltipMarker(t.markerType, t.markerColor || "#333", i), c = a ? "" : bf(l, "ordinal", u), v = t.valueType, d = o ? [] : f(t.value), g = !s || !a, p = !s && a, y = xg(n, i), m = y.nameStyle, _ = y.valueStyle;
      return i === "richText" ? (s ? "" : h) + (a ? "" : Mg(r, c, m)) + (o ? "" : sT(r, d, g, p, _)) : Wf((s ? "" : h) + (a ? "" : aT(c, !s, m)) + (o ? "" : oT(d, g, p, _)), e);
    }
  }
  function Dg(r, t, e, n, i, a) {
    if (r) {
      var o = Tg(r), s = {
        useUTC: i,
        renderMode: e,
        orderMode: n,
        markupStyleCreator: t,
        valueFormatter: r.valueFormatter
      };
      return o(s, r, 0, a);
    }
  }
  function iT(r) {
    return {
      html: tT[r],
      richText: eT[r]
    };
  }
  function Wf(r, t) {
    var e = '<div style="clear:both"></div>', n = "margin: " + t + "px 0 0";
    return '<div style="' + n + ";" + bg + ';">' + r + e + "</div>";
  }
  function aT(r, t, e) {
    var n = t ? "margin-left:2px" : "";
    return '<span style="' + e + ";" + n + '">' + pe(r) + "</span>";
  }
  function oT(r, t, e, n) {
    var i = e ? "10px" : "20px", a = t ? "float:right;margin-left:" + i : "";
    return r = F(r) ? r : [r], '<span style="' + a + ";" + n + '">' + V(r, function(o) {
      return pe(o);
    }).join("&nbsp;&nbsp;") + "</span>";
  }
  function Mg(r, t, e) {
    return r.markupStyleCreator.wrapRichTextStyle(t, e);
  }
  function sT(r, t, e, n, i) {
    var a = [i], o = n ? 10 : 20;
    return e && a.push({
      padding: [0, 0, 0, o],
      align: "right"
    }), r.markupStyleCreator.wrapRichTextStyle(F(t) ? t.join("  ") : t, a);
  }
  function lT(r, t) {
    var e = r.getData().getItemVisual(t, "style"), n = e[r.visualDrawType];
    return Rn(n);
  }
  function Ag(r, t) {
    var e = r.get("padding");
    return e ?? (t === "richText" ? [8, 10] : 10);
  }
  var Uf = (
    /** @class */
    function() {
      function r() {
        this.richTextStyles = {}, this._nextStyleNameId = Ic();
      }
      return r.prototype._generateStyleName = function() {
        return "__EC_aUTo_" + this._nextStyleNameId++;
      }, r.prototype.makeTooltipMarker = function(t, e, n) {
        var i = n === "richText" ? this._generateStyleName() : null, a = Ep({
          color: e,
          type: t,
          renderMode: n,
          markerId: i
        });
        return H(a) ? a : (j(i), this.richTextStyles[i] = a.style, a.content);
      }, r.prototype.wrapRichTextStyle = function(t, e) {
        var n = {};
        F(e) ? M(e, function(a) {
          return O(n, a);
        }) : O(n, e);
        var i = this._generateStyleName();
        return this.richTextStyles[i] = n, "{" + i + "|" + t + "}";
      }, r;
    }()
  );
  function uT(r) {
    var t = r.series, e = r.dataIndex, n = r.multipleSeries, i = t.getData(), a = i.mapDimensionsAll("defaultedTooltip"), o = a.length, s = t.getRawValue(e), l = F(s), u = lT(t, e), f, h, c, v;
    if (o > 1 || l && !o) {
      var d = fT(s, t, e, a, u);
      f = d.inlineValues, h = d.inlineValueTypes, c = d.blocks, v = d.inlineValues[0];
    } else if (o) {
      var g = i.getDimensionInfo(a[0]);
      v = f = xi(i, e, a[0]), h = g.type;
    } else
      v = f = l ? s[0] : s;
    var p = Tu(t), y = p && t.name || "", m = i.getName(e), _ = n ? y : m;
    return ka("section", {
      header: y,
      // When series name is not specified, do not show a header line with only '-'.
      // This case always happens in tooltip.trigger: 'item'.
      noHeader: n || !p,
      sortParam: v,
      blocks: [ka("nameValue", {
        markerType: "item",
        markerColor: u,
        // Do not mix display seriesName and itemName in one tooltip,
        // which might confuses users.
        name: _,
        // name dimension might be auto assigned, where the name might
        // be not readable. So we check trim here.
        noName: !Ge(_),
        value: f,
        valueType: h
      })].concat(c || [])
    });
  }
  function fT(r, t, e, n, i) {
    var a = t.getData(), o = Qe(r, function(h, c, v) {
      var d = a.getDimensionInfo(v);
      return h = h || d && d.tooltip !== !1 && d.displayName != null;
    }, !1), s = [], l = [], u = [];
    n.length ? M(n, function(h) {
      f(xi(a, e, h), h);
    }) : M(r, f);
    function f(h, c) {
      var v = a.getDimensionInfo(c);
      !v || v.otherDims.tooltip === !1 || (o ? u.push(ka("nameValue", {
        markerType: "subItem",
        markerColor: i,
        name: v.displayName,
        value: h,
        valueType: v.type
      })) : (s.push(h), l.push(v.type)));
    }
    return {
      inlineValues: s,
      inlineValueTypes: l,
      blocks: u
    };
  }
  var Vr = Tt();
  function Os(r, t) {
    return r.getName(t) || r.getId(t);
  }
  var hT = "__universalTransitionEnabled", ue = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e._selectedDataIndicesMap = {}, e;
      }
      return t.prototype.init = function(e, n, i) {
        this.seriesIndex = this.componentIndex, this.dataTask = Ia({
          count: cT,
          reset: dT
        }), this.dataTask.context = {
          model: this
        }, this.mergeDefaultAndTheme(e, i);
        var a = Vr(this).sourceManager = new _g(this);
        a.prepareSource();
        var o = this.getInitialData(e, i);
        Pg(o, this), this.dataTask.context.data = o, j(o, "getInitialData returned invalid data."), Vr(this).dataBeforeProcessed = o, Lg(this), this._initSelectedMapFromData(o);
      }, t.prototype.mergeDefaultAndTheme = function(e, n) {
        var i = Da(this), a = i ? As(e) : {}, o = this.subType;
        at.hasClass(o) && (o += "Series"), ot(e, n.getTheme().get(this.subType)), ot(e, this.getDefaultOption()), xu(e, "label", ["show"]), this.fillDataTextStyle(e.data), i && Si(e, a, i);
      }, t.prototype.mergeOption = function(e, n) {
        e = ot(this.option, e, !0), this.fillDataTextStyle(e.data);
        var i = Da(this);
        i && Si(this.option, e, i);
        var a = Vr(this).sourceManager;
        a.dirty(), a.prepareSource();
        var o = this.getInitialData(e, n);
        Pg(o, this), this.dataTask.dirty(), this.dataTask.context.data = o, Vr(this).dataBeforeProcessed = o, Lg(this), this._initSelectedMapFromData(o);
      }, t.prototype.fillDataTextStyle = function(e) {
        if (e && !Kt(e))
          for (var n = ["show"], i = 0; i < e.length; i++)
            e[i] && e[i].label && xu(e[i], "label", n);
      }, t.prototype.getInitialData = function(e, n) {
      }, t.prototype.appendData = function(e) {
        var n = this.getRawData();
        n.appendData(e.data);
      }, t.prototype.getData = function(e) {
        var n = Yf(this);
        if (n) {
          var i = n.context.data;
          return e == null ? i : i.getLinkedData(e);
        } else
          return Vr(this).data;
      }, t.prototype.getAllData = function() {
        var e = this.getData();
        return e && e.getLinkedDataAll ? e.getLinkedDataAll() : [{
          data: e
        }];
      }, t.prototype.setData = function(e) {
        var n = Yf(this);
        if (n) {
          var i = n.context;
          i.outputData = e, n !== this.dataTask && (i.data = e);
        }
        Vr(this).data = e;
      }, t.prototype.getEncode = function() {
        var e = this.get("encode", !0);
        if (e)
          return J(e);
      }, t.prototype.getSourceManager = function() {
        return Vr(this).sourceManager;
      }, t.prototype.getSource = function() {
        return this.getSourceManager().getSource();
      }, t.prototype.getRawData = function() {
        return Vr(this).dataBeforeProcessed;
      }, t.prototype.getColorBy = function() {
        var e = this.get("colorBy");
        return e || "series";
      }, t.prototype.isColorBySeries = function() {
        return this.getColorBy() === "series";
      }, t.prototype.getBaseAxis = function() {
        var e = this.coordinateSystem;
        return e && e.getBaseAxis && e.getBaseAxis();
      }, t.prototype.formatTooltip = function(e, n, i) {
        return uT({
          series: this,
          dataIndex: e,
          multipleSeries: n
        });
      }, t.prototype.isAnimationEnabled = function() {
        var e = this.ecModel;
        if (z.node && !(e && e.ssr))
          return !1;
        var n = this.getShallow("animation");
        return n && this.getData().count() > this.getShallow("animationThreshold") && (n = !1), !!n;
      }, t.prototype.restoreData = function() {
        this.dataTask.dirty();
      }, t.prototype.getColorFromPalette = function(e, n, i) {
        var a = this.ecModel, o = Af.prototype.getColorFromPalette.call(this, e, n, i);
        return o || (o = a.getColorFromPalette(e, n, i)), o;
      }, t.prototype.coordDimToDataDim = function(e) {
        return this.getRawData().mapDimensionsAll(e);
      }, t.prototype.getProgressive = function() {
        return this.get("progressive");
      }, t.prototype.getProgressiveThreshold = function() {
        return this.get("progressiveThreshold");
      }, t.prototype.select = function(e, n) {
        this._innerSelect(this.getData(n), e);
      }, t.prototype.unselect = function(e, n) {
        var i = this.option.selectedMap;
        if (i) {
          var a = this.option.selectedMode, o = this.getData(n);
          if (a === "series" || i === "all") {
            this.option.selectedMap = {}, this._selectedDataIndicesMap = {};
            return;
          }
          for (var s = 0; s < e.length; s++) {
            var l = e[s], u = Os(o, l);
            i[u] = !1, this._selectedDataIndicesMap[u] = -1;
          }
        }
      }, t.prototype.toggleSelect = function(e, n) {
        for (var i = [], a = 0; a < e.length; a++)
          i[0] = e[a], this.isSelected(e[a], n) ? this.unselect(i, n) : this.select(i, n);
      }, t.prototype.getSelectedDataIndices = function() {
        if (this.option.selectedMap === "all")
          return [].slice.call(this.getData().getIndices());
        for (var e = this._selectedDataIndicesMap, n = yt(e), i = [], a = 0; a < n.length; a++) {
          var o = e[n[a]];
          o >= 0 && i.push(o);
        }
        return i;
      }, t.prototype.isSelected = function(e, n) {
        var i = this.option.selectedMap;
        if (!i)
          return !1;
        var a = this.getData(n);
        return (i === "all" || i[Os(a, e)]) && !a.getItemModel(e).get(["select", "disabled"]);
      }, t.prototype.isUniversalTransitionEnabled = function() {
        if (this[hT])
          return !0;
        var e = this.option.universalTransition;
        return e ? e === !0 ? !0 : e && e.enabled : !1;
      }, t.prototype._innerSelect = function(e, n) {
        var i, a, o = this.option, s = o.selectedMode, l = n.length;
        if (!(!s || !l)) {
          if (s === "series")
            o.selectedMap = "all";
          else if (s === "multiple") {
            W(o.selectedMap) || (o.selectedMap = {});
            for (var u = o.selectedMap, f = 0; f < l; f++) {
              var h = n[f], c = Os(e, h);
              u[c] = !0, this._selectedDataIndicesMap[c] = e.getRawIndex(h);
            }
          } else if (s === "single" || s === !0) {
            var v = n[l - 1], c = Os(e, v);
            o.selectedMap = (i = {}, i[c] = !0, i), this._selectedDataIndicesMap = (a = {}, a[c] = e.getRawIndex(v), a);
          }
        }
      }, t.prototype._initSelectedMapFromData = function(e) {
        if (!this.option.selectedMap) {
          var n = [];
          e.hasItemOption && e.each(function(i) {
            var a = e.getRawDataItem(i);
            a && a.selected && n.push(i);
          }), n.length > 0 && this._innerSelect(e, n);
        }
      }, t.registerClass = function(e) {
        return at.registerClass(e);
      }, t.protoInitialize = function() {
        var e = t.prototype;
        e.type = "series.__base__", e.seriesIndex = 0, e.ignoreStyleOnData = !1, e.hasSymbolVisual = !1, e.defaultSymbol = "circle", e.visualStyleAccessPath = "itemStyle", e.visualDrawType = "fill";
      }(), t;
    }(at)
  );
  xe(ue, zx), xe(ue, Af), Uc(ue, at);
  function Lg(r) {
    var t = r.name;
    Tu(r) || (r.name = vT(r) || t);
  }
  function vT(r) {
    var t = r.getRawData(), e = t.mapDimensionsAll("seriesName"), n = [];
    return M(e, function(i) {
      var a = t.getDimensionInfo(i);
      a.displayName && n.push(a.displayName);
    }), n.join(" ");
  }
  function cT(r) {
    return r.model.getRawData().count();
  }
  function dT(r) {
    var t = r.model;
    return t.setData(t.getRawData().cloneShallow()), pT;
  }
  function pT(r, t) {
    t.outputData && r.end > t.outputData.count() && t.model.getRawData().cloneShallow(t.outputData);
  }
  function Pg(r, t) {
    M(Av(r.CHANGABLE_METHODS, r.DOWNSAMPLE_METHODS), function(e) {
      r.wrapMethod(e, xt(gT, t));
    });
  }
  function gT(r, t) {
    var e = Yf(r);
    return e && e.setOutputEnd((t || this).count()), t;
  }
  function Yf(r) {
    var t = (r.ecModel || {}).scheduler, e = t && t.getPipeline(r.uid);
    if (e) {
      var n = e.currentTask;
      if (n) {
        var i = n.agentStubMap;
        i && (n = i.get(r.uid));
      }
      return n;
    }
  }
  var ee = (
    /** @class */
    function() {
      function r() {
        this.group = new Bt(), this.uid = ms("viewComponent");
      }
      return r.prototype.init = function(t, e) {
      }, r.prototype.render = function(t, e, n, i) {
      }, r.prototype.dispose = function(t, e) {
      }, r.prototype.updateView = function(t, e, n, i) {
      }, r.prototype.updateLayout = function(t, e, n, i) {
      }, r.prototype.updateVisual = function(t, e, n, i) {
      }, r.prototype.toggleBlurSeries = function(t, e, n) {
      }, r.prototype.eachRendered = function(t) {
        var e = this.group;
        e && e.traverse(t);
      }, r;
    }()
  );
  Mu(ee), No(ee);
  function Xf() {
    var r = Tt();
    return function(t) {
      var e = r(t), n = t.pipelineContext, i = !!e.large, a = !!e.progressiveRender, o = e.large = !!(n && n.large), s = e.progressiveRender = !!(n && n.progressiveRender);
      return (i !== o || a !== s) && "reset";
    };
  }
  var Ig = Tt(), yT = Xf(), re = (
    /** @class */
    function() {
      function r() {
        this.group = new Bt(), this.uid = ms("viewChart"), this.renderTask = Ia({
          plan: mT,
          reset: _T
        }), this.renderTask.context = {
          view: this
        };
      }
      return r.prototype.init = function(t, e) {
      }, r.prototype.render = function(t, e, n, i) {
        throw new Error("render method must been implemented");
      }, r.prototype.highlight = function(t, e, n, i) {
        var a = t.getData(i && i.dataType);
        if (!a) {
          Wt("Unknown dataType " + i.dataType);
          return;
        }
        Eg(a, i, "emphasis");
      }, r.prototype.downplay = function(t, e, n, i) {
        var a = t.getData(i && i.dataType);
        if (!a) {
          Wt("Unknown dataType " + i.dataType);
          return;
        }
        Eg(a, i, "normal");
      }, r.prototype.remove = function(t, e) {
        this.group.removeAll();
      }, r.prototype.dispose = function(t, e) {
      }, r.prototype.updateView = function(t, e, n, i) {
        this.render(t, e, n, i);
      }, r.prototype.updateLayout = function(t, e, n, i) {
        this.render(t, e, n, i);
      }, r.prototype.updateVisual = function(t, e, n, i) {
        this.render(t, e, n, i);
      }, r.prototype.eachRendered = function(t) {
        gs(this.group, t);
      }, r.markUpdateMethod = function(t, e) {
        Ig(t).updateMethod = e;
      }, r.protoInitialize = function() {
        var t = r.prototype;
        t.type = "chart";
      }(), r;
    }()
  );
  function Rg(r, t, e) {
    r && vi(r) && (t === "emphasis" ? Ko : Qo)(r, e);
  }
  function Eg(r, t, e) {
    var n = mn(r, t), i = t && t.highlightKey != null ? Hw(t.highlightKey) : null;
    n != null ? M(Jt(n), function(a) {
      Rg(r.getItemGraphicEl(a), e, i);
    }) : r.eachItemGraphicEl(function(a) {
      Rg(a, e, i);
    });
  }
  Mu(re, ["dispose"]), No(re);
  function mT(r) {
    return yT(r.model);
  }
  function _T(r) {
    var t = r.model, e = r.ecModel, n = r.api, i = r.payload, a = t.pipelineContext.progressiveRender, o = r.view, s = i && Ig(i).updateMethod, l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
    return l !== "render" && o[l](t, e, n, i), ST[l];
  }
  var ST = {
    incrementalPrepareRender: {
      progress: function(r, t) {
        t.view.incrementalRender(r, t.model, t.ecModel, t.api, t.payload);
      }
    },
    render: {
      // Put view.render in `progress` to support appendData. But in this case
      // view.render should not be called in reset, otherwise it will be called
      // twise. Use `forceFirstProgress` to make sure that view.render is called
      // in any cases.
      forceFirstProgress: !0,
      progress: function(r, t) {
        t.view.render(t.model, t.ecModel, t.api, t.payload);
      }
    }
  }, Bs = "\0__throttleOriginMethod", kg = "\0__throttleRate", Og = "\0__throttleType";
  function Ns(r, t, e) {
    var n, i = 0, a = 0, o = null, s, l, u, f;
    t = t || 0;
    function h() {
      a = (/* @__PURE__ */ new Date()).getTime(), o = null, r.apply(l, u || []);
    }
    var c = function() {
      for (var v = [], d = 0; d < arguments.length; d++)
        v[d] = arguments[d];
      n = (/* @__PURE__ */ new Date()).getTime(), l = this, u = v;
      var g = f || t, p = f || e;
      f = null, s = n - (p ? i : a) - g, clearTimeout(o), p ? o = setTimeout(h, g) : s >= 0 ? h() : o = setTimeout(h, -s), i = n;
    };
    return c.clear = function() {
      o && (clearTimeout(o), o = null);
    }, c.debounceNextCall = function(v) {
      f = v;
    }, c;
  }
  function Bg(r, t, e, n) {
    var i = r[t];
    if (i) {
      var a = i[Bs] || i, o = i[Og], s = i[kg];
      if (s !== e || o !== n) {
        if (e == null || !n)
          return r[t] = a;
        i = r[t] = Ns(a, e, n === "debounce"), i[Bs] = a, i[Og] = n, i[kg] = e;
      }
      return i;
    }
  }
  function qf(r, t) {
    var e = r[t];
    e && e[Bs] && (e.clear && e.clear(), r[t] = e[Bs]);
  }
  var Ng = Tt(), Fg = {
    itemStyle: ia(mp, !0),
    lineStyle: ia(yp, !0)
  }, wT = {
    lineStyle: "stroke",
    itemStyle: "fill"
  };
  function zg(r, t) {
    var e = r.visualStyleMapper || Fg[t];
    return e || (console.warn("Unknown style type '" + t + "'."), Fg.itemStyle);
  }
  function Gg(r, t) {
    var e = r.visualDrawType || wT[t];
    return e || (console.warn("Unknown style type '" + t + "'."), "fill");
  }
  var bT = {
    createOnAllSeries: !0,
    performRawSeries: !0,
    reset: function(r, t) {
      var e = r.getData(), n = r.visualStyleAccessPath || "itemStyle", i = r.getModel(n), a = zg(r, n), o = a(i), s = i.getShallow("decal");
      s && (e.setVisual("decal", s), s.dirty = !0);
      var l = Gg(r, n), u = o[l], f = X(u) ? u : null, h = o.fill === "auto" || o.stroke === "auto";
      if (!o[l] || f || h) {
        var c = r.getColorFromPalette(
          // TODO series count changed.
          r.name,
          null,
          t.getSeriesCount()
        );
        o[l] || (o[l] = c, e.setVisual("colorFromPalette", !0)), o.fill = o.fill === "auto" || X(o.fill) ? c : o.fill, o.stroke = o.stroke === "auto" || X(o.stroke) ? c : o.stroke;
      }
      if (e.setVisual("style", o), e.setVisual("drawType", l), !t.isSeriesFiltered(r) && f)
        return e.setVisual("colorFromPalette", !1), {
          dataEach: function(v, d) {
            var g = r.getDataParams(d), p = O({}, o);
            p[l] = f(g), v.setItemVisual(d, "style", p);
          }
        };
    }
  }, Oa = new St(), xT = {
    createOnAllSeries: !0,
    performRawSeries: !0,
    reset: function(r, t) {
      if (!(r.ignoreStyleOnData || t.isSeriesFiltered(r))) {
        var e = r.getData(), n = r.visualStyleAccessPath || "itemStyle", i = zg(r, n), a = e.getVisual("drawType");
        return {
          dataEach: e.hasItemOption ? function(o, s) {
            var l = o.getRawDataItem(s);
            if (l && l[n]) {
              Oa.option = l[n];
              var u = i(Oa), f = o.ensureUniqueItemVisual(s, "style");
              O(f, u), Oa.option.decal && (o.setItemVisual(s, "decal", Oa.option.decal), Oa.option.decal.dirty = !0), a in u && o.setItemVisual(s, "colorFromPalette", !1);
            }
          } : null
        };
      }
    }
  }, TT = {
    performRawSeries: !0,
    overallReset: function(r) {
      var t = J();
      r.eachSeries(function(e) {
        var n = e.getColorBy();
        if (!e.isColorBySeries()) {
          var i = e.type + "-" + n, a = t.get(i);
          a || (a = {}, t.set(i, a)), Ng(e).scope = a;
        }
      }), r.eachSeries(function(e) {
        if (!(e.isColorBySeries() || r.isSeriesFiltered(e))) {
          var n = e.getRawData(), i = {}, a = e.getData(), o = Ng(e).scope, s = e.visualStyleAccessPath || "itemStyle", l = Gg(e, s);
          a.each(function(u) {
            var f = a.getRawIndex(u);
            i[f] = u;
          }), n.each(function(u) {
            var f = i[u], h = a.getItemVisual(f, "colorFromPalette");
            if (h) {
              var c = a.ensureUniqueItemVisual(f, "style"), v = n.getName(u) || u + "", d = n.count();
              c[l] = e.getColorFromPalette(v, o, d);
            }
          });
        }
      });
    }
  }, Fs = Math.PI;
  function CT(r, t) {
    t = t || {}, lt(t, {
      text: "loading",
      textColor: "#000",
      fontSize: 12,
      fontWeight: "normal",
      fontStyle: "normal",
      fontFamily: "sans-serif",
      maskColor: "rgba(255, 255, 255, 0.8)",
      showSpinner: !0,
      color: "#5470c6",
      spinnerRadius: 10,
      lineWidth: 5,
      zlevel: 0
    });
    var e = new Bt(), n = new At({
      style: {
        fill: t.maskColor
      },
      zlevel: t.zlevel,
      z: 1e4
    });
    e.add(n);
    var i = new kt({
      style: {
        text: t.text,
        fill: t.textColor,
        fontSize: t.fontSize,
        fontWeight: t.fontWeight,
        fontStyle: t.fontStyle,
        fontFamily: t.fontFamily
      },
      zlevel: t.zlevel,
      z: 10001
    }), a = new At({
      style: {
        fill: "none"
      },
      textContent: i,
      textConfig: {
        position: "right",
        distance: 10
      },
      zlevel: t.zlevel,
      z: 10001
    });
    e.add(a);
    var o;
    return t.showSpinner && (o = new pa({
      shape: {
        startAngle: -Fs / 2,
        endAngle: -Fs / 2 + 0.1,
        r: t.spinnerRadius
      },
      style: {
        stroke: t.color,
        lineCap: "round",
        lineWidth: t.lineWidth
      },
      zlevel: t.zlevel,
      z: 10001
    }), o.animateShape(!0).when(1e3, {
      endAngle: Fs * 3 / 2
    }).start("circularInOut"), o.animateShape(!0).when(1e3, {
      startAngle: Fs * 3 / 2
    }).delay(300).start("circularInOut"), e.add(o)), e.resize = function() {
      var s = i.getBoundingRect().width, l = t.showSpinner ? t.spinnerRadius : 0, u = (r.getWidth() - l * 2 - (t.showSpinner && s ? 10 : 0) - s) / 2 - (t.showSpinner && s ? 0 : 5 + s / 2) + (t.showSpinner ? 0 : s / 2) + (s ? 0 : l), f = r.getHeight() / 2;
      t.showSpinner && o.setShape({
        cx: u,
        cy: f
      }), a.setShape({
        x: u - l,
        y: f - l,
        width: l * 2,
        height: l * 2
      }), n.setShape({
        x: 0,
        y: 0,
        width: r.getWidth(),
        height: r.getHeight()
      });
    }, e.resize(), e;
  }
  var Hg = (
    /** @class */
    function() {
      function r(t, e, n, i) {
        this._stageTaskMap = J(), this.ecInstance = t, this.api = e, n = this._dataProcessorHandlers = n.slice(), i = this._visualHandlers = i.slice(), this._allHandlers = n.concat(i);
      }
      return r.prototype.restoreData = function(t, e) {
        t.restoreData(e), this._stageTaskMap.each(function(n) {
          var i = n.overallTask;
          i && i.dirty();
        });
      }, r.prototype.getPerformArgs = function(t, e) {
        if (t.__pipeline) {
          var n = this._pipelineMap.get(t.__pipeline.id), i = n.context, a = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex, o = a ? n.step : null, s = i && i.modDataCount, l = s != null ? Math.ceil(s / o) : null;
          return {
            step: o,
            modBy: l,
            modDataCount: s
          };
        }
      }, r.prototype.getPipeline = function(t) {
        return this._pipelineMap.get(t);
      }, r.prototype.updateStreamModes = function(t, e) {
        var n = this._pipelineMap.get(t.uid), i = t.getData(), a = i.count(), o = n.progressiveEnabled && e.incrementalPrepareRender && a >= n.threshold, s = t.get("large") && a >= t.get("largeThreshold"), l = t.get("progressiveChunkMode") === "mod" ? a : null;
        t.pipelineContext = n.context = {
          progressiveRender: o,
          modDataCount: l,
          large: s
        };
      }, r.prototype.restorePipelines = function(t) {
        var e = this, n = e._pipelineMap = J();
        t.eachSeries(function(i) {
          var a = i.getProgressive(), o = i.uid;
          n.set(o, {
            id: o,
            head: null,
            tail: null,
            threshold: i.getProgressiveThreshold(),
            progressiveEnabled: a && !(i.preventIncremental && i.preventIncremental()),
            blockIndex: -1,
            step: Math.round(a || 700),
            count: 0
          }), e._pipe(i, i.dataTask);
        });
      }, r.prototype.prepareStageTasks = function() {
        var t = this._stageTaskMap, e = this.api.getModel(), n = this.api;
        M(this._allHandlers, function(i) {
          var a = t.get(i.uid) || t.set(i.uid, {}), o = "";
          o = '"reset" and "overallReset" must not be both specified.', j(!(i.reset && i.overallReset), o), i.reset && this._createSeriesStageTask(i, a, e, n), i.overallReset && this._createOverallStageTask(i, a, e, n);
        }, this);
      }, r.prototype.prepareView = function(t, e, n, i) {
        var a = t.renderTask, o = a.context;
        o.model = e, o.ecModel = n, o.api = i, a.__block = !t.incrementalPrepareRender, this._pipe(e, a);
      }, r.prototype.performDataProcessorTasks = function(t, e) {
        this._performStageTasks(this._dataProcessorHandlers, t, e, {
          block: !0
        });
      }, r.prototype.performVisualTasks = function(t, e, n) {
        this._performStageTasks(this._visualHandlers, t, e, n);
      }, r.prototype._performStageTasks = function(t, e, n, i) {
        i = i || {};
        var a = !1, o = this;
        M(t, function(l, u) {
          if (!(i.visualType && i.visualType !== l.visualType)) {
            var f = o._stageTaskMap.get(l.uid), h = f.seriesTaskMap, c = f.overallTask;
            if (c) {
              var v, d = c.agentStubMap;
              d.each(function(p) {
                s(i, p) && (p.dirty(), v = !0);
              }), v && c.dirty(), o.updatePayload(c, n);
              var g = o.getPerformArgs(c, i.block);
              d.each(function(p) {
                p.perform(g);
              }), c.perform(g) && (a = !0);
            } else
              h && h.each(function(p, y) {
                s(i, p) && p.dirty();
                var m = o.getPerformArgs(p, i.block);
                m.skip = !l.performRawSeries && e.isSeriesFiltered(p.context.model), o.updatePayload(p, n), p.perform(m) && (a = !0);
              });
          }
        });
        function s(l, u) {
          return l.setDirty && (!l.dirtyMap || l.dirtyMap.get(u.__pipeline.id));
        }
        this.unfinished = a || this.unfinished;
      }, r.prototype.performSeriesTasks = function(t) {
        var e;
        t.eachSeries(function(n) {
          e = n.dataTask.perform() || e;
        }), this.unfinished = e || this.unfinished;
      }, r.prototype.plan = function() {
        this._pipelineMap.each(function(t) {
          var e = t.tail;
          do {
            if (e.__block) {
              t.blockIndex = e.__idxInPipeline;
              break;
            }
            e = e.getUpstream();
          } while (e);
        });
      }, r.prototype.updatePayload = function(t, e) {
        e !== "remain" && (t.context.payload = e);
      }, r.prototype._createSeriesStageTask = function(t, e, n, i) {
        var a = this, o = e.seriesTaskMap, s = e.seriesTaskMap = J(), l = t.seriesType, u = t.getTargetSeries;
        t.createOnAllSeries ? n.eachRawSeries(f) : l ? n.eachRawSeriesByType(l, f) : u && u(n, i).each(f);
        function f(h) {
          var c = h.uid, v = s.set(c, o && o.get(c) || Ia({
            plan: PT,
            reset: IT,
            count: ET
          }));
          v.context = {
            model: h,
            ecModel: n,
            api: i,
            // PENDING: `useClearVisual` not used?
            useClearVisual: t.isVisual && !t.isLayout,
            plan: t.plan,
            reset: t.reset,
            scheduler: a
          }, a._pipe(h, v);
        }
      }, r.prototype._createOverallStageTask = function(t, e, n, i) {
        var a = this, o = e.overallTask = e.overallTask || Ia({
          reset: DT
        });
        o.context = {
          ecModel: n,
          api: i,
          overallReset: t.overallReset,
          scheduler: a
        };
        var s = o.agentStubMap, l = o.agentStubMap = J(), u = t.seriesType, f = t.getTargetSeries, h = !0, c = !1, v = "";
        v = '"createOnAllSeries" is not supported for "overallReset", because it will block all streams.', j(!t.createOnAllSeries, v), u ? n.eachRawSeriesByType(u, d) : f ? f(n, i).each(d) : (h = !1, M(n.getSeries(), d));
        function d(g) {
          var p = g.uid, y = l.set(p, s && s.get(p) || // When the result of `getTargetSeries` changed, the overallTask
          // should be set as dirty and re-performed.
          (c = !0, Ia({
            reset: MT,
            onDirty: LT
          })));
          y.context = {
            model: g,
            overallProgress: h
            // FIXME:TS never used, so comment it
            // modifyOutputEnd: modifyOutputEnd
          }, y.agent = o, y.__block = h, a._pipe(g, y);
        }
        c && o.dirty();
      }, r.prototype._pipe = function(t, e) {
        var n = t.uid, i = this._pipelineMap.get(n);
        !i.head && (i.head = e), i.tail && i.tail.pipe(e), i.tail = e, e.__idxInPipeline = i.count++, e.__pipeline = i;
      }, r.wrapStageHandler = function(t, e) {
        return X(t) && (t = {
          overallReset: t,
          seriesType: kT(t)
        }), t.uid = ms("stageHandler"), e && (t.visualType = e), t;
      }, r;
    }()
  );
  function DT(r) {
    r.overallReset(r.ecModel, r.api, r.payload);
  }
  function MT(r) {
    return r.overallProgress && AT;
  }
  function AT() {
    this.agent.dirty(), this.getDownstream().dirty();
  }
  function LT() {
    this.agent && this.agent.dirty();
  }
  function PT(r) {
    return r.plan ? r.plan(r.model, r.ecModel, r.api, r.payload) : null;
  }
  function IT(r) {
    r.useClearVisual && r.data.clearAllVisual();
    var t = r.resetDefines = Jt(r.reset(r.model, r.ecModel, r.api, r.payload));
    return t.length > 1 ? V(t, function(e, n) {
      return Vg(n);
    }) : RT;
  }
  var RT = Vg(0);
  function Vg(r) {
    return function(t, e) {
      var n = e.data, i = e.resetDefines[r];
      if (i && i.dataEach)
        for (var a = t.start; a < t.end; a++)
          i.dataEach(n, a);
      else
        i && i.progress && i.progress(t, n);
    };
  }
  function ET(r) {
    return r.data.count();
  }
  function kT(r) {
    zs = null;
    try {
      r(Ba, Wg);
    } catch {
    }
    return zs;
  }
  var Ba = {}, Wg = {}, zs;
  Ug(Ba, Pf), Ug(Wg, Xp), Ba.eachSeriesByType = Ba.eachRawSeriesByType = function(r) {
    zs = r;
  }, Ba.eachComponent = function(r) {
    r.mainType === "series" && r.subType && (zs = r.subType);
  };
  function Ug(r, t) {
    for (var e in t.prototype)
      r[e] = Qt;
  }
  var Yg = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"], OT = {
    color: Yg,
    colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], Yg]
  }, ne = "#B9B8CE", Xg = "#100C2A", Gs = function() {
    return {
      axisLine: {
        lineStyle: {
          color: ne
        }
      },
      splitLine: {
        lineStyle: {
          color: "#484753"
        }
      },
      splitArea: {
        areaStyle: {
          color: ["rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)"]
        }
      },
      minorSplitLine: {
        lineStyle: {
          color: "#20203B"
        }
      }
    };
  }, qg = ["#4992ff", "#7cffb2", "#fddd60", "#ff6e76", "#58d9f9", "#05c091", "#ff8a45", "#8d48e3", "#dd79ff"], Zg = {
    darkMode: !0,
    color: qg,
    backgroundColor: Xg,
    axisPointer: {
      lineStyle: {
        color: "#817f91"
      },
      crossStyle: {
        color: "#817f91"
      },
      label: {
        // TODO Contrast of label backgorundColor
        color: "#fff"
      }
    },
    legend: {
      textStyle: {
        color: ne
      }
    },
    textStyle: {
      color: ne
    },
    title: {
      textStyle: {
        color: "#EEF1FA"
      },
      subtextStyle: {
        color: "#B9B8CE"
      }
    },
    toolbox: {
      iconStyle: {
        borderColor: ne
      }
    },
    dataZoom: {
      borderColor: "#71708A",
      textStyle: {
        color: ne
      },
      brushStyle: {
        color: "rgba(135,163,206,0.3)"
      },
      handleStyle: {
        color: "#353450",
        borderColor: "#C5CBE3"
      },
      moveHandleStyle: {
        color: "#B0B6C3",
        opacity: 0.3
      },
      fillerColor: "rgba(135,163,206,0.2)",
      emphasis: {
        handleStyle: {
          borderColor: "#91B7F2",
          color: "#4D587D"
        },
        moveHandleStyle: {
          color: "#636D9A",
          opacity: 0.7
        }
      },
      dataBackground: {
        lineStyle: {
          color: "#71708A",
          width: 1
        },
        areaStyle: {
          color: "#71708A"
        }
      },
      selectedDataBackground: {
        lineStyle: {
          color: "#87A3CE"
        },
        areaStyle: {
          color: "#87A3CE"
        }
      }
    },
    visualMap: {
      textStyle: {
        color: ne
      }
    },
    timeline: {
      lineStyle: {
        color: ne
      },
      label: {
        color: ne
      },
      controlStyle: {
        color: ne,
        borderColor: ne
      }
    },
    calendar: {
      itemStyle: {
        color: Xg
      },
      dayLabel: {
        color: ne
      },
      monthLabel: {
        color: ne
      },
      yearLabel: {
        color: ne
      }
    },
    timeAxis: Gs(),
    logAxis: Gs(),
    valueAxis: Gs(),
    categoryAxis: Gs(),
    line: {
      symbol: "circle"
    },
    graph: {
      color: qg
    },
    gauge: {
      title: {
        color: ne
      },
      axisLine: {
        lineStyle: {
          color: [[1, "rgba(207,212,219,0.2)"]]
        }
      },
      axisLabel: {
        color: ne
      },
      detail: {
        color: "#EEF1FA"
      }
    },
    candlestick: {
      itemStyle: {
        color: "#f64e56",
        color0: "#54ea92",
        borderColor: "#f64e56",
        borderColor0: "#54ea92"
        // borderColor: '#ca2824',
        // borderColor0: '#09a443'
      }
    }
  };
  Zg.categoryAxis.splitLine.show = !1;
  var BT = (
    /** @class */
    function() {
      function r() {
      }
      return r.prototype.normalizeQuery = function(t) {
        var e = {}, n = {}, i = {};
        if (H(t)) {
          var a = rr(t);
          e.mainType = a.main || null, e.subType = a.sub || null;
        } else {
          var o = ["Index", "Name", "Id"], s = {
            name: 1,
            dataIndex: 1,
            dataType: 1
          };
          M(t, function(l, u) {
            for (var f = !1, h = 0; h < o.length; h++) {
              var c = o[h], v = u.lastIndexOf(c);
              if (v > 0 && v === u.length - c.length) {
                var d = u.slice(0, v);
                d !== "data" && (e.mainType = d, e[c.toLowerCase()] = l, f = !0);
              }
            }
            s.hasOwnProperty(u) && (n[u] = l, f = !0), f || (i[u] = l);
          });
        }
        return {
          cptQuery: e,
          dataQuery: n,
          otherQuery: i
        };
      }, r.prototype.filter = function(t, e) {
        var n = this.eventInfo;
        if (!n)
          return !0;
        var i = n.targetEl, a = n.packedEvent, o = n.model, s = n.view;
        if (!o || !s)
          return !0;
        var l = e.cptQuery, u = e.dataQuery;
        return f(l, o, "mainType") && f(l, o, "subType") && f(l, o, "index", "componentIndex") && f(l, o, "name") && f(l, o, "id") && f(u, a, "name") && f(u, a, "dataIndex") && f(u, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, i, a));
        function f(h, c, v, d) {
          return h[v] == null || c[d || v] === h[v];
        }
      }, r.prototype.afterTrigger = function() {
        this.eventInfo = null;
      }, r;
    }()
  ), Zf = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"], $g = Zf.concat(["symbolKeepAspect"]), NT = {
    createOnAllSeries: !0,
    // For legend.
    performRawSeries: !0,
    reset: function(r, t) {
      var e = r.getData();
      if (r.legendIcon && e.setVisual("legendIcon", r.legendIcon), !r.hasSymbolVisual)
        return;
      for (var n = {}, i = {}, a = !1, o = 0; o < Zf.length; o++) {
        var s = Zf[o], l = r.get(s);
        X(l) ? (a = !0, i[s] = l) : n[s] = l;
      }
      if (n.symbol = n.symbol || r.defaultSymbol, e.setVisual(O({
        legendIcon: r.legendIcon || n.symbol,
        symbolKeepAspect: r.get("symbolKeepAspect")
      }, n)), t.isSeriesFiltered(r))
        return;
      var u = yt(i);
      function f(h, c) {
        for (var v = r.getRawValue(c), d = r.getDataParams(c), g = 0; g < u.length; g++) {
          var p = u[g];
          h.setItemVisual(c, p, i[p](v, d));
        }
      }
      return {
        dataEach: a ? f : null
      };
    }
  }, FT = {
    createOnAllSeries: !0,
    // For legend.
    performRawSeries: !0,
    reset: function(r, t) {
      if (!r.hasSymbolVisual || t.isSeriesFiltered(r))
        return;
      var e = r.getData();
      function n(i, a) {
        for (var o = i.getItemModel(a), s = 0; s < $g.length; s++) {
          var l = $g[s], u = o.getShallow(l, !0);
          u != null && i.setItemVisual(a, l, u);
        }
      }
      return {
        dataEach: e.hasItemOption ? n : null
      };
    }
  };
  function zT(r, t, e) {
    switch (e) {
      case "color":
        var n = r.getItemVisual(t, "style");
        return n[r.getVisual("drawType")];
      case "opacity":
        return r.getItemVisual(t, "style").opacity;
      case "symbol":
      case "symbolSize":
      case "liftZ":
        return r.getItemVisual(t, e);
      default:
        console.warn("Unknown visual type " + e);
    }
  }
  function GT(r, t) {
    switch (t) {
      case "color":
        var e = r.getVisual("style");
        return e[r.getVisual("drawType")];
      case "opacity":
        return r.getVisual("style").opacity;
      case "symbol":
      case "symbolSize":
      case "liftZ":
        return r.getVisual(t);
      default:
        console.warn("Unknown visual type " + t);
    }
  }
  function HT(r, t) {
    function e(n, i) {
      var a = [];
      return n.eachComponent({
        mainType: "series",
        subType: r,
        query: i
      }, function(o) {
        a.push(o.seriesIndex);
      }), a;
    }
    M([[r + "ToggleSelect", "toggleSelect"], [r + "Select", "select"], [r + "UnSelect", "unselect"]], function(n) {
      t(n[0], function(i, a, o) {
        i = O({}, i), Rt(i.type, n[1]), o.dispatchAction(O(i, {
          type: n[1],
          seriesIndex: e(a, i)
        }));
      });
    });
  }
  function Ci(r, t, e, n, i) {
    var a = r + t;
    e.isSilent(a) || (We("event " + a + " is deprecated."), n.eachComponent({
      mainType: "series",
      subType: "pie"
    }, function(o) {
      for (var s = o.seriesIndex, l = o.option.selectedMap, u = i.selected, f = 0; f < u.length; f++)
        if (u[f].seriesIndex === s) {
          var h = o.getData(), c = mn(h, i.fromActionPayload);
          e.trigger(a, {
            type: a,
            seriesId: o.id,
            name: F(c) ? h.getName(c[0]) : h.getName(c),
            selected: H(l) ? l : O({}, l)
          });
        }
    }));
  }
  function VT(r, t, e) {
    r.on("selectchanged", function(n) {
      var i = e.getModel();
      n.isFromClick ? (Ci("map", "selectchanged", t, i, n), Ci("pie", "selectchanged", t, i, n)) : n.fromAction === "select" ? (Ci("map", "selected", t, i, n), Ci("pie", "selected", t, i, n)) : n.fromAction === "unselect" && (Ci("map", "unselected", t, i, n), Ci("pie", "unselected", t, i, n));
    });
  }
  function Na(r, t, e) {
    for (var n; r && !(t(r) && (n = r, e)); )
      r = r.__hostTarget || r.parent;
    return n;
  }
  var WT = Math.round(Math.random() * 9), UT = typeof Object.defineProperty == "function", YT = function() {
    function r() {
      this._id = "__ec_inner_" + WT++;
    }
    return r.prototype.get = function(t) {
      return this._guard(t)[this._id];
    }, r.prototype.set = function(t, e) {
      var n = this._guard(t);
      return UT ? Object.defineProperty(n, this._id, {
        value: e,
        enumerable: !1,
        configurable: !0
      }) : n[this._id] = e, this;
    }, r.prototype.delete = function(t) {
      return this.has(t) ? (delete this._guard(t)[this._id], !0) : !1;
    }, r.prototype.has = function(t) {
      return !!this._guard(t)[this._id];
    }, r.prototype._guard = function(t) {
      if (t !== Object(t))
        throw TypeError("Value of WeakMap is not a non-null object.");
      return t;
    }, r;
  }(), XT = ht.extend({
    type: "triangle",
    shape: {
      cx: 0,
      cy: 0,
      width: 0,
      height: 0
    },
    buildPath: function(r, t) {
      var e = t.cx, n = t.cy, i = t.width / 2, a = t.height / 2;
      r.moveTo(e, n - a), r.lineTo(e + i, n + a), r.lineTo(e - i, n + a), r.closePath();
    }
  }), qT = ht.extend({
    type: "diamond",
    shape: {
      cx: 0,
      cy: 0,
      width: 0,
      height: 0
    },
    buildPath: function(r, t) {
      var e = t.cx, n = t.cy, i = t.width / 2, a = t.height / 2;
      r.moveTo(e, n - a), r.lineTo(e + i, n), r.lineTo(e, n + a), r.lineTo(e - i, n), r.closePath();
    }
  }), ZT = ht.extend({
    type: "pin",
    shape: {
      // x, y on the cusp
      x: 0,
      y: 0,
      width: 0,
      height: 0
    },
    buildPath: function(r, t) {
      var e = t.x, n = t.y, i = t.width / 5 * 3, a = Math.max(i, t.height), o = i / 2, s = o * o / (a - o), l = n - a + o + s, u = Math.asin(s / o), f = Math.cos(u) * o, h = Math.sin(u), c = Math.cos(u), v = o * 0.6, d = o * 0.7;
      r.moveTo(e - f, l + s), r.arc(e, l, o, Math.PI - u, Math.PI * 2 + u), r.bezierCurveTo(e + f - h * v, l + s + c * v, e, n - d, e, n), r.bezierCurveTo(e, n - d, e - f + h * v, l + s + c * v, e - f, l + s), r.closePath();
    }
  }), $T = ht.extend({
    type: "arrow",
    shape: {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    },
    buildPath: function(r, t) {
      var e = t.height, n = t.width, i = t.x, a = t.y, o = n / 3 * 2;
      r.moveTo(i, a), r.lineTo(i + o, a + e), r.lineTo(i, a + e / 4 * 3), r.lineTo(i - o, a + e), r.lineTo(i, a), r.closePath();
    }
  }), KT = {
    line: _r,
    rect: At,
    roundRect: At,
    square: At,
    circle: va,
    diamond: qT,
    pin: ZT,
    arrow: $T,
    triangle: XT
  }, QT = {
    line: function(r, t, e, n, i) {
      i.x1 = r, i.y1 = t + n / 2, i.x2 = r + e, i.y2 = t + n / 2;
    },
    rect: function(r, t, e, n, i) {
      i.x = r, i.y = t, i.width = e, i.height = n;
    },
    roundRect: function(r, t, e, n, i) {
      i.x = r, i.y = t, i.width = e, i.height = n, i.r = Math.min(e, n) / 4;
    },
    square: function(r, t, e, n, i) {
      var a = Math.min(e, n);
      i.x = r, i.y = t, i.width = a, i.height = a;
    },
    circle: function(r, t, e, n, i) {
      i.cx = r + e / 2, i.cy = t + n / 2, i.r = Math.min(e, n) / 2;
    },
    diamond: function(r, t, e, n, i) {
      i.cx = r + e / 2, i.cy = t + n / 2, i.width = e, i.height = n;
    },
    pin: function(r, t, e, n, i) {
      i.x = r + e / 2, i.y = t + n / 2, i.width = e, i.height = n;
    },
    arrow: function(r, t, e, n, i) {
      i.x = r + e / 2, i.y = t + n / 2, i.width = e, i.height = n;
    },
    triangle: function(r, t, e, n, i) {
      i.cx = r + e / 2, i.cy = t + n / 2, i.width = e, i.height = n;
    }
  }, $f = {};
  M(KT, function(r, t) {
    $f[t] = new r();
  });
  var jT = ht.extend({
    type: "symbol",
    shape: {
      symbolType: "",
      x: 0,
      y: 0,
      width: 0,
      height: 0
    },
    calculateTextPosition: function(r, t, e) {
      var n = Io(r, t, e), i = this.shape;
      return i && i.symbolType === "pin" && t.position === "inside" && (n.y = e.y + e.height * 0.4), n;
    },
    buildPath: function(r, t, e) {
      var n = t.symbolType;
      if (n !== "none") {
        var i = $f[n];
        i || (n = "rect", i = $f[n]), QT[n](t.x, t.y, t.width, t.height, i.shape), i.buildPath(r, i.shape, e);
      }
    }
  });
  function JT(r, t) {
    if (this.type !== "image") {
      var e = this.style;
      this.__isEmptyBrush ? (e.stroke = r, e.fill = t || "#fff", e.lineWidth = 2) : this.shape.symbolType === "line" ? e.stroke = r : e.fill = r, this.markRedraw();
    }
  }
  function Nn(r, t, e, n, i, a, o) {
    var s = r.indexOf("empty") === 0;
    s && (r = r.substr(5, 1).toLowerCase() + r.substr(6));
    var l;
    return r.indexOf("image://") === 0 ? l = af(r.slice(8), new it(t, e, n, i), o ? "center" : "cover") : r.indexOf("path://") === 0 ? l = ds(r.slice(7), {}, new it(t, e, n, i), o ? "center" : "cover") : l = new jT({
      shape: {
        symbolType: r,
        x: t,
        y: e,
        width: n,
        height: i
      }
    }), l.__isEmptyBrush = s, l.setColor = JT, a && l.setColor(a), l;
  }
  function tC(r) {
    return F(r) || (r = [+r, +r]), [r[0] || 0, r[1] || 0];
  }
  function Kg(r, t) {
    if (r != null)
      return F(r) || (r = [r, r]), [mt(r[0], t[0]) || 0, mt(tt(r[1], r[0]), t[1]) || 0];
  }
  function Fn(r) {
    return isFinite(r);
  }
  function eC(r, t, e) {
    var n = t.x == null ? 0 : t.x, i = t.x2 == null ? 1 : t.x2, a = t.y == null ? 0 : t.y, o = t.y2 == null ? 0 : t.y2;
    t.global || (n = n * e.width + e.x, i = i * e.width + e.x, a = a * e.height + e.y, o = o * e.height + e.y), n = Fn(n) ? n : 0, i = Fn(i) ? i : 1, a = Fn(a) ? a : 0, o = Fn(o) ? o : 0;
    var s = r.createLinearGradient(n, a, i, o);
    return s;
  }
  function rC(r, t, e) {
    var n = e.width, i = e.height, a = Math.min(n, i), o = t.x == null ? 0.5 : t.x, s = t.y == null ? 0.5 : t.y, l = t.r == null ? 0.5 : t.r;
    t.global || (o = o * n + e.x, s = s * i + e.y, l = l * a), o = Fn(o) ? o : 0.5, s = Fn(s) ? s : 0.5, l = l >= 0 && Fn(l) ? l : 0.5;
    var u = r.createRadialGradient(o, s, 0, o, s, l);
    return u;
  }
  function Kf(r, t, e) {
    for (var n = t.type === "radial" ? rC(r, t, e) : eC(r, t, e), i = t.colorStops, a = 0; a < i.length; a++)
      n.addColorStop(i[a].offset, i[a].color);
    return n;
  }
  function nC(r, t) {
    if (r === t || !r && !t)
      return !1;
    if (!r || !t || r.length !== t.length)
      return !0;
    for (var e = 0; e < r.length; e++)
      if (r[e] !== t[e])
        return !0;
    return !1;
  }
  function Hs(r) {
    return parseInt(r, 10);
  }
  function Vs(r, t, e) {
    var n = ["width", "height"][t], i = ["clientWidth", "clientHeight"][t], a = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
    if (e[n] != null && e[n] !== "auto")
      return parseFloat(e[n]);
    var s = document.defaultView.getComputedStyle(r);
    return (r[i] || Hs(s[n]) || Hs(r.style[n])) - (Hs(s[a]) || 0) - (Hs(s[o]) || 0) | 0;
  }
  function iC(r, t) {
    return !r || r === "solid" || !(t > 0) ? null : r === "dashed" ? [4 * t, 2 * t] : r === "dotted" ? [t] : pt(r) ? [r] : F(r) ? r : null;
  }
  function Qg(r) {
    var t = r.style, e = t.lineDash && t.lineWidth > 0 && iC(t.lineDash, t.lineWidth), n = t.lineDashOffset;
    if (e) {
      var i = t.strokeNoScale && r.getLineScale ? r.getLineScale() : 1;
      i && i !== 1 && (e = V(e, function(a) {
        return a / i;
      }), n /= i);
    }
    return [e, n];
  }
  var aC = new zr(!0);
  function Ws(r) {
    var t = r.stroke;
    return !(t == null || t === "none" || !(r.lineWidth > 0));
  }
  function jg(r) {
    return typeof r == "string" && r !== "none";
  }
  function Us(r) {
    var t = r.fill;
    return t != null && t !== "none";
  }
  function Jg(r, t) {
    if (t.fillOpacity != null && t.fillOpacity !== 1) {
      var e = r.globalAlpha;
      r.globalAlpha = t.fillOpacity * t.opacity, r.fill(), r.globalAlpha = e;
    } else
      r.fill();
  }
  function ty(r, t) {
    if (t.strokeOpacity != null && t.strokeOpacity !== 1) {
      var e = r.globalAlpha;
      r.globalAlpha = t.strokeOpacity * t.opacity, r.stroke(), r.globalAlpha = e;
    } else
      r.stroke();
  }
  function Qf(r, t, e) {
    var n = Yc(t.image, t.__image, e);
    if (Fo(n)) {
      var i = r.createPattern(n, t.repeat || "repeat");
      if (typeof DOMMatrix == "function" && i && i.setTransform) {
        var a = new DOMMatrix();
        a.translateSelf(t.x || 0, t.y || 0), a.rotateSelf(0, 0, (t.rotation || 0) * Lv), a.scaleSelf(t.scaleX || 1, t.scaleY || 1), i.setTransform(a);
      }
      return i;
    }
  }
  function oC(r, t, e, n) {
    var i, a = Ws(e), o = Us(e), s = e.strokePercent, l = s < 1, u = !t.path;
    (!t.silent || l) && u && t.createPathProxy();
    var f = t.path || aC, h = t.__dirty;
    if (!n) {
      var c = e.fill, v = e.stroke, d = o && !!c.colorStops, g = a && !!v.colorStops, p = o && !!c.image, y = a && !!v.image, m = void 0, _ = void 0, S = void 0, b = void 0, w = void 0;
      (d || g) && (w = t.getBoundingRect()), d && (m = h ? Kf(r, c, w) : t.__canvasFillGradient, t.__canvasFillGradient = m), g && (_ = h ? Kf(r, v, w) : t.__canvasStrokeGradient, t.__canvasStrokeGradient = _), p && (S = h || !t.__canvasFillPattern ? Qf(r, c, t) : t.__canvasFillPattern, t.__canvasFillPattern = S), y && (b = h || !t.__canvasStrokePattern ? Qf(r, v, t) : t.__canvasStrokePattern, t.__canvasStrokePattern = S), d ? r.fillStyle = m : p && (S ? r.fillStyle = S : o = !1), g ? r.strokeStyle = _ : y && (b ? r.strokeStyle = b : a = !1);
    }
    var x = t.getGlobalScale();
    f.setScale(x[0], x[1], t.segmentIgnoreThreshold);
    var T, D;
    r.setLineDash && e.lineDash && (i = Qg(t), T = i[0], D = i[1]);
    var A = !0;
    (u || h & ei) && (f.setDPR(r.dpr), l ? f.setContext(null) : (f.setContext(r), A = !1), f.reset(), t.buildPath(f, t.shape, n), f.toStatic(), t.pathUpdated()), A && f.rebuildPath(r, l ? s : 1), T && (r.setLineDash(T), r.lineDashOffset = D), n || (e.strokeFirst ? (a && ty(r, e), o && Jg(r, e)) : (o && Jg(r, e), a && ty(r, e))), T && r.setLineDash([]);
  }
  function sC(r, t, e) {
    var n = t.__image = Yc(e.image, t.__image, t, t.onload);
    if (!(!n || !Fo(n))) {
      var i = e.x || 0, a = e.y || 0, o = t.getWidth(), s = t.getHeight(), l = n.width / n.height;
      if (o == null && s != null ? o = s * l : s == null && o != null ? s = o / l : o == null && s == null && (o = n.width, s = n.height), e.sWidth && e.sHeight) {
        var u = e.sx || 0, f = e.sy || 0;
        r.drawImage(n, u, f, e.sWidth, e.sHeight, i, a, o, s);
      } else if (e.sx && e.sy) {
        var u = e.sx, f = e.sy, h = o - u, c = s - f;
        r.drawImage(n, u, f, h, c, i, a, o, s);
      } else
        r.drawImage(n, i, a, o, s);
    }
  }
  function lC(r, t, e) {
    var n, i = e.text;
    if (i != null && (i += ""), i) {
      r.font = e.font || ze, r.textAlign = e.textAlign, r.textBaseline = e.textBaseline;
      var a = void 0, o = void 0;
      r.setLineDash && e.lineDash && (n = Qg(t), a = n[0], o = n[1]), a && (r.setLineDash(a), r.lineDashOffset = o), e.strokeFirst ? (Ws(e) && r.strokeText(i, e.x, e.y), Us(e) && r.fillText(i, e.x, e.y)) : (Us(e) && r.fillText(i, e.x, e.y), Ws(e) && r.strokeText(i, e.x, e.y)), a && r.setLineDash([]);
    }
  }
  var ey = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"], ry = [["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]];
  function ny(r, t, e, n, i) {
    var a = !1;
    if (!n && (e = e || {}, t === e))
      return !1;
    if (n || t.opacity !== e.opacity) {
      fe(r, i), a = !0;
      var o = Math.max(Math.min(t.opacity, 1), 0);
      r.globalAlpha = isNaN(o) ? Sn.opacity : o;
    }
    (n || t.blend !== e.blend) && (a || (fe(r, i), a = !0), r.globalCompositeOperation = t.blend || Sn.blend);
    for (var s = 0; s < ey.length; s++) {
      var l = ey[s];
      (n || t[l] !== e[l]) && (a || (fe(r, i), a = !0), r[l] = r.dpr * (t[l] || 0));
    }
    return (n || t.shadowColor !== e.shadowColor) && (a || (fe(r, i), a = !0), r.shadowColor = t.shadowColor || Sn.shadowColor), a;
  }
  function iy(r, t, e, n, i) {
    var a = Fa(t, i.inHover), o = n ? null : e && Fa(e, i.inHover) || {};
    if (a === o)
      return !1;
    var s = ny(r, a, o, n, i);
    if ((n || a.fill !== o.fill) && (s || (fe(r, i), s = !0), jg(a.fill) && (r.fillStyle = a.fill)), (n || a.stroke !== o.stroke) && (s || (fe(r, i), s = !0), jg(a.stroke) && (r.strokeStyle = a.stroke)), (n || a.opacity !== o.opacity) && (s || (fe(r, i), s = !0), r.globalAlpha = a.opacity == null ? 1 : a.opacity), t.hasStroke()) {
      var l = a.lineWidth, u = l / (a.strokeNoScale && t.getLineScale ? t.getLineScale() : 1);
      r.lineWidth !== u && (s || (fe(r, i), s = !0), r.lineWidth = u);
    }
    for (var f = 0; f < ry.length; f++) {
      var h = ry[f], c = h[0];
      (n || a[c] !== o[c]) && (s || (fe(r, i), s = !0), r[c] = a[c] || h[1]);
    }
    return s;
  }
  function uC(r, t, e, n, i) {
    return ny(r, Fa(t, i.inHover), e && Fa(e, i.inHover), n, i);
  }
  function ay(r, t) {
    var e = t.transform, n = r.dpr || 1;
    e ? r.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : r.setTransform(n, 0, 0, n, 0, 0);
  }
  function fC(r, t, e) {
    for (var n = !1, i = 0; i < r.length; i++) {
      var a = r[i];
      n = n || a.isZeroArea(), ay(t, a), t.beginPath(), a.buildPath(t, a.shape), t.clip();
    }
    e.allClipped = n;
  }
  function hC(r, t) {
    return r && t ? r[0] !== t[0] || r[1] !== t[1] || r[2] !== t[2] || r[3] !== t[3] || r[4] !== t[4] || r[5] !== t[5] : !(!r && !t);
  }
  var oy = 1, sy = 2, ly = 3, uy = 4;
  function vC(r) {
    var t = Us(r), e = Ws(r);
    return !(r.lineDash || !(+t ^ +e) || t && typeof r.fill != "string" || e && typeof r.stroke != "string" || r.strokePercent < 1 || r.strokeOpacity < 1 || r.fillOpacity < 1);
  }
  function fe(r, t) {
    t.batchFill && r.fill(), t.batchStroke && r.stroke(), t.batchFill = "", t.batchStroke = "";
  }
  function Fa(r, t) {
    return t && r.__hoverStyle || r.style;
  }
  function jf(r, t) {
    zn(r, t, {
      inHover: !1,
      viewWidth: 0,
      viewHeight: 0
    }, !0);
  }
  function zn(r, t, e, n) {
    var i = t.transform;
    if (!t.shouldBePainted(e.viewWidth, e.viewHeight, !1, !1)) {
      t.__dirty &= ~ge, t.__isRendered = !1;
      return;
    }
    var a = t.__clipPaths, o = e.prevElClipPaths, s = !1, l = !1;
    if ((!o || nC(a, o)) && (o && o.length && (fe(r, e), r.restore(), l = s = !0, e.prevElClipPaths = null, e.allClipped = !1, e.prevEl = null), a && a.length && (fe(r, e), r.save(), fC(a, r, e), s = !0), e.prevElClipPaths = a), e.allClipped) {
      t.__isRendered = !1;
      return;
    }
    t.beforeBrush && t.beforeBrush(), t.innerBeforeBrush();
    var u = e.prevEl;
    u || (l = s = !0);
    var f = t instanceof ht && t.autoBatch && vC(t.style);
    s || hC(i, u.transform) ? (fe(r, e), ay(r, t)) : f || fe(r, e);
    var h = Fa(t, e.inHover);
    t instanceof ht ? (e.lastDrawType !== oy && (l = !0, e.lastDrawType = oy), iy(r, t, u, l, e), (!f || !e.batchFill && !e.batchStroke) && r.beginPath(), oC(r, t, h, f), f && (e.batchFill = h.fill || "", e.batchStroke = h.stroke || "")) : t instanceof Wo ? (e.lastDrawType !== ly && (l = !0, e.lastDrawType = ly), iy(r, t, u, l, e), lC(r, t, h)) : t instanceof gr ? (e.lastDrawType !== sy && (l = !0, e.lastDrawType = sy), uC(r, t, u, l, e), sC(r, t, h)) : t.getTemporalDisplayables && (e.lastDrawType !== uy && (l = !0, e.lastDrawType = uy), cC(r, t, e)), f && n && fe(r, e), t.innerAfterBrush(), t.afterBrush && t.afterBrush(), e.prevEl = t, t.__dirty = 0, t.__isRendered = !0;
  }
  function cC(r, t, e) {
    var n = t.getDisplayables(), i = t.getTemporalDisplayables();
    r.save();
    var a = {
      prevElClipPaths: null,
      prevEl: null,
      allClipped: !1,
      viewWidth: e.viewWidth,
      viewHeight: e.viewHeight,
      inHover: e.inHover
    }, o, s;
    for (o = t.getCursor(), s = n.length; o < s; o++) {
      var l = n[o];
      l.beforeBrush && l.beforeBrush(), l.innerBeforeBrush(), zn(r, l, a, o === s - 1), l.innerAfterBrush(), l.afterBrush && l.afterBrush(), a.prevEl = l;
    }
    for (var u = 0, f = i.length; u < f; u++) {
      var l = i[u];
      l.beforeBrush && l.beforeBrush(), l.innerBeforeBrush(), zn(r, l, a, u === f - 1), l.innerAfterBrush(), l.afterBrush && l.afterBrush(), a.prevEl = l;
    }
    t.clearTemporalDisplayables(), t.notClear = !0, r.restore();
  }
  var Jf = new YT(), fy = new Ui(100), hy = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"];
  function th(r, t) {
    if (r === "none")
      return null;
    var e = t.getDevicePixelRatio(), n = t.getZr(), i = n.painter.type === "svg";
    r.dirty && Jf.delete(r);
    var a = Jf.get(r);
    if (a)
      return a;
    var o = lt(r, {
      symbol: "rect",
      symbolSize: 1,
      symbolKeepAspect: !0,
      color: "rgba(0, 0, 0, 0.2)",
      backgroundColor: null,
      dashArrayX: 5,
      dashArrayY: 5,
      rotation: 0,
      maxTileWidth: 512,
      maxTileHeight: 512
    });
    o.backgroundColor === "none" && (o.backgroundColor = null);
    var s = {
      repeat: "repeat"
    };
    return l(s), s.rotation = o.rotation, s.scaleX = s.scaleY = i ? 1 : 1 / e, Jf.set(r, s), r.dirty = !1, s;
    function l(u) {
      for (var f = [e], h = !0, c = 0; c < hy.length; ++c) {
        var v = o[hy[c]];
        if (v != null && !F(v) && !H(v) && !pt(v) && typeof v != "boolean") {
          h = !1;
          break;
        }
        f.push(v);
      }
      var d;
      if (h) {
        d = f.join(",") + (i ? "-svg" : "");
        var g = fy.get(d);
        g && (i ? u.svgElement = g : u.image = g);
      }
      var p = cy(o.dashArrayX), y = dC(o.dashArrayY), m = vy(o.symbol), _ = pC(p), S = dy(y), b = !i && Zt.createCanvas(), w = i && {
        tag: "g",
        attrs: {},
        key: "dcl",
        children: []
      }, x = D(), T;
      b && (b.width = x.width * e, b.height = x.height * e, T = b.getContext("2d")), A(), h && fy.put(d, b || w), u.image = b, u.svgElement = w, u.svgWidth = x.width, u.svgHeight = x.height;
      function D() {
        for (var C = 1, L = 0, P = _.length; L < P; ++L)
          C = Ec(C, _[L]);
        for (var I = 1, L = 0, P = m.length; L < P; ++L)
          I = Ec(I, m[L].length);
        C *= I;
        var R = S * _.length * m.length;
        {
          var E = function(Y) {
            console.warn("Calculated decal size is greater than " + Y + " due to decal option settings so " + Y + " is used for the decal size. Please consider changing the decal option to make a smaller decal or set " + Y + " to be larger to avoid incontinuity.");
          };
          C > o.maxTileWidth && E("maxTileWidth"), R > o.maxTileHeight && E("maxTileHeight");
        }
        return {
          width: Math.max(1, Math.min(C, o.maxTileWidth)),
          height: Math.max(1, Math.min(R, o.maxTileHeight))
        };
      }
      function A() {
        T && (T.clearRect(0, 0, b.width, b.height), o.backgroundColor && (T.fillStyle = o.backgroundColor, T.fillRect(0, 0, b.width, b.height)));
        for (var C = 0, L = 0; L < y.length; ++L)
          C += y[L];
        if (C <= 0)
          return;
        for (var P = -S, I = 0, R = 0, E = 0; P < x.height; ) {
          if (I % 2 === 0) {
            for (var Y = R / 2 % m.length, B = 0, N = 0, U = 0; B < x.width * 2; ) {
              for (var K = 0, L = 0; L < p[E].length; ++L)
                K += p[E][L];
              if (K <= 0)
                break;
              if (N % 2 === 0) {
                var $ = (1 - o.symbolSize) * 0.5, rt = B + p[E][N] * $, vt = P + y[I] * $, Nt = p[E][N] * o.symbolSize, _t = y[I] * o.symbolSize, ce = U / 2 % m[Y].length;
                we(rt, vt, Nt, _t, m[Y][ce]);
              }
              B += p[E][N], ++U, ++N, N === p[E].length && (N = 0);
            }
            ++E, E === p.length && (E = 0);
          }
          P += y[I], ++R, ++I, I === y.length && (I = 0);
        }
        function we(Gt, Pt, Z, et, vr) {
          var Ft = i ? 1 : e, jr = Nn(vr, Gt * Ft, Pt * Ft, Z * Ft, et * Ft, o.color, o.symbolKeepAspect);
          if (i) {
            var Cr = n.painter.renderOneToVNode(jr);
            Cr && w.children.push(Cr);
          } else
            jf(T, jr);
        }
      }
    }
  }
  function vy(r) {
    if (!r || r.length === 0)
      return [["rect"]];
    if (H(r))
      return [[r]];
    for (var t = !0, e = 0; e < r.length; ++e)
      if (!H(r[e])) {
        t = !1;
        break;
      }
    if (t)
      return vy([r]);
    for (var n = [], e = 0; e < r.length; ++e)
      H(r[e]) ? n.push([r[e]]) : n.push(r[e]);
    return n;
  }
  function cy(r) {
    if (!r || r.length === 0)
      return [[0, 0]];
    if (pt(r)) {
      var t = Math.ceil(r);
      return [[t, t]];
    }
    for (var e = !0, n = 0; n < r.length; ++n)
      if (!pt(r[n])) {
        e = !1;
        break;
      }
    if (e)
      return cy([r]);
    for (var i = [], n = 0; n < r.length; ++n)
      if (pt(r[n])) {
        var t = Math.ceil(r[n]);
        i.push([t, t]);
      } else {
        var t = V(r[n], function(s) {
          return Math.ceil(s);
        });
        t.length % 2 === 1 ? i.push(t.concat(t)) : i.push(t);
      }
    return i;
  }
  function dC(r) {
    if (!r || typeof r == "object" && r.length === 0)
      return [0, 0];
    if (pt(r)) {
      var t = Math.ceil(r);
      return [t, t];
    }
    var e = V(r, function(n) {
      return Math.ceil(n);
    });
    return r.length % 2 ? e.concat(e) : e;
  }
  function pC(r) {
    return V(r, function(t) {
      return dy(t);
    });
  }
  function dy(r) {
    for (var t = 0, e = 0; e < r.length; ++e)
      t += r[e];
    return r.length % 2 === 1 ? t * 2 : t;
  }
  function gC(r, t) {
    r.eachRawSeries(function(e) {
      if (!r.isSeriesFiltered(e)) {
        var n = e.getData();
        n.hasItemVisual() && n.each(function(o) {
          var s = n.getItemVisual(o, "decal");
          if (s) {
            var l = n.ensureUniqueItemVisual(o, "style");
            l.decal = th(s, t);
          }
        });
        var i = n.getVisual("decal");
        if (i) {
          var a = n.getVisual("style");
          a.decal = th(i, t);
        }
      }
    });
  }
  var qe = new je(), Ys = {};
  function yC(r, t) {
    Ys[r] && Wt("Already has an implementation of " + r + "."), Ys[r] = t;
  }
  function py(r) {
    return Ys[r] || Wt("Implementation of " + r + " doesn't exists."), Ys[r];
  }
  var mC = "5.4.2", _C = {
    zrender: "5.4.3"
  }, SC = 1, wC = 800, bC = 900, xC = 1e3, TC = 2e3, CC = 5e3, gy = 1e3, DC = 1100, eh = 2e3, yy = 3e3, MC = 4e3, Xs = 4500, AC = 4600, LC = 5e3, PC = 6e3, _y = 7e3, Sy = {
    PROCESSOR: {
      FILTER: xC,
      SERIES_FILTER: wC,
      STATISTIC: CC
    },
    VISUAL: {
      LAYOUT: gy,
      PROGRESSIVE_LAYOUT: DC,
      GLOBAL: eh,
      CHART: yy,
      POST_CHART_LAYOUT: AC,
      COMPONENT: MC,
      BRUSH: LC,
      CHART_ITEM: Xs,
      ARIA: PC,
      DECAL: _y
    }
  }, qt = "__flagInMainProcess", he = "__pendingUpdate", rh = "__needsUpdateStatus", wy = /^[a-zA-Z0-9_]+$/, nh = "__connectUpdateStatus", by = 0, IC = 1, RC = 2;
  function xy(r) {
    return function() {
      for (var t = [], e = 0; e < arguments.length; e++)
        t[e] = arguments[e];
      if (this.isDisposed()) {
        _e(this.id);
        return;
      }
      return Cy(this, r, t);
    };
  }
  function Ty(r) {
    return function() {
      for (var t = [], e = 0; e < arguments.length; e++)
        t[e] = arguments[e];
      return Cy(this, r, t);
    };
  }
  function Cy(r, t, e) {
    return e[0] = e[0] && e[0].toLowerCase(), je.prototype[t].apply(r, e);
  }
  var Dy = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }
      return t;
    }(je)
  ), My = Dy.prototype;
  My.on = Ty("on"), My.off = Ty("off");
  var Di, ih, qs, Wr, ah, oh, sh, za, Ga, Ay, Ly, lh, Py, Zs, Iy, Ry, Ne, Ey, $s = (
    /** @class */
    function(r) {
      k(t, r);
      function t(e, n, i) {
        var a = r.call(this, new BT()) || this;
        a._chartsViews = [], a._chartsMap = {}, a._componentsViews = [], a._componentsMap = {}, a._pendingActions = [], i = i || {}, H(n) && (n = ky[n]), a._dom = e;
        var o = "canvas", s = "auto", l = !1;
        {
          var u = (
            /* eslint-disable-next-line */
            z.hasGlobalWindow ? window : global
          );
          o = u.__ECHARTS__DEFAULT__RENDERER__ || o, s = tt(u.__ECHARTS__DEFAULT__COARSE_POINTER, s);
          var f = u.__ECHARTS__DEFAULT__USE_DIRTY_RECT__;
          l = f ?? l;
        }
        var h = a._zr = _u(e, {
          renderer: i.renderer || o,
          devicePixelRatio: i.devicePixelRatio,
          width: i.width,
          height: i.height,
          ssr: i.ssr,
          useDirtyRect: tt(i.useDirtyRect, l),
          useCoarsePointer: tt(i.useCoarsePointer, s),
          pointerSize: i.pointerSize
        });
        a._ssr = i.ssr, a._throttledZrFlush = Ns(gt(h.flush, h), 17), n = nt(n), n && Jp(n, !0), a._theme = n, a._locale = Gb(i.locale || Sp), a._coordSysMgr = new Is();
        var c = a._api = Iy(a);
        function v(d, g) {
          return d.__prio - g.__prio;
        }
        return co(Qs, v), co(fh, v), a._scheduler = new Hg(a, c, fh, Qs), a._messageCenter = new Dy(), a._initEvents(), a.resize = gt(a.resize, a), h.animation.on("frame", a._onframe, a), Ay(h, a), Ly(h, a), Oi(a), a;
      }
      return t.prototype._onframe = function() {
        if (!this._disposed) {
          Ey(this);
          var e = this._scheduler;
          if (this[he]) {
            var n = this[he].silent;
            this[qt] = !0;
            try {
              Di(this), Wr.update.call(this, null, this[he].updateParams);
            } catch (l) {
              throw this[qt] = !1, this[he] = null, l;
            }
            this._zr.flush(), this[qt] = !1, this[he] = null, za.call(this, n), Ga.call(this, n);
          } else if (e.unfinished) {
            var i = SC, a = this._model, o = this._api;
            e.unfinished = !1;
            do {
              var s = +/* @__PURE__ */ new Date();
              e.performSeriesTasks(a), e.performDataProcessorTasks(a), oh(this, a), e.performVisualTasks(a), Zs(this, this._model, o, "remain", {}), i -= +/* @__PURE__ */ new Date() - s;
            } while (i > 0 && e.unfinished);
            e.unfinished || this._zr.flush();
          }
        }
      }, t.prototype.getDom = function() {
        return this._dom;
      }, t.prototype.getId = function() {
        return this.id;
      }, t.prototype.getZr = function() {
        return this._zr;
      }, t.prototype.isSSR = function() {
        return this._ssr;
      }, t.prototype.setOption = function(e, n, i) {
        if (this[qt]) {
          Wt("`setOption` should not be called during main process.");
          return;
        }
        if (this._disposed) {
          _e(this.id);
          return;
        }
        var a, o, s;
        if (W(n) && (i = n.lazyUpdate, a = n.silent, o = n.replaceMerge, s = n.transition, n = n.notMerge), this[qt] = !0, !this._model || n) {
          var l = new yx(this._api), u = this._theme, f = this._model = new Pf();
          f.scheduler = this._scheduler, f.ssr = this._ssr, f.init(null, null, null, u, this._locale, l);
        }
        this._model.setOption(e, {
          replaceMerge: o
        }, hh);
        var h = {
          seriesTransition: s,
          optionChanged: !0
        };
        if (i)
          this[he] = {
            silent: a,
            updateParams: h
          }, this[qt] = !1, this.getZr().wakeUp();
        else {
          try {
            Di(this), Wr.update.call(this, null, h);
          } catch (c) {
            throw this[he] = null, this[qt] = !1, c;
          }
          this._ssr || this._zr.flush(), this[he] = null, this[qt] = !1, za.call(this, a), Ga.call(this, a);
        }
      }, t.prototype.setTheme = function() {
        We("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
      }, t.prototype.getModel = function() {
        return this._model;
      }, t.prototype.getOption = function() {
        return this._model && this._model.getOption();
      }, t.prototype.getWidth = function() {
        return this._zr.getWidth();
      }, t.prototype.getHeight = function() {
        return this._zr.getHeight();
      }, t.prototype.getDevicePixelRatio = function() {
        return this._zr.painter.dpr || z.hasGlobalWindow && window.devicePixelRatio || 1;
      }, t.prototype.getRenderedCanvas = function(e) {
        return Rt("getRenderedCanvas", "renderToCanvas"), this.renderToCanvas(e);
      }, t.prototype.renderToCanvas = function(e) {
        e = e || {};
        var n = this._zr.painter;
        if (n.type !== "canvas")
          throw new Error("renderToCanvas can only be used in the canvas renderer.");
        return n.getRenderedCanvas({
          backgroundColor: e.backgroundColor || this._model.get("backgroundColor"),
          pixelRatio: e.pixelRatio || this.getDevicePixelRatio()
        });
      }, t.prototype.renderToSVGString = function(e) {
        e = e || {};
        var n = this._zr.painter;
        if (n.type !== "svg")
          throw new Error("renderToSVGString can only be used in the svg renderer.");
        return n.renderToString({
          useViewBox: e.useViewBox
        });
      }, t.prototype.getSvgDataURL = function() {
        if (z.svgSupported) {
          var e = this._zr, n = e.storage.getDisplayList();
          return M(n, function(i) {
            i.stopAnimation(null, !0);
          }), e.painter.toDataURL();
        }
      }, t.prototype.getDataURL = function(e) {
        if (this._disposed) {
          _e(this.id);
          return;
        }
        e = e || {};
        var n = e.excludeComponents, i = this._model, a = [], o = this;
        M(n, function(l) {
          i.eachComponent({
            mainType: l
          }, function(u) {
            var f = o._componentsMap[u.__viewId];
            f.group.ignore || (a.push(f), f.group.ignore = !0);
          });
        });
        var s = this._zr.painter.getType() === "svg" ? this.getSvgDataURL() : this.renderToCanvas(e).toDataURL("image/" + (e && e.type || "png"));
        return M(a, function(l) {
          l.group.ignore = !1;
        }), s;
      }, t.prototype.getConnectedDataURL = function(e) {
        if (this._disposed) {
          _e(this.id);
          return;
        }
        var n = e.type === "svg", i = this.group, a = Math.min, o = Math.max, s = 1 / 0;
        if (js[i]) {
          var l = s, u = s, f = -s, h = -s, c = [], v = e && e.pixelRatio || this.getDevicePixelRatio();
          M(Gn, function(_, S) {
            if (_.group === i) {
              var b = n ? _.getZr().painter.getSvgDom().innerHTML : _.renderToCanvas(nt(e)), w = _.getDom().getBoundingClientRect();
              l = a(w.left, l), u = a(w.top, u), f = o(w.right, f), h = o(w.bottom, h), c.push({
                dom: b,
                left: w.left,
                top: w.top
              });
            }
          }), l *= v, u *= v, f *= v, h *= v;
          var d = f - l, g = h - u, p = Zt.createCanvas(), y = _u(p, {
            renderer: n ? "svg" : "canvas"
          });
          if (y.resize({
            width: d,
            height: g
          }), n) {
            var m = "";
            return M(c, function(_) {
              var S = _.left - l, b = _.top - u;
              m += '<g transform="translate(' + S + "," + b + ')">' + _.dom + "</g>";
            }), y.painter.getSvgRoot().innerHTML = m, e.connectedBackgroundColor && y.painter.setBackgroundColor(e.connectedBackgroundColor), y.refreshImmediately(), y.painter.toDataURL();
          } else
            return e.connectedBackgroundColor && y.add(new At({
              shape: {
                x: 0,
                y: 0,
                width: d,
                height: g
              },
              style: {
                fill: e.connectedBackgroundColor
              }
            })), M(c, function(_) {
              var S = new gr({
                style: {
                  x: _.left * v - l,
                  y: _.top * v - u,
                  image: _.dom
                }
              });
              y.add(S);
            }), y.refreshImmediately(), p.toDataURL("image/" + (e && e.type || "png"));
        } else
          return this.getDataURL(e);
      }, t.prototype.convertToPixel = function(e, n) {
        return ah(this, "convertToPixel", e, n);
      }, t.prototype.convertFromPixel = function(e, n) {
        return ah(this, "convertFromPixel", e, n);
      }, t.prototype.containPixel = function(e, n) {
        if (this._disposed) {
          _e(this.id);
          return;
        }
        var i = this._model, a, o = Cu(i, e);
        return M(o, function(s, l) {
          l.indexOf("Models") >= 0 && M(s, function(u) {
            var f = u.coordinateSystem;
            if (f && f.containPoint)
              a = a || !!f.containPoint(n);
            else if (l === "seriesModels") {
              var h = this._chartsMap[u.__viewId];
              h && h.containPoint ? a = a || h.containPoint(n, u) : Vt(l + ": " + (h ? "The found component do not support containPoint." : "No view mapping to the found component."));
            } else
              Vt(l + ": containPoint is not supported");
          }, this);
        }, this), !!a;
      }, t.prototype.getVisual = function(e, n) {
        var i = this._model, a = Cu(i, e, {
          defaultMainType: "series"
        }), o = a.seriesModel;
        o || Vt("There is no specified series model");
        var s = o.getData(), l = a.hasOwnProperty("dataIndexInside") ? a.dataIndexInside : a.hasOwnProperty("dataIndex") ? s.indexOfRawIndex(a.dataIndex) : null;
        return l != null ? zT(s, l, n) : GT(s, n);
      }, t.prototype.getViewOfComponentModel = function(e) {
        return this._componentsMap[e.__viewId];
      }, t.prototype.getViewOfSeriesModel = function(e) {
        return this._chartsMap[e.__viewId];
      }, t.prototype._initEvents = function() {
        var e = this;
        M(EC, function(n) {
          var i = function(a) {
            var o = e.getModel(), s = a.target, l, u = n === "globalout";
            if (u ? l = {} : s && Na(s, function(d) {
              var g = st(d);
              if (g && g.dataIndex != null) {
                var p = g.dataModel || o.getSeriesByIndex(g.seriesIndex);
                return l = p && p.getDataParams(g.dataIndex, g.dataType) || {}, !0;
              } else if (g.eventData)
                return l = O({}, g.eventData), !0;
            }, !0), l) {
              var f = l.componentType, h = l.componentIndex;
              (f === "markLine" || f === "markPoint" || f === "markArea") && (f = "series", h = l.seriesIndex);
              var c = f && h != null && o.getComponent(f, h), v = c && e[c.mainType === "series" ? "_chartsMap" : "_componentsMap"][c.__viewId];
              !u && !(c && v) && Vt("model or view can not be found by params"), l.event = a, l.type = n, e._$eventProcessor.eventInfo = {
                targetEl: s,
                packedEvent: l,
                model: c,
                view: v
              }, e.trigger(n, l);
            }
          };
          i.zrEventfulCallAtLast = !0, e._zr.on(n, i, e);
        }), M(Ha, function(n, i) {
          e._messageCenter.on(i, function(a) {
            this.trigger(i, a);
          }, e);
        }), M(["selectchanged"], function(n) {
          e._messageCenter.on(n, function(i) {
            this.trigger(n, i);
          }, e);
        }), VT(this._messageCenter, this, this._api);
      }, t.prototype.isDisposed = function() {
        return this._disposed;
      }, t.prototype.clear = function() {
        if (this._disposed) {
          _e(this.id);
          return;
        }
        this.setOption({
          series: []
        }, !0);
      }, t.prototype.dispose = function() {
        if (this._disposed) {
          _e(this.id);
          return;
        }
        this._disposed = !0;
        var e = this.getDom();
        e && Hc(this.getDom(), ch, "");
        var n = this, i = n._api, a = n._model;
        M(n._componentsViews, function(o) {
          o.dispose(a, i);
        }), M(n._chartsViews, function(o) {
          o.dispose(a, i);
        }), n._zr.dispose(), n._dom = n._model = n._chartsMap = n._componentsMap = n._chartsViews = n._componentsViews = n._scheduler = n._api = n._zr = n._throttledZrFlush = n._theme = n._coordSysMgr = n._messageCenter = null, delete Gn[n.id];
      }, t.prototype.resize = function(e) {
        if (this[qt]) {
          Wt("`resize` should not be called during main process.");
          return;
        }
        if (this._disposed) {
          _e(this.id);
          return;
        }
        this._zr.resize(e);
        var n = this._model;
        if (this._loadingFX && this._loadingFX.resize(), !!n) {
          var i = n.resetOption("media"), a = e && e.silent;
          this[he] && (a == null && (a = this[he].silent), i = !0, this[he] = null), this[qt] = !0;
          try {
            i && Di(this), Wr.update.call(this, {
              type: "resize",
              animation: O({
                // Disable animation
                duration: 0
              }, e && e.animation)
            });
          } catch (o) {
            throw this[qt] = !1, o;
          }
          this[qt] = !1, za.call(this, a), Ga.call(this, a);
        }
      }, t.prototype.showLoading = function(e, n) {
        if (this._disposed) {
          _e(this.id);
          return;
        }
        if (W(e) && (n = e, e = ""), e = e || "default", this.hideLoading(), !vh[e]) {
          Vt("Loading effects " + e + " not exists.");
          return;
        }
        var i = vh[e](this._api, n), a = this._zr;
        this._loadingFX = i, a.add(i);
      }, t.prototype.hideLoading = function() {
        if (this._disposed) {
          _e(this.id);
          return;
        }
        this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
      }, t.prototype.makeActionFromEvent = function(e) {
        var n = O({}, e);
        return n.type = Ha[e.type], n;
      }, t.prototype.dispatchAction = function(e, n) {
        if (this._disposed) {
          _e(this.id);
          return;
        }
        if (W(n) || (n = {
          silent: !!n
        }), !!Ks[e.type] && this._model) {
          if (this[qt]) {
            this._pendingActions.push(e);
            return;
          }
          var i = n.silent;
          sh.call(this, e, i);
          var a = n.flush;
          a ? this._zr.flush() : a !== !1 && z.browser.weChat && this._throttledZrFlush(), za.call(this, i), Ga.call(this, i);
        }
      }, t.prototype.updateLabelLayout = function() {
        qe.trigger("series:layoutlabels", this._model, this._api, {
          // Not adding series labels.
          // TODO
          updatedSeries: []
        });
      }, t.prototype.appendData = function(e) {
        if (this._disposed) {
          _e(this.id);
          return;
        }
        var n = e.seriesIndex, i = this.getModel(), a = i.getSeriesByIndex(n);
        j(e.data && a), a.appendData(e), this._scheduler.unfinished = !0, this.getZr().wakeUp();
      }, t.internalField = function() {
        Di = function(h) {
          var c = h._scheduler;
          c.restorePipelines(h._model), c.prepareStageTasks(), ih(h, !0), ih(h, !1), c.plan();
        }, ih = function(h, c) {
          for (var v = h._model, d = h._scheduler, g = c ? h._componentsViews : h._chartsViews, p = c ? h._componentsMap : h._chartsMap, y = h._zr, m = h._api, _ = 0; _ < g.length; _++)
            g[_].__alive = !1;
          c ? v.eachComponent(function(w, x) {
            w !== "series" && S(x);
          }) : v.eachSeries(S);
          function S(w) {
            var x = w.__requireNewView;
            w.__requireNewView = !1;
            var T = "_ec_" + w.id + "_" + w.type, D = !x && p[T];
            if (!D) {
              var A = rr(w.type), C = c ? ee.getClass(A.main, A.sub) : (
                // FIXME:TS
                // (ChartView as ChartViewConstructor).getClass('series', classType.sub)
                // For backward compat, still support a chart type declared as only subType
                // like "liquidfill", but recommend "series.liquidfill"
                // But need a base class to make a type series.
                re.getClass(A.sub)
              );
              j(C, A.sub + " does not exist."), D = new C(), D.init(v, m), p[T] = D, g.push(D), y.add(D.group);
            }
            w.__viewId = D.__id = T, D.__alive = !0, D.__model = w, D.group.__ecComponentInfo = {
              mainType: w.mainType,
              index: w.componentIndex
            }, !c && d.prepareView(D, w, v, m);
          }
          for (var _ = 0; _ < g.length; ) {
            var b = g[_];
            b.__alive ? _++ : (!c && b.renderTask.dispose(), y.remove(b.group), b.dispose(v, m), g.splice(_, 1), p[b.__id] === b && delete p[b.__id], b.__id = b.group.__ecComponentInfo = null);
          }
        }, qs = function(h, c, v, d, g) {
          var p = h._model;
          if (p.setUpdatePayload(v), !d) {
            M([].concat(h._componentsViews).concat(h._chartsViews), b);
            return;
          }
          var y = {};
          y[d + "Id"] = v[d + "Id"], y[d + "Index"] = v[d + "Index"], y[d + "Name"] = v[d + "Name"];
          var m = {
            mainType: d,
            query: y
          };
          g && (m.subType = g);
          var _ = v.excludeSeriesId, S;
          _ != null && (S = J(), M(Jt(_), function(w) {
            var x = er(w, null);
            x != null && S.set(x, !0);
          })), p && p.eachComponent(m, function(w) {
            var x = S && S.get(w.id) != null;
            if (!x)
              if (Bd(v))
                if (w instanceof ue)
                  v.type === An && !v.notBlur && !w.get(["emphasis", "disabled"]) && Ew(w, v, h._api);
                else {
                  var T = $u(w.mainType, w.componentIndex, v.name, h._api), D = T.focusSelf, A = T.dispatchers;
                  v.type === An && D && !v.notBlur && Zu(w.mainType, w.componentIndex, h._api), A && M(A, function(C) {
                    v.type === An ? Ko(C) : Qo(C);
                  });
                }
              else
                Ku(v) && w instanceof ue && (Bw(w, v, h._api), Ed(w), Ne(h));
          }, h), p && p.eachComponent(m, function(w) {
            var x = S && S.get(w.id) != null;
            x || b(h[d === "series" ? "_chartsMap" : "_componentsMap"][w.__viewId]);
          }, h);
          function b(w) {
            w && w.__alive && w[c] && w[c](w.__model, p, h._api, v);
          }
        }, Wr = {
          prepareAndUpdate: function(h) {
            Di(this), Wr.update.call(this, h, {
              // Needs to mark option changed if newOption is given.
              // It's from MagicType.
              // TODO If use a separate flag optionChanged in payload?
              optionChanged: h.newOption != null
            });
          },
          update: function(h, c) {
            var v = this._model, d = this._api, g = this._zr, p = this._coordSysMgr, y = this._scheduler;
            if (v) {
              v.setUpdatePayload(h), y.restoreData(v, h), y.performSeriesTasks(v), p.create(v, d), y.performDataProcessorTasks(v, h), oh(this, v), p.update(v, d), e(v), y.performVisualTasks(v, h), lh(this, v, d, h, c);
              var m = v.get("backgroundColor") || "transparent", _ = v.get("darkMode");
              g.setBackgroundColor(m), _ != null && _ !== "auto" && g.setDarkMode(_), qe.trigger("afterupdate", v, d);
            }
          },
          updateTransform: function(h) {
            var c = this, v = this._model, d = this._api;
            if (v) {
              v.setUpdatePayload(h);
              var g = [];
              v.eachComponent(function(y, m) {
                if (y !== "series") {
                  var _ = c.getViewOfComponentModel(m);
                  if (_ && _.__alive)
                    if (_.updateTransform) {
                      var S = _.updateTransform(m, v, d, h);
                      S && S.update && g.push(_);
                    } else
                      g.push(_);
                }
              });
              var p = J();
              v.eachSeries(function(y) {
                var m = c._chartsMap[y.__viewId];
                if (m.updateTransform) {
                  var _ = m.updateTransform(y, v, d, h);
                  _ && _.update && p.set(y.uid, 1);
                } else
                  p.set(y.uid, 1);
              }), e(v), this._scheduler.performVisualTasks(v, h, {
                setDirty: !0,
                dirtyMap: p
              }), Zs(this, v, d, h, {}, p), qe.trigger("afterupdate", v, d);
            }
          },
          updateView: function(h) {
            var c = this._model;
            c && (c.setUpdatePayload(h), re.markUpdateMethod(h, "updateView"), e(c), this._scheduler.performVisualTasks(c, h, {
              setDirty: !0
            }), lh(this, c, this._api, h, {}), qe.trigger("afterupdate", c, this._api));
          },
          updateVisual: function(h) {
            var c = this, v = this._model;
            v && (v.setUpdatePayload(h), v.eachSeries(function(d) {
              d.getData().clearAllVisual();
            }), re.markUpdateMethod(h, "updateVisual"), e(v), this._scheduler.performVisualTasks(v, h, {
              visualType: "visual",
              setDirty: !0
            }), v.eachComponent(function(d, g) {
              if (d !== "series") {
                var p = c.getViewOfComponentModel(g);
                p && p.__alive && p.updateVisual(g, v, c._api, h);
              }
            }), v.eachSeries(function(d) {
              var g = c._chartsMap[d.__viewId];
              g.updateVisual(d, v, c._api, h);
            }), qe.trigger("afterupdate", v, this._api));
          },
          updateLayout: function(h) {
            Wr.update.call(this, h);
          }
        }, ah = function(h, c, v, d) {
          if (h._disposed) {
            _e(h.id);
            return;
          }
          for (var g = h._model, p = h._coordSysMgr.getCoordinateSystems(), y, m = Cu(g, v), _ = 0; _ < p.length; _++) {
            var S = p[_];
            if (S[c] && (y = S[c](g, m, d)) != null)
              return y;
          }
          Vt("No coordinate system that supports " + c + " found by the given finder.");
        }, oh = function(h, c) {
          var v = h._chartsMap, d = h._scheduler;
          c.eachSeries(function(g) {
            d.updateStreamModes(g, v[g.__viewId]);
          });
        }, sh = function(h, c) {
          var v = this, d = this.getModel(), g = h.type, p = h.escapeConnect, y = Ks[g], m = y.actionInfo, _ = (m.update || "update").split(":"), S = _.pop(), b = _[0] != null && rr(_[0]);
          this[qt] = !0;
          var w = [h], x = !1;
          h.batch && (x = !0, w = V(h.batch, function(I) {
            return I = lt(O({}, I), h), I.batch = null, I;
          }));
          var T = [], D, A = Ku(h), C = Bd(h);
          if (C && Rd(this._api), M(w, function(I) {
            if (D = y.action(I, v._model, v._api), D = D || O({}, I), D.type = m.event || D.type, T.push(D), C) {
              var R = Du(h), E = R.queryOptionMap, Y = R.mainTypeSpecified, B = Y ? E.keys()[0] : "series";
              qs(v, S, I, B), Ne(v);
            } else
              A ? (qs(v, S, I, "series"), Ne(v)) : b && qs(v, S, I, b.main, b.sub);
          }), S !== "none" && !C && !A && !b)
            try {
              this[he] ? (Di(this), Wr.update.call(this, h), this[he] = null) : Wr[S].call(this, h);
            } catch (I) {
              throw this[qt] = !1, I;
            }
          if (x ? D = {
            type: m.event || g,
            escapeConnect: p,
            batch: T
          } : D = T[0], this[qt] = !1, !c) {
            var L = this._messageCenter;
            if (L.trigger(D.type, D), A) {
              var P = {
                type: "selectchanged",
                escapeConnect: p,
                selected: Nw(d),
                isFromClick: h.isFromClick || !1,
                fromAction: h.type,
                fromActionPayload: h
              };
              L.trigger(P.type, P);
            }
          }
        }, za = function(h) {
          for (var c = this._pendingActions; c.length; ) {
            var v = c.shift();
            sh.call(this, v, h);
          }
        }, Ga = function(h) {
          !h && this.trigger("updated");
        }, Ay = function(h, c) {
          h.on("rendered", function(v) {
            c.trigger("rendered", v), // Although zr is dirty if initial animation is not finished
            // and this checking is called on frame, we also check
            // animation finished for robustness.
            h.animation.isFinished() && !c[he] && !c._scheduler.unfinished && !c._pendingActions.length && c.trigger("finished");
          });
        }, Ly = function(h, c) {
          h.on("mouseover", function(v) {
            var d = v.target, g = Na(d, vi);
            g && (kw(g, v, c._api), Ne(c));
          }).on("mouseout", function(v) {
            var d = v.target, g = Na(d, vi);
            g && (Ow(g, v, c._api), Ne(c));
          }).on("click", function(v) {
            var d = v.target, g = Na(d, function(m) {
              return st(m).dataIndex != null;
            }, !0);
            if (g) {
              var p = g.selected ? "unselect" : "select", y = st(g);
              c._api.dispatchAction({
                type: p,
                dataType: y.dataType,
                dataIndexInside: y.dataIndex,
                seriesIndex: y.seriesIndex,
                isFromClick: !0
              });
            }
          });
        };
        function e(h) {
          h.clearColorPalette(), h.eachSeries(function(c) {
            c.clearColorPalette();
          });
        }
        function n(h) {
          var c = [], v = [], d = !1;
          if (h.eachComponent(function(m, _) {
            var S = _.get("zlevel") || 0, b = _.get("z") || 0, w = _.getZLevelKey();
            d = d || !!w, (m === "series" ? v : c).push({
              zlevel: S,
              z: b,
              idx: _.componentIndex,
              type: m,
              key: w
            });
          }), d) {
            var g = c.concat(v), p, y;
            co(g, function(m, _) {
              return m.zlevel === _.zlevel ? m.z - _.z : m.zlevel - _.zlevel;
            }), M(g, function(m) {
              var _ = h.getComponent(m.type, m.idx), S = m.zlevel, b = m.key;
              p != null && (S = Math.max(p, S)), b ? (S === p && b !== y && S++, y = b) : y && (S === p && S++, y = ""), p = S, _.setZLevel(S);
            });
          }
        }
        lh = function(h, c, v, d, g) {
          n(c), Py(h, c, v, d, g), M(h._chartsViews, function(p) {
            p.__alive = !1;
          }), Zs(h, c, v, d, g), M(h._chartsViews, function(p) {
            p.__alive || p.remove(c, v);
          });
        }, Py = function(h, c, v, d, g, p) {
          M(p || h._componentsViews, function(y) {
            var m = y.__model;
            u(m, y), y.render(m, c, v, d), s(m, y), f(m, y);
          });
        }, Zs = function(h, c, v, d, g, p) {
          var y = h._scheduler;
          g = O(g || {}, {
            updatedSeries: c.getSeries()
          }), qe.trigger("series:beforeupdate", c, v, g);
          var m = !1;
          c.eachSeries(function(_) {
            var S = h._chartsMap[_.__viewId];
            S.__alive = !0;
            var b = S.renderTask;
            y.updatePayload(b, d), u(_, S), p && p.get(_.uid) && b.dirty(), b.perform(y.getPerformArgs(b)) && (m = !0), S.group.silent = !!_.get("silent"), o(_, S), Ed(_);
          }), y.unfinished = m || y.unfinished, qe.trigger("series:layoutlabels", c, v, g), qe.trigger("series:transition", c, v, g), c.eachSeries(function(_) {
            var S = h._chartsMap[_.__viewId];
            s(_, S), f(_, S);
          }), a(h, c), qe.trigger("series:afterupdate", c, v, g);
        }, Ne = function(h) {
          h[rh] = !0, h.getZr().wakeUp();
        }, Ey = function(h) {
          h[rh] && (h.getZr().storage.traverse(function(c) {
            gi(c) || i(c);
          }), h[rh] = !1);
        };
        function i(h) {
          for (var c = [], v = h.currentStates, d = 0; d < v.length; d++) {
            var g = v[d];
            g === "emphasis" || g === "blur" || g === "select" || c.push(g);
          }
          h.selected && h.states.select && c.push("select"), h.hoverState === Yo && h.states.emphasis ? c.push("emphasis") : h.hoverState === Uo && h.states.blur && c.push("blur"), h.useStates(c);
        }
        function a(h, c) {
          var v = h._zr, d = v.storage, g = 0;
          d.traverse(function(p) {
            p.isGroup || g++;
          }), g > c.get("hoverLayerThreshold") && !z.node && !z.worker && c.eachSeries(function(p) {
            if (!p.preventUsingHoverLayer) {
              var y = h._chartsMap[p.__viewId];
              y.__alive && y.eachRendered(function(m) {
                m.states.emphasis && (m.states.emphasis.hoverLayer = !0);
              });
            }
          });
        }
        function o(h, c) {
          var v = h.get("blendMode") || null;
          c.eachRendered(function(d) {
            d.isGroup || (d.style.blend = v);
          });
        }
        function s(h, c) {
          if (!h.preventAutoZ) {
            var v = h.get("z") || 0, d = h.get("zlevel") || 0;
            c.eachRendered(function(g) {
              return l(g, v, d, -1 / 0), !0;
            });
          }
        }
        function l(h, c, v, d) {
          var g = h.getTextContent(), p = h.getTextGuideLine(), y = h.isGroup;
          if (y)
            for (var m = h.childrenRef(), _ = 0; _ < m.length; _++)
              d = Math.max(l(m[_], c, v, d), d);
          else
            h.z = c, h.zlevel = v, d = Math.max(h.z2, d);
          if (g && (g.z = c, g.zlevel = v, isFinite(d) && (g.z2 = d + 2)), p) {
            var S = h.textGuideLineConfig;
            p.z = c, p.zlevel = v, isFinite(d) && (p.z2 = d + (S && S.showAbove ? 1 : -1));
          }
          return d;
        }
        function u(h, c) {
          c.eachRendered(function(v) {
            if (!gi(v)) {
              var d = v.getTextContent(), g = v.getTextGuideLine();
              v.stateTransition && (v.stateTransition = null), d && d.stateTransition && (d.stateTransition = null), g && g.stateTransition && (g.stateTransition = null), v.hasState() ? (v.prevStates = v.currentStates, v.clearStates()) : v.prevStates && (v.prevStates = null);
            }
          });
        }
        function f(h, c) {
          var v = h.getModel("stateAnimation"), d = h.isAnimationEnabled(), g = v.get("duration"), p = g > 0 ? {
            duration: g,
            delay: v.get("delay"),
            easing: v.get("easing")
            // additive: stateAnimationModel.get('additive')
          } : null;
          c.eachRendered(function(y) {
            if (y.states && y.states.emphasis) {
              if (gi(y))
                return;
              if (y instanceof ht && Vw(y), y.__dirty) {
                var m = y.prevStates;
                m && y.useStates(m);
              }
              if (d) {
                y.stateTransition = p;
                var _ = y.getTextContent(), S = y.getTextGuideLine();
                _ && (_.stateTransition = p), S && (S.stateTransition = p);
              }
              y.__dirty && i(y);
            }
          });
        }
        Iy = function(h) {
          return new /** @class */
          (function(c) {
            k(v, c);
            function v() {
              return c !== null && c.apply(this, arguments) || this;
            }
            return v.prototype.getCoordinateSystems = function() {
              return h._coordSysMgr.getCoordinateSystems();
            }, v.prototype.getComponentByElement = function(d) {
              for (; d; ) {
                var g = d.__ecComponentInfo;
                if (g != null)
                  return h._model.getComponent(g.mainType, g.index);
                d = d.parent;
              }
            }, v.prototype.enterEmphasis = function(d, g) {
              Ko(d, g), Ne(h);
            }, v.prototype.leaveEmphasis = function(d, g) {
              Qo(d, g), Ne(h);
            }, v.prototype.enterBlur = function(d) {
              Rw(d), Ne(h);
            }, v.prototype.leaveBlur = function(d) {
              Ad(d), Ne(h);
            }, v.prototype.enterSelect = function(d) {
              Ld(d), Ne(h);
            }, v.prototype.leaveSelect = function(d) {
              Pd(d), Ne(h);
            }, v.prototype.getModel = function() {
              return h.getModel();
            }, v.prototype.getViewOfComponentModel = function(d) {
              return h.getViewOfComponentModel(d);
            }, v.prototype.getViewOfSeriesModel = function(d) {
              return h.getViewOfSeriesModel(d);
            }, v;
          }(Xp))(h);
        }, Ry = function(h) {
          function c(v, d) {
            for (var g = 0; g < v.length; g++) {
              var p = v[g];
              p[nh] = d;
            }
          }
          M(Ha, function(v, d) {
            h._messageCenter.on(d, function(g) {
              if (js[h.group] && h[nh] !== by) {
                if (g && g.escapeConnect)
                  return;
                var p = h.makeActionFromEvent(g), y = [];
                M(Gn, function(m) {
                  m !== h && m.group === h.group && y.push(m);
                }), c(y, by), M(y, function(m) {
                  m[nh] !== IC && m.dispatchAction(p);
                }), c(y, RC);
              }
            });
          });
        };
      }(), t;
    }(je)
  ), uh = $s.prototype;
  uh.on = xy("on"), uh.off = xy("off"), uh.one = function(r, t, e) {
    var n = this;
    We("ECharts#one is deprecated.");
    function i() {
      for (var a = [], o = 0; o < arguments.length; o++)
        a[o] = arguments[o];
      t && t.apply && t.apply(this, a), n.off(r, i);
    }
    this.on.call(this, r, i, e);
  };
  var EC = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
  function _e(r) {
    Vt("Instance " + r + " has been disposed");
  }
  var Ks = {}, Ha = {}, fh = [], hh = [], Qs = [], ky = {}, vh = {}, Gn = {}, js = {}, kC = +/* @__PURE__ */ new Date() - 0, OC = +/* @__PURE__ */ new Date() - 0, ch = "_echarts_instance_";
  function BC(r, t, e) {
    var n = !(e && e.ssr);
    if (n) {
      if (!r)
        throw new Error("Initialize failed: invalid dom.");
      var i = dh(r);
      if (i)
        return Vt("There is a chart instance already initialized on the dom."), i;
      Kn(r) && r.nodeName.toUpperCase() !== "CANVAS" && (!r.clientWidth && (!e || e.width == null) || !r.clientHeight && (!e || e.height == null)) && Vt("Can't get DOM width or height. Please check dom.clientWidth and dom.clientHeight. They should not be 0.For example, you may need to call this in the callback of window.onload.");
    }
    var a = new $s(r, t, e);
    return a.id = "ec_" + kC++, Gn[a.id] = a, n && Hc(r, ch, a.id), Ry(a), qe.trigger("afterinit", a), a;
  }
  function NC(r) {
    if (F(r)) {
      var t = r;
      r = null, M(t, function(e) {
        e.group != null && (r = e.group);
      }), r = r || "g_" + OC++, M(t, function(e) {
        e.group = r;
      });
    }
    return js[r] = !0, r;
  }
  function Oy(r) {
    js[r] = !1;
  }
  var FC = Oy;
  function zC(r) {
    H(r) ? r = Gn[r] : r instanceof $s || (r = dh(r)), r instanceof $s && !r.isDisposed() && r.dispose();
  }
  function dh(r) {
    return Gn[xS(r, ch)];
  }
  function GC(r) {
    return Gn[r];
  }
  function ph(r, t) {
    ky[r] = t;
  }
  function gh(r) {
    ut(hh, r) < 0 && hh.push(r);
  }
  function yh(r, t) {
    mh(fh, r, t, TC);
  }
  function By(r) {
    Js("afterinit", r);
  }
  function Ny(r) {
    Js("afterupdate", r);
  }
  function Js(r, t) {
    qe.on(r, t);
  }
  function Hn(r, t, e) {
    X(t) && (e = t, t = "");
    var n = W(r) ? r.type : [r, r = {
      event: t
    }][0];
    r.event = (r.event || n).toLowerCase(), t = r.event, !Ha[t] && (j(wy.test(n) && wy.test(t)), Ks[n] || (Ks[n] = {
      action: e,
      actionInfo: r
    }), Ha[t] = n);
  }
  function Fy(r, t) {
    Is.register(r, t);
  }
  function HC(r) {
    var t = Is.get(r);
    if (t)
      return t.getDimensionsInfo ? t.getDimensionsInfo() : t.dimensions.slice();
  }
  function zy(r, t) {
    mh(Qs, r, t, gy, "layout");
  }
  function Ur(r, t) {
    mh(Qs, r, t, yy, "visual");
  }
  var Gy = [];
  function mh(r, t, e, n, i) {
    (X(t) || W(t)) && (e = t, t = n);
    {
      if (isNaN(t) || t == null)
        throw new Error("Illegal priority");
      M(r, function(o) {
        j(o.__raw !== e);
      });
    }
    if (!(ut(Gy, e) >= 0)) {
      Gy.push(e);
      var a = Hg.wrapStageHandler(e, i);
      a.__prio = t, a.__raw = e, r.push(a);
    }
  }
  function _h(r, t) {
    vh[r] = t;
  }
  function VC(r) {
    We("setCanvasCreator is deprecated. Use setPlatformAPI({ createCanvas }) instead."), rn({
      createCanvas: r
    });
  }
  function Hy(r, t, e) {
    var n = py("registerMap");
    n && n(r, t, e);
  }
  function WC(r) {
    var t = py("getMap");
    return t && t(r);
  }
  var Vy = Zx;
  Ur(eh, bT), Ur(Xs, xT), Ur(Xs, TT), Ur(eh, NT), Ur(Xs, FT), Ur(_y, gC), gh(Jp), yh(bC, Px), _h("default", CT), Hn({
    type: An,
    event: An,
    update: An
  }, Qt), Hn({
    type: qo,
    event: qo,
    update: qo
  }, Qt), Hn({
    type: la,
    event: la,
    update: la
  }, Qt), Hn({
    type: Zo,
    event: Zo,
    update: Zo
  }, Qt), Hn({
    type: ua,
    event: ua,
    update: ua
  }, Qt), ph("light", OT), ph("dark", Zg);
  var UC = {};
  function Va(r) {
    return r == null ? 0 : r.length || 1;
  }
  function Wy(r) {
    return r;
  }
  var YC = (
    /** @class */
    function() {
      function r(t, e, n, i, a, o) {
        this._old = t, this._new = e, this._oldKeyGetter = n || Wy, this._newKeyGetter = i || Wy, this.context = a, this._diffModeMultiple = o === "multiple";
      }
      return r.prototype.add = function(t) {
        return this._add = t, this;
      }, r.prototype.update = function(t) {
        return this._update = t, this;
      }, r.prototype.updateManyToOne = function(t) {
        return this._updateManyToOne = t, this;
      }, r.prototype.updateOneToMany = function(t) {
        return this._updateOneToMany = t, this;
      }, r.prototype.updateManyToMany = function(t) {
        return this._updateManyToMany = t, this;
      }, r.prototype.remove = function(t) {
        return this._remove = t, this;
      }, r.prototype.execute = function() {
        this[this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"]();
      }, r.prototype._executeOneToOne = function() {
        var t = this._old, e = this._new, n = {}, i = new Array(t.length), a = new Array(e.length);
        this._initIndexMap(t, null, i, "_oldKeyGetter"), this._initIndexMap(e, n, a, "_newKeyGetter");
        for (var o = 0; o < t.length; o++) {
          var s = i[o], l = n[s], u = Va(l);
          if (u > 1) {
            var f = l.shift();
            l.length === 1 && (n[s] = l[0]), this._update && this._update(f, o);
          } else
            u === 1 ? (n[s] = null, this._update && this._update(l, o)) : this._remove && this._remove(o);
        }
        this._performRestAdd(a, n);
      }, r.prototype._executeMultiple = function() {
        var t = this._old, e = this._new, n = {}, i = {}, a = [], o = [];
        this._initIndexMap(t, n, a, "_oldKeyGetter"), this._initIndexMap(e, i, o, "_newKeyGetter");
        for (var s = 0; s < a.length; s++) {
          var l = a[s], u = n[l], f = i[l], h = Va(u), c = Va(f);
          if (h > 1 && c === 1)
            this._updateManyToOne && this._updateManyToOne(f, u), i[l] = null;
          else if (h === 1 && c > 1)
            this._updateOneToMany && this._updateOneToMany(f, u), i[l] = null;
          else if (h === 1 && c === 1)
            this._update && this._update(f, u), i[l] = null;
          else if (h > 1 && c > 1)
            this._updateManyToMany && this._updateManyToMany(f, u), i[l] = null;
          else if (h > 1)
            for (var v = 0; v < h; v++)
              this._remove && this._remove(u[v]);
          else
            this._remove && this._remove(u);
        }
        this._performRestAdd(o, i);
      }, r.prototype._performRestAdd = function(t, e) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n], a = e[i], o = Va(a);
          if (o > 1)
            for (var s = 0; s < o; s++)
              this._add && this._add(a[s]);
          else
            o === 1 && this._add && this._add(a);
          e[i] = null;
        }
      }, r.prototype._initIndexMap = function(t, e, n, i) {
        for (var a = this._diffModeMultiple, o = 0; o < t.length; o++) {
          var s = "_ec_" + this[i](t[o], o);
          if (a || (n[o] = s), !!e) {
            var l = e[s], u = Va(l);
            u === 0 ? (e[s] = o, a && n.push(s)) : u === 1 ? e[s] = [l, o] : l.push(o);
          }
        }
      }, r;
    }()
  ), XC = (
    /** @class */
    function() {
      function r(t, e) {
        this._encode = t, this._schema = e;
      }
      return r.prototype.get = function() {
        return {
          // Do not generate full dimension name until fist used.
          fullDimensions: this._getFullDimensionNames(),
          encode: this._encode
        };
      }, r.prototype._getFullDimensionNames = function() {
        return this._cachedDimNames || (this._cachedDimNames = this._schema ? this._schema.makeOutputDimensionNames() : []), this._cachedDimNames;
      }, r;
    }()
  );
  function qC(r, t) {
    var e = {}, n = e.encode = {}, i = J(), a = [], o = [], s = {};
    M(r.dimensions, function(c) {
      var v = r.getDimensionInfo(c), d = v.coordDim;
      if (d) {
        j(Df.get(d) == null);
        var g = v.coordDimIndex;
        Sh(n, d)[g] = c, v.isExtraCoord || (i.set(d, 1), $C(v.type) && (a[0] = c), Sh(s, d)[g] = r.getDimensionIndex(v.name)), v.defaultTooltip && o.push(c);
      }
      Df.each(function(p, y) {
        var m = Sh(n, y), _ = v.otherDims[y];
        _ != null && _ !== !1 && (m[_] = v.name);
      });
    });
    var l = [], u = {};
    i.each(function(c, v) {
      var d = n[v];
      u[v] = d[0], l = l.concat(d);
    }), e.dataDimsOnCoord = l, e.dataDimIndicesOnCoord = V(l, function(c) {
      return r.getDimensionInfo(c).storeDimIndex;
    }), e.encodeFirstDimNotExtra = u;
    var f = n.label;
    f && f.length && (a = f.slice());
    var h = n.tooltip;
    return h && h.length ? o = h.slice() : o.length || (o = a.slice()), n.defaultedLabel = a, n.defaultedTooltip = o, e.userOutput = new XC(s, t), e;
  }
  function Sh(r, t) {
    return r.hasOwnProperty(t) || (r[t] = []), r[t];
  }
  function ZC(r) {
    return r === "category" ? "ordinal" : r === "time" ? "time" : "float";
  }
  function $C(r) {
    return !(r === "ordinal" || r === "time");
  }
  var tl = (
    /** @class */
    function() {
      function r(t) {
        this.otherDims = {}, t != null && O(this, t);
      }
      return r;
    }()
  ), KC = Tt(), QC = {
    float: "f",
    int: "i",
    ordinal: "o",
    number: "n",
    time: "t"
  }, Uy = (
    /** @class */
    function() {
      function r(t) {
        this.dimensions = t.dimensions, this._dimOmitted = t.dimensionOmitted, this.source = t.source, this._fullDimCount = t.fullDimensionCount, this._updateDimOmitted(t.dimensionOmitted);
      }
      return r.prototype.isDimensionOmitted = function() {
        return this._dimOmitted;
      }, r.prototype._updateDimOmitted = function(t) {
        this._dimOmitted = t, t && (this._dimNameMap || (this._dimNameMap = qy(this.source)));
      }, r.prototype.getSourceDimensionIndex = function(t) {
        return tt(this._dimNameMap.get(t), -1);
      }, r.prototype.getSourceDimension = function(t) {
        var e = this.source.dimensionsDefine;
        if (e)
          return e[t];
      }, r.prototype.makeStoreSchema = function() {
        for (var t = this._fullDimCount, e = ng(this.source), n = !Zy(t), i = "", a = [], o = 0, s = 0; o < t; o++) {
          var l = void 0, u = void 0, f = void 0, h = this.dimensions[s];
          if (h && h.storeDimIndex === o)
            l = e ? h.name : null, u = h.type, f = h.ordinalMeta, s++;
          else {
            var c = this.getSourceDimension(o);
            c && (l = e ? c.name : null, u = c.type);
          }
          a.push({
            property: l,
            type: u,
            ordinalMeta: f
          }), e && l != null && (!h || !h.isCalculationCoord) && (i += n ? l.replace(/\`/g, "`1").replace(/\$/g, "`2") : l), i += "$", i += QC[u] || "f", f && (i += f.uid), i += "$";
        }
        var v = this.source, d = [v.seriesLayoutBy, v.startIndex, i].join("$$");
        return {
          dimensions: a,
          hash: d
        };
      }, r.prototype.makeOutputDimensionNames = function() {
        for (var t = [], e = 0, n = 0; e < this._fullDimCount; e++) {
          var i = void 0, a = this.dimensions[n];
          if (a && a.storeDimIndex === e)
            a.isCalculationCoord || (i = a.name), n++;
          else {
            var o = this.getSourceDimension(e);
            o && (i = o.name);
          }
          t.push(i);
        }
        return t;
      }, r.prototype.appendCalculationDimension = function(t) {
        this.dimensions.push(t), t.isCalculationCoord = !0, this._fullDimCount++, this._updateDimOmitted(!0);
      }, r;
    }()
  );
  function Yy(r) {
    return r instanceof Uy;
  }
  function Xy(r) {
    for (var t = J(), e = 0; e < (r || []).length; e++) {
      var n = r[e], i = W(n) ? n.name : n;
      i != null && t.get(i) == null && t.set(i, e);
    }
    return t;
  }
  function qy(r) {
    var t = KC(r);
    return t.dimNameMap || (t.dimNameMap = Xy(r.dimensionsDefine));
  }
  function Zy(r) {
    return r > 30;
  }
  var Wa = W, Yr = V, jC = typeof Int32Array > "u" ? Array : Int32Array, JC = "e\0\0", $y = -1, tD = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"], eD = ["_approximateExtent"], Ky, el, Ua, Mi, wh, rl, bh, xh = (
    /** @class */
    function() {
      function r(t, e) {
        this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !1, this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "lttbDownSample", "map"], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = ["downSample", "lttbDownSample"];
        var n, i = !1;
        Yy(t) ? (n = t.dimensions, this._dimOmitted = t.isDimensionOmitted(), this._schema = t) : (i = !0, n = t), n = n || ["x", "y"];
        for (var a = {}, o = [], s = {}, l = !1, u = {}, f = 0; f < n.length; f++) {
          var h = n[f], c = H(h) ? new tl({
            name: h
          }) : h instanceof tl ? h : new tl(h), v = c.name;
          c.type = c.type || "float", c.coordDim || (c.coordDim = v, c.coordDimIndex = 0);
          var d = c.otherDims = c.otherDims || {};
          o.push(v), a[v] = c, u[v] != null && (l = !0), c.createInvertedIndices && (s[v] = []), d.itemName === 0 && (this._nameDimIdx = f), d.itemId === 0 && (this._idDimIdx = f), j(i || c.storeDimIndex >= 0), i && (c.storeDimIndex = f);
        }
        if (this.dimensions = o, this._dimInfos = a, this._initGetDimensionInfo(l), this.hostModel = e, this._invertedIndicesMap = s, this._dimOmitted) {
          var g = this._dimIdxToName = J();
          M(o, function(p) {
            g.set(a[p].storeDimIndex, p);
          });
        }
      }
      return r.prototype.getDimension = function(t) {
        var e = this._recognizeDimIndex(t);
        if (e == null)
          return t;
        if (e = t, !this._dimOmitted)
          return this.dimensions[e];
        var n = this._dimIdxToName.get(e);
        if (n != null)
          return n;
        var i = this._schema.getSourceDimension(e);
        if (i)
          return i.name;
      }, r.prototype.getDimensionIndex = function(t) {
        var e = this._recognizeDimIndex(t);
        if (e != null)
          return e;
        if (t == null)
          return -1;
        var n = this._getDimInfo(t);
        return n ? n.storeDimIndex : this._dimOmitted ? this._schema.getSourceDimensionIndex(t) : -1;
      }, r.prototype._recognizeDimIndex = function(t) {
        if (pt(t) || t != null && !isNaN(t) && !this._getDimInfo(t) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(t) < 0))
          return +t;
      }, r.prototype._getStoreDimIndex = function(t) {
        var e = this.getDimensionIndex(t);
        if (e == null)
          throw new Error("Unknown dimension " + t);
        return e;
      }, r.prototype.getDimensionInfo = function(t) {
        return this._getDimInfo(this.getDimension(t));
      }, r.prototype._initGetDimensionInfo = function(t) {
        var e = this._dimInfos;
        this._getDimInfo = t ? function(n) {
          return e.hasOwnProperty(n) ? e[n] : void 0;
        } : function(n) {
          return e[n];
        };
      }, r.prototype.getDimensionsOnCoord = function() {
        return this._dimSummary.dataDimsOnCoord.slice();
      }, r.prototype.mapDimension = function(t, e) {
        var n = this._dimSummary;
        if (e == null)
          return n.encodeFirstDimNotExtra[t];
        var i = n.encode[t];
        return i ? i[e] : null;
      }, r.prototype.mapDimensionsAll = function(t) {
        var e = this._dimSummary, n = e.encode[t];
        return (n || []).slice();
      }, r.prototype.getStore = function() {
        return this._store;
      }, r.prototype.initData = function(t, e, n) {
        var i = this, a;
        if (t instanceof Hf && (a = t), !a) {
          var o = this.dimensions, s = kf(t) || $t(t) ? new og(t, o.length) : t;
          a = new Hf();
          var l = Yr(o, function(u) {
            return {
              type: i._dimInfos[u].type,
              property: u
            };
          });
          a.initData(s, l, n);
        }
        this._store = a, this._nameList = (e || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, a.count()), this._dimSummary = qC(this, this._schema), this.userOutput = this._dimSummary.userOutput;
      }, r.prototype.appendData = function(t) {
        var e = this._store.appendData(t);
        this._doInit(e[0], e[1]);
      }, r.prototype.appendValues = function(t, e) {
        var n = this._store.appendValues(t, e.length), i = n.start, a = n.end, o = this._shouldMakeIdFromName();
        if (this._updateOrdinalMeta(), e)
          for (var s = i; s < a; s++) {
            var l = s - i;
            this._nameList[s] = e[l], o && bh(this, s);
          }
      }, r.prototype._updateOrdinalMeta = function() {
        for (var t = this._store, e = this.dimensions, n = 0; n < e.length; n++) {
          var i = this._dimInfos[e[n]];
          i.ordinalMeta && t.collectOrdinalMeta(i.storeDimIndex, i.ordinalMeta);
        }
      }, r.prototype._shouldMakeIdFromName = function() {
        var t = this._store.getProvider();
        return this._idDimIdx == null && t.getSource().sourceFormat !== wr && !t.fillStorage;
      }, r.prototype._doInit = function(t, e) {
        if (!(t >= e)) {
          var n = this._store, i = n.getProvider();
          this._updateOrdinalMeta();
          var a = this._nameList, o = this._idList, s = i.getSource().sourceFormat, l = s === ke;
          if (l && !i.pure)
            for (var u = [], f = t; f < e; f++) {
              var h = i.getItem(f, u);
              if (!this.hasItemOption && vS(h) && (this.hasItemOption = !0), h) {
                var c = h.name;
                a[f] == null && c != null && (a[f] = er(c, null));
                var v = h.id;
                o[f] == null && v != null && (o[f] = er(v, null));
              }
            }
          if (this._shouldMakeIdFromName())
            for (var f = t; f < e; f++)
              bh(this, f);
          Ky(this);
        }
      }, r.prototype.getApproximateExtent = function(t) {
        return this._approximateExtent[t] || this._store.getDataExtent(this._getStoreDimIndex(t));
      }, r.prototype.setApproximateExtent = function(t, e) {
        e = this.getDimension(e), this._approximateExtent[e] = t.slice();
      }, r.prototype.getCalculationInfo = function(t) {
        return this._calculationInfo[t];
      }, r.prototype.setCalculationInfo = function(t, e) {
        Wa(t) ? O(this._calculationInfo, t) : this._calculationInfo[t] = e;
      }, r.prototype.getName = function(t) {
        var e = this.getRawIndex(t), n = this._nameList[e];
        return n == null && this._nameDimIdx != null && (n = Ua(this, this._nameDimIdx, e)), n == null && (n = ""), n;
      }, r.prototype._getCategory = function(t, e) {
        var n = this._store.get(t, e), i = this._store.getOrdinalMeta(t);
        return i ? i.categories[n] : n;
      }, r.prototype.getId = function(t) {
        return el(this, this.getRawIndex(t));
      }, r.prototype.count = function() {
        return this._store.count();
      }, r.prototype.get = function(t, e) {
        var n = this._store, i = this._dimInfos[t];
        if (i)
          return n.get(i.storeDimIndex, e);
      }, r.prototype.getByRawIndex = function(t, e) {
        var n = this._store, i = this._dimInfos[t];
        if (i)
          return n.getByRawIndex(i.storeDimIndex, e);
      }, r.prototype.getIndices = function() {
        return this._store.getIndices();
      }, r.prototype.getDataExtent = function(t) {
        return this._store.getDataExtent(this._getStoreDimIndex(t));
      }, r.prototype.getSum = function(t) {
        return this._store.getSum(this._getStoreDimIndex(t));
      }, r.prototype.getMedian = function(t) {
        return this._store.getMedian(this._getStoreDimIndex(t));
      }, r.prototype.getValues = function(t, e) {
        var n = this, i = this._store;
        return F(t) ? i.getValues(Yr(t, function(a) {
          return n._getStoreDimIndex(a);
        }), e) : i.getValues(t);
      }, r.prototype.hasValue = function(t) {
        for (var e = this._dimSummary.dataDimIndicesOnCoord, n = 0, i = e.length; n < i; n++)
          if (isNaN(this._store.get(e[n], t)))
            return !1;
        return !0;
      }, r.prototype.indexOfName = function(t) {
        for (var e = 0, n = this._store.count(); e < n; e++)
          if (this.getName(e) === t)
            return e;
        return -1;
      }, r.prototype.getRawIndex = function(t) {
        return this._store.getRawIndex(t);
      }, r.prototype.indexOfRawIndex = function(t) {
        return this._store.indexOfRawIndex(t);
      }, r.prototype.rawIndexOf = function(t, e) {
        var n = t && this._invertedIndicesMap[t];
        if (!n)
          throw new Error("Do not supported yet");
        var i = n[e];
        return i == null || isNaN(i) ? $y : i;
      }, r.prototype.indicesOfNearest = function(t, e, n) {
        return this._store.indicesOfNearest(this._getStoreDimIndex(t), e, n);
      }, r.prototype.each = function(t, e, n) {
        X(t) && (n = e, e = t, t = []);
        var i = n || this, a = Yr(Mi(t), this._getStoreDimIndex, this);
        this._store.each(a, i ? gt(e, i) : e);
      }, r.prototype.filterSelf = function(t, e, n) {
        X(t) && (n = e, e = t, t = []);
        var i = n || this, a = Yr(Mi(t), this._getStoreDimIndex, this);
        return this._store = this._store.filter(a, i ? gt(e, i) : e), this;
      }, r.prototype.selectRange = function(t) {
        var e = this, n = {}, i = yt(t);
        return M(i, function(a) {
          var o = e._getStoreDimIndex(a);
          n[o] = t[a];
        }), this._store = this._store.selectRange(n), this;
      }, r.prototype.mapArray = function(t, e, n) {
        X(t) && (n = e, e = t, t = []), n = n || this;
        var i = [];
        return this.each(t, function() {
          i.push(e && e.apply(this, arguments));
        }, n), i;
      }, r.prototype.map = function(t, e, n, i) {
        var a = n || i || this, o = Yr(Mi(t), this._getStoreDimIndex, this), s = rl(this);
        return s._store = this._store.map(o, a ? gt(e, a) : e), s;
      }, r.prototype.modify = function(t, e, n, i) {
        var a = this, o = n || i || this;
        M(Mi(t), function(l) {
          var u = a.getDimensionInfo(l);
          u.isCalculationCoord || console.error("Danger: only stack dimension can be modified");
        });
        var s = Yr(Mi(t), this._getStoreDimIndex, this);
        this._store.modify(s, o ? gt(e, o) : e);
      }, r.prototype.downSample = function(t, e, n, i) {
        var a = rl(this);
        return a._store = this._store.downSample(this._getStoreDimIndex(t), e, n, i), a;
      }, r.prototype.lttbDownSample = function(t, e) {
        var n = rl(this);
        return n._store = this._store.lttbDownSample(this._getStoreDimIndex(t), e), n;
      }, r.prototype.getRawDataItem = function(t) {
        return this._store.getRawDataItem(t);
      }, r.prototype.getItemModel = function(t) {
        var e = this.hostModel, n = this.getRawDataItem(t);
        return new St(n, e, e && e.ecModel);
      }, r.prototype.diff = function(t) {
        var e = this;
        return new YC(t ? t.getStore().getIndices() : [], this.getStore().getIndices(), function(n) {
          return el(t, n);
        }, function(n) {
          return el(e, n);
        });
      }, r.prototype.getVisual = function(t) {
        var e = this._visual;
        return e && e[t];
      }, r.prototype.setVisual = function(t, e) {
        this._visual = this._visual || {}, Wa(t) ? O(this._visual, t) : this._visual[t] = e;
      }, r.prototype.getItemVisual = function(t, e) {
        var n = this._itemVisuals[t], i = n && n[e];
        return i ?? this.getVisual(e);
      }, r.prototype.hasItemVisual = function() {
        return this._itemVisuals.length > 0;
      }, r.prototype.ensureUniqueItemVisual = function(t, e) {
        var n = this._itemVisuals, i = n[t];
        i || (i = n[t] = {});
        var a = i[e];
        return a == null && (a = this.getVisual(e), F(a) ? a = a.slice() : Wa(a) && (a = O({}, a)), i[e] = a), a;
      }, r.prototype.setItemVisual = function(t, e, n) {
        var i = this._itemVisuals[t] || {};
        this._itemVisuals[t] = i, Wa(e) ? O(i, e) : i[e] = n;
      }, r.prototype.clearAllVisual = function() {
        this._visual = {}, this._itemVisuals = [];
      }, r.prototype.setLayout = function(t, e) {
        Wa(t) ? O(this._layout, t) : this._layout[t] = e;
      }, r.prototype.getLayout = function(t) {
        return this._layout[t];
      }, r.prototype.getItemLayout = function(t) {
        return this._itemLayouts[t];
      }, r.prototype.setItemLayout = function(t, e, n) {
        this._itemLayouts[t] = n ? O(this._itemLayouts[t] || {}, e) : e;
      }, r.prototype.clearItemLayouts = function() {
        this._itemLayouts.length = 0;
      }, r.prototype.setItemGraphicEl = function(t, e) {
        var n = this.hostModel && this.hostModel.seriesIndex;
        bw(n, this.dataType, t, e), this._graphicEls[t] = e;
      }, r.prototype.getItemGraphicEl = function(t) {
        return this._graphicEls[t];
      }, r.prototype.eachItemGraphicEl = function(t, e) {
        M(this._graphicEls, function(n, i) {
          n && t && t.call(e, n, i);
        });
      }, r.prototype.cloneShallow = function(t) {
        return t || (t = new r(this._schema ? this._schema : Yr(this.dimensions, this._getDimInfo, this), this.hostModel)), wh(t, this), t._store = this._store, t;
      }, r.prototype.wrapMethod = function(t, e) {
        var n = this[t];
        X(n) && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {
          var i = n.apply(this, arguments);
          return e.apply(this, [i].concat(io(arguments)));
        });
      }, r.internalField = function() {
        Ky = function(t) {
          var e = t._invertedIndicesMap;
          M(e, function(n, i) {
            var a = t._dimInfos[i], o = a.ordinalMeta, s = t._store;
            if (o) {
              n = e[i] = new jC(o.categories.length);
              for (var l = 0; l < n.length; l++)
                n[l] = $y;
              for (var l = 0; l < s.count(); l++)
                n[s.get(a.storeDimIndex, l)] = l;
            }
          });
        }, Ua = function(t, e, n) {
          return er(t._getCategory(e, n), null);
        }, el = function(t, e) {
          var n = t._idList[e];
          return n == null && t._idDimIdx != null && (n = Ua(t, t._idDimIdx, e)), n == null && (n = JC + e), n;
        }, Mi = function(t) {
          return F(t) || (t = t != null ? [t] : []), t;
        }, rl = function(t) {
          var e = new r(t._schema ? t._schema : Yr(t.dimensions, t._getDimInfo, t), t.hostModel);
          return wh(e, t), e;
        }, wh = function(t, e) {
          M(tD.concat(e.__wrappedMethods || []), function(n) {
            e.hasOwnProperty(n) && (t[n] = e[n]);
          }), t.__wrappedMethods = e.__wrappedMethods, M(eD, function(n) {
            t[n] = nt(e[n]);
          }), t._calculationInfo = O({}, e._calculationInfo);
        }, bh = function(t, e) {
          var n = t._nameList, i = t._idList, a = t._nameDimIdx, o = t._idDimIdx, s = n[e], l = i[e];
          if (s == null && a != null && (n[e] = s = Ua(t, a, e)), l == null && o != null && (i[e] = l = Ua(t, o, e)), l == null && s != null) {
            var u = t._nameRepeatCount, f = u[s] = (u[s] || 0) + 1;
            l = s, f > 1 && (l += "__ec__" + f), i[e] = l;
          }
        };
      }(), r;
    }()
  );
  function rD(r, t) {
    return Th(r, t).dimensions;
  }
  function Th(r, t) {
    kf(r) || (r = Bf(r)), t = t || {};
    var e = t.coordDimensions || [], n = t.dimensionsDefine || r.dimensionsDefine || [], i = J(), a = [], o = iD(r, e, n, t.dimensionsCount), s = t.canOmitUnusedDimensions && Zy(o), l = n === r.dimensionsDefine, u = l ? qy(r) : Xy(n), f = t.encodeDefine;
    !f && t.encodeDefaulter && (f = t.encodeDefaulter(r, o));
    for (var h = J(f), c = new pg(o), v = 0; v < c.length; v++)
      c[v] = -1;
    function d(D) {
      var A = c[D];
      if (A < 0) {
        var C = n[D], L = W(C) ? C : {
          name: C
        }, P = new tl(), I = L.name;
        I != null && u.get(I) != null && (P.name = P.displayName = I), L.type != null && (P.type = L.type), L.displayName != null && (P.displayName = L.displayName);
        var R = a.length;
        return c[D] = R, P.storeDimIndex = D, a.push(P), P;
      }
      return a[A];
    }
    if (!s)
      for (var v = 0; v < o; v++)
        d(v);
    h.each(function(D, A) {
      var C = Jt(D).slice();
      if (C.length === 1 && !H(C[0]) && C[0] < 0) {
        h.set(A, !1);
        return;
      }
      var L = h.set(A, []);
      M(C, function(P, I) {
        var R = H(P) ? u.get(P) : P;
        R != null && R < o && (L[I] = R, p(d(R), A, I));
      });
    });
    var g = 0;
    M(e, function(D) {
      var A, C, L, P;
      if (H(D))
        A = D, P = {};
      else {
        P = D, A = P.name;
        var I = P.ordinalMeta;
        P.ordinalMeta = null, P = O({}, P), P.ordinalMeta = I, C = P.dimsDef, L = P.otherDims, P.name = P.coordDim = P.coordDimIndex = P.dimsDef = P.otherDims = null;
      }
      var R = h.get(A);
      if (R !== !1) {
        if (R = Jt(R), !R.length)
          for (var E = 0; E < (C && C.length || 1); E++) {
            for (; g < o && d(g).coordDim != null; )
              g++;
            g < o && R.push(g++);
          }
        M(R, function(Y, B) {
          var N = d(Y);
          if (l && P.type != null && (N.type = P.type), p(lt(N, P), A, B), N.name == null && C) {
            var U = C[B];
            !W(U) && (U = {
              name: U
            }), N.name = N.displayName = U.name, N.defaultTooltip = U.defaultTooltip;
          }
          L && lt(N.otherDims, L);
        });
      }
    });
    function p(D, A, C) {
      Df.get(A) != null ? D.otherDims[A] = C : (D.coordDim = A, D.coordDimIndex = C, i.set(A, !0));
    }
    var y = t.generateCoord, m = t.generateCoordCount, _ = m != null;
    m = y ? m || 1 : 0;
    var S = y || "value";
    function b(D) {
      D.name == null && (D.name = D.coordDim);
    }
    if (s)
      M(a, function(D) {
        b(D);
      }), a.sort(function(D, A) {
        return D.storeDimIndex - A.storeDimIndex;
      });
    else
      for (var w = 0; w < o; w++) {
        var x = d(w), T = x.coordDim;
        T == null && (x.coordDim = aD(S, i, _), x.coordDimIndex = 0, (!y || m <= 0) && (x.isExtraCoord = !0), m--), b(x), x.type == null && (Fp(r, w) === zt.Must || x.isExtraCoord && (x.otherDims.itemName != null || x.otherDims.seriesName != null)) && (x.type = "ordinal");
      }
    return nD(a), new Uy({
      source: r,
      dimensions: a,
      fullDimensionCount: o,
      dimensionOmitted: s
    });
  }
  function nD(r) {
    for (var t = J(), e = 0; e < r.length; e++) {
      var n = r[e], i = n.name, a = t.get(i) || 0;
      a > 0 && (n.name = i + (a - 1)), a++, t.set(i, a);
    }
  }
  function iD(r, t, e, n) {
    var i = Math.max(r.dimensionsDetectedCount || 1, t.length, e.length, n || 0);
    return M(t, function(a) {
      var o;
      W(a) && (o = a.dimsDef) && (i = Math.max(i, o.length));
    }), i;
  }
  function aD(r, t, e) {
    if (e || t.hasKey(r)) {
      for (var n = 0; t.hasKey(r + n); )
        n++;
      r += n;
    }
    return t.set(r, !0), r;
  }
  var oD = (
    /** @class */
    function() {
      function r(t) {
        this.coordSysDims = [], this.axisMap = J(), this.categoryAxisMap = J(), this.coordSysName = t;
      }
      return r;
    }()
  );
  function sD(r) {
    var t = r.get("coordinateSystem"), e = new oD(t), n = lD[t];
    if (n)
      return n(r, e, e.axisMap, e.categoryAxisMap), e;
  }
  var lD = {
    cartesian2d: function(r, t, e, n) {
      var i = r.getReferringComponents("xAxis", Ue).models[0], a = r.getReferringComponents("yAxis", Ue).models[0];
      {
        if (!i)
          throw new Error('xAxis "' + Mr(r.get("xAxisIndex"), r.get("xAxisId"), 0) + '" not found');
        if (!a)
          throw new Error('yAxis "' + Mr(r.get("xAxisIndex"), r.get("yAxisId"), 0) + '" not found');
      }
      t.coordSysDims = ["x", "y"], e.set("x", i), e.set("y", a), Ai(i) && (n.set("x", i), t.firstCategoryDimIndex = 0), Ai(a) && (n.set("y", a), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
    },
    singleAxis: function(r, t, e, n) {
      var i = r.getReferringComponents("singleAxis", Ue).models[0];
      if (!i)
        throw new Error("singleAxis should be specified.");
      t.coordSysDims = ["single"], e.set("single", i), Ai(i) && (n.set("single", i), t.firstCategoryDimIndex = 0);
    },
    polar: function(r, t, e, n) {
      var i = r.getReferringComponents("polar", Ue).models[0], a = i.findAxisModel("radiusAxis"), o = i.findAxisModel("angleAxis");
      {
        if (!o)
          throw new Error("angleAxis option not found");
        if (!a)
          throw new Error("radiusAxis option not found");
      }
      t.coordSysDims = ["radius", "angle"], e.set("radius", a), e.set("angle", o), Ai(a) && (n.set("radius", a), t.firstCategoryDimIndex = 0), Ai(o) && (n.set("angle", o), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
    },
    geo: function(r, t, e, n) {
      t.coordSysDims = ["lng", "lat"];
    },
    parallel: function(r, t, e, n) {
      var i = r.ecModel, a = i.getComponent("parallel", r.get("parallelIndex")), o = t.coordSysDims = a.dimensions.slice();
      M(a.parallelAxisIndex, function(s, l) {
        var u = i.getComponent("parallelAxis", s), f = o[l];
        e.set(f, u), Ai(u) && (n.set(f, u), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = l));
      });
    }
  };
  function Ai(r) {
    return r.get("type") === "category";
  }
  function Qy(r, t, e) {
    e = e || {};
    var n = e.byIndex, i = e.stackedCoordDimension, a, o, s;
    uD(t) ? a = t : (o = t.schema, a = o.dimensions, s = t.store);
    var l = !!(r && r.get("stack")), u, f, h, c;
    if (M(a, function(m, _) {
      H(m) && (a[_] = m = {
        name: m
      }), l && !m.isExtraCoord && (!n && !u && m.ordinalMeta && (u = m), !f && m.type !== "ordinal" && m.type !== "time" && (!i || i === m.coordDim) && (f = m));
    }), f && !n && !u && (n = !0), f) {
      h = "__\0ecstackresult_" + r.id, c = "__\0ecstackedover_" + r.id, u && (u.createInvertedIndices = !0);
      var v = f.coordDim, d = f.type, g = 0;
      M(a, function(m) {
        m.coordDim === v && g++;
      });
      var p = {
        name: h,
        coordDim: v,
        coordDimIndex: g,
        type: d,
        isExtraCoord: !0,
        isCalculationCoord: !0,
        storeDimIndex: a.length
      }, y = {
        name: c,
        // This dimension contains stack base (generally, 0), so do not set it as
        // `stackedDimCoordDim` to avoid extent calculation, consider log scale.
        coordDim: c,
        coordDimIndex: g + 1,
        type: d,
        isExtraCoord: !0,
        isCalculationCoord: !0,
        storeDimIndex: a.length + 1
      };
      o ? (s && (p.storeDimIndex = s.ensureCalculationDimension(c, d), y.storeDimIndex = s.ensureCalculationDimension(h, d)), o.appendCalculationDimension(p), o.appendCalculationDimension(y)) : (a.push(p), a.push(y));
    }
    return {
      stackedDimension: f && f.name,
      stackedByDimension: u && u.name,
      isStackedByIndex: n,
      stackedOverDimension: c,
      stackResultDimension: h
    };
  }
  function uD(r) {
    return !Yy(r.schema);
  }
  function Vn(r, t) {
    return !!t && t === r.getCalculationInfo("stackedDimension");
  }
  function jy(r, t) {
    return Vn(r, t) ? r.getCalculationInfo("stackResultDimension") : t;
  }
  function fD(r, t) {
    var e = r.get("coordinateSystem"), n = Is.get(e), i;
    return t && t.coordSysDims && (i = V(t.coordSysDims, function(a) {
      var o = {
        name: a
      }, s = t.axisMap.get(a);
      if (s) {
        var l = s.get("type");
        o.type = ZC(l);
      }
      return o;
    })), i || (i = n && (n.getDimensionsInfo ? n.getDimensionsInfo() : n.dimensions.slice()) || ["x", "y"]), i;
  }
  function hD(r, t, e) {
    var n, i;
    return e && M(r, function(a, o) {
      var s = a.coordDim, l = e.categoryAxisMap.get(s);
      l && (n == null && (n = o), a.ordinalMeta = l.getOrdinalMeta(), t && (a.createInvertedIndices = !0)), a.otherDims.itemName != null && (i = !0);
    }), !i && n != null && (r[n].otherDims.itemName = 0), n;
  }
  function nl(r, t, e) {
    e = e || {};
    var n = t.getSourceManager(), i, a = !1;
    r ? (a = !0, i = Bf(r)) : (i = n.getSource(), a = i.sourceFormat === ke);
    var o = sD(t), s = fD(t, o), l = e.useEncodeDefaulter, u = X(l) ? l : l ? xt(rx, s, t) : null, f = {
      coordDimensions: s,
      generateCoord: e.generateCoord,
      encodeDefine: t.getEncode(),
      encodeDefaulter: u,
      canOmitUnusedDimensions: !a
    }, h = Th(i, f), c = hD(h.dimensions, e.createInvertedIndices, o), v = a ? null : n.getSharedDataStore(h), d = Qy(t, {
      schema: h,
      store: v
    }), g = new xh(h, t);
    g.setCalculationInfo(d);
    var p = c != null && vD(i) ? function(y, m, _, S) {
      return S === c ? _ : this.defaultDimValueGetter(y, m, _, S);
    } : null;
    return g.hasItemOption = !1, g.initData(
      // Try to reuse the data store in sourceManager if using dataset.
      a ? i : v,
      null,
      p
    ), g;
  }
  function vD(r) {
    if (r.sourceFormat === ke) {
      var t = cD(r.data || []);
      return !F(ea(t));
    }
  }
  function cD(r) {
    for (var t = 0; t < r.length && r[t] == null; )
      t++;
    return r[t];
  }
  var ur = (
    /** @class */
    function() {
      function r(t) {
        this._setting = t || {}, this._extent = [1 / 0, -1 / 0];
      }
      return r.prototype.getSetting = function(t) {
        return this._setting[t];
      }, r.prototype.unionExtent = function(t) {
        var e = this._extent;
        t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
      }, r.prototype.unionExtentFromData = function(t, e) {
        this.unionExtent(t.getApproximateExtent(e));
      }, r.prototype.getExtent = function() {
        return this._extent.slice();
      }, r.prototype.setExtent = function(t, e) {
        var n = this._extent;
        isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e);
      }, r.prototype.isInExtentRange = function(t) {
        return this._extent[0] <= t && this._extent[1] >= t;
      }, r.prototype.isBlank = function() {
        return this._isBlank;
      }, r.prototype.setBlank = function(t) {
        this._isBlank = t;
      }, r;
    }()
  );
  No(ur);
  var dD = 0, Ch = (
    /** @class */
    function() {
      function r(t) {
        this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this.uid = ++dD;
      }
      return r.createByAxisModel = function(t) {
        var e = t.option, n = e.data, i = n && V(n, pD);
        return new r({
          categories: i,
          needCollect: !i,
          // deduplication is default in axis.
          deduplication: e.dedplication !== !1
        });
      }, r.prototype.getOrdinal = function(t) {
        return this._getOrCreateMap().get(t);
      }, r.prototype.parseAndCollect = function(t) {
        var e, n = this._needCollect;
        if (!H(t) && !n)
          return t;
        if (n && !this._deduplication)
          return e = this.categories.length, this.categories[e] = t, e;
        var i = this._getOrCreateMap();
        return e = i.get(t), e == null && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e)) : e = NaN), e;
      }, r.prototype._getOrCreateMap = function() {
        return this._map || (this._map = J(this.categories));
      }, r;
    }()
  );
  function pD(r) {
    return W(r) && r.value != null ? r.value : r + "";
  }
  function gD(r) {
    var t = Math.pow(10, Ji(Math.abs(r))), e = Math.abs(r / t);
    return e === 0 || e === 1 || e === 2 || e === 3 || e === 5;
  }
  function Dh(r) {
    return r.type === "interval" || r.type === "log";
  }
  function yD(r, t, e, n) {
    var i = {}, a = r[1] - r[0], o = i.interval = wu(a / t, !0);
    e != null && o < e && (o = i.interval = e), n != null && o > n && (o = i.interval = n);
    var s = i.intervalPrecision = Jy(o), l = i.niceTickExtent = [Mt(Math.ceil(r[0] / o) * o, s), Mt(Math.floor(r[1] / o) * o, s)];
    return mD(l, r), i;
  }
  function Mh(r) {
    var t = Math.pow(10, Ji(r)), e = r / t;
    return e ? e === 2 ? e = 3 : e === 3 ? e = 5 : e *= 2 : e = 1, Mt(e * t);
  }
  function Jy(r) {
    return tr(r) + 2;
  }
  function tm(r, t, e) {
    r[t] = Math.max(Math.min(r[t], e[1]), e[0]);
  }
  function mD(r, t) {
    !isFinite(r[0]) && (r[0] = t[0]), !isFinite(r[1]) && (r[1] = t[1]), tm(r, 0, t), tm(r, 1, t), r[0] > r[1] && (r[0] = r[1]);
  }
  function il(r, t) {
    return r >= t[0] && r <= t[1];
  }
  function al(r, t) {
    return t[1] === t[0] ? 0.5 : (r - t[0]) / (t[1] - t[0]);
  }
  function ol(r, t) {
    return r * (t[1] - t[0]) + t[0];
  }
  var Ah = (
    /** @class */
    function(r) {
      k(t, r);
      function t(e) {
        var n = r.call(this, e) || this;
        n.type = "ordinal";
        var i = n.getSetting("ordinalMeta");
        return i || (i = new Ch({})), F(i) && (i = new Ch({
          categories: V(i, function(a) {
            return W(a) ? a.value : a;
          })
        })), n._ordinalMeta = i, n._extent = n.getSetting("extent") || [0, i.categories.length - 1], n;
      }
      return t.prototype.parse = function(e) {
        return e == null ? NaN : H(e) ? this._ordinalMeta.getOrdinal(e) : Math.round(e);
      }, t.prototype.contain = function(e) {
        return e = this.parse(e), il(e, this._extent) && this._ordinalMeta.categories[e] != null;
      }, t.prototype.normalize = function(e) {
        return e = this._getTickNumber(this.parse(e)), al(e, this._extent);
      }, t.prototype.scale = function(e) {
        return e = Math.round(ol(e, this._extent)), this.getRawOrdinalNumber(e);
      }, t.prototype.getTicks = function() {
        for (var e = [], n = this._extent, i = n[0]; i <= n[1]; )
          e.push({
            value: i
          }), i++;
        return e;
      }, t.prototype.getMinorTicks = function(e) {
      }, t.prototype.setSortInfo = function(e) {
        if (e == null) {
          this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null;
          return;
        }
        for (var n = e.ordinalNumbers, i = this._ordinalNumbersByTick = [], a = this._ticksByOrdinalNumber = [], o = 0, s = this._ordinalMeta.categories.length, l = Math.min(s, n.length); o < l; ++o) {
          var u = n[o];
          i[o] = u, a[u] = o;
        }
        for (var f = 0; o < s; ++o) {
          for (; a[f] != null; )
            f++;
          i.push(f), a[f] = o;
        }
      }, t.prototype._getTickNumber = function(e) {
        var n = this._ticksByOrdinalNumber;
        return n && e >= 0 && e < n.length ? n[e] : e;
      }, t.prototype.getRawOrdinalNumber = function(e) {
        var n = this._ordinalNumbersByTick;
        return n && e >= 0 && e < n.length ? n[e] : e;
      }, t.prototype.getLabel = function(e) {
        if (!this.isBlank()) {
          var n = this.getRawOrdinalNumber(e.value), i = this._ordinalMeta.categories[n];
          return i == null ? "" : i + "";
        }
      }, t.prototype.count = function() {
        return this._extent[1] - this._extent[0] + 1;
      }, t.prototype.unionExtentFromData = function(e, n) {
        this.unionExtent(e.getApproximateExtent(n));
      }, t.prototype.isInExtentRange = function(e) {
        return e = this._getTickNumber(e), this._extent[0] <= e && this._extent[1] >= e;
      }, t.prototype.getOrdinalMeta = function() {
        return this._ordinalMeta;
      }, t.prototype.calcNiceTicks = function() {
      }, t.prototype.calcNiceExtent = function() {
      }, t.type = "ordinal", t;
    }(ur)
  );
  ur.registerClass(Ah);
  var Wn = Mt, Li = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = "interval", e._interval = 0, e._intervalPrecision = 2, e;
      }
      return t.prototype.parse = function(e) {
        return e;
      }, t.prototype.contain = function(e) {
        return il(e, this._extent);
      }, t.prototype.normalize = function(e) {
        return al(e, this._extent);
      }, t.prototype.scale = function(e) {
        return ol(e, this._extent);
      }, t.prototype.setExtent = function(e, n) {
        var i = this._extent;
        isNaN(e) || (i[0] = parseFloat(e)), isNaN(n) || (i[1] = parseFloat(n));
      }, t.prototype.unionExtent = function(e) {
        var n = this._extent;
        e[0] < n[0] && (n[0] = e[0]), e[1] > n[1] && (n[1] = e[1]), this.setExtent(n[0], n[1]);
      }, t.prototype.getInterval = function() {
        return this._interval;
      }, t.prototype.setInterval = function(e) {
        this._interval = e, this._niceExtent = this._extent.slice(), this._intervalPrecision = Jy(e);
      }, t.prototype.getTicks = function(e) {
        var n = this._interval, i = this._extent, a = this._niceExtent, o = this._intervalPrecision, s = [];
        if (!n)
          return s;
        var l = 1e4;
        i[0] < a[0] && (e ? s.push({
          value: Wn(a[0] - n, o)
        }) : s.push({
          value: i[0]
        }));
        for (var u = a[0]; u <= a[1] && (s.push({
          value: u
        }), u = Wn(u + n, o), u !== s[s.length - 1].value); )
          if (s.length > l)
            return [];
        var f = s.length ? s[s.length - 1].value : a[1];
        return i[1] > f && (e ? s.push({
          value: Wn(f + n, o)
        }) : s.push({
          value: i[1]
        })), s;
      }, t.prototype.getMinorTicks = function(e) {
        for (var n = this.getTicks(!0), i = [], a = this.getExtent(), o = 1; o < n.length; o++) {
          for (var s = n[o], l = n[o - 1], u = 0, f = [], h = s.value - l.value, c = h / e; u < e - 1; ) {
            var v = Wn(l.value + (u + 1) * c);
            v > a[0] && v < a[1] && f.push(v), u++;
          }
          i.push(f);
        }
        return i;
      }, t.prototype.getLabel = function(e, n) {
        if (e == null)
          return "";
        var i = n && n.precision;
        i == null ? i = tr(e.value) || 0 : i === "auto" && (i = this._intervalPrecision);
        var a = Wn(e.value, i, !0);
        return Sf(a);
      }, t.prototype.calcNiceTicks = function(e, n, i) {
        e = e || 5;
        var a = this._extent, o = a[1] - a[0];
        if (isFinite(o)) {
          o < 0 && (o = -o, a.reverse());
          var s = yD(a, e, n, i);
          this._intervalPrecision = s.intervalPrecision, this._interval = s.interval, this._niceExtent = s.niceTickExtent;
        }
      }, t.prototype.calcNiceExtent = function(e) {
        var n = this._extent;
        if (n[0] === n[1])
          if (n[0] !== 0) {
            var i = Math.abs(n[0]);
            e.fixMax || (n[1] += i / 2), n[0] -= i / 2;
          } else
            n[1] = 1;
        var a = n[1] - n[0];
        isFinite(a) || (n[0] = 0, n[1] = 1), this.calcNiceTicks(e.splitNumber, e.minInterval, e.maxInterval);
        var o = this._interval;
        e.fixMin || (n[0] = Wn(Math.floor(n[0] / o) * o)), e.fixMax || (n[1] = Wn(Math.ceil(n[1] / o) * o));
      }, t.prototype.setNiceExtent = function(e, n) {
        this._niceExtent = [e, n];
      }, t.type = "interval", t;
    }(ur)
  );
  ur.registerClass(Li);
  var em = typeof Float32Array < "u", _D = em ? Float32Array : Array;
  function xr(r) {
    return F(r) ? em ? new Float32Array(r) : r : new _D(r);
  }
  var SD = "__ec_stack_";
  function Lh(r) {
    return r.get("stack") || SD + r.seriesIndex;
  }
  function Ph(r) {
    return r.dim + r.index;
  }
  function rm(r, t) {
    var e = [];
    return t.eachSeriesByType(r, function(n) {
      im(n) && e.push(n);
    }), e;
  }
  function wD(r) {
    var t = {};
    M(r, function(l) {
      var u = l.coordinateSystem, f = u.getBaseAxis();
      if (!(f.type !== "time" && f.type !== "value"))
        for (var h = l.getData(), c = f.dim + "_" + f.index, v = h.getDimensionIndex(h.mapDimension(f.dim)), d = h.getStore(), g = 0, p = d.count(); g < p; ++g) {
          var y = d.get(v, g);
          t[c] ? t[c].push(y) : t[c] = [y];
        }
    });
    var e = {};
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var i = t[n];
        if (i) {
          i.sort(function(l, u) {
            return l - u;
          });
          for (var a = null, o = 1; o < i.length; ++o) {
            var s = i[o] - i[o - 1];
            s > 0 && (a = a === null ? s : Math.min(a, s));
          }
          e[n] = a;
        }
      }
    return e;
  }
  function nm(r) {
    var t = wD(r), e = [];
    return M(r, function(n) {
      var i = n.coordinateSystem, a = i.getBaseAxis(), o = a.getExtent(), s;
      if (a.type === "category")
        s = a.getBandWidth();
      else if (a.type === "value" || a.type === "time") {
        var l = a.dim + "_" + a.index, u = t[l], f = Math.abs(o[1] - o[0]), h = a.scale.getExtent(), c = Math.abs(h[1] - h[0]);
        s = u ? f / c * u : f;
      } else {
        var v = n.getData();
        s = Math.abs(o[1] - o[0]) / v.count();
      }
      var d = mt(n.get("barWidth"), s), g = mt(n.get("barMaxWidth"), s), p = mt(
        // barMinWidth by default is 0.5 / 1 in cartesian. Because in value axis,
        // the auto-calculated bar width might be less than 0.5 / 1.
        n.get("barMinWidth") || (am(n) ? 0.5 : 1),
        s
      ), y = n.get("barGap"), m = n.get("barCategoryGap");
      e.push({
        bandWidth: s,
        barWidth: d,
        barMaxWidth: g,
        barMinWidth: p,
        barGap: y,
        barCategoryGap: m,
        axisKey: Ph(a),
        stackId: Lh(n)
      });
    }), bD(e);
  }
  function bD(r) {
    var t = {};
    M(r, function(n, i) {
      var a = n.axisKey, o = n.bandWidth, s = t[a] || {
        bandWidth: o,
        remainedWidth: o,
        autoWidthCount: 0,
        categoryGap: null,
        gap: "20%",
        stacks: {}
      }, l = s.stacks;
      t[a] = s;
      var u = n.stackId;
      l[u] || s.autoWidthCount++, l[u] = l[u] || {
        width: 0,
        maxWidth: 0
      };
      var f = n.barWidth;
      f && !l[u].width && (l[u].width = f, f = Math.min(s.remainedWidth, f), s.remainedWidth -= f);
      var h = n.barMaxWidth;
      h && (l[u].maxWidth = h);
      var c = n.barMinWidth;
      c && (l[u].minWidth = c);
      var v = n.barGap;
      v != null && (s.gap = v);
      var d = n.barCategoryGap;
      d != null && (s.categoryGap = d);
    });
    var e = {};
    return M(t, function(n, i) {
      e[i] = {};
      var a = n.stacks, o = n.bandWidth, s = n.categoryGap;
      if (s == null) {
        var l = yt(a).length;
        s = Math.max(35 - l * 4, 15) + "%";
      }
      var u = mt(s, o), f = mt(n.gap, 1), h = n.remainedWidth, c = n.autoWidthCount, v = (h - u) / (c + (c - 1) * f);
      v = Math.max(v, 0), M(a, function(y) {
        var m = y.maxWidth, _ = y.minWidth;
        if (y.width) {
          var S = y.width;
          m && (S = Math.min(S, m)), _ && (S = Math.max(S, _)), y.width = S, h -= S + f * S, c--;
        } else {
          var S = v;
          m && m < S && (S = Math.min(m, h)), _ && _ > S && (S = _), S !== v && (y.width = S, h -= S + f * S, c--);
        }
      }), v = (h - u) / (c + (c - 1) * f), v = Math.max(v, 0);
      var d = 0, g;
      M(a, function(y, m) {
        y.width || (y.width = v), g = y, d += y.width * (1 + f);
      }), g && (d -= g.width * f);
      var p = -d / 2;
      M(a, function(y, m) {
        e[i][m] = e[i][m] || {
          bandWidth: o,
          offset: p,
          width: y.width
        }, p += y.width * (1 + f);
      });
    }), e;
  }
  function xD(r, t, e) {
    if (r && t) {
      var n = r[Ph(t)];
      return n != null && e != null ? n[Lh(e)] : n;
    }
  }
  function TD(r, t) {
    var e = rm(r, t), n = nm(e);
    M(e, function(i) {
      var a = i.getData(), o = i.coordinateSystem, s = o.getBaseAxis(), l = Lh(i), u = n[Ph(s)][l], f = u.offset, h = u.width;
      a.setLayout({
        bandWidth: u.bandWidth,
        offset: f,
        size: h
      });
    });
  }
  function CD(r) {
    return {
      seriesType: r,
      plan: Xf(),
      reset: function(t) {
        if (im(t)) {
          var e = t.getData(), n = t.coordinateSystem, i = n.getBaseAxis(), a = n.getOtherAxis(i), o = e.getDimensionIndex(e.mapDimension(a.dim)), s = e.getDimensionIndex(e.mapDimension(i.dim)), l = t.get("showBackground", !0), u = e.mapDimension(a.dim), f = e.getCalculationInfo("stackResultDimension"), h = Vn(e, u) && !!e.getCalculationInfo("stackedOnSeries"), c = a.isHorizontal(), v = DD(i, a), d = am(t), g = t.get("barMinHeight") || 0, p = f && e.getDimensionIndex(f), y = e.getLayout("size"), m = e.getLayout("offset");
          return {
            progress: function(_, S) {
              for (var b = _.count, w = d && xr(b * 3), x = d && l && xr(b * 3), T = d && xr(b), D = n.master.getRect(), A = c ? D.width : D.height, C, L = S.getStore(), P = 0; (C = _.next()) != null; ) {
                var I = L.get(h ? p : o, C), R = L.get(s, C), E = v, Y = void 0;
                h && (Y = +I - L.get(o, C));
                var B = void 0, N = void 0, U = void 0, K = void 0;
                if (c) {
                  var $ = n.dataToPoint([I, R]);
                  if (h) {
                    var rt = n.dataToPoint([Y, R]);
                    E = rt[0];
                  }
                  B = E, N = $[1] + m, U = $[0] - E, K = y, Math.abs(U) < g && (U = (U < 0 ? -1 : 1) * g);
                } else {
                  var $ = n.dataToPoint([R, I]);
                  if (h) {
                    var rt = n.dataToPoint([R, Y]);
                    E = rt[1];
                  }
                  B = $[0] + m, N = E, U = y, K = $[1] - E, Math.abs(K) < g && (K = (K <= 0 ? -1 : 1) * g);
                }
                d ? (w[P] = B, w[P + 1] = N, w[P + 2] = c ? U : K, x && (x[P] = c ? D.x : B, x[P + 1] = c ? N : D.y, x[P + 2] = A), T[C] = C) : S.setItemLayout(C, {
                  x: B,
                  y: N,
                  width: U,
                  height: K
                }), P += 3;
              }
              d && S.setLayout({
                largePoints: w,
                largeDataIndices: T,
                largeBackgroundPoints: x,
                valueAxisHorizontal: c
              });
            }
          };
        }
      }
    };
  }
  function im(r) {
    return r.coordinateSystem && r.coordinateSystem.type === "cartesian2d";
  }
  function am(r) {
    return r.pipelineContext && r.pipelineContext.large;
  }
  function DD(r, t) {
    return t.toGlobalCoord(t.dataToCoord(t.type === "log" ? 1 : 0));
  }
  var MD = function(r, t, e, n) {
    for (; e < n; ) {
      var i = e + n >>> 1;
      r[i][1] < t ? e = i + 1 : n = i;
    }
    return e;
  }, om = (
    /** @class */
    function(r) {
      k(t, r);
      function t(e) {
        var n = r.call(this, e) || this;
        return n.type = "time", n;
      }
      return t.prototype.getLabel = function(e) {
        var n = this.getSetting("useUTC");
        return ba(e.value, bp[Ub(mi(this._minLevelUnit))] || bp.second, n, this.getSetting("locale"));
      }, t.prototype.getFormattedLabel = function(e, n, i) {
        var a = this.getSetting("useUTC"), o = this.getSetting("locale");
        return Yb(e, n, i, o, a);
      }, t.prototype.getTicks = function() {
        var e = this._interval, n = this._extent, i = [];
        if (!e)
          return i;
        i.push({
          value: n[0],
          level: 0
        });
        var a = this.getSetting("useUTC"), o = kD(this._minLevelUnit, this._approxInterval, a, n);
        return i = i.concat(o), i.push({
          value: n[1],
          level: 0
        }), i;
      }, t.prototype.calcNiceExtent = function(e) {
        var n = this._extent;
        if (n[0] === n[1] && (n[0] -= Ee, n[1] += Ee), n[1] === -1 / 0 && n[0] === 1 / 0) {
          var i = /* @__PURE__ */ new Date();
          n[1] = +new Date(i.getFullYear(), i.getMonth(), i.getDate()), n[0] = n[1] - Ee;
        }
        this.calcNiceTicks(e.splitNumber, e.minInterval, e.maxInterval);
      }, t.prototype.calcNiceTicks = function(e, n, i) {
        e = e || 10;
        var a = this._extent, o = a[1] - a[0];
        this._approxInterval = o / e, n != null && this._approxInterval < n && (this._approxInterval = n), i != null && this._approxInterval > i && (this._approxInterval = i);
        var s = sl.length, l = Math.min(MD(sl, this._approxInterval, 0, s), s - 1);
        this._interval = sl[l][1], this._minLevelUnit = sl[Math.max(l - 1, 0)][0];
      }, t.prototype.parse = function(e) {
        return pt(e) ? e : +Me(e);
      }, t.prototype.contain = function(e) {
        return il(this.parse(e), this._extent);
      }, t.prototype.normalize = function(e) {
        return al(this.parse(e), this._extent);
      }, t.prototype.scale = function(e) {
        return ol(e, this._extent);
      }, t.type = "time", t;
    }(Li)
  ), sl = [
    // Format                           interval
    ["second", gf],
    ["minute", yf],
    ["hour", Sa],
    ["quarter-day", Sa * 6],
    ["half-day", Sa * 12],
    ["day", Ee * 1.2],
    ["half-week", Ee * 3.5],
    ["week", Ee * 7],
    ["month", Ee * 31],
    ["quarter", Ee * 95],
    ["half-year", wp / 2],
    ["year", wp]
    // 1Y
  ];
  function AD(r, t, e, n) {
    var i = Me(t), a = Me(e), o = function(d) {
      return Cp(i, d, n) === Cp(a, d, n);
    }, s = function() {
      return o("year");
    }, l = function() {
      return s() && o("month");
    }, u = function() {
      return l() && o("day");
    }, f = function() {
      return u() && o("hour");
    }, h = function() {
      return f() && o("minute");
    }, c = function() {
      return h() && o("second");
    }, v = function() {
      return c() && o("millisecond");
    };
    switch (r) {
      case "year":
        return s();
      case "month":
        return l();
      case "day":
        return u();
      case "hour":
        return f();
      case "minute":
        return h();
      case "second":
        return c();
      case "millisecond":
        return v();
    }
  }
  function LD(r, t) {
    return r /= Ee, r > 16 ? 16 : r > 7.5 ? 7 : r > 3.5 ? 4 : r > 1.5 ? 2 : 1;
  }
  function PD(r) {
    var t = 30 * Ee;
    return r /= t, r > 6 ? 6 : r > 3 ? 3 : r > 2 ? 2 : 1;
  }
  function ID(r) {
    return r /= Sa, r > 12 ? 12 : r > 6 ? 6 : r > 3.5 ? 4 : r > 2 ? 2 : 1;
  }
  function sm(r, t) {
    return r /= t ? yf : gf, r > 30 ? 30 : r > 20 ? 20 : r > 15 ? 15 : r > 10 ? 10 : r > 5 ? 5 : r > 2 ? 2 : 1;
  }
  function RD(r) {
    return wu(r, !0);
  }
  function ED(r, t, e) {
    var n = new Date(r);
    switch (mi(t)) {
      case "year":
      case "month":
        n[Dp(e)](0);
      case "day":
        n[Mp(e)](1);
      case "hour":
        n[Ap(e)](0);
      case "minute":
        n[Lp(e)](0);
      case "second":
        n[Pp(e)](0), n[Ip(e)](0);
    }
    return n.getTime();
  }
  function kD(r, t, e, n) {
    var i = 1e4, a = xp, o = 0;
    function s(A, C, L, P, I, R, E) {
      for (var Y = new Date(C), B = C, N = Y[P](); B < L && B <= n[1]; )
        E.push({
          value: B
        }), N += A, Y[I](N), B = Y.getTime();
      E.push({
        value: B,
        notAdd: !0
      });
    }
    function l(A, C, L) {
      var P = [], I = !C.length;
      if (!AD(mi(A), n[0], n[1], e)) {
        I && (C = [{
          // TODO Optimize. Not include so may ticks.
          value: ED(new Date(n[0]), A, e)
        }, {
          value: n[1]
        }]);
        for (var R = 0; R < C.length - 1; R++) {
          var E = C[R].value, Y = C[R + 1].value;
          if (E !== Y) {
            var B = void 0, N = void 0, U = void 0, K = !1;
            switch (A) {
              case "year":
                B = Math.max(1, Math.round(t / Ee / 365)), N = _f(e), U = Xb(e);
                break;
              case "half-year":
              case "quarter":
              case "month":
                B = PD(t), N = _i(e), U = Dp(e);
                break;
              case "week":
              case "half-week":
              case "day":
                B = LD(t), N = bs(e), U = Mp(e), K = !0;
                break;
              case "half-day":
              case "quarter-day":
              case "hour":
                B = ID(t), N = xa(e), U = Ap(e);
                break;
              case "minute":
                B = sm(t, !0), N = xs(e), U = Lp(e);
                break;
              case "second":
                B = sm(t, !1), N = Ts(e), U = Pp(e);
                break;
              case "millisecond":
                B = RD(t), N = Cs(e), U = Ip(e);
                break;
            }
            s(B, E, Y, N, U, K, P), A === "year" && L.length > 1 && R === 0 && L.unshift({
              value: L[0].value - B
            });
          }
        }
        for (var R = 0; R < P.length; R++)
          L.push(P[R]);
        return P;
      }
    }
    for (var u = [], f = [], h = 0, c = 0, v = 0; v < a.length && o++ < i; ++v) {
      var d = mi(a[v]);
      if (Wb(a[v])) {
        l(a[v], u[u.length - 1] || [], f);
        var g = a[v + 1] ? mi(a[v + 1]) : null;
        if (d !== g) {
          if (f.length) {
            c = h, f.sort(function(A, C) {
              return A.value - C.value;
            });
            for (var p = [], y = 0; y < f.length; ++y) {
              var m = f[y].value;
              (y === 0 || f[y - 1].value !== m) && (p.push(f[y]), m >= n[0] && m <= n[1] && h++);
            }
            var _ = (n[1] - n[0]) / t;
            if (h > _ * 1.5 && c > _ / 1.5 || (u.push(p), h > _ || r === a[v]))
              break;
          }
          f = [];
        }
      }
    }
    o >= i && Vt("Exceed safe limit.");
    for (var S = Dt(V(u, function(A) {
      return Dt(A, function(C) {
        return C.value >= n[0] && C.value <= n[1] && !C.notAdd;
      });
    }), function(A) {
      return A.length > 0;
    }), b = [], w = S.length - 1, v = 0; v < S.length; ++v)
      for (var x = S[v], T = 0; T < x.length; ++T)
        b.push({
          value: x[T].value,
          level: w - v
        });
    b.sort(function(A, C) {
      return A.value - C.value;
    });
    for (var D = [], v = 0; v < b.length; ++v)
      (v === 0 || b[v].value !== b[v - 1].value) && D.push(b[v]);
    return D;
  }
  ur.registerClass(om);
  var lm = ur.prototype, Ya = Li.prototype, OD = Mt, BD = Math.floor, ND = Math.ceil, ll = Math.pow, Ze = Math.log, Ih = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = "log", e.base = 10, e._originalScale = new Li(), e._interval = 0, e;
      }
      return t.prototype.getTicks = function(e) {
        var n = this._originalScale, i = this._extent, a = n.getExtent(), o = Ya.getTicks.call(this, e);
        return V(o, function(s) {
          var l = s.value, u = Mt(ll(this.base, l));
          return u = l === i[0] && this._fixMin ? ul(u, a[0]) : u, u = l === i[1] && this._fixMax ? ul(u, a[1]) : u, {
            value: u
          };
        }, this);
      }, t.prototype.setExtent = function(e, n) {
        var i = Ze(this.base);
        e = Ze(Math.max(0, e)) / i, n = Ze(Math.max(0, n)) / i, Ya.setExtent.call(this, e, n);
      }, t.prototype.getExtent = function() {
        var e = this.base, n = lm.getExtent.call(this);
        n[0] = ll(e, n[0]), n[1] = ll(e, n[1]);
        var i = this._originalScale, a = i.getExtent();
        return this._fixMin && (n[0] = ul(n[0], a[0])), this._fixMax && (n[1] = ul(n[1], a[1])), n;
      }, t.prototype.unionExtent = function(e) {
        this._originalScale.unionExtent(e);
        var n = this.base;
        e[0] = Ze(e[0]) / Ze(n), e[1] = Ze(e[1]) / Ze(n), lm.unionExtent.call(this, e);
      }, t.prototype.unionExtentFromData = function(e, n) {
        this.unionExtent(e.getApproximateExtent(n));
      }, t.prototype.calcNiceTicks = function(e) {
        e = e || 10;
        var n = this._extent, i = n[1] - n[0];
        if (!(i === 1 / 0 || i <= 0)) {
          var a = Pc(i), o = e / i * a;
          for (o <= 0.5 && (a *= 10); !isNaN(a) && Math.abs(a) < 1 && Math.abs(a) > 0; )
            a *= 10;
          var s = [Mt(ND(n[0] / a) * a), Mt(BD(n[1] / a) * a)];
          this._interval = a, this._niceExtent = s;
        }
      }, t.prototype.calcNiceExtent = function(e) {
        Ya.calcNiceExtent.call(this, e), this._fixMin = e.fixMin, this._fixMax = e.fixMax;
      }, t.prototype.parse = function(e) {
        return e;
      }, t.prototype.contain = function(e) {
        return e = Ze(e) / Ze(this.base), il(e, this._extent);
      }, t.prototype.normalize = function(e) {
        return e = Ze(e) / Ze(this.base), al(e, this._extent);
      }, t.prototype.scale = function(e) {
        return e = ol(e, this._extent), ll(this.base, e);
      }, t.type = "log", t;
    }(ur)
  ), um = Ih.prototype;
  um.getMinorTicks = Ya.getMinorTicks, um.getLabel = Ya.getLabel;
  function ul(r, t) {
    return OD(r, tr(t));
  }
  ur.registerClass(Ih);
  var FD = (
    /** @class */
    function() {
      function r(t, e, n) {
        this._prepareParams(t, e, n);
      }
      return r.prototype._prepareParams = function(t, e, n) {
        n[1] < n[0] && (n = [NaN, NaN]), this._dataMin = n[0], this._dataMax = n[1];
        var i = this._isOrdinal = t.type === "ordinal";
        this._needCrossZero = t.type === "interval" && e.getNeedCrossZero && e.getNeedCrossZero();
        var a = this._modelMinRaw = e.get("min", !0);
        X(a) ? this._modelMinNum = fl(t, a({
          min: n[0],
          max: n[1]
        })) : a !== "dataMin" && (this._modelMinNum = fl(t, a));
        var o = this._modelMaxRaw = e.get("max", !0);
        if (X(o) ? this._modelMaxNum = fl(t, o({
          min: n[0],
          max: n[1]
        })) : o !== "dataMax" && (this._modelMaxNum = fl(t, o)), i)
          this._axisDataLen = e.getCategories().length;
        else {
          var s = e.get("boundaryGap"), l = F(s) ? s : [s || 0, s || 0];
          typeof l[0] == "boolean" || typeof l[1] == "boolean" ? (console.warn('Boolean type for boundaryGap is only allowed for ordinal axis. Please use string in percentage instead, e.g., "20%". Currently, boundaryGap is set to be 0.'), this._boundaryGapInner = [0, 0]) : this._boundaryGapInner = [Br(l[0], 1), Br(l[1], 1)];
        }
      }, r.prototype.calculate = function() {
        var t = this._isOrdinal, e = this._dataMin, n = this._dataMax, i = this._axisDataLen, a = this._boundaryGapInner, o = t ? null : n - e || Math.abs(e), s = this._modelMinRaw === "dataMin" ? e : this._modelMinNum, l = this._modelMaxRaw === "dataMax" ? n : this._modelMaxNum, u = s != null, f = l != null;
        s == null && (s = t ? i ? 0 : NaN : e - a[0] * o), l == null && (l = t ? i ? i - 1 : NaN : n + a[1] * o), (s == null || !isFinite(s)) && (s = NaN), (l == null || !isFinite(l)) && (l = NaN);
        var h = Qn(s) || Qn(l) || t && !i;
        this._needCrossZero && (s > 0 && l > 0 && !u && (s = 0), s < 0 && l < 0 && !f && (l = 0));
        var c = this._determinedMin, v = this._determinedMax;
        return c != null && (s = c, u = !0), v != null && (l = v, f = !0), {
          min: s,
          max: l,
          minFixed: u,
          maxFixed: f,
          isBlank: h
        };
      }, r.prototype.modifyDataMinMax = function(t, e) {
        j(!this.frozen), this[GD[t]] = e;
      }, r.prototype.setDeterminedMinMax = function(t, e) {
        var n = zD[t];
        j(!this.frozen && this[n] == null), this[n] = e;
      }, r.prototype.freeze = function() {
        this.frozen = !0;
      }, r;
    }()
  ), zD = {
    min: "_determinedMin",
    max: "_determinedMax"
  }, GD = {
    min: "_dataMin",
    max: "_dataMax"
  };
  function HD(r, t, e) {
    var n = r.rawExtentInfo;
    return n || (n = new FD(r, t, e), r.rawExtentInfo = n, n);
  }
  function fl(r, t) {
    return t == null ? null : Qn(t) ? NaN : r.parse(t);
  }
  function fm(r, t) {
    var e = r.type, n = HD(r, t, r.getExtent()).calculate();
    r.setBlank(n.isBlank);
    var i = n.min, a = n.max, o = t.ecModel;
    if (o && e === "time") {
      var s = rm("bar", o), l = !1;
      if (M(s, function(h) {
        l = l || h.getBaseAxis() === t.axis;
      }), l) {
        var u = nm(s), f = VD(i, a, t, u);
        i = f.min, a = f.max;
      }
    }
    return {
      extent: [i, a],
      // "fix" means "fixed", the value should not be
      // changed in the subsequent steps.
      fixMin: n.minFixed,
      fixMax: n.maxFixed
    };
  }
  function VD(r, t, e, n) {
    var i = e.axis.getExtent(), a = i[1] - i[0], o = xD(n, e.axis);
    if (o === void 0)
      return {
        min: r,
        max: t
      };
    var s = 1 / 0;
    M(o, function(v) {
      s = Math.min(v.offset, s);
    });
    var l = -1 / 0;
    M(o, function(v) {
      l = Math.max(v.offset + v.width, l);
    }), s = Math.abs(s), l = Math.abs(l);
    var u = s + l, f = t - r, h = 1 - (s + l) / a, c = f / h - f;
    return t += c * (l / u), r -= c * (s / u), {
      min: r,
      max: t
    };
  }
  function Rh(r, t) {
    var e = t, n = fm(r, e), i = n.extent, a = e.get("splitNumber");
    r instanceof Ih && (r.base = e.get("logBase"));
    var o = r.type, s = e.get("interval"), l = o === "interval" || o === "time";
    r.setExtent(i[0], i[1]), r.calcNiceExtent({
      splitNumber: a,
      fixMin: n.fixMin,
      fixMax: n.fixMax,
      minInterval: l ? e.get("minInterval") : null,
      maxInterval: l ? e.get("maxInterval") : null
    }), s != null && r.setInterval && r.setInterval(s);
  }
  function hm(r, t) {
    if (t = t || r.get("type"), t)
      switch (t) {
        case "category":
          return new Ah({
            ordinalMeta: r.getOrdinalMeta ? r.getOrdinalMeta() : r.getCategories(),
            extent: [1 / 0, -1 / 0]
          });
        case "time":
          return new om({
            locale: r.ecModel.getLocaleModel(),
            useUTC: r.ecModel.get("useUTC")
          });
        default:
          return new (ur.getClass(t) || Li)();
      }
  }
  function WD(r) {
    var t = r.scale.getExtent(), e = t[0], n = t[1];
    return !(e > 0 && n > 0 || e < 0 && n < 0);
  }
  function Xa(r) {
    var t = r.getLabelModel().get("formatter"), e = r.type === "category" ? r.scale.getExtent()[0] : null;
    return r.scale.type === "time" ? function(n) {
      return function(i, a) {
        return r.scale.getFormattedLabel(i, a, n);
      };
    }(t) : H(t) ? function(n) {
      return function(i) {
        var a = r.scale.getLabel(i), o = n.replace("{value}", a ?? "");
        return o;
      };
    }(t) : X(t) ? function(n) {
      return function(i, a) {
        return e != null && (a = i.value - e), n(Eh(r, i), a, i.level != null ? {
          level: i.level
        } : null);
      };
    }(t) : function(n) {
      return r.scale.getLabel(n);
    };
  }
  function Eh(r, t) {
    return r.type === "category" ? r.scale.getLabel(t) : t.value;
  }
  function UD(r) {
    var t = r.model, e = r.scale;
    if (!(!t.get(["axisLabel", "show"]) || e.isBlank())) {
      var n, i, a = e.getExtent();
      e instanceof Ah ? i = e.count() : (n = e.getTicks(), i = n.length);
      var o = r.getLabelModel(), s = Xa(r), l, u = 1;
      i > 40 && (u = Math.ceil(i / 40));
      for (var f = 0; f < i; f += u) {
        var h = n ? n[f] : {
          value: a[0] + f
        }, c = s(h, f), v = o.getTextRect(c), d = YD(v, o.get("rotate") || 0);
        l ? l.union(d) : l = d;
      }
      return l;
    }
  }
  function YD(r, t) {
    var e = t * Math.PI / 180, n = r.width, i = r.height, a = n * Math.abs(Math.cos(e)) + Math.abs(i * Math.sin(e)), o = n * Math.abs(Math.sin(e)) + Math.abs(i * Math.cos(e)), s = new it(r.x, r.y, a, o);
    return s;
  }
  function kh(r) {
    var t = r.get("interval");
    return t ?? "auto";
  }
  function vm(r) {
    return r.type === "category" && kh(r.getLabelModel()) === 0;
  }
  function XD(r, t) {
    var e = {};
    return M(r.mapDimensionsAll(t), function(n) {
      e[jy(r, n)] = !0;
    }), yt(e);
  }
  var cm = (
    /** @class */
    function() {
      function r() {
      }
      return r.prototype.getNeedCrossZero = function() {
        var t = this.option;
        return !t.scale;
      }, r.prototype.getCoordSysModel = function() {
      }, r;
    }()
  );
  function qD(r) {
    return nl(null, r);
  }
  var ZD = {
    isDimensionStacked: Vn,
    enableDataStack: Qy,
    getStackedDimension: jy
  };
  function $D(r, t) {
    var e = t;
    t instanceof St || (e = new St(t));
    var n = hm(e);
    return n.setExtent(r[0], r[1]), Rh(n, e), n;
  }
  function KD(r) {
    xe(r, cm);
  }
  function QD(r, t) {
    return t = t || {}, Sr(r, null, null, t.state !== "normal");
  }
  var jD = (Object.freeze || Object)({
    createList: qD,
    getLayoutRect: En,
    dataStack: ZD,
    createScale: $D,
    mixinAxisModelCommonMethods: KD,
    getECData: st,
    createTextStyle: QD,
    createDimensions: rD,
    createSymbol: Nn,
    enableHoverEmphasis: jo
  }), dm = [], JD = {
    registerPreprocessor: gh,
    registerProcessor: yh,
    registerPostInit: By,
    registerPostUpdate: Ny,
    registerUpdateLifecycle: Js,
    registerAction: Hn,
    registerCoordinateSystem: Fy,
    registerLayout: zy,
    registerVisual: Ur,
    registerTransform: Vy,
    registerLoading: _h,
    registerMap: Hy,
    registerImpl: yC,
    PRIORITY: Sy,
    ComponentModel: at,
    ComponentView: ee,
    SeriesModel: ue,
    ChartView: re,
    // TODO Use ComponentModel and SeriesModel instead of Constructor
    registerComponentModel: function(r) {
      at.registerClass(r);
    },
    registerComponentView: function(r) {
      ee.registerClass(r);
    },
    registerSeriesModel: function(r) {
      ue.registerClass(r);
    },
    registerChartView: function(r) {
      re.registerClass(r);
    },
    registerSubTypeDefaulter: function(r, t) {
      at.registerSubTypeDefaulter(r, t);
    },
    registerPainter: function(r, t) {
      Cc(r, t);
    }
  };
  function ve(r) {
    if (F(r)) {
      M(r, function(t) {
        ve(t);
      });
      return;
    }
    ut(dm, r) >= 0 || (dm.push(r), X(r) && (r = {
      install: r
    }), r.install(JD));
  }
  var tM = 1e-8;
  function pm(r, t) {
    return Math.abs(r - t) < tM;
  }
  function gm(r, t, e) {
    var n = 0, i = r[0];
    if (!i)
      return !1;
    for (var a = 1; a < r.length; a++) {
      var o = r[a];
      n += pr(i[0], i[1], o[0], o[1], t, e), i = o;
    }
    var s = r[0];
    return (!pm(i[0], s[0]) || !pm(i[1], s[1])) && (n += pr(i[0], i[1], s[0], s[1], t, e)), n !== 0;
  }
  var eM = [];
  function Oh(r, t) {
    for (var e = 0; e < r.length; e++)
      jt(r[e], r[e], t);
  }
  function ym(r, t, e, n) {
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      n && (a = n.project(a)), a && isFinite(a[0]) && isFinite(a[1]) && (Lr(t, t, a), Pr(e, e, a));
    }
  }
  function rM(r) {
    for (var t = 0, e = 0, n = 0, i = r.length, a = r[i - 1][0], o = r[i - 1][1], s = 0; s < i; s++) {
      var l = r[s][0], u = r[s][1], f = a * u - l * o;
      t += f, e += (a + l) * f, n += (o + u) * f, a = l, o = u;
    }
    return t ? [e / t / 3, n / t / 3, t] : [r[0][0] || 0, r[0][1] || 0];
  }
  var mm = (
    /** @class */
    function() {
      function r(t) {
        this.name = t;
      }
      return r.prototype.setCenter = function(t) {
        this._center = t;
      }, r.prototype.getCenter = function() {
        var t = this._center;
        return t || (t = this._center = this.calcCenter()), t;
      }, r;
    }()
  ), _m = (
    /** @class */
    function() {
      function r(t, e) {
        this.type = "polygon", this.exterior = t, this.interiors = e;
      }
      return r;
    }()
  ), Sm = (
    /** @class */
    function() {
      function r(t) {
        this.type = "linestring", this.points = t;
      }
      return r;
    }()
  ), nM = (
    /** @class */
    function(r) {
      k(t, r);
      function t(e, n, i) {
        var a = r.call(this, e) || this;
        return a.type = "geoJSON", a.geometries = n, a._center = i && [i[0], i[1]], a;
      }
      return t.prototype.calcCenter = function() {
        for (var e = this.geometries, n, i = 0, a = 0; a < e.length; a++) {
          var o = e[a], s = o.exterior, l = s && s.length;
          l > i && (n = o, i = l);
        }
        if (n)
          return rM(n.exterior);
        var u = this.getBoundingRect();
        return [u.x + u.width / 2, u.y + u.height / 2];
      }, t.prototype.getBoundingRect = function(e) {
        var n = this._rect;
        if (n && !e)
          return n;
        var i = [1 / 0, 1 / 0], a = [-1 / 0, -1 / 0], o = this.geometries;
        return M(o, function(s) {
          s.type === "polygon" ? ym(s.exterior, i, a, e) : M(s.points, function(l) {
            ym(l, i, a, e);
          });
        }), isFinite(i[0]) && isFinite(i[1]) && isFinite(a[0]) && isFinite(a[1]) || (i[0] = i[1] = a[0] = a[1] = 0), n = new it(i[0], i[1], a[0] - i[0], a[1] - i[1]), e || (this._rect = n), n;
      }, t.prototype.contain = function(e) {
        var n = this.getBoundingRect(), i = this.geometries;
        if (!n.contain(e[0], e[1]))
          return !1;
        t:
          for (var a = 0, o = i.length; a < o; a++) {
            var s = i[a];
            if (s.type === "polygon") {
              var l = s.exterior, u = s.interiors;
              if (gm(l, e[0], e[1])) {
                for (var f = 0; f < (u ? u.length : 0); f++)
                  if (gm(u[f], e[0], e[1]))
                    continue t;
                return !0;
              }
            }
          }
        return !1;
      }, t.prototype.transformTo = function(e, n, i, a) {
        var o = this.getBoundingRect(), s = o.width / o.height;
        i ? a || (a = i / s) : i = s * a;
        for (var l = new it(e, n, i, a), u = o.calculateTransform(l), f = this.geometries, h = 0; h < f.length; h++) {
          var c = f[h];
          c.type === "polygon" ? (Oh(c.exterior, u), M(c.interiors, function(v) {
            Oh(v, u);
          })) : M(c.points, function(v) {
            Oh(v, u);
          });
        }
        o = this._rect, o.copy(l), this._center = [o.x + o.width / 2, o.y + o.height / 2];
      }, t.prototype.cloneShallow = function(e) {
        e == null && (e = this.name);
        var n = new t(e, this.geometries, this._center);
        return n._rect = this._rect, n.transformTo = null, n;
      }, t;
    }(mm)
  );
  (function(r) {
    k(t, r);
    function t(e, n) {
      var i = r.call(this, e) || this;
      return i.type = "geoSVG", i._elOnlyForCalculate = n, i;
    }
    return t.prototype.calcCenter = function() {
      for (var e = this._elOnlyForCalculate, n = e.getBoundingRect(), i = [n.x + n.width / 2, n.y + n.height / 2], a = Ni(eM), o = e; o && !o.isGeoSVGGraphicRoot; )
        Ir(a, o.getLocalTransform(), a), o = o.parent;
      return ti(a, a), jt(i, i, a), i;
    }, t;
  })(mm);
  function iM(r) {
    if (!r.UTF8Encoding)
      return r;
    var t = r, e = t.UTF8Scale;
    e == null && (e = 1024);
    var n = t.features;
    return M(n, function(i) {
      var a = i.geometry, o = a.encodeOffsets, s = a.coordinates;
      if (o)
        switch (a.type) {
          case "LineString":
            a.coordinates = wm(s, o, e);
            break;
          case "Polygon":
            Bh(s, o, e);
            break;
          case "MultiLineString":
            Bh(s, o, e);
            break;
          case "MultiPolygon":
            M(s, function(l, u) {
              return Bh(l, o[u], e);
            });
        }
    }), t.UTF8Encoding = !1, t;
  }
  function Bh(r, t, e) {
    for (var n = 0; n < r.length; n++)
      r[n] = wm(r[n], t[n], e);
  }
  function wm(r, t, e) {
    for (var n = [], i = t[0], a = t[1], o = 0; o < r.length; o += 2) {
      var s = r.charCodeAt(o) - 64, l = r.charCodeAt(o + 1) - 64;
      s = s >> 1 ^ -(s & 1), l = l >> 1 ^ -(l & 1), s += i, l += a, i = s, a = l, n.push([s / e, l / e]);
    }
    return n;
  }
  function bm(r, t) {
    return r = iM(r), V(Dt(r.features, function(e) {
      return e.geometry && e.properties && e.geometry.coordinates.length > 0;
    }), function(e) {
      var n = e.properties, i = e.geometry, a = [];
      switch (i.type) {
        case "Polygon":
          var o = i.coordinates;
          a.push(new _m(o[0], o.slice(1)));
          break;
        case "MultiPolygon":
          M(i.coordinates, function(l) {
            l[0] && a.push(new _m(l[0], l.slice(1)));
          });
          break;
        case "LineString":
          a.push(new Sm([i.coordinates]));
          break;
        case "MultiLineString":
          a.push(new Sm(i.coordinates));
      }
      var s = new nM(n[t || "name"], a, n.cp);
      return s.properties = n, s;
    });
  }
  var aM = (Object.freeze || Object)({
    linearMap: Eo,
    round: Mt,
    asc: eS,
    getPrecision: tr,
    getPrecisionSafe: ko,
    getPixelPrecision: Ac,
    getPercentWithPrecision: rS,
    MAX_SAFE_INTEGER: iS,
    remRadian: Su,
    isRadianAroundZero: ji,
    parseDate: Me,
    quantity: Pc,
    quantityExponent: Ji,
    nice: wu,
    quantile: oS,
    reformIntervals: sS,
    isNumeric: bu,
    numericToNumber: ta
  }), oM = (Object.freeze || Object)({
    parse: Me,
    format: ba
  }), sM = (Object.freeze || Object)({
    extendShape: Jd,
    extendPath: tp,
    makePath: ds,
    makeImage: af,
    mergePath: np,
    resizePath: of,
    createIcon: ps,
    updateProps: Ot,
    initProps: Yt,
    getTransform: ip,
    clipPointsByRect: sp,
    clipRectByRect: lp,
    registerShape: Re,
    getShapeClass: ep,
    Group: Bt,
    Image: gr,
    Text: kt,
    Circle: va,
    Ellipse: rs,
    Sector: mr,
    Ring: is,
    Polygon: as,
    Polyline: pi,
    Rect: At,
    Line: _r,
    BezierCurve: os,
    Arc: pa,
    IncrementalDisplayable: Qd,
    CompoundPath: Zd,
    LinearGradient: tf,
    RadialGradient: Kd,
    BoundingRect: it
  }), lM = (Object.freeze || Object)({
    addCommas: Sf,
    toCamelCase: wf,
    normalizeCssArray: Ta,
    encodeHTML: pe,
    formatTpl: Tf,
    getTooltipMarker: Ep,
    formatTime: Zb,
    capitalFirst: $b,
    truncateText: qc,
    getTextRect: qb
  }), uM = (Object.freeze || Object)({
    map: V,
    each: M,
    indexOf: ut,
    inherits: Cl,
    reduce: Qe,
    filter: Dt,
    bind: gt,
    curry: xt,
    isArray: F,
    isString: H,
    isObject: W,
    isFunction: X,
    extend: O,
    defaults: lt,
    clone: nt,
    merge: ot
  }), qa = Tt();
  function fM(r) {
    return r.type === "category" ? vM(r) : dM(r);
  }
  function hM(r, t) {
    return r.type === "category" ? cM(r, t) : {
      ticks: V(r.scale.getTicks(), function(e) {
        return e.value;
      })
    };
  }
  function vM(r) {
    var t = r.getLabelModel(), e = xm(r, t);
    return !t.get("show") || r.scale.isBlank() ? {
      labels: [],
      labelCategoryInterval: e.labelCategoryInterval
    } : e;
  }
  function xm(r, t) {
    var e = Tm(r, "labels"), n = kh(t), i = Cm(e, n);
    if (i)
      return i;
    var a, o;
    return X(n) ? a = Am(r, n) : (o = n === "auto" ? pM(r) : n, a = Mm(r, o)), Dm(e, n, {
      labels: a,
      labelCategoryInterval: o
    });
  }
  function cM(r, t) {
    var e = Tm(r, "ticks"), n = kh(t), i = Cm(e, n);
    if (i)
      return i;
    var a, o;
    if ((!t.get("show") || r.scale.isBlank()) && (a = []), X(n))
      a = Am(r, n, !0);
    else if (n === "auto") {
      var s = xm(r, r.getLabelModel());
      o = s.labelCategoryInterval, a = V(s.labels, function(l) {
        return l.tickValue;
      });
    } else
      o = n, a = Mm(r, o, !0);
    return Dm(e, n, {
      ticks: a,
      tickCategoryInterval: o
    });
  }
  function dM(r) {
    var t = r.scale.getTicks(), e = Xa(r);
    return {
      labels: V(t, function(n, i) {
        return {
          level: n.level,
          formattedLabel: e(n, i),
          rawLabel: r.scale.getLabel(n),
          tickValue: n.value
        };
      })
    };
  }
  function Tm(r, t) {
    return qa(r)[t] || (qa(r)[t] = []);
  }
  function Cm(r, t) {
    for (var e = 0; e < r.length; e++)
      if (r[e].key === t)
        return r[e].value;
  }
  function Dm(r, t, e) {
    return r.push({
      key: t,
      value: e
    }), e;
  }
  function pM(r) {
    var t = qa(r).autoInterval;
    return t ?? (qa(r).autoInterval = r.calculateCategoryInterval());
  }
  function gM(r) {
    var t = yM(r), e = Xa(r), n = (t.axisRotate - t.labelRotate) / 180 * Math.PI, i = r.scale, a = i.getExtent(), o = i.count();
    if (a[1] - a[0] < 1)
      return 0;
    var s = 1;
    o > 40 && (s = Math.max(1, Math.floor(o / 40)));
    for (var l = a[0], u = r.dataToCoord(l + 1) - r.dataToCoord(l), f = Math.abs(u * Math.cos(n)), h = Math.abs(u * Math.sin(n)), c = 0, v = 0; l <= a[1]; l += s) {
      var d = 0, g = 0, p = cu(e({
        value: l
      }), t.font, "center", "top");
      d = p.width * 1.3, g = p.height * 1.3, c = Math.max(c, d, 7), v = Math.max(v, g, 7);
    }
    var y = c / f, m = v / h;
    isNaN(y) && (y = 1 / 0), isNaN(m) && (m = 1 / 0);
    var _ = Math.max(0, Math.floor(Math.min(y, m))), S = qa(r.model), b = r.getExtent(), w = S.lastAutoInterval, x = S.lastTickCount;
    return w != null && x != null && Math.abs(w - _) <= 1 && Math.abs(x - o) <= 1 && w > _ && S.axisExtent0 === b[0] && S.axisExtent1 === b[1] ? _ = w : (S.lastTickCount = o, S.lastAutoInterval = _, S.axisExtent0 = b[0], S.axisExtent1 = b[1]), _;
  }
  function yM(r) {
    var t = r.getLabelModel();
    return {
      axisRotate: r.getRotate ? r.getRotate() : r.isHorizontal && !r.isHorizontal() ? 90 : 0,
      labelRotate: t.get("rotate") || 0,
      font: t.getFont()
    };
  }
  function Mm(r, t, e) {
    var n = Xa(r), i = r.scale, a = i.getExtent(), o = r.getLabelModel(), s = [], l = Math.max((t || 0) + 1, 1), u = a[0], f = i.count();
    u !== 0 && l > 1 && f / l > 2 && (u = Math.round(Math.ceil(u / l) * l));
    var h = vm(r), c = o.get("showMinLabel") || h, v = o.get("showMaxLabel") || h;
    c && u !== a[0] && g(a[0]);
    for (var d = u; d <= a[1]; d += l)
      g(d);
    v && d - l !== a[1] && g(a[1]);
    function g(p) {
      var y = {
        value: p
      };
      s.push(e ? p : {
        formattedLabel: n(y),
        rawLabel: i.getLabel(y),
        tickValue: p
      });
    }
    return s;
  }
  function Am(r, t, e) {
    var n = r.scale, i = Xa(r), a = [];
    return M(n.getTicks(), function(o) {
      var s = n.getLabel(o), l = o.value;
      t(o.value, s) && a.push(e ? l : {
        formattedLabel: i(o),
        rawLabel: s,
        tickValue: l
      });
    }), a;
  }
  var Lm = [0, 1], Pm = (
    /** @class */
    function() {
      function r(t, e, n) {
        this.onBand = !1, this.inverse = !1, this.dim = t, this.scale = e, this._extent = n || [0, 0];
      }
      return r.prototype.contain = function(t) {
        var e = this._extent, n = Math.min(e[0], e[1]), i = Math.max(e[0], e[1]);
        return t >= n && t <= i;
      }, r.prototype.containData = function(t) {
        return this.scale.contain(t);
      }, r.prototype.getExtent = function() {
        return this._extent.slice();
      }, r.prototype.getPixelPrecision = function(t) {
        return Ac(t || this.scale.getExtent(), this._extent);
      }, r.prototype.setExtent = function(t, e) {
        var n = this._extent;
        n[0] = t, n[1] = e;
      }, r.prototype.dataToCoord = function(t, e) {
        var n = this._extent, i = this.scale;
        return t = i.normalize(t), this.onBand && i.type === "ordinal" && (n = n.slice(), Im(n, i.count())), Eo(t, Lm, n, e);
      }, r.prototype.coordToData = function(t, e) {
        var n = this._extent, i = this.scale;
        this.onBand && i.type === "ordinal" && (n = n.slice(), Im(n, i.count()));
        var a = Eo(t, n, Lm, e);
        return this.scale.scale(a);
      }, r.prototype.pointToData = function(t, e) {
      }, r.prototype.getTicksCoords = function(t) {
        t = t || {};
        var e = t.tickModel || this.getTickModel(), n = hM(this, e), i = n.ticks, a = V(i, function(s) {
          return {
            coord: this.dataToCoord(this.scale.type === "ordinal" ? this.scale.getRawOrdinalNumber(s) : s),
            tickValue: s
          };
        }, this), o = e.get("alignWithLabel");
        return mM(this, a, o, t.clamp), a;
      }, r.prototype.getMinorTicksCoords = function() {
        if (this.scale.type === "ordinal")
          return [];
        var t = this.model.getModel("minorTick"), e = t.get("splitNumber");
        e > 0 && e < 100 || (e = 5);
        var n = this.scale.getMinorTicks(e), i = V(n, function(a) {
          return V(a, function(o) {
            return {
              coord: this.dataToCoord(o),
              tickValue: o
            };
          }, this);
        }, this);
        return i;
      }, r.prototype.getViewLabels = function() {
        return fM(this).labels;
      }, r.prototype.getLabelModel = function() {
        return this.model.getModel("axisLabel");
      }, r.prototype.getTickModel = function() {
        return this.model.getModel("axisTick");
      }, r.prototype.getBandWidth = function() {
        var t = this._extent, e = this.scale.getExtent(), n = e[1] - e[0] + (this.onBand ? 1 : 0);
        n === 0 && (n = 1);
        var i = Math.abs(t[1] - t[0]);
        return Math.abs(i) / n;
      }, r.prototype.calculateCategoryInterval = function() {
        return gM(this);
      }, r;
    }()
  );
  function Im(r, t) {
    var e = r[1] - r[0], n = t, i = e / n / 2;
    r[0] += i, r[1] -= i;
  }
  function mM(r, t, e, n) {
    var i = t.length;
    if (!r.onBand || e || !i)
      return;
    var a = r.getExtent(), o, s;
    if (i === 1)
      t[0].coord = a[0], o = t[1] = {
        coord: a[0]
      };
    else {
      var l = t[i - 1].tickValue - t[0].tickValue, u = (t[i - 1].coord - t[0].coord) / l;
      M(t, function(v) {
        v.coord -= u / 2;
      });
      var f = r.scale.getExtent();
      s = 1 + f[1] - t[i - 1].tickValue, o = {
        coord: t[i - 1].coord + u * s
      }, t.push(o);
    }
    var h = a[0] > a[1];
    c(t[0].coord, a[0]) && (n ? t[0].coord = a[0] : t.shift()), n && c(a[0], t[0].coord) && t.unshift({
      coord: a[0]
    }), c(a[1], o.coord) && (n ? o.coord = a[1] : t.pop()), n && c(o.coord, a[1]) && t.push({
      coord: a[1]
    });
    function c(v, d) {
      return v = Mt(v), d = Mt(d), h ? v > d : v < d;
    }
  }
  function _M(r) {
    var t = at.extend(r);
    return at.registerClass(t), t;
  }
  function SM(r) {
    var t = ee.extend(r);
    return ee.registerClass(t), t;
  }
  function wM(r) {
    var t = ue.extend(r);
    return ue.registerClass(t), t;
  }
  function bM(r) {
    var t = re.extend(r);
    return re.registerClass(t), t;
  }
  var Za = Math.PI * 2, Un = zr.CMD, xM = ["top", "right", "bottom", "left"];
  function TM(r, t, e, n, i) {
    var a = e.width, o = e.height;
    switch (r) {
      case "top":
        n.set(e.x + a / 2, e.y - t), i.set(0, -1);
        break;
      case "bottom":
        n.set(e.x + a / 2, e.y + o + t), i.set(0, 1);
        break;
      case "left":
        n.set(e.x - t, e.y + o / 2), i.set(-1, 0);
        break;
      case "right":
        n.set(e.x + a + t, e.y + o / 2), i.set(1, 0);
        break;
    }
  }
  function CM(r, t, e, n, i, a, o, s, l) {
    o -= r, s -= t;
    var u = Math.sqrt(o * o + s * s);
    o /= u, s /= u;
    var f = o * e + r, h = s * e + t;
    if (Math.abs(n - i) % Za < 1e-4)
      return l[0] = f, l[1] = h, u - e;
    if (a) {
      var c = n;
      n = Gr(i), i = Gr(c);
    } else
      n = Gr(n), i = Gr(i);
    n > i && (i += Za);
    var v = Math.atan2(s, o);
    if (v < 0 && (v += Za), v >= n && v <= i || v + Za >= n && v + Za <= i)
      return l[0] = f, l[1] = h, u - e;
    var d = e * Math.cos(n) + r, g = e * Math.sin(n) + t, p = e * Math.cos(i) + r, y = e * Math.sin(i) + t, m = (d - o) * (d - o) + (g - s) * (g - s), _ = (p - o) * (p - o) + (y - s) * (y - s);
    return m < _ ? (l[0] = d, l[1] = g, Math.sqrt(m)) : (l[0] = p, l[1] = y, Math.sqrt(_));
  }
  function hl(r, t, e, n, i, a, o, s) {
    var l = i - r, u = a - t, f = e - r, h = n - t, c = Math.sqrt(f * f + h * h);
    f /= c, h /= c;
    var v = l * f + u * h, d = v / c;
    s && (d = Math.min(Math.max(d, 0), 1)), d *= c;
    var g = o[0] = r + d * f, p = o[1] = t + d * h;
    return Math.sqrt((g - i) * (g - i) + (p - a) * (p - a));
  }
  function Rm(r, t, e, n, i, a, o) {
    e < 0 && (r = r + e, e = -e), n < 0 && (t = t + n, n = -n);
    var s = r + e, l = t + n, u = o[0] = Math.min(Math.max(i, r), s), f = o[1] = Math.min(Math.max(a, t), l);
    return Math.sqrt((u - i) * (u - i) + (f - a) * (f - a));
  }
  var $e = [];
  function DM(r, t, e) {
    var n = Rm(t.x, t.y, t.width, t.height, r.x, r.y, $e);
    return e.set($e[0], $e[1]), n;
  }
  function MM(r, t, e) {
    for (var n = 0, i = 0, a = 0, o = 0, s, l, u = 1 / 0, f = t.data, h = r.x, c = r.y, v = 0; v < f.length; ) {
      var d = f[v++];
      v === 1 && (n = f[v], i = f[v + 1], a = n, o = i);
      var g = u;
      switch (d) {
        case Un.M:
          a = f[v++], o = f[v++], n = a, i = o;
          break;
        case Un.L:
          g = hl(n, i, f[v], f[v + 1], h, c, $e, !0), n = f[v++], i = f[v++];
          break;
        case Un.C:
          g = rc(n, i, f[v++], f[v++], f[v++], f[v++], f[v], f[v + 1], h, c, $e), n = f[v++], i = f[v++];
          break;
        case Un.Q:
          g = ac(n, i, f[v++], f[v++], f[v], f[v + 1], h, c, $e), n = f[v++], i = f[v++];
          break;
        case Un.A:
          var p = f[v++], y = f[v++], m = f[v++], _ = f[v++], S = f[v++], b = f[v++];
          v += 1;
          var w = !!(1 - f[v++]);
          s = Math.cos(S) * m + p, l = Math.sin(S) * _ + y, v <= 1 && (a = s, o = l);
          var x = (h - p) * _ / m + p;
          g = CM(p, y, _, S, S + b, w, x, c, $e), n = Math.cos(S + b) * m + p, i = Math.sin(S + b) * _ + y;
          break;
        case Un.R:
          a = n = f[v++], o = i = f[v++];
          var T = f[v++], D = f[v++];
          g = Rm(a, o, T, D, h, c, $e);
          break;
        case Un.Z:
          g = hl(n, i, a, o, h, c, $e, !0), n = a, i = o;
          break;
      }
      g < u && (u = g, e.set($e[0], $e[1]));
    }
    return u;
  }
  var Ke = new q(), dt = new q(), Ct = new q(), fr = new q(), hr = new q();
  function Em(r, t) {
    if (r) {
      var e = r.getTextGuideLine(), n = r.getTextContent();
      if (n && e) {
        var i = r.textGuideLineConfig || {}, a = [[0, 0], [0, 0], [0, 0]], o = i.candidates || xM, s = n.getBoundingRect().clone();
        s.applyTransform(n.getComputedTransform());
        var l = 1 / 0, u = i.anchor, f = r.getComputedTransform(), h = f && ti([], f), c = t.get("length2") || 0;
        u && Ct.copy(u);
        for (var v = 0; v < o.length; v++) {
          var d = o[v];
          TM(d, 0, s, Ke, fr), q.scaleAndAdd(dt, Ke, fr, c), dt.transform(h);
          var g = r.getBoundingRect(), p = u ? u.distance(dt) : r instanceof ht ? MM(dt, r.path, Ct) : DM(dt, g, Ct);
          p < l && (l = p, dt.transform(f), Ct.transform(f), Ct.toArray(a[0]), dt.toArray(a[1]), Ke.toArray(a[2]));
        }
        km(a, t.get("minTurnAngle")), e.setShape({
          points: a
        });
      }
    }
  }
  var vl = [], ie = new q();
  function km(r, t) {
    if (t <= 180 && t > 0) {
      t = t / 180 * Math.PI, Ke.fromArray(r[0]), dt.fromArray(r[1]), Ct.fromArray(r[2]), q.sub(fr, Ke, dt), q.sub(hr, Ct, dt);
      var e = fr.len(), n = hr.len();
      if (!(e < 1e-3 || n < 1e-3)) {
        fr.scale(1 / e), hr.scale(1 / n);
        var i = fr.dot(hr), a = Math.cos(t);
        if (a < i) {
          var o = hl(dt.x, dt.y, Ct.x, Ct.y, Ke.x, Ke.y, vl, !1);
          ie.fromArray(vl), ie.scaleAndAdd(hr, o / Math.tan(Math.PI - t));
          var s = Ct.x !== dt.x ? (ie.x - dt.x) / (Ct.x - dt.x) : (ie.y - dt.y) / (Ct.y - dt.y);
          if (isNaN(s))
            return;
          s < 0 ? q.copy(ie, dt) : s > 1 && q.copy(ie, Ct), ie.toArray(r[1]);
        }
      }
    }
  }
  function AM(r, t, e) {
    if (e <= 180 && e > 0) {
      e = e / 180 * Math.PI, Ke.fromArray(r[0]), dt.fromArray(r[1]), Ct.fromArray(r[2]), q.sub(fr, dt, Ke), q.sub(hr, Ct, dt);
      var n = fr.len(), i = hr.len();
      if (!(n < 1e-3 || i < 1e-3)) {
        fr.scale(1 / n), hr.scale(1 / i);
        var a = fr.dot(t), o = Math.cos(e);
        if (a < o) {
          var s = hl(dt.x, dt.y, Ct.x, Ct.y, Ke.x, Ke.y, vl, !1);
          ie.fromArray(vl);
          var l = Math.PI / 2, u = Math.acos(hr.dot(t)), f = l + u - e;
          if (f >= l)
            q.copy(ie, Ct);
          else {
            ie.scaleAndAdd(hr, s / Math.tan(Math.PI / 2 - f));
            var h = Ct.x !== dt.x ? (ie.x - dt.x) / (Ct.x - dt.x) : (ie.y - dt.y) / (Ct.y - dt.y);
            if (isNaN(h))
              return;
            h < 0 ? q.copy(ie, dt) : h > 1 && q.copy(ie, Ct);
          }
          ie.toArray(r[1]);
        }
      }
    }
  }
  function Om(r, t, e, n) {
    var i = e === "normal", a = i ? r : r.ensureState(e);
    a.ignore = t;
    var o = n.get("smooth");
    o && o === !0 && (o = 0.3), a.shape = a.shape || {}, o > 0 && (a.shape.smooth = o);
    var s = n.getModel("lineStyle").getLineStyle();
    i ? r.useStyle(s) : a.style = s;
  }
  function LM(r, t) {
    var e = t.smooth, n = t.points;
    if (n)
      if (r.moveTo(n[0][0], n[0][1]), e > 0 && n.length >= 3) {
        var i = so(n[0], n[1]), a = so(n[1], n[2]);
        if (!i || !a) {
          r.lineTo(n[1][0], n[1][1]), r.lineTo(n[2][0], n[2][1]);
          return;
        }
        var o = Math.min(i, a) * e, s = lo([], n[1], n[0], o / i), l = lo([], n[1], n[2], o / a), u = lo([], s, l, 0.5);
        r.bezierCurveTo(s[0], s[1], s[0], s[1], u[0], u[1]), r.bezierCurveTo(l[0], l[1], l[0], l[1], n[2][0], n[2][1]);
      } else
        for (var f = 1; f < n.length; f++)
          r.lineTo(n[f][0], n[f][1]);
  }
  function Bm(r, t, e) {
    var n = r.getTextGuideLine(), i = r.getTextContent();
    if (!i) {
      n && r.removeTextGuideLine();
      return;
    }
    for (var a = t.normal, o = a.get("show"), s = i.ignore, l = 0; l < Xo.length; l++) {
      var u = Xo[l], f = t[u], h = u === "normal";
      if (f) {
        var c = f.get("show"), v = h ? s : tt(i.states[u] && i.states[u].ignore, s);
        if (v || !tt(c, o)) {
          var d = h ? n : n && n.states[u];
          d && (d.ignore = !0);
          continue;
        }
        n || (n = new pi(), r.setTextGuideLine(n), !h && (s || !o) && Om(n, !0, "normal", t.normal), r.stateProxy && (n.stateProxy = r.stateProxy)), Om(n, !1, u, f);
      }
    }
    if (n) {
      lt(n.style, e), n.style.fill = null;
      var g = a.get("showAbove"), p = r.textGuideLineConfig = r.textGuideLineConfig || {};
      p.showAbove = g || !1, n.buildPath = LM;
    }
  }
  function Nm(r, t) {
    t = t || "labelLine";
    for (var e = {
      normal: r.getModel(t)
    }, n = 0; n < Ie.length; n++) {
      var i = Ie[n];
      e[i] = r.getModel([i, t]);
    }
    return e;
  }
  function Fm(r) {
    for (var t = [], e = 0; e < r.length; e++) {
      var n = r[e];
      if (!n.defaultAttr.ignore) {
        var i = n.label, a = i.getComputedTransform(), o = i.getBoundingRect(), s = !a || a[1] < 1e-5 && a[2] < 1e-5, l = i.style.margin || 0, u = o.clone();
        u.applyTransform(a), u.x -= l / 2, u.y -= l / 2, u.width += l, u.height += l;
        var f = s ? new us(o, a) : null;
        t.push({
          label: i,
          labelLine: n.labelLine,
          rect: u,
          localRect: o,
          obb: f,
          priority: n.priority,
          defaultAttr: n.defaultAttr,
          layoutOption: n.computedLayoutOption,
          axisAligned: s,
          transform: a
        });
      }
    }
    return t;
  }
  function zm(r, t, e, n, i, a) {
    var o = r.length;
    if (o < 2)
      return;
    r.sort(function(T, D) {
      return T.rect[t] - D.rect[t];
    });
    for (var s = 0, l, u = !1, f = 0, h = 0; h < o; h++) {
      var c = r[h], v = c.rect;
      l = v[t] - s, l < 0 && (v[t] -= l, c.label[t] -= l, u = !0);
      var d = Math.max(-l, 0);
      f += d, s = v[t] + v[e];
    }
    f > 0 && a && b(-f / o, 0, o);
    var g = r[0], p = r[o - 1], y, m;
    _(), y < 0 && w(-y, 0.8), m < 0 && w(m, 0.8), _(), S(y, m, 1), S(m, y, -1), _(), y < 0 && x(-y), m < 0 && x(m);
    function _() {
      y = g.rect[t] - n, m = i - p.rect[t] - p.rect[e];
    }
    function S(T, D, A) {
      if (T < 0) {
        var C = Math.min(D, -T);
        if (C > 0) {
          b(C * A, 0, o);
          var L = C + T;
          L < 0 && w(-L * A, 1);
        } else
          w(-T * A, 1);
      }
    }
    function b(T, D, A) {
      T !== 0 && (u = !0);
      for (var C = D; C < A; C++) {
        var L = r[C], P = L.rect;
        P[t] += T, L.label[t] += T;
      }
    }
    function w(T, D) {
      for (var A = [], C = 0, L = 1; L < o; L++) {
        var P = r[L - 1].rect, I = Math.max(r[L].rect[t] - P[t] - P[e], 0);
        A.push(I), C += I;
      }
      if (C) {
        var R = Math.min(Math.abs(T) / C, D);
        if (T > 0)
          for (var L = 0; L < o - 1; L++) {
            var E = A[L] * R;
            b(E, 0, L + 1);
          }
        else
          for (var L = o - 1; L > 0; L--) {
            var E = A[L - 1] * R;
            b(-E, L, o);
          }
      }
    }
    function x(T) {
      var D = T < 0 ? -1 : 1;
      T = Math.abs(T);
      for (var A = Math.ceil(T / (o - 1)), C = 0; C < o - 1; C++)
        if (D > 0 ? b(A, 0, C + 1) : b(-A, o - C - 1, o), T -= A, T <= 0)
          return;
    }
    return u;
  }
  function PM(r, t, e, n) {
    return zm(r, "x", "width", t, e, n);
  }
  function Gm(r, t, e, n) {
    return zm(r, "y", "height", t, e, n);
  }
  function Hm(r) {
    var t = [];
    r.sort(function(g, p) {
      return p.priority - g.priority;
    });
    var e = new it(0, 0, 0, 0);
    function n(g) {
      if (!g.ignore) {
        var p = g.ensureState("emphasis");
        p.ignore == null && (p.ignore = !1);
      }
      g.ignore = !0;
    }
    for (var i = 0; i < r.length; i++) {
      var a = r[i], o = a.axisAligned, s = a.localRect, l = a.transform, u = a.label, f = a.labelLine;
      e.copy(a.rect), e.width -= 0.1, e.height -= 0.1, e.x += 0.05, e.y += 0.05;
      for (var h = a.obb, c = !1, v = 0; v < t.length; v++) {
        var d = t[v];
        if (e.intersect(d.rect)) {
          if (o && d.axisAligned) {
            c = !0;
            break;
          }
          if (d.obb || (d.obb = new us(d.localRect, d.transform)), h || (h = new us(s, l)), h.intersect(d.obb)) {
            c = !0;
            break;
          }
        }
      }
      c ? (n(u), f && n(f)) : (u.attr("ignore", a.defaultAttr.ignore), f && f.attr("ignore", a.defaultAttr.labelGuideIgnore), t.push(a));
    }
  }
  function IM(r) {
    if (r) {
      for (var t = [], e = 0; e < r.length; e++)
        t.push(r[e].slice());
      return t;
    }
  }
  function RM(r, t) {
    var e = r.label, n = t && t.getTextGuideLine();
    return {
      dataIndex: r.dataIndex,
      dataType: r.dataType,
      seriesIndex: r.seriesModel.seriesIndex,
      text: r.label.style.text,
      rect: r.hostRect,
      labelRect: r.rect,
      // x: labelAttr.x,
      // y: labelAttr.y,
      align: e.style.align,
      verticalAlign: e.style.verticalAlign,
      labelLinePoints: IM(n && n.shape.points)
    };
  }
  var Vm = ["align", "verticalAlign", "width", "height", "fontSize"], Se = new Po(), Nh = Tt(), EM = Tt();
  function cl(r, t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      t[i] != null && (r[i] = t[i]);
    }
  }
  var dl = ["x", "y", "rotation"], kM = (
    /** @class */
    function() {
      function r() {
        this._labelList = [], this._chartViewList = [];
      }
      return r.prototype.clearLabels = function() {
        this._labelList = [], this._chartViewList = [];
      }, r.prototype._addLabel = function(t, e, n, i, a) {
        var o = i.style, s = i.__hostTarget, l = s.textConfig || {}, u = i.getComputedTransform(), f = i.getBoundingRect().plain();
        it.applyTransform(f, f, u), u ? Se.setLocalTransform(u) : (Se.x = Se.y = Se.rotation = Se.originX = Se.originY = 0, Se.scaleX = Se.scaleY = 1);
        var h = i.__hostTarget, c;
        if (h) {
          c = h.getBoundingRect().plain();
          var v = h.getComputedTransform();
          it.applyTransform(c, c, v);
        }
        var d = c && h.getTextGuideLine();
        this._labelList.push({
          label: i,
          labelLine: d,
          seriesModel: n,
          dataIndex: t,
          dataType: e,
          layoutOption: a,
          computedLayoutOption: null,
          rect: f,
          hostRect: c,
          // Label with lower priority will be hidden when overlapped
          // Use rect size as default priority
          priority: c ? c.width * c.height : 0,
          // Save default label attributes.
          // For restore if developers want get back to default value in callback.
          defaultAttr: {
            ignore: i.ignore,
            labelGuideIgnore: d && d.ignore,
            x: Se.x,
            y: Se.y,
            scaleX: Se.scaleX,
            scaleY: Se.scaleY,
            rotation: Se.rotation,
            style: {
              x: o.x,
              y: o.y,
              align: o.align,
              verticalAlign: o.verticalAlign,
              width: o.width,
              height: o.height,
              fontSize: o.fontSize
            },
            cursor: i.cursor,
            attachedPos: l.position,
            attachedRot: l.rotation
          }
        });
      }, r.prototype.addLabelsOfSeries = function(t) {
        var e = this;
        this._chartViewList.push(t);
        var n = t.__model, i = n.get("labelLayout");
        (X(i) || yt(i).length) && t.group.traverse(function(a) {
          if (a.ignore)
            return !0;
          var o = a.getTextContent(), s = st(a);
          o && !o.disableLabelLayout && e._addLabel(s.dataIndex, s.dataType, n, o, i);
        });
      }, r.prototype.updateLayoutConfig = function(t) {
        var e = t.getWidth(), n = t.getHeight();
        function i(_, S) {
          return function() {
            Em(_, S);
          };
        }
        for (var a = 0; a < this._labelList.length; a++) {
          var o = this._labelList[a], s = o.label, l = s.__hostTarget, u = o.defaultAttr, f = void 0;
          X(o.layoutOption) ? f = o.layoutOption(RM(o, l)) : f = o.layoutOption, f = f || {}, o.computedLayoutOption = f;
          var h = Math.PI / 180;
          l && l.setTextConfig({
            // Force to set local false.
            local: !1,
            // Ignore position and rotation config on the host el if x or y is changed.
            position: f.x != null || f.y != null ? null : u.attachedPos,
            // Ignore rotation config on the host el if rotation is changed.
            rotation: f.rotate != null ? f.rotate * h : u.attachedRot,
            offset: [f.dx || 0, f.dy || 0]
          });
          var c = !1;
          if (f.x != null ? (s.x = mt(f.x, e), s.setStyle("x", 0), c = !0) : (s.x = u.x, s.setStyle("x", u.style.x)), f.y != null ? (s.y = mt(f.y, n), s.setStyle("y", 0), c = !0) : (s.y = u.y, s.setStyle("y", u.style.y)), f.labelLinePoints) {
            var v = l.getTextGuideLine();
            v && (v.setShape({
              points: f.labelLinePoints
            }), c = !1);
          }
          var d = Nh(s);
          d.needsUpdateLabelLine = c, s.rotation = f.rotate != null ? f.rotate * h : u.rotation, s.scaleX = u.scaleX, s.scaleY = u.scaleY;
          for (var g = 0; g < Vm.length; g++) {
            var p = Vm[g];
            s.setStyle(p, f[p] != null ? f[p] : u.style[p]);
          }
          if (f.draggable) {
            if (s.draggable = !0, s.cursor = "move", l) {
              var y = o.seriesModel;
              if (o.dataIndex != null) {
                var m = o.seriesModel.getData(o.dataType);
                y = m.getItemModel(o.dataIndex);
              }
              s.on("drag", i(l, y.getModel("labelLine")));
            }
          } else
            s.off("drag"), s.cursor = u.cursor;
        }
      }, r.prototype.layout = function(t) {
        var e = t.getWidth(), n = t.getHeight(), i = Fm(this._labelList), a = Dt(i, function(l) {
          return l.layoutOption.moveOverlap === "shiftX";
        }), o = Dt(i, function(l) {
          return l.layoutOption.moveOverlap === "shiftY";
        });
        PM(a, 0, e), Gm(o, 0, n);
        var s = Dt(i, function(l) {
          return l.layoutOption.hideOverlap;
        });
        Hm(s);
      }, r.prototype.processLabelsOverall = function() {
        var t = this;
        M(this._chartViewList, function(e) {
          var n = e.__model, i = e.ignoreLabelLineUpdate, a = n.isAnimationEnabled();
          e.group.traverse(function(o) {
            if (o.ignore && !o.forceLabelAnimation)
              return !0;
            var s = !i, l = o.getTextContent();
            !s && l && (s = Nh(l).needsUpdateLabelLine), s && t._updateLabelLine(o, n), a && t._animateLabels(o, n);
          });
        });
      }, r.prototype._updateLabelLine = function(t, e) {
        var n = t.getTextContent(), i = st(t), a = i.dataIndex;
        if (n && a != null) {
          var o = e.getData(i.dataType), s = o.getItemModel(a), l = {}, u = o.getItemVisual(a, "style"), f = o.getVisual("drawType");
          l.stroke = u[f];
          var h = s.getModel("labelLine");
          Bm(t, Nm(s), l), Em(t, h);
        }
      }, r.prototype._animateLabels = function(t, e) {
        var n = t.getTextContent(), i = t.getTextGuideLine();
        if (n && (t.forceLabelAnimation || !n.ignore && !n.invisible && !t.disableLabelAnimation && !gi(t))) {
          var a = Nh(n), o = a.oldLayout, s = st(t), l = s.dataIndex, u = {
            x: n.x,
            y: n.y,
            rotation: n.rotation
          }, f = e.getData(s.dataType);
          if (o) {
            n.attr(o);
            var c = t.prevStates;
            c && (ut(c, "select") >= 0 && n.attr(a.oldLayoutSelect), ut(c, "emphasis") >= 0 && n.attr(a.oldLayoutEmphasis)), Ot(n, u, e, l);
          } else if (n.attr(u), !yi(n).valueAnimation) {
            var h = tt(n.style.opacity, 1);
            n.style.opacity = 0, Yt(n, {
              style: {
                opacity: h
              }
            }, e, l);
          }
          if (a.oldLayout = u, n.states.select) {
            var v = a.oldLayoutSelect = {};
            cl(v, u, dl), cl(v, n.states.select, dl);
          }
          if (n.states.emphasis) {
            var d = a.oldLayoutEmphasis = {};
            cl(d, u, dl), cl(d, n.states.emphasis, dl);
          }
          Ab(n, l, f, e, e);
        }
        if (i && !i.ignore && !i.invisible) {
          var a = EM(i), o = a.oldLayout, g = {
            points: i.shape.points
          };
          o ? (i.attr({
            shape: o
          }), Ot(i, {
            shape: g
          }, e)) : (i.setShape(g), i.style.strokePercent = 0, Yt(i, {
            style: {
              strokePercent: 1
            }
          }, e)), a.oldLayout = g;
        }
      }, r;
    }()
  ), Fh = Tt();
  function Wm(r) {
    r.registerUpdateLifecycle("series:beforeupdate", function(t, e, n) {
      var i = Fh(e).labelManager;
      i || (i = Fh(e).labelManager = new kM()), i.clearLabels();
    }), r.registerUpdateLifecycle("series:layoutlabels", function(t, e, n) {
      var i = Fh(e).labelManager;
      n.updatedSeries.forEach(function(a) {
        i.addLabelsOfSeries(e.getViewOfSeriesModel(a));
      }), i.updateLayoutConfig(e), i.layout(e), i.processLabelsOverall();
    });
  }
  ve(Wm);
  function Um(r, t, e) {
    var n = Zt.createCanvas(), i = t.getWidth(), a = t.getHeight(), o = n.style;
    return o && (o.position = "absolute", o.left = "0", o.top = "0", o.width = i + "px", o.height = a + "px", n.setAttribute("data-zr-dom-id", r)), n.width = i * e, n.height = a * e, n;
  }
  var zh = function(r) {
    k(t, r);
    function t(e, n, i) {
      var a = r.call(this) || this;
      a.motionBlur = !1, a.lastFrameAlpha = 0.7, a.dpr = 1, a.virtual = !1, a.config = {}, a.incremental = !1, a.zlevel = 0, a.maxRepaintRectCount = 5, a.__dirty = !0, a.__firstTimePaint = !0, a.__used = !1, a.__drawIndex = 0, a.__startIndex = 0, a.__endIndex = 0, a.__prevStartIndex = null, a.__prevEndIndex = null;
      var o;
      i = i || Lo, typeof e == "string" ? o = Um(e, n, i) : W(e) && (o = e, e = o.id), a.id = e, a.dom = o;
      var s = o.style;
      return s && (Al(o), o.onselectstart = function() {
        return !1;
      }, s.padding = "0", s.margin = "0", s.borderWidth = "0"), a.painter = n, a.dpr = i, a;
    }
    return t.prototype.getElementCount = function() {
      return this.__endIndex - this.__startIndex;
    }, t.prototype.afterBrush = function() {
      this.__prevStartIndex = this.__startIndex, this.__prevEndIndex = this.__endIndex;
    }, t.prototype.initContext = function() {
      this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
    }, t.prototype.setUnpainted = function() {
      this.__firstTimePaint = !0;
    }, t.prototype.createBackBuffer = function() {
      var e = this.dpr;
      this.domBack = Um("back-" + this.id, this.painter, e), this.ctxBack = this.domBack.getContext("2d"), e !== 1 && this.ctxBack.scale(e, e);
    }, t.prototype.createRepaintRects = function(e, n, i, a) {
      if (this.__firstTimePaint)
        return this.__firstTimePaint = !1, null;
      var o = [], s = this.maxRepaintRectCount, l = !1, u = new it(0, 0, 0, 0);
      function f(m) {
        if (!(!m.isFinite() || m.isZero()))
          if (o.length === 0) {
            var _ = new it(0, 0, 0, 0);
            _.copy(m), o.push(_);
          } else {
            for (var S = !1, b = 1 / 0, w = 0, x = 0; x < o.length; ++x) {
              var T = o[x];
              if (T.intersect(m)) {
                var D = new it(0, 0, 0, 0);
                D.copy(T), D.union(m), o[x] = D, S = !0;
                break;
              } else if (l) {
                u.copy(m), u.union(T);
                var A = m.width * m.height, C = T.width * T.height, L = u.width * u.height, P = L - A - C;
                P < b && (b = P, w = x);
              }
            }
            if (l && (o[w].union(m), S = !0), !S) {
              var _ = new it(0, 0, 0, 0);
              _.copy(m), o.push(_);
            }
            l || (l = o.length >= s);
          }
      }
      for (var h = this.__startIndex; h < this.__endIndex; ++h) {
        var c = e[h];
        if (c) {
          var v = c.shouldBePainted(i, a, !0, !0), d = c.__isRendered && (c.__dirty & ge || !v) ? c.getPrevPaintRect() : null;
          d && f(d);
          var g = v && (c.__dirty & ge || !c.__isRendered) ? c.getPaintRect() : null;
          g && f(g);
        }
      }
      for (var h = this.__prevStartIndex; h < this.__prevEndIndex; ++h) {
        var c = n[h], v = c.shouldBePainted(i, a, !0, !0);
        if (c && (!v || !c.__zr) && c.__isRendered) {
          var d = c.getPrevPaintRect();
          d && f(d);
        }
      }
      var p;
      do {
        p = !1;
        for (var h = 0; h < o.length; ) {
          if (o[h].isZero()) {
            o.splice(h, 1);
            continue;
          }
          for (var y = h + 1; y < o.length; )
            o[h].intersect(o[y]) ? (p = !0, o[h].union(o[y]), o.splice(y, 1)) : y++;
          h++;
        }
      } while (p);
      return this._paintRects = o, o;
    }, t.prototype.debugGetPaintRects = function() {
      return (this._paintRects || []).slice();
    }, t.prototype.resize = function(e, n) {
      var i = this.dpr, a = this.dom, o = a.style, s = this.domBack;
      o && (o.width = e + "px", o.height = n + "px"), a.width = e * i, a.height = n * i, s && (s.width = e * i, s.height = n * i, i !== 1 && this.ctxBack.scale(i, i));
    }, t.prototype.clear = function(e, n, i) {
      var a = this.dom, o = this.ctx, s = a.width, l = a.height;
      n = n || this.clearColor;
      var u = this.motionBlur && !e, f = this.lastFrameAlpha, h = this.dpr, c = this;
      u && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(a, 0, 0, s / h, l / h));
      var v = this.domBack;
      function d(g, p, y, m) {
        if (o.clearRect(g, p, y, m), n && n !== "transparent") {
          var _ = void 0;
          if (ki(n)) {
            var S = n.global || n.__width === y && n.__height === m;
            _ = S && n.__canvasGradient || Kf(o, n, {
              x: 0,
              y: 0,
              width: y,
              height: m
            }), n.__canvasGradient = _, n.__width = y, n.__height = m;
          } else
            xv(n) && (n.scaleX = n.scaleX || h, n.scaleY = n.scaleY || h, _ = Qf(o, n, {
              dirty: function() {
                c.setUnpainted(), c.__painter.refresh();
              }
            }));
          o.save(), o.fillStyle = _ || n, o.fillRect(g, p, y, m), o.restore();
        }
        u && (o.save(), o.globalAlpha = f, o.drawImage(v, g, p, y, m), o.restore());
      }
      !i || u ? d(0, 0, s, l) : i.length && M(i, function(g) {
        d(g.x * h, g.y * h, g.width * h, g.height * h);
      });
    }, t;
  }(je), Ym = 1e5, Yn = 314159, pl = 0.01, OM = 1e-3;
  function BM(r) {
    return r ? r.__builtin__ ? !0 : !(typeof r.resize != "function" || typeof r.refresh != "function") : !1;
  }
  function NM(r, t) {
    var e = document.createElement("div");
    return e.style.cssText = ["position:relative", "width:" + r + "px", "height:" + t + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", e;
  }
  var FM = function() {
    function r(t, e, n, i) {
      this.type = "canvas", this._zlevelList = [], this._prevDisplayList = [], this._layers = {}, this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas";
      var a = !t.nodeName || t.nodeName.toUpperCase() === "CANVAS";
      this._opts = n = O({}, n || {}), this.dpr = n.devicePixelRatio || Lo, this._singleCanvas = a, this.root = t;
      var o = t.style;
      o && (Al(t), t.innerHTML = ""), this.storage = e;
      var s = this._zlevelList;
      this._prevDisplayList = [];
      var l = this._layers;
      if (a) {
        var f = t, h = f.width, c = f.height;
        n.width != null && (h = n.width), n.height != null && (c = n.height), this.dpr = n.devicePixelRatio || 1, f.width = h * this.dpr, f.height = c * this.dpr, this._width = h, this._height = c;
        var v = new zh(f, this, this.dpr);
        v.__builtin__ = !0, v.initContext(), l[Yn] = v, v.zlevel = Yn, s.push(Yn), this._domRoot = t;
      } else {
        this._width = Vs(t, 0, n), this._height = Vs(t, 1, n);
        var u = this._domRoot = NM(this._width, this._height);
        t.appendChild(u);
      }
    }
    return r.prototype.getType = function() {
      return "canvas";
    }, r.prototype.isSingleCanvas = function() {
      return this._singleCanvas;
    }, r.prototype.getViewportRoot = function() {
      return this._domRoot;
    }, r.prototype.getViewportRootOffset = function() {
      var t = this.getViewportRoot();
      if (t)
        return {
          offsetLeft: t.offsetLeft || 0,
          offsetTop: t.offsetTop || 0
        };
    }, r.prototype.refresh = function(t) {
      var e = this.storage.getDisplayList(!0), n = this._prevDisplayList, i = this._zlevelList;
      this._redrawId = Math.random(), this._paintList(e, n, t, this._redrawId);
      for (var a = 0; a < i.length; a++) {
        var o = i[a], s = this._layers[o];
        if (!s.__builtin__ && s.refresh) {
          var l = a === 0 ? this._backgroundColor : null;
          s.refresh(l);
        }
      }
      return this._opts.useDirtyRect && (this._prevDisplayList = e.slice()), this;
    }, r.prototype.refreshHover = function() {
      this._paintHoverList(this.storage.getDisplayList(!1));
    }, r.prototype._paintHoverList = function(t) {
      var e = t.length, n = this._hoverlayer;
      if (n && n.clear(), !!e) {
        for (var i = {
          inHover: !0,
          viewWidth: this._width,
          viewHeight: this._height
        }, a, o = 0; o < e; o++) {
          var s = t[o];
          s.__inHover && (n || (n = this._hoverlayer = this.getLayer(Ym)), a || (a = n.ctx, a.save()), zn(a, s, i, o === e - 1));
        }
        a && a.restore();
      }
    }, r.prototype.getHoverLayer = function() {
      return this.getLayer(Ym);
    }, r.prototype.paintOne = function(t, e) {
      jf(t, e);
    }, r.prototype._paintList = function(t, e, n, i) {
      if (this._redrawId === i) {
        n = n || !1, this._updateLayerStatus(t);
        var a = this._doPaintList(t, e, n), o = a.finished, s = a.needsRefreshHover;
        if (this._needsManuallyCompositing && this._compositeManually(), s && this._paintHoverList(t), o)
          this.eachLayer(function(u) {
            u.afterBrush && u.afterBrush();
          });
        else {
          var l = this;
          Ul(function() {
            l._paintList(t, e, n, i);
          });
        }
      }
    }, r.prototype._compositeManually = function() {
      var t = this.getLayer(Yn).ctx, e = this._domRoot.width, n = this._domRoot.height;
      t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function(i) {
        i.virtual && t.drawImage(i.dom, 0, 0, e, n);
      });
    }, r.prototype._doPaintList = function(t, e, n) {
      for (var i = this, a = [], o = this._opts.useDirtyRect, s = 0; s < this._zlevelList.length; s++) {
        var l = this._zlevelList[s], u = this._layers[l];
        u.__builtin__ && u !== this._hoverlayer && (u.__dirty || n) && a.push(u);
      }
      for (var f = !0, h = !1, c = function(g) {
        var p = a[g], y = p.ctx, m = o && p.createRepaintRects(t, e, v._width, v._height), _ = n ? p.__startIndex : p.__drawIndex, S = !n && p.incremental && Date.now, b = S && Date.now(), w = p.zlevel === v._zlevelList[0] ? v._backgroundColor : null;
        if (p.__startIndex === p.__endIndex)
          p.clear(!1, w, m);
        else if (_ === p.__startIndex) {
          var x = t[_];
          (!x.incremental || !x.notClear || n) && p.clear(!1, w, m);
        }
        _ === -1 && (console.error("For some unknown reason. drawIndex is -1"), _ = p.__startIndex);
        var T, D = function(P) {
          var I = {
            inHover: !1,
            allClipped: !1,
            prevEl: null,
            viewWidth: i._width,
            viewHeight: i._height
          };
          for (T = _; T < p.__endIndex; T++) {
            var R = t[T];
            if (R.__inHover && (h = !0), i._doPaintEl(R, p, o, P, I, T === p.__endIndex - 1), S) {
              var E = Date.now() - b;
              if (E > 15)
                break;
            }
          }
          I.prevElClipPaths && y.restore();
        };
        if (m)
          if (m.length === 0)
            T = p.__endIndex;
          else
            for (var A = v.dpr, C = 0; C < m.length; ++C) {
              var L = m[C];
              y.save(), y.beginPath(), y.rect(L.x * A, L.y * A, L.width * A, L.height * A), y.clip(), D(L), y.restore();
            }
        else
          y.save(), D(), y.restore();
        p.__drawIndex = T, p.__drawIndex < p.__endIndex && (f = !1);
      }, v = this, d = 0; d < a.length; d++)
        c(d);
      return z.wxa && M(this._layers, function(g) {
        g && g.ctx && g.ctx.draw && g.ctx.draw();
      }), {
        finished: f,
        needsRefreshHover: h
      };
    }, r.prototype._doPaintEl = function(t, e, n, i, a, o) {
      var s = e.ctx;
      if (n) {
        var l = t.getPaintRect();
        (!i || l && l.intersect(i)) && (zn(s, t, a, o), t.setPrevPaintRect(l));
      } else
        zn(s, t, a, o);
    }, r.prototype.getLayer = function(t, e) {
      this._singleCanvas && !this._needsManuallyCompositing && (t = Yn);
      var n = this._layers[t];
      return n || (n = new zh("zr_" + t, this, this.dpr), n.zlevel = t, n.__builtin__ = !0, this._layerConfig[t] ? ot(n, this._layerConfig[t], !0) : this._layerConfig[t - pl] && ot(n, this._layerConfig[t - pl], !0), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n;
    }, r.prototype.insertLayer = function(t, e) {
      var n = this._layers, i = this._zlevelList, a = i.length, o = this._domRoot, s = null, l = -1;
      if (n[t]) {
        Dr("ZLevel " + t + " has been used already");
        return;
      }
      if (!BM(e)) {
        Dr("Layer of zlevel " + t + " is not valid");
        return;
      }
      if (a > 0 && t > i[0]) {
        for (l = 0; l < a - 1 && !(i[l] < t && i[l + 1] > t); l++)
          ;
        s = n[i[l]];
      }
      if (i.splice(l + 1, 0, t), n[t] = e, !e.virtual)
        if (s) {
          var u = s.dom;
          u.nextSibling ? o.insertBefore(e.dom, u.nextSibling) : o.appendChild(e.dom);
        } else
          o.firstChild ? o.insertBefore(e.dom, o.firstChild) : o.appendChild(e.dom);
      e.__painter = this;
    }, r.prototype.eachLayer = function(t, e) {
      for (var n = this._zlevelList, i = 0; i < n.length; i++) {
        var a = n[i];
        t.call(e, this._layers[a], a);
      }
    }, r.prototype.eachBuiltinLayer = function(t, e) {
      for (var n = this._zlevelList, i = 0; i < n.length; i++) {
        var a = n[i], o = this._layers[a];
        o.__builtin__ && t.call(e, o, a);
      }
    }, r.prototype.eachOtherLayer = function(t, e) {
      for (var n = this._zlevelList, i = 0; i < n.length; i++) {
        var a = n[i], o = this._layers[a];
        o.__builtin__ || t.call(e, o, a);
      }
    }, r.prototype.getLayers = function() {
      return this._layers;
    }, r.prototype._updateLayerStatus = function(t) {
      this.eachBuiltinLayer(function(h, c) {
        h.__dirty = h.__used = !1;
      });
      function e(h) {
        a && (a.__endIndex !== h && (a.__dirty = !0), a.__endIndex = h);
      }
      if (this._singleCanvas)
        for (var n = 1; n < t.length; n++) {
          var i = t[n];
          if (i.zlevel !== t[n - 1].zlevel || i.incremental) {
            this._needsManuallyCompositing = !0;
            break;
          }
        }
      var a = null, o = 0, s, l;
      for (l = 0; l < t.length; l++) {
        var i = t[l], u = i.zlevel, f = void 0;
        s !== u && (s = u, o = 0), i.incremental ? (f = this.getLayer(u + OM, this._needsManuallyCompositing), f.incremental = !0, o = 1) : f = this.getLayer(u + (o > 0 ? pl : 0), this._needsManuallyCompositing), f.__builtin__ || Dr("ZLevel " + u + " has been used by unkown layer " + f.id), f !== a && (f.__used = !0, f.__startIndex !== l && (f.__dirty = !0), f.__startIndex = l, f.incremental ? f.__drawIndex = -1 : f.__drawIndex = l, e(l), a = f), i.__dirty & ge && !i.__inHover && (f.__dirty = !0, f.incremental && f.__drawIndex < 0 && (f.__drawIndex = l));
      }
      e(l), this.eachBuiltinLayer(function(h, c) {
        !h.__used && h.getElementCount() > 0 && (h.__dirty = !0, h.__startIndex = h.__endIndex = h.__drawIndex = 0), h.__dirty && h.__drawIndex < 0 && (h.__drawIndex = h.__startIndex);
      });
    }, r.prototype.clear = function() {
      return this.eachBuiltinLayer(this._clearLayer), this;
    }, r.prototype._clearLayer = function(t) {
      t.clear();
    }, r.prototype.setBackgroundColor = function(t) {
      this._backgroundColor = t, M(this._layers, function(e) {
        e.setUnpainted();
      });
    }, r.prototype.configLayer = function(t, e) {
      if (e) {
        var n = this._layerConfig;
        n[t] ? ot(n[t], e, !0) : n[t] = e;
        for (var i = 0; i < this._zlevelList.length; i++) {
          var a = this._zlevelList[i];
          if (a === t || a === t + pl) {
            var o = this._layers[a];
            ot(o, n[t], !0);
          }
        }
      }
    }, r.prototype.delLayer = function(t) {
      var e = this._layers, n = this._zlevelList, i = e[t];
      i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(ut(n, t), 1));
    }, r.prototype.resize = function(t, e) {
      if (this._domRoot.style) {
        var n = this._domRoot;
        n.style.display = "none";
        var i = this._opts, a = this.root;
        if (t != null && (i.width = t), e != null && (i.height = e), t = Vs(a, 0, i), e = Vs(a, 1, i), n.style.display = "", this._width !== t || e !== this._height) {
          n.style.width = t + "px", n.style.height = e + "px";
          for (var o in this._layers)
            this._layers.hasOwnProperty(o) && this._layers[o].resize(t, e);
          this.refresh(!0);
        }
        this._width = t, this._height = e;
      } else {
        if (t == null || e == null)
          return;
        this._width = t, this._height = e, this.getLayer(Yn).resize(t, e);
      }
      return this;
    }, r.prototype.clearLayer = function(t) {
      var e = this._layers[t];
      e && e.clear();
    }, r.prototype.dispose = function() {
      this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
    }, r.prototype.getRenderedCanvas = function(t) {
      if (t = t || {}, this._singleCanvas && !this._compositeManually)
        return this._layers[Yn].dom;
      var e = new zh("image", this, t.pixelRatio || this.dpr);
      e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor);
      var n = e.ctx;
      if (t.pixelRatio <= this.dpr) {
        this.refresh();
        var i = e.dom.width, a = e.dom.height;
        this.eachLayer(function(h) {
          h.__builtin__ ? n.drawImage(h.dom, 0, 0, i, a) : h.renderToCanvas && (n.save(), h.renderToCanvas(n), n.restore());
        });
      } else
        for (var o = {
          inHover: !1,
          viewWidth: this._width,
          viewHeight: this._height
        }, s = this.storage.getDisplayList(!0), l = 0, u = s.length; l < u; l++) {
          var f = s[l];
          zn(n, f, o, l === u - 1);
        }
      return e.dom;
    }, r.prototype.getWidth = function() {
      return this._width;
    }, r.prototype.getHeight = function() {
      return this._height;
    }, r;
  }();
  function zM(r) {
    r.registerPainter("canvas", FM);
  }
  var GM = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = "dataset", e;
      }
      return t.prototype.init = function(e, n, i) {
        r.prototype.init.call(this, e, n, i), this._sourceManager = new _g(this), Sg(this);
      }, t.prototype.mergeOption = function(e, n) {
        r.prototype.mergeOption.call(this, e, n), Sg(this);
      }, t.prototype.optionUpdated = function() {
        this._sourceManager.dirty();
      }, t.prototype.getSourceManager = function() {
        return this._sourceManager;
      }, t.type = "dataset", t.defaultOption = {
        seriesLayoutBy: lr
      }, t;
    }(at)
  ), HM = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = "dataset", e;
      }
      return t.type = "dataset", t;
    }(ee)
  );
  function VM(r) {
    r.registerComponentModel(GM), r.registerComponentView(HM);
  }
  ve([zM, VM]), ve(Wm);
  var WM = {
    average: function(r) {
      for (var t = 0, e = 0, n = 0; n < r.length; n++)
        isNaN(r[n]) || (t += r[n], e++);
      return e === 0 ? NaN : t / e;
    },
    sum: function(r) {
      for (var t = 0, e = 0; e < r.length; e++)
        t += r[e] || 0;
      return t;
    },
    max: function(r) {
      for (var t = -1 / 0, e = 0; e < r.length; e++)
        r[e] > t && (t = r[e]);
      return isFinite(t) ? t : NaN;
    },
    min: function(r) {
      for (var t = 1 / 0, e = 0; e < r.length; e++)
        r[e] < t && (t = r[e]);
      return isFinite(t) ? t : NaN;
    },
    // TODO
    // Median
    nearest: function(r) {
      return r[0];
    }
  }, UM = function(r) {
    return Math.round(r.length / 2);
  };
  function Xm(r) {
    return {
      seriesType: r,
      // FIXME:TS never used, so comment it
      // modifyOutputEnd: true,
      reset: function(t, e, n) {
        var i = t.getData(), a = t.get("sampling"), o = t.coordinateSystem, s = i.count();
        if (s > 10 && o.type === "cartesian2d" && a) {
          var l = o.getBaseAxis(), u = o.getOtherAxis(l), f = l.getExtent(), h = n.getDevicePixelRatio(), c = Math.abs(f[1] - f[0]) * (h || 1), v = Math.round(s / c);
          if (isFinite(v) && v > 1) {
            a === "lttb" && t.setData(i.lttbDownSample(i.mapDimension(u.dim), 1 / v));
            var d = void 0;
            H(a) ? d = WM[a] : X(a) && (d = a), d && t.setData(i.downSample(i.mapDimension(u.dim), 1 / v, d, UM));
          }
        }
      }
    };
  }
  var Gh = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e;
      }
      return t.prototype.getInitialData = function(e, n) {
        return nl(null, this, {
          useEncodeDefaulter: !0
        });
      }, t.prototype.getMarkerPosition = function(e, n, i) {
        var a = this.coordinateSystem;
        if (a && a.clampData) {
          var o = a.clampData(e), s = a.dataToPoint(o);
          if (i)
            M(a.getAxes(), function(c, v) {
              if (c.type === "category" && n != null) {
                var d = c.getTicksCoords(), g = o[v], p = n[v] === "x1" || n[v] === "y1";
                if (p && (g += 1), d.length < 2)
                  return;
                if (d.length === 2) {
                  s[v] = c.toGlobalCoord(c.getExtent()[p ? 1 : 0]);
                  return;
                }
                for (var y = void 0, m = void 0, _ = 1, S = 0; S < d.length; S++) {
                  var b = d[S].coord, w = S === d.length - 1 ? d[S - 1].tickValue + _ : d[S].tickValue;
                  if (w === g) {
                    m = b;
                    break;
                  } else if (w < g)
                    y = b;
                  else if (y != null && w > g) {
                    m = (b + y) / 2;
                    break;
                  }
                  S === 1 && (_ = w - d[0].tickValue);
                }
                m == null && (y ? y && (m = d[d.length - 1].coord) : m = d[0].coord), s[v] = c.toGlobalCoord(m);
              }
            });
          else {
            var l = this.getData(), u = l.getLayout("offset"), f = l.getLayout("size"), h = a.getBaseAxis().isHorizontal() ? 0 : 1;
            s[h] += u + f / 2;
          }
          return s;
        }
        return [NaN, NaN];
      }, t.type = "series.__base_bar__", t.defaultOption = {
        // zlevel: 0,
        z: 2,
        coordinateSystem: "cartesian2d",
        legendHoverLink: !0,
        // stack: null
        // Cartesian coordinate system
        // xAxisIndex: 0,
        // yAxisIndex: 0,
        barMinHeight: 0,
        barMinAngle: 0,
        // cursor: null,
        large: !1,
        largeThreshold: 400,
        progressive: 3e3,
        progressiveChunkMode: "mod"
      }, t;
    }(ue)
  );
  ue.registerClass(Gh);
  var YM = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e;
      }
      return t.prototype.getInitialData = function() {
        return nl(null, this, {
          useEncodeDefaulter: !0,
          createInvertedIndices: !!this.get("realtimeSort", !0) || null
        });
      }, t.prototype.getProgressive = function() {
        return this.get("large") ? this.get("progressive") : !1;
      }, t.prototype.getProgressiveThreshold = function() {
        var e = this.get("progressiveThreshold"), n = this.get("largeThreshold");
        return n > e && (e = n), e;
      }, t.prototype.brushSelector = function(e, n, i) {
        return i.rect(n.getItemLayout(e));
      }, t.type = "series.bar", t.dependencies = ["grid", "polar"], t.defaultOption = _p(Gh.defaultOption, {
        // If clipped
        // Only available on cartesian2d
        clip: !0,
        roundCap: !1,
        showBackground: !1,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
          borderColor: null,
          borderWidth: 0,
          borderType: "solid",
          borderRadius: 0,
          shadowBlur: 0,
          shadowColor: null,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1
        },
        select: {
          itemStyle: {
            borderColor: "#212121"
          }
        },
        realtimeSort: !1
      }), t;
    }(Gh)
  );
  function qm(r, t, e, n, i) {
    var a = r.getArea(), o = a.x, s = a.y, l = a.width, u = a.height, f = e.get(["lineStyle", "width"]) || 2;
    o -= f / 2, s -= f / 2, l += f, u += f, o = Math.floor(o), l = Math.round(l);
    var h = new At({
      shape: {
        x: o,
        y: s,
        width: l,
        height: u
      }
    });
    if (t) {
      var c = r.getBaseAxis(), v = c.isHorizontal(), d = c.inverse;
      v ? (d && (h.shape.x += l), h.shape.width = 0) : (d || (h.shape.y += u), h.shape.height = 0);
      var g = X(i) ? function(p) {
        i(p, h);
      } : null;
      Yt(h, {
        shape: {
          width: l,
          height: u,
          x: o,
          y: s
        }
      }, e, null, n, g);
    }
    return h;
  }
  function Zm(r, t, e) {
    var n = r.getArea(), i = Mt(n.r0, 1), a = Mt(n.r, 1), o = new mr({
      shape: {
        cx: Mt(r.cx, 1),
        cy: Mt(r.cy, 1),
        r0: i,
        r: a,
        startAngle: n.startAngle,
        endAngle: n.endAngle,
        clockwise: n.clockwise
      }
    });
    if (t) {
      var s = r.getBaseAxis().dim === "angle";
      s ? o.shape.endAngle = n.startAngle : o.shape.r = i, Yt(o, {
        shape: {
          endAngle: n.endAngle,
          r: a
        }
      }, e);
    }
    return o;
  }
  function XM(r, t, e, n, i) {
    if (r) {
      if (r.type === "polar")
        return Zm(r, t, e);
      if (r.type === "cartesian2d")
        return qm(r, t, e, n, i);
    } else
      return null;
    return null;
  }
  var qM = (
    /** @class */
    function() {
      function r() {
        this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
      }
      return r;
    }()
  ), $m = (
    /** @class */
    function(r) {
      k(t, r);
      function t(e) {
        var n = r.call(this, e) || this;
        return n.type = "sausage", n;
      }
      return t.prototype.getDefaultShape = function() {
        return new qM();
      }, t.prototype.buildPath = function(e, n) {
        var i = n.cx, a = n.cy, o = Math.max(n.r0 || 0, 0), s = Math.max(n.r, 0), l = (s - o) * 0.5, u = o + l, f = n.startAngle, h = n.endAngle, c = n.clockwise, v = Math.PI * 2, d = c ? h - f < v : f - h < v;
        d || (f = h - (c ? v : -v));
        var g = Math.cos(f), p = Math.sin(f), y = Math.cos(h), m = Math.sin(h);
        d ? (e.moveTo(g * o + i, p * o + a), e.arc(g * u + i, p * u + a, l, -Math.PI + f, f, !c)) : e.moveTo(g * s + i, p * s + a), e.arc(i, a, s, f, h, !c), e.arc(y * u + i, m * u + a, l, h - Math.PI * 2, h - Math.PI, !c), o !== 0 && e.arc(i, a, o, h, f, c);
      }, t;
    }(ht)
  );
  function Hh(r, t) {
    return r.type === t;
  }
  function Vh(r, t) {
    var e = r.mapDimensionsAll("defaultedLabel"), n = e.length;
    if (n === 1) {
      var i = xi(r, t, e[0]);
      return i != null ? i + "" : null;
    } else if (n) {
      for (var a = [], o = 0; o < e.length; o++)
        a.push(xi(r, t, e[o]));
      return a.join(" ");
    }
  }
  function Km(r, t) {
    var e = r.mapDimensionsAll("defaultedLabel");
    if (!F(t))
      return t + "";
    for (var n = [], i = 0; i < e.length; i++) {
      var a = r.getDimensionIndex(e[i]);
      a >= 0 && n.push(t[a]);
    }
    return n.join(" ");
  }
  function ZM(r, t) {
    t = t || {};
    var e = t.isRoundCap;
    return function(n, i, a) {
      var o = i.position;
      if (!o || o instanceof Array)
        return Io(n, i, a);
      var s = r(o), l = i.distance != null ? i.distance : 5, u = this.shape, f = u.cx, h = u.cy, c = u.r, v = u.r0, d = (c + v) / 2, g = u.startAngle, p = u.endAngle, y = (g + p) / 2, m = e ? Math.abs(c - v) / 2 : 0, _ = Math.cos, S = Math.sin, b = f + c * _(g), w = h + c * S(g), x = "left", T = "top";
      switch (s) {
        case "startArc":
          b = f + (v - l) * _(y), w = h + (v - l) * S(y), x = "center", T = "top";
          break;
        case "insideStartArc":
          b = f + (v + l) * _(y), w = h + (v + l) * S(y), x = "center", T = "bottom";
          break;
        case "startAngle":
          b = f + d * _(g) + gl(g, l + m, !1), w = h + d * S(g) + yl(g, l + m, !1), x = "right", T = "middle";
          break;
        case "insideStartAngle":
          b = f + d * _(g) + gl(g, -l + m, !1), w = h + d * S(g) + yl(g, -l + m, !1), x = "left", T = "middle";
          break;
        case "middle":
          b = f + d * _(y), w = h + d * S(y), x = "center", T = "middle";
          break;
        case "endArc":
          b = f + (c + l) * _(y), w = h + (c + l) * S(y), x = "center", T = "bottom";
          break;
        case "insideEndArc":
          b = f + (c - l) * _(y), w = h + (c - l) * S(y), x = "center", T = "top";
          break;
        case "endAngle":
          b = f + d * _(p) + gl(p, l + m, !0), w = h + d * S(p) + yl(p, l + m, !0), x = "left", T = "middle";
          break;
        case "insideEndAngle":
          b = f + d * _(p) + gl(p, -l + m, !0), w = h + d * S(p) + yl(p, -l + m, !0), x = "right", T = "middle";
          break;
        default:
          return Io(n, i, a);
      }
      return n = n || {}, n.x = b, n.y = w, n.align = x, n.verticalAlign = T, n;
    };
  }
  function $M(r, t, e, n) {
    if (pt(n)) {
      r.setTextConfig({
        rotation: n
      });
      return;
    } else if (F(t)) {
      r.setTextConfig({
        rotation: 0
      });
      return;
    }
    var i = r.shape, a = i.clockwise ? i.startAngle : i.endAngle, o = i.clockwise ? i.endAngle : i.startAngle, s = (a + o) / 2, l, u = e(t);
    switch (u) {
      case "startArc":
      case "insideStartArc":
      case "middle":
      case "insideEndArc":
      case "endArc":
        l = s;
        break;
      case "startAngle":
      case "insideStartAngle":
        l = a;
        break;
      case "endAngle":
      case "insideEndAngle":
        l = o;
        break;
      default:
        r.setTextConfig({
          rotation: 0
        });
        return;
    }
    var f = Math.PI * 1.5 - l;
    u === "middle" && f > Math.PI / 2 && f < Math.PI * 1.5 && (f -= Math.PI), r.setTextConfig({
      rotation: f
    });
  }
  function gl(r, t, e) {
    return t * Math.sin(r) * (e ? -1 : 1);
  }
  function yl(r, t, e) {
    return t * Math.cos(r) * (e ? 1 : -1);
  }
  function $a(r, t, e) {
    var n = r.get("borderRadius");
    if (n == null)
      return e ? {
        cornerRadius: 0
      } : null;
    F(n) || (n = [n, n, n, n]);
    var i = Math.abs(t.r || 0 - t.r0 || 0);
    return {
      cornerRadius: V(n, function(a) {
        return Br(a, i);
      })
    };
  }
  var Wh = Math.max, Uh = Math.min;
  function KM(r, t) {
    var e = r.getArea && r.getArea();
    if (Hh(r, "cartesian2d")) {
      var n = r.getBaseAxis();
      if (n.type !== "category" || !n.onBand) {
        var i = t.getLayout("bandWidth");
        n.isHorizontal() ? (e.x -= i, e.width += i * 2) : (e.y -= i, e.height += i * 2);
      }
    }
    return e;
  }
  var QM = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        var e = r.call(this) || this;
        return e.type = t.type, e._isFirstFrame = !0, e;
      }
      return t.prototype.render = function(e, n, i, a) {
        this._model = e, this._removeOnRenderedListener(i), this._updateDrawMode(e);
        var o = e.get("coordinateSystem");
        o === "cartesian2d" || o === "polar" ? (this._progressiveEls = null, this._isLargeDraw ? this._renderLarge(e, n, i) : this._renderNormal(e, n, i, a)) : Vt("Only cartesian2d and polar supported for bar.");
      }, t.prototype.incrementalPrepareRender = function(e) {
        this._clear(), this._updateDrawMode(e), this._updateLargeClip(e);
      }, t.prototype.incrementalRender = function(e, n) {
        this._progressiveEls = [], this._incrementalRenderLarge(e, n);
      }, t.prototype.eachRendered = function(e) {
        gs(this._progressiveEls || this.group, e);
      }, t.prototype._updateDrawMode = function(e) {
        var n = e.pipelineContext.large;
        (this._isLargeDraw == null || n !== this._isLargeDraw) && (this._isLargeDraw = n, this._clear());
      }, t.prototype._renderNormal = function(e, n, i, a) {
        var o = this.group, s = e.getData(), l = this._data, u = e.coordinateSystem, f = u.getBaseAxis(), h;
        u.type === "cartesian2d" ? h = f.isHorizontal() : u.type === "polar" && (h = f.dim === "angle");
        var c = e.isAnimationEnabled() ? e : null, v = jM(e, u);
        v && this._enableRealtimeSort(v, s, i);
        var d = e.get("clip", !0) || v, g = KM(u, s);
        o.removeClipPath();
        var p = e.get("roundCap", !0), y = e.get("showBackground", !0), m = e.getModel("backgroundStyle"), _ = m.get("borderRadius") || 0, S = [], b = this._backgroundEls, w = a && a.isInitSort, x = a && a.type === "changeAxisOrder";
        function T(C) {
          var L = ml[u.type](s, C), P = aA(u, h, L);
          return P.useStyle(m.getItemStyle()), u.type === "cartesian2d" ? P.setShape("r", _) : P.setShape("cornerRadius", _), S[C] = P, P;
        }
        s.diff(l).add(function(C) {
          var L = s.getItemModel(C), P = ml[u.type](s, C, L);
          if (y && T(C), !(!s.hasValue(C) || !e0[u.type](P))) {
            var I = !1;
            d && (I = Qm[u.type](g, P));
            var R = jm[u.type](e, s, C, P, h, c, f.model, !1, p);
            v && (R.forceLabelAnimation = !0), n0(R, s, C, L, P, e, h, u.type === "polar"), w ? R.attr({
              shape: P
            }) : v ? Jm(v, c, R, P, C, h, !1, !1) : Yt(R, {
              shape: P
            }, e, C), s.setItemGraphicEl(C, R), o.add(R), R.ignore = I;
          }
        }).update(function(C, L) {
          var P = s.getItemModel(C), I = ml[u.type](s, C, P);
          if (y) {
            var R = void 0;
            b.length === 0 ? R = T(L) : (R = b[L], R.useStyle(m.getItemStyle()), u.type === "cartesian2d" ? R.setShape("r", _) : R.setShape("cornerRadius", _), S[C] = R);
            var E = ml[u.type](s, C), Y = s0(h, E, u);
            Ot(R, {
              shape: Y
            }, c, C);
          }
          var B = l.getItemGraphicEl(L);
          if (!s.hasValue(C) || !e0[u.type](I)) {
            o.remove(B);
            return;
          }
          var N = !1;
          if (d && (N = Qm[u.type](g, I), N && o.remove(B)), B ? rf(B) : B = jm[u.type](e, s, C, I, h, c, f.model, !!B, p), v && (B.forceLabelAnimation = !0), x) {
            var U = B.getTextContent();
            if (U) {
              var K = yi(U);
              K.prevValue != null && (K.prevValue = K.value);
            }
          } else
            n0(B, s, C, P, I, e, h, u.type === "polar");
          w ? B.attr({
            shape: I
          }) : v ? Jm(v, c, B, I, C, h, !0, x) : Ot(B, {
            shape: I
          }, e, C, null), s.setItemGraphicEl(C, B), B.ignore = N, o.add(B);
        }).remove(function(C) {
          var L = l.getItemGraphicEl(C);
          L && hs(L, e, C);
        }).execute();
        var D = this._backgroundGroup || (this._backgroundGroup = new Bt());
        D.removeAll();
        for (var A = 0; A < S.length; ++A)
          D.add(S[A]);
        o.add(D), this._backgroundEls = S, this._data = s;
      }, t.prototype._renderLarge = function(e, n, i) {
        this._clear(), a0(e, this.group), this._updateLargeClip(e);
      }, t.prototype._incrementalRenderLarge = function(e, n) {
        this._removeBackground(), a0(n, this.group, this._progressiveEls, !0);
      }, t.prototype._updateLargeClip = function(e) {
        var n = e.get("clip", !0) && XM(e.coordinateSystem, !1, e), i = this.group;
        n ? i.setClipPath(n) : i.removeClipPath();
      }, t.prototype._enableRealtimeSort = function(e, n, i) {
        var a = this;
        if (n.count()) {
          var o = e.baseAxis;
          if (this._isFirstFrame)
            this._dispatchInitSort(n, e, i), this._isFirstFrame = !1;
          else {
            var s = function(l) {
              var u = n.getItemGraphicEl(l), f = u && u.shape;
              return f && // The result should be consistent with the initial sort by data value.
              // Do not support the case that both positive and negative exist.
              Math.abs(o.isHorizontal() ? f.height : f.width) || 0;
            };
            this._onRendered = function() {
              a._updateSortWithinSameData(n, s, o, i);
            }, i.getZr().on("rendered", this._onRendered);
          }
        }
      }, t.prototype._dataSort = function(e, n, i) {
        var a = [];
        return e.each(e.mapDimension(n.dim), function(o, s) {
          var l = i(s);
          l = l ?? NaN, a.push({
            dataIndex: s,
            mappedValue: l,
            ordinalNumber: o
          });
        }), a.sort(function(o, s) {
          return s.mappedValue - o.mappedValue;
        }), {
          ordinalNumbers: V(a, function(o) {
            return o.ordinalNumber;
          })
        };
      }, t.prototype._isOrderChangedWithinSameData = function(e, n, i) {
        for (var a = i.scale, o = e.mapDimension(i.dim), s = Number.MAX_VALUE, l = 0, u = a.getOrdinalMeta().categories.length; l < u; ++l) {
          var f = e.rawIndexOf(o, a.getRawOrdinalNumber(l)), h = f < 0 ? Number.MIN_VALUE : n(e.indexOfRawIndex(f));
          if (h > s)
            return !0;
          s = h;
        }
        return !1;
      }, t.prototype._isOrderDifferentInView = function(e, n) {
        for (var i = n.scale, a = i.getExtent(), o = Math.max(0, a[0]), s = Math.min(a[1], i.getOrdinalMeta().categories.length - 1); o <= s; ++o)
          if (e.ordinalNumbers[o] !== i.getRawOrdinalNumber(o))
            return !0;
      }, t.prototype._updateSortWithinSameData = function(e, n, i, a) {
        if (this._isOrderChangedWithinSameData(e, n, i)) {
          var o = this._dataSort(e, i, n);
          this._isOrderDifferentInView(o, i) && (this._removeOnRenderedListener(a), a.dispatchAction({
            type: "changeAxisOrder",
            componentType: i.dim + "Axis",
            axisId: i.index,
            sortInfo: o
          }));
        }
      }, t.prototype._dispatchInitSort = function(e, n, i) {
        var a = n.baseAxis, o = this._dataSort(e, a, function(s) {
          return e.get(e.mapDimension(n.otherAxis.dim), s);
        });
        i.dispatchAction({
          type: "changeAxisOrder",
          componentType: a.dim + "Axis",
          isInitSort: !0,
          axisId: a.index,
          sortInfo: o
        });
      }, t.prototype.remove = function(e, n) {
        this._clear(this._model), this._removeOnRenderedListener(n);
      }, t.prototype.dispose = function(e, n) {
        this._removeOnRenderedListener(n);
      }, t.prototype._removeOnRenderedListener = function(e) {
        this._onRendered && (e.getZr().off("rendered", this._onRendered), this._onRendered = null);
      }, t.prototype._clear = function(e) {
        var n = this.group, i = this._data;
        e && e.isAnimationEnabled() && i && !this._isLargeDraw ? (this._removeBackground(), this._backgroundEls = [], i.eachItemGraphicEl(function(a) {
          hs(a, e, st(a).dataIndex);
        })) : n.removeAll(), this._data = null, this._isFirstFrame = !0;
      }, t.prototype._removeBackground = function() {
        this.group.remove(this._backgroundGroup), this._backgroundGroup = null;
      }, t.type = "bar", t;
    }(re)
  ), Qm = {
    cartesian2d: function(r, t) {
      var e = t.width < 0 ? -1 : 1, n = t.height < 0 ? -1 : 1;
      e < 0 && (t.x += t.width, t.width = -t.width), n < 0 && (t.y += t.height, t.height = -t.height);
      var i = r.x + r.width, a = r.y + r.height, o = Wh(t.x, r.x), s = Uh(t.x + t.width, i), l = Wh(t.y, r.y), u = Uh(t.y + t.height, a), f = s < o, h = u < l;
      return t.x = f && o > i ? s : o, t.y = h && l > a ? u : l, t.width = f ? 0 : s - o, t.height = h ? 0 : u - l, e < 0 && (t.x += t.width, t.width = -t.width), n < 0 && (t.y += t.height, t.height = -t.height), f || h;
    },
    polar: function(r, t) {
      var e = t.r0 <= t.r ? 1 : -1;
      if (e < 0) {
        var n = t.r;
        t.r = t.r0, t.r0 = n;
      }
      var i = Uh(t.r, r.r), a = Wh(t.r0, r.r0);
      t.r = i, t.r0 = a;
      var o = i - a < 0;
      if (e < 0) {
        var n = t.r;
        t.r = t.r0, t.r0 = n;
      }
      return o;
    }
  }, jm = {
    cartesian2d: function(r, t, e, n, i, a, o, s, l) {
      var u = new At({
        shape: O({}, n),
        z2: 1
      });
      if (u.__dataIndex = e, u.name = "item", a) {
        var f = u.shape, h = i ? "height" : "width";
        f[h] = 0;
      }
      return u;
    },
    polar: function(r, t, e, n, i, a, o, s, l) {
      var u = !i && l ? $m : mr, f = new u({
        shape: n,
        z2: 1
      });
      f.name = "item";
      var h = r0(i);
      if (f.calculateTextPosition = ZM(h, {
        isRoundCap: u === $m
      }), a) {
        var c = f.shape, v = i ? "r" : "endAngle", d = {};
        c[v] = i ? n.r0 : n.startAngle, d[v] = n[v], (s ? Ot : Yt)(f, {
          shape: d
          // __value: typeof dataValue === 'string' ? parseInt(dataValue, 10) : dataValue
        }, a);
      }
      return f;
    }
  };
  function jM(r, t) {
    var e = r.get("realtimeSort", !0), n = t.getBaseAxis();
    if (e && (n.type !== "category" && Vt("`realtimeSort` will not work because this bar series is not based on a category axis."), t.type !== "cartesian2d" && Vt("`realtimeSort` will not work because this bar series is not on cartesian2d.")), e && n.type === "category" && t.type === "cartesian2d")
      return {
        baseAxis: n,
        otherAxis: t.getOtherAxis(n)
      };
  }
  function Jm(r, t, e, n, i, a, o, s) {
    var l, u;
    a ? (u = {
      x: n.x,
      width: n.width
    }, l = {
      y: n.y,
      height: n.height
    }) : (u = {
      y: n.y,
      height: n.height
    }, l = {
      x: n.x,
      width: n.width
    }), s || (o ? Ot : Yt)(e, {
      shape: l
    }, t, i, null);
    var f = t ? r.baseAxis.model : null;
    (o ? Ot : Yt)(e, {
      shape: u
    }, f, i);
  }
  function t0(r, t) {
    for (var e = 0; e < t.length; e++)
      if (!isFinite(r[t[e]]))
        return !0;
    return !1;
  }
  var JM = ["x", "y", "width", "height"], tA = ["cx", "cy", "r", "startAngle", "endAngle"], e0 = {
    cartesian2d: function(r) {
      return !t0(r, JM);
    },
    polar: function(r) {
      return !t0(r, tA);
    }
  }, ml = {
    // itemModel is only used to get borderWidth, which is not needed
    // when calculating bar background layout.
    cartesian2d: function(r, t, e) {
      var n = r.getItemLayout(t), i = e ? rA(e, n) : 0, a = n.width > 0 ? 1 : -1, o = n.height > 0 ? 1 : -1;
      return {
        x: n.x + a * i / 2,
        y: n.y + o * i / 2,
        width: n.width - a * i,
        height: n.height - o * i
      };
    },
    polar: function(r, t, e) {
      var n = r.getItemLayout(t);
      return {
        cx: n.cx,
        cy: n.cy,
        r0: n.r0,
        r: n.r,
        startAngle: n.startAngle,
        endAngle: n.endAngle,
        clockwise: n.clockwise
      };
    }
  };
  function eA(r) {
    return r.startAngle != null && r.endAngle != null && r.startAngle === r.endAngle;
  }
  function r0(r) {
    return function(t) {
      var e = t ? "Arc" : "Angle";
      return function(n) {
        switch (n) {
          case "start":
          case "insideStart":
          case "end":
          case "insideEnd":
            return n + e;
          default:
            return n;
        }
      };
    }(r);
  }
  function n0(r, t, e, n, i, a, o, s) {
    var l = t.getItemVisual(e, "style");
    if (s) {
      if (!a.get("roundCap")) {
        var f = r.shape, h = $a(n.getModel("itemStyle"), f, !0);
        O(f, h), r.setShape(f);
      }
    } else {
      var u = n.get(["itemStyle", "borderRadius"]) || 0;
      r.setShape("r", u);
    }
    r.useStyle(l);
    var c = n.getShallow("cursor");
    c && r.attr("cursor", c);
    var v = s ? o ? i.r >= i.r0 ? "endArc" : "startArc" : i.endAngle >= i.startAngle ? "endAngle" : "startAngle" : o ? i.height >= 0 ? "bottom" : "top" : i.width >= 0 ? "right" : "left", d = ma(n);
    ya(r, d, {
      labelFetcher: a,
      labelDataIndex: e,
      defaultText: Vh(a.getData(), e),
      inheritColor: l.fill,
      defaultOpacity: l.opacity,
      defaultOutsidePosition: v
    });
    var g = r.getTextContent();
    if (s && g) {
      var p = n.get(["label", "position"]);
      r.textConfig.inside = p === "middle" ? !0 : null, $M(r, p === "outside" ? v : p, r0(o), n.get(["label", "rotate"]));
    }
    Mb(g, d, a.getRawValue(e), function(m) {
      return Km(t, m);
    });
    var y = n.getModel(["emphasis"]);
    fa(r, y.get("focus"), y.get("blurScope"), y.get("disabled")), Jo(r, n), eA(i) && (r.style.fill = "none", r.style.stroke = "none", M(r.states, function(m) {
      m.style && (m.style.fill = m.style.stroke = "none");
    }));
  }
  function rA(r, t) {
    var e = r.get(["itemStyle", "borderColor"]);
    if (!e || e === "none")
      return 0;
    var n = r.get(["itemStyle", "borderWidth"]) || 0, i = isNaN(t.width) ? Number.MAX_VALUE : Math.abs(t.width), a = isNaN(t.height) ? Number.MAX_VALUE : Math.abs(t.height);
    return Math.min(n, i, a);
  }
  var nA = (
    /** @class */
    function() {
      function r() {
      }
      return r;
    }()
  ), i0 = (
    /** @class */
    function(r) {
      k(t, r);
      function t(e) {
        var n = r.call(this, e) || this;
        return n.type = "largeBar", n;
      }
      return t.prototype.getDefaultShape = function() {
        return new nA();
      }, t.prototype.buildPath = function(e, n) {
        for (var i = n.points, a = this.baseDimIdx, o = 1 - this.baseDimIdx, s = [], l = [], u = this.barWidth, f = 0; f < i.length; f += 3)
          l[a] = u, l[o] = i[f + 2], s[a] = i[f + a], s[o] = i[f + o], e.rect(s[0], s[1], l[0], l[1]);
      }, t;
    }(ht)
  );
  function a0(r, t, e, n) {
    var i = r.getData(), a = i.getLayout("valueAxisHorizontal") ? 1 : 0, o = i.getLayout("largeDataIndices"), s = i.getLayout("size"), l = r.getModel("backgroundStyle"), u = i.getLayout("largeBackgroundPoints");
    if (u) {
      var f = new i0({
        shape: {
          points: u
        },
        incremental: !!n,
        silent: !0,
        z2: 0
      });
      f.baseDimIdx = a, f.largeDataIndices = o, f.barWidth = s, f.useStyle(l.getItemStyle()), t.add(f), e && e.push(f);
    }
    var h = new i0({
      shape: {
        points: i.getLayout("largePoints")
      },
      incremental: !!n,
      ignoreCoarsePointer: !0,
      z2: 1
    });
    h.baseDimIdx = a, h.largeDataIndices = o, h.barWidth = s, t.add(h), h.useStyle(i.getVisual("style")), st(h).seriesIndex = r.seriesIndex, r.get("silent") || (h.on("mousedown", o0), h.on("mousemove", o0)), e && e.push(h);
  }
  var o0 = Ns(function(r) {
    var t = this, e = iA(t, r.offsetX, r.offsetY);
    st(t).dataIndex = e >= 0 ? e : null;
  }, 30, !1);
  function iA(r, t, e) {
    for (var n = r.baseDimIdx, i = 1 - n, a = r.shape.points, o = r.largeDataIndices, s = [], l = [], u = r.barWidth, f = 0, h = a.length / 3; f < h; f++) {
      var c = f * 3;
      if (l[n] = u, l[i] = a[c + 2], s[n] = a[c + n], s[i] = a[c + i], l[i] < 0 && (s[i] += l[i], l[i] = -l[i]), t >= s[0] && t <= s[0] + l[0] && e >= s[1] && e <= s[1] + l[1])
        return o[f];
    }
    return -1;
  }
  function s0(r, t, e) {
    if (Hh(e, "cartesian2d")) {
      var n = t, i = e.getArea();
      return {
        x: r ? n.x : i.x,
        y: r ? i.y : n.y,
        width: r ? n.width : i.width,
        height: r ? i.height : n.height
      };
    } else {
      var i = e.getArea(), a = t;
      return {
        cx: i.cx,
        cy: i.cy,
        r0: r ? i.r0 : a.r0,
        r: r ? i.r : a.r,
        startAngle: r ? a.startAngle : 0,
        endAngle: r ? a.endAngle : Math.PI * 2
      };
    }
  }
  function aA(r, t, e) {
    var n = r.type === "polar" ? mr : At;
    return new n({
      shape: s0(t, e, r),
      silent: !0,
      z2: 0
    });
  }
  function oA(r) {
    r.registerChartView(QM), r.registerSeriesModel(YM), r.registerLayout(r.PRIORITY.VISUAL.LAYOUT, xt(TD, "bar")), r.registerLayout(r.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, CD("bar")), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, Xm("bar")), r.registerAction({
      type: "changeAxisOrder",
      event: "changeAxisOrder",
      update: "update"
    }, function(t, e) {
      var n = t.componentType || "series";
      e.eachComponent({
        mainType: n,
        query: t
      }, function(i) {
        t.sortInfo && i.axis.setCategorySortInfo(t.sortInfo);
      });
    });
  }
  ve(oA);
  var sA = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e.hasSymbolVisual = !0, e;
      }
      return t.prototype.getInitialData = function(e) {
        {
          var n = e.coordinateSystem;
          if (n !== "polar" && n !== "cartesian2d")
            throw new Error("Line not support coordinateSystem besides cartesian and polar");
        }
        return nl(null, this, {
          useEncodeDefaulter: !0
        });
      }, t.prototype.getLegendIcon = function(e) {
        var n = new Bt(), i = Nn("line", 0, e.itemHeight / 2, e.itemWidth, 0, e.lineStyle.stroke, !1);
        n.add(i), i.setStyle(e.lineStyle);
        var a = this.getData().getVisual("symbol"), o = this.getData().getVisual("symbolRotate"), s = a === "none" ? "circle" : a, l = e.itemHeight * 0.8, u = Nn(s, (e.itemWidth - l) / 2, (e.itemHeight - l) / 2, l, l, e.itemStyle.fill);
        n.add(u), u.setStyle(e.itemStyle);
        var f = e.iconRotate === "inherit" ? o : e.iconRotate || 0;
        return u.rotation = f * Math.PI / 180, u.setOrigin([e.itemWidth / 2, e.itemHeight / 2]), s.indexOf("empty") > -1 && (u.style.stroke = u.style.fill, u.style.fill = "#fff", u.style.lineWidth = 2), n;
      }, t.type = "series.line", t.dependencies = ["grid", "polar"], t.defaultOption = {
        // zlevel: 0,
        z: 3,
        coordinateSystem: "cartesian2d",
        legendHoverLink: !0,
        clip: !0,
        label: {
          position: "top"
        },
        // itemStyle: {
        // },
        endLabel: {
          show: !1,
          valueAnimation: !0,
          distance: 8
        },
        lineStyle: {
          width: 2,
          type: "solid"
        },
        emphasis: {
          scale: !0
        },
        // areaStyle: {
        // origin of areaStyle. Valid values:
        // `'auto'/null/undefined`: from axisLine to data
        // `'start'`: from min to data
        // `'end'`: from data to max
        // origin: 'auto'
        // },
        // false, 'start', 'end', 'middle'
        step: !1,
        // Disabled if step is true
        smooth: !1,
        smoothMonotone: null,
        symbol: "emptyCircle",
        symbolSize: 4,
        symbolRotate: null,
        showSymbol: !0,
        // `false`: follow the label interval strategy.
        // `true`: show all symbols.
        // `'auto'`: If possible, show all symbols, otherwise
        //           follow the label interval strategy.
        showAllSymbol: "auto",
        // Whether to connect break point.
        connectNulls: !1,
        // Sampling for large data. Can be: 'average', 'max', 'min', 'sum', 'lttb'.
        sampling: "none",
        animationEasing: "linear",
        // Disable progressive
        progressive: 0,
        hoverLayerThreshold: 1 / 0,
        universalTransition: {
          divideShape: "clone"
        },
        triggerLineEvent: !1
      }, t;
    }(ue)
  ), Yh = (
    /** @class */
    function(r) {
      k(t, r);
      function t(e, n, i, a) {
        var o = r.call(this) || this;
        return o.updateData(e, n, i, a), o;
      }
      return t.prototype._createSymbol = function(e, n, i, a, o) {
        this.removeAll();
        var s = Nn(e, -1, -1, 2, 2, null, o);
        s.attr({
          z2: 100,
          culling: !0,
          scaleX: a[0] / 2,
          scaleY: a[1] / 2
        }), s.drift = lA, this._symbolType = e, this.add(s);
      }, t.prototype.stopSymbolAnimation = function(e) {
        this.childAt(0).stopAnimation(null, e);
      }, t.prototype.getSymbolType = function() {
        return this._symbolType;
      }, t.prototype.getSymbolPath = function() {
        return this.childAt(0);
      }, t.prototype.highlight = function() {
        Ko(this.childAt(0));
      }, t.prototype.downplay = function() {
        Qo(this.childAt(0));
      }, t.prototype.setZ = function(e, n) {
        var i = this.childAt(0);
        i.zlevel = e, i.z = n;
      }, t.prototype.setDraggable = function(e, n) {
        var i = this.childAt(0);
        i.draggable = e, i.cursor = !n && e ? "move" : i.cursor;
      }, t.prototype.updateData = function(e, n, i, a) {
        this.silent = !1;
        var o = e.getItemVisual(n, "symbol") || "circle", s = e.hostModel, l = t.getSymbolSize(e, n), u = o !== this._symbolType, f = a && a.disableAnimation;
        if (u) {
          var h = e.getItemVisual(n, "symbolKeepAspect");
          this._createSymbol(o, e, n, l, h);
        } else {
          var c = this.childAt(0);
          c.silent = !1;
          var v = {
            scaleX: l[0] / 2,
            scaleY: l[1] / 2
          };
          f ? c.attr(v) : Ot(c, v, s, n), rf(c);
        }
        if (this._updateCommon(e, n, l, i, a), u) {
          var c = this.childAt(0);
          if (!f) {
            var v = {
              scaleX: this._sizeX,
              scaleY: this._sizeY,
              style: {
                // Always fadeIn. Because it has fadeOut animation when symbol is removed..
                opacity: c.style.opacity
              }
            };
            c.scaleX = c.scaleY = 0, c.style.opacity = 0, Yt(c, v, s, n);
          }
        }
        f && this.childAt(0).stopAnimation("leave");
      }, t.prototype._updateCommon = function(e, n, i, a, o) {
        var s = this.childAt(0), l = e.hostModel, u, f, h, c, v, d, g, p, y;
        if (a && (u = a.emphasisItemStyle, f = a.blurItemStyle, h = a.selectItemStyle, c = a.focus, v = a.blurScope, g = a.labelStatesModels, p = a.hoverScale, y = a.cursorStyle, d = a.emphasisDisabled), !a || e.hasItemOption) {
          var m = a && a.itemModel ? a.itemModel : e.getItemModel(n), _ = m.getModel("emphasis");
          u = _.getModel("itemStyle").getItemStyle(), h = m.getModel(["select", "itemStyle"]).getItemStyle(), f = m.getModel(["blur", "itemStyle"]).getItemStyle(), c = _.get("focus"), v = _.get("blurScope"), d = _.get("disabled"), g = ma(m), p = _.getShallow("scale"), y = m.getShallow("cursor");
        }
        var S = e.getItemVisual(n, "symbolRotate");
        s.attr("rotation", (S || 0) * Math.PI / 180 || 0);
        var b = Kg(e.getItemVisual(n, "symbolOffset"), i);
        b && (s.x = b[0], s.y = b[1]), y && s.attr("cursor", y);
        var w = e.getItemVisual(n, "style"), x = w.fill;
        if (s instanceof gr) {
          var T = s.style;
          s.useStyle(O({
            // TODO other properties like x, y ?
            image: T.image,
            x: T.x,
            y: T.y,
            width: T.width,
            height: T.height
          }, w));
        } else
          s.__isEmptyBrush ? s.useStyle(O({}, w)) : s.useStyle(w), s.style.decal = null, s.setColor(x, o && o.symbolInnerColor), s.style.strokeNoScale = !0;
        var D = e.getItemVisual(n, "liftZ"), A = this._z2;
        D != null ? A == null && (this._z2 = s.z2, s.z2 += D) : A != null && (s.z2 = A, this._z2 = null);
        var C = o && o.useNameLabel;
        ya(s, g, {
          labelFetcher: l,
          labelDataIndex: n,
          defaultText: L,
          inheritColor: x,
          defaultOpacity: w.opacity
        });
        function L(R) {
          return C ? e.getName(R) : Vh(e, R);
        }
        this._sizeX = i[0] / 2, this._sizeY = i[1] / 2;
        var P = s.ensureState("emphasis");
        P.style = u, s.ensureState("select").style = h, s.ensureState("blur").style = f;
        var I = p == null || p === !0 ? Math.max(1.1, 3 / this._sizeY) : isFinite(p) && p > 0 ? +p : 1;
        P.scaleX = this._sizeX * I, P.scaleY = this._sizeY * I, this.setSymbolScale(1), fa(this, c, v, d);
      }, t.prototype.setSymbolScale = function(e) {
        this.scaleX = this.scaleY = e;
      }, t.prototype.fadeOut = function(e, n, i) {
        var a = this.childAt(0), o = st(this).dataIndex, s = i && i.animation;
        if (this.silent = a.silent = !0, i && i.fadeLabel) {
          var l = a.getTextContent();
          l && fs(l, {
            style: {
              opacity: 0
            }
          }, n, {
            dataIndex: o,
            removeOpt: s,
            cb: function() {
              a.removeTextContent();
            }
          });
        } else
          a.removeTextContent();
        fs(a, {
          style: {
            opacity: 0
          },
          scaleX: 0,
          scaleY: 0
        }, n, {
          dataIndex: o,
          cb: e,
          removeOpt: s
        });
      }, t.getSymbolSize = function(e, n) {
        return tC(e.getItemVisual(n, "symbolSize"));
      }, t;
    }(Bt)
  );
  function lA(r, t) {
    this.parent.drift(r, t);
  }
  function Xh(r, t, e, n) {
    return t && !isNaN(t[0]) && !isNaN(t[1]) && !(n.isIgnore && n.isIgnore(e)) && !(n.clipShape && !n.clipShape.contain(t[0], t[1])) && r.getItemVisual(e, "symbol") !== "none";
  }
  function l0(r) {
    return r != null && !W(r) && (r = {
      isIgnore: r
    }), r || {};
  }
  function u0(r) {
    var t = r.hostModel, e = t.getModel("emphasis");
    return {
      emphasisItemStyle: e.getModel("itemStyle").getItemStyle(),
      blurItemStyle: t.getModel(["blur", "itemStyle"]).getItemStyle(),
      selectItemStyle: t.getModel(["select", "itemStyle"]).getItemStyle(),
      focus: e.get("focus"),
      blurScope: e.get("blurScope"),
      emphasisDisabled: e.get("disabled"),
      hoverScale: e.get("scale"),
      labelStatesModels: ma(t),
      cursorStyle: t.get("cursor")
    };
  }
  var uA = (
    /** @class */
    function() {
      function r(t) {
        this.group = new Bt(), this._SymbolCtor = t || Yh;
      }
      return r.prototype.updateData = function(t, e) {
        this._progressiveEls = null, e = l0(e);
        var n = this.group, i = t.hostModel, a = this._data, o = this._SymbolCtor, s = e.disableAnimation, l = u0(t), u = {
          disableAnimation: s
        }, f = e.getSymbolPoint || function(h) {
          return t.getItemLayout(h);
        };
        a || n.removeAll(), t.diff(a).add(function(h) {
          var c = f(h);
          if (Xh(t, c, h, e)) {
            var v = new o(t, h, l, u);
            v.setPosition(c), t.setItemGraphicEl(h, v), n.add(v);
          }
        }).update(function(h, c) {
          var v = a.getItemGraphicEl(c), d = f(h);
          if (!Xh(t, d, h, e)) {
            n.remove(v);
            return;
          }
          var g = t.getItemVisual(h, "symbol") || "circle", p = v && v.getSymbolType && v.getSymbolType();
          if (!v || p && p !== g)
            n.remove(v), v = new o(t, h, l, u), v.setPosition(d);
          else {
            v.updateData(t, h, l, u);
            var y = {
              x: d[0],
              y: d[1]
            };
            s ? v.attr(y) : Ot(v, y, i);
          }
          n.add(v), t.setItemGraphicEl(h, v);
        }).remove(function(h) {
          var c = a.getItemGraphicEl(h);
          c && c.fadeOut(function() {
            n.remove(c);
          }, i);
        }).execute(), this._getSymbolPoint = f, this._data = t;
      }, r.prototype.updateLayout = function() {
        var t = this, e = this._data;
        e && e.eachItemGraphicEl(function(n, i) {
          var a = t._getSymbolPoint(i);
          n.setPosition(a), n.markRedraw();
        });
      }, r.prototype.incrementalPrepareUpdate = function(t) {
        this._seriesScope = u0(t), this._data = null, this.group.removeAll();
      }, r.prototype.incrementalUpdate = function(t, e, n) {
        this._progressiveEls = [], n = l0(n);
        function i(l) {
          l.isGroup || (l.incremental = !0, l.ensureState("emphasis").hoverLayer = !0);
        }
        for (var a = t.start; a < t.end; a++) {
          var o = e.getItemLayout(a);
          if (Xh(e, o, a, n)) {
            var s = new this._SymbolCtor(e, a, this._seriesScope);
            s.traverse(i), s.setPosition(o), this.group.add(s), e.setItemGraphicEl(a, s), this._progressiveEls.push(s);
          }
        }
      }, r.prototype.eachRendered = function(t) {
        gs(this._progressiveEls || this.group, t);
      }, r.prototype.remove = function(t) {
        var e = this.group, n = this._data;
        n && t ? n.eachItemGraphicEl(function(i) {
          i.fadeOut(function() {
            e.remove(i);
          }, n.hostModel);
        }) : e.removeAll();
      }, r;
    }()
  );
  function f0(r, t, e) {
    var n = r.getBaseAxis(), i = r.getOtherAxis(n), a = fA(i, e), o = n.dim, s = i.dim, l = t.mapDimension(s), u = t.mapDimension(o), f = s === "x" || s === "radius" ? 1 : 0, h = V(r.dimensions, function(d) {
      return t.mapDimension(d);
    }), c = !1, v = t.getCalculationInfo("stackResultDimension");
    return Vn(
      t,
      h[0]
      /* , dims[1] */
    ) && (c = !0, h[0] = v), Vn(
      t,
      h[1]
      /* , dims[0] */
    ) && (c = !0, h[1] = v), {
      dataDimsForPoint: h,
      valueStart: a,
      valueAxisDim: s,
      baseAxisDim: o,
      stacked: !!c,
      valueDim: l,
      baseDim: u,
      baseDataOffset: f,
      stackedOverDimension: t.getCalculationInfo("stackedOverDimension")
    };
  }
  function fA(r, t) {
    var e = 0, n = r.scale.getExtent();
    return t === "start" ? e = n[0] : t === "end" ? e = n[1] : pt(t) && !isNaN(t) ? e = t : n[0] > 0 ? e = n[0] : n[1] < 0 && (e = n[1]), e;
  }
  function h0(r, t, e, n) {
    var i = NaN;
    r.stacked && (i = e.get(e.getCalculationInfo("stackedOverDimension"), n)), isNaN(i) && (i = r.valueStart);
    var a = r.baseDataOffset, o = [];
    return o[a] = e.get(r.baseDim, n), o[1 - a] = i, t.dataToPoint(o);
  }
  function hA(r, t) {
    var e = [];
    return t.diff(r).add(function(n) {
      e.push({
        cmd: "+",
        idx: n
      });
    }).update(function(n, i) {
      e.push({
        cmd: "=",
        idx: i,
        idx1: n
      });
    }).remove(function(n) {
      e.push({
        cmd: "-",
        idx: n
      });
    }).execute(), e;
  }
  function vA(r, t, e, n, i, a, o, s) {
    for (var l = hA(r, t), u = [], f = [], h = [], c = [], v = [], d = [], g = [], p = f0(i, t, o), y = r.getLayout("points") || [], m = t.getLayout("points") || [], _ = 0; _ < l.length; _++) {
      var S = l[_], b = !0, w = void 0, x = void 0;
      switch (S.cmd) {
        case "=":
          w = S.idx * 2, x = S.idx1 * 2;
          var T = y[w], D = y[w + 1], A = m[x], C = m[x + 1];
          (isNaN(T) || isNaN(D)) && (T = A, D = C), u.push(T, D), f.push(A, C), h.push(e[w], e[w + 1]), c.push(n[x], n[x + 1]), g.push(t.getRawIndex(S.idx1));
          break;
        case "+":
          var L = S.idx, P = p.dataDimsForPoint, I = i.dataToPoint([t.get(P[0], L), t.get(P[1], L)]);
          x = L * 2, u.push(I[0], I[1]), f.push(m[x], m[x + 1]);
          var R = h0(p, i, t, L);
          h.push(R[0], R[1]), c.push(n[x], n[x + 1]), g.push(t.getRawIndex(L));
          break;
        case "-":
          b = !1;
      }
      b && (v.push(S), d.push(d.length));
    }
    d.sort(function(Nt, _t) {
      return g[Nt] - g[_t];
    });
    for (var E = u.length, Y = xr(E), B = xr(E), N = xr(E), U = xr(E), K = [], _ = 0; _ < d.length; _++) {
      var $ = d[_], rt = _ * 2, vt = $ * 2;
      Y[rt] = u[vt], Y[rt + 1] = u[vt + 1], B[rt] = f[vt], B[rt + 1] = f[vt + 1], N[rt] = h[vt], N[rt + 1] = h[vt + 1], U[rt] = c[vt], U[rt + 1] = c[vt + 1], K[_] = v[$];
    }
    return {
      current: Y,
      next: B,
      stackedOnCurrent: N,
      stackedOnNext: U,
      status: K
    };
  }
  var Xr = Math.min, qr = Math.max;
  function Xn(r, t) {
    return isNaN(r) || isNaN(t);
  }
  function qh(r, t, e, n, i, a, o, s, l) {
    for (var u, f, h, c, v, d, g = e, p = 0; p < n; p++) {
      var y = t[g * 2], m = t[g * 2 + 1];
      if (g >= i || g < 0)
        break;
      if (Xn(y, m)) {
        if (l) {
          g += a;
          continue;
        }
        break;
      }
      if (g === e)
        r[a > 0 ? "moveTo" : "lineTo"](y, m), h = y, c = m;
      else {
        var _ = y - u, S = m - f;
        if (_ * _ + S * S < 0.5) {
          g += a;
          continue;
        }
        if (o > 0) {
          for (var b = g + a, w = t[b * 2], x = t[b * 2 + 1]; w === y && x === m && p < n; )
            p++, b += a, g += a, w = t[b * 2], x = t[b * 2 + 1], y = t[g * 2], m = t[g * 2 + 1], _ = y - u, S = m - f;
          var T = p + 1;
          if (l)
            for (; Xn(w, x) && T < n; )
              T++, b += a, w = t[b * 2], x = t[b * 2 + 1];
          var D = 0.5, A = 0, C = 0, L = void 0, P = void 0;
          if (T >= n || Xn(w, x))
            v = y, d = m;
          else {
            A = w - u, C = x - f;
            var I = y - u, R = w - y, E = m - f, Y = x - m, B = void 0, N = void 0;
            if (s === "x") {
              B = Math.abs(I), N = Math.abs(R);
              var U = A > 0 ? 1 : -1;
              v = y - U * B * o, d = m, L = y + U * N * o, P = m;
            } else if (s === "y") {
              B = Math.abs(E), N = Math.abs(Y);
              var K = C > 0 ? 1 : -1;
              v = y, d = m - K * B * o, L = y, P = m + K * N * o;
            } else
              B = Math.sqrt(I * I + E * E), N = Math.sqrt(R * R + Y * Y), D = N / (N + B), v = y - A * o * (1 - D), d = m - C * o * (1 - D), L = y + A * o * D, P = m + C * o * D, L = Xr(L, qr(w, y)), P = Xr(P, qr(x, m)), L = qr(L, Xr(w, y)), P = qr(P, Xr(x, m)), A = L - y, C = P - m, v = y - A * B / N, d = m - C * B / N, v = Xr(v, qr(u, y)), d = Xr(d, qr(f, m)), v = qr(v, Xr(u, y)), d = qr(d, Xr(f, m)), A = y - v, C = m - d, L = y + A * N / B, P = m + C * N / B;
          }
          r.bezierCurveTo(h, c, v, d, y, m), h = L, c = P;
        } else
          r.lineTo(y, m);
      }
      u = y, f = m, g += a;
    }
    return p;
  }
  var v0 = (
    /** @class */
    function() {
      function r() {
        this.smooth = 0, this.smoothConstraint = !0;
      }
      return r;
    }()
  ), cA = (
    /** @class */
    function(r) {
      k(t, r);
      function t(e) {
        var n = r.call(this, e) || this;
        return n.type = "ec-polyline", n;
      }
      return t.prototype.getDefaultStyle = function() {
        return {
          stroke: "#000",
          fill: null
        };
      }, t.prototype.getDefaultShape = function() {
        return new v0();
      }, t.prototype.buildPath = function(e, n) {
        var i = n.points, a = 0, o = i.length / 2;
        if (n.connectNulls) {
          for (; o > 0 && Xn(i[o * 2 - 2], i[o * 2 - 1]); o--)
            ;
          for (; a < o && Xn(i[a * 2], i[a * 2 + 1]); a++)
            ;
        }
        for (; a < o; )
          a += qh(e, i, a, o, o, 1, n.smooth, n.smoothMonotone, n.connectNulls) + 1;
      }, t.prototype.getPointOn = function(e, n) {
        this.path || (this.createPathProxy(), this.buildPath(this.path, this.shape));
        for (var i = this.path, a = i.data, o = zr.CMD, s, l, u = n === "x", f = [], h = 0; h < a.length; ) {
          var c = a[h++], v = void 0, d = void 0, g = void 0, p = void 0, y = void 0, m = void 0, _ = void 0;
          switch (c) {
            case o.M:
              s = a[h++], l = a[h++];
              break;
            case o.L:
              if (v = a[h++], d = a[h++], _ = u ? (e - s) / (v - s) : (e - l) / (d - l), _ <= 1 && _ >= 0) {
                var S = u ? (d - l) * _ + l : (v - s) * _ + s;
                return u ? [e, S] : [S, e];
              }
              s = v, l = d;
              break;
            case o.C:
              v = a[h++], d = a[h++], g = a[h++], p = a[h++], y = a[h++], m = a[h++];
              var b = u ? mo(s, v, g, y, e, f) : mo(l, d, p, m, e, f);
              if (b > 0)
                for (var w = 0; w < b; w++) {
                  var x = f[w];
                  if (x <= 1 && x >= 0) {
                    var S = u ? Et(l, d, p, m, x) : Et(s, v, g, y, x);
                    return u ? [e, S] : [S, e];
                  }
                }
              s = y, l = m;
              break;
          }
        }
      }, t;
    }(ht)
  ), dA = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }
      return t;
    }(v0)
  ), pA = (
    /** @class */
    function(r) {
      k(t, r);
      function t(e) {
        var n = r.call(this, e) || this;
        return n.type = "ec-polygon", n;
      }
      return t.prototype.getDefaultShape = function() {
        return new dA();
      }, t.prototype.buildPath = function(e, n) {
        var i = n.points, a = n.stackedOnPoints, o = 0, s = i.length / 2, l = n.smoothMonotone;
        if (n.connectNulls) {
          for (; s > 0 && Xn(i[s * 2 - 2], i[s * 2 - 1]); s--)
            ;
          for (; o < s && Xn(i[o * 2], i[o * 2 + 1]); o++)
            ;
        }
        for (; o < s; ) {
          var u = qh(e, i, o, s, s, 1, n.smooth, l, n.connectNulls);
          qh(e, a, o + u - 1, u, s, -1, n.stackedOnSmooth, l, n.connectNulls), o += u + 1, e.closePath();
        }
      }, t;
    }(ht)
  );
  function c0(r, t) {
    if (r.length === t.length) {
      for (var e = 0; e < r.length; e++)
        if (r[e] !== t[e])
          return;
      return !0;
    }
  }
  function d0(r) {
    for (var t = 1 / 0, e = 1 / 0, n = -1 / 0, i = -1 / 0, a = 0; a < r.length; ) {
      var o = r[a++], s = r[a++];
      isNaN(o) || (t = Math.min(o, t), n = Math.max(o, n)), isNaN(s) || (e = Math.min(s, e), i = Math.max(s, i));
    }
    return [[t, e], [n, i]];
  }
  function p0(r, t) {
    var e = d0(r), n = e[0], i = e[1], a = d0(t), o = a[0], s = a[1];
    return Math.max(Math.abs(n[0] - o[0]), Math.abs(n[1] - o[1]), Math.abs(i[0] - s[0]), Math.abs(i[1] - s[1]));
  }
  function g0(r) {
    return pt(r) ? r : r ? 0.5 : 0;
  }
  function gA(r, t, e) {
    if (!e.valueDim)
      return [];
    for (var n = t.count(), i = xr(n * 2), a = 0; a < n; a++) {
      var o = h0(e, r, t, a);
      i[a * 2] = o[0], i[a * 2 + 1] = o[1];
    }
    return i;
  }
  function Zr(r, t, e, n) {
    var i = t.getBaseAxis(), a = i.dim === "x" || i.dim === "radius" ? 0 : 1, o = [], s = 0, l = [], u = [], f = [], h = [];
    if (n) {
      for (s = 0; s < r.length; s += 2)
        !isNaN(r[s]) && !isNaN(r[s + 1]) && h.push(r[s], r[s + 1]);
      r = h;
    }
    for (s = 0; s < r.length - 2; s += 2)
      switch (f[0] = r[s + 2], f[1] = r[s + 3], u[0] = r[s], u[1] = r[s + 1], o.push(u[0], u[1]), e) {
        case "end":
          l[a] = f[a], l[1 - a] = u[1 - a], o.push(l[0], l[1]);
          break;
        case "middle":
          var c = (u[a] + f[a]) / 2, v = [];
          l[a] = v[a] = c, l[1 - a] = u[1 - a], v[1 - a] = f[1 - a], o.push(l[0], l[1]), o.push(v[0], v[1]);
          break;
        default:
          l[a] = u[a], l[1 - a] = f[1 - a], o.push(l[0], l[1]);
      }
    return o.push(r[s++], r[s++]), o;
  }
  function yA(r, t) {
    var e = [], n = r.length, i, a;
    function o(f, h, c) {
      var v = f.coord, d = (c - v) / (h.coord - v), g = Kl(d, [f.color, h.color]);
      return {
        coord: c,
        color: g
      };
    }
    for (var s = 0; s < n; s++) {
      var l = r[s], u = l.coord;
      if (u < 0)
        i = l;
      else if (u > t) {
        a ? e.push(o(a, l, t)) : i && e.push(o(i, l, 0), o(i, l, t));
        break;
      } else
        i && (e.push(o(i, l, 0)), i = null), e.push(l), a = l;
    }
    return e;
  }
  function mA(r, t, e) {
    var n = r.getVisual("visualMeta");
    if (!(!n || !n.length || !r.count())) {
      if (t.type !== "cartesian2d") {
        console.warn("Visual map on line style is only supported on cartesian2d.");
        return;
      }
      for (var i, a, o = n.length - 1; o >= 0; o--) {
        var s = r.getDimensionInfo(n[o].dimension);
        if (i = s && s.coordDim, i === "x" || i === "y") {
          a = n[o];
          break;
        }
      }
      if (!a) {
        console.warn("Visual map on line style only support x or y dimension.");
        return;
      }
      var l = t.getAxis(i), u = V(a.stops, function(_) {
        return {
          coord: l.toGlobalCoord(l.dataToCoord(_.value)),
          color: _.color
        };
      }), f = u.length, h = a.outerColors.slice();
      f && u[0].coord > u[f - 1].coord && (u.reverse(), h.reverse());
      var c = yA(u, i === "x" ? e.getWidth() : e.getHeight()), v = c.length;
      if (!v && f)
        return u[0].coord < 0 ? h[1] ? h[1] : u[f - 1].color : h[0] ? h[0] : u[0].color;
      var d = 10, g = c[0].coord - d, p = c[v - 1].coord + d, y = p - g;
      if (y < 1e-3)
        return "transparent";
      M(c, function(_) {
        _.offset = (_.coord - g) / y;
      }), c.push({
        // NOTE: inRangeStopLen may still be 0 if stoplen is zero.
        offset: v ? c[v - 1].offset : 0.5,
        color: h[1] || "transparent"
      }), c.unshift({
        offset: v ? c[0].offset : 0.5,
        color: h[0] || "transparent"
      });
      var m = new tf(0, 0, 0, 0, c, !0);
      return m[i] = g, m[i + "2"] = p, m;
    }
  }
  function _A(r, t, e) {
    var n = r.get("showAllSymbol"), i = n === "auto";
    if (!(n && !i)) {
      var a = e.getAxesByScale("ordinal")[0];
      if (a && !(i && SA(a, t))) {
        var o = t.mapDimension(a.dim), s = {};
        return M(a.getViewLabels(), function(l) {
          var u = a.scale.getRawOrdinalNumber(l.tickValue);
          s[u] = 1;
        }), function(l) {
          return !s.hasOwnProperty(t.get(o, l));
        };
      }
    }
  }
  function SA(r, t) {
    var e = r.getExtent(), n = Math.abs(e[1] - e[0]) / r.scale.count();
    isNaN(n) && (n = 0);
    for (var i = t.count(), a = Math.max(1, Math.round(i / 5)), o = 0; o < i; o += a)
      if (Yh.getSymbolSize(
        t,
        o
        // Only for cartesian, where `isHorizontal` exists.
      )[r.isHorizontal() ? 1 : 0] * 1.5 > n)
        return !1;
    return !0;
  }
  function wA(r, t) {
    return isNaN(r) || isNaN(t);
  }
  function bA(r) {
    for (var t = r.length / 2; t > 0 && wA(r[t * 2 - 2], r[t * 2 - 1]); t--)
      ;
    return t - 1;
  }
  function y0(r, t) {
    return [r[t * 2], r[t * 2 + 1]];
  }
  function xA(r, t, e) {
    for (var n = r.length / 2, i = e === "x" ? 0 : 1, a, o, s = 0, l = -1, u = 0; u < n; u++)
      if (o = r[u * 2 + i], !(isNaN(o) || isNaN(r[u * 2 + 1 - i]))) {
        if (u === 0) {
          a = o;
          continue;
        }
        if (a <= t && o >= t || a >= t && o <= t) {
          l = u;
          break;
        }
        s = u, a = o;
      }
    return {
      range: [s, l],
      t: (t - a) / (o - a)
    };
  }
  function m0(r) {
    if (r.get(["endLabel", "show"]))
      return !0;
    for (var t = 0; t < Ie.length; t++)
      if (r.get([Ie[t], "endLabel", "show"]))
        return !0;
    return !1;
  }
  function Zh(r, t, e, n) {
    if (Hh(t, "cartesian2d")) {
      var i = n.getModel("endLabel"), a = i.get("valueAnimation"), o = n.getData(), s = {
        lastFrameIndex: 0
      }, l = m0(n) ? function(v, d) {
        r._endLabelOnDuring(v, d, o, s, a, i, t);
      } : null, u = t.getBaseAxis().isHorizontal(), f = qm(t, e, n, function() {
        var v = r._endLabel;
        v && e && s.originalX != null && v.attr({
          x: s.originalX,
          y: s.originalY
        });
      }, l);
      if (!n.get("clip", !0)) {
        var h = f.shape, c = Math.max(h.width, h.height);
        u ? (h.y -= c, h.height += c * 2) : (h.x -= c, h.width += c * 2);
      }
      return l && l(1, f), f;
    } else
      return n.get(["endLabel", "show"]) && console.warn("endLabel is not supported for lines in polar systems."), Zm(t, e, n);
  }
  function TA(r, t) {
    var e = t.getBaseAxis(), n = e.isHorizontal(), i = e.inverse, a = n ? i ? "right" : "left" : "center", o = n ? "middle" : i ? "top" : "bottom";
    return {
      normal: {
        align: r.get("align") || a,
        verticalAlign: r.get("verticalAlign") || o
      }
    };
  }
  var CA = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }
      return t.prototype.init = function() {
        var e = new Bt(), n = new uA();
        this.group.add(n.group), this._symbolDraw = n, this._lineGroup = e;
      }, t.prototype.render = function(e, n, i) {
        var a = this, o = e.coordinateSystem, s = this.group, l = e.getData(), u = e.getModel("lineStyle"), f = e.getModel("areaStyle"), h = l.getLayout("points") || [], c = o.type === "polar", v = this._coordSys, d = this._symbolDraw, g = this._polyline, p = this._polygon, y = this._lineGroup, m = !n.ssr && e.isAnimationEnabled(), _ = !f.isEmpty(), S = f.get("origin"), b = f0(o, l, S), w = _ && gA(o, l, b), x = e.get("showSymbol"), T = e.get("connectNulls"), D = x && !c && _A(e, l, o), A = this._data;
        A && A.eachItemGraphicEl(function(_t, ce) {
          _t.__temp && (s.remove(_t), A.setItemGraphicEl(ce, null));
        }), x || d.remove(), s.add(y);
        var C = c ? !1 : e.get("step"), L;
        o && o.getArea && e.get("clip", !0) && (L = o.getArea(), L.width != null ? (L.x -= 0.1, L.y -= 0.1, L.width += 0.2, L.height += 0.2) : L.r0 && (L.r0 -= 0.5, L.r += 0.5)), this._clipShapeForSymbol = L;
        var P = mA(l, o, i) || l.getVisual("style")[l.getVisual("drawType")];
        if (!(g && v.type === o.type && C === this._step))
          x && d.updateData(l, {
            isIgnore: D,
            clipShape: L,
            disableAnimation: !0,
            getSymbolPoint: function(_t) {
              return [h[_t * 2], h[_t * 2 + 1]];
            }
          }), m && this._initSymbolLabelAnimation(l, o, L), C && (h = Zr(h, o, C, T), w && (w = Zr(w, o, C, T))), g = this._newPolyline(h), _ ? p = this._newPolygon(h, w) : p && (y.remove(p), p = this._polygon = null), c || this._initOrUpdateEndLabel(e, o, Rn(P)), y.setClipPath(Zh(this, o, !0, e));
        else {
          _ && !p ? p = this._newPolygon(h, w) : p && !_ && (y.remove(p), p = this._polygon = null), c || this._initOrUpdateEndLabel(e, o, Rn(P));
          var I = y.getClipPath();
          if (I) {
            var R = Zh(this, o, !1, e);
            Yt(I, {
              shape: R.shape
            }, e);
          } else
            y.setClipPath(Zh(this, o, !0, e));
          x && d.updateData(l, {
            isIgnore: D,
            clipShape: L,
            disableAnimation: !0,
            getSymbolPoint: function(_t) {
              return [h[_t * 2], h[_t * 2 + 1]];
            }
          }), (!c0(this._stackedOnPoints, w) || !c0(this._points, h)) && (m ? this._doUpdateAnimation(l, w, o, i, C, S, T) : (C && (h = Zr(h, o, C, T), w && (w = Zr(w, o, C, T))), g.setShape({
            points: h
          }), p && p.setShape({
            points: h,
            stackedOnPoints: w
          })));
        }
        var E = e.getModel("emphasis"), Y = E.get("focus"), B = E.get("blurScope"), N = E.get("disabled");
        if (g.useStyle(lt(
          // Use color in lineStyle first
          u.getLineStyle(),
          {
            fill: "none",
            stroke: P,
            lineJoin: "bevel"
          }
        )), Jo(g, e, "lineStyle"), g.style.lineWidth > 0 && e.get(["emphasis", "lineStyle", "width"]) === "bolder") {
          var U = g.getState("emphasis").style;
          U.lineWidth = +g.style.lineWidth + 1;
        }
        st(g).seriesIndex = e.seriesIndex, fa(g, Y, B, N);
        var K = g0(e.get("smooth")), $ = e.get("smoothMonotone");
        if (g.setShape({
          smooth: K,
          smoothMonotone: $,
          connectNulls: T
        }), p) {
          var rt = l.getCalculationInfo("stackedOnSeries"), vt = 0;
          p.useStyle(lt(f.getAreaStyle(), {
            fill: P,
            opacity: 0.7,
            lineJoin: "bevel",
            decal: l.getVisual("style").decal
          })), rt && (vt = g0(rt.get("smooth"))), p.setShape({
            smooth: K,
            stackedOnSmooth: vt,
            smoothMonotone: $,
            connectNulls: T
          }), Jo(p, e, "areaStyle"), st(p).seriesIndex = e.seriesIndex, fa(p, Y, B, N);
        }
        var Nt = function(_t) {
          a._changePolyState(_t);
        };
        l.eachItemGraphicEl(function(_t) {
          _t && (_t.onHoverStateChange = Nt);
        }), this._polyline.onHoverStateChange = Nt, this._data = l, this._coordSys = o, this._stackedOnPoints = w, this._points = h, this._step = C, this._valueOrigin = S, e.get("triggerLineEvent") && (this.packEventData(e, g), p && this.packEventData(e, p));
      }, t.prototype.packEventData = function(e, n) {
        st(n).eventData = {
          componentType: "series",
          componentSubType: "line",
          componentIndex: e.componentIndex,
          seriesIndex: e.seriesIndex,
          seriesName: e.name,
          seriesType: "line"
        };
      }, t.prototype.highlight = function(e, n, i, a) {
        var o = e.getData(), s = mn(o, a);
        if (this._changePolyState("emphasis"), !(s instanceof Array) && s != null && s >= 0) {
          var l = o.getLayout("points"), u = o.getItemGraphicEl(s);
          if (!u) {
            var f = l[s * 2], h = l[s * 2 + 1];
            if (isNaN(f) || isNaN(h) || this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(f, h))
              return;
            var c = e.get("zlevel") || 0, v = e.get("z") || 0;
            u = new Yh(o, s), u.x = f, u.y = h, u.setZ(c, v);
            var d = u.getSymbolPath().getTextContent();
            d && (d.zlevel = c, d.z = v, d.z2 = this._polyline.z2 + 1), u.__temp = !0, o.setItemGraphicEl(s, u), u.stopSymbolAnimation(!0), this.group.add(u);
          }
          u.highlight();
        } else
          re.prototype.highlight.call(this, e, n, i, a);
      }, t.prototype.downplay = function(e, n, i, a) {
        var o = e.getData(), s = mn(o, a);
        if (this._changePolyState("normal"), s != null && s >= 0) {
          var l = o.getItemGraphicEl(s);
          l && (l.__temp ? (o.setItemGraphicEl(s, null), this.group.remove(l)) : l.downplay());
        } else
          re.prototype.downplay.call(this, e, n, i, a);
      }, t.prototype._changePolyState = function(e) {
        var n = this._polygon;
        Cd(this._polyline, e), n && Cd(n, e);
      }, t.prototype._newPolyline = function(e) {
        var n = this._polyline;
        return n && this._lineGroup.remove(n), n = new cA({
          shape: {
            points: e
          },
          segmentIgnoreThreshold: 2,
          z2: 10
        }), this._lineGroup.add(n), this._polyline = n, n;
      }, t.prototype._newPolygon = function(e, n) {
        var i = this._polygon;
        return i && this._lineGroup.remove(i), i = new pA({
          shape: {
            points: e,
            stackedOnPoints: n
          },
          segmentIgnoreThreshold: 2
        }), this._lineGroup.add(i), this._polygon = i, i;
      }, t.prototype._initSymbolLabelAnimation = function(e, n, i) {
        var a, o, s = n.getBaseAxis(), l = s.inverse;
        n.type === "cartesian2d" ? (a = s.isHorizontal(), o = !1) : n.type === "polar" && (a = s.dim === "angle", o = !0);
        var u = e.hostModel, f = u.get("animationDuration");
        X(f) && (f = f(null));
        var h = u.get("animationDelay") || 0, c = X(h) ? h(null) : h;
        e.eachItemGraphicEl(function(v, d) {
          var g = v;
          if (g) {
            var p = [v.x, v.y], y = void 0, m = void 0, _ = void 0;
            if (i)
              if (o) {
                var S = i, b = n.pointToCoord(p);
                a ? (y = S.startAngle, m = S.endAngle, _ = -b[1] / 180 * Math.PI) : (y = S.r0, m = S.r, _ = b[0]);
              } else {
                var w = i;
                a ? (y = w.x, m = w.x + w.width, _ = v.x) : (y = w.y + w.height, m = w.y, _ = v.y);
              }
            var x = m === y ? 0 : (_ - y) / (m - y);
            l && (x = 1 - x);
            var T = X(h) ? h(d) : f * x + c, D = g.getSymbolPath(), A = D.getTextContent();
            g.attr({
              scaleX: 0,
              scaleY: 0
            }), g.animateTo({
              scaleX: 1,
              scaleY: 1
            }, {
              duration: 200,
              setToFinal: !0,
              delay: T
            }), A && A.animateFrom({
              style: {
                opacity: 0
              }
            }, {
              duration: 300,
              delay: T
            }), D.disableLabelAnimation = !0;
          }
        });
      }, t.prototype._initOrUpdateEndLabel = function(e, n, i) {
        var a = e.getModel("endLabel");
        if (m0(e)) {
          var o = e.getData(), s = this._polyline, l = o.getLayout("points");
          if (!l) {
            s.removeTextContent(), this._endLabel = null;
            return;
          }
          var u = this._endLabel;
          u || (u = this._endLabel = new kt({
            z2: 200
            // should be higher than item symbol
          }), u.ignoreClip = !0, s.setTextContent(this._endLabel), s.disableLabelAnimation = !0);
          var f = bA(l);
          f >= 0 && (ya(s, ma(e, "endLabel"), {
            inheritColor: i,
            labelFetcher: e,
            labelDataIndex: f,
            defaultText: function(h, c, v) {
              return v != null ? Km(o, v) : Vh(o, h);
            },
            enableTextSetter: !0
          }, TA(a, n)), s.textConfig.position = null);
        } else
          this._endLabel && (this._polyline.removeTextContent(), this._endLabel = null);
      }, t.prototype._endLabelOnDuring = function(e, n, i, a, o, s, l) {
        var u = this._endLabel, f = this._polyline;
        if (u) {
          e < 1 && a.originalX == null && (a.originalX = u.x, a.originalY = u.y);
          var h = i.getLayout("points"), c = i.hostModel, v = c.get("connectNulls"), d = s.get("precision"), g = s.get("distance") || 0, p = l.getBaseAxis(), y = p.isHorizontal(), m = p.inverse, _ = n.shape, S = m ? y ? _.x : _.y + _.height : y ? _.x + _.width : _.y, b = (y ? g : 0) * (m ? -1 : 1), w = (y ? 0 : -g) * (m ? -1 : 1), x = y ? "x" : "y", T = xA(h, S, x), D = T.range, A = D[1] - D[0], C = void 0;
          if (A >= 1) {
            if (A > 1 && !v) {
              var L = y0(h, D[0]);
              u.attr({
                x: L[0] + b,
                y: L[1] + w
              }), o && (C = c.getRawValue(D[0]));
            } else {
              var L = f.getPointOn(S, x);
              L && u.attr({
                x: L[0] + b,
                y: L[1] + w
              });
              var P = c.getRawValue(D[0]), I = c.getRawValue(D[1]);
              o && (C = Vc(i, d, P, I, T.t));
            }
            a.lastFrameIndex = D[0];
          } else {
            var R = e === 1 || a.lastFrameIndex > 0 ? D[0] : 0, L = y0(h, R);
            o && (C = c.getRawValue(R)), u.attr({
              x: L[0] + b,
              y: L[1] + w
            });
          }
          o && yi(u).setLabelText(C);
        }
      }, t.prototype._doUpdateAnimation = function(e, n, i, a, o, s, l) {
        var u = this._polyline, f = this._polygon, h = e.hostModel, c = vA(this._data, e, this._stackedOnPoints, n, this._coordSys, i, this._valueOrigin), v = c.current, d = c.stackedOnCurrent, g = c.next, p = c.stackedOnNext;
        if (o && (v = Zr(c.current, i, o, l), d = Zr(c.stackedOnCurrent, i, o, l), g = Zr(c.next, i, o, l), p = Zr(c.stackedOnNext, i, o, l)), p0(v, g) > 3e3 || f && p0(d, p) > 3e3) {
          u.stopAnimation(), u.setShape({
            points: g
          }), f && (f.stopAnimation(), f.setShape({
            points: g,
            stackedOnPoints: p
          }));
          return;
        }
        u.shape.__points = c.current, u.shape.points = v;
        var y = {
          shape: {
            points: g
          }
        };
        c.current !== v && (y.shape.__points = c.next), u.stopAnimation(), Ot(u, y, h), f && (f.setShape({
          // Reuse the points with polyline.
          points: v,
          stackedOnPoints: d
        }), f.stopAnimation(), Ot(f, {
          shape: {
            stackedOnPoints: p
          }
        }, h), u.shape.points !== f.shape.points && (f.shape.points = u.shape.points));
        for (var m = [], _ = c.status, S = 0; S < _.length; S++) {
          var b = _[S].cmd;
          if (b === "=") {
            var w = e.getItemGraphicEl(_[S].idx1);
            w && m.push({
              el: w,
              ptIdx: S
              // Index of points
            });
          }
        }
        u.animators && u.animators.length && u.animators[0].during(function() {
          f && f.dirtyShape();
          for (var x = u.shape.__points, T = 0; T < m.length; T++) {
            var D = m[T].el, A = m[T].ptIdx * 2;
            D.x = x[A], D.y = x[A + 1], D.markRedraw();
          }
        });
      }, t.prototype.remove = function(e) {
        var n = this.group, i = this._data;
        this._lineGroup.removeAll(), this._symbolDraw.remove(!0), i && i.eachItemGraphicEl(function(a, o) {
          a.__temp && (n.remove(a), i.setItemGraphicEl(o, null));
        }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._endLabel = this._data = null;
      }, t.type = "line", t;
    }(re)
  );
  function DA(r, t) {
    return {
      seriesType: r,
      plan: Xf(),
      reset: function(e) {
        var n = e.getData(), i = e.coordinateSystem, a = e.pipelineContext, o = t || a.large;
        if (i) {
          var s = V(i.dimensions, function(v) {
            return n.mapDimension(v);
          }).slice(0, 2), l = s.length, u = n.getCalculationInfo("stackResultDimension");
          Vn(n, s[0]) && (s[0] = u), Vn(n, s[1]) && (s[1] = u);
          var f = n.getStore(), h = n.getDimensionIndex(s[0]), c = n.getDimensionIndex(s[1]);
          return l && {
            progress: function(v, d) {
              for (var g = v.end - v.start, p = o && xr(g * l), y = [], m = [], _ = v.start, S = 0; _ < v.end; _++) {
                var b = void 0;
                if (l === 1) {
                  var w = f.get(h, _);
                  b = i.dataToPoint(w, null, m);
                } else
                  y[0] = f.get(h, _), y[1] = f.get(c, _), b = i.dataToPoint(y, null, m);
                o ? (p[S++] = b[0], p[S++] = b[1]) : d.setItemLayout(_, b.slice());
              }
              o && d.setLayout("points", p);
            }
          };
        }
      }
    };
  }
  function MA(r) {
    r.registerChartView(CA), r.registerSeriesModel(sA), r.registerLayout(DA("line", !0)), r.registerVisual({
      seriesType: "line",
      reset: function(t) {
        var e = t.getData(), n = t.getModel("lineStyle").getLineStyle();
        n && !n.stroke && (n.stroke = e.getVisual("style").fill), e.setVisual("legendLineStyle", n);
      }
    }), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, Xm("line"));
  }
  ve(MA);
  var _l = Math.PI * 2, _0 = Math.PI / 180;
  function S0(r, t) {
    return En(r.getBoxLayoutParams(), {
      width: t.getWidth(),
      height: t.getHeight()
    });
  }
  function w0(r, t) {
    var e = S0(r, t), n = r.get("center"), i = r.get("radius");
    F(i) || (i = [0, i]);
    var a = mt(e.width, t.getWidth()), o = mt(e.height, t.getHeight()), s = Math.min(a, o), l = mt(i[0], s / 2), u = mt(i[1], s / 2), f, h, c = r.coordinateSystem;
    if (c) {
      var v = c.dataToPoint(n);
      f = v[0] || 0, h = v[1] || 0;
    } else
      F(n) || (n = [n, n]), f = mt(n[0], a) + e.x, h = mt(n[1], o) + e.y;
    return {
      cx: f,
      cy: h,
      r0: l,
      r: u
    };
  }
  function AA(r, t, e) {
    t.eachSeriesByType(r, function(n) {
      var i = n.getData(), a = i.mapDimension("value"), o = S0(n, e), s = w0(n, e), l = s.cx, u = s.cy, f = s.r, h = s.r0, c = -n.get("startAngle") * _0, v = n.get("minAngle") * _0, d = 0;
      i.each(a, function(A) {
        !isNaN(A) && d++;
      });
      var g = i.getSum(a), p = Math.PI / (g || d) * 2, y = n.get("clockwise"), m = n.get("roseType"), _ = n.get("stillShowZeroSum"), S = i.getDataExtent(a);
      S[0] = 0;
      var b = _l, w = 0, x = c, T = y ? 1 : -1;
      if (i.setLayout({
        viewRect: o,
        r: f
      }), i.each(a, function(A, C) {
        var L;
        if (isNaN(A)) {
          i.setItemLayout(C, {
            angle: NaN,
            startAngle: NaN,
            endAngle: NaN,
            clockwise: y,
            cx: l,
            cy: u,
            r0: h,
            r: m ? NaN : f
          });
          return;
        }
        m !== "area" ? L = g === 0 && _ ? p : A * p : L = _l / d, L < v ? (L = v, b -= v) : w += A;
        var P = x + T * L;
        i.setItemLayout(C, {
          angle: L,
          startAngle: x,
          endAngle: P,
          clockwise: y,
          cx: l,
          cy: u,
          r0: h,
          r: m ? Eo(A, S, [h, f]) : f
        }), x = P;
      }), b < _l && d)
        if (b <= 1e-3) {
          var D = _l / d;
          i.each(a, function(A, C) {
            if (!isNaN(A)) {
              var L = i.getItemLayout(C);
              L.angle = D, L.startAngle = c + T * C * D, L.endAngle = c + T * (C + 1) * D;
            }
          });
        } else
          p = b / w, x = c, i.each(a, function(A, C) {
            if (!isNaN(A)) {
              var L = i.getItemLayout(C), P = L.angle === v ? v : A * p;
              L.startAngle = x, L.endAngle = x + T * P, x += T * P;
            }
          });
    });
  }
  function LA(r) {
    return {
      seriesType: r,
      reset: function(t, e) {
        var n = e.findComponents({
          mainType: "legend"
        });
        if (!(!n || !n.length)) {
          var i = t.getData();
          i.filterSelf(function(a) {
            for (var o = i.getName(a), s = 0; s < n.length; s++)
              if (!n[s].isSelected(o))
                return !1;
            return !0;
          });
        }
      }
    };
  }
  var PA = Math.PI / 180;
  function b0(r, t, e, n, i, a, o, s, l, u) {
    if (r.length < 2)
      return;
    function f(g) {
      for (var p = g.rB, y = p * p, m = 0; m < g.list.length; m++) {
        var _ = g.list[m], S = Math.abs(_.label.y - e), b = n + _.len, w = b * b, x = Math.sqrt((1 - Math.abs(S * S / y)) * w), T = t + (x + _.len2) * i, D = T - _.label.x, A = _.targetTextWidth - D * i;
        x0(_, A, !0), _.label.x = T;
      }
    }
    function h(g) {
      for (var p = {
        list: [],
        maxY: 0
      }, y = {
        list: [],
        maxY: 0
      }, m = 0; m < g.length; m++)
        if (g[m].labelAlignTo === "none") {
          var _ = g[m], S = _.label.y > e ? y : p, b = Math.abs(_.label.y - e);
          if (b >= S.maxY) {
            var w = _.label.x - t - _.len2 * i, x = n + _.len, T = Math.abs(w) < x ? Math.sqrt(b * b / (1 - w * w / x / x)) : x;
            S.rB = T, S.maxY = b;
          }
          S.list.push(_);
        }
      f(p), f(y);
    }
    for (var c = r.length, v = 0; v < c; v++)
      if (r[v].position === "outer" && r[v].labelAlignTo === "labelLine") {
        var d = r[v].label.x - u;
        r[v].linePoints[1][0] += d, r[v].label.x = u;
      }
    Gm(r, l, l + o) && h(r);
  }
  function IA(r, t, e, n, i, a, o, s) {
    for (var l = [], u = [], f = Number.MAX_VALUE, h = -Number.MAX_VALUE, c = 0; c < r.length; c++) {
      var v = r[c].label;
      $h(r[c]) || (v.x < t ? (f = Math.min(f, v.x), l.push(r[c])) : (h = Math.max(h, v.x), u.push(r[c])));
    }
    for (var c = 0; c < r.length; c++) {
      var d = r[c];
      if (!$h(d) && d.linePoints) {
        if (d.labelStyleWidth != null)
          continue;
        var v = d.label, g = d.linePoints, p = void 0;
        d.labelAlignTo === "edge" ? v.x < t ? p = g[2][0] - d.labelDistance - o - d.edgeDistance : p = o + i - d.edgeDistance - g[2][0] - d.labelDistance : d.labelAlignTo === "labelLine" ? v.x < t ? p = f - o - d.bleedMargin : p = o + i - h - d.bleedMargin : v.x < t ? p = v.x - o - d.bleedMargin : p = o + i - v.x - d.bleedMargin, d.targetTextWidth = p, x0(d, p);
      }
    }
    b0(u, t, e, n, 1, i, a, o, s, h), b0(l, t, e, n, -1, i, a, o, s, f);
    for (var c = 0; c < r.length; c++) {
      var d = r[c];
      if (!$h(d) && d.linePoints) {
        var v = d.label, g = d.linePoints, y = d.labelAlignTo === "edge", m = v.style.padding, _ = m ? m[1] + m[3] : 0, S = v.style.backgroundColor ? 0 : _, b = d.rect.width + S, w = g[1][0] - g[2][0];
        y ? v.x < t ? g[2][0] = o + d.edgeDistance + b + d.labelDistance : g[2][0] = o + i - d.edgeDistance - b - d.labelDistance : (v.x < t ? g[2][0] = v.x + d.labelDistance : g[2][0] = v.x - d.labelDistance, g[1][0] = g[2][0] + w), g[1][1] = g[2][1] = v.y;
      }
    }
  }
  function x0(r, t, e) {
    if (e === void 0 && (e = !1), r.labelStyleWidth == null) {
      var n = r.label, i = n.style, a = r.rect, o = i.backgroundColor, s = i.padding, l = s ? s[1] + s[3] : 0, u = i.overflow, f = a.width + (o ? 0 : l);
      if (t < f || e) {
        var h = a.height;
        if (u && u.match("break")) {
          n.setStyle("backgroundColor", null), n.setStyle("width", t - l);
          var c = n.getBoundingRect();
          n.setStyle("width", Math.ceil(c.width)), n.setStyle("backgroundColor", o);
        } else {
          var v = t - l, d = t < f ? v : (
            // Current available width is enough, but the text may have
            // already been wrapped with a smaller available width.
            e ? v > r.unconstrainedWidth ? null : v : (
              // Current available width is enough, so no need to
              // constrain.
              null
            )
          );
          n.setStyle("width", d);
        }
        var g = n.getBoundingRect();
        a.width = g.width;
        var p = (n.style.margin || 0) + 2.1;
        a.height = g.height + p, a.y -= (a.height - h) / 2;
      }
    }
  }
  function $h(r) {
    return r.position === "center";
  }
  function RA(r) {
    var t = r.getData(), e = [], n, i, a = !1, o = (r.get("minShowLabelAngle") || 0) * PA, s = t.getLayout("viewRect"), l = t.getLayout("r"), u = s.width, f = s.x, h = s.y, c = s.height;
    function v(w) {
      w.ignore = !0;
    }
    function d(w) {
      if (!w.ignore)
        return !0;
      for (var x in w.states)
        if (w.states[x].ignore === !1)
          return !0;
      return !1;
    }
    t.each(function(w) {
      var x = t.getItemGraphicEl(w), T = x.shape, D = x.getTextContent(), A = x.getTextGuideLine(), C = t.getItemModel(w), L = C.getModel("label"), P = L.get("position") || C.get(["emphasis", "label", "position"]), I = L.get("distanceToLabelLine"), R = L.get("alignTo"), E = mt(L.get("edgeDistance"), u), Y = L.get("bleedMargin"), B = C.getModel("labelLine"), N = B.get("length");
      N = mt(N, u);
      var U = B.get("length2");
      if (U = mt(U, u), Math.abs(T.endAngle - T.startAngle) < o) {
        M(D.states, v), D.ignore = !0, A && (M(A.states, v), A.ignore = !0);
        return;
      }
      if (d(D)) {
        var K = (T.startAngle + T.endAngle) / 2, $ = Math.cos(K), rt = Math.sin(K), vt, Nt, _t, ce;
        n = T.cx, i = T.cy;
        var we = P === "inside" || P === "inner";
        if (P === "center")
          vt = T.cx, Nt = T.cy, ce = "center";
        else {
          var Gt = (we ? (T.r + T.r0) / 2 * $ : T.r * $) + n, Pt = (we ? (T.r + T.r0) / 2 * rt : T.r * rt) + i;
          if (vt = Gt + $ * 3, Nt = Pt + rt * 3, !we) {
            var Z = Gt + $ * (N + l - T.r), et = Pt + rt * (N + l - T.r), vr = Z + ($ < 0 ? -1 : 1) * U, Ft = et;
            R === "edge" ? vt = $ < 0 ? f + E : f + u - E : vt = vr + ($ < 0 ? -I : I), Nt = Ft, _t = [[Gt, Pt], [Z, et], [vr, Ft]];
          }
          ce = we ? "center" : R === "edge" ? $ > 0 ? "right" : "left" : $ > 0 ? "left" : "right";
        }
        var jr = Math.PI, Cr = 0, Ja = L.get("rotate");
        if (pt(Ja))
          Cr = Ja * (jr / 180);
        else if (P === "center")
          Cr = 0;
        else if (Ja === "radial" || Ja === !0) {
          var xP = $ < 0 ? -K + jr : -K;
          Cr = xP;
        } else if (Ja === "tangential" && P !== "outside" && P !== "outer") {
          var Ii = Math.atan2($, rt);
          Ii < 0 && (Ii = jr * 2 + Ii);
          var TP = rt > 0;
          TP && (Ii = jr + Ii), Cr = Ii - jr;
        }
        if (a = !!Cr, D.x = vt, D.y = Nt, D.rotation = Cr, D.setStyle({
          verticalAlign: "middle"
        }), we) {
          D.setStyle({
            align: ce
          });
          var yv = D.states.select;
          yv && (yv.x += D.x, yv.y += D.y);
        } else {
          var to = D.getBoundingRect().clone();
          to.applyTransform(D.getComputedTransform());
          var g_ = (D.style.margin || 0) + 2.1;
          to.y -= g_ / 2, to.height += g_, e.push({
            label: D,
            labelLine: A,
            position: P,
            len: N,
            len2: U,
            minTurnAngle: B.get("minTurnAngle"),
            maxSurfaceAngle: B.get("maxSurfaceAngle"),
            surfaceNormal: new q($, rt),
            linePoints: _t,
            textAlign: ce,
            labelDistance: I,
            labelAlignTo: R,
            edgeDistance: E,
            bleedMargin: Y,
            rect: to,
            unconstrainedWidth: to.width,
            labelStyleWidth: D.style.width
          });
        }
        x.setTextConfig({
          inside: we
        });
      }
    }), !a && r.get("avoidLabelOverlap") && IA(e, n, i, l, u, c, f, h);
    for (var g = 0; g < e.length; g++) {
      var p = e[g], y = p.label, m = p.labelLine, _ = isNaN(y.x) || isNaN(y.y);
      if (y) {
        y.setStyle({
          align: p.textAlign
        }), _ && (M(y.states, v), y.ignore = !0);
        var S = y.states.select;
        S && (S.x += y.x, S.y += y.y);
      }
      if (m) {
        var b = p.linePoints;
        _ || !b ? (M(m.states, v), m.ignore = !0) : (km(b, p.minTurnAngle), AM(b, p.surfaceNormal, p.maxSurfaceAngle), m.setShape({
          points: b
        }), y.__hostTarget.textGuideLineConfig = {
          anchor: new q(b[0][0], b[0][1])
        });
      }
    }
  }
  var EA = (
    /** @class */
    function(r) {
      k(t, r);
      function t(e, n, i) {
        var a = r.call(this) || this;
        a.z2 = 2;
        var o = new kt();
        return a.setTextContent(o), a.updateData(e, n, i, !0), a;
      }
      return t.prototype.updateData = function(e, n, i, a) {
        var o = this, s = e.hostModel, l = e.getItemModel(n), u = l.getModel("emphasis"), f = e.getItemLayout(n), h = O($a(l.getModel("itemStyle"), f, !0), f);
        if (isNaN(h.startAngle)) {
          o.setShape(h);
          return;
        }
        if (a) {
          o.setShape(h);
          var c = s.getShallow("animationType");
          s.ecModel.ssr ? (Yt(o, {
            scaleX: 0,
            scaleY: 0
          }, s, {
            dataIndex: n,
            isFrom: !0
          }), o.originX = h.cx, o.originY = h.cy) : c === "scale" ? (o.shape.r = f.r0, Yt(o, {
            shape: {
              r: f.r
            }
          }, s, n)) : i != null ? (o.setShape({
            startAngle: i,
            endAngle: i
          }), Yt(o, {
            shape: {
              startAngle: f.startAngle,
              endAngle: f.endAngle
            }
          }, s, n)) : (o.shape.endAngle = f.startAngle, Ot(o, {
            shape: {
              endAngle: f.endAngle
            }
          }, s, n));
        } else
          rf(o), Ot(o, {
            shape: h
          }, s, n);
        o.useStyle(e.getItemVisual(n, "style")), Jo(o, l);
        var v = (f.startAngle + f.endAngle) / 2, d = s.get("selectedOffset"), g = Math.cos(v) * d, p = Math.sin(v) * d, y = l.getShallow("cursor");
        y && o.attr("cursor", y), this._updateLabel(s, e, n), o.ensureState("emphasis").shape = O({
          r: f.r + (u.get("scale") && u.get("scaleSize") || 0)
        }, $a(u.getModel("itemStyle"), f)), O(o.ensureState("select"), {
          x: g,
          y: p,
          shape: $a(l.getModel(["select", "itemStyle"]), f)
        }), O(o.ensureState("blur"), {
          shape: $a(l.getModel(["blur", "itemStyle"]), f)
        });
        var m = o.getTextGuideLine(), _ = o.getTextContent();
        m && O(m.ensureState("select"), {
          x: g,
          y: p
        }), O(_.ensureState("select"), {
          x: g,
          y: p
        }), fa(this, u.get("focus"), u.get("blurScope"), u.get("disabled"));
      }, t.prototype._updateLabel = function(e, n, i) {
        var a = this, o = n.getItemModel(i), s = o.getModel("labelLine"), l = n.getItemVisual(i, "style"), u = l && l.fill, f = l && l.opacity;
        ya(a, ma(o), {
          labelFetcher: n.hostModel,
          labelDataIndex: i,
          inheritColor: u,
          defaultOpacity: f,
          defaultText: e.getFormattedLabel(i, "normal") || n.getName(i)
        });
        var h = a.getTextContent();
        a.setTextConfig({
          // reset position, rotation
          position: null,
          rotation: null
        }), h.attr({
          z2: 10
        });
        var c = e.get(["label", "position"]);
        if (c !== "outside" && c !== "outer")
          a.removeTextGuideLine();
        else {
          var v = this.getTextGuideLine();
          v || (v = new pi(), this.setTextGuideLine(v)), Bm(this, Nm(o), {
            stroke: u,
            opacity: Ar(s.get(["lineStyle", "opacity"]), f, 1)
          });
        }
      }, t;
    }(mr)
  ), kA = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.ignoreLabelLineUpdate = !0, e;
      }
      return t.prototype.render = function(e, n, i, a) {
        var o = e.getData(), s = this._data, l = this.group, u;
        if (!s && o.count() > 0) {
          for (var f = o.getItemLayout(0), h = 1; isNaN(f && f.startAngle) && h < o.count(); ++h)
            f = o.getItemLayout(h);
          f && (u = f.startAngle);
        }
        if (this._emptyCircleSector && l.remove(this._emptyCircleSector), o.count() === 0 && e.get("showEmptyCircle")) {
          var c = new mr({
            shape: w0(e, i)
          });
          c.useStyle(e.getModel("emptyCircleStyle").getItemStyle()), this._emptyCircleSector = c, l.add(c);
        }
        o.diff(s).add(function(v) {
          var d = new EA(o, v, u);
          o.setItemGraphicEl(v, d), l.add(d);
        }).update(function(v, d) {
          var g = s.getItemGraphicEl(d);
          g.updateData(o, v, u), g.off("click"), l.add(g), o.setItemGraphicEl(v, g);
        }).remove(function(v) {
          var d = s.getItemGraphicEl(v);
          hs(d, e, v);
        }).execute(), RA(e), e.get("animationTypeUpdate") !== "expansion" && (this._data = o);
      }, t.prototype.dispose = function() {
      }, t.prototype.containPoint = function(e, n) {
        var i = n.getData(), a = i.getItemLayout(0);
        if (a) {
          var o = e[0] - a.cx, s = e[1] - a.cy, l = Math.sqrt(o * o + s * s);
          return l <= a.r && l >= a.r0;
        }
      }, t.type = "pie", t;
    }(re)
  );
  function OA(r, t, e) {
    t = F(t) && {
      coordDimensions: t
    } || O({
      encodeDefine: r.getEncode()
    }, t);
    var n = r.getSource(), i = Th(n, t).dimensions, a = new xh(i, r);
    return a.initData(n, e), a;
  }
  var BA = (
    /** @class */
    function() {
      function r(t, e) {
        this._getDataWithEncodedVisual = t, this._getRawData = e;
      }
      return r.prototype.getAllNames = function() {
        var t = this._getRawData();
        return t.mapArray(t.getName);
      }, r.prototype.containName = function(t) {
        var e = this._getRawData();
        return e.indexOfName(t) >= 0;
      }, r.prototype.indexOfName = function(t) {
        var e = this._getDataWithEncodedVisual();
        return e.indexOfName(t);
      }, r.prototype.getItemVisual = function(t, e) {
        var n = this._getDataWithEncodedVisual();
        return n.getItemVisual(t, e);
      }, r;
    }()
  ), NA = Tt(), FA = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }
      return t.prototype.init = function(e) {
        r.prototype.init.apply(this, arguments), this.legendVisualProvider = new BA(gt(this.getData, this), gt(this.getRawData, this)), this._defaultLabelLine(e);
      }, t.prototype.mergeOption = function() {
        r.prototype.mergeOption.apply(this, arguments);
      }, t.prototype.getInitialData = function() {
        return OA(this, {
          coordDimensions: ["value"],
          encodeDefaulter: xt(nx, this)
        });
      }, t.prototype.getDataParams = function(e) {
        var n = this.getData(), i = NA(n), a = i.seats;
        if (!a) {
          var o = [];
          n.each(n.mapDimension("value"), function(l) {
            o.push(l);
          }), a = i.seats = Lc(o, n.hostModel.get("percentPrecision"));
        }
        var s = r.prototype.getDataParams.call(this, e);
        return s.percent = a[e] || 0, s.$vars.push("percent"), s;
      }, t.prototype._defaultLabelLine = function(e) {
        xu(e, "labelLine", ["show"]);
        var n = e.labelLine, i = e.emphasis.labelLine;
        n.show = n.show && e.label.show, i.show = i.show && e.emphasis.label.show;
      }, t.type = "series.pie", t.defaultOption = {
        // zlevel: 0,
        z: 2,
        legendHoverLink: !0,
        colorBy: "data",
        // 默认全局居中
        center: ["50%", "50%"],
        radius: [0, "75%"],
        // 默认顺时针
        clockwise: !0,
        startAngle: 90,
        // 最小角度改为0
        minAngle: 0,
        // If the angle of a sector less than `minShowLabelAngle`,
        // the label will not be displayed.
        minShowLabelAngle: 0,
        // 选中时扇区偏移量
        selectedOffset: 10,
        // 选择模式，默认关闭，可选single，multiple
        // selectedMode: false,
        // 南丁格尔玫瑰图模式，'radius'（半径） | 'area'（面积）
        // roseType: null,
        percentPrecision: 2,
        // If still show when all data zero.
        stillShowZeroSum: !0,
        // cursor: null,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        width: null,
        height: null,
        label: {
          // color: 'inherit',
          // If rotate around circle
          rotate: 0,
          show: !0,
          overflow: "truncate",
          // 'outer', 'inside', 'center'
          position: "outer",
          // 'none', 'labelLine', 'edge'. Works only when position is 'outer'
          alignTo: "none",
          // Closest distance between label and chart edge.
          // Works only position is 'outer' and alignTo is 'edge'.
          edgeDistance: "25%",
          // Works only position is 'outer' and alignTo is not 'edge'.
          bleedMargin: 10,
          // Distance between text and label line.
          distanceToLabelLine: 5
          // formatter: 标签文本格式器，同 tooltip.formatter，不支持异步回调
          // 默认使用全局文本样式，详见 textStyle
          // distance: 当position为inner时有效，为label位置到圆心的距离与圆半径(环状图为内外半径和)的比例系数
        },
        // Enabled when label.normal.position is 'outer'
        labelLine: {
          show: !0,
          // 引导线两段中的第一段长度
          length: 15,
          // 引导线两段中的第二段长度
          length2: 15,
          smooth: !1,
          minTurnAngle: 90,
          maxSurfaceAngle: 90,
          lineStyle: {
            // color: 各异,
            width: 1,
            type: "solid"
          }
        },
        itemStyle: {
          borderWidth: 1,
          borderJoin: "round"
        },
        showEmptyCircle: !0,
        emptyCircleStyle: {
          color: "lightgray",
          opacity: 1
        },
        labelLayout: {
          // Hide the overlapped label.
          hideOverlap: !0
        },
        emphasis: {
          scale: !0,
          scaleSize: 5
        },
        // If use strategy to avoid label overlapping
        avoidLabelOverlap: !0,
        // Animation type. Valid values: expansion, scale
        animationType: "expansion",
        animationDuration: 1e3,
        // Animation type when update. Valid values: transition, expansion
        animationTypeUpdate: "transition",
        animationEasingUpdate: "cubicInOut",
        animationDurationUpdate: 500,
        animationEasing: "cubicInOut"
      }, t;
    }(ue)
  );
  function zA(r) {
    return {
      seriesType: r,
      reset: function(t, e) {
        var n = t.getData();
        n.filterSelf(function(i) {
          var a = n.mapDimension("value"), o = n.get(a, i);
          return !(pt(o) && !isNaN(o) && o < 0);
        });
      }
    };
  }
  function GA(r) {
    r.registerChartView(kA), r.registerSeriesModel(FA), HT("pie", r.registerAction), r.registerLayout(xt(AA, "pie")), r.registerProcessor(LA("pie")), r.registerProcessor(zA("pie"));
  }
  ve(GA);
  var HA = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }
      return t.type = "grid", t.dependencies = ["xAxis", "yAxis"], t.layoutMode = "box", t.defaultOption = {
        show: !1,
        // zlevel: 0,
        z: 0,
        left: "10%",
        top: 60,
        right: "10%",
        bottom: 70,
        // If grid size contain label
        containLabel: !1,
        // width: {totalWidth} - left - right,
        // height: {totalHeight} - top - bottom,
        backgroundColor: "rgba(0,0,0,0)",
        borderWidth: 1,
        borderColor: "#ccc"
      }, t;
    }(at)
  ), Kh = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }
      return t.prototype.getCoordSysModel = function() {
        return this.getReferringComponents("grid", Ue).models[0];
      }, t.type = "cartesian2dAxis", t;
    }(at)
  );
  xe(Kh, cm);
  var T0 = {
    show: !0,
    // zlevel: 0,
    z: 0,
    // Inverse the axis.
    inverse: !1,
    // Axis name displayed.
    name: "",
    // 'start' | 'middle' | 'end'
    nameLocation: "end",
    // By degree. By default auto rotate by nameLocation.
    nameRotate: null,
    nameTruncate: {
      maxWidth: null,
      ellipsis: "...",
      placeholder: "."
    },
    // Use global text style by default.
    nameTextStyle: {},
    // The gap between axisName and axisLine.
    nameGap: 15,
    // Default `false` to support tooltip.
    silent: !1,
    // Default `false` to avoid legacy user event listener fail.
    triggerEvent: !1,
    tooltip: {
      show: !1
    },
    axisPointer: {},
    axisLine: {
      show: !0,
      onZero: !0,
      onZeroAxisIndex: null,
      lineStyle: {
        color: "#6E7079",
        width: 1,
        type: "solid"
      },
      // The arrow at both ends the the axis.
      symbol: ["none", "none"],
      symbolSize: [10, 15]
    },
    axisTick: {
      show: !0,
      // Whether axisTick is inside the grid or outside the grid.
      inside: !1,
      // The length of axisTick.
      length: 5,
      lineStyle: {
        width: 1
      }
    },
    axisLabel: {
      show: !0,
      // Whether axisLabel is inside the grid or outside the grid.
      inside: !1,
      rotate: 0,
      // true | false | null/undefined (auto)
      showMinLabel: null,
      // true | false | null/undefined (auto)
      showMaxLabel: null,
      margin: 8,
      // formatter: null,
      fontSize: 12
    },
    splitLine: {
      show: !0,
      lineStyle: {
        color: ["#E0E6F1"],
        width: 1,
        type: "solid"
      }
    },
    splitArea: {
      show: !1,
      areaStyle: {
        color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"]
      }
    }
  }, VA = ot({
    // The gap at both ends of the axis. For categoryAxis, boolean.
    boundaryGap: !0,
    // Set false to faster category collection.
    deduplication: null,
    // splitArea: {
    // show: false
    // },
    splitLine: {
      show: !1
    },
    axisTick: {
      // If tick is align with label when boundaryGap is true
      alignWithLabel: !1,
      interval: "auto"
    },
    axisLabel: {
      interval: "auto"
    }
  }, T0), Qh = ot({
    boundaryGap: [0, 0],
    axisLine: {
      // Not shown when other axis is categoryAxis in cartesian
      show: "auto"
    },
    axisTick: {
      // Not shown when other axis is categoryAxis in cartesian
      show: "auto"
    },
    // TODO
    // min/max: [30, datamin, 60] or [20, datamin] or [datamin, 60]
    splitNumber: 5,
    minorTick: {
      // Minor tick, not available for cateogry axis.
      show: !1,
      // Split number of minor ticks. The value should be in range of (0, 100)
      splitNumber: 5,
      // Length of minor tick
      length: 3,
      // Line style
      lineStyle: {
        // Default to be same with axisTick
      }
    },
    minorSplitLine: {
      show: !1,
      lineStyle: {
        color: "#F4F7FD",
        width: 1
      }
    }
  }, T0), WA = ot({
    splitNumber: 6,
    axisLabel: {
      // To eliminate labels that are not nice
      showMinLabel: !1,
      showMaxLabel: !1,
      rich: {
        primary: {
          fontWeight: "bold"
        }
      }
    },
    splitLine: {
      show: !1
    }
  }, Qh), UA = lt({
    logBase: 10
  }, Qh), YA = {
    category: VA,
    value: Qh,
    time: WA,
    log: UA
  }, XA = {
    value: 1,
    category: 1,
    time: 1,
    log: 1
  };
  function C0(r, t, e, n) {
    M(XA, function(i, a) {
      var o = ot(ot({}, YA[a], !0), n, !0), s = (
        /** @class */
        function(l) {
          k(u, l);
          function u() {
            var f = l !== null && l.apply(this, arguments) || this;
            return f.type = t + "Axis." + a, f;
          }
          return u.prototype.mergeDefaultAndTheme = function(f, h) {
            var c = Da(this), v = c ? As(f) : {}, d = h.getTheme();
            ot(f, d.get(a + "Axis")), ot(f, this.getDefaultOption()), f.type = D0(f), c && Si(f, v, c);
          }, u.prototype.optionUpdated = function() {
            var f = this.option;
            f.type === "category" && (this.__ordinalMeta = Ch.createByAxisModel(this));
          }, u.prototype.getCategories = function(f) {
            var h = this.option;
            if (h.type === "category")
              return f ? h.data : this.__ordinalMeta.categories;
          }, u.prototype.getOrdinalMeta = function() {
            return this.__ordinalMeta;
          }, u.type = t + "Axis." + a, u.defaultOption = o, u;
        }(e)
      );
      r.registerComponentModel(s);
    }), r.registerSubTypeDefaulter(t + "Axis", D0);
  }
  function D0(r) {
    return r.type || (r.data ? "category" : "value");
  }
  var qA = (
    /** @class */
    function() {
      function r(t) {
        this.type = "cartesian", this._dimList = [], this._axes = {}, this.name = t || "";
      }
      return r.prototype.getAxis = function(t) {
        return this._axes[t];
      }, r.prototype.getAxes = function() {
        return V(this._dimList, function(t) {
          return this._axes[t];
        }, this);
      }, r.prototype.getAxesByScale = function(t) {
        return t = t.toLowerCase(), Dt(this.getAxes(), function(e) {
          return e.scale.type === t;
        });
      }, r.prototype.addAxis = function(t) {
        var e = t.dim;
        this._axes[e] = t, this._dimList.push(e);
      }, r;
    }()
  ), jh = ["x", "y"];
  function M0(r) {
    return r.type === "interval" || r.type === "time";
  }
  var ZA = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = "cartesian2d", e.dimensions = jh, e;
      }
      return t.prototype.calcAffineTransform = function() {
        this._transform = this._invTransform = null;
        var e = this.getAxis("x").scale, n = this.getAxis("y").scale;
        if (!(!M0(e) || !M0(n))) {
          var i = e.getExtent(), a = n.getExtent(), o = this.dataToPoint([i[0], a[0]]), s = this.dataToPoint([i[1], a[1]]), l = i[1] - i[0], u = a[1] - a[0];
          if (!(!l || !u)) {
            var f = (s[0] - o[0]) / l, h = (s[1] - o[1]) / u, c = o[0] - i[0] * f, v = o[1] - a[0] * h, d = this._transform = [f, 0, 0, h, c, v];
            this._invTransform = ti([], d);
          }
        }
      }, t.prototype.getBaseAxis = function() {
        return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");
      }, t.prototype.containPoint = function(e) {
        var n = this.getAxis("x"), i = this.getAxis("y");
        return n.contain(n.toLocalCoord(e[0])) && i.contain(i.toLocalCoord(e[1]));
      }, t.prototype.containData = function(e) {
        return this.getAxis("x").containData(e[0]) && this.getAxis("y").containData(e[1]);
      }, t.prototype.containZone = function(e, n) {
        var i = this.dataToPoint(e), a = this.dataToPoint(n), o = this.getArea(), s = new it(i[0], i[1], a[0] - i[0], a[1] - i[1]);
        return o.intersect(s);
      }, t.prototype.dataToPoint = function(e, n, i) {
        i = i || [];
        var a = e[0], o = e[1];
        if (this._transform && a != null && isFinite(a) && o != null && isFinite(o))
          return jt(i, e, this._transform);
        var s = this.getAxis("x"), l = this.getAxis("y");
        return i[0] = s.toGlobalCoord(s.dataToCoord(a, n)), i[1] = l.toGlobalCoord(l.dataToCoord(o, n)), i;
      }, t.prototype.clampData = function(e, n) {
        var i = this.getAxis("x").scale, a = this.getAxis("y").scale, o = i.getExtent(), s = a.getExtent(), l = i.parse(e[0]), u = a.parse(e[1]);
        return n = n || [], n[0] = Math.min(Math.max(Math.min(o[0], o[1]), l), Math.max(o[0], o[1])), n[1] = Math.min(Math.max(Math.min(s[0], s[1]), u), Math.max(s[0], s[1])), n;
      }, t.prototype.pointToData = function(e, n) {
        var i = [];
        if (this._invTransform)
          return jt(i, e, this._invTransform);
        var a = this.getAxis("x"), o = this.getAxis("y");
        return i[0] = a.coordToData(a.toLocalCoord(e[0]), n), i[1] = o.coordToData(o.toLocalCoord(e[1]), n), i;
      }, t.prototype.getOtherAxis = function(e) {
        return this.getAxis(e.dim === "x" ? "y" : "x");
      }, t.prototype.getArea = function() {
        var e = this.getAxis("x").getGlobalExtent(), n = this.getAxis("y").getGlobalExtent(), i = Math.min(e[0], e[1]), a = Math.min(n[0], n[1]), o = Math.max(e[0], e[1]) - i, s = Math.max(n[0], n[1]) - a;
        return new it(i, a, o, s);
      }, t;
    }(qA)
  ), $A = (
    /** @class */
    function(r) {
      k(t, r);
      function t(e, n, i, a, o) {
        var s = r.call(this, e, n, i) || this;
        return s.index = 0, s.type = a || "value", s.position = o || "bottom", s;
      }
      return t.prototype.isHorizontal = function() {
        var e = this.position;
        return e === "top" || e === "bottom";
      }, t.prototype.getGlobalExtent = function(e) {
        var n = this.getExtent();
        return n[0] = this.toGlobalCoord(n[0]), n[1] = this.toGlobalCoord(n[1]), e && n[0] > n[1] && n.reverse(), n;
      }, t.prototype.pointToData = function(e, n) {
        return this.coordToData(this.toLocalCoord(e[this.dim === "x" ? 0 : 1]), n);
      }, t.prototype.setCategorySortInfo = function(e) {
        if (this.type !== "category")
          return !1;
        this.model.option.categorySortInfo = e, this.scale.setSortInfo(e);
      }, t;
    }(Pm)
  );
  function Jh(r, t, e) {
    e = e || {};
    var n = r.coordinateSystem, i = t.axis, a = {}, o = i.getAxesOnZeroOf()[0], s = i.position, l = o ? "onZero" : s, u = i.dim, f = n.getRect(), h = [f.x, f.x + f.width, f.y, f.y + f.height], c = {
      left: 0,
      right: 1,
      top: 0,
      bottom: 1,
      onZero: 2
    }, v = t.get("offset") || 0, d = u === "x" ? [h[2] - v, h[3] + v] : [h[0] - v, h[1] + v];
    if (o) {
      var g = o.toGlobalCoord(o.dataToCoord(0));
      d[c.onZero] = Math.max(Math.min(g, d[1]), d[0]);
    }
    a.position = [u === "y" ? d[c[l]] : h[0], u === "x" ? d[c[l]] : h[3]], a.rotation = Math.PI / 2 * (u === "x" ? 0 : 1);
    var p = {
      top: -1,
      bottom: 1,
      left: -1,
      right: 1
    };
    a.labelDirection = a.tickDirection = a.nameDirection = p[s], a.labelOffset = o ? d[c[s]] - d[c.onZero] : 0, t.get(["axisTick", "inside"]) && (a.tickDirection = -a.tickDirection), Mr(e.labelInside, t.get(["axisLabel", "inside"])) && (a.labelDirection = -a.labelDirection);
    var y = t.get(["axisLabel", "rotate"]);
    return a.labelRotate = l === "top" ? -y : y, a.z2 = 1, a;
  }
  function A0(r) {
    return r.get("coordinateSystem") === "cartesian2d";
  }
  function L0(r) {
    var t = {
      xAxisModel: null,
      yAxisModel: null
    };
    return M(t, function(e, n) {
      var i = n.replace(/Model$/, ""), a = r.getReferringComponents(i, Ue).models[0];
      if (!a)
        throw new Error(i + ' "' + Ar(r.get(i + "Index"), r.get(i + "Id"), 0) + '" not found');
      t[n] = a;
    }), t;
  }
  var tv = Math.log;
  function KA(r, t, e) {
    var n = Li.prototype, i = n.getTicks.call(e), a = n.getTicks.call(e, !0), o = i.length - 1, s = n.getInterval.call(e), l = fm(r, t), u = l.extent, f = l.fixMin, h = l.fixMax;
    if (r.type === "log") {
      var c = tv(r.base);
      u = [tv(u[0]) / c, tv(u[1]) / c];
    }
    r.setExtent(u[0], u[1]), r.calcNiceExtent({
      splitNumber: o,
      fixMin: f,
      fixMax: h
    });
    var v = n.getExtent.call(r);
    f && (u[0] = v[0]), h && (u[1] = v[1]);
    var d = n.getInterval.call(r), g = u[0], p = u[1];
    if (f && h)
      d = (p - g) / o;
    else if (f)
      for (p = u[0] + d * o; p < u[1] && isFinite(p) && isFinite(u[1]); )
        d = Mh(d), p = u[0] + d * o;
    else if (h)
      for (g = u[1] - d * o; g > u[0] && isFinite(g) && isFinite(u[0]); )
        d = Mh(d), g = u[1] - d * o;
    else {
      var y = r.getTicks().length - 1;
      y > o && (d = Mh(d));
      var m = d * o;
      p = Math.ceil(u[1] / d) * d, g = Mt(p - m), g < 0 && u[0] >= 0 ? (g = 0, p = Mt(m)) : p > 0 && u[1] <= 0 && (p = 0, g = -Mt(m));
    }
    var _ = (i[0].value - a[0].value) / s, S = (i[o].value - a[o].value) / s;
    n.setExtent.call(r, g + d * _, p + d * S), n.setInterval.call(r, d), (_ || S) && n.setNiceExtent.call(r, g + d, p - d);
    {
      var b = n.getTicks.call(r);
      b[1] && (!gD(d) || ko(b[1].value) > ko(d)) && Vt(
        // eslint-disable-next-line
        "The ticks may be not readable when set min: " + t.get("min") + ", max: " + t.get("max") + " and alignTicks: true"
      );
    }
  }
  var QA = (
    /** @class */
    function() {
      function r(t, e, n) {
        this.type = "grid", this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this.axisPointerEnabled = !0, this.dimensions = jh, this._initCartesian(t, e, n), this.model = t;
      }
      return r.prototype.getRect = function() {
        return this._rect;
      }, r.prototype.update = function(t, e) {
        var n = this._axesMap;
        this._updateScale(t, this.model);
        function i(o) {
          var s, l = yt(o), u = l.length;
          if (u) {
            for (var f = [], h = u - 1; h >= 0; h--) {
              var c = +l[h], v = o[c], d = v.model, g = v.scale;
              // Only value and log axis without interval support alignTicks.
              Dh(g) && d.get("alignTicks") && d.get("interval") == null ? f.push(v) : (Rh(g, d), Dh(g) && (s = v));
            }
            f.length && (s || (s = f.pop(), Rh(s.scale, s.model)), M(f, function(p) {
              KA(p.scale, p.model, s.scale);
            }));
          }
        }
        i(n.x), i(n.y);
        var a = {};
        M(n.x, function(o) {
          P0(n, "y", o, a);
        }), M(n.y, function(o) {
          P0(n, "x", o, a);
        }), this.resize(this.model, e);
      }, r.prototype.resize = function(t, e, n) {
        var i = t.getBoxLayoutParams(), a = !n && t.get("containLabel"), o = En(i, {
          width: e.getWidth(),
          height: e.getHeight()
        });
        this._rect = o;
        var s = this._axesList;
        l(), a && (M(s, function(u) {
          if (!u.model.get(["axisLabel", "inside"])) {
            var f = UD(u);
            if (f) {
              var h = u.isHorizontal() ? "height" : "width", c = u.model.get(["axisLabel", "margin"]);
              o[h] -= f[h] + c, u.position === "top" ? o.y += f.height + c : u.position === "left" && (o.x += f.width + c);
            }
          }
        }), l()), M(this._coordsList, function(u) {
          u.calcAffineTransform();
        });
        function l() {
          M(s, function(u) {
            var f = u.isHorizontal(), h = f ? [0, o.width] : [0, o.height], c = u.inverse ? 1 : 0;
            u.setExtent(h[c], h[1 - c]), jA(u, f ? o.x : o.y);
          });
        }
      }, r.prototype.getAxis = function(t, e) {
        var n = this._axesMap[t];
        if (n != null)
          return n[e || 0];
      }, r.prototype.getAxes = function() {
        return this._axesList.slice();
      }, r.prototype.getCartesian = function(t, e) {
        if (t != null && e != null) {
          var n = "x" + t + "y" + e;
          return this._coordsMap[n];
        }
        W(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
        for (var i = 0, a = this._coordsList; i < a.length; i++)
          if (a[i].getAxis("x").index === t || a[i].getAxis("y").index === e)
            return a[i];
      }, r.prototype.getCartesians = function() {
        return this._coordsList.slice();
      }, r.prototype.convertToPixel = function(t, e, n) {
        var i = this._findConvertTarget(e);
        return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null;
      }, r.prototype.convertFromPixel = function(t, e, n) {
        var i = this._findConvertTarget(e);
        return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null;
      }, r.prototype._findConvertTarget = function(t) {
        var e = t.seriesModel, n = t.xAxisModel || e && e.getReferringComponents("xAxis", Ue).models[0], i = t.yAxisModel || e && e.getReferringComponents("yAxis", Ue).models[0], a = t.gridModel, o = this._coordsList, s, l;
        if (e)
          s = e.coordinateSystem, ut(o, s) < 0 && (s = null);
        else if (n && i)
          s = this.getCartesian(n.componentIndex, i.componentIndex);
        else if (n)
          l = this.getAxis("x", n.componentIndex);
        else if (i)
          l = this.getAxis("y", i.componentIndex);
        else if (a) {
          var u = a.coordinateSystem;
          u === this && (s = this._coordsList[0]);
        }
        return {
          cartesian: s,
          axis: l
        };
      }, r.prototype.containPoint = function(t) {
        var e = this._coordsList[0];
        if (e)
          return e.containPoint(t);
      }, r.prototype._initCartesian = function(t, e, n) {
        var i = this, a = this, o = {
          left: !1,
          right: !1,
          top: !1,
          bottom: !1
        }, s = {
          x: {},
          y: {}
        }, l = {
          x: 0,
          y: 0
        };
        if (e.eachComponent("xAxis", u("x"), this), e.eachComponent("yAxis", u("y"), this), !l.x || !l.y) {
          this._axesMap = {}, this._axesList = [];
          return;
        }
        this._axesMap = s, M(s.x, function(f, h) {
          M(s.y, function(c, v) {
            var d = "x" + h + "y" + v, g = new ZA(d);
            g.master = i, g.model = t, i._coordsMap[d] = g, i._coordsList.push(g), g.addAxis(f), g.addAxis(c);
          });
        });
        function u(f) {
          return function(h, c) {
            if (ev(h, t)) {
              var v = h.get("position");
              f === "x" ? v !== "top" && v !== "bottom" && (v = o.bottom ? "top" : "bottom") : v !== "left" && v !== "right" && (v = o.left ? "right" : "left"), o[v] = !0;
              var d = new $A(f, hm(h), [0, 0], h.get("type"), v), g = d.type === "category";
              d.onBand = g && h.get("boundaryGap"), d.inverse = h.get("inverse"), h.axis = d, d.model = h, d.grid = a, d.index = c, a._axesList.push(d), s[f][c] = d, l[f]++;
            }
          };
        }
      }, r.prototype._updateScale = function(t, e) {
        M(this._axesList, function(i) {
          if (i.scale.setExtent(1 / 0, -1 / 0), i.type === "category") {
            var a = i.model.get("categorySortInfo");
            i.scale.setSortInfo(a);
          }
        }), t.eachSeries(function(i) {
          if (A0(i)) {
            var a = L0(i), o = a.xAxisModel, s = a.yAxisModel;
            if (!ev(o, e) || !ev(s, e))
              return;
            var l = this.getCartesian(o.componentIndex, s.componentIndex), u = i.getData(), f = l.getAxis("x"), h = l.getAxis("y");
            n(u, f), n(u, h);
          }
        }, this);
        function n(i, a) {
          M(XD(i, a.dim), function(o) {
            a.scale.unionExtentFromData(i, o);
          });
        }
      }, r.prototype.getTooltipAxes = function(t) {
        var e = [], n = [];
        return M(this.getCartesians(), function(i) {
          var a = t != null && t !== "auto" ? i.getAxis(t) : i.getBaseAxis(), o = i.getOtherAxis(a);
          ut(e, a) < 0 && e.push(a), ut(n, o) < 0 && n.push(o);
        }), {
          baseAxes: e,
          otherAxes: n
        };
      }, r.create = function(t, e) {
        var n = [];
        return t.eachComponent("grid", function(i, a) {
          var o = new r(i, t, e);
          o.name = "grid_" + a, o.resize(i, e, !0), i.coordinateSystem = o, n.push(o);
        }), t.eachSeries(function(i) {
          if (A0(i)) {
            var a = L0(i), o = a.xAxisModel, s = a.yAxisModel, l = o.getCoordSysModel();
            {
              if (!l)
                throw new Error('Grid "' + Ar(o.get("gridIndex"), o.get("gridId"), 0) + '" not found');
              if (o.getCoordSysModel() !== s.getCoordSysModel())
                throw new Error("xAxis and yAxis must use the same grid");
            }
            var u = l.coordinateSystem;
            i.coordinateSystem = u.getCartesian(o.componentIndex, s.componentIndex);
          }
        }), n;
      }, r.dimensions = jh, r;
    }()
  );
  function ev(r, t) {
    return r.getCoordSysModel() === t;
  }
  function P0(r, t, e, n) {
    e.getAxesOnZeroOf = function() {
      return a ? [a] : [];
    };
    var i = r[t], a, o = e.model, s = o.get(["axisLine", "onZero"]), l = o.get(["axisLine", "onZeroAxisIndex"]);
    if (!s)
      return;
    if (l != null)
      I0(i[l]) && (a = i[l]);
    else
      for (var u in i)
        if (i.hasOwnProperty(u) && I0(i[u]) && !n[f(i[u])]) {
          a = i[u];
          break;
        }
    a && (n[f(a)] = !0);
    function f(h) {
      return h.dim + "_" + h.index;
    }
  }
  function I0(r) {
    return r && r.type !== "category" && r.type !== "time" && WD(r);
  }
  function jA(r, t) {
    var e = r.getExtent(), n = e[0] + e[1];
    r.toGlobalCoord = r.dim === "x" ? function(i) {
      return i + t;
    } : function(i) {
      return n - i + t;
    }, r.toLocalCoord = r.dim === "x" ? function(i) {
      return i - t;
    } : function(i) {
      return n - i + t;
    };
  }
  var $r = Math.PI, Kr = (
    /** @class */
    function() {
      function r(t, e) {
        this.group = new Bt(), this.opt = e, this.axisModel = t, lt(e, {
          labelOffset: 0,
          nameDirection: 1,
          tickDirection: 1,
          labelDirection: 1,
          silent: !0,
          handleAutoShown: function() {
            return !0;
          }
        });
        var n = new Bt({
          x: e.position[0],
          y: e.position[1],
          rotation: e.rotation
        });
        n.updateTransform(), this._transformGroup = n;
      }
      return r.prototype.hasBuilder = function(t) {
        return !!R0[t];
      }, r.prototype.add = function(t) {
        R0[t](this.opt, this.axisModel, this.group, this._transformGroup);
      }, r.prototype.getGroup = function() {
        return this.group;
      }, r.innerTextLayout = function(t, e, n) {
        var i = Su(e - t), a, o;
        return ji(i) ? (o = n > 0 ? "top" : "bottom", a = "center") : ji(i - $r) ? (o = n > 0 ? "bottom" : "top", a = "center") : (o = "middle", i > 0 && i < $r ? a = n > 0 ? "right" : "left" : a = n > 0 ? "left" : "right"), {
          rotation: i,
          textAlign: a,
          textVerticalAlign: o
        };
      }, r.makeAxisEventDataBase = function(t) {
        var e = {
          componentType: t.mainType,
          componentIndex: t.componentIndex
        };
        return e[t.mainType + "Index"] = t.componentIndex, e;
      }, r.isLabelSilent = function(t) {
        var e = t.get("tooltip");
        return t.get("silent") || !(t.get("triggerEvent") || e && e.show);
      }, r;
    }()
  ), R0 = {
    axisLine: function(r, t, e, n) {
      var i = t.get(["axisLine", "show"]);
      if (i === "auto" && r.handleAutoShown && (i = r.handleAutoShown("axisLine")), !!i) {
        var a = t.axis.getExtent(), o = n.transform, s = [a[0], 0], l = [a[1], 0], u = s[0] > l[0];
        o && (jt(s, s, o), jt(l, l, o));
        var f = O({
          lineCap: "round"
        }, t.getModel(["axisLine", "lineStyle"]).getLineStyle()), h = new _r({
          shape: {
            x1: s[0],
            y1: s[1],
            x2: l[0],
            y2: l[1]
          },
          style: f,
          strokeContainThreshold: r.strokeContainThreshold || 5,
          silent: !0,
          z2: 1
        });
        ga(h.shape, h.style.lineWidth), h.anid = "line", e.add(h);
        var c = t.get(["axisLine", "symbol"]);
        if (c != null) {
          var v = t.get(["axisLine", "symbolSize"]);
          H(c) && (c = [c, c]), (H(v) || pt(v)) && (v = [v, v]);
          var d = Kg(t.get(["axisLine", "symbolOffset"]) || 0, v), g = v[0], p = v[1];
          M([{
            rotate: r.rotation + Math.PI / 2,
            offset: d[0],
            r: 0
          }, {
            rotate: r.rotation - Math.PI / 2,
            offset: d[1],
            r: Math.sqrt((s[0] - l[0]) * (s[0] - l[0]) + (s[1] - l[1]) * (s[1] - l[1]))
          }], function(y, m) {
            if (c[m] !== "none" && c[m] != null) {
              var _ = Nn(c[m], -g / 2, -p / 2, g, p, f.stroke, !0), S = y.r + y.offset, b = u ? l : s;
              _.attr({
                rotation: y.rotate,
                x: b[0] + S * Math.cos(r.rotation),
                y: b[1] - S * Math.sin(r.rotation),
                silent: !0,
                z2: 11
              }), e.add(_);
            }
          });
        }
      }
    },
    axisTickLabel: function(r, t, e, n) {
      var i = eL(e, n, t, r), a = nL(e, n, t, r);
      if (tL(t, a, i), rL(e, n, t, r.tickDirection), t.get(["axisLabel", "hideOverlap"])) {
        var o = Fm(V(a, function(s) {
          return {
            label: s,
            priority: s.z2,
            defaultAttr: {
              ignore: s.ignore
            }
          };
        }));
        Hm(o);
      }
    },
    axisName: function(r, t, e, n) {
      var i = Mr(r.axisName, t.get("name"));
      if (i) {
        var a = t.get("nameLocation"), o = r.nameDirection, s = t.getModel("nameTextStyle"), l = t.get("nameGap") || 0, u = t.axis.getExtent(), f = u[0] > u[1] ? -1 : 1, h = [
          a === "start" ? u[0] - f * l : a === "end" ? u[1] + f * l : (u[0] + u[1]) / 2,
          // Reuse labelOffset.
          k0(a) ? r.labelOffset + o * l : 0
        ], c, v = t.get("nameRotate");
        v != null && (v = v * $r / 180);
        var d;
        k0(a) ? c = Kr.innerTextLayout(
          r.rotation,
          v ?? r.rotation,
          // Adapt to axis.
          o
        ) : (c = JA(r.rotation, a, v || 0, u), d = r.axisNameAvailableWidth, d != null && (d = Math.abs(d / Math.sin(c.rotation)), !isFinite(d) && (d = null)));
        var g = s.getFont(), p = t.get("nameTruncate", !0) || {}, y = p.ellipsis, m = Mr(r.nameTruncateMaxWidth, p.maxWidth, d), _ = new kt({
          x: h[0],
          y: h[1],
          rotation: c.rotation,
          silent: Kr.isLabelSilent(t),
          style: Sr(s, {
            text: i,
            font: g,
            overflow: "truncate",
            width: m,
            ellipsis: y,
            fill: s.getTextColor() || t.get(["axisLine", "lineStyle", "color"]),
            align: s.get("align") || c.textAlign,
            verticalAlign: s.get("verticalAlign") || c.textVerticalAlign
          }),
          z2: 1
        });
        if (uf({
          el: _,
          componentModel: t,
          itemName: i
        }), _.__fullText = i, _.anid = "name", t.get("triggerEvent")) {
          var S = Kr.makeAxisEventDataBase(t);
          S.targetType = "axisName", S.name = i, st(_).eventData = S;
        }
        n.add(_), _.updateTransform(), e.add(_), _.decomposeTransform();
      }
    }
  };
  function JA(r, t, e, n) {
    var i = Su(e - r), a, o, s = n[0] > n[1], l = t === "start" && !s || t !== "start" && s;
    return ji(i - $r / 2) ? (o = l ? "bottom" : "top", a = "center") : ji(i - $r * 1.5) ? (o = l ? "top" : "bottom", a = "center") : (o = "middle", i < $r * 1.5 && i > $r / 2 ? a = l ? "left" : "right" : a = l ? "right" : "left"), {
      rotation: i,
      textAlign: a,
      textVerticalAlign: o
    };
  }
  function tL(r, t, e) {
    if (!vm(r.axis)) {
      var n = r.get(["axisLabel", "showMinLabel"]), i = r.get(["axisLabel", "showMaxLabel"]);
      t = t || [], e = e || [];
      var a = t[0], o = t[1], s = t[t.length - 1], l = t[t.length - 2], u = e[0], f = e[1], h = e[e.length - 1], c = e[e.length - 2];
      n === !1 ? (Fe(a), Fe(u)) : E0(a, o) && (n ? (Fe(o), Fe(f)) : (Fe(a), Fe(u))), i === !1 ? (Fe(s), Fe(h)) : E0(l, s) && (i ? (Fe(l), Fe(c)) : (Fe(s), Fe(h)));
    }
  }
  function Fe(r) {
    r && (r.ignore = !0);
  }
  function E0(r, t) {
    var e = r && r.getBoundingRect().clone(), n = t && t.getBoundingRect().clone();
    if (!(!e || !n)) {
      var i = Ni([]);
      return fo(i, i, -r.rotation), e.applyTransform(Ir([], i, r.getLocalTransform())), n.applyTransform(Ir([], i, t.getLocalTransform())), e.intersect(n);
    }
  }
  function k0(r) {
    return r === "middle" || r === "center";
  }
  function O0(r, t, e, n, i) {
    for (var a = [], o = [], s = [], l = 0; l < r.length; l++) {
      var u = r[l].coord;
      o[0] = u, o[1] = 0, s[0] = u, s[1] = e, t && (jt(o, o, t), jt(s, s, t));
      var f = new _r({
        shape: {
          x1: o[0],
          y1: o[1],
          x2: s[0],
          y2: s[1]
        },
        style: n,
        z2: 2,
        autoBatch: !0,
        silent: !0
      });
      ga(f.shape, f.style.lineWidth), f.anid = i + "_" + r[l].tickValue, a.push(f);
    }
    return a;
  }
  function eL(r, t, e, n) {
    var i = e.axis, a = e.getModel("axisTick"), o = a.get("show");
    if (o === "auto" && n.handleAutoShown && (o = n.handleAutoShown("axisTick")), !(!o || i.scale.isBlank())) {
      for (var s = a.getModel("lineStyle"), l = n.tickDirection * a.get("length"), u = i.getTicksCoords(), f = O0(u, t.transform, l, lt(s.getLineStyle(), {
        stroke: e.get(["axisLine", "lineStyle", "color"])
      }), "ticks"), h = 0; h < f.length; h++)
        r.add(f[h]);
      return f;
    }
  }
  function rL(r, t, e, n) {
    var i = e.axis, a = e.getModel("minorTick");
    if (!(!a.get("show") || i.scale.isBlank())) {
      var o = i.getMinorTicksCoords();
      if (o.length)
        for (var s = a.getModel("lineStyle"), l = n * a.get("length"), u = lt(s.getLineStyle(), lt(e.getModel("axisTick").getLineStyle(), {
          stroke: e.get(["axisLine", "lineStyle", "color"])
        })), f = 0; f < o.length; f++)
          for (var h = O0(o[f], t.transform, l, u, "minorticks_" + f), c = 0; c < h.length; c++)
            r.add(h[c]);
    }
  }
  function nL(r, t, e, n) {
    var i = e.axis, a = Mr(n.axisLabelShow, e.get(["axisLabel", "show"]));
    if (!(!a || i.scale.isBlank())) {
      var o = e.getModel("axisLabel"), s = o.get("margin"), l = i.getViewLabels(), u = (Mr(n.labelRotate, o.get("rotate")) || 0) * $r / 180, f = Kr.innerTextLayout(n.rotation, u, n.labelDirection), h = e.getCategories && e.getCategories(!0), c = [], v = Kr.isLabelSilent(e), d = e.get("triggerEvent");
      return M(l, function(g, p) {
        var y = i.scale.type === "ordinal" ? i.scale.getRawOrdinalNumber(g.tickValue) : g.tickValue, m = g.formattedLabel, _ = g.rawLabel, S = o;
        if (h && h[y]) {
          var b = h[y];
          W(b) && b.textStyle && (S = new St(b.textStyle, o, e.ecModel));
        }
        var w = S.getTextColor() || e.get(["axisLine", "lineStyle", "color"]), x = i.dataToCoord(y), T = new kt({
          x,
          y: n.labelOffset + n.labelDirection * s,
          rotation: f.rotation,
          silent: v,
          z2: 10 + (g.level || 0),
          style: Sr(S, {
            text: m,
            align: S.getShallow("align", !0) || f.textAlign,
            verticalAlign: S.getShallow("verticalAlign", !0) || S.getShallow("baseline", !0) || f.textVerticalAlign,
            fill: X(w) ? w(
              // (1) In category axis with data zoom, tick is not the original
              // index of axis.data. So tick should not be exposed to user
              // in category axis.
              // (2) Compatible with previous version, which always use formatted label as
              // input. But in interval scale the formatted label is like '223,445', which
              // maked user replace ','. So we modify it to return original val but remain
              // it as 'string' to avoid error in replacing.
              i.type === "category" ? _ : i.type === "value" ? y + "" : y,
              p
            ) : w
          })
        });
        if (T.anid = "label_" + y, d) {
          var D = Kr.makeAxisEventDataBase(e);
          D.targetType = "axisLabel", D.value = _, D.tickIndex = p, i.type === "category" && (D.dataIndex = y), st(T).eventData = D;
        }
        t.add(T), T.updateTransform(), c.push(T), r.add(T), T.decomposeTransform();
      }), c;
    }
  }
  function iL(r, t) {
    var e = {
      /**
       * key: makeKey(axis.model)
       * value: {
       *      axis,
       *      coordSys,
       *      axisPointerModel,
       *      triggerTooltip,
       *      involveSeries,
       *      snap,
       *      seriesModels,
       *      seriesDataCount
       * }
       */
      axesInfo: {},
      seriesInvolved: !1,
      /**
       * key: makeKey(coordSys.model)
       * value: Object: key makeKey(axis.model), value: axisInfo
       */
      coordSysAxesInfo: {},
      coordSysMap: {}
    };
    return aL(e, r, t), e.seriesInvolved && sL(e, r), e;
  }
  function aL(r, t, e) {
    var n = t.getComponent("tooltip"), i = t.getComponent("axisPointer"), a = i.get("link", !0) || [], o = [];
    M(e.getCoordinateSystems(), function(s) {
      if (!s.axisPointerEnabled)
        return;
      var l = Ka(s.model), u = r.coordSysAxesInfo[l] = {};
      r.coordSysMap[l] = s;
      var f = s.model, h = f.getModel("tooltip", n);
      if (M(s.getAxes(), xt(g, !1, null)), s.getTooltipAxes && n && h.get("show")) {
        var c = h.get("trigger") === "axis", v = h.get(["axisPointer", "type"]) === "cross", d = s.getTooltipAxes(h.get(["axisPointer", "axis"]));
        (c || v) && M(d.baseAxes, xt(g, v ? "cross" : !0, c)), v && M(d.otherAxes, xt(g, "cross", !1));
      }
      function g(p, y, m) {
        var _ = m.model.getModel("axisPointer", i), S = _.get("show");
        if (!(!S || S === "auto" && !p && !iv(_))) {
          y == null && (y = _.get("triggerTooltip")), _ = p ? oL(m, h, i, t, p, y) : _;
          var b = _.get("snap"), w = Ka(m.model), x = y || b || m.type === "category", T = r.axesInfo[w] = {
            key: w,
            axis: m,
            coordSys: s,
            axisPointerModel: _,
            triggerTooltip: y,
            involveSeries: x,
            snap: b,
            useHandle: iv(_),
            seriesModels: [],
            linkGroup: null
          };
          u[w] = T, r.seriesInvolved = r.seriesInvolved || x;
          var D = lL(a, m);
          if (D != null) {
            var A = o[D] || (o[D] = {
              axesInfo: {}
            });
            A.axesInfo[w] = T, A.mapper = a[D].mapper, T.linkGroup = A;
          }
        }
      }
    });
  }
  function oL(r, t, e, n, i, a) {
    var o = t.getModel("axisPointer"), s = ["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], l = {};
    M(s, function(c) {
      l[c] = nt(o.get(c));
    }), l.snap = r.type !== "category" && !!a, o.get("type") === "cross" && (l.type = "line");
    var u = l.label || (l.label = {});
    if (u.show == null && (u.show = !1), i === "cross") {
      var f = o.get(["label", "show"]);
      if (u.show = f ?? !0, !a) {
        var h = l.lineStyle = o.get("crossStyle");
        h && lt(u, h.textStyle);
      }
    }
    return r.model.getModel("axisPointer", new St(l, e, n));
  }
  function sL(r, t) {
    t.eachSeries(function(e) {
      var n = e.coordinateSystem, i = e.get(["tooltip", "trigger"], !0), a = e.get(["tooltip", "show"], !0);
      !n || i === "none" || i === !1 || i === "item" || a === !1 || e.get(["axisPointer", "show"], !0) === !1 || M(r.coordSysAxesInfo[Ka(n.model)], function(o) {
        var s = o.axis;
        n.getAxis(s.dim) === s && (o.seriesModels.push(e), o.seriesDataCount == null && (o.seriesDataCount = 0), o.seriesDataCount += e.getData().count());
      });
    });
  }
  function lL(r, t) {
    for (var e = t.model, n = t.dim, i = 0; i < r.length; i++) {
      var a = r[i] || {};
      if (rv(a[n + "AxisId"], e.id) || rv(a[n + "AxisIndex"], e.componentIndex) || rv(a[n + "AxisName"], e.name))
        return i;
    }
  }
  function rv(r, t) {
    return r === "all" || F(r) && ut(r, t) >= 0 || r === t;
  }
  function uL(r) {
    var t = nv(r);
    if (t) {
      var e = t.axisPointerModel, n = t.axis.scale, i = e.option, a = e.get("status"), o = e.get("value");
      o != null && (o = n.parse(o));
      var s = iv(e);
      a == null && (i.status = s ? "show" : "hide");
      var l = n.getExtent().slice();
      l[0] > l[1] && l.reverse(), // Pick a value on axis when initializing.
      (o == null || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), i.value = o, s && (i.status = t.axis.scale.isBlank() ? "hide" : "show");
    }
  }
  function nv(r) {
    var t = (r.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
    return t && t.axesInfo[Ka(r)];
  }
  function fL(r) {
    var t = nv(r);
    return t && t.axisPointerModel;
  }
  function iv(r) {
    return !!r.get(["handle", "show"]);
  }
  function Ka(r) {
    return r.type + "||" + r.id;
  }
  var av = {}, B0 = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e;
      }
      return t.prototype.render = function(e, n, i, a) {
        this.axisPointerClass && uL(e), r.prototype.render.apply(this, arguments), this._doUpdateAxisPointerClass(e, i, !0);
      }, t.prototype.updateAxisPointer = function(e, n, i, a) {
        this._doUpdateAxisPointerClass(e, i, !1);
      }, t.prototype.remove = function(e, n) {
        var i = this._axisPointer;
        i && i.remove(n);
      }, t.prototype.dispose = function(e, n) {
        this._disposeAxisPointer(n), r.prototype.dispose.apply(this, arguments);
      }, t.prototype._doUpdateAxisPointerClass = function(e, n, i) {
        var a = t.getAxisPointerClass(this.axisPointerClass);
        if (a) {
          var o = fL(e);
          o ? (this._axisPointer || (this._axisPointer = new a())).render(e, o, n, i) : this._disposeAxisPointer(n);
        }
      }, t.prototype._disposeAxisPointer = function(e) {
        this._axisPointer && this._axisPointer.dispose(e), this._axisPointer = null;
      }, t.registerAxisPointerClass = function(e, n) {
        if (av[e])
          throw new Error("axisPointer " + e + " exists");
        av[e] = n;
      }, t.getAxisPointerClass = function(e) {
        return e && av[e];
      }, t.type = "axis", t;
    }(ee)
  ), ov = Tt();
  function hL(r, t, e, n) {
    var i = e.axis;
    if (!i.scale.isBlank()) {
      var a = e.getModel("splitArea"), o = a.getModel("areaStyle"), s = o.get("color"), l = n.coordinateSystem.getRect(), u = i.getTicksCoords({
        tickModel: a,
        clamp: !0
      });
      if (u.length) {
        var f = s.length, h = ov(r).splitAreaColors, c = J(), v = 0;
        if (h)
          for (var d = 0; d < u.length; d++) {
            var g = h.get(u[d].tickValue);
            if (g != null) {
              v = (g + (f - 1) * d) % f;
              break;
            }
          }
        var p = i.toGlobalCoord(u[0].coord), y = o.getAreaStyle();
        s = F(s) ? s : [s];
        for (var d = 1; d < u.length; d++) {
          var m = i.toGlobalCoord(u[d].coord), _ = void 0, S = void 0, b = void 0, w = void 0;
          i.isHorizontal() ? (_ = p, S = l.y, b = m - _, w = l.height, p = _ + b) : (_ = l.x, S = p, b = l.width, w = m - S, p = S + w);
          var x = u[d - 1].tickValue;
          x != null && c.set(x, v), t.add(new At({
            anid: x != null ? "area_" + x : null,
            shape: {
              x: _,
              y: S,
              width: b,
              height: w
            },
            style: lt({
              fill: s[v]
            }, y),
            autoBatch: !0,
            silent: !0
          })), v = (v + 1) % f;
        }
        ov(r).splitAreaColors = c;
      }
    }
  }
  function vL(r) {
    ov(r).splitAreaColors = null;
  }
  var cL = ["axisLine", "axisTickLabel", "axisName"], dL = ["splitArea", "splitLine", "minorSplitLine"], N0 = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e.axisPointerClass = "CartesianAxisPointer", e;
      }
      return t.prototype.render = function(e, n, i, a) {
        this.group.removeAll();
        var o = this._axisGroup;
        if (this._axisGroup = new Bt(), this.group.add(this._axisGroup), !!e.get("show")) {
          var s = e.getCoordSysModel(), l = Jh(s, e), u = new Kr(e, O({
            handleAutoShown: function(h) {
              for (var c = s.coordinateSystem.getCartesians(), v = 0; v < c.length; v++)
                if (Dh(c[v].getOtherAxis(e.axis).scale))
                  return !0;
              return !1;
            }
          }, l));
          M(cL, u.add, u), this._axisGroup.add(u.getGroup()), M(dL, function(h) {
            e.get([h, "show"]) && pL[h](this, this._axisGroup, e, s);
          }, this);
          var f = a && a.type === "changeAxisOrder" && a.isInitSort;
          f || op(o, this._axisGroup, e), r.prototype.render.call(this, e, n, i, a);
        }
      }, t.prototype.remove = function() {
        vL(this);
      }, t.type = "cartesianAxis", t;
    }(B0)
  ), pL = {
    splitLine: function(r, t, e, n) {
      var i = e.axis;
      if (!i.scale.isBlank()) {
        var a = e.getModel("splitLine"), o = a.getModel("lineStyle"), s = o.get("color");
        s = F(s) ? s : [s];
        for (var l = n.coordinateSystem.getRect(), u = i.isHorizontal(), f = 0, h = i.getTicksCoords({
          tickModel: a
        }), c = [], v = [], d = o.getLineStyle(), g = 0; g < h.length; g++) {
          var p = i.toGlobalCoord(h[g].coord);
          u ? (c[0] = p, c[1] = l.y, v[0] = p, v[1] = l.y + l.height) : (c[0] = l.x, c[1] = p, v[0] = l.x + l.width, v[1] = p);
          var y = f++ % s.length, m = h[g].tickValue, _ = new _r({
            anid: m != null ? "line_" + h[g].tickValue : null,
            autoBatch: !0,
            shape: {
              x1: c[0],
              y1: c[1],
              x2: v[0],
              y2: v[1]
            },
            style: lt({
              stroke: s[y]
            }, d),
            silent: !0
          });
          ga(_.shape, d.lineWidth), t.add(_);
        }
      }
    },
    minorSplitLine: function(r, t, e, n) {
      var i = e.axis, a = e.getModel("minorSplitLine"), o = a.getModel("lineStyle"), s = n.coordinateSystem.getRect(), l = i.isHorizontal(), u = i.getMinorTicksCoords();
      if (u.length)
        for (var f = [], h = [], c = o.getLineStyle(), v = 0; v < u.length; v++)
          for (var d = 0; d < u[v].length; d++) {
            var g = i.toGlobalCoord(u[v][d].coord);
            l ? (f[0] = g, f[1] = s.y, h[0] = g, h[1] = s.y + s.height) : (f[0] = s.x, f[1] = g, h[0] = s.x + s.width, h[1] = g);
            var p = new _r({
              anid: "minor_line_" + u[v][d].tickValue,
              autoBatch: !0,
              shape: {
                x1: f[0],
                y1: f[1],
                x2: h[0],
                y2: h[1]
              },
              style: c,
              silent: !0
            });
            ga(p.shape, c.lineWidth), t.add(p);
          }
    },
    splitArea: function(r, t, e, n) {
      hL(r, t, e, n);
    }
  }, F0 = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e;
      }
      return t.type = "xAxis", t;
    }(N0)
  ), gL = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = F0.type, e;
      }
      return t.type = "yAxis", t;
    }(N0)
  ), yL = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = "grid", e;
      }
      return t.prototype.render = function(e, n) {
        this.group.removeAll(), e.get("show") && this.group.add(new At({
          shape: e.coordinateSystem.getRect(),
          style: lt({
            fill: e.get("backgroundColor")
          }, e.getItemStyle()),
          silent: !0,
          z2: -1
        }));
      }, t.type = "grid", t;
    }(ee)
  ), z0 = {
    // gridIndex: 0,
    // gridId: '',
    offset: 0
  };
  function mL(r) {
    r.registerComponentView(yL), r.registerComponentModel(HA), r.registerCoordinateSystem("cartesian2d", QA), C0(r, "x", Kh, z0), C0(r, "y", Kh, z0), r.registerComponentView(F0), r.registerComponentView(gL), r.registerPreprocessor(function(t) {
      t.xAxis && t.yAxis && !t.grid && (t.grid = {});
    });
  }
  ve(mL);
  var _L = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e.layoutMode = {
          type: "box",
          ignoreSize: !0
        }, e;
      }
      return t.type = "title", t.defaultOption = {
        // zlevel: 0,
        z: 6,
        show: !0,
        text: "",
        target: "blank",
        subtext: "",
        subtarget: "blank",
        left: 0,
        top: 0,
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "#ccc",
        borderWidth: 0,
        padding: 5,
        itemGap: 10,
        textStyle: {
          fontSize: 18,
          fontWeight: "bold",
          color: "#464646"
        },
        subtextStyle: {
          fontSize: 12,
          color: "#6E7079"
        }
      }, t;
    }(at)
  ), SL = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e;
      }
      return t.prototype.render = function(e, n, i) {
        if (this.group.removeAll(), !!e.get("show")) {
          var a = this.group, o = e.getModel("textStyle"), s = e.getModel("subtextStyle"), l = e.get("textAlign"), u = tt(e.get("textBaseline"), e.get("textVerticalAlign")), f = new kt({
            style: Sr(o, {
              text: e.get("text"),
              fill: o.getTextColor()
            }, {
              disableBox: !0
            }),
            z2: 10
          }), h = f.getBoundingRect(), c = e.get("subtext"), v = new kt({
            style: Sr(s, {
              text: c,
              fill: s.getTextColor(),
              y: h.height + e.get("itemGap"),
              verticalAlign: "top"
            }, {
              disableBox: !0
            }),
            z2: 10
          }), d = e.get("link"), g = e.get("sublink"), p = e.get("triggerEvent", !0);
          f.silent = !d && !p, v.silent = !g && !p, d && f.on("click", function() {
            kp(d, "_" + e.get("target"));
          }), g && v.on("click", function() {
            kp(g, "_" + e.get("subtarget"));
          }), st(f).eventData = st(v).eventData = p ? {
            componentType: "title",
            componentIndex: e.componentIndex
          } : null, a.add(f), c && a.add(v);
          var y = a.getBoundingRect(), m = e.getBoxLayoutParams();
          m.width = y.width, m.height = y.height;
          var _ = En(m, {
            width: i.getWidth(),
            height: i.getHeight()
          }, e.get("padding"));
          l || (l = e.get("left") || e.get("right"), l === "middle" && (l = "center"), l === "right" ? _.x += _.width : l === "center" && (_.x += _.width / 2)), u || (u = e.get("top") || e.get("bottom"), u === "center" && (u = "middle"), u === "bottom" ? _.y += _.height : u === "middle" && (_.y += _.height / 2), u = u || "top"), a.x = _.x, a.y = _.y, a.markRedraw();
          var S = {
            align: l,
            verticalAlign: u
          };
          f.setStyle(S), v.setStyle(S), y = a.getBoundingRect();
          var b = _.margin, w = e.getItemStyle(["color", "opacity"]);
          w.fill = e.get("backgroundColor");
          var x = new At({
            shape: {
              x: y.x - b[3],
              y: y.y - b[0],
              width: y.width + b[1] + b[3],
              height: y.height + b[0] + b[2],
              r: e.get("borderRadius")
            },
            style: w,
            subPixelOptimize: !0,
            silent: !0
          });
          a.add(x);
        }
      }, t.type = "title", t;
    }(ee)
  );
  function wL(r) {
    r.registerComponentModel(_L), r.registerComponentView(SL);
  }
  ve(wL);
  var bL = function(r, t) {
    if (t === "all")
      return {
        type: "all",
        title: r.getLocaleModel().get(["legend", "selector", "all"])
      };
    if (t === "inverse")
      return {
        type: "inverse",
        title: r.getLocaleModel().get(["legend", "selector", "inverse"])
      };
  }, sv = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e.layoutMode = {
          type: "box",
          // legend.width/height are maxWidth/maxHeight actually,
          // whereas real width/height is calculated by its content.
          // (Setting {left: 10, right: 10} does not make sense).
          // So consider the case:
          // `setOption({legend: {left: 10});`
          // then `setOption({legend: {right: 10});`
          // The previous `left` should be cleared by setting `ignoreSize`.
          ignoreSize: !0
        }, e;
      }
      return t.prototype.init = function(e, n, i) {
        this.mergeDefaultAndTheme(e, i), e.selected = e.selected || {}, this._updateSelector(e);
      }, t.prototype.mergeOption = function(e, n) {
        r.prototype.mergeOption.call(this, e, n), this._updateSelector(e);
      }, t.prototype._updateSelector = function(e) {
        var n = e.selector, i = this.ecModel;
        n === !0 && (n = e.selector = ["all", "inverse"]), F(n) && M(n, function(a, o) {
          H(a) && (a = {
            type: a
          }), n[o] = ot(a, bL(i, a.type));
        });
      }, t.prototype.optionUpdated = function() {
        this._updateData(this.ecModel);
        var e = this._data;
        if (e[0] && this.get("selectedMode") === "single") {
          for (var n = !1, i = 0; i < e.length; i++) {
            var a = e[i].get("name");
            if (this.isSelected(a)) {
              this.select(a), n = !0;
              break;
            }
          }
          !n && this.select(e[0].get("name"));
        }
      }, t.prototype._updateData = function(e) {
        var n = [], i = [];
        e.eachRawSeries(function(l) {
          var u = l.name;
          i.push(u);
          var f;
          if (l.legendVisualProvider) {
            var h = l.legendVisualProvider, c = h.getAllNames();
            e.isSeriesFiltered(l) || (i = i.concat(c)), c.length ? n = n.concat(c) : f = !0;
          } else
            f = !0;
          f && Tu(l) && n.push(l.name);
        }), this._availableNames = i;
        var a = this.get("data") || n, o = J(), s = V(a, function(l) {
          return (H(l) || pt(l)) && (l = {
            name: l
          }), o.get(l.name) ? null : (o.set(l.name, !0), new St(l, this, this.ecModel));
        }, this);
        this._data = Dt(s, function(l) {
          return !!l;
        });
      }, t.prototype.getData = function() {
        return this._data;
      }, t.prototype.select = function(e) {
        var n = this.option.selected, i = this.get("selectedMode");
        if (i === "single") {
          var a = this._data;
          M(a, function(o) {
            n[o.get("name")] = !1;
          });
        }
        n[e] = !0;
      }, t.prototype.unSelect = function(e) {
        this.get("selectedMode") !== "single" && (this.option.selected[e] = !1);
      }, t.prototype.toggleSelected = function(e) {
        var n = this.option.selected;
        n.hasOwnProperty(e) || (n[e] = !0), this[n[e] ? "unSelect" : "select"](e);
      }, t.prototype.allSelect = function() {
        var e = this._data, n = this.option.selected;
        M(e, function(i) {
          n[i.get("name", !0)] = !0;
        });
      }, t.prototype.inverseSelect = function() {
        var e = this._data, n = this.option.selected;
        M(e, function(i) {
          var a = i.get("name", !0);
          n.hasOwnProperty(a) || (n[a] = !0), n[a] = !n[a];
        });
      }, t.prototype.isSelected = function(e) {
        var n = this.option.selected;
        return !(n.hasOwnProperty(e) && !n[e]) && ut(this._availableNames, e) >= 0;
      }, t.prototype.getOrient = function() {
        return this.get("orient") === "vertical" ? {
          index: 1,
          name: "vertical"
        } : {
          index: 0,
          name: "horizontal"
        };
      }, t.type = "legend.plain", t.dependencies = ["series"], t.defaultOption = {
        // zlevel: 0,
        z: 4,
        show: !0,
        orient: "horizontal",
        left: "center",
        // right: 'center',
        top: 0,
        // bottom: null,
        align: "auto",
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "#ccc",
        borderRadius: 0,
        borderWidth: 0,
        padding: 5,
        itemGap: 10,
        itemWidth: 25,
        itemHeight: 14,
        symbolRotate: "inherit",
        symbolKeepAspect: !0,
        inactiveColor: "#ccc",
        inactiveBorderColor: "#ccc",
        inactiveBorderWidth: "auto",
        itemStyle: {
          color: "inherit",
          opacity: "inherit",
          borderColor: "inherit",
          borderWidth: "auto",
          borderCap: "inherit",
          borderJoin: "inherit",
          borderDashOffset: "inherit",
          borderMiterLimit: "inherit"
        },
        lineStyle: {
          width: "auto",
          color: "inherit",
          inactiveColor: "#ccc",
          inactiveWidth: 2,
          opacity: "inherit",
          type: "inherit",
          cap: "inherit",
          join: "inherit",
          dashOffset: "inherit",
          miterLimit: "inherit"
        },
        textStyle: {
          color: "#333"
        },
        selectedMode: !0,
        selector: !1,
        selectorLabel: {
          show: !0,
          borderRadius: 10,
          padding: [3, 5, 3, 5],
          fontSize: 12,
          fontFamily: "sans-serif",
          color: "#666",
          borderWidth: 1,
          borderColor: "#666"
        },
        emphasis: {
          selectorLabel: {
            show: !0,
            color: "#eee",
            backgroundColor: "#666"
          }
        },
        selectorPosition: "auto",
        selectorItemGap: 7,
        selectorButtonGap: 10,
        tooltip: {
          show: !1
        }
      }, t;
    }(at)
  );
  function xL(r, t) {
    var e = Ta(t.get("padding")), n = t.getItemStyle(["color", "opacity"]);
    return n.fill = t.get("backgroundColor"), r = new At({
      shape: {
        x: r.x - e[3],
        y: r.y - e[0],
        width: r.width + e[1] + e[3],
        height: r.height + e[0] + e[2],
        r: t.get("borderRadius")
      },
      style: n,
      silent: !0,
      z2: -1
    }), r;
  }
  var Pi = xt, lv = M, Sl = Bt, G0 = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e.newlineDisabled = !1, e;
      }
      return t.prototype.init = function() {
        this.group.add(this._contentGroup = new Sl()), this.group.add(this._selectorGroup = new Sl()), this._isFirstRender = !0;
      }, t.prototype.getContentGroup = function() {
        return this._contentGroup;
      }, t.prototype.getSelectorGroup = function() {
        return this._selectorGroup;
      }, t.prototype.render = function(e, n, i) {
        var a = this._isFirstRender;
        if (this._isFirstRender = !1, this.resetInner(), !!e.get("show", !0)) {
          var o = e.get("align"), s = e.get("orient");
          (!o || o === "auto") && (o = e.get("left") === "right" && s === "vertical" ? "right" : "left");
          var l = e.get("selector", !0), u = e.get("selectorPosition", !0);
          l && (!u || u === "auto") && (u = s === "horizontal" ? "end" : "start"), this.renderInner(o, e, n, i, l, s, u);
          var f = e.getBoxLayoutParams(), h = {
            width: i.getWidth(),
            height: i.getHeight()
          }, c = e.get("padding"), v = En(f, h, c), d = this.layoutInner(e, o, v, a, l, u), g = En(lt({
            width: d.width,
            height: d.height
          }, f), h, c);
          this.group.x = g.x - d.x, this.group.y = g.y - d.y, this.group.markRedraw(), this.group.add(this._backgroundEl = xL(d, e));
        }
      }, t.prototype.resetInner = function() {
        this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll();
      }, t.prototype.renderInner = function(e, n, i, a, o, s, l) {
        var u = this.getContentGroup(), f = J(), h = n.get("selectedMode"), c = [];
        i.eachRawSeries(function(v) {
          !v.get("legendHoverLink") && c.push(v.id);
        }), lv(n.getData(), function(v, d) {
          var g = v.get("name");
          if (!this.newlineDisabled && (g === "" || g === `
`)) {
            var p = new Sl();
            p.newline = !0, u.add(p);
            return;
          }
          var y = i.getSeriesByName(g)[0];
          if (!f.get(g)) {
            if (y) {
              var m = y.getData(), _ = m.getVisual("legendLineStyle") || {}, S = m.getVisual("legendIcon"), b = m.getVisual("style"), w = this._createItem(y, g, d, v, n, e, _, b, S, h, a);
              w.on("click", Pi(H0, g, null, a, c)).on("mouseover", Pi(uv, y.name, null, a, c)).on("mouseout", Pi(fv, y.name, null, a, c)), f.set(g, !0);
            } else
              i.eachRawSeries(function(x) {
                if (!f.get(g) && x.legendVisualProvider) {
                  var T = x.legendVisualProvider;
                  if (!T.containName(g))
                    return;
                  var D = T.indexOfName(g), A = T.getItemVisual(D, "style"), C = T.getItemVisual(D, "legendIcon"), L = ye(A.fill);
                  L && L[3] === 0 && (L[3] = 0.2, A = O(O({}, A), {
                    fill: Or(L, "rgba")
                  }));
                  var P = this._createItem(x, g, d, v, n, e, {}, A, C, h, a);
                  P.on("click", Pi(H0, null, g, a, c)).on("mouseover", Pi(uv, null, g, a, c)).on("mouseout", Pi(fv, null, g, a, c)), f.set(g, !0);
                }
              }, this);
            f.get(g) || console.warn(g + " series not exists. Legend data should be same with series name or data name.");
          }
        }, this), o && this._createSelector(o, n, a, s, l);
      }, t.prototype._createSelector = function(e, n, i, a, o) {
        var s = this.getSelectorGroup();
        lv(e, function(u) {
          var f = u.type, h = new kt({
            style: {
              x: 0,
              y: 0,
              align: "center",
              verticalAlign: "middle"
            },
            onclick: function() {
              i.dispatchAction({
                type: f === "all" ? "legendAllSelect" : "legendInverseSelect"
              });
            }
          });
          s.add(h);
          var c = n.getModel("selectorLabel"), v = n.getModel(["emphasis", "selectorLabel"]);
          ya(h, {
            normal: c,
            emphasis: v
          }, {
            defaultText: u.title
          }), jo(h);
        });
      }, t.prototype._createItem = function(e, n, i, a, o, s, l, u, f, h, c) {
        var v = e.visualDrawType, d = o.get("itemWidth"), g = o.get("itemHeight"), p = o.isSelected(n), y = a.get("symbolRotate"), m = a.get("symbolKeepAspect"), _ = a.get("icon");
        f = _ || f || "roundRect";
        var S = TL(f, a, l, u, v, p, c), b = new Sl(), w = a.getModel("textStyle");
        if (X(e.getLegendIcon) && (!_ || _ === "inherit"))
          b.add(e.getLegendIcon({
            itemWidth: d,
            itemHeight: g,
            icon: f,
            iconRotate: y,
            itemStyle: S.itemStyle,
            lineStyle: S.lineStyle,
            symbolKeepAspect: m
          }));
        else {
          var x = _ === "inherit" && e.getData().getVisual("symbol") ? y === "inherit" ? e.getData().getVisual("symbolRotate") : y : 0;
          b.add(CL({
            itemWidth: d,
            itemHeight: g,
            icon: f,
            iconRotate: x,
            itemStyle: S.itemStyle,
            lineStyle: S.lineStyle,
            symbolKeepAspect: m
          }));
        }
        var T = s === "left" ? d + 5 : -5, D = s, A = o.get("formatter"), C = n;
        H(A) && A ? C = A.replace("{name}", n ?? "") : X(A) && (C = A(n));
        var L = a.get("inactiveColor");
        b.add(new kt({
          style: Sr(w, {
            text: C,
            x: T,
            y: g / 2,
            fill: p ? w.getTextColor() : L,
            align: D,
            verticalAlign: "middle"
          })
        }));
        var P = new At({
          shape: b.getBoundingRect(),
          invisible: !0
        }), I = a.getModel("tooltip");
        return I.get("show") && uf({
          el: P,
          componentModel: o,
          itemName: n,
          itemTooltipOption: I.option
        }), b.add(P), b.eachChild(function(R) {
          R.silent = !0;
        }), P.silent = !h, this.getContentGroup().add(b), jo(b), b.__legendDataIndex = i, b;
      }, t.prototype.layoutInner = function(e, n, i, a, o, s) {
        var l = this.getContentGroup(), u = this.getSelectorGroup();
        Ca(e.get("orient"), l, e.get("itemGap"), i.width, i.height);
        var f = l.getBoundingRect(), h = [-f.x, -f.y];
        if (u.markRedraw(), l.markRedraw(), o) {
          Ca(
            // Buttons in selectorGroup always layout horizontally
            "horizontal",
            u,
            e.get("selectorItemGap", !0)
          );
          var c = u.getBoundingRect(), v = [-c.x, -c.y], d = e.get("selectorButtonGap", !0), g = e.getOrient().index, p = g === 0 ? "width" : "height", y = g === 0 ? "height" : "width", m = g === 0 ? "y" : "x";
          s === "end" ? v[g] += f[p] + d : h[g] += c[p] + d, v[1 - g] += f[y] / 2 - c[y] / 2, u.x = v[0], u.y = v[1], l.x = h[0], l.y = h[1];
          var _ = {
            x: 0,
            y: 0
          };
          return _[p] = f[p] + d + c[p], _[y] = Math.max(f[y], c[y]), _[m] = Math.min(0, c[m] + v[1 - g]), _;
        } else
          return l.x = h[0], l.y = h[1], this.group.getBoundingRect();
      }, t.prototype.remove = function() {
        this.getContentGroup().removeAll(), this._isFirstRender = !0;
      }, t.type = "legend.plain", t;
    }(ee)
  );
  function TL(r, t, e, n, i, a, o) {
    function s(p, y) {
      p.lineWidth === "auto" && (p.lineWidth = y.lineWidth > 0 ? 2 : 0), lv(p, function(m, _) {
        p[_] === "inherit" && (p[_] = y[_]);
      });
    }
    var l = t.getModel("itemStyle"), u = l.getItemStyle(), f = r.lastIndexOf("empty", 0) === 0 ? "fill" : "stroke", h = l.getShallow("decal");
    u.decal = !h || h === "inherit" ? n.decal : th(h, o), u.fill === "inherit" && (u.fill = n[i]), u.stroke === "inherit" && (u.stroke = n[f]), u.opacity === "inherit" && (u.opacity = (i === "fill" ? n : e).opacity), s(u, n);
    var c = t.getModel("lineStyle"), v = c.getLineStyle();
    if (s(v, e), u.fill === "auto" && (u.fill = n.fill), u.stroke === "auto" && (u.stroke = n.fill), v.stroke === "auto" && (v.stroke = n.fill), !a) {
      var d = t.get("inactiveBorderWidth"), g = u[f];
      u.lineWidth = d === "auto" ? n.lineWidth > 0 && g ? 2 : 0 : u.lineWidth, u.fill = t.get("inactiveColor"), u.stroke = t.get("inactiveBorderColor"), v.stroke = c.get("inactiveColor"), v.lineWidth = c.get("inactiveWidth");
    }
    return {
      itemStyle: u,
      lineStyle: v
    };
  }
  function CL(r) {
    var t = r.icon || "roundRect", e = Nn(t, 0, 0, r.itemWidth, r.itemHeight, r.itemStyle.fill, r.symbolKeepAspect);
    return e.setStyle(r.itemStyle), e.rotation = (r.iconRotate || 0) * Math.PI / 180, e.setOrigin([r.itemWidth / 2, r.itemHeight / 2]), t.indexOf("empty") > -1 && (e.style.stroke = e.style.fill, e.style.fill = "#fff", e.style.lineWidth = 2), e;
  }
  function H0(r, t, e, n) {
    fv(r, t, e, n), e.dispatchAction({
      type: "legendToggleSelect",
      name: r ?? t
    }), uv(r, t, e, n);
  }
  function V0(r) {
    for (var t = r.getZr().storage.getDisplayList(), e, n = 0, i = t.length; n < i && !(e = t[n].states.emphasis); )
      n++;
    return e && e.hoverLayer;
  }
  function uv(r, t, e, n) {
    V0(e) || e.dispatchAction({
      type: "highlight",
      seriesName: r,
      name: t,
      excludeSeriesId: n
    });
  }
  function fv(r, t, e, n) {
    V0(e) || e.dispatchAction({
      type: "downplay",
      seriesName: r,
      name: t,
      excludeSeriesId: n
    });
  }
  function DL(r) {
    var t = r.findComponents({
      mainType: "legend"
    });
    t && t.length && r.filterSeries(function(e) {
      for (var n = 0; n < t.length; n++)
        if (!t[n].isSelected(e.name))
          return !1;
      return !0;
    });
  }
  function Qa(r, t, e) {
    var n = {}, i = r === "toggleSelected", a;
    return e.eachComponent("legend", function(o) {
      i && a != null ? o[a ? "select" : "unSelect"](t.name) : r === "allSelect" || r === "inverseSelect" ? o[r]() : (o[r](t.name), a = o.isSelected(t.name));
      var s = o.getData();
      M(s, function(l) {
        var u = l.get("name");
        if (!(u === `
` || u === "")) {
          var f = o.isSelected(u);
          n.hasOwnProperty(u) ? n[u] = n[u] && f : n[u] = f;
        }
      });
    }), r === "allSelect" || r === "inverseSelect" ? {
      selected: n
    } : {
      name: t.name,
      selected: n
    };
  }
  function ML(r) {
    r.registerAction("legendToggleSelect", "legendselectchanged", xt(Qa, "toggleSelected")), r.registerAction("legendAllSelect", "legendselectall", xt(Qa, "allSelect")), r.registerAction("legendInverseSelect", "legendinverseselect", xt(Qa, "inverseSelect")), r.registerAction("legendSelect", "legendselected", xt(Qa, "select")), r.registerAction("legendUnSelect", "legendunselected", xt(Qa, "unSelect"));
  }
  function AL(r) {
    r.registerComponentModel(sv), r.registerComponentView(G0), r.registerProcessor(r.PRIORITY.PROCESSOR.SERIES_FILTER, DL), r.registerSubTypeDefaulter("legend", function() {
      return "plain";
    }), ML(r);
  }
  var LL = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e;
      }
      return t.prototype.setScrollDataIndex = function(e) {
        this.option.scrollDataIndex = e;
      }, t.prototype.init = function(e, n, i) {
        var a = As(e);
        r.prototype.init.call(this, e, n, i), W0(this, e, a);
      }, t.prototype.mergeOption = function(e, n) {
        r.prototype.mergeOption.call(this, e, n), W0(this, this.option, e);
      }, t.type = "legend.scroll", t.defaultOption = _p(sv.defaultOption, {
        scrollDataIndex: 0,
        pageButtonItemGap: 5,
        pageButtonGap: null,
        pageButtonPosition: "end",
        pageFormatter: "{current}/{total}",
        pageIcons: {
          horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
          vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
        },
        pageIconColor: "#2f4554",
        pageIconInactiveColor: "#aaa",
        pageIconSize: 15,
        pageTextStyle: {
          color: "#333"
        },
        animationDurationUpdate: 800
      }), t;
    }(sv)
  );
  function W0(r, t, e) {
    var n = r.getOrient(), i = [1, 1];
    i[n.index] = 0, Si(t, e, {
      type: "box",
      ignoreSize: !!i
    });
  }
  var U0 = Bt, hv = ["width", "height"], vv = ["x", "y"], PL = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e.newlineDisabled = !0, e._currentIndex = 0, e;
      }
      return t.prototype.init = function() {
        r.prototype.init.call(this), this.group.add(this._containerGroup = new U0()), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new U0());
      }, t.prototype.resetInner = function() {
        r.prototype.resetInner.call(this), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null;
      }, t.prototype.renderInner = function(e, n, i, a, o, s, l) {
        var u = this;
        r.prototype.renderInner.call(this, e, n, i, a, o, s, l);
        var f = this._controllerGroup, h = n.get("pageIconSize", !0), c = F(h) ? h : [h, h];
        d("pagePrev", 0);
        var v = n.getModel("pageTextStyle");
        f.add(new kt({
          name: "pageText",
          style: {
            // Placeholder to calculate a proper layout.
            text: "xx/xx",
            fill: v.getTextColor(),
            font: v.getFont(),
            verticalAlign: "middle",
            align: "center"
          },
          silent: !0
        })), d("pageNext", 1);
        function d(g, p) {
          var y = g + "DataIndex", m = ps(n.get("pageIcons", !0)[n.getOrient().name][p], {
            // Buttons will be created in each render, so we do not need
            // to worry about avoiding using legendModel kept in scope.
            onclick: gt(u._pageGo, u, y, n, a)
          }, {
            x: -c[0] / 2,
            y: -c[1] / 2,
            width: c[0],
            height: c[1]
          });
          m.name = g, f.add(m);
        }
      }, t.prototype.layoutInner = function(e, n, i, a, o, s) {
        var l = this.getSelectorGroup(), u = e.getOrient().index, f = hv[u], h = vv[u], c = hv[1 - u], v = vv[1 - u];
        o && Ca(
          // Buttons in selectorGroup always layout horizontally
          "horizontal",
          l,
          e.get("selectorItemGap", !0)
        );
        var d = e.get("selectorButtonGap", !0), g = l.getBoundingRect(), p = [-g.x, -g.y], y = nt(i);
        o && (y[f] = i[f] - g[f] - d);
        var m = this._layoutContentAndController(e, a, y, u, f, c, v, h);
        if (o) {
          if (s === "end")
            p[u] += m[f] + d;
          else {
            var _ = g[f] + d;
            p[u] -= _, m[h] -= _;
          }
          m[f] += g[f] + d, p[1 - u] += m[v] + m[c] / 2 - g[c] / 2, m[c] = Math.max(m[c], g[c]), m[v] = Math.min(m[v], g[v] + p[1 - u]), l.x = p[0], l.y = p[1], l.markRedraw();
        }
        return m;
      }, t.prototype._layoutContentAndController = function(e, n, i, a, o, s, l, u) {
        var f = this.getContentGroup(), h = this._containerGroup, c = this._controllerGroup;
        Ca(e.get("orient"), f, e.get("itemGap"), a ? i.width : null, a ? null : i.height), Ca(
          // Buttons in controller are layout always horizontally.
          "horizontal",
          c,
          e.get("pageButtonItemGap", !0)
        );
        var v = f.getBoundingRect(), d = c.getBoundingRect(), g = this._showController = v[o] > i[o], p = [-v.x, -v.y];
        n || (p[a] = f[u]);
        var y = [0, 0], m = [-d.x, -d.y], _ = tt(e.get("pageButtonGap", !0), e.get("itemGap", !0));
        if (g) {
          var S = e.get("pageButtonPosition", !0);
          S === "end" ? m[a] += i[o] - d[o] : y[a] += d[o] + _;
        }
        m[1 - a] += v[s] / 2 - d[s] / 2, f.setPosition(p), h.setPosition(y), c.setPosition(m);
        var b = {
          x: 0,
          y: 0
        };
        if (b[o] = g ? i[o] : v[o], b[s] = Math.max(v[s], d[s]), b[l] = Math.min(0, d[l] + m[1 - a]), h.__rectSize = i[o], g) {
          var w = {
            x: 0,
            y: 0
          };
          w[o] = Math.max(i[o] - d[o] - _, 0), w[s] = b[s], h.setClipPath(new At({
            shape: w
          })), h.__rectSize = w[o];
        } else
          c.eachChild(function(T) {
            T.attr({
              invisible: !0,
              silent: !0
            });
          });
        var x = this._getPageInfo(e);
        return x.pageIndex != null && Ot(
          f,
          {
            x: x.contentPosition[0],
            y: x.contentPosition[1]
          },
          // When switch from "show controller" to "not show controller", view should be
          // updated immediately without animation, otherwise causes weird effect.
          g ? e : null
        ), this._updatePageInfoView(e, x), b;
      }, t.prototype._pageGo = function(e, n, i) {
        var a = this._getPageInfo(n)[e];
        a != null && i.dispatchAction({
          type: "legendScroll",
          scrollDataIndex: a,
          legendId: n.id
        });
      }, t.prototype._updatePageInfoView = function(e, n) {
        var i = this._controllerGroup;
        M(["pagePrev", "pageNext"], function(f) {
          var h = f + "DataIndex", c = n[h] != null, v = i.childOfName(f);
          v && (v.setStyle("fill", c ? e.get("pageIconColor", !0) : e.get("pageIconInactiveColor", !0)), v.cursor = c ? "pointer" : "default");
        });
        var a = i.childOfName("pageText"), o = e.get("pageFormatter"), s = n.pageIndex, l = s != null ? s + 1 : 0, u = n.pageCount;
        a && o && a.setStyle("text", H(o) ? o.replace("{current}", l == null ? "" : l + "").replace("{total}", u == null ? "" : u + "") : o({
          current: l,
          total: u
        }));
      }, t.prototype._getPageInfo = function(e) {
        var n = e.get("scrollDataIndex", !0), i = this.getContentGroup(), a = this._containerGroup.__rectSize, o = e.getOrient().index, s = hv[o], l = vv[o], u = this._findTargetItemIndex(n), f = i.children(), h = f[u], c = f.length, v = c ? 1 : 0, d = {
          contentPosition: [i.x, i.y],
          pageCount: v,
          pageIndex: v - 1,
          pagePrevDataIndex: null,
          pageNextDataIndex: null
        };
        if (!h)
          return d;
        var g = S(h);
        d.contentPosition[o] = -g.s;
        for (var p = u + 1, y = g, m = g, _ = null; p <= c; ++p)
          _ = S(f[p]), // Half of the last item is out of the window.
          (!_ && m.e > y.s + a || // If the current item does not intersect with the window, the new page
          // can be started at the current item or the last item.
          _ && !b(_, y.s)) && (m.i > y.i ? y = m : y = _, y && (d.pageNextDataIndex == null && (d.pageNextDataIndex = y.i), ++d.pageCount)), m = _;
        for (var p = u - 1, y = g, m = g, _ = null; p >= -1; --p)
          _ = S(f[p]), // If the the end item does not intersect with the window started
          // from the current item, a page can be settled.
          (!_ || !b(m, _.s)) && // e.g., when page size is smaller than item size.
          y.i < m.i && (m = y, d.pagePrevDataIndex == null && (d.pagePrevDataIndex = y.i), ++d.pageCount, ++d.pageIndex), y = _;
        return d;
        function S(w) {
          if (w) {
            var x = w.getBoundingRect(), T = x[l] + w[l];
            return {
              s: T,
              e: T + x[s],
              i: w.__legendDataIndex
            };
          }
        }
        function b(w, x) {
          return w.e >= x && w.s <= x + a;
        }
      }, t.prototype._findTargetItemIndex = function(e) {
        if (!this._showController)
          return 0;
        var n, i = this.getContentGroup(), a;
        return i.eachChild(function(o, s) {
          var l = o.__legendDataIndex;
          a == null && l != null && (a = s), l === e && (n = s);
        }), n ?? a;
      }, t.type = "legend.scroll", t;
    }(G0)
  );
  function IL(r) {
    r.registerAction("legendScroll", "legendscroll", function(t, e) {
      var n = t.scrollDataIndex;
      n != null && e.eachComponent({
        mainType: "legend",
        subType: "scroll",
        query: t
      }, function(i) {
        i.setScrollDataIndex(n);
      });
    });
  }
  function RL(r) {
    ve(AL), r.registerComponentModel(LL), r.registerComponentView(PL), IL(r);
  }
  ve(RL);
  var qn = Tt(), Y0 = nt, cv = gt, EL = (
    /** @class */
    function() {
      function r() {
        this._dragging = !1, this.animationThreshold = 15;
      }
      return r.prototype.render = function(t, e, n, i) {
        var a = e.get("value"), o = e.get("status");
        if (this._axisModel = t, this._axisPointerModel = e, this._api = n, !(!i && this._lastValue === a && this._lastStatus === o)) {
          this._lastValue = a, this._lastStatus = o;
          var s = this._group, l = this._handle;
          if (!o || o === "hide") {
            s && s.hide(), l && l.hide();
            return;
          }
          s && s.show(), l && l.show();
          var u = {};
          this.makeElOption(u, a, t, e, n);
          var f = u.graphicKey;
          f !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = f;
          var h = this._moveAnimation = this.determineAnimation(t, e);
          if (!s)
            s = this._group = new Bt(), this.createPointerEl(s, u, t, e), this.createLabelEl(s, u, t, e), n.getZr().add(s);
          else {
            var c = xt(X0, e, h);
            this.updatePointerEl(s, u, c), this.updateLabelEl(s, u, c, e);
          }
          $0(s, e, !0), this._renderHandle(a);
        }
      }, r.prototype.remove = function(t) {
        this.clear(t);
      }, r.prototype.dispose = function(t) {
        this.clear(t);
      }, r.prototype.determineAnimation = function(t, e) {
        var n = e.get("animation"), i = t.axis, a = i.type === "category", o = e.get("snap");
        if (!o && !a)
          return !1;
        if (n === "auto" || n == null) {
          var s = this.animationThreshold;
          if (a && i.getBandWidth() > s)
            return !0;
          if (o) {
            var l = nv(t).seriesDataCount, u = i.getExtent();
            return Math.abs(u[0] - u[1]) / l > s;
          }
          return !1;
        }
        return n === !0;
      }, r.prototype.makeElOption = function(t, e, n, i, a) {
      }, r.prototype.createPointerEl = function(t, e, n, i) {
        var a = e.pointer;
        if (a) {
          var o = qn(t).pointerEl = new xb[a.type](Y0(e.pointer));
          t.add(o);
        }
      }, r.prototype.createLabelEl = function(t, e, n, i) {
        if (e.label) {
          var a = qn(t).labelEl = new kt(Y0(e.label));
          t.add(a), Z0(a, i);
        }
      }, r.prototype.updatePointerEl = function(t, e, n) {
        var i = qn(t).pointerEl;
        i && e.pointer && (i.setStyle(e.pointer.style), n(i, {
          shape: e.pointer.shape
        }));
      }, r.prototype.updateLabelEl = function(t, e, n, i) {
        var a = qn(t).labelEl;
        a && (a.setStyle(e.label.style), n(a, {
          // Consider text length change in vertical axis, animation should
          // be used on shape, otherwise the effect will be weird.
          // TODOTODO
          // shape: elOption.label.shape,
          x: e.label.x,
          y: e.label.y
        }), Z0(a, i));
      }, r.prototype._renderHandle = function(t) {
        if (!(this._dragging || !this.updateHandleTransform)) {
          var e = this._axisPointerModel, n = this._api.getZr(), i = this._handle, a = e.getModel("handle"), o = e.get("status");
          if (!a.get("show") || !o || o === "hide") {
            i && n.remove(i), this._handle = null;
            return;
          }
          var s;
          this._handle || (s = !0, i = this._handle = ps(a.get("icon"), {
            cursor: "move",
            draggable: !0,
            onmousemove: function(u) {
              Fv(u.event);
            },
            onmousedown: cv(this._onHandleDragMove, this, 0, 0),
            drift: cv(this._onHandleDragMove, this),
            ondragend: cv(this._onHandleDragEnd, this)
          }), n.add(i)), $0(i, e, !1), i.setStyle(a.getItemStyle(null, ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"]));
          var l = a.get("size");
          F(l) || (l = [l, l]), i.scaleX = l[0] / 2, i.scaleY = l[1] / 2, Bg(this, "_doDispatchAxisPointer", a.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, s);
        }
      }, r.prototype._moveHandleToValue = function(t, e) {
        X0(this._axisPointerModel, !e && this._moveAnimation, this._handle, dv(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)));
      }, r.prototype._onHandleDragMove = function(t, e) {
        var n = this._handle;
        if (n) {
          this._dragging = !0;
          var i = this.updateHandleTransform(dv(n), [t, e], this._axisModel, this._axisPointerModel);
          this._payloadInfo = i, n.stopAnimation(), n.attr(dv(i)), qn(n).lastProp = null, this._doDispatchAxisPointer();
        }
      }, r.prototype._doDispatchAxisPointer = function() {
        var t = this._handle;
        if (t) {
          var e = this._payloadInfo, n = this._axisModel;
          this._api.dispatchAction({
            type: "updateAxisPointer",
            x: e.cursorPoint[0],
            y: e.cursorPoint[1],
            tooltipOption: e.tooltipOption,
            axesInfo: [{
              axisDim: n.axis.dim,
              axisIndex: n.componentIndex
            }]
          });
        }
      }, r.prototype._onHandleDragEnd = function() {
        this._dragging = !1;
        var t = this._handle;
        if (t) {
          var e = this._axisPointerModel.get("value");
          this._moveHandleToValue(e), this._api.dispatchAction({
            type: "hideTip"
          });
        }
      }, r.prototype.clear = function(t) {
        this._lastValue = null, this._lastStatus = null;
        var e = t.getZr(), n = this._group, i = this._handle;
        e && n && (this._lastGraphicKey = null, n && e.remove(n), i && e.remove(i), this._group = null, this._handle = null, this._payloadInfo = null), qf(this, "_doDispatchAxisPointer");
      }, r.prototype.doClear = function() {
      }, r.prototype.buildLabel = function(t, e, n) {
        return n = n || 0, {
          x: t[n],
          y: t[1 - n],
          width: e[n],
          height: e[1 - n]
        };
      }, r;
    }()
  );
  function X0(r, t, e, n) {
    q0(qn(e).lastProp, n) || (qn(e).lastProp = n, t ? Ot(e, n, r) : (e.stopAnimation(), e.attr(n)));
  }
  function q0(r, t) {
    if (W(r) && W(t)) {
      var e = !0;
      return M(t, function(n, i) {
        e = e && q0(r[i], n);
      }), !!e;
    } else
      return r === t;
  }
  function Z0(r, t) {
    r[t.get(["label", "show"]) ? "show" : "hide"]();
  }
  function dv(r) {
    return {
      x: r.x || 0,
      y: r.y || 0,
      rotation: r.rotation || 0
    };
  }
  function $0(r, t, e) {
    var n = t.get("z"), i = t.get("zlevel");
    r && r.traverse(function(a) {
      a.type !== "group" && (n != null && (a.z = n), i != null && (a.zlevel = i), a.silent = e);
    });
  }
  function kL(r) {
    var t = r.get("type"), e = r.getModel(t + "Style"), n;
    return t === "line" ? (n = e.getLineStyle(), n.fill = null) : t === "shadow" && (n = e.getAreaStyle(), n.stroke = null), n;
  }
  function OL(r, t, e, n, i) {
    var a = e.get("value"), o = K0(a, t.axis, t.ecModel, e.get("seriesDataIndices"), {
      precision: e.get(["label", "precision"]),
      formatter: e.get(["label", "formatter"])
    }), s = e.getModel("label"), l = Ta(s.get("padding") || 0), u = s.getFont(), f = cu(o, u), h = i.position, c = f.width + l[1] + l[3], v = f.height + l[0] + l[2], d = i.align;
    d === "right" && (h[0] -= c), d === "center" && (h[0] -= c / 2);
    var g = i.verticalAlign;
    g === "bottom" && (h[1] -= v), g === "middle" && (h[1] -= v / 2), BL(h, c, v, n);
    var p = s.get("backgroundColor");
    (!p || p === "auto") && (p = t.get(["axisLine", "lineStyle", "color"])), r.label = {
      // shape: {x: 0, y: 0, width: width, height: height, r: labelModel.get('borderRadius')},
      x: h[0],
      y: h[1],
      style: Sr(s, {
        text: o,
        font: u,
        fill: s.getTextColor(),
        padding: l,
        backgroundColor: p
      }),
      // Label should be over axisPointer.
      z2: 10
    };
  }
  function BL(r, t, e, n) {
    var i = n.getWidth(), a = n.getHeight();
    r[0] = Math.min(r[0] + t, i) - t, r[1] = Math.min(r[1] + e, a) - e, r[0] = Math.max(r[0], 0), r[1] = Math.max(r[1], 0);
  }
  function K0(r, t, e, n, i) {
    r = t.scale.parse(r);
    var a = t.scale.getLabel({
      value: r
    }, {
      // If `precision` is set, width can be fixed (like '12.00500'), which
      // helps to debounce when when moving label.
      precision: i.precision
    }), o = i.formatter;
    if (o) {
      var s = {
        value: Eh(t, {
          value: r
        }),
        axisDimension: t.dim,
        axisIndex: t.index,
        seriesData: []
      };
      M(n, function(l) {
        var u = e.getSeriesByIndex(l.seriesIndex), f = l.dataIndexInside, h = u && u.getDataParams(f);
        h && s.seriesData.push(h);
      }), H(o) ? a = o.replace("{value}", a) : X(o) && (a = o(s));
    }
    return a;
  }
  function Q0(r, t, e) {
    var n = un();
    return fo(n, n, e.rotation), uo(n, n, e.position), sf([r.dataToCoord(t), (e.labelOffset || 0) + (e.labelDirection || 1) * (e.labelMargin || 0)], n);
  }
  function NL(r, t, e, n, i, a) {
    var o = Kr.innerTextLayout(e.rotation, 0, e.labelDirection);
    e.labelMargin = i.get(["label", "margin"]), OL(t, n, i, a, {
      position: Q0(n.axis, r, e),
      align: o.textAlign,
      verticalAlign: o.textVerticalAlign
    });
  }
  function FL(r, t, e) {
    return e = e || 0, {
      x1: r[e],
      y1: r[1 - e],
      x2: t[e],
      y2: t[1 - e]
    };
  }
  function zL(r, t, e) {
    return e = e || 0, {
      x: r[e],
      y: r[1 - e],
      width: t[e],
      height: t[1 - e]
    };
  }
  var GL = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }
      return t.prototype.makeElOption = function(e, n, i, a, o) {
        var s = i.axis, l = s.grid, u = a.get("type"), f = j0(l, s).getOtherAxis(s).getGlobalExtent(), h = s.toGlobalCoord(s.dataToCoord(n, !0));
        if (u && u !== "none") {
          var c = kL(a), v = HL[u](s, h, f);
          v.style = c, e.graphicKey = v.type, e.pointer = v;
        }
        var d = Jh(l.model, i);
        NL(
          // @ts-ignore
          n,
          e,
          d,
          i,
          a,
          o
        );
      }, t.prototype.getHandleTransform = function(e, n, i) {
        var a = Jh(n.axis.grid.model, n, {
          labelInside: !1
        });
        a.labelMargin = i.get(["handle", "margin"]);
        var o = Q0(n.axis, e, a);
        return {
          x: o[0],
          y: o[1],
          rotation: a.rotation + (a.labelDirection < 0 ? Math.PI : 0)
        };
      }, t.prototype.updateHandleTransform = function(e, n, i, a) {
        var o = i.axis, s = o.grid, l = o.getGlobalExtent(!0), u = j0(s, o).getOtherAxis(o).getGlobalExtent(), f = o.dim === "x" ? 0 : 1, h = [e.x, e.y];
        h[f] += n[f], h[f] = Math.min(l[1], h[f]), h[f] = Math.max(l[0], h[f]);
        var c = (u[1] + u[0]) / 2, v = [c, c];
        v[f] = h[f];
        var d = [{
          verticalAlign: "middle"
        }, {
          align: "center"
        }];
        return {
          x: h[0],
          y: h[1],
          rotation: e.rotation,
          cursorPoint: v,
          tooltipOption: d[f]
        };
      }, t;
    }(EL)
  );
  function j0(r, t) {
    var e = {};
    return e[t.dim + "AxisIndex"] = t.index, r.getCartesian(e);
  }
  var HL = {
    line: function(r, t, e) {
      var n = FL([t, e[0]], [t, e[1]], J0(r));
      return {
        type: "Line",
        subPixelOptimize: !0,
        shape: n
      };
    },
    shadow: function(r, t, e) {
      var n = Math.max(1, r.getBandWidth()), i = e[1] - e[0];
      return {
        type: "Rect",
        shape: zL([t - n / 2, e[0]], [n, i], J0(r))
      };
    }
  };
  function J0(r) {
    return r.dim === "x" ? 0 : 1;
  }
  var VL = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e;
      }
      return t.type = "axisPointer", t.defaultOption = {
        // 'auto' means that show when triggered by tooltip or handle.
        show: "auto",
        // zlevel: 0,
        z: 50,
        type: "line",
        // axispointer triggered by tootip determine snap automatically,
        // see `modelHelper`.
        snap: !1,
        triggerTooltip: !0,
        value: null,
        status: null,
        link: [],
        // Do not set 'auto' here, otherwise global animation: false
        // will not effect at this axispointer.
        animation: null,
        animationDurationUpdate: 200,
        lineStyle: {
          color: "#B9BEC9",
          width: 1,
          type: "dashed"
        },
        shadowStyle: {
          color: "rgba(210,219,238,0.2)"
        },
        label: {
          show: !0,
          formatter: null,
          precision: "auto",
          margin: 3,
          color: "#fff",
          padding: [5, 7, 5, 7],
          backgroundColor: "auto",
          borderColor: null,
          borderWidth: 0,
          borderRadius: 3
        },
        handle: {
          show: !1,
          // eslint-disable-next-line
          icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
          size: 45,
          // handle margin is from symbol center to axis, which is stable when circular move.
          margin: 50,
          // color: '#1b8bbd'
          // color: '#2f4554'
          color: "#333",
          shadowBlur: 3,
          shadowColor: "#aaa",
          shadowOffsetX: 0,
          shadowOffsetY: 2,
          // For mobile performance
          throttle: 40
        }
      }, t;
    }(at)
  ), Tr = Tt(), WL = M;
  function t_(r, t, e) {
    if (!z.node) {
      var n = t.getZr();
      Tr(n).records || (Tr(n).records = {}), UL(n, t);
      var i = Tr(n).records[r] || (Tr(n).records[r] = {});
      i.handler = e;
    }
  }
  function UL(r, t) {
    if (Tr(r).initialized)
      return;
    Tr(r).initialized = !0, e("click", xt(e_, "click")), e("mousemove", xt(e_, "mousemove")), e("globalout", XL);
    function e(n, i) {
      r.on(n, function(a) {
        var o = qL(t);
        WL(Tr(r).records, function(s) {
          s && i(s, a, o.dispatchAction);
        }), YL(o.pendings, t);
      });
    }
  }
  function YL(r, t) {
    var e = r.showTip.length, n = r.hideTip.length, i;
    e ? i = r.showTip[e - 1] : n && (i = r.hideTip[n - 1]), i && (i.dispatchAction = null, t.dispatchAction(i));
  }
  function XL(r, t, e) {
    r.handler("leave", null, e);
  }
  function e_(r, t, e, n) {
    t.handler(r, e, n);
  }
  function qL(r) {
    var t = {
      showTip: [],
      hideTip: []
    }, e = function(n) {
      var i = t[n.type];
      i ? i.push(n) : (n.dispatchAction = e, r.dispatchAction(n));
    };
    return {
      dispatchAction: e,
      pendings: t
    };
  }
  function pv(r, t) {
    if (!z.node) {
      var e = t.getZr(), n = (Tr(e).records || {})[r];
      n && (Tr(e).records[r] = null);
    }
  }
  var ZL = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e;
      }
      return t.prototype.render = function(e, n, i) {
        var a = n.getComponent("tooltip"), o = e.get("triggerOn") || a && a.get("triggerOn") || "mousemove|click";
        t_("axisPointer", i, function(s, l, u) {
          o !== "none" && (s === "leave" || o.indexOf(s) >= 0) && u({
            type: "updateAxisPointer",
            currTrigger: s,
            x: l && l.offsetX,
            y: l && l.offsetY
          });
        });
      }, t.prototype.remove = function(e, n) {
        pv("axisPointer", n);
      }, t.prototype.dispose = function(e, n) {
        pv("axisPointer", n);
      }, t.type = "axisPointer", t;
    }(ee)
  );
  function r_(r, t) {
    var e = [], n = r.seriesIndex, i;
    if (n == null || !(i = t.getSeriesByIndex(n)))
      return {
        point: []
      };
    var a = i.getData(), o = mn(a, r);
    if (o == null || o < 0 || F(o))
      return {
        point: []
      };
    var s = a.getItemGraphicEl(o), l = i.coordinateSystem;
    if (i.getTooltipPosition)
      e = i.getTooltipPosition(o) || [];
    else if (l && l.dataToPoint)
      if (r.isStacked) {
        var u = l.getBaseAxis(), f = l.getOtherAxis(u), h = f.dim, c = u.dim, v = h === "x" || h === "radius" ? 1 : 0, d = a.mapDimension(c), g = [];
        g[v] = a.get(d, o), g[1 - v] = a.get(a.getCalculationInfo("stackResultDimension"), o), e = l.dataToPoint(g) || [];
      } else
        e = l.dataToPoint(a.getValues(V(l.dimensions, function(y) {
          return a.mapDimension(y);
        }), o)) || [];
    else if (s) {
      var p = s.getBoundingRect().clone();
      p.applyTransform(s.transform), e = [p.x + p.width / 2, p.y + p.height / 2];
    }
    return {
      point: e,
      el: s
    };
  }
  var n_ = Tt();
  function $L(r, t, e) {
    var n = r.currTrigger, i = [r.x, r.y], a = r, o = r.dispatchAction || gt(e.dispatchAction, e), s = t.getComponent("axisPointer").coordSysAxesInfo;
    if (s) {
      wl(i) && (i = r_({
        seriesIndex: a.seriesIndex,
        // Do not use dataIndexInside from other ec instance.
        // FIXME: auto detect it?
        dataIndex: a.dataIndex
      }, t).point);
      var l = wl(i), u = a.axesInfo, f = s.axesInfo, h = n === "leave" || wl(i), c = {}, v = {}, d = {
        list: [],
        map: {}
      }, g = {
        showPointer: xt(QL, v),
        showTooltip: xt(jL, d)
      };
      M(s.coordSysMap, function(y, m) {
        var _ = l || y.containPoint(i);
        M(s.coordSysAxesInfo[m], function(S, b) {
          var w = S.axis, x = rP(u, S);
          if (!h && _ && (!u || x)) {
            var T = x && x.value;
            T == null && !l && (T = w.pointToData(i)), T != null && i_(S, T, g, !1, c);
          }
        });
      });
      var p = {};
      return M(f, function(y, m) {
        var _ = y.linkGroup;
        _ && !v[m] && M(_.axesInfo, function(S, b) {
          var w = v[b];
          if (S !== y && w) {
            var x = w.value;
            _.mapper && (x = y.axis.scale.parse(_.mapper(x, a_(S), a_(y)))), p[y.key] = x;
          }
        });
      }), M(p, function(y, m) {
        i_(f[m], y, g, !0, c);
      }), JL(v, f, c), tP(d, i, r, o), eP(f, o, e), c;
    }
  }
  function i_(r, t, e, n, i) {
    var a = r.axis;
    if (!(a.scale.isBlank() || !a.containData(t))) {
      if (!r.involveSeries) {
        e.showPointer(r, t);
        return;
      }
      var o = KL(t, r), s = o.payloadBatch, l = o.snapToValue;
      s[0] && i.seriesIndex == null && O(i, s[0]), !n && r.snap && a.containData(l) && l != null && (t = l), e.showPointer(r, t, s), e.showTooltip(r, o, l);
    }
  }
  function KL(r, t) {
    var e = t.axis, n = e.dim, i = r, a = [], o = Number.MAX_VALUE, s = -1;
    return M(t.seriesModels, function(l, u) {
      var f = l.getData().mapDimensionsAll(n), h, c;
      if (l.getAxisTooltipData) {
        var v = l.getAxisTooltipData(f, r, e);
        c = v.dataIndices, h = v.nestestValue;
      } else {
        if (c = l.getData().indicesOfNearest(
          f[0],
          r,
          // Add a threshold to avoid find the wrong dataIndex
          // when data length is not same.
          // false,
          e.type === "category" ? 0.5 : null
        ), !c.length)
          return;
        h = l.getData().get(f[0], c[0]);
      }
      if (!(h == null || !isFinite(h))) {
        var d = r - h, g = Math.abs(d);
        g <= o && ((g < o || d >= 0 && s < 0) && (o = g, s = d, i = h, a.length = 0), M(c, function(p) {
          a.push({
            seriesIndex: l.seriesIndex,
            dataIndexInside: p,
            dataIndex: l.getData().getRawIndex(p)
          });
        }));
      }
    }), {
      payloadBatch: a,
      snapToValue: i
    };
  }
  function QL(r, t, e, n) {
    r[t.key] = {
      value: e,
      payloadBatch: n
    };
  }
  function jL(r, t, e, n) {
    var i = e.payloadBatch, a = t.axis, o = a.model, s = t.axisPointerModel;
    if (!(!t.triggerTooltip || !i.length)) {
      var l = t.coordSys.model, u = Ka(l), f = r.map[u];
      f || (f = r.map[u] = {
        coordSysId: l.id,
        coordSysIndex: l.componentIndex,
        coordSysType: l.type,
        coordSysMainType: l.mainType,
        dataByAxis: []
      }, r.list.push(f)), f.dataByAxis.push({
        axisDim: a.dim,
        axisIndex: o.componentIndex,
        axisType: o.type,
        axisId: o.id,
        value: n,
        // Caustion: viewHelper.getValueLabel is actually on "view stage", which
        // depends that all models have been updated. So it should not be performed
        // here. Considering axisPointerModel used here is volatile, which is hard
        // to be retrieve in TooltipView, we prepare parameters here.
        valueLabelOpt: {
          precision: s.get(["label", "precision"]),
          formatter: s.get(["label", "formatter"])
        },
        seriesDataIndices: i.slice()
      });
    }
  }
  function JL(r, t, e) {
    var n = e.axesInfo = [];
    M(t, function(i, a) {
      var o = i.axisPointerModel.option, s = r[a];
      s ? (!i.useHandle && (o.status = "show"), o.value = s.value, o.seriesDataIndices = (s.payloadBatch || []).slice()) : !i.useHandle && (o.status = "hide"), o.status === "show" && n.push({
        axisDim: i.axis.dim,
        axisIndex: i.axis.model.componentIndex,
        value: o.value
      });
    });
  }
  function tP(r, t, e, n) {
    if (wl(t) || !r.list.length) {
      n({
        type: "hideTip"
      });
      return;
    }
    var i = ((r.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
    n({
      type: "showTip",
      escapeConnect: !0,
      x: t[0],
      y: t[1],
      tooltipOption: e.tooltipOption,
      position: e.position,
      dataIndexInside: i.dataIndexInside,
      dataIndex: i.dataIndex,
      seriesIndex: i.seriesIndex,
      dataByCoordSys: r.list
    });
  }
  function eP(r, t, e) {
    var n = e.getZr(), i = "axisPointerLastHighlights", a = n_(n)[i] || {}, o = n_(n)[i] = {};
    M(r, function(u, f) {
      var h = u.axisPointerModel.option;
      h.status === "show" && M(h.seriesDataIndices, function(c) {
        var v = c.seriesIndex + " | " + c.dataIndex;
        o[v] = c;
      });
    });
    var s = [], l = [];
    M(a, function(u, f) {
      !o[f] && l.push(u);
    }), M(o, function(u, f) {
      !a[f] && s.push(u);
    }), l.length && e.dispatchAction({
      type: "downplay",
      escapeConnect: !0,
      // Not blur others when highlight in axisPointer.
      notBlur: !0,
      batch: l
    }), s.length && e.dispatchAction({
      type: "highlight",
      escapeConnect: !0,
      // Not blur others when highlight in axisPointer.
      notBlur: !0,
      batch: s
    });
  }
  function rP(r, t) {
    for (var e = 0; e < (r || []).length; e++) {
      var n = r[e];
      if (t.axis.dim === n.axisDim && t.axis.model.componentIndex === n.axisIndex)
        return n;
    }
  }
  function a_(r) {
    var t = r.axis.model, e = {}, n = e.axisDim = r.axis.dim;
    return e.axisIndex = e[n + "AxisIndex"] = t.componentIndex, e.axisName = e[n + "AxisName"] = t.name, e.axisId = e[n + "AxisId"] = t.id, e;
  }
  function wl(r) {
    return !r || r[0] == null || isNaN(r[0]) || r[1] == null || isNaN(r[1]);
  }
  function nP(r) {
    B0.registerAxisPointerClass("CartesianAxisPointer", GL), r.registerComponentModel(VL), r.registerComponentView(ZL), r.registerPreprocessor(function(t) {
      if (t) {
        (!t.axisPointer || t.axisPointer.length === 0) && (t.axisPointer = {});
        var e = t.axisPointer.link;
        e && !F(e) && (t.axisPointer.link = [e]);
      }
    }), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, function(t, e) {
      t.getComponent("axisPointer").coordSysAxesInfo = iL(t, e);
    }), r.registerAction({
      type: "updateAxisPointer",
      event: "updateAxisPointer",
      update: ":updateAxisPointer"
    }, $L);
  }
  var iP = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e;
      }
      return t.type = "tooltip", t.dependencies = ["axisPointer"], t.defaultOption = {
        // zlevel: 0,
        z: 60,
        show: !0,
        // tooltip main content
        showContent: !0,
        // 'trigger' only works on coordinate system.
        // 'item' | 'axis' | 'none'
        trigger: "item",
        // 'click' | 'mousemove' | 'none'
        triggerOn: "mousemove|click",
        alwaysShowContent: !1,
        displayMode: "single",
        renderMode: "auto",
        // whether restraint content inside viewRect.
        // If renderMode: 'richText', default true.
        // If renderMode: 'html', defaut false (for backward compat).
        confine: null,
        showDelay: 0,
        hideDelay: 100,
        // Animation transition time, unit is second
        transitionDuration: 0.4,
        enterable: !1,
        backgroundColor: "#fff",
        // box shadow
        shadowBlur: 10,
        shadowColor: "rgba(0, 0, 0, .2)",
        shadowOffsetX: 1,
        shadowOffsetY: 2,
        // tooltip border radius, unit is px, default is 4
        borderRadius: 4,
        // tooltip border width, unit is px, default is 0 (no border)
        borderWidth: 1,
        // Tooltip inside padding, default is 5 for all direction
        // Array is allowed to set up, right, bottom, left, same with css
        // The default value: See `tooltip/tooltipMarkup.ts#getPaddingFromTooltipModel`.
        padding: null,
        // Extra css text
        extraCssText: "",
        // axis indicator, trigger by axis
        axisPointer: {
          // default is line
          // legal values: 'line' | 'shadow' | 'cross'
          type: "line",
          // Valid when type is line, appoint tooltip line locate on which line. Optional
          // legal values: 'x' | 'y' | 'angle' | 'radius' | 'auto'
          // default is 'auto', chose the axis which type is category.
          // for multiply y axis, cartesian coord chose x axis, polar chose angle axis
          axis: "auto",
          animation: "auto",
          animationDurationUpdate: 200,
          animationEasingUpdate: "exponentialOut",
          crossStyle: {
            color: "#999",
            width: 1,
            type: "dashed",
            // TODO formatter
            textStyle: {}
          }
          // lineStyle and shadowStyle should not be specified here,
          // otherwise it will always override those styles on option.axisPointer.
        },
        textStyle: {
          color: "#666",
          fontSize: 14
        }
      }, t;
    }(at)
  );
  function o_(r) {
    var t = r.get("confine");
    return t != null ? !!t : r.get("renderMode") === "richText";
  }
  function s_(r) {
    if (z.domSupported) {
      for (var t = document.documentElement.style, e = 0, n = r.length; e < n; e++)
        if (r[e] in t)
          return r[e];
    }
  }
  var l_ = s_(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), aP = s_(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
  function u_(r, t) {
    if (!r)
      return t;
    t = wf(t, !0);
    var e = r.indexOf(t);
    return r = e === -1 ? t : "-" + r.slice(0, e) + "-" + t, r.toLowerCase();
  }
  function oP(r, t) {
    var e = r.currentStyle || document.defaultView && document.defaultView.getComputedStyle(r);
    return e ? t ? e[t] : e : null;
  }
  var sP = u_(aP, "transition"), gv = u_(l_, "transform"), lP = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + (z.transform3dSupported ? "will-change:transform;" : "");
  function uP(r) {
    return r = r === "left" ? "right" : r === "right" ? "left" : r === "top" ? "bottom" : "top", r;
  }
  function fP(r, t, e) {
    if (!H(e) || e === "inside")
      return "";
    var n = r.get("backgroundColor"), i = r.get("borderWidth");
    t = Rn(t);
    var a = uP(e), o = Math.max(Math.round(i) * 1.5, 6), s = "", l = gv + ":", u;
    ut(["left", "right"], a) > -1 ? (s += "top:50%", l += "translateY(-50%) rotate(" + (u = a === "left" ? -225 : -45) + "deg)") : (s += "left:50%", l += "translateX(-50%) rotate(" + (u = a === "top" ? 225 : 45) + "deg)");
    var f = u * Math.PI / 180, h = o + i, c = h * Math.abs(Math.cos(f)) + h * Math.abs(Math.sin(f)), v = Math.round(((c - Math.SQRT2 * i) / 2 + Math.SQRT2 * i - (c - h) / 2) * 100) / 100;
    s += ";" + a + ":-" + v + "px";
    var d = t + " solid " + i + "px;", g = ["position:absolute;width:" + o + "px;height:" + o + "px;z-index:-1;", s + ";" + l + ";", "border-bottom:" + d, "border-right:" + d, "background-color:" + n + ";"];
    return '<div style="' + g.join("") + '"></div>';
  }
  function hP(r, t) {
    var e = "cubic-bezier(0.23,1,0.32,1)", n = " " + r / 2 + "s " + e, i = "opacity" + n + ",visibility" + n;
    return t || (n = " " + r + "s " + e, i += z.transformSupported ? "," + gv + n : ",left" + n + ",top" + n), sP + ":" + i;
  }
  function f_(r, t, e) {
    var n = r.toFixed(0) + "px", i = t.toFixed(0) + "px";
    if (!z.transformSupported)
      return e ? "top:" + i + ";left:" + n + ";" : [["top", i], ["left", n]];
    var a = z.transform3dSupported, o = "translate" + (a ? "3d" : "") + "(" + n + "," + i + (a ? ",0" : "") + ")";
    return e ? "top:0;left:0;" + gv + ":" + o + ";" : [["top", 0], ["left", 0], [l_, o]];
  }
  function vP(r) {
    var t = [], e = r.get("fontSize"), n = r.getTextColor();
    n && t.push("color:" + n), t.push("font:" + r.getFont()), e && t.push("line-height:" + Math.round(e * 3 / 2) + "px");
    var i = r.get("textShadowColor"), a = r.get("textShadowBlur") || 0, o = r.get("textShadowOffsetX") || 0, s = r.get("textShadowOffsetY") || 0;
    return i && a && t.push("text-shadow:" + o + "px " + s + "px " + a + "px " + i), M(["decoration", "align"], function(l) {
      var u = r.get(l);
      u && t.push("text-" + l + ":" + u);
    }), t.join(";");
  }
  function cP(r, t, e) {
    var n = [], i = r.get("transitionDuration"), a = r.get("backgroundColor"), o = r.get("shadowBlur"), s = r.get("shadowColor"), l = r.get("shadowOffsetX"), u = r.get("shadowOffsetY"), f = r.getModel("textStyle"), h = Ag(r, "html"), c = l + "px " + u + "px " + o + "px " + s;
    return n.push("box-shadow:" + c), t && i && n.push(hP(i, e)), a && n.push("background-color:" + a), M(["width", "color", "radius"], function(v) {
      var d = "border-" + v, g = wf(d), p = r.get(g);
      p != null && n.push(d + ":" + p + (v === "color" ? "" : "px"));
    }), n.push(vP(f)), h != null && n.push("padding:" + Ta(h).join("px ") + "px"), n.join(";") + ";";
  }
  function h_(r, t, e, n, i) {
    var a = t && t.painter;
    if (e) {
      var o = a && a.getViewportRoot();
      o && z_(r, o, document.body, n, i);
    } else {
      r[0] = n, r[1] = i;
      var s = a && a.getViewportRootOffset();
      s && (r[0] += s.offsetLeft, r[1] += s.offsetTop);
    }
    r[2] = r[0] / t.getWidth(), r[3] = r[1] / t.getHeight();
  }
  var dP = (
    /** @class */
    function() {
      function r(t, e, n) {
        if (this._show = !1, this._styleCoord = [0, 0, 0, 0], this._enterable = !0, this._alwaysShowContent = !1, this._firstShow = !0, this._longHide = !0, z.wxa)
          return null;
        var i = document.createElement("div");
        i.domBelongToZr = !0, this.el = i;
        var a = this._zr = e.getZr(), o = this._appendToBody = n && n.appendToBody;
        h_(this._styleCoord, a, o, e.getWidth() / 2, e.getHeight() / 2), o ? document.body.appendChild(i) : t.appendChild(i), this._container = t;
        var s = this;
        i.onmouseenter = function() {
          s._enterable && (clearTimeout(s._hideTimeout), s._show = !0), s._inContent = !0;
        }, i.onmousemove = function(l) {
          if (l = l || window.event, !s._enterable) {
            var u = a.handler, f = a.painter.getViewportRoot();
            Te(f, l, !0), u.dispatch("mousemove", l);
          }
        }, i.onmouseleave = function() {
          s._inContent = !1, s._enterable && s._show && s.hideLater(s._hideDelay);
        };
      }
      return r.prototype.update = function(t) {
        var e = this._container, n = oP(e, "position"), i = e.style;
        i.position !== "absolute" && n !== "absolute" && (i.position = "relative");
        var a = t.get("alwaysShowContent");
        a && this._moveIfResized(), this._alwaysShowContent = a, this.el.className = t.get("className") || "";
      }, r.prototype.show = function(t, e) {
        clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
        var n = this.el, i = n.style, a = this._styleCoord;
        n.innerHTML ? i.cssText = lP + cP(t, !this._firstShow, this._longHide) + f_(a[0], a[1], !0) + ("border-color:" + Rn(e) + ";") + (t.get("extraCssText") || "") + (";pointer-events:" + (this._enterable ? "auto" : "none")) : i.display = "none", this._show = !0, this._firstShow = !1, this._longHide = !1;
      }, r.prototype.setContent = function(t, e, n, i, a) {
        var o = this.el;
        if (t == null) {
          o.innerHTML = "";
          return;
        }
        var s = "";
        if (H(a) && n.get("trigger") === "item" && !o_(n) && (s = fP(n, i, a)), H(t))
          o.innerHTML = t + s;
        else if (t) {
          o.innerHTML = "", F(t) || (t = [t]);
          for (var l = 0; l < t.length; l++)
            Kn(t[l]) && t[l].parentNode !== o && o.appendChild(t[l]);
          if (s && o.childNodes.length) {
            var u = document.createElement("div");
            u.innerHTML = s, o.appendChild(u);
          }
        }
      }, r.prototype.setEnterable = function(t) {
        this._enterable = t;
      }, r.prototype.getSize = function() {
        var t = this.el;
        return [t.offsetWidth, t.offsetHeight];
      }, r.prototype.moveTo = function(t, e) {
        var n = this._styleCoord;
        if (h_(n, this._zr, this._appendToBody, t, e), n[0] != null && n[1] != null) {
          var i = this.el.style, a = f_(n[0], n[1]);
          M(a, function(o) {
            i[o[0]] = o[1];
          });
        }
      }, r.prototype._moveIfResized = function() {
        var t = this._styleCoord[2], e = this._styleCoord[3];
        this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
      }, r.prototype.hide = function() {
        var t = this, e = this.el.style;
        e.visibility = "hidden", e.opacity = "0", z.transform3dSupported && (e.willChange = ""), this._show = !1, this._longHideTimeout = setTimeout(function() {
          return t._longHide = !0;
        }, 500);
      }, r.prototype.hideLater = function(t) {
        this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(gt(this.hide, this), t)) : this.hide());
      }, r.prototype.isShow = function() {
        return this._show;
      }, r.prototype.dispose = function() {
        this.el.parentNode.removeChild(this.el);
      }, r;
    }()
  ), pP = (
    /** @class */
    function() {
      function r(t) {
        this._show = !1, this._styleCoord = [0, 0, 0, 0], this._alwaysShowContent = !1, this._enterable = !0, this._zr = t.getZr(), c_(this._styleCoord, this._zr, t.getWidth() / 2, t.getHeight() / 2);
      }
      return r.prototype.update = function(t) {
        var e = t.get("alwaysShowContent");
        e && this._moveIfResized(), this._alwaysShowContent = e;
      }, r.prototype.show = function() {
        this._hideTimeout && clearTimeout(this._hideTimeout), this.el.show(), this._show = !0;
      }, r.prototype.setContent = function(t, e, n, i, a) {
        var o = this;
        W(t) && ae("Passing DOM nodes as content is not supported in richText tooltip!"), this.el && this._zr.remove(this.el);
        var s = n.getModel("textStyle");
        this.el = new kt({
          style: {
            rich: e.richTextStyles,
            text: t,
            lineHeight: 22,
            borderWidth: 1,
            borderColor: i,
            textShadowColor: s.get("textShadowColor"),
            fill: n.get(["textStyle", "color"]),
            padding: Ag(n, "richText"),
            verticalAlign: "top",
            align: "left"
          },
          z: n.get("z")
        }), M(["backgroundColor", "borderRadius", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"], function(u) {
          o.el.style[u] = n.get(u);
        }), M(["textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], function(u) {
          o.el.style[u] = s.get(u) || 0;
        }), this._zr.add(this.el);
        var l = this;
        this.el.on("mouseover", function() {
          l._enterable && (clearTimeout(l._hideTimeout), l._show = !0), l._inContent = !0;
        }), this.el.on("mouseout", function() {
          l._enterable && l._show && l.hideLater(l._hideDelay), l._inContent = !1;
        });
      }, r.prototype.setEnterable = function(t) {
        this._enterable = t;
      }, r.prototype.getSize = function() {
        var t = this.el, e = this.el.getBoundingRect(), n = v_(t.style);
        return [e.width + n.left + n.right, e.height + n.top + n.bottom];
      }, r.prototype.moveTo = function(t, e) {
        var n = this.el;
        if (n) {
          var i = this._styleCoord;
          c_(i, this._zr, t, e), t = i[0], e = i[1];
          var a = n.style, o = Qr(a.borderWidth || 0), s = v_(a);
          n.x = t + o + s.left, n.y = e + o + s.top, n.markRedraw();
        }
      }, r.prototype._moveIfResized = function() {
        var t = this._styleCoord[2], e = this._styleCoord[3];
        this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
      }, r.prototype.hide = function() {
        this.el && this.el.hide(), this._show = !1;
      }, r.prototype.hideLater = function(t) {
        this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(gt(this.hide, this), t)) : this.hide());
      }, r.prototype.isShow = function() {
        return this._show;
      }, r.prototype.dispose = function() {
        this._zr.remove(this.el);
      }, r;
    }()
  );
  function Qr(r) {
    return Math.max(0, r);
  }
  function v_(r) {
    var t = Qr(r.shadowBlur || 0), e = Qr(r.shadowOffsetX || 0), n = Qr(r.shadowOffsetY || 0);
    return {
      left: Qr(t - e),
      right: Qr(t + e),
      top: Qr(t - n),
      bottom: Qr(t + n)
    };
  }
  function c_(r, t, e, n) {
    r[0] = e, r[1] = n, r[2] = r[0] / t.getWidth(), r[3] = r[1] / t.getHeight();
  }
  var gP = new At({
    shape: {
      x: -1,
      y: -1,
      width: 2,
      height: 2
    }
  }), yP = (
    /** @class */
    function(r) {
      k(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e;
      }
      return t.prototype.init = function(e, n) {
        if (!(z.node || !n.getDom())) {
          var i = e.getComponent("tooltip"), a = this._renderMode = TS(i.get("renderMode"));
          this._tooltipContent = a === "richText" ? new pP(n) : new dP(n.getDom(), n, {
            appendToBody: i.get("appendToBody", !0)
          });
        }
      }, t.prototype.render = function(e, n, i) {
        if (!(z.node || !i.getDom())) {
          this.group.removeAll(), this._tooltipModel = e, this._ecModel = n, this._api = i;
          var a = this._tooltipContent;
          a.update(e), a.setEnterable(e.get("enterable")), this._initGlobalListener(), this._keepShow(), this._renderMode !== "richText" && e.get("transitionDuration") ? Bg(this, "_updatePosition", 50, "fixRate") : qf(this, "_updatePosition");
        }
      }, t.prototype._initGlobalListener = function() {
        var e = this._tooltipModel, n = e.get("triggerOn");
        t_("itemTooltip", this._api, gt(function(i, a, o) {
          n !== "none" && (n.indexOf(i) >= 0 ? this._tryShow(a, o) : i === "leave" && this._hide(o));
        }, this));
      }, t.prototype._keepShow = function() {
        var e = this._tooltipModel, n = this._ecModel, i = this._api, a = e.get("triggerOn");
        if (this._lastX != null && this._lastY != null && a !== "none" && a !== "click") {
          var o = this;
          clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function() {
            !i.isDisposed() && o.manuallyShowTip(e, n, i, {
              x: o._lastX,
              y: o._lastY,
              dataByCoordSys: o._lastDataByCoordSys
            });
          });
        }
      }, t.prototype.manuallyShowTip = function(e, n, i, a) {
        if (!(a.from === this.uid || z.node || !i.getDom())) {
          var o = d_(a, i);
          this._ticket = "";
          var s = a.dataByCoordSys, l = wP(a, n, i);
          if (l) {
            var u = l.el.getBoundingRect().clone();
            u.applyTransform(l.el.transform), this._tryShow({
              offsetX: u.x + u.width / 2,
              offsetY: u.y + u.height / 2,
              target: l.el,
              position: a.position,
              // When manully trigger, the mouse is not on the el, so we'd better to
              // position tooltip on the bottom of the el and display arrow is possible.
              positionDefault: "bottom"
            }, o);
          } else if (a.tooltip && a.x != null && a.y != null) {
            var f = gP;
            f.x = a.x, f.y = a.y, f.update(), st(f).tooltipConfig = {
              name: null,
              option: a.tooltip
            }, this._tryShow({
              offsetX: a.x,
              offsetY: a.y,
              target: f
            }, o);
          } else if (s)
            this._tryShow({
              offsetX: a.x,
              offsetY: a.y,
              position: a.position,
              dataByCoordSys: s,
              tooltipOption: a.tooltipOption
            }, o);
          else if (a.seriesIndex != null) {
            if (this._manuallyAxisShowTip(e, n, i, a))
              return;
            var h = r_(a, n), c = h.point[0], v = h.point[1];
            c != null && v != null && this._tryShow({
              offsetX: c,
              offsetY: v,
              target: h.el,
              position: a.position,
              // When manully trigger, the mouse is not on the el, so we'd better to
              // position tooltip on the bottom of the el and display arrow is possible.
              positionDefault: "bottom"
            }, o);
          } else
            a.x != null && a.y != null && (i.dispatchAction({
              type: "updateAxisPointer",
              x: a.x,
              y: a.y
            }), this._tryShow({
              offsetX: a.x,
              offsetY: a.y,
              position: a.position,
              target: i.getZr().findHover(a.x, a.y).target
            }, o));
        }
      }, t.prototype.manuallyHideTip = function(e, n, i, a) {
        var o = this._tooltipContent;
        this._tooltipModel && o.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = this._lastDataByCoordSys = null, a.from !== this.uid && this._hide(d_(a, i));
      }, t.prototype._manuallyAxisShowTip = function(e, n, i, a) {
        var o = a.seriesIndex, s = a.dataIndex, l = n.getComponent("axisPointer").coordSysAxesInfo;
        if (!(o == null || s == null || l == null)) {
          var u = n.getSeriesByIndex(o);
          if (u) {
            var f = u.getData(), h = ja([f.getItemModel(s), u, (u.coordinateSystem || {}).model], this._tooltipModel);
            if (h.get("trigger") === "axis")
              return i.dispatchAction({
                type: "updateAxisPointer",
                seriesIndex: o,
                dataIndex: s,
                position: a.position
              }), !0;
          }
        }
      }, t.prototype._tryShow = function(e, n) {
        var i = e.target, a = this._tooltipModel;
        if (a) {
          this._lastX = e.offsetX, this._lastY = e.offsetY;
          var o = e.dataByCoordSys;
          if (o && o.length)
            this._showAxisTooltip(o, e);
          else if (i) {
            this._lastDataByCoordSys = null;
            var s, l;
            Na(i, function(u) {
              if (st(u).dataIndex != null)
                return s = u, !0;
              if (st(u).tooltipConfig != null)
                return l = u, !0;
            }, !0), s ? this._showSeriesItemTooltip(e, s, n) : l ? this._showComponentItemTooltip(e, l, n) : this._hide(n);
          } else
            this._lastDataByCoordSys = null, this._hide(n);
        }
      }, t.prototype._showOrMove = function(e, n) {
        var i = e.get("showDelay");
        n = gt(n, this), clearTimeout(this._showTimout), i > 0 ? this._showTimout = setTimeout(n, i) : n();
      }, t.prototype._showAxisTooltip = function(e, n) {
        var i = this._ecModel, a = this._tooltipModel, o = [n.offsetX, n.offsetY], s = ja([n.tooltipOption], a), l = this._renderMode, u = [], f = ka("section", {
          blocks: [],
          noHeader: !0
        }), h = [], c = new Uf();
        M(e, function(m) {
          M(m.dataByAxis, function(_) {
            var S = i.getComponent(_.axisDim + "Axis", _.axisIndex), b = _.value;
            if (!(!S || b == null)) {
              var w = K0(b, S.axis, i, _.seriesDataIndices, _.valueLabelOpt), x = ka("section", {
                header: w,
                noHeader: !Ge(w),
                sortBlocks: !0,
                blocks: []
              });
              f.blocks.push(x), M(_.seriesDataIndices, function(T) {
                var D = i.getSeriesByIndex(T.seriesIndex), A = T.dataIndexInside, C = D.getDataParams(A);
                if (!(C.dataIndex < 0)) {
                  C.axisDim = _.axisDim, C.axisIndex = _.axisIndex, C.axisType = _.axisType, C.axisId = _.axisId, C.axisValue = Eh(S.axis, {
                    value: b
                  }), C.axisValueLabel = w, C.marker = c.makeTooltipMarker("item", Rn(C.color), l);
                  var L = vg(D.formatTooltip(A, !0, null)), P = L.frag;
                  if (P) {
                    var I = ja([D], a).get("valueFormatter");
                    x.blocks.push(I ? O({
                      valueFormatter: I
                    }, P) : P);
                  }
                  L.text && h.push(L.text), u.push(C);
                }
              });
            }
          });
        }), f.blocks.reverse(), h.reverse();
        var v = n.position, d = s.get("order"), g = Dg(f, c, l, d, i.get("useUTC"), s.get("textStyle"));
        g && h.unshift(g);
        var p = l === "richText" ? `

` : "<br/>", y = h.join(p);
        this._showOrMove(s, function() {
          this._updateContentNotChangedOnAxis(e, u) ? this._updatePosition(s, v, o[0], o[1], this._tooltipContent, u) : this._showTooltipContent(s, y, u, Math.random() + "", o[0], o[1], v, null, c);
        });
      }, t.prototype._showSeriesItemTooltip = function(e, n, i) {
        var a = this._ecModel, o = st(n), s = o.seriesIndex, l = a.getSeriesByIndex(s), u = o.dataModel || l, f = o.dataIndex, h = o.dataType, c = u.getData(h), v = this._renderMode, d = e.positionDefault, g = ja([c.getItemModel(f), u, l && (l.coordinateSystem || {}).model], this._tooltipModel, d ? {
          position: d
        } : null), p = g.get("trigger");
        if (!(p != null && p !== "item")) {
          var y = u.getDataParams(f, h), m = new Uf();
          y.marker = m.makeTooltipMarker("item", Rn(y.color), v);
          var _ = vg(u.formatTooltip(f, !1, h)), S = g.get("order"), b = g.get("valueFormatter"), w = _.frag, x = w ? Dg(b ? O({
            valueFormatter: b
          }, w) : w, m, v, S, a.get("useUTC"), g.get("textStyle")) : _.text, T = "item_" + u.name + "_" + f;
          this._showOrMove(g, function() {
            this._showTooltipContent(g, x, y, T, e.offsetX, e.offsetY, e.position, e.target, m);
          }), i({
            type: "showTip",
            dataIndexInside: f,
            dataIndex: c.getRawIndex(f),
            seriesIndex: s,
            from: this.uid
          });
        }
      }, t.prototype._showComponentItemTooltip = function(e, n, i) {
        var a = st(n), o = a.tooltipConfig, s = o.option || {};
        if (H(s)) {
          var l = s;
          s = {
            content: l,
            // Fixed formatter
            formatter: l
          };
        }
        var u = [s], f = this._ecModel.getComponent(a.componentMainType, a.componentIndex);
        f && u.push(f), u.push({
          formatter: s.content
        });
        var h = e.positionDefault, c = ja(u, this._tooltipModel, h ? {
          position: h
        } : null), v = c.get("content"), d = Math.random() + "", g = new Uf();
        this._showOrMove(c, function() {
          var p = nt(c.get("formatterParams") || {});
          this._showTooltipContent(c, v, p, d, e.offsetX, e.offsetY, e.position, n, g);
        }), i({
          type: "showTip",
          from: this.uid
        });
      }, t.prototype._showTooltipContent = function(e, n, i, a, o, s, l, u, f) {
        if (this._ticket = "", !(!e.get("showContent") || !e.get("show"))) {
          var h = this._tooltipContent;
          h.setEnterable(e.get("enterable"));
          var c = e.get("formatter");
          l = l || e.get("position");
          var v = n, d = this._getNearestPoint([o, s], i, e.get("trigger"), e.get("borderColor")), g = d.color;
          if (c)
            if (H(c)) {
              var p = e.ecModel.get("useUTC"), y = F(i) ? i[0] : i, m = y && y.axisType && y.axisType.indexOf("time") >= 0;
              v = c, m && (v = ba(y.axisValue, v, p)), v = Tf(v, i, !0);
            } else if (X(c)) {
              var _ = gt(function(S, b) {
                S === this._ticket && (h.setContent(b, f, e, g, l), this._updatePosition(e, l, o, s, h, i, u));
              }, this);
              this._ticket = a, v = c(i, a, _);
            } else
              v = c;
          h.setContent(v, f, e, g, l), h.show(e, g), this._updatePosition(e, l, o, s, h, i, u);
        }
      }, t.prototype._getNearestPoint = function(e, n, i, a) {
        if (i === "axis" || F(n))
          return {
            color: a || (this._renderMode === "html" ? "#fff" : "none")
          };
        if (!F(n))
          return {
            color: a || n.color || n.borderColor
          };
      }, t.prototype._updatePosition = function(e, n, i, a, o, s, l) {
        var u = this._api.getWidth(), f = this._api.getHeight();
        n = n || e.get("position");
        var h = o.getSize(), c = e.get("align"), v = e.get("verticalAlign"), d = l && l.getBoundingRect().clone();
        if (l && d.applyTransform(l.transform), X(n) && (n = n([i, a], s, o.el, d, {
          viewSize: [u, f],
          contentSize: h.slice()
        })), F(n))
          i = mt(n[0], u), a = mt(n[1], f);
        else if (W(n)) {
          var g = n;
          g.width = h[0], g.height = h[1];
          var p = En(g, {
            width: u,
            height: f
          });
          i = p.x, a = p.y, c = null, v = null;
        } else if (H(n) && l) {
          var y = SP(n, d, h, e.get("borderWidth"));
          i = y[0], a = y[1];
        } else {
          var y = mP(i, a, o, u, f, c ? null : 20, v ? null : 20);
          i = y[0], a = y[1];
        }
        if (c && (i -= p_(c) ? h[0] / 2 : c === "right" ? h[0] : 0), v && (a -= p_(v) ? h[1] / 2 : v === "bottom" ? h[1] : 0), o_(e)) {
          var y = _P(i, a, o, u, f);
          i = y[0], a = y[1];
        }
        o.moveTo(i, a);
      }, t.prototype._updateContentNotChangedOnAxis = function(e, n) {
        var i = this._lastDataByCoordSys, a = this._cbParamsList, o = !!i && i.length === e.length;
        return o && M(i, function(s, l) {
          var u = s.dataByAxis || [], f = e[l] || {}, h = f.dataByAxis || [];
          o = o && u.length === h.length, o && M(u, function(c, v) {
            var d = h[v] || {}, g = c.seriesDataIndices || [], p = d.seriesDataIndices || [];
            o = o && c.value === d.value && c.axisType === d.axisType && c.axisId === d.axisId && g.length === p.length, o && M(g, function(y, m) {
              var _ = p[m];
              o = o && y.seriesIndex === _.seriesIndex && y.dataIndex === _.dataIndex;
            }), a && M(c.seriesDataIndices, function(y) {
              var m = y.seriesIndex, _ = n[m], S = a[m];
              _ && S && S.data !== _.data && (o = !1);
            });
          });
        }), this._lastDataByCoordSys = e, this._cbParamsList = n, !!o;
      }, t.prototype._hide = function(e) {
        this._lastDataByCoordSys = null, e({
          type: "hideTip",
          from: this.uid
        });
      }, t.prototype.dispose = function(e, n) {
        z.node || !n.getDom() || (qf(this, "_updatePosition"), this._tooltipContent.dispose(), pv("itemTooltip", n));
      }, t.type = "tooltip", t;
    }(ee)
  );
  function ja(r, t, e) {
    var n = t.ecModel, i;
    e ? (i = new St(e, n, n), i = new St(t.option, i, n)) : i = t;
    for (var a = r.length - 1; a >= 0; a--) {
      var o = r[a];
      o && (o instanceof St && (o = o.get("tooltip", !0)), H(o) && (o = {
        formatter: o
      }), o && (i = new St(o, i, n)));
    }
    return i;
  }
  function d_(r, t) {
    return r.dispatchAction || gt(t.dispatchAction, t);
  }
  function mP(r, t, e, n, i, a, o) {
    var s = e.getSize(), l = s[0], u = s[1];
    return a != null && (r + l + a + 2 > n ? r -= l + a : r += a), o != null && (t + u + o > i ? t -= u + o : t += o), [r, t];
  }
  function _P(r, t, e, n, i) {
    var a = e.getSize(), o = a[0], s = a[1];
    return r = Math.min(r + o, n) - o, t = Math.min(t + s, i) - s, r = Math.max(r, 0), t = Math.max(t, 0), [r, t];
  }
  function SP(r, t, e, n) {
    var i = e[0], a = e[1], o = Math.ceil(Math.SQRT2 * n) + 8, s = 0, l = 0, u = t.width, f = t.height;
    switch (r) {
      case "inside":
        s = t.x + u / 2 - i / 2, l = t.y + f / 2 - a / 2;
        break;
      case "top":
        s = t.x + u / 2 - i / 2, l = t.y - a - o;
        break;
      case "bottom":
        s = t.x + u / 2 - i / 2, l = t.y + f + o;
        break;
      case "left":
        s = t.x - i - o, l = t.y + f / 2 - a / 2;
        break;
      case "right":
        s = t.x + u + o, l = t.y + f / 2 - a / 2;
    }
    return [s, l];
  }
  function p_(r) {
    return r === "center" || r === "middle";
  }
  function wP(r, t, e) {
    var n = Du(r).queryOptionMap, i = n.keys()[0];
    if (!(!i || i === "series")) {
      var a = na(t, i, n.get(i), {
        useDefault: !1,
        enableAll: !1,
        enableNone: !1
      }), o = a.models[0];
      if (o) {
        var s = e.getViewOfComponentModel(o), l;
        if (s.group.traverse(function(u) {
          var f = st(u).tooltipConfig;
          if (f && f.name === r.name)
            return l = u, !0;
        }), l)
          return {
            componentMainType: i,
            componentIndex: o.componentIndex,
            el: l
          };
      }
    }
  }
  function bP(r) {
    ve(nP), r.registerComponentModel(iP), r.registerComponentView(yP), r.registerAction({
      type: "showTip",
      event: "showTip",
      update: "tooltip:manuallyShowTip"
    }, Qt), r.registerAction({
      type: "hideTip",
      event: "hideTip",
      update: "tooltip:manuallyHideTip"
    }, Qt);
  }
  ve(bP), G.version = mC, G.dependencies = _C, G.PRIORITY = Sy, G.init = BC, G.connect = NC, G.disConnect = Oy, G.disconnect = FC, G.dispose = zC, G.getInstanceByDom = dh, G.getInstanceById = GC, G.registerTheme = ph, G.registerPreprocessor = gh, G.registerProcessor = yh, G.registerPostInit = By, G.registerPostUpdate = Ny, G.registerUpdateLifecycle = Js, G.registerAction = Hn, G.registerCoordinateSystem = Fy, G.getCoordinateSystemDimensions = HC, G.registerLayout = zy, G.registerVisual = Ur, G.registerLoading = _h, G.setCanvasCreator = VC, G.registerMap = Hy, G.getMap = WC, G.registerTransform = Vy, G.dataTool = UC, G.registerLocale = pf, G.zrender = J1, G.matrix = j_, G.vector = B_, G.zrUtil = D_, G.color = b1, G.helper = jD, G.number = aM, G.time = oM, G.graphic = sM, G.format = lM, G.util = uM, G.List = xh, G.ComponentModel = at, G.ComponentView = ee, G.SeriesModel = ue, G.ChartView = re, G.extendComponentModel = _M, G.extendComponentView = SM, G.extendSeriesModel = wM, G.extendChartView = bM, G.throttle = Ns, G.use = ve, G.setPlatformAPI = rn, G.parseGeoJSON = bm, G.parseGeoJson = bm, G.env = z, G.Model = St, G.Axis = Pm, G.innerDrawElementOnCanvas = jf;
});
class AP {
  constructor(ct, k, It) {
    this.ctx = ct, this.chart = null, this.isNew = k, k ? this.canvasNode = It : this._initStyle(ct), this._initEvent();
  }
  getContext(ct) {
    if (ct === "2d")
      return this.ctx;
  }
  setChart(ct) {
    this.chart = ct;
  }
  addEventListener() {
  }
  attachEvent() {
  }
  detachEvent() {
  }
  _initCanvas(ct, k) {
    ct.util.getContext = function() {
      return k;
    }, ct.util.$override("measureText", function(It, de) {
      return k.font = de || "12px sans-serif", k.measureText(It);
    });
  }
  _initStyle(ct) {
    ct.createRadialGradient = () => ct.createCircularGradient(arguments);
  }
  _initEvent() {
    this.event = {}, [
      {
        wxName: "touchStart",
        ecName: "mousedown"
      },
      {
        wxName: "touchMove",
        ecName: "mousemove"
      },
      {
        wxName: "touchEnd",
        ecName: "mouseup"
      },
      {
        wxName: "touchEnd",
        ecName: "click"
      }
    ].forEach((k) => {
      this.event[k.wxName] = (It) => {
        const de = It.touches[0];
        this.chart.getZr().handler.dispatch(k.ecName, {
          zrX: k.wxName === "tap" ? de.clientX : de.x,
          zrY: k.wxName === "tap" ? de.clientY : de.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        });
      };
    });
  }
  set width(ct) {
    this.canvasNode && (this.canvasNode.width = ct);
  }
  set height(ct) {
    this.canvasNode && (this.canvasNode.height = ct);
  }
  get width() {
    return this.canvasNode ? this.canvasNode.width : 0;
  }
  get height() {
    return this.canvasNode ? this.canvasNode.height : 0;
  }
}
const LP = {
  __name: "index",
  props: {
    uid: {
      type: String,
      default: ""
    }
  },
  setup(G, { expose: ct }) {
    const k = G;
    let It;
    CP(() => {
      process.env.TARO_ENV !== "h5" && (void 0)((Q) => {
        Q && Q.series && (Q.series.length > 0 ? Q.series.forEach((wt) => {
          wt.progressive = 0;
        }) : typeof Q.series == "object" && (Q.series.progressive = 0));
      });
    });
    const de = (Q) => {
      setTimeout(() => {
        z(Q);
      }, 100);
    };
    function z(Q) {
      const wt = wv.createSelectorQuery(), { uid: bt } = k;
      wt.select(`.${bt}`).fields({
        node: !0,
        size: !0
      }).exec((en) => {
        const Zn = wv.getSystemInfoSync().pixelRatio, Zt = en[0].node, rn = en[0].width, $n = en[0].height, nn = Zt.getContext("2d"), be = new AP(nn, !0, Zt);
        (void 0)(() => be), typeof Q == "function" && (It = Q(be, rn, $n, Zn));
      });
    }
    function Jr(Q) {
      for (let wt = 0; wt < Q.touches.length; ++wt) {
        const bt = Q.touches[wt];
        bt.offsetX = bt.x, bt.offsetY = bt.y;
      }
      return Q;
    }
    function tn(Q) {
      if (It && Q.touches.length > 0) {
        var wt = Q.touches[0], bt = It.getZr().handler;
        bt.dispatch("mousedown", {
          zrX: wt.x,
          zrY: wt.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        }), bt.dispatch("mousemove", {
          zrX: wt.x,
          zrY: wt.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        }), bt.processGesture(Jr(Q), "start");
      }
    }
    function Ri(Q) {
      if (It && Q.touches.length > 0) {
        var wt = Q.touches[0], bt = It.getZr().handler;
        bt.dispatch("mousemove", {
          zrX: wt.x,
          zrY: wt.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        }), bt.processGesture(Jr(Q), "change");
      }
    }
    function ze(Q) {
      if (It) {
        const bt = Q.changedTouches ? Q.changedTouches[0] : {};
        var wt = It.getZr().handler;
        wt.dispatch("mouseup", {
          zrX: bt.x,
          zrY: bt.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        }), wt.dispatch("click", {
          zrX: bt.x,
          zrY: bt.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        }), wt.processGesture(Jr(Q), "end");
      }
    }
    return ct({
      init: de
      //
    }), (Q, wt) => (Sv(), y_("canvas", {
      type: "2d",
      class: DP([G.uid, "ec-canvas"]),
      "on:touchStart": tn,
      "on:touchMove": Ri,
      "on:touchEnd": ze
    }, null, 34));
  }
};
const PP = ["id"], EP = {
  __name: "index",
  setup(G, { expose: ct }) {
    const k = mv(process.env.TARO_ENV === "h5"), It = mv(`canvas-${Date.now()}-${Math.floor(Math.random() * 1e4)}`), de = mv(null);
    let z = null;
    function Jr() {
      return z || console.error(
        "echart 实例化还未完成，可参考使用说明：https://github.com/beezen/echarts4taro3#基础用法"
      );
    }
    function tn(Q) {
      if (!z)
        return console.error(
          "echart 实例化还未完成，可参考使用说明：https://github.com/beezen/echarts4taro3#基础用法"
        );
      z.setOption(Q);
    }
    function Ri(Q) {
      if (!z)
        return console.error(
          "echart 实例化还未完成，可参考使用说明：https://github.com/beezen/echarts4taro3#基础用法"
        );
      z.resize({
        width: Q.width,
        height: Q.height
      });
    }
    function ze(Q, wt) {
      return new Promise((bt) => {
        process.env.TARO_ENV === "h5" ? (z = (void 0)(document.querySelector(`#${It.value}`)), z.setOption(Q), bt(z)) : de.value.init((Zn, Zt, rn, $n) => {
          if (z = (void 0)(Zn, null, {
            width: Zt,
            height: rn,
            devicePixelRatio: $n
          }), Zn.setChart(z), !Zt || !rn) {
            let nn = 0;
            const be = () => {
              nn++, wv.createSelectorQuery().select(`.${It.value}`).fields({
                node: !0,
                size: !0
              }).exec((an) => {
                const eo = an[0].width, ro = an[0].height;
                (!eo || !ro) && nn < 20 ? setTimeout(be, 100) : (z.resize({
                  width: eo,
                  height: ro
                }), z.setOption(Q));
              });
            };
            be();
          } else
            z.setOption(Q);
          return bt(z), z;
        });
      });
    }
    return ct({
      getChart: Jr,
      setOption: tn,
      resize: Ri,
      refresh: ze
    }), (Q, wt) => _v(k) ? (Sv(), y_("canvas", {
      key: 0,
      id: _v(It),
      class: "echart-canvas"
    }, null, 8, PP)) : (Sv(), MP(LP, {
      key: 1,
      ref_key: "canvas",
      ref: de,
      uid: _v(It),
      class: "echart-canvas"
    }, null, 8, ["uid"]));
  }
};
export {
  EP as EChart
};
