if (process.env.TARO_ENV === "alipay") {
  Object.defineProperty(Object.prototype, "wx", {
    enumerable: false,
    value: my
  });
}
