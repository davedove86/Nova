const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-256x256.png","apple-touch-icon.png","browserconfig.xml","css/normalise.css","css/style.css","favicon-16x16.png","favicon-32x32.png","favicon.ico","img/face-1.png","img/logo.png","img/person/1.jpeg","js/script.js","mstile-150x150.png","safari-pinned-tab.svg","site.webmanifest"]),
	_: {
		mime: {".png":"image/png",".xml":"application/xml",".css":"text/css",".ico":"image/vnd.microsoft.icon",".jpeg":"image/jpeg",".js":"application/javascript",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
		entry: {"file":"start-ebf1538d.js","js":["start-ebf1538d.js","chunks/vendor-dd0e2a05.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js'))
		],
		routes: [
			{
				type: 'page',
				key: "",
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				key: "premises",
				pattern: /^\/premises\/?$/,
				params: null,
				path: "/premises",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				key: "settings",
				pattern: /^\/settings\/?$/,
				params: null,
				path: "/settings",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				key: "reports",
				pattern: /^\/reports\/?$/,
				params: null,
				path: "/reports",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				key: "person",
				pattern: /^\/person\/?$/,
				params: null,
				path: "/person",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				key: "tasks",
				pattern: /^\/tasks\/?$/,
				params: null,
				path: "/tasks",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				key: "help",
				pattern: /^\/help\/?$/,
				params: null,
				path: "/help",
				shadow: null,
				a: [0,8],
				b: [1]
			}
		]
	}
});
