/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/frontend/app.tsx":
/*!******************************!*\
  !*** ./src/frontend/app.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.App = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var component_1 = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
// import { Home } from './components/home'
// import { Games } from './components/games/index'
// import { MyAccount } from './components/my-account/index'
var fallback = React.createElement("div", null, "loading...");
var Home = component_1.default(function () { return Promise.resolve().then(function () { return __webpack_require__(/*! ./components/home */ "./src/frontend/components/home/index.tsx"); }); }, { fallback: fallback });
var Games = component_1.default(function () { return Promise.resolve().then(function () { return __webpack_require__(/*! ./components/games */ "./src/frontend/components/games/index.ts"); }); }, { fallback: fallback });
var MyAccount = component_1.default(function () { return Promise.resolve().then(function () { return __webpack_require__(/*! ./components/my-account */ "./src/frontend/components/my-account/index.tsx"); }); }, { fallback: fallback });
var App = function () {
    return React.createElement(React.Fragment, null,
        React.createElement("nav", null,
            React.createElement(react_router_dom_1.Link, { to: "/" }, "Home"),
            " |",
            React.createElement(react_router_dom_1.Link, { to: "/games" }, "Games"),
            " |",
            React.createElement(react_router_dom_1.Link, { to: "/my-account" }, "My Account")),
        React.createElement(react_router_dom_1.Switch, null,
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Home }),
            React.createElement(react_router_dom_1.Route, { path: "/games", component: Games }),
            React.createElement(react_router_dom_1.Route, { path: "/my-account", component: MyAccount })));
};
exports.App = App;


/***/ }),

/***/ "./src/frontend/components/games/games.tsx":
/*!*************************************************!*\
  !*** ./src/frontend/components/games/games.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Games = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Games = function (_a) {
    var games = _a.games;
    return React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Games"),
        React.createElement("ul", null, games.map(function (game) { return React.createElement("li", { key: game.id }, game.title); })));
};
exports.Games = Games;


/***/ }),

/***/ "./src/frontend/components/games/index.ts":
/*!************************************************!*\
  !*** ./src/frontend/components/games/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Games = void 0;
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var actions_1 = __webpack_require__(/*! ../../redux-components/actions */ "./src/frontend/redux-components/actions.ts");
var games_1 = __webpack_require__(/*! ./games */ "./src/frontend/components/games/games.tsx");
var mapStateToProps = function (state) { return ({
    games: state.games
}); };
var mapDispatchToProps = function (dispatch) { return ({
    addGame: function (game) { return dispatch(actions_1.addGame(game)); }
}); };
exports.Games = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(games_1.Games);


/***/ }),

/***/ "./src/frontend/components/home/index.tsx":
/*!************************************************!*\
  !*** ./src/frontend/components/home/index.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Home = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Home = function () {
    return React.createElement("h1", null, "Home");
};
exports.Home = Home;


/***/ }),

/***/ "./src/frontend/components/my-account/index.tsx":
/*!******************************************************!*\
  !*** ./src/frontend/components/my-account/index.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MyAccount = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var MyAccount = function () {
    return React.createElement("h1", null, "My Account");
};
exports.MyAccount = MyAccount;


/***/ }),

/***/ "./src/frontend/index.tsx":
/*!********************************!*\
  !*** ./src/frontend/index.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var store_1 = __webpack_require__(/*! ./redux-components/store */ "./src/frontend/redux-components/store.ts");
var app_1 = __webpack_require__(/*! ./app */ "./src/frontend/app.tsx");
var mountNode = document.getElementById('mountNode');
ReactDOM.hydrate(React.createElement(react_redux_1.Provider, { store: store_1.store },
    React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(app_1.App, null))), mountNode);


/***/ }),

/***/ "./src/frontend/redux-components/action-types.ts":
/*!*******************************************************!*\
  !*** ./src/frontend/redux-components/action-types.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ADD_GAME = void 0;
exports.ADD_GAME = 'ADD_GAME';


/***/ }),

/***/ "./src/frontend/redux-components/actions.ts":
/*!**************************************************!*\
  !*** ./src/frontend/redux-components/actions.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addGame = void 0;
var action_types_1 = __webpack_require__(/*! ./action-types */ "./src/frontend/redux-components/action-types.ts");
var addGame = function (game) { return ({ type: action_types_1.ADD_GAME, payload: game }); };
exports.addGame = addGame;


/***/ }),

/***/ "./src/frontend/redux-components/root-reducer.ts":
/*!*******************************************************!*\
  !*** ./src/frontend/redux-components/root-reducer.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rootReducer = void 0;
var action_types_1 = __webpack_require__(/*! ./action-types */ "./src/frontend/redux-components/action-types.ts");
var initialState = {
    games: [
        { id: 1, title: "Gonzo's Quest" },
        { id: 2, title: "Divine Fortune" }
    ]
};
var rootReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case action_types_1.ADD_GAME:
            return __assign(__assign({}, state), { articles: __spreadArray(__spreadArray([], state.games), [action.payload]) });
        default:
            return state;
    }
};
exports.rootReducer = rootReducer;


/***/ }),

/***/ "./src/frontend/redux-components/store.ts":
/*!************************************************!*\
  !*** ./src/frontend/redux-components/store.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.store = void 0;
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var root_reducer_1 = __webpack_require__(/*! ./root-reducer */ "./src/frontend/redux-components/root-reducer.ts");
exports.store = redux_1.createStore(root_reducer_1.rootReducer);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/frontend/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.57adb310391da5bf31f6.js.map