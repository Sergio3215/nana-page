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

/***/ "./Component/Profile.jsx":
/*!*******************************!*\
  !*** ./Component/Profile.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProfileContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_style_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/style.module.css */ \"./components/style.module.css\");\n/* harmony import */ var _components_style_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_style_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _NetworkSocial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NetworkSocial */ \"./Component/NetworkSocial.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ProfileContent() {\n    _s();\n    const [token, SetToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const getLogged = async ()=>{\n        const ftch = await fetch(\"api/logged\");\n        const res = await ftch.json();\n        SetToken(res.success);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getLogged();\n    });\n    const logout = async ()=>{\n        const ftch = await fetch(\"/api/logout\");\n        window.location.reload(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: _components_style_module_css__WEBPACK_IMPORTED_MODULE_3__.ContentTitle,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Welcome to my Shop\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\other 2TB\\\\Mi Escritorio\\\\desarrollo web\\\\nana-page\\\\Component\\\\Profile.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this),\n                    \" \",\n                    token ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: logout,\n                        children: \"Logout\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\other 2TB\\\\Mi Escritorio\\\\desarrollo web\\\\nana-page\\\\Component\\\\Profile.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 54\n                    }, this) : null\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\other 2TB\\\\Mi Escritorio\\\\desarrollo web\\\\nana-page\\\\Component\\\\Profile.jsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: _components_style_module_css__WEBPACK_IMPORTED_MODULE_3__.ContentProfile,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"./image01.jpg\",\n                        className: _components_style_module_css__WEBPACK_IMPORTED_MODULE_3__.ImgProfile\n                    }, void 0, false, {\n                        fileName: \"E:\\\\other 2TB\\\\Mi Escritorio\\\\desarrollo web\\\\nana-page\\\\Component\\\\Profile.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Me\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\other 2TB\\\\Mi Escritorio\\\\desarrollo web\\\\nana-page\\\\Component\\\\Profile.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NetworkSocial__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"E:\\\\other 2TB\\\\Mi Escritorio\\\\desarrollo web\\\\nana-page\\\\Component\\\\Profile.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\other 2TB\\\\Mi Escritorio\\\\desarrollo web\\\\nana-page\\\\Component\\\\Profile.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\other 2TB\\\\Mi Escritorio\\\\desarrollo web\\\\nana-page\\\\Component\\\\Profile.jsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(ProfileContent, \"7juxUZJF5gxftEj8Q/MZHCyN12w=\");\n_c = ProfileContent;\nvar _c;\n$RefreshReg$(_c, \"ProfileContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnQvUHJvZmlsZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEM7QUFDK0M7QUFDN0M7QUFFN0IsU0FBU00saUJBQWlCOztJQUVyQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUMsS0FBSztJQUV4QyxNQUFNUSxZQUFZLFVBQVU7UUFDeEIsTUFBTUMsT0FBTyxNQUFNQyxNQUFNO1FBQ3pCLE1BQU1DLE1BQU0sTUFBTUYsS0FBS0csSUFBSTtRQUUzQkwsU0FBU0ksSUFBSUUsT0FBTztJQUN4QjtJQUNBZCxnREFBU0EsQ0FBQyxJQUFJO1FBQ1ZTO0lBQ0o7SUFFQSxNQUFNTSxTQUFTLFVBQVk7UUFDdkIsTUFBTUwsT0FBTyxNQUFNQyxNQUFNO1FBQ3pCSyxPQUFPQyxRQUFRLENBQUNDLE1BQU0sQ0FBQyxJQUFJO0lBQy9CO0lBRUEscUJBQ0k7OzBCQUNJLDhEQUFDQztnQkFBSUMsV0FBV2hCLHNFQUFZQTs7a0NBQ3hCLDhEQUFDaUI7a0NBQUc7Ozs7OztvQkFBdUI7b0JBQUdkLHNCQUFPLDhEQUFDZTt3QkFBT0MsU0FBU1I7a0NBQVE7Ozs7OytCQUFnQixJQUFJOzs7Ozs7OzBCQUV0Riw4REFBQ0k7Z0JBQUlDLFdBQVdqQix3RUFBY0E7O2tDQUMxQiw4REFBQ3FCO3dCQUFJQyxLQUFJO3dCQUFnQkwsV0FBV2xCLG9FQUFVQTs7Ozs7O2tDQUM5Qyw4REFBQ3dCO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNBO2tDQUFHLDRFQUFDckIsc0RBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEMsQ0FBQztHQS9CdUJDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudC9Qcm9maWxlLmpzeD9jM2NjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbWdQcm9maWxlLCBDb250ZW50UHJvZmlsZSwgQ29udGVudFRpdGxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zdHlsZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgTmV0d29ya1NvY2lhbCBmcm9tICcuL05ldHdvcmtTb2NpYWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZUNvbnRlbnQoKSB7XHJcblxyXG4gICAgY29uc3QgW3Rva2VuLCBTZXRUb2tlbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZ2V0TG9nZ2VkID0gYXN5bmMgKCk9PntcclxuICAgICAgICBjb25zdCBmdGNoID0gYXdhaXQgZmV0Y2goJ2FwaS9sb2dnZWQnKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmdGNoLmpzb24oKTtcclxuXHJcbiAgICAgICAgU2V0VG9rZW4ocmVzLnN1Y2Nlc3MpO1xyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZ2V0TG9nZ2VkKCk7XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBmdGNoID0gYXdhaXQgZmV0Y2goJy9hcGkvbG9nb3V0Jyk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtDb250ZW50VGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgPGgxPldlbGNvbWUgdG8gbXkgU2hvcDwvaDE+IHsodG9rZW4pPzxidXR0b24gb25DbGljaz17bG9nb3V0fT5Mb2dvdXQ8L2J1dHRvbj46bnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtDb250ZW50UHJvZmlsZX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2UwMS5qcGdcIiBjbGFzc05hbWU9e0ltZ1Byb2ZpbGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8aDI+TWU8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGgyPjxOZXR3b3JrU29jaWFsLz48L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltZ1Byb2ZpbGUiLCJDb250ZW50UHJvZmlsZSIsIkNvbnRlbnRUaXRsZSIsIk5ldHdvcmtTb2NpYWwiLCJQcm9maWxlQ29udGVudCIsInRva2VuIiwiU2V0VG9rZW4iLCJnZXRMb2dnZWQiLCJmdGNoIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwic3VjY2VzcyIsImxvZ291dCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Component/Profile.jsx\n"));

/***/ })

});