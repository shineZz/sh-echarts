import { onMounted as P, openBlock as I, createElementBlock as w, normalizeClass as D } from "vue";
import u from "@tarojs/taro";
import "./echarts.js";
import S from "./wx-canvas.js";
import "./index.vue2.js";
const C = {
  __name: "index",
  props: {
    uid: {
      type: String,
      default: ""
    }
  },
  setup(a, { expose: p }) {
    const f = a;
    let s;
    P(() => {
      process.env.TARO_ENV !== "h5" && (void 0)((t) => {
        t && t.series && (t.series.length > 0 ? t.series.forEach((e) => {
          e.progressive = 0;
        }) : typeof t.series == "object" && (t.series.progressive = 0));
      });
    });
    const d = (t) => {
      setTimeout(() => {
        h(t);
      }, 100);
    };
    function h(t) {
      const e = u.createSelectorQuery(), { uid: o } = f;
      e.select(`.${o}`).fields({
        node: !0,
        size: !0
      }).exec((n) => {
        const v = u.getSystemInfoSync().pixelRatio, c = n[0].node, y = n[0].width, x = n[0].height, z = c.getContext("2d"), i = new S(z, !0, c);
        (void 0)(() => i), typeof t == "function" && (s = t(i, y, x, v));
      });
    }
    function r(t) {
      for (let e = 0; e < t.touches.length; ++e) {
        const o = t.touches[e];
        o.offsetX = o.x, o.offsetY = o.y;
      }
      return t;
    }
    function m(t) {
      if (s && t.touches.length > 0) {
        var e = t.touches[0], o = s.getZr().handler;
        o.dispatch("mousedown", {
          zrX: e.x,
          zrY: e.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        }), o.dispatch("mousemove", {
          zrX: e.x,
          zrY: e.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        }), o.processGesture(r(t), "start");
      }
    }
    function g(t) {
      if (s && t.touches.length > 0) {
        var e = t.touches[0], o = s.getZr().handler;
        o.dispatch("mousemove", {
          zrX: e.x,
          zrY: e.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        }), o.processGesture(r(t), "change");
      }
    }
    function l(t) {
      if (s) {
        const o = t.changedTouches ? t.changedTouches[0] : {};
        var e = s.getZr().handler;
        e.dispatch("mouseup", {
          zrX: o.x,
          zrY: o.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        }), e.dispatch("click", {
          zrX: o.x,
          zrY: o.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        }), e.processGesture(r(t), "end");
      }
    }
    return p({
      init: d
      //
    }), (t, e) => (I(), w("canvas", {
      type: "2d",
      class: D([a.uid, "ec-canvas"]),
      "on:touchStart": m,
      "on:touchMove": g,
      "on:touchEnd": l
    }, null, 34));
  }
};
export {
  C as default
};
