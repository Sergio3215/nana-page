"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/logged";
exports.ids = ["pages/api/logged"];
exports.modules = {

/***/ "(api)/./pages/api/logged.js":
/*!*****************************!*\
  !*** ./pages/api/logged.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    try {\n        const { Token  } = req.cookies;\n        console.log(Token);\n        let key = Token != undefined ? true : false;\n        console.log(key);\n        res.json({\n            success: key\n        });\n    } catch (err) {\n        // console.log(err)\n        res.json({\n            success: false\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9nZ2VkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxlQUFlQSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUU1QyxJQUFJO1FBQ0EsTUFBTSxFQUFDQyxNQUFLLEVBQUMsR0FBR0YsSUFBSUcsT0FBTztRQUMzQkMsUUFBUUMsR0FBRyxDQUFDSDtRQUVaLElBQUlJLE1BQU0sU0FBVUMsWUFBWSxJQUFJLEdBQUcsS0FBSztRQUU1Q0gsUUFBUUMsR0FBRyxDQUFDQztRQUNaTCxJQUFJTyxJQUFJLENBQUM7WUFBRUMsU0FBU0g7UUFBSTtJQUU1QixFQUFFLE9BQU9JLEtBQUs7UUFDVixtQkFBbUI7UUFDbkJULElBQUlPLElBQUksQ0FBQztZQUFFQyxTQUFTLEtBQUs7UUFBQztJQUM5QjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW5hLXBhZ2UvLi9wYWdlcy9hcGkvbG9nZ2VkLmpzPzExYWQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge1Rva2VufSA9IHJlcS5jb29raWVzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFRva2VuKTtcclxuXHJcbiAgICAgICAgbGV0IGtleSA9IChUb2tlbiAhPSB1bmRlZmluZWQpPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGtleSlcclxuICAgICAgICByZXMuanNvbih7IHN1Y2Nlc3M6IGtleSB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgcmVzLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiVG9rZW4iLCJjb29raWVzIiwiY29uc29sZSIsImxvZyIsImtleSIsInVuZGVmaW5lZCIsImpzb24iLCJzdWNjZXNzIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/logged.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/logged.js"));
module.exports = __webpack_exports__;

})();