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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ \"./helpers/index.js\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.scss */ \"./components/Form/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Form = function(param) {\n    var inputValue = param.inputValue, setInputValue = param.setInputValue, setFine = param.setFine;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), hint = ref[0], setHint = ref[1];\n    var onChangeHandler = function(e) {\n        console.log(e.key);\n        if (e.which === 38 || e.which === 40) {\n            e.preventDefault();\n        }\n        var value = e.target.value;\n        setInputValue(value);\n        /* Если длина согласно ТЗ вычислим контрольный разряд */ if (value.length === 19 || value.length === 24) {\n            setHint(value + (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.calculateControlCategory)(value));\n        /* Если длина другая и контрольный разряд рассчитан, уберем его, чтобы не показывать посдказку */ } else if ((value.length !== 19 || value.length !== 24) && hint) {\n            setHint(null);\n        }\n    };\n    var onSubmitHandler = function(e) {\n        e.preventDefault();\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form),\n        __source: {\n            fileName: \"/home/lps/Documents/dev/test_task_nofines/components/Form/index.js\",\n            lineNumber: 32,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                placeholder: \"Введите УИН\",\n                type: \"number\",\n                value: inputValue,\n                onChange: function(e) {\n                    return onChangeHandler(e);\n                },\n                __source: {\n                    fileName: \"/home/lps/Documents/dev/test_task_nofines/components/Form/index.js\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            hint !== null && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form__hint),\n                __source: {\n                    fileName: \"/home/lps/Documents/dev/test_task_nofines/components/Form/index.js\",\n                    lineNumber: 40,\n                    columnNumber: 25\n                },\n                __self: _this,\n                children: hint\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: function(e) {\n                    return onSubmitHandler(e);\n                },\n                __source: {\n                    fileName: \"/home/lps/Documents/dev/test_task_nofines/components/Form/index.js\",\n                    lineNumber: 41,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Найти\"\n            })\n        ]\n    }));\n};\n_s(Form, \"JX2RHXcK6vRFQX40l5qJjODCymA=\");\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm0vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnQztBQUV3QjtBQUVwQjs7O0FBRXBDLEdBQUssQ0FBQ0csSUFBSSxHQUFHLFFBQVEsUUFBb0MsQ0FBQztRQUExQ0MsVUFBVSxTQUFWQSxVQUFVLEVBQUVDLGFBQWEsU0FBYkEsYUFBYSxFQUFFQyxPQUFPLFNBQVBBLE9BQU87O0lBQ2hELEdBQUssQ0FBbUJOLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQTlCTyxJQUFJLEdBQWFQLEdBQWMsS0FBekJRLE9BQU8sR0FBSVIsR0FBYztJQUV0QyxHQUFLLENBQUNTLGVBQWUsR0FBRyxRQUFRLENBQVBDLENBQUMsRUFBSyxDQUFDO1FBQzlCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsQ0FBQyxDQUFDRyxHQUFHO1FBQ2pCLEVBQUUsRUFBRUgsQ0FBQyxDQUFDSSxLQUFLLEtBQUssRUFBRSxJQUFJSixDQUFDLENBQUNJLEtBQUssS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUNyQ0osQ0FBQyxDQUFDSyxjQUFjO1FBQ2xCLENBQUM7UUFDRCxHQUFLLENBQUNDLEtBQUssR0FBR04sQ0FBQyxDQUFDTyxNQUFNLENBQUNELEtBQUs7UUFDNUJYLGFBQWEsQ0FBQ1csS0FBSztRQUVuQixFQUF3RCxnR0FBNEMsR0FDeEQsRUFBMUMsRUFBRUE7WUFDRlIsT0FBTyxDQUFDUSxLQUFLLEdBQUdmLGtFQUF3QixDQUFDZSxLQUFLO1FBQzlDLEVBQWlHO1lBRWpHUixPQUFPLENBQUMsSUFBSTtRQUNkLENBQUM7SUFDSCxDQUFDO0lBRUQsR0FBSyxDQUFDVyxlQUFlLEdBQUcsUUFBUSxDQUFQVCxDQUFDLEVBQUssQ0FBQztRQUM5QkEsQ0FBQyxDQUFDSyxjQUFjO0lBQ2xCLENBQUM7SUFFRCxNQUFNLHVFQUNISyxDQUFJO1FBQUNDLFNBQVMsRUFBRW5CLGdFQUFPOzs7Ozs7OztpRkFDckJvQixDQUFLO2dCQUNKQyxXQUFXLEVBQUMsQ0FBYTtnQkFDZkMsSUFBTixFQUFDLENBQVE7Z0JBQ2JSLEtBQUssRUFBRVosVUFBVTtnQkFDakJxQixRQUFRLEVBQUUsUUFBUSxDQUFQZixDQUFDO29CQUFLRCxNQUFNLENBQU5BLGVBQWUsQ0FBQ0MsQ0FBQzs7Ozs7Ozs7O1lBR25DSCxJQUFJLEtBQUssSUFBSSx5RUFBS21CLENBQUc7Z0JBQUNMLFNBQVMsRUFBRW5CLHNFQUFhOzs7Ozs7OzBCQUFHSyxJQUFJOztpRkFDckRxQixDQUFNO2dCQUFDQyxPQUFPLEVBQUUsUUFBUSxDQUFQbkIsQ0FBQztvQkFBS1MsTUFBTSxDQUFOQSxlQUFlLENBQUNULENBQUM7Ozs7Ozs7OzBCQUFHLENBQUs7Ozs7QUFHdkQsQ0FBQztHQXJDS1AsSUFBSTtLQUFKQSxJQUFJO0FBdUNWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtL2luZGV4LmpzPzZjMWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgY2FsY3VsYXRlQ29udHJvbENhdGVnb3J5IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnNcIjtcblxuaW1wb3J0IHN0IGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IEZvcm0gPSAoeyBpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlLCBzZXRGaW5lIH0pID0+IHtcbiAgY29uc3QgW2hpbnQsIHNldEhpbnRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgb25DaGFuZ2VIYW5kbGVyID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlLmtleSk7XG4gICAgaWYgKGUud2hpY2ggPT09IDM4IHx8IGUud2hpY2ggPT09IDQwKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XG5cbiAgICAvKiDQldGB0LvQuCDQtNC70LjQvdCwINGB0L7Qs9C70LDRgdC90L4g0KLQlyDQstGL0YfQuNGB0LvQuNC8INC60L7QvdGC0YDQvtC70YzQvdGL0Lkg0YDQsNC30YDRj9C0ICovXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMTkgfHwgdmFsdWUubGVuZ3RoID09PSAyNCkge1xuICAgICAgc2V0SGludCh2YWx1ZSArIGNhbGN1bGF0ZUNvbnRyb2xDYXRlZ29yeSh2YWx1ZSkpO1xuICAgICAgLyog0JXRgdC70Lgg0LTQu9C40L3QsCDQtNGA0YPQs9Cw0Y8g0Lgg0LrQvtC90YLRgNC+0LvRjNC90YvQuSDRgNCw0LfRgNGP0LQg0YDQsNGB0YHRh9C40YLQsNC9LCDRg9Cx0LXRgNC10Lwg0LXQs9C+LCDRh9GC0L7QsdGLINC90LUg0L/QvtC60LDQt9GL0LLQsNGC0Ywg0L/QvtGB0LTQutCw0LfQutGDICovXG4gICAgfSBlbHNlIGlmICgodmFsdWUubGVuZ3RoICE9PSAxOSB8fCB2YWx1ZS5sZW5ndGggIT09IDI0KSAmJiBoaW50KSB7XG4gICAgICBzZXRIaW50KG51bGwpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIGNsYXNzTmFtZT17c3QuZm9ybX0+XG4gICAgICA8aW5wdXRcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQo9CY0J1cIlxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2VIYW5kbGVyKGUpfVxuICAgICAgICAvLyBvbktleVByZXNzPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgPjwvaW5wdXQ+XG4gICAgICB7aGludCAhPT0gbnVsbCAmJiA8ZGl2IGNsYXNzTmFtZT17c3QuZm9ybV9faGludH0+e2hpbnR9PC9kaXY+fVxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gb25TdWJtaXRIYW5kbGVyKGUpfT7QndCw0LnRgtC4PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNhbGN1bGF0ZUNvbnRyb2xDYXRlZ29yeSIsInN0IiwiRm9ybSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwic2V0RmluZSIsImhpbnQiLCJzZXRIaW50Iiwib25DaGFuZ2VIYW5kbGVyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJrZXkiLCJ3aGljaCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJ0YXJnZXQiLCJsZW5ndGgiLCJvblN1Ym1pdEhhbmRsZXIiLCJmb3JtIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJvbkNoYW5nZSIsImRpdiIsImZvcm1fX2hpbnQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Form/index.js\n");

/***/ })

});