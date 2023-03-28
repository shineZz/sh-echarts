import { ref, unref, openBlock, createElementBlock, createBlock } from "vue";
import "./polyfill.mjs";
import Taro from "@tarojs/taro";
import "../ec-canvas/echarts.mjs";
import _sfc_main$1 from "../ec-canvas/index.vue.mjs";
import "./index.vue2.mjs";
const _hoisted_1 = ["id"];
const _sfc_main = {
  __name: "index",
  setup(__props, { expose }) {
    const isWeb = ref(process.env.TARO_ENV === "h5");
    const uid = ref(`canvas-${Date.now()}-${Math.floor(Math.random() * 1e4)}`);
    const canvas = ref(null);
    let chartInstance = null;
    function getChart() {
      if (!chartInstance)
        return console.error(
          "echart 实例化还未完成，可参考使用说明：https://github.com/beezen/echarts4taro3#基础用法"
        );
      return chartInstance;
    }
    function setOption(data) {
      if (!chartInstance)
        return console.error(
          "echart 实例化还未完成，可参考使用说明：https://github.com/beezen/echarts4taro3#基础用法"
        );
      chartInstance.setOption(data);
    }
    function resize(options) {
      if (!chartInstance)
        return console.error(
          "echart 实例化还未完成，可参考使用说明：https://github.com/beezen/echarts4taro3#基础用法"
        );
      chartInstance.resize({
        width: options.width,
        height: options.height
      });
    }
    function refresh(data, callback) {
      return new Promise((resolve) => {
        if (process.env.TARO_ENV === "h5") {
          const canvasDom = document.querySelector(`#${uid.value}`);
          chartInstance = (void 0)(canvasDom);
          chartInstance.setOption(data);
          resolve(chartInstance);
        } else {
          const canvasInstance = canvas.value;
          canvasInstance.init((canvas2, width, height, canvasDpr) => {
            chartInstance = (void 0)(canvas2, null, {
              width,
              height,
              devicePixelRatio: canvasDpr
            });
            canvas2.setChart(chartInstance);
            if (!width || !height) {
              let count = 0;
              const doFn = () => {
                count++;
                Taro.createSelectorQuery().select(`.${uid.value}`).fields({
                  node: true,
                  size: true
                }).exec((res) => {
                  const canvasWidth = res[0].width;
                  const canvasHeight = res[0].height;
                  if ((!canvasWidth || !canvasHeight) && count < 20) {
                    setTimeout(doFn, 100);
                  } else {
                    chartInstance.resize({
                      width: canvasWidth,
                      height: canvasHeight
                    });
                    chartInstance.setOption(data);
                  }
                });
              };
              doFn();
            } else {
              chartInstance.setOption(data);
            }
            resolve(chartInstance);
            return chartInstance;
          });
        }
      });
    }
    expose({
      getChart,
      setOption,
      resize,
      refresh
    });
    return (_ctx, _cache) => {
      return unref(isWeb) ? (openBlock(), createElementBlock("canvas", {
        key: 0,
        id: unref(uid),
        class: "echart-canvas"
      }, null, 8, _hoisted_1)) : (openBlock(), createBlock(_sfc_main$1, {
        key: 1,
        ref_key: "canvas",
        ref: canvas,
        uid: unref(uid),
        class: "echart-canvas"
      }, null, 8, ["uid"]));
    };
  }
};
export {
  _sfc_main as default
};
