"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Form/index.js":
/*!**********************************!*\
  !*** ./components/Form/index.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ \"./helpers/index.js\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.scss */ \"./components/Form/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Form = function(param) {\n    var inputValue = param.inputValue, setInputValue = param.setInputValue, setFine = param.setFine;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), hint = ref[0], setHint = ref[1];\n    var onChangeHandler = function(e) {\n        var value = e.target.value;\n        setInputValue(value);\n        /* Если длина согласно ТЗ вычислим контрольный разряд */ if (value.length === 19 || value.length === 24) {\n            setHint(value + (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.calculateControlCategory)(value));\n        /* Если длина другая и контрольный разряд рассчитан, уберем его, чтобы не показывать посдказку */ } else if ((value.length !== 19 || value.length !== 24) && hint) {\n            setHint(null);\n        }\n    };\n    var onSubmitHandler = function(e) {\n        e.preventDefault();\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form),\n        __source: {\n            fileName: \"/home/lps/Documents/dev/test_task_nofines/components/Form/index.js\",\n            lineNumber: 28,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                placeholder: \"Введите УИН\",\n                type: \"number\",\n                value: inputValue,\n                onChange: function(e) {\n                    return onChangeHandler(e);\n                },\n                __source: {\n                    fileName: \"/home/lps/Documents/dev/test_task_nofines/components/Form/index.js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            hint !== null && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form__hint),\n                __source: {\n                    fileName: \"/home/lps/Documents/dev/test_task_nofines/components/Form/index.js\",\n                    lineNumber: 35,\n                    columnNumber: 25\n                },\n                __self: _this,\n                children: hint\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: function(e) {\n                    return onSubmitHandler(e);\n                },\n                __source: {\n                    fileName: \"/home/lps/Documents/dev/test_task_nofines/components/Form/index.js\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Найти\"\n            })\n        ]\n    }));\n};\n_s(Form, \"JX2RHXcK6vRFQX40l5qJjODCymA=\");\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm0vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnQztBQUV3QjtBQUVwQjs7O0FBRXBDLEdBQUssQ0FBQ0csSUFBSSxHQUFHLFFBQVEsUUFBb0MsQ0FBQztRQUExQ0MsVUFBVSxTQUFWQSxVQUFVLEVBQUVDLGFBQWEsU0FBYkEsYUFBYSxFQUFFQyxPQUFPLFNBQVBBLE9BQU87O0lBQ2hELEdBQUssQ0FBbUJOLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQTlCTyxJQUFJLEdBQWFQLEdBQWMsS0FBekJRLE9BQU8sR0FBSVIsR0FBYztJQUV0QyxHQUFLLENBQUNTLGVBQWUsR0FBRyxRQUFRLENBQVBDLENBQUMsRUFBSyxDQUFDO1FBQzlCLEdBQUssQ0FBQ0MsS0FBSyxHQUFHRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0QsS0FBSztRQUM1Qk4sYUFBYSxDQUFDTSxLQUFLO1FBRW5CLEVBQXdELGdHQUE0QyxHQUN4RCxFQUExQyxFQUFFQTtZQUNGSCxPQUFPLENBQUNHLEtBQUssR0FBR1Ysa0VBQXdCLENBQUNVLEtBQUs7UUFDOUMsRUFBaUc7WUFFakdILE9BQU8sQ0FBQyxJQUFJO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFFRCxHQUFLLENBQUNNLGVBQWUsR0FBRyxRQUFRLENBQVBKLENBQUMsRUFBSyxDQUFDO1FBQzlCQSxDQUFDLENBQUNLLGNBQWM7SUFDbEIsQ0FBQztJQUVELE1BQU0sdUVBQ0hDLENBQUk7UUFBQ0MsU0FBUyxFQUFFZixnRUFBTzs7Ozs7Ozs7aUZBQ3JCZ0IsQ0FBSztnQkFDSkMsV0FBVyxFQUFDLENBQWE7Z0JBQ2ZDLElBQU4sRUFBQyxDQUFRO2dCQUNiVCxLQUFLLEVBQUVQLFVBQVU7Z0JBQ2pCaUIsUUFBUSxFQUFFLFFBQVEsQ0FBUFgsQ0FBQztvQkFBS0QsTUFBTSxDQUFOQSxlQUFlLENBQUNDLENBQUM7Ozs7Ozs7OztZQUVuQ0gsSUFBSSxLQUFLLElBQUkseUVBQUtlLENBQUc7Z0JBQUNMLFNBQVMsRUFBRWYsc0VBQWE7Ozs7Ozs7MEJBQUdLLElBQUk7O2lGQUNyRGlCLENBQU07Z0JBQUNDLE9BQU8sRUFBRSxRQUFRLENBQVBmLENBQUM7b0JBQUtJLE1BQU0sQ0FBTkEsZUFBZSxDQUFDSixDQUFDOzs7Ozs7OzswQkFBRyxDQUFLOzs7O0FBR3ZELENBQUM7R0FoQ0tQLElBQUk7S0FBSkEsSUFBSTtBQWtDViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybS9pbmRleC5qcz82YzFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGNhbGN1bGF0ZUNvbnRyb2xDYXRlZ29yeSB9IGZyb20gXCIuLi8uLi9oZWxwZXJzXCI7XG5cbmltcG9ydCBzdCBmcm9tIFwiLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBGb3JtID0gKHsgaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZSwgc2V0RmluZSB9KSA9PiB7XG4gIGNvbnN0IFtoaW50LCBzZXRIaW50XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRJbnB1dFZhbHVlKHZhbHVlKTtcblxuICAgIC8qINCV0YHQu9C4INC00LvQuNC90LAg0YHQvtCz0LvQsNGB0L3QviDQotCXINCy0YvRh9C40YHQu9C40Lwg0LrQvtC90YLRgNC+0LvRjNC90YvQuSDRgNCw0LfRgNGP0LQgKi9cbiAgICBpZiAodmFsdWUubGVuZ3RoID09PSAxOSB8fCB2YWx1ZS5sZW5ndGggPT09IDI0KSB7XG4gICAgICBzZXRIaW50KHZhbHVlICsgY2FsY3VsYXRlQ29udHJvbENhdGVnb3J5KHZhbHVlKSk7XG4gICAgICAvKiDQldGB0LvQuCDQtNC70LjQvdCwINC00YDRg9Cz0LDRjyDQuCDQutC+0L3RgtGA0L7Qu9GM0L3Ri9C5INGA0LDQt9GA0Y/QtCDRgNCw0YHRgdGH0LjRgtCw0L0sINGD0LHQtdGA0LXQvCDQtdCz0L4sINGH0YLQvtCx0Ysg0L3QtSDQv9C+0LrQsNC30YvQstCw0YLRjCDQv9C+0YHQtNC60LDQt9C60YMgKi9cbiAgICB9IGVsc2UgaWYgKCh2YWx1ZS5sZW5ndGggIT09IDE5IHx8IHZhbHVlLmxlbmd0aCAhPT0gMjQpICYmIGhpbnQpIHtcbiAgICAgIHNldEhpbnQobnVsbCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uU3VibWl0SGFuZGxlciA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gY2xhc3NOYW1lPXtzdC5mb3JtfT5cbiAgICAgIDxpbnB1dFxuICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INCj0JjQnVwiXG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZUhhbmRsZXIoZSl9XG4gICAgICA+PC9pbnB1dD5cbiAgICAgIHtoaW50ICE9PSBudWxsICYmIDxkaXYgY2xhc3NOYW1lPXtzdC5mb3JtX19oaW50fT57aGludH08L2Rpdj59XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBvblN1Ym1pdEhhbmRsZXIoZSl9PtCd0LDQudGC0Lg8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY2FsY3VsYXRlQ29udHJvbENhdGVnb3J5Iiwic3QiLCJGb3JtIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJzZXRGaW5lIiwiaGludCIsInNldEhpbnQiLCJvbkNoYW5nZUhhbmRsZXIiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJsZW5ndGgiLCJvblN1Ym1pdEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJjbGFzc05hbWUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm9uQ2hhbmdlIiwiZGl2IiwiZm9ybV9faGludCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Form/index.js\n");

/***/ })

});