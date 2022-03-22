var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
var import_index_af382e8c = require("../../chunks/index-af382e8c.js");
const user = "John Smith";
const Header = (0, import_index_af382e8c.c)(($$result, $$props, $$bindings, slots) => {
  return `<nav><div class="${"sidebar-top"}"><span class="${"shrink-btn"}"><i class="${"bx bx-chevron-left"}"></i></span>
		<img src="${"/img/logo.png"}" class="${"logo"}" alt="${"Nova Logo"}">
		<h3 class="${"hide logo-text"}">Nova</h3></div>

	<div class="${"search"}"><i class="${"bx bx-search"}"></i>
		<input type="${"text"}" class="${"hide"}" placeholder="${"Quick Search ..."}"></div>

	<div class="${"sidebar-links"}"><ul><div class="${"active-tab"}"></div>
			<li class="${"tooltip-element"}" data-tooltip="${"0"}"><a href="${"/"}" class="${"active"}" data-active="${"0"}"><div class="${"icon"}"><i class="${"bx bx-tachometer"}"></i>
						<i class="${"bx bxs-tachometer"}"></i></div>
					<span class="${"link hide"}">Dashboard</span></a></li>
			<li class="${"tooltip-element"}" data-tooltip="${"1"}"><a href="${"premises"}" data-active="${"1"}"><div class="${"icon"}"><i class="${"bx bx-buildings"}"></i>
						<i class="${"bx bxs-buildings"}"></i></div>
					<span class="${"link hide"}">Premises</span></a></li>
			<li class="${"tooltip-element"}" data-tooltip="${"2"}"><a href="${"person"}" data-active="${"2"}"><div class="${"icon"}"><i class="${"bx bx-face"}"></i>
						<i class="${"bx bxs-face"}"></i></div>
					<span class="${"link hide"}">Person</span></a></li>
			<li class="${"tooltip-element"}" data-tooltip="${"3"}"><a href="${"reports"}" data-active="${"3"}"><div class="${"icon"}"><i class="${"bx bx-bar-chart-square"}"></i>
						<i class="${"bx bxs-bar-chart-square"}"></i></div>
					<span class="${"link hide"}">Reports</span></a></li>
			<div class="${"tooltip"}"><span class="${"show"}">Dashboard</span>
				<span>Premises</span>
				<span>Person</span>
				<span>Reports</span></div></ul>

		<h4 class="${"hide"}">Shortcuts</h4>

		<ul><li class="${"tooltip-element"}" data-tooltip="${"0"}"><a href="${"tasks"}" data-active="${"4"}"><div class="${"icon"}"><i class="${"bx bx-notepad"}"></i>
						<i class="${"bx bxs-notepad"}"></i></div>
					<span class="${"link hide"}">Tasks</span></a></li>
			<li class="${"tooltip-element"}" data-tooltip="${"1"}"><a href="${"help"}" data-active="${"5"}"><div class="${"icon"}"><i class="${"bx bx-help-circle"}"></i>
						<i class="${"bx bxs-help-circle"}"></i></div>
					<span class="${"link hide"}">Help</span></a></li>
			<li class="${"tooltip-element"}" data-tooltip="${"2"}"><a href="${"settings"}" data-active="${"6"}"><div class="${"icon"}"><i class="${"bx bx-cog"}"></i>
						<i class="${"bx bxs-cog"}"></i></div>
					<span class="${"link hide"}">Settings</span></a></li>
			<div class="${"tooltip"}"><span class="${"show"}">Tasks</span>
				<span>Help</span>
				<span>Settings</span></div></ul></div>

	<div class="${"sidebar-footer"}"><a href="${"/"}" class="${"account tooltip-element"}" data-tooltip="${"0"}"><i class="${"bx bx-user"}"></i></a>
		<div class="${"admin-user tooltip-element"}" data-tooltip="${"1"}"><div class="${"admin-profile hide"}"><img src="${"./img/face-1.png"}" alt="${"User Profile"}">
				<div class="${"admin-info"}"><h3>${(0, import_index_af382e8c.e)(user)}</h3>
					<h5>0247</h5></div></div>
			<a href="${"/"}" class="${"log-out"}"><i class="${"bx bx-log-out"}"></i></a></div>
		<div class="${"tooltip"}"><span class="${"show"}">${(0, import_index_af382e8c.e)(user)}</span>
			<span>Logout</span></div></div></nav>`;
});
const _layout = (0, import_index_af382e8c.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_af382e8c.v)(Header, "Header").$$render($$result, {}, {}, {})}

<main>${slots.default ? slots.default({}) : ``}</main>`;
});
module.exports = __toCommonJS(stdin_exports);
