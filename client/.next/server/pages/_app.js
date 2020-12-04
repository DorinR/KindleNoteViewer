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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! urql */ \"urql\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _theme_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/box */ \"./src/theme/box.ts\");\nvar _jsxFileName = \"/Users/DorinsMac/Desktop/Projects/Kindle Notes Saver.nosync/Project/TypescriptReactGraphQL/client/src/pages/_app.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconsole.log('process.env.NEXT_PUBLIC_API_URL', process.env.NEXT_PUBLIC_API_URL);\nconst client = Object(urql__WEBPACK_IMPORTED_MODULE_2__[\"createClient\"])({\n  url: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/graphql',\n  fetchOptions: {\n    credentials: 'include'\n  },\n  requestPolicy: 'network-only'\n});\nconst theme = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"extendTheme\"])({\n  layerStyles: _objectSpread(_objectSpread({}, _theme_box__WEBPACK_IMPORTED_MODULE_3__[\"titleAuthorBoxStyles\"]), _theme_box__WEBPACK_IMPORTED_MODULE_3__[\"highlightBoxStyles\"])\n});\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return __jsx(urql__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n    value: client,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ChakraProvider\"], {\n    theme: theme,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJjbGllbnQiLCJjcmVhdGVDbGllbnQiLCJ1cmwiLCJmZXRjaE9wdGlvbnMiLCJjcmVkZW50aWFscyIsInJlcXVlc3RQb2xpY3kiLCJ0aGVtZSIsImV4dGVuZFRoZW1lIiwibGF5ZXJTdHlsZXMiLCJ0aXRsZUF1dGhvckJveFN0eWxlcyIsImhpZ2hsaWdodEJveFN0eWxlcyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQ0FBWixFQUErQ0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG1CQUEzRDtBQUNBLE1BQU1DLE1BQU0sR0FBR0MseURBQVksQ0FBQztBQUN4QkMsS0FBRyxFQUFFTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsbUJBQVosSUFBbUMsK0JBRGhCO0FBRXhCSSxjQUFZLEVBQUU7QUFDVkMsZUFBVyxFQUFFO0FBREgsR0FGVTtBQUt4QkMsZUFBYSxFQUFFO0FBTFMsQ0FBRCxDQUEzQjtBQVFBLE1BQU1DLEtBQUssR0FBR0Msb0VBQVcsQ0FBQztBQUN0QkMsYUFBVyxrQ0FDSkMsK0RBREksR0FFSkMsNkRBRkk7QUFEVyxDQUFELENBQXpCOztBQU9BLFNBQVNDLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUE4QztBQUMxQyxTQUNJLE1BQUMsNkNBQUQ7QUFBVSxTQUFLLEVBQUViLE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtEQUFEO0FBQWdCLFNBQUssRUFBRU0sS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsU0FBRCxlQUFlTyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FESixDQURKLENBREo7QUFPSDs7QUFFY0Ysb0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFrcmFQcm92aWRlciwgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgUHJvdmlkZXIsIGNyZWF0ZUNsaWVudCB9IGZyb20gJ3VycWwnXG5pbXBvcnQgeyB0aXRsZUF1dGhvckJveFN0eWxlcywgaGlnaGxpZ2h0Qm94U3R5bGVzIH0gZnJvbSAnLi4vdGhlbWUvYm94J1xuXG5jb25zb2xlLmxvZygncHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCcsIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwpXG5jb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICAgIHVybDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWwnLFxuICAgIGZldGNoT3B0aW9uczoge1xuICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgIH0sXG4gICAgcmVxdWVzdFBvbGljeTogJ25ldHdvcmstb25seScsXG59KVxuXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcbiAgICBsYXllclN0eWxlczoge1xuICAgICAgICAuLi50aXRsZUF1dGhvckJveFN0eWxlcyxcbiAgICAgICAgLi4uaGlnaGxpZ2h0Qm94U3R5bGVzLFxuICAgIH0sXG59KVxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IGFueSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxQcm92aWRlciB2YWx1ZT17Y2xpZW50fT5cbiAgICAgICAgICAgIDxDaGFrcmFQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/theme/box.ts":
/*!**************************!*\
  !*** ./src/theme/box.ts ***!
  \**************************/
/*! exports provided: titleAuthorBoxStyles, highlightBoxStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"titleAuthorBoxStyles\", function() { return titleAuthorBoxStyles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"highlightBoxStyles\", function() { return highlightBoxStyles; });\n/* harmony import */ var _boxFragments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boxFragments */ \"./src/theme/boxFragments.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // titleAuthorBoxStyles\n\nconst titleAuthorBox = _objectSpread(_objectSpread(_objectSpread({}, _boxFragments__WEBPACK_IMPORTED_MODULE_0__[\"boxRoundedCornersRight\"]), _boxFragments__WEBPACK_IMPORTED_MODULE_0__[\"borderBgLight\"]), {}, {\n  mb: 5,\n  p: 3,\n  borderLeftWidth: '10px'\n});\n\nconst titleAuthorBox_dark = _objectSpread(_objectSpread({}, titleAuthorBox), _boxFragments__WEBPACK_IMPORTED_MODULE_0__[\"borderBgDark\"]);\n\nconst titleAuthorBoxStyles = {\n  titleAuthorBox,\n  titleAuthorBox_dark\n}; // individualHighlightBoxStyles\n\nconst highlightBox = _objectSpread(_objectSpread(_objectSpread({}, _boxFragments__WEBPACK_IMPORTED_MODULE_0__[\"boxRoundedCornersRight\"]), _boxFragments__WEBPACK_IMPORTED_MODULE_0__[\"borderBgLight\"]), {}, {\n  borderLeftWidth: '4px'\n});\n\nconst highlightBox_dark = _objectSpread(_objectSpread({}, highlightBox), _boxFragments__WEBPACK_IMPORTED_MODULE_0__[\"borderBgDark\"]);\n\nconst highlightBoxStyles = {\n  highlightBox,\n  highlightBox_dark\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvYm94LnRzP2M5MTIiXSwibmFtZXMiOlsidGl0bGVBdXRob3JCb3giLCJib3hSb3VuZGVkQ29ybmVyc1JpZ2h0IiwiYm9yZGVyQmdMaWdodCIsIm1iIiwicCIsImJvcmRlckxlZnRXaWR0aCIsInRpdGxlQXV0aG9yQm94X2RhcmsiLCJib3JkZXJCZ0RhcmsiLCJ0aXRsZUF1dGhvckJveFN0eWxlcyIsImhpZ2hsaWdodEJveCIsImhpZ2hsaWdodEJveF9kYXJrIiwiaGlnaGxpZ2h0Qm94U3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0NBRUE7O0FBQ0EsTUFBTUEsY0FBYyxpREFDYkMsb0VBRGEsR0FFYkMsMkRBRmE7QUFHaEJDLElBQUUsRUFBRSxDQUhZO0FBSWhCQyxHQUFDLEVBQUUsQ0FKYTtBQUtoQkMsaUJBQWUsRUFBRTtBQUxELEVBQXBCOztBQVFBLE1BQU1DLG1CQUFtQixtQ0FDbEJOLGNBRGtCLEdBRWxCTywwREFGa0IsQ0FBekI7O0FBS08sTUFBTUMsb0JBQW9CLEdBQUc7QUFBRVIsZ0JBQUY7QUFBa0JNO0FBQWxCLENBQTdCLEMsQ0FFUDs7QUFDQSxNQUFNRyxZQUFZLGlEQUNYUixvRUFEVyxHQUVYQywyREFGVztBQUdkRyxpQkFBZSxFQUFFO0FBSEgsRUFBbEI7O0FBTUEsTUFBTUssaUJBQWlCLG1DQUNoQkQsWUFEZ0IsR0FFaEJGLDBEQUZnQixDQUF2Qjs7QUFLTyxNQUFNSSxrQkFBa0IsR0FBRztBQUFFRixjQUFGO0FBQWdCQztBQUFoQixDQUEzQiIsImZpbGUiOiIuL3NyYy90aGVtZS9ib3gudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib3hSb3VuZGVkQ29ybmVyc1JpZ2h0LCBib3JkZXJCZ0xpZ2h0LCBib3JkZXJCZ0RhcmsgfSBmcm9tICcuL2JveEZyYWdtZW50cydcblxuLy8gdGl0bGVBdXRob3JCb3hTdHlsZXNcbmNvbnN0IHRpdGxlQXV0aG9yQm94ID0ge1xuICAgIC4uLmJveFJvdW5kZWRDb3JuZXJzUmlnaHQsXG4gICAgLi4uYm9yZGVyQmdMaWdodCxcbiAgICBtYjogNSxcbiAgICBwOiAzLFxuICAgIGJvcmRlckxlZnRXaWR0aDogJzEwcHgnLFxufVxuXG5jb25zdCB0aXRsZUF1dGhvckJveF9kYXJrID0ge1xuICAgIC4uLnRpdGxlQXV0aG9yQm94LFxuICAgIC4uLmJvcmRlckJnRGFyayxcbn1cblxuZXhwb3J0IGNvbnN0IHRpdGxlQXV0aG9yQm94U3R5bGVzID0geyB0aXRsZUF1dGhvckJveCwgdGl0bGVBdXRob3JCb3hfZGFyayB9XG5cbi8vIGluZGl2aWR1YWxIaWdobGlnaHRCb3hTdHlsZXNcbmNvbnN0IGhpZ2hsaWdodEJveCA9IHtcbiAgICAuLi5ib3hSb3VuZGVkQ29ybmVyc1JpZ2h0LFxuICAgIC4uLmJvcmRlckJnTGlnaHQsXG4gICAgYm9yZGVyTGVmdFdpZHRoOiAnNHB4Jyxcbn1cblxuY29uc3QgaGlnaGxpZ2h0Qm94X2RhcmsgPSB7XG4gICAgLi4uaGlnaGxpZ2h0Qm94LFxuICAgIC4uLmJvcmRlckJnRGFyayxcbn1cblxuZXhwb3J0IGNvbnN0IGhpZ2hsaWdodEJveFN0eWxlcyA9IHsgaGlnaGxpZ2h0Qm94LCBoaWdobGlnaHRCb3hfZGFyayB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/theme/box.ts\n");

/***/ }),

/***/ "./src/theme/boxFragments.ts":
/*!***********************************!*\
  !*** ./src/theme/boxFragments.ts ***!
  \***********************************/
/*! exports provided: boxRoundedCornersRight, borderBgLight, borderBgDark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"boxRoundedCornersRight\", function() { return boxRoundedCornersRight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"borderBgLight\", function() { return borderBgLight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"borderBgDark\", function() { return borderBgDark; });\nconst boxRoundedCornersRight = {\n  borderTopRightRadius: 'lg',\n  borderBottomRightRadius: 'lg'\n};\nconst borderBgLight = {\n  borderColor: 'red.300',\n  backgroundColor: 'gray.100'\n};\nconst borderBgDark = {\n  borderColor: 'red.500',\n  backgroundColor: 'gray.600'\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvYm94RnJhZ21lbnRzLnRzPzRkODIiXSwibmFtZXMiOlsiYm94Um91bmRlZENvcm5lcnNSaWdodCIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJib3JkZXJCZ0xpZ2h0IiwiYm9yZGVyQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJCZ0RhcmsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUEsc0JBQXNCLEdBQUc7QUFDbENDLHNCQUFvQixFQUFFLElBRFk7QUFFbENDLHlCQUF1QixFQUFFO0FBRlMsQ0FBL0I7QUFLQSxNQUFNQyxhQUFhLEdBQUc7QUFDekJDLGFBQVcsRUFBRSxTQURZO0FBRXpCQyxpQkFBZSxFQUFFO0FBRlEsQ0FBdEI7QUFLQSxNQUFNQyxZQUFZLEdBQUc7QUFDeEJGLGFBQVcsRUFBRSxTQURXO0FBRXhCQyxpQkFBZSxFQUFFO0FBRk8sQ0FBckIiLCJmaWxlIjoiLi9zcmMvdGhlbWUvYm94RnJhZ21lbnRzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGJveFJvdW5kZWRDb3JuZXJzUmlnaHQgPSB7XG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6ICdsZycsXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6ICdsZycsXG59XG5cbmV4cG9ydCBjb25zdCBib3JkZXJCZ0xpZ2h0ID0ge1xuICAgIGJvcmRlckNvbG9yOiAncmVkLjMwMCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheS4xMDAnLFxufVxuXG5leHBvcnQgY29uc3QgYm9yZGVyQmdEYXJrID0ge1xuICAgIGJvcmRlckNvbG9yOiAncmVkLjUwMCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheS42MDAnLFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/theme/boxFragments.ts\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCI/M2I2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAY2hha3JhLXVpL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/react\n");

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