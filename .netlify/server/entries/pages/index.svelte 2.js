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
  default: () => Routes
});
var import_index_af382e8c = require("../../chunks/index-af382e8c.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".welcome-message.svelte-1icfzwy.svelte-1icfzwy{font-size:var(--baseFontSize);margin-bottom:0.2rem}.dashboard-grid.svelte-1icfzwy.svelte-1icfzwy{display:grid;grid-template-columns:1fr 0.5fr;grid-gap:1rem;height:100%;margin:2rem 0}.dashboard-grid-premises.svelte-1icfzwy.svelte-1icfzwy{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;margin:1rem 0}.dashboard-grid-location.svelte-1icfzwy.svelte-1icfzwy{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;margin:1rem 0}.card.svelte-1icfzwy.svelte-1icfzwy{background:#fff;color:var(textColor);border-radius:var(--borderRadius);padding:20px;margin:20px;box-shadow:var(--shadow-2);display:flex;align-items:flex-start;width:15rem}.key-location.svelte-1icfzwy.svelte-1icfzwy{background:#fff;color:var(textColor);border-radius:var(--borderRadius);padding:20px;margin:20px;box-shadow:var(--shadow-2);display:flex;flex-direction:column;align-items:flex-start;width:15rem;height:10rem;position:relative}.icon-wrap.svelte-1icfzwy.svelte-1icfzwy{position:absolute;top:-1.5rem;left:5rem;width:5rem;height:5rem;background-color:var(--blue);border-radius:var(--borderRadius);display:flex;justify-content:center;align-items:center}.icon-wrap.svelte-1icfzwy i.svelte-1icfzwy{font-size:1.5rem;color:#fff}.card.svelte-1icfzwy.svelte-1icfzwy:hover{box-shadow:var(--shadow-3)}.bx.svelte-1icfzwy.svelte-1icfzwy{font-size:1.5rem}.card-text.svelte-1icfzwy.svelte-1icfzwy{margin-left:20px}.card-text.svelte-1icfzwy h3.svelte-1icfzwy{font-size:0.9rem;font-weight:500;margin:0}.card-text.svelte-1icfzwy p span.svelte-1icfzwy{font-size:1.5rem;font-weight:800;margin:0}.red-icon.svelte-1icfzwy.svelte-1icfzwy{background-color:rgba(255, 84, 112, 0.2);color:var(--red);padding:0.8rem;border-radius:50%;box-shadow:var(--shadow-2)}.green-icon.svelte-1icfzwy.svelte-1icfzwy{background-color:rgba(0, 235, 200, 0.2);color:var(--green);padding:0.8rem;border-radius:50%;box-shadow:var(--shadow-2)}.blue-icon.svelte-1icfzwy.svelte-1icfzwy{background-color:rgba(61, 91, 241, 0.2);color:var(--blue);padding:0.8rem;border-radius:50%;box-shadow:var(--shadow-2)}.full-height.svelte-1icfzwy.svelte-1icfzwy{height:100%;display:flex;flex-direction:column}@property --p{syntax:'<number>';inherits:true;initial-value:1}.pie.svelte-1icfzwy.svelte-1icfzwy{--p:20;--b:22px;--c:darkred;--w:150px;width:var(--w);aspect-ratio:1;position:relative;display:inline-grid;margin:5px;place-content:center;font-size:25px;font-weight:bold;font-family:sans-serif}.pie.svelte-1icfzwy.svelte-1icfzwy:before,.pie.svelte-1icfzwy.svelte-1icfzwy:after{content:'';position:absolute;border-radius:50%}.pie.svelte-1icfzwy.svelte-1icfzwy:before{inset:0;background:radial-gradient(farthest-side, var(--c) 98%, #0000) top/var(--b) var(--b) no-repeat,\n			conic-gradient(var(--c) calc(var(--p) * 1%), #0000 0);-webkit-mask:radial-gradient(\n			farthest-side,\n			#0000 calc(99% - var(--b)),\n			#000 calc(100% - var(--b))\n		);mask:radial-gradient(farthest-side, #0000 calc(99% - var(--b)), #000 calc(100% - var(--b)))}.pie.svelte-1icfzwy.svelte-1icfzwy:after{inset:calc(50% - var(--b) / 2);background:var(--c);transform:rotate(calc(var(--p) * 3.6deg)) translateY(calc(50% - var(--w) / 2))}.animate.svelte-1icfzwy.svelte-1icfzwy{animation:svelte-1icfzwy-p 1s 0.5s both}@keyframes svelte-1icfzwy-p{from{--p:0}}",
  map: null
};
const Routes = (0, import_index_af382e8c.c)(($$result, $$props, $$bindings, slots) => {
  let { user = "John Smith" } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Nova - Dashboard</title>`, ""}`, ""}

<section><p class="${"welcome-message svelte-1icfzwy"}">Good morning ${(0, import_index_af382e8c.e)(user)}</p>
	<h1>Welcome Back</h1>
	<div class="${"dashboard-grid svelte-1icfzwy"}"><div class="${"dahsboard-col"}"><h3>Premise Licence Breakdown</h3>
			<div class="${"dashboard-grid-premises svelte-1icfzwy"}"><a href="${"/"}"><div class="${"card svelte-1icfzwy"}"><i class="${"bx bx-file-blank blue-icon svelte-1icfzwy"}"></i>
						<div class="${"card-text svelte-1icfzwy"}"><h3 class="${"svelte-1icfzwy"}">Total Licences</h3>
							<p><span class="${"svelte-1icfzwy"}">204</span></p></div></div></a>

				<a href="${"/"}"><div class="${"card svelte-1icfzwy"}"><i class="${"bx bx-check green-icon svelte-1icfzwy"}"></i>
						<div class="${"card-text svelte-1icfzwy"}"><h3 class="${"svelte-1icfzwy"}">Licence Reviewed</h3>
							<p><span class="${"svelte-1icfzwy"}">141</span></p></div></div></a>

				<a href="${"/"}"><div class="${"card svelte-1icfzwy"}"><i class="${"bx bx-time red-icon svelte-1icfzwy"}"></i>
						<div class="${"card-text svelte-1icfzwy"}"><h3 class="${"svelte-1icfzwy"}">Review Needed</h3>
							<p><span class="${"svelte-1icfzwy"}">63</span></p></div></div></a></div>
			<h3>Key locations</h3>
			<div class="${"dashboard-grid-location svelte-1icfzwy"}"><a href="${"/"}"><div class="${"card key-location svelte-1icfzwy"}"><div class="${"icon-wrap svelte-1icfzwy"}"><i class="${"bx bx-buildings svelte-1icfzwy"}"></i></div>
						<div class="${"card-text svelte-1icfzwy"}"><h3 class="${"svelte-1icfzwy"}">Total Licences</h3>
							<p><span class="${"svelte-1icfzwy"}">204</span></p></div></div></a>
				<a href="${"/"}"><div class="${"card key-location svelte-1icfzwy"}"><div class="${"icon-wrap svelte-1icfzwy"}"><i class="${"bx bx-buildings svelte-1icfzwy"}"></i></div>
						<div class="${"card-text svelte-1icfzwy"}"><h3 class="${"svelte-1icfzwy"}">Total Licences</h3>
							<p><span class="${"svelte-1icfzwy"}">204</span></p></div></div></a>
				<a href="${"/"}"><div class="${"card key-location svelte-1icfzwy"}"><div class="${"icon-wrap svelte-1icfzwy"}"><i class="${"bx bx-buildings svelte-1icfzwy"}"></i></div>
						<div class="${"card-text svelte-1icfzwy"}"><h3 class="${"svelte-1icfzwy"}">Total Licences</h3>
							<p><span class="${"svelte-1icfzwy"}">204</span></p></div></div></a></div>

			<h3>Team Tasks</h3>
			<a href="${"/"}"><div class="${"card svelte-1icfzwy"}"><h2>Card</h2></div></a></div>

		<div class="${"dashboard-col"}"><h3>Team Tasks</h3>
			<a href="${"/"}"><div class="${"card full-height svelte-1icfzwy"}"><div class="${"pie animate svelte-1icfzwy"}" style="${"--p:70;--c:lightgreen"}">70%</div>
					<div class="${"card-text svelte-1icfzwy"}"><h2>Completed</h2>
						<p>23</p></div>
					<div class="${"card-text svelte-1icfzwy"}"><h2>Overdue</h2>
						<p>8</p></div></div></a></div></div>
</section>`;
});
module.exports = __toCommonJS(stdin_exports);
