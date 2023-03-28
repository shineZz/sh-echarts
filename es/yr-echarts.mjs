import Pv from "@tarojs/taro";
function K2(y, w) {
  const x = /* @__PURE__ */ Object.create(null), R = y.split(",");
  for (let I = 0; I < R.length; I++)
    x[R[I]] = !0;
  return w ? (I) => !!x[I.toLowerCase()] : (I) => !!x[I];
}
function zv(y) {
  if (Bt(y)) {
    const w = {};
    for (let x = 0; x < y.length; x++) {
      const R = y[x], I = _r(R) ? tE(R) : zv(R);
      if (I)
        for (const O in I)
          w[O] = I[O];
    }
    return w;
  } else {
    if (_r(y))
      return y;
    if (Le(y))
      return y;
  }
}
const j2 = /;(?![^(]*\))/g, Q2 = /:([^]+)/, J2 = /\/\*.*?\*\//gs;
function tE(y) {
  const w = {};
  return y.replace(J2, "").split(j2).forEach((x) => {
    if (x) {
      const R = x.split(Q2);
      R.length > 1 && (w[R[0].trim()] = R[1].trim());
    }
  }), w;
}
function Du(y) {
  let w = "";
  if (_r(y))
    w = y;
  else if (Bt(y))
    for (let x = 0; x < y.length; x++) {
      const R = Du(y[x]);
      R && (w += R + " ");
    }
  else if (Le(y))
    for (const x in y)
      y[x] && (w += x + " ");
  return w.trim();
}
const Br = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, eE = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], sS = () => {
}, rE = /^on[^a-z]/, nE = (y) => rE.test(y), yr = Object.assign, iE = (y, w) => {
  const x = y.indexOf(w);
  x > -1 && y.splice(x, 1);
}, aE = Object.prototype.hasOwnProperty, Ut = (y, w) => aE.call(y, w), Bt = Array.isArray, ca = (y) => Mu(y) === "[object Map]", oE = (y) => Mu(y) === "[object Set]", we = (y) => typeof y == "function", _r = (y) => typeof y == "string", Vv = (y) => typeof y == "symbol", Le = (y) => y !== null && typeof y == "object", sE = (y) => Le(y) && we(y.then) && we(y.catch), lE = Object.prototype.toString, Mu = (y) => lE.call(y), lS = (y) => Mu(y).slice(8, -1), uE = (y) => Mu(y) === "[object Object]", Gv = (y) => _r(y) && y !== "NaN" && y[0] !== "-" && "" + parseInt(y, 10) === y, uS = (y) => {
  const w = /* @__PURE__ */ Object.create(null);
  return (x) => w[x] || (w[x] = y(x));
}, fS = uS((y) => y.charAt(0).toUpperCase() + y.slice(1)), fE = uS((y) => y ? `on${fS(y)}` : ""), Go = (y, w) => !Object.is(y, w), hE = (y, w, x) => {
  Object.defineProperty(y, w, {
    configurable: !0,
    enumerable: !1,
    value: x
  });
};
let q1;
const cE = () => q1 || (q1 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Z1(y, ...w) {
  console.warn(`[Vue warn] ${y}`, ...w);
}
let hS;
function vE(y, w = hS) {
  w && w.active && w.effects.push(y);
}
function dE() {
  return hS;
}
const Ho = (y) => {
  const w = new Set(y);
  return w.w = 0, w.n = 0, w;
}, cS = (y) => (y.w & Ln) > 0, vS = (y) => (y.n & Ln) > 0, pE = ({ deps: y }) => {
  if (y.length)
    for (let w = 0; w < y.length; w++)
      y[w].w |= Ln;
}, gE = (y) => {
  const { deps: w } = y;
  if (w.length) {
    let x = 0;
    for (let R = 0; R < w.length; R++) {
      const I = w[R];
      cS(I) && !vS(I) ? I.delete(y) : w[x++] = I, I.w &= ~Ln, I.n &= ~Ln;
    }
    w.length = x;
  }
}, Iv = /* @__PURE__ */ new WeakMap();
let Fo = 0, Ln = 1;
const Lv = 30;
let _e;
const xi = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Ev = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class mE {
  constructor(w, x = null, R) {
    this.fn = w, this.scheduler = x, this.active = !0, this.deps = [], this.parent = void 0, vE(this, R);
  }
  run() {
    if (!this.active)
      return this.fn();
    let w = _e, x = In;
    for (; w; ) {
      if (w === this)
        return;
      w = w.parent;
    }
    try {
      return this.parent = _e, _e = this, In = !0, Ln = 1 << ++Fo, Fo <= Lv ? pE(this) : K1(this), this.fn();
    } finally {
      Fo <= Lv && gE(this), Ln = 1 << --Fo, _e = this.parent, In = x, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    _e === this ? this.deferStop = !0 : this.active && (K1(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function K1(y) {
  const { deps: w } = y;
  if (w.length) {
    for (let x = 0; x < w.length; x++)
      w[x].delete(y);
    w.length = 0;
  }
}
let In = !0;
const dS = [];
function Hv() {
  dS.push(In), In = !1;
}
function Wv() {
  const y = dS.pop();
  In = y === void 0 ? !0 : y;
}
function Ve(y, w, x) {
  if (In && _e) {
    let R = Iv.get(y);
    R || Iv.set(y, R = /* @__PURE__ */ new Map());
    let I = R.get(x);
    I || R.set(x, I = Ho());
    const O = process.env.NODE_ENV !== "production" ? { effect: _e, target: y, type: w, key: x } : void 0;
    Rv(I, O);
  }
}
function Rv(y, w) {
  let x = !1;
  Fo <= Lv ? vS(y) || (y.n |= Ln, x = !cS(y)) : x = !y.has(_e), x && (y.add(_e), _e.deps.push(y), process.env.NODE_ENV !== "production" && _e.onTrack && _e.onTrack(Object.assign({ effect: _e }, w)));
}
function En(y, w, x, R, I, O) {
  const F = Iv.get(y);
  if (!F)
    return;
  let H = [];
  if (w === "clear")
    H = [...F.values()];
  else if (x === "length" && Bt(y)) {
    const nt = Number(R);
    F.forEach((ft, V) => {
      (V === "length" || V >= nt) && H.push(ft);
    });
  } else
    switch (x !== void 0 && H.push(F.get(x)), w) {
      case "add":
        Bt(y) ? Gv(x) && H.push(F.get("length")) : (H.push(F.get(xi)), ca(y) && H.push(F.get(Ev)));
        break;
      case "delete":
        Bt(y) || (H.push(F.get(xi)), ca(y) && H.push(F.get(Ev)));
        break;
      case "set":
        ca(y) && H.push(F.get(xi));
        break;
    }
  const $ = process.env.NODE_ENV !== "production" ? { target: y, type: w, key: x, newValue: R, oldValue: I, oldTarget: O } : void 0;
  if (H.length === 1)
    H[0] && (process.env.NODE_ENV !== "production" ? fa(H[0], $) : fa(H[0]));
  else {
    const nt = [];
    for (const ft of H)
      ft && nt.push(...ft);
    process.env.NODE_ENV !== "production" ? fa(Ho(nt), $) : fa(Ho(nt));
  }
}
function fa(y, w) {
  const x = Bt(y) ? y : [...y];
  for (const R of x)
    R.computed && j1(R, w);
  for (const R of x)
    R.computed || j1(R, w);
}
function j1(y, w) {
  (y !== _e || y.allowRecurse) && (process.env.NODE_ENV !== "production" && y.onTrigger && y.onTrigger(yr({ effect: y }, w)), y.scheduler ? y.scheduler() : y.run());
}
const yE = /* @__PURE__ */ K2("__proto__,__v_isRef,__isVue"), pS = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((y) => y !== "arguments" && y !== "caller").map((y) => Symbol[y]).filter(Vv)
), _E = /* @__PURE__ */ Uv(), SE = /* @__PURE__ */ Uv(!0), wE = /* @__PURE__ */ Uv(!0, !0), Q1 = /* @__PURE__ */ bE();
function bE() {
  const y = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((w) => {
    y[w] = function(...x) {
      const R = gt(this);
      for (let O = 0, F = this.length; O < F; O++)
        Ve(R, "get", O + "");
      const I = R[w](...x);
      return I === -1 || I === !1 ? R[w](...x.map(gt)) : I;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((w) => {
    y[w] = function(...x) {
      Hv();
      const R = gt(this)[w].apply(this, x);
      return Wv(), R;
    };
  }), y;
}
function xE(y) {
  const w = gt(this);
  return Ve(w, "has", y), w.hasOwnProperty(y);
}
function Uv(y = !1, w = !1) {
  return function(R, I, O) {
    if (I === "__v_isReactive")
      return !y;
    if (I === "__v_isReadonly")
      return y;
    if (I === "__v_isShallow")
      return w;
    if (I === "__v_raw" && O === (y ? w ? SS : _S : w ? zE : yS).get(R))
      return R;
    const F = Bt(R);
    if (!y) {
      if (F && Ut(Q1, I))
        return Reflect.get(Q1, I, O);
      if (I === "hasOwnProperty")
        return xE;
    }
    const H = Reflect.get(R, I, O);
    return (Vv(I) ? pS.has(I) : yE(I)) || (y || Ve(R, "get", I), w) ? H : Se(H) ? F && Gv(I) ? H : H.value : Le(H) ? y ? bS(H) : wS(H) : H;
  };
}
const TE = /* @__PURE__ */ CE();
function CE(y = !1) {
  return function(x, R, I, O) {
    let F = x[R];
    if (Rn(F) && Se(F) && !Se(I))
      return !1;
    if (!y && (!Su(I) && !Rn(I) && (F = gt(F), I = gt(I)), !Bt(x) && Se(F) && !Se(I)))
      return F.value = I, !0;
    const H = Bt(x) && Gv(R) ? Number(R) < x.length : Ut(x, R), $ = Reflect.set(x, R, I, O);
    return x === gt(O) && (H ? Go(I, F) && En(x, "set", R, I, F) : En(x, "add", R, I)), $;
  };
}
function DE(y, w) {
  const x = Ut(y, w), R = y[w], I = Reflect.deleteProperty(y, w);
  return I && x && En(y, "delete", w, void 0, R), I;
}
function ME(y, w) {
  const x = Reflect.has(y, w);
  return (!Vv(w) || !pS.has(w)) && Ve(y, "has", w), x;
}
function AE(y) {
  return Ve(y, "iterate", Bt(y) ? "length" : xi), Reflect.ownKeys(y);
}
const PE = {
  get: _E,
  set: TE,
  deleteProperty: DE,
  has: ME,
  ownKeys: AE
}, gS = {
  get: SE,
  set(y, w) {
    return process.env.NODE_ENV !== "production" && Z1(`Set operation on key "${String(w)}" failed: target is readonly.`, y), !0;
  },
  deleteProperty(y, w) {
    return process.env.NODE_ENV !== "production" && Z1(`Delete operation on key "${String(w)}" failed: target is readonly.`, y), !0;
  }
}, IE = /* @__PURE__ */ yr({}, gS, {
  get: wE
}), Yv = (y) => y, Au = (y) => Reflect.getPrototypeOf(y);
function fu(y, w, x = !1, R = !1) {
  y = y.__v_raw;
  const I = gt(y), O = gt(w);
  x || (w !== O && Ve(I, "get", w), Ve(I, "get", O));
  const { has: F } = Au(I), H = R ? Yv : x ? qv : Wo;
  if (F.call(I, w))
    return H(y.get(w));
  if (F.call(I, O))
    return H(y.get(O));
  y !== I && y.get(w);
}
function hu(y, w = !1) {
  const x = this.__v_raw, R = gt(x), I = gt(y);
  return w || (y !== I && Ve(R, "has", y), Ve(R, "has", I)), y === I ? x.has(y) : x.has(y) || x.has(I);
}
function cu(y, w = !1) {
  return y = y.__v_raw, !w && Ve(gt(y), "iterate", xi), Reflect.get(y, "size", y);
}
function J1(y) {
  y = gt(y);
  const w = gt(this);
  return Au(w).has.call(w, y) || (w.add(y), En(w, "add", y, y)), this;
}
function tS(y, w) {
  w = gt(w);
  const x = gt(this), { has: R, get: I } = Au(x);
  let O = R.call(x, y);
  O ? process.env.NODE_ENV !== "production" && mS(x, R, y) : (y = gt(y), O = R.call(x, y));
  const F = I.call(x, y);
  return x.set(y, w), O ? Go(w, F) && En(x, "set", y, w, F) : En(x, "add", y, w), this;
}
function eS(y) {
  const w = gt(this), { has: x, get: R } = Au(w);
  let I = x.call(w, y);
  I ? process.env.NODE_ENV !== "production" && mS(w, x, y) : (y = gt(y), I = x.call(w, y));
  const O = R ? R.call(w, y) : void 0, F = w.delete(y);
  return I && En(w, "delete", y, void 0, O), F;
}
function rS() {
  const y = gt(this), w = y.size !== 0, x = process.env.NODE_ENV !== "production" ? ca(y) ? new Map(y) : new Set(y) : void 0, R = y.clear();
  return w && En(y, "clear", void 0, void 0, x), R;
}
function vu(y, w) {
  return function(R, I) {
    const O = this, F = O.__v_raw, H = gt(F), $ = w ? Yv : y ? qv : Wo;
    return !y && Ve(H, "iterate", xi), F.forEach((nt, ft) => R.call(I, $(nt), $(ft), O));
  };
}
function du(y, w, x) {
  return function(...R) {
    const I = this.__v_raw, O = gt(I), F = ca(O), H = y === "entries" || y === Symbol.iterator && F, $ = y === "keys" && F, nt = I[y](...R), ft = x ? Yv : w ? qv : Wo;
    return !w && Ve(O, "iterate", $ ? Ev : xi), {
      // iterator protocol
      next() {
        const { value: V, done: q } = nt.next();
        return q ? { value: V, done: q } : {
          value: H ? [ft(V[0]), ft(V[1])] : ft(V),
          done: q
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Dn(y) {
  return function(...w) {
    if (process.env.NODE_ENV !== "production") {
      const x = w[0] ? `on key "${w[0]}" ` : "";
      console.warn(`${fS(y)} operation ${x}failed: target is readonly.`, gt(this));
    }
    return y === "delete" ? !1 : this;
  };
}
function LE() {
  const y = {
    get(O) {
      return fu(this, O);
    },
    get size() {
      return cu(this);
    },
    has: hu,
    add: J1,
    set: tS,
    delete: eS,
    clear: rS,
    forEach: vu(!1, !1)
  }, w = {
    get(O) {
      return fu(this, O, !1, !0);
    },
    get size() {
      return cu(this);
    },
    has: hu,
    add: J1,
    set: tS,
    delete: eS,
    clear: rS,
    forEach: vu(!1, !0)
  }, x = {
    get(O) {
      return fu(this, O, !0);
    },
    get size() {
      return cu(this, !0);
    },
    has(O) {
      return hu.call(this, O, !0);
    },
    add: Dn(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Dn(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Dn(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Dn(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: vu(!0, !1)
  }, R = {
    get(O) {
      return fu(this, O, !0, !0);
    },
    get size() {
      return cu(this, !0);
    },
    has(O) {
      return hu.call(this, O, !0);
    },
    add: Dn(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Dn(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Dn(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Dn(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: vu(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((O) => {
    y[O] = du(O, !1, !1), x[O] = du(O, !0, !1), w[O] = du(O, !1, !0), R[O] = du(O, !0, !0);
  }), [
    y,
    x,
    w,
    R
  ];
}
const [EE, RE, OE, kE] = /* @__PURE__ */ LE();
function Xv(y, w) {
  const x = w ? y ? kE : OE : y ? RE : EE;
  return (R, I, O) => I === "__v_isReactive" ? !y : I === "__v_isReadonly" ? y : I === "__v_raw" ? R : Reflect.get(Ut(x, I) && I in R ? x : R, I, O);
}
const NE = {
  get: /* @__PURE__ */ Xv(!1, !1)
}, BE = {
  get: /* @__PURE__ */ Xv(!0, !1)
}, FE = {
  get: /* @__PURE__ */ Xv(!0, !0)
};
function mS(y, w, x) {
  const R = gt(x);
  if (R !== x && w.call(y, R)) {
    const I = lS(y);
    console.warn(`Reactive ${I} contains both the raw and reactive versions of the same object${I === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const yS = /* @__PURE__ */ new WeakMap(), zE = /* @__PURE__ */ new WeakMap(), _S = /* @__PURE__ */ new WeakMap(), SS = /* @__PURE__ */ new WeakMap();
function VE(y) {
  switch (y) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function GE(y) {
  return y.__v_skip || !Object.isExtensible(y) ? 0 : VE(lS(y));
}
function wS(y) {
  return Rn(y) ? y : $v(y, !1, PE, NE, yS);
}
function bS(y) {
  return $v(y, !0, gS, BE, _S);
}
function pu(y) {
  return $v(y, !0, IE, FE, SS);
}
function $v(y, w, x, R, I) {
  if (!Le(y))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(y)}`), y;
  if (y.__v_raw && !(w && y.__v_isReactive))
    return y;
  const O = I.get(y);
  if (O)
    return O;
  const F = GE(y);
  if (F === 0)
    return y;
  const H = new Proxy(y, F === 2 ? R : x);
  return I.set(y, H), H;
}
function Ti(y) {
  return Rn(y) ? Ti(y.__v_raw) : !!(y && y.__v_isReactive);
}
function Rn(y) {
  return !!(y && y.__v_isReadonly);
}
function Su(y) {
  return !!(y && y.__v_isShallow);
}
function Ov(y) {
  return Ti(y) || Rn(y);
}
function gt(y) {
  const w = y && y.__v_raw;
  return w ? gt(w) : y;
}
function HE(y) {
  return hE(y, "__v_skip", !0), y;
}
const Wo = (y) => Le(y) ? wS(y) : y, qv = (y) => Le(y) ? bS(y) : y;
function WE(y) {
  In && _e && (y = gt(y), process.env.NODE_ENV !== "production" ? Rv(y.dep || (y.dep = Ho()), {
    target: y,
    type: "get",
    key: "value"
  }) : Rv(y.dep || (y.dep = Ho())));
}
function UE(y, w) {
  y = gt(y);
  const x = y.dep;
  x && (process.env.NODE_ENV !== "production" ? fa(x, {
    target: y,
    type: "set",
    key: "value",
    newValue: w
  }) : fa(x));
}
function Se(y) {
  return !!(y && y.__v_isRef === !0);
}
function Cv(y) {
  return YE(y, !1);
}
function YE(y, w) {
  return Se(y) ? y : new XE(y, w);
}
class XE {
  constructor(w, x) {
    this.__v_isShallow = x, this.dep = void 0, this.__v_isRef = !0, this._rawValue = x ? w : gt(w), this._value = x ? w : Wo(w);
  }
  get value() {
    return WE(this), this._value;
  }
  set value(w) {
    const x = this.__v_isShallow || Su(w) || Rn(w);
    w = x ? w : gt(w), Go(w, this._rawValue) && (this._rawValue = w, this._value = x ? w : Wo(w), UE(this, w));
  }
}
function mu(y) {
  return Se(y) ? y.value : y;
}
const $E = {
  get: (y, w, x) => mu(Reflect.get(y, w, x)),
  set: (y, w, x, R) => {
    const I = y[w];
    return Se(I) && !Se(x) ? (I.value = x, !0) : Reflect.set(y, w, x, R);
  }
};
function qE(y) {
  return Ti(y) ? y : new Proxy(y, $E);
}
const Ci = [];
function ZE(y) {
  Ci.push(y);
}
function KE() {
  Ci.pop();
}
function se(y, ...w) {
  if (process.env.NODE_ENV === "production")
    return;
  Hv();
  const x = Ci.length ? Ci[Ci.length - 1].component : null, R = x && x.appContext.config.warnHandler, I = jE();
  if (R)
    Di(R, x, 11, [
      y + w.join(""),
      x && x.proxy,
      I.map(({ vnode: O }) => `at <${GS(x, O.type)}>`).join(`
`),
      I
    ]);
  else {
    const O = [`[Vue warn]: ${y}`, ...w];
    I.length && O.push(`
`, ...QE(I)), console.warn(...O);
  }
  Wv();
}
function jE() {
  let y = Ci[Ci.length - 1];
  if (!y)
    return [];
  const w = [];
  for (; y; ) {
    const x = w[0];
    x && x.vnode === y ? x.recurseCount++ : w.push({
      vnode: y,
      recurseCount: 0
    });
    const R = y.component && y.component.parent;
    y = R && R.vnode;
  }
  return w;
}
function QE(y) {
  const w = [];
  return y.forEach((x, R) => {
    w.push(...R === 0 ? [] : [`
`], ...JE(x));
  }), w;
}
function JE({ vnode: y, recurseCount: w }) {
  const x = w > 0 ? `... (${w} recursive calls)` : "", R = y.component ? y.component.parent == null : !1, I = ` at <${GS(y.component, y.type, R)}`, O = ">" + x;
  return y.props ? [I, ...tR(y.props), O] : [I + O];
}
function tR(y) {
  const w = [], x = Object.keys(y);
  return x.slice(0, 3).forEach((R) => {
    w.push(...xS(R, y[R]));
  }), x.length > 3 && w.push(" ..."), w;
}
function xS(y, w, x) {
  return _r(w) ? (w = JSON.stringify(w), x ? w : [`${y}=${w}`]) : typeof w == "number" || typeof w == "boolean" || w == null ? x ? w : [`${y}=${w}`] : Se(w) ? (w = xS(y, gt(w.value), !0), x ? w : [`${y}=Ref<`, w, ">"]) : we(w) ? [`${y}=fn${w.name ? `<${w.name}>` : ""}`] : (w = gt(w), x ? w : [`${y}=`, w]);
}
const Zv = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [
    0
    /* ErrorCodes.SETUP_FUNCTION */
  ]: "setup function",
  [
    1
    /* ErrorCodes.RENDER_FUNCTION */
  ]: "render function",
  [
    2
    /* ErrorCodes.WATCH_GETTER */
  ]: "watcher getter",
  [
    3
    /* ErrorCodes.WATCH_CALLBACK */
  ]: "watcher callback",
  [
    4
    /* ErrorCodes.WATCH_CLEANUP */
  ]: "watcher cleanup function",
  [
    5
    /* ErrorCodes.NATIVE_EVENT_HANDLER */
  ]: "native event handler",
  [
    6
    /* ErrorCodes.COMPONENT_EVENT_HANDLER */
  ]: "component event handler",
  [
    7
    /* ErrorCodes.VNODE_HOOK */
  ]: "vnode hook",
  [
    8
    /* ErrorCodes.DIRECTIVE_HOOK */
  ]: "directive hook",
  [
    9
    /* ErrorCodes.TRANSITION_HOOK */
  ]: "transition hook",
  [
    10
    /* ErrorCodes.APP_ERROR_HANDLER */
  ]: "app errorHandler",
  [
    11
    /* ErrorCodes.APP_WARN_HANDLER */
  ]: "app warnHandler",
  [
    12
    /* ErrorCodes.FUNCTION_REF */
  ]: "ref function",
  [
    13
    /* ErrorCodes.ASYNC_COMPONENT_LOADER */
  ]: "async component loader",
  [
    14
    /* ErrorCodes.SCHEDULER */
  ]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function Di(y, w, x, R) {
  let I;
  try {
    I = R ? y(...R) : y();
  } catch (O) {
    TS(O, w, x);
  }
  return I;
}
function wu(y, w, x, R) {
  if (we(y)) {
    const O = Di(y, w, x, R);
    return O && sE(O) && O.catch((F) => {
      TS(F, w, x);
    }), O;
  }
  const I = [];
  for (let O = 0; O < y.length; O++)
    I.push(wu(y[O], w, x, R));
  return I;
}
function TS(y, w, x, R = !0) {
  const I = w ? w.vnode : null;
  if (w) {
    let O = w.parent;
    const F = w.proxy, H = process.env.NODE_ENV !== "production" ? Zv[x] : x;
    for (; O; ) {
      const nt = O.ec;
      if (nt) {
        for (let ft = 0; ft < nt.length; ft++)
          if (nt[ft](y, F, H) === !1)
            return;
      }
      O = O.parent;
    }
    const $ = w.appContext.config.errorHandler;
    if ($) {
      Di($, null, 10, [y, F, H]);
      return;
    }
  }
  eR(y, x, I, R);
}
function eR(y, w, x, R = !0) {
  if (process.env.NODE_ENV !== "production") {
    const I = Zv[w];
    if (x && ZE(x), se(`Unhandled error${I ? ` during execution of ${I}` : ""}`), x && KE(), R)
      throw y;
    console.error(y);
  } else
    console.error(y);
}
let bu = !1, kv = !1;
const pr = [];
let An = 0;
const va = [];
let Nr = null, Mn = 0;
const CS = /* @__PURE__ */ Promise.resolve();
let Kv = null;
const rR = 100;
function nR(y) {
  const w = Kv || CS;
  return y ? w.then(this ? y.bind(this) : y) : w;
}
function iR(y) {
  let w = An + 1, x = pr.length;
  for (; w < x; ) {
    const R = w + x >>> 1;
    Uo(pr[R]) < y ? w = R + 1 : x = R;
  }
  return w;
}
function jv(y) {
  (!pr.length || !pr.includes(y, bu && y.allowRecurse ? An + 1 : An)) && (y.id == null ? pr.push(y) : pr.splice(iR(y.id), 0, y), DS());
}
function DS() {
  !bu && !kv && (kv = !0, Kv = CS.then(AS));
}
function MS(y) {
  Bt(y) ? va.push(...y) : (!Nr || !Nr.includes(y, y.allowRecurse ? Mn + 1 : Mn)) && va.push(y), DS();
}
function aR(y) {
  if (va.length) {
    const w = [...new Set(va)];
    if (va.length = 0, Nr) {
      Nr.push(...w);
      return;
    }
    for (Nr = w, process.env.NODE_ENV !== "production" && (y = y || /* @__PURE__ */ new Map()), Nr.sort((x, R) => Uo(x) - Uo(R)), Mn = 0; Mn < Nr.length; Mn++)
      process.env.NODE_ENV !== "production" && PS(y, Nr[Mn]) || Nr[Mn]();
    Nr = null, Mn = 0;
  }
}
const Uo = (y) => y.id == null ? 1 / 0 : y.id, oR = (y, w) => {
  const x = Uo(y) - Uo(w);
  if (x === 0) {
    if (y.pre && !w.pre)
      return -1;
    if (w.pre && !y.pre)
      return 1;
  }
  return x;
};
function AS(y) {
  kv = !1, bu = !0, process.env.NODE_ENV !== "production" && (y = y || /* @__PURE__ */ new Map()), pr.sort(oR);
  const w = process.env.NODE_ENV !== "production" ? (x) => PS(y, x) : sS;
  try {
    for (An = 0; An < pr.length; An++) {
      const x = pr[An];
      if (x && x.active !== !1) {
        if (process.env.NODE_ENV !== "production" && w(x))
          continue;
        Di(
          x,
          null,
          14
          /* ErrorCodes.SCHEDULER */
        );
      }
    }
  } finally {
    An = 0, pr.length = 0, aR(y), bu = !1, Kv = null, (pr.length || va.length) && AS(y);
  }
}
function PS(y, w) {
  if (!y.has(w))
    y.set(w, 1);
  else {
    const x = y.get(w);
    if (x > rR) {
      const R = w.ownerInstance, I = R && VS(R.type);
      return se(`Maximum recursive updates exceeded${I ? ` in component <${I}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      y.set(w, x + 1);
  }
}
const Bo = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (cE().__VUE_HMR_RUNTIME__ = {
  createRecord: Dv(sR),
  rerender: Dv(lR),
  reload: Dv(uR)
});
const xu = /* @__PURE__ */ new Map();
function sR(y, w) {
  return xu.has(y) ? !1 : (xu.set(y, {
    initialDef: zo(w),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function zo(y) {
  return HS(y) ? y.__vccOpts : y;
}
function lR(y, w) {
  const x = xu.get(y);
  x && (x.initialDef.render = w, [...x.instances].forEach((R) => {
    w && (R.render = w, zo(R.type).render = w), R.renderCache = [], R.update();
  }));
}
function uR(y, w) {
  const x = xu.get(y);
  if (!x)
    return;
  w = zo(w), nS(x.initialDef, w);
  const R = [...x.instances];
  for (const I of R) {
    const O = zo(I.type);
    Bo.has(O) || (O !== x.initialDef && nS(O, w), Bo.add(O)), I.appContext.optionsCache.delete(I.type), I.ceReload ? (Bo.add(O), I.ceReload(w.styles), Bo.delete(O)) : I.parent ? jv(I.parent.update) : I.appContext.reload ? I.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  MS(() => {
    for (const I of R)
      Bo.delete(zo(I.type));
  });
}
function nS(y, w) {
  yr(y, w);
  for (const x in y)
    x !== "__file" && !(x in w) && delete y[x];
}
function Dv(y) {
  return (w, x) => {
    try {
      return y(w, x);
    } catch (R) {
      console.error(R), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let Pn = null, fR = null;
const hR = (y) => y.__isSuspense;
function cR(y, w) {
  w && w.pendingBranch ? Bt(y) ? w.effects.push(...y) : w.effects.push(y) : MS(y);
}
const gu = {};
function vR(y, w, { immediate: x, deep: R, flush: I, onTrack: O, onTrigger: F } = Br) {
  process.env.NODE_ENV !== "production" && !w && (x !== void 0 && se('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), R !== void 0 && se('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const H = (mt) => {
    se("Invalid watch source: ", mt, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, $ = dE() === (mr == null ? void 0 : mr.scope) ? mr : null;
  let nt, ft = !1, V = !1;
  if (Se(y) ? (nt = () => y.value, ft = Su(y)) : Ti(y) ? (nt = () => y, R = !0) : Bt(y) ? (V = !0, ft = y.some((mt) => Ti(mt) || Su(mt)), nt = () => y.map((mt) => {
    if (Se(mt))
      return mt.value;
    if (Ti(mt))
      return ha(mt);
    if (we(mt))
      return Di(
        mt,
        $,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
    process.env.NODE_ENV !== "production" && H(mt);
  })) : we(y) ? w ? nt = () => Di(
    y,
    $,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : nt = () => {
    if (!($ && $.isUnmounted))
      return q && q(), wu(y, $, 3, [at]);
  } : (nt = sS, process.env.NODE_ENV !== "production" && H(y)), w && R) {
    const mt = nt;
    nt = () => ha(mt());
  }
  let q, at = (mt) => {
    q = Yt.onStop = () => {
      Di(
        mt,
        $,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, At = V ? new Array(y.length).fill(gu) : gu;
  const Dt = () => {
    if (Yt.active)
      if (w) {
        const mt = Yt.run();
        (R || ft || (V ? mt.some((Ge, Mi) => Go(Ge, At[Mi])) : Go(mt, At))) && (q && q(), wu(w, $, 3, [
          mt,
          // pass undefined as the old value when it's changed for the first time
          At === gu ? void 0 : V && At[0] === gu ? [] : At,
          at
        ]), At = mt);
      } else
        Yt.run();
  };
  Dt.allowRecurse = !!w;
  let Ee;
  I === "sync" ? Ee = Dt : I === "post" ? Ee = () => oS(Dt, $ && $.suspense) : (Dt.pre = !0, $ && (Dt.id = $.uid), Ee = () => jv(Dt));
  const Yt = new mE(nt, Ee);
  return process.env.NODE_ENV !== "production" && (Yt.onTrack = O, Yt.onTrigger = F), w ? x ? Dt() : At = Yt.run() : I === "post" ? oS(Yt.run.bind(Yt), $ && $.suspense) : Yt.run(), () => {
    Yt.stop(), $ && $.scope && iE($.scope.effects, Yt);
  };
}
function dR(y, w, x) {
  const R = this.proxy, I = _r(y) ? y.includes(".") ? pR(R, y) : () => R[y] : y.bind(R, R);
  let O;
  we(w) ? O = w : (O = w.handler, x = w);
  const F = mr;
  Fv(this);
  const H = vR(I, O.bind(R), x);
  return F ? Fv(F) : zS(), H;
}
function pR(y, w) {
  const x = w.split(".");
  return () => {
    let R = y;
    for (let I = 0; I < x.length && R; I++)
      R = R[x[I]];
    return R;
  };
}
function ha(y, w) {
  if (!Le(y) || y.__v_skip || (w = w || /* @__PURE__ */ new Set(), w.has(y)))
    return y;
  if (w.add(y), Se(y))
    ha(y.value, w);
  else if (Bt(y))
    for (let x = 0; x < y.length; x++)
      ha(y[x], w);
  else if (oE(y) || ca(y))
    y.forEach((x) => {
      ha(x, w);
    });
  else if (uE(y))
    for (const x in y)
      ha(y[x], w);
  return y;
}
function gR(y, w, x = mr, R = !1) {
  if (x) {
    const I = x[y] || (x[y] = []), O = w.__weh || (w.__weh = (...F) => {
      if (x.isUnmounted)
        return;
      Hv(), Fv(x);
      const H = wu(w, x, y, F);
      return zS(), Wv(), H;
    });
    return R ? I.unshift(O) : I.push(O), O;
  } else if (process.env.NODE_ENV !== "production") {
    const I = fE(Zv[y].replace(/ hook$/, ""));
    se(`${I} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const mR = (y) => (w, x = mr) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  gR(y, (...R) => w(...R), x)
), yR = mR(
  "m"
  /* LifecycleHooks.MOUNTED */
), _R = Symbol(), Nv = (y) => y ? NR(y) ? BR(y) || y.proxy : Nv(y.parent) : null, Vo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ yr(/* @__PURE__ */ Object.create(null), {
    $: (y) => y,
    $el: (y) => y.vnode.el,
    $data: (y) => y.data,
    $props: (y) => process.env.NODE_ENV !== "production" ? pu(y.props) : y.props,
    $attrs: (y) => process.env.NODE_ENV !== "production" ? pu(y.attrs) : y.attrs,
    $slots: (y) => process.env.NODE_ENV !== "production" ? pu(y.slots) : y.slots,
    $refs: (y) => process.env.NODE_ENV !== "production" ? pu(y.refs) : y.refs,
    $parent: (y) => Nv(y.parent),
    $root: (y) => Nv(y.root),
    $emit: (y) => y.emit,
    $options: (y) => bR(y),
    $forceUpdate: (y) => y.f || (y.f = () => jv(y.update)),
    $nextTick: (y) => y.n || (y.n = nR.bind(y.proxy)),
    $watch: (y) => dR.bind(y)
  })
), SR = (y) => y === "_" || y === "$", Mv = (y, w) => y !== Br && !y.__isScriptSetup && Ut(y, w), wR = {
  get({ _: y }, w) {
    const { ctx: x, setupState: R, data: I, props: O, accessCache: F, type: H, appContext: $ } = y;
    if (process.env.NODE_ENV !== "production" && w === "__isVue")
      return !0;
    let nt;
    if (w[0] !== "$") {
      const at = F[w];
      if (at !== void 0)
        switch (at) {
          case 1:
            return R[w];
          case 2:
            return I[w];
          case 4:
            return x[w];
          case 3:
            return O[w];
        }
      else {
        if (Mv(R, w))
          return F[w] = 1, R[w];
        if (I !== Br && Ut(I, w))
          return F[w] = 2, I[w];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (nt = y.propsOptions[0]) && Ut(nt, w)
        )
          return F[w] = 3, O[w];
        if (x !== Br && Ut(x, w))
          return F[w] = 4, x[w];
        F[w] = 0;
      }
    }
    const ft = Vo[w];
    let V, q;
    if (ft)
      return w === "$attrs" && (Ve(y, "get", w), process.env.NODE_ENV !== "production" && void 0), ft(y);
    if (
      // css module (injected by vue-loader)
      (V = H.__cssModules) && (V = V[w])
    )
      return V;
    if (x !== Br && Ut(x, w))
      return F[w] = 4, x[w];
    if (
      // global properties
      q = $.config.globalProperties, Ut(q, w)
    )
      return q[w];
    process.env.NODE_ENV !== "production" && Pn && (!_r(w) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    w.indexOf("__v") !== 0) && (I !== Br && SR(w[0]) && Ut(I, w) ? se(`Property ${JSON.stringify(w)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : y === Pn && se(`Property ${JSON.stringify(w)} was accessed during render but is not defined on instance.`));
  },
  set({ _: y }, w, x) {
    const { data: R, setupState: I, ctx: O } = y;
    return Mv(I, w) ? (I[w] = x, !0) : process.env.NODE_ENV !== "production" && I.__isScriptSetup && Ut(I, w) ? (se(`Cannot mutate <script setup> binding "${w}" from Options API.`), !1) : R !== Br && Ut(R, w) ? (R[w] = x, !0) : Ut(y.props, w) ? (process.env.NODE_ENV !== "production" && se(`Attempting to mutate prop "${w}". Props are readonly.`), !1) : w[0] === "$" && w.slice(1) in y ? (process.env.NODE_ENV !== "production" && se(`Attempting to mutate public property "${w}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && w in y.appContext.config.globalProperties ? Object.defineProperty(O, w, {
      enumerable: !0,
      configurable: !0,
      value: x
    }) : O[w] = x, !0);
  },
  has({ _: { data: y, setupState: w, accessCache: x, ctx: R, appContext: I, propsOptions: O } }, F) {
    let H;
    return !!x[F] || y !== Br && Ut(y, F) || Mv(w, F) || (H = O[0]) && Ut(H, F) || Ut(R, F) || Ut(Vo, F) || Ut(I.config.globalProperties, F);
  },
  defineProperty(y, w, x) {
    return x.get != null ? y._.accessCache[w] = 0 : Ut(x, "value") && this.set(y, w, x.value, null), Reflect.defineProperty(y, w, x);
  }
};
process.env.NODE_ENV !== "production" && (wR.ownKeys = (y) => (se("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(y)));
function bR(y) {
  const w = y.type, { mixins: x, extends: R } = w, { mixins: I, optionsCache: O, config: { optionMergeStrategies: F } } = y.appContext, H = O.get(w);
  let $;
  return H ? $ = H : !I.length && !x && !R ? $ = w : ($ = {}, I.length && I.forEach((nt) => Tu($, nt, F, !0)), Tu($, w, F)), Le(w) && O.set(w, $), $;
}
function Tu(y, w, x, R = !1) {
  const { mixins: I, extends: O } = w;
  O && Tu(y, O, x, !0), I && I.forEach((F) => Tu(y, F, x, !0));
  for (const F in w)
    if (R && F === "expose")
      process.env.NODE_ENV !== "production" && se('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const H = xR[F] || x && x[F];
      y[F] = H ? H(y[F], w[F]) : w[F];
    }
  return y;
}
const xR = {
  data: iS,
  props: bi,
  emits: bi,
  // objects
  methods: bi,
  computed: bi,
  // lifecycle
  beforeCreate: ye,
  created: ye,
  beforeMount: ye,
  mounted: ye,
  beforeUpdate: ye,
  updated: ye,
  beforeDestroy: ye,
  beforeUnmount: ye,
  destroyed: ye,
  unmounted: ye,
  activated: ye,
  deactivated: ye,
  errorCaptured: ye,
  serverPrefetch: ye,
  // assets
  components: bi,
  directives: bi,
  // watch
  watch: CR,
  // provide / inject
  provide: iS,
  inject: TR
};
function iS(y, w) {
  return w ? y ? function() {
    return yr(we(y) ? y.call(this, this) : y, we(w) ? w.call(this, this) : w);
  } : w : y;
}
function TR(y, w) {
  return bi(aS(y), aS(w));
}
function aS(y) {
  if (Bt(y)) {
    const w = {};
    for (let x = 0; x < y.length; x++)
      w[y[x]] = y[x];
    return w;
  }
  return y;
}
function ye(y, w) {
  return y ? [...new Set([].concat(y, w))] : w;
}
function bi(y, w) {
  return y ? yr(yr(/* @__PURE__ */ Object.create(null), y), w) : w;
}
function CR(y, w) {
  if (!y)
    return w;
  if (!w)
    return y;
  const x = yr(/* @__PURE__ */ Object.create(null), y);
  for (const R in w)
    x[R] = ye(y[R], w[R]);
  return x;
}
const oS = cR, DR = (y) => y.__isTeleport, IS = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), MR = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), AR = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0);
Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0);
const yu = [];
let gr = null;
function Bv(y = !1) {
  yu.push(gr = y ? null : []);
}
function PR() {
  yu.pop(), gr = yu[yu.length - 1] || null;
}
function LS(y) {
  return y.dynamicChildren = gr || eE, PR(), gr && gr.push(y), y;
}
function ES(y, w, x, R, I, O) {
  return LS(kS(
    y,
    w,
    x,
    R,
    I,
    O,
    !0
    /* isBlock */
  ));
}
function IR(y, w, x, R, I) {
  return LS(NS(
    y,
    w,
    x,
    R,
    I,
    !0
    /* isBlock: prevent a block from tracking itself */
  ));
}
function LR(y) {
  return y ? y.__v_isVNode === !0 : !1;
}
const ER = (...y) => BS(...y), RS = "__vInternal", OS = ({ key: y }) => y ?? null, _u = ({ ref: y, ref_key: w, ref_for: x }) => y != null ? _r(y) || Se(y) || we(y) ? { i: Pn, r: y, k: w, f: !!x } : y : null;
function kS(y, w = null, x = null, R = 0, I = null, O = y === IS ? 0 : 1, F = !1, H = !1) {
  const $ = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: y,
    props: w,
    key: w && OS(w),
    ref: w && _u(w),
    scopeId: fR,
    slotScopeIds: null,
    children: x,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: O,
    patchFlag: R,
    dynamicProps: I,
    dynamicChildren: null,
    appContext: null,
    ctx: Pn
  };
  return H ? (Qv($, x), O & 128 && y.normalize($)) : x && ($.shapeFlag |= _r(x) ? 8 : 16), process.env.NODE_ENV !== "production" && $.key !== $.key && se("VNode created with invalid key (NaN). VNode type:", $.type), // avoid a block node from tracking itself
  !F && // has current parent block
  gr && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  ($.patchFlag > 0 || O & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  $.patchFlag !== 32 && gr.push($), $;
}
const NS = process.env.NODE_ENV !== "production" ? ER : BS;
function BS(y, w = null, x = null, R = 0, I = null, O = !1) {
  if ((!y || y === _R) && (process.env.NODE_ENV !== "production" && !y && se(`Invalid vnode type when creating vnode: ${y}.`), y = AR), LR(y)) {
    const H = Cu(
      y,
      w,
      !0
      /* mergeRef: true */
    );
    return x && Qv(H, x), !O && gr && (H.shapeFlag & 6 ? gr[gr.indexOf(y)] = H : gr.push(H)), H.patchFlag |= -2, H;
  }
  if (HS(y) && (y = y.__vccOpts), w) {
    w = RR(w);
    let { class: H, style: $ } = w;
    H && !_r(H) && (w.class = Du(H)), Le($) && (Ov($) && !Bt($) && ($ = yr({}, $)), w.style = zv($));
  }
  const F = _r(y) ? 1 : hR(y) ? 128 : DR(y) ? 64 : Le(y) ? 4 : we(y) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && F & 4 && Ov(y) && (y = gt(y), se("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, y)), kS(y, w, x, R, I, F, O, !0);
}
function RR(y) {
  return y ? Ov(y) || RS in y ? yr({}, y) : y : null;
}
function Cu(y, w, x = !1) {
  const { props: R, ref: I, patchFlag: O, children: F } = y, H = w ? kR(R || {}, w) : R;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: y.type,
    props: H,
    key: H && OS(H),
    ref: w && w.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      x && I ? Bt(I) ? I.concat(_u(w)) : [I, _u(w)] : _u(w)
    ) : I,
    scopeId: y.scopeId,
    slotScopeIds: y.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && O === -1 && Bt(F) ? F.map(FS) : F,
    target: y.target,
    targetAnchor: y.targetAnchor,
    staticCount: y.staticCount,
    shapeFlag: y.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: w && y.type !== IS ? O === -1 ? 16 : O | 16 : O,
    dynamicProps: y.dynamicProps,
    dynamicChildren: y.dynamicChildren,
    appContext: y.appContext,
    dirs: y.dirs,
    transition: y.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: y.component,
    suspense: y.suspense,
    ssContent: y.ssContent && Cu(y.ssContent),
    ssFallback: y.ssFallback && Cu(y.ssFallback),
    el: y.el,
    anchor: y.anchor,
    ctx: y.ctx,
    ce: y.ce
  };
}
function FS(y) {
  const w = Cu(y);
  return Bt(y.children) && (w.children = y.children.map(FS)), w;
}
function OR(y = " ", w = 0) {
  return NS(MR, null, y, w);
}
function Qv(y, w) {
  let x = 0;
  const { shapeFlag: R } = y;
  if (w == null)
    w = null;
  else if (Bt(w))
    x = 16;
  else if (typeof w == "object")
    if (R & 65) {
      const I = w.default;
      I && (I._c && (I._d = !1), Qv(y, I()), I._c && (I._d = !0));
      return;
    } else {
      x = 32;
      const I = w._;
      !I && !(RS in w) ? w._ctx = Pn : I === 3 && Pn && (Pn.slots._ === 1 ? w._ = 1 : (w._ = 2, y.patchFlag |= 1024));
    }
  else
    we(w) ? (w = { default: w, _ctx: Pn }, x = 32) : (w = String(w), R & 64 ? (x = 16, w = [OR(w)]) : x = 8);
  y.children = w, y.shapeFlag |= x;
}
function kR(...y) {
  const w = {};
  for (let x = 0; x < y.length; x++) {
    const R = y[x];
    for (const I in R)
      if (I === "class")
        w.class !== R.class && (w.class = Du([w.class, R.class]));
      else if (I === "style")
        w.style = zv([w.style, R.style]);
      else if (nE(I)) {
        const O = w[I], F = R[I];
        F && O !== F && !(Bt(O) && O.includes(F)) && (w[I] = O ? [].concat(O, F) : F);
      } else
        I !== "" && (w[I] = R[I]);
  }
  return w;
}
let mr = null;
const Fv = (y) => {
  mr = y, y.scope.on();
}, zS = () => {
  mr && mr.scope.off(), mr = null;
};
function NR(y) {
  return y.vnode.shapeFlag & 4;
}
function BR(y) {
  if (y.exposed)
    return y.exposeProxy || (y.exposeProxy = new Proxy(qE(HE(y.exposed)), {
      get(w, x) {
        if (x in w)
          return w[x];
        if (x in Vo)
          return Vo[x](y);
      },
      has(w, x) {
        return x in w || x in Vo;
      }
    }));
}
const FR = /(?:^|[-_])(\w)/g, zR = (y) => y.replace(FR, (w) => w.toUpperCase()).replace(/[-_]/g, "");
function VS(y, w = !0) {
  return we(y) ? y.displayName || y.name : y.name || w && y.__name;
}
function GS(y, w, x = !1) {
  let R = VS(w);
  if (!R && w.__file) {
    const I = w.__file.match(/([^/\\]+)\.\w+$/);
    I && (R = I[1]);
  }
  if (!R && y && y.parent) {
    const I = (O) => {
      for (const F in O)
        if (O[F] === w)
          return F;
    };
    R = I(y.components || y.parent.type.components) || I(y.appContext.components);
  }
  return R ? zR(R) : x ? "App" : "Anonymous";
}
function HS(y) {
  return we(y) && "__vccOpts" in y;
}
Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : "");
function Av(y) {
  return !!(y && y.__v_isShallow);
}
function VR() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const y = { style: "color:#3ba776" }, w = { style: "color:#0b1bc9" }, x = { style: "color:#b62e24" }, R = { style: "color:#9d288c" }, I = {
    header(V) {
      return Le(V) ? V.__isVue ? ["div", y, "VueInstance"] : Se(V) ? [
        "div",
        {},
        ["span", y, ft(V)],
        "<",
        H(V.value),
        ">"
      ] : Ti(V) ? [
        "div",
        {},
        ["span", y, Av(V) ? "ShallowReactive" : "Reactive"],
        "<",
        H(V),
        `>${Rn(V) ? " (readonly)" : ""}`
      ] : Rn(V) ? [
        "div",
        {},
        ["span", y, Av(V) ? "ShallowReadonly" : "Readonly"],
        "<",
        H(V),
        ">"
      ] : null : null;
    },
    hasBody(V) {
      return V && V.__isVue;
    },
    body(V) {
      if (V && V.__isVue)
        return [
          "div",
          {},
          ...O(V.$)
        ];
    }
  };
  function O(V) {
    const q = [];
    V.type.props && V.props && q.push(F("props", gt(V.props))), V.setupState !== Br && q.push(F("setup", V.setupState)), V.data !== Br && q.push(F("data", gt(V.data)));
    const at = $(V, "computed");
    at && q.push(F("computed", at));
    const At = $(V, "inject");
    return At && q.push(F("injected", At)), q.push([
      "div",
      {},
      [
        "span",
        {
          style: R.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: V }]
    ]), q;
  }
  function F(V, q) {
    return q = yr({}, q), Object.keys(q).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        V
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(q).map((at) => [
          "div",
          {},
          ["span", R, at + ": "],
          H(q[at], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function H(V, q = !0) {
    return typeof V == "number" ? ["span", w, V] : typeof V == "string" ? ["span", x, JSON.stringify(V)] : typeof V == "boolean" ? ["span", R, V] : Le(V) ? ["object", { object: q ? gt(V) : V }] : ["span", x, String(V)];
  }
  function $(V, q) {
    const at = V.type;
    if (we(at))
      return;
    const At = {};
    for (const Dt in V.ctx)
      nt(at, Dt, q) && (At[Dt] = V.ctx[Dt]);
    return At;
  }
  function nt(V, q, at) {
    const At = V[at];
    if (Bt(At) && At.includes(q) || Le(At) && q in At || V.extends && nt(V.extends, q, at) || V.mixins && V.mixins.some((Dt) => nt(Dt, q, at)))
      return !0;
  }
  function ft(V) {
    return Av(V) ? "ShallowRef" : V.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(I) : window.devtoolsFormatters = [I];
}
function GR() {
  VR();
}
process.env.NODE_ENV !== "production" && GR();
process.env.TARO_ENV === "alipay" && Object.defineProperty(Object.prototype, "wx", {
  enumerable: !1,
  value: my
});
(function(y, w) {
  typeof exports == "object" && typeof module < "u" ? w(exports) : typeof define == "function" && define.amd ? define(["exports"], w) : w(y.echarts = {});
})(globalThis, function(y) {
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
  var w = function(r, t) {
    return w = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(e, n) {
      e.__proto__ = n;
    } || function(e, n) {
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }, w(r, t);
  };
  function x(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    w(r, t);
    function e() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
  }
  var R = function() {
    function r() {
      this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1;
    }
    return r;
  }(), I = function() {
    function r() {
      this.browser = new R(), this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = typeof window < "u";
    }
    return r;
  }(), O = new I();
  typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? (O.wxa = !0, O.touchEventsSupported = !0) : typeof document > "u" && typeof self < "u" ? O.worker = !0 : typeof navigator > "u" ? (O.node = !0, O.svgSupported = !0) : F(navigator.userAgent, O);
  function F(r, t) {
    var e = t.browser, n = r.match(/Firefox\/([\d.]+)/), i = r.match(/MSIE\s([\d.]+)/) || r.match(/Trident\/.+?rv:(([\d.]+))/), a = r.match(/Edge?\/([\d.]+)/), o = /micromessenger/i.test(r);
    n && (e.firefox = !0, e.version = n[1]), i && (e.ie = !0, e.version = i[1]), a && (e.edge = !0, e.version = a[1], e.newEdge = +a[1].split(".")[0] > 18), o && (e.weChat = !0), t.svgSupported = typeof SVGRect < "u", t.touchEventsSupported = "ontouchstart" in window && !e.ie && !e.edge, t.pointerEventsSupported = "onpointerdown" in window && (e.edge || e.ie && +e.version >= 11), t.domSupported = typeof document < "u";
    var s = document.documentElement.style;
    t.transform3dSupported = (e.ie && "transition" in s || e.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix() || "MozPerspective" in s) && !("OTransition" in s), t.transformSupported = t.transform3dSupported || e.ie && +e.version >= 9;
  }
  var H = 12, $ = "sans-serif", nt = H + "px " + $, ft = 20, V = 100, q = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
  function at(r) {
    var t = {};
    if (typeof JSON > "u")
      return t;
    for (var e = 0; e < r.length; e++) {
      var n = String.fromCharCode(e + 32), i = (r.charCodeAt(e) - ft) / V;
      t[n] = i;
    }
    return t;
  }
  var At = at(q), Dt = {
    createCanvas: function() {
      return typeof document < "u" && document.createElement("canvas");
    },
    measureText: function() {
      var r, t;
      return function(e, n) {
        if (!r) {
          var i = Dt.createCanvas();
          r = i && i.getContext("2d");
        }
        if (r)
          return t !== n && (t = r.font = n || nt), r.measureText(e);
        e = e || "", n = n || nt;
        var a = /(\d+)px/.exec(n), o = a && +a[1] || H, s = 0;
        if (n.indexOf("mono") >= 0)
          s = o * e.length;
        else
          for (var l = 0; l < e.length; l++) {
            var u = At[e[l]];
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
  function Ee(r) {
    for (var t in Dt)
      r[t] && (Dt[t] = r[t]);
  }
  var Yt = Sr(["Function", "RegExp", "Date", "Error", "CanvasGradient", "CanvasPattern", "Image", "Canvas"], function(r, t) {
    return r["[object " + t + "]"] = !0, r;
  }, {}), jr = Sr(["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64"], function(r, t) {
    return r["[object " + t + "Array]"] = !0, r;
  }, {}), mt = Object.prototype.toString, Ge = Array.prototype, Mi = Ge.forEach, Yo = Ge.filter, Pu = Ge.slice, WS = Ge.map, Jv = function() {
  }.constructor, Xo = Jv ? Jv.prototype : null, Iu = "__proto__", US = 2311;
  function Lu() {
    return US++;
  }
  function Qr() {
    for (var r = [], t = 0; t < arguments.length; t++)
      r[t] = arguments[t];
    typeof console < "u" && console.error.apply(console, r);
  }
  function vt(r) {
    if (r == null || typeof r != "object")
      return r;
    var t = r, e = mt.call(r);
    if (e === "[object Array]") {
      if (!Ii(r)) {
        t = [];
        for (var n = 0, i = r.length; n < i; n++)
          t[n] = vt(r[n]);
      }
    } else if (jr[e]) {
      if (!Ii(r)) {
        var a = r.constructor;
        if (a.from)
          t = a.from(r);
        else {
          t = new a(r.length);
          for (var n = 0, i = r.length; n < i; n++)
            t[n] = r[n];
        }
      }
    } else if (!Yt[e] && !Ii(r) && !Ai(r)) {
      t = {};
      for (var o in r)
        r.hasOwnProperty(o) && o !== Iu && (t[o] = vt(r[o]));
    }
    return t;
  }
  function yt(r, t, e) {
    if (!j(t) || !j(r))
      return e ? vt(t) : r;
    for (var n in t)
      if (t.hasOwnProperty(n) && n !== Iu) {
        var i = r[n], a = t[n];
        j(a) && j(i) && !X(a) && !X(i) && !Ai(a) && !Ai(i) && !Ru(a) && !Ru(i) && !Ii(a) && !Ii(i) ? yt(i, a, e) : (e || !(n in r)) && (r[n] = vt(t[n]));
      }
    return r;
  }
  function YS(r, t) {
    for (var e = r[0], n = 1, i = r.length; n < i; n++)
      e = yt(e, r[n], t);
    return e;
  }
  function W(r, t) {
    if (Object.assign)
      Object.assign(r, t);
    else
      for (var e in t)
        t.hasOwnProperty(e) && e !== Iu && (r[e] = t[e]);
    return r;
  }
  function St(r, t, e) {
    for (var n = It(t), i = 0; i < n.length; i++) {
      var a = n[i];
      (e ? t[a] != null : r[a] == null) && (r[a] = t[a]);
    }
    return r;
  }
  var XS = Dt.createCanvas;
  function wt(r, t) {
    if (r) {
      if (r.indexOf)
        return r.indexOf(t);
      for (var e = 0, n = r.length; e < n; e++)
        if (r[e] === t)
          return e;
    }
    return -1;
  }
  function Eu(r, t) {
    var e = r.prototype;
    function n() {
    }
    n.prototype = t.prototype, r.prototype = new n();
    for (var i in e)
      e.hasOwnProperty(i) && (r.prototype[i] = e[i]);
    r.prototype.constructor = r, r.superClass = t;
  }
  function He(r, t, e) {
    if (r = "prototype" in r ? r.prototype : r, t = "prototype" in t ? t.prototype : t, Object.getOwnPropertyNames)
      for (var n = Object.getOwnPropertyNames(t), i = 0; i < n.length; i++) {
        var a = n[i];
        a !== "constructor" && (e ? t[a] != null : r[a] == null) && (r[a] = t[a]);
      }
    else
      St(r, t, e);
  }
  function le(r) {
    return !r || typeof r == "string" ? !1 : typeof r.length == "number";
  }
  function L(r, t, e) {
    if (r && t)
      if (r.forEach && r.forEach === Mi)
        r.forEach(t, e);
      else if (r.length === +r.length)
        for (var n = 0, i = r.length; n < i; n++)
          t.call(e, r[n], n, r);
      else
        for (var a in r)
          r.hasOwnProperty(a) && t.call(e, r[a], a, r);
  }
  function K(r, t, e) {
    if (!r)
      return [];
    if (!t)
      return $o(r);
    if (r.map && r.map === WS)
      return r.map(t, e);
    for (var n = [], i = 0, a = r.length; i < a; i++)
      n.push(t.call(e, r[i], i, r));
    return n;
  }
  function Sr(r, t, e, n) {
    if (r && t) {
      for (var i = 0, a = r.length; i < a; i++)
        e = t.call(n, e, r[i], i, r);
      return e;
    }
  }
  function Ft(r, t, e) {
    if (!r)
      return [];
    if (!t)
      return $o(r);
    if (r.filter && r.filter === Yo)
      return r.filter(t, e);
    for (var n = [], i = 0, a = r.length; i < a; i++)
      t.call(e, r[i], i, r) && n.push(r[i]);
    return n;
  }
  function $S(r, t, e) {
    if (r && t) {
      for (var n = 0, i = r.length; n < i; n++)
        if (t.call(e, r[n], n, r))
          return r[n];
    }
  }
  function It(r) {
    if (!r)
      return [];
    if (Object.keys)
      return Object.keys(r);
    var t = [];
    for (var e in r)
      r.hasOwnProperty(e) && t.push(e);
    return t;
  }
  function qS(r, t) {
    for (var e = [], n = 2; n < arguments.length; n++)
      e[n - 2] = arguments[n];
    return function() {
      return r.apply(t, e.concat(Pu.call(arguments)));
    };
  }
  var Pt = Xo && tt(Xo.bind) ? Xo.call.bind(Xo.bind) : qS;
  function Ot(r) {
    for (var t = [], e = 1; e < arguments.length; e++)
      t[e - 1] = arguments[e];
    return function() {
      return r.apply(this, t.concat(Pu.call(arguments)));
    };
  }
  function X(r) {
    return Array.isArray ? Array.isArray(r) : mt.call(r) === "[object Array]";
  }
  function tt(r) {
    return typeof r == "function";
  }
  function Z(r) {
    return typeof r == "string";
  }
  function da(r) {
    return mt.call(r) === "[object String]";
  }
  function Mt(r) {
    return typeof r == "number";
  }
  function j(r) {
    var t = typeof r;
    return t === "function" || !!r && t === "object";
  }
  function Ru(r) {
    return !!Yt[mt.call(r)];
  }
  function ue(r) {
    return !!jr[mt.call(r)];
  }
  function Ai(r) {
    return typeof r == "object" && typeof r.nodeType == "number" && typeof r.ownerDocument == "object";
  }
  function pa(r) {
    return r.colorStops != null;
  }
  function td(r) {
    return r.image != null;
  }
  function ed(r) {
    return mt.call(r) === "[object RegExp]";
  }
  function Pi(r) {
    return r !== r;
  }
  function Jr() {
    for (var r = [], t = 0; t < arguments.length; t++)
      r[t] = arguments[t];
    for (var e = 0, n = r.length; e < n; e++)
      if (r[e] != null)
        return r[e];
  }
  function ut(r, t) {
    return r ?? t;
  }
  function tn(r, t, e) {
    return r ?? t ?? e;
  }
  function $o(r) {
    for (var t = [], e = 1; e < arguments.length; e++)
      t[e - 1] = arguments[e];
    return Pu.apply(r, t);
  }
  function Ou(r) {
    if (typeof r == "number")
      return [r, r, r, r];
    var t = r.length;
    return t === 2 ? [r[0], r[1], r[0], r[1]] : t === 3 ? [r[0], r[1], r[2], r[1]] : r;
  }
  function st(r, t) {
    if (!r)
      throw new Error(t);
  }
  function ir(r) {
    return r == null ? null : typeof r.trim == "function" ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  }
  var rd = "__ec_primitive__";
  function ga(r) {
    r[rd] = !0;
  }
  function Ii(r) {
    return r[rd];
  }
  var ZS = function() {
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
      return It(this.data);
    }, r.prototype.forEach = function(t) {
      var e = this.data;
      for (var n in e)
        e.hasOwnProperty(n) && t(e[n], n);
    }, r;
  }(), nd = typeof Map == "function";
  function KS() {
    return nd ? /* @__PURE__ */ new Map() : new ZS();
  }
  var id = function() {
    function r(t) {
      var e = X(t);
      this.data = KS();
      var n = this;
      t instanceof r ? t.each(i) : t && L(t, i);
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
      return nd ? Array.from(t) : t;
    }, r.prototype.removeKey = function(t) {
      this.data.delete(t);
    }, r;
  }();
  function lt(r) {
    return new id(r);
  }
  function ad(r, t) {
    for (var e = new r.constructor(r.length + t.length), n = 0; n < r.length; n++)
      e[n] = r[n];
    for (var i = r.length, n = 0; n < t.length; n++)
      e[n + i] = t[n];
    return e;
  }
  function ma(r, t) {
    var e;
    if (Object.create)
      e = Object.create(r);
    else {
      var n = function() {
      };
      n.prototype = r, e = new n();
    }
    return t && W(e, t), e;
  }
  function ku(r) {
    var t = r.style;
    t.webkitUserSelect = "none", t.userSelect = "none", t.webkitTapHighlightColor = "rgba(0,0,0,0)", t["-webkit-touch-callout"] = "none";
  }
  function On(r, t) {
    return r.hasOwnProperty(t);
  }
  function fe() {
  }
  var od = 180 / Math.PI, jS = (Object.freeze || Object)({
    guid: Lu,
    logError: Qr,
    clone: vt,
    merge: yt,
    mergeAll: YS,
    extend: W,
    defaults: St,
    createCanvas: XS,
    indexOf: wt,
    inherits: Eu,
    mixin: He,
    isArrayLike: le,
    each: L,
    map: K,
    reduce: Sr,
    filter: Ft,
    find: $S,
    keys: It,
    bind: Pt,
    curry: Ot,
    isArray: X,
    isFunction: tt,
    isString: Z,
    isStringSafe: da,
    isNumber: Mt,
    isObject: j,
    isBuiltInObject: Ru,
    isTypedArray: ue,
    isDom: Ai,
    isGradientObject: pa,
    isImagePatternObject: td,
    isRegExp: ed,
    eqNaN: Pi,
    retrieve: Jr,
    retrieve2: ut,
    retrieve3: tn,
    slice: $o,
    normalizeCssArray: Ou,
    assert: st,
    trim: ir,
    setAsPrimitive: ga,
    isPrimitive: Ii,
    HashMap: id,
    createHashMap: lt,
    concatArray: ad,
    createObject: ma,
    disableUserSelect: ku,
    hasOwn: On,
    noop: fe,
    RADIAN_TO_DEGREE: od
  });
  function kn(r, t) {
    return r == null && (r = 0), t == null && (t = 0), [r, t];
  }
  function QS(r, t) {
    return r[0] = t[0], r[1] = t[1], r;
  }
  function sd(r) {
    return [r[0], r[1]];
  }
  function JS(r, t, e) {
    return r[0] = t, r[1] = e, r;
  }
  function Nu(r, t, e) {
    return r[0] = t[0] + e[0], r[1] = t[1] + e[1], r;
  }
  function tw(r, t, e, n) {
    return r[0] = t[0] + e[0] * n, r[1] = t[1] + e[1] * n, r;
  }
  function ld(r, t, e) {
    return r[0] = t[0] - e[0], r[1] = t[1] - e[1], r;
  }
  function Bu(r) {
    return Math.sqrt(Fu(r));
  }
  var ew = Bu;
  function Fu(r) {
    return r[0] * r[0] + r[1] * r[1];
  }
  var rw = Fu;
  function nw(r, t, e) {
    return r[0] = t[0] * e[0], r[1] = t[1] * e[1], r;
  }
  function iw(r, t, e) {
    return r[0] = t[0] / e[0], r[1] = t[1] / e[1], r;
  }
  function aw(r, t) {
    return r[0] * t[0] + r[1] * t[1];
  }
  function qo(r, t, e) {
    return r[0] = t[0] * e, r[1] = t[1] * e, r;
  }
  function ud(r, t) {
    var e = Bu(t);
    return e === 0 ? (r[0] = 0, r[1] = 0) : (r[0] = t[0] / e, r[1] = t[1] / e), r;
  }
  function Zo(r, t) {
    return Math.sqrt((r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]));
  }
  var Ko = Zo;
  function fd(r, t) {
    return (r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]);
  }
  var Nn = fd;
  function ow(r, t) {
    return r[0] = -t[0], r[1] = -t[1], r;
  }
  function jo(r, t, e, n) {
    return r[0] = t[0] + n * (e[0] - t[0]), r[1] = t[1] + n * (e[1] - t[1]), r;
  }
  function he(r, t, e) {
    var n = t[0], i = t[1];
    return r[0] = e[0] * n + e[2] * i + e[4], r[1] = e[1] * n + e[3] * i + e[5], r;
  }
  function en(r, t, e) {
    return r[0] = Math.min(t[0], e[0]), r[1] = Math.min(t[1], e[1]), r;
  }
  function rn(r, t, e) {
    return r[0] = Math.max(t[0], e[0]), r[1] = Math.max(t[1], e[1]), r;
  }
  var sw = (Object.freeze || Object)({
    create: kn,
    copy: QS,
    clone: sd,
    set: JS,
    add: Nu,
    scaleAndAdd: tw,
    sub: ld,
    len: Bu,
    length: ew,
    lenSquare: Fu,
    lengthSquare: rw,
    mul: nw,
    div: iw,
    dot: aw,
    scale: qo,
    normalize: ud,
    distance: Zo,
    dist: Ko,
    distanceSquare: fd,
    distSquare: Nn,
    negate: ow,
    lerp: jo,
    applyTransform: he,
    min: en,
    max: rn
  }), Li = function() {
    function r(t, e) {
      this.target = t, this.topTarget = e && e.topTarget;
    }
    return r;
  }(), lw = function() {
    function r(t) {
      this.handler = t, t.on("mousedown", this._dragStart, this), t.on("mousemove", this._drag, this), t.on("mouseup", this._dragEnd, this);
    }
    return r.prototype._dragStart = function(t) {
      for (var e = t.target; e && !e.draggable; )
        e = e.parent || e.__hostTarget;
      e && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.handler.dispatchToElement(new Li(e, t), "dragstart", t.event));
    }, r.prototype._drag = function(t) {
      var e = this._draggingTarget;
      if (e) {
        var n = t.offsetX, i = t.offsetY, a = n - this._x, o = i - this._y;
        this._x = n, this._y = i, e.drift(a, o, t), this.handler.dispatchToElement(new Li(e, t), "drag", t.event);
        var s = this.handler.findHover(n, i, e).target, l = this._dropTarget;
        this._dropTarget = s, e !== s && (l && s !== l && this.handler.dispatchToElement(new Li(l, t), "dragleave", t.event), s && s !== l && this.handler.dispatchToElement(new Li(s, t), "dragenter", t.event));
      }
    }, r.prototype._dragEnd = function(t) {
      var e = this._draggingTarget;
      e && (e.dragging = !1), this.handler.dispatchToElement(new Li(e, t), "dragend", t.event), this._dropTarget && this.handler.dispatchToElement(new Li(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;
    }, r;
  }(), wr = function() {
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
  }(), uw = Math.log(2);
  function zu(r, t, e, n, i, a) {
    var o = n + "-" + i, s = r.length;
    if (a.hasOwnProperty(o))
      return a[o];
    if (t === 1) {
      var l = Math.round(Math.log((1 << s) - 1 & ~i) / uw);
      return r[e][l];
    }
    for (var u = n | 1 << e, f = e + 1; n & 1 << f; )
      f++;
    for (var h = 0, v = 0, c = 0; v < s; v++) {
      var d = 1 << v;
      d & i || (h += (c % 2 ? -1 : 1) * r[e][v] * zu(r, t - 1, f, u, i | d, a), c++);
    }
    return a[o] = h, h;
  }
  function hd(r, t) {
    var e = [[r[0], r[1], 1, 0, 0, 0, -t[0] * r[0], -t[0] * r[1]], [0, 0, 0, r[0], r[1], 1, -t[1] * r[0], -t[1] * r[1]], [r[2], r[3], 1, 0, 0, 0, -t[2] * r[2], -t[2] * r[3]], [0, 0, 0, r[2], r[3], 1, -t[3] * r[2], -t[3] * r[3]], [r[4], r[5], 1, 0, 0, 0, -t[4] * r[4], -t[4] * r[5]], [0, 0, 0, r[4], r[5], 1, -t[5] * r[4], -t[5] * r[5]], [r[6], r[7], 1, 0, 0, 0, -t[6] * r[6], -t[6] * r[7]], [0, 0, 0, r[6], r[7], 1, -t[7] * r[6], -t[7] * r[7]]], n = {}, i = zu(e, 8, 0, 0, 0, n);
    if (i !== 0) {
      for (var a = [], o = 0; o < 8; o++)
        for (var s = 0; s < 8; s++)
          a[s] == null && (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * zu(e, 7, o === 0 ? 1 : 0, 1 << o, 1 << s, n) / i * t[o];
      return function(l, u, f) {
        var h = u * a[6] + f * a[7] + 1;
        l[0] = (u * a[0] + f * a[1] + a[2]) / h, l[1] = (u * a[3] + f * a[4] + a[5]) / h;
      };
    }
  }
  var cd = "___zrEVENTSAVED", Vu = [];
  function fw(r, t, e, n, i) {
    return Gu(Vu, t, n, i, !0) && Gu(r, e, Vu[0], Vu[1]);
  }
  function Gu(r, t, e, n, i) {
    if (t.getBoundingClientRect && O.domSupported && !vd(t)) {
      var a = t[cd] || (t[cd] = {}), o = hw(t, a), s = cw(o, a, i);
      if (s)
        return s(r, e, n), !0;
    }
    return !1;
  }
  function hw(r, t) {
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
  function cw(r, t, e) {
    for (var n = e ? "invTrans" : "trans", i = t[n], a = t.srcCoords, o = [], s = [], l = !0, u = 0; u < 4; u++) {
      var f = r[u].getBoundingClientRect(), h = 2 * u, v = f.left, c = f.top;
      o.push(v, c), l = l && a && v === a[h] && c === a[h + 1], s.push(r[u].offsetLeft, r[u].offsetTop);
    }
    return l && i ? i : (t.srcCoords = o, t[n] = e ? hd(s, o) : hd(o, s));
  }
  function vd(r) {
    return r.nodeName.toUpperCase() === "CANVAS";
  }
  var vw = /([&<>"'])/g, dw = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  function Re(r) {
    return r == null ? "" : (r + "").replace(vw, function(t, e) {
      return dw[e];
    });
  }
  var pw = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Hu = [], gw = O.browser.firefox && +O.browser.version.split(".")[0] < 39;
  function Wu(r, t, e, n) {
    return e = e || {}, n ? dd(r, t, e) : gw && t.layerX != null && t.layerX !== t.offsetX ? (e.zrX = t.layerX, e.zrY = t.layerY) : t.offsetX != null ? (e.zrX = t.offsetX, e.zrY = t.offsetY) : dd(r, t, e), e;
  }
  function dd(r, t, e) {
    if (O.domSupported && r.getBoundingClientRect) {
      var n = t.clientX, i = t.clientY;
      if (vd(r)) {
        var a = r.getBoundingClientRect();
        e.zrX = n - a.left, e.zrY = i - a.top;
        return;
      } else if (Gu(Hu, r, n, i)) {
        e.zrX = Hu[0], e.zrY = Hu[1];
        return;
      }
    }
    e.zrX = e.zrY = 0;
  }
  function Uu(r) {
    return r || window.event;
  }
  function We(r, t, e) {
    if (t = Uu(t), t.zrX != null)
      return t;
    var n = t.type, i = n && n.indexOf("touch") >= 0;
    if (i) {
      var o = n !== "touchend" ? t.targetTouches[0] : t.changedTouches[0];
      o && Wu(r, o, t, e);
    } else {
      Wu(r, t, t, e);
      var a = mw(t);
      t.zrDelta = a ? a / 120 : -(t.detail || 0) / 3;
    }
    var s = t.button;
    return t.which == null && s !== void 0 && pw.test(t.type) && (t.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), t;
  }
  function mw(r) {
    var t = r.wheelDelta;
    if (t)
      return t;
    var e = r.deltaX, n = r.deltaY;
    if (e == null || n == null)
      return t;
    var i = Math.abs(n !== 0 ? n : e), a = n > 0 ? -1 : n < 0 ? 1 : e > 0 ? -1 : 1;
    return 3 * i * a;
  }
  function yw(r, t, e, n) {
    r.addEventListener(t, e, n);
  }
  function _w(r, t, e, n) {
    r.removeEventListener(t, e, n);
  }
  var pd = function(r) {
    r.preventDefault(), r.stopPropagation(), r.cancelBubble = !0;
  }, Sw = function() {
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
          var l = i[o], u = Wu(n, l, {});
          a.points.push([u.zrX, u.zrY]), a.touches.push(l);
        }
        this._track.push(a);
      }
    }, r.prototype._recognize = function(t) {
      for (var e in Yu)
        if (Yu.hasOwnProperty(e)) {
          var n = Yu[e](this._track, t);
          if (n)
            return n;
        }
    }, r;
  }();
  function gd(r) {
    var t = r[1][0] - r[0][0], e = r[1][1] - r[0][1];
    return Math.sqrt(t * t + e * e);
  }
  function ww(r) {
    return [(r[0][0] + r[1][0]) / 2, (r[0][1] + r[1][1]) / 2];
  }
  var Yu = {
    pinch: function(r, t) {
      var e = r.length;
      if (e) {
        var n = (r[e - 1] || {}).points, i = (r[e - 2] || {}).points || n;
        if (i && i.length > 1 && n && n.length > 1) {
          var a = gd(n) / gd(i);
          !isFinite(a) && (a = 1), t.pinchScale = a;
          var o = ww(n);
          return t.pinchX = o[0], t.pinchY = o[1], {
            type: "pinch",
            target: r[0].target,
            event: t
          };
        }
      }
    }
  };
  function Bn() {
    return [1, 0, 0, 1, 0, 0];
  }
  function ya(r) {
    return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 1, r[4] = 0, r[5] = 0, r;
  }
  function Xu(r, t) {
    return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4], r[5] = t[5], r;
  }
  function nn(r, t, e) {
    var n = t[0] * e[0] + t[2] * e[1], i = t[1] * e[0] + t[3] * e[1], a = t[0] * e[2] + t[2] * e[3], o = t[1] * e[2] + t[3] * e[3], s = t[0] * e[4] + t[2] * e[5] + t[4], l = t[1] * e[4] + t[3] * e[5] + t[5];
    return r[0] = n, r[1] = i, r[2] = a, r[3] = o, r[4] = s, r[5] = l, r;
  }
  function Qo(r, t, e) {
    return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4] + e[0], r[5] = t[5] + e[1], r;
  }
  function Jo(r, t, e) {
    var n = t[0], i = t[2], a = t[4], o = t[1], s = t[3], l = t[5], u = Math.sin(e), f = Math.cos(e);
    return r[0] = n * f + o * u, r[1] = -n * u + o * f, r[2] = i * f + s * u, r[3] = -i * u + f * s, r[4] = f * a + u * l, r[5] = f * l - u * a, r;
  }
  function md(r, t, e) {
    var n = e[0], i = e[1];
    return r[0] = t[0] * n, r[1] = t[1] * i, r[2] = t[2] * n, r[3] = t[3] * i, r[4] = t[4] * n, r[5] = t[5] * i, r;
  }
  function Ei(r, t) {
    var e = t[0], n = t[2], i = t[4], a = t[1], o = t[3], s = t[5], l = e * o - a * n;
    return l ? (l = 1 / l, r[0] = o * l, r[1] = -a * l, r[2] = -n * l, r[3] = e * l, r[4] = (n * s - o * i) * l, r[5] = (a * i - e * s) * l, r) : null;
  }
  function bw(r) {
    var t = Bn();
    return Xu(t, r), t;
  }
  var xw = (Object.freeze || Object)({
    create: Bn,
    identity: ya,
    copy: Xu,
    mul: nn,
    translate: Qo,
    rotate: Jo,
    scale: md,
    invert: Ei,
    clone: bw
  }), et = function() {
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
  }(), ts = Math.min, es = Math.max, Fn = new et(), zn = new et(), Vn = new et(), Gn = new et(), _a = new et(), Sa = new et(), dt = function() {
    function r(t, e, n, i) {
      n < 0 && (t = t + n, n = -n), i < 0 && (e = e + i, i = -i), this.x = t, this.y = e, this.width = n, this.height = i;
    }
    return r.prototype.union = function(t) {
      var e = ts(t.x, this.x), n = ts(t.y, this.y);
      isFinite(this.x) && isFinite(this.width) ? this.width = es(t.x + t.width, this.x + this.width) - e : this.width = t.width, isFinite(this.y) && isFinite(this.height) ? this.height = es(t.y + t.height, this.y + this.height) - n : this.height = t.height, this.x = e, this.y = n;
    }, r.prototype.applyTransform = function(t) {
      r.applyTransform(this, this, t);
    }, r.prototype.calculateTransform = function(t) {
      var e = this, n = t.width / e.width, i = t.height / e.height, a = Bn();
      return Qo(a, a, [-e.x, -e.y]), md(a, a, [n, i]), Qo(a, a, [t.x, t.y]), a;
    }, r.prototype.intersect = function(t, e) {
      if (!t)
        return !1;
      t instanceof r || (t = r.create(t));
      var n = this, i = n.x, a = n.x + n.width, o = n.y, s = n.y + n.height, l = t.x, u = t.x + t.width, f = t.y, h = t.y + t.height, v = !(a < l || u < i || s < f || h < o);
      if (e) {
        var c = 1 / 0, d = 0, g = Math.abs(a - l), p = Math.abs(u - i), m = Math.abs(s - f), _ = Math.abs(h - o), S = Math.min(g, p), b = Math.min(m, _);
        a < l || u < i ? S > d && (d = S, g < p ? et.set(Sa, -g, 0) : et.set(Sa, p, 0)) : S < c && (c = S, g < p ? et.set(_a, g, 0) : et.set(_a, -p, 0)), s < f || h < o ? b > d && (d = b, m < _ ? et.set(Sa, 0, -m) : et.set(Sa, 0, _)) : S < c && (c = S, m < _ ? et.set(_a, 0, m) : et.set(_a, 0, -_));
      }
      return e && et.copy(e, v ? _a : Sa), v;
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
      Fn.x = Vn.x = e.x, Fn.y = Gn.y = e.y, zn.x = Gn.x = e.x + e.width, zn.y = Vn.y = e.y + e.height, Fn.transform(n), Gn.transform(n), zn.transform(n), Vn.transform(n), t.x = ts(Fn.x, zn.x, Vn.x, Gn.x), t.y = ts(Fn.y, zn.y, Vn.y, Gn.y);
      var l = es(Fn.x, zn.x, Vn.x, Gn.x), u = es(Fn.y, zn.y, Vn.y, Gn.y);
      t.width = l - t.x, t.height = u - t.y;
    }, r;
  }(), yd = "silent";
  function Tw(r, t, e) {
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
      stop: Cw
    };
  }
  function Cw() {
    pd(this.event);
  }
  var Dw = function(r) {
    x(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.handler = null, e;
    }
    return t.prototype.dispose = function() {
    }, t.prototype.setCursor = function() {
    }, t;
  }(wr), wa = function() {
    function r(t, e) {
      this.x = t, this.y = e;
    }
    return r;
  }(), Mw = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"], $u = new dt(0, 0, 0, 0), _d = function(r) {
    x(t, r);
    function t(e, n, i, a, o) {
      var s = r.call(this) || this;
      return s._hovered = new wa(0, 0), s.storage = e, s.painter = n, s.painterRoot = a, s._pointerSize = o, i = i || new Dw(), s.proxy = null, s.setHandlerProxy(i), s._draggingMgr = new lw(s), s;
    }
    return t.prototype.setHandlerProxy = function(e) {
      this.proxy && this.proxy.dispose(), e && (L(Mw, function(n) {
        e.on && e.on(n, this[n], this);
      }, this), e.handler = this), this.proxy = e;
    }, t.prototype.mousemove = function(e) {
      var n = e.zrX, i = e.zrY, a = wd(this, n, i), o = this._hovered, s = o.target;
      s && !s.__zr && (o = this.findHover(o.x, o.y), s = o.target);
      var l = this._hovered = a ? new wa(n, i) : this.findHover(n, i), u = l.target, f = this.proxy;
      f.setCursor && f.setCursor(u ? u.cursor : "default"), s && u !== s && this.dispatchToElement(o, "mouseout", e), this.dispatchToElement(l, "mousemove", e), u && u !== s && this.dispatchToElement(l, "mouseover", e);
    }, t.prototype.mouseout = function(e) {
      var n = e.zrEventControl;
      n !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", e), n !== "no_globalout" && this.trigger("globalout", {
        type: "globalout",
        event: e
      });
    }, t.prototype.resize = function() {
      this._hovered = new wa(0, 0);
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
        for (var o = "on" + n, s = Tw(n, e, i); a && (a[o] && (s.cancelBubble = !!a[o].call(a, s)), a.trigger(n, s), a = a.__hostTarget ? a.__hostTarget : a.parent, !s.cancelBubble); )
          ;
        s.cancelBubble || (this.trigger(n, s), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function(l) {
          typeof l[o] == "function" && l[o].call(l, s), l.trigger && l.trigger(n, s);
        }));
      }
    }, t.prototype.findHover = function(e, n, i) {
      var a = this.storage.getDisplayList(), o = new wa(e, n);
      if (Sd(a, o, e, n, i), this._pointerSize && !o.target) {
        for (var s = [], l = this._pointerSize, u = l / 2, f = new dt(e - u, n - u, l, l), h = a.length - 1; h >= 0; h--) {
          var v = a[h];
          v !== i && !v.ignore && !v.ignoreCoarsePointer && (!v.parent || !v.parent.ignoreCoarsePointer) && ($u.copy(v.getBoundingRect()), v.transform && $u.applyTransform(v.transform), $u.intersect(f) && s.push(v));
        }
        if (s.length)
          for (var c = 4, d = Math.PI / 12, g = Math.PI * 2, p = 0; p < u; p += c)
            for (var m = 0; m < g; m += d) {
              var _ = e + p * Math.cos(m), S = n + p * Math.sin(m);
              if (Sd(s, o, _, S, i), o.target)
                return o;
            }
      }
      return o;
    }, t.prototype.processGesture = function(e, n) {
      this._gestureMgr || (this._gestureMgr = new Sw());
      var i = this._gestureMgr;
      n === "start" && i.clear();
      var a = i.recognize(e, this.findHover(e.zrX, e.zrY, null).target, this.proxy.dom);
      if (n === "end" && i.clear(), a) {
        var o = a.type;
        e.gestureEvent = o;
        var s = new wa();
        s.target = a.target, this.dispatchToElement(s, o, a.event);
      }
    }, t;
  }(wr);
  L(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(r) {
    _d.prototype[r] = function(t) {
      var e = t.zrX, n = t.zrY, i = wd(this, e, n), a, o;
      if ((r !== "mouseup" || !i) && (a = this.findHover(e, n), o = a.target), r === "mousedown")
        this._downEl = o, this._downPoint = [t.zrX, t.zrY], this._upEl = o;
      else if (r === "mouseup")
        this._upEl = o;
      else if (r === "click") {
        if (this._downEl !== this._upEl || !this._downPoint || Ko(this._downPoint, [t.zrX, t.zrY]) > 4)
          return;
        this._downPoint = null;
      }
      this.dispatchToElement(a, r, t);
    };
  });
  function Aw(r, t, e) {
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
      return i ? yd : !0;
    }
    return !1;
  }
  function Sd(r, t, e, n, i) {
    for (var a = r.length - 1; a >= 0; a--) {
      var o = r[a], s = void 0;
      if (o !== i && !o.ignore && (s = Aw(o, e, n)) && (!t.topTarget && (t.topTarget = o), s !== yd)) {
        t.target = o;
        break;
      }
    }
  }
  function wd(r, t, e) {
    var n = r.painter;
    return t < 0 || t > n.getWidth() || e < 0 || e > n.getHeight();
  }
  var bd = 32, ba = 7;
  function Pw(r) {
    for (var t = 0; r >= bd; )
      t |= r & 1, r >>= 1;
    return r + t;
  }
  function xd(r, t, e, n) {
    var i = t + 1;
    if (i === e)
      return 1;
    if (n(r[i++], r[t]) < 0) {
      for (; i < e && n(r[i], r[i - 1]) < 0; )
        i++;
      Iw(r, t, i);
    } else
      for (; i < e && n(r[i], r[i - 1]) >= 0; )
        i++;
    return i - t;
  }
  function Iw(r, t, e) {
    for (e--; t < e; ) {
      var n = r[t];
      r[t++] = r[e], r[e--] = n;
    }
  }
  function Td(r, t, e, n, i) {
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
  function qu(r, t, e, n, i, a) {
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
  function Zu(r, t, e, n, i, a) {
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
  function Lw(r, t) {
    var e = ba, n, i, a = 0, o = [];
    n = [], i = [];
    function s(c, d) {
      n[a] = c, i[a] = d, a += 1;
    }
    function l() {
      for (; a > 1; ) {
        var c = a - 2;
        if (c >= 1 && i[c - 1] <= i[c] + i[c + 1] || c >= 2 && i[c - 2] <= i[c] + i[c - 1])
          i[c - 1] < i[c + 1] && c--;
        else if (i[c] > i[c + 1])
          break;
        f(c);
      }
    }
    function u() {
      for (; a > 1; ) {
        var c = a - 2;
        c > 0 && i[c - 1] < i[c + 1] && c--, f(c);
      }
    }
    function f(c) {
      var d = n[c], g = i[c], p = n[c + 1], m = i[c + 1];
      i[c] = g + m, c === a - 3 && (n[c + 1] = n[c + 2], i[c + 1] = i[c + 2]), a--;
      var _ = Zu(r[p], r, d, g, 0, t);
      d += _, g -= _, g !== 0 && (m = qu(r[d + g - 1], r, p, m, m - 1, t), m !== 0 && (g <= m ? h(d, g, p, m) : v(d, g, p, m)));
    }
    function h(c, d, g, p) {
      var m = 0;
      for (m = 0; m < d; m++)
        o[m] = r[c + m];
      var _ = 0, S = g, b = c;
      if (r[b++] = r[S++], --p === 0) {
        for (m = 0; m < d; m++)
          r[b + m] = o[_ + m];
        return;
      }
      if (d === 1) {
        for (m = 0; m < p; m++)
          r[b + m] = r[S + m];
        r[b + p] = o[_];
        return;
      }
      for (var C = e, T, D, M; ; ) {
        T = 0, D = 0, M = !1;
        do
          if (t(r[S], o[_]) < 0) {
            if (r[b++] = r[S++], D++, T = 0, --p === 0) {
              M = !0;
              break;
            }
          } else if (r[b++] = o[_++], T++, D = 0, --d === 1) {
            M = !0;
            break;
          }
        while ((T | D) < C);
        if (M)
          break;
        do {
          if (T = Zu(r[S], o, _, d, 0, t), T !== 0) {
            for (m = 0; m < T; m++)
              r[b + m] = o[_ + m];
            if (b += T, _ += T, d -= T, d <= 1) {
              M = !0;
              break;
            }
          }
          if (r[b++] = r[S++], --p === 0) {
            M = !0;
            break;
          }
          if (D = qu(o[_], r, S, p, 0, t), D !== 0) {
            for (m = 0; m < D; m++)
              r[b + m] = r[S + m];
            if (b += D, S += D, p -= D, p === 0) {
              M = !0;
              break;
            }
          }
          if (r[b++] = o[_++], --d === 1) {
            M = !0;
            break;
          }
          C--;
        } while (T >= ba || D >= ba);
        if (M)
          break;
        C < 0 && (C = 0), C += 2;
      }
      if (e = C, e < 1 && (e = 1), d === 1) {
        for (m = 0; m < p; m++)
          r[b + m] = r[S + m];
        r[b + p] = o[_];
      } else {
        if (d === 0)
          throw new Error();
        for (m = 0; m < d; m++)
          r[b + m] = o[_ + m];
      }
    }
    function v(c, d, g, p) {
      var m = 0;
      for (m = 0; m < p; m++)
        o[m] = r[g + m];
      var _ = c + d - 1, S = p - 1, b = g + p - 1, C = 0, T = 0;
      if (r[b--] = r[_--], --d === 0) {
        for (C = b - (p - 1), m = 0; m < p; m++)
          r[C + m] = o[m];
        return;
      }
      if (p === 1) {
        for (b -= d, _ -= d, T = b + 1, C = _ + 1, m = d - 1; m >= 0; m--)
          r[T + m] = r[C + m];
        r[b] = o[S];
        return;
      }
      for (var D = e; ; ) {
        var M = 0, P = 0, E = !1;
        do
          if (t(o[S], r[_]) < 0) {
            if (r[b--] = r[_--], M++, P = 0, --d === 0) {
              E = !0;
              break;
            }
          } else if (r[b--] = o[S--], P++, M = 0, --p === 1) {
            E = !0;
            break;
          }
        while ((M | P) < D);
        if (E)
          break;
        do {
          if (M = d - Zu(o[S], r, c, d, d - 1, t), M !== 0) {
            for (b -= M, _ -= M, d -= M, T = b + 1, C = _ + 1, m = M - 1; m >= 0; m--)
              r[T + m] = r[C + m];
            if (d === 0) {
              E = !0;
              break;
            }
          }
          if (r[b--] = o[S--], --p === 1) {
            E = !0;
            break;
          }
          if (P = p - qu(r[_], o, 0, p, p - 1, t), P !== 0) {
            for (b -= P, S -= P, p -= P, T = b + 1, C = S + 1, m = 0; m < P; m++)
              r[T + m] = o[C + m];
            if (p <= 1) {
              E = !0;
              break;
            }
          }
          if (r[b--] = r[_--], --d === 0) {
            E = !0;
            break;
          }
          D--;
        } while (M >= ba || P >= ba);
        if (E)
          break;
        D < 0 && (D = 0), D += 2;
      }
      if (e = D, e < 1 && (e = 1), p === 1) {
        for (b -= d, _ -= d, T = b + 1, C = _ + 1, m = d - 1; m >= 0; m--)
          r[T + m] = r[C + m];
        r[b] = o[S];
      } else {
        if (p === 0)
          throw new Error();
        for (C = b - (p - 1), m = 0; m < p; m++)
          r[C + m] = o[m];
      }
    }
    return {
      mergeRuns: l,
      forceMergeRuns: u,
      pushRun: s
    };
  }
  function rs(r, t, e, n) {
    e || (e = 0), n || (n = r.length);
    var i = n - e;
    if (!(i < 2)) {
      var a = 0;
      if (i < bd) {
        a = xd(r, e, n, t), Td(r, e, n, e + a, t);
        return;
      }
      var o = Lw(r, t), s = Pw(i);
      do {
        if (a = xd(r, e, n, t), a < s) {
          var l = i;
          l > s && (l = s), Td(r, e, e + l, e + a, t), a = l;
        }
        o.pushRun(e, a), o.mergeRuns(), i -= a, e += a;
      } while (i !== 0);
      o.forceMergeRuns();
    }
  }
  var Oe = 1, xa = 2, Ri = 4, Cd = !1;
  function Ku() {
    Cd || (Cd = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"));
  }
  function Dd(r, t) {
    return r.zlevel === t.zlevel ? r.z === t.z ? r.z2 - t.z2 : r.z - t.z : r.zlevel - t.zlevel;
  }
  var Ew = function() {
    function r() {
      this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = Dd;
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
      n.length = this._displayListLen, rs(n, Dd);
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
            t.__dirty && (u.__dirty |= Oe), this._updateAndAddDisplayable(u, e, n);
          }
          t.__dirty = 0;
        } else {
          var f = t;
          e && e.length ? f.__clipPaths = e : f.__clipPaths && f.__clipPaths.length > 0 && (f.__clipPaths = []), isNaN(f.z) && (Ku(), f.z = 0), isNaN(f.z2) && (Ku(), f.z2 = 0), isNaN(f.zlevel) && (Ku(), f.zlevel = 0), this._displayList[this._displayListLen++] = f;
        }
        var h = t.getDecalElement && t.getDecalElement();
        h && this._updateAndAddDisplayable(h, e, n);
        var v = t.getTextGuideLine();
        v && this._updateAndAddDisplayable(v, e, n);
        var c = t.getTextContent();
        c && this._updateAndAddDisplayable(c, e, n);
      }
    }, r.prototype.addRoot = function(t) {
      t.__zr && t.__zr.storage === this || this._roots.push(t);
    }, r.prototype.delRoot = function(t) {
      if (t instanceof Array) {
        for (var e = 0, n = t.length; e < n; e++)
          this.delRoot(t[e]);
        return;
      }
      var i = wt(this._roots, t);
      i >= 0 && this._roots.splice(i, 1);
    }, r.prototype.delAllRoots = function() {
      this._roots = [], this._displayList = [], this._displayListLen = 0;
    }, r.prototype.getRoots = function() {
      return this._roots;
    }, r.prototype.dispose = function() {
      this._displayList = null, this._roots = null;
    }, r;
  }(), Md;
  Md = O.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(r) {
    return setTimeout(r, 16);
  };
  var ju = Md, Ta = {
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
      return 1 - Ta.bounceOut(1 - r);
    },
    bounceOut: function(r) {
      return r < 1 / 2.75 ? 7.5625 * r * r : r < 2 / 2.75 ? 7.5625 * (r -= 1.5 / 2.75) * r + 0.75 : r < 2.5 / 2.75 ? 7.5625 * (r -= 2.25 / 2.75) * r + 0.9375 : 7.5625 * (r -= 2.625 / 2.75) * r + 0.984375;
    },
    bounceInOut: function(r) {
      return r < 0.5 ? Ta.bounceIn(r * 2) * 0.5 : Ta.bounceOut(r * 2 - 1) * 0.5 + 0.5;
    }
  }, ns = Math.pow, an = Math.sqrt, is = 1e-8, Ad = 1e-4, Pd = an(3), as = 1 / 3, br = kn(), Ue = kn(), Oi = kn();
  function on(r) {
    return r > -is && r < is;
  }
  function Id(r) {
    return r > is || r < -is;
  }
  function Xt(r, t, e, n, i) {
    var a = 1 - i;
    return a * a * (a * r + 3 * i * t) + i * i * (i * n + 3 * a * e);
  }
  function Ld(r, t, e, n, i) {
    var a = 1 - i;
    return 3 * (((t - r) * a + 2 * (e - t) * i) * a + (n - e) * i * i);
  }
  function os(r, t, e, n, i, a) {
    var o = n + 3 * (t - e) - r, s = 3 * (e - t * 2 + r), l = 3 * (t - r), u = r - i, f = s * s - 3 * o * l, h = s * l - 9 * o * u, v = l * l - 3 * s * u, c = 0;
    if (on(f) && on(h))
      if (on(s))
        a[0] = 0;
      else {
        var d = -l / s;
        d >= 0 && d <= 1 && (a[c++] = d);
      }
    else {
      var g = h * h - 4 * f * v;
      if (on(g)) {
        var p = h / f, d = -s / o + p, m = -p / 2;
        d >= 0 && d <= 1 && (a[c++] = d), m >= 0 && m <= 1 && (a[c++] = m);
      } else if (g > 0) {
        var _ = an(g), S = f * s + 1.5 * o * (-h + _), b = f * s + 1.5 * o * (-h - _);
        S < 0 ? S = -ns(-S, as) : S = ns(S, as), b < 0 ? b = -ns(-b, as) : b = ns(b, as);
        var d = (-s - (S + b)) / (3 * o);
        d >= 0 && d <= 1 && (a[c++] = d);
      } else {
        var C = (2 * f * s - 3 * o * h) / (2 * an(f * f * f)), T = Math.acos(C) / 3, D = an(f), M = Math.cos(T), d = (-s - 2 * D * M) / (3 * o), m = (-s + D * (M + Pd * Math.sin(T))) / (3 * o), P = (-s + D * (M - Pd * Math.sin(T))) / (3 * o);
        d >= 0 && d <= 1 && (a[c++] = d), m >= 0 && m <= 1 && (a[c++] = m), P >= 0 && P <= 1 && (a[c++] = P);
      }
    }
    return c;
  }
  function Ed(r, t, e, n, i) {
    var a = 6 * e - 12 * t + 6 * r, o = 9 * t + 3 * n - 3 * r - 9 * e, s = 3 * t - 3 * r, l = 0;
    if (on(o)) {
      if (Id(a)) {
        var u = -s / a;
        u >= 0 && u <= 1 && (i[l++] = u);
      }
    } else {
      var f = a * a - 4 * o * s;
      if (on(f))
        i[0] = -a / (2 * o);
      else if (f > 0) {
        var h = an(f), u = (-a + h) / (2 * o), v = (-a - h) / (2 * o);
        u >= 0 && u <= 1 && (i[l++] = u), v >= 0 && v <= 1 && (i[l++] = v);
      }
    }
    return l;
  }
  function ss(r, t, e, n, i, a) {
    var o = (t - r) * i + r, s = (e - t) * i + t, l = (n - e) * i + e, u = (s - o) * i + o, f = (l - s) * i + s, h = (f - u) * i + u;
    a[0] = r, a[1] = o, a[2] = u, a[3] = h, a[4] = h, a[5] = f, a[6] = l, a[7] = n;
  }
  function Rd(r, t, e, n, i, a, o, s, l, u, f) {
    var h, v = 5e-3, c = 1 / 0, d, g, p, m;
    br[0] = l, br[1] = u;
    for (var _ = 0; _ < 1; _ += 0.05)
      Ue[0] = Xt(r, e, i, o, _), Ue[1] = Xt(t, n, a, s, _), p = Nn(br, Ue), p < c && (h = _, c = p);
    c = 1 / 0;
    for (var S = 0; S < 32 && !(v < Ad); S++)
      d = h - v, g = h + v, Ue[0] = Xt(r, e, i, o, d), Ue[1] = Xt(t, n, a, s, d), p = Nn(Ue, br), d >= 0 && p < c ? (h = d, c = p) : (Oi[0] = Xt(r, e, i, o, g), Oi[1] = Xt(t, n, a, s, g), m = Nn(Oi, br), g <= 1 && m < c ? (h = g, c = m) : v *= 0.5);
    return f && (f[0] = Xt(r, e, i, o, h), f[1] = Xt(t, n, a, s, h)), an(c);
  }
  function Rw(r, t, e, n, i, a, o, s, l) {
    for (var u = r, f = t, h = 0, v = 1 / l, c = 1; c <= l; c++) {
      var d = c * v, g = Xt(r, e, i, o, d), p = Xt(t, n, a, s, d), m = g - u, _ = p - f;
      h += Math.sqrt(m * m + _ * _), u = g, f = p;
    }
    return h;
  }
  function te(r, t, e, n) {
    var i = 1 - n;
    return i * (i * r + 2 * n * t) + n * n * e;
  }
  function Od(r, t, e, n) {
    return 2 * ((1 - n) * (t - r) + n * (e - t));
  }
  function Ow(r, t, e, n, i) {
    var a = r - 2 * t + e, o = 2 * (t - r), s = r - n, l = 0;
    if (on(a)) {
      if (Id(o)) {
        var u = -s / o;
        u >= 0 && u <= 1 && (i[l++] = u);
      }
    } else {
      var f = o * o - 4 * a * s;
      if (on(f)) {
        var u = -o / (2 * a);
        u >= 0 && u <= 1 && (i[l++] = u);
      } else if (f > 0) {
        var h = an(f), u = (-o + h) / (2 * a), v = (-o - h) / (2 * a);
        u >= 0 && u <= 1 && (i[l++] = u), v >= 0 && v <= 1 && (i[l++] = v);
      }
    }
    return l;
  }
  function kd(r, t, e) {
    var n = r + e - 2 * t;
    return n === 0 ? 0.5 : (r - t) / n;
  }
  function ls(r, t, e, n, i) {
    var a = (t - r) * n + r, o = (e - t) * n + t, s = (o - a) * n + a;
    i[0] = r, i[1] = a, i[2] = s, i[3] = s, i[4] = o, i[5] = e;
  }
  function Nd(r, t, e, n, i, a, o, s, l) {
    var u, f = 5e-3, h = 1 / 0;
    br[0] = o, br[1] = s;
    for (var v = 0; v < 1; v += 0.05) {
      Ue[0] = te(r, e, i, v), Ue[1] = te(t, n, a, v);
      var c = Nn(br, Ue);
      c < h && (u = v, h = c);
    }
    h = 1 / 0;
    for (var d = 0; d < 32 && !(f < Ad); d++) {
      var g = u - f, p = u + f;
      Ue[0] = te(r, e, i, g), Ue[1] = te(t, n, a, g);
      var c = Nn(Ue, br);
      if (g >= 0 && c < h)
        u = g, h = c;
      else {
        Oi[0] = te(r, e, i, p), Oi[1] = te(t, n, a, p);
        var m = Nn(Oi, br);
        p <= 1 && m < h ? (u = p, h = m) : f *= 0.5;
      }
    }
    return l && (l[0] = te(r, e, i, u), l[1] = te(t, n, a, u)), an(h);
  }
  function kw(r, t, e, n, i, a, o) {
    for (var s = r, l = t, u = 0, f = 1 / o, h = 1; h <= o; h++) {
      var v = h * f, c = te(r, e, i, v), d = te(t, n, a, v), g = c - s, p = d - l;
      u += Math.sqrt(g * g + p * p), s = c, l = d;
    }
    return u;
  }
  var Nw = /cubic-bezier\(([0-9,\.e ]+)\)/;
  function Bd(r) {
    var t = r && Nw.exec(r);
    if (t) {
      var e = t[1].split(","), n = +ir(e[0]), i = +ir(e[1]), a = +ir(e[2]), o = +ir(e[3]);
      if (isNaN(n + i + a + o))
        return;
      var s = [];
      return function(l) {
        return l <= 0 ? 0 : l >= 1 ? 1 : os(0, n, a, 1, l, s) && Xt(0, i, o, 1, s[0]);
      };
    }
  }
  var Bw = function() {
    function r(t) {
      this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = t.life || 1e3, this._delay = t.delay || 0, this.loop = t.loop || !1, this.onframe = t.onframe || fe, this.ondestroy = t.ondestroy || fe, this.onrestart = t.onrestart || fe, t.easing && this.setEasing(t.easing);
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
      this.easing = t, this.easingFunc = tt(t) ? t : Ta[t] || Bd(t);
    }, r;
  }(), Fd = function() {
    function r(t) {
      this.value = t;
    }
    return r;
  }(), Fw = function() {
    function r() {
      this._len = 0;
    }
    return r.prototype.insert = function(t) {
      var e = new Fd(t);
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
  }(), Ca = function() {
    function r(t) {
      this._list = new Fw(), this._maxSize = 10, this._map = {}, this._maxSize = t;
    }
    return r.prototype.put = function(t, e) {
      var n = this._list, i = this._map, a = null;
      if (i[t] == null) {
        var o = n.len(), s = this._lastRemovedEntry;
        if (o >= this._maxSize && o > 0) {
          var l = n.head;
          n.remove(l), delete i[l.key], a = l.value, this._lastRemovedEntry = l;
        }
        s ? s.value = e : s = new Fd(e), s.key = t, n.insertEntry(s), i[t] = s;
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
  }(), zd = {
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
  function ar(r) {
    return r = Math.round(r), r < 0 ? 0 : r > 255 ? 255 : r;
  }
  function zw(r) {
    return r = Math.round(r), r < 0 ? 0 : r > 360 ? 360 : r;
  }
  function Da(r) {
    return r < 0 ? 0 : r > 1 ? 1 : r;
  }
  function Qu(r) {
    var t = r;
    return t.length && t.charAt(t.length - 1) === "%" ? ar(parseFloat(t) / 100 * 255) : ar(parseInt(t, 10));
  }
  function Hn(r) {
    var t = r;
    return t.length && t.charAt(t.length - 1) === "%" ? Da(parseFloat(t) / 100) : Da(parseFloat(t));
  }
  function Ju(r, t, e) {
    return e < 0 ? e += 1 : e > 1 && (e -= 1), e * 6 < 1 ? r + (t - r) * e * 6 : e * 2 < 1 ? t : e * 3 < 2 ? r + (t - r) * (2 / 3 - e) * 6 : r;
  }
  function sn(r, t, e) {
    return r + (t - r) * e;
  }
  function Ye(r, t, e, n, i) {
    return r[0] = t, r[1] = e, r[2] = n, r[3] = i, r;
  }
  function tf(r, t) {
    return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r;
  }
  var Vd = new Ca(20), us = null;
  function ki(r, t) {
    us && tf(us, t), us = Vd.put(r, us || t.slice());
  }
  function ke(r, t) {
    if (r) {
      t = t || [];
      var e = Vd.get(r);
      if (e)
        return tf(t, e);
      r = r + "";
      var n = r.replace(/ /g, "").toLowerCase();
      if (n in zd)
        return tf(t, zd[n]), ki(r, t), t;
      var i = n.length;
      if (n.charAt(0) === "#") {
        if (i === 4 || i === 5) {
          var a = parseInt(n.slice(1, 4), 16);
          if (!(a >= 0 && a <= 4095)) {
            Ye(t, 0, 0, 0, 1);
            return;
          }
          return Ye(t, (a & 3840) >> 4 | (a & 3840) >> 8, a & 240 | (a & 240) >> 4, a & 15 | (a & 15) << 4, i === 5 ? parseInt(n.slice(4), 16) / 15 : 1), ki(r, t), t;
        } else if (i === 7 || i === 9) {
          var a = parseInt(n.slice(1, 7), 16);
          if (!(a >= 0 && a <= 16777215)) {
            Ye(t, 0, 0, 0, 1);
            return;
          }
          return Ye(t, (a & 16711680) >> 16, (a & 65280) >> 8, a & 255, i === 9 ? parseInt(n.slice(7), 16) / 255 : 1), ki(r, t), t;
        }
        return;
      }
      var o = n.indexOf("("), s = n.indexOf(")");
      if (o !== -1 && s + 1 === i) {
        var l = n.substr(0, o), u = n.substr(o + 1, s - (o + 1)).split(","), f = 1;
        switch (l) {
          case "rgba":
            if (u.length !== 4)
              return u.length === 3 ? Ye(t, +u[0], +u[1], +u[2], 1) : Ye(t, 0, 0, 0, 1);
            f = Hn(u.pop());
          case "rgb":
            if (u.length >= 3)
              return Ye(t, Qu(u[0]), Qu(u[1]), Qu(u[2]), u.length === 3 ? f : Hn(u[3])), ki(r, t), t;
            Ye(t, 0, 0, 0, 1);
            return;
          case "hsla":
            if (u.length !== 4) {
              Ye(t, 0, 0, 0, 1);
              return;
            }
            return u[3] = Hn(u[3]), ef(u, t), ki(r, t), t;
          case "hsl":
            if (u.length !== 3) {
              Ye(t, 0, 0, 0, 1);
              return;
            }
            return ef(u, t), ki(r, t), t;
          default:
            return;
        }
      }
      Ye(t, 0, 0, 0, 1);
    }
  }
  function ef(r, t) {
    var e = (parseFloat(r[0]) % 360 + 360) % 360 / 360, n = Hn(r[1]), i = Hn(r[2]), a = i <= 0.5 ? i * (n + 1) : i + n - i * n, o = i * 2 - a;
    return t = t || [], Ye(t, ar(Ju(o, a, e + 1 / 3) * 255), ar(Ju(o, a, e) * 255), ar(Ju(o, a, e - 1 / 3) * 255), 1), r.length === 4 && (t[3] = r[3]), t;
  }
  function Vw(r) {
    if (r) {
      var t = r[0] / 255, e = r[1] / 255, n = r[2] / 255, i = Math.min(t, e, n), a = Math.max(t, e, n), o = a - i, s = (a + i) / 2, l, u;
      if (o === 0)
        l = 0, u = 0;
      else {
        s < 0.5 ? u = o / (a + i) : u = o / (2 - a - i);
        var f = ((a - t) / 6 + o / 2) / o, h = ((a - e) / 6 + o / 2) / o, v = ((a - n) / 6 + o / 2) / o;
        t === a ? l = v - h : e === a ? l = 1 / 3 + f - v : n === a && (l = 2 / 3 + h - f), l < 0 && (l += 1), l > 1 && (l -= 1);
      }
      var c = [l * 360, u, s];
      return r[3] != null && c.push(r[3]), c;
    }
  }
  function rf(r, t) {
    var e = ke(r);
    if (e) {
      for (var n = 0; n < 3; n++)
        t < 0 ? e[n] = e[n] * (1 - t) | 0 : e[n] = (255 - e[n]) * t + e[n] | 0, e[n] > 255 ? e[n] = 255 : e[n] < 0 && (e[n] = 0);
      return ln(e, e.length === 4 ? "rgba" : "rgb");
    }
  }
  function Gw(r) {
    var t = ke(r);
    if (t)
      return ((1 << 24) + (t[0] << 16) + (t[1] << 8) + +t[2]).toString(16).slice(1);
  }
  function Gd(r, t, e) {
    if (!(!(t && t.length) || !(r >= 0 && r <= 1))) {
      e = e || [];
      var n = r * (t.length - 1), i = Math.floor(n), a = Math.ceil(n), o = t[i], s = t[a], l = n - i;
      return e[0] = ar(sn(o[0], s[0], l)), e[1] = ar(sn(o[1], s[1], l)), e[2] = ar(sn(o[2], s[2], l)), e[3] = Da(sn(o[3], s[3], l)), e;
    }
  }
  var Hw = Gd;
  function nf(r, t, e) {
    if (!(!(t && t.length) || !(r >= 0 && r <= 1))) {
      var n = r * (t.length - 1), i = Math.floor(n), a = Math.ceil(n), o = ke(t[i]), s = ke(t[a]), l = n - i, u = ln([ar(sn(o[0], s[0], l)), ar(sn(o[1], s[1], l)), ar(sn(o[2], s[2], l)), Da(sn(o[3], s[3], l))], "rgba");
      return e ? {
        color: u,
        leftIndex: i,
        rightIndex: a,
        value: n
      } : u;
    }
  }
  var Ww = nf;
  function Uw(r, t, e, n) {
    var i = ke(r);
    if (r)
      return i = Vw(i), t != null && (i[0] = zw(t)), e != null && (i[1] = Hn(e)), n != null && (i[2] = Hn(n)), ln(ef(i), "rgba");
  }
  function Yw(r, t) {
    var e = ke(r);
    if (e && t != null)
      return e[3] = Da(t), ln(e, "rgba");
  }
  function ln(r, t) {
    if (!(!r || !r.length)) {
      var e = r[0] + "," + r[1] + "," + r[2];
      return (t === "rgba" || t === "hsva" || t === "hsla") && (e += "," + r[3]), t + "(" + e + ")";
    }
  }
  function Ma(r, t) {
    var e = ke(r);
    return e ? (0.299 * e[0] + 0.587 * e[1] + 0.114 * e[2]) * e[3] / 255 + (1 - e[3]) * t : 0;
  }
  function Xw() {
    return ln([Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)], "rgb");
  }
  var $w = (Object.freeze || Object)({
    parse: ke,
    lift: rf,
    toHex: Gw,
    fastLerp: Gd,
    fastMapToColor: Hw,
    lerp: nf,
    mapToColor: Ww,
    modifyHSL: Uw,
    modifyAlpha: Yw,
    stringify: ln,
    lum: Ma,
    random: Xw
  });
  function qw(r) {
    return r.type === "linear";
  }
  function Zw(r) {
    return r.type === "radial";
  }
  (function() {
    return O.hasGlobalWindow && tt(window.btoa) ? function(r) {
      return window.btoa(unescape(encodeURIComponent(r)));
    } : typeof Buffer < "u" ? function(r) {
      return Buffer.from(r).toString("base64");
    } : function(r) {
      return Qr("Base64 isn't natively supported in the current environment."), null;
    };
  })();
  var af = Array.prototype.slice;
  function Fr(r, t, e) {
    return (t - r) * e + r;
  }
  function of(r, t, e, n) {
    for (var i = t.length, a = 0; a < i; a++)
      r[a] = Fr(t[a], e[a], n);
    return r;
  }
  function Kw(r, t, e, n) {
    for (var i = t.length, a = i && t[0].length, o = 0; o < i; o++) {
      r[o] || (r[o] = []);
      for (var s = 0; s < a; s++)
        r[o][s] = Fr(t[o][s], e[o][s], n);
    }
    return r;
  }
  function fs(r, t, e, n) {
    for (var i = t.length, a = 0; a < i; a++)
      r[a] = t[a] + e[a] * n;
    return r;
  }
  function Hd(r, t, e, n) {
    for (var i = t.length, a = i && t[0].length, o = 0; o < i; o++) {
      r[o] || (r[o] = []);
      for (var s = 0; s < a; s++)
        r[o][s] = t[o][s] + e[o][s] * n;
    }
    return r;
  }
  function jw(r, t) {
    for (var e = r.length, n = t.length, i = e > n ? t : r, a = Math.min(e, n), o = i[a - 1] || {
      color: [0, 0, 0, 0],
      offset: 0
    }, s = a; s < Math.max(e, n); s++)
      i.push({
        offset: o.offset,
        color: o.color.slice()
      });
  }
  function Qw(r, t, e) {
    var n = r, i = t;
    if (!(!n.push || !i.push)) {
      var a = n.length, o = i.length;
      if (a !== o) {
        var s = a > o;
        if (s)
          n.length = o;
        else
          for (var l = a; l < o; l++)
            n.push(e === 1 ? i[l] : af.call(i[l]));
      }
      for (var u = n[0] && n[0].length, l = 0; l < n.length; l++)
        if (e === 1)
          isNaN(n[l]) && (n[l] = i[l]);
        else
          for (var f = 0; f < u; f++)
            isNaN(n[l][f]) && (n[l][f] = i[l][f]);
    }
  }
  function hs(r) {
    if (le(r)) {
      var t = r.length;
      if (le(r[0])) {
        for (var e = [], n = 0; n < t; n++)
          e.push(af.call(r[n]));
        return e;
      }
      return af.call(r);
    }
    return r;
  }
  function cs(r) {
    return r[0] = Math.floor(r[0]) || 0, r[1] = Math.floor(r[1]) || 0, r[2] = Math.floor(r[2]) || 0, r[3] = r[3] == null ? 1 : r[3], "rgba(" + r.join(",") + ")";
  }
  function Jw(r) {
    return le(r && r[0]) ? 2 : 1;
  }
  var vs = 0, ds = 1, Wd = 2, Aa = 3, sf = 4, lf = 5, Ud = 6;
  function Yd(r) {
    return r === sf || r === lf;
  }
  function ps(r) {
    return r === ds || r === Wd;
  }
  var Pa = [0, 0, 0, 0], tb = function() {
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
      var i = this.keyframes, a = i.length, o = !1, s = Ud, l = e;
      if (le(e)) {
        var u = Jw(e);
        s = u, (u === 1 && !Mt(e[0]) || u === 2 && !Mt(e[0][0])) && (o = !0);
      } else if (Mt(e) && !Pi(e))
        s = vs;
      else if (Z(e))
        if (!isNaN(+e))
          s = vs;
        else {
          var f = ke(e);
          f && (l = f, s = Aa);
        }
      else if (pa(e)) {
        var h = W({}, l);
        h.colorStops = K(e.colorStops, function(c) {
          return {
            offset: c.offset,
            color: ke(c.color)
          };
        }), qw(e) ? s = sf : Zw(e) && (s = lf), l = h;
      }
      a === 0 ? this.valType = s : (s !== this.valType || s === Ud) && (o = !0), this.discrete = this.discrete || o;
      var v = {
        time: t,
        value: l,
        rawValue: e,
        percent: 0
      };
      return n && (v.easing = n, v.easingFunc = tt(n) ? n : Ta[n] || Bd(n)), i.push(v), v;
    }, r.prototype.prepare = function(t, e) {
      var n = this.keyframes;
      this._needsSort && n.sort(function(g, p) {
        return g.time - p.time;
      });
      for (var i = this.valType, a = n.length, o = n[a - 1], s = this.discrete, l = ps(i), u = Yd(i), f = 0; f < a; f++) {
        var h = n[f], v = h.value, c = o.value;
        h.percent = h.time / t, s || (l && f !== a - 1 ? Qw(v, c, i) : u && jw(v.colorStops, c.colorStops));
      }
      if (!s && i !== lf && e && this.needsAnimate() && e.needsAnimate() && i === e.valType && !e._finished) {
        this._additiveTrack = e;
        for (var d = n[0].value, f = 0; f < a; f++)
          i === vs ? n[f].additiveValue = n[f].value - d : i === Aa ? n[f].additiveValue = fs([], n[f].value, d, -1) : ps(i) && (n[f].additiveValue = i === ds ? fs([], n[f].value, d, -1) : Hd([], n[f].value, d, -1));
      }
    }, r.prototype.step = function(t, e) {
      if (!this._finished) {
        this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
        var n = this._additiveTrack != null, i = n ? "additiveValue" : "value", a = this.valType, o = this.keyframes, s = o.length, l = this.propName, u = a === Aa, f, h = this._lastFr, v = Math.min, c, d;
        if (s === 1)
          c = d = o[0];
        else {
          if (e < 0)
            f = 0;
          else if (e < this._lastFrP) {
            var g = v(h + 1, s - 1);
            for (f = g; f >= 0 && !(o[f].percent <= e); f--)
              ;
            f = v(f, s - 2);
          } else {
            for (f = h; f < s && !(o[f].percent > e); f++)
              ;
            f = v(f - 1, s - 2);
          }
          d = o[f + 1], c = o[f];
        }
        if (c && d) {
          this._lastFr = f, this._lastFrP = e;
          var p = d.percent - c.percent, m = p === 0 ? 1 : v((e - c.percent) / p, 1);
          d.easingFunc && (m = d.easingFunc(m));
          var _ = n ? this._additiveValue : u ? Pa : t[l];
          if ((ps(a) || u) && !_ && (_ = this._additiveValue = []), this.discrete)
            t[l] = m < 1 ? c.rawValue : d.rawValue;
          else if (ps(a))
            a === ds ? of(_, c[i], d[i], m) : Kw(_, c[i], d[i], m);
          else if (Yd(a)) {
            var S = c[i], b = d[i], C = a === sf;
            t[l] = {
              type: C ? "linear" : "radial",
              x: Fr(S.x, b.x, m),
              y: Fr(S.y, b.y, m),
              colorStops: K(S.colorStops, function(D, M) {
                var P = b.colorStops[M];
                return {
                  offset: Fr(D.offset, P.offset, m),
                  color: cs(of([], D.color, P.color, m))
                };
              }),
              global: b.global
            }, C ? (t[l].x2 = Fr(S.x2, b.x2, m), t[l].y2 = Fr(S.y2, b.y2, m)) : t[l].r = Fr(S.r, b.r, m);
          } else if (u)
            of(_, c[i], d[i], m), n || (t[l] = cs(_));
          else {
            var T = Fr(c[i], d[i], m);
            n ? this._additiveValue = T : t[l] = T;
          }
          n && this._addToTarget(t);
        }
      }
    }, r.prototype._addToTarget = function(t) {
      var e = this.valType, n = this.propName, i = this._additiveValue;
      e === vs ? t[n] = t[n] + i : e === Aa ? (ke(t[n], Pa), fs(Pa, Pa, i, 1), t[n] = cs(Pa)) : e === ds ? fs(t[n], t[n], i, 1) : e === Wd && Hd(t[n], t[n], i, 1);
    }, r;
  }(), uf = function() {
    function r(t, e, n, i) {
      if (this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = t, this._loop = e, e && i) {
        Qr("Can' use additive animation on looped animation.");
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
      return this.whenWithKeys(t, e, It(e), n);
    }, r.prototype.whenWithKeys = function(t, e, n, i) {
      for (var a = this._tracks, o = 0; o < n.length; o++) {
        var s = n[o], l = a[s];
        if (!l) {
          l = a[s] = new tb(s);
          var u = void 0, f = this._getAdditiveTrack(s);
          if (f) {
            var h = f.keyframes, v = h[h.length - 1];
            u = v && v.value, f.valType === Aa && u && (u = cs(u));
          } else
            u = this._target[s];
          if (u == null)
            continue;
          t > 0 && l.addKeyframe(0, hs(u), i), this._trackKeys.push(s);
        }
        l.addKeyframe(t, hs(e[s]), i);
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
          var v = new Bw({
            life: i,
            loop: this._loop,
            delay: this._delay || 0,
            onframe: function(c) {
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
                n[p].step(e._target, c);
              var m = e._onframeCbs;
              if (m)
                for (var p = 0; p < m.length; p++)
                  m[p](e._target, c);
            },
            ondestroy: function() {
              e._doneCallback();
            }
          });
          this._clip = v, this.animation && this.animation.addClip(v), t && v.setEasing(t);
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
      return K(this._trackKeys, function(e) {
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
            l && (t[a] = hs(l.rawValue));
          }
        }
      }
    }, r.prototype.__changeFinalValue = function(t, e) {
      e = e || It(t);
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
  function Ni() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
  var eb = function(r) {
    x(t, r);
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
      for (var n = Ni() - this._pausedTime, i = n - this._time, a = this._head; a; ) {
        var o = a.next, s = a.step(n, i);
        s && (a.ondestroy(), this.removeClip(a)), a = o;
      }
      this._time = n, e || (this.trigger("frame", i), this.stage.update && this.stage.update());
    }, t.prototype._startLoop = function() {
      var e = this;
      this._running = !0;
      function n() {
        e._running && (ju(n), !e._paused && e.update());
      }
      ju(n);
    }, t.prototype.start = function() {
      this._running || (this._time = Ni(), this._pausedTime = 0, this._startLoop());
    }, t.prototype.stop = function() {
      this._running = !1;
    }, t.prototype.pause = function() {
      this._paused || (this._pauseStart = Ni(), this._paused = !0);
    }, t.prototype.resume = function() {
      this._paused && (this._pausedTime += Ni() - this._pauseStart, this._paused = !1);
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
      var i = new uf(e, n.loop);
      return this.addAnimator(i), i;
    }, t;
  }(wr), rb = 300, ff = O.domSupported, hf = function() {
    var r = ["click", "dblclick", "mousewheel", "wheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"], t = ["touchstart", "touchend", "touchmove"], e = {
      pointerdown: 1,
      pointerup: 1,
      pointermove: 1,
      pointerout: 1
    }, n = K(r, function(i) {
      var a = i.replace("mouse", "pointer");
      return e.hasOwnProperty(a) ? a : i;
    });
    return {
      mouse: r,
      touch: t,
      pointer: n
    };
  }(), Xd = {
    mouse: ["mousemove", "mouseup"],
    pointer: ["pointermove", "pointerup"]
  }, $d = !1;
  function cf(r) {
    var t = r.pointerType;
    return t === "pen" || t === "touch";
  }
  function nb(r) {
    r.touching = !0, r.touchTimer != null && (clearTimeout(r.touchTimer), r.touchTimer = null), r.touchTimer = setTimeout(function() {
      r.touching = !1, r.touchTimer = null;
    }, 700);
  }
  function vf(r) {
    r && (r.zrByTouch = !0);
  }
  function ib(r, t) {
    return We(r.dom, new ab(r, t), !0);
  }
  function qd(r, t) {
    for (var e = t, n = !1; e && e.nodeType !== 9 && !(n = e.domBelongToZr || e !== t && e === r.painterRoot); )
      e = e.parentNode;
    return n;
  }
  var ab = function() {
    function r(t, e) {
      this.stopPropagation = fe, this.stopImmediatePropagation = fe, this.preventDefault = fe, this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, this.clientX = e.clientX, this.clientY = e.clientY;
    }
    return r;
  }(), or = {
    mousedown: function(r) {
      r = We(this.dom, r), this.__mayPointerCapture = [r.zrX, r.zrY], this.trigger("mousedown", r);
    },
    mousemove: function(r) {
      r = We(this.dom, r);
      var t = this.__mayPointerCapture;
      t && (r.zrX !== t[0] || r.zrY !== t[1]) && this.__togglePointerCapture(!0), this.trigger("mousemove", r);
    },
    mouseup: function(r) {
      r = We(this.dom, r), this.__togglePointerCapture(!1), this.trigger("mouseup", r);
    },
    mouseout: function(r) {
      r = We(this.dom, r);
      var t = r.toElement || r.relatedTarget;
      qd(this, t) || (this.__pointerCapturing && (r.zrEventControl = "no_globalout"), this.trigger("mouseout", r));
    },
    wheel: function(r) {
      $d = !0, r = We(this.dom, r), this.trigger("mousewheel", r);
    },
    mousewheel: function(r) {
      $d || (r = We(this.dom, r), this.trigger("mousewheel", r));
    },
    touchstart: function(r) {
      r = We(this.dom, r), vf(r), this.__lastTouchMoment = /* @__PURE__ */ new Date(), this.handler.processGesture(r, "start"), or.mousemove.call(this, r), or.mousedown.call(this, r);
    },
    touchmove: function(r) {
      r = We(this.dom, r), vf(r), this.handler.processGesture(r, "change"), or.mousemove.call(this, r);
    },
    touchend: function(r) {
      r = We(this.dom, r), vf(r), this.handler.processGesture(r, "end"), or.mouseup.call(this, r), +/* @__PURE__ */ new Date() - +this.__lastTouchMoment < rb && or.click.call(this, r);
    },
    pointerdown: function(r) {
      or.mousedown.call(this, r);
    },
    pointermove: function(r) {
      cf(r) || or.mousemove.call(this, r);
    },
    pointerup: function(r) {
      or.mouseup.call(this, r);
    },
    pointerout: function(r) {
      cf(r) || or.mouseout.call(this, r);
    }
  };
  L(["click", "dblclick", "contextmenu"], function(r) {
    or[r] = function(t) {
      t = We(this.dom, t), this.trigger(r, t);
    };
  });
  var df = {
    pointermove: function(r) {
      cf(r) || df.mousemove.call(this, r);
    },
    pointerup: function(r) {
      df.mouseup.call(this, r);
    },
    mousemove: function(r) {
      this.trigger("mousemove", r);
    },
    mouseup: function(r) {
      var t = this.__pointerCapturing;
      this.__togglePointerCapture(!1), this.trigger("mouseup", r), t && (r.zrEventControl = "only_globalout", this.trigger("mouseout", r));
    }
  };
  function ob(r, t) {
    var e = t.domHandlers;
    O.pointerEventsSupported ? L(hf.pointer, function(n) {
      gs(t, n, function(i) {
        e[n].call(r, i);
      });
    }) : (O.touchEventsSupported && L(hf.touch, function(n) {
      gs(t, n, function(i) {
        e[n].call(r, i), nb(t);
      });
    }), L(hf.mouse, function(n) {
      gs(t, n, function(i) {
        i = Uu(i), t.touching || e[n].call(r, i);
      });
    }));
  }
  function sb(r, t) {
    O.pointerEventsSupported ? L(Xd.pointer, e) : O.touchEventsSupported || L(Xd.mouse, e);
    function e(n) {
      function i(a) {
        a = Uu(a), qd(r, a.target) || (a = ib(r, a), t.domHandlers[n].call(r, a));
      }
      gs(t, n, i, {
        capture: !0
      });
    }
  }
  function gs(r, t, e, n) {
    r.mounted[t] = e, r.listenerOpts[t] = n, yw(r.domTarget, t, e, n);
  }
  function pf(r) {
    var t = r.mounted;
    for (var e in t)
      t.hasOwnProperty(e) && _w(r.domTarget, e, t[e], r.listenerOpts[e]);
    r.mounted = {};
  }
  var Zd = function() {
    function r(t, e) {
      this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = t, this.domHandlers = e;
    }
    return r;
  }(), lb = function(r) {
    x(t, r);
    function t(e, n) {
      var i = r.call(this) || this;
      return i.__pointerCapturing = !1, i.dom = e, i.painterRoot = n, i._localHandlerScope = new Zd(e, or), ff && (i._globalHandlerScope = new Zd(document, df)), ob(i, i._localHandlerScope), i;
    }
    return t.prototype.dispose = function() {
      pf(this._localHandlerScope), ff && pf(this._globalHandlerScope);
    }, t.prototype.setCursor = function(e) {
      this.dom.style && (this.dom.style.cursor = e || "default");
    }, t.prototype.__togglePointerCapture = function(e) {
      if (this.__mayPointerCapture = null, ff && +this.__pointerCapturing ^ +e) {
        this.__pointerCapturing = e;
        var n = this._globalHandlerScope;
        e ? sb(this, n) : pf(n);
      }
    }, t;
  }(wr), Kd = 1;
  O.hasGlobalWindow && (Kd = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
  var ms = Kd, gf = 0.4, mf = "#333", yf = "#ccc", ub = "#eee", jd = ya, Qd = 5e-5;
  function Wn(r) {
    return r > Qd || r < -Qd;
  }
  var Un = [], Bi = [], _f = Bn(), Sf = Math.abs, ys = function() {
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
      return Wn(this.rotation) || Wn(this.x) || Wn(this.y) || Wn(this.scaleX - 1) || Wn(this.scaleY - 1) || Wn(this.skewX) || Wn(this.skewY);
    }, r.prototype.updateTransform = function() {
      var t = this.parent && this.parent.transform, e = this.needLocalTransform(), n = this.transform;
      if (!(e || t)) {
        n && jd(n);
        return;
      }
      n = n || Bn(), e ? this.getLocalTransform(n) : jd(n), t && (e ? nn(n, t, n) : Xu(n, t)), this.transform = n, this._resolveGlobalScaleRatio(n);
    }, r.prototype._resolveGlobalScaleRatio = function(t) {
      var e = this.globalScaleRatio;
      if (e != null && e !== 1) {
        this.getGlobalScale(Un);
        var n = Un[0] < 0 ? -1 : 1, i = Un[1] < 0 ? -1 : 1, a = ((Un[0] - n) * e + n) / Un[0] || 0, o = ((Un[1] - i) * e + i) / Un[1] || 0;
        t[0] *= a, t[1] *= a, t[2] *= o, t[3] *= o;
      }
      this.invTransform = this.invTransform || Bn(), Ei(this.invTransform, t);
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
        t && t.transform && (nn(Bi, t.invTransform, e), e = Bi);
        var n = this.originX, i = this.originY;
        (n || i) && (_f[4] = n, _f[5] = i, nn(Bi, e, _f), Bi[4] -= n, Bi[5] -= i, e = Bi), this.setLocalTransform(e);
      }
    }, r.prototype.getGlobalScale = function(t) {
      var e = this.transform;
      return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t);
    }, r.prototype.transformCoordToLocal = function(t, e) {
      var n = [t, e], i = this.invTransform;
      return i && he(n, n, i), n;
    }, r.prototype.transformCoordToGlobal = function(t, e) {
      var n = [t, e], i = this.transform;
      return i && he(n, n, i), n;
    }, r.prototype.getLineScale = function() {
      var t = this.transform;
      return t && Sf(t[0] - 1) > 1e-10 && Sf(t[3] - 1) > 1e-10 ? Math.sqrt(Sf(t[0] * t[3] - t[2] * t[1])) : 1;
    }, r.prototype.copyTransform = function(t) {
      fb(this, t);
    }, r.getLocalTransform = function(t, e) {
      e = e || [];
      var n = t.originX || 0, i = t.originY || 0, a = t.scaleX, o = t.scaleY, s = t.anchorX, l = t.anchorY, u = t.rotation || 0, f = t.x, h = t.y, v = t.skewX ? Math.tan(t.skewX) : 0, c = t.skewY ? Math.tan(-t.skewY) : 0;
      if (n || i || s || l) {
        var d = n + s, g = i + l;
        e[4] = -d * a - v * g * o, e[5] = -g * o - c * d * a;
      } else
        e[4] = e[5] = 0;
      return e[0] = a, e[3] = o, e[1] = c * a, e[2] = v * o, u && Jo(e, e, u), e[4] += n + f, e[5] += i + h, e;
    }, r.initDefaultProps = function() {
      var t = r.prototype;
      t.scaleX = t.scaleY = t.globalScaleRatio = 1, t.x = t.y = t.originX = t.originY = t.skewX = t.skewY = t.rotation = t.anchorX = t.anchorY = 0;
    }(), r;
  }(), Ia = ["x", "y", "originX", "originY", "anchorX", "anchorY", "rotation", "scaleX", "scaleY", "skewX", "skewY"];
  function fb(r, t) {
    for (var e = 0; e < Ia.length; e++) {
      var n = Ia[e];
      r[n] = t[n];
    }
  }
  var Jd = {};
  function Ne(r, t) {
    t = t || nt;
    var e = Jd[t];
    e || (e = Jd[t] = new Ca(500));
    var n = e.get(r);
    return n == null && (n = Dt.measureText(r, t).width, e.put(r, n)), n;
  }
  function tp(r, t, e, n) {
    var i = Ne(r, t), a = bf(t), o = La(0, i, e), s = Fi(0, a, n), l = new dt(o, s, i, a);
    return l;
  }
  function wf(r, t, e, n) {
    var i = ((r || "") + "").split(`
`), a = i.length;
    if (a === 1)
      return tp(i[0], t, e, n);
    for (var o = new dt(0, 0, 0, 0), s = 0; s < i.length; s++) {
      var l = tp(i[s], t, e, n);
      s === 0 ? o.copy(l) : o.union(l);
    }
    return o;
  }
  function La(r, t, e) {
    return e === "right" ? r -= t : e === "center" && (r -= t / 2), r;
  }
  function Fi(r, t, e) {
    return e === "middle" ? r -= t / 2 : e === "bottom" && (r -= t), r;
  }
  function bf(r) {
    return Ne("国", r);
  }
  function un(r, t) {
    return typeof r == "string" ? r.lastIndexOf("%") >= 0 ? parseFloat(r) / 100 * t : parseFloat(r) : r;
  }
  function _s(r, t, e) {
    var n = t.position || "inside", i = t.distance != null ? t.distance : 5, a = e.height, o = e.width, s = a / 2, l = e.x, u = e.y, f = "left", h = "top";
    if (n instanceof Array)
      l += un(n[0], e.width), u += un(n[1], e.height), f = null, h = null;
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
  var xf = "__zr_normal__", Tf = Ia.concat(["ignore"]), hb = Sr(Ia, function(r, t) {
    return r[t] = !0, r;
  }, {
    ignore: !1
  }), zi = {}, cb = new dt(0, 0, 0, 0), Ss = function() {
    function r(t) {
      this.id = Lu(), this.animators = [], this.currentStates = [], this.states = {}, this._init(t);
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
          var f = cb;
          n.layoutRect ? f.copy(n.layoutRect) : f.copy(this.getBoundingRect()), i || f.applyTransform(this.transform), this.calculateTextPosition ? this.calculateTextPosition(zi, n, f) : _s(zi, n, f), a.x = zi.x, a.y = zi.y, o = zi.align, s = zi.verticalAlign;
          var h = n.origin;
          if (h && n.rotation != null) {
            var v = void 0, c = void 0;
            h === "center" ? (v = f.width * 0.5, c = f.height * 0.5) : (v = un(h[0], f.width), c = un(h[1], f.height)), u = !0, a.originX = -a.x + v + (i ? 0 : f.x), a.originY = -a.y + c + (i ? 0 : f.y);
          }
        }
        n.rotation != null && (a.rotation = n.rotation);
        var d = n.offset;
        d && (a.x += d[0], a.y += d[1], u || (a.originX = -d[0], a.originY = -d[1]));
        var g = n.inside == null ? typeof n.position == "string" && n.position.indexOf("inside") >= 0 : n.inside, p = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {}), m = void 0, _ = void 0, S = void 0;
        g && this.canBeInsideText() ? (m = n.insideFill, _ = n.insideStroke, (m == null || m === "auto") && (m = this.getInsideTextFill()), (_ == null || _ === "auto") && (_ = this.getInsideTextStroke(m), S = !0)) : (m = n.outsideFill, _ = n.outsideStroke, (m == null || m === "auto") && (m = this.getOutsideFill()), (_ == null || _ === "auto") && (_ = this.getOutsideStroke(m), S = !0)), m = m || "#000", (m !== p.fill || _ !== p.stroke || S !== p.autoStroke || o !== p.align || s !== p.verticalAlign) && (l = !0, p.fill = m, p.stroke = _, p.autoStroke = S, p.align = o, p.verticalAlign = s, e.setDefaultTextStyle(p)), e.__dirty |= Oe, l && e.dirtyStyle(!0);
      }
    }, r.prototype.canBeInsideText = function() {
      return !0;
    }, r.prototype.getInsideTextFill = function() {
      return "#fff";
    }, r.prototype.getInsideTextStroke = function(t) {
      return "#000";
    }, r.prototype.getOutsideFill = function() {
      return this.__zr && this.__zr.isDarkMode() ? yf : mf;
    }, r.prototype.getOutsideStroke = function(t) {
      var e = this.__zr && this.__zr.getBackgroundColor(), n = typeof e == "string" && ke(e);
      n || (n = [255, 255, 255, 1]);
      for (var i = n[3], a = this.__zr.isDarkMode(), o = 0; o < 3; o++)
        n[o] = n[o] * i + (a ? 0 : 255) * (1 - i);
      return n[3] = 1, ln(n, "rgba");
    }, r.prototype.traverse = function(t, e) {
    }, r.prototype.attrKV = function(t, e) {
      t === "textConfig" ? this.setTextConfig(e) : t === "textContent" ? this.setTextContent(e) : t === "clipPath" ? this.setClipPath(e) : t === "extra" ? (this.extra = this.extra || {}, W(this.extra, e)) : this[t] = e;
    }, r.prototype.hide = function() {
      this.ignore = !0, this.markRedraw();
    }, r.prototype.show = function() {
      this.ignore = !1, this.markRedraw();
    }, r.prototype.attr = function(t, e) {
      if (typeof t == "string")
        this.attrKV(t, e);
      else if (j(t))
        for (var n = t, i = It(n), a = 0; a < i.length; a++) {
          var o = i[a];
          this.attrKV(o, t[o]);
        }
      return this.markRedraw(), this;
    }, r.prototype.saveCurrentToNormalState = function(t) {
      this._innerSaveToNormal(t);
      for (var e = this._normalState, n = 0; n < this.animators.length; n++) {
        var i = this.animators[n], a = i.__fromStateTransition;
        if (!(i.getLoop() || a && a !== xf)) {
          var o = i.targetName, s = o ? e[o] : e;
          i.saveTo(s);
        }
      }
    }, r.prototype._innerSaveToNormal = function(t) {
      var e = this._normalState;
      e || (e = this._normalState = {}), t.textConfig && !e.textConfig && (e.textConfig = this.textConfig), this._savePrimaryToNormal(t, e, Tf);
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
      this.useState(xf, !1, t);
    }, r.prototype.useState = function(t, e, n, i) {
      var a = t === xf, o = this.hasState();
      if (!(!o && a)) {
        var s = this.currentStates, l = this.stateTransition;
        if (!(wt(s, t) >= 0 && (e || s.length === 1))) {
          var u;
          if (this.stateProxy && !a && (u = this.stateProxy(t)), u || (u = this.states && this.states[t]), !u && !a) {
            Qr("State " + t + " not exists.");
            return;
          }
          a || this.saveCurrentToNormalState(u);
          var f = !!(u && u.hoverLayer || i);
          f && this._toggleHoverLayerFlag(!0), this._applyStateObj(t, u, this._normalState, e, !n && !this.__inHover && l && l.duration > 0, l);
          var h = this._textContent, v = this._textGuide;
          return h && h.useState(t, e, n, f), v && v.useState(t, e, n, f), a ? (this.currentStates = [], this._normalState = {}) : e ? this.currentStates.push(t) : this.currentStates = [t], this._updateAnimationTargets(), this.markRedraw(), !f && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~Oe), u;
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
        var h = i[o - 1], v = !!(h && h.hoverLayer || n);
        v && this._toggleHoverLayerFlag(!0);
        var c = this._mergeStates(i), d = this.stateTransition;
        this.saveCurrentToNormalState(c), this._applyStateObj(t.join(","), c, this._normalState, !1, !e && !this.__inHover && d && d.duration > 0, d);
        var g = this._textContent, p = this._textGuide;
        g && g.useStates(t, e, v), p && p.useStates(t, e, v), this._updateAnimationTargets(), this.currentStates = t.slice(), this.markRedraw(), !v && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~Oe);
      }
    }, r.prototype._updateAnimationTargets = function() {
      for (var t = 0; t < this.animators.length; t++) {
        var e = this.animators[t];
        e.targetName && e.changeTarget(this[e.targetName]);
      }
    }, r.prototype.removeState = function(t) {
      var e = wt(this.currentStates, t);
      if (e >= 0) {
        var n = this.currentStates.slice();
        n.splice(e, 1), this.useStates(n);
      }
    }, r.prototype.replaceState = function(t, e, n) {
      var i = this.currentStates.slice(), a = wt(i, t), o = wt(i, e) >= 0;
      a >= 0 ? o ? i.splice(a, 1) : i[a] = e : n && !o && i.push(e), this.useStates(i);
    }, r.prototype.toggleState = function(t, e) {
      e ? this.useState(t, !0) : this.removeState(t);
    }, r.prototype._mergeStates = function(t) {
      for (var e = {}, n, i = 0; i < t.length; i++) {
        var a = t[i];
        W(e, a), a.textConfig && (n = n || {}, W(n, a.textConfig));
      }
      return n && (e.textConfig = n), e;
    }, r.prototype._applyStateObj = function(t, e, n, i, a, o) {
      var s = !(e && i);
      e && e.textConfig ? (this.textConfig = W({}, i ? this.textConfig : n.textConfig), W(this.textConfig, e.textConfig)) : s && n.textConfig && (this.textConfig = n.textConfig);
      for (var l = {}, u = !1, f = 0; f < Tf.length; f++) {
        var h = Tf[f], v = a && hb[h];
        e && e[h] != null ? v ? (u = !0, l[h] = e[h]) : this[h] = e[h] : s && n[h] != null && (v ? (u = !0, l[h] = n[h]) : this[h] = n[h]);
      }
      if (!a)
        for (var f = 0; f < this.animators.length; f++) {
          var c = this.animators[f], d = c.targetName;
          c.getLoop() || c.__changeFinalValue(d ? (e || n)[d] : e || n);
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
        t.innerTransformable = new ys(), this._attachComponent(t), this._textContent = t, this.markRedraw();
      }
    }, r.prototype.setTextConfig = function(t) {
      this.textConfig || (this.textConfig = {}), W(this.textConfig, t), this.markRedraw();
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
      this.__dirty |= Oe;
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
        Qr('Property "' + t + '" is not existed in element ' + this.id);
        return;
      }
      var a = new uf(i, e, n);
      return t && (a.targetName = t), this.addAnimator(a, t), a;
    }, r.prototype.addAnimator = function(t, e) {
      var n = this.__zr, i = this;
      t.during(function() {
        i.updateDuringAnimation(e);
      }).done(function() {
        var a = i.animators, o = wt(a, t);
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
      Cf(this, t, e, n);
    }, r.prototype.animateFrom = function(t, e, n) {
      Cf(this, t, e, n, !0);
    }, r.prototype._transitionState = function(t, e, n, i) {
      for (var a = Cf(this, e, n, i), o = 0; o < a.length; o++)
        a[o].__fromStateTransition = t;
    }, r.prototype.getBoundingRect = function() {
      return null;
    }, r.prototype.getPaintRect = function() {
      return null;
    }, r.initDefaultProps = function() {
      var t = r.prototype;
      t.type = "element", t.name = "", t.ignore = t.silent = t.isGroup = t.draggable = t.dragging = t.ignoreClip = t.__inHover = !1, t.__dirty = Oe;
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
            set: function(v) {
              f[s] = v;
            }
          }), Object.defineProperty(h, 1, {
            get: function() {
              return f[l];
            },
            set: function(v) {
              f[l] = v;
            }
          });
        }
      }
      Object.defineProperty && (i("position", "_legacyPos", "x", "y"), i("scale", "_legacyScale", "scaleX", "scaleY"), i("origin", "_legacyOrigin", "originX", "originY"));
    }(), r;
  }();
  He(Ss, wr), He(Ss, ys);
  function Cf(r, t, e, n, i) {
    e = e || {};
    var a = [];
    ep(r, "", r, t, e, n, a, i);
    var o = a.length, s = !1, l = e.done, u = e.aborted, f = function() {
      s = !0, o--, o <= 0 && (s ? l && l() : u && u());
    }, h = function() {
      o--, o <= 0 && (s ? l && l() : u && u());
    };
    o || l && l(), a.length > 0 && e.during && a[0].during(function(d, g) {
      e.during(g);
    });
    for (var v = 0; v < a.length; v++) {
      var c = a[v];
      f && c.done(f), h && c.aborted(h), e.force && c.duration(e.duration), c.start(e.easing);
    }
    return a;
  }
  function Df(r, t, e) {
    for (var n = 0; n < e; n++)
      r[n] = t[n];
  }
  function vb(r) {
    return le(r[0]);
  }
  function db(r, t, e) {
    if (le(t[e]))
      if (le(r[e]) || (r[e] = []), ue(t[e])) {
        var n = t[e].length;
        r[e].length !== n && (r[e] = new t[e].constructor(n), Df(r[e], t[e], n));
      } else {
        var i = t[e], a = r[e], o = i.length;
        if (vb(i))
          for (var s = i[0].length, l = 0; l < o; l++)
            a[l] ? Df(a[l], i[l], s) : a[l] = Array.prototype.slice.call(i[l]);
        else
          Df(a, i, o);
        a.length = i.length;
      }
    else
      r[e] = t[e];
  }
  function pb(r, t) {
    return r === t || le(r) && le(t) && gb(r, t);
  }
  function gb(r, t) {
    var e = r.length;
    if (e !== t.length)
      return !1;
    for (var n = 0; n < e; n++)
      if (r[n] !== t[n])
        return !1;
    return !0;
  }
  function ep(r, t, e, n, i, a, o, s) {
    for (var l = It(n), u = i.duration, f = i.delay, h = i.additive, v = i.setToFinal, c = !j(a), d = r.animators, g = [], p = 0; p < l.length; p++) {
      var m = l[p], _ = n[m];
      if (_ != null && e[m] != null && (c || a[m]))
        if (j(_) && !le(_) && !pa(_)) {
          if (t) {
            s || (e[m] = _, r.updateDuringAnimation(t));
            continue;
          }
          ep(r, m, e[m], _, i, a && a[m], o, s);
        } else
          g.push(m);
      else
        s || (e[m] = _, r.updateDuringAnimation(t), g.push(m));
    }
    var S = g.length;
    if (!h && S)
      for (var b = 0; b < d.length; b++) {
        var C = d[b];
        if (C.targetName === t) {
          var T = C.stopTracks(g);
          if (T) {
            var D = wt(d, C);
            d.splice(D, 1);
          }
        }
      }
    if (i.force || (g = Ft(g, function(A) {
      return !pb(n[A], e[A]);
    }), S = g.length), S > 0 || i.force && !o.length) {
      var M = void 0, P = void 0, E = void 0;
      if (s) {
        P = {}, v && (M = {});
        for (var b = 0; b < S; b++) {
          var m = g[b];
          P[m] = e[m], v ? M[m] = n[m] : e[m] = n[m];
        }
      } else if (v) {
        E = {};
        for (var b = 0; b < S; b++) {
          var m = g[b];
          E[m] = hs(e[m]), db(e, n, m);
        }
      }
      var C = new uf(e, !1, !1, h ? Ft(d, function(k) {
        return k.targetName === t;
      }) : null);
      C.targetName = t, i.scope && (C.scope = i.scope), v && M && C.whenWithKeys(0, M, g), E && C.whenWithKeys(0, E, g), C.whenWithKeys(u ?? 500, s ? P : n, g).delay(f || 0), r.addAnimator(C, t), o.push(C);
    }
  }
  var Zt = function(r) {
    x(t, r);
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
      var i = wt(this._children, e);
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
      var n = this.__zr, i = this._children, a = wt(i, e);
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
      for (var n = new dt(0, 0, 0, 0), i = e || this._children, a = [], o = null, s = 0; s < i.length; s++) {
        var l = i[s];
        if (!(l.ignore || l.invisible)) {
          var u = l.getBoundingRect(), f = l.getLocalTransform(a);
          f ? (dt.applyTransform(n, u, f), o = o || n.clone(), o.union(n)) : (o = o || u.clone(), o.union(u));
        }
      }
      return o || n;
    }, t;
  }(Ss);
  Zt.prototype.type = "group";
  /*!
  * ZRender, a high performance 2d drawing library.
  *
  * Copyright (c) 2013, Baidu Inc.
  * All rights reserved.
  *
  * LICENSE
  * https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
  */
  var Ea = {}, Yn = {};
  function mb(r) {
    delete Yn[r];
  }
  function yb(r) {
    if (!r)
      return !1;
    if (typeof r == "string")
      return Ma(r, 1) < gf;
    if (r.colorStops) {
      for (var t = r.colorStops, e = 0, n = t.length, i = 0; i < n; i++)
        e += Ma(t[i].color, 1);
      return e /= n, e < gf;
    }
    return !1;
  }
  var _b = function() {
    function r(t, e, n) {
      var i = this;
      this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !0, this._darkMode = !1, n = n || {}, this.dom = e, this.id = t;
      var a = new Ew(), o = n.renderer || "canvas";
      if (Ea[o] || (o = It(Ea)[0]), !Ea[o])
        throw new Error("Renderer '" + o + "' is not imported. Please import it first.");
      n.useDirtyRect = n.useDirtyRect == null ? !1 : n.useDirtyRect;
      var s = new Ea[o](e, a, n, t), l = n.ssr || s.ssrOnly;
      this.storage = a, this.painter = s;
      var u = !O.node && !O.worker && !l ? new lb(s.getViewportRoot(), s.root) : null, f = n.useCoarsePointer, h = f == null || f === "auto" ? O.touchEventsSupported : !!f, v = 44, c;
      h && (c = ut(n.pointerSize, v)), this.handler = new _d(a, s, u, s.root, c), this.animation = new eb({
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
      this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this.refresh(), this._backgroundColor = t, this._darkMode = yb(t);
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
      var e, n = Ni();
      this._needsRefresh && (e = !0, this.refreshImmediately(t)), this._needsRefreshHover && (e = !0, this.refreshHoverImmediately());
      var i = Ni();
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
        t[e] instanceof Zt && t[e].removeSelfFromZr(this);
      this.storage.delAllRoots(), this.painter.clear();
    }, r.prototype.dispose = function() {
      this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, mb(this.id);
    }, r;
  }();
  function Mf(r, t) {
    var e = new _b(Lu(), r, t);
    return Yn[e.id] = e, e;
  }
  function Sb(r) {
    r.dispose();
  }
  function wb() {
    for (var r in Yn)
      Yn.hasOwnProperty(r) && Yn[r].dispose();
    Yn = {};
  }
  function bb(r) {
    return Yn[r];
  }
  function rp(r, t) {
    Ea[r] = t;
  }
  var xb = "5.4.3", Tb = (Object.freeze || Object)({
    init: Mf,
    dispose: Sb,
    disposeAll: wb,
    getInstance: bb,
    registerPainter: rp,
    version: xb
  }), np = 1e-4, ip = 20;
  function Cb(r) {
    return r.replace(/^\s+|\s+$/g, "");
  }
  function ws(r, t, e, n) {
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
  function Lt(r, t) {
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
    return Z(r) ? Cb(r).match(/%$/) ? parseFloat(r) / 100 * t : parseFloat(r) : r == null ? NaN : +r;
  }
  function zt(r, t, e) {
    return t == null && (t = 10), t = Math.min(Math.max(0, t), ip), r = (+r).toFixed(t), e ? r : +r;
  }
  function Db(r) {
    return r.sort(function(t, e) {
      return t - e;
    }), r;
  }
  function xr(r) {
    if (r = +r, isNaN(r))
      return 0;
    if (r > 1e-14) {
      for (var t = 1, e = 0; e < 15; e++, t *= 10)
        if (Math.round(r * t) / t === r)
          return e;
    }
    return bs(r);
  }
  function bs(r) {
    var t = r.toString().toLowerCase(), e = t.indexOf("e"), n = e > 0 ? +t.slice(e + 1) : 0, i = e > 0 ? e : t.length, a = t.indexOf("."), o = a < 0 ? 0 : i - 1 - a;
    return Math.max(0, o - n);
  }
  function ap(r, t) {
    var e = Math.log, n = Math.LN10, i = Math.floor(e(r[1] - r[0]) / n), a = Math.round(e(Math.abs(t[1] - t[0])) / n), o = Math.min(Math.max(-i + a, 0), 20);
    return isFinite(o) ? o : 20;
  }
  function Mb(r, t, e) {
    if (!r[t])
      return 0;
    var n = op(r, e);
    return n[t] || 0;
  }
  function op(r, t) {
    var e = Sr(r, function(c, d) {
      return c + (isNaN(d) ? 0 : d);
    }, 0);
    if (e === 0)
      return [];
    for (var n = Math.pow(10, t), i = K(r, function(c) {
      return (isNaN(c) ? 0 : c) / e * n * 100;
    }), a = n * 100, o = K(i, function(c) {
      return Math.floor(c);
    }), s = Sr(o, function(c, d) {
      return c + d;
    }, 0), l = K(i, function(c, d) {
      return c - o[d];
    }); s < a; ) {
      for (var u = Number.NEGATIVE_INFINITY, f = null, h = 0, v = l.length; h < v; ++h)
        l[h] > u && (u = l[h], f = h);
      ++o[f], l[f] = 0, ++s;
    }
    return K(o, function(c) {
      return c / n;
    });
  }
  function Ab(r, t) {
    var e = Math.max(xr(r), xr(t)), n = r + t;
    return e > ip ? n : zt(n, e);
  }
  var Pb = 9007199254740991;
  function Af(r) {
    var t = Math.PI * 2;
    return (r % t + t) % t;
  }
  function Ra(r) {
    return r > -np && r < np;
  }
  var Ib = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
  function Xe(r) {
    if (r instanceof Date)
      return r;
    if (Z(r)) {
      var t = Ib.exec(r);
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
  function sp(r) {
    return Math.pow(10, Oa(r));
  }
  function Oa(r) {
    if (r === 0)
      return 0;
    var t = Math.floor(Math.log(r) / Math.LN10);
    return r / Math.pow(10, t) >= 10 && t++, t;
  }
  function Pf(r, t) {
    var e = Oa(r), n = Math.pow(10, e), i = r / n, a;
    return t ? i < 1.5 ? a = 1 : i < 2.5 ? a = 2 : i < 4 ? a = 3 : i < 7 ? a = 5 : a = 10 : i < 1 ? a = 1 : i < 2 ? a = 2 : i < 3 ? a = 3 : i < 5 ? a = 5 : a = 10, r = a * n, e >= -20 ? +r.toFixed(e < 0 ? -e : 0) : r;
  }
  function Lb(r, t) {
    var e = (r.length - 1) * t + 1, n = Math.floor(e), i = +r[n - 1], a = e - n;
    return a ? i + a * (r[n] - i) : i;
  }
  function Eb(r) {
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
  function ka(r) {
    var t = parseFloat(r);
    return t == r && (t !== 0 || !Z(r) || r.indexOf("x") <= 0) ? t : NaN;
  }
  function If(r) {
    return !isNaN(ka(r));
  }
  function lp() {
    return Math.round(Math.random() * 9);
  }
  function up(r, t) {
    return t === 0 ? r : up(t, r % t);
  }
  function fp(r, t) {
    return r == null ? t : t == null ? r : r * t / up(r, t);
  }
  var Rb = "[ECharts] ", hp = {}, Ob = typeof console < "u" && console.warn && console.log;
  function xs(r, t, e) {
    if (Ob) {
      if (e) {
        if (hp[t])
          return;
        hp[t] = !0;
      }
      console[r](Rb + t);
    }
  }
  function kb(r, t) {
    xs("log", r, t);
  }
  function ee(r, t) {
    xs("warn", r, t);
  }
  function re(r, t) {
    xs("error", r, t);
  }
  function sr(r) {
    xs("warn", "DEPRECATED: " + r, !0);
  }
  function Wt(r, t, e) {
    sr((e ? "[" + e + "]" : "") + (r + " is deprecated, use " + t + " instead."));
  }
  function Ts() {
    for (var r = [], t = 0; t < arguments.length; t++)
      r[t] = arguments[t];
    var e = "";
    {
      var n = function(i) {
        return i === void 0 ? "undefined" : i === 1 / 0 ? "Infinity" : i === -1 / 0 ? "-Infinity" : Pi(i) ? "NaN" : i instanceof Date ? "Date(" + i.toISOString() + ")" : tt(i) ? "function () { ... }" : ed(i) ? i + "" : null;
      };
      e = K(r, function(i) {
        if (Z(i))
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
  function be(r) {
    throw new Error(r);
  }
  function cp(r, t, e) {
    return (t - r) * e + r;
  }
  var vp = "series\0", Nb = "\0_ec_\0";
  function ce(r) {
    return r instanceof Array ? r : r == null ? [] : [r];
  }
  function Lf(r, t, e) {
    if (r) {
      r[t] = r[t] || {}, r.emphasis = r.emphasis || {}, r.emphasis[t] = r.emphasis[t] || {};
      for (var n = 0, i = e.length; n < i; n++) {
        var a = e[n];
        !r.emphasis[t].hasOwnProperty(a) && r[t].hasOwnProperty(a) && (r.emphasis[t][a] = r[t][a]);
      }
    }
  }
  var dp = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"];
  function Na(r) {
    return j(r) && !X(r) && !(r instanceof Date) ? r.value : r;
  }
  function Bb(r) {
    return j(r) && !(r instanceof Array);
  }
  function Fb(r, t, e) {
    var n = e === "normalMerge", i = e === "replaceMerge", a = e === "replaceAll";
    r = r || [], t = (t || []).slice();
    var o = lt();
    L(t, function(l, u) {
      if (!j(l)) {
        t[u] = null;
        return;
      }
      l.id != null && !mp(l.id) && gp(l.id), l.name != null && !mp(l.name) && gp(l.name);
    });
    var s = zb(r, o, e);
    return (n || i) && Vb(s, r, o, t), n && Gb(s, t), n || i ? Hb(s, t, i) : a && Wb(s, t), Ub(s), s;
  }
  function zb(r, t, e) {
    var n = [];
    if (e === "replaceAll")
      return n;
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a && a.id != null && t.set(a.id, i), n.push({
        existing: e === "replaceMerge" || Vi(a) ? null : a,
        newOption: null,
        keyInfo: null,
        brandNew: null
      });
    }
    return n;
  }
  function Vb(r, t, e, n) {
    L(n, function(i, a) {
      if (!(!i || i.id == null)) {
        var o = Ba(i.id), s = e.get(o);
        if (s != null) {
          var l = r[s];
          st(!l.newOption, 'Duplicated option on id "' + o + '".'), l.newOption = i, l.existing = t[s], n[a] = null;
        }
      }
    });
  }
  function Gb(r, t) {
    L(t, function(e, n) {
      if (!(!e || e.name == null))
        for (var i = 0; i < r.length; i++) {
          var a = r[i].existing;
          if (!r[i].newOption && a && (a.id == null || e.id == null) && !Vi(e) && !Vi(a) && pp("name", a, e)) {
            r[i].newOption = e, t[n] = null;
            return;
          }
        }
    });
  }
  function Hb(r, t, e) {
    L(t, function(n) {
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
          (i.newOption || Vi(i.existing) || // In mode "replaceMerge", here no not-mapped-non-internal-existing.
          i.existing && n.id != null && !pp("id", n, i.existing));
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
  function Wb(r, t) {
    L(t, function(e) {
      r.push({
        newOption: e,
        brandNew: !0,
        existing: null,
        keyInfo: null
      });
    });
  }
  function Ub(r) {
    var t = lt();
    L(r, function(e) {
      var n = e.existing;
      n && t.set(n.id, e);
    }), L(r, function(e) {
      var n = e.newOption;
      st(!n || n.id == null || !t.get(n.id) || t.get(n.id) === e, "id duplicates: " + (n && n.id)), n && n.id != null && t.set(n.id, e), !e.keyInfo && (e.keyInfo = {});
    }), L(r, function(e, n) {
      var i = e.existing, a = e.newOption, o = e.keyInfo;
      if (j(a)) {
        if (o.name = a.name != null ? Ba(a.name) : i ? i.name : vp + n, i)
          o.id = Ba(i.id);
        else if (a.id != null)
          o.id = Ba(a.id);
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
  function pp(r, t, e) {
    var n = Tr(t[r], null), i = Tr(e[r], null);
    return n != null && i != null && n === i;
  }
  function Ba(r) {
    if (r == null)
      throw new Error();
    return Tr(r, "");
  }
  function Tr(r, t) {
    return r == null ? t : Z(r) ? r : Mt(r) || da(r) ? r + "" : t;
  }
  function gp(r) {
    ee("`" + r + "` is invalid id or name. Must be a string or number.");
  }
  function mp(r) {
    return da(r) || If(r);
  }
  function Ef(r) {
    var t = r.name;
    return !!(t && t.indexOf(vp));
  }
  function Vi(r) {
    return r && r.id != null && Ba(r.id).indexOf(Nb) === 0;
  }
  function Yb(r, t, e) {
    L(r, function(n) {
      var i = n.newOption;
      j(i) && (n.keyInfo.mainType = t, n.keyInfo.subType = Xb(t, i, n.existing, e));
    });
  }
  function Xb(r, t, e, n) {
    var i = t.type ? t.type : e ? e.subType : n.determineSubType(r, t);
    return i;
  }
  function Xn(r, t) {
    if (t.dataIndexInside != null)
      return t.dataIndexInside;
    if (t.dataIndex != null)
      return X(t.dataIndex) ? K(t.dataIndex, function(e) {
        return r.indexOfRawIndex(e);
      }) : r.indexOfRawIndex(t.dataIndex);
    if (t.name != null)
      return X(t.name) ? K(t.name, function(e) {
        return r.indexOfName(e);
      }) : r.indexOfName(t.name);
  }
  function kt() {
    var r = "__ec_inner_" + $b++;
    return function(t) {
      return t[r] || (t[r] = {});
    };
  }
  var $b = lp();
  function Rf(r, t, e) {
    var n = Of(t, e), i = n.mainTypeSpecified, a = n.queryOptionMap, o = n.others, s = o, l = e ? e.defaultMainType : null;
    return !i && l && a.set(l, {}), a.each(function(u, f) {
      var h = Fa(r, f, u, {
        useDefault: l === f,
        enableAll: e && e.enableAll != null ? e.enableAll : !0,
        enableNone: e && e.enableNone != null ? e.enableNone : !0
      });
      s[f + "Models"] = h.models, s[f + "Model"] = h.models[0];
    }), s;
  }
  function Of(r, t) {
    var e;
    if (Z(r)) {
      var n = {};
      n[r + "Index"] = 0, e = n;
    } else
      e = r;
    var i = lt(), a = {}, o = !1;
    return L(e, function(s, l) {
      if (l === "dataIndex" || l === "dataIndexInside") {
        a[l] = s;
        return;
      }
      var u = l.match(/^(\w+)(Index|Id|Name)$/) || [], f = u[1], h = (u[2] || "").toLowerCase();
      if (!(!f || !h || t && t.includeMainTypes && wt(t.includeMainTypes, f) < 0)) {
        o = o || !!f;
        var v = i.get(f) || i.set(f, {});
        v[h] = s;
      }
    }), {
      mainTypeSpecified: o,
      queryOptionMap: i,
      others: a
    };
  }
  var lr = {
    useDefault: !0,
    enableAll: !1,
    enableNone: !1
  };
  function Fa(r, t, e, n) {
    n = n || lr;
    var i = e.index, a = e.id, o = e.name, s = {
      models: null,
      specified: i != null || a != null || o != null
    };
    if (!s.specified) {
      var l = void 0;
      return s.models = n.useDefault && (l = r.getComponent(t)) ? [l] : [], s;
    }
    return i === "none" || i === !1 ? (st(n.enableNone, '`"none"` or `false` is not a valid value on index option.'), s.models = [], s) : (i === "all" && (st(n.enableAll, '`"all"` is not a valid value on index option.'), i = a = o = null), s.models = r.queryComponents({
      mainType: t,
      index: i,
      id: a,
      name: o
    }), s);
  }
  function yp(r, t, e) {
    r.setAttribute ? r.setAttribute(t, e) : r[t] = e;
  }
  function qb(r, t) {
    return r.getAttribute ? r.getAttribute(t) : r[t];
  }
  function Zb(r) {
    return r === "auto" ? O.domSupported ? "html" : "richText" : r || "html";
  }
  function _p(r, t, e, n, i) {
    var a = t == null || t === "auto";
    if (n == null)
      return n;
    if (Mt(n)) {
      var o = cp(e || 0, n, i);
      return zt(o, a ? Math.max(xr(e || 0), xr(n)) : t);
    } else {
      if (Z(n))
        return i < 1 ? e : n;
      for (var s = [], l = e, u = n, f = Math.max(l ? l.length : 0, u.length), h = 0; h < f; ++h) {
        var v = r.getDimensionInfo(h);
        if (v && v.type === "ordinal")
          s[h] = (i < 1 && l ? l : u)[h];
        else {
          var c = l && l[h] ? l[h] : 0, d = u[h], o = cp(c, d, i);
          s[h] = zt(o, a ? Math.max(xr(c), xr(d)) : t);
        }
      }
      return s;
    }
  }
  var Kb = ".", $n = "___EC__COMPONENT__CONTAINER___", Sp = "___EC__EXTENDED_CLASS___";
  function Cr(r) {
    var t = {
      main: "",
      sub: ""
    };
    if (r) {
      var e = r.split(Kb);
      t.main = e[0] || "", t.sub = e[1] || "";
    }
    return t;
  }
  function jb(r) {
    st(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(r), 'componentType "' + r + '" illegal');
  }
  function Qb(r) {
    return !!(r && r[Sp]);
  }
  function kf(r, t) {
    r.$constructor = r, r.extend = function(e) {
      L(t, function(a) {
        e[a] || console.warn("Method `" + a + "` should be implemented" + (e.type ? " in " + e.type : "") + ".");
      });
      var n = this, i;
      return Jb(n) ? i = /** @class */
      function(a) {
        x(o, a);
        function o() {
          return a.apply(this, arguments) || this;
        }
        return o;
      }(n) : (i = function() {
        (e.$constructor || n).apply(this, arguments);
      }, Eu(i, this)), W(i.prototype, e), i[Sp] = !0, i.extend = this.extend, i.superCall = rx, i.superApply = nx, i.superClass = n, i;
    };
  }
  function Jb(r) {
    return tt(r) && /^class\s/.test(Function.prototype.toString.call(r));
  }
  function wp(r, t) {
    r.extend = t.extend;
  }
  var tx = Math.round(Math.random() * 10);
  function ex(r) {
    var t = ["__\0is_clz", tx++].join("_");
    r.prototype[t] = !0, st(!r.isInstance, 'The method "is" can not be defined.'), r.isInstance = function(e) {
      return !!(e && e[t]);
    };
  }
  function rx(r, t) {
    for (var e = [], n = 2; n < arguments.length; n++)
      e[n - 2] = arguments[n];
    return this.superClass.prototype[t].apply(r, e);
  }
  function nx(r, t, e) {
    return this.superClass.prototype[t].apply(r, e);
  }
  function Cs(r) {
    var t = {};
    r.registerClass = function(n) {
      var i = n.type || n.prototype.type;
      if (i) {
        jb(i), n.prototype.type = i;
        var a = Cr(i);
        if (!a.sub)
          t[a.main] && console.warn(a.main + " exists."), t[a.main] = n;
        else if (a.sub !== $n) {
          var o = e(a);
          o[a.sub] = n;
        }
      }
      return n;
    }, r.getClass = function(n, i, a) {
      var o = t[n];
      if (o && o[$n] && (o = i ? o[i] : null), a && !o)
        throw new Error(i ? "Component " + n + "." + (i || "") + " is used but not imported." : n + ".type should be specified.");
      return o;
    }, r.getClassesByMainType = function(n) {
      var i = Cr(n), a = [], o = t[i.main];
      return o && o[$n] ? L(o, function(s, l) {
        l !== $n && a.push(s);
      }) : a.push(o), a;
    }, r.hasClass = function(n) {
      var i = Cr(n);
      return !!t[i.main];
    }, r.getAllClassMainTypes = function() {
      var n = [];
      return L(t, function(i, a) {
        n.push(a);
      }), n;
    }, r.hasSubTypes = function(n) {
      var i = Cr(n), a = t[i.main];
      return a && a[$n];
    };
    function e(n) {
      var i = t[n.main];
      return (!i || !i[$n]) && (i = t[n.main] = {}, i[$n] = !0), i;
    }
  }
  function za(r, t) {
    for (var e = 0; e < r.length; e++)
      r[e][1] || (r[e][1] = r[e][0]);
    return t = t || !1, function(n, i, a) {
      for (var o = {}, s = 0; s < r.length; s++) {
        var l = r[s][1];
        if (!(i && wt(i, l) >= 0 || a && wt(a, l) < 0)) {
          var u = n.getShallow(l, t);
          u != null && (o[r[s][0]] = u);
        }
      }
      return o;
    };
  }
  var ix = [
    ["fill", "color"],
    ["shadowBlur"],
    ["shadowOffsetX"],
    ["shadowOffsetY"],
    ["opacity"],
    ["shadowColor"]
    // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
    // So do not transfer decal directly.
  ], ax = za(ix), ox = (
    /** @class */
    function() {
      function r() {
      }
      return r.prototype.getAreaStyle = function(t, e) {
        return ax(this, t, e);
      }, r;
    }()
  ), Nf = new Ca(50);
  function sx(r) {
    if (typeof r == "string") {
      var t = Nf.get(r);
      return t && t.image;
    } else
      return r;
  }
  function bp(r, t, e, n, i) {
    if (r)
      if (typeof r == "string") {
        if (t && t.__zrImageSrc === r || !e)
          return t;
        var a = Nf.get(r), o = {
          hostEl: e,
          cb: n,
          cbPayload: i
        };
        return a ? (t = a.image, !Ds(t) && a.pending.push(o)) : (t = Dt.loadImage(r, xp, xp), t.__zrImageSrc = r, Nf.put(r, t.__cachedImgObj = {
          image: t,
          pending: [o]
        })), t;
      } else
        return r;
    else
      return t;
  }
  function xp() {
    var r = this.__cachedImgObj;
    this.onload = this.onerror = this.__cachedImgObj = null;
    for (var t = 0; t < r.pending.length; t++) {
      var e = r.pending[t], n = e.cb;
      n && n(this, e.cbPayload), e.hostEl.dirty();
    }
    r.pending.length = 0;
  }
  function Ds(r) {
    return r && r.width && r.height;
  }
  var Bf = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
  function Tp(r, t, e, n, i) {
    if (!t)
      return "";
    var a = (r + "").split(`
`);
    i = Cp(t, e, n, i);
    for (var o = 0, s = a.length; o < s; o++)
      a[o] = Dp(a[o], i);
    return a.join(`
`);
  }
  function Cp(r, t, e, n) {
    n = n || {};
    var i = W({}, n);
    i.font = t, e = ut(e, "..."), i.maxIterations = ut(n.maxIterations, 2);
    var a = i.minChar = ut(n.minChar, 0);
    i.cnCharWidth = Ne("国", t);
    var o = i.ascCharWidth = Ne("a", t);
    i.placeholder = ut(n.placeholder, "");
    for (var s = r = Math.max(0, r - 1), l = 0; l < a && s >= o; l++)
      s -= o;
    var u = Ne(e, t);
    return u > s && (e = "", u = 0), s = r - u, i.ellipsis = e, i.ellipsisWidth = u, i.contentWidth = s, i.containerWidth = r, i;
  }
  function Dp(r, t) {
    var e = t.containerWidth, n = t.font, i = t.contentWidth;
    if (!e)
      return "";
    var a = Ne(r, n);
    if (a <= e)
      return r;
    for (var o = 0; ; o++) {
      if (a <= i || o >= t.maxIterations) {
        r += t.ellipsis;
        break;
      }
      var s = o === 0 ? lx(r, i, t.ascCharWidth, t.cnCharWidth) : a > 0 ? Math.floor(r.length * i / a) : 0;
      r = r.substr(0, s), a = Ne(r, n);
    }
    return r === "" && (r = t.placeholder), r;
  }
  function lx(r, t, e, n) {
    for (var i = 0, a = 0, o = r.length; a < o && i < t; a++) {
      var s = r.charCodeAt(a);
      i += 0 <= s && s <= 127 ? e : n;
    }
    return a;
  }
  function ux(r, t) {
    r != null && (r += "");
    var e = t.overflow, n = t.padding, i = t.font, a = e === "truncate", o = bf(i), s = ut(t.lineHeight, o), l = !!t.backgroundColor, u = t.lineOverflow === "truncate", f = t.width, h;
    f != null && (e === "break" || e === "breakAll") ? h = r ? Ap(r, t.font, f, e === "breakAll", 0).lines : [] : h = r ? r.split(`
`) : [];
    var v = h.length * s, c = ut(t.height, v);
    if (v > c && u) {
      var d = Math.floor(c / s);
      h = h.slice(0, d);
    }
    if (r && a && f != null)
      for (var g = Cp(f, i, t.ellipsis, {
        minChar: t.truncateMinChar,
        placeholder: t.placeholder
      }), p = 0; p < h.length; p++)
        h[p] = Dp(h[p], g);
    for (var m = c, _ = 0, p = 0; p < h.length; p++)
      _ = Math.max(Ne(h[p], i), _);
    f == null && (f = _);
    var S = _;
    return n && (m += n[0] + n[2], S += n[1] + n[3], f += n[1] + n[3]), l && (S = f), {
      lines: h,
      height: c,
      outerWidth: S,
      outerHeight: m,
      lineHeight: s,
      calculatedLineHeight: o,
      contentWidth: _,
      contentHeight: v,
      width: f
    };
  }
  var fx = function() {
    function r() {
    }
    return r;
  }(), Mp = function() {
    function r(t) {
      this.tokens = [], t && (this.tokens = t);
    }
    return r;
  }(), hx = function() {
    function r() {
      this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = [];
    }
    return r;
  }();
  function cx(r, t) {
    var e = new hx();
    if (r != null && (r += ""), !r)
      return e;
    for (var n = t.width, i = t.height, a = t.overflow, o = (a === "break" || a === "breakAll") && n != null ? {
      width: n,
      accumWidth: 0,
      breakAll: a === "breakAll"
    } : null, s = Bf.lastIndex = 0, l; (l = Bf.exec(r)) != null; ) {
      var u = l.index;
      u > s && Ff(e, r.substring(s, u), t, o), Ff(e, l[2], t, o, l[1]), s = Bf.lastIndex;
    }
    s < r.length && Ff(e, r.substring(s, r.length), t, o);
    var f = [], h = 0, v = 0, c = t.padding, d = a === "truncate", g = t.lineOverflow === "truncate";
    function p(U, Y, Q) {
      U.width = Y, U.lineHeight = Q, h += Q, v = Math.max(v, Y);
    }
    t:
      for (var m = 0; m < e.lines.length; m++) {
        for (var _ = e.lines[m], S = 0, b = 0, C = 0; C < _.tokens.length; C++) {
          var T = _.tokens[C], D = T.styleName && t.rich[T.styleName] || {}, M = T.textPadding = D.padding, P = M ? M[1] + M[3] : 0, E = T.font = D.font || t.font;
          T.contentHeight = bf(E);
          var A = ut(D.height, T.contentHeight);
          if (T.innerHeight = A, M && (A += M[0] + M[2]), T.height = A, T.lineHeight = tn(D.lineHeight, t.lineHeight, A), T.align = D && D.align || t.align, T.verticalAlign = D && D.verticalAlign || "middle", g && i != null && h + T.lineHeight > i) {
            C > 0 ? (_.tokens = _.tokens.slice(0, C), p(_, b, S), e.lines = e.lines.slice(0, m + 1)) : e.lines = e.lines.slice(0, m);
            break t;
          }
          var k = D.width, N = k == null || k === "auto";
          if (typeof k == "string" && k.charAt(k.length - 1) === "%")
            T.percentWidth = k, f.push(T), T.contentWidth = Ne(T.text, E);
          else {
            if (N) {
              var B = D.backgroundColor, z = B && B.image;
              z && (z = sx(z), Ds(z) && (T.width = Math.max(T.width, z.width * A / z.height)));
            }
            var G = d && n != null ? n - b : null;
            G != null && G < T.width ? !N || G < P ? (T.text = "", T.width = T.contentWidth = 0) : (T.text = Tp(T.text, G - P, E, t.ellipsis, {
              minChar: t.truncateMinChar
            }), T.width = T.contentWidth = Ne(T.text, E)) : T.contentWidth = Ne(T.text, E);
          }
          T.width += P, b += T.width, D && (S = Math.max(S, T.lineHeight));
        }
        p(_, b, S);
      }
    e.outerWidth = e.width = ut(n, v), e.outerHeight = e.height = ut(i, h), e.contentHeight = h, e.contentWidth = v, c && (e.outerWidth += c[1] + c[3], e.outerHeight += c[0] + c[2]);
    for (var m = 0; m < f.length; m++) {
      var T = f[m], J = T.percentWidth;
      T.width = parseInt(J, 10) / 100 * e.width;
    }
    return e;
  }
  function Ff(r, t, e, n, i) {
    var a = t === "", o = i && e.rich[i] || {}, s = r.lines, l = o.font || e.font, u = !1, f, h;
    if (n) {
      var v = o.padding, c = v ? v[1] + v[3] : 0;
      if (o.width != null && o.width !== "auto") {
        var d = un(o.width, n.width) + c;
        s.length > 0 && d + n.accumWidth > n.width && (f = t.split(`
`), u = !0), n.accumWidth = d;
      } else {
        var g = Ap(t, l, n.width, n.breakAll, n.accumWidth);
        n.accumWidth = g.accumWidth + c, h = g.linesWidths, f = g.lines;
      }
    } else
      f = t.split(`
`);
    for (var p = 0; p < f.length; p++) {
      var m = f[p], _ = new fx();
      if (_.styleName = i, _.text = m, _.isLineHolder = !m && !a, typeof o.width == "number" ? _.width = o.width : _.width = h ? h[p] : Ne(m, l), !p && !u) {
        var S = (s[s.length - 1] || (s[0] = new Mp())).tokens, b = S.length;
        b === 1 && S[0].isLineHolder ? S[0] = _ : (m || !b || a) && S.push(_);
      } else
        s.push(new Mp([_]));
    }
  }
  function vx(r) {
    var t = r.charCodeAt(0);
    return t >= 32 && t <= 591 || t >= 880 && t <= 4351 || t >= 4608 && t <= 5119 || t >= 7680 && t <= 8303;
  }
  var dx = Sr(",&?/;] ".split(""), function(r, t) {
    return r[t] = !0, r;
  }, {});
  function px(r) {
    return vx(r) ? !!dx[r] : !0;
  }
  function Ap(r, t, e, n, i) {
    for (var a = [], o = [], s = "", l = "", u = 0, f = 0, h = 0; h < r.length; h++) {
      var v = r.charAt(h);
      if (v === `
`) {
        l && (s += l, f += u), a.push(s), o.push(f), s = "", l = "", u = 0, f = 0;
        continue;
      }
      var c = Ne(v, t), d = n ? !1 : !px(v);
      if (a.length ? f + c > e : i + f + c > e) {
        f ? (s || l) && (d ? (s || (s = l, l = "", u = 0, f = u), a.push(s), o.push(f - u), l += v, u += c, s = "", f = u) : (l && (s += l, l = "", u = 0), a.push(s), o.push(f), s = v, f = c)) : d ? (a.push(l), o.push(u), l = v, u = c) : (a.push(v), o.push(c));
        continue;
      }
      f += c, d ? (l += v, u += c) : (l && (s += l, l = "", u = 0), s += v);
    }
    return !a.length && !s && (s = r, l = "", u = 0), l && (s += l), s && (a.push(s), o.push(f)), a.length === 1 && (f += i), {
      accumWidth: f,
      lines: a,
      linesWidths: o
    };
  }
  var zf = "__zr_style_" + Math.round(Math.random() * 10), qn = {
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: "#000",
    opacity: 1,
    blend: "source-over"
  }, Ms = {
    style: {
      shadowBlur: !0,
      shadowOffsetX: !0,
      shadowOffsetY: !0,
      shadowColor: !0,
      opacity: !0
    }
  };
  qn[zf] = !0;
  var Pp = ["z", "z2", "invisible"], gx = ["invisible"], Va = function(r) {
    x(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return t.prototype._init = function(e) {
      for (var n = It(e), i = 0; i < n.length; i++) {
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
      if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && mx(this, e, n) || o && !o[0] && !o[3])
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
        e = this._paintRect || (this._paintRect = new dt(0, 0, 0, 0)), n ? dt.applyTransform(e, i, n) : e.copy(i), (o || s || l) && (e.width += o * 2 + Math.abs(s), e.height += o * 2 + Math.abs(l), e.x = Math.min(e.x, e.x + s - o), e.y = Math.min(e.y, e.y + l - o));
        var u = this.dirtyRectTolerance;
        e.isZero() || (e.x = Math.floor(e.x - u), e.y = Math.floor(e.y - u), e.width = Math.ceil(e.width + 1 + u * 2), e.height = Math.ceil(e.height + 1 + u * 2));
      }
      return e;
    }, t.prototype.setPrevPaintRect = function(e) {
      e ? (this._prevPaintRect = this._prevPaintRect || new dt(0, 0, 0, 0), this._prevPaintRect.copy(e)) : this._prevPaintRect = null;
    }, t.prototype.getPrevPaintRect = function() {
      return this._prevPaintRect;
    }, t.prototype.animateStyle = function(e) {
      return this.animate("style", e);
    }, t.prototype.updateDuringAnimation = function(e) {
      e === "style" ? this.dirtyStyle() : this.markRedraw();
    }, t.prototype.attrKV = function(e, n) {
      e !== "style" ? r.prototype.attrKV.call(this, e, n) : this.style ? this.setStyle(n) : this.useStyle(n);
    }, t.prototype.setStyle = function(e, n) {
      return typeof e == "string" ? this.style[e] = n : W(this.style, e), this.dirtyStyle(), this;
    }, t.prototype.dirtyStyle = function(e) {
      e || this.markRedraw(), this.__dirty |= xa, this._rect && (this._rect = null);
    }, t.prototype.dirty = function() {
      this.dirtyStyle();
    }, t.prototype.styleChanged = function() {
      return !!(this.__dirty & xa);
    }, t.prototype.styleUpdated = function() {
      this.__dirty &= ~xa;
    }, t.prototype.createStyle = function(e) {
      return ma(qn, e);
    }, t.prototype.useStyle = function(e) {
      e[zf] || (e = this.createStyle(e)), this.__inHover ? this.__hoverStyle = e : this.style = e, this.dirtyStyle();
    }, t.prototype.isStyleObject = function(e) {
      return e[zf];
    }, t.prototype._innerSaveToNormal = function(e) {
      r.prototype._innerSaveToNormal.call(this, e);
      var n = this._normalState;
      e.style && !n.style && (n.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(e, n, Pp);
    }, t.prototype._applyStateObj = function(e, n, i, a, o, s) {
      r.prototype._applyStateObj.call(this, e, n, i, a, o, s);
      var l = !(n && a), u;
      if (n && n.style ? o ? a ? u = n.style : (u = this._mergeStyle(this.createStyle(), i.style), this._mergeStyle(u, n.style)) : (u = this._mergeStyle(this.createStyle(), a ? this.style : i.style), this._mergeStyle(u, n.style)) : l && (u = i.style), u)
        if (o) {
          var f = this.style;
          if (this.style = this.createStyle(l ? {} : f), l)
            for (var h = It(f), v = 0; v < h.length; v++) {
              var c = h[v];
              c in u && (u[c] = u[c], this.style[c] = f[c]);
            }
          for (var d = It(u), v = 0; v < d.length; v++) {
            var c = d[v];
            this.style[c] = this.style[c];
          }
          this._transitionState(e, {
            style: u
          }, s, this.getAnimationStyleProps());
        } else
          this.useStyle(u);
      for (var g = this.__inHover ? gx : Pp, v = 0; v < g.length; v++) {
        var c = g[v];
        n && n[c] != null ? this[c] = n[c] : l && i[c] != null && (this[c] = i[c]);
      }
    }, t.prototype._mergeStates = function(e) {
      for (var n = r.prototype._mergeStates.call(this, e), i, a = 0; a < e.length; a++) {
        var o = e[a];
        o.style && (i = i || {}, this._mergeStyle(i, o.style));
      }
      return i && (n.style = i), n;
    }, t.prototype._mergeStyle = function(e, n) {
      return W(e, n), e;
    }, t.prototype.getAnimationStyleProps = function() {
      return Ms;
    }, t.initDefaultProps = function() {
      var e = t.prototype;
      e.type = "displayable", e.invisible = !1, e.z = 0, e.z2 = 0, e.zlevel = 0, e.culling = !1, e.cursor = "pointer", e.rectHover = !1, e.incremental = !1, e._rect = null, e.dirtyRectTolerance = 0, e.__dirty = Oe | xa;
    }(), t;
  }(Ss), Vf = new dt(0, 0, 0, 0), Gf = new dt(0, 0, 0, 0);
  function mx(r, t, e) {
    return Vf.copy(r.getBoundingRect()), r.transform && Vf.applyTransform(r.transform), Gf.width = t, Gf.height = e, !Vf.intersect(Gf);
  }
  var $e = Math.min, qe = Math.max, Hf = Math.sin, Wf = Math.cos, Zn = Math.PI * 2, As = kn(), Ps = kn(), Is = kn();
  function Ip(r, t, e, n, i, a) {
    i[0] = $e(r, e), i[1] = $e(t, n), a[0] = qe(r, e), a[1] = qe(t, n);
  }
  var Lp = [], Ep = [];
  function yx(r, t, e, n, i, a, o, s, l, u) {
    var f = Ed, h = Xt, v = f(r, e, i, o, Lp);
    l[0] = 1 / 0, l[1] = 1 / 0, u[0] = -1 / 0, u[1] = -1 / 0;
    for (var c = 0; c < v; c++) {
      var d = h(r, e, i, o, Lp[c]);
      l[0] = $e(d, l[0]), u[0] = qe(d, u[0]);
    }
    v = f(t, n, a, s, Ep);
    for (var c = 0; c < v; c++) {
      var g = h(t, n, a, s, Ep[c]);
      l[1] = $e(g, l[1]), u[1] = qe(g, u[1]);
    }
    l[0] = $e(r, l[0]), u[0] = qe(r, u[0]), l[0] = $e(o, l[0]), u[0] = qe(o, u[0]), l[1] = $e(t, l[1]), u[1] = qe(t, u[1]), l[1] = $e(s, l[1]), u[1] = qe(s, u[1]);
  }
  function _x(r, t, e, n, i, a, o, s) {
    var l = kd, u = te, f = qe($e(l(r, e, i), 1), 0), h = qe($e(l(t, n, a), 1), 0), v = u(r, e, i, f), c = u(t, n, a, h);
    o[0] = $e(r, i, v), o[1] = $e(t, a, c), s[0] = qe(r, i, v), s[1] = qe(t, a, c);
  }
  function Sx(r, t, e, n, i, a, o, s, l) {
    var u = en, f = rn, h = Math.abs(i - a);
    if (h % Zn < 1e-4 && h > 1e-4) {
      s[0] = r - e, s[1] = t - n, l[0] = r + e, l[1] = t + n;
      return;
    }
    if (As[0] = Wf(i) * e + r, As[1] = Hf(i) * n + t, Ps[0] = Wf(a) * e + r, Ps[1] = Hf(a) * n + t, u(s, As, Ps), f(l, As, Ps), i = i % Zn, i < 0 && (i = i + Zn), a = a % Zn, a < 0 && (a = a + Zn), i > a && !o ? a += Zn : i < a && o && (i += Zn), o) {
      var v = a;
      a = i, i = v;
    }
    for (var c = 0; c < a; c += Math.PI / 2)
      c > i && (Is[0] = Wf(c) * e + r, Is[1] = Hf(c) * n + t, u(s, Is, s), f(l, Is, l));
  }
  var bt = {
    M: 1,
    L: 2,
    C: 3,
    Q: 4,
    A: 5,
    Z: 6,
    R: 7
  }, Kn = [], jn = [], Dr = [], fn = [], Mr = [], Ar = [], Uf = Math.min, Yf = Math.max, Qn = Math.cos, Jn = Math.sin, zr = Math.abs, Xf = Math.PI, hn = Xf * 2, $f = typeof Float32Array < "u", Ga = [];
  function qf(r) {
    var t = Math.round(r / Xf * 1e8) / 1e8;
    return t % 2 * Xf;
  }
  function bx(r, t) {
    var e = qf(r[0]);
    e < 0 && (e += hn);
    var n = e - r[0], i = r[1];
    i += n, !t && i - e >= hn ? i = e + hn : t && e - i >= hn ? i = e - hn : !t && e > i ? i = e + (hn - qf(e - i)) : t && e < i && (i = e - (hn - qf(i - e))), r[0] = e, r[1] = i;
  }
  var cn = function() {
    function r(t) {
      this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, t && (this._saveData = !1), this._saveData && (this.data = []);
    }
    return r.prototype.increaseVersion = function() {
      this._version++;
    }, r.prototype.getVersion = function() {
      return this._version;
    }, r.prototype.setScale = function(t, e, n) {
      n = n || 0, n > 0 && (this._ux = zr(n / ms / t) || 0, this._uy = zr(n / ms / e) || 0);
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
      return this._drawPendingPt(), this.addData(bt.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this;
    }, r.prototype.lineTo = function(t, e) {
      var n = zr(t - this._xi), i = zr(e - this._yi), a = n > this._ux || i > this._uy;
      if (this.addData(bt.L, t, e), this._ctx && a && this._ctx.lineTo(t, e), a)
        this._xi = t, this._yi = e, this._pendingPtDist = 0;
      else {
        var o = n * n + i * i;
        o > this._pendingPtDist && (this._pendingPtX = t, this._pendingPtY = e, this._pendingPtDist = o);
      }
      return this;
    }, r.prototype.bezierCurveTo = function(t, e, n, i, a, o) {
      return this._drawPendingPt(), this.addData(bt.C, t, e, n, i, a, o), this._ctx && this._ctx.bezierCurveTo(t, e, n, i, a, o), this._xi = a, this._yi = o, this;
    }, r.prototype.quadraticCurveTo = function(t, e, n, i) {
      return this._drawPendingPt(), this.addData(bt.Q, t, e, n, i), this._ctx && this._ctx.quadraticCurveTo(t, e, n, i), this._xi = n, this._yi = i, this;
    }, r.prototype.arc = function(t, e, n, i, a, o) {
      this._drawPendingPt(), Ga[0] = i, Ga[1] = a, bx(Ga, o), i = Ga[0], a = Ga[1];
      var s = a - i;
      return this.addData(bt.A, t, e, n, n, i, s, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, a, o), this._xi = Qn(a) * n + t, this._yi = Jn(a) * n + e, this;
    }, r.prototype.arcTo = function(t, e, n, i, a) {
      return this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, e, n, i, a), this;
    }, r.prototype.rect = function(t, e, n, i) {
      return this._drawPendingPt(), this._ctx && this._ctx.rect(t, e, n, i), this.addData(bt.R, t, e, n, i), this;
    }, r.prototype.closePath = function() {
      this._drawPendingPt(), this.addData(bt.Z);
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
      !(this.data && this.data.length === e) && $f && (this.data = new Float32Array(e));
      for (var n = 0; n < e; n++)
        this.data[n] = t[n];
      this._len = e;
    }, r.prototype.appendPath = function(t) {
      t instanceof Array || (t = [t]);
      for (var e = t.length, n = 0, i = this._len, a = 0; a < e; a++)
        n += t[a].len();
      $f && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
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
        t instanceof Array && (t.length = this._len, $f && this._len > 11 && (this.data = new Float32Array(t)));
      }
    }, r.prototype.getBoundingRect = function() {
      Dr[0] = Dr[1] = Mr[0] = Mr[1] = Number.MAX_VALUE, fn[0] = fn[1] = Ar[0] = Ar[1] = -Number.MAX_VALUE;
      var t = this.data, e = 0, n = 0, i = 0, a = 0, o;
      for (o = 0; o < this._len; ) {
        var s = t[o++], l = o === 1;
        switch (l && (e = t[o], n = t[o + 1], i = e, a = n), s) {
          case bt.M:
            e = i = t[o++], n = a = t[o++], Mr[0] = i, Mr[1] = a, Ar[0] = i, Ar[1] = a;
            break;
          case bt.L:
            Ip(e, n, t[o], t[o + 1], Mr, Ar), e = t[o++], n = t[o++];
            break;
          case bt.C:
            yx(e, n, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], Mr, Ar), e = t[o++], n = t[o++];
            break;
          case bt.Q:
            _x(e, n, t[o++], t[o++], t[o], t[o + 1], Mr, Ar), e = t[o++], n = t[o++];
            break;
          case bt.A:
            var u = t[o++], f = t[o++], h = t[o++], v = t[o++], c = t[o++], d = t[o++] + c;
            o += 1;
            var g = !t[o++];
            l && (i = Qn(c) * h + u, a = Jn(c) * v + f), Sx(u, f, h, v, c, d, g, Mr, Ar), e = Qn(d) * h + u, n = Jn(d) * v + f;
            break;
          case bt.R:
            i = e = t[o++], a = n = t[o++];
            var p = t[o++], m = t[o++];
            Ip(i, a, i + p, a + m, Mr, Ar);
            break;
          case bt.Z:
            e = i, n = a;
            break;
        }
        en(Dr, Dr, Mr), rn(fn, fn, Ar);
      }
      return o === 0 && (Dr[0] = Dr[1] = fn[0] = fn[1] = 0), new dt(Dr[0], Dr[1], fn[0] - Dr[0], fn[1] - Dr[1]);
    }, r.prototype._calculateLength = function() {
      var t = this.data, e = this._len, n = this._ux, i = this._uy, a = 0, o = 0, s = 0, l = 0;
      this._pathSegLen || (this._pathSegLen = []);
      for (var u = this._pathSegLen, f = 0, h = 0, v = 0; v < e; ) {
        var c = t[v++], d = v === 1;
        d && (a = t[v], o = t[v + 1], s = a, l = o);
        var g = -1;
        switch (c) {
          case bt.M:
            a = s = t[v++], o = l = t[v++];
            break;
          case bt.L: {
            var p = t[v++], m = t[v++], _ = p - a, S = m - o;
            (zr(_) > n || zr(S) > i || v === e - 1) && (g = Math.sqrt(_ * _ + S * S), a = p, o = m);
            break;
          }
          case bt.C: {
            var b = t[v++], C = t[v++], p = t[v++], m = t[v++], T = t[v++], D = t[v++];
            g = Rw(a, o, b, C, p, m, T, D, 10), a = T, o = D;
            break;
          }
          case bt.Q: {
            var b = t[v++], C = t[v++], p = t[v++], m = t[v++];
            g = kw(a, o, b, C, p, m, 10), a = p, o = m;
            break;
          }
          case bt.A:
            var M = t[v++], P = t[v++], E = t[v++], A = t[v++], k = t[v++], N = t[v++], B = N + k;
            v += 1, t[v++], d && (s = Qn(k) * E + M, l = Jn(k) * A + P), g = Yf(E, A) * Uf(hn, Math.abs(N)), a = Qn(B) * E + M, o = Jn(B) * A + P;
            break;
          case bt.R: {
            s = a = t[v++], l = o = t[v++];
            var z = t[v++], G = t[v++];
            g = z * 2 + G * 2;
            break;
          }
          case bt.Z: {
            var _ = s - a, S = l - o;
            g = Math.sqrt(_ * _ + S * S), a = s, o = l;
            break;
          }
        }
        g >= 0 && (u[h++] = g, f += g);
      }
      return this._pathLen = f, f;
    }, r.prototype.rebuildPath = function(t, e) {
      var n = this.data, i = this._ux, a = this._uy, o = this._len, s, l, u, f, h, v, c = e < 1, d, g, p = 0, m = 0, _, S = 0, b, C;
      if (!(c && (this._pathSegLen || this._calculateLength(), d = this._pathSegLen, g = this._pathLen, _ = e * g, !_)))
        t:
          for (var T = 0; T < o; ) {
            var D = n[T++], M = T === 1;
            switch (M && (u = n[T], f = n[T + 1], s = u, l = f), D !== bt.L && S > 0 && (t.lineTo(b, C), S = 0), D) {
              case bt.M:
                s = u = n[T++], l = f = n[T++], t.moveTo(u, f);
                break;
              case bt.L: {
                h = n[T++], v = n[T++];
                var P = zr(h - u), E = zr(v - f);
                if (P > i || E > a) {
                  if (c) {
                    var A = d[m++];
                    if (p + A > _) {
                      var k = (_ - p) / A;
                      t.lineTo(u * (1 - k) + h * k, f * (1 - k) + v * k);
                      break t;
                    }
                    p += A;
                  }
                  t.lineTo(h, v), u = h, f = v, S = 0;
                } else {
                  var N = P * P + E * E;
                  N > S && (b = h, C = v, S = N);
                }
                break;
              }
              case bt.C: {
                var B = n[T++], z = n[T++], G = n[T++], J = n[T++], U = n[T++], Y = n[T++];
                if (c) {
                  var A = d[m++];
                  if (p + A > _) {
                    var k = (_ - p) / A;
                    ss(u, B, G, U, k, Kn), ss(f, z, J, Y, k, jn), t.bezierCurveTo(Kn[1], jn[1], Kn[2], jn[2], Kn[3], jn[3]);
                    break t;
                  }
                  p += A;
                }
                t.bezierCurveTo(B, z, G, J, U, Y), u = U, f = Y;
                break;
              }
              case bt.Q: {
                var B = n[T++], z = n[T++], G = n[T++], J = n[T++];
                if (c) {
                  var A = d[m++];
                  if (p + A > _) {
                    var k = (_ - p) / A;
                    ls(u, B, G, k, Kn), ls(f, z, J, k, jn), t.quadraticCurveTo(Kn[1], jn[1], Kn[2], jn[2]);
                    break t;
                  }
                  p += A;
                }
                t.quadraticCurveTo(B, z, G, J), u = G, f = J;
                break;
              }
              case bt.A:
                var Q = n[T++], ot = n[T++], it = n[T++], ct = n[T++], Tt = n[T++], Kt = n[T++], Et = n[T++], Ie = !n[T++], ze = it > ct ? it : ct, Jt = zr(it - ct) > 1e-3, Ht = Tt + Kt, rt = !1;
                if (c) {
                  var A = d[m++];
                  p + A > _ && (Ht = Tt + Kt * (_ - p) / A, rt = !0), p += A;
                }
                if (Jt && t.ellipse ? t.ellipse(Q, ot, it, ct, Et, Tt, Ht, Ie) : t.arc(Q, ot, ze, Tt, Ht, Ie), rt)
                  break t;
                M && (s = Qn(Tt) * it + Q, l = Jn(Tt) * ct + ot), u = Qn(Ht) * it + Q, f = Jn(Ht) * ct + ot;
                break;
              case bt.R:
                s = u = n[T], l = f = n[T + 1], h = n[T++], v = n[T++];
                var ht = n[T++], kr = n[T++];
                if (c) {
                  var A = d[m++];
                  if (p + A > _) {
                    var jt = _ - p;
                    t.moveTo(h, v), t.lineTo(h + Uf(jt, ht), v), jt -= ht, jt > 0 && t.lineTo(h + ht, v + Uf(jt, kr)), jt -= kr, jt > 0 && t.lineTo(h + Yf(ht - jt, 0), v + kr), jt -= ht, jt > 0 && t.lineTo(h, v + Yf(kr - jt, 0));
                    break t;
                  }
                  p += A;
                }
                t.rect(h, v, ht, kr);
                break;
              case bt.Z:
                if (c) {
                  var A = d[m++];
                  if (p + A > _) {
                    var k = (_ - p) / A;
                    t.lineTo(u * (1 - k) + s * k, f * (1 - k) + l * k);
                    break t;
                  }
                  p += A;
                }
                t.closePath(), u = s, f = l;
            }
          }
    }, r.prototype.clone = function() {
      var t = new r(), e = this.data;
      return t.data = e.slice ? e.slice() : Array.prototype.slice.call(e), t._len = this._len, t;
    }, r.CMD = bt, r.initDefaultProps = function() {
      var t = r.prototype;
      t._saveData = !0, t._ux = 0, t._uy = 0, t._pendingPtDist = 0, t._version = 0;
    }(), r;
  }();
  function Gi(r, t, e, n, i, a, o) {
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
  function xx(r, t, e, n, i, a, o, s, l, u, f) {
    if (l === 0)
      return !1;
    var h = l;
    if (f > t + h && f > n + h && f > a + h && f > s + h || f < t - h && f < n - h && f < a - h && f < s - h || u > r + h && u > e + h && u > i + h && u > o + h || u < r - h && u < e - h && u < i - h && u < o - h)
      return !1;
    var v = Rd(r, t, e, n, i, a, o, s, u, f, null);
    return v <= h / 2;
  }
  function Tx(r, t, e, n, i, a, o, s, l) {
    if (o === 0)
      return !1;
    var u = o;
    if (l > t + u && l > n + u && l > a + u || l < t - u && l < n - u && l < a - u || s > r + u && s > e + u && s > i + u || s < r - u && s < e - u && s < i - u)
      return !1;
    var f = Nd(r, t, e, n, i, a, s, l, null);
    return f <= u / 2;
  }
  var Rp = Math.PI * 2;
  function vn(r) {
    return r %= Rp, r < 0 && (r += Rp), r;
  }
  var Ha = Math.PI * 2;
  function Cx(r, t, e, n, i, a, o, s, l) {
    if (o === 0)
      return !1;
    var u = o;
    s -= r, l -= t;
    var f = Math.sqrt(s * s + l * l);
    if (f - u > e || f + u < e)
      return !1;
    if (Math.abs(n - i) % Ha < 1e-4)
      return !0;
    if (a) {
      var h = n;
      n = vn(i), i = vn(h);
    } else
      n = vn(n), i = vn(i);
    n > i && (i += Ha);
    var v = Math.atan2(l, s);
    return v < 0 && (v += Ha), v >= n && v <= i || v + Ha >= n && v + Ha <= i;
  }
  function Vr(r, t, e, n, i, a) {
    if (a > t && a > n || a < t && a < n || n === t)
      return 0;
    var o = (a - t) / (n - t), s = n < t ? 1 : -1;
    (o === 1 || o === 0) && (s = n < t ? 0.5 : -0.5);
    var l = o * (e - r) + r;
    return l === i ? 1 / 0 : l > i ? s : 0;
  }
  var dn = cn.CMD, ti = Math.PI * 2, Dx = 1e-4;
  function Mx(r, t) {
    return Math.abs(r - t) < Dx;
  }
  var ve = [-1, -1, -1], Ze = [-1, -1];
  function Ax() {
    var r = Ze[0];
    Ze[0] = Ze[1], Ze[1] = r;
  }
  function Px(r, t, e, n, i, a, o, s, l, u) {
    if (u > t && u > n && u > a && u > s || u < t && u < n && u < a && u < s)
      return 0;
    var f = os(t, n, a, s, u, ve);
    if (f === 0)
      return 0;
    for (var h = 0, v = -1, c = void 0, d = void 0, g = 0; g < f; g++) {
      var p = ve[g], m = p === 0 || p === 1 ? 0.5 : 1, _ = Xt(r, e, i, o, p);
      _ < l || (v < 0 && (v = Ed(t, n, a, s, Ze), Ze[1] < Ze[0] && v > 1 && Ax(), c = Xt(t, n, a, s, Ze[0]), v > 1 && (d = Xt(t, n, a, s, Ze[1]))), v === 2 ? p < Ze[0] ? h += c < t ? m : -m : p < Ze[1] ? h += d < c ? m : -m : h += s < d ? m : -m : p < Ze[0] ? h += c < t ? m : -m : h += s < c ? m : -m);
    }
    return h;
  }
  function Ix(r, t, e, n, i, a, o, s) {
    if (s > t && s > n && s > a || s < t && s < n && s < a)
      return 0;
    var l = Ow(t, n, a, s, ve);
    if (l === 0)
      return 0;
    var u = kd(t, n, a);
    if (u >= 0 && u <= 1) {
      for (var f = 0, h = te(t, n, a, u), v = 0; v < l; v++) {
        var c = ve[v] === 0 || ve[v] === 1 ? 0.5 : 1, d = te(r, e, i, ve[v]);
        d < o || (ve[v] < u ? f += h < t ? c : -c : f += a < h ? c : -c);
      }
      return f;
    } else {
      var c = ve[0] === 0 || ve[0] === 1 ? 0.5 : 1, d = te(r, e, i, ve[0]);
      return d < o ? 0 : a < t ? c : -c;
    }
  }
  function Lx(r, t, e, n, i, a, o, s) {
    if (s -= t, s > e || s < -e)
      return 0;
    var l = Math.sqrt(e * e - s * s);
    ve[0] = -l, ve[1] = l;
    var u = Math.abs(n - i);
    if (u < 1e-4)
      return 0;
    if (u >= ti - 1e-4) {
      n = 0, i = ti;
      var f = a ? 1 : -1;
      return o >= ve[0] + r && o <= ve[1] + r ? f : 0;
    }
    if (n > i) {
      var h = n;
      n = i, i = h;
    }
    n < 0 && (n += ti, i += ti);
    for (var v = 0, c = 0; c < 2; c++) {
      var d = ve[c];
      if (d + r > o) {
        var g = Math.atan2(s, d), f = a ? 1 : -1;
        g < 0 && (g = ti + g), (g >= n && g <= i || g + ti >= n && g + ti <= i) && (g > Math.PI / 2 && g < Math.PI * 1.5 && (f = -f), v += f);
      }
    }
    return v;
  }
  function Op(r, t, e, n, i) {
    for (var a = r.data, o = r.len(), s = 0, l = 0, u = 0, f = 0, h = 0, v, c, d = 0; d < o; ) {
      var g = a[d++], p = d === 1;
      switch (g === dn.M && d > 1 && (e || (s += Vr(l, u, f, h, n, i))), p && (l = a[d], u = a[d + 1], f = l, h = u), g) {
        case dn.M:
          f = a[d++], h = a[d++], l = f, u = h;
          break;
        case dn.L:
          if (e) {
            if (Gi(l, u, a[d], a[d + 1], t, n, i))
              return !0;
          } else
            s += Vr(l, u, a[d], a[d + 1], n, i) || 0;
          l = a[d++], u = a[d++];
          break;
        case dn.C:
          if (e) {
            if (xx(l, u, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], t, n, i))
              return !0;
          } else
            s += Px(l, u, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], n, i) || 0;
          l = a[d++], u = a[d++];
          break;
        case dn.Q:
          if (e) {
            if (Tx(l, u, a[d++], a[d++], a[d], a[d + 1], t, n, i))
              return !0;
          } else
            s += Ix(l, u, a[d++], a[d++], a[d], a[d + 1], n, i) || 0;
          l = a[d++], u = a[d++];
          break;
        case dn.A:
          var m = a[d++], _ = a[d++], S = a[d++], b = a[d++], C = a[d++], T = a[d++];
          d += 1;
          var D = !!(1 - a[d++]);
          v = Math.cos(C) * S + m, c = Math.sin(C) * b + _, p ? (f = v, h = c) : s += Vr(l, u, v, c, n, i);
          var M = (n - m) * b / S + m;
          if (e) {
            if (Cx(m, _, b, C, C + T, D, t, M, i))
              return !0;
          } else
            s += Lx(m, _, b, C, C + T, D, M, i);
          l = Math.cos(C + T) * S + m, u = Math.sin(C + T) * b + _;
          break;
        case dn.R:
          f = l = a[d++], h = u = a[d++];
          var P = a[d++], E = a[d++];
          if (v = f + P, c = h + E, e) {
            if (Gi(f, h, v, h, t, n, i) || Gi(v, h, v, c, t, n, i) || Gi(v, c, f, c, t, n, i) || Gi(f, c, f, h, t, n, i))
              return !0;
          } else
            s += Vr(v, h, v, c, n, i), s += Vr(f, c, f, h, n, i);
          break;
        case dn.Z:
          if (e) {
            if (Gi(l, u, f, h, t, n, i))
              return !0;
          } else
            s += Vr(l, u, f, h, n, i);
          l = f, u = h;
          break;
      }
    }
    return !e && !Mx(u, h) && (s += Vr(l, u, f, h, n, i) || 0), s !== 0;
  }
  function Ex(r, t, e) {
    return Op(r, 0, !1, t, e);
  }
  function Rx(r, t, e, n) {
    return Op(r, t, !0, e, n);
  }
  var kp = St({
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
  }, qn), Ox = {
    style: St({
      fill: !0,
      stroke: !0,
      strokePercent: !0,
      fillOpacity: !0,
      strokeOpacity: !0,
      lineDashOffset: !0,
      lineWidth: !0,
      miterLimit: !0
    }, Ms.style)
  }, Zf = Ia.concat(["invisible", "culling", "z", "z2", "zlevel", "parent"]), xt = function(r) {
    x(t, r);
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
        for (var s = 0; s < Zf.length; ++s)
          i[Zf[s]] = this[Zf[s]];
        i.__dirty |= Oe;
      } else
        this._decalEl && (this._decalEl = null);
    }, t.prototype.getDecalElement = function() {
      return this._decalEl;
    }, t.prototype._init = function(e) {
      var n = It(e);
      this.shape = this.getDefaultShape();
      var i = this.getDefaultStyle();
      i && this.useStyle(i);
      for (var a = 0; a < n.length; a++) {
        var o = n[a], s = e[o];
        o === "style" ? this.style ? W(this.style, s) : this.useStyle(s) : o === "shape" ? W(this.shape, s) : r.prototype.attrKV.call(this, o, s);
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
        if (Z(e)) {
          var n = Ma(e, 0);
          return n > 0.5 ? mf : n > 0.2 ? ub : yf;
        } else if (e)
          return yf;
      }
      return mf;
    }, t.prototype.getInsideTextStroke = function(e) {
      var n = this.style.fill;
      if (Z(n)) {
        var i = this.__zr, a = !!(i && i.isDarkMode()), o = Ma(e, 0) < gf;
        if (a === o)
          return n;
      }
    }, t.prototype.buildPath = function(e, n, i) {
    }, t.prototype.pathUpdated = function() {
      this.__dirty &= ~Ri;
    }, t.prototype.getUpdatedPathProxy = function(e) {
      return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, e), this.path;
    }, t.prototype.createPathProxy = function() {
      this.path = new cn(!1);
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
        (a || this.__dirty & Ri) && (o.beginPath(), this.buildPath(o, this.shape, !1), this.pathUpdated()), e = o.getBoundingRect();
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
          if (u > 1e-10 && (this.hasFill() || (l = Math.max(l, this.strokeContainThreshold)), Rx(s, l / u, e, n)))
            return !0;
        }
        if (this.hasFill())
          return Ex(s, e, n);
      }
      return !1;
    }, t.prototype.dirtyShape = function() {
      this.__dirty |= Ri, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw();
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
      return i || (i = this.shape = {}), typeof e == "string" ? i[e] = n : W(i, e), this.dirtyShape(), this;
    }, t.prototype.shapeChanged = function() {
      return !!(this.__dirty & Ri);
    }, t.prototype.createStyle = function(e) {
      return ma(kp, e);
    }, t.prototype._innerSaveToNormal = function(e) {
      r.prototype._innerSaveToNormal.call(this, e);
      var n = this._normalState;
      e.shape && !n.shape && (n.shape = W({}, this.shape));
    }, t.prototype._applyStateObj = function(e, n, i, a, o, s) {
      r.prototype._applyStateObj.call(this, e, n, i, a, o, s);
      var l = !(n && a), u;
      if (n && n.shape ? o ? a ? u = n.shape : (u = W({}, i.shape), W(u, n.shape)) : (u = W({}, a ? this.shape : i.shape), W(u, n.shape)) : l && (u = i.shape), u)
        if (o) {
          this.shape = W({}, this.shape);
          for (var f = {}, h = It(u), v = 0; v < h.length; v++) {
            var c = h[v];
            typeof u[c] == "object" ? this.shape[c] = u[c] : f[c] = u[c];
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
      return Ox;
    }, t.prototype.isZeroArea = function() {
      return !1;
    }, t.extend = function(e) {
      var n = function(a) {
        x(o, a);
        function o(s) {
          var l = a.call(this, s) || this;
          return e.init && e.init.call(l, s), l;
        }
        return o.prototype.getDefaultStyle = function() {
          return vt(e.style);
        }, o.prototype.getDefaultShape = function() {
          return vt(e.shape);
        }, o;
      }(t);
      for (var i in e)
        typeof e[i] == "function" && (n.prototype[i] = e[i]);
      return n;
    }, t.initDefaultProps = function() {
      var e = t.prototype;
      e.type = "path", e.strokeContainThreshold = 5, e.segmentIgnoreThreshold = 0, e.subPixelOptimize = !1, e.autoBatch = !1, e.__dirty = Oe | xa | Ri;
    }(), t;
  }(Va), kx = St({
    strokeFirst: !0,
    font: nt,
    x: 0,
    y: 0,
    textAlign: "left",
    textBaseline: "top",
    miterLimit: 2
  }, kp), Ls = function(r) {
    x(t, r);
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
      return ma(kx, e);
    }, t.prototype.setBoundingRect = function(e) {
      this._rect = e;
    }, t.prototype.getBoundingRect = function() {
      var e = this.style;
      if (!this._rect) {
        var n = e.text;
        n != null ? n += "" : n = "";
        var i = wf(n, e.font, e.textAlign, e.textBaseline);
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
  }(Va);
  Ls.prototype.type = "tspan";
  var Nx = St({
    x: 0,
    y: 0
  }, qn), Bx = {
    style: St({
      x: !0,
      y: !0,
      width: !0,
      height: !0,
      sx: !0,
      sy: !0,
      sWidth: !0,
      sHeight: !0
    }, Ms.style)
  };
  function Fx(r) {
    return !!(r && typeof r != "string" && r.width && r.height);
  }
  var Gr = function(r) {
    x(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.createStyle = function(e) {
      return ma(Nx, e);
    }, t.prototype._getSize = function(e) {
      var n = this.style, i = n[e];
      if (i != null)
        return i;
      var a = Fx(n.image) ? n.image : this.__image;
      if (!a)
        return 0;
      var o = e === "width" ? "height" : "width", s = n[o];
      return s == null ? a[e] : a[e] / a[o] * s;
    }, t.prototype.getWidth = function() {
      return this._getSize("width");
    }, t.prototype.getHeight = function() {
      return this._getSize("height");
    }, t.prototype.getAnimationStyleProps = function() {
      return Bx;
    }, t.prototype.getBoundingRect = function() {
      var e = this.style;
      return this._rect || (this._rect = new dt(e.x || 0, e.y || 0, this.getWidth(), this.getHeight())), this._rect;
    }, t;
  }(Va);
  Gr.prototype.type = "image";
  function zx(r, t) {
    var e = t.x, n = t.y, i = t.width, a = t.height, o = t.r, s, l, u, f;
    i < 0 && (e = e + i, i = -i), a < 0 && (n = n + a, a = -a), typeof o == "number" ? s = l = u = f = o : o instanceof Array ? o.length === 1 ? s = l = u = f = o[0] : o.length === 2 ? (s = u = o[0], l = f = o[1]) : o.length === 3 ? (s = o[0], l = f = o[1], u = o[2]) : (s = o[0], l = o[1], u = o[2], f = o[3]) : s = l = u = f = 0;
    var h;
    s + l > i && (h = s + l, s *= i / h, l *= i / h), u + f > i && (h = u + f, u *= i / h, f *= i / h), l + u > a && (h = l + u, l *= a / h, u *= a / h), s + f > a && (h = s + f, s *= a / h, f *= a / h), r.moveTo(e + s, n), r.lineTo(e + i - l, n), l !== 0 && r.arc(e + i - l, n + l, l, -Math.PI / 2, 0), r.lineTo(e + i, n + a - u), u !== 0 && r.arc(e + i - u, n + a - u, u, 0, Math.PI / 2), r.lineTo(e + f, n + a), f !== 0 && r.arc(e + f, n + a - f, f, Math.PI / 2, Math.PI), r.lineTo(e, n + s), s !== 0 && r.arc(e + s, n + s, s, Math.PI, Math.PI * 1.5);
  }
  var Hi = Math.round;
  function Np(r, t, e) {
    if (t) {
      var n = t.x1, i = t.x2, a = t.y1, o = t.y2;
      r.x1 = n, r.x2 = i, r.y1 = a, r.y2 = o;
      var s = e && e.lineWidth;
      return s && (Hi(n * 2) === Hi(i * 2) && (r.x1 = r.x2 = ei(n, s, !0)), Hi(a * 2) === Hi(o * 2) && (r.y1 = r.y2 = ei(a, s, !0))), r;
    }
  }
  function Bp(r, t, e) {
    if (t) {
      var n = t.x, i = t.y, a = t.width, o = t.height;
      r.x = n, r.y = i, r.width = a, r.height = o;
      var s = e && e.lineWidth;
      return s && (r.x = ei(n, s, !0), r.y = ei(i, s, !0), r.width = Math.max(ei(n + a, s, !1) - r.x, a === 0 ? 0 : 1), r.height = Math.max(ei(i + o, s, !1) - r.y, o === 0 ? 0 : 1)), r;
    }
  }
  function ei(r, t, e) {
    if (!t)
      return r;
    var n = Hi(r * 2);
    return (n + Hi(t)) % 2 === 0 ? n / 2 : (n + (e ? 1 : -1)) / 2;
  }
  var Vx = function() {
    function r() {
      this.x = 0, this.y = 0, this.width = 0, this.height = 0;
    }
    return r;
  }(), Gx = {}, Vt = function(r) {
    x(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return t.prototype.getDefaultShape = function() {
      return new Vx();
    }, t.prototype.buildPath = function(e, n) {
      var i, a, o, s;
      if (this.subPixelOptimize) {
        var l = Bp(Gx, n, this.style);
        i = l.x, a = l.y, o = l.width, s = l.height, l.r = n.r, n = l;
      } else
        i = n.x, a = n.y, o = n.width, s = n.height;
      n.r ? zx(e, n) : e.rect(i, a, o, s);
    }, t.prototype.isZeroArea = function() {
      return !this.shape.width || !this.shape.height;
    }, t;
  }(xt);
  Vt.prototype.type = "rect";
  var Fp = {
    fill: "#000"
  }, zp = 2, Hx = {
    style: St({
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
    }, Ms.style)
  }, $t = function(r) {
    x(t, r);
    function t(e) {
      var n = r.call(this) || this;
      return n.type = "text", n._children = [], n._defaultStyle = Fp, n.attr(e), n;
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
      this._childCursor = 0, $x(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated();
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
        for (var e = new dt(0, 0, 0, 0), n = this._children, i = [], a = null, o = 0; o < n.length; o++) {
          var s = n[o], l = s.getBoundingRect(), u = s.getLocalTransform(i);
          u ? (e.copy(l), e.applyTransform(u), a = a || e.clone(), a.union(e)) : (a = a || l.clone(), a.union(l));
        }
        this._rect = a || e;
      }
      return this._rect;
    }, t.prototype.setDefaultTextStyle = function(e) {
      this._defaultStyle = e || Fp;
    }, t.prototype.setTextContent = function(e) {
      throw new Error("Can't attach text on another text");
    }, t.prototype._mergeStyle = function(e, n) {
      if (!n)
        return e;
      var i = n.rich, a = e.rich || i && {};
      return W(e, n), i && a ? (this._mergeRich(a, i), e.rich = a) : a && (e.rich = a), e;
    }, t.prototype._mergeRich = function(e, n) {
      for (var i = It(n), a = 0; a < i.length; a++) {
        var o = i[a];
        e[o] = e[o] || {}, W(e[o], n[o]);
      }
    }, t.prototype.getAnimationStyleProps = function() {
      return Hx;
    }, t.prototype._getOrCreateChild = function(e) {
      var n = this._children[this._childCursor];
      return (!n || !(n instanceof e)) && (n = new e()), this._children[this._childCursor++] = n, n.__zr = this.__zr, n.parent = this, n;
    }, t.prototype._updatePlainTexts = function() {
      var e = this.style, n = e.font || nt, i = e.padding, a = Xp(e), o = ux(a, e), s = Kf(e), l = !!e.backgroundColor, u = o.outerHeight, f = o.outerWidth, h = o.contentWidth, v = o.lines, c = o.lineHeight, d = this._defaultStyle, g = e.x || 0, p = e.y || 0, m = e.align || d.align || "left", _ = e.verticalAlign || d.verticalAlign || "top", S = g, b = Fi(p, o.contentHeight, _);
      if (s || i) {
        var C = La(g, f, m), T = Fi(p, u, _);
        s && this._renderBackground(e, e, C, T, f, u);
      }
      b += c / 2, i && (S = Yp(g, m, i), _ === "top" ? b += i[0] : _ === "bottom" && (b -= i[2]));
      for (var D = 0, M = !1, P = Up("fill" in e ? e.fill : (M = !0, d.fill)), E = Wp("stroke" in e ? e.stroke : !l && (!d.autoStroke || M) ? (D = zp, d.stroke) : null), A = e.textShadowBlur > 0, k = e.width != null && (e.overflow === "truncate" || e.overflow === "break" || e.overflow === "breakAll"), N = o.calculatedLineHeight, B = 0; B < v.length; B++) {
        var z = this._getOrCreateChild(Ls), G = z.createStyle();
        z.useStyle(G), G.text = v[B], G.x = S, G.y = b, m && (G.textAlign = m), G.textBaseline = "middle", G.opacity = e.opacity, G.strokeFirst = !0, A && (G.shadowBlur = e.textShadowBlur || 0, G.shadowColor = e.textShadowColor || "transparent", G.shadowOffsetX = e.textShadowOffsetX || 0, G.shadowOffsetY = e.textShadowOffsetY || 0), G.stroke = E, G.fill = P, E && (G.lineWidth = e.lineWidth || D, G.lineDash = e.lineDash, G.lineDashOffset = e.lineDashOffset || 0), G.font = n, Gp(G, e), b += c, k && z.setBoundingRect(new dt(La(G.x, e.width, G.textAlign), Fi(G.y, N, G.textBaseline), h, N));
      }
    }, t.prototype._updateRichTexts = function() {
      var e = this.style, n = Xp(e), i = cx(n, e), a = i.width, o = i.outerWidth, s = i.outerHeight, l = e.padding, u = e.x || 0, f = e.y || 0, h = this._defaultStyle, v = e.align || h.align, c = e.verticalAlign || h.verticalAlign, d = La(u, o, v), g = Fi(f, s, c), p = d, m = g;
      l && (p += l[3], m += l[0]);
      var _ = p + a;
      Kf(e) && this._renderBackground(e, e, d, g, o, s);
      for (var S = !!e.backgroundColor, b = 0; b < i.lines.length; b++) {
        for (var C = i.lines[b], T = C.tokens, D = T.length, M = C.lineHeight, P = C.width, E = 0, A = p, k = _, N = D - 1, B = void 0; E < D && (B = T[E], !B.align || B.align === "left"); )
          this._placeToken(B, e, M, m, A, "left", S), P -= B.width, A += B.width, E++;
        for (; N >= 0 && (B = T[N], B.align === "right"); )
          this._placeToken(B, e, M, m, k, "right", S), P -= B.width, k -= B.width, N--;
        for (A += (a - (A - p) - (_ - k) - P) / 2; E <= N; )
          B = T[E], this._placeToken(B, e, M, m, A + B.width / 2, "center", S), A += B.width, E++;
        m += M;
      }
    }, t.prototype._placeToken = function(e, n, i, a, o, s, l) {
      var u = n.rich[e.styleName] || {};
      u.text = e.text;
      var f = e.verticalAlign, h = a + i / 2;
      f === "top" ? h = a + e.height / 2 : f === "bottom" && (h = a + i - e.height / 2);
      var v = !e.isLineHolder && Kf(u);
      v && this._renderBackground(u, n, s === "right" ? o - e.width : s === "center" ? o - e.width / 2 : o, h - e.height / 2, e.width, e.height);
      var c = !!u.backgroundColor, d = e.textPadding;
      d && (o = Yp(o, s, d), h -= e.height / 2 - d[0] - e.innerHeight / 2);
      var g = this._getOrCreateChild(Ls), p = g.createStyle();
      g.useStyle(p);
      var m = this._defaultStyle, _ = !1, S = 0, b = Up("fill" in u ? u.fill : "fill" in n ? n.fill : (_ = !0, m.fill)), C = Wp("stroke" in u ? u.stroke : "stroke" in n ? n.stroke : !c && !l && (!m.autoStroke || _) ? (S = zp, m.stroke) : null), T = u.textShadowBlur > 0 || n.textShadowBlur > 0;
      p.text = e.text, p.x = o, p.y = h, T && (p.shadowBlur = u.textShadowBlur || n.textShadowBlur || 0, p.shadowColor = u.textShadowColor || n.textShadowColor || "transparent", p.shadowOffsetX = u.textShadowOffsetX || n.textShadowOffsetX || 0, p.shadowOffsetY = u.textShadowOffsetY || n.textShadowOffsetY || 0), p.textAlign = s, p.textBaseline = "middle", p.font = e.font || nt, p.opacity = tn(u.opacity, n.opacity, 1), Gp(p, u), C && (p.lineWidth = tn(u.lineWidth, n.lineWidth, S), p.lineDash = ut(u.lineDash, n.lineDash), p.lineDashOffset = n.lineDashOffset || 0, p.stroke = C), b && (p.fill = b);
      var D = e.contentWidth, M = e.contentHeight;
      g.setBoundingRect(new dt(La(p.x, D, p.textAlign), Fi(p.y, M, p.textBaseline), D, M));
    }, t.prototype._renderBackground = function(e, n, i, a, o, s) {
      var l = e.backgroundColor, u = e.borderWidth, f = e.borderColor, h = l && l.image, v = l && !h, c = e.borderRadius, d = this, g, p;
      if (v || e.lineHeight || u && f) {
        g = this._getOrCreateChild(Vt), g.useStyle(g.createStyle()), g.style.fill = null;
        var m = g.shape;
        m.x = i, m.y = a, m.width = o, m.height = s, m.r = c, g.dirtyShape();
      }
      if (v) {
        var _ = g.style;
        _.fill = l || null, _.fillOpacity = ut(e.fillOpacity, 1);
      } else if (h) {
        p = this._getOrCreateChild(Gr), p.onload = function() {
          d.dirtyStyle();
        };
        var S = p.style;
        S.image = l.image, S.x = i, S.y = a, S.width = o, S.height = s;
      }
      if (u && f) {
        var _ = g.style;
        _.lineWidth = u, _.stroke = f, _.strokeOpacity = ut(e.strokeOpacity, 1), _.lineDash = e.borderDash, _.lineDashOffset = e.borderDashOffset || 0, g.strokeContainThreshold = 0, g.hasFill() && g.hasStroke() && (_.strokeFirst = !0, _.lineWidth *= 2);
      }
      var b = (g || p).style;
      b.shadowBlur = e.shadowBlur || 0, b.shadowColor = e.shadowColor || "transparent", b.shadowOffsetX = e.shadowOffsetX || 0, b.shadowOffsetY = e.shadowOffsetY || 0, b.opacity = tn(e.opacity, n.opacity, 1);
    }, t.makeFont = function(e) {
      var n = "";
      return Xx(e) && (n = [e.fontStyle, e.fontWeight, Yx(e.fontSize), e.fontFamily || "sans-serif"].join(" ")), n && ir(n) || e.textFont || e.font;
    }, t;
  }(Va), Wx = {
    left: !0,
    right: 1,
    center: 1
  }, Ux = {
    top: 1,
    bottom: 1,
    middle: 1
  }, Vp = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
  function Yx(r) {
    return typeof r == "string" && (r.indexOf("px") !== -1 || r.indexOf("rem") !== -1 || r.indexOf("em") !== -1) ? r : isNaN(+r) ? H + "px" : r + "px";
  }
  function Gp(r, t) {
    for (var e = 0; e < Vp.length; e++) {
      var n = Vp[e], i = t[n];
      i != null && (r[n] = i);
    }
  }
  function Xx(r) {
    return r.fontSize != null || r.fontFamily || r.fontWeight;
  }
  function $x(r) {
    return Hp(r), L(r.rich, Hp), r;
  }
  function Hp(r) {
    if (r) {
      r.font = $t.makeFont(r);
      var t = r.align;
      t === "middle" && (t = "center"), r.align = t == null || Wx[t] ? t : "left";
      var e = r.verticalAlign;
      e === "center" && (e = "middle"), r.verticalAlign = e == null || Ux[e] ? e : "top";
      var n = r.padding;
      n && (r.padding = Ou(r.padding));
    }
  }
  function Wp(r, t) {
    return r == null || t <= 0 || r === "transparent" || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
  }
  function Up(r) {
    return r == null || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
  }
  function Yp(r, t, e) {
    return t === "right" ? r - e[1] : t === "center" ? r + e[3] / 2 - e[1] / 2 : r + e[3];
  }
  function Xp(r) {
    var t = r.text;
    return t != null && (t += ""), t;
  }
  function Kf(r) {
    return !!(r.backgroundColor || r.lineHeight || r.borderWidth && r.borderColor);
  }
  var _t = kt(), qx = function(r, t, e, n) {
    if (n) {
      var i = _t(n);
      i.dataIndex = e, i.dataType = t, i.seriesIndex = r, n.type === "group" && n.traverse(function(a) {
        var o = _t(a);
        o.seriesIndex = r, o.dataIndex = e, o.dataType = t;
      });
    }
  }, $p = 1, qp = {}, Zp = kt(), jf = kt(), Qf = 0, Es = 1, Rs = 2, Ke = ["emphasis", "blur", "select"], Os = ["normal", "emphasis", "blur", "select"], Zx = 10, Kx = 9, ri = "highlight", ks = "downplay", Wa = "select", Ns = "unselect", Ua = "toggleSelect";
  function Wi(r) {
    return r != null && r !== "none";
  }
  var Kp = new Ca(100);
  function jp(r) {
    if (Z(r)) {
      var t = Kp.get(r);
      return t || (t = rf(r, -0.1), Kp.put(r, t)), t;
    } else if (pa(r)) {
      var e = W({}, r);
      return e.colorStops = K(r.colorStops, function(n) {
        return {
          offset: n.offset,
          color: rf(n.color, -0.1)
        };
      }), e;
    }
    return r;
  }
  function Bs(r, t, e) {
    r.onHoverStateChange && (r.hoverState || 0) !== e && r.onHoverStateChange(t), r.hoverState = e;
  }
  function Qp(r) {
    Bs(r, "emphasis", Rs);
  }
  function Jp(r) {
    r.hoverState === Rs && Bs(r, "normal", Qf);
  }
  function Jf(r) {
    Bs(r, "blur", Es);
  }
  function tg(r) {
    r.hoverState === Es && Bs(r, "normal", Qf);
  }
  function jx(r) {
    r.selected = !0;
  }
  function Qx(r) {
    r.selected = !1;
  }
  function eg(r, t, e) {
    t(r, e);
  }
  function Hr(r, t, e) {
    eg(r, t, e), r.isGroup && r.traverse(function(n) {
      eg(n, t, e);
    });
  }
  function rg(r, t) {
    switch (t) {
      case "emphasis":
        r.hoverState = Rs;
        break;
      case "normal":
        r.hoverState = Qf;
        break;
      case "blur":
        r.hoverState = Es;
        break;
      case "select":
        r.selected = !0;
    }
  }
  function Jx(r, t, e, n) {
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
  function tT(r, t, e, n) {
    var i = e && wt(e, "select") >= 0, a = !1;
    if (r instanceof xt) {
      var o = Zp(r), s = i && o.selectFill || o.normalFill, l = i && o.selectStroke || o.normalStroke;
      if (Wi(s) || Wi(l)) {
        n = n || {};
        var u = n.style || {};
        u.fill === "inherit" ? (a = !0, n = W({}, n), u = W({}, u), u.fill = s) : !Wi(u.fill) && Wi(s) ? (a = !0, n = W({}, n), u = W({}, u), u.fill = jp(s)) : !Wi(u.stroke) && Wi(l) && (a || (n = W({}, n), u = W({}, u)), u.stroke = jp(l)), n.style = u;
      }
    }
    if (n && n.z2 == null) {
      a || (n = W({}, n));
      var f = r.z2EmphasisLift;
      n.z2 = r.z2 + (f ?? Zx);
    }
    return n;
  }
  function eT(r, t, e) {
    if (e && e.z2 == null) {
      e = W({}, e);
      var n = r.z2SelectLift;
      e.z2 = r.z2 + (n ?? Kx);
    }
    return e;
  }
  function rT(r, t, e) {
    var n = wt(r.currentStates, t) >= 0, i = r.style.opacity, a = n ? null : Jx(r, ["opacity"], t, {
      opacity: 1
    });
    e = e || {};
    var o = e.style || {};
    return o.opacity == null && (e = W({}, e), o = W({
      // Already being applied 'emphasis'. DON'T mul opacity multiple times.
      opacity: n ? i : a.opacity * 0.1
    }, o), e.style = o), e;
  }
  function th(r, t) {
    var e = this.states[r];
    if (this.style) {
      if (r === "emphasis")
        return tT(this, r, t, e);
      if (r === "blur")
        return rT(this, r, e);
      if (r === "select")
        return eT(this, r, e);
    }
    return e;
  }
  function nT(r) {
    r.stateProxy = th;
    var t = r.getTextContent(), e = r.getTextGuideLine();
    t && (t.stateProxy = th), e && (e.stateProxy = th);
  }
  function ng(r, t) {
    !lg(r, t) && !r.__highByOuter && Hr(r, Qp);
  }
  function ig(r, t) {
    !lg(r, t) && !r.__highByOuter && Hr(r, Jp);
  }
  function Fs(r, t) {
    r.__highByOuter |= 1 << (t || 0), Hr(r, Qp);
  }
  function zs(r, t) {
    !(r.__highByOuter &= ~(1 << (t || 0))) && Hr(r, Jp);
  }
  function iT(r) {
    Hr(r, Jf);
  }
  function ag(r) {
    Hr(r, tg);
  }
  function og(r) {
    Hr(r, jx);
  }
  function sg(r) {
    Hr(r, Qx);
  }
  function lg(r, t) {
    return r.__highDownSilentOnTouch && t.zrByTouch;
  }
  function ug(r) {
    var t = r.getModel(), e = [], n = [];
    t.eachComponent(function(i, a) {
      var o = jf(a), s = i === "series", l = s ? r.getViewOfSeriesModel(a) : r.getViewOfComponentModel(a);
      !s && n.push(l), o.isBlured && (l.group.traverse(function(u) {
        tg(u);
      }), s && e.push(a)), o.isBlured = !1;
    }), L(n, function(i) {
      i && i.toggleBlurSeries && i.toggleBlurSeries(e, !1, t);
    });
  }
  function eh(r, t, e, n) {
    var i = n.getModel();
    e = e || "coordinateSystem";
    function a(u, f) {
      for (var h = 0; h < f.length; h++) {
        var v = u.getItemGraphicEl(f[h]);
        v && ag(v);
      }
    }
    if (r != null && !(!t || t === "none")) {
      var o = i.getSeriesByIndex(r), s = o.coordinateSystem;
      s && s.master && (s = s.master);
      var l = [];
      i.eachSeries(function(u) {
        var f = o === u, h = u.coordinateSystem;
        h && h.master && (h = h.master);
        var v = h && s ? h === s : f;
        if (!// Not blur other series if blurScope series
        (e === "series" && !f || e === "coordinateSystem" && !v || t === "series" && f)) {
          var c = n.getViewOfSeriesModel(u);
          if (c.group.traverse(function(p) {
            Jf(p);
          }), le(t))
            a(u.getData(), t);
          else if (j(t))
            for (var d = It(t), g = 0; g < d.length; g++)
              a(u.getData(d[g]), t[d[g]]);
          l.push(u), jf(u).isBlured = !0;
        }
      }), i.eachComponent(function(u, f) {
        if (u !== "series") {
          var h = n.getViewOfComponentModel(f);
          h && h.toggleBlurSeries && h.toggleBlurSeries(l, !0, i);
        }
      });
    }
  }
  function rh(r, t, e) {
    if (!(r == null || t == null)) {
      var n = e.getModel().getComponent(r, t);
      if (n) {
        jf(n).isBlured = !0;
        var i = e.getViewOfComponentModel(n);
        !i || !i.focusBlurEnabled || i.group.traverse(function(a) {
          Jf(a);
        });
      }
    }
  }
  function aT(r, t, e) {
    var n = r.seriesIndex, i = r.getData(t.dataType);
    if (!i) {
      re("Unknown dataType " + t.dataType);
      return;
    }
    var a = Xn(i, t);
    a = (X(a) ? a[0] : a) || 0;
    var o = i.getItemGraphicEl(a);
    if (!o)
      for (var s = i.count(), l = 0; !o && l < s; )
        o = i.getItemGraphicEl(l++);
    if (o) {
      var u = _t(o);
      eh(n, u.focus, u.blurScope, e);
    } else {
      var f = r.get(["emphasis", "focus"]), h = r.get(["emphasis", "blurScope"]);
      f != null && eh(n, f, h, e);
    }
  }
  function nh(r, t, e, n) {
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
      if (Ui(s[u]) || re("param should be highDownDispatcher"), _t(s[u]).focus === "self") {
        l = !0;
        break;
      }
    return {
      focusSelf: l,
      dispatchers: s
    };
  }
  function oT(r, t, e) {
    Ui(r) || re("param should be highDownDispatcher");
    var n = _t(r), i = nh(n.componentMainType, n.componentIndex, n.componentHighDownName, e), a = i.dispatchers, o = i.focusSelf;
    a ? (o && rh(n.componentMainType, n.componentIndex, e), L(a, function(s) {
      return ng(s, t);
    })) : (eh(n.seriesIndex, n.focus, n.blurScope, e), n.focus === "self" && rh(n.componentMainType, n.componentIndex, e), ng(r, t));
  }
  function sT(r, t, e) {
    Ui(r) || re("param should be highDownDispatcher"), ug(e);
    var n = _t(r), i = nh(n.componentMainType, n.componentIndex, n.componentHighDownName, e).dispatchers;
    i ? L(i, function(a) {
      return ig(a, t);
    }) : ig(r, t);
  }
  function lT(r, t, e) {
    if (ih(t)) {
      var n = t.dataType, i = r.getData(n), a = Xn(i, t);
      X(a) || (a = [a]), r[t.type === Ua ? "toggleSelect" : t.type === Wa ? "select" : "unselect"](a, n);
    }
  }
  function fg(r) {
    var t = r.getAllData();
    L(t, function(e) {
      var n = e.data, i = e.type;
      n.eachItemGraphicEl(function(a, o) {
        r.isSelected(o, i) ? og(a) : sg(a);
      });
    });
  }
  function uT(r) {
    var t = [];
    return r.eachSeries(function(e) {
      var n = e.getAllData();
      L(n, function(i) {
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
  function Vs(r, t, e) {
    cg(r, !0), Hr(r, nT), hT(r, t, e);
  }
  function fT(r) {
    cg(r, !1);
  }
  function Ya(r, t, e, n) {
    n ? fT(r) : Vs(r, t, e);
  }
  function hT(r, t, e) {
    var n = _t(r);
    t != null ? (n.focus = t, n.blurScope = e) : n.focus && (n.focus = null);
  }
  var hg = ["emphasis", "blur", "select"], cT = {
    itemStyle: "getItemStyle",
    lineStyle: "getLineStyle",
    areaStyle: "getAreaStyle"
  };
  function Gs(r, t, e, n) {
    e = e || "itemStyle";
    for (var i = 0; i < hg.length; i++) {
      var a = hg[i], o = t.getModel([a, e]), s = r.ensureState(a);
      s.style = n ? n(o) : o[cT[e]]();
    }
  }
  function cg(r, t) {
    var e = t === !1, n = r;
    r.highDownSilentOnTouch && (n.__highDownSilentOnTouch = r.highDownSilentOnTouch), (!e || n.__highDownDispatcher) && (n.__highByOuter = n.__highByOuter || 0, n.__highDownDispatcher = !e);
  }
  function Ui(r) {
    return !!(r && r.__highDownDispatcher);
  }
  function vT(r) {
    var t = qp[r];
    return t == null && $p <= 32 && (t = qp[r] = $p++), t;
  }
  function ih(r) {
    var t = r.type;
    return t === Wa || t === Ns || t === Ua;
  }
  function vg(r) {
    var t = r.type;
    return t === ri || t === ks;
  }
  function dT(r) {
    var t = Zp(r);
    t.normalFill = r.style.fill, t.normalStroke = r.style.stroke;
    var e = r.states.select || {};
    t.selectFill = e.style && e.style.fill || null, t.selectStroke = e.style && e.style.stroke || null;
  }
  var Yi = cn.CMD, pT = [[], [], []], dg = Math.sqrt, gT = Math.atan2;
  function mT(r, t) {
    if (t) {
      var e = r.data, n = r.len(), i, a, o, s, l, u, f = Yi.M, h = Yi.C, v = Yi.L, c = Yi.R, d = Yi.A, g = Yi.Q;
      for (o = 0, s = 0; o < n; ) {
        switch (i = e[o++], s = o, a = 0, i) {
          case f:
            a = 1;
            break;
          case v:
            a = 1;
            break;
          case h:
            a = 3;
            break;
          case g:
            a = 2;
            break;
          case d:
            var p = t[4], m = t[5], _ = dg(t[0] * t[0] + t[1] * t[1]), S = dg(t[2] * t[2] + t[3] * t[3]), b = gT(-t[1] / S, t[0] / _);
            e[o] *= _, e[o++] += p, e[o] *= S, e[o++] += m, e[o++] *= _, e[o++] *= S, e[o++] += b, e[o++] += b, o += 2, s = o;
            break;
          case c:
            u[0] = e[o++], u[1] = e[o++], he(u, u, t), e[s++] = u[0], e[s++] = u[1], u[0] += e[o++], u[1] += e[o++], he(u, u, t), e[s++] = u[0], e[s++] = u[1];
        }
        for (l = 0; l < a; l++) {
          var C = pT[l];
          C[0] = e[o++], C[1] = e[o++], he(C, C, t), e[s++] = C[0], e[s++] = C[1];
        }
      }
      r.increaseVersion();
    }
  }
  var ah = Math.sqrt, Hs = Math.sin, Ws = Math.cos, Xa = Math.PI;
  function pg(r) {
    return Math.sqrt(r[0] * r[0] + r[1] * r[1]);
  }
  function oh(r, t) {
    return (r[0] * t[0] + r[1] * t[1]) / (pg(r) * pg(t));
  }
  function gg(r, t) {
    return (r[0] * t[1] < r[1] * t[0] ? -1 : 1) * Math.acos(oh(r, t));
  }
  function mg(r, t, e, n, i, a, o, s, l, u, f) {
    var h = l * (Xa / 180), v = Ws(h) * (r - e) / 2 + Hs(h) * (t - n) / 2, c = -1 * Hs(h) * (r - e) / 2 + Ws(h) * (t - n) / 2, d = v * v / (o * o) + c * c / (s * s);
    d > 1 && (o *= ah(d), s *= ah(d));
    var g = (i === a ? -1 : 1) * ah((o * o * (s * s) - o * o * (c * c) - s * s * (v * v)) / (o * o * (c * c) + s * s * (v * v))) || 0, p = g * o * c / s, m = g * -s * v / o, _ = (r + e) / 2 + Ws(h) * p - Hs(h) * m, S = (t + n) / 2 + Hs(h) * p + Ws(h) * m, b = gg([1, 0], [(v - p) / o, (c - m) / s]), C = [(v - p) / o, (c - m) / s], T = [(-1 * v - p) / o, (-1 * c - m) / s], D = gg(C, T);
    if (oh(C, T) <= -1 && (D = Xa), oh(C, T) >= 1 && (D = 0), D < 0) {
      var M = Math.round(D / Xa * 1e6) / 1e6;
      D = Xa * 2 + M % 2 * Xa;
    }
    f.addData(u, _, S, o, s, b, D, h, a);
  }
  var yT = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/ig, _T = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
  function ST(r) {
    var t = new cn();
    if (!r)
      return t;
    var e = 0, n = 0, i = e, a = n, o, s = cn.CMD, l = r.match(yT);
    if (!l)
      return t;
    for (var u = 0; u < l.length; u++) {
      for (var f = l[u], h = f.charAt(0), v = void 0, c = f.match(_T) || [], d = c.length, g = 0; g < d; g++)
        c[g] = parseFloat(c[g]);
      for (var p = 0; p < d; ) {
        var m = void 0, _ = void 0, S = void 0, b = void 0, C = void 0, T = void 0, D = void 0, M = e, P = n, E = void 0, A = void 0;
        switch (h) {
          case "l":
            e += c[p++], n += c[p++], v = s.L, t.addData(v, e, n);
            break;
          case "L":
            e = c[p++], n = c[p++], v = s.L, t.addData(v, e, n);
            break;
          case "m":
            e += c[p++], n += c[p++], v = s.M, t.addData(v, e, n), i = e, a = n, h = "l";
            break;
          case "M":
            e = c[p++], n = c[p++], v = s.M, t.addData(v, e, n), i = e, a = n, h = "L";
            break;
          case "h":
            e += c[p++], v = s.L, t.addData(v, e, n);
            break;
          case "H":
            e = c[p++], v = s.L, t.addData(v, e, n);
            break;
          case "v":
            n += c[p++], v = s.L, t.addData(v, e, n);
            break;
          case "V":
            n = c[p++], v = s.L, t.addData(v, e, n);
            break;
          case "C":
            v = s.C, t.addData(v, c[p++], c[p++], c[p++], c[p++], c[p++], c[p++]), e = c[p - 2], n = c[p - 1];
            break;
          case "c":
            v = s.C, t.addData(v, c[p++] + e, c[p++] + n, c[p++] + e, c[p++] + n, c[p++] + e, c[p++] + n), e += c[p - 2], n += c[p - 1];
            break;
          case "S":
            m = e, _ = n, E = t.len(), A = t.data, o === s.C && (m += e - A[E - 4], _ += n - A[E - 3]), v = s.C, M = c[p++], P = c[p++], e = c[p++], n = c[p++], t.addData(v, m, _, M, P, e, n);
            break;
          case "s":
            m = e, _ = n, E = t.len(), A = t.data, o === s.C && (m += e - A[E - 4], _ += n - A[E - 3]), v = s.C, M = e + c[p++], P = n + c[p++], e += c[p++], n += c[p++], t.addData(v, m, _, M, P, e, n);
            break;
          case "Q":
            M = c[p++], P = c[p++], e = c[p++], n = c[p++], v = s.Q, t.addData(v, M, P, e, n);
            break;
          case "q":
            M = c[p++] + e, P = c[p++] + n, e += c[p++], n += c[p++], v = s.Q, t.addData(v, M, P, e, n);
            break;
          case "T":
            m = e, _ = n, E = t.len(), A = t.data, o === s.Q && (m += e - A[E - 4], _ += n - A[E - 3]), e = c[p++], n = c[p++], v = s.Q, t.addData(v, m, _, e, n);
            break;
          case "t":
            m = e, _ = n, E = t.len(), A = t.data, o === s.Q && (m += e - A[E - 4], _ += n - A[E - 3]), e += c[p++], n += c[p++], v = s.Q, t.addData(v, m, _, e, n);
            break;
          case "A":
            S = c[p++], b = c[p++], C = c[p++], T = c[p++], D = c[p++], M = e, P = n, e = c[p++], n = c[p++], v = s.A, mg(M, P, e, n, T, D, S, b, C, v, t);
            break;
          case "a":
            S = c[p++], b = c[p++], C = c[p++], T = c[p++], D = c[p++], M = e, P = n, e += c[p++], n += c[p++], v = s.A, mg(M, P, e, n, T, D, S, b, C, v, t);
            break;
        }
      }
      (h === "z" || h === "Z") && (v = s.Z, t.addData(v), e = i, n = a), o = v;
    }
    return t.toStatic(), t;
  }
  var yg = function(r) {
    x(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.applyTransform = function(e) {
    }, t;
  }(xt);
  function _g(r) {
    return r.setData != null;
  }
  function Sg(r, t) {
    var e = ST(r), n = W({}, t);
    return n.buildPath = function(i) {
      if (_g(i)) {
        i.setData(e.data);
        var a = i.getContext();
        a && i.rebuildPath(a, 1);
      } else {
        var a = i;
        e.rebuildPath(a, 1);
      }
    }, n.applyTransform = function(i) {
      mT(e, i), this.dirtyShape();
    }, n;
  }
  function wT(r, t) {
    return new yg(Sg(r, t));
  }
  function bT(r, t) {
    var e = Sg(r, t), n = function(i) {
      x(a, i);
      function a(o) {
        var s = i.call(this, o) || this;
        return s.applyTransform = e.applyTransform, s.buildPath = e.buildPath, s;
      }
      return a;
    }(yg);
    return n;
  }
  function xT(r, t) {
    for (var e = [], n = r.length, i = 0; i < n; i++) {
      var a = r[i];
      e.push(a.getUpdatedPathProxy(!0));
    }
    var o = new xt(t);
    return o.createPathProxy(), o.buildPath = function(s) {
      if (_g(s)) {
        s.appendPath(e);
        var l = s.getContext();
        l && s.rebuildPath(l, 1);
      }
    }, o;
  }
  var TT = function() {
    function r() {
      this.cx = 0, this.cy = 0, this.r = 0;
    }
    return r;
  }(), $a = function(r) {
    x(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return t.prototype.getDefaultShape = function() {
      return new TT();
    }, t.prototype.buildPath = function(e, n) {
      e.moveTo(n.cx + n.r, n.cy), e.arc(n.cx, n.cy, n.r, 0, Math.PI * 2);
    }, t;
  }(xt);
  $a.prototype.type = "circle";
  var CT = function() {
    function r() {
      this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0;
    }
    return r;
  }(), Us = function(r) {
    x(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return t.prototype.getDefaultShape = function() {
      return new CT();
    }, t.prototype.buildPath = function(e, n) {
      var i = 0.5522848, a = n.cx, o = n.cy, s = n.rx, l = n.ry, u = s * i, f = l * i;
      e.moveTo(a - s, o), e.bezierCurveTo(a - s, o - f, a - u, o - l, a, o - l), e.bezierCurveTo(a + u, o - l, a + s, o - f, a + s, o), e.bezierCurveTo(a + s, o + f, a + u, o + l, a, o + l), e.bezierCurveTo(a - u, o + l, a - s, o + f, a - s, o), e.closePath();
    }, t;
  }(xt);
  Us.prototype.type = "ellipse";
  var wg = Math.PI, sh = wg * 2, ni = Math.sin, Xi = Math.cos, DT = Math.acos, ne = Math.atan2, bg = Math.abs, qa = Math.sqrt, Za = Math.max, Pr = Math.min, ur = 1e-4;
  function MT(r, t, e, n, i, a, o, s) {
    var l = e - r, u = n - t, f = o - i, h = s - a, v = h * l - f * u;
    if (!(v * v < ur))
      return v = (f * (t - a) - h * (r - i)) / v, [r + v * l, t + v * u];
  }
  function Ys(r, t, e, n, i, a, o) {
    var s = r - e, l = t - n, u = (o ? a : -a) / qa(s * s + l * l), f = u * l, h = -u * s, v = r + f, c = t + h, d = e + f, g = n + h, p = (v + d) / 2, m = (c + g) / 2, _ = d - v, S = g - c, b = _ * _ + S * S, C = i - a, T = v * g - d * c, D = (S < 0 ? -1 : 1) * qa(Za(0, C * C * b - T * T)), M = (T * S - _ * D) / b, P = (-T * _ - S * D) / b, E = (T * S + _ * D) / b, A = (-T * _ + S * D) / b, k = M - p, N = P - m, B = E - p, z = A - m;
    return k * k + N * N > B * B + z * z && (M = E, P = A), {
      cx: M,
      cy: P,
      x0: -f,
      y0: -h,
      x1: M * (i / C - 1),
      y1: P * (i / C - 1)
    };
  }
  function AT(r) {
    var t;
    if (X(r)) {
      var e = r.length;
      if (!e)
        return r;
      e === 1 ? t = [r[0], r[0], 0, 0] : e === 2 ? t = [r[0], r[0], r[1], r[1]] : e === 3 ? t = r.concat(r[2]) : t = r;
    } else
      t = [r, r, r, r];
    return t;
  }
  function PT(r, t) {
    var e, n = Za(t.r, 0), i = Za(t.r0 || 0, 0), a = n > 0, o = i > 0;
    if (!(!a && !o)) {
      if (a || (n = i, i = 0), i > n) {
        var s = n;
        n = i, i = s;
      }
      var l = t.startAngle, u = t.endAngle;
      if (!(isNaN(l) || isNaN(u))) {
        var f = t.cx, h = t.cy, v = !!t.clockwise, c = bg(u - l), d = c > sh && c % sh;
        if (d > ur && (c = d), !(n > ur))
          r.moveTo(f, h);
        else if (c > sh - ur)
          r.moveTo(f + n * Xi(l), h + n * ni(l)), r.arc(f, h, n, l, u, !v), i > ur && (r.moveTo(f + i * Xi(u), h + i * ni(u)), r.arc(f, h, i, u, l, v));
        else {
          var g = void 0, p = void 0, m = void 0, _ = void 0, S = void 0, b = void 0, C = void 0, T = void 0, D = void 0, M = void 0, P = void 0, E = void 0, A = void 0, k = void 0, N = void 0, B = void 0, z = n * Xi(l), G = n * ni(l), J = i * Xi(u), U = i * ni(u), Y = c > ur;
          if (Y) {
            var Q = t.cornerRadius;
            Q && (e = AT(Q), g = e[0], p = e[1], m = e[2], _ = e[3]);
            var ot = bg(n - i) / 2;
            if (S = Pr(ot, m), b = Pr(ot, _), C = Pr(ot, g), T = Pr(ot, p), P = D = Za(S, b), E = M = Za(C, T), (D > ur || M > ur) && (A = n * Xi(u), k = n * ni(u), N = i * Xi(l), B = i * ni(l), c < wg)) {
              var it = MT(z, G, N, B, A, k, J, U);
              if (it) {
                var ct = z - it[0], Tt = G - it[1], Kt = A - it[0], Et = k - it[1], Ie = 1 / ni(DT((ct * Kt + Tt * Et) / (qa(ct * ct + Tt * Tt) * qa(Kt * Kt + Et * Et))) / 2), ze = qa(it[0] * it[0] + it[1] * it[1]);
                P = Pr(D, (n - ze) / (Ie + 1)), E = Pr(M, (i - ze) / (Ie - 1));
              }
            }
          }
          if (!Y)
            r.moveTo(f + z, h + G);
          else if (P > ur) {
            var Jt = Pr(m, P), Ht = Pr(_, P), rt = Ys(N, B, z, G, n, Jt, v), ht = Ys(A, k, J, U, n, Ht, v);
            r.moveTo(f + rt.cx + rt.x0, h + rt.cy + rt.y0), P < D && Jt === Ht ? r.arc(f + rt.cx, h + rt.cy, P, ne(rt.y0, rt.x0), ne(ht.y0, ht.x0), !v) : (Jt > 0 && r.arc(f + rt.cx, h + rt.cy, Jt, ne(rt.y0, rt.x0), ne(rt.y1, rt.x1), !v), r.arc(f, h, n, ne(rt.cy + rt.y1, rt.cx + rt.x1), ne(ht.cy + ht.y1, ht.cx + ht.x1), !v), Ht > 0 && r.arc(f + ht.cx, h + ht.cy, Ht, ne(ht.y1, ht.x1), ne(ht.y0, ht.x0), !v));
          } else
            r.moveTo(f + z, h + G), r.arc(f, h, n, l, u, !v);
          if (!(i > ur) || !Y)
            r.lineTo(f + J, h + U);
          else if (E > ur) {
            var Jt = Pr(g, E), Ht = Pr(p, E), rt = Ys(J, U, A, k, i, -Ht, v), ht = Ys(z, G, N, B, i, -Jt, v);
            r.lineTo(f + rt.cx + rt.x0, h + rt.cy + rt.y0), E < M && Jt === Ht ? r.arc(f + rt.cx, h + rt.cy, E, ne(rt.y0, rt.x0), ne(ht.y0, ht.x0), !v) : (Ht > 0 && r.arc(f + rt.cx, h + rt.cy, Ht, ne(rt.y0, rt.x0), ne(rt.y1, rt.x1), !v), r.arc(f, h, i, ne(rt.cy + rt.y1, rt.cx + rt.x1), ne(ht.cy + ht.y1, ht.cx + ht.x1), v), Jt > 0 && r.arc(f + ht.cx, h + ht.cy, Jt, ne(ht.y1, ht.x1), ne(ht.y0, ht.x0), !v));
          } else
            r.lineTo(f + J, h + U), r.arc(f, h, i, u, l, v);
        }
        r.closePath();
      }
    }
  }
  var IT = function() {
    function r() {
      this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0, this.cornerRadius = 0;
    }
    return r;
  }(), Wr = function(r) {
    x(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return t.prototype.getDefaultShape = function() {
      return new IT();
    }, t.prototype.buildPath = function(e, n) {
      PT(e, n);
    }, t.prototype.isZeroArea = function() {
      return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0;
    }, t;
  }(xt);
  Wr.prototype.type = "sector";
  var LT = function() {
    function r() {
      this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0;
    }
    return r;
  }(), Xs = function(r) {
    x(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return t.prototype.getDefaultShape = function() {
      return new LT();
    }, t.prototype.buildPath = function(e, n) {
      var i = n.cx, a = n.cy, o = Math.PI * 2;
      e.moveTo(i + n.r, a), e.arc(i, a, n.r, 0, o, !1), e.moveTo(i + n.r0, a), e.arc(i, a, n.r0, 0, o, !0);
    }, t;
  }(xt);
  Xs.prototype.type = "ring";
  function ET(r, t, e, n) {
    var i = [], a = [], o = [], s = [], l, u, f, h;
    if (n) {
      f = [1 / 0, 1 / 0], h = [-1 / 0, -1 / 0];
      for (var v = 0, c = r.length; v < c; v++)
        en(f, f, r[v]), rn(h, h, r[v]);
      en(f, f, n[0]), rn(h, h, n[1]);
    }
    for (var v = 0, c = r.length; v < c; v++) {
      var d = r[v];
      if (e)
        l = r[v ? v - 1 : c - 1], u = r[(v + 1) % c];
      else if (v === 0 || v === c - 1) {
        i.push(sd(r[v]));
        continue;
      } else
        l = r[v - 1], u = r[v + 1];
      ld(a, u, l), qo(a, a, t);
      var g = Zo(d, l), p = Zo(d, u), m = g + p;
      m !== 0 && (g /= m, p /= m), qo(o, a, -g), qo(s, a, p);
      var _ = Nu([], d, o), S = Nu([], d, s);
      n && (rn(_, _, f), en(_, _, h), rn(S, S, f), en(S, S, h)), i.push(_), i.push(S);
    }
    return e && i.push(i.shift()), i;
  }
  function xg(r, t, e) {
    var n = t.smooth, i = t.points;
    if (i && i.length >= 2) {
      if (n) {
        var a = ET(i, n, e, t.smoothConstraint);
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
  var RT = function() {
    function r() {
      this.points = null, this.smooth = 0, this.smoothConstraint = null;
    }
    return r;
  }(), $s = function(r) {
    x(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return t.prototype.getDefaultShape = function() {
      return new RT();
    }, t.prototype.buildPath = function(e, n) {
      xg(e, n, !0);
    }, t;
  }(xt);
  $s.prototype.type = "polygon";
  var OT = function() {
    function r() {
      this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null;
    }
    return r;
  }(), $i = function(r) {
    x(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return t.prototype.getDefaultStyle = function() {
      return {
        stroke: "#000",
        fill: null
      };
    }, t.prototype.getDefaultShape = function() {
      return new OT();
    }, t.prototype.buildPath = function(e, n) {
      xg(e, n, !1);
    }, t;
  }(xt);
  $i.prototype.type = "polyline";
  var kT = {}, NT = function() {
    function r() {
      this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
    }
    return r;
  }(), Ur = function(r) {
    x(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return t.prototype.getDefaultStyle = function() {
      return {
        stroke: "#000",
        fill: null
      };
    }, t.prototype.getDefaultShape = function() {
      return new NT();
    }, t.prototype.buildPath = function(e, n) {
      var i, a, o, s;
      if (this.subPixelOptimize) {
        var l = Np(kT, n, this.style);
        i = l.x1, a = l.y1, o = l.x2, s = l.y2;
      } else
        i = n.x1, a = n.y1, o = n.x2, s = n.y2;
      var u = n.percent;
      u !== 0 && (e.moveTo(i, a), u < 1 && (o = i * (1 - u) + o * u, s = a * (1 - u) + s * u), e.lineTo(o, s));
    }, t.prototype.pointAt = function(e) {
      var n = this.shape;
      return [n.x1 * (1 - e) + n.x2 * e, n.y1 * (1 - e) + n.y2 * e];
    }, t;
  }(xt);
  Ur.prototype.type = "line";
  var xe = [], BT = function() {
    function r() {
      this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1;
    }
    return r;
  }();
  function Tg(r, t, e) {
    var n = r.cpx2, i = r.cpy2;
    return n != null || i != null ? [(e ? Ld : Xt)(r.x1, r.cpx1, r.cpx2, r.x2, t), (e ? Ld : Xt)(r.y1, r.cpy1, r.cpy2, r.y2, t)] : [(e ? Od : te)(r.x1, r.cpx1, r.x2, t), (e ? Od : te)(r.y1, r.cpy1, r.y2, t)];
  }
  var qs = function(r) {
    x(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return t.prototype.getDefaultStyle = function() {
      return {
        stroke: "#000",
        fill: null
      };
    }, t.prototype.getDefaultShape = function() {
      return new BT();
    }, t.prototype.buildPath = function(e, n) {
      var i = n.x1, a = n.y1, o = n.x2, s = n.y2, l = n.cpx1, u = n.cpy1, f = n.cpx2, h = n.cpy2, v = n.percent;
      v !== 0 && (e.moveTo(i, a), f == null || h == null ? (v < 1 && (ls(i, l, o, v, xe), l = xe[1], o = xe[2], ls(a, u, s, v, xe), u = xe[1], s = xe[2]), e.quadraticCurveTo(l, u, o, s)) : (v < 1 && (ss(i, l, f, o, v, xe), l = xe[1], f = xe[2], o = xe[3], ss(a, u, h, s, v, xe), u = xe[1], h = xe[2], s = xe[3]), e.bezierCurveTo(l, u, f, h, o, s)));
    }, t.prototype.pointAt = function(e) {
      return Tg(this.shape, e, !1);
    }, t.prototype.tangentAt = function(e) {
      var n = Tg(this.shape, e, !0);
      return ud(n, n);
    }, t;
  }(xt);
  qs.prototype.type = "bezier-curve";
  var FT = function() {
    function r() {
      this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
    }
    return r;
  }(), Ka = function(r) {
    x(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return t.prototype.getDefaultStyle = function() {
      return {
        stroke: "#000",
        fill: null
      };
    }, t.prototype.getDefaultShape = function() {
      return new FT();
    }, t.prototype.buildPath = function(e, n) {
      var i = n.cx, a = n.cy, o = Math.max(n.r, 0), s = n.startAngle, l = n.endAngle, u = n.clockwise, f = Math.cos(s), h = Math.sin(s);
      e.moveTo(f * o + i, h * o + a), e.arc(i, a, o, s, l, !u);
    }, t;
  }(xt);
  Ka.prototype.type = "arc";
  var Cg = function(r) {
    x(t, r);
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
      return this._updatePathDirty.call(this), xt.prototype.getBoundingRect.call(this);
    }, t;
  }(xt), Dg = function() {
    function r(t) {
      this.colorStops = t || [];
    }
    return r.prototype.addColorStop = function(t, e) {
      this.colorStops.push({
        offset: t,
        color: e
      });
    }, r;
  }(), lh = function(r) {
    x(t, r);
    function t(e, n, i, a, o, s) {
      var l = r.call(this, o) || this;
      return l.x = e ?? 0, l.y = n ?? 0, l.x2 = i ?? 1, l.y2 = a ?? 0, l.type = "linear", l.global = s || !1, l;
    }
    return t;
  }(Dg), Mg = function(r) {
    x(t, r);
    function t(e, n, i, a, o) {
      var s = r.call(this, a) || this;
      return s.x = e ?? 0.5, s.y = n ?? 0.5, s.r = i ?? 0.5, s.type = "radial", s.global = o || !1, s;
    }
    return t;
  }(Dg), ii = [0, 0], ai = [0, 0], Zs = new et(), Ks = new et(), js = function() {
    function r(t, e) {
      this._corners = [], this._axes = [], this._origin = [0, 0];
      for (var n = 0; n < 4; n++)
        this._corners[n] = new et();
      for (var n = 0; n < 2; n++)
        this._axes[n] = new et();
      t && this.fromBoundingRect(t, e);
    }
    return r.prototype.fromBoundingRect = function(t, e) {
      var n = this._corners, i = this._axes, a = t.x, o = t.y, s = a + t.width, l = o + t.height;
      if (n[0].set(a, o), n[1].set(s, o), n[2].set(s, l), n[3].set(a, l), e)
        for (var u = 0; u < 4; u++)
          n[u].transform(e);
      et.sub(i[0], n[1], n[0]), et.sub(i[1], n[3], n[0]), i[0].normalize(), i[1].normalize();
      for (var u = 0; u < 2; u++)
        this._origin[u] = i[u].dot(n[0]);
    }, r.prototype.intersect = function(t, e) {
      var n = !0, i = !e;
      return Zs.set(1 / 0, 1 / 0), Ks.set(0, 0), !this._intersectCheckOneSide(this, t, Zs, Ks, i, 1) && (n = !1, i) || !this._intersectCheckOneSide(t, this, Zs, Ks, i, -1) && (n = !1, i) || i || et.copy(e, n ? Zs : Ks), n;
    }, r.prototype._intersectCheckOneSide = function(t, e, n, i, a, o) {
      for (var s = !0, l = 0; l < 2; l++) {
        var u = this._axes[l];
        if (this._getProjMinMaxOnAxis(l, t._corners, ii), this._getProjMinMaxOnAxis(l, e._corners, ai), ii[1] < ai[0] || ii[0] > ai[1]) {
          if (s = !1, a)
            return s;
          var f = Math.abs(ai[0] - ii[1]), h = Math.abs(ii[0] - ai[1]);
          Math.min(f, h) > i.len() && (f < h ? et.scale(i, u, -f * o) : et.scale(i, u, h * o));
        } else if (n) {
          var f = Math.abs(ai[0] - ii[1]), h = Math.abs(ii[0] - ai[1]);
          Math.min(f, h) < n.len() && (f < h ? et.scale(n, u, f * o) : et.scale(n, u, -h * o));
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
  }(), zT = [], Ag = function(r) {
    x(t, r);
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
        for (var e = new dt(1 / 0, 1 / 0, -1 / 0, -1 / 0), n = 0; n < this._displayables.length; n++) {
          var i = this._displayables[n], a = i.getBoundingRect().clone();
          i.needLocalTransform() && a.applyTransform(i.getLocalTransform(zT)), e.union(a);
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
  }(Va), VT = kt();
  function GT(r, t, e, n, i) {
    var a;
    if (t && t.ecModel) {
      var o = t.ecModel.getUpdatePayload();
      a = o && o.animation;
    }
    var s = t && t.isAnimationEnabled(), l = r === "update";
    if (s) {
      var u = void 0, f = void 0, h = void 0;
      n ? (u = ut(n.duration, 200), f = ut(n.easing, "cubicOut"), h = 0) : (u = t.getShallow(l ? "animationDurationUpdate" : "animationDuration"), f = t.getShallow(l ? "animationEasingUpdate" : "animationEasing"), h = t.getShallow(l ? "animationDelayUpdate" : "animationDelay")), a && (a.duration != null && (u = a.duration), a.easing != null && (f = a.easing), a.delay != null && (h = a.delay)), tt(h) && (h = h(e, i)), tt(u) && (u = u(e));
      var v = {
        duration: u || 0,
        delay: h,
        easing: f
      };
      return v;
    } else
      return null;
  }
  function uh(r, t, e, n, i, a, o) {
    var s = !1, l;
    tt(i) ? (o = a, a = i, i = null) : j(i) && (a = i.cb, o = i.during, s = i.isFrom, l = i.removeOpt, i = i.dataIndex);
    var u = r === "leave";
    u || t.stopAnimation("leave");
    var f = GT(r, n, i, u ? l || {} : null, n && n.getAnimationDelayParams ? n.getAnimationDelayParams(t, i) : null);
    if (f && f.duration > 0) {
      var h = f.duration, v = f.delay, c = f.easing, d = {
        duration: h,
        delay: v || 0,
        easing: c,
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
  function qt(r, t, e, n, i, a) {
    uh("update", r, t, e, n, i, a);
  }
  function ie(r, t, e, n, i, a) {
    uh("enter", r, t, e, n, i, a);
  }
  function qi(r) {
    if (!r.__zr)
      return !0;
    for (var t = 0; t < r.animators.length; t++) {
      var e = r.animators[t];
      if (e.scope === "leave")
        return !0;
    }
    return !1;
  }
  function Qs(r, t, e, n, i, a) {
    qi(r) || uh("leave", r, t, e, n, i, a);
  }
  function Pg(r, t, e, n) {
    r.removeTextContent(), r.removeTextGuideLine(), Qs(r, {
      style: {
        opacity: 0
      }
    }, t, e, n);
  }
  function Js(r, t, e) {
    function n() {
      r.parent && r.parent.remove(r);
    }
    r.isGroup ? r.traverse(function(i) {
      i.isGroup || Pg(i, t, e, n);
    }) : Pg(r, t, e, n);
  }
  function fh(r) {
    VT(r).oldStyle = r.style;
  }
  var tl = Math.max, el = Math.min, hh = {};
  function Ig(r) {
    return xt.extend(r);
  }
  var HT = bT;
  function Lg(r, t) {
    return HT(r, t);
  }
  function je(r, t) {
    hh[r] = t;
  }
  function Eg(r) {
    if (hh.hasOwnProperty(r))
      return hh[r];
  }
  function rl(r, t, e, n) {
    var i = wT(r, t);
    return e && (n === "center" && (e = Rg(e, i.getBoundingRect())), vh(i, e)), i;
  }
  function ch(r, t, e) {
    var n = new Gr({
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
          n.setStyle(Rg(t, a));
        }
      }
    });
    return n;
  }
  function Rg(r, t) {
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
  var Og = xT;
  function vh(r, t) {
    if (r.applyTransform) {
      var e = r.getBoundingRect(), n = e.calculateTransform(t);
      r.applyTransform(n);
    }
  }
  function ja(r, t) {
    return Np(r, r, {
      lineWidth: t
    }), r;
  }
  function WT(r) {
    return Bp(r.shape, r.shape, r.style), r;
  }
  var UT = ei;
  function kg(r, t) {
    for (var e = ya([]); r && r !== t; )
      nn(e, r.getLocalTransform(), e), r = r.parent;
    return e;
  }
  function dh(r, t, e) {
    return t && !le(t) && (t = ys.getLocalTransform(t)), e && (t = Ei([], t)), he([], r, t);
  }
  function YT(r, t, e) {
    var n = t[4] === 0 || t[5] === 0 || t[0] === 0 ? 1 : Math.abs(2 * t[4] / t[0]), i = t[4] === 0 || t[5] === 0 || t[2] === 0 ? 1 : Math.abs(2 * t[4] / t[2]), a = [r === "left" ? -n : r === "right" ? n : 0, r === "top" ? -i : r === "bottom" ? i : 0];
    return a = dh(a, t, e), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
  }
  function Ng(r) {
    return !r.isGroup;
  }
  function XT(r) {
    return r.shape != null;
  }
  function Bg(r, t, e) {
    if (!r || !t)
      return;
    function n(o) {
      var s = {};
      return o.traverse(function(l) {
        Ng(l) && l.anid && (s[l.anid] = l);
      }), s;
    }
    function i(o) {
      var s = {
        x: o.x,
        y: o.y,
        rotation: o.rotation
      };
      return XT(o) && (s.shape = W({}, o.shape)), s;
    }
    var a = n(r);
    t.traverse(function(o) {
      if (Ng(o) && o.anid) {
        var s = a[o.anid];
        if (s) {
          var l = i(o);
          o.attr(i(s)), qt(o, l, e, _t(o).dataIndex);
        }
      }
    });
  }
  function Fg(r, t) {
    return K(r, function(e) {
      var n = e[0];
      n = tl(n, t.x), n = el(n, t.x + t.width);
      var i = e[1];
      return i = tl(i, t.y), i = el(i, t.y + t.height), [n, i];
    });
  }
  function zg(r, t) {
    var e = tl(r.x, t.x), n = el(r.x + r.width, t.x + t.width), i = tl(r.y, t.y), a = el(r.y + r.height, t.y + t.height);
    if (n >= e && a >= i)
      return {
        x: e,
        y: i,
        width: n - e,
        height: a - i
      };
  }
  function nl(r, t, e) {
    var n = W({
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
      return r.indexOf("image://") === 0 ? (i.image = r.slice(8), St(i, e), new Gr(n)) : rl(r.replace("path://", ""), n, e, "center");
  }
  function $T(r, t, e, n, i) {
    for (var a = 0, o = i[i.length - 1]; a < i.length; a++) {
      var s = i[a];
      if (Vg(r, t, e, n, s[0], s[1], o[0], o[1]))
        return !0;
      o = s;
    }
  }
  function Vg(r, t, e, n, i, a, o, s) {
    var l = e - r, u = n - t, f = o - i, h = s - a, v = ph(f, h, l, u);
    if (qT(v))
      return !1;
    var c = r - i, d = t - a, g = ph(c, d, l, u) / v;
    if (g < 0 || g > 1)
      return !1;
    var p = ph(c, d, f, h) / v;
    return !(p < 0 || p > 1);
  }
  function ph(r, t, e, n) {
    return r * n - e * t;
  }
  function qT(r) {
    return r <= 1e-6 && r >= -1e-6;
  }
  function gh(r) {
    var t = r.itemTooltipOption, e = r.componentModel, n = r.itemName, i = Z(t) ? {
      formatter: t
    } : t, a = e.mainType, o = e.componentIndex, s = {
      componentType: a,
      name: n,
      $vars: ["name"]
    };
    s[a + "Index"] = o;
    var l = r.formatterParamsExtra;
    l && L(It(l), function(f) {
      On(s, f) || (s[f] = l[f], s.$vars.push(f));
    });
    var u = _t(r.el);
    u.componentMainType = a, u.componentIndex = o, u.tooltipConfig = {
      name: n,
      option: St({
        content: n,
        formatterParams: s
      }, i)
    };
  }
  function Gg(r, t) {
    var e;
    r.isGroup && (e = t(r)), e || r.traverse(t);
  }
  function il(r, t) {
    if (r)
      if (X(r))
        for (var e = 0; e < r.length; e++)
          Gg(r[e], t);
      else
        Gg(r, t);
  }
  je("circle", $a), je("ellipse", Us), je("sector", Wr), je("ring", Xs), je("polygon", $s), je("polyline", $i), je("rect", Vt), je("line", Ur), je("bezierCurve", qs), je("arc", Ka);
  var ZT = (Object.freeze || Object)({
    updateProps: qt,
    initProps: ie,
    removeElement: Qs,
    removeElementWithFadeOut: Js,
    isElementRemoved: qi,
    extendShape: Ig,
    extendPath: Lg,
    registerShape: je,
    getShapeClass: Eg,
    makePath: rl,
    makeImage: ch,
    mergePath: Og,
    resizePath: vh,
    subPixelOptimizeLine: ja,
    subPixelOptimizeRect: WT,
    subPixelOptimize: UT,
    getTransform: kg,
    applyTransform: dh,
    transformDirection: YT,
    groupTransition: Bg,
    clipPointsByRect: Fg,
    clipRectByRect: zg,
    createIcon: nl,
    linePolygonIntersect: $T,
    lineLineIntersect: Vg,
    setTooltipConfig: gh,
    traverseElements: il,
    Group: Zt,
    Image: Gr,
    Text: $t,
    Circle: $a,
    Ellipse: Us,
    Sector: Wr,
    Ring: Xs,
    Polygon: $s,
    Polyline: $i,
    Rect: Vt,
    Line: Ur,
    BezierCurve: qs,
    Arc: Ka,
    IncrementalDisplayable: Ag,
    CompoundPath: Cg,
    LinearGradient: lh,
    RadialGradient: Mg,
    BoundingRect: dt,
    OrientedBoundingRect: js,
    Point: et,
    Path: xt
  }), al = {};
  function Hg(r, t) {
    for (var e = 0; e < Ke.length; e++) {
      var n = Ke[e], i = t[n], a = r.ensureState(n);
      a.style = a.style || {}, a.style.text = i;
    }
    var o = r.currentStates.slice();
    r.clearStates(!0), r.setStyle({
      text: t.normal
    }), r.useStates(o, !0);
  }
  function mh(r, t, e) {
    var n = r.labelFetcher, i = r.labelDataIndex, a = r.labelDimIndex, o = t.normal, s;
    n && (s = n.getFormattedLabel(i, "normal", null, a, o && o.get("formatter"), e != null ? {
      interpolatedValue: e
    } : null)), s == null && (s = tt(r.defaultText) ? r.defaultText(i, r, e) : r.defaultText);
    for (var l = {
      normal: s
    }, u = 0; u < Ke.length; u++) {
      var f = Ke[u], h = t[f];
      l[f] = ut(n ? n.getFormattedLabel(i, f, null, a, h && h.get("formatter")) : null, s);
    }
    return l;
  }
  function Qa(r, t, e, n) {
    e = e || al;
    for (var i = r instanceof $t, a = !1, o = 0; o < Os.length; o++) {
      var s = t[Os[o]];
      if (s && s.getShallow("show")) {
        a = !0;
        break;
      }
    }
    var l = i ? r : r.getTextContent();
    if (a) {
      i || (l || (l = new $t(), r.setTextContent(l)), r.stateProxy && (l.stateProxy = r.stateProxy));
      var u = mh(e, t), f = t.normal, h = !!f.getShallow("show"), v = Yr(f, n && n.normal, e, !1, !i);
      v.text = u.normal, i || r.setTextConfig(Wg(f, e, !1));
      for (var o = 0; o < Ke.length; o++) {
        var c = Ke[o], s = t[c];
        if (s) {
          var d = l.ensureState(c), g = !!ut(s.getShallow("show"), h);
          if (g !== h && (d.ignore = !g), d.style = Yr(s, n && n[c], e, !0, !i), d.style.text = u[c], !i) {
            var p = r.ensureState(c);
            p.textConfig = Wg(s, e, !0);
          }
        }
      }
      l.silent = !!f.getShallow("silent"), l.style.x != null && (v.x = l.style.x), l.style.y != null && (v.y = l.style.y), l.ignore = !h, l.useStyle(v), l.dirty(), e.enableTextSetter && (Zi(l).setLabelText = function(m) {
        var _ = mh(e, t, m);
        Hg(l, _);
      });
    } else
      l && (l.ignore = !0);
    r.dirty();
  }
  function Ja(r, t) {
    t = t || "label";
    for (var e = {
      normal: r.getModel(t)
    }, n = 0; n < Ke.length; n++) {
      var i = Ke[n];
      e[i] = r.getModel([i, t]);
    }
    return e;
  }
  function Yr(r, t, e, n, i) {
    var a = {};
    return KT(a, r, e, n, i), t && W(a, t), a;
  }
  function Wg(r, t, e) {
    t = t || {};
    var n = {}, i, a = r.getShallow("rotate"), o = ut(r.getShallow("distance"), e ? null : 5), s = r.getShallow("offset");
    return i = r.getShallow("position") || (e ? null : "inside"), i === "outside" && (i = t.defaultOutsidePosition || "top"), i != null && (n.position = i), s != null && (n.offset = s), a != null && (a *= Math.PI / 180, n.rotation = a), o != null && (n.distance = o), n.outsideFill = r.get("color") === "inherit" ? t.inheritColor || null : "auto", n;
  }
  function KT(r, t, e, n, i) {
    e = e || al;
    var a = t.ecModel, o = a && a.option.textStyle, s = jT(t), l;
    if (s) {
      l = {};
      for (var u in s)
        if (s.hasOwnProperty(u)) {
          var f = t.getModel(["rich", u]);
          $g(l[u] = {}, f, o, e, n, i, !1, !0);
        }
    }
    l && (r.rich = l);
    var h = t.get("overflow");
    h && (r.overflow = h);
    var v = t.get("minMargin");
    v != null && (r.margin = v), $g(r, t, o, e, n, i, !0, !1);
  }
  function jT(r) {
    for (var t; r && r !== r.ecModel; ) {
      var e = (r.option || al).rich;
      if (e) {
        t = t || {};
        for (var n = It(e), i = 0; i < n.length; i++) {
          var a = n[i];
          t[a] = 1;
        }
      }
      r = r.parentModel;
    }
    return t;
  }
  var Ug = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], Yg = ["align", "lineHeight", "width", "height", "tag", "verticalAlign"], Xg = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
  function $g(r, t, e, n, i, a, o, s) {
    e = !i && e || al;
    var l = n && n.inheritColor, u = t.getShallow("color"), f = t.getShallow("textBorderColor"), h = ut(t.getShallow("opacity"), e.opacity);
    (u === "inherit" || u === "auto") && (u === "auto" && Wt("color: 'auto'", "color: 'inherit'"), l ? u = l : u = null), (f === "inherit" || f === "auto") && (f === "auto" && Wt("color: 'auto'", "color: 'inherit'"), l ? f = l : f = null), a || (u = u || e.color, f = f || e.textBorderColor), u != null && (r.fill = u), f != null && (r.stroke = f);
    var v = ut(t.getShallow("textBorderWidth"), e.textBorderWidth);
    v != null && (r.lineWidth = v);
    var c = ut(t.getShallow("textBorderType"), e.textBorderType);
    c != null && (r.lineDash = c);
    var d = ut(t.getShallow("textBorderDashOffset"), e.textBorderDashOffset);
    d != null && (r.lineDashOffset = d), !i && h == null && !s && (h = n && n.defaultOpacity), h != null && (r.opacity = h), !i && !a && r.fill == null && n.inheritColor && (r.fill = n.inheritColor);
    for (var g = 0; g < Ug.length; g++) {
      var p = Ug[g], m = ut(t.getShallow(p), e[p]);
      m != null && (r[p] = m);
    }
    for (var g = 0; g < Yg.length; g++) {
      var p = Yg[g], m = t.getShallow(p);
      m != null && (r[p] = m);
    }
    if (r.verticalAlign == null) {
      var _ = t.getShallow("baseline");
      _ != null && (r.verticalAlign = _);
    }
    if (!o || !n.disableBox) {
      for (var g = 0; g < Xg.length; g++) {
        var p = Xg[g], m = t.getShallow(p);
        m != null && (r[p] = m);
      }
      var S = t.getShallow("borderType");
      S != null && (r.borderDash = S), (r.backgroundColor === "auto" || r.backgroundColor === "inherit") && l && (r.backgroundColor === "auto" && Wt("backgroundColor: 'auto'", "backgroundColor: 'inherit'"), r.backgroundColor = l), (r.borderColor === "auto" || r.borderColor === "inherit") && l && (r.borderColor === "auto" && Wt("borderColor: 'auto'", "borderColor: 'inherit'"), r.borderColor = l);
    }
  }
  function QT(r, t) {
    var e = t && t.getModel("textStyle");
    return ir([
      // FIXME in node-canvas fontWeight is before fontStyle
      r.fontStyle || e && e.getShallow("fontStyle") || "",
      r.fontWeight || e && e.getShallow("fontWeight") || "",
      (r.fontSize || e && e.getShallow("fontSize") || 12) + "px",
      r.fontFamily || e && e.getShallow("fontFamily") || "sans-serif"
    ].join(" "));
  }
  var Zi = kt();
  function JT(r, t, e, n) {
    if (r) {
      var i = Zi(r);
      i.prevValue = i.value, i.value = e;
      var a = t.normal;
      i.valueAnimation = a.get("valueAnimation"), i.valueAnimation && (i.precision = a.get("precision"), i.defaultInterpolatedText = n, i.statesModels = t);
    }
  }
  function tC(r, t, e, n, i) {
    var a = Zi(r);
    if (!a.valueAnimation || a.prevValue === a.value)
      return;
    var o = a.defaultInterpolatedText, s = ut(a.interpolatedValue, a.prevValue), l = a.value;
    function u(f) {
      var h = _p(e, a.precision, s, l, f);
      a.interpolatedValue = f === 1 ? null : h;
      var v = mh({
        labelDataIndex: t,
        labelFetcher: i,
        defaultText: o ? o(h) : h + ""
      }, a.statesModels, h);
      Hg(r, v);
    }
    r.percent = 0, (a.prevValue == null ? ie : qt)(r, {
      // percent is used to prevent animation from being aborted #15916
      percent: 1
    }, n, t, null, u);
  }
  var eC = ["textStyle", "color"], yh = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "padding", "lineHeight", "rich", "width", "height", "overflow"], _h = new $t(), rC = (
    /** @class */
    function() {
      function r() {
      }
      return r.prototype.getTextColor = function(t) {
        var e = this.ecModel;
        return this.getShallow("color") || (!t && e ? e.get(eC) : null);
      }, r.prototype.getFont = function() {
        return QT({
          fontStyle: this.getShallow("fontStyle"),
          fontWeight: this.getShallow("fontWeight"),
          fontSize: this.getShallow("fontSize"),
          fontFamily: this.getShallow("fontFamily")
        }, this.ecModel);
      }, r.prototype.getTextRect = function(t) {
        for (var e = {
          text: t,
          verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
        }, n = 0; n < yh.length; n++)
          e[yh[n]] = this.getShallow(yh[n]);
        return _h.useStyle(e), _h.update(), _h.getBoundingRect();
      }, r;
    }()
  ), qg = [
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
  ], nC = za(qg), iC = (
    /** @class */
    function() {
      function r() {
      }
      return r.prototype.getLineStyle = function(t) {
        return nC(this, t);
      }, r;
    }()
  ), Zg = [
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
  ], aC = za(Zg), oC = (
    /** @class */
    function() {
      function r() {
      }
      return r.prototype.getItemStyle = function(t, e) {
        return aC(this, t, e);
      }, r;
    }()
  ), Rt = (
    /** @class */
    function() {
      function r(t, e, n) {
        this.parentModel = e, this.ecModel = n, this.option = t;
      }
      return r.prototype.init = function(t, e, n) {
      }, r.prototype.mergeOption = function(t, e) {
        yt(this.option, t, !0);
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
        return new t(vt(this.option));
      }, r.prototype.parsePath = function(t) {
        return typeof t == "string" ? t.split(".") : t;
      }, r.prototype.resolveParentPath = function(t) {
        return t;
      }, r.prototype.isAnimationEnabled = function() {
        if (!O.node && this.option) {
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
  kf(Rt), ex(Rt), He(Rt, iC), He(Rt, oC), He(Rt, ox), He(Rt, rC);
  var sC = Math.round(Math.random() * 10);
  function ol(r) {
    return [r || "", sC++].join("_");
  }
  function lC(r) {
    var t = {};
    r.registerSubTypeDefaulter = function(e, n) {
      var i = Cr(e);
      t[i.main] = n;
    }, r.determineSubType = function(e, n) {
      var i = n.type;
      if (!i) {
        var a = Cr(e).main;
        r.hasSubTypes(e) && t[a] && (i = t[a](n));
      }
      return i;
    };
  }
  function uC(r, t) {
    r.topologicalTravel = function(a, o, s, l) {
      if (!a.length)
        return;
      var u = e(o), f = u.graph, h = u.noEntryList, v = {};
      for (L(a, function(_) {
        v[_] = !0;
      }); h.length; ) {
        var c = h.pop(), d = f[c], g = !!v[c];
        g && (s.call(l, c, d.originalDeps.slice()), delete v[c]), L(d.successor, g ? m : p);
      }
      L(v, function() {
        var _ = "";
        throw _ = Ts("Circular dependency may exists: ", v, a, o), new Error(_);
      });
      function p(_) {
        f[_].entryCount--, f[_].entryCount === 0 && h.push(_);
      }
      function m(_) {
        v[_] = !0, p(_);
      }
    };
    function e(a) {
      var o = {}, s = [];
      return L(a, function(l) {
        var u = n(o, l), f = u.originalDeps = t(l), h = i(f, a);
        u.entryCount = h.length, u.entryCount === 0 && s.push(l), L(h, function(v) {
          wt(u.predecessor, v) < 0 && u.predecessor.push(v);
          var c = n(o, v);
          wt(c.successor, v) < 0 && c.successor.push(l);
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
      return L(a, function(l) {
        wt(o, l) >= 0 && s.push(l);
      }), s;
    }
  }
  function Kg(r, t) {
    return yt(yt({}, r, !0), t, !0);
  }
  var fC = {
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
  }, hC = {
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
  }, sl = "ZH", Sh = "EN", to = Sh, ll = {}, wh = {}, jg = O.domSupported ? function() {
    var r = (
      /* eslint-disable-next-line */
      (document.documentElement.lang || navigator.language || navigator.browserLanguage).toUpperCase()
    );
    return r.indexOf(sl) > -1 ? sl : to;
  }() : to;
  function bh(r, t) {
    r = r.toUpperCase(), wh[r] = new Rt(t), ll[r] = t;
  }
  function cC(r) {
    if (Z(r)) {
      var t = ll[r.toUpperCase()] || {};
      return r === sl || r === Sh ? vt(t) : yt(vt(t), vt(ll[to]), !1);
    } else
      return yt(vt(r), vt(ll[to]), !1);
  }
  function vC(r) {
    return wh[r];
  }
  function dC() {
    return wh[to];
  }
  bh(Sh, fC), bh(sl, hC);
  var xh = 1e3, Th = xh * 60, eo = Th * 60, Qe = eo * 24, Qg = Qe * 365, ro = {
    year: "{yyyy}",
    month: "{MMM}",
    day: "{d}",
    hour: "{HH}:{mm}",
    minute: "{HH}:{mm}",
    second: "{HH}:{mm}:{ss}",
    millisecond: "{HH}:{mm}:{ss} {SSS}",
    none: "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}"
  }, ul = "{yyyy}-{MM}-{dd}", Jg = {
    year: "{yyyy}",
    month: "{yyyy}-{MM}",
    day: ul,
    hour: ul + " " + ro.hour,
    minute: ul + " " + ro.minute,
    second: ul + " " + ro.second,
    millisecond: ro.none
  }, Ch = ["year", "month", "day", "hour", "minute", "second", "millisecond"], tm = ["year", "half-year", "quarter", "month", "week", "half-week", "day", "half-day", "quarter-day", "hour", "minute", "second", "millisecond"];
  function Te(r, t) {
    return r += "", "0000".substr(0, t - r.length) + r;
  }
  function Ki(r) {
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
  function pC(r) {
    return r === Ki(r);
  }
  function gC(r) {
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
  function no(r, t, e, n) {
    var i = Xe(r), a = i[Dh(e)](), o = i[ji(e)]() + 1, s = Math.floor((o - 1) / 3) + 1, l = i[fl(e)](), u = i["get" + (e ? "UTC" : "") + "Day"](), f = i[io(e)](), h = (f - 1) % 12 + 1, v = i[hl(e)](), c = i[cl(e)](), d = i[vl(e)](), g = n instanceof Rt ? n : vC(n || jg) || dC(), p = g.getModel("time"), m = p.get("month"), _ = p.get("monthAbbr"), S = p.get("dayOfWeek"), b = p.get("dayOfWeekAbbr");
    return (t || "").replace(/{yyyy}/g, a + "").replace(/{yy}/g, a % 100 + "").replace(/{Q}/g, s + "").replace(/{MMMM}/g, m[o - 1]).replace(/{MMM}/g, _[o - 1]).replace(/{MM}/g, Te(o, 2)).replace(/{M}/g, o + "").replace(/{dd}/g, Te(l, 2)).replace(/{d}/g, l + "").replace(/{eeee}/g, S[u]).replace(/{ee}/g, b[u]).replace(/{e}/g, u + "").replace(/{HH}/g, Te(f, 2)).replace(/{H}/g, f + "").replace(/{hh}/g, Te(h + "", 2)).replace(/{h}/g, h + "").replace(/{mm}/g, Te(v, 2)).replace(/{m}/g, v + "").replace(/{ss}/g, Te(c, 2)).replace(/{s}/g, c + "").replace(/{SSS}/g, Te(d, 3)).replace(/{S}/g, d + "");
  }
  function mC(r, t, e, n, i) {
    var a = null;
    if (Z(e))
      a = e;
    else if (tt(e))
      a = e(r.value, t, {
        level: r.level
      });
    else {
      var o = W({}, ro);
      if (r.level > 0)
        for (var s = 0; s < Ch.length; ++s)
          o[Ch[s]] = "{primary|" + o[Ch[s]] + "}";
      var l = e ? e.inherit === !1 ? e : St(e, o) : o, u = em(r.value, i);
      if (l[u])
        a = l[u];
      else if (l.inherit) {
        for (var f = tm.indexOf(u), s = f - 1; s >= 0; --s)
          if (l[u]) {
            a = l[u];
            break;
          }
        a = a || o.none;
      }
      if (X(a)) {
        var h = r.level == null ? 0 : r.level >= 0 ? r.level : a.length + r.level;
        h = Math.min(h, a.length - 1), a = a[h];
      }
    }
    return no(new Date(r.value), a, i, n);
  }
  function em(r, t) {
    var e = Xe(r), n = e[ji(t)]() + 1, i = e[fl(t)](), a = e[io(t)](), o = e[hl(t)](), s = e[cl(t)](), l = e[vl(t)](), u = l === 0, f = u && s === 0, h = f && o === 0, v = h && a === 0, c = v && i === 1, d = c && n === 1;
    return d ? "year" : c ? "month" : v ? "day" : h ? "hour" : f ? "minute" : u ? "second" : "millisecond";
  }
  function rm(r, t, e) {
    var n = Mt(r) ? Xe(r) : r;
    switch (t = t || em(r, e), t) {
      case "year":
        return n[Dh(e)]();
      case "half-year":
        return n[ji(e)]() >= 6 ? 1 : 0;
      case "quarter":
        return Math.floor((n[ji(e)]() + 1) / 4);
      case "month":
        return n[ji(e)]();
      case "day":
        return n[fl(e)]();
      case "half-day":
        return n[io(e)]() / 24;
      case "hour":
        return n[io(e)]();
      case "minute":
        return n[hl(e)]();
      case "second":
        return n[cl(e)]();
      case "millisecond":
        return n[vl(e)]();
    }
  }
  function Dh(r) {
    return r ? "getUTCFullYear" : "getFullYear";
  }
  function ji(r) {
    return r ? "getUTCMonth" : "getMonth";
  }
  function fl(r) {
    return r ? "getUTCDate" : "getDate";
  }
  function io(r) {
    return r ? "getUTCHours" : "getHours";
  }
  function hl(r) {
    return r ? "getUTCMinutes" : "getMinutes";
  }
  function cl(r) {
    return r ? "getUTCSeconds" : "getSeconds";
  }
  function vl(r) {
    return r ? "getUTCMilliseconds" : "getMilliseconds";
  }
  function yC(r) {
    return r ? "setUTCFullYear" : "setFullYear";
  }
  function nm(r) {
    return r ? "setUTCMonth" : "setMonth";
  }
  function im(r) {
    return r ? "setUTCDate" : "setDate";
  }
  function am(r) {
    return r ? "setUTCHours" : "setHours";
  }
  function om(r) {
    return r ? "setUTCMinutes" : "setMinutes";
  }
  function sm(r) {
    return r ? "setUTCSeconds" : "setSeconds";
  }
  function lm(r) {
    return r ? "setUTCMilliseconds" : "setMilliseconds";
  }
  function _C(r, t, e, n, i, a, o, s) {
    var l = new $t({
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
  function Mh(r) {
    if (!If(r))
      return Z(r) ? r : "-";
    var t = (r + "").split(".");
    return t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "");
  }
  function Ah(r, t) {
    return r = (r || "").toLowerCase().replace(/-(.)/g, function(e, n) {
      return n.toUpperCase();
    }), t && r && (r = r.charAt(0).toUpperCase() + r.slice(1)), r;
  }
  var ao = Ou;
  function Ph(r, t, e) {
    var n = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}";
    function i(f) {
      return f && ir(f) ? f : "-";
    }
    function a(f) {
      return !!(f != null && !isNaN(f) && isFinite(f));
    }
    var o = t === "time", s = r instanceof Date;
    if (o || s) {
      var l = o ? Xe(r) : r;
      if (isNaN(+l)) {
        if (s)
          return "-";
      } else
        return no(l, n, e);
    }
    if (t === "ordinal")
      return da(r) ? i(r) : Mt(r) && a(r) ? r + "" : "-";
    var u = ka(r);
    return a(u) ? Mh(u) : da(r) ? i(r) : typeof r == "boolean" ? r + "" : "-";
  }
  var um = ["a", "b", "c", "d", "e", "f", "g"], Ih = function(r, t) {
    return "{" + r + (t ?? "") + "}";
  };
  function Lh(r, t, e) {
    X(t) || (t = [t]);
    var n = t.length;
    if (!n)
      return "";
    for (var i = t[0].$vars || [], a = 0; a < i.length; a++) {
      var o = um[a];
      r = r.replace(Ih(o), Ih(o, 0));
    }
    for (var s = 0; s < n; s++)
      for (var l = 0; l < i.length; l++) {
        var u = t[s][i[l]];
        r = r.replace(Ih(um[l], s), e ? Re(u) : u);
      }
    return r;
  }
  function fm(r, t) {
    var e = Z(r) ? {
      color: r,
      extraCssText: t
    } : r || {}, n = e.color, i = e.type;
    t = e.extraCssText;
    var a = e.renderMode || "html";
    if (!n)
      return "";
    if (a === "html")
      return i === "subItem" ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + Re(n) + ";" + (t || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + Re(n) + ";" + (t || "") + '"></span>';
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
  function SC(r, t, e) {
    Wt("echarts.format.formatTime", "echarts.time.format"), (r === "week" || r === "month" || r === "quarter" || r === "half-year" || r === "year") && (r = `MM-dd
yyyy`);
    var n = Xe(t), i = e ? "getUTC" : "get", a = n[i + "FullYear"](), o = n[i + "Month"]() + 1, s = n[i + "Date"](), l = n[i + "Hours"](), u = n[i + "Minutes"](), f = n[i + "Seconds"](), h = n[i + "Milliseconds"]();
    return r = r.replace("MM", Te(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", Te(a % 100 + "", 2)).replace("dd", Te(s, 2)).replace("d", s).replace("hh", Te(l, 2)).replace("h", l).replace("mm", Te(u, 2)).replace("m", u).replace("ss", Te(f, 2)).replace("s", f).replace("SSS", Te(h, 3)), r;
  }
  function wC(r) {
    return r && r.charAt(0).toUpperCase() + r.substr(1);
  }
  function oi(r, t) {
    return t = t || "transparent", Z(r) ? r : j(r) && r.colorStops && (r.colorStops[0] || {}).color || t;
  }
  function hm(r, t) {
    if (t === "_blank" || t === "blank") {
      var e = window.open();
      e.opener = null, e.location.href = r;
    } else
      window.open(r, t);
  }
  var dl = L, bC = ["left", "right", "top", "bottom", "width", "height"], pl = [["width", "left", "right"], ["height", "top", "bottom"]];
  function Eh(r, t, e, n, i) {
    var a = 0, o = 0;
    n == null && (n = 1 / 0), i == null && (i = 1 / 0);
    var s = 0;
    t.eachChild(function(l, u) {
      var f = l.getBoundingRect(), h = t.childAt(u + 1), v = h && h.getBoundingRect(), c, d;
      if (r === "horizontal") {
        var g = f.width + (v ? -v.x + f.x : 0);
        c = a + g, c > n || l.newline ? (a = 0, c = g, o += s + e, s = f.height) : s = Math.max(s, f.height);
      } else {
        var p = f.height + (v ? -v.y + f.y : 0);
        d = o + p, d > i || l.newline ? (a += s + e, o = 0, d = p, s = f.width) : s = Math.max(s, f.width);
      }
      l.newline || (l.x = a, l.y = o, l.markRedraw(), r === "horizontal" ? a = c + e : o = d + e);
    });
  }
  var oo = Eh;
  Ot(Eh, "vertical"), Ot(Eh, "horizontal");
  function si(r, t, e) {
    e = ao(e || 0);
    var n = t.width, i = t.height, a = Lt(r.left, n), o = Lt(r.top, i), s = Lt(r.right, n), l = Lt(r.bottom, i), u = Lt(r.width, n), f = Lt(r.height, i), h = e[2] + e[0], v = e[1] + e[3], c = r.aspect;
    switch (isNaN(u) && (u = n - s - v - a), isNaN(f) && (f = i - l - h - o), c != null && (isNaN(u) && isNaN(f) && (c > n / i ? u = n * 0.8 : f = i * 0.8), isNaN(u) && (u = c * f), isNaN(f) && (f = u / c)), isNaN(a) && (a = n - s - u - v), isNaN(o) && (o = i - l - f - h), r.left || r.right) {
      case "center":
        a = n / 2 - u / 2 - e[3];
        break;
      case "right":
        a = n - u - v;
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
    a = a || 0, o = o || 0, isNaN(u) && (u = n - v - a - (s || 0)), isNaN(f) && (f = i - h - o - (l || 0));
    var d = new dt(a + e[3], o + e[0], u, f);
    return d.margin = e, d;
  }
  function so(r) {
    var t = r.layoutMode || r.constructor.layoutMode;
    return j(t) ? t : t ? {
      type: t
    } : null;
  }
  function Qi(r, t, e) {
    var n = e && e.ignoreSize;
    !X(n) && (n = [n, n]);
    var i = o(pl[0], 0), a = o(pl[1], 1);
    u(pl[0], r, i), u(pl[1], r, a);
    function o(f, h) {
      var v = {}, c = 0, d = {}, g = 0, p = 2;
      if (dl(f, function(S) {
        d[S] = r[S];
      }), dl(f, function(S) {
        s(t, S) && (v[S] = d[S] = t[S]), l(v, S) && c++, l(d, S) && g++;
      }), n[h])
        return l(t, f[1]) ? d[f[2]] = null : l(t, f[2]) && (d[f[1]] = null), d;
      if (g === p || !c)
        return d;
      if (c >= p)
        return v;
      for (var m = 0; m < f.length; m++) {
        var _ = f[m];
        if (!s(v, _) && s(r, _)) {
          v[_] = r[_];
          break;
        }
      }
      return v;
    }
    function s(f, h) {
      return f.hasOwnProperty(h);
    }
    function l(f, h) {
      return f[h] != null && f[h] !== "auto";
    }
    function u(f, h, v) {
      dl(f, function(c) {
        h[c] = v[c];
      });
    }
  }
  function gl(r) {
    return xC({}, r);
  }
  function xC(r, t) {
    return t && r && dl(bC, function(e) {
      t.hasOwnProperty(e) && (r[e] = t[e]);
    }), r;
  }
  var TC = kt(), pt = (
    /** @class */
    function(r) {
      x(t, r);
      function t(e, n, i) {
        var a = r.call(this, e, n, i) || this;
        return a.uid = ol("ec_cpt_model"), a;
      }
      return t.prototype.init = function(e, n, i) {
        this.mergeDefaultAndTheme(e, i);
      }, t.prototype.mergeDefaultAndTheme = function(e, n) {
        var i = so(this), a = i ? gl(e) : {}, o = n.getTheme();
        yt(e, o.get(this.mainType)), yt(e, this.getDefaultOption()), i && Qi(e, a, i);
      }, t.prototype.mergeOption = function(e, n) {
        yt(this.option, e, !0);
        var i = so(this);
        i && Qi(this.option, e, i);
      }, t.prototype.optionUpdated = function(e, n) {
      }, t.prototype.getDefaultOption = function() {
        var e = this.constructor;
        if (!Qb(e))
          return e.defaultOption;
        var n = TC(this);
        if (!n.defaultOption) {
          for (var i = [], a = e; a; ) {
            var o = a.prototype.defaultOption;
            o && i.push(o), a = a.superClass;
          }
          for (var s = {}, l = i.length - 1; l >= 0; l--)
            s = yt(s, i[l], !0);
          n.defaultOption = s;
        }
        return n.defaultOption;
      }, t.prototype.getReferringComponents = function(e, n) {
        var i = e + "Index", a = e + "Id";
        return Fa(this.ecModel, e, {
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
    }(Rt)
  );
  wp(pt, Rt), Cs(pt), lC(pt), uC(pt, CC);
  function CC(r) {
    var t = [];
    return L(pt.getClassesByMainType(r), function(e) {
      t = t.concat(e.dependencies || e.prototype.dependencies || []);
    }), t = K(t, function(e) {
      return Cr(e).main;
    }), r !== "dataset" && wt(t, "dataset") <= 0 && t.unshift("dataset"), t;
  }
  var cm = "";
  typeof navigator < "u" && (cm = navigator.platform || "");
  var Ji = "rgba(0, 0, 0, 0.2)", DC = {
    darkMode: "auto",
    // backgroundColor: 'rgba(0,0,0,0)',
    colorBy: "series",
    color: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"],
    gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
    aria: {
      decal: {
        decals: [{
          color: Ji,
          dashArrayX: [1, 0],
          dashArrayY: [2, 5],
          symbolSize: 1,
          rotation: Math.PI / 6
        }, {
          color: Ji,
          symbol: "circle",
          dashArrayX: [[8, 8], [0, 8, 8, 0]],
          dashArrayY: [6, 0],
          symbolSize: 0.8
        }, {
          color: Ji,
          dashArrayX: [1, 0],
          dashArrayY: [4, 3],
          rotation: -Math.PI / 4
        }, {
          color: Ji,
          dashArrayX: [[6, 6], [0, 6, 6, 0]],
          dashArrayY: [6, 0]
        }, {
          color: Ji,
          dashArrayX: [[1, 0], [1, 6]],
          dashArrayY: [1, 0, 6, 0],
          rotation: Math.PI / 4
        }, {
          color: Ji,
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
      fontFamily: cm.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
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
  }, Rh = lt(["tooltip", "label", "itemName", "itemId", "itemGroupId", "seriesName"]), Je = "original", Ce = "arrayRows", fr = "objectRows", Ir = "keyedColumns", Xr = "typedArray", vm = "unknown", Lr = "column", ta = "row", Qt = {
    Must: 1,
    Might: 2,
    Not: 3
    // Other cases
  }, dm = kt();
  function MC(r) {
    dm(r).datasetMap = lt();
  }
  function AC(r, t, e) {
    var n = {}, i = Oh(t);
    if (!i || !r)
      return n;
    var a = [], o = [], s = t.ecModel, l = dm(s).datasetMap, u = i.uid + "_" + e.seriesLayoutBy, f, h;
    r = r.slice(), L(r, function(g, p) {
      var m = j(g) ? g : r[p] = {
        name: g
      };
      m.type === "ordinal" && f == null && (f = p, h = d(m)), n[m.name] = [];
    });
    var v = l.get(u) || l.set(u, {
      categoryWayDim: h,
      valueWayDim: 0
    });
    L(r, function(g, p) {
      var m = g.name, _ = d(g);
      if (f == null) {
        var S = v.valueWayDim;
        c(n[m], S, _), c(o, S, _), v.valueWayDim += _;
      } else if (f === p)
        c(n[m], 0, _), c(a, 0, _);
      else {
        var S = v.categoryWayDim;
        c(n[m], S, _), c(o, S, _), v.categoryWayDim += _;
      }
    });
    function c(g, p, m) {
      for (var _ = 0; _ < m; _++)
        g.push(p + _);
    }
    function d(g) {
      var p = g.dimsDef;
      return p ? p.length : 1;
    }
    return a.length && (n.itemName = a), o.length && (n.seriesName = o), n;
  }
  function PC(r, t, e) {
    var n = {}, i = Oh(r);
    if (!i)
      return n;
    var a = t.sourceFormat, o = t.dimensionsDefine, s;
    (a === fr || a === Ir) && L(o, function(f, h) {
      (j(f) ? f.name : f) === "name" && (s = h);
    });
    var l = function() {
      for (var f = {}, h = {}, v = [], c = 0, d = Math.min(5, e); c < d; c++) {
        var g = gm(t.data, a, t.seriesLayoutBy, o, t.startIndex, c);
        v.push(g);
        var p = g === Qt.Not;
        if (p && f.v == null && c !== s && (f.v = c), (f.n == null || f.n === f.v || !p && v[f.n] === Qt.Not) && (f.n = c), m(f) && v[f.n] !== Qt.Not)
          return f;
        p || (g === Qt.Might && h.v == null && c !== s && (h.v = c), (h.n == null || h.n === h.v) && (h.n = c));
      }
      function m(_) {
        return _.v != null && _.n != null;
      }
      return m(f) ? f : m(h) ? h : null;
    }();
    if (l) {
      n.value = [l.v];
      var u = s ?? l.n;
      n.itemName = [u], n.seriesName = [u];
    }
    return n;
  }
  function Oh(r) {
    var t = r.get("data", !0);
    if (!t)
      return Fa(r.ecModel, "dataset", {
        index: r.get("datasetIndex", !0),
        id: r.get("datasetId", !0)
      }, lr).models[0];
  }
  function IC(r) {
    return !r.get("transform", !0) && !r.get("fromTransformResult", !0) ? [] : Fa(r.ecModel, "dataset", {
      index: r.get("fromDatasetIndex", !0),
      id: r.get("fromDatasetId", !0)
    }, lr).models;
  }
  function pm(r, t) {
    return gm(r.data, r.sourceFormat, r.seriesLayoutBy, r.dimensionsDefine, r.startIndex, t);
  }
  function gm(r, t, e, n, i, a) {
    var o, s = 5;
    if (ue(r))
      return Qt.Not;
    var l, u;
    if (n) {
      var f = n[a];
      j(f) ? (l = f.name, u = f.type) : Z(f) && (l = f);
    }
    if (u != null)
      return u === "ordinal" ? Qt.Must : Qt.Not;
    if (t === Ce) {
      var h = r;
      if (e === ta) {
        for (var v = h[a], c = 0; c < (v || []).length && c < s; c++)
          if ((o = b(v[i + c])) != null)
            return o;
      } else
        for (var c = 0; c < h.length && c < s; c++) {
          var d = h[i + c];
          if (d && (o = b(d[a])) != null)
            return o;
        }
    } else if (t === fr) {
      var g = r;
      if (!l)
        return Qt.Not;
      for (var c = 0; c < g.length && c < s; c++) {
        var p = g[c];
        if (p && (o = b(p[l])) != null)
          return o;
      }
    } else if (t === Ir) {
      var m = r;
      if (!l)
        return Qt.Not;
      var v = m[l];
      if (!v || ue(v))
        return Qt.Not;
      for (var c = 0; c < v.length && c < s; c++)
        if ((o = b(v[c])) != null)
          return o;
    } else if (t === Je)
      for (var _ = r, c = 0; c < _.length && c < s; c++) {
        var p = _[c], S = Na(p);
        if (!X(S))
          return Qt.Not;
        if ((o = b(S[a])) != null)
          return o;
      }
    function b(C) {
      var T = Z(C);
      if (C != null && isFinite(C) && C !== "")
        return T ? Qt.Might : Qt.Not;
      if (T && C !== "-")
        return Qt.Must;
    }
    return Qt.Not;
  }
  var LC = lt();
  function EC(r, t, e) {
    var n = LC.get(t);
    if (!n)
      return e;
    var i = n(r);
    if (!i)
      return e;
    for (var a = 0; a < i.length; a++)
      st(Vi(i[a]));
    return e.concat(i);
  }
  var mm = kt();
  kt();
  var kh = (
    /** @class */
    function() {
      function r() {
      }
      return r.prototype.getColorFromPalette = function(t, e, n) {
        var i = ce(this.get("color", !0)), a = this.get("colorLayer", !0);
        return OC(this, mm, i, a, t, e, n);
      }, r.prototype.clearColorPalette = function() {
        kC(this, mm);
      }, r;
    }()
  );
  function RC(r, t) {
    for (var e = r.length, n = 0; n < e; n++)
      if (r[n].length > t)
        return r[n];
    return r[e - 1];
  }
  function OC(r, t, e, n, i, a, o) {
    a = a || r;
    var s = t(a), l = s.paletteIdx || 0, u = s.paletteNameMap = s.paletteNameMap || {};
    if (u.hasOwnProperty(i))
      return u[i];
    var f = o == null || !n ? e : RC(n, o);
    if (f = f || e, !(!f || !f.length)) {
      var h = f[l];
      return i && (u[i] = h), s.paletteIdx = (l + 1) % f.length, h;
    }
  }
  function kC(r, t) {
    t(r).paletteIdx = 0, t(r).paletteNameMap = {};
  }
  var ml, lo, ym, Nh = "\0_ec_inner", _m = 1, NC = {
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
  }, BC = {
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
  }, yl = {};
  function FC(r) {
    L(r, function(t, e) {
      if (!pt.hasClass(e)) {
        var n = NC[e];
        n && !yl[n] && (re("Component " + e + ` is used but not imported.
import { ` + n + ` } from 'echarts/components';
echarts.use([` + n + "]);"), yl[n] = !0);
      }
    });
  }
  var Bh = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }
      return t.prototype.init = function(e, n, i, a, o, s) {
        a = a || {}, this.option = null, this._theme = new Rt(a), this._locale = new Rt(o), this._optionManager = s;
      }, t.prototype.setOption = function(e, n, i) {
        st(e != null, "option is null/undefined"), st(e[Nh] !== _m, "please use chart.getOption()");
        var a = bm(n);
        this._optionManager.setOption(e, i, a), this._resetOption(null, a);
      }, t.prototype.resetOption = function(e, n) {
        return this._resetOption(e, bm(n));
      }, t.prototype._resetOption = function(e, n) {
        var i = !1, a = this._optionManager;
        if (!e || e === "recreate") {
          var o = a.mountOption(e === "recreate");
          FC(o), !this.option || e === "recreate" ? ym(this, o) : (this.restoreData(), this._mergeOption(o, n)), i = !0;
        }
        if ((e === "timeline" || e === "media") && this.restoreData(), !e || e === "recreate" || e === "timeline") {
          var s = a.getTimelineOption(this);
          s && (i = !0, this._mergeOption(s, n));
        }
        if (!e || e === "recreate" || e === "media") {
          var l = a.getMediaOption(this);
          l.length && L(l, function(u) {
            i = !0, this._mergeOption(u, n);
          }, this);
        }
        return i;
      }, t.prototype.mergeOption = function(e) {
        this._mergeOption(e, null);
      }, t.prototype._mergeOption = function(e, n) {
        var i = this.option, a = this._componentsMap, o = this._componentsCount, s = [], l = lt(), u = n && n.replaceMergeMainTypeMap;
        MC(this), L(e, function(h, v) {
          h != null && (pt.hasClass(v) ? v && (s.push(v), l.set(v, !0)) : i[v] = i[v] == null ? vt(h) : yt(i[v], h, !0));
        }), u && u.each(function(h, v) {
          pt.hasClass(v) && !l.get(v) && (s.push(v), l.set(v, !0));
        }), pt.topologicalTravel(s, pt.getAllClassMainTypes(), f, this);
        function f(h) {
          var v = EC(this, h, ce(e[h])), c = a.get(h), d = (
            // `!oldCmptList` means init. See the comment in `mappingToExists`
            c ? u && u.get(h) ? "replaceMerge" : "normalMerge" : "replaceAll"
          ), g = Fb(c, v, d);
          Yb(g, h, pt), i[h] = null, a.set(h, null), o.set(h, 0);
          var p = [], m = [], _ = 0, S, b;
          L(g, function(C, T) {
            var D = C.existing, M = C.newOption;
            if (!M)
              D && (D.mergeOption({}, this), D.optionUpdated({}, !1));
            else {
              var P = h === "series", E = pt.getClass(
                h,
                C.keyInfo.subType,
                !P
                // Give a more detailed warn later if series don't exists
              );
              if (!E) {
                {
                  var A = C.keyInfo.subType, k = BC[A];
                  yl[A] || (yl[A] = !0, re(k ? "Series " + A + ` is used but not imported.
import { ` + k + ` } from 'echarts/charts';
echarts.use([` + k + "]);" : "Unknown series " + A));
                }
                return;
              }
              if (h === "tooltip") {
                if (S) {
                  b || (ee("Currently only one tooltip component is allowed."), b = !0);
                  return;
                }
                S = !0;
              }
              if (D && D.constructor === E)
                D.name = C.keyInfo.name, D.mergeOption(M, this), D.optionUpdated(M, !1);
              else {
                var N = W({
                  componentIndex: T
                }, C.keyInfo);
                D = new E(M, this, this, N), W(D, N), C.brandNew && (D.__requireNewView = !0), D.init(M, this, this), D.optionUpdated(null, !0);
              }
            }
            D ? (p.push(D.option), m.push(D), _++) : (p.push(void 0), m.push(void 0));
          }, this), i[h] = p, a.set(h, m), o.set(h, _), h === "series" && ml(this);
        }
        this._seriesIndices || ml(this);
      }, t.prototype.getOption = function() {
        var e = vt(this.option);
        return L(e, function(n, i) {
          if (pt.hasClass(i)) {
            for (var a = ce(n), o = a.length, s = !1, l = o - 1; l >= 0; l--)
              a[l] && !Vi(a[l]) ? s = !0 : (a[l] = null, !s && o--);
            a.length = o, e[i] = a;
          }
        }), delete e[Nh], e;
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
        return i != null ? (l = [], L(ce(i), function(u) {
          s[u] && l.push(s[u]);
        })) : a != null ? l = Sm("id", a, s) : o != null ? l = Sm("name", o, s) : l = Ft(s, function(u) {
          return !!u;
        }), wm(l, e);
      }, t.prototype.findComponents = function(e) {
        var n = e.query, i = e.mainType, a = s(n), o = a ? this.queryComponents(a) : Ft(this._componentsMap.get(i), function(u) {
          return !!u;
        });
        return l(wm(o, e));
        function s(u) {
          var f = i + "Index", h = i + "Id", v = i + "Name";
          return u && (u[f] != null || u[h] != null || u[v] != null) ? {
            mainType: i,
            // subType will be filtered finally.
            index: u[f],
            id: u[h],
            name: u[v]
          } : null;
        }
        function l(u) {
          return e.filter ? Ft(u, e.filter) : u;
        }
      }, t.prototype.eachComponent = function(e, n, i) {
        var a = this._componentsMap;
        if (tt(e)) {
          var o = n, s = e;
          a.each(function(h, v) {
            for (var c = 0; h && c < h.length; c++) {
              var d = h[c];
              d && s.call(o, v, d, d.componentIndex);
            }
          });
        } else
          for (var l = Z(e) ? a.get(e) : j(e) ? this.findComponents(e) : null, u = 0; l && u < l.length; u++) {
            var f = l[u];
            f && n.call(i, f, f.componentIndex);
          }
      }, t.prototype.getSeriesByName = function(e) {
        var n = Tr(e, null);
        return Ft(this._componentsMap.get("series"), function(i) {
          return !!i && n != null && i.name === n;
        });
      }, t.prototype.getSeriesByIndex = function(e) {
        return this._componentsMap.get("series")[e];
      }, t.prototype.getSeriesByType = function(e) {
        return Ft(this._componentsMap.get("series"), function(n) {
          return !!n && n.subType === e;
        });
      }, t.prototype.getSeries = function() {
        return Ft(this._componentsMap.get("series"), function(e) {
          return !!e;
        });
      }, t.prototype.getSeriesCount = function() {
        return this._componentsCount.get("series");
      }, t.prototype.eachSeries = function(e, n) {
        lo(this), L(this._seriesIndices, function(i) {
          var a = this._componentsMap.get("series")[i];
          e.call(n, a, i);
        }, this);
      }, t.prototype.eachRawSeries = function(e, n) {
        L(this._componentsMap.get("series"), function(i) {
          i && e.call(n, i, i.componentIndex);
        });
      }, t.prototype.eachSeriesByType = function(e, n, i) {
        lo(this), L(this._seriesIndices, function(a) {
          var o = this._componentsMap.get("series")[a];
          o.subType === e && n.call(i, o, a);
        }, this);
      }, t.prototype.eachRawSeriesByType = function(e, n, i) {
        return L(this.getSeriesByType(e), n, i);
      }, t.prototype.isSeriesFiltered = function(e) {
        return lo(this), this._seriesIndicesMap.get(e.componentIndex) == null;
      }, t.prototype.getCurrentSeriesIndices = function() {
        return (this._seriesIndices || []).slice();
      }, t.prototype.filterSeries = function(e, n) {
        lo(this);
        var i = [];
        L(this._seriesIndices, function(a) {
          var o = this._componentsMap.get("series")[a];
          e.call(n, o, a) && i.push(a);
        }, this), this._seriesIndices = i, this._seriesIndicesMap = lt(i);
      }, t.prototype.restoreData = function(e) {
        ml(this);
        var n = this._componentsMap, i = [];
        n.each(function(a, o) {
          pt.hasClass(o) && i.push(o);
        }), pt.topologicalTravel(i, pt.getAllClassMainTypes(), function(a) {
          L(n.get(a), function(o) {
            o && (a !== "series" || !zC(o, e)) && o.restoreData();
          });
        });
      }, t.internalField = function() {
        ml = function(e) {
          var n = e._seriesIndices = [];
          L(e._componentsMap.get("series"), function(i) {
            i && n.push(i.componentIndex);
          }), e._seriesIndicesMap = lt(n);
        }, lo = function(e) {
          if (!e._seriesIndices)
            throw new Error("Option should contains series.");
        }, ym = function(e, n) {
          e.option = {}, e.option[Nh] = _m, e._componentsMap = lt({
            series: []
          }), e._componentsCount = lt();
          var i = n.aria;
          j(i) && i.enabled == null && (i.enabled = !0), VC(n, e._theme.option), yt(n, DC, !1), e._mergeOption(n, null);
        };
      }(), t;
    }(Rt)
  );
  function zC(r, t) {
    if (t) {
      var e = t.seriesIndex, n = t.seriesId, i = t.seriesName;
      return e != null && r.componentIndex !== e || n != null && r.id !== n || i != null && r.name !== i;
    }
  }
  function VC(r, t) {
    var e = r.color && !r.colorLayer;
    L(t, function(n, i) {
      i === "colorLayer" && e || pt.hasClass(i) || (typeof n == "object" ? r[i] = r[i] ? yt(r[i], n, !1) : vt(n) : r[i] == null && (r[i] = n));
    });
  }
  function Sm(r, t, e) {
    if (X(t)) {
      var n = lt();
      return L(t, function(a) {
        if (a != null) {
          var o = Tr(a, null);
          o != null && n.set(a, !0);
        }
      }), Ft(e, function(a) {
        return a && n.get(a[r]);
      });
    } else {
      var i = Tr(t, null);
      return Ft(e, function(a) {
        return a && i != null && a[r] === i;
      });
    }
  }
  function wm(r, t) {
    return t.hasOwnProperty("subType") ? Ft(r, function(e) {
      return e && e.subType === t.subType;
    }) : r;
  }
  function bm(r) {
    var t = lt();
    return r && L(ce(r.replaceMerge), function(e) {
      st(pt.hasClass(e), '"' + e + '" is not valid component main type in "replaceMerge"'), t.set(e, !0);
    }), {
      replaceMergeMainTypeMap: t
    };
  }
  He(Bh, kh);
  var GC = [
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
  ], xm = (
    /** @class */
    function() {
      function r(t) {
        L(GC, function(e) {
          this[e] = Pt(t[e], t);
        }, this);
      }
      return r;
    }()
  ), Fh = {}, _l = (
    /** @class */
    function() {
      function r() {
        this._coordinateSystems = [];
      }
      return r.prototype.create = function(t, e) {
        var n = [];
        L(Fh, function(i, a) {
          var o = i.create(t, e);
          n = n.concat(o || []);
        }), this._coordinateSystems = n;
      }, r.prototype.update = function(t, e) {
        L(this._coordinateSystems, function(n) {
          n.update && n.update(t, e);
        });
      }, r.prototype.getCoordinateSystems = function() {
        return this._coordinateSystems.slice();
      }, r.register = function(t, e) {
        Fh[t] = e;
      }, r.get = function(t) {
        return Fh[t];
      }, r;
    }()
  ), HC = /^(min|max)?(.+)$/, WC = (
    /** @class */
    function() {
      function r(t) {
        this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = t;
      }
      return r.prototype.setOption = function(t, e, n) {
        t && (L(ce(t.series), function(o) {
          o && o.data && ue(o.data) && ga(o.data);
        }), L(ce(t.dataset), function(o) {
          o && o.source && ue(o.source) && ga(o.source);
        })), t = vt(t);
        var i = this._optionBackup, a = UC(t, e, !i);
        this._newBaseOption = a.baseOption, i ? (a.timelineOptions.length && (i.timelineOptions = a.timelineOptions), a.mediaList.length && (i.mediaList = a.mediaList), a.mediaDefault && (i.mediaDefault = a.mediaDefault)) : this._optionBackup = a;
      }, r.prototype.mountOption = function(t) {
        var e = this._optionBackup;
        return this._timelineOptions = e.timelineOptions, this._mediaList = e.mediaList, this._mediaDefault = e.mediaDefault, this._currentMediaIndices = [], vt(t ? e.baseOption : this._newBaseOption);
      }, r.prototype.getTimelineOption = function(t) {
        var e, n = this._timelineOptions;
        if (n.length) {
          var i = t.getComponent("timeline");
          i && (e = vt(
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
          YC(i[l].query, e, n) && o.push(l);
        return !o.length && a && (o = [-1]), o.length && !$C(o, this._currentMediaIndices) && (s = K(o, function(f) {
          return vt(f === -1 ? a.option : i[f].option);
        })), this._currentMediaIndices = o, s;
      }, r;
    }()
  );
  function UC(r, t, e) {
    var n = [], i, a, o = r.baseOption, s = r.timeline, l = r.options, u = r.media, f = !!r.media, h = !!(l || s || o && o.timeline);
    o ? (a = o, a.timeline || (a.timeline = s)) : ((h || f) && (r.options = r.media = null), a = r), f && (X(u) ? L(u, function(c) {
      c && !c.option && j(c.query) && j(c.query.option) && re("Illegal media option. Must be like { media: [ { query: {}, option: {} } ] }"), c && c.option && (c.query ? n.push(c) : i || (i = c));
    }) : re("Illegal media option. Must be an array. Like { media: [ {...}, {...} ] }")), v(a), L(l, function(c) {
      return v(c);
    }), L(n, function(c) {
      return v(c.option);
    });
    function v(c) {
      L(t, function(d) {
        d(c, e);
      });
    }
    return {
      baseOption: a,
      timelineOptions: l || [],
      mediaDefault: i,
      mediaList: n
    };
  }
  function YC(r, t, e) {
    var n = {
      width: t,
      height: e,
      aspectratio: t / e
      // lower case for convenience.
    }, i = !0;
    return L(r, function(a, o) {
      var s = o.match(HC);
      if (!(!s || !s[1] || !s[2])) {
        var l = s[1], u = s[2].toLowerCase();
        XC(n[u], a, l) || (i = !1);
      }
    }), i;
  }
  function XC(r, t, e) {
    return e === "min" ? r >= t : e === "max" ? r <= t : r === t;
  }
  function $C(r, t) {
    return r.join(",") === t.join(",");
  }
  var tr = L, uo = j, Tm = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
  function zh(r) {
    var t = r && r.itemStyle;
    if (t)
      for (var e = 0, n = Tm.length; e < n; e++) {
        var i = Tm[e], a = t.normal, o = t.emphasis;
        a && a[i] && (Wt("itemStyle.normal." + i, i), r[i] = r[i] || {}, r[i].normal ? yt(r[i].normal, a[i]) : r[i].normal = a[i], a[i] = null), o && o[i] && (Wt("itemStyle.emphasis." + i, "emphasis." + i), r[i] = r[i] || {}, r[i].emphasis ? yt(r[i].emphasis, o[i]) : r[i].emphasis = o[i], o[i] = null);
      }
  }
  function ae(r, t, e) {
    if (r && r[t] && (r[t].normal || r[t].emphasis)) {
      var n = r[t].normal, i = r[t].emphasis;
      n && (sr("'normal' hierarchy in " + t + " has been removed since 4.0. All style properties are configured in " + t + " directly now."), e ? (r[t].normal = r[t].emphasis = null, St(r[t], n)) : r[t] = n), i && (sr(t + ".emphasis has been changed to emphasis." + t + " since 4.0"), r.emphasis = r.emphasis || {}, r.emphasis[t] = i, i.focus && (r.emphasis.focus = i.focus), i.blurScope && (r.emphasis.blurScope = i.blurScope));
    }
  }
  function fo(r) {
    ae(r, "itemStyle"), ae(r, "lineStyle"), ae(r, "areaStyle"), ae(r, "label"), ae(r, "labelLine"), ae(r, "upperLabel"), ae(r, "edgeLabel");
  }
  function Gt(r, t) {
    var e = uo(r) && r[t], n = uo(e) && e.textStyle;
    if (n) {
      sr("textStyle hierarchy in " + t + " has been removed since 4.0. All textStyle properties are configured in " + t + " directly now.");
      for (var i = 0, a = dp.length; i < a; i++) {
        var o = dp[i];
        n.hasOwnProperty(o) && (e[o] = n[o]);
      }
    }
  }
  function er(r) {
    r && (fo(r), Gt(r, "label"), r.emphasis && Gt(r.emphasis, "label"));
  }
  function qC(r) {
    if (uo(r)) {
      zh(r), fo(r), Gt(r, "label"), Gt(r, "upperLabel"), Gt(r, "edgeLabel"), r.emphasis && (Gt(r.emphasis, "label"), Gt(r.emphasis, "upperLabel"), Gt(r.emphasis, "edgeLabel"));
      var t = r.markPoint;
      t && (zh(t), er(t));
      var e = r.markLine;
      e && (zh(e), er(e));
      var n = r.markArea;
      n && er(n);
      var i = r.data;
      if (r.type === "graph") {
        i = i || r.nodes;
        var a = r.links || r.edges;
        if (a && !ue(a))
          for (var o = 0; o < a.length; o++)
            er(a[o]);
        L(r.categories, function(u) {
          fo(u);
        });
      }
      if (i && !ue(i))
        for (var o = 0; o < i.length; o++)
          er(i[o]);
      if (t = r.markPoint, t && t.data)
        for (var s = t.data, o = 0; o < s.length; o++)
          er(s[o]);
      if (e = r.markLine, e && e.data)
        for (var l = e.data, o = 0; o < l.length; o++)
          X(l[o]) ? (er(l[o][0]), er(l[o][1])) : er(l[o]);
      r.type === "gauge" ? (Gt(r, "axisLabel"), Gt(r, "title"), Gt(r, "detail")) : r.type === "treemap" ? (ae(r.breadcrumb, "itemStyle"), L(r.levels, function(u) {
        fo(u);
      })) : r.type === "tree" && fo(r.leaves);
    }
  }
  function $r(r) {
    return X(r) ? r : r ? [r] : [];
  }
  function Cm(r) {
    return (X(r) ? r[0] : r) || {};
  }
  function ZC(r, t) {
    tr($r(r.series), function(n) {
      uo(n) && qC(n);
    });
    var e = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
    t && e.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), tr(e, function(n) {
      tr($r(r[n]), function(i) {
        i && (Gt(i, "axisLabel"), Gt(i.axisPointer, "label"));
      });
    }), tr($r(r.parallel), function(n) {
      var i = n && n.parallelAxisDefault;
      Gt(i, "axisLabel"), Gt(i && i.axisPointer, "label");
    }), tr($r(r.calendar), function(n) {
      ae(n, "itemStyle"), Gt(n, "dayLabel"), Gt(n, "monthLabel"), Gt(n, "yearLabel");
    }), tr($r(r.radar), function(n) {
      Gt(n, "name"), n.name && n.axisName == null && (n.axisName = n.name, delete n.name, sr("name property in radar component has been changed to axisName")), n.nameGap != null && n.axisNameGap == null && (n.axisNameGap = n.nameGap, delete n.nameGap, sr("nameGap property in radar component has been changed to axisNameGap")), tr(n.indicator, function(i) {
        i.text && Wt("text", "name", "radar.indicator");
      });
    }), tr($r(r.geo), function(n) {
      uo(n) && (er(n), tr($r(n.regions), function(i) {
        er(i);
      }));
    }), tr($r(r.timeline), function(n) {
      er(n), ae(n, "label"), ae(n, "itemStyle"), ae(n, "controlStyle", !0);
      var i = n.data;
      X(i) && L(i, function(a) {
        j(a) && (ae(a, "label"), ae(a, "itemStyle"));
      });
    }), tr($r(r.toolbox), function(n) {
      ae(n, "iconStyle"), tr(n.feature, function(i) {
        ae(i, "iconStyle");
      });
    }), Gt(Cm(r.axisPointer), "label"), Gt(Cm(r.tooltip).axisPointer, "label");
  }
  function KC(r, t) {
    for (var e = t.split(","), n = r, i = 0; i < e.length && (n = n && n[e[i]], n != null); i++)
      ;
    return n;
  }
  function jC(r, t, e, n) {
    for (var i = t.split(","), a = r, o, s = 0; s < i.length - 1; s++)
      o = i[s], a[o] == null && (a[o] = {}), a = a[o];
    (n || a[i[s]] == null) && (a[i[s]] = e);
  }
  function Dm(r) {
    r && L(QC, function(t) {
      t[0] in r && !(t[1] in r) && (r[t[1]] = r[t[0]]);
    });
  }
  var QC = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]], JC = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"], Vh = [["borderRadius", "barBorderRadius"], ["borderColor", "barBorderColor"], ["borderWidth", "barBorderWidth"]];
  function ho(r) {
    var t = r && r.itemStyle;
    if (t)
      for (var e = 0; e < Vh.length; e++) {
        var n = Vh[e][1], i = Vh[e][0];
        t[n] != null && (t[i] = t[n], Wt(n, i));
      }
  }
  function Mm(r) {
    r && r.alignTo === "edge" && r.margin != null && r.edgeDistance == null && (Wt("label.margin", "label.edgeDistance", "pie"), r.edgeDistance = r.margin);
  }
  function Am(r) {
    r && r.downplay && !r.blur && (r.blur = r.downplay, Wt("downplay", "blur", "sunburst"));
  }
  function tD(r) {
    r && r.focusNodeAdjacency != null && (r.emphasis = r.emphasis || {}, r.emphasis.focus == null && (Wt("focusNodeAdjacency", "emphasis: { focus: 'adjacency'}", "graph/sankey"), r.emphasis.focus = "adjacency"));
  }
  function Pm(r, t) {
    if (r)
      for (var e = 0; e < r.length; e++)
        t(r[e]), r[e] && Pm(r[e].children, t);
  }
  function Im(r, t) {
    ZC(r, t), r.series = ce(r.series), L(r.series, function(e) {
      if (j(e)) {
        var n = e.type;
        if (n === "line")
          e.clipOverflow != null && (e.clip = e.clipOverflow, Wt("clipOverflow", "clip", "line"));
        else if (n === "pie" || n === "gauge") {
          e.clockWise != null && (e.clockwise = e.clockWise, Wt("clockWise", "clockwise")), Mm(e.label);
          var i = e.data;
          if (i && !ue(i))
            for (var a = 0; a < i.length; a++)
              Mm(i[a]);
          e.hoverOffset != null && (e.emphasis = e.emphasis || {}, (e.emphasis.scaleSize = null) && (Wt("hoverOffset", "emphasis.scaleSize"), e.emphasis.scaleSize = e.hoverOffset));
        } else if (n === "gauge") {
          var o = KC(e, "pointer.color");
          o != null && jC(e, "itemStyle.color", o);
        } else if (n === "bar") {
          ho(e), ho(e.backgroundStyle), ho(e.emphasis);
          var i = e.data;
          if (i && !ue(i))
            for (var a = 0; a < i.length; a++)
              typeof i[a] == "object" && (ho(i[a]), ho(i[a] && i[a].emphasis));
        } else if (n === "sunburst") {
          var s = e.highlightPolicy;
          s && (e.emphasis = e.emphasis || {}, e.emphasis.focus || (e.emphasis.focus = s, Wt("highlightPolicy", "emphasis.focus", "sunburst"))), Am(e), Pm(e.data, Am);
        } else
          n === "graph" || n === "sankey" ? tD(e) : n === "map" && (e.mapType && !e.map && (Wt("mapType", "map", "map"), e.map = e.mapType), e.mapLocation && (sr("`mapLocation` is not used anymore."), St(e, e.mapLocation)));
        e.hoverAnimation != null && (e.emphasis = e.emphasis || {}, e.emphasis && e.emphasis.scale == null && (Wt("hoverAnimation", "emphasis.scale"), e.emphasis.scale = e.hoverAnimation)), Dm(e);
      }
    }), r.dataRange && (r.visualMap = r.dataRange), L(JC, function(e) {
      var n = r[e];
      n && (X(n) || (n = [n]), L(n, function(i) {
        Dm(i);
      }));
    });
  }
  function eD(r) {
    var t = lt();
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
    }), t.each(rD);
  }
  function rD(r) {
    L(r, function(t, e) {
      var n = [], i = [NaN, NaN], a = [t.stackResultDimension, t.stackedOverDimension], o = t.data, s = t.isStackedByIndex, l = t.seriesModel.get("stackStrategy") || "samesign";
      o.modify(a, function(u, f, h) {
        var v = o.get(t.stackedDimension, h);
        if (isNaN(v))
          return i;
        var c, d;
        s ? d = o.getRawIndex(h) : c = o.get(t.stackedByDimension, h);
        for (var g = NaN, p = e - 1; p >= 0; p--) {
          var m = r[p];
          if (s || (d = m.data.rawIndexOf(m.stackedByDimension, c)), d >= 0) {
            var _ = m.data.getByRawIndex(m.stackResultDimension, d);
            if (l === "all" || l === "positive" && _ > 0 || l === "negative" && _ < 0 || l === "samesign" && v >= 0 && _ > 0 || l === "samesign" && v <= 0 && _ < 0) {
              v = Ab(v, _), g = _;
              break;
            }
          }
        }
        return n[0] = v, n[1] = g, n;
      });
    });
  }
  var Sl = (
    /** @class */
    function() {
      function r(t) {
        this.data = t.data || (t.sourceFormat === Ir ? {} : []), this.sourceFormat = t.sourceFormat || vm, this.seriesLayoutBy = t.seriesLayoutBy || Lr, this.startIndex = t.startIndex || 0, this.dimensionsDetectedCount = t.dimensionsDetectedCount, this.metaRawOption = t.metaRawOption;
        var e = this.dimensionsDefine = t.dimensionsDefine;
        if (e)
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.type == null && pm(this, n) === Qt.Must && (i.type = "ordinal");
          }
      }
      return r;
    }()
  );
  function Gh(r) {
    return r instanceof Sl;
  }
  function Hh(r, t, e) {
    e = e || Lm(r);
    var n = t.seriesLayoutBy, i = iD(r, e, n, t.sourceHeader, t.dimensions), a = new Sl({
      data: r,
      sourceFormat: e,
      seriesLayoutBy: n,
      dimensionsDefine: i.dimensionsDefine,
      startIndex: i.startIndex,
      dimensionsDetectedCount: i.dimensionsDetectedCount,
      metaRawOption: vt(t)
    });
    return a;
  }
  function Wh(r) {
    return new Sl({
      data: r,
      sourceFormat: ue(r) ? Xr : Je
    });
  }
  function nD(r) {
    return new Sl({
      data: r.data,
      sourceFormat: r.sourceFormat,
      seriesLayoutBy: r.seriesLayoutBy,
      dimensionsDefine: vt(r.dimensionsDefine),
      startIndex: r.startIndex,
      dimensionsDetectedCount: r.dimensionsDetectedCount
    });
  }
  function Lm(r) {
    var t = vm;
    if (ue(r))
      t = Xr;
    else if (X(r)) {
      r.length === 0 && (t = Ce);
      for (var e = 0, n = r.length; e < n; e++) {
        var i = r[e];
        if (i != null) {
          if (X(i)) {
            t = Ce;
            break;
          } else if (j(i)) {
            t = fr;
            break;
          }
        }
      }
    } else if (j(r)) {
      for (var a in r)
        if (On(r, a) && le(r[a])) {
          t = Ir;
          break;
        }
    }
    return t;
  }
  function iD(r, t, e, n, i) {
    var a, o;
    if (!r)
      return {
        dimensionsDefine: Em(i),
        startIndex: o,
        dimensionsDetectedCount: a
      };
    if (t === Ce) {
      var s = r;
      n === "auto" || n == null ? Rm(function(u) {
        u != null && u !== "-" && (Z(u) ? o == null && (o = 1) : o = 0);
      }, e, s, 10) : o = Mt(n) ? n : n ? 1 : 0, !i && o === 1 && (i = [], Rm(function(u, f) {
        i[f] = u != null ? u + "" : "";
      }, e, s, 1 / 0)), a = i ? i.length : e === ta ? s.length : s[0] ? s[0].length : null;
    } else if (t === fr)
      i || (i = aD(r));
    else if (t === Ir)
      i || (i = [], L(r, function(u, f) {
        i.push(f);
      }));
    else if (t === Je) {
      var l = Na(r[0]);
      a = X(l) && l.length || 1;
    } else
      t === Xr && st(!!i, "dimensions must be given if data is TypedArray.");
    return {
      startIndex: o,
      dimensionsDefine: Em(i),
      dimensionsDetectedCount: a
    };
  }
  function aD(r) {
    for (var t = 0, e; t < r.length && !(e = r[t++]); )
      ;
    if (e)
      return It(e);
  }
  function Em(r) {
    if (r) {
      var t = lt();
      return K(r, function(e, n) {
        e = j(e) ? e : {
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
  function Rm(r, t, e, n) {
    if (t === ta)
      for (var i = 0; i < e.length && i < n; i++)
        r(e[i] ? e[i][0] : null, i);
    else
      for (var a = e[0] || [], i = 0; i < a.length && i < n; i++)
        r(a[i], i);
  }
  function Om(r) {
    var t = r.sourceFormat;
    return t === fr || t === Ir;
  }
  var li, ui, fi, km, Nm, Bm = (
    /** @class */
    function() {
      function r(t, e) {
        var n = Gh(t) ? t : Wh(t);
        this._source = n;
        var i = this._data = n.data;
        if (n.sourceFormat === Xr) {
          if (e == null)
            throw new Error("Typed array data must specify dimension size");
          this._offset = 0, this._dimSize = e, this._data = i;
        }
        Nm(this, i, n);
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
        Nm = function(o, s, l) {
          var u = l.sourceFormat, f = l.seriesLayoutBy, h = l.startIndex, v = l.dimensionsDefine, c = km[Yh(u, f)];
          if (st(c, "Invalide sourceFormat: " + u), W(o, c), u === Xr)
            o.getItem = e, o.count = i, o.fillStorage = n;
          else {
            var d = zm(u, f);
            o.getItem = Pt(d, null, s, h, v);
            var g = Gm(u, f);
            o.count = Pt(g, null, s, h, v);
          }
        };
        var e = function(o, s) {
          o = o - this._offset, s = s || [];
          for (var l = this._data, u = this._dimSize, f = u * o, h = 0; h < u; h++)
            s[h] = l[f + h];
          return s;
        }, n = function(o, s, l, u) {
          for (var f = this._data, h = this._dimSize, v = 0; v < h; v++) {
            for (var c = u[v], d = c[0] == null ? 1 / 0 : c[0], g = c[1] == null ? -1 / 0 : c[1], p = s - o, m = l[v], _ = 0; _ < p; _++) {
              var S = f[_ * h + v];
              m[o + _] = S, S < d && (d = S), S > g && (g = S);
            }
            c[0] = d, c[1] = g;
          }
        }, i = function() {
          return this._data ? this._data.length / this._dimSize : 0;
        };
        km = (t = {}, t[Ce + "_" + Lr] = {
          pure: !0,
          appendData: a
        }, t[Ce + "_" + ta] = {
          pure: !0,
          appendData: function() {
            throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
          }
        }, t[fr] = {
          pure: !0,
          appendData: a
        }, t[Ir] = {
          pure: !0,
          appendData: function(o) {
            var s = this._data;
            L(o, function(l, u) {
              for (var f = s[u] || (s[u] = []), h = 0; h < (l || []).length; h++)
                f.push(l[h]);
            });
          }
        }, t[Je] = {
          appendData: a
        }, t[Xr] = {
          persistent: !1,
          pure: !0,
          appendData: function(o) {
            st(ue(o), "Added data must be TypedArray if data in initialization is TypedArray"), this._data = o;
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
  ), Fm = function(r, t, e, n) {
    return r[n];
  }, oD = (li = {}, li[Ce + "_" + Lr] = function(r, t, e, n) {
    return r[n + t];
  }, li[Ce + "_" + ta] = function(r, t, e, n, i) {
    n += t;
    for (var a = i || [], o = r, s = 0; s < o.length; s++) {
      var l = o[s];
      a[s] = l ? l[n] : null;
    }
    return a;
  }, li[fr] = Fm, li[Ir] = function(r, t, e, n, i) {
    for (var a = i || [], o = 0; o < e.length; o++) {
      var s = e[o].name;
      if (s == null)
        throw new Error();
      var l = r[s];
      a[o] = l ? l[n] : null;
    }
    return a;
  }, li[Je] = Fm, li);
  function zm(r, t) {
    var e = oD[Yh(r, t)];
    return st(e, 'Do not support get item on "' + r + '", "' + t + '".'), e;
  }
  var Vm = function(r, t, e) {
    return r.length;
  }, sD = (ui = {}, ui[Ce + "_" + Lr] = function(r, t, e) {
    return Math.max(0, r.length - t);
  }, ui[Ce + "_" + ta] = function(r, t, e) {
    var n = r[0];
    return n ? Math.max(0, n.length - t) : 0;
  }, ui[fr] = Vm, ui[Ir] = function(r, t, e) {
    var n = e[0].name;
    if (n == null)
      throw new Error();
    var i = r[n];
    return i ? i.length : 0;
  }, ui[Je] = Vm, ui);
  function Gm(r, t) {
    var e = sD[Yh(r, t)];
    return st(e, 'Do not support count on "' + r + '", "' + t + '".'), e;
  }
  var Uh = function(r, t, e) {
    return r[t];
  }, lD = (fi = {}, fi[Ce] = Uh, fi[fr] = function(r, t, e) {
    return r[e];
  }, fi[Ir] = Uh, fi[Je] = function(r, t, e) {
    var n = Na(r);
    return n instanceof Array ? n[t] : n;
  }, fi[Xr] = Uh, fi);
  function Hm(r) {
    var t = lD[r];
    return st(t, 'Do not support get value on "' + r + '".'), t;
  }
  function Yh(r, t) {
    return r === Ce ? r + "_" + t : r;
  }
  function ea(r, t, e) {
    if (r) {
      var n = r.getRawDataItem(t);
      if (n != null) {
        var i = r.getStore(), a = i.getSource().sourceFormat;
        if (e != null) {
          var o = r.getDimensionIndex(e), s = i.getDimensionProperty(o);
          return Hm(a)(n, o, s);
        } else {
          var l = n;
          return a === Je && (l = Na(n)), l;
        }
      }
    }
  }
  var uD = /\{@(.+?)\}/g, fD = (
    /** @class */
    function() {
      function r() {
      }
      return r.prototype.getDataParams = function(t, e) {
        var n = this.getData(e), i = this.getRawValue(t, e), a = n.getRawIndex(t), o = n.getName(t), s = n.getRawDataItem(t), l = n.getItemVisual(t, "style"), u = l && l[n.getItemVisual(t, "drawType") || "fill"], f = l && l.stroke, h = this.mainType, v = h === "series", c = n.userOutput && n.userOutput.get();
        return {
          componentType: h,
          componentSubType: this.subType,
          componentIndex: this.componentIndex,
          seriesType: v ? this.subType : null,
          seriesIndex: this.seriesIndex,
          seriesId: v ? this.id : null,
          seriesName: v ? this.name : null,
          name: o,
          dataIndex: a,
          data: s,
          dataType: e,
          value: i,
          color: u,
          borderColor: f,
          dimensionNames: c ? c.fullDimensions : null,
          encode: c ? c.encode : null,
          // Param name list for mapping `a`, `b`, `c`, `d`, `e`
          $vars: ["seriesName", "name", "value"]
        };
      }, r.prototype.getFormattedLabel = function(t, e, n, i, a, o) {
        e = e || "normal";
        var s = this.getData(n), l = this.getDataParams(t, n);
        if (o && (l.value = o.interpolatedValue), i != null && X(l.value) && (l.value = l.value[i]), !a) {
          var u = s.getItemModel(t);
          a = u.get(e === "normal" ? ["label", "formatter"] : [e, "label", "formatter"]);
        }
        if (tt(a))
          return l.status = e, l.dimensionIndex = i, a(l);
        if (Z(a)) {
          var f = Lh(a, l);
          return f.replace(uD, function(h, v) {
            var c = v.length, d = v;
            d.charAt(0) === "[" && d.charAt(c - 1) === "]" && (d = +d.slice(1, c - 1), isNaN(d) && re("Invalide label formatter: @" + v + ", only support @[0], @[1], @[2], ..."));
            var g = ea(s, t, d);
            if (o && X(o.interpolatedValue)) {
              var p = s.getDimensionIndex(d);
              p >= 0 && (g = o.interpolatedValue[p]);
            }
            return g != null ? g + "" : "";
          });
        }
      }, r.prototype.getRawValue = function(t, e) {
        return ea(this.getData(e), t);
      }, r.prototype.formatTooltip = function(t, e, n) {
      }, r;
    }()
  );
  function Wm(r) {
    var t, e;
    return j(r) ? r.type ? e = r : console.warn("The return type of `formatTooltip` is not supported: " + Ts(r)) : t = r, {
      text: t,
      // markers: markers || markersExisting,
      frag: e
    };
  }
  function co(r) {
    return new hD(r);
  }
  var hD = (
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
        function f(_) {
          return !(_ >= 1) && (_ = 1), _;
        }
        var h;
        (this._dirty || a === "reset") && (this._dirty = !1, h = this._doReset(n)), this._modBy = l, this._modDataCount = u;
        var v = t && t.step;
        if (e ? (st(e._outputDueEnd != null), this._dueEnd = e._outputDueEnd) : (st(!this._progress || this._count), this._dueEnd = this._count ? this._count(this.context) : 1 / 0), this._progress) {
          var c = this._dueIndex, d = Math.min(v != null ? this._dueIndex + v : 1 / 0, this._dueEnd);
          if (!n && (h || c < d)) {
            var g = this._progress;
            if (X(g))
              for (var p = 0; p < g.length; p++)
                this._doProgress(g[p], c, d, l, u);
            else
              this._doProgress(g, c, d, l, u);
          }
          this._dueIndex = d;
          var m = this._settedOutputEnd != null ? this._settedOutputEnd : d;
          st(m >= this._outputDueEnd), this._outputDueEnd = m;
        } else
          this._dueIndex = this._outputDueEnd = this._settedOutputEnd != null ? this._settedOutputEnd : this._dueEnd;
        return this.unfinished();
      }, r.prototype.dirty = function() {
        this._dirty = !0, this._onDirty && this._onDirty(this.context);
      }, r.prototype._doProgress = function(t, e, n, i, a) {
        Um.reset(e, n, i, a), this._callingProgress = t, this._callingProgress({
          start: e,
          end: n,
          count: n - e,
          next: Um.next
        }, this.context);
      }, r.prototype._doReset = function(t) {
        this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null;
        var e, n;
        !t && this._reset && (e = this._reset(this.context), e && e.progress && (n = e.forceFirstProgress, e = e.progress), X(e) && !e.length && (e = null)), this._progress = e, this._modBy = this._modDataCount = null;
        var i = this._downstream;
        return i && i.dirty(), n;
      }, r.prototype.unfinished = function() {
        return this._progress && this._dueIndex < this._dueEnd;
      }, r.prototype.pipe = function(t) {
        st(t && !t._disposed && t !== this), (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty());
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
  ), Um = function() {
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
  function wl(r, t) {
    var e = t && t.type;
    return e === "ordinal" ? r : (e === "time" && !Mt(r) && r != null && r !== "-" && (r = +Xe(r)), r == null || r === "" ? NaN : +r);
  }
  lt({
    number: function(r) {
      return parseFloat(r);
    },
    time: function(r) {
      return +Xe(r);
    },
    trim: function(r) {
      return Z(r) ? ir(r) : r;
    }
  });
  var cD = (
    /** @class */
    function() {
      function r(t, e) {
        var n = t === "desc";
        this._resultLT = n ? 1 : -1, e == null && (e = n ? "min" : "max"), this._incomparable = e === "min" ? -1 / 0 : 1 / 0;
      }
      return r.prototype.evaluate = function(t, e) {
        var n = Mt(t) ? t : ka(t), i = Mt(e) ? e : ka(e), a = isNaN(n), o = isNaN(i);
        if (a && (n = this._incomparable), o && (i = this._incomparable), a && o) {
          var s = Z(t), l = Z(e);
          s && (n = l ? t : 0), l && (i = s ? e : 0);
        }
        return n < i ? this._resultLT : n > i ? -this._resultLT : 0;
      }, r;
    }()
  ), vD = (
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
        return wl(t, e);
      }, r;
    }()
  );
  function dD(r, t) {
    var e = new vD(), n = r.data, i = e.sourceFormat = r.sourceFormat, a = r.startIndex, o = "";
    r.seriesLayoutBy !== Lr && (o = '`seriesLayoutBy` of upstream dataset can only be "column" in data transform.', be(o));
    var s = [], l = {}, u = r.dimensionsDefine;
    if (u)
      L(u, function(g, p) {
        var m = g.name, _ = {
          index: p,
          name: m,
          displayName: g.displayName
        };
        if (s.push(_), m != null) {
          var S = "";
          On(l, m) && (S = 'dimension name "' + m + '" duplicated.', be(S)), l[m] = _;
        }
      });
    else
      for (var f = 0; f < r.dimensionsDetectedCount; f++)
        s.push({
          index: f
        });
    var h = zm(i, Lr);
    t.__isBuiltIn && (e.getRawDataItem = function(g) {
      return h(n, a, s, g);
    }, e.getRawData = Pt(pD, null, r)), e.cloneRawData = Pt(gD, null, r);
    var v = Gm(i, Lr);
    e.count = Pt(v, null, n, a, s);
    var c = Hm(i);
    e.retrieveValue = function(g, p) {
      var m = h(n, a, s, g);
      return d(m, p);
    };
    var d = e.retrieveValueFromItem = function(g, p) {
      if (g != null) {
        var m = s[p];
        if (m)
          return c(g, p, m.name);
      }
    };
    return e.getDimensionInfo = Pt(mD, null, s, l), e.cloneAllDimensionInfo = Pt(yD, null, s), e;
  }
  function pD(r) {
    var t = r.sourceFormat;
    if (!Xh(t)) {
      var e = "";
      e = "`getRawData` is not supported in source format " + t, be(e);
    }
    return r.data;
  }
  function gD(r) {
    var t = r.sourceFormat, e = r.data;
    if (!Xh(t)) {
      var n = "";
      n = "`cloneRawData` is not supported in source format " + t, be(n);
    }
    if (t === Ce) {
      for (var i = [], a = 0, o = e.length; a < o; a++)
        i.push(e[a].slice());
      return i;
    } else if (t === fr) {
      for (var i = [], a = 0, o = e.length; a < o; a++)
        i.push(W({}, e[a]));
      return i;
    }
  }
  function mD(r, t, e) {
    if (e != null) {
      if (Mt(e) || !isNaN(e) && !On(t, e))
        return r[e];
      if (On(t, e))
        return t[e];
    }
  }
  function yD(r) {
    return vt(r);
  }
  var Ym = lt();
  function _D(r) {
    r = vt(r);
    var t = r.type, e = "";
    t || (e = "Must have a `type` when `registerTransform`.", be(e));
    var n = t.split(":");
    n.length !== 2 && (e = 'Name must include namespace like "ns:regression".', be(e));
    var i = !1;
    n[0] === "echarts" && (t = n[1], i = !0), r.__isBuiltIn = i, Ym.set(t, r);
  }
  function SD(r, t, e) {
    var n = ce(r), i = n.length, a = "";
    i || (a = "If `transform` declared, it should at least contain one transform.", be(a));
    for (var o = 0, s = i; o < s; o++) {
      var l = n[o];
      t = wD(l, t, e, i === 1 ? null : o), o !== s - 1 && (t.length = Math.max(t.length, 1));
    }
    return t;
  }
  function wD(r, t, e, n) {
    var i = "";
    t.length || (i = "Must have at least one upstream dataset.", be(i)), j(r) || (i = "transform declaration must be an object rather than " + typeof r + ".", be(i));
    var a = r.type, o = Ym.get(a);
    o || (i = 'Can not find transform on type "' + a + '".', be(i));
    var s = K(t, function(f) {
      return dD(f, o);
    }), l = ce(o.transform({
      upstream: s[0],
      upstreamList: s,
      config: vt(r.config)
    }));
    if (r.print) {
      var u = K(l, function(f) {
        var h = n != null ? " === pipe index: " + n : "";
        return ["=== dataset index: " + e.datasetIndex + h + " ===", "- transform result data:", Ts(f.data), "- transform result dimensions:", Ts(f.dimensions)].join(`
`);
      }).join(`
`);
      kb(u);
    }
    return K(l, function(f, h) {
      var v = "";
      j(f) || (v = "A transform should not return some empty results.", be(v)), f.data || (v = "Transform result data should be not be null or undefined", be(v));
      var c = Lm(f.data);
      Xh(c) || (v = "Transform result data should be array rows or object rows.", be(v));
      var d, g = t[0];
      if (g && h === 0 && !f.dimensions) {
        var p = g.startIndex;
        p && (f.data = g.data.slice(0, p).concat(f.data)), d = {
          seriesLayoutBy: Lr,
          sourceHeader: p,
          dimensions: g.metaRawOption.dimensions
        };
      } else
        d = {
          seriesLayoutBy: Lr,
          sourceHeader: 0,
          dimensions: f.dimensions
        };
      return Hh(f.data, d, null);
    });
  }
  function Xh(r) {
    return r === Ce || r === fr;
  }
  var bl = "undefined", bD = typeof Uint32Array === bl ? Array : Uint32Array, xD = typeof Uint16Array === bl ? Array : Uint16Array, Xm = typeof Int32Array === bl ? Array : Int32Array, $m = typeof Float64Array === bl ? Array : Float64Array, qm = {
    float: $m,
    int: Xm,
    // Ordinal data type can be string or int
    ordinal: Array,
    number: Array,
    time: $m
  }, $h;
  function vo(r) {
    return r > 65535 ? bD : xD;
  }
  function ra() {
    return [1 / 0, -1 / 0];
  }
  function TD(r) {
    var t = r.constructor;
    return t === Array ? r.slice() : new t(r);
  }
  function Zm(r, t, e, n, i) {
    var a = qm[e || "float"];
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
  var qh = (
    /** @class */
    function() {
      function r() {
        this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = lt();
      }
      return r.prototype.initData = function(t, e, n) {
        st(tt(t.getItem) && tt(t.count), "Invalid data provider."), this._provider = t, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
        var i = t.getSource(), a = this.defaultDimValueGetter = $h[i.sourceFormat];
        this._dimValueGetter = n || a, this._rawExtent = [];
        var o = Om(i);
        this._dimensions = K(e, function(s) {
          return o && st(s.property != null), {
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
        }, n.set(t, a), this._chunks[a] = new qm[e || "float"](this._rawCount), this._rawExtent[a] = ra(), a;
      }, r.prototype.collectOrdinalMeta = function(t, e) {
        var n = this._chunks[t], i = this._dimensions[t], a = this._rawExtent, o = i.ordinalOffset || 0, s = n.length;
        o === 0 && (a[t] = ra());
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
        st(!this._indices, "appendData can only be called on raw data.");
        var e = this._provider, n = this.count();
        e.appendData(t);
        var i = e.count();
        return e.persistent || (i += n), n < i && this._initDataFromProvider(n, i, !0), [n, i];
      }, r.prototype.appendValues = function(t, e) {
        for (var n = this._chunks, i = this._dimensions, a = i.length, o = this._rawExtent, s = this.count(), l = s + Math.max(t.length, e || 0), u = 0; u < a; u++) {
          var f = i[u];
          Zm(n, u, f.type, l, !0);
        }
        for (var h = [], v = s; v < l; v++)
          for (var c = v - s, d = 0; d < a; d++) {
            var f = i[d], g = $h.arrayRows.call(this, t[c] || h, f.property, c, d);
            n[d][v] = g;
            var p = o[d];
            g < p[0] && (p[0] = g), g > p[1] && (p[1] = g);
          }
        return this._rawCount = this._count = l, {
          start: s,
          end: l
        };
      }, r.prototype._initDataFromProvider = function(t, e, n) {
        for (var i = this._provider, a = this._chunks, o = this._dimensions, s = o.length, l = this._rawExtent, u = K(o, function(_) {
          return _.property;
        }), f = 0; f < s; f++) {
          var h = o[f];
          l[f] || (l[f] = ra()), Zm(a, f, h.type, e, n);
        }
        if (i.fillStorage)
          i.fillStorage(t, e, a, l);
        else
          for (var v = [], c = t; c < e; c++) {
            v = i.getItem(c, v);
            for (var d = 0; d < s; d++) {
              var g = a[d], p = this._dimValueGetter(v, u[d], c, d);
              g[c] = p;
              var m = l[d];
              p < m[0] && (m[0] = p), p > m[1] && (m[1] = p);
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
          var v = this.getRawIndex(f), c = e - a[v], d = Math.abs(c);
          d <= n && ((d < s || d === s && c >= 0 && l < 0) && (s = d, l = c, u = 0), c === l && (o[u++] = f));
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
          var n = vo(this._rawCount);
          t = new n(this.count());
          for (var a = 0; a < t.length; a++)
            t[a] = a;
        }
        return t;
      }, r.prototype.filter = function(t, e) {
        if (!this._count)
          return this;
        for (var n = this.clone(), i = n.count(), a = vo(n._rawCount), o = new a(i), s = [], l = t.length, u = 0, f = t[0], h = n._chunks, v = 0; v < i; v++) {
          var c = void 0, d = n.getRawIndex(v);
          if (l === 0)
            c = e(v);
          else if (l === 1) {
            var g = h[f][d];
            c = e(g, v);
          } else {
            for (var p = 0; p < l; p++)
              s[p] = h[t[p]][d];
            s[p] = v, c = e.apply(null, s);
          }
          c && (o[u++] = d);
        }
        return u < i && (n._indices = o), n._count = u, n._extent = [], n._updateGetRawIdx(), n;
      }, r.prototype.selectRange = function(t) {
        var e = this.clone(), n = e._count;
        if (!n)
          return this;
        var i = It(t), a = i.length;
        if (!a)
          return this;
        var o = e.count(), s = vo(e._rawCount), l = new s(o), u = 0, f = i[0], h = t[f][0], v = t[f][1], c = e._chunks, d = !1;
        if (!e._indices) {
          var g = 0;
          if (a === 1) {
            for (var p = c[i[0]], m = 0; m < n; m++) {
              var _ = p[m];
              (_ >= h && _ <= v || isNaN(_)) && (l[u++] = g), g++;
            }
            d = !0;
          } else if (a === 2) {
            for (var p = c[i[0]], S = c[i[1]], b = t[i[1]][0], C = t[i[1]][1], m = 0; m < n; m++) {
              var _ = p[m], T = S[m];
              (_ >= h && _ <= v || isNaN(_)) && (T >= b && T <= C || isNaN(T)) && (l[u++] = g), g++;
            }
            d = !0;
          }
        }
        if (!d)
          if (a === 1)
            for (var m = 0; m < o; m++) {
              var D = e.getRawIndex(m), _ = c[i[0]][D];
              (_ >= h && _ <= v || isNaN(_)) && (l[u++] = D);
            }
          else
            for (var m = 0; m < o; m++) {
              for (var M = !0, D = e.getRawIndex(m), P = 0; P < a; P++) {
                var E = i[P], _ = c[E][D];
                (_ < t[E][0] || _ > t[E][1]) && (M = !1);
              }
              M && (l[u++] = e.getRawIndex(m));
            }
        return u < o && (e._indices = l), e._count = u, e._extent = [], e._updateGetRawIdx(), e;
      }, r.prototype.map = function(t, e) {
        var n = this.clone(t);
        return this._updateDims(n, t, e), n;
      }, r.prototype.modify = function(t, e) {
        this._updateDims(this, t, e);
      }, r.prototype._updateDims = function(t, e, n) {
        for (var i = t._chunks, a = [], o = e.length, s = t.count(), l = [], u = t._rawExtent, f = 0; f < e.length; f++)
          u[e[f]] = ra();
        for (var h = 0; h < s; h++) {
          for (var v = t.getRawIndex(h), c = 0; c < o; c++)
            l[c] = i[e[c]][v];
          l[o] = h;
          var d = n && n.apply(null, l);
          if (d != null) {
            typeof d != "object" && (a[0] = d, d = a);
            for (var f = 0; f < d.length; f++) {
              var g = e[f], p = d[f], m = u[g], _ = i[g];
              _ && (_[v] = p), p < m[0] && (m[0] = p), p > m[1] && (m[1] = p);
            }
          }
        }
      }, r.prototype.lttbDownSample = function(t, e) {
        var n = this.clone([t], !0), i = n._chunks, a = i[t], o = this.count(), s = 0, l = Math.floor(1 / e), u = this.getRawIndex(0), f, h, v, c = new (vo(this._rawCount))(Math.min((Math.ceil(o / l) + 2) * 2, o));
        c[s++] = u;
        for (var d = 1; d < o - 1; d += l) {
          for (var g = Math.min(d + l, o - 1), p = Math.min(d + l * 2, o), m = (p + g) / 2, _ = 0, S = g; S < p; S++) {
            var b = this.getRawIndex(S), C = a[b];
            isNaN(C) || (_ += C);
          }
          _ /= p - g;
          var T = d, D = Math.min(d + l, o), M = d - 1, P = a[u];
          f = -1, v = T;
          for (var E = -1, A = 0, S = T; S < D; S++) {
            var b = this.getRawIndex(S), C = a[b];
            if (isNaN(C)) {
              A++, E < 0 && (E = b);
              continue;
            }
            h = Math.abs((M - m) * (C - P) - (M - S) * (_ - P)), h > f && (f = h, v = b);
          }
          A > 0 && A < D - T && (c[s++] = Math.min(E, v), v = Math.max(E, v)), c[s++] = v, u = v;
        }
        return c[s++] = this.getRawIndex(o - 1), n._count = s, n._indices = c, n.getRawIndex = this._getRawIdx, n;
      }, r.prototype.downSample = function(t, e, n, i) {
        for (var a = this.clone([t], !0), o = a._chunks, s = [], l = Math.floor(1 / e), u = o[t], f = this.count(), h = a._rawExtent[t] = ra(), v = new (vo(this._rawCount))(Math.ceil(f / l)), c = 0, d = 0; d < f; d += l) {
          l > f - d && (l = f - d, s.length = l);
          for (var g = 0; g < l; g++) {
            var p = this.getRawIndex(d + g);
            s[g] = u[p];
          }
          var m = n(s), _ = this.getRawIndex(Math.min(d + i(s, m) || 0, f - 1));
          u[_] = m, m < h[0] && (h[0] = m), m > h[1] && (h[1] = m), v[c++] = _;
        }
        return a._count = c, a._indices = v, a._updateGetRawIdx(), a;
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
        var e = this._chunks[t], n = ra();
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
        var n = new r(), i = this._chunks, a = t && Sr(t, function(s, l) {
          return s[l] = !0, s;
        }, {});
        if (a)
          for (var o = 0; o < i.length; o++)
            n._chunks[o] = a[o] ? TD(i[o]) : i[o];
        else
          n._chunks = i;
        return this._copyCommonProps(n), e || (n._indices = this._cloneIndices()), n._updateGetRawIdx(), n;
      }, r.prototype._copyCommonProps = function(t) {
        t._count = this._count, t._rawCount = this._rawCount, t._provider = this._provider, t._dimensions = this._dimensions, t._extent = vt(this._extent), t._rawExtent = vt(this._rawExtent);
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
          return wl(e[a], this._dimensions[a]);
        }
        $h = {
          arrayRows: t,
          objectRows: function(e, n, i, a) {
            return wl(e[n], this._dimensions[a]);
          },
          keyedColumns: t,
          original: function(e, n, i, a) {
            var o = e && (e.value == null ? e : e.value);
            return wl(o instanceof Array ? o[a] : o, this._dimensions[a]);
          },
          typedArray: function(e, n, i, a) {
            return e[a];
          }
        };
      }(), r;
    }()
  ), Km = (
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
        if (po(t)) {
          var o = t, s = void 0, l = void 0, u = void 0;
          if (n) {
            var f = e[0];
            f.prepareSource(), u = f.getSource(), s = u.data, l = u.sourceFormat, a = [f._getVersionSign()];
          } else
            s = o.get("data", !0), l = ue(s) ? Xr : Je, a = [];
          var h = this._getSourceMetaRawOption() || {}, v = u && u.metaRawOption || {}, c = ut(h.seriesLayoutBy, v.seriesLayoutBy) || null, d = ut(h.sourceHeader, v.sourceHeader), g = ut(h.dimensions, v.dimensions), p = c !== v.seriesLayoutBy || !!d != !!v.sourceHeader || g;
          i = p ? [Hh(s, {
            seriesLayoutBy: c,
            sourceHeader: d,
            dimensions: g
          }, l)] : [];
        } else {
          var m = t;
          if (n) {
            var _ = this._applyTransform(e);
            i = _.sourceList, a = _.upstreamSignList;
          } else {
            var S = m.get("source", !0);
            i = [Hh(S, this._getSourceMetaRawOption(), null)], a = [];
          }
        }
        st(i && a), this._setLocalSource(i, a);
      }, r.prototype._applyTransform = function(t) {
        var e = this._sourceHost, n = e.get("transform", !0), i = e.get("fromTransformResult", !0);
        if (st(i != null || n != null), i != null) {
          var a = "";
          t.length !== 1 && (a = "When using `fromTransformResult`, there should be only one upstream dataset", Qm(a));
        }
        var o, s = [], l = [];
        return L(t, function(u) {
          u.prepareSource();
          var f = u.getSource(i || 0), h = "";
          i != null && !f && (h = "Can not retrieve result by `fromTransformResult`: " + i, Qm(h)), s.push(f), l.push(u._getVersionSign());
        }), n ? o = SD(n, s, {
          datasetIndex: e.componentIndex
        }) : i != null && (o = [nD(s[0])]), {
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
        st(po(this._sourceHost), "Can only call getDataStore on series source manager.");
        var e = t.makeStoreSchema();
        return this._innerGetDataStore(e.dimensions, t.source, e.hash);
      }, r.prototype._innerGetDataStore = function(t, e, n) {
        var i = 0, a = this._storeList, o = a[i];
        o || (o = a[i] = {});
        var s = o[n];
        if (!s) {
          var l = this._getUpstreamSourceManagers()[0];
          po(this._sourceHost) && l ? s = l._innerGetDataStore(t, e, n) : (s = new qh(), s.initData(new Bm(e, t.length), t)), o[n] = s;
        }
        return s;
      }, r.prototype._getUpstreamSourceManagers = function() {
        var t = this._sourceHost;
        if (po(t)) {
          var e = Oh(t);
          return e ? [e.getSourceManager()] : [];
        } else
          return K(IC(t), function(n) {
            return n.getSourceManager();
          });
      }, r.prototype._getSourceMetaRawOption = function() {
        var t = this._sourceHost, e, n, i;
        if (po(t))
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
  function jm(r) {
    var t = r.option.transform;
    t && ga(r.option.transform);
  }
  function po(r) {
    return r.mainType === "series";
  }
  function Qm(r) {
    throw new Error(r);
  }
  var Jm = "line-height:1";
  function ty(r, t) {
    var e = r.color || "#6e7079", n = r.fontSize || 12, i = r.fontWeight || "400", a = r.color || "#464646", o = r.fontSize || 14, s = r.fontWeight || "900";
    return t === "html" ? {
      // eslint-disable-next-line max-len
      nameStyle: "font-size:" + Re(n + "") + "px;color:" + Re(e) + ";font-weight:" + Re(i + ""),
      // eslint-disable-next-line max-len
      valueStyle: "font-size:" + Re(o + "") + "px;color:" + Re(a) + ";font-weight:" + Re(s + "")
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
  var CD = [0, 10, 20, 30], DD = ["", `
`, `

`, `


`];
  function go(r, t) {
    return t.type = r, t;
  }
  function Zh(r) {
    return r.type === "section";
  }
  function ey(r) {
    return Zh(r) ? MD : AD;
  }
  function ry(r) {
    if (Zh(r)) {
      var t = 0, e = r.blocks.length, n = e > 1 || e > 0 && !r.noHeader;
      return L(r.blocks, function(i) {
        var a = ry(i);
        a >= t && (t = a + +(n && // 0 always can not be readable gap level.
        (!a || Zh(i) && !i.noHeader)));
      }), t;
    }
    return 0;
  }
  function MD(r, t, e, n) {
    var i = t.noHeader, a = PD(ry(t)), o = [], s = t.blocks || [];
    st(!s || X(s)), s = s || [];
    var l = r.orderMode;
    if (t.sortBlocks && l) {
      s = s.slice();
      var u = {
        valueAsc: "asc",
        valueDesc: "desc"
      };
      if (On(u, l)) {
        var f = new cD(u[l], null);
        s.sort(function(d, g) {
          return f.evaluate(d.sortParam, g.sortParam);
        });
      } else
        l === "seriesDesc" && s.reverse();
    }
    L(s, function(d, g) {
      var p = t.valueFormatter, m = ey(d)(
        // Inherit valueFormatter
        p ? W(W({}, r), {
          valueFormatter: p
        }) : r,
        d,
        g > 0 ? a.html : 0,
        n
      );
      m != null && o.push(m);
    });
    var h = r.renderMode === "richText" ? o.join(a.richText) : Kh(o.join(""), i ? e : a.html);
    if (i)
      return h;
    var v = Ph(t.header, "ordinal", r.useUTC), c = ty(n, r.renderMode).nameStyle;
    return r.renderMode === "richText" ? iy(r, v, c) + a.richText + h : Kh('<div style="' + c + ";" + Jm + ';">' + Re(v) + "</div>" + h, e);
  }
  function AD(r, t, e, n) {
    var i = r.renderMode, a = t.noName, o = t.noValue, s = !t.markerType, l = t.name, u = r.useUTC, f = t.valueFormatter || r.valueFormatter || function(b) {
      return b = X(b) ? b : [b], K(b, function(C, T) {
        return Ph(C, X(c) ? c[T] : c, u);
      });
    };
    if (!(a && o)) {
      var h = s ? "" : r.markupStyleCreator.makeTooltipMarker(t.markerType, t.markerColor || "#333", i), v = a ? "" : Ph(l, "ordinal", u), c = t.valueType, d = o ? [] : f(t.value), g = !s || !a, p = !s && a, m = ty(n, i), _ = m.nameStyle, S = m.valueStyle;
      return i === "richText" ? (s ? "" : h) + (a ? "" : iy(r, v, _)) + (o ? "" : ED(r, d, g, p, S)) : Kh((s ? "" : h) + (a ? "" : ID(v, !s, _)) + (o ? "" : LD(d, g, p, S)), e);
    }
  }
  function ny(r, t, e, n, i, a) {
    if (r) {
      var o = ey(r), s = {
        useUTC: i,
        renderMode: e,
        orderMode: n,
        markupStyleCreator: t,
        valueFormatter: r.valueFormatter
      };
      return o(s, r, 0, a);
    }
  }
  function PD(r) {
    return {
      html: CD[r],
      richText: DD[r]
    };
  }
  function Kh(r, t) {
    var e = '<div style="clear:both"></div>', n = "margin: " + t + "px 0 0";
    return '<div style="' + n + ";" + Jm + ';">' + r + e + "</div>";
  }
  function ID(r, t, e) {
    var n = t ? "margin-left:2px" : "";
    return '<span style="' + e + ";" + n + '">' + Re(r) + "</span>";
  }
  function LD(r, t, e, n) {
    var i = e ? "10px" : "20px", a = t ? "float:right;margin-left:" + i : "";
    return r = X(r) ? r : [r], '<span style="' + a + ";" + n + '">' + K(r, function(o) {
      return Re(o);
    }).join("&nbsp;&nbsp;") + "</span>";
  }
  function iy(r, t, e) {
    return r.markupStyleCreator.wrapRichTextStyle(t, e);
  }
  function ED(r, t, e, n, i) {
    var a = [i], o = n ? 10 : 20;
    return e && a.push({
      padding: [0, 0, 0, o],
      align: "right"
    }), r.markupStyleCreator.wrapRichTextStyle(X(t) ? t.join("  ") : t, a);
  }
  function RD(r, t) {
    var e = r.getData().getItemVisual(t, "style"), n = e[r.visualDrawType];
    return oi(n);
  }
  function ay(r, t) {
    var e = r.get("padding");
    return e ?? (t === "richText" ? [8, 10] : 10);
  }
  var jh = (
    /** @class */
    function() {
      function r() {
        this.richTextStyles = {}, this._nextStyleNameId = lp();
      }
      return r.prototype._generateStyleName = function() {
        return "__EC_aUTo_" + this._nextStyleNameId++;
      }, r.prototype.makeTooltipMarker = function(t, e, n) {
        var i = n === "richText" ? this._generateStyleName() : null, a = fm({
          color: e,
          type: t,
          renderMode: n,
          markerId: i
        });
        return Z(a) ? a : (st(i), this.richTextStyles[i] = a.style, a.content);
      }, r.prototype.wrapRichTextStyle = function(t, e) {
        var n = {};
        X(e) ? L(e, function(a) {
          return W(n, a);
        }) : W(n, e);
        var i = this._generateStyleName();
        return this.richTextStyles[i] = n, "{" + i + "|" + t + "}";
      }, r;
    }()
  );
  function OD(r) {
    var t = r.series, e = r.dataIndex, n = r.multipleSeries, i = t.getData(), a = i.mapDimensionsAll("defaultedTooltip"), o = a.length, s = t.getRawValue(e), l = X(s), u = RD(t, e), f, h, v, c;
    if (o > 1 || l && !o) {
      var d = kD(s, t, e, a, u);
      f = d.inlineValues, h = d.inlineValueTypes, v = d.blocks, c = d.inlineValues[0];
    } else if (o) {
      var g = i.getDimensionInfo(a[0]);
      c = f = ea(i, e, a[0]), h = g.type;
    } else
      c = f = l ? s[0] : s;
    var p = Ef(t), m = p && t.name || "", _ = i.getName(e), S = n ? m : _;
    return go("section", {
      header: m,
      // When series name is not specified, do not show a header line with only '-'.
      // This case always happens in tooltip.trigger: 'item'.
      noHeader: n || !p,
      sortParam: c,
      blocks: [go("nameValue", {
        markerType: "item",
        markerColor: u,
        // Do not mix display seriesName and itemName in one tooltip,
        // which might confuses users.
        name: S,
        // name dimension might be auto assigned, where the name might
        // be not readable. So we check trim here.
        noName: !ir(S),
        value: f,
        valueType: h
      })].concat(v || [])
    });
  }
  function kD(r, t, e, n, i) {
    var a = t.getData(), o = Sr(r, function(h, v, c) {
      var d = a.getDimensionInfo(c);
      return h = h || d && d.tooltip !== !1 && d.displayName != null;
    }, !1), s = [], l = [], u = [];
    n.length ? L(n, function(h) {
      f(ea(a, e, h), h);
    }) : L(r, f);
    function f(h, v) {
      var c = a.getDimensionInfo(v);
      !c || c.otherDims.tooltip === !1 || (o ? u.push(go("nameValue", {
        markerType: "subItem",
        markerColor: i,
        name: c.displayName,
        value: h,
        valueType: c.type
      })) : (s.push(h), l.push(c.type)));
    }
    return {
      inlineValues: s,
      inlineValueTypes: l,
      blocks: u
    };
  }
  var pn = kt();
  function xl(r, t) {
    return r.getName(t) || r.getId(t);
  }
  var ND = "__universalTransitionEnabled", De = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e._selectedDataIndicesMap = {}, e;
      }
      return t.prototype.init = function(e, n, i) {
        this.seriesIndex = this.componentIndex, this.dataTask = co({
          count: FD,
          reset: zD
        }), this.dataTask.context = {
          model: this
        }, this.mergeDefaultAndTheme(e, i);
        var a = pn(this).sourceManager = new Km(this);
        a.prepareSource();
        var o = this.getInitialData(e, i);
        sy(o, this), this.dataTask.context.data = o, st(o, "getInitialData returned invalid data."), pn(this).dataBeforeProcessed = o, oy(this), this._initSelectedMapFromData(o);
      }, t.prototype.mergeDefaultAndTheme = function(e, n) {
        var i = so(this), a = i ? gl(e) : {}, o = this.subType;
        pt.hasClass(o) && (o += "Series"), yt(e, n.getTheme().get(this.subType)), yt(e, this.getDefaultOption()), Lf(e, "label", ["show"]), this.fillDataTextStyle(e.data), i && Qi(e, a, i);
      }, t.prototype.mergeOption = function(e, n) {
        e = yt(this.option, e, !0), this.fillDataTextStyle(e.data);
        var i = so(this);
        i && Qi(this.option, e, i);
        var a = pn(this).sourceManager;
        a.dirty(), a.prepareSource();
        var o = this.getInitialData(e, n);
        sy(o, this), this.dataTask.dirty(), this.dataTask.context.data = o, pn(this).dataBeforeProcessed = o, oy(this), this._initSelectedMapFromData(o);
      }, t.prototype.fillDataTextStyle = function(e) {
        if (e && !ue(e))
          for (var n = ["show"], i = 0; i < e.length; i++)
            e[i] && e[i].label && Lf(e[i], "label", n);
      }, t.prototype.getInitialData = function(e, n) {
      }, t.prototype.appendData = function(e) {
        var n = this.getRawData();
        n.appendData(e.data);
      }, t.prototype.getData = function(e) {
        var n = Qh(this);
        if (n) {
          var i = n.context.data;
          return e == null ? i : i.getLinkedData(e);
        } else
          return pn(this).data;
      }, t.prototype.getAllData = function() {
        var e = this.getData();
        return e && e.getLinkedDataAll ? e.getLinkedDataAll() : [{
          data: e
        }];
      }, t.prototype.setData = function(e) {
        var n = Qh(this);
        if (n) {
          var i = n.context;
          i.outputData = e, n !== this.dataTask && (i.data = e);
        }
        pn(this).data = e;
      }, t.prototype.getEncode = function() {
        var e = this.get("encode", !0);
        if (e)
          return lt(e);
      }, t.prototype.getSourceManager = function() {
        return pn(this).sourceManager;
      }, t.prototype.getSource = function() {
        return this.getSourceManager().getSource();
      }, t.prototype.getRawData = function() {
        return pn(this).dataBeforeProcessed;
      }, t.prototype.getColorBy = function() {
        var e = this.get("colorBy");
        return e || "series";
      }, t.prototype.isColorBySeries = function() {
        return this.getColorBy() === "series";
      }, t.prototype.getBaseAxis = function() {
        var e = this.coordinateSystem;
        return e && e.getBaseAxis && e.getBaseAxis();
      }, t.prototype.formatTooltip = function(e, n, i) {
        return OD({
          series: this,
          dataIndex: e,
          multipleSeries: n
        });
      }, t.prototype.isAnimationEnabled = function() {
        var e = this.ecModel;
        if (O.node && !(e && e.ssr))
          return !1;
        var n = this.getShallow("animation");
        return n && this.getData().count() > this.getShallow("animationThreshold") && (n = !1), !!n;
      }, t.prototype.restoreData = function() {
        this.dataTask.dirty();
      }, t.prototype.getColorFromPalette = function(e, n, i) {
        var a = this.ecModel, o = kh.prototype.getColorFromPalette.call(this, e, n, i);
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
            var l = e[s], u = xl(o, l);
            i[u] = !1, this._selectedDataIndicesMap[u] = -1;
          }
        }
      }, t.prototype.toggleSelect = function(e, n) {
        for (var i = [], a = 0; a < e.length; a++)
          i[0] = e[a], this.isSelected(e[a], n) ? this.unselect(i, n) : this.select(i, n);
      }, t.prototype.getSelectedDataIndices = function() {
        if (this.option.selectedMap === "all")
          return [].slice.call(this.getData().getIndices());
        for (var e = this._selectedDataIndicesMap, n = It(e), i = [], a = 0; a < n.length; a++) {
          var o = e[n[a]];
          o >= 0 && i.push(o);
        }
        return i;
      }, t.prototype.isSelected = function(e, n) {
        var i = this.option.selectedMap;
        if (!i)
          return !1;
        var a = this.getData(n);
        return (i === "all" || i[xl(a, e)]) && !a.getItemModel(e).get(["select", "disabled"]);
      }, t.prototype.isUniversalTransitionEnabled = function() {
        if (this[ND])
          return !0;
        var e = this.option.universalTransition;
        return e ? e === !0 ? !0 : e && e.enabled : !1;
      }, t.prototype._innerSelect = function(e, n) {
        var i, a, o = this.option, s = o.selectedMode, l = n.length;
        if (!(!s || !l)) {
          if (s === "series")
            o.selectedMap = "all";
          else if (s === "multiple") {
            j(o.selectedMap) || (o.selectedMap = {});
            for (var u = o.selectedMap, f = 0; f < l; f++) {
              var h = n[f], v = xl(e, h);
              u[v] = !0, this._selectedDataIndicesMap[v] = e.getRawIndex(h);
            }
          } else if (s === "single" || s === !0) {
            var c = n[l - 1], v = xl(e, c);
            o.selectedMap = (i = {}, i[v] = !0, i), this._selectedDataIndicesMap = (a = {}, a[v] = e.getRawIndex(c), a);
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
        return pt.registerClass(e);
      }, t.protoInitialize = function() {
        var e = t.prototype;
        e.type = "series.__base__", e.seriesIndex = 0, e.ignoreStyleOnData = !1, e.hasSymbolVisual = !1, e.defaultSymbol = "circle", e.visualStyleAccessPath = "itemStyle", e.visualDrawType = "fill";
      }(), t;
    }(pt)
  );
  He(De, fD), He(De, kh), wp(De, pt);
  function oy(r) {
    var t = r.name;
    Ef(r) || (r.name = BD(r) || t);
  }
  function BD(r) {
    var t = r.getRawData(), e = t.mapDimensionsAll("seriesName"), n = [];
    return L(e, function(i) {
      var a = t.getDimensionInfo(i);
      a.displayName && n.push(a.displayName);
    }), n.join(" ");
  }
  function FD(r) {
    return r.model.getRawData().count();
  }
  function zD(r) {
    var t = r.model;
    return t.setData(t.getRawData().cloneShallow()), VD;
  }
  function VD(r, t) {
    t.outputData && r.end > t.outputData.count() && t.model.getRawData().cloneShallow(t.outputData);
  }
  function sy(r, t) {
    L(ad(r.CHANGABLE_METHODS, r.DOWNSAMPLE_METHODS), function(e) {
      r.wrapMethod(e, Ot(GD, t));
    });
  }
  function GD(r, t) {
    var e = Qh(r);
    return e && e.setOutputEnd((t || this).count()), t;
  }
  function Qh(r) {
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
  var de = (
    /** @class */
    function() {
      function r() {
        this.group = new Zt(), this.uid = ol("viewComponent");
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
  kf(de), Cs(de);
  function Jh() {
    var r = kt();
    return function(t) {
      var e = r(t), n = t.pipelineContext, i = !!e.large, a = !!e.progressiveRender, o = e.large = !!(n && n.large), s = e.progressiveRender = !!(n && n.progressiveRender);
      return (i !== o || a !== s) && "reset";
    };
  }
  var ly = kt(), HD = Jh(), pe = (
    /** @class */
    function() {
      function r() {
        this.group = new Zt(), this.uid = ol("viewChart"), this.renderTask = co({
          plan: WD,
          reset: UD
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
          re("Unknown dataType " + i.dataType);
          return;
        }
        fy(a, i, "emphasis");
      }, r.prototype.downplay = function(t, e, n, i) {
        var a = t.getData(i && i.dataType);
        if (!a) {
          re("Unknown dataType " + i.dataType);
          return;
        }
        fy(a, i, "normal");
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
        il(this.group, t);
      }, r.markUpdateMethod = function(t, e) {
        ly(t).updateMethod = e;
      }, r.protoInitialize = function() {
        var t = r.prototype;
        t.type = "chart";
      }(), r;
    }()
  );
  function uy(r, t, e) {
    r && Ui(r) && (t === "emphasis" ? Fs : zs)(r, e);
  }
  function fy(r, t, e) {
    var n = Xn(r, t), i = t && t.highlightKey != null ? vT(t.highlightKey) : null;
    n != null ? L(ce(n), function(a) {
      uy(r.getItemGraphicEl(a), e, i);
    }) : r.eachItemGraphicEl(function(a) {
      uy(a, e, i);
    });
  }
  kf(pe, ["dispose"]), Cs(pe);
  function WD(r) {
    return HD(r.model);
  }
  function UD(r) {
    var t = r.model, e = r.ecModel, n = r.api, i = r.payload, a = t.pipelineContext.progressiveRender, o = r.view, s = i && ly(i).updateMethod, l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
    return l !== "render" && o[l](t, e, n, i), YD[l];
  }
  var YD = {
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
  }, Tl = "\0__throttleOriginMethod", hy = "\0__throttleRate", cy = "\0__throttleType";
  function Cl(r, t, e) {
    var n, i = 0, a = 0, o = null, s, l, u, f;
    t = t || 0;
    function h() {
      a = (/* @__PURE__ */ new Date()).getTime(), o = null, r.apply(l, u || []);
    }
    var v = function() {
      for (var c = [], d = 0; d < arguments.length; d++)
        c[d] = arguments[d];
      n = (/* @__PURE__ */ new Date()).getTime(), l = this, u = c;
      var g = f || t, p = f || e;
      f = null, s = n - (p ? i : a) - g, clearTimeout(o), p ? o = setTimeout(h, g) : s >= 0 ? h() : o = setTimeout(h, -s), i = n;
    };
    return v.clear = function() {
      o && (clearTimeout(o), o = null);
    }, v.debounceNextCall = function(c) {
      f = c;
    }, v;
  }
  function vy(r, t, e, n) {
    var i = r[t];
    if (i) {
      var a = i[Tl] || i, o = i[cy], s = i[hy];
      if (s !== e || o !== n) {
        if (e == null || !n)
          return r[t] = a;
        i = r[t] = Cl(a, e, n === "debounce"), i[Tl] = a, i[cy] = n, i[hy] = e;
      }
      return i;
    }
  }
  function tc(r, t) {
    var e = r[t];
    e && e[Tl] && (e.clear && e.clear(), r[t] = e[Tl]);
  }
  var dy = kt(), py = {
    itemStyle: za(Zg, !0),
    lineStyle: za(qg, !0)
  }, XD = {
    lineStyle: "stroke",
    itemStyle: "fill"
  };
  function gy(r, t) {
    var e = r.visualStyleMapper || py[t];
    return e || (console.warn("Unknown style type '" + t + "'."), py.itemStyle);
  }
  function yy(r, t) {
    var e = r.visualDrawType || XD[t];
    return e || (console.warn("Unknown style type '" + t + "'."), "fill");
  }
  var $D = {
    createOnAllSeries: !0,
    performRawSeries: !0,
    reset: function(r, t) {
      var e = r.getData(), n = r.visualStyleAccessPath || "itemStyle", i = r.getModel(n), a = gy(r, n), o = a(i), s = i.getShallow("decal");
      s && (e.setVisual("decal", s), s.dirty = !0);
      var l = yy(r, n), u = o[l], f = tt(u) ? u : null, h = o.fill === "auto" || o.stroke === "auto";
      if (!o[l] || f || h) {
        var v = r.getColorFromPalette(
          // TODO series count changed.
          r.name,
          null,
          t.getSeriesCount()
        );
        o[l] || (o[l] = v, e.setVisual("colorFromPalette", !0)), o.fill = o.fill === "auto" || tt(o.fill) ? v : o.fill, o.stroke = o.stroke === "auto" || tt(o.stroke) ? v : o.stroke;
      }
      if (e.setVisual("style", o), e.setVisual("drawType", l), !t.isSeriesFiltered(r) && f)
        return e.setVisual("colorFromPalette", !1), {
          dataEach: function(c, d) {
            var g = r.getDataParams(d), p = W({}, o);
            p[l] = f(g), c.setItemVisual(d, "style", p);
          }
        };
    }
  }, mo = new Rt(), qD = {
    createOnAllSeries: !0,
    performRawSeries: !0,
    reset: function(r, t) {
      if (!(r.ignoreStyleOnData || t.isSeriesFiltered(r))) {
        var e = r.getData(), n = r.visualStyleAccessPath || "itemStyle", i = gy(r, n), a = e.getVisual("drawType");
        return {
          dataEach: e.hasItemOption ? function(o, s) {
            var l = o.getRawDataItem(s);
            if (l && l[n]) {
              mo.option = l[n];
              var u = i(mo), f = o.ensureUniqueItemVisual(s, "style");
              W(f, u), mo.option.decal && (o.setItemVisual(s, "decal", mo.option.decal), mo.option.decal.dirty = !0), a in u && o.setItemVisual(s, "colorFromPalette", !1);
            }
          } : null
        };
      }
    }
  }, ZD = {
    performRawSeries: !0,
    overallReset: function(r) {
      var t = lt();
      r.eachSeries(function(e) {
        var n = e.getColorBy();
        if (!e.isColorBySeries()) {
          var i = e.type + "-" + n, a = t.get(i);
          a || (a = {}, t.set(i, a)), dy(e).scope = a;
        }
      }), r.eachSeries(function(e) {
        if (!(e.isColorBySeries() || r.isSeriesFiltered(e))) {
          var n = e.getRawData(), i = {}, a = e.getData(), o = dy(e).scope, s = e.visualStyleAccessPath || "itemStyle", l = yy(e, s);
          a.each(function(u) {
            var f = a.getRawIndex(u);
            i[f] = u;
          }), n.each(function(u) {
            var f = i[u], h = a.getItemVisual(f, "colorFromPalette");
            if (h) {
              var v = a.ensureUniqueItemVisual(f, "style"), c = n.getName(u) || u + "", d = n.count();
              v[l] = e.getColorFromPalette(c, o, d);
            }
          });
        }
      });
    }
  }, Dl = Math.PI;
  function KD(r, t) {
    t = t || {}, St(t, {
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
    var e = new Zt(), n = new Vt({
      style: {
        fill: t.maskColor
      },
      zlevel: t.zlevel,
      z: 1e4
    });
    e.add(n);
    var i = new $t({
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
    }), a = new Vt({
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
    return t.showSpinner && (o = new Ka({
      shape: {
        startAngle: -Dl / 2,
        endAngle: -Dl / 2 + 0.1,
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
      endAngle: Dl * 3 / 2
    }).start("circularInOut"), o.animateShape(!0).when(1e3, {
      startAngle: Dl * 3 / 2
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
  var _y = (
    /** @class */
    function() {
      function r(t, e, n, i) {
        this._stageTaskMap = lt(), this.ecInstance = t, this.api = e, n = this._dataProcessorHandlers = n.slice(), i = this._visualHandlers = i.slice(), this._allHandlers = n.concat(i);
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
        var e = this, n = e._pipelineMap = lt();
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
        L(this._allHandlers, function(i) {
          var a = t.get(i.uid) || t.set(i.uid, {}), o = "";
          o = '"reset" and "overallReset" must not be both specified.', st(!(i.reset && i.overallReset), o), i.reset && this._createSeriesStageTask(i, a, e, n), i.overallReset && this._createOverallStageTask(i, a, e, n);
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
        L(t, function(l, u) {
          if (!(i.visualType && i.visualType !== l.visualType)) {
            var f = o._stageTaskMap.get(l.uid), h = f.seriesTaskMap, v = f.overallTask;
            if (v) {
              var c, d = v.agentStubMap;
              d.each(function(p) {
                s(i, p) && (p.dirty(), c = !0);
              }), c && v.dirty(), o.updatePayload(v, n);
              var g = o.getPerformArgs(v, i.block);
              d.each(function(p) {
                p.perform(g);
              }), v.perform(g) && (a = !0);
            } else
              h && h.each(function(p, m) {
                s(i, p) && p.dirty();
                var _ = o.getPerformArgs(p, i.block);
                _.skip = !l.performRawSeries && e.isSeriesFiltered(p.context.model), o.updatePayload(p, n), p.perform(_) && (a = !0);
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
        var a = this, o = e.seriesTaskMap, s = e.seriesTaskMap = lt(), l = t.seriesType, u = t.getTargetSeries;
        t.createOnAllSeries ? n.eachRawSeries(f) : l ? n.eachRawSeriesByType(l, f) : u && u(n, i).each(f);
        function f(h) {
          var v = h.uid, c = s.set(v, o && o.get(v) || co({
            plan: eM,
            reset: rM,
            count: iM
          }));
          c.context = {
            model: h,
            ecModel: n,
            api: i,
            // PENDING: `useClearVisual` not used?
            useClearVisual: t.isVisual && !t.isLayout,
            plan: t.plan,
            reset: t.reset,
            scheduler: a
          }, a._pipe(h, c);
        }
      }, r.prototype._createOverallStageTask = function(t, e, n, i) {
        var a = this, o = e.overallTask = e.overallTask || co({
          reset: jD
        });
        o.context = {
          ecModel: n,
          api: i,
          overallReset: t.overallReset,
          scheduler: a
        };
        var s = o.agentStubMap, l = o.agentStubMap = lt(), u = t.seriesType, f = t.getTargetSeries, h = !0, v = !1, c = "";
        c = '"createOnAllSeries" is not supported for "overallReset", because it will block all streams.', st(!t.createOnAllSeries, c), u ? n.eachRawSeriesByType(u, d) : f ? f(n, i).each(d) : (h = !1, L(n.getSeries(), d));
        function d(g) {
          var p = g.uid, m = l.set(p, s && s.get(p) || // When the result of `getTargetSeries` changed, the overallTask
          // should be set as dirty and re-performed.
          (v = !0, co({
            reset: QD,
            onDirty: tM
          })));
          m.context = {
            model: g,
            overallProgress: h
            // FIXME:TS never used, so comment it
            // modifyOutputEnd: modifyOutputEnd
          }, m.agent = o, m.__block = h, a._pipe(g, m);
        }
        v && o.dirty();
      }, r.prototype._pipe = function(t, e) {
        var n = t.uid, i = this._pipelineMap.get(n);
        !i.head && (i.head = e), i.tail && i.tail.pipe(e), i.tail = e, e.__idxInPipeline = i.count++, e.__pipeline = i;
      }, r.wrapStageHandler = function(t, e) {
        return tt(t) && (t = {
          overallReset: t,
          seriesType: aM(t)
        }), t.uid = ol("stageHandler"), e && (t.visualType = e), t;
      }, r;
    }()
  );
  function jD(r) {
    r.overallReset(r.ecModel, r.api, r.payload);
  }
  function QD(r) {
    return r.overallProgress && JD;
  }
  function JD() {
    this.agent.dirty(), this.getDownstream().dirty();
  }
  function tM() {
    this.agent && this.agent.dirty();
  }
  function eM(r) {
    return r.plan ? r.plan(r.model, r.ecModel, r.api, r.payload) : null;
  }
  function rM(r) {
    r.useClearVisual && r.data.clearAllVisual();
    var t = r.resetDefines = ce(r.reset(r.model, r.ecModel, r.api, r.payload));
    return t.length > 1 ? K(t, function(e, n) {
      return Sy(n);
    }) : nM;
  }
  var nM = Sy(0);
  function Sy(r) {
    return function(t, e) {
      var n = e.data, i = e.resetDefines[r];
      if (i && i.dataEach)
        for (var a = t.start; a < t.end; a++)
          i.dataEach(n, a);
      else
        i && i.progress && i.progress(t, n);
    };
  }
  function iM(r) {
    return r.data.count();
  }
  function aM(r) {
    Ml = null;
    try {
      r(yo, wy);
    } catch {
    }
    return Ml;
  }
  var yo = {}, wy = {}, Ml;
  by(yo, Bh), by(wy, xm), yo.eachSeriesByType = yo.eachRawSeriesByType = function(r) {
    Ml = r;
  }, yo.eachComponent = function(r) {
    r.mainType === "series" && r.subType && (Ml = r.subType);
  };
  function by(r, t) {
    for (var e in t.prototype)
      r[e] = fe;
  }
  var xy = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"], oM = {
    color: xy,
    colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], xy]
  }, ge = "#B9B8CE", Ty = "#100C2A", Al = function() {
    return {
      axisLine: {
        lineStyle: {
          color: ge
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
  }, Cy = ["#4992ff", "#7cffb2", "#fddd60", "#ff6e76", "#58d9f9", "#05c091", "#ff8a45", "#8d48e3", "#dd79ff"], Dy = {
    darkMode: !0,
    color: Cy,
    backgroundColor: Ty,
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
        color: ge
      }
    },
    textStyle: {
      color: ge
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
        borderColor: ge
      }
    },
    dataZoom: {
      borderColor: "#71708A",
      textStyle: {
        color: ge
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
        color: ge
      }
    },
    timeline: {
      lineStyle: {
        color: ge
      },
      label: {
        color: ge
      },
      controlStyle: {
        color: ge,
        borderColor: ge
      }
    },
    calendar: {
      itemStyle: {
        color: Ty
      },
      dayLabel: {
        color: ge
      },
      monthLabel: {
        color: ge
      },
      yearLabel: {
        color: ge
      }
    },
    timeAxis: Al(),
    logAxis: Al(),
    valueAxis: Al(),
    categoryAxis: Al(),
    line: {
      symbol: "circle"
    },
    graph: {
      color: Cy
    },
    gauge: {
      title: {
        color: ge
      },
      axisLine: {
        lineStyle: {
          color: [[1, "rgba(207,212,219,0.2)"]]
        }
      },
      axisLabel: {
        color: ge
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
  Dy.categoryAxis.splitLine.show = !1;
  var sM = (
    /** @class */
    function() {
      function r() {
      }
      return r.prototype.normalizeQuery = function(t) {
        var e = {}, n = {}, i = {};
        if (Z(t)) {
          var a = Cr(t);
          e.mainType = a.main || null, e.subType = a.sub || null;
        } else {
          var o = ["Index", "Name", "Id"], s = {
            name: 1,
            dataIndex: 1,
            dataType: 1
          };
          L(t, function(l, u) {
            for (var f = !1, h = 0; h < o.length; h++) {
              var v = o[h], c = u.lastIndexOf(v);
              if (c > 0 && c === u.length - v.length) {
                var d = u.slice(0, c);
                d !== "data" && (e.mainType = d, e[v.toLowerCase()] = l, f = !0);
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
        function f(h, v, c, d) {
          return h[c] == null || v[d || c] === h[c];
        }
      }, r.prototype.afterTrigger = function() {
        this.eventInfo = null;
      }, r;
    }()
  ), ec = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"], My = ec.concat(["symbolKeepAspect"]), lM = {
    createOnAllSeries: !0,
    // For legend.
    performRawSeries: !0,
    reset: function(r, t) {
      var e = r.getData();
      if (r.legendIcon && e.setVisual("legendIcon", r.legendIcon), !r.hasSymbolVisual)
        return;
      for (var n = {}, i = {}, a = !1, o = 0; o < ec.length; o++) {
        var s = ec[o], l = r.get(s);
        tt(l) ? (a = !0, i[s] = l) : n[s] = l;
      }
      if (n.symbol = n.symbol || r.defaultSymbol, e.setVisual(W({
        legendIcon: r.legendIcon || n.symbol,
        symbolKeepAspect: r.get("symbolKeepAspect")
      }, n)), t.isSeriesFiltered(r))
        return;
      var u = It(i);
      function f(h, v) {
        for (var c = r.getRawValue(v), d = r.getDataParams(v), g = 0; g < u.length; g++) {
          var p = u[g];
          h.setItemVisual(v, p, i[p](c, d));
        }
      }
      return {
        dataEach: a ? f : null
      };
    }
  }, uM = {
    createOnAllSeries: !0,
    // For legend.
    performRawSeries: !0,
    reset: function(r, t) {
      if (!r.hasSymbolVisual || t.isSeriesFiltered(r))
        return;
      var e = r.getData();
      function n(i, a) {
        for (var o = i.getItemModel(a), s = 0; s < My.length; s++) {
          var l = My[s], u = o.getShallow(l, !0);
          u != null && i.setItemVisual(a, l, u);
        }
      }
      return {
        dataEach: e.hasItemOption ? n : null
      };
    }
  };
  function fM(r, t, e) {
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
  function hM(r, t) {
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
  function cM(r, t) {
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
    L([[r + "ToggleSelect", "toggleSelect"], [r + "Select", "select"], [r + "UnSelect", "unselect"]], function(n) {
      t(n[0], function(i, a, o) {
        i = W({}, i), Wt(i.type, n[1]), o.dispatchAction(W(i, {
          type: n[1],
          seriesIndex: e(a, i)
        }));
      });
    });
  }
  function na(r, t, e, n, i) {
    var a = r + t;
    e.isSilent(a) || (sr("event " + a + " is deprecated."), n.eachComponent({
      mainType: "series",
      subType: "pie"
    }, function(o) {
      for (var s = o.seriesIndex, l = o.option.selectedMap, u = i.selected, f = 0; f < u.length; f++)
        if (u[f].seriesIndex === s) {
          var h = o.getData(), v = Xn(h, i.fromActionPayload);
          e.trigger(a, {
            type: a,
            seriesId: o.id,
            name: X(v) ? h.getName(v[0]) : h.getName(v),
            selected: Z(l) ? l : W({}, l)
          });
        }
    }));
  }
  function vM(r, t, e) {
    r.on("selectchanged", function(n) {
      var i = e.getModel();
      n.isFromClick ? (na("map", "selectchanged", t, i, n), na("pie", "selectchanged", t, i, n)) : n.fromAction === "select" ? (na("map", "selected", t, i, n), na("pie", "selected", t, i, n)) : n.fromAction === "unselect" && (na("map", "unselected", t, i, n), na("pie", "unselected", t, i, n));
    });
  }
  function _o(r, t, e) {
    for (var n; r && !(t(r) && (n = r, e)); )
      r = r.__hostTarget || r.parent;
    return n;
  }
  var dM = Math.round(Math.random() * 9), pM = typeof Object.defineProperty == "function", gM = function() {
    function r() {
      this._id = "__ec_inner_" + dM++;
    }
    return r.prototype.get = function(t) {
      return this._guard(t)[this._id];
    }, r.prototype.set = function(t, e) {
      var n = this._guard(t);
      return pM ? Object.defineProperty(n, this._id, {
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
  }(), mM = xt.extend({
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
  }), yM = xt.extend({
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
  }), _M = xt.extend({
    type: "pin",
    shape: {
      // x, y on the cusp
      x: 0,
      y: 0,
      width: 0,
      height: 0
    },
    buildPath: function(r, t) {
      var e = t.x, n = t.y, i = t.width / 5 * 3, a = Math.max(i, t.height), o = i / 2, s = o * o / (a - o), l = n - a + o + s, u = Math.asin(s / o), f = Math.cos(u) * o, h = Math.sin(u), v = Math.cos(u), c = o * 0.6, d = o * 0.7;
      r.moveTo(e - f, l + s), r.arc(e, l, o, Math.PI - u, Math.PI * 2 + u), r.bezierCurveTo(e + f - h * c, l + s + v * c, e, n - d, e, n), r.bezierCurveTo(e, n - d, e - f + h * c, l + s + v * c, e - f, l + s), r.closePath();
    }
  }), SM = xt.extend({
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
  }), wM = {
    line: Ur,
    rect: Vt,
    roundRect: Vt,
    square: Vt,
    circle: $a,
    diamond: yM,
    pin: _M,
    arrow: SM,
    triangle: mM
  }, bM = {
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
  }, rc = {};
  L(wM, function(r, t) {
    rc[t] = new r();
  });
  var xM = xt.extend({
    type: "symbol",
    shape: {
      symbolType: "",
      x: 0,
      y: 0,
      width: 0,
      height: 0
    },
    calculateTextPosition: function(r, t, e) {
      var n = _s(r, t, e), i = this.shape;
      return i && i.symbolType === "pin" && t.position === "inside" && (n.y = e.y + e.height * 0.4), n;
    },
    buildPath: function(r, t, e) {
      var n = t.symbolType;
      if (n !== "none") {
        var i = rc[n];
        i || (n = "rect", i = rc[n]), bM[n](t.x, t.y, t.width, t.height, i.shape), i.buildPath(r, i.shape, e);
      }
    }
  });
  function TM(r, t) {
    if (this.type !== "image") {
      var e = this.style;
      this.__isEmptyBrush ? (e.stroke = r, e.fill = t || "#fff", e.lineWidth = 2) : this.shape.symbolType === "line" ? e.stroke = r : e.fill = r, this.markRedraw();
    }
  }
  function hi(r, t, e, n, i, a, o) {
    var s = r.indexOf("empty") === 0;
    s && (r = r.substr(5, 1).toLowerCase() + r.substr(6));
    var l;
    return r.indexOf("image://") === 0 ? l = ch(r.slice(8), new dt(t, e, n, i), o ? "center" : "cover") : r.indexOf("path://") === 0 ? l = rl(r.slice(7), {}, new dt(t, e, n, i), o ? "center" : "cover") : l = new xM({
      shape: {
        symbolType: r,
        x: t,
        y: e,
        width: n,
        height: i
      }
    }), l.__isEmptyBrush = s, l.setColor = TM, a && l.setColor(a), l;
  }
  function CM(r) {
    return X(r) || (r = [+r, +r]), [r[0] || 0, r[1] || 0];
  }
  function Ay(r, t) {
    if (r != null)
      return X(r) || (r = [r, r]), [Lt(r[0], t[0]) || 0, Lt(ut(r[1], r[0]), t[1]) || 0];
  }
  function ci(r) {
    return isFinite(r);
  }
  function DM(r, t, e) {
    var n = t.x == null ? 0 : t.x, i = t.x2 == null ? 1 : t.x2, a = t.y == null ? 0 : t.y, o = t.y2 == null ? 0 : t.y2;
    t.global || (n = n * e.width + e.x, i = i * e.width + e.x, a = a * e.height + e.y, o = o * e.height + e.y), n = ci(n) ? n : 0, i = ci(i) ? i : 1, a = ci(a) ? a : 0, o = ci(o) ? o : 0;
    var s = r.createLinearGradient(n, a, i, o);
    return s;
  }
  function MM(r, t, e) {
    var n = e.width, i = e.height, a = Math.min(n, i), o = t.x == null ? 0.5 : t.x, s = t.y == null ? 0.5 : t.y, l = t.r == null ? 0.5 : t.r;
    t.global || (o = o * n + e.x, s = s * i + e.y, l = l * a), o = ci(o) ? o : 0.5, s = ci(s) ? s : 0.5, l = l >= 0 && ci(l) ? l : 0.5;
    var u = r.createRadialGradient(o, s, 0, o, s, l);
    return u;
  }
  function nc(r, t, e) {
    for (var n = t.type === "radial" ? MM(r, t, e) : DM(r, t, e), i = t.colorStops, a = 0; a < i.length; a++)
      n.addColorStop(i[a].offset, i[a].color);
    return n;
  }
  function AM(r, t) {
    if (r === t || !r && !t)
      return !1;
    if (!r || !t || r.length !== t.length)
      return !0;
    for (var e = 0; e < r.length; e++)
      if (r[e] !== t[e])
        return !0;
    return !1;
  }
  function Pl(r) {
    return parseInt(r, 10);
  }
  function Il(r, t, e) {
    var n = ["width", "height"][t], i = ["clientWidth", "clientHeight"][t], a = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
    if (e[n] != null && e[n] !== "auto")
      return parseFloat(e[n]);
    var s = document.defaultView.getComputedStyle(r);
    return (r[i] || Pl(s[n]) || Pl(r.style[n])) - (Pl(s[a]) || 0) - (Pl(s[o]) || 0) | 0;
  }
  function PM(r, t) {
    return !r || r === "solid" || !(t > 0) ? null : r === "dashed" ? [4 * t, 2 * t] : r === "dotted" ? [t] : Mt(r) ? [r] : X(r) ? r : null;
  }
  function Py(r) {
    var t = r.style, e = t.lineDash && t.lineWidth > 0 && PM(t.lineDash, t.lineWidth), n = t.lineDashOffset;
    if (e) {
      var i = t.strokeNoScale && r.getLineScale ? r.getLineScale() : 1;
      i && i !== 1 && (e = K(e, function(a) {
        return a / i;
      }), n /= i);
    }
    return [e, n];
  }
  var IM = new cn(!0);
  function Ll(r) {
    var t = r.stroke;
    return !(t == null || t === "none" || !(r.lineWidth > 0));
  }
  function Iy(r) {
    return typeof r == "string" && r !== "none";
  }
  function El(r) {
    var t = r.fill;
    return t != null && t !== "none";
  }
  function Ly(r, t) {
    if (t.fillOpacity != null && t.fillOpacity !== 1) {
      var e = r.globalAlpha;
      r.globalAlpha = t.fillOpacity * t.opacity, r.fill(), r.globalAlpha = e;
    } else
      r.fill();
  }
  function Ey(r, t) {
    if (t.strokeOpacity != null && t.strokeOpacity !== 1) {
      var e = r.globalAlpha;
      r.globalAlpha = t.strokeOpacity * t.opacity, r.stroke(), r.globalAlpha = e;
    } else
      r.stroke();
  }
  function ic(r, t, e) {
    var n = bp(t.image, t.__image, e);
    if (Ds(n)) {
      var i = r.createPattern(n, t.repeat || "repeat");
      if (typeof DOMMatrix == "function" && i && i.setTransform) {
        var a = new DOMMatrix();
        a.translateSelf(t.x || 0, t.y || 0), a.rotateSelf(0, 0, (t.rotation || 0) * od), a.scaleSelf(t.scaleX || 1, t.scaleY || 1), i.setTransform(a);
      }
      return i;
    }
  }
  function LM(r, t, e, n) {
    var i, a = Ll(e), o = El(e), s = e.strokePercent, l = s < 1, u = !t.path;
    (!t.silent || l) && u && t.createPathProxy();
    var f = t.path || IM, h = t.__dirty;
    if (!n) {
      var v = e.fill, c = e.stroke, d = o && !!v.colorStops, g = a && !!c.colorStops, p = o && !!v.image, m = a && !!c.image, _ = void 0, S = void 0, b = void 0, C = void 0, T = void 0;
      (d || g) && (T = t.getBoundingRect()), d && (_ = h ? nc(r, v, T) : t.__canvasFillGradient, t.__canvasFillGradient = _), g && (S = h ? nc(r, c, T) : t.__canvasStrokeGradient, t.__canvasStrokeGradient = S), p && (b = h || !t.__canvasFillPattern ? ic(r, v, t) : t.__canvasFillPattern, t.__canvasFillPattern = b), m && (C = h || !t.__canvasStrokePattern ? ic(r, c, t) : t.__canvasStrokePattern, t.__canvasStrokePattern = b), d ? r.fillStyle = _ : p && (b ? r.fillStyle = b : o = !1), g ? r.strokeStyle = S : m && (C ? r.strokeStyle = C : a = !1);
    }
    var D = t.getGlobalScale();
    f.setScale(D[0], D[1], t.segmentIgnoreThreshold);
    var M, P;
    r.setLineDash && e.lineDash && (i = Py(t), M = i[0], P = i[1]);
    var E = !0;
    (u || h & Ri) && (f.setDPR(r.dpr), l ? f.setContext(null) : (f.setContext(r), E = !1), f.reset(), t.buildPath(f, t.shape, n), f.toStatic(), t.pathUpdated()), E && f.rebuildPath(r, l ? s : 1), M && (r.setLineDash(M), r.lineDashOffset = P), n || (e.strokeFirst ? (a && Ey(r, e), o && Ly(r, e)) : (o && Ly(r, e), a && Ey(r, e))), M && r.setLineDash([]);
  }
  function EM(r, t, e) {
    var n = t.__image = bp(e.image, t.__image, t, t.onload);
    if (!(!n || !Ds(n))) {
      var i = e.x || 0, a = e.y || 0, o = t.getWidth(), s = t.getHeight(), l = n.width / n.height;
      if (o == null && s != null ? o = s * l : s == null && o != null ? s = o / l : o == null && s == null && (o = n.width, s = n.height), e.sWidth && e.sHeight) {
        var u = e.sx || 0, f = e.sy || 0;
        r.drawImage(n, u, f, e.sWidth, e.sHeight, i, a, o, s);
      } else if (e.sx && e.sy) {
        var u = e.sx, f = e.sy, h = o - u, v = s - f;
        r.drawImage(n, u, f, h, v, i, a, o, s);
      } else
        r.drawImage(n, i, a, o, s);
    }
  }
  function RM(r, t, e) {
    var n, i = e.text;
    if (i != null && (i += ""), i) {
      r.font = e.font || nt, r.textAlign = e.textAlign, r.textBaseline = e.textBaseline;
      var a = void 0, o = void 0;
      r.setLineDash && e.lineDash && (n = Py(t), a = n[0], o = n[1]), a && (r.setLineDash(a), r.lineDashOffset = o), e.strokeFirst ? (Ll(e) && r.strokeText(i, e.x, e.y), El(e) && r.fillText(i, e.x, e.y)) : (El(e) && r.fillText(i, e.x, e.y), Ll(e) && r.strokeText(i, e.x, e.y)), a && r.setLineDash([]);
    }
  }
  var Ry = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"], Oy = [["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]];
  function ky(r, t, e, n, i) {
    var a = !1;
    if (!n && (e = e || {}, t === e))
      return !1;
    if (n || t.opacity !== e.opacity) {
      Me(r, i), a = !0;
      var o = Math.max(Math.min(t.opacity, 1), 0);
      r.globalAlpha = isNaN(o) ? qn.opacity : o;
    }
    (n || t.blend !== e.blend) && (a || (Me(r, i), a = !0), r.globalCompositeOperation = t.blend || qn.blend);
    for (var s = 0; s < Ry.length; s++) {
      var l = Ry[s];
      (n || t[l] !== e[l]) && (a || (Me(r, i), a = !0), r[l] = r.dpr * (t[l] || 0));
    }
    return (n || t.shadowColor !== e.shadowColor) && (a || (Me(r, i), a = !0), r.shadowColor = t.shadowColor || qn.shadowColor), a;
  }
  function Ny(r, t, e, n, i) {
    var a = So(t, i.inHover), o = n ? null : e && So(e, i.inHover) || {};
    if (a === o)
      return !1;
    var s = ky(r, a, o, n, i);
    if ((n || a.fill !== o.fill) && (s || (Me(r, i), s = !0), Iy(a.fill) && (r.fillStyle = a.fill)), (n || a.stroke !== o.stroke) && (s || (Me(r, i), s = !0), Iy(a.stroke) && (r.strokeStyle = a.stroke)), (n || a.opacity !== o.opacity) && (s || (Me(r, i), s = !0), r.globalAlpha = a.opacity == null ? 1 : a.opacity), t.hasStroke()) {
      var l = a.lineWidth, u = l / (a.strokeNoScale && t.getLineScale ? t.getLineScale() : 1);
      r.lineWidth !== u && (s || (Me(r, i), s = !0), r.lineWidth = u);
    }
    for (var f = 0; f < Oy.length; f++) {
      var h = Oy[f], v = h[0];
      (n || a[v] !== o[v]) && (s || (Me(r, i), s = !0), r[v] = a[v] || h[1]);
    }
    return s;
  }
  function OM(r, t, e, n, i) {
    return ky(r, So(t, i.inHover), e && So(e, i.inHover), n, i);
  }
  function By(r, t) {
    var e = t.transform, n = r.dpr || 1;
    e ? r.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : r.setTransform(n, 0, 0, n, 0, 0);
  }
  function kM(r, t, e) {
    for (var n = !1, i = 0; i < r.length; i++) {
      var a = r[i];
      n = n || a.isZeroArea(), By(t, a), t.beginPath(), a.buildPath(t, a.shape), t.clip();
    }
    e.allClipped = n;
  }
  function NM(r, t) {
    return r && t ? r[0] !== t[0] || r[1] !== t[1] || r[2] !== t[2] || r[3] !== t[3] || r[4] !== t[4] || r[5] !== t[5] : !(!r && !t);
  }
  var Fy = 1, zy = 2, Vy = 3, Gy = 4;
  function BM(r) {
    var t = El(r), e = Ll(r);
    return !(r.lineDash || !(+t ^ +e) || t && typeof r.fill != "string" || e && typeof r.stroke != "string" || r.strokePercent < 1 || r.strokeOpacity < 1 || r.fillOpacity < 1);
  }
  function Me(r, t) {
    t.batchFill && r.fill(), t.batchStroke && r.stroke(), t.batchFill = "", t.batchStroke = "";
  }
  function So(r, t) {
    return t && r.__hoverStyle || r.style;
  }
  function ac(r, t) {
    vi(r, t, {
      inHover: !1,
      viewWidth: 0,
      viewHeight: 0
    }, !0);
  }
  function vi(r, t, e, n) {
    var i = t.transform;
    if (!t.shouldBePainted(e.viewWidth, e.viewHeight, !1, !1)) {
      t.__dirty &= ~Oe, t.__isRendered = !1;
      return;
    }
    var a = t.__clipPaths, o = e.prevElClipPaths, s = !1, l = !1;
    if ((!o || AM(a, o)) && (o && o.length && (Me(r, e), r.restore(), l = s = !0, e.prevElClipPaths = null, e.allClipped = !1, e.prevEl = null), a && a.length && (Me(r, e), r.save(), kM(a, r, e), s = !0), e.prevElClipPaths = a), e.allClipped) {
      t.__isRendered = !1;
      return;
    }
    t.beforeBrush && t.beforeBrush(), t.innerBeforeBrush();
    var u = e.prevEl;
    u || (l = s = !0);
    var f = t instanceof xt && t.autoBatch && BM(t.style);
    s || NM(i, u.transform) ? (Me(r, e), By(r, t)) : f || Me(r, e);
    var h = So(t, e.inHover);
    t instanceof xt ? (e.lastDrawType !== Fy && (l = !0, e.lastDrawType = Fy), Ny(r, t, u, l, e), (!f || !e.batchFill && !e.batchStroke) && r.beginPath(), LM(r, t, h, f), f && (e.batchFill = h.fill || "", e.batchStroke = h.stroke || "")) : t instanceof Ls ? (e.lastDrawType !== Vy && (l = !0, e.lastDrawType = Vy), Ny(r, t, u, l, e), RM(r, t, h)) : t instanceof Gr ? (e.lastDrawType !== zy && (l = !0, e.lastDrawType = zy), OM(r, t, u, l, e), EM(r, t, h)) : t.getTemporalDisplayables && (e.lastDrawType !== Gy && (l = !0, e.lastDrawType = Gy), FM(r, t, e)), f && n && Me(r, e), t.innerAfterBrush(), t.afterBrush && t.afterBrush(), e.prevEl = t, t.__dirty = 0, t.__isRendered = !0;
  }
  function FM(r, t, e) {
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
      l.beforeBrush && l.beforeBrush(), l.innerBeforeBrush(), vi(r, l, a, o === s - 1), l.innerAfterBrush(), l.afterBrush && l.afterBrush(), a.prevEl = l;
    }
    for (var u = 0, f = i.length; u < f; u++) {
      var l = i[u];
      l.beforeBrush && l.beforeBrush(), l.innerBeforeBrush(), vi(r, l, a, u === f - 1), l.innerAfterBrush(), l.afterBrush && l.afterBrush(), a.prevEl = l;
    }
    t.clearTemporalDisplayables(), t.notClear = !0, r.restore();
  }
  var oc = new gM(), Hy = new Ca(100), Wy = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"];
  function sc(r, t) {
    if (r === "none")
      return null;
    var e = t.getDevicePixelRatio(), n = t.getZr(), i = n.painter.type === "svg";
    r.dirty && oc.delete(r);
    var a = oc.get(r);
    if (a)
      return a;
    var o = St(r, {
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
    return l(s), s.rotation = o.rotation, s.scaleX = s.scaleY = i ? 1 : 1 / e, oc.set(r, s), r.dirty = !1, s;
    function l(u) {
      for (var f = [e], h = !0, v = 0; v < Wy.length; ++v) {
        var c = o[Wy[v]];
        if (c != null && !X(c) && !Z(c) && !Mt(c) && typeof c != "boolean") {
          h = !1;
          break;
        }
        f.push(c);
      }
      var d;
      if (h) {
        d = f.join(",") + (i ? "-svg" : "");
        var g = Hy.get(d);
        g && (i ? u.svgElement = g : u.image = g);
      }
      var p = Yy(o.dashArrayX), m = zM(o.dashArrayY), _ = Uy(o.symbol), S = VM(p), b = Xy(m), C = !i && Dt.createCanvas(), T = i && {
        tag: "g",
        attrs: {},
        key: "dcl",
        children: []
      }, D = P(), M;
      C && (C.width = D.width * e, C.height = D.height * e, M = C.getContext("2d")), E(), h && Hy.put(d, C || T), u.image = C, u.svgElement = T, u.svgWidth = D.width, u.svgHeight = D.height;
      function P() {
        for (var A = 1, k = 0, N = S.length; k < N; ++k)
          A = fp(A, S[k]);
        for (var B = 1, k = 0, N = _.length; k < N; ++k)
          B = fp(B, _[k].length);
        A *= B;
        var z = b * S.length * _.length;
        {
          var G = function(J) {
            console.warn("Calculated decal size is greater than " + J + " due to decal option settings so " + J + " is used for the decal size. Please consider changing the decal option to make a smaller decal or set " + J + " to be larger to avoid incontinuity.");
          };
          A > o.maxTileWidth && G("maxTileWidth"), z > o.maxTileHeight && G("maxTileHeight");
        }
        return {
          width: Math.max(1, Math.min(A, o.maxTileWidth)),
          height: Math.max(1, Math.min(z, o.maxTileHeight))
        };
      }
      function E() {
        M && (M.clearRect(0, 0, C.width, C.height), o.backgroundColor && (M.fillStyle = o.backgroundColor, M.fillRect(0, 0, C.width, C.height)));
        for (var A = 0, k = 0; k < m.length; ++k)
          A += m[k];
        if (A <= 0)
          return;
        for (var N = -b, B = 0, z = 0, G = 0; N < D.height; ) {
          if (B % 2 === 0) {
            for (var J = z / 2 % _.length, U = 0, Y = 0, Q = 0; U < D.width * 2; ) {
              for (var ot = 0, k = 0; k < p[G].length; ++k)
                ot += p[G][k];
              if (ot <= 0)
                break;
              if (Y % 2 === 0) {
                var it = (1 - o.symbolSize) * 0.5, ct = U + p[G][Y] * it, Tt = N + m[B] * it, Kt = p[G][Y] * o.symbolSize, Et = m[B] * o.symbolSize, Ie = Q / 2 % _[J].length;
                ze(ct, Tt, Kt, Et, _[J][Ie]);
              }
              U += p[G][Y], ++Q, ++Y, Y === p[G].length && (Y = 0);
            }
            ++G, G === p.length && (G = 0);
          }
          N += m[B], ++z, ++B, B === m.length && (B = 0);
        }
        function ze(Jt, Ht, rt, ht, kr) {
          var jt = i ? 1 : e, Cn = hi(kr, Jt * jt, Ht * jt, rt * jt, ht * jt, o.color, o.symbolKeepAspect);
          if (i) {
            var Kr = n.painter.renderOneToVNode(Cn);
            Kr && T.children.push(Kr);
          } else
            ac(M, Cn);
        }
      }
    }
  }
  function Uy(r) {
    if (!r || r.length === 0)
      return [["rect"]];
    if (Z(r))
      return [[r]];
    for (var t = !0, e = 0; e < r.length; ++e)
      if (!Z(r[e])) {
        t = !1;
        break;
      }
    if (t)
      return Uy([r]);
    for (var n = [], e = 0; e < r.length; ++e)
      Z(r[e]) ? n.push([r[e]]) : n.push(r[e]);
    return n;
  }
  function Yy(r) {
    if (!r || r.length === 0)
      return [[0, 0]];
    if (Mt(r)) {
      var t = Math.ceil(r);
      return [[t, t]];
    }
    for (var e = !0, n = 0; n < r.length; ++n)
      if (!Mt(r[n])) {
        e = !1;
        break;
      }
    if (e)
      return Yy([r]);
    for (var i = [], n = 0; n < r.length; ++n)
      if (Mt(r[n])) {
        var t = Math.ceil(r[n]);
        i.push([t, t]);
      } else {
        var t = K(r[n], function(s) {
          return Math.ceil(s);
        });
        t.length % 2 === 1 ? i.push(t.concat(t)) : i.push(t);
      }
    return i;
  }
  function zM(r) {
    if (!r || typeof r == "object" && r.length === 0)
      return [0, 0];
    if (Mt(r)) {
      var t = Math.ceil(r);
      return [t, t];
    }
    var e = K(r, function(n) {
      return Math.ceil(n);
    });
    return r.length % 2 ? e.concat(e) : e;
  }
  function VM(r) {
    return K(r, function(t) {
      return Xy(t);
    });
  }
  function Xy(r) {
    for (var t = 0, e = 0; e < r.length; ++e)
      t += r[e];
    return r.length % 2 === 1 ? t * 2 : t;
  }
  function GM(r, t) {
    r.eachRawSeries(function(e) {
      if (!r.isSeriesFiltered(e)) {
        var n = e.getData();
        n.hasItemVisual() && n.each(function(o) {
          var s = n.getItemVisual(o, "decal");
          if (s) {
            var l = n.ensureUniqueItemVisual(o, "style");
            l.decal = sc(s, t);
          }
        });
        var i = n.getVisual("decal");
        if (i) {
          var a = n.getVisual("style");
          a.decal = sc(i, t);
        }
      }
    });
  }
  var hr = new wr(), Rl = {};
  function HM(r, t) {
    Rl[r] && re("Already has an implementation of " + r + "."), Rl[r] = t;
  }
  function $y(r) {
    return Rl[r] || re("Implementation of " + r + " doesn't exists."), Rl[r];
  }
  var WM = "5.4.2", UM = {
    zrender: "5.4.3"
  }, YM = 1, XM = 800, $M = 900, qM = 1e3, ZM = 2e3, KM = 5e3, qy = 1e3, jM = 1100, lc = 2e3, Zy = 3e3, QM = 4e3, Ol = 4500, JM = 4600, tA = 5e3, eA = 6e3, Ky = 7e3, jy = {
    PROCESSOR: {
      FILTER: qM,
      SERIES_FILTER: XM,
      STATISTIC: KM
    },
    VISUAL: {
      LAYOUT: qy,
      PROGRESSIVE_LAYOUT: jM,
      GLOBAL: lc,
      CHART: Zy,
      POST_CHART_LAYOUT: JM,
      COMPONENT: QM,
      BRUSH: tA,
      CHART_ITEM: Ol,
      ARIA: eA,
      DECAL: Ky
    }
  }, oe = "__flagInMainProcess", Ae = "__pendingUpdate", uc = "__needsUpdateStatus", Qy = /^[a-zA-Z0-9_]+$/, fc = "__connectUpdateStatus", Jy = 0, rA = 1, nA = 2;
  function t0(r) {
    return function() {
      for (var t = [], e = 0; e < arguments.length; e++)
        t[e] = arguments[e];
      if (this.isDisposed()) {
        Be(this.id);
        return;
      }
      return r0(this, r, t);
    };
  }
  function e0(r) {
    return function() {
      for (var t = [], e = 0; e < arguments.length; e++)
        t[e] = arguments[e];
      return r0(this, r, t);
    };
  }
  function r0(r, t, e) {
    return e[0] = e[0] && e[0].toLowerCase(), wr.prototype[t].apply(r, e);
  }
  var n0 = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }
      return t;
    }(wr)
  ), i0 = n0.prototype;
  i0.on = e0("on"), i0.off = e0("off");
  var ia, hc, kl, gn, cc, vc, dc, wo, bo, a0, o0, pc, s0, Nl, l0, u0, rr, f0, Bl = (
    /** @class */
    function(r) {
      x(t, r);
      function t(e, n, i) {
        var a = r.call(this, new sM()) || this;
        a._chartsViews = [], a._chartsMap = {}, a._componentsViews = [], a._componentsMap = {}, a._pendingActions = [], i = i || {}, Z(n) && (n = h0[n]), a._dom = e;
        var o = "canvas", s = "auto", l = !1;
        {
          var u = (
            /* eslint-disable-next-line */
            O.hasGlobalWindow ? window : global
          );
          o = u.__ECHARTS__DEFAULT__RENDERER__ || o, s = ut(u.__ECHARTS__DEFAULT__COARSE_POINTER, s);
          var f = u.__ECHARTS__DEFAULT__USE_DIRTY_RECT__;
          l = f ?? l;
        }
        var h = a._zr = Mf(e, {
          renderer: i.renderer || o,
          devicePixelRatio: i.devicePixelRatio,
          width: i.width,
          height: i.height,
          ssr: i.ssr,
          useDirtyRect: ut(i.useDirtyRect, l),
          useCoarsePointer: ut(i.useCoarsePointer, s),
          pointerSize: i.pointerSize
        });
        a._ssr = i.ssr, a._throttledZrFlush = Cl(Pt(h.flush, h), 17), n = vt(n), n && Im(n, !0), a._theme = n, a._locale = cC(i.locale || jg), a._coordSysMgr = new _l();
        var v = a._api = l0(a);
        function c(d, g) {
          return d.__prio - g.__prio;
        }
        return rs(zl, c), rs(mc, c), a._scheduler = new _y(a, v, mc, zl), a._messageCenter = new n0(), a._initEvents(), a.resize = Pt(a.resize, a), h.animation.on("frame", a._onframe, a), a0(h, a), o0(h, a), ga(a), a;
      }
      return t.prototype._onframe = function() {
        if (!this._disposed) {
          f0(this);
          var e = this._scheduler;
          if (this[Ae]) {
            var n = this[Ae].silent;
            this[oe] = !0;
            try {
              ia(this), gn.update.call(this, null, this[Ae].updateParams);
            } catch (l) {
              throw this[oe] = !1, this[Ae] = null, l;
            }
            this._zr.flush(), this[oe] = !1, this[Ae] = null, wo.call(this, n), bo.call(this, n);
          } else if (e.unfinished) {
            var i = YM, a = this._model, o = this._api;
            e.unfinished = !1;
            do {
              var s = +/* @__PURE__ */ new Date();
              e.performSeriesTasks(a), e.performDataProcessorTasks(a), vc(this, a), e.performVisualTasks(a), Nl(this, this._model, o, "remain", {}), i -= +/* @__PURE__ */ new Date() - s;
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
        if (this[oe]) {
          re("`setOption` should not be called during main process.");
          return;
        }
        if (this._disposed) {
          Be(this.id);
          return;
        }
        var a, o, s;
        if (j(n) && (i = n.lazyUpdate, a = n.silent, o = n.replaceMerge, s = n.transition, n = n.notMerge), this[oe] = !0, !this._model || n) {
          var l = new WC(this._api), u = this._theme, f = this._model = new Bh();
          f.scheduler = this._scheduler, f.ssr = this._ssr, f.init(null, null, null, u, this._locale, l);
        }
        this._model.setOption(e, {
          replaceMerge: o
        }, yc);
        var h = {
          seriesTransition: s,
          optionChanged: !0
        };
        if (i)
          this[Ae] = {
            silent: a,
            updateParams: h
          }, this[oe] = !1, this.getZr().wakeUp();
        else {
          try {
            ia(this), gn.update.call(this, null, h);
          } catch (v) {
            throw this[Ae] = null, this[oe] = !1, v;
          }
          this._ssr || this._zr.flush(), this[Ae] = null, this[oe] = !1, wo.call(this, a), bo.call(this, a);
        }
      }, t.prototype.setTheme = function() {
        sr("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
      }, t.prototype.getModel = function() {
        return this._model;
      }, t.prototype.getOption = function() {
        return this._model && this._model.getOption();
      }, t.prototype.getWidth = function() {
        return this._zr.getWidth();
      }, t.prototype.getHeight = function() {
        return this._zr.getHeight();
      }, t.prototype.getDevicePixelRatio = function() {
        return this._zr.painter.dpr || O.hasGlobalWindow && window.devicePixelRatio || 1;
      }, t.prototype.getRenderedCanvas = function(e) {
        return Wt("getRenderedCanvas", "renderToCanvas"), this.renderToCanvas(e);
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
        if (O.svgSupported) {
          var e = this._zr, n = e.storage.getDisplayList();
          return L(n, function(i) {
            i.stopAnimation(null, !0);
          }), e.painter.toDataURL();
        }
      }, t.prototype.getDataURL = function(e) {
        if (this._disposed) {
          Be(this.id);
          return;
        }
        e = e || {};
        var n = e.excludeComponents, i = this._model, a = [], o = this;
        L(n, function(l) {
          i.eachComponent({
            mainType: l
          }, function(u) {
            var f = o._componentsMap[u.__viewId];
            f.group.ignore || (a.push(f), f.group.ignore = !0);
          });
        });
        var s = this._zr.painter.getType() === "svg" ? this.getSvgDataURL() : this.renderToCanvas(e).toDataURL("image/" + (e && e.type || "png"));
        return L(a, function(l) {
          l.group.ignore = !1;
        }), s;
      }, t.prototype.getConnectedDataURL = function(e) {
        if (this._disposed) {
          Be(this.id);
          return;
        }
        var n = e.type === "svg", i = this.group, a = Math.min, o = Math.max, s = 1 / 0;
        if (Vl[i]) {
          var l = s, u = s, f = -s, h = -s, v = [], c = e && e.pixelRatio || this.getDevicePixelRatio();
          L(di, function(S, b) {
            if (S.group === i) {
              var C = n ? S.getZr().painter.getSvgDom().innerHTML : S.renderToCanvas(vt(e)), T = S.getDom().getBoundingClientRect();
              l = a(T.left, l), u = a(T.top, u), f = o(T.right, f), h = o(T.bottom, h), v.push({
                dom: C,
                left: T.left,
                top: T.top
              });
            }
          }), l *= c, u *= c, f *= c, h *= c;
          var d = f - l, g = h - u, p = Dt.createCanvas(), m = Mf(p, {
            renderer: n ? "svg" : "canvas"
          });
          if (m.resize({
            width: d,
            height: g
          }), n) {
            var _ = "";
            return L(v, function(S) {
              var b = S.left - l, C = S.top - u;
              _ += '<g transform="translate(' + b + "," + C + ')">' + S.dom + "</g>";
            }), m.painter.getSvgRoot().innerHTML = _, e.connectedBackgroundColor && m.painter.setBackgroundColor(e.connectedBackgroundColor), m.refreshImmediately(), m.painter.toDataURL();
          } else
            return e.connectedBackgroundColor && m.add(new Vt({
              shape: {
                x: 0,
                y: 0,
                width: d,
                height: g
              },
              style: {
                fill: e.connectedBackgroundColor
              }
            })), L(v, function(S) {
              var b = new Gr({
                style: {
                  x: S.left * c - l,
                  y: S.top * c - u,
                  image: S.dom
                }
              });
              m.add(b);
            }), m.refreshImmediately(), p.toDataURL("image/" + (e && e.type || "png"));
        } else
          return this.getDataURL(e);
      }, t.prototype.convertToPixel = function(e, n) {
        return cc(this, "convertToPixel", e, n);
      }, t.prototype.convertFromPixel = function(e, n) {
        return cc(this, "convertFromPixel", e, n);
      }, t.prototype.containPixel = function(e, n) {
        if (this._disposed) {
          Be(this.id);
          return;
        }
        var i = this._model, a, o = Rf(i, e);
        return L(o, function(s, l) {
          l.indexOf("Models") >= 0 && L(s, function(u) {
            var f = u.coordinateSystem;
            if (f && f.containPoint)
              a = a || !!f.containPoint(n);
            else if (l === "seriesModels") {
              var h = this._chartsMap[u.__viewId];
              h && h.containPoint ? a = a || h.containPoint(n, u) : ee(l + ": " + (h ? "The found component do not support containPoint." : "No view mapping to the found component."));
            } else
              ee(l + ": containPoint is not supported");
          }, this);
        }, this), !!a;
      }, t.prototype.getVisual = function(e, n) {
        var i = this._model, a = Rf(i, e, {
          defaultMainType: "series"
        }), o = a.seriesModel;
        o || ee("There is no specified series model");
        var s = o.getData(), l = a.hasOwnProperty("dataIndexInside") ? a.dataIndexInside : a.hasOwnProperty("dataIndex") ? s.indexOfRawIndex(a.dataIndex) : null;
        return l != null ? fM(s, l, n) : hM(s, n);
      }, t.prototype.getViewOfComponentModel = function(e) {
        return this._componentsMap[e.__viewId];
      }, t.prototype.getViewOfSeriesModel = function(e) {
        return this._chartsMap[e.__viewId];
      }, t.prototype._initEvents = function() {
        var e = this;
        L(iA, function(n) {
          var i = function(a) {
            var o = e.getModel(), s = a.target, l, u = n === "globalout";
            if (u ? l = {} : s && _o(s, function(d) {
              var g = _t(d);
              if (g && g.dataIndex != null) {
                var p = g.dataModel || o.getSeriesByIndex(g.seriesIndex);
                return l = p && p.getDataParams(g.dataIndex, g.dataType) || {}, !0;
              } else if (g.eventData)
                return l = W({}, g.eventData), !0;
            }, !0), l) {
              var f = l.componentType, h = l.componentIndex;
              (f === "markLine" || f === "markPoint" || f === "markArea") && (f = "series", h = l.seriesIndex);
              var v = f && h != null && o.getComponent(f, h), c = v && e[v.mainType === "series" ? "_chartsMap" : "_componentsMap"][v.__viewId];
              !u && !(v && c) && ee("model or view can not be found by params"), l.event = a, l.type = n, e._$eventProcessor.eventInfo = {
                targetEl: s,
                packedEvent: l,
                model: v,
                view: c
              }, e.trigger(n, l);
            }
          };
          i.zrEventfulCallAtLast = !0, e._zr.on(n, i, e);
        }), L(xo, function(n, i) {
          e._messageCenter.on(i, function(a) {
            this.trigger(i, a);
          }, e);
        }), L(["selectchanged"], function(n) {
          e._messageCenter.on(n, function(i) {
            this.trigger(n, i);
          }, e);
        }), vM(this._messageCenter, this, this._api);
      }, t.prototype.isDisposed = function() {
        return this._disposed;
      }, t.prototype.clear = function() {
        if (this._disposed) {
          Be(this.id);
          return;
        }
        this.setOption({
          series: []
        }, !0);
      }, t.prototype.dispose = function() {
        if (this._disposed) {
          Be(this.id);
          return;
        }
        this._disposed = !0;
        var e = this.getDom();
        e && yp(this.getDom(), Sc, "");
        var n = this, i = n._api, a = n._model;
        L(n._componentsViews, function(o) {
          o.dispose(a, i);
        }), L(n._chartsViews, function(o) {
          o.dispose(a, i);
        }), n._zr.dispose(), n._dom = n._model = n._chartsMap = n._componentsMap = n._chartsViews = n._componentsViews = n._scheduler = n._api = n._zr = n._throttledZrFlush = n._theme = n._coordSysMgr = n._messageCenter = null, delete di[n.id];
      }, t.prototype.resize = function(e) {
        if (this[oe]) {
          re("`resize` should not be called during main process.");
          return;
        }
        if (this._disposed) {
          Be(this.id);
          return;
        }
        this._zr.resize(e);
        var n = this._model;
        if (this._loadingFX && this._loadingFX.resize(), !!n) {
          var i = n.resetOption("media"), a = e && e.silent;
          this[Ae] && (a == null && (a = this[Ae].silent), i = !0, this[Ae] = null), this[oe] = !0;
          try {
            i && ia(this), gn.update.call(this, {
              type: "resize",
              animation: W({
                // Disable animation
                duration: 0
              }, e && e.animation)
            });
          } catch (o) {
            throw this[oe] = !1, o;
          }
          this[oe] = !1, wo.call(this, a), bo.call(this, a);
        }
      }, t.prototype.showLoading = function(e, n) {
        if (this._disposed) {
          Be(this.id);
          return;
        }
        if (j(e) && (n = e, e = ""), e = e || "default", this.hideLoading(), !_c[e]) {
          ee("Loading effects " + e + " not exists.");
          return;
        }
        var i = _c[e](this._api, n), a = this._zr;
        this._loadingFX = i, a.add(i);
      }, t.prototype.hideLoading = function() {
        if (this._disposed) {
          Be(this.id);
          return;
        }
        this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
      }, t.prototype.makeActionFromEvent = function(e) {
        var n = W({}, e);
        return n.type = xo[e.type], n;
      }, t.prototype.dispatchAction = function(e, n) {
        if (this._disposed) {
          Be(this.id);
          return;
        }
        if (j(n) || (n = {
          silent: !!n
        }), !!Fl[e.type] && this._model) {
          if (this[oe]) {
            this._pendingActions.push(e);
            return;
          }
          var i = n.silent;
          dc.call(this, e, i);
          var a = n.flush;
          a ? this._zr.flush() : a !== !1 && O.browser.weChat && this._throttledZrFlush(), wo.call(this, i), bo.call(this, i);
        }
      }, t.prototype.updateLabelLayout = function() {
        hr.trigger("series:layoutlabels", this._model, this._api, {
          // Not adding series labels.
          // TODO
          updatedSeries: []
        });
      }, t.prototype.appendData = function(e) {
        if (this._disposed) {
          Be(this.id);
          return;
        }
        var n = e.seriesIndex, i = this.getModel(), a = i.getSeriesByIndex(n);
        st(e.data && a), a.appendData(e), this._scheduler.unfinished = !0, this.getZr().wakeUp();
      }, t.internalField = function() {
        ia = function(h) {
          var v = h._scheduler;
          v.restorePipelines(h._model), v.prepareStageTasks(), hc(h, !0), hc(h, !1), v.plan();
        }, hc = function(h, v) {
          for (var c = h._model, d = h._scheduler, g = v ? h._componentsViews : h._chartsViews, p = v ? h._componentsMap : h._chartsMap, m = h._zr, _ = h._api, S = 0; S < g.length; S++)
            g[S].__alive = !1;
          v ? c.eachComponent(function(T, D) {
            T !== "series" && b(D);
          }) : c.eachSeries(b);
          function b(T) {
            var D = T.__requireNewView;
            T.__requireNewView = !1;
            var M = "_ec_" + T.id + "_" + T.type, P = !D && p[M];
            if (!P) {
              var E = Cr(T.type), A = v ? de.getClass(E.main, E.sub) : (
                // FIXME:TS
                // (ChartView as ChartViewConstructor).getClass('series', classType.sub)
                // For backward compat, still support a chart type declared as only subType
                // like "liquidfill", but recommend "series.liquidfill"
                // But need a base class to make a type series.
                pe.getClass(E.sub)
              );
              st(A, E.sub + " does not exist."), P = new A(), P.init(c, _), p[M] = P, g.push(P), m.add(P.group);
            }
            T.__viewId = P.__id = M, P.__alive = !0, P.__model = T, P.group.__ecComponentInfo = {
              mainType: T.mainType,
              index: T.componentIndex
            }, !v && d.prepareView(P, T, c, _);
          }
          for (var S = 0; S < g.length; ) {
            var C = g[S];
            C.__alive ? S++ : (!v && C.renderTask.dispose(), m.remove(C.group), C.dispose(c, _), g.splice(S, 1), p[C.__id] === C && delete p[C.__id], C.__id = C.group.__ecComponentInfo = null);
          }
        }, kl = function(h, v, c, d, g) {
          var p = h._model;
          if (p.setUpdatePayload(c), !d) {
            L([].concat(h._componentsViews).concat(h._chartsViews), C);
            return;
          }
          var m = {};
          m[d + "Id"] = c[d + "Id"], m[d + "Index"] = c[d + "Index"], m[d + "Name"] = c[d + "Name"];
          var _ = {
            mainType: d,
            query: m
          };
          g && (_.subType = g);
          var S = c.excludeSeriesId, b;
          S != null && (b = lt(), L(ce(S), function(T) {
            var D = Tr(T, null);
            D != null && b.set(D, !0);
          })), p && p.eachComponent(_, function(T) {
            var D = b && b.get(T.id) != null;
            if (!D)
              if (vg(c))
                if (T instanceof De)
                  c.type === ri && !c.notBlur && !T.get(["emphasis", "disabled"]) && aT(T, c, h._api);
                else {
                  var M = nh(T.mainType, T.componentIndex, c.name, h._api), P = M.focusSelf, E = M.dispatchers;
                  c.type === ri && P && !c.notBlur && rh(T.mainType, T.componentIndex, h._api), E && L(E, function(A) {
                    c.type === ri ? Fs(A) : zs(A);
                  });
                }
              else
                ih(c) && T instanceof De && (lT(T, c, h._api), fg(T), rr(h));
          }, h), p && p.eachComponent(_, function(T) {
            var D = b && b.get(T.id) != null;
            D || C(h[d === "series" ? "_chartsMap" : "_componentsMap"][T.__viewId]);
          }, h);
          function C(T) {
            T && T.__alive && T[v] && T[v](T.__model, p, h._api, c);
          }
        }, gn = {
          prepareAndUpdate: function(h) {
            ia(this), gn.update.call(this, h, {
              // Needs to mark option changed if newOption is given.
              // It's from MagicType.
              // TODO If use a separate flag optionChanged in payload?
              optionChanged: h.newOption != null
            });
          },
          update: function(h, v) {
            var c = this._model, d = this._api, g = this._zr, p = this._coordSysMgr, m = this._scheduler;
            if (c) {
              c.setUpdatePayload(h), m.restoreData(c, h), m.performSeriesTasks(c), p.create(c, d), m.performDataProcessorTasks(c, h), vc(this, c), p.update(c, d), e(c), m.performVisualTasks(c, h), pc(this, c, d, h, v);
              var _ = c.get("backgroundColor") || "transparent", S = c.get("darkMode");
              g.setBackgroundColor(_), S != null && S !== "auto" && g.setDarkMode(S), hr.trigger("afterupdate", c, d);
            }
          },
          updateTransform: function(h) {
            var v = this, c = this._model, d = this._api;
            if (c) {
              c.setUpdatePayload(h);
              var g = [];
              c.eachComponent(function(m, _) {
                if (m !== "series") {
                  var S = v.getViewOfComponentModel(_);
                  if (S && S.__alive)
                    if (S.updateTransform) {
                      var b = S.updateTransform(_, c, d, h);
                      b && b.update && g.push(S);
                    } else
                      g.push(S);
                }
              });
              var p = lt();
              c.eachSeries(function(m) {
                var _ = v._chartsMap[m.__viewId];
                if (_.updateTransform) {
                  var S = _.updateTransform(m, c, d, h);
                  S && S.update && p.set(m.uid, 1);
                } else
                  p.set(m.uid, 1);
              }), e(c), this._scheduler.performVisualTasks(c, h, {
                setDirty: !0,
                dirtyMap: p
              }), Nl(this, c, d, h, {}, p), hr.trigger("afterupdate", c, d);
            }
          },
          updateView: function(h) {
            var v = this._model;
            v && (v.setUpdatePayload(h), pe.markUpdateMethod(h, "updateView"), e(v), this._scheduler.performVisualTasks(v, h, {
              setDirty: !0
            }), pc(this, v, this._api, h, {}), hr.trigger("afterupdate", v, this._api));
          },
          updateVisual: function(h) {
            var v = this, c = this._model;
            c && (c.setUpdatePayload(h), c.eachSeries(function(d) {
              d.getData().clearAllVisual();
            }), pe.markUpdateMethod(h, "updateVisual"), e(c), this._scheduler.performVisualTasks(c, h, {
              visualType: "visual",
              setDirty: !0
            }), c.eachComponent(function(d, g) {
              if (d !== "series") {
                var p = v.getViewOfComponentModel(g);
                p && p.__alive && p.updateVisual(g, c, v._api, h);
              }
            }), c.eachSeries(function(d) {
              var g = v._chartsMap[d.__viewId];
              g.updateVisual(d, c, v._api, h);
            }), hr.trigger("afterupdate", c, this._api));
          },
          updateLayout: function(h) {
            gn.update.call(this, h);
          }
        }, cc = function(h, v, c, d) {
          if (h._disposed) {
            Be(h.id);
            return;
          }
          for (var g = h._model, p = h._coordSysMgr.getCoordinateSystems(), m, _ = Rf(g, c), S = 0; S < p.length; S++) {
            var b = p[S];
            if (b[v] && (m = b[v](g, _, d)) != null)
              return m;
          }
          ee("No coordinate system that supports " + v + " found by the given finder.");
        }, vc = function(h, v) {
          var c = h._chartsMap, d = h._scheduler;
          v.eachSeries(function(g) {
            d.updateStreamModes(g, c[g.__viewId]);
          });
        }, dc = function(h, v) {
          var c = this, d = this.getModel(), g = h.type, p = h.escapeConnect, m = Fl[g], _ = m.actionInfo, S = (_.update || "update").split(":"), b = S.pop(), C = S[0] != null && Cr(S[0]);
          this[oe] = !0;
          var T = [h], D = !1;
          h.batch && (D = !0, T = K(h.batch, function(B) {
            return B = St(W({}, B), h), B.batch = null, B;
          }));
          var M = [], P, E = ih(h), A = vg(h);
          if (A && ug(this._api), L(T, function(B) {
            if (P = m.action(B, c._model, c._api), P = P || W({}, B), P.type = _.event || P.type, M.push(P), A) {
              var z = Of(h), G = z.queryOptionMap, J = z.mainTypeSpecified, U = J ? G.keys()[0] : "series";
              kl(c, b, B, U), rr(c);
            } else
              E ? (kl(c, b, B, "series"), rr(c)) : C && kl(c, b, B, C.main, C.sub);
          }), b !== "none" && !A && !E && !C)
            try {
              this[Ae] ? (ia(this), gn.update.call(this, h), this[Ae] = null) : gn[b].call(this, h);
            } catch (B) {
              throw this[oe] = !1, B;
            }
          if (D ? P = {
            type: _.event || g,
            escapeConnect: p,
            batch: M
          } : P = M[0], this[oe] = !1, !v) {
            var k = this._messageCenter;
            if (k.trigger(P.type, P), E) {
              var N = {
                type: "selectchanged",
                escapeConnect: p,
                selected: uT(d),
                isFromClick: h.isFromClick || !1,
                fromAction: h.type,
                fromActionPayload: h
              };
              k.trigger(N.type, N);
            }
          }
        }, wo = function(h) {
          for (var v = this._pendingActions; v.length; ) {
            var c = v.shift();
            dc.call(this, c, h);
          }
        }, bo = function(h) {
          !h && this.trigger("updated");
        }, a0 = function(h, v) {
          h.on("rendered", function(c) {
            v.trigger("rendered", c), // Although zr is dirty if initial animation is not finished
            // and this checking is called on frame, we also check
            // animation finished for robustness.
            h.animation.isFinished() && !v[Ae] && !v._scheduler.unfinished && !v._pendingActions.length && v.trigger("finished");
          });
        }, o0 = function(h, v) {
          h.on("mouseover", function(c) {
            var d = c.target, g = _o(d, Ui);
            g && (oT(g, c, v._api), rr(v));
          }).on("mouseout", function(c) {
            var d = c.target, g = _o(d, Ui);
            g && (sT(g, c, v._api), rr(v));
          }).on("click", function(c) {
            var d = c.target, g = _o(d, function(_) {
              return _t(_).dataIndex != null;
            }, !0);
            if (g) {
              var p = g.selected ? "unselect" : "select", m = _t(g);
              v._api.dispatchAction({
                type: p,
                dataType: m.dataType,
                dataIndexInside: m.dataIndex,
                seriesIndex: m.seriesIndex,
                isFromClick: !0
              });
            }
          });
        };
        function e(h) {
          h.clearColorPalette(), h.eachSeries(function(v) {
            v.clearColorPalette();
          });
        }
        function n(h) {
          var v = [], c = [], d = !1;
          if (h.eachComponent(function(_, S) {
            var b = S.get("zlevel") || 0, C = S.get("z") || 0, T = S.getZLevelKey();
            d = d || !!T, (_ === "series" ? c : v).push({
              zlevel: b,
              z: C,
              idx: S.componentIndex,
              type: _,
              key: T
            });
          }), d) {
            var g = v.concat(c), p, m;
            rs(g, function(_, S) {
              return _.zlevel === S.zlevel ? _.z - S.z : _.zlevel - S.zlevel;
            }), L(g, function(_) {
              var S = h.getComponent(_.type, _.idx), b = _.zlevel, C = _.key;
              p != null && (b = Math.max(p, b)), C ? (b === p && C !== m && b++, m = C) : m && (b === p && b++, m = ""), p = b, S.setZLevel(b);
            });
          }
        }
        pc = function(h, v, c, d, g) {
          n(v), s0(h, v, c, d, g), L(h._chartsViews, function(p) {
            p.__alive = !1;
          }), Nl(h, v, c, d, g), L(h._chartsViews, function(p) {
            p.__alive || p.remove(v, c);
          });
        }, s0 = function(h, v, c, d, g, p) {
          L(p || h._componentsViews, function(m) {
            var _ = m.__model;
            u(_, m), m.render(_, v, c, d), s(_, m), f(_, m);
          });
        }, Nl = function(h, v, c, d, g, p) {
          var m = h._scheduler;
          g = W(g || {}, {
            updatedSeries: v.getSeries()
          }), hr.trigger("series:beforeupdate", v, c, g);
          var _ = !1;
          v.eachSeries(function(S) {
            var b = h._chartsMap[S.__viewId];
            b.__alive = !0;
            var C = b.renderTask;
            m.updatePayload(C, d), u(S, b), p && p.get(S.uid) && C.dirty(), C.perform(m.getPerformArgs(C)) && (_ = !0), b.group.silent = !!S.get("silent"), o(S, b), fg(S);
          }), m.unfinished = _ || m.unfinished, hr.trigger("series:layoutlabels", v, c, g), hr.trigger("series:transition", v, c, g), v.eachSeries(function(S) {
            var b = h._chartsMap[S.__viewId];
            s(S, b), f(S, b);
          }), a(h, v), hr.trigger("series:afterupdate", v, c, g);
        }, rr = function(h) {
          h[uc] = !0, h.getZr().wakeUp();
        }, f0 = function(h) {
          h[uc] && (h.getZr().storage.traverse(function(v) {
            qi(v) || i(v);
          }), h[uc] = !1);
        };
        function i(h) {
          for (var v = [], c = h.currentStates, d = 0; d < c.length; d++) {
            var g = c[d];
            g === "emphasis" || g === "blur" || g === "select" || v.push(g);
          }
          h.selected && h.states.select && v.push("select"), h.hoverState === Rs && h.states.emphasis ? v.push("emphasis") : h.hoverState === Es && h.states.blur && v.push("blur"), h.useStates(v);
        }
        function a(h, v) {
          var c = h._zr, d = c.storage, g = 0;
          d.traverse(function(p) {
            p.isGroup || g++;
          }), g > v.get("hoverLayerThreshold") && !O.node && !O.worker && v.eachSeries(function(p) {
            if (!p.preventUsingHoverLayer) {
              var m = h._chartsMap[p.__viewId];
              m.__alive && m.eachRendered(function(_) {
                _.states.emphasis && (_.states.emphasis.hoverLayer = !0);
              });
            }
          });
        }
        function o(h, v) {
          var c = h.get("blendMode") || null;
          v.eachRendered(function(d) {
            d.isGroup || (d.style.blend = c);
          });
        }
        function s(h, v) {
          if (!h.preventAutoZ) {
            var c = h.get("z") || 0, d = h.get("zlevel") || 0;
            v.eachRendered(function(g) {
              return l(g, c, d, -1 / 0), !0;
            });
          }
        }
        function l(h, v, c, d) {
          var g = h.getTextContent(), p = h.getTextGuideLine(), m = h.isGroup;
          if (m)
            for (var _ = h.childrenRef(), S = 0; S < _.length; S++)
              d = Math.max(l(_[S], v, c, d), d);
          else
            h.z = v, h.zlevel = c, d = Math.max(h.z2, d);
          if (g && (g.z = v, g.zlevel = c, isFinite(d) && (g.z2 = d + 2)), p) {
            var b = h.textGuideLineConfig;
            p.z = v, p.zlevel = c, isFinite(d) && (p.z2 = d + (b && b.showAbove ? 1 : -1));
          }
          return d;
        }
        function u(h, v) {
          v.eachRendered(function(c) {
            if (!qi(c)) {
              var d = c.getTextContent(), g = c.getTextGuideLine();
              c.stateTransition && (c.stateTransition = null), d && d.stateTransition && (d.stateTransition = null), g && g.stateTransition && (g.stateTransition = null), c.hasState() ? (c.prevStates = c.currentStates, c.clearStates()) : c.prevStates && (c.prevStates = null);
            }
          });
        }
        function f(h, v) {
          var c = h.getModel("stateAnimation"), d = h.isAnimationEnabled(), g = c.get("duration"), p = g > 0 ? {
            duration: g,
            delay: c.get("delay"),
            easing: c.get("easing")
            // additive: stateAnimationModel.get('additive')
          } : null;
          v.eachRendered(function(m) {
            if (m.states && m.states.emphasis) {
              if (qi(m))
                return;
              if (m instanceof xt && dT(m), m.__dirty) {
                var _ = m.prevStates;
                _ && m.useStates(_);
              }
              if (d) {
                m.stateTransition = p;
                var S = m.getTextContent(), b = m.getTextGuideLine();
                S && (S.stateTransition = p), b && (b.stateTransition = p);
              }
              m.__dirty && i(m);
            }
          });
        }
        l0 = function(h) {
          return new /** @class */
          (function(v) {
            x(c, v);
            function c() {
              return v !== null && v.apply(this, arguments) || this;
            }
            return c.prototype.getCoordinateSystems = function() {
              return h._coordSysMgr.getCoordinateSystems();
            }, c.prototype.getComponentByElement = function(d) {
              for (; d; ) {
                var g = d.__ecComponentInfo;
                if (g != null)
                  return h._model.getComponent(g.mainType, g.index);
                d = d.parent;
              }
            }, c.prototype.enterEmphasis = function(d, g) {
              Fs(d, g), rr(h);
            }, c.prototype.leaveEmphasis = function(d, g) {
              zs(d, g), rr(h);
            }, c.prototype.enterBlur = function(d) {
              iT(d), rr(h);
            }, c.prototype.leaveBlur = function(d) {
              ag(d), rr(h);
            }, c.prototype.enterSelect = function(d) {
              og(d), rr(h);
            }, c.prototype.leaveSelect = function(d) {
              sg(d), rr(h);
            }, c.prototype.getModel = function() {
              return h.getModel();
            }, c.prototype.getViewOfComponentModel = function(d) {
              return h.getViewOfComponentModel(d);
            }, c.prototype.getViewOfSeriesModel = function(d) {
              return h.getViewOfSeriesModel(d);
            }, c;
          }(xm))(h);
        }, u0 = function(h) {
          function v(c, d) {
            for (var g = 0; g < c.length; g++) {
              var p = c[g];
              p[fc] = d;
            }
          }
          L(xo, function(c, d) {
            h._messageCenter.on(d, function(g) {
              if (Vl[h.group] && h[fc] !== Jy) {
                if (g && g.escapeConnect)
                  return;
                var p = h.makeActionFromEvent(g), m = [];
                L(di, function(_) {
                  _ !== h && _.group === h.group && m.push(_);
                }), v(m, Jy), L(m, function(_) {
                  _[fc] !== rA && _.dispatchAction(p);
                }), v(m, nA);
              }
            });
          });
        };
      }(), t;
    }(wr)
  ), gc = Bl.prototype;
  gc.on = t0("on"), gc.off = t0("off"), gc.one = function(r, t, e) {
    var n = this;
    sr("ECharts#one is deprecated.");
    function i() {
      for (var a = [], o = 0; o < arguments.length; o++)
        a[o] = arguments[o];
      t && t.apply && t.apply(this, a), n.off(r, i);
    }
    this.on.call(this, r, i, e);
  };
  var iA = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
  function Be(r) {
    ee("Instance " + r + " has been disposed");
  }
  var Fl = {}, xo = {}, mc = [], yc = [], zl = [], h0 = {}, _c = {}, di = {}, Vl = {}, aA = +/* @__PURE__ */ new Date() - 0, oA = +/* @__PURE__ */ new Date() - 0, Sc = "_echarts_instance_";
  function sA(r, t, e) {
    var n = !(e && e.ssr);
    if (n) {
      if (!r)
        throw new Error("Initialize failed: invalid dom.");
      var i = wc(r);
      if (i)
        return ee("There is a chart instance already initialized on the dom."), i;
      Ai(r) && r.nodeName.toUpperCase() !== "CANVAS" && (!r.clientWidth && (!e || e.width == null) || !r.clientHeight && (!e || e.height == null)) && ee("Can't get DOM width or height. Please check dom.clientWidth and dom.clientHeight. They should not be 0.For example, you may need to call this in the callback of window.onload.");
    }
    var a = new Bl(r, t, e);
    return a.id = "ec_" + aA++, di[a.id] = a, n && yp(r, Sc, a.id), u0(a), hr.trigger("afterinit", a), a;
  }
  function lA(r) {
    if (X(r)) {
      var t = r;
      r = null, L(t, function(e) {
        e.group != null && (r = e.group);
      }), r = r || "g_" + oA++, L(t, function(e) {
        e.group = r;
      });
    }
    return Vl[r] = !0, r;
  }
  function c0(r) {
    Vl[r] = !1;
  }
  var uA = c0;
  function fA(r) {
    Z(r) ? r = di[r] : r instanceof Bl || (r = wc(r)), r instanceof Bl && !r.isDisposed() && r.dispose();
  }
  function wc(r) {
    return di[qb(r, Sc)];
  }
  function hA(r) {
    return di[r];
  }
  function bc(r, t) {
    h0[r] = t;
  }
  function xc(r) {
    wt(yc, r) < 0 && yc.push(r);
  }
  function Tc(r, t) {
    Cc(mc, r, t, ZM);
  }
  function v0(r) {
    Gl("afterinit", r);
  }
  function d0(r) {
    Gl("afterupdate", r);
  }
  function Gl(r, t) {
    hr.on(r, t);
  }
  function pi(r, t, e) {
    tt(t) && (e = t, t = "");
    var n = j(r) ? r.type : [r, r = {
      event: t
    }][0];
    r.event = (r.event || n).toLowerCase(), t = r.event, !xo[t] && (st(Qy.test(n) && Qy.test(t)), Fl[n] || (Fl[n] = {
      action: e,
      actionInfo: r
    }), xo[t] = n);
  }
  function p0(r, t) {
    _l.register(r, t);
  }
  function cA(r) {
    var t = _l.get(r);
    if (t)
      return t.getDimensionsInfo ? t.getDimensionsInfo() : t.dimensions.slice();
  }
  function g0(r, t) {
    Cc(zl, r, t, qy, "layout");
  }
  function mn(r, t) {
    Cc(zl, r, t, Zy, "visual");
  }
  var m0 = [];
  function Cc(r, t, e, n, i) {
    (tt(t) || j(t)) && (e = t, t = n);
    {
      if (isNaN(t) || t == null)
        throw new Error("Illegal priority");
      L(r, function(o) {
        st(o.__raw !== e);
      });
    }
    if (!(wt(m0, e) >= 0)) {
      m0.push(e);
      var a = _y.wrapStageHandler(e, i);
      a.__prio = t, a.__raw = e, r.push(a);
    }
  }
  function Dc(r, t) {
    _c[r] = t;
  }
  function vA(r) {
    sr("setCanvasCreator is deprecated. Use setPlatformAPI({ createCanvas }) instead."), Ee({
      createCanvas: r
    });
  }
  function y0(r, t, e) {
    var n = $y("registerMap");
    n && n(r, t, e);
  }
  function dA(r) {
    var t = $y("getMap");
    return t && t(r);
  }
  var _0 = _D;
  mn(lc, $D), mn(Ol, qD), mn(Ol, ZD), mn(lc, lM), mn(Ol, uM), mn(Ky, GM), xc(Im), Tc($M, eD), Dc("default", KD), pi({
    type: ri,
    event: ri,
    update: ri
  }, fe), pi({
    type: ks,
    event: ks,
    update: ks
  }, fe), pi({
    type: Wa,
    event: Wa,
    update: Wa
  }, fe), pi({
    type: Ns,
    event: Ns,
    update: Ns
  }, fe), pi({
    type: Ua,
    event: Ua,
    update: Ua
  }, fe), bc("light", oM), bc("dark", Dy);
  var pA = {};
  function To(r) {
    return r == null ? 0 : r.length || 1;
  }
  function S0(r) {
    return r;
  }
  var gA = (
    /** @class */
    function() {
      function r(t, e, n, i, a, o) {
        this._old = t, this._new = e, this._oldKeyGetter = n || S0, this._newKeyGetter = i || S0, this.context = a, this._diffModeMultiple = o === "multiple";
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
          var s = i[o], l = n[s], u = To(l);
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
          var l = a[s], u = n[l], f = i[l], h = To(u), v = To(f);
          if (h > 1 && v === 1)
            this._updateManyToOne && this._updateManyToOne(f, u), i[l] = null;
          else if (h === 1 && v > 1)
            this._updateOneToMany && this._updateOneToMany(f, u), i[l] = null;
          else if (h === 1 && v === 1)
            this._update && this._update(f, u), i[l] = null;
          else if (h > 1 && v > 1)
            this._updateManyToMany && this._updateManyToMany(f, u), i[l] = null;
          else if (h > 1)
            for (var c = 0; c < h; c++)
              this._remove && this._remove(u[c]);
          else
            this._remove && this._remove(u);
        }
        this._performRestAdd(o, i);
      }, r.prototype._performRestAdd = function(t, e) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n], a = e[i], o = To(a);
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
            var l = e[s], u = To(l);
            u === 0 ? (e[s] = o, a && n.push(s)) : u === 1 ? e[s] = [l, o] : l.push(o);
          }
        }
      }, r;
    }()
  ), mA = (
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
  function yA(r, t) {
    var e = {}, n = e.encode = {}, i = lt(), a = [], o = [], s = {};
    L(r.dimensions, function(v) {
      var c = r.getDimensionInfo(v), d = c.coordDim;
      if (d) {
        st(Rh.get(d) == null);
        var g = c.coordDimIndex;
        Mc(n, d)[g] = v, c.isExtraCoord || (i.set(d, 1), SA(c.type) && (a[0] = v), Mc(s, d)[g] = r.getDimensionIndex(c.name)), c.defaultTooltip && o.push(v);
      }
      Rh.each(function(p, m) {
        var _ = Mc(n, m), S = c.otherDims[m];
        S != null && S !== !1 && (_[S] = c.name);
      });
    });
    var l = [], u = {};
    i.each(function(v, c) {
      var d = n[c];
      u[c] = d[0], l = l.concat(d);
    }), e.dataDimsOnCoord = l, e.dataDimIndicesOnCoord = K(l, function(v) {
      return r.getDimensionInfo(v).storeDimIndex;
    }), e.encodeFirstDimNotExtra = u;
    var f = n.label;
    f && f.length && (a = f.slice());
    var h = n.tooltip;
    return h && h.length ? o = h.slice() : o.length || (o = a.slice()), n.defaultedLabel = a, n.defaultedTooltip = o, e.userOutput = new mA(s, t), e;
  }
  function Mc(r, t) {
    return r.hasOwnProperty(t) || (r[t] = []), r[t];
  }
  function _A(r) {
    return r === "category" ? "ordinal" : r === "time" ? "time" : "float";
  }
  function SA(r) {
    return !(r === "ordinal" || r === "time");
  }
  var Hl = (
    /** @class */
    function() {
      function r(t) {
        this.otherDims = {}, t != null && W(this, t);
      }
      return r;
    }()
  ), wA = kt(), bA = {
    float: "f",
    int: "i",
    ordinal: "o",
    number: "n",
    time: "t"
  }, w0 = (
    /** @class */
    function() {
      function r(t) {
        this.dimensions = t.dimensions, this._dimOmitted = t.dimensionOmitted, this.source = t.source, this._fullDimCount = t.fullDimensionCount, this._updateDimOmitted(t.dimensionOmitted);
      }
      return r.prototype.isDimensionOmitted = function() {
        return this._dimOmitted;
      }, r.prototype._updateDimOmitted = function(t) {
        this._dimOmitted = t, t && (this._dimNameMap || (this._dimNameMap = T0(this.source)));
      }, r.prototype.getSourceDimensionIndex = function(t) {
        return ut(this._dimNameMap.get(t), -1);
      }, r.prototype.getSourceDimension = function(t) {
        var e = this.source.dimensionsDefine;
        if (e)
          return e[t];
      }, r.prototype.makeStoreSchema = function() {
        for (var t = this._fullDimCount, e = Om(this.source), n = !C0(t), i = "", a = [], o = 0, s = 0; o < t; o++) {
          var l = void 0, u = void 0, f = void 0, h = this.dimensions[s];
          if (h && h.storeDimIndex === o)
            l = e ? h.name : null, u = h.type, f = h.ordinalMeta, s++;
          else {
            var v = this.getSourceDimension(o);
            v && (l = e ? v.name : null, u = v.type);
          }
          a.push({
            property: l,
            type: u,
            ordinalMeta: f
          }), e && l != null && (!h || !h.isCalculationCoord) && (i += n ? l.replace(/\`/g, "`1").replace(/\$/g, "`2") : l), i += "$", i += bA[u] || "f", f && (i += f.uid), i += "$";
        }
        var c = this.source, d = [c.seriesLayoutBy, c.startIndex, i].join("$$");
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
  function b0(r) {
    return r instanceof w0;
  }
  function x0(r) {
    for (var t = lt(), e = 0; e < (r || []).length; e++) {
      var n = r[e], i = j(n) ? n.name : n;
      i != null && t.get(i) == null && t.set(i, e);
    }
    return t;
  }
  function T0(r) {
    var t = wA(r);
    return t.dimNameMap || (t.dimNameMap = x0(r.dimensionsDefine));
  }
  function C0(r) {
    return r > 30;
  }
  var Co = j, yn = K, xA = typeof Int32Array > "u" ? Array : Int32Array, TA = "e\0\0", D0 = -1, CA = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"], DA = ["_approximateExtent"], M0, Wl, Do, aa, Ac, Ul, Pc, Ic = (
    /** @class */
    function() {
      function r(t, e) {
        this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !1, this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "lttbDownSample", "map"], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = ["downSample", "lttbDownSample"];
        var n, i = !1;
        b0(t) ? (n = t.dimensions, this._dimOmitted = t.isDimensionOmitted(), this._schema = t) : (i = !0, n = t), n = n || ["x", "y"];
        for (var a = {}, o = [], s = {}, l = !1, u = {}, f = 0; f < n.length; f++) {
          var h = n[f], v = Z(h) ? new Hl({
            name: h
          }) : h instanceof Hl ? h : new Hl(h), c = v.name;
          v.type = v.type || "float", v.coordDim || (v.coordDim = c, v.coordDimIndex = 0);
          var d = v.otherDims = v.otherDims || {};
          o.push(c), a[c] = v, u[c] != null && (l = !0), v.createInvertedIndices && (s[c] = []), d.itemName === 0 && (this._nameDimIdx = f), d.itemId === 0 && (this._idDimIdx = f), st(i || v.storeDimIndex >= 0), i && (v.storeDimIndex = f);
        }
        if (this.dimensions = o, this._dimInfos = a, this._initGetDimensionInfo(l), this.hostModel = e, this._invertedIndicesMap = s, this._dimOmitted) {
          var g = this._dimIdxToName = lt();
          L(o, function(p) {
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
        if (Mt(t) || t != null && !isNaN(t) && !this._getDimInfo(t) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(t) < 0))
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
        if (t instanceof qh && (a = t), !a) {
          var o = this.dimensions, s = Gh(t) || le(t) ? new Bm(t, o.length) : t;
          a = new qh();
          var l = yn(o, function(u) {
            return {
              type: i._dimInfos[u].type,
              property: u
            };
          });
          a.initData(s, l, n);
        }
        this._store = a, this._nameList = (e || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, a.count()), this._dimSummary = yA(this, this._schema), this.userOutput = this._dimSummary.userOutput;
      }, r.prototype.appendData = function(t) {
        var e = this._store.appendData(t);
        this._doInit(e[0], e[1]);
      }, r.prototype.appendValues = function(t, e) {
        var n = this._store.appendValues(t, e.length), i = n.start, a = n.end, o = this._shouldMakeIdFromName();
        if (this._updateOrdinalMeta(), e)
          for (var s = i; s < a; s++) {
            var l = s - i;
            this._nameList[s] = e[l], o && Pc(this, s);
          }
      }, r.prototype._updateOrdinalMeta = function() {
        for (var t = this._store, e = this.dimensions, n = 0; n < e.length; n++) {
          var i = this._dimInfos[e[n]];
          i.ordinalMeta && t.collectOrdinalMeta(i.storeDimIndex, i.ordinalMeta);
        }
      }, r.prototype._shouldMakeIdFromName = function() {
        var t = this._store.getProvider();
        return this._idDimIdx == null && t.getSource().sourceFormat !== Xr && !t.fillStorage;
      }, r.prototype._doInit = function(t, e) {
        if (!(t >= e)) {
          var n = this._store, i = n.getProvider();
          this._updateOrdinalMeta();
          var a = this._nameList, o = this._idList, s = i.getSource().sourceFormat, l = s === Je;
          if (l && !i.pure)
            for (var u = [], f = t; f < e; f++) {
              var h = i.getItem(f, u);
              if (!this.hasItemOption && Bb(h) && (this.hasItemOption = !0), h) {
                var v = h.name;
                a[f] == null && v != null && (a[f] = Tr(v, null));
                var c = h.id;
                o[f] == null && c != null && (o[f] = Tr(c, null));
              }
            }
          if (this._shouldMakeIdFromName())
            for (var f = t; f < e; f++)
              Pc(this, f);
          M0(this);
        }
      }, r.prototype.getApproximateExtent = function(t) {
        return this._approximateExtent[t] || this._store.getDataExtent(this._getStoreDimIndex(t));
      }, r.prototype.setApproximateExtent = function(t, e) {
        e = this.getDimension(e), this._approximateExtent[e] = t.slice();
      }, r.prototype.getCalculationInfo = function(t) {
        return this._calculationInfo[t];
      }, r.prototype.setCalculationInfo = function(t, e) {
        Co(t) ? W(this._calculationInfo, t) : this._calculationInfo[t] = e;
      }, r.prototype.getName = function(t) {
        var e = this.getRawIndex(t), n = this._nameList[e];
        return n == null && this._nameDimIdx != null && (n = Do(this, this._nameDimIdx, e)), n == null && (n = ""), n;
      }, r.prototype._getCategory = function(t, e) {
        var n = this._store.get(t, e), i = this._store.getOrdinalMeta(t);
        return i ? i.categories[n] : n;
      }, r.prototype.getId = function(t) {
        return Wl(this, this.getRawIndex(t));
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
        return X(t) ? i.getValues(yn(t, function(a) {
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
        return i == null || isNaN(i) ? D0 : i;
      }, r.prototype.indicesOfNearest = function(t, e, n) {
        return this._store.indicesOfNearest(this._getStoreDimIndex(t), e, n);
      }, r.prototype.each = function(t, e, n) {
        tt(t) && (n = e, e = t, t = []);
        var i = n || this, a = yn(aa(t), this._getStoreDimIndex, this);
        this._store.each(a, i ? Pt(e, i) : e);
      }, r.prototype.filterSelf = function(t, e, n) {
        tt(t) && (n = e, e = t, t = []);
        var i = n || this, a = yn(aa(t), this._getStoreDimIndex, this);
        return this._store = this._store.filter(a, i ? Pt(e, i) : e), this;
      }, r.prototype.selectRange = function(t) {
        var e = this, n = {}, i = It(t);
        return L(i, function(a) {
          var o = e._getStoreDimIndex(a);
          n[o] = t[a];
        }), this._store = this._store.selectRange(n), this;
      }, r.prototype.mapArray = function(t, e, n) {
        tt(t) && (n = e, e = t, t = []), n = n || this;
        var i = [];
        return this.each(t, function() {
          i.push(e && e.apply(this, arguments));
        }, n), i;
      }, r.prototype.map = function(t, e, n, i) {
        var a = n || i || this, o = yn(aa(t), this._getStoreDimIndex, this), s = Ul(this);
        return s._store = this._store.map(o, a ? Pt(e, a) : e), s;
      }, r.prototype.modify = function(t, e, n, i) {
        var a = this, o = n || i || this;
        L(aa(t), function(l) {
          var u = a.getDimensionInfo(l);
          u.isCalculationCoord || console.error("Danger: only stack dimension can be modified");
        });
        var s = yn(aa(t), this._getStoreDimIndex, this);
        this._store.modify(s, o ? Pt(e, o) : e);
      }, r.prototype.downSample = function(t, e, n, i) {
        var a = Ul(this);
        return a._store = this._store.downSample(this._getStoreDimIndex(t), e, n, i), a;
      }, r.prototype.lttbDownSample = function(t, e) {
        var n = Ul(this);
        return n._store = this._store.lttbDownSample(this._getStoreDimIndex(t), e), n;
      }, r.prototype.getRawDataItem = function(t) {
        return this._store.getRawDataItem(t);
      }, r.prototype.getItemModel = function(t) {
        var e = this.hostModel, n = this.getRawDataItem(t);
        return new Rt(n, e, e && e.ecModel);
      }, r.prototype.diff = function(t) {
        var e = this;
        return new gA(t ? t.getStore().getIndices() : [], this.getStore().getIndices(), function(n) {
          return Wl(t, n);
        }, function(n) {
          return Wl(e, n);
        });
      }, r.prototype.getVisual = function(t) {
        var e = this._visual;
        return e && e[t];
      }, r.prototype.setVisual = function(t, e) {
        this._visual = this._visual || {}, Co(t) ? W(this._visual, t) : this._visual[t] = e;
      }, r.prototype.getItemVisual = function(t, e) {
        var n = this._itemVisuals[t], i = n && n[e];
        return i ?? this.getVisual(e);
      }, r.prototype.hasItemVisual = function() {
        return this._itemVisuals.length > 0;
      }, r.prototype.ensureUniqueItemVisual = function(t, e) {
        var n = this._itemVisuals, i = n[t];
        i || (i = n[t] = {});
        var a = i[e];
        return a == null && (a = this.getVisual(e), X(a) ? a = a.slice() : Co(a) && (a = W({}, a)), i[e] = a), a;
      }, r.prototype.setItemVisual = function(t, e, n) {
        var i = this._itemVisuals[t] || {};
        this._itemVisuals[t] = i, Co(e) ? W(i, e) : i[e] = n;
      }, r.prototype.clearAllVisual = function() {
        this._visual = {}, this._itemVisuals = [];
      }, r.prototype.setLayout = function(t, e) {
        Co(t) ? W(this._layout, t) : this._layout[t] = e;
      }, r.prototype.getLayout = function(t) {
        return this._layout[t];
      }, r.prototype.getItemLayout = function(t) {
        return this._itemLayouts[t];
      }, r.prototype.setItemLayout = function(t, e, n) {
        this._itemLayouts[t] = n ? W(this._itemLayouts[t] || {}, e) : e;
      }, r.prototype.clearItemLayouts = function() {
        this._itemLayouts.length = 0;
      }, r.prototype.setItemGraphicEl = function(t, e) {
        var n = this.hostModel && this.hostModel.seriesIndex;
        qx(n, this.dataType, t, e), this._graphicEls[t] = e;
      }, r.prototype.getItemGraphicEl = function(t) {
        return this._graphicEls[t];
      }, r.prototype.eachItemGraphicEl = function(t, e) {
        L(this._graphicEls, function(n, i) {
          n && t && t.call(e, n, i);
        });
      }, r.prototype.cloneShallow = function(t) {
        return t || (t = new r(this._schema ? this._schema : yn(this.dimensions, this._getDimInfo, this), this.hostModel)), Ac(t, this), t._store = this._store, t;
      }, r.prototype.wrapMethod = function(t, e) {
        var n = this[t];
        tt(n) && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {
          var i = n.apply(this, arguments);
          return e.apply(this, [i].concat($o(arguments)));
        });
      }, r.internalField = function() {
        M0 = function(t) {
          var e = t._invertedIndicesMap;
          L(e, function(n, i) {
            var a = t._dimInfos[i], o = a.ordinalMeta, s = t._store;
            if (o) {
              n = e[i] = new xA(o.categories.length);
              for (var l = 0; l < n.length; l++)
                n[l] = D0;
              for (var l = 0; l < s.count(); l++)
                n[s.get(a.storeDimIndex, l)] = l;
            }
          });
        }, Do = function(t, e, n) {
          return Tr(t._getCategory(e, n), null);
        }, Wl = function(t, e) {
          var n = t._idList[e];
          return n == null && t._idDimIdx != null && (n = Do(t, t._idDimIdx, e)), n == null && (n = TA + e), n;
        }, aa = function(t) {
          return X(t) || (t = t != null ? [t] : []), t;
        }, Ul = function(t) {
          var e = new r(t._schema ? t._schema : yn(t.dimensions, t._getDimInfo, t), t.hostModel);
          return Ac(e, t), e;
        }, Ac = function(t, e) {
          L(CA.concat(e.__wrappedMethods || []), function(n) {
            e.hasOwnProperty(n) && (t[n] = e[n]);
          }), t.__wrappedMethods = e.__wrappedMethods, L(DA, function(n) {
            t[n] = vt(e[n]);
          }), t._calculationInfo = W({}, e._calculationInfo);
        }, Pc = function(t, e) {
          var n = t._nameList, i = t._idList, a = t._nameDimIdx, o = t._idDimIdx, s = n[e], l = i[e];
          if (s == null && a != null && (n[e] = s = Do(t, a, e)), l == null && o != null && (i[e] = l = Do(t, o, e)), l == null && s != null) {
            var u = t._nameRepeatCount, f = u[s] = (u[s] || 0) + 1;
            l = s, f > 1 && (l += "__ec__" + f), i[e] = l;
          }
        };
      }(), r;
    }()
  );
  function MA(r, t) {
    return Lc(r, t).dimensions;
  }
  function Lc(r, t) {
    Gh(r) || (r = Wh(r)), t = t || {};
    var e = t.coordDimensions || [], n = t.dimensionsDefine || r.dimensionsDefine || [], i = lt(), a = [], o = PA(r, e, n, t.dimensionsCount), s = t.canOmitUnusedDimensions && C0(o), l = n === r.dimensionsDefine, u = l ? T0(r) : x0(n), f = t.encodeDefine;
    !f && t.encodeDefaulter && (f = t.encodeDefaulter(r, o));
    for (var h = lt(f), v = new Xm(o), c = 0; c < v.length; c++)
      v[c] = -1;
    function d(P) {
      var E = v[P];
      if (E < 0) {
        var A = n[P], k = j(A) ? A : {
          name: A
        }, N = new Hl(), B = k.name;
        B != null && u.get(B) != null && (N.name = N.displayName = B), k.type != null && (N.type = k.type), k.displayName != null && (N.displayName = k.displayName);
        var z = a.length;
        return v[P] = z, N.storeDimIndex = P, a.push(N), N;
      }
      return a[E];
    }
    if (!s)
      for (var c = 0; c < o; c++)
        d(c);
    h.each(function(P, E) {
      var A = ce(P).slice();
      if (A.length === 1 && !Z(A[0]) && A[0] < 0) {
        h.set(E, !1);
        return;
      }
      var k = h.set(E, []);
      L(A, function(N, B) {
        var z = Z(N) ? u.get(N) : N;
        z != null && z < o && (k[B] = z, p(d(z), E, B));
      });
    });
    var g = 0;
    L(e, function(P) {
      var E, A, k, N;
      if (Z(P))
        E = P, N = {};
      else {
        N = P, E = N.name;
        var B = N.ordinalMeta;
        N.ordinalMeta = null, N = W({}, N), N.ordinalMeta = B, A = N.dimsDef, k = N.otherDims, N.name = N.coordDim = N.coordDimIndex = N.dimsDef = N.otherDims = null;
      }
      var z = h.get(E);
      if (z !== !1) {
        if (z = ce(z), !z.length)
          for (var G = 0; G < (A && A.length || 1); G++) {
            for (; g < o && d(g).coordDim != null; )
              g++;
            g < o && z.push(g++);
          }
        L(z, function(J, U) {
          var Y = d(J);
          if (l && N.type != null && (Y.type = N.type), p(St(Y, N), E, U), Y.name == null && A) {
            var Q = A[U];
            !j(Q) && (Q = {
              name: Q
            }), Y.name = Y.displayName = Q.name, Y.defaultTooltip = Q.defaultTooltip;
          }
          k && St(Y.otherDims, k);
        });
      }
    });
    function p(P, E, A) {
      Rh.get(E) != null ? P.otherDims[E] = A : (P.coordDim = E, P.coordDimIndex = A, i.set(E, !0));
    }
    var m = t.generateCoord, _ = t.generateCoordCount, S = _ != null;
    _ = m ? _ || 1 : 0;
    var b = m || "value";
    function C(P) {
      P.name == null && (P.name = P.coordDim);
    }
    if (s)
      L(a, function(P) {
        C(P);
      }), a.sort(function(P, E) {
        return P.storeDimIndex - E.storeDimIndex;
      });
    else
      for (var T = 0; T < o; T++) {
        var D = d(T), M = D.coordDim;
        M == null && (D.coordDim = IA(b, i, S), D.coordDimIndex = 0, (!m || _ <= 0) && (D.isExtraCoord = !0), _--), C(D), D.type == null && (pm(r, T) === Qt.Must || D.isExtraCoord && (D.otherDims.itemName != null || D.otherDims.seriesName != null)) && (D.type = "ordinal");
      }
    return AA(a), new w0({
      source: r,
      dimensions: a,
      fullDimensionCount: o,
      dimensionOmitted: s
    });
  }
  function AA(r) {
    for (var t = lt(), e = 0; e < r.length; e++) {
      var n = r[e], i = n.name, a = t.get(i) || 0;
      a > 0 && (n.name = i + (a - 1)), a++, t.set(i, a);
    }
  }
  function PA(r, t, e, n) {
    var i = Math.max(r.dimensionsDetectedCount || 1, t.length, e.length, n || 0);
    return L(t, function(a) {
      var o;
      j(a) && (o = a.dimsDef) && (i = Math.max(i, o.length));
    }), i;
  }
  function IA(r, t, e) {
    if (e || t.hasKey(r)) {
      for (var n = 0; t.hasKey(r + n); )
        n++;
      r += n;
    }
    return t.set(r, !0), r;
  }
  var LA = (
    /** @class */
    function() {
      function r(t) {
        this.coordSysDims = [], this.axisMap = lt(), this.categoryAxisMap = lt(), this.coordSysName = t;
      }
      return r;
    }()
  );
  function EA(r) {
    var t = r.get("coordinateSystem"), e = new LA(t), n = RA[t];
    if (n)
      return n(r, e, e.axisMap, e.categoryAxisMap), e;
  }
  var RA = {
    cartesian2d: function(r, t, e, n) {
      var i = r.getReferringComponents("xAxis", lr).models[0], a = r.getReferringComponents("yAxis", lr).models[0];
      {
        if (!i)
          throw new Error('xAxis "' + Jr(r.get("xAxisIndex"), r.get("xAxisId"), 0) + '" not found');
        if (!a)
          throw new Error('yAxis "' + Jr(r.get("xAxisIndex"), r.get("yAxisId"), 0) + '" not found');
      }
      t.coordSysDims = ["x", "y"], e.set("x", i), e.set("y", a), oa(i) && (n.set("x", i), t.firstCategoryDimIndex = 0), oa(a) && (n.set("y", a), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
    },
    singleAxis: function(r, t, e, n) {
      var i = r.getReferringComponents("singleAxis", lr).models[0];
      if (!i)
        throw new Error("singleAxis should be specified.");
      t.coordSysDims = ["single"], e.set("single", i), oa(i) && (n.set("single", i), t.firstCategoryDimIndex = 0);
    },
    polar: function(r, t, e, n) {
      var i = r.getReferringComponents("polar", lr).models[0], a = i.findAxisModel("radiusAxis"), o = i.findAxisModel("angleAxis");
      {
        if (!o)
          throw new Error("angleAxis option not found");
        if (!a)
          throw new Error("radiusAxis option not found");
      }
      t.coordSysDims = ["radius", "angle"], e.set("radius", a), e.set("angle", o), oa(a) && (n.set("radius", a), t.firstCategoryDimIndex = 0), oa(o) && (n.set("angle", o), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
    },
    geo: function(r, t, e, n) {
      t.coordSysDims = ["lng", "lat"];
    },
    parallel: function(r, t, e, n) {
      var i = r.ecModel, a = i.getComponent("parallel", r.get("parallelIndex")), o = t.coordSysDims = a.dimensions.slice();
      L(a.parallelAxisIndex, function(s, l) {
        var u = i.getComponent("parallelAxis", s), f = o[l];
        e.set(f, u), oa(u) && (n.set(f, u), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = l));
      });
    }
  };
  function oa(r) {
    return r.get("type") === "category";
  }
  function A0(r, t, e) {
    e = e || {};
    var n = e.byIndex, i = e.stackedCoordDimension, a, o, s;
    OA(t) ? a = t : (o = t.schema, a = o.dimensions, s = t.store);
    var l = !!(r && r.get("stack")), u, f, h, v;
    if (L(a, function(_, S) {
      Z(_) && (a[S] = _ = {
        name: _
      }), l && !_.isExtraCoord && (!n && !u && _.ordinalMeta && (u = _), !f && _.type !== "ordinal" && _.type !== "time" && (!i || i === _.coordDim) && (f = _));
    }), f && !n && !u && (n = !0), f) {
      h = "__\0ecstackresult_" + r.id, v = "__\0ecstackedover_" + r.id, u && (u.createInvertedIndices = !0);
      var c = f.coordDim, d = f.type, g = 0;
      L(a, function(_) {
        _.coordDim === c && g++;
      });
      var p = {
        name: h,
        coordDim: c,
        coordDimIndex: g,
        type: d,
        isExtraCoord: !0,
        isCalculationCoord: !0,
        storeDimIndex: a.length
      }, m = {
        name: v,
        // This dimension contains stack base (generally, 0), so do not set it as
        // `stackedDimCoordDim` to avoid extent calculation, consider log scale.
        coordDim: v,
        coordDimIndex: g + 1,
        type: d,
        isExtraCoord: !0,
        isCalculationCoord: !0,
        storeDimIndex: a.length + 1
      };
      o ? (s && (p.storeDimIndex = s.ensureCalculationDimension(v, d), m.storeDimIndex = s.ensureCalculationDimension(h, d)), o.appendCalculationDimension(p), o.appendCalculationDimension(m)) : (a.push(p), a.push(m));
    }
    return {
      stackedDimension: f && f.name,
      stackedByDimension: u && u.name,
      isStackedByIndex: n,
      stackedOverDimension: v,
      stackResultDimension: h
    };
  }
  function OA(r) {
    return !b0(r.schema);
  }
  function gi(r, t) {
    return !!t && t === r.getCalculationInfo("stackedDimension");
  }
  function P0(r, t) {
    return gi(r, t) ? r.getCalculationInfo("stackResultDimension") : t;
  }
  function kA(r, t) {
    var e = r.get("coordinateSystem"), n = _l.get(e), i;
    return t && t.coordSysDims && (i = K(t.coordSysDims, function(a) {
      var o = {
        name: a
      }, s = t.axisMap.get(a);
      if (s) {
        var l = s.get("type");
        o.type = _A(l);
      }
      return o;
    })), i || (i = n && (n.getDimensionsInfo ? n.getDimensionsInfo() : n.dimensions.slice()) || ["x", "y"]), i;
  }
  function NA(r, t, e) {
    var n, i;
    return e && L(r, function(a, o) {
      var s = a.coordDim, l = e.categoryAxisMap.get(s);
      l && (n == null && (n = o), a.ordinalMeta = l.getOrdinalMeta(), t && (a.createInvertedIndices = !0)), a.otherDims.itemName != null && (i = !0);
    }), !i && n != null && (r[n].otherDims.itemName = 0), n;
  }
  function Yl(r, t, e) {
    e = e || {};
    var n = t.getSourceManager(), i, a = !1;
    r ? (a = !0, i = Wh(r)) : (i = n.getSource(), a = i.sourceFormat === Je);
    var o = EA(t), s = kA(t, o), l = e.useEncodeDefaulter, u = tt(l) ? l : l ? Ot(AC, s, t) : null, f = {
      coordDimensions: s,
      generateCoord: e.generateCoord,
      encodeDefine: t.getEncode(),
      encodeDefaulter: u,
      canOmitUnusedDimensions: !a
    }, h = Lc(i, f), v = NA(h.dimensions, e.createInvertedIndices, o), c = a ? null : n.getSharedDataStore(h), d = A0(t, {
      schema: h,
      store: c
    }), g = new Ic(h, t);
    g.setCalculationInfo(d);
    var p = v != null && BA(i) ? function(m, _, S, b) {
      return b === v ? S : this.defaultDimValueGetter(m, _, S, b);
    } : null;
    return g.hasItemOption = !1, g.initData(
      // Try to reuse the data store in sourceManager if using dataset.
      a ? i : c,
      null,
      p
    ), g;
  }
  function BA(r) {
    if (r.sourceFormat === Je) {
      var t = FA(r.data || []);
      return !X(Na(t));
    }
  }
  function FA(r) {
    for (var t = 0; t < r.length && r[t] == null; )
      t++;
    return r[t];
  }
  var Er = (
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
  Cs(Er);
  var zA = 0, Ec = (
    /** @class */
    function() {
      function r(t) {
        this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this.uid = ++zA;
      }
      return r.createByAxisModel = function(t) {
        var e = t.option, n = e.data, i = n && K(n, VA);
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
        if (!Z(t) && !n)
          return t;
        if (n && !this._deduplication)
          return e = this.categories.length, this.categories[e] = t, e;
        var i = this._getOrCreateMap();
        return e = i.get(t), e == null && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e)) : e = NaN), e;
      }, r.prototype._getOrCreateMap = function() {
        return this._map || (this._map = lt(this.categories));
      }, r;
    }()
  );
  function VA(r) {
    return j(r) && r.value != null ? r.value : r + "";
  }
  function GA(r) {
    var t = Math.pow(10, Oa(Math.abs(r))), e = Math.abs(r / t);
    return e === 0 || e === 1 || e === 2 || e === 3 || e === 5;
  }
  function Rc(r) {
    return r.type === "interval" || r.type === "log";
  }
  function HA(r, t, e, n) {
    var i = {}, a = r[1] - r[0], o = i.interval = Pf(a / t, !0);
    e != null && o < e && (o = i.interval = e), n != null && o > n && (o = i.interval = n);
    var s = i.intervalPrecision = I0(o), l = i.niceTickExtent = [zt(Math.ceil(r[0] / o) * o, s), zt(Math.floor(r[1] / o) * o, s)];
    return WA(l, r), i;
  }
  function Oc(r) {
    var t = Math.pow(10, Oa(r)), e = r / t;
    return e ? e === 2 ? e = 3 : e === 3 ? e = 5 : e *= 2 : e = 1, zt(e * t);
  }
  function I0(r) {
    return xr(r) + 2;
  }
  function L0(r, t, e) {
    r[t] = Math.max(Math.min(r[t], e[1]), e[0]);
  }
  function WA(r, t) {
    !isFinite(r[0]) && (r[0] = t[0]), !isFinite(r[1]) && (r[1] = t[1]), L0(r, 0, t), L0(r, 1, t), r[0] > r[1] && (r[0] = r[1]);
  }
  function Xl(r, t) {
    return r >= t[0] && r <= t[1];
  }
  function $l(r, t) {
    return t[1] === t[0] ? 0.5 : (r - t[0]) / (t[1] - t[0]);
  }
  function ql(r, t) {
    return r * (t[1] - t[0]) + t[0];
  }
  var kc = (
    /** @class */
    function(r) {
      x(t, r);
      function t(e) {
        var n = r.call(this, e) || this;
        n.type = "ordinal";
        var i = n.getSetting("ordinalMeta");
        return i || (i = new Ec({})), X(i) && (i = new Ec({
          categories: K(i, function(a) {
            return j(a) ? a.value : a;
          })
        })), n._ordinalMeta = i, n._extent = n.getSetting("extent") || [0, i.categories.length - 1], n;
      }
      return t.prototype.parse = function(e) {
        return e == null ? NaN : Z(e) ? this._ordinalMeta.getOrdinal(e) : Math.round(e);
      }, t.prototype.contain = function(e) {
        return e = this.parse(e), Xl(e, this._extent) && this._ordinalMeta.categories[e] != null;
      }, t.prototype.normalize = function(e) {
        return e = this._getTickNumber(this.parse(e)), $l(e, this._extent);
      }, t.prototype.scale = function(e) {
        return e = Math.round(ql(e, this._extent)), this.getRawOrdinalNumber(e);
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
    }(Er)
  );
  Er.registerClass(kc);
  var mi = zt, sa = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = "interval", e._interval = 0, e._intervalPrecision = 2, e;
      }
      return t.prototype.parse = function(e) {
        return e;
      }, t.prototype.contain = function(e) {
        return Xl(e, this._extent);
      }, t.prototype.normalize = function(e) {
        return $l(e, this._extent);
      }, t.prototype.scale = function(e) {
        return ql(e, this._extent);
      }, t.prototype.setExtent = function(e, n) {
        var i = this._extent;
        isNaN(e) || (i[0] = parseFloat(e)), isNaN(n) || (i[1] = parseFloat(n));
      }, t.prototype.unionExtent = function(e) {
        var n = this._extent;
        e[0] < n[0] && (n[0] = e[0]), e[1] > n[1] && (n[1] = e[1]), this.setExtent(n[0], n[1]);
      }, t.prototype.getInterval = function() {
        return this._interval;
      }, t.prototype.setInterval = function(e) {
        this._interval = e, this._niceExtent = this._extent.slice(), this._intervalPrecision = I0(e);
      }, t.prototype.getTicks = function(e) {
        var n = this._interval, i = this._extent, a = this._niceExtent, o = this._intervalPrecision, s = [];
        if (!n)
          return s;
        var l = 1e4;
        i[0] < a[0] && (e ? s.push({
          value: mi(a[0] - n, o)
        }) : s.push({
          value: i[0]
        }));
        for (var u = a[0]; u <= a[1] && (s.push({
          value: u
        }), u = mi(u + n, o), u !== s[s.length - 1].value); )
          if (s.length > l)
            return [];
        var f = s.length ? s[s.length - 1].value : a[1];
        return i[1] > f && (e ? s.push({
          value: mi(f + n, o)
        }) : s.push({
          value: i[1]
        })), s;
      }, t.prototype.getMinorTicks = function(e) {
        for (var n = this.getTicks(!0), i = [], a = this.getExtent(), o = 1; o < n.length; o++) {
          for (var s = n[o], l = n[o - 1], u = 0, f = [], h = s.value - l.value, v = h / e; u < e - 1; ) {
            var c = mi(l.value + (u + 1) * v);
            c > a[0] && c < a[1] && f.push(c), u++;
          }
          i.push(f);
        }
        return i;
      }, t.prototype.getLabel = function(e, n) {
        if (e == null)
          return "";
        var i = n && n.precision;
        i == null ? i = xr(e.value) || 0 : i === "auto" && (i = this._intervalPrecision);
        var a = mi(e.value, i, !0);
        return Mh(a);
      }, t.prototype.calcNiceTicks = function(e, n, i) {
        e = e || 5;
        var a = this._extent, o = a[1] - a[0];
        if (isFinite(o)) {
          o < 0 && (o = -o, a.reverse());
          var s = HA(a, e, n, i);
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
        e.fixMin || (n[0] = mi(Math.floor(n[0] / o) * o)), e.fixMax || (n[1] = mi(Math.ceil(n[1] / o) * o));
      }, t.prototype.setNiceExtent = function(e, n) {
        this._niceExtent = [e, n];
      }, t.type = "interval", t;
    }(Er)
  );
  Er.registerClass(sa);
  var E0 = typeof Float32Array < "u", UA = E0 ? Float32Array : Array;
  function qr(r) {
    return X(r) ? E0 ? new Float32Array(r) : r : new UA(r);
  }
  var YA = "__ec_stack_";
  function Nc(r) {
    return r.get("stack") || YA + r.seriesIndex;
  }
  function Bc(r) {
    return r.dim + r.index;
  }
  function R0(r, t) {
    var e = [];
    return t.eachSeriesByType(r, function(n) {
      k0(n) && e.push(n);
    }), e;
  }
  function XA(r) {
    var t = {};
    L(r, function(l) {
      var u = l.coordinateSystem, f = u.getBaseAxis();
      if (!(f.type !== "time" && f.type !== "value"))
        for (var h = l.getData(), v = f.dim + "_" + f.index, c = h.getDimensionIndex(h.mapDimension(f.dim)), d = h.getStore(), g = 0, p = d.count(); g < p; ++g) {
          var m = d.get(c, g);
          t[v] ? t[v].push(m) : t[v] = [m];
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
  function O0(r) {
    var t = XA(r), e = [];
    return L(r, function(n) {
      var i = n.coordinateSystem, a = i.getBaseAxis(), o = a.getExtent(), s;
      if (a.type === "category")
        s = a.getBandWidth();
      else if (a.type === "value" || a.type === "time") {
        var l = a.dim + "_" + a.index, u = t[l], f = Math.abs(o[1] - o[0]), h = a.scale.getExtent(), v = Math.abs(h[1] - h[0]);
        s = u ? f / v * u : f;
      } else {
        var c = n.getData();
        s = Math.abs(o[1] - o[0]) / c.count();
      }
      var d = Lt(n.get("barWidth"), s), g = Lt(n.get("barMaxWidth"), s), p = Lt(
        // barMinWidth by default is 0.5 / 1 in cartesian. Because in value axis,
        // the auto-calculated bar width might be less than 0.5 / 1.
        n.get("barMinWidth") || (N0(n) ? 0.5 : 1),
        s
      ), m = n.get("barGap"), _ = n.get("barCategoryGap");
      e.push({
        bandWidth: s,
        barWidth: d,
        barMaxWidth: g,
        barMinWidth: p,
        barGap: m,
        barCategoryGap: _,
        axisKey: Bc(a),
        stackId: Nc(n)
      });
    }), $A(e);
  }
  function $A(r) {
    var t = {};
    L(r, function(n, i) {
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
      var v = n.barMinWidth;
      v && (l[u].minWidth = v);
      var c = n.barGap;
      c != null && (s.gap = c);
      var d = n.barCategoryGap;
      d != null && (s.categoryGap = d);
    });
    var e = {};
    return L(t, function(n, i) {
      e[i] = {};
      var a = n.stacks, o = n.bandWidth, s = n.categoryGap;
      if (s == null) {
        var l = It(a).length;
        s = Math.max(35 - l * 4, 15) + "%";
      }
      var u = Lt(s, o), f = Lt(n.gap, 1), h = n.remainedWidth, v = n.autoWidthCount, c = (h - u) / (v + (v - 1) * f);
      c = Math.max(c, 0), L(a, function(m) {
        var _ = m.maxWidth, S = m.minWidth;
        if (m.width) {
          var b = m.width;
          _ && (b = Math.min(b, _)), S && (b = Math.max(b, S)), m.width = b, h -= b + f * b, v--;
        } else {
          var b = c;
          _ && _ < b && (b = Math.min(_, h)), S && S > b && (b = S), b !== c && (m.width = b, h -= b + f * b, v--);
        }
      }), c = (h - u) / (v + (v - 1) * f), c = Math.max(c, 0);
      var d = 0, g;
      L(a, function(m, _) {
        m.width || (m.width = c), g = m, d += m.width * (1 + f);
      }), g && (d -= g.width * f);
      var p = -d / 2;
      L(a, function(m, _) {
        e[i][_] = e[i][_] || {
          bandWidth: o,
          offset: p,
          width: m.width
        }, p += m.width * (1 + f);
      });
    }), e;
  }
  function qA(r, t, e) {
    if (r && t) {
      var n = r[Bc(t)];
      return n != null && e != null ? n[Nc(e)] : n;
    }
  }
  function ZA(r, t) {
    var e = R0(r, t), n = O0(e);
    L(e, function(i) {
      var a = i.getData(), o = i.coordinateSystem, s = o.getBaseAxis(), l = Nc(i), u = n[Bc(s)][l], f = u.offset, h = u.width;
      a.setLayout({
        bandWidth: u.bandWidth,
        offset: f,
        size: h
      });
    });
  }
  function KA(r) {
    return {
      seriesType: r,
      plan: Jh(),
      reset: function(t) {
        if (k0(t)) {
          var e = t.getData(), n = t.coordinateSystem, i = n.getBaseAxis(), a = n.getOtherAxis(i), o = e.getDimensionIndex(e.mapDimension(a.dim)), s = e.getDimensionIndex(e.mapDimension(i.dim)), l = t.get("showBackground", !0), u = e.mapDimension(a.dim), f = e.getCalculationInfo("stackResultDimension"), h = gi(e, u) && !!e.getCalculationInfo("stackedOnSeries"), v = a.isHorizontal(), c = jA(i, a), d = N0(t), g = t.get("barMinHeight") || 0, p = f && e.getDimensionIndex(f), m = e.getLayout("size"), _ = e.getLayout("offset");
          return {
            progress: function(S, b) {
              for (var C = S.count, T = d && qr(C * 3), D = d && l && qr(C * 3), M = d && qr(C), P = n.master.getRect(), E = v ? P.width : P.height, A, k = b.getStore(), N = 0; (A = S.next()) != null; ) {
                var B = k.get(h ? p : o, A), z = k.get(s, A), G = c, J = void 0;
                h && (J = +B - k.get(o, A));
                var U = void 0, Y = void 0, Q = void 0, ot = void 0;
                if (v) {
                  var it = n.dataToPoint([B, z]);
                  if (h) {
                    var ct = n.dataToPoint([J, z]);
                    G = ct[0];
                  }
                  U = G, Y = it[1] + _, Q = it[0] - G, ot = m, Math.abs(Q) < g && (Q = (Q < 0 ? -1 : 1) * g);
                } else {
                  var it = n.dataToPoint([z, B]);
                  if (h) {
                    var ct = n.dataToPoint([z, J]);
                    G = ct[1];
                  }
                  U = it[0] + _, Y = G, Q = m, ot = it[1] - G, Math.abs(ot) < g && (ot = (ot <= 0 ? -1 : 1) * g);
                }
                d ? (T[N] = U, T[N + 1] = Y, T[N + 2] = v ? Q : ot, D && (D[N] = v ? P.x : U, D[N + 1] = v ? Y : P.y, D[N + 2] = E), M[A] = A) : b.setItemLayout(A, {
                  x: U,
                  y: Y,
                  width: Q,
                  height: ot
                }), N += 3;
              }
              d && b.setLayout({
                largePoints: T,
                largeDataIndices: M,
                largeBackgroundPoints: D,
                valueAxisHorizontal: v
              });
            }
          };
        }
      }
    };
  }
  function k0(r) {
    return r.coordinateSystem && r.coordinateSystem.type === "cartesian2d";
  }
  function N0(r) {
    return r.pipelineContext && r.pipelineContext.large;
  }
  function jA(r, t) {
    return t.toGlobalCoord(t.dataToCoord(t.type === "log" ? 1 : 0));
  }
  var QA = function(r, t, e, n) {
    for (; e < n; ) {
      var i = e + n >>> 1;
      r[i][1] < t ? e = i + 1 : n = i;
    }
    return e;
  }, B0 = (
    /** @class */
    function(r) {
      x(t, r);
      function t(e) {
        var n = r.call(this, e) || this;
        return n.type = "time", n;
      }
      return t.prototype.getLabel = function(e) {
        var n = this.getSetting("useUTC");
        return no(e.value, Jg[gC(Ki(this._minLevelUnit))] || Jg.second, n, this.getSetting("locale"));
      }, t.prototype.getFormattedLabel = function(e, n, i) {
        var a = this.getSetting("useUTC"), o = this.getSetting("locale");
        return mC(e, n, i, o, a);
      }, t.prototype.getTicks = function() {
        var e = this._interval, n = this._extent, i = [];
        if (!e)
          return i;
        i.push({
          value: n[0],
          level: 0
        });
        var a = this.getSetting("useUTC"), o = aP(this._minLevelUnit, this._approxInterval, a, n);
        return i = i.concat(o), i.push({
          value: n[1],
          level: 0
        }), i;
      }, t.prototype.calcNiceExtent = function(e) {
        var n = this._extent;
        if (n[0] === n[1] && (n[0] -= Qe, n[1] += Qe), n[1] === -1 / 0 && n[0] === 1 / 0) {
          var i = /* @__PURE__ */ new Date();
          n[1] = +new Date(i.getFullYear(), i.getMonth(), i.getDate()), n[0] = n[1] - Qe;
        }
        this.calcNiceTicks(e.splitNumber, e.minInterval, e.maxInterval);
      }, t.prototype.calcNiceTicks = function(e, n, i) {
        e = e || 10;
        var a = this._extent, o = a[1] - a[0];
        this._approxInterval = o / e, n != null && this._approxInterval < n && (this._approxInterval = n), i != null && this._approxInterval > i && (this._approxInterval = i);
        var s = Zl.length, l = Math.min(QA(Zl, this._approxInterval, 0, s), s - 1);
        this._interval = Zl[l][1], this._minLevelUnit = Zl[Math.max(l - 1, 0)][0];
      }, t.prototype.parse = function(e) {
        return Mt(e) ? e : +Xe(e);
      }, t.prototype.contain = function(e) {
        return Xl(this.parse(e), this._extent);
      }, t.prototype.normalize = function(e) {
        return $l(this.parse(e), this._extent);
      }, t.prototype.scale = function(e) {
        return ql(e, this._extent);
      }, t.type = "time", t;
    }(sa)
  ), Zl = [
    // Format                           interval
    ["second", xh],
    ["minute", Th],
    ["hour", eo],
    ["quarter-day", eo * 6],
    ["half-day", eo * 12],
    ["day", Qe * 1.2],
    ["half-week", Qe * 3.5],
    ["week", Qe * 7],
    ["month", Qe * 31],
    ["quarter", Qe * 95],
    ["half-year", Qg / 2],
    ["year", Qg]
    // 1Y
  ];
  function JA(r, t, e, n) {
    var i = Xe(t), a = Xe(e), o = function(d) {
      return rm(i, d, n) === rm(a, d, n);
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
    }, v = function() {
      return h() && o("second");
    }, c = function() {
      return v() && o("millisecond");
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
        return v();
      case "millisecond":
        return c();
    }
  }
  function tP(r, t) {
    return r /= Qe, r > 16 ? 16 : r > 7.5 ? 7 : r > 3.5 ? 4 : r > 1.5 ? 2 : 1;
  }
  function eP(r) {
    var t = 30 * Qe;
    return r /= t, r > 6 ? 6 : r > 3 ? 3 : r > 2 ? 2 : 1;
  }
  function rP(r) {
    return r /= eo, r > 12 ? 12 : r > 6 ? 6 : r > 3.5 ? 4 : r > 2 ? 2 : 1;
  }
  function F0(r, t) {
    return r /= t ? Th : xh, r > 30 ? 30 : r > 20 ? 20 : r > 15 ? 15 : r > 10 ? 10 : r > 5 ? 5 : r > 2 ? 2 : 1;
  }
  function nP(r) {
    return Pf(r, !0);
  }
  function iP(r, t, e) {
    var n = new Date(r);
    switch (Ki(t)) {
      case "year":
      case "month":
        n[nm(e)](0);
      case "day":
        n[im(e)](1);
      case "hour":
        n[am(e)](0);
      case "minute":
        n[om(e)](0);
      case "second":
        n[sm(e)](0), n[lm(e)](0);
    }
    return n.getTime();
  }
  function aP(r, t, e, n) {
    var i = 1e4, a = tm, o = 0;
    function s(E, A, k, N, B, z, G) {
      for (var J = new Date(A), U = A, Y = J[N](); U < k && U <= n[1]; )
        G.push({
          value: U
        }), Y += E, J[B](Y), U = J.getTime();
      G.push({
        value: U,
        notAdd: !0
      });
    }
    function l(E, A, k) {
      var N = [], B = !A.length;
      if (!JA(Ki(E), n[0], n[1], e)) {
        B && (A = [{
          // TODO Optimize. Not include so may ticks.
          value: iP(new Date(n[0]), E, e)
        }, {
          value: n[1]
        }]);
        for (var z = 0; z < A.length - 1; z++) {
          var G = A[z].value, J = A[z + 1].value;
          if (G !== J) {
            var U = void 0, Y = void 0, Q = void 0, ot = !1;
            switch (E) {
              case "year":
                U = Math.max(1, Math.round(t / Qe / 365)), Y = Dh(e), Q = yC(e);
                break;
              case "half-year":
              case "quarter":
              case "month":
                U = eP(t), Y = ji(e), Q = nm(e);
                break;
              case "week":
              case "half-week":
              case "day":
                U = tP(t), Y = fl(e), Q = im(e), ot = !0;
                break;
              case "half-day":
              case "quarter-day":
              case "hour":
                U = rP(t), Y = io(e), Q = am(e);
                break;
              case "minute":
                U = F0(t, !0), Y = hl(e), Q = om(e);
                break;
              case "second":
                U = F0(t, !1), Y = cl(e), Q = sm(e);
                break;
              case "millisecond":
                U = nP(t), Y = vl(e), Q = lm(e);
                break;
            }
            s(U, G, J, Y, Q, ot, N), E === "year" && k.length > 1 && z === 0 && k.unshift({
              value: k[0].value - U
            });
          }
        }
        for (var z = 0; z < N.length; z++)
          k.push(N[z]);
        return N;
      }
    }
    for (var u = [], f = [], h = 0, v = 0, c = 0; c < a.length && o++ < i; ++c) {
      var d = Ki(a[c]);
      if (pC(a[c])) {
        l(a[c], u[u.length - 1] || [], f);
        var g = a[c + 1] ? Ki(a[c + 1]) : null;
        if (d !== g) {
          if (f.length) {
            v = h, f.sort(function(E, A) {
              return E.value - A.value;
            });
            for (var p = [], m = 0; m < f.length; ++m) {
              var _ = f[m].value;
              (m === 0 || f[m - 1].value !== _) && (p.push(f[m]), _ >= n[0] && _ <= n[1] && h++);
            }
            var S = (n[1] - n[0]) / t;
            if (h > S * 1.5 && v > S / 1.5 || (u.push(p), h > S || r === a[c]))
              break;
          }
          f = [];
        }
      }
    }
    o >= i && ee("Exceed safe limit.");
    for (var b = Ft(K(u, function(E) {
      return Ft(E, function(A) {
        return A.value >= n[0] && A.value <= n[1] && !A.notAdd;
      });
    }), function(E) {
      return E.length > 0;
    }), C = [], T = b.length - 1, c = 0; c < b.length; ++c)
      for (var D = b[c], M = 0; M < D.length; ++M)
        C.push({
          value: D[M].value,
          level: T - c
        });
    C.sort(function(E, A) {
      return E.value - A.value;
    });
    for (var P = [], c = 0; c < C.length; ++c)
      (c === 0 || C[c].value !== C[c - 1].value) && P.push(C[c]);
    return P;
  }
  Er.registerClass(B0);
  var z0 = Er.prototype, Mo = sa.prototype, oP = zt, sP = Math.floor, lP = Math.ceil, Kl = Math.pow, cr = Math.log, Fc = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = "log", e.base = 10, e._originalScale = new sa(), e._interval = 0, e;
      }
      return t.prototype.getTicks = function(e) {
        var n = this._originalScale, i = this._extent, a = n.getExtent(), o = Mo.getTicks.call(this, e);
        return K(o, function(s) {
          var l = s.value, u = zt(Kl(this.base, l));
          return u = l === i[0] && this._fixMin ? jl(u, a[0]) : u, u = l === i[1] && this._fixMax ? jl(u, a[1]) : u, {
            value: u
          };
        }, this);
      }, t.prototype.setExtent = function(e, n) {
        var i = cr(this.base);
        e = cr(Math.max(0, e)) / i, n = cr(Math.max(0, n)) / i, Mo.setExtent.call(this, e, n);
      }, t.prototype.getExtent = function() {
        var e = this.base, n = z0.getExtent.call(this);
        n[0] = Kl(e, n[0]), n[1] = Kl(e, n[1]);
        var i = this._originalScale, a = i.getExtent();
        return this._fixMin && (n[0] = jl(n[0], a[0])), this._fixMax && (n[1] = jl(n[1], a[1])), n;
      }, t.prototype.unionExtent = function(e) {
        this._originalScale.unionExtent(e);
        var n = this.base;
        e[0] = cr(e[0]) / cr(n), e[1] = cr(e[1]) / cr(n), z0.unionExtent.call(this, e);
      }, t.prototype.unionExtentFromData = function(e, n) {
        this.unionExtent(e.getApproximateExtent(n));
      }, t.prototype.calcNiceTicks = function(e) {
        e = e || 10;
        var n = this._extent, i = n[1] - n[0];
        if (!(i === 1 / 0 || i <= 0)) {
          var a = sp(i), o = e / i * a;
          for (o <= 0.5 && (a *= 10); !isNaN(a) && Math.abs(a) < 1 && Math.abs(a) > 0; )
            a *= 10;
          var s = [zt(lP(n[0] / a) * a), zt(sP(n[1] / a) * a)];
          this._interval = a, this._niceExtent = s;
        }
      }, t.prototype.calcNiceExtent = function(e) {
        Mo.calcNiceExtent.call(this, e), this._fixMin = e.fixMin, this._fixMax = e.fixMax;
      }, t.prototype.parse = function(e) {
        return e;
      }, t.prototype.contain = function(e) {
        return e = cr(e) / cr(this.base), Xl(e, this._extent);
      }, t.prototype.normalize = function(e) {
        return e = cr(e) / cr(this.base), $l(e, this._extent);
      }, t.prototype.scale = function(e) {
        return e = ql(e, this._extent), Kl(this.base, e);
      }, t.type = "log", t;
    }(Er)
  ), V0 = Fc.prototype;
  V0.getMinorTicks = Mo.getMinorTicks, V0.getLabel = Mo.getLabel;
  function jl(r, t) {
    return oP(r, xr(t));
  }
  Er.registerClass(Fc);
  var uP = (
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
        tt(a) ? this._modelMinNum = Ql(t, a({
          min: n[0],
          max: n[1]
        })) : a !== "dataMin" && (this._modelMinNum = Ql(t, a));
        var o = this._modelMaxRaw = e.get("max", !0);
        if (tt(o) ? this._modelMaxNum = Ql(t, o({
          min: n[0],
          max: n[1]
        })) : o !== "dataMax" && (this._modelMaxNum = Ql(t, o)), i)
          this._axisDataLen = e.getCategories().length;
        else {
          var s = e.get("boundaryGap"), l = X(s) ? s : [s || 0, s || 0];
          typeof l[0] == "boolean" || typeof l[1] == "boolean" ? (console.warn('Boolean type for boundaryGap is only allowed for ordinal axis. Please use string in percentage instead, e.g., "20%". Currently, boundaryGap is set to be 0.'), this._boundaryGapInner = [0, 0]) : this._boundaryGapInner = [un(l[0], 1), un(l[1], 1)];
        }
      }, r.prototype.calculate = function() {
        var t = this._isOrdinal, e = this._dataMin, n = this._dataMax, i = this._axisDataLen, a = this._boundaryGapInner, o = t ? null : n - e || Math.abs(e), s = this._modelMinRaw === "dataMin" ? e : this._modelMinNum, l = this._modelMaxRaw === "dataMax" ? n : this._modelMaxNum, u = s != null, f = l != null;
        s == null && (s = t ? i ? 0 : NaN : e - a[0] * o), l == null && (l = t ? i ? i - 1 : NaN : n + a[1] * o), (s == null || !isFinite(s)) && (s = NaN), (l == null || !isFinite(l)) && (l = NaN);
        var h = Pi(s) || Pi(l) || t && !i;
        this._needCrossZero && (s > 0 && l > 0 && !u && (s = 0), s < 0 && l < 0 && !f && (l = 0));
        var v = this._determinedMin, c = this._determinedMax;
        return v != null && (s = v, u = !0), c != null && (l = c, f = !0), {
          min: s,
          max: l,
          minFixed: u,
          maxFixed: f,
          isBlank: h
        };
      }, r.prototype.modifyDataMinMax = function(t, e) {
        st(!this.frozen), this[hP[t]] = e;
      }, r.prototype.setDeterminedMinMax = function(t, e) {
        var n = fP[t];
        st(!this.frozen && this[n] == null), this[n] = e;
      }, r.prototype.freeze = function() {
        this.frozen = !0;
      }, r;
    }()
  ), fP = {
    min: "_determinedMin",
    max: "_determinedMax"
  }, hP = {
    min: "_dataMin",
    max: "_dataMax"
  };
  function cP(r, t, e) {
    var n = r.rawExtentInfo;
    return n || (n = new uP(r, t, e), r.rawExtentInfo = n, n);
  }
  function Ql(r, t) {
    return t == null ? null : Pi(t) ? NaN : r.parse(t);
  }
  function G0(r, t) {
    var e = r.type, n = cP(r, t, r.getExtent()).calculate();
    r.setBlank(n.isBlank);
    var i = n.min, a = n.max, o = t.ecModel;
    if (o && e === "time") {
      var s = R0("bar", o), l = !1;
      if (L(s, function(h) {
        l = l || h.getBaseAxis() === t.axis;
      }), l) {
        var u = O0(s), f = vP(i, a, t, u);
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
  function vP(r, t, e, n) {
    var i = e.axis.getExtent(), a = i[1] - i[0], o = qA(n, e.axis);
    if (o === void 0)
      return {
        min: r,
        max: t
      };
    var s = 1 / 0;
    L(o, function(c) {
      s = Math.min(c.offset, s);
    });
    var l = -1 / 0;
    L(o, function(c) {
      l = Math.max(c.offset + c.width, l);
    }), s = Math.abs(s), l = Math.abs(l);
    var u = s + l, f = t - r, h = 1 - (s + l) / a, v = f / h - f;
    return t += v * (l / u), r -= v * (s / u), {
      min: r,
      max: t
    };
  }
  function zc(r, t) {
    var e = t, n = G0(r, e), i = n.extent, a = e.get("splitNumber");
    r instanceof Fc && (r.base = e.get("logBase"));
    var o = r.type, s = e.get("interval"), l = o === "interval" || o === "time";
    r.setExtent(i[0], i[1]), r.calcNiceExtent({
      splitNumber: a,
      fixMin: n.fixMin,
      fixMax: n.fixMax,
      minInterval: l ? e.get("minInterval") : null,
      maxInterval: l ? e.get("maxInterval") : null
    }), s != null && r.setInterval && r.setInterval(s);
  }
  function H0(r, t) {
    if (t = t || r.get("type"), t)
      switch (t) {
        case "category":
          return new kc({
            ordinalMeta: r.getOrdinalMeta ? r.getOrdinalMeta() : r.getCategories(),
            extent: [1 / 0, -1 / 0]
          });
        case "time":
          return new B0({
            locale: r.ecModel.getLocaleModel(),
            useUTC: r.ecModel.get("useUTC")
          });
        default:
          return new (Er.getClass(t) || sa)();
      }
  }
  function dP(r) {
    var t = r.scale.getExtent(), e = t[0], n = t[1];
    return !(e > 0 && n > 0 || e < 0 && n < 0);
  }
  function Ao(r) {
    var t = r.getLabelModel().get("formatter"), e = r.type === "category" ? r.scale.getExtent()[0] : null;
    return r.scale.type === "time" ? function(n) {
      return function(i, a) {
        return r.scale.getFormattedLabel(i, a, n);
      };
    }(t) : Z(t) ? function(n) {
      return function(i) {
        var a = r.scale.getLabel(i), o = n.replace("{value}", a ?? "");
        return o;
      };
    }(t) : tt(t) ? function(n) {
      return function(i, a) {
        return e != null && (a = i.value - e), n(Vc(r, i), a, i.level != null ? {
          level: i.level
        } : null);
      };
    }(t) : function(n) {
      return r.scale.getLabel(n);
    };
  }
  function Vc(r, t) {
    return r.type === "category" ? r.scale.getLabel(t) : t.value;
  }
  function pP(r) {
    var t = r.model, e = r.scale;
    if (!(!t.get(["axisLabel", "show"]) || e.isBlank())) {
      var n, i, a = e.getExtent();
      e instanceof kc ? i = e.count() : (n = e.getTicks(), i = n.length);
      var o = r.getLabelModel(), s = Ao(r), l, u = 1;
      i > 40 && (u = Math.ceil(i / 40));
      for (var f = 0; f < i; f += u) {
        var h = n ? n[f] : {
          value: a[0] + f
        }, v = s(h, f), c = o.getTextRect(v), d = gP(c, o.get("rotate") || 0);
        l ? l.union(d) : l = d;
      }
      return l;
    }
  }
  function gP(r, t) {
    var e = t * Math.PI / 180, n = r.width, i = r.height, a = n * Math.abs(Math.cos(e)) + Math.abs(i * Math.sin(e)), o = n * Math.abs(Math.sin(e)) + Math.abs(i * Math.cos(e)), s = new dt(r.x, r.y, a, o);
    return s;
  }
  function Gc(r) {
    var t = r.get("interval");
    return t ?? "auto";
  }
  function W0(r) {
    return r.type === "category" && Gc(r.getLabelModel()) === 0;
  }
  function mP(r, t) {
    var e = {};
    return L(r.mapDimensionsAll(t), function(n) {
      e[P0(r, n)] = !0;
    }), It(e);
  }
  var U0 = (
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
  function yP(r) {
    return Yl(null, r);
  }
  var _P = {
    isDimensionStacked: gi,
    enableDataStack: A0,
    getStackedDimension: P0
  };
  function SP(r, t) {
    var e = t;
    t instanceof Rt || (e = new Rt(t));
    var n = H0(e);
    return n.setExtent(r[0], r[1]), zc(n, e), n;
  }
  function wP(r) {
    He(r, U0);
  }
  function bP(r, t) {
    return t = t || {}, Yr(r, null, null, t.state !== "normal");
  }
  var xP = (Object.freeze || Object)({
    createList: yP,
    getLayoutRect: si,
    dataStack: _P,
    createScale: SP,
    mixinAxisModelCommonMethods: wP,
    getECData: _t,
    createTextStyle: bP,
    createDimensions: MA,
    createSymbol: hi,
    enableHoverEmphasis: Vs
  }), Y0 = [], TP = {
    registerPreprocessor: xc,
    registerProcessor: Tc,
    registerPostInit: v0,
    registerPostUpdate: d0,
    registerUpdateLifecycle: Gl,
    registerAction: pi,
    registerCoordinateSystem: p0,
    registerLayout: g0,
    registerVisual: mn,
    registerTransform: _0,
    registerLoading: Dc,
    registerMap: y0,
    registerImpl: HM,
    PRIORITY: jy,
    ComponentModel: pt,
    ComponentView: de,
    SeriesModel: De,
    ChartView: pe,
    // TODO Use ComponentModel and SeriesModel instead of Constructor
    registerComponentModel: function(r) {
      pt.registerClass(r);
    },
    registerComponentView: function(r) {
      de.registerClass(r);
    },
    registerSeriesModel: function(r) {
      De.registerClass(r);
    },
    registerChartView: function(r) {
      pe.registerClass(r);
    },
    registerSubTypeDefaulter: function(r, t) {
      pt.registerSubTypeDefaulter(r, t);
    },
    registerPainter: function(r, t) {
      rp(r, t);
    }
  };
  function Pe(r) {
    if (X(r)) {
      L(r, function(t) {
        Pe(t);
      });
      return;
    }
    wt(Y0, r) >= 0 || (Y0.push(r), tt(r) && (r = {
      install: r
    }), r.install(TP));
  }
  var CP = 1e-8;
  function X0(r, t) {
    return Math.abs(r - t) < CP;
  }
  function $0(r, t, e) {
    var n = 0, i = r[0];
    if (!i)
      return !1;
    for (var a = 1; a < r.length; a++) {
      var o = r[a];
      n += Vr(i[0], i[1], o[0], o[1], t, e), i = o;
    }
    var s = r[0];
    return (!X0(i[0], s[0]) || !X0(i[1], s[1])) && (n += Vr(i[0], i[1], s[0], s[1], t, e)), n !== 0;
  }
  var DP = [];
  function Hc(r, t) {
    for (var e = 0; e < r.length; e++)
      he(r[e], r[e], t);
  }
  function q0(r, t, e, n) {
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      n && (a = n.project(a)), a && isFinite(a[0]) && isFinite(a[1]) && (en(t, t, a), rn(e, e, a));
    }
  }
  function MP(r) {
    for (var t = 0, e = 0, n = 0, i = r.length, a = r[i - 1][0], o = r[i - 1][1], s = 0; s < i; s++) {
      var l = r[s][0], u = r[s][1], f = a * u - l * o;
      t += f, e += (a + l) * f, n += (o + u) * f, a = l, o = u;
    }
    return t ? [e / t / 3, n / t / 3, t] : [r[0][0] || 0, r[0][1] || 0];
  }
  var Z0 = (
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
  ), K0 = (
    /** @class */
    function() {
      function r(t, e) {
        this.type = "polygon", this.exterior = t, this.interiors = e;
      }
      return r;
    }()
  ), j0 = (
    /** @class */
    function() {
      function r(t) {
        this.type = "linestring", this.points = t;
      }
      return r;
    }()
  ), AP = (
    /** @class */
    function(r) {
      x(t, r);
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
          return MP(n.exterior);
        var u = this.getBoundingRect();
        return [u.x + u.width / 2, u.y + u.height / 2];
      }, t.prototype.getBoundingRect = function(e) {
        var n = this._rect;
        if (n && !e)
          return n;
        var i = [1 / 0, 1 / 0], a = [-1 / 0, -1 / 0], o = this.geometries;
        return L(o, function(s) {
          s.type === "polygon" ? q0(s.exterior, i, a, e) : L(s.points, function(l) {
            q0(l, i, a, e);
          });
        }), isFinite(i[0]) && isFinite(i[1]) && isFinite(a[0]) && isFinite(a[1]) || (i[0] = i[1] = a[0] = a[1] = 0), n = new dt(i[0], i[1], a[0] - i[0], a[1] - i[1]), e || (this._rect = n), n;
      }, t.prototype.contain = function(e) {
        var n = this.getBoundingRect(), i = this.geometries;
        if (!n.contain(e[0], e[1]))
          return !1;
        t:
          for (var a = 0, o = i.length; a < o; a++) {
            var s = i[a];
            if (s.type === "polygon") {
              var l = s.exterior, u = s.interiors;
              if ($0(l, e[0], e[1])) {
                for (var f = 0; f < (u ? u.length : 0); f++)
                  if ($0(u[f], e[0], e[1]))
                    continue t;
                return !0;
              }
            }
          }
        return !1;
      }, t.prototype.transformTo = function(e, n, i, a) {
        var o = this.getBoundingRect(), s = o.width / o.height;
        i ? a || (a = i / s) : i = s * a;
        for (var l = new dt(e, n, i, a), u = o.calculateTransform(l), f = this.geometries, h = 0; h < f.length; h++) {
          var v = f[h];
          v.type === "polygon" ? (Hc(v.exterior, u), L(v.interiors, function(c) {
            Hc(c, u);
          })) : L(v.points, function(c) {
            Hc(c, u);
          });
        }
        o = this._rect, o.copy(l), this._center = [o.x + o.width / 2, o.y + o.height / 2];
      }, t.prototype.cloneShallow = function(e) {
        e == null && (e = this.name);
        var n = new t(e, this.geometries, this._center);
        return n._rect = this._rect, n.transformTo = null, n;
      }, t;
    }(Z0)
  );
  (function(r) {
    x(t, r);
    function t(e, n) {
      var i = r.call(this, e) || this;
      return i.type = "geoSVG", i._elOnlyForCalculate = n, i;
    }
    return t.prototype.calcCenter = function() {
      for (var e = this._elOnlyForCalculate, n = e.getBoundingRect(), i = [n.x + n.width / 2, n.y + n.height / 2], a = ya(DP), o = e; o && !o.isGeoSVGGraphicRoot; )
        nn(a, o.getLocalTransform(), a), o = o.parent;
      return Ei(a, a), he(i, i, a), i;
    }, t;
  })(Z0);
  function PP(r) {
    if (!r.UTF8Encoding)
      return r;
    var t = r, e = t.UTF8Scale;
    e == null && (e = 1024);
    var n = t.features;
    return L(n, function(i) {
      var a = i.geometry, o = a.encodeOffsets, s = a.coordinates;
      if (o)
        switch (a.type) {
          case "LineString":
            a.coordinates = Q0(s, o, e);
            break;
          case "Polygon":
            Wc(s, o, e);
            break;
          case "MultiLineString":
            Wc(s, o, e);
            break;
          case "MultiPolygon":
            L(s, function(l, u) {
              return Wc(l, o[u], e);
            });
        }
    }), t.UTF8Encoding = !1, t;
  }
  function Wc(r, t, e) {
    for (var n = 0; n < r.length; n++)
      r[n] = Q0(r[n], t[n], e);
  }
  function Q0(r, t, e) {
    for (var n = [], i = t[0], a = t[1], o = 0; o < r.length; o += 2) {
      var s = r.charCodeAt(o) - 64, l = r.charCodeAt(o + 1) - 64;
      s = s >> 1 ^ -(s & 1), l = l >> 1 ^ -(l & 1), s += i, l += a, i = s, a = l, n.push([s / e, l / e]);
    }
    return n;
  }
  function J0(r, t) {
    return r = PP(r), K(Ft(r.features, function(e) {
      return e.geometry && e.properties && e.geometry.coordinates.length > 0;
    }), function(e) {
      var n = e.properties, i = e.geometry, a = [];
      switch (i.type) {
        case "Polygon":
          var o = i.coordinates;
          a.push(new K0(o[0], o.slice(1)));
          break;
        case "MultiPolygon":
          L(i.coordinates, function(l) {
            l[0] && a.push(new K0(l[0], l.slice(1)));
          });
          break;
        case "LineString":
          a.push(new j0([i.coordinates]));
          break;
        case "MultiLineString":
          a.push(new j0(i.coordinates));
      }
      var s = new AP(n[t || "name"], a, n.cp);
      return s.properties = n, s;
    });
  }
  var IP = (Object.freeze || Object)({
    linearMap: ws,
    round: zt,
    asc: Db,
    getPrecision: xr,
    getPrecisionSafe: bs,
    getPixelPrecision: ap,
    getPercentWithPrecision: Mb,
    MAX_SAFE_INTEGER: Pb,
    remRadian: Af,
    isRadianAroundZero: Ra,
    parseDate: Xe,
    quantity: sp,
    quantityExponent: Oa,
    nice: Pf,
    quantile: Lb,
    reformIntervals: Eb,
    isNumeric: If,
    numericToNumber: ka
  }), LP = (Object.freeze || Object)({
    parse: Xe,
    format: no
  }), EP = (Object.freeze || Object)({
    extendShape: Ig,
    extendPath: Lg,
    makePath: rl,
    makeImage: ch,
    mergePath: Og,
    resizePath: vh,
    createIcon: nl,
    updateProps: qt,
    initProps: ie,
    getTransform: kg,
    clipPointsByRect: Fg,
    clipRectByRect: zg,
    registerShape: je,
    getShapeClass: Eg,
    Group: Zt,
    Image: Gr,
    Text: $t,
    Circle: $a,
    Ellipse: Us,
    Sector: Wr,
    Ring: Xs,
    Polygon: $s,
    Polyline: $i,
    Rect: Vt,
    Line: Ur,
    BezierCurve: qs,
    Arc: Ka,
    IncrementalDisplayable: Ag,
    CompoundPath: Cg,
    LinearGradient: lh,
    RadialGradient: Mg,
    BoundingRect: dt
  }), RP = (Object.freeze || Object)({
    addCommas: Mh,
    toCamelCase: Ah,
    normalizeCssArray: ao,
    encodeHTML: Re,
    formatTpl: Lh,
    getTooltipMarker: fm,
    formatTime: SC,
    capitalFirst: wC,
    truncateText: Tp,
    getTextRect: _C
  }), OP = (Object.freeze || Object)({
    map: K,
    each: L,
    indexOf: wt,
    inherits: Eu,
    reduce: Sr,
    filter: Ft,
    bind: Pt,
    curry: Ot,
    isArray: X,
    isString: Z,
    isObject: j,
    isFunction: tt,
    extend: W,
    defaults: St,
    clone: vt,
    merge: yt
  }), Po = kt();
  function kP(r) {
    return r.type === "category" ? BP(r) : zP(r);
  }
  function NP(r, t) {
    return r.type === "category" ? FP(r, t) : {
      ticks: K(r.scale.getTicks(), function(e) {
        return e.value;
      })
    };
  }
  function BP(r) {
    var t = r.getLabelModel(), e = t_(r, t);
    return !t.get("show") || r.scale.isBlank() ? {
      labels: [],
      labelCategoryInterval: e.labelCategoryInterval
    } : e;
  }
  function t_(r, t) {
    var e = e_(r, "labels"), n = Gc(t), i = r_(e, n);
    if (i)
      return i;
    var a, o;
    return tt(n) ? a = a_(r, n) : (o = n === "auto" ? VP(r) : n, a = i_(r, o)), n_(e, n, {
      labels: a,
      labelCategoryInterval: o
    });
  }
  function FP(r, t) {
    var e = e_(r, "ticks"), n = Gc(t), i = r_(e, n);
    if (i)
      return i;
    var a, o;
    if ((!t.get("show") || r.scale.isBlank()) && (a = []), tt(n))
      a = a_(r, n, !0);
    else if (n === "auto") {
      var s = t_(r, r.getLabelModel());
      o = s.labelCategoryInterval, a = K(s.labels, function(l) {
        return l.tickValue;
      });
    } else
      o = n, a = i_(r, o, !0);
    return n_(e, n, {
      ticks: a,
      tickCategoryInterval: o
    });
  }
  function zP(r) {
    var t = r.scale.getTicks(), e = Ao(r);
    return {
      labels: K(t, function(n, i) {
        return {
          level: n.level,
          formattedLabel: e(n, i),
          rawLabel: r.scale.getLabel(n),
          tickValue: n.value
        };
      })
    };
  }
  function e_(r, t) {
    return Po(r)[t] || (Po(r)[t] = []);
  }
  function r_(r, t) {
    for (var e = 0; e < r.length; e++)
      if (r[e].key === t)
        return r[e].value;
  }
  function n_(r, t, e) {
    return r.push({
      key: t,
      value: e
    }), e;
  }
  function VP(r) {
    var t = Po(r).autoInterval;
    return t ?? (Po(r).autoInterval = r.calculateCategoryInterval());
  }
  function GP(r) {
    var t = HP(r), e = Ao(r), n = (t.axisRotate - t.labelRotate) / 180 * Math.PI, i = r.scale, a = i.getExtent(), o = i.count();
    if (a[1] - a[0] < 1)
      return 0;
    var s = 1;
    o > 40 && (s = Math.max(1, Math.floor(o / 40)));
    for (var l = a[0], u = r.dataToCoord(l + 1) - r.dataToCoord(l), f = Math.abs(u * Math.cos(n)), h = Math.abs(u * Math.sin(n)), v = 0, c = 0; l <= a[1]; l += s) {
      var d = 0, g = 0, p = wf(e({
        value: l
      }), t.font, "center", "top");
      d = p.width * 1.3, g = p.height * 1.3, v = Math.max(v, d, 7), c = Math.max(c, g, 7);
    }
    var m = v / f, _ = c / h;
    isNaN(m) && (m = 1 / 0), isNaN(_) && (_ = 1 / 0);
    var S = Math.max(0, Math.floor(Math.min(m, _))), b = Po(r.model), C = r.getExtent(), T = b.lastAutoInterval, D = b.lastTickCount;
    return T != null && D != null && Math.abs(T - S) <= 1 && Math.abs(D - o) <= 1 && T > S && b.axisExtent0 === C[0] && b.axisExtent1 === C[1] ? S = T : (b.lastTickCount = o, b.lastAutoInterval = S, b.axisExtent0 = C[0], b.axisExtent1 = C[1]), S;
  }
  function HP(r) {
    var t = r.getLabelModel();
    return {
      axisRotate: r.getRotate ? r.getRotate() : r.isHorizontal && !r.isHorizontal() ? 90 : 0,
      labelRotate: t.get("rotate") || 0,
      font: t.getFont()
    };
  }
  function i_(r, t, e) {
    var n = Ao(r), i = r.scale, a = i.getExtent(), o = r.getLabelModel(), s = [], l = Math.max((t || 0) + 1, 1), u = a[0], f = i.count();
    u !== 0 && l > 1 && f / l > 2 && (u = Math.round(Math.ceil(u / l) * l));
    var h = W0(r), v = o.get("showMinLabel") || h, c = o.get("showMaxLabel") || h;
    v && u !== a[0] && g(a[0]);
    for (var d = u; d <= a[1]; d += l)
      g(d);
    c && d - l !== a[1] && g(a[1]);
    function g(p) {
      var m = {
        value: p
      };
      s.push(e ? p : {
        formattedLabel: n(m),
        rawLabel: i.getLabel(m),
        tickValue: p
      });
    }
    return s;
  }
  function a_(r, t, e) {
    var n = r.scale, i = Ao(r), a = [];
    return L(n.getTicks(), function(o) {
      var s = n.getLabel(o), l = o.value;
      t(o.value, s) && a.push(e ? l : {
        formattedLabel: i(o),
        rawLabel: s,
        tickValue: l
      });
    }), a;
  }
  var o_ = [0, 1], s_ = (
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
        return ap(t || this.scale.getExtent(), this._extent);
      }, r.prototype.setExtent = function(t, e) {
        var n = this._extent;
        n[0] = t, n[1] = e;
      }, r.prototype.dataToCoord = function(t, e) {
        var n = this._extent, i = this.scale;
        return t = i.normalize(t), this.onBand && i.type === "ordinal" && (n = n.slice(), l_(n, i.count())), ws(t, o_, n, e);
      }, r.prototype.coordToData = function(t, e) {
        var n = this._extent, i = this.scale;
        this.onBand && i.type === "ordinal" && (n = n.slice(), l_(n, i.count()));
        var a = ws(t, n, o_, e);
        return this.scale.scale(a);
      }, r.prototype.pointToData = function(t, e) {
      }, r.prototype.getTicksCoords = function(t) {
        t = t || {};
        var e = t.tickModel || this.getTickModel(), n = NP(this, e), i = n.ticks, a = K(i, function(s) {
          return {
            coord: this.dataToCoord(this.scale.type === "ordinal" ? this.scale.getRawOrdinalNumber(s) : s),
            tickValue: s
          };
        }, this), o = e.get("alignWithLabel");
        return WP(this, a, o, t.clamp), a;
      }, r.prototype.getMinorTicksCoords = function() {
        if (this.scale.type === "ordinal")
          return [];
        var t = this.model.getModel("minorTick"), e = t.get("splitNumber");
        e > 0 && e < 100 || (e = 5);
        var n = this.scale.getMinorTicks(e), i = K(n, function(a) {
          return K(a, function(o) {
            return {
              coord: this.dataToCoord(o),
              tickValue: o
            };
          }, this);
        }, this);
        return i;
      }, r.prototype.getViewLabels = function() {
        return kP(this).labels;
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
        return GP(this);
      }, r;
    }()
  );
  function l_(r, t) {
    var e = r[1] - r[0], n = t, i = e / n / 2;
    r[0] += i, r[1] -= i;
  }
  function WP(r, t, e, n) {
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
      L(t, function(c) {
        c.coord -= u / 2;
      });
      var f = r.scale.getExtent();
      s = 1 + f[1] - t[i - 1].tickValue, o = {
        coord: t[i - 1].coord + u * s
      }, t.push(o);
    }
    var h = a[0] > a[1];
    v(t[0].coord, a[0]) && (n ? t[0].coord = a[0] : t.shift()), n && v(a[0], t[0].coord) && t.unshift({
      coord: a[0]
    }), v(a[1], o.coord) && (n ? o.coord = a[1] : t.pop()), n && v(o.coord, a[1]) && t.push({
      coord: a[1]
    });
    function v(c, d) {
      return c = zt(c), d = zt(d), h ? c > d : c < d;
    }
  }
  function UP(r) {
    var t = pt.extend(r);
    return pt.registerClass(t), t;
  }
  function YP(r) {
    var t = de.extend(r);
    return de.registerClass(t), t;
  }
  function XP(r) {
    var t = De.extend(r);
    return De.registerClass(t), t;
  }
  function $P(r) {
    var t = pe.extend(r);
    return pe.registerClass(t), t;
  }
  var Io = Math.PI * 2, yi = cn.CMD, qP = ["top", "right", "bottom", "left"];
  function ZP(r, t, e, n, i) {
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
  function KP(r, t, e, n, i, a, o, s, l) {
    o -= r, s -= t;
    var u = Math.sqrt(o * o + s * s);
    o /= u, s /= u;
    var f = o * e + r, h = s * e + t;
    if (Math.abs(n - i) % Io < 1e-4)
      return l[0] = f, l[1] = h, u - e;
    if (a) {
      var v = n;
      n = vn(i), i = vn(v);
    } else
      n = vn(n), i = vn(i);
    n > i && (i += Io);
    var c = Math.atan2(s, o);
    if (c < 0 && (c += Io), c >= n && c <= i || c + Io >= n && c + Io <= i)
      return l[0] = f, l[1] = h, u - e;
    var d = e * Math.cos(n) + r, g = e * Math.sin(n) + t, p = e * Math.cos(i) + r, m = e * Math.sin(i) + t, _ = (d - o) * (d - o) + (g - s) * (g - s), S = (p - o) * (p - o) + (m - s) * (m - s);
    return _ < S ? (l[0] = d, l[1] = g, Math.sqrt(_)) : (l[0] = p, l[1] = m, Math.sqrt(S));
  }
  function Jl(r, t, e, n, i, a, o, s) {
    var l = i - r, u = a - t, f = e - r, h = n - t, v = Math.sqrt(f * f + h * h);
    f /= v, h /= v;
    var c = l * f + u * h, d = c / v;
    s && (d = Math.min(Math.max(d, 0), 1)), d *= v;
    var g = o[0] = r + d * f, p = o[1] = t + d * h;
    return Math.sqrt((g - i) * (g - i) + (p - a) * (p - a));
  }
  function u_(r, t, e, n, i, a, o) {
    e < 0 && (r = r + e, e = -e), n < 0 && (t = t + n, n = -n);
    var s = r + e, l = t + n, u = o[0] = Math.min(Math.max(i, r), s), f = o[1] = Math.min(Math.max(a, t), l);
    return Math.sqrt((u - i) * (u - i) + (f - a) * (f - a));
  }
  var vr = [];
  function jP(r, t, e) {
    var n = u_(t.x, t.y, t.width, t.height, r.x, r.y, vr);
    return e.set(vr[0], vr[1]), n;
  }
  function QP(r, t, e) {
    for (var n = 0, i = 0, a = 0, o = 0, s, l, u = 1 / 0, f = t.data, h = r.x, v = r.y, c = 0; c < f.length; ) {
      var d = f[c++];
      c === 1 && (n = f[c], i = f[c + 1], a = n, o = i);
      var g = u;
      switch (d) {
        case yi.M:
          a = f[c++], o = f[c++], n = a, i = o;
          break;
        case yi.L:
          g = Jl(n, i, f[c], f[c + 1], h, v, vr, !0), n = f[c++], i = f[c++];
          break;
        case yi.C:
          g = Rd(n, i, f[c++], f[c++], f[c++], f[c++], f[c], f[c + 1], h, v, vr), n = f[c++], i = f[c++];
          break;
        case yi.Q:
          g = Nd(n, i, f[c++], f[c++], f[c], f[c + 1], h, v, vr), n = f[c++], i = f[c++];
          break;
        case yi.A:
          var p = f[c++], m = f[c++], _ = f[c++], S = f[c++], b = f[c++], C = f[c++];
          c += 1;
          var T = !!(1 - f[c++]);
          s = Math.cos(b) * _ + p, l = Math.sin(b) * S + m, c <= 1 && (a = s, o = l);
          var D = (h - p) * S / _ + p;
          g = KP(p, m, S, b, b + C, T, D, v, vr), n = Math.cos(b + C) * _ + p, i = Math.sin(b + C) * S + m;
          break;
        case yi.R:
          a = n = f[c++], o = i = f[c++];
          var M = f[c++], P = f[c++];
          g = u_(a, o, M, P, h, v, vr);
          break;
        case yi.Z:
          g = Jl(n, i, a, o, h, v, vr, !0), n = a, i = o;
          break;
      }
      g < u && (u = g, e.set(vr[0], vr[1]));
    }
    return u;
  }
  var dr = new et(), Ct = new et(), Nt = new et(), Rr = new et(), Or = new et();
  function f_(r, t) {
    if (r) {
      var e = r.getTextGuideLine(), n = r.getTextContent();
      if (n && e) {
        var i = r.textGuideLineConfig || {}, a = [[0, 0], [0, 0], [0, 0]], o = i.candidates || qP, s = n.getBoundingRect().clone();
        s.applyTransform(n.getComputedTransform());
        var l = 1 / 0, u = i.anchor, f = r.getComputedTransform(), h = f && Ei([], f), v = t.get("length2") || 0;
        u && Nt.copy(u);
        for (var c = 0; c < o.length; c++) {
          var d = o[c];
          ZP(d, 0, s, dr, Rr), et.scaleAndAdd(Ct, dr, Rr, v), Ct.transform(h);
          var g = r.getBoundingRect(), p = u ? u.distance(Ct) : r instanceof xt ? QP(Ct, r.path, Nt) : jP(Ct, g, Nt);
          p < l && (l = p, Ct.transform(f), Nt.transform(f), Nt.toArray(a[0]), Ct.toArray(a[1]), dr.toArray(a[2]));
        }
        h_(a, t.get("minTurnAngle")), e.setShape({
          points: a
        });
      }
    }
  }
  var tu = [], me = new et();
  function h_(r, t) {
    if (t <= 180 && t > 0) {
      t = t / 180 * Math.PI, dr.fromArray(r[0]), Ct.fromArray(r[1]), Nt.fromArray(r[2]), et.sub(Rr, dr, Ct), et.sub(Or, Nt, Ct);
      var e = Rr.len(), n = Or.len();
      if (!(e < 1e-3 || n < 1e-3)) {
        Rr.scale(1 / e), Or.scale(1 / n);
        var i = Rr.dot(Or), a = Math.cos(t);
        if (a < i) {
          var o = Jl(Ct.x, Ct.y, Nt.x, Nt.y, dr.x, dr.y, tu, !1);
          me.fromArray(tu), me.scaleAndAdd(Or, o / Math.tan(Math.PI - t));
          var s = Nt.x !== Ct.x ? (me.x - Ct.x) / (Nt.x - Ct.x) : (me.y - Ct.y) / (Nt.y - Ct.y);
          if (isNaN(s))
            return;
          s < 0 ? et.copy(me, Ct) : s > 1 && et.copy(me, Nt), me.toArray(r[1]);
        }
      }
    }
  }
  function JP(r, t, e) {
    if (e <= 180 && e > 0) {
      e = e / 180 * Math.PI, dr.fromArray(r[0]), Ct.fromArray(r[1]), Nt.fromArray(r[2]), et.sub(Rr, Ct, dr), et.sub(Or, Nt, Ct);
      var n = Rr.len(), i = Or.len();
      if (!(n < 1e-3 || i < 1e-3)) {
        Rr.scale(1 / n), Or.scale(1 / i);
        var a = Rr.dot(t), o = Math.cos(e);
        if (a < o) {
          var s = Jl(Ct.x, Ct.y, Nt.x, Nt.y, dr.x, dr.y, tu, !1);
          me.fromArray(tu);
          var l = Math.PI / 2, u = Math.acos(Or.dot(t)), f = l + u - e;
          if (f >= l)
            et.copy(me, Nt);
          else {
            me.scaleAndAdd(Or, s / Math.tan(Math.PI / 2 - f));
            var h = Nt.x !== Ct.x ? (me.x - Ct.x) / (Nt.x - Ct.x) : (me.y - Ct.y) / (Nt.y - Ct.y);
            if (isNaN(h))
              return;
            h < 0 ? et.copy(me, Ct) : h > 1 && et.copy(me, Nt);
          }
          me.toArray(r[1]);
        }
      }
    }
  }
  function c_(r, t, e, n) {
    var i = e === "normal", a = i ? r : r.ensureState(e);
    a.ignore = t;
    var o = n.get("smooth");
    o && o === !0 && (o = 0.3), a.shape = a.shape || {}, o > 0 && (a.shape.smooth = o);
    var s = n.getModel("lineStyle").getLineStyle();
    i ? r.useStyle(s) : a.style = s;
  }
  function tI(r, t) {
    var e = t.smooth, n = t.points;
    if (n)
      if (r.moveTo(n[0][0], n[0][1]), e > 0 && n.length >= 3) {
        var i = Ko(n[0], n[1]), a = Ko(n[1], n[2]);
        if (!i || !a) {
          r.lineTo(n[1][0], n[1][1]), r.lineTo(n[2][0], n[2][1]);
          return;
        }
        var o = Math.min(i, a) * e, s = jo([], n[1], n[0], o / i), l = jo([], n[1], n[2], o / a), u = jo([], s, l, 0.5);
        r.bezierCurveTo(s[0], s[1], s[0], s[1], u[0], u[1]), r.bezierCurveTo(l[0], l[1], l[0], l[1], n[2][0], n[2][1]);
      } else
        for (var f = 1; f < n.length; f++)
          r.lineTo(n[f][0], n[f][1]);
  }
  function v_(r, t, e) {
    var n = r.getTextGuideLine(), i = r.getTextContent();
    if (!i) {
      n && r.removeTextGuideLine();
      return;
    }
    for (var a = t.normal, o = a.get("show"), s = i.ignore, l = 0; l < Os.length; l++) {
      var u = Os[l], f = t[u], h = u === "normal";
      if (f) {
        var v = f.get("show"), c = h ? s : ut(i.states[u] && i.states[u].ignore, s);
        if (c || !ut(v, o)) {
          var d = h ? n : n && n.states[u];
          d && (d.ignore = !0);
          continue;
        }
        n || (n = new $i(), r.setTextGuideLine(n), !h && (s || !o) && c_(n, !0, "normal", t.normal), r.stateProxy && (n.stateProxy = r.stateProxy)), c_(n, !1, u, f);
      }
    }
    if (n) {
      St(n.style, e), n.style.fill = null;
      var g = a.get("showAbove"), p = r.textGuideLineConfig = r.textGuideLineConfig || {};
      p.showAbove = g || !1, n.buildPath = tI;
    }
  }
  function d_(r, t) {
    t = t || "labelLine";
    for (var e = {
      normal: r.getModel(t)
    }, n = 0; n < Ke.length; n++) {
      var i = Ke[n];
      e[i] = r.getModel([i, t]);
    }
    return e;
  }
  function p_(r) {
    for (var t = [], e = 0; e < r.length; e++) {
      var n = r[e];
      if (!n.defaultAttr.ignore) {
        var i = n.label, a = i.getComputedTransform(), o = i.getBoundingRect(), s = !a || a[1] < 1e-5 && a[2] < 1e-5, l = i.style.margin || 0, u = o.clone();
        u.applyTransform(a), u.x -= l / 2, u.y -= l / 2, u.width += l, u.height += l;
        var f = s ? new js(o, a) : null;
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
  function g_(r, t, e, n, i, a) {
    var o = r.length;
    if (o < 2)
      return;
    r.sort(function(M, P) {
      return M.rect[t] - P.rect[t];
    });
    for (var s = 0, l, u = !1, f = 0, h = 0; h < o; h++) {
      var v = r[h], c = v.rect;
      l = c[t] - s, l < 0 && (c[t] -= l, v.label[t] -= l, u = !0);
      var d = Math.max(-l, 0);
      f += d, s = c[t] + c[e];
    }
    f > 0 && a && C(-f / o, 0, o);
    var g = r[0], p = r[o - 1], m, _;
    S(), m < 0 && T(-m, 0.8), _ < 0 && T(_, 0.8), S(), b(m, _, 1), b(_, m, -1), S(), m < 0 && D(-m), _ < 0 && D(_);
    function S() {
      m = g.rect[t] - n, _ = i - p.rect[t] - p.rect[e];
    }
    function b(M, P, E) {
      if (M < 0) {
        var A = Math.min(P, -M);
        if (A > 0) {
          C(A * E, 0, o);
          var k = A + M;
          k < 0 && T(-k * E, 1);
        } else
          T(-M * E, 1);
      }
    }
    function C(M, P, E) {
      M !== 0 && (u = !0);
      for (var A = P; A < E; A++) {
        var k = r[A], N = k.rect;
        N[t] += M, k.label[t] += M;
      }
    }
    function T(M, P) {
      for (var E = [], A = 0, k = 1; k < o; k++) {
        var N = r[k - 1].rect, B = Math.max(r[k].rect[t] - N[t] - N[e], 0);
        E.push(B), A += B;
      }
      if (A) {
        var z = Math.min(Math.abs(M) / A, P);
        if (M > 0)
          for (var k = 0; k < o - 1; k++) {
            var G = E[k] * z;
            C(G, 0, k + 1);
          }
        else
          for (var k = o - 1; k > 0; k--) {
            var G = E[k - 1] * z;
            C(-G, k, o);
          }
      }
    }
    function D(M) {
      var P = M < 0 ? -1 : 1;
      M = Math.abs(M);
      for (var E = Math.ceil(M / (o - 1)), A = 0; A < o - 1; A++)
        if (P > 0 ? C(E, 0, A + 1) : C(-E, o - A - 1, o), M -= E, M <= 0)
          return;
    }
    return u;
  }
  function eI(r, t, e, n) {
    return g_(r, "x", "width", t, e, n);
  }
  function m_(r, t, e, n) {
    return g_(r, "y", "height", t, e, n);
  }
  function y_(r) {
    var t = [];
    r.sort(function(g, p) {
      return p.priority - g.priority;
    });
    var e = new dt(0, 0, 0, 0);
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
      for (var h = a.obb, v = !1, c = 0; c < t.length; c++) {
        var d = t[c];
        if (e.intersect(d.rect)) {
          if (o && d.axisAligned) {
            v = !0;
            break;
          }
          if (d.obb || (d.obb = new js(d.localRect, d.transform)), h || (h = new js(s, l)), h.intersect(d.obb)) {
            v = !0;
            break;
          }
        }
      }
      v ? (n(u), f && n(f)) : (u.attr("ignore", a.defaultAttr.ignore), f && f.attr("ignore", a.defaultAttr.labelGuideIgnore), t.push(a));
    }
  }
  function rI(r) {
    if (r) {
      for (var t = [], e = 0; e < r.length; e++)
        t.push(r[e].slice());
      return t;
    }
  }
  function nI(r, t) {
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
      labelLinePoints: rI(n && n.shape.points)
    };
  }
  var __ = ["align", "verticalAlign", "width", "height", "fontSize"], Fe = new ys(), Uc = kt(), iI = kt();
  function eu(r, t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      t[i] != null && (r[i] = t[i]);
    }
  }
  var ru = ["x", "y", "rotation"], aI = (
    /** @class */
    function() {
      function r() {
        this._labelList = [], this._chartViewList = [];
      }
      return r.prototype.clearLabels = function() {
        this._labelList = [], this._chartViewList = [];
      }, r.prototype._addLabel = function(t, e, n, i, a) {
        var o = i.style, s = i.__hostTarget, l = s.textConfig || {}, u = i.getComputedTransform(), f = i.getBoundingRect().plain();
        dt.applyTransform(f, f, u), u ? Fe.setLocalTransform(u) : (Fe.x = Fe.y = Fe.rotation = Fe.originX = Fe.originY = 0, Fe.scaleX = Fe.scaleY = 1);
        var h = i.__hostTarget, v;
        if (h) {
          v = h.getBoundingRect().plain();
          var c = h.getComputedTransform();
          dt.applyTransform(v, v, c);
        }
        var d = v && h.getTextGuideLine();
        this._labelList.push({
          label: i,
          labelLine: d,
          seriesModel: n,
          dataIndex: t,
          dataType: e,
          layoutOption: a,
          computedLayoutOption: null,
          rect: f,
          hostRect: v,
          // Label with lower priority will be hidden when overlapped
          // Use rect size as default priority
          priority: v ? v.width * v.height : 0,
          // Save default label attributes.
          // For restore if developers want get back to default value in callback.
          defaultAttr: {
            ignore: i.ignore,
            labelGuideIgnore: d && d.ignore,
            x: Fe.x,
            y: Fe.y,
            scaleX: Fe.scaleX,
            scaleY: Fe.scaleY,
            rotation: Fe.rotation,
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
        (tt(i) || It(i).length) && t.group.traverse(function(a) {
          if (a.ignore)
            return !0;
          var o = a.getTextContent(), s = _t(a);
          o && !o.disableLabelLayout && e._addLabel(s.dataIndex, s.dataType, n, o, i);
        });
      }, r.prototype.updateLayoutConfig = function(t) {
        var e = t.getWidth(), n = t.getHeight();
        function i(S, b) {
          return function() {
            f_(S, b);
          };
        }
        for (var a = 0; a < this._labelList.length; a++) {
          var o = this._labelList[a], s = o.label, l = s.__hostTarget, u = o.defaultAttr, f = void 0;
          tt(o.layoutOption) ? f = o.layoutOption(nI(o, l)) : f = o.layoutOption, f = f || {}, o.computedLayoutOption = f;
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
          var v = !1;
          if (f.x != null ? (s.x = Lt(f.x, e), s.setStyle("x", 0), v = !0) : (s.x = u.x, s.setStyle("x", u.style.x)), f.y != null ? (s.y = Lt(f.y, n), s.setStyle("y", 0), v = !0) : (s.y = u.y, s.setStyle("y", u.style.y)), f.labelLinePoints) {
            var c = l.getTextGuideLine();
            c && (c.setShape({
              points: f.labelLinePoints
            }), v = !1);
          }
          var d = Uc(s);
          d.needsUpdateLabelLine = v, s.rotation = f.rotate != null ? f.rotate * h : u.rotation, s.scaleX = u.scaleX, s.scaleY = u.scaleY;
          for (var g = 0; g < __.length; g++) {
            var p = __[g];
            s.setStyle(p, f[p] != null ? f[p] : u.style[p]);
          }
          if (f.draggable) {
            if (s.draggable = !0, s.cursor = "move", l) {
              var m = o.seriesModel;
              if (o.dataIndex != null) {
                var _ = o.seriesModel.getData(o.dataType);
                m = _.getItemModel(o.dataIndex);
              }
              s.on("drag", i(l, m.getModel("labelLine")));
            }
          } else
            s.off("drag"), s.cursor = u.cursor;
        }
      }, r.prototype.layout = function(t) {
        var e = t.getWidth(), n = t.getHeight(), i = p_(this._labelList), a = Ft(i, function(l) {
          return l.layoutOption.moveOverlap === "shiftX";
        }), o = Ft(i, function(l) {
          return l.layoutOption.moveOverlap === "shiftY";
        });
        eI(a, 0, e), m_(o, 0, n);
        var s = Ft(i, function(l) {
          return l.layoutOption.hideOverlap;
        });
        y_(s);
      }, r.prototype.processLabelsOverall = function() {
        var t = this;
        L(this._chartViewList, function(e) {
          var n = e.__model, i = e.ignoreLabelLineUpdate, a = n.isAnimationEnabled();
          e.group.traverse(function(o) {
            if (o.ignore && !o.forceLabelAnimation)
              return !0;
            var s = !i, l = o.getTextContent();
            !s && l && (s = Uc(l).needsUpdateLabelLine), s && t._updateLabelLine(o, n), a && t._animateLabels(o, n);
          });
        });
      }, r.prototype._updateLabelLine = function(t, e) {
        var n = t.getTextContent(), i = _t(t), a = i.dataIndex;
        if (n && a != null) {
          var o = e.getData(i.dataType), s = o.getItemModel(a), l = {}, u = o.getItemVisual(a, "style"), f = o.getVisual("drawType");
          l.stroke = u[f];
          var h = s.getModel("labelLine");
          v_(t, d_(s), l), f_(t, h);
        }
      }, r.prototype._animateLabels = function(t, e) {
        var n = t.getTextContent(), i = t.getTextGuideLine();
        if (n && (t.forceLabelAnimation || !n.ignore && !n.invisible && !t.disableLabelAnimation && !qi(t))) {
          var a = Uc(n), o = a.oldLayout, s = _t(t), l = s.dataIndex, u = {
            x: n.x,
            y: n.y,
            rotation: n.rotation
          }, f = e.getData(s.dataType);
          if (o) {
            n.attr(o);
            var v = t.prevStates;
            v && (wt(v, "select") >= 0 && n.attr(a.oldLayoutSelect), wt(v, "emphasis") >= 0 && n.attr(a.oldLayoutEmphasis)), qt(n, u, e, l);
          } else if (n.attr(u), !Zi(n).valueAnimation) {
            var h = ut(n.style.opacity, 1);
            n.style.opacity = 0, ie(n, {
              style: {
                opacity: h
              }
            }, e, l);
          }
          if (a.oldLayout = u, n.states.select) {
            var c = a.oldLayoutSelect = {};
            eu(c, u, ru), eu(c, n.states.select, ru);
          }
          if (n.states.emphasis) {
            var d = a.oldLayoutEmphasis = {};
            eu(d, u, ru), eu(d, n.states.emphasis, ru);
          }
          tC(n, l, f, e, e);
        }
        if (i && !i.ignore && !i.invisible) {
          var a = iI(i), o = a.oldLayout, g = {
            points: i.shape.points
          };
          o ? (i.attr({
            shape: o
          }), qt(i, {
            shape: g
          }, e)) : (i.setShape(g), i.style.strokePercent = 0, ie(i, {
            style: {
              strokePercent: 1
            }
          }, e)), a.oldLayout = g;
        }
      }, r;
    }()
  ), Yc = kt();
  function S_(r) {
    r.registerUpdateLifecycle("series:beforeupdate", function(t, e, n) {
      var i = Yc(e).labelManager;
      i || (i = Yc(e).labelManager = new aI()), i.clearLabels();
    }), r.registerUpdateLifecycle("series:layoutlabels", function(t, e, n) {
      var i = Yc(e).labelManager;
      n.updatedSeries.forEach(function(a) {
        i.addLabelsOfSeries(e.getViewOfSeriesModel(a));
      }), i.updateLayoutConfig(e), i.layout(e), i.processLabelsOverall();
    });
  }
  Pe(S_);
  function w_(r, t, e) {
    var n = Dt.createCanvas(), i = t.getWidth(), a = t.getHeight(), o = n.style;
    return o && (o.position = "absolute", o.left = "0", o.top = "0", o.width = i + "px", o.height = a + "px", n.setAttribute("data-zr-dom-id", r)), n.width = i * e, n.height = a * e, n;
  }
  var Xc = function(r) {
    x(t, r);
    function t(e, n, i) {
      var a = r.call(this) || this;
      a.motionBlur = !1, a.lastFrameAlpha = 0.7, a.dpr = 1, a.virtual = !1, a.config = {}, a.incremental = !1, a.zlevel = 0, a.maxRepaintRectCount = 5, a.__dirty = !0, a.__firstTimePaint = !0, a.__used = !1, a.__drawIndex = 0, a.__startIndex = 0, a.__endIndex = 0, a.__prevStartIndex = null, a.__prevEndIndex = null;
      var o;
      i = i || ms, typeof e == "string" ? o = w_(e, n, i) : j(e) && (o = e, e = o.id), a.id = e, a.dom = o;
      var s = o.style;
      return s && (ku(o), o.onselectstart = function() {
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
      this.domBack = w_("back-" + this.id, this.painter, e), this.ctxBack = this.domBack.getContext("2d"), e !== 1 && this.ctxBack.scale(e, e);
    }, t.prototype.createRepaintRects = function(e, n, i, a) {
      if (this.__firstTimePaint)
        return this.__firstTimePaint = !1, null;
      var o = [], s = this.maxRepaintRectCount, l = !1, u = new dt(0, 0, 0, 0);
      function f(_) {
        if (!(!_.isFinite() || _.isZero()))
          if (o.length === 0) {
            var S = new dt(0, 0, 0, 0);
            S.copy(_), o.push(S);
          } else {
            for (var b = !1, C = 1 / 0, T = 0, D = 0; D < o.length; ++D) {
              var M = o[D];
              if (M.intersect(_)) {
                var P = new dt(0, 0, 0, 0);
                P.copy(M), P.union(_), o[D] = P, b = !0;
                break;
              } else if (l) {
                u.copy(_), u.union(M);
                var E = _.width * _.height, A = M.width * M.height, k = u.width * u.height, N = k - E - A;
                N < C && (C = N, T = D);
              }
            }
            if (l && (o[T].union(_), b = !0), !b) {
              var S = new dt(0, 0, 0, 0);
              S.copy(_), o.push(S);
            }
            l || (l = o.length >= s);
          }
      }
      for (var h = this.__startIndex; h < this.__endIndex; ++h) {
        var v = e[h];
        if (v) {
          var c = v.shouldBePainted(i, a, !0, !0), d = v.__isRendered && (v.__dirty & Oe || !c) ? v.getPrevPaintRect() : null;
          d && f(d);
          var g = c && (v.__dirty & Oe || !v.__isRendered) ? v.getPaintRect() : null;
          g && f(g);
        }
      }
      for (var h = this.__prevStartIndex; h < this.__prevEndIndex; ++h) {
        var v = n[h], c = v.shouldBePainted(i, a, !0, !0);
        if (v && (!c || !v.__zr) && v.__isRendered) {
          var d = v.getPrevPaintRect();
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
          for (var m = h + 1; m < o.length; )
            o[h].intersect(o[m]) ? (p = !0, o[h].union(o[m]), o.splice(m, 1)) : m++;
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
      var u = this.motionBlur && !e, f = this.lastFrameAlpha, h = this.dpr, v = this;
      u && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(a, 0, 0, s / h, l / h));
      var c = this.domBack;
      function d(g, p, m, _) {
        if (o.clearRect(g, p, m, _), n && n !== "transparent") {
          var S = void 0;
          if (pa(n)) {
            var b = n.global || n.__width === m && n.__height === _;
            S = b && n.__canvasGradient || nc(o, n, {
              x: 0,
              y: 0,
              width: m,
              height: _
            }), n.__canvasGradient = S, n.__width = m, n.__height = _;
          } else
            td(n) && (n.scaleX = n.scaleX || h, n.scaleY = n.scaleY || h, S = ic(o, n, {
              dirty: function() {
                v.setUnpainted(), v.__painter.refresh();
              }
            }));
          o.save(), o.fillStyle = S || n, o.fillRect(g, p, m, _), o.restore();
        }
        u && (o.save(), o.globalAlpha = f, o.drawImage(c, g, p, m, _), o.restore());
      }
      !i || u ? d(0, 0, s, l) : i.length && L(i, function(g) {
        d(g.x * h, g.y * h, g.width * h, g.height * h);
      });
    }, t;
  }(wr), b_ = 1e5, _i = 314159, nu = 0.01, oI = 1e-3;
  function sI(r) {
    return r ? r.__builtin__ ? !0 : !(typeof r.resize != "function" || typeof r.refresh != "function") : !1;
  }
  function lI(r, t) {
    var e = document.createElement("div");
    return e.style.cssText = ["position:relative", "width:" + r + "px", "height:" + t + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", e;
  }
  var uI = function() {
    function r(t, e, n, i) {
      this.type = "canvas", this._zlevelList = [], this._prevDisplayList = [], this._layers = {}, this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas";
      var a = !t.nodeName || t.nodeName.toUpperCase() === "CANVAS";
      this._opts = n = W({}, n || {}), this.dpr = n.devicePixelRatio || ms, this._singleCanvas = a, this.root = t;
      var o = t.style;
      o && (ku(t), t.innerHTML = ""), this.storage = e;
      var s = this._zlevelList;
      this._prevDisplayList = [];
      var l = this._layers;
      if (a) {
        var f = t, h = f.width, v = f.height;
        n.width != null && (h = n.width), n.height != null && (v = n.height), this.dpr = n.devicePixelRatio || 1, f.width = h * this.dpr, f.height = v * this.dpr, this._width = h, this._height = v;
        var c = new Xc(f, this, this.dpr);
        c.__builtin__ = !0, c.initContext(), l[_i] = c, c.zlevel = _i, s.push(_i), this._domRoot = t;
      } else {
        this._width = Il(t, 0, n), this._height = Il(t, 1, n);
        var u = this._domRoot = lI(this._width, this._height);
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
          s.__inHover && (n || (n = this._hoverlayer = this.getLayer(b_)), a || (a = n.ctx, a.save()), vi(a, s, i, o === e - 1));
        }
        a && a.restore();
      }
    }, r.prototype.getHoverLayer = function() {
      return this.getLayer(b_);
    }, r.prototype.paintOne = function(t, e) {
      ac(t, e);
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
          ju(function() {
            l._paintList(t, e, n, i);
          });
        }
      }
    }, r.prototype._compositeManually = function() {
      var t = this.getLayer(_i).ctx, e = this._domRoot.width, n = this._domRoot.height;
      t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function(i) {
        i.virtual && t.drawImage(i.dom, 0, 0, e, n);
      });
    }, r.prototype._doPaintList = function(t, e, n) {
      for (var i = this, a = [], o = this._opts.useDirtyRect, s = 0; s < this._zlevelList.length; s++) {
        var l = this._zlevelList[s], u = this._layers[l];
        u.__builtin__ && u !== this._hoverlayer && (u.__dirty || n) && a.push(u);
      }
      for (var f = !0, h = !1, v = function(g) {
        var p = a[g], m = p.ctx, _ = o && p.createRepaintRects(t, e, c._width, c._height), S = n ? p.__startIndex : p.__drawIndex, b = !n && p.incremental && Date.now, C = b && Date.now(), T = p.zlevel === c._zlevelList[0] ? c._backgroundColor : null;
        if (p.__startIndex === p.__endIndex)
          p.clear(!1, T, _);
        else if (S === p.__startIndex) {
          var D = t[S];
          (!D.incremental || !D.notClear || n) && p.clear(!1, T, _);
        }
        S === -1 && (console.error("For some unknown reason. drawIndex is -1"), S = p.__startIndex);
        var M, P = function(N) {
          var B = {
            inHover: !1,
            allClipped: !1,
            prevEl: null,
            viewWidth: i._width,
            viewHeight: i._height
          };
          for (M = S; M < p.__endIndex; M++) {
            var z = t[M];
            if (z.__inHover && (h = !0), i._doPaintEl(z, p, o, N, B, M === p.__endIndex - 1), b) {
              var G = Date.now() - C;
              if (G > 15)
                break;
            }
          }
          B.prevElClipPaths && m.restore();
        };
        if (_)
          if (_.length === 0)
            M = p.__endIndex;
          else
            for (var E = c.dpr, A = 0; A < _.length; ++A) {
              var k = _[A];
              m.save(), m.beginPath(), m.rect(k.x * E, k.y * E, k.width * E, k.height * E), m.clip(), P(k), m.restore();
            }
        else
          m.save(), P(), m.restore();
        p.__drawIndex = M, p.__drawIndex < p.__endIndex && (f = !1);
      }, c = this, d = 0; d < a.length; d++)
        v(d);
      return O.wxa && L(this._layers, function(g) {
        g && g.ctx && g.ctx.draw && g.ctx.draw();
      }), {
        finished: f,
        needsRefreshHover: h
      };
    }, r.prototype._doPaintEl = function(t, e, n, i, a, o) {
      var s = e.ctx;
      if (n) {
        var l = t.getPaintRect();
        (!i || l && l.intersect(i)) && (vi(s, t, a, o), t.setPrevPaintRect(l));
      } else
        vi(s, t, a, o);
    }, r.prototype.getLayer = function(t, e) {
      this._singleCanvas && !this._needsManuallyCompositing && (t = _i);
      var n = this._layers[t];
      return n || (n = new Xc("zr_" + t, this, this.dpr), n.zlevel = t, n.__builtin__ = !0, this._layerConfig[t] ? yt(n, this._layerConfig[t], !0) : this._layerConfig[t - nu] && yt(n, this._layerConfig[t - nu], !0), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n;
    }, r.prototype.insertLayer = function(t, e) {
      var n = this._layers, i = this._zlevelList, a = i.length, o = this._domRoot, s = null, l = -1;
      if (n[t]) {
        Qr("ZLevel " + t + " has been used already");
        return;
      }
      if (!sI(e)) {
        Qr("Layer of zlevel " + t + " is not valid");
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
      this.eachBuiltinLayer(function(h, v) {
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
        s !== u && (s = u, o = 0), i.incremental ? (f = this.getLayer(u + oI, this._needsManuallyCompositing), f.incremental = !0, o = 1) : f = this.getLayer(u + (o > 0 ? nu : 0), this._needsManuallyCompositing), f.__builtin__ || Qr("ZLevel " + u + " has been used by unkown layer " + f.id), f !== a && (f.__used = !0, f.__startIndex !== l && (f.__dirty = !0), f.__startIndex = l, f.incremental ? f.__drawIndex = -1 : f.__drawIndex = l, e(l), a = f), i.__dirty & Oe && !i.__inHover && (f.__dirty = !0, f.incremental && f.__drawIndex < 0 && (f.__drawIndex = l));
      }
      e(l), this.eachBuiltinLayer(function(h, v) {
        !h.__used && h.getElementCount() > 0 && (h.__dirty = !0, h.__startIndex = h.__endIndex = h.__drawIndex = 0), h.__dirty && h.__drawIndex < 0 && (h.__drawIndex = h.__startIndex);
      });
    }, r.prototype.clear = function() {
      return this.eachBuiltinLayer(this._clearLayer), this;
    }, r.prototype._clearLayer = function(t) {
      t.clear();
    }, r.prototype.setBackgroundColor = function(t) {
      this._backgroundColor = t, L(this._layers, function(e) {
        e.setUnpainted();
      });
    }, r.prototype.configLayer = function(t, e) {
      if (e) {
        var n = this._layerConfig;
        n[t] ? yt(n[t], e, !0) : n[t] = e;
        for (var i = 0; i < this._zlevelList.length; i++) {
          var a = this._zlevelList[i];
          if (a === t || a === t + nu) {
            var o = this._layers[a];
            yt(o, n[t], !0);
          }
        }
      }
    }, r.prototype.delLayer = function(t) {
      var e = this._layers, n = this._zlevelList, i = e[t];
      i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(wt(n, t), 1));
    }, r.prototype.resize = function(t, e) {
      if (this._domRoot.style) {
        var n = this._domRoot;
        n.style.display = "none";
        var i = this._opts, a = this.root;
        if (t != null && (i.width = t), e != null && (i.height = e), t = Il(a, 0, i), e = Il(a, 1, i), n.style.display = "", this._width !== t || e !== this._height) {
          n.style.width = t + "px", n.style.height = e + "px";
          for (var o in this._layers)
            this._layers.hasOwnProperty(o) && this._layers[o].resize(t, e);
          this.refresh(!0);
        }
        this._width = t, this._height = e;
      } else {
        if (t == null || e == null)
          return;
        this._width = t, this._height = e, this.getLayer(_i).resize(t, e);
      }
      return this;
    }, r.prototype.clearLayer = function(t) {
      var e = this._layers[t];
      e && e.clear();
    }, r.prototype.dispose = function() {
      this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
    }, r.prototype.getRenderedCanvas = function(t) {
      if (t = t || {}, this._singleCanvas && !this._compositeManually)
        return this._layers[_i].dom;
      var e = new Xc("image", this, t.pixelRatio || this.dpr);
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
          vi(n, f, o, l === u - 1);
        }
      return e.dom;
    }, r.prototype.getWidth = function() {
      return this._width;
    }, r.prototype.getHeight = function() {
      return this._height;
    }, r;
  }();
  function fI(r) {
    r.registerPainter("canvas", uI);
  }
  var hI = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = "dataset", e;
      }
      return t.prototype.init = function(e, n, i) {
        r.prototype.init.call(this, e, n, i), this._sourceManager = new Km(this), jm(this);
      }, t.prototype.mergeOption = function(e, n) {
        r.prototype.mergeOption.call(this, e, n), jm(this);
      }, t.prototype.optionUpdated = function() {
        this._sourceManager.dirty();
      }, t.prototype.getSourceManager = function() {
        return this._sourceManager;
      }, t.type = "dataset", t.defaultOption = {
        seriesLayoutBy: Lr
      }, t;
    }(pt)
  ), cI = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = "dataset", e;
      }
      return t.type = "dataset", t;
    }(de)
  );
  function vI(r) {
    r.registerComponentModel(hI), r.registerComponentView(cI);
  }
  Pe([fI, vI]), Pe(S_);
  var dI = {
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
  }, pI = function(r) {
    return Math.round(r.length / 2);
  };
  function x_(r) {
    return {
      seriesType: r,
      // FIXME:TS never used, so comment it
      // modifyOutputEnd: true,
      reset: function(t, e, n) {
        var i = t.getData(), a = t.get("sampling"), o = t.coordinateSystem, s = i.count();
        if (s > 10 && o.type === "cartesian2d" && a) {
          var l = o.getBaseAxis(), u = o.getOtherAxis(l), f = l.getExtent(), h = n.getDevicePixelRatio(), v = Math.abs(f[1] - f[0]) * (h || 1), c = Math.round(s / v);
          if (isFinite(c) && c > 1) {
            a === "lttb" && t.setData(i.lttbDownSample(i.mapDimension(u.dim), 1 / c));
            var d = void 0;
            Z(a) ? d = dI[a] : tt(a) && (d = a), d && t.setData(i.downSample(i.mapDimension(u.dim), 1 / c, d, pI));
          }
        }
      }
    };
  }
  var $c = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e;
      }
      return t.prototype.getInitialData = function(e, n) {
        return Yl(null, this, {
          useEncodeDefaulter: !0
        });
      }, t.prototype.getMarkerPosition = function(e, n, i) {
        var a = this.coordinateSystem;
        if (a && a.clampData) {
          var o = a.clampData(e), s = a.dataToPoint(o);
          if (i)
            L(a.getAxes(), function(v, c) {
              if (v.type === "category" && n != null) {
                var d = v.getTicksCoords(), g = o[c], p = n[c] === "x1" || n[c] === "y1";
                if (p && (g += 1), d.length < 2)
                  return;
                if (d.length === 2) {
                  s[c] = v.toGlobalCoord(v.getExtent()[p ? 1 : 0]);
                  return;
                }
                for (var m = void 0, _ = void 0, S = 1, b = 0; b < d.length; b++) {
                  var C = d[b].coord, T = b === d.length - 1 ? d[b - 1].tickValue + S : d[b].tickValue;
                  if (T === g) {
                    _ = C;
                    break;
                  } else if (T < g)
                    m = C;
                  else if (m != null && T > g) {
                    _ = (C + m) / 2;
                    break;
                  }
                  b === 1 && (S = T - d[0].tickValue);
                }
                _ == null && (m ? m && (_ = d[d.length - 1].coord) : _ = d[0].coord), s[c] = v.toGlobalCoord(_);
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
    }(De)
  );
  De.registerClass($c);
  var gI = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e;
      }
      return t.prototype.getInitialData = function() {
        return Yl(null, this, {
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
      }, t.type = "series.bar", t.dependencies = ["grid", "polar"], t.defaultOption = Kg($c.defaultOption, {
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
    }($c)
  );
  function T_(r, t, e, n, i) {
    var a = r.getArea(), o = a.x, s = a.y, l = a.width, u = a.height, f = e.get(["lineStyle", "width"]) || 2;
    o -= f / 2, s -= f / 2, l += f, u += f, o = Math.floor(o), l = Math.round(l);
    var h = new Vt({
      shape: {
        x: o,
        y: s,
        width: l,
        height: u
      }
    });
    if (t) {
      var v = r.getBaseAxis(), c = v.isHorizontal(), d = v.inverse;
      c ? (d && (h.shape.x += l), h.shape.width = 0) : (d || (h.shape.y += u), h.shape.height = 0);
      var g = tt(i) ? function(p) {
        i(p, h);
      } : null;
      ie(h, {
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
  function C_(r, t, e) {
    var n = r.getArea(), i = zt(n.r0, 1), a = zt(n.r, 1), o = new Wr({
      shape: {
        cx: zt(r.cx, 1),
        cy: zt(r.cy, 1),
        r0: i,
        r: a,
        startAngle: n.startAngle,
        endAngle: n.endAngle,
        clockwise: n.clockwise
      }
    });
    if (t) {
      var s = r.getBaseAxis().dim === "angle";
      s ? o.shape.endAngle = n.startAngle : o.shape.r = i, ie(o, {
        shape: {
          endAngle: n.endAngle,
          r: a
        }
      }, e);
    }
    return o;
  }
  function mI(r, t, e, n, i) {
    if (r) {
      if (r.type === "polar")
        return C_(r, t, e);
      if (r.type === "cartesian2d")
        return T_(r, t, e, n, i);
    } else
      return null;
    return null;
  }
  var yI = (
    /** @class */
    function() {
      function r() {
        this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
      }
      return r;
    }()
  ), D_ = (
    /** @class */
    function(r) {
      x(t, r);
      function t(e) {
        var n = r.call(this, e) || this;
        return n.type = "sausage", n;
      }
      return t.prototype.getDefaultShape = function() {
        return new yI();
      }, t.prototype.buildPath = function(e, n) {
        var i = n.cx, a = n.cy, o = Math.max(n.r0 || 0, 0), s = Math.max(n.r, 0), l = (s - o) * 0.5, u = o + l, f = n.startAngle, h = n.endAngle, v = n.clockwise, c = Math.PI * 2, d = v ? h - f < c : f - h < c;
        d || (f = h - (v ? c : -c));
        var g = Math.cos(f), p = Math.sin(f), m = Math.cos(h), _ = Math.sin(h);
        d ? (e.moveTo(g * o + i, p * o + a), e.arc(g * u + i, p * u + a, l, -Math.PI + f, f, !v)) : e.moveTo(g * s + i, p * s + a), e.arc(i, a, s, f, h, !v), e.arc(m * u + i, _ * u + a, l, h - Math.PI * 2, h - Math.PI, !v), o !== 0 && e.arc(i, a, o, h, f, v);
      }, t;
    }(xt)
  );
  function qc(r, t) {
    return r.type === t;
  }
  function Zc(r, t) {
    var e = r.mapDimensionsAll("defaultedLabel"), n = e.length;
    if (n === 1) {
      var i = ea(r, t, e[0]);
      return i != null ? i + "" : null;
    } else if (n) {
      for (var a = [], o = 0; o < e.length; o++)
        a.push(ea(r, t, e[o]));
      return a.join(" ");
    }
  }
  function M_(r, t) {
    var e = r.mapDimensionsAll("defaultedLabel");
    if (!X(t))
      return t + "";
    for (var n = [], i = 0; i < e.length; i++) {
      var a = r.getDimensionIndex(e[i]);
      a >= 0 && n.push(t[a]);
    }
    return n.join(" ");
  }
  function _I(r, t) {
    t = t || {};
    var e = t.isRoundCap;
    return function(n, i, a) {
      var o = i.position;
      if (!o || o instanceof Array)
        return _s(n, i, a);
      var s = r(o), l = i.distance != null ? i.distance : 5, u = this.shape, f = u.cx, h = u.cy, v = u.r, c = u.r0, d = (v + c) / 2, g = u.startAngle, p = u.endAngle, m = (g + p) / 2, _ = e ? Math.abs(v - c) / 2 : 0, S = Math.cos, b = Math.sin, C = f + v * S(g), T = h + v * b(g), D = "left", M = "top";
      switch (s) {
        case "startArc":
          C = f + (c - l) * S(m), T = h + (c - l) * b(m), D = "center", M = "top";
          break;
        case "insideStartArc":
          C = f + (c + l) * S(m), T = h + (c + l) * b(m), D = "center", M = "bottom";
          break;
        case "startAngle":
          C = f + d * S(g) + iu(g, l + _, !1), T = h + d * b(g) + au(g, l + _, !1), D = "right", M = "middle";
          break;
        case "insideStartAngle":
          C = f + d * S(g) + iu(g, -l + _, !1), T = h + d * b(g) + au(g, -l + _, !1), D = "left", M = "middle";
          break;
        case "middle":
          C = f + d * S(m), T = h + d * b(m), D = "center", M = "middle";
          break;
        case "endArc":
          C = f + (v + l) * S(m), T = h + (v + l) * b(m), D = "center", M = "bottom";
          break;
        case "insideEndArc":
          C = f + (v - l) * S(m), T = h + (v - l) * b(m), D = "center", M = "top";
          break;
        case "endAngle":
          C = f + d * S(p) + iu(p, l + _, !0), T = h + d * b(p) + au(p, l + _, !0), D = "left", M = "middle";
          break;
        case "insideEndAngle":
          C = f + d * S(p) + iu(p, -l + _, !0), T = h + d * b(p) + au(p, -l + _, !0), D = "right", M = "middle";
          break;
        default:
          return _s(n, i, a);
      }
      return n = n || {}, n.x = C, n.y = T, n.align = D, n.verticalAlign = M, n;
    };
  }
  function SI(r, t, e, n) {
    if (Mt(n)) {
      r.setTextConfig({
        rotation: n
      });
      return;
    } else if (X(t)) {
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
  function iu(r, t, e) {
    return t * Math.sin(r) * (e ? -1 : 1);
  }
  function au(r, t, e) {
    return t * Math.cos(r) * (e ? 1 : -1);
  }
  function Lo(r, t, e) {
    var n = r.get("borderRadius");
    if (n == null)
      return e ? {
        cornerRadius: 0
      } : null;
    X(n) || (n = [n, n, n, n]);
    var i = Math.abs(t.r || 0 - t.r0 || 0);
    return {
      cornerRadius: K(n, function(a) {
        return un(a, i);
      })
    };
  }
  var Kc = Math.max, jc = Math.min;
  function wI(r, t) {
    var e = r.getArea && r.getArea();
    if (qc(r, "cartesian2d")) {
      var n = r.getBaseAxis();
      if (n.type !== "category" || !n.onBand) {
        var i = t.getLayout("bandWidth");
        n.isHorizontal() ? (e.x -= i, e.width += i * 2) : (e.y -= i, e.height += i * 2);
      }
    }
    return e;
  }
  var bI = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        var e = r.call(this) || this;
        return e.type = t.type, e._isFirstFrame = !0, e;
      }
      return t.prototype.render = function(e, n, i, a) {
        this._model = e, this._removeOnRenderedListener(i), this._updateDrawMode(e);
        var o = e.get("coordinateSystem");
        o === "cartesian2d" || o === "polar" ? (this._progressiveEls = null, this._isLargeDraw ? this._renderLarge(e, n, i) : this._renderNormal(e, n, i, a)) : ee("Only cartesian2d and polar supported for bar.");
      }, t.prototype.incrementalPrepareRender = function(e) {
        this._clear(), this._updateDrawMode(e), this._updateLargeClip(e);
      }, t.prototype.incrementalRender = function(e, n) {
        this._progressiveEls = [], this._incrementalRenderLarge(e, n);
      }, t.prototype.eachRendered = function(e) {
        il(this._progressiveEls || this.group, e);
      }, t.prototype._updateDrawMode = function(e) {
        var n = e.pipelineContext.large;
        (this._isLargeDraw == null || n !== this._isLargeDraw) && (this._isLargeDraw = n, this._clear());
      }, t.prototype._renderNormal = function(e, n, i, a) {
        var o = this.group, s = e.getData(), l = this._data, u = e.coordinateSystem, f = u.getBaseAxis(), h;
        u.type === "cartesian2d" ? h = f.isHorizontal() : u.type === "polar" && (h = f.dim === "angle");
        var v = e.isAnimationEnabled() ? e : null, c = xI(e, u);
        c && this._enableRealtimeSort(c, s, i);
        var d = e.get("clip", !0) || c, g = wI(u, s);
        o.removeClipPath();
        var p = e.get("roundCap", !0), m = e.get("showBackground", !0), _ = e.getModel("backgroundStyle"), S = _.get("borderRadius") || 0, b = [], C = this._backgroundEls, T = a && a.isInitSort, D = a && a.type === "changeAxisOrder";
        function M(A) {
          var k = ou[u.type](s, A), N = II(u, h, k);
          return N.useStyle(_.getItemStyle()), u.type === "cartesian2d" ? N.setShape("r", S) : N.setShape("cornerRadius", S), b[A] = N, N;
        }
        s.diff(l).add(function(A) {
          var k = s.getItemModel(A), N = ou[u.type](s, A, k);
          if (m && M(A), !(!s.hasValue(A) || !E_[u.type](N))) {
            var B = !1;
            d && (B = A_[u.type](g, N));
            var z = P_[u.type](e, s, A, N, h, v, f.model, !1, p);
            c && (z.forceLabelAnimation = !0), O_(z, s, A, k, N, e, h, u.type === "polar"), T ? z.attr({
              shape: N
            }) : c ? I_(c, v, z, N, A, h, !1, !1) : ie(z, {
              shape: N
            }, e, A), s.setItemGraphicEl(A, z), o.add(z), z.ignore = B;
          }
        }).update(function(A, k) {
          var N = s.getItemModel(A), B = ou[u.type](s, A, N);
          if (m) {
            var z = void 0;
            C.length === 0 ? z = M(k) : (z = C[k], z.useStyle(_.getItemStyle()), u.type === "cartesian2d" ? z.setShape("r", S) : z.setShape("cornerRadius", S), b[A] = z);
            var G = ou[u.type](s, A), J = F_(h, G, u);
            qt(z, {
              shape: J
            }, v, A);
          }
          var U = l.getItemGraphicEl(k);
          if (!s.hasValue(A) || !E_[u.type](B)) {
            o.remove(U);
            return;
          }
          var Y = !1;
          if (d && (Y = A_[u.type](g, B), Y && o.remove(U)), U ? fh(U) : U = P_[u.type](e, s, A, B, h, v, f.model, !!U, p), c && (U.forceLabelAnimation = !0), D) {
            var Q = U.getTextContent();
            if (Q) {
              var ot = Zi(Q);
              ot.prevValue != null && (ot.prevValue = ot.value);
            }
          } else
            O_(U, s, A, N, B, e, h, u.type === "polar");
          T ? U.attr({
            shape: B
          }) : c ? I_(c, v, U, B, A, h, !0, D) : qt(U, {
            shape: B
          }, e, A, null), s.setItemGraphicEl(A, U), U.ignore = Y, o.add(U);
        }).remove(function(A) {
          var k = l.getItemGraphicEl(A);
          k && Js(k, e, A);
        }).execute();
        var P = this._backgroundGroup || (this._backgroundGroup = new Zt());
        P.removeAll();
        for (var E = 0; E < b.length; ++E)
          P.add(b[E]);
        o.add(P), this._backgroundEls = b, this._data = s;
      }, t.prototype._renderLarge = function(e, n, i) {
        this._clear(), N_(e, this.group), this._updateLargeClip(e);
      }, t.prototype._incrementalRenderLarge = function(e, n) {
        this._removeBackground(), N_(n, this.group, this._progressiveEls, !0);
      }, t.prototype._updateLargeClip = function(e) {
        var n = e.get("clip", !0) && mI(e.coordinateSystem, !1, e), i = this.group;
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
          ordinalNumbers: K(a, function(o) {
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
          Js(a, e, _t(a).dataIndex);
        })) : n.removeAll(), this._data = null, this._isFirstFrame = !0;
      }, t.prototype._removeBackground = function() {
        this.group.remove(this._backgroundGroup), this._backgroundGroup = null;
      }, t.type = "bar", t;
    }(pe)
  ), A_ = {
    cartesian2d: function(r, t) {
      var e = t.width < 0 ? -1 : 1, n = t.height < 0 ? -1 : 1;
      e < 0 && (t.x += t.width, t.width = -t.width), n < 0 && (t.y += t.height, t.height = -t.height);
      var i = r.x + r.width, a = r.y + r.height, o = Kc(t.x, r.x), s = jc(t.x + t.width, i), l = Kc(t.y, r.y), u = jc(t.y + t.height, a), f = s < o, h = u < l;
      return t.x = f && o > i ? s : o, t.y = h && l > a ? u : l, t.width = f ? 0 : s - o, t.height = h ? 0 : u - l, e < 0 && (t.x += t.width, t.width = -t.width), n < 0 && (t.y += t.height, t.height = -t.height), f || h;
    },
    polar: function(r, t) {
      var e = t.r0 <= t.r ? 1 : -1;
      if (e < 0) {
        var n = t.r;
        t.r = t.r0, t.r0 = n;
      }
      var i = jc(t.r, r.r), a = Kc(t.r0, r.r0);
      t.r = i, t.r0 = a;
      var o = i - a < 0;
      if (e < 0) {
        var n = t.r;
        t.r = t.r0, t.r0 = n;
      }
      return o;
    }
  }, P_ = {
    cartesian2d: function(r, t, e, n, i, a, o, s, l) {
      var u = new Vt({
        shape: W({}, n),
        z2: 1
      });
      if (u.__dataIndex = e, u.name = "item", a) {
        var f = u.shape, h = i ? "height" : "width";
        f[h] = 0;
      }
      return u;
    },
    polar: function(r, t, e, n, i, a, o, s, l) {
      var u = !i && l ? D_ : Wr, f = new u({
        shape: n,
        z2: 1
      });
      f.name = "item";
      var h = R_(i);
      if (f.calculateTextPosition = _I(h, {
        isRoundCap: u === D_
      }), a) {
        var v = f.shape, c = i ? "r" : "endAngle", d = {};
        v[c] = i ? n.r0 : n.startAngle, d[c] = n[c], (s ? qt : ie)(f, {
          shape: d
          // __value: typeof dataValue === 'string' ? parseInt(dataValue, 10) : dataValue
        }, a);
      }
      return f;
    }
  };
  function xI(r, t) {
    var e = r.get("realtimeSort", !0), n = t.getBaseAxis();
    if (e && (n.type !== "category" && ee("`realtimeSort` will not work because this bar series is not based on a category axis."), t.type !== "cartesian2d" && ee("`realtimeSort` will not work because this bar series is not on cartesian2d.")), e && n.type === "category" && t.type === "cartesian2d")
      return {
        baseAxis: n,
        otherAxis: t.getOtherAxis(n)
      };
  }
  function I_(r, t, e, n, i, a, o, s) {
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
    }), s || (o ? qt : ie)(e, {
      shape: l
    }, t, i, null);
    var f = t ? r.baseAxis.model : null;
    (o ? qt : ie)(e, {
      shape: u
    }, f, i);
  }
  function L_(r, t) {
    for (var e = 0; e < t.length; e++)
      if (!isFinite(r[t[e]]))
        return !0;
    return !1;
  }
  var TI = ["x", "y", "width", "height"], CI = ["cx", "cy", "r", "startAngle", "endAngle"], E_ = {
    cartesian2d: function(r) {
      return !L_(r, TI);
    },
    polar: function(r) {
      return !L_(r, CI);
    }
  }, ou = {
    // itemModel is only used to get borderWidth, which is not needed
    // when calculating bar background layout.
    cartesian2d: function(r, t, e) {
      var n = r.getItemLayout(t), i = e ? MI(e, n) : 0, a = n.width > 0 ? 1 : -1, o = n.height > 0 ? 1 : -1;
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
  function DI(r) {
    return r.startAngle != null && r.endAngle != null && r.startAngle === r.endAngle;
  }
  function R_(r) {
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
  function O_(r, t, e, n, i, a, o, s) {
    var l = t.getItemVisual(e, "style");
    if (s) {
      if (!a.get("roundCap")) {
        var f = r.shape, h = Lo(n.getModel("itemStyle"), f, !0);
        W(f, h), r.setShape(f);
      }
    } else {
      var u = n.get(["itemStyle", "borderRadius"]) || 0;
      r.setShape("r", u);
    }
    r.useStyle(l);
    var v = n.getShallow("cursor");
    v && r.attr("cursor", v);
    var c = s ? o ? i.r >= i.r0 ? "endArc" : "startArc" : i.endAngle >= i.startAngle ? "endAngle" : "startAngle" : o ? i.height >= 0 ? "bottom" : "top" : i.width >= 0 ? "right" : "left", d = Ja(n);
    Qa(r, d, {
      labelFetcher: a,
      labelDataIndex: e,
      defaultText: Zc(a.getData(), e),
      inheritColor: l.fill,
      defaultOpacity: l.opacity,
      defaultOutsidePosition: c
    });
    var g = r.getTextContent();
    if (s && g) {
      var p = n.get(["label", "position"]);
      r.textConfig.inside = p === "middle" ? !0 : null, SI(r, p === "outside" ? c : p, R_(o), n.get(["label", "rotate"]));
    }
    JT(g, d, a.getRawValue(e), function(_) {
      return M_(t, _);
    });
    var m = n.getModel(["emphasis"]);
    Ya(r, m.get("focus"), m.get("blurScope"), m.get("disabled")), Gs(r, n), DI(i) && (r.style.fill = "none", r.style.stroke = "none", L(r.states, function(_) {
      _.style && (_.style.fill = _.style.stroke = "none");
    }));
  }
  function MI(r, t) {
    var e = r.get(["itemStyle", "borderColor"]);
    if (!e || e === "none")
      return 0;
    var n = r.get(["itemStyle", "borderWidth"]) || 0, i = isNaN(t.width) ? Number.MAX_VALUE : Math.abs(t.width), a = isNaN(t.height) ? Number.MAX_VALUE : Math.abs(t.height);
    return Math.min(n, i, a);
  }
  var AI = (
    /** @class */
    function() {
      function r() {
      }
      return r;
    }()
  ), k_ = (
    /** @class */
    function(r) {
      x(t, r);
      function t(e) {
        var n = r.call(this, e) || this;
        return n.type = "largeBar", n;
      }
      return t.prototype.getDefaultShape = function() {
        return new AI();
      }, t.prototype.buildPath = function(e, n) {
        for (var i = n.points, a = this.baseDimIdx, o = 1 - this.baseDimIdx, s = [], l = [], u = this.barWidth, f = 0; f < i.length; f += 3)
          l[a] = u, l[o] = i[f + 2], s[a] = i[f + a], s[o] = i[f + o], e.rect(s[0], s[1], l[0], l[1]);
      }, t;
    }(xt)
  );
  function N_(r, t, e, n) {
    var i = r.getData(), a = i.getLayout("valueAxisHorizontal") ? 1 : 0, o = i.getLayout("largeDataIndices"), s = i.getLayout("size"), l = r.getModel("backgroundStyle"), u = i.getLayout("largeBackgroundPoints");
    if (u) {
      var f = new k_({
        shape: {
          points: u
        },
        incremental: !!n,
        silent: !0,
        z2: 0
      });
      f.baseDimIdx = a, f.largeDataIndices = o, f.barWidth = s, f.useStyle(l.getItemStyle()), t.add(f), e && e.push(f);
    }
    var h = new k_({
      shape: {
        points: i.getLayout("largePoints")
      },
      incremental: !!n,
      ignoreCoarsePointer: !0,
      z2: 1
    });
    h.baseDimIdx = a, h.largeDataIndices = o, h.barWidth = s, t.add(h), h.useStyle(i.getVisual("style")), _t(h).seriesIndex = r.seriesIndex, r.get("silent") || (h.on("mousedown", B_), h.on("mousemove", B_)), e && e.push(h);
  }
  var B_ = Cl(function(r) {
    var t = this, e = PI(t, r.offsetX, r.offsetY);
    _t(t).dataIndex = e >= 0 ? e : null;
  }, 30, !1);
  function PI(r, t, e) {
    for (var n = r.baseDimIdx, i = 1 - n, a = r.shape.points, o = r.largeDataIndices, s = [], l = [], u = r.barWidth, f = 0, h = a.length / 3; f < h; f++) {
      var v = f * 3;
      if (l[n] = u, l[i] = a[v + 2], s[n] = a[v + n], s[i] = a[v + i], l[i] < 0 && (s[i] += l[i], l[i] = -l[i]), t >= s[0] && t <= s[0] + l[0] && e >= s[1] && e <= s[1] + l[1])
        return o[f];
    }
    return -1;
  }
  function F_(r, t, e) {
    if (qc(e, "cartesian2d")) {
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
  function II(r, t, e) {
    var n = r.type === "polar" ? Wr : Vt;
    return new n({
      shape: F_(t, e, r),
      silent: !0,
      z2: 0
    });
  }
  function LI(r) {
    r.registerChartView(bI), r.registerSeriesModel(gI), r.registerLayout(r.PRIORITY.VISUAL.LAYOUT, Ot(ZA, "bar")), r.registerLayout(r.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, KA("bar")), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, x_("bar")), r.registerAction({
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
  Pe(LI);
  var EI = (
    /** @class */
    function(r) {
      x(t, r);
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
        return Yl(null, this, {
          useEncodeDefaulter: !0
        });
      }, t.prototype.getLegendIcon = function(e) {
        var n = new Zt(), i = hi("line", 0, e.itemHeight / 2, e.itemWidth, 0, e.lineStyle.stroke, !1);
        n.add(i), i.setStyle(e.lineStyle);
        var a = this.getData().getVisual("symbol"), o = this.getData().getVisual("symbolRotate"), s = a === "none" ? "circle" : a, l = e.itemHeight * 0.8, u = hi(s, (e.itemWidth - l) / 2, (e.itemHeight - l) / 2, l, l, e.itemStyle.fill);
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
    }(De)
  ), Qc = (
    /** @class */
    function(r) {
      x(t, r);
      function t(e, n, i, a) {
        var o = r.call(this) || this;
        return o.updateData(e, n, i, a), o;
      }
      return t.prototype._createSymbol = function(e, n, i, a, o) {
        this.removeAll();
        var s = hi(e, -1, -1, 2, 2, null, o);
        s.attr({
          z2: 100,
          culling: !0,
          scaleX: a[0] / 2,
          scaleY: a[1] / 2
        }), s.drift = RI, this._symbolType = e, this.add(s);
      }, t.prototype.stopSymbolAnimation = function(e) {
        this.childAt(0).stopAnimation(null, e);
      }, t.prototype.getSymbolType = function() {
        return this._symbolType;
      }, t.prototype.getSymbolPath = function() {
        return this.childAt(0);
      }, t.prototype.highlight = function() {
        Fs(this.childAt(0));
      }, t.prototype.downplay = function() {
        zs(this.childAt(0));
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
          var v = this.childAt(0);
          v.silent = !1;
          var c = {
            scaleX: l[0] / 2,
            scaleY: l[1] / 2
          };
          f ? v.attr(c) : qt(v, c, s, n), fh(v);
        }
        if (this._updateCommon(e, n, l, i, a), u) {
          var v = this.childAt(0);
          if (!f) {
            var c = {
              scaleX: this._sizeX,
              scaleY: this._sizeY,
              style: {
                // Always fadeIn. Because it has fadeOut animation when symbol is removed..
                opacity: v.style.opacity
              }
            };
            v.scaleX = v.scaleY = 0, v.style.opacity = 0, ie(v, c, s, n);
          }
        }
        f && this.childAt(0).stopAnimation("leave");
      }, t.prototype._updateCommon = function(e, n, i, a, o) {
        var s = this.childAt(0), l = e.hostModel, u, f, h, v, c, d, g, p, m;
        if (a && (u = a.emphasisItemStyle, f = a.blurItemStyle, h = a.selectItemStyle, v = a.focus, c = a.blurScope, g = a.labelStatesModels, p = a.hoverScale, m = a.cursorStyle, d = a.emphasisDisabled), !a || e.hasItemOption) {
          var _ = a && a.itemModel ? a.itemModel : e.getItemModel(n), S = _.getModel("emphasis");
          u = S.getModel("itemStyle").getItemStyle(), h = _.getModel(["select", "itemStyle"]).getItemStyle(), f = _.getModel(["blur", "itemStyle"]).getItemStyle(), v = S.get("focus"), c = S.get("blurScope"), d = S.get("disabled"), g = Ja(_), p = S.getShallow("scale"), m = _.getShallow("cursor");
        }
        var b = e.getItemVisual(n, "symbolRotate");
        s.attr("rotation", (b || 0) * Math.PI / 180 || 0);
        var C = Ay(e.getItemVisual(n, "symbolOffset"), i);
        C && (s.x = C[0], s.y = C[1]), m && s.attr("cursor", m);
        var T = e.getItemVisual(n, "style"), D = T.fill;
        if (s instanceof Gr) {
          var M = s.style;
          s.useStyle(W({
            // TODO other properties like x, y ?
            image: M.image,
            x: M.x,
            y: M.y,
            width: M.width,
            height: M.height
          }, T));
        } else
          s.__isEmptyBrush ? s.useStyle(W({}, T)) : s.useStyle(T), s.style.decal = null, s.setColor(D, o && o.symbolInnerColor), s.style.strokeNoScale = !0;
        var P = e.getItemVisual(n, "liftZ"), E = this._z2;
        P != null ? E == null && (this._z2 = s.z2, s.z2 += P) : E != null && (s.z2 = E, this._z2 = null);
        var A = o && o.useNameLabel;
        Qa(s, g, {
          labelFetcher: l,
          labelDataIndex: n,
          defaultText: k,
          inheritColor: D,
          defaultOpacity: T.opacity
        });
        function k(z) {
          return A ? e.getName(z) : Zc(e, z);
        }
        this._sizeX = i[0] / 2, this._sizeY = i[1] / 2;
        var N = s.ensureState("emphasis");
        N.style = u, s.ensureState("select").style = h, s.ensureState("blur").style = f;
        var B = p == null || p === !0 ? Math.max(1.1, 3 / this._sizeY) : isFinite(p) && p > 0 ? +p : 1;
        N.scaleX = this._sizeX * B, N.scaleY = this._sizeY * B, this.setSymbolScale(1), Ya(this, v, c, d);
      }, t.prototype.setSymbolScale = function(e) {
        this.scaleX = this.scaleY = e;
      }, t.prototype.fadeOut = function(e, n, i) {
        var a = this.childAt(0), o = _t(this).dataIndex, s = i && i.animation;
        if (this.silent = a.silent = !0, i && i.fadeLabel) {
          var l = a.getTextContent();
          l && Qs(l, {
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
        Qs(a, {
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
        return CM(e.getItemVisual(n, "symbolSize"));
      }, t;
    }(Zt)
  );
  function RI(r, t) {
    this.parent.drift(r, t);
  }
  function Jc(r, t, e, n) {
    return t && !isNaN(t[0]) && !isNaN(t[1]) && !(n.isIgnore && n.isIgnore(e)) && !(n.clipShape && !n.clipShape.contain(t[0], t[1])) && r.getItemVisual(e, "symbol") !== "none";
  }
  function z_(r) {
    return r != null && !j(r) && (r = {
      isIgnore: r
    }), r || {};
  }
  function V_(r) {
    var t = r.hostModel, e = t.getModel("emphasis");
    return {
      emphasisItemStyle: e.getModel("itemStyle").getItemStyle(),
      blurItemStyle: t.getModel(["blur", "itemStyle"]).getItemStyle(),
      selectItemStyle: t.getModel(["select", "itemStyle"]).getItemStyle(),
      focus: e.get("focus"),
      blurScope: e.get("blurScope"),
      emphasisDisabled: e.get("disabled"),
      hoverScale: e.get("scale"),
      labelStatesModels: Ja(t),
      cursorStyle: t.get("cursor")
    };
  }
  var OI = (
    /** @class */
    function() {
      function r(t) {
        this.group = new Zt(), this._SymbolCtor = t || Qc;
      }
      return r.prototype.updateData = function(t, e) {
        this._progressiveEls = null, e = z_(e);
        var n = this.group, i = t.hostModel, a = this._data, o = this._SymbolCtor, s = e.disableAnimation, l = V_(t), u = {
          disableAnimation: s
        }, f = e.getSymbolPoint || function(h) {
          return t.getItemLayout(h);
        };
        a || n.removeAll(), t.diff(a).add(function(h) {
          var v = f(h);
          if (Jc(t, v, h, e)) {
            var c = new o(t, h, l, u);
            c.setPosition(v), t.setItemGraphicEl(h, c), n.add(c);
          }
        }).update(function(h, v) {
          var c = a.getItemGraphicEl(v), d = f(h);
          if (!Jc(t, d, h, e)) {
            n.remove(c);
            return;
          }
          var g = t.getItemVisual(h, "symbol") || "circle", p = c && c.getSymbolType && c.getSymbolType();
          if (!c || p && p !== g)
            n.remove(c), c = new o(t, h, l, u), c.setPosition(d);
          else {
            c.updateData(t, h, l, u);
            var m = {
              x: d[0],
              y: d[1]
            };
            s ? c.attr(m) : qt(c, m, i);
          }
          n.add(c), t.setItemGraphicEl(h, c);
        }).remove(function(h) {
          var v = a.getItemGraphicEl(h);
          v && v.fadeOut(function() {
            n.remove(v);
          }, i);
        }).execute(), this._getSymbolPoint = f, this._data = t;
      }, r.prototype.updateLayout = function() {
        var t = this, e = this._data;
        e && e.eachItemGraphicEl(function(n, i) {
          var a = t._getSymbolPoint(i);
          n.setPosition(a), n.markRedraw();
        });
      }, r.prototype.incrementalPrepareUpdate = function(t) {
        this._seriesScope = V_(t), this._data = null, this.group.removeAll();
      }, r.prototype.incrementalUpdate = function(t, e, n) {
        this._progressiveEls = [], n = z_(n);
        function i(l) {
          l.isGroup || (l.incremental = !0, l.ensureState("emphasis").hoverLayer = !0);
        }
        for (var a = t.start; a < t.end; a++) {
          var o = e.getItemLayout(a);
          if (Jc(e, o, a, n)) {
            var s = new this._SymbolCtor(e, a, this._seriesScope);
            s.traverse(i), s.setPosition(o), this.group.add(s), e.setItemGraphicEl(a, s), this._progressiveEls.push(s);
          }
        }
      }, r.prototype.eachRendered = function(t) {
        il(this._progressiveEls || this.group, t);
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
  function G_(r, t, e) {
    var n = r.getBaseAxis(), i = r.getOtherAxis(n), a = kI(i, e), o = n.dim, s = i.dim, l = t.mapDimension(s), u = t.mapDimension(o), f = s === "x" || s === "radius" ? 1 : 0, h = K(r.dimensions, function(d) {
      return t.mapDimension(d);
    }), v = !1, c = t.getCalculationInfo("stackResultDimension");
    return gi(
      t,
      h[0]
      /* , dims[1] */
    ) && (v = !0, h[0] = c), gi(
      t,
      h[1]
      /* , dims[0] */
    ) && (v = !0, h[1] = c), {
      dataDimsForPoint: h,
      valueStart: a,
      valueAxisDim: s,
      baseAxisDim: o,
      stacked: !!v,
      valueDim: l,
      baseDim: u,
      baseDataOffset: f,
      stackedOverDimension: t.getCalculationInfo("stackedOverDimension")
    };
  }
  function kI(r, t) {
    var e = 0, n = r.scale.getExtent();
    return t === "start" ? e = n[0] : t === "end" ? e = n[1] : Mt(t) && !isNaN(t) ? e = t : n[0] > 0 ? e = n[0] : n[1] < 0 && (e = n[1]), e;
  }
  function H_(r, t, e, n) {
    var i = NaN;
    r.stacked && (i = e.get(e.getCalculationInfo("stackedOverDimension"), n)), isNaN(i) && (i = r.valueStart);
    var a = r.baseDataOffset, o = [];
    return o[a] = e.get(r.baseDim, n), o[1 - a] = i, t.dataToPoint(o);
  }
  function NI(r, t) {
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
  function BI(r, t, e, n, i, a, o, s) {
    for (var l = NI(r, t), u = [], f = [], h = [], v = [], c = [], d = [], g = [], p = G_(i, t, o), m = r.getLayout("points") || [], _ = t.getLayout("points") || [], S = 0; S < l.length; S++) {
      var b = l[S], C = !0, T = void 0, D = void 0;
      switch (b.cmd) {
        case "=":
          T = b.idx * 2, D = b.idx1 * 2;
          var M = m[T], P = m[T + 1], E = _[D], A = _[D + 1];
          (isNaN(M) || isNaN(P)) && (M = E, P = A), u.push(M, P), f.push(E, A), h.push(e[T], e[T + 1]), v.push(n[D], n[D + 1]), g.push(t.getRawIndex(b.idx1));
          break;
        case "+":
          var k = b.idx, N = p.dataDimsForPoint, B = i.dataToPoint([t.get(N[0], k), t.get(N[1], k)]);
          D = k * 2, u.push(B[0], B[1]), f.push(_[D], _[D + 1]);
          var z = H_(p, i, t, k);
          h.push(z[0], z[1]), v.push(n[D], n[D + 1]), g.push(t.getRawIndex(k));
          break;
        case "-":
          C = !1;
      }
      C && (c.push(b), d.push(d.length));
    }
    d.sort(function(Kt, Et) {
      return g[Kt] - g[Et];
    });
    for (var G = u.length, J = qr(G), U = qr(G), Y = qr(G), Q = qr(G), ot = [], S = 0; S < d.length; S++) {
      var it = d[S], ct = S * 2, Tt = it * 2;
      J[ct] = u[Tt], J[ct + 1] = u[Tt + 1], U[ct] = f[Tt], U[ct + 1] = f[Tt + 1], Y[ct] = h[Tt], Y[ct + 1] = h[Tt + 1], Q[ct] = v[Tt], Q[ct + 1] = v[Tt + 1], ot[S] = c[it];
    }
    return {
      current: J,
      next: U,
      stackedOnCurrent: Y,
      stackedOnNext: Q,
      status: ot
    };
  }
  var _n = Math.min, Sn = Math.max;
  function Si(r, t) {
    return isNaN(r) || isNaN(t);
  }
  function tv(r, t, e, n, i, a, o, s, l) {
    for (var u, f, h, v, c, d, g = e, p = 0; p < n; p++) {
      var m = t[g * 2], _ = t[g * 2 + 1];
      if (g >= i || g < 0)
        break;
      if (Si(m, _)) {
        if (l) {
          g += a;
          continue;
        }
        break;
      }
      if (g === e)
        r[a > 0 ? "moveTo" : "lineTo"](m, _), h = m, v = _;
      else {
        var S = m - u, b = _ - f;
        if (S * S + b * b < 0.5) {
          g += a;
          continue;
        }
        if (o > 0) {
          for (var C = g + a, T = t[C * 2], D = t[C * 2 + 1]; T === m && D === _ && p < n; )
            p++, C += a, g += a, T = t[C * 2], D = t[C * 2 + 1], m = t[g * 2], _ = t[g * 2 + 1], S = m - u, b = _ - f;
          var M = p + 1;
          if (l)
            for (; Si(T, D) && M < n; )
              M++, C += a, T = t[C * 2], D = t[C * 2 + 1];
          var P = 0.5, E = 0, A = 0, k = void 0, N = void 0;
          if (M >= n || Si(T, D))
            c = m, d = _;
          else {
            E = T - u, A = D - f;
            var B = m - u, z = T - m, G = _ - f, J = D - _, U = void 0, Y = void 0;
            if (s === "x") {
              U = Math.abs(B), Y = Math.abs(z);
              var Q = E > 0 ? 1 : -1;
              c = m - Q * U * o, d = _, k = m + Q * Y * o, N = _;
            } else if (s === "y") {
              U = Math.abs(G), Y = Math.abs(J);
              var ot = A > 0 ? 1 : -1;
              c = m, d = _ - ot * U * o, k = m, N = _ + ot * Y * o;
            } else
              U = Math.sqrt(B * B + G * G), Y = Math.sqrt(z * z + J * J), P = Y / (Y + U), c = m - E * o * (1 - P), d = _ - A * o * (1 - P), k = m + E * o * P, N = _ + A * o * P, k = _n(k, Sn(T, m)), N = _n(N, Sn(D, _)), k = Sn(k, _n(T, m)), N = Sn(N, _n(D, _)), E = k - m, A = N - _, c = m - E * U / Y, d = _ - A * U / Y, c = _n(c, Sn(u, m)), d = _n(d, Sn(f, _)), c = Sn(c, _n(u, m)), d = Sn(d, _n(f, _)), E = m - c, A = _ - d, k = m + E * Y / U, N = _ + A * Y / U;
          }
          r.bezierCurveTo(h, v, c, d, m, _), h = k, v = N;
        } else
          r.lineTo(m, _);
      }
      u = m, f = _, g += a;
    }
    return p;
  }
  var W_ = (
    /** @class */
    function() {
      function r() {
        this.smooth = 0, this.smoothConstraint = !0;
      }
      return r;
    }()
  ), FI = (
    /** @class */
    function(r) {
      x(t, r);
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
        return new W_();
      }, t.prototype.buildPath = function(e, n) {
        var i = n.points, a = 0, o = i.length / 2;
        if (n.connectNulls) {
          for (; o > 0 && Si(i[o * 2 - 2], i[o * 2 - 1]); o--)
            ;
          for (; a < o && Si(i[a * 2], i[a * 2 + 1]); a++)
            ;
        }
        for (; a < o; )
          a += tv(e, i, a, o, o, 1, n.smooth, n.smoothMonotone, n.connectNulls) + 1;
      }, t.prototype.getPointOn = function(e, n) {
        this.path || (this.createPathProxy(), this.buildPath(this.path, this.shape));
        for (var i = this.path, a = i.data, o = cn.CMD, s, l, u = n === "x", f = [], h = 0; h < a.length; ) {
          var v = a[h++], c = void 0, d = void 0, g = void 0, p = void 0, m = void 0, _ = void 0, S = void 0;
          switch (v) {
            case o.M:
              s = a[h++], l = a[h++];
              break;
            case o.L:
              if (c = a[h++], d = a[h++], S = u ? (e - s) / (c - s) : (e - l) / (d - l), S <= 1 && S >= 0) {
                var b = u ? (d - l) * S + l : (c - s) * S + s;
                return u ? [e, b] : [b, e];
              }
              s = c, l = d;
              break;
            case o.C:
              c = a[h++], d = a[h++], g = a[h++], p = a[h++], m = a[h++], _ = a[h++];
              var C = u ? os(s, c, g, m, e, f) : os(l, d, p, _, e, f);
              if (C > 0)
                for (var T = 0; T < C; T++) {
                  var D = f[T];
                  if (D <= 1 && D >= 0) {
                    var b = u ? Xt(l, d, p, _, D) : Xt(s, c, g, m, D);
                    return u ? [e, b] : [b, e];
                  }
                }
              s = m, l = _;
              break;
          }
        }
      }, t;
    }(xt)
  ), zI = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }
      return t;
    }(W_)
  ), VI = (
    /** @class */
    function(r) {
      x(t, r);
      function t(e) {
        var n = r.call(this, e) || this;
        return n.type = "ec-polygon", n;
      }
      return t.prototype.getDefaultShape = function() {
        return new zI();
      }, t.prototype.buildPath = function(e, n) {
        var i = n.points, a = n.stackedOnPoints, o = 0, s = i.length / 2, l = n.smoothMonotone;
        if (n.connectNulls) {
          for (; s > 0 && Si(i[s * 2 - 2], i[s * 2 - 1]); s--)
            ;
          for (; o < s && Si(i[o * 2], i[o * 2 + 1]); o++)
            ;
        }
        for (; o < s; ) {
          var u = tv(e, i, o, s, s, 1, n.smooth, l, n.connectNulls);
          tv(e, a, o + u - 1, u, s, -1, n.stackedOnSmooth, l, n.connectNulls), o += u + 1, e.closePath();
        }
      }, t;
    }(xt)
  );
  function U_(r, t) {
    if (r.length === t.length) {
      for (var e = 0; e < r.length; e++)
        if (r[e] !== t[e])
          return;
      return !0;
    }
  }
  function Y_(r) {
    for (var t = 1 / 0, e = 1 / 0, n = -1 / 0, i = -1 / 0, a = 0; a < r.length; ) {
      var o = r[a++], s = r[a++];
      isNaN(o) || (t = Math.min(o, t), n = Math.max(o, n)), isNaN(s) || (e = Math.min(s, e), i = Math.max(s, i));
    }
    return [[t, e], [n, i]];
  }
  function X_(r, t) {
    var e = Y_(r), n = e[0], i = e[1], a = Y_(t), o = a[0], s = a[1];
    return Math.max(Math.abs(n[0] - o[0]), Math.abs(n[1] - o[1]), Math.abs(i[0] - s[0]), Math.abs(i[1] - s[1]));
  }
  function $_(r) {
    return Mt(r) ? r : r ? 0.5 : 0;
  }
  function GI(r, t, e) {
    if (!e.valueDim)
      return [];
    for (var n = t.count(), i = qr(n * 2), a = 0; a < n; a++) {
      var o = H_(e, r, t, a);
      i[a * 2] = o[0], i[a * 2 + 1] = o[1];
    }
    return i;
  }
  function wn(r, t, e, n) {
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
          var v = (u[a] + f[a]) / 2, c = [];
          l[a] = c[a] = v, l[1 - a] = u[1 - a], c[1 - a] = f[1 - a], o.push(l[0], l[1]), o.push(c[0], c[1]);
          break;
        default:
          l[a] = u[a], l[1 - a] = f[1 - a], o.push(l[0], l[1]);
      }
    return o.push(r[s++], r[s++]), o;
  }
  function HI(r, t) {
    var e = [], n = r.length, i, a;
    function o(f, h, v) {
      var c = f.coord, d = (v - c) / (h.coord - c), g = nf(d, [f.color, h.color]);
      return {
        coord: v,
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
  function WI(r, t, e) {
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
      var l = t.getAxis(i), u = K(a.stops, function(S) {
        return {
          coord: l.toGlobalCoord(l.dataToCoord(S.value)),
          color: S.color
        };
      }), f = u.length, h = a.outerColors.slice();
      f && u[0].coord > u[f - 1].coord && (u.reverse(), h.reverse());
      var v = HI(u, i === "x" ? e.getWidth() : e.getHeight()), c = v.length;
      if (!c && f)
        return u[0].coord < 0 ? h[1] ? h[1] : u[f - 1].color : h[0] ? h[0] : u[0].color;
      var d = 10, g = v[0].coord - d, p = v[c - 1].coord + d, m = p - g;
      if (m < 1e-3)
        return "transparent";
      L(v, function(S) {
        S.offset = (S.coord - g) / m;
      }), v.push({
        // NOTE: inRangeStopLen may still be 0 if stoplen is zero.
        offset: c ? v[c - 1].offset : 0.5,
        color: h[1] || "transparent"
      }), v.unshift({
        offset: c ? v[0].offset : 0.5,
        color: h[0] || "transparent"
      });
      var _ = new lh(0, 0, 0, 0, v, !0);
      return _[i] = g, _[i + "2"] = p, _;
    }
  }
  function UI(r, t, e) {
    var n = r.get("showAllSymbol"), i = n === "auto";
    if (!(n && !i)) {
      var a = e.getAxesByScale("ordinal")[0];
      if (a && !(i && YI(a, t))) {
        var o = t.mapDimension(a.dim), s = {};
        return L(a.getViewLabels(), function(l) {
          var u = a.scale.getRawOrdinalNumber(l.tickValue);
          s[u] = 1;
        }), function(l) {
          return !s.hasOwnProperty(t.get(o, l));
        };
      }
    }
  }
  function YI(r, t) {
    var e = r.getExtent(), n = Math.abs(e[1] - e[0]) / r.scale.count();
    isNaN(n) && (n = 0);
    for (var i = t.count(), a = Math.max(1, Math.round(i / 5)), o = 0; o < i; o += a)
      if (Qc.getSymbolSize(
        t,
        o
        // Only for cartesian, where `isHorizontal` exists.
      )[r.isHorizontal() ? 1 : 0] * 1.5 > n)
        return !1;
    return !0;
  }
  function XI(r, t) {
    return isNaN(r) || isNaN(t);
  }
  function $I(r) {
    for (var t = r.length / 2; t > 0 && XI(r[t * 2 - 2], r[t * 2 - 1]); t--)
      ;
    return t - 1;
  }
  function q_(r, t) {
    return [r[t * 2], r[t * 2 + 1]];
  }
  function qI(r, t, e) {
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
  function Z_(r) {
    if (r.get(["endLabel", "show"]))
      return !0;
    for (var t = 0; t < Ke.length; t++)
      if (r.get([Ke[t], "endLabel", "show"]))
        return !0;
    return !1;
  }
  function ev(r, t, e, n) {
    if (qc(t, "cartesian2d")) {
      var i = n.getModel("endLabel"), a = i.get("valueAnimation"), o = n.getData(), s = {
        lastFrameIndex: 0
      }, l = Z_(n) ? function(c, d) {
        r._endLabelOnDuring(c, d, o, s, a, i, t);
      } : null, u = t.getBaseAxis().isHorizontal(), f = T_(t, e, n, function() {
        var c = r._endLabel;
        c && e && s.originalX != null && c.attr({
          x: s.originalX,
          y: s.originalY
        });
      }, l);
      if (!n.get("clip", !0)) {
        var h = f.shape, v = Math.max(h.width, h.height);
        u ? (h.y -= v, h.height += v * 2) : (h.x -= v, h.width += v * 2);
      }
      return l && l(1, f), f;
    } else
      return n.get(["endLabel", "show"]) && console.warn("endLabel is not supported for lines in polar systems."), C_(t, e, n);
  }
  function ZI(r, t) {
    var e = t.getBaseAxis(), n = e.isHorizontal(), i = e.inverse, a = n ? i ? "right" : "left" : "center", o = n ? "middle" : i ? "top" : "bottom";
    return {
      normal: {
        align: r.get("align") || a,
        verticalAlign: r.get("verticalAlign") || o
      }
    };
  }
  var KI = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }
      return t.prototype.init = function() {
        var e = new Zt(), n = new OI();
        this.group.add(n.group), this._symbolDraw = n, this._lineGroup = e;
      }, t.prototype.render = function(e, n, i) {
        var a = this, o = e.coordinateSystem, s = this.group, l = e.getData(), u = e.getModel("lineStyle"), f = e.getModel("areaStyle"), h = l.getLayout("points") || [], v = o.type === "polar", c = this._coordSys, d = this._symbolDraw, g = this._polyline, p = this._polygon, m = this._lineGroup, _ = !n.ssr && e.isAnimationEnabled(), S = !f.isEmpty(), b = f.get("origin"), C = G_(o, l, b), T = S && GI(o, l, C), D = e.get("showSymbol"), M = e.get("connectNulls"), P = D && !v && UI(e, l, o), E = this._data;
        E && E.eachItemGraphicEl(function(Et, Ie) {
          Et.__temp && (s.remove(Et), E.setItemGraphicEl(Ie, null));
        }), D || d.remove(), s.add(m);
        var A = v ? !1 : e.get("step"), k;
        o && o.getArea && e.get("clip", !0) && (k = o.getArea(), k.width != null ? (k.x -= 0.1, k.y -= 0.1, k.width += 0.2, k.height += 0.2) : k.r0 && (k.r0 -= 0.5, k.r += 0.5)), this._clipShapeForSymbol = k;
        var N = WI(l, o, i) || l.getVisual("style")[l.getVisual("drawType")];
        if (!(g && c.type === o.type && A === this._step))
          D && d.updateData(l, {
            isIgnore: P,
            clipShape: k,
            disableAnimation: !0,
            getSymbolPoint: function(Et) {
              return [h[Et * 2], h[Et * 2 + 1]];
            }
          }), _ && this._initSymbolLabelAnimation(l, o, k), A && (h = wn(h, o, A, M), T && (T = wn(T, o, A, M))), g = this._newPolyline(h), S ? p = this._newPolygon(h, T) : p && (m.remove(p), p = this._polygon = null), v || this._initOrUpdateEndLabel(e, o, oi(N)), m.setClipPath(ev(this, o, !0, e));
        else {
          S && !p ? p = this._newPolygon(h, T) : p && !S && (m.remove(p), p = this._polygon = null), v || this._initOrUpdateEndLabel(e, o, oi(N));
          var B = m.getClipPath();
          if (B) {
            var z = ev(this, o, !1, e);
            ie(B, {
              shape: z.shape
            }, e);
          } else
            m.setClipPath(ev(this, o, !0, e));
          D && d.updateData(l, {
            isIgnore: P,
            clipShape: k,
            disableAnimation: !0,
            getSymbolPoint: function(Et) {
              return [h[Et * 2], h[Et * 2 + 1]];
            }
          }), (!U_(this._stackedOnPoints, T) || !U_(this._points, h)) && (_ ? this._doUpdateAnimation(l, T, o, i, A, b, M) : (A && (h = wn(h, o, A, M), T && (T = wn(T, o, A, M))), g.setShape({
            points: h
          }), p && p.setShape({
            points: h,
            stackedOnPoints: T
          })));
        }
        var G = e.getModel("emphasis"), J = G.get("focus"), U = G.get("blurScope"), Y = G.get("disabled");
        if (g.useStyle(St(
          // Use color in lineStyle first
          u.getLineStyle(),
          {
            fill: "none",
            stroke: N,
            lineJoin: "bevel"
          }
        )), Gs(g, e, "lineStyle"), g.style.lineWidth > 0 && e.get(["emphasis", "lineStyle", "width"]) === "bolder") {
          var Q = g.getState("emphasis").style;
          Q.lineWidth = +g.style.lineWidth + 1;
        }
        _t(g).seriesIndex = e.seriesIndex, Ya(g, J, U, Y);
        var ot = $_(e.get("smooth")), it = e.get("smoothMonotone");
        if (g.setShape({
          smooth: ot,
          smoothMonotone: it,
          connectNulls: M
        }), p) {
          var ct = l.getCalculationInfo("stackedOnSeries"), Tt = 0;
          p.useStyle(St(f.getAreaStyle(), {
            fill: N,
            opacity: 0.7,
            lineJoin: "bevel",
            decal: l.getVisual("style").decal
          })), ct && (Tt = $_(ct.get("smooth"))), p.setShape({
            smooth: ot,
            stackedOnSmooth: Tt,
            smoothMonotone: it,
            connectNulls: M
          }), Gs(p, e, "areaStyle"), _t(p).seriesIndex = e.seriesIndex, Ya(p, J, U, Y);
        }
        var Kt = function(Et) {
          a._changePolyState(Et);
        };
        l.eachItemGraphicEl(function(Et) {
          Et && (Et.onHoverStateChange = Kt);
        }), this._polyline.onHoverStateChange = Kt, this._data = l, this._coordSys = o, this._stackedOnPoints = T, this._points = h, this._step = A, this._valueOrigin = b, e.get("triggerLineEvent") && (this.packEventData(e, g), p && this.packEventData(e, p));
      }, t.prototype.packEventData = function(e, n) {
        _t(n).eventData = {
          componentType: "series",
          componentSubType: "line",
          componentIndex: e.componentIndex,
          seriesIndex: e.seriesIndex,
          seriesName: e.name,
          seriesType: "line"
        };
      }, t.prototype.highlight = function(e, n, i, a) {
        var o = e.getData(), s = Xn(o, a);
        if (this._changePolyState("emphasis"), !(s instanceof Array) && s != null && s >= 0) {
          var l = o.getLayout("points"), u = o.getItemGraphicEl(s);
          if (!u) {
            var f = l[s * 2], h = l[s * 2 + 1];
            if (isNaN(f) || isNaN(h) || this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(f, h))
              return;
            var v = e.get("zlevel") || 0, c = e.get("z") || 0;
            u = new Qc(o, s), u.x = f, u.y = h, u.setZ(v, c);
            var d = u.getSymbolPath().getTextContent();
            d && (d.zlevel = v, d.z = c, d.z2 = this._polyline.z2 + 1), u.__temp = !0, o.setItemGraphicEl(s, u), u.stopSymbolAnimation(!0), this.group.add(u);
          }
          u.highlight();
        } else
          pe.prototype.highlight.call(this, e, n, i, a);
      }, t.prototype.downplay = function(e, n, i, a) {
        var o = e.getData(), s = Xn(o, a);
        if (this._changePolyState("normal"), s != null && s >= 0) {
          var l = o.getItemGraphicEl(s);
          l && (l.__temp ? (o.setItemGraphicEl(s, null), this.group.remove(l)) : l.downplay());
        } else
          pe.prototype.downplay.call(this, e, n, i, a);
      }, t.prototype._changePolyState = function(e) {
        var n = this._polygon;
        rg(this._polyline, e), n && rg(n, e);
      }, t.prototype._newPolyline = function(e) {
        var n = this._polyline;
        return n && this._lineGroup.remove(n), n = new FI({
          shape: {
            points: e
          },
          segmentIgnoreThreshold: 2,
          z2: 10
        }), this._lineGroup.add(n), this._polyline = n, n;
      }, t.prototype._newPolygon = function(e, n) {
        var i = this._polygon;
        return i && this._lineGroup.remove(i), i = new VI({
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
        tt(f) && (f = f(null));
        var h = u.get("animationDelay") || 0, v = tt(h) ? h(null) : h;
        e.eachItemGraphicEl(function(c, d) {
          var g = c;
          if (g) {
            var p = [c.x, c.y], m = void 0, _ = void 0, S = void 0;
            if (i)
              if (o) {
                var b = i, C = n.pointToCoord(p);
                a ? (m = b.startAngle, _ = b.endAngle, S = -C[1] / 180 * Math.PI) : (m = b.r0, _ = b.r, S = C[0]);
              } else {
                var T = i;
                a ? (m = T.x, _ = T.x + T.width, S = c.x) : (m = T.y + T.height, _ = T.y, S = c.y);
              }
            var D = _ === m ? 0 : (S - m) / (_ - m);
            l && (D = 1 - D);
            var M = tt(h) ? h(d) : f * D + v, P = g.getSymbolPath(), E = P.getTextContent();
            g.attr({
              scaleX: 0,
              scaleY: 0
            }), g.animateTo({
              scaleX: 1,
              scaleY: 1
            }, {
              duration: 200,
              setToFinal: !0,
              delay: M
            }), E && E.animateFrom({
              style: {
                opacity: 0
              }
            }, {
              duration: 300,
              delay: M
            }), P.disableLabelAnimation = !0;
          }
        });
      }, t.prototype._initOrUpdateEndLabel = function(e, n, i) {
        var a = e.getModel("endLabel");
        if (Z_(e)) {
          var o = e.getData(), s = this._polyline, l = o.getLayout("points");
          if (!l) {
            s.removeTextContent(), this._endLabel = null;
            return;
          }
          var u = this._endLabel;
          u || (u = this._endLabel = new $t({
            z2: 200
            // should be higher than item symbol
          }), u.ignoreClip = !0, s.setTextContent(this._endLabel), s.disableLabelAnimation = !0);
          var f = $I(l);
          f >= 0 && (Qa(s, Ja(e, "endLabel"), {
            inheritColor: i,
            labelFetcher: e,
            labelDataIndex: f,
            defaultText: function(h, v, c) {
              return c != null ? M_(o, c) : Zc(o, h);
            },
            enableTextSetter: !0
          }, ZI(a, n)), s.textConfig.position = null);
        } else
          this._endLabel && (this._polyline.removeTextContent(), this._endLabel = null);
      }, t.prototype._endLabelOnDuring = function(e, n, i, a, o, s, l) {
        var u = this._endLabel, f = this._polyline;
        if (u) {
          e < 1 && a.originalX == null && (a.originalX = u.x, a.originalY = u.y);
          var h = i.getLayout("points"), v = i.hostModel, c = v.get("connectNulls"), d = s.get("precision"), g = s.get("distance") || 0, p = l.getBaseAxis(), m = p.isHorizontal(), _ = p.inverse, S = n.shape, b = _ ? m ? S.x : S.y + S.height : m ? S.x + S.width : S.y, C = (m ? g : 0) * (_ ? -1 : 1), T = (m ? 0 : -g) * (_ ? -1 : 1), D = m ? "x" : "y", M = qI(h, b, D), P = M.range, E = P[1] - P[0], A = void 0;
          if (E >= 1) {
            if (E > 1 && !c) {
              var k = q_(h, P[0]);
              u.attr({
                x: k[0] + C,
                y: k[1] + T
              }), o && (A = v.getRawValue(P[0]));
            } else {
              var k = f.getPointOn(b, D);
              k && u.attr({
                x: k[0] + C,
                y: k[1] + T
              });
              var N = v.getRawValue(P[0]), B = v.getRawValue(P[1]);
              o && (A = _p(i, d, N, B, M.t));
            }
            a.lastFrameIndex = P[0];
          } else {
            var z = e === 1 || a.lastFrameIndex > 0 ? P[0] : 0, k = q_(h, z);
            o && (A = v.getRawValue(z)), u.attr({
              x: k[0] + C,
              y: k[1] + T
            });
          }
          o && Zi(u).setLabelText(A);
        }
      }, t.prototype._doUpdateAnimation = function(e, n, i, a, o, s, l) {
        var u = this._polyline, f = this._polygon, h = e.hostModel, v = BI(this._data, e, this._stackedOnPoints, n, this._coordSys, i, this._valueOrigin), c = v.current, d = v.stackedOnCurrent, g = v.next, p = v.stackedOnNext;
        if (o && (c = wn(v.current, i, o, l), d = wn(v.stackedOnCurrent, i, o, l), g = wn(v.next, i, o, l), p = wn(v.stackedOnNext, i, o, l)), X_(c, g) > 3e3 || f && X_(d, p) > 3e3) {
          u.stopAnimation(), u.setShape({
            points: g
          }), f && (f.stopAnimation(), f.setShape({
            points: g,
            stackedOnPoints: p
          }));
          return;
        }
        u.shape.__points = v.current, u.shape.points = c;
        var m = {
          shape: {
            points: g
          }
        };
        v.current !== c && (m.shape.__points = v.next), u.stopAnimation(), qt(u, m, h), f && (f.setShape({
          // Reuse the points with polyline.
          points: c,
          stackedOnPoints: d
        }), f.stopAnimation(), qt(f, {
          shape: {
            stackedOnPoints: p
          }
        }, h), u.shape.points !== f.shape.points && (f.shape.points = u.shape.points));
        for (var _ = [], S = v.status, b = 0; b < S.length; b++) {
          var C = S[b].cmd;
          if (C === "=") {
            var T = e.getItemGraphicEl(S[b].idx1);
            T && _.push({
              el: T,
              ptIdx: b
              // Index of points
            });
          }
        }
        u.animators && u.animators.length && u.animators[0].during(function() {
          f && f.dirtyShape();
          for (var D = u.shape.__points, M = 0; M < _.length; M++) {
            var P = _[M].el, E = _[M].ptIdx * 2;
            P.x = D[E], P.y = D[E + 1], P.markRedraw();
          }
        });
      }, t.prototype.remove = function(e) {
        var n = this.group, i = this._data;
        this._lineGroup.removeAll(), this._symbolDraw.remove(!0), i && i.eachItemGraphicEl(function(a, o) {
          a.__temp && (n.remove(a), i.setItemGraphicEl(o, null));
        }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._endLabel = this._data = null;
      }, t.type = "line", t;
    }(pe)
  );
  function jI(r, t) {
    return {
      seriesType: r,
      plan: Jh(),
      reset: function(e) {
        var n = e.getData(), i = e.coordinateSystem, a = e.pipelineContext, o = t || a.large;
        if (i) {
          var s = K(i.dimensions, function(c) {
            return n.mapDimension(c);
          }).slice(0, 2), l = s.length, u = n.getCalculationInfo("stackResultDimension");
          gi(n, s[0]) && (s[0] = u), gi(n, s[1]) && (s[1] = u);
          var f = n.getStore(), h = n.getDimensionIndex(s[0]), v = n.getDimensionIndex(s[1]);
          return l && {
            progress: function(c, d) {
              for (var g = c.end - c.start, p = o && qr(g * l), m = [], _ = [], S = c.start, b = 0; S < c.end; S++) {
                var C = void 0;
                if (l === 1) {
                  var T = f.get(h, S);
                  C = i.dataToPoint(T, null, _);
                } else
                  m[0] = f.get(h, S), m[1] = f.get(v, S), C = i.dataToPoint(m, null, _);
                o ? (p[b++] = C[0], p[b++] = C[1]) : d.setItemLayout(S, C.slice());
              }
              o && d.setLayout("points", p);
            }
          };
        }
      }
    };
  }
  function QI(r) {
    r.registerChartView(KI), r.registerSeriesModel(EI), r.registerLayout(jI("line", !0)), r.registerVisual({
      seriesType: "line",
      reset: function(t) {
        var e = t.getData(), n = t.getModel("lineStyle").getLineStyle();
        n && !n.stroke && (n.stroke = e.getVisual("style").fill), e.setVisual("legendLineStyle", n);
      }
    }), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, x_("line"));
  }
  Pe(QI);
  var su = Math.PI * 2, K_ = Math.PI / 180;
  function j_(r, t) {
    return si(r.getBoxLayoutParams(), {
      width: t.getWidth(),
      height: t.getHeight()
    });
  }
  function Q_(r, t) {
    var e = j_(r, t), n = r.get("center"), i = r.get("radius");
    X(i) || (i = [0, i]);
    var a = Lt(e.width, t.getWidth()), o = Lt(e.height, t.getHeight()), s = Math.min(a, o), l = Lt(i[0], s / 2), u = Lt(i[1], s / 2), f, h, v = r.coordinateSystem;
    if (v) {
      var c = v.dataToPoint(n);
      f = c[0] || 0, h = c[1] || 0;
    } else
      X(n) || (n = [n, n]), f = Lt(n[0], a) + e.x, h = Lt(n[1], o) + e.y;
    return {
      cx: f,
      cy: h,
      r0: l,
      r: u
    };
  }
  function JI(r, t, e) {
    t.eachSeriesByType(r, function(n) {
      var i = n.getData(), a = i.mapDimension("value"), o = j_(n, e), s = Q_(n, e), l = s.cx, u = s.cy, f = s.r, h = s.r0, v = -n.get("startAngle") * K_, c = n.get("minAngle") * K_, d = 0;
      i.each(a, function(E) {
        !isNaN(E) && d++;
      });
      var g = i.getSum(a), p = Math.PI / (g || d) * 2, m = n.get("clockwise"), _ = n.get("roseType"), S = n.get("stillShowZeroSum"), b = i.getDataExtent(a);
      b[0] = 0;
      var C = su, T = 0, D = v, M = m ? 1 : -1;
      if (i.setLayout({
        viewRect: o,
        r: f
      }), i.each(a, function(E, A) {
        var k;
        if (isNaN(E)) {
          i.setItemLayout(A, {
            angle: NaN,
            startAngle: NaN,
            endAngle: NaN,
            clockwise: m,
            cx: l,
            cy: u,
            r0: h,
            r: _ ? NaN : f
          });
          return;
        }
        _ !== "area" ? k = g === 0 && S ? p : E * p : k = su / d, k < c ? (k = c, C -= c) : T += E;
        var N = D + M * k;
        i.setItemLayout(A, {
          angle: k,
          startAngle: D,
          endAngle: N,
          clockwise: m,
          cx: l,
          cy: u,
          r0: h,
          r: _ ? ws(E, b, [h, f]) : f
        }), D = N;
      }), C < su && d)
        if (C <= 1e-3) {
          var P = su / d;
          i.each(a, function(E, A) {
            if (!isNaN(E)) {
              var k = i.getItemLayout(A);
              k.angle = P, k.startAngle = v + M * A * P, k.endAngle = v + M * (A + 1) * P;
            }
          });
        } else
          p = C / T, D = v, i.each(a, function(E, A) {
            if (!isNaN(E)) {
              var k = i.getItemLayout(A), N = k.angle === c ? c : E * p;
              k.startAngle = D, k.endAngle = D + M * N, D += M * N;
            }
          });
    });
  }
  function tL(r) {
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
  var eL = Math.PI / 180;
  function J_(r, t, e, n, i, a, o, s, l, u) {
    if (r.length < 2)
      return;
    function f(g) {
      for (var p = g.rB, m = p * p, _ = 0; _ < g.list.length; _++) {
        var S = g.list[_], b = Math.abs(S.label.y - e), C = n + S.len, T = C * C, D = Math.sqrt((1 - Math.abs(b * b / m)) * T), M = t + (D + S.len2) * i, P = M - S.label.x, E = S.targetTextWidth - P * i;
        t1(S, E, !0), S.label.x = M;
      }
    }
    function h(g) {
      for (var p = {
        list: [],
        maxY: 0
      }, m = {
        list: [],
        maxY: 0
      }, _ = 0; _ < g.length; _++)
        if (g[_].labelAlignTo === "none") {
          var S = g[_], b = S.label.y > e ? m : p, C = Math.abs(S.label.y - e);
          if (C >= b.maxY) {
            var T = S.label.x - t - S.len2 * i, D = n + S.len, M = Math.abs(T) < D ? Math.sqrt(C * C / (1 - T * T / D / D)) : D;
            b.rB = M, b.maxY = C;
          }
          b.list.push(S);
        }
      f(p), f(m);
    }
    for (var v = r.length, c = 0; c < v; c++)
      if (r[c].position === "outer" && r[c].labelAlignTo === "labelLine") {
        var d = r[c].label.x - u;
        r[c].linePoints[1][0] += d, r[c].label.x = u;
      }
    m_(r, l, l + o) && h(r);
  }
  function rL(r, t, e, n, i, a, o, s) {
    for (var l = [], u = [], f = Number.MAX_VALUE, h = -Number.MAX_VALUE, v = 0; v < r.length; v++) {
      var c = r[v].label;
      rv(r[v]) || (c.x < t ? (f = Math.min(f, c.x), l.push(r[v])) : (h = Math.max(h, c.x), u.push(r[v])));
    }
    for (var v = 0; v < r.length; v++) {
      var d = r[v];
      if (!rv(d) && d.linePoints) {
        if (d.labelStyleWidth != null)
          continue;
        var c = d.label, g = d.linePoints, p = void 0;
        d.labelAlignTo === "edge" ? c.x < t ? p = g[2][0] - d.labelDistance - o - d.edgeDistance : p = o + i - d.edgeDistance - g[2][0] - d.labelDistance : d.labelAlignTo === "labelLine" ? c.x < t ? p = f - o - d.bleedMargin : p = o + i - h - d.bleedMargin : c.x < t ? p = c.x - o - d.bleedMargin : p = o + i - c.x - d.bleedMargin, d.targetTextWidth = p, t1(d, p);
      }
    }
    J_(u, t, e, n, 1, i, a, o, s, h), J_(l, t, e, n, -1, i, a, o, s, f);
    for (var v = 0; v < r.length; v++) {
      var d = r[v];
      if (!rv(d) && d.linePoints) {
        var c = d.label, g = d.linePoints, m = d.labelAlignTo === "edge", _ = c.style.padding, S = _ ? _[1] + _[3] : 0, b = c.style.backgroundColor ? 0 : S, C = d.rect.width + b, T = g[1][0] - g[2][0];
        m ? c.x < t ? g[2][0] = o + d.edgeDistance + C + d.labelDistance : g[2][0] = o + i - d.edgeDistance - C - d.labelDistance : (c.x < t ? g[2][0] = c.x + d.labelDistance : g[2][0] = c.x - d.labelDistance, g[1][0] = g[2][0] + T), g[1][1] = g[2][1] = c.y;
      }
    }
  }
  function t1(r, t, e) {
    if (e === void 0 && (e = !1), r.labelStyleWidth == null) {
      var n = r.label, i = n.style, a = r.rect, o = i.backgroundColor, s = i.padding, l = s ? s[1] + s[3] : 0, u = i.overflow, f = a.width + (o ? 0 : l);
      if (t < f || e) {
        var h = a.height;
        if (u && u.match("break")) {
          n.setStyle("backgroundColor", null), n.setStyle("width", t - l);
          var v = n.getBoundingRect();
          n.setStyle("width", Math.ceil(v.width)), n.setStyle("backgroundColor", o);
        } else {
          var c = t - l, d = t < f ? c : (
            // Current available width is enough, but the text may have
            // already been wrapped with a smaller available width.
            e ? c > r.unconstrainedWidth ? null : c : (
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
  function rv(r) {
    return r.position === "center";
  }
  function nL(r) {
    var t = r.getData(), e = [], n, i, a = !1, o = (r.get("minShowLabelAngle") || 0) * eL, s = t.getLayout("viewRect"), l = t.getLayout("r"), u = s.width, f = s.x, h = s.y, v = s.height;
    function c(T) {
      T.ignore = !0;
    }
    function d(T) {
      if (!T.ignore)
        return !0;
      for (var D in T.states)
        if (T.states[D].ignore === !1)
          return !0;
      return !1;
    }
    t.each(function(T) {
      var D = t.getItemGraphicEl(T), M = D.shape, P = D.getTextContent(), E = D.getTextGuideLine(), A = t.getItemModel(T), k = A.getModel("label"), N = k.get("position") || A.get(["emphasis", "label", "position"]), B = k.get("distanceToLabelLine"), z = k.get("alignTo"), G = Lt(k.get("edgeDistance"), u), J = k.get("bleedMargin"), U = A.getModel("labelLine"), Y = U.get("length");
      Y = Lt(Y, u);
      var Q = U.get("length2");
      if (Q = Lt(Q, u), Math.abs(M.endAngle - M.startAngle) < o) {
        L(P.states, c), P.ignore = !0, E && (L(E.states, c), E.ignore = !0);
        return;
      }
      if (d(P)) {
        var ot = (M.startAngle + M.endAngle) / 2, it = Math.cos(ot), ct = Math.sin(ot), Tt, Kt, Et, Ie;
        n = M.cx, i = M.cy;
        var ze = N === "inside" || N === "inner";
        if (N === "center")
          Tt = M.cx, Kt = M.cy, Ie = "center";
        else {
          var Jt = (ze ? (M.r + M.r0) / 2 * it : M.r * it) + n, Ht = (ze ? (M.r + M.r0) / 2 * ct : M.r * ct) + i;
          if (Tt = Jt + it * 3, Kt = Ht + ct * 3, !ze) {
            var rt = Jt + it * (Y + l - M.r), ht = Ht + ct * (Y + l - M.r), kr = rt + (it < 0 ? -1 : 1) * Q, jt = ht;
            z === "edge" ? Tt = it < 0 ? f + G : f + u - G : Tt = kr + (it < 0 ? -B : B), Kt = jt, Et = [[Jt, Ht], [rt, ht], [kr, jt]];
          }
          Ie = ze ? "center" : z === "edge" ? it > 0 ? "right" : "left" : it > 0 ? "left" : "right";
        }
        var Cn = Math.PI, Kr = 0, ko = k.get("rotate");
        if (Mt(ko))
          Kr = ko * (Cn / 180);
        else if (N === "center")
          Kr = 0;
        else if (ko === "radial" || ko === !0) {
          var q2 = it < 0 ? -ot + Cn : -ot;
          Kr = q2;
        } else if (ko === "tangential" && N !== "outside" && N !== "outer") {
          var ua = Math.atan2(it, ct);
          ua < 0 && (ua = Cn * 2 + ua);
          var Z2 = ct > 0;
          Z2 && (ua = Cn + ua), Kr = ua - Cn;
        }
        if (a = !!Kr, P.x = Tt, P.y = Kt, P.rotation = Kr, P.setStyle({
          verticalAlign: "middle"
        }), ze) {
          P.setStyle({
            align: Ie
          });
          var Tv = P.states.select;
          Tv && (Tv.x += P.x, Tv.y += P.y);
        } else {
          var No = P.getBoundingRect().clone();
          No.applyTransform(P.getComputedTransform());
          var $1 = (P.style.margin || 0) + 2.1;
          No.y -= $1 / 2, No.height += $1, e.push({
            label: P,
            labelLine: E,
            position: N,
            len: Y,
            len2: Q,
            minTurnAngle: U.get("minTurnAngle"),
            maxSurfaceAngle: U.get("maxSurfaceAngle"),
            surfaceNormal: new et(it, ct),
            linePoints: Et,
            textAlign: Ie,
            labelDistance: B,
            labelAlignTo: z,
            edgeDistance: G,
            bleedMargin: J,
            rect: No,
            unconstrainedWidth: No.width,
            labelStyleWidth: P.style.width
          });
        }
        D.setTextConfig({
          inside: ze
        });
      }
    }), !a && r.get("avoidLabelOverlap") && rL(e, n, i, l, u, v, f, h);
    for (var g = 0; g < e.length; g++) {
      var p = e[g], m = p.label, _ = p.labelLine, S = isNaN(m.x) || isNaN(m.y);
      if (m) {
        m.setStyle({
          align: p.textAlign
        }), S && (L(m.states, c), m.ignore = !0);
        var b = m.states.select;
        b && (b.x += m.x, b.y += m.y);
      }
      if (_) {
        var C = p.linePoints;
        S || !C ? (L(_.states, c), _.ignore = !0) : (h_(C, p.minTurnAngle), JP(C, p.surfaceNormal, p.maxSurfaceAngle), _.setShape({
          points: C
        }), m.__hostTarget.textGuideLineConfig = {
          anchor: new et(C[0][0], C[0][1])
        });
      }
    }
  }
  var iL = (
    /** @class */
    function(r) {
      x(t, r);
      function t(e, n, i) {
        var a = r.call(this) || this;
        a.z2 = 2;
        var o = new $t();
        return a.setTextContent(o), a.updateData(e, n, i, !0), a;
      }
      return t.prototype.updateData = function(e, n, i, a) {
        var o = this, s = e.hostModel, l = e.getItemModel(n), u = l.getModel("emphasis"), f = e.getItemLayout(n), h = W(Lo(l.getModel("itemStyle"), f, !0), f);
        if (isNaN(h.startAngle)) {
          o.setShape(h);
          return;
        }
        if (a) {
          o.setShape(h);
          var v = s.getShallow("animationType");
          s.ecModel.ssr ? (ie(o, {
            scaleX: 0,
            scaleY: 0
          }, s, {
            dataIndex: n,
            isFrom: !0
          }), o.originX = h.cx, o.originY = h.cy) : v === "scale" ? (o.shape.r = f.r0, ie(o, {
            shape: {
              r: f.r
            }
          }, s, n)) : i != null ? (o.setShape({
            startAngle: i,
            endAngle: i
          }), ie(o, {
            shape: {
              startAngle: f.startAngle,
              endAngle: f.endAngle
            }
          }, s, n)) : (o.shape.endAngle = f.startAngle, qt(o, {
            shape: {
              endAngle: f.endAngle
            }
          }, s, n));
        } else
          fh(o), qt(o, {
            shape: h
          }, s, n);
        o.useStyle(e.getItemVisual(n, "style")), Gs(o, l);
        var c = (f.startAngle + f.endAngle) / 2, d = s.get("selectedOffset"), g = Math.cos(c) * d, p = Math.sin(c) * d, m = l.getShallow("cursor");
        m && o.attr("cursor", m), this._updateLabel(s, e, n), o.ensureState("emphasis").shape = W({
          r: f.r + (u.get("scale") && u.get("scaleSize") || 0)
        }, Lo(u.getModel("itemStyle"), f)), W(o.ensureState("select"), {
          x: g,
          y: p,
          shape: Lo(l.getModel(["select", "itemStyle"]), f)
        }), W(o.ensureState("blur"), {
          shape: Lo(l.getModel(["blur", "itemStyle"]), f)
        });
        var _ = o.getTextGuideLine(), S = o.getTextContent();
        _ && W(_.ensureState("select"), {
          x: g,
          y: p
        }), W(S.ensureState("select"), {
          x: g,
          y: p
        }), Ya(this, u.get("focus"), u.get("blurScope"), u.get("disabled"));
      }, t.prototype._updateLabel = function(e, n, i) {
        var a = this, o = n.getItemModel(i), s = o.getModel("labelLine"), l = n.getItemVisual(i, "style"), u = l && l.fill, f = l && l.opacity;
        Qa(a, Ja(o), {
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
        var v = e.get(["label", "position"]);
        if (v !== "outside" && v !== "outer")
          a.removeTextGuideLine();
        else {
          var c = this.getTextGuideLine();
          c || (c = new $i(), this.setTextGuideLine(c)), v_(this, d_(o), {
            stroke: u,
            opacity: tn(s.get(["lineStyle", "opacity"]), f, 1)
          });
        }
      }, t;
    }(Wr)
  ), aL = (
    /** @class */
    function(r) {
      x(t, r);
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
          var v = new Wr({
            shape: Q_(e, i)
          });
          v.useStyle(e.getModel("emptyCircleStyle").getItemStyle()), this._emptyCircleSector = v, l.add(v);
        }
        o.diff(s).add(function(c) {
          var d = new iL(o, c, u);
          o.setItemGraphicEl(c, d), l.add(d);
        }).update(function(c, d) {
          var g = s.getItemGraphicEl(d);
          g.updateData(o, c, u), g.off("click"), l.add(g), o.setItemGraphicEl(c, g);
        }).remove(function(c) {
          var d = s.getItemGraphicEl(c);
          Js(d, e, c);
        }).execute(), nL(e), e.get("animationTypeUpdate") !== "expansion" && (this._data = o);
      }, t.prototype.dispose = function() {
      }, t.prototype.containPoint = function(e, n) {
        var i = n.getData(), a = i.getItemLayout(0);
        if (a) {
          var o = e[0] - a.cx, s = e[1] - a.cy, l = Math.sqrt(o * o + s * s);
          return l <= a.r && l >= a.r0;
        }
      }, t.type = "pie", t;
    }(pe)
  );
  function oL(r, t, e) {
    t = X(t) && {
      coordDimensions: t
    } || W({
      encodeDefine: r.getEncode()
    }, t);
    var n = r.getSource(), i = Lc(n, t).dimensions, a = new Ic(i, r);
    return a.initData(n, e), a;
  }
  var sL = (
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
  ), lL = kt(), uL = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }
      return t.prototype.init = function(e) {
        r.prototype.init.apply(this, arguments), this.legendVisualProvider = new sL(Pt(this.getData, this), Pt(this.getRawData, this)), this._defaultLabelLine(e);
      }, t.prototype.mergeOption = function() {
        r.prototype.mergeOption.apply(this, arguments);
      }, t.prototype.getInitialData = function() {
        return oL(this, {
          coordDimensions: ["value"],
          encodeDefaulter: Ot(PC, this)
        });
      }, t.prototype.getDataParams = function(e) {
        var n = this.getData(), i = lL(n), a = i.seats;
        if (!a) {
          var o = [];
          n.each(n.mapDimension("value"), function(l) {
            o.push(l);
          }), a = i.seats = op(o, n.hostModel.get("percentPrecision"));
        }
        var s = r.prototype.getDataParams.call(this, e);
        return s.percent = a[e] || 0, s.$vars.push("percent"), s;
      }, t.prototype._defaultLabelLine = function(e) {
        Lf(e, "labelLine", ["show"]);
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
    }(De)
  );
  function fL(r) {
    return {
      seriesType: r,
      reset: function(t, e) {
        var n = t.getData();
        n.filterSelf(function(i) {
          var a = n.mapDimension("value"), o = n.get(a, i);
          return !(Mt(o) && !isNaN(o) && o < 0);
        });
      }
    };
  }
  function hL(r) {
    r.registerChartView(aL), r.registerSeriesModel(uL), cM("pie", r.registerAction), r.registerLayout(Ot(JI, "pie")), r.registerProcessor(tL("pie")), r.registerProcessor(fL("pie"));
  }
  Pe(hL);
  var cL = (
    /** @class */
    function(r) {
      x(t, r);
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
    }(pt)
  ), nv = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }
      return t.prototype.getCoordSysModel = function() {
        return this.getReferringComponents("grid", lr).models[0];
      }, t.type = "cartesian2dAxis", t;
    }(pt)
  );
  He(nv, U0);
  var e1 = {
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
  }, vL = yt({
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
  }, e1), iv = yt({
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
  }, e1), dL = yt({
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
  }, iv), pL = St({
    logBase: 10
  }, iv), gL = {
    category: vL,
    value: iv,
    time: dL,
    log: pL
  }, mL = {
    value: 1,
    category: 1,
    time: 1,
    log: 1
  };
  function r1(r, t, e, n) {
    L(mL, function(i, a) {
      var o = yt(yt({}, gL[a], !0), n, !0), s = (
        /** @class */
        function(l) {
          x(u, l);
          function u() {
            var f = l !== null && l.apply(this, arguments) || this;
            return f.type = t + "Axis." + a, f;
          }
          return u.prototype.mergeDefaultAndTheme = function(f, h) {
            var v = so(this), c = v ? gl(f) : {}, d = h.getTheme();
            yt(f, d.get(a + "Axis")), yt(f, this.getDefaultOption()), f.type = n1(f), v && Qi(f, c, v);
          }, u.prototype.optionUpdated = function() {
            var f = this.option;
            f.type === "category" && (this.__ordinalMeta = Ec.createByAxisModel(this));
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
    }), r.registerSubTypeDefaulter(t + "Axis", n1);
  }
  function n1(r) {
    return r.type || (r.data ? "category" : "value");
  }
  var yL = (
    /** @class */
    function() {
      function r(t) {
        this.type = "cartesian", this._dimList = [], this._axes = {}, this.name = t || "";
      }
      return r.prototype.getAxis = function(t) {
        return this._axes[t];
      }, r.prototype.getAxes = function() {
        return K(this._dimList, function(t) {
          return this._axes[t];
        }, this);
      }, r.prototype.getAxesByScale = function(t) {
        return t = t.toLowerCase(), Ft(this.getAxes(), function(e) {
          return e.scale.type === t;
        });
      }, r.prototype.addAxis = function(t) {
        var e = t.dim;
        this._axes[e] = t, this._dimList.push(e);
      }, r;
    }()
  ), av = ["x", "y"];
  function i1(r) {
    return r.type === "interval" || r.type === "time";
  }
  var _L = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = "cartesian2d", e.dimensions = av, e;
      }
      return t.prototype.calcAffineTransform = function() {
        this._transform = this._invTransform = null;
        var e = this.getAxis("x").scale, n = this.getAxis("y").scale;
        if (!(!i1(e) || !i1(n))) {
          var i = e.getExtent(), a = n.getExtent(), o = this.dataToPoint([i[0], a[0]]), s = this.dataToPoint([i[1], a[1]]), l = i[1] - i[0], u = a[1] - a[0];
          if (!(!l || !u)) {
            var f = (s[0] - o[0]) / l, h = (s[1] - o[1]) / u, v = o[0] - i[0] * f, c = o[1] - a[0] * h, d = this._transform = [f, 0, 0, h, v, c];
            this._invTransform = Ei([], d);
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
        var i = this.dataToPoint(e), a = this.dataToPoint(n), o = this.getArea(), s = new dt(i[0], i[1], a[0] - i[0], a[1] - i[1]);
        return o.intersect(s);
      }, t.prototype.dataToPoint = function(e, n, i) {
        i = i || [];
        var a = e[0], o = e[1];
        if (this._transform && a != null && isFinite(a) && o != null && isFinite(o))
          return he(i, e, this._transform);
        var s = this.getAxis("x"), l = this.getAxis("y");
        return i[0] = s.toGlobalCoord(s.dataToCoord(a, n)), i[1] = l.toGlobalCoord(l.dataToCoord(o, n)), i;
      }, t.prototype.clampData = function(e, n) {
        var i = this.getAxis("x").scale, a = this.getAxis("y").scale, o = i.getExtent(), s = a.getExtent(), l = i.parse(e[0]), u = a.parse(e[1]);
        return n = n || [], n[0] = Math.min(Math.max(Math.min(o[0], o[1]), l), Math.max(o[0], o[1])), n[1] = Math.min(Math.max(Math.min(s[0], s[1]), u), Math.max(s[0], s[1])), n;
      }, t.prototype.pointToData = function(e, n) {
        var i = [];
        if (this._invTransform)
          return he(i, e, this._invTransform);
        var a = this.getAxis("x"), o = this.getAxis("y");
        return i[0] = a.coordToData(a.toLocalCoord(e[0]), n), i[1] = o.coordToData(o.toLocalCoord(e[1]), n), i;
      }, t.prototype.getOtherAxis = function(e) {
        return this.getAxis(e.dim === "x" ? "y" : "x");
      }, t.prototype.getArea = function() {
        var e = this.getAxis("x").getGlobalExtent(), n = this.getAxis("y").getGlobalExtent(), i = Math.min(e[0], e[1]), a = Math.min(n[0], n[1]), o = Math.max(e[0], e[1]) - i, s = Math.max(n[0], n[1]) - a;
        return new dt(i, a, o, s);
      }, t;
    }(yL)
  ), SL = (
    /** @class */
    function(r) {
      x(t, r);
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
    }(s_)
  );
  function ov(r, t, e) {
    e = e || {};
    var n = r.coordinateSystem, i = t.axis, a = {}, o = i.getAxesOnZeroOf()[0], s = i.position, l = o ? "onZero" : s, u = i.dim, f = n.getRect(), h = [f.x, f.x + f.width, f.y, f.y + f.height], v = {
      left: 0,
      right: 1,
      top: 0,
      bottom: 1,
      onZero: 2
    }, c = t.get("offset") || 0, d = u === "x" ? [h[2] - c, h[3] + c] : [h[0] - c, h[1] + c];
    if (o) {
      var g = o.toGlobalCoord(o.dataToCoord(0));
      d[v.onZero] = Math.max(Math.min(g, d[1]), d[0]);
    }
    a.position = [u === "y" ? d[v[l]] : h[0], u === "x" ? d[v[l]] : h[3]], a.rotation = Math.PI / 2 * (u === "x" ? 0 : 1);
    var p = {
      top: -1,
      bottom: 1,
      left: -1,
      right: 1
    };
    a.labelDirection = a.tickDirection = a.nameDirection = p[s], a.labelOffset = o ? d[v[s]] - d[v.onZero] : 0, t.get(["axisTick", "inside"]) && (a.tickDirection = -a.tickDirection), Jr(e.labelInside, t.get(["axisLabel", "inside"])) && (a.labelDirection = -a.labelDirection);
    var m = t.get(["axisLabel", "rotate"]);
    return a.labelRotate = l === "top" ? -m : m, a.z2 = 1, a;
  }
  function a1(r) {
    return r.get("coordinateSystem") === "cartesian2d";
  }
  function o1(r) {
    var t = {
      xAxisModel: null,
      yAxisModel: null
    };
    return L(t, function(e, n) {
      var i = n.replace(/Model$/, ""), a = r.getReferringComponents(i, lr).models[0];
      if (!a)
        throw new Error(i + ' "' + tn(r.get(i + "Index"), r.get(i + "Id"), 0) + '" not found');
      t[n] = a;
    }), t;
  }
  var sv = Math.log;
  function wL(r, t, e) {
    var n = sa.prototype, i = n.getTicks.call(e), a = n.getTicks.call(e, !0), o = i.length - 1, s = n.getInterval.call(e), l = G0(r, t), u = l.extent, f = l.fixMin, h = l.fixMax;
    if (r.type === "log") {
      var v = sv(r.base);
      u = [sv(u[0]) / v, sv(u[1]) / v];
    }
    r.setExtent(u[0], u[1]), r.calcNiceExtent({
      splitNumber: o,
      fixMin: f,
      fixMax: h
    });
    var c = n.getExtent.call(r);
    f && (u[0] = c[0]), h && (u[1] = c[1]);
    var d = n.getInterval.call(r), g = u[0], p = u[1];
    if (f && h)
      d = (p - g) / o;
    else if (f)
      for (p = u[0] + d * o; p < u[1] && isFinite(p) && isFinite(u[1]); )
        d = Oc(d), p = u[0] + d * o;
    else if (h)
      for (g = u[1] - d * o; g > u[0] && isFinite(g) && isFinite(u[0]); )
        d = Oc(d), g = u[1] - d * o;
    else {
      var m = r.getTicks().length - 1;
      m > o && (d = Oc(d));
      var _ = d * o;
      p = Math.ceil(u[1] / d) * d, g = zt(p - _), g < 0 && u[0] >= 0 ? (g = 0, p = zt(_)) : p > 0 && u[1] <= 0 && (p = 0, g = -zt(_));
    }
    var S = (i[0].value - a[0].value) / s, b = (i[o].value - a[o].value) / s;
    n.setExtent.call(r, g + d * S, p + d * b), n.setInterval.call(r, d), (S || b) && n.setNiceExtent.call(r, g + d, p - d);
    {
      var C = n.getTicks.call(r);
      C[1] && (!GA(d) || bs(C[1].value) > bs(d)) && ee(
        // eslint-disable-next-line
        "The ticks may be not readable when set min: " + t.get("min") + ", max: " + t.get("max") + " and alignTicks: true"
      );
    }
  }
  var bL = (
    /** @class */
    function() {
      function r(t, e, n) {
        this.type = "grid", this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this.axisPointerEnabled = !0, this.dimensions = av, this._initCartesian(t, e, n), this.model = t;
      }
      return r.prototype.getRect = function() {
        return this._rect;
      }, r.prototype.update = function(t, e) {
        var n = this._axesMap;
        this._updateScale(t, this.model);
        function i(o) {
          var s, l = It(o), u = l.length;
          if (u) {
            for (var f = [], h = u - 1; h >= 0; h--) {
              var v = +l[h], c = o[v], d = c.model, g = c.scale;
              // Only value and log axis without interval support alignTicks.
              Rc(g) && d.get("alignTicks") && d.get("interval") == null ? f.push(c) : (zc(g, d), Rc(g) && (s = c));
            }
            f.length && (s || (s = f.pop(), zc(s.scale, s.model)), L(f, function(p) {
              wL(p.scale, p.model, s.scale);
            }));
          }
        }
        i(n.x), i(n.y);
        var a = {};
        L(n.x, function(o) {
          s1(n, "y", o, a);
        }), L(n.y, function(o) {
          s1(n, "x", o, a);
        }), this.resize(this.model, e);
      }, r.prototype.resize = function(t, e, n) {
        var i = t.getBoxLayoutParams(), a = !n && t.get("containLabel"), o = si(i, {
          width: e.getWidth(),
          height: e.getHeight()
        });
        this._rect = o;
        var s = this._axesList;
        l(), a && (L(s, function(u) {
          if (!u.model.get(["axisLabel", "inside"])) {
            var f = pP(u);
            if (f) {
              var h = u.isHorizontal() ? "height" : "width", v = u.model.get(["axisLabel", "margin"]);
              o[h] -= f[h] + v, u.position === "top" ? o.y += f.height + v : u.position === "left" && (o.x += f.width + v);
            }
          }
        }), l()), L(this._coordsList, function(u) {
          u.calcAffineTransform();
        });
        function l() {
          L(s, function(u) {
            var f = u.isHorizontal(), h = f ? [0, o.width] : [0, o.height], v = u.inverse ? 1 : 0;
            u.setExtent(h[v], h[1 - v]), xL(u, f ? o.x : o.y);
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
        j(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
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
        var e = t.seriesModel, n = t.xAxisModel || e && e.getReferringComponents("xAxis", lr).models[0], i = t.yAxisModel || e && e.getReferringComponents("yAxis", lr).models[0], a = t.gridModel, o = this._coordsList, s, l;
        if (e)
          s = e.coordinateSystem, wt(o, s) < 0 && (s = null);
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
        this._axesMap = s, L(s.x, function(f, h) {
          L(s.y, function(v, c) {
            var d = "x" + h + "y" + c, g = new _L(d);
            g.master = i, g.model = t, i._coordsMap[d] = g, i._coordsList.push(g), g.addAxis(f), g.addAxis(v);
          });
        });
        function u(f) {
          return function(h, v) {
            if (lv(h, t)) {
              var c = h.get("position");
              f === "x" ? c !== "top" && c !== "bottom" && (c = o.bottom ? "top" : "bottom") : c !== "left" && c !== "right" && (c = o.left ? "right" : "left"), o[c] = !0;
              var d = new SL(f, H0(h), [0, 0], h.get("type"), c), g = d.type === "category";
              d.onBand = g && h.get("boundaryGap"), d.inverse = h.get("inverse"), h.axis = d, d.model = h, d.grid = a, d.index = v, a._axesList.push(d), s[f][v] = d, l[f]++;
            }
          };
        }
      }, r.prototype._updateScale = function(t, e) {
        L(this._axesList, function(i) {
          if (i.scale.setExtent(1 / 0, -1 / 0), i.type === "category") {
            var a = i.model.get("categorySortInfo");
            i.scale.setSortInfo(a);
          }
        }), t.eachSeries(function(i) {
          if (a1(i)) {
            var a = o1(i), o = a.xAxisModel, s = a.yAxisModel;
            if (!lv(o, e) || !lv(s, e))
              return;
            var l = this.getCartesian(o.componentIndex, s.componentIndex), u = i.getData(), f = l.getAxis("x"), h = l.getAxis("y");
            n(u, f), n(u, h);
          }
        }, this);
        function n(i, a) {
          L(mP(i, a.dim), function(o) {
            a.scale.unionExtentFromData(i, o);
          });
        }
      }, r.prototype.getTooltipAxes = function(t) {
        var e = [], n = [];
        return L(this.getCartesians(), function(i) {
          var a = t != null && t !== "auto" ? i.getAxis(t) : i.getBaseAxis(), o = i.getOtherAxis(a);
          wt(e, a) < 0 && e.push(a), wt(n, o) < 0 && n.push(o);
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
          if (a1(i)) {
            var a = o1(i), o = a.xAxisModel, s = a.yAxisModel, l = o.getCoordSysModel();
            {
              if (!l)
                throw new Error('Grid "' + tn(o.get("gridIndex"), o.get("gridId"), 0) + '" not found');
              if (o.getCoordSysModel() !== s.getCoordSysModel())
                throw new Error("xAxis and yAxis must use the same grid");
            }
            var u = l.coordinateSystem;
            i.coordinateSystem = u.getCartesian(o.componentIndex, s.componentIndex);
          }
        }), n;
      }, r.dimensions = av, r;
    }()
  );
  function lv(r, t) {
    return r.getCoordSysModel() === t;
  }
  function s1(r, t, e, n) {
    e.getAxesOnZeroOf = function() {
      return a ? [a] : [];
    };
    var i = r[t], a, o = e.model, s = o.get(["axisLine", "onZero"]), l = o.get(["axisLine", "onZeroAxisIndex"]);
    if (!s)
      return;
    if (l != null)
      l1(i[l]) && (a = i[l]);
    else
      for (var u in i)
        if (i.hasOwnProperty(u) && l1(i[u]) && !n[f(i[u])]) {
          a = i[u];
          break;
        }
    a && (n[f(a)] = !0);
    function f(h) {
      return h.dim + "_" + h.index;
    }
  }
  function l1(r) {
    return r && r.type !== "category" && r.type !== "time" && dP(r);
  }
  function xL(r, t) {
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
  var bn = Math.PI, xn = (
    /** @class */
    function() {
      function r(t, e) {
        this.group = new Zt(), this.opt = e, this.axisModel = t, St(e, {
          labelOffset: 0,
          nameDirection: 1,
          tickDirection: 1,
          labelDirection: 1,
          silent: !0,
          handleAutoShown: function() {
            return !0;
          }
        });
        var n = new Zt({
          x: e.position[0],
          y: e.position[1],
          rotation: e.rotation
        });
        n.updateTransform(), this._transformGroup = n;
      }
      return r.prototype.hasBuilder = function(t) {
        return !!u1[t];
      }, r.prototype.add = function(t) {
        u1[t](this.opt, this.axisModel, this.group, this._transformGroup);
      }, r.prototype.getGroup = function() {
        return this.group;
      }, r.innerTextLayout = function(t, e, n) {
        var i = Af(e - t), a, o;
        return Ra(i) ? (o = n > 0 ? "top" : "bottom", a = "center") : Ra(i - bn) ? (o = n > 0 ? "bottom" : "top", a = "center") : (o = "middle", i > 0 && i < bn ? a = n > 0 ? "right" : "left" : a = n > 0 ? "left" : "right"), {
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
  ), u1 = {
    axisLine: function(r, t, e, n) {
      var i = t.get(["axisLine", "show"]);
      if (i === "auto" && r.handleAutoShown && (i = r.handleAutoShown("axisLine")), !!i) {
        var a = t.axis.getExtent(), o = n.transform, s = [a[0], 0], l = [a[1], 0], u = s[0] > l[0];
        o && (he(s, s, o), he(l, l, o));
        var f = W({
          lineCap: "round"
        }, t.getModel(["axisLine", "lineStyle"]).getLineStyle()), h = new Ur({
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
        ja(h.shape, h.style.lineWidth), h.anid = "line", e.add(h);
        var v = t.get(["axisLine", "symbol"]);
        if (v != null) {
          var c = t.get(["axisLine", "symbolSize"]);
          Z(v) && (v = [v, v]), (Z(c) || Mt(c)) && (c = [c, c]);
          var d = Ay(t.get(["axisLine", "symbolOffset"]) || 0, c), g = c[0], p = c[1];
          L([{
            rotate: r.rotation + Math.PI / 2,
            offset: d[0],
            r: 0
          }, {
            rotate: r.rotation - Math.PI / 2,
            offset: d[1],
            r: Math.sqrt((s[0] - l[0]) * (s[0] - l[0]) + (s[1] - l[1]) * (s[1] - l[1]))
          }], function(m, _) {
            if (v[_] !== "none" && v[_] != null) {
              var S = hi(v[_], -g / 2, -p / 2, g, p, f.stroke, !0), b = m.r + m.offset, C = u ? l : s;
              S.attr({
                rotation: m.rotate,
                x: C[0] + b * Math.cos(r.rotation),
                y: C[1] - b * Math.sin(r.rotation),
                silent: !0,
                z2: 11
              }), e.add(S);
            }
          });
        }
      }
    },
    axisTickLabel: function(r, t, e, n) {
      var i = DL(e, n, t, r), a = AL(e, n, t, r);
      if (CL(t, a, i), ML(e, n, t, r.tickDirection), t.get(["axisLabel", "hideOverlap"])) {
        var o = p_(K(a, function(s) {
          return {
            label: s,
            priority: s.z2,
            defaultAttr: {
              ignore: s.ignore
            }
          };
        }));
        y_(o);
      }
    },
    axisName: function(r, t, e, n) {
      var i = Jr(r.axisName, t.get("name"));
      if (i) {
        var a = t.get("nameLocation"), o = r.nameDirection, s = t.getModel("nameTextStyle"), l = t.get("nameGap") || 0, u = t.axis.getExtent(), f = u[0] > u[1] ? -1 : 1, h = [
          a === "start" ? u[0] - f * l : a === "end" ? u[1] + f * l : (u[0] + u[1]) / 2,
          // Reuse labelOffset.
          h1(a) ? r.labelOffset + o * l : 0
        ], v, c = t.get("nameRotate");
        c != null && (c = c * bn / 180);
        var d;
        h1(a) ? v = xn.innerTextLayout(
          r.rotation,
          c ?? r.rotation,
          // Adapt to axis.
          o
        ) : (v = TL(r.rotation, a, c || 0, u), d = r.axisNameAvailableWidth, d != null && (d = Math.abs(d / Math.sin(v.rotation)), !isFinite(d) && (d = null)));
        var g = s.getFont(), p = t.get("nameTruncate", !0) || {}, m = p.ellipsis, _ = Jr(r.nameTruncateMaxWidth, p.maxWidth, d), S = new $t({
          x: h[0],
          y: h[1],
          rotation: v.rotation,
          silent: xn.isLabelSilent(t),
          style: Yr(s, {
            text: i,
            font: g,
            overflow: "truncate",
            width: _,
            ellipsis: m,
            fill: s.getTextColor() || t.get(["axisLine", "lineStyle", "color"]),
            align: s.get("align") || v.textAlign,
            verticalAlign: s.get("verticalAlign") || v.textVerticalAlign
          }),
          z2: 1
        });
        if (gh({
          el: S,
          componentModel: t,
          itemName: i
        }), S.__fullText = i, S.anid = "name", t.get("triggerEvent")) {
          var b = xn.makeAxisEventDataBase(t);
          b.targetType = "axisName", b.name = i, _t(S).eventData = b;
        }
        n.add(S), S.updateTransform(), e.add(S), S.decomposeTransform();
      }
    }
  };
  function TL(r, t, e, n) {
    var i = Af(e - r), a, o, s = n[0] > n[1], l = t === "start" && !s || t !== "start" && s;
    return Ra(i - bn / 2) ? (o = l ? "bottom" : "top", a = "center") : Ra(i - bn * 1.5) ? (o = l ? "top" : "bottom", a = "center") : (o = "middle", i < bn * 1.5 && i > bn / 2 ? a = l ? "left" : "right" : a = l ? "right" : "left"), {
      rotation: i,
      textAlign: a,
      textVerticalAlign: o
    };
  }
  function CL(r, t, e) {
    if (!W0(r.axis)) {
      var n = r.get(["axisLabel", "showMinLabel"]), i = r.get(["axisLabel", "showMaxLabel"]);
      t = t || [], e = e || [];
      var a = t[0], o = t[1], s = t[t.length - 1], l = t[t.length - 2], u = e[0], f = e[1], h = e[e.length - 1], v = e[e.length - 2];
      n === !1 ? (nr(a), nr(u)) : f1(a, o) && (n ? (nr(o), nr(f)) : (nr(a), nr(u))), i === !1 ? (nr(s), nr(h)) : f1(l, s) && (i ? (nr(l), nr(v)) : (nr(s), nr(h)));
    }
  }
  function nr(r) {
    r && (r.ignore = !0);
  }
  function f1(r, t) {
    var e = r && r.getBoundingRect().clone(), n = t && t.getBoundingRect().clone();
    if (!(!e || !n)) {
      var i = ya([]);
      return Jo(i, i, -r.rotation), e.applyTransform(nn([], i, r.getLocalTransform())), n.applyTransform(nn([], i, t.getLocalTransform())), e.intersect(n);
    }
  }
  function h1(r) {
    return r === "middle" || r === "center";
  }
  function c1(r, t, e, n, i) {
    for (var a = [], o = [], s = [], l = 0; l < r.length; l++) {
      var u = r[l].coord;
      o[0] = u, o[1] = 0, s[0] = u, s[1] = e, t && (he(o, o, t), he(s, s, t));
      var f = new Ur({
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
      ja(f.shape, f.style.lineWidth), f.anid = i + "_" + r[l].tickValue, a.push(f);
    }
    return a;
  }
  function DL(r, t, e, n) {
    var i = e.axis, a = e.getModel("axisTick"), o = a.get("show");
    if (o === "auto" && n.handleAutoShown && (o = n.handleAutoShown("axisTick")), !(!o || i.scale.isBlank())) {
      for (var s = a.getModel("lineStyle"), l = n.tickDirection * a.get("length"), u = i.getTicksCoords(), f = c1(u, t.transform, l, St(s.getLineStyle(), {
        stroke: e.get(["axisLine", "lineStyle", "color"])
      }), "ticks"), h = 0; h < f.length; h++)
        r.add(f[h]);
      return f;
    }
  }
  function ML(r, t, e, n) {
    var i = e.axis, a = e.getModel("minorTick");
    if (!(!a.get("show") || i.scale.isBlank())) {
      var o = i.getMinorTicksCoords();
      if (o.length)
        for (var s = a.getModel("lineStyle"), l = n * a.get("length"), u = St(s.getLineStyle(), St(e.getModel("axisTick").getLineStyle(), {
          stroke: e.get(["axisLine", "lineStyle", "color"])
        })), f = 0; f < o.length; f++)
          for (var h = c1(o[f], t.transform, l, u, "minorticks_" + f), v = 0; v < h.length; v++)
            r.add(h[v]);
    }
  }
  function AL(r, t, e, n) {
    var i = e.axis, a = Jr(n.axisLabelShow, e.get(["axisLabel", "show"]));
    if (!(!a || i.scale.isBlank())) {
      var o = e.getModel("axisLabel"), s = o.get("margin"), l = i.getViewLabels(), u = (Jr(n.labelRotate, o.get("rotate")) || 0) * bn / 180, f = xn.innerTextLayout(n.rotation, u, n.labelDirection), h = e.getCategories && e.getCategories(!0), v = [], c = xn.isLabelSilent(e), d = e.get("triggerEvent");
      return L(l, function(g, p) {
        var m = i.scale.type === "ordinal" ? i.scale.getRawOrdinalNumber(g.tickValue) : g.tickValue, _ = g.formattedLabel, S = g.rawLabel, b = o;
        if (h && h[m]) {
          var C = h[m];
          j(C) && C.textStyle && (b = new Rt(C.textStyle, o, e.ecModel));
        }
        var T = b.getTextColor() || e.get(["axisLine", "lineStyle", "color"]), D = i.dataToCoord(m), M = new $t({
          x: D,
          y: n.labelOffset + n.labelDirection * s,
          rotation: f.rotation,
          silent: c,
          z2: 10 + (g.level || 0),
          style: Yr(b, {
            text: _,
            align: b.getShallow("align", !0) || f.textAlign,
            verticalAlign: b.getShallow("verticalAlign", !0) || b.getShallow("baseline", !0) || f.textVerticalAlign,
            fill: tt(T) ? T(
              // (1) In category axis with data zoom, tick is not the original
              // index of axis.data. So tick should not be exposed to user
              // in category axis.
              // (2) Compatible with previous version, which always use formatted label as
              // input. But in interval scale the formatted label is like '223,445', which
              // maked user replace ','. So we modify it to return original val but remain
              // it as 'string' to avoid error in replacing.
              i.type === "category" ? S : i.type === "value" ? m + "" : m,
              p
            ) : T
          })
        });
        if (M.anid = "label_" + m, d) {
          var P = xn.makeAxisEventDataBase(e);
          P.targetType = "axisLabel", P.value = S, P.tickIndex = p, i.type === "category" && (P.dataIndex = m), _t(M).eventData = P;
        }
        t.add(M), M.updateTransform(), v.push(M), r.add(M), M.decomposeTransform();
      }), v;
    }
  }
  function PL(r, t) {
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
    return IL(e, r, t), e.seriesInvolved && EL(e, r), e;
  }
  function IL(r, t, e) {
    var n = t.getComponent("tooltip"), i = t.getComponent("axisPointer"), a = i.get("link", !0) || [], o = [];
    L(e.getCoordinateSystems(), function(s) {
      if (!s.axisPointerEnabled)
        return;
      var l = Eo(s.model), u = r.coordSysAxesInfo[l] = {};
      r.coordSysMap[l] = s;
      var f = s.model, h = f.getModel("tooltip", n);
      if (L(s.getAxes(), Ot(g, !1, null)), s.getTooltipAxes && n && h.get("show")) {
        var v = h.get("trigger") === "axis", c = h.get(["axisPointer", "type"]) === "cross", d = s.getTooltipAxes(h.get(["axisPointer", "axis"]));
        (v || c) && L(d.baseAxes, Ot(g, c ? "cross" : !0, v)), c && L(d.otherAxes, Ot(g, "cross", !1));
      }
      function g(p, m, _) {
        var S = _.model.getModel("axisPointer", i), b = S.get("show");
        if (!(!b || b === "auto" && !p && !hv(S))) {
          m == null && (m = S.get("triggerTooltip")), S = p ? LL(_, h, i, t, p, m) : S;
          var C = S.get("snap"), T = Eo(_.model), D = m || C || _.type === "category", M = r.axesInfo[T] = {
            key: T,
            axis: _,
            coordSys: s,
            axisPointerModel: S,
            triggerTooltip: m,
            involveSeries: D,
            snap: C,
            useHandle: hv(S),
            seriesModels: [],
            linkGroup: null
          };
          u[T] = M, r.seriesInvolved = r.seriesInvolved || D;
          var P = RL(a, _);
          if (P != null) {
            var E = o[P] || (o[P] = {
              axesInfo: {}
            });
            E.axesInfo[T] = M, E.mapper = a[P].mapper, M.linkGroup = E;
          }
        }
      }
    });
  }
  function LL(r, t, e, n, i, a) {
    var o = t.getModel("axisPointer"), s = ["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], l = {};
    L(s, function(v) {
      l[v] = vt(o.get(v));
    }), l.snap = r.type !== "category" && !!a, o.get("type") === "cross" && (l.type = "line");
    var u = l.label || (l.label = {});
    if (u.show == null && (u.show = !1), i === "cross") {
      var f = o.get(["label", "show"]);
      if (u.show = f ?? !0, !a) {
        var h = l.lineStyle = o.get("crossStyle");
        h && St(u, h.textStyle);
      }
    }
    return r.model.getModel("axisPointer", new Rt(l, e, n));
  }
  function EL(r, t) {
    t.eachSeries(function(e) {
      var n = e.coordinateSystem, i = e.get(["tooltip", "trigger"], !0), a = e.get(["tooltip", "show"], !0);
      !n || i === "none" || i === !1 || i === "item" || a === !1 || e.get(["axisPointer", "show"], !0) === !1 || L(r.coordSysAxesInfo[Eo(n.model)], function(o) {
        var s = o.axis;
        n.getAxis(s.dim) === s && (o.seriesModels.push(e), o.seriesDataCount == null && (o.seriesDataCount = 0), o.seriesDataCount += e.getData().count());
      });
    });
  }
  function RL(r, t) {
    for (var e = t.model, n = t.dim, i = 0; i < r.length; i++) {
      var a = r[i] || {};
      if (uv(a[n + "AxisId"], e.id) || uv(a[n + "AxisIndex"], e.componentIndex) || uv(a[n + "AxisName"], e.name))
        return i;
    }
  }
  function uv(r, t) {
    return r === "all" || X(r) && wt(r, t) >= 0 || r === t;
  }
  function OL(r) {
    var t = fv(r);
    if (t) {
      var e = t.axisPointerModel, n = t.axis.scale, i = e.option, a = e.get("status"), o = e.get("value");
      o != null && (o = n.parse(o));
      var s = hv(e);
      a == null && (i.status = s ? "show" : "hide");
      var l = n.getExtent().slice();
      l[0] > l[1] && l.reverse(), // Pick a value on axis when initializing.
      (o == null || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), i.value = o, s && (i.status = t.axis.scale.isBlank() ? "hide" : "show");
    }
  }
  function fv(r) {
    var t = (r.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
    return t && t.axesInfo[Eo(r)];
  }
  function kL(r) {
    var t = fv(r);
    return t && t.axisPointerModel;
  }
  function hv(r) {
    return !!r.get(["handle", "show"]);
  }
  function Eo(r) {
    return r.type + "||" + r.id;
  }
  var cv = {}, v1 = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e;
      }
      return t.prototype.render = function(e, n, i, a) {
        this.axisPointerClass && OL(e), r.prototype.render.apply(this, arguments), this._doUpdateAxisPointerClass(e, i, !0);
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
          var o = kL(e);
          o ? (this._axisPointer || (this._axisPointer = new a())).render(e, o, n, i) : this._disposeAxisPointer(n);
        }
      }, t.prototype._disposeAxisPointer = function(e) {
        this._axisPointer && this._axisPointer.dispose(e), this._axisPointer = null;
      }, t.registerAxisPointerClass = function(e, n) {
        if (cv[e])
          throw new Error("axisPointer " + e + " exists");
        cv[e] = n;
      }, t.getAxisPointerClass = function(e) {
        return e && cv[e];
      }, t.type = "axis", t;
    }(de)
  ), vv = kt();
  function NL(r, t, e, n) {
    var i = e.axis;
    if (!i.scale.isBlank()) {
      var a = e.getModel("splitArea"), o = a.getModel("areaStyle"), s = o.get("color"), l = n.coordinateSystem.getRect(), u = i.getTicksCoords({
        tickModel: a,
        clamp: !0
      });
      if (u.length) {
        var f = s.length, h = vv(r).splitAreaColors, v = lt(), c = 0;
        if (h)
          for (var d = 0; d < u.length; d++) {
            var g = h.get(u[d].tickValue);
            if (g != null) {
              c = (g + (f - 1) * d) % f;
              break;
            }
          }
        var p = i.toGlobalCoord(u[0].coord), m = o.getAreaStyle();
        s = X(s) ? s : [s];
        for (var d = 1; d < u.length; d++) {
          var _ = i.toGlobalCoord(u[d].coord), S = void 0, b = void 0, C = void 0, T = void 0;
          i.isHorizontal() ? (S = p, b = l.y, C = _ - S, T = l.height, p = S + C) : (S = l.x, b = p, C = l.width, T = _ - b, p = b + T);
          var D = u[d - 1].tickValue;
          D != null && v.set(D, c), t.add(new Vt({
            anid: D != null ? "area_" + D : null,
            shape: {
              x: S,
              y: b,
              width: C,
              height: T
            },
            style: St({
              fill: s[c]
            }, m),
            autoBatch: !0,
            silent: !0
          })), c = (c + 1) % f;
        }
        vv(r).splitAreaColors = v;
      }
    }
  }
  function BL(r) {
    vv(r).splitAreaColors = null;
  }
  var FL = ["axisLine", "axisTickLabel", "axisName"], zL = ["splitArea", "splitLine", "minorSplitLine"], d1 = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e.axisPointerClass = "CartesianAxisPointer", e;
      }
      return t.prototype.render = function(e, n, i, a) {
        this.group.removeAll();
        var o = this._axisGroup;
        if (this._axisGroup = new Zt(), this.group.add(this._axisGroup), !!e.get("show")) {
          var s = e.getCoordSysModel(), l = ov(s, e), u = new xn(e, W({
            handleAutoShown: function(h) {
              for (var v = s.coordinateSystem.getCartesians(), c = 0; c < v.length; c++)
                if (Rc(v[c].getOtherAxis(e.axis).scale))
                  return !0;
              return !1;
            }
          }, l));
          L(FL, u.add, u), this._axisGroup.add(u.getGroup()), L(zL, function(h) {
            e.get([h, "show"]) && VL[h](this, this._axisGroup, e, s);
          }, this);
          var f = a && a.type === "changeAxisOrder" && a.isInitSort;
          f || Bg(o, this._axisGroup, e), r.prototype.render.call(this, e, n, i, a);
        }
      }, t.prototype.remove = function() {
        BL(this);
      }, t.type = "cartesianAxis", t;
    }(v1)
  ), VL = {
    splitLine: function(r, t, e, n) {
      var i = e.axis;
      if (!i.scale.isBlank()) {
        var a = e.getModel("splitLine"), o = a.getModel("lineStyle"), s = o.get("color");
        s = X(s) ? s : [s];
        for (var l = n.coordinateSystem.getRect(), u = i.isHorizontal(), f = 0, h = i.getTicksCoords({
          tickModel: a
        }), v = [], c = [], d = o.getLineStyle(), g = 0; g < h.length; g++) {
          var p = i.toGlobalCoord(h[g].coord);
          u ? (v[0] = p, v[1] = l.y, c[0] = p, c[1] = l.y + l.height) : (v[0] = l.x, v[1] = p, c[0] = l.x + l.width, c[1] = p);
          var m = f++ % s.length, _ = h[g].tickValue, S = new Ur({
            anid: _ != null ? "line_" + h[g].tickValue : null,
            autoBatch: !0,
            shape: {
              x1: v[0],
              y1: v[1],
              x2: c[0],
              y2: c[1]
            },
            style: St({
              stroke: s[m]
            }, d),
            silent: !0
          });
          ja(S.shape, d.lineWidth), t.add(S);
        }
      }
    },
    minorSplitLine: function(r, t, e, n) {
      var i = e.axis, a = e.getModel("minorSplitLine"), o = a.getModel("lineStyle"), s = n.coordinateSystem.getRect(), l = i.isHorizontal(), u = i.getMinorTicksCoords();
      if (u.length)
        for (var f = [], h = [], v = o.getLineStyle(), c = 0; c < u.length; c++)
          for (var d = 0; d < u[c].length; d++) {
            var g = i.toGlobalCoord(u[c][d].coord);
            l ? (f[0] = g, f[1] = s.y, h[0] = g, h[1] = s.y + s.height) : (f[0] = s.x, f[1] = g, h[0] = s.x + s.width, h[1] = g);
            var p = new Ur({
              anid: "minor_line_" + u[c][d].tickValue,
              autoBatch: !0,
              shape: {
                x1: f[0],
                y1: f[1],
                x2: h[0],
                y2: h[1]
              },
              style: v,
              silent: !0
            });
            ja(p.shape, v.lineWidth), t.add(p);
          }
    },
    splitArea: function(r, t, e, n) {
      NL(r, t, e, n);
    }
  }, p1 = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e;
      }
      return t.type = "xAxis", t;
    }(d1)
  ), GL = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = p1.type, e;
      }
      return t.type = "yAxis", t;
    }(d1)
  ), HL = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = "grid", e;
      }
      return t.prototype.render = function(e, n) {
        this.group.removeAll(), e.get("show") && this.group.add(new Vt({
          shape: e.coordinateSystem.getRect(),
          style: St({
            fill: e.get("backgroundColor")
          }, e.getItemStyle()),
          silent: !0,
          z2: -1
        }));
      }, t.type = "grid", t;
    }(de)
  ), g1 = {
    // gridIndex: 0,
    // gridId: '',
    offset: 0
  };
  function WL(r) {
    r.registerComponentView(HL), r.registerComponentModel(cL), r.registerCoordinateSystem("cartesian2d", bL), r1(r, "x", nv, g1), r1(r, "y", nv, g1), r.registerComponentView(p1), r.registerComponentView(GL), r.registerPreprocessor(function(t) {
      t.xAxis && t.yAxis && !t.grid && (t.grid = {});
    });
  }
  Pe(WL);
  var UL = (
    /** @class */
    function(r) {
      x(t, r);
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
    }(pt)
  ), YL = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e;
      }
      return t.prototype.render = function(e, n, i) {
        if (this.group.removeAll(), !!e.get("show")) {
          var a = this.group, o = e.getModel("textStyle"), s = e.getModel("subtextStyle"), l = e.get("textAlign"), u = ut(e.get("textBaseline"), e.get("textVerticalAlign")), f = new $t({
            style: Yr(o, {
              text: e.get("text"),
              fill: o.getTextColor()
            }, {
              disableBox: !0
            }),
            z2: 10
          }), h = f.getBoundingRect(), v = e.get("subtext"), c = new $t({
            style: Yr(s, {
              text: v,
              fill: s.getTextColor(),
              y: h.height + e.get("itemGap"),
              verticalAlign: "top"
            }, {
              disableBox: !0
            }),
            z2: 10
          }), d = e.get("link"), g = e.get("sublink"), p = e.get("triggerEvent", !0);
          f.silent = !d && !p, c.silent = !g && !p, d && f.on("click", function() {
            hm(d, "_" + e.get("target"));
          }), g && c.on("click", function() {
            hm(g, "_" + e.get("subtarget"));
          }), _t(f).eventData = _t(c).eventData = p ? {
            componentType: "title",
            componentIndex: e.componentIndex
          } : null, a.add(f), v && a.add(c);
          var m = a.getBoundingRect(), _ = e.getBoxLayoutParams();
          _.width = m.width, _.height = m.height;
          var S = si(_, {
            width: i.getWidth(),
            height: i.getHeight()
          }, e.get("padding"));
          l || (l = e.get("left") || e.get("right"), l === "middle" && (l = "center"), l === "right" ? S.x += S.width : l === "center" && (S.x += S.width / 2)), u || (u = e.get("top") || e.get("bottom"), u === "center" && (u = "middle"), u === "bottom" ? S.y += S.height : u === "middle" && (S.y += S.height / 2), u = u || "top"), a.x = S.x, a.y = S.y, a.markRedraw();
          var b = {
            align: l,
            verticalAlign: u
          };
          f.setStyle(b), c.setStyle(b), m = a.getBoundingRect();
          var C = S.margin, T = e.getItemStyle(["color", "opacity"]);
          T.fill = e.get("backgroundColor");
          var D = new Vt({
            shape: {
              x: m.x - C[3],
              y: m.y - C[0],
              width: m.width + C[1] + C[3],
              height: m.height + C[0] + C[2],
              r: e.get("borderRadius")
            },
            style: T,
            subPixelOptimize: !0,
            silent: !0
          });
          a.add(D);
        }
      }, t.type = "title", t;
    }(de)
  );
  function XL(r) {
    r.registerComponentModel(UL), r.registerComponentView(YL);
  }
  Pe(XL);
  var $L = function(r, t) {
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
  }, dv = (
    /** @class */
    function(r) {
      x(t, r);
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
        n === !0 && (n = e.selector = ["all", "inverse"]), X(n) && L(n, function(a, o) {
          Z(a) && (a = {
            type: a
          }), n[o] = yt(a, $L(i, a.type));
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
            var h = l.legendVisualProvider, v = h.getAllNames();
            e.isSeriesFiltered(l) || (i = i.concat(v)), v.length ? n = n.concat(v) : f = !0;
          } else
            f = !0;
          f && Ef(l) && n.push(l.name);
        }), this._availableNames = i;
        var a = this.get("data") || n, o = lt(), s = K(a, function(l) {
          return (Z(l) || Mt(l)) && (l = {
            name: l
          }), o.get(l.name) ? null : (o.set(l.name, !0), new Rt(l, this, this.ecModel));
        }, this);
        this._data = Ft(s, function(l) {
          return !!l;
        });
      }, t.prototype.getData = function() {
        return this._data;
      }, t.prototype.select = function(e) {
        var n = this.option.selected, i = this.get("selectedMode");
        if (i === "single") {
          var a = this._data;
          L(a, function(o) {
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
        L(e, function(i) {
          n[i.get("name", !0)] = !0;
        });
      }, t.prototype.inverseSelect = function() {
        var e = this._data, n = this.option.selected;
        L(e, function(i) {
          var a = i.get("name", !0);
          n.hasOwnProperty(a) || (n[a] = !0), n[a] = !n[a];
        });
      }, t.prototype.isSelected = function(e) {
        var n = this.option.selected;
        return !(n.hasOwnProperty(e) && !n[e]) && wt(this._availableNames, e) >= 0;
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
    }(pt)
  );
  function qL(r, t) {
    var e = ao(t.get("padding")), n = t.getItemStyle(["color", "opacity"]);
    return n.fill = t.get("backgroundColor"), r = new Vt({
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
  var la = Ot, pv = L, lu = Zt, m1 = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e.newlineDisabled = !1, e;
      }
      return t.prototype.init = function() {
        this.group.add(this._contentGroup = new lu()), this.group.add(this._selectorGroup = new lu()), this._isFirstRender = !0;
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
          }, v = e.get("padding"), c = si(f, h, v), d = this.layoutInner(e, o, c, a, l, u), g = si(St({
            width: d.width,
            height: d.height
          }, f), h, v);
          this.group.x = g.x - d.x, this.group.y = g.y - d.y, this.group.markRedraw(), this.group.add(this._backgroundEl = qL(d, e));
        }
      }, t.prototype.resetInner = function() {
        this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll();
      }, t.prototype.renderInner = function(e, n, i, a, o, s, l) {
        var u = this.getContentGroup(), f = lt(), h = n.get("selectedMode"), v = [];
        i.eachRawSeries(function(c) {
          !c.get("legendHoverLink") && v.push(c.id);
        }), pv(n.getData(), function(c, d) {
          var g = c.get("name");
          if (!this.newlineDisabled && (g === "" || g === `
`)) {
            var p = new lu();
            p.newline = !0, u.add(p);
            return;
          }
          var m = i.getSeriesByName(g)[0];
          if (!f.get(g)) {
            if (m) {
              var _ = m.getData(), S = _.getVisual("legendLineStyle") || {}, b = _.getVisual("legendIcon"), C = _.getVisual("style"), T = this._createItem(m, g, d, c, n, e, S, C, b, h, a);
              T.on("click", la(y1, g, null, a, v)).on("mouseover", la(gv, m.name, null, a, v)).on("mouseout", la(mv, m.name, null, a, v)), f.set(g, !0);
            } else
              i.eachRawSeries(function(D) {
                if (!f.get(g) && D.legendVisualProvider) {
                  var M = D.legendVisualProvider;
                  if (!M.containName(g))
                    return;
                  var P = M.indexOfName(g), E = M.getItemVisual(P, "style"), A = M.getItemVisual(P, "legendIcon"), k = ke(E.fill);
                  k && k[3] === 0 && (k[3] = 0.2, E = W(W({}, E), {
                    fill: ln(k, "rgba")
                  }));
                  var N = this._createItem(D, g, d, c, n, e, {}, E, A, h, a);
                  N.on("click", la(y1, null, g, a, v)).on("mouseover", la(gv, null, g, a, v)).on("mouseout", la(mv, null, g, a, v)), f.set(g, !0);
                }
              }, this);
            f.get(g) || console.warn(g + " series not exists. Legend data should be same with series name or data name.");
          }
        }, this), o && this._createSelector(o, n, a, s, l);
      }, t.prototype._createSelector = function(e, n, i, a, o) {
        var s = this.getSelectorGroup();
        pv(e, function(u) {
          var f = u.type, h = new $t({
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
          var v = n.getModel("selectorLabel"), c = n.getModel(["emphasis", "selectorLabel"]);
          Qa(h, {
            normal: v,
            emphasis: c
          }, {
            defaultText: u.title
          }), Vs(h);
        });
      }, t.prototype._createItem = function(e, n, i, a, o, s, l, u, f, h, v) {
        var c = e.visualDrawType, d = o.get("itemWidth"), g = o.get("itemHeight"), p = o.isSelected(n), m = a.get("symbolRotate"), _ = a.get("symbolKeepAspect"), S = a.get("icon");
        f = S || f || "roundRect";
        var b = ZL(f, a, l, u, c, p, v), C = new lu(), T = a.getModel("textStyle");
        if (tt(e.getLegendIcon) && (!S || S === "inherit"))
          C.add(e.getLegendIcon({
            itemWidth: d,
            itemHeight: g,
            icon: f,
            iconRotate: m,
            itemStyle: b.itemStyle,
            lineStyle: b.lineStyle,
            symbolKeepAspect: _
          }));
        else {
          var D = S === "inherit" && e.getData().getVisual("symbol") ? m === "inherit" ? e.getData().getVisual("symbolRotate") : m : 0;
          C.add(KL({
            itemWidth: d,
            itemHeight: g,
            icon: f,
            iconRotate: D,
            itemStyle: b.itemStyle,
            lineStyle: b.lineStyle,
            symbolKeepAspect: _
          }));
        }
        var M = s === "left" ? d + 5 : -5, P = s, E = o.get("formatter"), A = n;
        Z(E) && E ? A = E.replace("{name}", n ?? "") : tt(E) && (A = E(n));
        var k = a.get("inactiveColor");
        C.add(new $t({
          style: Yr(T, {
            text: A,
            x: M,
            y: g / 2,
            fill: p ? T.getTextColor() : k,
            align: P,
            verticalAlign: "middle"
          })
        }));
        var N = new Vt({
          shape: C.getBoundingRect(),
          invisible: !0
        }), B = a.getModel("tooltip");
        return B.get("show") && gh({
          el: N,
          componentModel: o,
          itemName: n,
          itemTooltipOption: B.option
        }), C.add(N), C.eachChild(function(z) {
          z.silent = !0;
        }), N.silent = !h, this.getContentGroup().add(C), Vs(C), C.__legendDataIndex = i, C;
      }, t.prototype.layoutInner = function(e, n, i, a, o, s) {
        var l = this.getContentGroup(), u = this.getSelectorGroup();
        oo(e.get("orient"), l, e.get("itemGap"), i.width, i.height);
        var f = l.getBoundingRect(), h = [-f.x, -f.y];
        if (u.markRedraw(), l.markRedraw(), o) {
          oo(
            // Buttons in selectorGroup always layout horizontally
            "horizontal",
            u,
            e.get("selectorItemGap", !0)
          );
          var v = u.getBoundingRect(), c = [-v.x, -v.y], d = e.get("selectorButtonGap", !0), g = e.getOrient().index, p = g === 0 ? "width" : "height", m = g === 0 ? "height" : "width", _ = g === 0 ? "y" : "x";
          s === "end" ? c[g] += f[p] + d : h[g] += v[p] + d, c[1 - g] += f[m] / 2 - v[m] / 2, u.x = c[0], u.y = c[1], l.x = h[0], l.y = h[1];
          var S = {
            x: 0,
            y: 0
          };
          return S[p] = f[p] + d + v[p], S[m] = Math.max(f[m], v[m]), S[_] = Math.min(0, v[_] + c[1 - g]), S;
        } else
          return l.x = h[0], l.y = h[1], this.group.getBoundingRect();
      }, t.prototype.remove = function() {
        this.getContentGroup().removeAll(), this._isFirstRender = !0;
      }, t.type = "legend.plain", t;
    }(de)
  );
  function ZL(r, t, e, n, i, a, o) {
    function s(p, m) {
      p.lineWidth === "auto" && (p.lineWidth = m.lineWidth > 0 ? 2 : 0), pv(p, function(_, S) {
        p[S] === "inherit" && (p[S] = m[S]);
      });
    }
    var l = t.getModel("itemStyle"), u = l.getItemStyle(), f = r.lastIndexOf("empty", 0) === 0 ? "fill" : "stroke", h = l.getShallow("decal");
    u.decal = !h || h === "inherit" ? n.decal : sc(h, o), u.fill === "inherit" && (u.fill = n[i]), u.stroke === "inherit" && (u.stroke = n[f]), u.opacity === "inherit" && (u.opacity = (i === "fill" ? n : e).opacity), s(u, n);
    var v = t.getModel("lineStyle"), c = v.getLineStyle();
    if (s(c, e), u.fill === "auto" && (u.fill = n.fill), u.stroke === "auto" && (u.stroke = n.fill), c.stroke === "auto" && (c.stroke = n.fill), !a) {
      var d = t.get("inactiveBorderWidth"), g = u[f];
      u.lineWidth = d === "auto" ? n.lineWidth > 0 && g ? 2 : 0 : u.lineWidth, u.fill = t.get("inactiveColor"), u.stroke = t.get("inactiveBorderColor"), c.stroke = v.get("inactiveColor"), c.lineWidth = v.get("inactiveWidth");
    }
    return {
      itemStyle: u,
      lineStyle: c
    };
  }
  function KL(r) {
    var t = r.icon || "roundRect", e = hi(t, 0, 0, r.itemWidth, r.itemHeight, r.itemStyle.fill, r.symbolKeepAspect);
    return e.setStyle(r.itemStyle), e.rotation = (r.iconRotate || 0) * Math.PI / 180, e.setOrigin([r.itemWidth / 2, r.itemHeight / 2]), t.indexOf("empty") > -1 && (e.style.stroke = e.style.fill, e.style.fill = "#fff", e.style.lineWidth = 2), e;
  }
  function y1(r, t, e, n) {
    mv(r, t, e, n), e.dispatchAction({
      type: "legendToggleSelect",
      name: r ?? t
    }), gv(r, t, e, n);
  }
  function _1(r) {
    for (var t = r.getZr().storage.getDisplayList(), e, n = 0, i = t.length; n < i && !(e = t[n].states.emphasis); )
      n++;
    return e && e.hoverLayer;
  }
  function gv(r, t, e, n) {
    _1(e) || e.dispatchAction({
      type: "highlight",
      seriesName: r,
      name: t,
      excludeSeriesId: n
    });
  }
  function mv(r, t, e, n) {
    _1(e) || e.dispatchAction({
      type: "downplay",
      seriesName: r,
      name: t,
      excludeSeriesId: n
    });
  }
  function jL(r) {
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
  function Ro(r, t, e) {
    var n = {}, i = r === "toggleSelected", a;
    return e.eachComponent("legend", function(o) {
      i && a != null ? o[a ? "select" : "unSelect"](t.name) : r === "allSelect" || r === "inverseSelect" ? o[r]() : (o[r](t.name), a = o.isSelected(t.name));
      var s = o.getData();
      L(s, function(l) {
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
  function QL(r) {
    r.registerAction("legendToggleSelect", "legendselectchanged", Ot(Ro, "toggleSelected")), r.registerAction("legendAllSelect", "legendselectall", Ot(Ro, "allSelect")), r.registerAction("legendInverseSelect", "legendinverseselect", Ot(Ro, "inverseSelect")), r.registerAction("legendSelect", "legendselected", Ot(Ro, "select")), r.registerAction("legendUnSelect", "legendunselected", Ot(Ro, "unSelect"));
  }
  function JL(r) {
    r.registerComponentModel(dv), r.registerComponentView(m1), r.registerProcessor(r.PRIORITY.PROCESSOR.SERIES_FILTER, jL), r.registerSubTypeDefaulter("legend", function() {
      return "plain";
    }), QL(r);
  }
  var t2 = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e;
      }
      return t.prototype.setScrollDataIndex = function(e) {
        this.option.scrollDataIndex = e;
      }, t.prototype.init = function(e, n, i) {
        var a = gl(e);
        r.prototype.init.call(this, e, n, i), S1(this, e, a);
      }, t.prototype.mergeOption = function(e, n) {
        r.prototype.mergeOption.call(this, e, n), S1(this, this.option, e);
      }, t.type = "legend.scroll", t.defaultOption = Kg(dv.defaultOption, {
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
    }(dv)
  );
  function S1(r, t, e) {
    var n = r.getOrient(), i = [1, 1];
    i[n.index] = 0, Qi(t, e, {
      type: "box",
      ignoreSize: !!i
    });
  }
  var w1 = Zt, yv = ["width", "height"], _v = ["x", "y"], e2 = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e.newlineDisabled = !0, e._currentIndex = 0, e;
      }
      return t.prototype.init = function() {
        r.prototype.init.call(this), this.group.add(this._containerGroup = new w1()), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new w1());
      }, t.prototype.resetInner = function() {
        r.prototype.resetInner.call(this), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null;
      }, t.prototype.renderInner = function(e, n, i, a, o, s, l) {
        var u = this;
        r.prototype.renderInner.call(this, e, n, i, a, o, s, l);
        var f = this._controllerGroup, h = n.get("pageIconSize", !0), v = X(h) ? h : [h, h];
        d("pagePrev", 0);
        var c = n.getModel("pageTextStyle");
        f.add(new $t({
          name: "pageText",
          style: {
            // Placeholder to calculate a proper layout.
            text: "xx/xx",
            fill: c.getTextColor(),
            font: c.getFont(),
            verticalAlign: "middle",
            align: "center"
          },
          silent: !0
        })), d("pageNext", 1);
        function d(g, p) {
          var m = g + "DataIndex", _ = nl(n.get("pageIcons", !0)[n.getOrient().name][p], {
            // Buttons will be created in each render, so we do not need
            // to worry about avoiding using legendModel kept in scope.
            onclick: Pt(u._pageGo, u, m, n, a)
          }, {
            x: -v[0] / 2,
            y: -v[1] / 2,
            width: v[0],
            height: v[1]
          });
          _.name = g, f.add(_);
        }
      }, t.prototype.layoutInner = function(e, n, i, a, o, s) {
        var l = this.getSelectorGroup(), u = e.getOrient().index, f = yv[u], h = _v[u], v = yv[1 - u], c = _v[1 - u];
        o && oo(
          // Buttons in selectorGroup always layout horizontally
          "horizontal",
          l,
          e.get("selectorItemGap", !0)
        );
        var d = e.get("selectorButtonGap", !0), g = l.getBoundingRect(), p = [-g.x, -g.y], m = vt(i);
        o && (m[f] = i[f] - g[f] - d);
        var _ = this._layoutContentAndController(e, a, m, u, f, v, c, h);
        if (o) {
          if (s === "end")
            p[u] += _[f] + d;
          else {
            var S = g[f] + d;
            p[u] -= S, _[h] -= S;
          }
          _[f] += g[f] + d, p[1 - u] += _[c] + _[v] / 2 - g[v] / 2, _[v] = Math.max(_[v], g[v]), _[c] = Math.min(_[c], g[c] + p[1 - u]), l.x = p[0], l.y = p[1], l.markRedraw();
        }
        return _;
      }, t.prototype._layoutContentAndController = function(e, n, i, a, o, s, l, u) {
        var f = this.getContentGroup(), h = this._containerGroup, v = this._controllerGroup;
        oo(e.get("orient"), f, e.get("itemGap"), a ? i.width : null, a ? null : i.height), oo(
          // Buttons in controller are layout always horizontally.
          "horizontal",
          v,
          e.get("pageButtonItemGap", !0)
        );
        var c = f.getBoundingRect(), d = v.getBoundingRect(), g = this._showController = c[o] > i[o], p = [-c.x, -c.y];
        n || (p[a] = f[u]);
        var m = [0, 0], _ = [-d.x, -d.y], S = ut(e.get("pageButtonGap", !0), e.get("itemGap", !0));
        if (g) {
          var b = e.get("pageButtonPosition", !0);
          b === "end" ? _[a] += i[o] - d[o] : m[a] += d[o] + S;
        }
        _[1 - a] += c[s] / 2 - d[s] / 2, f.setPosition(p), h.setPosition(m), v.setPosition(_);
        var C = {
          x: 0,
          y: 0
        };
        if (C[o] = g ? i[o] : c[o], C[s] = Math.max(c[s], d[s]), C[l] = Math.min(0, d[l] + _[1 - a]), h.__rectSize = i[o], g) {
          var T = {
            x: 0,
            y: 0
          };
          T[o] = Math.max(i[o] - d[o] - S, 0), T[s] = C[s], h.setClipPath(new Vt({
            shape: T
          })), h.__rectSize = T[o];
        } else
          v.eachChild(function(M) {
            M.attr({
              invisible: !0,
              silent: !0
            });
          });
        var D = this._getPageInfo(e);
        return D.pageIndex != null && qt(
          f,
          {
            x: D.contentPosition[0],
            y: D.contentPosition[1]
          },
          // When switch from "show controller" to "not show controller", view should be
          // updated immediately without animation, otherwise causes weird effect.
          g ? e : null
        ), this._updatePageInfoView(e, D), C;
      }, t.prototype._pageGo = function(e, n, i) {
        var a = this._getPageInfo(n)[e];
        a != null && i.dispatchAction({
          type: "legendScroll",
          scrollDataIndex: a,
          legendId: n.id
        });
      }, t.prototype._updatePageInfoView = function(e, n) {
        var i = this._controllerGroup;
        L(["pagePrev", "pageNext"], function(f) {
          var h = f + "DataIndex", v = n[h] != null, c = i.childOfName(f);
          c && (c.setStyle("fill", v ? e.get("pageIconColor", !0) : e.get("pageIconInactiveColor", !0)), c.cursor = v ? "pointer" : "default");
        });
        var a = i.childOfName("pageText"), o = e.get("pageFormatter"), s = n.pageIndex, l = s != null ? s + 1 : 0, u = n.pageCount;
        a && o && a.setStyle("text", Z(o) ? o.replace("{current}", l == null ? "" : l + "").replace("{total}", u == null ? "" : u + "") : o({
          current: l,
          total: u
        }));
      }, t.prototype._getPageInfo = function(e) {
        var n = e.get("scrollDataIndex", !0), i = this.getContentGroup(), a = this._containerGroup.__rectSize, o = e.getOrient().index, s = yv[o], l = _v[o], u = this._findTargetItemIndex(n), f = i.children(), h = f[u], v = f.length, c = v ? 1 : 0, d = {
          contentPosition: [i.x, i.y],
          pageCount: c,
          pageIndex: c - 1,
          pagePrevDataIndex: null,
          pageNextDataIndex: null
        };
        if (!h)
          return d;
        var g = b(h);
        d.contentPosition[o] = -g.s;
        for (var p = u + 1, m = g, _ = g, S = null; p <= v; ++p)
          S = b(f[p]), // Half of the last item is out of the window.
          (!S && _.e > m.s + a || // If the current item does not intersect with the window, the new page
          // can be started at the current item or the last item.
          S && !C(S, m.s)) && (_.i > m.i ? m = _ : m = S, m && (d.pageNextDataIndex == null && (d.pageNextDataIndex = m.i), ++d.pageCount)), _ = S;
        for (var p = u - 1, m = g, _ = g, S = null; p >= -1; --p)
          S = b(f[p]), // If the the end item does not intersect with the window started
          // from the current item, a page can be settled.
          (!S || !C(_, S.s)) && // e.g., when page size is smaller than item size.
          m.i < _.i && (_ = m, d.pagePrevDataIndex == null && (d.pagePrevDataIndex = m.i), ++d.pageCount, ++d.pageIndex), m = S;
        return d;
        function b(T) {
          if (T) {
            var D = T.getBoundingRect(), M = D[l] + T[l];
            return {
              s: M,
              e: M + D[s],
              i: T.__legendDataIndex
            };
          }
        }
        function C(T, D) {
          return T.e >= D && T.s <= D + a;
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
    }(m1)
  );
  function r2(r) {
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
  function n2(r) {
    Pe(JL), r.registerComponentModel(t2), r.registerComponentView(e2), r2(r);
  }
  Pe(n2);
  var wi = kt(), b1 = vt, Sv = Pt, i2 = (
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
            s = this._group = new Zt(), this.createPointerEl(s, u, t, e), this.createLabelEl(s, u, t, e), n.getZr().add(s);
          else {
            var v = Ot(x1, e, h);
            this.updatePointerEl(s, u, v), this.updateLabelEl(s, u, v, e);
          }
          D1(s, e, !0), this._renderHandle(a);
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
            var l = fv(t).seriesDataCount, u = i.getExtent();
            return Math.abs(u[0] - u[1]) / l > s;
          }
          return !1;
        }
        return n === !0;
      }, r.prototype.makeElOption = function(t, e, n, i, a) {
      }, r.prototype.createPointerEl = function(t, e, n, i) {
        var a = e.pointer;
        if (a) {
          var o = wi(t).pointerEl = new ZT[a.type](b1(e.pointer));
          t.add(o);
        }
      }, r.prototype.createLabelEl = function(t, e, n, i) {
        if (e.label) {
          var a = wi(t).labelEl = new $t(b1(e.label));
          t.add(a), C1(a, i);
        }
      }, r.prototype.updatePointerEl = function(t, e, n) {
        var i = wi(t).pointerEl;
        i && e.pointer && (i.setStyle(e.pointer.style), n(i, {
          shape: e.pointer.shape
        }));
      }, r.prototype.updateLabelEl = function(t, e, n, i) {
        var a = wi(t).labelEl;
        a && (a.setStyle(e.label.style), n(a, {
          // Consider text length change in vertical axis, animation should
          // be used on shape, otherwise the effect will be weird.
          // TODOTODO
          // shape: elOption.label.shape,
          x: e.label.x,
          y: e.label.y
        }), C1(a, i));
      }, r.prototype._renderHandle = function(t) {
        if (!(this._dragging || !this.updateHandleTransform)) {
          var e = this._axisPointerModel, n = this._api.getZr(), i = this._handle, a = e.getModel("handle"), o = e.get("status");
          if (!a.get("show") || !o || o === "hide") {
            i && n.remove(i), this._handle = null;
            return;
          }
          var s;
          this._handle || (s = !0, i = this._handle = nl(a.get("icon"), {
            cursor: "move",
            draggable: !0,
            onmousemove: function(u) {
              pd(u.event);
            },
            onmousedown: Sv(this._onHandleDragMove, this, 0, 0),
            drift: Sv(this._onHandleDragMove, this),
            ondragend: Sv(this._onHandleDragEnd, this)
          }), n.add(i)), D1(i, e, !1), i.setStyle(a.getItemStyle(null, ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"]));
          var l = a.get("size");
          X(l) || (l = [l, l]), i.scaleX = l[0] / 2, i.scaleY = l[1] / 2, vy(this, "_doDispatchAxisPointer", a.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, s);
        }
      }, r.prototype._moveHandleToValue = function(t, e) {
        x1(this._axisPointerModel, !e && this._moveAnimation, this._handle, wv(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)));
      }, r.prototype._onHandleDragMove = function(t, e) {
        var n = this._handle;
        if (n) {
          this._dragging = !0;
          var i = this.updateHandleTransform(wv(n), [t, e], this._axisModel, this._axisPointerModel);
          this._payloadInfo = i, n.stopAnimation(), n.attr(wv(i)), wi(n).lastProp = null, this._doDispatchAxisPointer();
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
        e && n && (this._lastGraphicKey = null, n && e.remove(n), i && e.remove(i), this._group = null, this._handle = null, this._payloadInfo = null), tc(this, "_doDispatchAxisPointer");
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
  function x1(r, t, e, n) {
    T1(wi(e).lastProp, n) || (wi(e).lastProp = n, t ? qt(e, n, r) : (e.stopAnimation(), e.attr(n)));
  }
  function T1(r, t) {
    if (j(r) && j(t)) {
      var e = !0;
      return L(t, function(n, i) {
        e = e && T1(r[i], n);
      }), !!e;
    } else
      return r === t;
  }
  function C1(r, t) {
    r[t.get(["label", "show"]) ? "show" : "hide"]();
  }
  function wv(r) {
    return {
      x: r.x || 0,
      y: r.y || 0,
      rotation: r.rotation || 0
    };
  }
  function D1(r, t, e) {
    var n = t.get("z"), i = t.get("zlevel");
    r && r.traverse(function(a) {
      a.type !== "group" && (n != null && (a.z = n), i != null && (a.zlevel = i), a.silent = e);
    });
  }
  function a2(r) {
    var t = r.get("type"), e = r.getModel(t + "Style"), n;
    return t === "line" ? (n = e.getLineStyle(), n.fill = null) : t === "shadow" && (n = e.getAreaStyle(), n.stroke = null), n;
  }
  function o2(r, t, e, n, i) {
    var a = e.get("value"), o = M1(a, t.axis, t.ecModel, e.get("seriesDataIndices"), {
      precision: e.get(["label", "precision"]),
      formatter: e.get(["label", "formatter"])
    }), s = e.getModel("label"), l = ao(s.get("padding") || 0), u = s.getFont(), f = wf(o, u), h = i.position, v = f.width + l[1] + l[3], c = f.height + l[0] + l[2], d = i.align;
    d === "right" && (h[0] -= v), d === "center" && (h[0] -= v / 2);
    var g = i.verticalAlign;
    g === "bottom" && (h[1] -= c), g === "middle" && (h[1] -= c / 2), s2(h, v, c, n);
    var p = s.get("backgroundColor");
    (!p || p === "auto") && (p = t.get(["axisLine", "lineStyle", "color"])), r.label = {
      // shape: {x: 0, y: 0, width: width, height: height, r: labelModel.get('borderRadius')},
      x: h[0],
      y: h[1],
      style: Yr(s, {
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
  function s2(r, t, e, n) {
    var i = n.getWidth(), a = n.getHeight();
    r[0] = Math.min(r[0] + t, i) - t, r[1] = Math.min(r[1] + e, a) - e, r[0] = Math.max(r[0], 0), r[1] = Math.max(r[1], 0);
  }
  function M1(r, t, e, n, i) {
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
        value: Vc(t, {
          value: r
        }),
        axisDimension: t.dim,
        axisIndex: t.index,
        seriesData: []
      };
      L(n, function(l) {
        var u = e.getSeriesByIndex(l.seriesIndex), f = l.dataIndexInside, h = u && u.getDataParams(f);
        h && s.seriesData.push(h);
      }), Z(o) ? a = o.replace("{value}", a) : tt(o) && (a = o(s));
    }
    return a;
  }
  function A1(r, t, e) {
    var n = Bn();
    return Jo(n, n, e.rotation), Qo(n, n, e.position), dh([r.dataToCoord(t), (e.labelOffset || 0) + (e.labelDirection || 1) * (e.labelMargin || 0)], n);
  }
  function l2(r, t, e, n, i, a) {
    var o = xn.innerTextLayout(e.rotation, 0, e.labelDirection);
    e.labelMargin = i.get(["label", "margin"]), o2(t, n, i, a, {
      position: A1(n.axis, r, e),
      align: o.textAlign,
      verticalAlign: o.textVerticalAlign
    });
  }
  function u2(r, t, e) {
    return e = e || 0, {
      x1: r[e],
      y1: r[1 - e],
      x2: t[e],
      y2: t[1 - e]
    };
  }
  function f2(r, t, e) {
    return e = e || 0, {
      x: r[e],
      y: r[1 - e],
      width: t[e],
      height: t[1 - e]
    };
  }
  var h2 = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        return r !== null && r.apply(this, arguments) || this;
      }
      return t.prototype.makeElOption = function(e, n, i, a, o) {
        var s = i.axis, l = s.grid, u = a.get("type"), f = P1(l, s).getOtherAxis(s).getGlobalExtent(), h = s.toGlobalCoord(s.dataToCoord(n, !0));
        if (u && u !== "none") {
          var v = a2(a), c = c2[u](s, h, f);
          c.style = v, e.graphicKey = c.type, e.pointer = c;
        }
        var d = ov(l.model, i);
        l2(
          // @ts-ignore
          n,
          e,
          d,
          i,
          a,
          o
        );
      }, t.prototype.getHandleTransform = function(e, n, i) {
        var a = ov(n.axis.grid.model, n, {
          labelInside: !1
        });
        a.labelMargin = i.get(["handle", "margin"]);
        var o = A1(n.axis, e, a);
        return {
          x: o[0],
          y: o[1],
          rotation: a.rotation + (a.labelDirection < 0 ? Math.PI : 0)
        };
      }, t.prototype.updateHandleTransform = function(e, n, i, a) {
        var o = i.axis, s = o.grid, l = o.getGlobalExtent(!0), u = P1(s, o).getOtherAxis(o).getGlobalExtent(), f = o.dim === "x" ? 0 : 1, h = [e.x, e.y];
        h[f] += n[f], h[f] = Math.min(l[1], h[f]), h[f] = Math.max(l[0], h[f]);
        var v = (u[1] + u[0]) / 2, c = [v, v];
        c[f] = h[f];
        var d = [{
          verticalAlign: "middle"
        }, {
          align: "center"
        }];
        return {
          x: h[0],
          y: h[1],
          rotation: e.rotation,
          cursorPoint: c,
          tooltipOption: d[f]
        };
      }, t;
    }(i2)
  );
  function P1(r, t) {
    var e = {};
    return e[t.dim + "AxisIndex"] = t.index, r.getCartesian(e);
  }
  var c2 = {
    line: function(r, t, e) {
      var n = u2([t, e[0]], [t, e[1]], I1(r));
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
        shape: f2([t - n / 2, e[0]], [n, i], I1(r))
      };
    }
  };
  function I1(r) {
    return r.dim === "x" ? 0 : 1;
  }
  var v2 = (
    /** @class */
    function(r) {
      x(t, r);
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
    }(pt)
  ), Zr = kt(), d2 = L;
  function L1(r, t, e) {
    if (!O.node) {
      var n = t.getZr();
      Zr(n).records || (Zr(n).records = {}), p2(n, t);
      var i = Zr(n).records[r] || (Zr(n).records[r] = {});
      i.handler = e;
    }
  }
  function p2(r, t) {
    if (Zr(r).initialized)
      return;
    Zr(r).initialized = !0, e("click", Ot(E1, "click")), e("mousemove", Ot(E1, "mousemove")), e("globalout", m2);
    function e(n, i) {
      r.on(n, function(a) {
        var o = y2(t);
        d2(Zr(r).records, function(s) {
          s && i(s, a, o.dispatchAction);
        }), g2(o.pendings, t);
      });
    }
  }
  function g2(r, t) {
    var e = r.showTip.length, n = r.hideTip.length, i;
    e ? i = r.showTip[e - 1] : n && (i = r.hideTip[n - 1]), i && (i.dispatchAction = null, t.dispatchAction(i));
  }
  function m2(r, t, e) {
    r.handler("leave", null, e);
  }
  function E1(r, t, e, n) {
    t.handler(r, e, n);
  }
  function y2(r) {
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
  function bv(r, t) {
    if (!O.node) {
      var e = t.getZr(), n = (Zr(e).records || {})[r];
      n && (Zr(e).records[r] = null);
    }
  }
  var _2 = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e;
      }
      return t.prototype.render = function(e, n, i) {
        var a = n.getComponent("tooltip"), o = e.get("triggerOn") || a && a.get("triggerOn") || "mousemove|click";
        L1("axisPointer", i, function(s, l, u) {
          o !== "none" && (s === "leave" || o.indexOf(s) >= 0) && u({
            type: "updateAxisPointer",
            currTrigger: s,
            x: l && l.offsetX,
            y: l && l.offsetY
          });
        });
      }, t.prototype.remove = function(e, n) {
        bv("axisPointer", n);
      }, t.prototype.dispose = function(e, n) {
        bv("axisPointer", n);
      }, t.type = "axisPointer", t;
    }(de)
  );
  function R1(r, t) {
    var e = [], n = r.seriesIndex, i;
    if (n == null || !(i = t.getSeriesByIndex(n)))
      return {
        point: []
      };
    var a = i.getData(), o = Xn(a, r);
    if (o == null || o < 0 || X(o))
      return {
        point: []
      };
    var s = a.getItemGraphicEl(o), l = i.coordinateSystem;
    if (i.getTooltipPosition)
      e = i.getTooltipPosition(o) || [];
    else if (l && l.dataToPoint)
      if (r.isStacked) {
        var u = l.getBaseAxis(), f = l.getOtherAxis(u), h = f.dim, v = u.dim, c = h === "x" || h === "radius" ? 1 : 0, d = a.mapDimension(v), g = [];
        g[c] = a.get(d, o), g[1 - c] = a.get(a.getCalculationInfo("stackResultDimension"), o), e = l.dataToPoint(g) || [];
      } else
        e = l.dataToPoint(a.getValues(K(l.dimensions, function(m) {
          return a.mapDimension(m);
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
  var O1 = kt();
  function S2(r, t, e) {
    var n = r.currTrigger, i = [r.x, r.y], a = r, o = r.dispatchAction || Pt(e.dispatchAction, e), s = t.getComponent("axisPointer").coordSysAxesInfo;
    if (s) {
      uu(i) && (i = R1({
        seriesIndex: a.seriesIndex,
        // Do not use dataIndexInside from other ec instance.
        // FIXME: auto detect it?
        dataIndex: a.dataIndex
      }, t).point);
      var l = uu(i), u = a.axesInfo, f = s.axesInfo, h = n === "leave" || uu(i), v = {}, c = {}, d = {
        list: [],
        map: {}
      }, g = {
        showPointer: Ot(b2, c),
        showTooltip: Ot(x2, d)
      };
      L(s.coordSysMap, function(m, _) {
        var S = l || m.containPoint(i);
        L(s.coordSysAxesInfo[_], function(b, C) {
          var T = b.axis, D = M2(u, b);
          if (!h && S && (!u || D)) {
            var M = D && D.value;
            M == null && !l && (M = T.pointToData(i)), M != null && k1(b, M, g, !1, v);
          }
        });
      });
      var p = {};
      return L(f, function(m, _) {
        var S = m.linkGroup;
        S && !c[_] && L(S.axesInfo, function(b, C) {
          var T = c[C];
          if (b !== m && T) {
            var D = T.value;
            S.mapper && (D = m.axis.scale.parse(S.mapper(D, N1(b), N1(m)))), p[m.key] = D;
          }
        });
      }), L(p, function(m, _) {
        k1(f[_], m, g, !0, v);
      }), T2(c, f, v), C2(d, i, r, o), D2(f, o, e), v;
    }
  }
  function k1(r, t, e, n, i) {
    var a = r.axis;
    if (!(a.scale.isBlank() || !a.containData(t))) {
      if (!r.involveSeries) {
        e.showPointer(r, t);
        return;
      }
      var o = w2(t, r), s = o.payloadBatch, l = o.snapToValue;
      s[0] && i.seriesIndex == null && W(i, s[0]), !n && r.snap && a.containData(l) && l != null && (t = l), e.showPointer(r, t, s), e.showTooltip(r, o, l);
    }
  }
  function w2(r, t) {
    var e = t.axis, n = e.dim, i = r, a = [], o = Number.MAX_VALUE, s = -1;
    return L(t.seriesModels, function(l, u) {
      var f = l.getData().mapDimensionsAll(n), h, v;
      if (l.getAxisTooltipData) {
        var c = l.getAxisTooltipData(f, r, e);
        v = c.dataIndices, h = c.nestestValue;
      } else {
        if (v = l.getData().indicesOfNearest(
          f[0],
          r,
          // Add a threshold to avoid find the wrong dataIndex
          // when data length is not same.
          // false,
          e.type === "category" ? 0.5 : null
        ), !v.length)
          return;
        h = l.getData().get(f[0], v[0]);
      }
      if (!(h == null || !isFinite(h))) {
        var d = r - h, g = Math.abs(d);
        g <= o && ((g < o || d >= 0 && s < 0) && (o = g, s = d, i = h, a.length = 0), L(v, function(p) {
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
  function b2(r, t, e, n) {
    r[t.key] = {
      value: e,
      payloadBatch: n
    };
  }
  function x2(r, t, e, n) {
    var i = e.payloadBatch, a = t.axis, o = a.model, s = t.axisPointerModel;
    if (!(!t.triggerTooltip || !i.length)) {
      var l = t.coordSys.model, u = Eo(l), f = r.map[u];
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
  function T2(r, t, e) {
    var n = e.axesInfo = [];
    L(t, function(i, a) {
      var o = i.axisPointerModel.option, s = r[a];
      s ? (!i.useHandle && (o.status = "show"), o.value = s.value, o.seriesDataIndices = (s.payloadBatch || []).slice()) : !i.useHandle && (o.status = "hide"), o.status === "show" && n.push({
        axisDim: i.axis.dim,
        axisIndex: i.axis.model.componentIndex,
        value: o.value
      });
    });
  }
  function C2(r, t, e, n) {
    if (uu(t) || !r.list.length) {
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
  function D2(r, t, e) {
    var n = e.getZr(), i = "axisPointerLastHighlights", a = O1(n)[i] || {}, o = O1(n)[i] = {};
    L(r, function(u, f) {
      var h = u.axisPointerModel.option;
      h.status === "show" && L(h.seriesDataIndices, function(v) {
        var c = v.seriesIndex + " | " + v.dataIndex;
        o[c] = v;
      });
    });
    var s = [], l = [];
    L(a, function(u, f) {
      !o[f] && l.push(u);
    }), L(o, function(u, f) {
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
  function M2(r, t) {
    for (var e = 0; e < (r || []).length; e++) {
      var n = r[e];
      if (t.axis.dim === n.axisDim && t.axis.model.componentIndex === n.axisIndex)
        return n;
    }
  }
  function N1(r) {
    var t = r.axis.model, e = {}, n = e.axisDim = r.axis.dim;
    return e.axisIndex = e[n + "AxisIndex"] = t.componentIndex, e.axisName = e[n + "AxisName"] = t.name, e.axisId = e[n + "AxisId"] = t.id, e;
  }
  function uu(r) {
    return !r || r[0] == null || isNaN(r[0]) || r[1] == null || isNaN(r[1]);
  }
  function A2(r) {
    v1.registerAxisPointerClass("CartesianAxisPointer", h2), r.registerComponentModel(v2), r.registerComponentView(_2), r.registerPreprocessor(function(t) {
      if (t) {
        (!t.axisPointer || t.axisPointer.length === 0) && (t.axisPointer = {});
        var e = t.axisPointer.link;
        e && !X(e) && (t.axisPointer.link = [e]);
      }
    }), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, function(t, e) {
      t.getComponent("axisPointer").coordSysAxesInfo = PL(t, e);
    }), r.registerAction({
      type: "updateAxisPointer",
      event: "updateAxisPointer",
      update: ":updateAxisPointer"
    }, S2);
  }
  var P2 = (
    /** @class */
    function(r) {
      x(t, r);
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
    }(pt)
  );
  function B1(r) {
    var t = r.get("confine");
    return t != null ? !!t : r.get("renderMode") === "richText";
  }
  function F1(r) {
    if (O.domSupported) {
      for (var t = document.documentElement.style, e = 0, n = r.length; e < n; e++)
        if (r[e] in t)
          return r[e];
    }
  }
  var z1 = F1(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), I2 = F1(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
  function V1(r, t) {
    if (!r)
      return t;
    t = Ah(t, !0);
    var e = r.indexOf(t);
    return r = e === -1 ? t : "-" + r.slice(0, e) + "-" + t, r.toLowerCase();
  }
  function L2(r, t) {
    var e = r.currentStyle || document.defaultView && document.defaultView.getComputedStyle(r);
    return e ? t ? e[t] : e : null;
  }
  var E2 = V1(I2, "transition"), xv = V1(z1, "transform"), R2 = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + (O.transform3dSupported ? "will-change:transform;" : "");
  function O2(r) {
    return r = r === "left" ? "right" : r === "right" ? "left" : r === "top" ? "bottom" : "top", r;
  }
  function k2(r, t, e) {
    if (!Z(e) || e === "inside")
      return "";
    var n = r.get("backgroundColor"), i = r.get("borderWidth");
    t = oi(t);
    var a = O2(e), o = Math.max(Math.round(i) * 1.5, 6), s = "", l = xv + ":", u;
    wt(["left", "right"], a) > -1 ? (s += "top:50%", l += "translateY(-50%) rotate(" + (u = a === "left" ? -225 : -45) + "deg)") : (s += "left:50%", l += "translateX(-50%) rotate(" + (u = a === "top" ? 225 : 45) + "deg)");
    var f = u * Math.PI / 180, h = o + i, v = h * Math.abs(Math.cos(f)) + h * Math.abs(Math.sin(f)), c = Math.round(((v - Math.SQRT2 * i) / 2 + Math.SQRT2 * i - (v - h) / 2) * 100) / 100;
    s += ";" + a + ":-" + c + "px";
    var d = t + " solid " + i + "px;", g = ["position:absolute;width:" + o + "px;height:" + o + "px;z-index:-1;", s + ";" + l + ";", "border-bottom:" + d, "border-right:" + d, "background-color:" + n + ";"];
    return '<div style="' + g.join("") + '"></div>';
  }
  function N2(r, t) {
    var e = "cubic-bezier(0.23,1,0.32,1)", n = " " + r / 2 + "s " + e, i = "opacity" + n + ",visibility" + n;
    return t || (n = " " + r + "s " + e, i += O.transformSupported ? "," + xv + n : ",left" + n + ",top" + n), E2 + ":" + i;
  }
  function G1(r, t, e) {
    var n = r.toFixed(0) + "px", i = t.toFixed(0) + "px";
    if (!O.transformSupported)
      return e ? "top:" + i + ";left:" + n + ";" : [["top", i], ["left", n]];
    var a = O.transform3dSupported, o = "translate" + (a ? "3d" : "") + "(" + n + "," + i + (a ? ",0" : "") + ")";
    return e ? "top:0;left:0;" + xv + ":" + o + ";" : [["top", 0], ["left", 0], [z1, o]];
  }
  function B2(r) {
    var t = [], e = r.get("fontSize"), n = r.getTextColor();
    n && t.push("color:" + n), t.push("font:" + r.getFont()), e && t.push("line-height:" + Math.round(e * 3 / 2) + "px");
    var i = r.get("textShadowColor"), a = r.get("textShadowBlur") || 0, o = r.get("textShadowOffsetX") || 0, s = r.get("textShadowOffsetY") || 0;
    return i && a && t.push("text-shadow:" + o + "px " + s + "px " + a + "px " + i), L(["decoration", "align"], function(l) {
      var u = r.get(l);
      u && t.push("text-" + l + ":" + u);
    }), t.join(";");
  }
  function F2(r, t, e) {
    var n = [], i = r.get("transitionDuration"), a = r.get("backgroundColor"), o = r.get("shadowBlur"), s = r.get("shadowColor"), l = r.get("shadowOffsetX"), u = r.get("shadowOffsetY"), f = r.getModel("textStyle"), h = ay(r, "html"), v = l + "px " + u + "px " + o + "px " + s;
    return n.push("box-shadow:" + v), t && i && n.push(N2(i, e)), a && n.push("background-color:" + a), L(["width", "color", "radius"], function(c) {
      var d = "border-" + c, g = Ah(d), p = r.get(g);
      p != null && n.push(d + ":" + p + (c === "color" ? "" : "px"));
    }), n.push(B2(f)), h != null && n.push("padding:" + ao(h).join("px ") + "px"), n.join(";") + ";";
  }
  function H1(r, t, e, n, i) {
    var a = t && t.painter;
    if (e) {
      var o = a && a.getViewportRoot();
      o && fw(r, o, document.body, n, i);
    } else {
      r[0] = n, r[1] = i;
      var s = a && a.getViewportRootOffset();
      s && (r[0] += s.offsetLeft, r[1] += s.offsetTop);
    }
    r[2] = r[0] / t.getWidth(), r[3] = r[1] / t.getHeight();
  }
  var z2 = (
    /** @class */
    function() {
      function r(t, e, n) {
        if (this._show = !1, this._styleCoord = [0, 0, 0, 0], this._enterable = !0, this._alwaysShowContent = !1, this._firstShow = !0, this._longHide = !0, O.wxa)
          return null;
        var i = document.createElement("div");
        i.domBelongToZr = !0, this.el = i;
        var a = this._zr = e.getZr(), o = this._appendToBody = n && n.appendToBody;
        H1(this._styleCoord, a, o, e.getWidth() / 2, e.getHeight() / 2), o ? document.body.appendChild(i) : t.appendChild(i), this._container = t;
        var s = this;
        i.onmouseenter = function() {
          s._enterable && (clearTimeout(s._hideTimeout), s._show = !0), s._inContent = !0;
        }, i.onmousemove = function(l) {
          if (l = l || window.event, !s._enterable) {
            var u = a.handler, f = a.painter.getViewportRoot();
            We(f, l, !0), u.dispatch("mousemove", l);
          }
        }, i.onmouseleave = function() {
          s._inContent = !1, s._enterable && s._show && s.hideLater(s._hideDelay);
        };
      }
      return r.prototype.update = function(t) {
        var e = this._container, n = L2(e, "position"), i = e.style;
        i.position !== "absolute" && n !== "absolute" && (i.position = "relative");
        var a = t.get("alwaysShowContent");
        a && this._moveIfResized(), this._alwaysShowContent = a, this.el.className = t.get("className") || "";
      }, r.prototype.show = function(t, e) {
        clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
        var n = this.el, i = n.style, a = this._styleCoord;
        n.innerHTML ? i.cssText = R2 + F2(t, !this._firstShow, this._longHide) + G1(a[0], a[1], !0) + ("border-color:" + oi(e) + ";") + (t.get("extraCssText") || "") + (";pointer-events:" + (this._enterable ? "auto" : "none")) : i.display = "none", this._show = !0, this._firstShow = !1, this._longHide = !1;
      }, r.prototype.setContent = function(t, e, n, i, a) {
        var o = this.el;
        if (t == null) {
          o.innerHTML = "";
          return;
        }
        var s = "";
        if (Z(a) && n.get("trigger") === "item" && !B1(n) && (s = k2(n, i, a)), Z(t))
          o.innerHTML = t + s;
        else if (t) {
          o.innerHTML = "", X(t) || (t = [t]);
          for (var l = 0; l < t.length; l++)
            Ai(t[l]) && t[l].parentNode !== o && o.appendChild(t[l]);
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
        if (H1(n, this._zr, this._appendToBody, t, e), n[0] != null && n[1] != null) {
          var i = this.el.style, a = G1(n[0], n[1]);
          L(a, function(o) {
            i[o[0]] = o[1];
          });
        }
      }, r.prototype._moveIfResized = function() {
        var t = this._styleCoord[2], e = this._styleCoord[3];
        this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
      }, r.prototype.hide = function() {
        var t = this, e = this.el.style;
        e.visibility = "hidden", e.opacity = "0", O.transform3dSupported && (e.willChange = ""), this._show = !1, this._longHideTimeout = setTimeout(function() {
          return t._longHide = !0;
        }, 500);
      }, r.prototype.hideLater = function(t) {
        this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(Pt(this.hide, this), t)) : this.hide());
      }, r.prototype.isShow = function() {
        return this._show;
      }, r.prototype.dispose = function() {
        this.el.parentNode.removeChild(this.el);
      }, r;
    }()
  ), V2 = (
    /** @class */
    function() {
      function r(t) {
        this._show = !1, this._styleCoord = [0, 0, 0, 0], this._alwaysShowContent = !1, this._enterable = !0, this._zr = t.getZr(), U1(this._styleCoord, this._zr, t.getWidth() / 2, t.getHeight() / 2);
      }
      return r.prototype.update = function(t) {
        var e = t.get("alwaysShowContent");
        e && this._moveIfResized(), this._alwaysShowContent = e;
      }, r.prototype.show = function() {
        this._hideTimeout && clearTimeout(this._hideTimeout), this.el.show(), this._show = !0;
      }, r.prototype.setContent = function(t, e, n, i, a) {
        var o = this;
        j(t) && be("Passing DOM nodes as content is not supported in richText tooltip!"), this.el && this._zr.remove(this.el);
        var s = n.getModel("textStyle");
        this.el = new $t({
          style: {
            rich: e.richTextStyles,
            text: t,
            lineHeight: 22,
            borderWidth: 1,
            borderColor: i,
            textShadowColor: s.get("textShadowColor"),
            fill: n.get(["textStyle", "color"]),
            padding: ay(n, "richText"),
            verticalAlign: "top",
            align: "left"
          },
          z: n.get("z")
        }), L(["backgroundColor", "borderRadius", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"], function(u) {
          o.el.style[u] = n.get(u);
        }), L(["textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], function(u) {
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
        var t = this.el, e = this.el.getBoundingRect(), n = W1(t.style);
        return [e.width + n.left + n.right, e.height + n.top + n.bottom];
      }, r.prototype.moveTo = function(t, e) {
        var n = this.el;
        if (n) {
          var i = this._styleCoord;
          U1(i, this._zr, t, e), t = i[0], e = i[1];
          var a = n.style, o = Tn(a.borderWidth || 0), s = W1(a);
          n.x = t + o + s.left, n.y = e + o + s.top, n.markRedraw();
        }
      }, r.prototype._moveIfResized = function() {
        var t = this._styleCoord[2], e = this._styleCoord[3];
        this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
      }, r.prototype.hide = function() {
        this.el && this.el.hide(), this._show = !1;
      }, r.prototype.hideLater = function(t) {
        this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(Pt(this.hide, this), t)) : this.hide());
      }, r.prototype.isShow = function() {
        return this._show;
      }, r.prototype.dispose = function() {
        this._zr.remove(this.el);
      }, r;
    }()
  );
  function Tn(r) {
    return Math.max(0, r);
  }
  function W1(r) {
    var t = Tn(r.shadowBlur || 0), e = Tn(r.shadowOffsetX || 0), n = Tn(r.shadowOffsetY || 0);
    return {
      left: Tn(t - e),
      right: Tn(t + e),
      top: Tn(t - n),
      bottom: Tn(t + n)
    };
  }
  function U1(r, t, e, n) {
    r[0] = e, r[1] = n, r[2] = r[0] / t.getWidth(), r[3] = r[1] / t.getHeight();
  }
  var G2 = new Vt({
    shape: {
      x: -1,
      y: -1,
      width: 2,
      height: 2
    }
  }), H2 = (
    /** @class */
    function(r) {
      x(t, r);
      function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e;
      }
      return t.prototype.init = function(e, n) {
        if (!(O.node || !n.getDom())) {
          var i = e.getComponent("tooltip"), a = this._renderMode = Zb(i.get("renderMode"));
          this._tooltipContent = a === "richText" ? new V2(n) : new z2(n.getDom(), n, {
            appendToBody: i.get("appendToBody", !0)
          });
        }
      }, t.prototype.render = function(e, n, i) {
        if (!(O.node || !i.getDom())) {
          this.group.removeAll(), this._tooltipModel = e, this._ecModel = n, this._api = i;
          var a = this._tooltipContent;
          a.update(e), a.setEnterable(e.get("enterable")), this._initGlobalListener(), this._keepShow(), this._renderMode !== "richText" && e.get("transitionDuration") ? vy(this, "_updatePosition", 50, "fixRate") : tc(this, "_updatePosition");
        }
      }, t.prototype._initGlobalListener = function() {
        var e = this._tooltipModel, n = e.get("triggerOn");
        L1("itemTooltip", this._api, Pt(function(i, a, o) {
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
        if (!(a.from === this.uid || O.node || !i.getDom())) {
          var o = Y1(a, i);
          this._ticket = "";
          var s = a.dataByCoordSys, l = X2(a, n, i);
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
            var f = G2;
            f.x = a.x, f.y = a.y, f.update(), _t(f).tooltipConfig = {
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
            var h = R1(a, n), v = h.point[0], c = h.point[1];
            v != null && c != null && this._tryShow({
              offsetX: v,
              offsetY: c,
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
        this._tooltipModel && o.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = this._lastDataByCoordSys = null, a.from !== this.uid && this._hide(Y1(a, i));
      }, t.prototype._manuallyAxisShowTip = function(e, n, i, a) {
        var o = a.seriesIndex, s = a.dataIndex, l = n.getComponent("axisPointer").coordSysAxesInfo;
        if (!(o == null || s == null || l == null)) {
          var u = n.getSeriesByIndex(o);
          if (u) {
            var f = u.getData(), h = Oo([f.getItemModel(s), u, (u.coordinateSystem || {}).model], this._tooltipModel);
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
            _o(i, function(u) {
              if (_t(u).dataIndex != null)
                return s = u, !0;
              if (_t(u).tooltipConfig != null)
                return l = u, !0;
            }, !0), s ? this._showSeriesItemTooltip(e, s, n) : l ? this._showComponentItemTooltip(e, l, n) : this._hide(n);
          } else
            this._lastDataByCoordSys = null, this._hide(n);
        }
      }, t.prototype._showOrMove = function(e, n) {
        var i = e.get("showDelay");
        n = Pt(n, this), clearTimeout(this._showTimout), i > 0 ? this._showTimout = setTimeout(n, i) : n();
      }, t.prototype._showAxisTooltip = function(e, n) {
        var i = this._ecModel, a = this._tooltipModel, o = [n.offsetX, n.offsetY], s = Oo([n.tooltipOption], a), l = this._renderMode, u = [], f = go("section", {
          blocks: [],
          noHeader: !0
        }), h = [], v = new jh();
        L(e, function(_) {
          L(_.dataByAxis, function(S) {
            var b = i.getComponent(S.axisDim + "Axis", S.axisIndex), C = S.value;
            if (!(!b || C == null)) {
              var T = M1(C, b.axis, i, S.seriesDataIndices, S.valueLabelOpt), D = go("section", {
                header: T,
                noHeader: !ir(T),
                sortBlocks: !0,
                blocks: []
              });
              f.blocks.push(D), L(S.seriesDataIndices, function(M) {
                var P = i.getSeriesByIndex(M.seriesIndex), E = M.dataIndexInside, A = P.getDataParams(E);
                if (!(A.dataIndex < 0)) {
                  A.axisDim = S.axisDim, A.axisIndex = S.axisIndex, A.axisType = S.axisType, A.axisId = S.axisId, A.axisValue = Vc(b.axis, {
                    value: C
                  }), A.axisValueLabel = T, A.marker = v.makeTooltipMarker("item", oi(A.color), l);
                  var k = Wm(P.formatTooltip(E, !0, null)), N = k.frag;
                  if (N) {
                    var B = Oo([P], a).get("valueFormatter");
                    D.blocks.push(B ? W({
                      valueFormatter: B
                    }, N) : N);
                  }
                  k.text && h.push(k.text), u.push(A);
                }
              });
            }
          });
        }), f.blocks.reverse(), h.reverse();
        var c = n.position, d = s.get("order"), g = ny(f, v, l, d, i.get("useUTC"), s.get("textStyle"));
        g && h.unshift(g);
        var p = l === "richText" ? `

` : "<br/>", m = h.join(p);
        this._showOrMove(s, function() {
          this._updateContentNotChangedOnAxis(e, u) ? this._updatePosition(s, c, o[0], o[1], this._tooltipContent, u) : this._showTooltipContent(s, m, u, Math.random() + "", o[0], o[1], c, null, v);
        });
      }, t.prototype._showSeriesItemTooltip = function(e, n, i) {
        var a = this._ecModel, o = _t(n), s = o.seriesIndex, l = a.getSeriesByIndex(s), u = o.dataModel || l, f = o.dataIndex, h = o.dataType, v = u.getData(h), c = this._renderMode, d = e.positionDefault, g = Oo([v.getItemModel(f), u, l && (l.coordinateSystem || {}).model], this._tooltipModel, d ? {
          position: d
        } : null), p = g.get("trigger");
        if (!(p != null && p !== "item")) {
          var m = u.getDataParams(f, h), _ = new jh();
          m.marker = _.makeTooltipMarker("item", oi(m.color), c);
          var S = Wm(u.formatTooltip(f, !1, h)), b = g.get("order"), C = g.get("valueFormatter"), T = S.frag, D = T ? ny(C ? W({
            valueFormatter: C
          }, T) : T, _, c, b, a.get("useUTC"), g.get("textStyle")) : S.text, M = "item_" + u.name + "_" + f;
          this._showOrMove(g, function() {
            this._showTooltipContent(g, D, m, M, e.offsetX, e.offsetY, e.position, e.target, _);
          }), i({
            type: "showTip",
            dataIndexInside: f,
            dataIndex: v.getRawIndex(f),
            seriesIndex: s,
            from: this.uid
          });
        }
      }, t.prototype._showComponentItemTooltip = function(e, n, i) {
        var a = _t(n), o = a.tooltipConfig, s = o.option || {};
        if (Z(s)) {
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
        var h = e.positionDefault, v = Oo(u, this._tooltipModel, h ? {
          position: h
        } : null), c = v.get("content"), d = Math.random() + "", g = new jh();
        this._showOrMove(v, function() {
          var p = vt(v.get("formatterParams") || {});
          this._showTooltipContent(v, c, p, d, e.offsetX, e.offsetY, e.position, n, g);
        }), i({
          type: "showTip",
          from: this.uid
        });
      }, t.prototype._showTooltipContent = function(e, n, i, a, o, s, l, u, f) {
        if (this._ticket = "", !(!e.get("showContent") || !e.get("show"))) {
          var h = this._tooltipContent;
          h.setEnterable(e.get("enterable"));
          var v = e.get("formatter");
          l = l || e.get("position");
          var c = n, d = this._getNearestPoint([o, s], i, e.get("trigger"), e.get("borderColor")), g = d.color;
          if (v)
            if (Z(v)) {
              var p = e.ecModel.get("useUTC"), m = X(i) ? i[0] : i, _ = m && m.axisType && m.axisType.indexOf("time") >= 0;
              c = v, _ && (c = no(m.axisValue, c, p)), c = Lh(c, i, !0);
            } else if (tt(v)) {
              var S = Pt(function(b, C) {
                b === this._ticket && (h.setContent(C, f, e, g, l), this._updatePosition(e, l, o, s, h, i, u));
              }, this);
              this._ticket = a, c = v(i, a, S);
            } else
              c = v;
          h.setContent(c, f, e, g, l), h.show(e, g), this._updatePosition(e, l, o, s, h, i, u);
        }
      }, t.prototype._getNearestPoint = function(e, n, i, a) {
        if (i === "axis" || X(n))
          return {
            color: a || (this._renderMode === "html" ? "#fff" : "none")
          };
        if (!X(n))
          return {
            color: a || n.color || n.borderColor
          };
      }, t.prototype._updatePosition = function(e, n, i, a, o, s, l) {
        var u = this._api.getWidth(), f = this._api.getHeight();
        n = n || e.get("position");
        var h = o.getSize(), v = e.get("align"), c = e.get("verticalAlign"), d = l && l.getBoundingRect().clone();
        if (l && d.applyTransform(l.transform), tt(n) && (n = n([i, a], s, o.el, d, {
          viewSize: [u, f],
          contentSize: h.slice()
        })), X(n))
          i = Lt(n[0], u), a = Lt(n[1], f);
        else if (j(n)) {
          var g = n;
          g.width = h[0], g.height = h[1];
          var p = si(g, {
            width: u,
            height: f
          });
          i = p.x, a = p.y, v = null, c = null;
        } else if (Z(n) && l) {
          var m = Y2(n, d, h, e.get("borderWidth"));
          i = m[0], a = m[1];
        } else {
          var m = W2(i, a, o, u, f, v ? null : 20, c ? null : 20);
          i = m[0], a = m[1];
        }
        if (v && (i -= X1(v) ? h[0] / 2 : v === "right" ? h[0] : 0), c && (a -= X1(c) ? h[1] / 2 : c === "bottom" ? h[1] : 0), B1(e)) {
          var m = U2(i, a, o, u, f);
          i = m[0], a = m[1];
        }
        o.moveTo(i, a);
      }, t.prototype._updateContentNotChangedOnAxis = function(e, n) {
        var i = this._lastDataByCoordSys, a = this._cbParamsList, o = !!i && i.length === e.length;
        return o && L(i, function(s, l) {
          var u = s.dataByAxis || [], f = e[l] || {}, h = f.dataByAxis || [];
          o = o && u.length === h.length, o && L(u, function(v, c) {
            var d = h[c] || {}, g = v.seriesDataIndices || [], p = d.seriesDataIndices || [];
            o = o && v.value === d.value && v.axisType === d.axisType && v.axisId === d.axisId && g.length === p.length, o && L(g, function(m, _) {
              var S = p[_];
              o = o && m.seriesIndex === S.seriesIndex && m.dataIndex === S.dataIndex;
            }), a && L(v.seriesDataIndices, function(m) {
              var _ = m.seriesIndex, S = n[_], b = a[_];
              S && b && b.data !== S.data && (o = !1);
            });
          });
        }), this._lastDataByCoordSys = e, this._cbParamsList = n, !!o;
      }, t.prototype._hide = function(e) {
        this._lastDataByCoordSys = null, e({
          type: "hideTip",
          from: this.uid
        });
      }, t.prototype.dispose = function(e, n) {
        O.node || !n.getDom() || (tc(this, "_updatePosition"), this._tooltipContent.dispose(), bv("itemTooltip", n));
      }, t.type = "tooltip", t;
    }(de)
  );
  function Oo(r, t, e) {
    var n = t.ecModel, i;
    e ? (i = new Rt(e, n, n), i = new Rt(t.option, i, n)) : i = t;
    for (var a = r.length - 1; a >= 0; a--) {
      var o = r[a];
      o && (o instanceof Rt && (o = o.get("tooltip", !0)), Z(o) && (o = {
        formatter: o
      }), o && (i = new Rt(o, i, n)));
    }
    return i;
  }
  function Y1(r, t) {
    return r.dispatchAction || Pt(t.dispatchAction, t);
  }
  function W2(r, t, e, n, i, a, o) {
    var s = e.getSize(), l = s[0], u = s[1];
    return a != null && (r + l + a + 2 > n ? r -= l + a : r += a), o != null && (t + u + o > i ? t -= u + o : t += o), [r, t];
  }
  function U2(r, t, e, n, i) {
    var a = e.getSize(), o = a[0], s = a[1];
    return r = Math.min(r + o, n) - o, t = Math.min(t + s, i) - s, r = Math.max(r, 0), t = Math.max(t, 0), [r, t];
  }
  function Y2(r, t, e, n) {
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
  function X1(r) {
    return r === "center" || r === "middle";
  }
  function X2(r, t, e) {
    var n = Of(r).queryOptionMap, i = n.keys()[0];
    if (!(!i || i === "series")) {
      var a = Fa(t, i, n.get(i), {
        useDefault: !1,
        enableAll: !1,
        enableNone: !1
      }), o = a.models[0];
      if (o) {
        var s = e.getViewOfComponentModel(o), l;
        if (s.group.traverse(function(u) {
          var f = _t(u).tooltipConfig;
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
  function $2(r) {
    Pe(A2), r.registerComponentModel(P2), r.registerComponentView(H2), r.registerAction({
      type: "showTip",
      event: "showTip",
      update: "tooltip:manuallyShowTip"
    }, fe), r.registerAction({
      type: "hideTip",
      event: "hideTip",
      update: "tooltip:manuallyHideTip"
    }, fe);
  }
  Pe($2), y.version = WM, y.dependencies = UM, y.PRIORITY = jy, y.init = sA, y.connect = lA, y.disConnect = c0, y.disconnect = uA, y.dispose = fA, y.getInstanceByDom = wc, y.getInstanceById = hA, y.registerTheme = bc, y.registerPreprocessor = xc, y.registerProcessor = Tc, y.registerPostInit = v0, y.registerPostUpdate = d0, y.registerUpdateLifecycle = Gl, y.registerAction = pi, y.registerCoordinateSystem = p0, y.getCoordinateSystemDimensions = cA, y.registerLayout = g0, y.registerVisual = mn, y.registerLoading = Dc, y.setCanvasCreator = vA, y.registerMap = y0, y.getMap = dA, y.registerTransform = _0, y.dataTool = pA, y.registerLocale = bh, y.zrender = Tb, y.matrix = xw, y.vector = sw, y.zrUtil = jS, y.color = $w, y.helper = xP, y.number = IP, y.time = LP, y.graphic = EP, y.format = RP, y.util = OP, y.List = Ic, y.ComponentModel = pt, y.ComponentView = de, y.SeriesModel = De, y.ChartView = pe, y.extendComponentModel = UP, y.extendComponentView = YP, y.extendSeriesModel = XP, y.extendChartView = $P, y.throttle = Cl, y.use = Pe, y.setPlatformAPI = Ee, y.parseGeoJSON = J0, y.parseGeoJson = J0, y.env = O, y.Model = Rt, y.Axis = s_, y.innerDrawElementOnCanvas = ac;
});
class HR {
  constructor(w, x, R) {
    this.ctx = w, this.chart = null, this.isNew = x, x ? this.canvasNode = R : this._initStyle(w), this._initEvent();
  }
  getContext(w) {
    if (w === "2d")
      return this.ctx;
  }
  setChart(w) {
    this.chart = w;
  }
  addEventListener() {
  }
  attachEvent() {
  }
  detachEvent() {
  }
  _initCanvas(w, x) {
    w.util.getContext = function() {
      return x;
    }, w.util.$override("measureText", function(R, I) {
      return x.font = I || "12px sans-serif", x.measureText(R);
    });
  }
  _initStyle(w) {
    w.createRadialGradient = () => w.createCircularGradient(arguments);
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
    ].forEach((x) => {
      this.event[x.wxName] = (R) => {
        const I = R.touches[0];
        this.chart.getZr().handler.dispatch(x.ecName, {
          zrX: x.wxName === "tap" ? I.clientX : I.x,
          zrY: x.wxName === "tap" ? I.clientY : I.y,
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
  set width(w) {
    this.canvasNode && (this.canvasNode.width = w);
  }
  set height(w) {
    this.canvasNode && (this.canvasNode.height = w);
  }
  get width() {
    return this.canvasNode ? this.canvasNode.width : 0;
  }
  get height() {
    return this.canvasNode ? this.canvasNode.height : 0;
  }
}
const WR = {
  __name: "index",
  props: {
    uid: {
      type: String,
      default: ""
    }
  },
  setup(y, { expose: w }) {
    const x = y, R = require("./echarts.js");
    let I;
    yR(() => {
      process.env.TARO_ENV !== "h5" && R.registerPreprocessor((V) => {
        V && V.series && (V.series.length > 0 ? V.series.forEach((q) => {
          q.progressive = 0;
        }) : typeof V.series == "object" && (V.series.progressive = 0));
      });
    });
    const O = (V) => {
      setTimeout(() => {
        F(V);
      }, 100);
    };
    function F(V) {
      const q = Pv.createSelectorQuery(), { uid: at } = x;
      q.select(`.${at}`).fields({
        node: !0,
        size: !0
      }).exec((At) => {
        const Dt = Pv.getSystemInfoSync().pixelRatio, Ee = At[0].node, Yt = At[0].width, jr = At[0].height, mt = Ee.getContext("2d"), Ge = new HR(mt, !0, Ee);
        R.setCanvasCreator(() => Ge), typeof V == "function" && (I = V(Ge, Yt, jr, Dt));
      });
    }
    function H(V) {
      for (let q = 0; q < V.touches.length; ++q) {
        const at = V.touches[q];
        at.offsetX = at.x, at.offsetY = at.y;
      }
      return V;
    }
    function $(V) {
      if (I && V.touches.length > 0) {
        var q = V.touches[0], at = I.getZr().handler;
        at.dispatch("mousedown", {
          zrX: q.x,
          zrY: q.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        }), at.dispatch("mousemove", {
          zrX: q.x,
          zrY: q.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        }), at.processGesture(H(V), "start");
      }
    }
    function nt(V) {
      if (I && V.touches.length > 0) {
        var q = V.touches[0], at = I.getZr().handler;
        at.dispatch("mousemove", {
          zrX: q.x,
          zrY: q.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        }), at.processGesture(H(V), "change");
      }
    }
    function ft(V) {
      if (I) {
        const at = V.changedTouches ? V.changedTouches[0] : {};
        var q = I.getZr().handler;
        q.dispatch("mouseup", {
          zrX: at.x,
          zrY: at.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        }), q.dispatch("click", {
          zrX: at.x,
          zrY: at.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        }), q.processGesture(H(V), "end");
      }
    }
    return w({
      init: O
      //
    }), (V, q) => (Bv(), ES("canvas", {
      type: "2d",
      class: Du([y.uid, "ec-canvas"]),
      "on:touchStart": $,
      "on:touchMove": nt,
      "on:touchEnd": ft
    }, null, 34));
  }
};
const UR = ["id"], XR = {
  __name: "index",
  setup(y, { expose: w }) {
    const x = Cv(process.env.TARO_ENV === "h5"), R = Cv(`canvas-${Date.now()}-${Math.floor(Math.random() * 1e4)}`), I = Cv(null);
    let O = null;
    function F() {
      return O || console.error(
        "echart 实例化还未完成，可参考使用说明：https://github.com/beezen/echarts4taro3#基础用法"
      );
    }
    function H(ft) {
      if (!O)
        return console.error(
          "echart 实例化还未完成，可参考使用说明：https://github.com/beezen/echarts4taro3#基础用法"
        );
      O.setOption(ft);
    }
    function $(ft) {
      if (!O)
        return console.error(
          "echart 实例化还未完成，可参考使用说明：https://github.com/beezen/echarts4taro3#基础用法"
        );
      O.resize({
        width: ft.width,
        height: ft.height
      });
    }
    function nt(ft, V) {
      return new Promise((q) => {
        process.env.TARO_ENV === "h5" ? (O = (void 0)(document.querySelector(`#${R.value}`)), O.setOption(ft), q(O)) : I.value.init((At, Dt, Ee, Yt) => {
          if (O = (void 0)(At, null, {
            width: Dt,
            height: Ee,
            devicePixelRatio: Yt
          }), At.setChart(O), !Dt || !Ee) {
            let jr = 0;
            const mt = () => {
              jr++, Pv.createSelectorQuery().select(`.${R.value}`).fields({
                node: !0,
                size: !0
              }).exec((Ge) => {
                const Mi = Ge[0].width, Yo = Ge[0].height;
                (!Mi || !Yo) && jr < 20 ? setTimeout(mt, 100) : (O.resize({
                  width: Mi,
                  height: Yo
                }), O.setOption(ft));
              });
            };
            mt();
          } else
            O.setOption(ft);
          return q(O), O;
        });
      });
    }
    return w({
      getChart: F,
      setOption: H,
      resize: $,
      refresh: nt
    }), (ft, V) => mu(x) ? (Bv(), ES("canvas", {
      key: 0,
      id: mu(R),
      class: "echart-canvas"
    }, null, 8, UR)) : (Bv(), IR(WR, {
      key: 1,
      ref_key: "canvas",
      ref: I,
      uid: mu(R),
      class: "echart-canvas"
    }, null, 8, ["uid"]));
  }
};
export {
  XR as EChart
};
