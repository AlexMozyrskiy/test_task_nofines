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

/***/ "./hooks/index.js":
/*!************************!*\
  !*** ./hooks/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useHttp\": function() { return /* binding */ useHttp; }\n/* harmony export */ });\n/* harmony import */ var _home_lps_Documents_dev_test_task_nofines_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lps_Documents_dev_test_task_nofines_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lps_Documents_dev_test_task_nofines_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar useHttp = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isFetching = ref[0], setIsFetching = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), error = ref1[0], setError = ref1[1];\n    var getFine = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(_asyncToGenerator(_home_lps_Documents_dev_test_task_nofines_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(inputValue) {\n        var response, res;\n        return _home_lps_Documents_dev_test_task_nofines_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    setIsFetching(true);\n                    setError(null);\n                    _ctx.prev = 2;\n                    _ctx.next = 5;\n                    return fetch(\"https://test-task.shtrafovnet.com/fines/\".concat(inputValue));\n                case 5:\n                    response = _ctx.sent;\n                    _ctx.next = 8;\n                    return response.json();\n                case 8:\n                    res = _ctx.sent;\n                    return _ctx.abrupt(\"return\", res);\n                case 12:\n                    _ctx.prev = 12;\n                    _ctx.t0 = _ctx[\"catch\"](2);\n                    setError(_ctx.t0);\n                case 15:\n                    _ctx.prev = 15;\n                    setIsFetching(false);\n                    return _ctx.finish(15);\n                case 18:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                2,\n                12,\n                15,\n                18\n            ]\n        ]);\n    })), [\n        error,\n        isFetching\n    ]);\n    return {\n        getFine: getFine,\n        isFetching: isFetching,\n        error: error\n    };\n};\n_s(useHttp, \"tsJ3zt7Js023Pg8KOvmUOLLPX/Y=\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLEdBQUssQ0FBQ0UsT0FBTyxHQUFHLFFBQ3ZCLEdBRDZCLENBQUM7O0lBQzVCLEdBQUssQ0FBK0JELEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQTNDRSxVQUFVLEdBQW1CRixHQUFlLEtBQWhDRyxhQUFhLEdBQUlILEdBQWU7SUFDbkQsR0FBSyxDQUFxQkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBaENJLEtBQUssR0FBY0osSUFBYyxLQUExQkssUUFBUSxHQUFJTCxJQUFjO0lBRXhDLEdBQUssQ0FBQ00sT0FBTyxHQUFHUCxrREFBVyxxSkFDekIsUUFBUSxTQUFEUSxVQUFVLEVBQUssQ0FBQztZQUtiQyxRQUFRLEVBR1JDLEdBQUc7Ozs7b0JBUFhOLGFBQWEsQ0FBQyxJQUFJO29CQUNsQkUsUUFBUSxDQUFDLElBQUk7OzsyQkFHWUssS0FBSyxDQUN6QixDQUF3QywwQ0FBYSxPQUFYSCxVQUFVOztvQkFEakRDLFFBQVE7OzJCQUdJQSxRQUFRLENBQUNHLElBQUk7O29CQUF6QkYsR0FBRztpREFFRkEsR0FBRzs7OztvQkFFVkosUUFBUTs7O29CQUVSRixhQUFhLENBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7SUFFdkIsQ0FBQyxJQUNELENBQUNDO1FBQUFBLEtBQUs7UUFBRUYsVUFBVTtJQUFBLENBQUM7SUFHckIsTUFBTSxDQUFDLENBQUM7UUFDTkksT0FBTyxFQUFQQSxPQUFPO1FBQ1BKLFVBQVUsRUFBVkEsVUFBVTtRQUNWRSxLQUFLLEVBQUxBLEtBQUs7SUFDUCxDQUFDO0FBQ0gsQ0FBQztHQTlCWUgsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy9pbmRleC5qcz80ODI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgdXNlSHR0cCA9ICgpID0+IHtcbiAgY29uc3QgW2lzRmV0Y2hpbmcsIHNldElzRmV0Y2hpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGdldEZpbmUgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAoaW5wdXRWYWx1ZSkgPT4ge1xuICAgICAgc2V0SXNGZXRjaGluZyh0cnVlKTtcbiAgICAgIHNldEVycm9yKG51bGwpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgIGBodHRwczovL3Rlc3QtdGFzay5zaHRyYWZvdm5ldC5jb20vZmluZXMvJHtpbnB1dFZhbHVlfWBcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRJc0ZldGNoaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtlcnJvciwgaXNGZXRjaGluZ11cbiAgKTtcblxuICByZXR1cm4ge1xuICAgIGdldEZpbmUsXG4gICAgaXNGZXRjaGluZyxcbiAgICBlcnJvcixcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsInVzZUh0dHAiLCJpc0ZldGNoaW5nIiwic2V0SXNGZXRjaGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJnZXRGaW5lIiwiaW5wdXRWYWx1ZSIsInJlc3BvbnNlIiwicmVzIiwiZmV0Y2giLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/index.js\n");

/***/ })

});