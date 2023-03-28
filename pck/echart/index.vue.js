import { ref as r, unref as c, openBlock as _, createElementBlock as $, createBlock as T } from "vue";
import "./polyfill.js";
import B from "@tarojs/taro";
import E from "../ec-canvas/index.vue.js";
import "./index.vue2.js";
const I = ["id"], N = {
  __name: "index",
  setup(R, { expose: g }) {
    const o = require("./echarts.js"), b = r(process.env.TARO_ENV === "h5"), n = r(`canvas-${Date.now()}-${Math.floor(Math.random() * 1e4)}`), s = r(null);
    let e = null;
    function k() {
      return e || console.error(
        "echart 实例化还未完成，可参考使用说明：https://github.com/beezen/echarts4taro3#基础用法"
      );
    }
    function z(t) {
      if (!e)
        return console.error(
          "echart 实例化还未完成，可参考使用说明：https://github.com/beezen/echarts4taro3#基础用法"
        );
      e.setOption(t);
    }
    function O(t) {
      if (!e)
        return console.error(
          "echart 实例化还未完成，可参考使用说明：https://github.com/beezen/echarts4taro3#基础用法"
        );
      e.resize({
        width: t.width,
        height: t.height
      });
    }
    function w(t, x) {
      return new Promise((i) => {
        if (process.env.TARO_ENV === "h5") {
          const a = document.querySelector(`#${n.value}`);
          e = o.init(a), e.setOption(t), i(e);
        } else
          s.value.init((h, u, l, y) => {
            if (e = o.init(h, null, {
              width: u,
              height: l,
              devicePixelRatio: y
            }), h.setChart(e), !u || !l) {
              let f = 0;
              const m = () => {
                f++, B.createSelectorQuery().select(`.${n.value}`).fields({
                  node: !0,
                  size: !0
                }).exec((p) => {
                  const d = p[0].width, v = p[0].height;
                  (!d || !v) && f < 20 ? setTimeout(m, 100) : (e.resize({
                    width: d,
                    height: v
                  }), e.setOption(t));
                });
              };
              m();
            } else
              e.setOption(t);
            return i(e), e;
          });
      });
    }
    return g({
      getChart: k,
      setOption: z,
      resize: O,
      refresh: w
    }), (t, x) => c(b) ? (_(), $("canvas", {
      key: 0,
      id: c(n),
      class: "echart-canvas"
    }, null, 8, I)) : (_(), T(E, {
      key: 1,
      ref_key: "canvas",
      ref: s,
      uid: c(n),
      class: "echart-canvas"
    }, null, 8, ["uid"]));
  }
};
export {
  N as default
};
