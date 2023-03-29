import { onMounted as I, openBlock as z, createElementBlock as b, normalizeClass as O, ref as N, unref as w, createBlock as S } from "vue";
import E from "@tarojs/taro";
process.env.TARO_ENV === "alipay" && Object.defineProperty(Object.prototype, "wx", {
  enumerable: !1,
  value: my
});
class D {
  constructor(n, o, i) {
    this.ctx = n, this.chart = null, this.isNew = o, o ? this.canvasNode = i : this._initStyle(n), this._initEvent();
  }
  getContext(n) {
    if (n === "2d")
      return this.ctx;
  }
  setChart(n) {
    this.chart = n;
  }
  addEventListener() {
  }
  attachEvent() {
  }
  detachEvent() {
  }
  _initCanvas(n, o) {
    n.util.getContext = function() {
      return o;
    }, n.util.$override("measureText", function(i, a) {
      return o.font = a || "12px sans-serif", o.measureText(i);
    });
  }
  _initStyle(n) {
    n.createRadialGradient = () => n.createCircularGradient(arguments);
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
    ].forEach((o) => {
      this.event[o.wxName] = (i) => {
        const a = i.touches[0];
        this.chart.getZr().handler.dispatch(o.ecName, {
          zrX: o.wxName === "tap" ? a.clientX : a.x,
          zrY: o.wxName === "tap" ? a.clientY : a.y,
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
  set width(n) {
    this.canvasNode && (this.canvasNode.width = n);
  }
  set height(n) {
    this.canvasNode && (this.canvasNode.height = n);
  }
  get width() {
    return this.canvasNode ? this.canvasNode.width : 0;
  }
  get height() {
    return this.canvasNode ? this.canvasNode.height : 0;
  }
}
const k = {
  __name: "index",
  props: {
    uid: {
      type: String,
      default: ""
    }
  },
  setup(p, { expose: n }) {
    const o = p, i = require("./echarts.js");
    let a;
    I(() => {
      process.env.TARO_ENV !== "h5" && i.registerPreprocessor((e) => {
        e && e.series && (e.series.length > 0 ? e.series.forEach((t) => {
          t.progressive = 0;
        }) : typeof e.series == "object" && (e.series.progressive = 0));
      });
    });
    const d = (e) => {
      setTimeout(() => {
        r(e);
      }, 100);
    };
    function r(e) {
      const t = E.createSelectorQuery(), { uid: s } = o;
      t.select(`.${s}`).fields({
        node: !0,
        size: !0
      }).exec((c) => {
        const v = E.getSystemInfoSync().pixelRatio, h = c[0].node, f = c[0].width, y = c[0].height, m = h.getContext("2d"), l = new D(m, !0, h);
        i.setCanvasCreator(() => l), typeof e == "function" && (a = e(l, f, y, v));
      });
    }
    function u(e) {
      for (let t = 0; t < e.touches.length; ++t) {
        const s = e.touches[t];
        s.offsetX = s.x, s.offsetY = s.y;
      }
      return e;
    }
    function g(e) {
      if (a && e.touches.length > 0) {
        var t = e.touches[0], s = a.getZr().handler;
        s.dispatch("mousedown", {
          zrX: t.x,
          zrY: t.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        }), s.dispatch("mousemove", {
          zrX: t.x,
          zrY: t.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        }), s.processGesture(u(e), "start");
      }
    }
    function _(e) {
      if (a && e.touches.length > 0) {
        var t = e.touches[0], s = a.getZr().handler;
        s.dispatch("mousemove", {
          zrX: t.x,
          zrY: t.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        }), s.processGesture(u(e), "change");
      }
    }
    function x(e) {
      if (a) {
        const s = e.changedTouches ? e.changedTouches[0] : {};
        var t = a.getZr().handler;
        t.dispatch("mouseup", {
          zrX: s.x,
          zrY: s.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        }), t.dispatch("click", {
          zrX: s.x,
          zrY: s.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        }), t.processGesture(u(e), "end");
      }
    }
    return n({
      init: d
      //
    }), (e, t) => (z(), b("canvas", {
      type: "2d",
      class: O([p.uid, "ec-canvas"]),
      "on:touchStart": g,
      "on:touchMove": _,
      "on:touchEnd": x
    }, null, 34));
  }
};
const X = ["id"], R = {
  __name: "index",
  setup(p, { expose: n }) {
    const o = require("./echarts.js"), i = N(process.env.TARO_ENV === "h5"), a = N(`canvas-${Date.now()}-${Math.floor(Math.random() * 1e4)}`), d = N(null);
    let r = null;
    function u() {
      return r || console.error(
        "echart 实例化还未完成，可参考使用说明：https://github.com/beezen/echarts4taro3#基础用法"
      );
    }
    function g(e) {
      if (!r)
        return console.error(
          "echart 实例化还未完成，可参考使用说明：https://github.com/beezen/echarts4taro3#基础用法"
        );
      r.setOption(e);
    }
    function _(e) {
      if (!r)
        return console.error(
          "echart 实例化还未完成，可参考使用说明：https://github.com/beezen/echarts4taro3#基础用法"
        );
      r.resize({
        width: e.width,
        height: e.height
      });
    }
    function x(e, t) {
      return new Promise((s) => {
        if (process.env.TARO_ENV === "h5") {
          const c = document.querySelector(`#${a.value}`);
          r = o.init(c), r.setOption(e), s(r);
        } else
          d.value.init((v, h, f, y) => {
            if (r = o.init(v, null, {
              width: h,
              height: f,
              devicePixelRatio: y
            }), v.setChart(r), !h || !f) {
              let m = 0;
              const l = () => {
                m++, E.createSelectorQuery().select(`.${a.value}`).fields({
                  node: !0,
                  size: !0
                }).exec((P) => {
                  const C = P[0].width, T = P[0].height;
                  (!C || !T) && m < 20 ? setTimeout(l, 100) : (r.resize({
                    width: C,
                    height: T
                  }), r.setOption(e));
                });
              };
              l();
            } else
              r.setOption(e);
            return s(r), r;
          });
      });
    }
    return n({
      getChart: u,
      setOption: g,
      resize: _,
      refresh: x
    }), (e, t) => w(i) ? (z(), b("canvas", {
      key: 0,
      id: w(a),
      class: "echart-canvas"
    }, null, 8, X)) : (z(), S(k, {
      key: 1,
      ref_key: "canvas",
      ref: d,
      uid: w(a),
      class: "echart-canvas"
    }, null, 8, ["uid"]));
  }
};
export {
  R as EChart
};
