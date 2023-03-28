import { onMounted as I, openBlock as w, createElementBlock as C, normalizeClass as D } from "vue";
import p from "@tarojs/taro";
import S from "./wx-canvas.js";
import "./index.vue2.js";
const _ = {
  __name: "index",
  props: {
    uid: {
      type: String,
      default: ""
    }
  },
  setup(a, { expose: f }) {
    const h = a, c = require("./echarts.js");
    let s;
    I(() => {
      process.env.TARO_ENV !== "h5" && c.registerPreprocessor((e) => {
        e && e.series && (e.series.length > 0 ? e.series.forEach((t) => {
          t.progressive = 0;
        }) : typeof e.series == "object" && (e.series.progressive = 0));
      });
    });
    const d = (e) => {
      setTimeout(() => {
        m(e);
      }, 100);
    };
    function m(e) {
      const t = p.createSelectorQuery(), { uid: o } = h;
      t.select(`.${o}`).fields({
        node: !0,
        size: !0
      }).exec((n) => {
        const y = p.getSystemInfoSync().pixelRatio, i = n[0].node, x = n[0].width, z = n[0].height, P = i.getContext("2d"), u = new S(P, !0, i);
        c.setCanvasCreator(() => u), typeof e == "function" && (s = e(u, x, z, y));
      });
    }
    function r(e) {
      for (let t = 0; t < e.touches.length; ++t) {
        const o = e.touches[t];
        o.offsetX = o.x, o.offsetY = o.y;
      }
      return e;
    }
    function g(e) {
      if (s && e.touches.length > 0) {
        var t = e.touches[0], o = s.getZr().handler;
        o.dispatch("mousedown", {
          zrX: t.x,
          zrY: t.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        }), o.dispatch("mousemove", {
          zrX: t.x,
          zrY: t.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        }), o.processGesture(r(e), "start");
      }
    }
    function v(e) {
      if (s && e.touches.length > 0) {
        var t = e.touches[0], o = s.getZr().handler;
        o.dispatch("mousemove", {
          zrX: t.x,
          zrY: t.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        }), o.processGesture(r(e), "change");
      }
    }
    function l(e) {
      if (s) {
        const o = e.changedTouches ? e.changedTouches[0] : {};
        var t = s.getZr().handler;
        t.dispatch("mouseup", {
          zrX: o.x,
          zrY: o.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        }), t.dispatch("click", {
          zrX: o.x,
          zrY: o.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        }), t.processGesture(r(e), "end");
      }
    }
    return f({
      init: d
      //
    }), (e, t) => (w(), C("canvas", {
      type: "2d",
      class: D([a.uid, "ec-canvas"]),
      "on:touchStart": g,
      "on:touchMove": v,
      "on:touchEnd": l
    }, null, 34));
  }
};
export {
  _ as default
};
