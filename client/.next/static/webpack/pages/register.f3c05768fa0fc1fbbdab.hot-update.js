webpackHotUpdate_N_E("pages/register",{

/***/ "./src/pages/register.tsx":
/*!********************************!*\
  !*** ./src/pages/register.tsx ***!
  \********************************/
/*! exports provided: Register, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Register\", function() { return Register; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Wrapper */ \"./src/components/Wrapper.tsx\");\n/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/InputField */ \"./src/components/InputField.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/DorinsMac/Desktop/Projects/Typescript React Project.nosync/client/src/pages/register.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\nvar Register = function Register(_ref) {\n  _s();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_ref);\n\n  var _useRegisterMutation = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_9__[\"useRegisterMutation\"])(),\n      _useRegisterMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useRegisterMutation, 2),\n      register = _useRegisterMutation2[1];\n\n  return __jsx(_components_Wrapper__WEBPACK_IMPORTED_MODULE_7__[\"Wrapper\"], {\n    variant: \"regular\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_5__[\"Formik\"], {\n    initialValues: {\n      username: '',\n      password: ''\n    },\n    onSubmit: /*#__PURE__*/function () {\n      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {\n        var response;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return register(values);\n\n              case 2:\n                response = _context.sent;\n                console.log(response);\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }, function (_ref3) {\n    var isSubmitting = _ref3.isSubmitting;\n    return __jsx(formik__WEBPACK_IMPORTED_MODULE_5__[\"Form\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 21\n      }\n    }, __jsx(_components_InputField__WEBPACK_IMPORTED_MODULE_8__[\"InputField\"], {\n      name: \"username\",\n      label: \"username\",\n      placeholder: \"username\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 25\n      }\n    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Box\"], {\n      mt: 4,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 25\n      }\n    }, __jsx(_components_InputField__WEBPACK_IMPORTED_MODULE_8__[\"InputField\"], {\n      name: \"password\",\n      label: \"password\",\n      placeholder: \"password\",\n      type: \"password\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 29\n      }\n    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Button\"], {\n      mt: 4,\n      isLoading: isSubmitting,\n      variantColor: \"teal\",\n      type: \"submit\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 25\n      }\n    }, \"register\"));\n  }));\n};\n\n_s(Register, \"mYy7lIdnWBmFP2V+FDbrcK/cEwQ=\", false, function () {\n  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_9__[\"useRegisterMutation\"]];\n});\n\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\n\nvar _c;\n\n$RefreshReg$(_c, \"Register\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLnRzeD9hNjdmIl0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwidXNlUmVnaXN0ZXJNdXRhdGlvbiIsInJlZ2lzdGVyIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInZhbHVlcyIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImlzU3VibWl0dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSU8sSUFBTUEsUUFBaUMsR0FBRyxTQUFwQ0EsUUFBb0MsT0FBUTtBQUFBOztBQUFBOztBQUFBLDZCQUNoQ0MsOEVBQW1CLEVBRGE7QUFBQTtBQUFBLE1BQzVDQyxRQUQ0Qzs7QUFHckQsU0FDSSxNQUFDLDJEQUFEO0FBQVMsV0FBTyxFQUFDLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDZDQUFEO0FBQ0ksaUJBQWEsRUFBRTtBQUFFQyxjQUFRLEVBQUUsRUFBWjtBQUFnQkMsY0FBUSxFQUFFO0FBQTFCLEtBRG5CO0FBRUksWUFBUTtBQUFBLG1NQUFFLGlCQUFPQyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ2lCSCxRQUFRLENBQUNHLE1BQUQsQ0FEekI7O0FBQUE7QUFDQUMsd0JBREE7QUFFTkMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaOztBQUZNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUs7QUFBQSxRQUFHRyxZQUFILFNBQUdBLFlBQUg7QUFBQSxXQUNHLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsaUVBQUQ7QUFBWSxVQUFJLEVBQUMsVUFBakI7QUFBNEIsV0FBSyxFQUFDLFVBQWxDO0FBQTZDLGlCQUFXLEVBQUMsVUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBRUksTUFBQyxtREFBRDtBQUFLLFFBQUUsRUFBRSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLGlFQUFEO0FBQVksVUFBSSxFQUFDLFVBQWpCO0FBQTRCLFdBQUssRUFBQyxVQUFsQztBQUE2QyxpQkFBVyxFQUFDLFVBQXpEO0FBQW9FLFVBQUksRUFBQyxVQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FGSixFQUtJLE1BQUMsc0RBQUQ7QUFBUSxRQUFFLEVBQUUsQ0FBWjtBQUFlLGVBQVMsRUFBRUEsWUFBMUI7QUFBd0Msa0JBQVksRUFBQyxNQUFyRDtBQUE0RCxVQUFJLEVBQUMsUUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSixDQURIO0FBQUEsR0FOTCxDQURKLENBREo7QUFzQkgsQ0F6Qk07O0dBQU1ULFE7VUFDWUMsc0U7OztLQURaRCxRO0FBMkJFQSx1RUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9yZWdpc3Rlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGb3JtLCBGb3JtaWsgfSBmcm9tICdmb3JtaWsnXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSdcbmltcG9ydCB7IFdyYXBwZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1dyYXBwZXInXG5pbXBvcnQgeyBJbnB1dEZpZWxkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9JbnB1dEZpZWxkJ1xuaW1wb3J0IHsgdXNlUmVnaXN0ZXJNdXRhdGlvbiB9IGZyb20gJy4uL2dlbmVyYXRlZC9ncmFwaHFsJ1xuXG5pbnRlcmZhY2UgcmVnaXN0ZXJQcm9wcyB7fVxuXG5leHBvcnQgY29uc3QgUmVnaXN0ZXI6IFJlYWN0LkZDPHJlZ2lzdGVyUHJvcHM+ID0gKHt9KSA9PiB7XG4gICAgY29uc3QgWywgcmVnaXN0ZXJdID0gdXNlUmVnaXN0ZXJNdXRhdGlvbigpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcHBlciB2YXJpYW50PSdyZWd1bGFyJz5cbiAgICAgICAgICAgIDxGb3JtaWtcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHVzZXJuYW1lOiAnJywgcGFzc3dvcmQ6ICcnIH19XG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZWdpc3Rlcih2YWx1ZXMpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIHsoeyBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkIG5hbWU9J3VzZXJuYW1lJyBsYWJlbD0ndXNlcm5hbWUnIHBsYWNlaG9sZGVyPSd1c2VybmFtZScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggbXQ9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkIG5hbWU9J3Bhc3N3b3JkJyBsYWJlbD0ncGFzc3dvcmQnIHBsYWNlaG9sZGVyPSdwYXNzd29yZCcgdHlwZT0ncGFzc3dvcmQnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbXQ9ezR9IGlzTG9hZGluZz17aXNTdWJtaXR0aW5nfSB2YXJpYW50Q29sb3I9J3RlYWwnIHR5cGU9J3N1Ym1pdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvRm9ybWlrPlxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/register.tsx\n");

/***/ })

})