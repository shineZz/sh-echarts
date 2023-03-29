import { ref as r, unref as c, openBlock as p, createElementBlock as y, createBlock as $ } from "vue";
import "./polyfill.js";
import T from "@tarojs/taro";
import "../ec-canvas/echarts.js";
import B from "../ec-canvas/index.vue.js";
import "./index.vue2.js";
const D = ["id"], P = {
  __name: "index",
  setup(E, { expose: v }) {
    const _ = r(process.env.TARO_ENV === "h5"), n = r(`canvas-${Date.now()}-${Math.floor(Math.random() * 1e4)}`), o = r(null);
    let e = null;
    function g() {
      return e || console.error(
        "echart 实例化还未完成，可参考使用说明：https://github.com/beezen/echarts4taro3#基础用法"
      );
    }
    function b(t) {
      if (!e)
        return console.error(
          "echart 实例化还未完成，可参考使用说明：https://github.com/beezen/echarts4taro3#基础用法"
        );
      e.setOption(t);
    }
    function k(t) {
      if (!e)
        return console.error(
          "echart 实例化还未完成，可参考使用说明：https://github.com/beezen/echarts4taro3#基础用法"
        );
      e.resize({
        width: t.width,
        height: t.height
      });
    }
    function z(t, O) {
      return new Promise((s) => {
        process.env.TARO_ENV === "h5" ? (e = (void 0)(document.querySelector(`#${n.value}`)), e.setOption(t), s(e)) : o.value.init((a, i, h, x) => {
          if (e = (void 0)(a, null, {
            width: i,
            height: h,
            devicePixelRatio: x
          }), a.setChart(e), !i || !h) {
            let u = 0;
            const l = () => {
              u++, T.createSelectorQuery().select(`.${n.value}`).fields({
                node: !0,
                size: !0
              }).exec((f) => {
                const m = f[0].width, d = f[0].height;
                (!m || !d) && u < 20 ? setTimeout(l, 100) : (e.resize({
                  width: m,
                  height: d
                }), e.setOption(t));
              });
            };
            l();
          } else
            e.setOption(t);
          return s(e), e;
        });
      });
    }
    return v({
      getChart: g,
      setOption: b,
      resize: k,
      refresh: z
    }), (t, O) => c(_) ? (p(), y("canvas", {
      key: 0,
      id: c(n),
      class: "echart-canvas"
    }, null, 8, D)) : (p(), $(B, {
      key: 1,
      ref_key: "canvas",
      ref: o,
      uid: c(n),
      class: "echart-canvas"
    }, null, 8, ["uid"]));
  }
};
export {
  P as default
};
