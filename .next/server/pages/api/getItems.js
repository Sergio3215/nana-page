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
exports.id = "pages/api/getItems";
exports.ids = ["pages/api/getItems"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ "(api)/./db.js":
/*!***************!*\
  !*** ./db.js ***!
  \***************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: process.env.apiKey,\n    authDomain: process.env.authDomain,\n    projectId: process.env.projectId,\n    storageBucket: process.env.storageBucket,\n    messagingSenderId: process.env.messagingSenderId,\n    appId: process.env.appId\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebase_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVEQUF1RDtBQUNBO0FBQ1A7QUFDaERHLG9EQUF3QjtBQUN4Qiw0REFBNEQ7QUFDNUQsaUVBQWlFO0FBRWpFLHdDQUF3QztBQUN4QyxNQUFNRSxpQkFBaUI7SUFDckJDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0YsTUFBTTtJQUMxQkcsWUFBWUYsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO0lBQ2xDQyxXQUFXSCxRQUFRQyxHQUFHLENBQUNFLFNBQVM7SUFDaENDLGVBQWVKLFFBQVFDLEdBQUcsQ0FBQ0csYUFBYTtJQUN4Q0MsbUJBQW1CTCxRQUFRQyxHQUFHLENBQUNJLGlCQUFpQjtJQUNoREMsT0FBT04sUUFBUUMsR0FBRyxDQUFDSyxLQUFLO0FBQzFCO0FBR0Esc0JBQXNCO0FBQ2YsTUFBTUMsTUFBTWIsMkRBQWFBLENBQUNJLGdCQUFnQjtBQUV6QyxNQUFNVSxLQUFLYixnRUFBWUEsQ0FBQ1ksS0FBSztBQUVyQyxpRUFBZWQsb0RBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW5hLXBhZ2UvLi9kYi5qcz81NjY1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcclxuaW1wb3J0IGZpcmViYXNlLCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7Z2V0RmlyZXN0b3JlfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5yZXF1aXJlKFwiZG90ZW52XCIpLmNvbmZpZygpXHJcbi8vIFRPRE86IEFkZCBTREtzIGZvciBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxyXG4vLyBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy93ZWIvc2V0dXAjYXZhaWxhYmxlLWxpYnJhcmllc1xyXG5cclxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52LmFwaUtleSxcclxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5hdXRoRG9tYWluLFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYucHJvamVjdElkLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LnN0b3JhZ2VCdWNrZXQsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lm1lc3NhZ2luZ1NlbmRlcklkLFxyXG4gIGFwcElkOiBwcm9jZXNzLmVudi5hcHBJZFxyXG59O1xyXG5cclxuXHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuZXhwb3J0IGNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5cclxuZXhwb3J0ICBjb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2UiXSwibmFtZXMiOlsiZmlyZWJhc2UiLCJpbml0aWFsaXplQXBwIiwiZ2V0RmlyZXN0b3JlIiwicmVxdWlyZSIsImNvbmZpZyIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcCIsImRiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./db.js\n");

/***/ }),

/***/ "(api)/./pages/api/getItems.js":
/*!*******************************!*\
  !*** ./pages/api/getItems.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db */ \"(api)/./db.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nasync function handler(req, res) {\n    const { name  } = req.query;\n    const nameDB = name;\n    try {\n        //Get One by data\n        const dataCol1 = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_db__WEBPACK_IMPORTED_MODULE_0__.db, nameDB);\n        const queryConsultant = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(dataCol1, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)(\"name\", \"!=\", \"default\"));\n        const dataSnapshot1 = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(queryConsultant);\n        let dataList1 = [];\n        dataSnapshot1.forEach((doc)=>dataList1.push(doc.data()));\n        res.json({\n            data: dataList1\n        });\n    } catch (err) {\n        // console.log(err)\n        res.json({\n            data: [],\n            error: err.message,\n            success: false\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0SXRlbXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBQ2dDO0FBRTdELGVBQWVRLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDLE1BQU0sRUFBRUMsS0FBSSxFQUFFLEdBQUdGLElBQUlGLEtBQUs7SUFFMUIsTUFBTUssU0FBU0Q7SUFFZixJQUFJO1FBQ0EsaUJBQWlCO1FBQ2pCLE1BQU1FLFdBQVdQLDhEQUFVQSxDQUFDSixtQ0FBRUEsRUFBRVU7UUFDaEMsTUFBTUUsa0JBQWtCUCx5REFBS0EsQ0FBQ00sVUFBVVQseURBQUtBLENBQUMsUUFBTyxNQUFLO1FBQzFELE1BQU1XLGdCQUFnQixNQUFNWiwyREFBT0EsQ0FBQ1c7UUFDcEMsSUFBSUUsWUFBWSxFQUFFO1FBQ2xCRCxjQUFjRSxPQUFPLENBQUNaLENBQUFBLE1BQU9XLFVBQVVFLElBQUksQ0FBQ2IsSUFBSWMsSUFBSTtRQUNwRFQsSUFBSVUsSUFBSSxDQUFDO1lBQUNELE1BQU1IO1FBQVM7SUFDN0IsRUFBRSxPQUFPSyxLQUFLO1FBQ1YsbUJBQW1CO1FBQ25CWCxJQUFJVSxJQUFJLENBQUM7WUFBRUQsTUFBTSxFQUFFO1lBQUVHLE9BQU9ELElBQUlFLE9BQU87WUFBRUMsU0FBUSxLQUFLO1FBQUU7SUFDNUQ7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmFuYS1wYWdlLy4vcGFnZXMvYXBpL2dldEl0ZW1zLmpzP2Q3ODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmlyZWJhc2UsIGFwcCwgZGIgfSBmcm9tICcuLi8uLi9kYidcclxuaW1wb3J0IHsgZ2V0RG9jcywgd2hlcmUsIGRvYywgY29sbGVjdGlvbiwgcXVlcnkgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgY29uc3QgeyBuYW1lIH0gPSByZXEucXVlcnk7XHJcblxyXG4gICAgY29uc3QgbmFtZURCID0gbmFtZTtcclxuICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvL0dldCBPbmUgYnkgZGF0YVxyXG4gICAgICAgIGNvbnN0IGRhdGFDb2wxID0gY29sbGVjdGlvbihkYiwgbmFtZURCKTtcclxuICAgICAgICBjb25zdCBxdWVyeUNvbnN1bHRhbnQgPSBxdWVyeShkYXRhQ29sMSwgd2hlcmUoJ25hbWUnLFwiIT1cIixcImRlZmF1bHRcIikpO1xyXG4gICAgICAgIGNvbnN0IGRhdGFTbmFwc2hvdDEgPSBhd2FpdCBnZXREb2NzKHF1ZXJ5Q29uc3VsdGFudCk7XHJcbiAgICAgICAgbGV0IGRhdGFMaXN0MSA9IFtdO1xyXG4gICAgICAgIGRhdGFTbmFwc2hvdDEuZm9yRWFjaChkb2MgPT4gZGF0YUxpc3QxLnB1c2goZG9jLmRhdGEoKSkpO1xyXG4gICAgICAgIHJlcy5qc29uKHtkYXRhOiBkYXRhTGlzdDF9KVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIHJlcy5qc29uKHsgZGF0YTogW10sIGVycm9yOiBlcnIubWVzc2FnZSwgc3VjY2VzczpmYWxzZSAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImZpcmViYXNlIiwiYXBwIiwiZGIiLCJnZXREb2NzIiwid2hlcmUiLCJkb2MiLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibmFtZSIsIm5hbWVEQiIsImRhdGFDb2wxIiwicXVlcnlDb25zdWx0YW50IiwiZGF0YVNuYXBzaG90MSIsImRhdGFMaXN0MSIsImZvckVhY2giLCJwdXNoIiwiZGF0YSIsImpzb24iLCJlcnIiLCJlcnJvciIsIm1lc3NhZ2UiLCJzdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getItems.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getItems.js"));
module.exports = __webpack_exports__;

})();