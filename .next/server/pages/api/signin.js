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
exports.id = "pages/api/signin";
exports.ids = ["pages/api/signin"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

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

/***/ "(api)/./pages/api/signin.js":
/*!*****************************!*\
  !*** ./pages/api/signin.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db */ \"(api)/./db.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([_db__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nasync function handler(req, res) {\n    const { user , email , password , name  } = req.query;\n    let success = false;\n    try {\n        const salt = await bcrypt.genSalt(10);\n        const passwordHashed = await bcrypt.hash(password, salt);\n        const collectionDoc = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_db__WEBPACK_IMPORTED_MODULE_0__.db, \"User\");\n        const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(collectionDoc, {\n            name: name,\n            user: user,\n            password: passwordHashed,\n            email: email\n        });\n        console.log(\"Document written with ID: \", docRef.id);\n        //Update\n        const docUpdated = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_db__WEBPACK_IMPORTED_MODULE_0__.db, \"User\", docRef.id), {\n            __id: docRef.id\n        });\n        success = true;\n    } catch (error) {\n        console.log(error);\n    }\n    res.json({\n        success: success\n    });\n} /*\r\n    //Post\r\n  try {\r\n    const docRef = await addDoc(collection(db, \"Task\"), {\r\n      name: \"Prueba 1\",\r\n      date: \"25/08/2022\"\r\n    });\r\n    console.log(\"Document written with ID: \", docRef.id);\r\n\r\n    //Update\r\n    const docUpdated = await updateDoc(doc(db, \"Task\", docRef.id),{\r\n      __id:docRef.id\r\n    })\r\n\r\n    //Get One\r\n    try {\r\n    const docGetOne = await getDoc(doc(db, \"Task\", docRef.id))\r\n    console.log(docGetOne.data());\r\n    } catch (err) {\r\n      console.log(err)\r\n    }\r\n\r\n    //Get One by data\r\n    // const taskCol1 = collection(db, 'Task');\r\n    // const queryConsultant = query(taskCol1, where('name',\"==\",\"Prueba\"));\r\n    // const taskSnapshot1 = await getDocs(queryConsultant);\r\n    // let taskList1;\r\n    // taskSnapshot1.forEach(doc => taskList1 = doc.data());\r\n    // console.log(taskList1)\r\n    // console.log(taskList1 != undefined)\r\n\r\n\r\n    //Delete\r\n    await deleteDoc(doc(db,\"Task\",docRef.id))\r\n\r\n  } catch (e) {\r\n    console.error(\"Error adding document: \", e);\r\n  }\r\n    //Get\r\n  const taskCol = collection(db, 'Task');\r\n  const taskSnapshot = await getDocs(taskCol);\r\n  const taskList = taskSnapshot.docs.map(doc => doc.data());\r\n  res.status(200).json(taskList)\r\n */ \n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2lnbmluLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QztBQUN5QjtBQUNyRSxNQUFNTyxTQUFTQyxtQkFBT0EsQ0FBQztBQUVSLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDLE1BQU0sRUFBQ0MsS0FBSSxFQUFDQyxNQUFLLEVBQUNDLFNBQVEsRUFBQ0MsS0FBSSxFQUFDLEdBQUdMLElBQUlNLEtBQUs7SUFFNUMsSUFBSUMsVUFBVSxLQUFLO0lBQ25CLElBQUk7UUFDRixNQUFNQyxPQUFPLE1BQU1YLE9BQU9ZLE9BQU8sQ0FBQztRQUNsQyxNQUFNQyxpQkFBaUIsTUFBTWIsT0FBT2MsSUFBSSxDQUFDUCxVQUFVSTtRQUduRCxNQUFNSSxnQkFBZ0JqQiw4REFBVUEsQ0FBQ0gsbUNBQUVBLEVBQUU7UUFFckMsTUFBTXFCLFNBQVMsTUFBTXBCLDBEQUFNQSxDQUFDbUIsZUFBZTtZQUN6Q1AsTUFBTUE7WUFDTkgsTUFBS0E7WUFDTEUsVUFBU007WUFDVFAsT0FBTUE7UUFDUjtRQUNBVyxRQUFRQyxHQUFHLENBQUMsOEJBQThCRixPQUFPRyxFQUFFO1FBRW5ELFFBQVE7UUFDUixNQUFNQyxhQUFhLE1BQU1yQiw2REFBU0EsQ0FBQ0YsdURBQUdBLENBQUNGLG1DQUFFQSxFQUFFLFFBQVFxQixPQUFPRyxFQUFFLEdBQUU7WUFDNURFLE1BQUtMLE9BQU9HLEVBQUU7UUFDaEI7UUFFQVQsVUFBVSxJQUFJO0lBRWhCLEVBQUUsT0FBT1ksT0FBTztRQUNkTCxRQUFRQyxHQUFHLENBQUNJO0lBQ2Q7SUFFQWxCLElBQUltQixJQUFJLENBQUM7UUFBRWIsU0FBU0E7SUFBUTtBQUNoQyxDQUFDLENBR0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW5hLXBhZ2UvLi9wYWdlcy9hcGkvc2lnbmluLmpzPzZkZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmlyZWJhc2UsIGFwcCwgZGIgfSBmcm9tICcuLi8uLi9kYidcclxuaW1wb3J0IHsgYWRkRG9jLGRvYywgY29sbGVjdGlvbix1cGRhdGVEb2N9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmNvbnN0IGJjcnlwdCA9IHJlcXVpcmUoJ2JjcnlwdCcpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgY29uc3Qge3VzZXIsZW1haWwscGFzc3dvcmQsbmFtZX0gPSByZXEucXVlcnk7XHJcbiAgICBcclxuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzYWx0ID0gYXdhaXQgYmNyeXB0LmdlblNhbHQoMTApXHJcbiAgICAgIGNvbnN0IHBhc3N3b3JkSGFzaGVkID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIHNhbHQpO1xyXG5cclxuXHJcbiAgICAgIGNvbnN0IGNvbGxlY3Rpb25Eb2MgPSBjb2xsZWN0aW9uKGRiLCBcIlVzZXJcIik7XHJcblxyXG4gICAgICBjb25zdCBkb2NSZWYgPSBhd2FpdCBhZGREb2MoY29sbGVjdGlvbkRvYywge1xyXG4gICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgdXNlcjp1c2VyLFxyXG4gICAgICAgIHBhc3N3b3JkOnBhc3N3b3JkSGFzaGVkLFxyXG4gICAgICAgIGVtYWlsOmVtYWlsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkRvY3VtZW50IHdyaXR0ZW4gd2l0aCBJRDogXCIsIGRvY1JlZi5pZCk7XHJcbiAgXHJcbiAgICAgIC8vVXBkYXRlXHJcbiAgICAgIGNvbnN0IGRvY1VwZGF0ZWQgPSBhd2FpdCB1cGRhdGVEb2MoZG9jKGRiLCBcIlVzZXJcIiwgZG9jUmVmLmlkKSx7XHJcbiAgICAgICAgX19pZDpkb2NSZWYuaWRcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICByZXMuanNvbih7IHN1Y2Nlc3M6IHN1Y2Nlc3MgfSk7XHJcbn1cclxuXHJcblxyXG4vKlxyXG4gICAgLy9Qb3N0XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRvY1JlZiA9IGF3YWl0IGFkZERvYyhjb2xsZWN0aW9uKGRiLCBcIlRhc2tcIiksIHtcclxuICAgICAgbmFtZTogXCJQcnVlYmEgMVwiLFxyXG4gICAgICBkYXRlOiBcIjI1LzA4LzIwMjJcIlxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkRvY3VtZW50IHdyaXR0ZW4gd2l0aCBJRDogXCIsIGRvY1JlZi5pZCk7XHJcblxyXG4gICAgLy9VcGRhdGVcclxuICAgIGNvbnN0IGRvY1VwZGF0ZWQgPSBhd2FpdCB1cGRhdGVEb2MoZG9jKGRiLCBcIlRhc2tcIiwgZG9jUmVmLmlkKSx7XHJcbiAgICAgIF9faWQ6ZG9jUmVmLmlkXHJcbiAgICB9KVxyXG5cclxuICAgIC8vR2V0IE9uZVxyXG4gICAgdHJ5IHtcclxuICAgIGNvbnN0IGRvY0dldE9uZSA9IGF3YWl0IGdldERvYyhkb2MoZGIsIFwiVGFza1wiLCBkb2NSZWYuaWQpKVxyXG4gICAgY29uc29sZS5sb2coZG9jR2V0T25lLmRhdGEoKSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfVxyXG5cclxuICAgIC8vR2V0IE9uZSBieSBkYXRhXHJcbiAgICAvLyBjb25zdCB0YXNrQ29sMSA9IGNvbGxlY3Rpb24oZGIsICdUYXNrJyk7XHJcbiAgICAvLyBjb25zdCBxdWVyeUNvbnN1bHRhbnQgPSBxdWVyeSh0YXNrQ29sMSwgd2hlcmUoJ25hbWUnLFwiPT1cIixcIlBydWViYVwiKSk7XHJcbiAgICAvLyBjb25zdCB0YXNrU25hcHNob3QxID0gYXdhaXQgZ2V0RG9jcyhxdWVyeUNvbnN1bHRhbnQpO1xyXG4gICAgLy8gbGV0IHRhc2tMaXN0MTtcclxuICAgIC8vIHRhc2tTbmFwc2hvdDEuZm9yRWFjaChkb2MgPT4gdGFza0xpc3QxID0gZG9jLmRhdGEoKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0YXNrTGlzdDEpXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0YXNrTGlzdDEgIT0gdW5kZWZpbmVkKVxyXG5cclxuXHJcbiAgICAvL0RlbGV0ZVxyXG4gICAgYXdhaXQgZGVsZXRlRG9jKGRvYyhkYixcIlRhc2tcIixkb2NSZWYuaWQpKVxyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIGRvY3VtZW50OiBcIiwgZSk7XHJcbiAgfVxyXG4gICAgLy9HZXRcclxuICBjb25zdCB0YXNrQ29sID0gY29sbGVjdGlvbihkYiwgJ1Rhc2snKTtcclxuICBjb25zdCB0YXNrU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHRhc2tDb2wpO1xyXG4gIGNvbnN0IHRhc2tMaXN0ID0gdGFza1NuYXBzaG90LmRvY3MubWFwKGRvYyA9PiBkb2MuZGF0YSgpKTtcclxuICByZXMuc3RhdHVzKDIwMCkuanNvbih0YXNrTGlzdClcclxuICovIl0sIm5hbWVzIjpbImZpcmViYXNlIiwiYXBwIiwiZGIiLCJhZGREb2MiLCJkb2MiLCJjb2xsZWN0aW9uIiwidXBkYXRlRG9jIiwiYmNyeXB0IiwicmVxdWlyZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ1c2VyIiwiZW1haWwiLCJwYXNzd29yZCIsIm5hbWUiLCJxdWVyeSIsInN1Y2Nlc3MiLCJzYWx0IiwiZ2VuU2FsdCIsInBhc3N3b3JkSGFzaGVkIiwiaGFzaCIsImNvbGxlY3Rpb25Eb2MiLCJkb2NSZWYiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJkb2NVcGRhdGVkIiwiX19pZCIsImVycm9yIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/signin.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/signin.js"));
module.exports = __webpack_exports__;

})();