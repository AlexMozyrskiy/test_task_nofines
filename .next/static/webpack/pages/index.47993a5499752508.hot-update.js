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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_lps_Documents_dev_test_task_nofines_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lps_Documents_dev_test_task_nofines_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lps_Documents_dev_test_task_nofines_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ \"./helpers/index.js\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.scss */ \"./components/Form/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Form = function(param) {\n    var inputValue = param.inputValue, setInputValue = param.setInputValue, fine = param.fine, setFine = param.setFine;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), hint = ref[0], setHint = ref[1];\n    var onChangeHandler = function(e) {\n        var value = e.target.value;\n        setInputValue(value);\n        /* Если длина согласно ТЗ вычислим контрольный разряд */ if (value.length === 19 || value.length === 24) {\n            setHint(value + (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.calculateControlCategory)(value));\n        /* Если длина другая и контрольный разряд рассчитан, уберем его, чтобы не показывать посдказку */ } else if ((value.length !== 19 || value.length !== 24) && hint) {\n            setHint(null);\n        }\n        if (fine !== null) {\n            setFine({\n            });\n        }\n    };\n    var onHintClickHandler = function() {\n        setInputValue(hint);\n        setHint(null);\n    };\n    var onSubmitHandler = _asyncToGenerator(_home_lps_Documents_dev_test_task_nofines_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n        var response, res;\n        return _home_lps_Documents_dev_test_task_nofines_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    e.preventDefault();\n                    _ctx.next = 3;\n                    return fetch(\"https://test-task.shtrafovnet.com/fines/\".concat(inputValue));\n                case 3:\n                    response = _ctx.sent;\n                    if (!(response.status === 200)) {\n                        _ctx.next = 12;\n                        break;\n                    }\n                    _ctx.next = 7;\n                    return response.json();\n                case 7:\n                    res = _ctx.sent;\n                    setFine(res);\n                    console.log(res);\n                    _ctx.next = 13;\n                    break;\n                case 12:\n                    {\n                        setFine(null);\n                    }\n                case 13:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"form\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().form),\n        __source: {\n            fileName: \"/home/lps/Documents/dev/test_task_nofines/components/Form/index.js\",\n            lineNumber: 48,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                placeholder: \"Введите УИН\",\n                type: \"number\",\n                value: inputValue,\n                onChange: function(e) {\n                    return onChangeHandler(e);\n                },\n                maxLength: \"25\",\n                __source: {\n                    fileName: \"/home/lps/Documents/dev/test_task_nofines/components/Form/index.js\",\n                    lineNumber: 49,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            hint !== null && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().form__hint),\n                onClick: onHintClickHandler,\n                __source: {\n                    fileName: \"/home/lps/Documents/dev/test_task_nofines/components/Form/index.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: hint\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                onClick: function(e) {\n                    return onSubmitHandler(e);\n                },\n                __source: {\n                    fileName: \"/home/lps/Documents/dev/test_task_nofines/components/Form/index.js\",\n                    lineNumber: 61,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Найти\"\n            })\n        ]\n    }));\n};\n_s(Form, \"JX2RHXcK6vRFQX40l5qJjODCymA=\");\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm0vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFnQztBQUV3QjtBQUVwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsR0FBSyxDQUFDRyxJQUFJLEdBQUcsUUFBUSxRQUEwQyxDQUFDO1FBQWhEQyxVQUFVLFNBQVZBLFVBQVUsRUFBRUMsYUFBYSxTQUFiQSxhQUFhLEVBQUVDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxPQUFPLFNBQVBBLE9BQU87O0lBQ3RELEdBQUssQ0FBbUJQLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQTlCUSxJQUFJLEdBQWFSLEdBQWMsS0FBekJTLE9BQU8sR0FBSVQsR0FBYztJQUV0QyxHQUFLLENBQUNVLGVBQWUsR0FBRyxRQUFRLENBQVBDLENBQUMsRUFBSyxDQUFDO1FBQzlCLEdBQUssQ0FBQ0MsS0FBSyxHQUFHRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0QsS0FBSztRQUU1QlAsYUFBYSxDQUFDTyxLQUFLO1FBRW5CLEVBQXdELGdHQUE0QyxHQUN4RCxFQUExQyxFQUFFQTtZQUNGSCxPQUFPLENBQUNHLEtBQUssR0FBR1gsa0VBQXdCLENBQUNXLEtBQUs7UUFDOUMsRUFBaUc7WUFFakdILE9BQU8sQ0FBQyxJQUFJO1FBQ2QsQ0FBQztRQUVELEVBQUUsRUFBRUgsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ2xCQyxPQUFPLENBQUMsQ0FBQztZQUFBLENBQUM7UUFDWixDQUFDO0lBQ0gsQ0FBQztJQUVELEdBQUssQ0FBQ1Esa0JBQWtCLEdBQUcsUUFDN0IsR0FEbUMsQ0FBQztRQUNoQ1YsYUFBYSxDQUFDRyxJQUFJO1FBQ2xCQyxPQUFPLENBQUMsSUFBSTtJQUNkLENBQUM7SUFFRCxHQUFLLENBQUNPLGVBQWUsdUpBQUcsUUFBUSxTQUFETCxDQUFDLEVBQUssQ0FBQztZQUU5Qk0sUUFBUSxFQUlOQyxHQUFHOzs7O29CQUxYUCxDQUFDLENBQUNRLGNBQWM7OzJCQUNPQyxLQUFLLENBQ3pCLENBQXdDLDBDQUFhLE9BQVhoQixVQUFVOztvQkFEakRhLFFBQVE7MEJBR1ZBLFFBQVEsQ0FBQ0ksTUFBTSxLQUFLLEdBQUc7Ozs7OzJCQUNQSixRQUFRLENBQUNLLElBQUk7O29CQUF6QkosR0FBRztvQkFDVFgsT0FBTyxDQUFDVyxHQUFHO29CQUNYSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sR0FBRzs7OztvQkFDVixDQUFDO3dCQUNOWCxPQUFPLENBQUMsSUFBSTtvQkFDZCxDQUFDOzs7Ozs7SUFDSCxDQUFDO0lBRUQsTUFBTSx1RUFDSGtCLENBQUk7UUFBQ0MsU0FBUyxFQUFFeEIsZ0VBQU87Ozs7Ozs7O2lGQUNyQnlCLENBQUs7Z0JBQ0pDLFdBQVcsRUFBQyxDQUFhO2dCQUNmQyxJQUFOLEVBQUMsQ0FBUTtnQkFDYmpCLEtBQUssRUFBRVIsVUFBVTtnQkFDakIwQixRQUFRLEVBQUUsUUFBUSxDQUFQbkIsQ0FBQztvQkFBS0QsTUFBTSxDQUFOQSxlQUFlLENBQUNDLENBQUM7O2dCQUNsQ29CLFNBQVMsRUFBQyxDQUFJOzs7Ozs7OztZQUVmdkIsSUFBSSxLQUFLLElBQUkseUVBQ1h3QixDQUFHO2dCQUFDTixTQUFTLEVBQUV4QixzRUFBYTtnQkFBRWdDLE9BQU8sRUFBRW5CLGtCQUFrQjs7Ozs7OzswQkFDdkRQLElBQUk7O2lGQUdSMkIsQ0FBTTtnQkFBQ0QsT0FBTyxFQUFFLFFBQVEsQ0FBUHZCLENBQUM7b0JBQUtLLE1BQU0sQ0FBTkEsZUFBZSxDQUFDTCxDQUFDOzs7Ozs7OzswQkFBRyxDQUFLOzs7O0FBR3ZELENBQUM7R0F6REtSLElBQUk7S0FBSkEsSUFBSTtBQTJEViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybS9pbmRleC5qcz82YzFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGNhbGN1bGF0ZUNvbnRyb2xDYXRlZ29yeSB9IGZyb20gXCIuLi8uLi9oZWxwZXJzXCI7XG5cbmltcG9ydCBzdCBmcm9tIFwiLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBGb3JtID0gKHsgaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZSwgZmluZSwgc2V0RmluZSB9KSA9PiB7XG4gIGNvbnN0IFtoaW50LCBzZXRIaW50XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcblxuICAgIHNldElucHV0VmFsdWUodmFsdWUpO1xuXG4gICAgLyog0JXRgdC70Lgg0LTQu9C40L3QsCDRgdC+0LPQu9Cw0YHQvdC+INCi0Jcg0LLRi9GH0LjRgdC70LjQvCDQutC+0L3RgtGA0L7Qu9GM0L3Ri9C5INGA0LDQt9GA0Y/QtCAqL1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDE5IHx8IHZhbHVlLmxlbmd0aCA9PT0gMjQpIHtcbiAgICAgIHNldEhpbnQodmFsdWUgKyBjYWxjdWxhdGVDb250cm9sQ2F0ZWdvcnkodmFsdWUpKTtcbiAgICAgIC8qINCV0YHQu9C4INC00LvQuNC90LAg0LTRgNGD0LPQsNGPINC4INC60L7QvdGC0YDQvtC70YzQvdGL0Lkg0YDQsNC30YDRj9C0INGA0LDRgdGB0YfQuNGC0LDQvSwg0YPQsdC10YDQtdC8INC10LPQviwg0YfRgtC+0LHRiyDQvdC1INC/0L7QutCw0LfRi9Cy0LDRgtGMINC/0L7RgdC00LrQsNC30LrRgyAqL1xuICAgIH0gZWxzZSBpZiAoKHZhbHVlLmxlbmd0aCAhPT0gMTkgfHwgdmFsdWUubGVuZ3RoICE9PSAyNCkgJiYgaGludCkge1xuICAgICAgc2V0SGludChudWxsKTtcbiAgICB9XG5cbiAgICBpZiAoZmluZSAhPT0gbnVsbCkge1xuICAgICAgc2V0RmluZSh7fSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uSGludENsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICBzZXRJbnB1dFZhbHVlKGhpbnQpO1xuICAgIHNldEhpbnQobnVsbCk7XG4gIH07XG5cbiAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL3Rlc3QtdGFzay5zaHRyYWZvdm5ldC5jb20vZmluZXMvJHtpbnB1dFZhbHVlfWBcbiAgICApO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2V0RmluZShyZXMpO1xuICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RmluZShudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBjbGFzc05hbWU9e3N0LmZvcm19PlxuICAgICAgPGlucHV0XG4gICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0KPQmNCdXCJcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlSGFuZGxlcihlKX1cbiAgICAgICAgbWF4TGVuZ3RoPVwiMjVcIlxuICAgICAgLz5cbiAgICAgIHtoaW50ICE9PSBudWxsICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0LmZvcm1fX2hpbnR9IG9uQ2xpY2s9e29uSGludENsaWNrSGFuZGxlcn0+XG4gICAgICAgICAge2hpbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IG9uU3VibWl0SGFuZGxlcihlKX0+0J3QsNC50YLQuDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjYWxjdWxhdGVDb250cm9sQ2F0ZWdvcnkiLCJzdCIsIkZvcm0iLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsImZpbmUiLCJzZXRGaW5lIiwiaGludCIsInNldEhpbnQiLCJvbkNoYW5nZUhhbmRsZXIiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJsZW5ndGgiLCJvbkhpbnRDbGlja0hhbmRsZXIiLCJvblN1Ym1pdEhhbmRsZXIiLCJyZXNwb25zZSIsInJlcyIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJzdGF0dXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImZvcm0iLCJjbGFzc05hbWUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm9uQ2hhbmdlIiwibWF4TGVuZ3RoIiwiZGl2IiwiZm9ybV9faGludCIsIm9uQ2xpY2siLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Form/index.js\n");

/***/ })

});