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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"titleAuthorBoxStyles\", function() { return titleAuthorBoxStyles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"highlightBoxStyles\", function() { return highlightBoxStyles; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// titleAuthorBoxStyles\nconst titleAuthorBox = {\n  mb: 5,\n  p: 3,\n  borderLeftWidth: '10px',\n  borderColor: 'red.300',\n  backgroundColor: 'gray.100',\n  borderTopRightRadius: 'lg',\n  borderBottomRightRadius: 'lg'\n};\n\nconst titleAuthorBox_dark = _objectSpread(_objectSpread({}, titleAuthorBox), {}, {\n  borderColor: 'red.500',\n  backgroundColor: 'gray.600'\n});\n\nconst titleAuthorBoxStyles = {\n  titleAuthorBox,\n  titleAuthorBox_dark\n}; // individualHighlightBoxStyles\n\nconst highlightBox = {\n  borderLeftWidth: '4px',\n  borderColor: 'red.300',\n  backgroundColor: 'gray.100',\n  borderTopRightRadius: 'lg',\n  borderBottomRightRadius: 'lg'\n};\n\nconst highlightBox_dark = _objectSpread(_objectSpread({}, highlightBox), {}, {\n  borderColor: 'red.500',\n  backgroundColor: 'gray.600'\n});\n\nconst highlightBoxStyles = {\n  highlightBox,\n  highlightBox_dark\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvYm94LnRzP2M5MTIiXSwibmFtZXMiOlsidGl0bGVBdXRob3JCb3giLCJtYiIsInAiLCJib3JkZXJMZWZ0V2lkdGgiLCJib3JkZXJDb2xvciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJ0aXRsZUF1dGhvckJveF9kYXJrIiwidGl0bGVBdXRob3JCb3hTdHlsZXMiLCJoaWdobGlnaHRCb3giLCJoaWdobGlnaHRCb3hfZGFyayIsImhpZ2hsaWdodEJveFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxNQUFNQSxjQUFjLEdBQUc7QUFDbkJDLElBQUUsRUFBRSxDQURlO0FBRW5CQyxHQUFDLEVBQUUsQ0FGZ0I7QUFHbkJDLGlCQUFlLEVBQUUsTUFIRTtBQUluQkMsYUFBVyxFQUFFLFNBSk07QUFLbkJDLGlCQUFlLEVBQUUsVUFMRTtBQU1uQkMsc0JBQW9CLEVBQUUsSUFOSDtBQU9uQkMseUJBQXVCLEVBQUU7QUFQTixDQUF2Qjs7QUFVQSxNQUFNQyxtQkFBbUIsbUNBQ2xCUixjQURrQjtBQUVyQkksYUFBVyxFQUFFLFNBRlE7QUFHckJDLGlCQUFlLEVBQUU7QUFISSxFQUF6Qjs7QUFNTyxNQUFNSSxvQkFBb0IsR0FBRztBQUFFVCxnQkFBRjtBQUFrQlE7QUFBbEIsQ0FBN0IsQyxDQUVQOztBQUNBLE1BQU1FLFlBQVksR0FBRztBQUNqQlAsaUJBQWUsRUFBRSxLQURBO0FBRWpCQyxhQUFXLEVBQUUsU0FGSTtBQUdqQkMsaUJBQWUsRUFBRSxVQUhBO0FBSWpCQyxzQkFBb0IsRUFBRSxJQUpMO0FBS2pCQyx5QkFBdUIsRUFBRTtBQUxSLENBQXJCOztBQVFBLE1BQU1JLGlCQUFpQixtQ0FDaEJELFlBRGdCO0FBRW5CTixhQUFXLEVBQUUsU0FGTTtBQUduQkMsaUJBQWUsRUFBRTtBQUhFLEVBQXZCOztBQU1PLE1BQU1PLGtCQUFrQixHQUFHO0FBQUVGLGNBQUY7QUFBZ0JDO0FBQWhCLENBQTNCIiwiZmlsZSI6Ii4vc3JjL3RoZW1lL2JveC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRpdGxlQXV0aG9yQm94U3R5bGVzXG5jb25zdCB0aXRsZUF1dGhvckJveCA9IHtcbiAgICBtYjogNSxcbiAgICBwOiAzLFxuICAgIGJvcmRlckxlZnRXaWR0aDogJzEwcHgnLFxuICAgIGJvcmRlckNvbG9yOiAncmVkLjMwMCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheS4xMDAnLFxuICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAnbGcnLFxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAnbGcnLFxufVxuXG5jb25zdCB0aXRsZUF1dGhvckJveF9kYXJrID0ge1xuICAgIC4uLnRpdGxlQXV0aG9yQm94LFxuICAgIGJvcmRlckNvbG9yOiAncmVkLjUwMCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheS42MDAnLFxufVxuXG5leHBvcnQgY29uc3QgdGl0bGVBdXRob3JCb3hTdHlsZXMgPSB7IHRpdGxlQXV0aG9yQm94LCB0aXRsZUF1dGhvckJveF9kYXJrIH1cblxuLy8gaW5kaXZpZHVhbEhpZ2hsaWdodEJveFN0eWxlc1xuY29uc3QgaGlnaGxpZ2h0Qm94ID0ge1xuICAgIGJvcmRlckxlZnRXaWR0aDogJzRweCcsXG4gICAgYm9yZGVyQ29sb3I6ICdyZWQuMzAwJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5LjEwMCcsXG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6ICdsZycsXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6ICdsZycsXG59XG5cbmNvbnN0IGhpZ2hsaWdodEJveF9kYXJrID0ge1xuICAgIC4uLmhpZ2hsaWdodEJveCxcbiAgICBib3JkZXJDb2xvcjogJ3JlZC41MDAnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXkuNjAwJyxcbn1cblxuZXhwb3J0IGNvbnN0IGhpZ2hsaWdodEJveFN0eWxlcyA9IHsgaGlnaGxpZ2h0Qm94LCBoaWdobGlnaHRCb3hfZGFyayB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/theme/box.ts\n");

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