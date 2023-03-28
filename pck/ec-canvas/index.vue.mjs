import { onMounted, openBlock, createElementBlock, normalizeClass } from "vue";
import Taro from "@tarojs/taro";
import "./echarts.mjs";
import WxCanvas from "./wx-canvas.mjs";
import "./index.vue2.mjs";
const _sfc_main = {
  __name: "index",
  props: {
    uid: {
      type: String,
      default: ""
    }
  },
  setup(__props, { expose }) {
    const props = __props;
    let chartInstance;
    onMounted(() => {
      if (process.env.TARO_ENV === "h5")
        return;
      (void 0)((option) => {
        if (option && option.series) {
          if (option.series.length > 0) {
            option.series.forEach((series) => {
              series.progressive = 0;
            });
          } else if (typeof option.series === "object") {
            option.series.progressive = 0;
          }
        }
      });
    });
    const init = (callback) => {
      setTimeout(() => {
        initByNewWay(callback);
      }, 100);
    };
    function initByNewWay(callback) {
      const query = Taro.createSelectorQuery();
      const { uid } = props;
      query.select(`.${uid}`).fields({
        node: true,
        size: true
      }).exec((res) => {
        const canvasDpr = Taro.getSystemInfoSync().pixelRatio;
        const canvasNode = res[0].node;
        const canvasWidth = res[0].width;
        const canvasHeight = res[0].height;
        const ctx = canvasNode.getContext("2d");
        const wxCanvas = new WxCanvas(ctx, true, canvasNode);
        (void 0)(() => {
          return wxCanvas;
        });
        if (typeof callback === "function") {
          chartInstance = callback(wxCanvas, canvasWidth, canvasHeight, canvasDpr);
        }
      });
    }
    function wrapTouch(event) {
      for (let i = 0; i < event.touches.length; ++i) {
        const touch = event.touches[i];
        touch.offsetX = touch.x;
        touch.offsetY = touch.y;
      }
      return event;
    }
    function touchStart(e) {
      if (chartInstance && e.touches.length > 0) {
        var touch = e.touches[0];
        var handler = chartInstance.getZr().handler;
        handler.dispatch("mousedown", {
          zrX: touch.x,
          zrY: touch.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        });
        handler.dispatch("mousemove", {
          zrX: touch.x,
          zrY: touch.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        });
        handler.processGesture(wrapTouch(e), "start");
      }
    }
    function touchMove(e) {
      if (chartInstance && e.touches.length > 0) {
        var touch = e.touches[0];
        var handler = chartInstance.getZr().handler;
        handler.dispatch("mousemove", {
          zrX: touch.x,
          zrY: touch.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        });
        handler.processGesture(wrapTouch(e), "change");
      }
    }
    function touchEnd(e) {
      if (chartInstance) {
        const touch = e.changedTouches ? e.changedTouches[0] : {};
        var handler = chartInstance.getZr().handler;
        handler.dispatch("mouseup", {
          zrX: touch.x,
          zrY: touch.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        });
        handler.dispatch("click", {
          zrX: touch.x,
          zrY: touch.y,
          preventDefault: () => {
          },
          stopImmediatePropagation: () => {
          },
          stopPropagation: () => {
          }
        });
        handler.processGesture(wrapTouch(e), "end");
      }
    }
    expose({
      init
      //
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("canvas", {
        type: "2d",
        class: normalizeClass([__props.uid, "ec-canvas"]),
        "on:touchStart": touchStart,
        "on:touchMove": touchMove,
        "on:touchEnd": touchEnd
      }, null, 34);
    };
  }
};
export {
  _sfc_main as default
};
