module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"@chakra-ui/core\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! urql */ \"urql\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme */ \"./src/theme.tsx\");\nvar _jsxFileName = \"/Users/DorinsMac/Desktop/Projects/Typescript React Project.nosync/client/src/pages/_app.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nconst client = Object(urql__WEBPACK_IMPORTED_MODULE_2__[\"createClient\"])({\n  url: 'http://localhost:4000/graphql',\n  fetchOptions: {\n    credentials: 'include'\n  },\n  requestPolicy: 'network-only'\n});\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return __jsx(urql__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n    value: client,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n    theme: _theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CSSReset\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 17\n    }\n  }), __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  }))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJjbGllbnQiLCJjcmVhdGVDbGllbnQiLCJ1cmwiLCJmZXRjaE9wdGlvbnMiLCJjcmVkZW50aWFscyIsInJlcXVlc3RQb2xpY3kiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBR0MseURBQVksQ0FBQztBQUN4QkMsS0FBRyxFQUFFLCtCQURtQjtBQUV4QkMsY0FBWSxFQUFFO0FBQ1ZDLGVBQVcsRUFBRTtBQURILEdBRlU7QUFLeEJDLGVBQWEsRUFBRTtBQUxTLENBQUQsQ0FBM0I7O0FBUUEsU0FBU0MsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQThDO0FBQzFDLFNBQ0ksTUFBQyw2Q0FBRDtBQUFVLFNBQUssRUFBRVIsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNkRBQUQ7QUFBZSxTQUFLLEVBQUVTLDhDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLFNBQUQsZUFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRkosQ0FESixDQURKO0FBUUg7O0FBRWNGLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgQ1NTUmVzZXQgfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnXG5pbXBvcnQgeyBQcm92aWRlciwgY3JlYXRlQ2xpZW50IH0gZnJvbSAndXJxbCdcbmltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZSdcblxuY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbCcsXG4gICAgZmV0Y2hPcHRpb25zOiB7XG4gICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgfSxcbiAgICByZXF1ZXN0UG9saWN5OiAnbmV0d29yay1vbmx5Jyxcbn0pXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogYW55KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFByb3ZpZGVyIHZhbHVlPXtjbGllbnR9PlxuICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAgICA8Q1NTUmVzZXQgLz5cbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/theme.tsx":
/*!***********************!*\
  !*** ./src/theme.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"@chakra-ui/core\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/DorinsMac/Desktop/Projects/Typescript React Project.nosync/client/src/theme.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst fonts = _objectSpread(_objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"theme\"].fonts), {}, {\n  mono: `'Menlo', monospace`\n});\n\nconst breakpoints = ['40em', '52em', '64em'];\n\nconst theme = _objectSpread(_objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"theme\"]), {}, {\n  colors: _objectSpread(_objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"theme\"].colors), {}, {\n    black: '#16161D'\n  }),\n  fonts,\n  breakpoints,\n  icons: _objectSpread(_objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"theme\"].icons), {}, {\n    logo: {\n      path: __jsx(\"svg\", {\n        width: \"3000\",\n        height: \"3163\",\n        viewBox: \"0 0 3000 3163\",\n        fill: \"none\",\n        xmlns: \"http://www.w3.org/2000/svg\",\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 9\n        }\n      }, __jsx(\"rect\", {\n        width: \"3000\",\n        height: \"3162.95\",\n        fill: \"none\",\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }\n      }), __jsx(\"path\", {\n        d: \"M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z\",\n        fill: \"currentColor\",\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }\n      })),\n      viewBox: '0 0 3000 3163'\n    }\n  })\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUudHN4P2NhNzYiXSwibmFtZXMiOlsiZm9udHMiLCJjaGFrcmFUaGVtZSIsIm1vbm8iLCJicmVha3BvaW50cyIsInRoZW1lIiwiY29sb3JzIiwiYmxhY2siLCJpY29ucyIsImxvZ28iLCJwYXRoIiwidmlld0JveCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsS0FBSyxtQ0FBUUMscURBQVcsQ0FBQ0QsS0FBcEI7QUFBMkJFLE1BQUksRUFBRztBQUFsQyxFQUFYOztBQUVBLE1BQU1DLFdBQVcsR0FBRyxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLENBQXBCOztBQUVBLE1BQU1DLEtBQUssbUNBQ05ILHFEQURNO0FBRVRJLFFBQU0sa0NBQ0RKLHFEQUFXLENBQUNJLE1BRFg7QUFFSkMsU0FBSyxFQUFFO0FBRkgsSUFGRztBQU1UTixPQU5TO0FBT1RHLGFBUFM7QUFRVEksT0FBSyxrQ0FDQU4scURBQVcsQ0FBQ00sS0FEWjtBQUVIQyxRQUFJLEVBQUU7QUFDSkMsVUFBSSxFQUNGO0FBQ0UsYUFBSyxFQUFDLE1BRFI7QUFFRSxjQUFNLEVBQUMsTUFGVDtBQUdFLGVBQU8sRUFBQyxlQUhWO0FBSUUsWUFBSSxFQUFDLE1BSlA7QUFLRSxhQUFLLEVBQUMsNEJBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU9FO0FBQU0sYUFBSyxFQUFDLE1BQVo7QUFBbUIsY0FBTSxFQUFDLFNBQTFCO0FBQW9DLFlBQUksRUFBQyxNQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUEYsRUFRRTtBQUNFLFNBQUMsRUFBQyxpSUFESjtBQUVFLFlBQUksRUFBQyxjQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFSRixDQUZFO0FBZ0JKQyxhQUFPLEVBQUU7QUFoQkw7QUFGSDtBQVJJLEVBQVg7O0FBK0JlTixvRUFBZiIsImZpbGUiOiIuL3NyYy90aGVtZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0aGVtZSBhcyBjaGFrcmFUaGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSdcblxuY29uc3QgZm9udHMgPSB7IC4uLmNoYWtyYVRoZW1lLmZvbnRzLCBtb25vOiBgJ01lbmxvJywgbW9ub3NwYWNlYCB9XG5cbmNvbnN0IGJyZWFrcG9pbnRzID0gWyc0MGVtJywgJzUyZW0nLCAnNjRlbSddXG5cbmNvbnN0IHRoZW1lID0ge1xuICAuLi5jaGFrcmFUaGVtZSxcbiAgY29sb3JzOiB7XG4gICAgLi4uY2hha3JhVGhlbWUuY29sb3JzLFxuICAgIGJsYWNrOiAnIzE2MTYxRCcsXG4gIH0sXG4gIGZvbnRzLFxuICBicmVha3BvaW50cyxcbiAgaWNvbnM6IHtcbiAgICAuLi5jaGFrcmFUaGVtZS5pY29ucyxcbiAgICBsb2dvOiB7XG4gICAgICBwYXRoOiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICB3aWR0aD1cIjMwMDBcIlxuICAgICAgICAgIGhlaWdodD1cIjMxNjNcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzAwMCAzMTYzXCJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgID5cbiAgICAgICAgICA8cmVjdCB3aWR0aD1cIjMwMDBcIiBoZWlnaHQ9XCIzMTYyLjk1XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTE0NzAuODkgMTQ0OC44MUwyMTcwIDI0ODguMTlIODIwVjcwNi4zOTJIMjE3MEwxNDcwLjg5IDE0NDguODFaTTE0MDguMjEgMTUxNS4zN0w5MDkuMTk2IDIwNDUuM1YyMzkzLjQ2SDE5OTguODRMMTQwOC4yMSAxNTE1LjM3WlwiXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICksXG4gICAgICB2aWV3Qm94OiAnMCAwIDMwMDAgMzE2MycsXG4gICAgfSxcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGhlbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/theme.tsx\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "@chakra-ui/core":
/*!**********************************!*\
  !*** external "@chakra-ui/core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2NvcmVcIj9lZTg2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBjaGFrcmEtdWkvY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/core\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "urql":
/*!***********************!*\
  !*** external "urql" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"urql\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cnFsXCI/YTY2NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ1cnFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJxbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///urql\n");

/***/ })

/******/ });