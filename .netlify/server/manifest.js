var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["css/normalise.css", "css/style.css", "favicon.png", "img/face-1.png", "img/logo.png", "img/person/1.jpeg", "js/script.js"]),
  _: {
    mime: { ".css": "text/css", ".png": "image/png", ".jpeg": "image/jpeg", ".js": "application/javascript" },
    entry: { "file": "start-6205b7e4.js", "js": ["start-6205b7e4.js", "chunks/vendor-dd0e2a05.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js")))
    ],
    routes: [
      {
        type: "page",
        key: "",
        pattern: /^\/$/,
        params: null,
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        key: "premises",
        pattern: /^\/premises\/?$/,
        params: null,
        path: "/premises",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        key: "settings",
        pattern: /^\/settings\/?$/,
        params: null,
        path: "/settings",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        key: "reports",
        pattern: /^\/reports\/?$/,
        params: null,
        path: "/reports",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        key: "person",
        pattern: /^\/person\/?$/,
        params: null,
        path: "/person",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        key: "tasks",
        pattern: /^\/tasks\/?$/,
        params: null,
        path: "/tasks",
        shadow: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        key: "help",
        pattern: /^\/help\/?$/,
        params: null,
        path: "/help",
        shadow: null,
        a: [0, 8],
        b: [1]
      }
    ]
  }
};
module.exports = __toCommonJS(stdin_exports);
