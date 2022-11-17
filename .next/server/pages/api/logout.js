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
exports.id = "pages/api/logout";
exports.ids = ["pages/api/logout"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "(api)/./pages/api/logout.js":
/*!*****************************!*\
  !*** ./pages/api/logout.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst cookie = __webpack_require__(/*! cookie */ \"cookie\");\nconst createToken = (userToken, secretWord, expiresIn)=>{\n    // console.log(userToken);\n    const { __id , email , password , account , name  } = userToken;\n    return jwt.sign({\n        __id,\n        email,\n        name,\n        account,\n        password\n    }, secretWord, {\n        expiresIn\n    });\n};\nasync function handler(req, res) {\n    try {\n        res.status(200).setHeader(\"Set-Cookie\", cookie.serialize(\"Token\", null, {\n            httpOnly: true,\n            secure: process.env.MODE == \"prod\",\n            maxAge: 0,\n            sameSite: \"strict\",\n            path: \"/\"\n        })).json({\n            success: true\n        });\n    } catch (err) {\n        // console.log(err)\n        res.json({\n            data: [],\n            error: err.message,\n            success: false\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9nb3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxTQUFTQyxtQkFBT0EsQ0FBQztBQUV2QixNQUFNQyxjQUFjLENBQUNDLFdBQVdDLFlBQVlDLFlBQWM7SUFDdEQsMEJBQTBCO0lBQzFCLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRUMsUUFBTyxFQUFFQyxLQUFJLEVBQUUsR0FBR1A7SUFDakQsT0FBT1EsSUFBSUMsSUFBSSxDQUFDO1FBQUVOO1FBQU1DO1FBQU9HO1FBQU1EO1FBQVNEO0lBQVMsR0FBR0osWUFBWTtRQUFFQztJQUFVO0FBQ3RGO0FBRWUsZUFBZVEsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFNUMsSUFBSTtRQUNJQSxJQUFJQyxNQUFNLENBQUMsS0FBS0MsU0FBUyxDQUFDLGNBQWNqQixPQUFPa0IsU0FBUyxDQUFDLFNBQVMsSUFBSSxFQUFFO1lBQ3BFQyxVQUFVLElBQUk7WUFDZEMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxJQUFJLElBQUk7WUFDNUJDLFFBQVE7WUFDUkMsVUFBVTtZQUNWQyxNQUFNO1FBQ1YsSUFBSUMsSUFBSSxDQUFDO1lBQUNDLFNBQVEsSUFBSTtRQUFDO0lBRS9CLEVBQUUsT0FBT0MsS0FBSztRQUNWLG1CQUFtQjtRQUNuQmQsSUFBSVksSUFBSSxDQUFDO1lBQUVHLE1BQU0sRUFBRTtZQUFFQyxPQUFPRixJQUFJRyxPQUFPO1lBQUVKLFNBQVEsS0FBSztRQUFFO0lBQzVEO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25hbmEtcGFnZS8uL3BhZ2VzL2FwaS9sb2dvdXQuanM/MzY0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb29raWUgPSByZXF1aXJlKCdjb29raWUnKTtcclxuXHJcbmNvbnN0IGNyZWF0ZVRva2VuID0gKHVzZXJUb2tlbiwgc2VjcmV0V29yZCwgZXhwaXJlc0luKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyVG9rZW4pO1xyXG4gICAgY29uc3QgeyBfX2lkLCBlbWFpbCwgcGFzc3dvcmQsIGFjY291bnQsIG5hbWUgfSA9IHVzZXJUb2tlbjtcclxuICAgIHJldHVybiBqd3Quc2lnbih7IF9faWQsIGVtYWlsLCBuYW1lLCBhY2NvdW50LCBwYXNzd29yZCB9LCBzZWNyZXRXb3JkLCB7IGV4cGlyZXNJbiB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCBjb29raWUuc2VyaWFsaXplKCdUb2tlbicsIG51bGwsIHtcclxuICAgICAgICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5NT0RFID09ICdwcm9kJyxcclxuICAgICAgICAgICAgICAgIG1heEFnZTogMCxcclxuICAgICAgICAgICAgICAgIHNhbWVTaXRlOiAnc3RyaWN0JyxcclxuICAgICAgICAgICAgICAgIHBhdGg6ICcvJ1xyXG4gICAgICAgICAgICB9KSkuanNvbih7c3VjY2Vzczp0cnVlIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICByZXMuanNvbih7IGRhdGE6IFtdLCBlcnJvcjogZXJyLm1lc3NhZ2UsIHN1Y2Nlc3M6ZmFsc2UgIH0pO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImNvb2tpZSIsInJlcXVpcmUiLCJjcmVhdGVUb2tlbiIsInVzZXJUb2tlbiIsInNlY3JldFdvcmQiLCJleHBpcmVzSW4iLCJfX2lkIiwiZW1haWwiLCJwYXNzd29yZCIsImFjY291bnQiLCJuYW1lIiwiand0Iiwic2lnbiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJzZXRIZWFkZXIiLCJzZXJpYWxpemUiLCJodHRwT25seSIsInNlY3VyZSIsInByb2Nlc3MiLCJlbnYiLCJNT0RFIiwibWF4QWdlIiwic2FtZVNpdGUiLCJwYXRoIiwianNvbiIsInN1Y2Nlc3MiLCJlcnIiLCJkYXRhIiwiZXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/logout.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/logout.js"));
module.exports = __webpack_exports__;

})();