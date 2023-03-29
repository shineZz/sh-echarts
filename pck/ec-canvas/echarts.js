var wP = (z, pe) => () => (pe || z((pe = { exports: {} }).exports, pe), pe.exports);
var bP = wP((iv, r_) => {
  (function(z, pe) {
    typeof iv == "object" && typeof r_ < "u" ? pe(iv) : typeof define == "function" && define.amd ? define(["exports"], pe) : pe(z.echarts = {});
  })(globalThis, function(z) {
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
    var pe = function(r, t) {
      return pe = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(e, n) {
        e.__proto__ = n;
      } || function(e, n) {
        for (var i in n)
          Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }, pe(r, t);
    };
    function B(r, t) {
      if (typeof t != "function" && t !== null)
        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
      pe(r, t);
      function e() {
        this.constructor = r;
      }
      r.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
    }
    var n_ = function() {
      function r() {
        this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1;
      }
      return r;
    }(), i_ = function() {
      function r() {
        this.browser = new n_(), this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = typeof window < "u";
      }
      return r;
    }(), X = new i_();
    typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? (X.wxa = !0, X.touchEventsSupported = !0) : typeof document > "u" && typeof self < "u" ? X.worker = !0 : typeof navigator > "u" ? (X.node = !0, X.svgSupported = !0) : a_(navigator.userAgent, X);
    function a_(r, t) {
      var e = t.browser, n = r.match(/Firefox\/([\d.]+)/), i = r.match(/MSIE\s([\d.]+)/) || r.match(/Trident\/.+?rv:(([\d.]+))/), a = r.match(/Edge?\/([\d.]+)/), o = /micromessenger/i.test(r);
      n && (e.firefox = !0, e.version = n[1]), i && (e.ie = !0, e.version = i[1]), a && (e.edge = !0, e.version = a[1], e.newEdge = +a[1].split(".")[0] > 18), o && (e.weChat = !0), t.svgSupported = typeof SVGRect < "u", t.touchEventsSupported = "ontouchstart" in window && !e.ie && !e.edge, t.pointerEventsSupported = "onpointerdown" in window && (e.edge || e.ie && +e.version >= 11), t.domSupported = typeof document < "u";
      var s = document.documentElement.style;
      t.transform3dSupported = (e.ie && "transition" in s || e.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix() || "MozPerspective" in s) && !("OTransition" in s), t.transformSupported = t.transform3dSupported || e.ie && +e.version >= 9;
    }
    var sl = 12, o_ = "sans-serif", Xr = sl + "px " + o_, s_ = 20, l_ = 100, u_ = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
    function f_(r) {
      var t = {};
      if (typeof JSON > "u")
        return t;
      for (var e = 0; e < r.length; e++) {
        var n = String.fromCharCode(e + 32), i = (r.charCodeAt(e) - s_) / l_;
        t[n] = i;
      }
      return t;
    }
    var h_ = f_(u_), ar = {
      createCanvas: function() {
        return typeof document < "u" && document.createElement("canvas");
      },
      measureText: function() {
        var r, t;
        return function(e, n) {
          if (!r) {
            var i = ar.createCanvas();
            r = i && i.getContext("2d");
          }
          if (r)
            return t !== n && (t = r.font = n || Xr), r.measureText(e);
          e = e || "", n = n || Xr;
          var a = /(\d+)px/.exec(n), o = a && +a[1] || sl, s = 0;
          if (n.indexOf("mono") >= 0)
            s = o * e.length;
          else
            for (var l = 0; l < e.length; l++) {
              var u = h_[e[l]];
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
    function av(r) {
      for (var t in ar)
        r[t] && (ar[t] = r[t]);
    }
    var ov = We(["Function", "RegExp", "Date", "Error", "CanvasGradient", "CanvasPattern", "Image", "Canvas"], function(r, t) {
      return r["[object " + t + "]"] = !0, r;
    }, {}), sv = We(["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64"], function(r, t) {
      return r["[object " + t + "Array]"] = !0, r;
    }, {}), Bn = Object.prototype.toString, Ha = Array.prototype, v_ = Ha.forEach, c_ = Ha.filter, ll = Ha.slice, d_ = Ha.map, lv = function() {
    }.constructor, Va = lv ? lv.prototype : null, ul = "__proto__", p_ = 2311;
    function fl() {
      return p_++;
    }
    function _r() {
      for (var r = [], t = 0; t < arguments.length; t++)
        r[t] = arguments[t];
      typeof console < "u" && console.error.apply(console, r);
    }
    function rt(r) {
      if (r == null || typeof r != "object")
        return r;
      var t = r, e = Bn.call(r);
      if (e === "[object Array]") {
        if (!zn(r)) {
          t = [];
          for (var n = 0, i = r.length; n < i; n++)
            t[n] = rt(r[n]);
        }
      } else if (sv[e]) {
        if (!zn(r)) {
          var a = r.constructor;
          if (a.from)
            t = a.from(r);
          else {
            t = new a(r.length);
            for (var n = 0, i = r.length; n < i; n++)
              t[n] = r[n];
          }
        }
      } else if (!ov[e] && !zn(r) && !Nn(r)) {
        t = {};
        for (var o in r)
          r.hasOwnProperty(o) && o !== ul && (t[o] = rt(r[o]));
      }
      return t;
    }
    function at(r, t, e) {
      if (!V(t) || !V(r))
        return e ? rt(t) : r;
      for (var n in t)
        if (t.hasOwnProperty(n) && n !== ul) {
          var i = r[n], a = t[n];
          V(a) && V(i) && !F(a) && !F(i) && !Nn(a) && !Nn(i) && !vl(a) && !vl(i) && !zn(a) && !zn(i) ? at(i, a, e) : (e || !(n in r)) && (r[n] = rt(t[n]));
        }
      return r;
    }
    function g_(r, t) {
      for (var e = r[0], n = 1, i = r.length; n < i; n++)
        e = at(e, r[n], t);
      return e;
    }
    function k(r, t) {
      if (Object.assign)
        Object.assign(r, t);
      else
        for (var e in t)
          t.hasOwnProperty(e) && e !== ul && (r[e] = t[e]);
      return r;
    }
    function st(r, t, e) {
      for (var n = pt(t), i = 0; i < n.length; i++) {
        var a = n[i];
        (e ? t[a] != null : r[a] == null) && (r[a] = t[a]);
      }
      return r;
    }
    var y_ = ar.createCanvas;
    function lt(r, t) {
      if (r) {
        if (r.indexOf)
          return r.indexOf(t);
        for (var e = 0, n = r.length; e < n; e++)
          if (r[e] === t)
            return e;
      }
      return -1;
    }
    function hl(r, t) {
      var e = r.prototype;
      function n() {
      }
      n.prototype = t.prototype, r.prototype = new n();
      for (var i in e)
        e.hasOwnProperty(i) && (r.prototype[i] = e[i]);
      r.prototype.constructor = r, r.superClass = t;
    }
    function ge(r, t, e) {
      if (r = "prototype" in r ? r.prototype : r, t = "prototype" in t ? t.prototype : t, Object.getOwnPropertyNames)
        for (var n = Object.getOwnPropertyNames(t), i = 0; i < n.length; i++) {
          var a = n[i];
          a !== "constructor" && (e ? t[a] != null : r[a] == null) && (r[a] = t[a]);
        }
      else
        st(r, t, e);
    }
    function Wt(r) {
      return !r || typeof r == "string" ? !1 : typeof r.length == "number";
    }
    function M(r, t, e) {
      if (r && t)
        if (r.forEach && r.forEach === v_)
          r.forEach(t, e);
        else if (r.length === +r.length)
          for (var n = 0, i = r.length; n < i; n++)
            t.call(e, r[n], n, r);
        else
          for (var a in r)
            r.hasOwnProperty(a) && t.call(e, r[a], a, r);
    }
    function H(r, t, e) {
      if (!r)
        return [];
      if (!t)
        return Wa(r);
      if (r.map && r.map === d_)
        return r.map(t, e);
      for (var n = [], i = 0, a = r.length; i < a; i++)
        n.push(t.call(e, r[i], i, r));
      return n;
    }
    function We(r, t, e, n) {
      if (r && t) {
        for (var i = 0, a = r.length; i < a; i++)
          e = t.call(n, e, r[i], i, r);
        return e;
      }
    }
    function bt(r, t, e) {
      if (!r)
        return [];
      if (!t)
        return Wa(r);
      if (r.filter && r.filter === c_)
        return r.filter(t, e);
      for (var n = [], i = 0, a = r.length; i < a; i++)
        t.call(e, r[i], i, r) && n.push(r[i]);
      return n;
    }
    function m_(r, t, e) {
      if (r && t) {
        for (var n = 0, i = r.length; n < i; n++)
          if (t.call(e, r[n], n, r))
            return r[n];
      }
    }
    function pt(r) {
      if (!r)
        return [];
      if (Object.keys)
        return Object.keys(r);
      var t = [];
      for (var e in r)
        r.hasOwnProperty(e) && t.push(e);
      return t;
    }
    function __(r, t) {
      for (var e = [], n = 2; n < arguments.length; n++)
        e[n - 2] = arguments[n];
      return function() {
        return r.apply(t, e.concat(ll.call(arguments)));
      };
    }
    var dt = Va && Y(Va.bind) ? Va.call.bind(Va.bind) : __;
    function _t(r) {
      for (var t = [], e = 1; e < arguments.length; e++)
        t[e - 1] = arguments[e];
      return function() {
        return r.apply(this, t.concat(ll.call(arguments)));
      };
    }
    function F(r) {
      return Array.isArray ? Array.isArray(r) : Bn.call(r) === "[object Array]";
    }
    function Y(r) {
      return typeof r == "function";
    }
    function G(r) {
      return typeof r == "string";
    }
    function _i(r) {
      return Bn.call(r) === "[object String]";
    }
    function ct(r) {
      return typeof r == "number";
    }
    function V(r) {
      var t = typeof r;
      return t === "function" || !!r && t === "object";
    }
    function vl(r) {
      return !!ov[Bn.call(r)];
    }
    function Ut(r) {
      return !!sv[Bn.call(r)];
    }
    function Nn(r) {
      return typeof r == "object" && typeof r.nodeType == "number" && typeof r.ownerDocument == "object";
    }
    function Si(r) {
      return r.colorStops != null;
    }
    function uv(r) {
      return r.image != null;
    }
    function fv(r) {
      return Bn.call(r) === "[object RegExp]";
    }
    function Fn(r) {
      return r !== r;
    }
    function Sr() {
      for (var r = [], t = 0; t < arguments.length; t++)
        r[t] = arguments[t];
      for (var e = 0, n = r.length; e < n; e++)
        if (r[e] != null)
          return r[e];
    }
    function J(r, t) {
      return r ?? t;
    }
    function wr(r, t, e) {
      return r ?? t ?? e;
    }
    function Wa(r) {
      for (var t = [], e = 1; e < arguments.length; e++)
        t[e - 1] = arguments[e];
      return ll.apply(r, t);
    }
    function cl(r) {
      if (typeof r == "number")
        return [r, r, r, r];
      var t = r.length;
      return t === 2 ? [r[0], r[1], r[0], r[1]] : t === 3 ? [r[0], r[1], r[2], r[1]] : r;
    }
    function Q(r, t) {
      if (!r)
        throw new Error(t);
    }
    function Re(r) {
      return r == null ? null : typeof r.trim == "function" ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    }
    var hv = "__ec_primitive__";
    function wi(r) {
      r[hv] = !0;
    }
    function zn(r) {
      return r[hv];
    }
    var S_ = function() {
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
        return pt(this.data);
      }, r.prototype.forEach = function(t) {
        var e = this.data;
        for (var n in e)
          e.hasOwnProperty(n) && t(e[n], n);
      }, r;
    }(), vv = typeof Map == "function";
    function w_() {
      return vv ? /* @__PURE__ */ new Map() : new S_();
    }
    var cv = function() {
      function r(t) {
        var e = F(t);
        this.data = w_();
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
        return vv ? Array.from(t) : t;
      }, r.prototype.removeKey = function(t) {
        this.data.delete(t);
      }, r;
    }();
    function j(r) {
      return new cv(r);
    }
    function dv(r, t) {
      for (var e = new r.constructor(r.length + t.length), n = 0; n < r.length; n++)
        e[n] = r[n];
      for (var i = r.length, n = 0; n < t.length; n++)
        e[n + i] = t[n];
      return e;
    }
    function bi(r, t) {
      var e;
      if (Object.create)
        e = Object.create(r);
      else {
        var n = function() {
        };
        n.prototype = r, e = new n();
      }
      return t && k(e, t), e;
    }
    function dl(r) {
      var t = r.style;
      t.webkitUserSelect = "none", t.userSelect = "none", t.webkitTapHighlightColor = "rgba(0,0,0,0)", t["-webkit-touch-callout"] = "none";
    }
    function qr(r, t) {
      return r.hasOwnProperty(t);
    }
    function Yt() {
    }
    var pv = 180 / Math.PI, b_ = (Object.freeze || Object)({
      guid: fl,
      logError: _r,
      clone: rt,
      merge: at,
      mergeAll: g_,
      extend: k,
      defaults: st,
      createCanvas: y_,
      indexOf: lt,
      inherits: hl,
      mixin: ge,
      isArrayLike: Wt,
      each: M,
      map: H,
      reduce: We,
      filter: bt,
      find: m_,
      keys: pt,
      bind: dt,
      curry: _t,
      isArray: F,
      isFunction: Y,
      isString: G,
      isStringSafe: _i,
      isNumber: ct,
      isObject: V,
      isBuiltInObject: vl,
      isTypedArray: Ut,
      isDom: Nn,
      isGradientObject: Si,
      isImagePatternObject: uv,
      isRegExp: fv,
      eqNaN: Fn,
      retrieve: Sr,
      retrieve2: J,
      retrieve3: wr,
      slice: Wa,
      normalizeCssArray: cl,
      assert: Q,
      trim: Re,
      setAsPrimitive: wi,
      isPrimitive: zn,
      HashMap: cv,
      createHashMap: j,
      concatArray: dv,
      createObject: bi,
      disableUserSelect: dl,
      hasOwn: qr,
      noop: Yt,
      RADIAN_TO_DEGREE: pv
    });
    function Zr(r, t) {
      return r == null && (r = 0), t == null && (t = 0), [r, t];
    }
    function x_(r, t) {
      return r[0] = t[0], r[1] = t[1], r;
    }
    function gv(r) {
      return [r[0], r[1]];
    }
    function T_(r, t, e) {
      return r[0] = t, r[1] = e, r;
    }
    function pl(r, t, e) {
      return r[0] = t[0] + e[0], r[1] = t[1] + e[1], r;
    }
    function C_(r, t, e, n) {
      return r[0] = t[0] + e[0] * n, r[1] = t[1] + e[1] * n, r;
    }
    function yv(r, t, e) {
      return r[0] = t[0] - e[0], r[1] = t[1] - e[1], r;
    }
    function gl(r) {
      return Math.sqrt(yl(r));
    }
    var D_ = gl;
    function yl(r) {
      return r[0] * r[0] + r[1] * r[1];
    }
    var M_ = yl;
    function A_(r, t, e) {
      return r[0] = t[0] * e[0], r[1] = t[1] * e[1], r;
    }
    function L_(r, t, e) {
      return r[0] = t[0] / e[0], r[1] = t[1] / e[1], r;
    }
    function P_(r, t) {
      return r[0] * t[0] + r[1] * t[1];
    }
    function Ua(r, t, e) {
      return r[0] = t[0] * e, r[1] = t[1] * e, r;
    }
    function mv(r, t) {
      var e = gl(t);
      return e === 0 ? (r[0] = 0, r[1] = 0) : (r[0] = t[0] / e, r[1] = t[1] / e), r;
    }
    function Ya(r, t) {
      return Math.sqrt((r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]));
    }
    var Xa = Ya;
    function _v(r, t) {
      return (r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]);
    }
    var $r = _v;
    function I_(r, t) {
      return r[0] = -t[0], r[1] = -t[1], r;
    }
    function qa(r, t, e, n) {
      return r[0] = t[0] + n * (e[0] - t[0]), r[1] = t[1] + n * (e[1] - t[1]), r;
    }
    function Xt(r, t, e) {
      var n = t[0], i = t[1];
      return r[0] = e[0] * n + e[2] * i + e[4], r[1] = e[1] * n + e[3] * i + e[5], r;
    }
    function br(r, t, e) {
      return r[0] = Math.min(t[0], e[0]), r[1] = Math.min(t[1], e[1]), r;
    }
    function xr(r, t, e) {
      return r[0] = Math.max(t[0], e[0]), r[1] = Math.max(t[1], e[1]), r;
    }
    var R_ = (Object.freeze || Object)({
      create: Zr,
      copy: x_,
      clone: gv,
      set: T_,
      add: pl,
      scaleAndAdd: C_,
      sub: yv,
      len: gl,
      length: D_,
      lenSquare: yl,
      lengthSquare: M_,
      mul: A_,
      div: L_,
      dot: P_,
      scale: Ua,
      normalize: mv,
      distance: Ya,
      dist: Xa,
      distanceSquare: _v,
      distSquare: $r,
      negate: I_,
      lerp: qa,
      applyTransform: Xt,
      min: br,
      max: xr
    }), Gn = function() {
      function r(t, e) {
        this.target = t, this.topTarget = e && e.topTarget;
      }
      return r;
    }(), E_ = function() {
      function r(t) {
        this.handler = t, t.on("mousedown", this._dragStart, this), t.on("mousemove", this._drag, this), t.on("mouseup", this._dragEnd, this);
      }
      return r.prototype._dragStart = function(t) {
        for (var e = t.target; e && !e.draggable; )
          e = e.parent || e.__hostTarget;
        e && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.handler.dispatchToElement(new Gn(e, t), "dragstart", t.event));
      }, r.prototype._drag = function(t) {
        var e = this._draggingTarget;
        if (e) {
          var n = t.offsetX, i = t.offsetY, a = n - this._x, o = i - this._y;
          this._x = n, this._y = i, e.drift(a, o, t), this.handler.dispatchToElement(new Gn(e, t), "drag", t.event);
          var s = this.handler.findHover(n, i, e).target, l = this._dropTarget;
          this._dropTarget = s, e !== s && (l && s !== l && this.handler.dispatchToElement(new Gn(l, t), "dragleave", t.event), s && s !== l && this.handler.dispatchToElement(new Gn(s, t), "dragenter", t.event));
        }
      }, r.prototype._dragEnd = function(t) {
        var e = this._draggingTarget;
        e && (e.dragging = !1), this.handler.dispatchToElement(new Gn(e, t), "dragend", t.event), this._dropTarget && this.handler.dispatchToElement(new Gn(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;
      }, r;
    }(), Ue = function() {
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
    }(), k_ = Math.log(2);
    function ml(r, t, e, n, i, a) {
      var o = n + "-" + i, s = r.length;
      if (a.hasOwnProperty(o))
        return a[o];
      if (t === 1) {
        var l = Math.round(Math.log((1 << s) - 1 & ~i) / k_);
        return r[e][l];
      }
      for (var u = n | 1 << e, f = e + 1; n & 1 << f; )
        f++;
      for (var h = 0, c = 0, v = 0; c < s; c++) {
        var d = 1 << c;
        d & i || (h += (v % 2 ? -1 : 1) * r[e][c] * ml(r, t - 1, f, u, i | d, a), v++);
      }
      return a[o] = h, h;
    }
    function Sv(r, t) {
      var e = [[r[0], r[1], 1, 0, 0, 0, -t[0] * r[0], -t[0] * r[1]], [0, 0, 0, r[0], r[1], 1, -t[1] * r[0], -t[1] * r[1]], [r[2], r[3], 1, 0, 0, 0, -t[2] * r[2], -t[2] * r[3]], [0, 0, 0, r[2], r[3], 1, -t[3] * r[2], -t[3] * r[3]], [r[4], r[5], 1, 0, 0, 0, -t[4] * r[4], -t[4] * r[5]], [0, 0, 0, r[4], r[5], 1, -t[5] * r[4], -t[5] * r[5]], [r[6], r[7], 1, 0, 0, 0, -t[6] * r[6], -t[6] * r[7]], [0, 0, 0, r[6], r[7], 1, -t[7] * r[6], -t[7] * r[7]]], n = {}, i = ml(e, 8, 0, 0, 0, n);
      if (i !== 0) {
        for (var a = [], o = 0; o < 8; o++)
          for (var s = 0; s < 8; s++)
            a[s] == null && (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * ml(e, 7, o === 0 ? 1 : 0, 1 << o, 1 << s, n) / i * t[o];
        return function(l, u, f) {
          var h = u * a[6] + f * a[7] + 1;
          l[0] = (u * a[0] + f * a[1] + a[2]) / h, l[1] = (u * a[3] + f * a[4] + a[5]) / h;
        };
      }
    }
    var wv = "___zrEVENTSAVED", _l = [];
    function O_(r, t, e, n, i) {
      return Sl(_l, t, n, i, !0) && Sl(r, e, _l[0], _l[1]);
    }
    function Sl(r, t, e, n, i) {
      if (t.getBoundingClientRect && X.domSupported && !bv(t)) {
        var a = t[wv] || (t[wv] = {}), o = B_(t, a), s = N_(o, a, i);
        if (s)
          return s(r, e, n), !0;
      }
      return !1;
    }
    function B_(r, t) {
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
    function N_(r, t, e) {
      for (var n = e ? "invTrans" : "trans", i = t[n], a = t.srcCoords, o = [], s = [], l = !0, u = 0; u < 4; u++) {
        var f = r[u].getBoundingClientRect(), h = 2 * u, c = f.left, v = f.top;
        o.push(c, v), l = l && a && c === a[h] && v === a[h + 1], s.push(r[u].offsetLeft, r[u].offsetTop);
      }
      return l && i ? i : (t.srcCoords = o, t[n] = e ? Sv(s, o) : Sv(o, s));
    }
    function bv(r) {
      return r.nodeName.toUpperCase() === "CANVAS";
    }
    var F_ = /([&<>"'])/g, z_ = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    function le(r) {
      return r == null ? "" : (r + "").replace(F_, function(t, e) {
        return z_[e];
      });
    }
    var G_ = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, wl = [], H_ = X.browser.firefox && +X.browser.version.split(".")[0] < 39;
    function bl(r, t, e, n) {
      return e = e || {}, n ? xv(r, t, e) : H_ && t.layerX != null && t.layerX !== t.offsetX ? (e.zrX = t.layerX, e.zrY = t.layerY) : t.offsetX != null ? (e.zrX = t.offsetX, e.zrY = t.offsetY) : xv(r, t, e), e;
    }
    function xv(r, t, e) {
      if (X.domSupported && r.getBoundingClientRect) {
        var n = t.clientX, i = t.clientY;
        if (bv(r)) {
          var a = r.getBoundingClientRect();
          e.zrX = n - a.left, e.zrY = i - a.top;
          return;
        } else if (Sl(wl, r, n, i)) {
          e.zrX = wl[0], e.zrY = wl[1];
          return;
        }
      }
      e.zrX = e.zrY = 0;
    }
    function xl(r) {
      return r || window.event;
    }
    function ye(r, t, e) {
      if (t = xl(t), t.zrX != null)
        return t;
      var n = t.type, i = n && n.indexOf("touch") >= 0;
      if (i) {
        var o = n !== "touchend" ? t.targetTouches[0] : t.changedTouches[0];
        o && bl(r, o, t, e);
      } else {
        bl(r, t, t, e);
        var a = V_(t);
        t.zrDelta = a ? a / 120 : -(t.detail || 0) / 3;
      }
      var s = t.button;
      return t.which == null && s !== void 0 && G_.test(t.type) && (t.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), t;
    }
    function V_(r) {
      var t = r.wheelDelta;
      if (t)
        return t;
      var e = r.deltaX, n = r.deltaY;
      if (e == null || n == null)
        return t;
      var i = Math.abs(n !== 0 ? n : e), a = n > 0 ? -1 : n < 0 ? 1 : e > 0 ? -1 : 1;
      return 3 * i * a;
    }
    function W_(r, t, e, n) {
      r.addEventListener(t, e, n);
    }
    function U_(r, t, e, n) {
      r.removeEventListener(t, e, n);
    }
    var Tv = function(r) {
      r.preventDefault(), r.stopPropagation(), r.cancelBubble = !0;
    }, Y_ = function() {
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
            var l = i[o], u = bl(n, l, {});
            a.points.push([u.zrX, u.zrY]), a.touches.push(l);
          }
          this._track.push(a);
        }
      }, r.prototype._recognize = function(t) {
        for (var e in Tl)
          if (Tl.hasOwnProperty(e)) {
            var n = Tl[e](this._track, t);
            if (n)
              return n;
          }
      }, r;
    }();
    function Cv(r) {
      var t = r[1][0] - r[0][0], e = r[1][1] - r[0][1];
      return Math.sqrt(t * t + e * e);
    }
    function X_(r) {
      return [(r[0][0] + r[1][0]) / 2, (r[0][1] + r[1][1]) / 2];
    }
    var Tl = {
      pinch: function(r, t) {
        var e = r.length;
        if (e) {
          var n = (r[e - 1] || {}).points, i = (r[e - 2] || {}).points || n;
          if (i && i.length > 1 && n && n.length > 1) {
            var a = Cv(n) / Cv(i);
            !isFinite(a) && (a = 1), t.pinchScale = a;
            var o = X_(n);
            return t.pinchX = o[0], t.pinchY = o[1], {
              type: "pinch",
              target: r[0].target,
              event: t
            };
          }
        }
      }
    };
    function Kr() {
      return [1, 0, 0, 1, 0, 0];
    }
    function xi(r) {
      return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 1, r[4] = 0, r[5] = 0, r;
    }
    function Cl(r, t) {
      return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4], r[5] = t[5], r;
    }
    function Tr(r, t, e) {
      var n = t[0] * e[0] + t[2] * e[1], i = t[1] * e[0] + t[3] * e[1], a = t[0] * e[2] + t[2] * e[3], o = t[1] * e[2] + t[3] * e[3], s = t[0] * e[4] + t[2] * e[5] + t[4], l = t[1] * e[4] + t[3] * e[5] + t[5];
      return r[0] = n, r[1] = i, r[2] = a, r[3] = o, r[4] = s, r[5] = l, r;
    }
    function Za(r, t, e) {
      return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4] + e[0], r[5] = t[5] + e[1], r;
    }
    function $a(r, t, e) {
      var n = t[0], i = t[2], a = t[4], o = t[1], s = t[3], l = t[5], u = Math.sin(e), f = Math.cos(e);
      return r[0] = n * f + o * u, r[1] = -n * u + o * f, r[2] = i * f + s * u, r[3] = -i * u + f * s, r[4] = f * a + u * l, r[5] = f * l - u * a, r;
    }
    function Dv(r, t, e) {
      var n = e[0], i = e[1];
      return r[0] = t[0] * n, r[1] = t[1] * i, r[2] = t[2] * n, r[3] = t[3] * i, r[4] = t[4] * n, r[5] = t[5] * i, r;
    }
    function Hn(r, t) {
      var e = t[0], n = t[2], i = t[4], a = t[1], o = t[3], s = t[5], l = e * o - a * n;
      return l ? (l = 1 / l, r[0] = o * l, r[1] = -a * l, r[2] = -n * l, r[3] = e * l, r[4] = (n * s - o * i) * l, r[5] = (a * i - e * s) * l, r) : null;
    }
    function q_(r) {
      var t = Kr();
      return Cl(t, r), t;
    }
    var Z_ = (Object.freeze || Object)({
      create: Kr,
      identity: xi,
      copy: Cl,
      mul: Tr,
      translate: Za,
      rotate: $a,
      scale: Dv,
      invert: Hn,
      clone: q_
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
    }(), Ka = Math.min, Qa = Math.max, Qr = new q(), jr = new q(), Jr = new q(), tn = new q(), Ti = new q(), Ci = new q(), nt = function() {
      function r(t, e, n, i) {
        n < 0 && (t = t + n, n = -n), i < 0 && (e = e + i, i = -i), this.x = t, this.y = e, this.width = n, this.height = i;
      }
      return r.prototype.union = function(t) {
        var e = Ka(t.x, this.x), n = Ka(t.y, this.y);
        isFinite(this.x) && isFinite(this.width) ? this.width = Qa(t.x + t.width, this.x + this.width) - e : this.width = t.width, isFinite(this.y) && isFinite(this.height) ? this.height = Qa(t.y + t.height, this.y + this.height) - n : this.height = t.height, this.x = e, this.y = n;
      }, r.prototype.applyTransform = function(t) {
        r.applyTransform(this, this, t);
      }, r.prototype.calculateTransform = function(t) {
        var e = this, n = t.width / e.width, i = t.height / e.height, a = Kr();
        return Za(a, a, [-e.x, -e.y]), Dv(a, a, [n, i]), Za(a, a, [t.x, t.y]), a;
      }, r.prototype.intersect = function(t, e) {
        if (!t)
          return !1;
        t instanceof r || (t = r.create(t));
        var n = this, i = n.x, a = n.x + n.width, o = n.y, s = n.y + n.height, l = t.x, u = t.x + t.width, f = t.y, h = t.y + t.height, c = !(a < l || u < i || s < f || h < o);
        if (e) {
          var v = 1 / 0, d = 0, g = Math.abs(a - l), p = Math.abs(u - i), y = Math.abs(s - f), m = Math.abs(h - o), _ = Math.min(g, p), S = Math.min(y, m);
          a < l || u < i ? _ > d && (d = _, g < p ? q.set(Ci, -g, 0) : q.set(Ci, p, 0)) : _ < v && (v = _, g < p ? q.set(Ti, g, 0) : q.set(Ti, -p, 0)), s < f || h < o ? S > d && (d = S, y < m ? q.set(Ci, 0, -y) : q.set(Ci, 0, m)) : _ < v && (v = _, y < m ? q.set(Ti, 0, y) : q.set(Ti, 0, -m));
        }
        return e && q.copy(e, c ? Ti : Ci), c;
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
        Qr.x = Jr.x = e.x, Qr.y = tn.y = e.y, jr.x = tn.x = e.x + e.width, jr.y = Jr.y = e.y + e.height, Qr.transform(n), tn.transform(n), jr.transform(n), Jr.transform(n), t.x = Ka(Qr.x, jr.x, Jr.x, tn.x), t.y = Ka(Qr.y, jr.y, Jr.y, tn.y);
        var l = Qa(Qr.x, jr.x, Jr.x, tn.x), u = Qa(Qr.y, jr.y, Jr.y, tn.y);
        t.width = l - t.x, t.height = u - t.y;
      }, r;
    }(), Mv = "silent";
    function $_(r, t, e) {
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
        stop: K_
      };
    }
    function K_() {
      Tv(this.event);
    }
    var Q_ = function(r) {
      B(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.handler = null, e;
      }
      return t.prototype.dispose = function() {
      }, t.prototype.setCursor = function() {
      }, t;
    }(Ue), Di = function() {
      function r(t, e) {
        this.x = t, this.y = e;
      }
      return r;
    }(), j_ = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"], Dl = new nt(0, 0, 0, 0), Av = function(r) {
      B(t, r);
      function t(e, n, i, a, o) {
        var s = r.call(this) || this;
        return s._hovered = new Di(0, 0), s.storage = e, s.painter = n, s.painterRoot = a, s._pointerSize = o, i = i || new Q_(), s.proxy = null, s.setHandlerProxy(i), s._draggingMgr = new E_(s), s;
      }
      return t.prototype.setHandlerProxy = function(e) {
        this.proxy && this.proxy.dispose(), e && (M(j_, function(n) {
          e.on && e.on(n, this[n], this);
        }, this), e.handler = this), this.proxy = e;
      }, t.prototype.mousemove = function(e) {
        var n = e.zrX, i = e.zrY, a = Pv(this, n, i), o = this._hovered, s = o.target;
        s && !s.__zr && (o = this.findHover(o.x, o.y), s = o.target);
        var l = this._hovered = a ? new Di(n, i) : this.findHover(n, i), u = l.target, f = this.proxy;
        f.setCursor && f.setCursor(u ? u.cursor : "default"), s && u !== s && this.dispatchToElement(o, "mouseout", e), this.dispatchToElement(l, "mousemove", e), u && u !== s && this.dispatchToElement(l, "mouseover", e);
      }, t.prototype.mouseout = function(e) {
        var n = e.zrEventControl;
        n !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", e), n !== "no_globalout" && this.trigger("globalout", {
          type: "globalout",
          event: e
        });
      }, t.prototype.resize = function() {
        this._hovered = new Di(0, 0);
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
          for (var o = "on" + n, s = $_(n, e, i); a && (a[o] && (s.cancelBubble = !!a[o].call(a, s)), a.trigger(n, s), a = a.__hostTarget ? a.__hostTarget : a.parent, !s.cancelBubble); )
            ;
          s.cancelBubble || (this.trigger(n, s), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function(l) {
            typeof l[o] == "function" && l[o].call(l, s), l.trigger && l.trigger(n, s);
          }));
        }
      }, t.prototype.findHover = function(e, n, i) {
        var a = this.storage.getDisplayList(), o = new Di(e, n);
        if (Lv(a, o, e, n, i), this._pointerSize && !o.target) {
          for (var s = [], l = this._pointerSize, u = l / 2, f = new nt(e - u, n - u, l, l), h = a.length - 1; h >= 0; h--) {
            var c = a[h];
            c !== i && !c.ignore && !c.ignoreCoarsePointer && (!c.parent || !c.parent.ignoreCoarsePointer) && (Dl.copy(c.getBoundingRect()), c.transform && Dl.applyTransform(c.transform), Dl.intersect(f) && s.push(c));
          }
          if (s.length)
            for (var v = 4, d = Math.PI / 12, g = Math.PI * 2, p = 0; p < u; p += v)
              for (var y = 0; y < g; y += d) {
                var m = e + p * Math.cos(y), _ = n + p * Math.sin(y);
                if (Lv(s, o, m, _, i), o.target)
                  return o;
              }
        }
        return o;
      }, t.prototype.processGesture = function(e, n) {
        this._gestureMgr || (this._gestureMgr = new Y_());
        var i = this._gestureMgr;
        n === "start" && i.clear();
        var a = i.recognize(e, this.findHover(e.zrX, e.zrY, null).target, this.proxy.dom);
        if (n === "end" && i.clear(), a) {
          var o = a.type;
          e.gestureEvent = o;
          var s = new Di();
          s.target = a.target, this.dispatchToElement(s, o, a.event);
        }
      }, t;
    }(Ue);
    M(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(r) {
      Av.prototype[r] = function(t) {
        var e = t.zrX, n = t.zrY, i = Pv(this, e, n), a, o;
        if ((r !== "mouseup" || !i) && (a = this.findHover(e, n), o = a.target), r === "mousedown")
          this._downEl = o, this._downPoint = [t.zrX, t.zrY], this._upEl = o;
        else if (r === "mouseup")
          this._upEl = o;
        else if (r === "click") {
          if (this._downEl !== this._upEl || !this._downPoint || Xa(this._downPoint, [t.zrX, t.zrY]) > 4)
            return;
          this._downPoint = null;
        }
        this.dispatchToElement(a, r, t);
      };
    });
    function J_(r, t, e) {
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
        return i ? Mv : !0;
      }
      return !1;
    }
    function Lv(r, t, e, n, i) {
      for (var a = r.length - 1; a >= 0; a--) {
        var o = r[a], s = void 0;
        if (o !== i && !o.ignore && (s = J_(o, e, n)) && (!t.topTarget && (t.topTarget = o), s !== Mv)) {
          t.target = o;
          break;
        }
      }
    }
    function Pv(r, t, e) {
      var n = r.painter;
      return t < 0 || t > n.getWidth() || e < 0 || e > n.getHeight();
    }
    var Iv = 32, Mi = 7;
    function t1(r) {
      for (var t = 0; r >= Iv; )
        t |= r & 1, r >>= 1;
      return r + t;
    }
    function Rv(r, t, e, n) {
      var i = t + 1;
      if (i === e)
        return 1;
      if (n(r[i++], r[t]) < 0) {
        for (; i < e && n(r[i], r[i - 1]) < 0; )
          i++;
        e1(r, t, i);
      } else
        for (; i < e && n(r[i], r[i - 1]) >= 0; )
          i++;
      return i - t;
    }
    function e1(r, t, e) {
      for (e--; t < e; ) {
        var n = r[t];
        r[t++] = r[e], r[e--] = n;
      }
    }
    function Ev(r, t, e, n, i) {
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
    function Ml(r, t, e, n, i, a) {
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
    function Al(r, t, e, n, i, a) {
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
    function r1(r, t) {
      var e = Mi, n, i, a = 0, o = [];
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
        var m = Al(r[p], r, d, g, 0, t);
        d += m, g -= m, g !== 0 && (y = Ml(r[d + g - 1], r, p, y, y - 1, t), y !== 0 && (g <= y ? h(d, g, p, y) : c(d, g, p, y)));
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
            if (w = Al(r[_], o, m, d, 0, t), w !== 0) {
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
            if (x = Ml(o[m], r, _, p, 0, t), x !== 0) {
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
          } while (w >= Mi || x >= Mi);
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
            if (T = d - Al(o[_], r, v, d, d - 1, t), T !== 0) {
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
            if (D = p - Ml(r[m], o, 0, p, p - 1, t), D !== 0) {
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
          } while (T >= Mi || D >= Mi);
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
    function ja(r, t, e, n) {
      e || (e = 0), n || (n = r.length);
      var i = n - e;
      if (!(i < 2)) {
        var a = 0;
        if (i < Iv) {
          a = Rv(r, e, n, t), Ev(r, e, n, e + a, t);
          return;
        }
        var o = r1(r, t), s = t1(i);
        do {
          if (a = Rv(r, e, n, t), a < s) {
            var l = i;
            l > s && (l = s), Ev(r, e, e + l, e + a, t), a = l;
          }
          o.pushRun(e, a), o.mergeRuns(), i -= a, e += a;
        } while (i !== 0);
        o.forceMergeRuns();
      }
    }
    var ue = 1, Ai = 2, Vn = 4, kv = !1;
    function Ll() {
      kv || (kv = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"));
    }
    function Ov(r, t) {
      return r.zlevel === t.zlevel ? r.z === t.z ? r.z2 - t.z2 : r.z - t.z : r.zlevel - t.zlevel;
    }
    var n1 = function() {
      function r() {
        this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = Ov;
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
        n.length = this._displayListLen, ja(n, Ov);
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
              t.__dirty && (u.__dirty |= ue), this._updateAndAddDisplayable(u, e, n);
            }
            t.__dirty = 0;
          } else {
            var f = t;
            e && e.length ? f.__clipPaths = e : f.__clipPaths && f.__clipPaths.length > 0 && (f.__clipPaths = []), isNaN(f.z) && (Ll(), f.z = 0), isNaN(f.z2) && (Ll(), f.z2 = 0), isNaN(f.zlevel) && (Ll(), f.zlevel = 0), this._displayList[this._displayListLen++] = f;
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
        var i = lt(this._roots, t);
        i >= 0 && this._roots.splice(i, 1);
      }, r.prototype.delAllRoots = function() {
        this._roots = [], this._displayList = [], this._displayListLen = 0;
      }, r.prototype.getRoots = function() {
        return this._roots;
      }, r.prototype.dispose = function() {
        this._displayList = null, this._roots = null;
      }, r;
    }(), Bv;
    Bv = X.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(r) {
      return setTimeout(r, 16);
    };
    var Pl = Bv, Li = {
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
        return 1 - Li.bounceOut(1 - r);
      },
      bounceOut: function(r) {
        return r < 1 / 2.75 ? 7.5625 * r * r : r < 2 / 2.75 ? 7.5625 * (r -= 1.5 / 2.75) * r + 0.75 : r < 2.5 / 2.75 ? 7.5625 * (r -= 2.25 / 2.75) * r + 0.9375 : 7.5625 * (r -= 2.625 / 2.75) * r + 0.984375;
      },
      bounceInOut: function(r) {
        return r < 0.5 ? Li.bounceIn(r * 2) * 0.5 : Li.bounceOut(r * 2 - 1) * 0.5 + 0.5;
      }
    }, Ja = Math.pow, Cr = Math.sqrt, to = 1e-8, Nv = 1e-4, Fv = Cr(3), eo = 1 / 3, Ye = Zr(), me = Zr(), Wn = Zr();
    function Dr(r) {
      return r > -to && r < to;
    }
    function zv(r) {
      return r > to || r < -to;
    }
    function At(r, t, e, n, i) {
      var a = 1 - i;
      return a * a * (a * r + 3 * i * t) + i * i * (i * n + 3 * a * e);
    }
    function Gv(r, t, e, n, i) {
      var a = 1 - i;
      return 3 * (((t - r) * a + 2 * (e - t) * i) * a + (n - e) * i * i);
    }
    function ro(r, t, e, n, i, a) {
      var o = n + 3 * (t - e) - r, s = 3 * (e - t * 2 + r), l = 3 * (t - r), u = r - i, f = s * s - 3 * o * l, h = s * l - 9 * o * u, c = l * l - 3 * s * u, v = 0;
      if (Dr(f) && Dr(h))
        if (Dr(s))
          a[0] = 0;
        else {
          var d = -l / s;
          d >= 0 && d <= 1 && (a[v++] = d);
        }
      else {
        var g = h * h - 4 * f * c;
        if (Dr(g)) {
          var p = h / f, d = -s / o + p, y = -p / 2;
          d >= 0 && d <= 1 && (a[v++] = d), y >= 0 && y <= 1 && (a[v++] = y);
        } else if (g > 0) {
          var m = Cr(g), _ = f * s + 1.5 * o * (-h + m), S = f * s + 1.5 * o * (-h - m);
          _ < 0 ? _ = -Ja(-_, eo) : _ = Ja(_, eo), S < 0 ? S = -Ja(-S, eo) : S = Ja(S, eo);
          var d = (-s - (_ + S)) / (3 * o);
          d >= 0 && d <= 1 && (a[v++] = d);
        } else {
          var b = (2 * f * s - 3 * o * h) / (2 * Cr(f * f * f)), w = Math.acos(b) / 3, x = Cr(f), T = Math.cos(w), d = (-s - 2 * x * T) / (3 * o), y = (-s + x * (T + Fv * Math.sin(w))) / (3 * o), D = (-s + x * (T - Fv * Math.sin(w))) / (3 * o);
          d >= 0 && d <= 1 && (a[v++] = d), y >= 0 && y <= 1 && (a[v++] = y), D >= 0 && D <= 1 && (a[v++] = D);
        }
      }
      return v;
    }
    function Hv(r, t, e, n, i) {
      var a = 6 * e - 12 * t + 6 * r, o = 9 * t + 3 * n - 3 * r - 9 * e, s = 3 * t - 3 * r, l = 0;
      if (Dr(o)) {
        if (zv(a)) {
          var u = -s / a;
          u >= 0 && u <= 1 && (i[l++] = u);
        }
      } else {
        var f = a * a - 4 * o * s;
        if (Dr(f))
          i[0] = -a / (2 * o);
        else if (f > 0) {
          var h = Cr(f), u = (-a + h) / (2 * o), c = (-a - h) / (2 * o);
          u >= 0 && u <= 1 && (i[l++] = u), c >= 0 && c <= 1 && (i[l++] = c);
        }
      }
      return l;
    }
    function no(r, t, e, n, i, a) {
      var o = (t - r) * i + r, s = (e - t) * i + t, l = (n - e) * i + e, u = (s - o) * i + o, f = (l - s) * i + s, h = (f - u) * i + u;
      a[0] = r, a[1] = o, a[2] = u, a[3] = h, a[4] = h, a[5] = f, a[6] = l, a[7] = n;
    }
    function Vv(r, t, e, n, i, a, o, s, l, u, f) {
      var h, c = 5e-3, v = 1 / 0, d, g, p, y;
      Ye[0] = l, Ye[1] = u;
      for (var m = 0; m < 1; m += 0.05)
        me[0] = At(r, e, i, o, m), me[1] = At(t, n, a, s, m), p = $r(Ye, me), p < v && (h = m, v = p);
      v = 1 / 0;
      for (var _ = 0; _ < 32 && !(c < Nv); _++)
        d = h - c, g = h + c, me[0] = At(r, e, i, o, d), me[1] = At(t, n, a, s, d), p = $r(me, Ye), d >= 0 && p < v ? (h = d, v = p) : (Wn[0] = At(r, e, i, o, g), Wn[1] = At(t, n, a, s, g), y = $r(Wn, Ye), g <= 1 && y < v ? (h = g, v = y) : c *= 0.5);
      return f && (f[0] = At(r, e, i, o, h), f[1] = At(t, n, a, s, h)), Cr(v);
    }
    function i1(r, t, e, n, i, a, o, s, l) {
      for (var u = r, f = t, h = 0, c = 1 / l, v = 1; v <= l; v++) {
        var d = v * c, g = At(r, e, i, o, d), p = At(t, n, a, s, d), y = g - u, m = p - f;
        h += Math.sqrt(y * y + m * m), u = g, f = p;
      }
      return h;
    }
    function Bt(r, t, e, n) {
      var i = 1 - n;
      return i * (i * r + 2 * n * t) + n * n * e;
    }
    function Wv(r, t, e, n) {
      return 2 * ((1 - n) * (t - r) + n * (e - t));
    }
    function a1(r, t, e, n, i) {
      var a = r - 2 * t + e, o = 2 * (t - r), s = r - n, l = 0;
      if (Dr(a)) {
        if (zv(o)) {
          var u = -s / o;
          u >= 0 && u <= 1 && (i[l++] = u);
        }
      } else {
        var f = o * o - 4 * a * s;
        if (Dr(f)) {
          var u = -o / (2 * a);
          u >= 0 && u <= 1 && (i[l++] = u);
        } else if (f > 0) {
          var h = Cr(f), u = (-o + h) / (2 * a), c = (-o - h) / (2 * a);
          u >= 0 && u <= 1 && (i[l++] = u), c >= 0 && c <= 1 && (i[l++] = c);
        }
      }
      return l;
    }
    function Uv(r, t, e) {
      var n = r + e - 2 * t;
      return n === 0 ? 0.5 : (r - t) / n;
    }
    function io(r, t, e, n, i) {
      var a = (t - r) * n + r, o = (e - t) * n + t, s = (o - a) * n + a;
      i[0] = r, i[1] = a, i[2] = s, i[3] = s, i[4] = o, i[5] = e;
    }
    function Yv(r, t, e, n, i, a, o, s, l) {
      var u, f = 5e-3, h = 1 / 0;
      Ye[0] = o, Ye[1] = s;
      for (var c = 0; c < 1; c += 0.05) {
        me[0] = Bt(r, e, i, c), me[1] = Bt(t, n, a, c);
        var v = $r(Ye, me);
        v < h && (u = c, h = v);
      }
      h = 1 / 0;
      for (var d = 0; d < 32 && !(f < Nv); d++) {
        var g = u - f, p = u + f;
        me[0] = Bt(r, e, i, g), me[1] = Bt(t, n, a, g);
        var v = $r(me, Ye);
        if (g >= 0 && v < h)
          u = g, h = v;
        else {
          Wn[0] = Bt(r, e, i, p), Wn[1] = Bt(t, n, a, p);
          var y = $r(Wn, Ye);
          p <= 1 && y < h ? (u = p, h = y) : f *= 0.5;
        }
      }
      return l && (l[0] = Bt(r, e, i, u), l[1] = Bt(t, n, a, u)), Cr(h);
    }
    function o1(r, t, e, n, i, a, o) {
      for (var s = r, l = t, u = 0, f = 1 / o, h = 1; h <= o; h++) {
        var c = h * f, v = Bt(r, e, i, c), d = Bt(t, n, a, c), g = v - s, p = d - l;
        u += Math.sqrt(g * g + p * p), s = v, l = d;
      }
      return u;
    }
    var s1 = /cubic-bezier\(([0-9,\.e ]+)\)/;
    function Xv(r) {
      var t = r && s1.exec(r);
      if (t) {
        var e = t[1].split(","), n = +Re(e[0]), i = +Re(e[1]), a = +Re(e[2]), o = +Re(e[3]);
        if (isNaN(n + i + a + o))
          return;
        var s = [];
        return function(l) {
          return l <= 0 ? 0 : l >= 1 ? 1 : ro(0, n, a, 1, l, s) && At(0, i, o, 1, s[0]);
        };
      }
    }
    var l1 = function() {
      function r(t) {
        this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = t.life || 1e3, this._delay = t.delay || 0, this.loop = t.loop || !1, this.onframe = t.onframe || Yt, this.ondestroy = t.ondestroy || Yt, this.onrestart = t.onrestart || Yt, t.easing && this.setEasing(t.easing);
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
        this.easing = t, this.easingFunc = Y(t) ? t : Li[t] || Xv(t);
      }, r;
    }(), qv = function() {
      function r(t) {
        this.value = t;
      }
      return r;
    }(), u1 = function() {
      function r() {
        this._len = 0;
      }
      return r.prototype.insert = function(t) {
        var e = new qv(t);
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
    }(), Pi = function() {
      function r(t) {
        this._list = new u1(), this._maxSize = 10, this._map = {}, this._maxSize = t;
      }
      return r.prototype.put = function(t, e) {
        var n = this._list, i = this._map, a = null;
        if (i[t] == null) {
          var o = n.len(), s = this._lastRemovedEntry;
          if (o >= this._maxSize && o > 0) {
            var l = n.head;
            n.remove(l), delete i[l.key], a = l.value, this._lastRemovedEntry = l;
          }
          s ? s.value = e : s = new qv(e), s.key = t, n.insertEntry(s), i[t] = s;
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
    }(), Zv = {
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
    function Ee(r) {
      return r = Math.round(r), r < 0 ? 0 : r > 255 ? 255 : r;
    }
    function f1(r) {
      return r = Math.round(r), r < 0 ? 0 : r > 360 ? 360 : r;
    }
    function Ii(r) {
      return r < 0 ? 0 : r > 1 ? 1 : r;
    }
    function Il(r) {
      var t = r;
      return t.length && t.charAt(t.length - 1) === "%" ? Ee(parseFloat(t) / 100 * 255) : Ee(parseInt(t, 10));
    }
    function en(r) {
      var t = r;
      return t.length && t.charAt(t.length - 1) === "%" ? Ii(parseFloat(t) / 100) : Ii(parseFloat(t));
    }
    function Rl(r, t, e) {
      return e < 0 ? e += 1 : e > 1 && (e -= 1), e * 6 < 1 ? r + (t - r) * e * 6 : e * 2 < 1 ? t : e * 3 < 2 ? r + (t - r) * (2 / 3 - e) * 6 : r;
    }
    function Mr(r, t, e) {
      return r + (t - r) * e;
    }
    function _e(r, t, e, n, i) {
      return r[0] = t, r[1] = e, r[2] = n, r[3] = i, r;
    }
    function El(r, t) {
      return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r;
    }
    var $v = new Pi(20), ao = null;
    function Un(r, t) {
      ao && El(ao, t), ao = $v.put(r, ao || t.slice());
    }
    function fe(r, t) {
      if (r) {
        t = t || [];
        var e = $v.get(r);
        if (e)
          return El(t, e);
        r = r + "";
        var n = r.replace(/ /g, "").toLowerCase();
        if (n in Zv)
          return El(t, Zv[n]), Un(r, t), t;
        var i = n.length;
        if (n.charAt(0) === "#") {
          if (i === 4 || i === 5) {
            var a = parseInt(n.slice(1, 4), 16);
            if (!(a >= 0 && a <= 4095)) {
              _e(t, 0, 0, 0, 1);
              return;
            }
            return _e(t, (a & 3840) >> 4 | (a & 3840) >> 8, a & 240 | (a & 240) >> 4, a & 15 | (a & 15) << 4, i === 5 ? parseInt(n.slice(4), 16) / 15 : 1), Un(r, t), t;
          } else if (i === 7 || i === 9) {
            var a = parseInt(n.slice(1, 7), 16);
            if (!(a >= 0 && a <= 16777215)) {
              _e(t, 0, 0, 0, 1);
              return;
            }
            return _e(t, (a & 16711680) >> 16, (a & 65280) >> 8, a & 255, i === 9 ? parseInt(n.slice(7), 16) / 255 : 1), Un(r, t), t;
          }
          return;
        }
        var o = n.indexOf("("), s = n.indexOf(")");
        if (o !== -1 && s + 1 === i) {
          var l = n.substr(0, o), u = n.substr(o + 1, s - (o + 1)).split(","), f = 1;
          switch (l) {
            case "rgba":
              if (u.length !== 4)
                return u.length === 3 ? _e(t, +u[0], +u[1], +u[2], 1) : _e(t, 0, 0, 0, 1);
              f = en(u.pop());
            case "rgb":
              if (u.length >= 3)
                return _e(t, Il(u[0]), Il(u[1]), Il(u[2]), u.length === 3 ? f : en(u[3])), Un(r, t), t;
              _e(t, 0, 0, 0, 1);
              return;
            case "hsla":
              if (u.length !== 4) {
                _e(t, 0, 0, 0, 1);
                return;
              }
              return u[3] = en(u[3]), kl(u, t), Un(r, t), t;
            case "hsl":
              if (u.length !== 3) {
                _e(t, 0, 0, 0, 1);
                return;
              }
              return kl(u, t), Un(r, t), t;
            default:
              return;
          }
        }
        _e(t, 0, 0, 0, 1);
      }
    }
    function kl(r, t) {
      var e = (parseFloat(r[0]) % 360 + 360) % 360 / 360, n = en(r[1]), i = en(r[2]), a = i <= 0.5 ? i * (n + 1) : i + n - i * n, o = i * 2 - a;
      return t = t || [], _e(t, Ee(Rl(o, a, e + 1 / 3) * 255), Ee(Rl(o, a, e) * 255), Ee(Rl(o, a, e - 1 / 3) * 255), 1), r.length === 4 && (t[3] = r[3]), t;
    }
    function h1(r) {
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
    function Ol(r, t) {
      var e = fe(r);
      if (e) {
        for (var n = 0; n < 3; n++)
          t < 0 ? e[n] = e[n] * (1 - t) | 0 : e[n] = (255 - e[n]) * t + e[n] | 0, e[n] > 255 ? e[n] = 255 : e[n] < 0 && (e[n] = 0);
        return Ar(e, e.length === 4 ? "rgba" : "rgb");
      }
    }
    function v1(r) {
      var t = fe(r);
      if (t)
        return ((1 << 24) + (t[0] << 16) + (t[1] << 8) + +t[2]).toString(16).slice(1);
    }
    function Kv(r, t, e) {
      if (!(!(t && t.length) || !(r >= 0 && r <= 1))) {
        e = e || [];
        var n = r * (t.length - 1), i = Math.floor(n), a = Math.ceil(n), o = t[i], s = t[a], l = n - i;
        return e[0] = Ee(Mr(o[0], s[0], l)), e[1] = Ee(Mr(o[1], s[1], l)), e[2] = Ee(Mr(o[2], s[2], l)), e[3] = Ii(Mr(o[3], s[3], l)), e;
      }
    }
    var c1 = Kv;
    function Bl(r, t, e) {
      if (!(!(t && t.length) || !(r >= 0 && r <= 1))) {
        var n = r * (t.length - 1), i = Math.floor(n), a = Math.ceil(n), o = fe(t[i]), s = fe(t[a]), l = n - i, u = Ar([Ee(Mr(o[0], s[0], l)), Ee(Mr(o[1], s[1], l)), Ee(Mr(o[2], s[2], l)), Ii(Mr(o[3], s[3], l))], "rgba");
        return e ? {
          color: u,
          leftIndex: i,
          rightIndex: a,
          value: n
        } : u;
      }
    }
    var d1 = Bl;
    function p1(r, t, e, n) {
      var i = fe(r);
      if (r)
        return i = h1(i), t != null && (i[0] = f1(t)), e != null && (i[1] = en(e)), n != null && (i[2] = en(n)), Ar(kl(i), "rgba");
    }
    function g1(r, t) {
      var e = fe(r);
      if (e && t != null)
        return e[3] = Ii(t), Ar(e, "rgba");
    }
    function Ar(r, t) {
      if (!(!r || !r.length)) {
        var e = r[0] + "," + r[1] + "," + r[2];
        return (t === "rgba" || t === "hsva" || t === "hsla") && (e += "," + r[3]), t + "(" + e + ")";
      }
    }
    function Ri(r, t) {
      var e = fe(r);
      return e ? (0.299 * e[0] + 0.587 * e[1] + 0.114 * e[2]) * e[3] / 255 + (1 - e[3]) * t : 0;
    }
    function y1() {
      return Ar([Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)], "rgb");
    }
    var m1 = (Object.freeze || Object)({
      parse: fe,
      lift: Ol,
      toHex: v1,
      fastLerp: Kv,
      fastMapToColor: c1,
      lerp: Bl,
      mapToColor: d1,
      modifyHSL: p1,
      modifyAlpha: g1,
      stringify: Ar,
      lum: Ri,
      random: y1
    });
    function _1(r) {
      return r.type === "linear";
    }
    function S1(r) {
      return r.type === "radial";
    }
    (function() {
      return X.hasGlobalWindow && Y(window.btoa) ? function(r) {
        return window.btoa(unescape(encodeURIComponent(r)));
      } : typeof Buffer < "u" ? function(r) {
        return Buffer.from(r).toString("base64");
      } : function(r) {
        return _r("Base64 isn't natively supported in the current environment."), null;
      };
    })();
    var Nl = Array.prototype.slice;
    function or(r, t, e) {
      return (t - r) * e + r;
    }
    function Fl(r, t, e, n) {
      for (var i = t.length, a = 0; a < i; a++)
        r[a] = or(t[a], e[a], n);
      return r;
    }
    function w1(r, t, e, n) {
      for (var i = t.length, a = i && t[0].length, o = 0; o < i; o++) {
        r[o] || (r[o] = []);
        for (var s = 0; s < a; s++)
          r[o][s] = or(t[o][s], e[o][s], n);
      }
      return r;
    }
    function oo(r, t, e, n) {
      for (var i = t.length, a = 0; a < i; a++)
        r[a] = t[a] + e[a] * n;
      return r;
    }
    function Qv(r, t, e, n) {
      for (var i = t.length, a = i && t[0].length, o = 0; o < i; o++) {
        r[o] || (r[o] = []);
        for (var s = 0; s < a; s++)
          r[o][s] = t[o][s] + e[o][s] * n;
      }
      return r;
    }
    function b1(r, t) {
      for (var e = r.length, n = t.length, i = e > n ? t : r, a = Math.min(e, n), o = i[a - 1] || {
        color: [0, 0, 0, 0],
        offset: 0
      }, s = a; s < Math.max(e, n); s++)
        i.push({
          offset: o.offset,
          color: o.color.slice()
        });
    }
    function x1(r, t, e) {
      var n = r, i = t;
      if (!(!n.push || !i.push)) {
        var a = n.length, o = i.length;
        if (a !== o) {
          var s = a > o;
          if (s)
            n.length = o;
          else
            for (var l = a; l < o; l++)
              n.push(e === 1 ? i[l] : Nl.call(i[l]));
        }
        for (var u = n[0] && n[0].length, l = 0; l < n.length; l++)
          if (e === 1)
            isNaN(n[l]) && (n[l] = i[l]);
          else
            for (var f = 0; f < u; f++)
              isNaN(n[l][f]) && (n[l][f] = i[l][f]);
      }
    }
    function so(r) {
      if (Wt(r)) {
        var t = r.length;
        if (Wt(r[0])) {
          for (var e = [], n = 0; n < t; n++)
            e.push(Nl.call(r[n]));
          return e;
        }
        return Nl.call(r);
      }
      return r;
    }
    function lo(r) {
      return r[0] = Math.floor(r[0]) || 0, r[1] = Math.floor(r[1]) || 0, r[2] = Math.floor(r[2]) || 0, r[3] = r[3] == null ? 1 : r[3], "rgba(" + r.join(",") + ")";
    }
    function T1(r) {
      return Wt(r && r[0]) ? 2 : 1;
    }
    var uo = 0, fo = 1, jv = 2, Ei = 3, zl = 4, Gl = 5, Jv = 6;
    function tc(r) {
      return r === zl || r === Gl;
    }
    function ho(r) {
      return r === fo || r === jv;
    }
    var ki = [0, 0, 0, 0], C1 = function() {
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
        var i = this.keyframes, a = i.length, o = !1, s = Jv, l = e;
        if (Wt(e)) {
          var u = T1(e);
          s = u, (u === 1 && !ct(e[0]) || u === 2 && !ct(e[0][0])) && (o = !0);
        } else if (ct(e) && !Fn(e))
          s = uo;
        else if (G(e))
          if (!isNaN(+e))
            s = uo;
          else {
            var f = fe(e);
            f && (l = f, s = Ei);
          }
        else if (Si(e)) {
          var h = k({}, l);
          h.colorStops = H(e.colorStops, function(v) {
            return {
              offset: v.offset,
              color: fe(v.color)
            };
          }), _1(e) ? s = zl : S1(e) && (s = Gl), l = h;
        }
        a === 0 ? this.valType = s : (s !== this.valType || s === Jv) && (o = !0), this.discrete = this.discrete || o;
        var c = {
          time: t,
          value: l,
          rawValue: e,
          percent: 0
        };
        return n && (c.easing = n, c.easingFunc = Y(n) ? n : Li[n] || Xv(n)), i.push(c), c;
      }, r.prototype.prepare = function(t, e) {
        var n = this.keyframes;
        this._needsSort && n.sort(function(g, p) {
          return g.time - p.time;
        });
        for (var i = this.valType, a = n.length, o = n[a - 1], s = this.discrete, l = ho(i), u = tc(i), f = 0; f < a; f++) {
          var h = n[f], c = h.value, v = o.value;
          h.percent = h.time / t, s || (l && f !== a - 1 ? x1(c, v, i) : u && b1(c.colorStops, v.colorStops));
        }
        if (!s && i !== Gl && e && this.needsAnimate() && e.needsAnimate() && i === e.valType && !e._finished) {
          this._additiveTrack = e;
          for (var d = n[0].value, f = 0; f < a; f++)
            i === uo ? n[f].additiveValue = n[f].value - d : i === Ei ? n[f].additiveValue = oo([], n[f].value, d, -1) : ho(i) && (n[f].additiveValue = i === fo ? oo([], n[f].value, d, -1) : Qv([], n[f].value, d, -1));
        }
      }, r.prototype.step = function(t, e) {
        if (!this._finished) {
          this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
          var n = this._additiveTrack != null, i = n ? "additiveValue" : "value", a = this.valType, o = this.keyframes, s = o.length, l = this.propName, u = a === Ei, f, h = this._lastFr, c = Math.min, v, d;
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
            var m = n ? this._additiveValue : u ? ki : t[l];
            if ((ho(a) || u) && !m && (m = this._additiveValue = []), this.discrete)
              t[l] = y < 1 ? v.rawValue : d.rawValue;
            else if (ho(a))
              a === fo ? Fl(m, v[i], d[i], y) : w1(m, v[i], d[i], y);
            else if (tc(a)) {
              var _ = v[i], S = d[i], b = a === zl;
              t[l] = {
                type: b ? "linear" : "radial",
                x: or(_.x, S.x, y),
                y: or(_.y, S.y, y),
                colorStops: H(_.colorStops, function(x, T) {
                  var D = S.colorStops[T];
                  return {
                    offset: or(x.offset, D.offset, y),
                    color: lo(Fl([], x.color, D.color, y))
                  };
                }),
                global: S.global
              }, b ? (t[l].x2 = or(_.x2, S.x2, y), t[l].y2 = or(_.y2, S.y2, y)) : t[l].r = or(_.r, S.r, y);
            } else if (u)
              Fl(m, v[i], d[i], y), n || (t[l] = lo(m));
            else {
              var w = or(v[i], d[i], y);
              n ? this._additiveValue = w : t[l] = w;
            }
            n && this._addToTarget(t);
          }
        }
      }, r.prototype._addToTarget = function(t) {
        var e = this.valType, n = this.propName, i = this._additiveValue;
        e === uo ? t[n] = t[n] + i : e === Ei ? (fe(t[n], ki), oo(ki, ki, i, 1), t[n] = lo(ki)) : e === fo ? oo(t[n], t[n], i, 1) : e === jv && Qv(t[n], t[n], i, 1);
      }, r;
    }(), Hl = function() {
      function r(t, e, n, i) {
        if (this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = t, this._loop = e, e && i) {
          _r("Can' use additive animation on looped animation.");
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
        return this.whenWithKeys(t, e, pt(e), n);
      }, r.prototype.whenWithKeys = function(t, e, n, i) {
        for (var a = this._tracks, o = 0; o < n.length; o++) {
          var s = n[o], l = a[s];
          if (!l) {
            l = a[s] = new C1(s);
            var u = void 0, f = this._getAdditiveTrack(s);
            if (f) {
              var h = f.keyframes, c = h[h.length - 1];
              u = c && c.value, f.valType === Ei && u && (u = lo(u));
            } else
              u = this._target[s];
            if (u == null)
              continue;
            t > 0 && l.addKeyframe(0, so(u), i), this._trackKeys.push(s);
          }
          l.addKeyframe(t, so(e[s]), i);
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
            var c = new l1({
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
        return H(this._trackKeys, function(e) {
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
              l && (t[a] = so(l.rawValue));
            }
          }
        }
      }, r.prototype.__changeFinalValue = function(t, e) {
        e = e || pt(t);
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
    function Yn() {
      return (/* @__PURE__ */ new Date()).getTime();
    }
    var D1 = function(r) {
      B(t, r);
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
        for (var n = Yn() - this._pausedTime, i = n - this._time, a = this._head; a; ) {
          var o = a.next, s = a.step(n, i);
          s && (a.ondestroy(), this.removeClip(a)), a = o;
        }
        this._time = n, e || (this.trigger("frame", i), this.stage.update && this.stage.update());
      }, t.prototype._startLoop = function() {
        var e = this;
        this._running = !0;
        function n() {
          e._running && (Pl(n), !e._paused && e.update());
        }
        Pl(n);
      }, t.prototype.start = function() {
        this._running || (this._time = Yn(), this._pausedTime = 0, this._startLoop());
      }, t.prototype.stop = function() {
        this._running = !1;
      }, t.prototype.pause = function() {
        this._paused || (this._pauseStart = Yn(), this._paused = !0);
      }, t.prototype.resume = function() {
        this._paused && (this._pausedTime += Yn() - this._pauseStart, this._paused = !1);
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
        var i = new Hl(e, n.loop);
        return this.addAnimator(i), i;
      }, t;
    }(Ue), M1 = 300, Vl = X.domSupported, Wl = function() {
      var r = ["click", "dblclick", "mousewheel", "wheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"], t = ["touchstart", "touchend", "touchmove"], e = {
        pointerdown: 1,
        pointerup: 1,
        pointermove: 1,
        pointerout: 1
      }, n = H(r, function(i) {
        var a = i.replace("mouse", "pointer");
        return e.hasOwnProperty(a) ? a : i;
      });
      return {
        mouse: r,
        touch: t,
        pointer: n
      };
    }(), ec = {
      mouse: ["mousemove", "mouseup"],
      pointer: ["pointermove", "pointerup"]
    }, rc = !1;
    function Ul(r) {
      var t = r.pointerType;
      return t === "pen" || t === "touch";
    }
    function A1(r) {
      r.touching = !0, r.touchTimer != null && (clearTimeout(r.touchTimer), r.touchTimer = null), r.touchTimer = setTimeout(function() {
        r.touching = !1, r.touchTimer = null;
      }, 700);
    }
    function Yl(r) {
      r && (r.zrByTouch = !0);
    }
    function L1(r, t) {
      return ye(r.dom, new P1(r, t), !0);
    }
    function nc(r, t) {
      for (var e = t, n = !1; e && e.nodeType !== 9 && !(n = e.domBelongToZr || e !== t && e === r.painterRoot); )
        e = e.parentNode;
      return n;
    }
    var P1 = function() {
      function r(t, e) {
        this.stopPropagation = Yt, this.stopImmediatePropagation = Yt, this.preventDefault = Yt, this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, this.clientX = e.clientX, this.clientY = e.clientY;
      }
      return r;
    }(), ke = {
      mousedown: function(r) {
        r = ye(this.dom, r), this.__mayPointerCapture = [r.zrX, r.zrY], this.trigger("mousedown", r);
      },
      mousemove: function(r) {
        r = ye(this.dom, r);
        var t = this.__mayPointerCapture;
        t && (r.zrX !== t[0] || r.zrY !== t[1]) && this.__togglePointerCapture(!0), this.trigger("mousemove", r);
      },
      mouseup: function(r) {
        r = ye(this.dom, r), this.__togglePointerCapture(!1), this.trigger("mouseup", r);
      },
      mouseout: function(r) {
        r = ye(this.dom, r);
        var t = r.toElement || r.relatedTarget;
        nc(this, t) || (this.__pointerCapturing && (r.zrEventControl = "no_globalout"), this.trigger("mouseout", r));
      },
      wheel: function(r) {
        rc = !0, r = ye(this.dom, r), this.trigger("mousewheel", r);
      },
      mousewheel: function(r) {
        rc || (r = ye(this.dom, r), this.trigger("mousewheel", r));
      },
      touchstart: function(r) {
        r = ye(this.dom, r), Yl(r), this.__lastTouchMoment = /* @__PURE__ */ new Date(), this.handler.processGesture(r, "start"), ke.mousemove.call(this, r), ke.mousedown.call(this, r);
      },
      touchmove: function(r) {
        r = ye(this.dom, r), Yl(r), this.handler.processGesture(r, "change"), ke.mousemove.call(this, r);
      },
      touchend: function(r) {
        r = ye(this.dom, r), Yl(r), this.handler.processGesture(r, "end"), ke.mouseup.call(this, r), +/* @__PURE__ */ new Date() - +this.__lastTouchMoment < M1 && ke.click.call(this, r);
      },
      pointerdown: function(r) {
        ke.mousedown.call(this, r);
      },
      pointermove: function(r) {
        Ul(r) || ke.mousemove.call(this, r);
      },
      pointerup: function(r) {
        ke.mouseup.call(this, r);
      },
      pointerout: function(r) {
        Ul(r) || ke.mouseout.call(this, r);
      }
    };
    M(["click", "dblclick", "contextmenu"], function(r) {
      ke[r] = function(t) {
        t = ye(this.dom, t), this.trigger(r, t);
      };
    });
    var Xl = {
      pointermove: function(r) {
        Ul(r) || Xl.mousemove.call(this, r);
      },
      pointerup: function(r) {
        Xl.mouseup.call(this, r);
      },
      mousemove: function(r) {
        this.trigger("mousemove", r);
      },
      mouseup: function(r) {
        var t = this.__pointerCapturing;
        this.__togglePointerCapture(!1), this.trigger("mouseup", r), t && (r.zrEventControl = "only_globalout", this.trigger("mouseout", r));
      }
    };
    function I1(r, t) {
      var e = t.domHandlers;
      X.pointerEventsSupported ? M(Wl.pointer, function(n) {
        vo(t, n, function(i) {
          e[n].call(r, i);
        });
      }) : (X.touchEventsSupported && M(Wl.touch, function(n) {
        vo(t, n, function(i) {
          e[n].call(r, i), A1(t);
        });
      }), M(Wl.mouse, function(n) {
        vo(t, n, function(i) {
          i = xl(i), t.touching || e[n].call(r, i);
        });
      }));
    }
    function R1(r, t) {
      X.pointerEventsSupported ? M(ec.pointer, e) : X.touchEventsSupported || M(ec.mouse, e);
      function e(n) {
        function i(a) {
          a = xl(a), nc(r, a.target) || (a = L1(r, a), t.domHandlers[n].call(r, a));
        }
        vo(t, n, i, {
          capture: !0
        });
      }
    }
    function vo(r, t, e, n) {
      r.mounted[t] = e, r.listenerOpts[t] = n, W_(r.domTarget, t, e, n);
    }
    function ql(r) {
      var t = r.mounted;
      for (var e in t)
        t.hasOwnProperty(e) && U_(r.domTarget, e, t[e], r.listenerOpts[e]);
      r.mounted = {};
    }
    var ic = function() {
      function r(t, e) {
        this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = t, this.domHandlers = e;
      }
      return r;
    }(), E1 = function(r) {
      B(t, r);
      function t(e, n) {
        var i = r.call(this) || this;
        return i.__pointerCapturing = !1, i.dom = e, i.painterRoot = n, i._localHandlerScope = new ic(e, ke), Vl && (i._globalHandlerScope = new ic(document, Xl)), I1(i, i._localHandlerScope), i;
      }
      return t.prototype.dispose = function() {
        ql(this._localHandlerScope), Vl && ql(this._globalHandlerScope);
      }, t.prototype.setCursor = function(e) {
        this.dom.style && (this.dom.style.cursor = e || "default");
      }, t.prototype.__togglePointerCapture = function(e) {
        if (this.__mayPointerCapture = null, Vl && +this.__pointerCapturing ^ +e) {
          this.__pointerCapturing = e;
          var n = this._globalHandlerScope;
          e ? R1(this, n) : ql(n);
        }
      }, t;
    }(Ue), ac = 1;
    X.hasGlobalWindow && (ac = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
    var co = ac, Zl = 0.4, $l = "#333", Kl = "#ccc", k1 = "#eee", oc = xi, sc = 5e-5;
    function rn(r) {
      return r > sc || r < -sc;
    }
    var nn = [], Xn = [], Ql = Kr(), jl = Math.abs, po = function() {
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
        return rn(this.rotation) || rn(this.x) || rn(this.y) || rn(this.scaleX - 1) || rn(this.scaleY - 1) || rn(this.skewX) || rn(this.skewY);
      }, r.prototype.updateTransform = function() {
        var t = this.parent && this.parent.transform, e = this.needLocalTransform(), n = this.transform;
        if (!(e || t)) {
          n && oc(n);
          return;
        }
        n = n || Kr(), e ? this.getLocalTransform(n) : oc(n), t && (e ? Tr(n, t, n) : Cl(n, t)), this.transform = n, this._resolveGlobalScaleRatio(n);
      }, r.prototype._resolveGlobalScaleRatio = function(t) {
        var e = this.globalScaleRatio;
        if (e != null && e !== 1) {
          this.getGlobalScale(nn);
          var n = nn[0] < 0 ? -1 : 1, i = nn[1] < 0 ? -1 : 1, a = ((nn[0] - n) * e + n) / nn[0] || 0, o = ((nn[1] - i) * e + i) / nn[1] || 0;
          t[0] *= a, t[1] *= a, t[2] *= o, t[3] *= o;
        }
        this.invTransform = this.invTransform || Kr(), Hn(this.invTransform, t);
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
          t && t.transform && (Tr(Xn, t.invTransform, e), e = Xn);
          var n = this.originX, i = this.originY;
          (n || i) && (Ql[4] = n, Ql[5] = i, Tr(Xn, e, Ql), Xn[4] -= n, Xn[5] -= i, e = Xn), this.setLocalTransform(e);
        }
      }, r.prototype.getGlobalScale = function(t) {
        var e = this.transform;
        return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t);
      }, r.prototype.transformCoordToLocal = function(t, e) {
        var n = [t, e], i = this.invTransform;
        return i && Xt(n, n, i), n;
      }, r.prototype.transformCoordToGlobal = function(t, e) {
        var n = [t, e], i = this.transform;
        return i && Xt(n, n, i), n;
      }, r.prototype.getLineScale = function() {
        var t = this.transform;
        return t && jl(t[0] - 1) > 1e-10 && jl(t[3] - 1) > 1e-10 ? Math.sqrt(jl(t[0] * t[3] - t[2] * t[1])) : 1;
      }, r.prototype.copyTransform = function(t) {
        O1(this, t);
      }, r.getLocalTransform = function(t, e) {
        e = e || [];
        var n = t.originX || 0, i = t.originY || 0, a = t.scaleX, o = t.scaleY, s = t.anchorX, l = t.anchorY, u = t.rotation || 0, f = t.x, h = t.y, c = t.skewX ? Math.tan(t.skewX) : 0, v = t.skewY ? Math.tan(-t.skewY) : 0;
        if (n || i || s || l) {
          var d = n + s, g = i + l;
          e[4] = -d * a - c * g * o, e[5] = -g * o - v * d * a;
        } else
          e[4] = e[5] = 0;
        return e[0] = a, e[3] = o, e[1] = v * a, e[2] = c * o, u && $a(e, e, u), e[4] += n + f, e[5] += i + h, e;
      }, r.initDefaultProps = function() {
        var t = r.prototype;
        t.scaleX = t.scaleY = t.globalScaleRatio = 1, t.x = t.y = t.originX = t.originY = t.skewX = t.skewY = t.rotation = t.anchorX = t.anchorY = 0;
      }(), r;
    }(), Oi = ["x", "y", "originX", "originY", "anchorX", "anchorY", "rotation", "scaleX", "scaleY", "skewX", "skewY"];
    function O1(r, t) {
      for (var e = 0; e < Oi.length; e++) {
        var n = Oi[e];
        r[n] = t[n];
      }
    }
    var lc = {};
    function he(r, t) {
      t = t || Xr;
      var e = lc[t];
      e || (e = lc[t] = new Pi(500));
      var n = e.get(r);
      return n == null && (n = ar.measureText(r, t).width, e.put(r, n)), n;
    }
    function uc(r, t, e, n) {
      var i = he(r, t), a = tu(t), o = Bi(0, i, e), s = qn(0, a, n), l = new nt(o, s, i, a);
      return l;
    }
    function Jl(r, t, e, n) {
      var i = ((r || "") + "").split(`
`), a = i.length;
      if (a === 1)
        return uc(i[0], t, e, n);
      for (var o = new nt(0, 0, 0, 0), s = 0; s < i.length; s++) {
        var l = uc(i[s], t, e, n);
        s === 0 ? o.copy(l) : o.union(l);
      }
      return o;
    }
    function Bi(r, t, e) {
      return e === "right" ? r -= t : e === "center" && (r -= t / 2), r;
    }
    function qn(r, t, e) {
      return e === "middle" ? r -= t / 2 : e === "bottom" && (r -= t), r;
    }
    function tu(r) {
      return he("国", r);
    }
    function Lr(r, t) {
      return typeof r == "string" ? r.lastIndexOf("%") >= 0 ? parseFloat(r) / 100 * t : parseFloat(r) : r;
    }
    function go(r, t, e) {
      var n = t.position || "inside", i = t.distance != null ? t.distance : 5, a = e.height, o = e.width, s = a / 2, l = e.x, u = e.y, f = "left", h = "top";
      if (n instanceof Array)
        l += Lr(n[0], e.width), u += Lr(n[1], e.height), f = null, h = null;
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
    var eu = "__zr_normal__", ru = Oi.concat(["ignore"]), B1 = We(Oi, function(r, t) {
      return r[t] = !0, r;
    }, {
      ignore: !1
    }), Zn = {}, N1 = new nt(0, 0, 0, 0), yo = function() {
      function r(t) {
        this.id = fl(), this.animators = [], this.currentStates = [], this.states = {}, this._init(t);
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
            var f = N1;
            n.layoutRect ? f.copy(n.layoutRect) : f.copy(this.getBoundingRect()), i || f.applyTransform(this.transform), this.calculateTextPosition ? this.calculateTextPosition(Zn, n, f) : go(Zn, n, f), a.x = Zn.x, a.y = Zn.y, o = Zn.align, s = Zn.verticalAlign;
            var h = n.origin;
            if (h && n.rotation != null) {
              var c = void 0, v = void 0;
              h === "center" ? (c = f.width * 0.5, v = f.height * 0.5) : (c = Lr(h[0], f.width), v = Lr(h[1], f.height)), u = !0, a.originX = -a.x + c + (i ? 0 : f.x), a.originY = -a.y + v + (i ? 0 : f.y);
            }
          }
          n.rotation != null && (a.rotation = n.rotation);
          var d = n.offset;
          d && (a.x += d[0], a.y += d[1], u || (a.originX = -d[0], a.originY = -d[1]));
          var g = n.inside == null ? typeof n.position == "string" && n.position.indexOf("inside") >= 0 : n.inside, p = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {}), y = void 0, m = void 0, _ = void 0;
          g && this.canBeInsideText() ? (y = n.insideFill, m = n.insideStroke, (y == null || y === "auto") && (y = this.getInsideTextFill()), (m == null || m === "auto") && (m = this.getInsideTextStroke(y), _ = !0)) : (y = n.outsideFill, m = n.outsideStroke, (y == null || y === "auto") && (y = this.getOutsideFill()), (m == null || m === "auto") && (m = this.getOutsideStroke(y), _ = !0)), y = y || "#000", (y !== p.fill || m !== p.stroke || _ !== p.autoStroke || o !== p.align || s !== p.verticalAlign) && (l = !0, p.fill = y, p.stroke = m, p.autoStroke = _, p.align = o, p.verticalAlign = s, e.setDefaultTextStyle(p)), e.__dirty |= ue, l && e.dirtyStyle(!0);
        }
      }, r.prototype.canBeInsideText = function() {
        return !0;
      }, r.prototype.getInsideTextFill = function() {
        return "#fff";
      }, r.prototype.getInsideTextStroke = function(t) {
        return "#000";
      }, r.prototype.getOutsideFill = function() {
        return this.__zr && this.__zr.isDarkMode() ? Kl : $l;
      }, r.prototype.getOutsideStroke = function(t) {
        var e = this.__zr && this.__zr.getBackgroundColor(), n = typeof e == "string" && fe(e);
        n || (n = [255, 255, 255, 1]);
        for (var i = n[3], a = this.__zr.isDarkMode(), o = 0; o < 3; o++)
          n[o] = n[o] * i + (a ? 0 : 255) * (1 - i);
        return n[3] = 1, Ar(n, "rgba");
      }, r.prototype.traverse = function(t, e) {
      }, r.prototype.attrKV = function(t, e) {
        t === "textConfig" ? this.setTextConfig(e) : t === "textContent" ? this.setTextContent(e) : t === "clipPath" ? this.setClipPath(e) : t === "extra" ? (this.extra = this.extra || {}, k(this.extra, e)) : this[t] = e;
      }, r.prototype.hide = function() {
        this.ignore = !0, this.markRedraw();
      }, r.prototype.show = function() {
        this.ignore = !1, this.markRedraw();
      }, r.prototype.attr = function(t, e) {
        if (typeof t == "string")
          this.attrKV(t, e);
        else if (V(t))
          for (var n = t, i = pt(n), a = 0; a < i.length; a++) {
            var o = i[a];
            this.attrKV(o, t[o]);
          }
        return this.markRedraw(), this;
      }, r.prototype.saveCurrentToNormalState = function(t) {
        this._innerSaveToNormal(t);
        for (var e = this._normalState, n = 0; n < this.animators.length; n++) {
          var i = this.animators[n], a = i.__fromStateTransition;
          if (!(i.getLoop() || a && a !== eu)) {
            var o = i.targetName, s = o ? e[o] : e;
            i.saveTo(s);
          }
        }
      }, r.prototype._innerSaveToNormal = function(t) {
        var e = this._normalState;
        e || (e = this._normalState = {}), t.textConfig && !e.textConfig && (e.textConfig = this.textConfig), this._savePrimaryToNormal(t, e, ru);
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
        this.useState(eu, !1, t);
      }, r.prototype.useState = function(t, e, n, i) {
        var a = t === eu, o = this.hasState();
        if (!(!o && a)) {
          var s = this.currentStates, l = this.stateTransition;
          if (!(lt(s, t) >= 0 && (e || s.length === 1))) {
            var u;
            if (this.stateProxy && !a && (u = this.stateProxy(t)), u || (u = this.states && this.states[t]), !u && !a) {
              _r("State " + t + " not exists.");
              return;
            }
            a || this.saveCurrentToNormalState(u);
            var f = !!(u && u.hoverLayer || i);
            f && this._toggleHoverLayerFlag(!0), this._applyStateObj(t, u, this._normalState, e, !n && !this.__inHover && l && l.duration > 0, l);
            var h = this._textContent, c = this._textGuide;
            return h && h.useState(t, e, n, f), c && c.useState(t, e, n, f), a ? (this.currentStates = [], this._normalState = {}) : e ? this.currentStates.push(t) : this.currentStates = [t], this._updateAnimationTargets(), this.markRedraw(), !f && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~ue), u;
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
          g && g.useStates(t, e, c), p && p.useStates(t, e, c), this._updateAnimationTargets(), this.currentStates = t.slice(), this.markRedraw(), !c && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~ue);
        }
      }, r.prototype._updateAnimationTargets = function() {
        for (var t = 0; t < this.animators.length; t++) {
          var e = this.animators[t];
          e.targetName && e.changeTarget(this[e.targetName]);
        }
      }, r.prototype.removeState = function(t) {
        var e = lt(this.currentStates, t);
        if (e >= 0) {
          var n = this.currentStates.slice();
          n.splice(e, 1), this.useStates(n);
        }
      }, r.prototype.replaceState = function(t, e, n) {
        var i = this.currentStates.slice(), a = lt(i, t), o = lt(i, e) >= 0;
        a >= 0 ? o ? i.splice(a, 1) : i[a] = e : n && !o && i.push(e), this.useStates(i);
      }, r.prototype.toggleState = function(t, e) {
        e ? this.useState(t, !0) : this.removeState(t);
      }, r.prototype._mergeStates = function(t) {
        for (var e = {}, n, i = 0; i < t.length; i++) {
          var a = t[i];
          k(e, a), a.textConfig && (n = n || {}, k(n, a.textConfig));
        }
        return n && (e.textConfig = n), e;
      }, r.prototype._applyStateObj = function(t, e, n, i, a, o) {
        var s = !(e && i);
        e && e.textConfig ? (this.textConfig = k({}, i ? this.textConfig : n.textConfig), k(this.textConfig, e.textConfig)) : s && n.textConfig && (this.textConfig = n.textConfig);
        for (var l = {}, u = !1, f = 0; f < ru.length; f++) {
          var h = ru[f], c = a && B1[h];
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
          t.innerTransformable = new po(), this._attachComponent(t), this._textContent = t, this.markRedraw();
        }
      }, r.prototype.setTextConfig = function(t) {
        this.textConfig || (this.textConfig = {}), k(this.textConfig, t), this.markRedraw();
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
        this.__dirty |= ue;
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
          _r('Property "' + t + '" is not existed in element ' + this.id);
          return;
        }
        var a = new Hl(i, e, n);
        return t && (a.targetName = t), this.addAnimator(a, t), a;
      }, r.prototype.addAnimator = function(t, e) {
        var n = this.__zr, i = this;
        t.during(function() {
          i.updateDuringAnimation(e);
        }).done(function() {
          var a = i.animators, o = lt(a, t);
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
        nu(this, t, e, n);
      }, r.prototype.animateFrom = function(t, e, n) {
        nu(this, t, e, n, !0);
      }, r.prototype._transitionState = function(t, e, n, i) {
        for (var a = nu(this, e, n, i), o = 0; o < a.length; o++)
          a[o].__fromStateTransition = t;
      }, r.prototype.getBoundingRect = function() {
        return null;
      }, r.prototype.getPaintRect = function() {
        return null;
      }, r.initDefaultProps = function() {
        var t = r.prototype;
        t.type = "element", t.name = "", t.ignore = t.silent = t.isGroup = t.draggable = t.dragging = t.ignoreClip = t.__inHover = !1, t.__dirty = ue;
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
    ge(yo, Ue), ge(yo, po);
    function nu(r, t, e, n, i) {
      e = e || {};
      var a = [];
      fc(r, "", r, t, e, n, a, i);
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
    function iu(r, t, e) {
      for (var n = 0; n < e; n++)
        r[n] = t[n];
    }
    function F1(r) {
      return Wt(r[0]);
    }
    function z1(r, t, e) {
      if (Wt(t[e]))
        if (Wt(r[e]) || (r[e] = []), Ut(t[e])) {
          var n = t[e].length;
          r[e].length !== n && (r[e] = new t[e].constructor(n), iu(r[e], t[e], n));
        } else {
          var i = t[e], a = r[e], o = i.length;
          if (F1(i))
            for (var s = i[0].length, l = 0; l < o; l++)
              a[l] ? iu(a[l], i[l], s) : a[l] = Array.prototype.slice.call(i[l]);
          else
            iu(a, i, o);
          a.length = i.length;
        }
      else
        r[e] = t[e];
    }
    function G1(r, t) {
      return r === t || Wt(r) && Wt(t) && H1(r, t);
    }
    function H1(r, t) {
      var e = r.length;
      if (e !== t.length)
        return !1;
      for (var n = 0; n < e; n++)
        if (r[n] !== t[n])
          return !1;
      return !0;
    }
    function fc(r, t, e, n, i, a, o, s) {
      for (var l = pt(n), u = i.duration, f = i.delay, h = i.additive, c = i.setToFinal, v = !V(a), d = r.animators, g = [], p = 0; p < l.length; p++) {
        var y = l[p], m = n[y];
        if (m != null && e[y] != null && (v || a[y]))
          if (V(m) && !Wt(m) && !Si(m)) {
            if (t) {
              s || (e[y] = m, r.updateDuringAnimation(t));
              continue;
            }
            fc(r, y, e[y], m, i, a && a[y], o, s);
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
              var x = lt(d, b);
              d.splice(x, 1);
            }
          }
        }
      if (i.force || (g = bt(g, function(C) {
        return !G1(n[C], e[C]);
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
            A[y] = so(e[y]), z1(e, n, y);
          }
        }
        var b = new Hl(e, !1, !1, h ? bt(d, function(L) {
          return L.targetName === t;
        }) : null);
        b.targetName = t, i.scope && (b.scope = i.scope), c && T && b.whenWithKeys(0, T, g), A && b.whenWithKeys(0, A, g), b.whenWithKeys(u ?? 500, s ? D : n, g).delay(f || 0), r.addAnimator(b, t), o.push(b);
      }
    }
    var It = function(r) {
      B(t, r);
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
        var i = lt(this._children, e);
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
        var n = this.__zr, i = this._children, a = lt(i, e);
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
        for (var n = new nt(0, 0, 0, 0), i = e || this._children, a = [], o = null, s = 0; s < i.length; s++) {
          var l = i[s];
          if (!(l.ignore || l.invisible)) {
            var u = l.getBoundingRect(), f = l.getLocalTransform(a);
            f ? (nt.applyTransform(n, u, f), o = o || n.clone(), o.union(n)) : (o = o || u.clone(), o.union(u));
          }
        }
        return o || n;
      }, t;
    }(yo);
    It.prototype.type = "group";
    /*!
    * ZRender, a high performance 2d drawing library.
    *
    * Copyright (c) 2013, Baidu Inc.
    * All rights reserved.
    *
    * LICENSE
    * https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
    */
    var Ni = {}, an = {};
    function V1(r) {
      delete an[r];
    }
    function W1(r) {
      if (!r)
        return !1;
      if (typeof r == "string")
        return Ri(r, 1) < Zl;
      if (r.colorStops) {
        for (var t = r.colorStops, e = 0, n = t.length, i = 0; i < n; i++)
          e += Ri(t[i].color, 1);
        return e /= n, e < Zl;
      }
      return !1;
    }
    var U1 = function() {
      function r(t, e, n) {
        var i = this;
        this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !0, this._darkMode = !1, n = n || {}, this.dom = e, this.id = t;
        var a = new n1(), o = n.renderer || "canvas";
        if (Ni[o] || (o = pt(Ni)[0]), !Ni[o])
          throw new Error("Renderer '" + o + "' is not imported. Please import it first.");
        n.useDirtyRect = n.useDirtyRect == null ? !1 : n.useDirtyRect;
        var s = new Ni[o](e, a, n, t), l = n.ssr || s.ssrOnly;
        this.storage = a, this.painter = s;
        var u = !X.node && !X.worker && !l ? new E1(s.getViewportRoot(), s.root) : null, f = n.useCoarsePointer, h = f == null || f === "auto" ? X.touchEventsSupported : !!f, c = 44, v;
        h && (v = J(n.pointerSize, c)), this.handler = new Av(a, s, u, s.root, v), this.animation = new D1({
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
        this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this.refresh(), this._backgroundColor = t, this._darkMode = W1(t);
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
        var e, n = Yn();
        this._needsRefresh && (e = !0, this.refreshImmediately(t)), this._needsRefreshHover && (e = !0, this.refreshHoverImmediately());
        var i = Yn();
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
          t[e] instanceof It && t[e].removeSelfFromZr(this);
        this.storage.delAllRoots(), this.painter.clear();
      }, r.prototype.dispose = function() {
        this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, V1(this.id);
      }, r;
    }();
    function au(r, t) {
      var e = new U1(fl(), r, t);
      return an[e.id] = e, e;
    }
    function Y1(r) {
      r.dispose();
    }
    function X1() {
      for (var r in an)
        an.hasOwnProperty(r) && an[r].dispose();
      an = {};
    }
    function q1(r) {
      return an[r];
    }
    function hc(r, t) {
      Ni[r] = t;
    }
    var Z1 = "5.4.3", $1 = (Object.freeze || Object)({
      init: au,
      dispose: Y1,
      disposeAll: X1,
      getInstance: q1,
      registerPainter: hc,
      version: Z1
    }), vc = 1e-4, cc = 20;
    function K1(r) {
      return r.replace(/^\s+|\s+$/g, "");
    }
    function mo(r, t, e, n) {
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
    function gt(r, t) {
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
      return G(r) ? K1(r).match(/%$/) ? parseFloat(r) / 100 * t : parseFloat(r) : r == null ? NaN : +r;
    }
    function xt(r, t, e) {
      return t == null && (t = 10), t = Math.min(Math.max(0, t), cc), r = (+r).toFixed(t), e ? r : +r;
    }
    function Q1(r) {
      return r.sort(function(t, e) {
        return t - e;
      }), r;
    }
    function Xe(r) {
      if (r = +r, isNaN(r))
        return 0;
      if (r > 1e-14) {
        for (var t = 1, e = 0; e < 15; e++, t *= 10)
          if (Math.round(r * t) / t === r)
            return e;
      }
      return _o(r);
    }
    function _o(r) {
      var t = r.toString().toLowerCase(), e = t.indexOf("e"), n = e > 0 ? +t.slice(e + 1) : 0, i = e > 0 ? e : t.length, a = t.indexOf("."), o = a < 0 ? 0 : i - 1 - a;
      return Math.max(0, o - n);
    }
    function dc(r, t) {
      var e = Math.log, n = Math.LN10, i = Math.floor(e(r[1] - r[0]) / n), a = Math.round(e(Math.abs(t[1] - t[0])) / n), o = Math.min(Math.max(-i + a, 0), 20);
      return isFinite(o) ? o : 20;
    }
    function j1(r, t, e) {
      if (!r[t])
        return 0;
      var n = pc(r, e);
      return n[t] || 0;
    }
    function pc(r, t) {
      var e = We(r, function(v, d) {
        return v + (isNaN(d) ? 0 : d);
      }, 0);
      if (e === 0)
        return [];
      for (var n = Math.pow(10, t), i = H(r, function(v) {
        return (isNaN(v) ? 0 : v) / e * n * 100;
      }), a = n * 100, o = H(i, function(v) {
        return Math.floor(v);
      }), s = We(o, function(v, d) {
        return v + d;
      }, 0), l = H(i, function(v, d) {
        return v - o[d];
      }); s < a; ) {
        for (var u = Number.NEGATIVE_INFINITY, f = null, h = 0, c = l.length; h < c; ++h)
          l[h] > u && (u = l[h], f = h);
        ++o[f], l[f] = 0, ++s;
      }
      return H(o, function(v) {
        return v / n;
      });
    }
    function J1(r, t) {
      var e = Math.max(Xe(r), Xe(t)), n = r + t;
      return e > cc ? n : xt(n, e);
    }
    var tS = 9007199254740991;
    function ou(r) {
      var t = Math.PI * 2;
      return (r % t + t) % t;
    }
    function Fi(r) {
      return r > -vc && r < vc;
    }
    var eS = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
    function Se(r) {
      if (r instanceof Date)
        return r;
      if (G(r)) {
        var t = eS.exec(r);
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
    function gc(r) {
      return Math.pow(10, zi(r));
    }
    function zi(r) {
      if (r === 0)
        return 0;
      var t = Math.floor(Math.log(r) / Math.LN10);
      return r / Math.pow(10, t) >= 10 && t++, t;
    }
    function su(r, t) {
      var e = zi(r), n = Math.pow(10, e), i = r / n, a;
      return t ? i < 1.5 ? a = 1 : i < 2.5 ? a = 2 : i < 4 ? a = 3 : i < 7 ? a = 5 : a = 10 : i < 1 ? a = 1 : i < 2 ? a = 2 : i < 3 ? a = 3 : i < 5 ? a = 5 : a = 10, r = a * n, e >= -20 ? +r.toFixed(e < 0 ? -e : 0) : r;
    }
    function rS(r, t) {
      var e = (r.length - 1) * t + 1, n = Math.floor(e), i = +r[n - 1], a = e - n;
      return a ? i + a * (r[n] - i) : i;
    }
    function nS(r) {
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
    function Gi(r) {
      var t = parseFloat(r);
      return t == r && (t !== 0 || !G(r) || r.indexOf("x") <= 0) ? t : NaN;
    }
    function lu(r) {
      return !isNaN(Gi(r));
    }
    function yc() {
      return Math.round(Math.random() * 9);
    }
    function mc(r, t) {
      return t === 0 ? r : mc(t, r % t);
    }
    function _c(r, t) {
      return r == null ? t : t == null ? r : r * t / mc(r, t);
    }
    var iS = "[ECharts] ", Sc = {}, aS = typeof console < "u" && console.warn && console.log;
    function So(r, t, e) {
      if (aS) {
        if (e) {
          if (Sc[t])
            return;
          Sc[t] = !0;
        }
        console[r](iS + t);
      }
    }
    function oS(r, t) {
      So("log", r, t);
    }
    function Nt(r, t) {
      So("warn", r, t);
    }
    function Ft(r, t) {
      So("error", r, t);
    }
    function Oe(r) {
      So("warn", "DEPRECATED: " + r, !0);
    }
    function Mt(r, t, e) {
      Oe((e ? "[" + e + "]" : "") + (r + " is deprecated, use " + t + " instead."));
    }
    function wo() {
      for (var r = [], t = 0; t < arguments.length; t++)
        r[t] = arguments[t];
      var e = "";
      {
        var n = function(i) {
          return i === void 0 ? "undefined" : i === 1 / 0 ? "Infinity" : i === -1 / 0 ? "-Infinity" : Fn(i) ? "NaN" : i instanceof Date ? "Date(" + i.toISOString() + ")" : Y(i) ? "function () { ... }" : fv(i) ? i + "" : null;
        };
        e = H(r, function(i) {
          if (G(i))
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
    function Jt(r) {
      throw new Error(r);
    }
    function wc(r, t, e) {
      return (t - r) * e + r;
    }
    var bc = "series\0", sS = "\0_ec_\0";
    function qt(r) {
      return r instanceof Array ? r : r == null ? [] : [r];
    }
    function uu(r, t, e) {
      if (r) {
        r[t] = r[t] || {}, r.emphasis = r.emphasis || {}, r.emphasis[t] = r.emphasis[t] || {};
        for (var n = 0, i = e.length; n < i; n++) {
          var a = e[n];
          !r.emphasis[t].hasOwnProperty(a) && r[t].hasOwnProperty(a) && (r.emphasis[t][a] = r[t][a]);
        }
      }
    }
    var xc = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"];
    function Hi(r) {
      return V(r) && !F(r) && !(r instanceof Date) ? r.value : r;
    }
    function lS(r) {
      return V(r) && !(r instanceof Array);
    }
    function uS(r, t, e) {
      var n = e === "normalMerge", i = e === "replaceMerge", a = e === "replaceAll";
      r = r || [], t = (t || []).slice();
      var o = j();
      M(t, function(l, u) {
        if (!V(l)) {
          t[u] = null;
          return;
        }
        l.id != null && !Dc(l.id) && Cc(l.id), l.name != null && !Dc(l.name) && Cc(l.name);
      });
      var s = fS(r, o, e);
      return (n || i) && hS(s, r, o, t), n && vS(s, t), n || i ? cS(s, t, i) : a && dS(s, t), pS(s), s;
    }
    function fS(r, t, e) {
      var n = [];
      if (e === "replaceAll")
        return n;
      for (var i = 0; i < r.length; i++) {
        var a = r[i];
        a && a.id != null && t.set(a.id, i), n.push({
          existing: e === "replaceMerge" || $n(a) ? null : a,
          newOption: null,
          keyInfo: null,
          brandNew: null
        });
      }
      return n;
    }
    function hS(r, t, e, n) {
      M(n, function(i, a) {
        if (!(!i || i.id == null)) {
          var o = Vi(i.id), s = e.get(o);
          if (s != null) {
            var l = r[s];
            Q(!l.newOption, 'Duplicated option on id "' + o + '".'), l.newOption = i, l.existing = t[s], n[a] = null;
          }
        }
      });
    }
    function vS(r, t) {
      M(t, function(e, n) {
        if (!(!e || e.name == null))
          for (var i = 0; i < r.length; i++) {
            var a = r[i].existing;
            if (!r[i].newOption && a && (a.id == null || e.id == null) && !$n(e) && !$n(a) && Tc("name", a, e)) {
              r[i].newOption = e, t[n] = null;
              return;
            }
          }
      });
    }
    function cS(r, t, e) {
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
            (i.newOption || $n(i.existing) || // In mode "replaceMerge", here no not-mapped-non-internal-existing.
            i.existing && n.id != null && !Tc("id", n, i.existing));
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
    function dS(r, t) {
      M(t, function(e) {
        r.push({
          newOption: e,
          brandNew: !0,
          existing: null,
          keyInfo: null
        });
      });
    }
    function pS(r) {
      var t = j();
      M(r, function(e) {
        var n = e.existing;
        n && t.set(n.id, e);
      }), M(r, function(e) {
        var n = e.newOption;
        Q(!n || n.id == null || !t.get(n.id) || t.get(n.id) === e, "id duplicates: " + (n && n.id)), n && n.id != null && t.set(n.id, e), !e.keyInfo && (e.keyInfo = {});
      }), M(r, function(e, n) {
        var i = e.existing, a = e.newOption, o = e.keyInfo;
        if (V(a)) {
          if (o.name = a.name != null ? Vi(a.name) : i ? i.name : bc + n, i)
            o.id = Vi(i.id);
          else if (a.id != null)
            o.id = Vi(a.id);
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
    function Tc(r, t, e) {
      var n = qe(t[r], null), i = qe(e[r], null);
      return n != null && i != null && n === i;
    }
    function Vi(r) {
      if (r == null)
        throw new Error();
      return qe(r, "");
    }
    function qe(r, t) {
      return r == null ? t : G(r) ? r : ct(r) || _i(r) ? r + "" : t;
    }
    function Cc(r) {
      Nt("`" + r + "` is invalid id or name. Must be a string or number.");
    }
    function Dc(r) {
      return _i(r) || lu(r);
    }
    function fu(r) {
      var t = r.name;
      return !!(t && t.indexOf(bc));
    }
    function $n(r) {
      return r && r.id != null && Vi(r.id).indexOf(sS) === 0;
    }
    function gS(r, t, e) {
      M(r, function(n) {
        var i = n.newOption;
        V(i) && (n.keyInfo.mainType = t, n.keyInfo.subType = yS(t, i, n.existing, e));
      });
    }
    function yS(r, t, e, n) {
      var i = t.type ? t.type : e ? e.subType : n.determineSubType(r, t);
      return i;
    }
    function on(r, t) {
      if (t.dataIndexInside != null)
        return t.dataIndexInside;
      if (t.dataIndex != null)
        return F(t.dataIndex) ? H(t.dataIndex, function(e) {
          return r.indexOfRawIndex(e);
        }) : r.indexOfRawIndex(t.dataIndex);
      if (t.name != null)
        return F(t.name) ? H(t.name, function(e) {
          return r.indexOfName(e);
        }) : r.indexOfName(t.name);
    }
    function St() {
      var r = "__ec_inner_" + mS++;
      return function(t) {
        return t[r] || (t[r] = {});
      };
    }
    var mS = yc();
    function hu(r, t, e) {
      var n = vu(t, e), i = n.mainTypeSpecified, a = n.queryOptionMap, o = n.others, s = o, l = e ? e.defaultMainType : null;
      return !i && l && a.set(l, {}), a.each(function(u, f) {
        var h = Wi(r, f, u, {
          useDefault: l === f,
          enableAll: e && e.enableAll != null ? e.enableAll : !0,
          enableNone: e && e.enableNone != null ? e.enableNone : !0
        });
        s[f + "Models"] = h.models, s[f + "Model"] = h.models[0];
      }), s;
    }
    function vu(r, t) {
      var e;
      if (G(r)) {
        var n = {};
        n[r + "Index"] = 0, e = n;
      } else
        e = r;
      var i = j(), a = {}, o = !1;
      return M(e, function(s, l) {
        if (l === "dataIndex" || l === "dataIndexInside") {
          a[l] = s;
          return;
        }
        var u = l.match(/^(\w+)(Index|Id|Name)$/) || [], f = u[1], h = (u[2] || "").toLowerCase();
        if (!(!f || !h || t && t.includeMainTypes && lt(t.includeMainTypes, f) < 0)) {
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
    var Be = {
      useDefault: !0,
      enableAll: !1,
      enableNone: !1
    };
    function Wi(r, t, e, n) {
      n = n || Be;
      var i = e.index, a = e.id, o = e.name, s = {
        models: null,
        specified: i != null || a != null || o != null
      };
      if (!s.specified) {
        var l = void 0;
        return s.models = n.useDefault && (l = r.getComponent(t)) ? [l] : [], s;
      }
      return i === "none" || i === !1 ? (Q(n.enableNone, '`"none"` or `false` is not a valid value on index option.'), s.models = [], s) : (i === "all" && (Q(n.enableAll, '`"all"` is not a valid value on index option.'), i = a = o = null), s.models = r.queryComponents({
        mainType: t,
        index: i,
        id: a,
        name: o
      }), s);
    }
    function Mc(r, t, e) {
      r.setAttribute ? r.setAttribute(t, e) : r[t] = e;
    }
    function _S(r, t) {
      return r.getAttribute ? r.getAttribute(t) : r[t];
    }
    function SS(r) {
      return r === "auto" ? X.domSupported ? "html" : "richText" : r || "html";
    }
    function Ac(r, t, e, n, i) {
      var a = t == null || t === "auto";
      if (n == null)
        return n;
      if (ct(n)) {
        var o = wc(e || 0, n, i);
        return xt(o, a ? Math.max(Xe(e || 0), Xe(n)) : t);
      } else {
        if (G(n))
          return i < 1 ? e : n;
        for (var s = [], l = e, u = n, f = Math.max(l ? l.length : 0, u.length), h = 0; h < f; ++h) {
          var c = r.getDimensionInfo(h);
          if (c && c.type === "ordinal")
            s[h] = (i < 1 && l ? l : u)[h];
          else {
            var v = l && l[h] ? l[h] : 0, d = u[h], o = wc(v, d, i);
            s[h] = xt(o, a ? Math.max(Xe(v), Xe(d)) : t);
          }
        }
        return s;
      }
    }
    var wS = ".", sn = "___EC__COMPONENT__CONTAINER___", Lc = "___EC__EXTENDED_CLASS___";
    function Ze(r) {
      var t = {
        main: "",
        sub: ""
      };
      if (r) {
        var e = r.split(wS);
        t.main = e[0] || "", t.sub = e[1] || "";
      }
      return t;
    }
    function bS(r) {
      Q(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(r), 'componentType "' + r + '" illegal');
    }
    function xS(r) {
      return !!(r && r[Lc]);
    }
    function cu(r, t) {
      r.$constructor = r, r.extend = function(e) {
        M(t, function(a) {
          e[a] || console.warn("Method `" + a + "` should be implemented" + (e.type ? " in " + e.type : "") + ".");
        });
        var n = this, i;
        return TS(n) ? i = /** @class */
        function(a) {
          B(o, a);
          function o() {
            return a.apply(this, arguments) || this;
          }
          return o;
        }(n) : (i = function() {
          (e.$constructor || n).apply(this, arguments);
        }, hl(i, this)), k(i.prototype, e), i[Lc] = !0, i.extend = this.extend, i.superCall = MS, i.superApply = AS, i.superClass = n, i;
      };
    }
    function TS(r) {
      return Y(r) && /^class\s/.test(Function.prototype.toString.call(r));
    }
    function Pc(r, t) {
      r.extend = t.extend;
    }
    var CS = Math.round(Math.random() * 10);
    function DS(r) {
      var t = ["__\0is_clz", CS++].join("_");
      r.prototype[t] = !0, Q(!r.isInstance, 'The method "is" can not be defined.'), r.isInstance = function(e) {
        return !!(e && e[t]);
      };
    }
    function MS(r, t) {
      for (var e = [], n = 2; n < arguments.length; n++)
        e[n - 2] = arguments[n];
      return this.superClass.prototype[t].apply(r, e);
    }
    function AS(r, t, e) {
      return this.superClass.prototype[t].apply(r, e);
    }
    function bo(r) {
      var t = {};
      r.registerClass = function(n) {
        var i = n.type || n.prototype.type;
        if (i) {
          bS(i), n.prototype.type = i;
          var a = Ze(i);
          if (!a.sub)
            t[a.main] && console.warn(a.main + " exists."), t[a.main] = n;
          else if (a.sub !== sn) {
            var o = e(a);
            o[a.sub] = n;
          }
        }
        return n;
      }, r.getClass = function(n, i, a) {
        var o = t[n];
        if (o && o[sn] && (o = i ? o[i] : null), a && !o)
          throw new Error(i ? "Component " + n + "." + (i || "") + " is used but not imported." : n + ".type should be specified.");
        return o;
      }, r.getClassesByMainType = function(n) {
        var i = Ze(n), a = [], o = t[i.main];
        return o && o[sn] ? M(o, function(s, l) {
          l !== sn && a.push(s);
        }) : a.push(o), a;
      }, r.hasClass = function(n) {
        var i = Ze(n);
        return !!t[i.main];
      }, r.getAllClassMainTypes = function() {
        var n = [];
        return M(t, function(i, a) {
          n.push(a);
        }), n;
      }, r.hasSubTypes = function(n) {
        var i = Ze(n), a = t[i.main];
        return a && a[sn];
      };
      function e(n) {
        var i = t[n.main];
        return (!i || !i[sn]) && (i = t[n.main] = {}, i[sn] = !0), i;
      }
    }
    function Ui(r, t) {
      for (var e = 0; e < r.length; e++)
        r[e][1] || (r[e][1] = r[e][0]);
      return t = t || !1, function(n, i, a) {
        for (var o = {}, s = 0; s < r.length; s++) {
          var l = r[s][1];
          if (!(i && lt(i, l) >= 0 || a && lt(a, l) < 0)) {
            var u = n.getShallow(l, t);
            u != null && (o[r[s][0]] = u);
          }
        }
        return o;
      };
    }
    var LS = [
      ["fill", "color"],
      ["shadowBlur"],
      ["shadowOffsetX"],
      ["shadowOffsetY"],
      ["opacity"],
      ["shadowColor"]
      // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
      // So do not transfer decal directly.
    ], PS = Ui(LS), IS = (
      /** @class */
      function() {
        function r() {
        }
        return r.prototype.getAreaStyle = function(t, e) {
          return PS(this, t, e);
        }, r;
      }()
    ), du = new Pi(50);
    function RS(r) {
      if (typeof r == "string") {
        var t = du.get(r);
        return t && t.image;
      } else
        return r;
    }
    function Ic(r, t, e, n, i) {
      if (r)
        if (typeof r == "string") {
          if (t && t.__zrImageSrc === r || !e)
            return t;
          var a = du.get(r), o = {
            hostEl: e,
            cb: n,
            cbPayload: i
          };
          return a ? (t = a.image, !xo(t) && a.pending.push(o)) : (t = ar.loadImage(r, Rc, Rc), t.__zrImageSrc = r, du.put(r, t.__cachedImgObj = {
            image: t,
            pending: [o]
          })), t;
        } else
          return r;
      else
        return t;
    }
    function Rc() {
      var r = this.__cachedImgObj;
      this.onload = this.onerror = this.__cachedImgObj = null;
      for (var t = 0; t < r.pending.length; t++) {
        var e = r.pending[t], n = e.cb;
        n && n(this, e.cbPayload), e.hostEl.dirty();
      }
      r.pending.length = 0;
    }
    function xo(r) {
      return r && r.width && r.height;
    }
    var pu = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
    function Ec(r, t, e, n, i) {
      if (!t)
        return "";
      var a = (r + "").split(`
`);
      i = kc(t, e, n, i);
      for (var o = 0, s = a.length; o < s; o++)
        a[o] = Oc(a[o], i);
      return a.join(`
`);
    }
    function kc(r, t, e, n) {
      n = n || {};
      var i = k({}, n);
      i.font = t, e = J(e, "..."), i.maxIterations = J(n.maxIterations, 2);
      var a = i.minChar = J(n.minChar, 0);
      i.cnCharWidth = he("国", t);
      var o = i.ascCharWidth = he("a", t);
      i.placeholder = J(n.placeholder, "");
      for (var s = r = Math.max(0, r - 1), l = 0; l < a && s >= o; l++)
        s -= o;
      var u = he(e, t);
      return u > s && (e = "", u = 0), s = r - u, i.ellipsis = e, i.ellipsisWidth = u, i.contentWidth = s, i.containerWidth = r, i;
    }
    function Oc(r, t) {
      var e = t.containerWidth, n = t.font, i = t.contentWidth;
      if (!e)
        return "";
      var a = he(r, n);
      if (a <= e)
        return r;
      for (var o = 0; ; o++) {
        if (a <= i || o >= t.maxIterations) {
          r += t.ellipsis;
          break;
        }
        var s = o === 0 ? ES(r, i, t.ascCharWidth, t.cnCharWidth) : a > 0 ? Math.floor(r.length * i / a) : 0;
        r = r.substr(0, s), a = he(r, n);
      }
      return r === "" && (r = t.placeholder), r;
    }
    function ES(r, t, e, n) {
      for (var i = 0, a = 0, o = r.length; a < o && i < t; a++) {
        var s = r.charCodeAt(a);
        i += 0 <= s && s <= 127 ? e : n;
      }
      return a;
    }
    function kS(r, t) {
      r != null && (r += "");
      var e = t.overflow, n = t.padding, i = t.font, a = e === "truncate", o = tu(i), s = J(t.lineHeight, o), l = !!t.backgroundColor, u = t.lineOverflow === "truncate", f = t.width, h;
      f != null && (e === "break" || e === "breakAll") ? h = r ? Nc(r, t.font, f, e === "breakAll", 0).lines : [] : h = r ? r.split(`
`) : [];
      var c = h.length * s, v = J(t.height, c);
      if (c > v && u) {
        var d = Math.floor(v / s);
        h = h.slice(0, d);
      }
      if (r && a && f != null)
        for (var g = kc(f, i, t.ellipsis, {
          minChar: t.truncateMinChar,
          placeholder: t.placeholder
        }), p = 0; p < h.length; p++)
          h[p] = Oc(h[p], g);
      for (var y = v, m = 0, p = 0; p < h.length; p++)
        m = Math.max(he(h[p], i), m);
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
    var OS = function() {
      function r() {
      }
      return r;
    }(), Bc = function() {
      function r(t) {
        this.tokens = [], t && (this.tokens = t);
      }
      return r;
    }(), BS = function() {
      function r() {
        this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = [];
      }
      return r;
    }();
    function NS(r, t) {
      var e = new BS();
      if (r != null && (r += ""), !r)
        return e;
      for (var n = t.width, i = t.height, a = t.overflow, o = (a === "break" || a === "breakAll") && n != null ? {
        width: n,
        accumWidth: 0,
        breakAll: a === "breakAll"
      } : null, s = pu.lastIndex = 0, l; (l = pu.exec(r)) != null; ) {
        var u = l.index;
        u > s && gu(e, r.substring(s, u), t, o), gu(e, l[2], t, o, l[1]), s = pu.lastIndex;
      }
      s < r.length && gu(e, r.substring(s, r.length), t, o);
      var f = [], h = 0, c = 0, v = t.padding, d = a === "truncate", g = t.lineOverflow === "truncate";
      function p(O, N, W) {
        O.width = N, O.lineHeight = W, h += W, c = Math.max(c, N);
      }
      t:
        for (var y = 0; y < e.lines.length; y++) {
          for (var m = e.lines[y], _ = 0, S = 0, b = 0; b < m.tokens.length; b++) {
            var w = m.tokens[b], x = w.styleName && t.rich[w.styleName] || {}, T = w.textPadding = x.padding, D = T ? T[1] + T[3] : 0, A = w.font = x.font || t.font;
            w.contentHeight = tu(A);
            var C = J(x.height, w.contentHeight);
            if (w.innerHeight = C, T && (C += T[0] + T[2]), w.height = C, w.lineHeight = wr(x.lineHeight, t.lineHeight, C), w.align = x && x.align || t.align, w.verticalAlign = x && x.verticalAlign || "middle", g && i != null && h + w.lineHeight > i) {
              b > 0 ? (m.tokens = m.tokens.slice(0, b), p(m, S, _), e.lines = e.lines.slice(0, y + 1)) : e.lines = e.lines.slice(0, y);
              break t;
            }
            var L = x.width, P = L == null || L === "auto";
            if (typeof L == "string" && L.charAt(L.length - 1) === "%")
              w.percentWidth = L, f.push(w), w.contentWidth = he(w.text, A);
            else {
              if (P) {
                var I = x.backgroundColor, R = I && I.image;
                R && (R = RS(R), xo(R) && (w.width = Math.max(w.width, R.width * C / R.height)));
              }
              var E = d && n != null ? n - S : null;
              E != null && E < w.width ? !P || E < D ? (w.text = "", w.width = w.contentWidth = 0) : (w.text = Ec(w.text, E - D, A, t.ellipsis, {
                minChar: t.truncateMinChar
              }), w.width = w.contentWidth = he(w.text, A)) : w.contentWidth = he(w.text, A);
            }
            w.width += D, S += w.width, x && (_ = Math.max(_, w.lineHeight));
          }
          p(m, S, _);
        }
      e.outerWidth = e.width = J(n, c), e.outerHeight = e.height = J(i, h), e.contentHeight = h, e.contentWidth = c, v && (e.outerWidth += v[1] + v[3], e.outerHeight += v[0] + v[2]);
      for (var y = 0; y < f.length; y++) {
        var w = f[y], U = w.percentWidth;
        w.width = parseInt(U, 10) / 100 * e.width;
      }
      return e;
    }
    function gu(r, t, e, n, i) {
      var a = t === "", o = i && e.rich[i] || {}, s = r.lines, l = o.font || e.font, u = !1, f, h;
      if (n) {
        var c = o.padding, v = c ? c[1] + c[3] : 0;
        if (o.width != null && o.width !== "auto") {
          var d = Lr(o.width, n.width) + v;
          s.length > 0 && d + n.accumWidth > n.width && (f = t.split(`
`), u = !0), n.accumWidth = d;
        } else {
          var g = Nc(t, l, n.width, n.breakAll, n.accumWidth);
          n.accumWidth = g.accumWidth + v, h = g.linesWidths, f = g.lines;
        }
      } else
        f = t.split(`
`);
      for (var p = 0; p < f.length; p++) {
        var y = f[p], m = new OS();
        if (m.styleName = i, m.text = y, m.isLineHolder = !y && !a, typeof o.width == "number" ? m.width = o.width : m.width = h ? h[p] : he(y, l), !p && !u) {
          var _ = (s[s.length - 1] || (s[0] = new Bc())).tokens, S = _.length;
          S === 1 && _[0].isLineHolder ? _[0] = m : (y || !S || a) && _.push(m);
        } else
          s.push(new Bc([m]));
      }
    }
    function FS(r) {
      var t = r.charCodeAt(0);
      return t >= 32 && t <= 591 || t >= 880 && t <= 4351 || t >= 4608 && t <= 5119 || t >= 7680 && t <= 8303;
    }
    var zS = We(",&?/;] ".split(""), function(r, t) {
      return r[t] = !0, r;
    }, {});
    function GS(r) {
      return FS(r) ? !!zS[r] : !0;
    }
    function Nc(r, t, e, n, i) {
      for (var a = [], o = [], s = "", l = "", u = 0, f = 0, h = 0; h < r.length; h++) {
        var c = r.charAt(h);
        if (c === `
`) {
          l && (s += l, f += u), a.push(s), o.push(f), s = "", l = "", u = 0, f = 0;
          continue;
        }
        var v = he(c, t), d = n ? !1 : !GS(c);
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
    var yu = "__zr_style_" + Math.round(Math.random() * 10), ln = {
      shadowBlur: 0,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      shadowColor: "#000",
      opacity: 1,
      blend: "source-over"
    }, To = {
      style: {
        shadowBlur: !0,
        shadowOffsetX: !0,
        shadowOffsetY: !0,
        shadowColor: !0,
        opacity: !0
      }
    };
    ln[yu] = !0;
    var Fc = ["z", "z2", "invisible"], HS = ["invisible"], Yi = function(r) {
      B(t, r);
      function t(e) {
        return r.call(this, e) || this;
      }
      return t.prototype._init = function(e) {
        for (var n = pt(e), i = 0; i < n.length; i++) {
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
        if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && VS(this, e, n) || o && !o[0] && !o[3])
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
          e = this._paintRect || (this._paintRect = new nt(0, 0, 0, 0)), n ? nt.applyTransform(e, i, n) : e.copy(i), (o || s || l) && (e.width += o * 2 + Math.abs(s), e.height += o * 2 + Math.abs(l), e.x = Math.min(e.x, e.x + s - o), e.y = Math.min(e.y, e.y + l - o));
          var u = this.dirtyRectTolerance;
          e.isZero() || (e.x = Math.floor(e.x - u), e.y = Math.floor(e.y - u), e.width = Math.ceil(e.width + 1 + u * 2), e.height = Math.ceil(e.height + 1 + u * 2));
        }
        return e;
      }, t.prototype.setPrevPaintRect = function(e) {
        e ? (this._prevPaintRect = this._prevPaintRect || new nt(0, 0, 0, 0), this._prevPaintRect.copy(e)) : this._prevPaintRect = null;
      }, t.prototype.getPrevPaintRect = function() {
        return this._prevPaintRect;
      }, t.prototype.animateStyle = function(e) {
        return this.animate("style", e);
      }, t.prototype.updateDuringAnimation = function(e) {
        e === "style" ? this.dirtyStyle() : this.markRedraw();
      }, t.prototype.attrKV = function(e, n) {
        e !== "style" ? r.prototype.attrKV.call(this, e, n) : this.style ? this.setStyle(n) : this.useStyle(n);
      }, t.prototype.setStyle = function(e, n) {
        return typeof e == "string" ? this.style[e] = n : k(this.style, e), this.dirtyStyle(), this;
      }, t.prototype.dirtyStyle = function(e) {
        e || this.markRedraw(), this.__dirty |= Ai, this._rect && (this._rect = null);
      }, t.prototype.dirty = function() {
        this.dirtyStyle();
      }, t.prototype.styleChanged = function() {
        return !!(this.__dirty & Ai);
      }, t.prototype.styleUpdated = function() {
        this.__dirty &= ~Ai;
      }, t.prototype.createStyle = function(e) {
        return bi(ln, e);
      }, t.prototype.useStyle = function(e) {
        e[yu] || (e = this.createStyle(e)), this.__inHover ? this.__hoverStyle = e : this.style = e, this.dirtyStyle();
      }, t.prototype.isStyleObject = function(e) {
        return e[yu];
      }, t.prototype._innerSaveToNormal = function(e) {
        r.prototype._innerSaveToNormal.call(this, e);
        var n = this._normalState;
        e.style && !n.style && (n.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(e, n, Fc);
      }, t.prototype._applyStateObj = function(e, n, i, a, o, s) {
        r.prototype._applyStateObj.call(this, e, n, i, a, o, s);
        var l = !(n && a), u;
        if (n && n.style ? o ? a ? u = n.style : (u = this._mergeStyle(this.createStyle(), i.style), this._mergeStyle(u, n.style)) : (u = this._mergeStyle(this.createStyle(), a ? this.style : i.style), this._mergeStyle(u, n.style)) : l && (u = i.style), u)
          if (o) {
            var f = this.style;
            if (this.style = this.createStyle(l ? {} : f), l)
              for (var h = pt(f), c = 0; c < h.length; c++) {
                var v = h[c];
                v in u && (u[v] = u[v], this.style[v] = f[v]);
              }
            for (var d = pt(u), c = 0; c < d.length; c++) {
              var v = d[c];
              this.style[v] = this.style[v];
            }
            this._transitionState(e, {
              style: u
            }, s, this.getAnimationStyleProps());
          } else
            this.useStyle(u);
        for (var g = this.__inHover ? HS : Fc, c = 0; c < g.length; c++) {
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
        return k(e, n), e;
      }, t.prototype.getAnimationStyleProps = function() {
        return To;
      }, t.initDefaultProps = function() {
        var e = t.prototype;
        e.type = "displayable", e.invisible = !1, e.z = 0, e.z2 = 0, e.zlevel = 0, e.culling = !1, e.cursor = "pointer", e.rectHover = !1, e.incremental = !1, e._rect = null, e.dirtyRectTolerance = 0, e.__dirty = ue | Ai;
      }(), t;
    }(yo), mu = new nt(0, 0, 0, 0), _u = new nt(0, 0, 0, 0);
    function VS(r, t, e) {
      return mu.copy(r.getBoundingRect()), r.transform && mu.applyTransform(r.transform), _u.width = t, _u.height = e, !mu.intersect(_u);
    }
    var we = Math.min, be = Math.max, Su = Math.sin, wu = Math.cos, un = Math.PI * 2, Co = Zr(), Do = Zr(), Mo = Zr();
    function zc(r, t, e, n, i, a) {
      i[0] = we(r, e), i[1] = we(t, n), a[0] = be(r, e), a[1] = be(t, n);
    }
    var Gc = [], Hc = [];
    function WS(r, t, e, n, i, a, o, s, l, u) {
      var f = Hv, h = At, c = f(r, e, i, o, Gc);
      l[0] = 1 / 0, l[1] = 1 / 0, u[0] = -1 / 0, u[1] = -1 / 0;
      for (var v = 0; v < c; v++) {
        var d = h(r, e, i, o, Gc[v]);
        l[0] = we(d, l[0]), u[0] = be(d, u[0]);
      }
      c = f(t, n, a, s, Hc);
      for (var v = 0; v < c; v++) {
        var g = h(t, n, a, s, Hc[v]);
        l[1] = we(g, l[1]), u[1] = be(g, u[1]);
      }
      l[0] = we(r, l[0]), u[0] = be(r, u[0]), l[0] = we(o, l[0]), u[0] = be(o, u[0]), l[1] = we(t, l[1]), u[1] = be(t, u[1]), l[1] = we(s, l[1]), u[1] = be(s, u[1]);
    }
    function US(r, t, e, n, i, a, o, s) {
      var l = Uv, u = Bt, f = be(we(l(r, e, i), 1), 0), h = be(we(l(t, n, a), 1), 0), c = u(r, e, i, f), v = u(t, n, a, h);
      o[0] = we(r, i, c), o[1] = we(t, a, v), s[0] = be(r, i, c), s[1] = be(t, a, v);
    }
    function YS(r, t, e, n, i, a, o, s, l) {
      var u = br, f = xr, h = Math.abs(i - a);
      if (h % un < 1e-4 && h > 1e-4) {
        s[0] = r - e, s[1] = t - n, l[0] = r + e, l[1] = t + n;
        return;
      }
      if (Co[0] = wu(i) * e + r, Co[1] = Su(i) * n + t, Do[0] = wu(a) * e + r, Do[1] = Su(a) * n + t, u(s, Co, Do), f(l, Co, Do), i = i % un, i < 0 && (i = i + un), a = a % un, a < 0 && (a = a + un), i > a && !o ? a += un : i < a && o && (i += un), o) {
        var c = a;
        a = i, i = c;
      }
      for (var v = 0; v < a; v += Math.PI / 2)
        v > i && (Mo[0] = wu(v) * e + r, Mo[1] = Su(v) * n + t, u(s, Mo, s), f(l, Mo, l));
    }
    var ut = {
      M: 1,
      L: 2,
      C: 3,
      Q: 4,
      A: 5,
      Z: 6,
      R: 7
    }, fn = [], hn = [], $e = [], Pr = [], Ke = [], Qe = [], bu = Math.min, xu = Math.max, vn = Math.cos, cn = Math.sin, sr = Math.abs, Tu = Math.PI, Ir = Tu * 2, Cu = typeof Float32Array < "u", Xi = [];
    function Du(r) {
      var t = Math.round(r / Tu * 1e8) / 1e8;
      return t % 2 * Tu;
    }
    function XS(r, t) {
      var e = Du(r[0]);
      e < 0 && (e += Ir);
      var n = e - r[0], i = r[1];
      i += n, !t && i - e >= Ir ? i = e + Ir : t && e - i >= Ir ? i = e - Ir : !t && e > i ? i = e + (Ir - Du(e - i)) : t && e < i && (i = e - (Ir - Du(i - e))), r[0] = e, r[1] = i;
    }
    var Rr = function() {
      function r(t) {
        this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, t && (this._saveData = !1), this._saveData && (this.data = []);
      }
      return r.prototype.increaseVersion = function() {
        this._version++;
      }, r.prototype.getVersion = function() {
        return this._version;
      }, r.prototype.setScale = function(t, e, n) {
        n = n || 0, n > 0 && (this._ux = sr(n / co / t) || 0, this._uy = sr(n / co / e) || 0);
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
        return this._drawPendingPt(), this.addData(ut.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this;
      }, r.prototype.lineTo = function(t, e) {
        var n = sr(t - this._xi), i = sr(e - this._yi), a = n > this._ux || i > this._uy;
        if (this.addData(ut.L, t, e), this._ctx && a && this._ctx.lineTo(t, e), a)
          this._xi = t, this._yi = e, this._pendingPtDist = 0;
        else {
          var o = n * n + i * i;
          o > this._pendingPtDist && (this._pendingPtX = t, this._pendingPtY = e, this._pendingPtDist = o);
        }
        return this;
      }, r.prototype.bezierCurveTo = function(t, e, n, i, a, o) {
        return this._drawPendingPt(), this.addData(ut.C, t, e, n, i, a, o), this._ctx && this._ctx.bezierCurveTo(t, e, n, i, a, o), this._xi = a, this._yi = o, this;
      }, r.prototype.quadraticCurveTo = function(t, e, n, i) {
        return this._drawPendingPt(), this.addData(ut.Q, t, e, n, i), this._ctx && this._ctx.quadraticCurveTo(t, e, n, i), this._xi = n, this._yi = i, this;
      }, r.prototype.arc = function(t, e, n, i, a, o) {
        this._drawPendingPt(), Xi[0] = i, Xi[1] = a, XS(Xi, o), i = Xi[0], a = Xi[1];
        var s = a - i;
        return this.addData(ut.A, t, e, n, n, i, s, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, a, o), this._xi = vn(a) * n + t, this._yi = cn(a) * n + e, this;
      }, r.prototype.arcTo = function(t, e, n, i, a) {
        return this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, e, n, i, a), this;
      }, r.prototype.rect = function(t, e, n, i) {
        return this._drawPendingPt(), this._ctx && this._ctx.rect(t, e, n, i), this.addData(ut.R, t, e, n, i), this;
      }, r.prototype.closePath = function() {
        this._drawPendingPt(), this.addData(ut.Z);
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
        !(this.data && this.data.length === e) && Cu && (this.data = new Float32Array(e));
        for (var n = 0; n < e; n++)
          this.data[n] = t[n];
        this._len = e;
      }, r.prototype.appendPath = function(t) {
        t instanceof Array || (t = [t]);
        for (var e = t.length, n = 0, i = this._len, a = 0; a < e; a++)
          n += t[a].len();
        Cu && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
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
          t instanceof Array && (t.length = this._len, Cu && this._len > 11 && (this.data = new Float32Array(t)));
        }
      }, r.prototype.getBoundingRect = function() {
        $e[0] = $e[1] = Ke[0] = Ke[1] = Number.MAX_VALUE, Pr[0] = Pr[1] = Qe[0] = Qe[1] = -Number.MAX_VALUE;
        var t = this.data, e = 0, n = 0, i = 0, a = 0, o;
        for (o = 0; o < this._len; ) {
          var s = t[o++], l = o === 1;
          switch (l && (e = t[o], n = t[o + 1], i = e, a = n), s) {
            case ut.M:
              e = i = t[o++], n = a = t[o++], Ke[0] = i, Ke[1] = a, Qe[0] = i, Qe[1] = a;
              break;
            case ut.L:
              zc(e, n, t[o], t[o + 1], Ke, Qe), e = t[o++], n = t[o++];
              break;
            case ut.C:
              WS(e, n, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], Ke, Qe), e = t[o++], n = t[o++];
              break;
            case ut.Q:
              US(e, n, t[o++], t[o++], t[o], t[o + 1], Ke, Qe), e = t[o++], n = t[o++];
              break;
            case ut.A:
              var u = t[o++], f = t[o++], h = t[o++], c = t[o++], v = t[o++], d = t[o++] + v;
              o += 1;
              var g = !t[o++];
              l && (i = vn(v) * h + u, a = cn(v) * c + f), YS(u, f, h, c, v, d, g, Ke, Qe), e = vn(d) * h + u, n = cn(d) * c + f;
              break;
            case ut.R:
              i = e = t[o++], a = n = t[o++];
              var p = t[o++], y = t[o++];
              zc(i, a, i + p, a + y, Ke, Qe);
              break;
            case ut.Z:
              e = i, n = a;
              break;
          }
          br($e, $e, Ke), xr(Pr, Pr, Qe);
        }
        return o === 0 && ($e[0] = $e[1] = Pr[0] = Pr[1] = 0), new nt($e[0], $e[1], Pr[0] - $e[0], Pr[1] - $e[1]);
      }, r.prototype._calculateLength = function() {
        var t = this.data, e = this._len, n = this._ux, i = this._uy, a = 0, o = 0, s = 0, l = 0;
        this._pathSegLen || (this._pathSegLen = []);
        for (var u = this._pathSegLen, f = 0, h = 0, c = 0; c < e; ) {
          var v = t[c++], d = c === 1;
          d && (a = t[c], o = t[c + 1], s = a, l = o);
          var g = -1;
          switch (v) {
            case ut.M:
              a = s = t[c++], o = l = t[c++];
              break;
            case ut.L: {
              var p = t[c++], y = t[c++], m = p - a, _ = y - o;
              (sr(m) > n || sr(_) > i || c === e - 1) && (g = Math.sqrt(m * m + _ * _), a = p, o = y);
              break;
            }
            case ut.C: {
              var S = t[c++], b = t[c++], p = t[c++], y = t[c++], w = t[c++], x = t[c++];
              g = i1(a, o, S, b, p, y, w, x, 10), a = w, o = x;
              break;
            }
            case ut.Q: {
              var S = t[c++], b = t[c++], p = t[c++], y = t[c++];
              g = o1(a, o, S, b, p, y, 10), a = p, o = y;
              break;
            }
            case ut.A:
              var T = t[c++], D = t[c++], A = t[c++], C = t[c++], L = t[c++], P = t[c++], I = P + L;
              c += 1, t[c++], d && (s = vn(L) * A + T, l = cn(L) * C + D), g = xu(A, C) * bu(Ir, Math.abs(P)), a = vn(I) * A + T, o = cn(I) * C + D;
              break;
            case ut.R: {
              s = a = t[c++], l = o = t[c++];
              var R = t[c++], E = t[c++];
              g = R * 2 + E * 2;
              break;
            }
            case ut.Z: {
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
              switch (T && (u = n[w], f = n[w + 1], s = u, l = f), x !== ut.L && _ > 0 && (t.lineTo(S, b), _ = 0), x) {
                case ut.M:
                  s = u = n[w++], l = f = n[w++], t.moveTo(u, f);
                  break;
                case ut.L: {
                  h = n[w++], c = n[w++];
                  var D = sr(h - u), A = sr(c - f);
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
                case ut.C: {
                  var I = n[w++], R = n[w++], E = n[w++], U = n[w++], O = n[w++], N = n[w++];
                  if (v) {
                    var C = d[y++];
                    if (p + C > m) {
                      var L = (m - p) / C;
                      no(u, I, E, O, L, fn), no(f, R, U, N, L, hn), t.bezierCurveTo(fn[1], hn[1], fn[2], hn[2], fn[3], hn[3]);
                      break t;
                    }
                    p += C;
                  }
                  t.bezierCurveTo(I, R, E, U, O, N), u = O, f = N;
                  break;
                }
                case ut.Q: {
                  var I = n[w++], R = n[w++], E = n[w++], U = n[w++];
                  if (v) {
                    var C = d[y++];
                    if (p + C > m) {
                      var L = (m - p) / C;
                      io(u, I, E, L, fn), io(f, R, U, L, hn), t.quadraticCurveTo(fn[1], hn[1], fn[2], hn[2]);
                      break t;
                    }
                    p += C;
                  }
                  t.quadraticCurveTo(I, R, E, U), u = E, f = U;
                  break;
                }
                case ut.A:
                  var W = n[w++], K = n[w++], $ = n[w++], et = n[w++], ht = n[w++], Rt = n[w++], yt = n[w++], se = !n[w++], de = $ > et ? $ : et, Ot = sr($ - et) > 1e-3, Dt = ht + Rt, Z = !1;
                  if (v) {
                    var C = d[y++];
                    p + C > m && (Dt = ht + Rt * (m - p) / C, Z = !0), p += C;
                  }
                  if (Ot && t.ellipse ? t.ellipse(W, K, $, et, yt, ht, Dt, se) : t.arc(W, K, de, ht, Dt, se), Z)
                    break t;
                  T && (s = vn(ht) * $ + W, l = cn(ht) * et + K), u = vn(Dt) * $ + W, f = cn(Dt) * et + K;
                  break;
                case ut.R:
                  s = u = n[w], l = f = n[w + 1], h = n[w++], c = n[w++];
                  var tt = n[w++], ir = n[w++];
                  if (v) {
                    var C = d[y++];
                    if (p + C > m) {
                      var Et = m - p;
                      t.moveTo(h, c), t.lineTo(h + bu(Et, tt), c), Et -= tt, Et > 0 && t.lineTo(h + tt, c + bu(Et, ir)), Et -= ir, Et > 0 && t.lineTo(h + xu(tt - Et, 0), c + ir), Et -= tt, Et > 0 && t.lineTo(h, c + xu(ir - Et, 0));
                      break t;
                    }
                    p += C;
                  }
                  t.rect(h, c, tt, ir);
                  break;
                case ut.Z:
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
      }, r.CMD = ut, r.initDefaultProps = function() {
        var t = r.prototype;
        t._saveData = !0, t._ux = 0, t._uy = 0, t._pendingPtDist = 0, t._version = 0;
      }(), r;
    }();
    function Kn(r, t, e, n, i, a, o) {
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
    function qS(r, t, e, n, i, a, o, s, l, u, f) {
      if (l === 0)
        return !1;
      var h = l;
      if (f > t + h && f > n + h && f > a + h && f > s + h || f < t - h && f < n - h && f < a - h && f < s - h || u > r + h && u > e + h && u > i + h && u > o + h || u < r - h && u < e - h && u < i - h && u < o - h)
        return !1;
      var c = Vv(r, t, e, n, i, a, o, s, u, f, null);
      return c <= h / 2;
    }
    function ZS(r, t, e, n, i, a, o, s, l) {
      if (o === 0)
        return !1;
      var u = o;
      if (l > t + u && l > n + u && l > a + u || l < t - u && l < n - u && l < a - u || s > r + u && s > e + u && s > i + u || s < r - u && s < e - u && s < i - u)
        return !1;
      var f = Yv(r, t, e, n, i, a, s, l, null);
      return f <= u / 2;
    }
    var Vc = Math.PI * 2;
    function Er(r) {
      return r %= Vc, r < 0 && (r += Vc), r;
    }
    var qi = Math.PI * 2;
    function $S(r, t, e, n, i, a, o, s, l) {
      if (o === 0)
        return !1;
      var u = o;
      s -= r, l -= t;
      var f = Math.sqrt(s * s + l * l);
      if (f - u > e || f + u < e)
        return !1;
      if (Math.abs(n - i) % qi < 1e-4)
        return !0;
      if (a) {
        var h = n;
        n = Er(i), i = Er(h);
      } else
        n = Er(n), i = Er(i);
      n > i && (i += qi);
      var c = Math.atan2(l, s);
      return c < 0 && (c += qi), c >= n && c <= i || c + qi >= n && c + qi <= i;
    }
    function lr(r, t, e, n, i, a) {
      if (a > t && a > n || a < t && a < n || n === t)
        return 0;
      var o = (a - t) / (n - t), s = n < t ? 1 : -1;
      (o === 1 || o === 0) && (s = n < t ? 0.5 : -0.5);
      var l = o * (e - r) + r;
      return l === i ? 1 / 0 : l > i ? s : 0;
    }
    var kr = Rr.CMD, dn = Math.PI * 2, KS = 1e-4;
    function QS(r, t) {
      return Math.abs(r - t) < KS;
    }
    var Zt = [-1, -1, -1], xe = [-1, -1];
    function jS() {
      var r = xe[0];
      xe[0] = xe[1], xe[1] = r;
    }
    function JS(r, t, e, n, i, a, o, s, l, u) {
      if (u > t && u > n && u > a && u > s || u < t && u < n && u < a && u < s)
        return 0;
      var f = ro(t, n, a, s, u, Zt);
      if (f === 0)
        return 0;
      for (var h = 0, c = -1, v = void 0, d = void 0, g = 0; g < f; g++) {
        var p = Zt[g], y = p === 0 || p === 1 ? 0.5 : 1, m = At(r, e, i, o, p);
        m < l || (c < 0 && (c = Hv(t, n, a, s, xe), xe[1] < xe[0] && c > 1 && jS(), v = At(t, n, a, s, xe[0]), c > 1 && (d = At(t, n, a, s, xe[1]))), c === 2 ? p < xe[0] ? h += v < t ? y : -y : p < xe[1] ? h += d < v ? y : -y : h += s < d ? y : -y : p < xe[0] ? h += v < t ? y : -y : h += s < v ? y : -y);
      }
      return h;
    }
    function tw(r, t, e, n, i, a, o, s) {
      if (s > t && s > n && s > a || s < t && s < n && s < a)
        return 0;
      var l = a1(t, n, a, s, Zt);
      if (l === 0)
        return 0;
      var u = Uv(t, n, a);
      if (u >= 0 && u <= 1) {
        for (var f = 0, h = Bt(t, n, a, u), c = 0; c < l; c++) {
          var v = Zt[c] === 0 || Zt[c] === 1 ? 0.5 : 1, d = Bt(r, e, i, Zt[c]);
          d < o || (Zt[c] < u ? f += h < t ? v : -v : f += a < h ? v : -v);
        }
        return f;
      } else {
        var v = Zt[0] === 0 || Zt[0] === 1 ? 0.5 : 1, d = Bt(r, e, i, Zt[0]);
        return d < o ? 0 : a < t ? v : -v;
      }
    }
    function ew(r, t, e, n, i, a, o, s) {
      if (s -= t, s > e || s < -e)
        return 0;
      var l = Math.sqrt(e * e - s * s);
      Zt[0] = -l, Zt[1] = l;
      var u = Math.abs(n - i);
      if (u < 1e-4)
        return 0;
      if (u >= dn - 1e-4) {
        n = 0, i = dn;
        var f = a ? 1 : -1;
        return o >= Zt[0] + r && o <= Zt[1] + r ? f : 0;
      }
      if (n > i) {
        var h = n;
        n = i, i = h;
      }
      n < 0 && (n += dn, i += dn);
      for (var c = 0, v = 0; v < 2; v++) {
        var d = Zt[v];
        if (d + r > o) {
          var g = Math.atan2(s, d), f = a ? 1 : -1;
          g < 0 && (g = dn + g), (g >= n && g <= i || g + dn >= n && g + dn <= i) && (g > Math.PI / 2 && g < Math.PI * 1.5 && (f = -f), c += f);
        }
      }
      return c;
    }
    function Wc(r, t, e, n, i) {
      for (var a = r.data, o = r.len(), s = 0, l = 0, u = 0, f = 0, h = 0, c, v, d = 0; d < o; ) {
        var g = a[d++], p = d === 1;
        switch (g === kr.M && d > 1 && (e || (s += lr(l, u, f, h, n, i))), p && (l = a[d], u = a[d + 1], f = l, h = u), g) {
          case kr.M:
            f = a[d++], h = a[d++], l = f, u = h;
            break;
          case kr.L:
            if (e) {
              if (Kn(l, u, a[d], a[d + 1], t, n, i))
                return !0;
            } else
              s += lr(l, u, a[d], a[d + 1], n, i) || 0;
            l = a[d++], u = a[d++];
            break;
          case kr.C:
            if (e) {
              if (qS(l, u, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], t, n, i))
                return !0;
            } else
              s += JS(l, u, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], n, i) || 0;
            l = a[d++], u = a[d++];
            break;
          case kr.Q:
            if (e) {
              if (ZS(l, u, a[d++], a[d++], a[d], a[d + 1], t, n, i))
                return !0;
            } else
              s += tw(l, u, a[d++], a[d++], a[d], a[d + 1], n, i) || 0;
            l = a[d++], u = a[d++];
            break;
          case kr.A:
            var y = a[d++], m = a[d++], _ = a[d++], S = a[d++], b = a[d++], w = a[d++];
            d += 1;
            var x = !!(1 - a[d++]);
            c = Math.cos(b) * _ + y, v = Math.sin(b) * S + m, p ? (f = c, h = v) : s += lr(l, u, c, v, n, i);
            var T = (n - y) * S / _ + y;
            if (e) {
              if ($S(y, m, S, b, b + w, x, t, T, i))
                return !0;
            } else
              s += ew(y, m, S, b, b + w, x, T, i);
            l = Math.cos(b + w) * _ + y, u = Math.sin(b + w) * S + m;
            break;
          case kr.R:
            f = l = a[d++], h = u = a[d++];
            var D = a[d++], A = a[d++];
            if (c = f + D, v = h + A, e) {
              if (Kn(f, h, c, h, t, n, i) || Kn(c, h, c, v, t, n, i) || Kn(c, v, f, v, t, n, i) || Kn(f, v, f, h, t, n, i))
                return !0;
            } else
              s += lr(c, h, c, v, n, i), s += lr(f, v, f, h, n, i);
            break;
          case kr.Z:
            if (e) {
              if (Kn(l, u, f, h, t, n, i))
                return !0;
            } else
              s += lr(l, u, f, h, n, i);
            l = f, u = h;
            break;
        }
      }
      return !e && !QS(u, h) && (s += lr(l, u, f, h, n, i) || 0), s !== 0;
    }
    function rw(r, t, e) {
      return Wc(r, 0, !1, t, e);
    }
    function nw(r, t, e, n) {
      return Wc(r, t, !0, e, n);
    }
    var Uc = st({
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
    }, ln), iw = {
      style: st({
        fill: !0,
        stroke: !0,
        strokePercent: !0,
        fillOpacity: !0,
        strokeOpacity: !0,
        lineDashOffset: !0,
        lineWidth: !0,
        miterLimit: !0
      }, To.style)
    }, Mu = Oi.concat(["invisible", "culling", "z", "z2", "zlevel", "parent"]), ft = function(r) {
      B(t, r);
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
          for (var s = 0; s < Mu.length; ++s)
            i[Mu[s]] = this[Mu[s]];
          i.__dirty |= ue;
        } else
          this._decalEl && (this._decalEl = null);
      }, t.prototype.getDecalElement = function() {
        return this._decalEl;
      }, t.prototype._init = function(e) {
        var n = pt(e);
        this.shape = this.getDefaultShape();
        var i = this.getDefaultStyle();
        i && this.useStyle(i);
        for (var a = 0; a < n.length; a++) {
          var o = n[a], s = e[o];
          o === "style" ? this.style ? k(this.style, s) : this.useStyle(s) : o === "shape" ? k(this.shape, s) : r.prototype.attrKV.call(this, o, s);
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
          if (G(e)) {
            var n = Ri(e, 0);
            return n > 0.5 ? $l : n > 0.2 ? k1 : Kl;
          } else if (e)
            return Kl;
        }
        return $l;
      }, t.prototype.getInsideTextStroke = function(e) {
        var n = this.style.fill;
        if (G(n)) {
          var i = this.__zr, a = !!(i && i.isDarkMode()), o = Ri(e, 0) < Zl;
          if (a === o)
            return n;
        }
      }, t.prototype.buildPath = function(e, n, i) {
      }, t.prototype.pathUpdated = function() {
        this.__dirty &= ~Vn;
      }, t.prototype.getUpdatedPathProxy = function(e) {
        return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, e), this.path;
      }, t.prototype.createPathProxy = function() {
        this.path = new Rr(!1);
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
          (a || this.__dirty & Vn) && (o.beginPath(), this.buildPath(o, this.shape, !1), this.pathUpdated()), e = o.getBoundingRect();
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
            if (u > 1e-10 && (this.hasFill() || (l = Math.max(l, this.strokeContainThreshold)), nw(s, l / u, e, n)))
              return !0;
          }
          if (this.hasFill())
            return rw(s, e, n);
        }
        return !1;
      }, t.prototype.dirtyShape = function() {
        this.__dirty |= Vn, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw();
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
        return i || (i = this.shape = {}), typeof e == "string" ? i[e] = n : k(i, e), this.dirtyShape(), this;
      }, t.prototype.shapeChanged = function() {
        return !!(this.__dirty & Vn);
      }, t.prototype.createStyle = function(e) {
        return bi(Uc, e);
      }, t.prototype._innerSaveToNormal = function(e) {
        r.prototype._innerSaveToNormal.call(this, e);
        var n = this._normalState;
        e.shape && !n.shape && (n.shape = k({}, this.shape));
      }, t.prototype._applyStateObj = function(e, n, i, a, o, s) {
        r.prototype._applyStateObj.call(this, e, n, i, a, o, s);
        var l = !(n && a), u;
        if (n && n.shape ? o ? a ? u = n.shape : (u = k({}, i.shape), k(u, n.shape)) : (u = k({}, a ? this.shape : i.shape), k(u, n.shape)) : l && (u = i.shape), u)
          if (o) {
            this.shape = k({}, this.shape);
            for (var f = {}, h = pt(u), c = 0; c < h.length; c++) {
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
        return iw;
      }, t.prototype.isZeroArea = function() {
        return !1;
      }, t.extend = function(e) {
        var n = function(a) {
          B(o, a);
          function o(s) {
            var l = a.call(this, s) || this;
            return e.init && e.init.call(l, s), l;
          }
          return o.prototype.getDefaultStyle = function() {
            return rt(e.style);
          }, o.prototype.getDefaultShape = function() {
            return rt(e.shape);
          }, o;
        }(t);
        for (var i in e)
          typeof e[i] == "function" && (n.prototype[i] = e[i]);
        return n;
      }, t.initDefaultProps = function() {
        var e = t.prototype;
        e.type = "path", e.strokeContainThreshold = 5, e.segmentIgnoreThreshold = 0, e.subPixelOptimize = !1, e.autoBatch = !1, e.__dirty = ue | Ai | Vn;
      }(), t;
    }(Yi), aw = st({
      strokeFirst: !0,
      font: Xr,
      x: 0,
      y: 0,
      textAlign: "left",
      textBaseline: "top",
      miterLimit: 2
    }, Uc), Ao = function(r) {
      B(t, r);
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
        return bi(aw, e);
      }, t.prototype.setBoundingRect = function(e) {
        this._rect = e;
      }, t.prototype.getBoundingRect = function() {
        var e = this.style;
        if (!this._rect) {
          var n = e.text;
          n != null ? n += "" : n = "";
          var i = Jl(n, e.font, e.textAlign, e.textBaseline);
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
    }(Yi);
    Ao.prototype.type = "tspan";
    var ow = st({
      x: 0,
      y: 0
    }, ln), sw = {
      style: st({
        x: !0,
        y: !0,
        width: !0,
        height: !0,
        sx: !0,
        sy: !0,
        sWidth: !0,
        sHeight: !0
      }, To.style)
    };
    function lw(r) {
      return !!(r && typeof r != "string" && r.width && r.height);
    }
    var ur = function(r) {
      B(t, r);
      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }
      return t.prototype.createStyle = function(e) {
        return bi(ow, e);
      }, t.prototype._getSize = function(e) {
        var n = this.style, i = n[e];
        if (i != null)
          return i;
        var a = lw(n.image) ? n.image : this.__image;
        if (!a)
          return 0;
        var o = e === "width" ? "height" : "width", s = n[o];
        return s == null ? a[e] : a[e] / a[o] * s;
      }, t.prototype.getWidth = function() {
        return this._getSize("width");
      }, t.prototype.getHeight = function() {
        return this._getSize("height");
      }, t.prototype.getAnimationStyleProps = function() {
        return sw;
      }, t.prototype.getBoundingRect = function() {
        var e = this.style;
        return this._rect || (this._rect = new nt(e.x || 0, e.y || 0, this.getWidth(), this.getHeight())), this._rect;
      }, t;
    }(Yi);
    ur.prototype.type = "image";
    function uw(r, t) {
      var e = t.x, n = t.y, i = t.width, a = t.height, o = t.r, s, l, u, f;
      i < 0 && (e = e + i, i = -i), a < 0 && (n = n + a, a = -a), typeof o == "number" ? s = l = u = f = o : o instanceof Array ? o.length === 1 ? s = l = u = f = o[0] : o.length === 2 ? (s = u = o[0], l = f = o[1]) : o.length === 3 ? (s = o[0], l = f = o[1], u = o[2]) : (s = o[0], l = o[1], u = o[2], f = o[3]) : s = l = u = f = 0;
      var h;
      s + l > i && (h = s + l, s *= i / h, l *= i / h), u + f > i && (h = u + f, u *= i / h, f *= i / h), l + u > a && (h = l + u, l *= a / h, u *= a / h), s + f > a && (h = s + f, s *= a / h, f *= a / h), r.moveTo(e + s, n), r.lineTo(e + i - l, n), l !== 0 && r.arc(e + i - l, n + l, l, -Math.PI / 2, 0), r.lineTo(e + i, n + a - u), u !== 0 && r.arc(e + i - u, n + a - u, u, 0, Math.PI / 2), r.lineTo(e + f, n + a), f !== 0 && r.arc(e + f, n + a - f, f, Math.PI / 2, Math.PI), r.lineTo(e, n + s), s !== 0 && r.arc(e + s, n + s, s, Math.PI, Math.PI * 1.5);
    }
    var Qn = Math.round;
    function Yc(r, t, e) {
      if (t) {
        var n = t.x1, i = t.x2, a = t.y1, o = t.y2;
        r.x1 = n, r.x2 = i, r.y1 = a, r.y2 = o;
        var s = e && e.lineWidth;
        return s && (Qn(n * 2) === Qn(i * 2) && (r.x1 = r.x2 = pn(n, s, !0)), Qn(a * 2) === Qn(o * 2) && (r.y1 = r.y2 = pn(a, s, !0))), r;
      }
    }
    function Xc(r, t, e) {
      if (t) {
        var n = t.x, i = t.y, a = t.width, o = t.height;
        r.x = n, r.y = i, r.width = a, r.height = o;
        var s = e && e.lineWidth;
        return s && (r.x = pn(n, s, !0), r.y = pn(i, s, !0), r.width = Math.max(pn(n + a, s, !1) - r.x, a === 0 ? 0 : 1), r.height = Math.max(pn(i + o, s, !1) - r.y, o === 0 ? 0 : 1)), r;
      }
    }
    function pn(r, t, e) {
      if (!t)
        return r;
      var n = Qn(r * 2);
      return (n + Qn(t)) % 2 === 0 ? n / 2 : (n + (e ? 1 : -1)) / 2;
    }
    var fw = function() {
      function r() {
        this.x = 0, this.y = 0, this.width = 0, this.height = 0;
      }
      return r;
    }(), hw = {}, Tt = function(r) {
      B(t, r);
      function t(e) {
        return r.call(this, e) || this;
      }
      return t.prototype.getDefaultShape = function() {
        return new fw();
      }, t.prototype.buildPath = function(e, n) {
        var i, a, o, s;
        if (this.subPixelOptimize) {
          var l = Xc(hw, n, this.style);
          i = l.x, a = l.y, o = l.width, s = l.height, l.r = n.r, n = l;
        } else
          i = n.x, a = n.y, o = n.width, s = n.height;
        n.r ? uw(e, n) : e.rect(i, a, o, s);
      }, t.prototype.isZeroArea = function() {
        return !this.shape.width || !this.shape.height;
      }, t;
    }(ft);
    Tt.prototype.type = "rect";
    var qc = {
      fill: "#000"
    }, Zc = 2, vw = {
      style: st({
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
      }, To.style)
    }, Lt = function(r) {
      B(t, r);
      function t(e) {
        var n = r.call(this) || this;
        return n.type = "text", n._children = [], n._defaultStyle = qc, n.attr(e), n;
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
        this._childCursor = 0, yw(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated();
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
          for (var e = new nt(0, 0, 0, 0), n = this._children, i = [], a = null, o = 0; o < n.length; o++) {
            var s = n[o], l = s.getBoundingRect(), u = s.getLocalTransform(i);
            u ? (e.copy(l), e.applyTransform(u), a = a || e.clone(), a.union(e)) : (a = a || l.clone(), a.union(l));
          }
          this._rect = a || e;
        }
        return this._rect;
      }, t.prototype.setDefaultTextStyle = function(e) {
        this._defaultStyle = e || qc;
      }, t.prototype.setTextContent = function(e) {
        throw new Error("Can't attach text on another text");
      }, t.prototype._mergeStyle = function(e, n) {
        if (!n)
          return e;
        var i = n.rich, a = e.rich || i && {};
        return k(e, n), i && a ? (this._mergeRich(a, i), e.rich = a) : a && (e.rich = a), e;
      }, t.prototype._mergeRich = function(e, n) {
        for (var i = pt(n), a = 0; a < i.length; a++) {
          var o = i[a];
          e[o] = e[o] || {}, k(e[o], n[o]);
        }
      }, t.prototype.getAnimationStyleProps = function() {
        return vw;
      }, t.prototype._getOrCreateChild = function(e) {
        var n = this._children[this._childCursor];
        return (!n || !(n instanceof e)) && (n = new e()), this._children[this._childCursor++] = n, n.__zr = this.__zr, n.parent = this, n;
      }, t.prototype._updatePlainTexts = function() {
        var e = this.style, n = e.font || Xr, i = e.padding, a = ed(e), o = kS(a, e), s = Au(e), l = !!e.backgroundColor, u = o.outerHeight, f = o.outerWidth, h = o.contentWidth, c = o.lines, v = o.lineHeight, d = this._defaultStyle, g = e.x || 0, p = e.y || 0, y = e.align || d.align || "left", m = e.verticalAlign || d.verticalAlign || "top", _ = g, S = qn(p, o.contentHeight, m);
        if (s || i) {
          var b = Bi(g, f, y), w = qn(p, u, m);
          s && this._renderBackground(e, e, b, w, f, u);
        }
        S += v / 2, i && (_ = td(g, y, i), m === "top" ? S += i[0] : m === "bottom" && (S -= i[2]));
        for (var x = 0, T = !1, D = Jc("fill" in e ? e.fill : (T = !0, d.fill)), A = jc("stroke" in e ? e.stroke : !l && (!d.autoStroke || T) ? (x = Zc, d.stroke) : null), C = e.textShadowBlur > 0, L = e.width != null && (e.overflow === "truncate" || e.overflow === "break" || e.overflow === "breakAll"), P = o.calculatedLineHeight, I = 0; I < c.length; I++) {
          var R = this._getOrCreateChild(Ao), E = R.createStyle();
          R.useStyle(E), E.text = c[I], E.x = _, E.y = S, y && (E.textAlign = y), E.textBaseline = "middle", E.opacity = e.opacity, E.strokeFirst = !0, C && (E.shadowBlur = e.textShadowBlur || 0, E.shadowColor = e.textShadowColor || "transparent", E.shadowOffsetX = e.textShadowOffsetX || 0, E.shadowOffsetY = e.textShadowOffsetY || 0), E.stroke = A, E.fill = D, A && (E.lineWidth = e.lineWidth || x, E.lineDash = e.lineDash, E.lineDashOffset = e.lineDashOffset || 0), E.font = n, Kc(E, e), S += v, L && R.setBoundingRect(new nt(Bi(E.x, e.width, E.textAlign), qn(E.y, P, E.textBaseline), h, P));
        }
      }, t.prototype._updateRichTexts = function() {
        var e = this.style, n = ed(e), i = NS(n, e), a = i.width, o = i.outerWidth, s = i.outerHeight, l = e.padding, u = e.x || 0, f = e.y || 0, h = this._defaultStyle, c = e.align || h.align, v = e.verticalAlign || h.verticalAlign, d = Bi(u, o, c), g = qn(f, s, v), p = d, y = g;
        l && (p += l[3], y += l[0]);
        var m = p + a;
        Au(e) && this._renderBackground(e, e, d, g, o, s);
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
        var c = !e.isLineHolder && Au(u);
        c && this._renderBackground(u, n, s === "right" ? o - e.width : s === "center" ? o - e.width / 2 : o, h - e.height / 2, e.width, e.height);
        var v = !!u.backgroundColor, d = e.textPadding;
        d && (o = td(o, s, d), h -= e.height / 2 - d[0] - e.innerHeight / 2);
        var g = this._getOrCreateChild(Ao), p = g.createStyle();
        g.useStyle(p);
        var y = this._defaultStyle, m = !1, _ = 0, S = Jc("fill" in u ? u.fill : "fill" in n ? n.fill : (m = !0, y.fill)), b = jc("stroke" in u ? u.stroke : "stroke" in n ? n.stroke : !v && !l && (!y.autoStroke || m) ? (_ = Zc, y.stroke) : null), w = u.textShadowBlur > 0 || n.textShadowBlur > 0;
        p.text = e.text, p.x = o, p.y = h, w && (p.shadowBlur = u.textShadowBlur || n.textShadowBlur || 0, p.shadowColor = u.textShadowColor || n.textShadowColor || "transparent", p.shadowOffsetX = u.textShadowOffsetX || n.textShadowOffsetX || 0, p.shadowOffsetY = u.textShadowOffsetY || n.textShadowOffsetY || 0), p.textAlign = s, p.textBaseline = "middle", p.font = e.font || Xr, p.opacity = wr(u.opacity, n.opacity, 1), Kc(p, u), b && (p.lineWidth = wr(u.lineWidth, n.lineWidth, _), p.lineDash = J(u.lineDash, n.lineDash), p.lineDashOffset = n.lineDashOffset || 0, p.stroke = b), S && (p.fill = S);
        var x = e.contentWidth, T = e.contentHeight;
        g.setBoundingRect(new nt(Bi(p.x, x, p.textAlign), qn(p.y, T, p.textBaseline), x, T));
      }, t.prototype._renderBackground = function(e, n, i, a, o, s) {
        var l = e.backgroundColor, u = e.borderWidth, f = e.borderColor, h = l && l.image, c = l && !h, v = e.borderRadius, d = this, g, p;
        if (c || e.lineHeight || u && f) {
          g = this._getOrCreateChild(Tt), g.useStyle(g.createStyle()), g.style.fill = null;
          var y = g.shape;
          y.x = i, y.y = a, y.width = o, y.height = s, y.r = v, g.dirtyShape();
        }
        if (c) {
          var m = g.style;
          m.fill = l || null, m.fillOpacity = J(e.fillOpacity, 1);
        } else if (h) {
          p = this._getOrCreateChild(ur), p.onload = function() {
            d.dirtyStyle();
          };
          var _ = p.style;
          _.image = l.image, _.x = i, _.y = a, _.width = o, _.height = s;
        }
        if (u && f) {
          var m = g.style;
          m.lineWidth = u, m.stroke = f, m.strokeOpacity = J(e.strokeOpacity, 1), m.lineDash = e.borderDash, m.lineDashOffset = e.borderDashOffset || 0, g.strokeContainThreshold = 0, g.hasFill() && g.hasStroke() && (m.strokeFirst = !0, m.lineWidth *= 2);
        }
        var S = (g || p).style;
        S.shadowBlur = e.shadowBlur || 0, S.shadowColor = e.shadowColor || "transparent", S.shadowOffsetX = e.shadowOffsetX || 0, S.shadowOffsetY = e.shadowOffsetY || 0, S.opacity = wr(e.opacity, n.opacity, 1);
      }, t.makeFont = function(e) {
        var n = "";
        return gw(e) && (n = [e.fontStyle, e.fontWeight, pw(e.fontSize), e.fontFamily || "sans-serif"].join(" ")), n && Re(n) || e.textFont || e.font;
      }, t;
    }(Yi), cw = {
      left: !0,
      right: 1,
      center: 1
    }, dw = {
      top: 1,
      bottom: 1,
      middle: 1
    }, $c = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
    function pw(r) {
      return typeof r == "string" && (r.indexOf("px") !== -1 || r.indexOf("rem") !== -1 || r.indexOf("em") !== -1) ? r : isNaN(+r) ? sl + "px" : r + "px";
    }
    function Kc(r, t) {
      for (var e = 0; e < $c.length; e++) {
        var n = $c[e], i = t[n];
        i != null && (r[n] = i);
      }
    }
    function gw(r) {
      return r.fontSize != null || r.fontFamily || r.fontWeight;
    }
    function yw(r) {
      return Qc(r), M(r.rich, Qc), r;
    }
    function Qc(r) {
      if (r) {
        r.font = Lt.makeFont(r);
        var t = r.align;
        t === "middle" && (t = "center"), r.align = t == null || cw[t] ? t : "left";
        var e = r.verticalAlign;
        e === "center" && (e = "middle"), r.verticalAlign = e == null || dw[e] ? e : "top";
        var n = r.padding;
        n && (r.padding = cl(r.padding));
      }
    }
    function jc(r, t) {
      return r == null || t <= 0 || r === "transparent" || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
    }
    function Jc(r) {
      return r == null || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
    }
    function td(r, t, e) {
      return t === "right" ? r - e[1] : t === "center" ? r + e[3] / 2 - e[1] / 2 : r + e[3];
    }
    function ed(r) {
      var t = r.text;
      return t != null && (t += ""), t;
    }
    function Au(r) {
      return !!(r.backgroundColor || r.lineHeight || r.borderWidth && r.borderColor);
    }
    var ot = St(), mw = function(r, t, e, n) {
      if (n) {
        var i = ot(n);
        i.dataIndex = e, i.dataType = t, i.seriesIndex = r, n.type === "group" && n.traverse(function(a) {
          var o = ot(a);
          o.seriesIndex = r, o.dataIndex = e, o.dataType = t;
        });
      }
    }, rd = 1, nd = {}, id = St(), Lu = St(), Pu = 0, Lo = 1, Po = 2, Te = ["emphasis", "blur", "select"], Io = ["normal", "emphasis", "blur", "select"], _w = 10, Sw = 9, gn = "highlight", Ro = "downplay", Zi = "select", Eo = "unselect", $i = "toggleSelect";
    function jn(r) {
      return r != null && r !== "none";
    }
    var ad = new Pi(100);
    function od(r) {
      if (G(r)) {
        var t = ad.get(r);
        return t || (t = Ol(r, -0.1), ad.put(r, t)), t;
      } else if (Si(r)) {
        var e = k({}, r);
        return e.colorStops = H(r.colorStops, function(n) {
          return {
            offset: n.offset,
            color: Ol(n.color, -0.1)
          };
        }), e;
      }
      return r;
    }
    function ko(r, t, e) {
      r.onHoverStateChange && (r.hoverState || 0) !== e && r.onHoverStateChange(t), r.hoverState = e;
    }
    function sd(r) {
      ko(r, "emphasis", Po);
    }
    function ld(r) {
      r.hoverState === Po && ko(r, "normal", Pu);
    }
    function Iu(r) {
      ko(r, "blur", Lo);
    }
    function ud(r) {
      r.hoverState === Lo && ko(r, "normal", Pu);
    }
    function ww(r) {
      r.selected = !0;
    }
    function bw(r) {
      r.selected = !1;
    }
    function fd(r, t, e) {
      t(r, e);
    }
    function fr(r, t, e) {
      fd(r, t, e), r.isGroup && r.traverse(function(n) {
        fd(n, t, e);
      });
    }
    function hd(r, t) {
      switch (t) {
        case "emphasis":
          r.hoverState = Po;
          break;
        case "normal":
          r.hoverState = Pu;
          break;
        case "blur":
          r.hoverState = Lo;
          break;
        case "select":
          r.selected = !0;
      }
    }
    function xw(r, t, e, n) {
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
    function Tw(r, t, e, n) {
      var i = e && lt(e, "select") >= 0, a = !1;
      if (r instanceof ft) {
        var o = id(r), s = i && o.selectFill || o.normalFill, l = i && o.selectStroke || o.normalStroke;
        if (jn(s) || jn(l)) {
          n = n || {};
          var u = n.style || {};
          u.fill === "inherit" ? (a = !0, n = k({}, n), u = k({}, u), u.fill = s) : !jn(u.fill) && jn(s) ? (a = !0, n = k({}, n), u = k({}, u), u.fill = od(s)) : !jn(u.stroke) && jn(l) && (a || (n = k({}, n), u = k({}, u)), u.stroke = od(l)), n.style = u;
        }
      }
      if (n && n.z2 == null) {
        a || (n = k({}, n));
        var f = r.z2EmphasisLift;
        n.z2 = r.z2 + (f ?? _w);
      }
      return n;
    }
    function Cw(r, t, e) {
      if (e && e.z2 == null) {
        e = k({}, e);
        var n = r.z2SelectLift;
        e.z2 = r.z2 + (n ?? Sw);
      }
      return e;
    }
    function Dw(r, t, e) {
      var n = lt(r.currentStates, t) >= 0, i = r.style.opacity, a = n ? null : xw(r, ["opacity"], t, {
        opacity: 1
      });
      e = e || {};
      var o = e.style || {};
      return o.opacity == null && (e = k({}, e), o = k({
        // Already being applied 'emphasis'. DON'T mul opacity multiple times.
        opacity: n ? i : a.opacity * 0.1
      }, o), e.style = o), e;
    }
    function Ru(r, t) {
      var e = this.states[r];
      if (this.style) {
        if (r === "emphasis")
          return Tw(this, r, t, e);
        if (r === "blur")
          return Dw(this, r, e);
        if (r === "select")
          return Cw(this, r, e);
      }
      return e;
    }
    function Mw(r) {
      r.stateProxy = Ru;
      var t = r.getTextContent(), e = r.getTextGuideLine();
      t && (t.stateProxy = Ru), e && (e.stateProxy = Ru);
    }
    function vd(r, t) {
      !yd(r, t) && !r.__highByOuter && fr(r, sd);
    }
    function cd(r, t) {
      !yd(r, t) && !r.__highByOuter && fr(r, ld);
    }
    function Oo(r, t) {
      r.__highByOuter |= 1 << (t || 0), fr(r, sd);
    }
    function Bo(r, t) {
      !(r.__highByOuter &= ~(1 << (t || 0))) && fr(r, ld);
    }
    function Aw(r) {
      fr(r, Iu);
    }
    function dd(r) {
      fr(r, ud);
    }
    function pd(r) {
      fr(r, ww);
    }
    function gd(r) {
      fr(r, bw);
    }
    function yd(r, t) {
      return r.__highDownSilentOnTouch && t.zrByTouch;
    }
    function md(r) {
      var t = r.getModel(), e = [], n = [];
      t.eachComponent(function(i, a) {
        var o = Lu(a), s = i === "series", l = s ? r.getViewOfSeriesModel(a) : r.getViewOfComponentModel(a);
        !s && n.push(l), o.isBlured && (l.group.traverse(function(u) {
          ud(u);
        }), s && e.push(a)), o.isBlured = !1;
      }), M(n, function(i) {
        i && i.toggleBlurSeries && i.toggleBlurSeries(e, !1, t);
      });
    }
    function Eu(r, t, e, n) {
      var i = n.getModel();
      e = e || "coordinateSystem";
      function a(u, f) {
        for (var h = 0; h < f.length; h++) {
          var c = u.getItemGraphicEl(f[h]);
          c && dd(c);
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
              Iu(p);
            }), Wt(t))
              a(u.getData(), t);
            else if (V(t))
              for (var d = pt(t), g = 0; g < d.length; g++)
                a(u.getData(d[g]), t[d[g]]);
            l.push(u), Lu(u).isBlured = !0;
          }
        }), i.eachComponent(function(u, f) {
          if (u !== "series") {
            var h = n.getViewOfComponentModel(f);
            h && h.toggleBlurSeries && h.toggleBlurSeries(l, !0, i);
          }
        });
      }
    }
    function ku(r, t, e) {
      if (!(r == null || t == null)) {
        var n = e.getModel().getComponent(r, t);
        if (n) {
          Lu(n).isBlured = !0;
          var i = e.getViewOfComponentModel(n);
          !i || !i.focusBlurEnabled || i.group.traverse(function(a) {
            Iu(a);
          });
        }
      }
    }
    function Lw(r, t, e) {
      var n = r.seriesIndex, i = r.getData(t.dataType);
      if (!i) {
        Ft("Unknown dataType " + t.dataType);
        return;
      }
      var a = on(i, t);
      a = (F(a) ? a[0] : a) || 0;
      var o = i.getItemGraphicEl(a);
      if (!o)
        for (var s = i.count(), l = 0; !o && l < s; )
          o = i.getItemGraphicEl(l++);
      if (o) {
        var u = ot(o);
        Eu(n, u.focus, u.blurScope, e);
      } else {
        var f = r.get(["emphasis", "focus"]), h = r.get(["emphasis", "blurScope"]);
        f != null && Eu(n, f, h, e);
      }
    }
    function Ou(r, t, e, n) {
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
        if (Jn(s[u]) || Ft("param should be highDownDispatcher"), ot(s[u]).focus === "self") {
          l = !0;
          break;
        }
      return {
        focusSelf: l,
        dispatchers: s
      };
    }
    function Pw(r, t, e) {
      Jn(r) || Ft("param should be highDownDispatcher");
      var n = ot(r), i = Ou(n.componentMainType, n.componentIndex, n.componentHighDownName, e), a = i.dispatchers, o = i.focusSelf;
      a ? (o && ku(n.componentMainType, n.componentIndex, e), M(a, function(s) {
        return vd(s, t);
      })) : (Eu(n.seriesIndex, n.focus, n.blurScope, e), n.focus === "self" && ku(n.componentMainType, n.componentIndex, e), vd(r, t));
    }
    function Iw(r, t, e) {
      Jn(r) || Ft("param should be highDownDispatcher"), md(e);
      var n = ot(r), i = Ou(n.componentMainType, n.componentIndex, n.componentHighDownName, e).dispatchers;
      i ? M(i, function(a) {
        return cd(a, t);
      }) : cd(r, t);
    }
    function Rw(r, t, e) {
      if (Bu(t)) {
        var n = t.dataType, i = r.getData(n), a = on(i, t);
        F(a) || (a = [a]), r[t.type === $i ? "toggleSelect" : t.type === Zi ? "select" : "unselect"](a, n);
      }
    }
    function _d(r) {
      var t = r.getAllData();
      M(t, function(e) {
        var n = e.data, i = e.type;
        n.eachItemGraphicEl(function(a, o) {
          r.isSelected(o, i) ? pd(a) : gd(a);
        });
      });
    }
    function Ew(r) {
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
    function No(r, t, e) {
      wd(r, !0), fr(r, Mw), Ow(r, t, e);
    }
    function kw(r) {
      wd(r, !1);
    }
    function Ki(r, t, e, n) {
      n ? kw(r) : No(r, t, e);
    }
    function Ow(r, t, e) {
      var n = ot(r);
      t != null ? (n.focus = t, n.blurScope = e) : n.focus && (n.focus = null);
    }
    var Sd = ["emphasis", "blur", "select"], Bw = {
      itemStyle: "getItemStyle",
      lineStyle: "getLineStyle",
      areaStyle: "getAreaStyle"
    };
    function Fo(r, t, e, n) {
      e = e || "itemStyle";
      for (var i = 0; i < Sd.length; i++) {
        var a = Sd[i], o = t.getModel([a, e]), s = r.ensureState(a);
        s.style = n ? n(o) : o[Bw[e]]();
      }
    }
    function wd(r, t) {
      var e = t === !1, n = r;
      r.highDownSilentOnTouch && (n.__highDownSilentOnTouch = r.highDownSilentOnTouch), (!e || n.__highDownDispatcher) && (n.__highByOuter = n.__highByOuter || 0, n.__highDownDispatcher = !e);
    }
    function Jn(r) {
      return !!(r && r.__highDownDispatcher);
    }
    function Nw(r) {
      var t = nd[r];
      return t == null && rd <= 32 && (t = nd[r] = rd++), t;
    }
    function Bu(r) {
      var t = r.type;
      return t === Zi || t === Eo || t === $i;
    }
    function bd(r) {
      var t = r.type;
      return t === gn || t === Ro;
    }
    function Fw(r) {
      var t = id(r);
      t.normalFill = r.style.fill, t.normalStroke = r.style.stroke;
      var e = r.states.select || {};
      t.selectFill = e.style && e.style.fill || null, t.selectStroke = e.style && e.style.stroke || null;
    }
    var ti = Rr.CMD, zw = [[], [], []], xd = Math.sqrt, Gw = Math.atan2;
    function Hw(r, t) {
      if (t) {
        var e = r.data, n = r.len(), i, a, o, s, l, u, f = ti.M, h = ti.C, c = ti.L, v = ti.R, d = ti.A, g = ti.Q;
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
              var p = t[4], y = t[5], m = xd(t[0] * t[0] + t[1] * t[1]), _ = xd(t[2] * t[2] + t[3] * t[3]), S = Gw(-t[1] / _, t[0] / m);
              e[o] *= m, e[o++] += p, e[o] *= _, e[o++] += y, e[o++] *= m, e[o++] *= _, e[o++] += S, e[o++] += S, o += 2, s = o;
              break;
            case v:
              u[0] = e[o++], u[1] = e[o++], Xt(u, u, t), e[s++] = u[0], e[s++] = u[1], u[0] += e[o++], u[1] += e[o++], Xt(u, u, t), e[s++] = u[0], e[s++] = u[1];
          }
          for (l = 0; l < a; l++) {
            var b = zw[l];
            b[0] = e[o++], b[1] = e[o++], Xt(b, b, t), e[s++] = b[0], e[s++] = b[1];
          }
        }
        r.increaseVersion();
      }
    }
    var Nu = Math.sqrt, zo = Math.sin, Go = Math.cos, Qi = Math.PI;
    function Td(r) {
      return Math.sqrt(r[0] * r[0] + r[1] * r[1]);
    }
    function Fu(r, t) {
      return (r[0] * t[0] + r[1] * t[1]) / (Td(r) * Td(t));
    }
    function Cd(r, t) {
      return (r[0] * t[1] < r[1] * t[0] ? -1 : 1) * Math.acos(Fu(r, t));
    }
    function Dd(r, t, e, n, i, a, o, s, l, u, f) {
      var h = l * (Qi / 180), c = Go(h) * (r - e) / 2 + zo(h) * (t - n) / 2, v = -1 * zo(h) * (r - e) / 2 + Go(h) * (t - n) / 2, d = c * c / (o * o) + v * v / (s * s);
      d > 1 && (o *= Nu(d), s *= Nu(d));
      var g = (i === a ? -1 : 1) * Nu((o * o * (s * s) - o * o * (v * v) - s * s * (c * c)) / (o * o * (v * v) + s * s * (c * c))) || 0, p = g * o * v / s, y = g * -s * c / o, m = (r + e) / 2 + Go(h) * p - zo(h) * y, _ = (t + n) / 2 + zo(h) * p + Go(h) * y, S = Cd([1, 0], [(c - p) / o, (v - y) / s]), b = [(c - p) / o, (v - y) / s], w = [(-1 * c - p) / o, (-1 * v - y) / s], x = Cd(b, w);
      if (Fu(b, w) <= -1 && (x = Qi), Fu(b, w) >= 1 && (x = 0), x < 0) {
        var T = Math.round(x / Qi * 1e6) / 1e6;
        x = Qi * 2 + T % 2 * Qi;
      }
      f.addData(u, m, _, o, s, S, x, h, a);
    }
    var Vw = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/ig, Ww = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
    function Uw(r) {
      var t = new Rr();
      if (!r)
        return t;
      var e = 0, n = 0, i = e, a = n, o, s = Rr.CMD, l = r.match(Vw);
      if (!l)
        return t;
      for (var u = 0; u < l.length; u++) {
        for (var f = l[u], h = f.charAt(0), c = void 0, v = f.match(Ww) || [], d = v.length, g = 0; g < d; g++)
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
              _ = v[p++], S = v[p++], b = v[p++], w = v[p++], x = v[p++], T = e, D = n, e = v[p++], n = v[p++], c = s.A, Dd(T, D, e, n, w, x, _, S, b, c, t);
              break;
            case "a":
              _ = v[p++], S = v[p++], b = v[p++], w = v[p++], x = v[p++], T = e, D = n, e += v[p++], n += v[p++], c = s.A, Dd(T, D, e, n, w, x, _, S, b, c, t);
              break;
          }
        }
        (h === "z" || h === "Z") && (c = s.Z, t.addData(c), e = i, n = a), o = c;
      }
      return t.toStatic(), t;
    }
    var Md = function(r) {
      B(t, r);
      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }
      return t.prototype.applyTransform = function(e) {
      }, t;
    }(ft);
    function Ad(r) {
      return r.setData != null;
    }
    function Ld(r, t) {
      var e = Uw(r), n = k({}, t);
      return n.buildPath = function(i) {
        if (Ad(i)) {
          i.setData(e.data);
          var a = i.getContext();
          a && i.rebuildPath(a, 1);
        } else {
          var a = i;
          e.rebuildPath(a, 1);
        }
      }, n.applyTransform = function(i) {
        Hw(e, i), this.dirtyShape();
      }, n;
    }
    function Yw(r, t) {
      return new Md(Ld(r, t));
    }
    function Xw(r, t) {
      var e = Ld(r, t), n = function(i) {
        B(a, i);
        function a(o) {
          var s = i.call(this, o) || this;
          return s.applyTransform = e.applyTransform, s.buildPath = e.buildPath, s;
        }
        return a;
      }(Md);
      return n;
    }
    function qw(r, t) {
      for (var e = [], n = r.length, i = 0; i < n; i++) {
        var a = r[i];
        e.push(a.getUpdatedPathProxy(!0));
      }
      var o = new ft(t);
      return o.createPathProxy(), o.buildPath = function(s) {
        if (Ad(s)) {
          s.appendPath(e);
          var l = s.getContext();
          l && s.rebuildPath(l, 1);
        }
      }, o;
    }
    var Zw = function() {
      function r() {
        this.cx = 0, this.cy = 0, this.r = 0;
      }
      return r;
    }(), ji = function(r) {
      B(t, r);
      function t(e) {
        return r.call(this, e) || this;
      }
      return t.prototype.getDefaultShape = function() {
        return new Zw();
      }, t.prototype.buildPath = function(e, n) {
        e.moveTo(n.cx + n.r, n.cy), e.arc(n.cx, n.cy, n.r, 0, Math.PI * 2);
      }, t;
    }(ft);
    ji.prototype.type = "circle";
    var $w = function() {
      function r() {
        this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0;
      }
      return r;
    }(), Ho = function(r) {
      B(t, r);
      function t(e) {
        return r.call(this, e) || this;
      }
      return t.prototype.getDefaultShape = function() {
        return new $w();
      }, t.prototype.buildPath = function(e, n) {
        var i = 0.5522848, a = n.cx, o = n.cy, s = n.rx, l = n.ry, u = s * i, f = l * i;
        e.moveTo(a - s, o), e.bezierCurveTo(a - s, o - f, a - u, o - l, a, o - l), e.bezierCurveTo(a + u, o - l, a + s, o - f, a + s, o), e.bezierCurveTo(a + s, o + f, a + u, o + l, a, o + l), e.bezierCurveTo(a - u, o + l, a - s, o + f, a - s, o), e.closePath();
      }, t;
    }(ft);
    Ho.prototype.type = "ellipse";
    var Pd = Math.PI, zu = Pd * 2, yn = Math.sin, ei = Math.cos, Kw = Math.acos, zt = Math.atan2, Id = Math.abs, Ji = Math.sqrt, ta = Math.max, je = Math.min, Ne = 1e-4;
    function Qw(r, t, e, n, i, a, o, s) {
      var l = e - r, u = n - t, f = o - i, h = s - a, c = h * l - f * u;
      if (!(c * c < Ne))
        return c = (f * (t - a) - h * (r - i)) / c, [r + c * l, t + c * u];
    }
    function Vo(r, t, e, n, i, a, o) {
      var s = r - e, l = t - n, u = (o ? a : -a) / Ji(s * s + l * l), f = u * l, h = -u * s, c = r + f, v = t + h, d = e + f, g = n + h, p = (c + d) / 2, y = (v + g) / 2, m = d - c, _ = g - v, S = m * m + _ * _, b = i - a, w = c * g - d * v, x = (_ < 0 ? -1 : 1) * Ji(ta(0, b * b * S - w * w)), T = (w * _ - m * x) / S, D = (-w * m - _ * x) / S, A = (w * _ + m * x) / S, C = (-w * m + _ * x) / S, L = T - p, P = D - y, I = A - p, R = C - y;
      return L * L + P * P > I * I + R * R && (T = A, D = C), {
        cx: T,
        cy: D,
        x0: -f,
        y0: -h,
        x1: T * (i / b - 1),
        y1: D * (i / b - 1)
      };
    }
    function jw(r) {
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
    function Jw(r, t) {
      var e, n = ta(t.r, 0), i = ta(t.r0 || 0, 0), a = n > 0, o = i > 0;
      if (!(!a && !o)) {
        if (a || (n = i, i = 0), i > n) {
          var s = n;
          n = i, i = s;
        }
        var l = t.startAngle, u = t.endAngle;
        if (!(isNaN(l) || isNaN(u))) {
          var f = t.cx, h = t.cy, c = !!t.clockwise, v = Id(u - l), d = v > zu && v % zu;
          if (d > Ne && (v = d), !(n > Ne))
            r.moveTo(f, h);
          else if (v > zu - Ne)
            r.moveTo(f + n * ei(l), h + n * yn(l)), r.arc(f, h, n, l, u, !c), i > Ne && (r.moveTo(f + i * ei(u), h + i * yn(u)), r.arc(f, h, i, u, l, c));
          else {
            var g = void 0, p = void 0, y = void 0, m = void 0, _ = void 0, S = void 0, b = void 0, w = void 0, x = void 0, T = void 0, D = void 0, A = void 0, C = void 0, L = void 0, P = void 0, I = void 0, R = n * ei(l), E = n * yn(l), U = i * ei(u), O = i * yn(u), N = v > Ne;
            if (N) {
              var W = t.cornerRadius;
              W && (e = jw(W), g = e[0], p = e[1], y = e[2], m = e[3]);
              var K = Id(n - i) / 2;
              if (_ = je(K, y), S = je(K, m), b = je(K, g), w = je(K, p), D = x = ta(_, S), A = T = ta(b, w), (x > Ne || T > Ne) && (C = n * ei(u), L = n * yn(u), P = i * ei(l), I = i * yn(l), v < Pd)) {
                var $ = Qw(R, E, P, I, C, L, U, O);
                if ($) {
                  var et = R - $[0], ht = E - $[1], Rt = C - $[0], yt = L - $[1], se = 1 / yn(Kw((et * Rt + ht * yt) / (Ji(et * et + ht * ht) * Ji(Rt * Rt + yt * yt))) / 2), de = Ji($[0] * $[0] + $[1] * $[1]);
                  D = je(x, (n - de) / (se + 1)), A = je(T, (i - de) / (se - 1));
                }
              }
            }
            if (!N)
              r.moveTo(f + R, h + E);
            else if (D > Ne) {
              var Ot = je(y, D), Dt = je(m, D), Z = Vo(P, I, R, E, n, Ot, c), tt = Vo(C, L, U, O, n, Dt, c);
              r.moveTo(f + Z.cx + Z.x0, h + Z.cy + Z.y0), D < x && Ot === Dt ? r.arc(f + Z.cx, h + Z.cy, D, zt(Z.y0, Z.x0), zt(tt.y0, tt.x0), !c) : (Ot > 0 && r.arc(f + Z.cx, h + Z.cy, Ot, zt(Z.y0, Z.x0), zt(Z.y1, Z.x1), !c), r.arc(f, h, n, zt(Z.cy + Z.y1, Z.cx + Z.x1), zt(tt.cy + tt.y1, tt.cx + tt.x1), !c), Dt > 0 && r.arc(f + tt.cx, h + tt.cy, Dt, zt(tt.y1, tt.x1), zt(tt.y0, tt.x0), !c));
            } else
              r.moveTo(f + R, h + E), r.arc(f, h, n, l, u, !c);
            if (!(i > Ne) || !N)
              r.lineTo(f + U, h + O);
            else if (A > Ne) {
              var Ot = je(g, A), Dt = je(p, A), Z = Vo(U, O, C, L, i, -Dt, c), tt = Vo(R, E, P, I, i, -Ot, c);
              r.lineTo(f + Z.cx + Z.x0, h + Z.cy + Z.y0), A < T && Ot === Dt ? r.arc(f + Z.cx, h + Z.cy, A, zt(Z.y0, Z.x0), zt(tt.y0, tt.x0), !c) : (Dt > 0 && r.arc(f + Z.cx, h + Z.cy, Dt, zt(Z.y0, Z.x0), zt(Z.y1, Z.x1), !c), r.arc(f, h, i, zt(Z.cy + Z.y1, Z.cx + Z.x1), zt(tt.cy + tt.y1, tt.cx + tt.x1), c), Ot > 0 && r.arc(f + tt.cx, h + tt.cy, Ot, zt(tt.y1, tt.x1), zt(tt.y0, tt.x0), !c));
            } else
              r.lineTo(f + U, h + O), r.arc(f, h, i, u, l, c);
          }
          r.closePath();
        }
      }
    }
    var tb = function() {
      function r() {
        this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0, this.cornerRadius = 0;
      }
      return r;
    }(), hr = function(r) {
      B(t, r);
      function t(e) {
        return r.call(this, e) || this;
      }
      return t.prototype.getDefaultShape = function() {
        return new tb();
      }, t.prototype.buildPath = function(e, n) {
        Jw(e, n);
      }, t.prototype.isZeroArea = function() {
        return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0;
      }, t;
    }(ft);
    hr.prototype.type = "sector";
    var eb = function() {
      function r() {
        this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0;
      }
      return r;
    }(), Wo = function(r) {
      B(t, r);
      function t(e) {
        return r.call(this, e) || this;
      }
      return t.prototype.getDefaultShape = function() {
        return new eb();
      }, t.prototype.buildPath = function(e, n) {
        var i = n.cx, a = n.cy, o = Math.PI * 2;
        e.moveTo(i + n.r, a), e.arc(i, a, n.r, 0, o, !1), e.moveTo(i + n.r0, a), e.arc(i, a, n.r0, 0, o, !0);
      }, t;
    }(ft);
    Wo.prototype.type = "ring";
    function rb(r, t, e, n) {
      var i = [], a = [], o = [], s = [], l, u, f, h;
      if (n) {
        f = [1 / 0, 1 / 0], h = [-1 / 0, -1 / 0];
        for (var c = 0, v = r.length; c < v; c++)
          br(f, f, r[c]), xr(h, h, r[c]);
        br(f, f, n[0]), xr(h, h, n[1]);
      }
      for (var c = 0, v = r.length; c < v; c++) {
        var d = r[c];
        if (e)
          l = r[c ? c - 1 : v - 1], u = r[(c + 1) % v];
        else if (c === 0 || c === v - 1) {
          i.push(gv(r[c]));
          continue;
        } else
          l = r[c - 1], u = r[c + 1];
        yv(a, u, l), Ua(a, a, t);
        var g = Ya(d, l), p = Ya(d, u), y = g + p;
        y !== 0 && (g /= y, p /= y), Ua(o, a, -g), Ua(s, a, p);
        var m = pl([], d, o), _ = pl([], d, s);
        n && (xr(m, m, f), br(m, m, h), xr(_, _, f), br(_, _, h)), i.push(m), i.push(_);
      }
      return e && i.push(i.shift()), i;
    }
    function Rd(r, t, e) {
      var n = t.smooth, i = t.points;
      if (i && i.length >= 2) {
        if (n) {
          var a = rb(i, n, e, t.smoothConstraint);
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
    var nb = function() {
      function r() {
        this.points = null, this.smooth = 0, this.smoothConstraint = null;
      }
      return r;
    }(), Uo = function(r) {
      B(t, r);
      function t(e) {
        return r.call(this, e) || this;
      }
      return t.prototype.getDefaultShape = function() {
        return new nb();
      }, t.prototype.buildPath = function(e, n) {
        Rd(e, n, !0);
      }, t;
    }(ft);
    Uo.prototype.type = "polygon";
    var ib = function() {
      function r() {
        this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null;
      }
      return r;
    }(), ri = function(r) {
      B(t, r);
      function t(e) {
        return r.call(this, e) || this;
      }
      return t.prototype.getDefaultStyle = function() {
        return {
          stroke: "#000",
          fill: null
        };
      }, t.prototype.getDefaultShape = function() {
        return new ib();
      }, t.prototype.buildPath = function(e, n) {
        Rd(e, n, !1);
      }, t;
    }(ft);
    ri.prototype.type = "polyline";
    var ab = {}, ob = function() {
      function r() {
        this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
      }
      return r;
    }(), vr = function(r) {
      B(t, r);
      function t(e) {
        return r.call(this, e) || this;
      }
      return t.prototype.getDefaultStyle = function() {
        return {
          stroke: "#000",
          fill: null
        };
      }, t.prototype.getDefaultShape = function() {
        return new ob();
      }, t.prototype.buildPath = function(e, n) {
        var i, a, o, s;
        if (this.subPixelOptimize) {
          var l = Yc(ab, n, this.style);
          i = l.x1, a = l.y1, o = l.x2, s = l.y2;
        } else
          i = n.x1, a = n.y1, o = n.x2, s = n.y2;
        var u = n.percent;
        u !== 0 && (e.moveTo(i, a), u < 1 && (o = i * (1 - u) + o * u, s = a * (1 - u) + s * u), e.lineTo(o, s));
      }, t.prototype.pointAt = function(e) {
        var n = this.shape;
        return [n.x1 * (1 - e) + n.x2 * e, n.y1 * (1 - e) + n.y2 * e];
      }, t;
    }(ft);
    vr.prototype.type = "line";
    var te = [], sb = function() {
      function r() {
        this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1;
      }
      return r;
    }();
    function Ed(r, t, e) {
      var n = r.cpx2, i = r.cpy2;
      return n != null || i != null ? [(e ? Gv : At)(r.x1, r.cpx1, r.cpx2, r.x2, t), (e ? Gv : At)(r.y1, r.cpy1, r.cpy2, r.y2, t)] : [(e ? Wv : Bt)(r.x1, r.cpx1, r.x2, t), (e ? Wv : Bt)(r.y1, r.cpy1, r.y2, t)];
    }
    var Yo = function(r) {
      B(t, r);
      function t(e) {
        return r.call(this, e) || this;
      }
      return t.prototype.getDefaultStyle = function() {
        return {
          stroke: "#000",
          fill: null
        };
      }, t.prototype.getDefaultShape = function() {
        return new sb();
      }, t.prototype.buildPath = function(e, n) {
        var i = n.x1, a = n.y1, o = n.x2, s = n.y2, l = n.cpx1, u = n.cpy1, f = n.cpx2, h = n.cpy2, c = n.percent;
        c !== 0 && (e.moveTo(i, a), f == null || h == null ? (c < 1 && (io(i, l, o, c, te), l = te[1], o = te[2], io(a, u, s, c, te), u = te[1], s = te[2]), e.quadraticCurveTo(l, u, o, s)) : (c < 1 && (no(i, l, f, o, c, te), l = te[1], f = te[2], o = te[3], no(a, u, h, s, c, te), u = te[1], h = te[2], s = te[3]), e.bezierCurveTo(l, u, f, h, o, s)));
      }, t.prototype.pointAt = function(e) {
        return Ed(this.shape, e, !1);
      }, t.prototype.tangentAt = function(e) {
        var n = Ed(this.shape, e, !0);
        return mv(n, n);
      }, t;
    }(ft);
    Yo.prototype.type = "bezier-curve";
    var lb = function() {
      function r() {
        this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
      }
      return r;
    }(), ea = function(r) {
      B(t, r);
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
        var i = n.cx, a = n.cy, o = Math.max(n.r, 0), s = n.startAngle, l = n.endAngle, u = n.clockwise, f = Math.cos(s), h = Math.sin(s);
        e.moveTo(f * o + i, h * o + a), e.arc(i, a, o, s, l, !u);
      }, t;
    }(ft);
    ea.prototype.type = "arc";
    var kd = function(r) {
      B(t, r);
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
        return this._updatePathDirty.call(this), ft.prototype.getBoundingRect.call(this);
      }, t;
    }(ft), Od = function() {
      function r(t) {
        this.colorStops = t || [];
      }
      return r.prototype.addColorStop = function(t, e) {
        this.colorStops.push({
          offset: t,
          color: e
        });
      }, r;
    }(), Gu = function(r) {
      B(t, r);
      function t(e, n, i, a, o, s) {
        var l = r.call(this, o) || this;
        return l.x = e ?? 0, l.y = n ?? 0, l.x2 = i ?? 1, l.y2 = a ?? 0, l.type = "linear", l.global = s || !1, l;
      }
      return t;
    }(Od), Bd = function(r) {
      B(t, r);
      function t(e, n, i, a, o) {
        var s = r.call(this, a) || this;
        return s.x = e ?? 0.5, s.y = n ?? 0.5, s.r = i ?? 0.5, s.type = "radial", s.global = o || !1, s;
      }
      return t;
    }(Od), mn = [0, 0], _n = [0, 0], Xo = new q(), qo = new q(), Zo = function() {
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
        return Xo.set(1 / 0, 1 / 0), qo.set(0, 0), !this._intersectCheckOneSide(this, t, Xo, qo, i, 1) && (n = !1, i) || !this._intersectCheckOneSide(t, this, Xo, qo, i, -1) && (n = !1, i) || i || q.copy(e, n ? Xo : qo), n;
      }, r.prototype._intersectCheckOneSide = function(t, e, n, i, a, o) {
        for (var s = !0, l = 0; l < 2; l++) {
          var u = this._axes[l];
          if (this._getProjMinMaxOnAxis(l, t._corners, mn), this._getProjMinMaxOnAxis(l, e._corners, _n), mn[1] < _n[0] || mn[0] > _n[1]) {
            if (s = !1, a)
              return s;
            var f = Math.abs(_n[0] - mn[1]), h = Math.abs(mn[0] - _n[1]);
            Math.min(f, h) > i.len() && (f < h ? q.scale(i, u, -f * o) : q.scale(i, u, h * o));
          } else if (n) {
            var f = Math.abs(_n[0] - mn[1]), h = Math.abs(mn[0] - _n[1]);
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
    }(), ub = [], Nd = function(r) {
      B(t, r);
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
          for (var e = new nt(1 / 0, 1 / 0, -1 / 0, -1 / 0), n = 0; n < this._displayables.length; n++) {
            var i = this._displayables[n], a = i.getBoundingRect().clone();
            i.needLocalTransform() && a.applyTransform(i.getLocalTransform(ub)), e.union(a);
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
    }(Yi), fb = St();
    function hb(r, t, e, n, i) {
      var a;
      if (t && t.ecModel) {
        var o = t.ecModel.getUpdatePayload();
        a = o && o.animation;
      }
      var s = t && t.isAnimationEnabled(), l = r === "update";
      if (s) {
        var u = void 0, f = void 0, h = void 0;
        n ? (u = J(n.duration, 200), f = J(n.easing, "cubicOut"), h = 0) : (u = t.getShallow(l ? "animationDurationUpdate" : "animationDuration"), f = t.getShallow(l ? "animationEasingUpdate" : "animationEasing"), h = t.getShallow(l ? "animationDelayUpdate" : "animationDelay")), a && (a.duration != null && (u = a.duration), a.easing != null && (f = a.easing), a.delay != null && (h = a.delay)), Y(h) && (h = h(e, i)), Y(u) && (u = u(e));
        var c = {
          duration: u || 0,
          delay: h,
          easing: f
        };
        return c;
      } else
        return null;
    }
    function Hu(r, t, e, n, i, a, o) {
      var s = !1, l;
      Y(i) ? (o = a, a = i, i = null) : V(i) && (a = i.cb, o = i.during, s = i.isFrom, l = i.removeOpt, i = i.dataIndex);
      var u = r === "leave";
      u || t.stopAnimation("leave");
      var f = hb(r, n, i, u ? l || {} : null, n && n.getAnimationDelayParams ? n.getAnimationDelayParams(t, i) : null);
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
    function Pt(r, t, e, n, i, a) {
      Hu("update", r, t, e, n, i, a);
    }
    function Gt(r, t, e, n, i, a) {
      Hu("enter", r, t, e, n, i, a);
    }
    function ni(r) {
      if (!r.__zr)
        return !0;
      for (var t = 0; t < r.animators.length; t++) {
        var e = r.animators[t];
        if (e.scope === "leave")
          return !0;
      }
      return !1;
    }
    function $o(r, t, e, n, i, a) {
      ni(r) || Hu("leave", r, t, e, n, i, a);
    }
    function Fd(r, t, e, n) {
      r.removeTextContent(), r.removeTextGuideLine(), $o(r, {
        style: {
          opacity: 0
        }
      }, t, e, n);
    }
    function Ko(r, t, e) {
      function n() {
        r.parent && r.parent.remove(r);
      }
      r.isGroup ? r.traverse(function(i) {
        i.isGroup || Fd(i, t, e, n);
      }) : Fd(r, t, e, n);
    }
    function Vu(r) {
      fb(r).oldStyle = r.style;
    }
    var Qo = Math.max, jo = Math.min, Wu = {};
    function zd(r) {
      return ft.extend(r);
    }
    var vb = Xw;
    function Gd(r, t) {
      return vb(r, t);
    }
    function Ce(r, t) {
      Wu[r] = t;
    }
    function Hd(r) {
      if (Wu.hasOwnProperty(r))
        return Wu[r];
    }
    function Jo(r, t, e, n) {
      var i = Yw(r, t);
      return e && (n === "center" && (e = Vd(e, i.getBoundingRect())), Yu(i, e)), i;
    }
    function Uu(r, t, e) {
      var n = new ur({
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
            n.setStyle(Vd(t, a));
          }
        }
      });
      return n;
    }
    function Vd(r, t) {
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
    var Wd = qw;
    function Yu(r, t) {
      if (r.applyTransform) {
        var e = r.getBoundingRect(), n = e.calculateTransform(t);
        r.applyTransform(n);
      }
    }
    function ra(r, t) {
      return Yc(r, r, {
        lineWidth: t
      }), r;
    }
    function cb(r) {
      return Xc(r.shape, r.shape, r.style), r;
    }
    var db = pn;
    function Ud(r, t) {
      for (var e = xi([]); r && r !== t; )
        Tr(e, r.getLocalTransform(), e), r = r.parent;
      return e;
    }
    function Xu(r, t, e) {
      return t && !Wt(t) && (t = po.getLocalTransform(t)), e && (t = Hn([], t)), Xt([], r, t);
    }
    function pb(r, t, e) {
      var n = t[4] === 0 || t[5] === 0 || t[0] === 0 ? 1 : Math.abs(2 * t[4] / t[0]), i = t[4] === 0 || t[5] === 0 || t[2] === 0 ? 1 : Math.abs(2 * t[4] / t[2]), a = [r === "left" ? -n : r === "right" ? n : 0, r === "top" ? -i : r === "bottom" ? i : 0];
      return a = Xu(a, t, e), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
    }
    function Yd(r) {
      return !r.isGroup;
    }
    function gb(r) {
      return r.shape != null;
    }
    function Xd(r, t, e) {
      if (!r || !t)
        return;
      function n(o) {
        var s = {};
        return o.traverse(function(l) {
          Yd(l) && l.anid && (s[l.anid] = l);
        }), s;
      }
      function i(o) {
        var s = {
          x: o.x,
          y: o.y,
          rotation: o.rotation
        };
        return gb(o) && (s.shape = k({}, o.shape)), s;
      }
      var a = n(r);
      t.traverse(function(o) {
        if (Yd(o) && o.anid) {
          var s = a[o.anid];
          if (s) {
            var l = i(o);
            o.attr(i(s)), Pt(o, l, e, ot(o).dataIndex);
          }
        }
      });
    }
    function qd(r, t) {
      return H(r, function(e) {
        var n = e[0];
        n = Qo(n, t.x), n = jo(n, t.x + t.width);
        var i = e[1];
        return i = Qo(i, t.y), i = jo(i, t.y + t.height), [n, i];
      });
    }
    function Zd(r, t) {
      var e = Qo(r.x, t.x), n = jo(r.x + r.width, t.x + t.width), i = Qo(r.y, t.y), a = jo(r.y + r.height, t.y + t.height);
      if (n >= e && a >= i)
        return {
          x: e,
          y: i,
          width: n - e,
          height: a - i
        };
    }
    function ts(r, t, e) {
      var n = k({
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
        return r.indexOf("image://") === 0 ? (i.image = r.slice(8), st(i, e), new ur(n)) : Jo(r.replace("path://", ""), n, e, "center");
    }
    function yb(r, t, e, n, i) {
      for (var a = 0, o = i[i.length - 1]; a < i.length; a++) {
        var s = i[a];
        if ($d(r, t, e, n, s[0], s[1], o[0], o[1]))
          return !0;
        o = s;
      }
    }
    function $d(r, t, e, n, i, a, o, s) {
      var l = e - r, u = n - t, f = o - i, h = s - a, c = qu(f, h, l, u);
      if (mb(c))
        return !1;
      var v = r - i, d = t - a, g = qu(v, d, l, u) / c;
      if (g < 0 || g > 1)
        return !1;
      var p = qu(v, d, f, h) / c;
      return !(p < 0 || p > 1);
    }
    function qu(r, t, e, n) {
      return r * n - e * t;
    }
    function mb(r) {
      return r <= 1e-6 && r >= -1e-6;
    }
    function Zu(r) {
      var t = r.itemTooltipOption, e = r.componentModel, n = r.itemName, i = G(t) ? {
        formatter: t
      } : t, a = e.mainType, o = e.componentIndex, s = {
        componentType: a,
        name: n,
        $vars: ["name"]
      };
      s[a + "Index"] = o;
      var l = r.formatterParamsExtra;
      l && M(pt(l), function(f) {
        qr(s, f) || (s[f] = l[f], s.$vars.push(f));
      });
      var u = ot(r.el);
      u.componentMainType = a, u.componentIndex = o, u.tooltipConfig = {
        name: n,
        option: st({
          content: n,
          formatterParams: s
        }, i)
      };
    }
    function Kd(r, t) {
      var e;
      r.isGroup && (e = t(r)), e || r.traverse(t);
    }
    function es(r, t) {
      if (r)
        if (F(r))
          for (var e = 0; e < r.length; e++)
            Kd(r[e], t);
        else
          Kd(r, t);
    }
    Ce("circle", ji), Ce("ellipse", Ho), Ce("sector", hr), Ce("ring", Wo), Ce("polygon", Uo), Ce("polyline", ri), Ce("rect", Tt), Ce("line", vr), Ce("bezierCurve", Yo), Ce("arc", ea);
    var _b = (Object.freeze || Object)({
      updateProps: Pt,
      initProps: Gt,
      removeElement: $o,
      removeElementWithFadeOut: Ko,
      isElementRemoved: ni,
      extendShape: zd,
      extendPath: Gd,
      registerShape: Ce,
      getShapeClass: Hd,
      makePath: Jo,
      makeImage: Uu,
      mergePath: Wd,
      resizePath: Yu,
      subPixelOptimizeLine: ra,
      subPixelOptimizeRect: cb,
      subPixelOptimize: db,
      getTransform: Ud,
      applyTransform: Xu,
      transformDirection: pb,
      groupTransition: Xd,
      clipPointsByRect: qd,
      clipRectByRect: Zd,
      createIcon: ts,
      linePolygonIntersect: yb,
      lineLineIntersect: $d,
      setTooltipConfig: Zu,
      traverseElements: es,
      Group: It,
      Image: ur,
      Text: Lt,
      Circle: ji,
      Ellipse: Ho,
      Sector: hr,
      Ring: Wo,
      Polygon: Uo,
      Polyline: ri,
      Rect: Tt,
      Line: vr,
      BezierCurve: Yo,
      Arc: ea,
      IncrementalDisplayable: Nd,
      CompoundPath: kd,
      LinearGradient: Gu,
      RadialGradient: Bd,
      BoundingRect: nt,
      OrientedBoundingRect: Zo,
      Point: q,
      Path: ft
    }), rs = {};
    function Qd(r, t) {
      for (var e = 0; e < Te.length; e++) {
        var n = Te[e], i = t[n], a = r.ensureState(n);
        a.style = a.style || {}, a.style.text = i;
      }
      var o = r.currentStates.slice();
      r.clearStates(!0), r.setStyle({
        text: t.normal
      }), r.useStates(o, !0);
    }
    function $u(r, t, e) {
      var n = r.labelFetcher, i = r.labelDataIndex, a = r.labelDimIndex, o = t.normal, s;
      n && (s = n.getFormattedLabel(i, "normal", null, a, o && o.get("formatter"), e != null ? {
        interpolatedValue: e
      } : null)), s == null && (s = Y(r.defaultText) ? r.defaultText(i, r, e) : r.defaultText);
      for (var l = {
        normal: s
      }, u = 0; u < Te.length; u++) {
        var f = Te[u], h = t[f];
        l[f] = J(n ? n.getFormattedLabel(i, f, null, a, h && h.get("formatter")) : null, s);
      }
      return l;
    }
    function na(r, t, e, n) {
      e = e || rs;
      for (var i = r instanceof Lt, a = !1, o = 0; o < Io.length; o++) {
        var s = t[Io[o]];
        if (s && s.getShallow("show")) {
          a = !0;
          break;
        }
      }
      var l = i ? r : r.getTextContent();
      if (a) {
        i || (l || (l = new Lt(), r.setTextContent(l)), r.stateProxy && (l.stateProxy = r.stateProxy));
        var u = $u(e, t), f = t.normal, h = !!f.getShallow("show"), c = cr(f, n && n.normal, e, !1, !i);
        c.text = u.normal, i || r.setTextConfig(jd(f, e, !1));
        for (var o = 0; o < Te.length; o++) {
          var v = Te[o], s = t[v];
          if (s) {
            var d = l.ensureState(v), g = !!J(s.getShallow("show"), h);
            if (g !== h && (d.ignore = !g), d.style = cr(s, n && n[v], e, !0, !i), d.style.text = u[v], !i) {
              var p = r.ensureState(v);
              p.textConfig = jd(s, e, !0);
            }
          }
        }
        l.silent = !!f.getShallow("silent"), l.style.x != null && (c.x = l.style.x), l.style.y != null && (c.y = l.style.y), l.ignore = !h, l.useStyle(c), l.dirty(), e.enableTextSetter && (ii(l).setLabelText = function(y) {
          var m = $u(e, t, y);
          Qd(l, m);
        });
      } else
        l && (l.ignore = !0);
      r.dirty();
    }
    function ia(r, t) {
      t = t || "label";
      for (var e = {
        normal: r.getModel(t)
      }, n = 0; n < Te.length; n++) {
        var i = Te[n];
        e[i] = r.getModel([i, t]);
      }
      return e;
    }
    function cr(r, t, e, n, i) {
      var a = {};
      return Sb(a, r, e, n, i), t && k(a, t), a;
    }
    function jd(r, t, e) {
      t = t || {};
      var n = {}, i, a = r.getShallow("rotate"), o = J(r.getShallow("distance"), e ? null : 5), s = r.getShallow("offset");
      return i = r.getShallow("position") || (e ? null : "inside"), i === "outside" && (i = t.defaultOutsidePosition || "top"), i != null && (n.position = i), s != null && (n.offset = s), a != null && (a *= Math.PI / 180, n.rotation = a), o != null && (n.distance = o), n.outsideFill = r.get("color") === "inherit" ? t.inheritColor || null : "auto", n;
    }
    function Sb(r, t, e, n, i) {
      e = e || rs;
      var a = t.ecModel, o = a && a.option.textStyle, s = wb(t), l;
      if (s) {
        l = {};
        for (var u in s)
          if (s.hasOwnProperty(u)) {
            var f = t.getModel(["rich", u]);
            rp(l[u] = {}, f, o, e, n, i, !1, !0);
          }
      }
      l && (r.rich = l);
      var h = t.get("overflow");
      h && (r.overflow = h);
      var c = t.get("minMargin");
      c != null && (r.margin = c), rp(r, t, o, e, n, i, !0, !1);
    }
    function wb(r) {
      for (var t; r && r !== r.ecModel; ) {
        var e = (r.option || rs).rich;
        if (e) {
          t = t || {};
          for (var n = pt(e), i = 0; i < n.length; i++) {
            var a = n[i];
            t[a] = 1;
          }
        }
        r = r.parentModel;
      }
      return t;
    }
    var Jd = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], tp = ["align", "lineHeight", "width", "height", "tag", "verticalAlign"], ep = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
    function rp(r, t, e, n, i, a, o, s) {
      e = !i && e || rs;
      var l = n && n.inheritColor, u = t.getShallow("color"), f = t.getShallow("textBorderColor"), h = J(t.getShallow("opacity"), e.opacity);
      (u === "inherit" || u === "auto") && (u === "auto" && Mt("color: 'auto'", "color: 'inherit'"), l ? u = l : u = null), (f === "inherit" || f === "auto") && (f === "auto" && Mt("color: 'auto'", "color: 'inherit'"), l ? f = l : f = null), a || (u = u || e.color, f = f || e.textBorderColor), u != null && (r.fill = u), f != null && (r.stroke = f);
      var c = J(t.getShallow("textBorderWidth"), e.textBorderWidth);
      c != null && (r.lineWidth = c);
      var v = J(t.getShallow("textBorderType"), e.textBorderType);
      v != null && (r.lineDash = v);
      var d = J(t.getShallow("textBorderDashOffset"), e.textBorderDashOffset);
      d != null && (r.lineDashOffset = d), !i && h == null && !s && (h = n && n.defaultOpacity), h != null && (r.opacity = h), !i && !a && r.fill == null && n.inheritColor && (r.fill = n.inheritColor);
      for (var g = 0; g < Jd.length; g++) {
        var p = Jd[g], y = J(t.getShallow(p), e[p]);
        y != null && (r[p] = y);
      }
      for (var g = 0; g < tp.length; g++) {
        var p = tp[g], y = t.getShallow(p);
        y != null && (r[p] = y);
      }
      if (r.verticalAlign == null) {
        var m = t.getShallow("baseline");
        m != null && (r.verticalAlign = m);
      }
      if (!o || !n.disableBox) {
        for (var g = 0; g < ep.length; g++) {
          var p = ep[g], y = t.getShallow(p);
          y != null && (r[p] = y);
        }
        var _ = t.getShallow("borderType");
        _ != null && (r.borderDash = _), (r.backgroundColor === "auto" || r.backgroundColor === "inherit") && l && (r.backgroundColor === "auto" && Mt("backgroundColor: 'auto'", "backgroundColor: 'inherit'"), r.backgroundColor = l), (r.borderColor === "auto" || r.borderColor === "inherit") && l && (r.borderColor === "auto" && Mt("borderColor: 'auto'", "borderColor: 'inherit'"), r.borderColor = l);
      }
    }
    function bb(r, t) {
      var e = t && t.getModel("textStyle");
      return Re([
        // FIXME in node-canvas fontWeight is before fontStyle
        r.fontStyle || e && e.getShallow("fontStyle") || "",
        r.fontWeight || e && e.getShallow("fontWeight") || "",
        (r.fontSize || e && e.getShallow("fontSize") || 12) + "px",
        r.fontFamily || e && e.getShallow("fontFamily") || "sans-serif"
      ].join(" "));
    }
    var ii = St();
    function xb(r, t, e, n) {
      if (r) {
        var i = ii(r);
        i.prevValue = i.value, i.value = e;
        var a = t.normal;
        i.valueAnimation = a.get("valueAnimation"), i.valueAnimation && (i.precision = a.get("precision"), i.defaultInterpolatedText = n, i.statesModels = t);
      }
    }
    function Tb(r, t, e, n, i) {
      var a = ii(r);
      if (!a.valueAnimation || a.prevValue === a.value)
        return;
      var o = a.defaultInterpolatedText, s = J(a.interpolatedValue, a.prevValue), l = a.value;
      function u(f) {
        var h = Ac(e, a.precision, s, l, f);
        a.interpolatedValue = f === 1 ? null : h;
        var c = $u({
          labelDataIndex: t,
          labelFetcher: i,
          defaultText: o ? o(h) : h + ""
        }, a.statesModels, h);
        Qd(r, c);
      }
      r.percent = 0, (a.prevValue == null ? Gt : Pt)(r, {
        // percent is used to prevent animation from being aborted #15916
        percent: 1
      }, n, t, null, u);
    }
    var Cb = ["textStyle", "color"], Ku = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "padding", "lineHeight", "rich", "width", "height", "overflow"], Qu = new Lt(), Db = (
      /** @class */
      function() {
        function r() {
        }
        return r.prototype.getTextColor = function(t) {
          var e = this.ecModel;
          return this.getShallow("color") || (!t && e ? e.get(Cb) : null);
        }, r.prototype.getFont = function() {
          return bb({
            fontStyle: this.getShallow("fontStyle"),
            fontWeight: this.getShallow("fontWeight"),
            fontSize: this.getShallow("fontSize"),
            fontFamily: this.getShallow("fontFamily")
          }, this.ecModel);
        }, r.prototype.getTextRect = function(t) {
          for (var e = {
            text: t,
            verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
          }, n = 0; n < Ku.length; n++)
            e[Ku[n]] = this.getShallow(Ku[n]);
          return Qu.useStyle(e), Qu.update(), Qu.getBoundingRect();
        }, r;
      }()
    ), np = [
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
    ], Mb = Ui(np), Ab = (
      /** @class */
      function() {
        function r() {
        }
        return r.prototype.getLineStyle = function(t) {
          return Mb(this, t);
        }, r;
      }()
    ), ip = [
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
    ], Lb = Ui(ip), Pb = (
      /** @class */
      function() {
        function r() {
        }
        return r.prototype.getItemStyle = function(t, e) {
          return Lb(this, t, e);
        }, r;
      }()
    ), mt = (
      /** @class */
      function() {
        function r(t, e, n) {
          this.parentModel = e, this.ecModel = n, this.option = t;
        }
        return r.prototype.init = function(t, e, n) {
        }, r.prototype.mergeOption = function(t, e) {
          at(this.option, t, !0);
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
          return new t(rt(this.option));
        }, r.prototype.parsePath = function(t) {
          return typeof t == "string" ? t.split(".") : t;
        }, r.prototype.resolveParentPath = function(t) {
          return t;
        }, r.prototype.isAnimationEnabled = function() {
          if (!X.node && this.option) {
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
    cu(mt), DS(mt), ge(mt, Ab), ge(mt, Pb), ge(mt, IS), ge(mt, Db);
    var Ib = Math.round(Math.random() * 10);
    function ns(r) {
      return [r || "", Ib++].join("_");
    }
    function Rb(r) {
      var t = {};
      r.registerSubTypeDefaulter = function(e, n) {
        var i = Ze(e);
        t[i.main] = n;
      }, r.determineSubType = function(e, n) {
        var i = n.type;
        if (!i) {
          var a = Ze(e).main;
          r.hasSubTypes(e) && t[a] && (i = t[a](n));
        }
        return i;
      };
    }
    function Eb(r, t) {
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
          throw m = wo("Circular dependency may exists: ", c, a, o), new Error(m);
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
            lt(u.predecessor, c) < 0 && u.predecessor.push(c);
            var v = n(o, c);
            lt(v.successor, c) < 0 && v.successor.push(l);
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
          lt(o, l) >= 0 && s.push(l);
        }), s;
      }
    }
    function ap(r, t) {
      return at(at({}, r, !0), t, !0);
    }
    var kb = {
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
    }, Ob = {
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
    }, is = "ZH", ju = "EN", aa = ju, as = {}, Ju = {}, op = X.domSupported ? function() {
      var r = (
        /* eslint-disable-next-line */
        (document.documentElement.lang || navigator.language || navigator.browserLanguage).toUpperCase()
      );
      return r.indexOf(is) > -1 ? is : aa;
    }() : aa;
    function tf(r, t) {
      r = r.toUpperCase(), Ju[r] = new mt(t), as[r] = t;
    }
    function Bb(r) {
      if (G(r)) {
        var t = as[r.toUpperCase()] || {};
        return r === is || r === ju ? rt(t) : at(rt(t), rt(as[aa]), !1);
      } else
        return at(rt(r), rt(as[aa]), !1);
    }
    function Nb(r) {
      return Ju[r];
    }
    function Fb() {
      return Ju[aa];
    }
    tf(ju, kb), tf(is, Ob);
    var ef = 1e3, rf = ef * 60, oa = rf * 60, De = oa * 24, sp = De * 365, sa = {
      year: "{yyyy}",
      month: "{MMM}",
      day: "{d}",
      hour: "{HH}:{mm}",
      minute: "{HH}:{mm}",
      second: "{HH}:{mm}:{ss}",
      millisecond: "{HH}:{mm}:{ss} {SSS}",
      none: "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}"
    }, os = "{yyyy}-{MM}-{dd}", lp = {
      year: "{yyyy}",
      month: "{yyyy}-{MM}",
      day: os,
      hour: os + " " + sa.hour,
      minute: os + " " + sa.minute,
      second: os + " " + sa.second,
      millisecond: sa.none
    }, nf = ["year", "month", "day", "hour", "minute", "second", "millisecond"], up = ["year", "half-year", "quarter", "month", "week", "half-week", "day", "half-day", "quarter-day", "hour", "minute", "second", "millisecond"];
    function ee(r, t) {
      return r += "", "0000".substr(0, t - r.length) + r;
    }
    function ai(r) {
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
    function zb(r) {
      return r === ai(r);
    }
    function Gb(r) {
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
    function la(r, t, e, n) {
      var i = Se(r), a = i[af(e)](), o = i[oi(e)]() + 1, s = Math.floor((o - 1) / 3) + 1, l = i[ss(e)](), u = i["get" + (e ? "UTC" : "") + "Day"](), f = i[ua(e)](), h = (f - 1) % 12 + 1, c = i[ls(e)](), v = i[us(e)](), d = i[fs(e)](), g = n instanceof mt ? n : Nb(n || op) || Fb(), p = g.getModel("time"), y = p.get("month"), m = p.get("monthAbbr"), _ = p.get("dayOfWeek"), S = p.get("dayOfWeekAbbr");
      return (t || "").replace(/{yyyy}/g, a + "").replace(/{yy}/g, a % 100 + "").replace(/{Q}/g, s + "").replace(/{MMMM}/g, y[o - 1]).replace(/{MMM}/g, m[o - 1]).replace(/{MM}/g, ee(o, 2)).replace(/{M}/g, o + "").replace(/{dd}/g, ee(l, 2)).replace(/{d}/g, l + "").replace(/{eeee}/g, _[u]).replace(/{ee}/g, S[u]).replace(/{e}/g, u + "").replace(/{HH}/g, ee(f, 2)).replace(/{H}/g, f + "").replace(/{hh}/g, ee(h + "", 2)).replace(/{h}/g, h + "").replace(/{mm}/g, ee(c, 2)).replace(/{m}/g, c + "").replace(/{ss}/g, ee(v, 2)).replace(/{s}/g, v + "").replace(/{SSS}/g, ee(d, 3)).replace(/{S}/g, d + "");
    }
    function Hb(r, t, e, n, i) {
      var a = null;
      if (G(e))
        a = e;
      else if (Y(e))
        a = e(r.value, t, {
          level: r.level
        });
      else {
        var o = k({}, sa);
        if (r.level > 0)
          for (var s = 0; s < nf.length; ++s)
            o[nf[s]] = "{primary|" + o[nf[s]] + "}";
        var l = e ? e.inherit === !1 ? e : st(e, o) : o, u = fp(r.value, i);
        if (l[u])
          a = l[u];
        else if (l.inherit) {
          for (var f = up.indexOf(u), s = f - 1; s >= 0; --s)
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
      return la(new Date(r.value), a, i, n);
    }
    function fp(r, t) {
      var e = Se(r), n = e[oi(t)]() + 1, i = e[ss(t)](), a = e[ua(t)](), o = e[ls(t)](), s = e[us(t)](), l = e[fs(t)](), u = l === 0, f = u && s === 0, h = f && o === 0, c = h && a === 0, v = c && i === 1, d = v && n === 1;
      return d ? "year" : v ? "month" : c ? "day" : h ? "hour" : f ? "minute" : u ? "second" : "millisecond";
    }
    function hp(r, t, e) {
      var n = ct(r) ? Se(r) : r;
      switch (t = t || fp(r, e), t) {
        case "year":
          return n[af(e)]();
        case "half-year":
          return n[oi(e)]() >= 6 ? 1 : 0;
        case "quarter":
          return Math.floor((n[oi(e)]() + 1) / 4);
        case "month":
          return n[oi(e)]();
        case "day":
          return n[ss(e)]();
        case "half-day":
          return n[ua(e)]() / 24;
        case "hour":
          return n[ua(e)]();
        case "minute":
          return n[ls(e)]();
        case "second":
          return n[us(e)]();
        case "millisecond":
          return n[fs(e)]();
      }
    }
    function af(r) {
      return r ? "getUTCFullYear" : "getFullYear";
    }
    function oi(r) {
      return r ? "getUTCMonth" : "getMonth";
    }
    function ss(r) {
      return r ? "getUTCDate" : "getDate";
    }
    function ua(r) {
      return r ? "getUTCHours" : "getHours";
    }
    function ls(r) {
      return r ? "getUTCMinutes" : "getMinutes";
    }
    function us(r) {
      return r ? "getUTCSeconds" : "getSeconds";
    }
    function fs(r) {
      return r ? "getUTCMilliseconds" : "getMilliseconds";
    }
    function Vb(r) {
      return r ? "setUTCFullYear" : "setFullYear";
    }
    function vp(r) {
      return r ? "setUTCMonth" : "setMonth";
    }
    function cp(r) {
      return r ? "setUTCDate" : "setDate";
    }
    function dp(r) {
      return r ? "setUTCHours" : "setHours";
    }
    function pp(r) {
      return r ? "setUTCMinutes" : "setMinutes";
    }
    function gp(r) {
      return r ? "setUTCSeconds" : "setSeconds";
    }
    function yp(r) {
      return r ? "setUTCMilliseconds" : "setMilliseconds";
    }
    function Wb(r, t, e, n, i, a, o, s) {
      var l = new Lt({
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
    function of(r) {
      if (!lu(r))
        return G(r) ? r : "-";
      var t = (r + "").split(".");
      return t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "");
    }
    function sf(r, t) {
      return r = (r || "").toLowerCase().replace(/-(.)/g, function(e, n) {
        return n.toUpperCase();
      }), t && r && (r = r.charAt(0).toUpperCase() + r.slice(1)), r;
    }
    var fa = cl;
    function lf(r, t, e) {
      var n = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}";
      function i(f) {
        return f && Re(f) ? f : "-";
      }
      function a(f) {
        return !!(f != null && !isNaN(f) && isFinite(f));
      }
      var o = t === "time", s = r instanceof Date;
      if (o || s) {
        var l = o ? Se(r) : r;
        if (isNaN(+l)) {
          if (s)
            return "-";
        } else
          return la(l, n, e);
      }
      if (t === "ordinal")
        return _i(r) ? i(r) : ct(r) && a(r) ? r + "" : "-";
      var u = Gi(r);
      return a(u) ? of(u) : _i(r) ? i(r) : typeof r == "boolean" ? r + "" : "-";
    }
    var mp = ["a", "b", "c", "d", "e", "f", "g"], uf = function(r, t) {
      return "{" + r + (t ?? "") + "}";
    };
    function ff(r, t, e) {
      F(t) || (t = [t]);
      var n = t.length;
      if (!n)
        return "";
      for (var i = t[0].$vars || [], a = 0; a < i.length; a++) {
        var o = mp[a];
        r = r.replace(uf(o), uf(o, 0));
      }
      for (var s = 0; s < n; s++)
        for (var l = 0; l < i.length; l++) {
          var u = t[s][i[l]];
          r = r.replace(uf(mp[l], s), e ? le(u) : u);
        }
      return r;
    }
    function _p(r, t) {
      var e = G(r) ? {
        color: r,
        extraCssText: t
      } : r || {}, n = e.color, i = e.type;
      t = e.extraCssText;
      var a = e.renderMode || "html";
      if (!n)
        return "";
      if (a === "html")
        return i === "subItem" ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + le(n) + ";" + (t || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + le(n) + ";" + (t || "") + '"></span>';
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
    function Ub(r, t, e) {
      Mt("echarts.format.formatTime", "echarts.time.format"), (r === "week" || r === "month" || r === "quarter" || r === "half-year" || r === "year") && (r = `MM-dd
yyyy`);
      var n = Se(t), i = e ? "getUTC" : "get", a = n[i + "FullYear"](), o = n[i + "Month"]() + 1, s = n[i + "Date"](), l = n[i + "Hours"](), u = n[i + "Minutes"](), f = n[i + "Seconds"](), h = n[i + "Milliseconds"]();
      return r = r.replace("MM", ee(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", ee(a % 100 + "", 2)).replace("dd", ee(s, 2)).replace("d", s).replace("hh", ee(l, 2)).replace("h", l).replace("mm", ee(u, 2)).replace("m", u).replace("ss", ee(f, 2)).replace("s", f).replace("SSS", ee(h, 3)), r;
    }
    function Yb(r) {
      return r && r.charAt(0).toUpperCase() + r.substr(1);
    }
    function Sn(r, t) {
      return t = t || "transparent", G(r) ? r : V(r) && r.colorStops && (r.colorStops[0] || {}).color || t;
    }
    function Sp(r, t) {
      if (t === "_blank" || t === "blank") {
        var e = window.open();
        e.opener = null, e.location.href = r;
      } else
        window.open(r, t);
    }
    var hs = M, Xb = ["left", "right", "top", "bottom", "width", "height"], vs = [["width", "left", "right"], ["height", "top", "bottom"]];
    function hf(r, t, e, n, i) {
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
    var ha = hf;
    _t(hf, "vertical"), _t(hf, "horizontal");
    function wn(r, t, e) {
      e = fa(e || 0);
      var n = t.width, i = t.height, a = gt(r.left, n), o = gt(r.top, i), s = gt(r.right, n), l = gt(r.bottom, i), u = gt(r.width, n), f = gt(r.height, i), h = e[2] + e[0], c = e[1] + e[3], v = r.aspect;
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
      var d = new nt(a + e[3], o + e[0], u, f);
      return d.margin = e, d;
    }
    function va(r) {
      var t = r.layoutMode || r.constructor.layoutMode;
      return V(t) ? t : t ? {
        type: t
      } : null;
    }
    function si(r, t, e) {
      var n = e && e.ignoreSize;
      !F(n) && (n = [n, n]);
      var i = o(vs[0], 0), a = o(vs[1], 1);
      u(vs[0], r, i), u(vs[1], r, a);
      function o(f, h) {
        var c = {}, v = 0, d = {}, g = 0, p = 2;
        if (hs(f, function(_) {
          d[_] = r[_];
        }), hs(f, function(_) {
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
        hs(f, function(v) {
          h[v] = c[v];
        });
      }
    }
    function cs(r) {
      return qb({}, r);
    }
    function qb(r, t) {
      return t && r && hs(Xb, function(e) {
        t.hasOwnProperty(e) && (r[e] = t[e]);
      }), r;
    }
    var Zb = St(), it = (
      /** @class */
      function(r) {
        B(t, r);
        function t(e, n, i) {
          var a = r.call(this, e, n, i) || this;
          return a.uid = ns("ec_cpt_model"), a;
        }
        return t.prototype.init = function(e, n, i) {
          this.mergeDefaultAndTheme(e, i);
        }, t.prototype.mergeDefaultAndTheme = function(e, n) {
          var i = va(this), a = i ? cs(e) : {}, o = n.getTheme();
          at(e, o.get(this.mainType)), at(e, this.getDefaultOption()), i && si(e, a, i);
        }, t.prototype.mergeOption = function(e, n) {
          at(this.option, e, !0);
          var i = va(this);
          i && si(this.option, e, i);
        }, t.prototype.optionUpdated = function(e, n) {
        }, t.prototype.getDefaultOption = function() {
          var e = this.constructor;
          if (!xS(e))
            return e.defaultOption;
          var n = Zb(this);
          if (!n.defaultOption) {
            for (var i = [], a = e; a; ) {
              var o = a.prototype.defaultOption;
              o && i.push(o), a = a.superClass;
            }
            for (var s = {}, l = i.length - 1; l >= 0; l--)
              s = at(s, i[l], !0);
            n.defaultOption = s;
          }
          return n.defaultOption;
        }, t.prototype.getReferringComponents = function(e, n) {
          var i = e + "Index", a = e + "Id";
          return Wi(this.ecModel, e, {
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
      }(mt)
    );
    Pc(it, mt), bo(it), Rb(it), Eb(it, $b);
    function $b(r) {
      var t = [];
      return M(it.getClassesByMainType(r), function(e) {
        t = t.concat(e.dependencies || e.prototype.dependencies || []);
      }), t = H(t, function(e) {
        return Ze(e).main;
      }), r !== "dataset" && lt(t, "dataset") <= 0 && t.unshift("dataset"), t;
    }
    var wp = "";
    typeof navigator < "u" && (wp = navigator.platform || "");
    var li = "rgba(0, 0, 0, 0.2)", Kb = {
      darkMode: "auto",
      // backgroundColor: 'rgba(0,0,0,0)',
      colorBy: "series",
      color: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"],
      gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
      aria: {
        decal: {
          decals: [{
            color: li,
            dashArrayX: [1, 0],
            dashArrayY: [2, 5],
            symbolSize: 1,
            rotation: Math.PI / 6
          }, {
            color: li,
            symbol: "circle",
            dashArrayX: [[8, 8], [0, 8, 8, 0]],
            dashArrayY: [6, 0],
            symbolSize: 0.8
          }, {
            color: li,
            dashArrayX: [1, 0],
            dashArrayY: [4, 3],
            rotation: -Math.PI / 4
          }, {
            color: li,
            dashArrayX: [[6, 6], [0, 6, 6, 0]],
            dashArrayY: [6, 0]
          }, {
            color: li,
            dashArrayX: [[1, 0], [1, 6]],
            dashArrayY: [1, 0, 6, 0],
            rotation: Math.PI / 4
          }, {
            color: li,
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
        fontFamily: wp.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
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
    }, vf = j(["tooltip", "label", "itemName", "itemId", "itemGroupId", "seriesName"]), Me = "original", re = "arrayRows", Fe = "objectRows", Je = "keyedColumns", dr = "typedArray", bp = "unknown", tr = "column", ui = "row", kt = {
      Must: 1,
      Might: 2,
      Not: 3
      // Other cases
    }, xp = St();
    function Qb(r) {
      xp(r).datasetMap = j();
    }
    function jb(r, t, e) {
      var n = {}, i = cf(t);
      if (!i || !r)
        return n;
      var a = [], o = [], s = t.ecModel, l = xp(s).datasetMap, u = i.uid + "_" + e.seriesLayoutBy, f, h;
      r = r.slice(), M(r, function(g, p) {
        var y = V(g) ? g : r[p] = {
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
    function Jb(r, t, e) {
      var n = {}, i = cf(r);
      if (!i)
        return n;
      var a = t.sourceFormat, o = t.dimensionsDefine, s;
      (a === Fe || a === Je) && M(o, function(f, h) {
        (V(f) ? f.name : f) === "name" && (s = h);
      });
      var l = function() {
        for (var f = {}, h = {}, c = [], v = 0, d = Math.min(5, e); v < d; v++) {
          var g = Cp(t.data, a, t.seriesLayoutBy, o, t.startIndex, v);
          c.push(g);
          var p = g === kt.Not;
          if (p && f.v == null && v !== s && (f.v = v), (f.n == null || f.n === f.v || !p && c[f.n] === kt.Not) && (f.n = v), y(f) && c[f.n] !== kt.Not)
            return f;
          p || (g === kt.Might && h.v == null && v !== s && (h.v = v), (h.n == null || h.n === h.v) && (h.n = v));
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
    function cf(r) {
      var t = r.get("data", !0);
      if (!t)
        return Wi(r.ecModel, "dataset", {
          index: r.get("datasetIndex", !0),
          id: r.get("datasetId", !0)
        }, Be).models[0];
    }
    function tx(r) {
      return !r.get("transform", !0) && !r.get("fromTransformResult", !0) ? [] : Wi(r.ecModel, "dataset", {
        index: r.get("fromDatasetIndex", !0),
        id: r.get("fromDatasetId", !0)
      }, Be).models;
    }
    function Tp(r, t) {
      return Cp(r.data, r.sourceFormat, r.seriesLayoutBy, r.dimensionsDefine, r.startIndex, t);
    }
    function Cp(r, t, e, n, i, a) {
      var o, s = 5;
      if (Ut(r))
        return kt.Not;
      var l, u;
      if (n) {
        var f = n[a];
        V(f) ? (l = f.name, u = f.type) : G(f) && (l = f);
      }
      if (u != null)
        return u === "ordinal" ? kt.Must : kt.Not;
      if (t === re) {
        var h = r;
        if (e === ui) {
          for (var c = h[a], v = 0; v < (c || []).length && v < s; v++)
            if ((o = S(c[i + v])) != null)
              return o;
        } else
          for (var v = 0; v < h.length && v < s; v++) {
            var d = h[i + v];
            if (d && (o = S(d[a])) != null)
              return o;
          }
      } else if (t === Fe) {
        var g = r;
        if (!l)
          return kt.Not;
        for (var v = 0; v < g.length && v < s; v++) {
          var p = g[v];
          if (p && (o = S(p[l])) != null)
            return o;
        }
      } else if (t === Je) {
        var y = r;
        if (!l)
          return kt.Not;
        var c = y[l];
        if (!c || Ut(c))
          return kt.Not;
        for (var v = 0; v < c.length && v < s; v++)
          if ((o = S(c[v])) != null)
            return o;
      } else if (t === Me)
        for (var m = r, v = 0; v < m.length && v < s; v++) {
          var p = m[v], _ = Hi(p);
          if (!F(_))
            return kt.Not;
          if ((o = S(_[a])) != null)
            return o;
        }
      function S(b) {
        var w = G(b);
        if (b != null && isFinite(b) && b !== "")
          return w ? kt.Might : kt.Not;
        if (w && b !== "-")
          return kt.Must;
      }
      return kt.Not;
    }
    var ex = j();
    function rx(r, t, e) {
      var n = ex.get(t);
      if (!n)
        return e;
      var i = n(r);
      if (!i)
        return e;
      for (var a = 0; a < i.length; a++)
        Q($n(i[a]));
      return e.concat(i);
    }
    var Dp = St();
    St();
    var df = (
      /** @class */
      function() {
        function r() {
        }
        return r.prototype.getColorFromPalette = function(t, e, n) {
          var i = qt(this.get("color", !0)), a = this.get("colorLayer", !0);
          return ix(this, Dp, i, a, t, e, n);
        }, r.prototype.clearColorPalette = function() {
          ax(this, Dp);
        }, r;
      }()
    );
    function nx(r, t) {
      for (var e = r.length, n = 0; n < e; n++)
        if (r[n].length > t)
          return r[n];
      return r[e - 1];
    }
    function ix(r, t, e, n, i, a, o) {
      a = a || r;
      var s = t(a), l = s.paletteIdx || 0, u = s.paletteNameMap = s.paletteNameMap || {};
      if (u.hasOwnProperty(i))
        return u[i];
      var f = o == null || !n ? e : nx(n, o);
      if (f = f || e, !(!f || !f.length)) {
        var h = f[l];
        return i && (u[i] = h), s.paletteIdx = (l + 1) % f.length, h;
      }
    }
    function ax(r, t) {
      t(r).paletteIdx = 0, t(r).paletteNameMap = {};
    }
    var ds, ca, Mp, pf = "\0_ec_inner", Ap = 1, ox = {
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
    }, sx = {
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
    }, ps = {};
    function lx(r) {
      M(r, function(t, e) {
        if (!it.hasClass(e)) {
          var n = ox[e];
          n && !ps[n] && (Ft("Component " + e + ` is used but not imported.
import { ` + n + ` } from 'echarts/components';
echarts.use([` + n + "]);"), ps[n] = !0);
        }
      });
    }
    var gf = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          return r !== null && r.apply(this, arguments) || this;
        }
        return t.prototype.init = function(e, n, i, a, o, s) {
          a = a || {}, this.option = null, this._theme = new mt(a), this._locale = new mt(o), this._optionManager = s;
        }, t.prototype.setOption = function(e, n, i) {
          Q(e != null, "option is null/undefined"), Q(e[pf] !== Ap, "please use chart.getOption()");
          var a = Ip(n);
          this._optionManager.setOption(e, i, a), this._resetOption(null, a);
        }, t.prototype.resetOption = function(e, n) {
          return this._resetOption(e, Ip(n));
        }, t.prototype._resetOption = function(e, n) {
          var i = !1, a = this._optionManager;
          if (!e || e === "recreate") {
            var o = a.mountOption(e === "recreate");
            lx(o), !this.option || e === "recreate" ? Mp(this, o) : (this.restoreData(), this._mergeOption(o, n)), i = !0;
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
          var i = this.option, a = this._componentsMap, o = this._componentsCount, s = [], l = j(), u = n && n.replaceMergeMainTypeMap;
          Qb(this), M(e, function(h, c) {
            h != null && (it.hasClass(c) ? c && (s.push(c), l.set(c, !0)) : i[c] = i[c] == null ? rt(h) : at(i[c], h, !0));
          }), u && u.each(function(h, c) {
            it.hasClass(c) && !l.get(c) && (s.push(c), l.set(c, !0));
          }), it.topologicalTravel(s, it.getAllClassMainTypes(), f, this);
          function f(h) {
            var c = rx(this, h, qt(e[h])), v = a.get(h), d = (
              // `!oldCmptList` means init. See the comment in `mappingToExists`
              v ? u && u.get(h) ? "replaceMerge" : "normalMerge" : "replaceAll"
            ), g = uS(v, c, d);
            gS(g, h, it), i[h] = null, a.set(h, null), o.set(h, 0);
            var p = [], y = [], m = 0, _, S;
            M(g, function(b, w) {
              var x = b.existing, T = b.newOption;
              if (!T)
                x && (x.mergeOption({}, this), x.optionUpdated({}, !1));
              else {
                var D = h === "series", A = it.getClass(
                  h,
                  b.keyInfo.subType,
                  !D
                  // Give a more detailed warn later if series don't exists
                );
                if (!A) {
                  {
                    var C = b.keyInfo.subType, L = sx[C];
                    ps[C] || (ps[C] = !0, Ft(L ? "Series " + C + ` is used but not imported.
import { ` + L + ` } from 'echarts/charts';
echarts.use([` + L + "]);" : "Unknown series " + C));
                  }
                  return;
                }
                if (h === "tooltip") {
                  if (_) {
                    S || (Nt("Currently only one tooltip component is allowed."), S = !0);
                    return;
                  }
                  _ = !0;
                }
                if (x && x.constructor === A)
                  x.name = b.keyInfo.name, x.mergeOption(T, this), x.optionUpdated(T, !1);
                else {
                  var P = k({
                    componentIndex: w
                  }, b.keyInfo);
                  x = new A(T, this, this, P), k(x, P), b.brandNew && (x.__requireNewView = !0), x.init(T, this, this), x.optionUpdated(null, !0);
                }
              }
              x ? (p.push(x.option), y.push(x), m++) : (p.push(void 0), y.push(void 0));
            }, this), i[h] = p, a.set(h, y), o.set(h, m), h === "series" && ds(this);
          }
          this._seriesIndices || ds(this);
        }, t.prototype.getOption = function() {
          var e = rt(this.option);
          return M(e, function(n, i) {
            if (it.hasClass(i)) {
              for (var a = qt(n), o = a.length, s = !1, l = o - 1; l >= 0; l--)
                a[l] && !$n(a[l]) ? s = !0 : (a[l] = null, !s && o--);
              a.length = o, e[i] = a;
            }
          }), delete e[pf], e;
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
          return i != null ? (l = [], M(qt(i), function(u) {
            s[u] && l.push(s[u]);
          })) : a != null ? l = Lp("id", a, s) : o != null ? l = Lp("name", o, s) : l = bt(s, function(u) {
            return !!u;
          }), Pp(l, e);
        }, t.prototype.findComponents = function(e) {
          var n = e.query, i = e.mainType, a = s(n), o = a ? this.queryComponents(a) : bt(this._componentsMap.get(i), function(u) {
            return !!u;
          });
          return l(Pp(o, e));
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
            return e.filter ? bt(u, e.filter) : u;
          }
        }, t.prototype.eachComponent = function(e, n, i) {
          var a = this._componentsMap;
          if (Y(e)) {
            var o = n, s = e;
            a.each(function(h, c) {
              for (var v = 0; h && v < h.length; v++) {
                var d = h[v];
                d && s.call(o, c, d, d.componentIndex);
              }
            });
          } else
            for (var l = G(e) ? a.get(e) : V(e) ? this.findComponents(e) : null, u = 0; l && u < l.length; u++) {
              var f = l[u];
              f && n.call(i, f, f.componentIndex);
            }
        }, t.prototype.getSeriesByName = function(e) {
          var n = qe(e, null);
          return bt(this._componentsMap.get("series"), function(i) {
            return !!i && n != null && i.name === n;
          });
        }, t.prototype.getSeriesByIndex = function(e) {
          return this._componentsMap.get("series")[e];
        }, t.prototype.getSeriesByType = function(e) {
          return bt(this._componentsMap.get("series"), function(n) {
            return !!n && n.subType === e;
          });
        }, t.prototype.getSeries = function() {
          return bt(this._componentsMap.get("series"), function(e) {
            return !!e;
          });
        }, t.prototype.getSeriesCount = function() {
          return this._componentsCount.get("series");
        }, t.prototype.eachSeries = function(e, n) {
          ca(this), M(this._seriesIndices, function(i) {
            var a = this._componentsMap.get("series")[i];
            e.call(n, a, i);
          }, this);
        }, t.prototype.eachRawSeries = function(e, n) {
          M(this._componentsMap.get("series"), function(i) {
            i && e.call(n, i, i.componentIndex);
          });
        }, t.prototype.eachSeriesByType = function(e, n, i) {
          ca(this), M(this._seriesIndices, function(a) {
            var o = this._componentsMap.get("series")[a];
            o.subType === e && n.call(i, o, a);
          }, this);
        }, t.prototype.eachRawSeriesByType = function(e, n, i) {
          return M(this.getSeriesByType(e), n, i);
        }, t.prototype.isSeriesFiltered = function(e) {
          return ca(this), this._seriesIndicesMap.get(e.componentIndex) == null;
        }, t.prototype.getCurrentSeriesIndices = function() {
          return (this._seriesIndices || []).slice();
        }, t.prototype.filterSeries = function(e, n) {
          ca(this);
          var i = [];
          M(this._seriesIndices, function(a) {
            var o = this._componentsMap.get("series")[a];
            e.call(n, o, a) && i.push(a);
          }, this), this._seriesIndices = i, this._seriesIndicesMap = j(i);
        }, t.prototype.restoreData = function(e) {
          ds(this);
          var n = this._componentsMap, i = [];
          n.each(function(a, o) {
            it.hasClass(o) && i.push(o);
          }), it.topologicalTravel(i, it.getAllClassMainTypes(), function(a) {
            M(n.get(a), function(o) {
              o && (a !== "series" || !ux(o, e)) && o.restoreData();
            });
          });
        }, t.internalField = function() {
          ds = function(e) {
            var n = e._seriesIndices = [];
            M(e._componentsMap.get("series"), function(i) {
              i && n.push(i.componentIndex);
            }), e._seriesIndicesMap = j(n);
          }, ca = function(e) {
            if (!e._seriesIndices)
              throw new Error("Option should contains series.");
          }, Mp = function(e, n) {
            e.option = {}, e.option[pf] = Ap, e._componentsMap = j({
              series: []
            }), e._componentsCount = j();
            var i = n.aria;
            V(i) && i.enabled == null && (i.enabled = !0), fx(n, e._theme.option), at(n, Kb, !1), e._mergeOption(n, null);
          };
        }(), t;
      }(mt)
    );
    function ux(r, t) {
      if (t) {
        var e = t.seriesIndex, n = t.seriesId, i = t.seriesName;
        return e != null && r.componentIndex !== e || n != null && r.id !== n || i != null && r.name !== i;
      }
    }
    function fx(r, t) {
      var e = r.color && !r.colorLayer;
      M(t, function(n, i) {
        i === "colorLayer" && e || it.hasClass(i) || (typeof n == "object" ? r[i] = r[i] ? at(r[i], n, !1) : rt(n) : r[i] == null && (r[i] = n));
      });
    }
    function Lp(r, t, e) {
      if (F(t)) {
        var n = j();
        return M(t, function(a) {
          if (a != null) {
            var o = qe(a, null);
            o != null && n.set(a, !0);
          }
        }), bt(e, function(a) {
          return a && n.get(a[r]);
        });
      } else {
        var i = qe(t, null);
        return bt(e, function(a) {
          return a && i != null && a[r] === i;
        });
      }
    }
    function Pp(r, t) {
      return t.hasOwnProperty("subType") ? bt(r, function(e) {
        return e && e.subType === t.subType;
      }) : r;
    }
    function Ip(r) {
      var t = j();
      return r && M(qt(r.replaceMerge), function(e) {
        Q(it.hasClass(e), '"' + e + '" is not valid component main type in "replaceMerge"'), t.set(e, !0);
      }), {
        replaceMergeMainTypeMap: t
      };
    }
    ge(gf, df);
    var hx = [
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
    ], Rp = (
      /** @class */
      function() {
        function r(t) {
          M(hx, function(e) {
            this[e] = dt(t[e], t);
          }, this);
        }
        return r;
      }()
    ), yf = {}, gs = (
      /** @class */
      function() {
        function r() {
          this._coordinateSystems = [];
        }
        return r.prototype.create = function(t, e) {
          var n = [];
          M(yf, function(i, a) {
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
          yf[t] = e;
        }, r.get = function(t) {
          return yf[t];
        }, r;
      }()
    ), vx = /^(min|max)?(.+)$/, cx = (
      /** @class */
      function() {
        function r(t) {
          this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = t;
        }
        return r.prototype.setOption = function(t, e, n) {
          t && (M(qt(t.series), function(o) {
            o && o.data && Ut(o.data) && wi(o.data);
          }), M(qt(t.dataset), function(o) {
            o && o.source && Ut(o.source) && wi(o.source);
          })), t = rt(t);
          var i = this._optionBackup, a = dx(t, e, !i);
          this._newBaseOption = a.baseOption, i ? (a.timelineOptions.length && (i.timelineOptions = a.timelineOptions), a.mediaList.length && (i.mediaList = a.mediaList), a.mediaDefault && (i.mediaDefault = a.mediaDefault)) : this._optionBackup = a;
        }, r.prototype.mountOption = function(t) {
          var e = this._optionBackup;
          return this._timelineOptions = e.timelineOptions, this._mediaList = e.mediaList, this._mediaDefault = e.mediaDefault, this._currentMediaIndices = [], rt(t ? e.baseOption : this._newBaseOption);
        }, r.prototype.getTimelineOption = function(t) {
          var e, n = this._timelineOptions;
          if (n.length) {
            var i = t.getComponent("timeline");
            i && (e = rt(
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
            px(i[l].query, e, n) && o.push(l);
          return !o.length && a && (o = [-1]), o.length && !yx(o, this._currentMediaIndices) && (s = H(o, function(f) {
            return rt(f === -1 ? a.option : i[f].option);
          })), this._currentMediaIndices = o, s;
        }, r;
      }()
    );
    function dx(r, t, e) {
      var n = [], i, a, o = r.baseOption, s = r.timeline, l = r.options, u = r.media, f = !!r.media, h = !!(l || s || o && o.timeline);
      o ? (a = o, a.timeline || (a.timeline = s)) : ((h || f) && (r.options = r.media = null), a = r), f && (F(u) ? M(u, function(v) {
        v && !v.option && V(v.query) && V(v.query.option) && Ft("Illegal media option. Must be like { media: [ { query: {}, option: {} } ] }"), v && v.option && (v.query ? n.push(v) : i || (i = v));
      }) : Ft("Illegal media option. Must be an array. Like { media: [ {...}, {...} ] }")), c(a), M(l, function(v) {
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
    function px(r, t, e) {
      var n = {
        width: t,
        height: e,
        aspectratio: t / e
        // lower case for convenience.
      }, i = !0;
      return M(r, function(a, o) {
        var s = o.match(vx);
        if (!(!s || !s[1] || !s[2])) {
          var l = s[1], u = s[2].toLowerCase();
          gx(n[u], a, l) || (i = !1);
        }
      }), i;
    }
    function gx(r, t, e) {
      return e === "min" ? r >= t : e === "max" ? r <= t : r === t;
    }
    function yx(r, t) {
      return r.join(",") === t.join(",");
    }
    var Ae = M, da = V, Ep = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
    function mf(r) {
      var t = r && r.itemStyle;
      if (t)
        for (var e = 0, n = Ep.length; e < n; e++) {
          var i = Ep[e], a = t.normal, o = t.emphasis;
          a && a[i] && (Mt("itemStyle.normal." + i, i), r[i] = r[i] || {}, r[i].normal ? at(r[i].normal, a[i]) : r[i].normal = a[i], a[i] = null), o && o[i] && (Mt("itemStyle.emphasis." + i, "emphasis." + i), r[i] = r[i] || {}, r[i].emphasis ? at(r[i].emphasis, o[i]) : r[i].emphasis = o[i], o[i] = null);
        }
    }
    function Ht(r, t, e) {
      if (r && r[t] && (r[t].normal || r[t].emphasis)) {
        var n = r[t].normal, i = r[t].emphasis;
        n && (Oe("'normal' hierarchy in " + t + " has been removed since 4.0. All style properties are configured in " + t + " directly now."), e ? (r[t].normal = r[t].emphasis = null, st(r[t], n)) : r[t] = n), i && (Oe(t + ".emphasis has been changed to emphasis." + t + " since 4.0"), r.emphasis = r.emphasis || {}, r.emphasis[t] = i, i.focus && (r.emphasis.focus = i.focus), i.blurScope && (r.emphasis.blurScope = i.blurScope));
      }
    }
    function pa(r) {
      Ht(r, "itemStyle"), Ht(r, "lineStyle"), Ht(r, "areaStyle"), Ht(r, "label"), Ht(r, "labelLine"), Ht(r, "upperLabel"), Ht(r, "edgeLabel");
    }
    function Ct(r, t) {
      var e = da(r) && r[t], n = da(e) && e.textStyle;
      if (n) {
        Oe("textStyle hierarchy in " + t + " has been removed since 4.0. All textStyle properties are configured in " + t + " directly now.");
        for (var i = 0, a = xc.length; i < a; i++) {
          var o = xc[i];
          n.hasOwnProperty(o) && (e[o] = n[o]);
        }
      }
    }
    function Le(r) {
      r && (pa(r), Ct(r, "label"), r.emphasis && Ct(r.emphasis, "label"));
    }
    function mx(r) {
      if (da(r)) {
        mf(r), pa(r), Ct(r, "label"), Ct(r, "upperLabel"), Ct(r, "edgeLabel"), r.emphasis && (Ct(r.emphasis, "label"), Ct(r.emphasis, "upperLabel"), Ct(r.emphasis, "edgeLabel"));
        var t = r.markPoint;
        t && (mf(t), Le(t));
        var e = r.markLine;
        e && (mf(e), Le(e));
        var n = r.markArea;
        n && Le(n);
        var i = r.data;
        if (r.type === "graph") {
          i = i || r.nodes;
          var a = r.links || r.edges;
          if (a && !Ut(a))
            for (var o = 0; o < a.length; o++)
              Le(a[o]);
          M(r.categories, function(u) {
            pa(u);
          });
        }
        if (i && !Ut(i))
          for (var o = 0; o < i.length; o++)
            Le(i[o]);
        if (t = r.markPoint, t && t.data)
          for (var s = t.data, o = 0; o < s.length; o++)
            Le(s[o]);
        if (e = r.markLine, e && e.data)
          for (var l = e.data, o = 0; o < l.length; o++)
            F(l[o]) ? (Le(l[o][0]), Le(l[o][1])) : Le(l[o]);
        r.type === "gauge" ? (Ct(r, "axisLabel"), Ct(r, "title"), Ct(r, "detail")) : r.type === "treemap" ? (Ht(r.breadcrumb, "itemStyle"), M(r.levels, function(u) {
          pa(u);
        })) : r.type === "tree" && pa(r.leaves);
      }
    }
    function pr(r) {
      return F(r) ? r : r ? [r] : [];
    }
    function kp(r) {
      return (F(r) ? r[0] : r) || {};
    }
    function _x(r, t) {
      Ae(pr(r.series), function(n) {
        da(n) && mx(n);
      });
      var e = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
      t && e.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), Ae(e, function(n) {
        Ae(pr(r[n]), function(i) {
          i && (Ct(i, "axisLabel"), Ct(i.axisPointer, "label"));
        });
      }), Ae(pr(r.parallel), function(n) {
        var i = n && n.parallelAxisDefault;
        Ct(i, "axisLabel"), Ct(i && i.axisPointer, "label");
      }), Ae(pr(r.calendar), function(n) {
        Ht(n, "itemStyle"), Ct(n, "dayLabel"), Ct(n, "monthLabel"), Ct(n, "yearLabel");
      }), Ae(pr(r.radar), function(n) {
        Ct(n, "name"), n.name && n.axisName == null && (n.axisName = n.name, delete n.name, Oe("name property in radar component has been changed to axisName")), n.nameGap != null && n.axisNameGap == null && (n.axisNameGap = n.nameGap, delete n.nameGap, Oe("nameGap property in radar component has been changed to axisNameGap")), Ae(n.indicator, function(i) {
          i.text && Mt("text", "name", "radar.indicator");
        });
      }), Ae(pr(r.geo), function(n) {
        da(n) && (Le(n), Ae(pr(n.regions), function(i) {
          Le(i);
        }));
      }), Ae(pr(r.timeline), function(n) {
        Le(n), Ht(n, "label"), Ht(n, "itemStyle"), Ht(n, "controlStyle", !0);
        var i = n.data;
        F(i) && M(i, function(a) {
          V(a) && (Ht(a, "label"), Ht(a, "itemStyle"));
        });
      }), Ae(pr(r.toolbox), function(n) {
        Ht(n, "iconStyle"), Ae(n.feature, function(i) {
          Ht(i, "iconStyle");
        });
      }), Ct(kp(r.axisPointer), "label"), Ct(kp(r.tooltip).axisPointer, "label");
    }
    function Sx(r, t) {
      for (var e = t.split(","), n = r, i = 0; i < e.length && (n = n && n[e[i]], n != null); i++)
        ;
      return n;
    }
    function bx(r, t, e, n) {
      for (var i = t.split(","), a = r, o, s = 0; s < i.length - 1; s++)
        o = i[s], a[o] == null && (a[o] = {}), a = a[o];
      (n || a[i[s]] == null) && (a[i[s]] = e);
    }
    function Op(r) {
      r && M(xx, function(t) {
        t[0] in r && !(t[1] in r) && (r[t[1]] = r[t[0]]);
      });
    }
    var xx = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]], Tx = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"], _f = [["borderRadius", "barBorderRadius"], ["borderColor", "barBorderColor"], ["borderWidth", "barBorderWidth"]];
    function ga(r) {
      var t = r && r.itemStyle;
      if (t)
        for (var e = 0; e < _f.length; e++) {
          var n = _f[e][1], i = _f[e][0];
          t[n] != null && (t[i] = t[n], Mt(n, i));
        }
    }
    function Bp(r) {
      r && r.alignTo === "edge" && r.margin != null && r.edgeDistance == null && (Mt("label.margin", "label.edgeDistance", "pie"), r.edgeDistance = r.margin);
    }
    function Np(r) {
      r && r.downplay && !r.blur && (r.blur = r.downplay, Mt("downplay", "blur", "sunburst"));
    }
    function Cx(r) {
      r && r.focusNodeAdjacency != null && (r.emphasis = r.emphasis || {}, r.emphasis.focus == null && (Mt("focusNodeAdjacency", "emphasis: { focus: 'adjacency'}", "graph/sankey"), r.emphasis.focus = "adjacency"));
    }
    function Fp(r, t) {
      if (r)
        for (var e = 0; e < r.length; e++)
          t(r[e]), r[e] && Fp(r[e].children, t);
    }
    function zp(r, t) {
      _x(r, t), r.series = qt(r.series), M(r.series, function(e) {
        if (V(e)) {
          var n = e.type;
          if (n === "line")
            e.clipOverflow != null && (e.clip = e.clipOverflow, Mt("clipOverflow", "clip", "line"));
          else if (n === "pie" || n === "gauge") {
            e.clockWise != null && (e.clockwise = e.clockWise, Mt("clockWise", "clockwise")), Bp(e.label);
            var i = e.data;
            if (i && !Ut(i))
              for (var a = 0; a < i.length; a++)
                Bp(i[a]);
            e.hoverOffset != null && (e.emphasis = e.emphasis || {}, (e.emphasis.scaleSize = null) && (Mt("hoverOffset", "emphasis.scaleSize"), e.emphasis.scaleSize = e.hoverOffset));
          } else if (n === "gauge") {
            var o = Sx(e, "pointer.color");
            o != null && bx(e, "itemStyle.color", o);
          } else if (n === "bar") {
            ga(e), ga(e.backgroundStyle), ga(e.emphasis);
            var i = e.data;
            if (i && !Ut(i))
              for (var a = 0; a < i.length; a++)
                typeof i[a] == "object" && (ga(i[a]), ga(i[a] && i[a].emphasis));
          } else if (n === "sunburst") {
            var s = e.highlightPolicy;
            s && (e.emphasis = e.emphasis || {}, e.emphasis.focus || (e.emphasis.focus = s, Mt("highlightPolicy", "emphasis.focus", "sunburst"))), Np(e), Fp(e.data, Np);
          } else
            n === "graph" || n === "sankey" ? Cx(e) : n === "map" && (e.mapType && !e.map && (Mt("mapType", "map", "map"), e.map = e.mapType), e.mapLocation && (Oe("`mapLocation` is not used anymore."), st(e, e.mapLocation)));
          e.hoverAnimation != null && (e.emphasis = e.emphasis || {}, e.emphasis && e.emphasis.scale == null && (Mt("hoverAnimation", "emphasis.scale"), e.emphasis.scale = e.hoverAnimation)), Op(e);
        }
      }), r.dataRange && (r.visualMap = r.dataRange), M(Tx, function(e) {
        var n = r[e];
        n && (F(n) || (n = [n]), M(n, function(i) {
          Op(i);
        }));
      });
    }
    function Dx(r) {
      var t = j();
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
      }), t.each(Mx);
    }
    function Mx(r) {
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
                c = J1(c, m), g = m;
                break;
              }
            }
          }
          return n[0] = c, n[1] = g, n;
        });
      });
    }
    var ys = (
      /** @class */
      function() {
        function r(t) {
          this.data = t.data || (t.sourceFormat === Je ? {} : []), this.sourceFormat = t.sourceFormat || bp, this.seriesLayoutBy = t.seriesLayoutBy || tr, this.startIndex = t.startIndex || 0, this.dimensionsDetectedCount = t.dimensionsDetectedCount, this.metaRawOption = t.metaRawOption;
          var e = this.dimensionsDefine = t.dimensionsDefine;
          if (e)
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              i.type == null && Tp(this, n) === kt.Must && (i.type = "ordinal");
            }
        }
        return r;
      }()
    );
    function Sf(r) {
      return r instanceof ys;
    }
    function wf(r, t, e) {
      e = e || Gp(r);
      var n = t.seriesLayoutBy, i = Lx(r, e, n, t.sourceHeader, t.dimensions), a = new ys({
        data: r,
        sourceFormat: e,
        seriesLayoutBy: n,
        dimensionsDefine: i.dimensionsDefine,
        startIndex: i.startIndex,
        dimensionsDetectedCount: i.dimensionsDetectedCount,
        metaRawOption: rt(t)
      });
      return a;
    }
    function bf(r) {
      return new ys({
        data: r,
        sourceFormat: Ut(r) ? dr : Me
      });
    }
    function Ax(r) {
      return new ys({
        data: r.data,
        sourceFormat: r.sourceFormat,
        seriesLayoutBy: r.seriesLayoutBy,
        dimensionsDefine: rt(r.dimensionsDefine),
        startIndex: r.startIndex,
        dimensionsDetectedCount: r.dimensionsDetectedCount
      });
    }
    function Gp(r) {
      var t = bp;
      if (Ut(r))
        t = dr;
      else if (F(r)) {
        r.length === 0 && (t = re);
        for (var e = 0, n = r.length; e < n; e++) {
          var i = r[e];
          if (i != null) {
            if (F(i)) {
              t = re;
              break;
            } else if (V(i)) {
              t = Fe;
              break;
            }
          }
        }
      } else if (V(r)) {
        for (var a in r)
          if (qr(r, a) && Wt(r[a])) {
            t = Je;
            break;
          }
      }
      return t;
    }
    function Lx(r, t, e, n, i) {
      var a, o;
      if (!r)
        return {
          dimensionsDefine: Hp(i),
          startIndex: o,
          dimensionsDetectedCount: a
        };
      if (t === re) {
        var s = r;
        n === "auto" || n == null ? Vp(function(u) {
          u != null && u !== "-" && (G(u) ? o == null && (o = 1) : o = 0);
        }, e, s, 10) : o = ct(n) ? n : n ? 1 : 0, !i && o === 1 && (i = [], Vp(function(u, f) {
          i[f] = u != null ? u + "" : "";
        }, e, s, 1 / 0)), a = i ? i.length : e === ui ? s.length : s[0] ? s[0].length : null;
      } else if (t === Fe)
        i || (i = Px(r));
      else if (t === Je)
        i || (i = [], M(r, function(u, f) {
          i.push(f);
        }));
      else if (t === Me) {
        var l = Hi(r[0]);
        a = F(l) && l.length || 1;
      } else
        t === dr && Q(!!i, "dimensions must be given if data is TypedArray.");
      return {
        startIndex: o,
        dimensionsDefine: Hp(i),
        dimensionsDetectedCount: a
      };
    }
    function Px(r) {
      for (var t = 0, e; t < r.length && !(e = r[t++]); )
        ;
      if (e)
        return pt(e);
    }
    function Hp(r) {
      if (r) {
        var t = j();
        return H(r, function(e, n) {
          e = V(e) ? e : {
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
    function Vp(r, t, e, n) {
      if (t === ui)
        for (var i = 0; i < e.length && i < n; i++)
          r(e[i] ? e[i][0] : null, i);
      else
        for (var a = e[0] || [], i = 0; i < a.length && i < n; i++)
          r(a[i], i);
    }
    function Wp(r) {
      var t = r.sourceFormat;
      return t === Fe || t === Je;
    }
    var bn, xn, Tn, Up, Yp, Xp = (
      /** @class */
      function() {
        function r(t, e) {
          var n = Sf(t) ? t : bf(t);
          this._source = n;
          var i = this._data = n.data;
          if (n.sourceFormat === dr) {
            if (e == null)
              throw new Error("Typed array data must specify dimension size");
            this._offset = 0, this._dimSize = e, this._data = i;
          }
          Yp(this, i, n);
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
          Yp = function(o, s, l) {
            var u = l.sourceFormat, f = l.seriesLayoutBy, h = l.startIndex, c = l.dimensionsDefine, v = Up[Tf(u, f)];
            if (Q(v, "Invalide sourceFormat: " + u), k(o, v), u === dr)
              o.getItem = e, o.count = i, o.fillStorage = n;
            else {
              var d = Zp(u, f);
              o.getItem = dt(d, null, s, h, c);
              var g = Kp(u, f);
              o.count = dt(g, null, s, h, c);
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
          Up = (t = {}, t[re + "_" + tr] = {
            pure: !0,
            appendData: a
          }, t[re + "_" + ui] = {
            pure: !0,
            appendData: function() {
              throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
            }
          }, t[Fe] = {
            pure: !0,
            appendData: a
          }, t[Je] = {
            pure: !0,
            appendData: function(o) {
              var s = this._data;
              M(o, function(l, u) {
                for (var f = s[u] || (s[u] = []), h = 0; h < (l || []).length; h++)
                  f.push(l[h]);
              });
            }
          }, t[Me] = {
            appendData: a
          }, t[dr] = {
            persistent: !1,
            pure: !0,
            appendData: function(o) {
              Q(Ut(o), "Added data must be TypedArray if data in initialization is TypedArray"), this._data = o;
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
    ), qp = function(r, t, e, n) {
      return r[n];
    }, Ix = (bn = {}, bn[re + "_" + tr] = function(r, t, e, n) {
      return r[n + t];
    }, bn[re + "_" + ui] = function(r, t, e, n, i) {
      n += t;
      for (var a = i || [], o = r, s = 0; s < o.length; s++) {
        var l = o[s];
        a[s] = l ? l[n] : null;
      }
      return a;
    }, bn[Fe] = qp, bn[Je] = function(r, t, e, n, i) {
      for (var a = i || [], o = 0; o < e.length; o++) {
        var s = e[o].name;
        if (s == null)
          throw new Error();
        var l = r[s];
        a[o] = l ? l[n] : null;
      }
      return a;
    }, bn[Me] = qp, bn);
    function Zp(r, t) {
      var e = Ix[Tf(r, t)];
      return Q(e, 'Do not support get item on "' + r + '", "' + t + '".'), e;
    }
    var $p = function(r, t, e) {
      return r.length;
    }, Rx = (xn = {}, xn[re + "_" + tr] = function(r, t, e) {
      return Math.max(0, r.length - t);
    }, xn[re + "_" + ui] = function(r, t, e) {
      var n = r[0];
      return n ? Math.max(0, n.length - t) : 0;
    }, xn[Fe] = $p, xn[Je] = function(r, t, e) {
      var n = e[0].name;
      if (n == null)
        throw new Error();
      var i = r[n];
      return i ? i.length : 0;
    }, xn[Me] = $p, xn);
    function Kp(r, t) {
      var e = Rx[Tf(r, t)];
      return Q(e, 'Do not support count on "' + r + '", "' + t + '".'), e;
    }
    var xf = function(r, t, e) {
      return r[t];
    }, Ex = (Tn = {}, Tn[re] = xf, Tn[Fe] = function(r, t, e) {
      return r[e];
    }, Tn[Je] = xf, Tn[Me] = function(r, t, e) {
      var n = Hi(r);
      return n instanceof Array ? n[t] : n;
    }, Tn[dr] = xf, Tn);
    function Qp(r) {
      var t = Ex[r];
      return Q(t, 'Do not support get value on "' + r + '".'), t;
    }
    function Tf(r, t) {
      return r === re ? r + "_" + t : r;
    }
    function fi(r, t, e) {
      if (r) {
        var n = r.getRawDataItem(t);
        if (n != null) {
          var i = r.getStore(), a = i.getSource().sourceFormat;
          if (e != null) {
            var o = r.getDimensionIndex(e), s = i.getDimensionProperty(o);
            return Qp(a)(n, o, s);
          } else {
            var l = n;
            return a === Me && (l = Hi(n)), l;
          }
        }
      }
    }
    var kx = /\{@(.+?)\}/g, Ox = (
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
          if (Y(a))
            return l.status = e, l.dimensionIndex = i, a(l);
          if (G(a)) {
            var f = ff(a, l);
            return f.replace(kx, function(h, c) {
              var v = c.length, d = c;
              d.charAt(0) === "[" && d.charAt(v - 1) === "]" && (d = +d.slice(1, v - 1), isNaN(d) && Ft("Invalide label formatter: @" + c + ", only support @[0], @[1], @[2], ..."));
              var g = fi(s, t, d);
              if (o && F(o.interpolatedValue)) {
                var p = s.getDimensionIndex(d);
                p >= 0 && (g = o.interpolatedValue[p]);
              }
              return g != null ? g + "" : "";
            });
          }
        }, r.prototype.getRawValue = function(t, e) {
          return fi(this.getData(e), t);
        }, r.prototype.formatTooltip = function(t, e, n) {
        }, r;
      }()
    );
    function jp(r) {
      var t, e;
      return V(r) ? r.type ? e = r : console.warn("The return type of `formatTooltip` is not supported: " + wo(r)) : t = r, {
        text: t,
        // markers: markers || markersExisting,
        frag: e
      };
    }
    function ya(r) {
      return new Bx(r);
    }
    var Bx = (
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
          if (e ? (Q(e._outputDueEnd != null), this._dueEnd = e._outputDueEnd) : (Q(!this._progress || this._count), this._dueEnd = this._count ? this._count(this.context) : 1 / 0), this._progress) {
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
            Q(y >= this._outputDueEnd), this._outputDueEnd = y;
          } else
            this._dueIndex = this._outputDueEnd = this._settedOutputEnd != null ? this._settedOutputEnd : this._dueEnd;
          return this.unfinished();
        }, r.prototype.dirty = function() {
          this._dirty = !0, this._onDirty && this._onDirty(this.context);
        }, r.prototype._doProgress = function(t, e, n, i, a) {
          Jp.reset(e, n, i, a), this._callingProgress = t, this._callingProgress({
            start: e,
            end: n,
            count: n - e,
            next: Jp.next
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
          Q(t && !t._disposed && t !== this), (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty());
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
    ), Jp = function() {
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
    function ms(r, t) {
      var e = t && t.type;
      return e === "ordinal" ? r : (e === "time" && !ct(r) && r != null && r !== "-" && (r = +Se(r)), r == null || r === "" ? NaN : +r);
    }
    j({
      number: function(r) {
        return parseFloat(r);
      },
      time: function(r) {
        return +Se(r);
      },
      trim: function(r) {
        return G(r) ? Re(r) : r;
      }
    });
    var Nx = (
      /** @class */
      function() {
        function r(t, e) {
          var n = t === "desc";
          this._resultLT = n ? 1 : -1, e == null && (e = n ? "min" : "max"), this._incomparable = e === "min" ? -1 / 0 : 1 / 0;
        }
        return r.prototype.evaluate = function(t, e) {
          var n = ct(t) ? t : Gi(t), i = ct(e) ? e : Gi(e), a = isNaN(n), o = isNaN(i);
          if (a && (n = this._incomparable), o && (i = this._incomparable), a && o) {
            var s = G(t), l = G(e);
            s && (n = l ? t : 0), l && (i = s ? e : 0);
          }
          return n < i ? this._resultLT : n > i ? -this._resultLT : 0;
        }, r;
      }()
    ), Fx = (
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
          return ms(t, e);
        }, r;
      }()
    );
    function zx(r, t) {
      var e = new Fx(), n = r.data, i = e.sourceFormat = r.sourceFormat, a = r.startIndex, o = "";
      r.seriesLayoutBy !== tr && (o = '`seriesLayoutBy` of upstream dataset can only be "column" in data transform.', Jt(o));
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
            qr(l, y) && (_ = 'dimension name "' + y + '" duplicated.', Jt(_)), l[y] = m;
          }
        });
      else
        for (var f = 0; f < r.dimensionsDetectedCount; f++)
          s.push({
            index: f
          });
      var h = Zp(i, tr);
      t.__isBuiltIn && (e.getRawDataItem = function(g) {
        return h(n, a, s, g);
      }, e.getRawData = dt(Gx, null, r)), e.cloneRawData = dt(Hx, null, r);
      var c = Kp(i, tr);
      e.count = dt(c, null, n, a, s);
      var v = Qp(i);
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
      return e.getDimensionInfo = dt(Vx, null, s, l), e.cloneAllDimensionInfo = dt(Wx, null, s), e;
    }
    function Gx(r) {
      var t = r.sourceFormat;
      if (!Cf(t)) {
        var e = "";
        e = "`getRawData` is not supported in source format " + t, Jt(e);
      }
      return r.data;
    }
    function Hx(r) {
      var t = r.sourceFormat, e = r.data;
      if (!Cf(t)) {
        var n = "";
        n = "`cloneRawData` is not supported in source format " + t, Jt(n);
      }
      if (t === re) {
        for (var i = [], a = 0, o = e.length; a < o; a++)
          i.push(e[a].slice());
        return i;
      } else if (t === Fe) {
        for (var i = [], a = 0, o = e.length; a < o; a++)
          i.push(k({}, e[a]));
        return i;
      }
    }
    function Vx(r, t, e) {
      if (e != null) {
        if (ct(e) || !isNaN(e) && !qr(t, e))
          return r[e];
        if (qr(t, e))
          return t[e];
      }
    }
    function Wx(r) {
      return rt(r);
    }
    var tg = j();
    function Ux(r) {
      r = rt(r);
      var t = r.type, e = "";
      t || (e = "Must have a `type` when `registerTransform`.", Jt(e));
      var n = t.split(":");
      n.length !== 2 && (e = 'Name must include namespace like "ns:regression".', Jt(e));
      var i = !1;
      n[0] === "echarts" && (t = n[1], i = !0), r.__isBuiltIn = i, tg.set(t, r);
    }
    function Yx(r, t, e) {
      var n = qt(r), i = n.length, a = "";
      i || (a = "If `transform` declared, it should at least contain one transform.", Jt(a));
      for (var o = 0, s = i; o < s; o++) {
        var l = n[o];
        t = Xx(l, t, e, i === 1 ? null : o), o !== s - 1 && (t.length = Math.max(t.length, 1));
      }
      return t;
    }
    function Xx(r, t, e, n) {
      var i = "";
      t.length || (i = "Must have at least one upstream dataset.", Jt(i)), V(r) || (i = "transform declaration must be an object rather than " + typeof r + ".", Jt(i));
      var a = r.type, o = tg.get(a);
      o || (i = 'Can not find transform on type "' + a + '".', Jt(i));
      var s = H(t, function(f) {
        return zx(f, o);
      }), l = qt(o.transform({
        upstream: s[0],
        upstreamList: s,
        config: rt(r.config)
      }));
      if (r.print) {
        var u = H(l, function(f) {
          var h = n != null ? " === pipe index: " + n : "";
          return ["=== dataset index: " + e.datasetIndex + h + " ===", "- transform result data:", wo(f.data), "- transform result dimensions:", wo(f.dimensions)].join(`
`);
        }).join(`
`);
        oS(u);
      }
      return H(l, function(f, h) {
        var c = "";
        V(f) || (c = "A transform should not return some empty results.", Jt(c)), f.data || (c = "Transform result data should be not be null or undefined", Jt(c));
        var v = Gp(f.data);
        Cf(v) || (c = "Transform result data should be array rows or object rows.", Jt(c));
        var d, g = t[0];
        if (g && h === 0 && !f.dimensions) {
          var p = g.startIndex;
          p && (f.data = g.data.slice(0, p).concat(f.data)), d = {
            seriesLayoutBy: tr,
            sourceHeader: p,
            dimensions: g.metaRawOption.dimensions
          };
        } else
          d = {
            seriesLayoutBy: tr,
            sourceHeader: 0,
            dimensions: f.dimensions
          };
        return wf(f.data, d, null);
      });
    }
    function Cf(r) {
      return r === re || r === Fe;
    }
    var _s = "undefined", qx = typeof Uint32Array === _s ? Array : Uint32Array, Zx = typeof Uint16Array === _s ? Array : Uint16Array, eg = typeof Int32Array === _s ? Array : Int32Array, rg = typeof Float64Array === _s ? Array : Float64Array, ng = {
      float: rg,
      int: eg,
      // Ordinal data type can be string or int
      ordinal: Array,
      number: Array,
      time: rg
    }, Df;
    function ma(r) {
      return r > 65535 ? qx : Zx;
    }
    function hi() {
      return [1 / 0, -1 / 0];
    }
    function $x(r) {
      var t = r.constructor;
      return t === Array ? r.slice() : new t(r);
    }
    function ig(r, t, e, n, i) {
      var a = ng[e || "float"];
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
    var Mf = (
      /** @class */
      function() {
        function r() {
          this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = j();
        }
        return r.prototype.initData = function(t, e, n) {
          Q(Y(t.getItem) && Y(t.count), "Invalid data provider."), this._provider = t, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
          var i = t.getSource(), a = this.defaultDimValueGetter = Df[i.sourceFormat];
          this._dimValueGetter = n || a, this._rawExtent = [];
          var o = Wp(i);
          this._dimensions = H(e, function(s) {
            return o && Q(s.property != null), {
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
          }, n.set(t, a), this._chunks[a] = new ng[e || "float"](this._rawCount), this._rawExtent[a] = hi(), a;
        }, r.prototype.collectOrdinalMeta = function(t, e) {
          var n = this._chunks[t], i = this._dimensions[t], a = this._rawExtent, o = i.ordinalOffset || 0, s = n.length;
          o === 0 && (a[t] = hi());
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
          Q(!this._indices, "appendData can only be called on raw data.");
          var e = this._provider, n = this.count();
          e.appendData(t);
          var i = e.count();
          return e.persistent || (i += n), n < i && this._initDataFromProvider(n, i, !0), [n, i];
        }, r.prototype.appendValues = function(t, e) {
          for (var n = this._chunks, i = this._dimensions, a = i.length, o = this._rawExtent, s = this.count(), l = s + Math.max(t.length, e || 0), u = 0; u < a; u++) {
            var f = i[u];
            ig(n, u, f.type, l, !0);
          }
          for (var h = [], c = s; c < l; c++)
            for (var v = c - s, d = 0; d < a; d++) {
              var f = i[d], g = Df.arrayRows.call(this, t[v] || h, f.property, v, d);
              n[d][c] = g;
              var p = o[d];
              g < p[0] && (p[0] = g), g > p[1] && (p[1] = g);
            }
          return this._rawCount = this._count = l, {
            start: s,
            end: l
          };
        }, r.prototype._initDataFromProvider = function(t, e, n) {
          for (var i = this._provider, a = this._chunks, o = this._dimensions, s = o.length, l = this._rawExtent, u = H(o, function(m) {
            return m.property;
          }), f = 0; f < s; f++) {
            var h = o[f];
            l[f] || (l[f] = hi()), ig(a, f, h.type, e, n);
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
            var n = ma(this._rawCount);
            t = new n(this.count());
            for (var a = 0; a < t.length; a++)
              t[a] = a;
          }
          return t;
        }, r.prototype.filter = function(t, e) {
          if (!this._count)
            return this;
          for (var n = this.clone(), i = n.count(), a = ma(n._rawCount), o = new a(i), s = [], l = t.length, u = 0, f = t[0], h = n._chunks, c = 0; c < i; c++) {
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
          var i = pt(t), a = i.length;
          if (!a)
            return this;
          var o = e.count(), s = ma(e._rawCount), l = new s(o), u = 0, f = i[0], h = t[f][0], c = t[f][1], v = e._chunks, d = !1;
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
            u[e[f]] = hi();
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
          var n = this.clone([t], !0), i = n._chunks, a = i[t], o = this.count(), s = 0, l = Math.floor(1 / e), u = this.getRawIndex(0), f, h, c, v = new (ma(this._rawCount))(Math.min((Math.ceil(o / l) + 2) * 2, o));
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
          for (var a = this.clone([t], !0), o = a._chunks, s = [], l = Math.floor(1 / e), u = o[t], f = this.count(), h = a._rawExtent[t] = hi(), c = new (ma(this._rawCount))(Math.ceil(f / l)), v = 0, d = 0; d < f; d += l) {
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
          var e = this._chunks[t], n = hi();
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
          var n = new r(), i = this._chunks, a = t && We(t, function(s, l) {
            return s[l] = !0, s;
          }, {});
          if (a)
            for (var o = 0; o < i.length; o++)
              n._chunks[o] = a[o] ? $x(i[o]) : i[o];
          else
            n._chunks = i;
          return this._copyCommonProps(n), e || (n._indices = this._cloneIndices()), n._updateGetRawIdx(), n;
        }, r.prototype._copyCommonProps = function(t) {
          t._count = this._count, t._rawCount = this._rawCount, t._provider = this._provider, t._dimensions = this._dimensions, t._extent = rt(this._extent), t._rawExtent = rt(this._rawExtent);
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
            return ms(e[a], this._dimensions[a]);
          }
          Df = {
            arrayRows: t,
            objectRows: function(e, n, i, a) {
              return ms(e[n], this._dimensions[a]);
            },
            keyedColumns: t,
            original: function(e, n, i, a) {
              var o = e && (e.value == null ? e : e.value);
              return ms(o instanceof Array ? o[a] : o, this._dimensions[a]);
            },
            typedArray: function(e, n, i, a) {
              return e[a];
            }
          };
        }(), r;
      }()
    ), ag = (
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
          if (_a(t)) {
            var o = t, s = void 0, l = void 0, u = void 0;
            if (n) {
              var f = e[0];
              f.prepareSource(), u = f.getSource(), s = u.data, l = u.sourceFormat, a = [f._getVersionSign()];
            } else
              s = o.get("data", !0), l = Ut(s) ? dr : Me, a = [];
            var h = this._getSourceMetaRawOption() || {}, c = u && u.metaRawOption || {}, v = J(h.seriesLayoutBy, c.seriesLayoutBy) || null, d = J(h.sourceHeader, c.sourceHeader), g = J(h.dimensions, c.dimensions), p = v !== c.seriesLayoutBy || !!d != !!c.sourceHeader || g;
            i = p ? [wf(s, {
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
              i = [wf(_, this._getSourceMetaRawOption(), null)], a = [];
            }
          }
          Q(i && a), this._setLocalSource(i, a);
        }, r.prototype._applyTransform = function(t) {
          var e = this._sourceHost, n = e.get("transform", !0), i = e.get("fromTransformResult", !0);
          if (Q(i != null || n != null), i != null) {
            var a = "";
            t.length !== 1 && (a = "When using `fromTransformResult`, there should be only one upstream dataset", sg(a));
          }
          var o, s = [], l = [];
          return M(t, function(u) {
            u.prepareSource();
            var f = u.getSource(i || 0), h = "";
            i != null && !f && (h = "Can not retrieve result by `fromTransformResult`: " + i, sg(h)), s.push(f), l.push(u._getVersionSign());
          }), n ? o = Yx(n, s, {
            datasetIndex: e.componentIndex
          }) : i != null && (o = [Ax(s[0])]), {
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
          Q(_a(this._sourceHost), "Can only call getDataStore on series source manager.");
          var e = t.makeStoreSchema();
          return this._innerGetDataStore(e.dimensions, t.source, e.hash);
        }, r.prototype._innerGetDataStore = function(t, e, n) {
          var i = 0, a = this._storeList, o = a[i];
          o || (o = a[i] = {});
          var s = o[n];
          if (!s) {
            var l = this._getUpstreamSourceManagers()[0];
            _a(this._sourceHost) && l ? s = l._innerGetDataStore(t, e, n) : (s = new Mf(), s.initData(new Xp(e, t.length), t)), o[n] = s;
          }
          return s;
        }, r.prototype._getUpstreamSourceManagers = function() {
          var t = this._sourceHost;
          if (_a(t)) {
            var e = cf(t);
            return e ? [e.getSourceManager()] : [];
          } else
            return H(tx(t), function(n) {
              return n.getSourceManager();
            });
        }, r.prototype._getSourceMetaRawOption = function() {
          var t = this._sourceHost, e, n, i;
          if (_a(t))
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
    function og(r) {
      var t = r.option.transform;
      t && wi(r.option.transform);
    }
    function _a(r) {
      return r.mainType === "series";
    }
    function sg(r) {
      throw new Error(r);
    }
    var lg = "line-height:1";
    function ug(r, t) {
      var e = r.color || "#6e7079", n = r.fontSize || 12, i = r.fontWeight || "400", a = r.color || "#464646", o = r.fontSize || 14, s = r.fontWeight || "900";
      return t === "html" ? {
        // eslint-disable-next-line max-len
        nameStyle: "font-size:" + le(n + "") + "px;color:" + le(e) + ";font-weight:" + le(i + ""),
        // eslint-disable-next-line max-len
        valueStyle: "font-size:" + le(o + "") + "px;color:" + le(a) + ";font-weight:" + le(s + "")
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
    var Kx = [0, 10, 20, 30], Qx = ["", `
`, `

`, `


`];
    function Sa(r, t) {
      return t.type = r, t;
    }
    function Af(r) {
      return r.type === "section";
    }
    function fg(r) {
      return Af(r) ? jx : Jx;
    }
    function hg(r) {
      if (Af(r)) {
        var t = 0, e = r.blocks.length, n = e > 1 || e > 0 && !r.noHeader;
        return M(r.blocks, function(i) {
          var a = hg(i);
          a >= t && (t = a + +(n && // 0 always can not be readable gap level.
          (!a || Af(i) && !i.noHeader)));
        }), t;
      }
      return 0;
    }
    function jx(r, t, e, n) {
      var i = t.noHeader, a = tT(hg(t)), o = [], s = t.blocks || [];
      Q(!s || F(s)), s = s || [];
      var l = r.orderMode;
      if (t.sortBlocks && l) {
        s = s.slice();
        var u = {
          valueAsc: "asc",
          valueDesc: "desc"
        };
        if (qr(u, l)) {
          var f = new Nx(u[l], null);
          s.sort(function(d, g) {
            return f.evaluate(d.sortParam, g.sortParam);
          });
        } else
          l === "seriesDesc" && s.reverse();
      }
      M(s, function(d, g) {
        var p = t.valueFormatter, y = fg(d)(
          // Inherit valueFormatter
          p ? k(k({}, r), {
            valueFormatter: p
          }) : r,
          d,
          g > 0 ? a.html : 0,
          n
        );
        y != null && o.push(y);
      });
      var h = r.renderMode === "richText" ? o.join(a.richText) : Lf(o.join(""), i ? e : a.html);
      if (i)
        return h;
      var c = lf(t.header, "ordinal", r.useUTC), v = ug(n, r.renderMode).nameStyle;
      return r.renderMode === "richText" ? cg(r, c, v) + a.richText + h : Lf('<div style="' + v + ";" + lg + ';">' + le(c) + "</div>" + h, e);
    }
    function Jx(r, t, e, n) {
      var i = r.renderMode, a = t.noName, o = t.noValue, s = !t.markerType, l = t.name, u = r.useUTC, f = t.valueFormatter || r.valueFormatter || function(S) {
        return S = F(S) ? S : [S], H(S, function(b, w) {
          return lf(b, F(v) ? v[w] : v, u);
        });
      };
      if (!(a && o)) {
        var h = s ? "" : r.markupStyleCreator.makeTooltipMarker(t.markerType, t.markerColor || "#333", i), c = a ? "" : lf(l, "ordinal", u), v = t.valueType, d = o ? [] : f(t.value), g = !s || !a, p = !s && a, y = ug(n, i), m = y.nameStyle, _ = y.valueStyle;
        return i === "richText" ? (s ? "" : h) + (a ? "" : cg(r, c, m)) + (o ? "" : nT(r, d, g, p, _)) : Lf((s ? "" : h) + (a ? "" : eT(c, !s, m)) + (o ? "" : rT(d, g, p, _)), e);
      }
    }
    function vg(r, t, e, n, i, a) {
      if (r) {
        var o = fg(r), s = {
          useUTC: i,
          renderMode: e,
          orderMode: n,
          markupStyleCreator: t,
          valueFormatter: r.valueFormatter
        };
        return o(s, r, 0, a);
      }
    }
    function tT(r) {
      return {
        html: Kx[r],
        richText: Qx[r]
      };
    }
    function Lf(r, t) {
      var e = '<div style="clear:both"></div>', n = "margin: " + t + "px 0 0";
      return '<div style="' + n + ";" + lg + ';">' + r + e + "</div>";
    }
    function eT(r, t, e) {
      var n = t ? "margin-left:2px" : "";
      return '<span style="' + e + ";" + n + '">' + le(r) + "</span>";
    }
    function rT(r, t, e, n) {
      var i = e ? "10px" : "20px", a = t ? "float:right;margin-left:" + i : "";
      return r = F(r) ? r : [r], '<span style="' + a + ";" + n + '">' + H(r, function(o) {
        return le(o);
      }).join("&nbsp;&nbsp;") + "</span>";
    }
    function cg(r, t, e) {
      return r.markupStyleCreator.wrapRichTextStyle(t, e);
    }
    function nT(r, t, e, n, i) {
      var a = [i], o = n ? 10 : 20;
      return e && a.push({
        padding: [0, 0, 0, o],
        align: "right"
      }), r.markupStyleCreator.wrapRichTextStyle(F(t) ? t.join("  ") : t, a);
    }
    function iT(r, t) {
      var e = r.getData().getItemVisual(t, "style"), n = e[r.visualDrawType];
      return Sn(n);
    }
    function dg(r, t) {
      var e = r.get("padding");
      return e ?? (t === "richText" ? [8, 10] : 10);
    }
    var Pf = (
      /** @class */
      function() {
        function r() {
          this.richTextStyles = {}, this._nextStyleNameId = yc();
        }
        return r.prototype._generateStyleName = function() {
          return "__EC_aUTo_" + this._nextStyleNameId++;
        }, r.prototype.makeTooltipMarker = function(t, e, n) {
          var i = n === "richText" ? this._generateStyleName() : null, a = _p({
            color: e,
            type: t,
            renderMode: n,
            markerId: i
          });
          return G(a) ? a : (Q(i), this.richTextStyles[i] = a.style, a.content);
        }, r.prototype.wrapRichTextStyle = function(t, e) {
          var n = {};
          F(e) ? M(e, function(a) {
            return k(n, a);
          }) : k(n, e);
          var i = this._generateStyleName();
          return this.richTextStyles[i] = n, "{" + i + "|" + t + "}";
        }, r;
      }()
    );
    function aT(r) {
      var t = r.series, e = r.dataIndex, n = r.multipleSeries, i = t.getData(), a = i.mapDimensionsAll("defaultedTooltip"), o = a.length, s = t.getRawValue(e), l = F(s), u = iT(t, e), f, h, c, v;
      if (o > 1 || l && !o) {
        var d = oT(s, t, e, a, u);
        f = d.inlineValues, h = d.inlineValueTypes, c = d.blocks, v = d.inlineValues[0];
      } else if (o) {
        var g = i.getDimensionInfo(a[0]);
        v = f = fi(i, e, a[0]), h = g.type;
      } else
        v = f = l ? s[0] : s;
      var p = fu(t), y = p && t.name || "", m = i.getName(e), _ = n ? y : m;
      return Sa("section", {
        header: y,
        // When series name is not specified, do not show a header line with only '-'.
        // This case always happens in tooltip.trigger: 'item'.
        noHeader: n || !p,
        sortParam: v,
        blocks: [Sa("nameValue", {
          markerType: "item",
          markerColor: u,
          // Do not mix display seriesName and itemName in one tooltip,
          // which might confuses users.
          name: _,
          // name dimension might be auto assigned, where the name might
          // be not readable. So we check trim here.
          noName: !Re(_),
          value: f,
          valueType: h
        })].concat(c || [])
      });
    }
    function oT(r, t, e, n, i) {
      var a = t.getData(), o = We(r, function(h, c, v) {
        var d = a.getDimensionInfo(v);
        return h = h || d && d.tooltip !== !1 && d.displayName != null;
      }, !1), s = [], l = [], u = [];
      n.length ? M(n, function(h) {
        f(fi(a, e, h), h);
      }) : M(r, f);
      function f(h, c) {
        var v = a.getDimensionInfo(c);
        !v || v.otherDims.tooltip === !1 || (o ? u.push(Sa("nameValue", {
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
    var Or = St();
    function Ss(r, t) {
      return r.getName(t) || r.getId(t);
    }
    var sT = "__universalTransitionEnabled", ne = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          var e = r !== null && r.apply(this, arguments) || this;
          return e._selectedDataIndicesMap = {}, e;
        }
        return t.prototype.init = function(e, n, i) {
          this.seriesIndex = this.componentIndex, this.dataTask = ya({
            count: uT,
            reset: fT
          }), this.dataTask.context = {
            model: this
          }, this.mergeDefaultAndTheme(e, i);
          var a = Or(this).sourceManager = new ag(this);
          a.prepareSource();
          var o = this.getInitialData(e, i);
          gg(o, this), this.dataTask.context.data = o, Q(o, "getInitialData returned invalid data."), Or(this).dataBeforeProcessed = o, pg(this), this._initSelectedMapFromData(o);
        }, t.prototype.mergeDefaultAndTheme = function(e, n) {
          var i = va(this), a = i ? cs(e) : {}, o = this.subType;
          it.hasClass(o) && (o += "Series"), at(e, n.getTheme().get(this.subType)), at(e, this.getDefaultOption()), uu(e, "label", ["show"]), this.fillDataTextStyle(e.data), i && si(e, a, i);
        }, t.prototype.mergeOption = function(e, n) {
          e = at(this.option, e, !0), this.fillDataTextStyle(e.data);
          var i = va(this);
          i && si(this.option, e, i);
          var a = Or(this).sourceManager;
          a.dirty(), a.prepareSource();
          var o = this.getInitialData(e, n);
          gg(o, this), this.dataTask.dirty(), this.dataTask.context.data = o, Or(this).dataBeforeProcessed = o, pg(this), this._initSelectedMapFromData(o);
        }, t.prototype.fillDataTextStyle = function(e) {
          if (e && !Ut(e))
            for (var n = ["show"], i = 0; i < e.length; i++)
              e[i] && e[i].label && uu(e[i], "label", n);
        }, t.prototype.getInitialData = function(e, n) {
        }, t.prototype.appendData = function(e) {
          var n = this.getRawData();
          n.appendData(e.data);
        }, t.prototype.getData = function(e) {
          var n = If(this);
          if (n) {
            var i = n.context.data;
            return e == null ? i : i.getLinkedData(e);
          } else
            return Or(this).data;
        }, t.prototype.getAllData = function() {
          var e = this.getData();
          return e && e.getLinkedDataAll ? e.getLinkedDataAll() : [{
            data: e
          }];
        }, t.prototype.setData = function(e) {
          var n = If(this);
          if (n) {
            var i = n.context;
            i.outputData = e, n !== this.dataTask && (i.data = e);
          }
          Or(this).data = e;
        }, t.prototype.getEncode = function() {
          var e = this.get("encode", !0);
          if (e)
            return j(e);
        }, t.prototype.getSourceManager = function() {
          return Or(this).sourceManager;
        }, t.prototype.getSource = function() {
          return this.getSourceManager().getSource();
        }, t.prototype.getRawData = function() {
          return Or(this).dataBeforeProcessed;
        }, t.prototype.getColorBy = function() {
          var e = this.get("colorBy");
          return e || "series";
        }, t.prototype.isColorBySeries = function() {
          return this.getColorBy() === "series";
        }, t.prototype.getBaseAxis = function() {
          var e = this.coordinateSystem;
          return e && e.getBaseAxis && e.getBaseAxis();
        }, t.prototype.formatTooltip = function(e, n, i) {
          return aT({
            series: this,
            dataIndex: e,
            multipleSeries: n
          });
        }, t.prototype.isAnimationEnabled = function() {
          var e = this.ecModel;
          if (X.node && !(e && e.ssr))
            return !1;
          var n = this.getShallow("animation");
          return n && this.getData().count() > this.getShallow("animationThreshold") && (n = !1), !!n;
        }, t.prototype.restoreData = function() {
          this.dataTask.dirty();
        }, t.prototype.getColorFromPalette = function(e, n, i) {
          var a = this.ecModel, o = df.prototype.getColorFromPalette.call(this, e, n, i);
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
              var l = e[s], u = Ss(o, l);
              i[u] = !1, this._selectedDataIndicesMap[u] = -1;
            }
          }
        }, t.prototype.toggleSelect = function(e, n) {
          for (var i = [], a = 0; a < e.length; a++)
            i[0] = e[a], this.isSelected(e[a], n) ? this.unselect(i, n) : this.select(i, n);
        }, t.prototype.getSelectedDataIndices = function() {
          if (this.option.selectedMap === "all")
            return [].slice.call(this.getData().getIndices());
          for (var e = this._selectedDataIndicesMap, n = pt(e), i = [], a = 0; a < n.length; a++) {
            var o = e[n[a]];
            o >= 0 && i.push(o);
          }
          return i;
        }, t.prototype.isSelected = function(e, n) {
          var i = this.option.selectedMap;
          if (!i)
            return !1;
          var a = this.getData(n);
          return (i === "all" || i[Ss(a, e)]) && !a.getItemModel(e).get(["select", "disabled"]);
        }, t.prototype.isUniversalTransitionEnabled = function() {
          if (this[sT])
            return !0;
          var e = this.option.universalTransition;
          return e ? e === !0 ? !0 : e && e.enabled : !1;
        }, t.prototype._innerSelect = function(e, n) {
          var i, a, o = this.option, s = o.selectedMode, l = n.length;
          if (!(!s || !l)) {
            if (s === "series")
              o.selectedMap = "all";
            else if (s === "multiple") {
              V(o.selectedMap) || (o.selectedMap = {});
              for (var u = o.selectedMap, f = 0; f < l; f++) {
                var h = n[f], c = Ss(e, h);
                u[c] = !0, this._selectedDataIndicesMap[c] = e.getRawIndex(h);
              }
            } else if (s === "single" || s === !0) {
              var v = n[l - 1], c = Ss(e, v);
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
          return it.registerClass(e);
        }, t.protoInitialize = function() {
          var e = t.prototype;
          e.type = "series.__base__", e.seriesIndex = 0, e.ignoreStyleOnData = !1, e.hasSymbolVisual = !1, e.defaultSymbol = "circle", e.visualStyleAccessPath = "itemStyle", e.visualDrawType = "fill";
        }(), t;
      }(it)
    );
    ge(ne, Ox), ge(ne, df), Pc(ne, it);
    function pg(r) {
      var t = r.name;
      fu(r) || (r.name = lT(r) || t);
    }
    function lT(r) {
      var t = r.getRawData(), e = t.mapDimensionsAll("seriesName"), n = [];
      return M(e, function(i) {
        var a = t.getDimensionInfo(i);
        a.displayName && n.push(a.displayName);
      }), n.join(" ");
    }
    function uT(r) {
      return r.model.getRawData().count();
    }
    function fT(r) {
      var t = r.model;
      return t.setData(t.getRawData().cloneShallow()), hT;
    }
    function hT(r, t) {
      t.outputData && r.end > t.outputData.count() && t.model.getRawData().cloneShallow(t.outputData);
    }
    function gg(r, t) {
      M(dv(r.CHANGABLE_METHODS, r.DOWNSAMPLE_METHODS), function(e) {
        r.wrapMethod(e, _t(vT, t));
      });
    }
    function vT(r, t) {
      var e = If(r);
      return e && e.setOutputEnd((t || this).count()), t;
    }
    function If(r) {
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
    var $t = (
      /** @class */
      function() {
        function r() {
          this.group = new It(), this.uid = ns("viewComponent");
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
    cu($t), bo($t);
    function Rf() {
      var r = St();
      return function(t) {
        var e = r(t), n = t.pipelineContext, i = !!e.large, a = !!e.progressiveRender, o = e.large = !!(n && n.large), s = e.progressiveRender = !!(n && n.progressiveRender);
        return (i !== o || a !== s) && "reset";
      };
    }
    var yg = St(), cT = Rf(), Kt = (
      /** @class */
      function() {
        function r() {
          this.group = new It(), this.uid = ns("viewChart"), this.renderTask = ya({
            plan: dT,
            reset: pT
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
            Ft("Unknown dataType " + i.dataType);
            return;
          }
          _g(a, i, "emphasis");
        }, r.prototype.downplay = function(t, e, n, i) {
          var a = t.getData(i && i.dataType);
          if (!a) {
            Ft("Unknown dataType " + i.dataType);
            return;
          }
          _g(a, i, "normal");
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
          es(this.group, t);
        }, r.markUpdateMethod = function(t, e) {
          yg(t).updateMethod = e;
        }, r.protoInitialize = function() {
          var t = r.prototype;
          t.type = "chart";
        }(), r;
      }()
    );
    function mg(r, t, e) {
      r && Jn(r) && (t === "emphasis" ? Oo : Bo)(r, e);
    }
    function _g(r, t, e) {
      var n = on(r, t), i = t && t.highlightKey != null ? Nw(t.highlightKey) : null;
      n != null ? M(qt(n), function(a) {
        mg(r.getItemGraphicEl(a), e, i);
      }) : r.eachItemGraphicEl(function(a) {
        mg(a, e, i);
      });
    }
    cu(Kt, ["dispose"]), bo(Kt);
    function dT(r) {
      return cT(r.model);
    }
    function pT(r) {
      var t = r.model, e = r.ecModel, n = r.api, i = r.payload, a = t.pipelineContext.progressiveRender, o = r.view, s = i && yg(i).updateMethod, l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
      return l !== "render" && o[l](t, e, n, i), gT[l];
    }
    var gT = {
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
    }, ws = "\0__throttleOriginMethod", Sg = "\0__throttleRate", wg = "\0__throttleType";
    function bs(r, t, e) {
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
    function bg(r, t, e, n) {
      var i = r[t];
      if (i) {
        var a = i[ws] || i, o = i[wg], s = i[Sg];
        if (s !== e || o !== n) {
          if (e == null || !n)
            return r[t] = a;
          i = r[t] = bs(a, e, n === "debounce"), i[ws] = a, i[wg] = n, i[Sg] = e;
        }
        return i;
      }
    }
    function Ef(r, t) {
      var e = r[t];
      e && e[ws] && (e.clear && e.clear(), r[t] = e[ws]);
    }
    var xg = St(), Tg = {
      itemStyle: Ui(ip, !0),
      lineStyle: Ui(np, !0)
    }, yT = {
      lineStyle: "stroke",
      itemStyle: "fill"
    };
    function Cg(r, t) {
      var e = r.visualStyleMapper || Tg[t];
      return e || (console.warn("Unknown style type '" + t + "'."), Tg.itemStyle);
    }
    function Dg(r, t) {
      var e = r.visualDrawType || yT[t];
      return e || (console.warn("Unknown style type '" + t + "'."), "fill");
    }
    var mT = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function(r, t) {
        var e = r.getData(), n = r.visualStyleAccessPath || "itemStyle", i = r.getModel(n), a = Cg(r, n), o = a(i), s = i.getShallow("decal");
        s && (e.setVisual("decal", s), s.dirty = !0);
        var l = Dg(r, n), u = o[l], f = Y(u) ? u : null, h = o.fill === "auto" || o.stroke === "auto";
        if (!o[l] || f || h) {
          var c = r.getColorFromPalette(
            // TODO series count changed.
            r.name,
            null,
            t.getSeriesCount()
          );
          o[l] || (o[l] = c, e.setVisual("colorFromPalette", !0)), o.fill = o.fill === "auto" || Y(o.fill) ? c : o.fill, o.stroke = o.stroke === "auto" || Y(o.stroke) ? c : o.stroke;
        }
        if (e.setVisual("style", o), e.setVisual("drawType", l), !t.isSeriesFiltered(r) && f)
          return e.setVisual("colorFromPalette", !1), {
            dataEach: function(v, d) {
              var g = r.getDataParams(d), p = k({}, o);
              p[l] = f(g), v.setItemVisual(d, "style", p);
            }
          };
      }
    }, wa = new mt(), _T = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function(r, t) {
        if (!(r.ignoreStyleOnData || t.isSeriesFiltered(r))) {
          var e = r.getData(), n = r.visualStyleAccessPath || "itemStyle", i = Cg(r, n), a = e.getVisual("drawType");
          return {
            dataEach: e.hasItemOption ? function(o, s) {
              var l = o.getRawDataItem(s);
              if (l && l[n]) {
                wa.option = l[n];
                var u = i(wa), f = o.ensureUniqueItemVisual(s, "style");
                k(f, u), wa.option.decal && (o.setItemVisual(s, "decal", wa.option.decal), wa.option.decal.dirty = !0), a in u && o.setItemVisual(s, "colorFromPalette", !1);
              }
            } : null
          };
        }
      }
    }, ST = {
      performRawSeries: !0,
      overallReset: function(r) {
        var t = j();
        r.eachSeries(function(e) {
          var n = e.getColorBy();
          if (!e.isColorBySeries()) {
            var i = e.type + "-" + n, a = t.get(i);
            a || (a = {}, t.set(i, a)), xg(e).scope = a;
          }
        }), r.eachSeries(function(e) {
          if (!(e.isColorBySeries() || r.isSeriesFiltered(e))) {
            var n = e.getRawData(), i = {}, a = e.getData(), o = xg(e).scope, s = e.visualStyleAccessPath || "itemStyle", l = Dg(e, s);
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
    }, xs = Math.PI;
    function wT(r, t) {
      t = t || {}, st(t, {
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
      var e = new It(), n = new Tt({
        style: {
          fill: t.maskColor
        },
        zlevel: t.zlevel,
        z: 1e4
      });
      e.add(n);
      var i = new Lt({
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
      }), a = new Tt({
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
      return t.showSpinner && (o = new ea({
        shape: {
          startAngle: -xs / 2,
          endAngle: -xs / 2 + 0.1,
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
        endAngle: xs * 3 / 2
      }).start("circularInOut"), o.animateShape(!0).when(1e3, {
        startAngle: xs * 3 / 2
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
    var Mg = (
      /** @class */
      function() {
        function r(t, e, n, i) {
          this._stageTaskMap = j(), this.ecInstance = t, this.api = e, n = this._dataProcessorHandlers = n.slice(), i = this._visualHandlers = i.slice(), this._allHandlers = n.concat(i);
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
          var e = this, n = e._pipelineMap = j();
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
            o = '"reset" and "overallReset" must not be both specified.', Q(!(i.reset && i.overallReset), o), i.reset && this._createSeriesStageTask(i, a, e, n), i.overallReset && this._createOverallStageTask(i, a, e, n);
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
          var a = this, o = e.seriesTaskMap, s = e.seriesTaskMap = j(), l = t.seriesType, u = t.getTargetSeries;
          t.createOnAllSeries ? n.eachRawSeries(f) : l ? n.eachRawSeriesByType(l, f) : u && u(n, i).each(f);
          function f(h) {
            var c = h.uid, v = s.set(c, o && o.get(c) || ya({
              plan: DT,
              reset: MT,
              count: LT
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
          var a = this, o = e.overallTask = e.overallTask || ya({
            reset: bT
          });
          o.context = {
            ecModel: n,
            api: i,
            overallReset: t.overallReset,
            scheduler: a
          };
          var s = o.agentStubMap, l = o.agentStubMap = j(), u = t.seriesType, f = t.getTargetSeries, h = !0, c = !1, v = "";
          v = '"createOnAllSeries" is not supported for "overallReset", because it will block all streams.', Q(!t.createOnAllSeries, v), u ? n.eachRawSeriesByType(u, d) : f ? f(n, i).each(d) : (h = !1, M(n.getSeries(), d));
          function d(g) {
            var p = g.uid, y = l.set(p, s && s.get(p) || // When the result of `getTargetSeries` changed, the overallTask
            // should be set as dirty and re-performed.
            (c = !0, ya({
              reset: xT,
              onDirty: CT
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
          return Y(t) && (t = {
            overallReset: t,
            seriesType: PT(t)
          }), t.uid = ns("stageHandler"), e && (t.visualType = e), t;
        }, r;
      }()
    );
    function bT(r) {
      r.overallReset(r.ecModel, r.api, r.payload);
    }
    function xT(r) {
      return r.overallProgress && TT;
    }
    function TT() {
      this.agent.dirty(), this.getDownstream().dirty();
    }
    function CT() {
      this.agent && this.agent.dirty();
    }
    function DT(r) {
      return r.plan ? r.plan(r.model, r.ecModel, r.api, r.payload) : null;
    }
    function MT(r) {
      r.useClearVisual && r.data.clearAllVisual();
      var t = r.resetDefines = qt(r.reset(r.model, r.ecModel, r.api, r.payload));
      return t.length > 1 ? H(t, function(e, n) {
        return Ag(n);
      }) : AT;
    }
    var AT = Ag(0);
    function Ag(r) {
      return function(t, e) {
        var n = e.data, i = e.resetDefines[r];
        if (i && i.dataEach)
          for (var a = t.start; a < t.end; a++)
            i.dataEach(n, a);
        else
          i && i.progress && i.progress(t, n);
      };
    }
    function LT(r) {
      return r.data.count();
    }
    function PT(r) {
      Ts = null;
      try {
        r(ba, Lg);
      } catch {
      }
      return Ts;
    }
    var ba = {}, Lg = {}, Ts;
    Pg(ba, gf), Pg(Lg, Rp), ba.eachSeriesByType = ba.eachRawSeriesByType = function(r) {
      Ts = r;
    }, ba.eachComponent = function(r) {
      r.mainType === "series" && r.subType && (Ts = r.subType);
    };
    function Pg(r, t) {
      for (var e in t.prototype)
        r[e] = Yt;
    }
    var Ig = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"], IT = {
      color: Ig,
      colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], Ig]
    }, Qt = "#B9B8CE", Rg = "#100C2A", Cs = function() {
      return {
        axisLine: {
          lineStyle: {
            color: Qt
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
    }, Eg = ["#4992ff", "#7cffb2", "#fddd60", "#ff6e76", "#58d9f9", "#05c091", "#ff8a45", "#8d48e3", "#dd79ff"], kg = {
      darkMode: !0,
      color: Eg,
      backgroundColor: Rg,
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
          color: Qt
        }
      },
      textStyle: {
        color: Qt
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
          borderColor: Qt
        }
      },
      dataZoom: {
        borderColor: "#71708A",
        textStyle: {
          color: Qt
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
          color: Qt
        }
      },
      timeline: {
        lineStyle: {
          color: Qt
        },
        label: {
          color: Qt
        },
        controlStyle: {
          color: Qt,
          borderColor: Qt
        }
      },
      calendar: {
        itemStyle: {
          color: Rg
        },
        dayLabel: {
          color: Qt
        },
        monthLabel: {
          color: Qt
        },
        yearLabel: {
          color: Qt
        }
      },
      timeAxis: Cs(),
      logAxis: Cs(),
      valueAxis: Cs(),
      categoryAxis: Cs(),
      line: {
        symbol: "circle"
      },
      graph: {
        color: Eg
      },
      gauge: {
        title: {
          color: Qt
        },
        axisLine: {
          lineStyle: {
            color: [[1, "rgba(207,212,219,0.2)"]]
          }
        },
        axisLabel: {
          color: Qt
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
    kg.categoryAxis.splitLine.show = !1;
    var RT = (
      /** @class */
      function() {
        function r() {
        }
        return r.prototype.normalizeQuery = function(t) {
          var e = {}, n = {}, i = {};
          if (G(t)) {
            var a = Ze(t);
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
    ), kf = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"], Og = kf.concat(["symbolKeepAspect"]), ET = {
      createOnAllSeries: !0,
      // For legend.
      performRawSeries: !0,
      reset: function(r, t) {
        var e = r.getData();
        if (r.legendIcon && e.setVisual("legendIcon", r.legendIcon), !r.hasSymbolVisual)
          return;
        for (var n = {}, i = {}, a = !1, o = 0; o < kf.length; o++) {
          var s = kf[o], l = r.get(s);
          Y(l) ? (a = !0, i[s] = l) : n[s] = l;
        }
        if (n.symbol = n.symbol || r.defaultSymbol, e.setVisual(k({
          legendIcon: r.legendIcon || n.symbol,
          symbolKeepAspect: r.get("symbolKeepAspect")
        }, n)), t.isSeriesFiltered(r))
          return;
        var u = pt(i);
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
    }, kT = {
      createOnAllSeries: !0,
      // For legend.
      performRawSeries: !0,
      reset: function(r, t) {
        if (!r.hasSymbolVisual || t.isSeriesFiltered(r))
          return;
        var e = r.getData();
        function n(i, a) {
          for (var o = i.getItemModel(a), s = 0; s < Og.length; s++) {
            var l = Og[s], u = o.getShallow(l, !0);
            u != null && i.setItemVisual(a, l, u);
          }
        }
        return {
          dataEach: e.hasItemOption ? n : null
        };
      }
    };
    function OT(r, t, e) {
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
    function BT(r, t) {
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
    function NT(r, t) {
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
          i = k({}, i), Mt(i.type, n[1]), o.dispatchAction(k(i, {
            type: n[1],
            seriesIndex: e(a, i)
          }));
        });
      });
    }
    function vi(r, t, e, n, i) {
      var a = r + t;
      e.isSilent(a) || (Oe("event " + a + " is deprecated."), n.eachComponent({
        mainType: "series",
        subType: "pie"
      }, function(o) {
        for (var s = o.seriesIndex, l = o.option.selectedMap, u = i.selected, f = 0; f < u.length; f++)
          if (u[f].seriesIndex === s) {
            var h = o.getData(), c = on(h, i.fromActionPayload);
            e.trigger(a, {
              type: a,
              seriesId: o.id,
              name: F(c) ? h.getName(c[0]) : h.getName(c),
              selected: G(l) ? l : k({}, l)
            });
          }
      }));
    }
    function FT(r, t, e) {
      r.on("selectchanged", function(n) {
        var i = e.getModel();
        n.isFromClick ? (vi("map", "selectchanged", t, i, n), vi("pie", "selectchanged", t, i, n)) : n.fromAction === "select" ? (vi("map", "selected", t, i, n), vi("pie", "selected", t, i, n)) : n.fromAction === "unselect" && (vi("map", "unselected", t, i, n), vi("pie", "unselected", t, i, n));
      });
    }
    function xa(r, t, e) {
      for (var n; r && !(t(r) && (n = r, e)); )
        r = r.__hostTarget || r.parent;
      return n;
    }
    var zT = Math.round(Math.random() * 9), GT = typeof Object.defineProperty == "function", HT = function() {
      function r() {
        this._id = "__ec_inner_" + zT++;
      }
      return r.prototype.get = function(t) {
        return this._guard(t)[this._id];
      }, r.prototype.set = function(t, e) {
        var n = this._guard(t);
        return GT ? Object.defineProperty(n, this._id, {
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
    }(), VT = ft.extend({
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
    }), WT = ft.extend({
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
    }), UT = ft.extend({
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
    }), YT = ft.extend({
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
    }), XT = {
      line: vr,
      rect: Tt,
      roundRect: Tt,
      square: Tt,
      circle: ji,
      diamond: WT,
      pin: UT,
      arrow: YT,
      triangle: VT
    }, qT = {
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
    }, Of = {};
    M(XT, function(r, t) {
      Of[t] = new r();
    });
    var ZT = ft.extend({
      type: "symbol",
      shape: {
        symbolType: "",
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      calculateTextPosition: function(r, t, e) {
        var n = go(r, t, e), i = this.shape;
        return i && i.symbolType === "pin" && t.position === "inside" && (n.y = e.y + e.height * 0.4), n;
      },
      buildPath: function(r, t, e) {
        var n = t.symbolType;
        if (n !== "none") {
          var i = Of[n];
          i || (n = "rect", i = Of[n]), qT[n](t.x, t.y, t.width, t.height, i.shape), i.buildPath(r, i.shape, e);
        }
      }
    });
    function $T(r, t) {
      if (this.type !== "image") {
        var e = this.style;
        this.__isEmptyBrush ? (e.stroke = r, e.fill = t || "#fff", e.lineWidth = 2) : this.shape.symbolType === "line" ? e.stroke = r : e.fill = r, this.markRedraw();
      }
    }
    function Cn(r, t, e, n, i, a, o) {
      var s = r.indexOf("empty") === 0;
      s && (r = r.substr(5, 1).toLowerCase() + r.substr(6));
      var l;
      return r.indexOf("image://") === 0 ? l = Uu(r.slice(8), new nt(t, e, n, i), o ? "center" : "cover") : r.indexOf("path://") === 0 ? l = Jo(r.slice(7), {}, new nt(t, e, n, i), o ? "center" : "cover") : l = new ZT({
        shape: {
          symbolType: r,
          x: t,
          y: e,
          width: n,
          height: i
        }
      }), l.__isEmptyBrush = s, l.setColor = $T, a && l.setColor(a), l;
    }
    function KT(r) {
      return F(r) || (r = [+r, +r]), [r[0] || 0, r[1] || 0];
    }
    function Bg(r, t) {
      if (r != null)
        return F(r) || (r = [r, r]), [gt(r[0], t[0]) || 0, gt(J(r[1], r[0]), t[1]) || 0];
    }
    function Dn(r) {
      return isFinite(r);
    }
    function QT(r, t, e) {
      var n = t.x == null ? 0 : t.x, i = t.x2 == null ? 1 : t.x2, a = t.y == null ? 0 : t.y, o = t.y2 == null ? 0 : t.y2;
      t.global || (n = n * e.width + e.x, i = i * e.width + e.x, a = a * e.height + e.y, o = o * e.height + e.y), n = Dn(n) ? n : 0, i = Dn(i) ? i : 1, a = Dn(a) ? a : 0, o = Dn(o) ? o : 0;
      var s = r.createLinearGradient(n, a, i, o);
      return s;
    }
    function jT(r, t, e) {
      var n = e.width, i = e.height, a = Math.min(n, i), o = t.x == null ? 0.5 : t.x, s = t.y == null ? 0.5 : t.y, l = t.r == null ? 0.5 : t.r;
      t.global || (o = o * n + e.x, s = s * i + e.y, l = l * a), o = Dn(o) ? o : 0.5, s = Dn(s) ? s : 0.5, l = l >= 0 && Dn(l) ? l : 0.5;
      var u = r.createRadialGradient(o, s, 0, o, s, l);
      return u;
    }
    function Bf(r, t, e) {
      for (var n = t.type === "radial" ? jT(r, t, e) : QT(r, t, e), i = t.colorStops, a = 0; a < i.length; a++)
        n.addColorStop(i[a].offset, i[a].color);
      return n;
    }
    function JT(r, t) {
      if (r === t || !r && !t)
        return !1;
      if (!r || !t || r.length !== t.length)
        return !0;
      for (var e = 0; e < r.length; e++)
        if (r[e] !== t[e])
          return !0;
      return !1;
    }
    function Ds(r) {
      return parseInt(r, 10);
    }
    function Ms(r, t, e) {
      var n = ["width", "height"][t], i = ["clientWidth", "clientHeight"][t], a = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
      if (e[n] != null && e[n] !== "auto")
        return parseFloat(e[n]);
      var s = document.defaultView.getComputedStyle(r);
      return (r[i] || Ds(s[n]) || Ds(r.style[n])) - (Ds(s[a]) || 0) - (Ds(s[o]) || 0) | 0;
    }
    function tC(r, t) {
      return !r || r === "solid" || !(t > 0) ? null : r === "dashed" ? [4 * t, 2 * t] : r === "dotted" ? [t] : ct(r) ? [r] : F(r) ? r : null;
    }
    function Ng(r) {
      var t = r.style, e = t.lineDash && t.lineWidth > 0 && tC(t.lineDash, t.lineWidth), n = t.lineDashOffset;
      if (e) {
        var i = t.strokeNoScale && r.getLineScale ? r.getLineScale() : 1;
        i && i !== 1 && (e = H(e, function(a) {
          return a / i;
        }), n /= i);
      }
      return [e, n];
    }
    var eC = new Rr(!0);
    function As(r) {
      var t = r.stroke;
      return !(t == null || t === "none" || !(r.lineWidth > 0));
    }
    function Fg(r) {
      return typeof r == "string" && r !== "none";
    }
    function Ls(r) {
      var t = r.fill;
      return t != null && t !== "none";
    }
    function zg(r, t) {
      if (t.fillOpacity != null && t.fillOpacity !== 1) {
        var e = r.globalAlpha;
        r.globalAlpha = t.fillOpacity * t.opacity, r.fill(), r.globalAlpha = e;
      } else
        r.fill();
    }
    function Gg(r, t) {
      if (t.strokeOpacity != null && t.strokeOpacity !== 1) {
        var e = r.globalAlpha;
        r.globalAlpha = t.strokeOpacity * t.opacity, r.stroke(), r.globalAlpha = e;
      } else
        r.stroke();
    }
    function Nf(r, t, e) {
      var n = Ic(t.image, t.__image, e);
      if (xo(n)) {
        var i = r.createPattern(n, t.repeat || "repeat");
        if (typeof DOMMatrix == "function" && i && i.setTransform) {
          var a = new DOMMatrix();
          a.translateSelf(t.x || 0, t.y || 0), a.rotateSelf(0, 0, (t.rotation || 0) * pv), a.scaleSelf(t.scaleX || 1, t.scaleY || 1), i.setTransform(a);
        }
        return i;
      }
    }
    function rC(r, t, e, n) {
      var i, a = As(e), o = Ls(e), s = e.strokePercent, l = s < 1, u = !t.path;
      (!t.silent || l) && u && t.createPathProxy();
      var f = t.path || eC, h = t.__dirty;
      if (!n) {
        var c = e.fill, v = e.stroke, d = o && !!c.colorStops, g = a && !!v.colorStops, p = o && !!c.image, y = a && !!v.image, m = void 0, _ = void 0, S = void 0, b = void 0, w = void 0;
        (d || g) && (w = t.getBoundingRect()), d && (m = h ? Bf(r, c, w) : t.__canvasFillGradient, t.__canvasFillGradient = m), g && (_ = h ? Bf(r, v, w) : t.__canvasStrokeGradient, t.__canvasStrokeGradient = _), p && (S = h || !t.__canvasFillPattern ? Nf(r, c, t) : t.__canvasFillPattern, t.__canvasFillPattern = S), y && (b = h || !t.__canvasStrokePattern ? Nf(r, v, t) : t.__canvasStrokePattern, t.__canvasStrokePattern = S), d ? r.fillStyle = m : p && (S ? r.fillStyle = S : o = !1), g ? r.strokeStyle = _ : y && (b ? r.strokeStyle = b : a = !1);
      }
      var x = t.getGlobalScale();
      f.setScale(x[0], x[1], t.segmentIgnoreThreshold);
      var T, D;
      r.setLineDash && e.lineDash && (i = Ng(t), T = i[0], D = i[1]);
      var A = !0;
      (u || h & Vn) && (f.setDPR(r.dpr), l ? f.setContext(null) : (f.setContext(r), A = !1), f.reset(), t.buildPath(f, t.shape, n), f.toStatic(), t.pathUpdated()), A && f.rebuildPath(r, l ? s : 1), T && (r.setLineDash(T), r.lineDashOffset = D), n || (e.strokeFirst ? (a && Gg(r, e), o && zg(r, e)) : (o && zg(r, e), a && Gg(r, e))), T && r.setLineDash([]);
    }
    function nC(r, t, e) {
      var n = t.__image = Ic(e.image, t.__image, t, t.onload);
      if (!(!n || !xo(n))) {
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
    function iC(r, t, e) {
      var n, i = e.text;
      if (i != null && (i += ""), i) {
        r.font = e.font || Xr, r.textAlign = e.textAlign, r.textBaseline = e.textBaseline;
        var a = void 0, o = void 0;
        r.setLineDash && e.lineDash && (n = Ng(t), a = n[0], o = n[1]), a && (r.setLineDash(a), r.lineDashOffset = o), e.strokeFirst ? (As(e) && r.strokeText(i, e.x, e.y), Ls(e) && r.fillText(i, e.x, e.y)) : (Ls(e) && r.fillText(i, e.x, e.y), As(e) && r.strokeText(i, e.x, e.y)), a && r.setLineDash([]);
      }
    }
    var Hg = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"], Vg = [["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]];
    function Wg(r, t, e, n, i) {
      var a = !1;
      if (!n && (e = e || {}, t === e))
        return !1;
      if (n || t.opacity !== e.opacity) {
        ie(r, i), a = !0;
        var o = Math.max(Math.min(t.opacity, 1), 0);
        r.globalAlpha = isNaN(o) ? ln.opacity : o;
      }
      (n || t.blend !== e.blend) && (a || (ie(r, i), a = !0), r.globalCompositeOperation = t.blend || ln.blend);
      for (var s = 0; s < Hg.length; s++) {
        var l = Hg[s];
        (n || t[l] !== e[l]) && (a || (ie(r, i), a = !0), r[l] = r.dpr * (t[l] || 0));
      }
      return (n || t.shadowColor !== e.shadowColor) && (a || (ie(r, i), a = !0), r.shadowColor = t.shadowColor || ln.shadowColor), a;
    }
    function Ug(r, t, e, n, i) {
      var a = Ta(t, i.inHover), o = n ? null : e && Ta(e, i.inHover) || {};
      if (a === o)
        return !1;
      var s = Wg(r, a, o, n, i);
      if ((n || a.fill !== o.fill) && (s || (ie(r, i), s = !0), Fg(a.fill) && (r.fillStyle = a.fill)), (n || a.stroke !== o.stroke) && (s || (ie(r, i), s = !0), Fg(a.stroke) && (r.strokeStyle = a.stroke)), (n || a.opacity !== o.opacity) && (s || (ie(r, i), s = !0), r.globalAlpha = a.opacity == null ? 1 : a.opacity), t.hasStroke()) {
        var l = a.lineWidth, u = l / (a.strokeNoScale && t.getLineScale ? t.getLineScale() : 1);
        r.lineWidth !== u && (s || (ie(r, i), s = !0), r.lineWidth = u);
      }
      for (var f = 0; f < Vg.length; f++) {
        var h = Vg[f], c = h[0];
        (n || a[c] !== o[c]) && (s || (ie(r, i), s = !0), r[c] = a[c] || h[1]);
      }
      return s;
    }
    function aC(r, t, e, n, i) {
      return Wg(r, Ta(t, i.inHover), e && Ta(e, i.inHover), n, i);
    }
    function Yg(r, t) {
      var e = t.transform, n = r.dpr || 1;
      e ? r.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : r.setTransform(n, 0, 0, n, 0, 0);
    }
    function oC(r, t, e) {
      for (var n = !1, i = 0; i < r.length; i++) {
        var a = r[i];
        n = n || a.isZeroArea(), Yg(t, a), t.beginPath(), a.buildPath(t, a.shape), t.clip();
      }
      e.allClipped = n;
    }
    function sC(r, t) {
      return r && t ? r[0] !== t[0] || r[1] !== t[1] || r[2] !== t[2] || r[3] !== t[3] || r[4] !== t[4] || r[5] !== t[5] : !(!r && !t);
    }
    var Xg = 1, qg = 2, Zg = 3, $g = 4;
    function lC(r) {
      var t = Ls(r), e = As(r);
      return !(r.lineDash || !(+t ^ +e) || t && typeof r.fill != "string" || e && typeof r.stroke != "string" || r.strokePercent < 1 || r.strokeOpacity < 1 || r.fillOpacity < 1);
    }
    function ie(r, t) {
      t.batchFill && r.fill(), t.batchStroke && r.stroke(), t.batchFill = "", t.batchStroke = "";
    }
    function Ta(r, t) {
      return t && r.__hoverStyle || r.style;
    }
    function Ff(r, t) {
      Mn(r, t, {
        inHover: !1,
        viewWidth: 0,
        viewHeight: 0
      }, !0);
    }
    function Mn(r, t, e, n) {
      var i = t.transform;
      if (!t.shouldBePainted(e.viewWidth, e.viewHeight, !1, !1)) {
        t.__dirty &= ~ue, t.__isRendered = !1;
        return;
      }
      var a = t.__clipPaths, o = e.prevElClipPaths, s = !1, l = !1;
      if ((!o || JT(a, o)) && (o && o.length && (ie(r, e), r.restore(), l = s = !0, e.prevElClipPaths = null, e.allClipped = !1, e.prevEl = null), a && a.length && (ie(r, e), r.save(), oC(a, r, e), s = !0), e.prevElClipPaths = a), e.allClipped) {
        t.__isRendered = !1;
        return;
      }
      t.beforeBrush && t.beforeBrush(), t.innerBeforeBrush();
      var u = e.prevEl;
      u || (l = s = !0);
      var f = t instanceof ft && t.autoBatch && lC(t.style);
      s || sC(i, u.transform) ? (ie(r, e), Yg(r, t)) : f || ie(r, e);
      var h = Ta(t, e.inHover);
      t instanceof ft ? (e.lastDrawType !== Xg && (l = !0, e.lastDrawType = Xg), Ug(r, t, u, l, e), (!f || !e.batchFill && !e.batchStroke) && r.beginPath(), rC(r, t, h, f), f && (e.batchFill = h.fill || "", e.batchStroke = h.stroke || "")) : t instanceof Ao ? (e.lastDrawType !== Zg && (l = !0, e.lastDrawType = Zg), Ug(r, t, u, l, e), iC(r, t, h)) : t instanceof ur ? (e.lastDrawType !== qg && (l = !0, e.lastDrawType = qg), aC(r, t, u, l, e), nC(r, t, h)) : t.getTemporalDisplayables && (e.lastDrawType !== $g && (l = !0, e.lastDrawType = $g), uC(r, t, e)), f && n && ie(r, e), t.innerAfterBrush(), t.afterBrush && t.afterBrush(), e.prevEl = t, t.__dirty = 0, t.__isRendered = !0;
    }
    function uC(r, t, e) {
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
        l.beforeBrush && l.beforeBrush(), l.innerBeforeBrush(), Mn(r, l, a, o === s - 1), l.innerAfterBrush(), l.afterBrush && l.afterBrush(), a.prevEl = l;
      }
      for (var u = 0, f = i.length; u < f; u++) {
        var l = i[u];
        l.beforeBrush && l.beforeBrush(), l.innerBeforeBrush(), Mn(r, l, a, u === f - 1), l.innerAfterBrush(), l.afterBrush && l.afterBrush(), a.prevEl = l;
      }
      t.clearTemporalDisplayables(), t.notClear = !0, r.restore();
    }
    var zf = new HT(), Kg = new Pi(100), Qg = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"];
    function Gf(r, t) {
      if (r === "none")
        return null;
      var e = t.getDevicePixelRatio(), n = t.getZr(), i = n.painter.type === "svg";
      r.dirty && zf.delete(r);
      var a = zf.get(r);
      if (a)
        return a;
      var o = st(r, {
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
      return l(s), s.rotation = o.rotation, s.scaleX = s.scaleY = i ? 1 : 1 / e, zf.set(r, s), r.dirty = !1, s;
      function l(u) {
        for (var f = [e], h = !0, c = 0; c < Qg.length; ++c) {
          var v = o[Qg[c]];
          if (v != null && !F(v) && !G(v) && !ct(v) && typeof v != "boolean") {
            h = !1;
            break;
          }
          f.push(v);
        }
        var d;
        if (h) {
          d = f.join(",") + (i ? "-svg" : "");
          var g = Kg.get(d);
          g && (i ? u.svgElement = g : u.image = g);
        }
        var p = Jg(o.dashArrayX), y = fC(o.dashArrayY), m = jg(o.symbol), _ = hC(p), S = ty(y), b = !i && ar.createCanvas(), w = i && {
          tag: "g",
          attrs: {},
          key: "dcl",
          children: []
        }, x = D(), T;
        b && (b.width = x.width * e, b.height = x.height * e, T = b.getContext("2d")), A(), h && Kg.put(d, b || w), u.image = b, u.svgElement = w, u.svgWidth = x.width, u.svgHeight = x.height;
        function D() {
          for (var C = 1, L = 0, P = _.length; L < P; ++L)
            C = _c(C, _[L]);
          for (var I = 1, L = 0, P = m.length; L < P; ++L)
            I = _c(I, m[L].length);
          C *= I;
          var R = S * _.length * m.length;
          {
            var E = function(U) {
              console.warn("Calculated decal size is greater than " + U + " due to decal option settings so " + U + " is used for the decal size. Please consider changing the decal option to make a smaller decal or set " + U + " to be larger to avoid incontinuity.");
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
              for (var U = R / 2 % m.length, O = 0, N = 0, W = 0; O < x.width * 2; ) {
                for (var K = 0, L = 0; L < p[E].length; ++L)
                  K += p[E][L];
                if (K <= 0)
                  break;
                if (N % 2 === 0) {
                  var $ = (1 - o.symbolSize) * 0.5, et = O + p[E][N] * $, ht = P + y[I] * $, Rt = p[E][N] * o.symbolSize, yt = y[I] * o.symbolSize, se = W / 2 % m[U].length;
                  de(et, ht, Rt, yt, m[U][se]);
                }
                O += p[E][N], ++W, ++N, N === p[E].length && (N = 0);
              }
              ++E, E === p.length && (E = 0);
            }
            P += y[I], ++R, ++I, I === y.length && (I = 0);
          }
          function de(Ot, Dt, Z, tt, ir) {
            var Et = i ? 1 : e, Yr = Cn(ir, Ot * Et, Dt * Et, Z * Et, tt * Et, o.color, o.symbolKeepAspect);
            if (i) {
              var mr = n.painter.renderOneToVNode(Yr);
              mr && w.children.push(mr);
            } else
              Ff(T, Yr);
          }
        }
      }
    }
    function jg(r) {
      if (!r || r.length === 0)
        return [["rect"]];
      if (G(r))
        return [[r]];
      for (var t = !0, e = 0; e < r.length; ++e)
        if (!G(r[e])) {
          t = !1;
          break;
        }
      if (t)
        return jg([r]);
      for (var n = [], e = 0; e < r.length; ++e)
        G(r[e]) ? n.push([r[e]]) : n.push(r[e]);
      return n;
    }
    function Jg(r) {
      if (!r || r.length === 0)
        return [[0, 0]];
      if (ct(r)) {
        var t = Math.ceil(r);
        return [[t, t]];
      }
      for (var e = !0, n = 0; n < r.length; ++n)
        if (!ct(r[n])) {
          e = !1;
          break;
        }
      if (e)
        return Jg([r]);
      for (var i = [], n = 0; n < r.length; ++n)
        if (ct(r[n])) {
          var t = Math.ceil(r[n]);
          i.push([t, t]);
        } else {
          var t = H(r[n], function(s) {
            return Math.ceil(s);
          });
          t.length % 2 === 1 ? i.push(t.concat(t)) : i.push(t);
        }
      return i;
    }
    function fC(r) {
      if (!r || typeof r == "object" && r.length === 0)
        return [0, 0];
      if (ct(r)) {
        var t = Math.ceil(r);
        return [t, t];
      }
      var e = H(r, function(n) {
        return Math.ceil(n);
      });
      return r.length % 2 ? e.concat(e) : e;
    }
    function hC(r) {
      return H(r, function(t) {
        return ty(t);
      });
    }
    function ty(r) {
      for (var t = 0, e = 0; e < r.length; ++e)
        t += r[e];
      return r.length % 2 === 1 ? t * 2 : t;
    }
    function vC(r, t) {
      r.eachRawSeries(function(e) {
        if (!r.isSeriesFiltered(e)) {
          var n = e.getData();
          n.hasItemVisual() && n.each(function(o) {
            var s = n.getItemVisual(o, "decal");
            if (s) {
              var l = n.ensureUniqueItemVisual(o, "style");
              l.decal = Gf(s, t);
            }
          });
          var i = n.getVisual("decal");
          if (i) {
            var a = n.getVisual("style");
            a.decal = Gf(i, t);
          }
        }
      });
    }
    var ze = new Ue(), Ps = {};
    function cC(r, t) {
      Ps[r] && Ft("Already has an implementation of " + r + "."), Ps[r] = t;
    }
    function ey(r) {
      return Ps[r] || Ft("Implementation of " + r + " doesn't exists."), Ps[r];
    }
    var dC = "5.4.2", pC = {
      zrender: "5.4.3"
    }, gC = 1, yC = 800, mC = 900, _C = 1e3, SC = 2e3, wC = 5e3, ry = 1e3, bC = 1100, Hf = 2e3, ny = 3e3, xC = 4e3, Is = 4500, TC = 4600, CC = 5e3, DC = 6e3, iy = 7e3, ay = {
      PROCESSOR: {
        FILTER: _C,
        SERIES_FILTER: yC,
        STATISTIC: wC
      },
      VISUAL: {
        LAYOUT: ry,
        PROGRESSIVE_LAYOUT: bC,
        GLOBAL: Hf,
        CHART: ny,
        POST_CHART_LAYOUT: TC,
        COMPONENT: xC,
        BRUSH: CC,
        CHART_ITEM: Is,
        ARIA: DC,
        DECAL: iy
      }
    }, Vt = "__flagInMainProcess", ae = "__pendingUpdate", Vf = "__needsUpdateStatus", oy = /^[a-zA-Z0-9_]+$/, Wf = "__connectUpdateStatus", sy = 0, MC = 1, AC = 2;
    function ly(r) {
      return function() {
        for (var t = [], e = 0; e < arguments.length; e++)
          t[e] = arguments[e];
        if (this.isDisposed()) {
          ve(this.id);
          return;
        }
        return fy(this, r, t);
      };
    }
    function uy(r) {
      return function() {
        for (var t = [], e = 0; e < arguments.length; e++)
          t[e] = arguments[e];
        return fy(this, r, t);
      };
    }
    function fy(r, t, e) {
      return e[0] = e[0] && e[0].toLowerCase(), Ue.prototype[t].apply(r, e);
    }
    var hy = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          return r !== null && r.apply(this, arguments) || this;
        }
        return t;
      }(Ue)
    ), vy = hy.prototype;
    vy.on = uy("on"), vy.off = uy("off");
    var ci, Uf, Rs, Br, Yf, Xf, qf, Ca, Da, cy, dy, Zf, py, Es, gy, yy, Pe, my, ks = (
      /** @class */
      function(r) {
        B(t, r);
        function t(e, n, i) {
          var a = r.call(this, new RT()) || this;
          a._chartsViews = [], a._chartsMap = {}, a._componentsViews = [], a._componentsMap = {}, a._pendingActions = [], i = i || {}, G(n) && (n = _y[n]), a._dom = e;
          var o = "canvas", s = "auto", l = !1;
          {
            var u = (
              /* eslint-disable-next-line */
              X.hasGlobalWindow ? window : global
            );
            o = u.__ECHARTS__DEFAULT__RENDERER__ || o, s = J(u.__ECHARTS__DEFAULT__COARSE_POINTER, s);
            var f = u.__ECHARTS__DEFAULT__USE_DIRTY_RECT__;
            l = f ?? l;
          }
          var h = a._zr = au(e, {
            renderer: i.renderer || o,
            devicePixelRatio: i.devicePixelRatio,
            width: i.width,
            height: i.height,
            ssr: i.ssr,
            useDirtyRect: J(i.useDirtyRect, l),
            useCoarsePointer: J(i.useCoarsePointer, s),
            pointerSize: i.pointerSize
          });
          a._ssr = i.ssr, a._throttledZrFlush = bs(dt(h.flush, h), 17), n = rt(n), n && zp(n, !0), a._theme = n, a._locale = Bb(i.locale || op), a._coordSysMgr = new gs();
          var c = a._api = gy(a);
          function v(d, g) {
            return d.__prio - g.__prio;
          }
          return ja(Bs, v), ja(Kf, v), a._scheduler = new Mg(a, c, Kf, Bs), a._messageCenter = new hy(), a._initEvents(), a.resize = dt(a.resize, a), h.animation.on("frame", a._onframe, a), cy(h, a), dy(h, a), wi(a), a;
        }
        return t.prototype._onframe = function() {
          if (!this._disposed) {
            my(this);
            var e = this._scheduler;
            if (this[ae]) {
              var n = this[ae].silent;
              this[Vt] = !0;
              try {
                ci(this), Br.update.call(this, null, this[ae].updateParams);
              } catch (l) {
                throw this[Vt] = !1, this[ae] = null, l;
              }
              this._zr.flush(), this[Vt] = !1, this[ae] = null, Ca.call(this, n), Da.call(this, n);
            } else if (e.unfinished) {
              var i = gC, a = this._model, o = this._api;
              e.unfinished = !1;
              do {
                var s = +/* @__PURE__ */ new Date();
                e.performSeriesTasks(a), e.performDataProcessorTasks(a), Xf(this, a), e.performVisualTasks(a), Es(this, this._model, o, "remain", {}), i -= +/* @__PURE__ */ new Date() - s;
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
          if (this[Vt]) {
            Ft("`setOption` should not be called during main process.");
            return;
          }
          if (this._disposed) {
            ve(this.id);
            return;
          }
          var a, o, s;
          if (V(n) && (i = n.lazyUpdate, a = n.silent, o = n.replaceMerge, s = n.transition, n = n.notMerge), this[Vt] = !0, !this._model || n) {
            var l = new cx(this._api), u = this._theme, f = this._model = new gf();
            f.scheduler = this._scheduler, f.ssr = this._ssr, f.init(null, null, null, u, this._locale, l);
          }
          this._model.setOption(e, {
            replaceMerge: o
          }, Qf);
          var h = {
            seriesTransition: s,
            optionChanged: !0
          };
          if (i)
            this[ae] = {
              silent: a,
              updateParams: h
            }, this[Vt] = !1, this.getZr().wakeUp();
          else {
            try {
              ci(this), Br.update.call(this, null, h);
            } catch (c) {
              throw this[ae] = null, this[Vt] = !1, c;
            }
            this._ssr || this._zr.flush(), this[ae] = null, this[Vt] = !1, Ca.call(this, a), Da.call(this, a);
          }
        }, t.prototype.setTheme = function() {
          Oe("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
        }, t.prototype.getModel = function() {
          return this._model;
        }, t.prototype.getOption = function() {
          return this._model && this._model.getOption();
        }, t.prototype.getWidth = function() {
          return this._zr.getWidth();
        }, t.prototype.getHeight = function() {
          return this._zr.getHeight();
        }, t.prototype.getDevicePixelRatio = function() {
          return this._zr.painter.dpr || X.hasGlobalWindow && window.devicePixelRatio || 1;
        }, t.prototype.getRenderedCanvas = function(e) {
          return Mt("getRenderedCanvas", "renderToCanvas"), this.renderToCanvas(e);
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
          if (X.svgSupported) {
            var e = this._zr, n = e.storage.getDisplayList();
            return M(n, function(i) {
              i.stopAnimation(null, !0);
            }), e.painter.toDataURL();
          }
        }, t.prototype.getDataURL = function(e) {
          if (this._disposed) {
            ve(this.id);
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
            ve(this.id);
            return;
          }
          var n = e.type === "svg", i = this.group, a = Math.min, o = Math.max, s = 1 / 0;
          if (Ns[i]) {
            var l = s, u = s, f = -s, h = -s, c = [], v = e && e.pixelRatio || this.getDevicePixelRatio();
            M(An, function(_, S) {
              if (_.group === i) {
                var b = n ? _.getZr().painter.getSvgDom().innerHTML : _.renderToCanvas(rt(e)), w = _.getDom().getBoundingClientRect();
                l = a(w.left, l), u = a(w.top, u), f = o(w.right, f), h = o(w.bottom, h), c.push({
                  dom: b,
                  left: w.left,
                  top: w.top
                });
              }
            }), l *= v, u *= v, f *= v, h *= v;
            var d = f - l, g = h - u, p = ar.createCanvas(), y = au(p, {
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
              return e.connectedBackgroundColor && y.add(new Tt({
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
                var S = new ur({
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
          return Yf(this, "convertToPixel", e, n);
        }, t.prototype.convertFromPixel = function(e, n) {
          return Yf(this, "convertFromPixel", e, n);
        }, t.prototype.containPixel = function(e, n) {
          if (this._disposed) {
            ve(this.id);
            return;
          }
          var i = this._model, a, o = hu(i, e);
          return M(o, function(s, l) {
            l.indexOf("Models") >= 0 && M(s, function(u) {
              var f = u.coordinateSystem;
              if (f && f.containPoint)
                a = a || !!f.containPoint(n);
              else if (l === "seriesModels") {
                var h = this._chartsMap[u.__viewId];
                h && h.containPoint ? a = a || h.containPoint(n, u) : Nt(l + ": " + (h ? "The found component do not support containPoint." : "No view mapping to the found component."));
              } else
                Nt(l + ": containPoint is not supported");
            }, this);
          }, this), !!a;
        }, t.prototype.getVisual = function(e, n) {
          var i = this._model, a = hu(i, e, {
            defaultMainType: "series"
          }), o = a.seriesModel;
          o || Nt("There is no specified series model");
          var s = o.getData(), l = a.hasOwnProperty("dataIndexInside") ? a.dataIndexInside : a.hasOwnProperty("dataIndex") ? s.indexOfRawIndex(a.dataIndex) : null;
          return l != null ? OT(s, l, n) : BT(s, n);
        }, t.prototype.getViewOfComponentModel = function(e) {
          return this._componentsMap[e.__viewId];
        }, t.prototype.getViewOfSeriesModel = function(e) {
          return this._chartsMap[e.__viewId];
        }, t.prototype._initEvents = function() {
          var e = this;
          M(LC, function(n) {
            var i = function(a) {
              var o = e.getModel(), s = a.target, l, u = n === "globalout";
              if (u ? l = {} : s && xa(s, function(d) {
                var g = ot(d);
                if (g && g.dataIndex != null) {
                  var p = g.dataModel || o.getSeriesByIndex(g.seriesIndex);
                  return l = p && p.getDataParams(g.dataIndex, g.dataType) || {}, !0;
                } else if (g.eventData)
                  return l = k({}, g.eventData), !0;
              }, !0), l) {
                var f = l.componentType, h = l.componentIndex;
                (f === "markLine" || f === "markPoint" || f === "markArea") && (f = "series", h = l.seriesIndex);
                var c = f && h != null && o.getComponent(f, h), v = c && e[c.mainType === "series" ? "_chartsMap" : "_componentsMap"][c.__viewId];
                !u && !(c && v) && Nt("model or view can not be found by params"), l.event = a, l.type = n, e._$eventProcessor.eventInfo = {
                  targetEl: s,
                  packedEvent: l,
                  model: c,
                  view: v
                }, e.trigger(n, l);
              }
            };
            i.zrEventfulCallAtLast = !0, e._zr.on(n, i, e);
          }), M(Ma, function(n, i) {
            e._messageCenter.on(i, function(a) {
              this.trigger(i, a);
            }, e);
          }), M(["selectchanged"], function(n) {
            e._messageCenter.on(n, function(i) {
              this.trigger(n, i);
            }, e);
          }), FT(this._messageCenter, this, this._api);
        }, t.prototype.isDisposed = function() {
          return this._disposed;
        }, t.prototype.clear = function() {
          if (this._disposed) {
            ve(this.id);
            return;
          }
          this.setOption({
            series: []
          }, !0);
        }, t.prototype.dispose = function() {
          if (this._disposed) {
            ve(this.id);
            return;
          }
          this._disposed = !0;
          var e = this.getDom();
          e && Mc(this.getDom(), Jf, "");
          var n = this, i = n._api, a = n._model;
          M(n._componentsViews, function(o) {
            o.dispose(a, i);
          }), M(n._chartsViews, function(o) {
            o.dispose(a, i);
          }), n._zr.dispose(), n._dom = n._model = n._chartsMap = n._componentsMap = n._chartsViews = n._componentsViews = n._scheduler = n._api = n._zr = n._throttledZrFlush = n._theme = n._coordSysMgr = n._messageCenter = null, delete An[n.id];
        }, t.prototype.resize = function(e) {
          if (this[Vt]) {
            Ft("`resize` should not be called during main process.");
            return;
          }
          if (this._disposed) {
            ve(this.id);
            return;
          }
          this._zr.resize(e);
          var n = this._model;
          if (this._loadingFX && this._loadingFX.resize(), !!n) {
            var i = n.resetOption("media"), a = e && e.silent;
            this[ae] && (a == null && (a = this[ae].silent), i = !0, this[ae] = null), this[Vt] = !0;
            try {
              i && ci(this), Br.update.call(this, {
                type: "resize",
                animation: k({
                  // Disable animation
                  duration: 0
                }, e && e.animation)
              });
            } catch (o) {
              throw this[Vt] = !1, o;
            }
            this[Vt] = !1, Ca.call(this, a), Da.call(this, a);
          }
        }, t.prototype.showLoading = function(e, n) {
          if (this._disposed) {
            ve(this.id);
            return;
          }
          if (V(e) && (n = e, e = ""), e = e || "default", this.hideLoading(), !jf[e]) {
            Nt("Loading effects " + e + " not exists.");
            return;
          }
          var i = jf[e](this._api, n), a = this._zr;
          this._loadingFX = i, a.add(i);
        }, t.prototype.hideLoading = function() {
          if (this._disposed) {
            ve(this.id);
            return;
          }
          this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
        }, t.prototype.makeActionFromEvent = function(e) {
          var n = k({}, e);
          return n.type = Ma[e.type], n;
        }, t.prototype.dispatchAction = function(e, n) {
          if (this._disposed) {
            ve(this.id);
            return;
          }
          if (V(n) || (n = {
            silent: !!n
          }), !!Os[e.type] && this._model) {
            if (this[Vt]) {
              this._pendingActions.push(e);
              return;
            }
            var i = n.silent;
            qf.call(this, e, i);
            var a = n.flush;
            a ? this._zr.flush() : a !== !1 && X.browser.weChat && this._throttledZrFlush(), Ca.call(this, i), Da.call(this, i);
          }
        }, t.prototype.updateLabelLayout = function() {
          ze.trigger("series:layoutlabels", this._model, this._api, {
            // Not adding series labels.
            // TODO
            updatedSeries: []
          });
        }, t.prototype.appendData = function(e) {
          if (this._disposed) {
            ve(this.id);
            return;
          }
          var n = e.seriesIndex, i = this.getModel(), a = i.getSeriesByIndex(n);
          Q(e.data && a), a.appendData(e), this._scheduler.unfinished = !0, this.getZr().wakeUp();
        }, t.internalField = function() {
          ci = function(h) {
            var c = h._scheduler;
            c.restorePipelines(h._model), c.prepareStageTasks(), Uf(h, !0), Uf(h, !1), c.plan();
          }, Uf = function(h, c) {
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
                var A = Ze(w.type), C = c ? $t.getClass(A.main, A.sub) : (
                  // FIXME:TS
                  // (ChartView as ChartViewConstructor).getClass('series', classType.sub)
                  // For backward compat, still support a chart type declared as only subType
                  // like "liquidfill", but recommend "series.liquidfill"
                  // But need a base class to make a type series.
                  Kt.getClass(A.sub)
                );
                Q(C, A.sub + " does not exist."), D = new C(), D.init(v, m), p[T] = D, g.push(D), y.add(D.group);
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
          }, Rs = function(h, c, v, d, g) {
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
            _ != null && (S = j(), M(qt(_), function(w) {
              var x = qe(w, null);
              x != null && S.set(x, !0);
            })), p && p.eachComponent(m, function(w) {
              var x = S && S.get(w.id) != null;
              if (!x)
                if (bd(v))
                  if (w instanceof ne)
                    v.type === gn && !v.notBlur && !w.get(["emphasis", "disabled"]) && Lw(w, v, h._api);
                  else {
                    var T = Ou(w.mainType, w.componentIndex, v.name, h._api), D = T.focusSelf, A = T.dispatchers;
                    v.type === gn && D && !v.notBlur && ku(w.mainType, w.componentIndex, h._api), A && M(A, function(C) {
                      v.type === gn ? Oo(C) : Bo(C);
                    });
                  }
                else
                  Bu(v) && w instanceof ne && (Rw(w, v, h._api), _d(w), Pe(h));
            }, h), p && p.eachComponent(m, function(w) {
              var x = S && S.get(w.id) != null;
              x || b(h[d === "series" ? "_chartsMap" : "_componentsMap"][w.__viewId]);
            }, h);
            function b(w) {
              w && w.__alive && w[c] && w[c](w.__model, p, h._api, v);
            }
          }, Br = {
            prepareAndUpdate: function(h) {
              ci(this), Br.update.call(this, h, {
                // Needs to mark option changed if newOption is given.
                // It's from MagicType.
                // TODO If use a separate flag optionChanged in payload?
                optionChanged: h.newOption != null
              });
            },
            update: function(h, c) {
              var v = this._model, d = this._api, g = this._zr, p = this._coordSysMgr, y = this._scheduler;
              if (v) {
                v.setUpdatePayload(h), y.restoreData(v, h), y.performSeriesTasks(v), p.create(v, d), y.performDataProcessorTasks(v, h), Xf(this, v), p.update(v, d), e(v), y.performVisualTasks(v, h), Zf(this, v, d, h, c);
                var m = v.get("backgroundColor") || "transparent", _ = v.get("darkMode");
                g.setBackgroundColor(m), _ != null && _ !== "auto" && g.setDarkMode(_), ze.trigger("afterupdate", v, d);
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
                var p = j();
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
                }), Es(this, v, d, h, {}, p), ze.trigger("afterupdate", v, d);
              }
            },
            updateView: function(h) {
              var c = this._model;
              c && (c.setUpdatePayload(h), Kt.markUpdateMethod(h, "updateView"), e(c), this._scheduler.performVisualTasks(c, h, {
                setDirty: !0
              }), Zf(this, c, this._api, h, {}), ze.trigger("afterupdate", c, this._api));
            },
            updateVisual: function(h) {
              var c = this, v = this._model;
              v && (v.setUpdatePayload(h), v.eachSeries(function(d) {
                d.getData().clearAllVisual();
              }), Kt.markUpdateMethod(h, "updateVisual"), e(v), this._scheduler.performVisualTasks(v, h, {
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
              }), ze.trigger("afterupdate", v, this._api));
            },
            updateLayout: function(h) {
              Br.update.call(this, h);
            }
          }, Yf = function(h, c, v, d) {
            if (h._disposed) {
              ve(h.id);
              return;
            }
            for (var g = h._model, p = h._coordSysMgr.getCoordinateSystems(), y, m = hu(g, v), _ = 0; _ < p.length; _++) {
              var S = p[_];
              if (S[c] && (y = S[c](g, m, d)) != null)
                return y;
            }
            Nt("No coordinate system that supports " + c + " found by the given finder.");
          }, Xf = function(h, c) {
            var v = h._chartsMap, d = h._scheduler;
            c.eachSeries(function(g) {
              d.updateStreamModes(g, v[g.__viewId]);
            });
          }, qf = function(h, c) {
            var v = this, d = this.getModel(), g = h.type, p = h.escapeConnect, y = Os[g], m = y.actionInfo, _ = (m.update || "update").split(":"), S = _.pop(), b = _[0] != null && Ze(_[0]);
            this[Vt] = !0;
            var w = [h], x = !1;
            h.batch && (x = !0, w = H(h.batch, function(I) {
              return I = st(k({}, I), h), I.batch = null, I;
            }));
            var T = [], D, A = Bu(h), C = bd(h);
            if (C && md(this._api), M(w, function(I) {
              if (D = y.action(I, v._model, v._api), D = D || k({}, I), D.type = m.event || D.type, T.push(D), C) {
                var R = vu(h), E = R.queryOptionMap, U = R.mainTypeSpecified, O = U ? E.keys()[0] : "series";
                Rs(v, S, I, O), Pe(v);
              } else
                A ? (Rs(v, S, I, "series"), Pe(v)) : b && Rs(v, S, I, b.main, b.sub);
            }), S !== "none" && !C && !A && !b)
              try {
                this[ae] ? (ci(this), Br.update.call(this, h), this[ae] = null) : Br[S].call(this, h);
              } catch (I) {
                throw this[Vt] = !1, I;
              }
            if (x ? D = {
              type: m.event || g,
              escapeConnect: p,
              batch: T
            } : D = T[0], this[Vt] = !1, !c) {
              var L = this._messageCenter;
              if (L.trigger(D.type, D), A) {
                var P = {
                  type: "selectchanged",
                  escapeConnect: p,
                  selected: Ew(d),
                  isFromClick: h.isFromClick || !1,
                  fromAction: h.type,
                  fromActionPayload: h
                };
                L.trigger(P.type, P);
              }
            }
          }, Ca = function(h) {
            for (var c = this._pendingActions; c.length; ) {
              var v = c.shift();
              qf.call(this, v, h);
            }
          }, Da = function(h) {
            !h && this.trigger("updated");
          }, cy = function(h, c) {
            h.on("rendered", function(v) {
              c.trigger("rendered", v), // Although zr is dirty if initial animation is not finished
              // and this checking is called on frame, we also check
              // animation finished for robustness.
              h.animation.isFinished() && !c[ae] && !c._scheduler.unfinished && !c._pendingActions.length && c.trigger("finished");
            });
          }, dy = function(h, c) {
            h.on("mouseover", function(v) {
              var d = v.target, g = xa(d, Jn);
              g && (Pw(g, v, c._api), Pe(c));
            }).on("mouseout", function(v) {
              var d = v.target, g = xa(d, Jn);
              g && (Iw(g, v, c._api), Pe(c));
            }).on("click", function(v) {
              var d = v.target, g = xa(d, function(m) {
                return ot(m).dataIndex != null;
              }, !0);
              if (g) {
                var p = g.selected ? "unselect" : "select", y = ot(g);
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
              ja(g, function(m, _) {
                return m.zlevel === _.zlevel ? m.z - _.z : m.zlevel - _.zlevel;
              }), M(g, function(m) {
                var _ = h.getComponent(m.type, m.idx), S = m.zlevel, b = m.key;
                p != null && (S = Math.max(p, S)), b ? (S === p && b !== y && S++, y = b) : y && (S === p && S++, y = ""), p = S, _.setZLevel(S);
              });
            }
          }
          Zf = function(h, c, v, d, g) {
            n(c), py(h, c, v, d, g), M(h._chartsViews, function(p) {
              p.__alive = !1;
            }), Es(h, c, v, d, g), M(h._chartsViews, function(p) {
              p.__alive || p.remove(c, v);
            });
          }, py = function(h, c, v, d, g, p) {
            M(p || h._componentsViews, function(y) {
              var m = y.__model;
              u(m, y), y.render(m, c, v, d), s(m, y), f(m, y);
            });
          }, Es = function(h, c, v, d, g, p) {
            var y = h._scheduler;
            g = k(g || {}, {
              updatedSeries: c.getSeries()
            }), ze.trigger("series:beforeupdate", c, v, g);
            var m = !1;
            c.eachSeries(function(_) {
              var S = h._chartsMap[_.__viewId];
              S.__alive = !0;
              var b = S.renderTask;
              y.updatePayload(b, d), u(_, S), p && p.get(_.uid) && b.dirty(), b.perform(y.getPerformArgs(b)) && (m = !0), S.group.silent = !!_.get("silent"), o(_, S), _d(_);
            }), y.unfinished = m || y.unfinished, ze.trigger("series:layoutlabels", c, v, g), ze.trigger("series:transition", c, v, g), c.eachSeries(function(_) {
              var S = h._chartsMap[_.__viewId];
              s(_, S), f(_, S);
            }), a(h, c), ze.trigger("series:afterupdate", c, v, g);
          }, Pe = function(h) {
            h[Vf] = !0, h.getZr().wakeUp();
          }, my = function(h) {
            h[Vf] && (h.getZr().storage.traverse(function(c) {
              ni(c) || i(c);
            }), h[Vf] = !1);
          };
          function i(h) {
            for (var c = [], v = h.currentStates, d = 0; d < v.length; d++) {
              var g = v[d];
              g === "emphasis" || g === "blur" || g === "select" || c.push(g);
            }
            h.selected && h.states.select && c.push("select"), h.hoverState === Po && h.states.emphasis ? c.push("emphasis") : h.hoverState === Lo && h.states.blur && c.push("blur"), h.useStates(c);
          }
          function a(h, c) {
            var v = h._zr, d = v.storage, g = 0;
            d.traverse(function(p) {
              p.isGroup || g++;
            }), g > c.get("hoverLayerThreshold") && !X.node && !X.worker && c.eachSeries(function(p) {
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
              if (!ni(v)) {
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
                if (ni(y))
                  return;
                if (y instanceof ft && Fw(y), y.__dirty) {
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
          gy = function(h) {
            return new /** @class */
            (function(c) {
              B(v, c);
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
                Oo(d, g), Pe(h);
              }, v.prototype.leaveEmphasis = function(d, g) {
                Bo(d, g), Pe(h);
              }, v.prototype.enterBlur = function(d) {
                Aw(d), Pe(h);
              }, v.prototype.leaveBlur = function(d) {
                dd(d), Pe(h);
              }, v.prototype.enterSelect = function(d) {
                pd(d), Pe(h);
              }, v.prototype.leaveSelect = function(d) {
                gd(d), Pe(h);
              }, v.prototype.getModel = function() {
                return h.getModel();
              }, v.prototype.getViewOfComponentModel = function(d) {
                return h.getViewOfComponentModel(d);
              }, v.prototype.getViewOfSeriesModel = function(d) {
                return h.getViewOfSeriesModel(d);
              }, v;
            }(Rp))(h);
          }, yy = function(h) {
            function c(v, d) {
              for (var g = 0; g < v.length; g++) {
                var p = v[g];
                p[Wf] = d;
              }
            }
            M(Ma, function(v, d) {
              h._messageCenter.on(d, function(g) {
                if (Ns[h.group] && h[Wf] !== sy) {
                  if (g && g.escapeConnect)
                    return;
                  var p = h.makeActionFromEvent(g), y = [];
                  M(An, function(m) {
                    m !== h && m.group === h.group && y.push(m);
                  }), c(y, sy), M(y, function(m) {
                    m[Wf] !== MC && m.dispatchAction(p);
                  }), c(y, AC);
                }
              });
            });
          };
        }(), t;
      }(Ue)
    ), $f = ks.prototype;
    $f.on = ly("on"), $f.off = ly("off"), $f.one = function(r, t, e) {
      var n = this;
      Oe("ECharts#one is deprecated.");
      function i() {
        for (var a = [], o = 0; o < arguments.length; o++)
          a[o] = arguments[o];
        t && t.apply && t.apply(this, a), n.off(r, i);
      }
      this.on.call(this, r, i, e);
    };
    var LC = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
    function ve(r) {
      Nt("Instance " + r + " has been disposed");
    }
    var Os = {}, Ma = {}, Kf = [], Qf = [], Bs = [], _y = {}, jf = {}, An = {}, Ns = {}, PC = +/* @__PURE__ */ new Date() - 0, IC = +/* @__PURE__ */ new Date() - 0, Jf = "_echarts_instance_";
    function RC(r, t, e) {
      var n = !(e && e.ssr);
      if (n) {
        if (!r)
          throw new Error("Initialize failed: invalid dom.");
        var i = th(r);
        if (i)
          return Nt("There is a chart instance already initialized on the dom."), i;
        Nn(r) && r.nodeName.toUpperCase() !== "CANVAS" && (!r.clientWidth && (!e || e.width == null) || !r.clientHeight && (!e || e.height == null)) && Nt("Can't get DOM width or height. Please check dom.clientWidth and dom.clientHeight. They should not be 0.For example, you may need to call this in the callback of window.onload.");
      }
      var a = new ks(r, t, e);
      return a.id = "ec_" + PC++, An[a.id] = a, n && Mc(r, Jf, a.id), yy(a), ze.trigger("afterinit", a), a;
    }
    function EC(r) {
      if (F(r)) {
        var t = r;
        r = null, M(t, function(e) {
          e.group != null && (r = e.group);
        }), r = r || "g_" + IC++, M(t, function(e) {
          e.group = r;
        });
      }
      return Ns[r] = !0, r;
    }
    function Sy(r) {
      Ns[r] = !1;
    }
    var kC = Sy;
    function OC(r) {
      G(r) ? r = An[r] : r instanceof ks || (r = th(r)), r instanceof ks && !r.isDisposed() && r.dispose();
    }
    function th(r) {
      return An[_S(r, Jf)];
    }
    function BC(r) {
      return An[r];
    }
    function eh(r, t) {
      _y[r] = t;
    }
    function rh(r) {
      lt(Qf, r) < 0 && Qf.push(r);
    }
    function nh(r, t) {
      ih(Kf, r, t, SC);
    }
    function wy(r) {
      Fs("afterinit", r);
    }
    function by(r) {
      Fs("afterupdate", r);
    }
    function Fs(r, t) {
      ze.on(r, t);
    }
    function Ln(r, t, e) {
      Y(t) && (e = t, t = "");
      var n = V(r) ? r.type : [r, r = {
        event: t
      }][0];
      r.event = (r.event || n).toLowerCase(), t = r.event, !Ma[t] && (Q(oy.test(n) && oy.test(t)), Os[n] || (Os[n] = {
        action: e,
        actionInfo: r
      }), Ma[t] = n);
    }
    function xy(r, t) {
      gs.register(r, t);
    }
    function NC(r) {
      var t = gs.get(r);
      if (t)
        return t.getDimensionsInfo ? t.getDimensionsInfo() : t.dimensions.slice();
    }
    function Ty(r, t) {
      ih(Bs, r, t, ry, "layout");
    }
    function Nr(r, t) {
      ih(Bs, r, t, ny, "visual");
    }
    var Cy = [];
    function ih(r, t, e, n, i) {
      (Y(t) || V(t)) && (e = t, t = n);
      {
        if (isNaN(t) || t == null)
          throw new Error("Illegal priority");
        M(r, function(o) {
          Q(o.__raw !== e);
        });
      }
      if (!(lt(Cy, e) >= 0)) {
        Cy.push(e);
        var a = Mg.wrapStageHandler(e, i);
        a.__prio = t, a.__raw = e, r.push(a);
      }
    }
    function ah(r, t) {
      jf[r] = t;
    }
    function FC(r) {
      Oe("setCanvasCreator is deprecated. Use setPlatformAPI({ createCanvas }) instead."), av({
        createCanvas: r
      });
    }
    function Dy(r, t, e) {
      var n = ey("registerMap");
      n && n(r, t, e);
    }
    function zC(r) {
      var t = ey("getMap");
      return t && t(r);
    }
    var My = Ux;
    Nr(Hf, mT), Nr(Is, _T), Nr(Is, ST), Nr(Hf, ET), Nr(Is, kT), Nr(iy, vC), rh(zp), nh(mC, Dx), ah("default", wT), Ln({
      type: gn,
      event: gn,
      update: gn
    }, Yt), Ln({
      type: Ro,
      event: Ro,
      update: Ro
    }, Yt), Ln({
      type: Zi,
      event: Zi,
      update: Zi
    }, Yt), Ln({
      type: Eo,
      event: Eo,
      update: Eo
    }, Yt), Ln({
      type: $i,
      event: $i,
      update: $i
    }, Yt), eh("light", IT), eh("dark", kg);
    var GC = {};
    function Aa(r) {
      return r == null ? 0 : r.length || 1;
    }
    function Ay(r) {
      return r;
    }
    var HC = (
      /** @class */
      function() {
        function r(t, e, n, i, a, o) {
          this._old = t, this._new = e, this._oldKeyGetter = n || Ay, this._newKeyGetter = i || Ay, this.context = a, this._diffModeMultiple = o === "multiple";
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
            var s = i[o], l = n[s], u = Aa(l);
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
            var l = a[s], u = n[l], f = i[l], h = Aa(u), c = Aa(f);
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
            var i = t[n], a = e[i], o = Aa(a);
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
              var l = e[s], u = Aa(l);
              u === 0 ? (e[s] = o, a && n.push(s)) : u === 1 ? e[s] = [l, o] : l.push(o);
            }
          }
        }, r;
      }()
    ), VC = (
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
    function WC(r, t) {
      var e = {}, n = e.encode = {}, i = j(), a = [], o = [], s = {};
      M(r.dimensions, function(c) {
        var v = r.getDimensionInfo(c), d = v.coordDim;
        if (d) {
          Q(vf.get(d) == null);
          var g = v.coordDimIndex;
          oh(n, d)[g] = c, v.isExtraCoord || (i.set(d, 1), YC(v.type) && (a[0] = c), oh(s, d)[g] = r.getDimensionIndex(v.name)), v.defaultTooltip && o.push(c);
        }
        vf.each(function(p, y) {
          var m = oh(n, y), _ = v.otherDims[y];
          _ != null && _ !== !1 && (m[_] = v.name);
        });
      });
      var l = [], u = {};
      i.each(function(c, v) {
        var d = n[v];
        u[v] = d[0], l = l.concat(d);
      }), e.dataDimsOnCoord = l, e.dataDimIndicesOnCoord = H(l, function(c) {
        return r.getDimensionInfo(c).storeDimIndex;
      }), e.encodeFirstDimNotExtra = u;
      var f = n.label;
      f && f.length && (a = f.slice());
      var h = n.tooltip;
      return h && h.length ? o = h.slice() : o.length || (o = a.slice()), n.defaultedLabel = a, n.defaultedTooltip = o, e.userOutput = new VC(s, t), e;
    }
    function oh(r, t) {
      return r.hasOwnProperty(t) || (r[t] = []), r[t];
    }
    function UC(r) {
      return r === "category" ? "ordinal" : r === "time" ? "time" : "float";
    }
    function YC(r) {
      return !(r === "ordinal" || r === "time");
    }
    var zs = (
      /** @class */
      function() {
        function r(t) {
          this.otherDims = {}, t != null && k(this, t);
        }
        return r;
      }()
    ), XC = St(), qC = {
      float: "f",
      int: "i",
      ordinal: "o",
      number: "n",
      time: "t"
    }, Ly = (
      /** @class */
      function() {
        function r(t) {
          this.dimensions = t.dimensions, this._dimOmitted = t.dimensionOmitted, this.source = t.source, this._fullDimCount = t.fullDimensionCount, this._updateDimOmitted(t.dimensionOmitted);
        }
        return r.prototype.isDimensionOmitted = function() {
          return this._dimOmitted;
        }, r.prototype._updateDimOmitted = function(t) {
          this._dimOmitted = t, t && (this._dimNameMap || (this._dimNameMap = Ry(this.source)));
        }, r.prototype.getSourceDimensionIndex = function(t) {
          return J(this._dimNameMap.get(t), -1);
        }, r.prototype.getSourceDimension = function(t) {
          var e = this.source.dimensionsDefine;
          if (e)
            return e[t];
        }, r.prototype.makeStoreSchema = function() {
          for (var t = this._fullDimCount, e = Wp(this.source), n = !Ey(t), i = "", a = [], o = 0, s = 0; o < t; o++) {
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
            }), e && l != null && (!h || !h.isCalculationCoord) && (i += n ? l.replace(/\`/g, "`1").replace(/\$/g, "`2") : l), i += "$", i += qC[u] || "f", f && (i += f.uid), i += "$";
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
    function Py(r) {
      return r instanceof Ly;
    }
    function Iy(r) {
      for (var t = j(), e = 0; e < (r || []).length; e++) {
        var n = r[e], i = V(n) ? n.name : n;
        i != null && t.get(i) == null && t.set(i, e);
      }
      return t;
    }
    function Ry(r) {
      var t = XC(r);
      return t.dimNameMap || (t.dimNameMap = Iy(r.dimensionsDefine));
    }
    function Ey(r) {
      return r > 30;
    }
    var La = V, Fr = H, ZC = typeof Int32Array > "u" ? Array : Int32Array, $C = "e\0\0", ky = -1, KC = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"], QC = ["_approximateExtent"], Oy, Gs, Pa, di, sh, Hs, lh, uh = (
      /** @class */
      function() {
        function r(t, e) {
          this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !1, this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "lttbDownSample", "map"], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = ["downSample", "lttbDownSample"];
          var n, i = !1;
          Py(t) ? (n = t.dimensions, this._dimOmitted = t.isDimensionOmitted(), this._schema = t) : (i = !0, n = t), n = n || ["x", "y"];
          for (var a = {}, o = [], s = {}, l = !1, u = {}, f = 0; f < n.length; f++) {
            var h = n[f], c = G(h) ? new zs({
              name: h
            }) : h instanceof zs ? h : new zs(h), v = c.name;
            c.type = c.type || "float", c.coordDim || (c.coordDim = v, c.coordDimIndex = 0);
            var d = c.otherDims = c.otherDims || {};
            o.push(v), a[v] = c, u[v] != null && (l = !0), c.createInvertedIndices && (s[v] = []), d.itemName === 0 && (this._nameDimIdx = f), d.itemId === 0 && (this._idDimIdx = f), Q(i || c.storeDimIndex >= 0), i && (c.storeDimIndex = f);
          }
          if (this.dimensions = o, this._dimInfos = a, this._initGetDimensionInfo(l), this.hostModel = e, this._invertedIndicesMap = s, this._dimOmitted) {
            var g = this._dimIdxToName = j();
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
          if (ct(t) || t != null && !isNaN(t) && !this._getDimInfo(t) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(t) < 0))
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
          if (t instanceof Mf && (a = t), !a) {
            var o = this.dimensions, s = Sf(t) || Wt(t) ? new Xp(t, o.length) : t;
            a = new Mf();
            var l = Fr(o, function(u) {
              return {
                type: i._dimInfos[u].type,
                property: u
              };
            });
            a.initData(s, l, n);
          }
          this._store = a, this._nameList = (e || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, a.count()), this._dimSummary = WC(this, this._schema), this.userOutput = this._dimSummary.userOutput;
        }, r.prototype.appendData = function(t) {
          var e = this._store.appendData(t);
          this._doInit(e[0], e[1]);
        }, r.prototype.appendValues = function(t, e) {
          var n = this._store.appendValues(t, e.length), i = n.start, a = n.end, o = this._shouldMakeIdFromName();
          if (this._updateOrdinalMeta(), e)
            for (var s = i; s < a; s++) {
              var l = s - i;
              this._nameList[s] = e[l], o && lh(this, s);
            }
        }, r.prototype._updateOrdinalMeta = function() {
          for (var t = this._store, e = this.dimensions, n = 0; n < e.length; n++) {
            var i = this._dimInfos[e[n]];
            i.ordinalMeta && t.collectOrdinalMeta(i.storeDimIndex, i.ordinalMeta);
          }
        }, r.prototype._shouldMakeIdFromName = function() {
          var t = this._store.getProvider();
          return this._idDimIdx == null && t.getSource().sourceFormat !== dr && !t.fillStorage;
        }, r.prototype._doInit = function(t, e) {
          if (!(t >= e)) {
            var n = this._store, i = n.getProvider();
            this._updateOrdinalMeta();
            var a = this._nameList, o = this._idList, s = i.getSource().sourceFormat, l = s === Me;
            if (l && !i.pure)
              for (var u = [], f = t; f < e; f++) {
                var h = i.getItem(f, u);
                if (!this.hasItemOption && lS(h) && (this.hasItemOption = !0), h) {
                  var c = h.name;
                  a[f] == null && c != null && (a[f] = qe(c, null));
                  var v = h.id;
                  o[f] == null && v != null && (o[f] = qe(v, null));
                }
              }
            if (this._shouldMakeIdFromName())
              for (var f = t; f < e; f++)
                lh(this, f);
            Oy(this);
          }
        }, r.prototype.getApproximateExtent = function(t) {
          return this._approximateExtent[t] || this._store.getDataExtent(this._getStoreDimIndex(t));
        }, r.prototype.setApproximateExtent = function(t, e) {
          e = this.getDimension(e), this._approximateExtent[e] = t.slice();
        }, r.prototype.getCalculationInfo = function(t) {
          return this._calculationInfo[t];
        }, r.prototype.setCalculationInfo = function(t, e) {
          La(t) ? k(this._calculationInfo, t) : this._calculationInfo[t] = e;
        }, r.prototype.getName = function(t) {
          var e = this.getRawIndex(t), n = this._nameList[e];
          return n == null && this._nameDimIdx != null && (n = Pa(this, this._nameDimIdx, e)), n == null && (n = ""), n;
        }, r.prototype._getCategory = function(t, e) {
          var n = this._store.get(t, e), i = this._store.getOrdinalMeta(t);
          return i ? i.categories[n] : n;
        }, r.prototype.getId = function(t) {
          return Gs(this, this.getRawIndex(t));
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
          return F(t) ? i.getValues(Fr(t, function(a) {
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
          return i == null || isNaN(i) ? ky : i;
        }, r.prototype.indicesOfNearest = function(t, e, n) {
          return this._store.indicesOfNearest(this._getStoreDimIndex(t), e, n);
        }, r.prototype.each = function(t, e, n) {
          Y(t) && (n = e, e = t, t = []);
          var i = n || this, a = Fr(di(t), this._getStoreDimIndex, this);
          this._store.each(a, i ? dt(e, i) : e);
        }, r.prototype.filterSelf = function(t, e, n) {
          Y(t) && (n = e, e = t, t = []);
          var i = n || this, a = Fr(di(t), this._getStoreDimIndex, this);
          return this._store = this._store.filter(a, i ? dt(e, i) : e), this;
        }, r.prototype.selectRange = function(t) {
          var e = this, n = {}, i = pt(t);
          return M(i, function(a) {
            var o = e._getStoreDimIndex(a);
            n[o] = t[a];
          }), this._store = this._store.selectRange(n), this;
        }, r.prototype.mapArray = function(t, e, n) {
          Y(t) && (n = e, e = t, t = []), n = n || this;
          var i = [];
          return this.each(t, function() {
            i.push(e && e.apply(this, arguments));
          }, n), i;
        }, r.prototype.map = function(t, e, n, i) {
          var a = n || i || this, o = Fr(di(t), this._getStoreDimIndex, this), s = Hs(this);
          return s._store = this._store.map(o, a ? dt(e, a) : e), s;
        }, r.prototype.modify = function(t, e, n, i) {
          var a = this, o = n || i || this;
          M(di(t), function(l) {
            var u = a.getDimensionInfo(l);
            u.isCalculationCoord || console.error("Danger: only stack dimension can be modified");
          });
          var s = Fr(di(t), this._getStoreDimIndex, this);
          this._store.modify(s, o ? dt(e, o) : e);
        }, r.prototype.downSample = function(t, e, n, i) {
          var a = Hs(this);
          return a._store = this._store.downSample(this._getStoreDimIndex(t), e, n, i), a;
        }, r.prototype.lttbDownSample = function(t, e) {
          var n = Hs(this);
          return n._store = this._store.lttbDownSample(this._getStoreDimIndex(t), e), n;
        }, r.prototype.getRawDataItem = function(t) {
          return this._store.getRawDataItem(t);
        }, r.prototype.getItemModel = function(t) {
          var e = this.hostModel, n = this.getRawDataItem(t);
          return new mt(n, e, e && e.ecModel);
        }, r.prototype.diff = function(t) {
          var e = this;
          return new HC(t ? t.getStore().getIndices() : [], this.getStore().getIndices(), function(n) {
            return Gs(t, n);
          }, function(n) {
            return Gs(e, n);
          });
        }, r.prototype.getVisual = function(t) {
          var e = this._visual;
          return e && e[t];
        }, r.prototype.setVisual = function(t, e) {
          this._visual = this._visual || {}, La(t) ? k(this._visual, t) : this._visual[t] = e;
        }, r.prototype.getItemVisual = function(t, e) {
          var n = this._itemVisuals[t], i = n && n[e];
          return i ?? this.getVisual(e);
        }, r.prototype.hasItemVisual = function() {
          return this._itemVisuals.length > 0;
        }, r.prototype.ensureUniqueItemVisual = function(t, e) {
          var n = this._itemVisuals, i = n[t];
          i || (i = n[t] = {});
          var a = i[e];
          return a == null && (a = this.getVisual(e), F(a) ? a = a.slice() : La(a) && (a = k({}, a)), i[e] = a), a;
        }, r.prototype.setItemVisual = function(t, e, n) {
          var i = this._itemVisuals[t] || {};
          this._itemVisuals[t] = i, La(e) ? k(i, e) : i[e] = n;
        }, r.prototype.clearAllVisual = function() {
          this._visual = {}, this._itemVisuals = [];
        }, r.prototype.setLayout = function(t, e) {
          La(t) ? k(this._layout, t) : this._layout[t] = e;
        }, r.prototype.getLayout = function(t) {
          return this._layout[t];
        }, r.prototype.getItemLayout = function(t) {
          return this._itemLayouts[t];
        }, r.prototype.setItemLayout = function(t, e, n) {
          this._itemLayouts[t] = n ? k(this._itemLayouts[t] || {}, e) : e;
        }, r.prototype.clearItemLayouts = function() {
          this._itemLayouts.length = 0;
        }, r.prototype.setItemGraphicEl = function(t, e) {
          var n = this.hostModel && this.hostModel.seriesIndex;
          mw(n, this.dataType, t, e), this._graphicEls[t] = e;
        }, r.prototype.getItemGraphicEl = function(t) {
          return this._graphicEls[t];
        }, r.prototype.eachItemGraphicEl = function(t, e) {
          M(this._graphicEls, function(n, i) {
            n && t && t.call(e, n, i);
          });
        }, r.prototype.cloneShallow = function(t) {
          return t || (t = new r(this._schema ? this._schema : Fr(this.dimensions, this._getDimInfo, this), this.hostModel)), sh(t, this), t._store = this._store, t;
        }, r.prototype.wrapMethod = function(t, e) {
          var n = this[t];
          Y(n) && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {
            var i = n.apply(this, arguments);
            return e.apply(this, [i].concat(Wa(arguments)));
          });
        }, r.internalField = function() {
          Oy = function(t) {
            var e = t._invertedIndicesMap;
            M(e, function(n, i) {
              var a = t._dimInfos[i], o = a.ordinalMeta, s = t._store;
              if (o) {
                n = e[i] = new ZC(o.categories.length);
                for (var l = 0; l < n.length; l++)
                  n[l] = ky;
                for (var l = 0; l < s.count(); l++)
                  n[s.get(a.storeDimIndex, l)] = l;
              }
            });
          }, Pa = function(t, e, n) {
            return qe(t._getCategory(e, n), null);
          }, Gs = function(t, e) {
            var n = t._idList[e];
            return n == null && t._idDimIdx != null && (n = Pa(t, t._idDimIdx, e)), n == null && (n = $C + e), n;
          }, di = function(t) {
            return F(t) || (t = t != null ? [t] : []), t;
          }, Hs = function(t) {
            var e = new r(t._schema ? t._schema : Fr(t.dimensions, t._getDimInfo, t), t.hostModel);
            return sh(e, t), e;
          }, sh = function(t, e) {
            M(KC.concat(e.__wrappedMethods || []), function(n) {
              e.hasOwnProperty(n) && (t[n] = e[n]);
            }), t.__wrappedMethods = e.__wrappedMethods, M(QC, function(n) {
              t[n] = rt(e[n]);
            }), t._calculationInfo = k({}, e._calculationInfo);
          }, lh = function(t, e) {
            var n = t._nameList, i = t._idList, a = t._nameDimIdx, o = t._idDimIdx, s = n[e], l = i[e];
            if (s == null && a != null && (n[e] = s = Pa(t, a, e)), l == null && o != null && (i[e] = l = Pa(t, o, e)), l == null && s != null) {
              var u = t._nameRepeatCount, f = u[s] = (u[s] || 0) + 1;
              l = s, f > 1 && (l += "__ec__" + f), i[e] = l;
            }
          };
        }(), r;
      }()
    );
    function jC(r, t) {
      return fh(r, t).dimensions;
    }
    function fh(r, t) {
      Sf(r) || (r = bf(r)), t = t || {};
      var e = t.coordDimensions || [], n = t.dimensionsDefine || r.dimensionsDefine || [], i = j(), a = [], o = tD(r, e, n, t.dimensionsCount), s = t.canOmitUnusedDimensions && Ey(o), l = n === r.dimensionsDefine, u = l ? Ry(r) : Iy(n), f = t.encodeDefine;
      !f && t.encodeDefaulter && (f = t.encodeDefaulter(r, o));
      for (var h = j(f), c = new eg(o), v = 0; v < c.length; v++)
        c[v] = -1;
      function d(D) {
        var A = c[D];
        if (A < 0) {
          var C = n[D], L = V(C) ? C : {
            name: C
          }, P = new zs(), I = L.name;
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
        var C = qt(D).slice();
        if (C.length === 1 && !G(C[0]) && C[0] < 0) {
          h.set(A, !1);
          return;
        }
        var L = h.set(A, []);
        M(C, function(P, I) {
          var R = G(P) ? u.get(P) : P;
          R != null && R < o && (L[I] = R, p(d(R), A, I));
        });
      });
      var g = 0;
      M(e, function(D) {
        var A, C, L, P;
        if (G(D))
          A = D, P = {};
        else {
          P = D, A = P.name;
          var I = P.ordinalMeta;
          P.ordinalMeta = null, P = k({}, P), P.ordinalMeta = I, C = P.dimsDef, L = P.otherDims, P.name = P.coordDim = P.coordDimIndex = P.dimsDef = P.otherDims = null;
        }
        var R = h.get(A);
        if (R !== !1) {
          if (R = qt(R), !R.length)
            for (var E = 0; E < (C && C.length || 1); E++) {
              for (; g < o && d(g).coordDim != null; )
                g++;
              g < o && R.push(g++);
            }
          M(R, function(U, O) {
            var N = d(U);
            if (l && P.type != null && (N.type = P.type), p(st(N, P), A, O), N.name == null && C) {
              var W = C[O];
              !V(W) && (W = {
                name: W
              }), N.name = N.displayName = W.name, N.defaultTooltip = W.defaultTooltip;
            }
            L && st(N.otherDims, L);
          });
        }
      });
      function p(D, A, C) {
        vf.get(A) != null ? D.otherDims[A] = C : (D.coordDim = A, D.coordDimIndex = C, i.set(A, !0));
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
          T == null && (x.coordDim = eD(S, i, _), x.coordDimIndex = 0, (!y || m <= 0) && (x.isExtraCoord = !0), m--), b(x), x.type == null && (Tp(r, w) === kt.Must || x.isExtraCoord && (x.otherDims.itemName != null || x.otherDims.seriesName != null)) && (x.type = "ordinal");
        }
      return JC(a), new Ly({
        source: r,
        dimensions: a,
        fullDimensionCount: o,
        dimensionOmitted: s
      });
    }
    function JC(r) {
      for (var t = j(), e = 0; e < r.length; e++) {
        var n = r[e], i = n.name, a = t.get(i) || 0;
        a > 0 && (n.name = i + (a - 1)), a++, t.set(i, a);
      }
    }
    function tD(r, t, e, n) {
      var i = Math.max(r.dimensionsDetectedCount || 1, t.length, e.length, n || 0);
      return M(t, function(a) {
        var o;
        V(a) && (o = a.dimsDef) && (i = Math.max(i, o.length));
      }), i;
    }
    function eD(r, t, e) {
      if (e || t.hasKey(r)) {
        for (var n = 0; t.hasKey(r + n); )
          n++;
        r += n;
      }
      return t.set(r, !0), r;
    }
    var rD = (
      /** @class */
      function() {
        function r(t) {
          this.coordSysDims = [], this.axisMap = j(), this.categoryAxisMap = j(), this.coordSysName = t;
        }
        return r;
      }()
    );
    function nD(r) {
      var t = r.get("coordinateSystem"), e = new rD(t), n = iD[t];
      if (n)
        return n(r, e, e.axisMap, e.categoryAxisMap), e;
    }
    var iD = {
      cartesian2d: function(r, t, e, n) {
        var i = r.getReferringComponents("xAxis", Be).models[0], a = r.getReferringComponents("yAxis", Be).models[0];
        {
          if (!i)
            throw new Error('xAxis "' + Sr(r.get("xAxisIndex"), r.get("xAxisId"), 0) + '" not found');
          if (!a)
            throw new Error('yAxis "' + Sr(r.get("xAxisIndex"), r.get("yAxisId"), 0) + '" not found');
        }
        t.coordSysDims = ["x", "y"], e.set("x", i), e.set("y", a), pi(i) && (n.set("x", i), t.firstCategoryDimIndex = 0), pi(a) && (n.set("y", a), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
      },
      singleAxis: function(r, t, e, n) {
        var i = r.getReferringComponents("singleAxis", Be).models[0];
        if (!i)
          throw new Error("singleAxis should be specified.");
        t.coordSysDims = ["single"], e.set("single", i), pi(i) && (n.set("single", i), t.firstCategoryDimIndex = 0);
      },
      polar: function(r, t, e, n) {
        var i = r.getReferringComponents("polar", Be).models[0], a = i.findAxisModel("radiusAxis"), o = i.findAxisModel("angleAxis");
        {
          if (!o)
            throw new Error("angleAxis option not found");
          if (!a)
            throw new Error("radiusAxis option not found");
        }
        t.coordSysDims = ["radius", "angle"], e.set("radius", a), e.set("angle", o), pi(a) && (n.set("radius", a), t.firstCategoryDimIndex = 0), pi(o) && (n.set("angle", o), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
      },
      geo: function(r, t, e, n) {
        t.coordSysDims = ["lng", "lat"];
      },
      parallel: function(r, t, e, n) {
        var i = r.ecModel, a = i.getComponent("parallel", r.get("parallelIndex")), o = t.coordSysDims = a.dimensions.slice();
        M(a.parallelAxisIndex, function(s, l) {
          var u = i.getComponent("parallelAxis", s), f = o[l];
          e.set(f, u), pi(u) && (n.set(f, u), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = l));
        });
      }
    };
    function pi(r) {
      return r.get("type") === "category";
    }
    function By(r, t, e) {
      e = e || {};
      var n = e.byIndex, i = e.stackedCoordDimension, a, o, s;
      aD(t) ? a = t : (o = t.schema, a = o.dimensions, s = t.store);
      var l = !!(r && r.get("stack")), u, f, h, c;
      if (M(a, function(m, _) {
        G(m) && (a[_] = m = {
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
    function aD(r) {
      return !Py(r.schema);
    }
    function Pn(r, t) {
      return !!t && t === r.getCalculationInfo("stackedDimension");
    }
    function Ny(r, t) {
      return Pn(r, t) ? r.getCalculationInfo("stackResultDimension") : t;
    }
    function oD(r, t) {
      var e = r.get("coordinateSystem"), n = gs.get(e), i;
      return t && t.coordSysDims && (i = H(t.coordSysDims, function(a) {
        var o = {
          name: a
        }, s = t.axisMap.get(a);
        if (s) {
          var l = s.get("type");
          o.type = UC(l);
        }
        return o;
      })), i || (i = n && (n.getDimensionsInfo ? n.getDimensionsInfo() : n.dimensions.slice()) || ["x", "y"]), i;
    }
    function sD(r, t, e) {
      var n, i;
      return e && M(r, function(a, o) {
        var s = a.coordDim, l = e.categoryAxisMap.get(s);
        l && (n == null && (n = o), a.ordinalMeta = l.getOrdinalMeta(), t && (a.createInvertedIndices = !0)), a.otherDims.itemName != null && (i = !0);
      }), !i && n != null && (r[n].otherDims.itemName = 0), n;
    }
    function Vs(r, t, e) {
      e = e || {};
      var n = t.getSourceManager(), i, a = !1;
      r ? (a = !0, i = bf(r)) : (i = n.getSource(), a = i.sourceFormat === Me);
      var o = nD(t), s = oD(t, o), l = e.useEncodeDefaulter, u = Y(l) ? l : l ? _t(jb, s, t) : null, f = {
        coordDimensions: s,
        generateCoord: e.generateCoord,
        encodeDefine: t.getEncode(),
        encodeDefaulter: u,
        canOmitUnusedDimensions: !a
      }, h = fh(i, f), c = sD(h.dimensions, e.createInvertedIndices, o), v = a ? null : n.getSharedDataStore(h), d = By(t, {
        schema: h,
        store: v
      }), g = new uh(h, t);
      g.setCalculationInfo(d);
      var p = c != null && lD(i) ? function(y, m, _, S) {
        return S === c ? _ : this.defaultDimValueGetter(y, m, _, S);
      } : null;
      return g.hasItemOption = !1, g.initData(
        // Try to reuse the data store in sourceManager if using dataset.
        a ? i : v,
        null,
        p
      ), g;
    }
    function lD(r) {
      if (r.sourceFormat === Me) {
        var t = uD(r.data || []);
        return !F(Hi(t));
      }
    }
    function uD(r) {
      for (var t = 0; t < r.length && r[t] == null; )
        t++;
      return r[t];
    }
    var er = (
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
    bo(er);
    var fD = 0, hh = (
      /** @class */
      function() {
        function r(t) {
          this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this.uid = ++fD;
        }
        return r.createByAxisModel = function(t) {
          var e = t.option, n = e.data, i = n && H(n, hD);
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
          if (!G(t) && !n)
            return t;
          if (n && !this._deduplication)
            return e = this.categories.length, this.categories[e] = t, e;
          var i = this._getOrCreateMap();
          return e = i.get(t), e == null && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e)) : e = NaN), e;
        }, r.prototype._getOrCreateMap = function() {
          return this._map || (this._map = j(this.categories));
        }, r;
      }()
    );
    function hD(r) {
      return V(r) && r.value != null ? r.value : r + "";
    }
    function vD(r) {
      var t = Math.pow(10, zi(Math.abs(r))), e = Math.abs(r / t);
      return e === 0 || e === 1 || e === 2 || e === 3 || e === 5;
    }
    function vh(r) {
      return r.type === "interval" || r.type === "log";
    }
    function cD(r, t, e, n) {
      var i = {}, a = r[1] - r[0], o = i.interval = su(a / t, !0);
      e != null && o < e && (o = i.interval = e), n != null && o > n && (o = i.interval = n);
      var s = i.intervalPrecision = Fy(o), l = i.niceTickExtent = [xt(Math.ceil(r[0] / o) * o, s), xt(Math.floor(r[1] / o) * o, s)];
      return dD(l, r), i;
    }
    function ch(r) {
      var t = Math.pow(10, zi(r)), e = r / t;
      return e ? e === 2 ? e = 3 : e === 3 ? e = 5 : e *= 2 : e = 1, xt(e * t);
    }
    function Fy(r) {
      return Xe(r) + 2;
    }
    function zy(r, t, e) {
      r[t] = Math.max(Math.min(r[t], e[1]), e[0]);
    }
    function dD(r, t) {
      !isFinite(r[0]) && (r[0] = t[0]), !isFinite(r[1]) && (r[1] = t[1]), zy(r, 0, t), zy(r, 1, t), r[0] > r[1] && (r[0] = r[1]);
    }
    function Ws(r, t) {
      return r >= t[0] && r <= t[1];
    }
    function Us(r, t) {
      return t[1] === t[0] ? 0.5 : (r - t[0]) / (t[1] - t[0]);
    }
    function Ys(r, t) {
      return r * (t[1] - t[0]) + t[0];
    }
    var dh = (
      /** @class */
      function(r) {
        B(t, r);
        function t(e) {
          var n = r.call(this, e) || this;
          n.type = "ordinal";
          var i = n.getSetting("ordinalMeta");
          return i || (i = new hh({})), F(i) && (i = new hh({
            categories: H(i, function(a) {
              return V(a) ? a.value : a;
            })
          })), n._ordinalMeta = i, n._extent = n.getSetting("extent") || [0, i.categories.length - 1], n;
        }
        return t.prototype.parse = function(e) {
          return e == null ? NaN : G(e) ? this._ordinalMeta.getOrdinal(e) : Math.round(e);
        }, t.prototype.contain = function(e) {
          return e = this.parse(e), Ws(e, this._extent) && this._ordinalMeta.categories[e] != null;
        }, t.prototype.normalize = function(e) {
          return e = this._getTickNumber(this.parse(e)), Us(e, this._extent);
        }, t.prototype.scale = function(e) {
          return e = Math.round(Ys(e, this._extent)), this.getRawOrdinalNumber(e);
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
      }(er)
    );
    er.registerClass(dh);
    var In = xt, gi = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          var e = r !== null && r.apply(this, arguments) || this;
          return e.type = "interval", e._interval = 0, e._intervalPrecision = 2, e;
        }
        return t.prototype.parse = function(e) {
          return e;
        }, t.prototype.contain = function(e) {
          return Ws(e, this._extent);
        }, t.prototype.normalize = function(e) {
          return Us(e, this._extent);
        }, t.prototype.scale = function(e) {
          return Ys(e, this._extent);
        }, t.prototype.setExtent = function(e, n) {
          var i = this._extent;
          isNaN(e) || (i[0] = parseFloat(e)), isNaN(n) || (i[1] = parseFloat(n));
        }, t.prototype.unionExtent = function(e) {
          var n = this._extent;
          e[0] < n[0] && (n[0] = e[0]), e[1] > n[1] && (n[1] = e[1]), this.setExtent(n[0], n[1]);
        }, t.prototype.getInterval = function() {
          return this._interval;
        }, t.prototype.setInterval = function(e) {
          this._interval = e, this._niceExtent = this._extent.slice(), this._intervalPrecision = Fy(e);
        }, t.prototype.getTicks = function(e) {
          var n = this._interval, i = this._extent, a = this._niceExtent, o = this._intervalPrecision, s = [];
          if (!n)
            return s;
          var l = 1e4;
          i[0] < a[0] && (e ? s.push({
            value: In(a[0] - n, o)
          }) : s.push({
            value: i[0]
          }));
          for (var u = a[0]; u <= a[1] && (s.push({
            value: u
          }), u = In(u + n, o), u !== s[s.length - 1].value); )
            if (s.length > l)
              return [];
          var f = s.length ? s[s.length - 1].value : a[1];
          return i[1] > f && (e ? s.push({
            value: In(f + n, o)
          }) : s.push({
            value: i[1]
          })), s;
        }, t.prototype.getMinorTicks = function(e) {
          for (var n = this.getTicks(!0), i = [], a = this.getExtent(), o = 1; o < n.length; o++) {
            for (var s = n[o], l = n[o - 1], u = 0, f = [], h = s.value - l.value, c = h / e; u < e - 1; ) {
              var v = In(l.value + (u + 1) * c);
              v > a[0] && v < a[1] && f.push(v), u++;
            }
            i.push(f);
          }
          return i;
        }, t.prototype.getLabel = function(e, n) {
          if (e == null)
            return "";
          var i = n && n.precision;
          i == null ? i = Xe(e.value) || 0 : i === "auto" && (i = this._intervalPrecision);
          var a = In(e.value, i, !0);
          return of(a);
        }, t.prototype.calcNiceTicks = function(e, n, i) {
          e = e || 5;
          var a = this._extent, o = a[1] - a[0];
          if (isFinite(o)) {
            o < 0 && (o = -o, a.reverse());
            var s = cD(a, e, n, i);
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
          e.fixMin || (n[0] = In(Math.floor(n[0] / o) * o)), e.fixMax || (n[1] = In(Math.ceil(n[1] / o) * o));
        }, t.prototype.setNiceExtent = function(e, n) {
          this._niceExtent = [e, n];
        }, t.type = "interval", t;
      }(er)
    );
    er.registerClass(gi);
    var Gy = typeof Float32Array < "u", pD = Gy ? Float32Array : Array;
    function gr(r) {
      return F(r) ? Gy ? new Float32Array(r) : r : new pD(r);
    }
    var gD = "__ec_stack_";
    function ph(r) {
      return r.get("stack") || gD + r.seriesIndex;
    }
    function gh(r) {
      return r.dim + r.index;
    }
    function Hy(r, t) {
      var e = [];
      return t.eachSeriesByType(r, function(n) {
        Wy(n) && e.push(n);
      }), e;
    }
    function yD(r) {
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
    function Vy(r) {
      var t = yD(r), e = [];
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
        var d = gt(n.get("barWidth"), s), g = gt(n.get("barMaxWidth"), s), p = gt(
          // barMinWidth by default is 0.5 / 1 in cartesian. Because in value axis,
          // the auto-calculated bar width might be less than 0.5 / 1.
          n.get("barMinWidth") || (Uy(n) ? 0.5 : 1),
          s
        ), y = n.get("barGap"), m = n.get("barCategoryGap");
        e.push({
          bandWidth: s,
          barWidth: d,
          barMaxWidth: g,
          barMinWidth: p,
          barGap: y,
          barCategoryGap: m,
          axisKey: gh(a),
          stackId: ph(n)
        });
      }), mD(e);
    }
    function mD(r) {
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
          var l = pt(a).length;
          s = Math.max(35 - l * 4, 15) + "%";
        }
        var u = gt(s, o), f = gt(n.gap, 1), h = n.remainedWidth, c = n.autoWidthCount, v = (h - u) / (c + (c - 1) * f);
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
    function _D(r, t, e) {
      if (r && t) {
        var n = r[gh(t)];
        return n != null && e != null ? n[ph(e)] : n;
      }
    }
    function SD(r, t) {
      var e = Hy(r, t), n = Vy(e);
      M(e, function(i) {
        var a = i.getData(), o = i.coordinateSystem, s = o.getBaseAxis(), l = ph(i), u = n[gh(s)][l], f = u.offset, h = u.width;
        a.setLayout({
          bandWidth: u.bandWidth,
          offset: f,
          size: h
        });
      });
    }
    function wD(r) {
      return {
        seriesType: r,
        plan: Rf(),
        reset: function(t) {
          if (Wy(t)) {
            var e = t.getData(), n = t.coordinateSystem, i = n.getBaseAxis(), a = n.getOtherAxis(i), o = e.getDimensionIndex(e.mapDimension(a.dim)), s = e.getDimensionIndex(e.mapDimension(i.dim)), l = t.get("showBackground", !0), u = e.mapDimension(a.dim), f = e.getCalculationInfo("stackResultDimension"), h = Pn(e, u) && !!e.getCalculationInfo("stackedOnSeries"), c = a.isHorizontal(), v = bD(i, a), d = Uy(t), g = t.get("barMinHeight") || 0, p = f && e.getDimensionIndex(f), y = e.getLayout("size"), m = e.getLayout("offset");
            return {
              progress: function(_, S) {
                for (var b = _.count, w = d && gr(b * 3), x = d && l && gr(b * 3), T = d && gr(b), D = n.master.getRect(), A = c ? D.width : D.height, C, L = S.getStore(), P = 0; (C = _.next()) != null; ) {
                  var I = L.get(h ? p : o, C), R = L.get(s, C), E = v, U = void 0;
                  h && (U = +I - L.get(o, C));
                  var O = void 0, N = void 0, W = void 0, K = void 0;
                  if (c) {
                    var $ = n.dataToPoint([I, R]);
                    if (h) {
                      var et = n.dataToPoint([U, R]);
                      E = et[0];
                    }
                    O = E, N = $[1] + m, W = $[0] - E, K = y, Math.abs(W) < g && (W = (W < 0 ? -1 : 1) * g);
                  } else {
                    var $ = n.dataToPoint([R, I]);
                    if (h) {
                      var et = n.dataToPoint([R, U]);
                      E = et[1];
                    }
                    O = $[0] + m, N = E, W = y, K = $[1] - E, Math.abs(K) < g && (K = (K <= 0 ? -1 : 1) * g);
                  }
                  d ? (w[P] = O, w[P + 1] = N, w[P + 2] = c ? W : K, x && (x[P] = c ? D.x : O, x[P + 1] = c ? N : D.y, x[P + 2] = A), T[C] = C) : S.setItemLayout(C, {
                    x: O,
                    y: N,
                    width: W,
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
    function Wy(r) {
      return r.coordinateSystem && r.coordinateSystem.type === "cartesian2d";
    }
    function Uy(r) {
      return r.pipelineContext && r.pipelineContext.large;
    }
    function bD(r, t) {
      return t.toGlobalCoord(t.dataToCoord(t.type === "log" ? 1 : 0));
    }
    var xD = function(r, t, e, n) {
      for (; e < n; ) {
        var i = e + n >>> 1;
        r[i][1] < t ? e = i + 1 : n = i;
      }
      return e;
    }, Yy = (
      /** @class */
      function(r) {
        B(t, r);
        function t(e) {
          var n = r.call(this, e) || this;
          return n.type = "time", n;
        }
        return t.prototype.getLabel = function(e) {
          var n = this.getSetting("useUTC");
          return la(e.value, lp[Gb(ai(this._minLevelUnit))] || lp.second, n, this.getSetting("locale"));
        }, t.prototype.getFormattedLabel = function(e, n, i) {
          var a = this.getSetting("useUTC"), o = this.getSetting("locale");
          return Hb(e, n, i, o, a);
        }, t.prototype.getTicks = function() {
          var e = this._interval, n = this._extent, i = [];
          if (!e)
            return i;
          i.push({
            value: n[0],
            level: 0
          });
          var a = this.getSetting("useUTC"), o = PD(this._minLevelUnit, this._approxInterval, a, n);
          return i = i.concat(o), i.push({
            value: n[1],
            level: 0
          }), i;
        }, t.prototype.calcNiceExtent = function(e) {
          var n = this._extent;
          if (n[0] === n[1] && (n[0] -= De, n[1] += De), n[1] === -1 / 0 && n[0] === 1 / 0) {
            var i = /* @__PURE__ */ new Date();
            n[1] = +new Date(i.getFullYear(), i.getMonth(), i.getDate()), n[0] = n[1] - De;
          }
          this.calcNiceTicks(e.splitNumber, e.minInterval, e.maxInterval);
        }, t.prototype.calcNiceTicks = function(e, n, i) {
          e = e || 10;
          var a = this._extent, o = a[1] - a[0];
          this._approxInterval = o / e, n != null && this._approxInterval < n && (this._approxInterval = n), i != null && this._approxInterval > i && (this._approxInterval = i);
          var s = Xs.length, l = Math.min(xD(Xs, this._approxInterval, 0, s), s - 1);
          this._interval = Xs[l][1], this._minLevelUnit = Xs[Math.max(l - 1, 0)][0];
        }, t.prototype.parse = function(e) {
          return ct(e) ? e : +Se(e);
        }, t.prototype.contain = function(e) {
          return Ws(this.parse(e), this._extent);
        }, t.prototype.normalize = function(e) {
          return Us(this.parse(e), this._extent);
        }, t.prototype.scale = function(e) {
          return Ys(e, this._extent);
        }, t.type = "time", t;
      }(gi)
    ), Xs = [
      // Format                           interval
      ["second", ef],
      ["minute", rf],
      ["hour", oa],
      ["quarter-day", oa * 6],
      ["half-day", oa * 12],
      ["day", De * 1.2],
      ["half-week", De * 3.5],
      ["week", De * 7],
      ["month", De * 31],
      ["quarter", De * 95],
      ["half-year", sp / 2],
      ["year", sp]
      // 1Y
    ];
    function TD(r, t, e, n) {
      var i = Se(t), a = Se(e), o = function(d) {
        return hp(i, d, n) === hp(a, d, n);
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
    function CD(r, t) {
      return r /= De, r > 16 ? 16 : r > 7.5 ? 7 : r > 3.5 ? 4 : r > 1.5 ? 2 : 1;
    }
    function DD(r) {
      var t = 30 * De;
      return r /= t, r > 6 ? 6 : r > 3 ? 3 : r > 2 ? 2 : 1;
    }
    function MD(r) {
      return r /= oa, r > 12 ? 12 : r > 6 ? 6 : r > 3.5 ? 4 : r > 2 ? 2 : 1;
    }
    function Xy(r, t) {
      return r /= t ? rf : ef, r > 30 ? 30 : r > 20 ? 20 : r > 15 ? 15 : r > 10 ? 10 : r > 5 ? 5 : r > 2 ? 2 : 1;
    }
    function AD(r) {
      return su(r, !0);
    }
    function LD(r, t, e) {
      var n = new Date(r);
      switch (ai(t)) {
        case "year":
        case "month":
          n[vp(e)](0);
        case "day":
          n[cp(e)](1);
        case "hour":
          n[dp(e)](0);
        case "minute":
          n[pp(e)](0);
        case "second":
          n[gp(e)](0), n[yp(e)](0);
      }
      return n.getTime();
    }
    function PD(r, t, e, n) {
      var i = 1e4, a = up, o = 0;
      function s(A, C, L, P, I, R, E) {
        for (var U = new Date(C), O = C, N = U[P](); O < L && O <= n[1]; )
          E.push({
            value: O
          }), N += A, U[I](N), O = U.getTime();
        E.push({
          value: O,
          notAdd: !0
        });
      }
      function l(A, C, L) {
        var P = [], I = !C.length;
        if (!TD(ai(A), n[0], n[1], e)) {
          I && (C = [{
            // TODO Optimize. Not include so may ticks.
            value: LD(new Date(n[0]), A, e)
          }, {
            value: n[1]
          }]);
          for (var R = 0; R < C.length - 1; R++) {
            var E = C[R].value, U = C[R + 1].value;
            if (E !== U) {
              var O = void 0, N = void 0, W = void 0, K = !1;
              switch (A) {
                case "year":
                  O = Math.max(1, Math.round(t / De / 365)), N = af(e), W = Vb(e);
                  break;
                case "half-year":
                case "quarter":
                case "month":
                  O = DD(t), N = oi(e), W = vp(e);
                  break;
                case "week":
                case "half-week":
                case "day":
                  O = CD(t), N = ss(e), W = cp(e), K = !0;
                  break;
                case "half-day":
                case "quarter-day":
                case "hour":
                  O = MD(t), N = ua(e), W = dp(e);
                  break;
                case "minute":
                  O = Xy(t, !0), N = ls(e), W = pp(e);
                  break;
                case "second":
                  O = Xy(t, !1), N = us(e), W = gp(e);
                  break;
                case "millisecond":
                  O = AD(t), N = fs(e), W = yp(e);
                  break;
              }
              s(O, E, U, N, W, K, P), A === "year" && L.length > 1 && R === 0 && L.unshift({
                value: L[0].value - O
              });
            }
          }
          for (var R = 0; R < P.length; R++)
            L.push(P[R]);
          return P;
        }
      }
      for (var u = [], f = [], h = 0, c = 0, v = 0; v < a.length && o++ < i; ++v) {
        var d = ai(a[v]);
        if (zb(a[v])) {
          l(a[v], u[u.length - 1] || [], f);
          var g = a[v + 1] ? ai(a[v + 1]) : null;
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
      o >= i && Nt("Exceed safe limit.");
      for (var S = bt(H(u, function(A) {
        return bt(A, function(C) {
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
    er.registerClass(Yy);
    var qy = er.prototype, Ia = gi.prototype, ID = xt, RD = Math.floor, ED = Math.ceil, qs = Math.pow, Ge = Math.log, yh = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          var e = r !== null && r.apply(this, arguments) || this;
          return e.type = "log", e.base = 10, e._originalScale = new gi(), e._interval = 0, e;
        }
        return t.prototype.getTicks = function(e) {
          var n = this._originalScale, i = this._extent, a = n.getExtent(), o = Ia.getTicks.call(this, e);
          return H(o, function(s) {
            var l = s.value, u = xt(qs(this.base, l));
            return u = l === i[0] && this._fixMin ? Zs(u, a[0]) : u, u = l === i[1] && this._fixMax ? Zs(u, a[1]) : u, {
              value: u
            };
          }, this);
        }, t.prototype.setExtent = function(e, n) {
          var i = Ge(this.base);
          e = Ge(Math.max(0, e)) / i, n = Ge(Math.max(0, n)) / i, Ia.setExtent.call(this, e, n);
        }, t.prototype.getExtent = function() {
          var e = this.base, n = qy.getExtent.call(this);
          n[0] = qs(e, n[0]), n[1] = qs(e, n[1]);
          var i = this._originalScale, a = i.getExtent();
          return this._fixMin && (n[0] = Zs(n[0], a[0])), this._fixMax && (n[1] = Zs(n[1], a[1])), n;
        }, t.prototype.unionExtent = function(e) {
          this._originalScale.unionExtent(e);
          var n = this.base;
          e[0] = Ge(e[0]) / Ge(n), e[1] = Ge(e[1]) / Ge(n), qy.unionExtent.call(this, e);
        }, t.prototype.unionExtentFromData = function(e, n) {
          this.unionExtent(e.getApproximateExtent(n));
        }, t.prototype.calcNiceTicks = function(e) {
          e = e || 10;
          var n = this._extent, i = n[1] - n[0];
          if (!(i === 1 / 0 || i <= 0)) {
            var a = gc(i), o = e / i * a;
            for (o <= 0.5 && (a *= 10); !isNaN(a) && Math.abs(a) < 1 && Math.abs(a) > 0; )
              a *= 10;
            var s = [xt(ED(n[0] / a) * a), xt(RD(n[1] / a) * a)];
            this._interval = a, this._niceExtent = s;
          }
        }, t.prototype.calcNiceExtent = function(e) {
          Ia.calcNiceExtent.call(this, e), this._fixMin = e.fixMin, this._fixMax = e.fixMax;
        }, t.prototype.parse = function(e) {
          return e;
        }, t.prototype.contain = function(e) {
          return e = Ge(e) / Ge(this.base), Ws(e, this._extent);
        }, t.prototype.normalize = function(e) {
          return e = Ge(e) / Ge(this.base), Us(e, this._extent);
        }, t.prototype.scale = function(e) {
          return e = Ys(e, this._extent), qs(this.base, e);
        }, t.type = "log", t;
      }(er)
    ), Zy = yh.prototype;
    Zy.getMinorTicks = Ia.getMinorTicks, Zy.getLabel = Ia.getLabel;
    function Zs(r, t) {
      return ID(r, Xe(t));
    }
    er.registerClass(yh);
    var kD = (
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
          Y(a) ? this._modelMinNum = $s(t, a({
            min: n[0],
            max: n[1]
          })) : a !== "dataMin" && (this._modelMinNum = $s(t, a));
          var o = this._modelMaxRaw = e.get("max", !0);
          if (Y(o) ? this._modelMaxNum = $s(t, o({
            min: n[0],
            max: n[1]
          })) : o !== "dataMax" && (this._modelMaxNum = $s(t, o)), i)
            this._axisDataLen = e.getCategories().length;
          else {
            var s = e.get("boundaryGap"), l = F(s) ? s : [s || 0, s || 0];
            typeof l[0] == "boolean" || typeof l[1] == "boolean" ? (console.warn('Boolean type for boundaryGap is only allowed for ordinal axis. Please use string in percentage instead, e.g., "20%". Currently, boundaryGap is set to be 0.'), this._boundaryGapInner = [0, 0]) : this._boundaryGapInner = [Lr(l[0], 1), Lr(l[1], 1)];
          }
        }, r.prototype.calculate = function() {
          var t = this._isOrdinal, e = this._dataMin, n = this._dataMax, i = this._axisDataLen, a = this._boundaryGapInner, o = t ? null : n - e || Math.abs(e), s = this._modelMinRaw === "dataMin" ? e : this._modelMinNum, l = this._modelMaxRaw === "dataMax" ? n : this._modelMaxNum, u = s != null, f = l != null;
          s == null && (s = t ? i ? 0 : NaN : e - a[0] * o), l == null && (l = t ? i ? i - 1 : NaN : n + a[1] * o), (s == null || !isFinite(s)) && (s = NaN), (l == null || !isFinite(l)) && (l = NaN);
          var h = Fn(s) || Fn(l) || t && !i;
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
          Q(!this.frozen), this[BD[t]] = e;
        }, r.prototype.setDeterminedMinMax = function(t, e) {
          var n = OD[t];
          Q(!this.frozen && this[n] == null), this[n] = e;
        }, r.prototype.freeze = function() {
          this.frozen = !0;
        }, r;
      }()
    ), OD = {
      min: "_determinedMin",
      max: "_determinedMax"
    }, BD = {
      min: "_dataMin",
      max: "_dataMax"
    };
    function ND(r, t, e) {
      var n = r.rawExtentInfo;
      return n || (n = new kD(r, t, e), r.rawExtentInfo = n, n);
    }
    function $s(r, t) {
      return t == null ? null : Fn(t) ? NaN : r.parse(t);
    }
    function $y(r, t) {
      var e = r.type, n = ND(r, t, r.getExtent()).calculate();
      r.setBlank(n.isBlank);
      var i = n.min, a = n.max, o = t.ecModel;
      if (o && e === "time") {
        var s = Hy("bar", o), l = !1;
        if (M(s, function(h) {
          l = l || h.getBaseAxis() === t.axis;
        }), l) {
          var u = Vy(s), f = FD(i, a, t, u);
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
    function FD(r, t, e, n) {
      var i = e.axis.getExtent(), a = i[1] - i[0], o = _D(n, e.axis);
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
    function mh(r, t) {
      var e = t, n = $y(r, e), i = n.extent, a = e.get("splitNumber");
      r instanceof yh && (r.base = e.get("logBase"));
      var o = r.type, s = e.get("interval"), l = o === "interval" || o === "time";
      r.setExtent(i[0], i[1]), r.calcNiceExtent({
        splitNumber: a,
        fixMin: n.fixMin,
        fixMax: n.fixMax,
        minInterval: l ? e.get("minInterval") : null,
        maxInterval: l ? e.get("maxInterval") : null
      }), s != null && r.setInterval && r.setInterval(s);
    }
    function Ky(r, t) {
      if (t = t || r.get("type"), t)
        switch (t) {
          case "category":
            return new dh({
              ordinalMeta: r.getOrdinalMeta ? r.getOrdinalMeta() : r.getCategories(),
              extent: [1 / 0, -1 / 0]
            });
          case "time":
            return new Yy({
              locale: r.ecModel.getLocaleModel(),
              useUTC: r.ecModel.get("useUTC")
            });
          default:
            return new (er.getClass(t) || gi)();
        }
    }
    function zD(r) {
      var t = r.scale.getExtent(), e = t[0], n = t[1];
      return !(e > 0 && n > 0 || e < 0 && n < 0);
    }
    function Ra(r) {
      var t = r.getLabelModel().get("formatter"), e = r.type === "category" ? r.scale.getExtent()[0] : null;
      return r.scale.type === "time" ? function(n) {
        return function(i, a) {
          return r.scale.getFormattedLabel(i, a, n);
        };
      }(t) : G(t) ? function(n) {
        return function(i) {
          var a = r.scale.getLabel(i), o = n.replace("{value}", a ?? "");
          return o;
        };
      }(t) : Y(t) ? function(n) {
        return function(i, a) {
          return e != null && (a = i.value - e), n(_h(r, i), a, i.level != null ? {
            level: i.level
          } : null);
        };
      }(t) : function(n) {
        return r.scale.getLabel(n);
      };
    }
    function _h(r, t) {
      return r.type === "category" ? r.scale.getLabel(t) : t.value;
    }
    function GD(r) {
      var t = r.model, e = r.scale;
      if (!(!t.get(["axisLabel", "show"]) || e.isBlank())) {
        var n, i, a = e.getExtent();
        e instanceof dh ? i = e.count() : (n = e.getTicks(), i = n.length);
        var o = r.getLabelModel(), s = Ra(r), l, u = 1;
        i > 40 && (u = Math.ceil(i / 40));
        for (var f = 0; f < i; f += u) {
          var h = n ? n[f] : {
            value: a[0] + f
          }, c = s(h, f), v = o.getTextRect(c), d = HD(v, o.get("rotate") || 0);
          l ? l.union(d) : l = d;
        }
        return l;
      }
    }
    function HD(r, t) {
      var e = t * Math.PI / 180, n = r.width, i = r.height, a = n * Math.abs(Math.cos(e)) + Math.abs(i * Math.sin(e)), o = n * Math.abs(Math.sin(e)) + Math.abs(i * Math.cos(e)), s = new nt(r.x, r.y, a, o);
      return s;
    }
    function Sh(r) {
      var t = r.get("interval");
      return t ?? "auto";
    }
    function Qy(r) {
      return r.type === "category" && Sh(r.getLabelModel()) === 0;
    }
    function VD(r, t) {
      var e = {};
      return M(r.mapDimensionsAll(t), function(n) {
        e[Ny(r, n)] = !0;
      }), pt(e);
    }
    var jy = (
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
    function WD(r) {
      return Vs(null, r);
    }
    var UD = {
      isDimensionStacked: Pn,
      enableDataStack: By,
      getStackedDimension: Ny
    };
    function YD(r, t) {
      var e = t;
      t instanceof mt || (e = new mt(t));
      var n = Ky(e);
      return n.setExtent(r[0], r[1]), mh(n, e), n;
    }
    function XD(r) {
      ge(r, jy);
    }
    function qD(r, t) {
      return t = t || {}, cr(r, null, null, t.state !== "normal");
    }
    var ZD = (Object.freeze || Object)({
      createList: WD,
      getLayoutRect: wn,
      dataStack: UD,
      createScale: YD,
      mixinAxisModelCommonMethods: XD,
      getECData: ot,
      createTextStyle: qD,
      createDimensions: jC,
      createSymbol: Cn,
      enableHoverEmphasis: No
    }), Jy = [], $D = {
      registerPreprocessor: rh,
      registerProcessor: nh,
      registerPostInit: wy,
      registerPostUpdate: by,
      registerUpdateLifecycle: Fs,
      registerAction: Ln,
      registerCoordinateSystem: xy,
      registerLayout: Ty,
      registerVisual: Nr,
      registerTransform: My,
      registerLoading: ah,
      registerMap: Dy,
      registerImpl: cC,
      PRIORITY: ay,
      ComponentModel: it,
      ComponentView: $t,
      SeriesModel: ne,
      ChartView: Kt,
      // TODO Use ComponentModel and SeriesModel instead of Constructor
      registerComponentModel: function(r) {
        it.registerClass(r);
      },
      registerComponentView: function(r) {
        $t.registerClass(r);
      },
      registerSeriesModel: function(r) {
        ne.registerClass(r);
      },
      registerChartView: function(r) {
        Kt.registerClass(r);
      },
      registerSubTypeDefaulter: function(r, t) {
        it.registerSubTypeDefaulter(r, t);
      },
      registerPainter: function(r, t) {
        hc(r, t);
      }
    };
    function oe(r) {
      if (F(r)) {
        M(r, function(t) {
          oe(t);
        });
        return;
      }
      lt(Jy, r) >= 0 || (Jy.push(r), Y(r) && (r = {
        install: r
      }), r.install($D));
    }
    var KD = 1e-8;
    function tm(r, t) {
      return Math.abs(r - t) < KD;
    }
    function em(r, t, e) {
      var n = 0, i = r[0];
      if (!i)
        return !1;
      for (var a = 1; a < r.length; a++) {
        var o = r[a];
        n += lr(i[0], i[1], o[0], o[1], t, e), i = o;
      }
      var s = r[0];
      return (!tm(i[0], s[0]) || !tm(i[1], s[1])) && (n += lr(i[0], i[1], s[0], s[1], t, e)), n !== 0;
    }
    var QD = [];
    function wh(r, t) {
      for (var e = 0; e < r.length; e++)
        Xt(r[e], r[e], t);
    }
    function rm(r, t, e, n) {
      for (var i = 0; i < r.length; i++) {
        var a = r[i];
        n && (a = n.project(a)), a && isFinite(a[0]) && isFinite(a[1]) && (br(t, t, a), xr(e, e, a));
      }
    }
    function jD(r) {
      for (var t = 0, e = 0, n = 0, i = r.length, a = r[i - 1][0], o = r[i - 1][1], s = 0; s < i; s++) {
        var l = r[s][0], u = r[s][1], f = a * u - l * o;
        t += f, e += (a + l) * f, n += (o + u) * f, a = l, o = u;
      }
      return t ? [e / t / 3, n / t / 3, t] : [r[0][0] || 0, r[0][1] || 0];
    }
    var nm = (
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
    ), im = (
      /** @class */
      function() {
        function r(t, e) {
          this.type = "polygon", this.exterior = t, this.interiors = e;
        }
        return r;
      }()
    ), am = (
      /** @class */
      function() {
        function r(t) {
          this.type = "linestring", this.points = t;
        }
        return r;
      }()
    ), JD = (
      /** @class */
      function(r) {
        B(t, r);
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
            return jD(n.exterior);
          var u = this.getBoundingRect();
          return [u.x + u.width / 2, u.y + u.height / 2];
        }, t.prototype.getBoundingRect = function(e) {
          var n = this._rect;
          if (n && !e)
            return n;
          var i = [1 / 0, 1 / 0], a = [-1 / 0, -1 / 0], o = this.geometries;
          return M(o, function(s) {
            s.type === "polygon" ? rm(s.exterior, i, a, e) : M(s.points, function(l) {
              rm(l, i, a, e);
            });
          }), isFinite(i[0]) && isFinite(i[1]) && isFinite(a[0]) && isFinite(a[1]) || (i[0] = i[1] = a[0] = a[1] = 0), n = new nt(i[0], i[1], a[0] - i[0], a[1] - i[1]), e || (this._rect = n), n;
        }, t.prototype.contain = function(e) {
          var n = this.getBoundingRect(), i = this.geometries;
          if (!n.contain(e[0], e[1]))
            return !1;
          t:
            for (var a = 0, o = i.length; a < o; a++) {
              var s = i[a];
              if (s.type === "polygon") {
                var l = s.exterior, u = s.interiors;
                if (em(l, e[0], e[1])) {
                  for (var f = 0; f < (u ? u.length : 0); f++)
                    if (em(u[f], e[0], e[1]))
                      continue t;
                  return !0;
                }
              }
            }
          return !1;
        }, t.prototype.transformTo = function(e, n, i, a) {
          var o = this.getBoundingRect(), s = o.width / o.height;
          i ? a || (a = i / s) : i = s * a;
          for (var l = new nt(e, n, i, a), u = o.calculateTransform(l), f = this.geometries, h = 0; h < f.length; h++) {
            var c = f[h];
            c.type === "polygon" ? (wh(c.exterior, u), M(c.interiors, function(v) {
              wh(v, u);
            })) : M(c.points, function(v) {
              wh(v, u);
            });
          }
          o = this._rect, o.copy(l), this._center = [o.x + o.width / 2, o.y + o.height / 2];
        }, t.prototype.cloneShallow = function(e) {
          e == null && (e = this.name);
          var n = new t(e, this.geometries, this._center);
          return n._rect = this._rect, n.transformTo = null, n;
        }, t;
      }(nm)
    );
    (function(r) {
      B(t, r);
      function t(e, n) {
        var i = r.call(this, e) || this;
        return i.type = "geoSVG", i._elOnlyForCalculate = n, i;
      }
      return t.prototype.calcCenter = function() {
        for (var e = this._elOnlyForCalculate, n = e.getBoundingRect(), i = [n.x + n.width / 2, n.y + n.height / 2], a = xi(QD), o = e; o && !o.isGeoSVGGraphicRoot; )
          Tr(a, o.getLocalTransform(), a), o = o.parent;
        return Hn(a, a), Xt(i, i, a), i;
      }, t;
    })(nm);
    function tM(r) {
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
              a.coordinates = om(s, o, e);
              break;
            case "Polygon":
              bh(s, o, e);
              break;
            case "MultiLineString":
              bh(s, o, e);
              break;
            case "MultiPolygon":
              M(s, function(l, u) {
                return bh(l, o[u], e);
              });
          }
      }), t.UTF8Encoding = !1, t;
    }
    function bh(r, t, e) {
      for (var n = 0; n < r.length; n++)
        r[n] = om(r[n], t[n], e);
    }
    function om(r, t, e) {
      for (var n = [], i = t[0], a = t[1], o = 0; o < r.length; o += 2) {
        var s = r.charCodeAt(o) - 64, l = r.charCodeAt(o + 1) - 64;
        s = s >> 1 ^ -(s & 1), l = l >> 1 ^ -(l & 1), s += i, l += a, i = s, a = l, n.push([s / e, l / e]);
      }
      return n;
    }
    function sm(r, t) {
      return r = tM(r), H(bt(r.features, function(e) {
        return e.geometry && e.properties && e.geometry.coordinates.length > 0;
      }), function(e) {
        var n = e.properties, i = e.geometry, a = [];
        switch (i.type) {
          case "Polygon":
            var o = i.coordinates;
            a.push(new im(o[0], o.slice(1)));
            break;
          case "MultiPolygon":
            M(i.coordinates, function(l) {
              l[0] && a.push(new im(l[0], l.slice(1)));
            });
            break;
          case "LineString":
            a.push(new am([i.coordinates]));
            break;
          case "MultiLineString":
            a.push(new am(i.coordinates));
        }
        var s = new JD(n[t || "name"], a, n.cp);
        return s.properties = n, s;
      });
    }
    var eM = (Object.freeze || Object)({
      linearMap: mo,
      round: xt,
      asc: Q1,
      getPrecision: Xe,
      getPrecisionSafe: _o,
      getPixelPrecision: dc,
      getPercentWithPrecision: j1,
      MAX_SAFE_INTEGER: tS,
      remRadian: ou,
      isRadianAroundZero: Fi,
      parseDate: Se,
      quantity: gc,
      quantityExponent: zi,
      nice: su,
      quantile: rS,
      reformIntervals: nS,
      isNumeric: lu,
      numericToNumber: Gi
    }), rM = (Object.freeze || Object)({
      parse: Se,
      format: la
    }), nM = (Object.freeze || Object)({
      extendShape: zd,
      extendPath: Gd,
      makePath: Jo,
      makeImage: Uu,
      mergePath: Wd,
      resizePath: Yu,
      createIcon: ts,
      updateProps: Pt,
      initProps: Gt,
      getTransform: Ud,
      clipPointsByRect: qd,
      clipRectByRect: Zd,
      registerShape: Ce,
      getShapeClass: Hd,
      Group: It,
      Image: ur,
      Text: Lt,
      Circle: ji,
      Ellipse: Ho,
      Sector: hr,
      Ring: Wo,
      Polygon: Uo,
      Polyline: ri,
      Rect: Tt,
      Line: vr,
      BezierCurve: Yo,
      Arc: ea,
      IncrementalDisplayable: Nd,
      CompoundPath: kd,
      LinearGradient: Gu,
      RadialGradient: Bd,
      BoundingRect: nt
    }), iM = (Object.freeze || Object)({
      addCommas: of,
      toCamelCase: sf,
      normalizeCssArray: fa,
      encodeHTML: le,
      formatTpl: ff,
      getTooltipMarker: _p,
      formatTime: Ub,
      capitalFirst: Yb,
      truncateText: Ec,
      getTextRect: Wb
    }), aM = (Object.freeze || Object)({
      map: H,
      each: M,
      indexOf: lt,
      inherits: hl,
      reduce: We,
      filter: bt,
      bind: dt,
      curry: _t,
      isArray: F,
      isString: G,
      isObject: V,
      isFunction: Y,
      extend: k,
      defaults: st,
      clone: rt,
      merge: at
    }), Ea = St();
    function oM(r) {
      return r.type === "category" ? lM(r) : fM(r);
    }
    function sM(r, t) {
      return r.type === "category" ? uM(r, t) : {
        ticks: H(r.scale.getTicks(), function(e) {
          return e.value;
        })
      };
    }
    function lM(r) {
      var t = r.getLabelModel(), e = lm(r, t);
      return !t.get("show") || r.scale.isBlank() ? {
        labels: [],
        labelCategoryInterval: e.labelCategoryInterval
      } : e;
    }
    function lm(r, t) {
      var e = um(r, "labels"), n = Sh(t), i = fm(e, n);
      if (i)
        return i;
      var a, o;
      return Y(n) ? a = cm(r, n) : (o = n === "auto" ? hM(r) : n, a = vm(r, o)), hm(e, n, {
        labels: a,
        labelCategoryInterval: o
      });
    }
    function uM(r, t) {
      var e = um(r, "ticks"), n = Sh(t), i = fm(e, n);
      if (i)
        return i;
      var a, o;
      if ((!t.get("show") || r.scale.isBlank()) && (a = []), Y(n))
        a = cm(r, n, !0);
      else if (n === "auto") {
        var s = lm(r, r.getLabelModel());
        o = s.labelCategoryInterval, a = H(s.labels, function(l) {
          return l.tickValue;
        });
      } else
        o = n, a = vm(r, o, !0);
      return hm(e, n, {
        ticks: a,
        tickCategoryInterval: o
      });
    }
    function fM(r) {
      var t = r.scale.getTicks(), e = Ra(r);
      return {
        labels: H(t, function(n, i) {
          return {
            level: n.level,
            formattedLabel: e(n, i),
            rawLabel: r.scale.getLabel(n),
            tickValue: n.value
          };
        })
      };
    }
    function um(r, t) {
      return Ea(r)[t] || (Ea(r)[t] = []);
    }
    function fm(r, t) {
      for (var e = 0; e < r.length; e++)
        if (r[e].key === t)
          return r[e].value;
    }
    function hm(r, t, e) {
      return r.push({
        key: t,
        value: e
      }), e;
    }
    function hM(r) {
      var t = Ea(r).autoInterval;
      return t ?? (Ea(r).autoInterval = r.calculateCategoryInterval());
    }
    function vM(r) {
      var t = cM(r), e = Ra(r), n = (t.axisRotate - t.labelRotate) / 180 * Math.PI, i = r.scale, a = i.getExtent(), o = i.count();
      if (a[1] - a[0] < 1)
        return 0;
      var s = 1;
      o > 40 && (s = Math.max(1, Math.floor(o / 40)));
      for (var l = a[0], u = r.dataToCoord(l + 1) - r.dataToCoord(l), f = Math.abs(u * Math.cos(n)), h = Math.abs(u * Math.sin(n)), c = 0, v = 0; l <= a[1]; l += s) {
        var d = 0, g = 0, p = Jl(e({
          value: l
        }), t.font, "center", "top");
        d = p.width * 1.3, g = p.height * 1.3, c = Math.max(c, d, 7), v = Math.max(v, g, 7);
      }
      var y = c / f, m = v / h;
      isNaN(y) && (y = 1 / 0), isNaN(m) && (m = 1 / 0);
      var _ = Math.max(0, Math.floor(Math.min(y, m))), S = Ea(r.model), b = r.getExtent(), w = S.lastAutoInterval, x = S.lastTickCount;
      return w != null && x != null && Math.abs(w - _) <= 1 && Math.abs(x - o) <= 1 && w > _ && S.axisExtent0 === b[0] && S.axisExtent1 === b[1] ? _ = w : (S.lastTickCount = o, S.lastAutoInterval = _, S.axisExtent0 = b[0], S.axisExtent1 = b[1]), _;
    }
    function cM(r) {
      var t = r.getLabelModel();
      return {
        axisRotate: r.getRotate ? r.getRotate() : r.isHorizontal && !r.isHorizontal() ? 90 : 0,
        labelRotate: t.get("rotate") || 0,
        font: t.getFont()
      };
    }
    function vm(r, t, e) {
      var n = Ra(r), i = r.scale, a = i.getExtent(), o = r.getLabelModel(), s = [], l = Math.max((t || 0) + 1, 1), u = a[0], f = i.count();
      u !== 0 && l > 1 && f / l > 2 && (u = Math.round(Math.ceil(u / l) * l));
      var h = Qy(r), c = o.get("showMinLabel") || h, v = o.get("showMaxLabel") || h;
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
    function cm(r, t, e) {
      var n = r.scale, i = Ra(r), a = [];
      return M(n.getTicks(), function(o) {
        var s = n.getLabel(o), l = o.value;
        t(o.value, s) && a.push(e ? l : {
          formattedLabel: i(o),
          rawLabel: s,
          tickValue: l
        });
      }), a;
    }
    var dm = [0, 1], pm = (
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
          return dc(t || this.scale.getExtent(), this._extent);
        }, r.prototype.setExtent = function(t, e) {
          var n = this._extent;
          n[0] = t, n[1] = e;
        }, r.prototype.dataToCoord = function(t, e) {
          var n = this._extent, i = this.scale;
          return t = i.normalize(t), this.onBand && i.type === "ordinal" && (n = n.slice(), gm(n, i.count())), mo(t, dm, n, e);
        }, r.prototype.coordToData = function(t, e) {
          var n = this._extent, i = this.scale;
          this.onBand && i.type === "ordinal" && (n = n.slice(), gm(n, i.count()));
          var a = mo(t, n, dm, e);
          return this.scale.scale(a);
        }, r.prototype.pointToData = function(t, e) {
        }, r.prototype.getTicksCoords = function(t) {
          t = t || {};
          var e = t.tickModel || this.getTickModel(), n = sM(this, e), i = n.ticks, a = H(i, function(s) {
            return {
              coord: this.dataToCoord(this.scale.type === "ordinal" ? this.scale.getRawOrdinalNumber(s) : s),
              tickValue: s
            };
          }, this), o = e.get("alignWithLabel");
          return dM(this, a, o, t.clamp), a;
        }, r.prototype.getMinorTicksCoords = function() {
          if (this.scale.type === "ordinal")
            return [];
          var t = this.model.getModel("minorTick"), e = t.get("splitNumber");
          e > 0 && e < 100 || (e = 5);
          var n = this.scale.getMinorTicks(e), i = H(n, function(a) {
            return H(a, function(o) {
              return {
                coord: this.dataToCoord(o),
                tickValue: o
              };
            }, this);
          }, this);
          return i;
        }, r.prototype.getViewLabels = function() {
          return oM(this).labels;
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
          return vM(this);
        }, r;
      }()
    );
    function gm(r, t) {
      var e = r[1] - r[0], n = t, i = e / n / 2;
      r[0] += i, r[1] -= i;
    }
    function dM(r, t, e, n) {
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
        return v = xt(v), d = xt(d), h ? v > d : v < d;
      }
    }
    function pM(r) {
      var t = it.extend(r);
      return it.registerClass(t), t;
    }
    function gM(r) {
      var t = $t.extend(r);
      return $t.registerClass(t), t;
    }
    function yM(r) {
      var t = ne.extend(r);
      return ne.registerClass(t), t;
    }
    function mM(r) {
      var t = Kt.extend(r);
      return Kt.registerClass(t), t;
    }
    var ka = Math.PI * 2, Rn = Rr.CMD, _M = ["top", "right", "bottom", "left"];
    function SM(r, t, e, n, i) {
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
    function wM(r, t, e, n, i, a, o, s, l) {
      o -= r, s -= t;
      var u = Math.sqrt(o * o + s * s);
      o /= u, s /= u;
      var f = o * e + r, h = s * e + t;
      if (Math.abs(n - i) % ka < 1e-4)
        return l[0] = f, l[1] = h, u - e;
      if (a) {
        var c = n;
        n = Er(i), i = Er(c);
      } else
        n = Er(n), i = Er(i);
      n > i && (i += ka);
      var v = Math.atan2(s, o);
      if (v < 0 && (v += ka), v >= n && v <= i || v + ka >= n && v + ka <= i)
        return l[0] = f, l[1] = h, u - e;
      var d = e * Math.cos(n) + r, g = e * Math.sin(n) + t, p = e * Math.cos(i) + r, y = e * Math.sin(i) + t, m = (d - o) * (d - o) + (g - s) * (g - s), _ = (p - o) * (p - o) + (y - s) * (y - s);
      return m < _ ? (l[0] = d, l[1] = g, Math.sqrt(m)) : (l[0] = p, l[1] = y, Math.sqrt(_));
    }
    function Ks(r, t, e, n, i, a, o, s) {
      var l = i - r, u = a - t, f = e - r, h = n - t, c = Math.sqrt(f * f + h * h);
      f /= c, h /= c;
      var v = l * f + u * h, d = v / c;
      s && (d = Math.min(Math.max(d, 0), 1)), d *= c;
      var g = o[0] = r + d * f, p = o[1] = t + d * h;
      return Math.sqrt((g - i) * (g - i) + (p - a) * (p - a));
    }
    function ym(r, t, e, n, i, a, o) {
      e < 0 && (r = r + e, e = -e), n < 0 && (t = t + n, n = -n);
      var s = r + e, l = t + n, u = o[0] = Math.min(Math.max(i, r), s), f = o[1] = Math.min(Math.max(a, t), l);
      return Math.sqrt((u - i) * (u - i) + (f - a) * (f - a));
    }
    var He = [];
    function bM(r, t, e) {
      var n = ym(t.x, t.y, t.width, t.height, r.x, r.y, He);
      return e.set(He[0], He[1]), n;
    }
    function xM(r, t, e) {
      for (var n = 0, i = 0, a = 0, o = 0, s, l, u = 1 / 0, f = t.data, h = r.x, c = r.y, v = 0; v < f.length; ) {
        var d = f[v++];
        v === 1 && (n = f[v], i = f[v + 1], a = n, o = i);
        var g = u;
        switch (d) {
          case Rn.M:
            a = f[v++], o = f[v++], n = a, i = o;
            break;
          case Rn.L:
            g = Ks(n, i, f[v], f[v + 1], h, c, He, !0), n = f[v++], i = f[v++];
            break;
          case Rn.C:
            g = Vv(n, i, f[v++], f[v++], f[v++], f[v++], f[v], f[v + 1], h, c, He), n = f[v++], i = f[v++];
            break;
          case Rn.Q:
            g = Yv(n, i, f[v++], f[v++], f[v], f[v + 1], h, c, He), n = f[v++], i = f[v++];
            break;
          case Rn.A:
            var p = f[v++], y = f[v++], m = f[v++], _ = f[v++], S = f[v++], b = f[v++];
            v += 1;
            var w = !!(1 - f[v++]);
            s = Math.cos(S) * m + p, l = Math.sin(S) * _ + y, v <= 1 && (a = s, o = l);
            var x = (h - p) * _ / m + p;
            g = wM(p, y, _, S, S + b, w, x, c, He), n = Math.cos(S + b) * m + p, i = Math.sin(S + b) * _ + y;
            break;
          case Rn.R:
            a = n = f[v++], o = i = f[v++];
            var T = f[v++], D = f[v++];
            g = ym(a, o, T, D, h, c, He);
            break;
          case Rn.Z:
            g = Ks(n, i, a, o, h, c, He, !0), n = a, i = o;
            break;
        }
        g < u && (u = g, e.set(He[0], He[1]));
      }
      return u;
    }
    var Ve = new q(), vt = new q(), wt = new q(), rr = new q(), nr = new q();
    function mm(r, t) {
      if (r) {
        var e = r.getTextGuideLine(), n = r.getTextContent();
        if (n && e) {
          var i = r.textGuideLineConfig || {}, a = [[0, 0], [0, 0], [0, 0]], o = i.candidates || _M, s = n.getBoundingRect().clone();
          s.applyTransform(n.getComputedTransform());
          var l = 1 / 0, u = i.anchor, f = r.getComputedTransform(), h = f && Hn([], f), c = t.get("length2") || 0;
          u && wt.copy(u);
          for (var v = 0; v < o.length; v++) {
            var d = o[v];
            SM(d, 0, s, Ve, rr), q.scaleAndAdd(vt, Ve, rr, c), vt.transform(h);
            var g = r.getBoundingRect(), p = u ? u.distance(vt) : r instanceof ft ? xM(vt, r.path, wt) : bM(vt, g, wt);
            p < l && (l = p, vt.transform(f), wt.transform(f), wt.toArray(a[0]), vt.toArray(a[1]), Ve.toArray(a[2]));
          }
          _m(a, t.get("minTurnAngle")), e.setShape({
            points: a
          });
        }
      }
    }
    var Qs = [], jt = new q();
    function _m(r, t) {
      if (t <= 180 && t > 0) {
        t = t / 180 * Math.PI, Ve.fromArray(r[0]), vt.fromArray(r[1]), wt.fromArray(r[2]), q.sub(rr, Ve, vt), q.sub(nr, wt, vt);
        var e = rr.len(), n = nr.len();
        if (!(e < 1e-3 || n < 1e-3)) {
          rr.scale(1 / e), nr.scale(1 / n);
          var i = rr.dot(nr), a = Math.cos(t);
          if (a < i) {
            var o = Ks(vt.x, vt.y, wt.x, wt.y, Ve.x, Ve.y, Qs, !1);
            jt.fromArray(Qs), jt.scaleAndAdd(nr, o / Math.tan(Math.PI - t));
            var s = wt.x !== vt.x ? (jt.x - vt.x) / (wt.x - vt.x) : (jt.y - vt.y) / (wt.y - vt.y);
            if (isNaN(s))
              return;
            s < 0 ? q.copy(jt, vt) : s > 1 && q.copy(jt, wt), jt.toArray(r[1]);
          }
        }
      }
    }
    function TM(r, t, e) {
      if (e <= 180 && e > 0) {
        e = e / 180 * Math.PI, Ve.fromArray(r[0]), vt.fromArray(r[1]), wt.fromArray(r[2]), q.sub(rr, vt, Ve), q.sub(nr, wt, vt);
        var n = rr.len(), i = nr.len();
        if (!(n < 1e-3 || i < 1e-3)) {
          rr.scale(1 / n), nr.scale(1 / i);
          var a = rr.dot(t), o = Math.cos(e);
          if (a < o) {
            var s = Ks(vt.x, vt.y, wt.x, wt.y, Ve.x, Ve.y, Qs, !1);
            jt.fromArray(Qs);
            var l = Math.PI / 2, u = Math.acos(nr.dot(t)), f = l + u - e;
            if (f >= l)
              q.copy(jt, wt);
            else {
              jt.scaleAndAdd(nr, s / Math.tan(Math.PI / 2 - f));
              var h = wt.x !== vt.x ? (jt.x - vt.x) / (wt.x - vt.x) : (jt.y - vt.y) / (wt.y - vt.y);
              if (isNaN(h))
                return;
              h < 0 ? q.copy(jt, vt) : h > 1 && q.copy(jt, wt);
            }
            jt.toArray(r[1]);
          }
        }
      }
    }
    function Sm(r, t, e, n) {
      var i = e === "normal", a = i ? r : r.ensureState(e);
      a.ignore = t;
      var o = n.get("smooth");
      o && o === !0 && (o = 0.3), a.shape = a.shape || {}, o > 0 && (a.shape.smooth = o);
      var s = n.getModel("lineStyle").getLineStyle();
      i ? r.useStyle(s) : a.style = s;
    }
    function CM(r, t) {
      var e = t.smooth, n = t.points;
      if (n)
        if (r.moveTo(n[0][0], n[0][1]), e > 0 && n.length >= 3) {
          var i = Xa(n[0], n[1]), a = Xa(n[1], n[2]);
          if (!i || !a) {
            r.lineTo(n[1][0], n[1][1]), r.lineTo(n[2][0], n[2][1]);
            return;
          }
          var o = Math.min(i, a) * e, s = qa([], n[1], n[0], o / i), l = qa([], n[1], n[2], o / a), u = qa([], s, l, 0.5);
          r.bezierCurveTo(s[0], s[1], s[0], s[1], u[0], u[1]), r.bezierCurveTo(l[0], l[1], l[0], l[1], n[2][0], n[2][1]);
        } else
          for (var f = 1; f < n.length; f++)
            r.lineTo(n[f][0], n[f][1]);
    }
    function wm(r, t, e) {
      var n = r.getTextGuideLine(), i = r.getTextContent();
      if (!i) {
        n && r.removeTextGuideLine();
        return;
      }
      for (var a = t.normal, o = a.get("show"), s = i.ignore, l = 0; l < Io.length; l++) {
        var u = Io[l], f = t[u], h = u === "normal";
        if (f) {
          var c = f.get("show"), v = h ? s : J(i.states[u] && i.states[u].ignore, s);
          if (v || !J(c, o)) {
            var d = h ? n : n && n.states[u];
            d && (d.ignore = !0);
            continue;
          }
          n || (n = new ri(), r.setTextGuideLine(n), !h && (s || !o) && Sm(n, !0, "normal", t.normal), r.stateProxy && (n.stateProxy = r.stateProxy)), Sm(n, !1, u, f);
        }
      }
      if (n) {
        st(n.style, e), n.style.fill = null;
        var g = a.get("showAbove"), p = r.textGuideLineConfig = r.textGuideLineConfig || {};
        p.showAbove = g || !1, n.buildPath = CM;
      }
    }
    function bm(r, t) {
      t = t || "labelLine";
      for (var e = {
        normal: r.getModel(t)
      }, n = 0; n < Te.length; n++) {
        var i = Te[n];
        e[i] = r.getModel([i, t]);
      }
      return e;
    }
    function xm(r) {
      for (var t = [], e = 0; e < r.length; e++) {
        var n = r[e];
        if (!n.defaultAttr.ignore) {
          var i = n.label, a = i.getComputedTransform(), o = i.getBoundingRect(), s = !a || a[1] < 1e-5 && a[2] < 1e-5, l = i.style.margin || 0, u = o.clone();
          u.applyTransform(a), u.x -= l / 2, u.y -= l / 2, u.width += l, u.height += l;
          var f = s ? new Zo(o, a) : null;
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
    function Tm(r, t, e, n, i, a) {
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
    function DM(r, t, e, n) {
      return Tm(r, "x", "width", t, e, n);
    }
    function Cm(r, t, e, n) {
      return Tm(r, "y", "height", t, e, n);
    }
    function Dm(r) {
      var t = [];
      r.sort(function(g, p) {
        return p.priority - g.priority;
      });
      var e = new nt(0, 0, 0, 0);
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
            if (d.obb || (d.obb = new Zo(d.localRect, d.transform)), h || (h = new Zo(s, l)), h.intersect(d.obb)) {
              c = !0;
              break;
            }
          }
        }
        c ? (n(u), f && n(f)) : (u.attr("ignore", a.defaultAttr.ignore), f && f.attr("ignore", a.defaultAttr.labelGuideIgnore), t.push(a));
      }
    }
    function MM(r) {
      if (r) {
        for (var t = [], e = 0; e < r.length; e++)
          t.push(r[e].slice());
        return t;
      }
    }
    function AM(r, t) {
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
        labelLinePoints: MM(n && n.shape.points)
      };
    }
    var Mm = ["align", "verticalAlign", "width", "height", "fontSize"], ce = new po(), xh = St(), LM = St();
    function js(r, t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        t[i] != null && (r[i] = t[i]);
      }
    }
    var Js = ["x", "y", "rotation"], PM = (
      /** @class */
      function() {
        function r() {
          this._labelList = [], this._chartViewList = [];
        }
        return r.prototype.clearLabels = function() {
          this._labelList = [], this._chartViewList = [];
        }, r.prototype._addLabel = function(t, e, n, i, a) {
          var o = i.style, s = i.__hostTarget, l = s.textConfig || {}, u = i.getComputedTransform(), f = i.getBoundingRect().plain();
          nt.applyTransform(f, f, u), u ? ce.setLocalTransform(u) : (ce.x = ce.y = ce.rotation = ce.originX = ce.originY = 0, ce.scaleX = ce.scaleY = 1);
          var h = i.__hostTarget, c;
          if (h) {
            c = h.getBoundingRect().plain();
            var v = h.getComputedTransform();
            nt.applyTransform(c, c, v);
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
              x: ce.x,
              y: ce.y,
              scaleX: ce.scaleX,
              scaleY: ce.scaleY,
              rotation: ce.rotation,
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
          (Y(i) || pt(i).length) && t.group.traverse(function(a) {
            if (a.ignore)
              return !0;
            var o = a.getTextContent(), s = ot(a);
            o && !o.disableLabelLayout && e._addLabel(s.dataIndex, s.dataType, n, o, i);
          });
        }, r.prototype.updateLayoutConfig = function(t) {
          var e = t.getWidth(), n = t.getHeight();
          function i(_, S) {
            return function() {
              mm(_, S);
            };
          }
          for (var a = 0; a < this._labelList.length; a++) {
            var o = this._labelList[a], s = o.label, l = s.__hostTarget, u = o.defaultAttr, f = void 0;
            Y(o.layoutOption) ? f = o.layoutOption(AM(o, l)) : f = o.layoutOption, f = f || {}, o.computedLayoutOption = f;
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
            if (f.x != null ? (s.x = gt(f.x, e), s.setStyle("x", 0), c = !0) : (s.x = u.x, s.setStyle("x", u.style.x)), f.y != null ? (s.y = gt(f.y, n), s.setStyle("y", 0), c = !0) : (s.y = u.y, s.setStyle("y", u.style.y)), f.labelLinePoints) {
              var v = l.getTextGuideLine();
              v && (v.setShape({
                points: f.labelLinePoints
              }), c = !1);
            }
            var d = xh(s);
            d.needsUpdateLabelLine = c, s.rotation = f.rotate != null ? f.rotate * h : u.rotation, s.scaleX = u.scaleX, s.scaleY = u.scaleY;
            for (var g = 0; g < Mm.length; g++) {
              var p = Mm[g];
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
          var e = t.getWidth(), n = t.getHeight(), i = xm(this._labelList), a = bt(i, function(l) {
            return l.layoutOption.moveOverlap === "shiftX";
          }), o = bt(i, function(l) {
            return l.layoutOption.moveOverlap === "shiftY";
          });
          DM(a, 0, e), Cm(o, 0, n);
          var s = bt(i, function(l) {
            return l.layoutOption.hideOverlap;
          });
          Dm(s);
        }, r.prototype.processLabelsOverall = function() {
          var t = this;
          M(this._chartViewList, function(e) {
            var n = e.__model, i = e.ignoreLabelLineUpdate, a = n.isAnimationEnabled();
            e.group.traverse(function(o) {
              if (o.ignore && !o.forceLabelAnimation)
                return !0;
              var s = !i, l = o.getTextContent();
              !s && l && (s = xh(l).needsUpdateLabelLine), s && t._updateLabelLine(o, n), a && t._animateLabels(o, n);
            });
          });
        }, r.prototype._updateLabelLine = function(t, e) {
          var n = t.getTextContent(), i = ot(t), a = i.dataIndex;
          if (n && a != null) {
            var o = e.getData(i.dataType), s = o.getItemModel(a), l = {}, u = o.getItemVisual(a, "style"), f = o.getVisual("drawType");
            l.stroke = u[f];
            var h = s.getModel("labelLine");
            wm(t, bm(s), l), mm(t, h);
          }
        }, r.prototype._animateLabels = function(t, e) {
          var n = t.getTextContent(), i = t.getTextGuideLine();
          if (n && (t.forceLabelAnimation || !n.ignore && !n.invisible && !t.disableLabelAnimation && !ni(t))) {
            var a = xh(n), o = a.oldLayout, s = ot(t), l = s.dataIndex, u = {
              x: n.x,
              y: n.y,
              rotation: n.rotation
            }, f = e.getData(s.dataType);
            if (o) {
              n.attr(o);
              var c = t.prevStates;
              c && (lt(c, "select") >= 0 && n.attr(a.oldLayoutSelect), lt(c, "emphasis") >= 0 && n.attr(a.oldLayoutEmphasis)), Pt(n, u, e, l);
            } else if (n.attr(u), !ii(n).valueAnimation) {
              var h = J(n.style.opacity, 1);
              n.style.opacity = 0, Gt(n, {
                style: {
                  opacity: h
                }
              }, e, l);
            }
            if (a.oldLayout = u, n.states.select) {
              var v = a.oldLayoutSelect = {};
              js(v, u, Js), js(v, n.states.select, Js);
            }
            if (n.states.emphasis) {
              var d = a.oldLayoutEmphasis = {};
              js(d, u, Js), js(d, n.states.emphasis, Js);
            }
            Tb(n, l, f, e, e);
          }
          if (i && !i.ignore && !i.invisible) {
            var a = LM(i), o = a.oldLayout, g = {
              points: i.shape.points
            };
            o ? (i.attr({
              shape: o
            }), Pt(i, {
              shape: g
            }, e)) : (i.setShape(g), i.style.strokePercent = 0, Gt(i, {
              style: {
                strokePercent: 1
              }
            }, e)), a.oldLayout = g;
          }
        }, r;
      }()
    ), Th = St();
    function Am(r) {
      r.registerUpdateLifecycle("series:beforeupdate", function(t, e, n) {
        var i = Th(e).labelManager;
        i || (i = Th(e).labelManager = new PM()), i.clearLabels();
      }), r.registerUpdateLifecycle("series:layoutlabels", function(t, e, n) {
        var i = Th(e).labelManager;
        n.updatedSeries.forEach(function(a) {
          i.addLabelsOfSeries(e.getViewOfSeriesModel(a));
        }), i.updateLayoutConfig(e), i.layout(e), i.processLabelsOverall();
      });
    }
    oe(Am);
    function Lm(r, t, e) {
      var n = ar.createCanvas(), i = t.getWidth(), a = t.getHeight(), o = n.style;
      return o && (o.position = "absolute", o.left = "0", o.top = "0", o.width = i + "px", o.height = a + "px", n.setAttribute("data-zr-dom-id", r)), n.width = i * e, n.height = a * e, n;
    }
    var Ch = function(r) {
      B(t, r);
      function t(e, n, i) {
        var a = r.call(this) || this;
        a.motionBlur = !1, a.lastFrameAlpha = 0.7, a.dpr = 1, a.virtual = !1, a.config = {}, a.incremental = !1, a.zlevel = 0, a.maxRepaintRectCount = 5, a.__dirty = !0, a.__firstTimePaint = !0, a.__used = !1, a.__drawIndex = 0, a.__startIndex = 0, a.__endIndex = 0, a.__prevStartIndex = null, a.__prevEndIndex = null;
        var o;
        i = i || co, typeof e == "string" ? o = Lm(e, n, i) : V(e) && (o = e, e = o.id), a.id = e, a.dom = o;
        var s = o.style;
        return s && (dl(o), o.onselectstart = function() {
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
        this.domBack = Lm("back-" + this.id, this.painter, e), this.ctxBack = this.domBack.getContext("2d"), e !== 1 && this.ctxBack.scale(e, e);
      }, t.prototype.createRepaintRects = function(e, n, i, a) {
        if (this.__firstTimePaint)
          return this.__firstTimePaint = !1, null;
        var o = [], s = this.maxRepaintRectCount, l = !1, u = new nt(0, 0, 0, 0);
        function f(m) {
          if (!(!m.isFinite() || m.isZero()))
            if (o.length === 0) {
              var _ = new nt(0, 0, 0, 0);
              _.copy(m), o.push(_);
            } else {
              for (var S = !1, b = 1 / 0, w = 0, x = 0; x < o.length; ++x) {
                var T = o[x];
                if (T.intersect(m)) {
                  var D = new nt(0, 0, 0, 0);
                  D.copy(T), D.union(m), o[x] = D, S = !0;
                  break;
                } else if (l) {
                  u.copy(m), u.union(T);
                  var A = m.width * m.height, C = T.width * T.height, L = u.width * u.height, P = L - A - C;
                  P < b && (b = P, w = x);
                }
              }
              if (l && (o[w].union(m), S = !0), !S) {
                var _ = new nt(0, 0, 0, 0);
                _.copy(m), o.push(_);
              }
              l || (l = o.length >= s);
            }
        }
        for (var h = this.__startIndex; h < this.__endIndex; ++h) {
          var c = e[h];
          if (c) {
            var v = c.shouldBePainted(i, a, !0, !0), d = c.__isRendered && (c.__dirty & ue || !v) ? c.getPrevPaintRect() : null;
            d && f(d);
            var g = v && (c.__dirty & ue || !c.__isRendered) ? c.getPaintRect() : null;
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
            if (Si(n)) {
              var S = n.global || n.__width === y && n.__height === m;
              _ = S && n.__canvasGradient || Bf(o, n, {
                x: 0,
                y: 0,
                width: y,
                height: m
              }), n.__canvasGradient = _, n.__width = y, n.__height = m;
            } else
              uv(n) && (n.scaleX = n.scaleX || h, n.scaleY = n.scaleY || h, _ = Nf(o, n, {
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
    }(Ue), Pm = 1e5, En = 314159, tl = 0.01, IM = 1e-3;
    function RM(r) {
      return r ? r.__builtin__ ? !0 : !(typeof r.resize != "function" || typeof r.refresh != "function") : !1;
    }
    function EM(r, t) {
      var e = document.createElement("div");
      return e.style.cssText = ["position:relative", "width:" + r + "px", "height:" + t + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", e;
    }
    var kM = function() {
      function r(t, e, n, i) {
        this.type = "canvas", this._zlevelList = [], this._prevDisplayList = [], this._layers = {}, this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas";
        var a = !t.nodeName || t.nodeName.toUpperCase() === "CANVAS";
        this._opts = n = k({}, n || {}), this.dpr = n.devicePixelRatio || co, this._singleCanvas = a, this.root = t;
        var o = t.style;
        o && (dl(t), t.innerHTML = ""), this.storage = e;
        var s = this._zlevelList;
        this._prevDisplayList = [];
        var l = this._layers;
        if (a) {
          var f = t, h = f.width, c = f.height;
          n.width != null && (h = n.width), n.height != null && (c = n.height), this.dpr = n.devicePixelRatio || 1, f.width = h * this.dpr, f.height = c * this.dpr, this._width = h, this._height = c;
          var v = new Ch(f, this, this.dpr);
          v.__builtin__ = !0, v.initContext(), l[En] = v, v.zlevel = En, s.push(En), this._domRoot = t;
        } else {
          this._width = Ms(t, 0, n), this._height = Ms(t, 1, n);
          var u = this._domRoot = EM(this._width, this._height);
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
            s.__inHover && (n || (n = this._hoverlayer = this.getLayer(Pm)), a || (a = n.ctx, a.save()), Mn(a, s, i, o === e - 1));
          }
          a && a.restore();
        }
      }, r.prototype.getHoverLayer = function() {
        return this.getLayer(Pm);
      }, r.prototype.paintOne = function(t, e) {
        Ff(t, e);
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
            Pl(function() {
              l._paintList(t, e, n, i);
            });
          }
        }
      }, r.prototype._compositeManually = function() {
        var t = this.getLayer(En).ctx, e = this._domRoot.width, n = this._domRoot.height;
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
        return X.wxa && M(this._layers, function(g) {
          g && g.ctx && g.ctx.draw && g.ctx.draw();
        }), {
          finished: f,
          needsRefreshHover: h
        };
      }, r.prototype._doPaintEl = function(t, e, n, i, a, o) {
        var s = e.ctx;
        if (n) {
          var l = t.getPaintRect();
          (!i || l && l.intersect(i)) && (Mn(s, t, a, o), t.setPrevPaintRect(l));
        } else
          Mn(s, t, a, o);
      }, r.prototype.getLayer = function(t, e) {
        this._singleCanvas && !this._needsManuallyCompositing && (t = En);
        var n = this._layers[t];
        return n || (n = new Ch("zr_" + t, this, this.dpr), n.zlevel = t, n.__builtin__ = !0, this._layerConfig[t] ? at(n, this._layerConfig[t], !0) : this._layerConfig[t - tl] && at(n, this._layerConfig[t - tl], !0), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n;
      }, r.prototype.insertLayer = function(t, e) {
        var n = this._layers, i = this._zlevelList, a = i.length, o = this._domRoot, s = null, l = -1;
        if (n[t]) {
          _r("ZLevel " + t + " has been used already");
          return;
        }
        if (!RM(e)) {
          _r("Layer of zlevel " + t + " is not valid");
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
          s !== u && (s = u, o = 0), i.incremental ? (f = this.getLayer(u + IM, this._needsManuallyCompositing), f.incremental = !0, o = 1) : f = this.getLayer(u + (o > 0 ? tl : 0), this._needsManuallyCompositing), f.__builtin__ || _r("ZLevel " + u + " has been used by unkown layer " + f.id), f !== a && (f.__used = !0, f.__startIndex !== l && (f.__dirty = !0), f.__startIndex = l, f.incremental ? f.__drawIndex = -1 : f.__drawIndex = l, e(l), a = f), i.__dirty & ue && !i.__inHover && (f.__dirty = !0, f.incremental && f.__drawIndex < 0 && (f.__drawIndex = l));
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
          n[t] ? at(n[t], e, !0) : n[t] = e;
          for (var i = 0; i < this._zlevelList.length; i++) {
            var a = this._zlevelList[i];
            if (a === t || a === t + tl) {
              var o = this._layers[a];
              at(o, n[t], !0);
            }
          }
        }
      }, r.prototype.delLayer = function(t) {
        var e = this._layers, n = this._zlevelList, i = e[t];
        i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(lt(n, t), 1));
      }, r.prototype.resize = function(t, e) {
        if (this._domRoot.style) {
          var n = this._domRoot;
          n.style.display = "none";
          var i = this._opts, a = this.root;
          if (t != null && (i.width = t), e != null && (i.height = e), t = Ms(a, 0, i), e = Ms(a, 1, i), n.style.display = "", this._width !== t || e !== this._height) {
            n.style.width = t + "px", n.style.height = e + "px";
            for (var o in this._layers)
              this._layers.hasOwnProperty(o) && this._layers[o].resize(t, e);
            this.refresh(!0);
          }
          this._width = t, this._height = e;
        } else {
          if (t == null || e == null)
            return;
          this._width = t, this._height = e, this.getLayer(En).resize(t, e);
        }
        return this;
      }, r.prototype.clearLayer = function(t) {
        var e = this._layers[t];
        e && e.clear();
      }, r.prototype.dispose = function() {
        this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
      }, r.prototype.getRenderedCanvas = function(t) {
        if (t = t || {}, this._singleCanvas && !this._compositeManually)
          return this._layers[En].dom;
        var e = new Ch("image", this, t.pixelRatio || this.dpr);
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
            Mn(n, f, o, l === u - 1);
          }
        return e.dom;
      }, r.prototype.getWidth = function() {
        return this._width;
      }, r.prototype.getHeight = function() {
        return this._height;
      }, r;
    }();
    function OM(r) {
      r.registerPainter("canvas", kM);
    }
    var BM = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          var e = r !== null && r.apply(this, arguments) || this;
          return e.type = "dataset", e;
        }
        return t.prototype.init = function(e, n, i) {
          r.prototype.init.call(this, e, n, i), this._sourceManager = new ag(this), og(this);
        }, t.prototype.mergeOption = function(e, n) {
          r.prototype.mergeOption.call(this, e, n), og(this);
        }, t.prototype.optionUpdated = function() {
          this._sourceManager.dirty();
        }, t.prototype.getSourceManager = function() {
          return this._sourceManager;
        }, t.type = "dataset", t.defaultOption = {
          seriesLayoutBy: tr
        }, t;
      }(it)
    ), NM = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          var e = r !== null && r.apply(this, arguments) || this;
          return e.type = "dataset", e;
        }
        return t.type = "dataset", t;
      }($t)
    );
    function FM(r) {
      r.registerComponentModel(BM), r.registerComponentView(NM);
    }
    oe([OM, FM]), oe(Am);
    var zM = {
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
    }, GM = function(r) {
      return Math.round(r.length / 2);
    };
    function Im(r) {
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
              G(a) ? d = zM[a] : Y(a) && (d = a), d && t.setData(i.downSample(i.mapDimension(u.dim), 1 / v, d, GM));
            }
          }
        }
      };
    }
    var Dh = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          var e = r !== null && r.apply(this, arguments) || this;
          return e.type = t.type, e;
        }
        return t.prototype.getInitialData = function(e, n) {
          return Vs(null, this, {
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
      }(ne)
    );
    ne.registerClass(Dh);
    var HM = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          var e = r !== null && r.apply(this, arguments) || this;
          return e.type = t.type, e;
        }
        return t.prototype.getInitialData = function() {
          return Vs(null, this, {
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
        }, t.type = "series.bar", t.dependencies = ["grid", "polar"], t.defaultOption = ap(Dh.defaultOption, {
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
      }(Dh)
    );
    function Rm(r, t, e, n, i) {
      var a = r.getArea(), o = a.x, s = a.y, l = a.width, u = a.height, f = e.get(["lineStyle", "width"]) || 2;
      o -= f / 2, s -= f / 2, l += f, u += f, o = Math.floor(o), l = Math.round(l);
      var h = new Tt({
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
        var g = Y(i) ? function(p) {
          i(p, h);
        } : null;
        Gt(h, {
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
    function Em(r, t, e) {
      var n = r.getArea(), i = xt(n.r0, 1), a = xt(n.r, 1), o = new hr({
        shape: {
          cx: xt(r.cx, 1),
          cy: xt(r.cy, 1),
          r0: i,
          r: a,
          startAngle: n.startAngle,
          endAngle: n.endAngle,
          clockwise: n.clockwise
        }
      });
      if (t) {
        var s = r.getBaseAxis().dim === "angle";
        s ? o.shape.endAngle = n.startAngle : o.shape.r = i, Gt(o, {
          shape: {
            endAngle: n.endAngle,
            r: a
          }
        }, e);
      }
      return o;
    }
    function VM(r, t, e, n, i) {
      if (r) {
        if (r.type === "polar")
          return Em(r, t, e);
        if (r.type === "cartesian2d")
          return Rm(r, t, e, n, i);
      } else
        return null;
      return null;
    }
    var WM = (
      /** @class */
      function() {
        function r() {
          this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
        }
        return r;
      }()
    ), km = (
      /** @class */
      function(r) {
        B(t, r);
        function t(e) {
          var n = r.call(this, e) || this;
          return n.type = "sausage", n;
        }
        return t.prototype.getDefaultShape = function() {
          return new WM();
        }, t.prototype.buildPath = function(e, n) {
          var i = n.cx, a = n.cy, o = Math.max(n.r0 || 0, 0), s = Math.max(n.r, 0), l = (s - o) * 0.5, u = o + l, f = n.startAngle, h = n.endAngle, c = n.clockwise, v = Math.PI * 2, d = c ? h - f < v : f - h < v;
          d || (f = h - (c ? v : -v));
          var g = Math.cos(f), p = Math.sin(f), y = Math.cos(h), m = Math.sin(h);
          d ? (e.moveTo(g * o + i, p * o + a), e.arc(g * u + i, p * u + a, l, -Math.PI + f, f, !c)) : e.moveTo(g * s + i, p * s + a), e.arc(i, a, s, f, h, !c), e.arc(y * u + i, m * u + a, l, h - Math.PI * 2, h - Math.PI, !c), o !== 0 && e.arc(i, a, o, h, f, c);
        }, t;
      }(ft)
    );
    function Mh(r, t) {
      return r.type === t;
    }
    function Ah(r, t) {
      var e = r.mapDimensionsAll("defaultedLabel"), n = e.length;
      if (n === 1) {
        var i = fi(r, t, e[0]);
        return i != null ? i + "" : null;
      } else if (n) {
        for (var a = [], o = 0; o < e.length; o++)
          a.push(fi(r, t, e[o]));
        return a.join(" ");
      }
    }
    function Om(r, t) {
      var e = r.mapDimensionsAll("defaultedLabel");
      if (!F(t))
        return t + "";
      for (var n = [], i = 0; i < e.length; i++) {
        var a = r.getDimensionIndex(e[i]);
        a >= 0 && n.push(t[a]);
      }
      return n.join(" ");
    }
    function UM(r, t) {
      t = t || {};
      var e = t.isRoundCap;
      return function(n, i, a) {
        var o = i.position;
        if (!o || o instanceof Array)
          return go(n, i, a);
        var s = r(o), l = i.distance != null ? i.distance : 5, u = this.shape, f = u.cx, h = u.cy, c = u.r, v = u.r0, d = (c + v) / 2, g = u.startAngle, p = u.endAngle, y = (g + p) / 2, m = e ? Math.abs(c - v) / 2 : 0, _ = Math.cos, S = Math.sin, b = f + c * _(g), w = h + c * S(g), x = "left", T = "top";
        switch (s) {
          case "startArc":
            b = f + (v - l) * _(y), w = h + (v - l) * S(y), x = "center", T = "top";
            break;
          case "insideStartArc":
            b = f + (v + l) * _(y), w = h + (v + l) * S(y), x = "center", T = "bottom";
            break;
          case "startAngle":
            b = f + d * _(g) + el(g, l + m, !1), w = h + d * S(g) + rl(g, l + m, !1), x = "right", T = "middle";
            break;
          case "insideStartAngle":
            b = f + d * _(g) + el(g, -l + m, !1), w = h + d * S(g) + rl(g, -l + m, !1), x = "left", T = "middle";
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
            b = f + d * _(p) + el(p, l + m, !0), w = h + d * S(p) + rl(p, l + m, !0), x = "left", T = "middle";
            break;
          case "insideEndAngle":
            b = f + d * _(p) + el(p, -l + m, !0), w = h + d * S(p) + rl(p, -l + m, !0), x = "right", T = "middle";
            break;
          default:
            return go(n, i, a);
        }
        return n = n || {}, n.x = b, n.y = w, n.align = x, n.verticalAlign = T, n;
      };
    }
    function YM(r, t, e, n) {
      if (ct(n)) {
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
    function el(r, t, e) {
      return t * Math.sin(r) * (e ? -1 : 1);
    }
    function rl(r, t, e) {
      return t * Math.cos(r) * (e ? 1 : -1);
    }
    function Oa(r, t, e) {
      var n = r.get("borderRadius");
      if (n == null)
        return e ? {
          cornerRadius: 0
        } : null;
      F(n) || (n = [n, n, n, n]);
      var i = Math.abs(t.r || 0 - t.r0 || 0);
      return {
        cornerRadius: H(n, function(a) {
          return Lr(a, i);
        })
      };
    }
    var Lh = Math.max, Ph = Math.min;
    function XM(r, t) {
      var e = r.getArea && r.getArea();
      if (Mh(r, "cartesian2d")) {
        var n = r.getBaseAxis();
        if (n.type !== "category" || !n.onBand) {
          var i = t.getLayout("bandWidth");
          n.isHorizontal() ? (e.x -= i, e.width += i * 2) : (e.y -= i, e.height += i * 2);
        }
      }
      return e;
    }
    var qM = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          var e = r.call(this) || this;
          return e.type = t.type, e._isFirstFrame = !0, e;
        }
        return t.prototype.render = function(e, n, i, a) {
          this._model = e, this._removeOnRenderedListener(i), this._updateDrawMode(e);
          var o = e.get("coordinateSystem");
          o === "cartesian2d" || o === "polar" ? (this._progressiveEls = null, this._isLargeDraw ? this._renderLarge(e, n, i) : this._renderNormal(e, n, i, a)) : Nt("Only cartesian2d and polar supported for bar.");
        }, t.prototype.incrementalPrepareRender = function(e) {
          this._clear(), this._updateDrawMode(e), this._updateLargeClip(e);
        }, t.prototype.incrementalRender = function(e, n) {
          this._progressiveEls = [], this._incrementalRenderLarge(e, n);
        }, t.prototype.eachRendered = function(e) {
          es(this._progressiveEls || this.group, e);
        }, t.prototype._updateDrawMode = function(e) {
          var n = e.pipelineContext.large;
          (this._isLargeDraw == null || n !== this._isLargeDraw) && (this._isLargeDraw = n, this._clear());
        }, t.prototype._renderNormal = function(e, n, i, a) {
          var o = this.group, s = e.getData(), l = this._data, u = e.coordinateSystem, f = u.getBaseAxis(), h;
          u.type === "cartesian2d" ? h = f.isHorizontal() : u.type === "polar" && (h = f.dim === "angle");
          var c = e.isAnimationEnabled() ? e : null, v = ZM(e, u);
          v && this._enableRealtimeSort(v, s, i);
          var d = e.get("clip", !0) || v, g = XM(u, s);
          o.removeClipPath();
          var p = e.get("roundCap", !0), y = e.get("showBackground", !0), m = e.getModel("backgroundStyle"), _ = m.get("borderRadius") || 0, S = [], b = this._backgroundEls, w = a && a.isInitSort, x = a && a.type === "changeAxisOrder";
          function T(C) {
            var L = nl[u.type](s, C), P = eA(u, h, L);
            return P.useStyle(m.getItemStyle()), u.type === "cartesian2d" ? P.setShape("r", _) : P.setShape("cornerRadius", _), S[C] = P, P;
          }
          s.diff(l).add(function(C) {
            var L = s.getItemModel(C), P = nl[u.type](s, C, L);
            if (y && T(C), !(!s.hasValue(C) || !Gm[u.type](P))) {
              var I = !1;
              d && (I = Bm[u.type](g, P));
              var R = Nm[u.type](e, s, C, P, h, c, f.model, !1, p);
              v && (R.forceLabelAnimation = !0), Vm(R, s, C, L, P, e, h, u.type === "polar"), w ? R.attr({
                shape: P
              }) : v ? Fm(v, c, R, P, C, h, !1, !1) : Gt(R, {
                shape: P
              }, e, C), s.setItemGraphicEl(C, R), o.add(R), R.ignore = I;
            }
          }).update(function(C, L) {
            var P = s.getItemModel(C), I = nl[u.type](s, C, P);
            if (y) {
              var R = void 0;
              b.length === 0 ? R = T(L) : (R = b[L], R.useStyle(m.getItemStyle()), u.type === "cartesian2d" ? R.setShape("r", _) : R.setShape("cornerRadius", _), S[C] = R);
              var E = nl[u.type](s, C), U = Xm(h, E, u);
              Pt(R, {
                shape: U
              }, c, C);
            }
            var O = l.getItemGraphicEl(L);
            if (!s.hasValue(C) || !Gm[u.type](I)) {
              o.remove(O);
              return;
            }
            var N = !1;
            if (d && (N = Bm[u.type](g, I), N && o.remove(O)), O ? Vu(O) : O = Nm[u.type](e, s, C, I, h, c, f.model, !!O, p), v && (O.forceLabelAnimation = !0), x) {
              var W = O.getTextContent();
              if (W) {
                var K = ii(W);
                K.prevValue != null && (K.prevValue = K.value);
              }
            } else
              Vm(O, s, C, P, I, e, h, u.type === "polar");
            w ? O.attr({
              shape: I
            }) : v ? Fm(v, c, O, I, C, h, !0, x) : Pt(O, {
              shape: I
            }, e, C, null), s.setItemGraphicEl(C, O), O.ignore = N, o.add(O);
          }).remove(function(C) {
            var L = l.getItemGraphicEl(C);
            L && Ko(L, e, C);
          }).execute();
          var D = this._backgroundGroup || (this._backgroundGroup = new It());
          D.removeAll();
          for (var A = 0; A < S.length; ++A)
            D.add(S[A]);
          o.add(D), this._backgroundEls = S, this._data = s;
        }, t.prototype._renderLarge = function(e, n, i) {
          this._clear(), Um(e, this.group), this._updateLargeClip(e);
        }, t.prototype._incrementalRenderLarge = function(e, n) {
          this._removeBackground(), Um(n, this.group, this._progressiveEls, !0);
        }, t.prototype._updateLargeClip = function(e) {
          var n = e.get("clip", !0) && VM(e.coordinateSystem, !1, e), i = this.group;
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
            ordinalNumbers: H(a, function(o) {
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
            Ko(a, e, ot(a).dataIndex);
          })) : n.removeAll(), this._data = null, this._isFirstFrame = !0;
        }, t.prototype._removeBackground = function() {
          this.group.remove(this._backgroundGroup), this._backgroundGroup = null;
        }, t.type = "bar", t;
      }(Kt)
    ), Bm = {
      cartesian2d: function(r, t) {
        var e = t.width < 0 ? -1 : 1, n = t.height < 0 ? -1 : 1;
        e < 0 && (t.x += t.width, t.width = -t.width), n < 0 && (t.y += t.height, t.height = -t.height);
        var i = r.x + r.width, a = r.y + r.height, o = Lh(t.x, r.x), s = Ph(t.x + t.width, i), l = Lh(t.y, r.y), u = Ph(t.y + t.height, a), f = s < o, h = u < l;
        return t.x = f && o > i ? s : o, t.y = h && l > a ? u : l, t.width = f ? 0 : s - o, t.height = h ? 0 : u - l, e < 0 && (t.x += t.width, t.width = -t.width), n < 0 && (t.y += t.height, t.height = -t.height), f || h;
      },
      polar: function(r, t) {
        var e = t.r0 <= t.r ? 1 : -1;
        if (e < 0) {
          var n = t.r;
          t.r = t.r0, t.r0 = n;
        }
        var i = Ph(t.r, r.r), a = Lh(t.r0, r.r0);
        t.r = i, t.r0 = a;
        var o = i - a < 0;
        if (e < 0) {
          var n = t.r;
          t.r = t.r0, t.r0 = n;
        }
        return o;
      }
    }, Nm = {
      cartesian2d: function(r, t, e, n, i, a, o, s, l) {
        var u = new Tt({
          shape: k({}, n),
          z2: 1
        });
        if (u.__dataIndex = e, u.name = "item", a) {
          var f = u.shape, h = i ? "height" : "width";
          f[h] = 0;
        }
        return u;
      },
      polar: function(r, t, e, n, i, a, o, s, l) {
        var u = !i && l ? km : hr, f = new u({
          shape: n,
          z2: 1
        });
        f.name = "item";
        var h = Hm(i);
        if (f.calculateTextPosition = UM(h, {
          isRoundCap: u === km
        }), a) {
          var c = f.shape, v = i ? "r" : "endAngle", d = {};
          c[v] = i ? n.r0 : n.startAngle, d[v] = n[v], (s ? Pt : Gt)(f, {
            shape: d
            // __value: typeof dataValue === 'string' ? parseInt(dataValue, 10) : dataValue
          }, a);
        }
        return f;
      }
    };
    function ZM(r, t) {
      var e = r.get("realtimeSort", !0), n = t.getBaseAxis();
      if (e && (n.type !== "category" && Nt("`realtimeSort` will not work because this bar series is not based on a category axis."), t.type !== "cartesian2d" && Nt("`realtimeSort` will not work because this bar series is not on cartesian2d.")), e && n.type === "category" && t.type === "cartesian2d")
        return {
          baseAxis: n,
          otherAxis: t.getOtherAxis(n)
        };
    }
    function Fm(r, t, e, n, i, a, o, s) {
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
      }), s || (o ? Pt : Gt)(e, {
        shape: l
      }, t, i, null);
      var f = t ? r.baseAxis.model : null;
      (o ? Pt : Gt)(e, {
        shape: u
      }, f, i);
    }
    function zm(r, t) {
      for (var e = 0; e < t.length; e++)
        if (!isFinite(r[t[e]]))
          return !0;
      return !1;
    }
    var $M = ["x", "y", "width", "height"], KM = ["cx", "cy", "r", "startAngle", "endAngle"], Gm = {
      cartesian2d: function(r) {
        return !zm(r, $M);
      },
      polar: function(r) {
        return !zm(r, KM);
      }
    }, nl = {
      // itemModel is only used to get borderWidth, which is not needed
      // when calculating bar background layout.
      cartesian2d: function(r, t, e) {
        var n = r.getItemLayout(t), i = e ? jM(e, n) : 0, a = n.width > 0 ? 1 : -1, o = n.height > 0 ? 1 : -1;
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
    function QM(r) {
      return r.startAngle != null && r.endAngle != null && r.startAngle === r.endAngle;
    }
    function Hm(r) {
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
    function Vm(r, t, e, n, i, a, o, s) {
      var l = t.getItemVisual(e, "style");
      if (s) {
        if (!a.get("roundCap")) {
          var f = r.shape, h = Oa(n.getModel("itemStyle"), f, !0);
          k(f, h), r.setShape(f);
        }
      } else {
        var u = n.get(["itemStyle", "borderRadius"]) || 0;
        r.setShape("r", u);
      }
      r.useStyle(l);
      var c = n.getShallow("cursor");
      c && r.attr("cursor", c);
      var v = s ? o ? i.r >= i.r0 ? "endArc" : "startArc" : i.endAngle >= i.startAngle ? "endAngle" : "startAngle" : o ? i.height >= 0 ? "bottom" : "top" : i.width >= 0 ? "right" : "left", d = ia(n);
      na(r, d, {
        labelFetcher: a,
        labelDataIndex: e,
        defaultText: Ah(a.getData(), e),
        inheritColor: l.fill,
        defaultOpacity: l.opacity,
        defaultOutsidePosition: v
      });
      var g = r.getTextContent();
      if (s && g) {
        var p = n.get(["label", "position"]);
        r.textConfig.inside = p === "middle" ? !0 : null, YM(r, p === "outside" ? v : p, Hm(o), n.get(["label", "rotate"]));
      }
      xb(g, d, a.getRawValue(e), function(m) {
        return Om(t, m);
      });
      var y = n.getModel(["emphasis"]);
      Ki(r, y.get("focus"), y.get("blurScope"), y.get("disabled")), Fo(r, n), QM(i) && (r.style.fill = "none", r.style.stroke = "none", M(r.states, function(m) {
        m.style && (m.style.fill = m.style.stroke = "none");
      }));
    }
    function jM(r, t) {
      var e = r.get(["itemStyle", "borderColor"]);
      if (!e || e === "none")
        return 0;
      var n = r.get(["itemStyle", "borderWidth"]) || 0, i = isNaN(t.width) ? Number.MAX_VALUE : Math.abs(t.width), a = isNaN(t.height) ? Number.MAX_VALUE : Math.abs(t.height);
      return Math.min(n, i, a);
    }
    var JM = (
      /** @class */
      function() {
        function r() {
        }
        return r;
      }()
    ), Wm = (
      /** @class */
      function(r) {
        B(t, r);
        function t(e) {
          var n = r.call(this, e) || this;
          return n.type = "largeBar", n;
        }
        return t.prototype.getDefaultShape = function() {
          return new JM();
        }, t.prototype.buildPath = function(e, n) {
          for (var i = n.points, a = this.baseDimIdx, o = 1 - this.baseDimIdx, s = [], l = [], u = this.barWidth, f = 0; f < i.length; f += 3)
            l[a] = u, l[o] = i[f + 2], s[a] = i[f + a], s[o] = i[f + o], e.rect(s[0], s[1], l[0], l[1]);
        }, t;
      }(ft)
    );
    function Um(r, t, e, n) {
      var i = r.getData(), a = i.getLayout("valueAxisHorizontal") ? 1 : 0, o = i.getLayout("largeDataIndices"), s = i.getLayout("size"), l = r.getModel("backgroundStyle"), u = i.getLayout("largeBackgroundPoints");
      if (u) {
        var f = new Wm({
          shape: {
            points: u
          },
          incremental: !!n,
          silent: !0,
          z2: 0
        });
        f.baseDimIdx = a, f.largeDataIndices = o, f.barWidth = s, f.useStyle(l.getItemStyle()), t.add(f), e && e.push(f);
      }
      var h = new Wm({
        shape: {
          points: i.getLayout("largePoints")
        },
        incremental: !!n,
        ignoreCoarsePointer: !0,
        z2: 1
      });
      h.baseDimIdx = a, h.largeDataIndices = o, h.barWidth = s, t.add(h), h.useStyle(i.getVisual("style")), ot(h).seriesIndex = r.seriesIndex, r.get("silent") || (h.on("mousedown", Ym), h.on("mousemove", Ym)), e && e.push(h);
    }
    var Ym = bs(function(r) {
      var t = this, e = tA(t, r.offsetX, r.offsetY);
      ot(t).dataIndex = e >= 0 ? e : null;
    }, 30, !1);
    function tA(r, t, e) {
      for (var n = r.baseDimIdx, i = 1 - n, a = r.shape.points, o = r.largeDataIndices, s = [], l = [], u = r.barWidth, f = 0, h = a.length / 3; f < h; f++) {
        var c = f * 3;
        if (l[n] = u, l[i] = a[c + 2], s[n] = a[c + n], s[i] = a[c + i], l[i] < 0 && (s[i] += l[i], l[i] = -l[i]), t >= s[0] && t <= s[0] + l[0] && e >= s[1] && e <= s[1] + l[1])
          return o[f];
      }
      return -1;
    }
    function Xm(r, t, e) {
      if (Mh(e, "cartesian2d")) {
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
    function eA(r, t, e) {
      var n = r.type === "polar" ? hr : Tt;
      return new n({
        shape: Xm(t, e, r),
        silent: !0,
        z2: 0
      });
    }
    function rA(r) {
      r.registerChartView(qM), r.registerSeriesModel(HM), r.registerLayout(r.PRIORITY.VISUAL.LAYOUT, _t(SD, "bar")), r.registerLayout(r.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, wD("bar")), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, Im("bar")), r.registerAction({
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
    oe(rA);
    var nA = (
      /** @class */
      function(r) {
        B(t, r);
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
          return Vs(null, this, {
            useEncodeDefaulter: !0
          });
        }, t.prototype.getLegendIcon = function(e) {
          var n = new It(), i = Cn("line", 0, e.itemHeight / 2, e.itemWidth, 0, e.lineStyle.stroke, !1);
          n.add(i), i.setStyle(e.lineStyle);
          var a = this.getData().getVisual("symbol"), o = this.getData().getVisual("symbolRotate"), s = a === "none" ? "circle" : a, l = e.itemHeight * 0.8, u = Cn(s, (e.itemWidth - l) / 2, (e.itemHeight - l) / 2, l, l, e.itemStyle.fill);
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
      }(ne)
    ), Ih = (
      /** @class */
      function(r) {
        B(t, r);
        function t(e, n, i, a) {
          var o = r.call(this) || this;
          return o.updateData(e, n, i, a), o;
        }
        return t.prototype._createSymbol = function(e, n, i, a, o) {
          this.removeAll();
          var s = Cn(e, -1, -1, 2, 2, null, o);
          s.attr({
            z2: 100,
            culling: !0,
            scaleX: a[0] / 2,
            scaleY: a[1] / 2
          }), s.drift = iA, this._symbolType = e, this.add(s);
        }, t.prototype.stopSymbolAnimation = function(e) {
          this.childAt(0).stopAnimation(null, e);
        }, t.prototype.getSymbolType = function() {
          return this._symbolType;
        }, t.prototype.getSymbolPath = function() {
          return this.childAt(0);
        }, t.prototype.highlight = function() {
          Oo(this.childAt(0));
        }, t.prototype.downplay = function() {
          Bo(this.childAt(0));
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
            f ? c.attr(v) : Pt(c, v, s, n), Vu(c);
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
              c.scaleX = c.scaleY = 0, c.style.opacity = 0, Gt(c, v, s, n);
            }
          }
          f && this.childAt(0).stopAnimation("leave");
        }, t.prototype._updateCommon = function(e, n, i, a, o) {
          var s = this.childAt(0), l = e.hostModel, u, f, h, c, v, d, g, p, y;
          if (a && (u = a.emphasisItemStyle, f = a.blurItemStyle, h = a.selectItemStyle, c = a.focus, v = a.blurScope, g = a.labelStatesModels, p = a.hoverScale, y = a.cursorStyle, d = a.emphasisDisabled), !a || e.hasItemOption) {
            var m = a && a.itemModel ? a.itemModel : e.getItemModel(n), _ = m.getModel("emphasis");
            u = _.getModel("itemStyle").getItemStyle(), h = m.getModel(["select", "itemStyle"]).getItemStyle(), f = m.getModel(["blur", "itemStyle"]).getItemStyle(), c = _.get("focus"), v = _.get("blurScope"), d = _.get("disabled"), g = ia(m), p = _.getShallow("scale"), y = m.getShallow("cursor");
          }
          var S = e.getItemVisual(n, "symbolRotate");
          s.attr("rotation", (S || 0) * Math.PI / 180 || 0);
          var b = Bg(e.getItemVisual(n, "symbolOffset"), i);
          b && (s.x = b[0], s.y = b[1]), y && s.attr("cursor", y);
          var w = e.getItemVisual(n, "style"), x = w.fill;
          if (s instanceof ur) {
            var T = s.style;
            s.useStyle(k({
              // TODO other properties like x, y ?
              image: T.image,
              x: T.x,
              y: T.y,
              width: T.width,
              height: T.height
            }, w));
          } else
            s.__isEmptyBrush ? s.useStyle(k({}, w)) : s.useStyle(w), s.style.decal = null, s.setColor(x, o && o.symbolInnerColor), s.style.strokeNoScale = !0;
          var D = e.getItemVisual(n, "liftZ"), A = this._z2;
          D != null ? A == null && (this._z2 = s.z2, s.z2 += D) : A != null && (s.z2 = A, this._z2 = null);
          var C = o && o.useNameLabel;
          na(s, g, {
            labelFetcher: l,
            labelDataIndex: n,
            defaultText: L,
            inheritColor: x,
            defaultOpacity: w.opacity
          });
          function L(R) {
            return C ? e.getName(R) : Ah(e, R);
          }
          this._sizeX = i[0] / 2, this._sizeY = i[1] / 2;
          var P = s.ensureState("emphasis");
          P.style = u, s.ensureState("select").style = h, s.ensureState("blur").style = f;
          var I = p == null || p === !0 ? Math.max(1.1, 3 / this._sizeY) : isFinite(p) && p > 0 ? +p : 1;
          P.scaleX = this._sizeX * I, P.scaleY = this._sizeY * I, this.setSymbolScale(1), Ki(this, c, v, d);
        }, t.prototype.setSymbolScale = function(e) {
          this.scaleX = this.scaleY = e;
        }, t.prototype.fadeOut = function(e, n, i) {
          var a = this.childAt(0), o = ot(this).dataIndex, s = i && i.animation;
          if (this.silent = a.silent = !0, i && i.fadeLabel) {
            var l = a.getTextContent();
            l && $o(l, {
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
          $o(a, {
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
          return KT(e.getItemVisual(n, "symbolSize"));
        }, t;
      }(It)
    );
    function iA(r, t) {
      this.parent.drift(r, t);
    }
    function Rh(r, t, e, n) {
      return t && !isNaN(t[0]) && !isNaN(t[1]) && !(n.isIgnore && n.isIgnore(e)) && !(n.clipShape && !n.clipShape.contain(t[0], t[1])) && r.getItemVisual(e, "symbol") !== "none";
    }
    function qm(r) {
      return r != null && !V(r) && (r = {
        isIgnore: r
      }), r || {};
    }
    function Zm(r) {
      var t = r.hostModel, e = t.getModel("emphasis");
      return {
        emphasisItemStyle: e.getModel("itemStyle").getItemStyle(),
        blurItemStyle: t.getModel(["blur", "itemStyle"]).getItemStyle(),
        selectItemStyle: t.getModel(["select", "itemStyle"]).getItemStyle(),
        focus: e.get("focus"),
        blurScope: e.get("blurScope"),
        emphasisDisabled: e.get("disabled"),
        hoverScale: e.get("scale"),
        labelStatesModels: ia(t),
        cursorStyle: t.get("cursor")
      };
    }
    var aA = (
      /** @class */
      function() {
        function r(t) {
          this.group = new It(), this._SymbolCtor = t || Ih;
        }
        return r.prototype.updateData = function(t, e) {
          this._progressiveEls = null, e = qm(e);
          var n = this.group, i = t.hostModel, a = this._data, o = this._SymbolCtor, s = e.disableAnimation, l = Zm(t), u = {
            disableAnimation: s
          }, f = e.getSymbolPoint || function(h) {
            return t.getItemLayout(h);
          };
          a || n.removeAll(), t.diff(a).add(function(h) {
            var c = f(h);
            if (Rh(t, c, h, e)) {
              var v = new o(t, h, l, u);
              v.setPosition(c), t.setItemGraphicEl(h, v), n.add(v);
            }
          }).update(function(h, c) {
            var v = a.getItemGraphicEl(c), d = f(h);
            if (!Rh(t, d, h, e)) {
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
              s ? v.attr(y) : Pt(v, y, i);
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
          this._seriesScope = Zm(t), this._data = null, this.group.removeAll();
        }, r.prototype.incrementalUpdate = function(t, e, n) {
          this._progressiveEls = [], n = qm(n);
          function i(l) {
            l.isGroup || (l.incremental = !0, l.ensureState("emphasis").hoverLayer = !0);
          }
          for (var a = t.start; a < t.end; a++) {
            var o = e.getItemLayout(a);
            if (Rh(e, o, a, n)) {
              var s = new this._SymbolCtor(e, a, this._seriesScope);
              s.traverse(i), s.setPosition(o), this.group.add(s), e.setItemGraphicEl(a, s), this._progressiveEls.push(s);
            }
          }
        }, r.prototype.eachRendered = function(t) {
          es(this._progressiveEls || this.group, t);
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
    function $m(r, t, e) {
      var n = r.getBaseAxis(), i = r.getOtherAxis(n), a = oA(i, e), o = n.dim, s = i.dim, l = t.mapDimension(s), u = t.mapDimension(o), f = s === "x" || s === "radius" ? 1 : 0, h = H(r.dimensions, function(d) {
        return t.mapDimension(d);
      }), c = !1, v = t.getCalculationInfo("stackResultDimension");
      return Pn(
        t,
        h[0]
        /* , dims[1] */
      ) && (c = !0, h[0] = v), Pn(
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
    function oA(r, t) {
      var e = 0, n = r.scale.getExtent();
      return t === "start" ? e = n[0] : t === "end" ? e = n[1] : ct(t) && !isNaN(t) ? e = t : n[0] > 0 ? e = n[0] : n[1] < 0 && (e = n[1]), e;
    }
    function Km(r, t, e, n) {
      var i = NaN;
      r.stacked && (i = e.get(e.getCalculationInfo("stackedOverDimension"), n)), isNaN(i) && (i = r.valueStart);
      var a = r.baseDataOffset, o = [];
      return o[a] = e.get(r.baseDim, n), o[1 - a] = i, t.dataToPoint(o);
    }
    function sA(r, t) {
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
    function lA(r, t, e, n, i, a, o, s) {
      for (var l = sA(r, t), u = [], f = [], h = [], c = [], v = [], d = [], g = [], p = $m(i, t, o), y = r.getLayout("points") || [], m = t.getLayout("points") || [], _ = 0; _ < l.length; _++) {
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
            var R = Km(p, i, t, L);
            h.push(R[0], R[1]), c.push(n[x], n[x + 1]), g.push(t.getRawIndex(L));
            break;
          case "-":
            b = !1;
        }
        b && (v.push(S), d.push(d.length));
      }
      d.sort(function(Rt, yt) {
        return g[Rt] - g[yt];
      });
      for (var E = u.length, U = gr(E), O = gr(E), N = gr(E), W = gr(E), K = [], _ = 0; _ < d.length; _++) {
        var $ = d[_], et = _ * 2, ht = $ * 2;
        U[et] = u[ht], U[et + 1] = u[ht + 1], O[et] = f[ht], O[et + 1] = f[ht + 1], N[et] = h[ht], N[et + 1] = h[ht + 1], W[et] = c[ht], W[et + 1] = c[ht + 1], K[_] = v[$];
      }
      return {
        current: U,
        next: O,
        stackedOnCurrent: N,
        stackedOnNext: W,
        status: K
      };
    }
    var zr = Math.min, Gr = Math.max;
    function kn(r, t) {
      return isNaN(r) || isNaN(t);
    }
    function Eh(r, t, e, n, i, a, o, s, l) {
      for (var u, f, h, c, v, d, g = e, p = 0; p < n; p++) {
        var y = t[g * 2], m = t[g * 2 + 1];
        if (g >= i || g < 0)
          break;
        if (kn(y, m)) {
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
              for (; kn(w, x) && T < n; )
                T++, b += a, w = t[b * 2], x = t[b * 2 + 1];
            var D = 0.5, A = 0, C = 0, L = void 0, P = void 0;
            if (T >= n || kn(w, x))
              v = y, d = m;
            else {
              A = w - u, C = x - f;
              var I = y - u, R = w - y, E = m - f, U = x - m, O = void 0, N = void 0;
              if (s === "x") {
                O = Math.abs(I), N = Math.abs(R);
                var W = A > 0 ? 1 : -1;
                v = y - W * O * o, d = m, L = y + W * N * o, P = m;
              } else if (s === "y") {
                O = Math.abs(E), N = Math.abs(U);
                var K = C > 0 ? 1 : -1;
                v = y, d = m - K * O * o, L = y, P = m + K * N * o;
              } else
                O = Math.sqrt(I * I + E * E), N = Math.sqrt(R * R + U * U), D = N / (N + O), v = y - A * o * (1 - D), d = m - C * o * (1 - D), L = y + A * o * D, P = m + C * o * D, L = zr(L, Gr(w, y)), P = zr(P, Gr(x, m)), L = Gr(L, zr(w, y)), P = Gr(P, zr(x, m)), A = L - y, C = P - m, v = y - A * O / N, d = m - C * O / N, v = zr(v, Gr(u, y)), d = zr(d, Gr(f, m)), v = Gr(v, zr(u, y)), d = Gr(d, zr(f, m)), A = y - v, C = m - d, L = y + A * N / O, P = m + C * N / O;
            }
            r.bezierCurveTo(h, c, v, d, y, m), h = L, c = P;
          } else
            r.lineTo(y, m);
        }
        u = y, f = m, g += a;
      }
      return p;
    }
    var Qm = (
      /** @class */
      function() {
        function r() {
          this.smooth = 0, this.smoothConstraint = !0;
        }
        return r;
      }()
    ), uA = (
      /** @class */
      function(r) {
        B(t, r);
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
          return new Qm();
        }, t.prototype.buildPath = function(e, n) {
          var i = n.points, a = 0, o = i.length / 2;
          if (n.connectNulls) {
            for (; o > 0 && kn(i[o * 2 - 2], i[o * 2 - 1]); o--)
              ;
            for (; a < o && kn(i[a * 2], i[a * 2 + 1]); a++)
              ;
          }
          for (; a < o; )
            a += Eh(e, i, a, o, o, 1, n.smooth, n.smoothMonotone, n.connectNulls) + 1;
        }, t.prototype.getPointOn = function(e, n) {
          this.path || (this.createPathProxy(), this.buildPath(this.path, this.shape));
          for (var i = this.path, a = i.data, o = Rr.CMD, s, l, u = n === "x", f = [], h = 0; h < a.length; ) {
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
                var b = u ? ro(s, v, g, y, e, f) : ro(l, d, p, m, e, f);
                if (b > 0)
                  for (var w = 0; w < b; w++) {
                    var x = f[w];
                    if (x <= 1 && x >= 0) {
                      var S = u ? At(l, d, p, m, x) : At(s, v, g, y, x);
                      return u ? [e, S] : [S, e];
                    }
                  }
                s = y, l = m;
                break;
            }
          }
        }, t;
      }(ft)
    ), fA = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          return r !== null && r.apply(this, arguments) || this;
        }
        return t;
      }(Qm)
    ), hA = (
      /** @class */
      function(r) {
        B(t, r);
        function t(e) {
          var n = r.call(this, e) || this;
          return n.type = "ec-polygon", n;
        }
        return t.prototype.getDefaultShape = function() {
          return new fA();
        }, t.prototype.buildPath = function(e, n) {
          var i = n.points, a = n.stackedOnPoints, o = 0, s = i.length / 2, l = n.smoothMonotone;
          if (n.connectNulls) {
            for (; s > 0 && kn(i[s * 2 - 2], i[s * 2 - 1]); s--)
              ;
            for (; o < s && kn(i[o * 2], i[o * 2 + 1]); o++)
              ;
          }
          for (; o < s; ) {
            var u = Eh(e, i, o, s, s, 1, n.smooth, l, n.connectNulls);
            Eh(e, a, o + u - 1, u, s, -1, n.stackedOnSmooth, l, n.connectNulls), o += u + 1, e.closePath();
          }
        }, t;
      }(ft)
    );
    function jm(r, t) {
      if (r.length === t.length) {
        for (var e = 0; e < r.length; e++)
          if (r[e] !== t[e])
            return;
        return !0;
      }
    }
    function Jm(r) {
      for (var t = 1 / 0, e = 1 / 0, n = -1 / 0, i = -1 / 0, a = 0; a < r.length; ) {
        var o = r[a++], s = r[a++];
        isNaN(o) || (t = Math.min(o, t), n = Math.max(o, n)), isNaN(s) || (e = Math.min(s, e), i = Math.max(s, i));
      }
      return [[t, e], [n, i]];
    }
    function t0(r, t) {
      var e = Jm(r), n = e[0], i = e[1], a = Jm(t), o = a[0], s = a[1];
      return Math.max(Math.abs(n[0] - o[0]), Math.abs(n[1] - o[1]), Math.abs(i[0] - s[0]), Math.abs(i[1] - s[1]));
    }
    function e0(r) {
      return ct(r) ? r : r ? 0.5 : 0;
    }
    function vA(r, t, e) {
      if (!e.valueDim)
        return [];
      for (var n = t.count(), i = gr(n * 2), a = 0; a < n; a++) {
        var o = Km(e, r, t, a);
        i[a * 2] = o[0], i[a * 2 + 1] = o[1];
      }
      return i;
    }
    function Hr(r, t, e, n) {
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
    function cA(r, t) {
      var e = [], n = r.length, i, a;
      function o(f, h, c) {
        var v = f.coord, d = (c - v) / (h.coord - v), g = Bl(d, [f.color, h.color]);
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
    function dA(r, t, e) {
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
        var l = t.getAxis(i), u = H(a.stops, function(_) {
          return {
            coord: l.toGlobalCoord(l.dataToCoord(_.value)),
            color: _.color
          };
        }), f = u.length, h = a.outerColors.slice();
        f && u[0].coord > u[f - 1].coord && (u.reverse(), h.reverse());
        var c = cA(u, i === "x" ? e.getWidth() : e.getHeight()), v = c.length;
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
        var m = new Gu(0, 0, 0, 0, c, !0);
        return m[i] = g, m[i + "2"] = p, m;
      }
    }
    function pA(r, t, e) {
      var n = r.get("showAllSymbol"), i = n === "auto";
      if (!(n && !i)) {
        var a = e.getAxesByScale("ordinal")[0];
        if (a && !(i && gA(a, t))) {
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
    function gA(r, t) {
      var e = r.getExtent(), n = Math.abs(e[1] - e[0]) / r.scale.count();
      isNaN(n) && (n = 0);
      for (var i = t.count(), a = Math.max(1, Math.round(i / 5)), o = 0; o < i; o += a)
        if (Ih.getSymbolSize(
          t,
          o
          // Only for cartesian, where `isHorizontal` exists.
        )[r.isHorizontal() ? 1 : 0] * 1.5 > n)
          return !1;
      return !0;
    }
    function yA(r, t) {
      return isNaN(r) || isNaN(t);
    }
    function mA(r) {
      for (var t = r.length / 2; t > 0 && yA(r[t * 2 - 2], r[t * 2 - 1]); t--)
        ;
      return t - 1;
    }
    function r0(r, t) {
      return [r[t * 2], r[t * 2 + 1]];
    }
    function _A(r, t, e) {
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
    function n0(r) {
      if (r.get(["endLabel", "show"]))
        return !0;
      for (var t = 0; t < Te.length; t++)
        if (r.get([Te[t], "endLabel", "show"]))
          return !0;
      return !1;
    }
    function kh(r, t, e, n) {
      if (Mh(t, "cartesian2d")) {
        var i = n.getModel("endLabel"), a = i.get("valueAnimation"), o = n.getData(), s = {
          lastFrameIndex: 0
        }, l = n0(n) ? function(v, d) {
          r._endLabelOnDuring(v, d, o, s, a, i, t);
        } : null, u = t.getBaseAxis().isHorizontal(), f = Rm(t, e, n, function() {
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
        return n.get(["endLabel", "show"]) && console.warn("endLabel is not supported for lines in polar systems."), Em(t, e, n);
    }
    function SA(r, t) {
      var e = t.getBaseAxis(), n = e.isHorizontal(), i = e.inverse, a = n ? i ? "right" : "left" : "center", o = n ? "middle" : i ? "top" : "bottom";
      return {
        normal: {
          align: r.get("align") || a,
          verticalAlign: r.get("verticalAlign") || o
        }
      };
    }
    var wA = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          return r !== null && r.apply(this, arguments) || this;
        }
        return t.prototype.init = function() {
          var e = new It(), n = new aA();
          this.group.add(n.group), this._symbolDraw = n, this._lineGroup = e;
        }, t.prototype.render = function(e, n, i) {
          var a = this, o = e.coordinateSystem, s = this.group, l = e.getData(), u = e.getModel("lineStyle"), f = e.getModel("areaStyle"), h = l.getLayout("points") || [], c = o.type === "polar", v = this._coordSys, d = this._symbolDraw, g = this._polyline, p = this._polygon, y = this._lineGroup, m = !n.ssr && e.isAnimationEnabled(), _ = !f.isEmpty(), S = f.get("origin"), b = $m(o, l, S), w = _ && vA(o, l, b), x = e.get("showSymbol"), T = e.get("connectNulls"), D = x && !c && pA(e, l, o), A = this._data;
          A && A.eachItemGraphicEl(function(yt, se) {
            yt.__temp && (s.remove(yt), A.setItemGraphicEl(se, null));
          }), x || d.remove(), s.add(y);
          var C = c ? !1 : e.get("step"), L;
          o && o.getArea && e.get("clip", !0) && (L = o.getArea(), L.width != null ? (L.x -= 0.1, L.y -= 0.1, L.width += 0.2, L.height += 0.2) : L.r0 && (L.r0 -= 0.5, L.r += 0.5)), this._clipShapeForSymbol = L;
          var P = dA(l, o, i) || l.getVisual("style")[l.getVisual("drawType")];
          if (!(g && v.type === o.type && C === this._step))
            x && d.updateData(l, {
              isIgnore: D,
              clipShape: L,
              disableAnimation: !0,
              getSymbolPoint: function(yt) {
                return [h[yt * 2], h[yt * 2 + 1]];
              }
            }), m && this._initSymbolLabelAnimation(l, o, L), C && (h = Hr(h, o, C, T), w && (w = Hr(w, o, C, T))), g = this._newPolyline(h), _ ? p = this._newPolygon(h, w) : p && (y.remove(p), p = this._polygon = null), c || this._initOrUpdateEndLabel(e, o, Sn(P)), y.setClipPath(kh(this, o, !0, e));
          else {
            _ && !p ? p = this._newPolygon(h, w) : p && !_ && (y.remove(p), p = this._polygon = null), c || this._initOrUpdateEndLabel(e, o, Sn(P));
            var I = y.getClipPath();
            if (I) {
              var R = kh(this, o, !1, e);
              Gt(I, {
                shape: R.shape
              }, e);
            } else
              y.setClipPath(kh(this, o, !0, e));
            x && d.updateData(l, {
              isIgnore: D,
              clipShape: L,
              disableAnimation: !0,
              getSymbolPoint: function(yt) {
                return [h[yt * 2], h[yt * 2 + 1]];
              }
            }), (!jm(this._stackedOnPoints, w) || !jm(this._points, h)) && (m ? this._doUpdateAnimation(l, w, o, i, C, S, T) : (C && (h = Hr(h, o, C, T), w && (w = Hr(w, o, C, T))), g.setShape({
              points: h
            }), p && p.setShape({
              points: h,
              stackedOnPoints: w
            })));
          }
          var E = e.getModel("emphasis"), U = E.get("focus"), O = E.get("blurScope"), N = E.get("disabled");
          if (g.useStyle(st(
            // Use color in lineStyle first
            u.getLineStyle(),
            {
              fill: "none",
              stroke: P,
              lineJoin: "bevel"
            }
          )), Fo(g, e, "lineStyle"), g.style.lineWidth > 0 && e.get(["emphasis", "lineStyle", "width"]) === "bolder") {
            var W = g.getState("emphasis").style;
            W.lineWidth = +g.style.lineWidth + 1;
          }
          ot(g).seriesIndex = e.seriesIndex, Ki(g, U, O, N);
          var K = e0(e.get("smooth")), $ = e.get("smoothMonotone");
          if (g.setShape({
            smooth: K,
            smoothMonotone: $,
            connectNulls: T
          }), p) {
            var et = l.getCalculationInfo("stackedOnSeries"), ht = 0;
            p.useStyle(st(f.getAreaStyle(), {
              fill: P,
              opacity: 0.7,
              lineJoin: "bevel",
              decal: l.getVisual("style").decal
            })), et && (ht = e0(et.get("smooth"))), p.setShape({
              smooth: K,
              stackedOnSmooth: ht,
              smoothMonotone: $,
              connectNulls: T
            }), Fo(p, e, "areaStyle"), ot(p).seriesIndex = e.seriesIndex, Ki(p, U, O, N);
          }
          var Rt = function(yt) {
            a._changePolyState(yt);
          };
          l.eachItemGraphicEl(function(yt) {
            yt && (yt.onHoverStateChange = Rt);
          }), this._polyline.onHoverStateChange = Rt, this._data = l, this._coordSys = o, this._stackedOnPoints = w, this._points = h, this._step = C, this._valueOrigin = S, e.get("triggerLineEvent") && (this.packEventData(e, g), p && this.packEventData(e, p));
        }, t.prototype.packEventData = function(e, n) {
          ot(n).eventData = {
            componentType: "series",
            componentSubType: "line",
            componentIndex: e.componentIndex,
            seriesIndex: e.seriesIndex,
            seriesName: e.name,
            seriesType: "line"
          };
        }, t.prototype.highlight = function(e, n, i, a) {
          var o = e.getData(), s = on(o, a);
          if (this._changePolyState("emphasis"), !(s instanceof Array) && s != null && s >= 0) {
            var l = o.getLayout("points"), u = o.getItemGraphicEl(s);
            if (!u) {
              var f = l[s * 2], h = l[s * 2 + 1];
              if (isNaN(f) || isNaN(h) || this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(f, h))
                return;
              var c = e.get("zlevel") || 0, v = e.get("z") || 0;
              u = new Ih(o, s), u.x = f, u.y = h, u.setZ(c, v);
              var d = u.getSymbolPath().getTextContent();
              d && (d.zlevel = c, d.z = v, d.z2 = this._polyline.z2 + 1), u.__temp = !0, o.setItemGraphicEl(s, u), u.stopSymbolAnimation(!0), this.group.add(u);
            }
            u.highlight();
          } else
            Kt.prototype.highlight.call(this, e, n, i, a);
        }, t.prototype.downplay = function(e, n, i, a) {
          var o = e.getData(), s = on(o, a);
          if (this._changePolyState("normal"), s != null && s >= 0) {
            var l = o.getItemGraphicEl(s);
            l && (l.__temp ? (o.setItemGraphicEl(s, null), this.group.remove(l)) : l.downplay());
          } else
            Kt.prototype.downplay.call(this, e, n, i, a);
        }, t.prototype._changePolyState = function(e) {
          var n = this._polygon;
          hd(this._polyline, e), n && hd(n, e);
        }, t.prototype._newPolyline = function(e) {
          var n = this._polyline;
          return n && this._lineGroup.remove(n), n = new uA({
            shape: {
              points: e
            },
            segmentIgnoreThreshold: 2,
            z2: 10
          }), this._lineGroup.add(n), this._polyline = n, n;
        }, t.prototype._newPolygon = function(e, n) {
          var i = this._polygon;
          return i && this._lineGroup.remove(i), i = new hA({
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
          Y(f) && (f = f(null));
          var h = u.get("animationDelay") || 0, c = Y(h) ? h(null) : h;
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
              var T = Y(h) ? h(d) : f * x + c, D = g.getSymbolPath(), A = D.getTextContent();
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
          if (n0(e)) {
            var o = e.getData(), s = this._polyline, l = o.getLayout("points");
            if (!l) {
              s.removeTextContent(), this._endLabel = null;
              return;
            }
            var u = this._endLabel;
            u || (u = this._endLabel = new Lt({
              z2: 200
              // should be higher than item symbol
            }), u.ignoreClip = !0, s.setTextContent(this._endLabel), s.disableLabelAnimation = !0);
            var f = mA(l);
            f >= 0 && (na(s, ia(e, "endLabel"), {
              inheritColor: i,
              labelFetcher: e,
              labelDataIndex: f,
              defaultText: function(h, c, v) {
                return v != null ? Om(o, v) : Ah(o, h);
              },
              enableTextSetter: !0
            }, SA(a, n)), s.textConfig.position = null);
          } else
            this._endLabel && (this._polyline.removeTextContent(), this._endLabel = null);
        }, t.prototype._endLabelOnDuring = function(e, n, i, a, o, s, l) {
          var u = this._endLabel, f = this._polyline;
          if (u) {
            e < 1 && a.originalX == null && (a.originalX = u.x, a.originalY = u.y);
            var h = i.getLayout("points"), c = i.hostModel, v = c.get("connectNulls"), d = s.get("precision"), g = s.get("distance") || 0, p = l.getBaseAxis(), y = p.isHorizontal(), m = p.inverse, _ = n.shape, S = m ? y ? _.x : _.y + _.height : y ? _.x + _.width : _.y, b = (y ? g : 0) * (m ? -1 : 1), w = (y ? 0 : -g) * (m ? -1 : 1), x = y ? "x" : "y", T = _A(h, S, x), D = T.range, A = D[1] - D[0], C = void 0;
            if (A >= 1) {
              if (A > 1 && !v) {
                var L = r0(h, D[0]);
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
                o && (C = Ac(i, d, P, I, T.t));
              }
              a.lastFrameIndex = D[0];
            } else {
              var R = e === 1 || a.lastFrameIndex > 0 ? D[0] : 0, L = r0(h, R);
              o && (C = c.getRawValue(R)), u.attr({
                x: L[0] + b,
                y: L[1] + w
              });
            }
            o && ii(u).setLabelText(C);
          }
        }, t.prototype._doUpdateAnimation = function(e, n, i, a, o, s, l) {
          var u = this._polyline, f = this._polygon, h = e.hostModel, c = lA(this._data, e, this._stackedOnPoints, n, this._coordSys, i, this._valueOrigin), v = c.current, d = c.stackedOnCurrent, g = c.next, p = c.stackedOnNext;
          if (o && (v = Hr(c.current, i, o, l), d = Hr(c.stackedOnCurrent, i, o, l), g = Hr(c.next, i, o, l), p = Hr(c.stackedOnNext, i, o, l)), t0(v, g) > 3e3 || f && t0(d, p) > 3e3) {
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
          c.current !== v && (y.shape.__points = c.next), u.stopAnimation(), Pt(u, y, h), f && (f.setShape({
            // Reuse the points with polyline.
            points: v,
            stackedOnPoints: d
          }), f.stopAnimation(), Pt(f, {
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
      }(Kt)
    );
    function bA(r, t) {
      return {
        seriesType: r,
        plan: Rf(),
        reset: function(e) {
          var n = e.getData(), i = e.coordinateSystem, a = e.pipelineContext, o = t || a.large;
          if (i) {
            var s = H(i.dimensions, function(v) {
              return n.mapDimension(v);
            }).slice(0, 2), l = s.length, u = n.getCalculationInfo("stackResultDimension");
            Pn(n, s[0]) && (s[0] = u), Pn(n, s[1]) && (s[1] = u);
            var f = n.getStore(), h = n.getDimensionIndex(s[0]), c = n.getDimensionIndex(s[1]);
            return l && {
              progress: function(v, d) {
                for (var g = v.end - v.start, p = o && gr(g * l), y = [], m = [], _ = v.start, S = 0; _ < v.end; _++) {
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
    function xA(r) {
      r.registerChartView(wA), r.registerSeriesModel(nA), r.registerLayout(bA("line", !0)), r.registerVisual({
        seriesType: "line",
        reset: function(t) {
          var e = t.getData(), n = t.getModel("lineStyle").getLineStyle();
          n && !n.stroke && (n.stroke = e.getVisual("style").fill), e.setVisual("legendLineStyle", n);
        }
      }), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, Im("line"));
    }
    oe(xA);
    var il = Math.PI * 2, i0 = Math.PI / 180;
    function a0(r, t) {
      return wn(r.getBoxLayoutParams(), {
        width: t.getWidth(),
        height: t.getHeight()
      });
    }
    function o0(r, t) {
      var e = a0(r, t), n = r.get("center"), i = r.get("radius");
      F(i) || (i = [0, i]);
      var a = gt(e.width, t.getWidth()), o = gt(e.height, t.getHeight()), s = Math.min(a, o), l = gt(i[0], s / 2), u = gt(i[1], s / 2), f, h, c = r.coordinateSystem;
      if (c) {
        var v = c.dataToPoint(n);
        f = v[0] || 0, h = v[1] || 0;
      } else
        F(n) || (n = [n, n]), f = gt(n[0], a) + e.x, h = gt(n[1], o) + e.y;
      return {
        cx: f,
        cy: h,
        r0: l,
        r: u
      };
    }
    function TA(r, t, e) {
      t.eachSeriesByType(r, function(n) {
        var i = n.getData(), a = i.mapDimension("value"), o = a0(n, e), s = o0(n, e), l = s.cx, u = s.cy, f = s.r, h = s.r0, c = -n.get("startAngle") * i0, v = n.get("minAngle") * i0, d = 0;
        i.each(a, function(A) {
          !isNaN(A) && d++;
        });
        var g = i.getSum(a), p = Math.PI / (g || d) * 2, y = n.get("clockwise"), m = n.get("roseType"), _ = n.get("stillShowZeroSum"), S = i.getDataExtent(a);
        S[0] = 0;
        var b = il, w = 0, x = c, T = y ? 1 : -1;
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
          m !== "area" ? L = g === 0 && _ ? p : A * p : L = il / d, L < v ? (L = v, b -= v) : w += A;
          var P = x + T * L;
          i.setItemLayout(C, {
            angle: L,
            startAngle: x,
            endAngle: P,
            clockwise: y,
            cx: l,
            cy: u,
            r0: h,
            r: m ? mo(A, S, [h, f]) : f
          }), x = P;
        }), b < il && d)
          if (b <= 1e-3) {
            var D = il / d;
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
    function CA(r) {
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
    var DA = Math.PI / 180;
    function s0(r, t, e, n, i, a, o, s, l, u) {
      if (r.length < 2)
        return;
      function f(g) {
        for (var p = g.rB, y = p * p, m = 0; m < g.list.length; m++) {
          var _ = g.list[m], S = Math.abs(_.label.y - e), b = n + _.len, w = b * b, x = Math.sqrt((1 - Math.abs(S * S / y)) * w), T = t + (x + _.len2) * i, D = T - _.label.x, A = _.targetTextWidth - D * i;
          l0(_, A, !0), _.label.x = T;
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
      Cm(r, l, l + o) && h(r);
    }
    function MA(r, t, e, n, i, a, o, s) {
      for (var l = [], u = [], f = Number.MAX_VALUE, h = -Number.MAX_VALUE, c = 0; c < r.length; c++) {
        var v = r[c].label;
        Oh(r[c]) || (v.x < t ? (f = Math.min(f, v.x), l.push(r[c])) : (h = Math.max(h, v.x), u.push(r[c])));
      }
      for (var c = 0; c < r.length; c++) {
        var d = r[c];
        if (!Oh(d) && d.linePoints) {
          if (d.labelStyleWidth != null)
            continue;
          var v = d.label, g = d.linePoints, p = void 0;
          d.labelAlignTo === "edge" ? v.x < t ? p = g[2][0] - d.labelDistance - o - d.edgeDistance : p = o + i - d.edgeDistance - g[2][0] - d.labelDistance : d.labelAlignTo === "labelLine" ? v.x < t ? p = f - o - d.bleedMargin : p = o + i - h - d.bleedMargin : v.x < t ? p = v.x - o - d.bleedMargin : p = o + i - v.x - d.bleedMargin, d.targetTextWidth = p, l0(d, p);
        }
      }
      s0(u, t, e, n, 1, i, a, o, s, h), s0(l, t, e, n, -1, i, a, o, s, f);
      for (var c = 0; c < r.length; c++) {
        var d = r[c];
        if (!Oh(d) && d.linePoints) {
          var v = d.label, g = d.linePoints, y = d.labelAlignTo === "edge", m = v.style.padding, _ = m ? m[1] + m[3] : 0, S = v.style.backgroundColor ? 0 : _, b = d.rect.width + S, w = g[1][0] - g[2][0];
          y ? v.x < t ? g[2][0] = o + d.edgeDistance + b + d.labelDistance : g[2][0] = o + i - d.edgeDistance - b - d.labelDistance : (v.x < t ? g[2][0] = v.x + d.labelDistance : g[2][0] = v.x - d.labelDistance, g[1][0] = g[2][0] + w), g[1][1] = g[2][1] = v.y;
        }
      }
    }
    function l0(r, t, e) {
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
    function Oh(r) {
      return r.position === "center";
    }
    function AA(r) {
      var t = r.getData(), e = [], n, i, a = !1, o = (r.get("minShowLabelAngle") || 0) * DA, s = t.getLayout("viewRect"), l = t.getLayout("r"), u = s.width, f = s.x, h = s.y, c = s.height;
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
        var x = t.getItemGraphicEl(w), T = x.shape, D = x.getTextContent(), A = x.getTextGuideLine(), C = t.getItemModel(w), L = C.getModel("label"), P = L.get("position") || C.get(["emphasis", "label", "position"]), I = L.get("distanceToLabelLine"), R = L.get("alignTo"), E = gt(L.get("edgeDistance"), u), U = L.get("bleedMargin"), O = C.getModel("labelLine"), N = O.get("length");
        N = gt(N, u);
        var W = O.get("length2");
        if (W = gt(W, u), Math.abs(T.endAngle - T.startAngle) < o) {
          M(D.states, v), D.ignore = !0, A && (M(A.states, v), A.ignore = !0);
          return;
        }
        if (d(D)) {
          var K = (T.startAngle + T.endAngle) / 2, $ = Math.cos(K), et = Math.sin(K), ht, Rt, yt, se;
          n = T.cx, i = T.cy;
          var de = P === "inside" || P === "inner";
          if (P === "center")
            ht = T.cx, Rt = T.cy, se = "center";
          else {
            var Ot = (de ? (T.r + T.r0) / 2 * $ : T.r * $) + n, Dt = (de ? (T.r + T.r0) / 2 * et : T.r * et) + i;
            if (ht = Ot + $ * 3, Rt = Dt + et * 3, !de) {
              var Z = Ot + $ * (N + l - T.r), tt = Dt + et * (N + l - T.r), ir = Z + ($ < 0 ? -1 : 1) * W, Et = tt;
              R === "edge" ? ht = $ < 0 ? f + E : f + u - E : ht = ir + ($ < 0 ? -I : I), Rt = Et, yt = [[Ot, Dt], [Z, tt], [ir, Et]];
            }
            se = de ? "center" : R === "edge" ? $ > 0 ? "right" : "left" : $ > 0 ? "left" : "right";
          }
          var Yr = Math.PI, mr = 0, za = L.get("rotate");
          if (ct(za))
            mr = za * (Yr / 180);
          else if (P === "center")
            mr = 0;
          else if (za === "radial" || za === !0) {
            var _P = $ < 0 ? -K + Yr : -K;
            mr = _P;
          } else if (za === "tangential" && P !== "outside" && P !== "outer") {
            var mi = Math.atan2($, et);
            mi < 0 && (mi = Yr * 2 + mi);
            var SP = et > 0;
            SP && (mi = Yr + mi), mr = mi - Yr;
          }
          if (a = !!mr, D.x = ht, D.y = Rt, D.rotation = mr, D.setStyle({
            verticalAlign: "middle"
          }), de) {
            D.setStyle({
              align: se
            });
            var nv = D.states.select;
            nv && (nv.x += D.x, nv.y += D.y);
          } else {
            var Ga = D.getBoundingRect().clone();
            Ga.applyTransform(D.getComputedTransform());
            var e_ = (D.style.margin || 0) + 2.1;
            Ga.y -= e_ / 2, Ga.height += e_, e.push({
              label: D,
              labelLine: A,
              position: P,
              len: N,
              len2: W,
              minTurnAngle: O.get("minTurnAngle"),
              maxSurfaceAngle: O.get("maxSurfaceAngle"),
              surfaceNormal: new q($, et),
              linePoints: yt,
              textAlign: se,
              labelDistance: I,
              labelAlignTo: R,
              edgeDistance: E,
              bleedMargin: U,
              rect: Ga,
              unconstrainedWidth: Ga.width,
              labelStyleWidth: D.style.width
            });
          }
          x.setTextConfig({
            inside: de
          });
        }
      }), !a && r.get("avoidLabelOverlap") && MA(e, n, i, l, u, c, f, h);
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
          _ || !b ? (M(m.states, v), m.ignore = !0) : (_m(b, p.minTurnAngle), TM(b, p.surfaceNormal, p.maxSurfaceAngle), m.setShape({
            points: b
          }), y.__hostTarget.textGuideLineConfig = {
            anchor: new q(b[0][0], b[0][1])
          });
        }
      }
    }
    var LA = (
      /** @class */
      function(r) {
        B(t, r);
        function t(e, n, i) {
          var a = r.call(this) || this;
          a.z2 = 2;
          var o = new Lt();
          return a.setTextContent(o), a.updateData(e, n, i, !0), a;
        }
        return t.prototype.updateData = function(e, n, i, a) {
          var o = this, s = e.hostModel, l = e.getItemModel(n), u = l.getModel("emphasis"), f = e.getItemLayout(n), h = k(Oa(l.getModel("itemStyle"), f, !0), f);
          if (isNaN(h.startAngle)) {
            o.setShape(h);
            return;
          }
          if (a) {
            o.setShape(h);
            var c = s.getShallow("animationType");
            s.ecModel.ssr ? (Gt(o, {
              scaleX: 0,
              scaleY: 0
            }, s, {
              dataIndex: n,
              isFrom: !0
            }), o.originX = h.cx, o.originY = h.cy) : c === "scale" ? (o.shape.r = f.r0, Gt(o, {
              shape: {
                r: f.r
              }
            }, s, n)) : i != null ? (o.setShape({
              startAngle: i,
              endAngle: i
            }), Gt(o, {
              shape: {
                startAngle: f.startAngle,
                endAngle: f.endAngle
              }
            }, s, n)) : (o.shape.endAngle = f.startAngle, Pt(o, {
              shape: {
                endAngle: f.endAngle
              }
            }, s, n));
          } else
            Vu(o), Pt(o, {
              shape: h
            }, s, n);
          o.useStyle(e.getItemVisual(n, "style")), Fo(o, l);
          var v = (f.startAngle + f.endAngle) / 2, d = s.get("selectedOffset"), g = Math.cos(v) * d, p = Math.sin(v) * d, y = l.getShallow("cursor");
          y && o.attr("cursor", y), this._updateLabel(s, e, n), o.ensureState("emphasis").shape = k({
            r: f.r + (u.get("scale") && u.get("scaleSize") || 0)
          }, Oa(u.getModel("itemStyle"), f)), k(o.ensureState("select"), {
            x: g,
            y: p,
            shape: Oa(l.getModel(["select", "itemStyle"]), f)
          }), k(o.ensureState("blur"), {
            shape: Oa(l.getModel(["blur", "itemStyle"]), f)
          });
          var m = o.getTextGuideLine(), _ = o.getTextContent();
          m && k(m.ensureState("select"), {
            x: g,
            y: p
          }), k(_.ensureState("select"), {
            x: g,
            y: p
          }), Ki(this, u.get("focus"), u.get("blurScope"), u.get("disabled"));
        }, t.prototype._updateLabel = function(e, n, i) {
          var a = this, o = n.getItemModel(i), s = o.getModel("labelLine"), l = n.getItemVisual(i, "style"), u = l && l.fill, f = l && l.opacity;
          na(a, ia(o), {
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
            v || (v = new ri(), this.setTextGuideLine(v)), wm(this, bm(o), {
              stroke: u,
              opacity: wr(s.get(["lineStyle", "opacity"]), f, 1)
            });
          }
        }, t;
      }(hr)
    ), PA = (
      /** @class */
      function(r) {
        B(t, r);
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
            var c = new hr({
              shape: o0(e, i)
            });
            c.useStyle(e.getModel("emptyCircleStyle").getItemStyle()), this._emptyCircleSector = c, l.add(c);
          }
          o.diff(s).add(function(v) {
            var d = new LA(o, v, u);
            o.setItemGraphicEl(v, d), l.add(d);
          }).update(function(v, d) {
            var g = s.getItemGraphicEl(d);
            g.updateData(o, v, u), g.off("click"), l.add(g), o.setItemGraphicEl(v, g);
          }).remove(function(v) {
            var d = s.getItemGraphicEl(v);
            Ko(d, e, v);
          }).execute(), AA(e), e.get("animationTypeUpdate") !== "expansion" && (this._data = o);
        }, t.prototype.dispose = function() {
        }, t.prototype.containPoint = function(e, n) {
          var i = n.getData(), a = i.getItemLayout(0);
          if (a) {
            var o = e[0] - a.cx, s = e[1] - a.cy, l = Math.sqrt(o * o + s * s);
            return l <= a.r && l >= a.r0;
          }
        }, t.type = "pie", t;
      }(Kt)
    );
    function IA(r, t, e) {
      t = F(t) && {
        coordDimensions: t
      } || k({
        encodeDefine: r.getEncode()
      }, t);
      var n = r.getSource(), i = fh(n, t).dimensions, a = new uh(i, r);
      return a.initData(n, e), a;
    }
    var RA = (
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
    ), EA = St(), kA = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          return r !== null && r.apply(this, arguments) || this;
        }
        return t.prototype.init = function(e) {
          r.prototype.init.apply(this, arguments), this.legendVisualProvider = new RA(dt(this.getData, this), dt(this.getRawData, this)), this._defaultLabelLine(e);
        }, t.prototype.mergeOption = function() {
          r.prototype.mergeOption.apply(this, arguments);
        }, t.prototype.getInitialData = function() {
          return IA(this, {
            coordDimensions: ["value"],
            encodeDefaulter: _t(Jb, this)
          });
        }, t.prototype.getDataParams = function(e) {
          var n = this.getData(), i = EA(n), a = i.seats;
          if (!a) {
            var o = [];
            n.each(n.mapDimension("value"), function(l) {
              o.push(l);
            }), a = i.seats = pc(o, n.hostModel.get("percentPrecision"));
          }
          var s = r.prototype.getDataParams.call(this, e);
          return s.percent = a[e] || 0, s.$vars.push("percent"), s;
        }, t.prototype._defaultLabelLine = function(e) {
          uu(e, "labelLine", ["show"]);
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
      }(ne)
    );
    function OA(r) {
      return {
        seriesType: r,
        reset: function(t, e) {
          var n = t.getData();
          n.filterSelf(function(i) {
            var a = n.mapDimension("value"), o = n.get(a, i);
            return !(ct(o) && !isNaN(o) && o < 0);
          });
        }
      };
    }
    function BA(r) {
      r.registerChartView(PA), r.registerSeriesModel(kA), NT("pie", r.registerAction), r.registerLayout(_t(TA, "pie")), r.registerProcessor(CA("pie")), r.registerProcessor(OA("pie"));
    }
    oe(BA);
    var NA = (
      /** @class */
      function(r) {
        B(t, r);
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
      }(it)
    ), Bh = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          return r !== null && r.apply(this, arguments) || this;
        }
        return t.prototype.getCoordSysModel = function() {
          return this.getReferringComponents("grid", Be).models[0];
        }, t.type = "cartesian2dAxis", t;
      }(it)
    );
    ge(Bh, jy);
    var u0 = {
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
    }, FA = at({
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
    }, u0), Nh = at({
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
    }, u0), zA = at({
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
    }, Nh), GA = st({
      logBase: 10
    }, Nh), HA = {
      category: FA,
      value: Nh,
      time: zA,
      log: GA
    }, VA = {
      value: 1,
      category: 1,
      time: 1,
      log: 1
    };
    function f0(r, t, e, n) {
      M(VA, function(i, a) {
        var o = at(at({}, HA[a], !0), n, !0), s = (
          /** @class */
          function(l) {
            B(u, l);
            function u() {
              var f = l !== null && l.apply(this, arguments) || this;
              return f.type = t + "Axis." + a, f;
            }
            return u.prototype.mergeDefaultAndTheme = function(f, h) {
              var c = va(this), v = c ? cs(f) : {}, d = h.getTheme();
              at(f, d.get(a + "Axis")), at(f, this.getDefaultOption()), f.type = h0(f), c && si(f, v, c);
            }, u.prototype.optionUpdated = function() {
              var f = this.option;
              f.type === "category" && (this.__ordinalMeta = hh.createByAxisModel(this));
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
      }), r.registerSubTypeDefaulter(t + "Axis", h0);
    }
    function h0(r) {
      return r.type || (r.data ? "category" : "value");
    }
    var WA = (
      /** @class */
      function() {
        function r(t) {
          this.type = "cartesian", this._dimList = [], this._axes = {}, this.name = t || "";
        }
        return r.prototype.getAxis = function(t) {
          return this._axes[t];
        }, r.prototype.getAxes = function() {
          return H(this._dimList, function(t) {
            return this._axes[t];
          }, this);
        }, r.prototype.getAxesByScale = function(t) {
          return t = t.toLowerCase(), bt(this.getAxes(), function(e) {
            return e.scale.type === t;
          });
        }, r.prototype.addAxis = function(t) {
          var e = t.dim;
          this._axes[e] = t, this._dimList.push(e);
        }, r;
      }()
    ), Fh = ["x", "y"];
    function v0(r) {
      return r.type === "interval" || r.type === "time";
    }
    var UA = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          var e = r !== null && r.apply(this, arguments) || this;
          return e.type = "cartesian2d", e.dimensions = Fh, e;
        }
        return t.prototype.calcAffineTransform = function() {
          this._transform = this._invTransform = null;
          var e = this.getAxis("x").scale, n = this.getAxis("y").scale;
          if (!(!v0(e) || !v0(n))) {
            var i = e.getExtent(), a = n.getExtent(), o = this.dataToPoint([i[0], a[0]]), s = this.dataToPoint([i[1], a[1]]), l = i[1] - i[0], u = a[1] - a[0];
            if (!(!l || !u)) {
              var f = (s[0] - o[0]) / l, h = (s[1] - o[1]) / u, c = o[0] - i[0] * f, v = o[1] - a[0] * h, d = this._transform = [f, 0, 0, h, c, v];
              this._invTransform = Hn([], d);
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
          var i = this.dataToPoint(e), a = this.dataToPoint(n), o = this.getArea(), s = new nt(i[0], i[1], a[0] - i[0], a[1] - i[1]);
          return o.intersect(s);
        }, t.prototype.dataToPoint = function(e, n, i) {
          i = i || [];
          var a = e[0], o = e[1];
          if (this._transform && a != null && isFinite(a) && o != null && isFinite(o))
            return Xt(i, e, this._transform);
          var s = this.getAxis("x"), l = this.getAxis("y");
          return i[0] = s.toGlobalCoord(s.dataToCoord(a, n)), i[1] = l.toGlobalCoord(l.dataToCoord(o, n)), i;
        }, t.prototype.clampData = function(e, n) {
          var i = this.getAxis("x").scale, a = this.getAxis("y").scale, o = i.getExtent(), s = a.getExtent(), l = i.parse(e[0]), u = a.parse(e[1]);
          return n = n || [], n[0] = Math.min(Math.max(Math.min(o[0], o[1]), l), Math.max(o[0], o[1])), n[1] = Math.min(Math.max(Math.min(s[0], s[1]), u), Math.max(s[0], s[1])), n;
        }, t.prototype.pointToData = function(e, n) {
          var i = [];
          if (this._invTransform)
            return Xt(i, e, this._invTransform);
          var a = this.getAxis("x"), o = this.getAxis("y");
          return i[0] = a.coordToData(a.toLocalCoord(e[0]), n), i[1] = o.coordToData(o.toLocalCoord(e[1]), n), i;
        }, t.prototype.getOtherAxis = function(e) {
          return this.getAxis(e.dim === "x" ? "y" : "x");
        }, t.prototype.getArea = function() {
          var e = this.getAxis("x").getGlobalExtent(), n = this.getAxis("y").getGlobalExtent(), i = Math.min(e[0], e[1]), a = Math.min(n[0], n[1]), o = Math.max(e[0], e[1]) - i, s = Math.max(n[0], n[1]) - a;
          return new nt(i, a, o, s);
        }, t;
      }(WA)
    ), YA = (
      /** @class */
      function(r) {
        B(t, r);
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
      }(pm)
    );
    function zh(r, t, e) {
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
      a.labelDirection = a.tickDirection = a.nameDirection = p[s], a.labelOffset = o ? d[c[s]] - d[c.onZero] : 0, t.get(["axisTick", "inside"]) && (a.tickDirection = -a.tickDirection), Sr(e.labelInside, t.get(["axisLabel", "inside"])) && (a.labelDirection = -a.labelDirection);
      var y = t.get(["axisLabel", "rotate"]);
      return a.labelRotate = l === "top" ? -y : y, a.z2 = 1, a;
    }
    function c0(r) {
      return r.get("coordinateSystem") === "cartesian2d";
    }
    function d0(r) {
      var t = {
        xAxisModel: null,
        yAxisModel: null
      };
      return M(t, function(e, n) {
        var i = n.replace(/Model$/, ""), a = r.getReferringComponents(i, Be).models[0];
        if (!a)
          throw new Error(i + ' "' + wr(r.get(i + "Index"), r.get(i + "Id"), 0) + '" not found');
        t[n] = a;
      }), t;
    }
    var Gh = Math.log;
    function XA(r, t, e) {
      var n = gi.prototype, i = n.getTicks.call(e), a = n.getTicks.call(e, !0), o = i.length - 1, s = n.getInterval.call(e), l = $y(r, t), u = l.extent, f = l.fixMin, h = l.fixMax;
      if (r.type === "log") {
        var c = Gh(r.base);
        u = [Gh(u[0]) / c, Gh(u[1]) / c];
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
          d = ch(d), p = u[0] + d * o;
      else if (h)
        for (g = u[1] - d * o; g > u[0] && isFinite(g) && isFinite(u[0]); )
          d = ch(d), g = u[1] - d * o;
      else {
        var y = r.getTicks().length - 1;
        y > o && (d = ch(d));
        var m = d * o;
        p = Math.ceil(u[1] / d) * d, g = xt(p - m), g < 0 && u[0] >= 0 ? (g = 0, p = xt(m)) : p > 0 && u[1] <= 0 && (p = 0, g = -xt(m));
      }
      var _ = (i[0].value - a[0].value) / s, S = (i[o].value - a[o].value) / s;
      n.setExtent.call(r, g + d * _, p + d * S), n.setInterval.call(r, d), (_ || S) && n.setNiceExtent.call(r, g + d, p - d);
      {
        var b = n.getTicks.call(r);
        b[1] && (!vD(d) || _o(b[1].value) > _o(d)) && Nt(
          // eslint-disable-next-line
          "The ticks may be not readable when set min: " + t.get("min") + ", max: " + t.get("max") + " and alignTicks: true"
        );
      }
    }
    var qA = (
      /** @class */
      function() {
        function r(t, e, n) {
          this.type = "grid", this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this.axisPointerEnabled = !0, this.dimensions = Fh, this._initCartesian(t, e, n), this.model = t;
        }
        return r.prototype.getRect = function() {
          return this._rect;
        }, r.prototype.update = function(t, e) {
          var n = this._axesMap;
          this._updateScale(t, this.model);
          function i(o) {
            var s, l = pt(o), u = l.length;
            if (u) {
              for (var f = [], h = u - 1; h >= 0; h--) {
                var c = +l[h], v = o[c], d = v.model, g = v.scale;
                // Only value and log axis without interval support alignTicks.
                vh(g) && d.get("alignTicks") && d.get("interval") == null ? f.push(v) : (mh(g, d), vh(g) && (s = v));
              }
              f.length && (s || (s = f.pop(), mh(s.scale, s.model)), M(f, function(p) {
                XA(p.scale, p.model, s.scale);
              }));
            }
          }
          i(n.x), i(n.y);
          var a = {};
          M(n.x, function(o) {
            p0(n, "y", o, a);
          }), M(n.y, function(o) {
            p0(n, "x", o, a);
          }), this.resize(this.model, e);
        }, r.prototype.resize = function(t, e, n) {
          var i = t.getBoxLayoutParams(), a = !n && t.get("containLabel"), o = wn(i, {
            width: e.getWidth(),
            height: e.getHeight()
          });
          this._rect = o;
          var s = this._axesList;
          l(), a && (M(s, function(u) {
            if (!u.model.get(["axisLabel", "inside"])) {
              var f = GD(u);
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
              u.setExtent(h[c], h[1 - c]), ZA(u, f ? o.x : o.y);
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
          V(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
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
          var e = t.seriesModel, n = t.xAxisModel || e && e.getReferringComponents("xAxis", Be).models[0], i = t.yAxisModel || e && e.getReferringComponents("yAxis", Be).models[0], a = t.gridModel, o = this._coordsList, s, l;
          if (e)
            s = e.coordinateSystem, lt(o, s) < 0 && (s = null);
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
              var d = "x" + h + "y" + v, g = new UA(d);
              g.master = i, g.model = t, i._coordsMap[d] = g, i._coordsList.push(g), g.addAxis(f), g.addAxis(c);
            });
          });
          function u(f) {
            return function(h, c) {
              if (Hh(h, t)) {
                var v = h.get("position");
                f === "x" ? v !== "top" && v !== "bottom" && (v = o.bottom ? "top" : "bottom") : v !== "left" && v !== "right" && (v = o.left ? "right" : "left"), o[v] = !0;
                var d = new YA(f, Ky(h), [0, 0], h.get("type"), v), g = d.type === "category";
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
            if (c0(i)) {
              var a = d0(i), o = a.xAxisModel, s = a.yAxisModel;
              if (!Hh(o, e) || !Hh(s, e))
                return;
              var l = this.getCartesian(o.componentIndex, s.componentIndex), u = i.getData(), f = l.getAxis("x"), h = l.getAxis("y");
              n(u, f), n(u, h);
            }
          }, this);
          function n(i, a) {
            M(VD(i, a.dim), function(o) {
              a.scale.unionExtentFromData(i, o);
            });
          }
        }, r.prototype.getTooltipAxes = function(t) {
          var e = [], n = [];
          return M(this.getCartesians(), function(i) {
            var a = t != null && t !== "auto" ? i.getAxis(t) : i.getBaseAxis(), o = i.getOtherAxis(a);
            lt(e, a) < 0 && e.push(a), lt(n, o) < 0 && n.push(o);
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
            if (c0(i)) {
              var a = d0(i), o = a.xAxisModel, s = a.yAxisModel, l = o.getCoordSysModel();
              {
                if (!l)
                  throw new Error('Grid "' + wr(o.get("gridIndex"), o.get("gridId"), 0) + '" not found');
                if (o.getCoordSysModel() !== s.getCoordSysModel())
                  throw new Error("xAxis and yAxis must use the same grid");
              }
              var u = l.coordinateSystem;
              i.coordinateSystem = u.getCartesian(o.componentIndex, s.componentIndex);
            }
          }), n;
        }, r.dimensions = Fh, r;
      }()
    );
    function Hh(r, t) {
      return r.getCoordSysModel() === t;
    }
    function p0(r, t, e, n) {
      e.getAxesOnZeroOf = function() {
        return a ? [a] : [];
      };
      var i = r[t], a, o = e.model, s = o.get(["axisLine", "onZero"]), l = o.get(["axisLine", "onZeroAxisIndex"]);
      if (!s)
        return;
      if (l != null)
        g0(i[l]) && (a = i[l]);
      else
        for (var u in i)
          if (i.hasOwnProperty(u) && g0(i[u]) && !n[f(i[u])]) {
            a = i[u];
            break;
          }
      a && (n[f(a)] = !0);
      function f(h) {
        return h.dim + "_" + h.index;
      }
    }
    function g0(r) {
      return r && r.type !== "category" && r.type !== "time" && zD(r);
    }
    function ZA(r, t) {
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
    var Vr = Math.PI, Wr = (
      /** @class */
      function() {
        function r(t, e) {
          this.group = new It(), this.opt = e, this.axisModel = t, st(e, {
            labelOffset: 0,
            nameDirection: 1,
            tickDirection: 1,
            labelDirection: 1,
            silent: !0,
            handleAutoShown: function() {
              return !0;
            }
          });
          var n = new It({
            x: e.position[0],
            y: e.position[1],
            rotation: e.rotation
          });
          n.updateTransform(), this._transformGroup = n;
        }
        return r.prototype.hasBuilder = function(t) {
          return !!y0[t];
        }, r.prototype.add = function(t) {
          y0[t](this.opt, this.axisModel, this.group, this._transformGroup);
        }, r.prototype.getGroup = function() {
          return this.group;
        }, r.innerTextLayout = function(t, e, n) {
          var i = ou(e - t), a, o;
          return Fi(i) ? (o = n > 0 ? "top" : "bottom", a = "center") : Fi(i - Vr) ? (o = n > 0 ? "bottom" : "top", a = "center") : (o = "middle", i > 0 && i < Vr ? a = n > 0 ? "right" : "left" : a = n > 0 ? "left" : "right"), {
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
    ), y0 = {
      axisLine: function(r, t, e, n) {
        var i = t.get(["axisLine", "show"]);
        if (i === "auto" && r.handleAutoShown && (i = r.handleAutoShown("axisLine")), !!i) {
          var a = t.axis.getExtent(), o = n.transform, s = [a[0], 0], l = [a[1], 0], u = s[0] > l[0];
          o && (Xt(s, s, o), Xt(l, l, o));
          var f = k({
            lineCap: "round"
          }, t.getModel(["axisLine", "lineStyle"]).getLineStyle()), h = new vr({
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
          ra(h.shape, h.style.lineWidth), h.anid = "line", e.add(h);
          var c = t.get(["axisLine", "symbol"]);
          if (c != null) {
            var v = t.get(["axisLine", "symbolSize"]);
            G(c) && (c = [c, c]), (G(v) || ct(v)) && (v = [v, v]);
            var d = Bg(t.get(["axisLine", "symbolOffset"]) || 0, v), g = v[0], p = v[1];
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
                var _ = Cn(c[m], -g / 2, -p / 2, g, p, f.stroke, !0), S = y.r + y.offset, b = u ? l : s;
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
        var i = QA(e, n, t, r), a = JA(e, n, t, r);
        if (KA(t, a, i), jA(e, n, t, r.tickDirection), t.get(["axisLabel", "hideOverlap"])) {
          var o = xm(H(a, function(s) {
            return {
              label: s,
              priority: s.z2,
              defaultAttr: {
                ignore: s.ignore
              }
            };
          }));
          Dm(o);
        }
      },
      axisName: function(r, t, e, n) {
        var i = Sr(r.axisName, t.get("name"));
        if (i) {
          var a = t.get("nameLocation"), o = r.nameDirection, s = t.getModel("nameTextStyle"), l = t.get("nameGap") || 0, u = t.axis.getExtent(), f = u[0] > u[1] ? -1 : 1, h = [
            a === "start" ? u[0] - f * l : a === "end" ? u[1] + f * l : (u[0] + u[1]) / 2,
            // Reuse labelOffset.
            _0(a) ? r.labelOffset + o * l : 0
          ], c, v = t.get("nameRotate");
          v != null && (v = v * Vr / 180);
          var d;
          _0(a) ? c = Wr.innerTextLayout(
            r.rotation,
            v ?? r.rotation,
            // Adapt to axis.
            o
          ) : (c = $A(r.rotation, a, v || 0, u), d = r.axisNameAvailableWidth, d != null && (d = Math.abs(d / Math.sin(c.rotation)), !isFinite(d) && (d = null)));
          var g = s.getFont(), p = t.get("nameTruncate", !0) || {}, y = p.ellipsis, m = Sr(r.nameTruncateMaxWidth, p.maxWidth, d), _ = new Lt({
            x: h[0],
            y: h[1],
            rotation: c.rotation,
            silent: Wr.isLabelSilent(t),
            style: cr(s, {
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
          if (Zu({
            el: _,
            componentModel: t,
            itemName: i
          }), _.__fullText = i, _.anid = "name", t.get("triggerEvent")) {
            var S = Wr.makeAxisEventDataBase(t);
            S.targetType = "axisName", S.name = i, ot(_).eventData = S;
          }
          n.add(_), _.updateTransform(), e.add(_), _.decomposeTransform();
        }
      }
    };
    function $A(r, t, e, n) {
      var i = ou(e - r), a, o, s = n[0] > n[1], l = t === "start" && !s || t !== "start" && s;
      return Fi(i - Vr / 2) ? (o = l ? "bottom" : "top", a = "center") : Fi(i - Vr * 1.5) ? (o = l ? "top" : "bottom", a = "center") : (o = "middle", i < Vr * 1.5 && i > Vr / 2 ? a = l ? "left" : "right" : a = l ? "right" : "left"), {
        rotation: i,
        textAlign: a,
        textVerticalAlign: o
      };
    }
    function KA(r, t, e) {
      if (!Qy(r.axis)) {
        var n = r.get(["axisLabel", "showMinLabel"]), i = r.get(["axisLabel", "showMaxLabel"]);
        t = t || [], e = e || [];
        var a = t[0], o = t[1], s = t[t.length - 1], l = t[t.length - 2], u = e[0], f = e[1], h = e[e.length - 1], c = e[e.length - 2];
        n === !1 ? (Ie(a), Ie(u)) : m0(a, o) && (n ? (Ie(o), Ie(f)) : (Ie(a), Ie(u))), i === !1 ? (Ie(s), Ie(h)) : m0(l, s) && (i ? (Ie(l), Ie(c)) : (Ie(s), Ie(h)));
      }
    }
    function Ie(r) {
      r && (r.ignore = !0);
    }
    function m0(r, t) {
      var e = r && r.getBoundingRect().clone(), n = t && t.getBoundingRect().clone();
      if (!(!e || !n)) {
        var i = xi([]);
        return $a(i, i, -r.rotation), e.applyTransform(Tr([], i, r.getLocalTransform())), n.applyTransform(Tr([], i, t.getLocalTransform())), e.intersect(n);
      }
    }
    function _0(r) {
      return r === "middle" || r === "center";
    }
    function S0(r, t, e, n, i) {
      for (var a = [], o = [], s = [], l = 0; l < r.length; l++) {
        var u = r[l].coord;
        o[0] = u, o[1] = 0, s[0] = u, s[1] = e, t && (Xt(o, o, t), Xt(s, s, t));
        var f = new vr({
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
        ra(f.shape, f.style.lineWidth), f.anid = i + "_" + r[l].tickValue, a.push(f);
      }
      return a;
    }
    function QA(r, t, e, n) {
      var i = e.axis, a = e.getModel("axisTick"), o = a.get("show");
      if (o === "auto" && n.handleAutoShown && (o = n.handleAutoShown("axisTick")), !(!o || i.scale.isBlank())) {
        for (var s = a.getModel("lineStyle"), l = n.tickDirection * a.get("length"), u = i.getTicksCoords(), f = S0(u, t.transform, l, st(s.getLineStyle(), {
          stroke: e.get(["axisLine", "lineStyle", "color"])
        }), "ticks"), h = 0; h < f.length; h++)
          r.add(f[h]);
        return f;
      }
    }
    function jA(r, t, e, n) {
      var i = e.axis, a = e.getModel("minorTick");
      if (!(!a.get("show") || i.scale.isBlank())) {
        var o = i.getMinorTicksCoords();
        if (o.length)
          for (var s = a.getModel("lineStyle"), l = n * a.get("length"), u = st(s.getLineStyle(), st(e.getModel("axisTick").getLineStyle(), {
            stroke: e.get(["axisLine", "lineStyle", "color"])
          })), f = 0; f < o.length; f++)
            for (var h = S0(o[f], t.transform, l, u, "minorticks_" + f), c = 0; c < h.length; c++)
              r.add(h[c]);
      }
    }
    function JA(r, t, e, n) {
      var i = e.axis, a = Sr(n.axisLabelShow, e.get(["axisLabel", "show"]));
      if (!(!a || i.scale.isBlank())) {
        var o = e.getModel("axisLabel"), s = o.get("margin"), l = i.getViewLabels(), u = (Sr(n.labelRotate, o.get("rotate")) || 0) * Vr / 180, f = Wr.innerTextLayout(n.rotation, u, n.labelDirection), h = e.getCategories && e.getCategories(!0), c = [], v = Wr.isLabelSilent(e), d = e.get("triggerEvent");
        return M(l, function(g, p) {
          var y = i.scale.type === "ordinal" ? i.scale.getRawOrdinalNumber(g.tickValue) : g.tickValue, m = g.formattedLabel, _ = g.rawLabel, S = o;
          if (h && h[y]) {
            var b = h[y];
            V(b) && b.textStyle && (S = new mt(b.textStyle, o, e.ecModel));
          }
          var w = S.getTextColor() || e.get(["axisLine", "lineStyle", "color"]), x = i.dataToCoord(y), T = new Lt({
            x,
            y: n.labelOffset + n.labelDirection * s,
            rotation: f.rotation,
            silent: v,
            z2: 10 + (g.level || 0),
            style: cr(S, {
              text: m,
              align: S.getShallow("align", !0) || f.textAlign,
              verticalAlign: S.getShallow("verticalAlign", !0) || S.getShallow("baseline", !0) || f.textVerticalAlign,
              fill: Y(w) ? w(
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
            var D = Wr.makeAxisEventDataBase(e);
            D.targetType = "axisLabel", D.value = _, D.tickIndex = p, i.type === "category" && (D.dataIndex = y), ot(T).eventData = D;
          }
          t.add(T), T.updateTransform(), c.push(T), r.add(T), T.decomposeTransform();
        }), c;
      }
    }
    function tL(r, t) {
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
      return eL(e, r, t), e.seriesInvolved && nL(e, r), e;
    }
    function eL(r, t, e) {
      var n = t.getComponent("tooltip"), i = t.getComponent("axisPointer"), a = i.get("link", !0) || [], o = [];
      M(e.getCoordinateSystems(), function(s) {
        if (!s.axisPointerEnabled)
          return;
        var l = Ba(s.model), u = r.coordSysAxesInfo[l] = {};
        r.coordSysMap[l] = s;
        var f = s.model, h = f.getModel("tooltip", n);
        if (M(s.getAxes(), _t(g, !1, null)), s.getTooltipAxes && n && h.get("show")) {
          var c = h.get("trigger") === "axis", v = h.get(["axisPointer", "type"]) === "cross", d = s.getTooltipAxes(h.get(["axisPointer", "axis"]));
          (c || v) && M(d.baseAxes, _t(g, v ? "cross" : !0, c)), v && M(d.otherAxes, _t(g, "cross", !1));
        }
        function g(p, y, m) {
          var _ = m.model.getModel("axisPointer", i), S = _.get("show");
          if (!(!S || S === "auto" && !p && !Uh(_))) {
            y == null && (y = _.get("triggerTooltip")), _ = p ? rL(m, h, i, t, p, y) : _;
            var b = _.get("snap"), w = Ba(m.model), x = y || b || m.type === "category", T = r.axesInfo[w] = {
              key: w,
              axis: m,
              coordSys: s,
              axisPointerModel: _,
              triggerTooltip: y,
              involveSeries: x,
              snap: b,
              useHandle: Uh(_),
              seriesModels: [],
              linkGroup: null
            };
            u[w] = T, r.seriesInvolved = r.seriesInvolved || x;
            var D = iL(a, m);
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
    function rL(r, t, e, n, i, a) {
      var o = t.getModel("axisPointer"), s = ["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], l = {};
      M(s, function(c) {
        l[c] = rt(o.get(c));
      }), l.snap = r.type !== "category" && !!a, o.get("type") === "cross" && (l.type = "line");
      var u = l.label || (l.label = {});
      if (u.show == null && (u.show = !1), i === "cross") {
        var f = o.get(["label", "show"]);
        if (u.show = f ?? !0, !a) {
          var h = l.lineStyle = o.get("crossStyle");
          h && st(u, h.textStyle);
        }
      }
      return r.model.getModel("axisPointer", new mt(l, e, n));
    }
    function nL(r, t) {
      t.eachSeries(function(e) {
        var n = e.coordinateSystem, i = e.get(["tooltip", "trigger"], !0), a = e.get(["tooltip", "show"], !0);
        !n || i === "none" || i === !1 || i === "item" || a === !1 || e.get(["axisPointer", "show"], !0) === !1 || M(r.coordSysAxesInfo[Ba(n.model)], function(o) {
          var s = o.axis;
          n.getAxis(s.dim) === s && (o.seriesModels.push(e), o.seriesDataCount == null && (o.seriesDataCount = 0), o.seriesDataCount += e.getData().count());
        });
      });
    }
    function iL(r, t) {
      for (var e = t.model, n = t.dim, i = 0; i < r.length; i++) {
        var a = r[i] || {};
        if (Vh(a[n + "AxisId"], e.id) || Vh(a[n + "AxisIndex"], e.componentIndex) || Vh(a[n + "AxisName"], e.name))
          return i;
      }
    }
    function Vh(r, t) {
      return r === "all" || F(r) && lt(r, t) >= 0 || r === t;
    }
    function aL(r) {
      var t = Wh(r);
      if (t) {
        var e = t.axisPointerModel, n = t.axis.scale, i = e.option, a = e.get("status"), o = e.get("value");
        o != null && (o = n.parse(o));
        var s = Uh(e);
        a == null && (i.status = s ? "show" : "hide");
        var l = n.getExtent().slice();
        l[0] > l[1] && l.reverse(), // Pick a value on axis when initializing.
        (o == null || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), i.value = o, s && (i.status = t.axis.scale.isBlank() ? "hide" : "show");
      }
    }
    function Wh(r) {
      var t = (r.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
      return t && t.axesInfo[Ba(r)];
    }
    function oL(r) {
      var t = Wh(r);
      return t && t.axisPointerModel;
    }
    function Uh(r) {
      return !!r.get(["handle", "show"]);
    }
    function Ba(r) {
      return r.type + "||" + r.id;
    }
    var Yh = {}, w0 = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          var e = r !== null && r.apply(this, arguments) || this;
          return e.type = t.type, e;
        }
        return t.prototype.render = function(e, n, i, a) {
          this.axisPointerClass && aL(e), r.prototype.render.apply(this, arguments), this._doUpdateAxisPointerClass(e, i, !0);
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
            var o = oL(e);
            o ? (this._axisPointer || (this._axisPointer = new a())).render(e, o, n, i) : this._disposeAxisPointer(n);
          }
        }, t.prototype._disposeAxisPointer = function(e) {
          this._axisPointer && this._axisPointer.dispose(e), this._axisPointer = null;
        }, t.registerAxisPointerClass = function(e, n) {
          if (Yh[e])
            throw new Error("axisPointer " + e + " exists");
          Yh[e] = n;
        }, t.getAxisPointerClass = function(e) {
          return e && Yh[e];
        }, t.type = "axis", t;
      }($t)
    ), Xh = St();
    function sL(r, t, e, n) {
      var i = e.axis;
      if (!i.scale.isBlank()) {
        var a = e.getModel("splitArea"), o = a.getModel("areaStyle"), s = o.get("color"), l = n.coordinateSystem.getRect(), u = i.getTicksCoords({
          tickModel: a,
          clamp: !0
        });
        if (u.length) {
          var f = s.length, h = Xh(r).splitAreaColors, c = j(), v = 0;
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
            x != null && c.set(x, v), t.add(new Tt({
              anid: x != null ? "area_" + x : null,
              shape: {
                x: _,
                y: S,
                width: b,
                height: w
              },
              style: st({
                fill: s[v]
              }, y),
              autoBatch: !0,
              silent: !0
            })), v = (v + 1) % f;
          }
          Xh(r).splitAreaColors = c;
        }
      }
    }
    function lL(r) {
      Xh(r).splitAreaColors = null;
    }
    var uL = ["axisLine", "axisTickLabel", "axisName"], fL = ["splitArea", "splitLine", "minorSplitLine"], b0 = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          var e = r !== null && r.apply(this, arguments) || this;
          return e.type = t.type, e.axisPointerClass = "CartesianAxisPointer", e;
        }
        return t.prototype.render = function(e, n, i, a) {
          this.group.removeAll();
          var o = this._axisGroup;
          if (this._axisGroup = new It(), this.group.add(this._axisGroup), !!e.get("show")) {
            var s = e.getCoordSysModel(), l = zh(s, e), u = new Wr(e, k({
              handleAutoShown: function(h) {
                for (var c = s.coordinateSystem.getCartesians(), v = 0; v < c.length; v++)
                  if (vh(c[v].getOtherAxis(e.axis).scale))
                    return !0;
                return !1;
              }
            }, l));
            M(uL, u.add, u), this._axisGroup.add(u.getGroup()), M(fL, function(h) {
              e.get([h, "show"]) && hL[h](this, this._axisGroup, e, s);
            }, this);
            var f = a && a.type === "changeAxisOrder" && a.isInitSort;
            f || Xd(o, this._axisGroup, e), r.prototype.render.call(this, e, n, i, a);
          }
        }, t.prototype.remove = function() {
          lL(this);
        }, t.type = "cartesianAxis", t;
      }(w0)
    ), hL = {
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
            var y = f++ % s.length, m = h[g].tickValue, _ = new vr({
              anid: m != null ? "line_" + h[g].tickValue : null,
              autoBatch: !0,
              shape: {
                x1: c[0],
                y1: c[1],
                x2: v[0],
                y2: v[1]
              },
              style: st({
                stroke: s[y]
              }, d),
              silent: !0
            });
            ra(_.shape, d.lineWidth), t.add(_);
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
              var p = new vr({
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
              ra(p.shape, c.lineWidth), t.add(p);
            }
      },
      splitArea: function(r, t, e, n) {
        sL(r, t, e, n);
      }
    }, x0 = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          var e = r !== null && r.apply(this, arguments) || this;
          return e.type = t.type, e;
        }
        return t.type = "xAxis", t;
      }(b0)
    ), vL = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          var e = r !== null && r.apply(this, arguments) || this;
          return e.type = x0.type, e;
        }
        return t.type = "yAxis", t;
      }(b0)
    ), cL = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          var e = r !== null && r.apply(this, arguments) || this;
          return e.type = "grid", e;
        }
        return t.prototype.render = function(e, n) {
          this.group.removeAll(), e.get("show") && this.group.add(new Tt({
            shape: e.coordinateSystem.getRect(),
            style: st({
              fill: e.get("backgroundColor")
            }, e.getItemStyle()),
            silent: !0,
            z2: -1
          }));
        }, t.type = "grid", t;
      }($t)
    ), T0 = {
      // gridIndex: 0,
      // gridId: '',
      offset: 0
    };
    function dL(r) {
      r.registerComponentView(cL), r.registerComponentModel(NA), r.registerCoordinateSystem("cartesian2d", qA), f0(r, "x", Bh, T0), f0(r, "y", Bh, T0), r.registerComponentView(x0), r.registerComponentView(vL), r.registerPreprocessor(function(t) {
        t.xAxis && t.yAxis && !t.grid && (t.grid = {});
      });
    }
    oe(dL);
    var pL = (
      /** @class */
      function(r) {
        B(t, r);
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
      }(it)
    ), gL = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          var e = r !== null && r.apply(this, arguments) || this;
          return e.type = t.type, e;
        }
        return t.prototype.render = function(e, n, i) {
          if (this.group.removeAll(), !!e.get("show")) {
            var a = this.group, o = e.getModel("textStyle"), s = e.getModel("subtextStyle"), l = e.get("textAlign"), u = J(e.get("textBaseline"), e.get("textVerticalAlign")), f = new Lt({
              style: cr(o, {
                text: e.get("text"),
                fill: o.getTextColor()
              }, {
                disableBox: !0
              }),
              z2: 10
            }), h = f.getBoundingRect(), c = e.get("subtext"), v = new Lt({
              style: cr(s, {
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
              Sp(d, "_" + e.get("target"));
            }), g && v.on("click", function() {
              Sp(g, "_" + e.get("subtarget"));
            }), ot(f).eventData = ot(v).eventData = p ? {
              componentType: "title",
              componentIndex: e.componentIndex
            } : null, a.add(f), c && a.add(v);
            var y = a.getBoundingRect(), m = e.getBoxLayoutParams();
            m.width = y.width, m.height = y.height;
            var _ = wn(m, {
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
            var x = new Tt({
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
      }($t)
    );
    function yL(r) {
      r.registerComponentModel(pL), r.registerComponentView(gL);
    }
    oe(yL);
    var mL = function(r, t) {
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
    }, qh = (
      /** @class */
      function(r) {
        B(t, r);
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
            G(a) && (a = {
              type: a
            }), n[o] = at(a, mL(i, a.type));
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
            f && fu(l) && n.push(l.name);
          }), this._availableNames = i;
          var a = this.get("data") || n, o = j(), s = H(a, function(l) {
            return (G(l) || ct(l)) && (l = {
              name: l
            }), o.get(l.name) ? null : (o.set(l.name, !0), new mt(l, this, this.ecModel));
          }, this);
          this._data = bt(s, function(l) {
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
          return !(n.hasOwnProperty(e) && !n[e]) && lt(this._availableNames, e) >= 0;
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
      }(it)
    );
    function _L(r, t) {
      var e = fa(t.get("padding")), n = t.getItemStyle(["color", "opacity"]);
      return n.fill = t.get("backgroundColor"), r = new Tt({
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
    var yi = _t, Zh = M, al = It, C0 = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          var e = r !== null && r.apply(this, arguments) || this;
          return e.type = t.type, e.newlineDisabled = !1, e;
        }
        return t.prototype.init = function() {
          this.group.add(this._contentGroup = new al()), this.group.add(this._selectorGroup = new al()), this._isFirstRender = !0;
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
            }, c = e.get("padding"), v = wn(f, h, c), d = this.layoutInner(e, o, v, a, l, u), g = wn(st({
              width: d.width,
              height: d.height
            }, f), h, c);
            this.group.x = g.x - d.x, this.group.y = g.y - d.y, this.group.markRedraw(), this.group.add(this._backgroundEl = _L(d, e));
          }
        }, t.prototype.resetInner = function() {
          this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll();
        }, t.prototype.renderInner = function(e, n, i, a, o, s, l) {
          var u = this.getContentGroup(), f = j(), h = n.get("selectedMode"), c = [];
          i.eachRawSeries(function(v) {
            !v.get("legendHoverLink") && c.push(v.id);
          }), Zh(n.getData(), function(v, d) {
            var g = v.get("name");
            if (!this.newlineDisabled && (g === "" || g === `
`)) {
              var p = new al();
              p.newline = !0, u.add(p);
              return;
            }
            var y = i.getSeriesByName(g)[0];
            if (!f.get(g)) {
              if (y) {
                var m = y.getData(), _ = m.getVisual("legendLineStyle") || {}, S = m.getVisual("legendIcon"), b = m.getVisual("style"), w = this._createItem(y, g, d, v, n, e, _, b, S, h, a);
                w.on("click", yi(D0, g, null, a, c)).on("mouseover", yi($h, y.name, null, a, c)).on("mouseout", yi(Kh, y.name, null, a, c)), f.set(g, !0);
              } else
                i.eachRawSeries(function(x) {
                  if (!f.get(g) && x.legendVisualProvider) {
                    var T = x.legendVisualProvider;
                    if (!T.containName(g))
                      return;
                    var D = T.indexOfName(g), A = T.getItemVisual(D, "style"), C = T.getItemVisual(D, "legendIcon"), L = fe(A.fill);
                    L && L[3] === 0 && (L[3] = 0.2, A = k(k({}, A), {
                      fill: Ar(L, "rgba")
                    }));
                    var P = this._createItem(x, g, d, v, n, e, {}, A, C, h, a);
                    P.on("click", yi(D0, null, g, a, c)).on("mouseover", yi($h, null, g, a, c)).on("mouseout", yi(Kh, null, g, a, c)), f.set(g, !0);
                  }
                }, this);
              f.get(g) || console.warn(g + " series not exists. Legend data should be same with series name or data name.");
            }
          }, this), o && this._createSelector(o, n, a, s, l);
        }, t.prototype._createSelector = function(e, n, i, a, o) {
          var s = this.getSelectorGroup();
          Zh(e, function(u) {
            var f = u.type, h = new Lt({
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
            na(h, {
              normal: c,
              emphasis: v
            }, {
              defaultText: u.title
            }), No(h);
          });
        }, t.prototype._createItem = function(e, n, i, a, o, s, l, u, f, h, c) {
          var v = e.visualDrawType, d = o.get("itemWidth"), g = o.get("itemHeight"), p = o.isSelected(n), y = a.get("symbolRotate"), m = a.get("symbolKeepAspect"), _ = a.get("icon");
          f = _ || f || "roundRect";
          var S = SL(f, a, l, u, v, p, c), b = new al(), w = a.getModel("textStyle");
          if (Y(e.getLegendIcon) && (!_ || _ === "inherit"))
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
            b.add(wL({
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
          G(A) && A ? C = A.replace("{name}", n ?? "") : Y(A) && (C = A(n));
          var L = a.get("inactiveColor");
          b.add(new Lt({
            style: cr(w, {
              text: C,
              x: T,
              y: g / 2,
              fill: p ? w.getTextColor() : L,
              align: D,
              verticalAlign: "middle"
            })
          }));
          var P = new Tt({
            shape: b.getBoundingRect(),
            invisible: !0
          }), I = a.getModel("tooltip");
          return I.get("show") && Zu({
            el: P,
            componentModel: o,
            itemName: n,
            itemTooltipOption: I.option
          }), b.add(P), b.eachChild(function(R) {
            R.silent = !0;
          }), P.silent = !h, this.getContentGroup().add(b), No(b), b.__legendDataIndex = i, b;
        }, t.prototype.layoutInner = function(e, n, i, a, o, s) {
          var l = this.getContentGroup(), u = this.getSelectorGroup();
          ha(e.get("orient"), l, e.get("itemGap"), i.width, i.height);
          var f = l.getBoundingRect(), h = [-f.x, -f.y];
          if (u.markRedraw(), l.markRedraw(), o) {
            ha(
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
      }($t)
    );
    function SL(r, t, e, n, i, a, o) {
      function s(p, y) {
        p.lineWidth === "auto" && (p.lineWidth = y.lineWidth > 0 ? 2 : 0), Zh(p, function(m, _) {
          p[_] === "inherit" && (p[_] = y[_]);
        });
      }
      var l = t.getModel("itemStyle"), u = l.getItemStyle(), f = r.lastIndexOf("empty", 0) === 0 ? "fill" : "stroke", h = l.getShallow("decal");
      u.decal = !h || h === "inherit" ? n.decal : Gf(h, o), u.fill === "inherit" && (u.fill = n[i]), u.stroke === "inherit" && (u.stroke = n[f]), u.opacity === "inherit" && (u.opacity = (i === "fill" ? n : e).opacity), s(u, n);
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
    function wL(r) {
      var t = r.icon || "roundRect", e = Cn(t, 0, 0, r.itemWidth, r.itemHeight, r.itemStyle.fill, r.symbolKeepAspect);
      return e.setStyle(r.itemStyle), e.rotation = (r.iconRotate || 0) * Math.PI / 180, e.setOrigin([r.itemWidth / 2, r.itemHeight / 2]), t.indexOf("empty") > -1 && (e.style.stroke = e.style.fill, e.style.fill = "#fff", e.style.lineWidth = 2), e;
    }
    function D0(r, t, e, n) {
      Kh(r, t, e, n), e.dispatchAction({
        type: "legendToggleSelect",
        name: r ?? t
      }), $h(r, t, e, n);
    }
    function M0(r) {
      for (var t = r.getZr().storage.getDisplayList(), e, n = 0, i = t.length; n < i && !(e = t[n].states.emphasis); )
        n++;
      return e && e.hoverLayer;
    }
    function $h(r, t, e, n) {
      M0(e) || e.dispatchAction({
        type: "highlight",
        seriesName: r,
        name: t,
        excludeSeriesId: n
      });
    }
    function Kh(r, t, e, n) {
      M0(e) || e.dispatchAction({
        type: "downplay",
        seriesName: r,
        name: t,
        excludeSeriesId: n
      });
    }
    function bL(r) {
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
    function Na(r, t, e) {
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
    function xL(r) {
      r.registerAction("legendToggleSelect", "legendselectchanged", _t(Na, "toggleSelected")), r.registerAction("legendAllSelect", "legendselectall", _t(Na, "allSelect")), r.registerAction("legendInverseSelect", "legendinverseselect", _t(Na, "inverseSelect")), r.registerAction("legendSelect", "legendselected", _t(Na, "select")), r.registerAction("legendUnSelect", "legendunselected", _t(Na, "unSelect"));
    }
    function TL(r) {
      r.registerComponentModel(qh), r.registerComponentView(C0), r.registerProcessor(r.PRIORITY.PROCESSOR.SERIES_FILTER, bL), r.registerSubTypeDefaulter("legend", function() {
        return "plain";
      }), xL(r);
    }
    var CL = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          var e = r !== null && r.apply(this, arguments) || this;
          return e.type = t.type, e;
        }
        return t.prototype.setScrollDataIndex = function(e) {
          this.option.scrollDataIndex = e;
        }, t.prototype.init = function(e, n, i) {
          var a = cs(e);
          r.prototype.init.call(this, e, n, i), A0(this, e, a);
        }, t.prototype.mergeOption = function(e, n) {
          r.prototype.mergeOption.call(this, e, n), A0(this, this.option, e);
        }, t.type = "legend.scroll", t.defaultOption = ap(qh.defaultOption, {
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
      }(qh)
    );
    function A0(r, t, e) {
      var n = r.getOrient(), i = [1, 1];
      i[n.index] = 0, si(t, e, {
        type: "box",
        ignoreSize: !!i
      });
    }
    var L0 = It, Qh = ["width", "height"], jh = ["x", "y"], DL = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          var e = r !== null && r.apply(this, arguments) || this;
          return e.type = t.type, e.newlineDisabled = !0, e._currentIndex = 0, e;
        }
        return t.prototype.init = function() {
          r.prototype.init.call(this), this.group.add(this._containerGroup = new L0()), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new L0());
        }, t.prototype.resetInner = function() {
          r.prototype.resetInner.call(this), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null;
        }, t.prototype.renderInner = function(e, n, i, a, o, s, l) {
          var u = this;
          r.prototype.renderInner.call(this, e, n, i, a, o, s, l);
          var f = this._controllerGroup, h = n.get("pageIconSize", !0), c = F(h) ? h : [h, h];
          d("pagePrev", 0);
          var v = n.getModel("pageTextStyle");
          f.add(new Lt({
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
            var y = g + "DataIndex", m = ts(n.get("pageIcons", !0)[n.getOrient().name][p], {
              // Buttons will be created in each render, so we do not need
              // to worry about avoiding using legendModel kept in scope.
              onclick: dt(u._pageGo, u, y, n, a)
            }, {
              x: -c[0] / 2,
              y: -c[1] / 2,
              width: c[0],
              height: c[1]
            });
            m.name = g, f.add(m);
          }
        }, t.prototype.layoutInner = function(e, n, i, a, o, s) {
          var l = this.getSelectorGroup(), u = e.getOrient().index, f = Qh[u], h = jh[u], c = Qh[1 - u], v = jh[1 - u];
          o && ha(
            // Buttons in selectorGroup always layout horizontally
            "horizontal",
            l,
            e.get("selectorItemGap", !0)
          );
          var d = e.get("selectorButtonGap", !0), g = l.getBoundingRect(), p = [-g.x, -g.y], y = rt(i);
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
          ha(e.get("orient"), f, e.get("itemGap"), a ? i.width : null, a ? null : i.height), ha(
            // Buttons in controller are layout always horizontally.
            "horizontal",
            c,
            e.get("pageButtonItemGap", !0)
          );
          var v = f.getBoundingRect(), d = c.getBoundingRect(), g = this._showController = v[o] > i[o], p = [-v.x, -v.y];
          n || (p[a] = f[u]);
          var y = [0, 0], m = [-d.x, -d.y], _ = J(e.get("pageButtonGap", !0), e.get("itemGap", !0));
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
            w[o] = Math.max(i[o] - d[o] - _, 0), w[s] = b[s], h.setClipPath(new Tt({
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
          return x.pageIndex != null && Pt(
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
          a && o && a.setStyle("text", G(o) ? o.replace("{current}", l == null ? "" : l + "").replace("{total}", u == null ? "" : u + "") : o({
            current: l,
            total: u
          }));
        }, t.prototype._getPageInfo = function(e) {
          var n = e.get("scrollDataIndex", !0), i = this.getContentGroup(), a = this._containerGroup.__rectSize, o = e.getOrient().index, s = Qh[o], l = jh[o], u = this._findTargetItemIndex(n), f = i.children(), h = f[u], c = f.length, v = c ? 1 : 0, d = {
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
      }(C0)
    );
    function ML(r) {
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
    function AL(r) {
      oe(TL), r.registerComponentModel(CL), r.registerComponentView(DL), ML(r);
    }
    oe(AL);
    var On = St(), P0 = rt, Jh = dt, LL = (
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
              s = this._group = new It(), this.createPointerEl(s, u, t, e), this.createLabelEl(s, u, t, e), n.getZr().add(s);
            else {
              var c = _t(I0, e, h);
              this.updatePointerEl(s, u, c), this.updateLabelEl(s, u, c, e);
            }
            k0(s, e, !0), this._renderHandle(a);
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
              var l = Wh(t).seriesDataCount, u = i.getExtent();
              return Math.abs(u[0] - u[1]) / l > s;
            }
            return !1;
          }
          return n === !0;
        }, r.prototype.makeElOption = function(t, e, n, i, a) {
        }, r.prototype.createPointerEl = function(t, e, n, i) {
          var a = e.pointer;
          if (a) {
            var o = On(t).pointerEl = new _b[a.type](P0(e.pointer));
            t.add(o);
          }
        }, r.prototype.createLabelEl = function(t, e, n, i) {
          if (e.label) {
            var a = On(t).labelEl = new Lt(P0(e.label));
            t.add(a), E0(a, i);
          }
        }, r.prototype.updatePointerEl = function(t, e, n) {
          var i = On(t).pointerEl;
          i && e.pointer && (i.setStyle(e.pointer.style), n(i, {
            shape: e.pointer.shape
          }));
        }, r.prototype.updateLabelEl = function(t, e, n, i) {
          var a = On(t).labelEl;
          a && (a.setStyle(e.label.style), n(a, {
            // Consider text length change in vertical axis, animation should
            // be used on shape, otherwise the effect will be weird.
            // TODOTODO
            // shape: elOption.label.shape,
            x: e.label.x,
            y: e.label.y
          }), E0(a, i));
        }, r.prototype._renderHandle = function(t) {
          if (!(this._dragging || !this.updateHandleTransform)) {
            var e = this._axisPointerModel, n = this._api.getZr(), i = this._handle, a = e.getModel("handle"), o = e.get("status");
            if (!a.get("show") || !o || o === "hide") {
              i && n.remove(i), this._handle = null;
              return;
            }
            var s;
            this._handle || (s = !0, i = this._handle = ts(a.get("icon"), {
              cursor: "move",
              draggable: !0,
              onmousemove: function(u) {
                Tv(u.event);
              },
              onmousedown: Jh(this._onHandleDragMove, this, 0, 0),
              drift: Jh(this._onHandleDragMove, this),
              ondragend: Jh(this._onHandleDragEnd, this)
            }), n.add(i)), k0(i, e, !1), i.setStyle(a.getItemStyle(null, ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"]));
            var l = a.get("size");
            F(l) || (l = [l, l]), i.scaleX = l[0] / 2, i.scaleY = l[1] / 2, bg(this, "_doDispatchAxisPointer", a.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, s);
          }
        }, r.prototype._moveHandleToValue = function(t, e) {
          I0(this._axisPointerModel, !e && this._moveAnimation, this._handle, tv(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)));
        }, r.prototype._onHandleDragMove = function(t, e) {
          var n = this._handle;
          if (n) {
            this._dragging = !0;
            var i = this.updateHandleTransform(tv(n), [t, e], this._axisModel, this._axisPointerModel);
            this._payloadInfo = i, n.stopAnimation(), n.attr(tv(i)), On(n).lastProp = null, this._doDispatchAxisPointer();
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
          e && n && (this._lastGraphicKey = null, n && e.remove(n), i && e.remove(i), this._group = null, this._handle = null, this._payloadInfo = null), Ef(this, "_doDispatchAxisPointer");
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
    function I0(r, t, e, n) {
      R0(On(e).lastProp, n) || (On(e).lastProp = n, t ? Pt(e, n, r) : (e.stopAnimation(), e.attr(n)));
    }
    function R0(r, t) {
      if (V(r) && V(t)) {
        var e = !0;
        return M(t, function(n, i) {
          e = e && R0(r[i], n);
        }), !!e;
      } else
        return r === t;
    }
    function E0(r, t) {
      r[t.get(["label", "show"]) ? "show" : "hide"]();
    }
    function tv(r) {
      return {
        x: r.x || 0,
        y: r.y || 0,
        rotation: r.rotation || 0
      };
    }
    function k0(r, t, e) {
      var n = t.get("z"), i = t.get("zlevel");
      r && r.traverse(function(a) {
        a.type !== "group" && (n != null && (a.z = n), i != null && (a.zlevel = i), a.silent = e);
      });
    }
    function PL(r) {
      var t = r.get("type"), e = r.getModel(t + "Style"), n;
      return t === "line" ? (n = e.getLineStyle(), n.fill = null) : t === "shadow" && (n = e.getAreaStyle(), n.stroke = null), n;
    }
    function IL(r, t, e, n, i) {
      var a = e.get("value"), o = O0(a, t.axis, t.ecModel, e.get("seriesDataIndices"), {
        precision: e.get(["label", "precision"]),
        formatter: e.get(["label", "formatter"])
      }), s = e.getModel("label"), l = fa(s.get("padding") || 0), u = s.getFont(), f = Jl(o, u), h = i.position, c = f.width + l[1] + l[3], v = f.height + l[0] + l[2], d = i.align;
      d === "right" && (h[0] -= c), d === "center" && (h[0] -= c / 2);
      var g = i.verticalAlign;
      g === "bottom" && (h[1] -= v), g === "middle" && (h[1] -= v / 2), RL(h, c, v, n);
      var p = s.get("backgroundColor");
      (!p || p === "auto") && (p = t.get(["axisLine", "lineStyle", "color"])), r.label = {
        // shape: {x: 0, y: 0, width: width, height: height, r: labelModel.get('borderRadius')},
        x: h[0],
        y: h[1],
        style: cr(s, {
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
    function RL(r, t, e, n) {
      var i = n.getWidth(), a = n.getHeight();
      r[0] = Math.min(r[0] + t, i) - t, r[1] = Math.min(r[1] + e, a) - e, r[0] = Math.max(r[0], 0), r[1] = Math.max(r[1], 0);
    }
    function O0(r, t, e, n, i) {
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
          value: _h(t, {
            value: r
          }),
          axisDimension: t.dim,
          axisIndex: t.index,
          seriesData: []
        };
        M(n, function(l) {
          var u = e.getSeriesByIndex(l.seriesIndex), f = l.dataIndexInside, h = u && u.getDataParams(f);
          h && s.seriesData.push(h);
        }), G(o) ? a = o.replace("{value}", a) : Y(o) && (a = o(s));
      }
      return a;
    }
    function B0(r, t, e) {
      var n = Kr();
      return $a(n, n, e.rotation), Za(n, n, e.position), Xu([r.dataToCoord(t), (e.labelOffset || 0) + (e.labelDirection || 1) * (e.labelMargin || 0)], n);
    }
    function EL(r, t, e, n, i, a) {
      var o = Wr.innerTextLayout(e.rotation, 0, e.labelDirection);
      e.labelMargin = i.get(["label", "margin"]), IL(t, n, i, a, {
        position: B0(n.axis, r, e),
        align: o.textAlign,
        verticalAlign: o.textVerticalAlign
      });
    }
    function kL(r, t, e) {
      return e = e || 0, {
        x1: r[e],
        y1: r[1 - e],
        x2: t[e],
        y2: t[1 - e]
      };
    }
    function OL(r, t, e) {
      return e = e || 0, {
        x: r[e],
        y: r[1 - e],
        width: t[e],
        height: t[1 - e]
      };
    }
    var BL = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          return r !== null && r.apply(this, arguments) || this;
        }
        return t.prototype.makeElOption = function(e, n, i, a, o) {
          var s = i.axis, l = s.grid, u = a.get("type"), f = N0(l, s).getOtherAxis(s).getGlobalExtent(), h = s.toGlobalCoord(s.dataToCoord(n, !0));
          if (u && u !== "none") {
            var c = PL(a), v = NL[u](s, h, f);
            v.style = c, e.graphicKey = v.type, e.pointer = v;
          }
          var d = zh(l.model, i);
          EL(
            // @ts-ignore
            n,
            e,
            d,
            i,
            a,
            o
          );
        }, t.prototype.getHandleTransform = function(e, n, i) {
          var a = zh(n.axis.grid.model, n, {
            labelInside: !1
          });
          a.labelMargin = i.get(["handle", "margin"]);
          var o = B0(n.axis, e, a);
          return {
            x: o[0],
            y: o[1],
            rotation: a.rotation + (a.labelDirection < 0 ? Math.PI : 0)
          };
        }, t.prototype.updateHandleTransform = function(e, n, i, a) {
          var o = i.axis, s = o.grid, l = o.getGlobalExtent(!0), u = N0(s, o).getOtherAxis(o).getGlobalExtent(), f = o.dim === "x" ? 0 : 1, h = [e.x, e.y];
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
      }(LL)
    );
    function N0(r, t) {
      var e = {};
      return e[t.dim + "AxisIndex"] = t.index, r.getCartesian(e);
    }
    var NL = {
      line: function(r, t, e) {
        var n = kL([t, e[0]], [t, e[1]], F0(r));
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
          shape: OL([t - n / 2, e[0]], [n, i], F0(r))
        };
      }
    };
    function F0(r) {
      return r.dim === "x" ? 0 : 1;
    }
    var FL = (
      /** @class */
      function(r) {
        B(t, r);
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
      }(it)
    ), yr = St(), zL = M;
    function z0(r, t, e) {
      if (!X.node) {
        var n = t.getZr();
        yr(n).records || (yr(n).records = {}), GL(n, t);
        var i = yr(n).records[r] || (yr(n).records[r] = {});
        i.handler = e;
      }
    }
    function GL(r, t) {
      if (yr(r).initialized)
        return;
      yr(r).initialized = !0, e("click", _t(G0, "click")), e("mousemove", _t(G0, "mousemove")), e("globalout", VL);
      function e(n, i) {
        r.on(n, function(a) {
          var o = WL(t);
          zL(yr(r).records, function(s) {
            s && i(s, a, o.dispatchAction);
          }), HL(o.pendings, t);
        });
      }
    }
    function HL(r, t) {
      var e = r.showTip.length, n = r.hideTip.length, i;
      e ? i = r.showTip[e - 1] : n && (i = r.hideTip[n - 1]), i && (i.dispatchAction = null, t.dispatchAction(i));
    }
    function VL(r, t, e) {
      r.handler("leave", null, e);
    }
    function G0(r, t, e, n) {
      t.handler(r, e, n);
    }
    function WL(r) {
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
    function ev(r, t) {
      if (!X.node) {
        var e = t.getZr(), n = (yr(e).records || {})[r];
        n && (yr(e).records[r] = null);
      }
    }
    var UL = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          var e = r !== null && r.apply(this, arguments) || this;
          return e.type = t.type, e;
        }
        return t.prototype.render = function(e, n, i) {
          var a = n.getComponent("tooltip"), o = e.get("triggerOn") || a && a.get("triggerOn") || "mousemove|click";
          z0("axisPointer", i, function(s, l, u) {
            o !== "none" && (s === "leave" || o.indexOf(s) >= 0) && u({
              type: "updateAxisPointer",
              currTrigger: s,
              x: l && l.offsetX,
              y: l && l.offsetY
            });
          });
        }, t.prototype.remove = function(e, n) {
          ev("axisPointer", n);
        }, t.prototype.dispose = function(e, n) {
          ev("axisPointer", n);
        }, t.type = "axisPointer", t;
      }($t)
    );
    function H0(r, t) {
      var e = [], n = r.seriesIndex, i;
      if (n == null || !(i = t.getSeriesByIndex(n)))
        return {
          point: []
        };
      var a = i.getData(), o = on(a, r);
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
          e = l.dataToPoint(a.getValues(H(l.dimensions, function(y) {
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
    var V0 = St();
    function YL(r, t, e) {
      var n = r.currTrigger, i = [r.x, r.y], a = r, o = r.dispatchAction || dt(e.dispatchAction, e), s = t.getComponent("axisPointer").coordSysAxesInfo;
      if (s) {
        ol(i) && (i = H0({
          seriesIndex: a.seriesIndex,
          // Do not use dataIndexInside from other ec instance.
          // FIXME: auto detect it?
          dataIndex: a.dataIndex
        }, t).point);
        var l = ol(i), u = a.axesInfo, f = s.axesInfo, h = n === "leave" || ol(i), c = {}, v = {}, d = {
          list: [],
          map: {}
        }, g = {
          showPointer: _t(qL, v),
          showTooltip: _t(ZL, d)
        };
        M(s.coordSysMap, function(y, m) {
          var _ = l || y.containPoint(i);
          M(s.coordSysAxesInfo[m], function(S, b) {
            var w = S.axis, x = jL(u, S);
            if (!h && _ && (!u || x)) {
              var T = x && x.value;
              T == null && !l && (T = w.pointToData(i)), T != null && W0(S, T, g, !1, c);
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
              _.mapper && (x = y.axis.scale.parse(_.mapper(x, U0(S), U0(y)))), p[y.key] = x;
            }
          });
        }), M(p, function(y, m) {
          W0(f[m], y, g, !0, c);
        }), $L(v, f, c), KL(d, i, r, o), QL(f, o, e), c;
      }
    }
    function W0(r, t, e, n, i) {
      var a = r.axis;
      if (!(a.scale.isBlank() || !a.containData(t))) {
        if (!r.involveSeries) {
          e.showPointer(r, t);
          return;
        }
        var o = XL(t, r), s = o.payloadBatch, l = o.snapToValue;
        s[0] && i.seriesIndex == null && k(i, s[0]), !n && r.snap && a.containData(l) && l != null && (t = l), e.showPointer(r, t, s), e.showTooltip(r, o, l);
      }
    }
    function XL(r, t) {
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
    function qL(r, t, e, n) {
      r[t.key] = {
        value: e,
        payloadBatch: n
      };
    }
    function ZL(r, t, e, n) {
      var i = e.payloadBatch, a = t.axis, o = a.model, s = t.axisPointerModel;
      if (!(!t.triggerTooltip || !i.length)) {
        var l = t.coordSys.model, u = Ba(l), f = r.map[u];
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
    function $L(r, t, e) {
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
    function KL(r, t, e, n) {
      if (ol(t) || !r.list.length) {
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
    function QL(r, t, e) {
      var n = e.getZr(), i = "axisPointerLastHighlights", a = V0(n)[i] || {}, o = V0(n)[i] = {};
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
    function jL(r, t) {
      for (var e = 0; e < (r || []).length; e++) {
        var n = r[e];
        if (t.axis.dim === n.axisDim && t.axis.model.componentIndex === n.axisIndex)
          return n;
      }
    }
    function U0(r) {
      var t = r.axis.model, e = {}, n = e.axisDim = r.axis.dim;
      return e.axisIndex = e[n + "AxisIndex"] = t.componentIndex, e.axisName = e[n + "AxisName"] = t.name, e.axisId = e[n + "AxisId"] = t.id, e;
    }
    function ol(r) {
      return !r || r[0] == null || isNaN(r[0]) || r[1] == null || isNaN(r[1]);
    }
    function JL(r) {
      w0.registerAxisPointerClass("CartesianAxisPointer", BL), r.registerComponentModel(FL), r.registerComponentView(UL), r.registerPreprocessor(function(t) {
        if (t) {
          (!t.axisPointer || t.axisPointer.length === 0) && (t.axisPointer = {});
          var e = t.axisPointer.link;
          e && !F(e) && (t.axisPointer.link = [e]);
        }
      }), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, function(t, e) {
        t.getComponent("axisPointer").coordSysAxesInfo = tL(t, e);
      }), r.registerAction({
        type: "updateAxisPointer",
        event: "updateAxisPointer",
        update: ":updateAxisPointer"
      }, YL);
    }
    var tP = (
      /** @class */
      function(r) {
        B(t, r);
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
      }(it)
    );
    function Y0(r) {
      var t = r.get("confine");
      return t != null ? !!t : r.get("renderMode") === "richText";
    }
    function X0(r) {
      if (X.domSupported) {
        for (var t = document.documentElement.style, e = 0, n = r.length; e < n; e++)
          if (r[e] in t)
            return r[e];
      }
    }
    var q0 = X0(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), eP = X0(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
    function Z0(r, t) {
      if (!r)
        return t;
      t = sf(t, !0);
      var e = r.indexOf(t);
      return r = e === -1 ? t : "-" + r.slice(0, e) + "-" + t, r.toLowerCase();
    }
    function rP(r, t) {
      var e = r.currentStyle || document.defaultView && document.defaultView.getComputedStyle(r);
      return e ? t ? e[t] : e : null;
    }
    var nP = Z0(eP, "transition"), rv = Z0(q0, "transform"), iP = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + (X.transform3dSupported ? "will-change:transform;" : "");
    function aP(r) {
      return r = r === "left" ? "right" : r === "right" ? "left" : r === "top" ? "bottom" : "top", r;
    }
    function oP(r, t, e) {
      if (!G(e) || e === "inside")
        return "";
      var n = r.get("backgroundColor"), i = r.get("borderWidth");
      t = Sn(t);
      var a = aP(e), o = Math.max(Math.round(i) * 1.5, 6), s = "", l = rv + ":", u;
      lt(["left", "right"], a) > -1 ? (s += "top:50%", l += "translateY(-50%) rotate(" + (u = a === "left" ? -225 : -45) + "deg)") : (s += "left:50%", l += "translateX(-50%) rotate(" + (u = a === "top" ? 225 : 45) + "deg)");
      var f = u * Math.PI / 180, h = o + i, c = h * Math.abs(Math.cos(f)) + h * Math.abs(Math.sin(f)), v = Math.round(((c - Math.SQRT2 * i) / 2 + Math.SQRT2 * i - (c - h) / 2) * 100) / 100;
      s += ";" + a + ":-" + v + "px";
      var d = t + " solid " + i + "px;", g = ["position:absolute;width:" + o + "px;height:" + o + "px;z-index:-1;", s + ";" + l + ";", "border-bottom:" + d, "border-right:" + d, "background-color:" + n + ";"];
      return '<div style="' + g.join("") + '"></div>';
    }
    function sP(r, t) {
      var e = "cubic-bezier(0.23,1,0.32,1)", n = " " + r / 2 + "s " + e, i = "opacity" + n + ",visibility" + n;
      return t || (n = " " + r + "s " + e, i += X.transformSupported ? "," + rv + n : ",left" + n + ",top" + n), nP + ":" + i;
    }
    function $0(r, t, e) {
      var n = r.toFixed(0) + "px", i = t.toFixed(0) + "px";
      if (!X.transformSupported)
        return e ? "top:" + i + ";left:" + n + ";" : [["top", i], ["left", n]];
      var a = X.transform3dSupported, o = "translate" + (a ? "3d" : "") + "(" + n + "," + i + (a ? ",0" : "") + ")";
      return e ? "top:0;left:0;" + rv + ":" + o + ";" : [["top", 0], ["left", 0], [q0, o]];
    }
    function lP(r) {
      var t = [], e = r.get("fontSize"), n = r.getTextColor();
      n && t.push("color:" + n), t.push("font:" + r.getFont()), e && t.push("line-height:" + Math.round(e * 3 / 2) + "px");
      var i = r.get("textShadowColor"), a = r.get("textShadowBlur") || 0, o = r.get("textShadowOffsetX") || 0, s = r.get("textShadowOffsetY") || 0;
      return i && a && t.push("text-shadow:" + o + "px " + s + "px " + a + "px " + i), M(["decoration", "align"], function(l) {
        var u = r.get(l);
        u && t.push("text-" + l + ":" + u);
      }), t.join(";");
    }
    function uP(r, t, e) {
      var n = [], i = r.get("transitionDuration"), a = r.get("backgroundColor"), o = r.get("shadowBlur"), s = r.get("shadowColor"), l = r.get("shadowOffsetX"), u = r.get("shadowOffsetY"), f = r.getModel("textStyle"), h = dg(r, "html"), c = l + "px " + u + "px " + o + "px " + s;
      return n.push("box-shadow:" + c), t && i && n.push(sP(i, e)), a && n.push("background-color:" + a), M(["width", "color", "radius"], function(v) {
        var d = "border-" + v, g = sf(d), p = r.get(g);
        p != null && n.push(d + ":" + p + (v === "color" ? "" : "px"));
      }), n.push(lP(f)), h != null && n.push("padding:" + fa(h).join("px ") + "px"), n.join(";") + ";";
    }
    function K0(r, t, e, n, i) {
      var a = t && t.painter;
      if (e) {
        var o = a && a.getViewportRoot();
        o && O_(r, o, document.body, n, i);
      } else {
        r[0] = n, r[1] = i;
        var s = a && a.getViewportRootOffset();
        s && (r[0] += s.offsetLeft, r[1] += s.offsetTop);
      }
      r[2] = r[0] / t.getWidth(), r[3] = r[1] / t.getHeight();
    }
    var fP = (
      /** @class */
      function() {
        function r(t, e, n) {
          if (this._show = !1, this._styleCoord = [0, 0, 0, 0], this._enterable = !0, this._alwaysShowContent = !1, this._firstShow = !0, this._longHide = !0, X.wxa)
            return null;
          var i = document.createElement("div");
          i.domBelongToZr = !0, this.el = i;
          var a = this._zr = e.getZr(), o = this._appendToBody = n && n.appendToBody;
          K0(this._styleCoord, a, o, e.getWidth() / 2, e.getHeight() / 2), o ? document.body.appendChild(i) : t.appendChild(i), this._container = t;
          var s = this;
          i.onmouseenter = function() {
            s._enterable && (clearTimeout(s._hideTimeout), s._show = !0), s._inContent = !0;
          }, i.onmousemove = function(l) {
            if (l = l || window.event, !s._enterable) {
              var u = a.handler, f = a.painter.getViewportRoot();
              ye(f, l, !0), u.dispatch("mousemove", l);
            }
          }, i.onmouseleave = function() {
            s._inContent = !1, s._enterable && s._show && s.hideLater(s._hideDelay);
          };
        }
        return r.prototype.update = function(t) {
          var e = this._container, n = rP(e, "position"), i = e.style;
          i.position !== "absolute" && n !== "absolute" && (i.position = "relative");
          var a = t.get("alwaysShowContent");
          a && this._moveIfResized(), this._alwaysShowContent = a, this.el.className = t.get("className") || "";
        }, r.prototype.show = function(t, e) {
          clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
          var n = this.el, i = n.style, a = this._styleCoord;
          n.innerHTML ? i.cssText = iP + uP(t, !this._firstShow, this._longHide) + $0(a[0], a[1], !0) + ("border-color:" + Sn(e) + ";") + (t.get("extraCssText") || "") + (";pointer-events:" + (this._enterable ? "auto" : "none")) : i.display = "none", this._show = !0, this._firstShow = !1, this._longHide = !1;
        }, r.prototype.setContent = function(t, e, n, i, a) {
          var o = this.el;
          if (t == null) {
            o.innerHTML = "";
            return;
          }
          var s = "";
          if (G(a) && n.get("trigger") === "item" && !Y0(n) && (s = oP(n, i, a)), G(t))
            o.innerHTML = t + s;
          else if (t) {
            o.innerHTML = "", F(t) || (t = [t]);
            for (var l = 0; l < t.length; l++)
              Nn(t[l]) && t[l].parentNode !== o && o.appendChild(t[l]);
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
          if (K0(n, this._zr, this._appendToBody, t, e), n[0] != null && n[1] != null) {
            var i = this.el.style, a = $0(n[0], n[1]);
            M(a, function(o) {
              i[o[0]] = o[1];
            });
          }
        }, r.prototype._moveIfResized = function() {
          var t = this._styleCoord[2], e = this._styleCoord[3];
          this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
        }, r.prototype.hide = function() {
          var t = this, e = this.el.style;
          e.visibility = "hidden", e.opacity = "0", X.transform3dSupported && (e.willChange = ""), this._show = !1, this._longHideTimeout = setTimeout(function() {
            return t._longHide = !0;
          }, 500);
        }, r.prototype.hideLater = function(t) {
          this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(dt(this.hide, this), t)) : this.hide());
        }, r.prototype.isShow = function() {
          return this._show;
        }, r.prototype.dispose = function() {
          this.el.parentNode.removeChild(this.el);
        }, r;
      }()
    ), hP = (
      /** @class */
      function() {
        function r(t) {
          this._show = !1, this._styleCoord = [0, 0, 0, 0], this._alwaysShowContent = !1, this._enterable = !0, this._zr = t.getZr(), j0(this._styleCoord, this._zr, t.getWidth() / 2, t.getHeight() / 2);
        }
        return r.prototype.update = function(t) {
          var e = t.get("alwaysShowContent");
          e && this._moveIfResized(), this._alwaysShowContent = e;
        }, r.prototype.show = function() {
          this._hideTimeout && clearTimeout(this._hideTimeout), this.el.show(), this._show = !0;
        }, r.prototype.setContent = function(t, e, n, i, a) {
          var o = this;
          V(t) && Jt("Passing DOM nodes as content is not supported in richText tooltip!"), this.el && this._zr.remove(this.el);
          var s = n.getModel("textStyle");
          this.el = new Lt({
            style: {
              rich: e.richTextStyles,
              text: t,
              lineHeight: 22,
              borderWidth: 1,
              borderColor: i,
              textShadowColor: s.get("textShadowColor"),
              fill: n.get(["textStyle", "color"]),
              padding: dg(n, "richText"),
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
          var t = this.el, e = this.el.getBoundingRect(), n = Q0(t.style);
          return [e.width + n.left + n.right, e.height + n.top + n.bottom];
        }, r.prototype.moveTo = function(t, e) {
          var n = this.el;
          if (n) {
            var i = this._styleCoord;
            j0(i, this._zr, t, e), t = i[0], e = i[1];
            var a = n.style, o = Ur(a.borderWidth || 0), s = Q0(a);
            n.x = t + o + s.left, n.y = e + o + s.top, n.markRedraw();
          }
        }, r.prototype._moveIfResized = function() {
          var t = this._styleCoord[2], e = this._styleCoord[3];
          this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
        }, r.prototype.hide = function() {
          this.el && this.el.hide(), this._show = !1;
        }, r.prototype.hideLater = function(t) {
          this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(dt(this.hide, this), t)) : this.hide());
        }, r.prototype.isShow = function() {
          return this._show;
        }, r.prototype.dispose = function() {
          this._zr.remove(this.el);
        }, r;
      }()
    );
    function Ur(r) {
      return Math.max(0, r);
    }
    function Q0(r) {
      var t = Ur(r.shadowBlur || 0), e = Ur(r.shadowOffsetX || 0), n = Ur(r.shadowOffsetY || 0);
      return {
        left: Ur(t - e),
        right: Ur(t + e),
        top: Ur(t - n),
        bottom: Ur(t + n)
      };
    }
    function j0(r, t, e, n) {
      r[0] = e, r[1] = n, r[2] = r[0] / t.getWidth(), r[3] = r[1] / t.getHeight();
    }
    var vP = new Tt({
      shape: {
        x: -1,
        y: -1,
        width: 2,
        height: 2
      }
    }), cP = (
      /** @class */
      function(r) {
        B(t, r);
        function t() {
          var e = r !== null && r.apply(this, arguments) || this;
          return e.type = t.type, e;
        }
        return t.prototype.init = function(e, n) {
          if (!(X.node || !n.getDom())) {
            var i = e.getComponent("tooltip"), a = this._renderMode = SS(i.get("renderMode"));
            this._tooltipContent = a === "richText" ? new hP(n) : new fP(n.getDom(), n, {
              appendToBody: i.get("appendToBody", !0)
            });
          }
        }, t.prototype.render = function(e, n, i) {
          if (!(X.node || !i.getDom())) {
            this.group.removeAll(), this._tooltipModel = e, this._ecModel = n, this._api = i;
            var a = this._tooltipContent;
            a.update(e), a.setEnterable(e.get("enterable")), this._initGlobalListener(), this._keepShow(), this._renderMode !== "richText" && e.get("transitionDuration") ? bg(this, "_updatePosition", 50, "fixRate") : Ef(this, "_updatePosition");
          }
        }, t.prototype._initGlobalListener = function() {
          var e = this._tooltipModel, n = e.get("triggerOn");
          z0("itemTooltip", this._api, dt(function(i, a, o) {
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
          if (!(a.from === this.uid || X.node || !i.getDom())) {
            var o = J0(a, i);
            this._ticket = "";
            var s = a.dataByCoordSys, l = yP(a, n, i);
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
              var f = vP;
              f.x = a.x, f.y = a.y, f.update(), ot(f).tooltipConfig = {
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
              var h = H0(a, n), c = h.point[0], v = h.point[1];
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
          this._tooltipModel && o.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = this._lastDataByCoordSys = null, a.from !== this.uid && this._hide(J0(a, i));
        }, t.prototype._manuallyAxisShowTip = function(e, n, i, a) {
          var o = a.seriesIndex, s = a.dataIndex, l = n.getComponent("axisPointer").coordSysAxesInfo;
          if (!(o == null || s == null || l == null)) {
            var u = n.getSeriesByIndex(o);
            if (u) {
              var f = u.getData(), h = Fa([f.getItemModel(s), u, (u.coordinateSystem || {}).model], this._tooltipModel);
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
              xa(i, function(u) {
                if (ot(u).dataIndex != null)
                  return s = u, !0;
                if (ot(u).tooltipConfig != null)
                  return l = u, !0;
              }, !0), s ? this._showSeriesItemTooltip(e, s, n) : l ? this._showComponentItemTooltip(e, l, n) : this._hide(n);
            } else
              this._lastDataByCoordSys = null, this._hide(n);
          }
        }, t.prototype._showOrMove = function(e, n) {
          var i = e.get("showDelay");
          n = dt(n, this), clearTimeout(this._showTimout), i > 0 ? this._showTimout = setTimeout(n, i) : n();
        }, t.prototype._showAxisTooltip = function(e, n) {
          var i = this._ecModel, a = this._tooltipModel, o = [n.offsetX, n.offsetY], s = Fa([n.tooltipOption], a), l = this._renderMode, u = [], f = Sa("section", {
            blocks: [],
            noHeader: !0
          }), h = [], c = new Pf();
          M(e, function(m) {
            M(m.dataByAxis, function(_) {
              var S = i.getComponent(_.axisDim + "Axis", _.axisIndex), b = _.value;
              if (!(!S || b == null)) {
                var w = O0(b, S.axis, i, _.seriesDataIndices, _.valueLabelOpt), x = Sa("section", {
                  header: w,
                  noHeader: !Re(w),
                  sortBlocks: !0,
                  blocks: []
                });
                f.blocks.push(x), M(_.seriesDataIndices, function(T) {
                  var D = i.getSeriesByIndex(T.seriesIndex), A = T.dataIndexInside, C = D.getDataParams(A);
                  if (!(C.dataIndex < 0)) {
                    C.axisDim = _.axisDim, C.axisIndex = _.axisIndex, C.axisType = _.axisType, C.axisId = _.axisId, C.axisValue = _h(S.axis, {
                      value: b
                    }), C.axisValueLabel = w, C.marker = c.makeTooltipMarker("item", Sn(C.color), l);
                    var L = jp(D.formatTooltip(A, !0, null)), P = L.frag;
                    if (P) {
                      var I = Fa([D], a).get("valueFormatter");
                      x.blocks.push(I ? k({
                        valueFormatter: I
                      }, P) : P);
                    }
                    L.text && h.push(L.text), u.push(C);
                  }
                });
              }
            });
          }), f.blocks.reverse(), h.reverse();
          var v = n.position, d = s.get("order"), g = vg(f, c, l, d, i.get("useUTC"), s.get("textStyle"));
          g && h.unshift(g);
          var p = l === "richText" ? `

` : "<br/>", y = h.join(p);
          this._showOrMove(s, function() {
            this._updateContentNotChangedOnAxis(e, u) ? this._updatePosition(s, v, o[0], o[1], this._tooltipContent, u) : this._showTooltipContent(s, y, u, Math.random() + "", o[0], o[1], v, null, c);
          });
        }, t.prototype._showSeriesItemTooltip = function(e, n, i) {
          var a = this._ecModel, o = ot(n), s = o.seriesIndex, l = a.getSeriesByIndex(s), u = o.dataModel || l, f = o.dataIndex, h = o.dataType, c = u.getData(h), v = this._renderMode, d = e.positionDefault, g = Fa([c.getItemModel(f), u, l && (l.coordinateSystem || {}).model], this._tooltipModel, d ? {
            position: d
          } : null), p = g.get("trigger");
          if (!(p != null && p !== "item")) {
            var y = u.getDataParams(f, h), m = new Pf();
            y.marker = m.makeTooltipMarker("item", Sn(y.color), v);
            var _ = jp(u.formatTooltip(f, !1, h)), S = g.get("order"), b = g.get("valueFormatter"), w = _.frag, x = w ? vg(b ? k({
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
          var a = ot(n), o = a.tooltipConfig, s = o.option || {};
          if (G(s)) {
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
          var h = e.positionDefault, c = Fa(u, this._tooltipModel, h ? {
            position: h
          } : null), v = c.get("content"), d = Math.random() + "", g = new Pf();
          this._showOrMove(c, function() {
            var p = rt(c.get("formatterParams") || {});
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
              if (G(c)) {
                var p = e.ecModel.get("useUTC"), y = F(i) ? i[0] : i, m = y && y.axisType && y.axisType.indexOf("time") >= 0;
                v = c, m && (v = la(y.axisValue, v, p)), v = ff(v, i, !0);
              } else if (Y(c)) {
                var _ = dt(function(S, b) {
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
          if (l && d.applyTransform(l.transform), Y(n) && (n = n([i, a], s, o.el, d, {
            viewSize: [u, f],
            contentSize: h.slice()
          })), F(n))
            i = gt(n[0], u), a = gt(n[1], f);
          else if (V(n)) {
            var g = n;
            g.width = h[0], g.height = h[1];
            var p = wn(g, {
              width: u,
              height: f
            });
            i = p.x, a = p.y, c = null, v = null;
          } else if (G(n) && l) {
            var y = gP(n, d, h, e.get("borderWidth"));
            i = y[0], a = y[1];
          } else {
            var y = dP(i, a, o, u, f, c ? null : 20, v ? null : 20);
            i = y[0], a = y[1];
          }
          if (c && (i -= t_(c) ? h[0] / 2 : c === "right" ? h[0] : 0), v && (a -= t_(v) ? h[1] / 2 : v === "bottom" ? h[1] : 0), Y0(e)) {
            var y = pP(i, a, o, u, f);
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
          X.node || !n.getDom() || (Ef(this, "_updatePosition"), this._tooltipContent.dispose(), ev("itemTooltip", n));
        }, t.type = "tooltip", t;
      }($t)
    );
    function Fa(r, t, e) {
      var n = t.ecModel, i;
      e ? (i = new mt(e, n, n), i = new mt(t.option, i, n)) : i = t;
      for (var a = r.length - 1; a >= 0; a--) {
        var o = r[a];
        o && (o instanceof mt && (o = o.get("tooltip", !0)), G(o) && (o = {
          formatter: o
        }), o && (i = new mt(o, i, n)));
      }
      return i;
    }
    function J0(r, t) {
      return r.dispatchAction || dt(t.dispatchAction, t);
    }
    function dP(r, t, e, n, i, a, o) {
      var s = e.getSize(), l = s[0], u = s[1];
      return a != null && (r + l + a + 2 > n ? r -= l + a : r += a), o != null && (t + u + o > i ? t -= u + o : t += o), [r, t];
    }
    function pP(r, t, e, n, i) {
      var a = e.getSize(), o = a[0], s = a[1];
      return r = Math.min(r + o, n) - o, t = Math.min(t + s, i) - s, r = Math.max(r, 0), t = Math.max(t, 0), [r, t];
    }
    function gP(r, t, e, n) {
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
    function t_(r) {
      return r === "center" || r === "middle";
    }
    function yP(r, t, e) {
      var n = vu(r).queryOptionMap, i = n.keys()[0];
      if (!(!i || i === "series")) {
        var a = Wi(t, i, n.get(i), {
          useDefault: !1,
          enableAll: !1,
          enableNone: !1
        }), o = a.models[0];
        if (o) {
          var s = e.getViewOfComponentModel(o), l;
          if (s.group.traverse(function(u) {
            var f = ot(u).tooltipConfig;
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
    function mP(r) {
      oe(JL), r.registerComponentModel(tP), r.registerComponentView(cP), r.registerAction({
        type: "showTip",
        event: "showTip",
        update: "tooltip:manuallyShowTip"
      }, Yt), r.registerAction({
        type: "hideTip",
        event: "hideTip",
        update: "tooltip:manuallyHideTip"
      }, Yt);
    }
    oe(mP), z.version = dC, z.dependencies = pC, z.PRIORITY = ay, z.init = RC, z.connect = EC, z.disConnect = Sy, z.disconnect = kC, z.dispose = OC, z.getInstanceByDom = th, z.getInstanceById = BC, z.registerTheme = eh, z.registerPreprocessor = rh, z.registerProcessor = nh, z.registerPostInit = wy, z.registerPostUpdate = by, z.registerUpdateLifecycle = Fs, z.registerAction = Ln, z.registerCoordinateSystem = xy, z.getCoordinateSystemDimensions = NC, z.registerLayout = Ty, z.registerVisual = Nr, z.registerLoading = ah, z.setCanvasCreator = FC, z.registerMap = Dy, z.getMap = zC, z.registerTransform = My, z.dataTool = GC, z.registerLocale = tf, z.zrender = $1, z.matrix = Z_, z.vector = R_, z.zrUtil = b_, z.color = m1, z.helper = ZD, z.number = eM, z.time = rM, z.graphic = nM, z.format = iM, z.util = aM, z.List = uh, z.ComponentModel = it, z.ComponentView = $t, z.SeriesModel = ne, z.ChartView = Kt, z.extendComponentModel = pM, z.extendComponentView = gM, z.extendSeriesModel = yM, z.extendChartView = mM, z.throttle = bs, z.use = oe, z.setPlatformAPI = av, z.parseGeoJSON = sm, z.parseGeoJson = sm, z.env = X, z.Model = mt, z.Axis = pm, z.innerDrawElementOnCanvas = Ff;
  });
});
export default bP();
