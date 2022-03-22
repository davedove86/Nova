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
  default: () => Person
});
var import_index_af382e8c = require("../../chunks/index-af382e8c.js");
var import_index_50168289 = require("../../chunks/index-50168289.js");
let personData = (0, import_index_50168289.w)([
  {
    urn: "PER00000001",
    profilePicture: "https://randomuser.me/api/portraits/men/52.jpg",
    firstName: "John",
    lastName: "Doe",
    address: "12 Front Street, Durham, Durham",
    postCode: "DH1 1AA",
    dob: "24/08/1986"
  },
  {
    urn: "PER00000002",
    profilePicture: "https://randomuser.me/api/portraits/women/76.jpg",
    firstName: "Deborah",
    lastName: "Jones",
    address: "21 Hope Close, Pittington, Durham",
    postCode: "DH4 1KT",
    dob: "27/08/1996"
  },
  {
    urn: "PER00000003",
    profilePicture: "https://randomuser.me/api/portraits/women/30.jpg",
    firstName: "Sarah",
    lastName: "Atkins",
    address: "64 Third Street, Peterlee, Durham",
    postCode: "SR8 2YA",
    dob: "04/02/1966"
  },
  {
    urn: "PER00000004",
    profilePicture: "https://randomuser.me/api/portraits/men/76.jpg",
    firstName: "Neil",
    lastName: "Parkin",
    address: "31 Weldon Avenue, Easington, Durham",
    postCode: "SR8 2YJ",
    dob: "24/08/1986"
  },
  {
    urn: "PER00000005",
    profilePicture: "https://randomuser.me/api/portraits/women/26.jpg",
    firstName: "Natelie",
    lastName: "Tinkler",
    address: "8 Rose Close, Consett, Durham",
    postCode: "DH8 1TF",
    dob: "13/09/1982"
  },
  {
    urn: "PER00000006",
    profilePicture: "https://randomuser.me/api/portraits/men/4.jpg",
    firstName: "George",
    lastName: "Harrison",
    address: "64 Third Street, Peterlee, Durham",
    postCode: "SR8 2YA",
    dob: "24/08/1986"
  },
  {
    urn: "PER00000007",
    profilePicture: "https://randomuser.me/api/portraits/women/46.jpg",
    firstName: "Ellen",
    lastName: "Holmes",
    address: "21 Hope Close, Pittington, Durham",
    postCode: "DH4 1KT",
    dob: "24/08/1986"
  },
  {
    urn: "PER00000008",
    profilePicture: "https://randomuser.me/api/portraits/men/24.jpg",
    firstName: "Paul",
    lastName: "Craggs",
    address: "31 Weldon Avenue, Easington, Durham",
    postCode: "SR8 2YJ",
    dob: "24/08/1986"
  },
  {
    urn: "PER00000009",
    profilePicture: "https://randomuser.me/api/portraits/men/65.jpg",
    firstName: "John",
    lastName: "Jones",
    address: "8 Rose Close, Consett, Durham",
    postCode: "DH8 1TF",
    dob: "24/08/1986"
  },
  {
    urn: "PER00000010",
    profilePicture: "https://randomuser.me/api/portraits/men/35.jpg",
    firstName: "Oscar",
    lastName: "Williams",
    address: "64 Third Street, Peterlee, Durham",
    postCode: "SR8 2YA",
    dob: "24/08/1986"
  }
]);
var person_svelte_svelte_type_style_lang = "";
const css = {
  code: ".dashboard-grid.svelte-1rytdbk{display:grid;grid-template-columns:repeat(1, 1fr);grid-column-gap:16px;grid-row-gap:16px;margin-bottom:26px}.card.svelte-1rytdbk{box-shadow:var(--shadow-1);background-color:#fff;border-radius:5px;padding:16px;align-items:center}.grid-item-full.svelte-1rytdbk{grid-column:1 / 5}.selection-row.svelte-1rytdbk{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 4fr 1fr 1fr;grid-gap:1rem;color:var(--bodyFont);text-decoration:none;margin-bottom:1rem}.selection-row.svelte-1rytdbk:hover{background-color:var(--blue-light);color:#fff;box-shadow:var(--shadow-2)}.selection-row-titles.svelte-1rytdbk{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 4fr 1fr 1fr;grid-gap:1rem;text-decoration:none;margin-bottom:1rem;box-shadow:var(--shadow-1);background-color:var(--darkGrey);color:#fff;font-weight:700;border-radius:5px;padding:16px}.person-avatar.svelte-1rytdbk{width:5rem;border-radius:var(--borderRadius)}@media screen and (max-width: 1000px){.dashboard-grid.svelte-1rytdbk{display:flex;flex-direction:column;margin-bottom:16px}.selection-row.svelte-1rytdbk{display:flex;flex-direction:column;align-items:flex-start}.selection-row-titles.svelte-1rytdbk{display:none}}",
  map: null
};
const Person = (0, import_index_af382e8c.c)(($$result, $$props, $$bindings, slots) => {
  let $personData, $$unsubscribe_personData;
  $$unsubscribe_personData = (0, import_index_af382e8c.a)(personData, (value) => $personData = value);
  $$result.css.add(css);
  $$unsubscribe_personData();
  return `${$$result.head += `${$$result.title = `<title>Nova - Person</title>`, ""}`, ""}

<section><h1>Person</h1>

	<div class="${"dashboard-grid svelte-1rytdbk"}"><div class="${"grid-item-full svelte-1rytdbk"}"><div class="${"selection-row-titles svelte-1rytdbk"}"><div class="${"row"}">Profile Image</div>
				<div class="${"row"}">URN</div>
				<div class="${"row"}">First Name</div>
				<div class="${"row"}">Last Name</div>
				<div class="${"row"}">Address</div>
				<div class="${"row"}">Postcode</div>
				<div class="${"row"}">DOB</div></div></div></div>

	${(0, import_index_af382e8c.b)($personData, (personDatas) => {
    return `<a href="${"#"}" class="${"card selection-row svelte-1rytdbk"}"><img class="${"person-avatar svelte-1rytdbk"}"${(0, import_index_af382e8c.f)("src", personDatas.profilePicture, 0)} alt="${"Person Icon"}">
			<div class="${"row"}">${(0, import_index_af382e8c.e)(personDatas.urn)}</div>
			<div class="${"row"}">${(0, import_index_af382e8c.e)(personDatas.firstName)}</div>
			<div class="${"row"}">${(0, import_index_af382e8c.e)(personDatas.lastName)}</div>
			<div class="${"row"}">${(0, import_index_af382e8c.e)(personDatas.address)}</div>
			<div class="${"row"}">${(0, import_index_af382e8c.e)(personDatas.postCode)}</div>
			<div class="${"row"}">${(0, import_index_af382e8c.e)(personDatas.dob)}</div>
		</a>`;
  })}
</section>`;
});
module.exports = __toCommonJS(stdin_exports);
