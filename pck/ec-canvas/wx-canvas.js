class n {
  constructor(t, e, i) {
    this.ctx = t, this.chart = null, this.isNew = e, e ? this.canvasNode = i : this._initStyle(t), this._initEvent();
  }
  getContext(t) {
    if (t === "2d")
      return this.ctx;
  }
  setChart(t) {
    this.chart = t;
  }
  addEventListener() {
  }
  attachEvent() {
  }
  detachEvent() {
  }
  _initCanvas(t, e) {
    t.util.getContext = function() {
      return e;
    }, t.util.$override("measureText", function(i, a) {
      return e.font = a || "12px sans-serif", e.measureText(i);
    });
  }
  _initStyle(t) {
    t.createRadialGradient = () => t.createCircularGradient(arguments);
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
    ].forEach((e) => {
      this.event[e.wxName] = (i) => {
        const a = i.touches[0];
        this.chart.getZr().handler.dispatch(e.ecName, {
          zrX: e.wxName === "tap" ? a.clientX : a.x,
          zrY: e.wxName === "tap" ? a.clientY : a.y,
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
  set width(t) {
    this.canvasNode && (this.canvasNode.width = t);
  }
  set height(t) {
    this.canvasNode && (this.canvasNode.height = t);
  }
  get width() {
    return this.canvasNode ? this.canvasNode.width : 0;
  }
  get height() {
    return this.canvasNode ? this.canvasNode.height : 0;
  }
}
export {
  n as default
};
