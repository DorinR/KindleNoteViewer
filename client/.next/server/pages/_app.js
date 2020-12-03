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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! urql */ \"urql\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _theme_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/box */ \"./src/theme/box.ts\");\nvar _jsxFileName = \"/Users/DorinsMac/Desktop/Projects/Kindle Notes Saver.nosync/Project/TypescriptReactGraphQL/client/src/pages/_app.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconsole.log('process.env.NEXT_PUBLIC_API_URL', process.env.NEXT_PUBLIC_API_URL);\nconst client = Object(urql__WEBPACK_IMPORTED_MODULE_2__[\"createClient\"])({\n  url: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/graphql',\n  fetchOptions: {\n    credentials: 'include'\n  },\n  requestPolicy: 'network-only'\n});\nconst theme = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"extendTheme\"])({\n  layerStyles: _objectSpread({}, _theme_box__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n});\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return __jsx(urql__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n    value: client,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ChakraProvider\"], {\n    theme: theme,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJjbGllbnQiLCJjcmVhdGVDbGllbnQiLCJ1cmwiLCJmZXRjaE9wdGlvbnMiLCJjcmVkZW50aWFscyIsInJlcXVlc3RQb2xpY3kiLCJ0aGVtZSIsImV4dGVuZFRoZW1lIiwibGF5ZXJTdHlsZXMiLCJib3hTdHlsZXMiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUNBQVosRUFBK0NDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBM0Q7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLHlEQUFZLENBQUM7QUFDeEJDLEtBQUcsRUFBRUwsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG1CQUFaLElBQW1DLCtCQURoQjtBQUV4QkksY0FBWSxFQUFFO0FBQ1ZDLGVBQVcsRUFBRTtBQURILEdBRlU7QUFLeEJDLGVBQWEsRUFBRTtBQUxTLENBQUQsQ0FBM0I7QUFRQSxNQUFNQyxLQUFLLEdBQUdDLG9FQUFXLENBQUM7QUFDdEJDLGFBQVcsb0JBQ0pDLGtEQURJO0FBRFcsQ0FBRCxDQUF6Qjs7QUFNQSxTQUFTQyxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBOEM7QUFDMUMsU0FDSSxNQUFDLDZDQUFEO0FBQVUsU0FBSyxFQUFFWixNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrREFBRDtBQUFnQixTQUFLLEVBQUVNLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFNBQUQsZUFBZU0sU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREosQ0FESixDQURKO0FBT0g7O0FBRWNGLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIsIGV4dGVuZFRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IFByb3ZpZGVyLCBjcmVhdGVDbGllbnQgfSBmcm9tICd1cnFsJ1xuaW1wb3J0IGJveFN0eWxlcyBmcm9tICcuLi90aGVtZS9ib3gnXG5cbmNvbnNvbGUubG9nKCdwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMJywgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTClcbmNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gICAgdXJsOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbCcsXG4gICAgZmV0Y2hPcHRpb25zOiB7XG4gICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgfSxcbiAgICByZXF1ZXN0UG9saWN5OiAnbmV0d29yay1vbmx5Jyxcbn0pXG5cbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xuICAgIGxheWVyU3R5bGVzOiB7XG4gICAgICAgIC4uLmJveFN0eWxlcyxcbiAgICB9LFxufSlcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBhbnkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UHJvdmlkZXIgdmFsdWU9e2NsaWVudH0+XG4gICAgICAgICAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/theme/box.ts":
/*!**************************!*\
  !*** ./src/theme/box.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst customBox = {\n  mb: 5,\n  p: 3,\n  borderLeftWidth: '10px',\n  borderColor: '#FC8181',\n  backgroundColor: '#EDF2F7'\n};\n\nconst customBox_dark = _objectSpread({}, customBox);\n\nconst boxStyles = {\n  customBox,\n  customBox_dark\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (boxStyles);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvYm94LnRzP2M5MTIiXSwibmFtZXMiOlsiY3VzdG9tQm94IiwibWIiLCJwIiwiYm9yZGVyTGVmdFdpZHRoIiwiYm9yZGVyQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdXN0b21Cb3hfZGFyayIsImJveFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU1BLFNBQVMsR0FBRztBQUNkQyxJQUFFLEVBQUUsQ0FEVTtBQUVkQyxHQUFDLEVBQUUsQ0FGVztBQUdkQyxpQkFBZSxFQUFFLE1BSEg7QUFJZEMsYUFBVyxFQUFFLFNBSkM7QUFLZEMsaUJBQWUsRUFBRTtBQUxILENBQWxCOztBQVFBLE1BQU1DLGNBQWMscUJBQ2JOLFNBRGEsQ0FBcEI7O0FBSUEsTUFBTU8sU0FBUyxHQUFHO0FBQUVQLFdBQUY7QUFBYU07QUFBYixDQUFsQjtBQUVlQyx3RUFBZiIsImZpbGUiOiIuL3NyYy90aGVtZS9ib3gudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjdXN0b21Cb3ggPSB7XG4gICAgbWI6IDUsXG4gICAgcDogMyxcbiAgICBib3JkZXJMZWZ0V2lkdGg6ICcxMHB4JyxcbiAgICBib3JkZXJDb2xvcjogJyNGQzgxODEnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNFREYyRjcnLFxufVxuXG5jb25zdCBjdXN0b21Cb3hfZGFyayA9IHtcbiAgICAuLi5jdXN0b21Cb3gsXG59XG5cbmNvbnN0IGJveFN0eWxlcyA9IHsgY3VzdG9tQm94LCBjdXN0b21Cb3hfZGFyayB9XG5cbmV4cG9ydCBkZWZhdWx0IGJveFN0eWxlc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/theme/box.ts\n");

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