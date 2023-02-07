function myFunction() {}
(() => {
  var n = {};
  (n.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (n) {
      if ("object" == typeof window) return window;
    }
  })()),
    (n.g.myFunction = function () {
      Logger.log("Hello World");
    });
})();
