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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ \"./helpers/index.js\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.scss */ \"./components/Form/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Form = function(param) {\n    var inputValue = param.inputValue, setInputValue = param.setInputValue, setFine = param.setFine;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), hint = ref[0], setHint = ref[1];\n    var onChangeHandler = function(e) {\n        /*\n      тип для инпута выбралм текст, так как если выбрать number при нажатии вниз или вверх\n      цифры прибавляются в инпуте и если число большое число в инпуте превращается в 1.11234561111111111e+27.\n      Отменить это поведение с помощью e.preventDefault() не получается\n      По этому будем валидировать с помощью js\n    */ var lastChar = e.target.value[e.target.value.length - 1];\n        var value;\n        if (!isNaN(+lastChar)) {\n            value = e.target.value;\n            setInputValue(value);\n        }\n        /* Если длина согласно ТЗ вычислим контрольный разряд */ if (value.length === 19 || value.length === 24) {\n            setHint(value + (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.calculateControlCategory)(value));\n        /* Если длина другая и контрольный разряд рассчитан, уберем его, чтобы не показывать посдказку */ } else if ((value.length !== 19 || value.length !== 24) && hint) {\n            setHint(null);\n        }\n    };\n    var onSubmitHandler = function(e) {\n        e.preventDefault();\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form),\n        __source: {\n            fileName: \"/home/lps/Documents/dev/test_task_nofines/components/Form/index.js\",\n            lineNumber: 38,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                placeholder: \"Введите УИН\",\n                type: \"text\",\n                value: inputValue,\n                onChange: function(e) {\n                    return onChangeHandler(e);\n                },\n                __source: {\n                    fileName: \"/home/lps/Documents/dev/test_task_nofines/components/Form/index.js\",\n                    lineNumber: 39,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            hint !== null && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form__hint),\n                __source: {\n                    fileName: \"/home/lps/Documents/dev/test_task_nofines/components/Form/index.js\",\n                    lineNumber: 46,\n                    columnNumber: 25\n                },\n                __self: _this,\n                children: hint\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: function(e) {\n                    return onSubmitHandler(e);\n                },\n                __source: {\n                    fileName: \"/home/lps/Documents/dev/test_task_nofines/components/Form/index.js\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Найти\"\n            })\n        ]\n    }));\n};\n_s(Form, \"JX2RHXcK6vRFQX40l5qJjODCymA=\");\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm0vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnQztBQUV3QjtBQUVwQjs7O0FBRXBDLEdBQUssQ0FBQ0csSUFBSSxHQUFHLFFBQVEsUUFBb0MsQ0FBQztRQUExQ0MsVUFBVSxTQUFWQSxVQUFVLEVBQUVDLGFBQWEsU0FBYkEsYUFBYSxFQUFFQyxPQUFPLFNBQVBBLE9BQU87O0lBQ2hELEdBQUssQ0FBbUJOLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQTlCTyxJQUFJLEdBQWFQLEdBQWMsS0FBekJRLE9BQU8sR0FBSVIsR0FBYztJQUV0QyxHQUFLLENBQUNTLGVBQWUsR0FBRyxRQUFRLENBQVBDLENBQUMsRUFBSyxDQUFDO1FBQzlCLEVBS0U7Ozs7O0lBQUEsR0FDRixHQUFLLENBQUNDLFFBQVEsR0FBR0QsQ0FBQyxDQUFDRSxNQUFNLENBQUNDLEtBQUssQ0FBQ0gsQ0FBQyxDQUFDRSxNQUFNLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLENBQUM7UUFDekQsR0FBRyxDQUFDRCxLQUFLO1FBQ1QsRUFBRSxHQUFHRSxLQUFLLEVBQUVKLFFBQVEsR0FBRyxDQUFDO1lBQ3RCRSxLQUFLLEdBQUdILENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO1lBQ3RCUixhQUFhLENBQUNRLEtBQUs7UUFDckIsQ0FBQztRQUVELEVBQXdELGdHQUE0QyxHQUN4RCxFQUExQyxFQUFFQTtZQUNGTCxPQUFPLENBQUNLLEtBQUssR0FBR1osa0VBQXdCLENBQUNZLEtBQUs7UUFDOUMsRUFBaUc7WUFFakdMLE9BQU8sQ0FBQyxJQUFJO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFFRCxHQUFLLENBQUNRLGVBQWUsR0FBRyxRQUFRLENBQVBOLENBQUMsRUFBSyxDQUFDO1FBQzlCQSxDQUFDLENBQUNPLGNBQWM7SUFDbEIsQ0FBQztJQUVELE1BQU0sdUVBQ0hDLENBQUk7UUFBQ0MsU0FBUyxFQUFFakIsZ0VBQU87Ozs7Ozs7O2lGQUNyQmtCLENBQUs7Z0JBQ0pDLFdBQVcsRUFBQyxDQUFhO2dCQUNmQyxJQUFOLEVBQUMsQ0FBTTtnQkFDWFQsS0FBSyxFQUFFVCxVQUFVO2dCQUNqQm1CLFFBQVEsRUFBRSxRQUFRLENBQVBiLENBQUM7b0JBQUtELE1BQU0sQ0FBTkEsZUFBZSxDQUFDQyxDQUFDOzs7Ozs7Ozs7WUFHbkNILElBQUksS0FBSyxJQUFJLHlFQUFLaUIsQ0FBRztnQkFBQ0wsU0FBUyxFQUFFakIsc0VBQWE7Ozs7Ozs7MEJBQUdLLElBQUk7O2lGQUNyRG1CLENBQU07Z0JBQUNDLE9BQU8sRUFBRSxRQUFRLENBQVBqQixDQUFDO29CQUFLTSxNQUFNLENBQU5BLGVBQWUsQ0FBQ04sQ0FBQzs7Ozs7Ozs7MEJBQUcsQ0FBSzs7OztBQUd2RCxDQUFDO0dBM0NLUCxJQUFJO0tBQUpBLElBQUk7QUE2Q1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvcm0vaW5kZXguanM/NmMxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBjYWxjdWxhdGVDb250cm9sQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vLi4vaGVscGVyc1wiO1xuXG5pbXBvcnQgc3QgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgRm9ybSA9ICh7IGlucHV0VmFsdWUsIHNldElucHV0VmFsdWUsIHNldEZpbmUgfSkgPT4ge1xuICBjb25zdCBbaGludCwgc2V0SGludF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIC8qXG4gICAgICDRgtC40L8g0LTQu9GPINC40L3Qv9GD0YLQsCDQstGL0LHRgNCw0LvQvCDRgtC10LrRgdGCLCDRgtCw0Log0LrQsNC6INC10YHQu9C4INCy0YvQsdGA0LDRgtGMIG51bWJlciDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0LLQvdC40Lcg0LjQu9C4INCy0LLQtdGA0YVcbiAgICAgINGG0LjRhNGA0Ysg0L/RgNC40LHQsNCy0LvRj9GO0YLRgdGPINCyINC40L3Qv9GD0YLQtSDQuCDQtdGB0LvQuCDRh9C40YHQu9C+INCx0L7Qu9GM0YjQvtC1INGH0LjRgdC70L4g0LIg0LjQvdC/0YPRgtC1INC/0YDQtdCy0YDQsNGJ0LDQtdGC0YHRjyDQsiAxLjExMjM0NTYxMTExMTExMTExZSsyNy5cbiAgICAgINCe0YLQvNC10L3QuNGC0Ywg0Y3RgtC+INC/0L7QstC10LTQtdC90LjQtSDRgSDQv9C+0LzQvtGJ0YzRjiBlLnByZXZlbnREZWZhdWx0KCkg0L3QtSDQv9C+0LvRg9GH0LDQtdGC0YHRj1xuICAgICAg0J/QviDRjdGC0L7QvNGDINCx0YPQtNC10Lwg0LLQsNC70LjQtNC40YDQvtCy0LDRgtGMINGBINC/0L7QvNC+0YnRjNGOIGpzXG4gICAgKi9cbiAgICBjb25zdCBsYXN0Q2hhciA9IGUudGFyZ2V0LnZhbHVlW2UudGFyZ2V0LnZhbHVlLmxlbmd0aCAtIDFdO1xuICAgIGxldCB2YWx1ZTtcbiAgICBpZiAoIWlzTmFOKCtsYXN0Q2hhcikpIHtcbiAgICAgIHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBzZXRJbnB1dFZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiDQldGB0LvQuCDQtNC70LjQvdCwINGB0L7Qs9C70LDRgdC90L4g0KLQlyDQstGL0YfQuNGB0LvQuNC8INC60L7QvdGC0YDQvtC70YzQvdGL0Lkg0YDQsNC30YDRj9C0ICovXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMTkgfHwgdmFsdWUubGVuZ3RoID09PSAyNCkge1xuICAgICAgc2V0SGludCh2YWx1ZSArIGNhbGN1bGF0ZUNvbnRyb2xDYXRlZ29yeSh2YWx1ZSkpO1xuICAgICAgLyog0JXRgdC70Lgg0LTQu9C40L3QsCDQtNGA0YPQs9Cw0Y8g0Lgg0LrQvtC90YLRgNC+0LvRjNC90YvQuSDRgNCw0LfRgNGP0LQg0YDQsNGB0YHRh9C40YLQsNC9LCDRg9Cx0LXRgNC10Lwg0LXQs9C+LCDRh9GC0L7QsdGLINC90LUg0L/QvtC60LDQt9GL0LLQsNGC0Ywg0L/QvtGB0LTQutCw0LfQutGDICovXG4gICAgfSBlbHNlIGlmICgodmFsdWUubGVuZ3RoICE9PSAxOSB8fCB2YWx1ZS5sZW5ndGggIT09IDI0KSAmJiBoaW50KSB7XG4gICAgICBzZXRIaW50KG51bGwpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIGNsYXNzTmFtZT17c3QuZm9ybX0+XG4gICAgICA8aW5wdXRcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQo9CY0J1cIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlSGFuZGxlcihlKX1cbiAgICAgICAgLy8gb25LZXlQcmVzcz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cbiAgICAgID48L2lucHV0PlxuICAgICAge2hpbnQgIT09IG51bGwgJiYgPGRpdiBjbGFzc05hbWU9e3N0LmZvcm1fX2hpbnR9PntoaW50fTwvZGl2Pn1cbiAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IG9uU3VibWl0SGFuZGxlcihlKX0+0J3QsNC50YLQuDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjYWxjdWxhdGVDb250cm9sQ2F0ZWdvcnkiLCJzdCIsIkZvcm0iLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsInNldEZpbmUiLCJoaW50Iiwic2V0SGludCIsIm9uQ2hhbmdlSGFuZGxlciIsImUiLCJsYXN0Q2hhciIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwiaXNOYU4iLCJvblN1Ym1pdEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJjbGFzc05hbWUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm9uQ2hhbmdlIiwiZGl2IiwiZm9ybV9faGludCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Form/index.js\n");

/***/ })

});