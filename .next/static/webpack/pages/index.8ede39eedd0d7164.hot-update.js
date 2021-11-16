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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_lps_Documents_dev_test_task_nofines_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lps_Documents_dev_test_task_nofines_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lps_Documents_dev_test_task_nofines_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ \"./helpers/index.js\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks */ \"./hooks/index.js\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ \"./components/Form/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Form = function(param) {\n    var inputValue = param.inputValue, setInputValue = param.setInputValue, fine = param.fine, setFine = param.setFine;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), hint = ref[0], setHint = ref[1];\n    var getFine = _hooks__WEBPACK_IMPORTED_MODULE_4__.useHttp.getFine, isFetching = _hooks__WEBPACK_IMPORTED_MODULE_4__.useHttp.isFetching, error = _hooks__WEBPACK_IMPORTED_MODULE_4__.useHttp.error;\n    var onChangeHandler = function(e) {\n        var value = e.target.value;\n        setInputValue(value);\n        /* Если длина согласно ТЗ вычислим контрольный разряд */ if (value.length === 19 || value.length === 24) {\n            setHint(value + (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.calculateControlCategory)(value));\n        /* Если длина другая и контрольный разряд рассчитан, уберем его, чтобы не показывать посдказку */ } else if ((value.length !== 19 || value.length !== 24) && hint) {\n            setHint(null);\n        }\n        if ((fine === null || fine === void 0 ? void 0 : fine.number) || fine === null) {\n            setFine({\n            });\n        }\n    };\n    var onHintClickHandler = function() {\n        setInputValue(hint);\n        setHint(null);\n    };\n    var onSubmitHandler = _asyncToGenerator(_home_lps_Documents_dev_test_task_nofines_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n        var response;\n        return _home_lps_Documents_dev_test_task_nofines_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    e.preventDefault();\n                    _ctx.next = 3;\n                    return getFine();\n                case 3:\n                    response = _ctx.sent;\n                    console.log(response);\n                    if (error) {\n                        setFine(null);\n                    } else {\n                        setFine(response);\n                    }\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    // const response = await fetch(\n    //   `https://test-task.shtrafovnet.com/fines/${inputValue}`\n    // );\n    // if (response.status === 200) {\n    //   const res = await response.json();\n    //   setFine(res);\n    // } else {\n    //   setFine(null);\n    // }\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"form\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form),\n        __source: {\n            fileName: \"/home/lps/Documents/dev/test_task_nofines/components/Form/index.js\",\n            lineNumber: 59,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                placeholder: \"Введите УИН\",\n                type: \"number\",\n                value: inputValue,\n                onChange: function(e) {\n                    return onChangeHandler(e);\n                },\n                maxLength: \"25\",\n                __source: {\n                    fileName: \"/home/lps/Documents/dev/test_task_nofines/components/Form/index.js\",\n                    lineNumber: 60,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            hint !== null && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form__hint),\n                onClick: onHintClickHandler,\n                __source: {\n                    fileName: \"/home/lps/Documents/dev/test_task_nofines/components/Form/index.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: hint\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                onClick: function(e) {\n                    return onSubmitHandler(e);\n                },\n                __source: {\n                    fileName: \"/home/lps/Documents/dev/test_task_nofines/components/Form/index.js\",\n                    lineNumber: 72,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Найти\"\n            })\n        ]\n    }));\n};\n_s(Form, \"JX2RHXcK6vRFQX40l5qJjODCymA=\");\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBR3ZELENBQUM7R0FuRUtYLElBQUk7S0FBSkEsSUFBSTtBQXFFViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybS9pbmRleC5qcz82YzFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGNhbGN1bGF0ZUNvbnRyb2xDYXRlZ29yeSB9IGZyb20gXCIuLi8uLi9oZWxwZXJzXCI7XG5pbXBvcnQgeyB1c2VIdHRwIH0gZnJvbSBcIi4uLy4uL2hvb2tzXCI7XG5cbmltcG9ydCBzdCBmcm9tIFwiLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBGb3JtID0gKHsgaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZSwgZmluZSwgc2V0RmluZSB9KSA9PiB7XG4gIGNvbnN0IFtoaW50LCBzZXRIaW50XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IHsgZ2V0RmluZSwgaXNGZXRjaGluZywgZXJyb3IgfSA9IHVzZUh0dHA7XG5cbiAgY29uc3Qgb25DaGFuZ2VIYW5kbGVyID0gKGUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XG5cbiAgICAvKiDQldGB0LvQuCDQtNC70LjQvdCwINGB0L7Qs9C70LDRgdC90L4g0KLQlyDQstGL0YfQuNGB0LvQuNC8INC60L7QvdGC0YDQvtC70YzQvdGL0Lkg0YDQsNC30YDRj9C0ICovXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMTkgfHwgdmFsdWUubGVuZ3RoID09PSAyNCkge1xuICAgICAgc2V0SGludCh2YWx1ZSArIGNhbGN1bGF0ZUNvbnRyb2xDYXRlZ29yeSh2YWx1ZSkpO1xuICAgICAgLyog0JXRgdC70Lgg0LTQu9C40L3QsCDQtNGA0YPQs9Cw0Y8g0Lgg0LrQvtC90YLRgNC+0LvRjNC90YvQuSDRgNCw0LfRgNGP0LQg0YDQsNGB0YHRh9C40YLQsNC9LCDRg9Cx0LXRgNC10Lwg0LXQs9C+LCDRh9GC0L7QsdGLINC90LUg0L/QvtC60LDQt9GL0LLQsNGC0Ywg0L/QvtGB0LTQutCw0LfQutGDICovXG4gICAgfSBlbHNlIGlmICgodmFsdWUubGVuZ3RoICE9PSAxOSB8fCB2YWx1ZS5sZW5ndGggIT09IDI0KSAmJiBoaW50KSB7XG4gICAgICBzZXRIaW50KG51bGwpO1xuICAgIH1cblxuICAgIGlmIChmaW5lPy5udW1iZXIgfHwgZmluZSA9PT0gbnVsbCkge1xuICAgICAgc2V0RmluZSh7fSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uSGludENsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICBzZXRJbnB1dFZhbHVlKGhpbnQpO1xuICAgIHNldEhpbnQobnVsbCk7XG4gIH07XG5cbiAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEZpbmUoKTtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHNldEZpbmUobnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZpbmUocmVzcG9uc2UpO1xuICAgIH1cbiAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIC8vICAgYGh0dHBzOi8vdGVzdC10YXNrLnNodHJhZm92bmV0LmNvbS9maW5lcy8ke2lucHV0VmFsdWV9YFxuICAgIC8vICk7XG4gICAgLy8gaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgLy8gICBjb25zdCByZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgLy8gICBzZXRGaW5lKHJlcyk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHNldEZpbmUobnVsbCk7XG4gICAgLy8gfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gY2xhc3NOYW1lPXtzdC5mb3JtfT5cbiAgICAgIDxpbnB1dFxuICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INCj0JjQnVwiXG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZUhhbmRsZXIoZSl9XG4gICAgICAgIG1heExlbmd0aD1cIjI1XCJcbiAgICAgIC8+XG4gICAgICB7aGludCAhPT0gbnVsbCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdC5mb3JtX19oaW50fSBvbkNsaWNrPXtvbkhpbnRDbGlja0hhbmRsZXJ9PlxuICAgICAgICAgIHtoaW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBvblN1Ym1pdEhhbmRsZXIoZSl9PtCd0LDQudGC0Lg8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY2FsY3VsYXRlQ29udHJvbENhdGVnb3J5IiwidXNlSHR0cCIsInN0IiwiRm9ybSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiZmluZSIsInNldEZpbmUiLCJoaW50Iiwic2V0SGludCIsImdldEZpbmUiLCJpc0ZldGNoaW5nIiwiZXJyb3IiLCJvbkNoYW5nZUhhbmRsZXIiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJsZW5ndGgiLCJudW1iZXIiLCJvbkhpbnRDbGlja0hhbmRsZXIiLCJvblN1Ym1pdEhhbmRsZXIiLCJyZXNwb25zZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImZvcm0iLCJjbGFzc05hbWUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm9uQ2hhbmdlIiwibWF4TGVuZ3RoIiwiZGl2IiwiZm9ybV9faGludCIsIm9uQ2xpY2siLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Form/index.js\n");

/***/ }),

/***/ "./hooks/index.js":
/*!************************!*\
  !*** ./hooks/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useHttp\": function() { return /* binding */ useHttp; }\n/* harmony export */ });\n/* harmony import */ var _home_lps_Documents_dev_test_task_nofines_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lps_Documents_dev_test_task_nofines_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lps_Documents_dev_test_task_nofines_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar useHttp = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isFetching = ref[0], setIsFetching = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), error = ref1[0], setError = ref1[1];\n    var getFine = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(_asyncToGenerator(_home_lps_Documents_dev_test_task_nofines_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var response, res;\n        return _home_lps_Documents_dev_test_task_nofines_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    setIsFetching(true);\n                    setError(null);\n                    _ctx.prev = 2;\n                    _ctx.next = 5;\n                    return fetch(\"https://test-task.shtrafovnet.com/fines/\".concat(inputValue));\n                case 5:\n                    response = _ctx.sent;\n                    _ctx.next = 8;\n                    return response.json();\n                case 8:\n                    res = _ctx.sent;\n                    return _ctx.abrupt(\"return\", res);\n                case 12:\n                    _ctx.prev = 12;\n                    _ctx.t0 = _ctx[\"catch\"](2);\n                    setError(_ctx.t0);\n                case 15:\n                    _ctx.prev = 15;\n                    setIsFetching(false);\n                    return _ctx.finish(15);\n                case 18:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                2,\n                12,\n                15,\n                18\n            ]\n        ]);\n    })), [\n        error,\n        isFetching\n    ]);\n    return {\n        isFetching: isFetching,\n        error: error,\n        getFine: getFine\n    };\n};\n_s(useHttp, \"tsJ3zt7Js023Pg8KOvmUOLLPX/Y=\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLEdBQUssQ0FBQ0UsT0FBTyxHQUFHLFFBQ3ZCLEdBRDZCLENBQUM7O0lBQzVCLEdBQUssQ0FBK0JELEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQTNDRSxVQUFVLEdBQW1CRixHQUFlLEtBQWhDRyxhQUFhLEdBQUlILEdBQWU7SUFDbkQsR0FBSyxDQUFxQkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBaENJLEtBQUssR0FBY0osSUFBYyxLQUExQkssUUFBUSxHQUFJTCxJQUFjO0lBRXhDLEdBQUssQ0FBQ00sT0FBTyxHQUFHUCxrREFBVyxxSkFBQyxRQUFRLFdBQUksQ0FBQztZQUsvQlEsUUFBUSxFQUdSQyxHQUFHOzs7O29CQVBYTCxhQUFhLENBQUMsSUFBSTtvQkFDbEJFLFFBQVEsQ0FBQyxJQUFJOzs7MkJBR1lJLEtBQUssQ0FDekIsQ0FBd0MsMENBQWEsT0FBWEMsVUFBVTs7b0JBRGpESCxRQUFROzsyQkFHSUEsUUFBUSxDQUFDSSxJQUFJOztvQkFBekJILEdBQUc7aURBRUZBLEdBQUc7Ozs7b0JBRVZILFFBQVE7OztvQkFFUkYsYUFBYSxDQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLENBQUMsSUFBRSxDQUFDQztRQUFBQSxLQUFLO1FBQUVGLFVBQVU7SUFBQSxDQUFDO0lBRXRCLE1BQU0sQ0FBQyxDQUFDO1FBQ05BLFVBQVUsRUFBVkEsVUFBVTtRQUNWRSxLQUFLLEVBQUxBLEtBQUs7UUFDTEUsT0FBTyxFQUFQQSxPQUFPO0lBQ1QsQ0FBQztBQUNILENBQUM7R0EzQllMLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvaW5kZXguanM/NDgyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IHVzZUh0dHAgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc0ZldGNoaW5nLCBzZXRJc0ZldGNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBnZXRGaW5lID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIHNldElzRmV0Y2hpbmcodHJ1ZSk7XG4gICAgc2V0RXJyb3IobnVsbCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vdGVzdC10YXNrLnNodHJhZm92bmV0LmNvbS9maW5lcy8ke2lucHV0VmFsdWV9YFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0RXJyb3IoZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc0ZldGNoaW5nKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtlcnJvciwgaXNGZXRjaGluZ10pO1xuXG4gIHJldHVybiB7XG4gICAgaXNGZXRjaGluZyxcbiAgICBlcnJvcixcbiAgICBnZXRGaW5lLFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwidXNlSHR0cCIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImdldEZpbmUiLCJyZXNwb25zZSIsInJlcyIsImZldGNoIiwiaW5wdXRWYWx1ZSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/index.js\n");

/***/ })

});